import React from 'react';
import watchUtils from 'esri/core/watchUtils';
import HomeViewModel from 'esri/widgets/Home/HomeViewModel';

const Home = React.createClass({

  getInitialState() {
    return {
      vm: new HomeViewModel(),
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

  home() {
    this.state.vm.go();
  },

  render() {

    let maxstate = this.state.maxZoomed ? 'button raised narrow disable' : 'button raised narrow';

    return (
      <div className={maxstate} onClick={this.home}>
        <div className="center"><i className="material-icons">home</i></div>
      </div>
    );

  }
});

export default Home;
