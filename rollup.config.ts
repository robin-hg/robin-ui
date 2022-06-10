import externals from 'rollup-plugin-node-externals'
import typescript from 'rollup-plugin-typescript2'

export default {
	input: 'src/index.ts',
	preserveModules: true,
	plugins: [
		externals(),
		typescript({ tsconfig: './tsconfig.prod.json', useTsconfigDeclarationDir: true })
	],
	output: [
		{
			dir: `dist/cjs`,
			format: 'cjs',
			sourcemap: true,
			exports: 'named'
		},
		{
			dir: `dist/esm`,
			format: 'esm',
			sourcemap: true
		}
	]
}
