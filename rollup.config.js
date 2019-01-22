import filesize from 'rollup-plugin-filesize';
import { plugin as analyze } from 'rollup-plugin-analyzer';
import visualizer from 'rollup-plugin-visualizer';
import progress from 'rollup-plugin-progress';
import clean from 'rollup-plugin-delete';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

import pkg from './package.json';

export default {
  input: 'src/lib/index.js',
  output: [
    {
      globals: {
        react: 'React',
      },
      file: pkg.main,
      format: 'cjs',
      name: 'ui-core',
      sourcemap: false,
    },
    {
      globals: {
        react: 'React',
      },
      file: pkg.module,
      format: 'es',
      name: 'ui-core',
      sourcemap: false,
    },
  ],
  plugins: [
    filesize(),
    analyze(),
    visualizer({
      filename: './bundle-analysis.html',
      title: pkg.name,
    }),
    progress({
      clearLine: false,
    }),
    clean({ targets: 'lib' }),
    external(),
    postcss({
      modules: true,
    }),
    url(),
    svgr(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
      plugins: ['@babel/plugin-external-helpers'],
    }),
    resolve(),
    commonjs({
      include: ['node_modules/**'],
      exclude: ['node_modules/process-es6/**'],
      namedExports: {
        'node_modules/react/index.js': [
          'Children',
          'Component',
          'PureComponent',
          'PropTypes',
          'createElement',
          'Fragment',
        ],
      },
    }),
  ],
};
