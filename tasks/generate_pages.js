const pug = require('pug')
const { mkdirSync, writeFileSync } = require('fs')
const { dirname, resolve } = require('path')
const config = require('../pug.config')

const renderPage = (name, out = null, data = {}) => {
  const file = resolve(__dirname, '..', `src/pages/${name}.pug`)
  const options = Object.assign({}, config, data)
  const rendered = pug.renderFile(file, options)
  const target = `${out || name}.html`
  const dst = resolve(__dirname, '..', 'dist', target)
  const dir = dirname(dst)

  mkdirSync(dir, { recursive: true })
  writeFileSync(dst, rendered)
}

renderPage('index')
