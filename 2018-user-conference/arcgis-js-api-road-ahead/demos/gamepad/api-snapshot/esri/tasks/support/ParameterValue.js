// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["../../core/JSONSupport","../../core/kebabDictionary"],function(b,a){a=a({GPString:"string",GPDouble:"double",GPLong:"long",GPBoolean:"boolean",GPDate:"date",GPLinearUnit:"linear-unit",GPDataFile:"data-file",GPRasterData:"raster-data",GPRecordSet:"record-set",GPRasterDataLayer:"raster-data-layer",GPFeatureRecordSetLayer:"feature-record-set-layer",GPMultiValue:"multi-value"});return b.createSubclass({declaredClass:"esri.tasks.support.ParameterValue",properties:{dataType:{value:null,json:{read:a.fromJSON,
write:a.toJSON}},value:null}})});