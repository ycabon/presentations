// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./GPOptions","./utils","../support/GPMessage"],function(b,e,c,f){b.execute=async function(g,h,a,k){a=e.from(a||{});return c.constructRequest(g,"execute",a,h??{},k).then(d=>{const l=d.data.messages||[];return{results:(d.data.results||[]).map(c.decode),messages:l.map(m=>f.fromJSON(m))}})};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});