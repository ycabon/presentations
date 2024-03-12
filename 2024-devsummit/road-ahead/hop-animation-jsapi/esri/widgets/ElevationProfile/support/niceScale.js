// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(d){function e(a,c){const b=Math.floor(Math.log10(a));a/=10**b;return(c?1.5>a?1:3>a?2:5>a?2.5:7>a?5:10:1>=a?1:2>=a?2:3>=a?2.5:5>=a?5:10)*10**b}d.niceScale=function(a,c,b=10){const f=e(c-a,!1);if(0===f)return[a,c];b=e(f/(b-1),!0);return[Math.floor(a/b)*b,Math.ceil(c/b)*b]};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});