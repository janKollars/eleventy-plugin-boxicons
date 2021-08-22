const fs = require('fs')

const prefixMapper = {
  'regular': 'bx',
  'solid': 'bxs',
  'logos': 'bxl'
}

module.exports = {
  initArguments: {},
  configFunction: function(eleventyConfig, options = {}) {
    options = Object.assign({
      // TODO add default values
    }, options);

    eleventyConfig.addShortcode('boxicon', this.getBoxicon)
  },
  /**
   * @param {string} iconName 
   * @param {'regular'|'solid'|'logos'} type 
   * @returns {string} svg code of found icon
   */
  getBoxicon(iconName, type = 'regular') {
    let prefix
    if (Object.hasOwnProperty.call(prefixMapper, type)) {
      prefix = prefixMapper[type]
    } else {
      prefix = 'regular'
      console.warn(`Boxicons only provides the types 'regular', 'solid' an 'logos'. Falling back to 'regular'`)
    }
    return fs.readFileSync(`./node_modules/boxicons/svg/${type}/${prefix}-${iconName}.svg`, 'utf-8')
  }
}
