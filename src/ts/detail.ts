import '../scss/style.scss';
import { initBurgerMenu } from './header';
import { loadFragment } from './utils/loadFragment';
import { FirebaseService } from './services/FirebaseService';
import { DialogManager } from './menagers/DialogManager';
import { NewCar } from './models/NewCar';
import { UsedCar } from './models/UsedCar';
import { UsedElectricCar } from './models/UsedElectricCar';
import { NewElectricCar } from './models/NewElectricCar';
import { EmailService } from './services/EmailService';
import { Car } from './models/Car';

const carName = document.querySelector('#car-name') as HTMLHeadingElement
const carPrice = document.querySelector('#price') as HTMLHeadingElement
const carDesc = document.getElementById('car-desc') as HTMLParagraphElement
const carSpecs = document.querySelectorAll('.car-spec') as NodeListOf<HTMLLIElement>
const carFeaturesTitle = document.querySelectorAll('#car-feat-title') as NodeListOf<HTMLHeadingElement>
const carFeaturesDesc = document.querySelectorAll('#car-feat-desc') as NodeListOf<HTMLParagraphElement>
const carAddSpecs = document.querySelectorAll('.car-add-spec') as NodeListOf<HTMLLIElement>
const mileage = document.querySelector('.mileage') as HTMLLIElement
const warrantyYears = document.querySelector('.warranty-years') as HTMLLIElement
const electricBattery = document.querySelector('.electric-battery') as HTMLLIElement
const electricChargeTime = document.querySelector('.electric-charge-time') as HTMLLIElement

const carMainImg = document.querySelector('.main__img') as HTMLImageElement
const carRowImg = document.querySelectorAll('.image__row') as NodeListOf<HTMLImageElement>

const buyButton = document.querySelector('#sell-button') as HTMLButtonElement
const confirmBtn = document.querySelector('.dialog__confirm-button') as HTMLButtonElement
const cancelDialogBtn = document.querySelector('.dialog__cancel-button') as HTMLButtonElement
const dialog = document.querySelector('.buy-dialog') as HTMLDialogElement

carAddSpecs.forEach(element => {
    element.classList.add('dsp-none')
});


const dialogManager: DialogManager = new DialogManager(dialog)



buyButton.addEventListener('click', () => {
    dialogManager.show()
})

cancelDialogBtn.addEventListener('click', () => {
    dialogManager.close()
})

confirmBtn.addEventListener('click', async () => {
    const email = (document.getElementById('email-input') as HTMLInputElement).value;
    const carId = getCarIdFromUrl();
  
    if (!carId) {
      console.error("No car ID found in URL");
      return;
    }
  
    const car = await FirebaseService.getCar(carId);
  
    if (!car) {
      console.error("Car not found in database");
      return;
    }
  
    const emailService = new EmailService();
    emailService.requestPurchase(email, car);
})




function getCarIdFromUrl(): string | null {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

async function loadCar() {
    const carId = getCarIdFromUrl()
    if (!carId) {
        console.log("Данные не найдены")
    }

    const car = await FirebaseService.getCar(carId as string)

    carName.innerHTML = car?.getModel() as string
    carPrice.innerHTML = String(`${car?.getPrice()}$`)
    carDesc.innerHTML = car?.getDescription() as string
    carSpecs.forEach((spec, index) => {
        spec.textContent = car?.getSpecs()[index].value as string
    })

    switch (car?.getType()) {
        case "new-car":
            warrantyYears.classList.remove('dsp-none')
            warrantyYears.innerHTML = "Warranty Years: " + String((car as NewCar).getWarrantyYears())
            break
        case "used-car":
            mileage.classList.remove('dsp-none')
            mileage.innerHTML = "Mileage: " + String((car as UsedCar).getMileage()) + " miles"
            break
        case "used-electric":
            mileage.classList.remove('dsp-none')
            electricBattery.classList.remove('dsp-none')
            electricChargeTime.classList.remove('dsp-none')
            mileage.innerHTML = "Mileage: " + String((car as UsedElectricCar).getMileage()) + " miles"
            electricBattery.innerHTML = "Battery Capacity: " + String((car as UsedElectricCar).getBatteryCapacity()) + "%"
            electricChargeTime.innerHTML = "Charge Time: " + String((car as UsedElectricCar).getChargeTime()) + "min"
            break
        case "new-electric":
            electricBattery.classList.remove('dsp-none')
            electricChargeTime.classList.remove('dsp-none')
            warrantyYears.classList.remove('dsp-none')
            warrantyYears.innerHTML = "Warranty Years: " + String((car as NewElectricCar).getWarrantyYears())
            electricBattery.innerHTML = "Battery Capacity: " + String((car as NewElectricCar).getBatteryCapacity()) + "%"
            electricChargeTime.innerHTML = "Charge Time: " + String((car as NewElectricCar).getChargeTime()) + " min"
    }


    carFeaturesTitle.forEach((element, index) => {
        element.innerHTML = car?.getFeatures()[index].title as string
    });

    carFeaturesDesc.forEach((element, index) => {
        element.textContent = car?.getFeatures()[index].description as string
    })

    console.log(car?.getFeatures())
}

loadCar()



loadFragment("header", "../includes/header.html", initBurgerMenu)
loadFragment("footer", "../includes/footer.html")





