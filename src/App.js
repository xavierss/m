import Framework7, {Dom7, Template7} from 'framework7/dist/framework7.esm.bundle.js';
import Routes from './routes';

// Framework7 Styles
import Framework7Styles from 'framework7/dist/css/framework7.css';
import AppStyles from './assets/css/App.css';

// Dom7
const $ = Dom7;

export default class {
    constructor(id) {
        // Theme
        let theme = 'auto';
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
            routes: Routes,
            vi: {
                placementId: 'pltd4o7ibb9rc653x14',
            }
        });
    }
}