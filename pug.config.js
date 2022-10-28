// initialize markdown rendering
const renderMarkdown = require('./markdown')

const assetPath = path => {
  let revs
  try { revs = require('./rev-manifest.json') } catch (error) { }
  return `${(revs && revs[path]) || path}`
}
const assetUrl = (path, protocol = 'https') => {
  return `${protocol}://bitcoinmythology.org${assetPath(path)}`
}

module.exports = {
  basedir: './src/pages/includes',
  siteData: require('./site-data'),
  assetUrl,
  assetPath,
  renderMarkdown,
}
