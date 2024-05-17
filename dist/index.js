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
/* harmony export */   clearComponent: () => (/* binding */ clearComponent),
/* harmony export */   displayComponent: () => (/* binding */ displayComponent),
/* harmony export */   handleTransform: () => (/* binding */ handleTransform),
/* harmony export */   initOptionModel: () => (/* binding */ initOptionModel)
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

const modelSelection = document.getElementById('model-selection');
const mappingSelection = document.getElementById('mapping-selection');

// initial
function initOptionModel(model){
    modelSelection.innerHTML = '';
    model.forEach((object, index) => {
        var option = document.createElement('option');
        option.value = index;
        option.textContent = object[0].name;
        modelSelection.appendChild(option);
    })

}

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

// model selection
modelSelection.addEventListener('change', function(){   
    console.log(modelSelection.value);
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.changeModelObject)(modelSelection.value);
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

function clearComponent () {
    componentContainer.innerHTML = '';
}

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
            handleTransform(object);
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

function handleTransform(node){
    // change translation, rotation, scalation
    let [tx, ty, tz] = node.transform.translate
    // times 50

    let [rx, ry, rz] = node.transform.rotate
    // change with radToDeg
    if(node.flag == "articulated"){
    rx = (0,_structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.radToDeg)(rx);
    ry = (0,_structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.radToDeg)(ry);
    rz = (0,_structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.radToDeg)(rz);
    }
    let [sx, sy, sz] = node.transform.scale
  
    translationX.value = tx*50;
    translationY.value = ty*50;
    translationZ.value = tz*50;
    translataionXValue.textContent = tx;
    translataionYValue.textContent = ty;
    translataionZValue.textContent = tz;

    rotationX.value = rx;
    rotationY.value = ry;
    rotationZ.value = rz;
    rotationXValue.textContent = rx;
    rotationYValue.textContent = ry;
    rotationZValue.textContent = rz;

    scalationXValue.textContent = sx;
    scalationYValue.textContent = sy;
    scalationZValue.textContent = sz;
    scalationX.value = sx*20;
    scalationY.value = sx*20;
    scalationZ.value = sz*20;
    
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
    
    handleCameraView(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot);
    // update camera radius value
    document.getElementById('camera-radius-slider-value').textContent = val;
})
cameraRoll.addEventListener('input', function(){
    
    handleCameraView(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot)
    document.getElementById('camera-roll-slider-value').textContent = cameraRoll.value;
})
cameraPitch.addEventListener('input', function(){

    handleCameraView(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot)
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

var state = {
    objects: []
};

// texture selection
mappingSelection.addEventListener("change", function (e) {
    console.log(mappingSelection.value)
    ;(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.changeMappingTexture)(state.objects, mappingSelection.value);
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeMappingTexture: () => (/* binding */ changeMappingTexture),
/* harmony export */   changeModelObject: () => (/* binding */ changeModelObject),
/* harmony export */   setObliquePhi: () => (/* binding */ setObliquePhi),
/* harmony export */   setObliqueTheta: () => (/* binding */ setObliqueTheta),
/* harmony export */   setProjectionType: () => (/* binding */ setProjectionType),
/* harmony export */   setTarget: () => (/* binding */ setTarget),
/* harmony export */   setTargetRoot: () => (/* binding */ setTargetRoot),
/* harmony export */   target: () => (/* binding */ target),
/* harmony export */   targetRoot: () => (/* binding */ targetRoot)
/* harmony export */ });
/* harmony import */ var _structs_model_pig_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./structs/model/pig.js */ "./src/structs/model/pig.js");
/* harmony import */ var _structs_model_chicken_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./structs/model/chicken.js */ "./src/structs/model/chicken.js");
/* harmony import */ var _structs_model_fox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./structs/model/fox.js */ "./src/structs/model/fox.js");
/* harmony import */ var _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./structs/math/Mat4.js */ "./src/structs/math/Mat4.js");
/* harmony import */ var _structs_math_Vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./structs/math/Vec3.js */ "./src/structs/math/Vec3.js");
/* harmony import */ var _structs_math_Vec4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./structs/math/Vec4.js */ "./src/structs/math/Vec4.js");
/* harmony import */ var _utils_Camera_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/Camera.js */ "./src/utils/Camera.js");
/* harmony import */ var _handler_eventHandler_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./handler/eventHandler.js */ "./src/handler/eventHandler.js");
/* harmony import */ var _structs_model_hollowThingy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./structs/model/hollowThingy.js */ "./src/structs/model/hollowThingy.js");
/* harmony import */ var _structs_model_ring_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./structs/model/ring.js */ "./src/structs/model/ring.js");
/* harmony import */ var _utils_texture_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/texture.js */ "./src/utils/texture.js");
/* harmony import */ var _utils_Animation_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/Animation.js */ "./src/utils/Animation.js");













const canvas = document.getElementById("gl-canvas");
const gl = canvas.getContext("webgl");


const vertexShaderSource = document.getElementById("vertex-shader-3d")?.textContent;
const fragmentShaderSource = document.getElementById("fragment-shader-3d")?.textContent;

// state
var model = [_structs_model_chicken_js__WEBPACK_IMPORTED_MODULE_1__["default"], _structs_model_pig_js__WEBPACK_IMPORTED_MODULE_0__["default"], _structs_model_fox_js__WEBPACK_IMPORTED_MODULE_2__["default"], _structs_model_hollowThingy_js__WEBPACK_IMPORTED_MODULE_8__["default"], _structs_model_ring_js__WEBPACK_IMPORTED_MODULE_9__["default"]];
var objects;
var target;
function setTarget(value) {
  target = value;
}
var targetRoot;
function setTargetRoot(value) {
  targetRoot = value;
}
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

// animation
var t_animation = 0;


initState();

function initState() {
    objects = model[0];
    focus = null;
    lighting = false;
    lightDirection = _structs_math_Vec3_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromArray([0,0,1])
    texture = "none";
    projection_type = "orthographic";
    factor = 0.0;
    oblique_theta = 90.0;
    oblique_phi = 90.0;
    setDefaultRotation(objects)
    ;(0,_handler_eventHandler_js__WEBPACK_IMPORTED_MODULE_7__.displayComponent)(0, objects);
    (0,_handler_eventHandler_js__WEBPACK_IMPORTED_MODULE_7__.initOptionModel)(model);
    (0,_handler_eventHandler_js__WEBPACK_IMPORTED_MODULE_7__.handleTransform)(objects[0])

}

