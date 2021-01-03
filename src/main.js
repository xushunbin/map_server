// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import BaiduMap from 'vue-baidu-map'
import el from 'element-ui'
import 'shpjs/dist/shp.min.js'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(el)
/*Vue.use(BaiduMap, {
  ak: '5qgTNp0v9AvQPHuFyDblRt1k98sM3bEy',
  version: '3.0'
})*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
