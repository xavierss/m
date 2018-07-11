// import 'font-awesome-icons'
import 'font-awesome/css/font-awesome.css'

// OpenLayers Styles
import 'ol/ol.css';

// Framework7 Styles
import 'framework7/dist/css/framework7.css';
import './assets/css/app.css';
import './assets/css/styles.css';

// Framework7 Script
import routes from './routes';
import Framework7, { Dom7, Template7 } from 'framework7/dist/framework7.esm.bundle.js';

// Map Module
import Map from './modules/Map';

// Dom7
const $ = Dom7;

export default class {
  constructor(id) {
    // Theme
    let theme = 'ios';
    if (document.location.search.indexOf('theme=') >= 0) {
      theme = document.location.search.split('theme=')[1].split('&')[0];
    }
    
    // Init App
    this.app = new Framework7({
      id: 'myapp',
      root: id,
      theme,
      data: () => {
        return {
          map: null,
          user: {
            firstName: 'John',
            lastName: 'Doe',
          },
        };
      },
      methods: {
        helloWorld: () => {
          app.dialog.alert('Hello World!');
        },
      },
      routes,
      vi: {
        placementId: 'pltd4o7ibb9rc653x14',
      },
      on: {
        pageInit: (page) => {
          console.log('pageInit');
          const {app: { data }} = page;
          data.map = new Map('map');
        },
        
        routerAjaxStart: (xhr, options) => {
          app.app.preloader.show();
        },

        routerAjaxComplete: (xhr, options) => {
          app.app.preloader.hide();
        }
      }
    });
  }
}