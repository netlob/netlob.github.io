import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueGtag from "vue-gtag";

Vue.use(Buefy)
Vue.use(VueGtag, {
  config: { id: "G-TQHZVF6TYS" }
});

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
