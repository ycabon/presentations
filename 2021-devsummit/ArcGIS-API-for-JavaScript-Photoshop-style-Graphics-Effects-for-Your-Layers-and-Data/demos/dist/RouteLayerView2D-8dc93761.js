import { aA as u, U, E as f, y as e, A as i } from './_virtual:index-3cfe80ed.js';
import { l, p } from './LayerView2D-57e1d9b0.js';
import { Q } from './GraphicsView2D-07823d1d.js';
import './Container-77c0b40a.js';
import './mat4f32-a4d1c0af.js';
import './quantizationUtils-b01f8cd7.js';
import './json-dc26b8a4.js';
import './quickselect-e027054e.js';
import './shapingUtils-82073fb7.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-7b430d1d.js';
import './MaterialKey-493fae21.js';
import './visualVariablesUtils-4bf7ba0e.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-31964d6f.js';
import './VertexBuffer-e387e241.js';
import './CircularArray-11b719a7.js';
import './TurboLine-66db23ef.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-c61e0fae.js';
import './TileContainer-657d3bf9.js';
import './WGLContainer-1770bca0.js';
import './ShaderCompiler-0e5c709a.js';
import './Program-57fde19e.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-421a40e7.js';
import './FeatureSetReader-2ac4bb8f.js';
import './centroid-6105d00e.js';
import './graphicsUtils-33fd835c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let h=class extends(l(p)){constructor(){super(...arguments),this._handles=new u,this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,s){if(this.suspended||!this.graphicsViews.length)return U();const i=this.graphicsViews.map((r=>r.hitTest(e,s)));return f(i).then((e=>e.filter(((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const s of this.graphicsViews)s.processUpdate(e);}attach(){this.layer.featureCollections.forEach((e=>{const s=new Q({view:this.view,graphics:e.source,requestUpdateCallback:()=>this.requestUpdate()});s.renderer=e.renderer,this._popupTemplates.set(s,e.popupTemplate),this.graphicsViews.push(s),this.container.addChild(s.container);}));}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy(),e.view=null,e.renderer=null;this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}};h=e([i("esri.views.2d.layers.RouteLayerView2D")],h);var c=h;

export default c;
