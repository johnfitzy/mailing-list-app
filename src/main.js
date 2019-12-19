import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Bands email list app';
  next()
})

/*eslint no-console: ["error", { allow: ["debug"] }] */
Vue.config.productionTip = false

var store = {
  state: {
    message: 'Data from store'
  }, 

  setMessageAction(newValue) {
    console.debug('This message was called')
    this.state.message = newValue;
  }, 

  clearMessageAction() {
    this.state.message = '';
  }
}

new Vue({

  el: '#app',

  router,

  data: {
    privateVueState: "Private vue state, other vue's can't access it", 
    sharedState: store
  },

  render: h => h(App)

}).$mount('#app')
