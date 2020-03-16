import { IPoint, QuantizationTransform } from "../interfaces"

export function quantizePoint(transform: QuantizationTransform, geometry: IPoint): IPoint {
  return { x: quantizeX(transform, geometry.x), y: quantizeY(transform, geometry.y) };
}

function quantizeX({ scale, translate }: QuantizationTransform, x: number): number {
  return Math.round((x - translate[0]) / scale[0]);
}

function quantizeY({ scale, translate }: QuantizationTransform, y: number): number {
  return Math.round((translate[1] - y) / scale[1]);
}