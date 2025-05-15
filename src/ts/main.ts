import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../scss/style.scss';
import { initBurgerMenu } from './header.ts';
import { loadFragment } from './utils/loadFragment.ts';
import { FirebaseService } from './services/FirebaseService.ts';
import { Car } from './models/Car.ts';

const carImages = document.querySelectorAll('#car-image') as NodeListOf<HTMLImageElement>
const carNames = document.querySelectorAll('#car-name') as NodeListOf<HTMLHeadingElement>
const carPrice = document.querySelectorAll('#car-price') as NodeListOf<HTMLHeadingElement>
const carCards = document.querySelectorAll('.cars__card') as NodeListOf<HTMLDivElement>



document.addEventListener("DOMContentLoaded", async function () {
  await loadFragment("header", "./includes/header.html", initBurgerMenu)
  await loadFragment("footer", "./includes/footer.html")

  const newCars = await FirebaseService.getCarsByType(["new-car", "new-electric"]);
  const usedCars = await FirebaseService.getCarsByType(["used-car", "used-electric"])
  updateCards(newCars as Car[], usedCars as Car[])

})

function updateCards(newCars: Car[], usedCars: Car[]) {
  let usedCarCardIndex = 0;
  for(let i = 0; i< carCards.length; i++){
    console.log(carCards[i])
    if(newCars && newCars[i] !== null){
      if(carCards[i].classList.contains('used-car')){
        //carImages[i].src = usedCars[usedCarCardIndex].getImageUrl()[0]
        carNames[i].innerHTML = usedCars[usedCarCardIndex].getModel()
        carPrice[i].innerHTML = `$${usedCars[usedCarCardIndex].getPrice()}`
        carCards[i].dataset.id = usedCars[usedCarCardIndex].getId()
        usedCarCardIndex++
      }else{
        carImages[i].src = newCars[i].getImageUrl()[0]
        carNames[i].innerHTML = newCars[i].getModel()
        carPrice[i].innerHTML = `$${newCars[i].getPrice()}`
        carCards[i].dataset.id = newCars[i].getId()
      }
  
    }else{
      console.error("Не данных")
    }
  }
}

carCards.forEach(card => {
  card.addEventListener('click', () => {
    const cardId = card.getAttribute('data-id')

    if(cardId){
      window.location.href = `detail.html?id=${cardId}`
    }
  })
})

new Swiper(".reviews__swiper", {
  modules: [Navigation],
  navigation: {
    nextEl: ".reviews-arrow-next",
    prevEl: ".reviews-arrow-back",
  },
});

new Swiper(".cars__wrapper", {
modules: [Navigation],

navigation: {
  nextEl: ".cars__navigation-arrow-next",
  prevEl: ".cars__navigation-arrow-back"
}
})