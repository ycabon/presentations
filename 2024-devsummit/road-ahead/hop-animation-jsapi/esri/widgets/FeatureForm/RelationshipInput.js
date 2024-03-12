// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../layers/support/layerUtils ../Feature/FeatureRelationship/FeatureRelationshipViewModel ../Feature/support/featureUtils ./EditableInput ./featureFormUtils".split(" "),function(c,p,d,b,y,z,u,q,v,w,x,r){b=class extends x{constructor(a){super(a);this.group=this._relationshipVM=null;this.type="relationship";
this.addHandles([p.watch(()=>({feature:this.feature,element:this.element,layer:this.layer}),e=>this._createRelationshipVM(e),p.initial)])}destroy(){this._relationshipVM?.destroy()}get canAddRelatedFeature(){const {editable:a,featureCount:e,relationship:g}=this;if(!g||!this.loaded||!this.relatedLayerAllowsAdds)return!1;const {cardinality:h,role:f}=g;return"one-to-one"===h&&0<e||"many-to-many"===h||"one-to-many"===h&&"destination"===f&&0<e?!1:a}get displayCount(){return this.element.displayCount??3}get displayType(){return this.element.displayType}get editable(){return this.relatedLayerAllowsEdits?
this.evaluatedEditableExpression??!0:!1}get featureCount(){return this._relationshipVM?.featureCount??0}get loaded(){return"loading"!==this._relationshipVM?.state}get map(){return this._get("map")}set map(a){a&&this._relationshipVM?.set("map",a);this._set("map",a)}get orderByFields(){return this.element.orderByFields}get originHasValidKey(){return!(!this.relationship||!this.feature.getAttribute(this.relationship.keyField))}get relationship(){return this._relationshipVM?.relationship}get relationshipId(){return this.element.relationshipId}get relatedFeatureInfos(){const {_relationshipVM:a,
timeZone:e}=this;if(!a?.relatedFeatures?.length||!a?.relatedLayer)return[];const {itemDescriptionFieldName:g,relatedFeatures:h,relatedLayer:f}=a,m=f&&"formTemplate"in f&&f.formTemplate?f.formTemplate.title:void 0;return h.map(l=>{let n=void 0;if(g){var k=l.getAttribute(g);const t=f.fieldsIndex.get(g);t&&(k=r.getComputedAttributes({values:[k],fields:[t],timeZone:e??void 0})[g],null!=k&&(n=k.toString()))}k=m?r.parseFormTemplateString({label:m,attributes:l.attributes,fieldsIndex:f.fieldsIndex,timeZone:e}):
void 0;return{feature:l,description:n,title:k}}).toArray()}get relatedLayer(){return this._relationshipVM?.relatedLayer}get relatedLayerIsTable(){return!!this.relatedLayer?.isTable}get relatedLayerAllowsAdds(){const {relatedLayer:a}=this;return a&&this.relatedLayerAllowsEdits?!!q.getEffectiveLayerCapabilities(a)?.operations?.supportsAdd:!1}get relatedLayerAllowsEdits(){const {relatedLayer:a}=this;return a?!!q.getEffectiveLayerCapabilities(a)?.operations?.supportsEditing:!1}get showAllEnabled(){return this._get("showAllEnabled")}set showAllEnabled(a){this._relationshipVM?.set("showAllEnabled",
a);this._set("showAllEnabled",a)}get showAllActionVisible(){return!this.showAllEnabled&&0<this.featureCount&&this.featureCount>this.displayCount}get visible(){var {relationship:a}=this;if(!a)return!1;({cardinality:a}=a);return"many-to-many"===a?!1:null!=this.evaluatedVisibilityExpression?this.evaluatedVisibilityExpression:null!=this.element}get updating(){return"loading"===this._relationshipVM?.state||"querying"===this._relationshipVM?.state}incrementPage(){this._relationshipVM&&this._relationshipVM.featurePage++}getRelatedFeatureByObjectId(a){return this._relationshipVM?.getRelatedFeatureByObjectId(a)}_createRelationshipVM(a){const {feature:e,
element:g,layer:h}=a;this._relationshipVM?.destroy();if(e&&g&&h){var {displayCount:f,map:m,orderByFields:l,relationshipId:n,showAllEnabled:k}=this;w.isRelatableFeatureSupportedLayer(h)&&(this._relationshipVM=new v({graphic:e,displayCount:f,layer:h,map:m,orderByFields:l,relationshipId:n,showAllEnabled:k}))}}};c.__decorate([d.property()],b.prototype,"_relationshipVM",void 0);c.__decorate([d.property()],b.prototype,"canAddRelatedFeature",null);c.__decorate([d.property()],b.prototype,"displayCount",null);
c.__decorate([d.property()],b.prototype,"displayType",null);c.__decorate([d.property()],b.prototype,"editable",null);c.__decorate([d.property()],b.prototype,"featureCount",null);c.__decorate([d.property()],b.prototype,"group",void 0);c.__decorate([d.property()],b.prototype,"loaded",null);c.__decorate([d.property()],b.prototype,"map",null);c.__decorate([d.property()],b.prototype,"orderByFields",null);c.__decorate([d.property()],b.prototype,"originHasValidKey",null);c.__decorate([d.property()],b.prototype,
"relationship",null);c.__decorate([d.property()],b.prototype,"relationshipId",null);c.__decorate([d.property()],b.prototype,"relatedFeatureInfos",null);c.__decorate([d.property()],b.prototype,"relatedLayer",null);c.__decorate([d.property()],b.prototype,"relatedLayerIsTable",null);c.__decorate([d.property()],b.prototype,"relatedLayerAllowsAdds",null);c.__decorate([d.property()],b.prototype,"relatedLayerAllowsEdits",null);c.__decorate([d.property()],b.prototype,"showAllEnabled",null);c.__decorate([d.property()],
b.prototype,"showAllActionVisible",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"type",void 0);c.__decorate([d.property()],b.prototype,"visible",null);c.__decorate([d.property()],b.prototype,"updating",null);return b=c.__decorate([u.subclass("esri.widgets.FeatureForm.RelationshipInput")],b)});