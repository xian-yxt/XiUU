/**
 * @author xiooLoo
 * Date: 21/07/03
 */
import BaseButton from './Base_Button/index';
import BaseElButton from './Base_El_Button/index';
import BaseRow from './Base_Row/index';
import BaseCol from './Base_Col/index';
import BaseShowTip from './Base_ShowTip/index';
import BaseLoadingBar from './Base_LoadingBar/index';
import BaseSkeleton from './Base_Skeleton/index';
<<<<<<< HEAD
import BaseTable from './Base_Table/index';
=======
import '../frameworks/elementui/theme-chalk/src/index.scss';
>>>>>>> 8915056971d47ea90443f0062bb319a835f913e6

const components = [
  BaseButton,
  BaseElButton,
  BaseRow,
  BaseCol,
  BaseShowTip,
<<<<<<< HEAD
  BaseSkeleton,
  BaseTable
=======
  BaseSkeleton
>>>>>>> 8915056971d47ea90443f0062bb319a835f913e6
];

const install = function(Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
  Vue.prototype.$loading = BaseLoadingBar;
};

if (typeof window !== 'undefined' && window.Vue) install(window.Vue);


export default {
  install,
  BaseButton,
  BaseElButton,
  BaseRow,
  BaseCol,
  BaseShowTip,
  BaseLoadingBar,
<<<<<<< HEAD
  BaseSkeleton,
  BaseTable
=======
  BaseSkeleton
>>>>>>> 8915056971d47ea90443f0062bb319a835f913e6
};
