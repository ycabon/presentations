// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/mathUtils ../../../../../core/libs/gl-matrix-2/factories/mat3f32 ../../../../../core/libs/gl-matrix-2/factories/vec4f32 ../definitions ./WGLBrush ../../../../webgl/BufferObject ../../../../webgl/enums ../../../../webgl/VertexArrayObject".split(" "),function(t,u,B,C,p,D,E,l,F){class G extends D{constructor(){super(...arguments);this._color=C.fromValues(1,0,0,1);this._patternMatrix=B.create();this._programOptions={id:!1,pattern:!1}}dispose(){this._vao&&(this._vao.dispose(),
this._vao=null)}drawMany(b,h){const {context:f,painter:k,requestRender:v,allowDelayedRender:H}=b;this._loadWGLResources(b);const m=b.displayLevel;var d=b.styleLayer,a=d.backgroundMaterial;const I=k.vectorTilesMaterialManager;var c=d.getPaintValue("background-color",m),g=d.getPaintValue("background-opacity",m);const w=d.getPaintValue("background-pattern",m),q=void 0!==w,r=b.spriteMosaic;let x,y;b=(window.devicePixelRatio|1)>p.vtlHighResCutoff?2:1;const z=this._programOptions;z.pattern=q;a=I.getMaterialProgram(f,
a,z);if(H&&null!=v&&!a.compiled)v();else{f.bindVAO(this._vao);f.useProgram(a);if(q){c=r.getMosaicItemPosition(w,!0);if(null!=c){const {tl:e,br:n,page:A}=c;x=n[0]-e[0];y=n[1]-e[1];c=r.getPageSize(A);null!=c&&(r.bind(f,l.TextureSamplingMode.LINEAR,A,p.vtlTextureBindingUnitSprites),a.setUniform4f("u_tlbr",e[0],e[1],n[0],n[1]),a.setUniform2fv("u_mosaicSize",c),a.setUniform1i("u_texture",p.vtlTextureBindingUnitSprites))}a.setUniform1f("u_opacity",g)}else g*=c[3],this._color[0]=g*c[0],this._color[1]=g*
c[1],this._color[2]=g*c[2],this._color[3]=g,a.setUniform4fv("u_color",this._color);a.setUniform1f("u_depth",d.z||0);for(const e of h)a.setUniform1f("u_coord_range",e.rangeX),a.setUniformMatrix3fv("u_dvsMat3",e.transforms.displayViewScreenMat3),q&&(d=b*e.width*Math.max(2**(Math.round(m)-e.key.level),1),h=d/u.nextPowerOfTwo(x),d/=u.nextPowerOfTwo(y),this._patternMatrix[0]=h,this._patternMatrix[4]=d,a.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix)),f.setStencilFunction(l.CompareFunction.EQUAL,
0,255),f.drawArrays(l.PrimitiveType.TRIANGLE_STRIP,0,4)}}_loadWGLResources(b){if(!this._vao){var {context:h,styleLayer:f}=b;b=f.backgroundMaterial;var k=new Int8Array([0,0,1,0,0,1,1,1]);k=E.BufferObject.createVertex(h,l.Usage.STATIC_DRAW,k);this._vao=new F.VertexArrayObject(h,b.getAttributeLocations(),b.getLayoutInfo(),{geometry:k})}}}t.WGLBrushVTLBackground=G;Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});