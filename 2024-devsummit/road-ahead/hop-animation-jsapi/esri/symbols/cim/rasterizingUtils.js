// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../core/floatRGBA","../../core/mathUtils","./constants"],function(r,u,v,w){r.rasterizeDash=function(e,b){var f="Butt"===b,c="Square"===b;b=!f&&!c;1===e.length%2&&(e=[...e,...e]);const a=w.dashRadius,d=2*a;var l=0;for(var n of e)l+=n;n=Math.round(l*a);l=new Float32Array(n*d);const p=.5*a;let m=0,k=0,g=.5,t=!0;for(var q of e){m=k;for(k+=q*a;g<=k;){for(e=.5;e<d;){const h=b?(e-a)*(e-a):Math.abs(e-a);l[(e-.5)*n+g-.5]=t?f?Math.max(Math.max(m+p-g,h),Math.max(g-k+p,h)):h:b?Math.min((g-
m)*(g-m)+h,(g-k)*(g-k)+h):c?Math.min(Math.max(g-m,h),Math.max(k-g,h)):Math.min(Math.max(g-m+p,h),Math.max(k+p-g,h));e++}g++}t=!t}f=l.length;q=new Uint8Array(4*f);for(c=0;c<f;++c)u.packFloatRGBA((b?Math.sqrt(l[c]):l[c])/a,q,4*c);return[q,n,d]};r.rasterizeFillStyle=function(e,b,f){b=b.style;f=v.nextPowerOfTwo(Math.ceil(f));var c="vertical"===b||"horizontal"===b||"cross"===b||"esriSFSCross"===b||"esriSFSVertical"===b||"esriSFSHorizontal"===b?8*f:16*f,a=2*f;e.width=c;e.height=c;const d=e.getContext("2d");
d.strokeStyle="#FFFFFF";d.lineWidth=f;d.beginPath();if("vertical"===b||"cross"===b||"esriSFSCross"===b||"esriSFSVertical"===b)d.moveTo(c/2,-a),d.lineTo(c/2,c+a);if("horizontal"===b||"cross"===b||"esriSFSCross"===b||"esriSFSHorizontal"===b)d.moveTo(-a,c/2),d.lineTo(c+a,c/2);if("backward-diagonal"===b||"diagonal-cross"===b||"esriSFSDiagonalCross"===b||"esriSFSBackwardDiagonal"===b)d.moveTo(-a,-a),d.lineTo(c+a,c+a),d.moveTo(c-a,-a),d.lineTo(c+a,a),d.moveTo(-a,c-a),d.lineTo(a,c+a);if("forward-diagonal"===
b||"diagonal-cross"===b||"esriSFSForwardDiagonal"===b||"esriSFSDiagonalCross"===b)d.moveTo(c+a,-a),d.lineTo(-a,c+a),d.moveTo(a,-a),d.lineTo(-a,a),d.moveTo(c+a,c-a),d.lineTo(c-a,c+a);d.stroke();b=d.getImageData(0,0,e.width,e.height);b=new Uint8Array(b.data);for(a=0;a<b.length;a+=4)c=b[a+3]/255,b[a]*=c,b[a+1]*=c,b[a+2]*=c;return[b,e.width,e.height,f]};Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});