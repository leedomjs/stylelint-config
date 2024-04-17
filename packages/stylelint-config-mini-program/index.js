const singleValueReg = '/^[1-9][0-9]*rpx$/'
const multiValueReg = '/^(\s)?(0|auto|([1-9][0-9]*rpx)){1,4}/'

module.exports = {
  rules: {
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'declaration-property-value-no-unknown': [
      true,
      {
        ignoreProperties: {
          width: singleValueReg,
          height: singleValueReg,
          '/margin|padding/': multiValueReg,
          '/^(margin|padding)-/': singleValueReg,
          'font-size': singleValueReg,
          'border-radius': singleValueReg,
        },
      },
    ],
  },
}
