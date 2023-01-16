module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@next/next/core-web-vitals",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "sort-keys-custom-order",
    "simple-import-sort",
    "unused-imports",
    "tailwindcss",
  ],
  rules: {
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
    "react/react-in-jsx-scope": "off",
    "no-use-before-define": ["error", { variables: false }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/button-has-type": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "react/require-default-props": "off",
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        controlComponents: ["Input"],
        depth: 3,
      },
    ],
    "no-underscore-dangle": "off",
    "sort-keys-custom-order/object-keys": ["warn"],
    "sort-keys-custom-order/type-keys": ["warn"],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "unused-imports/no-unused-imports": "error",
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json",
      },
    },
  },
};
