// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../core/Version"],function(a,b){class c extends b.Version{constructor(d,e){super(d,e,"webscene")}get supportsGround(){return this.since(1,8)}get supportsVisibleElevationLayersInSlides(){return this.lessThan(1,8)}}a.Version=c;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});