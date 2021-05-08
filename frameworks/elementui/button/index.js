import ElButton from './src/button';

/* istanbul ignore next */
ElButton.install = function (Vue) {
  console.log('ccccccc:install')
  Vue.component(ElButton.name, ElButton);
};

export default ElButton;
