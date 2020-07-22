const CleanCSS = require("clean-css");
const inlineCSS = require('inline-css');

module.exports = function (eleventyConfig) {
  // Inline CSS with HTML 
  eleventyConfig.addTransform("inlineCSS", function (content, outputPath) {
    if (outputPath.endsWith(".html")) {
      const inlineStuff = (content) => {
        return new Promise(resolve => {
          inlineCSS(content, {
            removeStyleTags: false,
            url: 'https://arnoldclark.com'
          }).then(
            html => {
              inlined = html;
              resolve(inlined);
            }
          );
        });
      }

      async function waitForThisFinishFirst() {
        const newContent = inlineStuff(content);
        return newContent;
      }

      return waitForThisFinishFirst().then((inlinedHTML) =>  inlinedHTML)
    }
    return content;
  });


  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });


  return {
    dir: {
      input: "src/",
      output: "_template",
      includes: "_includes"
    },
    templateFormats: ["html", "md", "liquid"],
    htmlTemplateEngine: "liquid"
  };
};