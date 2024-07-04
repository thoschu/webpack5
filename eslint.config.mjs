import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {globals: globals.browser}
  },
  {
    "rules": {
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      "no-case-declarations": ["warn"]
    }
  }
];
