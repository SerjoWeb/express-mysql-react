module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "'plugin:prettier/recommended'",
    "'plugin:react/recommended'",
    "'airbnb'",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "'latest'",
    sourceType: "'module'",
  },
  plugins: ["'react'"],
  rules: {
    "'react/react-in-jsx-scope'": 0,
    "'linebreak-style'": 0,
  },
};
