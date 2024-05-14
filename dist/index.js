/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/handler/handler.js":
/*!********************************!*\
  !*** ./src/handler/handler.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });

// make handler object

// translation

function handler(target) {
    const translationX = document.getElementById('translation-x-slider');
    const translationY = document.getElementById('translation-y-slider');
    const translationZ = document.getElementById('translation-z-slider');
    const translataionXValue = document.getElementById('translation-x-slider-value');
    const translataionYValue = document.getElementById('translation-y-slider-value');
    const translataionZValue = document.getElementById('translation-z-slider-value');

    //rotation
    const rotationX = document.getElementById('rotation-x-slider');
    const rotationY = document.getElementById('rotation-y-slider');
    const rotationZ = document.getElementById('rotation-z-slider');
    const rotationXValue = document.getElementById('rotation-x-slider-value');
    const rotationYValue = document.getElementById('rotation-y-slider-value');
    const rotationZValue = document.getElementById('rotation-z-slider-value');

    //scalation
    const scalationX = document.getElementById('scalation-x-slider');
    const scalationY = document.getElementById('scalation-y-slider');
    const scalationZ = document.getElementById('scalation-z-slider');
    const scalationXValue = document.getElementById('scalation-x-slider-value');
    const scalationYValue = document.getElementById('scalation-y-slider-value');
    const scalationZValue = document.getElementById('scalation-z-slider-value');

    //camera
    const orthographic = document.getElementById('orthographic');
    const oblique = document.getElementById('oblique');
    const perspective = document.getElementById('perspective');

    // camera radius
    const cameraRadius = document.getElementById('camera-radius-slider');
    // camera roll-pitch
    const cameraRoll = document.getElementById('camera-roll-slider');
    const cameraPitch = document.getElementById('camera-pitch-slider');

    // set orthographic as default input radio button
    orthographic.checked = true;


    // event listener
    translationX.addEventListener('input', function(){
        target.transform.translate[0] = (2 * translationX.value) / 100;
        translataionXValue.textContent = target.transform.translate[0];
    });

    translationY.addEventListener('input', function(){
        target.transform.translate[1] = (2 * translationY.value) / 100;
        translataionYValue.textContent = target.transform.translate[1];
    });

    translationZ.addEventListener('input', function(){
        target.transform.translate[2] = (2 * translationZ.value) / 100;
        translataionZValue.textContent = target.transform.translate[2];
    });

    rotationX.addEventListener('input', function(){
        target.transform.rotate[0] = (2 * rotationX.value) / 100;
        rotationXValue.textContent = target.transform.rotate[0];
    })

    rotationY.addEventListener('input', function(){
        target.transform.rotate[1] = (2 * rotationY.value) / 100;
        rotationYValue.textContent = target.transform.rotate[1];
    })

    rotationZ.addEventListener('input', function(){
        target.transform.rotate[2] = (2 * rotationZ.value) / 100;
        rotationZValue.textContent = target.transform.rotate[2];
    })

    scalationX.addEventListener('input', function(){
        target.transform.scale[0] =  scalationX.value / 20;
        scalationXValue.textContent = target.transform.scale[0];
    })

    scalationY.addEventListener('input', function(){
        target.transform.scale[1] =  scalationY.value / 20;
        scalationYValue.textContent = target.transform.scale[1];
    })

    scalationZ.addEventListener('input', function(){
        target.transform.scale[2] =  scalationZ.value / 20;
        scalationZValue.textContent = target.transform.scale[2];
    })

    // camera
    orthographic.addEventListener('click', function(){
        projection = 'orthographic';
    })

    oblique.addEventListener('click', function(){
        projection = 'oblique';
    })

    perspective.addEventListener('click', function(){
        projection = 'perspective';
    })

    function handleCameraView(node) {
        let epsilon = 0.00001;
        
        //radius, roll, pitch
        let radius = parseFloat(cameraRadius.value)/10;
        let roll = degToRad(parseFloat(cameraRoll.value));
        let pitch = degToRad(parseFloat(cameraPitch.value));


    node.viewMatrix.camera = [
        roll,
        pitch,
        radius == 0 ? epsilon : radius,  
    ];
    for(let child of node.children){
        handleCameraView(child);
    }
    }

    cameraRadius.addEventListener('input', function(){
        // get camera radius
        // target is a root Node, recurse to set camera radius
        let epsilon = 0.0001;

        let val = parseFloat(cameraRadius.value);
        val /= 10;
        console.log(target)
        
        handleCameraView(target);

        // update camera radius value
        document.getElementById('camera-radius-slider-value').textContent = val;
    })

    cameraRoll.addEventListener('input', function(){
        
        handleCameraView(target)

        document.getElementById('camera-roll-slider-value').textContent = cameraRoll.value;
    })

    cameraPitch.addEventListener('input', function(){
    



        handleCameraView(target)
        document.getElementById('camera-pitch-slider-value').textContent = cameraPitch.value;
    })


}




/***/ }),

/***/ "./src/structs/math/Mat4.js":
/*!**********************************!*\
  !*** ./src/structs/math/Mat4.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mat4)
/* harmony export */ });
/* harmony import */ var _Vec4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vec4.js */ "./src/structs/math/Vec4.js");

class Mat4{
    static getEmpty(){
        return [0, 0, 0, 0,
                0, 0, 0, 0,
                0, 0, 0, 0,
                0, 0, 0, 0]
    }

    static getIdentity(){
        return [1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1];
    }


    static getTranslation(x, y, z){
        return [1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                x, y, z, 1];
    }

    static getScale(x, y, z){
        return [x, 0, 0, 0,
                0, y, 0, 0,
                0, 0, z, 0,
                0, 0, 0, 1];
    }

    static getRotationX(theta){
        return [1, 0, 0, 0,
                0, Math.cos(theta), -Math.sin(theta), 0,
                0, Math.sin(theta), Math.cos(theta), 0,
                0, 0, 0, 1];
    }

    static getRotationY(theta){
        return [Math.cos(theta), 0, Math.sin(theta), 0,
                0, 1, 0, 0,
                -Math.sin(theta), 0, Math.cos(theta), 0,
                0, 0, 0, 1];
    }

    static getRotationZ(theta){
        return [Math.cos(theta), -Math.sin(theta), 0, 0,
                Math.sin(theta), Math.cos(theta), 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1];
    }   
    static projectionOrtographic(left, right, bottom, top, near, far) {
        // Note: This matrix flips the Y axis so 0 is at the top.
        const width = right-left
        const height = top-bottom
        const depth = far - near
        const horizontalRatio = (right + left) / width
        const verticalRatio = (top + bottom) / height
        const depthRatio = (far + near) / depth

        return [2 / (width), 0, 0, 0,
                0, 2 / (height), 0, 0,
                0, 0, -2 / (depth), 0,
                horizontalRatio, verticalRatio, depthRatio, 1];
    }

    static transpose(a) {
        return [
            a[0], a[4], a[8], a[12],
            a[1], a[5], a[9], a[13],
            a[2], a[6], a[10], a[14],
            a[3], a[7], a[11], a[15]
        ];
    }

    static inverse(a) {
        var a00 = a[0 * 4 + 0];
        var a01 = a[0 * 4 + 1];
        var a02 = a[0 * 4 + 2];
        var a03 = a[0 * 4 + 3];
        var a10 = a[1 * 4 + 0];
        var a11 = a[1 * 4 + 1];
        var a12 = a[1 * 4 + 2];
        var a13 = a[1 * 4 + 3];
        var a20 = a[2 * 4 + 0];
        var a21 = a[2 * 4 + 1];
        var a22 = a[2 * 4 + 2];
        var a23 = a[2 * 4 + 3];
        var a30 = a[3 * 4 + 0];
        var a31 = a[3 * 4 + 1];
        var a32 = a[3 * 4 + 2];
        var a33 = a[3 * 4 + 3];
        var b00 = a00 * a11 - a01 * a10;
        var b01 = a00 * a12 - a02 * a10;
        var b02 = a00 * a13 - a03 * a10;
        var b03 = a01 * a12 - a02 * a11;
        var b04 = a01 * a13 - a03 * a11;
        var b05 = a02 * a13 - a03 * a12;
        var b06 = a20 * a31 - a21 * a30;
        var b07 = a20 * a32 - a22 * a30;
        var b08 = a20 * a33 - a23 * a30;
        var b09 = a21 * a32 - a22 * a31;
        var b10 = a21 * a33 - a23 * a31;
        var b11 = a22 * a33 - a23 * a32;

        // Calculate the determinant
        var det =
        b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

        if (!det) {
        return null;
        }
        det = 1.0 / det;

        return [
            (a11 * b11 - a12 * b10 + a13 * b09) * det,
            (a02 * b10 - a01 * b11 - a03 * b09) * det,
            (a31 * b05 - a32 * b04 + a33 * b03) * det,
            (a22 * b04 - a21 * b05 - a23 * b03) * det,
            (a12 * b08 - a10 * b11 - a13 * b07) * det,
            (a00 * b11 - a02 * b08 + a03 * b07) * det,
            (a32 * b02 - a30 * b05 - a33 * b01) * det,
            (a20 * b05 - a22 * b02 + a23 * b01) * det,
            (a10 * b10 - a11 * b08 + a13 * b06) * det,
            (a01 * b08 - a00 * b10 - a03 * b06) * det,
            (a30 * b04 - a31 * b02 + a33 * b00) * det,
            (a21 * b02 - a20 * b04 - a23 * b00) * det,
            (a11 * b07 - a10 * b09 - a12 * b06) * det,
            (a00 * b09 - a01 * b07 + a02 * b06) * det,
            (a31 * b01 - a30 * b03 - a32 * b00) * det,
            (a20 * b03 - a21 * b01 + a22 * b00) * det,
        ];
    }

    static translate (tx, ty, tz) {
        return [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            tx, ty, tz, 1
        ];
    }

    // return b * a
    static multiply(a, b){
        var a00 = a[0 * 4 + 0];
        var a01 = a[0 * 4 + 1];
        var a02 = a[0 * 4 + 2];
        var a03 = a[0 * 4 + 3];
        var a10 = a[1 * 4 + 0];
        var a11 = a[1 * 4 + 1];
        var a12 = a[1 * 4 + 2];
        var a13 = a[1 * 4 + 3];
        var a20 = a[2 * 4 + 0];
        var a21 = a[2 * 4 + 1];
        var a22 = a[2 * 4 + 2];
        var a23 = a[2 * 4 + 3];
        var a30 = a[3 * 4 + 0];
        var a31 = a[3 * 4 + 1];
        var a32 = a[3 * 4 + 2];
        var a33 = a[3 * 4 + 3];
        var b00 = b[0 * 4 + 0];
        var b01 = b[0 * 4 + 1];
        var b02 = b[0 * 4 + 2];
        var b03 = b[0 * 4 + 3];
        var b10 = b[1 * 4 + 0];
        var b11 = b[1 * 4 + 1];
        var b12 = b[1 * 4 + 2];
        var b13 = b[1 * 4 + 3];
        var b20 = b[2 * 4 + 0];
        var b21 = b[2 * 4 + 1];
        var b22 = b[2 * 4 + 2];
        var b23 = b[2 * 4 + 3];
        var b30 = b[3 * 4 + 0];
        var b31 = b[3 * 4 + 1];
        var b32 = b[3 * 4 + 2];
        var b33 = b[3 * 4 + 3];

        return [
            b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30,
            b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31,
            b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32,
            b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33,
            b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30,
            b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31,
            b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32,
            b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33,
            b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30,
            b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31,
            b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32,
            b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33,
            b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,
            b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,
            b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,
            b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33,
        ];

        // implement with vec4 version
        // let res = Mat4.getEmpty();
        // for(let i = 0; i < 4; ++i){
        //     for(let j = 0; j < 4; ++j){
        //         res[i * 4 + j] = Vec4.dot(Mat4.getRow(a, i), Mat4.getColumn(b, j));
        //     }
        // }
        // return res;

    }

    static rotateX(rad) {
        var sin = Math.sin(rad);
        var cos = Math.cos(rad);
        return [
            1, 0, 0, 0,
            0, cos, sin, 0,
            0, -sin, cos, 0,
            0, 0, 0, 1
        ];
    }

    static rotateY(rad) {
        var sin = Math.sin(rad);
        var cos = Math.cos(rad);
        return [
            cos, 0, -sin, 0,
            0, 1, 0, 0,
            sin, 0, cos, 0,
            0, 0, 0, 1
        ];
    }

    static rotateZ(rad) {
        var sin = Math.sin(rad);
        var cos = Math.cos(rad);
        return [
            cos, sin, 0, 0,
            -sin, cos, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];
    }

    static scale (sx, sy, sz) {
        return [
            sx, 0, 0, 0,
            0, sy, 0, 0,
            0, 0, sz, 0,
            0, 0, 0, 1
        ];
    }

    // utils
    static getRow(matrix, row){
        // use Vec4 to get the row
        return new _Vec4_js__WEBPACK_IMPORTED_MODULE_0__["default"](matrix[row], matrix[row + 4], matrix[row + 8], matrix[row + 12]);
    }

