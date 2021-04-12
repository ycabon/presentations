import { I } from './Utils-0b584b8b.js';
import { t } from './BaseGraphicContainer-d9ecea3a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class i extends t{renderChildren(r){this.attributeView.bindTextures(r.context),this.children.some((e=>e.hasData))&&(super.renderChildren(r),r.drawPhase===I.MAP&&this._renderChildren(r),r.drawPhase===I.HIGHLIGHT&&this._renderHighlight(r));}_renderHighlight(e){const{painter:r}=e,i=r.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind();}}

export { i };
