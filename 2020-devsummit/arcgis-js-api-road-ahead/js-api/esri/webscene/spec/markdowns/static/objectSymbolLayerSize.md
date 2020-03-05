# Object Symbol Layer Size
[Object symbol layers](../objectSymbol3DLayer.md) have three size properties: `width`, `height`, and `depth`. All properties are optional, so any combination of these properties is valid. The high-level design idea is that if size definitions are missing, the aspect ratio of the 3D model is respected as far as possible. In practice, there are 4 different cases:
- **None of the size properties are defined:** the symbol resource is left at its original scale.
  - For `href` resources, interpret the vertex coordinates of the model (WOSR) in meters. Web styles are modeled such that real-world assets (e.g. cars) appear at a realistic size.
  - For `primitive` resources, the default size is 10m for all dimensions.
- **One size property is defined:** the two undefined axes are scaled s.t. the resource maintains its original aspect ratio.
  - Example: if the resource is a tree of originally 10m height and 3m width and depth, and only `height` is defined to be 5m, the resulting symbol has a width and depth of 1.5m.
- **Two size properties are defined:** the first property that is defined in the list [width, depth, height] defines the scale value for the undefined axis.
  - Example: for the same tree resource (10m height and 3m width & depth), when `width` = 2m and `height` = 5m, the resulting depth is 2m.
- **All size properties are defined:** no explanation needed.

Note that cases 2-4 can be implemented simultaneously by going over the properties in the order [width, depth, height], picking the first one that is defined, compute the scale factor for this axis (size property divided by resource size), and applying this scale factor to all undefined axes.

## Visual Variables
- [Size visual variables](../sizeInfo_visualVariable.md) also allow for any combinations of presence/absence of each axis.
- Same rules (as described above) apply for determining the size/scale factor for undefined axes. 
- If one or more visual variables are present, the symbol's size properties are ignored.
  - I.e. even if the symbol itself has width + height + depth defined, as soon as there is a size visual variable, the symbol will be scaled proportionally based on the size visual variables only (according to the above rules).
- The exception to this rule is if the visual variable has `useSymbolValue` set to `true`, in which case the symbol's size values are used for the axes in question.
