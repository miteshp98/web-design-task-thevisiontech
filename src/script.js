import { toggleNav } from './js/toggleNavbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

function initApp() {
  toggleNav();
  AOS.init();
}

initApp();
