// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/handleUtils","../../../../support/elevationInfoUtils"],function(d,f,g){d.canMoveZ=function(a,c=g.getGraphicEffectiveElevationInfo(a)){return"on-the-ground"!==c.mode&&null!=a.geometry&&a.geometry.hasZ?!0:!1};d.disableDisplayOnGrab=function(a,c){let b=null;const h=a.events.on("grab-changed",e=>{null!=b&&(b.remove(),b=null);"start"===e.action&&(b=a.disableDisplay());c&&c(e)});return f.makeHandle(()=>{b?.remove();h.remove()})};Object.defineProperty(d,Symbol.toStringTag,
{value:"Module"})});