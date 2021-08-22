# Eleventy Plugin Boxicons

Eleventy plugin which provides a shortcode to inline SVGs from the [Boxicons](https://github.com/atisawd/boxicons) collection.

## Installation

Install the necessary modules in your project.

```bash
npm install --save boxicons eleventy-plugin-boxicons
```

Then register the plugin in your `.eleventy.js` file.

```js
const eleventyBoxicons = require('eleventy-plugin-boxicons')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyBoxicons)
}
```

## Usage

The shortcode is called `boxicon` and takes two arguments. The first one is the icon's name and the second one is the type.

| arguments | description                        | default   |
| --------- | ---------------------------------- | --------- |
| 0         | icon's name                        |           |
| 1         | type 'regular', 'solid' or 'logos' | 'regular' |

Example:
```njk
{% boxicon "github", "logos" %}
```
