import { I } from './Utils-923bb70b.js';
import { b as t$1, g } from './WGLContainer-ee097a9e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class t extends t$1{prepareRenderPasses(s){const t=s.registerRenderPass({name:"bitmap",brushes:[g.bitmap],target:()=>this.children,drawPhase:I.MAP});return [...super.prepareRenderPasses(s),t]}}

export { t };
