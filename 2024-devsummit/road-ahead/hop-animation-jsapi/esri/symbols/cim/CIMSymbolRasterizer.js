// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("exports ./CIMResourceManager ./CIMSymbolDrawHelper ./CIMSymbolHelper ./OverrideHelper ./utils".split(" "),function(r,w,t,q,x,u){function v(b,f,g,m){const c=-f/2+1;f=f/2-1;const n=g/2-1;g=-g/2+1;switch(b){case "esriGeometryPoint":return{x:0,y:0};case "esriGeometryPolyline":return{paths:[[[c,0],[0,0],[f,0]]]};default:return"legend"===m?{rings:[[[c,n],[f,0],[f,g],[c,g],[c,n]]]}:{rings:[[[c,n],[f,n],[f,g],[c,g],[c,n]]]}}}const y=96/72;class z{constructor(b){this._spatialReference=b;this._imageDataCanvas=
null;this._cimResourceManager=new w}get _canvas(){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));return this._imageDataCanvas}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(b,f,g,m,c,n,k,p,l){if(!b)return null;var {data:a}=b;if(!a||"CIMSymbolReference"!==a.type||!a.symbol)return null;({symbol:b}=a);n||=u.mapCIMSymbolToGeometryType(b);f=await x.OverrideHelper.resolveSymbolOverrides(a,f,this._spatialReference,c,n,k,p);c=this._cimResourceManager;
k=[];q.CIMSymbolHelper.fetchResources(f,c,k);q.CIMSymbolHelper.fetchFonts(f,c,k);0<k.length&&await Promise.all(k);const {width:d,height:h}=g;g=v(n,d,h,m);a=q.CIMSymbolHelper.getEnvelope(f,g,c);if(!a)return null;c=1;p=k=0;switch(b.type){case "CIMPointSymbol":case "CIMTextSymbol":l=1;a.width>d&&(l=d/a.width);b=1;a.height>h&&(b=h/a.height);"preview"===m&&(a.width<d&&(l=d/a.width),a.height<h&&(b=h/a.height));c=Math.min(l,b);k=a.x+a.width/2;p=a.y+a.height/2;break;case "CIMLineSymbol":if(l||a.height>h)c=
h/a.height;p=a.y+a.height/2;m=a.x*c+d/2;l=(a.x+a.width)*c+d/2;({paths:b}=g);b[0][0][0]-=m/c;b[0][2][0]-=(l-d)/c;break;case "CIMPolygonSymbol":k=a.x+a.width/2;p=a.y+a.height/2;m=a.x*c+d/2;l=(a.x+a.width)*c+d/2;b=a.y*c+h/2;a=(a.y+a.height)*c+h/2;const {rings:e}=g;0>m&&(e[0][0][0]-=m,e[0][3][0]-=m,e[0][4][0]-=m);0>b&&(e[0][0][1]+=b,e[0][1][1]+=b,e[0][4][1]+=b);l>d&&(e[0][1][0]-=l-d,e[0][2][0]-=l-d);a>h&&(e[0][2][1]+=a-h,e[0][3][1]+=a-h)}return this.rasterize({type:"cim",data:{type:"CIMSymbolReference",
symbol:f}},d,h,k,p,c,n,1,g)}rasterize(b,f,g,m,c,n,k,p=0,l=null){({data:b}=b);if(!b||"CIMSymbolReference"!==b.type||!b.symbol)return null;({symbol:b}=b);const a=this._canvas,d=(window.devicePixelRatio||1)*y;a.width=f*d;a.height=g*d;k||=u.mapCIMSymbolToGeometryType(b);l||=v(k,f,g,"legend");a.width+=2*p;a.height+=2*p;k=a.getContext("2d",{willReadFrequently:!0});const h=t.Transformation.createIdentity();h.translate(-m,-c);h.scale(n*d,-n*d);h.translate(f*d/2+p,g*d/2+p);k.clearRect(0,0,a.width,a.height);
(new t.CanvasDrawHelper(k,this._cimResourceManager,h,!0)).drawSymbol(b,l);return k.getImageData(0,0,a.width,a.height)}}r.CIMSymbolRasterizer=z;Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});