// .eslintrc.js 是一个配置文件，用于定义 ESLint 的规则和选项。ESLint 是一个开源的 JavaScript 代码检查工具，可以帮助开发者遵循一致的代码风格和查找潜在的错误
module.exports = {
  // 指示该配置是否是顶层配置
  root: true,
  // 定义全局变量
  env: {
    node: true
  },
  // 指定要扩展的配置选项
  extends: ['plugin:vue/essential', '@vue/standard'],
  // 定义规则及其值
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': 'off',
    'no-unused-vars': 'off',
    'handle-callback-err': 'off',
    /* 'import/extensions': [
      'off',
      'always',
      {
        js: 'never',
        vue: 'never'
      }
    ],
    'prefer-destructuring': ['error', { object: true, array: false }] */
  },
  // 定义解析选项
  /* parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2020
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'node_modules/@vue/cli-service/webpack.config.js'
      }
    }
  } */
}
/* 这是一个用于配置ESLint的JavaScript文件，名为.eslintrc.js。ESLint是一个用于识别和报告JavaScript代码中的模式问题的工具，可以用来确保代码风格的一致性并检测潜在的错误。以下是该配置文件的主要部分的解释：

root
root: true 表示这个配置文件是ESLint的根配置文件。当root设置为true时，这个配置文件会被当作最高级别的配置文件来处理，ESLint将不再寻找其他可能的上级配置文件。

env
env: { node: true } 指定了这个配置文件用于哪个环境。在这里，它被指定为Node.js环境。

extends
extends 属性用于扩展基础的ESLint配置。这里，它扩展了两个配置：'plugin:vue/essential' 和 '@vue/standard'。前者是Vue插件提供的必要配置，后者是一个基于Vue的Standard ESLint configuration。

rules
rules 属性定义了一系列的规则，用于指定ESLint应该如何检查代码。例如：

'no-console': 'off' 允许使用console对象。
'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off' 在生产环境下禁止使用debugger。
'no-param-reassign': 'off' 允许修改函数的参数。
'no-unused-vars': 'off' 允许声明未使用的变量。
'handle-callback-err': 'off' 允许回调函数中没有错误处理的情况。
'import/extensions': ['off', 'always', { js: 'never', vue: 'never' }] 禁止使用.js或.vue扩展名的文件。
'prefer-destructuring': ['error', { object: true, array: false }] 强制使用解构赋值。
parserOptions
这部分定义了ESLint解析JavaScript代码时使用的选项。这里，它使用了@babel/eslint-parser作为解析器，并指定了ECMAScript版本为2020。

settings
在settings部分，定义了ESLint在解析模块导入时使用的解析器配置。这里，它使用了webpack作为模块解析器，并指定了webpack的配置文件路径为node_modules/@vue/cli-service/webpack.config.js。

这个配置文件主要用于Vue项目，它覆盖了一些默认规则，以适应Vue和Webpack的特定工作方式。 */
