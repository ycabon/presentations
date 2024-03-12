/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{W as e,F as r,r as s}from"./Container.js";import{A as i}from"./AGraphicContainer.js";class t extends i{renderChildren(s){for(const e of this.children)e.setTransform(s.state);if(super.renderChildren(s),this.attributeView.update(),this.children.some((e=>e.hasData))){switch(s.drawPhase){case e.MAP:this._renderChildren(s,r.All);break;case e.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(s)}this._boundsRenderer&&this._boundsRenderer.doRender(s)}}_renderHighlight(e){s(e,!1,(e=>{this._renderChildren(e,r.Highlight)}))}}export{t as G};
