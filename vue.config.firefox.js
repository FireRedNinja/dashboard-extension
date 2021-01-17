const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  outputDir: "firefox",
  configureWebpack: {
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: "./firefox.manifest.json",
            to: "./manifest.json"
          },
        ],
      }),
    ],
  },
};
