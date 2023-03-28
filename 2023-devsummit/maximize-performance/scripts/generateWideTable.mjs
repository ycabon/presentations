import "./fetchPolyfill.mjs";
import request from "@arcgis/core/request.js";

const response = await request(
  "https://services.arcgis.com/jIL9msH9OI208GCb/arcgis/rest/services/Global_Temperatures_1880_to_2018/FeatureServer/0/query",
  {
    query: {
      outFields: "*",
      where: "1=1",
      returnGeometry: true,
      maxRecordCountFactor: 8,
      outSR: 4326,
      f: "json",
    },
  }
);

const features = response.data.features;

const featureCollection = {
  type: "FeatureCollection",
  features: [],
};

for (let feature of features) {
  const { OBJECTID, ...properties } = feature.attributes;
  featureCollection.features.push({
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [feature.geometry.x, feature.geometry.y],
    },
    properties,
  });
}

console.log(JSON.stringify(featureCollection));
