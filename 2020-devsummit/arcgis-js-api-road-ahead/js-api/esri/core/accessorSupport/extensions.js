// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","./extensions/aliasedProperty","./extensions/computedProperty","./extensions/serializableProperty"],function(m,g,h,k,l){Object.defineProperty(g,"__esModule",{value:!0});var e=[h.default,k.default,l.default];g.processPrototypeMetadatas=function(a,f){for(var b=0;b<e.length;b++){var c=e[b];if(c.processPrototypePropertyMetadata)for(var d in a)c.processPrototypePropertyMetadata(d,a[d],a,f)}};g.processClassMetadatas=function(a,f){for(var b=0;b<e.length;b++){var c=e[b];if(c.processClassPropertyMetadata)for(var d in a)c.processClassPropertyMetadata(d,
a[d],a,f)}};g.instanceCreated=function(a,f){for(var b=Object.getOwnPropertyNames(f),c=0;c<e.length;c++){var d=e[c];d.instanceCreated&&d.instanceCreated(a,f,b)}}});