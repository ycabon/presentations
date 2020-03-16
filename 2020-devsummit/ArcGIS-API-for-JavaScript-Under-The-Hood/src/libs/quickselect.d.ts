declare function quickselect<T>(
  arr: T[],
  mid: number,
  left: number,
  right: number,
  compare: (a: T, b: T) => number
): void;

export = quickselect;
