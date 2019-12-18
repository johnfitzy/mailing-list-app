import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Bands email list app';
  next()
})


Vue.config.productionTip = false
// Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
