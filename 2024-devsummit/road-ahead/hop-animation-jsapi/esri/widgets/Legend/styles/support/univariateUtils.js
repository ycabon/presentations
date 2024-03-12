// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/screenUtils ../../../../libs/maquette/projection ../../../../libs/maquette/projector ../../../../symbols/support/symbolUtils ../../../support/widgetUtils ../../../support/jsxFactory".split(" "),function(h,k,y,t,u,z,m){function v(a="vertical"){return"vertical"===a?m.tsx("svg",{height:"4",width:"10"},m.tsx("line",{style:"stroke:rgb(200, 200, 200);stroke-width:1",x1:"0",x2:"10",y1:"2",y2:"2"})):m.tsx("svg",{height:"10",width:"10"},m.tsx("line",{style:"stroke:rgb(200, 200, 200);stroke-width:1",
x1:"5",x2:"5",y1:"0",y2:"10"}))}function w(a,b="vertical"){const c=document.createElement("div");c.style.height="20px";c.className=p.univariateAboveAndBelowSymbol;null!=a&&(c.style.opacity=a.toString());x.append(c,v.bind(null,b));return c}function q(a,b,c="vertical",d){a.infos.forEach((e,f)=>{if(d&&2===f)e.preview=w(b,c);else{f=k.pt2px(e.size)+("horizontal"===c?20:10);const g=e.preview,n="div"===g?.tagName.toLowerCase(),l=n?g:document.createElement("div");l.className=p.univariateAboveAndBelowSymbol;
"horizontal"===c?l.style.width=`${f}px`:l.style.height=`${f}px`;!n&&g&&l.appendChild(g);e.preview=l}})}function r(a,b,c,d="vertical"){let e=0;a=a.infos;const f=Math.floor(a.length/2);var g="full"===b||"above"===b?0:f;for(b="full"===b||"below"===b?a.length-1:f;g<=b;g++)if(c&&g===f)e+="horizontal"===d?10:20;else{const n=k.pt2px(a[g].size)+("horizontal"===d?20:10);e+=n}return Math.round(e)}const x=t.createProjector(),p={univariateAboveAndBelowSymbol:"esri-univariate-above-and-below-ramp__symbol",colorRamp:"esri-legend__color-ramp"};
h.getUnivariateAboveAndBelowRampElements=function(a,b,c="vertical"){var d=a.infos;a=d.find(({type:e})=>"size-ramp"===e);d=d.find(({type:e})=>"color-ramp"===e);a&&(a={...a},a.infos=[...a.infos],q(a,b,c,!0));d&&(d={...d},d.infos=[...d.infos]);"horizontal"===c&&(a?.infos.reverse(),d?.infos.reverse());return{sizeRampElement:a,colorRampElement:d}};h.getUnivariateColorRampMargin=function(a,b="classic"){a=a.infos;return"classic"===b?(k.pt2px(a[0].size)+10)/2:(k.pt2px(a[0].size)-k.pt2px(a[a.length-1].size))/
2};h.getUnivariateColorRampPreview=function(a,b){if(!a)return null;a=a.infos.map(c=>c.color);a=u.renderColorRampPreviewHTML("full"===b.type?a:"above"===b.type?a.slice(0,3):a.slice(2,5),{width:b.width,height:b.height,align:b.rampAlignment,effectList:b.effectList,ariaLabel:b.ariaLabel});a.className=p.colorRamp;null!=b.opacity&&(a.style.opacity=b.opacity.toString());return a};h.getUnivariateColorRampSize=function(a,b,c,d="vertical"){const e=r(a,b,c,d);a=a.infos;var f=Math.floor(a.length/2);const g="full"===
b||"above"===b?0:f;f="full"===b||"below"===b?a.length-1:f;c=c?"vertical"===d?20:10:0;d="vertical"===d?10*("full"===b?2:1):20*("full"===b?2:1);return Math.round(e-(k.pt2px("full"===b?a[g].size+a[f].size:"above"===b?a[g].size:a[f].size)/2+c/2+d/2))};h.getUnivariateColorSizeRampElements=function(a,b="vertical"){var c=a.infos;a=c.find(({type:d})=>"size-ramp"===d);c=c.find(({type:d})=>"color-ramp"===d);a&&(a={...a},a.infos=[...a.infos],q(a,null,b,!1));c&&(c={...c},c.infos=[...c.infos]);"horizontal"===
b&&(a?.infos.reverse(),c?.infos.reverse());return{sizeRampElement:a,colorRampElement:c}};h.getUnivariateSizeRampSize=r;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});