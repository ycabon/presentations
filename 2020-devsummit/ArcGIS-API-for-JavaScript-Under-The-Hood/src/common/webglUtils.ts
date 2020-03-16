export function createProgram(
  gl: WebGLRenderingContext,
  vertexSource: string,
  fragmentSource: string,
  attribLocationsToBind: Map<number, string>
  ): WebGLProgram {
  const vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, vertexSource);
  gl.compileShader(vertexShader);
  if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(vertexShader));
  }  

  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, fragmentSource);
  gl.compileShader(fragmentShader);
  if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(fragmentShader));
  }

  // Create the shader program.
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  
  attribLocationsToBind.forEach((attributeName, location) => gl.bindAttribLocation(program, location, attributeName));

  // Link.
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(
      "Could not initialize shader\n" +
        "VALIDATE_STATUS: " +
        gl.getProgramParameter(program, gl.VALIDATE_STATUS) +
        ", gl error [" +
        gl.getError() +
        "]" +
        "infoLog: " +
        gl.getProgramInfoLog(program)
    );
  }

  // Shader objects since that are not needed anymore.
  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);

  return program;
}