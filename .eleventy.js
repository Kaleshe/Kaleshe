const fs = require("fs");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = {
    dir: {
        includes: "_includes",
        layouts: "layouts",
        assets: "assets"
    }
};

module.exports = function(eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig({
      callbacks: {
        ready: function(err, bs) {
          const content_404 = fs.readFileSync('_site/404.html');
          bs.addMiddleware("*", (req, res) => {
            res.write(content_404);
            res.end();
          });
        }
      }
    });

    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.addPassthroughCopy("/backend/public/uploads");

    eleventyConfig.addPassthroughCopy("assets");
    return {
        passthroughFileCopy: true
    };
  };