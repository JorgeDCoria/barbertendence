module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "standard-with-typescript",
    "eslint-config-prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.eslint.json"],
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "prettier",
    "react-hooks",
    "@typescript-eslint",
  ],
  ignorePatterns: ["vite.config.ts"],
  rules: {
    "no-unused-vars": "warn",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/triple-slash-reference": "off",
  },
};
