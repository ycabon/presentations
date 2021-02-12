import { as as u, U, w as f, q as e, r as i } from './index.js';
import { l, p } from './LayerView2D-7d632bf9.js';
import { Q } from './GraphicsView2D-aac2bc15.js';
import './Container-aff74082.js';
import './mat4f32-a4d1c0af.js';
import './_commonjsHelpers-34398bae.js';
import './quantizationUtils-e428adec.js';
import './json-dc26b8a4.js';
import './quickselect-1f1691b9.js';
import './shapingUtils-87458a4f.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-a8735f16.js';
import './RenderingContext-65298a94.js';
import './MaterialKey-9e164379.js';
import './visualVariablesUtils-aa4bb9a6.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-9c4f2842.js';
import './VertexBuffer-0de68176.js';
import './CircularArray-ace18093.js';
import './TurboLine-7e396736.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-7e56c667.js';
import './TileContainer-fd402c56.js';
import './WGLContainer-be0dfffa.js';
import './VertexArrayObject-4975422d.js';
import './ShaderCompiler-e329735c.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-8a9574b4.js';
import './FeatureSetReader-9e82c0c1.js';
import './centroid-6105d00e.js';
import './graphicsUtils-2d5bfdbd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let h=class extends(l(p)){constructor(){super(...arguments),this._handles=new u,this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,s){if(this.suspended||!this.graphicsViews.length)return U();const i=this.graphicsViews.map((r=>r.hitTest(e,s)));return f(i).then((e=>e.filter(((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const s of this.graphicsViews)s.processUpdate(e);}attach(){this.layer.featureCollections.forEach((e=>{const s=new Q({view:this.view,graphics:e.source,requestUpdateCallback:()=>this.requestUpdate()});s.renderer=e.renderer,this._popupTemplates.set(s,e.popupTemplate),this.graphicsViews.push(s),this.container.addChild(s.container);}));}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy(),e.view=null,e.renderer=null;this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}};h=e([i("esri.views.2d.layers.RouteLayerView2D")],h);var c=h;

export default c;
