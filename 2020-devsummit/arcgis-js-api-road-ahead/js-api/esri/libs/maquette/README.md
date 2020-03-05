![NpmLicense](https://img.shields.io/npm/l/maquette.svg)
![npmBundleSize](https://img.shields.io/bundlephobia/minzip/maquette.svg)
[![CircleCI branch](https://img.shields.io/circleci/project/github/AFASSoftware/maquette/master.svg)](https://circleci.com/gh/AFASSoftware/maquette)

Maquette
=========

Maquette is a Javascript utility which makes it easy to synchronize the DOM tree in the browser with your data.
It uses a technique called 'Virtual DOM'.
Compared to other virtual DOM implementations, maquette has 3 advantages:

* It is very lightweight (3.6Kb gzipped)
* It allows changes to be animated
* It is optimized for speed

Visit the [website](https://maquettejs.org) for more information.

## Notes

This is a custom version of maquette for the JS API based on version 3.3.4. It has the following modifications:

* Automatically sanitizes `innerHTML` content with [`arcgis-html-sanitizer`](https://github.com/Esri/arcgis-html-sanitizer) (see [`projection.ts`](https://devtopia.esri.com/WebGIS/arcgis-js-api/blob/3e7c098ceb3fcc7529ab5aaa3261432cd29a1244/esri/libs/maquette/projection.ts) for more info)

Modifications are denoted by a `// ⚠ JS API customization` comment.  
 
