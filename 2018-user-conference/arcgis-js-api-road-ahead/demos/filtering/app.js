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
define(["require", "exports", "esri/layers/CSVLayer", "esri/renderers", "esri/symbols", "esri/WebMap", "esri/widgets/Legend", "esri/widgets/Expand", "esri/views/MapView", "esri/core/watchUtils", "esri/layers/GraphicsLayer", "esri/widgets/Sketch/SketchViewModel", "esri/Graphic", "esri/tasks/support/Query", "@dojo/framework/core/util", "@dojo/framework/shim/Set"], function (require, exports, CSVLayer, renderers_1, symbols_1, WebMap, Legend, Expand, MapView, watchUtils, GraphicsLayer, SketchViewModel, Graphic, Query, util_1, Set_1) {
    var _this = this;
    Object.defineProperty(exports, "__esModule", { value: true });
    var map;
    var view;
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
            query.where = "year = " + value;
            invalidateQuery();
        }
        function setupDrawing() {
            view.ui.add(document.getElementById("topbar"), "top-right");
            var editGraphic;
            // GraphicsLayer to hold graphics created via sketch view model
            var drawLayer = new GraphicsLayer();
            map.add(drawLayer);
            // create a new sketch view model
            var sketchViewModel = new SketchViewModel({
                view: view,
                polygonSymbol: new symbols_1.SimpleFillSymbol({
                    color: "rgba(0,0,0,0)",
                    style: "solid",
                    outline: {
                        color: "white",
                        width: "1px"
                    }
                })
            });
            setUpClickHandler();
            sketchViewModel.on("create-complete", addGraphic);
            sketchViewModel.on("create", updateQuery);
            sketchViewModel.on("scale", updateQuery);
            sketchViewModel.on("move", updateQuery);
            sketchViewModel.on("rotate", updateQuery);
            sketchViewModel.on("reshape", updateQuery);
            sketchViewModel.on("update-complete", updateGraphic);
            sketchViewModel.on("update-cancel", done);
            function updateQuery(event) {
                query.geometry = event.geometry;
                invalidateQuery();
            }
            function addGraphic(event) {
                var graphic = new Graphic({
                    geometry: event.geometry,
                    symbol: sketchViewModel.graphic.symbol
                });
                drawLayer.add(graphic);
            }
            function updateGraphic(event) {
                event.graphic.geometry = event.geometry;
                drawLayer.add(event.graphic);
                editGraphic = null;
            }
            function done(event) {
                editGraphic = null;
            }
            //***************************************
            // activate the sketch to create a polygon
            //***************************************
            var drawPolygonButton = document.getElementById("polygonButton");
            drawPolygonButton.addEventListener("click", function () {
                // set the sketch to create a polygon geometry
                sketchViewModel.create("polygon");
                setActiveButton(this);
            });
            //***************************************
            // activate the sketch to create a polygon
            //***************************************
            var drawCircleButton = document.getElementById("circleButton");
            drawCircleButton.addEventListener("click", function () {
                // set the sketch to create a polygon geometry
                sketchViewModel.create("circle");
                setActiveButton(this);
            });
            //**************
            // reset button
            //**************
            document.getElementById("resetBtn").onclick = function () {
                sketchViewModel.reset();
                drawLayer.removeAll();
                setActiveButton();
                query.geometry = null;
                invalidateQuery();
            };
            function setActiveButton(selectedButton) {
                // focus the view to activate keyboard shortcuts for sketching
                view.focus();
                var elements = document.getElementsByClassName("active");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].classList.remove("active");
                }
                if (selectedButton) {
                    selectedButton.classList.add("active");
                }
            }
            // ************************************************************************************
            // set up logic to handle geometry update and reflect the update on "tempGraphicsLayer"
            // ************************************************************************************
            function setUpClickHandler() {
                view.on("click", function (event) {
                    event.stopPropagation();
                    view.hitTest(event).then(function (response) {
                        var results = response.results;
                        for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                            var graphic = results_1[_i].graphic;
                            if (graphic.layer === drawLayer) {
                                // Check if we're already editing a graphic
                                if (!editGraphic) {
                                    // Save a reference to the graphic we intend to update
                                    editGraphic = graphic;
                                    // Remove the graphic from the GraphicsLayer
                                    // Sketch will handle displaying the graphic while being updated
                                    drawLayer.remove(editGraphic);
                                    sketchViewModel.update(editGraphic);
                                }
                                return;
                            }
                        }
                    });
                });
            }
        }
        var layer, layerView, slider, sliderValue, allObjectIds, _a, featuresView, oldHiddenIds, query, invalidateQuery;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    layer = new CSVLayer({
                        title: "Hurricanes",
                        spatialReference: {
                            wkt: "PROJCS[\"South Pole Stereographic_1\",GEOGCS[\"GCS WGS 1984\",DATUM[\"D_WGS_1984\",SPHEROID[\"WGS_1984\",6378137.0,298.257223563]],PRIMEM[\"Greenwich\",0.0],UNIT[\"Degree\",0.0174532925199433]],PROJECTION[\"Stereographic\"],PARAMETER[\"False_Easting\",0.0],PARAMETER[\"False_Northing\",0.0],PARAMETER[\"Central_Meridian\",-145.0],PARAMETER[\"Scale_Factor\",1.0],PARAMETER[\"Latitude_Of_Origin\",-90.0],UNIT[\"Meter\",1.0]]"
                        },
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
                    view.ui.add(new Expand({
                        view: view,
                        content: new Legend({
                            view: view,
                            style: "card"
                        })
                    }), "top-left");
                    return [4 /*yield*/, view.whenLayerView(layer)];
                case 1:
                    layerView = (_b.sent());
                    return [4 /*yield*/, watchUtils.whenDefinedOnce(layerView, "tileRenderer")];
                case 2:
                    _b.sent();
                    slider = document.getElementById("slider");
                    sliderValue = document.getElementById("sliderValue");
                    // const playButton = document.getElementById("playButton");
                    // const titleDiv = document.getElementById("titleDiv");
                    slider.addEventListener("input", inputHandler);
                    slider.addEventListener("change", inputHandler);
                    return [4 /*yield*/, watchUtils.whenFalseOnce(layerView, "updating")];
                case 3:
                    _b.sent();
                    _a = Set_1.default.bind;
                    return [4 /*yield*/, layerView.queryObjectIds({ where: "1=1" })];
                case 4:
                    allObjectIds = new (_a.apply(Set_1.default, [void 0, _b.sent()]))();
                    featuresView = layerView.tileRenderer.featuresView;
                    oldHiddenIds = [];
                    query = new Query();
                    invalidateQuery = util_1.throttleAfter(function () {
                        layer
                            .queryObjectIds(query)
                            .then(function (objectIds) {
                            var visibleSet = new Set_1.default(objectIds);
                            var hiddenIds = [];
                            allObjectIds.forEach(function (oid) {
                                if (!visibleSet.has(oid)) {
                                    hiddenIds.push(oid);
                                }
                            });
                            featuresView.setVisibility(oldHiddenIds, hiddenIds);
                            oldHiddenIds = hiddenIds;
                        })
                            .catch(function (error) {
                            console.error(error);
                        });
                    }, 50);
                    setupDrawing();
                    return [2 /*return*/];
            }
        });
    }); })();
});
