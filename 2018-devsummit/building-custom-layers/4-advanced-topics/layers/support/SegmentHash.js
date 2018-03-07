define([], function() {
  function SegmentHash(segments) {
    this.segments = segments.slice();
    this.size = this.segments.length;

    // classify all the segments in a hash to find them easily
    this._segmentsByVertice = new Map();

    for (var i = 0; i < this.segments.length; i++) {
      this._placeVerticeInHash(this._segmentsByVertice, this.segments[i][0], this.segments[i]);
      this._placeVerticeInHash(this._segmentsByVertice, this.segments[i][1], this.segments[i]);
    }
  }

  SegmentHash.prototype = {
    pop: function() {
      return this.delete(this.segments[0]);
    },

    delete: function(segment) {
      var index = this.segments.indexOf(segment);

      if (index === -1) {
        return null;
      }

      this.segments.splice(index, 1)
      this.size--;
      this._segmentsByVertice.get(this.verticeHash(segment[0])).delete(segment);
      this._segmentsByVertice.get(this.verticeHash(segment[1])).delete(segment);

      return segment;
    },

    get: function(vertice) {
      var result = [];
      var hash = this.verticeHash(vertice);

      if (this._segmentsByVertice.has(hash)) {
        this._segmentsByVertice.get(hash).forEach(function(s) {
          result.push(s);
        });
      }

      return result;
    },

    verticeHash: function(vertice) {
      return vertice[0] + "," + vertice[1]; 
    },

    _placeVerticeInHash: function(segmentsByVertice, vertice, segment) {
      var hash = this.verticeHash(vertice);

      if (!segmentsByVertice.has(hash)) {
        segmentsByVertice.set(hash, new Set());
      }
      
      segmentsByVertice.get(hash).add(segment);
    }

  };

  return SegmentHash;
});
