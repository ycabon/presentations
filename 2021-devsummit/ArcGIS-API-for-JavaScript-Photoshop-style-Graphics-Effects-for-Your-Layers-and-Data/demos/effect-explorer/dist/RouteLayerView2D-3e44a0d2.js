import { as as u, U, w as f, q as e, r as i } from './index.js';
import { l, p } from './LayerView2D-f5c0bad9.js';
import { Q } from './GraphicsView2D-7864c55c.js';
import './Container-ef1b7692.js';
import './mat4f32-a4d1c0af.js';
import './_commonjsHelpers-34398bae.js';
import './quantizationUtils-182a167b.js';
import './json-dc26b8a4.js';
import './quickselect-1f1691b9.js';
import './shapingUtils-c46c57db.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-923bb70b.js';
import './RenderingContext-707935bb.js';
import './MaterialKey-0d01090a.js';
import './visualVariablesUtils-c781af89.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-9545e0f2.js';
import './VertexBuffer-a3280664.js';
import './CircularArray-5380cc6e.js';
import './TurboLine-48f20976.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-cb965a14.js';
import './TileContainer-1d971701.js';
import './WGLContainer-ee097a9e.js';
import './VertexArrayObject-5a96c147.js';
import './ShaderCompiler-b71ac8b5.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-fe671d1b.js';
import './FeatureSetReader-0e29a007.js';
import './centroid-6105d00e.js';
import './graphicsUtils-179ce863.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let h=class extends(l(p)){constructor(){super(...arguments),this._handles=new u,this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,s){if(this.suspended||!this.graphicsViews.length)return U();const i=this.graphicsViews.map((r=>r.hitTest(e,s)));return f(i).then((e=>e.filter(((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const s of this.graphicsViews)s.processUpdate(e);}attach(){this.layer.featureCollections.forEach((e=>{const s=new Q({view:this.view,graphics:e.source,requestUpdateCallback:()=>this.requestUpdate()});s.renderer=e.renderer,this._popupTemplates.set(s,e.popupTemplate),this.graphicsViews.push(s),this.container.addChild(s.container);}));}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy(),e.view=null,e.renderer=null;this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}};h=e([i("esri.views.2d.layers.RouteLayerView2D")],h);var c=h;

export default c;
