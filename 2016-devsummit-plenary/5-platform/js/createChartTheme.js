define(["dojox/charting/Theme"], function(Theme){

  return function(colorInfo) {

    var color1 = colorInfo.stops[colorInfo.stops.length - 1].color;
    var color2 = colorInfo.stops[0].color;

    var theme = new Theme({
      axis:{
        stroke:	{ // the axis itself
          color: "#888c76",
          width: 1
        },
        tick: {	// used as a foundation for all ticks
          color:     "#888c76",
          position:  "center",
          font:      "normal normal normal 7pt Verdana, Arial, sans-serif",	// labels on axis
          fontColor: "#888c76"								// color of labels
        }
      },
      series: {
        stroke:  {width: 2.5, color: "#fff"},
        outline: null,
        fontColor: "#131313"
      },
      marker: {
        stroke:  {width: 1.25, color: "#131313"},
        outline: {width: 1.25, color: "#131313"},
        fontColor: "#131313"
      },
      seriesThemes: [
        {fill: color1 },
        {fill: color2 }
      ],
      markerThemes: [
        {fill: color1, stroke: {color: "#fff"}},
        {fill: color2, stroke: {color: "#fff"}}
      ]
    });

    theme.next = function(elementType, mixin, doPost){
      var isLine = elementType == "line",
          s, theme;
      if(isLine || elementType == "area"){
        // custom processing for lines: substitute colors
        s = this.seriesThemes[this._current % this.seriesThemes.length];
        var m = this.markerThemes[this._current % this.markerThemes.length];
        s.fill.space = "plot";
        if(isLine){
            s.stroke  = { width: 4, color: s.fill.colors[0].color};
        }
        m.outline = { width: 1.25, color: m.fill };
        theme = Theme.prototype.next.apply(this, arguments);
        // cleanup
        delete s.outline;
        delete s.stroke;
        s.fill.space = "shape";
        return theme;
      }
      else if(elementType == "candlestick") {
        s = this.seriesThemes[this._current % this.seriesThemes.length];
        s.fill.space = "plot";
        s.stroke  = { width: 1, color: s.fill.colors[0].color};
        theme = Theme.prototype.next.apply(this, arguments);
        return theme;
      }
      return Theme.prototype.next.apply(this, arguments);
    };

    theme.post = function(theme, elementType){
      theme = Theme.prototype.post.apply(this, arguments);
      if((elementType == "slice" || elementType == "circle") && theme.series.fill && theme.series.fill.type == "radial"){
        theme.series.fill = gradutils.reverse(theme.series.fill);
      }
      return theme;
    };

    return theme;
  }
});
