import rollupTypescript from "@rollup/plugin-typescript";
import { nodeResolve } from '@rollup/plugin-node-resolve';


export default [
  {
    input: "demos/demo1/index.tsx",
    plugins: [
      nodeResolve(),
      rollupTypescript({
        tsconfig: "./tsconfig.json"
      }),
    ],
    output: {
      file: "demos/demo1/index.js",
      format: "iife",
    },
  },
];
