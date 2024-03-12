// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./Util"],function(b,d){class e{constructor(a,c,f=c){this.internalFormat=a;this.width=c;this.height=f;this.multisampled=!1;this.samples=1}}b.RenderbufferDescriptor=e;b.estimateMemory=function(a){return 0>=a.width||0>=a.height||null==a.internalFormat?0:a.width*a.height*d.getBytesPerElementFormat(a.internalFormat)};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});