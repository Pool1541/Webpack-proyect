const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ruleJsConfig = {
  test: /\.js$/,
  loader: "babel-loader",
  options: {
    presets: [
      [
        "@babel/preset-react",
        {
          runtime: 'automatic'
        }
      ]
    ]
  }
};

const ruleCssConfig = {
  test: /\.css$/,
  use: ["style-loader", "css-loader"]
}

const rules = [
  ruleJsConfig,
  ruleCssConfig,
]

module.exports = (env, argv) => {
  const {mode} = argv;
  const isProduction = mode === "production";

  return {
    entry: "./src/index.js",
    output: {
      filename: isProduction ? "[name].[contenthash].js" : "main.js",
      path: path.resolve(__dirname, "build")
    },
    module: {
      rules : rules
    },
    plugins: [
      new HtmlWebpackPlugin({ template: 'public/index.html'})
    ],
    devServer: {
      hot: true,
      open: true,
      port: 3000,
      client: {
        overlay: true
      },
      static: {
        directory: path.join(__dirname, 'server')
      },
      compress: true
    },
    devtool: 'source-map',
  }
}