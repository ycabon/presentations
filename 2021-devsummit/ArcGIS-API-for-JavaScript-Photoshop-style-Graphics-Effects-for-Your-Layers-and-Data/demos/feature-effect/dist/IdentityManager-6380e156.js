import { cV as A, e, y as y$1, cW as o$1, cX as e$1, i as i$2, cY as H, cZ as r, c_ as s$2, c$ as u$1, d0 as e$2, cn as a$2, a0 as i$3, cS as s$3, p as p$3, d1 as $, cU as e$3, cT as l$1, a$ as a$3, b5 as G, R as d$2, s as s$4, X as j$1, d2 as E$1, L as L$1, d3 as b$1, Y as s$5, cR as z, cr as U, cl as o$2, d4 as A$1, cq as t$2, U as U$1, d5 as T, cx as C, a5 as r$1, d6 as n } from './index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function t(t,o,n={}){let i=A(n.expires);if("number"==typeof i){const e=new Date;e.setTime(e.getTime()+24*i*60*60*1e3),i=n.expires=e;}"string"!=typeof i&&(n.expires=i.toUTCString());let r=t+"="+encodeURIComponent(o);for(const e in n){r+="; "+e;const t=n[e];!0!==t&&(r+="="+t);}document.cookie=r;}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const p="esri-identity-form",a="esri-identity-form__group",d="esri-identity-form__label",c="esri-identity-form__footer",m="esri-input",h="esri-button",v="esri-button--secondary";let b=class extends H{constructor(s,e){super(s,e),this._usernameInputNode=null,this._passwordInputNode=null,this.messages=null,this.signingIn=!1,this.server=null,this.resource=null,this.error=null,this.oAuthPrompt=!1;}render(){const{error:s,server:e,resource:t,signingIn:i,oAuthPrompt:n,messages:l}=this,b=r("div",{class:a},s$2(n?l.oAuthInfo:l.info,{server:/\.arcgis\.com/i.test(e)?"ArcGIS Online":e,resource:`(${t||l.lblItem})`})),g=n?null:r("div",{class:a},r("label",{class:d},l.lblUser,r("input",{value:"",required:!0,autocomplete:"off",spellcheck:!1,type:"text",bind:this,afterCreate:u$1,"data-node-ref":"_usernameInputNode",class:m}))),f=n?null:r("div",{class:a},r("label",{class:d},l.lblPwd,r("input",{value:"",required:!0,type:"password",bind:this,afterCreate:u$1,"data-node-ref":"_passwordInputNode",class:m}))),_=r("div",{class:this.classes(a,c)},r("input",{type:"submit",disabled:!!i,value:i?l.lblSigning:l.lblOk,class:h}),r("input",{type:"button",value:l.lblCancel,bind:this,onclick:this._cancel,class:this.classes(h,v)})),y=s?r("div",null,s.details&&s.details.httpStatus?l.invalidUser:l.noAuthService):null;return r("form",{class:p,bind:this,onsubmit:this._submit},b,y,g,f,_)}_cancel(){this._set("signingIn",!1),this._usernameInputNode&&(this._usernameInputNode.value=""),this._passwordInputNode&&(this._passwordInputNode.value=""),this.emit("cancel");}_submit(s){s.preventDefault(),this._set("signingIn",!0);const e=this.oAuthPrompt?{}:{username:this._usernameInputNode&&this._usernameInputNode.value,password:this._passwordInputNode&&this._passwordInputNode.value};this.emit("submit",e);}};e([y$1(),o$1(),e$1("esri/identity/t9n/identity")],b.prototype,"messages",void 0),e([y$1(),o$1()],b.prototype,"signingIn",void 0),e([y$1(),o$1()],b.prototype,"server",void 0),e([y$1(),o$1()],b.prototype,"resource",void 0),e([y$1(),o$1()],b.prototype,"error",void 0),e([y$1(),o$1()],b.prototype,"oAuthPrompt",void 0),b=e([i$2("esri.identity.IdentityForm")],b);var g=b;

/*!
* tabbable 5.1.5
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])', 'details>summary:first-of-type', 'details'];
var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
var matches = typeof Element === 'undefined' ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

var getCandidates = function getCandidates(el, includeContainer, filter) {
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));

  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }

  candidates = candidates.filter(filter);
  return candidates;
};

var isContentEditable = function isContentEditable(node) {
  return node.contentEditable === 'true';
};

var getTabindex = function getTabindex(node) {
  var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);

  if (!isNaN(tabindexAttr)) {
    return tabindexAttr;
  } // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // so if they don't have a tabindex attribute specifically set, assume it's 0.


  if (isContentEditable(node)) {
    return 0;
  } // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
  //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
  //  yet they are still part of the regular tab order; in FF, they get a default
  //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
  //  order, consider their tab index to be 0.


  if ((node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
    return 0;
  }

  return node.tabIndex;
};

var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};

var isInput = function isInput(node) {
  return node.tagName === 'INPUT';
};

var isHiddenInput = function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
};

var isDetailsWithSummary = function isDetailsWithSummary(node) {
  var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
    return child.tagName === 'SUMMARY';
  });
  return r;
};

var getCheckedRadio = function getCheckedRadio(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};

var isTabbableRadio = function isTabbableRadio(node) {
  if (!node.name) {
    return true;
  }

  var radioScope = node.form || node.ownerDocument;

  var queryRadios = function queryRadios(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };

  var radioSet;

  if (typeof window !== 'undefined' && typeof window.CSS !== 'undefined' && typeof window.CSS.escape === 'function') {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', err.message);
      return false;
    }
  }

  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};

var isRadio = function isRadio(node) {
  return isInput(node) && node.type === 'radio';
};

var isNonTabbableRadio = function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
};

var isHidden = function isHidden(node) {
  if (getComputedStyle(node).visibility === 'hidden') {
    return true;
  }

  var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;

  if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
    return true;
  }

  while (node) {
    if (getComputedStyle(node).display === 'none') {
      return true;
    }

    node = node.parentElement;
  }

  return false;
};

var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(node) {
  if (node.disabled || isHiddenInput(node) || isHidden(node) ||
  /* For a details element with a summary, the summary element gets the focused  */
  isDetailsWithSummary(node)) {
    return false;
  }

  return true;
};

var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(node) {
  if (!isNodeMatchingSelectorFocusable(node) || isNonTabbableRadio(node) || getTabindex(node) < 0) {
    return false;
  }

  return true;
};

var tabbable = function tabbable(el, options) {
  options = options || {};
  var regularTabbables = [];
  var orderedTabbables = [];
  var candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable);
  candidates.forEach(function (candidate, i) {
    var candidateTabindex = getTabindex(candidate);

    if (candidateTabindex === 0) {
      regularTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        node: candidate
      });
    }
  });
  var tabbableNodes = orderedTabbables.sort(sortOrderedTabbables).map(function (a) {
    return a.node;
  }).concat(regularTabbables);
  return tabbableNodes;
};

var focusableCandidateSelector = /* #__PURE__ */candidateSelectors.concat('iframe').join(',');

var isFocusable = function isFocusable(node) {
  if (!node) {
    throw new Error('No node provided');
  }

  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }

  return isNodeMatchingSelectorFocusable(node);
};

