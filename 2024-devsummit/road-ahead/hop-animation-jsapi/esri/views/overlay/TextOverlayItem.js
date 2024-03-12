// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../Color ../../core/Accessor ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../libs/maquette/projection ../../libs/maquette/h ../../libs/maquette/projector".split(" "),function(d,m,e,g,u,v,w,p,x,q,y){const n={bottom:"esri-text-overlay-item-anchor-bottom","bottom-right":"esri-text-overlay-item-anchor-bottom-right","bottom-left":"esri-text-overlay-item-anchor-bottom-left",
top:"esri-text-overlay-item-anchor-top","top-right":"esri-text-overlay-item-anchor-top-right","top-left":"esri-text-overlay-item-anchor-top-left",center:"esri-text-overlay-item-anchor-center",right:"esri-text-overlay-item-anchor-right",left:"esri-text-overlay-item-anchor-left"};e=class extends e{get position(){return[this.x,this.y]}set position(a){this._set("x",a[0]);this._set("y",a[1])}get _textShadowColor(){const {textColor:a,backgroundColor:b}=this,c=b.clone();c.a*=a.a;return c}get _textShadow(){const a=
this._textShadowColor.toCss(!0);return`0 0 ${this._textShadowSize}px ${a}`}get padding(){return.5*this.fontSize}get _borderRadius(){return this.padding}constructor(a){super(a);this.y=this.x=0;this.text="-";this.fontSize=14;this.anchor="center";this.isDecoration=this.visible=!0;this.backgroundColor=new m([0,0,0,.6]);this.textColor=new m([255,255,255]);this._textShadowSize=1}render(){return q.h("div",{classes:this._cssClasses(),styles:{left:Math.floor(this.x)+"px",top:Math.floor(this.y)+"px",visibility:this.visible?
"visible":"hidden",fontSize:this.fontSize+"px",lineHeight:this.fontSize+"px",backgroundColor:this.backgroundColor.toCss(!0),color:this.textColor.toCss(!0),padding:this.padding+"px",borderRadius:this._borderRadius+"px",textShadow:this._textShadow}},[this.text])}renderCanvas(a){if(this.visible){var b=a.font.replace(/^(.*?)px/,"");a.font=`${this.fontSize}px ${b}`;var c=this.padding,k=this._borderRadius,h=a.measureText(this.text).width,f=this.fontSize;b=r[this.anchor];a.textAlign="center";a.textBaseline=
"middle";h+=2*c;c=f+2*c;this._roundedRect(a,this.x+b.x*h,this.y+b.y*c,h,c,k);a.fillStyle=this.backgroundColor.toCss(!0);a.fill();k=this.x+(b.x+.5)*h;b=this.y+(b.y+.5)*c;this._renderTextShadow(a,this.text,k,b);a.fillStyle=this.textColor.toCss(!0);a.fillText(this.text,k,b)}}_renderTextShadow(a,b,c,k){a.lineJoin="miter";a.fillStyle=`rgba(${this._textShadowColor.r}, ${this._textShadowColor.g}, ${this._textShadowColor.b}, ${1/l.length})`;const h=this._textShadowSize;for(const [f,t]of l)a.fillText(b,c+
h*f,k+h*t)}_roundedRect(a,b,c,k,h,f){a.beginPath();a.moveTo(b,c+f);a.arcTo(b,c,b+f,c,f);a.lineTo(b+k-f,c);a.arcTo(b+k,c,b+k,c+f,f);a.lineTo(b+k,c+h-f);a.arcTo(b+k,c+h,b+k-f,c+h,f);a.lineTo(b+f,c+h);a.arcTo(b,c+h,b,c+h-f,f);a.closePath()}_cssClasses(){const a={"esri-text-overlay-item":!0};let b;for(b in n)a[n[b]]=this.anchor===b;return a}};d.__decorate([g.property()],e.prototype,"x",void 0);d.__decorate([g.property()],e.prototype,"y",void 0);d.__decorate([g.property()],e.prototype,"position",null);
d.__decorate([g.property()],e.prototype,"text",void 0);d.__decorate([g.property()],e.prototype,"fontSize",void 0);d.__decorate([g.property()],e.prototype,"anchor",void 0);d.__decorate([g.property()],e.prototype,"visible",void 0);d.__decorate([g.property()],e.prototype,"isDecoration",void 0);d.__decorate([g.property()],e.prototype,"backgroundColor",void 0);d.__decorate([g.property()],e.prototype,"textColor",void 0);d.__decorate([g.property()],e.prototype,"_textShadowSize",void 0);d.__decorate([g.property()],
e.prototype,"_textShadowColor",null);d.__decorate([g.property()],e.prototype,"_textShadow",null);d.__decorate([g.property()],e.prototype,"padding",null);d.__decorate([g.property()],e.prototype,"_borderRadius",null);e=d.__decorate([p.subclass("esri.views.overlay.TextOverlayItem")],e);const r={bottom:{x:-.5,y:-1,textAlign:"center",textBaseline:"bottom"},"bottom-left":{x:0,y:-1,textAlign:"left",textBaseline:"bottom"},"bottom-right":{x:-1,y:-1,textAlign:"right",textBaseline:"bottom"},center:{x:-.5,y:-.5,
textAlign:"center",textBaseline:"middle"},left:{x:0,y:-.5,textAlign:"left",textBaseline:"middle"},right:{x:-1,y:-.5,textAlign:"right",textBaseline:"middle"},top:{x:-.5,y:0,textAlign:"center",textBaseline:"top"},"top-left":{x:0,y:0,textAlign:"left",textBaseline:"top"},"top-right":{x:-1,y:0,textAlign:"right",textBaseline:"top"}},l=[];for(d=0;360>d;d+=22.5)l.push([Math.cos(Math.PI*d/180),Math.sin(Math.PI*d/180)]);return e});