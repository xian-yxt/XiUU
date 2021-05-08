# library-XiUU-UI

> 基于vue+webpack+npm搭建个人组件库

# XiUU-UI

`XiUU-UI` 是一款基于 `Vue.js 2.0` 的yxt企业前端 UI 组件库，[测试地址](https://xiooloo.github.io/)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

####  ** 项目结构：**
```
    ┏━ build
    ┣━ config
    ┣━ node_modules
    ┣━ examples ━┳━ assets
    ┣            ┣━ components
    ┣            ┣━ docs
    ┣            ┣━ pages
    ┣            ┣━ router
    ┣            ┣━ App.vue
    ┃            ┗━ main.js
    ┣━ frameworks 
    ┣━ static 
    ┣━ test
    ┣━ .babelrc
    ┣━ .editorconfig
    ┣━ .eslintignore
    ┣━ .eslintrc.js
    ┣━ .gitignore
    ┣━ .postcssrc.js
    ┣━ index.html
    ┣━ package-lock.json
    ┣━ package.json
    ┗━ README.md
```

### 二次封装ElementUI需注意：
```
组件无法继承slot，需要手动补充
```