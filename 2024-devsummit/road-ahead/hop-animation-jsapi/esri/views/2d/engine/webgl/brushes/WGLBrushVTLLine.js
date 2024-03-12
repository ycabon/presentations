// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../vectorTiles/style/StyleDefinition","../definitions","./WGLBrush","../../../../webgl/enums"],function(w,D,q,E,l){class F extends E{constructor(){super(...arguments);this._programOptions={id:!1,pattern:!1,sdf:!1}}dispose(){}drawMany(c,d){const {context:f,displayLevel:m,state:t,painter:G,pixelRatio:x,spriteMosaic:n,styleLayerUID:u,requestRender:y,allowDelayedRender:H}=c;if(d.some(e=>e.layerData.get(u)?.lineIndexCount??!1)){c=c.styleLayer;var z=c.lineMaterial,I=G.vectorTilesMaterialManager,
g=c.getPaintValue("line-translate",m),b=c.getPaintValue("line-translate-anchor",m),h=c.getPaintProperty("line-pattern"),r=void 0!==h,A=r&&h.isDataDriven;if(r&&!A){h=h.getValue(m);var k=n.getMosaicItemPosition(h)}var a;h=!1;if(!r){var p=c.getPaintProperty("line-dasharray");h=(a=void 0!==p)&&p.isDataDriven;a&&!h&&(k=p.getValue(m),k=c.getDashKey(k,c.getLayoutValue("line-cap",m)),k=n.getMosaicItemPosition(k))}p=1/x;var v=this._programOptions;v.pattern=r;v.sdf=a;a=I.getMaterialProgram(f,z,v);if(H&&null!=
y&&!a.compiled)y();else{f.useProgram(a);a.setUniformMatrix3fv("u_displayViewMat3",t.displayViewMat3);a.setUniformMatrix3fv("u_displayMat3",b===D.TranslateAnchor.VIEWPORT?t.displayMat3:t.displayViewMat3);a.setUniform2fv("u_lineTranslation",g);a.setUniform1f("u_depth",c.z);a.setUniform1f("u_antialiasing",p);k&&null!=k&&({page:g}=k,b=n.getPageSize(g),null!=b&&(n.bind(f,l.TextureSamplingMode.LINEAR,g,q.vtlTextureBindingUnitSprites),a.setUniform2fv("u_mosaicSize",b),a.setUniform1i("u_texture",q.vtlTextureBindingUnitSprites)));
g=-1;for(const e of d)if(e.layerData.has(u)&&(e.key.level!==g&&(g=e.key.level,z.setDataUniforms(a,m,c,g,n)),a.setUniform1f("u_zoomFactor",2**(m-g)/x),d=e.layerData.get(u),d.lineIndexCount&&(d.prepareForRendering(f),b=d.vao,null!=b))){f.bindVAO(b);a.setUniformMatrix3fv("u_dvsMat3",e.transforms.displayViewScreenMat3);f.setStencilFunction(l.CompareFunction.EQUAL,e.stencilRef,255);if(A||h){b=d.patternMap;if(!b)continue;for(const [B,C]of b)b=n.getPageSize(B),null!=b&&(n.bind(f,l.TextureSamplingMode.LINEAR,
B,q.vtlTextureBindingUnitSprites),a.setUniform2fv("u_mosaicSize",b),a.setUniform1i("u_texture",q.vtlTextureBindingUnitSprites),f.drawElements(l.PrimitiveType.TRIANGLES,C[1],l.DataType.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*C[0]))}else f.drawElements(l.PrimitiveType.TRIANGLES,d.lineIndexCount,l.DataType.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*d.lineIndexStart);e.triangleCount+=d.lineIndexCount/3}}}}}w.WGLBrushVTLLine=F;Object.defineProperty(w,Symbol.toStringTag,{value:"Module"})});