module.exports = {
  extends: [
    '@leedomjs/stylelint-config-basic',
    '@leedomjs/stylelint-config-scss',
    '@leedomjs/stylelint-config-mini-program',
    'stylelint-config-recommended-vue/scss',
  ],
  rules: {
    'keyframes-name-pattern': null,
    'no-descending-specificity': null,
    'selector-class-pattern': null,
    'scss/dollar-variable-pattern': null,
    'scss/operator-no-unspaced': null,
  },
}
