import { eo as d, ep as y, d8 as i$1, L as e, m as r, bk as w, P as g$1, eq as n, er as u, u as e$1, y as y$1, es as s, z as n$1 } from './_virtual_index-1ea2035a.js';
import { g } from './SnappingVisualizer2D-d3240c9a.js';
import { Z, C, q, a } from './drawSurfaces-232145d5.js';
import './enums-3e26cf0d.js';
import './settings-53bbd435.js';
import './SnappingContext-a1ff8c28.js';
import './PointSnappingHint-71b3a4f1.js';
import './quantityFormatUtils-d7b5c624.js';
import './geometryEngine-d05be472.js';
import './geometryEngineBase-16bf8893.js';
import './hydrated-40740f3e.js';
import './dragEventPipeline-b225d16a.js';
import './drawUtils-716bb6e9.js';
import './automaticLengthMeasurementUtils-ee98e9f2.js';
import './euclideanLengthMeasurementUtils-93ea014d.js';
import './measurementUtils-d2a749ce.js';
import './automaticAreaMeasurementUtils-4f3d1b01.js';
import './euclideanAreaMeasurementUtils-01fe08b0.js';
import './dehydratedFeatureComparison-73cd17db.js';
import './EditGeometryOperations-2f1c7df5.js';
import './SnappingOperation-e299c5a9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const t=new d({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",effects:[{type:"CIMGeometricEffectDashes",dashTemplate:[3.75,3.75],lineDashEnding:"HalfPattern",controlPointEnding:"NoConstraint"}],enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:1.6,color:[255,255,255,255]},{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:2,color:[0,0,0,255]}]}}}),l=new y({style:"circle",size:6,color:[127,127,127,1],outline:{color:[50,50,50],width:1}}),i=new y({style:"circle",size:6,color:[255,127,0,1],outline:{color:[50,50,50],width:1}});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let E=class extends Z{constructor(e$1){super(e$1),this._visualElementGraphics={outline:null,regularVertices:null,activeVertex:null},this.activeFillSymbol=null,this.type="draw-2d",this._visualElementSymbols={outline:i$1(e$1.activeLineSymbol,t),regularVertices:i$1(e$1.regularVerticesSymbol,l),activeVertex:i$1(e$1.activeVertexSymbol,i),fill:e(e$1.activeFillSymbol)};}normalizeCtorArgs(e){const t={...e};return delete t.activeFillSymbol,delete t.activeVertexSymbol,delete t.regularVerticesSymbol,delete t.activeLineSymbol,t}initializeGraphic(e){return r(this._visualElementSymbols.fill)&&(e.symbol=this._visualElementSymbols.fill),null}makeDrawOperation(){const{defaultZ:e,hasZ:t,view:i}=this;return new C({view:i,manipulators:this.manipulators,geometryType:q(this.geometryType),drawingMode:this.mode,hasZ:t,defaultZ:e,snapToSceneEnabled:this.snapToScene,drawSurface:new a(i,t,e),hasM:!1,snappingManager:this.snappingManager,snappingVisualizer:new g(this.internalGraphicsLayer),tooltipOptions:this.tooltipOptions})}onActiveVertexChanged(e){if("point"===this.geometryType)return null;const[r$1,s$1]=e,n$1=new w({x:r$1,y:s$1,spatialReference:this.view.spatialReference});return r(this._visualElementGraphics.activeVertex)?(this._visualElementGraphics.activeVertex.geometry=n$1,null):(this._visualElementGraphics.activeVertex=new g$1({geometry:n$1,symbol:this._visualElementSymbols.activeVertex,attributes:{displayOrder:2}}),this.internalGraphicsLayer.add(this._visualElementGraphics.activeVertex),this.internalGraphicsLayer.graphics.sort(_),n((()=>{r(this._visualElementGraphics.activeVertex)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.activeVertex),this._visualElementGraphics.activeVertex=s(this._visualElementGraphics.activeVertex));})))}onOutlineChanged(e){const r$1=e.clone();if("polyline"===r$1.type){const e=r$1.paths[r$1.paths.length-1];e.splice(0,e.length-2);}return r(this._visualElementGraphics.outline)?(this._visualElementGraphics.outline.geometry=r$1,null):(this._visualElementGraphics.outline=new g$1({geometry:r$1,symbol:this._visualElementSymbols.outline,attributes:{displayOrder:0}}),this.internalGraphicsLayer.add(this._visualElementGraphics.outline),this.internalGraphicsLayer.graphics.sort(_),n((()=>{r(this._visualElementGraphics.outline)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.outline),this._visualElementGraphics.outline=s(this._visualElementGraphics.outline));})))}onRegularVerticesChanged(e){const r$1=new u({points:e,spatialReference:this.view.spatialReference});return r(this._visualElementGraphics.regularVertices)?(this._visualElementGraphics.regularVertices.geometry=r$1,null):(this._visualElementGraphics.regularVertices=new g$1({geometry:r$1,symbol:this._visualElementSymbols.regularVertices,attributes:{displayOrder:1}}),this.internalGraphicsLayer.add(this._visualElementGraphics.regularVertices),this.internalGraphicsLayer.graphics.sort(_),n((()=>{r(this._visualElementGraphics.regularVertices)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.regularVertices),this._visualElementGraphics.regularVertices=s(this._visualElementGraphics.regularVertices));})))}};function _(e,t){return (e.attributes?.displayOrder??-1/0)-(t.attributes?.displayOrder??-1/0)}e$1([y$1()],E.prototype,"activeFillSymbol",void 0),e$1([y$1({readOnly:!0})],E.prototype,"type",void 0),e$1([y$1({constructOnly:!0,nonNullable:!0})],E.prototype,"view",void 0),E=e$1([n$1("esri.views.2d.interactive.draw.DrawGraphicTool2D")],E);

export { E as DrawGraphicTool2D };
