// import 'font-awesome-icons'
import 'font-awesome/css/font-awesome.css'

// OpenLayers Styles
import 'ol/ol.css';

// Framework7 Styles
import './assets/css/framework7.min.css';
import './assets/css/app2.css';
import './assets/css/styles.css';

// Framework7 Script
import Framework7, { Dom7, Template7 } from 'framework7/framework7.esm.bundle.js';

// Framework7 Routes 정보
import routes from './routes';

// Map Module
import Map from './modules/Map';

// Dom7
const $$ = Dom7;

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
      data: function() {
        return {
          modules: {},
          user: {
            firstName: 'John',
            lastName: 'Doe',
          },
          handler: {}
        };
      },
      methods: {
        helloWorld: function() {
          app.dialog.alert('Hello World!');
        },

        initMap: function() {
          const {data} = this;
          data.modules.map = new Map('map');
        }
      },
      routes,
      vi: {
        placementId: 'pltd4o7ibb9rc653x14',
      },
      on: {
        init: function() {
          console.log('init');
          this.methods.initMap.call(this);
        },
        routerAjaxStart: function(xhr, options) {
          this.preloader.show();
        },
        routerAjaxComplete: function(xhr, options) {
          this.preloader.hide();
        }
      }
    });
  }
}