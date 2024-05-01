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
            scaleXLabel.innerHTML = scaleX.value;
            this.model.transform.scale.x = scaleX.value;
        }

        //handle scale Y slider
        let scaleY = document.getElementById("scalation-y-slider");
        scaleY.oninput = () => {
            let scaleYLabel = document.getElementById("scalation-y-slider-value");
            scaleYLabel.innerHTML = scaleY.value;
            this.model.transform.scale.y = scaleY.value;
        }

        //handle scale Z slider
        let scaleZ = document.getElementById("scalation-y-slider");
        scaleZ.oninput = () => {
            let scaleZLabel = document.getElementById("scalation-y-slider-value");
            scaleZLabel.innerHTML = scaleZ.value;
            this.model.transform.scale.z = scaleZ.value;
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
        return new Mat4(1, 0, 0, x,
                        0, 1, 0, y,
                        0, 0, 1, z,
                        0, 0, 0, 1);
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

    static multiply(a, b){
        let result = Mat4.getEmpty();
        for(let i = 0; i < 4; i++){
            let row = a.getRow(i);
            for(let j = 0; j < 4; j++){
                let col = b.getColumn(j);
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
        let projection = [gl.canvas.width, gl.canvas.height, 2];
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

const program = (0,_utils_program__WEBPACK_IMPORTED_MODULE_1__["default"])(gl, vertexShader, fragmentShader);

gl.useProgram(program);

(0,_utils_resize__WEBPACK_IMPORTED_MODULE_2__["default"])(gl.canvas);

gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

gl.clear(gl.COLOR_BUFFER_BIT);

gl.enable(gl.CULL_FACE);

const drawHandler = new _handler_DrawHandler__WEBPACK_IMPORTED_MODULE_0__["default"](gl, program, document);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2VWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUseUJBQXlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1QxQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNqQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05ZO0FBQ1o7QUFDQSxDQUFnRDtBQUNKO0FBQ1c7QUFDWjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwREFBWTtBQUNqQyx1QkFBdUIsMERBQVk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwwREFBYTtBQUM3QjtBQUNBO0FBQ0E7QUFDQSx5REFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNERBQVc7QUFDbkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9oYW5kbGVyL0RyYXdIYW5kbGVyLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL2hhbmRsZXIvTW9kZWxIYW5kbGVyL0hvbGxvd0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tYXRoL1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21hdGgvVmVjNC5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21hdGgvbWF0NC5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21hdGgvbWF0aFV0aWxzLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3N0cnVjdHMvbW9kZWwvQmFzZU1vZGVsLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3N0cnVjdHMvbW9kZWwvRHVtbXlNb2RlbC5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy91dGlscy9wcm9ncmFtLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3V0aWxzL3Jlc2l6ZS5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy91dGlscy9zaGFkZXJzLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hdDQgZnJvbSBcIi4uL3N0cnVjdHMvbWF0aC9tYXQ0XCI7XHJcbmltcG9ydCB7IGRlZ1RvUmFkLCByYWRUb0RlZyB9IGZyb20gXCIuLi9zdHJ1Y3RzL21hdGgvbWF0aFV0aWxzXCI7XHJcbmltcG9ydCBEdW1teU1vZGVsIGZyb20gXCIuLi9zdHJ1Y3RzL21vZGVsL0R1bW15TW9kZWxcIjtcclxuaW1wb3J0IEhvbGxvd0hhbmRsZXIgZnJvbSBcIi4vTW9kZWxIYW5kbGVyL0hvbGxvd0hhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdIYW5kbGVye1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGdsLFxyXG4gICAgICAgIHByb2dyYW0sXHJcbiAgICAgICAgZG9jdW1lbnQsXHJcblxyXG4gICAgKXtcclxuICAgICAgICB0aGlzLmdsID0gZ2w7XHJcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcclxuICAgICAgICB0aGlzLmRvY3VtZW50ID0gZG9jdW1lbnQ7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9wcyA9IHtcclxuICAgICAgICAgIGdsOiB0aGlzLmdsLFxyXG4gICAgICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxyXG4gICAgICAgICAgcG9zaXRpb25CdWZmZXI6IHRoaXMuZ2wuY3JlYXRlQnVmZmVyKCksXHJcbiAgICAgICAgICBjb2xvckJ1ZmZlcjogdGhpcy5nbC5jcmVhdGVCdWZmZXIoKSxcclxuICAgICAgICAgIGRvY3VtZW50OiB0aGlzLmRvY3VtZW50LFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRNb2RlbCA9IG5ldyBEdW1teU1vZGVsKDAsIHRoaXMucmVuZGVyUHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaG9sbG93SGFuZGxlciA9IG5ldyBIb2xsb3dIYW5kbGVyKHRoaXMucmVuZGVyUHJvcHMsIHRoaXMuY3VycmVudE1vZGVsKTtcclxuXHJcbiAgICAgICAgdGhpcy5kdW1teUluaXQoKVxyXG4gICAgICAgIHRoaXMuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgdGhpcy5yZXJlbmRlcilcclxuXHJcbiAgICB9XHJcblxyXG4gIGR1bW15SW5pdCgpe1xyXG4gICAgXHJcblxyXG4gICAgICAgIHRoaXMuZHJhd1NjZW5lKClcclxuICB9XHJcblxyXG4gIC8vIERyYXcgdGhlIHNjZW5lLlxyXG4gIGRyYXdTY2VuZSgpIHtcclxuXHJcblxyXG4gICAgLy8gbG9va3VwIHVuaWZvcm1zXHJcbiAgICB0aGlzLmN1cnJlbnRNb2RlbC5yZW5kZXIodGhpcy5yZW5kZXJQcm9wcyk7XHJcbiAgfVxyXG5cclxuICByZXJlbmRlciA9ICgpID0+IHtcclxuICAgIHRoaXMuY3VycmVudE1vZGVsLnJlbmRlcih0aGlzLnJlbmRlclByb3BzKTtcclxuICAgIFxyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlcmVuZGVyKVxyXG4gIH1cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIb2xsb3dIYW5kbGVye1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzLCBtb2RlbCl7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgICAgICAvLyB0aGlzLmZhY3RvcnkgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcigpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0TW9kZWwobW9kZWwpe1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZXZlbnRMaXN0ZW5lcigpe1xyXG4gICAgICAgIGlmKHRoaXMubW9kZWwgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMudHJhbnNsYXRpb25IYW5kbGVyKCk7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbkhhbmRsZXIoKTtcclxuICAgICAgICB0aGlzLnNjYWxlSGFuZGxlcigpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2xhdGlvbkhhbmRsZXIoKXtcclxuICAgICAgICBsZXQge2RvY3VtZW50fSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIC8vaGFuZGxlIHRyYW5zbGF0aW9uIFggc2xpZGVyXHJcbiAgICAgICAgbGV0IHRyYW5zbGF0aW9uWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhbnNsYXRpb24teC1zbGlkZXJcIik7XHJcbiAgICAgICAgdHJhbnNsYXRpb25YLm9uaW5wdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0cmFuc2xhdGlvblhMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhbnNsYXRpb24teC1zbGlkZXItdmFsdWVcIik7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uWExhYmVsLmlubmVySFRNTCA9IHRyYW5zbGF0aW9uWC52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC50cmFuc2Zvcm0udHJhbnNsYXRpb24ueCA9IHRyYW5zbGF0aW9uWC52YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vaGFuZGxlIHRyYW5zbGF0aW9uIFkgc2xpZGVyXHJcbiAgICAgICAgbGV0IHRyYW5zbGF0aW9uWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhbnNsYXRpb24teS1zbGlkZXJcIik7XHJcbiAgICAgICAgdHJhbnNsYXRpb25ZLm9uaW5wdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0cmFuc2xhdGlvbllMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhbnNsYXRpb24teS1zbGlkZXItdmFsdWVcIik7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uWUxhYmVsLmlubmVySFRNTCA9IHRyYW5zbGF0aW9uWS52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC50cmFuc2Zvcm0udHJhbnNsYXRpb24ueSA9IHRyYW5zbGF0aW9uWS52YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vaGFuZGxlIHRyYW5zbGF0aW9uIFogc2xpZGVyXHJcbiAgICAgICAgbGV0IHRyYW5zbGF0aW9uWiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhbnNsYXRpb24tei1zbGlkZXJcIik7XHJcbiAgICAgICAgdHJhbnNsYXRpb25aLm9uaW5wdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0cmFuc2xhdGlvblpMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhbnNsYXRpb24tei1zbGlkZXItdmFsdWVcIik7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uWkxhYmVsLmlubmVySFRNTCA9IHRyYW5zbGF0aW9uWi52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC50cmFuc2Zvcm0udHJhbnNsYXRpb24ueiA9IHRyYW5zbGF0aW9uWi52YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vc2V0IGN1cnJlbnQgdHJhbnNsYXRpb24gdmFsdWVzXHJcbiAgICAgICAgbGV0IHRyYW5zbGF0aW9uWExhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2xhdGlvbi14LXNsaWRlci12YWx1ZVwiKTtcclxuICAgICAgICB0cmFuc2xhdGlvblhMYWJlbC5pbm5lckhUTUwgPSB0aGlzLm1vZGVsLnRyYW5zZm9ybS50cmFuc2xhdGlvbi54O1xyXG5cclxuICAgICAgICBsZXQgdHJhbnNsYXRpb25ZTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYW5zbGF0aW9uLXktc2xpZGVyLXZhbHVlXCIpO1xyXG4gICAgICAgIHRyYW5zbGF0aW9uWUxhYmVsLmlubmVySFRNTCA9IHRoaXMubW9kZWwudHJhbnNmb3JtLnRyYW5zbGF0aW9uLnk7XHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGlvblpMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhbnNsYXRpb24tei1zbGlkZXItdmFsdWVcIik7XHJcbiAgICAgICAgdHJhbnNsYXRpb25aTGFiZWwuaW5uZXJIVE1MID0gdGhpcy5tb2RlbC50cmFuc2Zvcm0udHJhbnNsYXRpb24uejtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByb3RhdGlvbkhhbmRsZXIoKXtcclxuICAgICAgICBsZXQge2RvY3VtZW50fSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIC8vaGFuZGxlIHJvdGF0aW9uIFggc2xpZGVyXHJcbiAgICAgICAgbGV0IHJvdGF0aW9uWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm90YXRpb24teC1zbGlkZXJcIik7XHJcbiAgICAgICAgcm90YXRpb25YLm9uaW5wdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByb3RhdGlvblhMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm90YXRpb24teC1zbGlkZXItdmFsdWVcIik7XHJcbiAgICAgICAgICAgIHJvdGF0aW9uWExhYmVsLmlubmVySFRNTCA9IHJvdGF0aW9uWC52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC50cmFuc2Zvcm0ucm90YXRpb24ueCA9IHJvdGF0aW9uWC52YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vaGFuZGxlIHJvdGF0aW9uIFkgc2xpZGVyXHJcbiAgICAgICAgbGV0IHJvdGF0aW9uWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm90YXRpb24teS1zbGlkZXJcIik7XHJcbiAgICAgICAgcm90YXRpb25ZLm9uaW5wdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByb3RhdGlvbllMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm90YXRpb24teS1zbGlkZXItdmFsdWVcIik7XHJcbiAgICAgICAgICAgIHJvdGF0aW9uWUxhYmVsLmlubmVySFRNTCA9IHJvdGF0aW9uWS52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC50cmFuc2Zvcm0ucm90YXRpb24ueSA9IHJvdGF0aW9uWS52YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vaGFuZGxlIHJvdGF0aW9uIFogc2xpZGVyXHJcbiAgICAgICAgbGV0IHJvdGF0aW9uWiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm90YXRpb24tei1zbGlkZXJcIik7XHJcbiAgICAgICAgcm90YXRpb25aLm9uaW5wdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByb3RhdGlvblpMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm90YXRpb24tei1zbGlkZXItdmFsdWVcIik7XHJcbiAgICAgICAgICAgIHJvdGF0aW9uWkxhYmVsLmlubmVySFRNTCA9IHJvdGF0aW9uWi52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC50cmFuc2Zvcm0ucm90YXRpb24ueiA9IHJvdGF0aW9uWi52YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vc2V0IGN1cnJlbnQgcm90YXRpb24gdmFsdWVzXHJcbiAgICAgICAgbGV0IHJvdGF0aW9uWExhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3RhdGlvbi14LXNsaWRlci12YWx1ZVwiKTtcclxuICAgICAgICByb3RhdGlvblhMYWJlbC5pbm5lckhUTUwgPSB0aGlzLm1vZGVsLnRyYW5zZm9ybS5yb3RhdGlvbi54O1xyXG5cclxuICAgICAgICBsZXQgcm90YXRpb25ZTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdGF0aW9uLXktc2xpZGVyLXZhbHVlXCIpO1xyXG4gICAgICAgIHJvdGF0aW9uWUxhYmVsLmlubmVySFRNTCA9IHRoaXMubW9kZWwudHJhbnNmb3JtLnJvdGF0aW9uLnk7XHJcblxyXG4gICAgICAgIGxldCByb3RhdGlvblpMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm90YXRpb24tei1zbGlkZXItdmFsdWVcIik7XHJcbiAgICAgICAgcm90YXRpb25aTGFiZWwuaW5uZXJIVE1MID0gdGhpcy5tb2RlbC50cmFuc2Zvcm0ucm90YXRpb24uejtcclxuICAgIH1cclxuXHJcbiAgICBzY2FsZUhhbmRsZXIoKXtcclxuICAgICAgICBsZXQge2RvY3VtZW50fSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIC8vaGFuZGxlIHNjYWxlIFggc2xpZGVyXHJcbiAgICAgICAgbGV0IHNjYWxlWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NhbGF0aW9uLXgtc2xpZGVyXCIpO1xyXG4gICAgICAgIHNjYWxlWC5vbmlucHV0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2NhbGVYTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjYWxhdGlvbi14LXNsaWRlci12YWx1ZVwiKTtcclxuICAgICAgICAgICAgc2NhbGVYTGFiZWwuaW5uZXJIVE1MID0gc2NhbGVYLnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLnRyYW5zZm9ybS5zY2FsZS54ID0gc2NhbGVYLnZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9oYW5kbGUgc2NhbGUgWSBzbGlkZXJcclxuICAgICAgICBsZXQgc2NhbGVZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY2FsYXRpb24teS1zbGlkZXJcIik7XHJcbiAgICAgICAgc2NhbGVZLm9uaW5wdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzY2FsZVlMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NhbGF0aW9uLXktc2xpZGVyLXZhbHVlXCIpO1xyXG4gICAgICAgICAgICBzY2FsZVlMYWJlbC5pbm5lckhUTUwgPSBzY2FsZVkudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZWwudHJhbnNmb3JtLnNjYWxlLnkgPSBzY2FsZVkudmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2hhbmRsZSBzY2FsZSBaIHNsaWRlclxyXG4gICAgICAgIGxldCBzY2FsZVogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjYWxhdGlvbi15LXNsaWRlclwiKTtcclxuICAgICAgICBzY2FsZVoub25pbnB1dCA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNjYWxlWkxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY2FsYXRpb24teS1zbGlkZXItdmFsdWVcIik7XHJcbiAgICAgICAgICAgIHNjYWxlWkxhYmVsLmlubmVySFRNTCA9IHNjYWxlWi52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlbC50cmFuc2Zvcm0uc2NhbGUueiA9IHNjYWxlWi52YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vc2V0IGN1cnJlbnQgc2NhbGUgdmFsdWVzXHJcbiAgICAgICAgbGV0IHNjYWxlWExhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY2FsYXRpb24teC1zbGlkZXItdmFsdWVcIik7XHJcbiAgICAgICAgc2NhbGVYTGFiZWwuaW5uZXJIVE1MID0gdGhpcy5tb2RlbC50cmFuc2Zvcm0uc2NhbGUueDtcclxuXHJcbiAgICAgICAgbGV0IHNjYWxlWUxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY2FsYXRpb24teS1zbGlkZXItdmFsdWVcIik7XHJcbiAgICAgICAgc2NhbGVZTGFiZWwuaW5uZXJIVE1MID0gdGhpcy5tb2RlbC50cmFuc2Zvcm0uc2NhbGUueTtcclxuXHJcbiAgICAgICAgbGV0IHNjYWxlWkxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY2FsYXRpb24teS1zbGlkZXItdmFsdWVcIik7XHJcbiAgICAgICAgc2NhbGVaTGFiZWwuaW5uZXJIVE1MID0gdGhpcy5tb2RlbC50cmFuc2Zvcm0uc2NhbGUuejtcclxuICAgIH1cclxufSIsImltcG9ydCBNYXQ0IGZyb20gXCIuL21hdDRcIjtcclxuaW1wb3J0IHsgZGVnVG9SYWQgfSBmcm9tIFwiLi9tYXRoVXRpbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zZm9ybXtcclxuICAgIGNvbnN0cnVjdG9yKHByb2plY3Rpb24sIHRyYW5zbGF0aW9uLCByb3RhdGlvbiwgc2NhbGUsIGNlbnRyb2lkKXtcclxuICAgICAgICBsZXQgW3hwLCB5cCwgenBdID0gcHJvamVjdGlvbjtcclxuICAgICAgICB0aGlzLnByb2plY3Rpb24gPSB7XHJcbiAgICAgICAgICAgIHg6IHhwLFxyXG4gICAgICAgICAgICB5OiB5cCxcclxuICAgICAgICAgICAgejogenBcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IFt4dCwgeXQsIHp0XSA9IHRyYW5zbGF0aW9uO1xyXG4gICAgICAgIHRoaXMudHJhbnNsYXRpb24gPSB7XHJcbiAgICAgICAgICAgIHg6IHh0LFxyXG4gICAgICAgICAgICB5OiB5dCxcclxuICAgICAgICAgICAgejogenRcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IFt4ciwgeXIsIHpyXSA9IHJvdGF0aW9uO1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSB7XHJcbiAgICAgICAgICAgIHg6IHhyLFxyXG4gICAgICAgICAgICB5OiB5cixcclxuICAgICAgICAgICAgejogenJcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IFt4cywgeXMsIHpzXSA9IHNjYWxlO1xyXG4gICAgICAgIHRoaXMuc2NhbGUgPSB7XHJcbiAgICAgICAgICAgIHg6IHhzLFxyXG4gICAgICAgICAgICB5OiB5cyxcclxuICAgICAgICAgICAgejogenNcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IFt4YywgeWMsIHpjXSA9IGNlbnRyb2lkO1xyXG4gICAgICAgIHRoaXMuY2VudHJvaWQgPSB7XHJcbiAgICAgICAgICAgIHg6IHhjLFxyXG4gICAgICAgICAgICB5OiB5YyxcclxuICAgICAgICAgICAgejogemNcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvamVjdGlvbk1hdHJpeCgpe1xyXG4gICAgICAgIC8vcGVyZm9ybSBwcm9qZWN0aW9uXHJcbiAgICAgICAgbGV0IG1hdHJpeCA9IE1hdDQucHJvamVjdGlvbih0aGlzLnByb2plY3Rpb24ueCwgdGhpcy5wcm9qZWN0aW9uLnksIHRoaXMucHJvamVjdGlvbi56KTsgXHJcbiAgICAgICAgLy9wZXJmb3JtIHRyYW5zbGF0aW9uXHJcbiAgICAgICAgbWF0cml4ID0gTWF0NC5tdWx0aXBseShtYXRyaXgsIE1hdDQuZ2V0VHJhbnNsYXRpb24odGhpcy50cmFuc2xhdGlvbi54LCB0aGlzLnRyYW5zbGF0aW9uLnksIHRoaXMudHJhbnNsYXRpb24ueikpO1xyXG4gICAgICAgIC8vcGVyZm9ybSByb3RhdGlvblxyXG4gICAgICAgIG1hdHJpeCA9IE1hdDQubXVsdGlwbHkobWF0cml4LCBNYXQ0LmdldFJvdGF0aW9uWChkZWdUb1JhZCh0aGlzLnJvdGF0aW9uLngpKSk7XHJcbiAgICAgICAgbWF0cml4ID0gTWF0NC5tdWx0aXBseShtYXRyaXgsIE1hdDQuZ2V0Um90YXRpb25ZKGRlZ1RvUmFkKHRoaXMucm90YXRpb24ueSkpKTtcclxuICAgICAgICBtYXRyaXggPSBNYXQ0Lm11bHRpcGx5KG1hdHJpeCwgTWF0NC5nZXRSb3RhdGlvblooZGVnVG9SYWQodGhpcy5yb3RhdGlvbi56KSkpOyBcclxuICAgICAgICAvLyB0cmFuc2xhdGUgYmFjayB0byB0aGUgb3JpZ2luYWwgcG9zaXRpb25cclxuICAgICAgICAvL3BlcmZvcm0gc2NhbGluZ1xyXG4gICAgICAgIG1hdHJpeCA9IE1hdDQubXVsdGlwbHkobWF0cml4LCBNYXQ0LmdldFNjYWxlKHRoaXMuc2NhbGUueCwgdGhpcy5zY2FsZS55LCB0aGlzLnNjYWxlLnopKTtcclxuICAgICAgICByZXR1cm4gbWF0cml4O1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWZWM0e1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgeiwgdyl7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMueiA9IHo7XHJcbiAgICAgICAgdGhpcy53ID0gdztcclxuICAgIH1cclxuICAgIHN0YXRpYyBhZGQoYSwgYil7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWM0KGEueCArIGIueCwgYS55ICsgYi55LCBhLnogKyBiLnosIGEudyArIGIudyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRvdChhLCBiKXtcclxuICAgICAgICByZXR1cm4gYS54ICogYi54ICsgYS55ICogYi55ICsgYS56ICogYi56ICsgYS53ICogYi53O1xyXG4gICAgfVxyXG5cclxuICAgIGFzQXJyYXkoKXsgIFxyXG4gICAgICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnksIHRoaXMueiwgdGhpcy53XTtcclxuICAgIH1cclxuXHJcbn0iLCJcclxuaW1wb3J0IFZlYzQgZnJvbSAnLi9WZWM0LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdDR7XHJcblxyXG4gICAgZGF0YTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtMDAsIG0wMSwgbTAyLCBtMDMsIFxyXG4gICAgICAgICAgICAgICAgbTEwLCBtMTEsIG0xMiwgbTEzLCBcclxuICAgICAgICAgICAgICAgIG0yMCwgbTIxLCBtMjIsIG0yMywgXHJcbiAgICAgICAgICAgICAgICBtMzAsIG0zMSwgbTMyLCBtMzMpe1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoW20wMCwgbTAxLCBtMDIsIG0wMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTAsIG0xMSwgbTEyLCBtMTMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTIwLCBtMjEsIG0yMiwgbTIzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0zMCwgbTMxLCBtMzIsIG0zM10pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRFbXB0eSgpe1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0NCgwLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLCAwLCAwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0SWRlbnRpdHkoKXtcclxuICAgICAgICByZXR1cm4gbmV3IE1hdDQoMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCwgMCwgMCwgMSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBnZXRUcmFuc2xhdGlvbih4LCB5LCB6KXtcclxuICAgICAgICByZXR1cm4gbmV3IE1hdDQoMSwgMCwgMCwgeCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCwgMSwgMCwgeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCwgMCwgMSwgeixcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCwgMCwgMCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFNjYWxlKHgsIHksIHope1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IE1hdDQoeCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCwgeSwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCwgMCwgeiwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCwgMCwgMCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFJvdGF0aW9uWCh0aGV0YSl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXQ0KDEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsIE1hdGguY29zKHRoZXRhKSwgLU1hdGguc2luKHRoZXRhKSwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCwgTWF0aC5zaW4odGhldGEpLCBNYXRoLmNvcyh0aGV0YSksIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsIDAsIDAsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRSb3RhdGlvblkodGhldGEpe1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0NChNYXRoLmNvcyh0aGV0YSksIDAsIE1hdGguc2luKHRoZXRhKSwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLU1hdGguc2luKHRoZXRhKSwgMCwgTWF0aC5jb3ModGhldGEpLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLCAwLCAwLCAxKTtcclxuICAgIH0gICBcclxuXHJcbiAgICBzdGF0aWMgZ2V0Um90YXRpb25aKHRoZXRhKXtcclxuICAgICAgICByZXR1cm4gbmV3IE1hdDQoTWF0aC5jb3ModGhldGEpLCAtTWF0aC5zaW4odGhldGEpLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnNpbih0aGV0YSksIE1hdGguY29zKHRoZXRhKSwgMCwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCwgMCwgMCwgMSk7XHJcbiAgICB9ICAgXHJcbiAgICBzdGF0aWMgcHJvamVjdGlvbih3aWR0aCwgaGVpZ2h0LCBkZXB0aCkge1xyXG4gICAgICAgIC8vIE5vdGU6IFRoaXMgbWF0cml4IGZsaXBzIHRoZSBZIGF4aXMgc28gMCBpcyBhdCB0aGUgdG9wLlxyXG4gICAgICAgIHJldHVybiBuZXcgTWF0NCgyIC8gd2lkdGgsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsIC0yIC8gaGVpZ2h0LCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLCAwLCAyIC8gZGVwdGgsIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xLCAxLCAwLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb2x1bW4oaSl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWM0KHRoaXMuZGF0YVtpXSwgdGhpcy5kYXRhW2kgKyA0XSwgdGhpcy5kYXRhW2kgKyA4XSwgdGhpcy5kYXRhW2kgKyAxMl0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJvdyhpKXtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzQodGhpcy5kYXRhW2kgKiA0XSwgdGhpcy5kYXRhW2kgKiA0ICsgMV0sIHRoaXMuZGF0YVtpICogNCArIDJdLCB0aGlzLmRhdGFbaSAqIDQgKyAzXSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5zdGFuY2UoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtdWx0aXBseShhLCBiKXtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gTWF0NC5nZXRFbXB0eSgpO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA0OyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgcm93ID0gYS5nZXRSb3coaSk7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCA0OyBqKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbCA9IGIuZ2V0Q29sdW1uKGopO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmRhdGFbaSAqIDQgKyBqXSA9IFZlYzQuZG90KHJvdywgY29sKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59IiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWdUb1JhZChkZWdyZWVzKXtcclxuICAgIHJldHVybiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcclxufSAgIFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhZFRvRGVnKHJhZGlhbnMpe1xyXG4gICAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xyXG59IiwiaW1wb3J0IFRyYW5zZm9ybSBmcm9tIFwiLi4vbWF0aC9UcmFuc2Zvcm0uanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VNb2RlbCB7XHJcblxyXG5cclxuICAgIC8vIGFic3RyYWN0IHJlYWRvbmx5IHNoYXBlOiBTaGFwZUVudW07XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEFCU1RSQUNUIE1FVEhPRFxyXG4gICAgICovXHJcbiAgICAvLyBwdWJsaWMgYWJzdHJhY3Qgc2V0UG9zaXRpb24oZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCk6IHZvaWQ7XHJcbiAgICAvLyBwdWJsaWMgYWJzdHJhY3Qgc2V0Q29sb3IoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCk6IHZvaWQ7XHJcbiAgICAvLyBwdWJsaWMgYWJzdHJhY3QgaXNOdWxsVmVydGV4KCk6IGJvb2xlYW47XHJcbiAgICAvLyBwdWJsaWMgYWJzdHJhY3QgY291bnRWZXJ0ZXgoKTogbnVtYmVyO1xyXG4gICAgLy8gcHVibGljIGFic3RyYWN0IGNvdW50UmVhbFZlcnRleCgpOiBudW1iZXI7XHJcbiAgICAvLyBwdWJsaWMgYWJzdHJhY3QgY2VudHJvaWQoKTogW251bWJlciwgbnVtYmVyXTtcclxuICAgIC8vIHB1YmxpYyBhYnN0cmFjdCBnZXRHTFR5cGUoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCk6IG51bWJlcjtcclxuICAgIC8vIHB1YmxpYyBhYnN0cmFjdCBzZXRWZXJ0ZXgodmVydGV4OiBWZXJ0ZXgsIGluZGV4OiBudW1iZXIpOiB2b2lkO1xyXG4gICAgLy8gcHVibGljIGFic3RyYWN0IGNoYW5nZUNvbG9yKGNvbG9yOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSk6IHZvaWQ7XHJcblxyXG4gICAgc2V0UG9zaXRpb24oZ2wpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDb2xvcihnbCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENlbnRyb2lkKCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTnVsbFZlcnRleCgpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3VudFZlcnRleCgpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHBvc2l0aW9uUHJvYyhyZW5kZXJQcm9wcykge1xyXG4gICAgICAgIGxldCB7IGdsLCBwcm9ncmFtLCBwb3NpdGlvbkJ1ZmZlciB9ID0gcmVuZGVyUHJvcHM7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25Mb2MgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBcImFfcG9zaXRpb25cIik7XHJcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9zaXRpb25Mb2MpO1xyXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBwb3NpdGlvbkJ1ZmZlcik7XHJcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihnbCk7XHJcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihwb3NpdGlvbkxvYywgMywgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb2xvclByb2MocmVuZGVyUHJvcHMpIHtcclxuICAgICAgICBsZXQgeyBnbCwgcHJvZ3JhbSwgY29sb3JCdWZmZXIgfSA9IHJlbmRlclByb3BzO1xyXG4gICAgICAgIGNvbnN0IGNvbG9yTG9jID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgXCJhX2NvbG9yXCIpO1xyXG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGNvbG9yTG9jKTtcclxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgY29sb3JCdWZmZXIpO1xyXG4gICAgICAgIHRoaXMuc2V0Q29sb3IoZ2wpO1xyXG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoY29sb3JMb2MsIDQsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgbWF0cml4UHJvYyhyZW5kZXJQcm9wcykge1xyXG4gICAgICAgIGxldCB7IGdsLCBwcm9ncmFtIH0gPSByZW5kZXJQcm9wcztcclxuICAgICAgICBjb25zdCBjZW50cm9pZCA9IHRoaXMuZ2V0Q2VudHJvaWQoKTtcclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG1hdCA9IHRoaXMudHJhbnNmb3JtLmdldFByb2plY3Rpb25NYXRyaXgoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWF0cml4TG9jID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIFwidV9tYXRyaXhcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdihtYXRyaXhMb2MsIGZhbHNlLCBtYXQuZ2V0SW5zdGFuY2UoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1Byb2MocmVuZGVyUHJvcHMpIHtcclxuICAgICAgICBsZXQgeyBnbCB9ID0gcmVuZGVyUHJvcHM7XHJcbiAgICAgICAgY29uc3QgcHJpbWl0aXZlID0gZ2wuVFJJQU5HTEVTO1xyXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IDA7XHJcbiAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLmNvdW50VmVydGV4KCk7XHJcblxyXG4gICAgICAgIGdsLmRyYXdBcnJheXMocHJpbWl0aXZlLCBvZmZzZXQsIGNvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHsqfSByIDogcmVuZGVyUHJvcHNcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICByZW5kZXIocikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTnVsbFZlcnRleCgpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvblByb2Mocik7XHJcbiAgICAgICAgdGhpcy5jb2xvclByb2Mocik7XHJcbiAgICAgICAgdGhpcy5tYXRyaXhQcm9jKHIpO1xyXG4gICAgICAgIHRoaXMuZHJhd1Byb2Mocik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZU1vZGVsIGZyb20gJy4vQmFzZU1vZGVsLmpzJztcclxuaW1wb3J0IFRyYW5zZm9ybSBmcm9tICcuLi9tYXRoL1RyYW5zZm9ybS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEdW1teU1vZGVsIGV4dGVuZHMgQmFzZU1vZGVse1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkLCByZW5kZXJQcm9wcyl7XHJcbiAgICAgICAgc3VwZXIoaWQpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25CdWZmZXIgPSBwb3NpdGlvbkJ1ZmZlcjtcclxuICAgICAgICB0aGlzLmNvbG9yQnVmZmVyID0gY29sb3JCdWZmZXI7XHJcbiAgICAgICAgdGhpcy5pbml0VHJhbnNmb3JtKHJlbmRlclByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0VHJhbnNmb3JtKHJlbmRlclByb3BzKXtcclxuICAgICAgICBsZXQgeyBnbCwgcHJvZ3JhbSB9ID0gcmVuZGVyUHJvcHM7XHJcbiAgICAgICAgbGV0IHByb2plY3Rpb24gPSBbZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0LCAyXTtcclxuICAgICAgICBsZXQgdHJhbnNsYXRpb24gPSBbMCwgMCwgMF07XHJcbiAgICAgICAgbGV0IHJvdGF0aW9uID0gWzAsIDAsIDBdO1xyXG4gICAgICAgIGxldCBzY2FsZSA9IFsxLCAxLCAxXTtcclxuICAgICAgICBsZXQgY2VudHJvaWQgPSB0aGlzLmdldENlbnRyb2lkKCk7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSBuZXcgVHJhbnNmb3JtKHByb2plY3Rpb24sIHRyYW5zbGF0aW9uLCByb3RhdGlvbiwgc2NhbGUsIGNlbnRyb2lkKTtcclxuICAgIH1cclxuICAgIC8vIG92ZXJyaWRlIGNvbG9yUHJvY1xyXG4gICAgY29sb3JQcm9jKHJlbmRlclByb3BzKXtcclxuICAgICAgICBsZXQgeyBnbCwgcHJvZ3JhbSwgY29sb3JCdWZmZXIgfSA9IHJlbmRlclByb3BzO1xyXG4gICAgICAgIGNvbnN0IGNvbG9yTG9jID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgXCJhX2NvbG9yXCIpO1xyXG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGNvbG9yTG9jKTtcclxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgY29sb3JCdWZmZXIpO1xyXG4gICAgICAgIHRoaXMuc2V0Q29sb3IoZ2wpO1xyXG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoY29sb3JMb2MsIDMsIGdsLlVOU0lHTkVEX0JZVEUsIHRydWUsIDAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vb3ZlcnJpZGUgZHJhd1Byb2NcclxuICAgIGRyYXdQcm9jKHJlbmRlclByb3BzKXtcclxuICAgICAgICBsZXQgeyBnbCB9ID0gcmVuZGVyUHJvcHM7XHJcbiAgICAgICAgdmFyIHByaW1pdGl2ZVR5cGUgPSBnbC5UUklBTkdMRVM7XHJcbiAgICAgICAgdmFyIG9mZnNldCA9IDA7XHJcbiAgICAgICAgdmFyIGNvdW50ID0gMTYgKiA2O1xyXG4gICAgICAgIGdsLmRyYXdBcnJheXMocHJpbWl0aXZlVHlwZSwgb2Zmc2V0LCBjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9pbXBsZW1lbnQgdGhlIGFic3RyYWN0IG1ldGhvZFxyXG4gICAgc2V0UG9zaXRpb24oZ2wpe1xyXG4gICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLnBvc2l0aW9uQnVmZmVyLCBnbC5TVEFUSUNfRFJBVyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29sb3IoZ2wpe1xyXG4gICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCB0aGlzLmNvbG9yQnVmZmVyLCBnbC5TVEFUSUNfRFJBVyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2VudHJvaWQoKXtcclxuICAgICAgICAvL2l0ZXJhdGUgdGhyb3VnaCB0aGUgcG9zaXRpb24gYnVmZmVyIGFuZCBnZXQgdGhlIGNlbnRyb2lkXHJcbiAgICAgICAgbGV0IHggPSAwO1xyXG4gICAgICAgIGxldCB5ID0gMDtcclxuICAgICAgICBsZXQgeiA9IDA7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMucG9zaXRpb25CdWZmZXIubGVuZ3RoOyBpKz0zKXtcclxuICAgICAgICAgICAgeCArPSB0aGlzLnBvc2l0aW9uQnVmZmVyW2ldO1xyXG4gICAgICAgICAgICB5ICs9IHRoaXMucG9zaXRpb25CdWZmZXJbaSsxXTtcclxuICAgICAgICAgICAgeiArPSB0aGlzLnBvc2l0aW9uQnVmZmVyW2krMl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBuID0gdGhpcy5wb3NpdGlvbkJ1ZmZlci5sZW5ndGgvMztcclxuICAgICAgICByZXR1cm4gW3gvbiwgeS9uLCB6L25dO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTnVsbFZlcnRleCgpe1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcbn1cclxuXHJcbmNvbnN0IHBvc2l0aW9uQnVmZmVyID0gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAvLyBsZWZ0IGNvbHVtbiBmcm9udFxyXG4gICAgMCwgICAwLCAgMCxcclxuICAgIDAsIDE1MCwgIDAsXHJcbiAgICAzMCwgICAwLCAgMCxcclxuICAgIDAsIDE1MCwgIDAsXHJcbiAgICAzMCwgMTUwLCAgMCxcclxuICAgIDMwLCAgIDAsICAwLFxyXG5cclxuICAgIC8vIHRvcCBydW5nIGZyb250XHJcbiAgICAzMCwgICAwLCAgMCxcclxuICAgIDMwLCAgMzAsICAwLFxyXG4gICAgMTAwLCAgIDAsICAwLFxyXG4gICAgMzAsICAzMCwgIDAsXHJcbiAgICAxMDAsICAzMCwgIDAsXHJcbiAgICAxMDAsICAgMCwgIDAsXHJcblxyXG4gICAgLy8gbWlkZGxlIHJ1bmcgZnJvbnRcclxuICAgIDMwLCAgNjAsICAwLFxyXG4gICAgMzAsICA5MCwgIDAsXHJcbiAgICA2NywgIDYwLCAgMCxcclxuICAgIDMwLCAgOTAsICAwLFxyXG4gICAgNjcsICA5MCwgIDAsXHJcbiAgICA2NywgIDYwLCAgMCxcclxuXHJcbiAgICAvLyBsZWZ0IGNvbHVtbiBiYWNrXHJcbiAgICAgIDAsICAgMCwgIDMwLFxyXG4gICAgIDMwLCAgIDAsICAzMCxcclxuICAgICAgMCwgMTUwLCAgMzAsXHJcbiAgICAgIDAsIDE1MCwgIDMwLFxyXG4gICAgIDMwLCAgIDAsICAzMCxcclxuICAgICAzMCwgMTUwLCAgMzAsXHJcblxyXG4gICAgLy8gdG9wIHJ1bmcgYmFja1xyXG4gICAgIDMwLCAgIDAsICAzMCxcclxuICAgIDEwMCwgICAwLCAgMzAsXHJcbiAgICAgMzAsICAzMCwgIDMwLFxyXG4gICAgIDMwLCAgMzAsICAzMCxcclxuICAgIDEwMCwgICAwLCAgMzAsXHJcbiAgICAxMDAsICAzMCwgIDMwLFxyXG5cclxuICAgIC8vIG1pZGRsZSBydW5nIGJhY2tcclxuICAgICAzMCwgIDYwLCAgMzAsXHJcbiAgICAgNjcsICA2MCwgIDMwLFxyXG4gICAgIDMwLCAgOTAsICAzMCxcclxuICAgICAzMCwgIDkwLCAgMzAsXHJcbiAgICAgNjcsICA2MCwgIDMwLFxyXG4gICAgIDY3LCAgOTAsICAzMCxcclxuXHJcbiAgICAvLyB0b3BcclxuICAgICAgMCwgICAwLCAgIDAsXHJcbiAgICAxMDAsICAgMCwgICAwLFxyXG4gICAgMTAwLCAgIDAsICAzMCxcclxuICAgICAgMCwgICAwLCAgIDAsXHJcbiAgICAxMDAsICAgMCwgIDMwLFxyXG4gICAgICAwLCAgIDAsICAzMCxcclxuXHJcbiAgICAvLyB0b3AgcnVuZyByaWdodFxyXG4gICAgMTAwLCAgIDAsICAgMCxcclxuICAgIDEwMCwgIDMwLCAgIDAsXHJcbiAgICAxMDAsICAzMCwgIDMwLFxyXG4gICAgMTAwLCAgIDAsICAgMCxcclxuICAgIDEwMCwgIDMwLCAgMzAsXHJcbiAgICAxMDAsICAgMCwgIDMwLFxyXG5cclxuICAgIC8vIHVuZGVyIHRvcCBydW5nXHJcbiAgICAzMCwgICAzMCwgICAwLFxyXG4gICAgMzAsICAgMzAsICAzMCxcclxuICAgIDEwMCwgIDMwLCAgMzAsXHJcbiAgICAzMCwgICAzMCwgICAwLFxyXG4gICAgMTAwLCAgMzAsICAzMCxcclxuICAgIDEwMCwgIDMwLCAgIDAsXHJcblxyXG4gICAgLy8gYmV0d2VlbiB0b3AgcnVuZyBhbmQgbWlkZGxlXHJcbiAgICAzMCwgICAzMCwgICAwLFxyXG4gICAgMzAsICAgNjAsICAzMCxcclxuICAgIDMwLCAgIDMwLCAgMzAsXHJcbiAgICAzMCwgICAzMCwgICAwLFxyXG4gICAgMzAsICAgNjAsICAgMCxcclxuICAgIDMwLCAgIDYwLCAgMzAsXHJcblxyXG4gICAgLy8gdG9wIG9mIG1pZGRsZSBydW5nXHJcbiAgICAzMCwgICA2MCwgICAwLFxyXG4gICAgNjcsICAgNjAsICAzMCxcclxuICAgIDMwLCAgIDYwLCAgMzAsXHJcbiAgICAzMCwgICA2MCwgICAwLFxyXG4gICAgNjcsICAgNjAsICAgMCxcclxuICAgIDY3LCAgIDYwLCAgMzAsXHJcblxyXG4gICAgLy8gcmlnaHQgb2YgbWlkZGxlIHJ1bmdcclxuICAgIDY3LCAgIDYwLCAgIDAsXHJcbiAgICA2NywgICA5MCwgIDMwLFxyXG4gICAgNjcsICAgNjAsICAzMCxcclxuICAgIDY3LCAgIDYwLCAgIDAsXHJcbiAgICA2NywgICA5MCwgICAwLFxyXG4gICAgNjcsICAgOTAsICAzMCxcclxuXHJcbiAgICAvLyBib3R0b20gb2YgbWlkZGxlIHJ1bmcuXHJcbiAgICAzMCwgICA5MCwgICAwLFxyXG4gICAgMzAsICAgOTAsICAzMCxcclxuICAgIDY3LCAgIDkwLCAgMzAsXHJcbiAgICAzMCwgICA5MCwgICAwLFxyXG4gICAgNjcsICAgOTAsICAzMCxcclxuICAgIDY3LCAgIDkwLCAgIDAsXHJcblxyXG4gICAgLy8gcmlnaHQgb2YgYm90dG9tXHJcbiAgICAzMCwgICA5MCwgICAwLFxyXG4gICAgMzAsICAxNTAsICAzMCxcclxuICAgIDMwLCAgIDkwLCAgMzAsXHJcbiAgICAzMCwgICA5MCwgICAwLFxyXG4gICAgMzAsICAxNTAsICAgMCxcclxuICAgIDMwLCAgMTUwLCAgMzAsXHJcblxyXG4gICAgLy8gYm90dG9tXHJcbiAgICAwLCAgIDE1MCwgICAwLFxyXG4gICAgMCwgICAxNTAsICAzMCxcclxuICAgIDMwLCAgMTUwLCAgMzAsXHJcbiAgICAwLCAgIDE1MCwgICAwLFxyXG4gICAgMzAsICAxNTAsICAzMCxcclxuICAgIDMwLCAgMTUwLCAgIDAsXHJcblxyXG4gICAgLy8gbGVmdCBzaWRlXHJcbiAgICAwLCAgIDAsICAgMCxcclxuICAgIDAsICAgMCwgIDMwLFxyXG4gICAgMCwgMTUwLCAgMzAsXHJcbiAgICAwLCAgIDAsICAgMCxcclxuICAgIDAsIDE1MCwgIDMwLFxyXG4gICAgMCwgMTUwLCAgIDBdKVxyXG5cclxuY29uc3QgY29sb3JCdWZmZXIgPSBuZXcgVWludDhBcnJheShbXHJcbiAgICAvLyBsZWZ0IGNvbHVtbiBmcm9udFxyXG4gIDIwMCwgIDcwLCAxMjAsXHJcbiAgMjAwLCAgNzAsIDEyMCxcclxuICAyMDAsICA3MCwgMTIwLFxyXG4gIDIwMCwgIDcwLCAxMjAsXHJcbiAgMjAwLCAgNzAsIDEyMCxcclxuICAyMDAsICA3MCwgMTIwLFxyXG5cclxuICAgIC8vIHRvcCBydW5nIGZyb250XHJcbiAgMjAwLCAgNzAsIDEyMCxcclxuICAyMDAsICA3MCwgMTIwLFxyXG4gIDIwMCwgIDcwLCAxMjAsXHJcbiAgMjAwLCAgNzAsIDEyMCxcclxuICAyMDAsICA3MCwgMTIwLFxyXG4gIDIwMCwgIDcwLCAxMjAsXHJcblxyXG4gICAgLy8gbWlkZGxlIHJ1bmcgZnJvbnRcclxuICAyMDAsICA3MCwgMTIwLFxyXG4gIDIwMCwgIDcwLCAxMjAsXHJcbiAgMjAwLCAgNzAsIDEyMCxcclxuICAyMDAsICA3MCwgMTIwLFxyXG4gIDIwMCwgIDcwLCAxMjAsXHJcbiAgMjAwLCAgNzAsIDEyMCxcclxuXHJcbiAgICAvLyBsZWZ0IGNvbHVtbiBiYWNrXHJcbiAgODAsIDcwLCAyMDAsXHJcbiAgODAsIDcwLCAyMDAsXHJcbiAgODAsIDcwLCAyMDAsXHJcbiAgODAsIDcwLCAyMDAsXHJcbiAgODAsIDcwLCAyMDAsXHJcbiAgODAsIDcwLCAyMDAsXHJcblxyXG4gICAgLy8gdG9wIHJ1bmcgYmFja1xyXG4gIDgwLCA3MCwgMjAwLFxyXG4gIDgwLCA3MCwgMjAwLFxyXG4gIDgwLCA3MCwgMjAwLFxyXG4gIDgwLCA3MCwgMjAwLFxyXG4gIDgwLCA3MCwgMjAwLFxyXG4gIDgwLCA3MCwgMjAwLFxyXG5cclxuICAgIC8vIG1pZGRsZSBydW5nIGJhY2tcclxuICA4MCwgNzAsIDIwMCxcclxuICA4MCwgNzAsIDIwMCxcclxuICA4MCwgNzAsIDIwMCxcclxuICA4MCwgNzAsIDIwMCxcclxuICA4MCwgNzAsIDIwMCxcclxuICA4MCwgNzAsIDIwMCxcclxuXHJcbiAgICAvLyB0b3BcclxuICA3MCwgMjAwLCAyMTAsXHJcbiAgNzAsIDIwMCwgMjEwLFxyXG4gIDcwLCAyMDAsIDIxMCxcclxuICA3MCwgMjAwLCAyMTAsXHJcbiAgNzAsIDIwMCwgMjEwLFxyXG4gIDcwLCAyMDAsIDIxMCxcclxuXHJcbiAgICAvLyB0b3AgcnVuZyByaWdodFxyXG4gIDIwMCwgMjAwLCA3MCxcclxuICAyMDAsIDIwMCwgNzAsXHJcbiAgMjAwLCAyMDAsIDcwLFxyXG4gIDIwMCwgMjAwLCA3MCxcclxuICAyMDAsIDIwMCwgNzAsXHJcbiAgMjAwLCAyMDAsIDcwLFxyXG5cclxuICAgIC8vIHVuZGVyIHRvcCBydW5nXHJcbiAgMjEwLCAxMDAsIDcwLFxyXG4gIDIxMCwgMTAwLCA3MCxcclxuICAyMTAsIDEwMCwgNzAsXHJcbiAgMjEwLCAxMDAsIDcwLFxyXG4gIDIxMCwgMTAwLCA3MCxcclxuICAyMTAsIDEwMCwgNzAsXHJcblxyXG4gICAgLy8gYmV0d2VlbiB0b3AgcnVuZyBhbmQgbWlkZGxlXHJcbiAgMjEwLCAxNjAsIDcwLFxyXG4gIDIxMCwgMTYwLCA3MCxcclxuICAyMTAsIDE2MCwgNzAsXHJcbiAgMjEwLCAxNjAsIDcwLFxyXG4gIDIxMCwgMTYwLCA3MCxcclxuICAyMTAsIDE2MCwgNzAsXHJcblxyXG4gICAgLy8gdG9wIG9mIG1pZGRsZSBydW5nXHJcbiAgNzAsIDE4MCwgMjEwLFxyXG4gIDcwLCAxODAsIDIxMCxcclxuICA3MCwgMTgwLCAyMTAsXHJcbiAgNzAsIDE4MCwgMjEwLFxyXG4gIDcwLCAxODAsIDIxMCxcclxuICA3MCwgMTgwLCAyMTAsXHJcblxyXG4gICAgLy8gcmlnaHQgb2YgbWlkZGxlIHJ1bmdcclxuICAxMDAsIDcwLCAyMTAsXHJcbiAgMTAwLCA3MCwgMjEwLFxyXG4gIDEwMCwgNzAsIDIxMCxcclxuICAxMDAsIDcwLCAyMTAsXHJcbiAgMTAwLCA3MCwgMjEwLFxyXG4gIDEwMCwgNzAsIDIxMCxcclxuXHJcbiAgICAvLyBib3R0b20gb2YgbWlkZGxlIHJ1bmcuXHJcbiAgNzYsIDIxMCwgMTAwLFxyXG4gIDc2LCAyMTAsIDEwMCxcclxuICA3NiwgMjEwLCAxMDAsXHJcbiAgNzYsIDIxMCwgMTAwLFxyXG4gIDc2LCAyMTAsIDEwMCxcclxuICA3NiwgMjEwLCAxMDAsXHJcblxyXG4gICAgLy8gcmlnaHQgb2YgYm90dG9tXHJcbiAgMTQwLCAyMTAsIDgwLFxyXG4gIDE0MCwgMjEwLCA4MCxcclxuICAxNDAsIDIxMCwgODAsXHJcbiAgMTQwLCAyMTAsIDgwLFxyXG4gIDE0MCwgMjEwLCA4MCxcclxuICAxNDAsIDIxMCwgODAsXHJcblxyXG4gICAgLy8gYm90dG9tXHJcbiAgOTAsIDEzMCwgMTEwLFxyXG4gIDkwLCAxMzAsIDExMCxcclxuICA5MCwgMTMwLCAxMTAsXHJcbiAgOTAsIDEzMCwgMTEwLFxyXG4gIDkwLCAxMzAsIDExMCxcclxuICA5MCwgMTMwLCAxMTAsXHJcblxyXG4gICAgLy8gbGVmdCBzaWRlXHJcbiAgMTYwLCAxNjAsIDIyMCxcclxuICAxNjAsIDE2MCwgMjIwLFxyXG4gIDE2MCwgMTYwLCAyMjAsXHJcbiAgMTYwLCAxNjAsIDIyMCxcclxuICAxNjAsIDE2MCwgMjIwLFxyXG4gIDE2MCwgMTYwLCAyMjBdKSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0oXHJcbiAgICBnbCxcclxuICAgIHZlcnRleFNoYWRlcixcclxuICAgIGZyYWdtZW50U2hhZGVyXHJcbil7XHJcbiAgICBjb25zdCBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xyXG5cclxuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xyXG4gICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcclxuXHJcbiAgICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcclxuXHJcbiAgICBjb25zdCBzdWNjZXNzID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUyk7XHJcbiAgICBpZiAoIXN1Y2Nlc3MpIHtcclxuICAgICAgICBnbC5kZWxldGVQcm9ncmFtKHByb2dyYW0pO1xyXG5cclxuICAgICAgICB0aHJvdyBFcnJvcihcIkZhaWxlZCB0byBjb21waWxlIHNoYWRlciFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByb2dyYW07XHJcbn1cclxuIiwiZnVuY3Rpb24gcmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZShjYW52YXMpIHtcclxuICAgIC8vIExvb2t1cCB0aGUgc2l6ZSB0aGUgYnJvd3NlciBpcyBkaXNwbGF5aW5nIHRoZSBjYW52YXMgaW4gQ1NTIHBpeGVscy5cclxuICAgIGNvbnN0IGRpc3BsYXlXaWR0aCA9IGNhbnZhcy5jbGllbnRXaWR0aDtcclxuICAgIGNvbnN0IGRpc3BsYXlIZWlnaHQgPSBjYW52YXMuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgIGNhbnZhcy53aWR0aCA9IGRpc3BsYXlXaWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBkaXNwbGF5SGVpZ2h0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTaGFkZXIoXHJcbiAgICBnbCxcclxuICAgIHR5cGUsXHJcbiAgICBzb3VyY2VcclxuKSB7XHJcbiAgICBjb25zdCBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodHlwZSk7XHJcbiAgICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzb3VyY2UpO1xyXG4gICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xyXG5cclxuICAgIGNvbnN0IHN1Y2Nlc3MgPSBnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUyk7XHJcbiAgICBpZiAoIXN1Y2Nlc3MpIHtcclxuICAgICAgICBnbC5kZWxldGVTaGFkZXIoc2hhZGVyKTtcclxuXHJcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJGYWlsZWQgdG8gY29tcGlsZSBzaGFkZXIhXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzaGFkZXI7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIlxyXG5cclxuaW1wb3J0IERyYXdIYW5kbGVyIGZyb20gXCIuL2hhbmRsZXIvRHJhd0hhbmRsZXJcIjtcclxuaW1wb3J0IGNyZWF0ZVByb2dyYW0gZnJvbSBcIi4vdXRpbHMvcHJvZ3JhbVwiO1xyXG5pbXBvcnQgcmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZSBmcm9tIFwiLi91dGlscy9yZXNpemVcIjtcclxuaW1wb3J0IGNyZWF0ZVNoYWRlciBmcm9tIFwiLi91dGlscy9zaGFkZXJzXCI7XHJcblxyXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdsLWNhbnZhc1wiKTtcclxuY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xyXG5pZighZ2wpe1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiV2ViR0wgbm90IHN1cHBvcnRlZFwiKTtcclxufVxyXG5cclxuY29uc3QgdmVydGV4U2hhZGVyU291cmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZXJ0ZXgtc2hhZGVyLTNkXCIpPy50ZXh0Q29udGVudDtcclxuY29uc3QgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyYWdtZW50LXNoYWRlci0zZFwiKT8udGV4dENvbnRlbnQ7XHJcblxyXG5jb25zdCB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVTaGFkZXIoZ2wsIGdsLlZFUlRFWF9TSEFERVIsIHZlcnRleFNoYWRlclNvdXJjZSk7XHJcbmNvbnN0IGZyYWdtZW50U2hhZGVyID0gY3JlYXRlU2hhZGVyKFxyXG4gICAgZ2wsXHJcbiAgICBnbC5GUkFHTUVOVF9TSEFERVIsXHJcbiAgICBmcmFnbWVudFNoYWRlclNvdXJjZVxyXG4pO1xyXG5cclxuY29uc3QgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0oZ2wsIHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpO1xyXG5cclxuZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcclxuXHJcbnJlc2l6ZUNhbnZhc1RvRGlzcGxheVNpemUoZ2wuY2FudmFzKTtcclxuXHJcbmdsLnZpZXdwb3J0KDAsIDAsIGdsLmNhbnZhcy53aWR0aCwgZ2wuY2FudmFzLmhlaWdodCk7XHJcblxyXG5nbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKTtcclxuXHJcbmdsLmVuYWJsZShnbC5DVUxMX0ZBQ0UpO1xyXG5cclxuY29uc3QgZHJhd0hhbmRsZXIgPSBuZXcgRHJhd0hhbmRsZXIoZ2wsIHByb2dyYW0sIGRvY3VtZW50KTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==