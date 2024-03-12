// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./SingleKey"],function(a,b){class c extends b.SingleKey{constructor(d,e,f){super(e,f);this.view=d}activate(){this.view.goTo({heading:0}).catch(()=>{})}}a.SingleKeyResetHeading=c;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});