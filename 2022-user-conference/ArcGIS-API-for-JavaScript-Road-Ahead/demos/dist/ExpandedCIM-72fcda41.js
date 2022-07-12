import { b as E, S } from './Utils-9723b65e.js';
import { f } from './MaterialKey-a43b2cc5.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
const s={marker:E.MARKER,fill:E.FILL,line:E.LINE,text:E.TEXT};class l{constructor(e,l,n,r){const c={minScale:l?.minScale,maxScale:l?.maxScale},m=i(c);this.layers=e,this.data=l,this.hash=this._createHash()+m,this.rendererKey=n;const o={isOutline:!1,placement:null,symbologyType:S.DEFAULT,vvFlags:n};for(const t of e){const e=s[t.type];o.isOutline="line"===t.type&&t.isOutline,t.materialKey=f(e,o),t.maxVVSize=r,t.scaleInfo=c,t.templateHash+=m;}}get type(){return "expanded-cim"}_createHash(){let e="";for(const t of this.layers)e+=t.templateHash;return e}}function i(e){return e.minScale||e.maxScale?e.minScale+"-"+e.maxScale:""}

export { l };
