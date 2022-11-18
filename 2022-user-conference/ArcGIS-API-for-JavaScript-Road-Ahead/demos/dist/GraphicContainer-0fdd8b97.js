import { I } from './enums-4e1a5b11.js';
import { t } from './BaseGraphicContainer-aab27617.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
class i extends t{renderChildren(r){this.attributeView.update(),this.children.some((e=>e.hasData))&&(this.attributeView.bindTextures(r.context,!1),super.renderChildren(r),r.drawPhase===I.MAP&&this._renderChildren(r),this.hasHighlight()&&r.drawPhase===I.HIGHLIGHT&&this._renderHighlight(r),this._boundsRenderer&&this._boundsRenderer.doRender(r));}_renderHighlight(e){const{painter:r}=e,i=r.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind();}}

export { i };
