// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./string","../intl/locale"],function(m,u,x){function q(a=x.getLocale()){a=a.toLowerCase();let c=a in r;if(!c){const f=a.split("-");1<f.length&&f[0]in r&&(a=f[0],c=!0);c||(a="en")}const [g,b,d="#,##0.###"]=r[a];return{decimal:g,group:b,pattern:d}}function t(a){a=a||{};var c=q(a.locale);const g=a.pattern||c.pattern,b=c.group,d=c.decimal;let f=1;if(g.includes("%"))f/=100;else if(g.includes("\u2030"))f/=1E3;else if(g.includes("\u00a4"))throw Error("currency notation not supported");
c=g.split(";");1===c.length&&c.push("-"+c[0]);return{regexp:n(c,h=>{h="(?:"+u.escapeRegExpString(h,".")+")";return h.replace(v,e=>{const k={signed:!1,separator:a.strict?b:[b,""],fractional:a.fractional,decimal:d,exponent:!1};e=e.split(".");let l=a.places;1===e.length&&1!==f&&(e[1]="###");1===e.length||0===l?k.fractional=!1:(void 0===l&&(l=a.pattern?e[1].lastIndexOf("0")+1:Infinity),l&&null==a.fractional&&(k.fractional=!0),!a.places&&+l<e[1].length&&(l+=","+e[1].length),k.places=l);e=e[0].split(",");
1<e.length&&(k.groupSize=e.pop().length,1<e.length&&(k.groupSize2=e.pop().length));return"("+y(k)+")"})},!0).replaceAll(/[\xa0 ]/g,"[\\s\\xa0]"),group:b,decimal:d,factor:f}}function y(a){a=a||{};"places"in a||(a.places=Infinity);"string"!==typeof a.decimal&&(a.decimal=".");"fractional"in a&&!String(a.places).startsWith("0")||(a.fractional=[!0,!1]);"exponent"in a||(a.exponent=[!0,!1]);"eSigned"in a||(a.eSigned=[!0,!1]);var c=w(a);const g=n(a.fractional,d=>{let f="";d&&0!==a.places&&(f="\\"+a.decimal,
f=Infinity===a.places?"(?:"+f+"\\d+)?":f+("\\d{"+a.places+"}"));return f},!0),b=n(a.exponent,d=>d?"([eE]"+w({signed:a.eSigned})+")":"");c+=g;g&&(c="(?:(?:"+c+")|(?:"+g+"))");return c+b}function w(a){a=a||{};"signed"in a||(a.signed=[!0,!1]);"separator"in a?"groupSize"in a||(a.groupSize=3):a.separator="";const c=n(a.signed,b=>b?"[-+]":"",!0),g=n(a.separator,b=>{if(!b)return"(?:\\d+)";b=u.escapeRegExpString(b);" "===b?b="\\s":"\u00a0"===b&&(b="\\s\\xa0");const d=a.groupSize,f=a.groupSize2;return f?(b=
"(?:0|[1-9]\\d{0,"+(f-1)+"}(?:["+b+"]\\d{"+f+"})*["+b+"]\\d{"+d+"})",0<d-f?"(?:"+b+"|(?:0|[1-9]\\d{0,"+(d-1)+"}))":b):"(?:0|[1-9]\\d{0,"+(d-1)+"}(?:["+b+"]\\d{"+d+"})*)"},!0);return c+g}const r={ar:[".",","],bg:[",","\u00a0"],bs:[",","."],ca:[",","."],cs:[",","\u00a0"],da:[",","."],de:[",","."],"de-ch":[".","\u2019"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[",","\u00a0"],fi:[",","\u00a0"],fr:[",","\u202f"],"fr-ch":[",","\u202f"],he:[".",","],hi:[".",",","#,##,##0.###"],
hr:[",","."],hu:[",","\u00a0"],id:[",","."],it:[",","."],"it-ch":[".","\u2019"],ja:[".",","],ko:[".",","],lt:[",","\u00a0"],lv:[",","\u00a0"],mk:[",","."],nb:[",","\u00a0"],nl:[",","."],pl:[",","\u00a0"],pt:[",","."],"pt-pt":[",","\u00a0"],ro:[",","."],ru:[",","\u00a0"],sk:[",","\u00a0"],sl:[",","."],sr:[",","."],sv:[",","\u00a0"],th:[".",","],tr:[",","."],uk:[",","\u00a0"],vi:[",","."],zh:[".",","]},v=/[#0,]*[#0](?:\.0*#*)?/,n=(a,c,g)=>{if(!(a instanceof Array))return c(a);const b=[];for(let d=0;d<
a.length;d++)b.push(c(a[d]));a=b.join("|");return"("+(g?"?:":"")+a+")"};m._parseInfo=t;m.format=function(a,c){c={...c};var g=q(c.locale);c.customs=g;g=c.pattern||g.pattern;if(isNaN(a)||Infinity===Math.abs(a))return null;var b=a;var d=c||{};var f=d.customs.group,h=d.customs.decimal;g=g.split(";");a=g[0];c=g[0>b?1:0]||"-"+a;if(c.includes("%"))b*=100;else if(c.includes("\u2030"))b*=1E3;else{if(c.includes("\u00a4"))throw Error("currency notation not supported");if(c.includes("E"))throw Error("exponential notation not supported");
}g=v;var e=a.match(g);if(!e)throw Error("unable to find a number expression in pattern: "+c);!1===d.fractional&&(d.places=0);a=c.replace;e=e[0];d=d={decimal:h,group:f,places:d.places,round:d.round};!0===d.places&&(d.places=0);Infinity===d.places&&(d.places=6);h=e.split(".");var k="string"===typeof d.places&&d.places.indexOf(",");e=d.places;k?e=d.places.substring(k+1):0<=+e||(e=(h[1]||[]).length);0>d.round||(b=Number(b.toFixed(Number(e))));f=String(Math.abs(b)).split(".");b=f[1]||"";h[1]||d.places?
(k&&(d.places=d.places.substring(0,k)),k=void 0!==d.places?d.places:h[1]&&h[1].lastIndexOf("0")+1,+k>b.length&&(f[1]=b.padEnd(Number(k),"0")),+e<b.length&&(f[1]=b.substr(0,Number(e)))):f[1]&&f.pop();b=h[0].replace(",","");e=b.indexOf("0");-1!==e&&(e=b.length-e,e>f[0].length&&(f[0]=f[0].padStart(e,"0")),b.includes("#")||(f[0]=f[0].substr(f[0].length-e)));b=h[0].lastIndexOf(",");let l;if(-1!==b){var p=h[0].length-b-1;h=h[0].substr(0,b);b=h.lastIndexOf(",");-1!==b&&(l=h.length-b-1)}h=[];for(b=f[0];b;)e=
b.length-p,h.push(0<e?b.substr(e):b),b=0<e?b.slice(0,e):"",l&&(p=l,l=void 0);f[0]=h.reverse().join(d.group||",");p=f.join(d.decimal||".");return a.call(c,g,p)};m.getCustoms=q;m.parse=function(a,c){c=t(c);a=(new RegExp("^"+c.regexp+"$")).exec(a);if(!a)return NaN;let g=a[1];if(!a[1]){if(!a[2])return NaN;g=a[2];c.factor*=-1}g=g.replaceAll(new RegExp("["+c.group+"\\s\\xa0]","g"),"").replace(c.decimal,".");return Number(g)*c.factor};m.regexp=function(a){return t(a).regexp};Object.defineProperty(m,Symbol.toStringTag,
{value:"Module"})});