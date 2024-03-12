// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/libs/gl-matrix-2/math/vec2 ../../../../core/libs/gl-matrix-2/factories/vec2f64 ../../../../core/libs/gl-matrix-2/factories/vec4f64 ../../../../geometry/ellipsoidUtils ../../../../geometry/projection/projectors ../../../../geometry/support/DoubleArray ../../../../geometry/support/FloatArray ../../../../geometry/support/Indices ../../../ViewingMode ../../webgl-engine/lib/Attribute ../../webgl-engine/lib/ContentObjectType ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/VertexAttribute".split(" "),
function(u,v,w,y,z,A,x,B,C,D,h,E,F,k){const G=w.create(),H=w.create();u.createGeometry=function(n,a,r=null){const c=[],l=a.mapPositions,{attributeData:{position:d},removeDuplicateStartEnd:p}=a;var b=d.length;b=d[0]===d[b-3]&&d[1]===d[b-2]&&d[2]===d[b-1]&&p;var g=d.length/3-(b?1:0),e=Array(2*(g-1)),m=b?d.slice(0,-3):d,q=0;for(var f=0;f<g-1;f++)e[q++]=f,e[q++]=f+1;c.push([k.VertexAttribute.POSITION,new h.Attribute(m,e,3,b)]);g=c[0][1].data;b=C.getZeroIndexArray(c[0][1].indices.length);null==a.attributeData.colorFeature&&
c.push([k.VertexAttribute.COLOR,new h.Attribute(a.attributeData.color??y.ONES,b,4)]);null==a.attributeData.sizeFeature&&c.push([k.VertexAttribute.SIZE,new h.Attribute([a.attributeData.size??1],b,1,!0)]);a.attributeData.normal&&c.push([k.VertexAttribute.NORMAL,new h.Attribute(a.attributeData.normal,b,3)]);null!=a.attributeData.colorFeature&&c.push([k.VertexAttribute.COLORFEATUREATTRIBUTE,new h.Attribute([a.attributeData.colorFeature],b,1,!0)]);null!=a.attributeData.sizeFeature&&c.push([k.VertexAttribute.SIZEFEATUREATTRIBUTE,
new h.Attribute([a.attributeData.sizeFeature],b,1,!0)]);null!=a.attributeData.opacityFeature&&c.push([k.VertexAttribute.OPACITYFEATUREATTRIBUTE,new h.Attribute([a.attributeData.opacityFeature],b,1,!0)]);if(null!=a.overlayInfo&&a.overlayInfo.renderCoordsHelper.viewingMode===D.ViewingMode.Global&&a.overlayInfo.spatialReference.isGeographic){b=x.newDoubleArray(g.length);a=z.getReferenceEllipsoid(a.overlayInfo.spatialReference);for(e=0;e<b.length;e+=3)A.lonLatToWebMercatorComparable(g,e,b,e,a);a=g.length/
3;g=B.newFloatArray(a+1);e=G;m=H;f=q=0;v.set(e,b[f++],b[f++]);f++;g[0]=0;for(let t=1;t<a+1;++t)t===a&&(f=0),v.set(m,b[f++],b[f++]),f++,q+=v.dist(e,m),g[t]=q,[e,m]=[m,e];c.push([k.VertexAttribute.DISTANCETOSTART,new h.Attribute(g,c[0][1].indices,1,!0)])}return new F.Geometry(n,c,l,E.ContentObjectType.Line,r)};u.lineStripsToParameters=function(n,a){if(null==n||0===n.length)return[];const r=[];n.forEach(c=>{const l=x.newDoubleArray(3*c.length);c.forEach((d,p)=>{l[3*p]=d[0];l[3*p+1]=d[1];l[3*p+2]=d[2]});
r.push({attributeData:{position:l,normal:a},removeDuplicateStartEnd:!1})});return r};Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});