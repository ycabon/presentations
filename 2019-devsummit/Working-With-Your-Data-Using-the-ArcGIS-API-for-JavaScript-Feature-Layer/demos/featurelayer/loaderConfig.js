const href = location.href;
var appName = href.substring(href.lastIndexOf('/') + 1, href.indexOf(".html"));
var path = href.substring(0, href.lastIndexOf('/'));

var loaderConfig = {
  has: {
    // This flag moves data processing of client feature layer classes
    // to workers. We are still figuring out how to make this the default
    "esri-workers-for-memory-layers": 0
  },
  paths: {
    app: `${path}/src/${appName}`
  }
};

window.dojoConfig = loaderConfig;