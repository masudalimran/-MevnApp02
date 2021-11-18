import Vue from 'vue'
import App from './App.vue'
import router from './routes/routes'
import vuetify from './plugins/vuetify'

// Store
import store from "./store/store"; 

Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
