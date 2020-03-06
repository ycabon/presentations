// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../../../../../core/tsSupport/assignHelper ../../../../../core/tsSupport/generatorHelper ../../../../../core/tsSupport/awaiterHelper ../../../../../geometry ../../../../../core/has ../../../../../core/maybe ../../../../../core/screenUtils ../../../../../geohash/GeohashTree ../../../../../geohash/geohashUtils ../../../../../geometry/support/spatialReferenceUtils ../../../../../geometry/support/webMercatorUtils ../../../../../layers/graphics/OptimizedFeature ../../../../../layers/graphics/OptimizedGeometry ../../../../../layers/graphics/data/FeatureStore ../../../../../layers/graphics/data/projectionSupport ../../../../../layers/graphics/data/QueryEngine ../../../../../layers/graphics/data/utils ../../../engine/webgl/definitions".split(" "),
function(F,G,H,y,I,J,z,U,k,N,O,x,P,D,Q,R,S,A,K,L,m){Object.defineProperty(G,"__esModule",{value:!0});var M=function(m){return k.andThen(m,function(d){return"cluster"!==d.type?null:y({},d,{clusterRadius:N.pt2px(d.clusterRadius/2)})})},T=function(k){function d(a,b,c,h,g){var f=this;b=new R.default([],[b,c]);f=k.call(this,b,h,null,a)||this;f.invalid=!1;f.canDelete=!1;f.geohashBoundsInfo=g;return f}H(d,k);Object.defineProperty(d.prototype,"count",{get:function(){return this.attributes.cluster_count},
enumerable:!0,configurable:!0});d.create=function(a,b,c,h,g,f,e){b=new d(b,c,h,f,e);b.localId=a.createLocalId(b.objectId,!0);b.tileLevel=g;return b};d.prototype.update=function(a,b,c,h,g){this.geometry.coords[0]=a;this.geometry.coords[1]=b;this.tileLevel=c;this.attributes=h;this.geohashBoundsInfo=g;this.referenceId=null;this.invalid=!1;return this};d.prototype.toJSON=function(){return{objectId:this.objectId,referenceId:this.referenceId,attributes:y({},this.attributes,{clusterId:this.objectId}),geometry:{x:this.geometry.coords[0],
y:this.geometry.coords[1]}}};return d}(Q.default);F=function(u){function d(a,b,c,h){a=u.call(this,a)||this;a._deferredDeletionQueue=[];a._invalidated=!1;a._aggregateFieldsHash=null;a._geohashLevel=0;a._aggregateValueRanges={};a._aggregateValueRangesChanged=!1;a._clusters=new Map;a._tiles=new Map;a._spatialReference=b;a._attributeStore=c;a._featureReduction=M(h);a._projectionSupportCheck=A.checkProjectionSupport(b,z.SpatialReference.WGS84);return a}H(d,u);d.prototype.update=function(a,b){return J(this,
void 0,void 0,function(){var c,h,g,f,e,d,q=this;return I(this,function(B){switch(B.label){case 0:return c=this._featureReduction,h=k.andThen(b.featureReduction,M),g=b.aggregateFields.reduce(function(a,b){return a+JSON.stringify(b)},""),f=null===c&&b.featureReduction,e=g!==this._aggregateFieldsHash,d=f||e,[4,this._projectionSupportCheck];case 1:B.sent();this._featureReduction=h;this._aggregateFieldsHash=g;this._aggregateValueRanges={};this._invalidated=!0;if(k.isNone(h))return this._tree=null,[2];
k.isSome(c)&&c.clusterRadius!==h.clusterRadius&&this._clusters.forEach(function(a){return a.canDelete=!0});d&&(this._tree=new O.GeohashTree(b.aggregateFields),this._unindexFeatures());(d||a)&&this._reindexFeatures();this._handleClusterUpdates();this._tiles.forEach(function(a){return q._getClustersForTile(a,0,h.clusterRadius,null,!1)});return[2]}})})};d.prototype._unindexFeatures=function(){this._featuresById.forEach(function(a){a.geohashIndexed=!1})};d.prototype._reindexFeatures=function(){var a=
this;this._featuresById.forEach(function(b){b.geohashX||b.geohashY||a._setGeohash(b);a._attributeStore.isVisible(b)?a._insertIntoIndex(b):a._removeFromIndex(b)})};d.prototype.onTileUpdate=function(a){var b=this,c=a.added;a=a.removed;if(c.length){var h=Math.max.apply(Math,c.map(function(a){return a.level}));this._setGeohashLevel(h);c.forEach(function(a){return b._tiles.set(a.key.id,a)})}if(!k.isNone(this._featureReduction)){var g=this._featureReduction.clusterRadius;a.forEach(function(a){b._tiles.delete(a.key.id);
b._markTileClustersForDeletion(a,g)})}};d.prototype.sweepClusters=function(){var a=this;this._clusters.forEach(function(b,c){b.canDelete&&(a._attributeStore.freeLocalId(b.objectId),a._clusters.delete(c))});for(var b=0,c=this._deferredDeletionQueue;b<c.length;b++)this._attributeStore.addLocalId(c[b]);this._deferredDeletionQueue=[]};d.prototype.executeTileQuery=function(a,b,c){return J(this,void 0,void 0,function(){var h,g,d;return I(this,function(e){switch(e.label){case 0:return k.isNone(this._featureReduction)?
[2,u.prototype.executeTileQuery.call(this,a,b,c)]:[4,this._projectionSupportCheck];case 1:return e.sent(),this._handleClusterUpdates(),h=this._featureReduction.clusterRadius,g=this._getTransforms(a,b),d=this._getClustersForTile(a,c.pixelBuffer,h,g),this._aggregateValueRangesChanged&&(this.events.emit("valueRangesChanged",{valueRanges:this._aggregateValueRanges}),this._aggregateValueRangesChanged=!1),[2,d]}})})};d.prototype.getAggregate=function(a){var b=null;this._clusters.forEach(function(c){c.localId===
a&&(b=c.toJSON())});return b};d.prototype.getAggregateValueRanges=function(){return this._aggregateValueRanges};d.prototype._getClustersForTile=function(a,b,c,h,g){var d=this;void 0===g&&(g=!0);b=Math.max(b,50);var e=2*c,E=new Set,q=this._getGeohashLevel(a.key.level),B=Math.pow(2,a.key.level)*Math.ceil(m.TILE_SIZE/e),p=Math.ceil(b/e)+2;c=Math.ceil(m.TILE_SIZE/e)+2*p;var l=a.key;b=Math.floor(l.col*m.TILE_SIZE/e)-p;e=Math.floor(l.row*m.TILE_SIZE/e)-p;p=b+c;c=e+c;for(var n=[],r=a.tileInfoView.getLODInfoAt(a.key.level),
v=b;v<=p;v++){b=function(b){var c,e,f=v;r.wrap&&(f=0>v?v+B:v%B);var p=r.wrap&&0>v,m=r.wrap&&v%B!==v;b=w._lookupCluster(r,a.key.level,f,b,q);if(k.isSome(b)){f=k.andThen(h,function(a){return p?a.left:m?a.right:a.tile});if(g&&k.isNone(f)||!b.count)return"continue";if(g&&1===b.count){var l=b.geohashBoundsInfo,t=l.xLL;e=l.yLL;c=l.xTR;var u=l.yTR,l=l.level,t=k.expect(w._tree).findSingleOccupancyNode(t,e,c,u,l),t=k.unwrap(t).getLngLatBounds(),l={x:t[0],y:t[1]};e={x:t[2],y:t[3]};var x=u=c=t=0;if(w._spatialReference.isWebMercator)c=
D.lngLatToXY(l.x,l.y),t=c[0],c=c[1],e=D.lngLatToXY(e.x,e.y),u=e[0],x=e[1];else{c=A.project(l,z.SpatialReference.WGS84,w._spatialReference);e=A.project(e,z.SpatialReference.WGS84,w._spatialReference);if(!c||!e)return"continue";t=c.x;c=c.y;u=e.x;x=e.y}var C=null;w.forEachInBounds([t,c,u,x],function(a){d._attributeStore.isVisible(a)&&(C=a)});if(!C)return"continue";f=L.getGeometry(w.geometryInfo,C.geometry,0,k.expect(f));t=y({},C.attributes,b.attributes);b.referenceId=C.localId;E.add(b.objectId);n.push(new K.Feature(t,
b.localId,f))}else g&&(E.add(b.objectId),f=L.getGeometry(w.geometryInfo,b.geometry,0,k.expect(f)),n.push(new K.Feature(b.attributes,b.localId,f)))}};for(var w=this,l=e;l<=c;l++)b(l)}return{features:n,objectIds:E}};d.prototype._getGeohashLevel=function(a){return Math.min(Math.ceil(a/2+2),12)};d.prototype._setGeohashLevel=function(a){var b=this,c=this._geohashLevel;a=this._getGeohashLevel(a);a=2*(Math.floor(a/2)+1)-1;var h=this._tree;this._geohashLevel=a;k.isNone(h)||(a>c?this._featuresById.forEach(function(a){a.geohashIndexed&&
(h.insert(a,b._geohashLevel,c+1),a.geohashIndexed=!0)}):a<c&&h.dropLevels(this._geohashLevel))};d.prototype._insertIntoIndex=function(a){a.geohashIndexed||(this._invalidated=!0,a.geohashIndexed=!0,k.expect(this._tree).insert(a,this._geohashLevel))};d.prototype._removeFromIndex=function(a){a.geohashIndexed&&(this._invalidated=!0,k.expect(this._tree).remove(a,this._geohashLevel),a.geohashIndexed=!1)};d.prototype._handleClusterUpdates=function(){var a=this;this._invalidated&&this._clusters.size&&this._clusters.forEach(function(b){k.isSome(b)&&
(b.invalid=b.invalid||a._invalidated)});this._invalidated=!1};d.prototype._getTransforms=function(a,b){var c={originPosition:"upperLeft",scale:[a.resolution,a.resolution],translate:[a.bounds[0],a.bounds[3]]};b=P.getInfo(b);if(!b)return{tile:c,left:null,right:null};var h=b.valid;b=h[0];var g=h[1],h=y({},c,{translate:[g,a.bounds[3]]});a=y({},c,{translate:[b-g+a.bounds[0],a.bounds[3]]});return{tile:c,left:h,right:a}};d.prototype._getClusterId=function(a,b,c){return(a&15)<<28|(b&16383)<<14|c&16383};d.prototype._markForDeletion=
function(a,b,c){a=this._getClusterId(a,b,c);this._clusters.has(a)&&(b=this._clusters.get(a),k.isSome(b)?b.canDelete=!0:this._clusters.delete(a))};d.prototype._getClusterBounds=function(a,b,c){if(k.isNone(this._featureReduction))return null;var h=this._featureReduction.clusterRadius,g=2*h;b=c%2?b*g:b*g+h;var f=c*g,h=f/m.TILE_SIZE;c=(b+g)/m.TILE_SIZE;g=(f-g)/m.TILE_SIZE;b=a.getXForColumn(b/m.TILE_SIZE);h=a.getYForRow(h);c=a.getXForColumn(c);a=a.getYForRow(g);return[b,h,c,a]};d.prototype._lookupCluster=
function(a,b,c,h,g){var f,e;if(k.isNone(this._featureReduction)||k.isNone(this._tree))return null;var d=this._getClusterId(b,c,h),q=this._clusters.get(d);if(q&&k.isSome(q)&&!q.invalid&&!q.canDelete)return q;var m=this._getClusterBounds(a,c,h);a=m[0];c=m[1];h=m[2];var m=m[3],p={x:a,y:c};e={x:h,y:m};var l=0,n=f=0,r=0;if(this._spatialReference.isWebMercator)f=D.xyToLngLat(p.x,p.y),l=f[0],f=f[1],e=D.xyToLngLat(e.x,e.y),n=e[0],r=e[1];else{f=A.project(p,this._spatialReference,z.SpatialReference.WGS84);
e=A.project(e,this._spatialReference,z.SpatialReference.WGS84);if(!f||!e)return null;l=f.x;f=f.y;n=e.x;r=e.y}p={geohashX:0,geohashY:0};e={geohashX:0,geohashY:0};x.setGeohashXY(p,f,l,g);x.setGeohashXY(e,r,n,g);f=p.geohashX;n=p.geohashY;r=e.geohashX;e=e.geohashY;l={xLL:f,yLL:n,xTR:r,yTR:e,level:g};n=this._tree.getRegionStatistics(f,n,r,e,g);g=n.count;f=n.xTotal;e=n.yTotal;f=g?f/g:0;e=g?e/g:0;k.isSome(q)&&q.canDelete&&(r=this._attributeStore.removeLocalId(q.objectId),this._deferredDeletionQueue.push(r));
r=k.isSome(q)&&!q.canDelete&&q.invalid;n=y({cluster_count:g},n.attributes);p=this._attributeStore;b=r?q.update(f,e,b,n,l):T.create(p,d,f,e,b,n,l);0===g&&(b.geometry.coords[0]=(a+h)/2,b.geometry.coords[1]=(c+m)/2);this._attributeStore.setAttributeData(b.localId,b,this.geometryInfo,null);this._clusters.set(d,b);this._updateAggregateValueRangeForCluster(b,b.tileLevel);return b};d.prototype._updateAggregateValueRangeForCluster=function(a,b){var c=this._aggregateValueRanges[b]||{minValue:Infinity,maxValue:0},
h=c.minValue,d=c.maxValue;c.minValue=Math.min(h,a.count);c.maxValue=Math.max(d,a.count);this._aggregateValueRanges[b]=c;if(h!==c.minValue||d!==c.maxValue)this._aggregateValueRangesChanged=!0};d.prototype._markTileClustersForDeletion=function(a,b){var c=2*b;b=Math.ceil(m.TILE_SIZE/c);for(var d=a.key,g=Math.floor(d.col*m.TILE_SIZE/c),c=Math.floor(d.row*m.TILE_SIZE/c),d=g;d<g+b;d++)for(var f=c;f<c+b;f++)this._markForDeletion(a.key.level,d,f)};d.prototype._setGeohash=function(a){var b=a.geometry;b&&b.coords.length&&
(b=A.project({x:b.coords[0],y:b.coords[1]},this._spatialReference,z.SpatialReference.WGS84))&&x.setGeohashXY(a,b.y,b.x,12)};d.prototype._add=function(a){var b=this._featuresById.get(a.objectId);u.prototype._add.call(this,a);k.isSome(this._featureReduction)&&k.isSome(this._tree)&&(b?(a.geohashIndexed=b.geohashIndexed,a.geohashX=b.geohashX,a.geohashY=b.geohashY):this._setGeohash(a),!a.geohashIndexed&&this._attributeStore.isVisible(a)&&this._insertIntoIndex(a))};d.prototype._remove=function(a){k.isSome(this._featureReduction)&&
k.isSome(this._tree)&&this._removeFromIndex(a);return u.prototype._remove.call(this,a)};return d}(S.default);G.ClusterStore=F});