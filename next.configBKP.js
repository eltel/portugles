// next.config.js
// line below added for PWA
const withOffline = require("next-offline");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const optimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// added withOffline(...) for PWA
module.exports = withOffline(withCSS)(
  withSass({
    webpack(config, { dev }) {
      if (config.mode === "production") {
        if (Array.isArray(config.optimization.minimizer)) {
          config.optimization.minimizer.push(new optimizeCSSAssetsPlugin({}));
        }
      }
      return config;
    }
  })
);
