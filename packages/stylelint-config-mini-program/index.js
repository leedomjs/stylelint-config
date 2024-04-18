module.exports = {
  overrides: [
    {
      files: ['*.acss', '*.wxss'],
      rules: {
        'selector-type-no-unknown': null,
        'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
      },
    },
  ],
}
