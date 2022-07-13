/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.83
 */
function getElementDir(el) {
  const prop = "dir";
  const selector = `[${prop}]`;
  const closest = closestElementCrossShadowBoundary(el, selector);
  return closest ? closest.getAttribute(prop) : "ltr";
}
function getRootNode(el) {
  return el.getRootNode();
}
function getHost(root) {
  return root.host || null;
}
/**
 * This helper queries an element's rootNode and any ancestor rootNodes.
 *
 * If both an 'id' and 'selector' are supplied, 'id' will take precedence over 'selector'.
 *
 * @param element
 * @param root0
 * @param root0.selector
 * @param root0.id
 * @returns {Element} The element.
 */
function queryElementRoots(element, { selector, id }) {
  // Gets the rootNode and any ancestor rootNodes (shadowRoot or document) of an element and queries them for a selector.
  // Based on: https://stackoverflow.com/q/54520554/194216
  function queryFrom(el) {
    if (!el) {
      return null;
    }
    if (el.assignedSlot) {
      el = el.assignedSlot;
    }
    const rootNode = getRootNode(el);
    const found = id
      ? "getElementById" in rootNode
        ? /*
          Check to make sure 'getElementById' exists in cases where element is no longer connected to the DOM and getRootNode() returns the element.
          https://github.com/Esri/calcite-components/pull/4280
           */
          rootNode.getElementById(id)
        : null
      : selector
        ? rootNode.querySelector(selector)
        : null;
    const host = getHost(rootNode);
    return found ? found : host ? queryFrom(host) : null;
  }
  return queryFrom(element);
}
function closestElementCrossShadowBoundary(element, selector) {
  // based on https://stackoverflow.com/q/54520554/194216
  function closestFrom(el) {
    return el ? el.closest(selector) || closestFrom(getHost(getRootNode(el))) : null;
  }
  return closestFrom(element);
}
const defaultSlotSelector = ":not([slot])";
function getSlotted(element, slotName, options) {
  if (slotName && !Array.isArray(slotName) && typeof slotName !== "string") {
    options = slotName;
    slotName = null;
  }
  const slotSelector = slotName
    ? Array.isArray(slotName)
      ? slotName.map((name) => `[slot="${name}"]`).join(",")
      : `[slot="${slotName}"]`
    : defaultSlotSelector;
  if (options === null || options === void 0 ? void 0 : options.all) {
    return queryMultiple(element, slotSelector, options);
  }
  return querySingle(element, slotSelector, options);
}
function getDirectChildren(el, selector) {
  return el ? Array.from(el.children || []).filter((child) => child === null || child === void 0 ? void 0 : child.matches(selector)) : [];
}
function queryMultiple(element, slotSelector, options) {
  let matches = slotSelector === defaultSlotSelector
    ? getDirectChildren(element, defaultSlotSelector)
    : Array.from(element.querySelectorAll(slotSelector));
  matches = options && options.direct === false ? matches : matches.filter((el) => el.parentElement === element);
  matches = (options === null || options === void 0 ? void 0 : options.matches) ? matches.filter((el) => el === null || el === void 0 ? void 0 : el.matches(options.matches)) : matches;
  const selector = options === null || options === void 0 ? void 0 : options.selector;
  return selector
    ? matches
      .map((item) => Array.from(item.querySelectorAll(selector)))
      .reduce((previousValue, currentValue) => [...previousValue, ...currentValue], [])
      .filter((match) => !!match)
    : matches;
}
function querySingle(element, slotSelector, options) {
  let match = slotSelector === defaultSlotSelector
    ? getDirectChildren(element, defaultSlotSelector)[0] || null
    : element.querySelector(slotSelector);
  match = options && options.direct === false ? match : (match === null || match === void 0 ? void 0 : match.parentElement) === element ? match : null;
  match = (options === null || options === void 0 ? void 0 : options.matches) ? ((match === null || match === void 0 ? void 0 : match.matches(options.matches)) ? match : null) : match;
  const selector = options === null || options === void 0 ? void 0 : options.selector;
  return selector ? match === null || match === void 0 ? void 0 : match.querySelector(selector) : match;
}
// set a default icon from a defined set or allow an override with an icon name string
function setRequestedIcon(iconObject, iconValue, matchedValue) {
  if (typeof iconValue === "string" && iconValue !== "") {
    return iconValue;
  }
  else if (iconValue === "") {
    return iconObject[matchedValue];
  }
}
/**
 * This helper makes sure that boolean aria attributes are properly converted to a string.
 *
 * It should only be used for aria attributes that require a string value of "true" or "false".
 *
 * @param value
 * @returns {string} The string conversion of a boolean value ("true" | "false").
 */
function toAriaBoolean(value) {
  return (!!value).toString();
}

export { getSlotted as a, getElementDir as g, queryElementRoots as q, setRequestedIcon as s, toAriaBoolean as t };
