// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../geometry ../../../core/Error ../../../core/has ../../../core/Loadable ../../../core/Logger ../../../core/promiseUtils ../../../core/workers/workers ../../../core/accessorSupport/decorators/property ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ./support/clientSideDefaults ../../../rest/support/FeatureSet ../../../geometry/Extent ../../../geometry/Polygon ../../../geometry/support/typeUtils".split(" "),function(e,f,E,q,
t,u,r,v,w,k,F,x,y,z,A,B,C){e.GeoJSONSource=class extends u{constructor(){super(...arguments);this.type="geojson";this.refresh=v.debounce(async a=>{await this.load();const {extent:b,timeExtent:c}=await this._connection.invoke("refresh",a);this.sourceJSON.extent=b;c&&(this.sourceJSON.timeInfo.timeExtent=[c.start,c.end]);return{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(a){this.addResolvingPromise(this._startWorker(null!=a?a.signal:null));return Promise.resolve(this)}destroy(){this._connection?.close();
this._connection=null}applyEdits(a){return this.load().then(()=>this._applyEdits(a))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(a,b={}){return this.load(b).then(()=>this._connection.invoke("queryFeatures",a?a.toJSON():null,b)).then(c=>z.fromJSON(c))}queryFeaturesJSON(a,b={}){return this.load(b).then(()=>this._connection.invoke("queryFeatures",a?a.toJSON():null,b))}queryFeatureCount(a,b={}){return this.load(b).then(()=>this._connection.invoke("queryFeatureCount",
a?a.toJSON():null,b))}queryObjectIds(a,b={}){return this.load(b).then(()=>this._connection.invoke("queryObjectIds",a?a.toJSON():null,b))}queryExtent(a,b={}){return this.load(b).then(()=>this._connection.invoke("queryExtent",a?a.toJSON():null,b)).then(c=>({count:c.count,extent:A.fromJSON(c.extent)}))}querySnapping(a,b={}){return this.load(b).then(()=>this._connection.invoke("querySnapping",a,b))}_applyEdits(a){if(!this._connection)throw new q("geojson-layer-source:edit-failure","Memory source not loaded");
const b=this.layer.objectIdField,c=[],g=[],l=[];if(a.addFeatures)for(const d of a.addFeatures)c.push(this._serializeFeature(d));if(a.deleteFeatures)for(const d of a.deleteFeatures)"objectId"in d&&null!=d.objectId?g.push(d.objectId):"attributes"in d&&null!=d.attributes[b]&&g.push(d.attributes[b]);if(a.updateFeatures)for(const d of a.updateFeatures)l.push(this._serializeFeature(d));return this._connection.invoke("applyEdits",{adds:c,updates:l,deletes:g}).then(({extent:d,timeExtent:h,featureEditResults:m})=>
{this.sourceJSON.extent=d;h&&(this.sourceJSON.timeInfo.timeExtent=[h.start,h.end]);return this._createEditsResult(m)})}_createEditsResult(a){return{addFeatureResults:a.addResults?a.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:a.updateResults?a.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:a.deleteResults?a.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(a){const b=
!0===a.success?null:a.error||{code:void 0,description:void 0};return{objectId:a.objectId,globalId:a.globalId,error:b?new q("geojson-layer-source:edit-failure",b.description,{code:b.code}):null}}_serializeFeature(a){const {attributes:b}=a;return(a=this._geometryForSerialization(a))?{geometry:a.toJSON(),attributes:b}:{attributes:b}}_geometryForSerialization(a){({geometry:a}=a);return null==a?null:"mesh"===a.type||"extent"===a.type?B.fromExtent(a.extent):a}async _startWorker(a){this._connection=await w.open("GeoJSONSourceWorker",
{strategy:t("feature-layers-workers")?"dedicated":"local",signal:a,registryTarget:this});const {fields:b,spatialReference:c,hasZ:g,geometryType:l,objectIdField:d,url:h,timeInfo:m,customParameters:D}=this.layer;var p="defaults"===this.layer.originOf("spatialReference");p={url:h,customParameters:D,fields:b&&b.map(n=>n.toJSON()),geometryType:C.featureGeometryTypeKebabDictionary.toJSON(l),hasZ:g,objectIdField:d,timeInfo:m?m.toJSON():null,spatialReference:p?null:c&&c.toJSON()};a=await this._connection.invoke("load",
p,{signal:a});for(const n of a.warnings)r.getLogger(this.layer).warn("#load()",`$${n.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:n});a.featureErrors.length&&r.getLogger(this.layer).warn("#load()",`Encountered ${a.featureErrors.length} validation errors while loading features. (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{errors:a.featureErrors});this.sourceJSON=a.layerDefinition;this.capabilities=y.createCapabilities(this.sourceJSON.hasZ,
!0)}};f.__decorate([k.property()],e.GeoJSONSource.prototype,"capabilities",void 0);f.__decorate([k.property()],e.GeoJSONSource.prototype,"type",void 0);f.__decorate([k.property({constructOnly:!0})],e.GeoJSONSource.prototype,"layer",void 0);f.__decorate([k.property()],e.GeoJSONSource.prototype,"sourceJSON",void 0);e.GeoJSONSource=f.__decorate([x.subclass("esri.layers.graphics.sources.GeoJSONSource")],e.GeoJSONSource);Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});