    static getColumn(matrix, column){
        return new _Vec4_js__WEBPACK_IMPORTED_MODULE_0__["default"](matrix[column * 4], matrix[column * 4 + 1], matrix[column * 4 + 2], matrix[column * 4 + 3]);
    }
}

/***/ }),

/***/ "./src/structs/math/Vec3.js":
/*!**********************************!*\
  !*** ./src/structs/math/Vec3.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Vec3)
/* harmony export */ });
class Vec3{
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    static add(a, b){
        return new Vec3(a.x + b.x, a.y + b.y, a.z + b.z);
    }

    static dot(a, b){
        return a.x * b.x + a.y * b.y + a.z * b.z;
    }

    static cross(a, b){
        return new Vec3(a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x);
    }

    static norm(a){
        return Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z);
    }

    static normalize(a){
        let norm = Vec3.norm(a);
        return new Vec3(a.x / norm, a.y / norm, a.z / norm);
    }
    

    asArray(){  
        return [this.x, this.y, this.z];
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
/* harmony import */ var _Vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vec3.js */ "./src/structs/math/Vec3.js");


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

    static norm(a){
        return Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z + a.w * a.w);
    }

    static normalize(a){
        let norm = Vec4.norm(a);
        return new Vec4(a.x / norm, a.y / norm, a.z / norm, a.w / norm);
    }

    static asVec3(a){   
        return new _Vec3_js__WEBPACK_IMPORTED_MODULE_0__["default"](a.x, a.y, a.z);
    }

    asArray(){  
        return [this.x, this.y, this.z, this.w];
    }

}

/***/ }),

/***/ "./src/structs/math/matrices.js":
/*!**************************************!*\
  !*** ./src/structs/math/matrices.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ matrices)
/* harmony export */ });
/* ======= Transformation Matrices ======= */

class matrices{
  

  /* 1d matrix 1 x 3 */
  static normalize(array) {
    let distance = calculateEulerDistance(array);

    let result = [0, 0, 0];

    for (let j = 0; j < result.length; j++) {
      result[j] = array[j] / distance;
    }

    return result;
  }

  /* projection */
  static orthographic(left, right, bottom, top, near, far) {
    let a = right - left;
    let b = top - bottom;
    let c = far - near;
    let a2 = right + left;
    let b2 = top + bottom;
    let c2 = far + near;
  
    return [
      2 / a,
      0,
      0,
      0,
      0,
      2 / b,
      0,
      0,
      0,
      0,
      -2 / c,
      0,
      -a2 / a,
      -b2 / b,
      -c2 / c,
      1,
    ];
  }

  static oblique(theta, phi) {
    let t = degToRad(theta);
    let p = degToRad(phi);

    let cotT = -1 / Math.tan(t);
    let cotP = -1 / Math.tan(p);

    return [1, 0, 0, 0, 0, 1, 0, 0, cotT, cotP, 1, 0, 0, 0, 0, 1];
  }

  static perspective (fieldOfViewInRadians, aspect, near, far) {
    var f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewInRadians);
    var rangeInv = 1.0 / (near - far);

    return [
      f / aspect,
      0,
      0,
      0,
      0,
      f,
      0,
      0,
      0,
      0,
      (near + far) * rangeInv,
      -1,
      0,
      0,
      near * far * rangeInv * 2,
      0,
    ];
  }

  static applyTransform (transformMatrix, point) {
    // apply 4*4 matrix to 4*1 vector
    console.table(point);
    let x =
      transformMatrix[0] * point[0] +
      transformMatrix[1] * point[1] +
      transformMatrix[2] * point[2] +
      transformMatrix[3] * 1;
    let y =
      transformMatrix[4] * point[0] +
      transformMatrix[5] * point[1] +
      transformMatrix[6] * point[2] +
      transformMatrix[7] * 1;
    let z =
      transformMatrix[8] * point[0] +
      transformMatrix[9] * point[1] +
      transformMatrix[10] * point[2] +
      transformMatrix[11] * 1;

    return [x, y, z];
  }

  static lookAt (cameraPosition, target, up) {
    let zAxis = normalize(subtractVectors(cameraPosition, target));
    let xAxis = normalize(cross(up, zAxis));
    let yAxis = normalize(cross(zAxis, xAxis));
    return [
      xAxis[0],
      xAxis[1],
      xAxis[2],
      0,
      yAxis[0],
      yAxis[1],
      yAxis[2],
      0,
      zAxis[0],
      zAxis[1],
      zAxis[2],
      0,
      cameraPosition[0],
      cameraPosition[1],
      cameraPosition[2],
      1,
    ];
  }

  static makeZtoWMatrix (fudgeFactor) {
    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, fudgeFactor, 0, 0, 0, 1];
  }
};

/***/ }),

/***/ "./src/structs/model/test.js":
/*!***********************************!*\
  !*** ./src/structs/model/test.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _math_Mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/Mat4.js */ "./src/structs/math/Mat4.js");
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node.js */ "./src/structs/node.js");



const seat = new _node_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
seat.name = "seat";
seat.model = boxModel(0.2, 1.2, 0.9, [0, 0, 0]);
seat.transform = {
  translate: [0, 0, 0],
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
(seat.pickedColor = randomColors()),
  (seat.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
  });
seat.animation = {
  isAnimate: false,
  degAnimate: 0.1,
};

const rightFrontLeg = new _node_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
rightFrontLeg.name = "rightFrontLeg";
rightFrontLeg.model = boxModel(0.8, 0.15, 0.15, [0, -0.4, 0]);
rightFrontLeg.transform = {
  translate: [-0.4, -0.05, 0.3],
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
(rightFrontLeg.pickedColor = randomColors()),
  (rightFrontLeg.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
  });
rightFrontLeg.animation = {
  isAnimate: false,
  degAnimate: 0.1,
  animate: [
    { rotate: [0.3, 0, 0], translate: [-0.4, -0.05, 0.3], scale: [1, 1, 1] },
    { rotate: [-0.8, 0, 0], translate: [-0.4, -0.05, 0.3], scale: [1, 1, 1] },
  ]
};

const rightRearLeg = new _node_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
rightRearLeg.name = "rightRearLeg";
rightRearLeg.model = boxModel(0.8, 0.15, 0.15, [0, -0.4, 0]);
rightRearLeg.transform = {
  translate: [-0.4, -0.05, -0.3],
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
(rightRearLeg.pickedColor = randomColors()),
  (rightRearLeg.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
  });
rightRearLeg.animation = {
  isAnimate: false,
  degAnimate: 0.1,
  animate: [
    { rotate: [0.3, 0, 0], translate: [-0.4, -0.05, -0.3], scale: [1, 1, 1] },
    { rotate: [-0.8, 0, 0], translate: [-0.4, -0.05, -0.3], scale: [1, 1, 1] },
  ]
};

const leftRearLeg = new _node_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
leftRearLeg.name = "leftRearLeg";
leftRearLeg.model = boxModel(0.8, 0.15, 0.15, [0, -0.4, 0]);
leftRearLeg.transform = {
  translate: [0.4, -0.05, -0.3],
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
(leftRearLeg.pickedColor = randomColors()),
  (leftRearLeg.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
  });
leftRearLeg.animation = {
  isAnimate: false,
  degAnimate: 0.1,
  animate: [
    { rotate: [-0.3, 0, 0], translate: [0.4, -0.05, -0.3], scale: [1, 1, 1] },
    { rotate: [0.9, 0, 0], translate: [0.4, -0.05, -0.3], scale: [1, 1, 1] },
  ]
};

const rightStile = new _node_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
rightStile.name = "rightStile";
rightStile.model = boxModel(0.2, 0.12, 0.12, [0, -0.1, 0]);
rightStile.transform = {
  translate: [-0.15, 0, 0],
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
(rightStile.pickedColor = randomColors()),
  (rightStile.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
  });
rightStile.animation = {
  isAnimate: false,
  degAnimate: 0.1,
};

const leftStile = new _node_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
leftStile.name = "leftStile";
leftStile.model = boxModel(0.2, 0.12, 0.12, [0, -0.1, 0]);
leftStile.transform = {
  translate: [0.15, 0, 0],
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
(leftStile.pickedColor = randomColors()),
  (leftStile.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
  });
leftStile.animation = {
  isAnimate: false,
  degAnimate: 0.1,
};

const back = new _node_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
back.name = "back";
back.model = boxModel(0.7, 1.2, 0.15, [0, 0.35, 0]);
back.transform = {
  translate: [0, 0.3, -0.35],
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
(back.pickedColor = randomColors()),
  (back.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
  });
back.animation = {
  isAnimate: false,
  degAnimate: 0.1,
};

const leftEye = new _node_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
leftEye.name = "leftEye";
leftEye.model = boxModel(0.12, 0.05, 0.01, [0, 0, 0]);
leftEye.transform = {
  translate: [0.3, 0.4, 0.1],
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
(leftEye.pickedColor = randomColors()),
  (leftEye.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
  });
leftEye.animation = {
  isAnimate: false,
  degAnimate: 0.1,
};

const rightEye = new _node_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
rightEye.name = "rightEye";
rightEye.model = boxModel(0.12, 0.05, 0.01, [0, 0, 0]);
rightEye.transform = {
  translate: [-0.3, 0.4, 0.1],
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
(rightEye.pickedColor = randomColors()),
  (rightEye.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
  });
rightEye.animation = {
  isAnimate: false,
  degAnimate: 0.1,
};

rightFrontLeg.setParent(seat);
rightRearLeg.setParent(seat);
leftRearLeg.setParent(seat);
rightStile.setParent(back);
leftStile.setParent(back);
back.setParent(seat);
leftEye.setParent(back);
rightEye.setParent(back);




var endModel = [
  seat
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endModel);


/***/ }),

/***/ "./src/structs/node.js":
/*!*****************************!*\
  !*** ./src/structs/node.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Node)
/* harmony export */ });
/* harmony import */ var _math_Mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math/Mat4.js */ "./src/structs/math/Mat4.js");
// const { default: Mat4 } = require("./structs/math/Mat4");


class Node {
    constructor() {
        this.children = [];
        this.localMatrix = _math_Mat4_js__WEBPACK_IMPORTED_MODULE_0__["default"].getIdentity();
        this.worldMatrix = _math_Mat4_js__WEBPACK_IMPORTED_MODULE_0__["default"].getIdentity();
        this.worldInverseMatrix = _math_Mat4_js__WEBPACK_IMPORTED_MODULE_0__["default"].getIdentity();
    }

    getWorldMatrix() {
        return this.worldMatrix;
    }
  
    setParent(parent) {
        // already have parent
        if (this.parent) {
            const index = this.parent.children.indexOf(this);
            if (index >= 0) {
                this.parent.children.splice(index, 1);
            }
        }
    
    if (parent) {
            parent.children.push(this);
        }
        this.parent = parent.name;
        }
  
    setWorldMtx(matrix) {
      if (matrix !== null) {
        this.worldMatrix = _math_Mat4_js__WEBPACK_IMPORTED_MODULE_0__["default"].multiply(matrix, this.localMatrix);
      } else {
        this.worldMatrix = this.localMatrix;
      }
  
      const worldMatrix = this.worldMatrix;
      this.worldInverseMatrix = _math_Mat4_js__WEBPACK_IMPORTED_MODULE_0__["default"].transpose(
        _math_Mat4_js__WEBPACK_IMPORTED_MODULE_0__["default"].inverse(this.worldMatrix)
      );
      this.children.forEach(child => {
        child.setWorldMtx(worldMatrix);
      });
    }
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
/* harmony import */ var _structs_model_test_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./structs/model/test.js */ "./src/structs/model/test.js");
/* harmony import */ var _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./structs/math/Mat4.js */ "./src/structs/math/Mat4.js");
/* harmony import */ var _structs_math_matrices_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./structs/math/matrices.js */ "./src/structs/math/matrices.js");
/* harmony import */ var _handler_handler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handler/handler.js */ "./src/handler/handler.js");






const canvas = document.getElementById("gl-canvas");
const gl = canvas.getContext("webgl");


const vertexShaderSource = document.getElementById("vertex-shader-3d")?.textContent;
const fragmentShaderSource = document.getElementById("fragment-shader-3d")?.textContent;

// state
var objects;
var target;
var lighting;
var lightDirection;
var texture;
var projection;
var factor;
var theta;
var phi;
var normalizeLight;
var worldViewProjectionMatrix;
// console.log(defaultObjects);

initState();

function initState() {
    objects = _structs_model_test_js__WEBPACK_IMPORTED_MODULE_0__["default"];
    focus = null;
    lighting = false;
    lightDirection = [0, 0, 1];
    texture = "none";
    projection = "orthographic";
    factor = 0.0;
    theta = 90.0;
    phi = 90.0;
    setDefaultRotation(objects)
    // initAnimation(objects);
    // showComponents(objects);

}

window.onload = () => {
    if(!gl){
        throw new Error("WebGL not supported");
    }
    target = objects[0];


    render();
}

