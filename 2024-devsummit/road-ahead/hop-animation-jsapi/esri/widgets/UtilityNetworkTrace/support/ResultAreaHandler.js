// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../Graphic","../../../layers/GraphicsLayer","../../../symbols/SimpleFillSymbol","./GeometryHandler"],function(k,p,q,m,r){function f(a){return"graphics"===a.type}const d=`utility-network-trace-result-area-${Date.now()}`;class t{constructor(){this.traceInformation={};this._geometryHandler=new r.GeometryHandler}addResultAreaToMap(a,b){(b=this.createGraphicLayer(b))&&f(b)&&b.add(a)}changeResultAreaColor(a,b,c){(a=this._findGraphicsByTraceId(a,c))&&a.forEach(e=>{const l=new m({color:b.color,
style:"solid",outline:{color:b.color,width:1}});e.symbol=l})}createBuffer(a,b,c,e){return this._geometryHandler.createBuffer(a,b,c,e)}createConvexHull(a,b,c){a=this._geometryHandler.createConvexHull(a);return 0<b&&a?this.createBuffer(a,[b],c,!1):a}createResultAreaGraphic(a,b,c,e,l,h){h=new m({color:h.color,style:"solid",outline:{color:h.color,width:1}});const n=[];for(const g in b)n.push({fieldName:g,label:"areaStatistic"===g?e.attributeStrings[g]+" ("+l.units[c]?.abbr+")":e.attributeStrings[g],value:b[g]});
return new p({geometry:a,symbol:h,attributes:b,popupTemplate:{title:b.traceName,content:[{type:"fields",fieldInfos:n}]}})}removeResultArea(a,b){const c=b.findLayerById(d);return c&&f(c)?((a=this._findGraphicsByTraceId(a,b))&&c.removeMany(a),a):null}removeAllResultAreaGraphics(a){a&&(a=a.findLayerById(d))&&f(a)&&a.removeAll()}createGraphicLayer(a,b){const c=a.findLayerById(d);if(c&&f(c))return c;b=new q({title:b??d,listMode:"hide",id:d});a.add(b);return b}_findGraphicsByTraceId(a,b){return(b=b.findLayerById(d))&&
f(b)&&(b=b.graphics.filter(c=>c.attributes.traceId===a),0<b.length)?b.toArray():null}}k.ResultAreaHandler=t;k.resultAreaGraphicLayer=d;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});