import rollupTypescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const plugins = [
  nodeResolve(),
  commonjs(),
  rollupTypescript({
    tsconfig: "./tsconfig.json",
  })
];

export default [
  {
    input: "demos/intl-datetimeformat/index.tsx",
    plugins,
    output: {
      file: "demos/intl-datetimeformat/index.js",
      format: "iife",
    },
  },
  {
    input: "demos/intl-numberformat/index.tsx",
    plugins,
    output: {
      file: "demos/intl-numberformat/index.js",
      format: "iife",
    },
  },
];
