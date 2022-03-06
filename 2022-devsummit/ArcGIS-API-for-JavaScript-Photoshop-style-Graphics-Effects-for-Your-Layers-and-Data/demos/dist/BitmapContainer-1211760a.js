import { a, j } from './WGLContainer-0a7b434f.js';
import { I } from './Utils-8759b086.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t extends a{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.blendFunction))}prepareRenderPasses(s){const t=s.registerRenderPass({name:"bitmap",brushes:[j.bitmap],target:()=>this.children,drawPhase:I.MAP});return [...super.prepareRenderPasses(s),t]}}

export { t };
