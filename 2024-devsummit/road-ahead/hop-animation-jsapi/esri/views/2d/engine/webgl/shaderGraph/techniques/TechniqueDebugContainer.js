// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../Container","../../enums","../../FeatureDisplayList","./TestDisplayObject"],function(c,d,e,f,g){class h extends d.Container{constructor(b,a){super();this.store=b;this.meshData=a}doRender(b){const a=g.TestDisplayObject.fromMeshData(this.meshData,this._stage?.bufferPool),k=f.DisplayList.fromDisplayEntities(a.displayObjects,a,this.store,e.FeatureBatchingStrategy.BATCHING);for(const l of k.infos())l.render(b);a.destroy()}}c.TechniqueDebugContainer=h;Object.defineProperty(c,
Symbol.toStringTag,{value:"Module"})});