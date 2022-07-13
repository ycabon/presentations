import { oK as Build, oL as forceUpdate, d8 as proxyCustomElement, d9 as H, da as h, db as Host, oM as getAssetPath, oN as createEvent } from './_virtual_index-fc1e0009.js';
import { g as getElementDir, t as toAriaBoolean, s as setRequestedIcon, a as getSlotted } from './dom-acb49a3c.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.83
 */
var StatusIcons;
(function (StatusIcons) {
  StatusIcons["green"] = "checkCircle";
  StatusIcons["yellow"] = "exclamationMarkTriangle";
  StatusIcons["red"] = "exclamationMarkTriangle";
  StatusIcons["blue"] = "lightbulb";
})(StatusIcons || (StatusIcons = {}));

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.83
 */

/**
 * This utility ensures observers are created only for browser contexts.
 *
 * @param type - the type of observer to create
 * @param callback - the observer callback
 * @param options - the observer options
 */
function createObserver(type, callback, options) {
  const Observer = getObserver(type);
  return Build.isBrowser ? new Observer(callback, options) : undefined;
}
function getObserver(type) {
  return (type === "intersection"
    ? window.IntersectionObserver
    : type === "mutation"
      ? window.MutationObserver
      : window.ResizeObserver);
}

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.83
 */

const observed = new Set();
let mutationObserver;
const observerOptions = { childList: true };
/**
 * Helper to set up a conditional slot component on connectedCallback.
 *
 * @param component
 */
function connectConditionalSlotComponent(component) {
  if (!mutationObserver) {
    mutationObserver = createObserver("mutation", processMutations);
  }
  mutationObserver.observe(component.el, observerOptions);
}
/**
 * Helper to tear down a conditional slot component on disconnectedCallback.
 *
 * @param component
 */
function disconnectConditionalSlotComponent(component) {
  observed.delete(component.el);
  // we explicitly process queued mutations and disconnect and reconnect
  // the observer until MutationObserver gets an `unobserve` method
  // see https://github.com/whatwg/dom/issues/126
  processMutations(mutationObserver.takeRecords());
  mutationObserver.disconnect();
  for (const [element] of observed.entries()) {
    mutationObserver.observe(element, observerOptions);
  }
}
function processMutations(mutations) {
  mutations.forEach(({ target }) => {
    forceUpdate(target);
  });
}

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.83
 */

const CSS$1 = {
  icon: "icon",
  flipRtl: "flip-rtl"
};

/**
 * Icon data cache.
 * Exported for testing purposes.
 *
 * @private
 */
const iconCache = {};
/**
 * Icon request cache.
 * Exported for testing purposes.
 *
 * @private
 */
const requestCache = {};
const scaleToPx = {
  s: 16,
  m: 24,
  l: 32
};
async function fetchIcon({ icon, scale }) {
  const size = scaleToPx[scale];
  const name = normalizeIconName(icon);
  const filled = name.charAt(name.length - 1) === "F";
  const iconName = filled ? name.substring(0, name.length - 1) : name;
  const id = `${iconName}${size}${filled ? "F" : ""}`;
  if (iconCache[id]) {
    return iconCache[id];
  }
  if (!requestCache[id]) {
    requestCache[id] = fetch(getAssetPath(`./assets/icon/${id}.json`))
      .then((resp) => resp.json())
      .catch(() => {
      console.error(`"${id}" is not a valid calcite-ui-icon name`);
      return "";
    });
  }
  const path = await requestCache[id];
  iconCache[id] = path;
  return path;
}
/**
 * Normalize the icon name to match the path data module exports.
 * Exported for testing purposes.
 *
 * @param name
 * @private
 */
function normalizeIconName(name) {
  const numberLeadingName = !isNaN(Number(name.charAt(0)));
  const parts = name.split("-");
  if (parts.length === 1) {
    return numberLeadingName ? `i${name}` : name;
  }
  return parts
    .map((part, index) => {
    if (index === 0) {
      return numberLeadingName ? `i${part.toUpperCase()}` : part;
    }
    return part.charAt(0).toUpperCase() + part.slice(1);
  })
    .join("");
}

const iconCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){height:1rem;width:1rem;min-width:1rem;min-height:1rem}:host([scale=m]){height:1.5rem;width:1.5rem;min-width:1.5rem;min-height:1.5rem}:host([scale=l]){height:2rem;width:2rem;min-width:2rem;min-height:2rem}.flip-rtl{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.svg{display:block}";

const Icon = /*@__PURE__*/ proxyCustomElement(class extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /**
     * The name of the icon to display. The value of this property must match the icon name from https://esri.github.io/calcite-ui-icons/.
     */
    this.icon = null;
    /**
     * When true, the icon will be flipped when the element direction is 'rtl'.
     */
    this.flipRtl = false;
    /**
     * Icon scale.
     */
    this.scale = "m";
    this.visible = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.waitUntilVisible(() => {
      this.visible = true;
      this.loadIconPathData();
    });
  }
  disconnectedCallback() {
    var _a;
    (_a = this.intersectionObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    this.intersectionObserver = null;
  }
  async componentWillLoad() {
    this.loadIconPathData();
  }
  render() {
    const { el, flipRtl, pathData, scale, textLabel } = this;
    const dir = getElementDir(el);
    const size = scaleToPx[scale];
    const semantic = !!textLabel;
    const paths = [].concat(pathData || "");
    return (h(Host, { "aria-hidden": toAriaBoolean(!semantic), "aria-label": semantic ? textLabel : null, role: semantic ? "img" : null }, h("svg", { class: {
        [CSS$1.flipRtl]: dir === "rtl" && flipRtl,
        svg: true
      }, fill: "currentColor", height: "100%", viewBox: `0 0 ${size} ${size}`, width: "100%", xmlns: "http://www.w3.org/2000/svg" }, paths.map((path) => typeof path === "string" ? (h("path", { d: path })) : (h("path", { d: path.d, opacity: "opacity" in path ? path.opacity : 1 }))))));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  async loadIconPathData() {
    const { icon, scale, visible } = this;
    if (!Build.isBrowser || !icon || !visible) {
      return;
    }
    this.pathData = await fetchIcon({ icon, scale });
  }
  waitUntilVisible(callback) {
    this.intersectionObserver = createObserver("intersection", (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.intersectionObserver.disconnect();
          this.intersectionObserver = null;
          callback();
        }
      });
    }, { rootMargin: "50px" });
    if (!this.intersectionObserver) {
      callback();
      return;
    }
    this.intersectionObserver.observe(this.el);
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return this; }
  static get watchers() { return {
    "icon": ["loadIconPathData"],
    "scale": ["loadIconPathData"]
  }; }
  static get style() { return iconCss; }
}, [1, "calcite-icon", {
    "icon": [513],
    "flipRtl": [516, "flip-rtl"],
    "scale": [513],
    "textLabel": [1, "text-label"],
    "pathData": [32],
    "visible": [32]
  }]);
function defineCustomElement$2() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Icon);
      }
      break;
  } });
}
defineCustomElement$2();

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.83
 */

const TEXT = {
  close: "Close"
};
const SLOTS = {
  title: "title",
  message: "message",
  link: "link",
  actionsEnd: "actions-end"
};
const CSS = {
  actionsEnd: "actions-end",
  close: "notice-close",
  container: "container",
  content: "notice-content",
  icon: "notice-icon"
};

const noticeCss = "@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]){--calcite-notice-spacing-token-small:0.5rem;--calcite-notice-spacing-token-large:0.75rem}:host([scale=s]) .container slot[name=title]::slotted(*),:host([scale=s]) .container *::slotted([slot=title]){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) .container slot[name=message]::slotted(*),:host([scale=s]) .container *::slotted([slot=message]){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) ::slotted(calcite-link){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .notice-close{padding:0.5rem}:host([scale=m]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale=m]) .container slot[name=title]::slotted(*),:host([scale=m]) .container *::slotted([slot=title]){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) .container slot[name=message]::slotted(*),:host([scale=m]) .container *::slotted([slot=message]){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) ::slotted(calcite-link){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=l]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.25rem}:host([scale=l]) .container slot[name=title]::slotted(*),:host([scale=l]) .container *::slotted([slot=title]){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) .container slot[name=message]::slotted(*),:host([scale=l]) .container *::slotted([slot=message]){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) ::slotted(calcite-link){margin-top:0.125rem;margin-bottom:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([width=auto]){--calcite-notice-width:auto}:host([width=half]){--calcite-notice-width:50%}:host([width=full]){--calcite-notice-width:100%}:host{margin-left:auto;margin-right:auto;display:none;max-width:100%;-ms-flex-align:center;align-items:center;width:var(--calcite-notice-width)}.container{pointer-events:none;margin-top:0px;margin-bottom:0px;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;width:100%;background-color:var(--calcite-ui-foreground-1);opacity:0;-webkit-transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;max-height:0;text-align:start;-webkit-border-start:0px solid;border-inline-start:0px solid;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent}.notice-close{outline-color:transparent}.notice-close:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host{display:-ms-flexbox;display:flex}:host([active]) .container{pointer-events:auto;display:-ms-flexbox;display:flex;max-height:100%;-ms-flex-align:center;align-items:center;border-width:2px;opacity:1;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.container slot[name=title]::slotted(*),.container *::slotted([slot=title]){margin:0px;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container slot[name=message]::slotted(*),.container *::slotted([slot=message]){margin:0px;display:inline;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);-webkit-margin-end:var(--calcite-notice-spacing-token-small);margin-inline-end:var(--calcite-notice-spacing-token-small)}.notice-content{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;display:-ms-flexbox;display:flex;min-width:0px;-ms-flex-direction:column;flex-direction:column;overflow-wrap:break-word;-ms-flex:1 1 0px;flex:1 1 0;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:0 var(--calcite-notice-spacing-token-small)}.notice-content:first-of-type:not(:only-child){-webkit-padding-start:var(--calcite-notice-spacing-token-large);padding-inline-start:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large)}.notice-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto}.notice-close{display:-ms-flexbox;display:flex;cursor:pointer;-ms-flex-align:center;align-items:center;-ms-flex-item-align:stretch;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-ui-text-3);outline:2px solid transparent;outline-offset:2px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding:var(--calcite-notice-spacing-token-small) var(--calcite-notice-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-appearance:none}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.notice-close:active{background-color:var(--calcite-ui-foreground-3)}.actions-end{display:-ms-flexbox;display:flex;-ms-flex-item-align:stretch;align-self:stretch}:host([color=blue]) .container{border-color:var(--calcite-ui-brand)}:host([color=blue]) .container .notice-icon{color:var(--calcite-ui-brand)}:host([color=red]) .container{border-color:var(--calcite-ui-danger)}:host([color=red]) .container .notice-icon{color:var(--calcite-ui-danger)}:host([color=yellow]) .container{border-color:var(--calcite-ui-warning)}:host([color=yellow]) .container .notice-icon{color:var(--calcite-ui-warning)}:host([color=green]) .container{border-color:var(--calcite-ui-success)}:host([color=green]) .container .notice-icon{color:var(--calcite-ui-success)}";

