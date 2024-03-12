// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/maybe ../../../../core/PooledArray ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../chunks/vec42 ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/plane ../../../../geometry/support/ray ./Intersector ./PointHighlights ../../webgl-engine/core/shaderLibrary/ShaderOutput ../../webgl-engine/effects/RenderPlugin ../../webgl-engine/lib/DefaultVertexAttributeLocations ../../webgl-engine/lib/Intersector ../../webgl-engine/lib/IntersectorInterfaces ../../webgl-engine/lib/RenderSlot ../../webgl-engine/lib/VertexArrayObject ../../webgl-engine/lib/VertexAttribute ../../../../chunks/PointRenderer.glsl ../../webgl-engine/shaders/PointRendererTechnique ../../webgl-engine/shaders/PointRendererTechniqueConfiguration ../../../webgl/BufferObject ../../../webgl/enums ../../../webgl/VertexElementDescriptor".split(" "),
function(v,V,W,da,ea,xa,ya,za,fa,q,E,ha,m,ia,ja,ka,la,w,ma,na,oa,F,N,pa,X,O,qa,ra,Y,x,Z){function P(a,c,b,d,g){if(b.drawScreenSpace)return b.fixedSize*c*d;g=O.getMaxPointSizeScreenspace(g)*c*d;return b.useFixedSizes?Math.min(b.fixedSize/2,g):0<b.screenMinSize?Math.min(Math.max(b.screenMinSize*c*d,a/2),g):Math.min(a/2,g)}function Q(a,c,b,d,g){return b.drawScreenSpace?0:P(a,c,b,d,g)}function aa(a){return null!=a.component?a.component:-1}function sa(a,c){if(null==a)return a;a=a.filter(b=>b.id!==c);return 0===
a.length?null:a}function ba(a){return null!=a.dist&&null!=a.point&&null!=a.pointId&&null!=a.node}const ta={positions:[new Z.VertexElementDescriptor(X.VertexAttribute.POSITION,3,x.DataType.FLOAT,0,12)],colors:[new Z.VertexElementDescriptor(X.VertexAttribute.COLOR,3,x.DataType.UNSIGNED_BYTE,0,3,!0)]};v.PointRenderer=class extends ma.SyncPrepareRenderPlugin{constructor(a){super(a);this.type=F.IntersectorType.PCL;this.isGround=!1;this._passParameters=new O.PointRendererPassParameters;this._highlights=
new la.PointHighlights({forEachNode:c=>this.forEachNode(c),addHighlight:(c,b,d)=>this._addHighlight(c,b,d),removeHighlight:(c,b)=>this._removeHighlight(c,b)});this.produces=new Map([[N.RenderSlot.OPAQUE_MATERIAL,c=>c!==w.ShaderOutput.LinearDepth&&(c!==w.ShaderOutput.Highlight||!this._highlights.empty)],[N.RenderSlot.OPAQUE_NO_SSAO_DEPTH,c=>c===w.ShaderOutput.LinearDepth]]);this.layerUid="";this._slicePlaneEnabled=!1;this._techniqueConfig=new ra.PointRendererTechniqueConfiguration;this._nodes=new da}initializeRenderContext(a){this._context=
a;a.requestRender()}uninitializeRenderContext(){}intersect(a,c,b,d){const g=E.create(),f=E.create(),H=E.create(),A=E.create(),G=ia.create(),y=a.camera.perScreenPixelRatio/2,I=a.camera.near;q.subtract(f,d,b);const J=1/q.length(f);q.scale(f,f,J);q.negate(H,f);ha.set(G,f[0],f[1],f[2],-q.dot(f,b));const r=new R,t=new R,ca=[],K=m.create(),L=m.create(this._passParameters.clipBox);m.offset(L,-b[0],-b[1],-b[2],L);this._nodes.forAll(e=>{const h=e.splatSize*this._passParameters.scaleFactor;var l=e.obb.minimumDistancePlane(G),
k=e.obb.maximumDistancePlane(G);l-=Q(h,l+I,this._passParameters,y,e.isLeaf);k-=Q(h,k+I,this._passParameters,y,e.isLeaf);l=null!=r.dist&&null!=t.dist&&r.dist<l*J&&t.dist>k*J;if(!(0>k||l)&&(k=P(h,k+I,this._passParameters,y,e.isLeaf),e.obb.intersectRay(b,f,k))){k*=k;e.obb.toAaBoundingBox(K);m.offset(K,-b[0],-b[1],-b[2],K);l=!m.contains(L,K);q.subtract(A,e.origin,b);var ua=e.coordinates.length/3;for(let z=0;z<ua;z++){g[0]=A[0]+e.coordinates[3*z];g[1]=A[1]+e.coordinates[3*z+1];g[2]=A[2]+e.coordinates[3*
z+2];if(l&&!m.containsPoint(L,g))continue;var n=q.dot(g,f),M=q.squaredLength(g)-n*n;if(M>k)continue;var B=n+I;const S=Q(h,B,this._passParameters,y,e.isLeaf);if(0>n-S)continue;B-=S;B=P(h,B,this._passParameters,y,e.isLeaf);if(M>B*B)continue;const C=(n-S)*J;n=u=>{var T=z,D=u.point;null==D&&(D=E.create());D[0]=e.origin[0]+e.coordinates[3*T];D[1]=e.origin[1]+e.coordinates[3*T+1];D[2]=e.origin[2]+e.coordinates[3*T+2];u.point=D;u.dist=C;u.normal=H;u.node=e;u.pointId=z;u.layerUid=this.layerUid;return u};
(null==r.dist||C<r.dist)&&(null==c||c(b,d,C))&&n(r);a.options.store!==F.StoreResults.MIN&&(null==t.dist||C>t.dist)&&(null==c||c(b,d,C))&&n(t);a.options.store!==F.StoreResults.ALL||null!=c&&!c(b,d,C)||(M=new R,ca.push(n(M)))}}});const va=e=>{const {layerUid:h,node:l,pointId:k}=e;return new ka.PclTarget(e.point,h,k,()=>this.createGraphic(l,k,e.point))},U=(e,h)=>{const l=va(h);e.set(this.type,l,h.dist,h.normal)};if(ba(r)){var p=a.results.min;(null==p.dist||r.dist<p.dist)&&U(p,r)}ba(t)&&a.options.store!==
F.StoreResults.MIN&&(p=a.results.max,(null==p.dist||t.dist>p.dist)&&U(p,t));if(a.options.store===F.StoreResults.ALL){p=ja.fromPoints(b,d);for(const e of ca){const h=oa.newIntersectorResult(p);U(h,e);a.results.all.push(h)}}}prepareTechnique(a){if(0===this._nodes.length||a.output!==w.ShaderOutput.Color&&(a.output!==w.ShaderOutput.LinearDepth||a.bindParameters.slot!==N.RenderSlot.OPAQUE_NO_SSAO_DEPTH)&&a.output!==w.ShaderOutput.Highlight)return null;this._nodes.forAll(c=>{null==c.vao&&this._initNode(a,
c)});this._techniqueConfig.drawScreenSize=this._passParameters.drawScreenSpace;this._techniqueConfig.useFixedSizes=this._passParameters.useFixedSizes;this._techniqueConfig.hasSlicePlane=this._slicePlaneEnabled;this._techniqueConfig.hasOccludees=a.bindParameters.hasOccludees;this._techniqueConfig.clippingEnabled=this._clippingEnabled;this._techniqueConfig.output=a.output;return this._context.techniqueRepository.releaseAndAcquire(qa.PointRendererTechnique,this._techniqueConfig,this._technique)}renderNode(a,
c){const b=a.rctx,d=b.bindTechnique(c,a.bindParameters,this._passParameters),g=a.output===w.ShaderOutput.Highlight;this._nodes.forAll(f=>{0===f.coordinates.length||g&&!f.highlights||(d.bindDraw(f,a.bindParameters,this._passParameters),b.bindVAO(f.vao),g?this._renderHighlightFragments(b,f):b.drawArrays(x.PrimitiveType.POINTS,0,f.coordinates.length/3))})}_renderHighlightFragments(a,c){var b=c.highlights;if(null!=b){c=b[0].component;var d=c+1;for(let g=1;g<b.length;g++){const f=b[g].component;f!==d&&
(d-=c,0<d&&a.drawArrays(x.PrimitiveType.POINTS,c,d),c=f);d=f+1}b=d-c;0<b&&a.drawArrays(x.PrimitiveType.POINTS,c,b)}}set useFixedSizes(a){this._passParameters.useFixedSizes!==a&&(this._passParameters.useFixedSizes=a,this._requestRender())}get useFixedSizes(){return this._passParameters.useFixedSizes}set scaleFactor(a){this._passParameters.scaleFactor!==a&&(this._passParameters.scaleFactor=a,this._requestRender())}get scaleFactor(){return this._passParameters.scaleFactor}set minSizePx(a){this._passParameters.minSizePx!==
a&&(this._passParameters.minSizePx=a,this._requestRender())}get minSizePx(){return this._passParameters.minSizePx}set useRealWorldSymbolSizes(a){this._passParameters.useRealWorldSymbolSizes!==a&&(this._passParameters.useRealWorldSymbolSizes=a,this._requestRender())}get useRealWorldSymbolSizes(){return this._passParameters.useRealWorldSymbolSizes}set size(a){this._passParameters.size!==a&&(this._passParameters.size=a,this._requestRender())}get size(){return this._passParameters.size}set sizePx(a){this._passParameters.sizePx!==
a&&(this._passParameters.sizePx=a,this._requestRender())}get sizePx(){return this._passParameters.sizePx}set clippingBox(a){m.set(this._passParameters.clipBox,a||m.positiveInfinity)}get _clippingEnabled(){return!m.equals(this._passParameters.clipBox,m.positiveInfinity,(a,c)=>a===c)}get slicePlaneEnabled(){return this._slicePlaneEnabled}set slicePlaneEnabled(a){this._slicePlaneEnabled!==a&&(this._slicePlaneEnabled=a,this._requestRender())}addNode(a){this._nodes.push(a);this._highlights.nodeAdded(a);
this._requestRender()}removeNode(a){let c=null;this._nodes.filterInPlace(b=>b.id===a?(c=b,b.vao=W.disposeMaybe(b.vao),this._highlights.nodeRemoved(b),!1):!0);this._requestRender();return c}forEachNode(a){this._nodes.forAll(a)}removeAll(){this._nodes.forAll(a=>a.vao=W.disposeMaybe(a.vao));this._highlights.removeAll();this._nodes.clear();this._requestRender()}highlight(a){return this._highlights.add(a)}_addHighlight(a,c,b){var d=a.highlights;null==d&&(d=[]);c={component:c,id:b};d.push(c);c=aa(c);for(b=
d.length-1;0<b&&c<aa(d[b-1]);)[d[b-1],d[b]]=[d[b],d[b-1]],--b;a.highlights=d;this._requestRender()}_removeHighlight(a,c){a.highlights=sa(a.highlights,c);this._requestRender()}_initNode(a,c){a=a.rctx;c.vao=new pa.VertexArrayObject(a,na.Default3D,ta,{positions:Y.BufferObject.createVertex(a,x.Usage.STATIC_DRAW,c.coordinates),colors:Y.BufferObject.createVertex(a,x.Usage.STATIC_DRAW,c.rgb)})}_requestRender(){this._context&&this._context.requestRender()}};V.__decorate([ea.property({constructOnly:!0})],
v.PointRenderer.prototype,"createGraphic",void 0);v.PointRenderer=V.__decorate([fa.subclass("esri.views.3d.layers.i3s.PointRenderer")],v.PointRenderer);class wa extends O.PointRendererDrawParameters{constructor(a,c,b,d,g,f,H,A,G=null,y=null){super(b,g,c);this.id=a;this.obb=d;this.coordinates=f;this.rgb=H;this.attributes=A;this.pointIdFilterMap=G;this.highlights=y}}class R{constructor(){this.normal=this.dist=this.point=this.pointId=this.node=null;this.layerUid=""}}v.PointRendererNode=wa;v.isPointRendererNode=
function(a){return a.hasOwnProperty("splatSize")};Object.defineProperty(v,Symbol.toStringTag,{value:"Module"})});