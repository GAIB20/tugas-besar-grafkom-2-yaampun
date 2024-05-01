/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/handler/DrawHandler.js":
/*!************************************!*\
  !*** ./src/handler/DrawHandler.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DrawHandler)
/* harmony export */ });
/* harmony import */ var _structs_math_mat4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../structs/math/mat4 */ "./src/structs/math/mat4.js");
/* harmony import */ var _structs_math_mathUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../structs/math/mathUtils */ "./src/structs/math/mathUtils.js");
/* harmony import */ var _structs_model_DummyModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../structs/model/DummyModel */ "./src/structs/model/DummyModel.js");
/* harmony import */ var _ModelHandler_HollowHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModelHandler/HollowHandler */ "./src/handler/ModelHandler/HollowHandler.js");





class DrawHandler{

    constructor(
        gl,
        program,
        document,

    ){
        this.gl = gl;
        this.program = program;
        this.document = document;
        this.renderProps = {
          gl: this.gl,
          program: this.program,
          positionBuffer: this.gl.createBuffer(),
          colorBuffer: this.gl.createBuffer(),
          document: this.document,
        }
        this.currentModel = new _structs_model_DummyModel__WEBPACK_IMPORTED_MODULE_2__["default"](0, this.renderProps);
        this.hollowHandler = new _ModelHandler_HollowHandler__WEBPACK_IMPORTED_MODULE_3__["default"](this.renderProps, this.currentModel);

        this.dummyInit()
        this.document.addEventListener("DOMContentLoaded", this.rerender)

    }

  dummyInit(){
    

        this.drawScene()
  }

  // Draw the scene.
  drawScene() {


    // lookup uniforms
    this.currentModel.render(this.renderProps);
  }

  rerender = () => {
    this.currentModel.render(this.renderProps);
    
    window.requestAnimationFrame(this.rerender)
  }

}

/***/ }),

/***/ "./src/handler/ModelHandler/HollowHandler.js":
/*!***************************************************!*\
  !*** ./src/handler/ModelHandler/HollowHandler.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HollowHandler)
/* harmony export */ });
class HollowHandler{

    constructor(props, model){
        this.model = model;
        this.props = props;
        // this.factory = null;
        this.eventListener()
    }

    setModel(model){
        this.model = model;
    }
    
    eventListener(){
        if(this.model == null) return;
        this.translationHandler();
        this.rotationHandler();
        this.scaleHandler();

    }

    translationHandler(){
        let {document} = this.props;

        //handle translation X slider
        let translationX = document.getElementById("translation-x-slider");
        translationX.oninput = () => {
            let translationXLabel = document.getElementById("translation-x-slider-value");
            translationXLabel.innerHTML = translationX.value;
            this.model.transform.translation.x = translationX.value;
        }

        //handle translation Y slider
        let translationY = document.getElementById("translation-y-slider");
        translationY.oninput = () => {
            let translationYLabel = document.getElementById("translation-y-slider-value");
            translationYLabel.innerHTML = translationY.value;
            this.model.transform.translation.y = translationY.value;
        }

        //handle translation Z slider
        let translationZ = document.getElementById("translation-z-slider");
        translationZ.oninput = () => {
            let translationZLabel = document.getElementById("translation-z-slider-value");
            translationZLabel.innerHTML = translationZ.value;
            this.model.transform.translation.z = translationZ.value;
        }

        //set current translation values
        let translationXLabel = document.getElementById("translation-x-slider-value");
        translationXLabel.innerHTML = this.model.transform.translation.x;

        let translationYLabel = document.getElementById("translation-y-slider-value");
        translationYLabel.innerHTML = this.model.transform.translation.y;

        let translationZLabel = document.getElementById("translation-z-slider-value");
        translationZLabel.innerHTML = this.model.transform.translation.z;
        
    }

    rotationHandler(){
        let {document} = this.props;

        //handle rotation X slider
        let rotationX = document.getElementById("rotation-x-slider");
        rotationX.oninput = () => {
            let rotationXLabel = document.getElementById("rotation-x-slider-value");
            rotationXLabel.innerHTML = rotationX.value;
            this.model.transform.rotation.x = rotationX.value;
        }

        //handle rotation Y slider
        let rotationY = document.getElementById("rotation-y-slider");
        rotationY.oninput = () => {
            let rotationYLabel = document.getElementById("rotation-y-slider-value");
            rotationYLabel.innerHTML = rotationY.value;
            this.model.transform.rotation.y = rotationY.value;
        }

        //handle rotation Z slider
        let rotationZ = document.getElementById("rotation-z-slider");
        rotationZ.oninput = () => {
            let rotationZLabel = document.getElementById("rotation-z-slider-value");
            rotationZLabel.innerHTML = rotationZ.value;
            this.model.transform.rotation.z = rotationZ.value;
        }

        //set current rotation values
        let rotationXLabel = document.getElementById("rotation-x-slider-value");
        rotationXLabel.innerHTML = this.model.transform.rotation.x;

        let rotationYLabel = document.getElementById("rotation-y-slider-value");
        rotationYLabel.innerHTML = this.model.transform.rotation.y;

        let rotationZLabel = document.getElementById("rotation-z-slider-value");
        rotationZLabel.innerHTML = this.model.transform.rotation.z;
    }

    scaleHandler(){
        let {document} = this.props;

        //handle scale X slider
        let scaleX = document.getElementById("scalation-x-slider");
        scaleX.oninput = () => {
            let scaleXLabel = document.getElementById("scalation-x-slider-value");
            scaleXLabel.innerHTML = scaleX.value/10;
            this.model.transform.scale.x = scaleX.value/10;
        }

        //handle scale Y slider
        let scaleY = document.getElementById("scalation-y-slider");
        scaleY.oninput = () => {
            let scaleYLabel = document.getElementById("scalation-y-slider-value");
            scaleYLabel.innerHTML = scaleY.value/10;
            this.model.transform.scale.y = scaleY.value/10;
        }

        //handle scale Z slider
        let scaleZ = document.getElementById("scalation-y-slider");
        scaleZ.oninput = () => {
            let scaleZLabel = document.getElementById("scalation-y-slider-value");
            scaleZLabel.innerHTML = scaleZ.value/10;
            this.model.transform.scale.z = scaleZ.value/10;
        }

        //set current scale values
        let scaleXLabel = document.getElementById("scalation-x-slider-value");
        scaleXLabel.innerHTML = this.model.transform.scale.x;

        let scaleYLabel = document.getElementById("scalation-y-slider-value");
        scaleYLabel.innerHTML = this.model.transform.scale.y;

        let scaleZLabel = document.getElementById("scalation-y-slider-value");
        scaleZLabel.innerHTML = this.model.transform.scale.z;
    }
}

/***/ }),

/***/ "./src/structs/math/Transform.js":
/*!***************************************!*\
  !*** ./src/structs/math/Transform.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Transform)
/* harmony export */ });
/* harmony import */ var _mat4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mat4 */ "./src/structs/math/mat4.js");
/* harmony import */ var _mathUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mathUtils */ "./src/structs/math/mathUtils.js");



class Transform{
    constructor(projection, translation, rotation, scale, centroid){
        let [xp, yp, zp] = projection;
        this.projection = {
            x: xp,
            y: yp,
            z: zp
        }
        let [xt, yt, zt] = translation;
        this.translation = {
            x: xt,
            y: yt,
            z: zt
        }
        let [xr, yr, zr] = rotation;
        this.rotation = {
            x: xr,
            y: yr,
            z: zr
        }
        let [xs, ys, zs] = scale;
        this.scale = {
            x: xs,
            y: ys,
            z: zs
        }
        let [xc, yc, zc] = centroid;
        this.centroid = {
            x: xc,
            y: yc,
            z: zc
        }
    }

    getProjectionMatrix(){
        //perform projection
        let matrix = _mat4__WEBPACK_IMPORTED_MODULE_0__["default"].projection(this.projection.x, this.projection.y, this.projection.z); 
        //perform translation
        matrix = _mat4__WEBPACK_IMPORTED_MODULE_0__["default"].multiply(matrix, _mat4__WEBPACK_IMPORTED_MODULE_0__["default"].getTranslation(this.translation.x, this.translation.y, this.translation.z));

        //translate to the centroid
        //perform rotation
        matrix = _mat4__WEBPACK_IMPORTED_MODULE_0__["default"].multiply(matrix, _mat4__WEBPACK_IMPORTED_MODULE_0__["default"].getRotationX((0,_mathUtils__WEBPACK_IMPORTED_MODULE_1__.degToRad)(this.rotation.x)));
        matrix = _mat4__WEBPACK_IMPORTED_MODULE_0__["default"].multiply(matrix, _mat4__WEBPACK_IMPORTED_MODULE_0__["default"].getRotationY((0,_mathUtils__WEBPACK_IMPORTED_MODULE_1__.degToRad)(this.rotation.y)));
        matrix = _mat4__WEBPACK_IMPORTED_MODULE_0__["default"].multiply(matrix, _mat4__WEBPACK_IMPORTED_MODULE_0__["default"].getRotationZ((0,_mathUtils__WEBPACK_IMPORTED_MODULE_1__.degToRad)(this.rotation.z))); 
        // translate back to the original position
        //perform scaling
        matrix = _mat4__WEBPACK_IMPORTED_MODULE_0__["default"].multiply(matrix, _mat4__WEBPACK_IMPORTED_MODULE_0__["default"].getScale(this.scale.x, this.scale.y, this.scale.z));
        return matrix;
    }

}


/***/ }),

/***/ "./src/structs/math/Vec4.js":
/*!**********************************!*\
  !*** ./src/structs/math/Vec4.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Vec4)
/* harmony export */ });
class Vec4{
    constructor(x, y, z, w){
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    static add(a, b){
        return new Vec4(a.x + b.x, a.y + b.y, a.z + b.z, a.w + b.w);
    }

    static dot(a, b){
        return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
    }

    asArray(){  
        return [this.x, this.y, this.z, this.w];
    }

}

/***/ }),

/***/ "./src/structs/math/mat4.js":
/*!**********************************!*\
  !*** ./src/structs/math/mat4.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mat4)
/* harmony export */ });
/* harmony import */ var _Vec4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vec4.js */ "./src/structs/math/Vec4.js");



class Mat4{

    data;

    constructor(m00, m01, m02, m03, 
                m10, m11, m12, m13, 
                m20, m21, m22, m23, 
                m30, m31, m32, m33){
        this.data = new Float32Array([m00, m01, m02, m03,
                                      m10, m11, m12, m13,
                                      m20, m21, m22, m23,
                                      m30, m31, m32, m33]);
        
    }

