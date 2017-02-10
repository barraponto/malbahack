module.exports = {
  env: {browser: true, es6: true},
  extends: ["eslint:recommended", "eslint-config-google"],
  parserOptions: {
    sourceType: "module", // para poder processar os imports
    jsx: true, // para poder processar jsx no vue, caso você seja desses...
  },
  plugins: ['vue'],
  rules: {
    'vue/jsx-uses-vars': 2,
  },
};
