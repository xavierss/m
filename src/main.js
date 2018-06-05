import Framework7, {Dom7, Template7} from 'framework7/dist/framework7.esm.bundle.js';
import routes from './routes';
import 'framework7/dist/css/framework7.css';
import './assets/css/App.css';

// Dom7
const $ = Dom7;

// Theme
let theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
const app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
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
