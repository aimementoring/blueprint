import { plugin as analyze } from 'rollup-plugin-analyzer';
import visualizer from 'rollup-plugin-visualizer';
import clean from 'rollup-plugin-delete';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import execute from 'rollup-plugin-execute';
import filesize from 'rollup-plugin-filesize';
import progress from 'rollup-plugin-progress';
import url from 'rollup-plugin-url';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import svgr from '@svgr/rollup';

// import external from 'rollup-plugin-peer-deps-external';

import pkg from './package.json';

export default {
  input: 'src/lib/index.js',
  external: ['react', 'styled-jsx/style'],
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
    // external(),
    execute('mkdir dist'),
    postcss({
      modules: true,
    }),
    svgr(),
    resolve({
      extensions: ['.js', '.jsx', '.mjs'],
      main: true,
      browser: true,
    }),
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
      sourceMap: false,
    }),
    // Inline import files as data-URIs or copy them to output
    // @see https://github.com/rollup/rollup-plugin-url
    url({
      limit: 25 * 1024, // inline files < 25k, copy files > 25k
    }),
    babel({
      // See babel config in `package.json`
      runtimeHelpers: true,
      exclude: 'node_modules/**',
      plugins: ['@babel/plugin-external-helpers'],
    }),
  ],
};
