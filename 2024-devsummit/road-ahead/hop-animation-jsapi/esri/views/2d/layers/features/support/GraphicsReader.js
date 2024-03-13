// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../geometry/support/jsonUtils ../../../../../layers/graphics/featureConversionUtils ../../../../../layers/graphics/OptimizedGeometry ../../../engine/webgl/definitions ./FeatureSetReader".split(" "),function(g,k,h,l,d,m){class f extends m.FeatureSetReader{static from(a,b,c){return new f(a,b,c)}constructor(a,b,c){super(c);this._items=a;this._tile=b;this._index=-1;this._cachedGeometry=null;a=b.lod;a.wrap&&(this._wrappingInfo={worldSizeX:a.worldSize[0]})}get _current(){return this._items[this._index]}getItem(){return this._current}getZOrder(){return this._current.zOrder}getMeshWriters(){return this._current.symbolResource?.symbolInfo.meshWriters??
[]}field(a){return this.readAttribute(a)}get geometryType(){const a=k.getJsonType(this._current.geometry);return"esriGeometryPoint"===a?"esriGeometryMultipoint":a}getCursor(){return this.copy()}copy(){const a=new f(this._items,this._tile,this.metadata);this.copyInto(a);return a}copyInto(a){super.copyInto(a);a._cachedGeometry=this._cachedGeometry;a._index=this._index}get fields(){throw Error("Fields reading not supported to graphics.");}get hasFeatures(){return!!this._items.length}get hasNext(){return this._index+
1<this._items.length}get exceededTransferLimit(){throw Error("InternalError: exceededTransferLimit not implemented for graphics.");}get hasZ(){return!1}get hasM(){return!1}getInTransform(){return this._tile.transform}getSize(){return this._items.length}getAttributeHash(){let a="";for(const b in this._current.attributes)a+=this._current.attributes[b];return a}getObjectId(){return this._items[this._index].objectId}getDisplayId(){return this._current.displayId}setDisplayId(a){throw Error("InternalError: Setting displayId not supported for graphics.");
}setIndex(a){this._index=a}getIndex(){return this._index}next(){for(this._cachedGeometry=null;++this._index<this._items.length&&!this._getExists(););return this._index<this._items.length}readGeometryArea(){throw Error("InternalError: readGeometryArea not supported for graphics.");}_readGeometry(){if(!this._cachedGeometry){const a=h.convertFromGeometry(this._current.projectedGeometry,this.hasZ,this.hasM);this._cachedGeometry=h.quantizeOptimizedGeometry(new l,a,this.hasZ,this.hasM,this.geometryType,
this._tile.transform);if(!this._cachedGeometry)return null;this._wrapGeometry(this._cachedGeometry)}return this._cachedGeometry}_wrapGeometry(a){if(this._wrappingInfo){var {worldSizeX:b}=this._wrappingInfo;if(a.isPoint)1===b?(a.coords.push(512,0),a.coords.push(-1024,0),a.lengths.push(3)):this._wrapVertex(a.coords,0,2,b);else if("esriGeometryMultipoint"===this.geometryType)if(1===b){b=a.coords.slice();b[0]-=512;const c=a.coords.slice();c[0]+=512;a.coords.push(...b,...c);b=a.lengths[0];a.lengths.push(b,
b)}else this._wrapVertex(a.coords,0,2,b)}}_wrapVertex(a,b,c,e){b*=c;c=a[b];c<-(d.tileSize*(e-2))?a[b]=c+d.tileSize*e:c>d.tileSize*(e-1)&&(a[b]=c-d.tileSize*e)}_readX(){const a=this._readGeometry();return null!=a?a.coords[0]:0}_readY(){const a=this._readGeometry();return null!=a?a.coords[1]:0}_readServerCentroid(){return null}_readAttribute(a,b){b=this._current.attributes[a];if(void 0!==b)return b;a=a.toLowerCase();for(const c in this._current.attributes)if(c.toLowerCase()===a)return this._current.attributes[c]}_readAttributes(){return this._current.attributes}}
g.GraphicsReader=f;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});