import rollupTypescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const plugins = [
  nodeResolve(),
  commonjs(),
  rollupTypescript({
    tsconfig: "./tsconfig.json",
  }),
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
  {
    input: "demos/t9n-1-basis/index.tsx",
    plugins,
    output: {
      file: "demos/t9n-1-basis/index.js",
      format: "iife",
    },
  },
  {
    input: "demos/t9n-2-generic-widget/index.tsx",
    plugins,
    output: {
      file: "demos/t9n-2-generic-widget/index.js",
      format: "iife",
    },
  },
  {
    input: "demos/t9n-3-decorators/index.tsx",
    plugins,
    output: {
      file: "demos/t9n-3-decorators/index.js",
      format: "iife",
    },
  },
];
