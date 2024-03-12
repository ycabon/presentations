// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../request ../../core/arrayUtils ../../core/JSONSupport ../../core/Loadable ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/accessorSupport/decorators/subclass ./arcgisLayerUrl ./Contingency ./ContingencyConstraintViolation ./ContingentValue ./ContingentValuesResult ./FieldGroup ./fieldUtils ./Subtype".split(" "),function(y,z,D,t,J,A,M,N,K,B,E,F,r,L,C,G,H){var w;t=w=class extends t.JSONSupportMixin(J){constructor(a){super(a);
this.request=z;this.fieldGroupDefinitions=this.fieldGroups=null}initialize(){}get subtypeFieldName(){const {layer:a}=this;return"subtype-group"===a.type?a.subtypeField:a.typeIdField}static async createLoadedLayerContingentValuesCache(a){await a.load();if(void 0===a.layerId)return null;var b=a.sourceJSON.hasContingentValuesDefinition;if(b)return(new w({layer:a})).load();if(void 0===b){b=B.parse(a.url);if(null==b)return null;b=b.url.path;if((await w._staticFetchEnterpriseFeatureRoot(b)).supportsQueryDataElements&&
(b=await w._staticFetchEnterpriseFieldGroup(b,a.layerId.toString())))return b=b.map(c=>({name:c.name,isEditingRestrictive:c.isEditingRestrictive,fields:c.fieldNames.names.map(d=>a.fieldsIndex.normalizeFieldName(d))})),(new w({layer:a,fieldGroupDefinitions:b})).load()}return null}async load(a){const b=this.layer.load(a).then(()=>this._initializeContingentValues(this.fieldGroupDefinitions,a));this.addResolvingPromise(b);return this}validateContingencyConstraints(a,b){const c=Object.keys(a),d=[],e=[];
for(const l of this.fieldGroups){const h=l.isEditingRestrictive?"error":"warning";if(b&&!l.fields.some(g=>b.includes(g)))continue;if(!l.fields.every(g=>c.includes(g))){e.push(new F({fieldGroup:l,type:h}));continue}let m=!1;const p=a[this.subtypeFieldName];var f=l.contingencies.filter(g=>!g.isRetired&&g.subtype?g.subtype.code===p:!0);for(const g of f){f=!0;for(const q in g.values){const n=g.values[q];if("any"!==n.objectType)if("null"===n.objectType){if(null!=a[q]){f=!1;break}}else if("code"===n.objectType){if(a[q]!==
n.codedValue.code){f=!1;break}}else if("range"===n.objectType){const k=a[q];if(k<n.minValue||k>n.maxValue){f=!1;break}}}if(f){m=!0;break}}m||d.push(new F({fieldGroup:l,type:h}))}return{invalid:d,incomplete:e}}getContingentValues(a,b,c=!1){const d=a[this.subtypeFieldName],e=void 0!==d&&null!==d,f={};let l=[];const h=this.fieldGroups.filter(p=>p.fields.includes(b));l.push(new r({objectType:"any"}));for(const p of h){let g=[];var m=p.contingencies.filter(k=>!k.isRetired&&(k.subtype&&e?k.subtype.code===
d:!0));let q=!1;const n={};for(const k of m){let u;m=!0;for(const x in k.values){const v=k.values[x];if(b===x)u=v,q=q||"range"===v.objectType;else if(void 0!==a[x]&&"any"!==v.objectType)if("null"===v.objectType)null!==a[x]&&(m=!1);else if("code"===v.objectType)a[x]!==v.codedValue.code&&(m=!1);else if("range"===v.objectType){const I=a[x];if(I<v.minValue||I>v.maxValue)m=!1}}if(u&&m){if("any"===u.objectType){g.length=0;g.push(u);break}m=this._generateKey(u);n[m]||g.push(u);n[m]=!0}}q&&(g=this._joinRange(g));
f[p.name]=g;l=c?this._filterIntersection(l,g):[]}1===h.length&&c&&(l=[]);return new L({contingentValuesAllGroups:l,contingentValuesByFieldGroup:f})}_generateKey(a){switch(a.objectType){case "any":return"@any@";case "null":return"@null@";case "code":return a.codedValue.name+a.codedValue.code.toString();case "range":return a.minValue.toString()+"-"+a.maxValue.toString()}}_joinRange(a){a.sort((e,f)=>"null"===e.objectType?-1:"null"===f.objectType?1:e.minValue-f.minValue);let b,c;const d=[];for(const e of a)"null"===
e.objectType?d.push(e):null==b||null==c?(b=e.minValue,c=e.maxValue):c<e.minValue?(d.push(new r({objectType:"range",minValue:b,maxValue:c})),b=e.minValue,c=e.maxValue):c<e.maxValue&&(c=e.maxValue);d.push(new r({objectType:"range",minValue:b,maxValue:c}));return d}_filterIntersection(a,b){if(0===a.length||0===b.length)return[];if("any"===a[0].objectType)return b;if("any"===b[0].objectType)return a;const c="range"===b[0].objectType||"range"===b[1]?.objectType;return"range"===a[0].objectType||"range"===
a[1]?.objectType||c?this._intersectRanges(a,b):this._intersectValues(a,b)}_intersectRanges(a,b){const c=[];let d=0;for(const e of a)for(;d<b.length;d++){const f=b[d];if("null"===e.objectType&&"null"===f.objectType)c.push(new r({objectType:"null"}));else if("null"===e.objectType)break;else if("null"===f.objectType)continue;if(e.maxValue<f.minValue)break;if(e.maxValue===f.minValue){c.push(new r({objectType:"range",minValue:e.maxValue,maxValue:f.minValue}));break}if(!(e.minValue>f.maxValue))if(e.minValue===
f.maxValue)c.push(new r({objectType:"range",minValue:e.minValue,maxValue:f.maxValue}));else{a=e.minValue>f.minValue?e.minValue:f.minValue;if(e.maxValue<f.maxValue){c.push(new r({objectType:"range",minValue:a,maxValue:e.maxValue}));break}c.push(new r({objectType:"range",minValue:a,maxValue:f.maxValue}))}}return c}_intersectValues(a,b){const c=[];for(const d of a)b.some(e=>{if(d.objectType===e.objectType)switch(d.objectType){case "any":case "null":return!0;case "code":return d.codedValue.code===e.codedValue.code&&
d.codedValue.name===e.codedValue.name}return!1})&&c.push(d);return c}static async _staticFetchEnterpriseFeatureRoot(a,b){return z(a,{responseType:"json",query:{f:"json"},...b}).then(c=>c.data)}static async _staticFetchEnterpriseFieldGroup(a,b,c){return z(`${a}/queryDataElements`,{responseType:"json",query:{layers:JSON.stringify([b]),f:"json"},...c}).then(d=>d.data.layerDataElements?.[0].dataElement.fieldGroups)}async _initializeContingentValues(a,b){a=a??await this._fetchFieldGroupDefs(b);this.fieldGroups=
0===a.length?[]:await this._fetchContingentValues(a,b)}async _fetchFieldGroupDefs(a){if(void 0===this.layer.layerId)return[];const b=this.layer.sourceJSON,c=this.layer.layerId.toString(),d=B.parse(this.layer.url).url.path;return b.hasContingentValuesDefinition?(await this._fetchAGOLFieldGroup(d,c,a)).map(e=>({name:e.name,isEditingRestrictive:e.restrictive,fields:e.fields.map(f=>this.layer.fieldsIndex.normalizeFieldName(f))})):void 0!==b.hasContingentValuesDefinition?[]:this._fetchEnterpriseFeatureRoot(d,
a).then(async e=>e.supportsQueryDataElements?(await this._fetchEnterpriseFieldGroup(d,c,a)).map(f=>({name:f.name,isEditingRestrictive:f.isEditingRestrictive,fields:f.fieldNames.names.map(l=>this.layer.fieldsIndex.normalizeFieldName(l))})):[])}async _fetchAGOLFieldGroup(a,b,c){return z(`${a}/${b}/fieldgroups`,{responseType:"json",query:{f:"json"},...c}).then(d=>d.data.fieldGroups)}async _fetchEnterpriseFieldGroup(a,b,c){return w._staticFetchEnterpriseFieldGroup(a,b,c)}async _fetchEnterpriseFeatureRoot(a,
b){return w._staticFetchEnterpriseFeatureRoot(a,b)}async _fetchContingentValues(a,b){if(void 0===this.layer.layerId)return[];const c=this.layer.sourceJSON,d=this.layer.layerId.toString(),e=B.parse(this.layer.url).url.path;if(c.hasContingentValuesDefinition)return b=await this._fetchAGOLContingentValues(e,d,b),this._constructFieldGroupsAGOL(a,b);b=await this._fetchEnterpriseContingentValues(e,d,b);return this._constructFieldGroupsEnterprise(a,b)}_constructFieldGroupsAGOL(a,b){return a.map(c=>{const d=
b.contingentValuesDefinition.fieldGroups.find(e=>e.name===c.name);if(d){let e=[];e=b.contingentValuesDefinition.hasSubType?this._parseAGOLFieldGroupSubtype(c,b,d.subTypes):this._parseAGOLFieldGroup(c,b,d.contingentValues);return new C({name:c.name,isEditingRestrictive:c.isEditingRestrictive,fields:c.fields,contingencies:e})}return null}).filter(D.isSome)}_parseAGOLFieldGroupSubtype(a,b,c){let d=[];c?.forEach(e=>{const f=this._getSubtypeAGOL(e.name);d=d.concat(this._parseAGOLFieldGroup(a,b,e.contingentValues,
f))});return d}_parseAGOLFieldGroup(a,b,c,d=null){const e=[];for(const f of c??[])c=this._parseAGOLContingency(f,a,b,d),e.push(c);return e}_parseAGOLContingency(a,b,c,d){const e=a.id,f=a.retired?1===a.retired:!1,l={};for(let m=0,p=0;m<b.fields.length;m++){const g=b.fields[m];var h=c.typeCodes[a.types[m]];if("Code"===h){let q=a.values[p];p++;const n=this._getDomain(d,g);"string"===this.layer.getField(g)?.type&&(h=c.stringDicts.find(k=>k.domain===n?.name))&&(q=h.entries[q]);h=n?.codedValues.find(k=>
k.code===q);h=new r({codedValue:h,objectType:"code"});l[g]=h}else"Range"===h?(h=a.values[p],p++,h=new r({minValue:h.range[0],maxValue:h.range[1],objectType:"range"}),l[g]=h):"Any"===h?(h=new r({objectType:"any"}),l[g]=h):(h=new r({objectType:"null"}),l[g]=h)}return new E({id:e,isRetired:f,subtype:d,values:l})}_constructFieldGroupsEnterprise(a,b){const c=b.fieldGroups;return a.map(d=>{var e=c.find(f=>f.name===d.name);return e?(e=e.contingencies.map(f=>{const l=f.id,h=f.isRetired||!1,m=this._getSubtypeEnterprise(f.subtypeCode),
p={};for(let q=0;q<d.fields.length;q++){const n=d.fields[q];let k=f.values[q];if("number"===typeof k||"string"===typeof k){var g=this._getDomain(m,n);const u=this.layer.getField(n);G.isStringField(u)?k=b.stringDictionary[k]:G.isDateField(u)&&(k=(new Date(`${k}+00:00`)).getTime());g=g?.codedValues.find(x=>x.code===k);g=new r({codedValue:g,objectType:"code"});p[n]=g}else"object"===typeof k?(g=new r({minValue:k.minValue,maxValue:k.maxValue,objectType:"range"}),p[n]=g):k?(g=new r({objectType:"any"}),
p[n]=g):(g=new r({objectType:"null"}),p[n]=g)}return new E({id:l,isRetired:h,subtype:m,values:p})}),new C({name:d.name,isEditingRestrictive:d.isEditingRestrictive,fields:d.fields,contingencies:e})):null}).filter(D.isSome)}async _fetchEnterpriseContingentValues(a,b,c){return z(`${a}/queryContingentValues`,{responseType:"json",query:{layers:JSON.stringify([b]),f:"json"},...c}).then(d=>d.data.contingentValueSets?.[0])}async _fetchAGOLContingentValues(a,b,c){return z(`${a}/${b}/contingentValues`,{responseType:"json",
query:{f:"json"},...c}).then(d=>d.data)}_getSubtypeEnterprise(a){var b=this.layer.sourceJSON;let c;b.subtypes&&(b=b.subtypes.find(d=>d.code===a),c=H.fromJSON(b));return c||null}_getSubtypeAGOL(a){var b=this.layer.sourceJSON;let c;b.subtypes&&(b=b.subtypes.find(d=>d.name===a),c=H.fromJSON(b));return c||null}_findDomainByFieldName(a,b){return(a=a.domains)?([,a]=Object.entries(a).find(([c])=>c.trim().toLowerCase()===b.trim().toLowerCase())||[],a||null):null}_getDomain(a,b){a=a?this._findDomainByFieldName(a,
b):this.layer.getFieldDomain(b);return"inherited"===a?.type?this.layer.getFieldDomain(b):a}};y.__decorate([A.property({constructOnly:!0})],t.prototype,"layer",void 0);y.__decorate([A.property({constructOnly:!0})],t.prototype,"request",void 0);y.__decorate([A.property({type:[C]})],t.prototype,"fieldGroups",void 0);y.__decorate([A.property({constructOnly:!0})],t.prototype,"fieldGroupDefinitions",void 0);y.__decorate([A.property()],t.prototype,"subtypeFieldName",null);return t=w=y.__decorate([K.subclass("esri.layers.support.LayerContingentValuesCache")],
t)});