import React from 'react';
import watchUtils from 'esri/core/watchUtils';
import ZoomViewModel from 'esri/widgets/Zoom/ZoomViewModel';

const Zoom = React.createClass({

  getInitialState() {
    return {
      vm: new ZoomViewModel(),
      updating: false,
      maxZoomed: false,
      minZoomed: false
    };
  },

  getDefaultProps() {
    return {
      view: {}
    }
  },

  componentDidMount() {
    this.props.view.then(view => {
      this.state.vm.view = view;
      watchUtils.init(view, 'zoom', (val) => {
        this.setState({
          maxZoomed: val === view.constraints.maxZoom,
          minZoomed: val === view.constraints.minZoom
        });
      });
      /*watchUtils.init(view, 'stationary', (updating) => {
        this.setState({ updating });
      });*/
    });
  },

  zoomIn() {
    if (!this.state.maxZoomed) {
      this.state.vm.zoomIn();
    }
  },

  zoomOut() {
    if (!this.state.minZoomed) {
      this.state.vm.zoomOut();
    }
  },

  render() {

    let btnstyle = 'zoom-btns'; //this.state.updating ? 'zoom-btns' : 'zoom-btns view-busy';
    let maxstate = this.state.maxZoomed ? 'button btn-circle raised narrow disable' : 'button btn-circle raised narrow';
    let minstate = this.state.minZoomed ? 'button btn-circle raised narrow disable' : 'button btn-circle raised narrow';

    return (
      <div className={btnstyle}>
        <div className={maxstate} onClick={this.zoomIn}>
          <div className="center"><i className="material-icons">add</i></div>
        </div>
        <div className={minstate} onClick={this.zoomOut}>
          <div className="center"><i className="material-icons">remove</i></div>
        </div>
      </div>
    );

  }
});

export default Zoom;
