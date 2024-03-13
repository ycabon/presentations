// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../geometry/support/spatialReferenceUtils","../../layers/support/layerUtils"],function(l,p,q){l.findToFindRESTParameters=function(b){const {contains:r,dynamicLayers:h,geometryPrecision:t,layerDefinitions:f,layerIds:g,maxAllowableOffset:u,outSR:m,returnGeometry:v,searchFields:n,searchText:w}=b.toJSON();b={contains:r,returnGeometry:v,geometryPrecision:t,maxAllowableOffset:u,searchText:w};g&&(b.layers=g.join(","));n&&(b.searchFields=n.join(","));m&&(b.sr=p.srToRESTValue(m));if(f){var a=
[];for(var c=0;c<f.length;c++){var e=f[c];a[e.id]=e.definitionExpression}b.layerDefs=q.serializeLayerDefinitions(a)}if(h?.length){a=[];for(c=0;c<h.length;c++){var d=h[c];const k=d.id;!d.subLayerIds&&g&&g.includes(k)&&(e={id:k},e.source=d.source,d=null,f?.length&&(d=f.find(x=>x.id===k)?.definitionExpression),d&&(e.definitionExpression=d),a.push(e))}a=JSON.stringify(a);"[]"===a&&(a="[{}]");b.dynamicLayers=a}return b};Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});