// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){class c{constructor(a,d){this.key=a;this.free=d;this.incarnation=0;this._refCount=1}retain(){++this._refCount}release(){if(0===this._refCount)return console.log(`Releasing already released FBO attachment in ${Error().stack}`),!0;--this._refCount;return 0===this._refCount?(this.free(),!0):!1}}b.AttachmentType=void 0;(function(a){a[a.FBO=0]="FBO";a[a.DEPTH=1]="DEPTH";a[a.COLOR=2]="COLOR"})(b.AttachmentType||(b.AttachmentType={}));b.ManagedFBObject=c;Object.defineProperty(b,
Symbol.toStringTag,{value:"Module"})});