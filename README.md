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

### Plugin options

When adding the plugin (as done described above), you can pass options to the plugin.

| option     | description                                         | default |
| ---------- | --------------------------------------------------- | ------- |
| classNames | string which should be added to the class attribute | `''`    |

Example:
```js
eleventyConfig.addPlugin(eleventyBoxicons, {
  classNames: 'boxicon another-class'
})
```
### Shortcode

The shortcode is called `boxicon` and takes two arguments. The first one is the icon's name and the second one is the type.

| arguments | description                              | default     |
| --------- | ---------------------------------------- | ----------- |
| 0         | icon's name                              |             |
| 1         | type `'regular'`, `'solid'` or `'logos'` | `'regular'` |

Example:
```njk
{% boxicon "github", "logos" %}
```

### Bonus

There is a helper function which behaves just like the shortcode. You can use it to e.g. create your own shortcode which wraps the icon. On my personal blog, I have a shortcode which creates an icon with a link to someone's social media profile.

```js
const { getBoxicon } = require('eleventy-plugin-boxicons')

function socialLink(socialNetwork, link, title) {
  return `
    <a
      class="social-icon"
      href="${link}"
      title="${title || `go to ${socialNetwork}`}">${getBoxicon(socialNetwork, 'logos')}
    </a>`
}
```
