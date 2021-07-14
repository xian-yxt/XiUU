import Vue from 'vue';
import App from './App';
import router from './router';
import DemoBlock from '@/components/_global_$/DemoBlock.vue';
Vue.component('demo-block', DemoBlock);
<<<<<<< HEAD
import '../frameworks/index';
/**
 * 若直接使用components(或packages)中的组件进行Markdown(docs)调试（解开以下代码）
 * [ 注：最终效果要确保两者(components与packages)中效果一致！！！ ]
 *
 import YXTComponents from '@/components/index';
 import '../packages/theme-default/lib/index.less';
 Vue.use(YXTComponents);
 */

/**
 * 若直接使用packages(或components)中的组件进行Markdown(docs)调试
 * [ 注：最终效果要确保两者(components与packages)中效果一致！！！ ]
 */
import YXTUI from '../packages/index';
import '../packages/theme-default/lib/index.css';
Vue.use(YXTUI);

=======

/**
 * 若直接使用components(或packages)中的组件进行Markdown(docs)调试（解开以下代码）
 * [ 注：最终效果要确保两者(components与packages)中效果一致！！！ ]
 *
   import YXTComponents from '@/components/index'
   Vue.use(YXTComponents)
 */

/**
 * 若直接使用packages(或components)中的组件进行Markdown(docs)调试
 * [ 注：最终效果要确保两者(components与packages)中效果一致！！！ ]
 */
import YXTUI from '../packages/index';
import '../packages/theme-default/lib/index.css';
Vue.use(YXTUI);

>>>>>>> 8915056971d47ea90443f0062bb319a835f913e6
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