window.onload = () => {
    if(!gl){
        throw new Error("WebGL not supported");
    }
    target = objects[0];
    targetRoot = target;


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

    var transformMatrix = _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_3__["default"].translate(
      object.transform.translate[0],
      object.transform.translate[1],
      object.transform.translate[2]
    );

    let _center = object.model.center
    if(_center){
      transformMatrix = _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_3__["default"].multiply(
        transformMatrix,
        _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_3__["default"].translate(_center[0], _center[1], _center[2])
      );
    }
    
    transformMatrix = _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_3__["default"].multiply(
      transformMatrix,
      _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_3__["default"].rotateX(object.transform.rotate[0])
    );
  
    transformMatrix = _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_3__["default"].multiply(
      transformMatrix,
      _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_3__["default"].rotateY(object.transform.rotate[1])
    );
  
    transformMatrix = _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_3__["default"].multiply(
      transformMatrix,
      _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_3__["default"].rotateZ(object.transform.rotate[2])
    );

    if(_center){
      transformMatrix = _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_3__["default"].multiply(
        transformMatrix,
        _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_3__["default"].translate(-_center[0], -_center[1], -_center[2])
      );
    }
  
    transformMatrix = _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_3__["default"].multiply(
      transformMatrix,
      _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_3__["default"].scale(
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


function render(now) {
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.enable(gl.CULL_FACE);
    gl.enable(gl.DEPTH_TEST);

    setDefaultState(objects);
    // delta time
    if(!now) now = 0;
    now *= 0.001;

    let deltaTime = now - t_animation;
    t_animation = now;



    objects[0].setWorldMtx(null);

    normalizeLight = _structs_math_Vec3_js__WEBPACK_IMPORTED_MODULE_4__["default"].unitVector(lightDirection).asArray()
    _utils_Animation_js__WEBPACK_IMPORTED_MODULE_11__["default"].animate(targetRoot, deltaTime);
    renderLoop(objects);
    
  window.requestAnimFrame(render);
    
}


function setProjectionMatrix(matrix, object) {
    // const camera = setCamera(object);
    const projectionView = _utils_Camera_js__WEBPACK_IMPORTED_MODULE_6__["default"].projectionMatrix(projection_type, 
                                                    degToRad(45), 
                                                    (canvas.width / canvas.height), 
                                                    object.viewMatrix.near, 
                                                    object.viewMatrix.far,
                                                    oblique_theta,
                                                    oblique_phi)
    const viewMatrix = _utils_Camera_js__WEBPACK_IMPORTED_MODULE_6__["default"].viewMatrix(object.viewMatrix.camera, object.viewMatrix.lookAt, object.viewMatrix.up);
    var viewProjectionMatrix = _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_3__["default"].multiply(projectionView, viewMatrix);
    if (factor < 0.01) {
        factor = 0.01;
    }

    if (projection_type === "perspective") {
        viewProjectionMatrix = _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_3__["default"].multiply(
            _utils_Camera_js__WEBPACK_IMPORTED_MODULE_6__["default"].makeZToWMatrix(factor),
            viewProjectionMatrix,
        );
    }

    worldViewProjectionMatrix = _structs_math_Mat4_js__WEBPACK_IMPORTED_MODULE_3__["default"].multiply(viewProjectionMatrix, matrix);

    return worldViewProjectionMatrix;
}


function changeModelObject (index) {
    objects = model[index];
    setTarget(objects[0]);
    setTargetRoot(objects[0]);
    (0,_handler_eventHandler_js__WEBPACK_IMPORTED_MODULE_7__.clearComponent)();
    (0,_handler_eventHandler_js__WEBPACK_IMPORTED_MODULE_7__.displayComponent)(0, objects);
    (0,_handler_eventHandler_js__WEBPACK_IMPORTED_MODULE_7__.handleTransform)(objects[0]);
    render();

}

function changeMappingTexture(objects, textureType) {
  objects.forEach((object) => {
    if (textureType === "0") {
      object.program = createShaderProgram(
        gl,
        vertex_shader_3d,
        fragment_shader_3d_no_lighting
      );
    } else if (textureType === "1") {
      (0,_utils_texture_js__WEBPACK_IMPORTED_MODULE_10__.createPaperTexture)(gl);
      object.program = createShaderProgram(
        gl,
        vertex_shader_3d,
        fragment_shader_texture
      );
    } else if (textureType === "2") {
      (0,_utils_texture_js__WEBPACK_IMPORTED_MODULE_10__.createEnvironmentTexture)(gl);
      object.program = createShaderProgram(
        gl,
        vertex_shader_3d,
        fragment_shader_environment
      )
    } else if (textureType === "3") {
      (0,_utils_texture_js__WEBPACK_IMPORTED_MODULE_10__.createBumpTexture)(gl);
      object.program = createShaderProgram(
        gl,
        vertex_shader_3d,
        fragment_shader_bump
      );
    }
    if (object.children.length > 0) {
      changeMappingTexture(object.children, textureType);
    }
  });
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

/***/ "./src/structs/model/chicken.js":
/*!**************************************!*\
  !*** ./src/structs/model/chicken.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node.js */ "./src/structs/node.js");


// Create the chicken body node
const chicken = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
chicken.flag = "articulated";
chicken.name = "chicken";
chicken.model = boxModel(1, 1.5, 1, [0, 0, 0]);
chicken.transform = {
    translate: [0, 0, 0],
    rotate: [42, -55, 27],
    scale: [1, 1, 1],
};
chicken.pickedColor = [1, 1, 0];
chicken.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
chicken.animation = {
    isAnimate: true,
    degAnimate: 1,
    animationFunction: null
    
};

// Create the head node
const head = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
head.name = "head";
head.model = boxModel(0.6, 0.6, 0.8, [0, 0, 0]);
head.transform = {
    translate: [0.75, 0.75, 0],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
head.pickedColor = [1, 1, 0];
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

// Create the beak node
const beak = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
beak.name = "beak";
beak.model = boxModel(0.2, 0.2, 0.3, [-0.65, -0.1, 0]);
beak.transform = {
    translate: [1, 0, 0],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
beak.pickedColor = [1, 0.5, 0];
beak.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
beak.animation = {
    isAnimate: false,
    degAnimate: 0.1,
};

const whiteLeftEye = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
whiteLeftEye.name = "whiteLeftEye";
whiteLeftEye.model = boxModel(0.075, 0.1, 0.1, [-0.75, 0.2, 0.15]);
whiteLeftEye.transform = {
    translate: [1.04, 0, 0],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
whiteLeftEye.pickedColor = [0.99, 0.99, 0.99];
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

const blackLeftEye = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
blackLeftEye.name = "blackLeftEye";
blackLeftEye.model = boxModel(0.05, 0.05, 0.05, [-0.75, 0.2, 0.15]);
blackLeftEye.transform = {
    translate: [0.06, 0, 0],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
blackLeftEye.pickedColor = [0, 0, 0];
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

const whiteRightEye = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
whiteRightEye.name = "whiteRightEye";
whiteRightEye.model = boxModel(0.075, 0.1, 0.1, [-0.75, 0.2, 0.15]);
whiteRightEye.transform = {
    translate: [1.04, 0, -0.32],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
whiteRightEye.pickedColor = [0.99, 0.99, 0.99];
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

const blackRightEye = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
blackRightEye.name = "blackRightEye";
blackRightEye.model = boxModel(0.05, 0.05, 0.05, [-0.75, 0.2, 0.15]);
blackRightEye.transform = {
    translate: [0.06, 0, 0],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
blackRightEye.pickedColor = [0, 0, 0];
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



// Create the left wing node
const leftWing = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
leftWing.name = "leftWing";
leftWing.model = boxModel(0.5, 0.1, 1, [0, 0, 0]);
leftWing.transform = {
    translate: [0, 0, -0.75],
    rotate: [0, 0, 90],
    scale: [1, 1, 1],
};
leftWing.pickedColor = [1, 1, 0];
leftWing.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
leftWing.animation = {
    isAnimate: false,
    degAnimate: 0.1,
};

// Create the right wing node
const rightWing = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
rightWing.name = "rightWing";
rightWing.model = boxModel(0.5, 0.1, 1, [0, 0, 0]);
rightWing.transform = {
    translate: [0, 0, 0.75],
    rotate: [0, 0, 90],
    scale: [1, 1, 1],
};
rightWing.pickedColor = [1, 1, 0];
rightWing.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
rightWing.animation = {
    isAnimate: false,
    degAnimate: 0.1,
};

// Create the right leg node
const rightLeg = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
rightLeg.name = "rightLeg";
rightLeg.model = boxModel(0.6, 0.2, 0.2, [0, 0, 0]);
rightLeg.transform = {
    translate: [-0.5, -0.8, -0.35],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
rightLeg.pickedColor = [1, 0.5, 0];
rightLeg.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
rightLeg.animation = {
    isAnimate: true,
    omega: 1,
    animationFunction: `((_rightLeg, deltaTime) => {
        if (_rightLeg.animation.isAnimate) {
            _rightLeg.transform.rotate[2] += _rightLeg.animation.omega * deltaTime;
            if (_rightLeg.transform.rotate[2] >= Math.PI / 6) {
                _rightLeg.transform.rotate[2] = Math.PI / 6
                _rightLeg.animation.omega = -1;
            }
            else if(_rightLeg.transform.rotate[2] <= - Math.PI / 6){
                _rightLeg.transform.rotate[2] = -Math.PI / 6
                _rightLeg.animation.omega = 1;
            }
        }  
    })`
};

// crete the right foot node
const rightFoot = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
rightFoot.name = "rightFoot";
rightFoot.model = boxModel(0.1, 0.4, 0.3, [0, 0, 0]);
rightFoot.transform = {
    translate: [0.02, -0.34, 0],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
rightFoot.pickedColor = [1, 0.5, 0];
rightFoot.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
rightFoot.animation = {
    isAnimate: true,
    degAnimate: 0.1,
    animationFunction: null
};

// Create the left leg node
const leftLeg = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
leftLeg.name = "leftLeg";
leftLeg.model = boxModel(0.6, 0.2, 0.2, [0, 0, 0]);
leftLeg.transform = {
    translate: [-0.5, -0.8, 0.35],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
leftLeg.pickedColor = [1, 0.5, 0];
leftLeg.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
leftLeg.animation = {
    isAnimate: true,
    degAnimate: 0.1,
    omega: 1,
    animationFunction: `((_leftLeg, deltaTime) => {
        if (_leftLeg.animation.isAnimate) {
            _leftLeg.transform.rotate[2] += _leftLeg.animation.omega * deltaTime;
            if (_leftLeg.transform.rotate[2] >= Math.PI / 6) {
                _leftLeg.transform.rotate[2] = Math.PI / 6
                _leftLeg.animation.omega = -1;
            }
            else if(_leftLeg.transform.rotate[2] <= - Math.PI / 6){
                _leftLeg.transform.rotate[2] = -Math.PI / 6
                _leftLeg.animation.omega = 1;
            }
        }  
    })`
};

// Create the left foot node
const leftFoot = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
leftFoot.name = "leftFoot";
leftFoot.model = boxModel(0.1, 0.4, 0.3, [0, 0, 0]);
leftFoot.transform = {
    translate: [0.02, -0.34, 0],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
leftFoot.pickedColor = [1, 0.5, 0];
leftFoot.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
leftFoot.animation = {
    isAnimate: false,
    degAnimate: 0.1,
};

// Create the tail node
const tail = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
tail.name = "tail";


// Assemble the chicken model
// chicken.addChild(head);
// head.addChild(beak);
// chicken.addChild(leftWing);
// chicken.addChild(rightWing);
// chicken.addChild(leftLeg);
// chicken.addChild(rightLeg);

// Assemble the chicken model
head.setParent(chicken);
beak.setParent(head);
whiteRightEye.setParent(head);
blackRightEye.setParent(whiteRightEye);
whiteLeftEye.setParent(head);
blackLeftEye.setParent(whiteLeftEye);
leftWing.setParent(chicken);
rightWing.setParent(chicken);
leftLeg.setParent(chicken);
leftFoot.setParent(leftLeg);
rightLeg.setParent(chicken);
rightFoot.setParent(rightLeg);


var chickenModel = [
  chicken
]

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chickenModel);


/***/ }),

/***/ "./src/structs/model/fox.js":
/*!**********************************!*\
  !*** ./src/structs/model/fox.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node.js */ "./src/structs/node.js");


const bodyColor = [0.886, 0.345, 0.133];
const whiteColor = [0.99, 0.99, 0.99];
const blackColor = [0, 0, 0];
const brownColor = [0.545, 0.271, 0.075];

const fox = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
fox.name = "fox";
fox.model = boxModel(0.6, 0.7, 1, [0, 0, 0]); 
fox.transform = {
  translate: [0, 0, 0],
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
fox.pickedColor = bodyColor;
fox.viewMatrix = {
  camera: [0, 0, 5],
  lookAt: [0, 0, 0],
  up: [0, 1, 0],
  near: 0.1,
  far: 50,
};
fox.animation = {
  isAnimate: false,
  degAnimate: 0.1,
};

const head = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
head.name = "head";
head.model = boxModel(0.5, 0.5, 0.4, [0, 0, 0]);
head.transform = {
  translate: [0, 0.1, 0.7], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
head.pickedColor = bodyColor;
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
whiteRightEye.model = boxModel(0.1, 0.1, 0.05, [0, 0, 0]);
whiteRightEye.transform = {
  translate: [0.15, 0.1, 0.2], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
whiteRightEye.pickedColor = whiteColor;
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
whiteLeftEye.model = boxModel(0.1, 0.1, 0.05, [0, 0, 0]);
whiteLeftEye.transform = {
  translate: [-0.15, 0.1, 0.2], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
whiteLeftEye.pickedColor = whiteColor;
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
blackRightEye.model = boxModel(0.1, 0.06, 0.05, [0, 0, 0]);
blackRightEye.transform = {
  translate: [-0.03, 0, 0.01], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
blackRightEye.pickedColor = blackColor;
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
blackLeftEye.model = boxModel(0.1, 0.06, 0.05, [0, 0, 0]);
blackLeftEye.transform = {
  translate: [0.03, 0, 0.01], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
blackLeftEye.pickedColor = blackColor;
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
nose.model = boxModel(0.15, 0.3, 0.2, [0, 0, 0]);
nose.transform = {
  translate: [0, -0.1, 0.3], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
nose.pickedColor = blackColor;
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
const undernose = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
undernose.name = "undernose";
undernose.model = boxModel(0.1, 0.3, 0.2, [0, 0, 0]);
undernose.transform = {
  translate: [0, -0.2, 0.3], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
undernose.pickedColor = whiteColor;
undernose.viewMatrix = {
  camera: [0, 0, 5],
  lookAt: [0, 0, 0],
  up: [0, 1, 0],
  near: 0.1,
  far: 50,
};
undernose.animation = {
  isAnimate: false,
  degAnimate: 0.1,
};

const rightEar = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
rightEar.name = "rightEar";
rightEar.model = boxModel(0.2, 0.2, 0.1, [0, 0, 0]);
rightEar.transform = {
  translate: [0.15, 0.35, 0],
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
rightEar.pickedColor = blackColor;
rightEar.viewMatrix = {
  camera: [0, 0, 5],
  lookAt: [0, 0, 0],
  up: [0, 1, 0],
  near: 0.1,
  far: 50,
};
rightEar.animation = {
  isAnimate: false,
  degAnimate: 0.1,
};

const leftEar = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
leftEar.name = "leftEar";
leftEar.model = boxModel(0.2, 0.2, 0.1, [0, 0, 0]);
leftEar.transform = {
  translate: [-0.15, 0.35, 0], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
leftEar.pickedColor = blackColor;
leftEar.viewMatrix = {
  camera: [0, 0, 5],
  lookAt: [0, 0, 0],
  up: [0, 1, 0],
  near: 0.1,
  far: 50,
};
leftEar.animation = {
  isAnimate: false,
  degAnimate: 0.1,
};

const rightFrontLeg = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
rightFrontLeg.name = "rightFrontLeg";
rightFrontLeg.model = boxModel(1, 0.2, 0.15, [0, 0, 0]);
rightFrontLeg.transform = {
  translate: [0.2, -0.25, 0.2], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
rightFrontLeg.pickedColor = blackColor;
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
leftFrontLeg.model = boxModel(1, 0.2, 0.15, [0, 0, 0]);
leftFrontLeg.transform = {
  translate: [-0.2, -0.25, 0.2], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
leftFrontLeg.pickedColor = blackColor;
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
rightRearLeg.model = boxModel(1, 0.2, 0.15, [0, 0, 0]);
rightRearLeg.transform = {
  translate: [0.2, -0.25, -0.2],
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
rightRearLeg.pickedColor = blackColor;
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
leftRearLeg.model = boxModel(1, 0.2, 0.15, [0, 0, 0]);
leftRearLeg.transform = {
  translate: [-0.2, -0.25, -0.2], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
leftRearLeg.pickedColor = blackColor;
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

const tail = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
tail.name = "tail";
tail.model = boxModel(0.2, 0.2, 0.4, [0, 0, 0]);
tail.transform = {
  translate: [0, 0, -0.65],
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
tail.pickedColor = bodyColor;
tail.viewMatrix = {
  camera: [0, 0, 5],
  lookAt: [0, 0, 0],
  up: [0, 1, 0],
  near: 0.1,
  far: 50,
};
tail.animation = {
  isAnimate: false,
  degAnimate: 0.1,
};
const tailedge = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
tailedge.name = "tailedge";
tailedge.model = boxModel(0.2, 0.2, 0.2, [0, 0, 0]);
tailedge.transform = {
  translate: [0, 0, -0.95], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
tailedge.pickedColor = whiteColor;
tailedge.viewMatrix = {
  camera: [0, 0, 5],
  lookAt: [0, 0, 0],
  up: [0, 1, 0],
  near: 0.1,
  far: 50,
};
tailedge.animation = {
  isAnimate: false,
  degAnimate: 0.1,
};

head.setParent(fox);
rightEar.setParent(head);
leftEar.setParent(head);
whiteRightEye.setParent(head);
whiteLeftEye.setParent(head);
blackRightEye.setParent(whiteRightEye);
blackLeftEye.setParent(whiteLeftEye);
nose.setParent(head);
undernose.setParent(head);
rightFrontLeg.setParent(fox);
leftFrontLeg.setParent(fox);
rightRearLeg.setParent(fox);
leftRearLeg.setParent(fox);
tail.setParent(fox);
tailedge.setParent(fox);

var foxModel = [
  fox
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (foxModel);


/***/ }),

/***/ "./src/structs/model/hollowThingy.js":
/*!*******************************************!*\
  !*** ./src/structs/model/hollowThingy.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node.js */ "./src/structs/node.js");



function hollowThingy() {
    let vertices = [];
    let colors = [];
    let tangents = [];
    let bitangents = [];
    let normals = [];
    let texCoord = [];
    let faces = generateFaces();
    
    const boxes = [
      { size: [0.2, 0.8, 0.2], position: [0, 1, 0] },
      { size: [0.2, 0.8, 0.2], position: [0, -1, 0] },
      { size: [1.8, 0.2, 0.2], position: [-0.3, 0, 0] },
      { size: [1.8, 0.2, 0.2], position: [0.3, 0, 0] },
      { size: [0.2, 1.8, 0.2], position: [0, 0, 0.3] },
      { size: [0.2, 1.8, 0.2], position: [0, 0, -0.3] },
      { size: [0.2, 0.2, 0.8], position: [1, 0, 0] },
      { size: [0.2, 0.2, 0.8], position: [-1, 0, 0] },
      { size: [0.8, 0.2, 0.2], position: [0, 0, 1] },
      { size: [0.8, 0.2, 0.2], position: [0, 0, -1] },
      { size: [0.2, 0.2, 1.8], position: [0, 0.3, 0] },
      { size: [0.2, 0.2, 1.8], position: [0, -0.3, 0] }
    ];
    
    boxes.forEach(box => {
      let verticesBox = generateVertices(...box.size, box.position);
      let normalsBox = generateNormals(verticesBox, faces);
      normals = normals.concat(normalsBox);
      vertices = vertices.concat(toVertices(verticesBox, faces));
    });
  
    return {
      vertices: vertices,
      faces: faces,
      tangents: tangents,
      bitangents: bitangents,
      normals: normals,
      colors: colors,
      texCoord: texCoord,
    };
}
  
const hollow = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
hollow.flag = "hollow";
hollow.name = "Hollow Thingy";
hollow.model = hollowThingy();
hollow.transform = {
  translate: [0, 0, 0],
  rotate: [91, 0, 0],
  scale: [1, 1, 1],
};
hollow.pickedColor = [0.921568627,0.568627451,0.898039216],
hollow.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
hollow.animation = {
  isAnimate: false,
  degAnimate: 0.1,
};

var hollowModel = [
    hollow
]


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hollowModel);

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
pig.flag = "articulated";
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

var pigModel = [
    pig
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pigModel);
  

/***/ }),

/***/ "./src/structs/model/ring.js":
/*!***********************************!*\
  !*** ./src/structs/model/ring.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node.js */ "./src/structs/node.js");


function ring() {
    let vertices = [];
    let colors = [];
    let tangents = [];
    let bitangents = [];
    let normals = [];
    let texCoord = [];
    let faces = generateFaces();

function generateBoxes(){
    let boxes = [];
    for(let i = 0; i < 360; ++i){
      let rad = degToRad(i);
      let position = [Math.cos(rad), Math.sin(rad), 0];
      let size = [0.05, 0.05, 0.8];
      boxes.push({ size: size, position: position });
    }
    return boxes;
  }

  const boxes = generateBoxes();
  
  boxes.forEach(box => {
    let verticesBox = generateVertices(...box.size, box.position);
    let normalsBox = generateNormals(verticesBox, faces);
    normals = normals.concat(normalsBox);
    vertices = vertices.concat(toVertices(verticesBox, faces));
  });

  return {
    vertices: vertices,
    faces: faces,
    tangents: tangents,
    bitangents: bitangents,
    normals: normals,
    colors: colors,
    texCoord: texCoord,
  };
}

const hollow = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
hollow.flag = "hollow";
hollow.name = "Ring";
hollow.model = ring();
hollow.transform = {
translate: [0, 0, 0],
rotate: [10, 0, 0],
scale: [1, 1, 1],
};
hollow.pickedColor = [45/255,215/255,96/255],
hollow.viewMatrix = {
  camera: [0, 0, 5],
  lookAt: [0, 0, 0],
  up: [0, 1, 0],
  near: 0.1,
  far: 50,
};
hollow.animation = {
isAnimate: false,
degAnimate: 0.1,
};

var hollowRingModel = [
  hollow
]


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hollowRingModel);

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

/***/ "./src/utils/Animation.js":
/*!********************************!*\
  !*** ./src/utils/Animation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Animation)
/* harmony export */ });
/* harmony import */ var _structs_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../structs/node.js */ "./src/structs/node.js");

class Animation{

    static parseAnimationFunction(model){
        let animation = model.animation;
        if(animation.isAnimate){
            // parse string to function
            let _animationFunction = eval(animation.animationFunction)
            return _animationFunction;
        }
        return null;
    }

    static animate(parent_model, deltaTime){
        let animation = parent_model.animation;
            if(animation.isAnimate){
                let _animationFunction = Animation.parseAnimationFunction(parent_model);
                if(_animationFunction){
                    let str = parent_model.animation.animationFunction;
                    parent_model.animation.animationFunction = _animationFunction;
                    parent_model.animation.animationFunction(parent_model, deltaTime);
                    parent_model.animation.animationFunction = str;
                }
        }

        for(let model of parent_model.children){    
            Animation.animate(model, deltaTime)
        }
        // recurse each node child
        
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

/***/ }),

/***/ "./src/utils/texture.js":
/*!******************************!*\
  !*** ./src/utils/texture.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBumpTexture: () => (/* binding */ createBumpTexture),
/* harmony export */   createEnvironmentTexture: () => (/* binding */ createEnvironmentTexture),
/* harmony export */   createPaperTexture: () => (/* binding */ createPaperTexture)
/* harmony export */ });
function createPaperTexture(gl) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGBA,
    1,
    1,
    0,
    gl.RGBA,
    gl.UNSIGNED_BYTE,
    new Uint8Array([0, 0, 0, 0])
  );

  const image = new Image();
  image.onload = function() {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
      gl.generateMipmap(gl.TEXTURE_2D);
    } else {
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    }
  };
  image.src = "./mapping/paper.jpeg"; 
  return texture;
}

function isPowerOf2(value) {
  return (value & (value - 1)) == 0;
} 

function createEnvironmentTexture(gl) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);

  const faceInfos = [
    { target: gl.TEXTURE_CUBE_MAP_POSITIVE_X, url: "./mapping/environment.jpg" },
    { target: gl.TEXTURE_CUBE_MAP_NEGATIVE_X, url: "./mapping/environment.jpg" },
    { target: gl.TEXTURE_CUBE_MAP_POSITIVE_Y, url: "./mapping/environment.jpg" },
    { target: gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, url: "./mapping/environment.jpg" },
    { target: gl.TEXTURE_CUBE_MAP_POSITIVE_Z, url: "./mapping/environment.jpg" },
    { target: gl.TEXTURE_CUBE_MAP_NEGATIVE_Z, url: "./mapping/environment.jpg" },
  ];

  faceInfos.forEach((faceInfo) => {
    const { target, url } = faceInfo;

    gl.texImage2D(
      target,
      0,
      gl.RGBA,
      512,
      512,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      null
    );

    const image = new Image();
    image.src = url;
    image.addEventListener("load", function () {
      gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);
      gl.texImage2D(target, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
    });
  });

  gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
  gl.texParameteri(
    gl.TEXTURE_CUBE_MAP,
    gl.TEXTURE_MIN_FILTER,
    gl.LINEAR_MIPMAP_LINEAR
  );
}

function createBumpTexture(gl) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(
    gl.TEXTURE_2D, 
    0, 
    gl.RGBA, 
    1, 
    1, 
    0, 
    gl.RGBA, 
    gl.UNSIGNED_BYTE, 
    new Uint8Array([255, 0, 0, 255])
  );

  var image = new Image();
  image.src = "./mapping/bump.png";
  image.onload = function () {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0RBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdEQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzdWRTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZ0RBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnREFBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdEQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0RBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9oYW5kbGVyL2V2ZW50SGFuZGxlci5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21hdGgvTWF0NC5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21hdGgvVmVjMy5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21hdGgvVmVjNC5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21hdGgvbWF0aFV0aWxzLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3N0cnVjdHMvbW9kZWwvY2hpY2tlbi5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21vZGVsL2ZveC5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21vZGVsL2hvbGxvd1RoaW5neS5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21vZGVsL3BpZy5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21vZGVsL3JpbmcuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9ub2RlLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3V0aWxzL0FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy91dGlscy9DYW1lcmEuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvdXRpbHMvdGV4dHVyZS5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YXJnZXQsIFxyXG4gICAgdGFyZ2V0Um9vdCwgXHJcbiAgICBzZXRQcm9qZWN0aW9uVHlwZSwgXHJcbiAgICBzZXRPYmxpcXVlUGhpLCBcclxuICAgIHNldE9ibGlxdWVUaGV0YSwgXHJcbiAgICBzZXRUYXJnZXQsIFxyXG4gICAgc2V0VGFyZ2V0Um9vdCwgXHJcbiAgICBjaGFuZ2VNb2RlbE9iamVjdCwgXHJcbiAgICBjaGFuZ2VNYXBwaW5nVGV4dHVyZX0gZnJvbSBcIi4uL2luZGV4LmpzXCJcclxuaW1wb3J0IHsgZGVnVG9SYWQsIHJhZFRvRGVnIH0gZnJvbSBcIi4uL3N0cnVjdHMvbWF0aC9tYXRoVXRpbHMuanNcIjtcclxuXHJcbmNvbnN0IHRyYW5zbGF0aW9uWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2xhdGlvbi14LXNsaWRlcicpO1xyXG5jb25zdCB0cmFuc2xhdGlvblkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNsYXRpb24teS1zbGlkZXInKTtcclxuY29uc3QgdHJhbnNsYXRpb25aID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zbGF0aW9uLXotc2xpZGVyJyk7XHJcbmNvbnN0IHRyYW5zbGF0YWlvblhWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2xhdGlvbi14LXNsaWRlci12YWx1ZScpO1xyXG5jb25zdCB0cmFuc2xhdGFpb25ZVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNsYXRpb24teS1zbGlkZXItdmFsdWUnKTtcclxuY29uc3QgdHJhbnNsYXRhaW9uWlZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zbGF0aW9uLXotc2xpZGVyLXZhbHVlJyk7XHJcbi8vcm90YXRpb25cclxuY29uc3Qgcm90YXRpb25YID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uLXgtc2xpZGVyJyk7XHJcbmNvbnN0IHJvdGF0aW9uWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGlvbi15LXNsaWRlcicpO1xyXG5jb25zdCByb3RhdGlvblogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm90YXRpb24tei1zbGlkZXInKTtcclxuY29uc3Qgcm90YXRpb25YVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm90YXRpb24teC1zbGlkZXItdmFsdWUnKTtcclxuY29uc3Qgcm90YXRpb25ZVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm90YXRpb24teS1zbGlkZXItdmFsdWUnKTtcclxuY29uc3Qgcm90YXRpb25aVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm90YXRpb24tei1zbGlkZXItdmFsdWUnKTtcclxuLy9zY2FsYXRpb25cclxuY29uc3Qgc2NhbGF0aW9uWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY2FsYXRpb24teC1zbGlkZXInKTtcclxuY29uc3Qgc2NhbGF0aW9uWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY2FsYXRpb24teS1zbGlkZXInKTtcclxuY29uc3Qgc2NhbGF0aW9uWiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY2FsYXRpb24tei1zbGlkZXInKTtcclxuY29uc3Qgc2NhbGF0aW9uWFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjYWxhdGlvbi14LXNsaWRlci12YWx1ZScpO1xyXG5jb25zdCBzY2FsYXRpb25ZVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NhbGF0aW9uLXktc2xpZGVyLXZhbHVlJyk7XHJcbmNvbnN0IHNjYWxhdGlvblpWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY2FsYXRpb24tei1zbGlkZXItdmFsdWUnKTtcclxuLy8gY29tcG9uZW50IGNvbnRhaW5lclxyXG5jb25zdCBjb21wb25lbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcG9uZW50LWNvbnRhaW5lcicpO1xyXG4vL2NhbWVyYVxyXG5jb25zdCBvcnRob2dyYXBoaWMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3J0aG9ncmFwaGljJyk7XHJcbmNvbnN0IG9ibGlxdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2JsaXF1ZScpO1xyXG5jb25zdCBwZXJzcGVjdGl2ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZXJzcGVjdGl2ZScpO1xyXG4vLyBjYW1lcmEgcmFkaXVzXHJcbmNvbnN0IGNhbWVyYVJhZGl1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcmFkaXVzLXNsaWRlcicpO1xyXG4vLyBjYW1lcmEgcm9sbC1waXRjaFxyXG5jb25zdCBjYW1lcmFSb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1yb2xsLXNsaWRlcicpO1xyXG5jb25zdCBjYW1lcmFQaXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcGl0Y2gtc2xpZGVyJyk7XHJcbi8vIGNhbWVyYSB0aGV0YS1waGlcclxuY29uc3QgY2FtZXJhVGhldGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXRoZXRhLXNsaWRlcicpO1xyXG5jb25zdCBjYW1lcmFQaGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXBoaS1zbGlkZXInKTtcclxuLy8gc2V0IG9ydGhvZ3JhcGhpYyBhcyBkZWZhdWx0IGlucHV0IHJhZGlvIGJ1dHRvblxyXG5vcnRob2dyYXBoaWMuY2hlY2tlZCA9IHRydWU7XHJcblxyXG5jb25zdCBtb2RlbFNlbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RlbC1zZWxlY3Rpb24nKTtcclxuY29uc3QgbWFwcGluZ1NlbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXBwaW5nLXNlbGVjdGlvbicpO1xyXG5cclxuLy8gaW5pdGlhbFxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdE9wdGlvbk1vZGVsKG1vZGVsKXtcclxuICAgIG1vZGVsU2VsZWN0aW9uLmlubmVySFRNTCA9ICcnO1xyXG4gICAgbW9kZWwuZm9yRWFjaCgob2JqZWN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSBpbmRleDtcclxuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvYmplY3RbMF0ubmFtZTtcclxuICAgICAgICBtb2RlbFNlbGVjdGlvbi5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfSlcclxuXHJcbn1cclxuXHJcbi8vIGV2ZW50IGxpc3RlbmVyXHJcbnRyYW5zbGF0aW9uWC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQudHJhbnNmb3JtLnRyYW5zbGF0ZVswXSA9ICgyICogdHJhbnNsYXRpb25YLnZhbHVlKSAvIDEwMDtcclxuICAgIHRyYW5zbGF0YWlvblhWYWx1ZS50ZXh0Q29udGVudCA9IHRhcmdldC50cmFuc2Zvcm0udHJhbnNsYXRlWzBdO1xyXG59KTtcclxudHJhbnNsYXRpb25ZLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIHRhcmdldC50cmFuc2Zvcm0udHJhbnNsYXRlWzFdID0gKDIgKiB0cmFuc2xhdGlvblkudmFsdWUpIC8gMTAwO1xyXG4gICAgdHJhbnNsYXRhaW9uWVZhbHVlLnRleHRDb250ZW50ID0gdGFyZ2V0LnRyYW5zZm9ybS50cmFuc2xhdGVbMV07XHJcbn0pO1xyXG50cmFuc2xhdGlvblouYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgdGFyZ2V0LnRyYW5zZm9ybS50cmFuc2xhdGVbMl0gPSAoMiAqIHRyYW5zbGF0aW9uWi52YWx1ZSkgLyAxMDA7XHJcbiAgICB0cmFuc2xhdGFpb25aVmFsdWUudGV4dENvbnRlbnQgPSB0YXJnZXQudHJhbnNmb3JtLnRyYW5zbGF0ZVsyXTtcclxufSk7XHJcbnJvdGF0aW9uWC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQudHJhbnNmb3JtLnJvdGF0ZVswXSA9IGRlZ1RvUmFkKHJvdGF0aW9uWC52YWx1ZSk7XHJcbiAgICByb3RhdGlvblhWYWx1ZS50ZXh0Q29udGVudCA9IHJvdGF0aW9uWC52YWx1ZTtcclxufSlcclxucm90YXRpb25ZLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIHRhcmdldC50cmFuc2Zvcm0ucm90YXRlWzFdID0gZGVnVG9SYWQocm90YXRpb25ZLnZhbHVlKTtcclxuICAgIHJvdGF0aW9uWVZhbHVlLnRleHRDb250ZW50ID0gcm90YXRpb25ZLnZhbHVlO1xyXG59KVxyXG5yb3RhdGlvblouYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgdGFyZ2V0LnRyYW5zZm9ybS5yb3RhdGVbMl0gPSBkZWdUb1JhZChyb3RhdGlvbloudmFsdWUpO1xyXG4gICAgcm90YXRpb25aVmFsdWUudGV4dENvbnRlbnQgPSByb3RhdGlvbloudmFsdWU7XHJcbn0pXHJcbnNjYWxhdGlvblguYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVswXSA9ICBzY2FsYXRpb25YLnZhbHVlIC8gMjA7XHJcbiAgICBzY2FsYXRpb25YVmFsdWUudGV4dENvbnRlbnQgPSB0YXJnZXQudHJhbnNmb3JtLnNjYWxlWzBdO1xyXG59KVxyXG5zY2FsYXRpb25ZLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIHRhcmdldC50cmFuc2Zvcm0uc2NhbGVbMV0gPSAgc2NhbGF0aW9uWS52YWx1ZSAvIDIwO1xyXG4gICAgc2NhbGF0aW9uWVZhbHVlLnRleHRDb250ZW50ID0gdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVsxXTtcclxufSlcclxuc2NhbGF0aW9uWi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQudHJhbnNmb3JtLnNjYWxlWzJdID0gIHNjYWxhdGlvbloudmFsdWUgLyAyMDtcclxuICAgIHNjYWxhdGlvblpWYWx1ZS50ZXh0Q29udGVudCA9IHRhcmdldC50cmFuc2Zvcm0uc2NhbGVbMl07XHJcbn0pXHJcblxyXG4vLyBtb2RlbCBzZWxlY3Rpb25cclxubW9kZWxTZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKXsgICBcclxuICAgIGNvbnNvbGUubG9nKG1vZGVsU2VsZWN0aW9uLnZhbHVlKTtcclxuICAgIGNoYW5nZU1vZGVsT2JqZWN0KG1vZGVsU2VsZWN0aW9uLnZhbHVlKTtcclxufSlcclxuXHJcbi8vIGNhbWVyYVxyXG5vcnRob2dyYXBoaWMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgc2V0UHJvamVjdGlvblR5cGUoXCJvcnRob2dyYXBoaWNcIik7XHJcbn0pXHJcblxyXG5vYmxpcXVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIHNldFByb2plY3Rpb25UeXBlKFwib2JsaXF1ZVwiKTtcclxufSlcclxuXHJcbnBlcnNwZWN0aXZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIHNldFByb2plY3Rpb25UeXBlKFwicGVyc3BlY3RpdmVcIik7XHJcbn0pXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDb21wb25lbnQgKCkge1xyXG4gICAgY29tcG9uZW50Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUNvbXBvbmVudCh0cmVlTGV2ZWwgPSAwLCBvYmplY3RzKXtcclxuICAgIG9iamVjdHMuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld0NvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcclxuICAgICAgICBuZXdDb21wb25lbnQuc3R5bGUgPSAncGFkZGluZy1sZWZ0OiAnICsgdHJlZUxldmVsKjEuNSArICdlbTsnO1xyXG4gICAgICAgIG5ld0NvbXBvbmVudC5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWF4LXctZml0IGNvbXBvbmVudFwiPiR7b2JqZWN0Lm5hbWV9PC9idXR0b24+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBsZXQgY3JlYXRlZEJ1dHRvbiA9IG5ld0NvbXBvbmVudC5xdWVyeVNlbGVjdG9yKCcuY29tcG9uZW50Jyk7XHJcbiAgICAgICAgY3JlYXRlZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgICAgICBzZXRUYXJnZXQob2JqZWN0KTtcclxuICAgICAgICAgICAgaGFuZGxlVHJhbnNmb3JtKG9iamVjdCk7XHJcbiAgICAgICAgICAgIGxldCBjb21wb25lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbXBvbmVudFwiKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wb25lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzW2ldLmNsYXNzTmFtZSA9IGNvbXBvbmVudHNbaV0uY2xhc3NOYW1lLnJlcGxhY2UoXCIgYm9yZGVyLTJcIiwgXCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXZ0LmN1cnJlbnRUYXJnZXQuY2xhc3NOYW1lICs9IFwiIGJvcmRlci0yXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29tcG9uZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NvbXBvbmVudCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYob2JqZWN0LmNoaWxkcmVuLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBkaXNwbGF5Q29tcG9uZW50KHRyZWVMZXZlbCArIDEsIG9iamVjdC5jaGlsZHJlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVRyYW5zZm9ybShub2RlKXtcclxuICAgIC8vIGNoYW5nZSB0cmFuc2xhdGlvbiwgcm90YXRpb24sIHNjYWxhdGlvblxyXG4gICAgbGV0IFt0eCwgdHksIHR6XSA9IG5vZGUudHJhbnNmb3JtLnRyYW5zbGF0ZVxyXG4gICAgLy8gdGltZXMgNTBcclxuXHJcbiAgICBsZXQgW3J4LCByeSwgcnpdID0gbm9kZS50cmFuc2Zvcm0ucm90YXRlXHJcbiAgICAvLyBjaGFuZ2Ugd2l0aCByYWRUb0RlZ1xyXG4gICAgaWYobm9kZS5mbGFnID09IFwiYXJ0aWN1bGF0ZWRcIil7XHJcbiAgICByeCA9IHJhZFRvRGVnKHJ4KTtcclxuICAgIHJ5ID0gcmFkVG9EZWcocnkpO1xyXG4gICAgcnogPSByYWRUb0RlZyhyeik7XHJcbiAgICB9XHJcbiAgICBsZXQgW3N4LCBzeSwgc3pdID0gbm9kZS50cmFuc2Zvcm0uc2NhbGVcclxuICBcclxuICAgIHRyYW5zbGF0aW9uWC52YWx1ZSA9IHR4KjUwO1xyXG4gICAgdHJhbnNsYXRpb25ZLnZhbHVlID0gdHkqNTA7XHJcbiAgICB0cmFuc2xhdGlvbloudmFsdWUgPSB0eio1MDtcclxuICAgIHRyYW5zbGF0YWlvblhWYWx1ZS50ZXh0Q29udGVudCA9IHR4O1xyXG4gICAgdHJhbnNsYXRhaW9uWVZhbHVlLnRleHRDb250ZW50ID0gdHk7XHJcbiAgICB0cmFuc2xhdGFpb25aVmFsdWUudGV4dENvbnRlbnQgPSB0ejtcclxuXHJcbiAgICByb3RhdGlvblgudmFsdWUgPSByeDtcclxuICAgIHJvdGF0aW9uWS52YWx1ZSA9IHJ5O1xyXG4gICAgcm90YXRpb25aLnZhbHVlID0gcno7XHJcbiAgICByb3RhdGlvblhWYWx1ZS50ZXh0Q29udGVudCA9IHJ4O1xyXG4gICAgcm90YXRpb25ZVmFsdWUudGV4dENvbnRlbnQgPSByeTtcclxuICAgIHJvdGF0aW9uWlZhbHVlLnRleHRDb250ZW50ID0gcno7XHJcblxyXG4gICAgc2NhbGF0aW9uWFZhbHVlLnRleHRDb250ZW50ID0gc3g7XHJcbiAgICBzY2FsYXRpb25ZVmFsdWUudGV4dENvbnRlbnQgPSBzeTtcclxuICAgIHNjYWxhdGlvblpWYWx1ZS50ZXh0Q29udGVudCA9IHN6O1xyXG4gICAgc2NhbGF0aW9uWC52YWx1ZSA9IHN4KjIwO1xyXG4gICAgc2NhbGF0aW9uWS52YWx1ZSA9IHN4KjIwO1xyXG4gICAgc2NhbGF0aW9uWi52YWx1ZSA9IHN6KjIwO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDYW1lcmFWaWV3KG5vZGUpIHtcclxuICAgIGxldCBlcHNpbG9uID0gMC4wMDE7XHJcbiAgICBcclxuICAgIC8vcmFkaXVzLCByb2xsLCBwaXRjaFxyXG4gICAgbGV0IHJhZGl1cyA9IHBhcnNlRmxvYXQoY2FtZXJhUmFkaXVzLnZhbHVlKS8xMDtcclxuICAgIGxldCByb2xsID0gZGVnVG9SYWQocGFyc2VGbG9hdChjYW1lcmFSb2xsLnZhbHVlKSk7XHJcbiAgICBsZXQgcGl0Y2ggPSBkZWdUb1JhZChwYXJzZUZsb2F0KGNhbWVyYVBpdGNoLnZhbHVlKSk7XHJcbiAgICBub2RlLnZpZXdNYXRyaXguY2FtZXJhID0gW1xyXG4gICAgICAgIHJvbGwsXHJcbiAgICAgICAgcGl0Y2gsXHJcbiAgICAgICAgcmFkaXVzID09IDAgPyBlcHNpbG9uIDogcmFkaXVzLCAgXHJcbiAgICBdO1xyXG4gICAgZm9yKGxldCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKXtcclxuICAgICAgICBoYW5kbGVDYW1lcmFWaWV3KGNoaWxkKTtcclxuICAgIH1cclxufVxyXG5jYW1lcmFSYWRpdXMuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgbGV0IHZhbCA9IHBhcnNlRmxvYXQoY2FtZXJhUmFkaXVzLnZhbHVlKTtcclxuICAgIHZhbCAvPSAxMDtcclxuICAgIFxyXG4gICAgaGFuZGxlQ2FtZXJhVmlldyh0YXJnZXRSb290KTtcclxuICAgIC8vIHVwZGF0ZSBjYW1lcmEgcmFkaXVzIHZhbHVlXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXJhZGl1cy1zbGlkZXItdmFsdWUnKS50ZXh0Q29udGVudCA9IHZhbDtcclxufSlcclxuY2FtZXJhUm9sbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBcclxuICAgIGhhbmRsZUNhbWVyYVZpZXcodGFyZ2V0Um9vdClcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcm9sbC1zbGlkZXItdmFsdWUnKS50ZXh0Q29udGVudCA9IGNhbWVyYVJvbGwudmFsdWU7XHJcbn0pXHJcbmNhbWVyYVBpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBoYW5kbGVDYW1lcmFWaWV3KHRhcmdldFJvb3QpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXBpdGNoLXNsaWRlci12YWx1ZScpLnRleHRDb250ZW50ID0gY2FtZXJhUGl0Y2gudmFsdWU7XHJcbn0pXHJcblxyXG4vL3RoZXRhLCBwaGlcclxuY2FtZXJhVGhldGEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgbGV0IHRoZXRhID0gZGVnVG9SYWQocGFyc2VGbG9hdChjYW1lcmFUaGV0YS52YWx1ZSkpXHJcbiAgICBzZXRPYmxpcXVlVGhldGEodGhldGEpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS10aGV0YS1zbGlkZXItdmFsdWUnKS50ZXh0Q29udGVudCA9IGNhbWVyYVRoZXRhLnZhbHVlO1xyXG59KVxyXG5cclxuY2FtZXJhUGhpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGxldCBwaGkgPSBkZWdUb1JhZChwYXJzZUZsb2F0KGNhbWVyYVBoaS52YWx1ZSkpXHJcbiAgICBzZXRPYmxpcXVlUGhpKHBoaSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXBoaS1zbGlkZXItdmFsdWUnKS50ZXh0Q29udGVudCA9IGNhbWVyYVBoaS52YWx1ZTtcclxufSlcclxuXHJcbnZhciBzdGF0ZSA9IHtcclxuICAgIG9iamVjdHM6IFtdXHJcbn07XHJcblxyXG4vLyB0ZXh0dXJlIHNlbGVjdGlvblxyXG5tYXBwaW5nU2VsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKG1hcHBpbmdTZWxlY3Rpb24udmFsdWUpXHJcbiAgICBjaGFuZ2VNYXBwaW5nVGV4dHVyZShzdGF0ZS5vYmplY3RzLCBtYXBwaW5nU2VsZWN0aW9uLnZhbHVlKTtcclxufSk7IiwiaW1wb3J0IHBpZ01vZGVsIGZyb20gXCIuL3N0cnVjdHMvbW9kZWwvcGlnLmpzXCI7XHJcbmltcG9ydCBjaGlja2VuTW9kZWwgZnJvbSBcIi4vc3RydWN0cy9tb2RlbC9jaGlja2VuLmpzXCI7XHJcbmltcG9ydCBmb3hNb2RlbCBmcm9tIFwiLi9zdHJ1Y3RzL21vZGVsL2ZveC5qc1wiO1xyXG5pbXBvcnQgTWF0NCBmcm9tIFwiLi9zdHJ1Y3RzL21hdGgvTWF0NC5qc1wiO1xyXG5pbXBvcnQgVmVjMyBmcm9tIFwiLi9zdHJ1Y3RzL21hdGgvVmVjMy5qc1wiO1xyXG5pbXBvcnQgVmVjNCBmcm9tIFwiLi9zdHJ1Y3RzL21hdGgvVmVjNC5qc1wiO1xyXG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuL3V0aWxzL0NhbWVyYS5qc1wiO1xyXG5pbXBvcnQgeyBkaXNwbGF5Q29tcG9uZW50LCBjbGVhckNvbXBvbmVudCwgaW5pdE9wdGlvbk1vZGVsLCBoYW5kbGVUcmFuc2Zvcm0gfSBmcm9tIFwiLi9oYW5kbGVyL2V2ZW50SGFuZGxlci5qc1wiO1xyXG5pbXBvcnQgaG9sbG93TW9kZWwgZnJvbSBcIi4vc3RydWN0cy9tb2RlbC9ob2xsb3dUaGluZ3kuanNcIjtcclxuaW1wb3J0IGhvbGxvd1JpbmdNb2RlbCBmcm9tIFwiLi9zdHJ1Y3RzL21vZGVsL3JpbmcuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlUGFwZXJUZXh0dXJlLCBjcmVhdGVFbnZpcm9ubWVudFRleHR1cmUsIGNyZWF0ZUJ1bXBUZXh0dXJlIH0gZnJvbSBcIi4vdXRpbHMvdGV4dHVyZS5qc1wiXHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4vdXRpbHMvQW5pbWF0aW9uLmpzXCI7XHJcblxyXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdsLWNhbnZhc1wiKTtcclxuY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xyXG5cclxuXHJcbmNvbnN0IHZlcnRleFNoYWRlclNvdXJjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVydGV4LXNoYWRlci0zZFwiKT8udGV4dENvbnRlbnQ7XHJcbmNvbnN0IGZyYWdtZW50U2hhZGVyU291cmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmFnbWVudC1zaGFkZXItM2RcIik/LnRleHRDb250ZW50O1xyXG5cclxuLy8gc3RhdGVcclxudmFyIG1vZGVsID0gW2NoaWNrZW5Nb2RlbCwgcGlnTW9kZWwsIGZveE1vZGVsLCBob2xsb3dNb2RlbCwgaG9sbG93UmluZ01vZGVsXTtcclxudmFyIG9iamVjdHM7XHJcbmV4cG9ydCB2YXIgdGFyZ2V0O1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0VGFyZ2V0KHZhbHVlKSB7XHJcbiAgdGFyZ2V0ID0gdmFsdWU7XHJcbn1cclxuZXhwb3J0IHZhciB0YXJnZXRSb290O1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0VGFyZ2V0Um9vdCh2YWx1ZSkge1xyXG4gIHRhcmdldFJvb3QgPSB2YWx1ZTtcclxufVxyXG52YXIgbGlnaHRpbmc7XHJcbnZhciBsaWdodERpcmVjdGlvbjtcclxudmFyIHRleHR1cmU7XHJcbnZhciBwcm9qZWN0aW9uX3R5cGU7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvamVjdGlvblR5cGUobmV3UHJvamVjdGlvbikge1xyXG4gIHByb2plY3Rpb25fdHlwZSA9IG5ld1Byb2plY3Rpb247XHJcbn1cclxudmFyIGZhY3RvcjtcclxudmFyIG9ibGlxdWVfdGhldGE7XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRPYmxpcXVlVGhldGEobmV3VGhldGEpIHtcclxuICBvYmxpcXVlX3RoZXRhID0gbmV3VGhldGE7XHJcbn1cclxudmFyIG9ibGlxdWVfcGhpO1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0T2JsaXF1ZVBoaShuZXdQaGkpIHtcclxuICBvYmxpcXVlX3BoaSA9IG5ld1BoaTtcclxufVxyXG52YXIgbm9ybWFsaXplTGlnaHQ7XHJcbnZhciB3b3JsZFZpZXdQcm9qZWN0aW9uTWF0cml4O1xyXG5cclxuLy8gYW5pbWF0aW9uXHJcbnZhciB0X2FuaW1hdGlvbiA9IDA7XHJcblxyXG5cclxuaW5pdFN0YXRlKCk7XHJcblxyXG5mdW5jdGlvbiBpbml0U3RhdGUoKSB7XHJcbiAgICBvYmplY3RzID0gbW9kZWxbMF07XHJcbiAgICBmb2N1cyA9IG51bGw7XHJcbiAgICBsaWdodGluZyA9IGZhbHNlO1xyXG4gICAgbGlnaHREaXJlY3Rpb24gPSBWZWMzLmZyb21BcnJheShbMCwwLDFdKVxyXG4gICAgdGV4dHVyZSA9IFwibm9uZVwiO1xyXG4gICAgcHJvamVjdGlvbl90eXBlID0gXCJvcnRob2dyYXBoaWNcIjtcclxuICAgIGZhY3RvciA9IDAuMDtcclxuICAgIG9ibGlxdWVfdGhldGEgPSA5MC4wO1xyXG4gICAgb2JsaXF1ZV9waGkgPSA5MC4wO1xyXG4gICAgc2V0RGVmYXVsdFJvdGF0aW9uKG9iamVjdHMpXHJcbiAgICBkaXNwbGF5Q29tcG9uZW50KDAsIG9iamVjdHMpO1xyXG4gICAgaW5pdE9wdGlvbk1vZGVsKG1vZGVsKTtcclxuICAgIGhhbmRsZVRyYW5zZm9ybShvYmplY3RzWzBdKVxyXG5cclxufVxyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIGlmKCFnbCl7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV2ViR0wgbm90IHN1cHBvcnRlZFwiKTtcclxuICAgIH1cclxuICAgIHRhcmdldCA9IG9iamVjdHNbMF07XHJcbiAgICB0YXJnZXRSb290ID0gdGFyZ2V0O1xyXG5cclxuXHJcbiAgICByZW5kZXIoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RGVmYXVsdFN0YXRlKG9iamVjdHMpIHtcclxuICAgIG9iamVjdHMuZm9yRWFjaChvYmplY3QgPT4ge1xyXG4gICAgICAgIGlmICghb2JqZWN0Lm1vZGVsLmNvbG9ycykge1xyXG4gICAgICAgICAgICBpZiAoIW9iamVjdC5waWNrZWRDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0Lm1vZGVsLmNvbG9ycyA9IGdlbmVyYXRlQ29sb3JzKG9iamVjdC5tb2RlbC52ZXJ0aWNlcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QubW9kZWwuY29sb3JzID0gZ2VuZXJhdGVDb2xvcnMoXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Lm1vZGVsLnZlcnRpY2VzLFxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5waWNrZWRDb2xvclxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgaWYgKCFvYmplY3QucHJvZ3JhbSAmJiAhbGlnaHRpbmcpIHtcclxuICAgICAgICAgICAgb2JqZWN0LnByb2dyYW0gPSBjcmVhdGVTaGFkZXJQcm9ncmFtKFxyXG4gICAgICAgICAgICAgICAgZ2wsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UsXHJcbiAgICAgICAgICAgICAgICBmcmFnbWVudFNoYWRlclNvdXJjZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgLy8gICBpZiAob2JqZWN0LmFuaW1hdGlvbi5pc09iamVjdEFuaW1hdGUgJiYgb2JqZWN0LmFuaW1hdGlvbi5hbmltYXRlKSB7XHJcbiAgICAgICAgLy8gICAgIG9iamVjdC50cmFuc2Zvcm0gPSBvYmplY3QuYW5pbWF0aW9uLmFuaW1hdGVbY291bnRlciAlIGZwc107XHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgLy8gb2JqZWN0LnRyYW5zZm9ybSA9IG9iamVjdC5hbmltYXRpb24uYW5pbWF0ZVtjb3VudGVyICUgZnBzXTtcclxuICAgICAgICBvYmplY3QubG9jYWxNYXRyaXggPSBzZXRUcmFuc2Zvcm0ob2JqZWN0KTtcclxuICAgICAgICBpZiAob2JqZWN0LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc2V0RGVmYXVsdFN0YXRlKG9iamVjdC5jaGlsZHJlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VHJhbnNmb3JtKG9iamVjdCkge1xyXG4gICAgLyogU2V0dXAgdHJhbnNmb3JtIG1hdHJpeCAqL1xyXG5cclxuICAgIHZhciB0cmFuc2Zvcm1NYXRyaXggPSBNYXQ0LnRyYW5zbGF0ZShcclxuICAgICAgb2JqZWN0LnRyYW5zZm9ybS50cmFuc2xhdGVbMF0sXHJcbiAgICAgIG9iamVjdC50cmFuc2Zvcm0udHJhbnNsYXRlWzFdLFxyXG4gICAgICBvYmplY3QudHJhbnNmb3JtLnRyYW5zbGF0ZVsyXVxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgX2NlbnRlciA9IG9iamVjdC5tb2RlbC5jZW50ZXJcclxuICAgIGlmKF9jZW50ZXIpe1xyXG4gICAgICB0cmFuc2Zvcm1NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICAgIHRyYW5zZm9ybU1hdHJpeCxcclxuICAgICAgICBNYXQ0LnRyYW5zbGF0ZShfY2VudGVyWzBdLCBfY2VudGVyWzFdLCBfY2VudGVyWzJdKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICB0cmFuc2Zvcm1NYXRyaXgsXHJcbiAgICAgIE1hdDQucm90YXRlWChvYmplY3QudHJhbnNmb3JtLnJvdGF0ZVswXSlcclxuICAgICk7XHJcbiAgXHJcbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICB0cmFuc2Zvcm1NYXRyaXgsXHJcbiAgICAgIE1hdDQucm90YXRlWShvYmplY3QudHJhbnNmb3JtLnJvdGF0ZVsxXSlcclxuICAgICk7XHJcbiAgXHJcbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICB0cmFuc2Zvcm1NYXRyaXgsXHJcbiAgICAgIE1hdDQucm90YXRlWihvYmplY3QudHJhbnNmb3JtLnJvdGF0ZVsyXSlcclxuICAgICk7XHJcblxyXG4gICAgaWYoX2NlbnRlcil7XHJcbiAgICAgIHRyYW5zZm9ybU1hdHJpeCA9IE1hdDQubXVsdGlwbHkoXHJcbiAgICAgICAgdHJhbnNmb3JtTWF0cml4LFxyXG4gICAgICAgIE1hdDQudHJhbnNsYXRlKC1fY2VudGVyWzBdLCAtX2NlbnRlclsxXSwgLV9jZW50ZXJbMl0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICB0cmFuc2Zvcm1NYXRyaXgsXHJcbiAgICAgIE1hdDQuc2NhbGUoXHJcbiAgICAgICAgb2JqZWN0LnRyYW5zZm9ybS5zY2FsZVswXSxcclxuICAgICAgICBvYmplY3QudHJhbnNmb3JtLnNjYWxlWzFdLFxyXG4gICAgICAgIG9iamVjdC50cmFuc2Zvcm0uc2NhbGVbMl1cclxuICAgICAgKVxyXG4gICAgKTtcclxuICBcclxuICAgIHJldHVybiB0cmFuc2Zvcm1NYXRyaXg7XHJcbiAgfVxyXG5cclxuZnVuY3Rpb24gc2V0RGVmYXVsdFJvdGF0aW9uKG9iamVjdHMpIHtcclxuICAgIGZvcihsZXQgb2JqZWN0IG9mIG9iamVjdHMpe1xyXG4gICAgICAgIG9iamVjdC50cmFuc2Zvcm0ucm90YXRlID0gb2JqZWN0LnRyYW5zZm9ybS5yb3RhdGUubWFwKCh2YWwpID0+IGRlZ1RvUmFkKHZhbCkpO1xyXG4gICAgICAgIGlmKG9iamVjdC5jaGlsZHJlbi5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgc2V0RGVmYXVsdFJvdGF0aW9uKG9iamVjdC5jaGlsZHJlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyTG9vcChvYmplY3RzKSB7XHJcbiAgICBvYmplY3RzLmZvckVhY2gob2JqZWN0ID0+IHtcclxuICAgICAgICBnbC51c2VQcm9ncmFtKG9iamVjdC5wcm9ncmFtKTtcclxuICAgICAgICB2YXIgbW9kZWxNYXRyaXggPSBvYmplY3QuZ2V0V29ybGRNYXRyaXgoKTtcclxuXHJcbiAgICAgICAgb2JqZWN0LndvcmxkTWF0cml4ID0gc2V0UHJvamVjdGlvbk1hdHJpeChvYmplY3Qud29ybGRNYXRyaXgsIG9iamVjdClcclxuXHJcblxyXG4gICAgICAgIHZhciBhX3Bvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheShvYmplY3QubW9kZWwudmVydGljZXMuZmxhdCgxKSk7XHJcbiAgICAgICAgdmFyIGFfbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheShvYmplY3QubW9kZWwubm9ybWFscy5mbGF0KDEpKTtcclxuICAgICAgICB2YXIgYV9jb2xvciA9IG5ldyBGbG9hdDMyQXJyYXkob2JqZWN0Lm1vZGVsLmNvbG9ycy5mbGF0KDEpKTtcclxuICAgICAgICB2YXIgYV90ZXh0dXJlID0gbmV3IEZsb2F0MzJBcnJheShvYmplY3QubW9kZWwudGV4Q29vcmQpO1xyXG4gICAgICAgIHZhciBhX3RhbmdlbnQgPSBuZXcgRmxvYXQzMkFycmF5KG9iamVjdC5tb2RlbC50YW5nZW50cy5mbGF0KDEpKTtcclxuICAgICAgICB2YXIgYV9iaXRhbmdlbnQgPSBuZXcgRmxvYXQzMkFycmF5KG9iamVjdC5tb2RlbC5iaXRhbmdlbnRzLmZsYXQoMSkpO1xyXG5cclxuICAgICAgICBzZXRBdHRyKGdsLCBvYmplY3QucHJvZ3JhbSwgYV9wb3NpdGlvbiwgYV9ub3JtYWwsIGFfY29sb3IsIGFfdGV4dHVyZSwgYV90YW5nZW50LCBhX2JpdGFuZ2VudCk7XHJcbiAgICAgICAgdmFyIHVuaWZvcm1zID0ge1xyXG4gICAgICAgICAgICB1V29ybGRWaWV3UHJvamVjdGlvbjogb2JqZWN0LndvcmxkTWF0cml4LFxyXG4gICAgICAgICAgICB1V29ybGRJbnZlcnNlVHJhbnNwb3NlOiBvYmplY3Qud29ybGRJbnZlcnNlTWF0cml4LFxyXG4gICAgICAgICAgICB1UmV2ZXJzZUxpZ2h0RGlyZWN0aW9uOiBub3JtYWxpemVMaWdodCxcclxuICAgICAgICAgICAgdUNvbG9yOiBvYmplY3QucGlja2VkQ29sb3IuY29uY2F0KDEuMCksXHJcbiAgICAgICAgICAgIHVNb2RlbE1hdHJpeDogbW9kZWxNYXRyaXgsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRVbmlmb3JtcyhnbCwgb2JqZWN0LnByb2dyYW0sIHVuaWZvcm1zKTtcclxuXHJcbiAgICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRVMsIDAsIG9iamVjdC5tb2RlbC52ZXJ0aWNlcy5sZW5ndGgpO1xyXG4gICAgICAgIGlmIChvYmplY3QuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZW5kZXJMb29wKG9iamVjdC5jaGlsZHJlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbndpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDEpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH0pKCk7XHJcblxyXG5cclxuZnVuY3Rpb24gcmVuZGVyKG5vdykge1xyXG4gICAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcclxuICAgIGdsLmNsZWFyQ29sb3IoMS4wLCAxLjAsIDEuMCwgMS4wKTtcclxuICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcclxuXHJcbiAgICBnbC5lbmFibGUoZ2wuQ1VMTF9GQUNFKTtcclxuICAgIGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcclxuXHJcbiAgICBzZXREZWZhdWx0U3RhdGUob2JqZWN0cyk7XHJcbiAgICAvLyBkZWx0YSB0aW1lXHJcbiAgICBpZighbm93KSBub3cgPSAwO1xyXG4gICAgbm93ICo9IDAuMDAxO1xyXG5cclxuICAgIGxldCBkZWx0YVRpbWUgPSBub3cgLSB0X2FuaW1hdGlvbjtcclxuICAgIHRfYW5pbWF0aW9uID0gbm93O1xyXG5cclxuXHJcblxyXG4gICAgb2JqZWN0c1swXS5zZXRXb3JsZE10eChudWxsKTtcclxuXHJcbiAgICBub3JtYWxpemVMaWdodCA9IFZlYzMudW5pdFZlY3RvcihsaWdodERpcmVjdGlvbikuYXNBcnJheSgpXHJcbiAgICBBbmltYXRpb24uYW5pbWF0ZSh0YXJnZXRSb290LCBkZWx0YVRpbWUpO1xyXG4gICAgcmVuZGVyTG9vcChvYmplY3RzKTtcclxuICAgIFxyXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lKHJlbmRlcik7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldFByb2plY3Rpb25NYXRyaXgobWF0cml4LCBvYmplY3QpIHtcclxuICAgIC8vIGNvbnN0IGNhbWVyYSA9IHNldENhbWVyYShvYmplY3QpO1xyXG4gICAgY29uc3QgcHJvamVjdGlvblZpZXcgPSBDYW1lcmEucHJvamVjdGlvbk1hdHJpeChwcm9qZWN0aW9uX3R5cGUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVnVG9SYWQoNDUpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjYW52YXMud2lkdGggLyBjYW52YXMuaGVpZ2h0KSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3Qudmlld01hdHJpeC5uZWFyLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC52aWV3TWF0cml4LmZhcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ibGlxdWVfdGhldGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmxpcXVlX3BoaSlcclxuICAgIGNvbnN0IHZpZXdNYXRyaXggPSBDYW1lcmEudmlld01hdHJpeChvYmplY3Qudmlld01hdHJpeC5jYW1lcmEsIG9iamVjdC52aWV3TWF0cml4Lmxvb2tBdCwgb2JqZWN0LnZpZXdNYXRyaXgudXApO1xyXG4gICAgdmFyIHZpZXdQcm9qZWN0aW9uTWF0cml4ID0gTWF0NC5tdWx0aXBseShwcm9qZWN0aW9uVmlldywgdmlld01hdHJpeCk7XHJcbiAgICBpZiAoZmFjdG9yIDwgMC4wMSkge1xyXG4gICAgICAgIGZhY3RvciA9IDAuMDE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb2plY3Rpb25fdHlwZSA9PT0gXCJwZXJzcGVjdGl2ZVwiKSB7XHJcbiAgICAgICAgdmlld1Byb2plY3Rpb25NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICAgICAgICBDYW1lcmEubWFrZVpUb1dNYXRyaXgoZmFjdG9yKSxcclxuICAgICAgICAgICAgdmlld1Byb2plY3Rpb25NYXRyaXgsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB3b3JsZFZpZXdQcm9qZWN0aW9uTWF0cml4ID0gTWF0NC5tdWx0aXBseSh2aWV3UHJvamVjdGlvbk1hdHJpeCwgbWF0cml4KTtcclxuXHJcbiAgICByZXR1cm4gd29ybGRWaWV3UHJvamVjdGlvbk1hdHJpeDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VNb2RlbE9iamVjdCAoaW5kZXgpIHtcclxuICAgIG9iamVjdHMgPSBtb2RlbFtpbmRleF07XHJcbiAgICBzZXRUYXJnZXQob2JqZWN0c1swXSk7XHJcbiAgICBzZXRUYXJnZXRSb290KG9iamVjdHNbMF0pO1xyXG4gICAgY2xlYXJDb21wb25lbnQoKTtcclxuICAgIGRpc3BsYXlDb21wb25lbnQoMCwgb2JqZWN0cyk7XHJcbiAgICBoYW5kbGVUcmFuc2Zvcm0ob2JqZWN0c1swXSk7XHJcbiAgICByZW5kZXIoKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VNYXBwaW5nVGV4dHVyZShvYmplY3RzLCB0ZXh0dXJlVHlwZSkge1xyXG4gIG9iamVjdHMuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICBpZiAodGV4dHVyZVR5cGUgPT09IFwiMFwiKSB7XHJcbiAgICAgIG9iamVjdC5wcm9ncmFtID0gY3JlYXRlU2hhZGVyUHJvZ3JhbShcclxuICAgICAgICBnbCxcclxuICAgICAgICB2ZXJ0ZXhfc2hhZGVyXzNkLFxyXG4gICAgICAgIGZyYWdtZW50X3NoYWRlcl8zZF9ub19saWdodGluZ1xyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIGlmICh0ZXh0dXJlVHlwZSA9PT0gXCIxXCIpIHtcclxuICAgICAgY3JlYXRlUGFwZXJUZXh0dXJlKGdsKTtcclxuICAgICAgb2JqZWN0LnByb2dyYW0gPSBjcmVhdGVTaGFkZXJQcm9ncmFtKFxyXG4gICAgICAgIGdsLFxyXG4gICAgICAgIHZlcnRleF9zaGFkZXJfM2QsXHJcbiAgICAgICAgZnJhZ21lbnRfc2hhZGVyX3RleHR1cmVcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAodGV4dHVyZVR5cGUgPT09IFwiMlwiKSB7XHJcbiAgICAgIGNyZWF0ZUVudmlyb25tZW50VGV4dHVyZShnbCk7XHJcbiAgICAgIG9iamVjdC5wcm9ncmFtID0gY3JlYXRlU2hhZGVyUHJvZ3JhbShcclxuICAgICAgICBnbCxcclxuICAgICAgICB2ZXJ0ZXhfc2hhZGVyXzNkLFxyXG4gICAgICAgIGZyYWdtZW50X3NoYWRlcl9lbnZpcm9ubWVudFxyXG4gICAgICApXHJcbiAgICB9IGVsc2UgaWYgKHRleHR1cmVUeXBlID09PSBcIjNcIikge1xyXG4gICAgICBjcmVhdGVCdW1wVGV4dHVyZShnbCk7XHJcbiAgICAgIG9iamVjdC5wcm9ncmFtID0gY3JlYXRlU2hhZGVyUHJvZ3JhbShcclxuICAgICAgICBnbCxcclxuICAgICAgICB2ZXJ0ZXhfc2hhZGVyXzNkLFxyXG4gICAgICAgIGZyYWdtZW50X3NoYWRlcl9idW1wXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAob2JqZWN0LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgY2hhbmdlTWFwcGluZ1RleHR1cmUob2JqZWN0LmNoaWxkcmVuLCB0ZXh0dXJlVHlwZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0iLCJpbXBvcnQgVmVjNCBmcm9tIFwiLi9WZWM0LmpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdDR7XHJcbiAgICBzdGF0aWMgZ2V0RW1wdHkoKXtcclxuICAgICAgICByZXR1cm4gWzAsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDBdXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldElkZW50aXR5KCl7XHJcbiAgICAgICAgcmV0dXJuIFsxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAxXTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIGdldFRyYW5zbGF0aW9uKHgsIHksIHope1xyXG4gICAgICAgIHJldHVybiBbMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICAgICAgeCwgeSwgeiwgMV07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFNjYWxlKHgsIHksIHope1xyXG4gICAgICAgIHJldHVybiBbeCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIHksIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCB6LCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMV07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFJvdGF0aW9uWCh0aGV0YSl7XHJcbiAgICAgICAgcmV0dXJuIFsxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgTWF0aC5jb3ModGhldGEpLCAtTWF0aC5zaW4odGhldGEpLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgTWF0aC5zaW4odGhldGEpLCBNYXRoLmNvcyh0aGV0YSksIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAxXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Um90YXRpb25ZKHRoZXRhKXtcclxuICAgICAgICByZXR1cm4gW01hdGguY29zKHRoZXRhKSwgMCwgTWF0aC5zaW4odGhldGEpLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIC1NYXRoLnNpbih0aGV0YSksIDAsIE1hdGguY29zKHRoZXRhKSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRSb3RhdGlvbloodGhldGEpe1xyXG4gICAgICAgIHJldHVybiBbTWF0aC5jb3ModGhldGEpLCAtTWF0aC5zaW4odGhldGEpLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgTWF0aC5zaW4odGhldGEpLCBNYXRoLmNvcyh0aGV0YSksIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMV07XHJcbiAgICB9ICAgXHJcbiAgICBcclxuICAgIHN0YXRpYyB0cmFuc3Bvc2UoYSkge1xyXG4gICAgICAgIGlmICghYSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gb3IgcmV0dXJuIGEgZGVmYXVsdCBtYXRyaXggb3IgaGFuZGxlIHRoZSBudWxsIGNhc2UgYXBwcm9wcmlhdGVseVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBhWzBdLCBhWzRdLCBhWzhdLCBhWzEyXSxcclxuICAgICAgICAgICAgYVsxXSwgYVs1XSwgYVs5XSwgYVsxM10sXHJcbiAgICAgICAgICAgIGFbMl0sIGFbNl0sIGFbMTBdLCBhWzE0XSxcclxuICAgICAgICAgICAgYVszXSwgYVs3XSwgYVsxMV0sIGFbMTVdXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaW52ZXJzZShhKSB7XHJcbiAgICAgICAgdmFyIGEwMCA9IGFbMCAqIDQgKyAwXTtcclxuICAgICAgICB2YXIgYTAxID0gYVswICogNCArIDFdO1xyXG4gICAgICAgIHZhciBhMDIgPSBhWzAgKiA0ICsgMl07XHJcbiAgICAgICAgdmFyIGEwMyA9IGFbMCAqIDQgKyAzXTtcclxuICAgICAgICB2YXIgYTEwID0gYVsxICogNCArIDBdO1xyXG4gICAgICAgIHZhciBhMTEgPSBhWzEgKiA0ICsgMV07XHJcbiAgICAgICAgdmFyIGExMiA9IGFbMSAqIDQgKyAyXTtcclxuICAgICAgICB2YXIgYTEzID0gYVsxICogNCArIDNdO1xyXG4gICAgICAgIHZhciBhMjAgPSBhWzIgKiA0ICsgMF07XHJcbiAgICAgICAgdmFyIGEyMSA9IGFbMiAqIDQgKyAxXTtcclxuICAgICAgICB2YXIgYTIyID0gYVsyICogNCArIDJdO1xyXG4gICAgICAgIHZhciBhMjMgPSBhWzIgKiA0ICsgM107XHJcbiAgICAgICAgdmFyIGEzMCA9IGFbMyAqIDQgKyAwXTtcclxuICAgICAgICB2YXIgYTMxID0gYVszICogNCArIDFdO1xyXG4gICAgICAgIHZhciBhMzIgPSBhWzMgKiA0ICsgMl07XHJcbiAgICAgICAgdmFyIGEzMyA9IGFbMyAqIDQgKyAzXTtcclxuICAgICAgICB2YXIgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwO1xyXG4gICAgICAgIHZhciBiMDEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTA7XHJcbiAgICAgICAgdmFyIGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMDtcclxuICAgICAgICB2YXIgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExO1xyXG4gICAgICAgIHZhciBiMDQgPSBhMDEgKiBhMTMgLSBhMDMgKiBhMTE7XHJcbiAgICAgICAgdmFyIGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMjtcclxuICAgICAgICB2YXIgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwO1xyXG4gICAgICAgIHZhciBiMDcgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzA7XHJcbiAgICAgICAgdmFyIGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMDtcclxuICAgICAgICB2YXIgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxO1xyXG4gICAgICAgIHZhciBiMTAgPSBhMjEgKiBhMzMgLSBhMjMgKiBhMzE7XHJcbiAgICAgICAgdmFyIGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMjtcclxuXHJcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxyXG4gICAgICAgIHZhciBkZXQgPVxyXG4gICAgICAgIGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcclxuXHJcbiAgICAgICAgaWYgKCFkZXQpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGV0ID0gMS4wIC8gZGV0O1xyXG5cclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAoYTExICogYjExIC0gYTEyICogYjEwICsgYTEzICogYjA5KSAqIGRldCxcclxuICAgICAgICAgICAgKGEwMiAqIGIxMCAtIGEwMSAqIGIxMSAtIGEwMyAqIGIwOSkgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMzEgKiBiMDUgLSBhMzIgKiBiMDQgKyBhMzMgKiBiMDMpICogZGV0LFxyXG4gICAgICAgICAgICAoYTIyICogYjA0IC0gYTIxICogYjA1IC0gYTIzICogYjAzKSAqIGRldCxcclxuICAgICAgICAgICAgKGExMiAqIGIwOCAtIGExMCAqIGIxMSAtIGExMyAqIGIwNykgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMDAgKiBiMTEgLSBhMDIgKiBiMDggKyBhMDMgKiBiMDcpICogZGV0LFxyXG4gICAgICAgICAgICAoYTMyICogYjAyIC0gYTMwICogYjA1IC0gYTMzICogYjAxKSAqIGRldCxcclxuICAgICAgICAgICAgKGEyMCAqIGIwNSAtIGEyMiAqIGIwMiArIGEyMyAqIGIwMSkgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMTAgKiBiMTAgLSBhMTEgKiBiMDggKyBhMTMgKiBiMDYpICogZGV0LFxyXG4gICAgICAgICAgICAoYTAxICogYjA4IC0gYTAwICogYjEwIC0gYTAzICogYjA2KSAqIGRldCxcclxuICAgICAgICAgICAgKGEzMCAqIGIwNCAtIGEzMSAqIGIwMiArIGEzMyAqIGIwMCkgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMjEgKiBiMDIgLSBhMjAgKiBiMDQgLSBhMjMgKiBiMDApICogZGV0LFxyXG4gICAgICAgICAgICAoYTExICogYjA3IC0gYTEwICogYjA5IC0gYTEyICogYjA2KSAqIGRldCxcclxuICAgICAgICAgICAgKGEwMCAqIGIwOSAtIGEwMSAqIGIwNyArIGEwMiAqIGIwNikgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMzEgKiBiMDEgLSBhMzAgKiBiMDMgLSBhMzIgKiBiMDApICogZGV0LFxyXG4gICAgICAgICAgICAoYTIwICogYjAzIC0gYTIxICogYjAxICsgYTIyICogYjAwKSAqIGRldCxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0cmFuc2xhdGUgKHR4LCB0eSwgdHopIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICB0eCwgdHksIHR6LCAxXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm4gYiAqIGFcclxuICAgIHN0YXRpYyBtdWx0aXBseShhLCBiKXtcclxuICAgICAgICBsZXQgcmVzID0gTWF0NC5nZXRFbXB0eSgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgKytpKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgKytqKSB7XHJcbiAgICAgICAgICAgICAgICByZXNbaSAqIDQgKyBqXSA9IFZlYzQuZG90KE1hdDQuZ2V0Um93KGIsIGkpLCBNYXQ0LmdldENvbHVtbihhLCBqKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByb3RhdGVYKHJhZCkge1xyXG4gICAgICAgIHZhciBzaW4gPSBNYXRoLnNpbihyYWQpO1xyXG4gICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhyYWQpO1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIDEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIGNvcywgc2luLCAwLFxyXG4gICAgICAgICAgICAwLCAtc2luLCBjb3MsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByb3RhdGVZKHJhZCkge1xyXG4gICAgICAgIHZhciBzaW4gPSBNYXRoLnNpbihyYWQpO1xyXG4gICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhyYWQpO1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIGNvcywgMCwgLXNpbiwgMCxcclxuICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgc2luLCAwLCBjb3MsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByb3RhdGVaKHJhZCkge1xyXG4gICAgICAgIHZhciBzaW4gPSBNYXRoLnNpbihyYWQpO1xyXG4gICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhyYWQpO1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIGNvcywgc2luLCAwLCAwLFxyXG4gICAgICAgICAgICAtc2luLCBjb3MsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzY2FsZSAoc3gsIHN5LCBzeikge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHN4LCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCBzeSwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgc3osIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHV0aWxzXHJcbiAgICBzdGF0aWMgZ2V0Um93KG1hdHJpeCwgcm93KXtcclxuICAgICAgICAvLyB1c2UgVmVjNCB0byBnZXQgdGhlIHJvd1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjNChtYXRyaXhbcm93ICogNF0sIG1hdHJpeFtyb3cgKiA0ICsgMV0sIG1hdHJpeFtyb3cgKiA0ICsgMl0sIG1hdHJpeFtyb3cgKiA0ICsgM10pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb2x1bW4obWF0cml4LCBjb2x1bW4pe1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjNChtYXRyaXhbY29sdW1uXSwgbWF0cml4W2NvbHVtbiArIDRdLCBtYXRyaXhbY29sdW1uICsgOF0sIG1hdHJpeFtjb2x1bW4gKyAxMl0pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjM3tcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIHope1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLnogPSB6O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGFkZChhLCBiKXtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzMoYS54ICsgYi54LCBhLnkgKyBiLnksIGEueiArIGIueik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHN1YihhLCBiKXtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzMoYS54IC0gYi54LCBhLnkgLSBiLnksIGEueiAtIGIueik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRvdChhLCBiKXtcclxuICAgICAgICByZXR1cm4gYS54ICogYi54ICsgYS55ICogYi55ICsgYS56ICogYi56O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcm9zcyhhLCBiKXtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzMoYS56ICogYi55IC0gYS55ICogYi56LCBhLnggKiBiLnogLSBhLnogKiBiLnggLGEueSAqIGIueCAtIGEueCAqIGIueSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5vcm0oYSl7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChhLnggKiBhLnggKyBhLnkgKiBhLnkgKyBhLnogKiBhLnopO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1bml0VmVjdG9yKGEpe1xyXG4gICAgICAgIGxldCBub3JtID0gVmVjMy5ub3JtKGEpO1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjMyhhLnggLyBub3JtLCBhLnkgLyBub3JtLCBhLnogLyBub3JtKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGFzQXJyYXkoKXsgIFxyXG4gICAgICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnksIHRoaXMuel07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZyb21BcnJheShhcnJheSl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWMzKGFycmF5WzBdLCBhcnJheVsxXSwgYXJyYXlbMl0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFZlYzMgZnJvbSBcIi4vVmVjMy5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjNHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIHosIHcpe1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLnogPSB6O1xyXG4gICAgICAgIHRoaXMudyA9IHc7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYWRkKGEsIGIpe1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjNChhLnggKyBiLngsIGEueSArIGIueSwgYS56ICsgYi56LCBhLncgKyBiLncpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkb3QoYSwgYil7XHJcbiAgICAgICAgbGV0IHJlcyA9IGEueCAqIGIueCArIGEueSAqIGIueSArIGEueiAqIGIueiArIGEudyAqIGIud1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5vcm0oYSl7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChhLnggKiBhLnggKyBhLnkgKiBhLnkgKyBhLnogKiBhLnogKyBhLncgKiBhLncpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBub3JtYWxpemUoYSl7XHJcbiAgICAgICAgbGV0IG5vcm0gPSBWZWM0Lm5vcm0oYSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWM0KGEueCAvIG5vcm0sIGEueSAvIG5vcm0sIGEueiAvIG5vcm0sIGEudyAvIG5vcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc1ZlYzMoYSl7ICAgXHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWMzKGEueCwgYS55LCBhLnopO1xyXG4gICAgfVxyXG5cclxuICAgIGFzQXJyYXkoKXsgIFxyXG4gICAgICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnksIHRoaXMueiwgdGhpcy53XTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZnJvbUFycmF5KGFycmF5KXtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzQoYXJyYXlbMF0sIGFycmF5WzFdLCBhcnJheVsyXSwgYXJyYXlbM10pO1xyXG4gICAgfVxyXG5cclxufSIsIlxyXG5leHBvcnQgZnVuY3Rpb24gZGVnVG9SYWQoZGVncmVlcyl7XHJcbiAgICByZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XHJcbn0gICBcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYWRUb0RlZyhyYWRpYW5zKXtcclxuICAgIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcclxufSIsImltcG9ydCBOb2RlIGZyb20gXCIuLi9ub2RlLmpzXCI7XHJcblxyXG4vLyBDcmVhdGUgdGhlIGNoaWNrZW4gYm9keSBub2RlXHJcbmNvbnN0IGNoaWNrZW4gPSBuZXcgTm9kZSgpO1xyXG5jaGlja2VuLmZsYWcgPSBcImFydGljdWxhdGVkXCI7XHJcbmNoaWNrZW4ubmFtZSA9IFwiY2hpY2tlblwiO1xyXG5jaGlja2VuLm1vZGVsID0gYm94TW9kZWwoMSwgMS41LCAxLCBbMCwgMCwgMF0pO1xyXG5jaGlja2VuLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgcm90YXRlOiBbNDIsIC01NSwgMjddLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuY2hpY2tlbi5waWNrZWRDb2xvciA9IFsxLCAxLCAwXTtcclxuY2hpY2tlbi52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5jaGlja2VuLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogdHJ1ZSxcclxuICAgIGRlZ0FuaW1hdGU6IDEsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogbnVsbFxyXG4gICAgXHJcbn07XHJcblxyXG4vLyBDcmVhdGUgdGhlIGhlYWQgbm9kZVxyXG5jb25zdCBoZWFkID0gbmV3IE5vZGUoKTtcclxuaGVhZC5uYW1lID0gXCJoZWFkXCI7XHJcbmhlYWQubW9kZWwgPSBib3hNb2RlbCgwLjYsIDAuNiwgMC44LCBbMCwgMCwgMF0pO1xyXG5oZWFkLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuNzUsIDAuNzUsIDBdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5oZWFkLnBpY2tlZENvbG9yID0gWzEsIDEsIDBdO1xyXG5oZWFkLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmhlYWQuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbi8vIENyZWF0ZSB0aGUgYmVhayBub2RlXHJcbmNvbnN0IGJlYWsgPSBuZXcgTm9kZSgpO1xyXG5iZWFrLm5hbWUgPSBcImJlYWtcIjtcclxuYmVhay5tb2RlbCA9IGJveE1vZGVsKDAuMiwgMC4yLCAwLjMsIFstMC42NSwgLTAuMSwgMF0pO1xyXG5iZWFrLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzEsIDAsIDBdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5iZWFrLnBpY2tlZENvbG9yID0gWzEsIDAuNSwgMF07XHJcbmJlYWsudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuYmVhay5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3Qgd2hpdGVMZWZ0RXllID0gbmV3IE5vZGUoKTtcclxud2hpdGVMZWZ0RXllLm5hbWUgPSBcIndoaXRlTGVmdEV5ZVwiO1xyXG53aGl0ZUxlZnRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjA3NSwgMC4xLCAwLjEsIFstMC43NSwgMC4yLCAwLjE1XSk7XHJcbndoaXRlTGVmdEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFsxLjA0LCAwLCAwXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxud2hpdGVMZWZ0RXllLnBpY2tlZENvbG9yID0gWzAuOTksIDAuOTksIDAuOTldO1xyXG53aGl0ZUxlZnRFeWUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxud2hpdGVMZWZ0RXllLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCBibGFja0xlZnRFeWUgPSBuZXcgTm9kZSgpO1xyXG5ibGFja0xlZnRFeWUubmFtZSA9IFwiYmxhY2tMZWZ0RXllXCI7XHJcbmJsYWNrTGVmdEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMDUsIDAuMDUsIDAuMDUsIFstMC43NSwgMC4yLCAwLjE1XSk7XHJcbmJsYWNrTGVmdEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLjA2LCAwLCAwXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuYmxhY2tMZWZ0RXllLnBpY2tlZENvbG9yID0gWzAsIDAsIDBdO1xyXG5ibGFja0xlZnRFeWUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuYmxhY2tMZWZ0RXllLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCB3aGl0ZVJpZ2h0RXllID0gbmV3IE5vZGUoKTtcclxud2hpdGVSaWdodEV5ZS5uYW1lID0gXCJ3aGl0ZVJpZ2h0RXllXCI7XHJcbndoaXRlUmlnaHRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjA3NSwgMC4xLCAwLjEsIFstMC43NSwgMC4yLCAwLjE1XSk7XHJcbndoaXRlUmlnaHRFeWUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMS4wNCwgMCwgLTAuMzJdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG53aGl0ZVJpZ2h0RXllLnBpY2tlZENvbG9yID0gWzAuOTksIDAuOTksIDAuOTldO1xyXG53aGl0ZVJpZ2h0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbndoaXRlUmlnaHRFeWUuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IGJsYWNrUmlnaHRFeWUgPSBuZXcgTm9kZSgpO1xyXG5ibGFja1JpZ2h0RXllLm5hbWUgPSBcImJsYWNrUmlnaHRFeWVcIjtcclxuYmxhY2tSaWdodEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMDUsIDAuMDUsIDAuMDUsIFstMC43NSwgMC4yLCAwLjE1XSk7XHJcbmJsYWNrUmlnaHRFeWUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMC4wNiwgMCwgMF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmJsYWNrUmlnaHRFeWUucGlja2VkQ29sb3IgPSBbMCwgMCwgMF07XHJcbmJsYWNrUmlnaHRFeWUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuYmxhY2tSaWdodEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuXHJcblxyXG4vLyBDcmVhdGUgdGhlIGxlZnQgd2luZyBub2RlXHJcbmNvbnN0IGxlZnRXaW5nID0gbmV3IE5vZGUoKTtcclxubGVmdFdpbmcubmFtZSA9IFwibGVmdFdpbmdcIjtcclxubGVmdFdpbmcubW9kZWwgPSBib3hNb2RlbCgwLjUsIDAuMSwgMSwgWzAsIDAsIDBdKTtcclxubGVmdFdpbmcudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMCwgMCwgLTAuNzVdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgOTBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubGVmdFdpbmcucGlja2VkQ29sb3IgPSBbMSwgMSwgMF07XHJcbmxlZnRXaW5nLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmxlZnRXaW5nLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG4vLyBDcmVhdGUgdGhlIHJpZ2h0IHdpbmcgbm9kZVxyXG5jb25zdCByaWdodFdpbmcgPSBuZXcgTm9kZSgpO1xyXG5yaWdodFdpbmcubmFtZSA9IFwicmlnaHRXaW5nXCI7XHJcbnJpZ2h0V2luZy5tb2RlbCA9IGJveE1vZGVsKDAuNSwgMC4xLCAxLCBbMCwgMCwgMF0pO1xyXG5yaWdodFdpbmcudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMCwgMCwgMC43NV0sXHJcbiAgICByb3RhdGU6IFswLCAwLCA5MF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5yaWdodFdpbmcucGlja2VkQ29sb3IgPSBbMSwgMSwgMF07XHJcbnJpZ2h0V2luZy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5yaWdodFdpbmcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbi8vIENyZWF0ZSB0aGUgcmlnaHQgbGVnIG5vZGVcclxuY29uc3QgcmlnaHRMZWcgPSBuZXcgTm9kZSgpO1xyXG5yaWdodExlZy5uYW1lID0gXCJyaWdodExlZ1wiO1xyXG5yaWdodExlZy5tb2RlbCA9IGJveE1vZGVsKDAuNiwgMC4yLCAwLjIsIFswLCAwLCAwXSk7XHJcbnJpZ2h0TGVnLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWy0wLjUsIC0wLjgsIC0wLjM1XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRMZWcucGlja2VkQ29sb3IgPSBbMSwgMC41LCAwXTtcclxucmlnaHRMZWcudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxucmlnaHRMZWcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiB0cnVlLFxyXG4gICAgb21lZ2E6IDEsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogYCgoX3JpZ2h0TGVnLCBkZWx0YVRpbWUpID0+IHtcclxuICAgICAgICBpZiAoX3JpZ2h0TGVnLmFuaW1hdGlvbi5pc0FuaW1hdGUpIHtcclxuICAgICAgICAgICAgX3JpZ2h0TGVnLnRyYW5zZm9ybS5yb3RhdGVbMl0gKz0gX3JpZ2h0TGVnLmFuaW1hdGlvbi5vbWVnYSAqIGRlbHRhVGltZTtcclxuICAgICAgICAgICAgaWYgKF9yaWdodExlZy50cmFuc2Zvcm0ucm90YXRlWzJdID49IE1hdGguUEkgLyA2KSB7XHJcbiAgICAgICAgICAgICAgICBfcmlnaHRMZWcudHJhbnNmb3JtLnJvdGF0ZVsyXSA9IE1hdGguUEkgLyA2XHJcbiAgICAgICAgICAgICAgICBfcmlnaHRMZWcuYW5pbWF0aW9uLm9tZWdhID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihfcmlnaHRMZWcudHJhbnNmb3JtLnJvdGF0ZVsyXSA8PSAtIE1hdGguUEkgLyA2KXtcclxuICAgICAgICAgICAgICAgIF9yaWdodExlZy50cmFuc2Zvcm0ucm90YXRlWzJdID0gLU1hdGguUEkgLyA2XHJcbiAgICAgICAgICAgICAgICBfcmlnaHRMZWcuYW5pbWF0aW9uLm9tZWdhID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gIFxyXG4gICAgfSlgXHJcbn07XHJcblxyXG4vLyBjcmV0ZSB0aGUgcmlnaHQgZm9vdCBub2RlXHJcbmNvbnN0IHJpZ2h0Rm9vdCA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0Rm9vdC5uYW1lID0gXCJyaWdodEZvb3RcIjtcclxucmlnaHRGb290Lm1vZGVsID0gYm94TW9kZWwoMC4xLCAwLjQsIDAuMywgWzAsIDAsIDBdKTtcclxucmlnaHRGb290LnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuMDIsIC0wLjM0LCAwXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRGb290LnBpY2tlZENvbG9yID0gWzEsIDAuNSwgMF07XHJcbnJpZ2h0Rm9vdC52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5yaWdodEZvb3QuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiB0cnVlLFxyXG4gICAgZGVnQW5pbWF0ZTogMC4xLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IG51bGxcclxufTtcclxuXHJcbi8vIENyZWF0ZSB0aGUgbGVmdCBsZWcgbm9kZVxyXG5jb25zdCBsZWZ0TGVnID0gbmV3IE5vZGUoKTtcclxubGVmdExlZy5uYW1lID0gXCJsZWZ0TGVnXCI7XHJcbmxlZnRMZWcubW9kZWwgPSBib3hNb2RlbCgwLjYsIDAuMiwgMC4yLCBbMCwgMCwgMF0pO1xyXG5sZWZ0TGVnLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWy0wLjUsIC0wLjgsIDAuMzVdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5sZWZ0TGVnLnBpY2tlZENvbG9yID0gWzEsIDAuNSwgMF07XHJcbmxlZnRMZWcudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxubGVmdExlZy5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IHRydWUsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbiAgICBvbWVnYTogMSxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBgKChfbGVmdExlZywgZGVsdGFUaW1lKSA9PiB7XHJcbiAgICAgICAgaWYgKF9sZWZ0TGVnLmFuaW1hdGlvbi5pc0FuaW1hdGUpIHtcclxuICAgICAgICAgICAgX2xlZnRMZWcudHJhbnNmb3JtLnJvdGF0ZVsyXSArPSBfbGVmdExlZy5hbmltYXRpb24ub21lZ2EgKiBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgIGlmIChfbGVmdExlZy50cmFuc2Zvcm0ucm90YXRlWzJdID49IE1hdGguUEkgLyA2KSB7XHJcbiAgICAgICAgICAgICAgICBfbGVmdExlZy50cmFuc2Zvcm0ucm90YXRlWzJdID0gTWF0aC5QSSAvIDZcclxuICAgICAgICAgICAgICAgIF9sZWZ0TGVnLmFuaW1hdGlvbi5vbWVnYSA9IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoX2xlZnRMZWcudHJhbnNmb3JtLnJvdGF0ZVsyXSA8PSAtIE1hdGguUEkgLyA2KXtcclxuICAgICAgICAgICAgICAgIF9sZWZ0TGVnLnRyYW5zZm9ybS5yb3RhdGVbMl0gPSAtTWF0aC5QSSAvIDZcclxuICAgICAgICAgICAgICAgIF9sZWZ0TGVnLmFuaW1hdGlvbi5vbWVnYSA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICBcclxuICAgIH0pYFxyXG59O1xyXG5cclxuLy8gQ3JlYXRlIHRoZSBsZWZ0IGZvb3Qgbm9kZVxyXG5jb25zdCBsZWZ0Rm9vdCA9IG5ldyBOb2RlKCk7XHJcbmxlZnRGb290Lm5hbWUgPSBcImxlZnRGb290XCI7XHJcbmxlZnRGb290Lm1vZGVsID0gYm94TW9kZWwoMC4xLCAwLjQsIDAuMywgWzAsIDAsIDBdKTtcclxubGVmdEZvb3QudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMC4wMiwgLTAuMzQsIDBdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5sZWZ0Rm9vdC5waWNrZWRDb2xvciA9IFsxLCAwLjUsIDBdO1xyXG5sZWZ0Rm9vdC52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5sZWZ0Rm9vdC5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuLy8gQ3JlYXRlIHRoZSB0YWlsIG5vZGVcclxuY29uc3QgdGFpbCA9IG5ldyBOb2RlKCk7XHJcbnRhaWwubmFtZSA9IFwidGFpbFwiO1xyXG5cclxuXHJcbi8vIEFzc2VtYmxlIHRoZSBjaGlja2VuIG1vZGVsXHJcbi8vIGNoaWNrZW4uYWRkQ2hpbGQoaGVhZCk7XHJcbi8vIGhlYWQuYWRkQ2hpbGQoYmVhayk7XHJcbi8vIGNoaWNrZW4uYWRkQ2hpbGQobGVmdFdpbmcpO1xyXG4vLyBjaGlja2VuLmFkZENoaWxkKHJpZ2h0V2luZyk7XHJcbi8vIGNoaWNrZW4uYWRkQ2hpbGQobGVmdExlZyk7XHJcbi8vIGNoaWNrZW4uYWRkQ2hpbGQocmlnaHRMZWcpO1xyXG5cclxuLy8gQXNzZW1ibGUgdGhlIGNoaWNrZW4gbW9kZWxcclxuaGVhZC5zZXRQYXJlbnQoY2hpY2tlbik7XHJcbmJlYWsuc2V0UGFyZW50KGhlYWQpO1xyXG53aGl0ZVJpZ2h0RXllLnNldFBhcmVudChoZWFkKTtcclxuYmxhY2tSaWdodEV5ZS5zZXRQYXJlbnQod2hpdGVSaWdodEV5ZSk7XHJcbndoaXRlTGVmdEV5ZS5zZXRQYXJlbnQoaGVhZCk7XHJcbmJsYWNrTGVmdEV5ZS5zZXRQYXJlbnQod2hpdGVMZWZ0RXllKTtcclxubGVmdFdpbmcuc2V0UGFyZW50KGNoaWNrZW4pO1xyXG5yaWdodFdpbmcuc2V0UGFyZW50KGNoaWNrZW4pO1xyXG5sZWZ0TGVnLnNldFBhcmVudChjaGlja2VuKTtcclxubGVmdEZvb3Quc2V0UGFyZW50KGxlZnRMZWcpO1xyXG5yaWdodExlZy5zZXRQYXJlbnQoY2hpY2tlbik7XHJcbnJpZ2h0Rm9vdC5zZXRQYXJlbnQocmlnaHRMZWcpO1xyXG5cclxuXHJcbnZhciBjaGlja2VuTW9kZWwgPSBbXHJcbiAgY2hpY2tlblxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGlja2VuTW9kZWw7XHJcbiIsImltcG9ydCBOb2RlIGZyb20gXCIuLi9ub2RlLmpzXCI7XHJcblxyXG5jb25zdCBib2R5Q29sb3IgPSBbMC44ODYsIDAuMzQ1LCAwLjEzM107XHJcbmNvbnN0IHdoaXRlQ29sb3IgPSBbMC45OSwgMC45OSwgMC45OV07XHJcbmNvbnN0IGJsYWNrQ29sb3IgPSBbMCwgMCwgMF07XHJcbmNvbnN0IGJyb3duQ29sb3IgPSBbMC41NDUsIDAuMjcxLCAwLjA3NV07XHJcblxyXG5jb25zdCBmb3ggPSBuZXcgTm9kZSgpO1xyXG5mb3gubmFtZSA9IFwiZm94XCI7XHJcbmZveC5tb2RlbCA9IGJveE1vZGVsKDAuNiwgMC43LCAxLCBbMCwgMCwgMF0pOyBcclxuZm94LnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLCAwLCAwXSxcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5mb3gucGlja2VkQ29sb3IgPSBib2R5Q29sb3I7XHJcbmZveC52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbmZveC5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCBoZWFkID0gbmV3IE5vZGUoKTtcclxuaGVhZC5uYW1lID0gXCJoZWFkXCI7XHJcbmhlYWQubW9kZWwgPSBib3hNb2RlbCgwLjUsIDAuNSwgMC40LCBbMCwgMCwgMF0pO1xyXG5oZWFkLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLCAwLjEsIDAuN10sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmhlYWQucGlja2VkQ29sb3IgPSBib2R5Q29sb3I7XHJcbmhlYWQudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5oZWFkLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IHdoaXRlUmlnaHRFeWUgPSBuZXcgTm9kZSgpO1xyXG53aGl0ZVJpZ2h0RXllLm5hbWUgPSBcIndoaXRlUmlnaHRFeWVcIjtcclxud2hpdGVSaWdodEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMSwgMC4xLCAwLjA1LCBbMCwgMCwgMF0pO1xyXG53aGl0ZVJpZ2h0RXllLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLjE1LCAwLjEsIDAuMl0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbndoaXRlUmlnaHRFeWUucGlja2VkQ29sb3IgPSB3aGl0ZUNvbG9yO1xyXG53aGl0ZVJpZ2h0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxud2hpdGVSaWdodEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCB3aGl0ZUxlZnRFeWUgPSBuZXcgTm9kZSgpO1xyXG53aGl0ZUxlZnRFeWUubmFtZSA9IFwid2hpdGVMZWZ0RXllXCI7XHJcbndoaXRlTGVmdEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMSwgMC4xLCAwLjA1LCBbMCwgMCwgMF0pO1xyXG53aGl0ZUxlZnRFeWUudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWy0wLjE1LCAwLjEsIDAuMl0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbndoaXRlTGVmdEV5ZS5waWNrZWRDb2xvciA9IHdoaXRlQ29sb3I7XHJcbndoaXRlTGVmdEV5ZS52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbndoaXRlTGVmdEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCBibGFja1JpZ2h0RXllID0gbmV3IE5vZGUoKTtcclxuYmxhY2tSaWdodEV5ZS5uYW1lID0gXCJibGFja1JpZ2h0RXllXCI7XHJcbmJsYWNrUmlnaHRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjEsIDAuMDYsIDAuMDUsIFswLCAwLCAwXSk7XHJcbmJsYWNrUmlnaHRFeWUudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWy0wLjAzLCAwLCAwLjAxXSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuYmxhY2tSaWdodEV5ZS5waWNrZWRDb2xvciA9IGJsYWNrQ29sb3I7XHJcbmJsYWNrUmlnaHRFeWUudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5ibGFja1JpZ2h0RXllLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IGJsYWNrTGVmdEV5ZSA9IG5ldyBOb2RlKCk7XHJcbmJsYWNrTGVmdEV5ZS5uYW1lID0gXCJibGFja0xlZnRFeWVcIjtcclxuYmxhY2tMZWZ0RXllLm1vZGVsID0gYm94TW9kZWwoMC4xLCAwLjA2LCAwLjA1LCBbMCwgMCwgMF0pO1xyXG5ibGFja0xlZnRFeWUudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAuMDMsIDAsIDAuMDFdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5ibGFja0xlZnRFeWUucGlja2VkQ29sb3IgPSBibGFja0NvbG9yO1xyXG5ibGFja0xlZnRFeWUudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5ibGFja0xlZnRFeWUuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3Qgbm9zZSA9IG5ldyBOb2RlKCk7XHJcbm5vc2UubmFtZSA9IFwibm9zZVwiO1xyXG5ub3NlLm1vZGVsID0gYm94TW9kZWwoMC4xNSwgMC4zLCAwLjIsIFswLCAwLCAwXSk7XHJcbm5vc2UudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAsIC0wLjEsIDAuM10sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbm5vc2UucGlja2VkQ29sb3IgPSBibGFja0NvbG9yO1xyXG5ub3NlLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxubm9zZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcbmNvbnN0IHVuZGVybm9zZSA9IG5ldyBOb2RlKCk7XHJcbnVuZGVybm9zZS5uYW1lID0gXCJ1bmRlcm5vc2VcIjtcclxudW5kZXJub3NlLm1vZGVsID0gYm94TW9kZWwoMC4xLCAwLjMsIDAuMiwgWzAsIDAsIDBdKTtcclxudW5kZXJub3NlLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLCAtMC4yLCAwLjNdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG51bmRlcm5vc2UucGlja2VkQ29sb3IgPSB3aGl0ZUNvbG9yO1xyXG51bmRlcm5vc2Uudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG51bmRlcm5vc2UuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgcmlnaHRFYXIgPSBuZXcgTm9kZSgpO1xyXG5yaWdodEVhci5uYW1lID0gXCJyaWdodEVhclwiO1xyXG5yaWdodEVhci5tb2RlbCA9IGJveE1vZGVsKDAuMiwgMC4yLCAwLjEsIFswLCAwLCAwXSk7XHJcbnJpZ2h0RWFyLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLjE1LCAwLjM1LCAwXSxcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5yaWdodEVhci5waWNrZWRDb2xvciA9IGJsYWNrQ29sb3I7XHJcbnJpZ2h0RWFyLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxucmlnaHRFYXIuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgbGVmdEVhciA9IG5ldyBOb2RlKCk7XHJcbmxlZnRFYXIubmFtZSA9IFwibGVmdEVhclwiO1xyXG5sZWZ0RWFyLm1vZGVsID0gYm94TW9kZWwoMC4yLCAwLjIsIDAuMSwgWzAsIDAsIDBdKTtcclxubGVmdEVhci50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbLTAuMTUsIDAuMzUsIDBdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5sZWZ0RWFyLnBpY2tlZENvbG9yID0gYmxhY2tDb2xvcjtcclxubGVmdEVhci52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbmxlZnRFYXIuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgcmlnaHRGcm9udExlZyA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0RnJvbnRMZWcubmFtZSA9IFwicmlnaHRGcm9udExlZ1wiO1xyXG5yaWdodEZyb250TGVnLm1vZGVsID0gYm94TW9kZWwoMSwgMC4yLCAwLjE1LCBbMCwgMCwgMF0pO1xyXG5yaWdodEZyb250TGVnLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLjIsIC0wLjI1LCAwLjJdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5yaWdodEZyb250TGVnLnBpY2tlZENvbG9yID0gYmxhY2tDb2xvcjtcclxucmlnaHRGcm9udExlZy52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbnJpZ2h0RnJvbnRMZWcuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgbGVmdEZyb250TGVnID0gbmV3IE5vZGUoKTtcclxubGVmdEZyb250TGVnLm5hbWUgPSBcImxlZnRGcm9udExlZ1wiO1xyXG5sZWZ0RnJvbnRMZWcubW9kZWwgPSBib3hNb2RlbCgxLCAwLjIsIDAuMTUsIFswLCAwLCAwXSk7XHJcbmxlZnRGcm9udExlZy50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbLTAuMiwgLTAuMjUsIDAuMl0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmxlZnRGcm9udExlZy5waWNrZWRDb2xvciA9IGJsYWNrQ29sb3I7XHJcbmxlZnRGcm9udExlZy52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbmxlZnRGcm9udExlZy5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCByaWdodFJlYXJMZWcgPSBuZXcgTm9kZSgpO1xyXG5yaWdodFJlYXJMZWcubmFtZSA9IFwicmlnaHRSZWFyTGVnXCI7XHJcbnJpZ2h0UmVhckxlZy5tb2RlbCA9IGJveE1vZGVsKDEsIDAuMiwgMC4xNSwgWzAsIDAsIDBdKTtcclxucmlnaHRSZWFyTGVnLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLjIsIC0wLjI1LCAtMC4yXSxcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5yaWdodFJlYXJMZWcucGlja2VkQ29sb3IgPSBibGFja0NvbG9yO1xyXG5yaWdodFJlYXJMZWcudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5yaWdodFJlYXJMZWcuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgbGVmdFJlYXJMZWcgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0UmVhckxlZy5uYW1lID0gXCJsZWZ0UmVhckxlZ1wiO1xyXG5sZWZ0UmVhckxlZy5tb2RlbCA9IGJveE1vZGVsKDEsIDAuMiwgMC4xNSwgWzAsIDAsIDBdKTtcclxubGVmdFJlYXJMZWcudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWy0wLjIsIC0wLjI1LCAtMC4yXSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubGVmdFJlYXJMZWcucGlja2VkQ29sb3IgPSBibGFja0NvbG9yO1xyXG5sZWZ0UmVhckxlZy52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbmxlZnRSZWFyTGVnLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IHRhaWwgPSBuZXcgTm9kZSgpO1xyXG50YWlsLm5hbWUgPSBcInRhaWxcIjtcclxudGFpbC5tb2RlbCA9IGJveE1vZGVsKDAuMiwgMC4yLCAwLjQsIFswLCAwLCAwXSk7XHJcbnRhaWwudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAsIDAsIC0wLjY1XSxcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG50YWlsLnBpY2tlZENvbG9yID0gYm9keUNvbG9yO1xyXG50YWlsLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxudGFpbC5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcbmNvbnN0IHRhaWxlZGdlID0gbmV3IE5vZGUoKTtcclxudGFpbGVkZ2UubmFtZSA9IFwidGFpbGVkZ2VcIjtcclxudGFpbGVkZ2UubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC4yLCBbMCwgMCwgMF0pO1xyXG50YWlsZWRnZS50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMCwgMCwgLTAuOTVdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG50YWlsZWRnZS5waWNrZWRDb2xvciA9IHdoaXRlQ29sb3I7XHJcbnRhaWxlZGdlLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxudGFpbGVkZ2UuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuaGVhZC5zZXRQYXJlbnQoZm94KTtcclxucmlnaHRFYXIuc2V0UGFyZW50KGhlYWQpO1xyXG5sZWZ0RWFyLnNldFBhcmVudChoZWFkKTtcclxud2hpdGVSaWdodEV5ZS5zZXRQYXJlbnQoaGVhZCk7XHJcbndoaXRlTGVmdEV5ZS5zZXRQYXJlbnQoaGVhZCk7XHJcbmJsYWNrUmlnaHRFeWUuc2V0UGFyZW50KHdoaXRlUmlnaHRFeWUpO1xyXG5ibGFja0xlZnRFeWUuc2V0UGFyZW50KHdoaXRlTGVmdEV5ZSk7XHJcbm5vc2Uuc2V0UGFyZW50KGhlYWQpO1xyXG51bmRlcm5vc2Uuc2V0UGFyZW50KGhlYWQpO1xyXG5yaWdodEZyb250TGVnLnNldFBhcmVudChmb3gpO1xyXG5sZWZ0RnJvbnRMZWcuc2V0UGFyZW50KGZveCk7XHJcbnJpZ2h0UmVhckxlZy5zZXRQYXJlbnQoZm94KTtcclxubGVmdFJlYXJMZWcuc2V0UGFyZW50KGZveCk7XHJcbnRhaWwuc2V0UGFyZW50KGZveCk7XHJcbnRhaWxlZGdlLnNldFBhcmVudChmb3gpO1xyXG5cclxudmFyIGZveE1vZGVsID0gW1xyXG4gIGZveFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm94TW9kZWw7XHJcbiIsImltcG9ydCBOb2RlIGZyb20gXCIuLi9ub2RlLmpzXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gaG9sbG93VGhpbmd5KCkge1xyXG4gICAgbGV0IHZlcnRpY2VzID0gW107XHJcbiAgICBsZXQgY29sb3JzID0gW107XHJcbiAgICBsZXQgdGFuZ2VudHMgPSBbXTtcclxuICAgIGxldCBiaXRhbmdlbnRzID0gW107XHJcbiAgICBsZXQgbm9ybWFscyA9IFtdO1xyXG4gICAgbGV0IHRleENvb3JkID0gW107XHJcbiAgICBsZXQgZmFjZXMgPSBnZW5lcmF0ZUZhY2VzKCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGJveGVzID0gW1xyXG4gICAgICB7IHNpemU6IFswLjIsIDAuOCwgMC4yXSwgcG9zaXRpb246IFswLCAxLCAwXSB9LFxyXG4gICAgICB7IHNpemU6IFswLjIsIDAuOCwgMC4yXSwgcG9zaXRpb246IFswLCAtMSwgMF0gfSxcclxuICAgICAgeyBzaXplOiBbMS44LCAwLjIsIDAuMl0sIHBvc2l0aW9uOiBbLTAuMywgMCwgMF0gfSxcclxuICAgICAgeyBzaXplOiBbMS44LCAwLjIsIDAuMl0sIHBvc2l0aW9uOiBbMC4zLCAwLCAwXSB9LFxyXG4gICAgICB7IHNpemU6IFswLjIsIDEuOCwgMC4yXSwgcG9zaXRpb246IFswLCAwLCAwLjNdIH0sXHJcbiAgICAgIHsgc2l6ZTogWzAuMiwgMS44LCAwLjJdLCBwb3NpdGlvbjogWzAsIDAsIC0wLjNdIH0sXHJcbiAgICAgIHsgc2l6ZTogWzAuMiwgMC4yLCAwLjhdLCBwb3NpdGlvbjogWzEsIDAsIDBdIH0sXHJcbiAgICAgIHsgc2l6ZTogWzAuMiwgMC4yLCAwLjhdLCBwb3NpdGlvbjogWy0xLCAwLCAwXSB9LFxyXG4gICAgICB7IHNpemU6IFswLjgsIDAuMiwgMC4yXSwgcG9zaXRpb246IFswLCAwLCAxXSB9LFxyXG4gICAgICB7IHNpemU6IFswLjgsIDAuMiwgMC4yXSwgcG9zaXRpb246IFswLCAwLCAtMV0gfSxcclxuICAgICAgeyBzaXplOiBbMC4yLCAwLjIsIDEuOF0sIHBvc2l0aW9uOiBbMCwgMC4zLCAwXSB9LFxyXG4gICAgICB7IHNpemU6IFswLjIsIDAuMiwgMS44XSwgcG9zaXRpb246IFswLCAtMC4zLCAwXSB9XHJcbiAgICBdO1xyXG4gICAgXHJcbiAgICBib3hlcy5mb3JFYWNoKGJveCA9PiB7XHJcbiAgICAgIGxldCB2ZXJ0aWNlc0JveCA9IGdlbmVyYXRlVmVydGljZXMoLi4uYm94LnNpemUsIGJveC5wb3NpdGlvbik7XHJcbiAgICAgIGxldCBub3JtYWxzQm94ID0gZ2VuZXJhdGVOb3JtYWxzKHZlcnRpY2VzQm94LCBmYWNlcyk7XHJcbiAgICAgIG5vcm1hbHMgPSBub3JtYWxzLmNvbmNhdChub3JtYWxzQm94KTtcclxuICAgICAgdmVydGljZXMgPSB2ZXJ0aWNlcy5jb25jYXQodG9WZXJ0aWNlcyh2ZXJ0aWNlc0JveCwgZmFjZXMpKTtcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmVydGljZXM6IHZlcnRpY2VzLFxyXG4gICAgICBmYWNlczogZmFjZXMsXHJcbiAgICAgIHRhbmdlbnRzOiB0YW5nZW50cyxcclxuICAgICAgYml0YW5nZW50czogYml0YW5nZW50cyxcclxuICAgICAgbm9ybWFsczogbm9ybWFscyxcclxuICAgICAgY29sb3JzOiBjb2xvcnMsXHJcbiAgICAgIHRleENvb3JkOiB0ZXhDb29yZCxcclxuICAgIH07XHJcbn1cclxuICBcclxuY29uc3QgaG9sbG93ID0gbmV3IE5vZGUoKTtcclxuaG9sbG93LmZsYWcgPSBcImhvbGxvd1wiO1xyXG5ob2xsb3cubmFtZSA9IFwiSG9sbG93IFRoaW5neVwiO1xyXG5ob2xsb3cubW9kZWwgPSBob2xsb3dUaGluZ3koKTtcclxuaG9sbG93LnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLCAwLCAwXSxcclxuICByb3RhdGU6IFs5MSwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuaG9sbG93LnBpY2tlZENvbG9yID0gWzAuOTIxNTY4NjI3LDAuNTY4NjI3NDUxLDAuODk4MDM5MjE2XSxcclxuaG9sbG93LnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmhvbGxvdy5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG52YXIgaG9sbG93TW9kZWwgPSBbXHJcbiAgICBob2xsb3dcclxuXVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbGxvd01vZGVsOyIsImltcG9ydCBOb2RlIGZyb20gXCIuLi9ub2RlLmpzXCI7XHJcblxyXG5jb25zdCBwaWcgPSBuZXcgTm9kZSgpO1xyXG5waWcuZmxhZyA9IFwiYXJ0aWN1bGF0ZWRcIjtcclxucGlnLm5hbWUgPSBcInBpZ1wiO1xyXG5waWcubW9kZWwgPSBib3hNb2RlbCgxLCAxLjUsIDEsIFswLCAwLCAwXSk7XHJcbnBpZy50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMCwgMCwgMF0sXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucGlnLnBpY2tlZENvbG9yID0gWzAuOTIxNTY4NjI3LDAuNTY4NjI3NDUxLDAuODk4MDM5MjE2XSxcclxucGlnLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbnBpZy5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCBoZWFkID0gbmV3IE5vZGUoKTtcclxuaGVhZC5uYW1lID0gXCJoZWFkXCI7XHJcbmhlYWQubW9kZWwgPSBib3hNb2RlbCgxLCAxLCAxLjIsIFstMSwgMC42LCAwXSk7XHJcbmhlYWQudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMCwgMCwgMF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmhlYWQucGlja2VkQ29sb3IgPSBbMC45MjE1Njg2MjcsMC41Njg2Mjc0NTEsMC44OTgwMzkyMTZdLFxyXG5oZWFkLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmhlYWQuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IHdoaXRlUmlnaHRFeWUgPSBuZXcgTm9kZSgpO1xyXG53aGl0ZVJpZ2h0RXllLm5hbWUgPSBcIndoaXRlUmlnaHRFeWVcIjtcclxud2hpdGVSaWdodEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMiwgMC4yLCAwLjIsIFstMSwgMC42LCAwXSk7XHJcbndoaXRlUmlnaHRFeWUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbLTAuNSwgMC4yLCAwLjRdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG53aGl0ZVJpZ2h0RXllLnBpY2tlZENvbG9yID0gWzAuOTksMC45OSwwLjk5XSxcclxud2hpdGVSaWdodEV5ZS52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG53aGl0ZVJpZ2h0RXllLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCB3aGl0ZUxlZnRFeWUgPSBuZXcgTm9kZSgpO1xyXG53aGl0ZUxlZnRFeWUubmFtZSA9IFwid2hpdGVMZWZ0RXllXCI7XHJcbndoaXRlTGVmdEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMiwgMC4yLCAwLjIsIFstMSwgMC42LCAwXSk7XHJcbndoaXRlTGVmdEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFstMC41LCAwLjIsIC0wLjRdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG53aGl0ZUxlZnRFeWUucGlja2VkQ29sb3IgPSBbMC45OSwwLjk5LDAuOTldLFxyXG53aGl0ZUxlZnRFeWUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxud2hpdGVMZWZ0RXllLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCBibGFja1JpZ2h0RXllID0gbmV3IE5vZGUoKTtcclxuYmxhY2tSaWdodEV5ZS5uYW1lID0gXCJibGFja1JpZ2h0RXllXCI7XHJcbmJsYWNrUmlnaHRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC4yLCBbLTEsIDAuNiwgMF0pO1xyXG5ibGFja1JpZ2h0RXllLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuMDUsIDAsIDAuMDc1XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuYmxhY2tSaWdodEV5ZS5waWNrZWRDb2xvciA9IFswLDAsMF0sXHJcbmJsYWNrUmlnaHRFeWUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuYmxhY2tSaWdodEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgYmxhY2tMZWZ0RXllID0gbmV3IE5vZGUoKTtcclxuYmxhY2tMZWZ0RXllLm5hbWUgPSBcImJsYWNrTGVmdEV5ZVwiO1xyXG5ibGFja0xlZnRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC4yLCBbLTEsIDAuNiwgMF0pO1xyXG5ibGFja0xlZnRFeWUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMC4wNSwgMCwgLTAuMDc1XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuYmxhY2tMZWZ0RXllLnBpY2tlZENvbG9yID0gWzAsMCwwXSxcclxuYmxhY2tMZWZ0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmJsYWNrTGVmdEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3Qgbm9zZSA9IG5ldyBOb2RlKCk7XHJcbm5vc2UubmFtZSA9IFwibm9zZVwiO1xyXG5ub3NlLm1vZGVsID0gYm94TW9kZWwoMC4yLCAwLjIsIDAuNCwgWy0xLjUsIDAuNTUsIDBdKTtcclxubm9zZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLjA1LCAwLCAwXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubm9zZS5waWNrZWRDb2xvciA9IFswLjc2ODYyNzQ1MSwwLjM3NjQ3MDU4OCwgMC43NDUwOTgwMzldLFxyXG5ub3NlLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbm5vc2UuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IHJpZ2h0SG9sZSA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0SG9sZS5uYW1lID0gXCJyaWdodEhvbGVcIjtcclxucmlnaHRIb2xlLm1vZGVsID0gYm94TW9kZWwoMC4xNSwgMC4yLCAwLjEsIFstMS42LCAwLjU1LCAwXSk7XHJcbnJpZ2h0SG9sZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLjA1LCAwLCAwLjFdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5yaWdodEhvbGUucGlja2VkQ29sb3IgPSBbMC45MjE1Njg2MjcsMC41Njg2Mjc0NTEsMC44OTgwMzkyMTZdLFxyXG5yaWdodEhvbGUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxucmlnaHRIb2xlLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCBsZWZ0SG9sZSA9IG5ldyBOb2RlKCk7XHJcbmxlZnRIb2xlLm5hbWUgPSBcImxlZnRIb2xlXCI7XHJcbmxlZnRIb2xlLm1vZGVsID0gYm94TW9kZWwoMC4xNSwgMC4yLCAwLjEsIFstMS42LCAwLjU1LCAwXSk7XHJcbmxlZnRIb2xlLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuMDUsIDAsIC0wLjFdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5sZWZ0SG9sZS5waWNrZWRDb2xvciA9IFswLjkyMTU2ODYyNywwLjU2ODYyNzQ1MSwwLjg5ODAzOTIxNl0sXHJcbmxlZnRIb2xlLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmxlZnRIb2xlLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCByaWdodEZyb250TGVnID0gbmV3IE5vZGUoKTtcclxucmlnaHRGcm9udExlZy5uYW1lID0gXCJyaWdodEZyb250TGVnXCI7XHJcbnJpZ2h0RnJvbnRMZWcubW9kZWwgPSBib3hNb2RlbCgwLjUsIDAuMiwgMC4yLCBbMC4xLCAwLCAwLjE1XSk7XHJcbnJpZ2h0RnJvbnRMZWcudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbLTAuNiwgLTAuNSwgLTAuNF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnJpZ2h0RnJvbnRMZWcucGlja2VkQ29sb3IgPSBbMC43Njg2Mjc0NTEsMC4zNzY0NzA1ODgsIDAuNzQ1MDk4MDM5XSxcclxucmlnaHRGcm9udExlZy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5yaWdodEZyb250TGVnLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCBsZWZ0RnJvbnRMZWcgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0RnJvbnRMZWcubmFtZSA9IFwibGVmdEZyb250TGVnXCI7XHJcbmxlZnRGcm9udExlZy5tb2RlbCA9IGJveE1vZGVsKDAuNSwgMC4yLCAwLjIsIFswLjEsIDAsIC0wLjE1XSk7XHJcbmxlZnRGcm9udExlZy50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFstMC42LCAtMC41LCAwLjRdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5sZWZ0RnJvbnRMZWcucGlja2VkQ29sb3IgPSBbMC43Njg2Mjc0NTEsMC4zNzY0NzA1ODgsIDAuNzQ1MDk4MDM5XSxcclxubGVmdEZyb250TGVnLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmxlZnRGcm9udExlZy5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgcmlnaHRSZWFyTGVnID0gbmV3IE5vZGUoKTtcclxucmlnaHRSZWFyTGVnLm5hbWUgPSBcInJpZ2h0UmVhckxlZ1wiO1xyXG5yaWdodFJlYXJMZWcubW9kZWwgPSBib3hNb2RlbCgwLjUsIDAuMiwgMC4yLCBbMC41LCAwLCAwLjE1XSk7XHJcbnJpZ2h0UmVhckxlZy50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLCAtMC41LCAtMC40XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRSZWFyTGVnLnBpY2tlZENvbG9yID0gWzAuNzY4NjI3NDUxLDAuMzc2NDcwNTg4LCAwLjc0NTA5ODAzOV0sXHJcbnJpZ2h0UmVhckxlZy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5yaWdodFJlYXJMZWcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IGxlZnRSZWFyTGVnID0gbmV3IE5vZGUoKTtcclxubGVmdFJlYXJMZWcubmFtZSA9IFwibGVmdFJlYXJMZWdcIjtcclxubGVmdFJlYXJMZWcubW9kZWwgPSBib3hNb2RlbCgwLjUsIDAuMiwgMC4yLCBbMC41LCAwLCAtMC4xNV0pO1xyXG5sZWZ0UmVhckxlZy50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLCAtMC41LCAwLjRdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5sZWZ0UmVhckxlZy5waWNrZWRDb2xvciA9IFswLjc2ODYyNzQ1MSwwLjM3NjQ3MDU4OCwgMC43NDUwOTgwMzldLFxyXG5sZWZ0UmVhckxlZy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5sZWZ0UmVhckxlZy5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuXHJcbmhlYWQuc2V0UGFyZW50KHBpZyk7XHJcbndoaXRlUmlnaHRFeWUuc2V0UGFyZW50KGhlYWQpO1xyXG53aGl0ZUxlZnRFeWUuc2V0UGFyZW50KGhlYWQpO1xyXG5ibGFja1JpZ2h0RXllLnNldFBhcmVudCh3aGl0ZVJpZ2h0RXllKTtcclxuYmxhY2tMZWZ0RXllLnNldFBhcmVudCh3aGl0ZUxlZnRFeWUpO1xyXG5ub3NlLnNldFBhcmVudChoZWFkKTtcclxucmlnaHRIb2xlLnNldFBhcmVudChub3NlKTtcclxubGVmdEhvbGUuc2V0UGFyZW50KG5vc2UpO1xyXG5yaWdodEZyb250TGVnLnNldFBhcmVudChwaWcpO1xyXG5sZWZ0RnJvbnRMZWcuc2V0UGFyZW50KHBpZyk7XHJcbnJpZ2h0UmVhckxlZy5zZXRQYXJlbnQocGlnKTtcclxubGVmdFJlYXJMZWcuc2V0UGFyZW50KHBpZyk7XHJcblxyXG52YXIgcGlnTW9kZWwgPSBbXHJcbiAgICBwaWdcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBpZ01vZGVsO1xyXG4gICIsImltcG9ydCBOb2RlIGZyb20gXCIuLi9ub2RlLmpzXCI7XHJcblxyXG5mdW5jdGlvbiByaW5nKCkge1xyXG4gICAgbGV0IHZlcnRpY2VzID0gW107XHJcbiAgICBsZXQgY29sb3JzID0gW107XHJcbiAgICBsZXQgdGFuZ2VudHMgPSBbXTtcclxuICAgIGxldCBiaXRhbmdlbnRzID0gW107XHJcbiAgICBsZXQgbm9ybWFscyA9IFtdO1xyXG4gICAgbGV0IHRleENvb3JkID0gW107XHJcbiAgICBsZXQgZmFjZXMgPSBnZW5lcmF0ZUZhY2VzKCk7XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUJveGVzKCl7XHJcbiAgICBsZXQgYm94ZXMgPSBbXTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAzNjA7ICsraSl7XHJcbiAgICAgIGxldCByYWQgPSBkZWdUb1JhZChpKTtcclxuICAgICAgbGV0IHBvc2l0aW9uID0gW01hdGguY29zKHJhZCksIE1hdGguc2luKHJhZCksIDBdO1xyXG4gICAgICBsZXQgc2l6ZSA9IFswLjA1LCAwLjA1LCAwLjhdO1xyXG4gICAgICBib3hlcy5wdXNoKHsgc2l6ZTogc2l6ZSwgcG9zaXRpb246IHBvc2l0aW9uIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJveGVzO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYm94ZXMgPSBnZW5lcmF0ZUJveGVzKCk7XHJcbiAgXHJcbiAgYm94ZXMuZm9yRWFjaChib3ggPT4ge1xyXG4gICAgbGV0IHZlcnRpY2VzQm94ID0gZ2VuZXJhdGVWZXJ0aWNlcyguLi5ib3guc2l6ZSwgYm94LnBvc2l0aW9uKTtcclxuICAgIGxldCBub3JtYWxzQm94ID0gZ2VuZXJhdGVOb3JtYWxzKHZlcnRpY2VzQm94LCBmYWNlcyk7XHJcbiAgICBub3JtYWxzID0gbm9ybWFscy5jb25jYXQobm9ybWFsc0JveCk7XHJcbiAgICB2ZXJ0aWNlcyA9IHZlcnRpY2VzLmNvbmNhdCh0b1ZlcnRpY2VzKHZlcnRpY2VzQm94LCBmYWNlcykpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdmVydGljZXM6IHZlcnRpY2VzLFxyXG4gICAgZmFjZXM6IGZhY2VzLFxyXG4gICAgdGFuZ2VudHM6IHRhbmdlbnRzLFxyXG4gICAgYml0YW5nZW50czogYml0YW5nZW50cyxcclxuICAgIG5vcm1hbHM6IG5vcm1hbHMsXHJcbiAgICBjb2xvcnM6IGNvbG9ycyxcclxuICAgIHRleENvb3JkOiB0ZXhDb29yZCxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBob2xsb3cgPSBuZXcgTm9kZSgpO1xyXG5ob2xsb3cuZmxhZyA9IFwiaG9sbG93XCI7XHJcbmhvbGxvdy5uYW1lID0gXCJSaW5nXCI7XHJcbmhvbGxvdy5tb2RlbCA9IHJpbmcoKTtcclxuaG9sbG93LnRyYW5zZm9ybSA9IHtcclxudHJhbnNsYXRlOiBbMCwgMCwgMF0sXHJcbnJvdGF0ZTogWzEwLCAwLCAwXSxcclxuc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuaG9sbG93LnBpY2tlZENvbG9yID0gWzQ1LzI1NSwyMTUvMjU1LDk2LzI1NV0sXHJcbmhvbGxvdy52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbmhvbGxvdy5hbmltYXRpb24gPSB7XHJcbmlzQW5pbWF0ZTogZmFsc2UsXHJcbmRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbnZhciBob2xsb3dSaW5nTW9kZWwgPSBbXHJcbiAgaG9sbG93XHJcbl1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBob2xsb3dSaW5nTW9kZWw7IiwiLy8gY29uc3QgeyBkZWZhdWx0OiBNYXQ0IH0gPSByZXF1aXJlKFwiLi9zdHJ1Y3RzL21hdGgvTWF0NFwiKTtcclxuaW1wb3J0IE1hdDQgZnJvbSBcIi4vbWF0aC9NYXQ0LmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcclxuICAgICAgICB0aGlzLmxvY2FsTWF0cml4ID0gTWF0NC5nZXRJZGVudGl0eSgpO1xyXG4gICAgICAgIHRoaXMud29ybGRNYXRyaXggPSBNYXQ0LmdldElkZW50aXR5KCk7XHJcbiAgICAgICAgdGhpcy53b3JsZEludmVyc2VNYXRyaXggPSBNYXQ0LmdldElkZW50aXR5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V29ybGRNYXRyaXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud29ybGRNYXRyaXg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBzZXRQYXJlbnQocGFyZW50KSB7XHJcbiAgICAgICAgLy8gYWxyZWFkeSBoYXZlIHBhcmVudFxyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcyk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudC5uYW1lO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgIHNldFdvcmxkTXR4KG1hdHJpeCkge1xyXG4gICAgICBpZiAobWF0cml4ICE9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy53b3JsZE1hdHJpeCA9IE1hdDQubXVsdGlwbHkobWF0cml4LCB0aGlzLmxvY2FsTWF0cml4KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLndvcmxkTWF0cml4ID0gdGhpcy5sb2NhbE1hdHJpeDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBjb25zdCB3b3JsZE1hdHJpeCA9IHRoaXMud29ybGRNYXRyaXg7XHJcbiAgICAgIHRoaXMud29ybGRJbnZlcnNlTWF0cml4ID0gTWF0NC50cmFuc3Bvc2UoXHJcbiAgICAgICAgTWF0NC5pbnZlcnNlKHRoaXMud29ybGRNYXRyaXgpXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgY2hpbGQuc2V0V29ybGRNdHgod29ybGRNYXRyaXgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgIiwiaW1wb3J0IE5vZGUgZnJvbSBcIi4uL3N0cnVjdHMvbm9kZS5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYXRpb257XHJcblxyXG4gICAgc3RhdGljIHBhcnNlQW5pbWF0aW9uRnVuY3Rpb24obW9kZWwpe1xyXG4gICAgICAgIGxldCBhbmltYXRpb24gPSBtb2RlbC5hbmltYXRpb247XHJcbiAgICAgICAgaWYoYW5pbWF0aW9uLmlzQW5pbWF0ZSl7XHJcbiAgICAgICAgICAgIC8vIHBhcnNlIHN0cmluZyB0byBmdW5jdGlvblxyXG4gICAgICAgICAgICBsZXQgX2FuaW1hdGlvbkZ1bmN0aW9uID0gZXZhbChhbmltYXRpb24uYW5pbWF0aW9uRnVuY3Rpb24pXHJcbiAgICAgICAgICAgIHJldHVybiBfYW5pbWF0aW9uRnVuY3Rpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhbmltYXRlKHBhcmVudF9tb2RlbCwgZGVsdGFUaW1lKXtcclxuICAgICAgICBsZXQgYW5pbWF0aW9uID0gcGFyZW50X21vZGVsLmFuaW1hdGlvbjtcclxuICAgICAgICAgICAgaWYoYW5pbWF0aW9uLmlzQW5pbWF0ZSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgX2FuaW1hdGlvbkZ1bmN0aW9uID0gQW5pbWF0aW9uLnBhcnNlQW5pbWF0aW9uRnVuY3Rpb24ocGFyZW50X21vZGVsKTtcclxuICAgICAgICAgICAgICAgIGlmKF9hbmltYXRpb25GdW5jdGlvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0ciA9IHBhcmVudF9tb2RlbC5hbmltYXRpb24uYW5pbWF0aW9uRnVuY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5hbmltYXRpb25GdW5jdGlvbiA9IF9hbmltYXRpb25GdW5jdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmFuaW1hdGlvbkZ1bmN0aW9uKHBhcmVudF9tb2RlbCwgZGVsdGFUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmFuaW1hdGlvbkZ1bmN0aW9uID0gc3RyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBwYXJlbnRfbW9kZWwuY2hpbGRyZW4peyAgICBcclxuICAgICAgICAgICAgQW5pbWF0aW9uLmFuaW1hdGUobW9kZWwsIGRlbHRhVGltZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmVjdXJzZSBlYWNoIG5vZGUgY2hpbGRcclxuICAgICAgICBcclxuICAgIH1cclxufSIsImltcG9ydCBWZWMzIGZyb20gXCIuLi9zdHJ1Y3RzL21hdGgvVmVjMy5qc1wiXHJcbmltcG9ydCBNYXQ0IGZyb20gXCIuLi9zdHJ1Y3RzL21hdGgvTWF0NC5qc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmF7XHJcbiAgICBzdGF0aWMgcHJvamVjdGlvbk9ydG9ncmFwaGljKGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyKSB7XHJcbiAgICAgICAgLy8gTm90ZTogVGhpcyBtYXRyaXggZmxpcHMgdGhlIFkgYXhpcyBzbyAwIGlzIGF0IHRoZSB0b3AuXHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSByaWdodC1sZWZ0XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdG9wLWJvdHRvbVxyXG4gICAgICAgIGNvbnN0IGRlcHRoID0gZmFyIC0gbmVhclxyXG4gICAgICAgIGNvbnN0IGhvcml6b250YWxSYXRpbyA9IChyaWdodCArIGxlZnQpIC8gd2lkdGhcclxuICAgICAgICBjb25zdCB2ZXJ0aWNhbFJhdGlvID0gKHRvcCArIGJvdHRvbSkgLyBoZWlnaHRcclxuICAgICAgICBjb25zdCBkZXB0aFJhdGlvID0gKGZhciArIG5lYXIpIC8gZGVwdGhcclxuXHJcbiAgICAgICAgcmV0dXJuIFsyIC8gKHdpZHRoKSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDIgLyAoaGVpZ2h0KSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIC0yIC8gKGRlcHRoKSwgMCxcclxuICAgICAgICAgICAgICAgIGhvcml6b250YWxSYXRpbywgdmVydGljYWxSYXRpbywgZGVwdGhSYXRpbywgMV07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBwcm9qZWN0aW9uUGVyc3BlY3RpdmUoZm92LCBhc3BlY3QsIG5lYXIsIGZhcil7XHJcbiAgICAgICAgY29uc3QgZiA9IDEuMCAvIE1hdGgudGFuKGZvdiAvIDIpXHJcbiAgICAgICAgY29uc3QgcmFuZ2VJbnYgPSAxIC8gKG5lYXIgLSBmYXIpXHJcblxyXG4gICAgICAgIHJldHVybiBbZiAvIGFzcGVjdCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIGYsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAobmVhciArIGZhcikgKiByYW5nZUludiwgLTEsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCBuZWFyICogZmFyICogcmFuZ2VJbnYgKiAyLCAwXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwcm9qZWN0aW9uT2JsaXF1ZSh0aGV0YSwgcGhpKXtcclxuXHJcbiAgICAgICAgdmFyIHQgPSBNYXRoLnRhbih0aGV0YSlcclxuICAgICAgICB0ID0gdCA9PSAwID8gMC4wMDAwMSA6IHRcclxuICAgICAgICB2YXIgcCA9IE1hdGgudGFuKHBoaSlcclxuICAgICAgICBwID0gcCA9PSAwID8gMC4wMDAwMSA6IHBcclxuICAgICAgICByZXR1cm4gWzEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgLTEvdCwgLTEvcCwgMSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDFdXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvb2tEaXJlY3Rpb24oZXllLCBjZW50ZXIsIHVwKXtcclxuICAgICAgICAvLyBub3JtYWxpemUgZWFjaCBhcnJheVxyXG4gICAgICAgIC8vIGNoYW5nZSBhcyBWZWMzIGZyb20gYXJyYXlcclxuICAgICAgICBsZXQgX2V5ZSA9IFZlYzMuZnJvbUFycmF5KGV5ZSlcclxuICAgICAgICBsZXQgX2NlbnRlciA9IFZlYzMuZnJvbUFycmF5KGNlbnRlcilcclxuICAgICAgICBsZXQgX3VwID0gVmVjMy5mcm9tQXJyYXkodXApXHJcbiAgICBcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGYgPSBWZWMzLnVuaXRWZWN0b3IoVmVjMy5zdWIoX2V5ZSwgX2NlbnRlcikpIC8vIHpBeGlzXHJcbiAgICAgICAgY29uc3QgcyA9IFZlYzMudW5pdFZlY3RvcihWZWMzLmNyb3NzKGYsIF91cCkpIC8vIHhBeGlzXHJcbiAgICAgICAgY29uc3QgdSA9IFZlYzMudW5pdFZlY3RvcihWZWMzLmNyb3NzKHMsIGYpKVxyXG5cclxuICAgICAgICByZXR1cm4gW3MueCwgcy55LCBzLnosIDAsXHJcbiAgICAgICAgICAgICAgICB1LngsIHUueSwgdS56LCAwLFxyXG4gICAgICAgICAgICAgICAgZi54LCBmLnksIGYueiwgMCxcclxuICAgICAgICAgICAgICAgIGV5ZVswXSwgZXllWzFdLCBleWVbMl0sIDFdXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtYWtlWlRvV01hdHJpeChmdWRnZUZhY3Rvcil7XHJcbiAgICAgICAgcmV0dXJuIFsxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCBmdWRnZUZhY3RvciwgMV1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcHJvamVjdGlvbk1hdHJpeChwcm9qZWN0aW9uX3R5cGUsIF9mb3YsIF9hc3BlY3QsX25lYXIsIF9mYXIsIHRoZXRhID0gOTAsIHBoaSA9IDkwKXtcclxuICAgICAgICBjb25zdCBhc3BlY3QgPSBfYXNwZWN0O1xyXG4gICAgICAgIGNvbnN0IGZvdiA9IF9mb3Y7XHJcbiAgICAgICAgY29uc3QgbGVmdCA9IC0yO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gMjtcclxuICAgICAgICBjb25zdCBib3R0b20gPSAtMjtcclxuICAgICAgICBjb25zdCB0b3AgPSAyO1xyXG4gICAgICAgIGNvbnN0IGZhck9ydGhvID0gX2ZhcjtcclxuICAgICAgICBjb25zdCBuZWFyT3J0aG8gPSAtZmFyT3J0aG87XHJcbiAgICBcclxuICAgICAgICBzd2l0Y2ggKHByb2plY3Rpb25fdHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwib3J0aG9ncmFwaGljXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FtZXJhLnByb2plY3Rpb25PcnRvZ3JhcGhpYyhsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXJPcnRobywgZmFyT3J0aG8pXHJcbiAgICAgICAgICAgIGNhc2UgXCJvYmxpcXVlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0NC5tdWx0aXBseShcclxuICAgICAgICAgICAgICAgICAgICBDYW1lcmEucHJvamVjdGlvbk9ibGlxdWUodGhldGEsIHBoaSksXHJcbiAgICAgICAgICAgICAgICAgICAgQ2FtZXJhLnByb2plY3Rpb25PcnRvZ3JhcGhpYyhsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXJPcnRobywgZmFyT3J0aG8pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjYXNlIFwicGVyc3BlY3RpdmVcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBDYW1lcmEucHJvamVjdGlvblBlcnNwZWN0aXZlKFxyXG4gICAgICAgICAgICAgICAgICAgIGZvdixcclxuICAgICAgICAgICAgICAgICAgICBhc3BlY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgX25lYXIsXHJcbiAgICAgICAgICAgICAgICAgICAgX2ZhclxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBDYW1lcmEucHJvamVjdGlvbk9ydG9ncmFwaGljKGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhck9ydGhvLCBmYXJPcnRobylcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHZpZXdNYXRyaXgob3JpZW50YXRpb24sIGxvb2tBdCwgdXApe1xyXG4gICAgICAgIGxldCBbcm9sbCwgcGl0Y2gsIHJhZGl1c10gPSBvcmllbnRhdGlvblxyXG5cclxuICAgICAgICAvLyByb2xsLCBwaXRjaCwgcmFkaXVzXHJcbiAgICAgICAgdmFyIGNhbWVyYU1hdHJpeCA9IE1hdDQubXVsdGlwbHkoXHJcbiAgICAgICAgICAgIE1hdDQubXVsdGlwbHkoXHJcbiAgICAgICAgICAgICAgICBNYXQ0LnJvdGF0ZVkocGl0Y2gpLFxyXG4gICAgICAgICAgICAgICAgTWF0NC5yb3RhdGVYKHJvbGwpKSxcclxuICAgICAgICAgICAgTWF0NC50cmFuc2xhdGUoMCwgMCwgcmFkaXVzKVxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgdmFyIGNhbWVyYVBvc2l0aW9uID0gW1xyXG4gICAgICAgICAgICBjYW1lcmFNYXRyaXhbMTJdLFxyXG4gICAgICAgICAgICBjYW1lcmFNYXRyaXhbMTNdLFxyXG4gICAgICAgICAgICBjYW1lcmFNYXRyaXhbMTRdXHJcbiAgICAgICAgXVxyXG5cclxuICAgICAgICB2YXIgY2FtZXJhTWF0cml4ID0gQ2FtZXJhLmxvb2tEaXJlY3Rpb24oY2FtZXJhUG9zaXRpb24sIGxvb2tBdCwgdXApXHJcblxyXG4gICAgICAgIHZhciB2aWV3TWF0cml4ID0gTWF0NC5pbnZlcnNlKGNhbWVyYU1hdHJpeClcclxuXHJcbiAgICAgICAgcmV0dXJuIHZpZXdNYXRyaXhcclxuICAgIH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYXBlclRleHR1cmUoZ2wpIHtcclxuICBjb25zdCB0ZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xyXG4gIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xyXG4gIGdsLnRleEltYWdlMkQoXHJcbiAgICBnbC5URVhUVVJFXzJELFxyXG4gICAgMCxcclxuICAgIGdsLlJHQkEsXHJcbiAgICAxLFxyXG4gICAgMSxcclxuICAgIDAsXHJcbiAgICBnbC5SR0JBLFxyXG4gICAgZ2wuVU5TSUdORURfQllURSxcclxuICAgIG5ldyBVaW50OEFycmF5KFswLCAwLCAwLCAwXSlcclxuICApO1xyXG5cclxuICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XHJcbiAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIGltYWdlKTtcclxuICAgIGlmIChpc1Bvd2VyT2YyKGltYWdlLndpZHRoKSAmJiBpc1Bvd2VyT2YyKGltYWdlLmhlaWdodCkpIHtcclxuICAgICAgZ2wuZ2VuZXJhdGVNaXBtYXAoZ2wuVEVYVFVSRV8yRCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgaW1hZ2Uuc3JjID0gXCIuL21hcHBpbmcvcGFwZXIuanBlZ1wiOyBcclxuICByZXR1cm4gdGV4dHVyZTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNQb3dlck9mMih2YWx1ZSkge1xyXG4gIHJldHVybiAodmFsdWUgJiAodmFsdWUgLSAxKSkgPT0gMDtcclxufSBcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbnZpcm9ubWVudFRleHR1cmUoZ2wpIHtcclxuICBjb25zdCB0ZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xyXG4gIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfQ1VCRV9NQVAsIHRleHR1cmUpO1xyXG5cclxuICBjb25zdCBmYWNlSW5mb3MgPSBbXHJcbiAgICB7IHRhcmdldDogZ2wuVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9YLCB1cmw6IFwiLi9tYXBwaW5nL2Vudmlyb25tZW50LmpwZ1wiIH0sXHJcbiAgICB7IHRhcmdldDogZ2wuVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9YLCB1cmw6IFwiLi9tYXBwaW5nL2Vudmlyb25tZW50LmpwZ1wiIH0sXHJcbiAgICB7IHRhcmdldDogZ2wuVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9ZLCB1cmw6IFwiLi9tYXBwaW5nL2Vudmlyb25tZW50LmpwZ1wiIH0sXHJcbiAgICB7IHRhcmdldDogZ2wuVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9ZLCB1cmw6IFwiLi9tYXBwaW5nL2Vudmlyb25tZW50LmpwZ1wiIH0sXHJcbiAgICB7IHRhcmdldDogZ2wuVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9aLCB1cmw6IFwiLi9tYXBwaW5nL2Vudmlyb25tZW50LmpwZ1wiIH0sXHJcbiAgICB7IHRhcmdldDogZ2wuVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9aLCB1cmw6IFwiLi9tYXBwaW5nL2Vudmlyb25tZW50LmpwZ1wiIH0sXHJcbiAgXTtcclxuXHJcbiAgZmFjZUluZm9zLmZvckVhY2goKGZhY2VJbmZvKSA9PiB7XHJcbiAgICBjb25zdCB7IHRhcmdldCwgdXJsIH0gPSBmYWNlSW5mbztcclxuXHJcbiAgICBnbC50ZXhJbWFnZTJEKFxyXG4gICAgICB0YXJnZXQsXHJcbiAgICAgIDAsXHJcbiAgICAgIGdsLlJHQkEsXHJcbiAgICAgIDUxMixcclxuICAgICAgNTEyLFxyXG4gICAgICAwLFxyXG4gICAgICBnbC5SR0JBLFxyXG4gICAgICBnbC5VTlNJR05FRF9CWVRFLFxyXG4gICAgICBudWxsXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZS5zcmMgPSB1cmw7XHJcbiAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfQ1VCRV9NQVAsIHRleHR1cmUpO1xyXG4gICAgICBnbC50ZXhJbWFnZTJEKHRhcmdldCwgMCwgZ2wuUkdCQSwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgaW1hZ2UpO1xyXG4gICAgICBnbC5nZW5lcmF0ZU1pcG1hcChnbC5URVhUVVJFX0NVQkVfTUFQKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBnbC5nZW5lcmF0ZU1pcG1hcChnbC5URVhUVVJFX0NVQkVfTUFQKTtcclxuICBnbC50ZXhQYXJhbWV0ZXJpKFxyXG4gICAgZ2wuVEVYVFVSRV9DVUJFX01BUCxcclxuICAgIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUixcclxuICAgIGdsLkxJTkVBUl9NSVBNQVBfTElORUFSXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJ1bXBUZXh0dXJlKGdsKSB7XHJcbiAgY29uc3QgdGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcclxuICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcclxuICBnbC50ZXhJbWFnZTJEKFxyXG4gICAgZ2wuVEVYVFVSRV8yRCwgXHJcbiAgICAwLCBcclxuICAgIGdsLlJHQkEsIFxyXG4gICAgMSwgXHJcbiAgICAxLCBcclxuICAgIDAsIFxyXG4gICAgZ2wuUkdCQSwgXHJcbiAgICBnbC5VTlNJR05FRF9CWVRFLCBcclxuICAgIG5ldyBVaW50OEFycmF5KFsyNTUsIDAsIDAsIDI1NV0pXHJcbiAgKTtcclxuXHJcbiAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgaW1hZ2Uuc3JjID0gXCIuL21hcHBpbmcvYnVtcC5wbmdcIjtcclxuICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcclxuICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgaW1hZ2UpO1xyXG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLkxJTkVBUik7XHJcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSKTtcclxuICB9XHJcbn1cclxuICAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9