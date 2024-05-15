/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/handler/eventHandler.js":
/*!*************************************!*\
  !*** ./src/handler/eventHandler.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayComponent: () => (/* binding */ displayComponent)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
/* harmony import */ var _structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../structs/math/mathUtils.js */ "./src/structs/math/mathUtils.js");



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
// component container
const componentContainer = document.getElementById('component-container');
//camera
const orthographic = document.getElementById('orthographic');
const oblique = document.getElementById('oblique');
const perspective = document.getElementById('perspective');
// camera radius
const cameraRadius = document.getElementById('camera-radius-slider');
// camera roll-pitch
const cameraRoll = document.getElementById('camera-roll-slider');
const cameraPitch = document.getElementById('camera-pitch-slider');
// camera theta-phi
const cameraTheta = document.getElementById('camera-theta-slider');
const cameraPhi = document.getElementById('camera-phi-slider');
// set orthographic as default input radio button
orthographic.checked = true;
// event listener
translationX.addEventListener('input', function(){
    _index_js__WEBPACK_IMPORTED_MODULE_0__.target.transform.translate[0] = (2 * translationX.value) / 100;
    translataionXValue.textContent = _index_js__WEBPACK_IMPORTED_MODULE_0__.target.transform.translate[0];
});
translationY.addEventListener('input', function(){
    _index_js__WEBPACK_IMPORTED_MODULE_0__.target.transform.translate[1] = (2 * translationY.value) / 100;
    translataionYValue.textContent = _index_js__WEBPACK_IMPORTED_MODULE_0__.target.transform.translate[1];
});
translationZ.addEventListener('input', function(){
    _index_js__WEBPACK_IMPORTED_MODULE_0__.target.transform.translate[2] = (2 * translationZ.value) / 100;
    translataionZValue.textContent = _index_js__WEBPACK_IMPORTED_MODULE_0__.target.transform.translate[2];
});
rotationX.addEventListener('input', function(){
    _index_js__WEBPACK_IMPORTED_MODULE_0__.target.transform.rotate[0] = (0,_structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(rotationX.value);
    rotationXValue.textContent = rotationX.value;
})
rotationY.addEventListener('input', function(){
    _index_js__WEBPACK_IMPORTED_MODULE_0__.target.transform.rotate[1] = (0,_structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(rotationY.value);
    rotationYValue.textContent = rotationY.value;
})
rotationZ.addEventListener('input', function(){
    _index_js__WEBPACK_IMPORTED_MODULE_0__.target.transform.rotate[2] = (0,_structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(rotationZ.value);
    rotationZValue.textContent = rotationZ.value;
})
scalationX.addEventListener('input', function(){
    _index_js__WEBPACK_IMPORTED_MODULE_0__.target.transform.scale[0] =  scalationX.value / 20;
    scalationXValue.textContent = _index_js__WEBPACK_IMPORTED_MODULE_0__.target.transform.scale[0];
})
scalationY.addEventListener('input', function(){
    _index_js__WEBPACK_IMPORTED_MODULE_0__.target.transform.scale[1] =  scalationY.value / 20;
    scalationYValue.textContent = _index_js__WEBPACK_IMPORTED_MODULE_0__.target.transform.scale[1];
})
scalationZ.addEventListener('input', function(){
    _index_js__WEBPACK_IMPORTED_MODULE_0__.target.transform.scale[2] =  scalationZ.value / 20;
    scalationZValue.textContent = _index_js__WEBPACK_IMPORTED_MODULE_0__.target.transform.scale[2];
})

// camera
orthographic.addEventListener('click', function(){
    ;(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.setProjectionType)("orthographic");
})

oblique.addEventListener('click', function(){
    ;(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.setProjectionType)("oblique");
})

perspective.addEventListener('click', function(){
    ;(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.setProjectionType)("perspective");
})

function displayComponent(treeLevel = 0, objects){
    objects.forEach((object) => {
        let newComponent = document.createElement('div'); 
        newComponent.style = 'padding-left: ' + treeLevel*1.5 + 'em;';
        newComponent.innerHTML += `
            <button class="max-w-fit component">${object.name}</button>
        `;
        let createdButton = newComponent.querySelector('.component');
        createdButton.addEventListener('click', function(evt) {
            (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.setTarget)(object);
            let components = document.getElementsByClassName("component");
            for (let i = 0; i < components.length; i++) {
                components[i].className = components[i].className.replace(" border-2", "");
            }
            evt.currentTarget.className += " border-2";
        });
        componentContainer.appendChild(newComponent);
        
        if(object.children.length > 0){
            displayComponent(treeLevel + 1, object.children);
        }
    })
}


function handleCameraView(node) {
    let epsilon = 0.001;
    
    //radius, roll, pitch
    let radius = parseFloat(cameraRadius.value)/10;
    let roll = (0,_structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(parseFloat(cameraRoll.value));
    let pitch = (0,_structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(parseFloat(cameraPitch.value));
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
    let val = parseFloat(cameraRadius.value);
    val /= 10;
    
    handleCameraView(_index_js__WEBPACK_IMPORTED_MODULE_0__.target);
    // update camera radius value
    document.getElementById('camera-radius-slider-value').textContent = val;
})
cameraRoll.addEventListener('input', function(){
    
    handleCameraView(_index_js__WEBPACK_IMPORTED_MODULE_0__.target)
    document.getElementById('camera-roll-slider-value').textContent = cameraRoll.value;
})
cameraPitch.addEventListener('input', function(){

    handleCameraView(_index_js__WEBPACK_IMPORTED_MODULE_0__.target)
    document.getElementById('camera-pitch-slider-value').textContent = cameraPitch.value;
})

//theta, phi
cameraTheta.addEventListener('input', function(){
    let theta = (0,_structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(parseFloat(cameraTheta.value))
    ;(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.setObliqueTheta)(theta);
    document.getElementById('camera-theta-slider-value').textContent = cameraTheta.value;
})

cameraPhi.addEventListener('input', function(){
    let phi = (0,_structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(parseFloat(cameraPhi.value))
    ;(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.setObliquePhi)(phi);
    document.getElementById('camera-phi-slider-value').textContent = cameraPhi.value;
})






/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setObliquePhi: () => (/* binding */ setObliquePhi),
/* harmony export */   setObliqueTheta: () => (/* binding */ setObliqueTheta),
/* harmony export */   setProjectionType: () => (/* binding */ setProjectionType),
/* harmony export */   setTarget: () => (/* binding */ setTarget),
/* harmony export */   target: () => (/* binding */ target)
/* harmony export */ });
/* harmony import */ var _structs_model_pig_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./structs/model/pig.js */ "./src/structs/model/pig.js");
/* harmony import */ var _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./structs/math/Mat4.js */ "./src/structs/math/Mat4.js");
/* harmony import */ var _structs_math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./structs/math/Vec3.js */ "./src/structs/math/Vec3.js");
/* harmony import */ var _structs_math_Vec4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./structs/math/Vec4.js */ "./src/structs/math/Vec4.js");
/* harmony import */ var _utils_Camera_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/Camera.js */ "./src/utils/Camera.js");
/* harmony import */ var _handler_eventHandler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handler/eventHandler.js */ "./src/handler/eventHandler.js");









const canvas = document.getElementById("gl-canvas");
const gl = canvas.getContext("webgl");


const vertexShaderSource = document.getElementById("vertex-shader-3d")?.textContent;
const fragmentShaderSource = document.getElementById("fragment-shader-3d")?.textContent;

// state
var objects;
let target;
var lighting;
var lightDirection;
var texture;
var projection_type;
function setProjectionType(newProjection) {
  projection_type = newProjection;
}
var factor;
var oblique_theta;
function setObliqueTheta(newTheta) {
  oblique_theta = newTheta;
}
var oblique_phi;
function setObliquePhi(newPhi) {
  oblique_phi = newPhi;
}
var normalizeLight;
var worldViewProjectionMatrix;


initState();

function initState() {
    objects = _structs_model_pig_js__WEBPACK_IMPORTED_MODULE_0__["default"];
    focus = null;
    lighting = false;
    lightDirection = _structs_math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromArray([0,0,1])
    texture = "none";
    projection_type = "orthographic";
    factor = 0.0;
    oblique_theta = 90.0;
    oblique_phi = 90.0;
    setDefaultRotation(objects)
    ;(0,_handler_eventHandler_js__WEBPACK_IMPORTED_MODULE_5__.displayComponent)(0, objects);
    // initAnimation(objects);

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
    for(let object of objects){
        object.transform.rotate = object.transform.rotate.map((val) => degToRad(val));
        if(object.children.length > 0){
            setDefaultRotation(object.children);
        }
    }

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



    objects[0].setWorldMtx(null);
    normalizeLight = _structs_math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__["default"].unitVector(lightDirection).asArray()
    renderLoop(objects);
    
  window.requestAnimFrame(render);
    
}


function setProjectionMatrix(matrix, object) {
    // const camera = setCamera(object);
    const projectionView = _utils_Camera_js__WEBPACK_IMPORTED_MODULE_4__["default"].projectionMatrix(projection_type, 
                                                    degToRad(45), 
                                                    (canvas.width / canvas.height), 
                                                    object.viewMatrix.near, 
                                                    object.viewMatrix.far,
                                                    oblique_theta,
                                                    oblique_phi)
    const viewMatrix = _utils_Camera_js__WEBPACK_IMPORTED_MODULE_4__["default"].viewMatrix(object.viewMatrix.camera, object.viewMatrix.lookAt, object.viewMatrix.up);
    var viewProjectionMatrix = _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["default"].multiply(projectionView, viewMatrix);
    if (factor < 0.01) {
        factor = 0.01;
    }

    if (projection_type === "perspective") {
        viewProjectionMatrix = _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["default"].multiply(
            _utils_Camera_js__WEBPACK_IMPORTED_MODULE_4__["default"].makeZToWMatrix(factor),
            viewProjectionMatrix,
        );
    }

    worldViewProjectionMatrix = _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["default"].multiply(viewProjectionMatrix, matrix);

    return worldViewProjectionMatrix;
}

