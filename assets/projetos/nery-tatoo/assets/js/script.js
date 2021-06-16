/*Slide*/
import Slide from './modules/slide.js';
const slide = new Slide('.slide', '.slide-wrapper');
slide.init();
slide.changeSlide(0);
slide.activePrevSlide();

/*Header-animation*/
import Header from './modules/header.js'
Header()

/*menuMobile*/
import menuMobile from './modules/menuMobile.js';
menuMobile();