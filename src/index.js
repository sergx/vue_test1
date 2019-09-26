
import './js/common.js'
import './assets/css/main.css'
//import './fonts/HelveticaNeueCyr/stylesheet.css'
import './assets/scss/main.scss'

//import './js/common' - Можно и без точки

//import 'vue' // Такая запись актуальна для Модуля, т.к. Webpack найдет все в package.json
//import Vue from 'vue' // Так тоже можно
//import 'bootstrap/dist/css/bootstrap.css' // Можно и css импортировать

window.Vue = require('vue'); // Это алиас к vue/dist/vue.js, который указан в base.conf 
import store  from './store/store.js';

//import example from '~/example/Example'; // тильда ~  - это алиас к src, который указан в base.conf 

//https://github.com/myliang/fish-ui/blob/master/examples/main.js
import FishUI from 'fish-ui';

//Vue.use(FishUI);


Vue.component('example-component', require('./components/Example.vue').default)

Vue.component('example-button', Vue.extend(FishUI.Button, {
  methods:{
    clickHandler (evt) {
      console.log(12345);
      this.$emit('click', evt)
    }
  }
}));


const app = new Vue({
  store: store,
  el: '#app',
  methods:{
    'exampleButtonClick': function(evt){
      console.log(evt);
    }
  }
});
