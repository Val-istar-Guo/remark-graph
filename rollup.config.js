import { compiler } from './build.config'


export default [
  compiler({
    input: 'src/index.js',
    output: { file: 'dist/bundle.js' },
  }),
  compiler({
    input: 'src/browser/index.js',
    output: { file: 'dist/bundle.js' },
  }),
]
