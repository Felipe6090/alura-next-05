const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "@alura/design-system",
  "@alura/utils",
]);

module.exports = withPlugins([withTM], {});
