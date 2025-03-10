require(["esri/WebMap", "esri/geometry/Extent"], (WebMap, Extent) =>
  (async () => {
    // const mapElem = document.querySelector("arcgis-map");
    // const elevProf = document.querySelector("arcgis-elevation-profile");
    // const distanceElem = document.getElementById("distance");
    // const elevationElem = document.getElementById("elevation");

    // elevProf.addEventListener("arcgisReady", async (event) => {
    //   const profiles = elevProf.profiles;
    //   elevProf.addEventListener("arcgisPropertyChange", (e) => {
    //     if (e.detail.name === "progress" && elevProf.progress === 1) {
    //       stats = profiles.items[0].statistics;
    //       const elevGain =
    //         Math.round((stats.elevationGain + Number.EPSILON) * 100) / 100;
    //       const distance =
    //         Math.round((stats.maxDistance + Number.EPSILON) * 100) / 100;
    //       elevationElem.innerText =
    //         elevGain + " " + elevProf.effectiveUnits.elevation;
    //       distanceElem.innerText =
    //         distance + " " + elevProf.effectiveUnits.distance;
    //     }
    //   });
    // });

    const mapElement = document.querySelector("#mapElement");
    const parkList = document.querySelector("#parkList");
    const trailUseChipGroup = document.querySelector("#trailUseChipGroup");
    const trailsTable = document.querySelector("#trailsTable");

    const elevationPanel = document.querySelector("#elevationPanel");
    const elevationProfile = document.querySelector("#elevationProfile");

    const trailsFilter = {
      park: null,
      parkExtent: null,
      trailUses: null,
      trailLength: null,
    };

    const state = {
      trailsFilter,
      selectedTrail: null,
    };

    const map = new WebMap({
      portalItem: {
        id: "f599313f70204fc79bcc2885db89d09f",
      },
    });

    mapElement.map = map;
    mapElement.constraints = {
      snapToZoom: false,
    };

    await map.load();
    const trailsLayer = map.layers.find((layer) => layer.title === "Trails");

    trailsTable.layer = trailsLayer;

    setupFilterPanel(map, trailsFilter);
    setupTrailsTable();
    setupElevationProfile();

    function setupTrailsTable() {
      trailsTable.addEventListener("arcgisCellClick", async (event) => {
        const feature = event.detail.feature;
        if (!feature.geometry) {
          const {
            features: [{ geometry }],
          } = await trailsLayer.queryFeatures({
            objectIds: [feature.getObjectId()],
            returnGeometry: true,
          });
          feature.geometry = geometry;
        }
        setSelectedTrail(event.detail.feature);
      });
    }

    function setupElevationProfile() {
      elevationProfile.addEventListener("arcgisReady", async () => {
        elevationProfile.addEventListener("arcgisPropertyChange", (e) => {
          if (e.detail.name !== "progress") {
            return;
          }

          const loading = elevationProfile.progress < 1;
          elevationPanel.loading = loading;

          if (!loading) {
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

    function setSelectedTrail(feature) {
      state.selectedTrail = feature;
      updateSelectedTrail();
    }

    async function updateSelectedTrail() {
      const trail = state.selectedTrail;
      elevationProfile.input = trail;
      trailsTable.highlightIds = trail ? [trail.getObjectId()] : [];
    }

    parkList.addEventListener("calciteListChange", () => {
      const item = parkList.selectedItems[0];
      trailsFilter.park = item.value;
      trailsFilter.parkExtent = Extent.fromJSON(
        JSON.parse(item.dataset.extent)
      );
      updateSelectedTrails(mapElement, trailsLayer, trailsFilter);
    });

    trailUseChipGroup.addEventListener("calciteChipGroupSelect", () => {
      trailsFilter.trailUses = trailUseChipGroup.selectedItems.map(
        (chip) => chip.value
      );
      updateSelectedTrails(mapElement, trailsLayer, trailsFilter);
    });

    async function setupFilterPanel(map, filterState) {
      const trailsLayer = map.layers.find((layer) => layer.title === "Trails");

      // Create bookmarks
      const parks = await fetchParks(trailsLayer);
      updateParkList(parkList, parks, filterState);

      // Populate the trail categories filter
      const trailCategories = await fetchTrailUseCategories(trailsLayer);
      updateTrailUseChipGroup(trailUseChipGroup, trailCategories, filterState);
    }

    async function updateSelectedTrails(mapElement, trailsLayer, filterState) {
      const trailCategories = await fetchTrailUseCategories(trailsLayer);
      updateTrailUseChipGroup(trailUseChipGroup, trailCategories, filterState);

      const where = sqlAnd(
        createParkWhereClause(filterState.park),
        createTrailUseWhereClause(filterState.trailUses),
        createTrailLengthWhereClause(filterState.trailLength)
      );

      trailsLayer.featureEffect = {
        filter: {
          where,
        },
        excludedEffect: "grayscale(100%) opacity(50%)",
      };

      trailsLayer.queryObjectIds({ where }).then((objectIds) => {
        trailsTable.objectIds = objectIds;
      });

      mapElement.goTo(filterState.parkExtent);
    }

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

    function updateParkList(parkList, parks, filterState) {
      const trailLengthFormatter = new Intl.NumberFormat(parkList.locale, {
        style: "unit",
        unit: "kilometer",
        maximumFractionDigits: 1,
      });

      updateChildren(
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
          item.dataset.extent = JSON.stringify(park.extent);
        }
      );
    }

    async function fetchTrailUseCategories(trailsLayer) {
      await trailsLayer.load();
      const trailUseField = trailsLayer.fieldsIndex.get("TRLUSE");

      const query = trailsLayer.createQuery();
      query.where = sqlAnd(
        query.where,
        createParkWhereClause(trailsFilter.park)
      );

      query.groupByFieldsForStatistics = [trailUseField.name];
      query.outStatistics = [
        {
          onStatisticField: trailUseField.name,
          outStatisticFieldName: "count",
          statisticType: "count",
        },
      ];

      const trailUseValues = await trailsLayer.queryFeatures(query);

      // clean up the data
      const trailCategoriesCounts = {
        Hiking: 0,
        Walking: 0,
        Biking: 0,
        "Horseback Riding": 0,
        Other: 0,
      };

      for (const feature of trailUseValues.features) {
        const trailUse = feature.attributes[trailUseField.name];
        const count = feature.attributes.count;

        const trailUses = trailUse
          .split(/[\|\/,]|(?:\s+and\s+)|(?:\s+And\s+)|(?:\s+Or\s+)/g)
          .map((value) => value.trim())
          .filter((value) => value);

        for (const trailUseValue of trailUses) {
          const normalizedTrailUse = getTrailUseValue(trailUseValue);
          trailCategoriesCounts[normalizedTrailUse] += count;
        }
      }

      return Object.keys(trailCategoriesCounts).map((key) => {
        return {
          key,
          count: trailCategoriesCounts[key],
        };
      });
    }

    function updateTrailUseChipGroup(
      trailUseChipGroup,
      trailCategories,
      filterState
    ) {
      updateChildren(
        trailUseChipGroup,
        trailCategories,
        () => document.createElement("calcite-chip"),
        (chip, category) => {
          chip.value = category.key;
          chip.innerText = `${category.key}  (${category.count})`;
          chip.selected =
            filterState.trailUses?.includes(category.key) ?? false;
        }
      );
    }

    function createParkWhereClause(park) {
      return park ? `UNITNAME = '${park}'` : "";
    }

    function createTrailUseWhereClause(trailUses) {
      return (
        trailUses
          ?.map((trailUse) => `TRLUSE LIKE '%${trailUse}%'`)
          .join(" OR ") ?? ""
      );
    }

    function createTrailLengthWhereClause(trailLength) {
      return trailLength ? `Trail_Length < ${trailLength}` : "";
    }

    function sqlAnd(...clauses) {
      return clauses
        .filter((clause) => clause)
        .map((clause) => `(${clause})`)
        .join(" AND ");
    }

    /**
     * Updates a list of children in a container element
     */
    function updateChildren(element, items, createChild, updateChild) {
      const existingChildren = Array.from(element.children);
      const existingChildrenMap = new Map(
        existingChildren.map((child) => [child.dataset.key, child])
      );

      items.forEach((item, index) => {
        let child = existingChildrenMap.get(item.key);
        if (!child) {
          child = createChild(item);
          updateChild(child, item);
          child.dataset.key = item.key;
          element.insertBefore(child, element.children[index] || null);
        } else {
          updateChild(child, item);
          existingChildrenMap.delete(item.key);
          if (element.children[index] !== child) {
            element.insertBefore(child, element.children[index] || null);
          }
        }
      });

      existingChildrenMap.forEach((child) => element.removeChild(child));
    }

    const trailCategoryValues = {
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

    function getTrailUseValue(trailUse) {
      for (const [key, values] of Object.entries(trailCategoryValues)) {
        if (values.has(trailUse)) {
          return key;
        }
      }
      trailCategoryValues.Other.add(trailUse);
      return "Other";
    }

    function createTrailUseWhereClause(trailUses) {
      return (
        trailUses
          ?.map((trailUse) =>
            Array.from(
              trailCategoryValues[trailUse],
              (trailUse) => `TRLUSE LIKE '%${trailUse}%'`
            )
          )
          .flat()
          .join(" OR ") ?? ""
      );
    }
  })());
