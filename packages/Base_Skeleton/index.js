/**
 * @author xiooLoo
 * Date: 21/07/03
 */
import BaseSkeleton from './src/BaseSkeleton.vue';

BaseSkeleton.install = function (Vue) {
  Vue.component(BaseSkeleton.name, BaseSkeleton);
};

export default BaseSkeleton;
