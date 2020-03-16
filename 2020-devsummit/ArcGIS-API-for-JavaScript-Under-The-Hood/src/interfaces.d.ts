import Graphic from "esri/Graphic";
import ViewState from "esri/views/2d/ViewState";
import { mat3 } from "gl-matrix";

export interface IPoint { x: number, y: number }

export interface TileKey {
  level: number;
  row: number;
  col: number;
  world: number;
}

export interface TileInfo extends TileKey {
  id: string;
  resolution: number;
  scale: number;
  coords: number[];
  bounds: number[];
}

export interface TileData {
  vertexData: Float32Array;
  indexData: Uint32Array
  elementCount: number;
}

export interface ITile {
  tileInfo: ITileInfo;
  stencilRef: number;
  vertexBuffer: WebGLBuffer;
  indexBuffer: WebGLBuffer;
  vao: WebGLObject;

  transforms: {
    dvs: mat3
    tileMat3: mat3;
  };
  
  hasData(): boolean;
  setTransform(state: ViewState, displayViewMat3: mat3): void;
  dispose(gl: WebGLRenderingContext, vaoExt: any): void;  
 }

export interface QuantizationTransform {
  originPosition: "upper-left" | "lower-left",
  scale: number[];
  translate: number[];
}

export interface QuantizationParameters {
  mode: "view";
  originPosition: "upper-left";
  tolerance: number; // resolution
  extent: Extent;
}