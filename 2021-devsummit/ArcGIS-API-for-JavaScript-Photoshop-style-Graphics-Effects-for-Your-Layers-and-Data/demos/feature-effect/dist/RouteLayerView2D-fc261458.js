import { aw as u, U, f, e, i } from './index.js';
import { l, p } from './LayerView2D-73734b75.js';
import { Q } from './GraphicsView2D-30e51bef.js';
import './Container-ab4b8a7d.js';
import './mat4f32-a4d1c0af.js';
import './_commonjsHelpers-34398bae.js';
import './quantizationUtils-79ac4e60.js';
import './json-dc26b8a4.js';
import './quickselect-1f1691b9.js';
import './definitions-6994070a.js';
import './shapingUtils-79794aed.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-b26a7a24.js';
import './RenderingContext-93d2cda4.js';
import './MaterialKey-e2f7d356.js';
import './visualVariablesUtils-93a1341d.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-25ea991b.js';
import './VertexBuffer-5b41ea70.js';
import './CircularArray-08743929.js';
import './TurboLine-7e821e86.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-4517d340.js';
import './TileContainer-009d35cb.js';
import './WGLContainer-0cfd8bf2.js';
import './VertexArrayObject-66ff8833.js';
import './ShaderCompiler-cf832d12.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-28dd50df.js';
import './FeatureSetReader-0f850cde.js';
import './centroid-6105d00e.js';
import './graphicsUtils-3626d64f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let h=class extends(l(p)){constructor(){super(...arguments),this._handles=new u,this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,s){if(this.suspended||!this.graphicsViews.length)return U();const i=this.graphicsViews.map((r=>r.hitTest(e,s)));return f(i).then((e=>e.filter(((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const s of this.graphicsViews)s.processUpdate(e);}attach(){this.layer.featureCollections.forEach((e=>{const s=new Q({view:this.view,graphics:e.source,requestUpdateCallback:()=>this.requestUpdate()});s.renderer=e.renderer,this._popupTemplates.set(s,e.popupTemplate),this.graphicsViews.push(s),this.container.addChild(s.container);}));}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy(),e.view=null,e.renderer=null;this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}};h=e([i("esri.views.2d.layers.RouteLayerView2D")],h);var c=h;

export default c;
