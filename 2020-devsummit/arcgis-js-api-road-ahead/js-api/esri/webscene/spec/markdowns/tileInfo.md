# tileInfo

Tile information, returned from the WMTS OGC Web Service. The tileInfo will contain the spatial reference of the layer. tileInfo is the same json representation as the ArcGIS Map/Image service tileInfo except that it may contain a levelValue on the lod objects that should be used instead of the level in the templateUrl.

**Referenced by:** [WebTiledLayer](webTiledLayer.md)

### Properties

| Property | Details
| --- | ---
| cols | Requested tile's column.
| compressionQuality | Compression quality of the tile.
| dpi | The dpi of the tiling scheme.
| [lods](lod.md) | An array of levels of detail that define the tiling scheme.
| [origin](point_geometry.md) | The tiling scheme origin.
| rows | Requested tile's row.
| [spatialReference](spatialReference.md) | The spatial reference of the tiling schema.



