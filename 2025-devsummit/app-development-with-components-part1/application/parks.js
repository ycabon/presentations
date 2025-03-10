define([], function () {
  async function fetchParks(layer) {
    await layer.load();
    const field = layer.fieldsIndex.get("UNITNAME");

    const query = layer.createQuery();

    query.groupByFieldsForStatistics = [field.name];
    query.outStatistics = [
      {
        onStatisticField: field.name,
        outStatisticFieldName: "trailCount",
        statisticType: "count",
      },
      {
        onStatisticField: "Trail_Length",
        outStatisticFieldName: "totalLength",
        statisticType: "sum",
      },
      {
        statisticType: "envelope-aggregate",
      },
    ];

    const result = await layer.queryFeatures(query);
    const features = result.features.sort(
      (a, b) => b.attributes.totalLength - a.attributes.totalLength
    );

    return features.map((feature) => {
      return {
        key: feature.attributes["UNITNAME"],
        trailCount: feature.attributes["trailCount"],
        totalLength: feature.attributes["totalLength"],
        extent: feature.aggregateGeometries.extent,
      };
    });
  }

  function createParkWhereClause(park) {
    return park ? `UNITNAME = '${park}'` : "";
  }

  return {
    fetchParks,
    createParkWhereClause,
  };
});
