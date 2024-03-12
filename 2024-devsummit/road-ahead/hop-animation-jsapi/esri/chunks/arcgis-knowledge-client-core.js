// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","./_commonjsHelpers"],function(Jb,ma){var T={exports:{}};(function(Kb,Sa){Sa=(()=>{var Ta="undefined"!==typeof document&&document.currentScript?document.currentScript.src:void 0;return function(X){function na(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&Ua)return Ua.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var f=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|f);else{var l=a[b++]&63;e=224==(e&240)?(e&15)<<12|f<<6|l:(e&7)<<18|f<<
12|l<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function Va(a,b,c,d){if(0<d){d=c+d-1;for(var e=0;e<a.length;++e){var f=a.charCodeAt(e);if(55296<=f&&57343>=f){var l=a.charCodeAt(++e);f=65536+((f&1023)<<10)|l&1023}if(127>=f){if(c>=d)break;b[c++]=f}else{if(2047>=f){if(c+1>=d)break;b[c++]=192|f>>6}else{if(65535>=f){if(c+2>=d)break;b[c++]=224|f>>12}else{if(c+3>=d)break;b[c++]=240|f>>18;b[c++]=128|f>>
12&63}b[c++]=128|f>>6&63}b[c++]=128|f&63}}b[c]=0}}function Wa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}function Xa(){var a=Ea.buffer;Fa=a;k.HEAP8=K=new Int8Array(a);k.HEAP16=P=new Int16Array(a);k.HEAP32=z=new Int32Array(a);k.HEAPU8=B=new Uint8Array(a);k.HEAPU16=Y=new Uint16Array(a);k.HEAPU32=w=new Uint32Array(a);k.HEAPF32=Ya=new Float32Array(a);k.HEAPF64=Za=new Float64Array(a);k.HEAP64=$a=new BigInt64Array(a);k.HEAPU64=
ab=new BigUint64Array(a)}function Lb(){var a=k.preRun.shift();bb.unshift(a)}function Z(a){if(k.onAbort)k.onAbort(a);a="Aborted("+a+")";U(a);cb=!0;a=new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");oa(a);throw a;}function db(){return N.startsWith("data:application/octet-stream;base64,")}function eb(){var a=N;try{if(a==N&&aa)return new Uint8Array(aa);throw"both async and sync fetching of the wasm failed";}catch(b){Z(b)}}function Mb(){return aa||"function"!=typeof fetch?Promise.resolve().then(function(){return eb()}):
fetch(N,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+N+"'";return a.arrayBuffer()}).catch(function(){return eb()})}function Ga(a){for(;0<a.length;)a.shift()(k)}function Nb(a){this.fa=a-24;this.Ya=function(b){w[this.fa+4>>2]=b};this.Oa=function(b){w[this.fa+8>>2]=b};this.Ua=function(){z[this.fa>>2]=0};this.Ma=function(){K[this.fa+12>>0]=0};this.Va=function(){K[this.fa+13>>0]=0};this.Ia=function(b,c){this.La();this.Ya(b);this.Oa(c);this.Ua();this.Ma();
this.Va()};this.La=function(){w[this.fa+16>>2]=0}}function pa(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function ba(a){return this.fromWireType(z[a>>2])}function fb(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Ha(a,b){a=fb(a);return function(){return b.apply(this,arguments)}}function Ia(a){var b=Error,c=Ha(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,
""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}function qa(a){throw new gb(a);}function D(a,b,c){function d(h){h=c(h);h.length!==a.length&&qa("Mismatched type converter count");for(var m=0;m<a.length;++m)G(a[m],h[m])}a.forEach(function(h){ra[h]=b});var e=Array(b.length),f=[],l=0;b.forEach((h,m)=>{Q.hasOwnProperty(h)?e[m]=Q[h]:(f.push(h),V.hasOwnProperty(h)||(V[h]=[]),
V[h].push(()=>{e[m]=Q[h];++l;l===f.length&&d(e)}))});0===f.length&&d(e)}function ca(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function x(a){for(var b="";B[a];)b+=hb[B[a++]];return b}function v(a){throw new W(a);}function G(a,b,c={}){if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||v('type "'+d+'" must have a positive integer typeid pointer');if(Q.hasOwnProperty(a)){if(c.Wa)return;
v("Cannot register type '"+d+"' twice")}Q[a]=b;delete ra[a];V.hasOwnProperty(a)&&(b=V[a],delete V[a],b.forEach(e=>e()))}function ib(a,b,c){switch(b){case 0:return c?function(d){return K[d]}:function(d){return B[d]};case 1:return c?function(d){return P[d>>1]}:function(d){return Y[d>>1]};case 2:return c?function(d){return z[d>>2]}:function(d){return w[d>>2]};case 3:return c?function(d){return $a[d>>3]}:function(d){return ab[d>>3]};default:throw new TypeError("Unknown integer type: "+a);}}function da(a){switch(a){case 1:return 0;
case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}function Ja(a){v(a.da.ga.ea.name+" instance already deleted")}function jb(){}function kb(a){--a.count.value;0===a.count.value&&(a.ia?a.ka.na(a.ia):a.ga.ea.na(a.fa))}function lb(a,b,c){if(b===c)return a;if(void 0===c.la)return null;a=lb(a,b,c.la);return null===a?null:c.Ka(a)}function Ka(){for(;ea.length;){var a=ea.pop();a.da.ta=!1;a["delete"]()}}function Ob(a,b){for(void 0===b&&v("ptr should not be undefined");a.la;)b=
a.va(b),a=a.la;return fa[b]}function sa(a,b){b.ga&&b.fa||qa("makeClassHandle requires ptr and ptrType");!!b.ka!==!!b.ia&&qa("Both smartPtrType and smartPtr must be specified");b.count={value:1};return ha(Object.create(a,{da:{value:b}}))}function ha(a){if("undefined"===typeof FinalizationRegistry)return ha=b=>b,a;La=new FinalizationRegistry(b=>{kb(b.da)});ha=b=>{var c=b.da;c.ia&&La.register(b,{da:c},b);return b};jb=b=>{La.unregister(b)};return ha(a)}function O(){}function Ma(a,b,c){if(void 0===a[b].ha){var d=
a[b];a[b]=function(){a[b].ha.hasOwnProperty(arguments.length)||v("Function '"+c+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+a[b].ha+")!");return a[b].ha[arguments.length].apply(this,arguments)};a[b].ha=[];a[b].ha[d.sa]=d}}function Na(a,b,c){k.hasOwnProperty(a)?((void 0===c||void 0!==k[a].ha&&void 0!==k[a].ha[c])&&v("Cannot register public name '"+a+"' twice"),Ma(k,a,a),k.hasOwnProperty(c)&&v("Cannot register multiple overloads of a function with the same number of arguments ("+
c+")!"),k[a].ha[c]=b):(k[a]=b,void 0!==c&&(k[a].kb=c))}function Pb(a,b,c,d,e,f,l,h){this.name=a;this.constructor=b;this.oa=c;this.na=d;this.la=e;this.Pa=f;this.va=l;this.Ka=h;this.$a=[]}function ta(a,b,c){for(;b!==c;)b.va||v("Expected null or instance of "+c.name+", got an instance of "+b.name),a=b.va(a),b=b.la;return a}function Qb(a,b){if(null===b)return this.Aa&&v("null is not a valid "+this.name),0;b.da||v('Cannot pass "'+ca(b)+'" as a '+this.name);b.da.fa||v("Cannot pass deleted object as a pointer of type "+
this.name);return ta(b.da.fa,b.da.ga.ea,this.ea)}function Rb(a,b){if(null===b){this.Aa&&v("null is not a valid "+this.name);if(this.xa){var c=this.Ba();null!==a&&a.push(this.na,c);return c}return 0}b.da||v('Cannot pass "'+ca(b)+'" as a '+this.name);b.da.fa||v("Cannot pass deleted object as a pointer of type "+this.name);!this.wa&&b.da.ga.wa&&v("Cannot convert argument of type "+(b.da.ka?b.da.ka.name:b.da.ga.name)+" to parameter type "+this.name);c=ta(b.da.fa,b.da.ga.ea,this.ea);if(this.xa)switch(void 0===
b.da.ia&&v("Passing raw pointer to smart pointer is illegal"),this.fb){case 0:b.da.ka===this?c=b.da.ia:v("Cannot convert argument of type "+(b.da.ka?b.da.ka.name:b.da.ga.name)+" to parameter type "+this.name);break;case 1:c=b.da.ia;break;case 2:if(b.da.ka===this)c=b.da.ia;else{var d=b.clone();c=this.ab(c,H(function(){d["delete"]()}));null!==a&&a.push(this.na,c)}break;default:v("Unsupporting sharing policy")}return c}function Sb(a,b){if(null===b)return this.Aa&&v("null is not a valid "+this.name),
0;b.da||v('Cannot pass "'+ca(b)+'" as a '+this.name);b.da.fa||v("Cannot pass deleted object as a pointer of type "+this.name);b.da.ga.wa&&v("Cannot convert argument of type "+b.da.ga.name+" to parameter type "+this.name);return ta(b.da.fa,b.da.ga.ea,this.ea)}function J(a,b,c,d,e,f,l,h,m,n,p){this.name=a;this.ea=b;this.Aa=c;this.wa=d;this.xa=e;this.Za=f;this.fb=l;this.Ga=h;this.Ba=m;this.ab=n;this.na=p;e||void 0!==b.la?this.toWireType=Rb:(this.toWireType=d?Qb:Sb,this.ja=null)}function mb(a,b,c){k.hasOwnProperty(a)||
qa("Replacing nonexistant public symbol");void 0!==k[a].ha&&void 0!==c?k[a].ha[c]=b:(k[a]=b,k[a].sa=c)}function A(a,b){a=x(a);var c=ua[b];c||(b>=ua.length&&(ua.length=b+1),ua[b]=c=nb.get(b));"function"!=typeof c&&v("unknown function pointer with signature "+a+": "+b);return c}function ob(a){a=pb(a);var b=x(a);L(a);return b}function R(a,b){function c(f){e[f]||Q[f]||(ra[f]?ra[f].forEach(c):(d.push(f),e[f]=!0))}var d=[],e={};b.forEach(c);throw new qb(a+": "+d.map(ob).join([", "]));}function va(a,b,c,
d,e){var f=b.length;2>f&&v("argTypes array size mismatch! Must at least get return value and 'this' types!");var l=null!==b[1]&&null!==c,h=!1;for(c=1;c<b.length;++c)if(null!==b[c]&&void 0===b[c].ja){h=!0;break}var m="void"!==b[0].name,n=f-2,p=Array(n),q=[],t=[];return function(){arguments.length!==n&&v("function "+a+" called with "+arguments.length+" arguments, expected "+n+" args!");t.length=0;q.length=l?2:1;q[0]=e;if(l){var g=b[1].toWireType(t,this);q[1]=g}for(var r=0;r<n;++r)p[r]=b[r+2].toWireType(t,
arguments[r]),q.push(p[r]);r=d.apply(null,q);if(h)pa(t);else for(var u=l?1:2;u<b.length;u++){var y=1===u?g:p[u-2];null!==b[u].ja&&b[u].ja(y)}return g=m?b[0].fromWireType(r):void 0}}function wa(a,b){for(var c=[],d=0;d<a;d++)c.push(w[b+4*d>>2]);return c}function rb(a,b,c){a instanceof Object||v(c+' with invalid "this": '+a);a instanceof b.ea.constructor||v(c+' incompatible with "this" of type '+a.constructor.name);a.da.fa||v("cannot call emscripten binding method "+c+" on deleted object");return ta(a.da.fa,
a.da.ga.ea,b.ea)}function Oa(a){4<a&&0===--E[a].Ca&&(E[a]=void 0,Pa.push(a))}function Tb(a,b,c){switch(b){case 0:return function(d){return this.fromWireType((c?K:B)[d])};case 1:return function(d){return this.fromWireType((c?P:Y)[d>>1])};case 2:return function(d){return this.fromWireType((c?z:w)[d>>2])};default:throw new TypeError("Unknown integer type: "+a);}}function ia(a,b){var c=Q[a];void 0===c&&v(b+" has unknown type "+ob(a));return c}function Ub(a,b){switch(b){case 2:return function(c){return this.fromWireType(Ya[c>>
2])};case 3:return function(c){return this.fromWireType(Za[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}function Vb(a,b){for(var c=a>>1,d=c+b/2;!(c>=d)&&Y[c];)++c;c<<=1;if(32<c-a&&sb)return sb.decode(B.subarray(a,c));c="";for(d=0;!(d>=b/2);++d){var e=P[a+2*d>>1];if(0==e)break;c+=String.fromCharCode(e)}return c}function Wb(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var e=0;e<c;++e)P[b>>1]=a.charCodeAt(e),b+=2;P[b>>1]=0;return b-
d}function Xb(a){return 2*a.length}function Yb(a,b){for(var c=0,d="";!(c>=b/4);){var e=z[a+4*c>>2];if(0==e)break;++c;65536<=e?(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023)):d+=String.fromCharCode(e)}return d}function Zb(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var e=0;e<a.length;++e){var f=a.charCodeAt(e);if(55296<=f&&57343>=f){var l=a.charCodeAt(++e);f=65536+((f&1023)<<10)|l&1023}z[b>>2]=f;b+=4;if(b+4>c)break}z[b>>2]=0;return b-d}function $b(a){for(var b=
0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}function tb(a,b){for(var c=Array(a),d=0;d<a;++d)c[d]=ia(w[b+4*d>>2],"parameter "+d);return c}function xa(a){var b=ac[a];return void 0===b?x(a):b}function ub(){function a(b){b.$$$embind_global$$$=b;var c="object"==typeof $$$embind_global$$$&&b.$$$embind_global$$$==b;c||delete b.$$$embind_global$$$;return c}if("object"==typeof globalThis)return globalThis;if("object"==typeof $$$embind_global$$$)return $$$embind_global$$$;
"object"==typeof ma.commonjsGlobal&&a(ma.commonjsGlobal)?$$$embind_global$$$=ma.commonjsGlobal:"object"==typeof self&&a(self)&&($$$embind_global$$$=self);if("object"==typeof $$$embind_global$$$)return $$$embind_global$$$;throw Error("unable to get global object.");}function bc(a){var b=ya.length;ya.push(a);return b}function vb(){if(!Qa){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-",
"_")+".UTF-8",_:wb||"./this.program"},b;for(b in Ra)void 0===Ra[b]?delete a[b]:a[b]=Ra[b];var c=[];for(b in a)c.push(b+"\x3d"+a[b]);Qa=c}return Qa}function za(a){return 0===a%4&&(0!==a%100||0===a%400)}function cc(a){var b=Array(Wa(a)+1);Va(a,b,0,b.length);return b}function dc(a,b,c,d){function e(g,r,u){for(g="number"==typeof g?g.toString():g||"";g.length<r;)g=u[0]+g;return g}function f(g,r){return e(g,r,"0")}function l(g,r){function u(F){return 0>F?-1:0<F?1:0}var y;0===(y=u(g.getFullYear()-r.getFullYear()))&&
0===(y=u(g.getMonth()-r.getMonth()))&&(y=u(g.getDate()-r.getDate()));return y}function h(g){switch(g.getDay()){case 0:return new Date(g.getFullYear()-1,11,29);case 1:return g;case 2:return new Date(g.getFullYear(),0,3);case 3:return new Date(g.getFullYear(),0,2);case 4:return new Date(g.getFullYear(),0,1);case 5:return new Date(g.getFullYear()-1,11,31);case 6:return new Date(g.getFullYear()-1,11,30)}}function m(g){var r=g.qa;for(g=new Date((new Date(g.ra+1900,0,1)).getTime());0<r;){var u=g.getMonth(),
y=(za(g.getFullYear())?xb:yb)[u];if(r>y-g.getDate())r-=y-g.getDate()+1,g.setDate(1),11>u?g.setMonth(u+1):(g.setMonth(0),g.setFullYear(g.getFullYear()+1));else{g.setDate(g.getDate()+r);break}}u=new Date(g.getFullYear()+1,0,4);r=h(new Date(g.getFullYear(),0,4));u=h(u);return 0>=l(r,g)?0>=l(u,g)?g.getFullYear()+1:g.getFullYear():g.getFullYear()-1}var n=z[d+40>>2];d={ib:z[d>>2],hb:z[d+4>>2],ya:z[d+8>>2],Da:z[d+12>>2],za:z[d+16>>2],ra:z[d+20>>2],ma:z[d+24>>2],qa:z[d+28>>2],lb:z[d+32>>2],gb:z[d+36>>2],
jb:n?n?na(B,n):"":""};c=c?na(B,c):"";n={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var p in n)c=c.replace(new RegExp(p,"g"),n[p]);var q="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
t="January February March April May June July August September October November December".split(" ");n={"%a":function(g){return q[g.ma].substring(0,3)},"%A":function(g){return q[g.ma]},"%b":function(g){return t[g.za].substring(0,3)},"%B":function(g){return t[g.za]},"%C":function(g){return f((g.ra+1900)/100|0,2)},"%d":function(g){return f(g.Da,2)},"%e":function(g){return e(g.Da,2," ")},"%g":function(g){return m(g).toString().substring(2)},"%G":function(g){return m(g)},"%H":function(g){return f(g.ya,
2)},"%I":function(g){g=g.ya;0==g?g=12:12<g&&(g-=12);return f(g,2)},"%j":function(g){for(var r=0,u=0;u<=g.za-1;r+=(za(g.ra+1900)?xb:yb)[u++]);return f(g.Da+r,3)},"%m":function(g){return f(g.za+1,2)},"%M":function(g){return f(g.hb,2)},"%n":function(){return"\n"},"%p":function(g){return 0<=g.ya&&12>g.ya?"AM":"PM"},"%S":function(g){return f(g.ib,2)},"%t":function(){return"\t"},"%u":function(g){return g.ma||7},"%U":function(g){return f(Math.floor((g.qa+7-g.ma)/7),2)},"%V":function(g){var r=Math.floor((g.qa+
7-(g.ma+6)%7)/7);2>=(g.ma+371-g.qa-2)%7&&r++;if(r)53==r&&(u=(g.ma+371-g.qa)%7,4==u||3==u&&za(g.ra)||(r=1));else{r=52;var u=(g.ma+7-g.qa-1)%7;(4==u||5==u&&za(g.ra%400-1))&&r++}return f(r,2)},"%w":function(g){return g.ma},"%W":function(g){return f(Math.floor((g.qa+7-(g.ma+6)%7)/7),2)},"%y":function(g){return(g.ra+1900).toString().substring(2)},"%Y":function(g){return g.ra+1900},"%z":function(g){g=g.gb;var r=0<=g;g=Math.abs(g)/60;return(r?"+":"-")+String("0000"+(g/60*100+g%60)).slice(-4)},"%Z":function(g){return g.jb},
"%%":function(){return"%"}};c=c.replace(/%%/g,"\x00\x00");for(p in n)c.includes(p)&&(c=c.replace(new RegExp(p,"g"),n[p](d)));c=c.replace(/\0\0/g,"%");p=cc(c);if(p.length>b)return 0;K.set(p,a);return p.length-1}function zb(){function a(){if(!Aa&&(Aa=!0,k.calledRun=!0,!cb)){Ga(Ab);Bb(k);if(k.onRuntimeInitialized)k.onRuntimeInitialized();if(k.postRun)for("function"==typeof k.postRun&&(k.postRun=[k.postRun]);k.postRun.length;){var b=k.postRun.shift();Cb.unshift(b)}Ga(Cb)}}if(!(0<S)){if(k.preRun)for("function"==
typeof k.preRun&&(k.preRun=[k.preRun]);k.preRun.length;)Lb();Ga(bb);0<S||(k.setStatus?(k.setStatus("Running..."),setTimeout(function(){setTimeout(function(){k.setStatus("")},1);a()},1)):a())}}X=X||{};var k;k||="undefined"!==typeof X?X:{};var Bb,oa;k.ready=new Promise(function(a,b){Bb=a;oa=b});var Db=Object.assign({},k),wb="./this.program",M="";"undefined"!=typeof document&&document.currentScript&&(M=document.currentScript.src);Ta&&(M=Ta);0!==M.indexOf("blob:")?M=M.substr(0,M.replace(/[?#].*/,"").lastIndexOf("/")+
1):M="";var ec=k.print||console.log.bind(console),U=k.printErr||console.warn.bind(console);Object.assign(k,Db);Db=null;k.thisProgram&&(wb=k.thisProgram);var aa;k.wasmBinary&&(aa=k.wasmBinary);k.noExitRuntime||!0;"object"!=typeof WebAssembly&&Z("no native wasm support detected");var Ea,cb=!1,Ua="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,Fa,K,B,P,Y,z,w,Ya,$a,ab,Za,nb,bb=[],Ab=[],Cb=[],S=0,ja=null;var N="arcgis-knowledge-client-core.wasm";if(!db()){var Eb=N;N=k.locateFile?k.locateFile(Eb,
M):M+Eb}var Ba={},V={},Q={},ra={},gb=void 0,hb=void 0,W=void 0,La=!1,Fb={},ea=[],ka=void 0,fa={},ua=[],qb=void 0,Pa=[],E=[{},{value:void 0},{value:null},{value:!0},{value:!1}],C=a=>{a||v("Cannot use deleted val. handle \x3d "+a);return E[a].value},H=a=>{switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Pa.length?Pa.pop():E.length;E[b]={Ca:1,value:a};return b}},sb="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0,ac={},ya=[],Gb=[],Ra=
{},Qa,fc=[null,[],[]],xb=[31,29,31,30,31,30,31,31,30,31,30,31],yb=[31,28,31,30,31,30,31,31,30,31,30,31];gb=k.InternalError=Ia("InternalError");for(var Hb=Array(256),Ca=0;256>Ca;++Ca)Hb[Ca]=String.fromCharCode(Ca);hb=Hb;W=k.BindingError=Ia("BindingError");O.prototype.isAliasOf=function(a){if(!(this instanceof O&&a instanceof O))return!1;var b=this.da.ga.ea,c=this.da.fa,d=a.da.ga.ea;for(a=a.da.fa;b.la;)c=b.va(c),b=b.la;for(;d.la;)a=d.va(a),d=d.la;return b===d&&c===a};O.prototype.clone=function(){this.da.fa||
Ja(this);if(this.da.ua)return this.da.count.value+=1,this;var a=ha,b=Object,c=b.create,d=Object.getPrototypeOf(this),e=this.da;a=a(c.call(b,d,{da:{value:{count:e.count,ta:e.ta,ua:e.ua,fa:e.fa,ga:e.ga,ia:e.ia,ka:e.ka}}}));a.da.count.value+=1;a.da.ta=!1;return a};O.prototype["delete"]=function(){this.da.fa||Ja(this);this.da.ta&&!this.da.ua&&v("Object already scheduled for deletion");jb(this);kb(this.da);this.da.ua||(this.da.ia=void 0,this.da.fa=void 0)};O.prototype.isDeleted=function(){return!this.da.fa};
O.prototype.deleteLater=function(){this.da.fa||Ja(this);this.da.ta&&!this.da.ua&&v("Object already scheduled for deletion");ea.push(this);1===ea.length&&ka&&ka(Ka);this.da.ta=!0;return this};k.getInheritedInstanceCount=function(){return Object.keys(fa).length};k.getLiveInheritedInstances=function(){var a=[],b;for(b in fa)fa.hasOwnProperty(b)&&a.push(fa[b]);return a};k.flushPendingDeletes=Ka;k.setDelayFunction=function(a){ka=a;ea.length&&ka&&ka(Ka)};J.prototype.Qa=function(a){this.Ga&&(a=this.Ga(a));
return a};J.prototype.Ea=function(a){this.na&&this.na(a)};J.prototype.argPackAdvance=8;J.prototype.readValueFromPointer=ba;J.prototype.deleteObject=function(a){if(null!==a)a["delete"]()};J.prototype.fromWireType=function(a){function b(){return this.xa?sa(this.ea.oa,{ga:this.Za,fa:c,ka:this,ia:a}):sa(this.ea.oa,{ga:this,fa:a})}var c=this.Qa(a);if(!c)return this.Ea(a),null;var d=Ob(this.ea,c);if(void 0!==d){if(0===d.da.count.value)return d.da.fa=c,d.da.ia=a,d.clone();d=d.clone();this.Ea(a);return d}d=
this.ea.Pa(c);d=Fb[d];if(!d)return b.call(this);d=this.wa?d.Ha:d.pointerType;var e=lb(c,this.ea,d.ea);return null===e?b.call(this):this.xa?sa(d.ea.oa,{ga:d,fa:e,ka:this,ia:a}):sa(d.ea.oa,{ga:d,fa:e})};qb=k.UnboundTypeError=Ia("UnboundTypeError");k.count_emval_handles=function(){for(var a=0,b=5;b<E.length;++b)void 0!==E[b]&&++a;return a};k.get_first_emval=function(){for(var a=5;a<E.length;++a)if(void 0!==E[a])return E[a];return null};var gc={n:function(a){return Da(a+24)+24},m:function(a,b,c){(new Nb(a)).Ia(b,
c);throw a;},u:function(a){var b=Ba[a];delete Ba[a];var c=b.Ba,d=b.na,e=b.Fa,f=e.map(l=>l.Ta).concat(e.map(l=>l.cb));D([a],f,l=>{var h={};e.forEach((m,n)=>{var p=l[n],q=m.Ra,t=m.Sa,g=l[n+e.length],r=m.bb,u=m.eb;h[m.Na]={read:y=>p.fromWireType(q(t,y)),write:(y,F)=>{var I=[];r(u,y,g.toWireType(I,F));pa(I)}}});return[{name:b.name,fromWireType:function(m){var n={},p;for(p in h)n[p]=h[p].read(m);d(m);return n},toWireType:function(m,n){for(var p in h)if(!(p in n))throw new TypeError('Missing field:  "'+
p+'"');var q=c();for(p in h)h[p].write(q,n[p]);null!==m&&m.push(d,q);return q},argPackAdvance:8,readValueFromPointer:ba,ja:d}]})},E:function(a,b,c,d,e){b=x(b);c=da(c);var f=-1!=b.indexOf("u");f&&(e=(1n<<64n)-1n);G(a,{name:b,fromWireType:function(l){return l},toWireType:function(l,h){if("bigint"!=typeof h&&"number"!=typeof h)throw new TypeError('Cannot convert "'+ca(h)+'" to '+this.name);if(h<d||h>e)throw new TypeError('Passing a number "'+ca(h)+'" from JS side to C/C++ side to an argument of type "'+
b+'", which is outside the valid range ['+d+", "+e+"]!");return h},argPackAdvance:8,readValueFromPointer:ib(b,c,!f),ja:null})},S:function(a,b,c,d,e){var f=da(c);b=x(b);G(a,{name:b,fromWireType:function(l){return!!l},toWireType:function(l,h){return h?d:e},argPackAdvance:8,readValueFromPointer:function(l){if(1===c)var h=K;else if(2===c)h=P;else if(4===c)h=z;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(h[l>>f])},ja:null})},f:function(a,b,c,d,e,f,l,h,m,n,p,q,t){p=
x(p);f=A(e,f);h&&=A(l,h);n&&=A(m,n);t=A(q,t);var g=fb(p);Na(g,function(){R("Cannot construct "+p+" due to unbound types",[d])});D([a,b,c],d?[d]:[],function(r){r=r[0];if(d)var u=r.ea,y=u.oa;else y=O.prototype;r=Ha(g,function(){if(Object.getPrototypeOf(this)!==F)throw new W("Use 'new' to construct "+p);if(void 0===I.pa)throw new W(p+" has no accessible constructor");var Ib=I.pa[arguments.length];if(void 0===Ib)throw new W("Tried to invoke ctor of "+p+" with invalid number of parameters ("+arguments.length+
") - expected ("+Object.keys(I.pa).toString()+") parameters instead!");return Ib.apply(this,arguments)});var F=Object.create(y,{constructor:{value:r}});r.prototype=F;var I=new Pb(p,r,F,t,u,f,h,n);u=new J(p,I,!0,!1,!1);y=new J(p+"*",I,!1,!1,!1);var la=new J(p+" const*",I,!1,!0,!1);Fb[a]={pointerType:y,Ha:la};mb(g,r);return[u,y,la]})},o:function(a,b,c,d,e,f,l){var h=wa(c,d);b=x(b);f=A(e,f);D([],[a],function(m){function n(){R("Cannot call "+p+" due to unbound types",h)}m=m[0];var p=m.name+"."+b;b.startsWith("@@")&&
(b=Symbol[b.substring(2)]);var q=m.ea.constructor;void 0===q[b]?(n.sa=c-1,q[b]=n):(Ma(q,b,p),q[b].ha[c-1]=n);D([],h,function(t){t=va(p,[t[0],null].concat(t.slice(1)),null,f,l);void 0===q[b].ha?(t.sa=c-1,q[b]=t):q[b].ha[c-1]=t;return[]});return[]})},i:function(a,b,c,d,e,f){0<b||Z();var l=wa(b,c);e=A(d,e);D([],[a],function(h){h=h[0];var m="constructor "+h.name;void 0===h.ea.pa&&(h.ea.pa=[]);if(void 0!==h.ea.pa[b-1])throw new W("Cannot register multiple constructors with identical number of parameters ("+
(b-1)+") for class '"+h.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");h.ea.pa[b-1]=()=>{R("Cannot construct "+h.name+" due to unbound types",l)};D([],l,function(n){n.splice(1,0,null);h.ea.pa[b-1]=va(m,n,null,e,f);return[]});return[]})},b:function(a,b,c,d,e,f,l,h){var m=wa(c,d);b=x(b);f=A(e,f);D([],[a],function(n){function p(){R("Cannot call "+q+" due to unbound types",m)}n=n[0];var q=n.name+"."+b;b.startsWith("@@")&&(b=Symbol[b.substring(2)]);
h&&n.ea.$a.push(b);var t=n.ea.oa,g=t[b];void 0===g||void 0===g.ha&&g.className!==n.name&&g.sa===c-2?(p.sa=c-2,p.className=n.name,t[b]=p):(Ma(t,b,q),t[b].ha[c-2]=p);D([],m,function(r){r=va(q,r,n,f,l);void 0===t[b].ha?(r.sa=c-2,t[b]=r):t[b].ha[c-2]=r;return[]});return[]})},c:function(a,b,c,d,e,f,l,h,m,n){b=x(b);e=A(d,e);D([],[a],function(p){p=p[0];var q=p.name+"."+b,t={get:function(){R("Cannot access "+q+" due to unbound types",[c,l])},enumerable:!0,configurable:!0};t.set=m?()=>{R("Cannot access "+
q+" due to unbound types",[c,l])}:()=>{v(q+" is a read-only property")};Object.defineProperty(p.ea.oa,b,t);D([],m?[c,l]:[c],function(g){var r=g[0],u={get:function(){var F=rb(this,p,q+" getter");return r.fromWireType(e(f,F))},enumerable:!0};if(m){m=A(h,m);var y=g[1];u.set=function(F){var I=rb(this,p,q+" setter"),la=[];m(n,I,y.toWireType(la,F));pa(la)}}Object.defineProperty(p.ea.oa,b,u);return[]});return[]})},R:function(a,b){b=x(b);G(a,{name:b,fromWireType:function(c){var d=C(c);Oa(c);return d},toWireType:function(c,
d){return H(d)},argPackAdvance:8,readValueFromPointer:ba,ja:null})},s:function(a,b,c,d){function e(){}c=da(c);b=x(b);e.values={};G(a,{name:b,constructor:e,fromWireType:function(f){return this.constructor.values[f]},toWireType:function(f,l){return l.value},argPackAdvance:8,readValueFromPointer:Tb(b,c,d),ja:null});Na(b,e)},e:function(a,b,c){var d=ia(a,"enum");b=x(b);a=d.constructor;d=Object.create(d.constructor.prototype,{value:{value:c},constructor:{value:Ha(d.name+"_"+b,function(){})}});a.values[c]=
d;a[b]=d},D:function(a,b,c){c=da(c);b=x(b);G(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,e){return e},argPackAdvance:8,readValueFromPointer:Ub(b,c),ja:null})},V:function(a,b,c,d,e,f){var l=wa(b,c);a=x(a);e=A(d,e);Na(a,function(){R("Cannot call "+a+" due to unbound types",l)},b-1);D([],l,function(h){mb(a,va(a,[h[0],null].concat(h.slice(1)),null,e,f),b-1);return[]})},w:function(a,b,c,d,e){b=x(b);-1===e&&(e=4294967295);e=da(c);var f=h=>h;if(0===d){var l=32-8*c;f=h=>h<<l>>>l}c=
b.includes("unsigned")?function(h,m){return m>>>0}:function(h,m){return m};G(a,{name:b,fromWireType:f,toWireType:c,argPackAdvance:8,readValueFromPointer:ib(b,e,0!==d),ja:null})},q:function(a,b,c){function d(f){f>>=2;var l=w;return new e(Fa,l[f+1],l[f])}var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][b];c=x(c);G(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{Wa:!0})},h:function(a,b,c,d,e,f,l,h,m,n,
p,q){c=x(c);f=A(e,f);h=A(l,h);n=A(m,n);q=A(p,q);D([a],[b],function(t){t=t[0];return[new J(c,t.ea,!1,!1,!0,t,d,f,h,n,q)]})},F:function(a,b){b=x(b);var c="std::string"===b;G(a,{name:b,fromWireType:function(d){var e=w[d>>2],f=d+4;if(c)for(var l=f,h=0;h<=e;++h){var m=f+h;if(h==e||0==B[m]){l=l?na(B,l,m-l):"";if(void 0===n)var n=l;else n+=String.fromCharCode(0),n+=l;l=m+1}}else{n=Array(e);for(h=0;h<e;++h)n[h]=String.fromCharCode(B[f+h]);n=n.join("")}L(d);return n},toWireType:function(d,e){e instanceof ArrayBuffer&&
(e=new Uint8Array(e));var f="string"==typeof e;f||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||v("Cannot pass non-string to std::string");var l=c&&f?Wa(e):e.length,h=Da(4+l+1),m=h+4;w[h>>2]=l;if(c&&f)Va(e,B,m,l+1);else if(f)for(f=0;f<l;++f){var n=e.charCodeAt(f);255<n&&(L(m),v("String has UTF-16 code units that do not fit in 8 bits"));B[m+f]=n}else for(f=0;f<l;++f)B[m+f]=e[f];null!==d&&d.push(L,h);return h},argPackAdvance:8,readValueFromPointer:ba,ja:function(d){L(d)}})},
A:function(a,b,c){c=x(c);if(2===b)var d=Vb,e=Wb,f=Xb,l=()=>Y,h=1;else 4===b&&(d=Yb,e=Zb,f=$b,l=()=>w,h=2);G(a,{name:c,fromWireType:function(m){for(var n=w[m>>2],p=l(),q,t=m+4,g=0;g<=n;++g){var r=m+4+g*b;if(g==n||0==p[r>>h])t=d(t,r-t),void 0===q?q=t:(q+=String.fromCharCode(0),q+=t),t=r+b}L(m);return q},toWireType:function(m,n){"string"!=typeof n&&v("Cannot pass non-string to C++ string type "+c);var p=f(n),q=Da(4+p+b);w[q>>2]=p>>h;e(n,q+4,p+b);null!==m&&m.push(L,q);return q},argPackAdvance:8,readValueFromPointer:ba,
ja:function(m){L(m)}})},v:function(a,b,c,d,e,f){Ba[a]={name:x(b),Ba:A(c,d),na:A(e,f),Fa:[]}},l:function(a,b,c,d,e,f,l,h,m,n){Ba[a].Fa.push({Na:x(b),Ta:c,Ra:A(d,e),Sa:f,cb:l,bb:A(h,m),eb:n})},T:function(a,b){b=x(b);G(a,{Xa:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},k:function(a,b,c){a=C(a);b=ia(b,"emval::as");var d=[],e=H(d);w[c>>2]=e;return b.toWireType(d,a)},z:function(a,b){a=C(a);b=ia(b,"emval::as");return b.toWireType(null,a)},W:function(a,b,c,d){a=C(a);c=tb(b,
c);for(var e=Array(b),f=0;f<b;++f){var l=c[f];e[f]=l.readValueFromPointer(d);d+=l.argPackAdvance}a=a.apply(void 0,e);return H(a)},U:function(a,b,c,d,e){a=ya[a];b=C(b);c=xa(c);var f=[];w[d>>2]=H(f);return a(b,c,f,e)},G:function(a,b,c,d){a=ya[a];b=C(b);c=xa(c);a(b,c,null,d)},a:Oa,H:function(a){if(0===a)return H(ub());a=xa(a);return H(ub()[a])},B:function(a,b){var c=tb(a,b),d=c[0];b=d.name+"_$"+c.slice(1).map(function(l){return l.name}).join("_")+"$";var e=Gb[b];if(void 0!==e)return e;var f=Array(a-
1);e=bc((l,h,m,n)=>{for(var p=0,q=0;q<a-1;++q)f[q]=c[q+1].readValueFromPointer(n+p),p+=c[q+1].argPackAdvance;l=l[h].apply(l,f);for(q=0;q<a-1;++q)c[q+1].Ja&&c[q+1].Ja(f[q]);if(!d.Xa)return d.toWireType(m,l)});return Gb[b]=e},r:function(a,b){a=C(a);b=C(b);return H(a[b])},g:function(a){4<a&&(E[a].Ca+=1)},I:function(a,b){a=C(a);b=C(b);return a instanceof b},t:function(a){a=C(a);return"number"==typeof a},x:function(a){a=C(a);return"string"==typeof a},p:function(a){return H(xa(a))},j:function(a){var b=
C(a);pa(b);Oa(a)},d:function(a,b){a=ia(a,"_emval_take_value");a=a.readValueFromPointer(b);return H(a)},y:function(a){a=C(a);return H(typeof a)},C:function(){Z("")},N:function(a,b,c){B.copyWithin(a,b,b+c)},M:function(a){var b=B.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math;d=Math.max(a,d);e=e.min.call(e,2147483648,d+(65536-d%65536)%65536);a:{try{Ea.grow(e-Fa.byteLength+65535>>>16);Xa();d=1;break a}catch(f){}d=void 0}if(d)return!0}return!1},
K:function(a,b){var c=0;vb().forEach(function(d,e){var f=b+c;e=w[a+4*e>>2]=f;for(f=0;f<d.length;++f)K[e++>>0]=d.charCodeAt(f);K[e>>0]=0;c+=d.length+1});return 0},L:function(a,b){var c=vb();w[a>>2]=c.length;var d=0;c.forEach(function(e){d+=e.length+1});w[b>>2]=d;return 0},Q:function(){return 52},P:function(){return 70},O:function(a,b,c,d){for(var e=0,f=0;f<c;f++){var l=w[b>>2],h=w[b+4>>2];b+=8;for(var m=0;m<h;m++){var n=B[l+m],p=fc[a];0===n||10===n?((1===a?ec:U)(na(p,0)),p.length=0):p.push(n)}e+=h}w[d>>
2]=e;return 0},J:function(a,b,c,d){return dc(a,b,c,d)}};(function(){function a(e){k.asm=e.exports;Ea=k.asm.X;Xa();nb=k.asm.ba;Ab.unshift(k.asm.Y);S--;k.monitorRunDependencies&&k.monitorRunDependencies(S);0==S&&ja&&(e=ja,ja=null,e())}function b(e){a(e.instance)}function c(e){return Mb().then(function(f){return WebAssembly.instantiate(f,d)}).then(function(f){return f}).then(e,function(f){U("failed to asynchronously prepare wasm: "+f);Z(f)})}var d={a:gc};S++;k.monitorRunDependencies&&k.monitorRunDependencies(S);
if(k.instantiateWasm)try{return k.instantiateWasm(d,a)}catch(e){U("Module.instantiateWasm callback failed with error: "+e),oa(e)}(function(){return aa||"function"!=typeof WebAssembly.instantiateStreaming||db()||"function"!=typeof fetch?c(b):fetch(N,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(f){U("wasm streaming compile failed: "+f);U("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(oa);return{}})();k.___wasm_call_ctors=
function(){return(k.___wasm_call_ctors=k.asm.Y).apply(null,arguments)};var Da=k._malloc=function(){return(Da=k._malloc=k.asm.Z).apply(null,arguments)},L=k._free=function(){return(L=k._free=k.asm._).apply(null,arguments)},pb=k.___getTypeName=function(){return(pb=k.___getTypeName=k.asm.$).apply(null,arguments)};k.__embind_initialize_bindings=function(){return(k.__embind_initialize_bindings=k.asm.aa).apply(null,arguments)};k.___cxa_is_pointer_type=function(){return(k.___cxa_is_pointer_type=k.asm.ca).apply(null,
arguments)};var Aa;ja=function b(){Aa||zb();Aa||(ja=b)};if(k.preInit)for("function"==typeof k.preInit&&(k.preInit=[k.preInit]);0<k.preInit.length;)k.preInit.pop()();zb();return X.ready}})();Kb.exports=Sa})(T);T=ma.getDefaultExportFromCjs(T.exports);T=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"}));Jb.arcgisKnowledgeClientCore=T});