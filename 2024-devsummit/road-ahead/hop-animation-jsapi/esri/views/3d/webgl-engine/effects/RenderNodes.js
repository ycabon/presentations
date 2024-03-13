// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/Logger","../../../../core/PooledArray"],function(g,l,m){class n{constructor(a){this._context=a;this._nodes=new m}destroy(){this._nodes.forEach(a=>this.remove(a));this._nodes.clear()}add(a){this._nodes.push(a)}remove(a){this._nodes.remove(a)?.destroy()}produces(a){return this._nodes.some(({produces:b})=>b===a)}require(a,b){return null==b?this._nodes.reduce((c,{consumes:f})=>c+(f.required.includes(a)?1:0),0):this._nodes.reduce((c,{consumes:f,produces:d})=>c+(f.required.includes(a)&&
d===b?1:0),0)}render(a,b){const c=a.name,f=this._nodes.filter(({produces:d})=>d===c);if(0===f.length)return a;b.set(c,a);f.forEach(d=>{const h=[];for(const e of d.consumes.required){const k=b.get(e);if(!k)return;h.push(k)}try{const e=d.doRender(h,this._context);e&&e!==a&&(a.release(),a=e,b.set(c,a))}catch(e){l.getLogger(d).errorOnce(e)}});return a}}g.RenderNodes=n;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});