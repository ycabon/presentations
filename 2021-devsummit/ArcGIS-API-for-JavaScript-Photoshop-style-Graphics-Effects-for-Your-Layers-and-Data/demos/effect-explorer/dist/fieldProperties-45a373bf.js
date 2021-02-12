import { i, eW as y, dd as w, cU as g } from './index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const s=i.getLogger("esri.layers.support.fieldProperties");function l(){return {fields:{type:[y],value:null},outFields:{type:[String],dependsOn:["fields"],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields");},get:function(){const e=this._userOutFields;if(!e||!e.length)return null;if(e.includes("*"))return ["*"];if(!this.fields)return e;for(const t of e){w(this.fields,t)||s.error("field-attributes-layer:invalid-field",`Invalid field ${t} found in outFields`,{layer:this,outFields:e});}return g(this.fields,e)}}}}

export { l };
