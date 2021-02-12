import rollupTypescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const plugins = [
  nodeResolve(),
  commonjs(),
  rollupTypescript({
    jsx: "react",
    jsxFactory: "jsx",
    target: "ES2020",
    strict: true,
    moduleResolution: "node",
  }),
];

export default [
  {
    input: "demos/effect-explorer/index.tsx",
    plugins,
    preserveEntrySignatures: false,
    output: {
      dir: "demos/effect-explorer/dist/",
      format: "es",
    },
  },
];
