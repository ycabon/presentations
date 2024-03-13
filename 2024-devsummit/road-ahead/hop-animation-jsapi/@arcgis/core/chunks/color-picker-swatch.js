/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{p as e,H as t,h as r,F as n}from"../widgets/Widget.js";import{D as a}from"./dom.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.3.0
 */function o(e,t,r){return e(r={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},r.exports),r.exports}var l={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},s=o((function(e){var t=Array.prototype.concat,r=Array.prototype.slice,n=e.exports=function(e){for(var n,a=[],o=0,l=e.length;o<l;o++){var s=e[o];(n=s)&&"string"!=typeof n&&(n instanceof Array||Array.isArray(n)||n.length>=0&&(n.splice instanceof Function||Object.getOwnPropertyDescriptor(n,n.length-1)&&"String"!==n.constructor.name))?a=t.call(a,r.call(s)):a.push(s)}return a};n.wrap=function(e){return function(){return e(n(arguments))}}})),i=o((function(e){var t=Object.hasOwnProperty,r=Object.create(null);for(var n in l)t.call(l,n)&&(r[l[n]]=n);var a=e.exports={to:{},get:{}};function o(e,t,r){return Math.min(Math.max(t,e),r)}function i(e){var t=Math.round(e).toString(16).toUpperCase();return t.length<2?"0"+t:t}a.get=function(e){var t,r;switch(e.substring(0,3).toLowerCase()){case"hsl":t=a.get.hsl(e),r="hsl";break;case"hwb":t=a.get.hwb(e),r="hwb";break;default:t=a.get.rgb(e),r="rgb"}return t?{model:r,value:t}:null},a.get.rgb=function(e){if(!e)return null;var r,n,a,s=[0,0,0,1];if(r=e.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(a=r[2],r=r[1],n=0;n<3;n++){var i=2*n;s[n]=parseInt(r.slice(i,i+2),16)}a&&(s[3]=parseInt(a,16)/255)}else if(r=e.match(/^#([a-f0-9]{3,4})$/i)){for(a=(r=r[1])[3],n=0;n<3;n++)s[n]=parseInt(r[n]+r[n],16);a&&(s[3]=parseInt(a+a,16)/255)}else if(r=e.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)){for(n=0;n<3;n++)s[n]=parseInt(r[n+1],0);r[4]&&(r[5]?s[3]=.01*parseFloat(r[4]):s[3]=parseFloat(r[4]))}else{if(!(r=e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)))return(r=e.match(/^(\w+)$/))?"transparent"===r[1]?[0,0,0,0]:t.call(l,r[1])?((s=l[r[1]])[3]=1,s):null:null;for(n=0;n<3;n++)s[n]=Math.round(2.55*parseFloat(r[n+1]));r[4]&&(r[5]?s[3]=.01*parseFloat(r[4]):s[3]=parseFloat(r[4]))}for(n=0;n<3;n++)s[n]=o(s[n],0,255);return s[3]=o(s[3],0,1),s},a.get.hsl=function(e){if(!e)return null;var t=e.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(t){var r=parseFloat(t[4]);return[(parseFloat(t[1])%360+360)%360,o(parseFloat(t[2]),0,100),o(parseFloat(t[3]),0,100),o(isNaN(r)?1:r,0,1)]}return null},a.get.hwb=function(e){if(!e)return null;var t=e.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(t){var r=parseFloat(t[4]);return[(parseFloat(t[1])%360+360)%360,o(parseFloat(t[2]),0,100),o(parseFloat(t[3]),0,100),o(isNaN(r)?1:r,0,1)]}return null},a.to.hex=function(){var e=s(arguments);return"#"+i(e[0])+i(e[1])+i(e[2])+(e[3]<1?i(Math.round(255*e[3])):"")},a.to.rgb=function(){var e=s(arguments);return e.length<4||1===e[3]?"rgb("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+")":"rgba("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+", "+e[3]+")"},a.to.rgb.percent=function(){var e=s(arguments),t=Math.round(e[0]/255*100),r=Math.round(e[1]/255*100),n=Math.round(e[2]/255*100);return e.length<4||1===e[3]?"rgb("+t+"%, "+r+"%, "+n+"%)":"rgba("+t+"%, "+r+"%, "+n+"%, "+e[3]+")"},a.to.hsl=function(){var e=s(arguments);return e.length<4||1===e[3]?"hsl("+e[0]+", "+e[1]+"%, "+e[2]+"%)":"hsla("+e[0]+", "+e[1]+"%, "+e[2]+"%, "+e[3]+")"},a.to.hwb=function(){var e=s(arguments),t="";return e.length>=4&&1!==e[3]&&(t=", "+e[3]),"hwb("+e[0]+", "+e[1]+"%, "+e[2]+"%"+t+")"},a.to.keyword=function(e){return r[e.slice(0,3)]}})),c={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};const h={};for(const e of Object.keys(c))h[c[e]]=e;const u={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};var g=u;for(const e of Object.keys(u)){if(!("channels"in u[e]))throw new Error("missing channels property: "+e);if(!("labels"in u[e]))throw new Error("missing channel labels property: "+e);if(u[e].labels.length!==u[e].channels)throw new Error("channel and label counts mismatch: "+e);const{channels:t,labels:r}=u[e];delete u[e].channels,delete u[e].labels,Object.defineProperty(u[e],"channels",{value:t}),Object.defineProperty(u[e],"labels",{value:r})}function d(e,t){return function(r){return t(e(r))}}function b(e,t){const r=[t[e].parent,e];let n=g[t[e].parent][e],a=t[e].parent;for(;t[a].parent;)r.unshift(t[a].parent),n=d(g[t[a].parent][a],n),a=t[a].parent;return n.conversion=r,n}u.rgb.hsl=function(e){const t=e[0]/255,r=e[1]/255,n=e[2]/255,a=Math.min(t,r,n),o=Math.max(t,r,n),l=o-a;let s,i;o===a?s=0:t===o?s=(r-n)/l:r===o?s=2+(n-t)/l:n===o&&(s=4+(t-r)/l),s=Math.min(60*s,360),s<0&&(s+=360);const c=(a+o)/2;return i=o===a?0:c<=.5?l/(o+a):l/(2-o-a),[s,100*i,100*c]},u.rgb.hsv=function(e){let t,r,n,a,o;const l=e[0]/255,s=e[1]/255,i=e[2]/255,c=Math.max(l,s,i),h=c-Math.min(l,s,i),u=function(e){return(c-e)/6/h+.5};return 0===h?(a=0,o=0):(o=h/c,t=u(l),r=u(s),n=u(i),l===c?a=n-r:s===c?a=1/3+t-n:i===c&&(a=2/3+r-t),a<0?a+=1:a>1&&(a-=1)),[360*a,100*o,100*c]},u.rgb.hwb=function(e){const t=e[0],r=e[1];let n=e[2];const a=u.rgb.hsl(e)[0],o=1/255*Math.min(t,Math.min(r,n));return n=1-1/255*Math.max(t,Math.max(r,n)),[a,100*o,100*n]},u.rgb.cmyk=function(e){const t=e[0]/255,r=e[1]/255,n=e[2]/255,a=Math.min(1-t,1-r,1-n);return[100*((1-t-a)/(1-a)||0),100*((1-r-a)/(1-a)||0),100*((1-n-a)/(1-a)||0),100*a]},u.rgb.keyword=function(e){const t=h[e];if(t)return t;let r,n=1/0;for(const t of Object.keys(c)){const l=(o=c[t],((a=e)[0]-o[0])**2+(a[1]-o[1])**2+(a[2]-o[2])**2);l<n&&(n=l,r=t)}var a,o;return r},u.keyword.rgb=function(e){return c[e]},u.rgb.xyz=function(e){let t=e[0]/255,r=e[1]/255,n=e[2]/255;return t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,[100*(.4124*t+.3576*r+.1805*n),100*(.2126*t+.7152*r+.0722*n),100*(.0193*t+.1192*r+.9505*n)]},u.rgb.lab=function(e){const t=u.rgb.xyz(e);let r=t[0],n=t[1],a=t[2];return r/=95.047,n/=100,a/=108.883,r=r>.008856?r**(1/3):7.787*r+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,a=a>.008856?a**(1/3):7.787*a+16/116,[116*n-16,500*(r-n),200*(n-a)]},u.hsl.rgb=function(e){const t=e[0]/360,r=e[1]/100,n=e[2]/100;let a,o,l;if(0===r)return l=255*n,[l,l,l];a=n<.5?n*(1+r):n+r-n*r;const s=2*n-a,i=[0,0,0];for(let e=0;e<3;e++)o=t+1/3*-(e-1),o<0&&o++,o>1&&o--,l=6*o<1?s+6*(a-s)*o:2*o<1?a:3*o<2?s+(a-s)*(2/3-o)*6:s,i[e]=255*l;return i},u.hsl.hsv=function(e){const t=e[0];let r=e[1]/100,n=e[2]/100,a=r;const o=Math.max(n,.01);return n*=2,r*=n<=1?n:2-n,a*=o<=1?o:2-o,[t,100*(0===n?2*a/(o+a):2*r/(n+r)),(n+r)/2*100]},u.hsv.rgb=function(e){const t=e[0]/60,r=e[1]/100;let n=e[2]/100;const a=Math.floor(t)%6,o=t-Math.floor(t),l=255*n*(1-r),s=255*n*(1-r*o),i=255*n*(1-r*(1-o));switch(n*=255,a){case 0:return[n,i,l];case 1:return[s,n,l];case 2:return[l,n,i];case 3:return[l,s,n];case 4:return[i,l,n];case 5:return[n,l,s]}},u.hsv.hsl=function(e){const t=e[0],r=e[1]/100,n=e[2]/100,a=Math.max(n,.01);let o,l;l=(2-r)*n;const s=(2-r)*a;return o=r*a,o/=s<=1?s:2-s,o=o||0,l/=2,[t,100*o,100*l]},u.hwb.rgb=function(e){const t=e[0]/360;let r=e[1]/100,n=e[2]/100;const a=r+n;let o;a>1&&(r/=a,n/=a);const l=Math.floor(6*t),s=1-n;o=6*t-l,0!=(1&l)&&(o=1-o);const i=r+o*(s-r);let c,h,u;switch(l){default:case 6:case 0:c=s,h=i,u=r;break;case 1:c=i,h=s,u=r;break;case 2:c=r,h=s,u=i;break;case 3:c=r,h=i,u=s;break;case 4:c=i,h=r,u=s;break;case 5:c=s,h=r,u=i}return[255*c,255*h,255*u]},u.cmyk.rgb=function(e){const t=e[0]/100,r=e[1]/100,n=e[2]/100,a=e[3]/100;return[255*(1-Math.min(1,t*(1-a)+a)),255*(1-Math.min(1,r*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a))]},u.xyz.rgb=function(e){const t=e[0]/100,r=e[1]/100,n=e[2]/100;let a,o,l;return a=3.2406*t+-1.5372*r+-.4986*n,o=-.9689*t+1.8758*r+.0415*n,l=.0557*t+-.204*r+1.057*n,a=a>.0031308?1.055*a**(1/2.4)-.055:12.92*a,o=o>.0031308?1.055*o**(1/2.4)-.055:12.92*o,l=l>.0031308?1.055*l**(1/2.4)-.055:12.92*l,a=Math.min(Math.max(0,a),1),o=Math.min(Math.max(0,o),1),l=Math.min(Math.max(0,l),1),[255*a,255*o,255*l]},u.xyz.lab=function(e){let t=e[0],r=e[1],n=e[2];return t/=95.047,r/=100,n/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,[116*r-16,500*(t-r),200*(r-n)]},u.lab.xyz=function(e){let t,r,n;r=(e[0]+16)/116,t=e[1]/500+r,n=r-e[2]/200;const a=r**3,o=t**3,l=n**3;return r=a>.008856?a:(r-16/116)/7.787,t=o>.008856?o:(t-16/116)/7.787,n=l>.008856?l:(n-16/116)/7.787,t*=95.047,r*=100,n*=108.883,[t,r,n]},u.lab.lch=function(e){const t=e[0],r=e[1],n=e[2];let a;return a=360*Math.atan2(n,r)/2/Math.PI,a<0&&(a+=360),[t,Math.sqrt(r*r+n*n),a]},u.lch.lab=function(e){const t=e[0],r=e[1],n=e[2]/360*2*Math.PI;return[t,r*Math.cos(n),r*Math.sin(n)]},u.rgb.ansi16=function(e,t=null){const[r,n,a]=e;let o=null===t?u.rgb.hsv(e)[2]:t;if(o=Math.round(o/50),0===o)return 30;let l=30+(Math.round(a/255)<<2|Math.round(n/255)<<1|Math.round(r/255));return 2===o&&(l+=60),l},u.hsv.ansi16=function(e){return u.rgb.ansi16(u.hsv.rgb(e),e[2])},u.rgb.ansi256=function(e){const t=e[0],r=e[1],n=e[2];return t===r&&r===n?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(r/255*5)+Math.round(n/255*5)},u.ansi16.rgb=function(e){let t=e%10;if(0===t||7===t)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];const r=.5*(1+~~(e>50));return[(1&t)*r*255,(t>>1&1)*r*255,(t>>2&1)*r*255]},u.ansi256.rgb=function(e){if(e>=232){const t=10*(e-232)+8;return[t,t,t]}let t;return e-=16,[Math.floor(e/36)/5*255,Math.floor((t=e%36)/6)/5*255,t%6/5*255]},u.rgb.hex=function(e){const t=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(t.length)+t},u.hex.rgb=function(e){const t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let r=t[0];3===t[0].length&&(r=r.split("").map((e=>e+e)).join(""));const n=parseInt(r,16);return[n>>16&255,n>>8&255,255&n]},u.rgb.hcg=function(e){const t=e[0]/255,r=e[1]/255,n=e[2]/255,a=Math.max(Math.max(t,r),n),o=Math.min(Math.min(t,r),n),l=a-o;let s,i;return s=l<1?o/(1-l):0,i=l<=0?0:a===t?(r-n)/l%6:a===r?2+(n-t)/l:4+(t-r)/l,i/=6,i%=1,[360*i,100*l,100*s]},u.hsl.hcg=function(e){const t=e[1]/100,r=e[2]/100,n=r<.5?2*t*r:2*t*(1-r);let a=0;return n<1&&(a=(r-.5*n)/(1-n)),[e[0],100*n,100*a]},u.hsv.hcg=function(e){const t=e[1]/100,r=e[2]/100,n=t*r;let a=0;return n<1&&(a=(r-n)/(1-n)),[e[0],100*n,100*a]},u.hcg.rgb=function(e){const t=e[0]/360,r=e[1]/100,n=e[2]/100;if(0===r)return[255*n,255*n,255*n];const a=[0,0,0],o=t%1*6,l=o%1,s=1-l;let i=0;switch(Math.floor(o)){case 0:a[0]=1,a[1]=l,a[2]=0;break;case 1:a[0]=s,a[1]=1,a[2]=0;break;case 2:a[0]=0,a[1]=1,a[2]=l;break;case 3:a[0]=0,a[1]=s,a[2]=1;break;case 4:a[0]=l,a[1]=0,a[2]=1;break;default:a[0]=1,a[1]=0,a[2]=s}return i=(1-r)*n,[255*(r*a[0]+i),255*(r*a[1]+i),255*(r*a[2]+i)]},u.hcg.hsv=function(e){const t=e[1]/100,r=t+e[2]/100*(1-t);let n=0;return r>0&&(n=t/r),[e[0],100*n,100*r]},u.hcg.hsl=function(e){const t=e[1]/100,r=e[2]/100*(1-t)+.5*t;let n=0;return r>0&&r<.5?n=t/(2*r):r>=.5&&r<1&&(n=t/(2*(1-r))),[e[0],100*n,100*r]},u.hcg.hwb=function(e){const t=e[1]/100,r=t+e[2]/100*(1-t);return[e[0],100*(r-t),100*(1-r)]},u.hwb.hcg=function(e){const t=e[1]/100,r=1-e[2]/100,n=r-t;let a=0;return n<1&&(a=(r-n)/(1-n)),[e[0],100*n,100*a]},u.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},u.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},u.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},u.gray.hsl=function(e){return[0,0,e[0]]},u.gray.hsv=u.gray.hsl,u.gray.hwb=function(e){return[0,100,e[0]]},u.gray.cmyk=function(e){return[0,0,0,e[0]]},u.gray.lab=function(e){return[e[0],0,0]},u.gray.hex=function(e){const t=255&Math.round(e[0]/100*255),r=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(r.length)+r},u.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]};const f={};Object.keys(g).forEach((e=>{f[e]={},Object.defineProperty(f[e],"channels",{value:g[e].channels}),Object.defineProperty(f[e],"labels",{value:g[e].labels});const t=function(e){const t=function(e){const t=function(){const e={},t=Object.keys(g);for(let r=t.length,n=0;n<r;n++)e[t[n]]={distance:-1,parent:null};return e}(),r=[e];for(t[e].distance=0;r.length;){const e=r.pop(),n=Object.keys(g[e]);for(let a=n.length,o=0;o<a;o++){const a=n[o],l=t[a];-1===l.distance&&(l.distance=t[e].distance+1,l.parent=e,r.unshift(a))}}return t}(e),r={},n=Object.keys(t);for(let e=n.length,a=0;a<e;a++){const e=n[a];null!==t[e].parent&&(r[e]=b(e,t))}return r}(e);Object.keys(t).forEach((r=>{const n=t[r];f[e][r]=function(e){const t=function(...t){const r=t[0];if(null==r)return r;r.length>1&&(t=r);const n=e(t);if("object"==typeof n)for(let e=n.length,t=0;t<e;t++)n[t]=Math.round(n[t]);return n};return"conversion"in e&&(t.conversion=e.conversion),t}(n),f[e][r].raw=function(e){const t=function(...t){const r=t[0];return null==r?r:(r.length>1&&(t=r),e(t))};return"conversion"in e&&(t.conversion=e.conversion),t}(n)}))}));var p=f;const m=["keyword","gray","hex"],y={};for(const e of Object.keys(p))y[[...p[e].labels].sort().join("")]=e;const w={};function v(e,t){if(!(this instanceof v))return new v(e,t);if(t&&t in m&&(t=null),t&&!(t in p))throw new Error("Unknown model: "+t);let r,n;if(null==e)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(e instanceof v)this.model=e.model,this.color=[...e.color],this.valpha=e.valpha;else if("string"==typeof e){const t=i.get(e);if(null===t)throw new Error("Unable to parse color from string: "+e);this.model=t.model,n=p[this.model].channels,this.color=t.value.slice(0,n),this.valpha="number"==typeof t.value[n]?t.value[n]:1}else if(e.length>0){this.model=t||"rgb",n=p[this.model].channels;const r=Array.prototype.slice.call(e,0,n);this.color=S(r,n),this.valpha="number"==typeof e[n]?e[n]:1}else if("number"==typeof e)this.model="rgb",this.color=[e>>16&255,e>>8&255,255&e],this.valpha=1;else{this.valpha=1;const t=Object.keys(e);"alpha"in e&&(t.splice(t.indexOf("alpha"),1),this.valpha="number"==typeof e.alpha?e.alpha:0);const n=t.sort().join("");if(!(n in y))throw new Error("Unable to parse color from object: "+JSON.stringify(e));this.model=y[n];const{labels:a}=p[this.model],o=[];for(r=0;r<a.length;r++)o.push(e[a[r]]);this.color=S(o)}if(w[this.model])for(n=p[this.model].channels,r=0;r<n;r++){const e=w[this.model][r];e&&(this.color[r]=e(this.color[r]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}v.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(e){let t=this.model in i.to?this:this.rgb();t=t.round("number"==typeof e?e:1);const r=1===t.valpha?t.color:[...t.color,this.valpha];return i.to[t.model](r)},percentString(e){const t=this.rgb().round("number"==typeof e?e:1),r=1===t.valpha?t.color:[...t.color,this.valpha];return i.to.rgb.percent(r)},array(){return 1===this.valpha?[...this.color]:[...this.color,this.valpha]},object(){const e={},{channels:t}=p[this.model],{labels:r}=p[this.model];for(let n=0;n<t;n++)e[r[n]]=this.color[n];return 1!==this.valpha&&(e.alpha=this.valpha),e},unitArray(){const e=this.rgb().color;return e[0]/=255,e[1]/=255,e[2]/=255,1!==this.valpha&&e.push(this.valpha),e},unitObject(){const e=this.rgb().object();return e.r/=255,e.g/=255,e.b/=255,1!==this.valpha&&(e.alpha=this.valpha),e},round(e){return e=Math.max(e||0,0),new v([...this.color.map(k(e)),this.valpha],this.model)},alpha(e){return void 0!==e?new v([...this.color,Math.max(0,Math.min(1,e))],this.model):this.valpha},red:M("rgb",0,x(255)),green:M("rgb",1,x(255)),blue:M("rgb",2,x(255)),hue:M(["hsl","hsv","hsl","hwb","hcg"],0,(e=>(e%360+360)%360)),saturationl:M("hsl",1,x(100)),lightness:M("hsl",2,x(100)),saturationv:M("hsv",1,x(100)),value:M("hsv",2,x(100)),chroma:M("hcg",1,x(100)),gray:M("hcg",2,x(100)),white:M("hwb",1,x(100)),wblack:M("hwb",2,x(100)),cyan:M("cmyk",0,x(100)),magenta:M("cmyk",1,x(100)),yellow:M("cmyk",2,x(100)),black:M("cmyk",3,x(100)),x:M("xyz",0,x(95.047)),y:M("xyz",1,x(100)),z:M("xyz",2,x(108.833)),l:M("lab",0,x(100)),a:M("lab",1),b:M("lab",2),keyword(e){return void 0!==e?new v(e):p[this.model].keyword(this.color)},hex(e){return void 0!==e?new v(e):i.to.hex(this.rgb().round().color)},hexa(e){if(void 0!==e)return new v(e);const t=this.rgb().round().color;let r=Math.round(255*this.valpha).toString(16).toUpperCase();return 1===r.length&&(r="0"+r),i.to.hex(t)+r},rgbNumber(){const e=this.rgb().color;return(255&e[0])<<16|(255&e[1])<<8|255&e[2]},luminosity(){const e=this.rgb().color,t=[];for(const[r,n]of e.entries()){const e=n/255;t[r]=e<=.04045?e/12.92:((e+.055)/1.055)**2.4}return.2126*t[0]+.7152*t[1]+.0722*t[2]},contrast(e){const t=this.luminosity(),r=e.luminosity();return t>r?(t+.05)/(r+.05):(r+.05)/(t+.05)},level(e){const t=this.contrast(e);return t>=7?"AAA":t>=4.5?"AA":""},isDark(){const e=this.rgb().color;return(2126*e[0]+7152*e[1]+722*e[2])/1e4<128},isLight(){return!this.isDark()},negate(){const e=this.rgb();for(let t=0;t<3;t++)e.color[t]=255-e.color[t];return e},lighten(e){const t=this.hsl();return t.color[2]+=t.color[2]*e,t},darken(e){const t=this.hsl();return t.color[2]-=t.color[2]*e,t},saturate(e){const t=this.hsl();return t.color[1]+=t.color[1]*e,t},desaturate(e){const t=this.hsl();return t.color[1]-=t.color[1]*e,t},whiten(e){const t=this.hwb();return t.color[1]+=t.color[1]*e,t},blacken(e){const t=this.hwb();return t.color[2]+=t.color[2]*e,t},grayscale(){const e=this.rgb().color,t=.3*e[0]+.59*e[1]+.11*e[2];return v.rgb(t,t,t)},fade(e){return this.alpha(this.valpha-this.valpha*e)},opaquer(e){return this.alpha(this.valpha+this.valpha*e)},rotate(e){const t=this.hsl();let r=t.color[0];return r=(r+e)%360,r=r<0?360+r:r,t.color[0]=r,t},mix(e,t){if(!e||!e.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof e);const r=e.rgb(),n=this.rgb(),a=void 0===t?.5:t,o=2*a-1,l=r.alpha()-n.alpha(),s=((o*l==-1?o:(o+l)/(1+o*l))+1)/2,i=1-s;return v.rgb(s*r.red()+i*n.red(),s*r.green()+i*n.green(),s*r.blue()+i*n.blue(),r.alpha()*a+n.alpha()*(1-a))}};for(const e of Object.keys(p)){if(m.includes(e))continue;const{channels:t}=p[e];v.prototype[e]=function(...t){return this.model===e?new v(this):t.length>0?new v(t,e):new v([...(r=p[this.model][e].raw(this.color),Array.isArray(r)?r:[r]),this.valpha],e);var r},v[e]=function(...r){let n=r[0];return"number"==typeof n&&(n=S(r,t)),new v(n,e)}}function k(e){return function(t){return function(e,t){return Number(e.toFixed(t))}(t,e)}}function M(e,t,r){e=Array.isArray(e)?e:[e];for(const n of e)(w[n]||(w[n]=[]))[t]=r;return e=e[0],function(n){let a;return void 0!==n?(r&&(n=r(n)),a=this[e](),a.color[t]=n,a):(a=this[e]().color[t],r&&(a=r(a)),a)}}function x(e){return function(t){return Math.max(0,Math.min(e,t))}}function S(e,t){for(let r=0;r<t;r++)"number"!=typeof e[r]&&(e[r]=0);return e}var C=v;
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.3.0
 */const A=/^[0-9A-F]$/i,j=/^#[0-9A-F]{3}$/i,$=/^#[0-9A-F]{6}$/i,O=/^#[0-9A-F]{4}$/i,E=/^#[0-9A-F]{8}$/i,z=e=>Number((100*e).toFixed()),F=e=>Number((e/100).toFixed(2));function q(e,t=!1){return H(e,t)||I(e,t)}function _(e,t,r){return!!e&&e.length===t&&r.test(e)}function H(e,t=!1){return _(e,t?5:4,t?O:j)}function I(e,t=!1){return _(e,t?9:7,t?E:$)}function L(e,t=!1,r=!1){return(e=e.toLowerCase()).startsWith("#")||(e=`#${e}`),H(e,t)?B(U(e,t)):t&&r&&q(e,!1)?B(U(`${e}${H(e,!1)?"f":"ff"}`,!0)):e}function N(e,t=!1){return t?e.hexa():e.hex()}function B(e){const{r:t,g:r,b:n}=e;return`#${G(t)}${G(r)}${G(n)}${"a"in e?G(255*e.a):""}`.toLowerCase()}function G(e){return e.toString(16).padStart(2,"0")}function P(e){const t={...e,a:e.alpha??1};return delete t.alpha,t}function R(e){const t={...e,alpha:e.a??1};return delete t.a,t}function U(e,t=!1){if(!q(e,t))return null;let r,n,a,o;if(3===(e=e.replace("#","")).length||4===e.length){const[t,l,s,i]=e.split("");r=parseInt(`${t}${t}`,16),n=parseInt(`${l}${l}`,16),a=parseInt(`${s}${s}`,16),o=parseInt(`${i}${i}`,16)/255}else r=parseInt(e.slice(0,2),16),n=parseInt(e.slice(2,4),16),a=parseInt(e.slice(4,6),16),o=parseInt(e.slice(6,8),16)/255;return isNaN(o)?{r,g:n,b:a}:{r,g:n,b:a,a:o}}const X={HEX:"hex",HEXA:"hexa",RGB_CSS:"rgb-css",RGBA_CSS:"rgba-css",HSL_CSS:"hsl-css",HSLA_CSS:"hsla-css"},W="rgb",D="rgba",J="hsl",K="hsla",Q="hsv",T="hsva";function V(e){if("string"==typeof e){if(e.startsWith("#")){const{length:t}=e;if(4===t||7===t)return X.HEX;if(5===t||9===t)return X.HEXA}if(e.startsWith("rgba("))return X.RGBA_CSS;if(e.startsWith("rgb("))return X.RGB_CSS;if(e.startsWith("hsl("))return X.HSL_CSS;if(e.startsWith("hsla("))return X.HSLA_CSS}if("object"==typeof e){if(Y(e,"r","g","b"))return Y(e,"a")?D:W;if(Y(e,"h","s","l"))return Y(e,"a")?K:J;if(Y(e,"h","s","v"))return Y(e,"a")?T:Q}return null}function Y(e,...t){return t.every((t=>t&&e&&`${t}`in e))}function Z(e,t){return e?.rgb().array().toString()===t?.rgb().array().toString()}function ee(e){return e===X.HEXA||e===X.RGBA_CSS||e===X.HSLA_CSS||e===D||e===K||e===T}function te(e){return e===X.HEX?X.HEXA:e===X.RGB_CSS?X.RGBA_CSS:e===X.HSL_CSS?X.HSLA_CSS:e===W?D:e===J?K:e===Q?T:e}function re(e){return e===X.HEXA?X.HEX:e===X.RGBA_CSS?X.RGB_CSS:e===X.HSLA_CSS?X.HSL_CSS:e===D?W:e===K?J:e===T?Q:e}
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.3.0
 */const ne="checker",ae=e(class extends t{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.active=!1,this.color=void 0,this.scale="m"}handleColorChange(e){this.internalColor=e?C(e):null}componentWillLoad(){this.handleColorChange(this.color)}render(){const e=!this.internalColor;return r("svg",{class:{swatch:!0,"swatch--no-color":e},xmlns:"http://www.w3.org/2000/svg"},this.renderSwatch())}renderSwatch(){const{active:e,el:t,internalColor:o}=this,l=e?"100%":"0",s={height:"100%",rx:l,stroke:"light"===a(t)?"rgba(0, 0, 0, 0.3)":"rgba(255, 255, 255, 0.15)","stroke-width":"2",width:"100%"};if(!o)return r(n,null,r("clipPath",{id:"shape"},r("rect",{height:"100%",rx:l,width:"100%"})),r("rect",{"clip-path":`inset(0 round ${l})`,rx:l,...s}),r("line",{"clip-path":"url(#shape)","stroke-width":"3",x1:"100%",x2:"0",y1:"0",y2:"100%"}));const i=o.alpha(),c=N(o),h=N(o,i<1);return r(n,null,r("title",null,h),r("defs",null,r("pattern",{height:8,id:"checker",patternUnits:"userSpaceOnUse",width:8,x:"0",y:"0"},r("rect",{class:ne,height:4,width:4,x:"0",y:"0"}),r("rect",{class:ne,height:4,width:4,x:4,y:4}))),r("rect",{fill:"url(#checker)",height:"100%",rx:l,width:"100%"}),r("rect",{fill:c,style:{"clip-path":i<1?"polygon(100% 0, 0 0, 0 100%)":`inset(0 round ${l})`},...s}),i<1?r("rect",{fill:h,key:"opacity-fill",style:{"clip-path":"polygon(100% 0, 100% 100%, 0 100%)"},...s}):null)}get el(){return this}static get watchers(){return{color:["handleColorChange"]}}static get style(){return":host{position:relative;display:inline-flex}:host([scale=s]){block-size:1.25rem;inline-size:1.25rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem}.swatch{overflow:hidden;block-size:inherit;inline-size:inherit}.swatch rect{transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.swatch--no-color rect{fill:var(--calcite-color-foreground-1)}.swatch--no-color line{stroke:var(--calcite-color-status-danger)}.checker{fill:#cacaca}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-color-picker-swatch",{active:[516],color:[1],scale:[513]},void 0,{color:["handleColorChange"]}]);function oe(){"undefined"!=typeof customElements&&["calcite-color-picker-swatch"].forEach((e=>{"calcite-color-picker-swatch"===e&&(customElements.get(e)||customElements.define(e,ae))}))}oe();export{ae as C,q as a,z as b,C as c,oe as d,A as e,X as f,ee as g,N as h,I as i,R as j,Z as k,re as l,P as m,L as n,F as o,V as p,B as r,te as t};