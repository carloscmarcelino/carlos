/*Slide*/
import Slide from './modules/slide.js';
const slide = new Slide('.slide', '.slide-wrapper');
slide.init();
slide.changeSlide(0);
slide.activePrevSlide();

/*Header-animation*/
import Header from './modules/header.js'
Header()

/*ScrollReveal*/
import scrollReveal from './modules/scrollReveal.js'
scrollReveal()