// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import globalComponents from './globalComponents'
import './assets/bootstrap/bootstrap.min.css'
import './assets/style/font-icon/iconfont.scss'
//公共组件
Object.keys(globalComponents).forEach(name => {
  Vue.component(globalComponents[name].name, globalComponents[name])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
