//>>built
define(["./Evented"],function(b){var a=new b;return{publish:function(b,c){return a.emit.apply(a,arguments)},subscribe:function(b,c){return a.on.apply(a,arguments)}}});