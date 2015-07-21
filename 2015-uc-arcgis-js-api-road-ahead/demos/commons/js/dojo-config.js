var dojoConfig = {
  packages: [
    {
      name: "commons",
      location: location.host + "/commons/js" 
    },
    {
      name: "local",
      location: location.pathname.replace(/\/[^/]+$/, "") + "/js" 
    }
  ]
};