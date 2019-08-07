const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = path.resolve(__dirname, "../src");
const publicPath = path.resolve(__dirname, "../public");

const entry = {
  app: path.join(srcPath, "./app.js")
}

module.exports = {
  mode: "development", // "production" | "development" | "none",
  devtool: "source-map", // enum,
  entry: entry,
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.[hash].js", // string
  },
  module: {
    // 关于模块配置

    rules: [
      // 模块规则（配置 loader、解析器等选项）

      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "app")
        ],
        exclude: [
          path.resolve(__dirname, "app/demo-files")
        ],

        loader: "babel-loader",
        // 应该应用的 loader，它相对上下文解析
        // 为了更清晰，`-loader` 后缀在 webpack 2 中不再是可选的
        // 查看 webpack 1 升级指南。

        options: {
          presets: ["es2015"]
        },
        // loader 的可选项
      },

      {
        test: /\.css$/,
        use:["style-loader","css-loader"]
      }

    ]
  },
  plugins: [new HtmlWebpackPlugin()]
}
