// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/Warning","./PointSizeFixedSizeAlgorithm","./PointSizeSplatAlgorithm"],function(k,d,f,g,h){Object.defineProperty(d,"__esModule",{value:!0});var e={pointCloudFixedSizeAlgorithm:g.default,pointCloudSplatAlgorithm:h.default};d.read=function(a,b,c){if(b=a?e[a.type]||null:null)return b=new b,b.read(a,c),b;c&&c.messages&&a&&c.messages.push(new f("pointsizealgorithm:unsupported","Point size algorithms of type '"+(a.type||"unknown")+"' are not supported",{definition:a,
context:c}));return null};d.fromJSON=function(a){var b=a?e[a.type]||null:null;return b?b.fromJSON(a):null}});