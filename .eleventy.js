var devConfig = require("./.config/.eleventy.dev.js")
var prodConfig = require("./.config/.eleventy.prod.js")

module.exports = process.env.ELEVENTY_ENV === 'production' ? prodConfig : devConfig;
