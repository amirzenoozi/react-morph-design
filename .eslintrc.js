module.exports =  {
    root: true,
    parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
    plugins: [
        '@typescript-eslint',
        'react'
    ],
    extends:  [
        'eslint:recommended',  // Uses the recommended rules from @eslint-plugin-react
    ],
    env: {
        "browser": true,
        "jest": true,
        "node": true,
    },
    rules:  {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "indent": ["error", 2],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["warn"],
        "no-undef": ["error", {
            "typeof": true,
        }]
    },
    settings:  {
        react:  {
            version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
};
