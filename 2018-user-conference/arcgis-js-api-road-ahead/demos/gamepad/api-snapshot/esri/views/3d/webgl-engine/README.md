js-webgl-engine
===============

** Old webgl-engine repository **

The engine used to be a separate repository. Use the following procedure to merge in more commits from that repository.

- Add the webgl-engine as a remote and fetch all commits from it.

- Check out your source branch of the webgl-engine project.

- Move all webgl-engine files into the `esri/views/3d/webgl-engine` folder using the following command.
Note: This moves all files including their whole history and therefore creates a new commit tree, disjoint from the original tree.

```
git filter-branch --prune-empty --tree-filter '
mkdir -p esri/views/3d/webgl-engine
git ls-tree --name-only $GIT_COMMIT | xargs -I files mv files esri/views/3d/webgl-engine
'
```

- Check out the target branch on the arcgis-js-api repo and merge the prepared webgl-engine branch into it.
