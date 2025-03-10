define(["./utils", "./parks"], function (
  { sqlAnd },
  { createParkWhereClause }
) {
  async function fetchTrailCategories(layer, trailsFilter) {
    await layer.load();

    const trailUseFieldName = "TRLUSE";
    const query = layer.createQuery();

    query.where = sqlAnd(query.where, createParkWhereClause(trailsFilter.park));
    query.groupByFieldsForStatistics = [trailUseFieldName];
    query.outStatistics = [
      {
        onStatisticField: trailUseFieldName,
        outStatisticFieldName: "count",
        statisticType: "count",
      },
    ];

    const trailUseStatistics = await layer.queryFeatures(query);
    const trailCategories = getTrailCategories(
      trailUseStatistics.features,
      trailUseFieldName
    );

    return trailCategories;
  }

  function createTrailUseWhereClause(categories) {
    return (
      categories
        ?.map((category) =>
          Array.from(
            getTrailUsesForCategory(category),
            (trailUse) => `TRLUSE LIKE '%${trailUse}%'`
          )
        )
        .flat()
        .join(" OR ") ?? ""
    );
  }

  /**
   * Calculates the counts of different trail use categories from the given statistics features.
   *
   * @param {Array<Object>} statisticsFeatures - An array of feature objects containing trail use data.
   * @param {string} trailUseFieldName - The name of the field in the feature attributes that contains the trail use information.
   *
   * @returns {Array<Object>} An array of objects representing the trail use categories and their respective counts.
   * @property {string} key - The name of the trail use category.
   * @property {number} count - The count of the trail use category.
   */
  function getTrailCategories(statisticsFeatures, trailUseFieldName) {
    const trailCategoriesCounts = {
      Hiking: 0,
      Walking: 0,
      Biking: 0,
      "Horseback Riding": 0,
      Other: 0,
    };

    for (const feature of statisticsFeatures) {
      const trailUse = feature.attributes[trailUseFieldName];
      const count = feature.attributes.count;

      const trailUses = trailUse
        .split(/[\|\/,]|(?:\s+and\s+)|(?:\s+And\s+)|(?:\s+Or\s+)/g)
        .map((value) => value.trim())
        .filter((value) => value);

      for (const trailUseValue of trailUses) {
        const category = getCategoryForTrailUse(trailUseValue);
        trailCategoriesCounts[category] += count;
      }
    }

    return Object.keys(trailCategoriesCounts).map((key) => {
      return {
        key,
        count: trailCategoriesCounts[key],
      };
    });
  }

  const trailCategories = {
    Hiking: new Set(["Hiking", "Hike", "Hiker", "Hilke", "Trail"]),
    Walking: new Set([
      "Foot",
      "Pedestrian",
      "Pedestrian - No Pets",
      "Pedetrian",
    ]),
    Biking: new Set(["Biking", "Bike", "Biker", "Bicycle"]),
    "Horseback Riding": new Set([
      "Horseback Riding",
      "Horse",
      "Saddle",
      "PackOrSaddle",
      "Pack",
    ]),
    Other: new Set(),
  };

  function getCategoryForTrailUse(trailUse) {
    for (const [key, values] of Object.entries(trailCategories)) {
      if (values.has(trailUse)) {
        return key;
      }
    }
    trailCategories.Other.add(trailUse);
    return "Other";
  }

  function getTrailUsesForCategory(category) {
    return Array.from(trailCategories[category]);
  }

  return {
    fetchTrailCategories,
    createTrailUseWhereClause,
  };
});
