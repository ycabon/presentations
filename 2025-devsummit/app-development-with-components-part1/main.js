require({
  paths: {
    application: window.location.href.replace(/\/[^/]+$/, "") + "/application",
  },
}, [
  "esri/WebMap",
  "application/utils",
  "application/parks",
  "application/trailCategories",
], (
  WebMap,
  { sqlAnd, updateElementChildren },
  { fetchParks, createParkWhereClause },
  { fetchTrailCategories, createTrailUseWhereClause }
) =>
  (async () => {
    const mapElement = document.querySelector("#mapElement");
    const parkList = document.querySelector("#parkList");
    const trailCategoriesChipGroup = document.querySelector(
      "#trailCategoriesChipGroup"
    );
    const trailsTable = document.querySelector("#trailsTable");
    const elevationProfile = document.querySelector("#elevationProfile");

    //--------------------------------------------------------------------------
    //
    //  State
    //
    //--------------------------------------------------------------------------

    class Application extends EventTarget {
      constructor() {
        super();

        this.map = new WebMap({
          portalItem: {
            id: "f599313f70204fc79bcc2885db89d09f",
          },
        });

        this.trailsFilter = {
          park: null,
          parkExtent: null,
          trailCategories: null,
        };

        this.selectedTrail = null;
        this.trailCategories = [];
        this.parks = [];
      }

      async load() {
        await this.map.load();

        this.layer = this.map.layers.find((layer) => layer.title === "Trails");

        const [parks, trailCategories] = await Promise.all([
          fetchParks(this.layer),
          fetchTrailCategories(this.layer, this.trailsFilter),
        ]);

        this.parks = parks;
        this.parksByName = new Map(
          parks.map((park) => {
            return [park.key, park];
          })
        );

        this.trailCategories = trailCategories;
      }

      selectPark(parkName) {
        const park = this.parksByName.get(parkName);
        this.trailsFilter.park = park.key;
        this.trailsFilter.parkExtent = park.extent;
        this.dispatchEvent(new CustomEvent("filterChange"));
      }

      selectTrailCategories(categories) {
        this.trailsFilter.trailUses = categories;
        this.dispatchEvent(new CustomEvent("filterChange"));
      }

      selectTrail(feature) {
        state.selectedTrail = feature;
        this.dispatchEvent(new CustomEvent("selectedTrailChange"));
      }
    }

    const state = new Application();

    mapElement.map = state.map;
    mapElement.constraints = {
      snapToZoom: false,
    };

    await state.load();

    setupFilterPanel();
    setupTrailsTable();
    setupElevationProfile();

    //--------------------------------------------------------------------------
    //
    //  Filter Panel
    //
    //--------------------------------------------------------------------------

    async function setupFilterPanel() {
      // Create bookmarks
      updateParkList(parkList, state.parks, state.trailsFilter);

      // Populate the trail categories filter
      updateTrailCategoriesChipGroup(
        trailCategoriesChipGroup,
        state.trailCategories,
        state.trailsFilter
      );
    }

    parkList.addEventListener("calciteListChange", () => {
      const item = parkList.selectedItems[0];
      state.selectPark(item.value);
    });

    trailCategoriesChipGroup.addEventListener("calciteChipGroupSelect", () => {
      state.selectTrailCategories(
        trailCategoriesChipGroup.selectedItems.map((chip) => chip.value)
      );
    });

    //--------------------------------------------------------------------------
    //
    //  Trails Table
    //
    //--------------------------------------------------------------------------

    function setupTrailsTable() {
      trailsTable.layer = state.layer;
      trailsTable.addEventListener("arcgisCellClick", async (event) => {
        const feature = event.detail.feature;

        if (!feature.geometry) {
          const {
            features: [{ geometry }],
          } = await state.layer.queryFeatures({
            objectIds: [feature.getObjectId()],
            returnGeometry: true,
          });
          feature.geometry = geometry;
        }

        state.selectTrail(feature);
      });
    }

    //--------------------------------------------------------------------------
    //
    //  Elevation Profile
    //
    //--------------------------------------------------------------------------

    function setupElevationProfile() {
      elevationProfile.addEventListener("arcgisReady", async () => {
        elevationProfile.addEventListener("arcgisPropertyChange", (e) => {
          if (e.detail.name !== "progress") {
            return;
          }

          if (elevationProfile.progress === 1) {
            const statistics = elevationProfile.profiles.items[0].statistics;
            const gain =
              Math.round((statistics.elevationGain + Number.EPSILON) * 100) /
              100;
            const distance =
              Math.round((statistics.maxDistance + Number.EPSILON) * 100) / 100;

            document.querySelector("#elevationChip").innerText =
              gain + " " + elevationProfile.effectiveUnits.elevation;
            document.querySelector("#distanceChip").innerText =
              distance + " " + elevationProfile.effectiveUnits.distance;
          }
        });
      });
    }

    //--------------------------------------------------------------------------
    //
    //  Park List
    //
    //--------------------------------------------------------------------------

    function updateParkList(parkList, parks, filterState) {
      const trailLengthFormatter = new Intl.NumberFormat(parkList.locale, {
        style: "unit",
        unit: "kilometer",
        maximumFractionDigits: 1,
      });

      updateElementChildren(
        parkList,
        parks,
        () => document.createElement("calcite-list-item"),
        (item, park) => {
          item.label = park.key;
          item.description = `${
            park.trailCount
          } trails - ${trailLengthFormatter.format(park.totalLength / 1000)}`;
          item.value = park.key;
          item.selected = park.key === filterState.park;
        }
      );
    }

    //--------------------------------------------------------------------------
    //
    //  Trail Categories
    //
    //--------------------------------------------------------------------------

    function updateTrailCategoriesChipGroup(
      trailUseChipGroup,
      trailCategories,
      trailsFilter
    ) {
      updateElementChildren(
        trailUseChipGroup,
        trailCategories,
        () => document.createElement("calcite-chip"),
        (chip, category) => {
          chip.value = category.key;
          chip.innerText = `${category.key}  (${category.count})`;
          chip.selected =
            trailsFilter.trailUses?.includes(category.key) ?? false;
        }
      );
    }

    //--------------------------------------------------------------------------
    //
    //  React to State Changes
    //
    //--------------------------------------------------------------------------

    state.addEventListener("filterChange", () => {
      const { trailsFilter, layer } = state;
      updateTrailCategoriesChipGroup(
        trailCategoriesChipGroup,
        state.trailCategories,
        trailsFilter
      );

      const where = sqlAnd(
        createParkWhereClause(trailsFilter.park),
        createTrailUseWhereClause(trailsFilter.trailUses)
      );

      layer.featureEffect = {
        filter: {
          where,
        },
        excludedEffect: "grayscale(100%) opacity(50%)",
      };

      layer.queryObjectIds({ where }).then((objectIds) => {
        trailsTable.objectIds = objectIds;
      });

      mapElement.goTo(trailsFilter.parkExtent);
    });

    state.addEventListener("selectedTrailChange", () => {
      const trail = state.selectedTrail;
      elevationProfile.input = trail;
      trailsTable.highlightIds = trail ? [trail.getObjectId()] : [];
    });
  })());
