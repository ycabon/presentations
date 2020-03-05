// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define({measures:{length:"\u9577\u3055",area:"\u9762\u7a4d",volume:"\u4f53\u7a4d",angle:"\u89d2\u5ea6"},units:{millimeters:{singular:"\u30df\u30ea\u30e1\u30fc\u30c8\u30eb",plural:"\u30df\u30ea\u30e1\u30fc\u30c8\u30eb",abbr:"mm"},centimeters:{singular:"\u30bb\u30f3\u30c1\u30e1\u30fc\u30c8\u30eb",plural:"\u30bb\u30f3\u30c1\u30e1\u30fc\u30c8\u30eb",abbr:"cm"},decimeters:{singular:"\u30c7\u30b7\u30e1\u30fc\u30c8\u30eb",plural:"\u30c7\u30b7\u30e1\u30fc\u30c8\u30eb",abbr:"dm"},meters:{singular:"\u30e1\u30fc\u30c8\u30eb",
plural:"\u30e1\u30fc\u30c8\u30eb",abbr:"m"},kilometers:{singular:"\u30ad\u30ed\u30e1\u30fc\u30c8\u30eb",plural:"\u30ad\u30ed\u30e1\u30fc\u30c8\u30eb",abbr:"\u30ad\u30ed\u30e1\u30fc\u30c8\u30eb"},inches:{singular:"\u30a4\u30f3\u30c1",plural:"\u30a4\u30f3\u30c1",abbr:"\u5185"},feet:{singular:"\u30d5\u30a3\u30fc\u30c8",plural:"\u30d5\u30a3\u30fc\u30c8",abbr:"\u30d5\u30a3\u30fc\u30c8"},yards:{singular:"\u30e4\u30fc\u30c9",plural:"\u30e4\u30fc\u30c9",abbr:"yd"},miles:{singular:"\u30de\u30a4\u30eb",plural:"\u30de\u30a4\u30eb",
abbr:"\u30de\u30a4\u30eb"},"nautical-miles":{singular:"\u6d77\u91cc",plural:"\u6d77\u91cc",abbr:"nm"},"us-feet":{singular:"\u30d5\u30a3\u30fc\u30c8 (\u7c73\u56fd)",plural:"\u30d5\u30a3\u30fc\u30c8 (\u7c73\u56fd)",abbr:"\u30d5\u30a3\u30fc\u30c8"},"square-millimeters":{singular:"\u5e73\u65b9\u30df\u30ea\u30e1\u30fc\u30c8\u30eb",plural:"\u5e73\u65b9\u30df\u30ea\u30e1\u30fc\u30c8\u30eb",abbr:"mm\u00b2"},"square-centimeters":{singular:"\u5e73\u65b9\u30bb\u30f3\u30c1\u30e1\u30fc\u30c8\u30eb",plural:"\u5e73\u65b9\u30bb\u30f3\u30c1\u30e1\u30fc\u30c8\u30eb",
abbr:"cm\u00b2"},"square-decimeters":{singular:"\u5e73\u65b9\u30c7\u30b7\u30e1\u30fc\u30c8\u30eb",plural:"\u5e73\u65b9\u30c7\u30b7\u30e1\u30fc\u30c8\u30eb",abbr:"dm\u00b2"},"square-meters":{singular:"\u5e73\u65b9\u30e1\u30fc\u30c8\u30eb",plural:"\u5e73\u65b9\u30e1\u30fc\u30c8\u30eb",abbr:"m\u00b2"},"square-kilometers":{singular:"\u5e73\u65b9\u30ad\u30ed\u30e1\u30fc\u30c8\u30eb",plural:"\u5e73\u65b9\u30ad\u30ed\u30e1\u30fc\u30c8\u30eb",abbr:"km\u00b2"},"square-inches":{singular:"\u5e73\u65b9\u30a4\u30f3\u30c1",
plural:"\u5e73\u65b9\u30a4\u30f3\u30c1",abbr:"in\u00b2"},"square-feet":{singular:"\u5e73\u65b9\u30d5\u30a3\u30fc\u30c8",plural:"\u5e73\u65b9\u30d5\u30a3\u30fc\u30c8",abbr:"ft\u00b2"},"square-yards":{singular:"\u5e73\u65b9\u30e4\u30fc\u30c9",plural:"\u5e73\u65b9\u30e4\u30fc\u30c9",abbr:"yd\u00b2"},"square-miles":{singular:"\u5e73\u65b9\u30de\u30a4\u30eb",plural:"\u5e73\u65b9\u30de\u30a4\u30eb",abbr:"mi\u00b2"},"square-us-feet":{singular:"\u5e73\u65b9\u30d5\u30a3\u30fc\u30c8 (\u7c73\u56fd)",plural:"\u5e73\u65b9\u30d5\u30a3\u30fc\u30c8 (\u7c73\u56fd)",
abbr:"ft\u00b2"},acres:{singular:"\u30a8\u30fc\u30ab\u30fc",plural:"\u30a8\u30fc\u30ab\u30fc",abbr:"\u30a8\u30fc\u30ab\u30fc"},ares:{singular:"\u30a2\u30fc\u30eb",plural:"\u30a2\u30fc\u30eb",abbr:"a"},hectares:{singular:"\u30d8\u30af\u30bf\u30fc\u30eb",plural:"\u30d8\u30af\u30bf\u30fc\u30eb",abbr:"ha"},liters:{singular:"\u30ea\u30c3\u30c8\u30eb",plural:"\u30ea\u30c3\u30c8\u30eb",abbr:"l"},"cubic-millimeters":{singular:"\u7acb\u65b9\u30df\u30ea\u30e1\u30fc\u30c8\u30eb",plural:"\u7acb\u65b9\u30df\u30ea\u30e1\u30fc\u30c8\u30eb",
abbr:"mm\u00b3"},"cubic-centimeters":{singular:"\u7acb\u65b9\u30bb\u30f3\u30c1\u30e1\u30fc\u30c8\u30eb",plural:"\u7acb\u65b9\u30bb\u30f3\u30c1\u30e1\u30fc\u30c8\u30eb",abbr:"cm\u00b3"},"cubic-decimeters":{singular:"\u7acb\u65b9\u30c7\u30b7\u30e1\u30fc\u30c8\u30eb",plural:"\u7acb\u65b9\u30c7\u30b7\u30e1\u30fc\u30c8\u30eb",abbr:"dm\u00b3"},"cubic-meters":{singular:"\u7acb\u65b9\u30e1\u30fc\u30c8\u30eb",plural:"\u7acb\u65b9\u30e1\u30fc\u30c8\u30eb",abbr:"m\u00b3"},"cubic-kilometers":{singular:"\u7acb\u65b9\u30ad\u30ed\u30e1\u30fc\u30c8\u30eb",
plural:"\u7acb\u65b9\u30ad\u30ed\u30e1\u30fc\u30c8\u30eb",abbr:"km\u00b3"},"cubic-inches":{singular:"\u7acb\u65b9\u30a4\u30f3\u30c1",plural:"\u7acb\u65b9\u30a4\u30f3\u30c1",abbr:"in\u00b3"},"cubic-feet":{singular:"\u7acb\u65b9\u30d5\u30a3\u30fc\u30c8",plural:"\u7acb\u65b9\u30d5\u30a3\u30fc\u30c8",abbr:"ft\u00b3"},"cubic-yards":{singular:"\u7acb\u65b9\u30e4\u30fc\u30c9",plural:"\u7acb\u65b9\u30e4\u30fc\u30c9",abbr:"yd\u00b3"},"cubic-miles":{singular:"\u7acb\u65b9\u30de\u30a4\u30eb",plural:"\u7acb\u65b9\u30de\u30a4\u30eb",
abbr:"mi\u00b3"},radians:{singular:"\u30e9\u30b8\u30a2\u30f3",plural:"\u30e9\u30b8\u30a2\u30f3",abbr:""},degrees:{singular:"\u5ea6",plural:"\u5ea6",abbr:"\u00b0"},bytes:{B:"\u9808_{fileSize} B_____________\u9dd7",kB:"\u9808_{fileSize} kB______________\u9dd7",MB:"\u9808_{fileSize} MB______________\u9dd7",GB:"\u9808_{fileSize} GB______________\u9dd7",TB:"\u9808_{fileSize} TB______________\u9dd7"}}});