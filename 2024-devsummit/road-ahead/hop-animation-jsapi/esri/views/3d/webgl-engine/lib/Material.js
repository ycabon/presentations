// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../core/shaderModules/interfaces ./AnimationTimer ./basicInterfaces ./ContentObject ./ContentObjectType ./DefaultVertexAttributeLocations ../materials/internal/MaterialUtil".split(" "),function(b,e,h,k,l,m,n,p,f){class q extends m.ContentObject{constructor(a,c){super();this.type=n.ContentObjectType.Material;this.supportsEdges=!1;this._visible=!0;this._renderPriority=0;this._vertexAttributeLocations=p.Default3D;this._pp0=e.fromValues(0,
0,1);this._pp1=e.fromValues(0,0,0);this._parameters=f.copyParameters(a,c);this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(a){return!1}setParameters(a,c=!0){f.updateParameters(this._parameters,a)&&(this.validateParameters(this._parameters),c&&this.parametersChanged())}validateParameters(a){}get visible(){return this._visible}set visible(a){a!==this._visible&&(this._visible=a,this.parametersChanged())}shouldRender(a){return this.isVisible()&&this.isVisibleForOutput(a.output)&&
(!this.parameters.isDecoration||a.bindParameters.decorations===l.Decorations.ON)&&0!==(this.parameters.renderOccluded&a.renderOccludedMask)}isVisibleForOutput(a){return!0}get renderPriority(){return this._renderPriority}set renderPriority(a){a!==this._renderPriority&&(this._renderPriority=a,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){this.repository?.materialChanged(this)}queryRenderOccludedState(a){return this.isVisible()&&
this.parameters.renderOccluded===a}intersectDraped(a,c,d,g,r,v){this._pp0[0]=this._pp1[0]=g[0];this._pp0[1]=this._pp1[1]=g[1];return this.intersect(a,c,d,this._pp0,this._pp1,r)}}class t extends k.Parameters{constructor(a,c,d){super(c,d);this.camera=a}}b.RenderOccludedFlag=void 0;(function(a){a[a.None=0]="None";a[a.Occlude=1]="Occlude";a[a.Transparent=2]="Transparent";a[a.OccludeAndTransparent=4]="OccludeAndTransparent";a[a.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil";a[a.Opaque=
16]="Opaque"})(b.RenderOccludedFlag||(b.RenderOccludedFlag={}));class u extends h.NoParameters{constructor(){super(...arguments);this.renderOccluded=b.RenderOccludedFlag.Occlude;this.isDecoration=!1}}b.Material=q;b.MaterialParameters=u;b.UpdateParameters=t;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});