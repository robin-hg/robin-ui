import { externals } from 'rollup-plugin-node-externals'
import esbuild from 'rollup-plugin-esbuild'

export default {
  input: 'src/index.ts',
  preserveModules: true,
  plugins: [externals(), esbuild({ tsconfig: './tsconfig.prod.json', sourceMap: true })],
  output: [
    {
      dir: `dist/cjs`,
      format: 'cjs',
      exports: 'named'
    },
    {
      dir: `dist/esm`,
      format: 'esm'
    }
  ]
}
