module.exports = {
    parser: '@typescript-eslint/parser', // Define o parser do TypeScript
    parserOptions: {
        ecmaVersion: 2020, // Define a versão do ECMAScript
        sourceType: 'module', // Permite uso de imports
    },
    extends: [
        'eslint:recommended', // Regras recomendadas do ESLint
        'plugin:@typescript-eslint/recommended', // Regras recomendadas para TypeScript
    ],
    rules: {
        // Defina regras específicas ou sobrescreva as recomendadas aqui
        '@typescript-eslint/no-explicit-any': 'warn', // Evita o uso de 'any' com aviso
        '@typescript-eslint/explicit-module-boundary-types': 'off', // Desativa a exigência de tipo nas fronteiras do módulo
    },
    env: {
        browser: true, // Define o ambiente de execução como navegador
        node: true, // Define o ambiente de execução como Node.js
    },
};
