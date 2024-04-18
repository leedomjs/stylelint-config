module.exports = {
  overrides: [
    {
      files: ['*.acss', '*.wxss'],
      rules: {
        'font-family-no-missing-generic-family-keyword': null,
        'selector-type-no-unknown': null,
        'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
      },
    },
  ],
}
