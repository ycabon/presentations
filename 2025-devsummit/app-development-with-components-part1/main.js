//developers.arcgis.com/javascript/latest/programming-patterns/#set-the-portalurl-in-an-amd-application

import { sqlAnd, updateElementChildren } from "./application/utils.js";
import { fetchParks, createParkWhereClause } from "./application/parks.js";
import {
  fetchTrailCategories,
  createTrailUseWhereClause,
} from "./application/trailCategories.js";

// Import Maps SDK modules
const WebMap = await $arcgis.import("esri/WebMap");

//--------------------------------------------------------------------------
//
//  DOM Elements
//
//--------------------------------------------------------------------------

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

class ApplicationState extends EventTarget {
  constructor() {
    super();

    this.map = new WebMap({
      portalItem: {
        id: "f599313f70204fc79bcc2885db89d09f",
      },
    });

    this.trailCategories = [];
    this.parks = [];
    this.parksByName = new Map();

    this.selectedTrailCategories = [];
    this.selectedParkName = null;
    this.selectedTrail = null;
  }

  get selectedParkExtent() {
    return this.parksByName.get(this.selectedParkName)?.extent ?? null;
  }

  async load() {
    await this.map.load();

    this.layer = this.map.layers.find((layer) => layer.title === "Trails");

    await Promise.all([this.#updateParkList(), this.#updateTrailCategories()]);
  }

  async selectPark(parkName) {
    const park = this.parksByName.get(parkName);
    this.selectedParkName = park.name;
    this.#updateTrailCategories();
    this.dispatchEvent(new CustomEvent("filterChange"));
  }

  selectTrailCategories(categories) {
    this.selectedTrailCategories = categories;
    this.dispatchEvent(new CustomEvent("filterChange"));
  }

  selectTrail(feature) {
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
    this.dispatchEvent(new CustomEvent("filterChange"));
  }
}

const state = new ApplicationState();

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
  updateParkList(parkList, state.parks, state.selectedParkName);

  // Populate the trail categories filter
  updateTrailCategoriesChipGroup(
    trailCategoriesChipGroup,
    state.trailCategories,
    state.selectedTrailCategories
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
          Math.round((statistics.elevationGain + Number.EPSILON) * 100) / 100;
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

//--------------------------------------------------------------------------
//
//  Trail Categories
//
//--------------------------------------------------------------------------

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

//--------------------------------------------------------------------------
//
//  React to State Changes
//
//--------------------------------------------------------------------------

state.addEventListener("filterChange", () => {
  const layer = state.layer;

  updateTrailCategoriesChipGroup(
    trailCategoriesChipGroup,
    state.trailCategories,
    state.selectedTrailCategories
  );

  const where = sqlAnd(
    createParkWhereClause(state.selectedParkName),
    createTrailUseWhereClause(state.selectedTrailCategories)
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

  mapElement.goTo(state.selectedParkExtent);
});

state.addEventListener("selectedTrailChange", () => {
  const trail = state.selectedTrail;
  elevationProfile.input = trail;
  trailsTable.highlightIds = trail ? [trail.getObjectId()] : [];
});
