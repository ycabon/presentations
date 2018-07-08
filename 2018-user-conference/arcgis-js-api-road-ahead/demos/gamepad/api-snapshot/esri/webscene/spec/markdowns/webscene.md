# Webscene

The web scene data lists the basemap, operational layers, and bookmarks to be used in the web scene. It also contains information about pop-up windows and layer styling overrides to be used in the web scene. A version property allows you to supply the version of the web scene JSON format being used

### Properties

| Property | Details
| --- | ---
| [applicationProperties](applicationProperties.md) | Configuration of application and UI elements.
| authoringApp | String value indicating the application which authored the webmap
| authoringAppVersion | String value indicating the authoring App's version number.
| [baseMap](baseMap.md) | Basemaps give the web scene a geographic context.
| [clippingArea](clippingArea.md) | Defines area to be clipped for display.
| [ground](ground.md) | Ground defines the main surface of the web scene, based on elevation layers.
| [heightModelInfo](heightModelInfo.md) | An object that defines the characteristics of the vertical coordinate system used by the web scene.
| [initialState](initialState.md) | An envelope object defines the initial state at which to open the scene.
| [mapRangeInfo](mapRangeInfo.md) | Map Range Information
| [operationalLayers](operationalLayers.md) | Operational layers contain business data which are used to make thematic scenes.
| [presentation](presentation.md) | A presentation consists of multiple slides, where each slide is a specific view into the web scene.
| [spatialReference](spatialReference.md) | An object used to specify the spatial reference of the given geometry.
| [tables](table.md) | An array of table objects.
| [version](version.md) | Root element in the web scene specifying a string value indicating the web scene version.
| viewingMode | Type:`String`<br>Must be one of the following values:<ul><li>`global`</li><li>`local`</li></ul>
| [widgets](widgets.md) | the widgets object contains widgets that should be exposed to the user.



