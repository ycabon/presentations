const { readdirSync } = require("fs");
import rollupTypescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import multi from "@rollup/plugin-multi-entry";

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const excluded = ["utils", "dist"];

const applications = getDirectories("./demos")
  .filter((value) => !excluded.includes(value))
  .map((name) => `demos/${name}/index.tsx`);

export default {
  input: applications,
  plugins: [
    nodeResolve(),
    commonjs(),
    rollupTypescript({
      jsx: "react",
      jsxFactory: "jsx",
      target: "ES2020",
      strict: true,
      moduleResolution: "node",
    }),
    multi({
      exports: true,
      entryFileName: "index.js",
    }),
  ],
  output: {
    dir: `demos/dist/`,
    format: "es",
  },
};
