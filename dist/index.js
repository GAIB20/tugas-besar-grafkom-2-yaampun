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

        // translate to the centroid
        matrix = _mat4__WEBPACK_IMPORTED_MODULE_0__["default"].multiply(matrix, _mat4__WEBPACK_IMPORTED_MODULE_0__["default"].getTranslation(this.centroid.x, this.centroid.y, this.centroid.z));
        matrix = _mat4__WEBPACK_IMPORTED_MODULE_0__["default"].multiply(matrix, _mat4__WEBPACK_IMPORTED_MODULE_0__["default"].getRotationX((0,_mathUtils__WEBPACK_IMPORTED_MODULE_1__.degToRad)(this.rotation.x)));
        matrix = _mat4__WEBPACK_IMPORTED_MODULE_0__["default"].multiply(matrix, _mat4__WEBPACK_IMPORTED_MODULE_0__["default"].getRotationY((0,_mathUtils__WEBPACK_IMPORTED_MODULE_1__.degToRad)(this.rotation.y)));
        matrix = _mat4__WEBPACK_IMPORTED_MODULE_0__["default"].multiply(matrix, _mat4__WEBPACK_IMPORTED_MODULE_0__["default"].getRotationZ((0,_mathUtils__WEBPACK_IMPORTED_MODULE_1__.degToRad)(this.rotation.z))); 
        
        // translate back to the original position
        matrix = _mat4__WEBPACK_IMPORTED_MODULE_0__["default"].multiply(matrix, _mat4__WEBPACK_IMPORTED_MODULE_0__["default"].getTranslation(-this.centroid.x, -this.centroid.y, -this.centroid.z));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ3VCO0FBQ1Y7QUFDSTtBQUN6RDtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpRUFBVTtBQUMxQyxpQ0FBaUMsbUVBQWE7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25EZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZJMEI7QUFDYTtBQUN2QztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2Q0FBSTtBQUN6QjtBQUNBLGlCQUFpQiw2Q0FBSSxrQkFBa0IsNkNBQUk7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2Q0FBSSxrQkFBa0IsNkNBQUk7QUFDM0MsaUJBQWlCLDZDQUFJLGtCQUFrQiw2Q0FBSSxjQUFjLG9EQUFRO0FBQ2pFLGlCQUFpQiw2Q0FBSSxrQkFBa0IsNkNBQUksY0FBYyxvREFBUTtBQUNqRSxpQkFBaUIsNkNBQUksa0JBQWtCLDZDQUFJLGNBQWMsb0RBQVE7QUFDakU7QUFDQTtBQUNBLGlCQUFpQiw2Q0FBSSxrQkFBa0IsNkNBQUk7QUFDM0M7QUFDQSxpQkFBaUIsNkNBQUksa0JBQWtCLDZDQUFJO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzRGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQzZCO0FBQzdCO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnREFBSTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0RBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUI7QUFDQSwyQkFBMkIsT0FBTztBQUNsQztBQUNBLHlDQUF5QyxnREFBSTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2R0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDUDZDO0FBQzdDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDhCQUE4QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywyQkFBMkI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsY0FBYztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLEtBQUs7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxHQUFHO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwwQ0FBMEM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5R3VDO0FBQ007QUFDN0M7QUFDZSx5QkFBeUIscURBQVM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxjQUFjO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsMERBQVM7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsY0FBYywyQkFBMkI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxLQUFLO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0NBQWdDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2VWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUseUJBQXlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1QxQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNqQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05ZO0FBQ1o7QUFDQTtBQUNBLENBQWdEO0FBQ0o7QUFDVztBQUNaO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBEQUFZO0FBQ2pDLHVCQUF1QiwwREFBWTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0REFBVztBQUNuQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL2hhbmRsZXIvRHJhd0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvaGFuZGxlci9Nb2RlbEhhbmRsZXIvSG9sbG93SGFuZGxlci5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21hdGgvVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3N0cnVjdHMvbWF0aC9WZWM0LmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3N0cnVjdHMvbWF0aC9tYXQ0LmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3N0cnVjdHMvbWF0aC9tYXRoVXRpbHMuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tb2RlbC9CYXNlTW9kZWwuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tb2RlbC9EdW1teU1vZGVsLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3V0aWxzL3Byb2dyYW0uanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvdXRpbHMvcmVzaXplLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3V0aWxzL3NoYWRlcnMuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWF0NCBmcm9tIFwiLi4vc3RydWN0cy9tYXRoL21hdDRcIjtcclxuaW1wb3J0IHsgZGVnVG9SYWQsIHJhZFRvRGVnIH0gZnJvbSBcIi4uL3N0cnVjdHMvbWF0aC9tYXRoVXRpbHNcIjtcclxuaW1wb3J0IER1bW15TW9kZWwgZnJvbSBcIi4uL3N0cnVjdHMvbW9kZWwvRHVtbXlNb2RlbFwiO1xyXG5pbXBvcnQgSG9sbG93SGFuZGxlciBmcm9tIFwiLi9Nb2RlbEhhbmRsZXIvSG9sbG93SGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhd0hhbmRsZXJ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgZ2wsXHJcbiAgICAgICAgcHJvZ3JhbSxcclxuICAgICAgICBkb2N1bWVudCxcclxuXHJcbiAgICApe1xyXG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcclxuICAgICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xyXG4gICAgICAgIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudDtcclxuICAgICAgICB0aGlzLnJlbmRlclByb3BzID0ge1xyXG4gICAgICAgICAgZ2w6IHRoaXMuZ2wsXHJcbiAgICAgICAgICBwcm9ncmFtOiB0aGlzLnByb2dyYW0sXHJcbiAgICAgICAgICBwb3NpdGlvbkJ1ZmZlcjogdGhpcy5nbC5jcmVhdGVCdWZmZXIoKSxcclxuICAgICAgICAgIGNvbG9yQnVmZmVyOiB0aGlzLmdsLmNyZWF0ZUJ1ZmZlcigpLFxyXG4gICAgICAgICAgZG9jdW1lbnQ6IHRoaXMuZG9jdW1lbnQsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudE1vZGVsID0gbmV3IER1bW15TW9kZWwoMCwgdGhpcy5yZW5kZXJQcm9wcyk7XHJcbiAgICAgICAgdGhpcy5ob2xsb3dIYW5kbGVyID0gbmV3IEhvbGxvd0hhbmRsZXIodGhpcy5yZW5kZXJQcm9wcywgdGhpcy5jdXJyZW50TW9kZWwpO1xyXG5cclxuICAgICAgICB0aGlzLmR1bW15SW5pdCgpXHJcbiAgICAgICAgdGhpcy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCB0aGlzLnJlcmVuZGVyKVxyXG5cclxuICAgIH1cclxuXHJcbiAgZHVtbXlJbml0KCl7XHJcbiAgICBcclxuXHJcbiAgICAgICAgdGhpcy5kcmF3U2NlbmUoKVxyXG4gIH1cclxuXHJcbiAgLy8gRHJhdyB0aGUgc2NlbmUuXHJcbiAgZHJhd1NjZW5lKCkge1xyXG5cclxuXHJcbiAgICAvLyBsb29rdXAgdW5pZm9ybXNcclxuICAgIHRoaXMuY3VycmVudE1vZGVsLnJlbmRlcih0aGlzLnJlbmRlclByb3BzKTtcclxuICB9XHJcblxyXG4gIHJlcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5jdXJyZW50TW9kZWwucmVuZGVyKHRoaXMucmVuZGVyUHJvcHMpO1xyXG4gICAgXHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVyZW5kZXIpXHJcbiAgfVxyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbGxvd0hhbmRsZXJ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMsIG1vZGVsKXtcclxuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIC8vIHRoaXMuZmFjdG9yeSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyKClcclxuICAgIH1cclxuXHJcbiAgICBzZXRNb2RlbChtb2RlbCl7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBldmVudExpc3RlbmVyKCl7XHJcbiAgICAgICAgaWYodGhpcy5tb2RlbCA9PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbkhhbmRsZXIoKTtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uSGFuZGxlcigpO1xyXG4gICAgICAgIHRoaXMuc2NhbGVIYW5kbGVyKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zbGF0aW9uSGFuZGxlcigpe1xyXG4gICAgICAgIGxldCB7ZG9jdW1lbnR9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgLy9oYW5kbGUgdHJhbnNsYXRpb24gWCBzbGlkZXJcclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25YID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2xhdGlvbi14LXNsaWRlclwiKTtcclxuICAgICAgICB0cmFuc2xhdGlvblgub25pbnB1dCA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHRyYW5zbGF0aW9uWExhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2xhdGlvbi14LXNsaWRlci12YWx1ZVwiKTtcclxuICAgICAgICAgICAgdHJhbnNsYXRpb25YTGFiZWwuaW5uZXJIVE1MID0gdHJhbnNsYXRpb25YLnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLnRyYW5zZm9ybS50cmFuc2xhdGlvbi54ID0gdHJhbnNsYXRpb25YLnZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9oYW5kbGUgdHJhbnNsYXRpb24gWSBzbGlkZXJcclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25ZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2xhdGlvbi15LXNsaWRlclwiKTtcclxuICAgICAgICB0cmFuc2xhdGlvblkub25pbnB1dCA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHRyYW5zbGF0aW9uWUxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2xhdGlvbi15LXNsaWRlci12YWx1ZVwiKTtcclxuICAgICAgICAgICAgdHJhbnNsYXRpb25ZTGFiZWwuaW5uZXJIVE1MID0gdHJhbnNsYXRpb25ZLnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLnRyYW5zZm9ybS50cmFuc2xhdGlvbi55ID0gdHJhbnNsYXRpb25ZLnZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9oYW5kbGUgdHJhbnNsYXRpb24gWiBzbGlkZXJcclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25aID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2xhdGlvbi16LXNsaWRlclwiKTtcclxuICAgICAgICB0cmFuc2xhdGlvbloub25pbnB1dCA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHRyYW5zbGF0aW9uWkxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2xhdGlvbi16LXNsaWRlci12YWx1ZVwiKTtcclxuICAgICAgICAgICAgdHJhbnNsYXRpb25aTGFiZWwuaW5uZXJIVE1MID0gdHJhbnNsYXRpb25aLnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLnRyYW5zZm9ybS50cmFuc2xhdGlvbi56ID0gdHJhbnNsYXRpb25aLnZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9zZXQgY3VycmVudCB0cmFuc2xhdGlvbiB2YWx1ZXNcclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25YTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zbGF0aW9uLXgtc2xpZGVyLXZhbHVlXCIpO1xyXG4gICAgICAgIHRyYW5zbGF0aW9uWExhYmVsLmlubmVySFRNTCA9IHRoaXMubW9kZWwudHJhbnNmb3JtLnRyYW5zbGF0aW9uLng7XHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGlvbllMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhbnNsYXRpb24teS1zbGlkZXItdmFsdWVcIik7XHJcbiAgICAgICAgdHJhbnNsYXRpb25ZTGFiZWwuaW5uZXJIVE1MID0gdGhpcy5tb2RlbC50cmFuc2Zvcm0udHJhbnNsYXRpb24ueTtcclxuXHJcbiAgICAgICAgbGV0IHRyYW5zbGF0aW9uWkxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2xhdGlvbi16LXNsaWRlci12YWx1ZVwiKTtcclxuICAgICAgICB0cmFuc2xhdGlvblpMYWJlbC5pbm5lckhUTUwgPSB0aGlzLm1vZGVsLnRyYW5zZm9ybS50cmFuc2xhdGlvbi56O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJvdGF0aW9uSGFuZGxlcigpe1xyXG4gICAgICAgIGxldCB7ZG9jdW1lbnR9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgLy9oYW5kbGUgcm90YXRpb24gWCBzbGlkZXJcclxuICAgICAgICBsZXQgcm90YXRpb25YID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3RhdGlvbi14LXNsaWRlclwiKTtcclxuICAgICAgICByb3RhdGlvblgub25pbnB1dCA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJvdGF0aW9uWExhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3RhdGlvbi14LXNsaWRlci12YWx1ZVwiKTtcclxuICAgICAgICAgICAgcm90YXRpb25YTGFiZWwuaW5uZXJIVE1MID0gcm90YXRpb25YLnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLnRyYW5zZm9ybS5yb3RhdGlvbi54ID0gcm90YXRpb25YLnZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9oYW5kbGUgcm90YXRpb24gWSBzbGlkZXJcclxuICAgICAgICBsZXQgcm90YXRpb25ZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3RhdGlvbi15LXNsaWRlclwiKTtcclxuICAgICAgICByb3RhdGlvblkub25pbnB1dCA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJvdGF0aW9uWUxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3RhdGlvbi15LXNsaWRlci12YWx1ZVwiKTtcclxuICAgICAgICAgICAgcm90YXRpb25ZTGFiZWwuaW5uZXJIVE1MID0gcm90YXRpb25ZLnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLnRyYW5zZm9ybS5yb3RhdGlvbi55ID0gcm90YXRpb25ZLnZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9oYW5kbGUgcm90YXRpb24gWiBzbGlkZXJcclxuICAgICAgICBsZXQgcm90YXRpb25aID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3RhdGlvbi16LXNsaWRlclwiKTtcclxuICAgICAgICByb3RhdGlvbloub25pbnB1dCA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJvdGF0aW9uWkxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3RhdGlvbi16LXNsaWRlci12YWx1ZVwiKTtcclxuICAgICAgICAgICAgcm90YXRpb25aTGFiZWwuaW5uZXJIVE1MID0gcm90YXRpb25aLnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLnRyYW5zZm9ybS5yb3RhdGlvbi56ID0gcm90YXRpb25aLnZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9zZXQgY3VycmVudCByb3RhdGlvbiB2YWx1ZXNcclxuICAgICAgICBsZXQgcm90YXRpb25YTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdGF0aW9uLXgtc2xpZGVyLXZhbHVlXCIpO1xyXG4gICAgICAgIHJvdGF0aW9uWExhYmVsLmlubmVySFRNTCA9IHRoaXMubW9kZWwudHJhbnNmb3JtLnJvdGF0aW9uLng7XHJcblxyXG4gICAgICAgIGxldCByb3RhdGlvbllMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm90YXRpb24teS1zbGlkZXItdmFsdWVcIik7XHJcbiAgICAgICAgcm90YXRpb25ZTGFiZWwuaW5uZXJIVE1MID0gdGhpcy5tb2RlbC50cmFuc2Zvcm0ucm90YXRpb24ueTtcclxuXHJcbiAgICAgICAgbGV0IHJvdGF0aW9uWkxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3RhdGlvbi16LXNsaWRlci12YWx1ZVwiKTtcclxuICAgICAgICByb3RhdGlvblpMYWJlbC5pbm5lckhUTUwgPSB0aGlzLm1vZGVsLnRyYW5zZm9ybS5yb3RhdGlvbi56O1xyXG4gICAgfVxyXG5cclxuICAgIHNjYWxlSGFuZGxlcigpe1xyXG4gICAgICAgIGxldCB7ZG9jdW1lbnR9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgLy9oYW5kbGUgc2NhbGUgWCBzbGlkZXJcclxuICAgICAgICBsZXQgc2NhbGVYID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY2FsYXRpb24teC1zbGlkZXJcIik7XHJcbiAgICAgICAgc2NhbGVYLm9uaW5wdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzY2FsZVhMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NhbGF0aW9uLXgtc2xpZGVyLXZhbHVlXCIpO1xyXG4gICAgICAgICAgICBzY2FsZVhMYWJlbC5pbm5lckhUTUwgPSBzY2FsZVgudmFsdWUvMTA7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwudHJhbnNmb3JtLnNjYWxlLnggPSBzY2FsZVgudmFsdWUvMTA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2hhbmRsZSBzY2FsZSBZIHNsaWRlclxyXG4gICAgICAgIGxldCBzY2FsZVkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjYWxhdGlvbi15LXNsaWRlclwiKTtcclxuICAgICAgICBzY2FsZVkub25pbnB1dCA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNjYWxlWUxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY2FsYXRpb24teS1zbGlkZXItdmFsdWVcIik7XHJcbiAgICAgICAgICAgIHNjYWxlWUxhYmVsLmlubmVySFRNTCA9IHNjYWxlWS52YWx1ZS8xMDtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC50cmFuc2Zvcm0uc2NhbGUueSA9IHNjYWxlWS52YWx1ZS8xMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vaGFuZGxlIHNjYWxlIFogc2xpZGVyXHJcbiAgICAgICAgbGV0IHNjYWxlWiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NhbGF0aW9uLXktc2xpZGVyXCIpO1xyXG4gICAgICAgIHNjYWxlWi5vbmlucHV0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2NhbGVaTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjYWxhdGlvbi15LXNsaWRlci12YWx1ZVwiKTtcclxuICAgICAgICAgICAgc2NhbGVaTGFiZWwuaW5uZXJIVE1MID0gc2NhbGVaLnZhbHVlLzEwO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLnRyYW5zZm9ybS5zY2FsZS56ID0gc2NhbGVaLnZhbHVlLzEwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9zZXQgY3VycmVudCBzY2FsZSB2YWx1ZXNcclxuICAgICAgICBsZXQgc2NhbGVYTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjYWxhdGlvbi14LXNsaWRlci12YWx1ZVwiKTtcclxuICAgICAgICBzY2FsZVhMYWJlbC5pbm5lckhUTUwgPSB0aGlzLm1vZGVsLnRyYW5zZm9ybS5zY2FsZS54O1xyXG5cclxuICAgICAgICBsZXQgc2NhbGVZTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjYWxhdGlvbi15LXNsaWRlci12YWx1ZVwiKTtcclxuICAgICAgICBzY2FsZVlMYWJlbC5pbm5lckhUTUwgPSB0aGlzLm1vZGVsLnRyYW5zZm9ybS5zY2FsZS55O1xyXG5cclxuICAgICAgICBsZXQgc2NhbGVaTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjYWxhdGlvbi15LXNsaWRlci12YWx1ZVwiKTtcclxuICAgICAgICBzY2FsZVpMYWJlbC5pbm5lckhUTUwgPSB0aGlzLm1vZGVsLnRyYW5zZm9ybS5zY2FsZS56O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IE1hdDQgZnJvbSBcIi4vbWF0NFwiO1xyXG5pbXBvcnQgeyBkZWdUb1JhZCB9IGZyb20gXCIuL21hdGhVdGlsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhbnNmb3Jte1xyXG4gICAgY29uc3RydWN0b3IocHJvamVjdGlvbiwgdHJhbnNsYXRpb24sIHJvdGF0aW9uLCBzY2FsZSwgY2VudHJvaWQpe1xyXG4gICAgICAgIGxldCBbeHAsIHlwLCB6cF0gPSBwcm9qZWN0aW9uO1xyXG4gICAgICAgIHRoaXMucHJvamVjdGlvbiA9IHtcclxuICAgICAgICAgICAgeDogeHAsXHJcbiAgICAgICAgICAgIHk6IHlwLFxyXG4gICAgICAgICAgICB6OiB6cFxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgW3h0LCB5dCwgenRdID0gdHJhbnNsYXRpb247XHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbiA9IHtcclxuICAgICAgICAgICAgeDogeHQsXHJcbiAgICAgICAgICAgIHk6IHl0LFxyXG4gICAgICAgICAgICB6OiB6dFxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgW3hyLCB5ciwgenJdID0gcm90YXRpb247XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHtcclxuICAgICAgICAgICAgeDogeHIsXHJcbiAgICAgICAgICAgIHk6IHlyLFxyXG4gICAgICAgICAgICB6OiB6clxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgW3hzLCB5cywgenNdID0gc2NhbGU7XHJcbiAgICAgICAgdGhpcy5zY2FsZSA9IHtcclxuICAgICAgICAgICAgeDogeHMsXHJcbiAgICAgICAgICAgIHk6IHlzLFxyXG4gICAgICAgICAgICB6OiB6c1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgW3hjLCB5YywgemNdID0gY2VudHJvaWQ7XHJcbiAgICAgICAgdGhpcy5jZW50cm9pZCA9IHtcclxuICAgICAgICAgICAgeDogeGMsXHJcbiAgICAgICAgICAgIHk6IHljLFxyXG4gICAgICAgICAgICB6OiB6Y1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9qZWN0aW9uTWF0cml4KCl7XHJcbiAgICAgICAgLy9wZXJmb3JtIHByb2plY3Rpb25cclxuICAgICAgICBsZXQgbWF0cml4ID0gTWF0NC5wcm9qZWN0aW9uKHRoaXMucHJvamVjdGlvbi54LCB0aGlzLnByb2plY3Rpb24ueSwgdGhpcy5wcm9qZWN0aW9uLnopOyBcclxuICAgICAgICAvL3BlcmZvcm0gdHJhbnNsYXRpb25cclxuICAgICAgICBtYXRyaXggPSBNYXQ0Lm11bHRpcGx5KG1hdHJpeCwgTWF0NC5nZXRUcmFuc2xhdGlvbih0aGlzLnRyYW5zbGF0aW9uLngsIHRoaXMudHJhbnNsYXRpb24ueSwgdGhpcy50cmFuc2xhdGlvbi56KSk7XHJcblxyXG4gICAgICAgIC8vdHJhbnNsYXRlIHRvIHRoZSBjZW50cm9pZFxyXG4gICAgICAgIC8vcGVyZm9ybSByb3RhdGlvblxyXG5cclxuICAgICAgICAvLyB0cmFuc2xhdGUgdG8gdGhlIGNlbnRyb2lkXHJcbiAgICAgICAgbWF0cml4ID0gTWF0NC5tdWx0aXBseShtYXRyaXgsIE1hdDQuZ2V0VHJhbnNsYXRpb24odGhpcy5jZW50cm9pZC54LCB0aGlzLmNlbnRyb2lkLnksIHRoaXMuY2VudHJvaWQueikpO1xyXG4gICAgICAgIG1hdHJpeCA9IE1hdDQubXVsdGlwbHkobWF0cml4LCBNYXQ0LmdldFJvdGF0aW9uWChkZWdUb1JhZCh0aGlzLnJvdGF0aW9uLngpKSk7XHJcbiAgICAgICAgbWF0cml4ID0gTWF0NC5tdWx0aXBseShtYXRyaXgsIE1hdDQuZ2V0Um90YXRpb25ZKGRlZ1RvUmFkKHRoaXMucm90YXRpb24ueSkpKTtcclxuICAgICAgICBtYXRyaXggPSBNYXQ0Lm11bHRpcGx5KG1hdHJpeCwgTWF0NC5nZXRSb3RhdGlvblooZGVnVG9SYWQodGhpcy5yb3RhdGlvbi56KSkpOyBcclxuICAgICAgICBcclxuICAgICAgICAvLyB0cmFuc2xhdGUgYmFjayB0byB0aGUgb3JpZ2luYWwgcG9zaXRpb25cclxuICAgICAgICBtYXRyaXggPSBNYXQ0Lm11bHRpcGx5KG1hdHJpeCwgTWF0NC5nZXRUcmFuc2xhdGlvbigtdGhpcy5jZW50cm9pZC54LCAtdGhpcy5jZW50cm9pZC55LCAtdGhpcy5jZW50cm9pZC56KSk7XHJcbiAgICAgICAgLy9wZXJmb3JtIHNjYWxpbmdcclxuICAgICAgICBtYXRyaXggPSBNYXQ0Lm11bHRpcGx5KG1hdHJpeCwgTWF0NC5nZXRTY2FsZSh0aGlzLnNjYWxlLngsIHRoaXMuc2NhbGUueSwgdGhpcy5zY2FsZS56KSk7XHJcbiAgICAgICAgcmV0dXJuIG1hdHJpeDtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjNHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIHosIHcpe1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLnogPSB6O1xyXG4gICAgICAgIHRoaXMudyA9IHc7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYWRkKGEsIGIpe1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjNChhLnggKyBiLngsIGEueSArIGIueSwgYS56ICsgYi56LCBhLncgKyBiLncpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkb3QoYSwgYil7XHJcbiAgICAgICAgcmV0dXJuIGEueCAqIGIueCArIGEueSAqIGIueSArIGEueiAqIGIueiArIGEudyAqIGIudztcclxuICAgIH1cclxuXHJcbiAgICBhc0FycmF5KCl7ICBcclxuICAgICAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55LCB0aGlzLnosIHRoaXMud107XHJcbiAgICB9XHJcblxyXG59IiwiXHJcbmltcG9ydCBWZWM0IGZyb20gJy4vVmVjNC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXQ0e1xyXG5cclxuICAgIGRhdGE7XHJcblxyXG4gICAgY29uc3RydWN0b3IobTAwLCBtMDEsIG0wMiwgbTAzLCBcclxuICAgICAgICAgICAgICAgIG0xMCwgbTExLCBtMTIsIG0xMywgXHJcbiAgICAgICAgICAgICAgICBtMjAsIG0yMSwgbTIyLCBtMjMsIFxyXG4gICAgICAgICAgICAgICAgbTMwLCBtMzEsIG0zMiwgbTMzKXtcclxuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KFttMDAsIG0wMSwgbTAyLCBtMDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEwLCBtMTEsIG0xMiwgbTEzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0yMCwgbTIxLCBtMjIsIG0yMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMzAsIG0zMSwgbTMyLCBtMzNdKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0RW1wdHkoKXtcclxuICAgICAgICByZXR1cm4gbmV3IE1hdDQoMCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldElkZW50aXR5KCl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXQ0KDEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsIDAsIDAsIDEpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgZ2V0VHJhbnNsYXRpb24oeCwgeSwgeil7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXQ0KDEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgsIHksIHosIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRTY2FsZSh4LCB5LCB6KXtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXQ0KHgsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsIHksIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsIDAsIHosIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsIDAsIDAsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRSb3RhdGlvblgodGhldGEpe1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0NCgxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLCBNYXRoLmNvcyh0aGV0YSksIC1NYXRoLnNpbih0aGV0YSksIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsIE1hdGguc2luKHRoZXRhKSwgTWF0aC5jb3ModGhldGEpLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLCAwLCAwLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Um90YXRpb25ZKHRoZXRhKXtcclxuICAgICAgICByZXR1cm4gbmV3IE1hdDQoTWF0aC5jb3ModGhldGEpLCAwLCBNYXRoLnNpbih0aGV0YSksIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC1NYXRoLnNpbih0aGV0YSksIDAsIE1hdGguY29zKHRoZXRhKSwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCwgMCwgMCwgMSk7XHJcbiAgICB9ICAgXHJcblxyXG4gICAgc3RhdGljIGdldFJvdGF0aW9uWih0aGV0YSl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXQ0KE1hdGguY29zKHRoZXRhKSwgLU1hdGguc2luKHRoZXRhKSwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5zaW4odGhldGEpLCBNYXRoLmNvcyh0aGV0YSksIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsIDAsIDAsIDEpO1xyXG4gICAgfSAgIFxyXG4gICAgc3RhdGljIHByb2plY3Rpb24od2lkdGgsIGhlaWdodCwgZGVwdGgpIHtcclxuICAgICAgICAvLyBOb3RlOiBUaGlzIG1hdHJpeCBmbGlwcyB0aGUgWSBheGlzIHNvIDAgaXMgYXQgdGhlIHRvcC5cclxuICAgICAgICByZXR1cm4gbmV3IE1hdDQoMiAvIHdpZHRoLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLCAtMiAvIGhlaWdodCwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCwgMCwgMiAvIGRlcHRoLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtMSwgMSwgMCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29sdW1uKGkpe1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjNCh0aGlzLmRhdGFbaV0sIHRoaXMuZGF0YVtpICsgNF0sIHRoaXMuZGF0YVtpICsgOF0sIHRoaXMuZGF0YVtpICsgMTJdKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSb3coaSl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWM0KHRoaXMuZGF0YVtpICogNF0sIHRoaXMuZGF0YVtpICogNCArIDFdLCB0aGlzLmRhdGFbaSAqIDQgKyAyXSwgdGhpcy5kYXRhW2kgKiA0ICsgM10pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluc3RhbmNlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBmb28oKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImZvb1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbXVsdGlwbHkoYSwgYil7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IE1hdDQuZ2V0RW1wdHkoKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNDsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IHJvdyA9IGIuZ2V0Um93KGkpO1xyXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgNDsgaisrKXtcclxuICAgICAgICAgICAgICAgIGxldCBjb2wgPSBhLmdldENvbHVtbihqKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5kYXRhW2kgKiA0ICsgal0gPSBWZWM0LmRvdChyb3csIGNvbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufSIsIlxyXG5leHBvcnQgZnVuY3Rpb24gZGVnVG9SYWQoZGVncmVlcyl7XHJcbiAgICByZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XHJcbn0gICBcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYWRUb0RlZyhyYWRpYW5zKXtcclxuICAgIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcclxufSIsImltcG9ydCBUcmFuc2Zvcm0gZnJvbSBcIi4uL21hdGgvVHJhbnNmb3JtLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlTW9kZWwge1xyXG5cclxuXHJcbiAgICAvLyBhYnN0cmFjdCByZWFkb25seSBzaGFwZTogU2hhcGVFbnVtO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gbnVsbDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBBQlNUUkFDVCBNRVRIT0RcclxuICAgICAqL1xyXG4gICAgLy8gcHVibGljIGFic3RyYWN0IHNldFBvc2l0aW9uKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpOiB2b2lkO1xyXG4gICAgLy8gcHVibGljIGFic3RyYWN0IHNldENvbG9yKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpOiB2b2lkO1xyXG4gICAgLy8gcHVibGljIGFic3RyYWN0IGlzTnVsbFZlcnRleCgpOiBib29sZWFuO1xyXG4gICAgLy8gcHVibGljIGFic3RyYWN0IGNvdW50VmVydGV4KCk6IG51bWJlcjtcclxuICAgIC8vIHB1YmxpYyBhYnN0cmFjdCBjb3VudFJlYWxWZXJ0ZXgoKTogbnVtYmVyO1xyXG4gICAgLy8gcHVibGljIGFic3RyYWN0IGNlbnRyb2lkKCk6IFtudW1iZXIsIG51bWJlcl07XHJcbiAgICAvLyBwdWJsaWMgYWJzdHJhY3QgZ2V0R0xUeXBlKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpOiBudW1iZXI7XHJcbiAgICAvLyBwdWJsaWMgYWJzdHJhY3Qgc2V0VmVydGV4KHZlcnRleDogVmVydGV4LCBpbmRleDogbnVtYmVyKTogdm9pZDtcclxuICAgIC8vIHB1YmxpYyBhYnN0cmFjdCBjaGFuZ2VDb2xvcihjb2xvcjogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0pOiB2b2lkO1xyXG5cclxuICAgIHNldFBvc2l0aW9uKGdsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29sb3IoZ2wpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDZW50cm9pZCgpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpc051bGxWZXJ0ZXgoKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgY291bnRWZXJ0ZXgoKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwb3NpdGlvblByb2MocmVuZGVyUHJvcHMpIHtcclxuICAgICAgICBsZXQgeyBnbCwgcHJvZ3JhbSwgcG9zaXRpb25CdWZmZXIgfSA9IHJlbmRlclByb3BzO1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uTG9jID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgXCJhX3Bvc2l0aW9uXCIpO1xyXG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHBvc2l0aW9uTG9jKTtcclxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgcG9zaXRpb25CdWZmZXIpO1xyXG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb24oZ2wpO1xyXG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIocG9zaXRpb25Mb2MsIDMsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29sb3JQcm9jKHJlbmRlclByb3BzKSB7XHJcbiAgICAgICAgbGV0IHsgZ2wsIHByb2dyYW0sIGNvbG9yQnVmZmVyIH0gPSByZW5kZXJQcm9wcztcclxuICAgICAgICBjb25zdCBjb2xvckxvYyA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIFwiYV9jb2xvclwiKTtcclxuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShjb2xvckxvYyk7XHJcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGNvbG9yQnVmZmVyKTtcclxuICAgICAgICB0aGlzLnNldENvbG9yKGdsKTtcclxuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGNvbG9yTG9jLCA0LCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIG1hdHJpeFByb2MocmVuZGVyUHJvcHMpIHtcclxuICAgICAgICBsZXQgeyBnbCwgcHJvZ3JhbSB9ID0gcmVuZGVyUHJvcHM7XHJcbiAgICAgICAgY29uc3QgY2VudHJvaWQgPSB0aGlzLmdldENlbnRyb2lkKCk7XHJcblxyXG5cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBtYXQgPSB0aGlzLnRyYW5zZm9ybS5nZXRQcm9qZWN0aW9uTWF0cml4KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1hdHJpeExvYyA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBcInVfbWF0cml4XCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYobWF0cml4TG9jLCBmYWxzZSwgbWF0LmdldEluc3RhbmNlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdQcm9jKHJlbmRlclByb3BzKSB7XHJcbiAgICAgICAgbGV0IHsgZ2wgfSA9IHJlbmRlclByb3BzO1xyXG4gICAgICAgIGNvbnN0IHByaW1pdGl2ZSA9IGdsLlRSSUFOR0xFUztcclxuICAgICAgICBjb25zdCBvZmZzZXQgPSAwO1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5jb3VudFZlcnRleCgpO1xyXG5cclxuICAgICAgICBnbC5kcmF3QXJyYXlzKHByaW1pdGl2ZSwgb2Zmc2V0LCBjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7Kn0gciA6IHJlbmRlclByb3BzXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcmVuZGVyKHIpIHtcclxuICAgICAgICBpZiAodGhpcy5pc051bGxWZXJ0ZXgoKSkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IHtnbCwgcHJvZ3JhbSwgcG9zaXRpb25CdWZmZXIsIGNvbG9yQnVmZmVyfSA9IHI7XHJcbiAgICAgICAgLy8gQ2xlYXIgdGhlIGNhbnZhcy5cclxuICAgICAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVCk7XHJcblxyXG4gICAgICAgIC8vIFR1cm4gb24gY3VsbGluZy4gQnkgZGVmYXVsdCBiYWNrZmFjaW5nIHRyaWFuZ2xlc1xyXG4gICAgICAgIC8vIHdpbGwgYmUgY3VsbGVkLlxyXG4gICAgICAgIGdsLmVuYWJsZShnbC5DVUxMX0ZBQ0UpO1xyXG5cclxuICAgICAgICAvLyBFbmFibGUgdGhlIGRlcHRoIGJ1ZmZlclxyXG4gICAgICAgIGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcclxuICAgICAgICBnbC51c2VQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25Qcm9jKHIpO1xyXG4gICAgICAgIHRoaXMuY29sb3JQcm9jKHIpO1xyXG4gICAgICAgIHRoaXMubWF0cml4UHJvYyhyKTtcclxuICAgICAgICB0aGlzLmRyYXdQcm9jKHIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJhc2VNb2RlbCBmcm9tICcuL0Jhc2VNb2RlbC5qcyc7XHJcbmltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi4vbWF0aC9UcmFuc2Zvcm0uanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHVtbXlNb2RlbCBleHRlbmRzIEJhc2VNb2RlbHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgcmVuZGVyUHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKGlkKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uQnVmZmVyID0gcG9zaXRpb25CdWZmZXI7XHJcbiAgICAgICAgdGhpcy5jb2xvckJ1ZmZlciA9IGNvbG9yQnVmZmVyO1xyXG4gICAgICAgIHRoaXMuaW5pdFRyYW5zZm9ybShyZW5kZXJQcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFRyYW5zZm9ybShyZW5kZXJQcm9wcyl7XHJcbiAgICAgICAgbGV0IHsgZ2wsIHByb2dyYW0gfSA9IHJlbmRlclByb3BzO1xyXG4gICAgICAgIGxldCBwcm9qZWN0aW9uID0gW2dsLmNhbnZhcy5jbGllbnRXaWR0aCwgZ2wuY2FudmFzLmNsaWVudEhlaWdodCwgNDAwXTtcclxuICAgICAgICBsZXQgdHJhbnNsYXRpb24gPSBbMCwgMCwgMF07XHJcbiAgICAgICAgbGV0IHJvdGF0aW9uID0gWzAsIDAsIDBdO1xyXG4gICAgICAgIGxldCBzY2FsZSA9IFsxLCAxLCAxXTtcclxuICAgICAgICBsZXQgY2VudHJvaWQgPSB0aGlzLmdldENlbnRyb2lkKCk7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSBuZXcgVHJhbnNmb3JtKHByb2plY3Rpb24sIHRyYW5zbGF0aW9uLCByb3RhdGlvbiwgc2NhbGUsIGNlbnRyb2lkKTtcclxuICAgIH1cclxuICAgIC8vIG92ZXJyaWRlIGNvbG9yUHJvY1xyXG4gICAgY29sb3JQcm9jKHJlbmRlclByb3BzKXtcclxuICAgICAgICBsZXQgeyBnbCwgcHJvZ3JhbSwgY29sb3JCdWZmZXIgfSA9IHJlbmRlclByb3BzO1xyXG4gICAgICAgIGNvbnN0IGNvbG9yTG9jID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgXCJhX2NvbG9yXCIpO1xyXG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGNvbG9yTG9jKTtcclxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgY29sb3JCdWZmZXIpO1xyXG4gICAgICAgIHRoaXMuc2V0Q29sb3IoZ2wpO1xyXG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoY29sb3JMb2MsIDMsIGdsLlVOU0lHTkVEX0JZVEUsIHRydWUsIDAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vb3ZlcnJpZGUgZHJhd1Byb2NcclxuICAgIGRyYXdQcm9jKHJlbmRlclByb3BzKXtcclxuICAgICAgICBsZXQgeyBnbCB9ID0gcmVuZGVyUHJvcHM7XHJcbiAgICAgICAgdmFyIHByaW1pdGl2ZVR5cGUgPSBnbC5UUklBTkdMRVM7XHJcbiAgICAgICAgdmFyIG9mZnNldCA9IDA7XHJcbiAgICAgICAgdmFyIGNvdW50ID0gMTYgKiA2O1xyXG4gICAgICAgIGdsLmRyYXdBcnJheXMocHJpbWl0aXZlVHlwZSwgb2Zmc2V0LCBjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9pbXBsZW1lbnQgdGhlIGFic3RyYWN0IG1ldGhvZFxyXG4gICAgc2V0UG9zaXRpb24oZ2wpe1xyXG4gICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnBvc2l0aW9uQnVmZmVyLCBnbC5TVEFUSUNfRFJBVyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29sb3IoZ2wpe1xyXG4gICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLmNvbG9yQnVmZmVyLCBnbC5TVEFUSUNfRFJBVyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2VudHJvaWQoKXtcclxuICAgICAgICAvL2l0ZXJhdGUgdGhyb3VnaCB0aGUgcG9zaXRpb24gYnVmZmVyIGFuZCBnZXQgdGhlIGNlbnRyb2lkXHJcbiAgICAgICAgbGV0IHggPSAwO1xyXG4gICAgICAgIGxldCB5ID0gMDtcclxuICAgICAgICBsZXQgeiA9IDA7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMucG9zaXRpb25CdWZmZXIubGVuZ3RoOyBpKz0zKXtcclxuICAgICAgICAgICAgeCArPSB0aGlzLnBvc2l0aW9uQnVmZmVyW2ldO1xyXG4gICAgICAgICAgICB5ICs9IHRoaXMucG9zaXRpb25CdWZmZXJbaSsxXTtcclxuICAgICAgICAgICAgeiArPSB0aGlzLnBvc2l0aW9uQnVmZmVyW2krMl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBuID0gdGhpcy5wb3NpdGlvbkJ1ZmZlci5sZW5ndGgvMztcclxuICAgICAgICByZXR1cm4gW3gvbiwgeS9uLCB6L25dO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTnVsbFZlcnRleCgpe1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcbn1cclxuXHJcbmNvbnN0IHBvc2l0aW9uQnVmZmVyID0gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAvLyBsZWZ0IGNvbHVtbiBmcm9udFxyXG4gICAgMCwgICAwLCAgMCxcclxuICAgIDAsIDE1MCwgIDAsXHJcbiAgICAzMCwgICAwLCAgMCxcclxuICAgIDAsIDE1MCwgIDAsXHJcbiAgICAzMCwgMTUwLCAgMCxcclxuICAgIDMwLCAgIDAsICAwLFxyXG5cclxuICAgIC8vIHRvcCBydW5nIGZyb250XHJcbiAgICAzMCwgICAwLCAgMCxcclxuICAgIDMwLCAgMzAsICAwLFxyXG4gICAgMTAwLCAgIDAsICAwLFxyXG4gICAgMzAsICAzMCwgIDAsXHJcbiAgICAxMDAsICAzMCwgIDAsXHJcbiAgICAxMDAsICAgMCwgIDAsXHJcblxyXG4gICAgLy8gbWlkZGxlIHJ1bmcgZnJvbnRcclxuICAgIDMwLCAgNjAsICAwLFxyXG4gICAgMzAsICA5MCwgIDAsXHJcbiAgICA2NywgIDYwLCAgMCxcclxuICAgIDMwLCAgOTAsICAwLFxyXG4gICAgNjcsICA5MCwgIDAsXHJcbiAgICA2NywgIDYwLCAgMCxcclxuXHJcbiAgICAvLyBsZWZ0IGNvbHVtbiBiYWNrXHJcbiAgICAgIDAsICAgMCwgIDMwLFxyXG4gICAgIDMwLCAgIDAsICAzMCxcclxuICAgICAgMCwgMTUwLCAgMzAsXHJcbiAgICAgIDAsIDE1MCwgIDMwLFxyXG4gICAgIDMwLCAgIDAsICAzMCxcclxuICAgICAzMCwgMTUwLCAgMzAsXHJcblxyXG4gICAgLy8gdG9wIHJ1bmcgYmFja1xyXG4gICAgIDMwLCAgIDAsICAzMCxcclxuICAgIDEwMCwgICAwLCAgMzAsXHJcbiAgICAgMzAsICAzMCwgIDMwLFxyXG4gICAgIDMwLCAgMzAsICAzMCxcclxuICAgIDEwMCwgICAwLCAgMzAsXHJcbiAgICAxMDAsICAzMCwgIDMwLFxyXG5cclxuICAgIC8vIG1pZGRsZSBydW5nIGJhY2tcclxuICAgICAzMCwgIDYwLCAgMzAsXHJcbiAgICAgNjcsICA2MCwgIDMwLFxyXG4gICAgIDMwLCAgOTAsICAzMCxcclxuICAgICAzMCwgIDkwLCAgMzAsXHJcbiAgICAgNjcsICA2MCwgIDMwLFxyXG4gICAgIDY3LCAgOTAsICAzMCxcclxuXHJcbiAgICAvLyB0b3BcclxuICAgICAgMCwgICAwLCAgIDAsXHJcbiAgICAxMDAsICAgMCwgICAwLFxyXG4gICAgMTAwLCAgIDAsICAzMCxcclxuICAgICAgMCwgICAwLCAgIDAsXHJcbiAgICAxMDAsICAgMCwgIDMwLFxyXG4gICAgICAwLCAgIDAsICAzMCxcclxuXHJcbiAgICAvLyB0b3AgcnVuZyByaWdodFxyXG4gICAgMTAwLCAgIDAsICAgMCxcclxuICAgIDEwMCwgIDMwLCAgIDAsXHJcbiAgICAxMDAsICAzMCwgIDMwLFxyXG4gICAgMTAwLCAgIDAsICAgMCxcclxuICAgIDEwMCwgIDMwLCAgMzAsXHJcbiAgICAxMDAsICAgMCwgIDMwLFxyXG5cclxuICAgIC8vIHVuZGVyIHRvcCBydW5nXHJcbiAgICAzMCwgICAzMCwgICAwLFxyXG4gICAgMzAsICAgMzAsICAzMCxcclxuICAgIDEwMCwgIDMwLCAgMzAsXHJcbiAgICAzMCwgICAzMCwgICAwLFxyXG4gICAgMTAwLCAgMzAsICAzMCxcclxuICAgIDEwMCwgIDMwLCAgIDAsXHJcblxyXG4gICAgLy8gYmV0d2VlbiB0b3AgcnVuZyBhbmQgbWlkZGxlXHJcbiAgICAzMCwgICAzMCwgICAwLFxyXG4gICAgMzAsICAgNjAsICAzMCxcclxuICAgIDMwLCAgIDMwLCAgMzAsXHJcbiAgICAzMCwgICAzMCwgICAwLFxyXG4gICAgMzAsICAgNjAsICAgMCxcclxuICAgIDMwLCAgIDYwLCAgMzAsXHJcblxyXG4gICAgLy8gdG9wIG9mIG1pZGRsZSBydW5nXHJcbiAgICAzMCwgICA2MCwgICAwLFxyXG4gICAgNjcsICAgNjAsICAzMCxcclxuICAgIDMwLCAgIDYwLCAgMzAsXHJcbiAgICAzMCwgICA2MCwgICAwLFxyXG4gICAgNjcsICAgNjAsICAgMCxcclxuICAgIDY3LCAgIDYwLCAgMzAsXHJcblxyXG4gICAgLy8gcmlnaHQgb2YgbWlkZGxlIHJ1bmdcclxuICAgIDY3LCAgIDYwLCAgIDAsXHJcbiAgICA2NywgICA5MCwgIDMwLFxyXG4gICAgNjcsICAgNjAsICAzMCxcclxuICAgIDY3LCAgIDYwLCAgIDAsXHJcbiAgICA2NywgICA5MCwgICAwLFxyXG4gICAgNjcsICAgOTAsICAzMCxcclxuXHJcbiAgICAvLyBib3R0b20gb2YgbWlkZGxlIHJ1bmcuXHJcbiAgICAzMCwgICA5MCwgICAwLFxyXG4gICAgMzAsICAgOTAsICAzMCxcclxuICAgIDY3LCAgIDkwLCAgMzAsXHJcbiAgICAzMCwgICA5MCwgICAwLFxyXG4gICAgNjcsICAgOTAsICAzMCxcclxuICAgIDY3LCAgIDkwLCAgIDAsXHJcblxyXG4gICAgLy8gcmlnaHQgb2YgYm90dG9tXHJcbiAgICAzMCwgICA5MCwgICAwLFxyXG4gICAgMzAsICAxNTAsICAzMCxcclxuICAgIDMwLCAgIDkwLCAgMzAsXHJcbiAgICAzMCwgICA5MCwgICAwLFxyXG4gICAgMzAsICAxNTAsICAgMCxcclxuICAgIDMwLCAgMTUwLCAgMzAsXHJcblxyXG4gICAgLy8gYm90dG9tXHJcbiAgICAwLCAgIDE1MCwgICAwLFxyXG4gICAgMCwgICAxNTAsICAzMCxcclxuICAgIDMwLCAgMTUwLCAgMzAsXHJcbiAgICAwLCAgIDE1MCwgICAwLFxyXG4gICAgMzAsICAxNTAsICAzMCxcclxuICAgIDMwLCAgMTUwLCAgIDAsXHJcblxyXG4gICAgLy8gbGVmdCBzaWRlXHJcbiAgICAwLCAgIDAsICAgMCxcclxuICAgIDAsICAgMCwgIDMwLFxyXG4gICAgMCwgMTUwLCAgMzAsXHJcbiAgICAwLCAgIDAsICAgMCxcclxuICAgIDAsIDE1MCwgIDMwLFxyXG4gICAgMCwgMTUwLCAgIDBdKVxyXG5cclxuY29uc3QgY29sb3JCdWZmZXIgPSBuZXcgVWludDhBcnJheShbXHJcbiAgICAvLyBsZWZ0IGNvbHVtbiBmcm9udFxyXG4gIDIwMCwgIDcwLCAxMjAsXHJcbiAgMjAwLCAgNzAsIDEyMCxcclxuICAyMDAsICA3MCwgMTIwLFxyXG4gIDIwMCwgIDcwLCAxMjAsXHJcbiAgMjAwLCAgNzAsIDEyMCxcclxuICAyMDAsICA3MCwgMTIwLFxyXG5cclxuICAgIC8vIHRvcCBydW5nIGZyb250XHJcbiAgMjAwLCAgNzAsIDEyMCxcclxuICAyMDAsICA3MCwgMTIwLFxyXG4gIDIwMCwgIDcwLCAxMjAsXHJcbiAgMjAwLCAgNzAsIDEyMCxcclxuICAyMDAsICA3MCwgMTIwLFxyXG4gIDIwMCwgIDcwLCAxMjAsXHJcblxyXG4gICAgLy8gbWlkZGxlIHJ1bmcgZnJvbnRcclxuICAyMDAsICA3MCwgMTIwLFxyXG4gIDIwMCwgIDcwLCAxMjAsXHJcbiAgMjAwLCAgNzAsIDEyMCxcclxuICAyMDAsICA3MCwgMTIwLFxyXG4gIDIwMCwgIDcwLCAxMjAsXHJcbiAgMjAwLCAgNzAsIDEyMCxcclxuXHJcbiAgICAvLyBsZWZ0IGNvbHVtbiBiYWNrXHJcbiAgODAsIDcwLCAyMDAsXHJcbiAgODAsIDcwLCAyMDAsXHJcbiAgODAsIDcwLCAyMDAsXHJcbiAgODAsIDcwLCAyMDAsXHJcbiAgODAsIDcwLCAyMDAsXHJcbiAgODAsIDcwLCAyMDAsXHJcblxyXG4gICAgLy8gdG9wIHJ1bmcgYmFja1xyXG4gIDgwLCA3MCwgMjAwLFxyXG4gIDgwLCA3MCwgMjAwLFxyXG4gIDgwLCA3MCwgMjAwLFxyXG4gIDgwLCA3MCwgMjAwLFxyXG4gIDgwLCA3MCwgMjAwLFxyXG4gIDgwLCA3MCwgMjAwLFxyXG5cclxuICAgIC8vIG1pZGRsZSBydW5nIGJhY2tcclxuICA4MCwgNzAsIDIwMCxcclxuICA4MCwgNzAsIDIwMCxcclxuICA4MCwgNzAsIDIwMCxcclxuICA4MCwgNzAsIDIwMCxcclxuICA4MCwgNzAsIDIwMCxcclxuICA4MCwgNzAsIDIwMCxcclxuXHJcbiAgICAvLyB0b3BcclxuICA3MCwgMjAwLCAyMTAsXHJcbiAgNzAsIDIwMCwgMjEwLFxyXG4gIDcwLCAyMDAsIDIxMCxcclxuICA3MCwgMjAwLCAyMTAsXHJcbiAgNzAsIDIwMCwgMjEwLFxyXG4gIDcwLCAyMDAsIDIxMCxcclxuXHJcbiAgICAvLyB0b3AgcnVuZyByaWdodFxyXG4gIDIwMCwgMjAwLCA3MCxcclxuICAyMDAsIDIwMCwgNzAsXHJcbiAgMjAwLCAyMDAsIDcwLFxyXG4gIDIwMCwgMjAwLCA3MCxcclxuICAyMDAsIDIwMCwgNzAsXHJcbiAgMjAwLCAyMDAsIDcwLFxyXG5cclxuICAgIC8vIHVuZGVyIHRvcCBydW5nXHJcbiAgMjEwLCAxMDAsIDcwLFxyXG4gIDIxMCwgMTAwLCA3MCxcclxuICAyMTAsIDEwMCwgNzAsXHJcbiAgMjEwLCAxMDAsIDcwLFxyXG4gIDIxMCwgMTAwLCA3MCxcclxuICAyMTAsIDEwMCwgNzAsXHJcblxyXG4gICAgLy8gYmV0d2VlbiB0b3AgcnVuZyBhbmQgbWlkZGxlXHJcbiAgMjEwLCAxNjAsIDcwLFxyXG4gIDIxMCwgMTYwLCA3MCxcclxuICAyMTAsIDE2MCwgNzAsXHJcbiAgMjEwLCAxNjAsIDcwLFxyXG4gIDIxMCwgMTYwLCA3MCxcclxuICAyMTAsIDE2MCwgNzAsXHJcblxyXG4gICAgLy8gdG9wIG9mIG1pZGRsZSBydW5nXHJcbiAgNzAsIDE4MCwgMjEwLFxyXG4gIDcwLCAxODAsIDIxMCxcclxuICA3MCwgMTgwLCAyMTAsXHJcbiAgNzAsIDE4MCwgMjEwLFxyXG4gIDcwLCAxODAsIDIxMCxcclxuICA3MCwgMTgwLCAyMTAsXHJcblxyXG4gICAgLy8gcmlnaHQgb2YgbWlkZGxlIHJ1bmdcclxuICAxMDAsIDcwLCAyMTAsXHJcbiAgMTAwLCA3MCwgMjEwLFxyXG4gIDEwMCwgNzAsIDIxMCxcclxuICAxMDAsIDcwLCAyMTAsXHJcbiAgMTAwLCA3MCwgMjEwLFxyXG4gIDEwMCwgNzAsIDIxMCxcclxuXHJcbiAgICAvLyBib3R0b20gb2YgbWlkZGxlIHJ1bmcuXHJcbiAgNzYsIDIxMCwgMTAwLFxyXG4gIDc2LCAyMTAsIDEwMCxcclxuICA3NiwgMjEwLCAxMDAsXHJcbiAgNzYsIDIxMCwgMTAwLFxyXG4gIDc2LCAyMTAsIDEwMCxcclxuICA3NiwgMjEwLCAxMDAsXHJcblxyXG4gICAgLy8gcmlnaHQgb2YgYm90dG9tXHJcbiAgMTQwLCAyMTAsIDgwLFxyXG4gIDE0MCwgMjEwLCA4MCxcclxuICAxNDAsIDIxMCwgODAsXHJcbiAgMTQwLCAyMTAsIDgwLFxyXG4gIDE0MCwgMjEwLCA4MCxcclxuICAxNDAsIDIxMCwgODAsXHJcblxyXG4gICAgLy8gYm90dG9tXHJcbiAgOTAsIDEzMCwgMTEwLFxyXG4gIDkwLCAxMzAsIDExMCxcclxuICA5MCwgMTMwLCAxMTAsXHJcbiAgOTAsIDEzMCwgMTEwLFxyXG4gIDkwLCAxMzAsIDExMCxcclxuICA5MCwgMTMwLCAxMTAsXHJcblxyXG4gICAgLy8gbGVmdCBzaWRlXHJcbiAgMTYwLCAxNjAsIDIyMCxcclxuICAxNjAsIDE2MCwgMjIwLFxyXG4gIDE2MCwgMTYwLCAyMjAsXHJcbiAgMTYwLCAxNjAsIDIyMCxcclxuICAxNjAsIDE2MCwgMjIwLFxyXG4gIDE2MCwgMTYwLCAyMjBdKSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0oXHJcbiAgICBnbCxcclxuICAgIHZlcnRleFNoYWRlcixcclxuICAgIGZyYWdtZW50U2hhZGVyXHJcbil7XHJcbiAgICBjb25zdCBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xyXG5cclxuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xyXG4gICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcclxuXHJcbiAgICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcclxuXHJcbiAgICBjb25zdCBzdWNjZXNzID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUyk7XHJcbiAgICBpZiAoIXN1Y2Nlc3MpIHtcclxuICAgICAgICBnbC5kZWxldGVQcm9ncmFtKHByb2dyYW0pO1xyXG5cclxuICAgICAgICB0aHJvdyBFcnJvcihcIkZhaWxlZCB0byBjb21waWxlIHNoYWRlciFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByb2dyYW07XHJcbn1cclxuIiwiZnVuY3Rpb24gcmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZShjYW52YXMpIHtcclxuICAgIC8vIExvb2t1cCB0aGUgc2l6ZSB0aGUgYnJvd3NlciBpcyBkaXNwbGF5aW5nIHRoZSBjYW52YXMgaW4gQ1NTIHBpeGVscy5cclxuICAgIGNvbnN0IGRpc3BsYXlXaWR0aCA9IGNhbnZhcy5jbGllbnRXaWR0aDtcclxuICAgIGNvbnN0IGRpc3BsYXlIZWlnaHQgPSBjYW52YXMuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgIGNhbnZhcy53aWR0aCA9IGRpc3BsYXlXaWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBkaXNwbGF5SGVpZ2h0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTaGFkZXIoXHJcbiAgICBnbCxcclxuICAgIHR5cGUsXHJcbiAgICBzb3VyY2VcclxuKSB7XHJcbiAgICBjb25zdCBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodHlwZSk7XHJcbiAgICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzb3VyY2UpO1xyXG4gICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xyXG5cclxuICAgIGNvbnN0IHN1Y2Nlc3MgPSBnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUyk7XHJcbiAgICBpZiAoIXN1Y2Nlc3MpIHtcclxuICAgICAgICBnbC5kZWxldGVTaGFkZXIoc2hhZGVyKTtcclxuXHJcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJGYWlsZWQgdG8gY29tcGlsZSBzaGFkZXIhXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzaGFkZXI7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuLy8gaW1wb3J0IHdlYmdsVXRpbHMgZnJvbSBcIndlYmdsLXV0aWxzXCI7XHJcbmltcG9ydCBEcmF3SGFuZGxlciBmcm9tIFwiLi9oYW5kbGVyL0RyYXdIYW5kbGVyXCI7XHJcbmltcG9ydCBjcmVhdGVQcm9ncmFtIGZyb20gXCIuL3V0aWxzL3Byb2dyYW1cIjtcclxuaW1wb3J0IHJlc2l6ZUNhbnZhc1RvRGlzcGxheVNpemUgZnJvbSBcIi4vdXRpbHMvcmVzaXplXCI7XHJcbmltcG9ydCBjcmVhdGVTaGFkZXIgZnJvbSBcIi4vdXRpbHMvc2hhZGVyc1wiO1xyXG5cclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnbC1jYW52YXNcIik7XHJcbmNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbFwiKTtcclxuaWYoIWdsKXtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIldlYkdMIG5vdCBzdXBwb3J0ZWRcIik7XHJcbn1cclxuXHJcbmNvbnN0IHZlcnRleFNoYWRlclNvdXJjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVydGV4LXNoYWRlci0zZFwiKT8udGV4dENvbnRlbnQ7XHJcbmNvbnN0IGZyYWdtZW50U2hhZGVyU291cmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmFnbWVudC1zaGFkZXItM2RcIik/LnRleHRDb250ZW50O1xyXG5cclxuY29uc3QgdmVydGV4U2hhZGVyID0gY3JlYXRlU2hhZGVyKGdsLCBnbC5WRVJURVhfU0hBREVSLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UpO1xyXG5jb25zdCBmcmFnbWVudFNoYWRlciA9IGNyZWF0ZVNoYWRlcihcclxuICAgIGdsLFxyXG4gICAgZ2wuRlJBR01FTlRfU0hBREVSLFxyXG4gICAgZnJhZ21lbnRTaGFkZXJTb3VyY2VcclxuKTtcclxuXHJcbi8vIGNvbnN0IHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKGdsLCB2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcclxuY29uc3QgcHJvZ3JhbSA9IHdlYmdsVXRpbHMuY3JlYXRlUHJvZ3JhbUZyb21TY3JpcHRzKGdsLCBbXCJ2ZXJ0ZXgtc2hhZGVyLTNkXCIsIFwiZnJhZ21lbnQtc2hhZGVyLTNkXCJdKTtcclxuXHJcbnJlc2l6ZUNhbnZhc1RvRGlzcGxheVNpemUoZ2wuY2FudmFzKTtcclxuXHJcbmdsLnZpZXdwb3J0KDAsIDAsIGdsLmNhbnZhcy53aWR0aCwgZ2wuY2FudmFzLmhlaWdodCk7XHJcblxyXG5nbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKTtcclxuXHJcbmdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcclxuZ2wuZW5hYmxlKGdsLkNVTExfRkFDRSk7XHJcblxyXG5cclxuZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcclxuXHJcblxyXG5jb25zdCBkcmF3SGFuZGxlciA9IG5ldyBEcmF3SGFuZGxlcihnbCwgcHJvZ3JhbSwgZG9jdW1lbnQpO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9