module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    '@leedomjs/stylelint-config-tailwindcss/scss',
  ],
  plugins: [
    'stylelint-scss',
  ],
  rules: {
    'scss/dollar-variable-pattern': null,
    'scss/operator-no-unspaced': null,
  },
}
