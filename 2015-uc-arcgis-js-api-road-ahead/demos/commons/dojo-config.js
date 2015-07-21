var dojoConfig = {
  isDebug: true,
  async: true,
  packages: [
    {
      name: "commons",
      location: location.origin + "/4.0-2015-devsummit-demos/commons/js" 
    },
    {
      name: "widgets",
      location: location.origin + "/4.0-2015-devsummit-demos/commons/widgets" 
    },
    {
      name: "libs",
      location: location.origin + "/4.0-2015-devsummit-demos/commons/libs" 
    },
    {
      name: "local",
      location: location.pathname.replace(/\/[^/]+$/, "") + "/js" 
    }
  ]
};