import Vue from 'vue'
import App from './App.vue'
import router from './router'
// ElementUIとCSSファイルをimport
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
// ElementUIを使用
Vue.use(ElementUI);

//Vueインスタンスの生成
new Vue({
  // routerの登録。
  // router: routerの省略形
  router,
  //App.vueのレンダリング
  render: h => h(App)
}).$mount('#app')
