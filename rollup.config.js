import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "lib/core.js",
    plugins: [terser()],
    output: {
      file: "dist/umd/agc-core.js",
      format: "umd",
      name: "agcCalculatorsCore",
      esModule: false
    }
  },
  {
    input: {
        index: 'lib/core.js',
        dates: 'lib/date-utils.js',
        types: 'lib/type-utils.js',
        forms: 'lib/form-utils.js'
    },
    output: [
        {
            dir: 'dist/esm',
            format: 'esm'
        },
        {
            dir: 'dist/cjs',
            format: 'cjs'
        }
    ]
  }
];
