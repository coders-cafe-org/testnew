module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('style.css')
  eleventyConfig.addPassthroughCopy('images')

  return {
    passthroughFileCopy: true
  }
}
