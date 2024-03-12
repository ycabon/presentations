// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../enums"],function(b,a){class d{constructor(c){this.registryName=c;this.postProcessingEnabled=!1;this.overrideStencilRef=null;this.drawPhase=a.WGLDrawPhase.MAP|a.WGLDrawPhase.HITTEST|a.WGLDrawPhase.HIGHLIGHT|a.WGLDrawPhase.DEBUG;this.symbologyPlane=a.FeatureSymbologyDrawOrder.FILL}startup(){}shutdown(){}postProcess(c,e){}}b.Technique=d;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});