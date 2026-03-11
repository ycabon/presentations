// Import application modules
import { sqlAnd, updateElementChildren } from "./application/utils.js";
import { fetchParks, createParkWhereClause } from "./application/parks.js";
import {
  fetchTrailCategories,
  createTrailUseWhereClause,
} from "./application/trailCategories.js";

// Import Maps SDK modules.
//   $arcgis.import() is a convenience method that loads the specified modules from the CDN,
//   which are optimized (AMD bundles).
const [WebMap, reactiveUtils] = await $arcgis.import([
  "esri/WebMap",
  "esri/core/reactiveUtils",
]);

//--------------------------------------------------------------------------
//
//  DOM Elements
//
//--------------------------------------------------------------------------

// Access the references to my elements on the page
const mapElement = document.querySelector("#mapElement");
const parkList = document.querySelector("#parkList");
const trailCategoriesChipGroup = document.querySelector(
  "#trailCategoriesChipGroup"
);
const trailsTable = document.querySelector("#trailsTable");
const elevationProfile = document.querySelector("#elevationProfile");
const search = document.querySelector("#search");

//--------------------------------------------------------------------------
//
//  State
//
//--------------------------------------------------------------------------

class ApplicationStateManager extends EventTarget {
  constructor() {
    super();

    this.map = new WebMap({
      portalItem: {
        id: "6039081f19164d558782985ba9885669",
      },
      ground: "world-elevation",
    });

    // The available trails categories with the matching trail counts
    this.trailCategories = [];

    // The list of parks
    this.parks = [];
    this.parksByName = new Map();

    // The user selection
    this.selectedTrailCategories = [];
    this.selectedParkName = null;
    this.selectedTrail = null;
  }

  // A computed property representing the current park extent
  get selectedParkExtent() {
    return this.parksByName.get(this.selectedParkName)?.extent ?? null;
  }

  async load() {
    await this.map.load();

    // Alternatively, the map can be accessed when the <arcgis-map> element
    // emits the "arcgisViewReadyChange" event.
    // This is equivalent to MapView.when()
    //
    // mapElement.addEventListener("arcgisViewReadyChange", () => {
    //   this.map = mapElement.map;
    // });

    this.layer = this.map.layers.find((layer) => layer.title === "Trails");

    // Update the data the first time
    await Promise.all([this.#updateParkList(), this.#updateTrailCategories()]);
  }

  // Selects a park by name
  // Updates the trail categories based on the park
  async selectPark(parkName) {
    const park = this.parksByName.get(parkName);
    this.selectedParkName = park.name;
    await this.#updateTrailCategories();
    this.dispatchEvent(new CustomEvent("filterChange"));
  }

  // Selects trail categories
  selectTrailCategories(categories) {
    this.selectedTrailCategories = categories;
    this.dispatchEvent(new CustomEvent("filterChange"));
  }

  // Selects a trail
  // Fetches the trail geometry if it's not part of the feature
  async selectTrail(feature) {
    // Fetch the geometry if it's not already available
    if (feature && !feature.geometry) {
      const {
        features: [{ geometry }],
      } = await state.layer.queryFeatures({
        objectIds: [feature.getObjectId()],
        returnGeometry: true,
      });
      feature.geometry = geometry;
    }

    this.selectedTrail = feature;
    this.dispatchEvent(new CustomEvent("selectedTrailChange"));
  }

  async #updateParkList() {
    const parks = await fetchParks(this.layer);
    this.parks = parks;
    this.parksByName = new Map(
      parks.map((park) => {
        return [park.name, park];
      })
    );
  }

  async #updateTrailCategories() {
    const trailCategories = await fetchTrailCategories(
      this.layer,
      this.selectedParkName
    );
    this.trailCategories = trailCategories;
  }
}

const state = new ApplicationStateManager();

mapElement.map = state.map;
mapElement.constraints = {
  snapToZoom: false,
};

await state.load();

setupFilterPanel();
setupTrailsTable();
setupElevationProfile();
setupPopup();
setupSearch();

//--------------------------------------------------------------------------
//
//  Filter Panel
//
//--------------------------------------------------------------------------

function setupFilterPanel() {
  // Updates the calcite list with the bookmarks
  updateParkList(parkList, state.parks, state.selectedParkName);

  // Populates the trail categories chip group
  updateTrailCategoriesChipGroup(
    trailCategoriesChipGroup,
    state.trailCategories,
    state.selectedTrailCategories
  );

  // Listens for changes to update the state
  parkList.addEventListener("calciteListChange", () => {
    const item = parkList.selectedItems[0];
    state.selectTrail(null);
    state.selectPark(item.value);
  });

  trailCategoriesChipGroup.addEventListener("calciteChipGroupSelect", () => {
    state.selectTrailCategories(
      trailCategoriesChipGroup.selectedItems.map((chip) => chip.value)
    );
  });
}

