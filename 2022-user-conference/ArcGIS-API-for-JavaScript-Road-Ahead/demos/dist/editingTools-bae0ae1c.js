import { dU as d, dV as y, cA as c, bG as e, r, bg as b, g as g$1, dW as n, dX as l$1, dY as m, B as e$1, C as d$1, D as n$1 } from './_virtual_index-9b831d4a.js';
import { g } from './SnappingVisualizer2D-66f2b350.js';
import { F, C, N, c as c$1 } from './drawSurfaces-1b1f21fc.js';
import './enums-11126df6.js';
import './settings-6300780a.js';
import './SnappingContext-43cb3fd4.js';
import './PointSnappingHint-f4370fcd.js';
import './quantityUtils-95a87361.js';
import './geometryEngine-54622e44.js';
import './geometryEngineBase-81fd5c9e.js';
import './hydrated-b13feb3b.js';
import './dragEventPipeline-b56dbe77.js';
import './drawUtils-4f83a157.js';
import './quantityFormatUtils-2bdbcd46.js';
import './euclideanAreaMeasurementUtils-66d0703c.js';
import './measurementUtils-77091aae.js';
import './SnappingOperation-11f9e419.js';
import './dehydratedFeatureComparison-dbb61b6e.js';
import './EditGeometryOperations-7433228d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const t=new d({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",effects:[{type:"CIMGeometricEffectDashes",dashTemplate:[3.75,3.75],lineDashEnding:"HalfPattern",controlPointEnding:"NoConstraint"}],enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:1.6,color:[255,255,255,255]},{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:2,color:[0,0,0,255]}]}}}),l=new y({style:"circle",size:6,color:[127,127,127,1],outline:{color:[50,50,50],width:1}}),i=new y({style:"circle",size:6,color:[255,127,0,1],outline:{color:[50,50,50],width:1}});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let E=class extends F{constructor(e$1){super(e$1),this._visualElementGraphics={outline:null,regularVertices:null,activeVertex:null},this.activeFillSymbol=null,this.type="draw-2d",this._visualElementSymbols={outline:c(e$1.activeLineSymbol,t),regularVertices:c(e$1.regularVerticesSymbol,l),activeVertex:c(e$1.activeVertexSymbol,i),fill:e(e$1.activeFillSymbol)};}normalizeCtorArgs(e){const t={...e};return delete t.activeFillSymbol,delete t.activeVertexSymbol,delete t.regularVerticesSymbol,delete t.activeLineSymbol,t}initializeGraphic(e){return r(this._visualElementSymbols.fill)&&(e.symbol=this._visualElementSymbols.fill),null}makeDrawOperation(){const e=this.view;return new C({view:e,manipulators:this.manipulators,geometryType:N(this.geometryType),drawingMode:this.mode,hasZ:this.hasZ,defaultZ:this.defaultZ,snapToSceneEnabled:this.snapToScene,drawSurface:new c$1(e,this.hasZ,this.defaultZ),hasM:!1,snappingManager:this.snappingManager,snappingVisualizer:new g(this.internalGraphicsLayer)})}onActiveVertexChanged(e){if("point"===this.geometryType)return null;const[r$1,s]=e,n$1=new b({x:r$1,y:s,spatialReference:this.view.spatialReference});return r(this._visualElementGraphics.activeVertex)?(this._visualElementGraphics.activeVertex.geometry=n$1,null):(this._visualElementGraphics.activeVertex=new g$1({geometry:n$1,symbol:this._visualElementSymbols.activeVertex,attributes:{displayOrder:2}}),this.internalGraphicsLayer.add(this._visualElementGraphics.activeVertex),this.internalGraphicsLayer.graphics.sort(_),n((()=>{r(this._visualElementGraphics.activeVertex)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.activeVertex),this._visualElementGraphics.activeVertex=l$1(this._visualElementGraphics.activeVertex));})))}onOutlineChanged(e){const r$1=e.clone();if("polyline"===r$1.type){const e=r$1.paths[r$1.paths.length-1];e.splice(0,e.length-2);}return r(this._visualElementGraphics.outline)?(this._visualElementGraphics.outline.geometry=r$1,null):(this._visualElementGraphics.outline=new g$1({geometry:r$1,symbol:this._visualElementSymbols.outline,attributes:{displayOrder:0}}),this.internalGraphicsLayer.add(this._visualElementGraphics.outline),this.internalGraphicsLayer.graphics.sort(_),n((()=>{r(this._visualElementGraphics.outline)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.outline),this._visualElementGraphics.outline=l$1(this._visualElementGraphics.outline));})))}onRegularVerticesChanged(e){const r$1=new m({points:e,spatialReference:this.view.spatialReference});return r(this._visualElementGraphics.regularVertices)?(this._visualElementGraphics.regularVertices.geometry=r$1,null):(this._visualElementGraphics.regularVertices=new g$1({geometry:r$1,symbol:this._visualElementSymbols.regularVertices,attributes:{displayOrder:1}}),this.internalGraphicsLayer.add(this._visualElementGraphics.regularVertices),this.internalGraphicsLayer.graphics.sort(_),n((()=>{r(this._visualElementGraphics.regularVertices)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.regularVertices),this._visualElementGraphics.regularVertices=l$1(this._visualElementGraphics.regularVertices));})))}};function _(e,t){return (e.attributes?.displayOrder??-1/0)-(t.attributes?.displayOrder??-1/0)}e$1([d$1()],E.prototype,"activeFillSymbol",void 0),e$1([d$1({readOnly:!0})],E.prototype,"type",void 0),e$1([d$1({constructOnly:!0,nonNullable:!0})],E.prototype,"view",void 0),E=e$1([n$1("esri.views.2d.interactive.draw.DrawGraphicTool2D")],E);

export { E as DrawGraphicTool2D };