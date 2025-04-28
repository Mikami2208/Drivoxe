import '../scss/style.scss';
import { initBurgerMenu } from './header';
import { loadFragment } from './utils/loadFragment';
import { FirebaseService } from './services/FirebaseService';
import { db } from './services/firebase';
import { collection } from 'firebase/firestore';

const carName = document.querySelector('#car-name') as HTMLHeadingElement
const carPrice = document.querySelector('#price') as HTMLHeadingElement
const carDesc = document.getElementById('car-desc') as HTMLParagraphElement
const carSpecs = document.querySelectorAll('.car-spec') as NodeListOf<HTMLLIElement>
const carFeaturesTitle = document.querySelectorAll('#car-feat-title') as NodeListOf<HTMLHeadingElement>
const carFeaturesDesc = document.querySelectorAll('#car-feat-desc') as NodeListOf<HTMLParagraphElement>

const carMainImg = document.querySelector('.main__img') as HTMLImageElement
const carRowImg = document.querySelectorAll('.image__row') as NodeListOf<HTMLImageElement>





function getCarIdFromUrl(): string | null {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
  }

 async function loadCar(){
    const carId = getCarIdFromUrl()
    if(!carId){
        console.log("Данные не найдены")
    }

    const car = await FirebaseService.getCar(carId as string)

    carName.innerHTML = car?.getModel() as string
    carPrice.innerHTML = String(`${car?.getPrice()}$`) 
    carDesc.innerHTML = car?.getDescription() as string
    carSpecs.forEach((spec, index) => {
        spec.textContent = car?.getSpecs()[index].value as string
    })

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





