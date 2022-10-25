const pug = require('pug')
const { mkdirSync, writeFileSync } = require('fs')
const { dirname, resolve } = require('path')
const config = require('../pug.config')

const renderPage = (name, out = null, data = {}) => {
  const file = resolve(__dirname, '..', `src/pages/${name}.pug`)
  const options = Object.assign({}, config, data)
  const rendered = pug.renderFile(file, options)
  const dest = out === 'index' ? 'index.html' : `${out}/index.html`
  const dst = resolve(__dirname, '..', 'dist', dest)
  const dir = dirname(dst)

  mkdirSync(dir, { recursive: true })
  writeFileSync(dst, rendered)
}

renderPage('volume-1', 'index')
renderPage('volume-1', 'volume-1-bitcoin-mining')
renderPage('volume-2', 'volume-2-bitcoin-security')
