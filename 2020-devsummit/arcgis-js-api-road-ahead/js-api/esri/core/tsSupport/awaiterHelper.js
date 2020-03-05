// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["../promiseUtils"],function(c){return function(g,h,n,b){var a=null;return c.create(function(k,d){function l(a){try{e(b.next(a))}catch(f){d(f)}}function m(a){try{e(b["throw"](a))}catch(f){d(f)}}function e(b){b.done?(a=c.when(b.value),a.then(k,d)):(a=c.when(b.value),a.then(l,m))}e((b=b.apply(g,h||[])).next())},function(b){a&&a.cancel&&a.cancel(b)})}});