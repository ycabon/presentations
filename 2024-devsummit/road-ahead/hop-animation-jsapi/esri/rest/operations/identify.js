// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../core/sql ../../geometry/support/jsonUtils ../../geometry/support/scaleUtils ../../geometry/support/spatialReferenceUtils ../../layers/support/floorFilterUtils ../../layers/support/sublayerUtils".split(" "),function(t,C,D,E,F,z,G){function A(a){const {mapExtent:c,floors:l,width:e,sublayers:f,layerIds:h,layerOption:u,gdbVersion:v}=a;var d=f?.find(b=>null!=b.layer)?.layer?.serviceSublayers;const m="popup"===u;a={};const n=E.getScale({extent:c,width:e,spatialReference:c?.spatialReference}),
g=[],r=b=>{const p=0===n,q=0===b.minScale||n<=b.minScale,w=0===b.maxScale||n>=b.maxScale;b.visible&&(p||q&&w)&&(b.sublayers?b.sublayers.forEach(r):!1!==h?.includes(b.id)&&(!m||b.popupTemplate&&b.popupEnabled)&&g.unshift(b))};f?.forEach(r);if(f&&!g.length)a.layerIds=[];else{d=G.isExportDynamic(g,d,v);var k=g.map(b=>{const p=z.getLayerFloorFilterClause(l,b);return b.toExportImageJSON(p)});if(d)a.dynamicLayers=JSON.stringify(k);else if(f?(d=g.map(({id:b})=>b),h&&(d=d.filter(b=>h.includes(b))),a.layerIds=
d):h?.length&&(a.layerIds=h),d=H(l,g),null!=d&&d.length){k={};for(const b of d)b.definitionExpression&&(k[b.id]=b.definitionExpression);Object.keys(k).length&&(a.layerDefs=JSON.stringify(k))}}return a}function H(a,c){const l=!!a?.length;c=c.filter(e=>null!=e.definitionExpression||l&&null!=e.floorInfo);return c.length?c.map(e=>{var f=z.getLayerFloorFilterClause(a,e);f=C.sqlAnd(f,e.definitionExpression);return{id:e.id,definitionExpression:f??void 0}}):null}t.identifyToIdentifyRESTParameters=function(a,
c){const {dpi:l,gdbVersion:e,geometry:f,geometryPrecision:h,height:u,historicMoment:v,layerOption:d,mapExtent:m,maxAllowableOffset:n,returnFieldName:g,returnGeometry:r,returnUnformattedValues:k,returnZ:b,spatialReference:p,timeExtent:q,tolerance:w,width:I}=a.toJSON(),{dynamicLayers:x,layerDefs:y,layerIds:B}=A(a);c=null!=c?.geometry?c.geometry:null;a={historicMoment:v,geometryPrecision:h,maxAllowableOffset:n,returnFieldName:g,returnGeometry:r,returnUnformattedValues:k,returnZ:b,tolerance:w};c=c&&c.toJSON()||
f;a.imageDisplay=`${I},${u},${l}`;e&&(a.gdbVersion=e);c&&(delete c.spatialReference,a.geometry=JSON.stringify(c),a.geometryType=D.getJsonType(c));if(c=p??c?.spatialReference??m?.spatialReference)a.sr=F.srToRESTValue(c);a.time=q?[q.start,q.end].join():null;if(m){const {xmin:J,ymin:K,xmax:L,ymax:M}=m;a.mapExtent=`${J},${K},${L},${M}`}y&&(a.layerDefs=y);x&&!y&&(a.dynamicLayers=x);a.layers="popup"===d?"visible":d;B&&!x&&(a.layers+=`:${B.join(",")}`);return a};t.toDynamicLayersJSON=A;Object.defineProperty(t,
Symbol.toStringTag,{value:"Module"})});