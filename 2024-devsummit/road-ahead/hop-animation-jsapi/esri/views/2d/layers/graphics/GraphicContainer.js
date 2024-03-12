// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["../../engine/webgl/enums","./AGraphicContainer","../support/util"],function(c,d,e){class f extends d.AGraphicContainer{renderChildren(a){for(const b of this.children)b.setTransform(a.state);super.renderChildren(a);this.attributeView.update();if(this.children.some(b=>b.hasData)){switch(a.drawPhase){case c.WGLDrawPhase.MAP:this._renderChildren(a,c.FeatureSelection.All);break;case c.WGLDrawPhase.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(a)}this._boundsRenderer&&this._boundsRenderer.doRender(a)}}_renderHighlight(a){e.renderHighlight(a,
!1,b=>{this._renderChildren(b,c.FeatureSelection.Highlight)})}}return f});