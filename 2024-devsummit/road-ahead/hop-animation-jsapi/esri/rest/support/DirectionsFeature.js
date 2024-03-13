// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../Graphic ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ./DirectionsEvent ./DirectionsString ../../geometry/Polyline".split(" "),function(l,g,u,p,B,C,D,v,w,x,y,z){g=class extends u{constructor(h){super(h);this.strings=this.events=null}readGeometry(h,m){var a=m.compressedGeometry;if(null==a||""===a)var k=
null;else{var q=m=h=0,r=0,t=[],b=0,d=0,f=0;(a=a.match(/((\+|\-)[^\+\-\|]+|\|)/g))||(a=[]);if(0===parseInt(a[b],32)){b=2;var c=parseInt(a[b],32);b++;var n=parseInt(a[b],32);b++;c&1&&(d=a.indexOf("|")+1,k=parseInt(a[d],32),d++);if(c&2){f=a.indexOf("|",d)+1;var A=parseInt(a[f],32);f++}}else n=parseInt(a[b],32),b++;for(;b<a.length&&"|"!==a[b];){c=parseInt(a[b],32)+h;b++;h=c;var e=parseInt(a[b],32)+m;b++;m=e;c=[c/n,e/n];d&&(e=parseInt(a[d],32)+q,d++,q=e,c.push(e/k));f&&(e=parseInt(a[f],32)+r,f++,r=e,c.push(e/
A));t.push(c)}k={paths:[t],hasZ:0<d,hasM:0<f}}return null!=k?z.fromJSON(k):null}};l.__decorate([p.property({type:[x]})],g.prototype,"events",void 0);l.__decorate([v.reader("geometry",["compressedGeometry"])],g.prototype,"readGeometry",null);l.__decorate([p.property({type:[y]})],g.prototype,"strings",void 0);return g=l.__decorate([w.subclass("esri.rest.support.DirectionsFeature")],g)});