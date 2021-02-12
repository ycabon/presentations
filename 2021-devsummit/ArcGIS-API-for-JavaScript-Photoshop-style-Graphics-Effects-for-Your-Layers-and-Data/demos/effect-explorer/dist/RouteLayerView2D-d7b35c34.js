import { as as u, U, w as f, q as e, r as i } from './index.js';
import { l, p } from './LayerView2D-a323da6b.js';
import { Q } from './GraphicsView2D-2d165f43.js';
import './Container-afb7bc3e.js';
import './mat4f32-a4d1c0af.js';
import './_commonjsHelpers-34398bae.js';
import './quantizationUtils-c0611e45.js';
import './json-dc26b8a4.js';
import './quickselect-1f1691b9.js';
import './shapingUtils-dcbb2c5b.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-ea321f1e.js';
import './RenderingContext-d31ba1e0.js';
import './MaterialKey-54202b75.js';
import './visualVariablesUtils-f62b50fc.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-d3a1727d.js';
import './VertexBuffer-4c2c0271.js';
import './CircularArray-99513797.js';
import './TurboLine-21fa90f1.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-3c223b17.js';
import './TileContainer-e5b4ea06.js';
import './WGLContainer-f415d29f.js';
import './VertexArrayObject-b943938d.js';
import './ShaderCompiler-833038a1.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-c1444bb2.js';
import './FeatureSetReader-4c248b92.js';
import './centroid-6105d00e.js';
import './graphicsUtils-9af6492a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let h=class extends(l(p)){constructor(){super(...arguments),this._handles=new u,this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,s){if(this.suspended||!this.graphicsViews.length)return U();const i=this.graphicsViews.map((r=>r.hitTest(e,s)));return f(i).then((e=>e.filter(((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const s of this.graphicsViews)s.processUpdate(e);}attach(){this.layer.featureCollections.forEach((e=>{const s=new Q({view:this.view,graphics:e.source,requestUpdateCallback:()=>this.requestUpdate()});s.renderer=e.renderer,this._popupTemplates.set(s,e.popupTemplate),this.graphicsViews.push(s),this.container.addChild(s.container);}));}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy(),e.view=null,e.renderer=null;this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}};h=e([i("esri.views.2d.layers.RouteLayerView2D")],h);var c=h;

export default c;
