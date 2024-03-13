// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../core/jsonMap ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/decorators/cast ../../../core/accessorSupport/decorators/enumeration ../../../core/accessorSupport/decorators/reader ../../../core/accessorSupport/decorators/subclass ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/extensions/serializableProperty/reader ../Field ./MapLayerSource ./QueryTableDataSource ./RasterDataSource ./TableDataSource".split(" "),
function(a,b,h,q,e,g,k,r,t,l,x,y,z,A,B,C){function u(){v||=x.createTypeReader({types:m()});return v}function m(){w||={key:"type",base:null,typeMap:{"data-layer":a.DataLayerSource,"map-layer":z.MapLayerSource}};return w}var n,p;h=h.strict()({esriLeftInnerJoin:"left-inner-join",esriLeftOuterJoin:"left-outer-join"});a.JoinTableDataSource=n=class extends q.JSONSupport{constructor(c){super(c);this.type="join-table"}readLeftTableSource(c,d,f){return u()(c,d,f)}castLeftTableSource(c){return l.ensureOneOfType(m(),
c)}readRightTableSource(c,d,f){return u()(c,d,f)}castRightTableSource(c){return l.ensureOneOfType(m(),c)}clone(){const {leftTableKey:c,rightTableKey:d,leftTableSource:f,rightTableSource:D,joinType:E}=this,F={leftTableKey:c,rightTableKey:d,leftTableSource:f?.clone()??void 0,rightTableSource:D?.clone()??void 0,joinType:E};return new n(F)}};b.__decorate([k.enumeration({joinTable:"join-table"})],a.JoinTableDataSource.prototype,"type",void 0);b.__decorate([e.property({type:String,json:{write:!0}})],a.JoinTableDataSource.prototype,
"leftTableKey",void 0);b.__decorate([e.property({type:String,json:{write:!0}})],a.JoinTableDataSource.prototype,"rightTableKey",void 0);b.__decorate([e.property({json:{write:!0}})],a.JoinTableDataSource.prototype,"leftTableSource",void 0);b.__decorate([r.reader("leftTableSource")],a.JoinTableDataSource.prototype,"readLeftTableSource",null);b.__decorate([g.cast("leftTableSource")],a.JoinTableDataSource.prototype,"castLeftTableSource",null);b.__decorate([e.property({json:{write:!0}})],a.JoinTableDataSource.prototype,
"rightTableSource",void 0);b.__decorate([r.reader("rightTableSource")],a.JoinTableDataSource.prototype,"readRightTableSource",null);b.__decorate([g.cast("rightTableSource")],a.JoinTableDataSource.prototype,"castRightTableSource",null);b.__decorate([k.enumeration(h)],a.JoinTableDataSource.prototype,"joinType",void 0);a.JoinTableDataSource=n=b.__decorate([t.subclass("esri.layers.support.source.JoinTableDataSource")],a.JoinTableDataSource);let v=null,w=null;g={key:"type",base:null,typeMap:{"join-table":a.JoinTableDataSource,
"query-table":A.QueryTableDataSource,raster:B.RasterDataSource,table:C.TableDataSource}};a.DataLayerSource=p=class extends q.JSONSupport{constructor(c){super(c);this.type="data-layer"}clone(){const {fields:c,dataSource:d}=this;return new p({fields:c,dataSource:d})}};b.__decorate([k.enumeration({dataLayer:"data-layer"})],a.DataLayerSource.prototype,"type",void 0);b.__decorate([e.property({type:[y],json:{write:!0}})],a.DataLayerSource.prototype,"fields",void 0);b.__decorate([e.property({types:g,json:{write:!0}})],
a.DataLayerSource.prototype,"dataSource",void 0);a.DataLayerSource=p=b.__decorate([t.subclass("esri.layers.support.source.DataLayerSource")],a.DataLayerSource);a.DataLayerSource.from=l.ensureType(a.DataLayerSource);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});