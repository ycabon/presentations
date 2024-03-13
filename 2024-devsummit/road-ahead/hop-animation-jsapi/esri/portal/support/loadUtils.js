// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../layers/support/associatedFeatureServiceUtils"],function(d,l){function e(b){const a={id:b.id,name:b.name};"Oriented Imagery Layer"===b.type&&(a.layerType="OrientedImageryLayer");return a}function f(b){if(!b)return null;const {layers:a,tables:c}=b;return a?.length?a[0]:c?.length?c[0]:null}d.createSublayerData=e;d.getCatalogLayerIds=function(b){return b?.layers?.filter(({layerType:a})=>"CatalogLayer"===a).map(({id:a})=>a)};d.getFirstLayerOrTable=f;d.getFirstLayerOrTableId=function(b){const {layers:a,
tables:c}=b;return a?.length?a[0].id:c?.length?c[0].id:null};d.getNumLayersAndTables=function(b){return(b?.layers?.length??0)+(b?.tables?.length??0)};d.getOrientedImageryLayerIds=function(b){return b?.layers?.filter(({layerType:a})=>"OrientedImageryLayer"===a).map(({id:a})=>a)};d.getSubtypeGroupLayerIds=function(b){const a=[];b?.layers?.forEach(c=>{"SubtypeGroupLayer"===c.layerType&&a.push(c.id)});return a};d.populateSceneServiceItemData=async function(b,a,c){if(!b?.url)return a??{};a??={};if(!a.layers){const g=
await c.fetchServiceMetadata(b.url);a.layers=g.layers?.map(e)}const {serverUrl:h,portalItem:k}=await l.findAssociatedFeatureService(b.url,{sceneLayerItem:b,customParameters:f(a)?.customParameters}).catch(()=>({serverUrl:null,portalItem:null}));if(null==h)return a.tables=[],a;!a.tables&&k&&(b=await k.fetchData(),b?.tables?a.tables=b.tables.map(e):(c=await c.fetchServiceMetadata(h,{customParameters:f(b)?.customParameters}),a.tables=c?.tables?.map(e)));if(a.tables)for(const g of a.tables)g.url=`${h}/${g.id}`;
return a};d.preprocessFSItemData=async function(b,a,c){if(null==b?.layers||null==b?.tables)a=await c.fetchServiceMetadata(a,{customParameters:f(b)?.customParameters}),b=b||{},b.layers=b.layers||a?.layers?.map(e),b.tables=b.tables||a?.tables?.map(e);return b};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});