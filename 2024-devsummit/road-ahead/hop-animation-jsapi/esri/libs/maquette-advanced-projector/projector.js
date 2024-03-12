// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.29/esri/copyright.txt for details.
//>>built
define(["exports","../maquette/dom","../maquette/projector","./advanced-projector-options","./utils"],function(w,t,H,B,C){const D=(e,f)=>{const d=[];for(;e&&e!==f;)d.push(e),e=e.parentNode;return d},E=(e,f)=>e.find(f),x=(e,f,d=!1)=>{let g=e;f.forEach((k,n)=>{const h=g?.children?E(g.children,q=>q.domNode===k):void 0;if(!d||h||n===f.length-1)g=h});return g};w.createAdvancedProjector=e=>{let f;const d={...B.defaultAdvancedProjectorOptions,...e},g=C.applyDefaultProjectionOptions(d),k=g.performanceLogger;
let n=!0,h,q=!1;const r=[],p=[],u=(b,a,y)=>{let l;g.eventHandlerInterceptor=(I,J,K,L)=>function(m){k("domEvent",m);var c=D(m.currentTarget,l.domNode);const G=c.some(F=>customElements.get(F?.tagName?.toLowerCase()));m.eventPhase!==Event.CAPTURING_PHASE&&G?(c=m.composedPath(),c=c.slice(c.indexOf(m.currentTarget),c.indexOf(l.domNode)).reverse(),c=x(l.getLastRender(),c,!0)):(c.reverse(),c=x(l.getLastRender(),c));let z;c&&(z=d.handleInterceptedEvent(f,c,this,m));k("domEventProcessed",m);return z};d.postProcessProjectionOptions?.(g);
const A=y();l=b(a,A,g);g.eventHandlerInterceptor=void 0;r.push(l);p.push(y);d.afterFirstVNodeRendered&&d.afterFirstVNodeRendered(l,A)};let v=()=>{h=void 0;if(n){n=!1;k("renderStart",void 0);for(let b=0;b<r.length;b++){const a=p[b]();k("rendered",void 0);r[b].update(a);k("patched",void 0)}k("renderDone",void 0);n=!0}};d.modifyDoRenderImplementation&&(v=d.modifyDoRenderImplementation(v,r,p));return f={renderNow:v,scheduleRender:()=>{h||q||(h=requestAnimationFrame(v))},stop:()=>{h&&(cancelAnimationFrame(h),
h=void 0);q=!0},resume:()=>{q=!1;n=!0;f.scheduleRender()},append:(b,a)=>{u(t.dom.append,b,a)},insertBefore:(b,a)=>{u(t.dom.insertBefore,b,a)},merge:(b,a)=>{u(t.dom.merge,b,a)},replace:(b,a)=>{u(t.dom.replace,b,a)},detach:b=>{for(let a=0;a<p.length;a++)if(p[a]===b)return p.splice(a,1),r.splice(a,1)[0];throw Error("renderFunction was not found");}}};Object.defineProperty(w,Symbol.toStringTag,{value:"Module"})});