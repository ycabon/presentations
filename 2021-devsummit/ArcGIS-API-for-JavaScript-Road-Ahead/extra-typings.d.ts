declare module "@arcgis/core/layers/WFSLayer" {
  import { WFSGetCapabilities } from "@arcgis/core/layers/ogc/wfsUtils";

  interface WFSLayer extends __esri.Layer, __esri.BlendLayer, __esri.ScaleRangeLayer {
    url: string;
    getCapabilities?: WFSGetCapabilities
    typeName?: string;
  }

  interface WFSLayerConstructor {
    /**
     * The WMSLayer is used to create layers based on OGC Web Map Services (WMS).
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html)
     */
    new(properties?: WFSLayerProperties): WFSLayer;
  }

  interface WFSLayerProperties extends __esri.LayerProperties, __esri.ScaleRangeLayerProperties {
    url?: string;
    getCapabilities?: WFSGetCapabilities
    typeName?: string;
  }

  const WFSLayer: WFSLayerConstructor;
  export default WFSLayer;
}

declare module "@arcgis/core/layers/ogc/wfsUtils" {
  export interface WFSGetCapabilities {
    featureTypes(): IterableIterator<WFSFeatureType>;
  }

  export interface WFSFeatureType {
    typeName: string;
    title: string;
    description: string;
    extent: __esri.Extent;
  }

  export function getCapabilities(url: string): Promise<WFSGetCapabilities>;
}