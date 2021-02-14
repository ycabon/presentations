import { I } from './Utils-7b430d1d.js';
import { b as t$1, g } from './WGLContainer-1770bca0.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class t extends t$1{prepareRenderPasses(s){const t=s.registerRenderPass({name:"bitmap",brushes:[g.bitmap],target:()=>this.children,drawPhase:I.MAP});return [...super.prepareRenderPasses(s),t]}}

export { t };
