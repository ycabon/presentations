import Geometry from "esri/geometry/Geometry";
import SpatialReference from "esri/geometry/SpatialReference";
import Graphic from "esri/Graphic";
import FeatureLayer from "esri/layers/FeatureLayer";
import { QuantizationParameters } from "../interfaces";

export async function getFeatures(
  outFeatures: Graphic[],
  featureLayer: FeatureLayer,
  geometry: Geometry,
  quantizationParams: QuantizationParameters,
  abortOptions: { signal: AbortSignal },
  page = 0
  ): Promise<Graphic[]> {

  await featureLayer.when();
  
  // create a query object
  // tslint:disable-next-line: no-string-literal
  const supportPagination = featureLayer.capabilities.queryRelated.supportsPagination;
  if (!supportPagination) {
    console.error(`This Feature service does not support pagination!`);
    return null;
  }

  const maxRecordCount = featureLayer.capabilities.query.maxRecordCount;
  const pageSize = maxRecordCount;

  const query = featureLayer.createQuery();
  query.where = "1=1";
  query.geometry = geometry;
  query.returnExceededLimitFeatures = true;
  query.num = pageSize;
  query.start = page * pageSize;
  query.outSpatialReference = SpatialReference.WebMercator;
  query.quantizationParameters = quantizationParams;
  
  const featureSet = await featureLayer.queryFeatures(query);
  outFeatures.push(...featureSet.features);

  if (featureSet.exceededTransferLimit) {
    return getFeatures(outFeatures, featureLayer, geometry, quantizationParams, abortOptions, page + 1);
  }

  return outFeatures;
}
