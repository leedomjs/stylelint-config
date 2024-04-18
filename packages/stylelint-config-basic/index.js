module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    '@stylistic/stylelint-config',
    '@leedomjs/stylelint-config-tailwindcss',
    '@leedomjs/stylelint-config-mini-program',
  ],
  ignoreFiles: ['**/*.{js,ts,json,yaml,md}'],
  rules: {
    'declaration-block-no-redundant-longhand-properties': null,
    'font-family-no-missing-generic-family-keyword': null,
    'import-notation': 'string',
    'keyframes-name-pattern': null,
    'media-feature-name-no-unknown': null,
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
    'no-unknown-animations': true,
    'no-unknown-custom-properties': true,
    'property-no-unknown': null,
    'rule-empty-line-before': 'always',
    'selector-class-pattern': null,
    '@stylistic/max-line-length': null,
    '@stylistic/string-quotes': 'single',
  },
}
