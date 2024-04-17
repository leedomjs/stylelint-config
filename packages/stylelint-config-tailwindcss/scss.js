const { rules } = require('./index')

module.exports = {
  rules: Object.entries(rules).reduce((scssRules, [key, value]) => ({ ...rules, [`scss/${key}`]: value }), []),
}
