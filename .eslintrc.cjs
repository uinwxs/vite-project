module.exports = {
  env: {
    node: true,
    es2021: true,
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
};
