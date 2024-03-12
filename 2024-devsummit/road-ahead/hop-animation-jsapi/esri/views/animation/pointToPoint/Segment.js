// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/time"],function(k,g){class l{get time(){return this._time}constructor(a){a&&this.update(a)}update(a){a&&(this.definition?this.definition.copyFrom(a):this.definition=a.clone());this._updatePrecomputedVariables();this._updatePixelFlow()}_updatePrecomputedVariables(){var a=this.definition;const b=a.compared,c=b.sourceZoom,f=b.targetZoom;this._zoomSign=c>f?1:-1;this._panPixelsAtSource=b.pan*a.source.pixelsPerPanAtZoom(c);a=(a.source.pixelsPerRotateAtZoom(c)+a.target.pixelsPerRotateAtZoom(f))/
2;this._rotatePixels=b.rotate*a}_updatePixelFlow(){var a=this.definition.compared.sourceZoom,b=this.definition.compared.targetZoom;const {hasZoom:c,hasPan:f,hasRotate:h}=this.definition;var d=0,e=0;c&&(f&&(d=(b/a-1)/(-1/(this._zoomSign*this.definition.halfWindowSize)*Math.LN2*this._panPixelsAtSource)),h&&(e=Math.log(a/b)/Math.LN2*this._zoomSign*this.definition.halfWindowSize/this._rotatePixels));this._rotatePixelFlow=this._panPixelFlow=this._zoomPixelFlow=0;a=this.definition.desiredPixelFlow;c&&f&&
h?(b=d+e+d*e,this._zoomPixelFlow=d*e/b*a,this._panPixelFlow=e/b*a,this._rotatePixelFlow=d/b*a):c&&f?(e=1+d,this._zoomPixelFlow=d/e*a,this._panPixelFlow=1/e*a):c&&h?(d=1+e,this._zoomPixelFlow=e/d*a,this._rotatePixelFlow=1/d*a):f&&h?(d=this._panPixelsAtSource/this._rotatePixels,e=1+d,this._panPixelFlow=d/e*a,this._rotatePixelFlow=1/e*a):f?this._panPixelFlow=a:c?this._zoomPixelFlow=a:h&&(this._rotatePixelFlow=a);this._time=h?this.rotateTime:c?this.zoomTime:f?this.panTime:g.Seconds(0)}get rotateTime(){return this.definition.hasRotate?
g.Seconds(this._rotatePixels/this._rotatePixelFlow):g.Seconds(0)}get zoomTime(){return this.definition.hasZoom?g.Seconds(Math.log(this.definition.compared.sourceZoom/this.definition.compared.targetZoom)/Math.LN2*this._zoomSign*this.definition.halfWindowSize/this._zoomPixelFlow):g.Seconds(0)}get panTime(){if(this.definition.hasPan){if(this.definition.hasZoom){const a=-1/(this._zoomSign*this.definition.halfWindowSize)*Math.LN2;return g.Seconds(Math.log(this._zoomPixelFlow/this._panPixelFlow*this._panPixelsAtSource*
a+1)/(a*this._zoomPixelFlow))}return g.Seconds(this._panPixelsAtSource/this._panPixelFlow)}return g.Seconds(0)}_interpolateComponentsZoom(a){if(0===a||1===a)return a;if(this.definition.hasZoom){const b=this.definition.compared.sourceZoom,c=this.definition.compared.targetZoom;return(b*(b/c)**-a-b)/(c-b)}return a}_interpolateComponentsPan(a){if(0===a||1===a)return a;if(this.definition.hasPan&&this.definition.hasZoom){const b=-1/(this._zoomSign*this.definition.halfWindowSize)*this._zoomPixelFlow;return 1/
this._panPixelsAtSource*this._panPixelFlow*(2**(b*a*this._time)-1)/(b*Math.LN2)}return a}_interpolateComponentsRotate(a){return a}interpolateComponentsAt(a,b){a=Math.min(Math.max(a,0),1);const c=this._interpolateComponentsZoom(a),f=this._interpolateComponentsPan(a);a=this._interpolateComponentsRotate(a);b?(b.zoom=c,b.pan=f,b.rotate=a):b={zoom:c,pan:f,rotate:a};return b}}k.Segment=l;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});