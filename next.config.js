const withSASS = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const commonsChunkConfig = require("@zeit/next-css/commons-chunk-config");
const withProgressBar = require('next-progressbar');

module.exports = {
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return 'my-build-id'
  },
}
