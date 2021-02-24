const { writeFileSync } = require('fs')
const { join, resolve } = require('path')

const meta = require('../content/meta.json')

const dir = resolve(__dirname, '..')
const dst = join(dir, 'site-data.json')

const data = {
  date: (new Date()).toJSON().split('T')[0],
  meta
}
const json = JSON.stringify(data, null, 2)

writeFileSync(dst, json)
