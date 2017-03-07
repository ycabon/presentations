define([
  "./Basemap",

  "dojo/_base/array",
  "dojo/_base/kernel",
  "dojo/_base/lang",

  "esri/Basemap",

  "esri/core/Accessor",
  "esri/core/Evented",
  "esri/core/promiseList",
  "esri/core/urlUtils",

  "esri/geometry/Extent",

  "esri/kernel",

  "esri/layers/ArcGISDynamicLayer",
  "esri/layers/ArcGISImageServiceLayer",
  "esri/layers/ArcGISTiledLayer",

  "esri/layers/support/ImageServiceParameters",

  "esri/request"
],
function(
  Basemap,
  array, kernel, lang,
  coreBasemap,
  Accessor, Evented, promiseList, urlUtils,
  Extent,
  esriKernel,
  MapImageLayer, ImageryLayer, TileLayer,
  ImageServiceParameters,
  esriRequest
) {

  return Accessor.createSubclass([Evented],{

    properties: {
      map: {
        dependsOn: ["view.map"]
      }
    },

    declaredClass: "demo.widgets.Basemaps.BasemapsViewModel",

    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------

    constructor: function() {
      this._handleArcGISBasemapsResponse = this._handleArcGISBasemapsResponse.bind(this);
      this._findArcGISBasemaps = this._findArcGISBasemaps.bind(this);
    },

    getDefaults: function() {
      return lang.mixin(this.inherited(arguments), {
        arcgisUrl: esriKernel.dijit._arcgisUrl,
        showArcGISBasemaps: true,
        bingMapsKey: null,  // TODO: move to declaration
        basemaps: []
      });
    },

    _arcgisUrlSetter: function(value, oldValue) {
      if(value === oldValue) {
        return value;
      }

      if(value) {
        if(value !== esriKernel.dijit._arcgisUrl) {
          value += "/sharing/rest";
        }

        if (value.indexOf("://") < 0) {
          value = window.location.protocol + "//" + value;
        }
        else if (window.location.protocol === "https:") {
          value = value.replace('http:', 'https:');
        }
      }

      return value;
    },

    initialize: function() {
      // TODO: still valid in 4.0?
      // TODO: review
      if (!this.view.map) {
        console.error(this.declaredClass + ": Unable to find the 'map' property in parameters");
      }

      this.init();
    },

    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------

    // widget has loaded ArcGIS.com basemaps
    loaded: false,

    // list of all basemaps, for user to see
    basemaps: [],
    basemapIds: [],
    referenceIds: [],

    // user provided Bing Maps key
    bingMapsKey: null,

    // Implicit public properties: flowContainer
    flowContainer: null,

    view: null,

    _mapGetter: function() {
      return this.get("view.map");
    },

    _layerIdsGetter: function() {
      var mapLayers = this.get("view.map.layers") || [];

      return mapLayers.map(function(layer) {
        return layer.id;
      });
    },

    _basemapGalleryGroupQuerySetter: function(value) {
      // TODO: workaround
      this._basemapGalleryGroupQuery = value;
      return value;
    },

    selected: null,

    //--------------------------------------------------------------------------
    //
    //  Variables
    //
    //--------------------------------------------------------------------------

    _selectBasemapInProgress: false,

    // TODO: make public props
    _defaultBasemapGalleryGroupQuery: "title:\"ArcGIS Online Basemaps\" AND owner:esri_de",
    _basemapGalleryGroupQuery: null,

    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------

    init: function() {
      // TODO: is this still needed?
      // don't check here if Bing Maps Key is available for Bing Maps.
      this.basemaps.forEach(function(basemap, i) {
        if (!basemap.id || basemap.id.length === 0) {
          basemap.id = this._getUniqueId();
        }
        array.forEach(basemap.layers, function(layer) {
          layer.opacity = (layer.opacity >= 0) ? layer.opacity : 1;
          layer.visibility = true;
        }, this);
      }, this);

      // TODO: ensure array
      this.basemapIds.forEach(function(basemapId) {
        var layer = this.map.getLayer(basemapId);
        layer._basemapGalleryLayerType = "basemap";
      }, this);

      // TODO: ensure array
      this.referenceIds.forEach(function(referenceId) {
        var layer = this.map.getLayer(referenceId);
        layer._basemapGalleryLayerType = "reference";
      }, this);

      if (this.basemapsGroup && ((this.basemapsGroup.owner && this.basemapsGroup.title) || this.basemapsGroup.id)) {
        this._findCustomBasemapsGroup(this._handleArcGISBasemapsResponse);
      }
      else {
        if (this.showArcGISBasemaps) {
          this._findArcGISBasemapsGroup(this._handleArcGISBasemapsResponse);
        }
        else {
          this._finishStartup();
        }
      }
    },

    select: function (id) {
      this._selectBasemapInProgress = true;

      var basemap = this.get(id);
      if (basemap) {
        if (basemap.layers) {
          this._getServiceInfos(basemap);
        }
        else {
          var returnValue = basemap.getLayers(this.arcgisUrl);
          if (Array.isArray(returnValue)) {
            this._getServiceInfos(basemap);
          }
          else { // returnValue instanceof dojo.Deferred
            returnValue.then(function() {
              this._getServiceInfos(basemap);
            }.bind(this));
          }
        }
        this.selected = basemap;
      }
      else {
        this._selectBasemapInProgress = false;
      }
    },

    get: function (id) {
      for (var i = 0, l = this.basemaps.length; i < l; i++) {
        if (this.basemaps[i].id == id) {
          return this.basemaps[i];
        }
      }
      return null;
    },

    add: function(basemap) {
      if (basemap && !basemap.id) {
        basemap.id = this._getUniqueId();
        this.basemaps.push(basemap);
        this._emitAdd(basemap);
        return true;
      }
      else if (basemap && this._isUniqueId(basemap.id)) {
        this.basemaps.push(basemap);
        this._emitAdd(basemap);
        return true;
      }
      return false;
    },

    remove: function (id) {
      for (var i = 0; i < this.basemaps.length; i++) {
        var basemap = this.basemaps[i];
        if (basemap.id === id) {
          if (this.selected && this.selected.id === basemap.id) {
            this.selected = null;
          }
          this.basemaps.splice(i, 1);
          this.emit("remove", {
            basemap: basemap
          });
          return basemap;
        }
      }
      return null;
    },

    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------

    _emitAdd: function (basemap) {
      this.emit("add", {
        basemap: basemap
      });
    },

    _emitError: function (msg) {
      this.emit("error", {
        message: msg
      });
    },

    _finishStartup: function () {
      this.loaded = true;
      this.emit("load");

      // if map is empty add first basemap
      if (this.layerIds.length === 0 && this.basemaps.length > 0 && !this._selectBasemapInProgress) {
        this.select(this.basemaps[0].id);
      }
    },

    _findCustomBasemapsGroup: function(handler) {
      if (this.basemapsGroup && this.basemapsGroup.id) {
        this._findArcGISBasemaps(this.basemapsGroup.id, handler);
      }
      else {
        this._basemapGalleryGroupQuery = "title:\"" + this.basemapsGroup.title + "\" AND owner:" + this.basemapsGroup.owner;
        this._findArcGISBasemapsGroup(handler);
      }
    },

    _findArcGISBasemapsGroup: function (handler) {
      if (!this._basemapGalleryGroupQuery) {
        // make self call to get group name and owner
        var url = this.arcgisUrl + "/accounts/self";
        var params = {
          f: "json"
        };

        params.culture = kernel.locale;
        esriRequest({
          url: url,
          content: params,
          callbackParamName: "callback"
        })
          .then(function(response) {
              if (response && response.basemapGalleryGroupQuery) {
                this._basemapGalleryGroupQuery = response.basemapGalleryGroupQuery;
              }
              else {
                this._basemapGalleryGroupQuery = this._defaultBasemapGalleryGroupQuery;
              }
              this._findArcGISBasemapsGroupContent(handler);
            }.bind(this),
            function() {
              this._basemapGalleryGroupQuery = this._defaultBasemapGalleryGroupQuery;
            }.bind(this)
          );
      }
      else {
        this._findArcGISBasemapsGroupContent(handler);
      }
    },

    _findArcGISBasemapsGroupContent: function (handler) {
      // find group id from name+owner
      var findArcGISBasemaps = this._findArcGISBasemaps;

      var url = this.arcgisUrl + "/community/groups";
      var params = {
        q: this._defaultBasemapGalleryGroupQuery,
        f: "json"
      };

      esriRequest({
        url: url,
        content: params,
        callbackParamName: "callback"
      })
        .then(function(response) {
            var results = response.results;
            if (results.length > 0) {
              findArcGISBasemaps(results[0].id, handler);
            }
            else {
              var msg = this.declaredClass + ": could not find group for basemaps.";
              this._emitError(msg);
            }
          }.bind(this),
          function() {
            var msg = this.declaredClass + ": could not find group for basemaps.";
            this._emitError(msg);
          }.bind(this)
        );
    },

    _findArcGISBasemaps: function (groupId, handler) {
      // find web maps in group
      var url = this.arcgisUrl + "/search";
      var params = {
        q: "group:" + groupId + " AND type:\"web map\"",
        sortFiel: "name",
        sortOrde: "desc",
        num: 50,
        f: "json"
      };

      esriRequest({
        url: url,
        content: params,
        callbackParamName: "callback",
        load: lang.hitch(this, function (response, args) {
          if (response.results.length > 0) {
            handler(response.results);
          } else {
            var msg = this.declaredClass + ": could not find group for basemaps.";
            this._emitError(msg);
          }
        }),
        error: lang.hitch(this, function (response, args) {
          var msg = this.declaredClass + ": could not find group for basemaps.";
          this._emitError(msg);
        })
      });
    },

    _handleArcGISBasemapsResponse: function (items) {
      if (items.length > 0) {
        // build basemaps list
        array.forEach(items, function (item, i) {
          // we don't want to get all web map configs to check if it's Bing. Just use the title.
          // only add Bing Maps if a Bing Maps Key is available
          if (this.bingMapsKey || (!this.bingMapsKey && item.title && item.title.indexOf("Bing Maps") == -1)) {
            var params = {};
            params.id = this._getUniqueId();
            params.title = item.title;
            // thumbnail
            params.thumbnailUrl = "";
            if (item.thumbnail && item.thumbnail.length) {
              params.thumbnailUrl = (this.arcgisUrl + "/content/items/" + item.id + "/info/" + item.thumbnail);
              if (esriKernel.id) {
                var credentials = esriKernel.id.findCredential(urlUtils.urlToObject(this.arcgisUrl).path);
                if (credentials) {
                  params.thumbnailUrl += "?token=" + credentials.token;
                }
              }
            }
            // we don't know the layers yet
            params.itemId = item.id;
            params.basemapGallery = this;
            var basemap = new Basemap(params);
            // add ArcGIS.com basemaps in front of user basemaps
            this.basemaps.splice(0, 0, basemap);
          }
        }, this);

        this._finishStartup();
      }
    },

    _getServiceInfos: function (basemap) {
      var layers = basemap.layers || [];

      if (location.protocol == "https:") {
        layers.forEach(function(layer) {
          if (this._isAgolService(layer.url) || this._isHostedService(layer.url)) {
            layer.url = layer.url.replace("http:", "https:");
          }
        }, this);
      }

      this.selected = basemap;

      var deferreds = layers.map(function(baseMapLayer) {
        if (baseMapLayer.url && baseMapLayer.url.length > 0 &&
            !baseMapLayer.isReference &&
            !baseMapLayer.type) {

          // ArcGIS Server
          //baseMapLayer.deferredsPos = deferreds.length;

          return this._getServiceInfo(baseMapLayer.url);
        }
      }, this);

      promiseList(deferreds).then(function (results) {
        if(results.length > 0) {
          // @javi5947
          // disable this code for hydra as setExtent function is not defined

          /*
           var sumExtent = null;
           array.forEach(basemap.layers, function (baseMapLayer) {
           if (baseMapLayer.deferredsPos === 0 || baseMapLayer.deferredsPos) {
           baseMapLayer.serviceInfoResponse = response[baseMapLayer.deferredsPos][1];
           var ext = baseMapLayer.serviceInfoResponse.fullExtent;
           if (!ext) {
           ext = baseMapLayer.serviceInfoResponse.extent;
           }
           if (!sumExtent) {
           sumExtent = new Extent(ext);
           } else {
           sumExtent = sumExtent.union(new Extent(ext));
           }
           }
           }, this);

           if (this.map.extent) {
           var percent = this._getIntersectionPercent(sumExtent, this.map.extent);
           if (percent < 5) {
           this.map.setExtent(sumExtent, true);
           }
           } // else map is empty
           */
        }

        this._switchBasemapLayers(basemap);
        //this._updateReferenceLayer(basemap);

      }.bind(this));
    },

    _switchBasemapLayers: function (galleryBasemap) {
      this.changeBasemap(galleryBasemap);
    },

    _handleReferenceServiceInfoResponse: function (baseMapLayer, serviceInfoResponse) {
      var layer;

      baseMapLayer.serviceInfoResponse = serviceInfoResponse;

      if (serviceInfoResponse && serviceInfoResponse.mapName) {

        // map service
        if (serviceInfoResponse.singleFusedMapCache === true) {
          layer = this._loadAsCached(baseMapLayer);
        }
        else {
          layer = this._loadAsDynamic(baseMapLayer);
        }
      }
      else if (serviceInfoResponse && serviceInfoResponse.pixelSizeX) {
        var bandIds;

        if (!baseMapLayer.bandIds && serviceInfoResponse.bandCount && parseInt(serviceInfoResponse.bandCount) > 3) {
          bandIds = [0, 1, 2];
        }
        else{
          bandIds = baseMapLayer.bandIds;
        }

        // image service
        var imageServiceParameters = new ImageServiceParameters({
          bandIds: bandIds
        });

        layer = new ImageryLayer(baseMapLayer.url, {
          resourceInfo: serviceInfoResponse,
          opacity: baseMapLayer.opacity,
          visible: baseMapLayer.visibility,
          imageServiceParameters: imageServiceParameters
        });
      }

      if (layer) {
        layer._basemapGalleryLayerType = "reference";
        this.map.addLayer(layer);
      }

    },

    _getServiceInfo: function (url, handler) {
      var params = {
        f: "json"
      };

      // TODO: chain handler instead?
      return esriRequest({
        url: url,
        content: params,
        callbackParamName: "callback",
        load: function(response, args) {
          if (handler) {
            handler(response, args);
          }
        },
        error: function() {
          var msg = this.declaredClass + ": service not accessible.";
          this._emitError(msg);
        }.bind(this)
      });
    },

    _loadAsCached: function(baseMapLayer) {
      var serviceLods;
      var lods;

      if (baseMapLayer.displayLevels) {
        serviceLods = [];
      }
      else {
        lods = baseMapLayer.serviceInfoResponse.tileInfo.lods || [];

        serviceLods = lods.map(function(lod) {
          return lod.level;
        });
      }

      var exclusionAreas = null;

      if (baseMapLayer.exclusionAreas && baseMapLayer.exclusionAreas.length) {

        exclusionAreas = baseMapLayer.exclusionAreas.map(function(exArea) {
          return {
            minZoom: exArea.minZoom,
            maxZoom: exArea.maxZoom,
            minScale: exArea.minScale,
            maxScale: exArea.maxScale,
            geometry: new Extent(exArea.geometry)
          };
        });
      }

      var layer = new TileLayer(baseMapLayer.url, {
        resourceInfo: baseMapLayer.serviceInfoResponse,
        opacity: baseMapLayer.opacity,
        visible: baseMapLayer.visibility,
        exclusionAreas: exclusionAreas,
        displayLevels: baseMapLayer.displayLevels || serviceLods
      });

      return layer;
    },

    _loadAsDynamic: function(baseMapLayer) {
      var layer = new MapImageLayer(baseMapLayer.url, {
        resourceInfo: baseMapLayer.serviceInfoResponse,
        opacity: baseMapLayer.opacity,
        visible: baseMapLayer.visibility
      });

      if (baseMapLayer.visibleLayers) {
        layer.setVisibleLayers(baseMapLayer.visibleLayers);
      }

      return layer;
    },

    // return percentage value on how much the new extent overlaps the map extent
    _getIntersectionPercent: function(newExtent, mapExtent) {
      // make sure defaultExtent is partially inside mapExtent
      var intersects = mapExtent.intersects(newExtent);

      if (!intersects) {
        return 0;
      }

      // new extent overlaps current map extent
      // if intersection covers only 5% or less of the current map extent zoom
      // otherwise don't zoom
      var areaIntersection = intersects.width * intersects.height;
      var areaMapExtent = mapExtent.width * mapExtent.height;
      return (areaIntersection / areaMapExtent) * 100;
    },

    _getIds: function() {
      return this.basemaps.map(function(basemap) {
        return basemap.id;
      });
    },

    _getUniqueId: function() {
      var usedIds = "," + this._getIds().toString() + ",";
      var count = 0;

      while (true) {
        if (usedIds.indexOf(",basemap_" + count + ",") > -1) {
          count++;
        }
        else {
          return "basemap_" + count;
        }
      }
    },

    _isUniqueId: function (id) {
      var usedIds = "," + this._getIds().toString() + ",";

      return usedIds.indexOf("," + id + ",") === -1;
    },

    _isAgolService: function(url){
      var agoServicePattern = /\/(?:services|server).arcgisonline.com\//;

      return agoServicePattern.test(url);
    },

    _isHostedService: function(url){
      return url && url.indexOf(".arcgis.com/") !== -1;
    },

    // FIXME: hacked this from sceneviewer

    changeBasemap: function(basemap) {
      var basemapJson = {
        baseMapLayers: [],
        elevationLayers: [],
        title: basemap.title,
        id: basemap.id
      };

      basemap.layers.forEach(function(l) {
        var nl = {
          "id": l.id,
          "isReference": l.isReference,
          "layerType": l.layerType || l.type
        };

        if (nl.layerType === "OpenStreetMap") {
          nl.urlTemplate = l.urlTemplate || l.templateUrl;
        } else if (nl.layerType === "WebTiledLayer") {
          nl.urlTemplate = l.urlTemplate || l.templateUrl;
          nl.subDomains = l.subDomains;
        } else {
          nl.url = l.url;
        }

        basemapJson.baseMapLayers.push(nl);
      });

      if (this.view.map.basemap){
        this.view.map.basemap.elevationLayers.forEach(function(l) {
          basemapJson.elevationLayers.push({
            "id": l.id,
            "url": l.url,
            "layerType": l.layerType || l.type
          });
        });
      }

      this.view.map.basemap = coreBasemap.fromJSON(basemapJson);
    }

  });

});
