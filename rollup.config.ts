import { externals } from 'rollup-plugin-node-externals'
import esbuild from 'rollup-plugin-esbuild'

export default {
  input: 'src/index.ts',
  plugins: [externals(), esbuild({ tsconfig: './tsconfig.prod.json', sourceMap: true })],
  output: [
    {
      dir: `dist/cjs`,
      format: 'cjs',
      exports: 'named',
      preserveModules: true
    },
    {
      dir: `dist/esm`,
      format: 'esm',
      preserveModules: true
    }
  ]
}
