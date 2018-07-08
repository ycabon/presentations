// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define([],function(){return function(h,k,c,l){var b,d=l,g=function(){var a=k;if(void 0!==d){var e="",f;for(f in d)e+="#define "+d[f]+"\n";a=e+a}c.shaderSource(b,a);c.compileShader(b);c.getShaderParameter(b,c.COMPILE_STATUS)||(console.error(c.getShaderInfoLog(b)),console.error(m(a)))},m=function(a){var b=2;return a.replace(/\n/g,function(){var a=b++;1E3>a&&(a=("  "+a).slice(-3));return"\n"+a+":"})};this.changeDefines=function(a){if(JSON.stringify(d)==JSON.stringify(a))return!1;d=a;void 0!==b&&g();
console.log("updating shader");return!0};this.getGLName=function(){void 0===b&&(b=c.createShader(h),g());return b}}});