require([
  "esri/portal/Portal",
  "esri/identity/OAuthInfo",
  "esri/identity/IdentityManager",
  "esri/Map",
  "esri/layers/VectorTileLayer",
  "esri/layers/ArcGISImageLayer",
  "esri/views/MapView",
  "esri/widgets/Search",
  "esri/widgets/Home",
  "esri/widgets/Locate",
  "esri/widgets/Track",
  "dojo/domReady!"
], function (
  Portal, OAuthInfo, IdentityManager,
  Map,
  VectorTileLayer, ArcGISImageLayer,
  MapView,
  Search, Home, Locate, Track
  ) {

    var map = new Map({
      layers: [
        new VectorTileLayer({
          url: "https://www.arcgis.com/sharing/rest/content/items/00cd8e843bae49b3a040423e5d65416b/resources/styles/root.json"
        })/*,
        new ArcGISImageLayer({
          url: "http://traffic.arcgis.com/arcgis/rest/services/World/Traffic/MapServer"
        })*/
      ]
    });

    var view = new MapView({
      center: [-118.170, 34.025],
      zoom: 12,
      container: "viewDiv",
      map: map,
      ui: {
        components: ["zoom", "compass", "attribution"]
      }
    });

    var searchWidget = new Search({
      viewModel: {
        view: view
      }
    });
    searchWidget.startup();

    var homeWidget = new Home({
      viewModel: {
        view: view
      }
    });
    homeWidget.startup();

    var locateWidget = new Locate({
      viewModel: {
        view: view
      }
    });
    locateWidget.startup();

    view.then(function() {
      view.ui.add(searchWidget, "top-right");
      view.ui.add(homeWidget, "top-left");
      view.ui.add(locateWidget, "top-left");
      view.ui.move("compass", "bottom-right");
    });

    var btn = document.getElementById("switchView");
    var container = document.getElementById("viewContainer");
    btn.addEventListener("click", function () {
      container.classList.toggle("view-portrait");
      container.classList.toggle("view-landscape");
      view._measure();
    });
    /*
    var codeBtn = document.getElementById("showCode");
    var codeArea = document.getElementById("code");
    codeBtn.addEventListener("click", function() {
      codeArea.classList.toggle("visible");
    });
    */
  });