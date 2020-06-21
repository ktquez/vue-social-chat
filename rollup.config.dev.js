import buble from '@rollup/plugin-buble'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import chokidar from 'chokidar'
import { eslint } from 'rollup-plugin-eslint'
import vue from 'rollup-plugin-vue'
import svg from 'rollup-plugin-vue-inline-svg'

export default {
  input: 'src/index.js',
  watch: {
    chokidar,
    include: ['src/**']
  },
  plugins: [
    commonjs(),
    resolve(),
    svg(),
    eslint({
      include: './src/**',
      exclude: ['node_modules/**', 'src/icons/**']
    }),
    vue({
      css: true,
      compileTemplate: true
    }),
    buble()
  ],
  output: [
    {
      name: 'VueSocialChat',
      file: 'demo/vue-social-chat.js',
      format: 'umd',
      exports: 'named'
    }
  ]
}
