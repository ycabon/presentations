// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../core/mathUtils","./globalCss","./widgetUtils","./jsxFactory"],function(b,d,e,f,g){b.Heading=function({level:a,class:c,...h},k){a=d.clamp(Math.ceil(a),1,6);return g.tsx(`h${a}`,{...h,"aria-level":String(a),class:f.classes(e.globalCss.heading,c),role:"heading"},k)};b.incrementHeadingLevel=function(a,c=1){return d.clamp(Math.ceil(a+c),1,6)};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});