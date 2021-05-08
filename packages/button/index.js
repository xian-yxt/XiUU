/**
 * @author xiooLoo
 * Date: 21/05/05
 */
import Button from './src/button.vue';

Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};

export default Button;
