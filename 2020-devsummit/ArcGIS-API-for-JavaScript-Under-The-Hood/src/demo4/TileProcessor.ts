import * as promiseUtils from "esri/core/promiseUtils";
import Extent from "esri/geometry/Extent";
import Point from "esri/geometry/Point";
import SpatialReference from "esri/geometry/SpatialReference";
import Graphic from "esri/Graphic";
import QueryTask from "esri/tasks/QueryTask";
import Query from "esri/tasks/support/Query";
import { QuantizationParameters, TileData, TileInfo } from "../interfaces";

const DPI = 96;
const SYMBOL_SIZE = 20; // points

export default class TileProcessor {
  private _queryTask: QueryTask;
  private _pixelRatio: number;
  private _maxRecordCount: number;
  
  initialize(params: { url: string, pixelRatio: number, maxRecordCount: number }): Promise<{}>  {
    if (this._queryTask) {
      return promiseUtils.reject("initialize called twice!");
    }

    this._queryTask = new QueryTask({ url: params.url });
    this._pixelRatio = params.pixelRatio;
    this._maxRecordCount = params.maxRecordCount;

    return promiseUtils.resolve({});
  }

  async getTileData(tileInfo: TileInfo, options?: { signal: AbortSignal }): Promise<{
    result: TileData;
    transferList?: Transferable[];
  }> {
    const features = await getFeatures(
      [], 
      this._queryTask, 
      createQueryExtent(tileInfo, this._pixelRatio), 
      createQuantizationParameters(tileInfo),
      this._maxRecordCount,
      options || { signal: null }
    );

    const mesh = createMesh(features);
    if (mesh) {
      return { result: mesh, transferList: [mesh.vertexData.buffer, mesh.indexData.buffer] };
    } else {
      return { result: {
          vertexData: null,
          indexData: null,
          elementCount: 0
        } 
      };
    }
  }
}

async function getFeatures(
  outFeatures: Graphic[],
  queryTask: QueryTask,
  queryExtent: Extent,
  quantizationParams: QuantizationParameters,
  maxRecordCount: number,
  options: { signal: AbortSignal },
  page = 0): Promise<Graphic[]> {
    const query = new Query();
    query.where = "1=1";
    query.returnGeometry = true;
    query.geometry = queryExtent;
    query.quantizationParameters = quantizationParams;
    query.outSpatialReference = SpatialReference.WebMercator;
    query.returnExceededLimitFeatures = true;
    query.num = maxRecordCount;
    query.start = page * maxRecordCount;

    const abortOptions = { signal: options.signal };
    const featureSet = await queryTask.execute(query, abortOptions);
    outFeatures.push(...featureSet.features);

    if (featureSet.exceededTransferLimit) {
      return getFeatures(
        outFeatures,
        queryTask,
        queryExtent,
        quantizationParams, 
        maxRecordCount,
        abortOptions, 
        page + 1
        );
    }
  
    return outFeatures;
  } 

function createQueryExtent(tileInfo: TileInfo, pixelRatio: number): Extent {
  // we need to consider the symbol size when we compute the extent to query
  const symbolSizePx = pixelRatio * pt2px(SYMBOL_SIZE);
  const symbolExpantion = tileInfo.resolution * (symbolSizePx + 2) / 2;
  const bounds = tileInfo.bounds;
  return new Extent({
    xmin: bounds[0] - symbolExpantion,
    ymin: bounds[1] - symbolExpantion,
    xmax: bounds[2] + symbolExpantion,
    ymax: bounds[3] + symbolExpantion,
    spatialReference: SpatialReference.WebMercator
  });
}

function createQuantizationParameters(tileInfo: TileInfo): QuantizationParameters {
  const bounds = tileInfo.bounds;

  return {
    mode: "view",
    originPosition: "upper-left",
    tolerance: tileInfo.resolution,
    extent: {
      xmin: bounds[0],
      ymin: bounds[1],
      xmax: bounds[2],
      ymax: bounds[3],
      spatialReference: SpatialReference.WebMercator
    }
  };
}

function createMesh(features: Graphic[]): TileData {
  if (!features || features.length === 0) {
    return null;
  }
  // create TypedArrays from the features (for now use position and offset only)
  // we use four floats per vertex, and we have 4 vertices per marker
  const stride = 4 * 4;
  const indicesPerQuad = 6;
  const vertexData = new Float32Array(features.length * stride);
  const indexData = new Uint32Array(indicesPerQuad * features.length)
  let arrayIndex = 0;
  for (let index = 0; index < features.length; index++) {
    const point = features[index].geometry as Point;
    arrayIndex = stride * index;

    // encode the per vertex data
    // upper-left
    vertexData[arrayIndex + 0] = point.x;
    vertexData[arrayIndex + 1] = point.y;
    vertexData[arrayIndex + 2] = -0.5;
    vertexData[arrayIndex + 3] = -0.5;

    // upper-right
    vertexData[arrayIndex + 4] = point.x;
    vertexData[arrayIndex + 5] = point.y;
    vertexData[arrayIndex + 6] = 0.5;
    vertexData[arrayIndex + 7] = -0.5;

    // lower-left
    vertexData[arrayIndex + 8] = point.x;
    vertexData[arrayIndex + 9] = point.y;
    vertexData[arrayIndex + 10] = -0.5;
    vertexData[arrayIndex + 11] = 0.5;

    // lower right
    vertexData[arrayIndex + 12] = point.x;
    vertexData[arrayIndex + 13] = point.y;
    vertexData[arrayIndex + 14] = 0.5;
    vertexData[arrayIndex + 15] = 0.5;

    // encode the index buffer
    indexData[indicesPerQuad * index + 0] = 4 * index + 0;
    indexData[indicesPerQuad * index + 1] = 4 * index + 1;
    indexData[indicesPerQuad * index + 2] = 4 * index + 2;
    indexData[indicesPerQuad * index + 3] = 4 * index + 1;
    indexData[indicesPerQuad * index + 4] = 4 * index + 3;
    indexData[indicesPerQuad * index + 5] = 4 * index + 2;
  }

  const elementCount = indicesPerQuad * features.length;

  return {
    vertexData,
    indexData,
    elementCount 
  };
}

function pt2px(pt: number): number {
  if (!pt) {
    return 0;
  }

  return (pt / 72) * DPI;
}