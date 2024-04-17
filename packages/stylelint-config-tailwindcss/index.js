module.exports = {
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'layer',
          'apply',
          'config',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
  },
}
