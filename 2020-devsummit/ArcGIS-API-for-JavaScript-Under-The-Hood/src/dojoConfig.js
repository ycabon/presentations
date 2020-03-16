const demoRegexp = /(.+)\/(?:index\.html)?$/g; // captures the url minus the index.html
const appLocation = demoRegexp.exec(location.href)[1].replace("src/", "dist/");

window.dojoConfig = {
  packages: [
    {
      name: "app",
      location: appLocation
    },
    {
      name: "common",
      location: appLocation + "/../common"
    },
    {
      name: "gl-matrix",
      location: appLocation + "/../../node_modules/gl-matrix",
      main: "gl-matrix-min"
    },
    {
      name: "libs",
      location: appLocation + "/../../src/libs"
    }
  ],
  deps: ['app/index']
};
