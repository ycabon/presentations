import { ProjectionOptions, VNode } from "maquette"

export function afterCreateEventHandler(type: string, listener: (event: Event, props: VNode["properties"]) => void) {
  return (el: Element, projectionOptions: ProjectionOptions, vnodeSelector: VNode["vnodeSelector"], properties: VNode["properties"], children: VNode["children"]) => {
    let props = properties;
    const wrapped = (event: Event) => listener(event, properties);
    el.addEventListener(type, wrapped);

    const afterRemoved = properties?.afterRemoved;

    if (properties) {
      properties.afterUpdate = (_1, _2, _3, properties) => props = properties;
      properties.afterRemoved = () => {
        afterRemoved?.(el);
        el.removeEventListener(type, wrapped);
      }
    }
  }
}
