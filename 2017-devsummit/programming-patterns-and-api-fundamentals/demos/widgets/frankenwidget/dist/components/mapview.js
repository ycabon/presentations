'use strict';

define(['exports', 'react', 'react/react-dom', 'esri/views/MapView'], function (exports, _react, _reactDom, _MapView) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _MapView2 = _interopRequireDefault(_MapView);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Map = _react2.default.createClass({
    displayName: 'Map',
    componentDidMount: function componentDidMount() {
      var node = _reactDom2.default.findDOMNode(this.refs.mapView);

      var view = new _MapView2.default({
        container: node,
        map: this.props.map,
        center: [-100.33, 25.69],
        zoom: 10,
        ui: {
          components: []
        }
      });
    },
    render: function render() {
      return _react2.default.createElement('div', {
        className: 'mapView',
        ref: 'mapView'
      });
    }
  });

  exports.default = Map;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFwdmlldy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQTRCZSxHQUFHIiwiZmlsZSI6ImNvbXBvbmVudHMvbWFwdmlldy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0L3JlYWN0LWRvbSc7XG5pbXBvcnQgTWFwVmlldyBmcm9tICdlc3JpL3ZpZXdzL01hcFZpZXcnO1xuXG5jb25zdCBNYXAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5tYXBWaWV3KTtcbiAgICB2YXIgdmlldyA9IG5ldyBNYXBWaWV3KHtcbiAgICAgIGNvbnRhaW5lcjogbm9kZSxcbiAgICAgIG1hcDogdGhpcy5wcm9wcy5tYXAsXG4gICAgICBjZW50ZXI6IFstMTAwLjMzLCAyNS42OV0sXG4gICAgICB6b29tOiAxMCxcbiAgICAgIHVpOiB7XG4gICAgICAgIGNvbXBvbmVudHM6IFtdXG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFwVmlldycgcmVmPSdtYXBWaWV3Jz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE1hcDtcbiJdfQ==