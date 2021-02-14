import { af as u, U, r as f, n as e, p as i } from './index.js';
import { l, p } from './LayerView2D-a18f2836.js';
import { Q } from './GraphicsView2D-178c7045.js';
import './Container-8a78d3ea.js';
import './mat4f32-a4d1c0af.js';
import './_commonjsHelpers-34398bae.js';
import './quantizationUtils-06d3d833.js';
import './json-dc26b8a4.js';
import './quickselect-1f1691b9.js';
import './definitions-6994070a.js';
import './shapingUtils-2162ddfb.js';
import './BidiEngine-e6ac532e.js';
import './MD5-5f4e3a98.js';
import './Utils-c3a9816c.js';
import './RenderingContext-c649b1a9.js';
import './MaterialKey-54ebae87.js';
import './visualVariablesUtils-f0aabcfc.js';
import './Rect-49fd2d8c.js';
import './WGLMeshFactory-c81ce394.js';
import './VertexBuffer-79f6b978.js';
import './CircularArray-b7a74001.js';
import './TurboLine-98b09688.js';
import './GeometryUtils-83dd86c8.js';
import './FeatureContainer-1cc775c0.js';
import './TileContainer-74df6a99.js';
import './WGLContainer-b0229d22.js';
import './VertexArrayObject-d10bd599.js';
import './ShaderCompiler-962ffbff.js';
import './earcut-54ba3d1d.js';
import './ComputedAttributeStorage-ebc8f54b.js';
import './FeatureSetReader-d2b755b7.js';
import './centroid-6105d00e.js';
import './graphicsUtils-4a9659dd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let h=class extends(l(p)){constructor(){super(...arguments),this._handles=new u,this._popupTemplates=new Map,this.graphicsViews=[];}hitTest(e,s){if(this.suspended||!this.graphicsViews.length)return U();const i=this.graphicsViews.map((r=>r.hitTest(e,s)));return f(i).then((e=>e.filter(((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const s of this.graphicsViews)s.processUpdate(e);}attach(){this.layer.featureCollections.forEach((e=>{const s=new Q({view:this.view,graphics:e.source,requestUpdateCallback:()=>this.requestUpdate()});s.renderer=e.renderer,this._popupTemplates.set(s,e.popupTemplate),this.graphicsViews.push(s),this.container.addChild(s.container);}));}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy(),e.view=null,e.renderer=null;this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null;}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}};h=e([i("esri.views.2d.layers.RouteLayerView2D")],h);var c=h;

export default c;
