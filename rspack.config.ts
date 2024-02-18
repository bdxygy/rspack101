import { Configuration, HtmlRspackPlugin } from "@rspack/core";
import path from "path";

export default {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "src/main"),
  },
  output: {
    filename: "[fullhash].[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },

  plugins: [
    new HtmlRspackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
} as Configuration;
