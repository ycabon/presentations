// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ./geohashUtils ../geometry/SpatialReference ../layers/graphics/featureConversionUtils ../layers/graphics/OptimizedGeometry ../layers/graphics/data/projectionSupport ../views/2d/layers/features/aggregation/AccumulatedStatistics".split(" "),function(w,z,x,u,v,y,A){class t{static create(a,c,d,f){a=A.AccumulatedStatistics.create(a);const b=Array(32);for(let e=0;e<b.length;e++)b[e]=null;return new t(a,c,d,f,b)}constructor(a,c,d,f,b){this._statistics=a;this.xNode=c;this.yNode=d;this.depth=
f;this.children=b;this._objectIds=new Set;this._yGeohashTotal=this._xGeohashTotal=this._yWorldTotal=this._xWorldTotal=this._count=0;this.next=null}get id(){return`${this.xNode}.${this.yNode}`}get objectIds(){return this._objectIds}clone(){const a=new t(this._statistics.clone(),this.xNode,this.yNode,this.depth,this.children);a._count=this._count;a._xWorldTotal=this._xWorldTotal;a._yWorldTotal=this._yWorldTotal;a._xGeohashTotal=this._xGeohashTotal;a._yGeohashTotal=this._yGeohashTotal;a.next=this.next;
a.cachedFeature=this.cachedFeature;a._objectIds=new Set(this._objectIds);return a}insert(a,c,d,f,b,e){this._count+=1;this._xWorldTotal+=c;this._yWorldTotal+=d;this._xGeohashTotal+=f;this._yGeohashTotal+=b;this._statistics.insert(a,e);this._objectIds.add(a.getObjectId())}merge(a){if(0!==a._count){this._count+=a._count;this._xWorldTotal+=a._xWorldTotal;this._yWorldTotal+=a._yWorldTotal;this._xGeohashTotal+=a._xWorldTotal;this._yGeohashTotal+=a._yWorldTotal;this._statistics.merge(a._statistics);for(const c of a._objectIds.values())this._objectIds.add(c)}}getGeometry(a,
c){const d=this._getLngLatBounds(),[f,b,e,m]=d;a=y.project({rings:[[[f,b],[f,m],[e,m],[e,b],[f,b]]]},x.WGS84,a);a=u.convertFromPolygon(new v,a,!1,!1);return null!=c?u.quantizeOptimizedGeometry(new v,a,!1,!1,"esriGeometryPolygon",c,!1,!1):a}getGeometryCentroid(a,c){const d=this._getLngLatBounds(),[f,b,e,m]=d;a=y.project({x:(f+e)/2,y:(b+m)/2},x.WGS84,a);a=u.convertFromPoint(new v,a);return null!=c?u.quantizeOptimizedGeometry(new v,a,!1,!1,"esriGeometryPoint",c,!1,!1):a}getAttributes(){const a={aggregateId:this.id};
for(const c of this._statistics.values())a[c.field.name]=c.value;a.aggregateCount=this._count;return a}_getLngLatBounds(){var a=this.depth;const c=Math.ceil(a/2);a=Math.floor(a/2);return z.decodeGeohashXY({geohashX:this.xNode<<30-(3*c+2*a),geohashY:this.yNode<<30-(2*c+3*a)},this.depth)}}class B{constructor(a){this._fields=a;this._root=t.create(this._fields,0,0,0)}destroy(){}insert(a,c,d,f,b,e,m){let n=this._root,l=0,p=0,q=0;for(;null!==n;){n.insert(a,c,d,f,b,m);if(l>=e)break;var h=Math.ceil((l+1)/
2),k=Math.floor((l+1)/2);const g=1-l%2;var r=30-(3*h+2*k);h=30-(2*h+3*k);r=(f&7*g+3*(1-g)<<r)>>r;h=(b&3*g+7*(1-g)<<h)>>h;k=r+h*(8*g+4*(1-g));const C=2*g+3*(1-g);p=p<<3*g+2*(1-g)|r;q=q<<C|h;null==n.children[k]&&(n.children[k]=t.create(this._fields,p,q,l+1));l+=1;n=n.children[k]}}putBins(a,c){for(const d of this.getNodes(c))(c=a.get(d.id))?c.merge(d):a.set(d.id,d.clone())}getNodes(a){const c=[],{geohashBounds:d,level:f}=a;for(a=this._root;null!==a;){var b=a.depth,e=a.xNode,m=a.yNode;if(b>=f)c.push(a),
a=a.next;else{var n=Math.ceil((b+1)/2),l=Math.floor((b+1)/2);b=1-b%2;var p=30-(3*n+2*l),q=30-(2*n+3*l),h=~((1<<p)-1),k=~((1<<q)-1);e<<=3*b+2*(1-b);m<<=2*b+3*(1-b);n=Math.max(e,(d.xLL&h)>>p);l=Math.max(m,(d.yLL&k)>>q);p=Math.min(e+8*b+4*(1-b),(d.xTR&h)>>p);q=Math.min(m+4*b+8*(1-b),(d.yTR&k)>>q);for(h=k=null;l<=q;l++)for(let r=n;r<=p;r++){const g=a.children[r-e+(l-m)*(8*b+4*(1-b))];g&&(k||(k=g,k.next=a.next),h&&(h.next=g),h=g,g.next=a.next)}a=k||a.next}}return c}}w.GeohashCell=t;w.GeohashTree=B;Object.defineProperty(w,
Symbol.toStringTag,{value:"Module"})});