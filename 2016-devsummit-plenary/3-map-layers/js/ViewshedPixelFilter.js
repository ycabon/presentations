define(
[
  "dojo/_base/declare",
  "dojo/_base/lang",

  "esri/geometry/Point"
],
function (
  declare, lang,
  Point
) {

  var ViewshedPixelFilter = declare(null, {

    constructor: function (options) {
      lang.mixin(this, options);

      this.viewshed = this.viewshed.bind(this);
      this.getShader = this.getShader.bind(this);
      this.loadProgram = this.loadProgram.bind(this);
      this.refresh = this.refresh.bind(this);
    },

    cellSizeX: 1,

    cellSizeY: 1,

    observerHeight: 1,

    gl: null,

    layer: null,

    rgbaFloatData: null,

    // Resolution of the mesh.
    resolution: 20,

    viewPoint: null,

    viewshed: function (pixelData) {
      var imageLayerView = this.layerView;
      this.gl = imageLayerView ? imageLayerView.context : null;
      if (!this.gl) {
        console.log("Unable to create this filter because of missing context object.");
        return;
      }
      if (!this.layer || !this.gl || !pixelData) {
        console.log("Unable to create this filter because of missing arguments.");
        return;
      }
      var pixelBlock = pixelData.pixelBlock;
      var resolution = this.resolution;

      var gl = this.gl;
      var vertexshader = this.getShader(gl, "2d-vertex-shader");
      var fragmentshader = this.getShader(gl, "2d-fragment-shader-viewshed");

      this.pictureprogram = this.loadProgram(gl, vertexshader, fragmentshader);
      gl.useProgram(this.pictureprogram);

      // Look up where the vertex data needs to go.
      // texCoordLocation holds the location of the texture for the picture fragment shader.
      var texCoordLocation = gl.getAttribLocation(this.pictureprogram, "a_texCoord");

      // Provide texture coordinates for the rectangle.
      // texCoordBuffer holds the buffer for the texture for the picture fragment shader.
      var texCoordBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);

      // createImageGrid sets up the vector array itself
      gl.bufferData(gl.ARRAY_BUFFER, this.createImageGrid(), gl.STATIC_DRAW);  // Fill buffer data             
      gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(texCoordLocation);
      gl.disable(gl.DEPTH_TEST);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
      gl.enable(gl.BLEND);
      // Set up uniforms variables (image).
      this.pictureprogram.u_image = gl.getUniformLocation(this.pictureprogram, "u_image");

      // Set the texture to use.
      gl.uniform1i(this.pictureprogram.u_image, 0);

      // Create a texture object that will contain the image.
      var texture = gl.createTexture();

      // Bind the texture the target (TEXTURE_2D) of the active texture unit.
      gl.bindTexture(gl.TEXTURE_2D, texture);

      // Flip the image's Y axis to match the WebGL texture coordinate space.
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

      // Set the parameters so we can render any size image.        
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);


      // Upload the resized canvas image into the texture.
      // Note: a canvas is used here but can be replaced by an image object. 

      if (pixelBlock.pixelType == "U8") {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, pixelBlock.width, pixelBlock.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, pixelBlock.getAsRGBA());
      }
      else if (pixelBlock) {
        var float_texture_ext = gl.getExtension('OES_texture_float');
        this.rgbaFloatData = !this.rgbaFloatData || this.layer.hasDataChanged ? pixelBlock.getAsRGBAFloat() : this.rgbaFloatData;
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, pixelBlock.width, pixelBlock.height, 0, gl.RGBA, gl.FLOAT, this.rgbaFloatData);
      }
      else {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.layer._element);
      }

      gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
      gl.useProgram(this.pictureprogram);
      gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(texCoordLocation);

      var textureResolutionLocation = gl.getUniformLocation(this.pictureprogram, "u_resolution");
      gl.uniform2f(textureResolutionLocation, 1 / pixelBlock.width, 1 / pixelBlock.height);

      var view = this.view;
      var resolution = view.state.resolution;

      var cellSizeX = resolution;
      var cellSizeY = resolution;

      var observerHeight = this.observerHeight === undefined ? 20.0 : this.observerHeight;
      var cellSizeLocation = gl.getUniformLocation(this.pictureprogram, "u_cellSize");
      gl.uniform2f(cellSizeLocation, cellSizeX, cellSizeY);

      var observerLocation = gl.getUniformLocation(this.pictureprogram, "u_observer");
      //gl.uniform2f(observerLocation, 0.5, 0.5); //0-1 space
      if (this.viewPoint) {
        gl.uniform2f(observerLocation, this.viewPoint.s, this.viewPoint.t); //0-1 space
      }
      else {
        gl.uniform2f(observerLocation, 0.5, 0.5); //0-1 space
      }

      var observerHeightLocation = gl.getUniformLocation(this.pictureprogram, "u_observerHight");
      gl.uniform1f(observerHeightLocation, observerHeight);

      var floatTextureLocation = gl.getUniformLocation(this.pictureprogram, "u_floatTexture");
      if (pixelBlock && pixelBlock.pixelType != "U8") {
        gl.uniform1i(floatTextureLocation, 1);
      } else {
        gl.uniform1i(floatTextureLocation, 0);
      }

      gl.drawArrays(gl.TRIANGLES, 0, this.resolution * this.resolution * 2 * 3);
    },

    refresh: function () {
      var gl = this.gl;
      if (gl) {
        var observerLocation = gl.getUniformLocation(this.pictureprogram, "u_observer");
        //gl.uniform2f(observerLocation, 0.5, 0.5); //0-1 space
        if (this.viewPoint) {
          gl.uniform2f(observerLocation, this.viewPoint.s, this.viewPoint.t); //0-1 space
        }
        else {
          gl.uniform2f(observerLocation, 0.5, 0.5); //0-1 space
        }

        var observerHeightLocation = gl.getUniformLocation(this.pictureprogram, "u_observerHight");
        gl.uniform1f(observerHeightLocation, this.observerHeight);
        gl.drawArrays(gl.TRIANGLES, 0, this.resolution * this.resolution * 2 * 3);
      }
    },

    loadProgram: function (gl, vertexShader, fragmentShader) {
      // create a progam object
      var program = gl.createProgram();

      // attach the two shaders 
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);

      // link everything 
      gl.linkProgram(program);

      // Check the link status
      var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
      if (!linked) {

        // An error occurred while linking
        var lastError = gl.getProgramInfoLog(program);
        console.warn("Error in program linking:" + lastError);

        gl.deleteProgram(program);
        return null;
      }

      // if all is well, return the program object
      return program;
    },

    // Loads a shader from a script tag
    // Parameters:
    //   WebGL context
    //   id of script element containing the shader to load
    getShader: function (gl, id) {
      var shaderScript = document.getElementById(id);

      // error - element with supplied id couldn't be retrieved
      if (!shaderScript) {
        return null;
      }

      // If successful, build a string representing the shader source
      var str = "";
      var k = shaderScript.firstChild;
      while (k) {
        if (k.nodeType == 3) {
          str += k.textContent;
        }
        k = k.nextSibling;
      }

      var shader;

      // Create shaders based on the type we set
      //   note: these types are commonly used, but not required
      if (shaderScript.type == "x-shader/x-fragment") {
        shader = gl.createShader(gl.FRAGMENT_SHADER);
      } else if (shaderScript.type == "x-shader/x-vertex") {
        shader = gl.createShader(gl.VERTEX_SHADER);
      } else {
        return null;
      }

      gl.shaderSource(shader, str);
      gl.compileShader(shader);

      // Check the compile status, return an error if failed
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.log(gl.getShaderInfoLog(shader));
        return null;
      }

      return shader;
    },

    createImageGrid: function () {
      var q = 0.001;

      var r = (1 - q * 2) / this.resolution;
      var c = new Float32Array(this.resolution * this.resolution * 12); //2 numbers per coord; three coords per triangle; 2 triagles per square; resolution * resolution squares.

      var i = 0;

      for (var xs = 0; xs < this.resolution; xs++) {
        for (var ys = 0; ys < this.resolution; ys++) {

          var x = r * xs + q;
          var y = r * ys + q;

          c[i++] = x;
          c[i++] = y;

          c[i++] = x + r;
          c[i++] = y;

          c[i++] = x;
          c[i++] = y + r;

          c[i++] = x + r;
          c[i++] = y;

          c[i++] = x;
          c[i++] = y + r;

          c[i++] = x + r;
          c[i++] = y + r;

        }
      }
      return c;
    }

  });
  
  return ViewshedPixelFilter;
});