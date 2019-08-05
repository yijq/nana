const path = require("path");

const merge = require("webpack-merge");

const commonConfig = require("./webpack.common.js");

module.exports = merge(commonConfig, {
  devServer:{
    contentBase: path.join(__dirname, "../dist"),
    open:true,  
    hot: true     
  }
})
