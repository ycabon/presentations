// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(a){a.defaultAdvancedProjectorOptions={handleInterceptedEvent:(d,b,e,c)=>{d.scheduleRender();return b.properties[`on${c.type}`].apply(b.properties.bind||e,[c])}};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});