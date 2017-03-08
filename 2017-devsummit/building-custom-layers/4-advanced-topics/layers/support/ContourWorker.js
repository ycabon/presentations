define([
  "esri/core/promiseUtils",

  "./SegmentHash",

  "lerc/LercDecode"
], function(
  promiseUtils,
  
  SegmentHash,

  LercDecode
) {

  var ContourWorker = function() {}

  ContourWorker.prototype = {
    generateContours: function(parameters) {
      var elevations = parameters.elevations;
      var lerc = LercDecode.decode(parameters.lerc, { noDataValue: 0 });
      var width = parameters.width;
      var height = parameters.height;

      var contours = {};
      elevations.forEach(function(elevation) {
        contours[elevation] = this._createContoursForElevation(lerc, width, height, elevation);
      }, this);

      return promiseUtils.resolve({
        data: contours
      });
    },
    
    _createContoursForElevation: function(lerc, width, height, elevation) {
      var spacing = 4;
      var triangles = [];

      for (var x = 0; x < width; x += spacing) {
        for (var y = 0; y < height; y += spacing) {
          triangles.push([[x, y], [x + spacing, y], [x, y + spacing]]);
          triangles.push([[x + spacing, y], [x, y + spacing], [x + spacing, y + spacing]]);
        }
      }

      var contourSegments = this._createContourSegments(triangles, lerc, elevation);
      var contourPaths = this._segmentsToContourLines(contourSegments);

      return contourPaths;
    },

    _createContourSegments: function(triangles, lerc, elevation) {
      var contourSegments = [];
      var below = [];
      var above = [];

      for (var i = 0; i < triangles.length; i++) {
        var triangle = triangles[i];
          
        below.length = above.length = 0;

        this._processVertice(below, above, lerc, triangle[0], elevation);
        this._processVertice(below, above, lerc, triangle[1], elevation);
        this._processVertice(below, above, lerc, triangle[2], elevation);

        
        // All above or all below means no contour line here
        if (below.length === 0 || above.length === 0) {
          continue;
        }

        // We have a contour line, let's find it
        var minority = above.length < below.length ? above : below;
        var majority = above.length > below.length ? above : below;

        var c1 = this._crossingPoint(lerc, elevation, minority[0], majority[0]);
        var c2 = this._crossingPoint(lerc, elevation, minority[0], majority[1]);

        contourSegments.push([c1, c2]);
      }

      return contourSegments;
    },

    _processVertice: function(below, above, lerc, vertice, elevation) {
      var elevationAtVertice = this._elevationAtVertice(lerc, vertice);
      this._classifyVertice(below, above, vertice, elevationAtVertice, elevation);
    },

    _elevationAtVertice: function(lerc, vertice) {
      return lerc.pixels[0][vertice[1] * lerc.width + vertice[0]];
    },

    _classifyVertice: function(below, above, vertice, elevationAtVertice, elevation) {
      if (elevationAtVertice < elevation) {
        below.push(vertice);
      }
      else {
        above.push(vertice);
      }
    },
    
    _crossingPoint: function(lerc, elevation, e1, e2) {
      // howFar is a number between 0 and 1 indicating what percent of the way
      // along the edge (e1,e2) the crossing point is
      var howFar = (elevation - this._elevationAtVertice(lerc, e2)) / (this._elevationAtVertice(lerc, e1) - this._elevationAtVertice(lerc, e2));
      return [
        Math.round(howFar * e1[0] + (1 - howFar) * e2[0]),
        Math.round(howFar * e1[1] + (1 - howFar) * e2[1])
      ];
    },

    _segmentsToContourLines: function(segments) {
      var contourLines = [];

      // classify all the segments in a hash to find them easily
      var segmentHash = new SegmentHash(segments);

      while (segmentHash.size) {
        // Start with a random segment
        var line = segmentHash.pop().slice();
        while (true) {
          var currentTail = line[line.length - 1];
          var currentTailHash = segmentHash.verticeHash(currentTail);
          var tailCandidates = segmentHash.get(currentTail);

          if (tailCandidates.length > 0) {
            var newTailSegment = tailCandidates.pop();
            line.push(currentTailHash === segmentHash.verticeHash(newTailSegment[0]) ? newTailSegment[1] : newTailSegment[0]);
            segmentHash.delete(newTailSegment);
          }

          var currentHead = line[0];
          var currentHeadHash = segmentHash.verticeHash(currentHead);
          var headCandidates = segmentHash.get(currentTail);

          if (headCandidates.length > 0) {
            var newHeadSegment = headCandidates.pop();
            line.unshift(currentHeadHash === segmentHash.verticeHash(newHeadSegment[0]) ? newHeadSegment[1] : newHeadSegment[0]);
            segmentHash.delete(newHeadSegment);
          }

          // There are no more segments touching this line, so we're done with it.
          if (tailCandidates.length === 0 && headCandidates.length === 0) {
            contourLines.push(line);
            break;
          }
        }
      }
      return contourLines;
    }

  };

  return ContourWorker;

});