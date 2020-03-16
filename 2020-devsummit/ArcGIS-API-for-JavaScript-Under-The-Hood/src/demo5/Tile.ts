import TileBase from "../common/TileBase";
import { TileData, TileInfo } from '../interfaces';

export default class Tile extends TileBase {

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  constructor(readonly tileInfo: TileInfo) {
    super(tileInfo);
  }

  dispose(gl: WebGLRenderingContext, vaoExt: any): void {
    if (this.vao) {
      vaoExt.deleteVertexArray(this.vao);
      gl.deleteBuffer(this.vertexBuffer);
      gl.deleteBuffer(this.indexBuffer);
    }

    this.tileData = null;
  }

  // --------------------------------------------------------------------------
  //
  //  Public methods
  //
  // --------------------------------------------------------------------------

  setData(tileData: TileData): void {
    // we have to quantize the graphics for the tile

    if (!tileData) {
      this.tileData = { vertexData: null, indexData: null, elementCount: 0 };
      return;
    }

    this.tileData = tileData;
  }
}