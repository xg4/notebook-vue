import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import ElementUI from 'element-ui'

Vue.use(MintUI)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
