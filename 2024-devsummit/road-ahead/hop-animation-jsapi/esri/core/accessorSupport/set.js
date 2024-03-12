// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../Error","../has","../Logger","./get"],function(e,g,h,l,k){function d(c,a,f){if(c&&a)if("object"===typeof a)for(var b of Object.getOwnPropertyNames(a))d(c,b,a[b]);else if(a.includes("."))a=a.split("."),b=a.splice(-1,1)[0],d(k.get(c,a),b,f);else{b=c.__accessor__;if(null!=b&&h("esri-unknown-property-errors")&&null==b.metadata[a])throw new g("set:unknown-property","setting unknown property '"+a+"' on instance of "+b.host.declaredClass);c[a]=f}}e.set=d;Object.defineProperty(e,Symbol.toStringTag,
{value:"Module"})});