import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../scss/style.scss';
import './header.ts'
import { initBurgerMenu } from './header.ts';
import { loadFragment } from './utils/loadFragment.ts';

const carImages = document.querySelectorAll('#car-image') as NodeListOf<HTMLImageElement>
const carNames = document.querySelectorAll('#car-name') as NodeListOf<HTMLHeadingElement>
const carPrice = document.querySelectorAll('#car-price') as NodeListOf<HTMLHeadingElement>




document.addEventListener("DOMContentLoaded", function () {
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

  loadFragment("header", "./includes/header.html", initBurgerMenu)
  loadFragment("footer", "./includes/footer.html")
