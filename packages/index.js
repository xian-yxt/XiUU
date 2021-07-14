/**
 * @author xiooLoo
 * Date: 21/07/03
 */

import BaseButton from './Base_Button/index';
import BaseRow from './Base_Row/index';
import BaseCol from './Base_Col/index';
import BaseShowTip from './Base_ShowTip/index';
import BaseLoadingBar from './Base_LoadingBar/index';
import BaseSkeleton from './Base_Skeleton/index';
import BaseTable from './Base_Table/index';

const components = [
  BaseButton,
  BaseRow,
  BaseCol,
  BaseShowTip,
  BaseSkeleton,
  BaseTable
];

const install = function (Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
  Vue.prototype.$baseLoading = BaseLoadingBar;
};

if (typeof window !== 'undefined' && window.Vue) install(window.Vue);


export default {
  install,
  BaseButton,
  BaseRow,
  BaseCol,
  BaseShowTip,
  BaseLoadingBar,
  BaseSkeleton,
  BaseTable
};
