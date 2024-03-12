// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./TechniqueInstance","./TechniqueRegistry","./mesh/instanceIdUtils"],function(f,g,b,h){function c(a,e,k){return new g.TechniqueInstance(h.castInstanceId(l++),a,a.meshWriter.name,e,k)}let l=0;const d={geometry:{visualVariableColor:null,visualVariableOpacity:null,visualVariableSizeMinMaxValue:null,visualVariableSizeScaleStops:null,visualVariableSizeStops:null,visualVariableSizeUnitValue:null,visualVariableRotation:null}};class m{constructor(){this.instances={fill:c(b.Techniques.fill,
d,{zoomRange:!0}),marker:c(b.Techniques.marker,d,{zoomRange:!0}),line:c(b.Techniques.line,d,{zoomRange:!0}),text:c(b.Techniques.text,d,{zoomRange:!0,referenceSymbol:!1,clipAngle:!1}),complexFill:c(b.Techniques.complexFill,d,{zoomRange:!0}),texturedLine:c(b.Techniques.texturedLine,d,{zoomRange:!0})};this._instancesById=Object.values(this.instances).reduce((a,e)=>{a.set(e.instanceId,e);return a},new Map)}getInstance(a){return this._instancesById.get(a)}}f.GraphicInstanceStore=m;Object.defineProperty(f,
Symbol.toStringTag,{value:"Module"})});