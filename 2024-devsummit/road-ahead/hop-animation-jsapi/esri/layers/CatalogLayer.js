// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../request ../core/Clonable ../core/Collection ../core/Error ../core/MultiOriginJSONSupport ../core/promiseUtils ../core/urlUtils ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/subclass ./Layer ./catalog/CatalogDynamicGroupLayer ./catalog/CatalogFootprintLayer ./graphics/sources/FeatureLayerSource ./graphics/sources/support/clientSideDefaults ./mixins/APIKeyMixin ./mixins/ArcGISService ./mixins/BlendLayer ./mixins/CustomParametersMixin ./mixins/FeatureLayerBase ./mixins/OperationalLayer ./mixins/OrderedLayer ./mixins/PortalLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ./mixins/TemporalLayer ./support/featureLayerUtils ./support/fieldProperties ./support/versionUtils ../rest/support/Query".split(" "),
function(e,n,c,p,l,q,r,m,f,k,N,O,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,h){k=L.defineFieldProperties();c=class extends D.FeatureLayerBase(B.BlendLayer(F.OrderedLayer(J.TemporalLayer(I.ScaleRangeLayer(H.RefreshableLayer(A.ArcGISService(E.OperationalLayer(G.PortalLayer(q.MultiOriginJSONMixin(C.CustomParametersMixin(z.APIKeyMixin(c.ClonableMixin(u))))))))))))){constructor(a){super(a);this.dynamicGroupLayer=new v({parent:this});this.fieldsIndex=this.fields=null;this.footprintLayer=new w({parent:this});
this.itemSourceField="cd_itemsource";this.itemTypeField="cd_itemtype";this.layers=new p([this.dynamicGroupLayer,this.footprintLayer]);this.source=new x({layer:this});this.type="catalog"}load(a){const b=null!=a?a.signal:null,d=this.loadFromPortal({supportedTypes:["Feature Service"]},a).catch(r.throwIfAbortError).then(async()=>{if(!this.url)throw new l("catalog-layer:missing-url","Catalog layer must be created with a url");if(this.url&&null==this.layerId){const g=await this._fetchFirstValidLayerId(b);
if(null!=g)this.layerId=g;else throw new l("catalog-layer:missing-layerId","There is no Catalog Layer in the service",{service:this.url});}await this.source.load();this.source.sourceJSON&&(this.sourceJSON=this.source.sourceJSON,this.read(this.source.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}))}).then(()=>K.ensureLayerCredential(this,"load",a));this.addResolvingPromise(d);return Promise.resolve(this)}get createQueryVersion(){this.commitProperty("definitionExpression");
this.commitProperty("timeExtent");this.commitProperty("timeOffset");this.commitProperty("geometryType");this.commitProperty("capabilities");return(this._get("createQueryVersion")??0)+1}get parsedUrl(){const a=m.urlToObject(this.url);null!=a&&null!=this.layerId&&(a.path=m.join(a.path,this.layerId.toString()));return a}createQuery(){const a=new h,b=this.capabilities?.query;a.returnGeometry=!0;b&&(a.compactGeometryEnabled=b.supportsCompactGeometry,a.defaultSpatialReferenceEnabled=b.supportsDefaultSpatialReference);
a.outFields=["*"];const {timeOffset:d,timeExtent:g}=this;a.timeExtent=null!=d&&null!=g?g.offset(-d.value,d.unit):g||null;return a}getField(a){return this.fieldsIndex.get(a)}getFieldDomain(a,b){return this.fieldsIndex.get(a)?.domain}async queryFeatures(a,b){const d=await this.load();a=await d.source.queryFeatures(h.from(a)??d.createQuery(),b);if(a?.features)for(const g of a.features)g.layer=g.sourceLayer=d.footprintLayer;return a}async queryObjectIds(a,b){return(await this.load()).source.queryObjectIds(h.from(a)??
this.createQuery(),b)}async queryFeatureCount(a,b){return(await this.load()).source.queryFeatureCount(h.from(a)??this.createQuery(),b)}async queryExtent(a,b){return(await this.load()).source.queryExtent(h.from(a)??this.createQuery(),b)}serviceSupportsSpatialReference(a){return this.loaded&&M.serviceSupportsSpatialReference(this,a)}read(a,b){super.read(a,b);let d=a.footprintLayer;d||"service"!==b?.origin||(d={layerDefinition:{drawingInfo:y.createDrawingInfo(a.geometryType)}});this.footprintLayer.read(d,
b)}_fetchFirstValidLayerId(a){return n(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:a}).then(b=>{if((b=b.data)&&Array.isArray(b.layers))return b.layers.find(d=>"Catalog Layer"===d.type)?.id})}};e.__decorate([f.property({readOnly:!0})],c.prototype,"createQueryVersion",null);e.__decorate([f.property({...k.fields,json:{origins:{service:{name:"fields"}}}})],c.prototype,"fields",void 0);e.__decorate([f.property(k.fieldsIndex)],c.prototype,"fieldsIndex",
void 0);e.__decorate([f.property({json:{read:!1,write:!1}})],c.prototype,"footprintLayer",void 0);e.__decorate([f.property()],c.prototype,"itemSourceField",void 0);e.__decorate([f.property()],c.prototype,"itemTypeField",void 0);e.__decorate([f.property()],c.prototype,"layers",void 0);e.__decorate([f.property({value:"CatalogLayer",type:["CatalogLayer"]})],c.prototype,"operationalLayerType",void 0);e.__decorate([f.property()],c.prototype,"outFields",void 0);e.__decorate([f.property({readOnly:!0})],
c.prototype,"parsedUrl",null);e.__decorate([f.property()],c.prototype,"source",void 0);e.__decorate([f.property({json:{read:!1}})],c.prototype,"type",void 0);return c=e.__decorate([t.subclass("esri.layers.CatalogLayer")],c)});