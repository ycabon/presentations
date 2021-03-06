const Papa = require("./PapaParse-4.6.0/papaparse.min.js");
const fetch = require("node-fetch");

(async function() {
  const response = await fetch("./communes-20190101.json");
  const json = await response.json();

  const csvRes = await fetch("./median_income.csv");
  const csv = await csvRes.text();

  // https://sandbox.idre.ucla.edu/sandbox/general/optimize-geojson
  function trimCoords(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        trimCoords(arr[i]);
      }
      else {
        arr[i] = Math.round(arr[i] * 100000) / 100000;
      }
    }

    return arr;
  }

  const { data } = Papa.parse(csv);
  const medianIncomeByCodeInsee = new Map();
  for (let i = 1; i < data.length; i++) {
    medianIncomeByCodeInsee.set(data[i][0], parseFloat(data[i][2]));
  }

  const output = { type: "FeatureCollection", features: [] }

  for (const feature of json.features) {
    const { geometry: { coordinates }, properties: { insee, nom } } = feature;
    const inseeData = medianIncomeByCodeInsee.get(insee);

    if (inseeData == undefined) {
      continue;
    }

    output.features.push(feature);
    feature.properties.medianIncome2015 = inseeData;
    trimCoords(coordinates);
  }

  console.log(JSON.stringify(output, null, 2));

})();