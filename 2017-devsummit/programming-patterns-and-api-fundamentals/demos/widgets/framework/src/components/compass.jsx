import React from 'react';
import watchUtils from 'esri/core/watchUtils';
import CompassViewModel from 'esri/widgets/Compass/CompassViewModel';

const Compass = React.createClass({

  getInitialState() {
    return {
      vm: new CompassViewModel(),
      updating: false,
      rotation: 0
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
      watchUtils.init(view, 'stationary', (updating) => {
        this.setState({ updating });
      });

      watchUtils.init(this.state.vm, 'orientation', (axes) => {
        this.setState({
          rotation: axes.z
        });
      });
    });
  },

  goNorth() {
    this.state.vm.reset();
  },

  render() {

    let maxstate = this.state.maxZoomed ? 'compass-button button raised btn-circle narrow disable' : 'compass-button button btn-circle raised narrow';
    return (
      <div className={maxstate} onClick={this.goNorth}>
        <div className="center"><i style={{ transform: 'rotateZ(' + (this.state.rotation - 45) + 'deg)' }} className="material-icons">explore</i></div>
      </div>
    );

  }
});

export default Compass;
