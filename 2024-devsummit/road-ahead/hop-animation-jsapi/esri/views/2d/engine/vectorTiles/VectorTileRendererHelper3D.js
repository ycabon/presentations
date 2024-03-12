// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../geometry ../../../../Viewpoint ../../tiling/TileInfoView ../../tiling/TileKey ../../tiling/TileQueue ../../tiling/TileStrategy ../../ViewState ./style/StyleDefinition ../webgl/RenderableTile ../webgl/TileReshuffleManager ../../../webgl/enums ../../../../geometry/Point".split(" "),function(u,F,v,G,w,H,I,x,y,z,A,q,B){class C{constructor(){this._renderParams={reshuffleManager:new A.TileReshuffleManager,context:null,drawPhase:1,state:new x({viewpoint:new v({targetGeometry:new B(0,
0),scale:1,rotation:0}),size:[256,256]}),stationary:!0,pixelRatio:1,displayLevel:-1,requiredLevel:-1,globalOpacity:1,renderPass:"background",styleLayer:null,styleLayerUID:-1,painter:null,glyphMosaic:null,spriteMosaic:null,profiler:null,renderingOptions:null,requestRender:null,allowDelayedRender:!1,deltaTime:-1,timeline:null,time:0,hasClipping:!1,blendMode:null,dataUploadCounter:0,effects:null,inFadeTransition:!1,requireFBO:!1,highlightGradient:null,stencilSymbols:!0,is3D:!0,backgroundColor:null};
this._backgroundTile=new z.RenderableTile(new w(0,0,0,0),0,0,0,512,512,4096,4096)}dispose(){this._renderParams=null}renderBackground(a,c,b,g,h,d,m,k,n,e){const l=this._backgroundTile;this._updateRenderParameters(a,c,l,b,h,d,m,k,n,e);this._renderParams.stencilSymbols=!1;b.drawBackground(this._renderParams,l,g)}renderContent(a,c,b,g,h,d,m,k,n,e,l,f){this._stencilSymbols(a,c,b,g,h,d,m,Math.round(1/k),n,e,l,f);let r=1;b.stencilRef=r++;a.setStencilFunction(q.CompareFunction.EQUAL,b.stencilRef,255);this._render(a,
c,b,h,d,m,k,n,e,l,f);g.forAll(p=>{p.sourceLayerInfo.data.stencilRef=r++;this._renderSymbols(a,p.sourceLod,p.sourceLayerInfo.data,h,d,m,Math.round(1/k),p.offset,e,l,f)})}_stencilSymbols(a,c,b,g,h,d,m,k,n,e,l,f){let r=1;b.stencilRef=r++;a.setDepthTestEnabled(!1);a.setDepthWriteEnabled(!1);a.setStencilTestEnabled(!0);a.setBlendingEnabled(!1);a.setColorMask(!1,!1,!1,!1);a.setStencilOp(q.StencilOperation.KEEP,q.StencilOperation.KEEP,q.StencilOperation.REPLACE);a.setStencilWriteMask(255);a.setStencilFunction(q.CompareFunction.ALWAYS,
b.stencilRef,255);this._stencilTileSymbols(a,c,b,h,d,m,k,n,e,l,f);for(const p of g.toArray()){const {sourceLod:D,offset:E,sourceLayerInfo:t}=p;t.data.stencilRef=r++;a.setStencilFunction(q.CompareFunction.ALWAYS,t.data.stencilRef,255);this._stencilTileSymbols(a,D,t.data,h,d,m,k,E,e,l,f)}a.setStencilWriteMask(0);a.setBlendingEnabled(!0);a.setDepthTestEnabled(!0);a.setColorMask(!0,!0,!0,!0)}_renderSymbols(a,c,b,g,h,d,m,k,n,e,l){a.setStencilFunction(q.CompareFunction.EQUAL,b.stencilRef,255);this._render(a,
c,b,g,h,d,m,k,n,e,l,y.StyleLayerType.SYMBOL)}_render(a,c,b,g,h,d,m,k,n,e,l,f){this._updateRenderParameters(a,c,b,g,d,m,k,n,e,l);this._renderParams.stencilSymbols=!1;g.drawTile(this._renderParams,b,h,f)}_stencilTileSymbols(a,c,b,g,h,d,m,k,n,e,l){this._updateRenderParameters(a,c,b,g,d,m,k,n,e,l);this._renderParams.stencilSymbols=!0;b.triangleCount=0;g.drawSymbols(this._renderParams,b,h)}_updateRenderParameters(a,c,b,g,h,d,m,k,n,e){"type"in b&&"vector-tile"===b.type&&!b.stage&&b.attachWithContext(a);
const l=c[0]-h.getLevelShift(c[0]),f=this._renderParams;f.context=a;f.painter=g;f.glyphMosaic=g.glyphMosaic;f.spriteMosaic=g.spriteMosaic;f.pixelRatio=n*e;f.displayLevel=l;f.requiredLevel=l;a=h.getScale(c[0]);const [r,p]=h.getOffset(c,d*a);c=.125*d*a/k;b=b.transforms.displayViewScreenMat3;b[0]=c;b[4]=-c;b[6]=-1-r-m[0]*d*2;b[7]=1+p+(1-m[1])*d*2-2;f.state.size[0]=k/e;f.state.size[1]=k/e;f.state.pixelRatio=e}}u.VectorTileRendererHelper3D=C;Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});