// eslint.config.mjs (in packages/backend/)
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier"; // <-- Step 1: IMPORT THIS

export default [
  // 1. Apply ESLint's recommended JavaScript rules as a base
  js.configs.recommended,

  // 2. Apply TypeScript ESLint's recommended rules.
  // This is an array of configs, so we spread it.
  // It will set up the TypeScript parser for .ts files and add TS-specific rules.
  ...tseslint.configs.recommended,

  // 3. Custom configurations for your project (e.g., Node.js globals)
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], // Apply to all relevant files
    languageOptions: {
      ecmaVersion: "latest", // Use modern ECMAScript features
      sourceType: "module",  // You selected ESM
      globals: {
        ...globals.node,     // Add all Node.js global variables
        // When we set up Jest, we'll add Jest globals here too:
        // ...globals.jest,
      },
    },
    // You can add your own custom rules or override recommended ones here:
    // rules: {
    //   "@typescript-eslint/no-unused-vars": "warn",
    //   "no-console": "warn", // Example: warn about console.log statements
    //   // Add any other project-specific rules
    // },
  },

  // 4. Add Prettier config LAST to override other formatting rules
  eslintConfigPrettier, // <-- Step 2: ADD THIS AT THE END of the array
];