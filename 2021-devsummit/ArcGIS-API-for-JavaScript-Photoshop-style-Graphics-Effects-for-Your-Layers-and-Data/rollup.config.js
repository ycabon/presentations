import rollupTypescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import cleaner from "rollup-plugin-cleaner";

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
    plugins: [
      ...plugins,
      cleaner({
        targets: ["demos/effect-explorer/dist/"],
      }),
    ],
    preserveEntrySignatures: false,
    output: {
      dir: "demos/effect-explorer/dist/",
      format: "es",
    },
  },
  {
    input: "demos/scale-dependent-effect/index.tsx",
    plugins: [
      ...plugins,
      cleaner({
        targets: ["demos/scale-dependent-effect/dist/"],
      }),
    ],
    preserveEntrySignatures: false,
    output: {
      dir: "demos/scale-dependent-effect/dist/",
      format: "es",
    },
  },
];
