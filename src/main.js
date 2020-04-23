// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueBus from 'vue-bus'
Vue.use(VueBus)
import animated from 'animate.css'
Vue.use(animated)

import publicMethod from './utils/common'
Vue.prototype.common = publicMethod

Vue.config.productionTip = false

import store from './store'

router.beforeEach((to,from,next) => {
  next();
  // if(to.path == "/Tab"){
  //   next();
  // }else if(to.path == '/'){
  //   next();
  // }else {
  //   next({path:'/'});
  // }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
