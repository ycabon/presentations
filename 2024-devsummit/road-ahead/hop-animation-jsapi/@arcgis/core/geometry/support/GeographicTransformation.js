/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import t from"./GeographicTransformationStep.js";class s{static cacheKey(t,s){return[t.wkid?.toString()??"-1",t.wkt?.toString()??"",t.wkt2?.toString()??"",s.wkid?.toString()??"-1",s.wkt?.toString()??"",s.wkt2?.toString()??""].join()}static fromGE(e){const i=new s;let n="";for(const s of e.steps){const e=t.fromGE(s);i.steps.push(e),n+=e.uid.toString()+","}return i._cachedProjection={},i._gtlistentry=null,i._chain=n,i}constructor(s){if(this.steps=[],this._cachedProjection={},this._chain="",this._gtlistentry=null,s?.steps)for(const e of s.steps)e instanceof t?this.steps.push(e):this.steps.push(new t({wkid:e.wkid,wkt:e.wkt,isInverse:e.isInverse}))}getInverse(){const t=new s;t.steps=[];for(let s=this.steps.length-1;s>=0;s--){const e=this.steps[s];t.steps.push(e.getInverse())}return t}getGTListEntry(){let t="";for(const s of this.steps)t+=s.uid.toString()+",";return t!==this._chain&&(this._gtlistentry=null,this._cachedProjection={},this._chain=t),this._gtlistentry}assignCachedGe(t,e,i){this._cachedProjection[s.cacheKey(t,e)]=i}getCachedGeTransformation(t,e){let i="";for(const t of this.steps)i+=t.uid.toString()+",";i!==this._chain&&(this._gtlistentry=null,this._cachedProjection={},this._chain=i);const n=this._cachedProjection[s.cacheKey(t,e)];return void 0===n?null:n}}export{s as default};
