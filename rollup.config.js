import { plugin as analyze } from 'rollup-plugin-analyzer';
import visualizer from 'rollup-plugin-visualizer';
import clean from 'rollup-plugin-delete';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import filesize from 'rollup-plugin-filesize';
import progress from 'rollup-plugin-progress';
import url from 'rollup-plugin-url';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import svgr from '@svgr/rollup';
import fs from 'fs';

import pkg from './package.json';

const getFilteredFolders = files => files.filter(name => name.indexOf('.') === -1);

const getFiles = path => {
  return new Promise(resolve => {
    const componentFolder = /[^/]*$/.exec(path)[0];
    const folder = fs.readdirSync(path);
    const inputFolders = getFilteredFolders(folder).map(name => ({
      input: `src/lib/${componentFolder}/${name}/index.js`,
      file: `lib/${componentFolder}/${name}.js`,
    }));
    resolve(inputFolders);
  });
};

const mainFile = [
  {
    input: `src/lib/index.js`,
    file: `lib/index.js`,
  },
];

const generateConfig = async () => {
  const [components, utils] = await Promise.all([
    getFiles('src/lib/components'),
    getFiles('src/lib/utils'),
  ]);

  return [].concat(components, utils, mainFile).map(({ input, file }) => ({
    input,
    output: {
      file,
      globals: { react: 'React' },
      format: 'cjs',
      name: 'ui-core',
    },
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
      external(),
      resolve({
        preferBuiltins: true,
      }),
      postcss({
        modules: true,
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
          'node_modules/react-dom/index.js': ['createPortal', 'findDOMNode'],
        },
      }),
      url(),
      svgr(),
      babel({
        runtimeHelpers: true,
        exclude: 'node_modules/**',
        plugins: ['@babel/plugin-external-helpers'],
      }),
    ],
  }));
};

export default generateConfig();
