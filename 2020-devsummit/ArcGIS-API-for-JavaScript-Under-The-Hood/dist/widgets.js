define(["require", "exports", "tslib", "esri/widgets/LayerList", "esri/widgets/Legend"], function (require, exports, tslib_1, LayerList_1, Legend_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    LayerList_1 = tslib_1.__importDefault(LayerList_1);
    Legend_1 = tslib_1.__importDefault(Legend_1);
    function initWidgets(view) {
        var legend = new Legend_1.default({ view: view });
        var layerList = new LayerList_1.default({ view: view });
        view.ui.add(legend, 'bottom-left');
        view.ui.add(layerList, 'top-right');
        return view;
    }
    exports.initWidgets = initWidgets;
});
//# sourceMappingURL=widgets.js.map