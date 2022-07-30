const withTM = require("next-transpile-modules")(["@web3-ui/components"]);

module.exports = withTM({
  reactStrictMode: true,
});
