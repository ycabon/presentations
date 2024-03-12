/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import s from"../core/Collection.js";import{c as r}from"../core/Accessor.js";import{clone as t}from"../core/lang.js";import{L as e}from"../chunks/Logger.js";import{on as i,sync as m}from"../core/reactiveUtils.js";import{property as l}from"../core/accessorSupport/decorators/property.js";import{e as a}from"../chunks/enumeration.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import n from"./ExtrudeSymbol3DLayer.js";import y from"./FillSymbol3DLayer.js";import c from"./IconSymbol3DLayer.js";import j from"./LineSymbol3DLayer.js";import u from"./ObjectSymbol3DLayer.js";import b from"./Symbol3D.js";import h from"./TextSymbol3DLayer.js";import k from"./WaterSymbol3DLayer.js";import"../core/Evented.js";import"../chunks/handleUtils.js";import"../core/Handles.js";import"../config.js";import"../chunks/maybe.js";import"../chunks/ensureType.js";import"../chunks/utils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/asyncUtils.js";import"../chunks/jsonMap.js";import"./Symbol3DLayer.js";import"../core/JSONSupport.js";import"../chunks/writer.js";import"../chunks/utils4.js";import"./edges/Edges3D.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"./edges/SketchEdges3D.js";import"./edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"./patterns/LineStylePattern3D.js";import"./patterns/StylePattern3D.js";import"../chunks/utils5.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/persistableUrlUtils.js";import"./LineStyleMarker3D.js";import"../core/Clonable.js";import"../chunks/lineMarkers.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../chunks/locale.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"./PathSymbol3DLayer.js";import"./Symbol.js";import"./support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"./Font.js";var d;const L=s.ofType({base:null,key:"type",typeMap:{extrude:n,fill:y,icon:c,line:j,object:u,text:h,water:k}});let S=d=class extends b{constructor(o){super(o),this.symbolLayers=new L,this.type="polygon-3d"}initialize(){const o=o=>{"line"===o.type&&r(e.getLogger(this),"LineSymbol3DLayer can not be used as a SymbolLayer with a PolygonSymbol3D symbol anymore.",{replacement:"Use FillSymbol3DLayer.outline instead.",version:"4.28"}),"text"===o.type&&r(e.getLogger(this),"TextSymbol3DLayer can not be used as a SymbolLayer with a PolygonSymbol3D symbol anymore.",{replacement:"Use Labels instead.",version:"4.28"})};for(const s of this.symbolLayers)o(s);this.addHandles(i((()=>this.symbolLayers),"after-add",(({item:s})=>o(s)),m))}clone(){return new d({styleOrigin:t(this.styleOrigin),symbolLayers:t(this.symbolLayers),thumbnail:t(this.thumbnail)})}static fromJSON(o){const s=new d;if(s.read(o),2===s.symbolLayers.length&&"fill"===s.symbolLayers.at(0).type&&"line"===s.symbolLayers.at(1).type){const r=s.symbolLayers.at(0),t=s.symbolLayers.at(1);!t.enabled||o.symbolLayers?.[1]&&!1===o.symbolLayers[1].enable||(r.outline={size:t.size,color:null!=t.material?t.material.color:null}),s.symbolLayers.removeAt(1)}return s}static fromSimpleFillSymbol(o){return new d({symbolLayers:new s([y.fromSimpleFillSymbol(o)])})}};o([l({type:L,json:{write:!0}})],S.prototype,"symbolLayers",void 0),o([a({PolygonSymbol3D:"polygon-3d"},{readOnly:!0})],S.prototype,"type",void 0),S=d=o([p("esri.symbols.PolygonSymbol3D")],S);const g=S;export{g as default};
