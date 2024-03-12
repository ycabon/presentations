// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["./lang","./Logger","./Message"],function(e,f,g){class c extends g{constructor(a,b,d){super(a,b,d)}toJSON(){if(null!=this.details)try{return{name:this.name,message:this.message,details:JSON.parse(JSON.stringify(this.details,(a,b)=>{if(b&&"object"===typeof b&&"function"===typeof b.toJSON)return b;try{return e.clone(b)}catch(d){return"[object]"}}))}}catch(a){throw f.getLogger("esri.core.Error").error(a),a;}return{name:this.name,message:this.message,details:this.details}}static fromJSON(a){return new c(a.name,
a.message,a.details)}}c.prototype.type="error";return c});