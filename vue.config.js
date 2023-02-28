const { defineConfig } = require("@vue/cli-service");
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, "./", dir);
}

module.exports = defineConfig({
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
