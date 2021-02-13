import { as as u, U, w as f, q as e, r as i } from './index.js';
import { l, p } from './LayerView2D-bc0b7363.js';
import { Q } from './GraphicsView2D-739ec37b.js';
import './Container-b610f49b.js';
import './mat4f32-a4d1c0af.js';
import './_commonjsHelpers-34398bae.js';
import './quantizationUtils-27b2b015.js';
import './json-dc26b8a4.js';
import './quickselect-1f1691b9.js';
import './shapingUtils-030142c7.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-f727cc5b.js';
import './RenderingContext-2178848d.js';
import './MaterialKey-9ff1409e.js';
import './visualVariablesUtils-46671f25.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-eb9dd34a.js';
import './VertexBuffer-c11864c0.js';
import './CircularArray-e5e35a7a.js';
import './TurboLine-22f8472d.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-ba87c508.js';
import './TileContainer-ba62d40b.js';
import './WGLContainer-2372d076.js';
import './VertexArrayObject-5fd24fda.js';
import './ShaderCompiler-96f9028e.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-fa22d8a9.js';
import './FeatureSetReader-b8bac4a7.js';
import './centroid-6105d00e.js';
import './graphicsUtils-df24495c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let h=class extends(l(p)){constructor(){super(...arguments),this._handles=new u,this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,s){if(this.suspended||!this.graphicsViews.length)return U();const i=this.graphicsViews.map((r=>r.hitTest(e,s)));return f(i).then((e=>e.filter(((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const s of this.graphicsViews)s.processUpdate(e);}attach(){this.layer.featureCollections.forEach((e=>{const s=new Q({view:this.view,graphics:e.source,requestUpdateCallback:()=>this.requestUpdate()});s.renderer=e.renderer,this._popupTemplates.set(s,e.popupTemplate),this.graphicsViews.push(s),this.container.addChild(s.container);}));}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy(),e.view=null,e.renderer=null;this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}};h=e([i("esri.views.2d.layers.RouteLayerView2D")],h);var c=h;

export default c;
