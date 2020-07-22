const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");

  // Add cssmin filter but don't actually run it
  eleventyConfig.addFilter("cssmin", function (code) {
    return code;
  });

  return {
    dir: {
      input: "src/",
      output: ".build",
      includes: "_includes"
    },
    templateFormats: ["html", "md", "liquid"],
    htmlTemplateEngine: "liquid",

    // 1.1 Enable elventy to pass dirs specified above
    passthroughFileCopy: true
  };
};
