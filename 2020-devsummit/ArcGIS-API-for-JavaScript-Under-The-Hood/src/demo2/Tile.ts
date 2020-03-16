import Point from "esri/geometry/Point";
import Graphic from "esri/Graphic";
import { quantizePoint } from "../common/quantizationUtils";
import TileBase from "../common/TileBase";
import { IPoint, QuantizationTransform, TileData, TileInfo } from '../interfaces';

export default class Tile extends TileBase {

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  constructor(readonly tileInfo: TileInfo, readonly isDebug = false) {
    super(tileInfo);
  }

  // --------------------------------------------------------------------------
  //
  //  Public methods
  //
  // --------------------------------------------------------------------------

  setData(features: Graphic[]): void {
    // we have to quantize the graphics for the tile
    if (this.isDebug) {
      this.tileData = {
        vertexData: new Float32Array([10, 10, 10, 502, 502, 10, 502, 502]),
        indexData: new Uint32Array([0, 1, 2, 1, 3, 2]),
        elementCount: 6
      };
      return;
    }

    if (!features || features.length === 0) {
      this.tileData = { vertexData: null, indexData: null, elementCount: 0 };
      return;
    }

    const tileInfo = this.tileInfo;
    const quantizedPoints = this._quantizeGraphics(features, {
      originPosition: "upper-left",
      scale: [tileInfo.resolution, tileInfo.resolution],
      translate: [tileInfo.bounds[0], tileInfo.bounds[3]]
    });

    this.tileData = this._createMesh(features, quantizedPoints);
  }

  // --------------------------------------------------------------------------
  //
  //  Private methods
  //
  // --------------------------------------------------------------------------

  private _quantizeGraphics(
    graphics: Graphic[],
    transform: QuantizationTransform
  ): IPoint[] {
    const quantizedPoints: IPoint[] = new Array<IPoint>(graphics.length);
    for (let index = 0; index < graphics.length; index++) {
      const graphic = graphics[index];
      const geometry = graphic.geometry;
      if (geometry) {
        quantizedPoints[index] = quantizePoint(transform, geometry as Point);
      }
    }

    return quantizedPoints;
  }

  private _createMesh(features: Graphic[], quantizedPoints: IPoint[]): TileData {
    if (!features) {
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
      const point = quantizedPoints[index];
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
}