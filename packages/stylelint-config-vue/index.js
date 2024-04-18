module.exports = {
  extends: [
    '@leedomjs/stylelint-config-scss',
    'stylelint-config-recommended-vue/scss',
    '@leedomjs/stylelint-config-basic',
  ],
  rules: {
    'keyframes-name-pattern': null,
    'no-descending-specificity': null,
    'selector-class-pattern': null,
    'scss/dollar-variable-pattern': null,
    'scss/operator-no-unspaced': null,
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: [
              'deep',
              'slotted',
              'global',
            ],
          },
        ],
        'selector-pseudo-element-no-unknown': [
          true,
          {
            ignorePseudoElements: ['v-deep'],
          },
        ],
        'function-no-unknown': [
          true,
          {
            ignoreFunctions: ['v-bind'],
          },
        ],
      },
    },
  ],
}
