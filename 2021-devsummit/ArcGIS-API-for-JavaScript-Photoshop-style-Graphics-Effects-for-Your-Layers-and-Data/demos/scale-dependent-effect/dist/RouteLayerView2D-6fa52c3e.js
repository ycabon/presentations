import { af as u, U, r as f, n as e, p as i } from './index.js';
import { l, p } from './LayerView2D-498895e4.js';
import { Q } from './GraphicsView2D-f4749bd9.js';
import './Container-5ea5ac3f.js';
import './mat4f32-a4d1c0af.js';
import './_commonjsHelpers-34398bae.js';
import './quantizationUtils-6bdc869a.js';
import './json-dc26b8a4.js';
import './quickselect-1f1691b9.js';
import './definitions-6994070a.js';
import './shapingUtils-b3e516b3.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-663f8528.js';
import './RenderingContext-788faf24.js';
import './MaterialKey-953814d9.js';
import './visualVariablesUtils-32538c4e.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-081b1aef.js';
import './VertexBuffer-1b8484e6.js';
import './CircularArray-be7a7775.js';
import './TurboLine-7b181653.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-62255ba2.js';
import './TileContainer-d4afd138.js';
import './WGLContainer-f0f1d734.js';
import './VertexArrayObject-4122ce3c.js';
import './ShaderCompiler-3037272a.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-d106bba5.js';
import './FeatureSetReader-955e7708.js';
import './centroid-6105d00e.js';
import './graphicsUtils-0124a09a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let h=class extends(l(p)){constructor(){super(...arguments),this._handles=new u,this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,s){if(this.suspended||!this.graphicsViews.length)return U();const i=this.graphicsViews.map((r=>r.hitTest(e,s)));return f(i).then((e=>e.filter(((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const s of this.graphicsViews)s.processUpdate(e);}attach(){this.layer.featureCollections.forEach((e=>{const s=new Q({view:this.view,graphics:e.source,requestUpdateCallback:()=>this.requestUpdate()});s.renderer=e.renderer,this._popupTemplates.set(s,e.popupTemplate),this.graphicsViews.push(s),this.container.addChild(s.container);}));}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy(),e.view=null,e.renderer=null;this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}};h=e([i("esri.views.2d.layers.RouteLayerView2D")],h);var c=h;

export default c;
