// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./ManagedFBObject"],function(a,b){class c extends b.ManagedFBObject{constructor(d,e,f){super(d,f);this.attachment=e;this.name=""}dispose(){this.attachment.dispose()}get usedMemory(){return this.attachment.usedMemory}}a.ManagedFBOAttachment=c;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});