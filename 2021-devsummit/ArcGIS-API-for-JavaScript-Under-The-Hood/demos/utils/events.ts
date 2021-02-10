import { ProjectionOptions, VNode } from "maquette"

export function afterCreateEventHandler(type: string, listener: EventListenerOrEventListenerObject) {
  return (el: Element, projectionOptions: ProjectionOptions, vnodeSelector: VNode["vnodeSelector"], properties: VNode["properties"], children: VNode["children"]) => {
    el.addEventListener(type, listener);

    const afterRemoved = properties?.afterRemoved;
    
    if (properties) {
      properties.afterRemoved = () => {
        afterRemoved?.(el);
        el.removeEventListener(type ,listener);
      }
    }
  }
}
