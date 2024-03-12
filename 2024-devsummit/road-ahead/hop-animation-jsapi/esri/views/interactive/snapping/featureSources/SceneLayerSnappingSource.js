// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/arrayUtils ../../../../core/promiseUtils ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/Logger ../../../../core/accessorSupport/decorators/subclass ./I3SSnappingSource".split(" "),function(c,e,h,k,l,f,p,q,m,g){c.SceneLayerSnappingSource=class extends h{get updating(){return this._i3sSources.some(a=>a.updating)}constructor(a){super(a);this.availability=1;this._i3sSources=
[]}destroy(){this._i3sSources.forEach(a=>a.destroy());this._i3sSources.length=0}initialize(){const {view:a}=this,b=this.layerSource.layer;this._i3sSources="building-scene"===b.type?this._getBuildingSceneI3SSources(a,b):[this._getSceneLayerI3SSource(a,b)]}async fetchCandidates(a,b){const d=await Promise.all(this._i3sSources.map(n=>n.fetchCandidates(a,b)));l.throwIfAborted(b);return d.flat()}refresh(){this._i3sSources.forEach(a=>a.refresh())}_getBuildingSceneI3SSources(a,b){return b.allSublayers.toArray().map(d=>
"building-component"===d.type?new g.I3SSnappingSource({getLayerView:async()=>(await a.whenLayerView(b)).whenSublayerView(d),view:a}):null).filter(k.isSome)}_getSceneLayerI3SSource(a,b){return new g.I3SSnappingSource({getLayerView:async()=>{const d=await a.whenLayerView(b);return"scene-layer-graphics-3d"===d.type?void 0:d},view:a})}};e.__decorate([f.property({constructOnly:!0})],c.SceneLayerSnappingSource.prototype,"layerSource",void 0);e.__decorate([f.property({constructOnly:!0})],c.SceneLayerSnappingSource.prototype,
"view",void 0);e.__decorate([f.property({readOnly:!0})],c.SceneLayerSnappingSource.prototype,"updating",null);e.__decorate([f.property({readOnly:!0})],c.SceneLayerSnappingSource.prototype,"availability",void 0);c.SceneLayerSnappingSource=e.__decorate([m.subclass("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")],c.SceneLayerSnappingSource);Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});