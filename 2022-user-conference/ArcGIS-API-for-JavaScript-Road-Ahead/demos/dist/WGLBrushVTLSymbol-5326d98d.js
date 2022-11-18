import { dR as r, aL as e, m as r$1, ax as L, ch as f, aN as I$1, an as E, ad as E$1, ap as F, aj as a, t as t$1, aX as C, aG as n, e5 as e$1, cf as t$2 } from './_virtual_index-1ea2035a.js';
import { Z, _, $ } from './definitions-a784b44f.js';
import { I } from './enums-4e1a5b11.js';
import { M as M$1 } from './number-7d0da80b.js';
import { r as r$2, l, n as n$1 } from './StyleDefinition-98114241.js';
import { M as M$2 } from './GeometryUtils-07c7843a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class t{constructor(){this.name=this.constructor.name||"UnnamedBrush",this.brushEffect=null;}prepareState(t,r){}draw(t,r,s){}drawMany(t,r,s){for(const a of r)a.visible&&this.draw(t,a,s);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class d extends t{constructor(){super(...arguments),this._color=r(1,0,0,1),this._patternMatrix=e(),this._programOptions={id:!1,pattern:!1};}dispose(){this._vao&&(this._vao.dispose(),this._vao=null);}drawMany(e,o){const{context:c,painter:m,styleLayerUID:p,requestRender:_$1,allowDelayedRender:d}=e;this._loadWGLResources(e);const h=e.displayLevel,g=e.styleLayer,v=g.backgroundMaterial,y=m.vectorTilesMaterialManager,b=g.getPaintValue("background-color",h),M=g.getPaintValue("background-opacity",h),x=g.getPaintValue("background-pattern",h),j=void 0!==x,U=b[3]*M,w=1|window.devicePixelRatio,L$1=e.spriteMosaic;let A,P;const I$2=w>_?2:1,R=e.drawPhase===I.HITTEST,k=this._programOptions;k.id=R,k.pattern=j;const T=y.getMaterialProgram(c,v,k);if(d&&r$1(_$1)&&!T.isCompiled)_$1();else {if(c.bindVAO(this._vao),c.useProgram(T),j){const t=L$1.getMosaicItemPosition(x,!0);if(r$1(t)){const{tl:e,br:o,page:s}=t;A=o[0]-e[0],P=o[1]-e[1];const a=L$1.getPageSize(s);r$1(a)&&(L$1.bind(c,L.LINEAR,s,Z),T.setUniform4f("u_tlbr",e[0],e[1],o[0],o[1]),T.setUniform2fv("u_mosaicSize",a),T.setUniform1i("u_texture",Z));}T.setUniform1f("u_opacity",M);}else this._color[0]=U*b[0],this._color[1]=U*b[1],this._color[2]=U*b[2],this._color[3]=U,T.setUniform4fv("u_color",this._color);if(T.setUniform1f("u_depth",g.z||0),R){const t=M$1(p+1);T.setUniform4fv("u_id",t);}for(const r of o){if(T.setUniform1f("u_coord_range",r.rangeX),T.setUniformMatrix3fv("u_dvsMat3",r.transforms.dvs),j){const e=Math.max(2**(Math.round(h)-r.key.level),1),o=I$2*r.width*e,i=o/f(A),s=o/f(P);this._patternMatrix[0]=i,this._patternMatrix[4]=s,T.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix);}c.setStencilFunction(I$1.EQUAL,0,255),c.drawArrays(E.TRIANGLE_STRIP,0,4);}}}_loadWGLResources(t){if(this._vao)return;const{context:r,styleLayer:e}=t,o=e.backgroundMaterial,i=new Int8Array([0,0,1,0,0,1,1,1]),s=E$1.createVertex(r,F.STATIC_DRAW,i),a$1=new a(r,o.getAttributeLocations(),o.getLayoutInfo(),{geometry:s});this._vao=a$1;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class c$1 extends t{constructor(){super(...arguments),this._programOptions={id:!1};}dispose(){}drawMany(n,c){const{context:m,displayLevel:d,requiredLevel:f,state:u,drawPhase:p,painter:y,spriteMosaic:g,styleLayerUID:v,requestRender:E$1,allowDelayedRender:M}=n;if(!c.some((e=>e.layerData.get(v)?.circleIndexCount??!1)))return;const T=n.styleLayer,x=T.circleMaterial,I$2=y.vectorTilesMaterialManager,U=1.2,_=T.getPaintValue("circle-translate",d),R=T.getPaintValue("circle-translate-anchor",d),h=p===I.HITTEST,D=this._programOptions;D.id=h;const L=I$2.getMaterialProgram(m,x,D);if(M&&r$1(E$1)&&!L.isCompiled)return void E$1();m.useProgram(L),L.setUniformMatrix3fv("u_displayMat3",R===r$2.VIEWPORT?u.displayMat3:u.displayViewMat3),L.setUniform2fv("u_circleTranslation",_),L.setUniform1f("u_depth",T.z),L.setUniform1f("u_antialiasingWidth",U);let S=-1;if(h){const e=M$1(v+1);L.setUniform4fv("u_id",e);}for(const e of c){if(!e.layerData.has(v))continue;e.key.level!==S&&(S=e.key.level,x.setDataUniforms(L,d,T,S,g));const r=e.layerData.get(v);if(!r.circleIndexCount)continue;r.prepareForRendering(m);const i=r.circleVertexArrayObject;t$1(i)||(m.bindVAO(i),L.setUniformMatrix3fv("u_dvsMat3",e.transforms.dvs),f!==e.key.level?m.setStencilFunction(I$1.EQUAL,e.stencilRef,255):m.setStencilFunction(I$1.GREATER,255,255),m.drawElements(E.TRIANGLES,r.circleIndexCount,C.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*r.circleIndexStart),e.triangleCount+=r.circleIndexCount/3);}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const c=1/65536;class m extends t{constructor(){super(...arguments),this._fillProgramOptions={id:!1,pattern:!1},this._outlineProgramOptions={id:!1};}dispose(){}drawMany(t,e){const{displayLevel:i,drawPhase:r,renderPass:a,spriteMosaic:l,styleLayerUID:s}=t;let f=!1;for(const n of e)if(n.layerData.has(s)){const t=n.layerData.get(s);if(t.fillIndexCount>0||t.outlineIndexCount>0){f=!0;break}}if(!f)return;const u=t.styleLayer,d=u.getPaintProperty("fill-pattern"),c=void 0!==d,m=c&&d.isDataDriven;let p;if(c&&!m){const t=d.getValue(i);p=l.getMosaicItemPosition(t,!0);}const y=!c&&u.getPaintValue("fill-antialias",i);let g=!0,_=1;if(!c){const t=u.getPaintProperty("fill-color"),e=u.getPaintProperty("fill-opacity");if(!t?.isDataDriven&&!e?.isDataDriven){const t=u.getPaintValue("fill-color",i);_=u.getPaintValue("fill-opacity",i)*t[3],_>=1&&(g=!1);}}if(g&&"opaque"===a)return;let E;r===I.HITTEST&&(E=M$1(s+1));const v=u.getPaintValue("fill-translate",i),M=u.getPaintValue("fill-translate-anchor",i);(g||"translucent"!==a)&&this._drawFill(t,s,u,e,v,M,c,p,m,E);const P=!u.hasDataDrivenOutlineColor&&u.outlineUsesFillColor&&_<1;y&&"opaque"!==a&&!P&&this._drawOutline(t,s,u,e,v,M,E);}_drawFill(o,l,m,p,y,g,_$1,E$1,v,M){if(_$1&&!v&&t$1(E$1))return;const{context:P,displayLevel:I$2,state:T,drawPhase:U,painter:x,pixelRatio:D,spriteMosaic:h,requestRender:S,allowDelayedRender:R}=o,w=m.fillMaterial,N=x.vectorTilesMaterialManager,L$1=D>_?2:1,A=U===I.HITTEST,C$1=this._fillProgramOptions;C$1.id=A,C$1.pattern=_$1;const V=N.getMaterialProgram(P,w,C$1);if(R&&r$1(S)&&!V.isCompiled)return void S();if(P.useProgram(V),r$1(E$1)){const{page:t}=E$1,i=h.getPageSize(t);r$1(i)&&(h.bind(P,L.LINEAR,t,Z),V.setUniform2fv("u_mosaicSize",i),V.setUniform1i("u_texture",Z));}V.setUniformMatrix3fv("u_displayMat3",g===r$2.VIEWPORT?T.displayMat3:T.displayViewMat3),V.setUniform2fv("u_fillTranslation",y),V.setUniform1f("u_depth",m.z+c),A&&V.setUniform4fv("u_id",M);let O=-1;for(const i of p){if(!i.layerData.has(l))continue;i.key.level!==O&&(O=i.key.level,w.setDataUniforms(V,I$2,m,O,h));const a=i.layerData.get(l);if(!a.fillIndexCount)continue;a.prepareForRendering(P);const n=a.fillVertexArrayObject;if(!t$1(n)){if(P.bindVAO(n),V.setUniformMatrix3fv("u_dvsMat3",i.transforms.dvs),P.setStencilFunction(I$1.EQUAL,i.stencilRef,255),_$1){const t=Math.max(2**(Math.round(I$2)-i.key.level),1),e=i.rangeX/(L$1*i.width*t);V.setUniform1f("u_patternFactor",e);}if(v){const t=a.patternMap;if(!t)continue;for(const[i,a]of t){const t=h.getPageSize(i);r$1(t)&&(h.bind(P,L.LINEAR,i,Z),V.setUniform2fv("u_mosaicSize",t),V.setUniform1i("u_texture",Z),P.drawElements(E.TRIANGLES,a[1],C.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*a[0]));}}else P.drawElements(E.TRIANGLES,a.fillIndexCount,C.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*a.fillIndexStart);i.triangleCount+=a.fillIndexCount/3;}}}_drawOutline(r,a,o,l,s,m,p){const{context:y,displayLevel:g,state:_,drawPhase:E$1,painter:v,pixelRatio:M,spriteMosaic:P,requestRender:I$2,allowDelayedRender:T}=r,U=o.outlineMaterial,x=v.vectorTilesMaterialManager,D=.75/M,h=E$1===I.HITTEST,S=this._outlineProgramOptions;S.id=h;const R=x.getMaterialProgram(y,U,S);if(T&&r$1(I$2)&&!R.isCompiled)return void I$2();y.useProgram(R),R.setUniformMatrix3fv("u_displayMat3",m===r$2.VIEWPORT?_.displayMat3:_.displayViewMat3),R.setUniform2fv("u_fillTranslation",s),R.setUniform1f("u_depth",o.z+c),R.setUniform1f("u_outline_width",D),h&&R.setUniform4fv("u_id",p);let w=-1;for(const e of l){if(!e.layerData.has(a))continue;e.key.level!==w&&(w=e.key.level,U.setDataUniforms(R,g,o,w,P));const i=e.layerData.get(a);if(i.prepareForRendering(y),!i.outlineIndexCount)continue;const r=i.outlineVertexArrayObject;t$1(r)||(y.bindVAO(r),R.setUniformMatrix3fv("u_dvsMat3",e.transforms.dvs),y.setStencilFunction(I$1.EQUAL,e.stencilRef,255),y.drawElements(E.TRIANGLES,i.outlineIndexCount,C.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*i.outlineIndexStart),e.triangleCount+=i.outlineIndexCount/3);}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class u extends t{constructor(){super(...arguments),this._programOptions={id:!1,pattern:!1,sdf:!1};}dispose(){}drawMany(o,u){const{context:c,displayLevel:d,state:p,drawPhase:y,painter:g,pixelRatio:E$1,spriteMosaic:M,styleLayerUID:_,requestRender:v,allowDelayedRender:U}=o;if(!u.some((e=>e.layerData.get(_)?.lineIndexCount??!1)))return;const I$2=o.styleLayer,P=I$2.lineMaterial,x=g.vectorTilesMaterialManager,T=I$2.getPaintValue("line-translate",d),D=I$2.getPaintValue("line-translate-anchor",d),S=I$2.getPaintProperty("line-pattern"),L$1=void 0!==S,N=L$1&&S.isDataDriven;let R,V;if(L$1&&!N){const e=S.getValue(d);R=M.getMosaicItemPosition(e);}let h=!1;if(!L$1){const e=I$2.getPaintProperty("line-dasharray");if(V=void 0!==e,h=V&&e.isDataDriven,V&&!h){const t=e.getValue(d),i=I$2.getDashKey(t,I$2.getLayoutValue("line-cap",d));R=M.getMosaicItemPosition(i);}}const w=1/E$1,A=y===I.HITTEST,j=this._programOptions;j.id=A,j.pattern=L$1,j.sdf=V;const b=x.getMaterialProgram(c,P,j);if(U&&r$1(v)&&!b.isCompiled)return void v();if(c.useProgram(b),b.setUniformMatrix3fv("u_displayViewMat3",p.displayViewMat3),b.setUniformMatrix3fv("u_displayMat3",D===r$2.VIEWPORT?p.displayMat3:p.displayViewMat3),b.setUniform2fv("u_lineTranslation",T),b.setUniform1f("u_depth",I$2.z),b.setUniform1f("u_antialiasing",w),A){const e=M$1(_+1);b.setUniform4fv("u_id",e);}if(R&&r$1(R)){const{page:t}=R,i=M.getPageSize(t);r$1(i)&&(M.bind(c,L.LINEAR,t,Z),b.setUniform2fv("u_mosaicSize",i),b.setUniform1i("u_texture",Z));}let z=-1;for(const i of u){if(!i.layerData.has(_))continue;i.key.level!==z&&(z=i.key.level,P.setDataUniforms(b,d,I$2,z,M));const r=2**(d-z)/E$1;b.setUniform1f("u_zoomFactor",r);const a=i.layerData.get(_);if(!a.lineIndexCount)continue;a.prepareForRendering(c);const o=a.lineVertexArrayObject;if(!t$1(o)){if(c.bindVAO(o),b.setUniformMatrix3fv("u_dvsMat3",i.transforms.dvs),c.setStencilFunction(I$1.EQUAL,i.stencilRef,255),N||h){const t=a.patternMap;if(!t)continue;for(const[i,r]of t){const t=M.getPageSize(i);r$1(t)&&(M.bind(c,L.LINEAR,i,Z),b.setUniform2fv("u_mosaicSize",t),b.setUniform1i("u_texture",Z),c.drawElements(E.TRIANGLES,r[1],C.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*r[0]));}}else c.drawElements(E.TRIANGLES,a.lineIndexCount,C.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*a.lineIndexStart);i.triangleCount+=a.lineIndexCount/3;}}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const h=1/65536;class M extends t{constructor(){super(...arguments),this._iconProgramOptions={id:!1,sdf:!1},this._sdfProgramOptions={id:!1},this._spritesTextureSize=n();}dispose(){}drawMany(e,t){const{drawPhase:i,styleLayerUID:a}=e,r=e.styleLayer;let s;i===I.HITTEST&&(s=M$1(a+1)),this._drawIcons(e,r,t,s),this._drawText(e,r,t,s);}_drawIcons(i,a,f,p){const{context:c,displayLevel:d,drawPhase:y,painter:g,spriteMosaic:_,state:h,styleLayerUID:M,requestRender:P,allowDelayedRender:T}=i,U=a.iconMaterial,E=g.vectorTilesMaterialManager;let x,v=!1;for(const e of f)if(e.layerData.has(M)&&(x=e.layerData.get(M),x.iconPerPageElementsMap.size>0)){v=!0;break}if(!v)return;const D=a.getPaintValue("icon-translate",d),I$1=a.getPaintValue("icon-translate-anchor",d);let R=a.getLayoutValue("icon-rotation-alignment",d);R===l.AUTO&&(R=a.getLayoutValue("symbol-placement",d)===n$1.POINT?l.VIEWPORT:l.MAP);const S=R===l.MAP,V=a.getLayoutValue("icon-keep-upright",d)&&S,w=x.isIconSDF,A=y===I.HITTEST,L=this._iconProgramOptions;L.id=A,L.sdf=w;const O=E.getMaterialProgram(c,U,L);if(T&&r$1(P)&&!O.isCompiled)return void P();c.useProgram(O),O.setUniformMatrix3fv("u_displayViewMat3",R===l.MAP?h.displayViewMat3:h.displayMat3),O.setUniformMatrix3fv("u_displayMat3",I$1===r$2.VIEWPORT?h.displayMat3:h.displayViewMat3),O.setUniform2fv("u_iconTranslation",D),O.setUniform1f("u_depth",a.z),O.setUniform1f("u_mapRotation",M$2(h.rotation)),O.setUniform1f("u_keepUpright",V?1:0),O.setUniform1f("u_level",10*d),O.setUniform1i("u_texture",Z),O.setUniform1f("u_fadeDuration",e$1/1e3),A&&O.setUniform4fv("u_id",p);let N=-1;for(const e of f){if(!e.layerData.has(M))continue;if(e.key.level!==N&&(N=e.key.level,U.setDataUniforms(O,d,a,N,_)),x=e.layerData.get(M),0===x.iconPerPageElementsMap.size)continue;x.prepareForRendering(c),x.updateOpacityInfo();const r=x.iconVertexArrayObject;if(!t$1(r)){c.bindVAO(r),O.setUniformMatrix3fv("u_dvsMat3",e.transforms.dvs),O.setUniform1f("u_time",(performance.now()-x.lastOpacityUpdate)/1e3);for(const[t,a]of x.iconPerPageElementsMap)this._renderIconRange(i,O,a,t,e);}}}_renderIconRange(e,t,i,a,r){const{context:s,spriteMosaic:n}=e;this._spritesTextureSize[0]=n.getWidth(a)/4,this._spritesTextureSize[1]=n.getHeight(a)/4,t.setUniform2fv("u_mosaicSize",this._spritesTextureSize),n.bind(s,L.LINEAR,a,Z),s.setStencilTestEnabled(!0),s.setStencilFunction(I$1.GREATER,255,255),s.setStencilWriteMask(0),s.drawElements(E.TRIANGLES,i[1],C.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*i[0]),r.triangleCount+=i[1]/3;}_drawText(i,l$1,p,c){const{context:d,displayLevel:g,drawPhase:_,glyphMosaic:M,painter:P,pixelRatio:T,spriteMosaic:U,state:E,styleLayerUID:x,requestRender:v,allowDelayedRender:D}=i,I$2=l$1.textMaterial,R=P.vectorTilesMaterialManager;let S,V=!1;for(const e of p)if(e.layerData.has(x)&&(S=e.layerData.get(x),S.glyphPerPageElementsMap.size>0)){V=!0;break}if(!V)return;const w=l$1.getPaintProperty("text-opacity");if(w&&!w.isDataDriven&&0===w.getValue(g))return;const A=l$1.getPaintProperty("text-color"),L=!A||A.isDataDriven||A.getValue(g)[3]>0,O=l$1.getPaintProperty("text-halo-width"),N=l$1.getPaintProperty("text-halo-color"),b=(!O||O.isDataDriven||O.getValue(g)>0)&&(!N||N.isDataDriven||N.getValue(g)[3]>0);if(!L&&!b)return;const z=24/8;let k=l$1.getLayoutValue("text-rotation-alignment",g);k===l.AUTO&&(k=l$1.getLayoutValue("symbol-placement",g)===n$1.POINT?l.VIEWPORT:l.MAP);const j=k===l.MAP,G=l$1.getLayoutValue("text-keep-upright",g)&&j,W=_===I.HITTEST,C=.8*z/T;this._glyphTextureSize||(this._glyphTextureSize=t$2(M.width/4,M.height/4));const F=l$1.getPaintValue("text-translate",g),B=l$1.getPaintValue("text-translate-anchor",g),H=this._sdfProgramOptions;H.id=W;const Y=R.getMaterialProgram(d,I$2,H);if(D&&r$1(v)&&!Y.isCompiled)return void v();d.useProgram(Y),Y.setUniformMatrix3fv("u_displayViewMat3",k===l.MAP?E.displayViewMat3:E.displayMat3),Y.setUniformMatrix3fv("u_displayMat3",B===r$2.VIEWPORT?E.displayMat3:E.displayViewMat3),Y.setUniform2fv("u_textTranslation",F),Y.setUniform1f("u_depth",l$1.z+h),Y.setUniform2fv("u_mosaicSize",this._glyphTextureSize),Y.setUniform1f("u_mapRotation",M$2(E.rotation)),Y.setUniform1f("u_keepUpright",G?1:0),Y.setUniform1f("u_level",10*g),Y.setUniform1i("u_texture",$),Y.setUniform1f("u_antialiasingWidth",C),Y.setUniform1f("u_fadeDuration",e$1/1e3),W&&Y.setUniform4fv("u_id",c);let q=-1;for(const e of p){if(!e.layerData.has(x))continue;if(e.key.level!==q&&(q=e.key.level,I$2.setDataUniforms(Y,g,l$1,q,U)),S=e.layerData.get(x),0===S.glyphPerPageElementsMap.size)continue;S.prepareForRendering(d),S.updateOpacityInfo();const i=S.textVertexArrayObject;if(t$1(i))continue;d.bindVAO(i),Y.setUniformMatrix3fv("u_dvsMat3",e.transforms.dvs),d.setStencilTestEnabled(!0),d.setStencilFunction(I$1.GREATER,255,255),d.setStencilWriteMask(0);const a=(performance.now()-S.lastOpacityUpdate)/1e3;Y.setUniform1f("u_time",a),S.glyphPerPageElementsMap.forEach(((t,i)=>{this._renderGlyphRange(d,t,i,M,Y,b,L,e);}));}}_renderGlyphRange(e,t,i,a,r,s,n,o){a.bind(e,L.LINEAR,i,$),s&&(r.setUniform1f("u_halo",1),e.drawElements(E.TRIANGLES,t[1],C.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),o.triangleCount+=t[1]/3),n&&(r.setUniform1f("u_halo",0),e.drawElements(E.TRIANGLES,t[1],C.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),o.triangleCount+=t[1]/3);}}

export { M, c$1 as c, d, m, t, u };