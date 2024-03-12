// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../../core/Logger","./EventMatch"],function(g,h,k){class l{constructor(a){this._manager=null;this._incoming={};this._outgoing={};this._outgoingEventTypes=this._incomingEventTypes=this._incomingEventMatches=null;this._hasSideEffects=a}get incomingEventMatches(){if(!this._incomingEventMatches){this._incomingEventMatches=[];for(const a in this._incoming){const b=this._incoming[a];for(const c of b)this._incomingEventMatches.push(c.match)}}return this._incomingEventMatches}get incomingEventTypes(){this._incomingEventTypes||
(this._incomingEventTypes=this.incomingEventMatches.map(a=>a.eventType));return this._incomingEventTypes}get outgoingEventTypes(){this._outgoingEventTypes||(this._outgoingEventTypes=Object.keys(this._outgoing));return this._outgoingEventTypes}get hasSideEffects(){return this._hasSideEffects}get hasPendingInputs(){return!1}onInstall(a){this._manager?h.getLogger("esri.views.input.InputHandler").error("This InputHandler has already been registered with an InputManager"):(a.setEventCallback(b=>this._handleEvent(b)),
a.setUninstallCallback(()=>this._onUninstall()),this._manager=a)}onUninstall(){}registerIncoming(a,b,c){"function"===typeof b?(c=b,b=[]):b=b||[];a="string"===typeof a?new k.EventMatch(a,b):a;const f=()=>{this._incomingEventMatches=this._incomingEventTypes=null};b=d=>{const e=this._incoming[d.match.eventType];e&&(d=e.indexOf(d),e.splice(d,1),f(),this._manager&&this._manager.updateDependencies())};c=new m(a,c,{onPause:b,onRemove:b,onResume:d=>{const e=this._incoming[d.match.eventType];e&&!e.includes(d)&&
(e.push(d),f(),this._manager&&this._manager.updateDependencies())}});b=this._incoming[a.eventType];b||(b=[],this._incoming[a.eventType]=b);b.push(c);f();this._manager&&this._manager.updateDependencies();return c}registerOutgoing(a){if(this._outgoing[a])throw Error("There is already a callback registered for this outgoing InputEvent: "+a);const b=new n(a,{onEmit:(c,f,d,e)=>{this._manager?.emit(c.eventType,f,d,e)},onRemove:c=>{delete this._outgoing[c.eventType];this._manager?.updateDependencies()}});
this._outgoing[a]=b;this._outgoingEventTypes=null;this._manager&&this._manager.updateDependencies();return b}startCapturingPointer(a){this._manager?.setPointerCapture(a,!0)}stopCapturingPointer(a){this._manager?.setPointerCapture(a,!1)}refreshHasPendingInputs(){this._manager?.refreshHasPendingInputs()}_onUninstall(){this._manager?(this.onUninstall(),this._manager=null):h.getLogger("esri.views.input.InputHandler").error("This InputHandler is not registered with an InputManager")}_handleEvent(a){const b=
this._incoming[a.type];if(b)for(const c of b)if(c.match.matches(a)&&(c.callback?.(a),a.shouldStopPropagation()))break}}class m{constructor(a,b,c){this.match=a;this._callback=b;this._handler=c}pause(){this._handler.onPause(this)}resume(){this._handler.onResume(this)}remove(){this._handler.onRemove(this)}get callback(){return this._callback}}class n{constructor(a,b){this.eventType=a;this._removed=!1;this._handler=b}emit(a,b,c){if(!this._removed)this._handler.onEmit(this,a,b,c)}remove(){this._removed=
!0;this._handler.onRemove(this)}}g.InputHandler=l;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});