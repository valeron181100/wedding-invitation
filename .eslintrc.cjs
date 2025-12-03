module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.app.json',
    },
    rules: {
        'import/prefer-default-export': 'off',
        'react/require-default-props': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-curly-brace-presence': 'off',
        '@typescript-eslint/no-empty-object-type': 'off',
        'react/function-component-definition': [
            'error',
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function'
            }
        ],
    }
};