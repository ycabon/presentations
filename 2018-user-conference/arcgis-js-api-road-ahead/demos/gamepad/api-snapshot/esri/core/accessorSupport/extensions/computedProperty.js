// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports dojo/has ../../Logger ../utils ../wire".split(" "),function(k,a,l,f,g,h){Object.defineProperty(a,"__esModule",{value:!0});f.getLogger("esri.core.accessorSupport.extensions.computedProperty");a.ComputedPropertyExtension={processClassPropertyMetadata:function(a,c,b,d){c.dependsOn&&(b=void 0,b=c.dependsOn.slice())&&(c.wire=h.create(b,function(b){return g.getProperties(b).propertyInvalidated(a)}))},instanceCreated:function(a,c,b){for(var d=0;d<b.length;d++){var e=c[b[d]];e.wire&&
e.wire(a)}}};a.default=a.ComputedPropertyExtension});