// import './assets/styles/_app.scss';
import Global from './views/components/global/global';
import Header from './views/components/header/header';
import Menu from './views/components/menu/menu';
require('normalize.css');
require('jquery');
require('slick-carousel');
$(() => {
  // Code here
});

$(document).ready(() => {
  Global.lazyLoad();
});

$(window).on('resize', () => {
  setTimeout(() => {
    Global.lazyLoad();
  }, 250);
});

window.onload = () => {
  // Menu.megaMenu('.drop-2 > li');
  Menu.saveActive('.drop-2 >li');
  Header.showButton();
};
