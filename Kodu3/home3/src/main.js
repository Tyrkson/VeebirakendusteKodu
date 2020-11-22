import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//Filters
Vue.filter('capitalize', function(value) {
  return value.charAt(0).toUpperCase() + value.slice(1)
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
