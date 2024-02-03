const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  root: true,
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
});
