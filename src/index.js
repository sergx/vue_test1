
import './js/common.js'
import './assets/css/main.css'
//import './fonts/HelveticaNeueCyr/stylesheet.css'
import './assets/scss/main.scss'


import store  from './store/store.js';
import VueRouter from 'vue-router';

import axios from 'axios';

//import './js/common' - Можно и без точки
//import 'vue' // Такая запись актуальна для Модуля, т.к. Webpack найдет все в package.json
//import Vue from 'vue' // Так тоже можно
//import 'bootstrap/dist/css/bootstrap.css' // Можно и css импортировать
//import example from '~/example/Example'; // тильда ~  - это алиас к src, который указан в base.conf 

window.Vue = require('vue'); // Это алиас к vue/dist/vue.js, который указан в base.conf

Vue.use(VueRouter);
const routes = [
  {path: '/example' , component: { template: '<div>foo</div>' }}
]
var router = new VueRouter({
  routes: routes,
  //mode: 'history' // Чтобы убрать решетку # из адреса
})



//https://github.com/myliang/fish-ui/blob/master/examples/main.js
//import FishUI from 'fish-ui';
//Vue.use(FishUI);
//Vue.component('example-button', Vue.extend(FishUI.Button));

import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

Vue.use(Buefy);

//Vue.component('buefy-navbar', Vue.extend(Buefy.Navbar));

Vue.component('example-component', require('./components/Example.vue').default)

Vue.component('buefy-navbar', require('./components/my-navbar.vue').default)

Vue.component('auth-modal', require('./components/auth-modal.vue').default)


const app = new Vue({
  store: store,
  router: router,
  el: '#app',
  methods:{
    'exampleButtonClick': function(evt){
      console.log(evt);
    }
  },
  created(){
    //axios.get(`https://jsonplaceholder.typicode.com/users`)
    //.then(responce => {
    //  console.log(responce.data);
    //});
    
    axios(Object.assign(this.$store.getters.getAxiosSettings, {
      data: { user_data : true }
    })).then(function (response) {
      console.log(response);
    });
    

  }
});
