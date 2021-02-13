import { as as u, U, w as f, q as e, r as i } from './index.js';
import { l, p } from './LayerView2D-7469c712.js';
import { Q } from './GraphicsView2D-b8e13cc9.js';
import './Container-170ec83c.js';
import './mat4f32-a4d1c0af.js';
import './_commonjsHelpers-34398bae.js';
import './quantizationUtils-70355d31.js';
import './json-dc26b8a4.js';
import './quickselect-1f1691b9.js';
import './shapingUtils-897d6660.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-90668a37.js';
import './RenderingContext-96175dfe.js';
import './MaterialKey-3b583efd.js';
import './visualVariablesUtils-ad9cdd4f.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-d302fcf3.js';
import './VertexBuffer-06295311.js';
import './CircularArray-a2572ebd.js';
import './TurboLine-4e1b0dad.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-4ae39be5.js';
import './TileContainer-9a9caf23.js';
import './WGLContainer-64a6402b.js';
import './VertexArrayObject-58dc635a.js';
import './ShaderCompiler-e7656ff4.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-b665b292.js';
import './FeatureSetReader-00f1d30c.js';
import './centroid-6105d00e.js';
import './graphicsUtils-07e264f0.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let h=class extends(l(p)){constructor(){super(...arguments),this._handles=new u,this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,s){if(this.suspended||!this.graphicsViews.length)return U();const i=this.graphicsViews.map((r=>r.hitTest(e,s)));return f(i).then((e=>e.filter(((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const s of this.graphicsViews)s.processUpdate(e);}attach(){this.layer.featureCollections.forEach((e=>{const s=new Q({view:this.view,graphics:e.source,requestUpdateCallback:()=>this.requestUpdate()});s.renderer=e.renderer,this._popupTemplates.set(s,e.popupTemplate),this.graphicsViews.push(s),this.container.addChild(s.container);}));}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy(),e.view=null,e.renderer=null;this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}};h=e([i("esri.views.2d.layers.RouteLayerView2D")],h);var c=h;

export default c;
