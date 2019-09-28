
import './js/common.js'
import './assets/css/main.css'
import './assets/scss/main.scss'


import store  from './store/';


//import './js/common' - Можно и без точки
//import 'vue' // Такая запись актуальна для Модуля, т.к. Webpack найдет все в package.json
//import Vue from 'vue' // Так тоже можно
//import 'bootstrap/dist/css/bootstrap.css' // Можно и css импортировать
//import example from '~/example/Example'; // тильда ~  - это алиас к src, который указан в base.conf 

window.Vue = require('vue'); // Это алиас к vue/dist/vue.js, который указан в base.conf


import VueRouter from 'vue-router';
Vue.use(VueRouter);

//import axios from 'axios';
window.axios = require('axios');

const routes = [
  {path: '/example' , component: { template: '<div>foo</div>' }}
]
var router = new VueRouter({
  routes: routes,
  //mode: 'history' // Чтобы убрать решетку # из адреса, но тогда как-то нужно обрабатывать адрес вида http://localhost/example
})

import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

Vue.use(Buefy, {
  defaultIconPack: 'fa',
});

Vue.component('example-component', require('./components/Example.vue').default)

Vue.component('buefy-navbar', require('./components/my-navbar.vue').default)


const app = new Vue({
  data() {
    return {
      
    }
  },
  store: store,
  router: router,
  el: '#app',
  methods:{
    'exampleButtonClick': function(evt){
      console.log(evt);
    }
  },
  created(){
    axios(Object.assign({}, this.$store.getters.getAxiosSettings, {
      data: { user_data : 'yo' }
    })).then(function (response) {
      console.log(response);
    });
  }
});
