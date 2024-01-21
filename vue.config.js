const { defineConfig } = require("@vue/cli-service");
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, "./", dir);
}
/* 
在 Vue 项目中，devServer 配置是 webpack-dev-server 的配置选项，它用于控制开发服务器的一些行为。historyApiFallback 是其中的一个选项。

当你在 Vue 项目中使用 HTML5 History 模式时，historyApiFallback 选项可以帮助你解决因没有 index.html 文件导致的 404 错误。当你直接访问一个路由（例如 /about）而不是一个实际的文件路径时，如果没有正确的配置，服务器可能会返回 404 错误，因为它在寻找一个名为 about.html 的文件。

当你设置 historyApiFallback: true 时，webpack-dev-server 会将所有未找到的路由重定向到 index.html。这样，Vue Router 可以接管并正确地渲染所需的组件。

简单来说，这个选项确保了在开发模式下，即使你直接访问一个路由，服务器也不会返回 404 错误，而是会正确地渲染页面。 */
module.exports = defineConfig({
  // publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  devServer: {
    historyApiFallback: true,
  },
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
        // 基础模块
        "@base": resolve("packages/pkg_base"),
      },
    },
    amd: {
      toUrlUndefined: true,
    },
    plugins: [
      // webpack打包依赖分析
      // , new BundleAnalyzerPlugin()
    ],
    //提高 IDE 性能
    // exclude: ["node_modules", "dist", "build"],
  },
  css: {
    loaderOptions: {
      stylus: {
        import: [path.join(__dirname, "./src/assets/css/_mixin.styl")],
      },
    },
  },
});
