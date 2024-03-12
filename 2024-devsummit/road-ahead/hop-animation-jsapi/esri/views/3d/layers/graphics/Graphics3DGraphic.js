// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/arrayUtils ../../../../core/asyncUtils ../../../../core/byteSizeEstimations ../../../../core/ObjectPool ../../../../core/libs/gl-matrix-2/math/vec2 ../../../../core/libs/gl-matrix-2/factories/vec2f64 ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../geometry/Polygon ../../../../geometry/projection/projectBoundingRect ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/aaBoundingRect ../../../../geometry/support/spatialReferenceUtils ../../../../layers/graphics/dehydratedFeatures ../../../../layers/graphics/featureConversionUtils ./enums ./featureExpressionInfoUtils".split(" "),
function(n,q,r,t,u,v,w,x,y,z,A,h,l,B,C,D,f,E){const p=new u(Array,a=>h.set(a,h.zero),null,10,5),F=l.create();class G{get labelLayers(){return this._labelLayers||q.emptyArray}get extent(){return this._extent}get isElevationSource(){return this.layers.some(a=>a?.isElevationSource)}constructor(a,b,d,e,c){this.graphic=a;this.graphics3DSymbol=b;this.layers=d;this._visibleFlags=f.VisibilityFlag.ALL_LABEL;this.deconflictionPriority=0;++b.referenced;this._featureExpressionFeature=c?E.createFeature(c,a,e):
null}initialize(a){this._layer=a;this._forEachSymbolLayerGraphic(b=>{b.initialize(a);b.setVisibility(this.isVisible())})}destroy(){this._forEachSymbolLayerGraphic(a=>a.destroy());this._calloutLayer=null;--this.graphics3DSymbol.referenced;this.graphics3DSymbol=null}get destroyed(){return null==this.layers}clearLabelGraphics(){this._forEachLabelGraphic(a=>a.destroy());this._labelLayers=null}addLabelGraphic(a,b){this._labelLayers||(this._labelLayers=[]);this._labelLayers.push(a);a.initialize(b);a.setVisibility(this.isVisible(f.VisibilityGroup.LABEL))}setCalloutGraphic(a){this._calloutLayer=
a;this._layer&&(a.initialize(this._layer),a.setVisibility(this.isVisible()))}get calloutLayer(){return this._calloutLayer}get isDraped(){let a=!1;this._forEachSymbolLayerGraphic(b=>{"draped"===b.type&&(a=!0)});return a}isVisible(a=f.VisibilityGroup.GRAPHIC,b){b=b?this._visibleFlags|b|f.VisibilityGroup.LABEL*b:this._visibleFlags;return a===f.VisibilityGroup.GRAPHIC?(b&f.VisibilityFlag.ALL_GRAPHIC)===f.VisibilityFlag.ALL_GRAPHIC:(b&f.VisibilityFlag.ALL_LABEL)===f.VisibilityFlag.ALL_LABEL}setVisibilityFlag(a,
b,d){const e=this.isVisible(a);this._visibleFlags=d?this._visibleFlags|a*b:this._visibleFlags&~(a*b);const c=this.isVisible(a);if(e===c)return!1;if(a===f.VisibilityGroup.LABEL)this._forEachLabelGraphic(g=>g.setVisibility(c));else{this._forEachSymbolLayerGraphic(k=>k.setVisibility(c));const g=this.isVisible(f.VisibilityGroup.LABEL);this._forEachLabelGraphic(k=>k.setVisibility(g))}return!0}getVisibilityFlag(a,b){return 0!==(this._visibleFlags&a*b)}computeExtent(a){if(!this._extent){var b=this.graphic.geometry;
if(null==b)return!1;this._extent=l.create();C.computeAABR(b,this._extent);b=b.spatialReference;if(!B.equals(b,a)&&!A.projectBoundingRect(this._extent,b,this._extent,a))return this._extent=null,!1}return!0}getAsOptimizedGeometry(a,b){this._optimizedGeometry||(this._optimizedGeometry=this._convertGraphicToOptimizedGeometry(this.graphic,a,b));return this._optimizedGeometry}_convertGraphicToOptimizedGeometry(a,b,d){a=a.geometry;if("mesh"===a.type||"extent"===a.type)a=z.fromExtent("mesh"===a.type?a.extent:
a);return D.convertFromGeometry(a,b,d)}get usedMemory(){let a=t.estimateAttributesObjectSize(this.graphic.attributes);this._forEachSymbolLayerGraphic(b=>a+=b.graphics3DSymbolLayer.usedMemory);return a}computeAttachmentOrigin(){const a={render:{origin:y.create(),num:0},draped:{origin:w.create(),num:0}};for(const b of this.layers)null!=b&&b.computeAttachmentOrigin(a);1<a.render.num&&x.scale(a.render.origin,a.render.origin,1/a.render.num);1<a.draped.num&&v.scale(a.draped.origin,a.draped.origin,1/a.draped.num);
return a}async getProjectedBoundingBox(a,b,d,e,c){c||={boundingBox:null,requiresDrapedElevation:!1,screenSpaceObjects:[]};c.boundingBox?h.empty(c.boundingBox):c.boundingBox=h.empty();c.requiresDrapedElevation=!1;await r.forEach(this.layers,async g=>{if(null!=g){var k="draped"===g.type?b:a,m=p.acquire();g=await g.getProjectedBoundingBox(k,d,c.screenSpaceObjects,e,m);isFinite(g[2])&&isFinite(g[5])||(c.requiresDrapedElevation=!0);g&&h.expandWithAABB(c.boundingBox,m);p.release(m)}});return h.allFinite(c.boundingBox)||
l.allFinite(h.toRect(c.boundingBox,F))?c:null}needsElevationUpdates(){for(const a of this.layers)if(null!=a&&("object3d"===a.type||"lod-instance"===a.type)&&a.needsElevationUpdates)return!0;return this._labelLayers?.some(a=>a?.needsElevationUpdates??!1)??!1}alignWithElevation(a,b,d){this._forEachRenderedGraphic(e=>{"object3d"!==e.type&&"lod-instance"!==e.type||e.alignWithElevation(a,b,this._featureExpressionFeature,d)})}alignWithAbsoluteElevation(a,b,d){this._forEachRenderedGraphic(e=>{"object3d"===
e.type&&e.alignWithAbsoluteElevation(a,b,d)})}addObjectStateSet(a,b){this._forEachSymbolLayerGraphic(d=>d.addObjectState(a,b))}removeObjectState(a){this._forEachSymbolLayerGraphic(b=>b.removeObjectState(a))}_forEachGraphicList(a,b){a?.forEach(d=>d&&b(d))}_forEachSymbolLayerGraphic(a){this._forEachGraphicList(this.layers,a);this._calloutLayer&&a(this._calloutLayer)}_forEachLabelGraphic(a){this._forEachGraphicList(this._labelLayers,a)}_forEachRenderedGraphic(a){this._forEachSymbolLayerGraphic(a);this._forEachLabelGraphic(a)}get test(){const a=
this;return{addLabelLayer:b=>{a._labelLayers||(a._labelLayers=[]);a._labelLayers.push(b)}}}}n.Graphics3DGraphic=G;Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});