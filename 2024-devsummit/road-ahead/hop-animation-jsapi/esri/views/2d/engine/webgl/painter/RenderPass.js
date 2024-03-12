// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["../../../../../core/arrayUtils","../enums"],function(m,n){class p{constructor(a,b){this.brushes=a;this.name=b.name;this.drawPhase=b.drawPhase||n.WGLDrawPhase.MAP;this._targetFn=b.target;this.effects=b.effects||[];this.enableDefaultDraw=b.enableDefaultDraw??(()=>!0);this.forceDrawByDisplayOrder=!!b.forceDrawByDisplayOrder}render(a){const {context:b,profiler:c}=a,d=this._targetFn();var f=this.drawPhase&a.drawPhase;c.recordPassStart(this.name);if(f){this.enableDefaultDraw()&&this._doRender(a,
d);c.recordPassEnd();for(const e of this.effects){if(!e.enable())continue;f=e.apply;const g=e.args?.(),h=b.getViewport(),k=b.getBoundFramebufferObject(),l=a.passOptions;this._bindEffect(a,f,g);this._doRender(a,d,f.defines);this._drawAndUnbindEffect(a,f,h,k,l,g)}}}_doRender(a,b,c){if(null!=b){var {profiler:d,context:f}=a;for(const e of this.brushes){d.recordBrushStart(e.name);if(null!=e.brushEffect){const g=f.getViewport(),h=f.getBoundFramebufferObject(),k=a.passOptions;this._bindEffect(a,e.brushEffect);
this._drawWithBrush(e,a,b,c);this._drawAndUnbindEffect(a,e.brushEffect,g,h,k)}else this._drawWithBrush(e,a,b,c);d.recordBrushEnd()}}}_drawWithBrush(a,b,c,d){m.isArrayLike(c)?(a.prepareState(b,d),a.drawMany(b,c,d)):c.visible&&(a.prepareState(b,d),a.draw(b,c,d))}_bindEffect(a,b,c){const {profiler:d}=a;d.recordPassStart(this.name+"."+b.name);b.bind(a,c);b=b.createOptions(a,c);a.passOptions=b}_drawAndUnbindEffect(a,b,c,d,f,e){const {profiler:g,context:h}=a;a.passOptions=f;g.recordBrushStart(b.name);b.draw(a,
e);b.unbind(a,e);h.bindFramebuffer(d);const {x:k,y:l,width:q,height:r}=c;h.setViewport(k,l,q,r);g.recordBrushEnd();g.recordPassEnd()}}return p});