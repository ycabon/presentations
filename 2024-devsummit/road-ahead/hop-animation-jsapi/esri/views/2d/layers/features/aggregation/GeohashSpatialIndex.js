// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../geohash/GeohashTree","../../../../../geohash/geohashUtils"],function(d,k,l){class m{constructor(a){this._options=a;this._tree=new k.GeohashTree(a.fields)}insert(a){a=a.getCursor();const b={$view:{scale:0}};for(;a.next();)this._insertFeature(a,b)}putBins(a,b){this._tree.putBins(a,b)}_insertFeature(a,b){const {featureFilter:e,geohashLevel:f,spatialReference:n}=this._options;if(null===e||e.check(a)){var g=a.readXWorldSpace(),h=a.readYWorldSpace(),c=l.getGeohash(g,h,
f,n);c&&this._tree.insert(a,g,h,c[0],c[1],f,b)}}}d.GeohashSpatialIndex=m;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});