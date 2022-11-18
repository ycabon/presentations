import { n6 as u, jq as i, dA as s, m as r, u as e, y, z as n$1, A as m } from './_virtual_index-1ea2035a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let n=0,l=class extends(u(i(s(m)))){constructor(e){super(e),this.id=`${Date.now().toString(16)}-analysis-${n++}`,this.title=null;}get parent(){return this._get("parent")}set parent(e){const t=this.parent;if(r(t))switch(t.type){case"line-of-sight":case"dimension":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this);}this._set("parent",e);}get isEditable(){return this.requiredPropertiesForEditing.every(r)}};e([y({type:String,constructOnly:!0,clonable:!1})],l.prototype,"id",void 0),e([y({type:String})],l.prototype,"title",void 0),e([y({constructOnly:!0})],l.prototype,"type",void 0),e([y({clonable:!1,value:null})],l.prototype,"parent",null),e([y({readOnly:!0})],l.prototype,"isEditable",null),e([y({readOnly:!0})],l.prototype,"requiredPropertiesForEditing",void 0),l=e([n$1("esri.analysis.Analysis")],l);const c=l;

export { c };
