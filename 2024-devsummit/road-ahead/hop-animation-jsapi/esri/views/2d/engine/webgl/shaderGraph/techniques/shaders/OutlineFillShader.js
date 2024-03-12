// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../../chunks/tslib.es6 ../../GraphShaderModule ../../graph/glsl ./AFeatureShader ./constants ./hittestUtils ./LineShader ./utils ./VisualVariableColor ./VisualVariableOpacity ./VisualVariableSizeMinMaxValue ./VisualVariableSizeScaleStops ./VisualVariableSizeStops ./VisualVariableSizeUnitValue ./vvUtils".split(" "),function(l,b,c,a,r,B,w,p,C,D,E,F,G,H,I,x){function y(d,e,m){const {id:h,bitset:n}=e,z=C.getBit(n,B.bitsetTypeFillOutline),q=a.greaterThan(z,new a.Float(.5)),
t=p.getLineVertexData(d,e),J=a.ifElse(q,t.halfWidth,new a.Float(0));var u=x.getVisualVariableOpacity(d,h),k=x.getVisualVariableColor(d,h,e.color);u=a.ifElse(q,e.color,k.multiply(u));k=d.view.displayViewScreenMat3.multiply(new a.Vec3(e.pos.xy,1));const K=d.clip(e.id);k=new a.Vec4(k.xy,K,1);k=a.ifElse(q,t.glPosition,k);d=m&&d.maybeRunHittest(e,m,q);return{isOutline:z,color:u,opacity:new a.Float(1),halfWidth:J,normal:t.normal,glPosition:k,...d}}class g extends r.FeatureVertexInput{}b.__decorate([c.location(3,
a.Vec2)],g.prototype,"offset",void 0);b.__decorate([c.location(4,a.Vec4)],g.prototype,"color",void 0);b.__decorate([c.location(5,a.Vec2)],g.prototype,"normal",void 0);b.__decorate([c.location(6,a.Float)],g.prototype,"halfWidth",void 0);b.__decorate([c.location(7,a.Float)],g.prototype,"referenceHalfWidth",void 0);b.__decorate([c.location(8,a.Vec2)],g.prototype,"zoomRange",void 0);class A extends p.LineFragmentInput{}class f extends r.AFeatureShader{constructor(){super(...arguments);this.computeAttributes=
{pos:["nextPos1","nextPos2"]}}}b.__decorate([c.uniform(p.AntialiasingControls)],f.prototype,"antialiasingControls",void 0);b.__decorate([c.option(D.VisualVariableColor)],f.prototype,"visualVariableColor",void 0);b.__decorate([c.option(E.VisualVariableOpacity)],f.prototype,"visualVariableOpacity",void 0);b.__decorate([c.option(F.VisualVariableSizeMinMaxValue)],f.prototype,"visualVariableSizeMinMaxValue",void 0);b.__decorate([c.option(G.VisualVariableSizeScaleStops)],f.prototype,"visualVariableSizeScaleStops",
void 0);b.__decorate([c.option(H.VisualVariableSizeStops)],f.prototype,"visualVariableSizeStops",void 0);b.__decorate([c.option(I.VisualVariableSizeUnitValue)],f.prototype,"visualVariableSizeUnitValue",void 0);class v extends f{vertex(d,e){return y(this,d,e)}fragment(d){const {color:e,isOutline:m}=d;var h=a.greaterThan(m,new a.Float(.5)),n=p.getLineFragmentColor(d,this.antialiasingControls.blur);n=a.ifElse(h,n,e);h=a.ifElse(h,new a.Float(1/255),new a.Float(0));return this.getFragmentOutput(n,d,h)}hittest(d,
e,m){return a.ifElse(m,w.failHittest(this.hittestRequest),w.hittestFill(this,d,e))}}b.__decorate([b.__param(0,c.input(g)),b.__param(1,c.input(r.BaseHittestVertexInput))],v.prototype,"vertex",null);b.__decorate([b.__param(0,c.input(A))],v.prototype,"fragment",null);l.AOutlineFillShader=f;l.OutlineFillFragmentInput=A;l.OutlineFillShader=v;l.OutlineFillVertexInput=g;l.getOutlineFillVertexData=y;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});