// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Bus from '@/utils/bus'

Vue.config.productionTip = false

// Vue.prototype.$bus = new Vue()
Vue.prototype.$bus = new Bus()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
