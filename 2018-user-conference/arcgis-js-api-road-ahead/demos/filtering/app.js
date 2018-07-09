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
define(["require", "exports", "esri/config", "esri/layers/CSVLayer", "esri/renderers", "esri/symbols", "esri/WebMap", "esri/widgets/Legend", "esri/widgets/Expand", "esri/views/MapView", "esri/core/watchUtils"], function (require, exports, esriConfig, CSVLayer, renderers_1, symbols_1, WebMap, Legend, Expand, MapView, watchUtils) {
    var _this = this;
    Object.defineProperty(exports, "__esModule", { value: true });
    esriConfig.request.corsEnabledServers.push("https://arcgis.github.io");
    var url = "https://arcgis.github.io/arcgis-samples-javascript/sample-data/hurricanes.csv";
    (function () { return __awaiter(_this, void 0, void 0, function () {
        // When user drags the slider:
        //  - stops the animation
        //  - set the visualized year to the slider one.
        function inputHandler() {
            setYear(parseInt(slider.value, 10));
        }
        /**
         * Sets the current visualized construction year.
         */
        function setYear(value) {
            sliderValue.innerHTML = "" + Math.floor(value);
            slider.value = "" + Math.floor(value);
            layerView;
            layer
                .queryObjectIds({
                where: "year <> " + value
            })
                .then(function (objectIds) {
                featuresView.setVisibility(hiddenIds, objectIds);
                hiddenIds = objectIds;
            })
                .catch(function (error) {
                console.error(error);
            });
        }
        var layer, map, view, legendExpand, layerView, featuresView, hiddenIds, slider, sliderValue;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    layer = new CSVLayer({
                        title: "Hurricanes",
                        url: url,
                        copyright: "NOAA",
                        popupTemplate: {
                            title: "{Name}",
                            content: [
                                {
                                    type: "text",
                                    text: "Category {Category} storm with that occurred at {ISO_time}."
                                },
                                {
                                    type: "fields",
                                    fieldInfos: [
                                        {
                                            fieldName: "wmo_pres",
                                            label: "Pressure"
                                        },
                                        {
                                            fieldName: "wmo_wind",
                                            label: "Wind Speed (mph)"
                                        }
                                    ]
                                }
                            ],
                            fieldInfos: [
                                {
                                    fieldName: "ISO_time",
                                    format: {
                                        dateFormat: "short-date-short-time"
                                    }
                                }
                            ]
                        },
                        renderer: new renderers_1.UniqueValueRenderer({
                            field: "Category",
                            uniqueValueInfos: (function () {
                                var fireflyImages = [
                                    "cat1.png",
                                    "cat2.png",
                                    "cat3.png",
                                    "cat4.png",
                                    "cat5.png"
                                ];
                                var baseUrl = "https://arcgis.github.io/arcgis-samples-javascript/sample-data/";
                                return fireflyImages.map(function (url, i) {
                                    return {
                                        value: i + 1,
                                        symbol: new symbols_1.PictureMarkerSymbol({
                                            url: baseUrl + url
                                        })
                                    };
                                });
                            })()
                        })
                    });
                    map = new WebMap({
                        // contains a basemap with a South Pole Stereographic projection
                        // the CSVLayer coordinates will re-project client-side
                        // with the Projection Engine to match the view's Spatial Reference
                        basemap: {
                            portalItem: {
                                id: "3113eacc129942b4abde490a51aeb33f"
                            }
                        },
                        layers: [layer]
                    });
                    view = new MapView({
                        container: "viewDiv",
                        map: map,
                        highlightOptions: {
                            color: "#ff642e",
                            haloOpacity: 1,
                            fillOpacity: 0.25
                        },
                        popup: {
                            dockEnabled: true,
                            dockOptions: {
                                breakpoint: false
                            }
                        }
                    });
                    legendExpand = new Expand({
                        view: view,
                        content: new Legend({
                            view: view,
                            style: "card"
                        })
                    });
                    view.ui.add(legendExpand, "top-left");
                    return [4 /*yield*/, view.whenLayerView(layer)];
                case 1:
                    layerView = (_a.sent());
                    return [4 /*yield*/, watchUtils.whenDefinedOnce(layerView, "featuresView.tileRenderer")];
                case 2:
                    _a.sent();
                    featuresView = layerView.featuresView.tileRenderer.featuresView;
                    hiddenIds = [];
                    slider = document.getElementById("slider");
                    sliderValue = document.getElementById("sliderValue");
                    // const playButton = document.getElementById("playButton");
                    // const titleDiv = document.getElementById("titleDiv");
                    slider.addEventListener("input", inputHandler);
                    slider.addEventListener("change", inputHandler);
                    return [2 /*return*/];
            }
        });
    }); })();
});
