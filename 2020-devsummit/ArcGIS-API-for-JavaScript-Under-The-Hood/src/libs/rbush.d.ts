// Type definitions for rbush 2.0.1
// Project: https://github.com/mourner/rbush
// Definitions by: Dan Vanderkam <http://danvk.org/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// esri.core.libs.rbush
import { RBush } from "./interfaces";

interface BBox {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
}

type ToBBox<T> = (item: T) => BBox;

declare function rbush<T>(size?: number, formatOrToBBox?: string[] | ToBBox<T>): RBush<T>;

export = rbush;
