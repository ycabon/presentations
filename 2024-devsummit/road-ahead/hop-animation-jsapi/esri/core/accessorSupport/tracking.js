// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../has","../Logger","./utils","./tracking/Flags"],function(e,B,z,r,k){function t(a){f.onObservableAccessed(a)}function u(a,b,d){if(l)return m(a,b,d);f=a;g.push(a);a=b.call(d);v();return a}function m(a,b,d){const c=l;l=!0;f=a;g.push(a);a=null;try{a=b.call(d)}catch(h){n&&z.getLogger("esri.core.accessorSupport.tracking").error(h)}v();l=c;return a}function v(){var a=g.length;if(1<a){const b=g.pop();f=g[a-2];b.onTrackingEnd()}else 1===a?(a=g.pop(),f=p,a.onTrackingEnd()):f=p}function w(a,
b){if(!(b.flags&k.Flags.DepTrackingInitialized)){var d=n;n=!1;b.flags&k.Flags.AutoTracked?m(b,b.metadata.get,a):x(a,b);n=d}}function x(a,b){b.flags&k.Flags.ExplicitlyTracking||(b.flags|=k.Flags.ExplicitlyTracking,m(b,()=>{var d=b.metadata.dependsOn||A;for(const c of d)if("string"!==typeof c||c.includes(".")){d=r.pathToArray(c);for(let h=0,q=a;h<d.length&&null!=q&&"object"===typeof q;++h)q=y(q,d[h],h!==d.length-1)}else y(a,c,!1)}),b.flags&=~k.Flags.ExplicitlyTracking)}function y(a,b,d){b="?"===b[b.length-
1]?b.slice(0,-1):b;if(null!=a.getItemAt||Array.isArray(a)){var c=parseInt(b,10);if(!isNaN(c))return Array.isArray(a)?a[c]:a.at(c)}if(c=r.getProperties(a))if(c=c.propertiesByName.get(b))t(c),w(a,c);return d?a[b]:void 0}const p={onObservableAccessed:()=>{},onTrackingEnd:()=>{}},g=[];let f=p,l=!1,n=!1;const A=[];e.initializeDependencyTracking=w;e.runTracked=u;e.runTrackedNoThrow=m;e.runUntracked=function(a,b){return u(p,a,b)};e.trackAccess=t;e.trackExplicitDependencies=x;Object.defineProperty(e,Symbol.toStringTag,
{value:"Module"})});