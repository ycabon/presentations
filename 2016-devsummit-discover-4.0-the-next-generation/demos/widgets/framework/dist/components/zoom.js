'use strict';

define(['exports', 'react', 'esri/core/watchUtils', 'esri/widgets/Zoom/ZoomViewModel'], function (exports, _react, _watchUtils, _ZoomViewModel) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _watchUtils2 = _interopRequireDefault(_watchUtils);

  var _ZoomViewModel2 = _interopRequireDefault(_ZoomViewModel);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Zoom = _react2.default.createClass({
    displayName: 'Zoom',
    getInitialState: function getInitialState() {
      return {
        vm: new _ZoomViewModel2.default(),
        updating: false,
        maxZoomed: false,
        minZoomed: false
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

        _watchUtils2.default.init(view, 'zoom', function (val) {
          _this.setState({
            maxZoomed: val === view.constraints.maxZoom,
            minZoomed: val === view.constraints.minZoom
          });
        });
      });
    },
    zoomIn: function zoomIn() {
      if (!this.state.maxZoomed) {
        this.state.vm.zoomIn();
      }
    },
    zoomOut: function zoomOut() {
      if (!this.state.minZoomed) {
        this.state.vm.zoomOut();
      }
    },
    render: function render() {
      var btnstyle = 'zoom-btns';
      var maxstate = this.state.maxZoomed ? 'button btn-circle raised narrow disable' : 'button btn-circle raised narrow';
      var minstate = this.state.minZoomed ? 'button btn-circle raised narrow disable' : 'button btn-circle raised narrow';
      return _react2.default.createElement('div', {
        className: btnstyle
      }, _react2.default.createElement('div', {
        className: maxstate,
        onClick: this.zoomIn
      }, _react2.default.createElement('div', {
        className: 'center'
      }, _react2.default.createElement('i', {
        className: 'material-icons'
      }, 'add'))), _react2.default.createElement('div', {
        className: minstate,
        onClick: this.zoomOut
      }, _react2.default.createElement('div', {
        className: 'center'
      }, _react2.default.createElement('i', {
        className: 'material-icons'
      }, 'remove'))));
    }
  });

  exports.default = Zoom;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvem9vbS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFvRWUsSUFBSSIsImZpbGUiOiJjb21wb25lbnRzL3pvb20uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3YXRjaFV0aWxzIGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCBab29tVmlld01vZGVsIGZyb20gJ2Vzcmkvd2lkZ2V0cy9ab29tL1pvb21WaWV3TW9kZWwnO1xuXG5jb25zdCBab29tID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdm06IG5ldyBab29tVmlld01vZGVsKCksXG4gICAgICB1cGRhdGluZzogZmFsc2UsXG4gICAgICBtYXhab29tZWQ6IGZhbHNlLFxuICAgICAgbWluWm9vbWVkOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2aWV3OiB7fVxuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLnZpZXcudGhlbih2aWV3ID0+IHtcbiAgICAgIHRoaXMuc3RhdGUudm0udmlldyA9IHZpZXc7XG4gICAgICB3YXRjaFV0aWxzLmluaXQodmlldywgJ3pvb20nLCAodmFsKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1heFpvb21lZDogdmFsID09PSB2aWV3LmNvbnN0cmFpbnRzLm1heFpvb20sXG4gICAgICAgICAgbWluWm9vbWVkOiB2YWwgPT09IHZpZXcuY29uc3RyYWludHMubWluWm9vbVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgLyp3YXRjaFV0aWxzLmluaXQodmlldywgJ3N0YXRpb25hcnknLCAodXBkYXRpbmcpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVwZGF0aW5nIH0pO1xuICAgICAgfSk7Ki9cbiAgICB9KTtcbiAgfSxcblxuICB6b29tSW4oKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLm1heFpvb21lZCkge1xuICAgICAgdGhpcy5zdGF0ZS52bS56b29tSW4oKTtcbiAgICB9XG4gIH0sXG5cbiAgem9vbU91dCgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUubWluWm9vbWVkKSB7XG4gICAgICB0aGlzLnN0YXRlLnZtLnpvb21PdXQoKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IGJ0bnN0eWxlID0gJ3pvb20tYnRucyc7IC8vdGhpcy5zdGF0ZS51cGRhdGluZyA/ICd6b29tLWJ0bnMnIDogJ3pvb20tYnRucyB2aWV3LWJ1c3knO1xuICAgIGxldCBtYXhzdGF0ZSA9IHRoaXMuc3RhdGUubWF4Wm9vbWVkID8gJ2J1dHRvbiBidG4tY2lyY2xlIHJhaXNlZCBuYXJyb3cgZGlzYWJsZScgOiAnYnV0dG9uIGJ0bi1jaXJjbGUgcmFpc2VkIG5hcnJvdyc7XG4gICAgbGV0IG1pbnN0YXRlID0gdGhpcy5zdGF0ZS5taW5ab29tZWQgPyAnYnV0dG9uIGJ0bi1jaXJjbGUgcmFpc2VkIG5hcnJvdyBkaXNhYmxlJyA6ICdidXR0b24gYnRuLWNpcmNsZSByYWlzZWQgbmFycm93JztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YnRuc3R5bGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWF4c3RhdGV9IG9uQ2xpY2s9e3RoaXMuem9vbUlufT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+YWRkPC9pPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e21pbnN0YXRlfSBvbkNsaWNrPXt0aGlzLnpvb21PdXR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5yZW1vdmU8L2k+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgWm9vbTtcbiJdfQ==