// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/MapUtils ../../../core/maybe ../../../core/promiseUtils ../../../core/SetUtils ../../../geometry/support/quantizationUtils ../../../geometry/support/spatialReferenceUtils ../featureConversionUtils ./AttributesBuilder ./attributeSupport ./projectionSupport ./timeSupport ./utils".split(" "),function(C,z,A,J,K,L,M,p,N,D,w,O,G,P,H,Q,m){Object.defineProperty(z,
"__esModule",{value:!0});C=function(){function e(a,b,d){this.items=a;this.queryGeometry=b;this.definitionExpression=d.definitionExpression;this.geometryType=d.geometryType;this.hasM=d.hasM;this.hasZ=d.hasZ;this.objectIdField=d.objectIdField;this.spatialReference=d.spatialReference;this.fieldsIndex=d.fieldsIndex;this.timeInfo=d.timeInfo;this.featureAdapter=d.featureAdapter}Object.defineProperty(e.prototype,"size",{get:function(){return this.items.length},enumerable:!0,configurable:!0});e.prototype.createQueryResponse=
function(a){var b;b=a.outStatistics?a.outStatistics.some(function(a){return"exceedslimit"===a.statisticType})?this._createExceedsLimitQueryResponse(a):this._createStatisticsQueryResponse(a):this._createFeatureQueryResponse(a);a.returnQueryGeometry&&(w.isValid(a.outSR)&&!w.equals(this.queryGeometry.spatialReference,a.outSR)?b.queryGeometry=m.cleanFromGeometryEngine(A({spatialReference:a.outSR},H.project(this.queryGeometry,this.queryGeometry.spatialReference,a.outSR))):b.queryGeometry=m.cleanFromGeometryEngine(A({spatialReference:a.outSR},
this.queryGeometry)));return b};e.prototype.executeAttributesQuery=function(a){var b=P.getWhereClause(a.where,this.fieldsIndex);if(!b)return p.resolve(this);if(b.isStandardized){for(var d=0,h=[],f=0,c=this.items;f<c.length;f++){var g=c[f];b.testFeature(g,this.featureAdapter)&&(h[d++]=g)}b=new e(h,this.queryGeometry,this);b.definitionExpression=a.where;return p.resolve(b)}return p.reject(new TypeError("Where clause is not standardized"))};e.prototype.executeObjectIdsQuery=function(a){if(!a.objectIds||
!a.objectIds.length)return p.resolve(this);var b=N.createSetFromValues(a.objectIds),d=this.featureAdapter.getObjectId;return p.resolve(new e(this.items.filter(function(a){return b.has(d(a))}),this.queryGeometry,this))};e.prototype.executeTimeQuery=function(a){a=Q.getTimeOperator(this.timeInfo,a.timeExtent,this.featureAdapter);if(!M.isSome(a))return p.resolve(this);a=this.items.filter(a);return p.resolve(new e(a,this.queryGeometry,this))};e.prototype.filterLatest=function(){for(var a=this.timeInfo,
b=a.trackIdField,d=a.startTimeField,a=a.endTimeField||d,d=new Map,h=this.featureAdapter.getAttribute,f=0,c=this.items;f<c.length;f++){var g=c[f],k=h(g,b),q=h(g,a),x=d.get(k);(!x||q>h(x,a))&&d.set(k,g)}b=L.valuesOfMap(d);return p.resolve(new e(b,this.queryGeometry,this))};e.prototype.project=function(a){return K(this,void 0,void 0,function(){var b,d,h,f=this;return J(this,function(c){switch(c.label){case 0:if(!a||w.equals(this.spatialReference,a))return[2,this];b=this.featureAdapter;return[4,H.projectMany(this.items.map(function(a){return m.getGeometry(f,
b.getGeometry(a))}),this.spatialReference,a)];case 1:return d=c.sent(),h=d.map(function(a,c){return b.cloneWithGeometry(f.items[c],O.convertFromGeometry(a,f.hasZ,f.hasM))}),[2,new e(h,this.queryGeometry,{definitionExpression:this.definitionExpression,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,objectIdField:this.objectIdField,spatialReference:a,fieldsIndex:this.fieldsIndex,timeInfo:this.timeInfo,featureAdapter:this.featureAdapter})]}})})};e.prototype._createFeatureQueryResponse=function(a){var b=
this,d=this.items,h=this.geometryType,f=this.hasM,c=this.hasZ,g=this.objectIdField,k=this.spatialReference,q=a.outFields,e=a.outSR,t=a.quantizationParameters,l=a.resultRecordCount,u=a.resultOffset,n=a.returnZ,r=a.returnM,I=!1;null!=l&&null!=u&&(l=u+l,I=d.length>l,d=d.slice(u,Math.min(d.length,l)));q=q&&(-1<q.indexOf("*")?this.fieldsIndex.fields.slice():q.map(function(a){return b.fieldsIndex.get(a)}));return{exceededTransferLimit:I,features:this._createFeatures(a,d),fields:q,geometryType:h,hasM:f&&
r,hasZ:c&&n,objectIdFieldName:g,spatialReference:m.cleanFromGeometryEngine(e?e:k),transform:t&&D.toQuantizationTransform(t)||null}};e.prototype._createFeatures=function(a,b){var d=new G.default(a,this.featureAdapter,this.fieldsIndex),h=a.orderByFields,f=a.quantizationParameters,c=a.returnGeometry,g=a.returnCentroid,k=a.maxAllowableOffset,q=a.returnZ;a=a.returnM;var e=this.hasZ&&(void 0===q?!1:q),t=this.hasM&&(void 0===a?!1:a),q=[];a=0;if(b.length&&h&&h.length){var h=h[0].split(" "),l=h[0],u=this.fieldsIndex.get(l),
n=h[1]&&"desc"===h[1].toLowerCase();b.sort(function(a,b){a=d.getFieldValue(a,l,u);b=d.getFieldValue(b,l,u);if("number"===typeof a&&"number"===typeof b)return n?b-a:a-b;if("string"===typeof a&&"string"===typeof b)return a=a.toUpperCase(),b=b.toUpperCase(),(n?a>b:a<b)?-1:(n?a<b:a>b)?1:0})}if(c||g)if(f=D.toQuantizationTransform(f),c&&!g)for(g=0;g<b.length;g++)c=b[g],q[a++]={attributes:d.getAttributes(c),geometry:m.getGeometry(this,this.featureAdapter.getGeometry(c),k,f,e,t)};else if(!c&&g)for(k=0;k<
b.length;k++)c=b[k],q[a++]={attributes:d.getAttributes(c),centroid:m.transformCentroid(this,this.featureAdapter.getCentroid(c,this),f)};else for(g=0;g<b.length;g++)c=b[g],q[a++]={attributes:d.getAttributes(c),centroid:m.transformCentroid(this,this.featureAdapter.getCentroid(c,this),f),geometry:m.getGeometry(this,this.featureAdapter.getGeometry(c),k,f,e,t)};else for(k=0;k<b.length;k++)c=b[k],(e=d.getAttributes(c))&&(q[a++]={attributes:e});return q};e.prototype._createExceedsLimitQueryResponse=function(a){var b=
!1,d=Number.POSITIVE_INFINITY,h=Number.POSITIVE_INFINITY,b=Number.POSITIVE_INFINITY,f=0;for(a=a.outStatistics;f<a.length;f++){var c=a[f];if("exceedslimit"===c.statisticType){d=null!=c.maxPointCount?c.maxPointCount:Number.POSITIVE_INFINITY;h=null!=c.maxRecordCount?c.maxRecordCount:Number.POSITIVE_INFINITY;b=null!=c.maxVertexCount?c.maxVertexCount:Number.POSITIVE_INFINITY;break}}if("esriGeometryPoint"===this.geometryType)b=this.items.length>d;else if(this.items.length>h)b=!0;else var d=this.hasZ?this.hasM?
4:3:this.hasM?3:2,g=this.featureAdapter,b=this.items.reduce(function(a,b){b=g.getGeometry(b);return a+(b&&b.coords.length||0)},0)/d>b;return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(b)}}]}};e.prototype._createStatisticsQueryResponse=function(a){var b=new G.default(a,this.featureAdapter,this.fieldsIndex),d=a.outStatistics,h=[],f=[],c=a.groupByFieldsForStatistics;
a=a.having;for(var g=c&&c.length,c=g&&c[0],k=this.fieldsIndex.get(c),e=!k,x={},t={},l={},u={attributes:{}},n=0;n<d.length;n++){var r=d[n],p=r.outStatisticFieldName,m=r.statisticType,r="exceedslimit"!==m?r.onStatisticField:void 0,w=this.fieldsIndex.get(r),C=g&&(r===c||e)&&"count"===m;if(g){x[r]||(x[r]=this._calculateUniqueValues(b,c,k));var z=x[r],A;for(A in z){var v=z[A],B=v.count,E=v.data,y=v.items;if(!a||b.validateItems(y,a)){var v=t[E]||{attributes:{}},F=null;C?F=B:(B=this._calculateStatistics(y,
b,r,w),y="var"===m?"variance":m,F=B[y]);v.attributes[p]=F;v.attributes[e?"EXPR_1":c]=E;t[E]=v}}}else l[r]||(l[r]=this._calculateStatistics(this.items,b,r,w)),B=l[r],y="var"===m?"variance":m,u.attributes[p]=B[y];f.push({name:p,alias:p,type:"esriFieldTypeDouble"})}if(g)for(var D in t)h.push(t[D]);else h.push(u);return{fields:f,features:h}};e.prototype._calculateStatistics=function(a,b,d,h){for(var f=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,g=null,k=null,e=null,m=null,t=[],l=0,p=0;p<a.length;p++){var n=
b.getFieldValue(a[p],d,h);"string"===typeof n?l++:null==n||isNaN(n)||(g+=n,f=Math.min(f,n),c=Math.max(c,n),t.push(n),l++)}if(l){k=g/l;for(b=a=0;b<t.length;b++)n=t[b],a+=Math.pow(n-k,2);m=1<l?a/(l-1):0;e=Math.sqrt(m)}else c=f=null;return{avg:k,count:l,max:c,min:f,stddev:e,sum:g,variance:m}};e.prototype._calculateUniqueValues=function(a,b,d){for(var h={},f=0,c=this.items;f<c.length;f++){var g=c[f],e=a.getFieldValue(g,b,d);if(null==e||"string"===typeof e&&""===e.trim())e=null;null==h[e]?h[e]={count:1,
data:e,items:[g]}:(h[e].count++,h[e].items.push(g))}return h};return e}();z.default=C});