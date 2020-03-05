# font

Font used for text symbols.

**Referenced by:** [TextSymbol3DLayer](textSymbol3DLayer.md)

### Properties

| Property | Details
| --- | ---
| decoration | The text decoration.<br>If property is present, must be one of the following values: <ul><li>`line-through`</li><li>`none`</li><li>`underline`</li></ul>
| family | The font family.
| size | The font size in points. Ignored when font is used on TextSymbol3DLayer.
| style | The text style.<br>If property is present, must be one of the following values: <ul><li>`italic`</li><li>`normal`</li><li>`oblique`</li></ul>
| weight | The text weight.<br>If property is present, must be one of the following values: <ul><li>`bold`</li><li>`bolder`</li><li>`lighter`</li><li>`normal`</li></ul>


### Example

```json
{
  "font": {
    "family": "Arial",
    "size": 12,
    "style": "normal",
    "weight": "bold",
    "decoration": "none"
  }
}
```

