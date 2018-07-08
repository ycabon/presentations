// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["dojo/Deferred"],function(f){var c={makeDeferredCancellingPending:function(){var a={},b=c._dfdCanceller.bind(null,a),b=new f(b);return a.deferred=b},_dfdCanceller:function(a){a=a.deferred?a.deferred:a;a.canceled=!0;var b=a._pendingDfd;a.isResolved()||!b||b.isResolved()||b.cancel();a._pendingDfd=null},_fixDfd:function(a){var b=a.then;a.then=function(a,d,c){if(a){var e=a;a=function(a){return a&&a._argsArray?e.apply(null,a):e(a)}}return b.call(this,a,d,c)};return a},_resDfd:function(a,b,c){var d=
b.length;1===d?c?a.reject(b[0]):a.resolve(b[0]):1<d?(b._argsArray=!0,a.resolve(b)):a.resolve()}};return c});