    static getEmpty(){
        return new Mat4(0, 0, 0, 0,
                        0, 0, 0, 0,
                        0, 0, 0, 0,
                        0, 0, 0, 0);
    }

    static getIdentity(){
        return new Mat4(1, 0, 0, 0,
                        0, 1, 0, 0,
                        0, 0, 1, 0,
                        0, 0, 0, 1);
    }


    static getTranslation(x, y, z){
        return new Mat4(1, 0, 0, 0,
                        0, 1, 0, 0,
                        0, 0, 1, 0,
                        x, y, z, 1);
    }

    static getScale(x, y, z){

        return new Mat4(x, 0, 0, 0,
                        0, y, 0, 0,
                        0, 0, z, 0,
                        0, 0, 0, 1);
    }

    static getRotationX(theta){
        return new Mat4(1, 0, 0, 0,
                        0, Math.cos(theta), -Math.sin(theta), 0,
                        0, Math.sin(theta), Math.cos(theta), 0,
                        0, 0, 0, 1);
    }

    static getRotationY(theta){
        return new Mat4(Math.cos(theta), 0, Math.sin(theta), 0,
                        0, 1, 0, 0,
                        -Math.sin(theta), 0, Math.cos(theta), 0,
                        0, 0, 0, 1);
    }   

    static getRotationZ(theta){
        return new Mat4(Math.cos(theta), -Math.sin(theta), 0, 0,
                        Math.sin(theta), Math.cos(theta), 0, 0,
                        0, 0, 1, 0,
                        0, 0, 0, 1);
    }   
    static projection(width, height, depth) {
        // Note: This matrix flips the Y axis so 0 is at the top.
        return new Mat4(2 / width, 0, 0, 0,
                        0, -2 / height, 0, 0,
                        0, 0, 2 / depth, 0,
                        -1, 1, 0, 1);
    }

    getColumn(i){
        return new _Vec4_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.data[i], this.data[i + 4], this.data[i + 8], this.data[i + 12]);
    }

    getRow(i){
        return new _Vec4_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.data[i * 4], this.data[i * 4 + 1], this.data[i * 4 + 2], this.data[i * 4 + 3]);
    }

    getInstance(){
        return this.data;
    }

    foo(){
        console.log("foo");
    }

    static multiply(a, b){
        let result = Mat4.getEmpty();
        for(let i = 0; i < 4; i++){
            let row = b.getRow(i);
            for(let j = 0; j < 4; j++){
                let col = a.getColumn(j);
                result.data[i * 4 + j] = _Vec4_js__WEBPACK_IMPORTED_MODULE_0__["default"].dot(row, col);
            }
        }
        return result;
    }
}

/***/ }),

/***/ "./src/structs/math/mathUtils.js":
/*!***************************************!*\
  !*** ./src/structs/math/mathUtils.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   degToRad: () => (/* binding */ degToRad),
/* harmony export */   radToDeg: () => (/* binding */ radToDeg)
/* harmony export */ });

function degToRad(degrees){
    return degrees * Math.PI / 180;
}   

function radToDeg(radians){
    return radians * 180 / Math.PI;
}

/***/ }),

/***/ "./src/structs/model/BaseModel.js":
/*!****************************************!*\
  !*** ./src/structs/model/BaseModel.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseModel)
/* harmony export */ });
/* harmony import */ var _math_Transform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/Transform.js */ "./src/structs/math/Transform.js");


class BaseModel {


    // abstract readonly shape: ShapeEnum;

    constructor(id) {
        this.id = id;
        this.transform = null;
    }
    /**
     * 
     * ABSTRACT METHOD
     */
    // public abstract setPosition(gl: WebGLRenderingContext): void;
    // public abstract setColor(gl: WebGLRenderingContext): void;
    // public abstract isNullVertex(): boolean;
    // public abstract countVertex(): number;
    // public abstract countRealVertex(): number;
    // public abstract centroid(): [number, number];
    // public abstract getGLType(gl: WebGLRenderingContext): number;
    // public abstract setVertex(vertex: Vertex, index: number): void;
    // public abstract changeColor(color: [number, number, number, number]): void;

    setPosition(gl) {
        throw new Error("Method not implemented.");
    }

    setColor(gl) {
        throw new Error("Method not implemented.");
    }

    getCentroid() {
        throw new Error("Method not implemented.");
    }

    isNullVertex() {
        throw new Error("Method not implemented.");
    }

    countVertex() {
        throw new Error("Method not implemented.");
    }



    positionProc(renderProps) {
        let { gl, program, positionBuffer } = renderProps;
        const positionLoc = gl.getAttribLocation(program, "a_position");
        gl.enableVertexAttribArray(positionLoc);
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        this.setPosition(gl);
        gl.vertexAttribPointer(positionLoc, 3, gl.FLOAT, false, 0, 0);
    }

    colorProc(renderProps) {
        let { gl, program, colorBuffer } = renderProps;
        const colorLoc = gl.getAttribLocation(program, "a_color");
        gl.enableVertexAttribArray(colorLoc);
        gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
        this.setColor(gl);
        gl.vertexAttribPointer(colorLoc, 4, gl.FLOAT, false, 0, 0);
    }

    matrixProc(renderProps) {
        let { gl, program } = renderProps;
        const centroid = this.getCentroid();


        
        const mat = this.transform.getProjectionMatrix();

        const matrixLoc = gl.getUniformLocation(program, "u_matrix");
        
        gl.uniformMatrix4fv(matrixLoc, false, mat.getInstance());
    }

    drawProc(renderProps) {
        let { gl } = renderProps;
        const primitive = gl.TRIANGLES;
        const offset = 0;
        const count = this.countVertex();

        gl.drawArrays(primitive, offset, count);
    }

    /**
     * 
     * @param {*} r : renderProps
     * @returns 
     */
    render(r) {
        if (this.isNullVertex()) return;
        const {gl, program, positionBuffer, colorBuffer} = r;
        // Clear the canvas.
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        // Turn on culling. By default backfacing triangles
        // will be culled.
        gl.enable(gl.CULL_FACE);

        // Enable the depth buffer
        gl.enable(gl.DEPTH_TEST);
        gl.useProgram(program);
        this.positionProc(r);
        this.colorProc(r);
        this.matrixProc(r);
        this.drawProc(r);
    }
}

/***/ }),

/***/ "./src/structs/model/DummyModel.js":
/*!*****************************************!*\
  !*** ./src/structs/model/DummyModel.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DummyModel)
/* harmony export */ });
/* harmony import */ var _BaseModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModel.js */ "./src/structs/model/BaseModel.js");
/* harmony import */ var _math_Transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Transform.js */ "./src/structs/math/Transform.js");



class DummyModel extends _BaseModel_js__WEBPACK_IMPORTED_MODULE_0__["default"]{

    constructor(id, renderProps){
        super(id);
        this.positionBuffer = positionBuffer;
        this.colorBuffer = colorBuffer;
        this.initTransform(renderProps);
    }

    initTransform(renderProps){
        let { gl, program } = renderProps;
        let projection = [gl.canvas.clientWidth, gl.canvas.clientHeight, 400];
        let translation = [0, 0, 0];
        let rotation = [0, 0, 0];
        let scale = [1, 1, 1];
        let centroid = this.getCentroid();
        this.transform = new _math_Transform_js__WEBPACK_IMPORTED_MODULE_1__["default"](projection, translation, rotation, scale, centroid);
    }
    // override colorProc
    colorProc(renderProps){
        let { gl, program, colorBuffer } = renderProps;
        const colorLoc = gl.getAttribLocation(program, "a_color");
        gl.enableVertexAttribArray(colorLoc);
        gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
        this.setColor(gl);
        gl.vertexAttribPointer(colorLoc, 3, gl.UNSIGNED_BYTE, true, 0, 0);
    }

    //override drawProc
    drawProc(renderProps){
        let { gl } = renderProps;
        var primitiveType = gl.TRIANGLES;
        var offset = 0;
        var count = 16 * 6;
        gl.drawArrays(primitiveType, offset, count);
    }

    //implement the abstract method
    setPosition(gl){
        gl.bufferData(gl.ARRAY_BUFFER, this.positionBuffer, gl.STATIC_DRAW);
    }

    setColor(gl){
        gl.bufferData(gl.ARRAY_BUFFER, this.colorBuffer, gl.STATIC_DRAW);
    }

    getCentroid(){
        //iterate through the position buffer and get the centroid
        let x = 0;
        let y = 0;
        let z = 0;
        for(let i = 0; i < this.positionBuffer.length; i+=3){
            x += this.positionBuffer[i];
            y += this.positionBuffer[i+1];
            z += this.positionBuffer[i+2];
        }
        let n = this.positionBuffer.length/3;
        return [x/n, y/n, z/n];
    }

    isNullVertex(){
        return false;
    }
    


}

const positionBuffer = new Float32Array([
    // left column front
    0,   0,  0,
    0, 150,  0,
    30,   0,  0,
    0, 150,  0,
    30, 150,  0,
    30,   0,  0,

    // top rung front
    30,   0,  0,
    30,  30,  0,
    100,   0,  0,
    30,  30,  0,
    100,  30,  0,
    100,   0,  0,

    // middle rung front
    30,  60,  0,
    30,  90,  0,
    67,  60,  0,
    30,  90,  0,
    67,  90,  0,
    67,  60,  0,

    // left column back
      0,   0,  30,
     30,   0,  30,
      0, 150,  30,
      0, 150,  30,
     30,   0,  30,
     30, 150,  30,

    // top rung back
     30,   0,  30,
    100,   0,  30,
     30,  30,  30,
     30,  30,  30,
    100,   0,  30,
    100,  30,  30,

    // middle rung back
     30,  60,  30,
     67,  60,  30,
     30,  90,  30,
     30,  90,  30,
     67,  60,  30,
     67,  90,  30,

    // top
      0,   0,   0,
    100,   0,   0,
    100,   0,  30,
      0,   0,   0,
    100,   0,  30,
      0,   0,  30,

    // top rung right
    100,   0,   0,
    100,  30,   0,
    100,  30,  30,
    100,   0,   0,
    100,  30,  30,
    100,   0,  30,

    // under top rung
    30,   30,   0,
    30,   30,  30,
    100,  30,  30,
    30,   30,   0,
    100,  30,  30,
    100,  30,   0,

    // between top rung and middle
    30,   30,   0,
    30,   60,  30,
    30,   30,  30,
    30,   30,   0,
    30,   60,   0,
    30,   60,  30,

    // top of middle rung
    30,   60,   0,
    67,   60,  30,
    30,   60,  30,
    30,   60,   0,
    67,   60,   0,
    67,   60,  30,

    // right of middle rung
    67,   60,   0,
    67,   90,  30,
    67,   60,  30,
    67,   60,   0,
    67,   90,   0,
    67,   90,  30,

    // bottom of middle rung.
    30,   90,   0,
    30,   90,  30,
    67,   90,  30,
    30,   90,   0,
    67,   90,  30,
    67,   90,   0,

    // right of bottom
    30,   90,   0,
    30,  150,  30,
    30,   90,  30,
    30,   90,   0,
    30,  150,   0,
    30,  150,  30,

    // bottom
    0,   150,   0,
    0,   150,  30,
    30,  150,  30,
    0,   150,   0,
    30,  150,  30,
    30,  150,   0,

    // left side
    0,   0,   0,
    0,   0,  30,
    0, 150,  30,
    0,   0,   0,
    0, 150,  30,
    0, 150,   0])

