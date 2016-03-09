var locationPath = location.pathname.replace(/\/[^\/]+$/, '');

window.dojoConfig = {
  async: true,
  parseOnLoad: true,
  deps: ['app/main'],
  packages: [{
    name: 'react',
    location: locationPath + '/bower_components/react/',
    main: 'react'
  }, {
    name: 'app',
    location: locationPath + '/dist',
    main: 'main'
  }]
};
