import "./fetchPolyfill.mjs";
import request from "@arcgis/core/request.js";

const response = await request("https://services.arcgis.com/jIL9msH9OI208GCb/arcgis/rest/services/Global_Temperatures_1880_to_2018/FeatureServer/0/query", {
  query: {
    outFields: "*",
    where: "1=1",
    returnGeometry: true,
    maxRecordCountFactor: 8,
    outSR: 4326,
    f: "json"
  }
});

const features = response.data.features;

const featureCollection = {
  type: "FeatureCollection",
  features: [

  ]
}

for (let feature of features) {
  for (attribute in feature.attributes) {
    if (attribute.startsWith("F")) {
      const year = parseInt(attribute.split("F")[1]);
      featureCollection.features.push({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [feature.geometry.x, feature.geometry.y]
        },
        properties: {
          YEAR: year,
          VALUE: feature.attributes[attribute]
        }
      })
    }
  }
}

console.log(JSON.stringify(featureCollection))
