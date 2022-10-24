import './vendor';
import './helpers';
import './components/social';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import {actualYear} from './modules/actualYear';
import header from './components/header';
import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';
import backToTop from "./modules/backToTop";
import preloader2 from "./modules/preloader2";
import scrollPerson from "./modules/scrollPerson"

ieFix();
vhFix();
actualYear();
scrollToAnchor.init();
backToTop.init();
// preloader2.init();
scrollPerson.init();

header.init();
lazyLoading.init();
