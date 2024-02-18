import { Configuration, HtmlRspackPlugin } from "@rspack/core";
import { AngularWebpackPlugin } from "@ngtools/webpack";
import path from "path";

const MinifyPlugin = require("@rspack/plugin-minify");

export default {
  mode: "production",

  entry: {
    polyfills: path.resolve(__dirname, "src/polyfills"),
    main: path.resolve(__dirname, "src/main.prod"),
  },

  devtool: false,

  output: {
    filename: "[fullhash].[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: path.resolve(__dirname, "public"),
  },

  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimize: true,
    minimizer: [new MinifyPlugin()],
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        type: "css", // this is enabled by default for .css, so you don't need to specify it
      },
      {
        test: /\.?(svg|html|css|scss|less)$/,
        type: "asset/source",
      },
      {
        test: /\.[jt]s?$/,
        loader: "@ngtools/webpack",
        options: {
          cacheDirectory: true,
          compact: false,
        },
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".js"],
  },

  plugins: [
    new AngularWebpackPlugin({
      tsconfig: path.resolve(__dirname, "tsconfig.prod.json"),
      jitMode: true,
    }),
    new HtmlRspackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],

  devServer: {
    historyApiFallback: true,
    hot: true,
  },
} as Configuration;
