// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/ArrayPool ../../../../../geometry/Extent ../../../../../geometry/support/aaBoundingRect ../../../../../rest/support/QuantizationParameters ../../../tiling/TileKey".split(" "),function(d,f,g,h,k,l){class e{constructor(b,a){this.key=new l(0,0,0,0);this.bounds=h.create();this.objectIds=new Set;this.key.set(a);a=b.getLODInfoAt(this.key);this.tileInfoView=b;this.tileInfoView.getTileBounds(this.bounds,this.key,!0);this.resolution=a.resolution;this.scale=a.scale;this.level=
a.level}get lod(){return this.tileInfoView.getLODInfoAt(this.key)}get id(){return this.key.id}get extent(){return g.fromBounds(this.bounds,this.tileInfoView.tileInfo.spatialReference)}get transform(){return{originPosition:"upperLeft",scale:[this.resolution,this.resolution],translate:[this.bounds[0],this.bounds[3]]}}get arcadeEvaluationOptions(){return{$view:{scale:this.scale}}}createChildTiles(){const b=this.key.getChildKeys(),a=f.acquire();for(let c=0;c<b.length;c++)a[c]=new e(this.tileInfoView,
b[c]);return a}getQuantizationParameters(){return k.fromJSON({mode:"view",originPosition:"upperLeft",tolerance:this.resolution,extent:{xmin:this.bounds[0],ymin:this.bounds[1],xmax:this.bounds[2],ymax:this.bounds[3],spatialReference:this.tileInfoView.tileInfo.spatialReference}})}}d.Tile=e;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});