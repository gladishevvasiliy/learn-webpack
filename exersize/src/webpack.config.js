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
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("./build/styles.css"),
  ]
}
