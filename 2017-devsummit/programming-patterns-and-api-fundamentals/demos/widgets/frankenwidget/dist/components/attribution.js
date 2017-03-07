'use strict';

define(['exports', 'react', 'esri/core/watchUtils', 'esri/widgets/Attribution/AttributionViewModel'], function (exports, _react, _watchUtils, _AttributionViewModel) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _watchUtils2 = _interopRequireDefault(_watchUtils);

  var _AttributionViewModel2 = _interopRequireDefault(_AttributionViewModel);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Attribution = _react2.default.createClass({
    displayName: 'Attribution',
    getInitialState: function getInitialState() {
      return {
        vm: new _AttributionViewModel2.default(),
        attribution: '',
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

        _watchUtils2.default.watch(_this.state.vm, 'attributionText', function (attribution) {
          _this.setState({
            attribution: attribution
          });
        });

        _watchUtils2.default.init(view, 'stationary', function (updating) {
          _this.setState({
            updating: updating
          });
        });
      });
    },
    render: function render() {
      var style = this.state.updating ? 'attribution' : 'attribution view-busy';
      return _react2.default.createElement('span', {
        className: style,
        ref: 'mainNode'
      }, this.state.attribution);
    }
  });

  exports.default = Attribution;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXR0cmlidXRpb24uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBOENlLFdBQVciLCJmaWxlIjoiY29tcG9uZW50cy9hdHRyaWJ1dGlvbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdhdGNoVXRpbHMgZnJvbSAnZXNyaS9jb3JlL3dhdGNoVXRpbHMnO1xuaW1wb3J0IEF0dHJpYnV0aW9uVmlld01vZGVsIGZyb20gJ2Vzcmkvd2lkZ2V0cy9BdHRyaWJ1dGlvbi9BdHRyaWJ1dGlvblZpZXdNb2RlbCc7XG5cbmNvbnN0IEF0dHJpYnV0aW9uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdm06IG5ldyBBdHRyaWJ1dGlvblZpZXdNb2RlbCgpLFxuICAgICAgYXR0cmlidXRpb246ICcnLFxuICAgICAgdXBkYXRpbmc6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZpZXc6IHt9XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMudmlldy50aGVuKHZpZXcgPT4ge1xuICAgICAgdGhpcy5zdGF0ZS52bS52aWV3ID0gdmlldztcbiAgICAgIHdhdGNoVXRpbHMud2F0Y2godGhpcy5zdGF0ZS52bSwgJ2F0dHJpYnV0aW9uVGV4dCcsIChhdHRyaWJ1dGlvbikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYXR0cmlidXRpb24gfSk7XG4gICAgICB9KTtcbiAgICAgIHdhdGNoVXRpbHMuaW5pdCh2aWV3LCAnc3RhdGlvbmFyeScsICh1cGRhdGluZykgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXBkYXRpbmcgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgc3R5bGUgPSB0aGlzLnN0YXRlLnVwZGF0aW5nID8gJ2F0dHJpYnV0aW9uJyA6ICdhdHRyaWJ1dGlvbiB2aWV3LWJ1c3knO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZX0gcmVmPSdtYWluTm9kZSc+e3RoaXMuc3RhdGUuYXR0cmlidXRpb259PC9zcGFuPlxuXG4gICAgKTtcblxuICB9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBBdHRyaWJ1dGlvbjsiXX0=