const colorBuffer = new Uint8Array([
    // left column front
  200,  70, 120,
  200,  70, 120,
  200,  70, 120,
  200,  70, 120,
  200,  70, 120,
  200,  70, 120,

    // top rung front
  200,  70, 120,
  200,  70, 120,
  200,  70, 120,
  200,  70, 120,
  200,  70, 120,
  200,  70, 120,

    // middle rung front
  200,  70, 120,
  200,  70, 120,
  200,  70, 120,
  200,  70, 120,
  200,  70, 120,
  200,  70, 120,

    // left column back
  80, 70, 200,
  80, 70, 200,
  80, 70, 200,
  80, 70, 200,
  80, 70, 200,
  80, 70, 200,

    // top rung back
  80, 70, 200,
  80, 70, 200,
  80, 70, 200,
  80, 70, 200,
  80, 70, 200,
  80, 70, 200,

    // middle rung back
  80, 70, 200,
  80, 70, 200,
  80, 70, 200,
  80, 70, 200,
  80, 70, 200,
  80, 70, 200,

    // top
  70, 200, 210,
  70, 200, 210,
  70, 200, 210,
  70, 200, 210,
  70, 200, 210,
  70, 200, 210,

    // top rung right
  200, 200, 70,
  200, 200, 70,
  200, 200, 70,
  200, 200, 70,
  200, 200, 70,
  200, 200, 70,

    // under top rung
  210, 100, 70,
  210, 100, 70,
  210, 100, 70,
  210, 100, 70,
  210, 100, 70,
  210, 100, 70,

    // between top rung and middle
  210, 160, 70,
  210, 160, 70,
  210, 160, 70,
  210, 160, 70,
  210, 160, 70,
  210, 160, 70,

    // top of middle rung
  70, 180, 210,
  70, 180, 210,
  70, 180, 210,
  70, 180, 210,
  70, 180, 210,
  70, 180, 210,

    // right of middle rung
  100, 70, 210,
  100, 70, 210,
  100, 70, 210,
  100, 70, 210,
  100, 70, 210,
  100, 70, 210,

    // bottom of middle rung.
  76, 210, 100,
  76, 210, 100,
  76, 210, 100,
  76, 210, 100,
  76, 210, 100,
  76, 210, 100,

    // right of bottom
  140, 210, 80,
  140, 210, 80,
  140, 210, 80,
  140, 210, 80,
  140, 210, 80,
  140, 210, 80,

    // bottom
  90, 130, 110,
  90, 130, 110,
  90, 130, 110,
  90, 130, 110,
  90, 130, 110,
  90, 130, 110,

    // left side
  160, 160, 220,
  160, 160, 220,
  160, 160, 220,
  160, 160, 220,
  160, 160, 220,
  160, 160, 220])

/***/ }),

/***/ "./src/utils/program.js":
/*!******************************!*\
  !*** ./src/utils/program.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProgram)
/* harmony export */ });
function createProgram(
    gl,
    vertexShader,
    fragmentShader
){
    const program = gl.createProgram();

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);

    gl.linkProgram(program);

    const success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!success) {
        gl.deleteProgram(program);

        throw Error("Failed to compile shader!");
    }

    return program;
}


/***/ }),

/***/ "./src/utils/resize.js":
/*!*****************************!*\
  !*** ./src/utils/resize.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function resizeCanvasToDisplaySize(canvas) {
    // Lookup the size the browser is displaying the canvas in CSS pixels.
    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;

    canvas.width = displayWidth;
    canvas.height = displayHeight;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resizeCanvasToDisplaySize);


/***/ }),

/***/ "./src/utils/shaders.js":
/*!******************************!*\
  !*** ./src/utils/shaders.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createShader)
/* harmony export */ });
function createShader(
    gl,
    type,
    source
) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!success) {
        gl.deleteShader(shader);

        throw Error("Failed to compile shader!");
    }

    return shader;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handler_DrawHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handler/DrawHandler */ "./src/handler/DrawHandler.js");
/* harmony import */ var _utils_program__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/program */ "./src/utils/program.js");
/* harmony import */ var _utils_resize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/resize */ "./src/utils/resize.js");
/* harmony import */ var _utils_shaders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/shaders */ "./src/utils/shaders.js");


// import webglUtils from "webgl-utils";
;




const canvas = document.getElementById("gl-canvas");
const gl = canvas.getContext("webgl");
if(!gl){
    throw new Error("WebGL not supported");
}

const vertexShaderSource = document.getElementById("vertex-shader-3d")?.textContent;
const fragmentShaderSource = document.getElementById("fragment-shader-3d")?.textContent;

const vertexShader = (0,_utils_shaders__WEBPACK_IMPORTED_MODULE_3__["default"])(gl, gl.VERTEX_SHADER, vertexShaderSource);
const fragmentShader = (0,_utils_shaders__WEBPACK_IMPORTED_MODULE_3__["default"])(
    gl,
    gl.FRAGMENT_SHADER,
    fragmentShaderSource
);

// const program = createProgram(gl, vertexShader, fragmentShader);
const program = webglUtils.createProgramFromScripts(gl, ["vertex-shader-3d", "fragment-shader-3d"]);

(0,_utils_resize__WEBPACK_IMPORTED_MODULE_2__["default"])(gl.canvas);

gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

gl.clear(gl.COLOR_BUFFER_BIT);

gl.enable(gl.DEPTH_TEST);
gl.enable(gl.CULL_FACE);


gl.useProgram(program);


