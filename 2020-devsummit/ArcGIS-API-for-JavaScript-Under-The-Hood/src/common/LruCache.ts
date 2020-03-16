
export default class LruCache<T> {
  private values: Map<string, T> = new Map<string, T>();

  constructor(readonly maxEntries = 20, private readonly deleteFunc?: (entry: T) => void) {
  }

  get(key: string): T {
    const item = this.values.get(key);
    if (item) {
      this.values.delete(key);
      this.values.set(key, item);
    }

    return item;
  }

  pop(key: string): T {
    const entry = this.values.get(key);
    this.values.delete(key);
    return entry;
  }

  put(key: string, value: T) {
    if (this.values.size >= this.maxEntries) {
      // least-recently used cache eviction strategy
      const keyToDelete = this.values.keys().next().value;
      if (this.deleteFunc) {
        const itemToDelete = this.values.get(keyToDelete);
        this.deleteFunc(itemToDelete as T);
      }

      this.values.delete(keyToDelete);
    }

    this.values.set(key, value);
  }

  clear(): void {
    if (this.deleteFunc) {
      const deleteFunc = this.deleteFunc;
      this.values.forEach((entry) => deleteFunc(entry));
    }
    this.values.clear();
  }

}