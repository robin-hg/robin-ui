import path from 'path'
import fs from 'fs'

import { icons } from 'feather-icons'
import { camelCase, pascalCase } from '@robin-ui/utils'

const rootDir = path.join(__dirname, '..')

const iconFolder = path.join(rootDir, 'src/icons')
const indexFile = path.join(rootDir, 'src/index.ts')

if (!fs.existsSync(iconFolder)) {
  fs.mkdirSync(iconFolder)
}
fs.writeFileSync(indexFile, '', 'utf-8')

Object.values(icons).forEach(icon => {
  const componentName = pascalCase(icon.name)

  const attrs = Object.entries(icon.attrs).reduce((acc, [key, value]) => {
    if (key !== 'class') {
      acc += `${camelCase(key)}="${value}" `
    }
    return acc
  }, '')

  const component = `
import createIcon from '../createIcon'
import { sxc } from '@robin-ui/styles'

export default createIcon(
  <sxc.svg ${attrs}>
    ${icon.contents}
  </sxc.svg>,
  '${componentName}')
`

  const location = path.join(iconFolder, `${componentName}.tsx`)
  fs.writeFileSync(location, component, 'utf-8')

  const exportString = `export { default as ${componentName} } from './icons/${componentName}'\r\n`
  fs.appendFileSync(indexFile, exportString, 'utf-8')
})
