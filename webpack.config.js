const path = require("path")
const BrowserSyncPlugin = require("browser-sync-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "./js/[name].js",
  },
  plugins: [
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3333,
      server: { baseDir: ["dist"] },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new CopyPlugin({
      patterns: [
        // { context: "./src/", from: "**/*.html", to: "./[name][ext]" },
        { context: ".", from: "./static", to: "./static" },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          "html-loader",
          {
            loader: "posthtml-loader",
            options: {
              ident: "posthtml",
              parser: "PostHTML Parser",
              plugins: [
                /* PostHTML Plugins */
                require("posthtml-include")({
                  root: path.resolve(__dirname, "src"),
                }),
              ],
            },
          },
        ],
      },
    ],
  },
}
