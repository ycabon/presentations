// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../has ../../Logger ../utils ../wire".split(" "),function(k,a,l,f,g,h){Object.defineProperty(a,"__esModule",{value:!0});f.getLogger("esri.core.accessorSupport.extensions.computedProperty");a.ComputedPropertyExtension={processClassPropertyMetadata:function(a,b,d,c){b.dependsOn&&b.dependsOn.length&&(b.wire=h.create(b.dependsOn,function(b){return g.getProperties(b).propertyInvalidated(a)}))},instanceCreated:function(a,b,d){for(var c=0;c<d.length;c++){var e=b[d[c]];e.wire&&
e.wire(a)}}};a.default=a.ComputedPropertyExtension});