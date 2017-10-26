const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./app",
  output: {
      filename: "app.js",
      path: __dirname + '/build'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  },

  watch: false,

  watchOptions: {
    aggregateTimeout: 110
  },
};
