import Vue from 'vue'
import App from './App'
import router from './router'
import DemoBlock from '@/components/__STATIC_COMPONENTS/DemoBlock.vue'
Vue.component('demo-block', DemoBlock)

import XiUU from '../packages/index'
import '../packages/theme-default/lib/index.css'
Vue.use(XiUU)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