/*!
* focus-trap 6.2.3
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var activeFocusDelay;

var activeFocusTraps = function () {
  var trapQueue = [];
  return {
    activateTrap: function activateTrap(trap) {
      if (trapQueue.length > 0) {
        var activeTrap = trapQueue[trapQueue.length - 1];

        if (activeTrap !== trap) {
          activeTrap.pause();
        }
      }

      var trapIndex = trapQueue.indexOf(trap);

      if (trapIndex === -1) {
        trapQueue.push(trap);
      } else {
        // move this existing trap to the front of the queue
        trapQueue.splice(trapIndex, 1);
        trapQueue.push(trap);
      }
    },
    deactivateTrap: function deactivateTrap(trap) {
      var trapIndex = trapQueue.indexOf(trap);

      if (trapIndex !== -1) {
        trapQueue.splice(trapIndex, 1);
      }

      if (trapQueue.length > 0) {
        trapQueue[trapQueue.length - 1].unpause();
      }
    }
  };
}();

var isSelectableInput = function isSelectableInput(node) {
  return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
};

var isEscapeEvent = function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
};

var isTabEvent = function isTabEvent(e) {
  return e.key === 'Tab' || e.keyCode === 9;
};

var delay = function delay(fn) {
  return setTimeout(fn, 0);
}; // Array.find/findIndex() are not supported on IE; this replicates enough
//  of Array.findIndex() for our needs


var findIndex = function findIndex(arr, fn) {
  var idx = -1;
  arr.every(function (value, i) {
    if (fn(value)) {
      idx = i;
      return false; // break
    }

    return true; // next
  });
  return idx;
};

var createFocusTrap = function createFocusTrap(elements, userOptions) {
  var doc = document;

  var config = _objectSpread2({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true,
    delayInitialFocus: true
  }, userOptions);

  var state = {
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying the first and last tabbable nodes in all containers/groups in
    //  the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{ firstTabbableNode: HTMLElement|null, lastTabbableNode: HTMLElement|null }>}
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false
  };
  var trap; // eslint-disable-line prefer-const -- some private functions reference it, and its methods reference private functions, so we must declare here and define later

  var containersContain = function containersContain(element) {
    return state.containers.some(function (container) {
      return container.contains(element);
    });
  };

  var getNodeForOption = function getNodeForOption(optionName) {
    var optionValue = config[optionName];

    if (!optionValue) {
      return null;
    }

    var node = optionValue;

    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue);

      if (!node) {
        throw new Error("`".concat(optionName, "` refers to no known node"));
      }
    }

    if (typeof optionValue === 'function') {
      node = optionValue();

      if (!node) {
        throw new Error("`".concat(optionName, "` did not return a node"));
      }
    }

    return node;
  };

  var getInitialFocusNode = function getInitialFocusNode() {
    var node;

    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (containersContain(doc.activeElement)) {
      node = doc.activeElement;
    } else {
      var firstTabbableGroup = state.tabbableGroups[0];
      var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;
      node = firstTabbableNode || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error('Your focus-trap needs to have at least one focusable element');
    }

    return node;
  };

  var updateTabbableNodes = function updateTabbableNodes() {
    state.tabbableGroups = state.containers.map(function (container) {
      var tabbableNodes = tabbable(container);

      if (tabbableNodes.length > 0) {
        return {
          firstTabbableNode: tabbableNodes[0],
          lastTabbableNode: tabbableNodes[tabbableNodes.length - 1]
        };
      }

      return undefined;
    }).filter(function (group) {
      return !!group;
    }); // remove groups with no tabbable nodes
    // throw if no groups have tabbable nodes and we don't have a fallback focus node either

    if (state.tabbableGroups.length <= 0 && !getNodeForOption('fallbackFocus')) {
      throw new Error('Your focus-trap must have at least one container with at least one tabbable node in it at all times');
    }
  };

  var tryFocus = function tryFocus(node) {
    if (node === doc.activeElement) {
      return;
    }

    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }

    node.focus({
      preventScroll: !!config.preventScroll
    });
    state.mostRecentlyFocusedNode = node;

    if (isSelectableInput(node)) {
      node.select();
    }
  };

  var getReturnFocusNode = function getReturnFocusNode(previousActiveElement) {
    var node = getNodeForOption('setReturnFocus');
    return node ? node : previousActiveElement;
  }; // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.


  var checkPointerDown = function checkPointerDown(e) {
    if (containersContain(e.target)) {
      // allow the click since it ocurred inside the trap
      return;
    }

    if (config.clickOutsideDeactivates) {
      // immediately deactivate the trap
      trap.deactivate({
        // if, on deactivation, we should return focus to the node originally-focused
        //  when the trap was activated (or the configured `setReturnFocus` node),
        //  then assume it's also OK to return focus to the outside node that was
        //  just clicked, causing deactivation, as long as that node is focusable;
        //  if it isn't focusable, then return focus to the original node focused
        //  on activation (or the configured `setReturnFocus` node)
        // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
        //  which will result in the outside click setting focus to the node
        //  that was clicked, whether it's focusable or not; by setting
        //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
        //  on activation (or the configured `setReturnFocus` node)
        returnFocus: config.returnFocusOnDeactivate && !isFocusable(e.target)
      });
      return;
    } // This is needed for mobile devices.
    // (If we'll only let `click` events through,
    // then on mobile they will be blocked anyways if `touchstart` is blocked.)


    if (config.allowOutsideClick && (typeof config.allowOutsideClick === 'boolean' ? config.allowOutsideClick : config.allowOutsideClick(e))) {
      // allow the click outside the trap to take place
      return;
    } // otherwise, prevent the click


    e.preventDefault();
  }; // In case focus escapes the trap for some strange reason, pull it back in.


  var checkFocusIn = function checkFocusIn(e) {
    var targetContained = containersContain(e.target); // In Firefox when you Tab out of an iframe the Document is briefly focused.

    if (targetContained || e.target instanceof Document) {
      if (targetContained) {
        state.mostRecentlyFocusedNode = e.target;
      }
    } else {
      // escaped! pull it back in to where it just left
      e.stopImmediatePropagation();
      tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
    }
  }; // Hijack Tab events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.


  var checkTab = function checkTab(e) {
    updateTabbableNodes();
    var destinationNode = null;

    if (state.tabbableGroups.length > 0) {
      if (e.shiftKey) {
        var startOfGroupIndex = findIndex(state.tabbableGroups, function (_ref) {
          var firstTabbableNode = _ref.firstTabbableNode;
          return e.target === firstTabbableNode;
        });

        if (startOfGroupIndex >= 0) {
          var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
          var destinationGroup = state.tabbableGroups[destinationGroupIndex];
          destinationNode = destinationGroup.lastTabbableNode;
        }
      } else {
        var lastOfGroupIndex = findIndex(state.tabbableGroups, function (_ref2) {
          var lastTabbableNode = _ref2.lastTabbableNode;
          return e.target === lastTabbableNode;
        });

        if (lastOfGroupIndex >= 0) {
          var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;

          var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
          destinationNode = _destinationGroup.firstTabbableNode;
        }
      }
    } else {
      destinationNode = getNodeForOption('fallbackFocus');
    }

    if (destinationNode) {
      e.preventDefault();
      tryFocus(destinationNode);
    }
  };

  var checkKey = function checkKey(e) {
    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      e.preventDefault();
      trap.deactivate();
      return;
    }

    if (isTabEvent(e)) {
      checkTab(e);
      return;
    }
  };

  var checkClick = function checkClick(e) {
    if (config.clickOutsideDeactivates) {
      return;
    }

    if (containersContain(e.target)) {
      return;
    }

    if (config.allowOutsideClick && (typeof config.allowOutsideClick === 'boolean' ? config.allowOutsideClick : config.allowOutsideClick(e))) {
      return;
    }

    e.preventDefault();
    e.stopImmediatePropagation();
  }; //
  // EVENT LISTENERS
  //


  var addListeners = function addListeners() {
    if (!state.active) {
      return;
    } // There can be only one listening focus trap at a time


    activeFocusTraps.activateTrap(trap); // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.

    activeFocusDelay = config.delayInitialFocus ? delay(function () {
      tryFocus(getInitialFocusNode());
    }) : tryFocus(getInitialFocusNode());
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('touchstart', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('click', checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener('keydown', checkKey, {
      capture: true,
      passive: false
    });
    return trap;
  };

  var removeListeners = function removeListeners() {
    if (!state.active) {
      return;
    }

    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);
    return trap;
  }; //
  // TRAP DEFINITION
  //


  trap = {
    activate: function activate(activateOptions) {
      if (state.active) {
        return this;
      }

      updateTabbableNodes();
      state.active = true;
      state.paused = false;
      state.nodeFocusedBeforeActivation = doc.activeElement;
      var onActivate = activateOptions && activateOptions.onActivate ? activateOptions.onActivate : config.onActivate;

      if (onActivate) {
        onActivate();
      }

      addListeners();
      return this;
    },
    deactivate: function deactivate(deactivateOptions) {
      if (!state.active) {
        return this;
      }

      clearTimeout(activeFocusDelay);
      removeListeners();
      state.active = false;
      state.paused = false;
      activeFocusTraps.deactivateTrap(trap);
      var onDeactivate = deactivateOptions && deactivateOptions.onDeactivate !== undefined ? deactivateOptions.onDeactivate : config.onDeactivate;

      if (onDeactivate) {
        onDeactivate();
      }

      var returnFocus = deactivateOptions && deactivateOptions.returnFocus !== undefined ? deactivateOptions.returnFocus : config.returnFocusOnDeactivate;

      if (returnFocus) {
        delay(function () {
          tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
        });
      }

      return this;
    },
    pause: function pause() {
      if (state.paused || !state.active) {
        return this;
      }

      state.paused = true;
      removeListeners();
      return this;
    },
    unpause: function unpause() {
      if (!state.paused || !state.active) {
        return this;
      }

      state.paused = false;
      updateTabbableNodes();
      addListeners();
      return this;
    },
    updateContainerElements: function updateContainerElements(containerElements) {
      var elementsAsArray = [].concat(containerElements).filter(Boolean);
      state.containers = elementsAsArray.map(function (element) {
        return typeof element === 'string' ? doc.querySelector(element) : element;
      });

      if (state.active) {
        updateTabbableNodes();
      }

      return this;
    }
  }; // initialize container elements

  trap.updateContainerElements(elements);
  return trap;
};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const d$1="esri-identity-modal",l="esri-identity-modal--open",p$1="esri-identity-modal--closed",u="esri-identity-modal__title",m$1="esri-identity-modal__dialog",h$1="esri-identity-modal__content",_="esri-identity-modal__close-button",y="esri-icon-close";let g$1=class extends H{constructor(t,e){super(t,e),this.container=document.createElement("div"),this.content=null,this.open=!1,this._close=()=>{this.open=!1;},document.body.appendChild(this.container),this.own(this.watch("open",(()=>this._toggleFocusTrap())));}destroy(){this._destroyFocusTrap();}render(){const t=this.id,{open:e,content:s,title:o,messages:i}=this,a=e&&!!s,n={[l]:a,[p$1]:!a},c=r("button",{class:_,"aria-label":i.close,title:i.close,bind:this,onclick:this._close},r("span",{"aria-hidden":"true",class:y})),h=`${t}_title`,g=`${t}_content`,f=o?r("h1",{id:h,class:u},o):null,v=a?r("div",{bind:this,class:m$1,role:"dialog","aria-labelledby":h,"aria-describedby":g,afterCreate:this._createFocusTrap},c,f,this._renderContent(g)):null;return r("div",{tabIndex:-1,class:this.classes(d$1,n)},v)}_destroyFocusTrap(){var t;null==(t=this._focusTrap)||t.deactivate({onDeactivate:null}),this._focusTrap=null;}_toggleFocusTrap(){const{_focusTrap:t,open:e}=this;t&&(e?t.activate():t.deactivate());}_createFocusTrap(t){this._destroyFocusTrap(),requestAnimationFrame((()=>{this._focusTrap=createFocusTrap(t,{initialFocus:"input",onDeactivate:this._close}),this._toggleFocusTrap();}));}_renderContent(t){const e=this.content;return "string"==typeof e?r("div",{class:h$1,id:t,innerHTML:e}):e$2(e)?r("div",{class:h$1,id:t},e.render()):e instanceof HTMLElement?r("div",{class:h$1,id:t,bind:e,afterCreate:this._attachToNode}):null}_attachToNode(t){t.appendChild(this);}};e([y$1({readOnly:!0})],g$1.prototype,"container",void 0),e([y$1(),o$1()],g$1.prototype,"content",void 0),e([y$1(),o$1()],g$1.prototype,"open",void 0),e([y$1(),o$1(),e$1("esri/t9n/common")],g$1.prototype,"messages",void 0),e([y$1({aliasOf:"messages.auth.signIn"}),o$1()],g$1.prototype,"title",void 0),g$1=e([i$2("esri.identity.IdentityModal")],g$1);var f=g$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class t$1{constructor(t,e){this.oAuthInfo=null,this.storage=null,this.appId=null,this.expires=null,this.ssl=null,this.token=null,this.userId=null,this.oAuthInfo=t,this.storage=e,this._init();}isValid(){let t=!1;if(this.oAuthInfo&&this.token&&this.userId){const e=Date.now();if(this.expires>e){(this.expires-e)/1e3>60*this.oAuthInfo.minTimeUntilExpiration&&(t=!0);}}return t}save(){if(!this.storage)return;const t=this._load(),e=this.oAuthInfo;if(e&&e.authNamespace&&e.portalUrl){let s=t[e.authNamespace];s||(s=t[e.authNamespace]={}),s[e.portalUrl]={appId:this.appId=e.appId,expires:this.expires,ssl:this.ssl,token:this.token,userId:this.userId};try{this.storage.setItem("esriJSAPIOAuth",JSON.stringify(t));}catch(t){console.log(t);}}}destroy(){const t=this._load(),e=this.oAuthInfo;if(e&&e.appId&&e.portalUrl&&this.token&&this.expires>Date.now()){const t=e.portalUrl.replace(/^http:/i,"https:")+"/sharing/rest/oauth2/revokeToken",s=new FormData;if(s.append("f","json"),s.append("auth_token",this.token),s.append("client_id",e.appId),s.append("token_type_hint","access_token"),"function"==typeof navigator.sendBeacon)navigator.sendBeacon(t,s);else {const e=new XMLHttpRequest;e.open("POST",t),e.send(s);}}if(e&&e.authNamespace&&e.portalUrl&&this.storage){const s=t[e.authNamespace];if(s){delete s[e.portalUrl];try{this.storage.setItem("esriJSAPIOAuth",JSON.stringify(t));}catch(t){console.log(t);}}}e&&(e._oAuthCred=null,this.oAuthInfo=null);}_init(){const t=this._load(),e=this.oAuthInfo;if(e&&e.authNamespace&&e.portalUrl){let s=t[e.authNamespace];s&&(s=s[e.portalUrl],s&&(this.appId=s.appId,this.expires=s.expires,this.ssl=s.ssl,this.token=s.token,this.userId=s.userId));}}_load(){let t={};if(this.storage){const e=this.storage.getItem("esriJSAPIOAuth");if(e)try{t=JSON.parse(e);}catch(t){console.log(t);}}return t}}t$1.prototype.declaredClass="esri.identity.OAuthCredential";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var p$2;let s=p$2=class extends a$2{constructor(o){super(o),this._oAuthCred=null,this.appId=null,this.authNamespace="/",this.expiration=20160,this.forceLogin=!1,this.forceUserId=!1,this.locale=null,this.minTimeUntilExpiration=30,this.popup=!1,this.popupCallbackUrl="oauth-callback.html",this.popupWindowFeatures="height=490,width=800,resizable,scrollbars,status",this.portalUrl="https://www.arcgis.com",this.preserveUrlHash=!1,this.userId=null;}clone(){return p$2.fromJSON(this.toJSON())}};e([y$1({json:{write:!0}})],s.prototype,"appId",void 0),e([y$1({json:{write:!0}})],s.prototype,"authNamespace",void 0),e([y$1({json:{write:!0}})],s.prototype,"expiration",void 0),e([y$1({json:{write:!0}})],s.prototype,"forceLogin",void 0),e([y$1({json:{write:!0}})],s.prototype,"forceUserId",void 0),e([y$1({json:{write:!0}})],s.prototype,"locale",void 0),e([y$1({json:{write:!0}})],s.prototype,"minTimeUntilExpiration",void 0),e([y$1({json:{write:!0}})],s.prototype,"popup",void 0),e([y$1({json:{write:!0}})],s.prototype,"popupCallbackUrl",void 0),e([y$1({json:{write:!0}})],s.prototype,"popupWindowFeatures",void 0),e([y$1({json:{write:!0}})],s.prototype,"portalUrl",void 0),e([y$1({json:{write:!0}})],s.prototype,"preserveUrlHash",void 0),e([y$1({json:{write:!0}})],s.prototype,"userId",void 0),s=p$2=e([i$2("esri.identity.OAuthInfo")],s);var i=s;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let s$1=class extends a$2{constructor(r){super(r),this.adminTokenServiceUrl=null,this.currentVersion=null,this.hasPortal=null,this.hasServer=null,this.owningSystemUrl=null,this.owningTenant=null,this.server=null,this.shortLivedTokenValidity=null,this.tokenServiceUrl=null,this.webTierAuth=null;}};e([y$1({json:{write:!0}})],s$1.prototype,"adminTokenServiceUrl",void 0),e([y$1({json:{write:!0}})],s$1.prototype,"currentVersion",void 0),e([y$1({json:{write:!0}})],s$1.prototype,"hasPortal",void 0),e([y$1({json:{write:!0}})],s$1.prototype,"hasServer",void 0),e([y$1({json:{write:!0}})],s$1.prototype,"owningSystemUrl",void 0),e([y$1({json:{write:!0}})],s$1.prototype,"owningTenant",void 0),e([y$1({json:{write:!0}})],s$1.prototype,"server",void 0),e([y$1({json:{write:!0}})],s$1.prototype,"shortLivedTokenValidity",void 0),e([y$1({json:{write:!0}})],s$1.prototype,"tokenServiceUrl",void 0),e([y$1({json:{write:!0}})],s$1.prototype,"webTierAuth",void 0),s$1=e([i$2("esri.identity.ServerInfo")],s$1);var i$1=s$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const D={},j=e=>{const t=new $(e.owningSystemUrl).host,r=new $(e.server).host,s=/.+\.arcgis\.com$/i;return s.test(t)&&s.test(r)},q=(e,t)=>!!(j(e)&&t&&t.some((t=>t.test(e.server))));let E=class extends i$3{constructor(){super(),this._portalConfig=e$3.esriGeowConfig,this.serverInfos=[],this.oAuthInfos=[],this.credentials=[],this._soReqs=[],this._xoReqs=[],this._portals=[],this.defaultOAuthInfo=null,this.defaultTokenValidity=60,this.dialog=null,this.formConstructor=g,this.tokenValidity=null,this.signInPage=null,this.useSignInPage=!0,this.normalizeWebTierAuth=!1,this._busy=null,this._rejectOnPersistedPageShow=!1,this._oAuthHash=null,this._gwTokenUrl="/sharing/rest/generateToken",this._agsRest="/rest/services",this._agsPortal=/\/sharing(\/|$)/i,this._agsAdmin=/(https?:\/\/[^\/]+\/[^\/]+)\/admin\/?(\/.*)?$/i,this._adminSvcs=/\/rest\/admin\/services(\/|$)/i,this._gwDomains=[{regex:/^https?:\/\/www\.arcgis\.com/i,customBaseUrl:"maps.arcgis.com",tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:dev|[a-z\d-]+\.mapsdev)\.arcgis\.com/i,customBaseUrl:"mapsdev.arcgis.com",tokenServiceUrl:"https://dev.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:devext|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,customBaseUrl:"mapsdevext.arcgis.com",tokenServiceUrl:"https://devext.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:qaext|[a-z\d-]+\.mapsqa)\.arcgis\.com/i,customBaseUrl:"mapsqa.arcgis.com",tokenServiceUrl:"https://qaext.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/[a-z\d-]+\.maps\.arcgis\.com/i,customBaseUrl:"maps.arcgis.com",tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"}],this._legacyFed=[],this._regexSDirUrl=/http.+\/rest\/services\/?/gi,this._regexServerType=/(\/(FeatureServer|GPServer|GeoDataServer|GeocodeServer|GeoenrichmentServer|GeometryServer|GlobeServer|ImageServer|MapServer|MobileServer|NAServer|NetworkDiagramServer|ParcelFabricServer|RelationalCatalogServer|SceneServer|StreamServer|UtilityNetworkServer|ValidationServer|VectorTileServer|VersionManagementServer)).*/gi,this._gwUser=/http.+\/users\/([^\/]+)\/?.*/i,this._gwItem=/http.+\/items\/([^\/]+)\/?.*/i,this._gwGroup=/http.+\/groups\/([^\/]+)\/?.*/i,this._rePortalTokenSvc=/\/sharing(\/rest)?\/generatetoken/i,this._createDefaultOAuthInfo=!0,this._hasTestedIfAppIsOnPortal=!1,this._getOAuthHash(),window.addEventListener("pageshow",(e=>{this._pageShowHandler(e);}));}registerServers(e){const t=this.serverInfos;t?(e=e.filter((e=>!this.findServerInfo(e.server))),this.serverInfos=t.concat(e)):this.serverInfos=e,e.forEach((e=>{e.owningSystemUrl&&this._portals.push(e.owningSystemUrl),e.hasPortal&&this._portals.push(e.server);}));}registerOAuthInfos(e){const t=this.oAuthInfos;t?(e=e.filter((e=>!this.findOAuthInfo(e.portalUrl))),this.oAuthInfos=t.concat(e)):this.oAuthInfos=e;}registerToken(e){e={...e};const t=this._sanitizeUrl(e.server),s=this._isServerRsrc(t);let i,n=this.findServerInfo(t),o=!0;n||(n=new i$1,n.server=this._getServerInstanceRoot(t),s?n.hasServer=!0:(n.tokenServiceUrl=this._getTokenSvcUrl(t),n.hasPortal=!0),this.registerServers([n])),i=this._findCredential(t),i?(delete e.server,l$1(i,e),o=!1):(i=new L({userId:e.userId,server:n.server,token:e.token,expires:e.expires,ssl:e.ssl,scope:s?"server":"portal"}),i.resources=[t],this.credentials.push(i)),i.emitTokenChange(!1),o||i.refreshServerTokens();}toJSON(){return p$3({serverInfos:this.serverInfos.map((e=>e.toJSON())),oAuthInfos:this.oAuthInfos.map((e=>e.toJSON())),credentials:this.credentials.map((e=>e.toJSON()))})}initialize(e){if(!e)return;"string"==typeof e&&(e=JSON.parse(e));const t=e.serverInfos,r=e.oAuthInfos,s=e.credentials;if(t){const e=[];t.forEach((t=>{t.server&&t.tokenServiceUrl&&e.push(t.declaredClass?t:new i$1(t));})),e.length&&this.registerServers(e);}if(r){const e=[];r.forEach((t=>{t.appId&&e.push(t.declaredClass?t:new i(t));})),e.length&&this.registerOAuthInfos(e);}s&&s.forEach((e=>{e.server&&e.token&&e.expires&&e.expires>Date.now()&&((e=e.declaredClass?e:new L(e)).emitTokenChange(),this.credentials.push(e));}));}findServerInfo(e){let t;e=this._sanitizeUrl(e);for(const r of this.serverInfos)if(this._hasSameServerInstance(r.server,e)){t=r;break}return t}findOAuthInfo(e){let t;e=this._sanitizeUrl(e);for(const r of this.oAuthInfos)if(this._hasSameServerInstance(r.portalUrl,e)){t=r;break}return t}findCredential(e,t){let r,s;if(e=this._sanitizeUrl(e),s=this._isServerRsrc(e)?"server":"portal",t){for(const i of this.credentials)if(this._hasSameServerInstance(i.server,e)&&t===i.userId&&i.scope===s){r=i;break}}else for(const t of this.credentials)if(this._hasSameServerInstance(t.server,e)&&-1!==this._getIdenticalSvcIdx(e,t)&&t.scope===s){r=t;break}return r}getCredential(e,t$1){let r,s,i=!0;t$1&&(r=!!t$1.token,s=t$1.error,i=!1!==t$1.prompt),t$1={...t$1},e=this._sanitizeUrl(e);const n=a$3(),o=G();if(t$1.signal&&d$2(t$1.signal,(()=>{n.abort();})),d$2(n,(()=>{o.reject(new s$4("identity-manager:user-aborted","ABORTED"));})),j$1(n))return o.promise;t$1.signal=n.signal;const a=this._isAdminResource(e),h=r&&this._doPortalSignIn(e)?this._getEsriAuthCookie():null,c=r?this.findCredential(e):null;let d;if(c&&s&&s.details&&498===s.details.httpStatus)c.destroy(),h&&h.token===t$1.token&&(t("esri_auth",null,{expires:-1,path:"/",domain:document.domain}),window.location.hostname.endsWith(".arcgis.com")&&t("esri_auth",null,{expires:-1,path:"/",domain:"arcgis.com"}));else if(h||c){const t=h&&h.email||c&&c.userId;return d=new s$4("identity-manager:not-authorized","You are currently signed in as: '"+t+"'. You do not have access to this resource: "+e,{error:s}),o.reject(d),o.promise}const u=this._findCredential(e,t$1);if(u)return o.resolve(u),o.promise;let p=this.findServerInfo(e);if(p)!p.hasServer&&this._isServerRsrc(e)&&(p._restInfoPms=this._getTokenSvcUrl(e),p.hasServer=!0);else {const t=this._getTokenSvcUrl(e);if(!t)return d=new s$4("identity-manager:unknown-resource","Unknown resource - could not find token service endpoint."),o.reject(d),o.promise;p=new i$1,p.server=this._getServerInstanceRoot(e),"string"==typeof t?(p.tokenServiceUrl=t,p.hasPortal=!0):(p._restInfoPms=t,p.hasServer=!0),this.registerServers([p]);}return i&&p.hasPortal&&void 0===p._selfReq&&!this._findOAuthInfo(e)&&(p._selfReq={owningTenant:t$1&&t$1.owningTenant,selfDfd:this._getPortalSelf(p.tokenServiceUrl.replace(this._rePortalTokenSvc,"/sharing/rest/portals/self"),e)}),this._enqueue(e,p,t$1,o,a)}getResourceName(e){return this._isRESTService(e)?e.replace(this._regexSDirUrl,"").replace(this._regexServerType,"")||"":this._gwUser.test(e)&&e.replace(this._gwUser,"$1")||this._gwItem.test(e)&&e.replace(this._gwItem,"$1")||this._gwGroup.test(e)&&e.replace(this._gwGroup,"$1")||""}generateToken(e,t,s){const i=this._rePortalTokenSvc.test(e.tokenServiceUrl),n=new $(window.location.href.toLowerCase()),o=this._getEsriAuthCookie(),a=e.shortLivedTokenValidity;let h,u,p,_,f,g,m,v,S,w;t&&(w=this.tokenValidity||a||this.defaultTokenValidity,w>a&&a>0&&(w=a)),s&&(u=s.isAdmin,p=s.serverUrl,_=s.token,m=s.signal,v=s.ssl,e.customParameters=s.customParameters),u?f=e.adminTokenServiceUrl:(f=e.tokenServiceUrl,g=new $(f.toLowerCase()),o&&(h=o.auth_tier,h=h&&h.toLowerCase()),("web"===h||e.webTierAuth)&&s&&s.serverUrl&&!v&&"http"===n.scheme&&(E$1(n.uri,f,!0)||"https"===g.scheme&&n.host===g.host&&"7080"===n.port&&"7443"===g.port)&&(f=f.replace(/^https:/i,"http:").replace(/:7443/i,":7080"))),S=l$1({query:l$1({request:"getToken",username:t&&t.username,password:t&&t.password,serverUrl:p,token:_,expiration:w,referer:u||i?window.location.host:null,client:u?"referer":null,f:"json"},e.customParameters),method:"post",authMode:"anonymous",useProxy:this._useProxy(e,s),signal:m},s&&s.ioArgs),i||(S.withCredentials=!1);return L$1(f,S).then((r=>{const s=r.data;if(!s||!s.token)return new s$4("identity-manager:authentication-failed","Unable to generate token");const i=e.server;return D[i]||(D[i]={}),t&&(D[i][t.username]=t.password),s.validity=w,s}))}isBusy(){return !!this._busy}checkSignInStatus(e){return this.checkAppAccess(e,"").then((e=>e.credential))}checkAppAccess(e,t,r){let s=!1;return this.getCredential(e,{prompt:!1}).then((i=>{let n;const o={f:"json"};if("portal"===i.scope)if(t&&(this._doPortalSignIn(e,!0)||r&&r.force))n=i.server+"/sharing/rest/oauth2/validateAppAccess",o.client_id=t;else {if(!i.token)return {credential:i};n=i.server+"/sharing/rest";}else {if(!i.token)return {credential:i};n=i.server+"/rest/services";}return i.token&&(o.token=i.token),L$1(n,{query:o,authMode:"anonymous"}).then((e=>{if(!1===e.data.valid)throw new s$4("identity-manager:not-authorized",`You are currently signed in as: '${i.userId}'.`,e.data);return s=!!e.data.viewOnlyUserTypeApp,{credential:i}})).catch((e=>{if("identity-manager:not-authorized"===e.name)throw e;const t=e.details&&e.details.httpStatus;if(498===t)throw i.destroy(),new s$4("identity-manager:not-authenticated","User is not signed in.");if(400===t)throw new s$4("identity-manager:invalid-request");return {credential:i}}))})).then((e=>({credential:e.credential,viewOnly:s})))}setOAuthResponseHash(e){var t;const r=this._oAuthDfd;if(this._oAuthDfd=null,!r||!e)return;clearInterval(this._oAuthIntervalId),null==(t=this._oAuthOnHashHandle)||t.remove(),"#"===e.charAt(0)&&(e=e.substring(1));const s=b$1(e);if(s.error){const e="access_denied"===s.error,t=new s$4(e?"identity-manager:user-aborted":"identity-manager:authentication-failed",e?"ABORTED":"OAuth: "+s.error+" - "+s.error_description);r.reject(t);}else {const e=r.sinfo_,t=r.oinfo_,i=t._oAuthCred,n=new L({userId:s.username,server:e.server,token:s.access_token,expires:Date.now()+1e3*Number(s.expires_in),ssl:"true"===s.ssl,_oAuthCred:i});t.userId=n.userId,i.storage=s.persist?window.localStorage:window.sessionStorage,i.token=n.token,i.expires=n.expires,i.userId=n.userId,i.ssl=n.ssl,i.save(),r.resolve(n);}}setRedirectionHandler(e){this._redirectFunc=e;}setOAuthRedirectionHandler(e){this._oAuthRedirectFunc=e;}setProtocolErrorHandler(e){this._protocolFunc=e;}signIn(e,t,r={}){const s=G(),i=()=>{var e,t,r,s,i;null==(e=a)||e.remove(),null==(t=h)||t.remove(),null==(r=c)||r.remove(),null==(s=o)||s.destroy(),null==(i=this.dialog)||i.destroy(),this.dialog=o=a=h=c=null;},n=()=>{i(),this._oAuthDfd=null,s.reject(new s$4("identity-manager:user-aborted","ABORTED"));};r.signal&&d$2(r.signal,(()=>{n();}));let o=new this.formConstructor;o.resource=this.getResourceName(e),o.server=t.server,this.dialog=new f,this.dialog.content=o,this.dialog.open=!0,this.emit("dialog-create");let a=o.on("cancel",n),h=this.dialog.watch("open",n),c=o.on("submit",(e=>{this.generateToken(t,e,{isAdmin:r.isAdmin,signal:r.signal}).then((n=>{i();const o=new L({userId:e.username,server:t.server,token:n.token,expires:null!=n.expires?Number(n.expires):null,ssl:!!n.ssl,isAdmin:r.isAdmin,validity:n.validity});s.resolve(o);})).catch((e=>{o.error=e,o.signingIn=!1;}));}));return s.promise}oAuthSignIn(e,t,r,s){this._oAuthDfd=G();const i=this._oAuthDfd;null!=s&&s.signal&&d$2(s.signal,(()=>{const e=this._oAuthDfd&&this._oAuthDfd.oAuthWin_;e&&!e.closed?e.close():this.dialog&&a();})),i.resUrl_=e,i.sinfo_=t,i.oinfo_=r;const n=!s||!1!==s.oAuthPopupConfirmation;if(!r.popup||!n)return this._doOAuthSignIn(e,t,r),i.promise;const o=new this.formConstructor;o.oAuthPrompt=!0,o.server=t.server,this.dialog=new f,this.dialog.content=o,this.dialog.open=!0,this.emit("dialog-create");const a=()=>{u(),this._oAuthDfd=null,i.reject(new s$4("identity-manager:user-aborted","ABORTED"));},h=o.on("cancel",a),c=this.dialog.watch("open",a),d=o.on("submit",(()=>{u(),this._doOAuthSignIn(e,t,r);})),u=()=>{h.remove(),c.remove(),d.remove(),o.destroy(),this.dialog.destroy(),this.dialog=null;};return i.promise}destroyCredentials(){if(this.credentials){this.credentials.slice().forEach((e=>{e.destroy();}));}this.emit("credentials-destroy");}_getOAuthHash(){let e=window.location.hash;if(e){"#"===e.charAt(0)&&(e=e.substring(1));const t=b$1(e);let r=!1;t.access_token&&t.expires_in&&t.state&&t.hasOwnProperty("username")?(t.state=JSON.parse(t.state),this._oAuthHash=t,r=!0):t.error&&t.error_description&&(console.log("IdentityManager OAuth Error: ",t.error," - ",t.error_description),"access_denied"===t.error&&(r=!0)),r&&(window.location.hash="object"==typeof t.state&&t.state.hash||"");}}_pageShowHandler(e){if(e.persisted&&this.isBusy()&&this._rejectOnPersistedPageShow){const e=new s$4("identity-manager:user-aborted","ABORTED");this._errbackFunc(e);}}_findCredential(e,t){let r,s,i,n,o=-1;const a=t&&t.token,h=t&&t.resource,l=this._isServerRsrc(e)?"server":"portal",c=this.credentials.filter((t=>this._hasSameServerInstance(t.server,e)&&t.scope===l));if(e=h||e,c.length)if(1===c.length){if(r=c[0],n=this.findServerInfo(r.server),s=n&&n.owningSystemUrl,i=s&&this.findCredential(s,r.userId),o=this._getIdenticalSvcIdx(e,r),!a)return -1===o&&r.resources.push(e),this._addResource(e,i),r;-1!==o&&(r.resources.splice(o,1),this._removeResource(e,i));}else {let t,r;if(c.some((a=>(r=this._getIdenticalSvcIdx(e,a),-1!==r&&(t=a,n=this.findServerInfo(t.server),s=n&&n.owningSystemUrl,i=s&&this.findCredential(s,t.userId),o=r,!0)))),a)t&&(t.resources.splice(o,1),this._removeResource(e,i));else if(t)return this._addResource(e,i),t}}_findOAuthInfo(e){let t=this.findOAuthInfo(e);if(!t)for(const r of this.oAuthInfos)if(this._isIdProvider(r.portalUrl,e)){t=r;break}return t}_addResource(e,t){t&&-1===this._getIdenticalSvcIdx(e,t)&&t.resources.push(e);}_removeResource(e,t){let r=-1;t&&(r=this._getIdenticalSvcIdx(e,t),r>-1&&t.resources.splice(r,1));}_useProxy(e,t){return t&&t.isAdmin&&!E$1(e.adminTokenServiceUrl,window.location.href)||!this._isPortalDomain(e.tokenServiceUrl)&&"10.1"===String(e.currentVersion)&&!E$1(e.tokenServiceUrl,window.location.href)}_getOrigin(e){const t=new $(e);return t.scheme+"://"+t.host+(null!=t.port?":"+t.port:"")}_getServerInstanceRoot(e){const t=e.toLowerCase();let r=t.indexOf(this._agsRest);return -1===r&&this._isAdminResource(e)&&(r=this._agsAdmin.test(e)?e.replace(this._agsAdmin,"$1").length:e.search(this._adminSvcs)),-1===r&&(r=t.indexOf("/sharing")),-1===r&&"/"===t.substr(-1)&&(r=t.length-1),r>-1?e.substring(0,r):e}_hasSameServerInstance(e,t){return "/"===e.substr(-1)&&(e=e.slice(0,-1)),e=e.toLowerCase(),t=this._getServerInstanceRoot(t).toLowerCase(),e=this._normalizeAGOLorgDomain(e),t=this._normalizeAGOLorgDomain(t),(e=e.substr(e.indexOf(":")))===(t=t.substr(t.indexOf(":")))}_normalizeAGOLorgDomain(e){const t=/^https?:\/\/(?:cdn|[a-z\d-]+\.maps)\.arcgis\.com/i,r=/^https?:\/\/(?:cdndev|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,s=/^https?:\/\/(?:cdnqa|[a-z\d-]+\.mapsqa)\.arcgis\.com/i;return t.test(e)?e=e.replace(t,"https://www.arcgis.com"):r.test(e)?e=e.replace(r,"https://devext.arcgis.com"):s.test(e)&&(e=e.replace(s,"https://qaext.arcgis.com")),e}_sanitizeUrl(e){const t=(s$5.request.proxyUrl||"").toLowerCase(),r=t?e.toLowerCase().indexOf(t+"?"):-1;return -1!==r&&(e=e.substring(r+t.length+1)),e=z(e),U(e).path}_isRESTService(e){return e.indexOf(this._agsRest)>-1}_isAdminResource(e){return this._agsAdmin.test(e)||this._adminSvcs.test(e)}_isServerRsrc(e){return this._isRESTService(e)||this._isAdminResource(e)}_isIdenticalService(e,t){let r;if(this._isRESTService(e)&&this._isRESTService(t)){const s=this._getSuffix(e).toLowerCase(),i=this._getSuffix(t).toLowerCase();if(r=s===i,!r){const e=/(.*)\/(MapServer|FeatureServer).*/gi;r=s.replace(e,"$1")===i.replace(e,"$1");}}else this._isAdminResource(e)&&this._isAdminResource(t)?r=!0:this._isServerRsrc(e)||this._isServerRsrc(t)||!this._isPortalDomain(e)||(r=!0);return r}_isPortalDomain(e){const t=new $(e.toLowerCase()),r=this._portalConfig;let s=this._gwDomains.some((e=>e.regex.test(t.uri)));return !s&&r&&(s=this._hasSameServerInstance(this._getServerInstanceRoot(r.restBaseUrl),t.uri)),s||s$5.portalUrl&&(s=E$1(t,s$5.portalUrl,!0)),s||(s=this._portals.some((e=>this._hasSameServerInstance(e,t.uri)))),s=s||this._agsPortal.test(t.path),s}_isIdProvider(e,t){let r=-1,s=-1;this._gwDomains.forEach(((i,n)=>{-1===r&&i.regex.test(e)&&(r=n),-1===s&&i.regex.test(t)&&(s=n);}));let i=!1;if(r>-1&&s>-1&&(0===r||4===r?0!==s&&4!==s||(i=!0):1===r?1!==s&&2!==s||(i=!0):2===r?2===s&&(i=!0):3===r&&3===s&&(i=!0)),!i){const r=this.findServerInfo(t),s=r&&r.owningSystemUrl;s&&j(r)&&this._isPortalDomain(s)&&this._isIdProvider(e,s)&&(i=!0);}return i}_getIdenticalSvcIdx(e,t){let r=-1;for(let s=0;s<t.resources.length;s++){const i=t.resources[s];if(this._isIdenticalService(e,i)){r=s;break}}return r}_getSuffix(e){return e.replace(this._regexSDirUrl,"").replace(this._regexServerType,"$1")}_getTokenSvcUrl(e){let t,r,s;if(this._isRESTService(e)||this._isAdminResource(e)){const s=this._getServerInstanceRoot(e);return t=s+"/admin/generateToken",r=L$1(e=s+"/rest/info",{query:{f:"json"}}).then((e=>e.data)),{adminUrl:t,promise:r}}if(this._isPortalDomain(e)){let t="";if(this._gwDomains.some((r=>(r.regex.test(e)&&(t=r.tokenServiceUrl),!!t))),t||this._portals.some((r=>(this._hasSameServerInstance(r,e)&&(t=r+this._gwTokenUrl),!!t))),t||(s=e.toLowerCase().indexOf("/sharing"),-1!==s&&(t=e.substring(0,s)+this._gwTokenUrl)),t||(t=this._getOrigin(e)+this._gwTokenUrl),t){const r=new $(e).port;/^http:\/\//i.test(e)&&"7080"===r&&(t=t.replace(/:7080/i,":7443")),t=t.replace(/http:/i,"https:");}return t}if(-1!==e.toLowerCase().indexOf("premium.arcgisonline.com"))return "https://premium.arcgisonline.com/server/tokens"}_exchangeToken(e,t,r){return L$1(`${e}/sharing/rest/oauth2/exchangeToken`,{authMode:"anonymous",method:"post",query:{f:"json",client_id:t,token:r}}).then((e=>e.data.token))}_getPortalSelf(e,t){let r;if(this._gwDomains.some((t=>(t.regex.test(e)&&(r=t.customBaseUrl),!!r))),r)return U$1({allSSL:!0,currentVersion:"4.4",customBaseUrl:r,portalMode:"multitenant",supportsOAuth:!0});"https:"===window.location.protocol?e=e.replace(/^http:/i,"https:").replace(/:7080/i,":7443"):/^http:/i.test(t)&&(e=e.replace(/^https:/i,"http:").replace(/:7443/i,":7080"));return L$1(e,{query:{f:"json"},authMode:"anonymous",withCredentials:!0}).then((e=>e.data))}_hasPortalSession(){return !!this._getEsriAuthCookie()}_getEsriAuthCookie(){let e=null;if(navigator.cookieEnabled){const t=this._getAllCookies("esri_auth");let r;for(let s=0;s<t.length;s++){const i=JSON.parse(t[s]);if(i.portalApp){e=i;break}r?r.push(i):r=[i];}if(!e&&r)for(const t of r)if(t.urlKey&&window.location.hostname===`${t.urlKey.toLowerCase()}.${t.customBaseUrl}`){e=t;break}}if(e){let t=null;e.expires&&("number"==typeof e.expires?t=e.expires:"string"==typeof e.expires&&(t=Date.parse(e.expires)),isNaN(t)&&(t=null),e.expires=t),t&&t<Date.now()&&(e=null);}return e}_getAllCookies(e){const t=[],r=document.cookie.match(new RegExp("(?:^|; )"+o$2(e)+"=([^;]*)","g"));if(r)for(let e=0;e<r.length;e++){let s=r[e];const i=s.indexOf("=");i>-1&&(s=s.substring(i+1),t.push(decodeURIComponent(s)));}return t}_doPortalSignIn(e,t){if(navigator.cookieEnabled){const r=this._getEsriAuthCookie(),s=this._portalConfig,i=window.location.href,n=this.findServerInfo(e);if((t||this.useSignInPage)&&(s||this._isPortalDomain(i)||r)&&(n?n.hasPortal||n.owningSystemUrl&&this._isPortalDomain(n.owningSystemUrl):this._isPortalDomain(e))&&(this._isIdProvider(i,e)||s&&(this._hasSameServerInstance(this._getServerInstanceRoot(s.restBaseUrl),e)||this._isIdProvider(s.restBaseUrl,e))||E$1(i,e,!0)))return !0}return !1}_canUsePortalSignInWorkflow(e){return this._doPortalSignIn(e)&&(window===window.top||this._hasPortalSession())}_checkProtocol(e,t,r,s){let i=!0;const n=s?t.adminTokenServiceUrl:t.tokenServiceUrl;if(0===n.trim().toLowerCase().indexOf("https:")&&0!==window.location.href.toLowerCase().indexOf("https:")&&A$1(n)&&(i=!!this._protocolFunc&&!!this._protocolFunc({resourceUrl:e,serverInfo:t}),!i)){r(new s$4("identity-manager:aborted","Aborted the Sign-In process to avoid sending password over insecure connection."));}return i}_enqueue(e,t,r,s,i,n){return s||(s=G()),s.resUrl_=e,s.sinfo_=t,s.options_=r,s.admin_=i,s.refresh_=n,this._busy?this._hasSameServerInstance(this._getServerInstanceRoot(e),this._busy.resUrl_)?(this._oAuthDfd&&this._oAuthDfd.oAuthWin_&&this._oAuthDfd.oAuthWin_.focus(),this._soReqs.push(s)):this._xoReqs.push(s):this._doSignIn(s),s.promise}_doSignIn(e){this._busy=e,this._rejectOnPersistedPageShow=!1;const t=t=>{const r=e.options_&&e.options_.resource,s=e.resUrl_,i=e.refresh_;let n=!1;-1===this.credentials.indexOf(t)&&(i&&-1!==this.credentials.indexOf(i)?(i.userId=t.userId,i.token=t.token,i.expires=t.expires,i.validity=t.validity,i.ssl=t.ssl,i.creationTime=t.creationTime,n=!0,t=i):this.credentials.push(t)),t.resources||(t.resources=[]),t.resources.push(r||s),t.scope=this._isServerRsrc(s)?"server":"portal",t.emitTokenChange();const o=this._soReqs,a={};this._soReqs=[],o.forEach((e=>{if(!this._isIdenticalService(s,e.resUrl_)){const r=this._getSuffix(e.resUrl_);a[r]||(a[r]=!0,t.resources.push(e.resUrl_));}})),e.resolve(t),o.forEach((e=>{this._hasSameServerInstance(this._getServerInstanceRoot(s),e.resUrl_)?e.resolve(t):this._soReqs.push(e);})),this._busy=e.resUrl_=e.sinfo_=e.refresh_=null,n||this.emit("credential-create",{credential:t}),this._soReqs.length?this._doSignIn(this._soReqs.shift()):this._xoReqs.length&&this._doSignIn(this._xoReqs.shift());},r=t=>{e.reject(t),this._busy=e.resUrl_=e.sinfo_=e.refresh_=null,this._soReqs.length?this._doSignIn(this._soReqs.shift()):this._xoReqs.length&&this._doSignIn(this._xoReqs.shift());},s=(s,i,n,o)=>{const a=e.sinfo_,h=!e.options_||!1!==e.options_.prompt,c=a.hasPortal&&this._findOAuthInfo(e.resUrl_);let d,u;if(this._canUsePortalSignInWorkflow(e.resUrl_)){const s=this._getEsriAuthCookie(),i=this._portalConfig;if(s){if(!a.webTierAuth){"web"===(s.auth_tier&&s.auth_tier.toLowerCase())&&(a.webTierAuth=!0);}return d=new L({userId:s.email,server:a.server,token:a.webTierAuth?null:s.token,expires:s.expires}),void(d.token?e._pendingDfd=this._exchangeToken(d.server,c?c.appId:"arcgisonline",d.token).then((e=>{d.token=e,t(d);})).catch((()=>{t(d);})):t(d))}if(h){let t="";const s=window.location.href;return t=this.signInPage?this.signInPage:i?i.baseUrl+i.signin:this._isIdProvider(s,e.resUrl_)?this._getOrigin(s)+"/home/signin.html":a.tokenServiceUrl.replace(this._rePortalTokenSvc,"")+"/home/signin.html",t=t.replace(/http:/i,"https:"),i&&!1===i.useSSL&&(t=t.replace(/https:/i,"http:")),void(0===s.toLowerCase().replace("https","http").indexOf(t.toLowerCase().replace("https","http"))?(u=new s$4("identity-manager:unexpected-error","Cannot redirect to Sign-In page from within Sign-In page. URL of the resource that triggered this workflow: "+e.resUrl_),r(u)):(this._rejectOnPersistedPageShow=!0,this._redirectFunc?this._redirectFunc({signInPage:t,returnUrlParamName:"returnUrl",returnUrl:s,resourceUrl:e.resUrl_,serverInfo:a}):window.location.href=t+"?returnUrl="+encodeURIComponent(s)))}u=new s$4("identity-manager:not-authenticated","User is not signed in."),r(u);}else if(s)t(new L({userId:s,server:a.server,token:n,expires:null!=o?Number(o):null,ssl:!!i}));else if(c){let s=c._oAuthCred;if(!s){const e=new t$1(c,window.localStorage),t=new t$1(c,window.sessionStorage);e.isValid()&&t.isValid()?e.expires>t.expires?(s=e,t.destroy()):(s=t,e.destroy()):s=e.isValid()?e:t,c._oAuthCred=s;}if(s.isValid())d=new L({userId:s.userId,server:a.server,token:s.token,expires:s.expires,ssl:s.ssl,_oAuthCred:s}),c.appId!==s.appId&&this._doPortalSignIn(e.resUrl_,!0)?e._pendingDfd=this._exchangeToken(d.server,c.appId,d.token).then((e=>{d.token=e,s.token=e,s.save(),t(d);})).catch((()=>{t(d);})):t(d);else if(this._oAuthHash&&this._oAuthHash.state.portalUrl===c.portalUrl){const e=this._oAuthHash;d=new L({userId:e.username,server:a.server,token:e.access_token,expires:Date.now()+1e3*Number(e.expires_in),ssl:"true"===e.ssl,oAuthState:e.state,_oAuthCred:s}),c.userId=d.userId,s.storage=e.persist?window.localStorage:window.sessionStorage,s.token=d.token,s.expires=d.expires,s.userId=d.userId,s.ssl=d.ssl,s.save(),this._oAuthHash=null,t(d);}else h?e._pendingDfd=this.oAuthSignIn(e.resUrl_,a,c,e.options_).then(t,r):(u=new s$4("identity-manager:not-authenticated","User is not signed in."),r(u));}else if(h){if(this._checkProtocol(e.resUrl_,a,r,e.admin_)){let s=e.options_;e.admin_&&(s=s||{},s.isAdmin=!0),e._pendingDfd=this.signIn(e.resUrl_,a,s).then(t,r);}}else u=new s$4("identity-manager:not-authenticated","User is not signed in."),r(u);},n=()=>{const s=e.sinfo_,i=s.owningSystemUrl,n=e.options_;let o,a,h,l;if(n&&(o=n.token,a=n.error,h=n.prompt),l=this._findCredential(i,{token:o,resource:e.resUrl_}),!l)for(const e of this.credentials)if(this._isIdProvider(i,e.server)){l=e;break}if(l){const i=this.findCredential(e.resUrl_,l.userId);if(i)t(i);else if(q(s,this._legacyFed)){const e=l.toJSON();e.server=s.server,e.resources=null,t(new L(e));}else {(e._pendingDfd=this.generateToken(this.findServerInfo(l.server),null,{serverUrl:e.resUrl_,token:l.token,signal:e.options_.signal,ssl:l.ssl})).then((r=>{t(new L({userId:l.userId,server:s.server,token:r.token,expires:null!=r.expires?Number(r.expires):null,ssl:!!r.ssl,isAdmin:e.admin_,validity:r.validity}));}),r);}}else {this._busy=null,o&&(e.options_.token=null);(e._pendingDfd=this.getCredential(i.replace(/\/?$/,"/sharing"),{resource:e.resUrl_,owningTenant:s.owningTenant,signal:e.options_.signal,token:o,error:a,prompt:h})).then((()=>{this._enqueue(e.resUrl_,e.sinfo_,e.options_,e,e.admin_);}),(e=>{r(e);}));}};this._errbackFunc=r;const o=e.sinfo_.owningSystemUrl,a=this._isServerRsrc(e.resUrl_),h=e.sinfo_._restInfoPms;h?h.promise.then((t=>{const r=e.sinfo_;if(r._restInfoPms){r.adminTokenServiceUrl=r._restInfoPms.adminUrl,r._restInfoPms=null,r.tokenServiceUrl=t$2("authInfo.tokenServicesUrl",t)||t$2("authInfo.tokenServiceUrl",t)||t$2("tokenServiceUrl",t),r.shortLivedTokenValidity=t$2("authInfo.shortLivedTokenValidity",t),r.currentVersion=t.currentVersion,r.owningTenant=t.owningTenant;const e=r.owningSystemUrl=t.owningSystemUrl;e&&this._portals.push(e);}a&&r.owningSystemUrl?n():s();}),(()=>{e.sinfo_._restInfoPms=null;const t=new s$4("identity-manager:server-identification-failed","Unknown resource - could not find token service endpoint.");r(t);})):a&&o?n():e.sinfo_._selfReq?e.sinfo_._selfReq.selfDfd.then((t=>{const r={};let s,i,n,o;return t&&(s=t.user&&t.user.username,r.username=s,r.allSSL=t.allSSL,i=t.supportsOAuth,n=t.currentVersion,"multitenant"===t.portalMode&&(o=t.customBaseUrl)),e.sinfo_.webTierAuth=!!s,s&&this.normalizeWebTierAuth?this.generateToken(e.sinfo_,null,{ssl:r.allSSL}).catch((()=>null)).then((e=>(r.portalToken=e&&e.token,r.tokenExpiration=e&&e.expires,r))):!s&&i&&parseFloat(n)>=4.4&&!this._canUsePortalSignInWorkflow(e.resUrl_)?this._generateOAuthInfo({portalUrl:e.sinfo_.server,customBaseUrl:o,owningTenant:e.sinfo_._selfReq.owningTenant}).catch((()=>null)).then((()=>r)):r})).catch((()=>null)).then((t=>{e.sinfo_._selfReq=null,t?s(t.username,t.allSSL,t.portalToken,t.tokenExpiration):s();})):s();}_generateOAuthInfo(e){let t,r,s=e.portalUrl;const i$1=e.customBaseUrl,n=e.owningTenant,o=!this.defaultOAuthInfo&&this._createDefaultOAuthInfo&&!this._hasTestedIfAppIsOnPortal;if(o){r=window.location.href;let e=r.indexOf("?");e>-1&&(r=r.slice(0,e)),e=r.search(/\/(apps|home)\//),r=e>-1?r.slice(0,e):null;}return o&&r?(this._hasTestedIfAppIsOnPortal=!0,t=L$1(r+"/sharing/rest",{query:{f:"json"}}).then((()=>{this.defaultOAuthInfo=new i({appId:"arcgisonline",popup:!0,popupCallbackUrl:r+"/home/oauth-callback.html"});}))):t=U$1(),t.then((()=>{if(this.defaultOAuthInfo)return s=s.replace(/^http:/i,"https:"),L$1(s+"/sharing/rest/oauth2/validateRedirectUri",{query:{accountId:n,client_id:this.defaultOAuthInfo.appId,redirect_uri:T(this.defaultOAuthInfo.popupCallbackUrl),f:"json"}}).then((e=>{if(e.data.valid){const t=this.defaultOAuthInfo.clone();e.data.urlKey&&i$1?t.portalUrl="https://"+e.data.urlKey.toLowerCase()+"."+i$1:t.portalUrl=s,this.oAuthInfos.push(t);}}))}))}_doOAuthSignIn(e,r,s){const i={portalUrl:s.portalUrl};!s.popup&&s.preserveUrlHash&&window.location.hash&&(i.hash=window.location.hash);const n={client_id:s.appId,response_type:"token",state:JSON.stringify(i),expiration:s.expiration,locale:s.locale,redirect_uri:s.popup?T(s.popupCallbackUrl):window.location.href.replace(/#.*$/,"")};s.forceLogin&&(n.force_login=!0),s.forceUserId&&s.userId&&(n.prepopulatedusername=s.userId);const o=s.portalUrl.replace(/^http:/i,"https:")+"/sharing/oauth2/authorize",a=o+"?"+C(n);if(s.popup){const e=window.open(a,"esriJSAPIOAuth",s.popupWindowFeatures);if(e)e.focus(),this._oAuthDfd.oAuthWin_=e,this._oAuthIntervalId=setInterval((()=>{if(e.closed){clearInterval(this._oAuthIntervalId),this._oAuthOnHashHandle.remove();const e=this._oAuthDfd;if(e){const t=new s$4("identity-manager:user-aborted","ABORTED");e.reject(t);}}}),500),this._oAuthOnHashHandle=r$1(e$3,"arcgis:auth:hash",(e=>{this.setOAuthResponseHash(e.detail);}));else {const e=new s$4("identity-manager:popup-blocked","ABORTED");this._oAuthDfd.reject(e);}}else this._rejectOnPersistedPageShow=!0,this._oAuthRedirectFunc?this._oAuthRedirectFunc({authorizeParams:n,authorizeUrl:o,resourceUrl:e,serverInfo:r,oAuthInfo:s}):window.location.href=a;}};E=e([i$2("esri.identity.IdentityManagerBase")],E);let L=class extends i$3.EventedAccessor{constructor(e){super(e),this._oAuthCred=null,this.tokenRefreshBuffer=2,e&&e._oAuthCred&&(this._oAuthCred=e._oAuthCred);}initialize(){this.resources=this.resources||[],null==this.creationTime&&(this.creationTime=Date.now());}refreshToken(){const e=s$3.findServerInfo(this.server),t=e&&e.owningSystemUrl,r=!!t&&"server"===this.scope,s=r&&q(e,s$3._legacyFed),i=e.webTierAuth,n=i&&s$3.normalizeWebTierAuth,o=D[this.server],a=o&&o[this.userId];let h,l,c=this.resources&&this.resources[0],d=r&&s$3.findServerInfo(t),u={username:this.userId,password:a};if((!i||n)&&(r&&!d&&s$3.serverInfos.some((e=>(s$3._isIdProvider(t,e.server)&&(d=e),!!d))),h=d&&s$3.findCredential(d.server,this.userId),!r||h)){if(!s){if(r)l={serverUrl:c,token:h&&h.token,ssl:h&&h.ssl};else if(n)u=null,l={ssl:this.ssl};else {if(!a){let t;return c&&(c=s$3._sanitizeUrl(c),this._enqueued=1,t=s$3._enqueue(c,e,null,null,this.isAdmin,this),t.then((()=>{this._enqueued=0,this.refreshServerTokens();})).catch((()=>{this._enqueued=0;}))),t}this.isAdmin&&(l={isAdmin:!0});}return s$3.generateToken(r?d:e,r?null:u,l).then((e=>{this.token=e.token,this.expires=null!=e.expires?Number(e.expires):null,this.creationTime=Date.now(),this.validity=e.validity,this.emitTokenChange(),this.refreshServerTokens();})).catch((()=>{}))}h.refreshToken();}}refreshServerTokens(){"portal"===this.scope&&s$3.credentials.forEach((e=>{const t=s$3.findServerInfo(e.server),r=t&&t.owningSystemUrl;e!==this&&e.userId===this.userId&&r&&"server"===e.scope&&(s$3._hasSameServerInstance(this.server,r)||s$3._isIdProvider(r,this.server))&&(q(t,s$3._legacyFed)?(e.token=this.token,e.expires=this.expires,e.creationTime=this.creationTime,e.validity=this.validity,e.emitTokenChange()):e.refreshToken());}));}emitTokenChange(e){clearTimeout(this._refreshTimer);const t=this.server&&s$3.findServerInfo(this.server),r=t&&t.owningSystemUrl,s=r&&s$3.findServerInfo(r);!1===e||r&&"portal"!==this.scope&&(!s||!s.webTierAuth||s$3.normalizeWebTierAuth)||null==this.expires&&null==this.validity||this._startRefreshTimer(),this.emit("token-change");}destroy(){this.userId=this.server=this.token=this.expires=this.validity=this.resources=this.creationTime=null,this._oAuthCred&&(this._oAuthCred.destroy(),this._oAuthCred=null);const e=s$3.credentials.indexOf(this);e>-1&&s$3.credentials.splice(e,1),this.emitTokenChange(),this.emit("destroy");}toJSON(){const e=p$3({userId:this.userId,server:this.server,token:this.token,expires:this.expires,validity:this.validity,ssl:this.ssl,isAdmin:this.isAdmin,creationTime:this.creationTime,scope:this.scope}),t=this.resources;return t&&t.length>0&&(e.resources=t.slice()),e}_startRefreshTimer(){clearTimeout(this._refreshTimer);const e=6e4*this.tokenRefreshBuffer;let t=(this.validity?this.creationTime+6e4*this.validity:this.expires)-Date.now();t<0&&(t=0),this._refreshTimer=setTimeout(this.refreshToken.bind(this),t>e?t-e:t);}};e([y$1()],L.prototype,"creationTime",void 0),e([y$1()],L.prototype,"expires",void 0),e([y$1()],L.prototype,"isAdmin",void 0),e([y$1()],L.prototype,"oAuthState",void 0),e([y$1()],L.prototype,"resources",void 0),e([y$1()],L.prototype,"scope",void 0),e([y$1()],L.prototype,"server",void 0),e([y$1()],L.prototype,"ssl",void 0),e([y$1()],L.prototype,"token",void 0),e([y$1()],L.prototype,"tokenRefreshBuffer",void 0),e([y$1()],L.prototype,"userId",void 0),e([y$1()],L.prototype,"validity",void 0),L=e([i$2("esri.identity.Credential")],L);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let o=class extends E{};o=e([i$2("esri.identity.IdentityManager")],o);const a$1=new o;n(a$1);

export default a$1;
