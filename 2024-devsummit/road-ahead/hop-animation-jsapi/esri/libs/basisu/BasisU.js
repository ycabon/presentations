// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["require","exports","../../assets"],function(e,d,f){let c;d.getBasisTranscoder=function(){if(null==c){const g=a=>f.getAssetUrl(`esri/libs/basisu/${a}`);c=(new Promise((a,b)=>e(["../../chunks/basis_transcoder"],a,b))).then(a=>a.basis_transcoder).then(({default:a})=>a({locateFile:g}).then(b=>{b.initializeBasis();delete b.then;return b}))}return c};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});