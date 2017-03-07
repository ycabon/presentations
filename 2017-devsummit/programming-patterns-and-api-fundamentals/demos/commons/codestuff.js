(function() {
  var theme = document.body.classList.contains("dark") ? "dark" : "light";
  var codemirrorDiv = document.getElementById('codemirror');
  if (codemirrorDiv) {
    window.editor = CodeMirror.fromTextArea(codemirrorDiv, {
      lineNumbers: true,
      mode: 'javascript',
      scrollbarStyle: 'null',
      theme: theme === 'dark' ? 'monokai' : 'default'
    });
  }
  var btn = document.querySelector(".showcode");
  if (btn) {
    btn.addEventListener("click", function(event) {
      document.querySelector(".manual").classList.toggle("visible");
    });
  }

  window.highlightLine = function highlightLine(lineNumber) {
      //Line number is zero based index
      var actualLineNumber = lineNumber - 1;
      //Set line css class
      console.log(window.editor);
      window.editor.addLineClass(actualLineNumber, 'background', 'line-highlight');
  }
})();