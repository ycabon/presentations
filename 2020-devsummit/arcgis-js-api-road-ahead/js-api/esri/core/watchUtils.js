// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ./events ./has ./lang ./promiseUtils".split(" "),function(C,e,p,z,q,n){function k(a,b,d,c,e){e=a.watch(b,function(b,e,f,l){d&&!d(b)||c.call(a,b,e,f,l)},e);if(Array.isArray(b))for(var f=0;f<b.length;f++){var g=a.get(b[f]);d&&d(g)&&c.call(a,g,g,b,a)}else g=a.get(b),d&&d(g)&&c.call(a,g,g,b,a);return e}function h(a,b,d,c,e){function f(){m&&(m.remove(),m=null)}var g="function"===typeof c?c:null,A="object"===typeof c?c:null;"boolean"===typeof c&&(e=c);var h=!1,m,l=n.createDeferred(f);
n.onAbort(A,function(){f();l.reject(n.createAbortError())});c=z("esri-native-promise")?{then:l.promise.then.bind(l.promise),catch:l.promise.catch.bind(l.promise),remove:f}:{cancel:l.cancel,then:l.promise.then.bind(l.promise),catch:l.promise.catch.bind(l.promise),remove:f};Object.freeze(c);m=k(a,b,d,function(b,c,d,e){h=!0;f();g&&g.call(a,b,c,d,e);l.resolve({value:b,oldValue:c,propertyName:d,target:e})},e);h&&f();return c}function r(a){return!!a}function t(a){return!a}function u(a){return!0===a}function v(a){return!1===
a}function w(a){return void 0!==a}function x(a){return void 0===a}function y(a,b,d,c){var e=Array.isArray(b)?b:-1<b.indexOf(",")?b.split(","):[b];b=a.watch(b,d,c);for(c=0;c<e.length;c++){var f=e[c].trim().replace(B,"$1"),g=a.get(f);d.call(a,g,g,f,a)}return b}Object.defineProperty(e,"__esModule",{value:!0});e.whenValidOnce=h;var B=/\?(\.|$)/g;e.init=y;e.watch=function(a,b,d,c){return a.watch(b,d,c)};e.once=function(a,b,d,c){return h(a,b,null,d,c)};e.when=function(a,b,d,c){return k(a,b,r,d,c)};e.whenOnce=
function(a,b,d,c){return h(a,b,r,d,c)};e.whenNot=function(a,b,d,c){return k(a,b,t,d,c)};e.whenNotOnce=function(a,b,d,c){return h(a,b,t,d,c)};e.whenTrue=function(a,b,d,c){return k(a,b,u,d,c)};e.whenTrueOnce=function(a,b,d,c){return h(a,b,u,d,c)};e.whenFalse=function(a,b,d,c){return k(a,b,v,d,c)};e.whenFalseOnce=function(a,b,d,c){return h(a,b,v,d,c)};e.whenDefined=function(a,b,d,c){return k(a,b,w,d,c)};e.whenDefinedOnce=function(a,b,d,c){return h(a,b,w,d,c)};e.whenUndefined=function(a,b,d,c){return k(a,
b,x,d,c)};e.whenUndefinedOnce=function(a,b,d,c){return h(a,b,x,d,c)};e.whenEqual=function(a,b,d,c,e){return k(a,b,function(a){return q.equals(d,a)},c,e)};e.whenEqualOnce=function(a,b,d,c,e){return h(a,b,function(a){return q.equals(d,a)},c,e)};e.pausable=function(a,b,d,c){var e=!1,f=a.watch(b,function(b,c,f,h){e||d.call(a,b,c,f,h)},c);return{remove:function(){f.remove()},pause:function(){e=!0},resume:function(){e=!1}}};e.on=function(a,b,d,c,e,f,g){function h(b){var c=k[b];c&&(f&&f(c.target,b,a,d),
c.handle.remove(),delete k[b])}var k={},m=y(a,b,function(b,f,g){h(g);p.isEventTarget(b)&&(k[g]={handle:p.on(b,d,c),target:b},e&&e(b,g,a,d))},g);return{remove:function(){m.remove();for(var a in k)h(a)}}}});