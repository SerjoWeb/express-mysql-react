module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["'plugin:prettier/recommended'", "'airbnb'"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "'latest'",
    sourceType: "'module'",
  },
  plugins: [],
  rules: {
    "'linebreak-style'": 0,
  },
};
