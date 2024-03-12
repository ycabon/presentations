// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(d){function e(a,c){if(a&&c)for(const b of a.children)b.localName in c&&(a=c[b.localName],"function"===typeof a?(a=a(b))&&e(b,a):e(b,a))}function*f(a,c){for(const b of a.children)b.localName in c&&(a=c[b.localName],"function"===typeof a?yield a(b):yield*f(b,a))}d.iterateXML=f;d.visitXML=e;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});