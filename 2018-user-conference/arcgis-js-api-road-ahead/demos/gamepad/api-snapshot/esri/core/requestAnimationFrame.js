// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","./global","./now"],function(a,b,d,e){var f=e();a=d.requestAnimationFrame;if(!a){b=["ms","moz","webkit","o"];for(var c=0;c<b.length&&!a;++c)a=d[b[c]+"RequestAnimationFrame"];a||(a=function(a){var b=e(),c=Math.max(0,16-(b-f)),g=d.setTimeout(function(){a(e())},c);f=b+c;return g})}return a});