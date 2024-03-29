const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  devServer: {
    static: "./build",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader", "sass-loader"],
          },
          {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"],
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    alias: {
      icons: path.resolve(__dirname, "src/icons"),
    },
  },
};
