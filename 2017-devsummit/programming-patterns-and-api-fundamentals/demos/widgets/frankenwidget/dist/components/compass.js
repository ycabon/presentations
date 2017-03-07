'use strict';

define(['exports', 'react', 'esri/core/watchUtils', 'esri/widgets/Compass/CompassViewModel'], function (exports, _react, _watchUtils, _CompassViewModel) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _watchUtils2 = _interopRequireDefault(_watchUtils);

  var _CompassViewModel2 = _interopRequireDefault(_CompassViewModel);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Compass = _react2.default.createClass({
    displayName: 'Compass',
    getInitialState: function getInitialState() {
      return {
        vm: new _CompassViewModel2.default(),
        updating: false,
        rotation: 0
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

        _watchUtils2.default.init(_this.state.vm, 'orientation', function (axes) {
          _this.setState({
            rotation: axes.z
          });
        });
      });
    },
    goNorth: function goNorth() {
      this.state.vm.reset();
    },
    render: function render() {
      var maxstate = this.state.maxZoomed ? 'button raised narrow disable' : 'button raised narrow';
      return _react2.default.createElement('div', {
        className: maxstate,
        onClick: this.goNorth
      }, _react2.default.createElement('div', {
        className: 'center'
      }, _react2.default.createElement('i', {
        style: {
          transform: 'rotateZ(' + (this.state.rotation - 45) + 'deg)'
        },
        className: 'material-icons'
      }, 'explore')));
    }
  });

  exports.default = Compass;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29tcGFzcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBbURlLE9BQU8iLCJmaWxlIjoiY29tcG9uZW50cy9jb21wYXNzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2F0Y2hVdGlscyBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5pbXBvcnQgQ29tcGFzc1ZpZXdNb2RlbCBmcm9tICdlc3JpL3dpZGdldHMvQ29tcGFzcy9Db21wYXNzVmlld01vZGVsJztcblxuY29uc3QgQ29tcGFzcyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZtOiBuZXcgQ29tcGFzc1ZpZXdNb2RlbCgpLFxuICAgICAgdXBkYXRpbmc6IGZhbHNlLFxuICAgICAgcm90YXRpb246IDBcbiAgICB9O1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmlldzoge31cbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy52aWV3LnRoZW4odmlldyA9PiB7XG4gICAgICB0aGlzLnN0YXRlLnZtLnZpZXcgPSB2aWV3O1xuICAgICAgd2F0Y2hVdGlscy5pbml0KHZpZXcsICdzdGF0aW9uYXJ5JywgKHVwZGF0aW5nKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1cGRhdGluZyB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB3YXRjaFV0aWxzLmluaXQodGhpcy5zdGF0ZS52bSwgJ29yaWVudGF0aW9uJywgKGF4ZXMpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgcm90YXRpb246IGF4ZXMuelxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIGdvTm9ydGgoKSB7XG4gICAgdGhpcy5zdGF0ZS52bS5yZXNldERpcmVjdGlvbigpO1xuICB9LFxuXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBtYXhzdGF0ZSA9IHRoaXMuc3RhdGUubWF4Wm9vbWVkID8gJ2J1dHRvbiByYWlzZWQgbmFycm93IGRpc2FibGUnIDogJ2J1dHRvbiByYWlzZWQgbmFycm93JztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e21heHN0YXRlfSBvbkNsaWNrPXt0aGlzLmdvTm9ydGh9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPjxpIHN0eWxlPXt7IHRyYW5zZm9ybTogJ3JvdGF0ZVooJyArICh0aGlzLnN0YXRlLnJvdGF0aW9uIC0gNDUpICsgJ2RlZyknIH19IGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZXhwbG9yZTwvaT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhc3M7XG4iXX0=