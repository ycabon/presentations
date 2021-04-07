import { createProjector, VNode } from "maquette";
export { jsx } from "maquette-jsx";

export const projector = createProjector();

export function startRendering(el: Element, renderFunction: () => VNode) {
  projector.append(el, renderFunction);
}

export function scheduleRender() {
  projector.scheduleRender();
}