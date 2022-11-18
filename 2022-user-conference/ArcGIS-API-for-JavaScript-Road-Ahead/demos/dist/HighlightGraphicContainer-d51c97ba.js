import { u as e, z as n$1, dS as _ } from './_virtual_index-1ea2035a.js';
import { I } from './enums-4e1a5b11.js';
import { t } from './BaseGraphicContainer-aab27617.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let i=class extends t{doRender(e){e.drawPhase===I.HIGHLIGHT&&super.doRender(e);}renderChildren(e){if(this.attributeView.update(),!this.children.some((e=>e.hasData)))return;this.attributeView.bindTextures(e.context),super.renderChildren(e);const{painter:r}=e,s=r.effects.highlight;s.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(_.COLOR_BUFFER_BIT),this._renderChildren(e,s.defines.concat(["highlightAll"])),s.draw(e),s.unbind();}};i=e([n$1("esri.views.2d.layers.support.HighlightGraphicContainer")],i);const n=i;

export { n };
