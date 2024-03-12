// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["../../../core/ObjectPool","./TileKey"],function(k,l){class f{constructor(){this.spans=[]}acquire(a){this.lodInfo=a}release(){this.lodInfo=null;this.spans.length=0}*keys(){const a=this.lodInfo;for(const {row:g,colFrom:d,colTo:c}of this.spans)for(let b=d;b<=c;b++){const h=a.getWorldForColumn(b);yield new l(a.level,g,a.normalizeCol(b),h)}}forEach(a,g){const {spans:d,lodInfo:c}=this,{level:b}=c;if(0!==d.length)for(const {row:h,colFrom:m,colTo:n}of d)for(let e=m;e<=n;e++)a.call(g,b,h,c.normalizeCol(e),
c.getWorldForColumn(e))}}f.pool=new k(f);return f});