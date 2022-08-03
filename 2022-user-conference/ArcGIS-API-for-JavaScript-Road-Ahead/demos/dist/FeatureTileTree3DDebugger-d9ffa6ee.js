import { lc as c, by as t, b4 as h, bF as v, B as e, C as d, D as n$1 } from './_virtual_index-9b831d4a.js';
import { b } from './TileTreeDebugger-14f174e9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let n=class extends b{constructor(t$1){super(t$1),this.watchUpdatingTracking=new c,this.handles=new t;}initialize(){const{featureTiles:t}=this.view;this.handles.add(t.addClient()),this.watchUpdatingTracking.addOnCollectionChange((()=>t?.tiles),(()=>this.update()),h);}destroy(){this.handles&&(this.handles.destroy(),this.handles=null),this.watchUpdatingTracking.destroy();}getTiles(){const t=t=>{const[e,r,o]=t.lij;return v.fromExtent(this.view.featureTiles.tilingScheme.getExtentGeometry(e,r,o))};return this.view.featureTiles.tiles.toArray().sort(((t,e)=>t.loadPriority-e.loadPriority)).map((e=>({...e,geometry:t(e)})))}};e([d({readOnly:!0})],n.prototype,"watchUpdatingTracking",void 0),e([d({readOnly:!0,aliasOf:"watchUpdatingTracking.updating"})],n.prototype,"updating",void 0),e([d()],n.prototype,"view",void 0),n=e([n$1("esri.views.3d.layers.support.FeatureTileTree3DDebugger")],n);

export { n as FeatureTileTree3DDebugger };
