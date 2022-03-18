const path = require('path')
const fs = require('fs')

const ROOT = process.cwd()

const run = async () => {
	try {
		const packageData = fs.readFileSync(path.resolve(ROOT, './package.json'), 'utf8')
		const { scripts, devDependencies, ...packageDataOther } = JSON.parse(packageData)

		const newPackageData = {
			...packageDataOther,
			private: false,
			main: './index.js',
			types: './index.d.ts'
		}

		fs.writeFileSync(path.resolve(ROOT, './dist/package.json'), JSON.stringify(newPackageData, null, 4), 'utf8')
	} catch (err) {
		console.error(err)
		process.exit(1)
	}
}

run()
