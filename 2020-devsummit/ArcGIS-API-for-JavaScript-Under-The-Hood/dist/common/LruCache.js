define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LruCache = (function () {
        function LruCache(maxEntries, deleteFunc) {
            if (maxEntries === void 0) { maxEntries = 20; }
            this.maxEntries = maxEntries;
            this.deleteFunc = deleteFunc;
            this.values = new Map();
        }
        LruCache.prototype.get = function (key) {
            var item = this.values.get(key);
            if (item) {
                this.values.delete(key);
                this.values.set(key, item);
            }
            return item;
        };
        LruCache.prototype.pop = function (key) {
            var entry = this.values.get(key);
            this.values.delete(key);
            return entry;
        };
        LruCache.prototype.put = function (key, value) {
            if (this.values.size >= this.maxEntries) {
                var keyToDelete = this.values.keys().next().value;
                if (this.deleteFunc) {
                    var itemToDelete = this.values.get(keyToDelete);
                    this.deleteFunc(itemToDelete);
                }
                this.values.delete(keyToDelete);
            }
            this.values.set(key, value);
        };
        LruCache.prototype.clear = function () {
            if (this.deleteFunc) {
                var deleteFunc_1 = this.deleteFunc;
                this.values.forEach(function (entry) { return deleteFunc_1(entry); });
            }
            this.values.clear();
        };
        return LruCache;
    }());
    exports.default = LruCache;
});
//# sourceMappingURL=LruCache.js.map