'use strict';

define(['react', 'react/react-dom', 'esri/Map', 'esri/views/MapView', 'esri/layers/VectorTileLayer', 'app/components/zoom', 'dojo/domReady!'], function (_react, _reactDom, _Map, _MapView, _VectorTileLayer, _zoom) {
  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _Map2 = _interopRequireDefault(_Map);

  var _MapView2 = _interopRequireDefault(_MapView);

  var _VectorTileLayer2 = _interopRequireDefault(_VectorTileLayer);

  var _zoom2 = _interopRequireDefault(_zoom);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var map = new _Map2.default({
    layers: [new _VectorTileLayer2.default({
      url: "https://www.arcgis.com/sharing/rest/content/items/00cd8e843bae49b3a040423e5d65416b/resources/styles/root.json"
    })]
  });
  var view = new _MapView2.default({
    container: document.getElementById('viewDiv'),
    map: map,
    center: [-118.37, 34.06],
    zoom: 12,
    ui: {
      components: []
    },
    padding: {
      top: 80
    }
  });
  var node = document.createElement('div');
  view.then(function () {
    view.ui.add(node, 'top-left');

    _reactDom2.default.render(_react2.default.createElement(_zoom2.default, {
      view: view
    }), node);
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmpzeCIsInNvdXJjZXNDb250ZW50IjpbXX0=