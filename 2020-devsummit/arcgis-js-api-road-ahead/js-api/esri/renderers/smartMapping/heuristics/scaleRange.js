// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/tsSupport/assignHelper ../../../core/tsSupport/restHelper ../../../core/Error ../../../core/maybe ../../../geometry/support/scaleUtils ../statistics/spatialStatistics ../support/utils".split(" "),function(F,G,x,r,A,B,w,C,y,D,t){function E(e){return r(this,void 0,void 0,function(){var h,f,b,g,k,l,n,u;return x(this,function(m){switch(m.label){case 0:h=e.view;f=e.sampleSize;if(!(e&&h&&
e.layer))throw new w("scale-range:missing-parameters","'view' and 'layer' parameters are required");b=[0,2,3,1];g=e.layer;k=B(e,["layer"]);l=t.createLayerAdapter(g,b);n=A({layerAdapter:l},k);n.sampleSize=f||500;if(!l)throw new w("scale-range:invalid-parameters","'layer' must be one of these types: "+t.getLayerTypeLabels(b).join(", "));return[4,h.when()];case 1:return m.sent(),u=C.isSome(n.signal)?{signal:n.signal}:null,[4,l.load(u)];case 2:return m.sent(),[2,n]}})})}function z(e,h,f){void 0===f&&
(f=!0);if(e.constraints&&"effectiveLODs"in e.constraints){var b=e.constraints.effectiveLODs;e=null;for(var g=0,b=f?b:b.slice(0).reverse();g<b.length;g++){var k=b[g];if(!(f?k.scale>h:k.scale<h)){e=k;break}}return e}}return function(e){return r(this,void 0,void 0,function(){var h,f,b,g,k,l,n,u,m,r,t;return x(this,function(c){var a;switch(c.label){case 0:return[4,E(e)];case 1:return b=c.sent(),g=b.view,k=b.sampleSize,l=b.layerAdapter,n=b.signal,[4,l.getSampleFeatures({view:g,sampleSize:k,returnGeometry:!0,
signal:n})];case 2:return u=c.sent(),[4,D({features:u,geometryType:l.geometryType})];case 3:m=c.sent();c=g;var d=null,q=null,p=a=null;switch(l.geometryType){case "point":case "multipoint":a=m;d=a.avgMinDistance;q=12;a=a.minDistance;p=320;break;case "polyline":a=m;d=a.avgLength;q=30;a=a.minLength;p=320;break;case "polygon":a=m,d=a.avgSize,q=15,a=a.minSize,p=640}a=0<a?a/p:null;d=y.getScaleForResolution(0<d?d/q:null,c.spatialReference);c=y.getScaleForResolution(a,c.spatialReference);h=d;f=c;r=h;t=f;
c=r;var d=t,q=m,v=b.view;a=b.layerAdapter;b.snapToLOD&&(p=z(v,c),v=z(v,d,!1),c=p?p.scale:c,d=v?v.scale:d);if(c<d)throw new w("scale-range:invalid","calculated minScale is less than maxScale.");d>c/2&&(d=Math.floor(d/2));1E8<c&&(c=0);"polygon"!==a.geometryType&&(d=0);return[2,{minScale:Math.ceil(c),maxScale:Math.floor(d),spatialStatistics:q}]}})})}});