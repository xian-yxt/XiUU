// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'eqeqeq': [ 0, 'allow-null' ], /**要求使用 === 和 !== */
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', /**禁用 debugger */
    'quotes': [ 'error', 'single' ], /**要求使用单引号 */
    'linebreak-style': [ 0, 'error', 'windows' ], /**强制使用一致的换行风格 */
    'no-use-before-define': [ 'error', {
      'functions': true,
      'classes': true
    } ], /**禁止在变量定义之前使用它们 */
    'no-param-reassign': [ 'error', { 'props': false } ], /**禁止对 function 的参数进行重新赋值 */
    'no-console': 'off', /**禁用 console */
    'comma-dangle': [ 'error', 'only-multiline' ], /**同一行时，禁止使用拖尾逗号 */
    'indent': [ 'error', 2 ], /**2个空格缩进 */
    'max-len': [ 'error', { 'code': 1000 } ], /**强制一行的最大长度1000 */
    'no-mixed-spaces-and-tabs': [ 'error', 'smart-tabs' ], /**使用 空格 和 tab 混合缩进 */
    'no-extra-semi': 'error', /**禁用不必要的分号 */
    'no-ternary': 'off', /**允许使用三元表达式 */
    'no-nested-ternary': 'off', /**允许使用嵌套的三元表达式 */
    'prefer-template': 'error', /**建议使用模板字面量而非字符串‘+’拼接 */
    'arrow-parens': [ 'error', 'as-needed' ], /**必要时，要求箭头函数的参数使用圆括号 */
    'arrow-spacing': 'error', /**箭头函数的箭头之前或之后要有空格 */
    'require-await': 'off', /**禁止使用不带 await 表达式的 async 函数 */
    'no-shadow': 'off', /**禁止变量声明与外层作用域的变量同名 */
    'object-curly-spacing': [ 'error', 'always' ], /**要求花括号内有空格 (除了 {}) */
    'array-bracket-spacing': [ 'error', 'always' ], /**在数组括号内使用一个或多个空格、或折行 */
    'no-trailing-spaces': 'error', /**禁止使用行尾空白 */
    'no-const-assign': 'error', /**不允许改变用const声明的变量 */
    'no-duplicate-imports': 'error', /**禁止重复import */
    'no-this-before-super': 'error', /**在构造函数中禁止在调用super()之前使用this或super 【大多用于React中类的继承】*/
    'no-useless-rename': 'error', /**禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字 */
    'template-curly-spacing': [ 'error', 'always' ], /**模板字符串中,花括号内要有一个或多个空格 */
    'newline-per-chained-call': [ 'error', { 'ignoreChainWithDepth': 3 } ], /**要求方法链中每3个调用必须有一个换行符 */
    'no-lonely-if': 'error', /**禁止 if 语句作为唯一语句出现在 else 语句块中 */
    'no-mixed-operators': 'error', /**禁止混合使用不同的操作符，如错误用法:let foo = a && b || c || d; */
    'no-whitespace-before-property': 'error', /**禁止属性前有空白 */
    'wrap-regex': 'error', /**要求正则表达式要被小括号()包裹起来 */
    'eol-last': [ 'error', 'always' ], /**要求文件末尾须保留一行空行 */
    'require-await': 'error', /**禁止使用不带 await 表达式的 async 函数 */
    'no-redeclare': 'error', /**禁止重新声明变量 */
    'no-multi-spaces': 'error', /**禁止出现多个空格 */
    'no-unreachable': 'error', /**禁止在 return、throw、continue 和 break 语句后出现不可达代码 */
    'vue/max-attributes-per-line': [ 'error', {
      'singleline': 4,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    } ], /**dom标签同行最多写4个属性，超过后须换行；换行后的属性，同行最多写1个属性 */
    'vue/singleline-html-element-content-newline': 'off', /**空标签换行||不换行都可以 */
    'vue/name-property-casing': [0, 'PascalCase' | 'kebab-case'], /**属性首字母大小写不限 */
    'no-param-reassign': 'off',
    'no-use-before-define': 'off'
  }
}
