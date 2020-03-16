import { ITile, TileInfo, TileKey } from "../interfaces";
import LruCache from "./LruCache";

const EPSILON = 1e-6;

// tslint:disable-next-line: no-bitwise
const tilePercentArea = (total: number, currentValue: number) => total + 1 / (1 << (2 * currentValue));

type TileManagerParams<T extends ITile> = Pick<TileManager<T>, "acquireTile" | "releaseTile">

export default class TileManager<T extends ITile = ITile> {
  // --------------------------------------------------------------------------
  //
  //  Public properties
  //
  // --------------------------------------------------------------------------

  acquireTile: (key: TileKey) => T;
  releaseTile: (tile: T) => void;

  get tilesToRender(): T[] {
    return this._tilesToRender;
  }

  // --------------------------------------------------------------------------
  //
  //  Private properties
  //
  // --------------------------------------------------------------------------

  private _tilesToRender: T[] = [];
  private _tiles = new Map<string, T>();
  private _tileCache = new LruCache<T>(40, (tile: T) => this.releaseTile(tile));
  
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  constructor(params: TileManagerParams<T>) {
    this.acquireTile = params.acquireTile;
    this.releaseTile = params.releaseTile;
  }

  destroy(): void {
    this._tiles.clear();
    this._tiles = null;

    this._tileCache.clear();
    this._tileCache = null;
  }

  // --------------------------------------------------------------------------
  //
  //  Public methods
  //
  // --------------------------------------------------------------------------

  update(tiles: TileInfo[]): void {
    this._tilesToRender = [];

    if (!tiles.length) {
      return;
    }

    // Retain is a list of tiles that we shouldn't delete, this may include tiles like
    // parent or child tiles that are already loaded.
    const tilesToRetain = new Set<string>();
    const missingTiles = new Set<TileKey>();

    for (const tileInfo of tiles) {
      const tileId = getTileId(tileInfo);

      const tile = this._getOrAcquireTile(tileId, tileInfo);
      // since this is a tile belonging to the coverage we must retain it
      tilesToRetain.add(tileId);

      // if the tile has data then we are good, else we add the tile to the missing list
      // since we need to find for it a place-holder
      if (tile.hasData()) {
        this._tilesToRender.push(tile);
        continue;
      }

      missingTiles.add({
        level: tileInfo.level,
        row: tileInfo.row,
        col: tileInfo.col,
        world: tileInfo.world
      });
    }

    // iterate over the missing tiles in order to find placeholders.
    // start with higher level tiles (more details levels)
    missingTiles.forEach((missingTileKey) => this._findPlaceholdersForMissingTiles(missingTileKey, tilesToRetain));

    // now we need to do the housekeeping. we need to remove all the tiles which exist in the tile index
    // but are not on the tiles to retain list

    // Remove the tiles we don't need anymore.
    const tilesToRemove: string[] = [];
    this._tiles.forEach((_tile, key) => {
      if (!tilesToRetain.has(key)) {
        tilesToRemove.push(key);
      }
    });

    // release all the tiles that are no longer needed. We need to make an exception
    // for tiles with symbols which are being used for cross tile fade.
    // In such case, the fill and line features are not being used, byt the symbols might
    // still be fading out, so we must keep the tile around.
    for (const tileId of tilesToRemove) {
      this._releaseTile(tileId);
    }
  }

  // --------------------------------------------------------------------------
  //
  //  Private methods
  //
  // --------------------------------------------------------------------------

  private _findPlaceholdersForMissingTiles(missingTileKey: TileKey, tilesToRetain: Set<string>): void {
    // we start with looking for higher level tiles (children). This gives better results, especielly when zooming out
    const placeholderTilesDeltaZ: number[] = [];
    this._tiles.forEach((tile) => {
      this._findChildTile(placeholderTilesDeltaZ, tile, missingTileKey, tilesToRetain);
    });

    // no we need to check whether we have full coverage. If we don't then we need to look for a parent tile
    const coverage = placeholderTilesDeltaZ.reduce(tilePercentArea, 0);
    if (Math.abs(1 - coverage) < EPSILON) {
      return;
    }

    // our coverage isn't full, therefore we need to look for a higher level tile
    this._findParentTile(missingTileKey, tilesToRetain);
  }

  private _findChildTile(
    placeholderTilesDeltaZ: number[],
    candidateTile: T,
    missingTileKey: TileKey,
    tilesToRetain: Set<string>
  ): void {
    const candidateInfo = candidateTile.tileInfo;
    // we are looking for a higher level tile, so skip immediately if it is not of a level that we are looking for
    if (candidateInfo.level <= missingTileKey.level || !candidateTile.hasData()) {
      return;
    }

    // the tile is contained within our missing tile are, therefore we will use it as a placeholder
    if (isTileContained(missingTileKey, candidateInfo)) {
      this._tilesToRender.push(candidateTile);
      tilesToRetain.add(candidateInfo.id);
      placeholderTilesDeltaZ.push(candidateInfo.level - missingTileKey.level);
    }
  }

  private _findParentTile(key: TileKey, tilesToRetain: Set<string>): void {
    let parentId = getTileId(key);
    while (true) {
      parentId = getTileParentId(parentId);
      // we need to make sure that we don't already use this parent, since a missing neighbour might already added it as a placeholder
      // we also need to make sure that we didn't assent all the way to level zero
      if (!parentId || tilesToRetain.has(parentId)) {
        return;
      }

      const parentTile = this._getTile(parentId);
      if (parentTile && parentTile.hasData()) {
        this._tilesToRender.push(parentTile);
        tilesToRetain.add(parentTile.tileInfo.id);
        return;
      }
    }
  }

  private _getOrAcquireTile(tileId: string, tileInfo: TileInfo): T {
    let tile = this._tiles.get(tileId);
    if (tile) {
      return tile;
    }

    // see whether we have the tile in the cache
    tile = this._tileCache.get(tileId);
    if (!tile) {
      tile = this.acquireTile(tileInfo);
    }

    this._tiles.set(tileId, tile);
    return tile;
  }

  private _getTile(tileId: string): T {
    let tile = this._tiles.get(tileId);
    if (tile) {
      return tile;
    }

    // see whether we have the tile in the cache
    tile = this._tileCache.pop(tileId);
    if (tile) {
      this._tiles.set(tileId, tile);
    }

    return tile;
  }

  private _releaseTile(tileId: string): void {
    // remove the tile from the container first
    const tile = this._tiles.get(tileId);

    this._tiles.delete(tileId);
    if (tile.hasData()) {
      this._tileCache.put(tileId, tile);
    } else {
      this.releaseTile(tile);
    }
  }
}

function getTileId(tileInfo: TileKey): string {
  return `${tileInfo.level}/${tileInfo.row}/${tileInfo.col}/${tileInfo.world}`;
}

function getTileParentId(tileId: string): string {
  const [_level, _row, _col, _world] = tileId.split("/");
  const level = parseInt(_level, 10);
  if (level === 0) {
    return null;
  }

  // tslint:disable-next-line: no-bitwise
  return `${level - 1}/${parseInt(_row, 10) >> 1}/${parseInt(_col, 10) >> 1}/${parseInt(_world, 10)}`;
}

function isTileContained(referenceKey: TileKey, key: TileKey): boolean {
  const deltaZ = key.level - referenceKey.level;
  // tslint:disable-next-line: no-bitwise
  return referenceKey.row === key.row >> deltaZ && referenceKey.col === key.col >> deltaZ;
}
