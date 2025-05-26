import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import postcss from 'rollup-plugin-postcss'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import analyze from 'rollup-plugin-analyzer'
import copy from 'rollup-plugin-copy'
import typescript from '@rollup/plugin-typescript'
import url from '@rollup/plugin-url'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    url({
      include: ['**/*.jpg', '**/*.png', '**/*.svg'],
      limit: 8192,
      emitFiles: true,
      fileName: '[dirname][hash][extname]',
      destDir: 'dist/assets'
    }),
    esbuild({
      target: 'esnext',
      jsx: 'automatic',
      minify: true
    }),
    postcss({
      extract: true,
      minimize: true
    }),
    analyze(),
    copy({
      targets: [{ src: 'src/assets/*', dest: 'dist/assets' }]
    }),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist/types',
      rootDir: 'src',
      exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.ts']
    })
  ],
  external: ['react', 'react-dom']
}
