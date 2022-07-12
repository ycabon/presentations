import { a as e, n as n$1 } from './_virtual_index-64b818a8.js';
import { I } from './Utils-9723b65e.js';
import { t } from './BaseGraphicContainer-ae41de74.js';
import { _ } from './enums-fb707d37.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
let i=class extends t{doRender(r){r.drawPhase===I.HIGHLIGHT&&super.doRender(r);}renderChildren(r){if(this.attributeView.bindTextures(r.context),!this.children.some((r=>r.hasData)))return;super.renderChildren(r);const{painter:e}=r,s=e.effects.highlight;s.bind(r),r.context.setColorMask(!0,!0,!0,!0),r.context.clear(_.COLOR_BUFFER_BIT),this._renderChildren(r,s.defines.concat(["highlightAll"])),s.draw(r),s.unbind();}};i=e([n$1("esri.views.2d.layers.support.HighlightGraphicContainer")],i);const n=i;

export { n };
