/*eslint no-undef: "error"*/
/*eslint-env node*/
import Vue from 'vue';
import Router from 'vue-router';
import routerConfig from './router.config.json';
Vue.use(Router);

let routes = [];
Object.keys(routerConfig).forEach(header => {
  routes = routes.concat(routerConfig[header]);
});
const addComponent = router => {
  router.forEach(route => {
    if (route.items) {
      addComponent(route.items);
      routes = routes.concat(route.items);
    } else {
      if (route.type === 'pages') {
        route.component = r => require.ensure([], () => r(require(`../pages/${route.name}.vue`)));
        return;
      }
      route.component = r => require.ensure([], () => r(require(`../docs/${route.name}.md`)));
    }
  });
};
addComponent(routes);

/** ============*/
function name(a) {
  a = 'ss';
  console.log(a);
}
console.log(name);
/** ============*/

export default new Router({
  routes: routes
});
