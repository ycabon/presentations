declare module "flubber" {
  export function interpolate(
    fromShape: number[][],
    toShape: number[][],
    options?: { string: boolean; maxSegmentLength: number }
  ): (ratio: number) => number[][];
}
