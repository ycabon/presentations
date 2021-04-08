import { j as e, y, cP as e$1, k as i$2, cQ as L, cR as o, cS as s$4, cT as p$3, cg as n, cU as e$2, c9 as a$1, E as n$1, cJ as s$5, cV as p$4, cW as $, cO as e$3, c5 as U, aU as a$2, aZ as z, q as j$1, s as s$6, x as b$1, cX as E, U as U$1, cY as b$2, M as r$1, A as t$1, cH as z$1, cZ as A, ce as t$2, c_ as T, cm as C$1, c$ as n$2 } from './_virtual_index-634cbc09.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const l$1={base:"esri-identity-form",group:"esri-identity-form__group",label:"esri-identity-form__label",footer:"esri-identity-form__footer",esriInput:"esri-input",esriButton:"esri-button",esriButtonSecondary:"esri-button--secondary"},p$2="ArcGIS Online";let a=class extends L{constructor(s,e){super(s,e),this._usernameInputNode=null,this._passwordInputNode=null,this.messages=null,this.signingIn=!1,this.server=null,this.resource=null,this.error=null,this.oAuthPrompt=!1;}render(){const{error:s,server:e,resource:t,signingIn:i,oAuthPrompt:u,messages:a}=this,d=o("div",{class:l$1.group},s$4(u?a.oAuthInfo:a.info,{server:/\.arcgis\.com/i.test(e)?p$2:e,resource:`(${t||a.lblItem})`})),c=u?null:o("div",{class:l$1.group},o("label",{class:l$1.label},a.lblUser,o("input",{value:"",required:!0,autocomplete:"off",spellcheck:!1,type:"text",bind:this,afterCreate:p$3,"data-node-ref":"_usernameInputNode",class:l$1.esriInput}))),m=u?null:o("div",{class:l$1.group},o("label",{class:l$1.label},a.lblPwd,o("input",{value:"",required:!0,type:"password",bind:this,afterCreate:p$3,"data-node-ref":"_passwordInputNode",class:l$1.esriInput}))),h=o("div",{class:this.classes(l$1.group,l$1.footer)},o("input",{type:"submit",disabled:!!i,value:i?a.lblSigning:a.lblOk,class:l$1.esriButton}),o("input",{type:"button",value:a.lblCancel,bind:this,onclick:this._cancel,class:this.classes(l$1.esriButton,l$1.esriButtonSecondary)})),b=s?o("div",null,s.details&&s.details.httpStatus?a.invalidUser:a.noAuthService):null;return o("form",{class:l$1.base,bind:this,onsubmit:this._submit},d,b,c,m,h)}_cancel(){this._set("signingIn",!1),this._usernameInputNode&&(this._usernameInputNode.value=""),this._passwordInputNode&&(this._passwordInputNode.value=""),this.emit("cancel");}_submit(s){s.preventDefault(),this._set("signingIn",!0);const e=this.oAuthPrompt?{}:{username:this._usernameInputNode&&this._usernameInputNode.value,password:this._passwordInputNode&&this._passwordInputNode.value};this.emit("submit",e);}};e([y(),e$1("esri/identity/t9n/identity")],a.prototype,"messages",void 0),e([y()],a.prototype,"signingIn",void 0),e([y()],a.prototype,"server",void 0),e([y()],a.prototype,"resource",void 0),e([y()],a.prototype,"error",void 0),e([y()],a.prototype,"oAuthPrompt",void 0),a=e([i$2("esri.identity.IdentityForm")],a);var d$1=a;

/*!
* tabbable 5.1.6
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
* focus-trap 6.3.0
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
/**
 * Get an option's value when it could be a plain value, or a handler that provides
 *  the value.
 * @param {*} value Option's value to check.
 * @param {...*} [params] Any parameters to pass to the handler, if `value` is a function.
 * @returns {*} The `value`, or the handler's returned value.
 */


