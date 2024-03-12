// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../geometry ../../../Graphic ../../../core/Accessor ../../../core/reactiveUtils ../../../core/throttle ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../popup/content/AttachmentsContent ../../../popup/content/Content ../../../popup/content/CustomContent ../../../popup/content/ExpressionContent ../../../popup/content/FieldsContent ../../../popup/content/MediaContent ../../../popup/content/RelationshipContent ../../../popup/content/TextContent ../../../popup/ElementExpressionInfo ../FeatureContent/FeatureContentViewModel ../FeatureFields/FeatureFieldsViewModel ../FeatureMedia/FeatureMediaViewModel ../support/arcadeFeatureUtils ../../../geometry/Point".split(" "),
function(c,b,n,p,g,q,d,G,H,I,r,J,K,L,M,t,u,N,v,w,x,y,z,l,A){b=class extends p{constructor(f){super(f);this.view=this.location=this.interceptor=this.contentElementViewModel=this.contentElement=this.graphic=this.expressionInfo=this._abortController=null;this._cancelQuery=()=>{const {_abortController:a}=this;a&&a.abort();this._abortController=null};this._createVM=()=>{var a=this.contentElement?.type;this.contentElementViewModel?.destroy();a="fields"===a?new y:"media"===a?new z:"text"===a?new x:null;
this._set("contentElementViewModel",a)};this._compile=async()=>{this._cancelQuery();const a=new AbortController;this._abortController=a;await this._compileExpression();this._abortController===a&&(this._abortController=null)};this._compileThrottled=q.throttle(this._compile,1,this);this._compileExpression=async()=>{const {expressionInfo:a,graphic:h,interceptor:B,spatialReference:C,map:D,location:E,view:F,_abortController:m}=this;if(a&&h){var e=await l.loadArcade();if(m===this._abortController)if((e=
await l.createCompiledExpression({arcade:e,expressionInfo:a,graphic:h,location:E,interceptor:B,map:D,spatialReference:C,view:F}))&&"esri.arcade.Dictionary"===e.declaredClass){e=await e.castAsJsonAsync(m?.signal);var k=e?.type;e="media"===k?u.fromJSON(e):"text"===k?v.fromJSON(e):"fields"===k?t.fromJSON(e):null;this._set("contentElement",e)}else this._set("contentElement",null)}else this._set("contentElement",null)};this.addHandles([g.watch(()=>[this.expressionInfo,this.graphic,this.map,this.spatialReference,
this.view],()=>this._compileThrottled(),g.initial),g.watch(()=>[this.contentElement],()=>this._createVM(),g.initial)])}initialize(){this.addHandles(this._compileThrottled)}destroy(){this._cancelQuery();this.contentElementViewModel?.destroy();this._set("contentElementViewModel",null);this._set("contentElement",null)}get spatialReference(){return this.view?.spatialReference??null}set spatialReference(f){this._override("spatialReference",f)}get state(){const {_abortController:f,contentElement:a,contentElementViewModel:h}=
this;return f?"loading":a||h?"ready":"disabled"}get map(){return this.view?.map??null}set map(f){this._override("map",f)}};c.__decorate([d.property()],b.prototype,"_abortController",void 0);c.__decorate([d.property({type:w})],b.prototype,"expressionInfo",void 0);c.__decorate([d.property({type:n})],b.prototype,"graphic",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"contentElement",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"contentElementViewModel",void 0);c.__decorate([d.property()],
b.prototype,"interceptor",void 0);c.__decorate([d.property({type:A})],b.prototype,"location",void 0);c.__decorate([d.property()],b.prototype,"spatialReference",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"state",null);c.__decorate([d.property()],b.prototype,"map",null);c.__decorate([d.property()],b.prototype,"view",void 0);return b=c.__decorate([r.subclass("esri.widgets.Feature.FeatureExpression.FeatureExpressionViewModel")],b)});