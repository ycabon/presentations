import { ee as i } from './index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class n{constructor(e,r){this._storage=new i,this._storage.maxSize=e,r&&this._storage.registerRemoveFunc("",r);}put(t,e){this._storage.put(t,e,1,1);}pop(t){return this._storage.pop(t)}get(t){return this._storage.get(t)}clear(){this._storage.clearAll();}destroy(){this._storage.clearAll();}}

export { n };
