define([
  "dojo/_base/lang",
  "esri/config",
  
  "dojo/query"
], function(
  lang,
  esriConfig,
  query
) {

esriConfig.defaults.io.corsEnabledServers.push("genesis.esri.com");
esriConfig.defaults.io.proxyUrl = "/proxy/proxy.ashx";
// esriConfig.defaults.io.proxyUrl = "/proxy-test/proxy.jsp";

cartouche = query(".drawer ~ .applicationBar .cartouche");
if (cartouche) {
  cartouche.on("click", function(event) {
    query(".application").toggleClass("open");
  });
}


});
