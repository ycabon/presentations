
# ArcGIS Web Scene Specification

Specification for the ArcGIS web scene document format.  

Latest released version is available publicly at [developers.arcgis.com/web-scene-specification/](https://developers.arcgis.com/web-scene-specification/)

### Content

* [src/](./src/): the web scene json schema files
* [markdowns/](./markdowns): the documentation generated from the src schema files
* [samples/](./samples): sample web scenes for reference and testing


### Contributing

1. Create a new issue that explains the proposal, describes the requirements, and adds some initial mock of spec if possible.
2. [Create a schema PR](https://devtopia.esri.com/WebGIS/webscene-spec/wiki/Documentation-rules) with the proposed spec change
    * If you're not familiar with creating a schema PR, find a schema person to do these steps
3. For information specific to adding new features that relate to the ArcGIS Javascript API, see also https://devtopia.esri.com/WebGIS/arcgis-js-api/wiki/Implementing-features-that-affect-webscene-persistence-model-(read-write)

---------------------------------


#### Version / Releases
* webscene-spec is versioned as `major.minor`, e.g. `1.5`
* major number denotes a breaking change: `2.x` web scenes cannot be read by a `1.x` client, and must be rejected
* to indicate patch releases between versions, webscene-spec releases are numbered with an additional patch number `z`, (`x.y.z`)
* [latest](https://devtopia.esri.com/Zurich-R-D-Center/webscene-spec/releases/latest) release, [all releases](https://devtopia.esri.com/Zurich-R-D-Center/webscene-spec/releases)
* versions < 1.5 are not schema-based
* see also [wiki](../../wiki)



#### Branching
* Milestones for [past](https://devtopia.esri.com/Zurich-R-D-Center/webscene-spec/milestones?state=closed) and 
  [upcoming](https://devtopia.esri.com/Zurich-R-D-Center/webscene-spec/milestones?state=open) Web Scene Specification releases
  include information about release date and target products/versions
* Release branch for each "shipped" Web Scene Specification version, e.g. `v1.5`
  * The spec release typically happens around the time that the involved products freeze for release 
  * Release branches branch off `master`
  * Release branch gets a release tag when the doc is deployed to [developers.arcgis.com](https://developers.arcgis.com/web-scene-specification/)
* `master` branch contains the latest developments, which are typically released with upcoming version
  * Proposals are thus typically created by branching from (and merging into) `master`


#### Tooling
[Schema-tooling repo](https://devtopia.esri.com/dyla8445/schema-tooling/) contains various tools for schema and document validation, and markdown generation, and infos on [deploying doc](https://devtopia.esri.com/dyla8445/schema-tooling/wiki/Deploying-to-Developers-Site)


