import { W } from './brushes-0ba66925.js';
import { I } from './Utils-0ee32720.js';
import { a } from './WGLContainer-c474bc93.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class t extends a{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.blendFunction))}prepareRenderPasses(s){const t=s.registerRenderPass({name:"bitmap",brushes:[W.bitmap],target:()=>this.children,drawPhase:I.MAP});return [...super.prepareRenderPasses(s),t]}}

export { t };