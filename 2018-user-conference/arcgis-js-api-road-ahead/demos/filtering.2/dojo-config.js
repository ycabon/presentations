// create or use existing global dojoConfig
var dojoConfig = this.dojoConfig || {};

(function() {
  var config = dojoConfig;

  // set default properties
  if (!config.hasOwnProperty("async")) {
    config.async = true;
  }
  if (!config.hasOwnProperty("isDebug")) {
    config.isDebug = true;
  }

  // add packages for libs that are not siblings to dojo
  (function() {
    var packages = config.packages || [];

    function addPkgIfNotPresent(newPackage) {
      for (var i = 0; i < packages.length; i++) {
        var pkg = packages[i];
        if (pkg.name === newPackage.name) {
          return;
        }
      }

      packages.push(newPackage);
    }

    addPkgIfNotPresent({
      name: "@dojo",
      location: "http://ycabon.esri.com/arcgis-js-api-4/node_modules/@dojo"
    });
    addPkgIfNotPresent({
      name: "cldrjs",
      location: "http://ycabon.esri.com/arcgis-js-api-4/node_modules/cldrjs",
      main: "dist/cldr"
    });
    addPkgIfNotPresent({
      name: "globalize",
      location: "http://ycabon.esri.com/arcgis-js-api-4/node_modules/globalize",
      main: "dist/globalize"
    });
    addPkgIfNotPresent({
      name: "maquette",
      location: "http://ycabon.esri.com/arcgis-js-api-4/node_modules/maquette",
      main: "dist/maquette.umd"
    });
    addPkgIfNotPresent({
      name: "maquette-css-transitions",
      location: "http://ycabon.esri.com/arcgis-js-api-4/node_modules/maquette-css-transitions",
      main: "dist/maquette-css-transitions.umd"
    });
    addPkgIfNotPresent({
      name: "maquette-jsx",
      location: "http://ycabon.esri.com/arcgis-js-api-4/node_modules/maquette-jsx",
      main: "dist/maquette-jsx.umd"
    });
    addPkgIfNotPresent({
      name: "tslib",
      location: "http://ycabon.esri.com/arcgis-js-api-4/node_modules/tslib",
      main: "tslib"
    });

    config.packages = packages;
  })();

  // configure map.globalize
  var map = config.map || {};
  if (!map.globalize) {
    map.globalize = {
      "cldr": "cldrjs/dist/cldr",
      "cldr/event": "cldrjs/dist/cldr/event",
      "cldr/supplemental": "cldrjs/dist/cldr/supplemental",
      "cldr/unresolved": "cldrjs/dist/cldr/unresolved"
    };
    config.map = map;
  }
})();
