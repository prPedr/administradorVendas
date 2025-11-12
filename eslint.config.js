const parser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');

module.exports = [
  {
    ignores: ['node_modules', 'build', 'dist'],
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
      }
    },
    // ✅ ADICIONE ESTA SEÇÃO PARA REGISTRAR O PLUGIN
    plugins: {
      '@typescript-eslint': tsPlugin
    },
    rules: {
      // Agora você pode referenciar as regras diretamente pelo nome
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      'no-console': 'off'
    }
  }
];
