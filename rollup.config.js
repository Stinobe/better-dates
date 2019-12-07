import pkg from './package.json';

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const input = './src/index.js',
  exclude = "node_modules/**";

export default [
  {
    input,
    output: {
      file: pkg.main,
      format: "cjs"
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude,
        babelrc: false,
        presets: [
          ['@babel/env',
            {
              modules: false,
              useBuiltIns: "usage",
              targets: 'maintained node versions'
            }]
        ]
      })
    ]
  },
  {
    input,
    output: {
      file: pkg.browser,
      format: "umd",
      name: "better-dates"
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({ exclude })
    ]
  },
  {
    input,
    output: {
      file: pkg.browser.replace(/\.js$/, '.min.js'),
      format: "umd",
      name: "better-dates"
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({ exclude }),
      terser()
    ]
  },
  {
    input,
    output: {
      file: pkg.module,
      format: "es"
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({ exclude })
    ]
  }
];