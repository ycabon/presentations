// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../geometry/support/aaBoundingBox ./elevationAlignmentUtils ./featureExpressionInfoUtils ./graphicUtils ../../webgl-engine/lib/basicInterfaces ../../webgl-engine/lib/Object3DStateID".split(" "),function(u,v,p,q,k,w,x,y,z,A){class B{constructor(a,b,c,n){this.graphics3DSymbolLayer=a;this.instanceIndex=b;this.elevationAligner=c;this.elevationContext=
n;this.type="lod-instance";this._highlights=new Set;this.alignedSampledElevation=0;this.needsElevationUpdates=this.isElevationSource=!1}initialize(){}setVisibility(a){const b=this._lodRenderer.instanceData;a!==b.getVisible(this.instanceIndex)&&b.setVisible(this.instanceIndex,a)}destroy(){null!=this.instanceIndex&&(this._lodRenderer.instanceData.removeInstance(this.instanceIndex),this.graphics3DSymbolLayer.notifyDestroyGraphicLayer(this))}alignWithElevation(a,b,c){this.elevationAligner&&(x.setContextFeature(this.elevationContext.featureExpressionInfoContext,
c),c=this.elevationAligner(this,this.elevationContext,a.spatialReference,(n,d)=>w.evaluateElevationInfoAtPoint(n,a,this.elevationContext,b,d),b),null!=c&&(this.alignedSampledElevation=c))}getCenterObjectSpace(a=q.create()){this._lodRenderer.instanceData.getCombinedLocalTransform(this.instanceIndex,g);return p.transformMat4(a,this._lodRenderer.baseBoundingSphere.center,g)}getBoundingBoxObjectSpace(a=k.create()){this._lodRenderer.instanceData.getCombinedLocalTransform(this.instanceIndex,g);const b=
this._lodRenderer.baseBoundingBox;k.empty(a);for(let c=0;8>c;++c)p.set(f,0===(c&1)?b[0]:b[3],0===(c&2)?b[1]:b[4],0===(c&4)?b[2]:b[5]),p.transformMat4(f,f,g),k.expandWithVec3(a,f);return a}computeAttachmentOrigin(a){this._lodRenderer.instanceData.getGlobalTransform(this.instanceIndex,g);a.render.origin[0]+=g[12];a.render.origin[1]+=g[13];a.render.origin[2]+=g[14];a.render.num++}async getProjectedBoundingBox(a,b,c,n,d){d=this.getBoundingBoxObjectSpace(d);var h=C;const r=k.isPoint(d)?1:h.length;this._lodRenderer.instanceData.getGlobalTransform(this.instanceIndex,
g);for(var e=0;e<r;e++){const l=h[e];f[0]=d[l[0]];f[1]=d[l[1]];f[2]=d[l[2]];p.transformMat4(f,f,g);m[3*e]=f[0];m[3*e+1]=f[1];m[3*e+2]=f[2]}if(!a(m,0,r))return null;k.empty(d);a=null;this.calculateRelativeScreenBounds&&(a=this.calculateRelativeScreenBounds());for(h=0;h<3*r;h+=3){for(e=0;3>e;e++)d[e]=Math.min(d[e],m[h+e]),d[e+3]=Math.max(d[e+3],m[h+e]);a&&c.push({location:m.slice(h,h+3),screenSpaceBoundingRect:a})}if(b&&(k.center(d,t),"absolute-height"!==this.elevationContext.mode)){let l;c=y.demResolutionForBoundingBox(d,
b.service.spatialReference,b);try{l=await b.service.queryElevation(t[0],t[1],n,c,"ground")}catch(D){}null!=l&&k.offset(d,0,0,-this.alignedSampledElevation+l)}return d}addObjectState(a,b){a===z.Object3DState.Highlight&&(a=new A.Object3DStateID(a),this._addHighlightId(a),b.addExternal(c=>{this._removeHighlightId(c)},a))}removeObjectState(a){this._highlights.forEach(b=>a.remove(b))}_addHighlightId(a){this._highlights.add(a);this._lodRenderer.instanceData.setHighlight(this.instanceIndex,!0)}_removeHighlightId(a){this._highlights.delete(a);
this._lodRenderer.instanceData.setHighlight(this.instanceIndex,0<this._highlights.size)}get _lodRenderer(){return this.graphics3DSymbolLayer.lodRenderer}}const m=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],f=q.create(),t=q.create(),C=[[0,1,2],[3,1,2],[0,4,2],[3,4,2],[0,1,5],[3,1,5],[0,4,5],[3,4,5]],g=v.create();u.Graphics3DLodInstanceGraphicLayer=B;Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});