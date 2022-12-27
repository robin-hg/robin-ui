import type { RollupOptions } from 'rollup'
import { externals } from 'rollup-plugin-node-externals'
import esbuild from 'rollup-plugin-esbuild'

const config: RollupOptions = {
  input: 'src/index.ts',
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
  ],
  plugins: [
    externals(),
    esbuild({ tsconfig: './tsconfig.prod.json', sourceMap: true, jsx: 'automatic' })
  ]
}

export default config
