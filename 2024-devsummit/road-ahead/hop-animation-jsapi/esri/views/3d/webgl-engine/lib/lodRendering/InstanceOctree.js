// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../../../chunks/vec32 ../../../../../chunks/sphere ../../../support/mathUtils ../Octree".split(" "),function(e,f,g,c,h,k){class l extends k{constructor(a,d){super(b=>c.wrap(this._instanceData.view.boundingSphere.getVec(b,this._tmpSphere)),{maximumDepth:25});this._instanceData=a;this._boundingSphere=d;this._tmpSphere=c.create();this._tmpMat4=f.create()}addInstance(a){const d=this._instanceData.view.boundingSphere,b=this._instanceData.getCombinedModelTransform(a,
this._tmpMat4);g.transformMat4(c.getCenter(this._tmpSphere),this._boundingSphere.center,b);this._tmpSphere[3]=this._boundingSphere.radius*h.maxScale(b);d.setVec(a,this._tmpSphere);this.add([a])}removeInstance(a){this.remove([a])}}e.InstanceOctree=l;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});