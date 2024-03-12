// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports"],function(w){function J(a,c,b){a[0]=c[0]-b[0];a[1]=c[1]-b[1];return a}function K(a){var c=a[0],b=a[1];c=Math.sqrt(c*c+b*b);a[0]/=c;a[1]/=c}function G(a){return a.length-1}function H(a){let c=0;for(let b=0;b<G(a);b++)c+=L(a,b);return c}function L(a,c,b=1){const [d,h]=a[c+1];return Math.sqrt(d*d+h*h)*b}function I(a,c,b,d,h){if(!(b<c)){var m=d.clone().seek(b/2);null!=m&&(a(m.clone(),b,h),b=(b-c)/2,m=m.seek(c/2),I(a,c,b,d,h+1),I(a,c,b,m,h+1))}}class A{constructor(a,c,b,d,h){this._segments=
a;this._index=c;this._distance=b;this._xStart=d;this._yStart=h;this._done=!1}static create(a){return new A(a,0,0,a[0][0],a[0][1])}clone(){return new A(this._segments,this._index,this._distance,this.xStart,this.yStart)}equals(a){return this._index===a._index||a._index===this._index-1&&(0===this._distance||1===a._distance)||a._index===this._index+1&&(1===this._distance||0===a._distance)}leq(a){return this._index<a._index||this._index===a._index&&this._distance<=a._distance}geq(a){return this._index>
a._index||this._index===a._index&&this._distance>=a._distance}get _segment(){return this._segments[this._index+1]}get angle(){const a=this.dy;let c=Math.acos((0*a+-1*-this.dx)/(1*this.length));0<a&&(c=2*Math.PI-c);return c}get xStart(){return this._xStart}get yStart(){return this._yStart}get x(){return this.xStart+this.distance*this.dx}get y(){return this.yStart+this.distance*this.dy}get dx(){return this._segment[0]}get dy(){return this._segment[1]}get xMidpoint(){return this.xStart+.5*this.dx}get yMidpoint(){return this.yStart+
.5*this.dy}get xEnd(){return this.xStart+this.dx}get yEnd(){return this.yStart+this.dy}get length(){const {dx:a,dy:c}=this;return Math.sqrt(a*a+c*c)}get remainingLength(){return this.length*(1-this._distance)}get backwardLength(){return this.length*this._distance}get distance(){return this._distance}get done(){return this._done}hasPrev(){return 0<=this._index-1}hasNext(){return this._index+1<G(this._segments)}next(){if(!this.hasNext())return null;this._xStart+=this.dx;this._yStart+=this.dy;this._distance=
0;this._index+=1;return this}prev(){if(!this.hasPrev())return this._done=!0,null;--this._index;this._xStart-=this.dx;this._yStart-=this.dy;this._distance=1;return this}_seekBackwards(a,c){var b=this.backwardLength;if(a<=b)return this._distance=(b-a)/this.length,this;for(b=this.backwardLength;this.prev();){if(b+this.length>a)return this._seekBackwards(a-b);b+=this.length}this._distance=0;return c?this:null}seek(a,c=!1){if(0>a)return this._seekBackwards(Math.abs(a),c);if(a<=this.remainingLength)return this._distance=
(this.backwardLength+a)/this.length,this;let b=this.remainingLength;for(;this.next();){if(b+this.length>a)return this.seek(a-b,c);b+=this.length}this._distance=1;return c?this:null}}w.SegmentCursor=A;w.pathDivide=function(a,c,b,d=!0){const h=H(a);a=A.create(a);const m=h/2;if(d){d=Math.floor(Math.max((h-c)/2,0)/c);a.seek(m-d*c);for(let e=-d;e<=d;e++)512>a.x&&0<=a.x&&512>a.y&&0<=a.y&&b(a.clone(),e,m+e*c,h),a.seek(c)}else a.seek(m),b(a.clone(),0,m+0*c,h)};w.pathLength=H;w.pathSubdivide=function(a,c,
b){I(b,c,H(a),A.create(a),0)};w.segmentAt=function(a,c){return a[c+1]};w.segmentCount=G;w.segmentLength=L;w.smoothPaths=function(a,c){for(let E=0;E<a.length;E++){let z=a[E];a:{var b=z,d=c;if(0>=d)break a;const l=b.length;if(3>l)break a;const f=[];var h=0;f.push(0);for(var m=1;m<l;m++){var e=b[m],p=b[m-1],t=e[0]-p[0];e=e[1]-p[1];h+=Math.sqrt(t*t+e*e);f.push(h)}d=Math.min(d,.2*h);t=[];t.push(b[0][0]);t.push(b[0][1]);h=b[l-1][0];m=b[l-1][1];e=J([0,0],b[0],b[1]);K(e);b[0][0]+=d*e[0];b[0][1]+=d*e[1];J(e,
b[l-1],b[l-2]);K(e);b[l-1][0]+=d*e[0];b[l-1][1]+=d*e[1];for(e=1;e<l;e++)f[e]+=d;f[l-1]+=d;e=.5*d;for(p=1;p<l-1;p++){let v=0,x=0,F=0;for(var g=p-1;0<=g&&!(f[g+1]<f[p]-e);g--){var q=e+f[g+1]-f[p],n=f[g+1]-f[g],k=f[p]-f[g]<e?1:q/n;if(1E-6>Math.abs(k))break;var u=k*k,B=k*q-.5*u*n,y=k*n/d,r=b[g+1],C=b[g][0]-r[0],D=b[g][1]-r[1];v+=y/B*(r[0]*k*q+.5*u*(q*C-n*r[0])-u*k*n*C/3);x+=y/B*(r[1]*k*q+.5*u*(q*D-n*r[1])-u*k*n*D/3);F+=y}for(g=p+1;g<l&&!(f[g-1]>f[p]+e);g++){q=e-f[g-1]+f[p];n=f[g]-f[g-1];k=f[g]-f[p]<e?
1:q/n;if(1E-6>Math.abs(k))break;u=k*k;B=k*q-.5*u*n;y=k*n/d;r=b[g-1];C=b[g][0]-r[0];D=b[g][1]-r[1];v+=y/B*(r[0]*k*q+.5*u*(q*C-n*r[0])-u*k*n*C/3);x+=y/B*(r[1]*k*q+.5*u*(q*D-n*r[1])-u*k*n*D/3);F+=y}t.push(v/F);t.push(x/F)}t.push(h);t.push(m);for(let v=0,x=0;v<l;v++)b[v][0]=t[x++],b[v][1]=t[x++]}b=[];b.push(z[0]);for(d=1;d<z.length;d++){const [l,f]=z[d-1],[v,x]=z[d];b.push([Math.round(v-l),Math.round(x-f)])}z=a[E]=b}return a};Object.defineProperty(w,Symbol.toStringTag,{value:"Module"})});