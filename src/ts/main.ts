import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../scss/style.scss';
import './header.ts'
import { initBurgerMenu } from './header.ts';
import { loadFragment } from './utils/loadFragment.ts';
import firebase from 'firebase/compat/app';
import { FirebaseService } from './services/FirebaseService.ts';
import { newCarsArray } from './models.ts';
import { newElectricCarsArray } from './models.ts';
import { Car } from './models/Car.ts';

const carImages = document.querySelectorAll('#car-image') as NodeListOf<HTMLImageElement>
const carNames = document.querySelectorAll('#car-name') as NodeListOf<HTMLHeadingElement>
const carPrice = document.querySelectorAll('#car-price') as NodeListOf<HTMLHeadingElement>
const carCards = document.querySelectorAll('.cars__card') as NodeListOf<HTMLDivElement>


document.addEventListener("DOMContentLoaded", async function () {
  await loadFragment("header", "./includes/header.html", initBurgerMenu)
  await loadFragment("footer", "./includes/footer.html")

  const recCars = await FirebaseService.getRecommendedCars();
  console.log(recCars);



  function updateReccoms(cars: Car[]) {
    for(let i = 0; i< carCards.length; i++){
      if(recCars && recCars[i] !== null){
        carImages[i].src = recCars[i].getImageUrl()[0]
        carNames[i].innerHTML = recCars[i].getModel()
        carPrice[i].innerHTML = `$${recCars[i].getPrice()}`
        carCards[i].dataset.id = recCars[i].getId()
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

  updateReccoms(recCars as Car[])


  new Swiper(".reviews__swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});