import ViewState from "esri/views/2d/ViewState";
import { mat3 } from "gl-matrix";
import { ITile, TileData, TileInfo } from '../interfaces';

export default abstract class TileBase implements ITile {

  // --------------------------------------------------------------------------
  //
  //  Public properties
  //
  // --------------------------------------------------------------------------

  tileData: TileData;
  stencilRef: number;

  transforms = {
    /**
     * Premultiplied T: Tile -> Display. See setTransform
     * dvsMat3 = displayMat3 (T: View -> Display)
     *            * viewMat3 (T: Screen -> View)
     *            * tileMat3 (T: Tile -> Screen)
     */
    dvs: mat3.create(),

    tileMat3: mat3.create()
  };

  vertexBuffer: WebGLBuffer;
  indexBuffer: WebGLBuffer;
  vao: WebGLObject;

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  constructor(readonly tileInfo: TileInfo) {
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

  setTransform(state: ViewState, displayViewMat3: mat3): void {
    const { resolution } = state;
    const lodResolution = this.tileInfo.resolution;
    const tileScale = window.devicePixelRatio * lodResolution / resolution;
    const tileToScreen = this.transforms.tileMat3;
    const [x, y] = state.toScreenNoRotation([0, 0], this.tileInfo.coords[0], this.tileInfo.coords[1]);
    const sx = tileScale;
    const sy = tileScale;

    mat3.set(tileToScreen, sx, 0, 0, 0, sy, 0, x, y, 1);
    mat3.multiply(this.transforms.dvs, displayViewMat3, tileToScreen);
  }

  hasData(): boolean {
    return !!this.tileData;
  }
}