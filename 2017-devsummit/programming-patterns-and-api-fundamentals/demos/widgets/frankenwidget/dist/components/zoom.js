'use strict';

define(['exports', 'react', 'esri/core/watchUtils', 'esri/widgets/Zoom/ZoomViewModel', './locate', './home', './compass'], function (exports, _react, _watchUtils, _ZoomViewModel, _locate, _home, _compass) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _watchUtils2 = _interopRequireDefault(_watchUtils);

  var _ZoomViewModel2 = _interopRequireDefault(_ZoomViewModel);

  var _locate2 = _interopRequireDefault(_locate);

  var _home2 = _interopRequireDefault(_home);

  var _compass2 = _interopRequireDefault(_compass);

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

        _watchUtils2.default.init(view, 'stationary', function (updating) {
          _this.setState({
            updating: updating
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
      var btnstyle = this.state.updating ? 'zoom-btns' : 'zoom-btns view-busy';
      var maxstate = this.state.maxZoomed ? 'button raised narrow disable' : 'button raised narrow';
      var minstate = this.state.minZoomed ? 'button raised narrow disable' : 'button raised narrow';
      return _react2.default.createElement('div', {
        className: btnstyle
      }, _react2.default.createElement('div', {
        className: maxstate,
        onClick: this.zoomIn
      }, _react2.default.createElement('div', {
        className: 'center'
      }, _react2.default.createElement('i', {
        className: 'material-icons'
      }, 'add'))), _react2.default.createElement(_locate2.default, {
        view: this.props.view
      }), _react2.default.createElement(_compass2.default, {
        view: this.props.view
      }), _react2.default.createElement(_home2.default, {
        view: this.props.view
      }), _react2.default.createElement('div', {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvem9vbS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkEwRWUsSUFBSSIsImZpbGUiOiJjb21wb25lbnRzL3pvb20uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3YXRjaFV0aWxzIGZyb20gJ2VzcmkvY29yZS93YXRjaFV0aWxzJztcbmltcG9ydCBab29tVmlld01vZGVsIGZyb20gJ2Vzcmkvd2lkZ2V0cy9ab29tL1pvb21WaWV3TW9kZWwnO1xuaW1wb3J0IExvY2F0ZSBmcm9tICcuL2xvY2F0ZSc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IENvbXBhc3MgZnJvbSAnLi9jb21wYXNzJztcblxuY29uc3QgWm9vbSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZtOiBuZXcgWm9vbVZpZXdNb2RlbCgpLFxuICAgICAgdXBkYXRpbmc6IGZhbHNlLFxuICAgICAgbWF4Wm9vbWVkOiBmYWxzZSxcbiAgICAgIG1pblpvb21lZDogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmlldzoge31cbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy52aWV3LnRoZW4odmlldyA9PiB7XG4gICAgICB0aGlzLnN0YXRlLnZtLnZpZXcgPSB2aWV3O1xuICAgICAgd2F0Y2hVdGlscy5pbml0KHZpZXcsICd6b29tJywgKHZhbCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtYXhab29tZWQ6IHZhbCA9PT0gdmlldy5jb25zdHJhaW50cy5tYXhab29tLFxuICAgICAgICAgIG1pblpvb21lZDogdmFsID09PSB2aWV3LmNvbnN0cmFpbnRzLm1pblpvb21cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHdhdGNoVXRpbHMuaW5pdCh2aWV3LCAnc3RhdGlvbmFyeScsICh1cGRhdGluZykgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXBkYXRpbmcgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcblxuICB6b29tSW4oKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLm1heFpvb21lZCkge1xuICAgICAgdGhpcy5zdGF0ZS52bS56b29tSW4oKTtcbiAgICB9XG4gIH0sXG5cbiAgem9vbU91dCgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUubWluWm9vbWVkKSB7XG4gICAgICB0aGlzLnN0YXRlLnZtLnpvb21PdXQoKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IGJ0bnN0eWxlID0gdGhpcy5zdGF0ZS51cGRhdGluZyA/ICd6b29tLWJ0bnMnIDogJ3pvb20tYnRucyB2aWV3LWJ1c3knO1xuICAgIGxldCBtYXhzdGF0ZSA9IHRoaXMuc3RhdGUubWF4Wm9vbWVkID8gJ2J1dHRvbiByYWlzZWQgbmFycm93IGRpc2FibGUnIDogJ2J1dHRvbiByYWlzZWQgbmFycm93JztcbiAgICBsZXQgbWluc3RhdGUgPSB0aGlzLnN0YXRlLm1pblpvb21lZCA/ICdidXR0b24gcmFpc2VkIG5hcnJvdyBkaXNhYmxlJyA6ICdidXR0b24gcmFpc2VkIG5hcnJvdyc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2J0bnN0eWxlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e21heHN0YXRlfSBvbkNsaWNrPXt0aGlzLnpvb21Jbn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFkZDwvaT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxMb2NhdGUgdmlldz17dGhpcy5wcm9wcy52aWV3fS8+XG4gICAgICAgIDxDb21wYXNzIHZpZXc9e3RoaXMucHJvcHMudmlld30vPlxuICAgICAgICA8SG9tZSB2aWV3PXt0aGlzLnByb3BzLnZpZXd9Lz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e21pbnN0YXRlfSBvbkNsaWNrPXt0aGlzLnpvb21PdXR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5yZW1vdmU8L2k+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgWm9vbTtcbiJdfQ==