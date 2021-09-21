module.exports = {
  env: {
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:vue/essential"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: ["vue"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "no-unused-vars": "off",
  },
};
