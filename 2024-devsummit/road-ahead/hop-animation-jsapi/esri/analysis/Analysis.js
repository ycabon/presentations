// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/Accessor ../core/arrayUtils ../core/Clonable ../core/Identifiable ../core/JSONSupport ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/accessorSupport/decorators/subclass".split(" "),function(b,a,f,g,h,k,d,n,p,l){let m=0;a=class extends k.JSONSupportMixin(g.ClonableMixin(h.IdentifiableMixin(a))){constructor(e){super(e);this.id=`${Date.now().toString(16)}-analysis-${m++}`;this.title=null}get parent(){return this._get("parent")}set parent(e){const c=
this.parent;if(null!=c)switch(c.type){case "line-of-sight":case "dimension":c.releaseAnalysis(this);break;case "2d":case "3d":c.analyses.includes(this)&&c.analyses.remove(this)}this._set("parent",e)}get isEditable(){return this.requiredPropertiesForEditing.every(f.isSome)}};b.__decorate([d.property({type:String,constructOnly:!0,clonable:!1})],a.prototype,"id",void 0);b.__decorate([d.property({type:String})],a.prototype,"title",void 0);b.__decorate([d.property({clonable:!1,value:null})],a.prototype,
"parent",null);b.__decorate([d.property({readOnly:!0})],a.prototype,"isEditable",null);return a=b.__decorate([l.subclass("esri.analysis.Analysis")],a)});