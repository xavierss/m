import Framework7, { Device, Request, Dom7, Template7 } from 'framework7';
import 'framework7/dist/css/framework7.css'
import './assets/css/App.css'

// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'my.mobile',
  root: '#app',
  theme: theme
});