const Notice = /*@__PURE__*/ proxyCustomElement(class extends H {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteNoticeClose = createEvent(this, "calciteNoticeClose", 7);
    this.calciteNoticeOpen = createEvent(this, "calciteNoticeOpen", 7);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //---------------------------------------------------------------------------
    /** When true, the `calcite-notice` is active. */
    this.active = false;
    /** The color for the `calcite-notice`. Color will apply to top border and icon. */
    this.color = "blue";
    /** Shows a button the user can click to dismiss the `calcite-notice`. */
    this.dismissible = false;
    /**
     * Accessible label for the close button.
     *
     * @default "Close"
     */
    this.intlClose = TEXT.close;
    /** Specify the scale of `calcite-notice`. */
    this.scale = "m";
    /** Specify the width of the `calcite-notice`. */
    this.width = "auto";
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.close = () => {
      this.active = false;
      this.calciteNoticeClose.emit();
    };
  }
  updateRequestedIcon() {
    this.requestedIcon = setRequestedIcon(StatusIcons, this.icon, this.color);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    connectConditionalSlotComponent(this);
  }
  disconnectedCallback() {
    disconnectConditionalSlotComponent(this);
  }
  componentWillLoad() {
    this.requestedIcon = setRequestedIcon(StatusIcons, this.icon, this.color);
  }
  render() {
    const { el } = this;
    const closeButton = (h("button", { "aria-label": this.intlClose, class: CSS.close, onClick: this.close, ref: (el) => (this.closeButton = el) }, h("calcite-icon", { icon: "x", scale: this.scale === "l" ? "m" : "s" })));
    const hasActionEnd = getSlotted(el, SLOTS.actionsEnd);
    return (h("div", { class: CSS.container }, this.requestedIcon ? (h("div", { class: CSS.icon }, h("calcite-icon", { icon: this.requestedIcon, scale: this.scale === "l" ? "m" : "s" }))) : null, h("div", { class: CSS.content }, h("slot", { name: SLOTS.title }), h("slot", { name: SLOTS.message }), h("slot", { name: SLOTS.link })), hasActionEnd ? (h("div", { class: CSS.actionsEnd }, h("slot", { name: SLOTS.actionsEnd }))) : null, this.dismissible ? closeButton : null));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the `calcite-notice`. */
  async setFocus() {
    const noticeLinkEl = this.el.querySelector("calcite-link");
    if (!this.closeButton && !noticeLinkEl) {
      return;
    }
    if (noticeLinkEl) {
      noticeLinkEl.setFocus();
    }
    else if (this.closeButton) {
      this.closeButton.focus();
    }
  }
  get el() { return this; }
  static get watchers() { return {
    "icon": ["updateRequestedIcon"],
    "color": ["updateRequestedIcon"]
  }; }
  static get style() { return noticeCss; }
}, [1, "calcite-notice", {
    "active": [1540],
    "color": [513],
    "dismissible": [516],
    "icon": [520],
    "intlClose": [1, "intl-close"],
    "scale": [513],
    "width": [513],
    "setFocus": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-notice", "calcite-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "calcite-notice":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Notice);
      }
      break;
    case "calcite-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}
defineCustomElement$1();

const CalciteNotice = Notice;
const defineCustomElement = defineCustomElement$1;

export { CalciteNotice, defineCustomElement };