function setDefaultState(objects) {
    objects.forEach(object => {
        if (!object.model.colors) {
            if (!object.pickedColor) {
                object.model.colors = generateColors(object.model.vertices);
            } else {
                object.model.colors = generateColors(
                    object.model.vertices,
                    object.pickedColor
                );
            }
        }
      
        if (!object.program && !lighting) {
            object.program = createShaderProgram(
                gl,
                vertexShaderSource,
                fragmentShaderSource
            );
        }
      
        //   if (object.animation.isObjectAnimate && object.animation.animate) {
        //     object.transform = object.animation.animate[counter % fps];
        //   }
      
          // object.transform = object.animation.animate[counter % fps];
        object.localMatrix = setTransform(object);
        if (object.children.length > 0) {
            setDefaultState(object.children);
        }
    })
}

function setTransform(object) {
    /* Setup transform matrix */
    // console.log(object)

    var transformMatrix = _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["default"].translate(
      object.transform.translate[0],
      object.transform.translate[1],
      object.transform.translate[2]
    );
    



    transformMatrix = _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["default"].multiply(
      transformMatrix,
      _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["default"].rotateX(object.transform.rotate[0])
    );
  
    transformMatrix = _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["default"].multiply(
      transformMatrix,
      _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["default"].rotateY(object.transform.rotate[1])
    );
  
    transformMatrix = _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["default"].multiply(
      transformMatrix,
      _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["default"].rotateZ(object.transform.rotate[2])
    );
  
    transformMatrix = _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["default"].multiply(
      transformMatrix,
      _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["default"].scale(
        object.transform.scale[0],
        object.transform.scale[1],
        object.transform.scale[2]
      )
    );
  
    return transformMatrix;
  }

function setDefaultRotation(objects) {
    objects.forEach(object => {
        object.transform.rotate = object.transform.rotate.map((val) => degToRad(val));
        if (object.children.length > 0) {
            setDefaultRotation(object.children);
        }
    });

}

function renderLoop(objects) {
    objects.forEach(object => {
        gl.useProgram(object.program);
        var modelMatrix = object.getWorldMatrix();

        object.worldMatrix = setProjectionMatrix(object.worldMatrix, object)


        var a_position = new Float32Array(object.model.vertices.flat(1));
        var a_normal = new Float32Array(object.model.normals.flat(1));
        var a_color = new Float32Array(object.model.colors.flat(1));
        var a_texture = new Float32Array(object.model.texCoord);
        var a_tangent = new Float32Array(object.model.tangents.flat(1));
        var a_bitangent = new Float32Array(object.model.bitangents.flat(1));

        setAttr(gl, object.program, a_position, a_normal, a_color, a_texture, a_tangent, a_bitangent);
        var uniforms = {
            uWorldViewProjection: object.worldMatrix,
            uWorldInverseTranspose: object.worldInverseMatrix,
            uReverseLightDirection: normalizeLight,
            uColor: object.pickedColor.concat(1.0),
            uModelMatrix: modelMatrix,
        }

        setUniforms(gl, object.program, uniforms);

        gl.drawArrays(gl.TRIANGLES, 0, object.model.vertices.length);
        if (object.children.length > 0) {
            renderLoop(object.children);
        }
    });
}

window.requestAnimFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 1);
      }
    );
  })();

function render() {
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.enable(gl.CULL_FACE);
    gl.enable(gl.DEPTH_TEST);

    setDefaultState(objects);
    (0,_handler_handler_js__WEBPACK_IMPORTED_MODULE_3__["default"])(target);


    objects[0].setWorldMtx(null);
    normalizeLight = _structs_math_matrices_js__WEBPACK_IMPORTED_MODULE_2__["default"].normalize(lightDirection);
    renderLoop(objects);
    
  window.requestAnimFrame(render);
    
}

function setCamera(object) {
    /* Setup view matrix */
    var viewMatrix = _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["default"].multiply(
      _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["default"].rotateY(object.viewMatrix.camera[1]),
      _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["default"].rotateX(object.viewMatrix.camera[0])
    );
  
    // handle radius
    viewMatrix = _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["default"].multiply(
      viewMatrix,
      _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["default"].translate(0, 0, object.viewMatrix.camera[2])
    );
  
    let camPos = [viewMatrix[12], viewMatrix[13], viewMatrix[14]];
  
    let cameraMatrix = _structs_math_matrices_js__WEBPACK_IMPORTED_MODULE_2__["default"].lookAt(
      camPos,
      object.viewMatrix.lookAt,
      object.viewMatrix.up
    );
  
    return cameraMatrix;
  }

  function setProjection () {
    
    const aspect = canvas.width / canvas.height;
    const fovy = degToRad(45);
    const left = -2;
    const right = 2;
    const bottom = -2;
    const top = 2;
    let farOrtho = objects[0].viewMatrix.far * 1;
    let nearOrtho = -farOrtho;


  
    if (projection === "orthographic") {
    //   return matrices.orthographic(left, right, bottom, top, nearOrtho, farOrtho);
    return _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["default"].projectionOrtographic(left, right, bottom, top, nearOrtho, farOrtho)
    // return matrices.orthographic(left, right, bottom, top, nearOrtho, farOrtho);
    } else if (projection === "oblique") {
      return _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["default"].multiply(
        _structs_math_matrices_js__WEBPACK_IMPORTED_MODULE_2__["default"].oblique(theta, phi),
        _structs_math_matrices_js__WEBPACK_IMPORTED_MODULE_2__["default"].orthographic(left, right, bottom, top, nearOrtho, farOrtho)
      );
    } else if (projection === "perspective") {
      return _structs_math_matrices_js__WEBPACK_IMPORTED_MODULE_2__["default"].perspective(
        fovy,
        aspect,
        objects[0].viewMatrix.near,
        objects[0].viewMatrix.far
      );
    }
  }

