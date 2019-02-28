(function() {
  function initPrism() {
    var codes = document.querySelectorAll('code');
    for (var i = codes.length - 1; i >= 0; i--) {
        var code = codes[i];
        // don't highlight simple code in text
        if (code.className.indexOf("language-undefined") === -1) {
          break;
        }
        Prism.highlightElement(code);
    }
  }
  
  function injectPrism() {
    if (!document.getElementById('prismCSS')) {
      var link = document.createElement('link');
      link.id = 'prismCSS';
      link.rel = 'stylesheet';
      link.href = '../prism/prism.css';
      document.head.appendChild(link);
    }
  
    if (!document.getElementById('prismJS')) {
      var script = document.createElement('script');
      script.id = 'primsJS';
      script.src = '../prism/prism.js';
      document.head.appendChild(script);
    
      script.onload = function onPrismLoad() {
        initPrism();
      };
    }
  }
  
  
  if (Reveal.isReady()) {
    injectPrism();
  }
  else {
    Reveal.addEventListener('ready', function onRevealReady() {
      injectPrism();
    });
  }
})();