define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function createProgram(gl, vertexSource, fragmentSource, attribLocationsToBind) {
        var vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader, vertexSource);
        gl.compileShader(vertexShader);
        if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
            console.error(gl.getShaderInfoLog(vertexShader));
        }
        var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader, fragmentSource);
        gl.compileShader(fragmentShader);
        if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
            console.error(gl.getShaderInfoLog(fragmentShader));
        }
        var program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        attribLocationsToBind.forEach(function (attributeName, location) { return gl.bindAttribLocation(program, location, attributeName); });
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error("Could not initialize shader\n" +
                "VALIDATE_STATUS: " +
                gl.getProgramParameter(program, gl.VALIDATE_STATUS) +
                ", gl error [" +
                gl.getError() +
                "]" +
                "infoLog: " +
                gl.getProgramInfoLog(program));
        }
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);
        return program;
    }
    exports.createProgram = createProgram;
});
//# sourceMappingURL=webglUtils.js.map