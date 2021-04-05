import { aA as u, U, E as f, y as e, A as i } from './_virtual:index-325c676c.js';
import { l, p } from './LayerView2D-163643b1.js';
import { Q } from './GraphicsView2D-0d92cd71.js';
import './Container-a3da1052.js';
import './mat4f32-a4d1c0af.js';
import './quantizationUtils-521d4bba.js';
import './json-dc26b8a4.js';
import './quickselect-da3bccc8.js';
import './shapingUtils-979c101c.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-18a166ec.js';
import './MaterialKey-1f691632.js';
import './visualVariablesUtils-b16ad397.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-aca64697.js';
import './VertexBuffer-7e4dc683.js';
import './CircularArray-5e553ebf.js';
import './TurboLine-3d061ef1.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-eb99525b.js';
import './TileContainer-5e3a44d3.js';
import './WGLContainer-a4103f3d.js';
import './ShaderCompiler-b7ec7313.js';
import './Program-9517ac59.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-0da62ba9.js';
import './FeatureSetReader-48a5eb37.js';
import './centroid-6105d00e.js';
import './graphicsUtils-ea233ef6.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let h=class extends(l(p)){constructor(){super(...arguments),this._handles=new u,this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,s){if(this.suspended||!this.graphicsViews.length)return U();const i=this.graphicsViews.map((r=>r.hitTest(e,s)));return f(i).then((e=>e.filter(((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const s of this.graphicsViews)s.processUpdate(e);}attach(){this.layer.featureCollections.forEach((e=>{const s=new Q({view:this.view,graphics:e.source,requestUpdateCallback:()=>this.requestUpdate()});s.renderer=e.renderer,this._popupTemplates.set(s,e.popupTemplate),this.graphicsViews.push(s),this.container.addChild(s.container);}));}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy(),e.view=null,e.renderer=null;this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}};h=e([i("esri.views.2d.layers.RouteLayerView2D")],h);var c=h;

export default c;
