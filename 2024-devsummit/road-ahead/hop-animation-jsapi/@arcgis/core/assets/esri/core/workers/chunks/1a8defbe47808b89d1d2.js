"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9860],{66992:(t,i,e)=>{e.d(i,{G:()=>n,P:()=>r,S:()=>u,T:()=>a,a:()=>S,b:()=>y,c:()=>d,d:()=>L,e:()=>x,f:()=>g,g:()=>R,h:()=>p,j:()=>C,l:()=>P,o:()=>B,p:()=>M,r:()=>T,t:()=>O});var n,s,o,h=e(63685);(o=n||(n={}))[o.Unknown=0]="Unknown",o[o.Point=1]="Point",o[o.LineString=2]="LineString",o[o.Polygon=3]="Polygon";class r{constructor(t,i){this.x=t,this.y=i}clone(){return new r(this.x,this.y)}equals(t,i){return t===this.x&&i===this.y}isEqual(t){return t.x===this.x&&t.y===this.y}setCoords(t,i){return this.x=t,this.y=i,this}normalize(){const t=this.x,i=this.y,e=Math.sqrt(t*t+i*i);return this.x/=e,this.y/=e,this}rightPerpendicular(){const t=this.x;return this.x=this.y,this.y=-t,this}leftPerpendicular(){const t=this.x;return this.x=-this.y,this.y=t,this}move(t,i){return this.x+=t,this.y+=i,this}assign(t){return this.x=t.x,this.y=t.y,this}assignAdd(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}assignSub(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}rotate(t,i){const e=this.x,n=this.y;return this.x=e*t-n*i,this.y=e*i+n*t,this}scale(t){return this.x*=t,this.y*=t,this}length(){const t=this.x,i=this.y;return Math.sqrt(t*t+i*i)}sub(t){return this.x-=t.x,this.y-=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}static distance(t,i){const e=i.x-t.x,n=i.y-t.y;return Math.sqrt(e*e+n*n)}static add(t,i){return new r(t.x+i.x,t.y+i.y)}static sub(t,i){return new r(t.x-i.x,t.y-i.y)}}class l{constructor(t,i,e){this.ratio=t,this.x=i,this.y=e}}class a{constructor(t,i,e,n=8,s=8){this._lines=[],this._starts=[],this.validateTessellation=!0,this._pixelRatio=n,this._pixelMargin=s,this._tileSize=512*n,this._dz=t,this._yPos=i,this._xPos=e}setPixelMargin(t){t!==this._pixelMargin&&(this._pixelMargin=t,this.setExtent(this._extent))}setExtent(t){this._extent=t,this._finalRatio=this._tileSize/t*(1<<this._dz);let i=this._pixelRatio*this._pixelMargin;i/=this._finalRatio;const e=t>>this._dz;i>e&&(i=e),this._margin=i,this._xmin=e*this._xPos-i,this._ymin=e*this._yPos-i,this._xmax=this._xmin+e+2*i,this._ymax=this._ymin+e+2*i}reset(t){this._type=t,this._lines=[],this._starts=[],this._line=null,this._start=0}moveTo(t,i){this._pushLine(),this._prevIsIn=this._isIn(t,i),this._moveTo(t,i,this._prevIsIn),this._prevPt=new r(t,i),this._firstPt=new r(t,i),this._dist=0}lineTo(t,i){const e=this._isIn(t,i),n=new r(t,i),s=r.distance(this._prevPt,n);let o,h,a,u,c,_,x,y;if(e)this._prevIsIn?this._lineTo(t,i,!0):(o=this._prevPt,h=n,a=this._intersect(h,o),this._start=this._dist+s*(1-this._r),this._lineTo(a.x,a.y,!0),this._lineTo(h.x,h.y,!0));else if(this._prevIsIn)h=this._prevPt,o=n,a=this._intersect(h,o),this._lineTo(a.x,a.y,!0),this._lineTo(o.x,o.y,!1);else{const t=this._prevPt,i=n;if(t.x<=this._xmin&&i.x<=this._xmin||t.x>=this._xmax&&i.x>=this._xmax||t.y<=this._ymin&&i.y<=this._ymin||t.y>=this._ymax&&i.y>=this._ymax)this._lineTo(i.x,i.y,!1);else{const e=[];if((t.x<this._xmin&&i.x>this._xmin||t.x>this._xmin&&i.x<this._xmin)&&(u=(this._xmin-t.x)/(i.x-t.x),y=t.y+u*(i.y-t.y),y<=this._ymin?_=!1:y>=this._ymax?_=!0:e.push(new l(u,this._xmin,y))),(t.x<this._xmax&&i.x>this._xmax||t.x>this._xmax&&i.x<this._xmax)&&(u=(this._xmax-t.x)/(i.x-t.x),y=t.y+u*(i.y-t.y),y<=this._ymin?_=!1:y>=this._ymax?_=!0:e.push(new l(u,this._xmax,y))),(t.y<this._ymin&&i.y>this._ymin||t.y>this._ymin&&i.y<this._ymin)&&(u=(this._ymin-t.y)/(i.y-t.y),x=t.x+u*(i.x-t.x),x<=this._xmin?c=!1:x>=this._xmax?c=!0:e.push(new l(u,x,this._ymin))),(t.y<this._ymax&&i.y>this._ymax||t.y>this._ymax&&i.y<this._ymax)&&(u=(this._ymax-t.y)/(i.y-t.y),x=t.x+u*(i.x-t.x),x<=this._xmin?c=!1:x>=this._xmax?c=!0:e.push(new l(u,x,this._ymax))),0===e.length)c?_?this._lineTo(this._xmax,this._ymax,!0):this._lineTo(this._xmax,this._ymin,!0):_?this._lineTo(this._xmin,this._ymax,!0):this._lineTo(this._xmin,this._ymin,!0);else if(e.length>1&&e[0].ratio>e[1].ratio)this._start=this._dist+s*e[1].ratio,this._lineTo(e[1].x,e[1].y,!0),this._lineTo(e[0].x,e[0].y,!0);else{this._start=this._dist+s*e[0].ratio;for(let t=0;t<e.length;t++)this._lineTo(e[t].x,e[t].y,!0)}this._lineTo(i.x,i.y,!1)}}this._dist+=s,this._prevIsIn=e,this._prevPt=n}close(){if(this._line.length>2){const t=this._firstPt,i=this._prevPt;t.x===i.x&&t.y===i.y||this.lineTo(t.x,t.y);const e=this._line;let n=e.length;for(;n>=4&&(e[0].x===e[1].x&&e[0].x===e[n-2].x||e[0].y===e[1].y&&e[0].y===e[n-2].y);)e.pop(),e[0].x=e[n-2].x,e[0].y=e[n-2].y,--n}}result(t=!0){return this._pushLine(),0===this._lines.length?null:(this._type===n.Polygon&&t&&c.simplify(this._tileSize,this._margin*this._finalRatio,this._lines),this._lines)}resultWithStarts(){if(this._type!==n.LineString)throw new Error("Only valid for lines");this._pushLine();const t=this._lines,i=t.length;if(0===i)return null;const e=[];for(let n=0;n<i;n++)e.push({line:t[n],start:this._starts[n]||0});return e}_isIn(t,i){return t>=this._xmin&&t<=this._xmax&&i>=this._ymin&&i<=this._ymax}_intersect(t,i){let e,n,s;if(i.x>=this._xmin&&i.x<=this._xmax)n=i.y<=this._ymin?this._ymin:this._ymax,s=(n-t.y)/(i.y-t.y),e=t.x+s*(i.x-t.x);else if(i.y>=this._ymin&&i.y<=this._ymax)e=i.x<=this._xmin?this._xmin:this._xmax,s=(e-t.x)/(i.x-t.x),n=t.y+s*(i.y-t.y);else{n=i.y<=this._ymin?this._ymin:this._ymax,e=i.x<=this._xmin?this._xmin:this._xmax;const o=(e-t.x)/(i.x-t.x),h=(n-t.y)/(i.y-t.y);o<h?(s=o,n=t.y+o*(i.y-t.y)):(s=h,e=t.x+h*(i.x-t.x))}return this._r=s,new r(e,n)}_pushLine(){this._line&&(this._type===n.Point?this._line.length>0&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===n.LineString?this._line.length>1&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===n.Polygon&&this._line.length>3&&(this._lines.push(this._line),this._starts.push(this._start))),this._line=[],this._start=0}_moveTo(t,i,e){this._type!==n.Polygon?e&&(t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),i=Math.round((i-(this._ymin+this._margin))*this._finalRatio),this._line.push(new r(t,i))):(e||(t<this._xmin&&(t=this._xmin),t>this._xmax&&(t=this._xmax),i<this._ymin&&(i=this._ymin),i>this._ymax&&(i=this._ymax)),t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),i=Math.round((i-(this._ymin+this._margin))*this._finalRatio),this._line.push(new r(t,i)),this._isH=!1,this._isV=!1)}_lineTo(t,i,e){let s,o;if(this._type!==n.Polygon)if(e){if(t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),i=Math.round((i-(this._ymin+this._margin))*this._finalRatio),this._line.length>0&&(s=this._line[this._line.length-1],s.equals(t,i)))return;this._line.push(new r(t,i))}else this._line&&this._line.length>0&&this._pushLine();else if(e||(t<this._xmin&&(t=this._xmin),t>this._xmax&&(t=this._xmax),i<this._ymin&&(i=this._ymin),i>this._ymax&&(i=this._ymax)),t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),i=Math.round((i-(this._ymin+this._margin))*this._finalRatio),this._line&&this._line.length>0){s=this._line[this._line.length-1];const e=s.x===t,n=s.y===i;if(e&&n)return;this._isH&&e||this._isV&&n?(s.x=t,s.y=i,o=this._line[this._line.length-2],o.x===t&&o.y===i?(this._line.pop(),this._line.length<=1?(this._isH=!1,this._isV=!1):(o=this._line[this._line.length-2],this._isH=o.x===t,this._isV=o.y===i)):(this._isH=o.x===t,this._isV=o.y===i)):(this._line.push(new r(t,i)),this._isH=e,this._isV=n)}else this._line.push(new r(t,i))}}class u{setExtent(t){this._ratio=4096===t?1:4096/t}get validateTessellation(){return this._ratio<1}reset(t){this._lines=[],this._line=null}moveTo(t,i){this._line&&this._lines.push(this._line),this._line=[];const e=this._ratio;this._line.push(new r(t*e,i*e))}lineTo(t,i){const e=this._ratio;this._line.push(new r(t*e,i*e))}close(){const t=this._line;t&&!t[0].isEqual(t[t.length-1])&&t.push(t[0])}result(){return this._line&&this._lines.push(this._line),0===this._lines.length?null:this._lines}}!function(t){t[t.sideLeft=0]="sideLeft",t[t.sideRight=1]="sideRight",t[t.sideTop=2]="sideTop",t[t.sideBottom=3]="sideBottom"}(s||(s={}));class c{static simplify(t,i,e){if(!e)return;const n=-i,o=t+i,h=-i,r=t+i,l=[],a=[],u=e.length;for(let t=0;t<u;++t){const i=e[t];if(!i||i.length<2)continue;let u,c=i[0];const _=i.length;for(let e=1;e<_;++e)u=i[e],c.x===u.x&&(c.x<=n&&(c.y>u.y?(l.push(t),l.push(e),l.push(s.sideLeft),l.push(-1)):(a.push(t),a.push(e),a.push(s.sideLeft),a.push(-1))),c.x>=o&&(c.y<u.y?(l.push(t),l.push(e),l.push(s.sideRight),l.push(-1)):(a.push(t),a.push(e),a.push(s.sideRight),a.push(-1)))),c.y===u.y&&(c.y<=h&&(c.x<u.x?(l.push(t),l.push(e),l.push(s.sideTop),l.push(-1)):(a.push(t),a.push(e),a.push(s.sideTop),a.push(-1))),c.y>=r&&(c.x>u.x?(l.push(t),l.push(e),l.push(s.sideBottom),l.push(-1)):(a.push(t),a.push(e),a.push(s.sideBottom),a.push(-1)))),c=u}if(0===l.length||0===a.length)return;c.fillParent(e,a,l),c.fillParent(e,l,a);const _=[];c.calcDeltas(_,a,l),c.calcDeltas(_,l,a),c.addDeltas(_,e)}static fillParent(t,i,e){const n=e.length,o=i.length;for(let h=0;h<o;h+=4){const o=i[h],r=i[h+1],l=i[h+2],a=t[o][r-1],u=t[o][r];let c=8092,x=-1;for(let i=0;i<n;i+=4){if(e[i+2]!==l)continue;const n=e[i],o=e[i+1],h=t[n][o-1],r=t[n][o];switch(l){case s.sideLeft:case s.sideRight:if(_(a.y,h.y,r.y)&&_(u.y,h.y,r.y)){const t=Math.abs(r.y-h.y);t<c&&(c=t,x=i)}break;case s.sideTop:case s.sideBottom:if(_(a.x,h.x,r.x)&&_(u.x,h.x,r.x)){const t=Math.abs(r.x-h.x);t<c&&(c=t,x=i)}}}i[h+3]=x}}static calcDeltas(t,i,e){const n=i.length;for(let s=0;s<n;s+=4){const n=[],o=c.calcDelta(s,i,e,n);t.push(i[s]),t.push(i[s+1]),t.push(i[s+2]),t.push(o)}}static calcDelta(t,i,e,n){const s=i[t+3];if(-1===s)return 0;const o=n.length;return o>1&&n[o-2]===s?0:(n.push(s),c.calcDelta(s,e,i,n)+1)}static addDeltas(t,i){const e=t.length;let n=0;for(let i=0;i<e;i+=4){const e=t[i+3];e>n&&(n=e)}for(let o=0;o<e;o+=4){const e=i[t[o]],h=t[o+1],r=n-t[o+3];switch(t[o+2]){case s.sideLeft:e[h-1].x-=r,e[h].x-=r,1===h&&(e[e.length-1].x-=r),h===e.length-1&&(e[0].x-=r);break;case s.sideRight:e[h-1].x+=r,e[h].x+=r,1===h&&(e[e.length-1].x+=r),h===e.length-1&&(e[0].x+=r);break;case s.sideTop:e[h-1].y-=r,e[h].y-=r,1===h&&(e[e.length-1].y-=r),h===e.length-1&&(e[0].y-=r);break;case s.sideBottom:e[h-1].y+=r,e[h].y+=r,1===h&&(e[e.length-1].y+=r),h===e.length-1&&(e[0].y+=r)}}}}const _=(t,i,e)=>t>=i&&t<=e||t>=e&&t<=i,x=Number.POSITIVE_INFINITY,y=Math.PI,p=2*y,f=128/y,d=y/180,m=1/Math.LN2;function g(t,i){return(t%=i)>=0?t:t+i}function T(t){return g(t*f,256)}function C(t){return g(.7111111111111111*t,256)}function P(t){return Math.log(t)*m}function S(t,i,e){return t*(1-e)+i*e}function R(t){return 8+Math.max(16*(t-14),0)}function M(t,i,e){let n,s,o,h=0;for(const r of e){n=r.length;for(let e=1;e<n;++e)s=r[e-1],o=r[e],s.y>i!=o.y>i&&((o.x-s.x)*(i-s.y)-(o.y-s.y)*(t-s.x)>0?h++:h--)}return 0!==h}function L(t,i,e,n){let s,o,r,l;const a=n*n;for(const n of e){const e=n.length;if(!(e<2)){s=n[0].x,o=n[0].y;for(let u=1;u<e;++u){if(r=n[u].x,l=n[u].y,(0,h.j)(t,i,s,o,r,l)<a)return!0;s=r,o=l}}}return!1}function B(t,i){if(0===i||Number.isNaN(i))return t;const e=[],n=new r(0,0),s=new r(0,0),o=new r(0,0);for(let h=0;h<t.length;h++){const l=t[h],a=[];for(let t=0;t<l.length;t++){const e=l[t-1],h=l[t],u=l[t+1];0===t?n.setCoords(0,0):n.assignSub(h,e).normalize().rightPerpendicular(),t===l.length-1?s.setCoords(0,0):s.assignSub(u,h).normalize().rightPerpendicular(),o.assignAdd(n,s).normalize();const c=o.x*s.x+o.y*s.y;0!==c&&o.scale(1/c),a.push(r.add(h,o.scale(i)))}e.push(a)}return e}function O(t,i,e,n){const s=new r(t[0],t[1]);if(s.scale(n),"viewport"===i){const t=-e*(Math.PI/180),i=Math.cos(t),n=Math.sin(t);s.rotate(i,n)}return s}},26897:(t,i,e)=>{e.d(i,{H:()=>a});var n=e(29768),s=e(48027),o=e(21972),h=e(34250),r=(e(76506),e(92143),e(17533));let l=class extends o.Z{constructor(){super(...arguments),this.color=new s.Z([0,255,255]),this.haloOpacity=1,this.fillOpacity=.25,this.multiHighlightEnabled=!1}equals(t){return this.color.equals(t.color)&&(this.haloColor||this.color).equals(t.haloColor||t.color)&&this.haloOpacity===t.haloOpacity&&this.fillOpacity===t.fillOpacity&&this.multiHighlightEnabled===t.multiHighlightEnabled}};(0,n._)([(0,h.Cb)({type:s.Z})],l.prototype,"color",void 0),(0,n._)([(0,h.Cb)({type:s.Z})],l.prototype,"haloColor",void 0),(0,n._)([(0,h.Cb)()],l.prototype,"haloOpacity",void 0),(0,n._)([(0,h.Cb)()],l.prototype,"fillOpacity",void 0),(0,n._)([(0,h.Cb)()],l.prototype,"multiHighlightEnabled",void 0),l=(0,n._)([(0,r.j)("esri.views.2d.support.HighlightOptions")],l);const a=l},82356:(t,i,e)=>{e.d(i,{A:()=>x,C:()=>g,F:()=>d,Q:()=>m,T:()=>u,U:()=>a,a:()=>_,h:()=>r,m:()=>c,n:()=>l,s:()=>f,t:()=>p});var n=e(76506),s=e(48027),o=e(26897);const h={selection:t=>new o.H({color:new s.Z([t.color.r/2,t.color.g/2,t.color.b/2,t.color.a])}),highlight:t=>t,popup:t=>new o.H({color:new s.Z([t.color.g,t.color.b,t.color.r,t.color.a])})},r=Object.keys(h),l=512,a=128,u=511,c=29,_=24;var x,y;(y=x||(x={}))[y.FilterFlags=0]="FilterFlags",y[y.Animation=1]="Animation",y[y.GPGPU=2]="GPGPU",y[y.VV=3]="VV",y[y.DD0=4]="DD0",y[y.DD1=5]="DD1",y[y.DD2=6]="DD2",r.length;const p=1.05,f=((0,n.h)("featurelayer-force-marker-text-draw-order"),2),d=124,m=10,g=256},70870:(t,i,e)=>{var n,s,o,h,r,l,a,u,c,_,x,y,p,f,d,m,g,T,C,P,S,R,M,L,B,O,v,N,D,w,E,A,b,F,I,H,k,U,W,G,q,Z,V,z,J,Y,X,j,Q,K,$,tt,it,et,nt,st,ot,ht,rt,lt,at;e.d(i,{C:()=>n,E:()=>r,G:()=>B,J:()=>s,L:()=>H,P:()=>J,a:()=>G,b:()=>o,c:()=>P,d:()=>S,e:()=>k,f:()=>R,g:()=>N,h:()=>Y,i:()=>X,j:()=>j}),function(t){t[t.BUTT=0]="BUTT",t[t.ROUND=1]="ROUND",t[t.SQUARE=2]="SQUARE",t[t.UNKNOWN=4]="UNKNOWN"}(n||(n={})),function(t){t[t.BEVEL=0]="BEVEL",t[t.ROUND=1]="ROUND",t[t.MITER=2]="MITER",t[t.UNKNOWN=4]="UNKNOWN"}(s||(s={})),function(t){t[t.SCREEN=0]="SCREEN",t[t.MAP=1]="MAP"}(o||(o={})),function(t){t[t.Tint=0]="Tint",t[t.Ignore=1]="Ignore",t[t.Multiply=99]="Multiply"}(h||(h={})),function(t){t.Both="Both",t.JustBegin="JustBegin",t.JustEnd="JustEnd",t.None="None"}(r||(r={})),function(t){t[t.Mosaic=0]="Mosaic",t[t.Centered=1]="Centered"}(l||(l={})),function(t){t[t.Normal=0]="Normal",t[t.Superscript=1]="Superscript",t[t.Subscript=2]="Subscript"}(a||(a={})),function(t){t[t.MSSymbol=0]="MSSymbol",t[t.Unicode=1]="Unicode"}(u||(u={})),function(t){t[t.Unspecified=0]="Unspecified",t[t.TrueType=1]="TrueType",t[t.PSOpenType=2]="PSOpenType",t[t.TTOpenType=3]="TTOpenType",t[t.Type1=4]="Type1"}(c||(c={})),function(t){t[t.Display=0]="Display",t[t.Map=1]="Map"}(_||(_={})),function(t){t.None="None",t.Loop="Loop",t.Oscillate="Oscillate"}(x||(x={})),function(t){t[t.Z=0]="Z",t[t.X=1]="X",t[t.Y=2]="Y"}(y||(y={})),function(t){t[t.XYZ=0]="XYZ",t[t.ZXY=1]="ZXY",t[t.YXZ=2]="YXZ"}(p||(p={})),function(t){t[t.Rectangle=0]="Rectangle",t[t.RoundedRectangle=1]="RoundedRectangle",t[t.Oval=2]="Oval"}(f||(f={})),function(t){t[t.None=0]="None",t[t.Alpha=1]="Alpha",t[t.Screen=2]="Screen",t[t.Multiply=3]="Multiply",t[t.Add=4]="Add"}(d||(d={})),function(t){t[t.TTB=0]="TTB",t[t.RTL=1]="RTL",t[t.BTT=2]="BTT"}(m||(m={})),function(t){t[t.None=0]="None",t[t.SignPost=1]="SignPost",t[t.FaceNearPlane=2]="FaceNearPlane"}(g||(g={})),function(t){t[t.Float=0]="Float",t[t.String=1]="String",t[t.Boolean=2]="Boolean"}(T||(T={})),function(t){t[t.Intersect=0]="Intersect",t[t.Subtract=1]="Subtract"}(C||(C={})),function(t){t.OpenEnded="OpenEnded",t.Block="Block",t.Crossed="Crossed"}(P||(P={})),function(t){t.FullGeometry="FullGeometry",t.PerpendicularFromFirstSegment="PerpendicularFromFirstSegment",t.ReversedFirstSegment="ReversedFirstSegment",t.PerpendicularToSecondSegment="PerpendicularToSecondSegment",t.SecondSegmentWithTicks="SecondSegmentWithTicks",t.DoublePerpendicular="DoublePerpendicular",t.OppositeToFirstSegment="OppositeToFirstSegment",t.TriplePerpendicular="TriplePerpendicular",t.HalfCircleFirstSegment="HalfCircleFirstSegment",t.HalfCircleSecondSegment="HalfCircleSecondSegment",t.HalfCircleExtended="HalfCircleExtended",t.OpenCircle="OpenCircle",t.CoverageEdgesWithTicks="CoverageEdgesWithTicks",t.GapExtentWithDoubleTicks="GapExtentWithDoubleTicks",t.GapExtentMidline="GapExtentMidline",t.Chevron="Chevron",t.PerpendicularWithArc="PerpendicularWithArc",t.ClosedHalfCircle="ClosedHalfCircle",t.TripleParallelExtended="TripleParallelExtended",t.ParallelWithTicks="ParallelWithTicks",t.Parallel="Parallel",t.PerpendicularToFirstSegment="PerpendicularToFirstSegment",t.ParallelOffset="ParallelOffset",t.OffsetOpposite="OffsetOpposite",t.OffsetSame="OffsetSame",t.CircleWithArc="CircleWithArc",t.DoubleJog="DoubleJog",t.PerpendicularOffset="PerpendicularOffset",t.LineExcludingLastSegment="LineExcludingLastSegment",t.MultivertexArrow="MultivertexArrow",t.CrossedArrow="CrossedArrow",t.ChevronArrow="ChevronArrow",t.ChevronArrowOffset="ChevronArrowOffset",t.PartialFirstSegment="PartialFirstSegment",t.Arch="Arch",t.CurvedParallelTicks="CurvedParallelTicks",t.Arc90Degrees="Arc90Degrees"}(S||(S={})),function(t){t.Mitered="Mitered",t.Bevelled="Bevelled",t.Rounded="Rounded",t.Square="Square",t.TrueBuffer="TrueBuffer"}(R||(R={})),function(t){t.ClosePath="ClosePath",t.ConvexHull="ConvexHull",t.RectangularBox="RectangularBox"}(M||(M={})),function(t){t.BeginningOfLine="BeginningOfLine",t.EndOfLine="EndOfLine"}(L||(L={})),function(t){t.Mitered="Mitered",t.Bevelled="Bevelled",t.Rounded="Rounded",t.Square="Square"}(B||(B={})),function(t){t.Fast="Fast",t.Accurate="Accurate"}(O||(O={})),function(t){t.BeginningOfLine="BeginningOfLine",t.EndOfLine="EndOfLine"}(v||(v={})),function(t){t.Sinus="Sinus",t.Square="Square",t.Triangle="Triangle",t.Random="Random"}(N||(N={})),function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Force=2]="Force"}(D||(D={})),function(t){t[t.Buffered=0]="Buffered",t[t.Left=1]="Left",t[t.Right=2]="Right",t[t.AlongLine=3]="AlongLine"}(w||(w={})),function(t){t[t.Linear=0]="Linear",t[t.Rectangular=1]="Rectangular",t[t.Circular=2]="Circular",t[t.Buffered=3]="Buffered"}(E||(E={})),function(t){t[t.Discrete=0]="Discrete",t[t.Continuous=1]="Continuous"}(A||(A={})),function(t){t[t.AcrossLine=0]="AcrossLine",t[t.AloneLine=1]="AloneLine"}(b||(b={})),function(t){t[t.Left=0]="Left",t[t.Right=1]="Right",t[t.Center=2]="Center",t[t.Justify=3]="Justify"}(F||(F={})),function(t){t[t.Base=0]="Base",t[t.MidPoint=1]="MidPoint",t[t.ThreePoint=2]="ThreePoint",t[t.FourPoint=3]="FourPoint",t[t.Underline=4]="Underline",t[t.CircularCW=5]="CircularCW",t[t.CircularCCW=6]="CircularCCW"}(I||(I={})),function(t){t.Butt="Butt",t.Round="Round",t.Square="Square"}(H||(H={})),function(t){t.NoConstraint="NoConstraint",t.HalfPattern="HalfPattern",t.HalfGap="HalfGap",t.FullPattern="FullPattern",t.FullGap="FullGap",t.Custom="Custom"}(k||(k={})),function(t){t[t.None=-1]="None",t[t.Custom=0]="Custom",t[t.Circle=1]="Circle",t[t.OpenArrow=2]="OpenArrow",t[t.ClosedArrow=3]="ClosedArrow",t[t.Diamond=4]="Diamond"}(U||(U={})),function(t){t[t.ExtraLeading=0]="ExtraLeading",t[t.Multiple=1]="Multiple",t[t.Exact=2]="Exact"}(W||(W={})),function(t){t.Bevel="Bevel",t.Round="Round",t.Miter="Miter"}(G||(G={})),function(t){t[t.Default=0]="Default",t[t.String=1]="String",t[t.Numeric=2]="Numeric"}(q||(q={})),function(t){t[t.InsidePolygon=0]="InsidePolygon",t[t.PolygonCenter=1]="PolygonCenter",t[t.RandomlyInsidePolygon=2]="RandomlyInsidePolygon"}(Z||(Z={})),function(t){t[t.Tint=0]="Tint",t[t.Replace=1]="Replace",t[t.Multiply=2]="Multiply"}(V||(V={})),function(t){t[t.ClipAtBoundary=0]="ClipAtBoundary",t[t.RemoveIfCenterOutsideBoundary=1]="RemoveIfCenterOutsideBoundary",t[t.DoNotTouchBoundary=2]="DoNotTouchBoundary",t[t.DoNotClip=3]="DoNotClip"}(z||(z={})),function(t){t.NoConstraint="NoConstraint",t.WithMarkers="WithMarkers",t.WithFullGap="WithFullGap",t.WithHalfGap="WithHalfGap",t.Custom="Custom"}(J||(J={})),function(t){t.Fixed="Fixed",t.Random="Random",t.RandomFixedQuantity="RandomFixedQuantity"}(Y||(Y={})),function(t){t.LineMiddle="LineMiddle",t.LineBeginning="LineBeginning",t.LineEnd="LineEnd",t.SegmentMidpoint="SegmentMidpoint"}(X||(X={})),function(t){t.OnPolygon="OnPolygon",t.CenterOfMass="CenterOfMass",t.BoundingBoxCenter="BoundingBoxCenter"}(j||(j={})),function(t){t[t.Low=0]="Low",t[t.Medium=1]="Medium",t[t.High=2]="High"}(Q||(Q={})),function(t){t[t.MarkerCenter=0]="MarkerCenter",t[t.MarkerBounds=1]="MarkerBounds"}(K||(K={})),function(t){t[t.None=0]="None",t[t.PropUniform=1]="PropUniform",t[t.PropNonuniform=2]="PropNonuniform",t[t.DifUniform=3]="DifUniform",t[t.DifNonuniform=4]="DifNonuniform"}($||($={})),function(t){t.Tube="Tube",t.Strip="Strip",t.Wall="Wall"}(tt||(tt={})),function(t){t[t.Random=0]="Random",t[t.Increasing=1]="Increasing",t[t.Decreasing=2]="Decreasing",t[t.IncreasingThenDecreasing=3]="IncreasingThenDecreasing"}(it||(it={})),function(t){t[t.Relative=0]="Relative",t[t.Absolute=1]="Absolute"}(et||(et={})),function(t){t[t.Normal=0]="Normal",t[t.LowerCase=1]="LowerCase",t[t.Allcaps=2]="Allcaps"}(nt||(nt={})),function(t){t[t.LTR=0]="LTR",t[t.RTL=1]="RTL"}(st||(st={})),function(t){t.Draft="Draft",t.Picture="Picture",t.Text="Text"}(ot||(ot={})),function(t){t[t.Top=0]="Top",t[t.Center=1]="Center",t[t.Baseline=2]="Baseline",t[t.Bottom=3]="Bottom"}(ht||(ht={})),function(t){t[t.Right=0]="Right",t[t.Upright=1]="Upright"}(rt||(rt={})),function(t){t[t.Small=0]="Small",t[t.Medium=1]="Medium",t[t.Large=2]="Large"}(lt||(lt={})),function(t){t[t.Calm=0]="Calm",t[t.Rippled=1]="Rippled",t[t.Slight=2]="Slight",t[t.Moderate=3]="Moderate"}(at||(at={}))}}]);