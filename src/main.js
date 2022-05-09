import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from "./router/router";
import 'material-design-icons-iconfont' //https://fonts.google.com/icons?selected=Material+Icons


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
