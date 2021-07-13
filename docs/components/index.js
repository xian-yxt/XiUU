/**
 * 基础组件：Base_$
 */
import BaseCol from '@/components/yxt_base_$/Base_Col/index';
import BaseRow from '@/components/yxt_base_$/Base_Row/index';
import BaseButton from '@/components/yxt_base_$/Base_Button/index';
import BaseElButton from '@/components/yxt_base_$/Base_El_Button/index';
import BaseSkeleton from '@/components/yxt_base_$/Base_Skeleton/index';
import BaseLoadingBar from '@/components/yxt_base_$/Base_LoadingBar/index';
import BaseShowTip from '@/components/yxt_base_$/Base_ShowTip/index';

/**
 * 业务组件：Biss_$
 */

/**
 * 块组件：Block_$
 */

/**
 * 页面组件：Page_$
 */

/**
 * FIXME:注意
 * > 此处为所有类型组件的统一入口，命名方式统一按‘大驼峰’方式，
 * > 具体如：BaseSkeleton
 * > 此处命名必须与组件name属性一致(因为它决定着我们在引用组件时的名字)如：
     export default {
        name: 'BaseSkeleton',
        props: {},
        ...
     }
 */
const components = [
  BaseCol,
  BaseRow,
  BaseButton,
  BaseElButton,
  BaseSkeleton,
  BaseLoadingBar,
  BaseShowTip
];

const install = function(Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
  Vue.prototype.$loading = BaseLoadingBar;
};

if (typeof window !== 'undefined' && window.Vue) install(window.Vue);


export default {
  install,
  BaseCol,
  BaseRow,
  BaseButton,
  BaseElButton,
  BaseSkeleton,
  BaseLoadingBar,
  BaseShowTip
};
