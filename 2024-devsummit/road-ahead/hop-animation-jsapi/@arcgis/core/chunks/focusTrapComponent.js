/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
import{j as e,k as t,l as n,m as o,n as a,o as r,p as i}from"./dom.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.3.0
 */function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){var o,a,r;o=e,a=t,r=n[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(a))in o?Object.defineProperty(o,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[a]=r})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=function(e){return"Tab"===(null==e?void 0:e.key)||9===(null==e?void 0:e.keyCode)},l=function(e){return s(e)&&!e.shiftKey},d=function(e){return s(e)&&e.shiftKey},f=function(e){return setTimeout(e,0)},v=function(e,t){var n=-1;return e.every((function(e,o){return!t(e)||(n=o,!1)})),n},b=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return"function"==typeof e?e.apply(void 0,n):e},p=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},m=[];const y=globalThis.calciteConfig,h=y?.focusTrapStack||[];function w(c,y){const{el:w}=c,g=y?.focusTrapEl||w;if(!g)return;const N={clickOutsideDeactivates:!0,escapeDeactivates:!1,fallbackFocus:g,setReturnFocus:t=>(e(t),!1),...y?.focusTrapOptions,document:w.ownerDocument,tabbableOptions:t,trapStack:h};var O,F,T,k,E,D,P,G,R,x,j,C,B,I,L,S,A,K,q,M,U,Y,z,H;c.focusTrap=(O=g,k=(null==(F=N)?void 0:F.document)||document,E=(null==F?void 0:F.trapStack)||m,D=u({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:l,isKeyBackward:d},F),P={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},G=function(e,t,n){return e&&void 0!==e[t]?e[t]:D[n||t]},R=function(e,t){var n="function"==typeof(null==t?void 0:t.composedPath)?t.composedPath():void 0;return P.containerGroups.findIndex((function(t){var o=t.container,a=t.tabbableNodes;return o.contains(e)||(null==n?void 0:n.includes(o))||a.find((function(t){return t===e}))}))},x=function(e){var t=D[e];if("function"==typeof t){for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];t=t.apply(void 0,o)}if(!0===t&&(t=void 0),!t){if(void 0===t||!1===t)return t;throw new Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var r=t;if("string"==typeof t&&!(r=k.querySelector(t)))throw new Error("`".concat(e,"` as selector refers to no known node"));return r},j=function(){var e=x("initialFocus");if(!1===e)return!1;if(void 0===e||!n(e,D.tabbableOptions))if(R(k.activeElement)>=0)e=k.activeElement;else{var t=P.tabbableGroups[0];e=t&&t.firstTabbableNode||x("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},C=function(){if(P.containerGroups=P.containers.map((function(e){var t=o(e,D.tabbableOptions),n=a(e,D.tabbableOptions),c=t.length>0?t[0]:void 0,u=t.length>0?t[t.length-1]:void 0,s=n.find((function(e){return r(e)})),l=n.slice().reverse().find((function(e){return r(e)})),d=!!t.find((function(e){return i(e)>0}));return{container:e,tabbableNodes:t,focusableNodes:n,posTabIndexesFound:d,firstTabbableNode:c,lastTabbableNode:u,firstDomTabbableNode:s,lastDomTabbableNode:l,nextTabbableNode:function(e){var o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=t.indexOf(e);return a<0?o?n.slice(n.indexOf(e)+1).find((function(e){return r(e)})):n.slice(0,n.indexOf(e)).reverse().find((function(e){return r(e)})):t[a+(o?1:-1)]}}})),P.tabbableGroups=P.containerGroups.filter((function(e){return e.tabbableNodes.length>0})),P.tabbableGroups.length<=0&&!x("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(P.containerGroups.find((function(e){return e.posTabIndexesFound}))&&P.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},B=function e(t){var n=t.activeElement;if(n)return n.shadowRoot&&null!==n.shadowRoot.activeElement?e(n.shadowRoot):n},I=function e(t){!1!==t&&t!==B(document)&&(t&&t.focus?(t.focus({preventScroll:!!D.preventScroll}),P.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(j()))},L=function(e){var t=x("setReturnFocus",e);return t||!1!==t&&e},S=function(e){var t=e.target,o=e.event,a=e.isBackward,c=void 0!==a&&a;t=t||p(o),C();var u=null;if(P.tabbableGroups.length>0){var l=R(t,o),d=l>=0?P.containerGroups[l]:void 0;if(l<0)u=c?P.tabbableGroups[P.tabbableGroups.length-1].lastTabbableNode:P.tabbableGroups[0].firstTabbableNode;else if(c){var f=v(P.tabbableGroups,(function(e){var n=e.firstTabbableNode;return t===n}));if(f<0&&(d.container===t||n(t,D.tabbableOptions)&&!r(t,D.tabbableOptions)&&!d.nextTabbableNode(t,!1))&&(f=l),f>=0){var b=0===f?P.tabbableGroups.length-1:f-1,m=P.tabbableGroups[b];u=i(t)>=0?m.lastTabbableNode:m.lastDomTabbableNode}else s(o)||(u=d.nextTabbableNode(t,!1))}else{var y=v(P.tabbableGroups,(function(e){var n=e.lastTabbableNode;return t===n}));if(y<0&&(d.container===t||n(t,D.tabbableOptions)&&!r(t,D.tabbableOptions)&&!d.nextTabbableNode(t))&&(y=l),y>=0){var h=y===P.tabbableGroups.length-1?0:y+1,w=P.tabbableGroups[h];u=i(t)>=0?w.firstTabbableNode:w.firstDomTabbableNode}else s(o)||(u=d.nextTabbableNode(t))}}else u=x("fallbackFocus");return u},A=function(e){var t=p(e);R(t,e)>=0||(b(D.clickOutsideDeactivates,e)?T.deactivate({returnFocus:D.returnFocusOnDeactivate}):b(D.allowOutsideClick,e)||e.preventDefault())},K=function(e){var t=p(e),n=R(t,e)>=0;if(n||t instanceof Document)n&&(P.mostRecentlyFocusedNode=t);else{var o;e.stopImmediatePropagation();var a=!0;if(P.mostRecentlyFocusedNode)if(i(P.mostRecentlyFocusedNode)>0){var r=R(P.mostRecentlyFocusedNode),c=P.containerGroups[r].tabbableNodes;if(c.length>0){var u=c.findIndex((function(e){return e===P.mostRecentlyFocusedNode}));u>=0&&(D.isKeyForward(P.recentNavEvent)?u+1<c.length&&(o=c[u+1],a=!1):u-1>=0&&(o=c[u-1],a=!1))}}else P.containerGroups.some((function(e){return e.tabbableNodes.some((function(e){return i(e)>0}))}))||(a=!1);else a=!1;a&&(o=S({target:P.mostRecentlyFocusedNode,isBackward:D.isKeyBackward(P.recentNavEvent)})),I(o||P.mostRecentlyFocusedNode||j())}P.recentNavEvent=void 0},q=function(e){if(("Escape"===(null==(t=e)?void 0:t.key)||"Esc"===(null==t?void 0:t.key)||27===(null==t?void 0:t.keyCode))&&!1!==b(D.escapeDeactivates,e))return e.preventDefault(),void T.deactivate();var t;(D.isKeyForward(e)||D.isKeyBackward(e))&&function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];P.recentNavEvent=e;var n=S({event:e,isBackward:t});n&&(s(e)&&e.preventDefault(),I(n))}(e,D.isKeyBackward(e))},M=function(e){var t=p(e);R(t,e)>=0||b(D.clickOutsideDeactivates,e)||b(D.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},U=function(){if(P.active)return function(e,t){if(e.length>0){var n=e[e.length-1];n!==t&&n.pause()}var o=e.indexOf(t);-1===o||e.splice(o,1),e.push(t)}(E,T),P.delayInitialFocusTimer=D.delayInitialFocus?f((function(){I(j())})):I(j()),k.addEventListener("focusin",K,!0),k.addEventListener("mousedown",A,{capture:!0,passive:!1}),k.addEventListener("touchstart",A,{capture:!0,passive:!1}),k.addEventListener("click",M,{capture:!0,passive:!1}),k.addEventListener("keydown",q,{capture:!0,passive:!1}),T},Y=function(){if(P.active)return k.removeEventListener("focusin",K,!0),k.removeEventListener("mousedown",A,!0),k.removeEventListener("touchstart",A,!0),k.removeEventListener("click",M,!0),k.removeEventListener("keydown",q,!0),T},z="undefined"!=typeof window&&"MutationObserver"in window?new MutationObserver((function(e){e.some((function(e){return Array.from(e.removedNodes).some((function(e){return e===P.mostRecentlyFocusedNode}))}))&&I(j())})):void 0,H=function(){z&&(z.disconnect(),P.active&&!P.paused&&P.containers.map((function(e){z.observe(e,{subtree:!0,childList:!0})})))},(T={get active(){return P.active},get paused(){return P.paused},activate:function(e){if(P.active)return this;var t=G(e,"onActivate"),n=G(e,"onPostActivate"),o=G(e,"checkCanFocusTrap");o||C(),P.active=!0,P.paused=!1,P.nodeFocusedBeforeActivation=k.activeElement,null==t||t();var a=function(){o&&C(),U(),H(),null==n||n()};return o?(o(P.containers.concat()).then(a,a),this):(a(),this)},deactivate:function(e){if(!P.active)return this;var t=u({onDeactivate:D.onDeactivate,onPostDeactivate:D.onPostDeactivate,checkCanReturnFocus:D.checkCanReturnFocus},e);clearTimeout(P.delayInitialFocusTimer),P.delayInitialFocusTimer=void 0,Y(),P.active=!1,P.paused=!1,H(),function(e,t){var n=e.indexOf(t);-1!==n&&e.splice(n,1),e.length>0&&e[e.length-1].unpause()}(E,T);var n=G(t,"onDeactivate"),o=G(t,"onPostDeactivate"),a=G(t,"checkCanReturnFocus"),r=G(t,"returnFocus","returnFocusOnDeactivate");null==n||n();var i=function(){f((function(){r&&I(L(P.nodeFocusedBeforeActivation)),null==o||o()}))};return r&&a?(a(L(P.nodeFocusedBeforeActivation)).then(i,i),this):(i(),this)},pause:function(e){if(P.paused||!P.active)return this;var t=G(e,"onPause"),n=G(e,"onPostPause");return P.paused=!0,null==t||t(),Y(),H(),null==n||n(),this},unpause:function(e){if(!P.paused||!P.active)return this;var t=G(e,"onUnpause"),n=G(e,"onPostUnpause");return P.paused=!1,null==t||t(),C(),U(),H(),null==n||n(),this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return P.containers=t.map((function(e){return"string"==typeof e?k.querySelector(e):e})),P.active&&C(),H(),this}}).updateContainerElements(O),T)}function g(e,t){e.focusTrapDisabled||e.focusTrap?.activate(t)}function N(e,t){e.focusTrap?.deactivate(t)}function O(e){e.focusTrap?.updateContainerElements(e.el)}export{g as a,w as c,N as d,O as u};
