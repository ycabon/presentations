'use strict';

define(['exports', 'react', 'esri/core/watchUtils', 'esri/widgets/BasemapToggle/BasemapToggleViewModel'], function (exports, _react, _watchUtils, _BasemapToggleViewModel) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _watchUtils2 = _interopRequireDefault(_watchUtils);

  var _BasemapToggleViewModel2 = _interopRequireDefault(_BasemapToggleViewModel);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function bgImage(url) {
    return {
      backgroundImage: 'url(' + url + ')'
    };
  }

  var BasemapToggle = _react2.default.createClass({
    displayName: 'BasemapToggle',
    getInitialState: function getInitialState() {
      return {
        vm: new _BasemapToggleViewModel2.default(),
        secondaryThumbnailUrl: ''
      };
    },
    getDefaultProps: function getDefaultProps() {
      return {
        view: {},
        secondaryThumbnailUrl: '',
        currentThumbnailUrl: '',
        updating: false
      };
    },
    componentDidMount: function componentDidMount() {
      var _this = this;

      this.props.view.then(function (view) {
        _this.state.vm.view = view;
        _this.state.vm.secondaryBasemap = _this.props.secondaryBasemap;
        var _state$vm = _this.state.vm;
        var secondaryBasemap = _state$vm.secondaryBasemap;
        var currentBasemap = _state$vm.currentBasemap;

        var info = _this.state.vm.getBasemapInfo(_this.props.secondaryBasemap || 'topo');

        _this.setState({
          secondaryThumbnailUrl: info.thumbnailUrl,
          currentThumbnailUrl: _this.state.vm.currentBasemap.thumbnailUrl
        });

        _watchUtils2.default.watch(_this.state.vm, 'secondaryBasemap', _this.updateThumbnails);

        _watchUtils2.default.init(view, 'stationary', function (updating) {
          _this.setState({
            updating: updating
          });
        });
      });
    },
    updateThumbnails: function updateThumbnails(secondary, current) {
      var secInfo = this.state.vm.getBasemapInfo(secondary);
      var curInfo = this.state.vm.getBasemapInfo(current);
      this.setState({
        secondaryThumbnailUrl: secInfo.thumbnailUrl,
        currentThumbnailUrl: curInfo.thumbnailUrl
      });
    },
    toggle: function toggle() {
      this.state.vm.toggle();
    },
    render: function render() {
      var currentThumbnailStyle = bgImage(this.state.currentThumbnailUrl);
      var secondaryThumbnailStyle = bgImage(this.state.secondaryThumbnailUrl);
      var style = this.state.updating ? 'basemap-container' : 'basemap-container view-busy';
      return _react2.default.createElement('div', {
        className: style
      }, _react2.default.createElement('div', {
        className: 'basemap-item basemap-item-secondary',
        onClick: this.toggle,
        style: secondaryThumbnailStyle
      }), _react2.default.createElement('div', {
        className: 'basemap-item basemap-item-current',
        style: currentThumbnailStyle
      }));
    }
  });

  exports.default = BasemapToggle;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFzZW1hcHRvZ2dsZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBcUZlLGFBQWEiLCJmaWxlIjoiY29tcG9uZW50cy9iYXNlbWFwdG9nZ2xlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2F0Y2hVdGlscyBmcm9tICdlc3JpL2NvcmUvd2F0Y2hVdGlscyc7XG5pbXBvcnQgQmFzZW1hcFRvZ2dsZVZpZXdNb2RlbCBmcm9tICdlc3JpL3dpZGdldHMvQmFzZW1hcFRvZ2dsZS9CYXNlbWFwVG9nZ2xlVmlld01vZGVsJztcblxuZnVuY3Rpb24gYmdJbWFnZSh1cmwpIHtcbiAgcmV0dXJuIHtcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIHVybCArICcpJ1xuICB9O1xufVxuXG5jb25zdCBCYXNlbWFwVG9nZ2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdm06IG5ldyBCYXNlbWFwVG9nZ2xlVmlld01vZGVsKCksXG4gICAgICBzZWNvbmRhcnlUaHVtYm5haWxVcmw6ICcnXG4gICAgfTtcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZpZXc6IHt9LFxuICAgICAgc2Vjb25kYXJ5VGh1bWJuYWlsVXJsOiAnJyxcbiAgICAgIGN1cnJlbnRUaHVtYm5haWxVcmw6ICcnLFxuICAgICAgdXBkYXRpbmc6IGZhbHNlXG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMudmlldy50aGVuKHZpZXcgPT4ge1xuXG4gICAgICB0aGlzLnN0YXRlLnZtLnZpZXcgPSB2aWV3O1xuICAgICAgdGhpcy5zdGF0ZS52bS5zZWNvbmRhcnlCYXNlbWFwID0gdGhpcy5wcm9wcy5zZWNvbmRhcnlCYXNlbWFwO1xuXG4gICAgICBsZXQgeyBzZWNvbmRhcnlCYXNlbWFwLCBjdXJyZW50QmFzZW1hcCB9ID0gdGhpcy5zdGF0ZS52bTtcblxuICAgICAgbGV0IGluZm8gPSB0aGlzLnN0YXRlLnZtLmdldEJhc2VtYXBJbmZvKHRoaXMucHJvcHMuc2Vjb25kYXJ5QmFzZW1hcCB8fCAndG9wbycpO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2Vjb25kYXJ5VGh1bWJuYWlsVXJsOiBpbmZvLnRodW1ibmFpbFVybCxcbiAgICAgICAgY3VycmVudFRodW1ibmFpbFVybDogdGhpcy5zdGF0ZS52bS5jdXJyZW50QmFzZW1hcC50aHVtYm5haWxVcmxcbiAgICAgIH0pO1xuXG4gICAgICB3YXRjaFV0aWxzLndhdGNoKHRoaXMuc3RhdGUudm0sICdzZWNvbmRhcnlCYXNlbWFwJywgdGhpcy51cGRhdGVUaHVtYm5haWxzKTtcbiAgICAgIHdhdGNoVXRpbHMuaW5pdCh2aWV3LCAnc3RhdGlvbmFyeScsICh1cGRhdGluZykgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXBkYXRpbmcgfSk7XG4gICAgICB9KTtcblxuICAgIH0pO1xuICB9LFxuXG4gIHVwZGF0ZVRodW1ibmFpbHMoc2Vjb25kYXJ5LCBjdXJyZW50KSB7XG4gICAgbGV0IHNlY0luZm8gPSB0aGlzLnN0YXRlLnZtLmdldEJhc2VtYXBJbmZvKHNlY29uZGFyeSk7XG4gICAgbGV0IGN1ckluZm8gPSB0aGlzLnN0YXRlLnZtLmdldEJhc2VtYXBJbmZvKGN1cnJlbnQpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2Vjb25kYXJ5VGh1bWJuYWlsVXJsOiBzZWNJbmZvLnRodW1ibmFpbFVybCxcbiAgICAgIGN1cnJlbnRUaHVtYm5haWxVcmw6IGN1ckluZm8udGh1bWJuYWlsVXJsXG4gICAgfSk7XG4gIH0sXG5cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMuc3RhdGUudm0udG9nZ2xlKCk7XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IGN1cnJlbnRUaHVtYm5haWxTdHlsZSA9IGJnSW1hZ2UodGhpcy5zdGF0ZS5jdXJyZW50VGh1bWJuYWlsVXJsKTtcblxuICAgIGxldCBzZWNvbmRhcnlUaHVtYm5haWxTdHlsZSA9IGJnSW1hZ2UodGhpcy5zdGF0ZS5zZWNvbmRhcnlUaHVtYm5haWxVcmwpO1xuXG4gICAgbGV0IHN0eWxlID0gdGhpcy5zdGF0ZS51cGRhdGluZyA/ICdiYXNlbWFwLWNvbnRhaW5lcicgOiAnYmFzZW1hcC1jb250YWluZXIgdmlldy1idXN5JztcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiYXNlbWFwLWl0ZW0gYmFzZW1hcC1pdGVtLXNlY29uZGFyeScgb25DbGljaz17dGhpcy50b2dnbGV9IHN0eWxlPXtzZWNvbmRhcnlUaHVtYm5haWxTdHlsZX0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiYXNlbWFwLWl0ZW0gYmFzZW1hcC1pdGVtLWN1cnJlbnQnIHN0eWxlPXtjdXJyZW50VGh1bWJuYWlsU3R5bGV9PjwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuXG4gIH1cblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VtYXBUb2dnbGU7Il19