// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","dojox/xml/parser","./Util"],function(m,n,l,e){return function(){function c(a){var f=e.VertexAttrConstants,d;for(d in f)this[f[d]]=e.VertexAttrConstants[d];if(a)for(var b in a)this[b]=a[b]}c.prototype._parse=function(a){a=l.parse(a).getElementsByTagName("snippet");for(var f=/\$[a-zA-Z0-9_]+[ \t]*/,d=/[\$\s]+/g,b=0;b<a.length;b++){var c=a[b].getAttribute("name");e.assert(null==this[c]);for(var g=a[b].textContent;;){var h=g.match(f);if(null==h)break;var k=this[h[0].replace(d,
"")];e.assert(void 0!==k);g=g.replace(h[0],k)}this[c]=g}};return c}()});