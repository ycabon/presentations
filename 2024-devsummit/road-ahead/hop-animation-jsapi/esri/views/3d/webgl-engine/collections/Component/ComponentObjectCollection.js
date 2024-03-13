// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/has ../../../../../core/Logger ../../../../../core/PooledArray ../../../../../core/typedArrayUtil ../../../../../chunks/vec32 ../../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../../geometry/support/aaBoundingBox ../../../../../geometry/support/Indices ../../../../../chunks/vec3 ../../../../../chunks/vec33 ../../../../ViewingMode ../../../layers/support/symbolColorUtils ../../../support/orientedBoundingBox ../../../support/buffer/glUtil ../../../support/buffer/InterleavedLayout ./ComponentData ./ComponentObject ./IntersectionGeometry ./Renderable ./RenderGeometry ./RenderSubmitSystem ./SourceGeometry ./UniformComponentParameters ./Material/ComponentMaterial ./Material/ComponentTechnique ./Material/shader/ComponentData.glsl ../../lib/ComponentUtils ../../lib/Util ../../lib/VertexAttribute ../../lib/verticalOffsetUtils ../../lib/edgeRendering/bufferLayouts ../../lib/edgeRendering/edgeProcessing ../../lib/TextureBackedBuffer/BufferManager ../../../../webgl/BufferObject ../../../../webgl/enums ../../../../webgl/VertexArrayObject".split(" "),
function(B,K,L,C,M,N,O,P,Q,R,S,D,E,T,F,U,V,W,X,Y,Z,aa,ba,ca,r,da,ea,G,fa,ha,H,ia,ja,ka,z,y,la){function A(a,b){return a===b?r.ComponentParameterSummary.All:0===a?r.ComponentParameterSummary.None:r.ComponentParameterSummary.Some}const I=()=>L.getLogger("esri.views.3d.webgl-engine.collections.Component.ComponentObjectCollection");class ma{constructor(a,b){this._renderManager=a;this._viewingMode=b;this._elevationRangeCacheMax=this._elevationRangeCacheMin=this._elevationRangeCacheVerticalOffset=NaN;this._visible=
new C;this._hidden=new C;this._renderSubmit=new aa.RenderSubmitSystem(this);this._renderManager.register(this._renderSubmit);this._hasObjectAndLayerId=K("enable-feature:objectAndLayerId-rendering");this._componentBufferManager=new ka.BufferManager(a.rctx,2+(this._hasObjectAndLayerId?1:0))}destroy(){fa.assert(0===this._hidden.length&&0===this._visible.length,"ObjectCollection should be empty upon disposal");this._componentBufferManager.destroy();this._visible.forAll(a=>a.destroy());this._hidden.forAll(a=>
a.destroy());this._visible.clear();this._hidden.clear()}createObject(a){var b=a.geometry;const c=new V(this._componentBufferManager,Q.compactIndices(b.componentOffsets)),d=this._createRenderable(a,c);b=new X(this._viewingMode,b.positionData,c);a=new W.ComponentObject(a.transform,a.toMapSpace,a.obb.clone(),c,d,b);(a.visible?this._visible:this._hidden).push(a);return a}destroyObject(a){(a.visible?this._visible:this._hidden).removeUnordered(a);a.destroy();this._notifyDirty()}setObjectVisibility(a,b){b!==
a.visible&&(b?(this._hidden.removeUnordered(a),this._visible.push(a)):(this._visible.removeUnordered(a),this._hidden.push(a)),a.visible=b,this._notifyDirty())}preSubmit(a){const b=a.camera.eye;this.visibleObjects.forAll(c=>c.renderable.meta.cameraDepthSquared=N.squaredDistance(b,c.obb.center))}getMaterial(a){return a.renderable.material}updateMaterial(a,b){a=a.renderable.material;b(a);a.dirty&&this._notifyDirty()}setAllComponentVisibilities(a,b){a.components.visibility.reset(b);a.components.visibilityDirty();
this._notifyDirty()}forEachVisibleComponent(a,b){return a.components.visibility.forEachComponent(b)}getComponentCount(a){const b=a.components.visibility.componentCount;return{visible:b,invisible:a.components.count-b}}setComponentData(a,b){const c=a.renderable.material,d=a.components;var f=d.materialDataBuffer;const k=d.materialDataIndices,g=new ca.UniformComponentParameters;f=f.textureBuffer;const e=new Uint8Array(4),h=new Uint32Array(e.buffer);let n=0,p=0,l=0,m=d.verticalOffsets,t=Infinity,v=-Infinity,
w=!1,u=!1,J=0;for(let q=0;q<d.count;q++){b(q,g);n+=+(1>g.externalColor[3]);p+=+(g.externalColorMixMode===E.ColorMixModeEnum.Replace&&1===g.externalColor[3]);l+=+g.castShadows;E.encodeSymbolColor(g.externalColor,g.externalColorMixMode,e);e[2]=e[2]&254|+g.castShadows;f.setData(k[q],0,e[0],e[1],e[2],e[3]);w||=0<q&&J!==h[0];J=h[0];u||=0!==g.elevationOffset;u&&null==m&&(m=Array(q).fill(0));null!=m&&(m[q]=g.elevationOffset);t=Math.min(t,g.elevationOffset);v=Math.max(v,g.elevationOffset);ea.encodeElevationOffset(g.elevationOffset,
e);f.setData(k[q],1,e[0],e[1],e[2],e[3]);const x=g.objectAndLayerIdColor;null!=x&&f.setData(k[q],2,x[0],x[1],x[2],x[3]);g.pickable!==G.getVisibility(d.pickability,q)&&(d.pickability=G.updateVisibilityWithCount(d.pickability,d.count,q,g.pickable))}d.verticalOffsets=u?m:null;a.offsetObb=u?T.computeOffsetObb(a.obb,t,v,this._viewingMode,a.offsetObb??a.obb.clone()):null;w||u||this._hasObjectAndLayerId?(c.componentParameters=new r.ComponentParametersVarying,c.componentParameters.castShadows=A(l,d.count),
c.componentParameters.transparent=A(n,d.count),c.componentParameters.opaqueOverride=A(p,d.count),c.componentParameters.texture=f,f.updateTexture()):(c.componentParameters=new r.ComponentParametersUniform,c.componentParameters.castShadows=g.castShadows?r.ComponentParameterSummary.All:r.ComponentParameterSummary.None,c.componentParameters.externalColor=g.externalColor,c.componentParameters.externalColorMixMode=g.externalColorMixMode);this._elevationRangeCacheVerticalOffset=NaN;this._notifyDirty()}getComponentAabb(a,
b,c,d=!1){a.intersectionGeometry.getComponentAabb(b,c);const f=a.components.verticalOffsets;if(d||null==f)return c;b=f[b];if(this._viewingMode===D.ViewingMode.Local||0===b)return c[2]+=b,c[5]+=b,c;b=H.getVerticalOffsetI3S(b);b.localOrigin=a.transform.position;return b.applyToAabb(c)}getComponentObb(a){return a.obb}getObjectTransform(a){return a.transform}getComponentPositions(a,b,c){return a.intersectionGeometry.getComponentPositions(b,c)}expandRangeWithComponentObjectElevationRange(a,b,c,d){Number.isNaN(this._elevationRangeCacheVerticalOffset)||
this._elevationRangeCacheVerticalOffset!==b||d.expandElevationRangeValues(this._elevationRangeCacheMin,this._elevationRangeCacheMax);var f=a.components;const k=f.count;f=f.verticalOffsets;const g=this._viewingMode===D.ViewingMode.Local,e=a.intersectionGeometry.getComponentAabbs(),h=na;let n=Infinity,p=-Infinity;for(let t=0;t<k;t++){var l=6*t,m=f?.[t]??0;let v=Infinity,w=-Infinity;if(g)v=e[l+2]+m+b,w=e[l+5]+m+b;else{h[0]=e[l];h[1]=e[l+1];h[2]=e[l+2];h[3]=e[l+3];h[4]=e[l+4];h[5]=e[l+5];0!==m&&(l=H.getVerticalOffsetI3S(m),
l.localOrigin=a.transform.position,l.applyToAabb(h));l=Math.max(Math.abs(h[3]),Math.abs(h[0]));m=Math.max(Math.abs(h[4]),Math.abs(h[1]));const u=b+h[5]+c;d.expandElevationRangeValues(b+h[2],Math.sqrt(l*l+m*m+u*u)-c)}d.expandElevationRangeValues(v,w);n=Math.min(n,v);p=Math.max(p,w)}this._elevationRangeCacheVerticalOffset=b;this._elevationRangeCacheMin=n;this._elevationRangeCacheMax=p}intersect(a,b,c,d,f,k,g){const {transform:e}=a,{position:h}=e;null!=f&&(f.localOrigin=h);return a.intersectionGeometry.intersect(b,
c,d,f,a.components.verticalOffsets,k,e,g??!1)}addEdges(a,b,c,d){const {indices:f,positions:k}=a.intersectionGeometry;return b.addComponentObject(a,k,f,a.components.offsets,c,d)}async extractEdgeInformation(a,b,c){var d=a.components.visibility;if(d.allInvisible())return{buffer:ja.extractComponentsEdgeLocationsLayout.createBuffer(0),origin:[0,0,0]};const {indices:f,positions:k}=a.intersectionGeometry,g=a.components.offsets,e=ia.EdgeInputBufferLayout.createBuffer(k.length/3);S.copy(e.position.typedBuffer,
k,e.position.typedBufferStride,3);R.transformMat3View(e.position,e.position,a.transform.rotationScale);this._setComponentIndices(e.componentIndex,f,g);d=this._computeVisibilityIndices(f,d,g,e.count);a=O.clone(a.transform.position);b=await b.extractComponentsEdgeLocations({indices:d,indicesLength:d.length,skipDeduplicate:!0,data:e,writerSettings:{reducedPrecision:!1,variants:0}},c);return{origin:a,buffer:b}}_setComponentIndices(a,b,c){let d=0;for(let k=0;k<c.length-1;k++){var f=c[k];const g=c[k+1];
for(;f<g;f++)a.set(b?b[f]:f,d);d++}}_computeVisibilityIndices(a,b,c,d){if(a&&b.allVisible())return a;let f=0;b.forEachComponentRange((e,h)=>{f+=c[h]-c[e];return!0});const k=M.isArray(a)?Array(f):2===a?.BYTES_PER_ELEMENT||65536>=d?new Uint16Array(f):new Uint32Array(f);let g=0;b.forEachComponentRange((e,h)=>{e=c[e];for(h=c[h];e<h;e++)k[g++]=a?a[e]:e;return!0});return k}addComponentHighlight(a,b){a=a.components;null==a.highlightCounts&&(a.highlightCounts=new Uint32Array(a.count+1));0===a.highlightCounts[b]++&&
(a.highlightsDirty(),this._notifyDirty());a.highlightCounts[a.count]++}removeComponentHighlight(a,b){a=a.components;if(null==a.highlightCounts)I().warn("Removing non-existing highlight.");else{var c=a.highlightCounts[b],d=a.highlightCounts[a.count];0===c?I().warn("Removing non-existing highlight."):1<c?(a.highlightCounts[b]=c-1,a.highlightCounts[a.count]=d-1):(a.highlightCounts[b]=0,a.highlightsDirty(),this._notifyDirty(),1===d?a.highlightCounts=null:a.highlightCounts[a.count]=d-1)}}clearHighlights(a){a=
a.components;null!=a.highlightCounts&&(a.highlightCounts=null,a.highlightsDirty(),this._notifyDirty())}getObjectGPUMemoryUsage(a){return a.renderable.meta.gpuMemoryEstimate}get visibleObjects(){return this._visible}_createRenderable(a,b){var c=this._renderManager.rctx;const d=a.geometry;var f=d.vertices.layoutParameters;const k=z.BufferObject.createVertex(c,y.Usage.STATIC_DRAW,d.vertices.data),g=d.indices?z.BufferObject.createIndex(c,y.Usage.STATIC_DRAW,d.indices):null,e=F.glLayout(ba.createVertexBufferLayout(f)),
h=new Uint16Array(d.vertices.count);for(let p=0;p<b.count;p++){var n=b.offsets[p];const l=b.offsets[p+1],m=b.materialDataIndices[p];if(null!=d.indices)for(;n<l;n++)h[d.indices[n]]=m;else for(;n<l;n++)h[n]=m}b=z.BufferObject.createVertex(c,y.Usage.STATIC_DRAW,h.buffer);a=new r.ComponentMaterial(a.transform,a.toMapSpace);c=new la.VertexArrayObject(c,da.attributeLocations,{data:e,componentIndices:oa},{data:k,componentIndices:b},g);f=new Z.RenderGeometry(c,y.PrimitiveType.TRIANGLES,f,null!=g);return new Y.Renderable(a,
f,{cameraDepthSquared:.5,gpuMemoryEstimate:k.usedMemory+b.usedMemory+(null!=g?g.usedMemory:0)})}_notifyDirty(){this._renderManager.notifyDirty()}}const oa=F.glLayout(U.newLayout().u16(ha.VertexAttribute.COMPONENTINDEX)),na=P.create();B.ComponentObjectCollection=ma;Object.defineProperty(B,Symbol.toStringTag,{value:"Module"})});