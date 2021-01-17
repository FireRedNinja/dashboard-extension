const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  outputDir: "chrome",
  configureWebpack: {
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: "./chrome.manifest.json",
            to: "./manifest.json"
          },
        ],
      }),
    ],
  },
};
