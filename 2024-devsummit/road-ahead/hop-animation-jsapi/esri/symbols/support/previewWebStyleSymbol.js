// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../request","../../core/screenUtils","./previewUtils","./utils"],function(g,l,h,m,n){g.previewWebStyleSymbol=function(f,p,b){const k=f.thumbnail&&f.thumbnail.url;return k?l(k,{responseType:"image"}).then(a=>{a=a.data;var e=!/\\.svg$/i.test(a.src)&&b&&b.disableUpsampling,d=Math.max(a.width,a.height),c=null!=b?.maxSize?h.pt2px(b.maxSize):m.SymbolSizeDefaults.maxSize;e&&(c=Math.min(d,c));e="number"===typeof b?.size?b?.size:null;c=Math.min(c,null!=e?h.pt2px(e):d);c!==d&&(d=0!==a.width&&
0!==a.height?a.width/a.height:1,1<=d?(a.width=c,a.height=c/d):(a.width=c*d,a.height=c));return b?.node?(b.node.appendChild(a),b.node):a}):n.fetchWebStyleSymbol(f).then(a=>a?p(a,b):null)};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});