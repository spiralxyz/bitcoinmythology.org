// initialize markdown rendering
const renderMarkdown = require('./markdown')

const slugify = str => str.toLowerCase().replace(/\W/, '-')
const random = max =>  Math.floor(Math.random() * Math.floor(max))
const linkTarget = url => url.startsWith('http') ? '_blank' : null
const assetPath = path => {
  let revs
  try { revs = require('./rev-manifest.json') } catch (error) { }
  return `${(revs && revs[path]) || path}`
}
const assetUrl = (path, protocol = 'https') => {
  return `${protocol}://bitcoinmythology.org/${assetPath(path)}`
}

module.exports = {
  basedir: './src/pages/includes',
  siteData: require('./site-data'),
  random,
  slugify,
  assetUrl,
  assetPath,
  linkTarget,
  renderMarkdown,
}
