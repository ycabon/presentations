// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/screenUtils"],function(n,p,t){Object.defineProperty(p,"__esModule",{value:!0});n=function(){function h(){}h.prototype.rasterizeText=function(d,a){this._textRasterizationCanvas||(this._textRasterizationCanvas=document.createElement("canvas"));var b=this._textRasterizationCanvas,c=b.getContext("2d");this.setFontProperties(c,a);this.parameters=a;this.textLines=d.split(/\r?\n/);this.lineHeight=this.computeLineHeight();d=this.computeTextWidth(c,a);var e=this.lineHeight*
this.textLines.length;b.width=d;b.height=e;this.renderedLineHeight=Math.round(this.lineHeight*a.pixelRatio);this.renderedHaloSize=a.halo.size*a.pixelRatio;this.renderedWidth=d*a.pixelRatio;this.renderedHeight=e*a.pixelRatio;b=a.color;this.fillStyle="rgba("+b.slice(0,3).toString()+","+b[3]+")";this.haloStyle="rgb("+a.halo.color.slice(0,3).toString()+")";var b=this.renderedLineHeight,f=this.renderedHaloSize;this.setFontProperties(c,a);d=c.textAlign;var e=this.renderedWidth,g=("center"===d?.5*e:"right"===
d?e:0)+f,e=d=0;0<f&&this.renderHalo(c,g,f,d,e,a);e+=f;d+=g;f=0;for(g=this.textLines;f<g.length;f++){var m=g[f];c.globalCompositeOperation="destination-out";c.fillStyle="rgb(0, 0, 0)";c.fillText(m,d,e);c.globalCompositeOperation="source-over";c.fillStyle=this.fillStyle;c.fillText(m,d,e);e+=b}c=c.getImageData(0,0,this.renderedWidth,this.renderedHeight);c=new Uint8Array(c.data);if(a.premultiplyColors)for(a=void 0,b=0;b<c.length;b+=4)a=c[b+3]/255,c[b]*=a,c[b+1]*=a,c[b+2]*=a;return{size:[this.renderedWidth,
this.renderedHeight],image:new Uint32Array(c.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}};h.prototype.renderHalo=function(d,a,b,c,e,f){var g=this.renderedWidth,m=this.renderedHeight;this._haloRasterizationCanvas||(this._haloRasterizationCanvas=document.createElement("canvas"));this._haloRasterizationCanvas.width=g;this._haloRasterizationCanvas.height=m;var h=this._haloRasterizationCanvas,k=h.getContext("2d");k.clearRect(0,0,g,m);this.setFontProperties(k,f);k.fillStyle=this.haloStyle;k.strokeStyle=
this.haloStyle;f=3>this.renderedHaloSize;k.lineJoin=f?"miter":"round";f?this.renderHaloEmulated(k,a,b):this.renderHaloNative(k,a,b);d.globalAlpha=this.parameters.halo.color[3];d.drawImage(h,0,0,g,m,c,e,g,m);d.globalAlpha=1};h.prototype.renderHaloEmulated=function(d,a,b){for(var c=this.renderedLineHeight,e=this.renderedHaloSize,f=0,g=this.textLines;f<g.length;f++){for(var h=g[f],q=0,k=r;q<k.length;q++){var l=k[q];d.fillText(h,a+e*l[0],b+e*l[1])}b+=c}};h.prototype.renderHaloNative=function(d,a,b){for(var c=
this.renderedLineHeight,e=this.renderedHaloSize,f=0,g=this.textLines;f<g.length;f++){for(var h=g[f],l=2*e,k=0;5>k;k++)d.lineWidth=(.6+.1*k)*l,d.strokeText(h,a,b);b+=c}};h.prototype.setFontProperties=function(d,a){var b=a.font;a=b.style+" "+b.weight+" "+t.pt2px(a.size*a.pixelRatio)+"px "+b.family+", sans-serif";d.font=a;d.textAlign="left";d.textBaseline="top"};h.prototype.computeTextWidth=function(d,a){for(var b=0,c=0,e=this.textLines;c<e.length;c++)b=Math.max(b,d.measureText(e[c]).width);a=a.font;
if("italic"===a.style||"oblique"===a.style||"string"===typeof a.weight&&("bold"===a.weight||"bolder"===a.weight)||"number"===typeof a.weight&&600<a.weight)b+=.3*d.measureText("A").width;b+=2*this.parameters.halo.size;return Math.round(b)};h.prototype.computeLineHeight=function(){return Math.round(1.275*this.parameters.size+2*this.parameters.halo.size)};return h}();p.TextRasterizer=n;for(var r=[],l=0;360>l;l+=22.5)r.push([Math.cos(Math.PI*l/180),Math.sin(Math.PI*l/180)]);p.default=n});