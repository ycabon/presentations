'use strict';

define(['exports', 'react', 'esri/core/watchUtils', 'esri/widgets/Home/HomeViewModel'], function (exports, _react, _watchUtils, _HomeViewModel) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _watchUtils2 = _interopRequireDefault(_watchUtils);

  var _HomeViewModel2 = _interopRequireDefault(_HomeViewModel);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Home = _react2.default.createClass({
    displayName: 'Home',
    getInitialState: function getInitialState() {
      return {
        vm: new _HomeViewModel2.default(),
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
    home: function home() {
      this.state.vm.go();
    },
    render: function render() {
      var maxstate = this.state.maxZoomed ? 'button raised narrow disable' : 'button raised narrow';
      return _react2.default.createElement('div', {
        className: maxstate,
        onClick: this.home
      }, _react2.default.createElement('div', {
        className: 'center'
      }, _react2.default.createElement('i', {
        className: 'material-icons'
      }, 'home')));
    }
  });

  exports.default = Home;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkE2Q2UsSUFBSSIsImZpbGUiOiJjb21wb25lbnRzL2hvbWUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3YXRjaFV0aWxzIGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCBIb21lVmlld01vZGVsIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Ib21lL0hvbWVWaWV3TW9kZWwnO1xuXG5jb25zdCBIb21lID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdm06IG5ldyBIb21lVmlld01vZGVsKCksXG4gICAgICB1cGRhdGluZzogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmlldzoge31cbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy52aWV3LnRoZW4odmlldyA9PiB7XG4gICAgICB0aGlzLnN0YXRlLnZtLnZpZXcgPSB2aWV3O1xuICAgICAgd2F0Y2hVdGlscy5pbml0KHZpZXcsICdzdGF0aW9uYXJ5JywgKHVwZGF0aW5nKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1cGRhdGluZyB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIGhvbWUoKSB7XG4gICAgdGhpcy5zdGF0ZS52bS5nb0hvbWUoKTtcbiAgfSxcblxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgbWF4c3RhdGUgPSB0aGlzLnN0YXRlLm1heFpvb21lZCA/ICdidXR0b24gcmFpc2VkIG5hcnJvdyBkaXNhYmxlJyA6ICdidXR0b24gcmFpc2VkIG5hcnJvdyc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e21heHN0YXRlfSBvbkNsaWNrPXt0aGlzLmhvbWV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+aG9tZTwvaT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0=