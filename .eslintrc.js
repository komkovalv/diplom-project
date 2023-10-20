module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: 1,
  },
  extends: ["plugin:react/recommended", "standard"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    // "space-before-function-paren": [
    //   "error",
    //   { anonymous: "always", named: "newer" },
    // ],
    indent: ["error", 4], // Отступ количество пробелов
    semi: [2, "always"], // Точка с запятой в конце строки
    // Ошибка при наличии пробела при обозночении функции, уберём её
"multiline-ternary":["off"],
    // Использование двойных кавычек
    quotes: ["error", "double", { allowTemplateLiterals: true }],
  },
};
