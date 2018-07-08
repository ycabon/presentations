# LineSymbol3D

LineSymbol3D is used to render features with Polyline geometry in a 3D SceneView.

### Properties

| Property | Details
| --- | ---
| [styleOrigin](styleOrigin.md) | The origin of the style from which the symbol was originally referenced.
| symbolLayers | A Collection of Symbol3DLayer objects used to visualize the graphic or feature.<br>Array of items of the following types: <ul><li>[lineSymbol3DLayer](lineSymbol3DLayer.md)<br>LineSymbol3DLayer renders Polyline geometries using a flat 2D line with a LineSymbol3D in a 3D SceneView.</li><li>[pathSymbol3DLayer](pathSymbol3DLayer.md)<br>PathSymbol3DLayer renders Polyline geometries using a volumetric 3D tube with a LineSymbol3D in a SceneView.</li></ul>
| type | Specifies the type of symbol used.<br>Value of this property must be `LineSymbol3D`



