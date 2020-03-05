// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../core/tsSupport/assignHelper ../../Color ../../core/Logger ../../core/promiseUtils ../../core/string ../../support/arcadeOnDemand ./CIMSymbolHelper ./enums ./SDFHelper ../../views/2d/arcade/utils".split(" "),function(Ba,Q,w,x,fa,ga,ha,aa,D,T,E,B,ca,U){function I(a){return a?{r:a[0],g:a[1],b:a[2],a:a[3]/255}:{r:0,g:0,b:0,a:0}}function L(a){switch(a){case "Butt":return B.CapType.BUTT;case "Square":return B.CapType.SQUARE;
default:return B.CapType.ROUND}}function M(a){switch(a){case "Bevel":return B.JoinType.BEVEL;case "Miter":return B.JoinType.MITER;default:return B.JoinType.ROUND}}function ia(a){switch(a){default:return"left";case "Right":return"right";case "Center":return"center";case "Justify":return"justify"}}function ja(a){switch(a){default:return"top";case "Center":return"middle";case "Baseline":return"baseline";case "Bottom":return"bottom"}}function ka(a){var b="normal",e="normal";a&&(a=a.toLowerCase(),-1!==
a.indexOf("italic")?b="italic":-1!==a.indexOf("oblique")&&(b="oblique"),-1!==a.indexOf("bold")?e="bold":-1!==a.indexOf("light")&&(e="lighter"));return{style:b,weight:e}}function la(a,b,e,m,l,h){return x(this,void 0,void 0,function(){var d,k,n,f,g,c,v;return w(this,function(t){switch(t.label){case 0:if(!a)return[2];d=a.symbolLayers;if(!d)return[2];n=E.CIMSymbolHelper.getSize(a);"CIMPointSymbol"===a.type&&"Map"===a.angleAlignment&&(k=B.Alignment.MAP);f=d.length;t.label=1;case 1:if(!f--)return[3,23];
g=d[f];if(!g||!1===g.enable)return[3,1];c=[];E.OverrideHelper.findApplicableOverrides(g,b,c);v=g.type;switch(v){case "CIMSolidFill":return[3,2];case "CIMPictureFill":return[3,4];case "CIMHatchFill":return[3,6];case "CIMGradientFill":return[3,8];case "CIMSolidStroke":return[3,10];case "CIMPictureStroke":return[3,12];case "CIMGradientStroke":return[3,14];case "CIMCharacterMarker":return[3,16];case "CIMPictureMarker":return[3,17];case "CIMVectorMarker":return[3,19]}return[3,21];case 2:return[4,ma(g,
c,m,l)];case 3:return t.sent(),[3,22];case 4:return[4,na(g,c,m,l)];case 5:return t.sent(),[3,22];case 6:return[4,oa(g,c,m,l)];case 7:return t.sent(),[3,22];case 8:return[4,pa(g,c,m,l)];case 9:return t.sent(),[3,22];case 10:return[4,qa(g,c,m,l,"CIMPolygonSymbol"===a.type,n)];case 11:return t.sent(),[3,22];case 12:return[4,ra(g,c,m,l,"CIMPolygonSymbol"===a.type,n)];case 13:return t.sent(),[3,22];case 14:return[4,sa(g,c,m,l,"CIMPolygonSymbol"===a.type,n)];case 15:return t.sent(),[3,22];case 16:return[3,
22];case 17:return[4,ta(g,c,m,l,k,n)];case 18:return t.sent(),[3,22];case 19:return[4,ua(g,c,e,m,l,k,n,h)];case 20:return t.sent(),[3,22];case 21:va.error("Cannot analyze CIM layer",g.type),t.label=22;case 22:return[3,1];case 23:return[2]}})})}function ma(a,b,e,m){return x(this,void 0,void 0,function(){var l,h,d,k,n,f;return w(this,function(g){switch(g.label){case 0:return l=a.primitiveName,h=I(a.color),d=D.numericHash(JSON.stringify(a)).toString(),n=(k=m).push,f={type:"fill",templateHash:d,materialHash:0===
b.length?d:function(){return d},cim:a,materialOverrides:null,colorLocked:a.colorLocked},[4,p(l,"Color",b,e,h,F)];case 1:return n.apply(k,[(f.color=g.sent(),f.height=0,f.angle=0,f.offsetX=0,f.offsetY=0,f.scaleX=1,f)]),[2]}})})}function na(a,b,e,m){return x(this,void 0,void 0,function(){var l,h,d,k,n,f,g;return w(this,function(c){switch(c.label){case 0:return l=a.primitiveName,h=I(a.tintColor),d=D.numericHash(JSON.stringify(a)).toString(),k=D.numericHash(""+a.url+JSON.stringify(a.colorSubstitutions)).toString(),
f=(n=m).push,g={type:"fill",templateHash:d,materialHash:0===b.length?k:function(){return k},cim:a,materialOverrides:null,colorLocked:a.colorLocked},[4,p(l,"TintColor",b,e,h,F)];case 1:return g.color=c.sent(),[4,p(l,"Height",b,e,a.height)];case 2:return g.height=c.sent(),[4,p(l,"ScaleX",b,e,a.scaleX)];case 3:return g.scaleX=c.sent(),[4,p(l,"Rotation",b,e,a.rotation)];case 4:return g.angle=c.sent(),[4,p(l,"OffsetX",b,e,a.offsetX)];case 5:return g.offsetX=c.sent(),[4,p(l,"OffsetY",b,e,a.offsetY)];case 6:return f.apply(n,
[(g.offsetY=c.sent(),g)]),[2]}})})}function oa(a,b,e,m){return x(this,void 0,void 0,function(){var l,h,d,k,n,f,g,c;return w(this,function(v){switch(v.label){case 0:l=["Rotation","OffsetX","OffsetY"];h=b.filter(function(b){return b.primitiveName!==a.primitiveName&&-1===l.indexOf(b.propertyName)});d=a.primitiveName;k=D.numericHash(JSON.stringify(a)).toString();f=(n=m).push;g={type:"fill",templateHash:k};if(0!==b.length)return[3,1];c=k;return[3,3];case 1:return[4,N(k,h,e)];case 2:c=v.sent(),v.label=
3;case 3:return g.materialHash=c,g.cim=a,g.materialOverrides=h,g.colorLocked=a.colorLocked,g.color={r:128,g:128,b:128,a:1},g.height=0,g.scaleX=1,[4,p(d,"Rotation",b,e,a.rotation)];case 4:return g.angle=v.sent(),[4,p(d,"OffsetX",b,e,a.offsetX)];case 5:return g.offsetX=v.sent(),[4,p(d,"OffsetY",b,e,a.offsetY)];case 6:return f.apply(n,[(g.offsetY=v.sent(),g)]),[2]}})})}function pa(a,b,e,m){return x(this,void 0,void 0,function(){var l,h,d,k,n;return w(this,function(f){switch(f.label){case 0:l=D.numericHash(JSON.stringify(a)).toString();
d=(h=m).push;k={type:"fill",templateHash:l};if(0!==b.length)return[3,1];n=l;return[3,3];case 1:return[4,N(l,b,e)];case 2:n=f.sent(),f.label=3;case 3:return d.apply(h,[(k.materialHash=n,k.cim=a,k.materialOverrides=null,k.colorLocked=a.colorLocked,k.color={r:128,g:128,b:128,a:1},k.height=0,k.angle=0,k.offsetX=0,k.offsetY=0,k.scaleX=1,k)]),[2]}})})}function qa(a,b,e,m,l,h){return x(this,void 0,void 0,function(){var d,k,n,f,g,c,v,t,q,u;return w(this,function(r){switch(r.label){case 0:return d=D.numericHash(JSON.stringify(a)).toString(),
k=a.primitiveName,n=I(a.color),f=void 0!==a.width?a.width:4,g=L(a.capStyle),c=M(a.joinStyle),v=a.miterLimit,q=(t=m).push,u={type:"line",templateHash:d,materialHash:0===b.length?d:function(){return d},cim:a,materialOverrides:null,isOutline:l,colorLocked:a.colorLocked},[4,p(k,"Color",b,e,n,F)];case 1:return u.color=r.sent(),[4,p(k,"Width",b,e,f)];case 2:return u.width=r.sent(),[4,p(k,"CapStyle",b,e,g)];case 3:return u.cap=r.sent(),[4,p(k,"JoinStyle",b,e,c)];case 4:return u.join=r.sent(),[4,p(k,"MiterLimit",
b,e,v)];case 5:return q.apply(t,[(u.miterLimit=r.sent(),u.referenceWidth=h,u.zOrder=O(a.name),u.isDashed=!1,u)]),[2]}})})}function ra(a,b,e,m,l,h){return x(this,void 0,void 0,function(){var d,k,n,f,g,c,v,t,q,u,r;return w(this,function(A){switch(A.label){case 0:return d=D.numericHash(""+a.url+JSON.stringify(a.colorSubstitutions)).toString(),k=a.primitiveName,n=I(a.tintColor),f=void 0!==a.width?a.width:4,g=L(a.capStyle),c=M(a.joinStyle),v=a.miterLimit,t=D.numericHash(JSON.stringify(a)).toString(),u=
(q=m).push,r={type:"line",templateHash:t,materialHash:0===b.length?d:function(){return d},cim:a,materialOverrides:null,isOutline:l,colorLocked:a.colorLocked},[4,p(k,"TintColor",b,e,n,F)];case 1:return r.color=A.sent(),[4,p(k,"Width",b,e,f)];case 2:return r.width=A.sent(),[4,p(k,"CapStyle",b,e,g)];case 3:return r.cap=A.sent(),[4,p(k,"JoinStyle",b,e,c)];case 4:return r.join=A.sent(),[4,p(k,"MiterLimit",b,e,v)];case 5:return u.apply(q,[(r.miterLimit=A.sent(),r.referenceWidth=h,r.zOrder=O(a.name),r.isDashed=
!1,r)]),[2]}})})}function sa(a,b,e,m,l,h){return x(this,void 0,void 0,function(){var d,k,n,f,g,c,v,t,q,u;return w(this,function(r){switch(r.label){case 0:d=a.primitiveName;k=void 0!==a.width?a.width:4;n=L(a.capStyle);f=M(a.joinStyle);g=a.miterLimit;c=D.numericHash(JSON.stringify(a)).toString();t=(v=m).push;q={type:"line",templateHash:c};if(0!==b.length)return[3,1];u=c;return[3,3];case 1:return[4,N(c,b,e)];case 2:u=r.sent(),r.label=3;case 3:return q.materialHash=u,q.cim=a,q.materialOverrides=null,
q.isOutline=l,q.colorLocked=a.colorLocked,q.color={r:128,g:128,b:128,a:1},[4,p(d,"Width",b,e,k)];case 4:return q.width=r.sent(),[4,p(d,"CapStyle",b,e,n)];case 5:return q.cap=r.sent(),[4,p(d,"JoinStyle",b,e,f)];case 6:return q.join=r.sent(),[4,p(d,"MiterLimit",b,e,g)];case 7:return t.apply(v,[(q.miterLimit=r.sent(),q.referenceWidth=h,q.zOrder=O(a.name),q.isDashed=!1,q)]),[2]}})})}function ta(a,b,e,m,l,h){return x(this,void 0,void 0,function(){var d,k,n,f,g,c,v,t,q,u,r,A,G,x,E,y;return w(this,function(z){switch(z.label){case 0:d=
a.primitiveName;k=a.size;n=a.scaleX;f=a.rotation;g=a.offsetX;c=a.offsetY;v=I(a.tintColor);t=D.numericHash(""+a.url+JSON.stringify(a.colorSubstitutions)).toString();q=!1;u="";r=0;for(A=b;r<A.length;r++)G=A[r],G.primitiveName===d&&(void 0!==G.value?u+="|"+G.primitiveName+"|"+G.propertyName+"|"+JSON.stringify(G.value):G.valueExpressionInfo&&(q=!0));E=(x=m).push;y={type:"marker",templateHash:D.numericHash(JSON.stringify(a)+u).toString(),materialHash:q?function(){return t}:t,cim:a,materialOverrides:null,
colorLocked:a.colorLocked,scaleSymbolsProportionally:!1,alignment:l,anchorPoint:a.anchorPoint,isAbsoluteAnchorPoint:"Relative"!==a.anchorPointUnits};return[4,p(d,"Size",b,e,k)];case 1:return y.size=z.sent(),[4,p(d,"ScaleX",b,e,n)];case 2:return y.scaleX=z.sent(),[4,p(d,"Rotation",b,e,f)];case 3:return y.rotation=z.sent(),[4,p(d,"OffsetX",b,e,g)];case 4:return y.offsetX=z.sent(),[4,p(d,"OffsetY",b,e,c)];case 5:return y.offsetY=z.sent(),[4,p(d,"TintColor",b,e,v,F)];case 6:return E.apply(x,[(y.color=
z.sent(),y.outlineColor={r:0,g:0,b:0,a:0},y.outlineWidth=0,y.frameHeight=0,y.rotateClockwise=a.rotateClockwise,y.referenceSize=h,y.sizeRatio=1,y)]),[2]}})})}function ua(a,b,e,m,l,h,d,k){return x(this,void 0,void 0,function(){var n,f,g,c,v,t,q,p;return w(this,function(r){switch(r.label){case 0:n=a.markerGraphics;if(!n)return[2];f=0;a.scaleSymbolsProportionally&&(g=a.frame)&&(f=g.ymax-g.ymin);c=[];v=0;for(t=n;v<t.length;v++)if(q=t[v])if(p=q.symbol)switch(p.type){case "CIMPointSymbol":case "CIMLineSymbol":case "CIMPolygonSymbol":c.push(wa(a,
q,b,m,l,h,d,f,k));break;case "CIMTextSymbol":c.push(xa(a,q,b,e,m,l,h,d,f))}return[4,aa.all(c)];case 1:return r.sent(),[2]}})})}function xa(a,b,e,m,l,h,d,k,n){return x(this,void 0,void 0,function(){var f,g,c,v,t,q,u,r,A,G,x,da,y,z,R,J,P,B,F,S,H,V,W,C;return w(this,function(w){switch(w.label){case 0:f=[];E.OverrideHelper.findApplicableOverrides(b,e,f);g=b.geometry;if(!("x"in g&&"y"in g))return[2];c=b.symbol;v=c.underline?"underline":c.strikethrough?"line-through":"none";t=ka(c.fontStyleName);c.font=
fa({family:c.fontFamilyName,decoration:v},t);q=a.frame;u=g.x-.5*(q.xmin+q.xmax);r=g.y-.5*(q.ymin+q.ymax);A=a.size/n;G=a.primitiveName;x=(c.height||0)*A;da=c.angle||0;y=((c.offsetX||0)+u)*A;z=((c.offsetY||0)+r)*A;R=I(E.CIMSymbolHelper.getFillColor(c));J=I(E.CIMSymbolHelper.getStrokeColor(c));P=E.CIMSymbolHelper.getStrokeWidth(c);P||(J=I(E.CIMSymbolHelper.getFillColor(c.haloSymbol)),P=c.haloSize*A);B="";F=0;for(S=e;F<S.length;F++)H=S[F],H.primitiveName===G&&void 0!==H.value&&(B+="|"+H.primitiveName+
"|"+H.propertyName+"|"+JSON.stringify(H.value));W=(V=h).push;C={type:"text",templateHash:D.numericHash(JSON.stringify(b)+B).toString(),materialHash:function(){return D.numericHash(JSON.stringify(c.font)).toString()},cim:c,materialOverrides:null,colorLocked:a.colorLocked,alignment:d,anchorPoint:{x:a.anchorPoint?a.anchorPoint.x:0,y:a.anchorPoint?a.anchorPoint.y:0},isAbsoluteAnchorPoint:"Relative"!==a.anchorPointUnits,fontName:c.fontFamilyName,decoration:"none",weight:"normal",style:"normal"};return[4,
p(G,"Height",e,l,x)];case 1:return C.size=w.sent(),[4,p(G,"Rotation",e,l,da)];case 2:return C.angle=w.sent(),[4,p(G,"OffsetX",e,l,y)];case 3:return C.offsetX=w.sent(),[4,p(G,"OffsetY",e,l,z)];case 4:return W.apply(V,[(C.offsetY=w.sent(),C.horizontalAlignment=ia(c.horizontalAlignment),C.verticalAlignment=ja(c.verticalAlignment),C.text=ya(m,b.textString,c.textCase),C.color=R,C.outlineColor=J,C.outlineSize=P,C.referenceSize=k,C.sizeRatio=1,C)]),[2]}})})}function wa(a,b,e,m,l,h,d,k,n){return x(this,void 0,
void 0,function(){var f,g,c,v,t,q;return w(this,function(u){switch(u.label){case 0:f=b.symbol;g=b.geometry;if(!g)return[2];c=ca.getExtent(g);if("CIMTextSymbol"===f.type)return[2];v=f.symbolLayers;if(!v)return[2];t=v.length;q=function(){var f,q,u,x,B,y,z,R,J,P,N,Q,S,H,V,W,C,L,M,Y,O,K,ba,T,Z,U,X;return w(this,function(r){switch(r.label){case 0:return(f=v[t])&&!1!==f.enable?n?[4,ea(a,b,e,m,l,h,d,k)]:[3,2]:[2,"continue"];case 1:return r.sent(),[2,"continue"];case 2:q=f.type;switch(q){case "CIMSolidFill":return[3,
3];case "CIMSolidStroke":return[3,3]}return[3,5];case 3:u=ca.getSDFMetrics(c,a.frame,a.size,a.anchorPoint,"Relative"!==a.anchorPointUnits);x=u[0];B=u[1];y=u[2];z="CIMSolidFill"===f.type;R={type:"sdf",geom:g,asFill:z};J=a.primitiveName;P=a.size;N=a.rotation;Q=a.offsetX;S=a.offsetY;H=f.primitiveName;V=z?I(E.CIMSymbolHelper.getFillColor(f)):I(E.CIMSymbolHelper.getStrokeColor(f));W=z?{r:0,g:0,b:0,a:0}:I(E.CIMSymbolHelper.getStrokeColor(f));C=E.CIMSymbolHelper.getStrokeWidth(f);if(!z&&!C)return[3,6];L=
!1;M="";Y=0;for(O=e;Y<O.length;Y++)if(K=O[Y],K.primitiveName===H||K.primitiveName===J)void 0!==K.value?M+="|"+K.primitiveName+"|"+K.propertyName+"|"+JSON.stringify(K.value):K.valueExpressionInfo&&(L=!0);ba=D.numericHash(JSON.stringify(R)).toString();T=D.numericHash(JSON.stringify(f)+JSON.stringify(b)+M).toString();Z={type:"marker",templateHash:T,materialHash:L?function(){return ba}:ba,cim:R,materialOverrides:null,colorLocked:a.colorLocked,scaleSymbolsProportionally:a.scaleSymbolsProportionally,alignment:h,
anchorPoint:{x:B,y:y},isAbsoluteAnchorPoint:!1,size:null,scaleX:1,rotation:null,offsetX:null,offsetY:null,color:null,outlineColor:z?{r:0,g:0,b:0,a:0}:null,outlineWidth:z?0:null,frameHeight:k,rotateClockwise:a.rotateClockwise,referenceSize:d,sizeRatio:x};U=[p(J,"Size",e,m,P),p(J,"Rotation",e,m,N),p(J,"OffsetX",e,m,Q),p(J,"OffsetY",e,m,S),p(H,"Color",e,m,V,F),p(H,"Color",e,m,W,F),p(H,"Width",e,m,C)];return[4,aa.all(U)];case 4:return X=r.sent(),za.forEach(function(a,b){null===Z[a]&&(Z[a]=X[b])}),l.push(Z),
[3,6];case 5:return ea(a,b,e,m,l,h,d,k),[3,6];case 6:return[2]}})};u.label=1;case 1:return t--?[5,q()]:[3,3];case 2:return u.sent(),[3,1];case 3:return[2]}})})}function ea(a,b,e,m,l,h,d,k){return x(this,void 0,void 0,function(){var n,f,g,c,v,t,q,u,r,A,x,B,F,y,z;return w(this,function(w){switch(w.label){case 0:return n={type:a.type,enable:!0,name:a.name,colorLocked:a.colorLocked,primitiveName:a.primitiveName,anchorPoint:a.anchorPoint,anchorPointUnits:a.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:a.rotateClockwise,
rotation:0,size:a.size,billboardMode3D:a.billboardMode3D,depth3D:a.depth3D,frame:a.frame,markerGraphics:[b],scaleSymbolsProportionally:a.scaleSymbolsProportionally,respectFrame:a.respectFrame,clippingPath:a.clippingPath},f=[],g=["Rotation","OffsetX","OffsetY"],f=e.filter(function(b){return b.primitiveName!==a.primitiveName||-1===g.indexOf(b.propertyName)}),c=E.CIMSymbolHelper.getTextureAnchor(n),v=c[0],t=c[1],q=JSON.stringify(n),u=a.primitiveName,r=a.rotation,A=a.offsetX,x=a.offsetY,B=D.numericHash(JSON.stringify(n)).toString(),
F={type:"marker",templateHash:B,materialHash:0===f.length?B:null,cim:n,materialOverrides:f,colorLocked:a.colorLocked,scaleSymbolsProportionally:a.scaleSymbolsProportionally,alignment:h,anchorPoint:{x:v,y:t},isAbsoluteAnchorPoint:!1,size:a.size,scaleX:1,rotation:null,offsetX:null,offsetY:null,color:{r:0,g:0,b:0,a:0},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:k,rotateClockwise:a.rotateClockwise,referenceSize:d,sizeRatio:1},y=[N(q,f,m),p(u,"Rotation",e,m,r),p(u,"OffsetX",e,m,A),p(u,"OffsetY",
e,m,x)],[4,aa.all(y)];case 1:return z=w.sent(),Aa.forEach(function(a,b){null===F[a]&&(F[a]=z[b])}),l.push(F),[2]}})})}function O(a){return a&&0===a.indexOf("Level_")?parseInt(a.substr(6),10):0}function F(a){if(!a||0===a.length)return null;a=(new ga(a)).toRgba();return{r:a[0],g:a[1],b:a[2],a:a[3]}}function p(a,b,e,m,l,h){return x(this,void 0,void 0,function(){var d,k,n,f,g;return w(this,function(c){switch(c.label){case 0:if(!a)return[3,4];d=function(c){var f,g,e;return w(this,function(d){switch(d.label){case 0:if(c.primitiveName!==
a||c.propertyName!==b)return[3,2];if(void 0!==c.value)return[2,{value:h?h(c.value):c.value}];f=c.valueExpressionInfo;if(!f)return[3,2];g=f.expression;return[4,T.createRendererExpression(g,m.spatialReference,m.fields)];case 1:return e=d.sent(),[2,{value:function(a,b,c){a=U.callWithFeature(e,a,{$view:c},m.geometryType,b);null!==a&&h&&(a=h(a));return null!==a?a:l}}];case 2:return[2]}})};k=0;n=e;c.label=1;case 1:if(!(k<n.length))return[3,4];f=n[k];return[5,d(f)];case 2:g=c.sent();if("object"===typeof g)return[2,
g.value];c.label=3;case 3:return k++,[3,1];case 4:return[2,l]}})})}function X(a,b){switch(b){case "LowerCase":return a.toLowerCase();case "Allcaps":return a.toUpperCase();default:return a}}function ya(a,b,e){if(!a||-1===b.indexOf("["))return X(b,e);var m=function(a){for(var b=a.length;b--;)if(-1===" /-,\n".indexOf(a.charAt(b)))return!1;return!0},l=[],h=0,d=-1;do d=b.indexOf("[",h),d>=h&&(d>h&&(h=b.substr(h,d-h),l.push([h,null,m(h)])),h=d+1,d=b.indexOf("]",h),d>=h&&(d>h&&(h=b.substr(h,d-h),(h=a[h])&&
l.push([null,h,!1])),h=d+1));while(-1!==d);h<b.length-1&&(h=b.substr(h),l.push([h,null,m(h)]));return function(a){for(var b="",f=null,g=0;g<l.length;g++){var c=l[g],d=c[0],h=c[1],c=c[2];if(d)c?f=d:(f&&(b+=f,f=null),b+=d);else if(d=a.attributes[h])f&&(b+=f,f=null),b+=d}return X(b,e)}}function N(a,b,e){return x(this,void 0,void 0,function(){var m,l,h,d;return w(this,function(k){switch(k.label){case 0:m=function(a){var b,d,c;return w(this,function(f){switch(f.label){case 0:b=a.valueExpressionInfo;if(!b)return[3,
2];d=b.expression;return[4,T.createRendererExpression(d,e.spatialReference,e.fields)];case 1:c=f.sent(),a.fn=function(a,b,d){return U.callWithFeature(c,a,{$view:d},e.geometryType,b)},f.label=2;case 2:return[2]}})},l=0,h=b,k.label=1;case 1:if(!(l<h.length))return[3,4];d=h[l];return[5,m(d)];case 2:k.sent(),k.label=3;case 3:return l++,[3,1];case 4:return[2,function(d,f,e){for(var c=0;c<b.length;c++){var g=b[c];g.fn&&(g.value=g.fn(d,f,e))}return D.numericHash(a+E.OverrideHelper.buildOverrideKey(b)).toString()}]}})})}
Object.defineProperty(Q,"__esModule",{value:!0});var va=ha.getLogger("esri.symbols.cim.cimAnalyzer"),za="size rotation offsetX offsetY color outlineColor outlineWidth".split(" "),Aa=["materialHash","rotation","offsetX","offsetY"];Q.analyzeCIMSymbol=function(a,b,e,m,l){return x(this,void 0,void 0,function(){var h,d,k,n;return w(this,function(f){switch(f.label){case 0:h=m?m:[];if(!a)return[2,h];"CIMSymbolReference"===a.type?(d=a.symbol,k=a.primitiveOverrides):(d=a,k=null);n=d.type;switch(n){case "CIMPointSymbol":return[3,
1];case "CIMLineSymbol":return[3,1];case "CIMPolygonSymbol":return[3,1];case "CIMTextSymbol":return[3,3]}return[3,4];case 1:return[4,la(d,k,b,e,h,l)];case 2:return f.sent(),[3,4];case 3:return[3,4];case 4:return[2,h]}})})};Q.analyzeCIMResource=function(a,b){if(!b||0===b.length)return a;a=JSON.parse(JSON.stringify(a));E.OverrideHelper.applyOverrides(a,b);return a}});