function setProjectionMatrix(matrix, object) {
    const camera = setCamera(object);
    const projectionView = setProjection();
    const view = _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["default"].inverse(camera);
    var viewProjectionMatrix = _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["default"].multiply(projectionView, view);
    if (factor < 0.1) {
        factor = 0.1;
    }

    if (projection === "perspective") {
        viewProjectionMatrix = _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["default"].multiply(
            _structs_math_matrices_js__WEBPACK_IMPORTED_MODULE_2__["default"].makeZtoWMatrix(factor),
            viewProjectionMatrix,
        );
    }

    worldViewProjectionMatrix = _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["default"].multiply(viewProjectionMatrix, matrix);

    return worldViewProjectionMatrix;
}




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVKNkI7QUFDZDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsT0FBTztBQUNqQyw4QkFBOEIsT0FBTztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnREFBSTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0RBQUk7QUFDdkI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuUWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0I2QjtBQUM3QjtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdEQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEltQztBQUNMO0FBQzlCO0FBQ0EsaUJBQWlCLGdEQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnREFBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxzRUFBc0U7QUFDNUUsTUFBTSx1RUFBdUU7QUFDN0U7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdEQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHVFQUF1RTtBQUM3RSxNQUFNLHdFQUF3RTtBQUM5RTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0RBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sdUVBQXVFO0FBQzdFLE1BQU0sc0VBQXNFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnREFBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0RBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdEQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnREFBSTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0RBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1TnhCLFdBQVcsZ0JBQWdCO0FBQ087QUFDbEM7QUFDZTtBQUNmO0FBQ0E7QUFDQSwyQkFBMkIscURBQUk7QUFDL0IsMkJBQTJCLHFEQUFJO0FBQy9CLGtDQUFrQyxxREFBSTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFEQUFJO0FBQy9CLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxREFBSTtBQUNwQyxRQUFRLHFEQUFJO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7Ozs7O1VDOUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOK0M7QUFDTDtBQUNRO0FBQ1A7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsOERBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZEQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkRBQUk7QUFDMUI7QUFDQSxNQUFNLDZEQUFJO0FBQ1Y7QUFDQTtBQUNBLHNCQUFzQiw2REFBSTtBQUMxQjtBQUNBLE1BQU0sNkRBQUk7QUFDVjtBQUNBO0FBQ0Esc0JBQXNCLDZEQUFJO0FBQzFCO0FBQ0EsTUFBTSw2REFBSTtBQUNWO0FBQ0E7QUFDQSxzQkFBc0IsNkRBQUk7QUFDMUI7QUFDQSxNQUFNLDZEQUFJO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0RBQU87QUFDWDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUVBQVE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2REFBSTtBQUN6QixNQUFNLDZEQUFJO0FBQ1YsTUFBTSw2REFBSTtBQUNWO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2REFBSTtBQUNyQjtBQUNBLE1BQU0sNkRBQUk7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpRUFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw2REFBSTtBQUNmO0FBQ0EsTUFBTTtBQUNOLGFBQWEsNkRBQUk7QUFDakIsUUFBUSxpRUFBUTtBQUNoQixRQUFRLGlFQUFRO0FBQ2hCO0FBQ0EsTUFBTTtBQUNOLGFBQWEsaUVBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2REFBSTtBQUNyQiwrQkFBK0IsNkRBQUk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw2REFBSTtBQUNuQyxZQUFZLGlFQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDZEQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL2hhbmRsZXIvaGFuZGxlci5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21hdGgvTWF0NC5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21hdGgvVmVjMy5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21hdGgvVmVjNC5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21hdGgvbWF0cmljZXMuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tb2RlbC90ZXN0LmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3N0cnVjdHMvbm9kZS5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBtYWtlIGhhbmRsZXIgb2JqZWN0XHJcblxyXG4vLyB0cmFuc2xhdGlvblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcih0YXJnZXQpIHtcclxuICAgIGNvbnN0IHRyYW5zbGF0aW9uWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2xhdGlvbi14LXNsaWRlcicpO1xyXG4gICAgY29uc3QgdHJhbnNsYXRpb25ZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zbGF0aW9uLXktc2xpZGVyJyk7XHJcbiAgICBjb25zdCB0cmFuc2xhdGlvblogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNsYXRpb24tei1zbGlkZXInKTtcclxuICAgIGNvbnN0IHRyYW5zbGF0YWlvblhWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2xhdGlvbi14LXNsaWRlci12YWx1ZScpO1xyXG4gICAgY29uc3QgdHJhbnNsYXRhaW9uWVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zbGF0aW9uLXktc2xpZGVyLXZhbHVlJyk7XHJcbiAgICBjb25zdCB0cmFuc2xhdGFpb25aVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNsYXRpb24tei1zbGlkZXItdmFsdWUnKTtcclxuXHJcbiAgICAvL3JvdGF0aW9uXHJcbiAgICBjb25zdCByb3RhdGlvblggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm90YXRpb24teC1zbGlkZXInKTtcclxuICAgIGNvbnN0IHJvdGF0aW9uWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGlvbi15LXNsaWRlcicpO1xyXG4gICAgY29uc3Qgcm90YXRpb25aID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uLXotc2xpZGVyJyk7XHJcbiAgICBjb25zdCByb3RhdGlvblhWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGlvbi14LXNsaWRlci12YWx1ZScpO1xyXG4gICAgY29uc3Qgcm90YXRpb25ZVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm90YXRpb24teS1zbGlkZXItdmFsdWUnKTtcclxuICAgIGNvbnN0IHJvdGF0aW9uWlZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uLXotc2xpZGVyLXZhbHVlJyk7XHJcblxyXG4gICAgLy9zY2FsYXRpb25cclxuICAgIGNvbnN0IHNjYWxhdGlvblggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NhbGF0aW9uLXgtc2xpZGVyJyk7XHJcbiAgICBjb25zdCBzY2FsYXRpb25ZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjYWxhdGlvbi15LXNsaWRlcicpO1xyXG4gICAgY29uc3Qgc2NhbGF0aW9uWiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY2FsYXRpb24tei1zbGlkZXInKTtcclxuICAgIGNvbnN0IHNjYWxhdGlvblhWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY2FsYXRpb24teC1zbGlkZXItdmFsdWUnKTtcclxuICAgIGNvbnN0IHNjYWxhdGlvbllWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY2FsYXRpb24teS1zbGlkZXItdmFsdWUnKTtcclxuICAgIGNvbnN0IHNjYWxhdGlvblpWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY2FsYXRpb24tei1zbGlkZXItdmFsdWUnKTtcclxuXHJcbiAgICAvL2NhbWVyYVxyXG4gICAgY29uc3Qgb3J0aG9ncmFwaGljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29ydGhvZ3JhcGhpYycpO1xyXG4gICAgY29uc3Qgb2JsaXF1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvYmxpcXVlJyk7XHJcbiAgICBjb25zdCBwZXJzcGVjdGl2ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZXJzcGVjdGl2ZScpO1xyXG5cclxuICAgIC8vIGNhbWVyYSByYWRpdXNcclxuICAgIGNvbnN0IGNhbWVyYVJhZGl1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcmFkaXVzLXNsaWRlcicpO1xyXG4gICAgLy8gY2FtZXJhIHJvbGwtcGl0Y2hcclxuICAgIGNvbnN0IGNhbWVyYVJvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXJvbGwtc2xpZGVyJyk7XHJcbiAgICBjb25zdCBjYW1lcmFQaXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcGl0Y2gtc2xpZGVyJyk7XHJcblxyXG4gICAgLy8gc2V0IG9ydGhvZ3JhcGhpYyBhcyBkZWZhdWx0IGlucHV0IHJhZGlvIGJ1dHRvblxyXG4gICAgb3J0aG9ncmFwaGljLmNoZWNrZWQgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAvLyBldmVudCBsaXN0ZW5lclxyXG4gICAgdHJhbnNsYXRpb25YLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgICAgICB0YXJnZXQudHJhbnNmb3JtLnRyYW5zbGF0ZVswXSA9ICgyICogdHJhbnNsYXRpb25YLnZhbHVlKSAvIDEwMDtcclxuICAgICAgICB0cmFuc2xhdGFpb25YVmFsdWUudGV4dENvbnRlbnQgPSB0YXJnZXQudHJhbnNmb3JtLnRyYW5zbGF0ZVswXTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRyYW5zbGF0aW9uWS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGFyZ2V0LnRyYW5zZm9ybS50cmFuc2xhdGVbMV0gPSAoMiAqIHRyYW5zbGF0aW9uWS52YWx1ZSkgLyAxMDA7XHJcbiAgICAgICAgdHJhbnNsYXRhaW9uWVZhbHVlLnRleHRDb250ZW50ID0gdGFyZ2V0LnRyYW5zZm9ybS50cmFuc2xhdGVbMV07XHJcbiAgICB9KTtcclxuXHJcbiAgICB0cmFuc2xhdGlvblouYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRhcmdldC50cmFuc2Zvcm0udHJhbnNsYXRlWzJdID0gKDIgKiB0cmFuc2xhdGlvbloudmFsdWUpIC8gMTAwO1xyXG4gICAgICAgIHRyYW5zbGF0YWlvblpWYWx1ZS50ZXh0Q29udGVudCA9IHRhcmdldC50cmFuc2Zvcm0udHJhbnNsYXRlWzJdO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcm90YXRpb25YLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgICAgICB0YXJnZXQudHJhbnNmb3JtLnJvdGF0ZVswXSA9ICgyICogcm90YXRpb25YLnZhbHVlKSAvIDEwMDtcclxuICAgICAgICByb3RhdGlvblhWYWx1ZS50ZXh0Q29udGVudCA9IHRhcmdldC50cmFuc2Zvcm0ucm90YXRlWzBdO1xyXG4gICAgfSlcclxuXHJcbiAgICByb3RhdGlvblkuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRhcmdldC50cmFuc2Zvcm0ucm90YXRlWzFdID0gKDIgKiByb3RhdGlvblkudmFsdWUpIC8gMTAwO1xyXG4gICAgICAgIHJvdGF0aW9uWVZhbHVlLnRleHRDb250ZW50ID0gdGFyZ2V0LnRyYW5zZm9ybS5yb3RhdGVbMV07XHJcbiAgICB9KVxyXG5cclxuICAgIHJvdGF0aW9uWi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGFyZ2V0LnRyYW5zZm9ybS5yb3RhdGVbMl0gPSAoMiAqIHJvdGF0aW9uWi52YWx1ZSkgLyAxMDA7XHJcbiAgICAgICAgcm90YXRpb25aVmFsdWUudGV4dENvbnRlbnQgPSB0YXJnZXQudHJhbnNmb3JtLnJvdGF0ZVsyXTtcclxuICAgIH0pXHJcblxyXG4gICAgc2NhbGF0aW9uWC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVswXSA9ICBzY2FsYXRpb25YLnZhbHVlIC8gMjA7XHJcbiAgICAgICAgc2NhbGF0aW9uWFZhbHVlLnRleHRDb250ZW50ID0gdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVswXTtcclxuICAgIH0pXHJcblxyXG4gICAgc2NhbGF0aW9uWS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVsxXSA9ICBzY2FsYXRpb25ZLnZhbHVlIC8gMjA7XHJcbiAgICAgICAgc2NhbGF0aW9uWVZhbHVlLnRleHRDb250ZW50ID0gdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVsxXTtcclxuICAgIH0pXHJcblxyXG4gICAgc2NhbGF0aW9uWi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVsyXSA9ICBzY2FsYXRpb25aLnZhbHVlIC8gMjA7XHJcbiAgICAgICAgc2NhbGF0aW9uWlZhbHVlLnRleHRDb250ZW50ID0gdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVsyXTtcclxuICAgIH0pXHJcblxyXG4gICAgLy8gY2FtZXJhXHJcbiAgICBvcnRob2dyYXBoaWMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHByb2plY3Rpb24gPSAnb3J0aG9ncmFwaGljJztcclxuICAgIH0pXHJcblxyXG4gICAgb2JsaXF1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcHJvamVjdGlvbiA9ICdvYmxpcXVlJztcclxuICAgIH0pXHJcblxyXG4gICAgcGVyc3BlY3RpdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHByb2plY3Rpb24gPSAncGVyc3BlY3RpdmUnO1xyXG4gICAgfSlcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDYW1lcmFWaWV3KG5vZGUpIHtcclxuICAgICAgICBsZXQgZXBzaWxvbiA9IDAuMDAwMDE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9yYWRpdXMsIHJvbGwsIHBpdGNoXHJcbiAgICAgICAgbGV0IHJhZGl1cyA9IHBhcnNlRmxvYXQoY2FtZXJhUmFkaXVzLnZhbHVlKS8xMDtcclxuICAgICAgICBsZXQgcm9sbCA9IGRlZ1RvUmFkKHBhcnNlRmxvYXQoY2FtZXJhUm9sbC52YWx1ZSkpO1xyXG4gICAgICAgIGxldCBwaXRjaCA9IGRlZ1RvUmFkKHBhcnNlRmxvYXQoY2FtZXJhUGl0Y2gudmFsdWUpKTtcclxuXHJcblxyXG4gICAgbm9kZS52aWV3TWF0cml4LmNhbWVyYSA9IFtcclxuICAgICAgICByb2xsLFxyXG4gICAgICAgIHBpdGNoLFxyXG4gICAgICAgIHJhZGl1cyA9PSAwID8gZXBzaWxvbiA6IHJhZGl1cywgIFxyXG4gICAgXTtcclxuICAgIGZvcihsZXQgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbil7XHJcbiAgICAgICAgaGFuZGxlQ2FtZXJhVmlldyhjaGlsZCk7XHJcbiAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FtZXJhUmFkaXVzLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyBnZXQgY2FtZXJhIHJhZGl1c1xyXG4gICAgICAgIC8vIHRhcmdldCBpcyBhIHJvb3QgTm9kZSwgcmVjdXJzZSB0byBzZXQgY2FtZXJhIHJhZGl1c1xyXG4gICAgICAgIGxldCBlcHNpbG9uID0gMC4wMDAxO1xyXG5cclxuICAgICAgICBsZXQgdmFsID0gcGFyc2VGbG9hdChjYW1lcmFSYWRpdXMudmFsdWUpO1xyXG4gICAgICAgIHZhbCAvPSAxMDtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaGFuZGxlQ2FtZXJhVmlldyh0YXJnZXQpO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgY2FtZXJhIHJhZGl1cyB2YWx1ZVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcmFkaXVzLXNsaWRlci12YWx1ZScpLnRleHRDb250ZW50ID0gdmFsO1xyXG4gICAgfSlcclxuXHJcbiAgICBjYW1lcmFSb2xsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgICAgICBcclxuICAgICAgICBoYW5kbGVDYW1lcmFWaWV3KHRhcmdldClcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1yb2xsLXNsaWRlci12YWx1ZScpLnRleHRDb250ZW50ID0gY2FtZXJhUm9sbC52YWx1ZTtcclxuICAgIH0pXHJcblxyXG4gICAgY2FtZXJhUGl0Y2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgXHJcblxyXG5cclxuXHJcbiAgICAgICAgaGFuZGxlQ2FtZXJhVmlldyh0YXJnZXQpXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1waXRjaC1zbGlkZXItdmFsdWUnKS50ZXh0Q29udGVudCA9IGNhbWVyYVBpdGNoLnZhbHVlO1xyXG4gICAgfSlcclxuXHJcblxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IFZlYzQgZnJvbSBcIi4vVmVjNC5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXQ0e1xyXG4gICAgc3RhdGljIGdldEVtcHR5KCl7XHJcbiAgICAgICAgcmV0dXJuIFswLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAwXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRJZGVudGl0eSgpe1xyXG4gICAgICAgIHJldHVybiBbMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMV07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBnZXRUcmFuc2xhdGlvbih4LCB5LCB6KXtcclxuICAgICAgICByZXR1cm4gWzEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgICAgIHgsIHksIHosIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRTY2FsZSh4LCB5LCB6KXtcclxuICAgICAgICByZXR1cm4gW3gsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCB5LCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgeiwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRSb3RhdGlvblgodGhldGEpe1xyXG4gICAgICAgIHJldHVybiBbMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIE1hdGguY29zKHRoZXRhKSwgLU1hdGguc2luKHRoZXRhKSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIE1hdGguc2luKHRoZXRhKSwgTWF0aC5jb3ModGhldGEpLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMV07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFJvdGF0aW9uWSh0aGV0YSl7XHJcbiAgICAgICAgcmV0dXJuIFtNYXRoLmNvcyh0aGV0YSksIDAsIE1hdGguc2luKHRoZXRhKSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAtTWF0aC5zaW4odGhldGEpLCAwLCBNYXRoLmNvcyh0aGV0YSksIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAxXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Um90YXRpb25aKHRoZXRhKXtcclxuICAgICAgICByZXR1cm4gW01hdGguY29zKHRoZXRhKSwgLU1hdGguc2luKHRoZXRhKSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIE1hdGguc2luKHRoZXRhKSwgTWF0aC5jb3ModGhldGEpLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDFdO1xyXG4gICAgfSAgIFxyXG4gICAgc3RhdGljIHByb2plY3Rpb25PcnRvZ3JhcGhpYyhsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikge1xyXG4gICAgICAgIC8vIE5vdGU6IFRoaXMgbWF0cml4IGZsaXBzIHRoZSBZIGF4aXMgc28gMCBpcyBhdCB0aGUgdG9wLlxyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gcmlnaHQtbGVmdFxyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRvcC1ib3R0b21cclxuICAgICAgICBjb25zdCBkZXB0aCA9IGZhciAtIG5lYXJcclxuICAgICAgICBjb25zdCBob3Jpem9udGFsUmF0aW8gPSAocmlnaHQgKyBsZWZ0KSAvIHdpZHRoXHJcbiAgICAgICAgY29uc3QgdmVydGljYWxSYXRpbyA9ICh0b3AgKyBib3R0b20pIC8gaGVpZ2h0XHJcbiAgICAgICAgY29uc3QgZGVwdGhSYXRpbyA9IChmYXIgKyBuZWFyKSAvIGRlcHRoXHJcblxyXG4gICAgICAgIHJldHVybiBbMiAvICh3aWR0aCksIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAyIC8gKGhlaWdodCksIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAtMiAvIChkZXB0aCksIDAsXHJcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsUmF0aW8sIHZlcnRpY2FsUmF0aW8sIGRlcHRoUmF0aW8sIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0cmFuc3Bvc2UoYSkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIGFbMF0sIGFbNF0sIGFbOF0sIGFbMTJdLFxyXG4gICAgICAgICAgICBhWzFdLCBhWzVdLCBhWzldLCBhWzEzXSxcclxuICAgICAgICAgICAgYVsyXSwgYVs2XSwgYVsxMF0sIGFbMTRdLFxyXG4gICAgICAgICAgICBhWzNdLCBhWzddLCBhWzExXSwgYVsxNV1cclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpbnZlcnNlKGEpIHtcclxuICAgICAgICB2YXIgYTAwID0gYVswICogNCArIDBdO1xyXG4gICAgICAgIHZhciBhMDEgPSBhWzAgKiA0ICsgMV07XHJcbiAgICAgICAgdmFyIGEwMiA9IGFbMCAqIDQgKyAyXTtcclxuICAgICAgICB2YXIgYTAzID0gYVswICogNCArIDNdO1xyXG4gICAgICAgIHZhciBhMTAgPSBhWzEgKiA0ICsgMF07XHJcbiAgICAgICAgdmFyIGExMSA9IGFbMSAqIDQgKyAxXTtcclxuICAgICAgICB2YXIgYTEyID0gYVsxICogNCArIDJdO1xyXG4gICAgICAgIHZhciBhMTMgPSBhWzEgKiA0ICsgM107XHJcbiAgICAgICAgdmFyIGEyMCA9IGFbMiAqIDQgKyAwXTtcclxuICAgICAgICB2YXIgYTIxID0gYVsyICogNCArIDFdO1xyXG4gICAgICAgIHZhciBhMjIgPSBhWzIgKiA0ICsgMl07XHJcbiAgICAgICAgdmFyIGEyMyA9IGFbMiAqIDQgKyAzXTtcclxuICAgICAgICB2YXIgYTMwID0gYVszICogNCArIDBdO1xyXG4gICAgICAgIHZhciBhMzEgPSBhWzMgKiA0ICsgMV07XHJcbiAgICAgICAgdmFyIGEzMiA9IGFbMyAqIDQgKyAyXTtcclxuICAgICAgICB2YXIgYTMzID0gYVszICogNCArIDNdO1xyXG4gICAgICAgIHZhciBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTA7XHJcbiAgICAgICAgdmFyIGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMDtcclxuICAgICAgICB2YXIgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwO1xyXG4gICAgICAgIHZhciBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTE7XHJcbiAgICAgICAgdmFyIGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMTtcclxuICAgICAgICB2YXIgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyO1xyXG4gICAgICAgIHZhciBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzA7XHJcbiAgICAgICAgdmFyIGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMDtcclxuICAgICAgICB2YXIgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwO1xyXG4gICAgICAgIHZhciBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzE7XHJcbiAgICAgICAgdmFyIGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMTtcclxuICAgICAgICB2YXIgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyO1xyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XHJcbiAgICAgICAgdmFyIGRldCA9XHJcbiAgICAgICAgYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xyXG5cclxuICAgICAgICBpZiAoIWRldCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZXQgPSAxLjAgLyBkZXQ7XHJcblxyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIChhMTEgKiBiMTEgLSBhMTIgKiBiMTAgKyBhMTMgKiBiMDkpICogZGV0LFxyXG4gICAgICAgICAgICAoYTAyICogYjEwIC0gYTAxICogYjExIC0gYTAzICogYjA5KSAqIGRldCxcclxuICAgICAgICAgICAgKGEzMSAqIGIwNSAtIGEzMiAqIGIwNCArIGEzMyAqIGIwMykgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMjIgKiBiMDQgLSBhMjEgKiBiMDUgLSBhMjMgKiBiMDMpICogZGV0LFxyXG4gICAgICAgICAgICAoYTEyICogYjA4IC0gYTEwICogYjExIC0gYTEzICogYjA3KSAqIGRldCxcclxuICAgICAgICAgICAgKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMzIgKiBiMDIgLSBhMzAgKiBiMDUgLSBhMzMgKiBiMDEpICogZGV0LFxyXG4gICAgICAgICAgICAoYTIwICogYjA1IC0gYTIyICogYjAyICsgYTIzICogYjAxKSAqIGRldCxcclxuICAgICAgICAgICAgKGExMCAqIGIxMCAtIGExMSAqIGIwOCArIGExMyAqIGIwNikgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMDEgKiBiMDggLSBhMDAgKiBiMTAgLSBhMDMgKiBiMDYpICogZGV0LFxyXG4gICAgICAgICAgICAoYTMwICogYjA0IC0gYTMxICogYjAyICsgYTMzICogYjAwKSAqIGRldCxcclxuICAgICAgICAgICAgKGEyMSAqIGIwMiAtIGEyMCAqIGIwNCAtIGEyMyAqIGIwMCkgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMTEgKiBiMDcgLSBhMTAgKiBiMDkgLSBhMTIgKiBiMDYpICogZGV0LFxyXG4gICAgICAgICAgICAoYTAwICogYjA5IC0gYTAxICogYjA3ICsgYTAyICogYjA2KSAqIGRldCxcclxuICAgICAgICAgICAgKGEzMSAqIGIwMSAtIGEzMCAqIGIwMyAtIGEzMiAqIGIwMCkgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMjAgKiBiMDMgLSBhMjEgKiBiMDEgKyBhMjIgKiBiMDApICogZGV0LFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRyYW5zbGF0ZSAodHgsIHR5LCB0eikge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIDEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgIHR4LCB0eSwgdHosIDFcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybiBiICogYVxyXG4gICAgc3RhdGljIG11bHRpcGx5KGEsIGIpe1xyXG4gICAgICAgIHZhciBhMDAgPSBhWzAgKiA0ICsgMF07XHJcbiAgICAgICAgdmFyIGEwMSA9IGFbMCAqIDQgKyAxXTtcclxuICAgICAgICB2YXIgYTAyID0gYVswICogNCArIDJdO1xyXG4gICAgICAgIHZhciBhMDMgPSBhWzAgKiA0ICsgM107XHJcbiAgICAgICAgdmFyIGExMCA9IGFbMSAqIDQgKyAwXTtcclxuICAgICAgICB2YXIgYTExID0gYVsxICogNCArIDFdO1xyXG4gICAgICAgIHZhciBhMTIgPSBhWzEgKiA0ICsgMl07XHJcbiAgICAgICAgdmFyIGExMyA9IGFbMSAqIDQgKyAzXTtcclxuICAgICAgICB2YXIgYTIwID0gYVsyICogNCArIDBdO1xyXG4gICAgICAgIHZhciBhMjEgPSBhWzIgKiA0ICsgMV07XHJcbiAgICAgICAgdmFyIGEyMiA9IGFbMiAqIDQgKyAyXTtcclxuICAgICAgICB2YXIgYTIzID0gYVsyICogNCArIDNdO1xyXG4gICAgICAgIHZhciBhMzAgPSBhWzMgKiA0ICsgMF07XHJcbiAgICAgICAgdmFyIGEzMSA9IGFbMyAqIDQgKyAxXTtcclxuICAgICAgICB2YXIgYTMyID0gYVszICogNCArIDJdO1xyXG4gICAgICAgIHZhciBhMzMgPSBhWzMgKiA0ICsgM107XHJcbiAgICAgICAgdmFyIGIwMCA9IGJbMCAqIDQgKyAwXTtcclxuICAgICAgICB2YXIgYjAxID0gYlswICogNCArIDFdO1xyXG4gICAgICAgIHZhciBiMDIgPSBiWzAgKiA0ICsgMl07XHJcbiAgICAgICAgdmFyIGIwMyA9IGJbMCAqIDQgKyAzXTtcclxuICAgICAgICB2YXIgYjEwID0gYlsxICogNCArIDBdO1xyXG4gICAgICAgIHZhciBiMTEgPSBiWzEgKiA0ICsgMV07XHJcbiAgICAgICAgdmFyIGIxMiA9IGJbMSAqIDQgKyAyXTtcclxuICAgICAgICB2YXIgYjEzID0gYlsxICogNCArIDNdO1xyXG4gICAgICAgIHZhciBiMjAgPSBiWzIgKiA0ICsgMF07XHJcbiAgICAgICAgdmFyIGIyMSA9IGJbMiAqIDQgKyAxXTtcclxuICAgICAgICB2YXIgYjIyID0gYlsyICogNCArIDJdO1xyXG4gICAgICAgIHZhciBiMjMgPSBiWzIgKiA0ICsgM107XHJcbiAgICAgICAgdmFyIGIzMCA9IGJbMyAqIDQgKyAwXTtcclxuICAgICAgICB2YXIgYjMxID0gYlszICogNCArIDFdO1xyXG4gICAgICAgIHZhciBiMzIgPSBiWzMgKiA0ICsgMl07XHJcbiAgICAgICAgdmFyIGIzMyA9IGJbMyAqIDQgKyAzXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgYjAwICogYTAwICsgYjAxICogYTEwICsgYjAyICogYTIwICsgYjAzICogYTMwLFxyXG4gICAgICAgICAgICBiMDAgKiBhMDEgKyBiMDEgKiBhMTEgKyBiMDIgKiBhMjEgKyBiMDMgKiBhMzEsXHJcbiAgICAgICAgICAgIGIwMCAqIGEwMiArIGIwMSAqIGExMiArIGIwMiAqIGEyMiArIGIwMyAqIGEzMixcclxuICAgICAgICAgICAgYjAwICogYTAzICsgYjAxICogYTEzICsgYjAyICogYTIzICsgYjAzICogYTMzLFxyXG4gICAgICAgICAgICBiMTAgKiBhMDAgKyBiMTEgKiBhMTAgKyBiMTIgKiBhMjAgKyBiMTMgKiBhMzAsXHJcbiAgICAgICAgICAgIGIxMCAqIGEwMSArIGIxMSAqIGExMSArIGIxMiAqIGEyMSArIGIxMyAqIGEzMSxcclxuICAgICAgICAgICAgYjEwICogYTAyICsgYjExICogYTEyICsgYjEyICogYTIyICsgYjEzICogYTMyLFxyXG4gICAgICAgICAgICBiMTAgKiBhMDMgKyBiMTEgKiBhMTMgKyBiMTIgKiBhMjMgKyBiMTMgKiBhMzMsXHJcbiAgICAgICAgICAgIGIyMCAqIGEwMCArIGIyMSAqIGExMCArIGIyMiAqIGEyMCArIGIyMyAqIGEzMCxcclxuICAgICAgICAgICAgYjIwICogYTAxICsgYjIxICogYTExICsgYjIyICogYTIxICsgYjIzICogYTMxLFxyXG4gICAgICAgICAgICBiMjAgKiBhMDIgKyBiMjEgKiBhMTIgKyBiMjIgKiBhMjIgKyBiMjMgKiBhMzIsXHJcbiAgICAgICAgICAgIGIyMCAqIGEwMyArIGIyMSAqIGExMyArIGIyMiAqIGEyMyArIGIyMyAqIGEzMyxcclxuICAgICAgICAgICAgYjMwICogYTAwICsgYjMxICogYTEwICsgYjMyICogYTIwICsgYjMzICogYTMwLFxyXG4gICAgICAgICAgICBiMzAgKiBhMDEgKyBiMzEgKiBhMTEgKyBiMzIgKiBhMjEgKyBiMzMgKiBhMzEsXHJcbiAgICAgICAgICAgIGIzMCAqIGEwMiArIGIzMSAqIGExMiArIGIzMiAqIGEyMiArIGIzMyAqIGEzMixcclxuICAgICAgICAgICAgYjMwICogYTAzICsgYjMxICogYTEzICsgYjMyICogYTIzICsgYjMzICogYTMzLFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIC8vIGltcGxlbWVudCB3aXRoIHZlYzQgdmVyc2lvblxyXG4gICAgICAgIC8vIGxldCByZXMgPSBNYXQ0LmdldEVtcHR5KCk7XHJcbiAgICAgICAgLy8gZm9yKGxldCBpID0gMDsgaSA8IDQ7ICsraSl7XHJcbiAgICAgICAgLy8gICAgIGZvcihsZXQgaiA9IDA7IGogPCA0OyArK2ope1xyXG4gICAgICAgIC8vICAgICAgICAgcmVzW2kgKiA0ICsgal0gPSBWZWM0LmRvdChNYXQ0LmdldFJvdyhhLCBpKSwgTWF0NC5nZXRDb2x1bW4oYiwgaikpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHJldHVybiByZXM7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByb3RhdGVYKHJhZCkge1xyXG4gICAgICAgIHZhciBzaW4gPSBNYXRoLnNpbihyYWQpO1xyXG4gICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhyYWQpO1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIDEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIGNvcywgc2luLCAwLFxyXG4gICAgICAgICAgICAwLCAtc2luLCBjb3MsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByb3RhdGVZKHJhZCkge1xyXG4gICAgICAgIHZhciBzaW4gPSBNYXRoLnNpbihyYWQpO1xyXG4gICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhyYWQpO1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIGNvcywgMCwgLXNpbiwgMCxcclxuICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgc2luLCAwLCBjb3MsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByb3RhdGVaKHJhZCkge1xyXG4gICAgICAgIHZhciBzaW4gPSBNYXRoLnNpbihyYWQpO1xyXG4gICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhyYWQpO1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIGNvcywgc2luLCAwLCAwLFxyXG4gICAgICAgICAgICAtc2luLCBjb3MsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzY2FsZSAoc3gsIHN5LCBzeikge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHN4LCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCBzeSwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgc3osIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHV0aWxzXHJcbiAgICBzdGF0aWMgZ2V0Um93KG1hdHJpeCwgcm93KXtcclxuICAgICAgICAvLyB1c2UgVmVjNCB0byBnZXQgdGhlIHJvd1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjNChtYXRyaXhbcm93XSwgbWF0cml4W3JvdyArIDRdLCBtYXRyaXhbcm93ICsgOF0sIG1hdHJpeFtyb3cgKyAxMl0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb2x1bW4obWF0cml4LCBjb2x1bW4pe1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjNChtYXRyaXhbY29sdW1uICogNF0sIG1hdHJpeFtjb2x1bW4gKiA0ICsgMV0sIG1hdHJpeFtjb2x1bW4gKiA0ICsgMl0sIG1hdHJpeFtjb2x1bW4gKiA0ICsgM10pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjM3tcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIHope1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLnogPSB6O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGFkZChhLCBiKXtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzMoYS54ICsgYi54LCBhLnkgKyBiLnksIGEueiArIGIueik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRvdChhLCBiKXtcclxuICAgICAgICByZXR1cm4gYS54ICogYi54ICsgYS55ICogYi55ICsgYS56ICogYi56O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcm9zcyhhLCBiKXtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzMoYS55ICogYi56IC0gYS56ICogYi55LCBhLnogKiBiLnggLSBhLnggKiBiLnosIGEueCAqIGIueSAtIGEueSAqIGIueCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5vcm0oYSl7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChhLnggKiBhLnggKyBhLnkgKiBhLnkgKyBhLnogKiBhLnopO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBub3JtYWxpemUoYSl7XHJcbiAgICAgICAgbGV0IG5vcm0gPSBWZWMzLm5vcm0oYSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWMzKGEueCAvIG5vcm0sIGEueSAvIG5vcm0sIGEueiAvIG5vcm0pO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgYXNBcnJheSgpeyAgXHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueSwgdGhpcy56XTtcclxuICAgIH1cclxufSIsImltcG9ydCBWZWMzIGZyb20gXCIuL1ZlYzMuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlYzR7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB6LCB3KXtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy56ID0gejtcclxuICAgICAgICB0aGlzLncgPSB3O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGFkZChhLCBiKXtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzQoYS54ICsgYi54LCBhLnkgKyBiLnksIGEueiArIGIueiwgYS53ICsgYi53KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZG90KGEsIGIpe1xyXG4gICAgICAgIHJldHVybiBhLnggKiBiLnggKyBhLnkgKiBiLnkgKyBhLnogKiBiLnogKyBhLncgKiBiLnc7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5vcm0oYSl7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChhLnggKiBhLnggKyBhLnkgKiBhLnkgKyBhLnogKiBhLnogKyBhLncgKiBhLncpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBub3JtYWxpemUoYSl7XHJcbiAgICAgICAgbGV0IG5vcm0gPSBWZWM0Lm5vcm0oYSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWM0KGEueCAvIG5vcm0sIGEueSAvIG5vcm0sIGEueiAvIG5vcm0sIGEudyAvIG5vcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc1ZlYzMoYSl7ICAgXHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWMzKGEueCwgYS55LCBhLnopO1xyXG4gICAgfVxyXG5cclxuICAgIGFzQXJyYXkoKXsgIFxyXG4gICAgICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnksIHRoaXMueiwgdGhpcy53XTtcclxuICAgIH1cclxuXHJcbn0iLCIvKiA9PT09PT09IFRyYW5zZm9ybWF0aW9uIE1hdHJpY2VzID09PT09PT0gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG1hdHJpY2Vze1xyXG4gIFxyXG5cclxuICAvKiAxZCBtYXRyaXggMSB4IDMgKi9cclxuICBzdGF0aWMgbm9ybWFsaXplKGFycmF5KSB7XHJcbiAgICBsZXQgZGlzdGFuY2UgPSBjYWxjdWxhdGVFdWxlckRpc3RhbmNlKGFycmF5KTtcclxuXHJcbiAgICBsZXQgcmVzdWx0ID0gWzAsIDAsIDBdO1xyXG5cclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmVzdWx0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgIHJlc3VsdFtqXSA9IGFycmF5W2pdIC8gZGlzdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8qIHByb2plY3Rpb24gKi9cclxuICBzdGF0aWMgb3J0aG9ncmFwaGljKGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyKSB7XHJcbiAgICBsZXQgYSA9IHJpZ2h0IC0gbGVmdDtcclxuICAgIGxldCBiID0gdG9wIC0gYm90dG9tO1xyXG4gICAgbGV0IGMgPSBmYXIgLSBuZWFyO1xyXG4gICAgbGV0IGEyID0gcmlnaHQgKyBsZWZ0O1xyXG4gICAgbGV0IGIyID0gdG9wICsgYm90dG9tO1xyXG4gICAgbGV0IGMyID0gZmFyICsgbmVhcjtcclxuICBcclxuICAgIHJldHVybiBbXHJcbiAgICAgIDIgLyBhLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICAyIC8gYixcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgLTIgLyBjLFxyXG4gICAgICAwLFxyXG4gICAgICAtYTIgLyBhLFxyXG4gICAgICAtYjIgLyBiLFxyXG4gICAgICAtYzIgLyBjLFxyXG4gICAgICAxLFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBvYmxpcXVlKHRoZXRhLCBwaGkpIHtcclxuICAgIGxldCB0ID0gZGVnVG9SYWQodGhldGEpO1xyXG4gICAgbGV0IHAgPSBkZWdUb1JhZChwaGkpO1xyXG5cclxuICAgIGxldCBjb3RUID0gLTEgLyBNYXRoLnRhbih0KTtcclxuICAgIGxldCBjb3RQID0gLTEgLyBNYXRoLnRhbihwKTtcclxuXHJcbiAgICByZXR1cm4gWzEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIGNvdFQsIGNvdFAsIDEsIDAsIDAsIDAsIDAsIDFdO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHBlcnNwZWN0aXZlIChmaWVsZE9mVmlld0luUmFkaWFucywgYXNwZWN0LCBuZWFyLCBmYXIpIHtcclxuICAgIHZhciBmID0gTWF0aC50YW4oTWF0aC5QSSAqIDAuNSAtIDAuNSAqIGZpZWxkT2ZWaWV3SW5SYWRpYW5zKTtcclxuICAgIHZhciByYW5nZUludiA9IDEuMCAvIChuZWFyIC0gZmFyKTtcclxuXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICBmIC8gYXNwZWN0LFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICBmLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICAobmVhciArIGZhcikgKiByYW5nZUludixcclxuICAgICAgLTEsXHJcbiAgICAgIDAsXHJcbiAgICAgIDAsXHJcbiAgICAgIG5lYXIgKiBmYXIgKiByYW5nZUludiAqIDIsXHJcbiAgICAgIDAsXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFwcGx5VHJhbnNmb3JtICh0cmFuc2Zvcm1NYXRyaXgsIHBvaW50KSB7XHJcbiAgICAvLyBhcHBseSA0KjQgbWF0cml4IHRvIDQqMSB2ZWN0b3JcclxuICAgIGNvbnNvbGUudGFibGUocG9pbnQpO1xyXG4gICAgbGV0IHggPVxyXG4gICAgICB0cmFuc2Zvcm1NYXRyaXhbMF0gKiBwb2ludFswXSArXHJcbiAgICAgIHRyYW5zZm9ybU1hdHJpeFsxXSAqIHBvaW50WzFdICtcclxuICAgICAgdHJhbnNmb3JtTWF0cml4WzJdICogcG9pbnRbMl0gK1xyXG4gICAgICB0cmFuc2Zvcm1NYXRyaXhbM10gKiAxO1xyXG4gICAgbGV0IHkgPVxyXG4gICAgICB0cmFuc2Zvcm1NYXRyaXhbNF0gKiBwb2ludFswXSArXHJcbiAgICAgIHRyYW5zZm9ybU1hdHJpeFs1XSAqIHBvaW50WzFdICtcclxuICAgICAgdHJhbnNmb3JtTWF0cml4WzZdICogcG9pbnRbMl0gK1xyXG4gICAgICB0cmFuc2Zvcm1NYXRyaXhbN10gKiAxO1xyXG4gICAgbGV0IHogPVxyXG4gICAgICB0cmFuc2Zvcm1NYXRyaXhbOF0gKiBwb2ludFswXSArXHJcbiAgICAgIHRyYW5zZm9ybU1hdHJpeFs5XSAqIHBvaW50WzFdICtcclxuICAgICAgdHJhbnNmb3JtTWF0cml4WzEwXSAqIHBvaW50WzJdICtcclxuICAgICAgdHJhbnNmb3JtTWF0cml4WzExXSAqIDE7XHJcblxyXG4gICAgcmV0dXJuIFt4LCB5LCB6XTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBsb29rQXQgKGNhbWVyYVBvc2l0aW9uLCB0YXJnZXQsIHVwKSB7XHJcbiAgICBsZXQgekF4aXMgPSBub3JtYWxpemUoc3VidHJhY3RWZWN0b3JzKGNhbWVyYVBvc2l0aW9uLCB0YXJnZXQpKTtcclxuICAgIGxldCB4QXhpcyA9IG5vcm1hbGl6ZShjcm9zcyh1cCwgekF4aXMpKTtcclxuICAgIGxldCB5QXhpcyA9IG5vcm1hbGl6ZShjcm9zcyh6QXhpcywgeEF4aXMpKTtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHhBeGlzWzBdLFxyXG4gICAgICB4QXhpc1sxXSxcclxuICAgICAgeEF4aXNbMl0sXHJcbiAgICAgIDAsXHJcbiAgICAgIHlBeGlzWzBdLFxyXG4gICAgICB5QXhpc1sxXSxcclxuICAgICAgeUF4aXNbMl0sXHJcbiAgICAgIDAsXHJcbiAgICAgIHpBeGlzWzBdLFxyXG4gICAgICB6QXhpc1sxXSxcclxuICAgICAgekF4aXNbMl0sXHJcbiAgICAgIDAsXHJcbiAgICAgIGNhbWVyYVBvc2l0aW9uWzBdLFxyXG4gICAgICBjYW1lcmFQb3NpdGlvblsxXSxcclxuICAgICAgY2FtZXJhUG9zaXRpb25bMl0sXHJcbiAgICAgIDEsXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIG1ha2VadG9XTWF0cml4IChmdWRnZUZhY3Rvcikge1xyXG4gICAgcmV0dXJuIFsxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCBmdWRnZUZhY3RvciwgMCwgMCwgMCwgMV07XHJcbiAgfVxyXG59OyIsImltcG9ydCBNYXQ0IGZyb20gXCIuLi9tYXRoL01hdDQuanNcIjtcclxuaW1wb3J0IE5vZGUgZnJvbSBcIi4uL25vZGUuanNcIjtcclxuXHJcbmNvbnN0IHNlYXQgPSBuZXcgTm9kZSgpO1xyXG5zZWF0Lm5hbWUgPSBcInNlYXRcIjtcclxuc2VhdC5tb2RlbCA9IGJveE1vZGVsKDAuMiwgMS4yLCAwLjksIFswLCAwLCAwXSk7XHJcbnNlYXQudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbihzZWF0LnBpY2tlZENvbG9yID0gcmFuZG9tQ29sb3JzKCkpLFxyXG4gIChzZWF0LnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbiAgfSk7XHJcbnNlYXQuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgcmlnaHRGcm9udExlZyA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0RnJvbnRMZWcubmFtZSA9IFwicmlnaHRGcm9udExlZ1wiO1xyXG5yaWdodEZyb250TGVnLm1vZGVsID0gYm94TW9kZWwoMC44LCAwLjE1LCAwLjE1LCBbMCwgLTAuNCwgMF0pO1xyXG5yaWdodEZyb250TGVnLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFstMC40LCAtMC4wNSwgMC4zXSxcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG4ocmlnaHRGcm9udExlZy5waWNrZWRDb2xvciA9IHJhbmRvbUNvbG9ycygpKSxcclxuICAocmlnaHRGcm9udExlZy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG4gIH0pO1xyXG5yaWdodEZyb250TGVnLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxuICBhbmltYXRlOiBbXHJcbiAgICB7IHJvdGF0ZTogWzAuMywgMCwgMF0sIHRyYW5zbGF0ZTogWy0wLjQsIC0wLjA1LCAwLjNdLCBzY2FsZTogWzEsIDEsIDFdIH0sXHJcbiAgICB7IHJvdGF0ZTogWy0wLjgsIDAsIDBdLCB0cmFuc2xhdGU6IFstMC40LCAtMC4wNSwgMC4zXSwgc2NhbGU6IFsxLCAxLCAxXSB9LFxyXG4gIF1cclxufTtcclxuXHJcbmNvbnN0IHJpZ2h0UmVhckxlZyA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0UmVhckxlZy5uYW1lID0gXCJyaWdodFJlYXJMZWdcIjtcclxucmlnaHRSZWFyTGVnLm1vZGVsID0gYm94TW9kZWwoMC44LCAwLjE1LCAwLjE1LCBbMCwgLTAuNCwgMF0pO1xyXG5yaWdodFJlYXJMZWcudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWy0wLjQsIC0wLjA1LCAtMC4zXSxcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG4ocmlnaHRSZWFyTGVnLnBpY2tlZENvbG9yID0gcmFuZG9tQ29sb3JzKCkpLFxyXG4gIChyaWdodFJlYXJMZWcudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxuICB9KTtcclxucmlnaHRSZWFyTGVnLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxuICBhbmltYXRlOiBbXHJcbiAgICB7IHJvdGF0ZTogWzAuMywgMCwgMF0sIHRyYW5zbGF0ZTogWy0wLjQsIC0wLjA1LCAtMC4zXSwgc2NhbGU6IFsxLCAxLCAxXSB9LFxyXG4gICAgeyByb3RhdGU6IFstMC44LCAwLCAwXSwgdHJhbnNsYXRlOiBbLTAuNCwgLTAuMDUsIC0wLjNdLCBzY2FsZTogWzEsIDEsIDFdIH0sXHJcbiAgXVxyXG59O1xyXG5cclxuY29uc3QgbGVmdFJlYXJMZWcgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0UmVhckxlZy5uYW1lID0gXCJsZWZ0UmVhckxlZ1wiO1xyXG5sZWZ0UmVhckxlZy5tb2RlbCA9IGJveE1vZGVsKDAuOCwgMC4xNSwgMC4xNSwgWzAsIC0wLjQsIDBdKTtcclxubGVmdFJlYXJMZWcudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAuNCwgLTAuMDUsIC0wLjNdLFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbihsZWZ0UmVhckxlZy5waWNrZWRDb2xvciA9IHJhbmRvbUNvbG9ycygpKSxcclxuICAobGVmdFJlYXJMZWcudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxuICB9KTtcclxubGVmdFJlYXJMZWcuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG4gIGFuaW1hdGU6IFtcclxuICAgIHsgcm90YXRlOiBbLTAuMywgMCwgMF0sIHRyYW5zbGF0ZTogWzAuNCwgLTAuMDUsIC0wLjNdLCBzY2FsZTogWzEsIDEsIDFdIH0sXHJcbiAgICB7IHJvdGF0ZTogWzAuOSwgMCwgMF0sIHRyYW5zbGF0ZTogWzAuNCwgLTAuMDUsIC0wLjNdLCBzY2FsZTogWzEsIDEsIDFdIH0sXHJcbiAgXVxyXG59O1xyXG5cclxuY29uc3QgcmlnaHRTdGlsZSA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0U3RpbGUubmFtZSA9IFwicmlnaHRTdGlsZVwiO1xyXG5yaWdodFN0aWxlLm1vZGVsID0gYm94TW9kZWwoMC4yLCAwLjEyLCAwLjEyLCBbMCwgLTAuMSwgMF0pO1xyXG5yaWdodFN0aWxlLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFstMC4xNSwgMCwgMF0sXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuKHJpZ2h0U3RpbGUucGlja2VkQ29sb3IgPSByYW5kb21Db2xvcnMoKSksXHJcbiAgKHJpZ2h0U3RpbGUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxuICB9KTtcclxucmlnaHRTdGlsZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCBsZWZ0U3RpbGUgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0U3RpbGUubmFtZSA9IFwibGVmdFN0aWxlXCI7XHJcbmxlZnRTdGlsZS5tb2RlbCA9IGJveE1vZGVsKDAuMiwgMC4xMiwgMC4xMiwgWzAsIC0wLjEsIDBdKTtcclxubGVmdFN0aWxlLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLjE1LCAwLCAwXSxcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG4obGVmdFN0aWxlLnBpY2tlZENvbG9yID0gcmFuZG9tQ29sb3JzKCkpLFxyXG4gIChsZWZ0U3RpbGUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxuICB9KTtcclxubGVmdFN0aWxlLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IGJhY2sgPSBuZXcgTm9kZSgpO1xyXG5iYWNrLm5hbWUgPSBcImJhY2tcIjtcclxuYmFjay5tb2RlbCA9IGJveE1vZGVsKDAuNywgMS4yLCAwLjE1LCBbMCwgMC4zNSwgMF0pO1xyXG5iYWNrLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLCAwLjMsIC0wLjM1XSxcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG4oYmFjay5waWNrZWRDb2xvciA9IHJhbmRvbUNvbG9ycygpKSxcclxuICAoYmFjay52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG4gIH0pO1xyXG5iYWNrLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IGxlZnRFeWUgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0RXllLm5hbWUgPSBcImxlZnRFeWVcIjtcclxubGVmdEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMTIsIDAuMDUsIDAuMDEsIFswLCAwLCAwXSk7XHJcbmxlZnRFeWUudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAuMywgMC40LCAwLjFdLFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbihsZWZ0RXllLnBpY2tlZENvbG9yID0gcmFuZG9tQ29sb3JzKCkpLFxyXG4gIChsZWZ0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbiAgfSk7XHJcbmxlZnRFeWUuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgcmlnaHRFeWUgPSBuZXcgTm9kZSgpO1xyXG5yaWdodEV5ZS5uYW1lID0gXCJyaWdodEV5ZVwiO1xyXG5yaWdodEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMTIsIDAuMDUsIDAuMDEsIFswLCAwLCAwXSk7XHJcbnJpZ2h0RXllLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFstMC4zLCAwLjQsIDAuMV0sXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuKHJpZ2h0RXllLnBpY2tlZENvbG9yID0gcmFuZG9tQ29sb3JzKCkpLFxyXG4gIChyaWdodEV5ZS52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG4gIH0pO1xyXG5yaWdodEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5yaWdodEZyb250TGVnLnNldFBhcmVudChzZWF0KTtcclxucmlnaHRSZWFyTGVnLnNldFBhcmVudChzZWF0KTtcclxubGVmdFJlYXJMZWcuc2V0UGFyZW50KHNlYXQpO1xyXG5yaWdodFN0aWxlLnNldFBhcmVudChiYWNrKTtcclxubGVmdFN0aWxlLnNldFBhcmVudChiYWNrKTtcclxuYmFjay5zZXRQYXJlbnQoc2VhdCk7XHJcbmxlZnRFeWUuc2V0UGFyZW50KGJhY2spO1xyXG5yaWdodEV5ZS5zZXRQYXJlbnQoYmFjayk7XHJcblxyXG5cclxuXHJcblxyXG52YXIgZW5kTW9kZWwgPSBbXHJcbiAgc2VhdFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZW5kTW9kZWw7XHJcbiIsIi8vIGNvbnN0IHsgZGVmYXVsdDogTWF0NCB9ID0gcmVxdWlyZShcIi4vc3RydWN0cy9tYXRoL01hdDRcIik7XHJcbmltcG9ydCBNYXQ0IGZyb20gXCIuL21hdGgvTWF0NC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XHJcbiAgICAgICAgdGhpcy5sb2NhbE1hdHJpeCA9IE1hdDQuZ2V0SWRlbnRpdHkoKTtcclxuICAgICAgICB0aGlzLndvcmxkTWF0cml4ID0gTWF0NC5nZXRJZGVudGl0eSgpO1xyXG4gICAgICAgIHRoaXMud29ybGRJbnZlcnNlTWF0cml4ID0gTWF0NC5nZXRJZGVudGl0eSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdvcmxkTWF0cml4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndvcmxkTWF0cml4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgc2V0UGFyZW50KHBhcmVudCkge1xyXG4gICAgICAgIC8vIGFscmVhZHkgaGF2ZSBwYXJlbnRcclxuICAgICAgICBpZiAodGhpcy5wYXJlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQubmFtZTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICBzZXRXb3JsZE10eChtYXRyaXgpIHtcclxuICAgICAgaWYgKG1hdHJpeCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMud29ybGRNYXRyaXggPSBNYXQ0Lm11bHRpcGx5KG1hdHJpeCwgdGhpcy5sb2NhbE1hdHJpeCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy53b3JsZE1hdHJpeCA9IHRoaXMubG9jYWxNYXRyaXg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgY29uc3Qgd29ybGRNYXRyaXggPSB0aGlzLndvcmxkTWF0cml4O1xyXG4gICAgICB0aGlzLndvcmxkSW52ZXJzZU1hdHJpeCA9IE1hdDQudHJhbnNwb3NlKFxyXG4gICAgICAgIE1hdDQuaW52ZXJzZSh0aGlzLndvcmxkTWF0cml4KVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIGNoaWxkLnNldFdvcmxkTXR4KHdvcmxkTWF0cml4KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGVuZE1vZGVsIGZyb20gXCIuL3N0cnVjdHMvbW9kZWwvdGVzdC5qc1wiO1xyXG5pbXBvcnQgTWF0NCBmcm9tIFwiLi9zdHJ1Y3RzL21hdGgvTWF0NC5qc1wiO1xyXG5pbXBvcnQgbWF0cmljZXMgZnJvbSBcIi4vc3RydWN0cy9tYXRoL21hdHJpY2VzLmpzXCI7XHJcbmltcG9ydCBoYW5kbGVyIGZyb20gXCIuL2hhbmRsZXIvaGFuZGxlci5qc1wiO1xyXG5cclxuXHJcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2wtY2FudmFzXCIpO1xyXG5jb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2xcIik7XHJcblxyXG5cclxuY29uc3QgdmVydGV4U2hhZGVyU291cmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZXJ0ZXgtc2hhZGVyLTNkXCIpPy50ZXh0Q29udGVudDtcclxuY29uc3QgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyYWdtZW50LXNoYWRlci0zZFwiKT8udGV4dENvbnRlbnQ7XHJcblxyXG4vLyBzdGF0ZVxyXG52YXIgb2JqZWN0cztcclxudmFyIHRhcmdldDtcclxudmFyIGxpZ2h0aW5nO1xyXG52YXIgbGlnaHREaXJlY3Rpb247XHJcbnZhciB0ZXh0dXJlO1xyXG52YXIgcHJvamVjdGlvbjtcclxudmFyIGZhY3RvcjtcclxudmFyIHRoZXRhO1xyXG52YXIgcGhpO1xyXG52YXIgbm9ybWFsaXplTGlnaHQ7XHJcbnZhciB3b3JsZFZpZXdQcm9qZWN0aW9uTWF0cml4O1xyXG4vLyBjb25zb2xlLmxvZyhkZWZhdWx0T2JqZWN0cyk7XHJcblxyXG5pbml0U3RhdGUoKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRTdGF0ZSgpIHtcclxuICAgIG9iamVjdHMgPSBlbmRNb2RlbDtcclxuICAgIGZvY3VzID0gbnVsbDtcclxuICAgIGxpZ2h0aW5nID0gZmFsc2U7XHJcbiAgICBsaWdodERpcmVjdGlvbiA9IFswLCAwLCAxXTtcclxuICAgIHRleHR1cmUgPSBcIm5vbmVcIjtcclxuICAgIHByb2plY3Rpb24gPSBcIm9ydGhvZ3JhcGhpY1wiO1xyXG4gICAgZmFjdG9yID0gMC4wO1xyXG4gICAgdGhldGEgPSA5MC4wO1xyXG4gICAgcGhpID0gOTAuMDtcclxuICAgIHNldERlZmF1bHRSb3RhdGlvbihvYmplY3RzKVxyXG4gICAgLy8gaW5pdEFuaW1hdGlvbihvYmplY3RzKTtcclxuICAgIC8vIHNob3dDb21wb25lbnRzKG9iamVjdHMpO1xyXG5cclxufVxyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIGlmKCFnbCl7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV2ViR0wgbm90IHN1cHBvcnRlZFwiKTtcclxuICAgIH1cclxuICAgIHRhcmdldCA9IG9iamVjdHNbMF07XHJcblxyXG5cclxuICAgIHJlbmRlcigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREZWZhdWx0U3RhdGUob2JqZWN0cykge1xyXG4gICAgb2JqZWN0cy5mb3JFYWNoKG9iamVjdCA9PiB7XHJcbiAgICAgICAgaWYgKCFvYmplY3QubW9kZWwuY29sb3JzKSB7XHJcbiAgICAgICAgICAgIGlmICghb2JqZWN0LnBpY2tlZENvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QubW9kZWwuY29sb3JzID0gZ2VuZXJhdGVDb2xvcnMob2JqZWN0Lm1vZGVsLnZlcnRpY2VzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5tb2RlbC5jb2xvcnMgPSBnZW5lcmF0ZUNvbG9ycyhcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QubW9kZWwudmVydGljZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnBpY2tlZENvbG9yXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBpZiAoIW9iamVjdC5wcm9ncmFtICYmICFsaWdodGluZykge1xyXG4gICAgICAgICAgICBvYmplY3QucHJvZ3JhbSA9IGNyZWF0ZVNoYWRlclByb2dyYW0oXHJcbiAgICAgICAgICAgICAgICBnbCxcclxuICAgICAgICAgICAgICAgIHZlcnRleFNoYWRlclNvdXJjZSxcclxuICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAvLyAgIGlmIChvYmplY3QuYW5pbWF0aW9uLmlzT2JqZWN0QW5pbWF0ZSAmJiBvYmplY3QuYW5pbWF0aW9uLmFuaW1hdGUpIHtcclxuICAgICAgICAvLyAgICAgb2JqZWN0LnRyYW5zZm9ybSA9IG9iamVjdC5hbmltYXRpb24uYW5pbWF0ZVtjb3VudGVyICUgZnBzXTtcclxuICAgICAgICAvLyAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAvLyBvYmplY3QudHJhbnNmb3JtID0gb2JqZWN0LmFuaW1hdGlvbi5hbmltYXRlW2NvdW50ZXIgJSBmcHNdO1xyXG4gICAgICAgIG9iamVjdC5sb2NhbE1hdHJpeCA9IHNldFRyYW5zZm9ybShvYmplY3QpO1xyXG4gICAgICAgIGlmIChvYmplY3QuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzZXREZWZhdWx0U3RhdGUob2JqZWN0LmNoaWxkcmVuKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRUcmFuc2Zvcm0ob2JqZWN0KSB7XHJcbiAgICAvKiBTZXR1cCB0cmFuc2Zvcm0gbWF0cml4ICovXHJcbiAgICAvLyBjb25zb2xlLmxvZyhvYmplY3QpXHJcblxyXG4gICAgdmFyIHRyYW5zZm9ybU1hdHJpeCA9IE1hdDQudHJhbnNsYXRlKFxyXG4gICAgICBvYmplY3QudHJhbnNmb3JtLnRyYW5zbGF0ZVswXSxcclxuICAgICAgb2JqZWN0LnRyYW5zZm9ybS50cmFuc2xhdGVbMV0sXHJcbiAgICAgIG9iamVjdC50cmFuc2Zvcm0udHJhbnNsYXRlWzJdXHJcbiAgICApO1xyXG4gICAgXHJcblxyXG5cclxuXHJcbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICB0cmFuc2Zvcm1NYXRyaXgsXHJcbiAgICAgIE1hdDQucm90YXRlWChvYmplY3QudHJhbnNmb3JtLnJvdGF0ZVswXSlcclxuICAgICk7XHJcbiAgXHJcbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICB0cmFuc2Zvcm1NYXRyaXgsXHJcbiAgICAgIE1hdDQucm90YXRlWShvYmplY3QudHJhbnNmb3JtLnJvdGF0ZVsxXSlcclxuICAgICk7XHJcbiAgXHJcbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICB0cmFuc2Zvcm1NYXRyaXgsXHJcbiAgICAgIE1hdDQucm90YXRlWihvYmplY3QudHJhbnNmb3JtLnJvdGF0ZVsyXSlcclxuICAgICk7XHJcbiAgXHJcbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICB0cmFuc2Zvcm1NYXRyaXgsXHJcbiAgICAgIE1hdDQuc2NhbGUoXHJcbiAgICAgICAgb2JqZWN0LnRyYW5zZm9ybS5zY2FsZVswXSxcclxuICAgICAgICBvYmplY3QudHJhbnNmb3JtLnNjYWxlWzFdLFxyXG4gICAgICAgIG9iamVjdC50cmFuc2Zvcm0uc2NhbGVbMl1cclxuICAgICAgKVxyXG4gICAgKTtcclxuICBcclxuICAgIHJldHVybiB0cmFuc2Zvcm1NYXRyaXg7XHJcbiAgfVxyXG5cclxuZnVuY3Rpb24gc2V0RGVmYXVsdFJvdGF0aW9uKG9iamVjdHMpIHtcclxuICAgIG9iamVjdHMuZm9yRWFjaChvYmplY3QgPT4ge1xyXG4gICAgICAgIG9iamVjdC50cmFuc2Zvcm0ucm90YXRlID0gb2JqZWN0LnRyYW5zZm9ybS5yb3RhdGUubWFwKCh2YWwpID0+IGRlZ1RvUmFkKHZhbCkpO1xyXG4gICAgICAgIGlmIChvYmplY3QuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzZXREZWZhdWx0Um90YXRpb24ob2JqZWN0LmNoaWxkcmVuKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckxvb3Aob2JqZWN0cykge1xyXG4gICAgb2JqZWN0cy5mb3JFYWNoKG9iamVjdCA9PiB7XHJcbiAgICAgICAgZ2wudXNlUHJvZ3JhbShvYmplY3QucHJvZ3JhbSk7XHJcbiAgICAgICAgdmFyIG1vZGVsTWF0cml4ID0gb2JqZWN0LmdldFdvcmxkTWF0cml4KCk7XHJcblxyXG4gICAgICAgIG9iamVjdC53b3JsZE1hdHJpeCA9IHNldFByb2plY3Rpb25NYXRyaXgob2JqZWN0LndvcmxkTWF0cml4LCBvYmplY3QpXHJcblxyXG5cclxuICAgICAgICB2YXIgYV9wb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkob2JqZWN0Lm1vZGVsLnZlcnRpY2VzLmZsYXQoMSkpO1xyXG4gICAgICAgIHZhciBhX25vcm1hbCA9IG5ldyBGbG9hdDMyQXJyYXkob2JqZWN0Lm1vZGVsLm5vcm1hbHMuZmxhdCgxKSk7XHJcbiAgICAgICAgdmFyIGFfY29sb3IgPSBuZXcgRmxvYXQzMkFycmF5KG9iamVjdC5tb2RlbC5jb2xvcnMuZmxhdCgxKSk7XHJcbiAgICAgICAgdmFyIGFfdGV4dHVyZSA9IG5ldyBGbG9hdDMyQXJyYXkob2JqZWN0Lm1vZGVsLnRleENvb3JkKTtcclxuICAgICAgICB2YXIgYV90YW5nZW50ID0gbmV3IEZsb2F0MzJBcnJheShvYmplY3QubW9kZWwudGFuZ2VudHMuZmxhdCgxKSk7XHJcbiAgICAgICAgdmFyIGFfYml0YW5nZW50ID0gbmV3IEZsb2F0MzJBcnJheShvYmplY3QubW9kZWwuYml0YW5nZW50cy5mbGF0KDEpKTtcclxuXHJcbiAgICAgICAgc2V0QXR0cihnbCwgb2JqZWN0LnByb2dyYW0sIGFfcG9zaXRpb24sIGFfbm9ybWFsLCBhX2NvbG9yLCBhX3RleHR1cmUsIGFfdGFuZ2VudCwgYV9iaXRhbmdlbnQpO1xyXG4gICAgICAgIHZhciB1bmlmb3JtcyA9IHtcclxuICAgICAgICAgICAgdVdvcmxkVmlld1Byb2plY3Rpb246IG9iamVjdC53b3JsZE1hdHJpeCxcclxuICAgICAgICAgICAgdVdvcmxkSW52ZXJzZVRyYW5zcG9zZTogb2JqZWN0LndvcmxkSW52ZXJzZU1hdHJpeCxcclxuICAgICAgICAgICAgdVJldmVyc2VMaWdodERpcmVjdGlvbjogbm9ybWFsaXplTGlnaHQsXHJcbiAgICAgICAgICAgIHVDb2xvcjogb2JqZWN0LnBpY2tlZENvbG9yLmNvbmNhdCgxLjApLFxyXG4gICAgICAgICAgICB1TW9kZWxNYXRyaXg6IG1vZGVsTWF0cml4LFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VW5pZm9ybXMoZ2wsIG9iamVjdC5wcm9ncmFtLCB1bmlmb3Jtcyk7XHJcblxyXG4gICAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVTLCAwLCBvYmplY3QubW9kZWwudmVydGljZXMubGVuZ3RoKTtcclxuICAgICAgICBpZiAob2JqZWN0LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmVuZGVyTG9vcChvYmplY3QuY2hpbGRyZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG53aW5kb3cucmVxdWVzdEFuaW1GcmFtZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICB3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyAxKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9KSgpO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gICAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcclxuICAgIGdsLmNsZWFyQ29sb3IoMS4wLCAxLjAsIDEuMCwgMS4wKTtcclxuICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcclxuXHJcbiAgICBnbC5lbmFibGUoZ2wuQ1VMTF9GQUNFKTtcclxuICAgIGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcclxuXHJcbiAgICBzZXREZWZhdWx0U3RhdGUob2JqZWN0cyk7XHJcbiAgICBoYW5kbGVyKHRhcmdldCk7XHJcblxyXG5cclxuICAgIG9iamVjdHNbMF0uc2V0V29ybGRNdHgobnVsbCk7XHJcbiAgICBub3JtYWxpemVMaWdodCA9IG1hdHJpY2VzLm5vcm1hbGl6ZShsaWdodERpcmVjdGlvbik7XHJcbiAgICByZW5kZXJMb29wKG9iamVjdHMpO1xyXG4gICAgXHJcbiAgd2luZG93LnJlcXVlc3RBbmltRnJhbWUocmVuZGVyKTtcclxuICAgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRDYW1lcmEob2JqZWN0KSB7XHJcbiAgICAvKiBTZXR1cCB2aWV3IG1hdHJpeCAqL1xyXG4gICAgdmFyIHZpZXdNYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICBNYXQ0LnJvdGF0ZVkob2JqZWN0LnZpZXdNYXRyaXguY2FtZXJhWzFdKSxcclxuICAgICAgTWF0NC5yb3RhdGVYKG9iamVjdC52aWV3TWF0cml4LmNhbWVyYVswXSlcclxuICAgICk7XHJcbiAgXHJcbiAgICAvLyBoYW5kbGUgcmFkaXVzXHJcbiAgICB2aWV3TWF0cml4ID0gTWF0NC5tdWx0aXBseShcclxuICAgICAgdmlld01hdHJpeCxcclxuICAgICAgTWF0NC50cmFuc2xhdGUoMCwgMCwgb2JqZWN0LnZpZXdNYXRyaXguY2FtZXJhWzJdKVxyXG4gICAgKTtcclxuICBcclxuICAgIGxldCBjYW1Qb3MgPSBbdmlld01hdHJpeFsxMl0sIHZpZXdNYXRyaXhbMTNdLCB2aWV3TWF0cml4WzE0XV07XHJcbiAgXHJcbiAgICBsZXQgY2FtZXJhTWF0cml4ID0gbWF0cmljZXMubG9va0F0KFxyXG4gICAgICBjYW1Qb3MsXHJcbiAgICAgIG9iamVjdC52aWV3TWF0cml4Lmxvb2tBdCxcclxuICAgICAgb2JqZWN0LnZpZXdNYXRyaXgudXBcclxuICAgICk7XHJcbiAgXHJcbiAgICByZXR1cm4gY2FtZXJhTWF0cml4O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0UHJvamVjdGlvbiAoKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IGFzcGVjdCA9IGNhbnZhcy53aWR0aCAvIGNhbnZhcy5oZWlnaHQ7XHJcbiAgICBjb25zdCBmb3Z5ID0gZGVnVG9SYWQoNDUpO1xyXG4gICAgY29uc3QgbGVmdCA9IC0yO1xyXG4gICAgY29uc3QgcmlnaHQgPSAyO1xyXG4gICAgY29uc3QgYm90dG9tID0gLTI7XHJcbiAgICBjb25zdCB0b3AgPSAyO1xyXG4gICAgbGV0IGZhck9ydGhvID0gb2JqZWN0c1swXS52aWV3TWF0cml4LmZhciAqIDE7XHJcbiAgICBsZXQgbmVhck9ydGhvID0gLWZhck9ydGhvO1xyXG5cclxuXHJcbiAgXHJcbiAgICBpZiAocHJvamVjdGlvbiA9PT0gXCJvcnRob2dyYXBoaWNcIikge1xyXG4gICAgLy8gICByZXR1cm4gbWF0cmljZXMub3J0aG9ncmFwaGljKGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhck9ydGhvLCBmYXJPcnRobyk7XHJcbiAgICByZXR1cm4gTWF0NC5wcm9qZWN0aW9uT3J0b2dyYXBoaWMobGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyT3J0aG8sIGZhck9ydGhvKVxyXG4gICAgLy8gcmV0dXJuIG1hdHJpY2VzLm9ydGhvZ3JhcGhpYyhsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXJPcnRobywgZmFyT3J0aG8pO1xyXG4gICAgfSBlbHNlIGlmIChwcm9qZWN0aW9uID09PSBcIm9ibGlxdWVcIikge1xyXG4gICAgICByZXR1cm4gTWF0NC5tdWx0aXBseShcclxuICAgICAgICBtYXRyaWNlcy5vYmxpcXVlKHRoZXRhLCBwaGkpLFxyXG4gICAgICAgIG1hdHJpY2VzLm9ydGhvZ3JhcGhpYyhsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXJPcnRobywgZmFyT3J0aG8pXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKHByb2plY3Rpb24gPT09IFwicGVyc3BlY3RpdmVcIikge1xyXG4gICAgICByZXR1cm4gbWF0cmljZXMucGVyc3BlY3RpdmUoXHJcbiAgICAgICAgZm92eSxcclxuICAgICAgICBhc3BlY3QsXHJcbiAgICAgICAgb2JqZWN0c1swXS52aWV3TWF0cml4Lm5lYXIsXHJcbiAgICAgICAgb2JqZWN0c1swXS52aWV3TWF0cml4LmZhclxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbmZ1bmN0aW9uIHNldFByb2plY3Rpb25NYXRyaXgobWF0cml4LCBvYmplY3QpIHtcclxuICAgIGNvbnN0IGNhbWVyYSA9IHNldENhbWVyYShvYmplY3QpO1xyXG4gICAgY29uc3QgcHJvamVjdGlvblZpZXcgPSBzZXRQcm9qZWN0aW9uKCk7XHJcbiAgICBjb25zdCB2aWV3ID0gTWF0NC5pbnZlcnNlKGNhbWVyYSk7XHJcbiAgICB2YXIgdmlld1Byb2plY3Rpb25NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KHByb2plY3Rpb25WaWV3LCB2aWV3KTtcclxuICAgIGlmIChmYWN0b3IgPCAwLjEpIHtcclxuICAgICAgICBmYWN0b3IgPSAwLjE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb2plY3Rpb24gPT09IFwicGVyc3BlY3RpdmVcIikge1xyXG4gICAgICAgIHZpZXdQcm9qZWN0aW9uTWF0cml4ID0gTWF0NC5tdWx0aXBseShcclxuICAgICAgICAgICAgbWF0cmljZXMubWFrZVp0b1dNYXRyaXgoZmFjdG9yKSxcclxuICAgICAgICAgICAgdmlld1Byb2plY3Rpb25NYXRyaXgsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB3b3JsZFZpZXdQcm9qZWN0aW9uTWF0cml4ID0gTWF0NC5tdWx0aXBseSh2aWV3UHJvamVjdGlvbk1hdHJpeCwgbWF0cml4KTtcclxuXHJcbiAgICByZXR1cm4gd29ybGRWaWV3UHJvamVjdGlvbk1hdHJpeDtcclxufVxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=