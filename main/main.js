define('static/main/main', function(require, exports, module) {

  import Vue from '../common/vue/dist/vue';
  import App from './App.vue';
  alert(555);
  
  new Vue({
    el: '#app',
    render: h => h(App)
  })
  

});
