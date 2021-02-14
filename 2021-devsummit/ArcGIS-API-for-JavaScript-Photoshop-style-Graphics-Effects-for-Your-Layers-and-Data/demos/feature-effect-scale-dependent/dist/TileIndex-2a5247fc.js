import { C as e, W as T, U } from './index.js';
import { L } from './TilemapCache-0d65488c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class p{constructor(e){if(e instanceof L)this._tilemapCache=e;else {if(!e||!("index"in e))throw new Error("Invalid tilemap!");this._tilemap=e.index;}}dataKey(t,l){if(this._tilemapCache){const{level:r,row:o,col:a}=t,h=new e(t);return this._tilemapCache.fetchAvailabilityUpsample(r,o,a,h,l).then((()=>(h.world=t.world,h))).catch((t=>{if(T(t))throw t;return null}))}return this._getIndexedDataKey(t)}forEach(e,t,l,i,r){this._callback=r,this._maxLevel=t+e,this._forEach(this._tilemap,t,l,i);}_forEach(e,t,l,i){0!==e&&(this._callback(t,l,i),t!==this._maxLevel&&"object"==typeof e&&(this._forEach(e[0],t+1,2*l,2*i),this._forEach(e[1],t+1,2*l,2*i+1),this._forEach(e[2],t+1,2*l+1,2*i),this._forEach(e[3],t+1,2*l+1,2*i+1)));}_getIndexedDataKey(e$1){const l=[e$1];if(e$1.level<0||e$1.row<0||e$1.col<0||e$1.row>>e$1.level>0||e$1.col>>e$1.level>0)return U(null);let r=e$1;for(;0!==r.level;)r=new e(r.level-1,r.row>>1,r.col>>1,r.world),l.push(r);let o,a,h=this._tilemap,s=l.pop();if(1===h)return U(s);for(;l.length;)if(o=l.pop(),a=(1&o.col)+((1&o.row)<<1),h){if(0===h[a]){s=null;break}if(1===h[a]){s=o;break}s=o,h=h[a];}return U(s)}}

export { p };
