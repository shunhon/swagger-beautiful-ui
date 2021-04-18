const path = require("path");
const webpack = require("webpack");

module.exports = {
  context: path.join(__dirname, "src"),
  entry: ["@babel/polyfill", "./index.tsx"],
  output: {
    path: path.join(__dirname, "public/js"),
    filename: "bundle.js",
    publicPath: "/js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: [/node_modules/],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [
      ".ts",
      ".tsx",
      ".js",
      ".jsx",
      ".css",
      "png",
      "woff",
      "woff2",
      "eot",
      "ttf",
      "svg",
    ],
    alias: {
      src: path.resolve(__dirname, "./src"),
    },
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    watchContentBase: true,
    host: "localhost",
    port: 8080,
    historyApiFallback: true,
    hot: true,
  },
  devtool: "inline-source-map",
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
