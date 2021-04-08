import { bu as e, w as g } from './_virtual_index-634cbc09.js';
import { j } from './TilemapCache-ca8ca6f2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class r{constructor(e){if(e instanceof j)this._tilemapCache=e;else {if(!e||!("index"in e))throw new Error("Invalid tilemap!");this._tilemap=e.index;}}dataKey(t,r){if(this._tilemapCache){const{level:i,row:o,col:a}=t,s=new e(t);return this._tilemapCache.fetchAvailabilityUpsample(i,o,a,s,r).then((()=>(s.world=t.world,s))).catch((t=>{if(g(t))throw t;return null}))}return this._getIndexedDataKey(t)}forEach(e,t,l,r,i){this._callback=i,this._maxLevel=t+e,this._forEach(this._tilemap,t,l,r);}_forEach(e,t,l,r){0!==e&&(this._callback(t,l,r),t!==this._maxLevel&&"object"==typeof e&&(this._forEach(e[0],t+1,2*l,2*r),this._forEach(e[1],t+1,2*l,2*r+1),this._forEach(e[2],t+1,2*l+1,2*r),this._forEach(e[3],t+1,2*l+1,2*r+1)));}_getIndexedDataKey(e$1){const t=[e$1];if(e$1.level<0||e$1.row<0||e$1.col<0||e$1.row>>e$1.level>0||e$1.col>>e$1.level>0)return Promise.resolve(null);let r=e$1;for(;0!==r.level;)r=new e(r.level-1,r.row>>1,r.col>>1,r.world),t.push(r);let i,o,a=this._tilemap,s=t.pop();if(1===a)return Promise.resolve(s);for(;t.length;)if(i=t.pop(),o=(1&i.col)+((1&i.row)<<1),a){if(0===a[o]){s=null;break}if(1===a[o]){s=i;break}s=i,a=a[o];}return Promise.resolve(s)}}

export { r };
