# tileInfo

Tile information, returned from the WMTS OGC Web Service. The tileInfo will contain the spatial reference of the layer. tileInfo is the same json representation as the ArcGIS Map/Image service tileInfo except that it may contain a levelValue on the lod objects that should be used instead of the level in the templateUrl.

### Properties

| Property | Details
| --- | ---
| cols | Requested tile's column.
| compressionQuality | Compression quality of the tile.
| dpi | The dpi of the tiling scheme.
| format | Image format of the cached tiles.<br>Must be one of the following values:<ul><li>`jpg`</li><li>`png`</li><li>`png24`</li><li>`png32`</li><li>`png8`</li><li>`pdf`</li><li>`bmp`</li><li>`gif`</li><li>`svg`</li><li>`svgz`</li><li>`emf`</li><li>`ps`</li><li>`mixed`</li><li>`lerc`</li></ul>
| [lods](lod.md) | An array of levels of detail that define the tiling scheme.
| [origin](point_geometry.md) | The tiling scheme origin.
| rows | Requested tile's row.
| [spatialReference](spatialReference.md) | The spatial reference of the tiling schema.