function setupTrailsTable() {
  // Connect the table with the layer
  trailsTable.layer = state.layer;

  // Listens for changes to update the state
  trailsTable.addEventListener("arcgisCellClick", async (event) => {
    state.selectTrail(event.detail.feature);
  });
}

async function setupElevationProfile() {
  // Format units in metric
  const gainFormatter = new Intl.NumberFormat(elevationProfile.locale, {
    style: "unit",
    unit: "meter",
    maximumFractionDigits: 1,
  });
  const distanceFormatter = new Intl.NumberFormat(elevationProfile.locale, {
    style: "unit",
    unit: "kilometer",
    maximumFractionDigits: 1,
  });

  const analysisView = await mapElement.whenAnalysisView(
    elevationProfile.analysis
  );

  reactiveUtils.watch(
    () => analysisView.statistics,
    (statistics) => {
      const elevationElement = document.querySelector("#elevationChip");
      const distanceElement = document.querySelector("#distanceChip");

      if (!statistics) {
        elevationElement.innerText = distanceElement.innerText = "";
        return;
      }

      const formatter = new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 2,
        style: "unit",
        unit: "meter",
      });
      const elevationGain = formatter.format(statistics.elevationGain);
      const distance = formatter.format(statistics.maxDistance);
      elevationElement.innerText = elevationGain;
      distanceElement.innerText = distance;
    }
  );
}

function setupPopup() {
  // Docks the popup on top-right corner
  mapElement.popup = {
    actions: [],
    dockEnabled: true,
    dockOptions: {
      buttonEnabled: false,
      breakpoint: false,
    },
  };

  // Select the trail when the popup is opened
  reactiveUtils.watch(
    () => mapElement.popup.selectedFeature,
    (feature) => {
      if (feature) {
        state.selectTrail(feature);
      }
    }
  );
}

function setupSearch() {
  // Selects the trail when users search for it
  search.addEventListener("arcgisSelectResult", (event) => {
    const { result } = event.detail;
    state.selectTrail(result.feature);
  });
}

//--------------------------------------------------------------------------
//
//  React to State Changes
//
//--------------------------------------------------------------------------

state.addEventListener("filterChange", () => {
  const layer = state.layer;

  // Reflect the new selected trail categories in the UI
  updateTrailCategoriesChipGroup(
    trailCategoriesChipGroup,
    state.trailCategories,
    state.selectedTrailCategories
  );

  // Create a where clause to filter the trails
  //   - by park name
  //   - by trail use categories
  const where = sqlAnd(
    createParkWhereClause(state.selectedParkName),
    createTrailUseWhereClause(state.selectedTrailCategories)
  );

  // De-emphasize trails that don't match the filter
  layer.featureEffect = {
    filter: {
      where,
    },
    excludedEffect: "grayscale(100%) blur(4px) opacity(50%)",
  };

  // Update the trails table with the filtered trails
  layer.queryObjectIds({ where }).then((objectIds) => {
    trailsTable.objectIds = objectIds;
  });

  // Zoom to the selected park
  mapElement.goTo(state.selectedParkExtent);
});

state.addEventListener("selectedTrailChange", () => {
  const trail = state.selectedTrail;

  // Generates the elevation profile
  elevationProfile.feature = trail;

  // Select the trail in the table
  trailsTable.highlightIds = trail ? [trail.getObjectId()] : [];

  // Navigate to the trail
  if (trail) {
    mapElement.goTo(state.selectedTrail);
    mapElement.openPopup({ features: [trail] });
  } else {
    mapElement.closePopup();
  }
});

//--------------------------------------------------------------------------
//
//  DOM updates
//
//--------------------------------------------------------------------------

function updateParkList(parkList, parks, selectedParkName) {
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
      item.label = park.name;
      item.description = `${
        park.trailCount
      } trails - ${trailLengthFormatter.format(park.totalLength / 1000)}`;
      item.value = park.name;
      item.selected = park.name === selectedParkName;
    }
  );
}

function updateTrailCategoriesChipGroup(
  trailUseChipGroup,
  trailCategories,
  selectedTrailCategories
) {
  updateElementChildren(
    trailUseChipGroup,
    trailCategories,
    () => document.createElement("calcite-chip"),
    (chip, category) => {
      chip.value = category.name;
      chip.innerText = `${category.name}  (${category.count})`;
      chip.selected = selectedTrailCategories.includes(category.name) ?? false;
    }
  );
}
