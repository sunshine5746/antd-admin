import Vue from 'vue'
import App from './App'
import router from './router'
import OwnUI from './index'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './assets/style/main.less'
import './assets/style/display.css'
// import './assets/iconfont/iconfont.css'
import Api from './api'
import i18n from './i18n'
console.log('store', store)
console.log('router', router)
console.log('i18n', i18n)

// import * as filters from './filter'
Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(Api)
// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })
Vue.use(OwnUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  i18n,
  render: h => h(App)
})