function setTarget(value) {
  target = value;
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
    
    static transpose(a) {
        if (!a) {
            return null; // or return a default matrix or handle the null case appropriately
        }
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
        let res = Mat4.getEmpty();
        for (let i = 0; i < 4; ++i) {
            for (let j = 0; j < 4; ++j) {
                res[i * 4 + j] = _Vec4_js__WEBPACK_IMPORTED_MODULE_0__["default"].dot(Mat4.getRow(b, i), Mat4.getColumn(a, j));
            }
        }
    
        return res;
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
        return new _Vec4_js__WEBPACK_IMPORTED_MODULE_0__["default"](matrix[row * 4], matrix[row * 4 + 1], matrix[row * 4 + 2], matrix[row * 4 + 3]);
    }

    static getColumn(matrix, column){
        return new _Vec4_js__WEBPACK_IMPORTED_MODULE_0__["default"](matrix[column], matrix[column + 4], matrix[column + 8], matrix[column + 12]);
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

    static sub(a, b){
        return new Vec3(a.x - b.x, a.y - b.y, a.z - b.z);
    }

    static dot(a, b){
        return a.x * b.x + a.y * b.y + a.z * b.z;
    }

    static cross(a, b){
        return new Vec3(a.z * b.y - a.y * b.z, a.x * b.z - a.z * b.x ,a.y * b.x - a.x * b.y);
    }

    static norm(a){
        return Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z);
    }

    static unitVector(a){
        let norm = Vec3.norm(a);
        return new Vec3(a.x / norm, a.y / norm, a.z / norm);
    }
    

    asArray(){  
        return [this.x, this.y, this.z];
    }

    static fromArray(array){
        return new Vec3(array[0], array[1], array[2]);
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
        let res = a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w
        return res;
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

    static fromArray(array){
        return new Vec4(array[0], array[1], array[2], array[3]);
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

/***/ "./src/structs/model/pig.js":
/*!**********************************!*\
  !*** ./src/structs/model/pig.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node.js */ "./src/structs/node.js");


const pig = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
pig.name = "pig";
pig.model = boxModel(1, 1.5, 1, [0, 0, 0]);
pig.transform = {
  translate: [0, 0, 0],
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
pig.pickedColor = [0.921568627,0.568627451,0.898039216],
pig.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
pig.animation = {
  isAnimate: false,
  degAnimate: 0.1,
};

const head = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
head.name = "head";
head.model = boxModel(1, 1, 1.2, [-1, 0.6, 0]);
head.transform = {
    translate: [0, 0, 0],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
head.pickedColor = [0.921568627,0.568627451,0.898039216],
head.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
head.animation = {
    isAnimate: false,
    degAnimate: 0.1,
};

const whiteRightEye = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
whiteRightEye.name = "whiteRightEye";
whiteRightEye.model = boxModel(0.2, 0.2, 0.2, [-1, 0.6, 0]);
whiteRightEye.transform = {
    translate: [-0.5, 0.2, 0.4],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
whiteRightEye.pickedColor = [0.99,0.99,0.99],
whiteRightEye.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
whiteRightEye.animation = {
    isAnimate: false,
    degAnimate: 0.1,
};

const whiteLeftEye = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
whiteLeftEye.name = "whiteLeftEye";
whiteLeftEye.model = boxModel(0.2, 0.2, 0.2, [-1, 0.6, 0]);
whiteLeftEye.transform = {
    translate: [-0.5, 0.2, -0.4],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
whiteLeftEye.pickedColor = [0.99,0.99,0.99],
whiteLeftEye.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
whiteLeftEye.animation = {
    isAnimate: false,
    degAnimate: 0.1,
};

const blackRightEye = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
blackRightEye.name = "blackRightEye";
blackRightEye.model = boxModel(0.2, 0.2, 0.2, [-1, 0.6, 0]);
blackRightEye.transform = {
    translate: [0.05, 0, 0.075],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
blackRightEye.pickedColor = [0,0,0],
blackRightEye.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
blackRightEye.animation = {
    isAnimate: false,
    degAnimate: 0.1,
};

const blackLeftEye = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
blackLeftEye.name = "blackLeftEye";
blackLeftEye.model = boxModel(0.2, 0.2, 0.2, [-1, 0.6, 0]);
blackLeftEye.transform = {
    translate: [0.05, 0, -0.075],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
blackLeftEye.pickedColor = [0,0,0],
blackLeftEye.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
blackLeftEye.animation = {
    isAnimate: false,
    degAnimate: 0.1,
};

const nose = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
nose.name = "nose";
nose.model = boxModel(0.2, 0.2, 0.4, [-1.5, 0.55, 0]);
nose.transform = {
    translate: [0.05, 0, 0],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
nose.pickedColor = [0.768627451,0.376470588, 0.745098039],
nose.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
nose.animation = {
    isAnimate: false,
    degAnimate: 0.1,
};

const rightHole = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
rightHole.name = "rightHole";
rightHole.model = boxModel(0.15, 0.2, 0.1, [-1.6, 0.55, 0]);
rightHole.transform = {
    translate: [0.05, 0, 0.1],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
rightHole.pickedColor = [0.921568627,0.568627451,0.898039216],
rightHole.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
rightHole.animation = {
    isAnimate: false,
    degAnimate: 0.1,
};

const leftHole = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
leftHole.name = "leftHole";
leftHole.model = boxModel(0.15, 0.2, 0.1, [-1.6, 0.55, 0]);
leftHole.transform = {
    translate: [0.05, 0, -0.1],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
leftHole.pickedColor = [0.921568627,0.568627451,0.898039216],
leftHole.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
leftHole.animation = {
    isAnimate: false,
    degAnimate: 0.1,
};

const rightFrontLeg = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
rightFrontLeg.name = "rightFrontLeg";
rightFrontLeg.model = boxModel(0.5, 0.2, 0.2, [0.1, 0, 0.15]);
rightFrontLeg.transform = {
    translate: [-0.6, -0.5, -0.4],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
rightFrontLeg.pickedColor = [0.768627451,0.376470588, 0.745098039],
rightFrontLeg.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
rightFrontLeg.animation = {
    isAnimate: false,
    degAnimate: 0.1,
};

const leftFrontLeg = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
leftFrontLeg.name = "leftFrontLeg";
leftFrontLeg.model = boxModel(0.5, 0.2, 0.2, [0.1, 0, -0.15]);
leftFrontLeg.transform = {
    translate: [-0.6, -0.5, 0.4],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
leftFrontLeg.pickedColor = [0.768627451,0.376470588, 0.745098039],
leftFrontLeg.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
leftFrontLeg.animation = {
    isAnimate: false,
    degAnimate: 0.1,
};

const rightRearLeg = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
rightRearLeg.name = "rightRearLeg";
rightRearLeg.model = boxModel(0.5, 0.2, 0.2, [0.5, 0, 0.15]);
rightRearLeg.transform = {
    translate: [0, -0.5, -0.4],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
rightRearLeg.pickedColor = [0.768627451,0.376470588, 0.745098039],
rightRearLeg.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
rightRearLeg.animation = {
    isAnimate: false,
    degAnimate: 0.1,
};

const leftRearLeg = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
leftRearLeg.name = "leftRearLeg";
leftRearLeg.model = boxModel(0.5, 0.2, 0.2, [0.5, 0, -0.15]);
leftRearLeg.transform = {
    translate: [0, -0.5, 0.4],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
leftRearLeg.pickedColor = [0.768627451,0.376470588, 0.745098039],
leftRearLeg.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
leftRearLeg.animation = {
    isAnimate: false,
    degAnimate: 0.1,
};


head.setParent(pig);
whiteRightEye.setParent(head);
whiteLeftEye.setParent(head);
blackRightEye.setParent(whiteRightEye);
blackLeftEye.setParent(whiteLeftEye);
nose.setParent(head);
rightHole.setParent(nose);
leftHole.setParent(nose);
rightFrontLeg.setParent(pig);
leftFrontLeg.setParent(pig);
rightRearLeg.setParent(pig);
leftRearLeg.setParent(pig);

var model = [
    pig
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (model);
  

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
  

/***/ }),

/***/ "./src/utils/Camera.js":
/*!*****************************!*\
  !*** ./src/utils/Camera.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Camera)
/* harmony export */ });
/* harmony import */ var _structs_math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../structs/math/Vec3.js */ "./src/structs/math/Vec3.js");
/* harmony import */ var _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../structs/math/Mat4.js */ "./src/structs/math/Mat4.js");



class Camera{
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


    static projectionPerspective(fov, aspect, near, far){
        const f = 1.0 / Math.tan(fov / 2)
        const rangeInv = 1 / (near - far)

        return [f / aspect, 0, 0, 0,
                0, f, 0, 0,
                0, 0, (near + far) * rangeInv, -1,
                0, 0, near * far * rangeInv * 2, 0]
    }

    static projectionOblique(theta, phi){

        var t = Math.tan(theta)
        t = t == 0 ? 0.00001 : t
        var p = Math.tan(phi)
        p = p == 0 ? 0.00001 : p
        return [1, 0, 0, 0,
                0, 1, 0, 0,
                -1/t, -1/p, 1, 0,
                0, 0, 0, 1]
    }

    static lookDirection(eye, center, up){
        // normalize each array
        // change as Vec3 from array
        let _eye = _structs_math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromArray(eye)
        let _center = _structs_math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromArray(center)
        let _up = _structs_math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromArray(up)
    


        const f = _structs_math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["default"].unitVector(_structs_math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["default"].sub(_eye, _center)) // zAxis
        const s = _structs_math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["default"].unitVector(_structs_math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["default"].cross(f, _up)) // xAxis
        const u = _structs_math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["default"].unitVector(_structs_math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["default"].cross(s, f))

        return [s.x, s.y, s.z, 0,
                u.x, u.y, u.z, 0,
                f.x, f.y, f.z, 0,
                eye[0], eye[1], eye[2], 1]

    }

    static makeZToWMatrix(fudgeFactor){
        return [1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                0, 0, fudgeFactor, 1]
    }

    static projectionMatrix(projection_type, _fov, _aspect,_near, _far, theta = 90, phi = 90){
        const aspect = _aspect;
        const fov = _fov;
        const left = -2;
        const right = 2;
        const bottom = -2;
        const top = 2;
        const farOrtho = _far;
        const nearOrtho = -farOrtho;
    
        switch (projection_type) {
            case "orthographic":
                return Camera.projectionOrtographic(left, right, bottom, top, nearOrtho, farOrtho)
            case "oblique":
                return _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["default"].multiply(
                    Camera.projectionOblique(theta, phi),
                    Camera.projectionOrtographic(left, right, bottom, top, nearOrtho, farOrtho)
                );
            case "perspective":
                return Camera.projectionPerspective(
                    fov,
                    aspect,
                    _near,
                    _far
                );
            default:
                return Camera.projectionOrtographic(left, right, bottom, top, nearOrtho, farOrtho)
        }
        
    }

    static viewMatrix(orientation, lookAt, up){
        let [roll, pitch, radius] = orientation

        // roll, pitch, radius
        var cameraMatrix = _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["default"].multiply(
            _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["default"].multiply(
                _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["default"].rotateY(pitch),
                _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["default"].rotateX(roll)),
            _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["default"].translate(0, 0, radius)
        )

        var cameraPosition = [
            cameraMatrix[12],
            cameraMatrix[13],
            cameraMatrix[14]
        ]

        var cameraMatrix = Camera.lookDirection(cameraPosition, lookAt, up)

        var viewMatrix = _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["default"].inverse(cameraMatrix)

        return viewMatrix
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw2REFBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZEQUFJO0FBQzFCO0FBQ0EsTUFBTSw2REFBSTtBQUNWO0FBQ0E7QUFDQSxzQkFBc0IsNkRBQUk7QUFDMUI7QUFDQSxNQUFNLDZEQUFJO0FBQ1Y7QUFDQTtBQUNBLHNCQUFzQiw2REFBSTtBQUMxQjtBQUNBLE1BQU0sNkRBQUk7QUFDVjtBQUNBO0FBQ0Esc0JBQXNCLDZEQUFJO0FBQzFCO0FBQ0EsTUFBTSw2REFBSTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkRBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkRBQUk7QUFDL0IsWUFBWSw2REFBSTtBQUNoQixnQkFBZ0IsNkRBQUk7QUFDcEIsZ0JBQWdCLDZEQUFJO0FBQ3BCLFlBQVksNkRBQUk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkRBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQzNIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL2hhbmRsZXIvZXZlbnRIYW5kbGVyLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3N0cnVjdHMvbWF0aC9NYXQ0LmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3N0cnVjdHMvbWF0aC9WZWMzLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3N0cnVjdHMvbWF0aC9WZWM0LmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3N0cnVjdHMvbWF0aC9tYXRoVXRpbHMuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tb2RlbC9waWcuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9ub2RlLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3V0aWxzL0NhbWVyYS5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YXJnZXQsIHNldFByb2plY3Rpb25UeXBlLCBzZXRPYmxpcXVlUGhpLCBzZXRPYmxpcXVlVGhldGEsIHNldFRhcmdldH0gZnJvbSBcIi4uL2luZGV4LmpzXCJcclxuaW1wb3J0IHsgZGVnVG9SYWQgfSBmcm9tIFwiLi4vc3RydWN0cy9tYXRoL21hdGhVdGlscy5qc1wiO1xyXG5cclxuY29uc3QgdHJhbnNsYXRpb25YID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zbGF0aW9uLXgtc2xpZGVyJyk7XHJcbmNvbnN0IHRyYW5zbGF0aW9uWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2xhdGlvbi15LXNsaWRlcicpO1xyXG5jb25zdCB0cmFuc2xhdGlvblogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNsYXRpb24tei1zbGlkZXInKTtcclxuY29uc3QgdHJhbnNsYXRhaW9uWFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zbGF0aW9uLXgtc2xpZGVyLXZhbHVlJyk7XHJcbmNvbnN0IHRyYW5zbGF0YWlvbllWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2xhdGlvbi15LXNsaWRlci12YWx1ZScpO1xyXG5jb25zdCB0cmFuc2xhdGFpb25aVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNsYXRpb24tei1zbGlkZXItdmFsdWUnKTtcclxuLy9yb3RhdGlvblxyXG5jb25zdCByb3RhdGlvblggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm90YXRpb24teC1zbGlkZXInKTtcclxuY29uc3Qgcm90YXRpb25ZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uLXktc2xpZGVyJyk7XHJcbmNvbnN0IHJvdGF0aW9uWiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGlvbi16LXNsaWRlcicpO1xyXG5jb25zdCByb3RhdGlvblhWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGlvbi14LXNsaWRlci12YWx1ZScpO1xyXG5jb25zdCByb3RhdGlvbllWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGlvbi15LXNsaWRlci12YWx1ZScpO1xyXG5jb25zdCByb3RhdGlvblpWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGlvbi16LXNsaWRlci12YWx1ZScpO1xyXG4vL3NjYWxhdGlvblxyXG5jb25zdCBzY2FsYXRpb25YID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjYWxhdGlvbi14LXNsaWRlcicpO1xyXG5jb25zdCBzY2FsYXRpb25ZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjYWxhdGlvbi15LXNsaWRlcicpO1xyXG5jb25zdCBzY2FsYXRpb25aID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjYWxhdGlvbi16LXNsaWRlcicpO1xyXG5jb25zdCBzY2FsYXRpb25YVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NhbGF0aW9uLXgtc2xpZGVyLXZhbHVlJyk7XHJcbmNvbnN0IHNjYWxhdGlvbllWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY2FsYXRpb24teS1zbGlkZXItdmFsdWUnKTtcclxuY29uc3Qgc2NhbGF0aW9uWlZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjYWxhdGlvbi16LXNsaWRlci12YWx1ZScpO1xyXG4vLyBjb21wb25lbnQgY29udGFpbmVyXHJcbmNvbnN0IGNvbXBvbmVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wb25lbnQtY29udGFpbmVyJyk7XHJcbi8vY2FtZXJhXHJcbmNvbnN0IG9ydGhvZ3JhcGhpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcnRob2dyYXBoaWMnKTtcclxuY29uc3Qgb2JsaXF1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvYmxpcXVlJyk7XHJcbmNvbnN0IHBlcnNwZWN0aXZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BlcnNwZWN0aXZlJyk7XHJcbi8vIGNhbWVyYSByYWRpdXNcclxuY29uc3QgY2FtZXJhUmFkaXVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1yYWRpdXMtc2xpZGVyJyk7XHJcbi8vIGNhbWVyYSByb2xsLXBpdGNoXHJcbmNvbnN0IGNhbWVyYVJvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXJvbGwtc2xpZGVyJyk7XHJcbmNvbnN0IGNhbWVyYVBpdGNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1waXRjaC1zbGlkZXInKTtcclxuLy8gY2FtZXJhIHRoZXRhLXBoaVxyXG5jb25zdCBjYW1lcmFUaGV0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtdGhldGEtc2xpZGVyJyk7XHJcbmNvbnN0IGNhbWVyYVBoaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcGhpLXNsaWRlcicpO1xyXG4vLyBzZXQgb3J0aG9ncmFwaGljIGFzIGRlZmF1bHQgaW5wdXQgcmFkaW8gYnV0dG9uXHJcbm9ydGhvZ3JhcGhpYy5jaGVja2VkID0gdHJ1ZTtcclxuLy8gZXZlbnQgbGlzdGVuZXJcclxudHJhbnNsYXRpb25YLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIHRhcmdldC50cmFuc2Zvcm0udHJhbnNsYXRlWzBdID0gKDIgKiB0cmFuc2xhdGlvblgudmFsdWUpIC8gMTAwO1xyXG4gICAgdHJhbnNsYXRhaW9uWFZhbHVlLnRleHRDb250ZW50ID0gdGFyZ2V0LnRyYW5zZm9ybS50cmFuc2xhdGVbMF07XHJcbn0pO1xyXG50cmFuc2xhdGlvblkuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgdGFyZ2V0LnRyYW5zZm9ybS50cmFuc2xhdGVbMV0gPSAoMiAqIHRyYW5zbGF0aW9uWS52YWx1ZSkgLyAxMDA7XHJcbiAgICB0cmFuc2xhdGFpb25ZVmFsdWUudGV4dENvbnRlbnQgPSB0YXJnZXQudHJhbnNmb3JtLnRyYW5zbGF0ZVsxXTtcclxufSk7XHJcbnRyYW5zbGF0aW9uWi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQudHJhbnNmb3JtLnRyYW5zbGF0ZVsyXSA9ICgyICogdHJhbnNsYXRpb25aLnZhbHVlKSAvIDEwMDtcclxuICAgIHRyYW5zbGF0YWlvblpWYWx1ZS50ZXh0Q29udGVudCA9IHRhcmdldC50cmFuc2Zvcm0udHJhbnNsYXRlWzJdO1xyXG59KTtcclxucm90YXRpb25YLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIHRhcmdldC50cmFuc2Zvcm0ucm90YXRlWzBdID0gZGVnVG9SYWQocm90YXRpb25YLnZhbHVlKTtcclxuICAgIHJvdGF0aW9uWFZhbHVlLnRleHRDb250ZW50ID0gcm90YXRpb25YLnZhbHVlO1xyXG59KVxyXG5yb3RhdGlvblkuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgdGFyZ2V0LnRyYW5zZm9ybS5yb3RhdGVbMV0gPSBkZWdUb1JhZChyb3RhdGlvblkudmFsdWUpO1xyXG4gICAgcm90YXRpb25ZVmFsdWUudGV4dENvbnRlbnQgPSByb3RhdGlvblkudmFsdWU7XHJcbn0pXHJcbnJvdGF0aW9uWi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQudHJhbnNmb3JtLnJvdGF0ZVsyXSA9IGRlZ1RvUmFkKHJvdGF0aW9uWi52YWx1ZSk7XHJcbiAgICByb3RhdGlvblpWYWx1ZS50ZXh0Q29udGVudCA9IHJvdGF0aW9uWi52YWx1ZTtcclxufSlcclxuc2NhbGF0aW9uWC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQudHJhbnNmb3JtLnNjYWxlWzBdID0gIHNjYWxhdGlvblgudmFsdWUgLyAyMDtcclxuICAgIHNjYWxhdGlvblhWYWx1ZS50ZXh0Q29udGVudCA9IHRhcmdldC50cmFuc2Zvcm0uc2NhbGVbMF07XHJcbn0pXHJcbnNjYWxhdGlvblkuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVsxXSA9ICBzY2FsYXRpb25ZLnZhbHVlIC8gMjA7XHJcbiAgICBzY2FsYXRpb25ZVmFsdWUudGV4dENvbnRlbnQgPSB0YXJnZXQudHJhbnNmb3JtLnNjYWxlWzFdO1xyXG59KVxyXG5zY2FsYXRpb25aLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIHRhcmdldC50cmFuc2Zvcm0uc2NhbGVbMl0gPSAgc2NhbGF0aW9uWi52YWx1ZSAvIDIwO1xyXG4gICAgc2NhbGF0aW9uWlZhbHVlLnRleHRDb250ZW50ID0gdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVsyXTtcclxufSlcclxuXHJcbi8vIGNhbWVyYVxyXG5vcnRob2dyYXBoaWMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgc2V0UHJvamVjdGlvblR5cGUoXCJvcnRob2dyYXBoaWNcIik7XHJcbn0pXHJcblxyXG5vYmxpcXVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIHNldFByb2plY3Rpb25UeXBlKFwib2JsaXF1ZVwiKTtcclxufSlcclxuXHJcbnBlcnNwZWN0aXZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIHNldFByb2plY3Rpb25UeXBlKFwicGVyc3BlY3RpdmVcIik7XHJcbn0pXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUNvbXBvbmVudCh0cmVlTGV2ZWwgPSAwLCBvYmplY3RzKXtcclxuICAgIG9iamVjdHMuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld0NvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcclxuICAgICAgICBuZXdDb21wb25lbnQuc3R5bGUgPSAncGFkZGluZy1sZWZ0OiAnICsgdHJlZUxldmVsKjEuNSArICdlbTsnO1xyXG4gICAgICAgIG5ld0NvbXBvbmVudC5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWF4LXctZml0IGNvbXBvbmVudFwiPiR7b2JqZWN0Lm5hbWV9PC9idXR0b24+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBsZXQgY3JlYXRlZEJ1dHRvbiA9IG5ld0NvbXBvbmVudC5xdWVyeVNlbGVjdG9yKCcuY29tcG9uZW50Jyk7XHJcbiAgICAgICAgY3JlYXRlZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgICAgICBzZXRUYXJnZXQob2JqZWN0KTtcclxuICAgICAgICAgICAgbGV0IGNvbXBvbmVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29tcG9uZW50XCIpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXBvbmVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudHNbaV0uY2xhc3NOYW1lID0gY29tcG9uZW50c1tpXS5jbGFzc05hbWUucmVwbGFjZShcIiBib3JkZXItMlwiLCBcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBldnQuY3VycmVudFRhcmdldC5jbGFzc05hbWUgKz0gXCIgYm9yZGVyLTJcIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb21wb25lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q29tcG9uZW50KTtcclxuICAgICAgICBcclxuICAgICAgICBpZihvYmplY3QuY2hpbGRyZW4ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIGRpc3BsYXlDb21wb25lbnQodHJlZUxldmVsICsgMSwgb2JqZWN0LmNoaWxkcmVuKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2FtZXJhVmlldyhub2RlKSB7XHJcbiAgICBsZXQgZXBzaWxvbiA9IDAuMDAxO1xyXG4gICAgXHJcbiAgICAvL3JhZGl1cywgcm9sbCwgcGl0Y2hcclxuICAgIGxldCByYWRpdXMgPSBwYXJzZUZsb2F0KGNhbWVyYVJhZGl1cy52YWx1ZSkvMTA7XHJcbiAgICBsZXQgcm9sbCA9IGRlZ1RvUmFkKHBhcnNlRmxvYXQoY2FtZXJhUm9sbC52YWx1ZSkpO1xyXG4gICAgbGV0IHBpdGNoID0gZGVnVG9SYWQocGFyc2VGbG9hdChjYW1lcmFQaXRjaC52YWx1ZSkpO1xyXG5ub2RlLnZpZXdNYXRyaXguY2FtZXJhID0gW1xyXG4gICAgcm9sbCxcclxuICAgIHBpdGNoLFxyXG4gICAgcmFkaXVzID09IDAgPyBlcHNpbG9uIDogcmFkaXVzLCAgXHJcbl07XHJcbmZvcihsZXQgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbil7XHJcbiAgICBoYW5kbGVDYW1lcmFWaWV3KGNoaWxkKTtcclxufVxyXG59XHJcbmNhbWVyYVJhZGl1cy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgdmFsID0gcGFyc2VGbG9hdChjYW1lcmFSYWRpdXMudmFsdWUpO1xyXG4gICAgdmFsIC89IDEwO1xyXG4gICAgXHJcbiAgICBoYW5kbGVDYW1lcmFWaWV3KHRhcmdldCk7XHJcbiAgICAvLyB1cGRhdGUgY2FtZXJhIHJhZGl1cyB2YWx1ZVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1yYWRpdXMtc2xpZGVyLXZhbHVlJykudGV4dENvbnRlbnQgPSB2YWw7XHJcbn0pXHJcbmNhbWVyYVJvbGwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgXHJcbiAgICBoYW5kbGVDYW1lcmFWaWV3KHRhcmdldClcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcm9sbC1zbGlkZXItdmFsdWUnKS50ZXh0Q29udGVudCA9IGNhbWVyYVJvbGwudmFsdWU7XHJcbn0pXHJcbmNhbWVyYVBpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBoYW5kbGVDYW1lcmFWaWV3KHRhcmdldClcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcGl0Y2gtc2xpZGVyLXZhbHVlJykudGV4dENvbnRlbnQgPSBjYW1lcmFQaXRjaC52YWx1ZTtcclxufSlcclxuXHJcbi8vdGhldGEsIHBoaVxyXG5jYW1lcmFUaGV0YS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgdGhldGEgPSBkZWdUb1JhZChwYXJzZUZsb2F0KGNhbWVyYVRoZXRhLnZhbHVlKSlcclxuICAgIHNldE9ibGlxdWVUaGV0YSh0aGV0YSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXRoZXRhLXNsaWRlci12YWx1ZScpLnRleHRDb250ZW50ID0gY2FtZXJhVGhldGEudmFsdWU7XHJcbn0pXHJcblxyXG5jYW1lcmFQaGkuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgbGV0IHBoaSA9IGRlZ1RvUmFkKHBhcnNlRmxvYXQoY2FtZXJhUGhpLnZhbHVlKSlcclxuICAgIHNldE9ibGlxdWVQaGkocGhpKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcGhpLXNsaWRlci12YWx1ZScpLnRleHRDb250ZW50ID0gY2FtZXJhUGhpLnZhbHVlO1xyXG59KVxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IG1vZGVsIGZyb20gXCIuL3N0cnVjdHMvbW9kZWwvcGlnLmpzXCI7XHJcbmltcG9ydCBNYXQ0IGZyb20gXCIuL3N0cnVjdHMvbWF0aC9NYXQ0LmpzXCI7XHJcbmltcG9ydCBWZWMzIGZyb20gXCIuL3N0cnVjdHMvbWF0aC9WZWMzLmpzXCI7XHJcbmltcG9ydCBWZWM0IGZyb20gXCIuL3N0cnVjdHMvbWF0aC9WZWM0LmpzXCI7XHJcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4vdXRpbHMvQ2FtZXJhLmpzXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlDb21wb25lbnQgfSBmcm9tIFwiLi9oYW5kbGVyL2V2ZW50SGFuZGxlci5qc1wiO1xyXG5cclxuXHJcblxyXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdsLWNhbnZhc1wiKTtcclxuY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xyXG5cclxuXHJcbmNvbnN0IHZlcnRleFNoYWRlclNvdXJjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVydGV4LXNoYWRlci0zZFwiKT8udGV4dENvbnRlbnQ7XHJcbmNvbnN0IGZyYWdtZW50U2hhZGVyU291cmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmFnbWVudC1zaGFkZXItM2RcIik/LnRleHRDb250ZW50O1xyXG5cclxuLy8gc3RhdGVcclxudmFyIG9iamVjdHM7XHJcbmV4cG9ydCBsZXQgdGFyZ2V0O1xyXG52YXIgbGlnaHRpbmc7XHJcbnZhciBsaWdodERpcmVjdGlvbjtcclxudmFyIHRleHR1cmU7XHJcbnZhciBwcm9qZWN0aW9uX3R5cGU7XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRQcm9qZWN0aW9uVHlwZShuZXdQcm9qZWN0aW9uKSB7XHJcbiAgcHJvamVjdGlvbl90eXBlID0gbmV3UHJvamVjdGlvbjtcclxufVxyXG52YXIgZmFjdG9yO1xyXG52YXIgb2JsaXF1ZV90aGV0YTtcclxuZXhwb3J0IGZ1bmN0aW9uIHNldE9ibGlxdWVUaGV0YShuZXdUaGV0YSkge1xyXG4gIG9ibGlxdWVfdGhldGEgPSBuZXdUaGV0YTtcclxufVxyXG52YXIgb2JsaXF1ZV9waGk7XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRPYmxpcXVlUGhpKG5ld1BoaSkge1xyXG4gIG9ibGlxdWVfcGhpID0gbmV3UGhpO1xyXG59XHJcbnZhciBub3JtYWxpemVMaWdodDtcclxudmFyIHdvcmxkVmlld1Byb2plY3Rpb25NYXRyaXg7XHJcblxyXG5cclxuaW5pdFN0YXRlKCk7XHJcblxyXG5mdW5jdGlvbiBpbml0U3RhdGUoKSB7XHJcbiAgICBvYmplY3RzID0gbW9kZWw7XHJcbiAgICBmb2N1cyA9IG51bGw7XHJcbiAgICBsaWdodGluZyA9IGZhbHNlO1xyXG4gICAgbGlnaHREaXJlY3Rpb24gPSBWZWMzLmZyb21BcnJheShbMCwwLDFdKVxyXG4gICAgdGV4dHVyZSA9IFwibm9uZVwiO1xyXG4gICAgcHJvamVjdGlvbl90eXBlID0gXCJvcnRob2dyYXBoaWNcIjtcclxuICAgIGZhY3RvciA9IDAuMDtcclxuICAgIG9ibGlxdWVfdGhldGEgPSA5MC4wO1xyXG4gICAgb2JsaXF1ZV9waGkgPSA5MC4wO1xyXG4gICAgc2V0RGVmYXVsdFJvdGF0aW9uKG9iamVjdHMpXHJcbiAgICBkaXNwbGF5Q29tcG9uZW50KDAsIG9iamVjdHMpO1xyXG4gICAgLy8gaW5pdEFuaW1hdGlvbihvYmplY3RzKTtcclxuXHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBpZighZ2wpe1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIldlYkdMIG5vdCBzdXBwb3J0ZWRcIik7XHJcbiAgICB9XHJcbiAgICB0YXJnZXQgPSBvYmplY3RzWzBdO1xyXG5cclxuXHJcbiAgICByZW5kZXIoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RGVmYXVsdFN0YXRlKG9iamVjdHMpIHtcclxuICAgIG9iamVjdHMuZm9yRWFjaChvYmplY3QgPT4ge1xyXG4gICAgICAgIGlmICghb2JqZWN0Lm1vZGVsLmNvbG9ycykge1xyXG4gICAgICAgICAgICBpZiAoIW9iamVjdC5waWNrZWRDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0Lm1vZGVsLmNvbG9ycyA9IGdlbmVyYXRlQ29sb3JzKG9iamVjdC5tb2RlbC52ZXJ0aWNlcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QubW9kZWwuY29sb3JzID0gZ2VuZXJhdGVDb2xvcnMoXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Lm1vZGVsLnZlcnRpY2VzLFxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5waWNrZWRDb2xvclxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgaWYgKCFvYmplY3QucHJvZ3JhbSAmJiAhbGlnaHRpbmcpIHtcclxuICAgICAgICAgICAgb2JqZWN0LnByb2dyYW0gPSBjcmVhdGVTaGFkZXJQcm9ncmFtKFxyXG4gICAgICAgICAgICAgICAgZ2wsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UsXHJcbiAgICAgICAgICAgICAgICBmcmFnbWVudFNoYWRlclNvdXJjZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgLy8gICBpZiAob2JqZWN0LmFuaW1hdGlvbi5pc09iamVjdEFuaW1hdGUgJiYgb2JqZWN0LmFuaW1hdGlvbi5hbmltYXRlKSB7XHJcbiAgICAgICAgLy8gICAgIG9iamVjdC50cmFuc2Zvcm0gPSBvYmplY3QuYW5pbWF0aW9uLmFuaW1hdGVbY291bnRlciAlIGZwc107XHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgLy8gb2JqZWN0LnRyYW5zZm9ybSA9IG9iamVjdC5hbmltYXRpb24uYW5pbWF0ZVtjb3VudGVyICUgZnBzXTtcclxuICAgICAgICBvYmplY3QubG9jYWxNYXRyaXggPSBzZXRUcmFuc2Zvcm0ob2JqZWN0KTtcclxuICAgICAgICBpZiAob2JqZWN0LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc2V0RGVmYXVsdFN0YXRlKG9iamVjdC5jaGlsZHJlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VHJhbnNmb3JtKG9iamVjdCkge1xyXG4gICAgLyogU2V0dXAgdHJhbnNmb3JtIG1hdHJpeCAqL1xyXG5cclxuICAgIHZhciB0cmFuc2Zvcm1NYXRyaXggPSBNYXQ0LnRyYW5zbGF0ZShcclxuICAgICAgb2JqZWN0LnRyYW5zZm9ybS50cmFuc2xhdGVbMF0sXHJcbiAgICAgIG9iamVjdC50cmFuc2Zvcm0udHJhbnNsYXRlWzFdLFxyXG4gICAgICBvYmplY3QudHJhbnNmb3JtLnRyYW5zbGF0ZVsyXVxyXG4gICAgKTtcclxuICAgIFxyXG4gICAgdHJhbnNmb3JtTWF0cml4ID0gTWF0NC5tdWx0aXBseShcclxuICAgICAgdHJhbnNmb3JtTWF0cml4LFxyXG4gICAgICBNYXQ0LnJvdGF0ZVgob2JqZWN0LnRyYW5zZm9ybS5yb3RhdGVbMF0pXHJcbiAgICApO1xyXG4gIFxyXG4gICAgdHJhbnNmb3JtTWF0cml4ID0gTWF0NC5tdWx0aXBseShcclxuICAgICAgdHJhbnNmb3JtTWF0cml4LFxyXG4gICAgICBNYXQ0LnJvdGF0ZVkob2JqZWN0LnRyYW5zZm9ybS5yb3RhdGVbMV0pXHJcbiAgICApO1xyXG4gIFxyXG4gICAgdHJhbnNmb3JtTWF0cml4ID0gTWF0NC5tdWx0aXBseShcclxuICAgICAgdHJhbnNmb3JtTWF0cml4LFxyXG4gICAgICBNYXQ0LnJvdGF0ZVoob2JqZWN0LnRyYW5zZm9ybS5yb3RhdGVbMl0pXHJcbiAgICApO1xyXG4gIFxyXG4gICAgdHJhbnNmb3JtTWF0cml4ID0gTWF0NC5tdWx0aXBseShcclxuICAgICAgdHJhbnNmb3JtTWF0cml4LFxyXG4gICAgICBNYXQ0LnNjYWxlKFxyXG4gICAgICAgIG9iamVjdC50cmFuc2Zvcm0uc2NhbGVbMF0sXHJcbiAgICAgICAgb2JqZWN0LnRyYW5zZm9ybS5zY2FsZVsxXSxcclxuICAgICAgICBvYmplY3QudHJhbnNmb3JtLnNjYWxlWzJdXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgXHJcbiAgICByZXR1cm4gdHJhbnNmb3JtTWF0cml4O1xyXG4gIH1cclxuXHJcbmZ1bmN0aW9uIHNldERlZmF1bHRSb3RhdGlvbihvYmplY3RzKSB7XHJcbiAgICBmb3IobGV0IG9iamVjdCBvZiBvYmplY3RzKXtcclxuICAgICAgICBvYmplY3QudHJhbnNmb3JtLnJvdGF0ZSA9IG9iamVjdC50cmFuc2Zvcm0ucm90YXRlLm1hcCgodmFsKSA9PiBkZWdUb1JhZCh2YWwpKTtcclxuICAgICAgICBpZihvYmplY3QuY2hpbGRyZW4ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHNldERlZmF1bHRSb3RhdGlvbihvYmplY3QuY2hpbGRyZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckxvb3Aob2JqZWN0cykge1xyXG4gICAgb2JqZWN0cy5mb3JFYWNoKG9iamVjdCA9PiB7XHJcbiAgICAgICAgZ2wudXNlUHJvZ3JhbShvYmplY3QucHJvZ3JhbSk7XHJcbiAgICAgICAgdmFyIG1vZGVsTWF0cml4ID0gb2JqZWN0LmdldFdvcmxkTWF0cml4KCk7XHJcblxyXG4gICAgICAgIG9iamVjdC53b3JsZE1hdHJpeCA9IHNldFByb2plY3Rpb25NYXRyaXgob2JqZWN0LndvcmxkTWF0cml4LCBvYmplY3QpXHJcblxyXG5cclxuICAgICAgICB2YXIgYV9wb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkob2JqZWN0Lm1vZGVsLnZlcnRpY2VzLmZsYXQoMSkpO1xyXG4gICAgICAgIHZhciBhX25vcm1hbCA9IG5ldyBGbG9hdDMyQXJyYXkob2JqZWN0Lm1vZGVsLm5vcm1hbHMuZmxhdCgxKSk7XHJcbiAgICAgICAgdmFyIGFfY29sb3IgPSBuZXcgRmxvYXQzMkFycmF5KG9iamVjdC5tb2RlbC5jb2xvcnMuZmxhdCgxKSk7XHJcbiAgICAgICAgdmFyIGFfdGV4dHVyZSA9IG5ldyBGbG9hdDMyQXJyYXkob2JqZWN0Lm1vZGVsLnRleENvb3JkKTtcclxuICAgICAgICB2YXIgYV90YW5nZW50ID0gbmV3IEZsb2F0MzJBcnJheShvYmplY3QubW9kZWwudGFuZ2VudHMuZmxhdCgxKSk7XHJcbiAgICAgICAgdmFyIGFfYml0YW5nZW50ID0gbmV3IEZsb2F0MzJBcnJheShvYmplY3QubW9kZWwuYml0YW5nZW50cy5mbGF0KDEpKTtcclxuXHJcbiAgICAgICAgc2V0QXR0cihnbCwgb2JqZWN0LnByb2dyYW0sIGFfcG9zaXRpb24sIGFfbm9ybWFsLCBhX2NvbG9yLCBhX3RleHR1cmUsIGFfdGFuZ2VudCwgYV9iaXRhbmdlbnQpO1xyXG4gICAgICAgIHZhciB1bmlmb3JtcyA9IHtcclxuICAgICAgICAgICAgdVdvcmxkVmlld1Byb2plY3Rpb246IG9iamVjdC53b3JsZE1hdHJpeCxcclxuICAgICAgICAgICAgdVdvcmxkSW52ZXJzZVRyYW5zcG9zZTogb2JqZWN0LndvcmxkSW52ZXJzZU1hdHJpeCxcclxuICAgICAgICAgICAgdVJldmVyc2VMaWdodERpcmVjdGlvbjogbm9ybWFsaXplTGlnaHQsXHJcbiAgICAgICAgICAgIHVDb2xvcjogb2JqZWN0LnBpY2tlZENvbG9yLmNvbmNhdCgxLjApLFxyXG4gICAgICAgICAgICB1TW9kZWxNYXRyaXg6IG1vZGVsTWF0cml4LFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VW5pZm9ybXMoZ2wsIG9iamVjdC5wcm9ncmFtLCB1bmlmb3Jtcyk7XHJcblxyXG4gICAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVTLCAwLCBvYmplY3QubW9kZWwudmVydGljZXMubGVuZ3RoKTtcclxuICAgICAgICBpZiAob2JqZWN0LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmVuZGVyTG9vcChvYmplY3QuY2hpbGRyZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG53aW5kb3cucmVxdWVzdEFuaW1GcmFtZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICB3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyAxKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9KSgpO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gICAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcclxuICAgIGdsLmNsZWFyQ29sb3IoMS4wLCAxLjAsIDEuMCwgMS4wKTtcclxuICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcclxuXHJcbiAgICBnbC5lbmFibGUoZ2wuQ1VMTF9GQUNFKTtcclxuICAgIGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcclxuXHJcbiAgICBzZXREZWZhdWx0U3RhdGUob2JqZWN0cyk7XHJcblxyXG5cclxuXHJcbiAgICBvYmplY3RzWzBdLnNldFdvcmxkTXR4KG51bGwpO1xyXG4gICAgbm9ybWFsaXplTGlnaHQgPSBWZWMzLnVuaXRWZWN0b3IobGlnaHREaXJlY3Rpb24pLmFzQXJyYXkoKVxyXG4gICAgcmVuZGVyTG9vcChvYmplY3RzKTtcclxuICAgIFxyXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lKHJlbmRlcik7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldFByb2plY3Rpb25NYXRyaXgobWF0cml4LCBvYmplY3QpIHtcclxuICAgIC8vIGNvbnN0IGNhbWVyYSA9IHNldENhbWVyYShvYmplY3QpO1xyXG4gICAgY29uc3QgcHJvamVjdGlvblZpZXcgPSBDYW1lcmEucHJvamVjdGlvbk1hdHJpeChwcm9qZWN0aW9uX3R5cGUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVnVG9SYWQoNDUpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjYW52YXMud2lkdGggLyBjYW52YXMuaGVpZ2h0KSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3Qudmlld01hdHJpeC5uZWFyLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC52aWV3TWF0cml4LmZhcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ibGlxdWVfdGhldGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmxpcXVlX3BoaSlcclxuICAgIGNvbnN0IHZpZXdNYXRyaXggPSBDYW1lcmEudmlld01hdHJpeChvYmplY3Qudmlld01hdHJpeC5jYW1lcmEsIG9iamVjdC52aWV3TWF0cml4Lmxvb2tBdCwgb2JqZWN0LnZpZXdNYXRyaXgudXApO1xyXG4gICAgdmFyIHZpZXdQcm9qZWN0aW9uTWF0cml4ID0gTWF0NC5tdWx0aXBseShwcm9qZWN0aW9uVmlldywgdmlld01hdHJpeCk7XHJcbiAgICBpZiAoZmFjdG9yIDwgMC4wMSkge1xyXG4gICAgICAgIGZhY3RvciA9IDAuMDE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb2plY3Rpb25fdHlwZSA9PT0gXCJwZXJzcGVjdGl2ZVwiKSB7XHJcbiAgICAgICAgdmlld1Byb2plY3Rpb25NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICAgICAgICBDYW1lcmEubWFrZVpUb1dNYXRyaXgoZmFjdG9yKSxcclxuICAgICAgICAgICAgdmlld1Byb2plY3Rpb25NYXRyaXgsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB3b3JsZFZpZXdQcm9qZWN0aW9uTWF0cml4ID0gTWF0NC5tdWx0aXBseSh2aWV3UHJvamVjdGlvbk1hdHJpeCwgbWF0cml4KTtcclxuXHJcbiAgICByZXR1cm4gd29ybGRWaWV3UHJvamVjdGlvbk1hdHJpeDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFRhcmdldCh2YWx1ZSkge1xyXG4gIHRhcmdldCA9IHZhbHVlO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBWZWM0IGZyb20gXCIuL1ZlYzQuanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0NHtcclxuICAgIHN0YXRpYyBnZXRFbXB0eSgpe1xyXG4gICAgICAgIHJldHVybiBbMCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMF1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0SWRlbnRpdHkoKXtcclxuICAgICAgICByZXR1cm4gWzEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDFdO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgZ2V0VHJhbnNsYXRpb24oeCwgeSwgeil7XHJcbiAgICAgICAgcmV0dXJuIFsxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICB4LCB5LCB6LCAxXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0U2NhbGUoeCwgeSwgeil7XHJcbiAgICAgICAgcmV0dXJuIFt4LCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgeSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIHosIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAxXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Um90YXRpb25YKHRoZXRhKXtcclxuICAgICAgICByZXR1cm4gWzEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCBNYXRoLmNvcyh0aGV0YSksIC1NYXRoLnNpbih0aGV0YSksIDAsXHJcbiAgICAgICAgICAgICAgICAwLCBNYXRoLnNpbih0aGV0YSksIE1hdGguY29zKHRoZXRhKSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRSb3RhdGlvblkodGhldGEpe1xyXG4gICAgICAgIHJldHVybiBbTWF0aC5jb3ModGhldGEpLCAwLCBNYXRoLnNpbih0aGV0YSksIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgLU1hdGguc2luKHRoZXRhKSwgMCwgTWF0aC5jb3ModGhldGEpLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMV07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFJvdGF0aW9uWih0aGV0YSl7XHJcbiAgICAgICAgcmV0dXJuIFtNYXRoLmNvcyh0aGV0YSksIC1NYXRoLnNpbih0aGV0YSksIDAsIDAsXHJcbiAgICAgICAgICAgICAgICBNYXRoLnNpbih0aGV0YSksIE1hdGguY29zKHRoZXRhKSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAxXTtcclxuICAgIH0gICBcclxuICAgIFxyXG4gICAgc3RhdGljIHRyYW5zcG9zZShhKSB7XHJcbiAgICAgICAgaWYgKCFhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsOyAvLyBvciByZXR1cm4gYSBkZWZhdWx0IG1hdHJpeCBvciBoYW5kbGUgdGhlIG51bGwgY2FzZSBhcHByb3ByaWF0ZWx5XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIGFbMF0sIGFbNF0sIGFbOF0sIGFbMTJdLFxyXG4gICAgICAgICAgICBhWzFdLCBhWzVdLCBhWzldLCBhWzEzXSxcclxuICAgICAgICAgICAgYVsyXSwgYVs2XSwgYVsxMF0sIGFbMTRdLFxyXG4gICAgICAgICAgICBhWzNdLCBhWzddLCBhWzExXSwgYVsxNV1cclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpbnZlcnNlKGEpIHtcclxuICAgICAgICB2YXIgYTAwID0gYVswICogNCArIDBdO1xyXG4gICAgICAgIHZhciBhMDEgPSBhWzAgKiA0ICsgMV07XHJcbiAgICAgICAgdmFyIGEwMiA9IGFbMCAqIDQgKyAyXTtcclxuICAgICAgICB2YXIgYTAzID0gYVswICogNCArIDNdO1xyXG4gICAgICAgIHZhciBhMTAgPSBhWzEgKiA0ICsgMF07XHJcbiAgICAgICAgdmFyIGExMSA9IGFbMSAqIDQgKyAxXTtcclxuICAgICAgICB2YXIgYTEyID0gYVsxICogNCArIDJdO1xyXG4gICAgICAgIHZhciBhMTMgPSBhWzEgKiA0ICsgM107XHJcbiAgICAgICAgdmFyIGEyMCA9IGFbMiAqIDQgKyAwXTtcclxuICAgICAgICB2YXIgYTIxID0gYVsyICogNCArIDFdO1xyXG4gICAgICAgIHZhciBhMjIgPSBhWzIgKiA0ICsgMl07XHJcbiAgICAgICAgdmFyIGEyMyA9IGFbMiAqIDQgKyAzXTtcclxuICAgICAgICB2YXIgYTMwID0gYVszICogNCArIDBdO1xyXG4gICAgICAgIHZhciBhMzEgPSBhWzMgKiA0ICsgMV07XHJcbiAgICAgICAgdmFyIGEzMiA9IGFbMyAqIDQgKyAyXTtcclxuICAgICAgICB2YXIgYTMzID0gYVszICogNCArIDNdO1xyXG4gICAgICAgIHZhciBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTA7XHJcbiAgICAgICAgdmFyIGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMDtcclxuICAgICAgICB2YXIgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwO1xyXG4gICAgICAgIHZhciBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTE7XHJcbiAgICAgICAgdmFyIGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMTtcclxuICAgICAgICB2YXIgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyO1xyXG4gICAgICAgIHZhciBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzA7XHJcbiAgICAgICAgdmFyIGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMDtcclxuICAgICAgICB2YXIgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwO1xyXG4gICAgICAgIHZhciBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzE7XHJcbiAgICAgICAgdmFyIGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMTtcclxuICAgICAgICB2YXIgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyO1xyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XHJcbiAgICAgICAgdmFyIGRldCA9XHJcbiAgICAgICAgYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xyXG5cclxuICAgICAgICBpZiAoIWRldCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZXQgPSAxLjAgLyBkZXQ7XHJcblxyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIChhMTEgKiBiMTEgLSBhMTIgKiBiMTAgKyBhMTMgKiBiMDkpICogZGV0LFxyXG4gICAgICAgICAgICAoYTAyICogYjEwIC0gYTAxICogYjExIC0gYTAzICogYjA5KSAqIGRldCxcclxuICAgICAgICAgICAgKGEzMSAqIGIwNSAtIGEzMiAqIGIwNCArIGEzMyAqIGIwMykgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMjIgKiBiMDQgLSBhMjEgKiBiMDUgLSBhMjMgKiBiMDMpICogZGV0LFxyXG4gICAgICAgICAgICAoYTEyICogYjA4IC0gYTEwICogYjExIC0gYTEzICogYjA3KSAqIGRldCxcclxuICAgICAgICAgICAgKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMzIgKiBiMDIgLSBhMzAgKiBiMDUgLSBhMzMgKiBiMDEpICogZGV0LFxyXG4gICAgICAgICAgICAoYTIwICogYjA1IC0gYTIyICogYjAyICsgYTIzICogYjAxKSAqIGRldCxcclxuICAgICAgICAgICAgKGExMCAqIGIxMCAtIGExMSAqIGIwOCArIGExMyAqIGIwNikgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMDEgKiBiMDggLSBhMDAgKiBiMTAgLSBhMDMgKiBiMDYpICogZGV0LFxyXG4gICAgICAgICAgICAoYTMwICogYjA0IC0gYTMxICogYjAyICsgYTMzICogYjAwKSAqIGRldCxcclxuICAgICAgICAgICAgKGEyMSAqIGIwMiAtIGEyMCAqIGIwNCAtIGEyMyAqIGIwMCkgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMTEgKiBiMDcgLSBhMTAgKiBiMDkgLSBhMTIgKiBiMDYpICogZGV0LFxyXG4gICAgICAgICAgICAoYTAwICogYjA5IC0gYTAxICogYjA3ICsgYTAyICogYjA2KSAqIGRldCxcclxuICAgICAgICAgICAgKGEzMSAqIGIwMSAtIGEzMCAqIGIwMyAtIGEzMiAqIGIwMCkgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMjAgKiBiMDMgLSBhMjEgKiBiMDEgKyBhMjIgKiBiMDApICogZGV0LFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRyYW5zbGF0ZSAodHgsIHR5LCB0eikge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIDEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgIHR4LCB0eSwgdHosIDFcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybiBiICogYVxyXG4gICAgc3RhdGljIG11bHRpcGx5KGEsIGIpe1xyXG4gICAgICAgIGxldCByZXMgPSBNYXQ0LmdldEVtcHR5KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyArK2kpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyArK2opIHtcclxuICAgICAgICAgICAgICAgIHJlc1tpICogNCArIGpdID0gVmVjNC5kb3QoTWF0NC5nZXRSb3coYiwgaSksIE1hdDQuZ2V0Q29sdW1uKGEsIGopKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJvdGF0ZVgocmFkKSB7XHJcbiAgICAgICAgdmFyIHNpbiA9IE1hdGguc2luKHJhZCk7XHJcbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKHJhZCk7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgY29zLCBzaW4sIDAsXHJcbiAgICAgICAgICAgIDAsIC1zaW4sIGNvcywgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJvdGF0ZVkocmFkKSB7XHJcbiAgICAgICAgdmFyIHNpbiA9IE1hdGguc2luKHJhZCk7XHJcbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKHJhZCk7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgY29zLCAwLCAtc2luLCAwLFxyXG4gICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICBzaW4sIDAsIGNvcywgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJvdGF0ZVoocmFkKSB7XHJcbiAgICAgICAgdmFyIHNpbiA9IE1hdGguc2luKHJhZCk7XHJcbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKHJhZCk7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgY29zLCBzaW4sIDAsIDAsXHJcbiAgICAgICAgICAgIC1zaW4sIGNvcywgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNjYWxlIChzeCwgc3ksIHN6KSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgc3gsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIHN5LCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCBzeiwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXRpbHNcclxuICAgIHN0YXRpYyBnZXRSb3cobWF0cml4LCByb3cpe1xyXG4gICAgICAgIC8vIHVzZSBWZWM0IHRvIGdldCB0aGUgcm93XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWM0KG1hdHJpeFtyb3cgKiA0XSwgbWF0cml4W3JvdyAqIDQgKyAxXSwgbWF0cml4W3JvdyAqIDQgKyAyXSwgbWF0cml4W3JvdyAqIDQgKyAzXSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldENvbHVtbihtYXRyaXgsIGNvbHVtbil7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWM0KG1hdHJpeFtjb2x1bW5dLCBtYXRyaXhbY29sdW1uICsgNF0sIG1hdHJpeFtjb2x1bW4gKyA4XSwgbWF0cml4W2NvbHVtbiArIDEyXSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWZWMze1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgeil7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMueiA9IHo7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYWRkKGEsIGIpe1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjMyhhLnggKyBiLngsIGEueSArIGIueSwgYS56ICsgYi56KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc3ViKGEsIGIpe1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjMyhhLnggLSBiLngsIGEueSAtIGIueSwgYS56IC0gYi56KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZG90KGEsIGIpe1xyXG4gICAgICAgIHJldHVybiBhLnggKiBiLnggKyBhLnkgKiBiLnkgKyBhLnogKiBiLno7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyb3NzKGEsIGIpe1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjMyhhLnogKiBiLnkgLSBhLnkgKiBiLnosIGEueCAqIGIueiAtIGEueiAqIGIueCAsYS55ICogYi54IC0gYS54ICogYi55KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbm9ybShhKXtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGEueCAqIGEueCArIGEueSAqIGEueSArIGEueiAqIGEueik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVuaXRWZWN0b3IoYSl7XHJcbiAgICAgICAgbGV0IG5vcm0gPSBWZWMzLm5vcm0oYSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWMzKGEueCAvIG5vcm0sIGEueSAvIG5vcm0sIGEueiAvIG5vcm0pO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgYXNBcnJheSgpeyAgXHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueSwgdGhpcy56XTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZnJvbUFycmF5KGFycmF5KXtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzMoYXJyYXlbMF0sIGFycmF5WzFdLCBhcnJheVsyXSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVmVjMyBmcm9tIFwiLi9WZWMzLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWM0e1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgeiwgdyl7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMueiA9IHo7XHJcbiAgICAgICAgdGhpcy53ID0gdztcclxuICAgIH1cclxuICAgIHN0YXRpYyBhZGQoYSwgYil7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWM0KGEueCArIGIueCwgYS55ICsgYi55LCBhLnogKyBiLnosIGEudyArIGIudyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRvdChhLCBiKXtcclxuICAgICAgICBsZXQgcmVzID0gYS54ICogYi54ICsgYS55ICogYi55ICsgYS56ICogYi56ICsgYS53ICogYi53XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbm9ybShhKXtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGEueCAqIGEueCArIGEueSAqIGEueSArIGEueiAqIGEueiArIGEudyAqIGEudyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5vcm1hbGl6ZShhKXtcclxuICAgICAgICBsZXQgbm9ybSA9IFZlYzQubm9ybShhKTtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzQoYS54IC8gbm9ybSwgYS55IC8gbm9ybSwgYS56IC8gbm9ybSwgYS53IC8gbm9ybSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzVmVjMyhhKXsgICBcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzMoYS54LCBhLnksIGEueik7XHJcbiAgICB9XHJcblxyXG4gICAgYXNBcnJheSgpeyAgXHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueSwgdGhpcy56LCB0aGlzLnddO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmcm9tQXJyYXkoYXJyYXkpe1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjNChhcnJheVswXSwgYXJyYXlbMV0sIGFycmF5WzJdLCBhcnJheVszXSk7XHJcbiAgICB9XHJcblxyXG59IiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWdUb1JhZChkZWdyZWVzKXtcclxuICAgIHJldHVybiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcclxufSAgIFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhZFRvRGVnKHJhZGlhbnMpe1xyXG4gICAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xyXG59IiwiaW1wb3J0IE5vZGUgZnJvbSBcIi4uL25vZGUuanNcIjtcclxuXHJcbmNvbnN0IHBpZyA9IG5ldyBOb2RlKCk7XHJcbnBpZy5uYW1lID0gXCJwaWdcIjtcclxucGlnLm1vZGVsID0gYm94TW9kZWwoMSwgMS41LCAxLCBbMCwgMCwgMF0pO1xyXG5waWcudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnBpZy5waWNrZWRDb2xvciA9IFswLjkyMTU2ODYyNywwLjU2ODYyNzQ1MSwwLjg5ODAzOTIxNl0sXHJcbnBpZy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5waWcuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgaGVhZCA9IG5ldyBOb2RlKCk7XHJcbmhlYWQubmFtZSA9IFwiaGVhZFwiO1xyXG5oZWFkLm1vZGVsID0gYm94TW9kZWwoMSwgMSwgMS4yLCBbLTEsIDAuNiwgMF0pO1xyXG5oZWFkLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5oZWFkLnBpY2tlZENvbG9yID0gWzAuOTIxNTY4NjI3LDAuNTY4NjI3NDUxLDAuODk4MDM5MjE2XSxcclxuaGVhZC52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5oZWFkLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCB3aGl0ZVJpZ2h0RXllID0gbmV3IE5vZGUoKTtcclxud2hpdGVSaWdodEV5ZS5uYW1lID0gXCJ3aGl0ZVJpZ2h0RXllXCI7XHJcbndoaXRlUmlnaHRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC4yLCBbLTEsIDAuNiwgMF0pO1xyXG53aGl0ZVJpZ2h0RXllLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWy0wLjUsIDAuMiwgMC40XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxud2hpdGVSaWdodEV5ZS5waWNrZWRDb2xvciA9IFswLjk5LDAuOTksMC45OV0sXHJcbndoaXRlUmlnaHRFeWUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxud2hpdGVSaWdodEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3Qgd2hpdGVMZWZ0RXllID0gbmV3IE5vZGUoKTtcclxud2hpdGVMZWZ0RXllLm5hbWUgPSBcIndoaXRlTGVmdEV5ZVwiO1xyXG53aGl0ZUxlZnRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC4yLCBbLTEsIDAuNiwgMF0pO1xyXG53aGl0ZUxlZnRFeWUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbLTAuNSwgMC4yLCAtMC40XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxud2hpdGVMZWZ0RXllLnBpY2tlZENvbG9yID0gWzAuOTksMC45OSwwLjk5XSxcclxud2hpdGVMZWZ0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbndoaXRlTGVmdEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgYmxhY2tSaWdodEV5ZSA9IG5ldyBOb2RlKCk7XHJcbmJsYWNrUmlnaHRFeWUubmFtZSA9IFwiYmxhY2tSaWdodEV5ZVwiO1xyXG5ibGFja1JpZ2h0RXllLm1vZGVsID0gYm94TW9kZWwoMC4yLCAwLjIsIDAuMiwgWy0xLCAwLjYsIDBdKTtcclxuYmxhY2tSaWdodEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLjA1LCAwLCAwLjA3NV0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmJsYWNrUmlnaHRFeWUucGlja2VkQ29sb3IgPSBbMCwwLDBdLFxyXG5ibGFja1JpZ2h0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmJsYWNrUmlnaHRFeWUuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IGJsYWNrTGVmdEV5ZSA9IG5ldyBOb2RlKCk7XHJcbmJsYWNrTGVmdEV5ZS5uYW1lID0gXCJibGFja0xlZnRFeWVcIjtcclxuYmxhY2tMZWZ0RXllLm1vZGVsID0gYm94TW9kZWwoMC4yLCAwLjIsIDAuMiwgWy0xLCAwLjYsIDBdKTtcclxuYmxhY2tMZWZ0RXllLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuMDUsIDAsIC0wLjA3NV0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmJsYWNrTGVmdEV5ZS5waWNrZWRDb2xvciA9IFswLDAsMF0sXHJcbmJsYWNrTGVmdEV5ZS52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5ibGFja0xlZnRFeWUuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IG5vc2UgPSBuZXcgTm9kZSgpO1xyXG5ub3NlLm5hbWUgPSBcIm5vc2VcIjtcclxubm9zZS5tb2RlbCA9IGJveE1vZGVsKDAuMiwgMC4yLCAwLjQsIFstMS41LCAwLjU1LCAwXSk7XHJcbm5vc2UudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMC4wNSwgMCwgMF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbm5vc2UucGlja2VkQ29sb3IgPSBbMC43Njg2Mjc0NTEsMC4zNzY0NzA1ODgsIDAuNzQ1MDk4MDM5XSxcclxubm9zZS52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5ub3NlLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCByaWdodEhvbGUgPSBuZXcgTm9kZSgpO1xyXG5yaWdodEhvbGUubmFtZSA9IFwicmlnaHRIb2xlXCI7XHJcbnJpZ2h0SG9sZS5tb2RlbCA9IGJveE1vZGVsKDAuMTUsIDAuMiwgMC4xLCBbLTEuNiwgMC41NSwgMF0pO1xyXG5yaWdodEhvbGUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMC4wNSwgMCwgMC4xXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRIb2xlLnBpY2tlZENvbG9yID0gWzAuOTIxNTY4NjI3LDAuNTY4NjI3NDUxLDAuODk4MDM5MjE2XSxcclxucmlnaHRIb2xlLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbnJpZ2h0SG9sZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgbGVmdEhvbGUgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0SG9sZS5uYW1lID0gXCJsZWZ0SG9sZVwiO1xyXG5sZWZ0SG9sZS5tb2RlbCA9IGJveE1vZGVsKDAuMTUsIDAuMiwgMC4xLCBbLTEuNiwgMC41NSwgMF0pO1xyXG5sZWZ0SG9sZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLjA1LCAwLCAtMC4xXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubGVmdEhvbGUucGlja2VkQ29sb3IgPSBbMC45MjE1Njg2MjcsMC41Njg2Mjc0NTEsMC44OTgwMzkyMTZdLFxyXG5sZWZ0SG9sZS52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5sZWZ0SG9sZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgcmlnaHRGcm9udExlZyA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0RnJvbnRMZWcubmFtZSA9IFwicmlnaHRGcm9udExlZ1wiO1xyXG5yaWdodEZyb250TGVnLm1vZGVsID0gYm94TW9kZWwoMC41LCAwLjIsIDAuMiwgWzAuMSwgMCwgMC4xNV0pO1xyXG5yaWdodEZyb250TGVnLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWy0wLjYsIC0wLjUsIC0wLjRdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5yaWdodEZyb250TGVnLnBpY2tlZENvbG9yID0gWzAuNzY4NjI3NDUxLDAuMzc2NDcwNTg4LCAwLjc0NTA5ODAzOV0sXHJcbnJpZ2h0RnJvbnRMZWcudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxucmlnaHRGcm9udExlZy5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgbGVmdEZyb250TGVnID0gbmV3IE5vZGUoKTtcclxubGVmdEZyb250TGVnLm5hbWUgPSBcImxlZnRGcm9udExlZ1wiO1xyXG5sZWZ0RnJvbnRMZWcubW9kZWwgPSBib3hNb2RlbCgwLjUsIDAuMiwgMC4yLCBbMC4xLCAwLCAtMC4xNV0pO1xyXG5sZWZ0RnJvbnRMZWcudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbLTAuNiwgLTAuNSwgMC40XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubGVmdEZyb250TGVnLnBpY2tlZENvbG9yID0gWzAuNzY4NjI3NDUxLDAuMzc2NDcwNTg4LCAwLjc0NTA5ODAzOV0sXHJcbmxlZnRGcm9udExlZy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5sZWZ0RnJvbnRMZWcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IHJpZ2h0UmVhckxlZyA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0UmVhckxlZy5uYW1lID0gXCJyaWdodFJlYXJMZWdcIjtcclxucmlnaHRSZWFyTGVnLm1vZGVsID0gYm94TW9kZWwoMC41LCAwLjIsIDAuMiwgWzAuNSwgMCwgMC4xNV0pO1xyXG5yaWdodFJlYXJMZWcudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMCwgLTAuNSwgLTAuNF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnJpZ2h0UmVhckxlZy5waWNrZWRDb2xvciA9IFswLjc2ODYyNzQ1MSwwLjM3NjQ3MDU4OCwgMC43NDUwOTgwMzldLFxyXG5yaWdodFJlYXJMZWcudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxucmlnaHRSZWFyTGVnLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCBsZWZ0UmVhckxlZyA9IG5ldyBOb2RlKCk7XHJcbmxlZnRSZWFyTGVnLm5hbWUgPSBcImxlZnRSZWFyTGVnXCI7XHJcbmxlZnRSZWFyTGVnLm1vZGVsID0gYm94TW9kZWwoMC41LCAwLjIsIDAuMiwgWzAuNSwgMCwgLTAuMTVdKTtcclxubGVmdFJlYXJMZWcudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMCwgLTAuNSwgMC40XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubGVmdFJlYXJMZWcucGlja2VkQ29sb3IgPSBbMC43Njg2Mjc0NTEsMC4zNzY0NzA1ODgsIDAuNzQ1MDk4MDM5XSxcclxubGVmdFJlYXJMZWcudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxubGVmdFJlYXJMZWcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcblxyXG5oZWFkLnNldFBhcmVudChwaWcpO1xyXG53aGl0ZVJpZ2h0RXllLnNldFBhcmVudChoZWFkKTtcclxud2hpdGVMZWZ0RXllLnNldFBhcmVudChoZWFkKTtcclxuYmxhY2tSaWdodEV5ZS5zZXRQYXJlbnQod2hpdGVSaWdodEV5ZSk7XHJcbmJsYWNrTGVmdEV5ZS5zZXRQYXJlbnQod2hpdGVMZWZ0RXllKTtcclxubm9zZS5zZXRQYXJlbnQoaGVhZCk7XHJcbnJpZ2h0SG9sZS5zZXRQYXJlbnQobm9zZSk7XHJcbmxlZnRIb2xlLnNldFBhcmVudChub3NlKTtcclxucmlnaHRGcm9udExlZy5zZXRQYXJlbnQocGlnKTtcclxubGVmdEZyb250TGVnLnNldFBhcmVudChwaWcpO1xyXG5yaWdodFJlYXJMZWcuc2V0UGFyZW50KHBpZyk7XHJcbmxlZnRSZWFyTGVnLnNldFBhcmVudChwaWcpO1xyXG5cclxudmFyIG1vZGVsID0gW1xyXG4gICAgcGlnXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb2RlbDtcclxuICAiLCIvLyBjb25zdCB7IGRlZmF1bHQ6IE1hdDQgfSA9IHJlcXVpcmUoXCIuL3N0cnVjdHMvbWF0aC9NYXQ0XCIpO1xyXG5pbXBvcnQgTWF0NCBmcm9tIFwiLi9tYXRoL01hdDQuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgIHRoaXMubG9jYWxNYXRyaXggPSBNYXQ0LmdldElkZW50aXR5KCk7XHJcbiAgICAgICAgdGhpcy53b3JsZE1hdHJpeCA9IE1hdDQuZ2V0SWRlbnRpdHkoKTtcclxuICAgICAgICB0aGlzLndvcmxkSW52ZXJzZU1hdHJpeCA9IE1hdDQuZ2V0SWRlbnRpdHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRXb3JsZE1hdHJpeCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53b3JsZE1hdHJpeDtcclxuICAgIH1cclxuICBcclxuICAgIHNldFBhcmVudChwYXJlbnQpIHtcclxuICAgICAgICAvLyBhbHJlYWR5IGhhdmUgcGFyZW50XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2godGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50Lm5hbWU7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgc2V0V29ybGRNdHgobWF0cml4KSB7XHJcbiAgICAgIGlmIChtYXRyaXggIT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLndvcmxkTWF0cml4ID0gTWF0NC5tdWx0aXBseShtYXRyaXgsIHRoaXMubG9jYWxNYXRyaXgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMud29ybGRNYXRyaXggPSB0aGlzLmxvY2FsTWF0cml4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGNvbnN0IHdvcmxkTWF0cml4ID0gdGhpcy53b3JsZE1hdHJpeDtcclxuICAgICAgdGhpcy53b3JsZEludmVyc2VNYXRyaXggPSBNYXQ0LnRyYW5zcG9zZShcclxuICAgICAgICBNYXQ0LmludmVyc2UodGhpcy53b3JsZE1hdHJpeClcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICBjaGlsZC5zZXRXb3JsZE10eCh3b3JsZE1hdHJpeCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICAiLCJpbXBvcnQgVmVjMyBmcm9tIFwiLi4vc3RydWN0cy9tYXRoL1ZlYzMuanNcIlxyXG5pbXBvcnQgTWF0NCBmcm9tIFwiLi4vc3RydWN0cy9tYXRoL01hdDQuanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhe1xyXG4gICAgc3RhdGljIHByb2plY3Rpb25PcnRvZ3JhcGhpYyhsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikge1xyXG4gICAgICAgIC8vIE5vdGU6IFRoaXMgbWF0cml4IGZsaXBzIHRoZSBZIGF4aXMgc28gMCBpcyBhdCB0aGUgdG9wLlxyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gcmlnaHQtbGVmdFxyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRvcC1ib3R0b21cclxuICAgICAgICBjb25zdCBkZXB0aCA9IGZhciAtIG5lYXJcclxuICAgICAgICBjb25zdCBob3Jpem9udGFsUmF0aW8gPSAocmlnaHQgKyBsZWZ0KSAvIHdpZHRoXHJcbiAgICAgICAgY29uc3QgdmVydGljYWxSYXRpbyA9ICh0b3AgKyBib3R0b20pIC8gaGVpZ2h0XHJcbiAgICAgICAgY29uc3QgZGVwdGhSYXRpbyA9IChmYXIgKyBuZWFyKSAvIGRlcHRoXHJcblxyXG4gICAgICAgIHJldHVybiBbMiAvICh3aWR0aCksIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAyIC8gKGhlaWdodCksIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAtMiAvIChkZXB0aCksIDAsXHJcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsUmF0aW8sIHZlcnRpY2FsUmF0aW8sIGRlcHRoUmF0aW8sIDFdO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgcHJvamVjdGlvblBlcnNwZWN0aXZlKGZvdiwgYXNwZWN0LCBuZWFyLCBmYXIpe1xyXG4gICAgICAgIGNvbnN0IGYgPSAxLjAgLyBNYXRoLnRhbihmb3YgLyAyKVxyXG4gICAgICAgIGNvbnN0IHJhbmdlSW52ID0gMSAvIChuZWFyIC0gZmFyKVxyXG5cclxuICAgICAgICByZXR1cm4gW2YgLyBhc3BlY3QsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCBmLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgKG5lYXIgKyBmYXIpICogcmFuZ2VJbnYsIC0xLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgbmVhciAqIGZhciAqIHJhbmdlSW52ICogMiwgMF1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcHJvamVjdGlvbk9ibGlxdWUodGhldGEsIHBoaSl7XHJcblxyXG4gICAgICAgIHZhciB0ID0gTWF0aC50YW4odGhldGEpXHJcbiAgICAgICAgdCA9IHQgPT0gMCA/IDAuMDAwMDEgOiB0XHJcbiAgICAgICAgdmFyIHAgPSBNYXRoLnRhbihwaGkpXHJcbiAgICAgICAgcCA9IHAgPT0gMCA/IDAuMDAwMDEgOiBwXHJcbiAgICAgICAgcmV0dXJuIFsxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIC0xL3QsIC0xL3AsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAxXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBsb29rRGlyZWN0aW9uKGV5ZSwgY2VudGVyLCB1cCl7XHJcbiAgICAgICAgLy8gbm9ybWFsaXplIGVhY2ggYXJyYXlcclxuICAgICAgICAvLyBjaGFuZ2UgYXMgVmVjMyBmcm9tIGFycmF5XHJcbiAgICAgICAgbGV0IF9leWUgPSBWZWMzLmZyb21BcnJheShleWUpXHJcbiAgICAgICAgbGV0IF9jZW50ZXIgPSBWZWMzLmZyb21BcnJheShjZW50ZXIpXHJcbiAgICAgICAgbGV0IF91cCA9IFZlYzMuZnJvbUFycmF5KHVwKVxyXG4gICAgXHJcblxyXG5cclxuICAgICAgICBjb25zdCBmID0gVmVjMy51bml0VmVjdG9yKFZlYzMuc3ViKF9leWUsIF9jZW50ZXIpKSAvLyB6QXhpc1xyXG4gICAgICAgIGNvbnN0IHMgPSBWZWMzLnVuaXRWZWN0b3IoVmVjMy5jcm9zcyhmLCBfdXApKSAvLyB4QXhpc1xyXG4gICAgICAgIGNvbnN0IHUgPSBWZWMzLnVuaXRWZWN0b3IoVmVjMy5jcm9zcyhzLCBmKSlcclxuXHJcbiAgICAgICAgcmV0dXJuIFtzLngsIHMueSwgcy56LCAwLFxyXG4gICAgICAgICAgICAgICAgdS54LCB1LnksIHUueiwgMCxcclxuICAgICAgICAgICAgICAgIGYueCwgZi55LCBmLnosIDAsXHJcbiAgICAgICAgICAgICAgICBleWVbMF0sIGV5ZVsxXSwgZXllWzJdLCAxXVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWFrZVpUb1dNYXRyaXgoZnVkZ2VGYWN0b3Ipe1xyXG4gICAgICAgIHJldHVybiBbMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgZnVkZ2VGYWN0b3IsIDFdXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHByb2plY3Rpb25NYXRyaXgocHJvamVjdGlvbl90eXBlLCBfZm92LCBfYXNwZWN0LF9uZWFyLCBfZmFyLCB0aGV0YSA9IDkwLCBwaGkgPSA5MCl7XHJcbiAgICAgICAgY29uc3QgYXNwZWN0ID0gX2FzcGVjdDtcclxuICAgICAgICBjb25zdCBmb3YgPSBfZm92O1xyXG4gICAgICAgIGNvbnN0IGxlZnQgPSAtMjtcclxuICAgICAgICBjb25zdCByaWdodCA9IDI7XHJcbiAgICAgICAgY29uc3QgYm90dG9tID0gLTI7XHJcbiAgICAgICAgY29uc3QgdG9wID0gMjtcclxuICAgICAgICBjb25zdCBmYXJPcnRobyA9IF9mYXI7XHJcbiAgICAgICAgY29uc3QgbmVhck9ydGhvID0gLWZhck9ydGhvO1xyXG4gICAgXHJcbiAgICAgICAgc3dpdGNoIChwcm9qZWN0aW9uX3R5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIm9ydGhvZ3JhcGhpY1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIENhbWVyYS5wcm9qZWN0aW9uT3J0b2dyYXBoaWMobGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyT3J0aG8sIGZhck9ydGhvKVxyXG4gICAgICAgICAgICBjYXNlIFwib2JsaXF1ZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdDQubXVsdGlwbHkoXHJcbiAgICAgICAgICAgICAgICAgICAgQ2FtZXJhLnByb2plY3Rpb25PYmxpcXVlKHRoZXRhLCBwaGkpLFxyXG4gICAgICAgICAgICAgICAgICAgIENhbWVyYS5wcm9qZWN0aW9uT3J0b2dyYXBoaWMobGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyT3J0aG8sIGZhck9ydGhvKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY2FzZSBcInBlcnNwZWN0aXZlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FtZXJhLnByb2plY3Rpb25QZXJzcGVjdGl2ZShcclxuICAgICAgICAgICAgICAgICAgICBmb3YsXHJcbiAgICAgICAgICAgICAgICAgICAgYXNwZWN0LFxyXG4gICAgICAgICAgICAgICAgICAgIF9uZWFyLFxyXG4gICAgICAgICAgICAgICAgICAgIF9mYXJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FtZXJhLnByb2plY3Rpb25PcnRvZ3JhcGhpYyhsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXJPcnRobywgZmFyT3J0aG8pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB2aWV3TWF0cml4KG9yaWVudGF0aW9uLCBsb29rQXQsIHVwKXtcclxuICAgICAgICBsZXQgW3JvbGwsIHBpdGNoLCByYWRpdXNdID0gb3JpZW50YXRpb25cclxuXHJcbiAgICAgICAgLy8gcm9sbCwgcGl0Y2gsIHJhZGl1c1xyXG4gICAgICAgIHZhciBjYW1lcmFNYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICAgICAgICBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICAgICAgICAgICAgTWF0NC5yb3RhdGVZKHBpdGNoKSxcclxuICAgICAgICAgICAgICAgIE1hdDQucm90YXRlWChyb2xsKSksXHJcbiAgICAgICAgICAgIE1hdDQudHJhbnNsYXRlKDAsIDAsIHJhZGl1cylcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHZhciBjYW1lcmFQb3NpdGlvbiA9IFtcclxuICAgICAgICAgICAgY2FtZXJhTWF0cml4WzEyXSxcclxuICAgICAgICAgICAgY2FtZXJhTWF0cml4WzEzXSxcclxuICAgICAgICAgICAgY2FtZXJhTWF0cml4WzE0XVxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgdmFyIGNhbWVyYU1hdHJpeCA9IENhbWVyYS5sb29rRGlyZWN0aW9uKGNhbWVyYVBvc2l0aW9uLCBsb29rQXQsIHVwKVxyXG5cclxuICAgICAgICB2YXIgdmlld01hdHJpeCA9IE1hdDQuaW52ZXJzZShjYW1lcmFNYXRyaXgpXHJcblxyXG4gICAgICAgIHJldHVybiB2aWV3TWF0cml4XHJcbiAgICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9