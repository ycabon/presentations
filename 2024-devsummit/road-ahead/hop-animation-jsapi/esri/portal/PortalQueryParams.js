// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/Accessor ../core/jsonMap ../core/lang ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/accessorSupport/decorators/subclass ../geometry/Extent ../geometry/SpatialReference ../geometry/support/webMercatorUtils".split(" "),function(c,a,l,m,d,v,w,n,p,q,r){var g;const t=new l.JSONMap({avgRating:"avg-rating",numRatings:"num-ratings",numComments:"num-comments",numViews:"num-views"});a=g=class extends a{constructor(b){super(b);this.categories=
null;this.disableExtraQuery=!1;this.filter=this.extent=null;this.num=10;this.sortField=this.query=null;this.start=1}get sortOrder(){return this._get("sortOrder")||"asc"}set sortOrder(b){"asc"!==b&&"desc"!==b||this._set("sortOrder",b)}clone(){return new g({categories:this.categories?m.clone(this.categories):null,disableExtraQuery:this.disableExtraQuery,extent:this.extent?this.extent.clone():null,filter:this.filter,num:this.num,query:this.query,sortField:this.sortField,sortOrder:this.sortOrder,start:this.start})}toRequestOptions(b,
u){let h=[];this.categories&&(h=this.categories.map(f=>Array.isArray(f)?JSON.stringify(f):f));let k="";if(this.extent){var e=r.project(this.extent,q.WGS84);null!=e&&(k=`${e.xmin},${e.ymin},${e.xmax},${e.ymax}`)}e=this.query;!this.disableExtraQuery&&b.extraQuery&&(e="("+e+")"+b.extraQuery);b={categories:h,bbox:k,q:e,filter:this.filter,num:this.num,sortField:null,sortOrder:null,start:this.start};this.sortField&&(b.sortField=this.sortField.split(",").map(f=>t.toJSON(f.trim())).join(","),b.sortOrder=
this.sortOrder);return{query:{...u,...b}}}};c.__decorate([d.property()],a.prototype,"categories",void 0);c.__decorate([d.property()],a.prototype,"disableExtraQuery",void 0);c.__decorate([d.property({type:p})],a.prototype,"extent",void 0);c.__decorate([d.property()],a.prototype,"filter",void 0);c.__decorate([d.property()],a.prototype,"num",void 0);c.__decorate([d.property()],a.prototype,"query",void 0);c.__decorate([d.property()],a.prototype,"sortField",void 0);c.__decorate([d.property()],a.prototype,
"sortOrder",null);c.__decorate([d.property()],a.prototype,"start",void 0);return a=g=c.__decorate([n.subclass("esri.portal.PortalQueryParams")],a)});