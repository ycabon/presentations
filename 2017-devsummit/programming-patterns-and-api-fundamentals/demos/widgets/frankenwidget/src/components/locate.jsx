import React from 'react';
import watchUtils from 'esri/core/watchUtils';
import LocateViewModel from 'esri/widgets/Locate/LocateViewModel';

const Locate = React.createClass({

  getInitialState() {
    return {
      vm: new LocateViewModel(),
      updating: false
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
    });
  },

  locate() {
    this.state.vm.locate();
  },

  render() {

    let maxstate = this.state.maxZoomed ? 'button raised narrow disable' : 'button raised narrow';

    return (
      <div className={maxstate} onClick={this.locate}>
        <div className="center"><i className="material-icons">location_on</i></div>
      </div>
    );

  }
});

export default Locate;
