import { m0 as c, bC as t, b8 as h, u as e, y, bJ as v, z as n$1 } from './_virtual_index-1ea2035a.js';
import { b } from './TileTreeDebugger-53267901.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let n=class extends b{constructor(t$1){super(t$1),this._watchUpdatingTracking=new c,this._handles=new t;}get updating(){return this._watchUpdatingTracking?.updating??!1}initialize(){const{featureTiles:t}=this.view;this._handles.add(t.addClient()),this._watchUpdatingTracking.addOnCollectionChange((()=>t?.tiles),(()=>this.update()),h);}destroy(){this._handles&&(this._handles.destroy(),this._handles=null),this._watchUpdatingTracking.destroy();}getTiles(){const t=t=>{const[e,r,i]=t.lij;return v.fromExtent(this.view.featureTiles.tilingScheme.getExtentGeometry(e,r,i))};return this.view.featureTiles.tiles.toArray().sort(((t,e)=>t.loadPriority-e.loadPriority)).map((e=>({...e,geometry:t(e)})))}};e([y()],n.prototype,"_watchUpdatingTracking",void 0),e([y()],n.prototype,"updating",null),e([y()],n.prototype,"view",void 0),n=e([n$1("esri.views.3d.layers.support.FeatureTileTree3DDebugger")],n);

export { n as FeatureTileTree3DDebugger };
