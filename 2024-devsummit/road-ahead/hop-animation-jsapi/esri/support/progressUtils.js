// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../core/handleUtils","../core/has","../core/MapUtils","../core/time"],function(d,m,h,n,e){function k(a=c=>{},b=p){const c=performance.now();a(0);const f=setInterval(()=>{const g=performance.now()-c;a(1-Math.exp(-g/b))},q);return m.makeHandle(()=>{clearInterval(f);a(1)})}class l{constructor(a,b=f=>{},c){this.onProgress=b;this.taskName=c;this._progressMap=new Map;this._startTime=void 0;this._timingsMap=new Map;if("number"===typeof a)for(this._weights={},b=0;b<a;b++)c=b,this._weights[c]=
1/a,this._progressMap.set(c,0);else this._weights=a;this.emitProgress()}emitProgress(){let a=0;for(const [b,c]of this._progressMap.entries())a+=c*this._weights[b];if(1===a&&h("enable-feature:esri-3dofl-upload-timings")){const b=Math.round(performance.now()-(this._startTime??0))/1E3;console.log(`${this.taskName} done in ${b} sec`);for(const [c,f]of this._timingsMap){const g=Math.round(f.end-f.start)/1E3;console.log(this.taskName??"Task",{stepKey:c,stepTime:g,relativeTime:Math.round(g/b*100)})}}this.onProgress(a)}setProgress(a,
b){this._progressMap.set(a,b);if(h("enable-feature:esri-3dofl-upload-timings")){const c=performance.now();this._startTime??(this._startTime=c);a=n.getOrCreateMapValue(this._timingsMap,a,()=>({start:c,end:0}));1===b&&(a.end=c)}this.emitProgress()}simulate(a,b){return k(c=>this.setProgress(a,c),b)}makeOnProgress(a){return b=>this.setProgress(a,b)}}const q=e.Milliseconds(50),p=e.Milliseconds(1E3);d.ProgressManager=l;d.estimatedConversionTime=function(a,b=10){return e.millisecondsFromSeconds(e.Seconds(8E-6*
a/b))};d.estimatedTransferTime=function(a,b=10){return e.millisecondsFromSeconds(e.Seconds(8E-6*a/b))};d.makeProgressManager=function(a,b=f=>{},c){return new l(a,b,c)};d.simulateProgress=k;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});