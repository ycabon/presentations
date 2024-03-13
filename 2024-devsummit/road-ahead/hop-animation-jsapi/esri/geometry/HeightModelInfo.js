// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/arrayUtils ../core/jsonMap ../core/JSONSupport ../core/unitUtils ../core/Warning ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer".split(" "),function(e,d,n,t,p,q,l,m,x,h,u,v){function r(a,b){return new q("height-unit:unsupported",`Height unit of value '${a}' is not supported`,b)}var f;const k=n.strict()({orthometric:"gravity-related-height",
gravity_related_height:"gravity-related-height",ellipsoidal:"ellipsoidal"});m=k.jsonValues.slice();d.removeUnordered(m,"orthometric");const g=n.strict()({meter:"meters",foot:"feet","us-foot":"us-feet","clarke-foot":"clarke-feet","clarke-yard":"clarke-yards","clarke-link":"clarke-links","sears-yard":"sears-yards","sears-foot":"sears-feet","sears-chain":"sears-chains","benoit-1895-b-chain":"benoit-1895-b-chains","indian-yard":"indian-yards","indian-1937-yard":"indian-1937-yards","gold-coast-foot":"gold-coast-feet",
"sears-1922-truncated-chain":"sears-1922-truncated-chains","50-kilometers":"50-kilometers","150-kilometers":"150-kilometers"});d=f=class extends t.JSONSupport{constructor(a){super(a);this.heightModel="gravity-related-height";this.heightUnit="meters";this.vertCRS=null}writeHeightModel(a,b,c){return k.write(a,b,c)}readHeightModel(a,b,c){if(b=k.read(a))return b;if(c?.messages){b=c.messages;var w=b.push;a=new q("height-model:unsupported",`Height model of value '${a}' is not supported`,{context:c});w.call(b,
a)}return null}readHeightUnit(a,b,c){if(b=g.read(a))return b;c?.messages&&c.messages.push(r(a,{context:c}));return null}readHeightUnitService(a,b,c){if(b=p.unitFromRESTJSON(a)||g.read(a))return b;c?.messages&&c.messages.push(r(a,{context:c}));return null}readVertCRS(a,b){return b.vertCRS||b.ellipsoid||b.geoid}clone(){return new f({heightModel:this.heightModel,heightUnit:this.heightUnit,vertCRS:this.vertCRS})}equals(a){return a?this===a?!0:this.heightModel===a.heightModel&&this.heightUnit===a.heightUnit&&
this.vertCRS===a.vertCRS:!1}static deriveUnitFromSR(a,b){b=p.getVerticalUnitStringForSR(b);return new f({heightModel:a.heightModel,heightUnit:b??void 0,vertCRS:a.vertCRS})}write(a,b){b={origin:"web-scene",...b};return super.write(a,b)}static fromJSON(a){if(!a)return null;const b=new f;b.read(a,{origin:"web-scene"});return b}};e.__decorate([l.property({type:k.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:m,default:"ellipsoidal"}}}})],d.prototype,"heightModel",void 0);e.__decorate([v.writer("web-scene",
"heightModel")],d.prototype,"writeHeightModel",null);e.__decorate([h.reader(["web-scene","service"],"heightModel")],d.prototype,"readHeightModel",null);e.__decorate([l.property({type:g.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:g.jsonValues,write:g.write}}}})],d.prototype,"heightUnit",void 0);e.__decorate([h.reader("web-scene","heightUnit")],d.prototype,"readHeightUnit",null);e.__decorate([h.reader("service","heightUnit")],d.prototype,"readHeightUnitService",null);e.__decorate([l.property({type:String,
constructOnly:!0,json:{origins:{"web-scene":{write:!0}}}})],d.prototype,"vertCRS",void 0);e.__decorate([h.reader("service","vertCRS",["vertCRS","ellipsoid","geoid"])],d.prototype,"readVertCRS",null);return d=f=e.__decorate([u.subclass("esri.geometry.HeightModelInfo")],d)});