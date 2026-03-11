const mapElement = document.querySelector("arcgis-map");
const tableElement = document.querySelector("arcgis-feature-table");
const searchElement = document.querySelector("arcgis-search");
const elevationProfile = document.querySelector("arcgis-elevation-profile");
const distanceElement = document.getElementById("distance");
const elevationElement = document.getElementById("elevation");
const popupElement = document.querySelector("arcgis-popup");

popupElement.dockOptions = {
  buttonEnabled: false,
  breakpoint: false,
  position: "top-right",
};

await mapElement.viewOnReady();
const view = mapElement.view;
await elevationProfile.componentOnReady();

//////////////////////////////////////////////////////
//  Table setup
//////////////////////////////////////////////////////

const trailsLayer = mapElement.map?.layers.find((layer) => {
  console.log(layer.title);
  return layer.title === "National Park Trails";
});

tableElement.layer = trailsLayer;
tableElement.multipleSelectionDisabled = true;

mapElement.addEventListener("arcgisViewChange", () => {
  tableElement.filterGeometry = mapElement.view.extent;
});

//////////////////////////////////////////////////////
//  Handle selection
//////////////////////////////////////////////////////

searchElement.addEventListener("arcgisSearchComplete", (event) => {
  const result = event.detail.results[0].results[0];
  if (result?.feature) {
    const objectId = result.feature.getObjectId();
    view.selectionManager.replace(trailsLayer, [objectId]);
  }
});

mapElement.addEventListener("arcgisViewClick", async (event) => {
  const { results } = await view.hitTest(event.detail, {
    include: [trailsLayer],
  });
  if (results?.length > 0) {
    const objectId = results[0].graphic.getObjectId();
    view.selectionManager.replace(trailsLayer, [objectId]);
  }
});

view.selectionManager.on("selection-change", async (event) => {
  const results = await view.selectionManager.getSelectedFeatures(
    [trailsLayer],
    { returnGeometry: true }
  );

  if (results.length && results[0].data.features.length) {
    const graphic = results[0].data.features[0];
    elevationProfile.feature = graphic;
    mapElement.openPopup({
      features: [graphic],
    });
  }
});
