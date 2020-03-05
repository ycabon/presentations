# Transportation Network

The transportation network used for routing in the scene.

**Referenced by:** [Webscene](webscene.md)

### Properties

| Property | Details
| --- | ---
| name | The name of the transportation network. The name must be unique within a scene.
| path | The path to the geodatabase which contains the network.
| title | A title or alias of the network layer. This can be used in the client user interface.


### Example

```json
{
  "transportationNetworks": [
    {
      "name": "main.campus_ND",
      "path": "file:./esricampus.geodatabase",
      "title": "campus_ND"
    }
  ]
}
```

