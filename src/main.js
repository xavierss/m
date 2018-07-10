import App from './App';

window.onload = function() {
  console.log('load event call! ');
  document.addEventListener("deviceready", (e) => {
    window.app = new App('#app');
  }, false);
}
