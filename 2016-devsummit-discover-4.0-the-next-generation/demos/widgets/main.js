require([
  "esri/Map",
  "esri/layers/VectorTileLayer",
  "esri/layers/FeatureLayer",
  "esri/PopupTemplate",
  "esri/views/MapView",
  "esri/widgets/Search",
  "esri/widgets/Legend",
  "esri/widgets/Home",
  "esri/widgets/Locate",
  "dojo/domReady!"
], function (
  Map,
  VectorTileLayer,
  FeatureLayer,
  PopupTemplate,
  MapView,
  Search,
  Legend,
  Home,
  Locate
  ) {

    var fLayer = new FeatureLayer({
      url: "http://services.arcgis.com/p3UBboyC0NH1uCie/arcgis/rest/services/LA_Crime_WebMap/FeatureServer/0",
      definitionExpression: "GANG_RELATED = 'YES'",
      outFields: ["*"]
    });

    var template = new PopupTemplate({
      title: "{TYPE}",
      // Four fields are used in this template. The value of the selected feature will be
      // inserted in the location of each field name below
      content: "<p>{CATEGORY}</p>" +
        "<ul><li>Description: {STAT_DESC}</li>" +
        "<li>City: {CITY}</li><ul>"
    });
    fLayer.popupTemplate = template;

    var map = new Map({
      basemap: "dark-gray",
      layers: [fLayer]
    });

    var view = new MapView({
      center: [-118.174, 34.024],
      zoom: 14,
      container: "viewDiv",
      map: map,
      ui: {
        components: ["zoom", "compass", "attribution"]
      },
      padding: {
        top: 80
      }
    });

    view.then(function() {
      var legend = new Legend({
        viewModel: {
          view: view,
          layerInfos: [{
            layer: fLayer,
            title: "Crimes"
          }]
        }
      });
      legend.startup();

      var searchWidget = new Search({
        //Setting widget properties via viewModel is subject to
        //change for the 4.0 final release
        viewModel: { // autocasts as new SearchViewModel()
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

      view.ui.add(legend, "bottom-right");
      view.ui.add(searchWidget, "top-right");
      view.ui.add(homeWidget, "top-left");
      view.ui.add(locateWidget, "top-left");
    });
  });