var valueOrHandler = function valueOrHandler(value) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }

  return typeof value === 'function' ? value.apply(void 0, params) : value;
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
    // @type {Array<{ container: HTMLElement, firstTabbableNode: HTMLElement|null, lastTabbableNode: HTMLElement|null }>}
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
          container: container,
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

    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
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


    if (valueOrHandler(config.allowOutsideClick, e)) {
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
      // make sure the target is actually contained in a group
      var containerIndex = findIndex(state.tabbableGroups, function (_ref) {
        var container = _ref.container;
        return container.contains(e.target);
      });

      if (containerIndex < 0) {
        // target not found in any group: quite possible focus has escaped the trap,
        //  so bring it back in to...
        if (e.shiftKey) {
          // ...the last node in the last group
          destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
        } else {
          // ...the first node in the first group
          destinationNode = state.tabbableGroups[0].firstTabbableNode;
        }
      } else if (e.shiftKey) {
        // REVERSE
        var startOfGroupIndex = findIndex(state.tabbableGroups, function (_ref2) {
          var firstTabbableNode = _ref2.firstTabbableNode;
          return e.target === firstTabbableNode;
        });

        if (startOfGroupIndex >= 0) {
          var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
          var destinationGroup = state.tabbableGroups[destinationGroupIndex];
          destinationNode = destinationGroup.lastTabbableNode;
        }
      } else {
        // FORWARD
        var lastOfGroupIndex = findIndex(state.tabbableGroups, function (_ref3) {
          var lastTabbableNode = _ref3.lastTabbableNode;
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
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      return;
    }

    if (containersContain(e.target)) {
      return;
    }

    if (valueOrHandler(config.allowOutsideClick, e)) {
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
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const l={base:"esri-identity-modal",open:"esri-identity-modal--open",closed:"esri-identity-modal--closed",title:"esri-identity-modal__title",dialog:"esri-identity-modal__dialog",content:"esri-identity-modal__content",closeButton:"esri-identity-modal__close-button",iconClose:"esri-icon-close"};let d=class extends L{constructor(t,e){super(t,e),this.container=document.createElement("div"),this.content=null,this.open=!1,this._close=()=>{this.open=!1;},document.body.appendChild(this.container),this.own(this.watch("open",(()=>this._toggleFocusTrap())));}destroy(){this._destroyFocusTrap();}render(){const t=this.id,{open:e,content:o$1,title:s,messages:i}=this,n=e&&!!o$1,a={[l.open]:n,[l.closed]:!n},c=o("button",{class:l.closeButton,"aria-label":i.close,title:i.close,bind:this,onclick:this._close},o("span",{"aria-hidden":"true",class:l.iconClose})),d=`${t}_title`,p=`${t}_content`,u=s?o("h1",{id:d,class:l.title},s):null,m=n?o("div",{bind:this,class:l.dialog,role:"dialog","aria-labelledby":d,"aria-describedby":p,afterCreate:this._createFocusTrap},c,u,this._renderContent(p)):null;return o("div",{tabIndex:-1,class:this.classes(l.base,a)},m)}_destroyFocusTrap(){var t;null==(t=this._focusTrap)||t.deactivate({onDeactivate:null}),this._focusTrap=null;}_toggleFocusTrap(){const{_focusTrap:t,open:e}=this;t&&(e?t.activate():t.deactivate());}_createFocusTrap(t){this._destroyFocusTrap();const o=requestAnimationFrame((()=>{this._focusTrap=createFocusTrap(t,{initialFocus:"input",onDeactivate:this._close}),this._toggleFocusTrap();}));this.own(n((()=>cancelAnimationFrame(o))));}_renderContent(t){const e=this.content;return "string"==typeof e?o("div",{class:l.content,id:t,innerHTML:e}):e$2(e)?o("div",{class:l.content,id:t},e.render()):e instanceof HTMLElement?o("div",{class:l.content,id:t,bind:e,afterCreate:this._attachToNode}):null}_attachToNode(t){const e=this;t.appendChild(e);}};e([y({readOnly:!0})],d.prototype,"container",void 0),e([y()],d.prototype,"content",void 0),e([y()],d.prototype,"open",void 0),e([y(),e$1("esri/t9n/common")],d.prototype,"messages",void 0),e([y({aliasOf:"messages.auth.signIn"})],d.prototype,"title",void 0),d=e([i$2("esri.identity.IdentityModal")],d);var p$1=d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const t="esriJSAPIOAuth";class s$3{constructor(t,s){this.oAuthInfo=null,this.storage=null,this.appId=null,this.expires=null,this.ssl=null,this.token=null,this.userId=null,this.oAuthInfo=t,this.storage=s,this._init();}isValid(){let t=!1;if(this.oAuthInfo&&this.token&&this.userId){const s=Date.now();if(this.expires>s){(this.expires-s)/1e3>60*this.oAuthInfo.minTimeUntilExpiration&&(t=!0);}}return t}save(){if(!this.storage)return;const s=this._load(),e=this.oAuthInfo;if(e&&e.authNamespace&&e.portalUrl){let o=s[e.authNamespace];o||(o=s[e.authNamespace]={}),o[e.portalUrl]={appId:this.appId=e.appId,expires:this.expires,ssl:this.ssl,token:this.token,userId:this.userId};try{this.storage.setItem(t,JSON.stringify(s));}catch(i){console.log(i);}}}destroy(){const s=this._load(),e=this.oAuthInfo;if(e&&e.appId&&e.portalUrl&&this.token&&this.expires>Date.now()){const t=e.portalUrl.replace(/^http:/i,"https:")+"/sharing/rest/oauth2/revokeToken",s=new FormData;if(s.append("f","json"),s.append("auth_token",this.token),s.append("client_id",e.appId),s.append("token_type_hint","access_token"),"function"==typeof navigator.sendBeacon)navigator.sendBeacon(t,s);else {const e=new XMLHttpRequest;e.open("POST",t),e.send(s);}}if(e&&e.authNamespace&&e.portalUrl&&this.storage){const o=s[e.authNamespace];if(o){delete o[e.portalUrl];try{this.storage.setItem(t,JSON.stringify(s));}catch(i){console.log(i);}}}e&&(e._oAuthCred=null,this.oAuthInfo=null);}_init(){const t=this._load(),s=this.oAuthInfo;if(s&&s.authNamespace&&s.portalUrl){let e=t[s.authNamespace];e&&(e=e[s.portalUrl],e&&(this.appId=e.appId,this.expires=e.expires,this.ssl=e.ssl,this.token=e.token,this.userId=e.userId));}}_load(){let s={};if(this.storage){const i=this.storage.getItem(t);if(i)try{s=JSON.parse(i);}catch(e){console.log(e);}}return s}}s$3.prototype.declaredClass="esri.identity.OAuthCredential";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var p;let s$2=p=class extends a$1{constructor(o){super(o),this._oAuthCred=null,this.appId=null,this.authNamespace="/",this.expiration=20160,this.forceLogin=!1,this.forceUserId=!1,this.locale=null,this.minTimeUntilExpiration=30,this.popup=!1,this.popupCallbackUrl="oauth-callback.html",this.popupWindowFeatures="height=490,width=800,resizable,scrollbars,status",this.portalUrl="https://www.arcgis.com",this.preserveUrlHash=!1,this.userId=null;}clone(){return p.fromJSON(this.toJSON())}};e([y({json:{write:!0}})],s$2.prototype,"appId",void 0),e([y({json:{write:!0}})],s$2.prototype,"authNamespace",void 0),e([y({json:{write:!0}})],s$2.prototype,"expiration",void 0),e([y({json:{write:!0}})],s$2.prototype,"forceLogin",void 0),e([y({json:{write:!0}})],s$2.prototype,"forceUserId",void 0),e([y({json:{write:!0}})],s$2.prototype,"locale",void 0),e([y({json:{write:!0}})],s$2.prototype,"minTimeUntilExpiration",void 0),e([y({json:{write:!0}})],s$2.prototype,"popup",void 0),e([y({json:{write:!0}})],s$2.prototype,"popupCallbackUrl",void 0),e([y({json:{write:!0}})],s$2.prototype,"popupWindowFeatures",void 0),e([y({json:{write:!0}})],s$2.prototype,"portalUrl",void 0),e([y({json:{write:!0}})],s$2.prototype,"preserveUrlHash",void 0),e([y({json:{write:!0}})],s$2.prototype,"userId",void 0),s$2=p=e([i$2("esri.identity.OAuthInfo")],s$2);var i$1=s$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let s$1=class extends a$1{constructor(r){super(r),this.adminTokenServiceUrl=null,this.currentVersion=null,this.hasPortal=null,this.hasServer=null,this.owningSystemUrl=null,this.owningTenant=null,this.server=null,this.shortLivedTokenValidity=null,this.tokenServiceUrl=null,this.webTierAuth=null;}};e([y({json:{write:!0}})],s$1.prototype,"adminTokenServiceUrl",void 0),e([y({json:{write:!0}})],s$1.prototype,"currentVersion",void 0),e([y({json:{write:!0}})],s$1.prototype,"hasPortal",void 0),e([y({json:{write:!0}})],s$1.prototype,"hasServer",void 0),e([y({json:{write:!0}})],s$1.prototype,"owningSystemUrl",void 0),e([y({json:{write:!0}})],s$1.prototype,"owningTenant",void 0),e([y({json:{write:!0}})],s$1.prototype,"server",void 0),e([y({json:{write:!0}})],s$1.prototype,"shortLivedTokenValidity",void 0),e([y({json:{write:!0}})],s$1.prototype,"tokenServiceUrl",void 0),e([y({json:{write:!0}})],s$1.prototype,"webTierAuth",void 0),s$1=e([i$2("esri.identity.ServerInfo")],s$1);var i=s$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const R={},b=e=>{const t=new $(e.owningSystemUrl).host,s=new $(e.server).host,r=/.+\.arcgis\.com$/i;return r.test(t)&&r.test(s)},C=(e,t)=>!!(b(e)&&t&&t.some((t=>t.test(e.server))));let P=null,D=null;try{P=window.localStorage,D=window.sessionStorage;}catch{}class j extends n$1{constructor(){super(),this._portalConfig=e$3.esriGeowConfig,this.serverInfos=[],this.oAuthInfos=[],this.credentials=[],this._soReqs=[],this._xoReqs=[],this._portals=[],this.defaultOAuthInfo=null,this.defaultTokenValidity=60,this.dialog=null,this.formConstructor=d$1,this.tokenValidity=null,this.normalizeWebTierAuth=!1,this._appUrlObj=U(window.location.href),this._busy=null,this._rejectOnPersistedPageShow=!1,this._oAuthHash=null,this._gwTokenUrl="/sharing/rest/generateToken",this._agsRest="/rest/services",this._agsPortal=/\/sharing(\/|$)/i,this._agsAdmin=/(https?:\/\/[^\/]+\/[^\/]+)\/admin\/?(\/.*)?$/i,this._adminSvcs=/\/rest\/admin\/services(\/|$)/i,this._gwDomains=[{regex:/^https?:\/\/www\.arcgis\.com/i,customBaseUrl:"maps.arcgis.com",tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:dev|[a-z\d-]+\.mapsdev)\.arcgis\.com/i,customBaseUrl:"mapsdev.arcgis.com",tokenServiceUrl:"https://dev.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:devext|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,customBaseUrl:"mapsdevext.arcgis.com",tokenServiceUrl:"https://devext.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:qaext|[a-z\d-]+\.mapsqa)\.arcgis\.com/i,customBaseUrl:"mapsqa.arcgis.com",tokenServiceUrl:"https://qaext.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/[a-z\d-]+\.maps\.arcgis\.com/i,customBaseUrl:"maps.arcgis.com",tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"}],this._legacyFed=[],this._regexSDirUrl=/http.+\/rest\/services\/?/gi,this._regexServerType=/(\/(FeatureServer|GPServer|GeoDataServer|GeocodeServer|GeoenrichmentServer|GeometryServer|GlobeServer|ImageServer|MapServer|MobileServer|NAServer|NetworkDiagramServer|ParcelFabricServer|RelationalCatalogServer|SceneServer|StreamServer|UtilityNetworkServer|ValidationServer|VectorTileServer|VersionManagementServer)).*/gi,this._gwUser=/http.+\/users\/([^\/]+)\/?.*/i,this._gwItem=/http.+\/items\/([^\/]+)\/?.*/i,this._gwGroup=/http.+\/groups\/([^\/]+)\/?.*/i,this._rePortalTokenSvc=/\/sharing(\/rest)?\/generatetoken/i,this._createDefaultOAuthInfo=!0,this._hasTestedIfAppIsOnPortal=!1,this._getOAuthHash(),window.addEventListener("pageshow",(e=>{this._pageShowHandler(e);}));}registerServers(e){const t=this.serverInfos;t?(e=e.filter((e=>!this.findServerInfo(e.server))),this.serverInfos=t.concat(e)):this.serverInfos=e,e.forEach((e=>{e.owningSystemUrl&&this._portals.push(e.owningSystemUrl),e.hasPortal&&this._portals.push(e.server);}));}registerOAuthInfos(e){const t=this.oAuthInfos;if(t){for(const s of e){const e=this.findOAuthInfo(s.portalUrl);e&&t.splice(t.indexOf(e),1);}this.oAuthInfos=t.concat(e);}else this.oAuthInfos=e;}registerToken(e){e={...e};const t=this._sanitizeUrl(e.server),s=this._isServerRsrc(t);let r,i$1=this.findServerInfo(t),o=!0;i$1||(i$1=new i,i$1.server=this._getServerInstanceRoot(t),s?i$1.hasServer=!0:(i$1.tokenServiceUrl=this._getTokenSvcUrl(t),i$1.hasPortal=!0),this.registerServers([i$1])),r=this._findCredential(t),r?(delete e.server,Object.assign(r,e),o=!1):(r=new q({userId:e.userId,server:i$1.server,token:e.token,expires:e.expires,ssl:e.ssl,scope:s?"server":"portal"}),r.resources=[t],this.credentials.push(r)),r.emitTokenChange(!1),o||r.refreshServerTokens();}toJSON(){return p$4({serverInfos:this.serverInfos.map((e=>e.toJSON())),oAuthInfos:this.oAuthInfos.map((e=>e.toJSON())),credentials:this.credentials.map((e=>e.toJSON()))})}initialize(e){if(!e)return;"string"==typeof e&&(e=JSON.parse(e));const t=e.serverInfos,s=e.oAuthInfos,r=e.credentials;if(t){const e=[];t.forEach((t=>{t.server&&t.tokenServiceUrl&&e.push(t.declaredClass?t:new i(t));})),e.length&&this.registerServers(e);}if(s){const e=[];s.forEach((t=>{t.appId&&e.push(t.declaredClass?t:new i$1(t));})),e.length&&this.registerOAuthInfos(e);}r&&r.forEach((e=>{e.server&&e.token&&e.expires&&e.expires>Date.now()&&((e=e.declaredClass?e:new q(e)).emitTokenChange(),this.credentials.push(e));}));}findServerInfo(e){let t;e=this._sanitizeUrl(e);for(const s of this.serverInfos)if(this._hasSameServerInstance(s.server,e)){t=s;break}return t}findOAuthInfo(e){let t;e=this._sanitizeUrl(e);for(const s of this.oAuthInfos)if(this._hasSameServerInstance(s.portalUrl,e)){t=s;break}return t}findCredential(e,t){let s;e=this._sanitizeUrl(e);const r=this._isServerRsrc(e)?"server":"portal";if(t){for(const i of this.credentials)if(this._hasSameServerInstance(i.server,e)&&t===i.userId&&i.scope===r){s=i;break}}else for(const i of this.credentials)if(this._hasSameServerInstance(i.server,e)&&-1!==this._getIdenticalSvcIdx(e,i)&&i.scope===r){s=i;break}return s}getCredential(e,t){let s,r,i$1=!0;t&&(s=!!t.token,r=t.error,i$1=!1!==t.prompt),t={...t},e=this._sanitizeUrl(e);const o=a$2(),n=z();if(t.signal&&j$1(t.signal,(()=>{o.abort();})),j$1(o,(()=>{n.reject(new s$6("identity-manager:user-aborted","ABORTED"));})),b$1(o))return n.promise;t.signal=o.signal;const h=this._isAdminResource(e),c=s?this.findCredential(e):null;let d;if(c&&r&&r.details&&498===r.details.httpStatus)c.destroy();else if(c)return d=new s$6("identity-manager:not-authorized","You are currently signed in as: '"+c.userId+"'. You do not have access to this resource: "+e,{error:r}),n.reject(d),n.promise;const u=this._findCredential(e,t);if(u)return n.resolve(u),n.promise;let p=this.findServerInfo(e);if(p)!p.hasServer&&this._isServerRsrc(e)&&(p._restInfoPms=this._getTokenSvcUrl(e),p.hasServer=!0);else {const t=this._getTokenSvcUrl(e);if(!t)return d=new s$6("identity-manager:unknown-resource","Unknown resource - could not find token service endpoint."),n.reject(d),n.promise;p=new i,p.server=this._getServerInstanceRoot(e),"string"==typeof t?(p.tokenServiceUrl=t,p.hasPortal=!0):(p._restInfoPms=t,p.hasServer=!0),this.registerServers([p]);}return p.hasPortal&&void 0===p._selfReq&&(i$1||E(p.tokenServiceUrl,window.location.origin)||this._gwDomains.some((e=>e.tokenServiceUrl===p.tokenServiceUrl)))&&(p._selfReq={owningTenant:t&&t.owningTenant,selfDfd:this._getPortalSelf(p.tokenServiceUrl.replace(this._rePortalTokenSvc,"/sharing/rest/portals/self"),e)}),this._enqueue(e,p,t,n,h)}getResourceName(e){return this._isRESTService(e)?e.replace(this._regexSDirUrl,"").replace(this._regexServerType,"")||"":this._gwUser.test(e)&&e.replace(this._gwUser,"$1")||this._gwItem.test(e)&&e.replace(this._gwItem,"$1")||this._gwGroup.test(e)&&e.replace(this._gwGroup,"$1")||""}generateToken(e,t,s){const r=this._rePortalTokenSvc.test(e.tokenServiceUrl),i=new $(window.location.href.toLowerCase()),o=e.shortLivedTokenValidity;let n,h,d,u,p,_,f,g;t&&(g=this.tokenValidity||o||this.defaultTokenValidity,g>o&&o>0&&(g=o)),s&&(n=s.isAdmin,h=s.serverUrl,d=s.token,_=s.signal,f=s.ssl,e.customParameters=s.customParameters),n?u=e.adminTokenServiceUrl:(u=e.tokenServiceUrl,p=new $(u.toLowerCase()),e.webTierAuth&&s&&s.serverUrl&&!f&&"http"===i.scheme&&(E(i.uri,u,!0)||"https"===p.scheme&&i.host===p.host&&"7080"===i.port&&"7443"===p.port)&&(u=u.replace(/^https:/i,"http:").replace(/:7443/i,":7080")));const m={query:{request:"getToken",username:null==t?void 0:t.username,password:null==t?void 0:t.password,serverUrl:h,token:d,expiration:g,referer:n||r?window.location.host:null,client:n?"referer":null,f:"json",...e.customParameters},method:"post",authMode:"anonymous",useProxy:this._useProxy(e,s),signal:_,...null==s?void 0:s.ioArgs};r||(m.withCredentials=!1);return U$1(u,m).then((s=>{const r=s.data;if(!r||!r.token)return new s$6("identity-manager:authentication-failed","Unable to generate token");const i=e.server;return R[i]||(R[i]={}),t&&(R[i][t.username]=t.password),r.validity=g,r}))}isBusy(){return !!this._busy}checkSignInStatus(e){return this.checkAppAccess(e,"").then((e=>e.credential))}checkAppAccess(e,t,s){let r=!1;return this.getCredential(e,{prompt:!1}).then((i=>{let o;const n={f:"json"};if("portal"===i.scope)if(t&&(this._doPortalSignIn(e)||s&&s.force))o=i.server+"/sharing/rest/oauth2/validateAppAccess",n.client_id=t;else {if(!i.token)return {credential:i};o=i.server+"/sharing/rest";}else {if(!i.token)return {credential:i};o=i.server+"/rest/services";}return i.token&&(n.token=i.token),U$1(o,{query:n,authMode:"anonymous"}).then((e=>{if(!1===e.data.valid)throw new s$6("identity-manager:not-authorized",`You are currently signed in as: '${i.userId}'.`,e.data);return r=!!e.data.viewOnlyUserTypeApp,{credential:i}})).catch((e=>{if("identity-manager:not-authorized"===e.name)throw e;const t=e.details&&e.details.httpStatus;if(498===t)throw i.destroy(),new s$6("identity-manager:not-authenticated","User is not signed in.");if(400===t)throw new s$6("identity-manager:invalid-request");return {credential:i}}))})).then((e=>({credential:e.credential,viewOnly:r})))}setOAuthResponseHash(e){var t;const s=this._oAuthDfd;if(this._oAuthDfd=null,!s||!e)return;clearInterval(this._oAuthIntervalId),null==(t=this._oAuthOnHashHandle)||t.remove(),"#"===e.charAt(0)&&(e=e.substring(1));const r=b$2(e);if(r.error){const e="access_denied"===r.error,t=new s$6(e?"identity-manager:user-aborted":"identity-manager:authentication-failed",e?"ABORTED":"OAuth: "+r.error+" - "+r.error_description);s.reject(t);}else {const e=s.sinfo_,t=s.oinfo_,i=t._oAuthCred,o=new q({userId:r.username,server:e.server,token:r.access_token,expires:Date.now()+1e3*Number(r.expires_in),ssl:"true"===r.ssl,_oAuthCred:i});t.userId=o.userId,i.storage=r.persist?P:D,i.token=o.token,i.expires=o.expires,i.userId=o.userId,i.ssl=o.ssl,i.save(),s.resolve(o);}}setOAuthRedirectionHandler(e){this._oAuthRedirectFunc=e;}setProtocolErrorHandler(e){this._protocolFunc=e;}signIn(e,t,s={}){const r=z(),i=()=>{var e,t,s,r,i;null==(e=h)||e.remove(),null==(t=l)||t.remove(),null==(s=c)||s.remove(),null==(r=n)||r.destroy(),null==(i=this.dialog)||i.destroy(),this.dialog=n=h=l=c=null;},o=()=>{i(),this._oAuthDfd=null,r.reject(new s$6("identity-manager:user-aborted","ABORTED"));};s.signal&&j$1(s.signal,(()=>{o();}));let n=new this.formConstructor;n.resource=this.getResourceName(e),n.server=t.server,this.dialog=new p$1,this.dialog.content=n,this.dialog.open=!0,this.emit("dialog-create");let h=n.on("cancel",o),l=this.dialog.watch("open",o),c=n.on("submit",(e=>{this.generateToken(t,e,{isAdmin:s.isAdmin,signal:s.signal}).then((o=>{i();const n=new q({userId:e.username,server:t.server,token:o.token,expires:null!=o.expires?Number(o.expires):null,ssl:!!o.ssl,isAdmin:s.isAdmin,validity:o.validity});r.resolve(n);})).catch((e=>{n.error=e,n.signingIn=!1;}));}));return r.promise}oAuthSignIn(e,t,s,r){this._oAuthDfd=z();const i=this._oAuthDfd;null!=r&&r.signal&&j$1(r.signal,(()=>{const e=this._oAuthDfd&&this._oAuthDfd.oAuthWin_;e&&!e.closed?e.close():this.dialog&&h();})),i.resUrl_=e,i.sinfo_=t,i.oinfo_=s;const o=!r||!1!==r.oAuthPopupConfirmation;if(!s.popup||!o)return this._doOAuthSignIn(e,t,s),i.promise;const n=new this.formConstructor;n.oAuthPrompt=!0,n.server=t.server,this.dialog=new p$1,this.dialog.content=n,this.dialog.open=!0,this.emit("dialog-create");const h=()=>{u(),this._oAuthDfd=null,i.reject(new s$6("identity-manager:user-aborted","ABORTED"));},l=n.on("cancel",h),c=this.dialog.watch("open",h),d=n.on("submit",(()=>{u(),this._doOAuthSignIn(e,t,s);})),u=()=>{l.remove(),c.remove(),d.remove(),n.destroy(),this.dialog.destroy(),this.dialog=null;};return i.promise}destroyCredentials(){if(this.credentials){this.credentials.slice().forEach((e=>{e.destroy();}));}this.emit("credentials-destroy");}enablePostMessageAuth(e="https://www.arcgis.com/sharing/rest"){this._postMessageAuthHandle&&this._postMessageAuthHandle.remove(),this._postMessageAuthHandle=r$1(window,"message",(t=>{var s;if((t.origin===window.location.origin||t.origin.endsWith(".arcgis.com"))&&"arcgis:auth:requestCredential"===(null==(s=t.data)?void 0:s.type)){const s=t.source;this.getCredential(e).then((e=>{s.postMessage({type:"arcgis:auth:credential",credential:{expires:e.expires,server:e.server,ssl:e.ssl,token:e.token,userId:e.userId}},t.origin);})).catch((e=>{s.postMessage({type:"arcgis:auth:error",error:{name:e.name,message:e.message}},t.origin);}));}}));}disablePostMessageAuth(){this._postMessageAuthHandle&&(this._postMessageAuthHandle.remove(),this._postMessageAuthHandle=null);}_getOAuthHash(){let e=window.location.hash;if(e){"#"===e.charAt(0)&&(e=e.substring(1));const t=b$2(e);let s=!1;if(t.access_token&&t.expires_in&&t.state&&t.hasOwnProperty("username"))try{t.state=JSON.parse(t.state),"object"==typeof t.state&&t.state.portalUrl&&(this._oAuthHash=t,s=!0);}catch{}else t.error&&t.error_description&&(console.log("IdentityManager OAuth Error: ",t.error," - ",t.error_description),"access_denied"===t.error&&(s=!0));s&&(window.location.hash="object"==typeof t.state&&t.state.hash||"");}}_pageShowHandler(e){if(e.persisted&&this.isBusy()&&this._rejectOnPersistedPageShow){const e=new s$6("identity-manager:user-aborted","ABORTED");this._errbackFunc(e);}}_findCredential(e,t){let s,r,i,o,n=-1;const a=t&&t.token,h=t&&t.resource,l=this._isServerRsrc(e)?"server":"portal",c=this.credentials.filter((t=>this._hasSameServerInstance(t.server,e)&&t.scope===l));if(e=h||e,c.length)if(1===c.length){if(s=c[0],o=this.findServerInfo(s.server),r=o&&o.owningSystemUrl,i=r&&this.findCredential(r,s.userId),n=this._getIdenticalSvcIdx(e,s),!a)return -1===n&&s.resources.push(e),this._addResource(e,i),s;-1!==n&&(s.resources.splice(n,1),this._removeResource(e,i));}else {let t,s;if(c.some((a=>(s=this._getIdenticalSvcIdx(e,a),-1!==s&&(t=a,o=this.findServerInfo(t.server),r=o&&o.owningSystemUrl,i=r&&this.findCredential(r,t.userId),n=s,!0)))),a)t&&(t.resources.splice(n,1),this._removeResource(e,i));else if(t)return this._addResource(e,i),t}}_findOAuthInfo(e){let t=this.findOAuthInfo(e);if(!t)for(const s of this.oAuthInfos)if(this._isIdProvider(s.portalUrl,e)){t=s;break}return t}_addResource(e,t){t&&-1===this._getIdenticalSvcIdx(e,t)&&t.resources.push(e);}_removeResource(e,t){let s=-1;t&&(s=this._getIdenticalSvcIdx(e,t),s>-1&&t.resources.splice(s,1));}_useProxy(e,t){return t&&t.isAdmin&&!E(e.adminTokenServiceUrl,window.location.href)||!this._isPortalDomain(e.tokenServiceUrl)&&"10.1"===String(e.currentVersion)&&!E(e.tokenServiceUrl,window.location.href)}_getOrigin(e){const t=new $(e);return t.scheme+"://"+t.host+(null!=t.port?":"+t.port:"")}_getServerInstanceRoot(e){const t=e.toLowerCase();let s=t.indexOf(this._agsRest);return -1===s&&this._isAdminResource(e)&&(s=this._agsAdmin.test(e)?e.replace(this._agsAdmin,"$1").length:e.search(this._adminSvcs)),-1===s&&(s=t.indexOf("/sharing")),-1===s&&"/"===t.substr(-1)&&(s=t.length-1),s>-1?e.substring(0,s):e}_hasSameServerInstance(e,t){return "/"===e.substr(-1)&&(e=e.slice(0,-1)),e=e.toLowerCase(),t=this._getServerInstanceRoot(t).toLowerCase(),e=this._normalizeAGOLorgDomain(e),t=this._normalizeAGOLorgDomain(t),(e=e.substr(e.indexOf(":")))===(t=t.substr(t.indexOf(":")))}_normalizeAGOLorgDomain(e){const t=/^https?:\/\/(?:cdn|[a-z\d-]+\.maps)\.arcgis\.com/i,s=/^https?:\/\/(?:cdndev|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,r=/^https?:\/\/(?:cdnqa|[a-z\d-]+\.mapsqa)\.arcgis\.com/i;return t.test(e)?e=e.replace(t,"https://www.arcgis.com"):s.test(e)?e=e.replace(s,"https://devext.arcgis.com"):r.test(e)&&(e=e.replace(r,"https://qaext.arcgis.com")),e}_sanitizeUrl(e){const t=(t$1.request.proxyUrl||"").toLowerCase(),s=t?e.toLowerCase().indexOf(t+"?"):-1;return -1!==s&&(e=e.substring(s+t.length+1)),e=z$1(e),U(e).path}_isRESTService(e){return e.indexOf(this._agsRest)>-1}_isAdminResource(e){return this._agsAdmin.test(e)||this._adminSvcs.test(e)}_isServerRsrc(e){return this._isRESTService(e)||this._isAdminResource(e)}_isIdenticalService(e,t){let s;if(this._isRESTService(e)&&this._isRESTService(t)){const r=this._getSuffix(e).toLowerCase(),i=this._getSuffix(t).toLowerCase();if(s=r===i,!s){const e=/(.*)\/(MapServer|FeatureServer).*/gi;s=r.replace(e,"$1")===i.replace(e,"$1");}}else this._isAdminResource(e)&&this._isAdminResource(t)?s=!0:this._isServerRsrc(e)||this._isServerRsrc(t)||!this._isPortalDomain(e)||(s=!0);return s}_isPortalDomain(e){const t=new $(e.toLowerCase()),s=this._portalConfig;let r=this._gwDomains.some((e=>e.regex.test(t.uri)));return !r&&s&&(r=this._hasSameServerInstance(this._getServerInstanceRoot(s.restBaseUrl),t.uri)),r||t$1.portalUrl&&(r=E(t,t$1.portalUrl,!0)),r||(r=this._portals.some((e=>this._hasSameServerInstance(e,t.uri)))),r=r||this._agsPortal.test(t.path),r}_isIdProvider(e,t){let s=-1,r=-1;this._gwDomains.forEach(((i,o)=>{-1===s&&i.regex.test(e)&&(s=o),-1===r&&i.regex.test(t)&&(r=o);}));let i=!1;if(s>-1&&r>-1&&(0===s||4===s?0!==r&&4!==r||(i=!0):1===s?1!==r&&2!==r||(i=!0):2===s?2===r&&(i=!0):3===s&&3===r&&(i=!0)),!i){const s=this.findServerInfo(t),r=s&&s.owningSystemUrl;r&&b(s)&&this._isPortalDomain(r)&&this._isIdProvider(e,r)&&(i=!0);}return i}_getIdenticalSvcIdx(e,t){let s=-1;for(let r=0;r<t.resources.length;r++){const i=t.resources[r];if(this._isIdenticalService(e,i)){s=r;break}}return s}_getSuffix(e){return e.replace(this._regexSDirUrl,"").replace(this._regexServerType,"$1")}_getTokenSvcUrl(e){let t,s,r;if(this._isRESTService(e)||this._isAdminResource(e)){const r=this._getServerInstanceRoot(e);return t=r+"/admin/generateToken",s=U$1(e=r+"/rest/info",{query:{f:"json"}}).then((e=>e.data)),{adminUrl:t,promise:s}}if(this._isPortalDomain(e)){let t="";if(this._gwDomains.some((s=>(s.regex.test(e)&&(t=s.tokenServiceUrl),!!t))),t||this._portals.some((s=>(this._hasSameServerInstance(s,e)&&(t=s+this._gwTokenUrl),!!t))),t||(r=e.toLowerCase().indexOf("/sharing"),-1!==r&&(t=e.substring(0,r)+this._gwTokenUrl)),t||(t=this._getOrigin(e)+this._gwTokenUrl),t){const s=new $(e).port;/^http:\/\//i.test(e)&&"7080"===s&&(t=t.replace(/:7080/i,":7443")),t=t.replace(/http:/i,"https:");}return t}if(-1!==e.toLowerCase().indexOf("premium.arcgisonline.com"))return "https://premium.arcgisonline.com/server/tokens"}_exchangeToken(e,t,s){return U$1(`${e}/sharing/rest/oauth2/exchangeToken`,{authMode:"anonymous",method:"post",query:{f:"json",client_id:t,token:s}}).then((e=>e.data.token))}_getPlatformSelf(e,t){return U$1(`${e}/sharing/rest/oauth2/platformSelf`,{authMode:"anonymous",headers:{"X-Esri-Auth-Client-Id":t,"X-Esri-Auth-Redirect-Uri":window.location.href.replace(/#.*$/,"")},method:"post",query:{f:"json"},withCredentials:!0}).then((e=>e.data))}_getPortalSelf(e,t){let s;if(this._gwDomains.some((t=>(t.regex.test(e)&&(s=t.customBaseUrl),!!s))),s)return Promise.resolve({allSSL:!0,currentVersion:"4.4",customBaseUrl:s,portalMode:"multitenant",supportsOAuth:!0});"https:"===window.location.protocol?e=e.replace(/^http:/i,"https:").replace(/:7080/i,":7443"):/^http:/i.test(t)&&(e=e.replace(/^https:/i,"http:").replace(/:7443/i,":7080"));return U$1(e,{query:{f:"json"},authMode:"anonymous",withCredentials:!0}).then((e=>e.data))}_doPortalSignIn(e){const t=this._portalConfig,s=window.location.href,r=this.findServerInfo(e);return !(!t&&!this._isPortalDomain(s)||!(r?r.hasPortal||r.owningSystemUrl&&this._isPortalDomain(r.owningSystemUrl):this._isPortalDomain(e))||!(this._isIdProvider(s,e)||t&&(this._hasSameServerInstance(this._getServerInstanceRoot(t.restBaseUrl),e)||this._isIdProvider(t.restBaseUrl,e))||E(s,e,!0)))}_checkProtocol(e,t,s,r){let i=!0;const o=r?t.adminTokenServiceUrl:t.tokenServiceUrl;if(0===o.trim().toLowerCase().indexOf("https:")&&0!==window.location.href.toLowerCase().indexOf("https:")&&A(o)&&(i=!!this._protocolFunc&&!!this._protocolFunc({resourceUrl:e,serverInfo:t}),!i)){s(new s$6("identity-manager:aborted","Aborted the Sign-In process to avoid sending password over insecure connection."));}return i}_enqueue(e,t,s,r,i,o){return r||(r=z()),r.resUrl_=e,r.sinfo_=t,r.options_=s,r.admin_=i,r.refresh_=o,this._busy?this._hasSameServerInstance(this._getServerInstanceRoot(e),this._busy.resUrl_)?(this._oAuthDfd&&this._oAuthDfd.oAuthWin_&&this._oAuthDfd.oAuthWin_.focus(),this._soReqs.push(r)):this._xoReqs.push(r):this._doSignIn(r),r.promise}_doSignIn(e){this._busy=e,this._rejectOnPersistedPageShow=!1;const t=t=>{const s=e.options_&&e.options_.resource,r=e.resUrl_,i=e.refresh_;let o=!1;-1===this.credentials.indexOf(t)&&(i&&-1!==this.credentials.indexOf(i)?(i.userId=t.userId,i.token=t.token,i.expires=t.expires,i.validity=t.validity,i.ssl=t.ssl,i.creationTime=t.creationTime,o=!0,t=i):this.credentials.push(t)),t.resources||(t.resources=[]),t.resources.push(s||r),t.scope=this._isServerRsrc(r)?"server":"portal",t.emitTokenChange();const n=this._soReqs,a={};this._soReqs=[],n.forEach((e=>{if(!this._isIdenticalService(r,e.resUrl_)){const s=this._getSuffix(e.resUrl_);a[s]||(a[s]=!0,t.resources.push(e.resUrl_));}})),e.resolve(t),n.forEach((e=>{this._hasSameServerInstance(this._getServerInstanceRoot(r),e.resUrl_)?e.resolve(t):this._soReqs.push(e);})),this._busy=e.resUrl_=e.sinfo_=e.refresh_=null,o||this.emit("credential-create",{credential:t}),this._soReqs.length?this._doSignIn(this._soReqs.shift()):this._xoReqs.length&&this._doSignIn(this._xoReqs.shift());},s=t=>{e.reject(t),this._busy=e.resUrl_=e.sinfo_=e.refresh_=null,this._soReqs.length?this._doSignIn(this._soReqs.shift()):this._xoReqs.length&&this._doSignIn(this._xoReqs.shift());},i=(r,i,o,n)=>{var h,c;const d=e.sinfo_,u=!e.options_||!1!==e.options_.prompt,p=d.hasPortal&&this._findOAuthInfo(e.resUrl_);let _,f;if(r)t(new q({userId:r,server:d.server,token:o||null,expires:null!=n?Number(n):null,ssl:!!i}));else if(window!==window.parent&&null!=(h=this._appUrlObj.query)&&h["arcgis-auth-origin"]&&null!=(c=this._appUrlObj.query)&&c["arcgis-auth-portal"]&&this._hasSameServerInstance(this._getServerInstanceRoot(this._appUrlObj.query["arcgis-auth-portal"]),e.resUrl_)){var m;window.parent.postMessage({type:"arcgis:auth:requestCredential"},this._appUrlObj.query["arcgis-auth-origin"]);const r=r$1(window,"message",(e=>{e.source===window.parent&&e.data&&("arcgis:auth:credential"===e.data.type?(r.remove(),t(new q(e.data.credential))):"arcgis:auth:error"===e.data.type&&(r.remove(),s(s$6.fromJSON(e.data.error))));}));j$1(null==(m=e.options_)?void 0:m.signal,(()=>{r.remove();}));}else if(p){let r=p._oAuthCred;if(!r){const e=new s$3(p,P),t=new s$3(p,D);e.isValid()&&t.isValid()?e.expires>t.expires?(r=e,t.destroy()):(r=t,e.destroy()):r=e.isValid()?e:t,p._oAuthCred=r;}if(r.isValid())_=new q({userId:r.userId,server:d.server,token:r.token,expires:r.expires,ssl:r.ssl,_oAuthCred:r}),p.appId!==r.appId&&this._doPortalSignIn(e.resUrl_)?e._pendingDfd=this._exchangeToken(_.server,p.appId,_.token).then((e=>{_.token=e,r.token=e,r.save(),t(_);})).catch((()=>{t(_);})):t(_);else if(this._oAuthHash&&this._hasSameServerInstance(p.portalUrl,this._oAuthHash.state.portalUrl)){const e=this._oAuthHash;_=new q({userId:e.username,server:d.server,token:e.access_token,expires:Date.now()+1e3*Number(e.expires_in),ssl:"true"===e.ssl,oAuthState:e.state,_oAuthCred:r}),p.userId=_.userId,r.storage=e.persist?P:D,r.token=_.token,r.expires=_.expires,r.userId=_.userId,r.ssl=_.ssl,r.save(),this._oAuthHash=null,t(_);}else {const r=()=>{u?e._pendingDfd=this.oAuthSignIn(e.resUrl_,d,p,e.options_).then(t,s):(f=new s$6("identity-manager:not-authenticated","User is not signed in."),s(f));};this._doPortalSignIn(e.resUrl_)?e._pendingDfd=this._getPlatformSelf(d.server,p.appId).then((({portalUrl:e,token:s,username:i})=>{!e||E(e,window.location.origin,!0)?(_=new q({server:d.server,userId:i,token:s}),t(_)):r();})).catch(r):r();}}else if(u){if(this._checkProtocol(e.resUrl_,d,s,e.admin_)){let r=e.options_;e.admin_&&(r=r||{},r.isAdmin=!0),e._pendingDfd=this.signIn(e.resUrl_,d,r).then(t,s);}}else f=new s$6("identity-manager:not-authenticated","User is not signed in."),s(f);},o=()=>{const r=e.sinfo_,i=r.owningSystemUrl,o=e.options_;let n,a,h,l;if(o&&(n=o.token,a=o.error,h=o.prompt),l=this._findCredential(i,{token:n,resource:e.resUrl_}),!l)for(const e of this.credentials)if(this._isIdProvider(i,e.server)){l=e;break}if(l){const i=this.findCredential(e.resUrl_,l.userId);if(i)t(i);else if(C(r,this._legacyFed)){const e=l.toJSON();e.server=r.server,e.resources=null,t(new q(e));}else {(e._pendingDfd=this.generateToken(this.findServerInfo(l.server),null,{serverUrl:e.resUrl_,token:l.token,signal:e.options_.signal,ssl:l.ssl})).then((s=>{t(new q({userId:l.userId,server:r.server,token:s.token,expires:null!=s.expires?Number(s.expires):null,ssl:!!s.ssl,isAdmin:e.admin_,validity:s.validity}));}),s);}}else {this._busy=null,n&&(e.options_.token=null);(e._pendingDfd=this.getCredential(i.replace(/\/?$/,"/sharing"),{resource:e.resUrl_,owningTenant:r.owningTenant,signal:e.options_.signal,token:n,error:a,prompt:h})).then((()=>{this._enqueue(e.resUrl_,e.sinfo_,e.options_,e,e.admin_);}),(e=>{s(e);}));}};this._errbackFunc=s;const n=e.sinfo_.owningSystemUrl,h=this._isServerRsrc(e.resUrl_),c=e.sinfo_._restInfoPms;c?c.promise.then((t=>{const s=e.sinfo_;if(s._restInfoPms){s.adminTokenServiceUrl=s._restInfoPms.adminUrl,s._restInfoPms=null,s.tokenServiceUrl=t$2("authInfo.tokenServicesUrl",t)||t$2("authInfo.tokenServiceUrl",t)||t$2("tokenServiceUrl",t),s.shortLivedTokenValidity=t$2("authInfo.shortLivedTokenValidity",t),s.currentVersion=t.currentVersion,s.owningTenant=t.owningTenant;const e=s.owningSystemUrl=t.owningSystemUrl;e&&this._portals.push(e);}h&&s.owningSystemUrl?o():i();}),(()=>{e.sinfo_._restInfoPms=null;const t=new s$6("identity-manager:server-identification-failed","Unknown resource - could not find token service endpoint.");s(t);})):h&&n?o():e.sinfo_._selfReq?e.sinfo_._selfReq.selfDfd.then((t=>{const s={};let r,i,o,n;return t&&(r=t.user&&t.user.username,s.username=r,s.allSSL=t.allSSL,i=t.supportsOAuth,o=t.currentVersion,"multitenant"===t.portalMode&&(n=t.customBaseUrl)),e.sinfo_.webTierAuth=!!r,r&&this.normalizeWebTierAuth?this.generateToken(e.sinfo_,null,{ssl:s.allSSL}).catch((()=>null)).then((e=>(s.portalToken=e&&e.token,s.tokenExpiration=e&&e.expires,s))):!r&&i&&parseFloat(o)>=4.4&&!this._findOAuthInfo(e.resUrl_)?this._generateOAuthInfo({portalUrl:e.sinfo_.server,customBaseUrl:n,owningTenant:e.sinfo_._selfReq.owningTenant}).catch((()=>null)).then((()=>s)):s})).catch((()=>null)).then((t=>{e.sinfo_._selfReq=null,t?i(t.username,t.allSSL,t.portalToken,t.tokenExpiration):i();})):i();}_generateOAuthInfo(e){let t,s,r=e.portalUrl;const i=e.customBaseUrl,o=e.owningTenant,n=!this.defaultOAuthInfo&&this._createDefaultOAuthInfo&&!this._hasTestedIfAppIsOnPortal;if(n){s=window.location.href;let e=s.indexOf("?");e>-1&&(s=s.slice(0,e)),e=s.search(/\/(apps|home)\//),s=e>-1?s.slice(0,e):null;}return n&&s?(this._hasTestedIfAppIsOnPortal=!0,t=U$1(s+"/sharing/rest",{query:{f:"json"}}).then((()=>{this.defaultOAuthInfo=new i$1({appId:"arcgisonline",popupCallbackUrl:s+"/home/oauth-callback.html"});}))):t=Promise.resolve(),t.then((()=>{if(this.defaultOAuthInfo)return r=r.replace(/^http:/i,"https:"),U$1(r+"/sharing/rest/oauth2/validateRedirectUri",{query:{accountId:o,client_id:this.defaultOAuthInfo.appId,redirect_uri:T(this.defaultOAuthInfo.popupCallbackUrl),f:"json"}}).then((e=>{if(e.data.valid){const t=this.defaultOAuthInfo.clone();e.data.urlKey&&i?t.portalUrl="https://"+e.data.urlKey.toLowerCase()+"."+i:t.portalUrl=r,t.popup=window!==window.top||!(E(r,window.location.origin)||this._gwDomains.some((e=>e.regex.test(r)&&e.regex.test(window.location.origin)))),this.oAuthInfos.push(t);}}))}))}_doOAuthSignIn(e,s,r){const i={portalUrl:r.portalUrl};!r.popup&&r.preserveUrlHash&&window.location.hash&&(i.hash=window.location.hash);const o={client_id:r.appId,response_type:"token",state:JSON.stringify(i),expiration:r.expiration,locale:r.locale,redirect_uri:r.popup?T(r.popupCallbackUrl):window.location.href.replace(/#.*$/,"")};r.forceLogin&&(o.force_login=!0),r.forceUserId&&r.userId&&(o.prepopulatedusername=r.userId),!r.popup&&this._doPortalSignIn(e)&&(o.redirectToUserOrgUrl=!0);const n=r.portalUrl.replace(/^http:/i,"https:")+"/sharing/oauth2/authorize",h=n+"?"+C$1(o);if(r.popup){const e=window.open(h,"esriJSAPIOAuth",r.popupWindowFeatures);if(e)e.focus(),this._oAuthDfd.oAuthWin_=e,this._oAuthIntervalId=setInterval((()=>{if(e.closed){clearInterval(this._oAuthIntervalId),this._oAuthOnHashHandle.remove();const e=this._oAuthDfd;if(e){const t=new s$6("identity-manager:user-aborted","ABORTED");e.reject(t);}}}),500),this._oAuthOnHashHandle=r$1(e$3,"arcgis:auth:hash",(e=>{this.setOAuthResponseHash(e.detail);}));else {const e=new s$6("identity-manager:popup-blocked","ABORTED");this._oAuthDfd.reject(e);}}else this._rejectOnPersistedPageShow=!0,this._oAuthRedirectFunc?this._oAuthRedirectFunc({authorizeParams:o,authorizeUrl:n,resourceUrl:e,serverInfo:s,oAuthInfo:r}):window.location.href=h;}}j.prototype.declaredClass="esri.identity.IdentityManagerBase";let q=class extends n$1.EventedAccessor{constructor(e){super(e),this._oAuthCred=null,this.tokenRefreshBuffer=2,e&&e._oAuthCred&&(this._oAuthCred=e._oAuthCred);}initialize(){this.resources=this.resources||[],null==this.creationTime&&(this.creationTime=Date.now());}refreshToken(){const e=s$5.findServerInfo(this.server),t=e&&e.owningSystemUrl,s=!!t&&"server"===this.scope,r=s&&C(e,s$5._legacyFed),i=e.webTierAuth,o=i&&s$5.normalizeWebTierAuth,n=R[this.server],a=n&&n[this.userId];let h,l=this.resources&&this.resources[0],c=s&&s$5.findServerInfo(t),d={username:this.userId,password:a};if(i&&!o)return;s&&!c&&s$5.serverInfos.some((e=>(s$5._isIdProvider(t,e.server)&&(c=e),!!c)));const u=c&&s$5.findCredential(c.server,this.userId);if(!s||u){if(!r){if(s)h={serverUrl:l,token:u&&u.token,ssl:u&&u.ssl};else if(o)d=null,h={ssl:this.ssl};else {if(!a){let t;return l&&(l=s$5._sanitizeUrl(l),this._enqueued=1,t=s$5._enqueue(l,e,null,null,this.isAdmin,this),t.then((()=>{this._enqueued=0,this.refreshServerTokens();})).catch((()=>{this._enqueued=0;}))),t}this.isAdmin&&(h={isAdmin:!0});}return s$5.generateToken(s?c:e,s?null:d,h).then((e=>{this.token=e.token,this.expires=null!=e.expires?Number(e.expires):null,this.creationTime=Date.now(),this.validity=e.validity,this.emitTokenChange(),this.refreshServerTokens();})).catch((()=>{}))}u.refreshToken();}}refreshServerTokens(){"portal"===this.scope&&s$5.credentials.forEach((e=>{const t=s$5.findServerInfo(e.server),s=t&&t.owningSystemUrl;e!==this&&e.userId===this.userId&&s&&"server"===e.scope&&(s$5._hasSameServerInstance(this.server,s)||s$5._isIdProvider(s,this.server))&&(C(t,s$5._legacyFed)?(e.token=this.token,e.expires=this.expires,e.creationTime=this.creationTime,e.validity=this.validity,e.emitTokenChange()):e.refreshToken());}));}emitTokenChange(e){clearTimeout(this._refreshTimer);const t=this.server&&s$5.findServerInfo(this.server),s=t&&t.owningSystemUrl,r=s&&s$5.findServerInfo(s);!1===e||s&&"portal"!==this.scope&&(!r||!r.webTierAuth||s$5.normalizeWebTierAuth)||null==this.expires&&null==this.validity||this._startRefreshTimer(),this.emit("token-change");}destroy(){this.userId=this.server=this.token=this.expires=this.validity=this.resources=this.creationTime=null,this._oAuthCred&&(this._oAuthCred.destroy(),this._oAuthCred=null);const e=s$5.credentials.indexOf(this);e>-1&&s$5.credentials.splice(e,1),this.emitTokenChange(),this.emit("destroy");}toJSON(){const e=p$4({userId:this.userId,server:this.server,token:this.token,expires:this.expires,validity:this.validity,ssl:this.ssl,isAdmin:this.isAdmin,creationTime:this.creationTime,scope:this.scope}),t=this.resources;return t&&t.length>0&&(e.resources=t.slice()),e}_startRefreshTimer(){clearTimeout(this._refreshTimer);const e=6e4*this.tokenRefreshBuffer,t=2**31-1;let s=(this.validity?this.creationTime+6e4*this.validity:this.expires)-Date.now();s<0?s=0:s>t&&(s=t),this._refreshTimer=setTimeout(this.refreshToken.bind(this),s>e?s-e:s);}};e([y()],q.prototype,"creationTime",void 0),e([y()],q.prototype,"expires",void 0),e([y()],q.prototype,"isAdmin",void 0),e([y()],q.prototype,"oAuthState",void 0),e([y()],q.prototype,"resources",void 0),e([y()],q.prototype,"scope",void 0),e([y()],q.prototype,"server",void 0),e([y()],q.prototype,"ssl",void 0),e([y()],q.prototype,"token",void 0),e([y()],q.prototype,"tokenRefreshBuffer",void 0),e([y()],q.prototype,"userId",void 0),e([y()],q.prototype,"validity",void 0),q=e([i$2("esri.identity.Credential")],q);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class r extends j{}r.prototype.declaredClass="esri.identity.IdentityManager";const s=new r;n$2(s);

export default s;
