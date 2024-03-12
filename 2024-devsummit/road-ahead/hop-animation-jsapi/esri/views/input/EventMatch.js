// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){class d{constructor(a,b=[]){this.eventType=a;this.keyModifiers=b}matches(a){if(a.type!==this.eventType)return!1;if(0===this.keyModifiers.length)return!0;a=a.modifiers;for(const b of this.keyModifiers)if(!a.has(b))return!1;return!0}}c.EventMatch=d;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});