const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  assetsDir: "static",
  devServer: {
    proxy: {
      "/api": {
        target: "http://kms.com",
        changeOrigin: true
      }
    }
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin 生产环境下是true,开发环境下是false
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },

  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete("prefetch");
    // eslint自动修复
    config.module
      .rule("eslint")
      .use("eslint-loader")
      .loader("eslint-loader")
      .options({
        fix: true
      });
    // 别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("common", resolve("src/common"))
      .set("components", resolve("src/components"));
  }
};
