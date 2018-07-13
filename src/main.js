import App from './App';

window.onload = function() {
  document.addEventListener("deviceready", (e) => {
    window.app = new App('#app');
  }, false);
}
