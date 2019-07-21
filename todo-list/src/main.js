import Vue from 'vue'
import App from './App.vue'
import Status from './status'
import Hello from "./components/Hello";
import TodoMain from "./TodoMain";

Vue.config.productionTip = false

Vue.status = new Status([
  {
    path: '/hello',
    needShow: Hello,
  },
  {
    path: '/',
    needShow: TodoMain,
  }
]);

new Vue({
  render: h => h(App),
}).$mount('#app')
