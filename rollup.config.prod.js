import buble from '@rollup/plugin-buble'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import { terser } from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'

export default commandLineArgs => {
  return {
    input: 'src/index.js',
    external: ['vue-focus-lock'],
    plugins: [
      commonjs(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      vue({
        css: true,
        compileTemplate: true,
        template: {
          isProduction: true,
          optimizeSSR: commandLineArgs.format === 'cjs'
        }
      }),
      buble(),
      commandLineArgs.format === 'iife' && terser()
    ],
    output: {
      name: 'VueSocialChat',
      exports: 'named',
      globals: {
        'vue-focus-lock': 'FocusLock'
      }
    }
  }
}