const drawHandler = new _handler_DrawHandler__WEBPACK_IMPORTED_MODULE_0__["default"](gl, program, document);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZVZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSx5QkFBeUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDVDFCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTlk7QUFDWjtBQUNBO0FBQ0EsQ0FBZ0Q7QUFDSjtBQUNXO0FBQ1o7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMERBQVk7QUFDakMsdUJBQXVCLDBEQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDREQUFXO0FBQ25DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvaGFuZGxlci9EcmF3SGFuZGxlci5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9oYW5kbGVyL01vZGVsSGFuZGxlci9Ib2xsb3dIYW5kbGVyLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3N0cnVjdHMvbWF0aC9UcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tYXRoL1ZlYzQuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tYXRoL21hdDQuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tYXRoL21hdGhVdGlscy5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21vZGVsL0Jhc2VNb2RlbC5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21vZGVsL0R1bW15TW9kZWwuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvdXRpbHMvcHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy91dGlscy9yZXNpemUuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvdXRpbHMvc2hhZGVycy5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYXQ0IGZyb20gXCIuLi9zdHJ1Y3RzL21hdGgvbWF0NFwiO1xyXG5pbXBvcnQgeyBkZWdUb1JhZCwgcmFkVG9EZWcgfSBmcm9tIFwiLi4vc3RydWN0cy9tYXRoL21hdGhVdGlsc1wiO1xyXG5pbXBvcnQgRHVtbXlNb2RlbCBmcm9tIFwiLi4vc3RydWN0cy9tb2RlbC9EdW1teU1vZGVsXCI7XHJcbmltcG9ydCBIb2xsb3dIYW5kbGVyIGZyb20gXCIuL01vZGVsSGFuZGxlci9Ib2xsb3dIYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3SGFuZGxlcntcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBnbCxcclxuICAgICAgICBwcm9ncmFtLFxyXG4gICAgICAgIGRvY3VtZW50LFxyXG5cclxuICAgICl7XHJcbiAgICAgICAgdGhpcy5nbCA9IGdsO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XHJcbiAgICAgICAgdGhpcy5kb2N1bWVudCA9IGRvY3VtZW50O1xyXG4gICAgICAgIHRoaXMucmVuZGVyUHJvcHMgPSB7XHJcbiAgICAgICAgICBnbDogdGhpcy5nbCxcclxuICAgICAgICAgIHByb2dyYW06IHRoaXMucHJvZ3JhbSxcclxuICAgICAgICAgIHBvc2l0aW9uQnVmZmVyOiB0aGlzLmdsLmNyZWF0ZUJ1ZmZlcigpLFxyXG4gICAgICAgICAgY29sb3JCdWZmZXI6IHRoaXMuZ2wuY3JlYXRlQnVmZmVyKCksXHJcbiAgICAgICAgICBkb2N1bWVudDogdGhpcy5kb2N1bWVudCxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TW9kZWwgPSBuZXcgRHVtbXlNb2RlbCgwLCB0aGlzLnJlbmRlclByb3BzKTtcclxuICAgICAgICB0aGlzLmhvbGxvd0hhbmRsZXIgPSBuZXcgSG9sbG93SGFuZGxlcih0aGlzLnJlbmRlclByb3BzLCB0aGlzLmN1cnJlbnRNb2RlbCk7XHJcblxyXG4gICAgICAgIHRoaXMuZHVtbXlJbml0KClcclxuICAgICAgICB0aGlzLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHRoaXMucmVyZW5kZXIpXHJcblxyXG4gICAgfVxyXG5cclxuICBkdW1teUluaXQoKXtcclxuICAgIFxyXG5cclxuICAgICAgICB0aGlzLmRyYXdTY2VuZSgpXHJcbiAgfVxyXG5cclxuICAvLyBEcmF3IHRoZSBzY2VuZS5cclxuICBkcmF3U2NlbmUoKSB7XHJcblxyXG5cclxuICAgIC8vIGxvb2t1cCB1bmlmb3Jtc1xyXG4gICAgdGhpcy5jdXJyZW50TW9kZWwucmVuZGVyKHRoaXMucmVuZGVyUHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgcmVyZW5kZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmN1cnJlbnRNb2RlbC5yZW5kZXIodGhpcy5yZW5kZXJQcm9wcyk7XHJcbiAgICBcclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZXJlbmRlcilcclxuICB9XHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9sbG93SGFuZGxlcntcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcywgbW9kZWwpe1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICAgICAgLy8gdGhpcy5mYWN0b3J5ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXIoKVxyXG4gICAgfVxyXG5cclxuICAgIHNldE1vZGVsKG1vZGVsKXtcclxuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGV2ZW50TGlzdGVuZXIoKXtcclxuICAgICAgICBpZih0aGlzLm1vZGVsID09IG51bGwpIHJldHVybjtcclxuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uSGFuZGxlcigpO1xyXG4gICAgICAgIHRoaXMucm90YXRpb25IYW5kbGVyKCk7XHJcbiAgICAgICAgdGhpcy5zY2FsZUhhbmRsZXIoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNsYXRpb25IYW5kbGVyKCl7XHJcbiAgICAgICAgbGV0IHtkb2N1bWVudH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICAvL2hhbmRsZSB0cmFuc2xhdGlvbiBYIHNsaWRlclxyXG4gICAgICAgIGxldCB0cmFuc2xhdGlvblggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zbGF0aW9uLXgtc2xpZGVyXCIpO1xyXG4gICAgICAgIHRyYW5zbGF0aW9uWC5vbmlucHV0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHJhbnNsYXRpb25YTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zbGF0aW9uLXgtc2xpZGVyLXZhbHVlXCIpO1xyXG4gICAgICAgICAgICB0cmFuc2xhdGlvblhMYWJlbC5pbm5lckhUTUwgPSB0cmFuc2xhdGlvblgudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwudHJhbnNmb3JtLnRyYW5zbGF0aW9uLnggPSB0cmFuc2xhdGlvblgudmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2hhbmRsZSB0cmFuc2xhdGlvbiBZIHNsaWRlclxyXG4gICAgICAgIGxldCB0cmFuc2xhdGlvblkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zbGF0aW9uLXktc2xpZGVyXCIpO1xyXG4gICAgICAgIHRyYW5zbGF0aW9uWS5vbmlucHV0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHJhbnNsYXRpb25ZTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zbGF0aW9uLXktc2xpZGVyLXZhbHVlXCIpO1xyXG4gICAgICAgICAgICB0cmFuc2xhdGlvbllMYWJlbC5pbm5lckhUTUwgPSB0cmFuc2xhdGlvblkudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwudHJhbnNmb3JtLnRyYW5zbGF0aW9uLnkgPSB0cmFuc2xhdGlvblkudmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2hhbmRsZSB0cmFuc2xhdGlvbiBaIHNsaWRlclxyXG4gICAgICAgIGxldCB0cmFuc2xhdGlvblogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zbGF0aW9uLXotc2xpZGVyXCIpO1xyXG4gICAgICAgIHRyYW5zbGF0aW9uWi5vbmlucHV0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdHJhbnNsYXRpb25aTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zbGF0aW9uLXotc2xpZGVyLXZhbHVlXCIpO1xyXG4gICAgICAgICAgICB0cmFuc2xhdGlvblpMYWJlbC5pbm5lckhUTUwgPSB0cmFuc2xhdGlvbloudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwudHJhbnNmb3JtLnRyYW5zbGF0aW9uLnogPSB0cmFuc2xhdGlvbloudmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3NldCBjdXJyZW50IHRyYW5zbGF0aW9uIHZhbHVlc1xyXG4gICAgICAgIGxldCB0cmFuc2xhdGlvblhMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhbnNsYXRpb24teC1zbGlkZXItdmFsdWVcIik7XHJcbiAgICAgICAgdHJhbnNsYXRpb25YTGFiZWwuaW5uZXJIVE1MID0gdGhpcy5tb2RlbC50cmFuc2Zvcm0udHJhbnNsYXRpb24ueDtcclxuXHJcbiAgICAgICAgbGV0IHRyYW5zbGF0aW9uWUxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2xhdGlvbi15LXNsaWRlci12YWx1ZVwiKTtcclxuICAgICAgICB0cmFuc2xhdGlvbllMYWJlbC5pbm5lckhUTUwgPSB0aGlzLm1vZGVsLnRyYW5zZm9ybS50cmFuc2xhdGlvbi55O1xyXG5cclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25aTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zbGF0aW9uLXotc2xpZGVyLXZhbHVlXCIpO1xyXG4gICAgICAgIHRyYW5zbGF0aW9uWkxhYmVsLmlubmVySFRNTCA9IHRoaXMubW9kZWwudHJhbnNmb3JtLnRyYW5zbGF0aW9uLno7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcm90YXRpb25IYW5kbGVyKCl7XHJcbiAgICAgICAgbGV0IHtkb2N1bWVudH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICAvL2hhbmRsZSByb3RhdGlvbiBYIHNsaWRlclxyXG4gICAgICAgIGxldCByb3RhdGlvblggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdGF0aW9uLXgtc2xpZGVyXCIpO1xyXG4gICAgICAgIHJvdGF0aW9uWC5vbmlucHV0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcm90YXRpb25YTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdGF0aW9uLXgtc2xpZGVyLXZhbHVlXCIpO1xyXG4gICAgICAgICAgICByb3RhdGlvblhMYWJlbC5pbm5lckhUTUwgPSByb3RhdGlvblgudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwudHJhbnNmb3JtLnJvdGF0aW9uLnggPSByb3RhdGlvblgudmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2hhbmRsZSByb3RhdGlvbiBZIHNsaWRlclxyXG4gICAgICAgIGxldCByb3RhdGlvblkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdGF0aW9uLXktc2xpZGVyXCIpO1xyXG4gICAgICAgIHJvdGF0aW9uWS5vbmlucHV0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcm90YXRpb25ZTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdGF0aW9uLXktc2xpZGVyLXZhbHVlXCIpO1xyXG4gICAgICAgICAgICByb3RhdGlvbllMYWJlbC5pbm5lckhUTUwgPSByb3RhdGlvblkudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwudHJhbnNmb3JtLnJvdGF0aW9uLnkgPSByb3RhdGlvblkudmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2hhbmRsZSByb3RhdGlvbiBaIHNsaWRlclxyXG4gICAgICAgIGxldCByb3RhdGlvblogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdGF0aW9uLXotc2xpZGVyXCIpO1xyXG4gICAgICAgIHJvdGF0aW9uWi5vbmlucHV0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcm90YXRpb25aTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdGF0aW9uLXotc2xpZGVyLXZhbHVlXCIpO1xyXG4gICAgICAgICAgICByb3RhdGlvblpMYWJlbC5pbm5lckhUTUwgPSByb3RhdGlvbloudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwudHJhbnNmb3JtLnJvdGF0aW9uLnogPSByb3RhdGlvbloudmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3NldCBjdXJyZW50IHJvdGF0aW9uIHZhbHVlc1xyXG4gICAgICAgIGxldCByb3RhdGlvblhMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm90YXRpb24teC1zbGlkZXItdmFsdWVcIik7XHJcbiAgICAgICAgcm90YXRpb25YTGFiZWwuaW5uZXJIVE1MID0gdGhpcy5tb2RlbC50cmFuc2Zvcm0ucm90YXRpb24ueDtcclxuXHJcbiAgICAgICAgbGV0IHJvdGF0aW9uWUxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3RhdGlvbi15LXNsaWRlci12YWx1ZVwiKTtcclxuICAgICAgICByb3RhdGlvbllMYWJlbC5pbm5lckhUTUwgPSB0aGlzLm1vZGVsLnRyYW5zZm9ybS5yb3RhdGlvbi55O1xyXG5cclxuICAgICAgICBsZXQgcm90YXRpb25aTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdGF0aW9uLXotc2xpZGVyLXZhbHVlXCIpO1xyXG4gICAgICAgIHJvdGF0aW9uWkxhYmVsLmlubmVySFRNTCA9IHRoaXMubW9kZWwudHJhbnNmb3JtLnJvdGF0aW9uLno7XHJcbiAgICB9XHJcblxyXG4gICAgc2NhbGVIYW5kbGVyKCl7XHJcbiAgICAgICAgbGV0IHtkb2N1bWVudH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICAvL2hhbmRsZSBzY2FsZSBYIHNsaWRlclxyXG4gICAgICAgIGxldCBzY2FsZVggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjYWxhdGlvbi14LXNsaWRlclwiKTtcclxuICAgICAgICBzY2FsZVgub25pbnB1dCA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNjYWxlWExhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY2FsYXRpb24teC1zbGlkZXItdmFsdWVcIik7XHJcbiAgICAgICAgICAgIHNjYWxlWExhYmVsLmlubmVySFRNTCA9IHNjYWxlWC52YWx1ZS8xMDtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC50cmFuc2Zvcm0uc2NhbGUueCA9IHNjYWxlWC52YWx1ZS8xMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vaGFuZGxlIHNjYWxlIFkgc2xpZGVyXHJcbiAgICAgICAgbGV0IHNjYWxlWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NhbGF0aW9uLXktc2xpZGVyXCIpO1xyXG4gICAgICAgIHNjYWxlWS5vbmlucHV0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2NhbGVZTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjYWxhdGlvbi15LXNsaWRlci12YWx1ZVwiKTtcclxuICAgICAgICAgICAgc2NhbGVZTGFiZWwuaW5uZXJIVE1MID0gc2NhbGVZLnZhbHVlLzEwO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLnRyYW5zZm9ybS5zY2FsZS55ID0gc2NhbGVZLnZhbHVlLzEwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9oYW5kbGUgc2NhbGUgWiBzbGlkZXJcclxuICAgICAgICBsZXQgc2NhbGVaID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY2FsYXRpb24teS1zbGlkZXJcIik7XHJcbiAgICAgICAgc2NhbGVaLm9uaW5wdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzY2FsZVpMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NhbGF0aW9uLXktc2xpZGVyLXZhbHVlXCIpO1xyXG4gICAgICAgICAgICBzY2FsZVpMYWJlbC5pbm5lckhUTUwgPSBzY2FsZVoudmFsdWUvMTA7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwudHJhbnNmb3JtLnNjYWxlLnogPSBzY2FsZVoudmFsdWUvMTA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3NldCBjdXJyZW50IHNjYWxlIHZhbHVlc1xyXG4gICAgICAgIGxldCBzY2FsZVhMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NhbGF0aW9uLXgtc2xpZGVyLXZhbHVlXCIpO1xyXG4gICAgICAgIHNjYWxlWExhYmVsLmlubmVySFRNTCA9IHRoaXMubW9kZWwudHJhbnNmb3JtLnNjYWxlLng7XHJcblxyXG4gICAgICAgIGxldCBzY2FsZVlMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NhbGF0aW9uLXktc2xpZGVyLXZhbHVlXCIpO1xyXG4gICAgICAgIHNjYWxlWUxhYmVsLmlubmVySFRNTCA9IHRoaXMubW9kZWwudHJhbnNmb3JtLnNjYWxlLnk7XHJcblxyXG4gICAgICAgIGxldCBzY2FsZVpMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NhbGF0aW9uLXktc2xpZGVyLXZhbHVlXCIpO1xyXG4gICAgICAgIHNjYWxlWkxhYmVsLmlubmVySFRNTCA9IHRoaXMubW9kZWwudHJhbnNmb3JtLnNjYWxlLno7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgTWF0NCBmcm9tIFwiLi9tYXQ0XCI7XHJcbmltcG9ydCB7IGRlZ1RvUmFkIH0gZnJvbSBcIi4vbWF0aFV0aWxzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc2Zvcm17XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0aW9uLCB0cmFuc2xhdGlvbiwgcm90YXRpb24sIHNjYWxlLCBjZW50cm9pZCl7XHJcbiAgICAgICAgbGV0IFt4cCwgeXAsIHpwXSA9IHByb2plY3Rpb247XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0aW9uID0ge1xyXG4gICAgICAgICAgICB4OiB4cCxcclxuICAgICAgICAgICAgeTogeXAsXHJcbiAgICAgICAgICAgIHo6IHpwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBbeHQsIHl0LCB6dF0gPSB0cmFuc2xhdGlvbjtcclxuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uID0ge1xyXG4gICAgICAgICAgICB4OiB4dCxcclxuICAgICAgICAgICAgeTogeXQsXHJcbiAgICAgICAgICAgIHo6IHp0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBbeHIsIHlyLCB6cl0gPSByb3RhdGlvbjtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0ge1xyXG4gICAgICAgICAgICB4OiB4cixcclxuICAgICAgICAgICAgeTogeXIsXHJcbiAgICAgICAgICAgIHo6IHpyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBbeHMsIHlzLCB6c10gPSBzY2FsZTtcclxuICAgICAgICB0aGlzLnNjYWxlID0ge1xyXG4gICAgICAgICAgICB4OiB4cyxcclxuICAgICAgICAgICAgeTogeXMsXHJcbiAgICAgICAgICAgIHo6IHpzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBbeGMsIHljLCB6Y10gPSBjZW50cm9pZDtcclxuICAgICAgICB0aGlzLmNlbnRyb2lkID0ge1xyXG4gICAgICAgICAgICB4OiB4YyxcclxuICAgICAgICAgICAgeTogeWMsXHJcbiAgICAgICAgICAgIHo6IHpjXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2plY3Rpb25NYXRyaXgoKXtcclxuICAgICAgICAvL3BlcmZvcm0gcHJvamVjdGlvblxyXG4gICAgICAgIGxldCBtYXRyaXggPSBNYXQ0LnByb2plY3Rpb24odGhpcy5wcm9qZWN0aW9uLngsIHRoaXMucHJvamVjdGlvbi55LCB0aGlzLnByb2plY3Rpb24ueik7IFxyXG4gICAgICAgIC8vcGVyZm9ybSB0cmFuc2xhdGlvblxyXG4gICAgICAgIG1hdHJpeCA9IE1hdDQubXVsdGlwbHkobWF0cml4LCBNYXQ0LmdldFRyYW5zbGF0aW9uKHRoaXMudHJhbnNsYXRpb24ueCwgdGhpcy50cmFuc2xhdGlvbi55LCB0aGlzLnRyYW5zbGF0aW9uLnopKTtcclxuXHJcbiAgICAgICAgLy90cmFuc2xhdGUgdG8gdGhlIGNlbnRyb2lkXHJcbiAgICAgICAgLy9wZXJmb3JtIHJvdGF0aW9uXHJcbiAgICAgICAgbWF0cml4ID0gTWF0NC5tdWx0aXBseShtYXRyaXgsIE1hdDQuZ2V0Um90YXRpb25YKGRlZ1RvUmFkKHRoaXMucm90YXRpb24ueCkpKTtcclxuICAgICAgICBtYXRyaXggPSBNYXQ0Lm11bHRpcGx5KG1hdHJpeCwgTWF0NC5nZXRSb3RhdGlvblkoZGVnVG9SYWQodGhpcy5yb3RhdGlvbi55KSkpO1xyXG4gICAgICAgIG1hdHJpeCA9IE1hdDQubXVsdGlwbHkobWF0cml4LCBNYXQ0LmdldFJvdGF0aW9uWihkZWdUb1JhZCh0aGlzLnJvdGF0aW9uLnopKSk7IFxyXG4gICAgICAgIC8vIHRyYW5zbGF0ZSBiYWNrIHRvIHRoZSBvcmlnaW5hbCBwb3NpdGlvblxyXG4gICAgICAgIC8vcGVyZm9ybSBzY2FsaW5nXHJcbiAgICAgICAgbWF0cml4ID0gTWF0NC5tdWx0aXBseShtYXRyaXgsIE1hdDQuZ2V0U2NhbGUodGhpcy5zY2FsZS54LCB0aGlzLnNjYWxlLnksIHRoaXMuc2NhbGUueikpO1xyXG4gICAgICAgIHJldHVybiBtYXRyaXg7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlYzR7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB6LCB3KXtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy56ID0gejtcclxuICAgICAgICB0aGlzLncgPSB3O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGFkZChhLCBiKXtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzQoYS54ICsgYi54LCBhLnkgKyBiLnksIGEueiArIGIueiwgYS53ICsgYi53KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZG90KGEsIGIpe1xyXG4gICAgICAgIHJldHVybiBhLnggKiBiLnggKyBhLnkgKiBiLnkgKyBhLnogKiBiLnogKyBhLncgKiBiLnc7XHJcbiAgICB9XHJcblxyXG4gICAgYXNBcnJheSgpeyAgXHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueSwgdGhpcy56LCB0aGlzLnddO1xyXG4gICAgfVxyXG5cclxufSIsIlxyXG5pbXBvcnQgVmVjNCBmcm9tICcuL1ZlYzQuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0NHtcclxuXHJcbiAgICBkYXRhO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG0wMCwgbTAxLCBtMDIsIG0wMywgXHJcbiAgICAgICAgICAgICAgICBtMTAsIG0xMSwgbTEyLCBtMTMsIFxyXG4gICAgICAgICAgICAgICAgbTIwLCBtMjEsIG0yMiwgbTIzLCBcclxuICAgICAgICAgICAgICAgIG0zMCwgbTMxLCBtMzIsIG0zMyl7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IEZsb2F0MzJBcnJheShbbTAwLCBtMDEsIG0wMiwgbTAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0xMCwgbTExLCBtMTIsIG0xMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMjAsIG0yMSwgbTIyLCBtMjMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTMwLCBtMzEsIG0zMiwgbTMzXSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEVtcHR5KCl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXQ0KDAsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsIDAsIDAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRJZGVudGl0eSgpe1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0NCgxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLCAwLCAwLCAxKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIGdldFRyYW5zbGF0aW9uKHgsIHksIHope1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0NCgxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4LCB5LCB6LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0U2NhbGUoeCwgeSwgeil7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgTWF0NCh4LCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLCB5LCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLCAwLCB6LCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLCAwLCAwLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Um90YXRpb25YKHRoZXRhKXtcclxuICAgICAgICByZXR1cm4gbmV3IE1hdDQoMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCwgTWF0aC5jb3ModGhldGEpLCAtTWF0aC5zaW4odGhldGEpLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLCBNYXRoLnNpbih0aGV0YSksIE1hdGguY29zKHRoZXRhKSwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCwgMCwgMCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFJvdGF0aW9uWSh0aGV0YSl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXQ0KE1hdGguY29zKHRoZXRhKSwgMCwgTWF0aC5zaW4odGhldGEpLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtTWF0aC5zaW4odGhldGEpLCAwLCBNYXRoLmNvcyh0aGV0YSksIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsIDAsIDAsIDEpO1xyXG4gICAgfSAgIFxyXG5cclxuICAgIHN0YXRpYyBnZXRSb3RhdGlvbloodGhldGEpe1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0NChNYXRoLmNvcyh0aGV0YSksIC1NYXRoLnNpbih0aGV0YSksIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguc2luKHRoZXRhKSwgTWF0aC5jb3ModGhldGEpLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLCAwLCAwLCAxKTtcclxuICAgIH0gICBcclxuICAgIHN0YXRpYyBwcm9qZWN0aW9uKHdpZHRoLCBoZWlnaHQsIGRlcHRoKSB7XHJcbiAgICAgICAgLy8gTm90ZTogVGhpcyBtYXRyaXggZmxpcHMgdGhlIFkgYXhpcyBzbyAwIGlzIGF0IHRoZSB0b3AuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXQ0KDIgLyB3aWR0aCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCwgLTIgLyBoZWlnaHQsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsIDAsIDIgLyBkZXB0aCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLTEsIDEsIDAsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbHVtbihpKXtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzQodGhpcy5kYXRhW2ldLCB0aGlzLmRhdGFbaSArIDRdLCB0aGlzLmRhdGFbaSArIDhdLCB0aGlzLmRhdGFbaSArIDEyXSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Um93KGkpe1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjNCh0aGlzLmRhdGFbaSAqIDRdLCB0aGlzLmRhdGFbaSAqIDQgKyAxXSwgdGhpcy5kYXRhW2kgKiA0ICsgMl0sIHRoaXMuZGF0YVtpICogNCArIDNdKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbnN0YW5jZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgZm9vKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmb29cIik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG11bHRpcGx5KGEsIGIpe1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBNYXQ0LmdldEVtcHR5KCk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDQ7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCByb3cgPSBiLmdldFJvdyhpKTtcclxuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IDQ7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sID0gYS5nZXRDb2x1bW4oaik7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuZGF0YVtpICogNCArIGpdID0gVmVjNC5kb3Qocm93LCBjb2wpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn0iLCJcclxuZXhwb3J0IGZ1bmN0aW9uIGRlZ1RvUmFkKGRlZ3JlZXMpe1xyXG4gICAgcmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xyXG59ICAgXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFkVG9EZWcocmFkaWFucyl7XHJcbiAgICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XHJcbn0iLCJpbXBvcnQgVHJhbnNmb3JtIGZyb20gXCIuLi9tYXRoL1RyYW5zZm9ybS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZU1vZGVsIHtcclxuXHJcblxyXG4gICAgLy8gYWJzdHJhY3QgcmVhZG9ubHkgc2hhcGU6IFNoYXBlRW51bTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IG51bGw7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQUJTVFJBQ1QgTUVUSE9EXHJcbiAgICAgKi9cclxuICAgIC8vIHB1YmxpYyBhYnN0cmFjdCBzZXRQb3NpdGlvbihnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0KTogdm9pZDtcclxuICAgIC8vIHB1YmxpYyBhYnN0cmFjdCBzZXRDb2xvcihnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0KTogdm9pZDtcclxuICAgIC8vIHB1YmxpYyBhYnN0cmFjdCBpc051bGxWZXJ0ZXgoKTogYm9vbGVhbjtcclxuICAgIC8vIHB1YmxpYyBhYnN0cmFjdCBjb3VudFZlcnRleCgpOiBudW1iZXI7XHJcbiAgICAvLyBwdWJsaWMgYWJzdHJhY3QgY291bnRSZWFsVmVydGV4KCk6IG51bWJlcjtcclxuICAgIC8vIHB1YmxpYyBhYnN0cmFjdCBjZW50cm9pZCgpOiBbbnVtYmVyLCBudW1iZXJdO1xyXG4gICAgLy8gcHVibGljIGFic3RyYWN0IGdldEdMVHlwZShnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0KTogbnVtYmVyO1xyXG4gICAgLy8gcHVibGljIGFic3RyYWN0IHNldFZlcnRleCh2ZXJ0ZXg6IFZlcnRleCwgaW5kZXg6IG51bWJlcik6IHZvaWQ7XHJcbiAgICAvLyBwdWJsaWMgYWJzdHJhY3QgY2hhbmdlQ29sb3IoY29sb3I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdKTogdm9pZDtcclxuXHJcbiAgICBzZXRQb3NpdGlvbihnbCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvbG9yKGdsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2VudHJvaWQoKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgaXNOdWxsVmVydGV4KCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvdW50VmVydGV4KCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcG9zaXRpb25Qcm9jKHJlbmRlclByb3BzKSB7XHJcbiAgICAgICAgbGV0IHsgZ2wsIHByb2dyYW0sIHBvc2l0aW9uQnVmZmVyIH0gPSByZW5kZXJQcm9wcztcclxuICAgICAgICBjb25zdCBwb3NpdGlvbkxvYyA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIFwiYV9wb3NpdGlvblwiKTtcclxuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShwb3NpdGlvbkxvYyk7XHJcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHBvc2l0aW9uQnVmZmVyKTtcclxuICAgICAgICB0aGlzLnNldFBvc2l0aW9uKGdsKTtcclxuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHBvc2l0aW9uTG9jLCAzLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbG9yUHJvYyhyZW5kZXJQcm9wcykge1xyXG4gICAgICAgIGxldCB7IGdsLCBwcm9ncmFtLCBjb2xvckJ1ZmZlciB9ID0gcmVuZGVyUHJvcHM7XHJcbiAgICAgICAgY29uc3QgY29sb3JMb2MgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBcImFfY29sb3JcIik7XHJcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoY29sb3JMb2MpO1xyXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBjb2xvckJ1ZmZlcik7XHJcbiAgICAgICAgdGhpcy5zZXRDb2xvcihnbCk7XHJcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihjb2xvckxvYywgNCwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBtYXRyaXhQcm9jKHJlbmRlclByb3BzKSB7XHJcbiAgICAgICAgbGV0IHsgZ2wsIHByb2dyYW0gfSA9IHJlbmRlclByb3BzO1xyXG4gICAgICAgIGNvbnN0IGNlbnRyb2lkID0gdGhpcy5nZXRDZW50cm9pZCgpO1xyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgbWF0ID0gdGhpcy50cmFuc2Zvcm0uZ2V0UHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cclxuICAgICAgICBjb25zdCBtYXRyaXhMb2MgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgXCJ1X21hdHJpeFwiKTtcclxuICAgICAgICBcclxuICAgICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KG1hdHJpeExvYywgZmFsc2UsIG1hdC5nZXRJbnN0YW5jZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3UHJvYyhyZW5kZXJQcm9wcykge1xyXG4gICAgICAgIGxldCB7IGdsIH0gPSByZW5kZXJQcm9wcztcclxuICAgICAgICBjb25zdCBwcmltaXRpdmUgPSBnbC5UUklBTkdMRVM7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gMDtcclxuICAgICAgICBjb25zdCBjb3VudCA9IHRoaXMuY291bnRWZXJ0ZXgoKTtcclxuXHJcbiAgICAgICAgZ2wuZHJhd0FycmF5cyhwcmltaXRpdmUsIG9mZnNldCwgY291bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0geyp9IHIgOiByZW5kZXJQcm9wc1xyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHJlbmRlcihyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNOdWxsVmVydGV4KCkpIHJldHVybjtcclxuICAgICAgICBjb25zdCB7Z2wsIHByb2dyYW0sIHBvc2l0aW9uQnVmZmVyLCBjb2xvckJ1ZmZlcn0gPSByO1xyXG4gICAgICAgIC8vIENsZWFyIHRoZSBjYW52YXMuXHJcbiAgICAgICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IGdsLkRFUFRIX0JVRkZFUl9CSVQpO1xyXG5cclxuICAgICAgICAvLyBUdXJuIG9uIGN1bGxpbmcuIEJ5IGRlZmF1bHQgYmFja2ZhY2luZyB0cmlhbmdsZXNcclxuICAgICAgICAvLyB3aWxsIGJlIGN1bGxlZC5cclxuICAgICAgICBnbC5lbmFibGUoZ2wuQ1VMTF9GQUNFKTtcclxuXHJcbiAgICAgICAgLy8gRW5hYmxlIHRoZSBkZXB0aCBidWZmZXJcclxuICAgICAgICBnbC5lbmFibGUoZ2wuREVQVEhfVEVTVCk7XHJcbiAgICAgICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uUHJvYyhyKTtcclxuICAgICAgICB0aGlzLmNvbG9yUHJvYyhyKTtcclxuICAgICAgICB0aGlzLm1hdHJpeFByb2Mocik7XHJcbiAgICAgICAgdGhpcy5kcmF3UHJvYyhyKTtcclxuICAgIH1cclxufSIsImltcG9ydCBCYXNlTW9kZWwgZnJvbSAnLi9CYXNlTW9kZWwuanMnO1xyXG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gJy4uL21hdGgvVHJhbnNmb3JtLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER1bW15TW9kZWwgZXh0ZW5kcyBCYXNlTW9kZWx7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQsIHJlbmRlclByb3BzKXtcclxuICAgICAgICBzdXBlcihpZCk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbkJ1ZmZlciA9IHBvc2l0aW9uQnVmZmVyO1xyXG4gICAgICAgIHRoaXMuY29sb3JCdWZmZXIgPSBjb2xvckJ1ZmZlcjtcclxuICAgICAgICB0aGlzLmluaXRUcmFuc2Zvcm0ocmVuZGVyUHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRUcmFuc2Zvcm0ocmVuZGVyUHJvcHMpe1xyXG4gICAgICAgIGxldCB7IGdsLCBwcm9ncmFtIH0gPSByZW5kZXJQcm9wcztcclxuICAgICAgICBsZXQgcHJvamVjdGlvbiA9IFtnbC5jYW52YXMuY2xpZW50V2lkdGgsIGdsLmNhbnZhcy5jbGllbnRIZWlnaHQsIDQwMF07XHJcbiAgICAgICAgbGV0IHRyYW5zbGF0aW9uID0gWzAsIDAsIDBdO1xyXG4gICAgICAgIGxldCByb3RhdGlvbiA9IFswLCAwLCAwXTtcclxuICAgICAgICBsZXQgc2NhbGUgPSBbMSwgMSwgMV07XHJcbiAgICAgICAgbGV0IGNlbnRyb2lkID0gdGhpcy5nZXRDZW50cm9pZCgpO1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gbmV3IFRyYW5zZm9ybShwcm9qZWN0aW9uLCB0cmFuc2xhdGlvbiwgcm90YXRpb24sIHNjYWxlLCBjZW50cm9pZCk7XHJcbiAgICB9XHJcbiAgICAvLyBvdmVycmlkZSBjb2xvclByb2NcclxuICAgIGNvbG9yUHJvYyhyZW5kZXJQcm9wcyl7XHJcbiAgICAgICAgbGV0IHsgZ2wsIHByb2dyYW0sIGNvbG9yQnVmZmVyIH0gPSByZW5kZXJQcm9wcztcclxuICAgICAgICBjb25zdCBjb2xvckxvYyA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIFwiYV9jb2xvclwiKTtcclxuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShjb2xvckxvYyk7XHJcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGNvbG9yQnVmZmVyKTtcclxuICAgICAgICB0aGlzLnNldENvbG9yKGdsKTtcclxuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGNvbG9yTG9jLCAzLCBnbC5VTlNJR05FRF9CWVRFLCB0cnVlLCAwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvL292ZXJyaWRlIGRyYXdQcm9jXHJcbiAgICBkcmF3UHJvYyhyZW5kZXJQcm9wcyl7XHJcbiAgICAgICAgbGV0IHsgZ2wgfSA9IHJlbmRlclByb3BzO1xyXG4gICAgICAgIHZhciBwcmltaXRpdmVUeXBlID0gZ2wuVFJJQU5HTEVTO1xyXG4gICAgICAgIHZhciBvZmZzZXQgPSAwO1xyXG4gICAgICAgIHZhciBjb3VudCA9IDE2ICogNjtcclxuICAgICAgICBnbC5kcmF3QXJyYXlzKHByaW1pdGl2ZVR5cGUsIG9mZnNldCwgY291bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vaW1wbGVtZW50IHRoZSBhYnN0cmFjdCBtZXRob2RcclxuICAgIHNldFBvc2l0aW9uKGdsKXtcclxuICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5wb3NpdGlvbkJ1ZmZlciwgZ2wuU1RBVElDX0RSQVcpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvbG9yKGdsKXtcclxuICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5jb2xvckJ1ZmZlciwgZ2wuU1RBVElDX0RSQVcpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENlbnRyb2lkKCl7XHJcbiAgICAgICAgLy9pdGVyYXRlIHRocm91Z2ggdGhlIHBvc2l0aW9uIGJ1ZmZlciBhbmQgZ2V0IHRoZSBjZW50cm9pZFxyXG4gICAgICAgIGxldCB4ID0gMDtcclxuICAgICAgICBsZXQgeSA9IDA7XHJcbiAgICAgICAgbGV0IHogPSAwO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnBvc2l0aW9uQnVmZmVyLmxlbmd0aDsgaSs9Myl7XHJcbiAgICAgICAgICAgIHggKz0gdGhpcy5wb3NpdGlvbkJ1ZmZlcltpXTtcclxuICAgICAgICAgICAgeSArPSB0aGlzLnBvc2l0aW9uQnVmZmVyW2krMV07XHJcbiAgICAgICAgICAgIHogKz0gdGhpcy5wb3NpdGlvbkJ1ZmZlcltpKzJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbiA9IHRoaXMucG9zaXRpb25CdWZmZXIubGVuZ3RoLzM7XHJcbiAgICAgICAgcmV0dXJuIFt4L24sIHkvbiwgei9uXTtcclxuICAgIH1cclxuXHJcbiAgICBpc051bGxWZXJ0ZXgoKXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcblxyXG59XHJcblxyXG5jb25zdCBwb3NpdGlvbkJ1ZmZlciA9IG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgLy8gbGVmdCBjb2x1bW4gZnJvbnRcclxuICAgIDAsICAgMCwgIDAsXHJcbiAgICAwLCAxNTAsICAwLFxyXG4gICAgMzAsICAgMCwgIDAsXHJcbiAgICAwLCAxNTAsICAwLFxyXG4gICAgMzAsIDE1MCwgIDAsXHJcbiAgICAzMCwgICAwLCAgMCxcclxuXHJcbiAgICAvLyB0b3AgcnVuZyBmcm9udFxyXG4gICAgMzAsICAgMCwgIDAsXHJcbiAgICAzMCwgIDMwLCAgMCxcclxuICAgIDEwMCwgICAwLCAgMCxcclxuICAgIDMwLCAgMzAsICAwLFxyXG4gICAgMTAwLCAgMzAsICAwLFxyXG4gICAgMTAwLCAgIDAsICAwLFxyXG5cclxuICAgIC8vIG1pZGRsZSBydW5nIGZyb250XHJcbiAgICAzMCwgIDYwLCAgMCxcclxuICAgIDMwLCAgOTAsICAwLFxyXG4gICAgNjcsICA2MCwgIDAsXHJcbiAgICAzMCwgIDkwLCAgMCxcclxuICAgIDY3LCAgOTAsICAwLFxyXG4gICAgNjcsICA2MCwgIDAsXHJcblxyXG4gICAgLy8gbGVmdCBjb2x1bW4gYmFja1xyXG4gICAgICAwLCAgIDAsICAzMCxcclxuICAgICAzMCwgICAwLCAgMzAsXHJcbiAgICAgIDAsIDE1MCwgIDMwLFxyXG4gICAgICAwLCAxNTAsICAzMCxcclxuICAgICAzMCwgICAwLCAgMzAsXHJcbiAgICAgMzAsIDE1MCwgIDMwLFxyXG5cclxuICAgIC8vIHRvcCBydW5nIGJhY2tcclxuICAgICAzMCwgICAwLCAgMzAsXHJcbiAgICAxMDAsICAgMCwgIDMwLFxyXG4gICAgIDMwLCAgMzAsICAzMCxcclxuICAgICAzMCwgIDMwLCAgMzAsXHJcbiAgICAxMDAsICAgMCwgIDMwLFxyXG4gICAgMTAwLCAgMzAsICAzMCxcclxuXHJcbiAgICAvLyBtaWRkbGUgcnVuZyBiYWNrXHJcbiAgICAgMzAsICA2MCwgIDMwLFxyXG4gICAgIDY3LCAgNjAsICAzMCxcclxuICAgICAzMCwgIDkwLCAgMzAsXHJcbiAgICAgMzAsICA5MCwgIDMwLFxyXG4gICAgIDY3LCAgNjAsICAzMCxcclxuICAgICA2NywgIDkwLCAgMzAsXHJcblxyXG4gICAgLy8gdG9wXHJcbiAgICAgIDAsICAgMCwgICAwLFxyXG4gICAgMTAwLCAgIDAsICAgMCxcclxuICAgIDEwMCwgICAwLCAgMzAsXHJcbiAgICAgIDAsICAgMCwgICAwLFxyXG4gICAgMTAwLCAgIDAsICAzMCxcclxuICAgICAgMCwgICAwLCAgMzAsXHJcblxyXG4gICAgLy8gdG9wIHJ1bmcgcmlnaHRcclxuICAgIDEwMCwgICAwLCAgIDAsXHJcbiAgICAxMDAsICAzMCwgICAwLFxyXG4gICAgMTAwLCAgMzAsICAzMCxcclxuICAgIDEwMCwgICAwLCAgIDAsXHJcbiAgICAxMDAsICAzMCwgIDMwLFxyXG4gICAgMTAwLCAgIDAsICAzMCxcclxuXHJcbiAgICAvLyB1bmRlciB0b3AgcnVuZ1xyXG4gICAgMzAsICAgMzAsICAgMCxcclxuICAgIDMwLCAgIDMwLCAgMzAsXHJcbiAgICAxMDAsICAzMCwgIDMwLFxyXG4gICAgMzAsICAgMzAsICAgMCxcclxuICAgIDEwMCwgIDMwLCAgMzAsXHJcbiAgICAxMDAsICAzMCwgICAwLFxyXG5cclxuICAgIC8vIGJldHdlZW4gdG9wIHJ1bmcgYW5kIG1pZGRsZVxyXG4gICAgMzAsICAgMzAsICAgMCxcclxuICAgIDMwLCAgIDYwLCAgMzAsXHJcbiAgICAzMCwgICAzMCwgIDMwLFxyXG4gICAgMzAsICAgMzAsICAgMCxcclxuICAgIDMwLCAgIDYwLCAgIDAsXHJcbiAgICAzMCwgICA2MCwgIDMwLFxyXG5cclxuICAgIC8vIHRvcCBvZiBtaWRkbGUgcnVuZ1xyXG4gICAgMzAsICAgNjAsICAgMCxcclxuICAgIDY3LCAgIDYwLCAgMzAsXHJcbiAgICAzMCwgICA2MCwgIDMwLFxyXG4gICAgMzAsICAgNjAsICAgMCxcclxuICAgIDY3LCAgIDYwLCAgIDAsXHJcbiAgICA2NywgICA2MCwgIDMwLFxyXG5cclxuICAgIC8vIHJpZ2h0IG9mIG1pZGRsZSBydW5nXHJcbiAgICA2NywgICA2MCwgICAwLFxyXG4gICAgNjcsICAgOTAsICAzMCxcclxuICAgIDY3LCAgIDYwLCAgMzAsXHJcbiAgICA2NywgICA2MCwgICAwLFxyXG4gICAgNjcsICAgOTAsICAgMCxcclxuICAgIDY3LCAgIDkwLCAgMzAsXHJcblxyXG4gICAgLy8gYm90dG9tIG9mIG1pZGRsZSBydW5nLlxyXG4gICAgMzAsICAgOTAsICAgMCxcclxuICAgIDMwLCAgIDkwLCAgMzAsXHJcbiAgICA2NywgICA5MCwgIDMwLFxyXG4gICAgMzAsICAgOTAsICAgMCxcclxuICAgIDY3LCAgIDkwLCAgMzAsXHJcbiAgICA2NywgICA5MCwgICAwLFxyXG5cclxuICAgIC8vIHJpZ2h0IG9mIGJvdHRvbVxyXG4gICAgMzAsICAgOTAsICAgMCxcclxuICAgIDMwLCAgMTUwLCAgMzAsXHJcbiAgICAzMCwgICA5MCwgIDMwLFxyXG4gICAgMzAsICAgOTAsICAgMCxcclxuICAgIDMwLCAgMTUwLCAgIDAsXHJcbiAgICAzMCwgIDE1MCwgIDMwLFxyXG5cclxuICAgIC8vIGJvdHRvbVxyXG4gICAgMCwgICAxNTAsICAgMCxcclxuICAgIDAsICAgMTUwLCAgMzAsXHJcbiAgICAzMCwgIDE1MCwgIDMwLFxyXG4gICAgMCwgICAxNTAsICAgMCxcclxuICAgIDMwLCAgMTUwLCAgMzAsXHJcbiAgICAzMCwgIDE1MCwgICAwLFxyXG5cclxuICAgIC8vIGxlZnQgc2lkZVxyXG4gICAgMCwgICAwLCAgIDAsXHJcbiAgICAwLCAgIDAsICAzMCxcclxuICAgIDAsIDE1MCwgIDMwLFxyXG4gICAgMCwgICAwLCAgIDAsXHJcbiAgICAwLCAxNTAsICAzMCxcclxuICAgIDAsIDE1MCwgICAwXSlcclxuXHJcbmNvbnN0IGNvbG9yQnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoW1xyXG4gICAgLy8gbGVmdCBjb2x1bW4gZnJvbnRcclxuICAyMDAsICA3MCwgMTIwLFxyXG4gIDIwMCwgIDcwLCAxMjAsXHJcbiAgMjAwLCAgNzAsIDEyMCxcclxuICAyMDAsICA3MCwgMTIwLFxyXG4gIDIwMCwgIDcwLCAxMjAsXHJcbiAgMjAwLCAgNzAsIDEyMCxcclxuXHJcbiAgICAvLyB0b3AgcnVuZyBmcm9udFxyXG4gIDIwMCwgIDcwLCAxMjAsXHJcbiAgMjAwLCAgNzAsIDEyMCxcclxuICAyMDAsICA3MCwgMTIwLFxyXG4gIDIwMCwgIDcwLCAxMjAsXHJcbiAgMjAwLCAgNzAsIDEyMCxcclxuICAyMDAsICA3MCwgMTIwLFxyXG5cclxuICAgIC8vIG1pZGRsZSBydW5nIGZyb250XHJcbiAgMjAwLCAgNzAsIDEyMCxcclxuICAyMDAsICA3MCwgMTIwLFxyXG4gIDIwMCwgIDcwLCAxMjAsXHJcbiAgMjAwLCAgNzAsIDEyMCxcclxuICAyMDAsICA3MCwgMTIwLFxyXG4gIDIwMCwgIDcwLCAxMjAsXHJcblxyXG4gICAgLy8gbGVmdCBjb2x1bW4gYmFja1xyXG4gIDgwLCA3MCwgMjAwLFxyXG4gIDgwLCA3MCwgMjAwLFxyXG4gIDgwLCA3MCwgMjAwLFxyXG4gIDgwLCA3MCwgMjAwLFxyXG4gIDgwLCA3MCwgMjAwLFxyXG4gIDgwLCA3MCwgMjAwLFxyXG5cclxuICAgIC8vIHRvcCBydW5nIGJhY2tcclxuICA4MCwgNzAsIDIwMCxcclxuICA4MCwgNzAsIDIwMCxcclxuICA4MCwgNzAsIDIwMCxcclxuICA4MCwgNzAsIDIwMCxcclxuICA4MCwgNzAsIDIwMCxcclxuICA4MCwgNzAsIDIwMCxcclxuXHJcbiAgICAvLyBtaWRkbGUgcnVuZyBiYWNrXHJcbiAgODAsIDcwLCAyMDAsXHJcbiAgODAsIDcwLCAyMDAsXHJcbiAgODAsIDcwLCAyMDAsXHJcbiAgODAsIDcwLCAyMDAsXHJcbiAgODAsIDcwLCAyMDAsXHJcbiAgODAsIDcwLCAyMDAsXHJcblxyXG4gICAgLy8gdG9wXHJcbiAgNzAsIDIwMCwgMjEwLFxyXG4gIDcwLCAyMDAsIDIxMCxcclxuICA3MCwgMjAwLCAyMTAsXHJcbiAgNzAsIDIwMCwgMjEwLFxyXG4gIDcwLCAyMDAsIDIxMCxcclxuICA3MCwgMjAwLCAyMTAsXHJcblxyXG4gICAgLy8gdG9wIHJ1bmcgcmlnaHRcclxuICAyMDAsIDIwMCwgNzAsXHJcbiAgMjAwLCAyMDAsIDcwLFxyXG4gIDIwMCwgMjAwLCA3MCxcclxuICAyMDAsIDIwMCwgNzAsXHJcbiAgMjAwLCAyMDAsIDcwLFxyXG4gIDIwMCwgMjAwLCA3MCxcclxuXHJcbiAgICAvLyB1bmRlciB0b3AgcnVuZ1xyXG4gIDIxMCwgMTAwLCA3MCxcclxuICAyMTAsIDEwMCwgNzAsXHJcbiAgMjEwLCAxMDAsIDcwLFxyXG4gIDIxMCwgMTAwLCA3MCxcclxuICAyMTAsIDEwMCwgNzAsXHJcbiAgMjEwLCAxMDAsIDcwLFxyXG5cclxuICAgIC8vIGJldHdlZW4gdG9wIHJ1bmcgYW5kIG1pZGRsZVxyXG4gIDIxMCwgMTYwLCA3MCxcclxuICAyMTAsIDE2MCwgNzAsXHJcbiAgMjEwLCAxNjAsIDcwLFxyXG4gIDIxMCwgMTYwLCA3MCxcclxuICAyMTAsIDE2MCwgNzAsXHJcbiAgMjEwLCAxNjAsIDcwLFxyXG5cclxuICAgIC8vIHRvcCBvZiBtaWRkbGUgcnVuZ1xyXG4gIDcwLCAxODAsIDIxMCxcclxuICA3MCwgMTgwLCAyMTAsXHJcbiAgNzAsIDE4MCwgMjEwLFxyXG4gIDcwLCAxODAsIDIxMCxcclxuICA3MCwgMTgwLCAyMTAsXHJcbiAgNzAsIDE4MCwgMjEwLFxyXG5cclxuICAgIC8vIHJpZ2h0IG9mIG1pZGRsZSBydW5nXHJcbiAgMTAwLCA3MCwgMjEwLFxyXG4gIDEwMCwgNzAsIDIxMCxcclxuICAxMDAsIDcwLCAyMTAsXHJcbiAgMTAwLCA3MCwgMjEwLFxyXG4gIDEwMCwgNzAsIDIxMCxcclxuICAxMDAsIDcwLCAyMTAsXHJcblxyXG4gICAgLy8gYm90dG9tIG9mIG1pZGRsZSBydW5nLlxyXG4gIDc2LCAyMTAsIDEwMCxcclxuICA3NiwgMjEwLCAxMDAsXHJcbiAgNzYsIDIxMCwgMTAwLFxyXG4gIDc2LCAyMTAsIDEwMCxcclxuICA3NiwgMjEwLCAxMDAsXHJcbiAgNzYsIDIxMCwgMTAwLFxyXG5cclxuICAgIC8vIHJpZ2h0IG9mIGJvdHRvbVxyXG4gIDE0MCwgMjEwLCA4MCxcclxuICAxNDAsIDIxMCwgODAsXHJcbiAgMTQwLCAyMTAsIDgwLFxyXG4gIDE0MCwgMjEwLCA4MCxcclxuICAxNDAsIDIxMCwgODAsXHJcbiAgMTQwLCAyMTAsIDgwLFxyXG5cclxuICAgIC8vIGJvdHRvbVxyXG4gIDkwLCAxMzAsIDExMCxcclxuICA5MCwgMTMwLCAxMTAsXHJcbiAgOTAsIDEzMCwgMTEwLFxyXG4gIDkwLCAxMzAsIDExMCxcclxuICA5MCwgMTMwLCAxMTAsXHJcbiAgOTAsIDEzMCwgMTEwLFxyXG5cclxuICAgIC8vIGxlZnQgc2lkZVxyXG4gIDE2MCwgMTYwLCAyMjAsXHJcbiAgMTYwLCAxNjAsIDIyMCxcclxuICAxNjAsIDE2MCwgMjIwLFxyXG4gIDE2MCwgMTYwLCAyMjAsXHJcbiAgMTYwLCAxNjAsIDIyMCxcclxuICAxNjAsIDE2MCwgMjIwXSkiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcm9ncmFtKFxyXG4gICAgZ2wsXHJcbiAgICB2ZXJ0ZXhTaGFkZXIsXHJcbiAgICBmcmFnbWVudFNoYWRlclxyXG4pe1xyXG4gICAgY29uc3QgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcclxuXHJcbiAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcclxuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XHJcblxyXG4gICAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XHJcblxyXG4gICAgY29uc3Qgc3VjY2VzcyA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpO1xyXG4gICAgaWYgKCFzdWNjZXNzKSB7XHJcbiAgICAgICAgZ2wuZGVsZXRlUHJvZ3JhbShwcm9ncmFtKTtcclxuXHJcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJGYWlsZWQgdG8gY29tcGlsZSBzaGFkZXIhXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwcm9ncmFtO1xyXG59XHJcbiIsImZ1bmN0aW9uIHJlc2l6ZUNhbnZhc1RvRGlzcGxheVNpemUoY2FudmFzKSB7XHJcbiAgICAvLyBMb29rdXAgdGhlIHNpemUgdGhlIGJyb3dzZXIgaXMgZGlzcGxheWluZyB0aGUgY2FudmFzIGluIENTUyBwaXhlbHMuXHJcbiAgICBjb25zdCBkaXNwbGF5V2lkdGggPSBjYW52YXMuY2xpZW50V2lkdGg7XHJcbiAgICBjb25zdCBkaXNwbGF5SGVpZ2h0ID0gY2FudmFzLmNsaWVudEhlaWdodDtcclxuXHJcbiAgICBjYW52YXMud2lkdGggPSBkaXNwbGF5V2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gZGlzcGxheUhlaWdodDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2hhZGVyKFxyXG4gICAgZ2wsXHJcbiAgICB0eXBlLFxyXG4gICAgc291cmNlXHJcbikge1xyXG4gICAgY29uc3Qgc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHR5cGUpO1xyXG4gICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc291cmNlKTtcclxuICAgIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcclxuXHJcbiAgICBjb25zdCBzdWNjZXNzID0gZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpO1xyXG4gICAgaWYgKCFzdWNjZXNzKSB7XHJcbiAgICAgICAgZ2wuZGVsZXRlU2hhZGVyKHNoYWRlcik7XHJcblxyXG4gICAgICAgIHRocm93IEVycm9yKFwiRmFpbGVkIHRvIGNvbXBpbGUgc2hhZGVyIVwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2hhZGVyO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCJcclxuXHJcbi8vIGltcG9ydCB3ZWJnbFV0aWxzIGZyb20gXCJ3ZWJnbC11dGlsc1wiO1xyXG5pbXBvcnQgRHJhd0hhbmRsZXIgZnJvbSBcIi4vaGFuZGxlci9EcmF3SGFuZGxlclwiO1xyXG5pbXBvcnQgY3JlYXRlUHJvZ3JhbSBmcm9tIFwiLi91dGlscy9wcm9ncmFtXCI7XHJcbmltcG9ydCByZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplIGZyb20gXCIuL3V0aWxzL3Jlc2l6ZVwiO1xyXG5pbXBvcnQgY3JlYXRlU2hhZGVyIGZyb20gXCIuL3V0aWxzL3NoYWRlcnNcIjtcclxuXHJcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2wtY2FudmFzXCIpO1xyXG5jb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2xcIik7XHJcbmlmKCFnbCl7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJXZWJHTCBub3Qgc3VwcG9ydGVkXCIpO1xyXG59XHJcblxyXG5jb25zdCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZlcnRleC1zaGFkZXItM2RcIik/LnRleHRDb250ZW50O1xyXG5jb25zdCBmcmFnbWVudFNoYWRlclNvdXJjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJhZ21lbnQtc2hhZGVyLTNkXCIpPy50ZXh0Q29udGVudDtcclxuXHJcbmNvbnN0IHZlcnRleFNoYWRlciA9IGNyZWF0ZVNoYWRlcihnbCwgZ2wuVkVSVEVYX1NIQURFUiwgdmVydGV4U2hhZGVyU291cmNlKTtcclxuY29uc3QgZnJhZ21lbnRTaGFkZXIgPSBjcmVhdGVTaGFkZXIoXHJcbiAgICBnbCxcclxuICAgIGdsLkZSQUdNRU5UX1NIQURFUixcclxuICAgIGZyYWdtZW50U2hhZGVyU291cmNlXHJcbik7XHJcblxyXG4vLyBjb25zdCBwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbShnbCwgdmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcik7XHJcbmNvbnN0IHByb2dyYW0gPSB3ZWJnbFV0aWxzLmNyZWF0ZVByb2dyYW1Gcm9tU2NyaXB0cyhnbCwgW1widmVydGV4LXNoYWRlci0zZFwiLCBcImZyYWdtZW50LXNoYWRlci0zZFwiXSk7XHJcblxyXG5yZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplKGdsLmNhbnZhcyk7XHJcblxyXG5nbC52aWV3cG9ydCgwLCAwLCBnbC5jYW52YXMud2lkdGgsIGdsLmNhbnZhcy5oZWlnaHQpO1xyXG5cclxuZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XHJcblxyXG5nbC5lbmFibGUoZ2wuREVQVEhfVEVTVCk7XHJcbmdsLmVuYWJsZShnbC5DVUxMX0ZBQ0UpO1xyXG5cclxuXHJcbmdsLnVzZVByb2dyYW0ocHJvZ3JhbSk7XHJcblxyXG5cclxuY29uc3QgZHJhd0hhbmRsZXIgPSBuZXcgRHJhd0hhbmRsZXIoZ2wsIHByb2dyYW0sIGRvY3VtZW50KTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==