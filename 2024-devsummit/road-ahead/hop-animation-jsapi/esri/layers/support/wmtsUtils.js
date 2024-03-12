// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../core/arrayUtils ../../core/Error ../../geometry/ellipsoidUtils ../../geometry/Extent ../../geometry/Point ../../geometry/support/WKIDUnitConversion ../ogc/crsUtils ../ogc/xmlUtils ./LOD ./TileInfo".split(" "),function(w,P,G,Q,H,I,C,D,J,R,S){function p(b,a){for(let d=0;d<a.childNodes.length;d++){const c=a.childNodes[d];if(c.nodeType===Node.ELEMENT_NODE&&c.nodeName===b)return c}return null}function v(b,a){const d=[];for(let c=0;c<a.childNodes.length;c++){const f=a.childNodes[c];
f.nodeType===Node.ELEMENT_NODE&&f.nodeName===b&&d.push(f)}return d}function x(b,a){const d=[];for(let c=0;c<a.childNodes.length;c++){const f=a.childNodes[c];f.nodeType===Node.ELEMENT_NODE&&f.nodeName===b&&d.push(f)}return d.map(c=>c.textContent).filter(P.isSome)}function l(b,a){b.split("\x3e").forEach(d=>{a&&=p(d,a)});return a&&a.textContent}function y(b,a,d,c){let f;Array.prototype.slice.call(c.childNodes).some(e=>{if(e.nodeName.includes(b)){const k=p(a,e)?.textContent;if(k===d||d.split(":")&&d.split(":")[1]===
k)return f=e,!0}return!1});return f}function K(b,a){const d=[];var c=b.layerMap?.get(a);if(!c)return null;const f=v("ResourceURL",c);c=v("Dimension",c);let e,k,h,m;c.length&&(e=l("Identifier",c[0]),k=x("Default",c[0])||x("Value",c[0]));1<c.length&&(h=l("Identifier",c[1]),m=x("Default",c[1])||x("Value",c[1]));b.dimensionMap.set(a,{dimensions:k,dimensions2:m});f.forEach(q=>{let g=q.getAttribute("template");if("tile"===q.getAttribute("resourceType")){if(e&&k.length)if(g.includes("{"+e+"}"))g=g.replace("{"+
e+"}","{dimensionValue}");else{var n=g.toLowerCase().indexOf("{"+e.toLowerCase()+"}");-1<n&&(g=g.substring(0,n)+"{dimensionValue}"+g.substring(n+e.length+2))}h&&m.length&&(g.includes("{"+h+"}")?g=g.replace("{"+h+"}","{dimensionValue2}"):(n=g.toLowerCase().indexOf("{"+h.toLowerCase()+"}"),-1<n&&(g=g.substring(0,n)+"{dimensionValue2}"+g.substring(n+h.length+2))));d.push({template:g,format:q.getAttribute("format"),resourceType:"tile"})}});return d}function L(b,a,d){b=K(b,a);a=b?.filter(c=>c.format===
d);return(a?.length?a:b)??[]}function T(b){const a=[];J.visitXML(b,{BoundingBox:d=>{if(d.getAttribute("crs")){var c=d.getAttribute("crs").toLowerCase(),f=E(c),e=c.includes("epsg")&&D.isAxesOrderReversedForWkid(f.wkid),k,h,m,q;J.visitXML(d,{LowerCorner:g=>{[k,h]=g.textContent.split(" ").map(n=>Number.parseFloat(n));e&&([k,h]=[h,k])},UpperCorner:g=>{[m,q]=g.textContent.split(" ").map(n=>Number.parseFloat(n));e&&([m,q]=[q,m])}});a.push({xmin:k,ymin:h,xmax:m,ymax:q,spatialReference:f})}}});return a}function U(b,
a){return v("Style",b).map(d=>{var c=p("LegendURL",d),f=p("Keywords",d);f=f?x("Keyword",f):[];c=c&&c.getAttribute("xlink:href");a&&(c=c&&c.replace(/^http:/i,"https:"));return{abstract:l("Abstract",d),id:l("Identifier",d),isDefault:"true"===d.getAttribute("isDefault"),keywords:f,legendUrl:c,title:l("Title",d)}})}function V(b,a,d){return v("TileMatrixSetLink",a).map(c=>W(b,c,d))}function W(b,a,d){const c=p("TileMatrixSet",a).textContent;var f=x("TileMatrix",a);const e=d.find(g=>{g=p("Identifier",g)?.textContent;
return g===c||c.split(":")&&c.split(":")[1]===g?!0:!1});a=(a=p("TileMatrixSetLimits",a))&&v("TileMatrixLimits",a);const k=new Map;if(a?.length)for(var h of a){a=p("TileMatrix",h).textContent;d=+p("MinTileRow",h).textContent;const g=+p("MaxTileRow",h).textContent,n=+p("MinTileCol",h).textContent,z=+p("MaxTileCol",h).textContent;k.set(a,{minCol:n,maxCol:z,minRow:d,maxRow:g})}const m=l("SupportedCRS",e).toLowerCase();h=X(e,m);a=h.spatialReference;d=p("TileMatrix",e);d=[parseInt(l("TileWidth",d),10),
parseInt(l("TileHeight",d),10)];const q=[];f.length?f.forEach((g,n)=>{g=y("TileMatrix","Identifier",g,e);q.push(M(g,m,n,c,k))}):v("TileMatrix",e).forEach((g,n)=>{q.push(M(g,m,n,c,k))});b=Y(b,e,h,d,q[0]).toJSON();f=(new S({dpi:96,spatialReference:a,size:d,origin:h,lods:q})).toJSON();return{id:c,fullExtent:b,tileInfo:f}}function E(b){b=b.toLowerCase();let a=parseInt(b.split(":").pop(),10);if(900913===a||3857===a)a=102100;b=b.includes("crs84")||b.includes("crs:84")?A.CRS84:b.includes("crs83")||b.includes("crs:83")?
A.CRS83:b.includes("crs27")||b.includes("crs:27")?A.CRS27:null;null!=b&&(a=b);return{wkid:a}}function X(b,a){b=p("TileMatrix",b);return N(b,a)}function N(b,a){const d=E(a),[c,f]=l("TopLeftCorner",b).split(" ").map(e=>parseFloat(e));return a.includes("epsg")&&D.isAxesOrderReversedForWkid(d.wkid)?new I({x:f,y:c,spatialReference:d}):new I({x:c,y:f,spatialReference:d})}function Y(b,a,d,c,f){var e=p("BoundingBox",a);if(e){var k=l("LowerCorner",e).split(" ");var h=l("UpperCorner",e).split(" ")}k&&1<k.length&&
h&&1<h.length?(a=parseFloat(k[0]),c=parseFloat(k[1]),k=parseFloat(h[0]),h=parseFloat(h[1])):(a=p("TileMatrix",a),k=parseInt(l("MatrixWidth",a),10),e=parseInt(l("MatrixHeight",a),10),a=d.x,h=d.y,k=a+k*c[0]*f.resolution,c=h-e*c[1]*f.resolution);return"1.0.0"!==b||!D.isAxesOrderReversedForWkid(d.spatialReference.wkid)||d.spatialReference.isGeographic&&-90>d.x&&-90<=d.y?new H(a,c,k,h,d.spatialReference):new H(c,a,h,k,d.spatialReference)}function M(b,a,d,c,f){var e=E(a);const k=l("Identifier",b);let h=
parseFloat(l("ScaleDenominator",b));c=O(e.wkid,h,c);h*=1.058267716535433;e=+l("MatrixWidth",b);const m=+l("MatrixHeight",b),{maxCol:q=e-1,maxRow:g=m-1,minCol:n=0,minRow:z=0}=f.get(k)??{},{x:F,y:r}=N(b,a);return new R({cols:[n,q],level:d,levelValue:k,origin:[F,r],scale:h,resolution:c,rows:[z,g]})}function O(b,a,d){b=C.hasOwnProperty(""+b)?C.values[C[b]]:"default028mm"===d?6370997*Math.PI/180:Q.getReferenceEllipsoidFromWKID(b).metersPerDegree;return 7*a/25E3/b}var A;(function(b){b[b.CRS84=4326]="CRS84";
b[b.CRS83=4269]="CRS83";b[b.CRS27=4267]="CRS27"})(A||={});w.getTileUrlFromResourceUrls=function(b,a,d,c,f,e,k,h){c=L(b,a,c);if(!(0<c?.length))return"";const {dimensionMap:m}=b;b=m.get(a).dimensions?.[0];a=m.get(a).dimensions2?.[0];return c[k%c.length].template.replaceAll(/\{Style\}/gi,f??"").replaceAll(/\{TileMatrixSet\}/gi,d??"").replaceAll(/\{TileMatrix\}/gi,e).replaceAll(/\{TileRow\}/gi,""+k).replaceAll(/\{TileCol\}/gi,""+h).replaceAll(/\{dimensionValue\}/gi,b).replaceAll(/\{dimensionValue2\}/gi,
a)};w.getTileUrlTemplateFromResourceUrls=function(b,a,d,c){const {dimensionMap:f}=b;b=K(b,a);let e="";if(b&&0<b.length){const k=f.get(a).dimensions?.[0];a=f.get(a).dimensions2?.[0];e=b[0].template;e.indexOf(".xxx")===e.length-4&&(e=e.slice(0,-4));e=e.replaceAll(/\{Style\}/gi,c);e=e.replaceAll(/\{TileMatrixSet\}/gi,d);e=e.replaceAll(/\{TileMatrix\}/gi,"{level}");e=e.replaceAll(/\{TileRow\}/gi,"{row}");e=e.replaceAll(/\{TileCol\}/gi,"{col}");e=e.replaceAll(/\{dimensionValue\}/gi,k);e=e.replaceAll(/\{dimensionValue2\}/gi,
a)}return e};w.getTileUrlTemplates=L;w.parseCapabilities=function(b,a){b=b.replaceAll(/ows:/gi,"");var d=(new DOMParser).parseFromString(b,"text/xml").documentElement;const c=new Map;b=new Map;var f=p("Contents",d);if(!f)throw new G("wmtslayer:wmts-capabilities-xml-is-not-valid");var e=p("OperationsMetadata",d)?.querySelector("[name\x3d'GetTile']")?.getElementsByTagName("Get");e=e&&Array.prototype.slice.call(e);const k=a.url?.indexOf("https"),h=void 0!==k&&-1<k;let m=a.serviceMode,q,g=a?.url,n;e?.length&&
e.some(r=>{const t=p("Constraint",r);if(!t||y("AllowedValues","Value",m,t))return g=r.attributes[0].nodeValue,!0;if(!t||y("AllowedValues","Value","RESTful",t)||y("AllowedValues","Value","REST",t))n=r.attributes[0].nodeValue;else if(!t||y("AllowedValues","Value","KVP",t))q=r.attributes[0].nodeValue;return!1});g||(n?(g=n,m="RESTful"):q?(g=q,m="KVP"):g=p("ServiceMetadataURL",d)?.getAttribute("xlink:href"));a=g.indexOf("1.0.0/");-1===a&&"RESTful"===m?g+="/":-1<a&&(g=g.substring(0,a));"KVP"===m&&(g+=-1<
a?"":"?");h&&(g=g.replace(/^http:/i,"https:"));const z=l("ServiceIdentification\x3eServiceTypeVersion",d);a=(a=l("ServiceIdentification\x3eAccessConstraints",d))&&/^none$/i.test(a)?null:a;d=v("Layer",f);const F=v("TileMatrixSet",f);f=d.map(r=>{const t=l("Identifier",r);c.set(t,r);const Z=l("Abstract",r),aa=x("Format",r);var u=p("WGS84BoundingBox",r);var B=u?l("LowerCorner",u).split(" "):["-180","-90"];u=u?l("UpperCorner",u).split(" "):["180","90"];B={xmin:parseFloat(B[0]),ymin:parseFloat(B[1]),xmax:parseFloat(u[0]),
ymax:parseFloat(u[1]),spatialReference:{wkid:4326}};u=T(r);const ba=U(r,h),ca=l("Title",r);r=V(z,r,F);return{id:t,fullExtent:B,fullExtents:u,description:Z,formats:aa,styles:ba,title:ca,tileMatrixSets:r}});return{copyright:a,dimensionMap:b,layerMap:c,layers:f,serviceMode:m,tileUrl:g}};w.parseResourceInfo=function(b){b.layers.forEach(a=>{a.tileMatrixSets?.forEach(d=>{const c=d.tileInfo;c&&96!==c.dpi&&(c.lods?.forEach(f=>{f.scale=96*f.scale/c.dpi;f.resolution=O(c.spatialReference?.wkid,90.71428571428571*
f.scale/96,d.id)}),c.dpi=96)})});return b};w.validateCapabilities=function(b){var a=b.replaceAll(/ows:/gi,"");a=(new DOMParser).parseFromString(a,"text/xml").documentElement;if(!p("Contents",a))throw new G("wmtslayer:wmts-capabilities-xml-is-not-valid","the wmts get capabilities response is not compliant",{text:b});};Object.defineProperty(w,Symbol.toStringTag,{value:"Module"})});