import { Configuration, DefinePlugin, HtmlRspackPlugin } from "@rspack/core";
import { AngularWebpackPlugin } from "@ngtools/webpack";
import path from "path";

export default {
  mode: "development",

  entry: {
    polyfills: path.resolve(__dirname, "src/polyfills"),
    main: path.resolve(__dirname, "src/main"),
  },

  devtool: false,

  output: {
    filename: "[fullhash].[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },

  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        type: "css",
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
    new DefinePlugin({
      environment: JSON.stringify("development"),
    }),
    new AngularWebpackPlugin({
      tsconfig: path.resolve(__dirname, "tsconfig.json"),
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
