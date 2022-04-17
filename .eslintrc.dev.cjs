module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-base",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "import", "import-newlines"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: "./tsconfig.json",
    },
    "import/extensions": [".js", ".mjs", ".jsx", ".ts", ".tsx"],
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: [
        "**/*.spec.js",
        "**/*.spec.jsx",
        "**/*.spec.ts",
        "**/*.spec.tsx",
        "**/*.test.js",
        "**/*.test.jsx",
        "**/*.test.ts",
        "**/*.test.tsx",
        "**/*-test.js",
        "**/*-test.jsx",
        "**/*-test.ts",
        "**/*-test.tsx",
        "**/*.stories.js",
        "**/*.stories.jsx",
        "**/*.stories.ts",
        "**/*.stories.tsx",
      ],
      rules: {
        "no-console": "off",
        "no-alert": "off",
        "import/no-unused-modules": "off",
        "no-await-in-loop": "off",
      },
      env: {
        jest: true,
      },
    },
  ],
  rules: {
    "no-empty-function": "warn",
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/no-empty-interface": "off",

    // Import Static Analysis
    "import/no-cycle": "error",
    // "import/no-unused-modules": ["error", { unusedExports: true }],

    // Import Warning
    "import/no-mutable-exports": "error",
    "import/prefer-default-export": "off",

    // Import Style Guide
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "parent", "sibling", "index"],
        alphabetize: { order: "asc" },
      },
    ],
    "import/newline-after-import": ["error", { count: 1 }],
    "import/no-duplicates": "error",

    // Enable dev dependency usage
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.test.ts", "**/*.test.tsx", "**/*.stories.tsx"],
      },
    ],

    // Enable import without extention
    "import/extensions": [
      "error",
      "ignorePackages",
      { js: "never", jsx: "never", ts: "never", tsx: "never" },
    ],

    // Handle typescript no-shadow e.g.) enum
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",

    // Use no-unused-vars for Typescript
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn",

    // Class Definition
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    "react/react-in-jsx-scope": "off",
    "no-var": "warn",
    "no-nested-ternary": "warn",
    "react/jsx-pascal-case": "warn",

    // note you must disable the base rule as it can report incorrect errors
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": ["error"],

    "max-classes-per-file": "off",
    "no-restricted-syntax": "off",
    "no-continue": "off",
    "@typescript-eslint/ban-types": "off",
    "consistent-return": "off",

    // Output related options
    "no-console": "warn",
    "no-alert": "error",
  },
  globals: {
    JSX: true,
  },
};
