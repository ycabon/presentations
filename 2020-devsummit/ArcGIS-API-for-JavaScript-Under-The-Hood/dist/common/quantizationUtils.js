define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function quantizePoint(transform, geometry) {
        return { x: quantizeX(transform, geometry.x), y: quantizeY(transform, geometry.y) };
    }
    exports.quantizePoint = quantizePoint;
    function quantizeX(_a, x) {
        var scale = _a.scale, translate = _a.translate;
        return Math.round((x - translate[0]) / scale[0]);
    }
    function quantizeY(_a, y) {
        var scale = _a.scale, translate = _a.translate;
        return Math.round((translate[1] - y) / scale[1]);
    }
});
//# sourceMappingURL=quantizationUtils.js.map