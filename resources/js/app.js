require('./bootstrap');
import Vue from 'vue'


// window.Vue = require('vue');
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
import ExampleComponent from './components/ExampleComponent.vue';
const app = new Vue({
  el: '#app',
  components: {
    ExampleComponent
  }
});