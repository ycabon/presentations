// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define("require ../../chunks/tslib.es6 ../../TimeExtent ../../TimeInterval ../../core/Collection ../../core/Evented ../../core/Logger ../../core/promiseUtils ../../core/reactiveUtils ../../core/timeUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/RandomLCG ../../core/has ../../core/accessorSupport/decorators/subclass ../../webdoc/Widgets ../../webdoc/widgets/TimeSlider".split(" "),function(B,g,n,C,x,e,D,y,q,E,h,z,I,J,F,G,H){function w(a){return null!=
a&&void 0!==a.count}function u(a){return null!=a&&void 0!==a.interval}function A(a){return null!=a&&"object"===typeof a&&"declaredClass"in a&&"esri.WebMap"===a.declaredClass}e=class extends e.EventedAccessor{constructor(a){super(a);this._animationController=null;this._isViewTimeExtentInitialized=!1;this._timerId=null;this.actions=new x;this.fullTimeExtent=null;this.loop=!1;this.mode="time-window";this.stops={count:10};this.view=this.timeExtent=null}initialize(){this.addHandles([q.watch(()=>this.effectiveStops,
()=>{null==this.timeExtent&&(this.timeExtent=this._getDefaultTimeExtent())},q.initial),q.watch(()=>this.view,(a,b)=>{this._unregisterWidget(b);this._registerWidget(a)},q.syncAndInitial),q.watch(()=>this.timeExtent,a=>{if(null!=this.view){var b=this.view.timeExtent;if(null!=a&&!a.isAllTime||null!=b&&!b.isAllTime)null!=a&&null!=b&&a.equals(b)||(this.view.timeExtent=a)}},q.initial),q.watch(()=>this.view?.timeExtent,a=>{if(!this._isViewTimeExtentInitialized)this._isViewTimeExtentInitialized=!0;else if(null!=
a&&!a.isAllTime||null!=this.timeExtent&&!this.timeExtent.isAllTime)null!=a&&null!=this.timeExtent&&a.equals(this.timeExtent)||(this.timeExtent=a)})])}destroy(){null!=this._timerId&&(clearInterval(this._timerId),this._timerId=null);this._unregisterWidget(this.view);this.view=null;null!=this._animationController&&(this._animationController.abort(),this._animationController=null)}get effectiveStops(){const {fullTimeExtent:a,stops:b}=this;if(null!=b&&void 0!==b.dates){var {dates:c}=b;if(null==c||0===
c.length)return null;c=c.sort((l,m)=>l.getTime()-m.getTime());if(null==a)return c;const {start:d,end:k}=a;return null==d||null==k?c:c.filter(l=>!(l.getTime()<d.getTime()||l.getTime()>k.getTime()))}return w(b)?this._divideTimeExtentByCount(b.timeExtent??a,b.count):u(b)?this._divideTimeExtentByInterval(b.timeExtent??a,b.interval):[]}set playRate(a){0>=a||36E5<a||("playing"===this.state&&this._startAnimation(),this._set("playRate",a))}get state(){return null==this.fullTimeExtent?"disabled":null!=this._animationController?
"playing":"ready"}get timeExtentValues(){const {mode:a,timeExtent:b}=this;if(null==b||b.isAllTime||b.isEmpty)return null;const {start:c,end:d}=b;switch(a){case "cumulative-from-end":case "instant":return null!=c?[c.getTime()]:null;case "cumulative-from-start":return null!=d?[d.getTime()]:null;case "time-window":return null!=c&&null!=d?[c.getTime(),d.getTime()]:null}}static async getPropertiesFromWebMap(a,b){if(null==a||!A(a))return null;await a.load({signal:b});var c=a?.widgets?.timeSlider;if(!c)return null;
const {getFullTimeExtentFromWebDocument:d,getModeFromTimeSlider:k,getStopsFromTimeSlider:l,getTimeExtentFromTimeSlider:m}=await new Promise((p,v)=>B(["./utils"],p,v));a=await d(a,b);b=c.loop;const r=k(c),f=c.stopDelay??2E3,t=l(c);c=m(c,r);return{fullTimeExtent:a,loop:b,mode:r,playRate:f,stops:t,timeExtent:c}}next(){this._step({forward:!0,allowRestart:!1})}play(){this._startAnimation()}previous(){this._step({forward:!1,allowRestart:!1})}stop(){this._stopAnimation()}triggerAction(a){this.emit("trigger-action",
{action:a})}updateWebDocument(a){if(A(a)){var b=this.timeExtent,c=this.fullTimeExtent,d=this.loop,k=w(this.stops)?this.stops.count:null,l="time-window"===this.mode?2:1,m=this.playRate,r=u(this.stops)?this.stops.interval:null,f=this.stops;b=new H({currentTimeExtent:b,fullTimeExtent:c,loop:d,numStops:k,numThumbs:l,stopDelay:m,stopInterval:r,stops:null!=f&&void 0!==f.dates?this.stops.dates:null});a.widgets?a.widgets.timeSlider=b:a.widgets=new G({timeSlider:b})}}valuesToTimeExtent(a){if(null==a)return null;
var b=a.sort((c,d)=>c-d).map(c=>new Date(c));a=0<b.length?b[0]:null;b=1<b.length?b[1]:null;switch(this.mode){case "time-window":return new n({start:a,end:b});case "instant":return new n({start:a,end:a});case "cumulative-from-start":return new n({start:null,end:a});case "cumulative-from-end":return new n({start:a,end:null});default:return n.allTime}}async _animate(){try{const a=this.view,b=this._animationController?.signal;await Promise.all([y.after(this.playRate,null,b),null!=a&&q.whenOnce(()=>!1===
a.updating,b)])}catch(a){y.isAbortError(a)||D.getLogger(this).error(a);this._animationController=null;return}this._step({forward:!0,allowRestart:!1});null!=this._animationController&&this._animate()}_divideTimeExtentByCount(a,b=10){if(!a||!b)return[];const {start:c,end:d}=a;if(null==c||null==d)return[];if(1E4<b)return this._divideTimeExtentByCount(a);a=[];const k=c.getTime(),l=d.getTime()-k;for(let m=0;m<=b;m++)a.push(new Date(k+m/b*l));return a}_divideTimeExtentByInterval(a,b,c=1E4){if(!a||!b)return[];
const {start:d,end:k}=a;if(null==d||null==k)return[];const l=k.getTime()-d.getTime(),m=b.toMilliseconds();if(0>=m||l/m>c)return this._divideTimeExtentByCount(a);a=[];const {value:r,unit:f}=b;for(b=d;b.getTime()<=k.getTime();)a.push(new Date(b.getTime())),b=E.offsetDate(b,r,f);return a}_getDefaultTimeExtent(){const {effectiveStops:a,mode:b}=this;if(null==a||!b)return null;switch(b){case "time-window":return 1<a.length?new n({start:a[0],end:a[1]}):null;case "cumulative-from-start":return 0<a.length?
new n({start:null,end:a[0]}):null;case "cumulative-from-end":return 0<a.length?new n({start:a[0],end:null}):null;case "instant":return 0<a.length?new n({start:a[0],end:a[0]}):null;default:return null}}_registerWidget(a){null!=a&&(a.persistableViewModels.includes(this)||a.persistableViewModels.add(this))}_startAnimation(){this._stopAnimation();this._animationController=new AbortController;this._step({forward:!0,allowRestart:!0});this._animate()}_step(a){const {forward:b,allowRestart:c}=a;({effectiveStops:a}=
this);if(null!=this.timeExtentValues&&null!=a){var d=a.map(f=>f.getTime());a=this.timeExtentValues.map(f=>{var t=d.indexOf(f);if(-1!==t)return t;t=d.reduce((p,v)=>Math.abs(v-f)<Math.abs(p-f)?v:p);return d.indexOf(t)});var k=a.map(f=>f+=b?1:-1),l=k.some(f=>0>f||f>d.length-1),{loop:m,state:r}=this;if(l)if(m||c){const f=Math.min(...a),t=Math.max(...a);a=(b?a.map(p=>p-f):a.map(p=>p+(d.length-1-t))).map(p=>d[p]);this.timeExtent=this.valuesToTimeExtent(a)}else"playing"===r&&this.stop();else a=k.map(f=>
d[f]),this.timeExtent=this.valuesToTimeExtent(a)}}_stopAnimation(){null!=this._animationController&&(this._animationController.abort(),this._animationController=null)}_unregisterWidget(a){null!=a&&a.persistableViewModels.remove(this)}};g.__decorate([h.property()],e.prototype,"_animationController",void 0);g.__decorate([h.property({type:x})],e.prototype,"actions",void 0);g.__decorate([h.property({readOnly:!0})],e.prototype,"effectiveStops",null);g.__decorate([h.property({type:n})],e.prototype,"fullTimeExtent",
void 0);g.__decorate([h.property({nonNullable:!0})],e.prototype,"loop",void 0);g.__decorate([h.property({nonNullable:!0})],e.prototype,"mode",void 0);g.__decorate([h.property({nonNullable:!0,value:1E3})],e.prototype,"playRate",null);g.__decorate([h.property({readOnly:!0})],e.prototype,"state",null);g.__decorate([h.property({cast:a=>{if(null==a)return null;u(a)&&(a.interval=z.ensureType(C,a.interval));if(u(a)||w(a))a.timeExtent=z.ensureType(n,a.timeExtent);return a}})],e.prototype,"stops",void 0);
g.__decorate([h.property({type:n})],e.prototype,"timeExtent",void 0);g.__decorate([h.property({readOnly:!0})],e.prototype,"timeExtentValues",null);g.__decorate([h.property()],e.prototype,"view",void 0);g.__decorate([h.property()],e.prototype,"next",null);g.__decorate([h.property()],e.prototype,"play",null);g.__decorate([h.property()],e.prototype,"previous",null);g.__decorate([h.property()],e.prototype,"stop",null);g.__decorate([h.property()],e.prototype,"updateWebDocument",null);return e=g.__decorate([F.subclass("esri.widgets.TimeSlider.TimeSliderViewModel")],
e)});