import '../scss/style.scss';
import { initBurgerMenu } from './header';
import { loadFragment } from './utils/loadFragment';



loadFragment("header", "../includes/header.html", initBurgerMenu)
loadFragment("footer", "../includes/footer.html")





