const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  outputDir: "dist",
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Dashboard',
    },
  },
  configureWebpack: {
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: "./manifest.json",
            to: "./manifest.json"
          },
        ],
      }),
    ],
  },
};
