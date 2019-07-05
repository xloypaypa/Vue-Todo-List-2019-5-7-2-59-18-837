import Vue from 'vue'
import App from './pages/App.vue'
import Main from "./pages/Main.vue";

Vue.config.productionTip = false

new Vue({
  render: h => h(Main),
}).$mount('#app');
