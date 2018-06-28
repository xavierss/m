// import 'font-awesome-icons'
import 'font-awesome/css/font-awesome.css'
// OpenLayers Styles
import 'ol/ol.css';

// Framework7 Styles
import 'framework7/dist/css/framework7.css';
import './assets/css/App.css';
import './assets/css/Framework7-Custom.css';

// OpenLayers Script
import Map from 'ol/map';

// Framework7 Script
import routes from './routes';
import Framework7, {Dom7, Template7} from 'framework7/dist/framework7.esm.bundle.js';

// Dom7
const $ = Dom7;

export default class {
  constructor(id) {
    // Theme
    let theme = 'md';
    if (document.location.search.indexOf('theme=') >= 0) {
      theme = document.location.search.split('theme=')[1].split('&')[0];
    }
    
    // Init App
    const app = new Framework7({
      id: 'myapp',
      root: id,
      theme,
      data: function () {
        return {
          user: {
            firstName: 'John',
            lastName: 'Doe',
          },
        };
      },
      methods: {
        helloWorld: function () {
          app.dialog.alert('Hello World!');
        },
      },
      routes,
      vi: {
        placementId: 'pltd4o7ibb9rc653x14',
      },
    });
  }
}