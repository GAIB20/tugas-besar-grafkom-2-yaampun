"use strict"

// import webglUtils from "webgl-utils";
import DrawHandler from "./handler/DrawHandler";
import createProgram from "./utils/program";
import resizeCanvasToDisplaySize from "./utils/resize";
import createShader from "./utils/shaders";

const canvas = document.getElementById("gl-canvas");
const gl = canvas.getContext("webgl");
if(!gl){
    throw new Error("WebGL not supported");
}

const vertexShaderSource = document.getElementById("vertex-shader-3d")?.textContent;
const fragmentShaderSource = document.getElementById("fragment-shader-3d")?.textContent;

const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
const fragmentShader = createShader(
    gl,
    gl.FRAGMENT_SHADER,
    fragmentShaderSource
);

// const program = createProgram(gl, vertexShader, fragmentShader);
const program = webglUtils.createProgramFromScripts(gl, ["vertex-shader-3d", "fragment-shader-3d"]);

resizeCanvasToDisplaySize(gl.canvas);

gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

gl.clear(gl.COLOR_BUFFER_BIT);

gl.enable(gl.DEPTH_TEST);
gl.enable(gl.CULL_FACE);


gl.useProgram(program);


const drawHandler = new DrawHandler(gl, program, document);

