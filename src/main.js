// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


/*
import axios from 'axios'
Vue.prototype.$axios=axios
import qs from 'qs'
Vue.prototype.$qs = qs;
*/

import { https } from './api/https';
Vue.prototype.$https = https;




// import Api from './api/index.js';
// Vue.prototype.$api = Api;

Vue.config.productionTip = false


Vue.prototype.gfc=function(a){
  console.log("A"+a);
}


import 'lib-flexible'



import "./assets/css/base.css"


// import VueAwesomeSwiper from 'vue-awesome-swiper'
 

// import 'swiper/dist/css/swiper.css'
// Vue.use(vuePicturePreview)
// Vue.use(VueAwesomeSwiper)




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
