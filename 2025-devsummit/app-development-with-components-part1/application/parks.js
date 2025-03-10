/**
 * Fetches park data from the given layer, including trail count, total trail length, and extent.
 *
 * @param {Object} layer - The layer from which to fetch park data. The layer must support querying and statistics.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of park data objects, each containing:
 *   - {string} name - The name of the park unit.
 *   - {number} trailCount - The number of trails in the park unit.
 *   - {number} totalLength - The total length of trails in the park unit.
 *   - {Object} extent - The extent of the park unit.
 */
export async function fetchParks(layer) {
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
      name: feature.attributes["UNITNAME"],
      trailCount: feature.attributes["trailCount"],
      totalLength: feature.attributes["totalLength"],
      extent: feature.aggregateGeometries.extent,
    };
  });
}

export function createParkWhereClause(park) {
  return park ? `UNITNAME = '${park}'` : "";
}
