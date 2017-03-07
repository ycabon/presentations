'use strict';

define(['exports', 'react', 'esri/core/watchUtils', 'esri/widgets/Locate/LocateViewModel'], function (exports, _react, _watchUtils, _LocateViewModel) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _watchUtils2 = _interopRequireDefault(_watchUtils);

  var _LocateViewModel2 = _interopRequireDefault(_LocateViewModel);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Locate = _react2.default.createClass({
    displayName: 'Locate',
    getInitialState: function getInitialState() {
      return {
        vm: new _LocateViewModel2.default(),
        updating: false
      };
    },
    getDefaultProps: function getDefaultProps() {
      return {
        view: {}
      };
    },
    componentDidMount: function componentDidMount() {
      var _this = this;

      this.props.view.then(function (view) {
        _this.state.vm.view = view;

        _watchUtils2.default.init(view, 'stationary', function (updating) {
          _this.setState({
            updating: updating
          });
        });
      });
    },
    locate: function locate() {
      this.state.vm.locate();
    },
    render: function render() {
      var maxstate = this.state.maxZoomed ? 'button raised narrow disable' : 'button raised narrow';
      return _react2.default.createElement('div', {
        className: maxstate,
        onClick: this.locate
      }, _react2.default.createElement('div', {
        className: 'center'
      }, _react2.default.createElement('i', {
        className: 'material-icons'
      }, 'location_on')));
    }
  });

  exports.default = Locate;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9jYXRlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQTZDZSxNQUFNIiwiZmlsZSI6ImNvbXBvbmVudHMvbG9jYXRlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2F0Y2hVdGlscyBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5pbXBvcnQgTG9jYXRlVmlld01vZGVsIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Mb2NhdGUvTG9jYXRlVmlld01vZGVsJztcblxuY29uc3QgTG9jYXRlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdm06IG5ldyBMb2NhdGVWaWV3TW9kZWwoKSxcbiAgICAgIHVwZGF0aW5nOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2aWV3OiB7fVxuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLnZpZXcudGhlbih2aWV3ID0+IHtcbiAgICAgIHRoaXMuc3RhdGUudm0udmlldyA9IHZpZXc7XG4gICAgICB3YXRjaFV0aWxzLmluaXQodmlldywgJ3N0YXRpb25hcnknLCAodXBkYXRpbmcpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVwZGF0aW5nIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgbG9jYXRlKCkge1xuICAgIHRoaXMuc3RhdGUudm0ubG9jYXRlKCk7XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IG1heHN0YXRlID0gdGhpcy5zdGF0ZS5tYXhab29tZWQgPyAnYnV0dG9uIHJhaXNlZCBuYXJyb3cgZGlzYWJsZScgOiAnYnV0dG9uIHJhaXNlZCBuYXJyb3cnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXttYXhzdGF0ZX0gb25DbGljaz17dGhpcy5sb2NhdGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+bG9jYXRpb25fb248L2k+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBMb2NhdGU7XG4iXX0=