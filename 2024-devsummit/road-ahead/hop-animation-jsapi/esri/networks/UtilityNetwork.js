// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("require ../chunks/tslib.es6 ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/subclass ../layers/FeatureLayer ../layers/support/featureQueryAll ./Network ./RulesTable ./support/NamedTraceConfiguration ./support/NetworkSystemLayers ./support/TerminalConfiguration ./support/TraceJobInfo ./support/typeUtils ../rest/support/Query".split(" "),function(m,q,r,k,O,P,A,B,C,D,E,F,G,z,H,t,I){const v=a=>Object.freeze(Object.defineProperty({__proto__:null,
default:a},Symbol.toStringTag,{value:"Module"}));k=class extends D{constructor(a){super(a);this.sharedNamedTraceConfigurations=[];this.type="utility"}get serviceTerritoryFeatureLayerId(){return this.dataElement?.serviceTerritoryFeatureLayerId??null}get networkSystemLayers(){return new G({rulesTableId:this.sourceJSON?.systemLayers.rulesTableId,rulesTableUrl:this.sourceJSON?`${this.featureServiceUrl}/${this.sourceJSON?.systemLayers.rulesTableId}`:null,subnetworksTableId:this.sourceJSON?.systemLayers.subnetworksTableId,
subnetworksTableUrl:this.sourceJSON?`${this.featureServiceUrl}/${this.sourceJSON?.systemLayers.subnetworksTableId}`:null,dirtyAreasLayerId:this.sourceJSON?.systemLayers.dirtyAreasLayerId,dirtyAreasLayerUrl:this.sourceJSON?`${this.featureServiceUrl}/${this.sourceJSON?.systemLayers.dirtyAreasLayerId}`:null})}get terminalConfigurations(){return this.dataElement?.terminalConfigurations.map(a=>z.fromJSON(a))||[]}get domainNetworkNames(){return this.dataElement?.domainNetworks.map(a=>a.domainNetworkName)||
[]}get _utilityLayerList(){const a=new Set;this.dataElement?.domainNetworks?.map(d=>{d.edgeSources.map(c=>{a.add(c.layerId)});d.junctionSources.map(c=>{a.add(c.layerId)})});return a}async load(a){this.addResolvingPromise(super.load(a));this.addResolvingPromise(this._loadNamedTraceConfigurationsFromNetwork(a));return this}getTerminalConfiguration(a){let d=null,c=null;var b=a.layer;let e=null;if("feature"===b?.type){if(e=b.layerId,null===e)return null}else if("subtype-sublayer"===b?.type){if(e=b?.parent?.layerId??
null,null===e)return null}else return null;b=a.attributes;if(null==b)return null;for(const g of Object.keys(b))"ASSETGROUP"===g.toUpperCase()&&(d=a.getAttribute(g)),"ASSETTYPE"===g.toUpperCase()&&(c=a.getAttribute(g));if(!this.dataElement)return null;let f=null;a=this.dataElement.domainNetworks;for(var n of a)if(a=n.junctionSources?.find(g=>g.layerId===e))if(a=a.assetGroups?.find(g=>g.assetGroupCode===d))if(a=a.assetTypes?.find(g=>g.assetTypeCode===c)){f=a.terminalConfigurationId;break}return null!=
f?(n=this.dataElement.terminalConfigurations?.find(g=>g.terminalConfigurationId===f))?z.fromJSON(n):null:null}getTierNames(a){return this.dataElement?.domainNetworks.find(d=>d.domainNetworkName===a)?.tiers.map(d=>d.name)||[]}async getRulesTable(){this._sharedRulesTable||(this._sharedRulesTable=this._createRulesTable());return await this._sharedRulesTable}isUtilityLayer(a){return this._utilityLayerList.has(a.layerId)&&(a.url?.startsWith(this.featureServiceUrl)??!1)}async queryAssociations(a){const [{queryAssociations:d},
{default:c}]=await Promise.all([new Promise((b,e)=>m(["../rest/networks/queryAssociations"],b,e)),new Promise((b,e)=>m(["../rest/networks/support/QueryAssociationsParameters"],f=>b(v(f)),e))]);a=c.from(a);a.gdbVersion=this.gdbVersion;a.moment=this.historicMoment;return(await d(this.networkServiceUrl,a)).associations}async synthesizeAssociationGeometries(a){const [{synthesizeAssociationGeometries:d},{default:c}]=await Promise.all([new Promise((b,e)=>m(["../rest/networks/synthesizeAssociationGeometries"],
b,e)),new Promise((b,e)=>m(["../rest/networks/support/SynthesizeAssociationGeometriesParameters"],f=>b(v(f)),e))]);a=c.from(a);a.gdbVersion=this.gdbVersion;a.moment=this.historicMoment;return d(this.networkServiceUrl,a)}async trace(a){const [{trace:d},{default:c}]=await Promise.all([new Promise((b,e)=>m(["../rest/networks/trace"],b,e)),new Promise((b,e)=>m(["../rest/networks/support/TraceParameters"],f=>b(v(f)),e))]);a=c.from(a);a.gdbVersion=this.gdbVersion;a.moment=this.historicMoment;return d(this.networkServiceUrl,
a)}async submitTraceJob(a){const [{submitTraceJob:d},{default:c}]=await Promise.all([new Promise((b,e)=>m(["../rest/networks/trace"],b,e)),new Promise((b,e)=>m(["../rest/networks/support/TraceParameters"],f=>b(v(f)),e))]);a=c.from(a);a.gdbVersion=this.gdbVersion;a.moment=this.historicMoment;a=await d(this.networkServiceUrl,a);return new H({statusUrl:a})}async _loadNamedTraceConfigurationsFromNetwork(a){if(0!==this.sharedNamedTraceConfigurations?.length){var d=this.sharedNamedTraceConfigurations.map(c=>
c.globalId);a=await this.queryNamedTraceConfigurations({globalIds:d},a);for(const c of this.sharedNamedTraceConfigurations)if(d=a?.find(b=>b.globalId===c.globalId))d=d.write({},{origin:"service"}),c.read(d,{origin:"service"})}}async _createRulesTable(){const a=new B({url:this.networkSystemLayers.rulesTableUrl});await a.load();var d=this.dataElement?.domainNetworks;if(!d)return null;const c=d.flatMap(b=>[...b.edgeSources,...b.junctionSources]);d=(await this._queryRulesTable(a)).map(b=>this._hydrateRuleInfo(a,
c,b));return new E({layer:a,rules:d})}async _queryRulesTable(a){const d=new I({where:"1\x3d1",outFields:["*"]});return(await C.queryAllJSON(a,d)).features}_hydrateRuleInfo(a,d,c){var b=a.fieldsIndex;a=b.get("RULETYPE");var e=b.get("CREATIONDATE"),f=b.get("FROMNETWORKSOURCEID"),n=b.get("FROMASSETGROUP"),g=b.get("FROMASSETTYPE"),w=b.get("FROMTERMINALID"),x=b.get("TONETWORKSOURCEID"),l=b.get("TOASSETGROUP");const J=b.get("TOASSETTYPE"),K=b.get("TOTERMINALID"),L=b.get("VIANETWORKSOURCEID"),M=b.get("VIAASSETGROUP"),
N=b.get("VIAASSETTYPE");b=b.get("VIATERMINALID");a=c.attributes[a.name];e=new Date(c.attributes[e.name]);c=[{networkSourceId:c.attributes[f.name],assetGroupId:c.attributes[n.name],assetTypeId:c.attributes[g.name],terminalId:c.attributes[w.name]},{networkSourceId:c.attributes[x.name],assetGroupId:c.attributes[l.name],assetTypeId:c.attributes[J.name],terminalId:c.attributes[K.name]},{networkSourceId:c.attributes[L.name],assetGroupId:c.attributes[M.name],assetTypeId:c.attributes[N.name],terminalId:c.attributes[b.name]}];
let p;(function(h){h[h.from=0]="from";h[h.to=1]="to";h[h.via=2]="via"})(p||={});f={ruleType:a,creationDate:e};for(const h of[p.from,p.to,p.via]){if(a!==t.RuleType.RTEdgeJunctionEdgeConnectivity&&h===p.via)continue;const y=c[h];n=d.find(u=>u.sourceId===y.networkSourceId);g=n?.assetGroups.find(u=>u.assetGroupCode===y.assetGroupId);w=g?.assetTypes.find(u=>u.assetTypeCode===y.assetTypeId);x=this._getTerminal(a,w,y);if(a===t.RuleType.RTContainment||a===t.RuleType.RTAttachment)x=null;l="";switch(h){case p.from:l=
"from";break;case p.to:l="to";break;case p.via:l="via"}f[`${l}NetworkSource`]=n;f[`${l}AssetGroup`]=g;f[`${l}AssetType`]=w;f[`${l}Terminal`]=x?.toJSON()}return f}_getTerminal(a,d,c){if(a===t.RuleType.RTAttachment||a===t.RuleType.RTContainment)return null;const b=d?.terminalConfigurationId;return this.terminalConfigurations?.find(e=>e.id===b)?.terminals?.find(e=>e.id===c.terminalId)??null}};q.__decorate([r.property({type:[F],json:{origins:{"web-map":{read:{source:"traceConfigurations"},write:{target:"traceConfigurations"}},
service:{read:{source:"traceConfigurations"}}},read:!1}})],k.prototype,"sharedNamedTraceConfigurations",void 0);q.__decorate([r.property({type:["utility"],readOnly:!0,json:{read:!1,write:!1}})],k.prototype,"type",void 0);q.__decorate([r.property({readOnly:!0})],k.prototype,"serviceTerritoryFeatureLayerId",null);q.__decorate([r.property({readOnly:!0})],k.prototype,"networkSystemLayers",null);q.__decorate([r.property({readOnly:!0})],k.prototype,"terminalConfigurations",null);q.__decorate([r.property({readOnly:!0})],
k.prototype,"domainNetworkNames",null);return k=q.__decorate([A.subclass("esri.networks.UtilityNetwork")],k)});