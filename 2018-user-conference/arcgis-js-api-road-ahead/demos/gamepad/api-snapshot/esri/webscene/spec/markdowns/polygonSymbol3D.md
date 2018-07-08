# PolygonSymbol3D

PolygonSymbol3D is used to render features with Polygon geometry in a 3D SceneView. Polygon features may also be rendered as points with icons or objects at the centroid of each polygon.

### Properties

| Property | Details
| --- | ---
| [styleOrigin](styleOrigin.md) | The origin of the style from which the symbol was originally referenced.
| symbolLayers | A Collection of Symbol3DLayer objects used to visualize the graphic or feature.<br>Array of items of the following types: <ul><li>[fillSymbol3DLayer](fillSymbol3DLayer.md)<br>FillSymbol3DLayer is used to render the surfaces of flat 2D Polygon geometries and 3D volumetric meshes in a SceneView.</li><li>[extrudeSymbol3DLayer](extrudeSymbol3DLayer.md)<br>ExtrudeSymbol3DLayer is used to render Polygon geometries by extruding them upward from the ground, creating a 3D volumetric object.</li><li>[iconSymbol3DLayer](iconSymbol3DLayer.md)<br>IconSymbol3DLayer is used to render Point geometries using a flat 2D icon (e.g. a circle) with a PointSymbol3D in a SceneView.</li><li>[objectSymbol3DLayer](objectSymbol3DLayer.md)<br>ObjectSymbol3DLayer is used to render Point geometries using a volumetric 3D shape (e.g., a sphere or cylinder) with a Symbol3D in a SceneView.</li><li>[lineSymbol3DLayer](lineSymbol3DLayer.md)<br><em>Deprecated</em>, use [fillSymbol3DLayer with outline](fillSymbol3DLayer.md) instead</li></ul>
| type | Specifies the type of symbol used.<br>Value of this property must be `PolygonSymbol3D`



