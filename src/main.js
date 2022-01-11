import Vue from 'vue'
import App from './App'
import router from './router'
//不要忘记引入css文件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//使用vue插件
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
