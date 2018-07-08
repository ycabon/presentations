var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define(["require", "exports", "esri/WebScene", "esri/views/SceneView", "esri/layers/SceneLayer", "esri/renderers"], function (require, exports, WebScene, SceneView, SceneLayer, renderers_1) {
    var _this = this;
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () { return __awaiter(_this, void 0, void 0, function () {
        var webscene, view, error_1, sitePlanLayer, buildingsLayer, proposedProjectLayer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    webscene = new WebScene({
                        portalItem: {
                            id: "74904be5976b418f9a4647db3dd3e989"
                        }
                    });
                    view = new SceneView({
                        container: "viewDiv",
                        map: webscene
                    });
                    view.gamepad.enabled = true;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, view.when()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    document.getElementById("viewDiv").innerHTML =
                        "<h2>Sorry, it seems your browser doesn't support WebGL :(</h2>";
                    return [3 /*break*/, 4];
                case 4:
                    view.ui.empty("top-left");
                    view.environment.lighting.directShadowsEnabled = true;
                    sitePlanLayer = new SceneLayer({
                        // Data copyright: Houseal Lavigne Associates, LLC
                        url: "https://tiles.arcgis.com/tiles/74bZbbuf05Ctvbzv/arcgis/rest/services/SitePlan_Clean/SceneServer",
                        renderer: new renderers_1.SimpleRenderer({
                            symbol: {
                                type: "mesh-3d",
                                symbolLayers: [
                                    {
                                        type: "fill",
                                        material: {
                                            color: "#ffffff",
                                            colorMixMode: "tint"
                                        },
                                        edges: {
                                            type: "sketch",
                                            color: [0, 0, 0, 0.65],
                                            extensionLength: 10,
                                            size: 1
                                        }
                                    }
                                ]
                            }
                        }),
                        popupEnabled: false
                    });
                    buildingsLayer = new SceneLayer({
                        // Data copyright: Houseal Lavigne Associates, LLC
                        url: "https://tiles.arcgis.com/tiles/74bZbbuf05Ctvbzv/arcgis/rest/services/Buildings/SceneServer",
                        renderer: new renderers_1.SimpleRenderer({
                            symbol: {
                                type: "mesh-3d",
                                symbolLayers: [
                                    {
                                        type: "fill",
                                        material: {
                                            color: "#ffffff",
                                            colorMixMode: "replace"
                                        },
                                        edges: {
                                            type: "sketch",
                                            color: [0, 0, 0, 0.65],
                                            extensionLength: 10,
                                            size: 1
                                        }
                                    }
                                ]
                            }
                        }),
                        popupEnabled: false
                    });
                    proposedProjectLayer = new SceneLayer({
                        // Data copyright: Houseal Lavigne Associates, LLC
                        url: "https://tiles.arcgis.com/tiles/74bZbbuf05Ctvbzv/arcgis/rest/services/Option2_r/SceneServer",
                        renderer: new renderers_1.SimpleRenderer({
                            symbol: {
                                type: "mesh-3d",
                                symbolLayers: [
                                    {
                                        type: "fill",
                                        material: {
                                            color: "#ffffff",
                                            colorMixMode: "replace"
                                        },
                                        edges: {
                                            type: "sketch",
                                            color: [0, 0, 0, 0.65],
                                            extensionLength: 10,
                                            size: 1
                                        }
                                    }
                                ]
                            }
                        }),
                        popupEnabled: false
                    });
                    webscene.addMany([sitePlanLayer, proposedProjectLayer, buildingsLayer]);
                    return [2 /*return*/];
            }
        });
    }); })();
});
