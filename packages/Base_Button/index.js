/**
 * @author xiooLoo
 * Date: 21/07/03
 */
import BaseButton from './src/BaseButton.vue';

BaseButton.install = function(Vue) {
  Vue.component(BaseButton.name, BaseButton);
};

export default BaseButton;
