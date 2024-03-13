"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8088],{99520:(t,e,n)=>{var r;n.d(e,{V:()=>r}),function(t){t.POSITION="position",t.NORMAL="normal",t.NORMALCOMPRESSED="normalCompressed",t.UV0="uv0",t.COLOR="color",t.SYMBOLCOLOR="symbolColor",t.SIZE="size",t.TANGENT="tangent",t.OFFSET="offset",t.PERSPECTIVEDIVIDE="perspectiveDivide",t.CENTEROFFSETANDDISTANCE="centerOffsetAndDistance",t.LENGTH="length",t.PREVPOSITION="prevPosition",t.NEXTPOSITION="nextPosition",t.SUBDIVISIONFACTOR="subdivisionFactor",t.COLORFEATUREATTRIBUTE="colorFeatureAttribute",t.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",t.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",t.DISTANCETOSTART="distanceToStart",t.UVMAPSPACE="uvMapSpace",t.BOUNDINGRECT="boundingRect",t.UVREGION="uvRegion",t.PROFILERIGHT="profileRight",t.PROFILEUP="profileUp",t.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",t.FEATUREVALUE="featureValue",t.INSTANCEMODELORIGINHI="instanceModelOriginHi",t.INSTANCEMODELORIGINLO="instanceModelOriginLo",t.INSTANCEMODEL="instanceModel",t.INSTANCEMODELNORMAL="instanceModelNormal",t.INSTANCECOLOR="instanceColor",t.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",t.LOCALTRANSFORM="localTransform",t.GLOBALTRANSFORM="globalTransform",t.BOUNDINGSPHERE="boundingSphere",t.MODELORIGIN="modelOrigin",t.MODELSCALEFACTORS="modelScaleFactors",t.FEATUREATTRIBUTE="featureAttribute",t.STATE="state",t.LODLEVEL="lodLevel",t.POSITION0="position0",t.POSITION1="position1",t.NORMAL2COMPRESSED="normal2Compressed",t.COMPONENTINDEX="componentIndex",t.VARIANTOFFSET="variantOffset",t.VARIANTSTROKE="variantStroke",t.VARIANTEXTENSION="variantExtension",t.SIDENESS="sideness",t.START="start",t.END="end",t.UP="up",t.EXTRUDE="extrude",t.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",t.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"}(r||(r={}))},13814:(t,e,n)=>{n.d(e,{c:()=>u});var r=n(82426),s=n(65775),o=n(66106),i=n(50626),c=n(53785);function a(t,e,n){const r=Math.sin(t),s=Math.cos(t),o=Math.sin(e),i=Math.cos(e),c=n;return c[0]=-r,c[4]=-o*s,c[8]=i*s,c[12]=0,c[1]=s,c[5]=-o*r,c[9]=i*r,c[13]=0,c[2]=0,c[6]=i,c[10]=o,c[14]=0,c[3]=0,c[7]=0,c[11]=0,c[15]=1,c}function u(t,e,n,r){if(null==t||null==r)return!1;const o=(0,i.c)(t,i.s),u=(0,i.c)(r,i.d);if(o===u&&!f(u)&&(o!==i.P.UNKNOWN||(0,c.f)(t,r)))return(0,s.f)(n,e),!0;if(f(u)){const t=i.e[o][i.P.LON_LAT],r=i.e[i.P.LON_LAT][u];return null!=t&&null!=r&&(t(e,0,l,0),r(l,0,h,0),a(E*l[0],E*l[1],n),n[12]=h[0],n[13]=h[1],n[14]=h[2],!0)}if((u===i.P.WEB_MERCATOR||u===i.P.PLATE_CARREE||u===i.P.WGS84)&&(o===i.P.WGS84||o===i.P.CGCS2000&&u===i.P.PLATE_CARREE||o===i.P.SPHERICAL_ECEF||o===i.P.WEB_MERCATOR)){const t=i.e[o][i.P.LON_LAT],r=i.e[i.P.LON_LAT][u];return null!=t&&null!=r&&(t(e,0,l,0),r(l,0,h,0),o===i.P.SPHERICAL_ECEF?function(t,e,n){a(t,e,n),(0,s.t)(n,n)}(E*l[0],E*l[1],n):(0,s.k)(n),n[12]=h[0],n[13]=h[1],n[14]=h[2],!0)}return!1}function f(t){return t===i.P.SPHERICAL_ECEF||t===i.P.SPHERICAL_MARS_PCPF||t===i.P.SPHERICAL_MOON_PCPF}const E=(0,r.d)(1),l=(0,o.c)(),h=(0,o.c)()},26923:(t,e,n)=>{n.d(e,{a:()=>a,b:()=>E,c:()=>f,f:()=>s,h:()=>l,i:()=>c,j:()=>h,m:()=>u,s:()=>o,t:()=>i});var r=n(29794);function s(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function o(t,e,n,r,s,o,i,c,a,u){return t[0]=e,t[1]=n,t[2]=r,t[3]=s,t[4]=o,t[5]=i,t[6]=c,t[7]=a,t[8]=u,t}function i(t,e){if(t===e){const n=e[1],r=e[2],s=e[5];t[1]=e[3],t[2]=e[6],t[3]=n,t[5]=e[7],t[6]=r,t[7]=s}else t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8];return t}function c(t,e){const n=e[0],r=e[1],s=e[2],o=e[3],i=e[4],c=e[5],a=e[6],u=e[7],f=e[8],E=f*i-c*u,l=-f*o+c*a,h=u*o-i*a;let I=n*E+r*l+s*h;return I?(I=1/I,t[0]=E*I,t[1]=(-f*r+s*u)*I,t[2]=(c*r-s*i)*I,t[3]=l*I,t[4]=(f*n-s*a)*I,t[5]=(-c*n+s*o)*I,t[6]=h*I,t[7]=(-u*n+r*a)*I,t[8]=(i*n-r*o)*I,t):null}function a(t,e){const n=e[0],r=e[1],s=e[2],o=e[3],i=e[4],c=e[5],a=e[6],u=e[7],f=e[8];return t[0]=i*f-c*u,t[1]=s*u-r*f,t[2]=r*c-s*i,t[3]=c*a-o*f,t[4]=n*f-s*a,t[5]=s*o-n*c,t[6]=o*u-i*a,t[7]=r*a-n*u,t[8]=n*i-r*o,t}function u(t,e,n){const r=e[0],s=e[1],o=e[2],i=e[3],c=e[4],a=e[5],u=e[6],f=e[7],E=e[8],l=n[0],h=n[1],I=n[2],N=n[3],T=n[4],O=n[5],A=n[6],m=n[7],R=n[8];return t[0]=l*r+h*i+I*u,t[1]=l*s+h*c+I*f,t[2]=l*o+h*a+I*E,t[3]=N*r+T*i+O*u,t[4]=N*s+T*c+O*f,t[5]=N*o+T*a+O*E,t[6]=A*r+m*i+R*u,t[7]=A*s+m*c+R*f,t[8]=A*o+m*a+R*E,t}function f(t,e,n){const r=n[0],s=n[1],o=n[2];return t[0]=r*e[0],t[1]=r*e[1],t[2]=r*e[2],t[3]=s*e[3],t[4]=s*e[4],t[5]=s*e[5],t[6]=o*e[6],t[7]=o*e[7],t[8]=o*e[8],t}function E(t,e){const n=e[0],r=e[1],s=e[2],o=e[3],i=n+n,c=r+r,a=s+s,u=n*i,f=r*i,E=r*c,l=s*i,h=s*c,I=s*a,N=o*i,T=o*c,O=o*a;return t[0]=1-E-I,t[3]=f-O,t[6]=l+T,t[1]=f+O,t[4]=1-u-I,t[7]=h-N,t[2]=l-T,t[5]=h+N,t[8]=1-u-E,t}function l(t,e){const n=e[0],r=e[1],s=e[2],o=e[3],i=e[4],c=e[5],a=e[6],u=e[7],f=e[8],E=e[9],l=e[10],h=e[11],I=e[12],N=e[13],T=e[14],O=e[15],A=n*c-r*i,m=n*a-s*i,R=n*u-o*i,M=r*a-s*c,P=r*u-o*c,S=s*u-o*a,d=f*N-E*I,p=f*T-l*I,C=f*O-h*I,L=E*T-l*N,g=E*O-h*N,_=l*O-h*T;let F=A*_-m*g+R*L+M*C-P*p+S*d;return F?(F=1/F,t[0]=(c*_-a*g+u*L)*F,t[1]=(a*C-i*_-u*p)*F,t[2]=(i*g-c*C+u*d)*F,t[3]=(s*g-r*_-o*L)*F,t[4]=(n*_-s*C+o*p)*F,t[5]=(r*C-n*g-o*d)*F,t[6]=(N*S-T*P+O*M)*F,t[7]=(T*R-I*S-O*m)*F,t[8]=(I*P-N*R+O*A)*F,t):null}function h(t){const e=(0,r.g)(),n=t[0],s=t[1],o=t[2],i=t[3],c=t[4],a=t[5],u=t[6],f=t[7],E=t[8];return Math.abs(1-(n*n+i*i+u*u))<=e&&Math.abs(1-(s*s+c*c+f*f))<=e&&Math.abs(1-(o*o+a*a+E*E))<=e}},16912:(t,e,n)=>{function r(){return[1,0,0,0,1,0,0,0,1]}function s(t,e,n,r,s,o,i,c,a){return[t,e,n,r,s,o,i,c,a]}n.d(e,{I:()=>o,c:()=>r,f:()=>s});const o=[1,0,0,0,1,0,0,0,1]},57532:(t,e,n)=>{function r(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function s(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}n.d(e,{I:()=>o,a:()=>s,c:()=>r});const o=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},99045:(t,e,n)=>{n(82426),n(72836);var r=n(66106);(0,r.c)(),(0,r.c)(),(0,r.c)(),(0,r.c)(),(0,r.c)()},68088:(t,e,n)=>{n.r(e),n.d(e,{assetMapFromAssetMapsJSON:()=>P,extractMesh:()=>m,meshFeatureSetFromJSON:()=>A});var r=n(23761),s=n(92143),o=n(91306),i=n(66106),c=n(21801),a=n(10260),u=n(91597),f=n(60947),E=n(46961),l=n(45274),h=n(45003),I=n(20114),N=n(13235),T=n(87258);n(29768),n(74569),n(73796),n(12047),n(21972),n(76506),n(17533),n(86656),n(66396),n(22723),n(6540),n(31450),n(60991),n(34250),n(62062),n(6906),n(50406),n(97714),n(53785),n(57251),n(73173),n(82058),n(88762),n(32101),n(2906),n(84069),n(35132),n(86787),n(44567),n(63685),n(89034),n(98380),n(92482),n(82426),n(72836),n(29794),n(92896),n(22781),n(32422),n(86748),n(66122),n(15324),n(75067),n(89914),n(14249),n(66284),n(8925),n(3482),n(76131),n(36097),n(87239),n(29107),n(30574),n(2157),n(25977),n(58076),n(98242),n(7471),n(54414),n(59465),n(1648),n(45154),n(16769),n(93603),n(15438),n(593),n(48027),n(54174),n(85699),n(55531),n(96055),n(47776),n(18033),n(6331),n(62048),n(56890),n(30493),n(4292),n(75626),n(72652),n(29641),n(70821),n(3296),n(34229),n(37029),n(96467),n(63571),n(30776),n(63130),n(25696),n(94216),n(42775),n(95834),n(34394),n(57150),n(76726),n(20444),n(76393),n(78548),n(2497),n(49906),n(46527),n(11799),n(48649),n(81731),n(9960),n(30823),n(53326),n(5853),n(39141),n(38742),n(48243),n(34635),n(10401),n(49900),n(81184),n(33101),n(58943),n(67477),n(78533),n(74653),n(91091),n(70737),n(36834),n(8487),n(17817),n(90814),n(15459),n(97189),n(61847),n(28212),n(16955),n(22401),n(48699),n(77894),n(55187),n(8586),n(44509),n(69814),n(11305),n(62259),n(44790),n(58085),n(41864),n(5909),n(60669),n(48208),n(51589),n(34987),n(35861),n(7200),n(68681),n(81773),n(44265),n(68225),n(55636),n(88324),n(71337),n(64738),n(65775),n(79641),n(74875),n(11545),n(5777),n(97987),n(92457),n(8358),n(55633),n(32191),n(99045),n(87583),n(90532),n(33417),n(62348),n(50766),n(94446),n(99520),n(46283),n(84017),n(26923),n(1623),n(50626),n(92624),n(92847),n(57257),n(13814),n(40167),n(47880),n(35290),n(97546),n(9801),n(53523),n(42911),n(46826),n(45433),n(54732);const O=()=>s.L.getLogger("esri.rest.support.meshFeatureSet");function A(t,e,n){const s=n.features;n.features=[],delete n.geometryType;const o=T.Z.fromJSON(n);if(o.geometryType="mesh",!n.assetMaps)return o;const i=P(e,n.assetMaps),c=t.sourceSpatialReference??f.Z.WGS84,a=n.globalIdFieldName,{outFields:u}=t,E=null!=u&&u.length>0?(l=u.includes("*")?null:new Set(u),({attributes:t})=>{if(!t)return{};if(!l)return t;for(const e in t)l.has(e)||delete t[e];return t}):()=>({});var l;for(const t of s){const n=m(t,a,c,e,i);null!=n&&o.features.push(new r.Z({geometry:n,attributes:E(t)}))}return o}function m(t,e,n,r,s){const o=t.attributes[e],f=s.get(o);if(null==f)return O().error("mesh-feature-set:asset-not-found","Service returned a feature which was not found in the asset map",t),null;if(!t.geometry)return O().error("mesh-feature-set:no-geometry","Service returned a feature without geometry",t),null;const{originPoint:N,originVector:T}=function({attributes:t},e,{transformFieldRoles:n}){const r=t[n.originX],s=t[n.originY],o=t[n.originZ];return{originPoint:new u.Z({x:r,y:s,z:o,spatialReference:e}),originVector:(0,i.f)(r,s,o)}}(t,n,r),A=c.Z.fromJSON(t.geometry);A.spatialReference=n;const m=function(t,{transformFieldRoles:e}){return new h.Z({translation:[t[e.translationX],-t[e.translationZ],t[e.translationY]],rotationAxis:[t[e.rotationX],-t[e.rotationZ],t[e.rotationY]],rotationAngle:t[e.rotationDeg],scale:[t[e.scaleX],t[e.scaleZ],t[e.scaleY]]})}(t.attributes,r),M=f.projectVertices?new E.Z({origin:T}):new l.Z({origin:T}),P=function(t){const e=Array.from(t.files.values()),n=new Array;for(const t of e){if(t.status!==R.COMPLETED)return null;const e=new Array;for(const n of t.parts){if(!n)return null;e.push(new I.S(n.url,n.hash))}n.push(new I.a(t.name,t.mimeType,e))}return n}(f);return P?a.Z.createWithExternalSource(N,P,{extent:A,transform:m,vertexSpace:M}):a.Z.createIncomplete(N,{extent:A,transform:m,vertexSpace:M})}var R,M;function P(t,e){const n=new Map;for(const r of e){const e=r.parentGlobalId;if(null==e)continue;const s=r.assetName,i=r.assetType,c=r.assetHash,a=r.assetURL,u=r.conversionStatus,f=r.seqNo,E=(0,N.d)(i,t.supportedFormats);if(!E){O().error("mesh-feature-set:unknown-format",`Service returned an asset of type ${i}, but it does not list it as a supported type`);continue}const l=(0,o.g)(n,e,(()=>{return{projectVertices:(t=r.flags,{projectVertices:t.includes("PROJECT_VERTICES")}).projectVertices,files:new Map};var t}));(0,o.g)(l.files,s,(()=>({name:s,type:i,mimeType:E,status:S(u),parts:[]}))).parts[f]={hash:c,url:a}}return n}function S(t){switch(t){case"COMPLETED":case"SUBMITTED":return R.COMPLETED;case"INPROGRESS":return R.PENDING;default:return R.FAILED}}(M=R||(R={}))[M.FAILED=0]="FAILED",M[M.PENDING=1]="PENDING",M[M.COMPLETED=2]="COMPLETED"},55633:(t,e,n)=>{n.d(e,{B:()=>L,C:()=>O,O:()=>l,a:()=>T,b:()=>d,c:()=>P,e:()=>R,f:()=>M,g:()=>C,h:()=>p,s:()=>N,v:()=>A});var r=n(82426),s=n(72836),o=n(66106),i=(n(76506),n(92143),n(89034),n(6906)),c=n(16912),a=n(57532),u=n(45087),f=n(32191),E=n(68681);n(99045);class l{constructor(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,i.n)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*h);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,h));t++)this._items.push(this._allocator())}}const h=1024;class I{constructor(t){this._create=t,this._items=new Array,this._itemsPtr=0}get(){return 0===this._itemsPtr&&(0,i.n)((()=>this._reset())),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const t=2*this._itemsPtr;this._items.length>t&&(this._items.length=t),this._itemsPtr=0}static createVec2f64(){return new I(f.c)}static createVec3f64(){return new I(o.c)}static createVec4f64(){return new I(E.c)}static createMat3f64(){return new I(c.c)}static createMat4f64(){return new I(a.c)}static createQuatf64(){return new I(u.c)}get test(){return{length:this._items.length}}}I.createVec2f64();const N=I.createVec3f64();I.createVec4f64(),I.createMat3f64();const T=I.createMat4f64(),O=I.createQuatf64();function A(t){return t?m((0,o.a)(t.origin),(0,o.a)(t.direction)):m((0,o.c)(),(0,o.c)())}function m(t,e){return{origin:t,direction:e}}function R(t,e){const n=S.get();return n.origin=t,n.direction=e,n}function M(t,e,n=A()){return(0,s.p)(n.origin,t),(0,s.c)(n.direction,e,t),n}function P(t,e,n){const r=(0,s.d)(t.direction,(0,s.c)(n,e,t.origin));return(0,s.h)(n,t.origin,(0,s.b)(n,t.direction,r)),n}const S=new l((()=>A()));function d(t,e){const n=(0,s.d)(t,e)/((0,s.l)(t)*(0,s.l)(e));return-(0,r.a)(n)}function p(t=b){return[t[0],t[1],t[2],t[3]]}function C(t){return t}function L(t,e,n,r=0,o=Math.floor(n*(1/3)),i=Math.floor(n*(2/3))){if(n<3)return!1;e(_,r);let c=o,a=!1;for(;c<n-1&&!a;)e(F,c),c++,a=!(0,s.o)(_,F);if(!a)return!1;for(c=Math.max(c,i),a=!1;c<n&&!a;)e(D,c),c++,(0,s.c)(w,_,F),(0,s.n)(w,w),(0,s.c)(v,F,D),(0,s.n)(v,v),a=!(0,s.o)(_,D)&&!(0,s.o)(F,D)&&Math.abs((0,s.d)(w,v))<g;return a?(function(t,e,n,r=p()){const s=n[0]-e[0],o=n[1]-e[1],i=n[2]-e[2],c=t[0]-e[0],a=t[1]-e[1],u=t[2]-e[2],f=o*u-i*a,E=i*c-s*u,l=s*a-o*c,h=f*f+E*E+l*l,I=Math.abs(h-1)>1e-5&&h>1e-12?1/Math.sqrt(h):1;r[0]=f*I,r[1]=E*I,r[2]=l*I,r[3]=-(r[0]*t[0]+r[1]*t[1]+r[2]*t[2])}(_,F,D,t),!0):(0!==r||1!==o||2!==i)&&L(t,e,n,0,1,2)}(0,o.c)(),(0,o.c)();const g=.99619469809,_=(0,o.c)(),F=(0,o.c)(),D=(0,o.c)(),w=(0,o.c)(),v=(0,o.c)(),b=[0,0,1,0];var V,y;(y=V||(V={}))[y.NONE=0]="NONE",y[y.CLAMP=1]="CLAMP",y[y.INFINITE_MIN=4]="INFINITE_MIN",y[y.INFINITE_MAX=8]="INFINITE_MAX",V.INFINITE_MIN,V.INFINITE_MAX,V.INFINITE_MAX},35290:(t,e,n)=>{n.d(e,{p:()=>i});var r=n(66106),s=n(1623),o=n(50626);function i(t,e,n,r){if((0,s.canProjectWithoutEngine)(t.spatialReference,n)){c[0]=t.x,c[1]=t.y;const s=t.z;return c[2]=s??r??0,(0,o.p)(c,t.spatialReference,0,e,n,0,1)}const i=(0,s.tryProjectWithZConversion)(t,n);return!!i&&(e[0]=i?.x,e[1]=i?.y,e[2]=i?.z??r??0,!0)}const c=(0,r.c)()},35861:(t,e,n)=>{n.d(e,{a:()=>E,c:()=>u,e:()=>l,f:()=>f,g:()=>c,m:()=>a,s:()=>i});var r=n(66106),s=n(29794),o=(n(72836),n(7200));function i(t,e,n){n*=.5;const r=Math.sin(n);return t[0]=r*e[0],t[1]=r*e[1],t[2]=r*e[2],t[3]=Math.cos(n),t}function c(t,e){const n=2*Math.acos(e[3]),r=Math.sin(n/2);return r>(0,s.g)()?(t[0]=e[0]/r,t[1]=e[1]/r,t[2]=e[2]/r):(t[0]=1,t[1]=0,t[2]=0),n}function a(t,e,n){const r=e[0],s=e[1],o=e[2],i=e[3],c=n[0],a=n[1],u=n[2],f=n[3];return t[0]=r*f+i*c+s*u-o*a,t[1]=s*f+i*a+o*c-r*u,t[2]=o*f+i*u+r*a-s*c,t[3]=i*f-r*c-s*a-o*u,t}function u(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function f(t,e,n,r){const s=.5*Math.PI/180;e*=s,n*=s,r*=s;const o=Math.sin(e),i=Math.cos(e),c=Math.sin(n),a=Math.cos(n),u=Math.sin(r),f=Math.cos(r);return t[0]=o*a*f-i*c*u,t[1]=i*c*f+o*a*u,t[2]=i*a*u-o*c*f,t[3]=i*a*f+o*c*u,t}const E=o.s,l=o.e;(0,r.c)(),(0,r.f)(1,0,0),(0,r.f)(0,1,0)},45087:(t,e,n)=>{function r(){return[0,0,0,1]}function s(t){return[t[0],t[1],t[2],t[3]]}n.d(e,{I:()=>o,a:()=>s,c:()=>r});const o=[0,0,0,1]},57257:(t,e,n)=>{n.d(e,{g:()=>a});var r=n(53785),s=n(60947);const o=new s.Z(r.S),i=new s.Z(r.M),c=new s.Z(r.N);function a(t){return t&&((0,r.O)(t)||(0,r.f)(t,i))?i:t&&((0,r.Q)(t)||(0,r.f)(t,c))?c:o}new s.Z(r.W)},32191:(t,e,n)=>{function r(){return[0,0]}function s(t,e){return[t,e]}n.d(e,{c:()=>r,f:()=>s}),s(1,0),s(0,1)}}]);