## ArcGIS Maps SDK for JavaScript: Maximize Performance of FeatureLayer

- Step 1: [Update `layer.definitionExpression`](https://ycabon-presentations.netlify.app/2023-devsummit/maximize-performance/1.update-definition-expression.html)
- Step 2: [Using `layerview.filter`](https://ycabon-presentations.netlify.app/2023-devsummit/maximize-performance/2.client-side-layerview-filter.html)
- Step 3: [Update the `renderer`'s attribute](https://ycabon-presentations.netlify.app/2023-devsummit/maximize-performance/3.update-renderer-attribute.html)
- Step 4: [Setting `outFields` to `'*'`](https://ycabon-presentations.netlify.app/2023-devsummit/maximize-performance/4.star-outfields.html)
- Step 5: [Delay setting `outFields`](https://ycabon-presentations.netlify.app/2023-devsummit/maximize-performance/5.delay-setting-outfields.html)

### Generate data

```sh
npm install

#generates long table data as geojson
npm run longTable

#generates wide table data as geojson
npm run wideTable
```