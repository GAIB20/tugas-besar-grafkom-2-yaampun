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
/* harmony import */ var _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Animation.js */ "./src/utils/Animation.js");




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

// model 
const modelSelection = document.getElementById('model-selection');
const mappingSelection = document.getElementById('mapping-selection');

// animation

// pause, play, auto, reverse
const pauseContinue = document.getElementById('pause-continue-animation');
const play = document.getElementById('play-animation');
const auto = document.getElementById('auto-animation');
const reverse = document.getElementById('reverse-animation');

// next, prev, first, last
const next = document.getElementById('next-animation');
const prev = document.getElementById('prev-animation');
const first = document.getElementById('first-animation');
const last = document.getElementById('last-animation');

// ambient light
const redAmbient = document.getElementById('red-slider');
const greenAmbient = document.getElementById('green-slider');
const blueAmbient = document.getElementById('blue-slider');

// light position
const lightX = document.getElementById('light-x-slider');
const lightY = document.getElementById('light-y-slider');
const lightZ = document.getElementById('light-z-slider');

// phong
const shininess = document.getElementById('shininess-slider');
const specular = document.getElementById('specular-slider');
const diffuse = document.getElementById('diffuse-slider');


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
            setSlider(object);
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

function setSlider(node){
    redAmbient.value = node.ambient[0];
    greenAmbient.value = node.ambient[1];
    blueAmbient.value = node.ambient[2];
    shininess.value = node.shininess;
    specular.value = node.specular[0];
    diffuse.value = node.diffuse[0];
}


function handleTransform(node){
    // change translation, rotation, scalation
    let [tx, ty, tz] = node.transform.translate
    // times 50

    let [rx, ry, rz] = node.transform.rotate
    // change with radToDeg
    if(true){
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

// animation
pauseContinue.addEventListener('click', function(){
    if(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot.animation.isAnimate){
        // change to continue
        pauseContinue.textContent = "Continue";
    }
    else{
        pauseContinue.textContent = "Pause";
    }
    _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].pauseContinueAnimation(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot);
    
})

play.addEventListener('click', function(){
    pauseContinue.textContent = "Pause";
    _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].playAnimation(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot);
})


auto.addEventListener('click', function(){
    // change to continue
    auto.textContent = !_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot.animation.isAuto ? "Stop Auto" : "Auto";
    _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].setAuto(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot);
})

reverse.addEventListener('click', function(){
    reverse.textContent = !_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot.animation.isReverse ? "Stop Reverse" : "Reverse";
    _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].reverseAnimation(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot);
})

// next, prev, first, last
next.addEventListener('click', function(){
    _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].nextFrame(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot);
})

prev.addEventListener('click', function(){
    _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].prevFrame(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot);
})

first.addEventListener('click', function(){
    _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].firstFrame(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot);
})

last.addEventListener('click', function(){
    _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].lastFrame(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot);
})

function handleAmbientColor(node){
    node.ambient[0] = redAmbient.value;
    node.ambient[1] = greenAmbient.value;
    node.ambient[2] = blueAmbient.value;
    for(let child of node.children){
        handleAmbientColor(child);
    }
}

redAmbient.addEventListener('input', function(){
    handleAmbientColor(_index_js__WEBPACK_IMPORTED_MODULE_0__.target);
})

greenAmbient.addEventListener('input', function(){
    handleAmbientColor(_index_js__WEBPACK_IMPORTED_MODULE_0__.target);
})

blueAmbient.addEventListener('input', function(){
    handleAmbientColor(_index_js__WEBPACK_IMPORTED_MODULE_0__.target);
})

function handlePhong(node){
    node.shininess = 100 - shininess.value;
    node.specular[0] = specular.value;
    node.specular[1] = specular.value;
    node.specular[2] = specular.value;
    node.diffuse[0] = diffuse.value;
    node.diffuse[1] = diffuse.value;
    node.diffuse[2] = diffuse.value;
    for(let child of node.children){
        handlePhong(child);
    }
}

shininess.addEventListener('input', function(){
    handlePhong(_index_js__WEBPACK_IMPORTED_MODULE_0__.target);
});

specular.addEventListener('input', function(){
    handlePhong(_index_js__WEBPACK_IMPORTED_MODULE_0__.target);
});

diffuse.addEventListener('input', function(){
    handlePhong(_index_js__WEBPACK_IMPORTED_MODULE_0__.target);
});

lightX.addEventListener('input', function(){
    _index_js__WEBPACK_IMPORTED_MODULE_0__.lightDirection[0] = parseFloat(lightX.value);
})

lightY.addEventListener('input', function(){
    _index_js__WEBPACK_IMPORTED_MODULE_0__.lightDirection[1] = parseFloat(lightY.value);
})

lightZ.addEventListener('input', function(){
    _index_js__WEBPACK_IMPORTED_MODULE_0__.lightDirection[2] = parseFloat(lightZ.value);
})


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
/* harmony export */   lightDirection: () => (/* binding */ lightDirection),
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
var model = [_structs_model_pig_js__WEBPACK_IMPORTED_MODULE_0__["default"], _structs_model_chicken_js__WEBPACK_IMPORTED_MODULE_1__["default"], _structs_model_fox_js__WEBPACK_IMPORTED_MODULE_2__["default"], _structs_model_hollowThingy_js__WEBPACK_IMPORTED_MODULE_8__["default"], _structs_model_ring_js__WEBPACK_IMPORTED_MODULE_9__["default"]];
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
var fps_time = 0.15;

initState();

function initState() {
    objects = model[0];
    focus = null;
    lighting = false;
    lightDirection = [0.0, 0.0, 1.0]
    texture = "none";
    projection_type = "orthographic";
    factor = 0.0;
    oblique_theta = 90.0;
    oblique_phi = 90.0;
    for(let i = 0; i < model.length; i++){
        setDefaultRotation(model[i]);
    }
    (0,_handler_eventHandler_js__WEBPACK_IMPORTED_MODULE_7__.displayComponent)(0, objects);
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
        var a_color = new Float32Array(object.pickedColor.flat(1));
        var a_texture = new Float32Array(object.model.texCoord);
        var a_tangent = new Float32Array(object.model.tangents.flat(1));
        var a_bitangent = new Float32Array(object.model.bitangents.flat(1));

        setAttr(gl, object.program, a_position, a_normal, a_color, a_texture, a_tangent, a_bitangent);

        // const diffuse = [1, 1, 1];
        // const specular = [0, 0, 0];
        // const ambient = [1, 1 ,1]
        // const shininess = 100;

        var uniforms = {
            uWorldViewProjection: object.worldMatrix,
            uWorldInverseTranspose: object.worldInverseMatrix,
            uReverseLightDirection: normalizeLight,
            uColor: object.pickedColor.concat(1.0),
            uModelMatrix: modelMatrix,
            uAmbientColor: object.ambient,
            uDiffuseColor: object.diffuse,
            uSpecularColor: object.specular,
            uShininess: object.shininess,
            uLightPos: normalizeLight,
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
    gl.clearColor(0.8, 0.8, 0.8, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.enable(gl.CULL_FACE);
    gl.enable(gl.DEPTH_TEST);

    setDefaultState(objects);
    // delta time
    if(!now) now = 0;
    if(t_animation === 0) t_animation = now;

    if((now - t_animation) >= fps_time){
      t_animation = now;
      let deltaTime = now - t_animation;
      _utils_Animation_js__WEBPACK_IMPORTED_MODULE_11__["default"].animate(targetRoot, deltaTime);
    }


    objects[0].setWorldMtx(null);

    normalizeLight = _structs_math_Vec3_js__WEBPACK_IMPORTED_MODULE_4__["default"].unitVector(_structs_math_Vec3_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromArray(lightDirection)).asArray()
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
    console.log(objects[0])
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
/* harmony import */ var _math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/mathUtils.js */ "./src/structs/math/mathUtils.js");
/* harmony import */ var _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Animation.js */ "./src/utils/Animation.js");




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
chicken.pickedColor = [0.9, 0.9, 0],
chicken.diffuse = [0, 0, 0],
chicken.specular = [0, 0, 0],
chicken.ambient = [1, 1, 1],
chicken.shininess = 1,
chicken.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};

function chickenFrames(){
    let transform = {
        translate: [0, 0, 0],
        rotate: [(0,_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(42), (0,_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(-55), (0,_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(27)],
        scale: [1, 1, 1],
    }
    let frames = []
    for(let k = 0; k < 100; ++k){
        let _transform = JSON.parse(JSON.stringify(transform));
        _transform.translate[0] = k / 50;
        frames.push(_transform);
    }
    
    return frames;

}

chicken.animation = {
    isAnimate: false,
    frames: chickenFrames(),
    currentFrame: 0,
    animationFunction: _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].animationScript(),
    isAuto: false,
    isReverse: false
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
head.pickedColor = [0.9, 0.9, 0];
head.diffuse = [0, 0, 0];
head.specular = [0, 0, 0];
head.ambient = [1, 1, 1];
head.shininess = 1,
head.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
head.animation = {
    isAnimate: false,
    frames: null,
    currentFrame: 0,
    animationFunction: null, 
    isAuto: false,
    isReverse: false
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
beak.diffuse = [0, 0, 0];
beak.specular = [0, 0, 0];
beak.ambient = [1, 1, 1];
beak.shininess = 1,
beak.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
beak.animation = {
    isAnimate: false,
    frames: null,
    currentFrame: 0,
    animationFunction: null,
    isAuto: false,
    isReverse: false
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
whiteLeftEye.diffuse = [0, 0, 0];
whiteLeftEye.specular = [0, 0, 0];
whiteLeftEye.ambient = [1, 1, 1];
whiteLeftEye.shininess = 1,
whiteLeftEye.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
whiteLeftEye.animation = {
    isAnimate: false,
    frames: null,
    currentFrame: 0,
    animationFunction: null,
    isAuto: false,
    isReverse: false
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
blackLeftEye.diffuse = [0, 0, 0];
blackLeftEye.specular = [0, 0, 0];
blackLeftEye.ambient = [1, 1, 1];
whiteLeftEye.shininess = 1,
blackLeftEye.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
blackLeftEye.animation = {
    isAnimate: false,
    frames: null,
    currentFrame: 0,
    animationFunction: null,
    isAuto: false,
    isReverse: false

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
whiteRightEye.diffuse = [0, 0, 0];
whiteRightEye.specular = [0, 0, 0];
whiteRightEye.ambient = [1, 1, 1];
whiteRightEye.shininess = 1,
whiteRightEye.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
whiteRightEye.animation = {
    isAnimate: false,
    frames: null,
    currentFrame: 0,
    animationFunction: null,
    isAuto: false,
    isReverse: false

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
blackRightEye.diffuse = [0, 0, 0];
blackRightEye.specular = [0, 0, 0];
blackRightEye.ambient = [1, 1, 1];
blackRightEye.shininess = 1,
blackRightEye.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
blackRightEye.animation = {
    isAnimate: false,
    frames: null,
    currentFrame: 0,
    animationFunction: null,
    isAuto: false,
    isReverse: false
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
leftWing.pickedColor = [0.9, 0.9, 0];
leftWing.diffuse = [0, 0, 0];
leftWing.specular = [0, 0, 0];
leftWing.ambient = [1, 1, 1];
leftWing.shininess = 1,
leftWing.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};

function leftWingFrames(){

    let transform = {
        translate: [0, 0, -0.75],
        rotate: [0, 0, 90],
        scale: [1, 1, 1],
    }
    let frames = []
    for(let k = 0; k < 4; ++k){
        for(let i = 0; i <= 12; i++){
            let _transform = JSON.parse(JSON.stringify(transform));
            _transform.rotate[0] = -Math.PI / 9 + Math.PI/9 * i / 6;
            frames.push(_transform); 
        }
        for(let i =0 ; i <= 12; i++){
            let _transform = JSON.parse(JSON.stringify(transform));
            _transform.rotate[0] = Math.PI / 9 - Math.PI/9 * i / 6;
            frames.push(_transform);
        }
    }
    // from -pi/9 to 0
    for(let i = 0; i <= 6; i++){
        let _transform = JSON.parse(JSON.stringify(transform));
        _transform.rotate[0] = -Math.PI / 9 + Math.PI/9 * i / 6;
        frames.push(_transform); 
    }
    return frames;

}

leftWing.animation = {
    isAnimate: false,
    frames: leftWingFrames(),
    currentFrame: 0,
    animationFunction: _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].animationScript(),
    isAuto: false,
    isReverse: false
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
rightWing.pickedColor = [0.9, 0.9, 0];
rightWing.diffuse = [0, 0, 0];
rightWing.specular = [0, 0, 0];
rightWing.ambient = [1, 1, 1];
rightWing.shininess = 1,
rightWing.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};

function rightWingFrames(){
    let transform = {
        translate: [0, 0, 0.75],
        rotate: [0, 0, 90],
        scale: [1, 1, 1],
    }
    let frames = []
    for(let k = 0; k < 4; ++k){
        for(let i = 0; i <= 12; i++){
            let _transform = JSON.parse(JSON.stringify(transform));
            _transform.rotate[0] = Math.PI / 9 - Math.PI/9 * i / 6;
            frames.push(_transform); 
        }
        for(let i =0 ; i <= 12; i++){
            let _transform = JSON.parse(JSON.stringify(transform));
            _transform.rotate[0] = - Math.PI / 9 + Math.PI/9 * i / 6;
            frames.push(_transform);
        }
    }
    // from pi/6 to 0
    for(let i = 0; i <= 6; i++){
        let _transform = JSON.parse(JSON.stringify(transform));
        _transform.rotate[0] = Math.PI / 9 - Math.PI/9 * i / 6;
        frames.push(_transform); 
    }
    return frames;

}

rightWing.animation = {
    isAnimate: false,
    frames: rightWingFrames(),
    currentFrame: 0,
    animationFunction: _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].animationScript(),
    isAuto: false,
    isReverse: false
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
rightLeg.diffuse = [0, 0, 0];
rightLeg.specular = [0, 0, 0];
rightLeg.ambient = [1, 1, 1];
rightLeg.shininess = 1,
rightLeg.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};

function rightLegFrames(){
    let transform = {
        translate: [-0.5, -0.8, -0.35],
        rotate: [0, 0, 0],
        scale: [1, 1, 1],
    }
    let frames = []
    for(let k = 0; k < 4; ++k){
        for(let i = 0; i <= 12; i++){
            // append for angle pi/6 - pi/3 * i/12 to frames
            // clone the transform object
            let _transform = JSON.parse(JSON.stringify(transform));
            _transform.rotate[2] = Math.PI / 6 - Math.PI/3 * i / 12;
            frames.push(_transform); 
        }
        for(let i =0 ; i <= 12; i++){
            // append for angle pi/6 * i/12 to frames
            // clone the transform object
            let _transform = JSON.parse(JSON.stringify(transform));
            _transform.rotate[2] = - Math.PI / 6 + Math.PI/3 * i / 12;
            frames.push(_transform);
        }
    }
    // from pi/6 to 0
    for(let i = 0; i <= 6; i++){
        // append for angle pi/6 - pi/3 * i/12 to frames
        // clone the transform object
        let _transform = JSON.parse(JSON.stringify(transform));
        _transform.rotate[2] = Math.PI / 6 - Math.PI/6 * i / 6;
        frames.push(_transform); 
    }

    return frames;
}


rightLeg.animation = {
    isAnimate: false,
    frames : rightLegFrames(),
    currentFrame : 0,
    animationFunction: _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].animationScript(),
    isAuto: false,
    isReverse: false
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
rightFoot.diffuse = [0, 0, 0];
rightFoot.specular = [0, 0, 0];
rightFoot.ambient = [1, 1, 1];
rightFoot.shininess = 1,
rightFoot.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
rightFoot.animation = {
    isAnimate: false,
    frames: null,
    currentFrame: 0,
    animationFunction: null,
    isAuto: false,
    isReverse: false
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
leftLeg.diffuse = [0, 0, 0];
leftLeg.specular = [0, 0, 0];
leftLeg.ambient = [1, 1, 1];
leftLeg.shininess = 1,
leftLeg.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};

function leftLegFrames(){
    let transform = {
        translate: [-0.5, -0.8, 0.35],
        rotate: [0, 0, 0],
        scale: [1, 1, 1],
    }
    let frames = []
    for(let k = 0; k < 4; ++k){
        for(let i = 0; i <= 12; i++){
            // append for angle pi/6 - pi/3 * i/12 to frames
            // clone the transform object
            let _transform = JSON.parse(JSON.stringify(transform));
            _transform.rotate[2] = - Math.PI / 6 + Math.PI/3 * i / 12;
            frames.push(_transform); 
        }
        for(let i =0 ; i <= 12; i++){
            // append for angle pi/6 * i/12 to frames
            // clone the transform object
            let _transform = JSON.parse(JSON.stringify(transform));
            _transform.rotate[2] = Math.PI / 6 - Math.PI/3 * i / 12;
            frames.push(_transform);
        }
    }
    // from -pi/6 to 0
    for(let i = 0; i <= 6; i++){
        // append for angle pi/6 - pi/3 * i/12 to frames
        // clone the transform object
        let _transform = JSON.parse(JSON.stringify(transform));
        _transform.rotate[2] = -Math.PI / 6 + Math.PI/6 * i / 6;
        frames.push(_transform); 
    }
    return frames;
}

leftLeg.animation = {
    isAnimate: false,
    frames : leftLegFrames(),
    currentFrame : 0,
    animationFunction: _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].animationScript(),
    isAuto: false,
    isReverse: false
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
leftFoot.diffuse = [0, 0, 0];
leftFoot.specular = [0, 0, 0];
leftFoot.ambient = [1, 1, 1];
leftFoot.shininess = 1,
leftFoot.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
leftFoot.animation = {
    isAnimate: false,
    frames: null,
    currentFrame: 0,
    animationFunction: null,
    isAuto: false,
    isReverse: false
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
const rightFrontToe = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
rightFrontToe.name = "rightFrontToe";
rightFrontToe.model = boxModel(0.1, 0.2, 0.2, [0, 0, 0]);
rightFrontToe.transform = {
  translate: [0, -0.45, 0.05], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
rightFrontToe.pickedColor = whiteColor;
rightFrontToe.viewMatrix = {
  camera: [0, 0, 5],
  lookAt: [0, 0, 0],
  up: [0, 1, 0],
  near: 0.1,
  far: 50,
};
rightFrontToe.animation = {
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
const leftFrontToe = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
leftFrontToe.name = "leftFrontToe";
leftFrontToe.model = boxModel(0.1, 0.2, 0.15, [0, 0, 0]);
leftFrontToe.transform = {
  translate: [-0, -0.45, 0.05], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
leftFrontToe.pickedColor = whiteColor;
leftFrontToe.viewMatrix = {
  camera: [0, 0, 5],
  lookAt: [0, 0, 0],
  up: [0, 1, 0],
  near: 0.1,
  far: 50,
};
leftFrontToe.animation = {
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
const rightRearToe = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
rightRearToe.name = "rightRearToe";
rightRearToe.model = boxModel(0.1, 0.2, 0.2, [0, 0, 0]);
rightRearToe.transform = {
  translate: [0, -0.45, 0.05],
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
rightRearToe.pickedColor = whiteColor;
rightRearToe.viewMatrix = {
  camera: [0, 0, 5],
  lookAt: [0, 0, 0],
  up: [0, 1, 0],
  near: 0.1,
  far: 50,
};
rightRearToe.animation = {
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
const leftRearToe = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
leftRearToe.name = "leftRearToe";
leftRearToe.model = boxModel(0.1, 0.2, 0.2, [0, 0, 0]);
leftRearToe.transform = {
  translate: [-0, -0.45, 0.05], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
leftRearToe.pickedColor = whiteColor;
leftRearToe.viewMatrix = {
  camera: [0, 0, 5],
  lookAt: [0, 0, 0],
  up: [0, 1, 0],
  near: 0.1,
  far: 50,
};
leftRearToe.animation = {
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
rightFrontToe.setParent(rightFrontLeg);
leftFrontLeg.setParent(fox);
leftFrontToe.setParent(leftFrontLeg);
rightRearLeg.setParent(fox);
rightRearToe.setParent(rightRearLeg);
leftRearLeg.setParent(fox);
leftRearToe.setParent(leftRearLeg);
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
  rotate: [10, 59, 0],
  scale: [1, 1, 1],
};
pig.pickedColor = [0.921568627,0.568627451,0.898039216],
pig.diffuse = [0,0,0],
pig.specular = [0,0,0],
pig.ambient = [1,1,1],
pig.shininess = 1,
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
head.diffuse = [0,0,0],
head.specular = [0,0,0],
head.ambient = [1,1,1],
head.shininess = 1,
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
whiteRightEye.diffuse = [0,0,0],
whiteRightEye.specular = [0,0,0],
whiteRightEye.ambient = [1,1,1],
whiteRightEye.shininess = 1,
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
whiteLeftEye.diffuse = [0,0,0],
whiteLeftEye.specular = [0,0,0],
whiteLeftEye.ambient = [1,1,1],
whiteLeftEye.shininess = 1,
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
blackRightEye.diffuse = [0,0,0],
blackRightEye.specular = [0,0,0],
blackRightEye.ambient = [1,1,1],
blackRightEye.shininess = 1,
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
blackLeftEye.diffuse = [0,0,0],
blackLeftEye.specular = [0,0,0],
blackLeftEye.ambient = [1,1,1],
blackLeftEye.shininess = 1,
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
nose.diffuse = [0,0,0],
nose.specular = [0,0,0],
nose.ambient = [1,1,1],
nose.shininess = 1,
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
rightHole.diffuse = [0,0,0],
rightHole.specular = [0,0,0],
rightHole.ambient = [1,1,1],
rightHole.shininess = 1,
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
leftHole.diffuse = [0,0,0],
leftHole.specular = [0,0,0],
leftHole.ambient = [1,1,1],
leftHole.shininess = 1,
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
rightFrontLeg.diffuse = [0,0,0],
rightFrontLeg.specular = [0,0,0],
rightFrontLeg.ambient = [1,1,1],
rightFrontLeg.shininess = 1,
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
leftFrontLeg.diffuse = [0,0,0],
leftFrontLeg.specular = [0,0,0],
leftFrontLeg.ambient = [1,1,1],
leftFrontLeg.shininess = 1,
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
rightRearLeg.diffuse = [0,0,0],
rightRearLeg.specular = [0,0,0],
rightRearLeg.ambient = [1,1,1],
rightRearLeg.shininess = 1,
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
leftRearLeg.diffuse = [0,0,0],
leftRearLeg.specular = [0,0,0],
leftRearLeg.ambient = [1,1,1],
leftRearLeg.shininess = 1,
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

    static setAuto(parent_model){
        parent_model.animation.isAuto = !parent_model.animation.isAuto;
        for(let model of parent_model.children){    
            Animation.setAuto(model)
        }
    }

    static playAnimation(parent_model){
        parent_model.animation.isAnimate = true;
        if(parent_model.animation.isReverse){
            if(parent_model.animation.frames){
            parent_model.animation.currentFrame = parent_model.animation.frames.length - 1;
            }
            else parent_model.animation.currentFrame = 0;
        }
        else parent_model.animation.currentFrame = 0;
        for(let model of parent_model.children){    
            Animation.playAnimation(model)
        }
    }

    static pauseContinueAnimation(parent_model){
        parent_model.animation.isAnimate = !parent_model.animation.isAnimate;
        for(let model of parent_model.children){    
            Animation.pauseContinueAnimation(model)
        }
    }

    static reverseAnimation(parent_model){
        parent_model.animation.isReverse = !parent_model.animation.isReverse;
        for(let model of parent_model.children){    
            Animation.reverseAnimation(model)
        }
    }

    static animationScript(){
        const animationScript = `((_node, deltaTime) => {
            let frames = _node.animation.frames;
            if(_node.animation.currentFrame >= frames.length || _node.animation.currentFrame < 0){
                if(_node.animation.isAuto){
                    if(_node.animation.currentFrame < 0){
                        _node.animation.currentFrame = frames.length - 1;
                    }
                    _node.animation.currentFrame = _node.animation.currentFrame % frames.length;
                }
                else{
                    return;
                }
            }
            if (_node.animation.isAnimate) {
                _node.transform = frames[_node.animation.currentFrame];
                if(_node.animation.isReverse){
                    _node.animation.currentFrame--;
                }
                else{
                    _node.animation.currentFrame++;
                }
            }
        })`
        return animationScript;
    }

    static nextFrame(parent_model){
        
        if(parent_model.animation.frames){
            parent_model.animation.currentFrame++;
            if(parent_model.animation.currentFrame >= parent_model.animation.frames.length){
                parent_model.animation.currentFrame = parent_model.animation.frames.length - 1;
            }
            parent_model.transform = parent_model.animation.frames[parent_model.animation.currentFrame];
        }
        for(let model of parent_model.children){    
            Animation.nextFrame(model)
        }
    }

    static prevFrame(parent_model){
        if(parent_model.animation.frames){
            parent_model.animation.currentFrame--;
            if(parent_model.animation.currentFrame < 0){
                parent_model.animation.currentFrame = 0;
            }
            parent_model.transform = parent_model.animation.frames[parent_model.animation.currentFrame];
        }
        for(let model of parent_model.children){    
            Animation.prevFrame(model)
        }
    }

    static firstFrame(parent_model){
        if(parent_model.animation.frames){
            parent_model.animation.currentFrame = 0;
            parent_model.transform = parent_model.animation.frames[parent_model.animation.currentFrame];
        }
        for(let model of parent_model.children){    
            Animation.firstFrame(model)
        }
    }

    static lastFrame(parent_model){
        if(parent_model.animation.frames){
            parent_model.animation.currentFrame = parent_model.animation.frames.length - 1;
            parent_model.transform = parent_model.animation.frames[parent_model.animation.currentFrame];
        }
        for(let model of parent_model.children){    
            Animation.lastFrame(model)
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNkRBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNkRBQUk7QUFDNUI7QUFDQSxRQUFRLDZEQUFJO0FBQ1o7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZEQUFJO0FBQzFCO0FBQ0EsTUFBTSw2REFBSTtBQUNWO0FBQ0E7QUFDQSxzQkFBc0IsNkRBQUk7QUFDMUI7QUFDQSxNQUFNLDZEQUFJO0FBQ1Y7QUFDQTtBQUNBLHNCQUFzQiw2REFBSTtBQUMxQjtBQUNBLE1BQU0sNkRBQUk7QUFDVjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNkRBQUk7QUFDNUI7QUFDQSxRQUFRLDZEQUFJO0FBQ1o7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZEQUFJO0FBQzFCO0FBQ0EsTUFBTSw2REFBSTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDREQUFTO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2REFBSSxZQUFZLDZEQUFJO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix3REFBTTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0RBQU07QUFDN0IsK0JBQStCLDZEQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsNkRBQUk7QUFDbkMsWUFBWSx3REFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyw2REFBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0VBQWM7QUFDbEIsSUFBSSwwRUFBZ0I7QUFDcEIsSUFBSSx5RUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sTUFBTSxzRUFBa0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixNQUFNLDRFQUF3QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLE1BQU0scUVBQWlCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZWNkI7QUFDZDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQiw0QkFBNEIsT0FBTztBQUNuQyxpQ0FBaUMsZ0RBQUk7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdEQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdEQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0RBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0RBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnREFBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnREFBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdEQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Yk07QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0Q0FBNEM7QUFDcEQsUUFBUSw2Q0FBNkM7QUFDckQsUUFBUSwrQ0FBK0M7QUFDdkQsUUFBUSw4Q0FBOEM7QUFDdEQsUUFBUSw4Q0FBOEM7QUFDdEQsUUFBUSwrQ0FBK0M7QUFDdkQsUUFBUSw0Q0FBNEM7QUFDcEQsUUFBUSw2Q0FBNkM7QUFDckQsUUFBUSw0Q0FBNEM7QUFDcEQsUUFBUSw2Q0FBNkM7QUFDckQsUUFBUSw4Q0FBOEM7QUFDdEQsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnREFBSTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7O0FDeEVJO0FBQzlCO0FBQ0EsZ0JBQWdCLGdEQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdEQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnREFBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0RBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdEQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnREFBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0RBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdEQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnREFBSTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0RBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdEQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnREFBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0RBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUSxFQUFDO0FBQ3hCOzs7Ozs7Ozs7Ozs7Ozs7QUMzVjhCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQ0FBZ0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0RBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ3JFOUIsV0FBVyxnQkFBZ0I7QUFDTztBQUNsQztBQUNlO0FBQ2Y7QUFDQTtBQUNBLDJCQUEyQixxREFBSTtBQUMvQiwyQkFBMkIscURBQUk7QUFDL0Isa0NBQWtDLHFEQUFJO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscURBQUk7QUFDL0IsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFEQUFJO0FBQ3BDLFFBQVEscURBQUk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5Q3NDO0FBQ3ZCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVJMEM7QUFDQTtBQUMxQztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw2REFBSTtBQUN2QixzQkFBc0IsNkRBQUk7QUFDMUIsa0JBQWtCLDZEQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw2REFBSSxZQUFZLDZEQUFJO0FBQ3RDLGtCQUFrQiw2REFBSSxZQUFZLDZEQUFJO0FBQ3RDLGtCQUFrQiw2REFBSSxZQUFZLDZEQUFJO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNkRBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw2REFBSTtBQUMvQixZQUFZLDZEQUFJO0FBQ2hCLGdCQUFnQiw2REFBSTtBQUNwQixnQkFBZ0IsNkRBQUk7QUFDcEIsWUFBWSw2REFBSTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw2REFBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNITztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwwRUFBMEU7QUFDaEYsTUFBTSwwRUFBMEU7QUFDaEYsTUFBTSwwRUFBMEU7QUFDaEYsTUFBTSwwRUFBMEU7QUFDaEYsTUFBTSwwRUFBMEU7QUFDaEYsTUFBTSwwRUFBMEU7QUFDaEY7QUFDQTtBQUNBO0FBQ0EsWUFBWSxjQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDeEdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvaGFuZGxlci9ldmVudEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tYXRoL01hdDQuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tYXRoL1ZlYzMuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tYXRoL1ZlYzQuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tYXRoL21hdGhVdGlscy5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21vZGVsL2NoaWNrZW4uanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tb2RlbC9mb3guanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tb2RlbC9ob2xsb3dUaGluZ3kuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tb2RlbC9waWcuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tb2RlbC9yaW5nLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3N0cnVjdHMvbm9kZS5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy91dGlscy9BbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvdXRpbHMvQ2FtZXJhLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3V0aWxzL3RleHR1cmUuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGFyZ2V0LCBcclxuICAgIHRhcmdldFJvb3QsIFxyXG4gICAgc2V0UHJvamVjdGlvblR5cGUsIFxyXG4gICAgc2V0T2JsaXF1ZVBoaSwgXHJcbiAgICBzZXRPYmxpcXVlVGhldGEsIFxyXG4gICAgc2V0VGFyZ2V0LCBcclxuICAgIGxpZ2h0RGlyZWN0aW9uLFxyXG4gICAgc2V0VGFyZ2V0Um9vdCwgXHJcbiAgICBjaGFuZ2VNb2RlbE9iamVjdCwgXHJcbiAgICBjaGFuZ2VNYXBwaW5nVGV4dHVyZX0gZnJvbSBcIi4uL2luZGV4LmpzXCJcclxuaW1wb3J0IHsgZGVnVG9SYWQsIHJhZFRvRGVnIH0gZnJvbSBcIi4uL3N0cnVjdHMvbWF0aC9tYXRoVXRpbHMuanNcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vdXRpbHMvQW5pbWF0aW9uLmpzXCI7XHJcblxyXG5jb25zdCB0cmFuc2xhdGlvblggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNsYXRpb24teC1zbGlkZXInKTtcclxuY29uc3QgdHJhbnNsYXRpb25ZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zbGF0aW9uLXktc2xpZGVyJyk7XHJcbmNvbnN0IHRyYW5zbGF0aW9uWiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2xhdGlvbi16LXNsaWRlcicpO1xyXG5jb25zdCB0cmFuc2xhdGFpb25YVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNsYXRpb24teC1zbGlkZXItdmFsdWUnKTtcclxuY29uc3QgdHJhbnNsYXRhaW9uWVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zbGF0aW9uLXktc2xpZGVyLXZhbHVlJyk7XHJcbmNvbnN0IHRyYW5zbGF0YWlvblpWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2xhdGlvbi16LXNsaWRlci12YWx1ZScpO1xyXG4vL3JvdGF0aW9uXHJcbmNvbnN0IHJvdGF0aW9uWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGlvbi14LXNsaWRlcicpO1xyXG5jb25zdCByb3RhdGlvblkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm90YXRpb24teS1zbGlkZXInKTtcclxuY29uc3Qgcm90YXRpb25aID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uLXotc2xpZGVyJyk7XHJcbmNvbnN0IHJvdGF0aW9uWFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uLXgtc2xpZGVyLXZhbHVlJyk7XHJcbmNvbnN0IHJvdGF0aW9uWVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uLXktc2xpZGVyLXZhbHVlJyk7XHJcbmNvbnN0IHJvdGF0aW9uWlZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uLXotc2xpZGVyLXZhbHVlJyk7XHJcbi8vc2NhbGF0aW9uXHJcbmNvbnN0IHNjYWxhdGlvblggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NhbGF0aW9uLXgtc2xpZGVyJyk7XHJcbmNvbnN0IHNjYWxhdGlvblkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NhbGF0aW9uLXktc2xpZGVyJyk7XHJcbmNvbnN0IHNjYWxhdGlvblogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NhbGF0aW9uLXotc2xpZGVyJyk7XHJcbmNvbnN0IHNjYWxhdGlvblhWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY2FsYXRpb24teC1zbGlkZXItdmFsdWUnKTtcclxuY29uc3Qgc2NhbGF0aW9uWVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjYWxhdGlvbi15LXNsaWRlci12YWx1ZScpO1xyXG5jb25zdCBzY2FsYXRpb25aVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NhbGF0aW9uLXotc2xpZGVyLXZhbHVlJyk7XHJcbi8vIGNvbXBvbmVudCBjb250YWluZXJcclxuY29uc3QgY29tcG9uZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBvbmVudC1jb250YWluZXInKTtcclxuLy9jYW1lcmFcclxuY29uc3Qgb3J0aG9ncmFwaGljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29ydGhvZ3JhcGhpYycpO1xyXG5jb25zdCBvYmxpcXVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29ibGlxdWUnKTtcclxuY29uc3QgcGVyc3BlY3RpdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGVyc3BlY3RpdmUnKTtcclxuLy8gY2FtZXJhIHJhZGl1c1xyXG5jb25zdCBjYW1lcmFSYWRpdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXJhZGl1cy1zbGlkZXInKTtcclxuLy8gY2FtZXJhIHJvbGwtcGl0Y2hcclxuY29uc3QgY2FtZXJhUm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcm9sbC1zbGlkZXInKTtcclxuY29uc3QgY2FtZXJhUGl0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXBpdGNoLXNsaWRlcicpO1xyXG4vLyBjYW1lcmEgdGhldGEtcGhpXHJcbmNvbnN0IGNhbWVyYVRoZXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS10aGV0YS1zbGlkZXInKTtcclxuY29uc3QgY2FtZXJhUGhpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1waGktc2xpZGVyJyk7XHJcbi8vIHNldCBvcnRob2dyYXBoaWMgYXMgZGVmYXVsdCBpbnB1dCByYWRpbyBidXR0b25cclxub3J0aG9ncmFwaGljLmNoZWNrZWQgPSB0cnVlO1xyXG5cclxuLy8gbW9kZWwgXHJcbmNvbnN0IG1vZGVsU2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGVsLXNlbGVjdGlvbicpO1xyXG5jb25zdCBtYXBwaW5nU2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcHBpbmctc2VsZWN0aW9uJyk7XHJcblxyXG4vLyBhbmltYXRpb25cclxuXHJcbi8vIHBhdXNlLCBwbGF5LCBhdXRvLCByZXZlcnNlXHJcbmNvbnN0IHBhdXNlQ29udGludWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF1c2UtY29udGludWUtYW5pbWF0aW9uJyk7XHJcbmNvbnN0IHBsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheS1hbmltYXRpb24nKTtcclxuY29uc3QgYXV0byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvLWFuaW1hdGlvbicpO1xyXG5jb25zdCByZXZlcnNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JldmVyc2UtYW5pbWF0aW9uJyk7XHJcblxyXG4vLyBuZXh0LCBwcmV2LCBmaXJzdCwgbGFzdFxyXG5jb25zdCBuZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQtYW5pbWF0aW9uJyk7XHJcbmNvbnN0IHByZXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldi1hbmltYXRpb24nKTtcclxuY29uc3QgZmlyc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlyc3QtYW5pbWF0aW9uJyk7XHJcbmNvbnN0IGxhc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFzdC1hbmltYXRpb24nKTtcclxuXHJcbi8vIGFtYmllbnQgbGlnaHRcclxuY29uc3QgcmVkQW1iaWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWQtc2xpZGVyJyk7XHJcbmNvbnN0IGdyZWVuQW1iaWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncmVlbi1zbGlkZXInKTtcclxuY29uc3QgYmx1ZUFtYmllbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmx1ZS1zbGlkZXInKTtcclxuXHJcbi8vIGxpZ2h0IHBvc2l0aW9uXHJcbmNvbnN0IGxpZ2h0WCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaWdodC14LXNsaWRlcicpO1xyXG5jb25zdCBsaWdodFkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlnaHQteS1zbGlkZXInKTtcclxuY29uc3QgbGlnaHRaID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpZ2h0LXotc2xpZGVyJyk7XHJcblxyXG4vLyBwaG9uZ1xyXG5jb25zdCBzaGluaW5lc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpbmluZXNzLXNsaWRlcicpO1xyXG5jb25zdCBzcGVjdWxhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGVjdWxhci1zbGlkZXInKTtcclxuY29uc3QgZGlmZnVzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWZmdXNlLXNsaWRlcicpO1xyXG5cclxuXHJcbi8vIGluaXRpYWxcclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRPcHRpb25Nb2RlbChtb2RlbCl7XHJcbiAgICBtb2RlbFNlbGVjdGlvbi5pbm5lckhUTUwgPSAnJztcclxuICAgIG1vZGVsLmZvckVhY2goKG9iamVjdCwgaW5kZXgpID0+IHtcclxuICAgICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gaW5kZXg7XHJcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gb2JqZWN0WzBdLm5hbWU7XHJcbiAgICAgICAgbW9kZWxTZWxlY3Rpb24uYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH0pXHJcblxyXG59XHJcblxyXG4vLyBldmVudCBsaXN0ZW5lclxyXG50cmFuc2xhdGlvblguYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgdGFyZ2V0LnRyYW5zZm9ybS50cmFuc2xhdGVbMF0gPSAoMiAqIHRyYW5zbGF0aW9uWC52YWx1ZSkgLyAxMDA7XHJcbiAgICB0cmFuc2xhdGFpb25YVmFsdWUudGV4dENvbnRlbnQgPSB0YXJnZXQudHJhbnNmb3JtLnRyYW5zbGF0ZVswXTtcclxufSk7XHJcbnRyYW5zbGF0aW9uWS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQudHJhbnNmb3JtLnRyYW5zbGF0ZVsxXSA9ICgyICogdHJhbnNsYXRpb25ZLnZhbHVlKSAvIDEwMDtcclxuICAgIHRyYW5zbGF0YWlvbllWYWx1ZS50ZXh0Q29udGVudCA9IHRhcmdldC50cmFuc2Zvcm0udHJhbnNsYXRlWzFdO1xyXG59KTtcclxudHJhbnNsYXRpb25aLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIHRhcmdldC50cmFuc2Zvcm0udHJhbnNsYXRlWzJdID0gKDIgKiB0cmFuc2xhdGlvbloudmFsdWUpIC8gMTAwO1xyXG4gICAgdHJhbnNsYXRhaW9uWlZhbHVlLnRleHRDb250ZW50ID0gdGFyZ2V0LnRyYW5zZm9ybS50cmFuc2xhdGVbMl07XHJcbn0pO1xyXG5yb3RhdGlvblguYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgdGFyZ2V0LnRyYW5zZm9ybS5yb3RhdGVbMF0gPSBkZWdUb1JhZChyb3RhdGlvblgudmFsdWUpO1xyXG4gICAgcm90YXRpb25YVmFsdWUudGV4dENvbnRlbnQgPSByb3RhdGlvblgudmFsdWU7XHJcbn0pXHJcbnJvdGF0aW9uWS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQudHJhbnNmb3JtLnJvdGF0ZVsxXSA9IGRlZ1RvUmFkKHJvdGF0aW9uWS52YWx1ZSk7XHJcbiAgICByb3RhdGlvbllWYWx1ZS50ZXh0Q29udGVudCA9IHJvdGF0aW9uWS52YWx1ZTtcclxufSlcclxucm90YXRpb25aLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIHRhcmdldC50cmFuc2Zvcm0ucm90YXRlWzJdID0gZGVnVG9SYWQocm90YXRpb25aLnZhbHVlKTtcclxuICAgIHJvdGF0aW9uWlZhbHVlLnRleHRDb250ZW50ID0gcm90YXRpb25aLnZhbHVlO1xyXG59KVxyXG5zY2FsYXRpb25YLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIHRhcmdldC50cmFuc2Zvcm0uc2NhbGVbMF0gPSAgc2NhbGF0aW9uWC52YWx1ZSAvIDIwO1xyXG4gICAgc2NhbGF0aW9uWFZhbHVlLnRleHRDb250ZW50ID0gdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVswXTtcclxufSlcclxuc2NhbGF0aW9uWS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQudHJhbnNmb3JtLnNjYWxlWzFdID0gIHNjYWxhdGlvblkudmFsdWUgLyAyMDtcclxuICAgIHNjYWxhdGlvbllWYWx1ZS50ZXh0Q29udGVudCA9IHRhcmdldC50cmFuc2Zvcm0uc2NhbGVbMV07XHJcbn0pXHJcbnNjYWxhdGlvblouYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVsyXSA9ICBzY2FsYXRpb25aLnZhbHVlIC8gMjA7XHJcbiAgICBzY2FsYXRpb25aVmFsdWUudGV4dENvbnRlbnQgPSB0YXJnZXQudHJhbnNmb3JtLnNjYWxlWzJdO1xyXG59KVxyXG5cclxuLy8gbW9kZWwgc2VsZWN0aW9uXHJcbm1vZGVsU2VsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCl7ICAgXHJcbiAgICBjb25zb2xlLmxvZyhtb2RlbFNlbGVjdGlvbi52YWx1ZSk7XHJcbiAgICBjaGFuZ2VNb2RlbE9iamVjdChtb2RlbFNlbGVjdGlvbi52YWx1ZSk7XHJcbn0pXHJcblxyXG4vLyBjYW1lcmFcclxub3J0aG9ncmFwaGljLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIHNldFByb2plY3Rpb25UeXBlKFwib3J0aG9ncmFwaGljXCIpO1xyXG59KVxyXG5cclxub2JsaXF1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBzZXRQcm9qZWN0aW9uVHlwZShcIm9ibGlxdWVcIik7XHJcbn0pXHJcblxyXG5wZXJzcGVjdGl2ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBzZXRQcm9qZWN0aW9uVHlwZShcInBlcnNwZWN0aXZlXCIpO1xyXG59KVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ29tcG9uZW50ICgpIHtcclxuICAgIGNvbXBvbmVudENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDb21wb25lbnQodHJlZUxldmVsID0gMCwgb2JqZWN0cyl7XHJcbiAgICBvYmplY3RzLmZvckVhY2goKG9iamVjdCkgPT4ge1xyXG4gICAgICAgIGxldCBuZXdDb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXHJcbiAgICAgICAgbmV3Q29tcG9uZW50LnN0eWxlID0gJ3BhZGRpbmctbGVmdDogJyArIHRyZWVMZXZlbCoxLjUgKyAnZW07JztcclxuICAgICAgICBuZXdDb21wb25lbnQuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1heC13LWZpdCBjb21wb25lbnRcIj4ke29iamVjdC5uYW1lfTwvYnV0dG9uPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgbGV0IGNyZWF0ZWRCdXR0b24gPSBuZXdDb21wb25lbnQucXVlcnlTZWxlY3RvcignLmNvbXBvbmVudCcpO1xyXG4gICAgICAgIGNyZWF0ZWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldnQpIHtcclxuICAgICAgICAgICAgc2V0VGFyZ2V0KG9iamVjdCk7XHJcbiAgICAgICAgICAgIGhhbmRsZVRyYW5zZm9ybShvYmplY3QpO1xyXG4gICAgICAgICAgICBzZXRTbGlkZXIob2JqZWN0KTtcclxuICAgICAgICAgICAgbGV0IGNvbXBvbmVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29tcG9uZW50XCIpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXBvbmVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudHNbaV0uY2xhc3NOYW1lID0gY29tcG9uZW50c1tpXS5jbGFzc05hbWUucmVwbGFjZShcIiBib3JkZXItMlwiLCBcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBldnQuY3VycmVudFRhcmdldC5jbGFzc05hbWUgKz0gXCIgYm9yZGVyLTJcIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb21wb25lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q29tcG9uZW50KTtcclxuICAgICAgICBcclxuICAgICAgICBpZihvYmplY3QuY2hpbGRyZW4ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIGRpc3BsYXlDb21wb25lbnQodHJlZUxldmVsICsgMSwgb2JqZWN0LmNoaWxkcmVuKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTbGlkZXIobm9kZSl7XHJcbiAgICByZWRBbWJpZW50LnZhbHVlID0gbm9kZS5hbWJpZW50WzBdO1xyXG4gICAgZ3JlZW5BbWJpZW50LnZhbHVlID0gbm9kZS5hbWJpZW50WzFdO1xyXG4gICAgYmx1ZUFtYmllbnQudmFsdWUgPSBub2RlLmFtYmllbnRbMl07XHJcbiAgICBzaGluaW5lc3MudmFsdWUgPSBub2RlLnNoaW5pbmVzcztcclxuICAgIHNwZWN1bGFyLnZhbHVlID0gbm9kZS5zcGVjdWxhclswXTtcclxuICAgIGRpZmZ1c2UudmFsdWUgPSBub2RlLmRpZmZ1c2VbMF07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlVHJhbnNmb3JtKG5vZGUpe1xyXG4gICAgLy8gY2hhbmdlIHRyYW5zbGF0aW9uLCByb3RhdGlvbiwgc2NhbGF0aW9uXHJcbiAgICBsZXQgW3R4LCB0eSwgdHpdID0gbm9kZS50cmFuc2Zvcm0udHJhbnNsYXRlXHJcbiAgICAvLyB0aW1lcyA1MFxyXG5cclxuICAgIGxldCBbcngsIHJ5LCByel0gPSBub2RlLnRyYW5zZm9ybS5yb3RhdGVcclxuICAgIC8vIGNoYW5nZSB3aXRoIHJhZFRvRGVnXHJcbiAgICBpZih0cnVlKXtcclxuICAgIHJ4ID0gcmFkVG9EZWcocngpO1xyXG4gICAgcnkgPSByYWRUb0RlZyhyeSk7XHJcbiAgICByeiA9IHJhZFRvRGVnKHJ6KTtcclxuICAgIH1cclxuICAgIGxldCBbc3gsIHN5LCBzel0gPSBub2RlLnRyYW5zZm9ybS5zY2FsZVxyXG4gIFxyXG4gICAgdHJhbnNsYXRpb25YLnZhbHVlID0gdHgqNTA7XHJcbiAgICB0cmFuc2xhdGlvblkudmFsdWUgPSB0eSo1MDtcclxuICAgIHRyYW5zbGF0aW9uWi52YWx1ZSA9IHR6KjUwO1xyXG4gICAgdHJhbnNsYXRhaW9uWFZhbHVlLnRleHRDb250ZW50ID0gdHg7XHJcbiAgICB0cmFuc2xhdGFpb25ZVmFsdWUudGV4dENvbnRlbnQgPSB0eTtcclxuICAgIHRyYW5zbGF0YWlvblpWYWx1ZS50ZXh0Q29udGVudCA9IHR6O1xyXG5cclxuICAgIHJvdGF0aW9uWC52YWx1ZSA9IHJ4O1xyXG4gICAgcm90YXRpb25ZLnZhbHVlID0gcnk7XHJcbiAgICByb3RhdGlvbloudmFsdWUgPSByejtcclxuICAgIHJvdGF0aW9uWFZhbHVlLnRleHRDb250ZW50ID0gcng7XHJcbiAgICByb3RhdGlvbllWYWx1ZS50ZXh0Q29udGVudCA9IHJ5O1xyXG4gICAgcm90YXRpb25aVmFsdWUudGV4dENvbnRlbnQgPSByejtcclxuXHJcbiAgICBzY2FsYXRpb25YVmFsdWUudGV4dENvbnRlbnQgPSBzeDtcclxuICAgIHNjYWxhdGlvbllWYWx1ZS50ZXh0Q29udGVudCA9IHN5O1xyXG4gICAgc2NhbGF0aW9uWlZhbHVlLnRleHRDb250ZW50ID0gc3o7XHJcbiAgICBzY2FsYXRpb25YLnZhbHVlID0gc3gqMjA7XHJcbiAgICBzY2FsYXRpb25ZLnZhbHVlID0gc3gqMjA7XHJcbiAgICBzY2FsYXRpb25aLnZhbHVlID0gc3oqMjA7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNhbWVyYVZpZXcobm9kZSkge1xyXG4gICAgbGV0IGVwc2lsb24gPSAwLjAwMTtcclxuICAgIFxyXG4gICAgLy9yYWRpdXMsIHJvbGwsIHBpdGNoXHJcbiAgICBsZXQgcmFkaXVzID0gcGFyc2VGbG9hdChjYW1lcmFSYWRpdXMudmFsdWUpLzEwO1xyXG4gICAgbGV0IHJvbGwgPSBkZWdUb1JhZChwYXJzZUZsb2F0KGNhbWVyYVJvbGwudmFsdWUpKTtcclxuICAgIGxldCBwaXRjaCA9IGRlZ1RvUmFkKHBhcnNlRmxvYXQoY2FtZXJhUGl0Y2gudmFsdWUpKTtcclxuICAgIG5vZGUudmlld01hdHJpeC5jYW1lcmEgPSBbXHJcbiAgICAgICAgcm9sbCxcclxuICAgICAgICBwaXRjaCxcclxuICAgICAgICByYWRpdXMgPT0gMCA/IGVwc2lsb24gOiByYWRpdXMsICBcclxuICAgIF07XHJcbiAgICBmb3IobGV0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pe1xyXG4gICAgICAgIGhhbmRsZUNhbWVyYVZpZXcoY2hpbGQpO1xyXG4gICAgfVxyXG59XHJcbmNhbWVyYVJhZGl1cy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgdmFsID0gcGFyc2VGbG9hdChjYW1lcmFSYWRpdXMudmFsdWUpO1xyXG4gICAgdmFsIC89IDEwO1xyXG4gICAgXHJcbiAgICBoYW5kbGVDYW1lcmFWaWV3KHRhcmdldFJvb3QpO1xyXG4gICAgLy8gdXBkYXRlIGNhbWVyYSByYWRpdXMgdmFsdWVcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcmFkaXVzLXNsaWRlci12YWx1ZScpLnRleHRDb250ZW50ID0gdmFsO1xyXG59KVxyXG5jYW1lcmFSb2xsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIFxyXG4gICAgaGFuZGxlQ2FtZXJhVmlldyh0YXJnZXRSb290KVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1yb2xsLXNsaWRlci12YWx1ZScpLnRleHRDb250ZW50ID0gY2FtZXJhUm9sbC52YWx1ZTtcclxufSlcclxuY2FtZXJhUGl0Y2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIGhhbmRsZUNhbWVyYVZpZXcodGFyZ2V0Um9vdClcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcGl0Y2gtc2xpZGVyLXZhbHVlJykudGV4dENvbnRlbnQgPSBjYW1lcmFQaXRjaC52YWx1ZTtcclxufSlcclxuXHJcbi8vdGhldGEsIHBoaVxyXG5jYW1lcmFUaGV0YS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgdGhldGEgPSBkZWdUb1JhZChwYXJzZUZsb2F0KGNhbWVyYVRoZXRhLnZhbHVlKSlcclxuICAgIHNldE9ibGlxdWVUaGV0YSh0aGV0YSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXRoZXRhLXNsaWRlci12YWx1ZScpLnRleHRDb250ZW50ID0gY2FtZXJhVGhldGEudmFsdWU7XHJcbn0pXHJcblxyXG5jYW1lcmFQaGkuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgbGV0IHBoaSA9IGRlZ1RvUmFkKHBhcnNlRmxvYXQoY2FtZXJhUGhpLnZhbHVlKSlcclxuICAgIHNldE9ibGlxdWVQaGkocGhpKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcGhpLXNsaWRlci12YWx1ZScpLnRleHRDb250ZW50ID0gY2FtZXJhUGhpLnZhbHVlO1xyXG59KVxyXG5cclxudmFyIHN0YXRlID0ge1xyXG4gICAgb2JqZWN0czogW11cclxufTtcclxuXHJcbi8vIHRleHR1cmUgc2VsZWN0aW9uXHJcbm1hcHBpbmdTZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgY29uc29sZS5sb2cobWFwcGluZ1NlbGVjdGlvbi52YWx1ZSlcclxuICAgIGNoYW5nZU1hcHBpbmdUZXh0dXJlKHN0YXRlLm9iamVjdHMsIG1hcHBpbmdTZWxlY3Rpb24udmFsdWUpO1xyXG59KTtcclxuXHJcbi8vIGFuaW1hdGlvblxyXG5wYXVzZUNvbnRpbnVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGlmKHRhcmdldFJvb3QuYW5pbWF0aW9uLmlzQW5pbWF0ZSl7XHJcbiAgICAgICAgLy8gY2hhbmdlIHRvIGNvbnRpbnVlXHJcbiAgICAgICAgcGF1c2VDb250aW51ZS50ZXh0Q29udGVudCA9IFwiQ29udGludWVcIjtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgcGF1c2VDb250aW51ZS50ZXh0Q29udGVudCA9IFwiUGF1c2VcIjtcclxuICAgIH1cclxuICAgIEFuaW1hdGlvbi5wYXVzZUNvbnRpbnVlQW5pbWF0aW9uKHRhcmdldFJvb3QpO1xyXG4gICAgXHJcbn0pXHJcblxyXG5wbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIHBhdXNlQ29udGludWUudGV4dENvbnRlbnQgPSBcIlBhdXNlXCI7XHJcbiAgICBBbmltYXRpb24ucGxheUFuaW1hdGlvbih0YXJnZXRSb290KTtcclxufSlcclxuXHJcblxyXG5hdXRvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIC8vIGNoYW5nZSB0byBjb250aW51ZVxyXG4gICAgYXV0by50ZXh0Q29udGVudCA9ICF0YXJnZXRSb290LmFuaW1hdGlvbi5pc0F1dG8gPyBcIlN0b3AgQXV0b1wiIDogXCJBdXRvXCI7XHJcbiAgICBBbmltYXRpb24uc2V0QXV0byh0YXJnZXRSb290KTtcclxufSlcclxuXHJcbnJldmVyc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgcmV2ZXJzZS50ZXh0Q29udGVudCA9ICF0YXJnZXRSb290LmFuaW1hdGlvbi5pc1JldmVyc2UgPyBcIlN0b3AgUmV2ZXJzZVwiIDogXCJSZXZlcnNlXCI7XHJcbiAgICBBbmltYXRpb24ucmV2ZXJzZUFuaW1hdGlvbih0YXJnZXRSb290KTtcclxufSlcclxuXHJcbi8vIG5leHQsIHByZXYsIGZpcnN0LCBsYXN0XHJcbm5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgQW5pbWF0aW9uLm5leHRGcmFtZSh0YXJnZXRSb290KTtcclxufSlcclxuXHJcbnByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgQW5pbWF0aW9uLnByZXZGcmFtZSh0YXJnZXRSb290KTtcclxufSlcclxuXHJcbmZpcnN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIEFuaW1hdGlvbi5maXJzdEZyYW1lKHRhcmdldFJvb3QpO1xyXG59KVxyXG5cclxubGFzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBBbmltYXRpb24ubGFzdEZyYW1lKHRhcmdldFJvb3QpO1xyXG59KVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQW1iaWVudENvbG9yKG5vZGUpe1xyXG4gICAgbm9kZS5hbWJpZW50WzBdID0gcmVkQW1iaWVudC52YWx1ZTtcclxuICAgIG5vZGUuYW1iaWVudFsxXSA9IGdyZWVuQW1iaWVudC52YWx1ZTtcclxuICAgIG5vZGUuYW1iaWVudFsyXSA9IGJsdWVBbWJpZW50LnZhbHVlO1xyXG4gICAgZm9yKGxldCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKXtcclxuICAgICAgICBoYW5kbGVBbWJpZW50Q29sb3IoY2hpbGQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5yZWRBbWJpZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGhhbmRsZUFtYmllbnRDb2xvcih0YXJnZXQpO1xyXG59KVxyXG5cclxuZ3JlZW5BbWJpZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGhhbmRsZUFtYmllbnRDb2xvcih0YXJnZXQpO1xyXG59KVxyXG5cclxuYmx1ZUFtYmllbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgaGFuZGxlQW1iaWVudENvbG9yKHRhcmdldCk7XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBoYW5kbGVQaG9uZyhub2RlKXtcclxuICAgIG5vZGUuc2hpbmluZXNzID0gMTAwIC0gc2hpbmluZXNzLnZhbHVlO1xyXG4gICAgbm9kZS5zcGVjdWxhclswXSA9IHNwZWN1bGFyLnZhbHVlO1xyXG4gICAgbm9kZS5zcGVjdWxhclsxXSA9IHNwZWN1bGFyLnZhbHVlO1xyXG4gICAgbm9kZS5zcGVjdWxhclsyXSA9IHNwZWN1bGFyLnZhbHVlO1xyXG4gICAgbm9kZS5kaWZmdXNlWzBdID0gZGlmZnVzZS52YWx1ZTtcclxuICAgIG5vZGUuZGlmZnVzZVsxXSA9IGRpZmZ1c2UudmFsdWU7XHJcbiAgICBub2RlLmRpZmZ1c2VbMl0gPSBkaWZmdXNlLnZhbHVlO1xyXG4gICAgZm9yKGxldCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKXtcclxuICAgICAgICBoYW5kbGVQaG9uZyhjaGlsZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnNoaW5pbmVzcy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBoYW5kbGVQaG9uZyh0YXJnZXQpO1xyXG59KTtcclxuXHJcbnNwZWN1bGFyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGhhbmRsZVBob25nKHRhcmdldCk7XHJcbn0pO1xyXG5cclxuZGlmZnVzZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBoYW5kbGVQaG9uZyh0YXJnZXQpO1xyXG59KTtcclxuXHJcbmxpZ2h0WC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBsaWdodERpcmVjdGlvblswXSA9IHBhcnNlRmxvYXQobGlnaHRYLnZhbHVlKTtcclxufSlcclxuXHJcbmxpZ2h0WS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBsaWdodERpcmVjdGlvblsxXSA9IHBhcnNlRmxvYXQobGlnaHRZLnZhbHVlKTtcclxufSlcclxuXHJcbmxpZ2h0Wi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBsaWdodERpcmVjdGlvblsyXSA9IHBhcnNlRmxvYXQobGlnaHRaLnZhbHVlKTtcclxufSlcclxuIiwiaW1wb3J0IHBpZ01vZGVsIGZyb20gXCIuL3N0cnVjdHMvbW9kZWwvcGlnLmpzXCI7XHJcbmltcG9ydCBjaGlja2VuTW9kZWwgZnJvbSBcIi4vc3RydWN0cy9tb2RlbC9jaGlja2VuLmpzXCI7XHJcbmltcG9ydCBmb3hNb2RlbCBmcm9tIFwiLi9zdHJ1Y3RzL21vZGVsL2ZveC5qc1wiO1xyXG5pbXBvcnQgTWF0NCBmcm9tIFwiLi9zdHJ1Y3RzL21hdGgvTWF0NC5qc1wiO1xyXG5pbXBvcnQgVmVjMyBmcm9tIFwiLi9zdHJ1Y3RzL21hdGgvVmVjMy5qc1wiO1xyXG5pbXBvcnQgVmVjNCBmcm9tIFwiLi9zdHJ1Y3RzL21hdGgvVmVjNC5qc1wiO1xyXG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuL3V0aWxzL0NhbWVyYS5qc1wiO1xyXG5pbXBvcnQgeyBkaXNwbGF5Q29tcG9uZW50LCBjbGVhckNvbXBvbmVudCwgaW5pdE9wdGlvbk1vZGVsLCBoYW5kbGVUcmFuc2Zvcm0gfSBmcm9tIFwiLi9oYW5kbGVyL2V2ZW50SGFuZGxlci5qc1wiO1xyXG5pbXBvcnQgaG9sbG93TW9kZWwgZnJvbSBcIi4vc3RydWN0cy9tb2RlbC9ob2xsb3dUaGluZ3kuanNcIjtcclxuaW1wb3J0IGhvbGxvd1JpbmdNb2RlbCBmcm9tIFwiLi9zdHJ1Y3RzL21vZGVsL3JpbmcuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlUGFwZXJUZXh0dXJlLCBjcmVhdGVFbnZpcm9ubWVudFRleHR1cmUsIGNyZWF0ZUJ1bXBUZXh0dXJlIH0gZnJvbSBcIi4vdXRpbHMvdGV4dHVyZS5qc1wiXHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4vdXRpbHMvQW5pbWF0aW9uLmpzXCI7XHJcblxyXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdsLWNhbnZhc1wiKTtcclxuY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xyXG5cclxuXHJcbmNvbnN0IHZlcnRleFNoYWRlclNvdXJjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVydGV4LXNoYWRlci0zZFwiKT8udGV4dENvbnRlbnQ7XHJcbmNvbnN0IGZyYWdtZW50U2hhZGVyU291cmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmFnbWVudC1zaGFkZXItM2RcIik/LnRleHRDb250ZW50O1xyXG5cclxuLy8gc3RhdGVcclxudmFyIG1vZGVsID0gW3BpZ01vZGVsLCBjaGlja2VuTW9kZWwsIGZveE1vZGVsLCBob2xsb3dNb2RlbCwgaG9sbG93UmluZ01vZGVsXTtcclxudmFyIG9iamVjdHM7XHJcbmV4cG9ydCB2YXIgdGFyZ2V0O1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0VGFyZ2V0KHZhbHVlKSB7XHJcbiAgdGFyZ2V0ID0gdmFsdWU7XHJcbn1cclxuZXhwb3J0IHZhciB0YXJnZXRSb290O1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0VGFyZ2V0Um9vdCh2YWx1ZSkge1xyXG4gIHRhcmdldFJvb3QgPSB2YWx1ZTtcclxufVxyXG52YXIgbGlnaHRpbmc7XHJcbmV4cG9ydCB2YXIgbGlnaHREaXJlY3Rpb247XHJcbnZhciB0ZXh0dXJlO1xyXG52YXIgcHJvamVjdGlvbl90eXBlO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFByb2plY3Rpb25UeXBlKG5ld1Byb2plY3Rpb24pIHtcclxuICBwcm9qZWN0aW9uX3R5cGUgPSBuZXdQcm9qZWN0aW9uO1xyXG59XHJcbnZhciBmYWN0b3I7XHJcbnZhciBvYmxpcXVlX3RoZXRhO1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0T2JsaXF1ZVRoZXRhKG5ld1RoZXRhKSB7XHJcbiAgb2JsaXF1ZV90aGV0YSA9IG5ld1RoZXRhO1xyXG59XHJcbnZhciBvYmxpcXVlX3BoaTtcclxuZXhwb3J0IGZ1bmN0aW9uIHNldE9ibGlxdWVQaGkobmV3UGhpKSB7XHJcbiAgb2JsaXF1ZV9waGkgPSBuZXdQaGk7XHJcbn1cclxudmFyIG5vcm1hbGl6ZUxpZ2h0O1xyXG52YXIgd29ybGRWaWV3UHJvamVjdGlvbk1hdHJpeDtcclxuXHJcbi8vIGFuaW1hdGlvblxyXG52YXIgdF9hbmltYXRpb24gPSAwO1xyXG52YXIgZnBzX3RpbWUgPSAwLjE1O1xyXG5cclxuaW5pdFN0YXRlKCk7XHJcblxyXG5mdW5jdGlvbiBpbml0U3RhdGUoKSB7XHJcbiAgICBvYmplY3RzID0gbW9kZWxbMF07XHJcbiAgICBmb2N1cyA9IG51bGw7XHJcbiAgICBsaWdodGluZyA9IGZhbHNlO1xyXG4gICAgbGlnaHREaXJlY3Rpb24gPSBbMC4wLCAwLjAsIDEuMF1cclxuICAgIHRleHR1cmUgPSBcIm5vbmVcIjtcclxuICAgIHByb2plY3Rpb25fdHlwZSA9IFwib3J0aG9ncmFwaGljXCI7XHJcbiAgICBmYWN0b3IgPSAwLjA7XHJcbiAgICBvYmxpcXVlX3RoZXRhID0gOTAuMDtcclxuICAgIG9ibGlxdWVfcGhpID0gOTAuMDtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBtb2RlbC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgc2V0RGVmYXVsdFJvdGF0aW9uKG1vZGVsW2ldKTtcclxuICAgIH1cclxuICAgIGRpc3BsYXlDb21wb25lbnQoMCwgb2JqZWN0cyk7XHJcbiAgICBpbml0T3B0aW9uTW9kZWwobW9kZWwpO1xyXG4gICAgaGFuZGxlVHJhbnNmb3JtKG9iamVjdHNbMF0pXHJcblxyXG59XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgaWYoIWdsKXtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXZWJHTCBub3Qgc3VwcG9ydGVkXCIpO1xyXG4gICAgfVxyXG4gICAgdGFyZ2V0ID0gb2JqZWN0c1swXTtcclxuICAgIHRhcmdldFJvb3QgPSB0YXJnZXQ7XHJcblxyXG5cclxuICAgIHJlbmRlcigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREZWZhdWx0U3RhdGUob2JqZWN0cykge1xyXG4gICAgb2JqZWN0cy5mb3JFYWNoKG9iamVjdCA9PiB7XHJcbiAgICAgICAgaWYgKCFvYmplY3QubW9kZWwuY29sb3JzKSB7XHJcbiAgICAgICAgICAgIGlmICghb2JqZWN0LnBpY2tlZENvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QubW9kZWwuY29sb3JzID0gZ2VuZXJhdGVDb2xvcnMob2JqZWN0Lm1vZGVsLnZlcnRpY2VzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5tb2RlbC5jb2xvcnMgPSBnZW5lcmF0ZUNvbG9ycyhcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QubW9kZWwudmVydGljZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnBpY2tlZENvbG9yXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBpZiAoIW9iamVjdC5wcm9ncmFtICYmICFsaWdodGluZykge1xyXG4gICAgICAgICAgICBvYmplY3QucHJvZ3JhbSA9IGNyZWF0ZVNoYWRlclByb2dyYW0oXHJcbiAgICAgICAgICAgICAgICBnbCxcclxuICAgICAgICAgICAgICAgIHZlcnRleFNoYWRlclNvdXJjZSxcclxuICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAvLyAgIGlmIChvYmplY3QuYW5pbWF0aW9uLmlzT2JqZWN0QW5pbWF0ZSAmJiBvYmplY3QuYW5pbWF0aW9uLmFuaW1hdGUpIHtcclxuICAgICAgICAvLyAgICAgb2JqZWN0LnRyYW5zZm9ybSA9IG9iamVjdC5hbmltYXRpb24uYW5pbWF0ZVtjb3VudGVyICUgZnBzXTtcclxuICAgICAgICAvLyAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAvLyBvYmplY3QudHJhbnNmb3JtID0gb2JqZWN0LmFuaW1hdGlvbi5hbmltYXRlW2NvdW50ZXIgJSBmcHNdO1xyXG4gICAgICAgIG9iamVjdC5sb2NhbE1hdHJpeCA9IHNldFRyYW5zZm9ybShvYmplY3QpO1xyXG4gICAgICAgIGlmIChvYmplY3QuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzZXREZWZhdWx0U3RhdGUob2JqZWN0LmNoaWxkcmVuKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRUcmFuc2Zvcm0ob2JqZWN0KSB7XHJcbiAgICAvKiBTZXR1cCB0cmFuc2Zvcm0gbWF0cml4ICovXHJcblxyXG4gICAgdmFyIHRyYW5zZm9ybU1hdHJpeCA9IE1hdDQudHJhbnNsYXRlKFxyXG4gICAgICBvYmplY3QudHJhbnNmb3JtLnRyYW5zbGF0ZVswXSxcclxuICAgICAgb2JqZWN0LnRyYW5zZm9ybS50cmFuc2xhdGVbMV0sXHJcbiAgICAgIG9iamVjdC50cmFuc2Zvcm0udHJhbnNsYXRlWzJdXHJcbiAgICApO1xyXG5cclxuICAgIGxldCBfY2VudGVyID0gb2JqZWN0Lm1vZGVsLmNlbnRlclxyXG4gICAgaWYoX2NlbnRlcil7XHJcbiAgICAgIHRyYW5zZm9ybU1hdHJpeCA9IE1hdDQubXVsdGlwbHkoXHJcbiAgICAgICAgdHJhbnNmb3JtTWF0cml4LFxyXG4gICAgICAgIE1hdDQudHJhbnNsYXRlKF9jZW50ZXJbMF0sIF9jZW50ZXJbMV0sIF9jZW50ZXJbMl0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRyYW5zZm9ybU1hdHJpeCA9IE1hdDQubXVsdGlwbHkoXHJcbiAgICAgIHRyYW5zZm9ybU1hdHJpeCxcclxuICAgICAgTWF0NC5yb3RhdGVYKG9iamVjdC50cmFuc2Zvcm0ucm90YXRlWzBdKVxyXG4gICAgKTtcclxuICBcclxuICAgIHRyYW5zZm9ybU1hdHJpeCA9IE1hdDQubXVsdGlwbHkoXHJcbiAgICAgIHRyYW5zZm9ybU1hdHJpeCxcclxuICAgICAgTWF0NC5yb3RhdGVZKG9iamVjdC50cmFuc2Zvcm0ucm90YXRlWzFdKVxyXG4gICAgKTtcclxuICBcclxuICAgIHRyYW5zZm9ybU1hdHJpeCA9IE1hdDQubXVsdGlwbHkoXHJcbiAgICAgIHRyYW5zZm9ybU1hdHJpeCxcclxuICAgICAgTWF0NC5yb3RhdGVaKG9iamVjdC50cmFuc2Zvcm0ucm90YXRlWzJdKVxyXG4gICAgKTtcclxuXHJcbiAgICBpZihfY2VudGVyKXtcclxuICAgICAgdHJhbnNmb3JtTWF0cml4ID0gTWF0NC5tdWx0aXBseShcclxuICAgICAgICB0cmFuc2Zvcm1NYXRyaXgsXHJcbiAgICAgICAgTWF0NC50cmFuc2xhdGUoLV9jZW50ZXJbMF0sIC1fY2VudGVyWzFdLCAtX2NlbnRlclsyXSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICBcclxuICAgIHRyYW5zZm9ybU1hdHJpeCA9IE1hdDQubXVsdGlwbHkoXHJcbiAgICAgIHRyYW5zZm9ybU1hdHJpeCxcclxuICAgICAgTWF0NC5zY2FsZShcclxuICAgICAgICBvYmplY3QudHJhbnNmb3JtLnNjYWxlWzBdLFxyXG4gICAgICAgIG9iamVjdC50cmFuc2Zvcm0uc2NhbGVbMV0sXHJcbiAgICAgICAgb2JqZWN0LnRyYW5zZm9ybS5zY2FsZVsyXVxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIFxyXG4gICAgcmV0dXJuIHRyYW5zZm9ybU1hdHJpeDtcclxuICB9XHJcblxyXG5mdW5jdGlvbiBzZXREZWZhdWx0Um90YXRpb24ob2JqZWN0cykge1xyXG4gICAgZm9yKGxldCBvYmplY3Qgb2Ygb2JqZWN0cyl7XHJcbiAgICAgICAgb2JqZWN0LnRyYW5zZm9ybS5yb3RhdGUgPSBvYmplY3QudHJhbnNmb3JtLnJvdGF0ZS5tYXAoKHZhbCkgPT4gZGVnVG9SYWQodmFsKSk7XHJcbiAgICAgICAgaWYob2JqZWN0LmNoaWxkcmVuLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBzZXREZWZhdWx0Um90YXRpb24ob2JqZWN0LmNoaWxkcmVuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJMb29wKG9iamVjdHMpIHtcclxuICAgIG9iamVjdHMuZm9yRWFjaChvYmplY3QgPT4ge1xyXG4gICAgICAgIGdsLnVzZVByb2dyYW0ob2JqZWN0LnByb2dyYW0pO1xyXG4gICAgICAgIHZhciBtb2RlbE1hdHJpeCA9IG9iamVjdC5nZXRXb3JsZE1hdHJpeCgpO1xyXG5cclxuICAgICAgICBvYmplY3Qud29ybGRNYXRyaXggPSBzZXRQcm9qZWN0aW9uTWF0cml4KG9iamVjdC53b3JsZE1hdHJpeCwgb2JqZWN0KVxyXG5cclxuXHJcbiAgICAgICAgdmFyIGFfcG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KG9iamVjdC5tb2RlbC52ZXJ0aWNlcy5mbGF0KDEpKTtcclxuICAgICAgICB2YXIgYV9ub3JtYWwgPSBuZXcgRmxvYXQzMkFycmF5KG9iamVjdC5tb2RlbC5ub3JtYWxzLmZsYXQoMSkpO1xyXG4gICAgICAgIHZhciBhX2NvbG9yID0gbmV3IEZsb2F0MzJBcnJheShvYmplY3QucGlja2VkQ29sb3IuZmxhdCgxKSk7XHJcbiAgICAgICAgdmFyIGFfdGV4dHVyZSA9IG5ldyBGbG9hdDMyQXJyYXkob2JqZWN0Lm1vZGVsLnRleENvb3JkKTtcclxuICAgICAgICB2YXIgYV90YW5nZW50ID0gbmV3IEZsb2F0MzJBcnJheShvYmplY3QubW9kZWwudGFuZ2VudHMuZmxhdCgxKSk7XHJcbiAgICAgICAgdmFyIGFfYml0YW5nZW50ID0gbmV3IEZsb2F0MzJBcnJheShvYmplY3QubW9kZWwuYml0YW5nZW50cy5mbGF0KDEpKTtcclxuXHJcbiAgICAgICAgc2V0QXR0cihnbCwgb2JqZWN0LnByb2dyYW0sIGFfcG9zaXRpb24sIGFfbm9ybWFsLCBhX2NvbG9yLCBhX3RleHR1cmUsIGFfdGFuZ2VudCwgYV9iaXRhbmdlbnQpO1xyXG5cclxuICAgICAgICAvLyBjb25zdCBkaWZmdXNlID0gWzEsIDEsIDFdO1xyXG4gICAgICAgIC8vIGNvbnN0IHNwZWN1bGFyID0gWzAsIDAsIDBdO1xyXG4gICAgICAgIC8vIGNvbnN0IGFtYmllbnQgPSBbMSwgMSAsMV1cclxuICAgICAgICAvLyBjb25zdCBzaGluaW5lc3MgPSAxMDA7XHJcblxyXG4gICAgICAgIHZhciB1bmlmb3JtcyA9IHtcclxuICAgICAgICAgICAgdVdvcmxkVmlld1Byb2plY3Rpb246IG9iamVjdC53b3JsZE1hdHJpeCxcclxuICAgICAgICAgICAgdVdvcmxkSW52ZXJzZVRyYW5zcG9zZTogb2JqZWN0LndvcmxkSW52ZXJzZU1hdHJpeCxcclxuICAgICAgICAgICAgdVJldmVyc2VMaWdodERpcmVjdGlvbjogbm9ybWFsaXplTGlnaHQsXHJcbiAgICAgICAgICAgIHVDb2xvcjogb2JqZWN0LnBpY2tlZENvbG9yLmNvbmNhdCgxLjApLFxyXG4gICAgICAgICAgICB1TW9kZWxNYXRyaXg6IG1vZGVsTWF0cml4LFxyXG4gICAgICAgICAgICB1QW1iaWVudENvbG9yOiBvYmplY3QuYW1iaWVudCxcclxuICAgICAgICAgICAgdURpZmZ1c2VDb2xvcjogb2JqZWN0LmRpZmZ1c2UsXHJcbiAgICAgICAgICAgIHVTcGVjdWxhckNvbG9yOiBvYmplY3Quc3BlY3VsYXIsXHJcbiAgICAgICAgICAgIHVTaGluaW5lc3M6IG9iamVjdC5zaGluaW5lc3MsXHJcbiAgICAgICAgICAgIHVMaWdodFBvczogbm9ybWFsaXplTGlnaHQsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRVbmlmb3JtcyhnbCwgb2JqZWN0LnByb2dyYW0sIHVuaWZvcm1zKTtcclxuXHJcbiAgICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRVMsIDAsIG9iamVjdC5tb2RlbC52ZXJ0aWNlcy5sZW5ndGgpO1xyXG4gICAgICAgIGlmIChvYmplY3QuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZW5kZXJMb29wKG9iamVjdC5jaGlsZHJlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbndpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDEpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH0pKCk7XHJcblxyXG5cclxuZnVuY3Rpb24gcmVuZGVyKG5vdykge1xyXG4gICAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcclxuICAgIGdsLmNsZWFyQ29sb3IoMC44LCAwLjgsIDAuOCwgMS4wKTtcclxuICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcclxuXHJcbiAgICBnbC5lbmFibGUoZ2wuQ1VMTF9GQUNFKTtcclxuICAgIGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcclxuXHJcbiAgICBzZXREZWZhdWx0U3RhdGUob2JqZWN0cyk7XHJcbiAgICAvLyBkZWx0YSB0aW1lXHJcbiAgICBpZighbm93KSBub3cgPSAwO1xyXG4gICAgaWYodF9hbmltYXRpb24gPT09IDApIHRfYW5pbWF0aW9uID0gbm93O1xyXG5cclxuICAgIGlmKChub3cgLSB0X2FuaW1hdGlvbikgPj0gZnBzX3RpbWUpe1xyXG4gICAgICB0X2FuaW1hdGlvbiA9IG5vdztcclxuICAgICAgbGV0IGRlbHRhVGltZSA9IG5vdyAtIHRfYW5pbWF0aW9uO1xyXG4gICAgICBBbmltYXRpb24uYW5pbWF0ZSh0YXJnZXRSb290LCBkZWx0YVRpbWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvYmplY3RzWzBdLnNldFdvcmxkTXR4KG51bGwpO1xyXG5cclxuICAgIG5vcm1hbGl6ZUxpZ2h0ID0gVmVjMy51bml0VmVjdG9yKFZlYzMuZnJvbUFycmF5KGxpZ2h0RGlyZWN0aW9uKSkuYXNBcnJheSgpXHJcbiAgICByZW5kZXJMb29wKG9iamVjdHMpO1xyXG4gICAgXHJcbiAgd2luZG93LnJlcXVlc3RBbmltRnJhbWUocmVuZGVyKTtcclxuICAgIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0UHJvamVjdGlvbk1hdHJpeChtYXRyaXgsIG9iamVjdCkge1xyXG4gICAgLy8gY29uc3QgY2FtZXJhID0gc2V0Q2FtZXJhKG9iamVjdCk7XHJcbiAgICBjb25zdCBwcm9qZWN0aW9uVmlldyA9IENhbWVyYS5wcm9qZWN0aW9uTWF0cml4KHByb2plY3Rpb25fdHlwZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWdUb1JhZCg0NSksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbnZhcy53aWR0aCAvIGNhbnZhcy5oZWlnaHQpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC52aWV3TWF0cml4Lm5lYXIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnZpZXdNYXRyaXguZmFyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JsaXF1ZV90aGV0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ibGlxdWVfcGhpKVxyXG4gICAgY29uc3Qgdmlld01hdHJpeCA9IENhbWVyYS52aWV3TWF0cml4KG9iamVjdC52aWV3TWF0cml4LmNhbWVyYSwgb2JqZWN0LnZpZXdNYXRyaXgubG9va0F0LCBvYmplY3Qudmlld01hdHJpeC51cCk7XHJcbiAgICB2YXIgdmlld1Byb2plY3Rpb25NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KHByb2plY3Rpb25WaWV3LCB2aWV3TWF0cml4KTtcclxuICAgIGlmIChmYWN0b3IgPCAwLjAxKSB7XHJcbiAgICAgICAgZmFjdG9yID0gMC4wMTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJvamVjdGlvbl90eXBlID09PSBcInBlcnNwZWN0aXZlXCIpIHtcclxuICAgICAgICB2aWV3UHJvamVjdGlvbk1hdHJpeCA9IE1hdDQubXVsdGlwbHkoXHJcbiAgICAgICAgICAgIENhbWVyYS5tYWtlWlRvV01hdHJpeChmYWN0b3IpLFxyXG4gICAgICAgICAgICB2aWV3UHJvamVjdGlvbk1hdHJpeCxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHdvcmxkVmlld1Byb2plY3Rpb25NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KHZpZXdQcm9qZWN0aW9uTWF0cml4LCBtYXRyaXgpO1xyXG5cclxuICAgIHJldHVybiB3b3JsZFZpZXdQcm9qZWN0aW9uTWF0cml4O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZU1vZGVsT2JqZWN0IChpbmRleCkge1xyXG4gICAgb2JqZWN0cyA9IG1vZGVsW2luZGV4XTtcclxuICAgIGNvbnNvbGUubG9nKG9iamVjdHNbMF0pXHJcbiAgICBzZXRUYXJnZXQob2JqZWN0c1swXSk7XHJcbiAgICBzZXRUYXJnZXRSb290KG9iamVjdHNbMF0pO1xyXG4gICAgY2xlYXJDb21wb25lbnQoKTtcclxuICAgIGRpc3BsYXlDb21wb25lbnQoMCwgb2JqZWN0cyk7XHJcbiAgICBoYW5kbGVUcmFuc2Zvcm0ob2JqZWN0c1swXSk7XHJcbiAgICByZW5kZXIoKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VNYXBwaW5nVGV4dHVyZShvYmplY3RzLCB0ZXh0dXJlVHlwZSkge1xyXG4gIG9iamVjdHMuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICBpZiAodGV4dHVyZVR5cGUgPT09IFwiMFwiKSB7XHJcbiAgICAgIG9iamVjdC5wcm9ncmFtID0gY3JlYXRlU2hhZGVyUHJvZ3JhbShcclxuICAgICAgICBnbCxcclxuICAgICAgICB2ZXJ0ZXhfc2hhZGVyXzNkLFxyXG4gICAgICAgIGZyYWdtZW50X3NoYWRlcl8zZF9ub19saWdodGluZ1xyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIGlmICh0ZXh0dXJlVHlwZSA9PT0gXCIxXCIpIHtcclxuICAgICAgY3JlYXRlUGFwZXJUZXh0dXJlKGdsKTtcclxuICAgICAgb2JqZWN0LnByb2dyYW0gPSBjcmVhdGVTaGFkZXJQcm9ncmFtKFxyXG4gICAgICAgIGdsLFxyXG4gICAgICAgIHZlcnRleF9zaGFkZXJfM2QsXHJcbiAgICAgICAgZnJhZ21lbnRfc2hhZGVyX3RleHR1cmVcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAodGV4dHVyZVR5cGUgPT09IFwiMlwiKSB7XHJcbiAgICAgIGNyZWF0ZUVudmlyb25tZW50VGV4dHVyZShnbCk7XHJcbiAgICAgIG9iamVjdC5wcm9ncmFtID0gY3JlYXRlU2hhZGVyUHJvZ3JhbShcclxuICAgICAgICBnbCxcclxuICAgICAgICB2ZXJ0ZXhfc2hhZGVyXzNkLFxyXG4gICAgICAgIGZyYWdtZW50X3NoYWRlcl9lbnZpcm9ubWVudFxyXG4gICAgICApXHJcbiAgICB9IGVsc2UgaWYgKHRleHR1cmVUeXBlID09PSBcIjNcIikge1xyXG4gICAgICBjcmVhdGVCdW1wVGV4dHVyZShnbCk7XHJcbiAgICAgIG9iamVjdC5wcm9ncmFtID0gY3JlYXRlU2hhZGVyUHJvZ3JhbShcclxuICAgICAgICBnbCxcclxuICAgICAgICB2ZXJ0ZXhfc2hhZGVyXzNkLFxyXG4gICAgICAgIGZyYWdtZW50X3NoYWRlcl9idW1wXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAob2JqZWN0LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgY2hhbmdlTWFwcGluZ1RleHR1cmUob2JqZWN0LmNoaWxkcmVuLCB0ZXh0dXJlVHlwZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IFZlYzQgZnJvbSBcIi4vVmVjNC5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXQ0e1xyXG4gICAgc3RhdGljIGdldEVtcHR5KCl7XHJcbiAgICAgICAgcmV0dXJuIFswLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAwXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRJZGVudGl0eSgpe1xyXG4gICAgICAgIHJldHVybiBbMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMV07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBnZXRUcmFuc2xhdGlvbih4LCB5LCB6KXtcclxuICAgICAgICByZXR1cm4gWzEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgICAgIHgsIHksIHosIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRTY2FsZSh4LCB5LCB6KXtcclxuICAgICAgICByZXR1cm4gW3gsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCB5LCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgeiwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRSb3RhdGlvblgodGhldGEpe1xyXG4gICAgICAgIHJldHVybiBbMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIE1hdGguY29zKHRoZXRhKSwgLU1hdGguc2luKHRoZXRhKSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIE1hdGguc2luKHRoZXRhKSwgTWF0aC5jb3ModGhldGEpLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMV07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFJvdGF0aW9uWSh0aGV0YSl7XHJcbiAgICAgICAgcmV0dXJuIFtNYXRoLmNvcyh0aGV0YSksIDAsIE1hdGguc2luKHRoZXRhKSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAtTWF0aC5zaW4odGhldGEpLCAwLCBNYXRoLmNvcyh0aGV0YSksIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAxXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Um90YXRpb25aKHRoZXRhKXtcclxuICAgICAgICByZXR1cm4gW01hdGguY29zKHRoZXRhKSwgLU1hdGguc2luKHRoZXRhKSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIE1hdGguc2luKHRoZXRhKSwgTWF0aC5jb3ModGhldGEpLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDFdO1xyXG4gICAgfSAgIFxyXG4gICAgXHJcbiAgICBzdGF0aWMgdHJhbnNwb3NlKGEpIHtcclxuICAgICAgICBpZiAoIWEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vIG9yIHJldHVybiBhIGRlZmF1bHQgbWF0cml4IG9yIGhhbmRsZSB0aGUgbnVsbCBjYXNlIGFwcHJvcHJpYXRlbHlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgYVswXSwgYVs0XSwgYVs4XSwgYVsxMl0sXHJcbiAgICAgICAgICAgIGFbMV0sIGFbNV0sIGFbOV0sIGFbMTNdLFxyXG4gICAgICAgICAgICBhWzJdLCBhWzZdLCBhWzEwXSwgYVsxNF0sXHJcbiAgICAgICAgICAgIGFbM10sIGFbN10sIGFbMTFdLCBhWzE1XVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGludmVyc2UoYSkge1xyXG4gICAgICAgIHZhciBhMDAgPSBhWzAgKiA0ICsgMF07XHJcbiAgICAgICAgdmFyIGEwMSA9IGFbMCAqIDQgKyAxXTtcclxuICAgICAgICB2YXIgYTAyID0gYVswICogNCArIDJdO1xyXG4gICAgICAgIHZhciBhMDMgPSBhWzAgKiA0ICsgM107XHJcbiAgICAgICAgdmFyIGExMCA9IGFbMSAqIDQgKyAwXTtcclxuICAgICAgICB2YXIgYTExID0gYVsxICogNCArIDFdO1xyXG4gICAgICAgIHZhciBhMTIgPSBhWzEgKiA0ICsgMl07XHJcbiAgICAgICAgdmFyIGExMyA9IGFbMSAqIDQgKyAzXTtcclxuICAgICAgICB2YXIgYTIwID0gYVsyICogNCArIDBdO1xyXG4gICAgICAgIHZhciBhMjEgPSBhWzIgKiA0ICsgMV07XHJcbiAgICAgICAgdmFyIGEyMiA9IGFbMiAqIDQgKyAyXTtcclxuICAgICAgICB2YXIgYTIzID0gYVsyICogNCArIDNdO1xyXG4gICAgICAgIHZhciBhMzAgPSBhWzMgKiA0ICsgMF07XHJcbiAgICAgICAgdmFyIGEzMSA9IGFbMyAqIDQgKyAxXTtcclxuICAgICAgICB2YXIgYTMyID0gYVszICogNCArIDJdO1xyXG4gICAgICAgIHZhciBhMzMgPSBhWzMgKiA0ICsgM107XHJcbiAgICAgICAgdmFyIGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMDtcclxuICAgICAgICB2YXIgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwO1xyXG4gICAgICAgIHZhciBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTA7XHJcbiAgICAgICAgdmFyIGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMTtcclxuICAgICAgICB2YXIgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExO1xyXG4gICAgICAgIHZhciBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTI7XHJcbiAgICAgICAgdmFyIGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMDtcclxuICAgICAgICB2YXIgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwO1xyXG4gICAgICAgIHZhciBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzA7XHJcbiAgICAgICAgdmFyIGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMTtcclxuICAgICAgICB2YXIgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxO1xyXG4gICAgICAgIHZhciBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzI7XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcclxuICAgICAgICB2YXIgZGV0ID1cclxuICAgICAgICBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XHJcblxyXG4gICAgICAgIGlmICghZGV0KSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRldCA9IDEuMCAvIGRldDtcclxuXHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgKGExMSAqIGIxMSAtIGExMiAqIGIxMCArIGExMyAqIGIwOSkgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMDIgKiBiMTAgLSBhMDEgKiBiMTEgLSBhMDMgKiBiMDkpICogZGV0LFxyXG4gICAgICAgICAgICAoYTMxICogYjA1IC0gYTMyICogYjA0ICsgYTMzICogYjAzKSAqIGRldCxcclxuICAgICAgICAgICAgKGEyMiAqIGIwNCAtIGEyMSAqIGIwNSAtIGEyMyAqIGIwMykgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMTIgKiBiMDggLSBhMTAgKiBiMTEgLSBhMTMgKiBiMDcpICogZGV0LFxyXG4gICAgICAgICAgICAoYTAwICogYjExIC0gYTAyICogYjA4ICsgYTAzICogYjA3KSAqIGRldCxcclxuICAgICAgICAgICAgKGEzMiAqIGIwMiAtIGEzMCAqIGIwNSAtIGEzMyAqIGIwMSkgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMjAgKiBiMDUgLSBhMjIgKiBiMDIgKyBhMjMgKiBiMDEpICogZGV0LFxyXG4gICAgICAgICAgICAoYTEwICogYjEwIC0gYTExICogYjA4ICsgYTEzICogYjA2KSAqIGRldCxcclxuICAgICAgICAgICAgKGEwMSAqIGIwOCAtIGEwMCAqIGIxMCAtIGEwMyAqIGIwNikgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMzAgKiBiMDQgLSBhMzEgKiBiMDIgKyBhMzMgKiBiMDApICogZGV0LFxyXG4gICAgICAgICAgICAoYTIxICogYjAyIC0gYTIwICogYjA0IC0gYTIzICogYjAwKSAqIGRldCxcclxuICAgICAgICAgICAgKGExMSAqIGIwNyAtIGExMCAqIGIwOSAtIGExMiAqIGIwNikgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMDAgKiBiMDkgLSBhMDEgKiBiMDcgKyBhMDIgKiBiMDYpICogZGV0LFxyXG4gICAgICAgICAgICAoYTMxICogYjAxIC0gYTMwICogYjAzIC0gYTMyICogYjAwKSAqIGRldCxcclxuICAgICAgICAgICAgKGEyMCAqIGIwMyAtIGEyMSAqIGIwMSArIGEyMiAqIGIwMCkgKiBkZXQsXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdHJhbnNsYXRlICh0eCwgdHksIHR6KSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgdHgsIHR5LCB0eiwgMVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0dXJuIGIgKiBhXHJcbiAgICBzdGF0aWMgbXVsdGlwbHkoYSwgYil7XHJcbiAgICAgICAgbGV0IHJlcyA9IE1hdDQuZ2V0RW1wdHkoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7ICsraSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7ICsraikge1xyXG4gICAgICAgICAgICAgICAgcmVzW2kgKiA0ICsgal0gPSBWZWM0LmRvdChNYXQ0LmdldFJvdyhiLCBpKSwgTWF0NC5nZXRDb2x1bW4oYSwgaikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcm90YXRlWChyYWQpIHtcclxuICAgICAgICB2YXIgc2luID0gTWF0aC5zaW4ocmFkKTtcclxuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MocmFkKTtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCBjb3MsIHNpbiwgMCxcclxuICAgICAgICAgICAgMCwgLXNpbiwgY29zLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcm90YXRlWShyYWQpIHtcclxuICAgICAgICB2YXIgc2luID0gTWF0aC5zaW4ocmFkKTtcclxuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MocmFkKTtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBjb3MsIDAsIC1zaW4sIDAsXHJcbiAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgIHNpbiwgMCwgY29zLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcm90YXRlWihyYWQpIHtcclxuICAgICAgICB2YXIgc2luID0gTWF0aC5zaW4ocmFkKTtcclxuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MocmFkKTtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBjb3MsIHNpbiwgMCwgMCxcclxuICAgICAgICAgICAgLXNpbiwgY29zLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2NhbGUgKHN4LCBzeSwgc3opIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBzeCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgc3ksIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIHN6LCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1dGlsc1xyXG4gICAgc3RhdGljIGdldFJvdyhtYXRyaXgsIHJvdyl7XHJcbiAgICAgICAgLy8gdXNlIFZlYzQgdG8gZ2V0IHRoZSByb3dcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzQobWF0cml4W3JvdyAqIDRdLCBtYXRyaXhbcm93ICogNCArIDFdLCBtYXRyaXhbcm93ICogNCArIDJdLCBtYXRyaXhbcm93ICogNCArIDNdKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Q29sdW1uKG1hdHJpeCwgY29sdW1uKXtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzQobWF0cml4W2NvbHVtbl0sIG1hdHJpeFtjb2x1bW4gKyA0XSwgbWF0cml4W2NvbHVtbiArIDhdLCBtYXRyaXhbY29sdW1uICsgMTJdKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlYzN7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB6KXtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy56ID0gejtcclxuICAgIH1cclxuICAgIHN0YXRpYyBhZGQoYSwgYil7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWMzKGEueCArIGIueCwgYS55ICsgYi55LCBhLnogKyBiLnopO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzdWIoYSwgYil7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWMzKGEueCAtIGIueCwgYS55IC0gYi55LCBhLnogLSBiLnopO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkb3QoYSwgYil7XHJcbiAgICAgICAgcmV0dXJuIGEueCAqIGIueCArIGEueSAqIGIueSArIGEueiAqIGIuejtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3Jvc3MoYSwgYil7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWMzKGEueiAqIGIueSAtIGEueSAqIGIueiwgYS54ICogYi56IC0gYS56ICogYi54ICxhLnkgKiBiLnggLSBhLnggKiBiLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBub3JtKGEpe1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoYS54ICogYS54ICsgYS55ICogYS55ICsgYS56ICogYS56KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdW5pdFZlY3RvcihhKXtcclxuICAgICAgICBsZXQgbm9ybSA9IFZlYzMubm9ybShhKTtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzMoYS54IC8gbm9ybSwgYS55IC8gbm9ybSwgYS56IC8gbm9ybSk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBhc0FycmF5KCl7ICBcclxuICAgICAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55LCB0aGlzLnpdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmcm9tQXJyYXkoYXJyYXkpe1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjMyhhcnJheVswXSwgYXJyYXlbMV0sIGFycmF5WzJdKTtcclxuICAgIH1cclxufSIsImltcG9ydCBWZWMzIGZyb20gXCIuL1ZlYzMuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlYzR7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB6LCB3KXtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy56ID0gejtcclxuICAgICAgICB0aGlzLncgPSB3O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGFkZChhLCBiKXtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzQoYS54ICsgYi54LCBhLnkgKyBiLnksIGEueiArIGIueiwgYS53ICsgYi53KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZG90KGEsIGIpe1xyXG4gICAgICAgIGxldCByZXMgPSBhLnggKiBiLnggKyBhLnkgKiBiLnkgKyBhLnogKiBiLnogKyBhLncgKiBiLndcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBub3JtKGEpe1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoYS54ICogYS54ICsgYS55ICogYS55ICsgYS56ICogYS56ICsgYS53ICogYS53KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbm9ybWFsaXplKGEpe1xyXG4gICAgICAgIGxldCBub3JtID0gVmVjNC5ub3JtKGEpO1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjNChhLnggLyBub3JtLCBhLnkgLyBub3JtLCBhLnogLyBub3JtLCBhLncgLyBub3JtKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXNWZWMzKGEpeyAgIFxyXG4gICAgICAgIHJldHVybiBuZXcgVmVjMyhhLngsIGEueSwgYS56KTtcclxuICAgIH1cclxuXHJcbiAgICBhc0FycmF5KCl7ICBcclxuICAgICAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55LCB0aGlzLnosIHRoaXMud107XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZyb21BcnJheShhcnJheSl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWM0KGFycmF5WzBdLCBhcnJheVsxXSwgYXJyYXlbMl0sIGFycmF5WzNdKTtcclxuICAgIH1cclxuXHJcbn0iLCJcclxuZXhwb3J0IGZ1bmN0aW9uIGRlZ1RvUmFkKGRlZ3JlZXMpe1xyXG4gICAgcmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xyXG59ICAgXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFkVG9EZWcocmFkaWFucyl7XHJcbiAgICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XHJcbn0iLCJpbXBvcnQgTm9kZSBmcm9tIFwiLi4vbm9kZS5qc1wiO1xyXG5pbXBvcnQgeyBkZWdUb1JhZCB9IGZyb20gXCIuLi9tYXRoL21hdGhVdGlscy5qc1wiO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuLi8uLi91dGlscy9BbmltYXRpb24uanNcIjtcclxuXHJcbi8vIENyZWF0ZSB0aGUgY2hpY2tlbiBib2R5IG5vZGVcclxuY29uc3QgY2hpY2tlbiA9IG5ldyBOb2RlKCk7XHJcbmNoaWNrZW4uZmxhZyA9IFwiYXJ0aWN1bGF0ZWRcIjtcclxuY2hpY2tlbi5uYW1lID0gXCJjaGlja2VuXCI7XHJcbmNoaWNrZW4ubW9kZWwgPSBib3hNb2RlbCgxLCAxLjUsIDEsIFswLCAwLCAwXSk7XHJcbmNoaWNrZW4udHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMCwgMCwgMF0sXHJcbiAgICByb3RhdGU6IFs0MiwgLTU1LCAyN10sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5jaGlja2VuLnBpY2tlZENvbG9yID0gWzAuOSwgMC45LCAwXSxcclxuY2hpY2tlbi5kaWZmdXNlID0gWzAsIDAsIDBdLFxyXG5jaGlja2VuLnNwZWN1bGFyID0gWzAsIDAsIDBdLFxyXG5jaGlja2VuLmFtYmllbnQgPSBbMSwgMSwgMV0sXHJcbmNoaWNrZW4uc2hpbmluZXNzID0gMSxcclxuY2hpY2tlbi52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hpY2tlbkZyYW1lcygpe1xyXG4gICAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgICAgICB0cmFuc2xhdGU6IFswLCAwLCAwXSxcclxuICAgICAgICByb3RhdGU6IFtkZWdUb1JhZCg0MiksIGRlZ1RvUmFkKC01NSksIGRlZ1RvUmFkKDI3KV0sXHJcbiAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICAgIH1cclxuICAgIGxldCBmcmFtZXMgPSBbXVxyXG4gICAgZm9yKGxldCBrID0gMDsgayA8IDEwMDsgKytrKXtcclxuICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgX3RyYW5zZm9ybS50cmFuc2xhdGVbMF0gPSBrIC8gNTA7XHJcbiAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBmcmFtZXM7XHJcblxyXG59XHJcblxyXG5jaGlja2VuLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IGNoaWNrZW5GcmFtZXMoKSxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuLy8gQ3JlYXRlIHRoZSBoZWFkIG5vZGVcclxuY29uc3QgaGVhZCA9IG5ldyBOb2RlKCk7XHJcbmhlYWQubmFtZSA9IFwiaGVhZFwiO1xyXG5oZWFkLm1vZGVsID0gYm94TW9kZWwoMC42LCAwLjYsIDAuOCwgWzAsIDAsIDBdKTtcclxuaGVhZC50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLjc1LCAwLjc1LCAwXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuaGVhZC5waWNrZWRDb2xvciA9IFswLjksIDAuOSwgMF07XHJcbmhlYWQuZGlmZnVzZSA9IFswLCAwLCAwXTtcclxuaGVhZC5zcGVjdWxhciA9IFswLCAwLCAwXTtcclxuaGVhZC5hbWJpZW50ID0gWzEsIDEsIDFdO1xyXG5oZWFkLnNoaW5pbmVzcyA9IDEsXHJcbmhlYWQudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuaGVhZC5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBudWxsLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IG51bGwsIFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbi8vIENyZWF0ZSB0aGUgYmVhayBub2RlXHJcbmNvbnN0IGJlYWsgPSBuZXcgTm9kZSgpO1xyXG5iZWFrLm5hbWUgPSBcImJlYWtcIjtcclxuYmVhay5tb2RlbCA9IGJveE1vZGVsKDAuMiwgMC4yLCAwLjMsIFstMC42NSwgLTAuMSwgMF0pO1xyXG5iZWFrLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzEsIDAsIDBdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5iZWFrLnBpY2tlZENvbG9yID0gWzEsIDAuNSwgMF07XHJcbmJlYWsuZGlmZnVzZSA9IFswLCAwLCAwXTtcclxuYmVhay5zcGVjdWxhciA9IFswLCAwLCAwXTtcclxuYmVhay5hbWJpZW50ID0gWzEsIDEsIDFdO1xyXG5iZWFrLnNoaW5pbmVzcyA9IDEsXHJcbmJlYWsudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuYmVhay5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBudWxsLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IG51bGwsXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuY29uc3Qgd2hpdGVMZWZ0RXllID0gbmV3IE5vZGUoKTtcclxud2hpdGVMZWZ0RXllLm5hbWUgPSBcIndoaXRlTGVmdEV5ZVwiO1xyXG53aGl0ZUxlZnRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjA3NSwgMC4xLCAwLjEsIFstMC43NSwgMC4yLCAwLjE1XSk7XHJcbndoaXRlTGVmdEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFsxLjA0LCAwLCAwXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxud2hpdGVMZWZ0RXllLnBpY2tlZENvbG9yID0gWzAuOTksIDAuOTksIDAuOTldO1xyXG53aGl0ZUxlZnRFeWUuZGlmZnVzZSA9IFswLCAwLCAwXTtcclxud2hpdGVMZWZ0RXllLnNwZWN1bGFyID0gWzAsIDAsIDBdO1xyXG53aGl0ZUxlZnRFeWUuYW1iaWVudCA9IFsxLCAxLCAxXTtcclxud2hpdGVMZWZ0RXllLnNoaW5pbmVzcyA9IDEsXHJcbndoaXRlTGVmdEV5ZS52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG53aGl0ZUxlZnRFeWUuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogbnVsbCxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBudWxsLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbmNvbnN0IGJsYWNrTGVmdEV5ZSA9IG5ldyBOb2RlKCk7XHJcbmJsYWNrTGVmdEV5ZS5uYW1lID0gXCJibGFja0xlZnRFeWVcIjtcclxuYmxhY2tMZWZ0RXllLm1vZGVsID0gYm94TW9kZWwoMC4wNSwgMC4wNSwgMC4wNSwgWy0wLjc1LCAwLjIsIDAuMTVdKTtcclxuYmxhY2tMZWZ0RXllLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuMDYsIDAsIDBdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5ibGFja0xlZnRFeWUucGlja2VkQ29sb3IgPSBbMCwgMCwgMF07XHJcbmJsYWNrTGVmdEV5ZS5kaWZmdXNlID0gWzAsIDAsIDBdO1xyXG5ibGFja0xlZnRFeWUuc3BlY3VsYXIgPSBbMCwgMCwgMF07XHJcbmJsYWNrTGVmdEV5ZS5hbWJpZW50ID0gWzEsIDEsIDFdO1xyXG53aGl0ZUxlZnRFeWUuc2hpbmluZXNzID0gMSxcclxuYmxhY2tMZWZ0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmJsYWNrTGVmdEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBudWxsLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IG51bGwsXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG5cclxufTtcclxuXHJcbmNvbnN0IHdoaXRlUmlnaHRFeWUgPSBuZXcgTm9kZSgpO1xyXG53aGl0ZVJpZ2h0RXllLm5hbWUgPSBcIndoaXRlUmlnaHRFeWVcIjtcclxud2hpdGVSaWdodEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMDc1LCAwLjEsIDAuMSwgWy0wLjc1LCAwLjIsIDAuMTVdKTtcclxud2hpdGVSaWdodEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFsxLjA0LCAwLCAtMC4zMl0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbndoaXRlUmlnaHRFeWUucGlja2VkQ29sb3IgPSBbMC45OSwgMC45OSwgMC45OV07XHJcbndoaXRlUmlnaHRFeWUuZGlmZnVzZSA9IFswLCAwLCAwXTtcclxud2hpdGVSaWdodEV5ZS5zcGVjdWxhciA9IFswLCAwLCAwXTtcclxud2hpdGVSaWdodEV5ZS5hbWJpZW50ID0gWzEsIDEsIDFdO1xyXG53aGl0ZVJpZ2h0RXllLnNoaW5pbmVzcyA9IDEsXHJcbndoaXRlUmlnaHRFeWUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxud2hpdGVSaWdodEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBudWxsLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IG51bGwsXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG5cclxufTtcclxuXHJcbmNvbnN0IGJsYWNrUmlnaHRFeWUgPSBuZXcgTm9kZSgpO1xyXG5ibGFja1JpZ2h0RXllLm5hbWUgPSBcImJsYWNrUmlnaHRFeWVcIjtcclxuYmxhY2tSaWdodEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMDUsIDAuMDUsIDAuMDUsIFstMC43NSwgMC4yLCAwLjE1XSk7XHJcbmJsYWNrUmlnaHRFeWUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMC4wNiwgMCwgMF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmJsYWNrUmlnaHRFeWUucGlja2VkQ29sb3IgPSBbMCwgMCwgMF07XHJcbmJsYWNrUmlnaHRFeWUuZGlmZnVzZSA9IFswLCAwLCAwXTtcclxuYmxhY2tSaWdodEV5ZS5zcGVjdWxhciA9IFswLCAwLCAwXTtcclxuYmxhY2tSaWdodEV5ZS5hbWJpZW50ID0gWzEsIDEsIDFdO1xyXG5ibGFja1JpZ2h0RXllLnNoaW5pbmVzcyA9IDEsXHJcbmJsYWNrUmlnaHRFeWUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuYmxhY2tSaWdodEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBudWxsLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IG51bGwsXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuXHJcblxyXG4vLyBDcmVhdGUgdGhlIGxlZnQgd2luZyBub2RlXHJcbmNvbnN0IGxlZnRXaW5nID0gbmV3IE5vZGUoKTtcclxubGVmdFdpbmcubmFtZSA9IFwibGVmdFdpbmdcIjtcclxubGVmdFdpbmcubW9kZWwgPSBib3hNb2RlbCgwLjUsIDAuMSwgMSwgWzAsIDAsIDBdKTtcclxubGVmdFdpbmcudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMCwgMCwgLTAuNzVdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgOTBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubGVmdFdpbmcucGlja2VkQ29sb3IgPSBbMC45LCAwLjksIDBdO1xyXG5sZWZ0V2luZy5kaWZmdXNlID0gWzAsIDAsIDBdO1xyXG5sZWZ0V2luZy5zcGVjdWxhciA9IFswLCAwLCAwXTtcclxubGVmdFdpbmcuYW1iaWVudCA9IFsxLCAxLCAxXTtcclxubGVmdFdpbmcuc2hpbmluZXNzID0gMSxcclxubGVmdFdpbmcudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGxlZnRXaW5nRnJhbWVzKCl7XHJcblxyXG4gICAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgICAgICB0cmFuc2xhdGU6IFswLCAwLCAtMC43NV0sXHJcbiAgICAgICAgcm90YXRlOiBbMCwgMCwgOTBdLFxyXG4gICAgICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgICB9XHJcbiAgICBsZXQgZnJhbWVzID0gW11cclxuICAgIGZvcihsZXQgayA9IDA7IGsgPCA0OyArK2spe1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gMTI7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSAtTWF0aC5QSSAvIDkgKyBNYXRoLlBJLzkgKiBpIC8gNjtcclxuICAgICAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGkgPTAgOyBpIDw9IDEyOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gTWF0aC5QSSAvIDkgLSBNYXRoLlBJLzkgKiBpIC8gNjtcclxuICAgICAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZnJvbSAtcGkvOSB0byAwXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDw9IDY7IGkrKyl7XHJcbiAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gLU1hdGguUEkgLyA5ICsgTWF0aC5QSS85ICogaSAvIDY7XHJcbiAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7IFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZyYW1lcztcclxuXHJcbn1cclxuXHJcbmxlZnRXaW5nLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IGxlZnRXaW5nRnJhbWVzKCksXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogQW5pbWF0aW9uLmFuaW1hdGlvblNjcmlwdCgpLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbi8vIENyZWF0ZSB0aGUgcmlnaHQgd2luZyBub2RlXHJcbmNvbnN0IHJpZ2h0V2luZyA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0V2luZy5uYW1lID0gXCJyaWdodFdpbmdcIjtcclxucmlnaHRXaW5nLm1vZGVsID0gYm94TW9kZWwoMC41LCAwLjEsIDEsIFswLCAwLCAwXSk7XHJcbnJpZ2h0V2luZy50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLCAwLCAwLjc1XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDkwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnJpZ2h0V2luZy5waWNrZWRDb2xvciA9IFswLjksIDAuOSwgMF07XHJcbnJpZ2h0V2luZy5kaWZmdXNlID0gWzAsIDAsIDBdO1xyXG5yaWdodFdpbmcuc3BlY3VsYXIgPSBbMCwgMCwgMF07XHJcbnJpZ2h0V2luZy5hbWJpZW50ID0gWzEsIDEsIDFdO1xyXG5yaWdodFdpbmcuc2hpbmluZXNzID0gMSxcclxucmlnaHRXaW5nLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcblxyXG5mdW5jdGlvbiByaWdodFdpbmdGcmFtZXMoKXtcclxuICAgIGxldCB0cmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgdHJhbnNsYXRlOiBbMCwgMCwgMC43NV0sXHJcbiAgICAgICAgcm90YXRlOiBbMCwgMCwgOTBdLFxyXG4gICAgICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgICB9XHJcbiAgICBsZXQgZnJhbWVzID0gW11cclxuICAgIGZvcihsZXQgayA9IDA7IGsgPCA0OyArK2spe1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gMTI7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSBNYXRoLlBJIC8gOSAtIE1hdGguUEkvOSAqIGkgLyA2O1xyXG4gICAgICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaSA9MCA7IGkgPD0gMTI7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSAtIE1hdGguUEkgLyA5ICsgTWF0aC5QSS85ICogaSAvIDY7XHJcbiAgICAgICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGZyb20gcGkvNiB0byAwXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDw9IDY7IGkrKyl7XHJcbiAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gTWF0aC5QSSAvIDkgLSBNYXRoLlBJLzkgKiBpIC8gNjtcclxuICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTsgXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnJhbWVzO1xyXG5cclxufVxyXG5cclxucmlnaHRXaW5nLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IHJpZ2h0V2luZ0ZyYW1lcygpLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG4vLyBDcmVhdGUgdGhlIHJpZ2h0IGxlZyBub2RlXHJcbmNvbnN0IHJpZ2h0TGVnID0gbmV3IE5vZGUoKTtcclxucmlnaHRMZWcubmFtZSA9IFwicmlnaHRMZWdcIjtcclxucmlnaHRMZWcubW9kZWwgPSBib3hNb2RlbCgwLjYsIDAuMiwgMC4yLCBbMCwgMCwgMF0pO1xyXG5yaWdodExlZy50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFstMC41LCAtMC44LCAtMC4zNV0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnJpZ2h0TGVnLnBpY2tlZENvbG9yID0gWzEsIDAuNSwgMF07XHJcbnJpZ2h0TGVnLmRpZmZ1c2UgPSBbMCwgMCwgMF07XHJcbnJpZ2h0TGVnLnNwZWN1bGFyID0gWzAsIDAsIDBdO1xyXG5yaWdodExlZy5hbWJpZW50ID0gWzEsIDEsIDFdO1xyXG5yaWdodExlZy5zaGluaW5lc3MgPSAxLFxyXG5yaWdodExlZy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmlnaHRMZWdGcmFtZXMoKXtcclxuICAgIGxldCB0cmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgdHJhbnNsYXRlOiBbLTAuNSwgLTAuOCwgLTAuMzVdLFxyXG4gICAgICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgICB9XHJcbiAgICBsZXQgZnJhbWVzID0gW11cclxuICAgIGZvcihsZXQgayA9IDA7IGsgPCA0OyArK2spe1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gMTI7IGkrKyl7XHJcbiAgICAgICAgICAgIC8vIGFwcGVuZCBmb3IgYW5nbGUgcGkvNiAtIHBpLzMgKiBpLzEyIHRvIGZyYW1lc1xyXG4gICAgICAgICAgICAvLyBjbG9uZSB0aGUgdHJhbnNmb3JtIG9iamVjdFxyXG4gICAgICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzJdID0gTWF0aC5QSSAvIDYgLSBNYXRoLlBJLzMgKiBpIC8gMTI7XHJcbiAgICAgICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpID0wIDsgaSA8PSAxMjsgaSsrKXtcclxuICAgICAgICAgICAgLy8gYXBwZW5kIGZvciBhbmdsZSBwaS82ICogaS8xMiB0byBmcmFtZXNcclxuICAgICAgICAgICAgLy8gY2xvbmUgdGhlIHRyYW5zZm9ybSBvYmplY3RcclxuICAgICAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVsyXSA9IC0gTWF0aC5QSSAvIDYgKyBNYXRoLlBJLzMgKiBpIC8gMTI7XHJcbiAgICAgICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGZyb20gcGkvNiB0byAwXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDw9IDY7IGkrKyl7XHJcbiAgICAgICAgLy8gYXBwZW5kIGZvciBhbmdsZSBwaS82IC0gcGkvMyAqIGkvMTIgdG8gZnJhbWVzXHJcbiAgICAgICAgLy8gY2xvbmUgdGhlIHRyYW5zZm9ybSBvYmplY3RcclxuICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMl0gPSBNYXRoLlBJIC8gNiAtIE1hdGguUEkvNiAqIGkgLyA2O1xyXG4gICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pOyBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZnJhbWVzO1xyXG59XHJcblxyXG5cclxucmlnaHRMZWcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lcyA6IHJpZ2h0TGVnRnJhbWVzKCksXHJcbiAgICBjdXJyZW50RnJhbWUgOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG4vLyBjcmV0ZSB0aGUgcmlnaHQgZm9vdCBub2RlXHJcbmNvbnN0IHJpZ2h0Rm9vdCA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0Rm9vdC5uYW1lID0gXCJyaWdodEZvb3RcIjtcclxucmlnaHRGb290Lm1vZGVsID0gYm94TW9kZWwoMC4xLCAwLjQsIDAuMywgWzAsIDAsIDBdKTtcclxucmlnaHRGb290LnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuMDIsIC0wLjM0LCAwXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRGb290LnBpY2tlZENvbG9yID0gWzEsIDAuNSwgMF07XHJcbnJpZ2h0Rm9vdC5kaWZmdXNlID0gWzAsIDAsIDBdO1xyXG5yaWdodEZvb3Quc3BlY3VsYXIgPSBbMCwgMCwgMF07XHJcbnJpZ2h0Rm9vdC5hbWJpZW50ID0gWzEsIDEsIDFdO1xyXG5yaWdodEZvb3Quc2hpbmluZXNzID0gMSxcclxucmlnaHRGb290LnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbnJpZ2h0Rm9vdC5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBudWxsLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IG51bGwsXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuLy8gQ3JlYXRlIHRoZSBsZWZ0IGxlZyBub2RlXHJcbmNvbnN0IGxlZnRMZWcgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0TGVnLm5hbWUgPSBcImxlZnRMZWdcIjtcclxubGVmdExlZy5tb2RlbCA9IGJveE1vZGVsKDAuNiwgMC4yLCAwLjIsIFswLCAwLCAwXSk7XHJcbmxlZnRMZWcudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbLTAuNSwgLTAuOCwgMC4zNV0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmxlZnRMZWcucGlja2VkQ29sb3IgPSBbMSwgMC41LCAwXTtcclxubGVmdExlZy5kaWZmdXNlID0gWzAsIDAsIDBdO1xyXG5sZWZ0TGVnLnNwZWN1bGFyID0gWzAsIDAsIDBdO1xyXG5sZWZ0TGVnLmFtYmllbnQgPSBbMSwgMSwgMV07XHJcbmxlZnRMZWcuc2hpbmluZXNzID0gMSxcclxubGVmdExlZy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gbGVmdExlZ0ZyYW1lcygpe1xyXG4gICAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgICAgICB0cmFuc2xhdGU6IFstMC41LCAtMC44LCAwLjM1XSxcclxuICAgICAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgICAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG4gICAgfVxyXG4gICAgbGV0IGZyYW1lcyA9IFtdXHJcbiAgICBmb3IobGV0IGsgPSAwOyBrIDwgNDsgKytrKXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDw9IDEyOyBpKyspe1xyXG4gICAgICAgICAgICAvLyBhcHBlbmQgZm9yIGFuZ2xlIHBpLzYgLSBwaS8zICogaS8xMiB0byBmcmFtZXNcclxuICAgICAgICAgICAgLy8gY2xvbmUgdGhlIHRyYW5zZm9ybSBvYmplY3RcclxuICAgICAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVsyXSA9IC0gTWF0aC5QSSAvIDYgKyBNYXRoLlBJLzMgKiBpIC8gMTI7XHJcbiAgICAgICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpID0wIDsgaSA8PSAxMjsgaSsrKXtcclxuICAgICAgICAgICAgLy8gYXBwZW5kIGZvciBhbmdsZSBwaS82ICogaS8xMiB0byBmcmFtZXNcclxuICAgICAgICAgICAgLy8gY2xvbmUgdGhlIHRyYW5zZm9ybSBvYmplY3RcclxuICAgICAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVsyXSA9IE1hdGguUEkgLyA2IC0gTWF0aC5QSS8zICogaSAvIDEyO1xyXG4gICAgICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBmcm9tIC1waS82IHRvIDBcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gNjsgaSsrKXtcclxuICAgICAgICAvLyBhcHBlbmQgZm9yIGFuZ2xlIHBpLzYgLSBwaS8zICogaS8xMiB0byBmcmFtZXNcclxuICAgICAgICAvLyBjbG9uZSB0aGUgdHJhbnNmb3JtIG9iamVjdFxyXG4gICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVsyXSA9IC1NYXRoLlBJIC8gNiArIE1hdGguUEkvNiAqIGkgLyA2O1xyXG4gICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pOyBcclxuICAgIH1cclxuICAgIHJldHVybiBmcmFtZXM7XHJcbn1cclxuXHJcbmxlZnRMZWcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lcyA6IGxlZnRMZWdGcmFtZXMoKSxcclxuICAgIGN1cnJlbnRGcmFtZSA6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogQW5pbWF0aW9uLmFuaW1hdGlvblNjcmlwdCgpLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbi8vIENyZWF0ZSB0aGUgbGVmdCBmb290IG5vZGVcclxuY29uc3QgbGVmdEZvb3QgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0Rm9vdC5uYW1lID0gXCJsZWZ0Rm9vdFwiO1xyXG5sZWZ0Rm9vdC5tb2RlbCA9IGJveE1vZGVsKDAuMSwgMC40LCAwLjMsIFswLCAwLCAwXSk7XHJcbmxlZnRGb290LnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuMDIsIC0wLjM0LCAwXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubGVmdEZvb3QucGlja2VkQ29sb3IgPSBbMSwgMC41LCAwXTtcclxubGVmdEZvb3QuZGlmZnVzZSA9IFswLCAwLCAwXTtcclxubGVmdEZvb3Quc3BlY3VsYXIgPSBbMCwgMCwgMF07XHJcbmxlZnRGb290LmFtYmllbnQgPSBbMSwgMSwgMV07XHJcbmxlZnRGb290LnNoaW5pbmVzcyA9IDEsXHJcbmxlZnRGb290LnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmxlZnRGb290LmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IG51bGwsXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogbnVsbCxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG4vLyBDcmVhdGUgdGhlIHRhaWwgbm9kZVxyXG5jb25zdCB0YWlsID0gbmV3IE5vZGUoKTtcclxudGFpbC5uYW1lID0gXCJ0YWlsXCI7XHJcblxyXG5cclxuLy8gQXNzZW1ibGUgdGhlIGNoaWNrZW4gbW9kZWxcclxuLy8gY2hpY2tlbi5hZGRDaGlsZChoZWFkKTtcclxuLy8gaGVhZC5hZGRDaGlsZChiZWFrKTtcclxuLy8gY2hpY2tlbi5hZGRDaGlsZChsZWZ0V2luZyk7XHJcbi8vIGNoaWNrZW4uYWRkQ2hpbGQocmlnaHRXaW5nKTtcclxuLy8gY2hpY2tlbi5hZGRDaGlsZChsZWZ0TGVnKTtcclxuLy8gY2hpY2tlbi5hZGRDaGlsZChyaWdodExlZyk7XHJcblxyXG4vLyBBc3NlbWJsZSB0aGUgY2hpY2tlbiBtb2RlbFxyXG5oZWFkLnNldFBhcmVudChjaGlja2VuKTtcclxuYmVhay5zZXRQYXJlbnQoaGVhZCk7XHJcbndoaXRlUmlnaHRFeWUuc2V0UGFyZW50KGhlYWQpO1xyXG5ibGFja1JpZ2h0RXllLnNldFBhcmVudCh3aGl0ZVJpZ2h0RXllKTtcclxud2hpdGVMZWZ0RXllLnNldFBhcmVudChoZWFkKTtcclxuYmxhY2tMZWZ0RXllLnNldFBhcmVudCh3aGl0ZUxlZnRFeWUpO1xyXG5sZWZ0V2luZy5zZXRQYXJlbnQoY2hpY2tlbik7XHJcbnJpZ2h0V2luZy5zZXRQYXJlbnQoY2hpY2tlbik7XHJcbmxlZnRMZWcuc2V0UGFyZW50KGNoaWNrZW4pO1xyXG5sZWZ0Rm9vdC5zZXRQYXJlbnQobGVmdExlZyk7XHJcbnJpZ2h0TGVnLnNldFBhcmVudChjaGlja2VuKTtcclxucmlnaHRGb290LnNldFBhcmVudChyaWdodExlZyk7XHJcblxyXG5cclxudmFyIGNoaWNrZW5Nb2RlbCA9IFtcclxuICBjaGlja2VuXHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoaWNrZW5Nb2RlbDtcclxuIiwiaW1wb3J0IE5vZGUgZnJvbSBcIi4uL25vZGUuanNcIjtcclxuXHJcbmNvbnN0IGJvZHlDb2xvciA9IFswLjg4NiwgMC4zNDUsIDAuMTMzXTtcclxuY29uc3Qgd2hpdGVDb2xvciA9IFswLjk5LCAwLjk5LCAwLjk5XTtcclxuY29uc3QgYmxhY2tDb2xvciA9IFswLCAwLCAwXTtcclxuY29uc3QgYnJvd25Db2xvciA9IFswLjU0NSwgMC4yNzEsIDAuMDc1XTtcclxuXHJcbmNvbnN0IGZveCA9IG5ldyBOb2RlKCk7XHJcbmZveC5uYW1lID0gXCJmb3hcIjtcclxuZm94Lm1vZGVsID0gYm94TW9kZWwoMC42LCAwLjcsIDEsIFswLCAwLCAwXSk7IFxyXG5mb3gudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmZveC5waWNrZWRDb2xvciA9IGJvZHlDb2xvcjtcclxuZm94LnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxuZm94LmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IGhlYWQgPSBuZXcgTm9kZSgpO1xyXG5oZWFkLm5hbWUgPSBcImhlYWRcIjtcclxuaGVhZC5tb2RlbCA9IGJveE1vZGVsKDAuNSwgMC41LCAwLjQsIFswLCAwLCAwXSk7XHJcbmhlYWQudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAsIDAuMSwgMC43XSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuaGVhZC5waWNrZWRDb2xvciA9IGJvZHlDb2xvcjtcclxuaGVhZC52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbmhlYWQuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3Qgd2hpdGVSaWdodEV5ZSA9IG5ldyBOb2RlKCk7XHJcbndoaXRlUmlnaHRFeWUubmFtZSA9IFwid2hpdGVSaWdodEV5ZVwiO1xyXG53aGl0ZVJpZ2h0RXllLm1vZGVsID0gYm94TW9kZWwoMC4xLCAwLjEsIDAuMDUsIFswLCAwLCAwXSk7XHJcbndoaXRlUmlnaHRFeWUudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAuMTUsIDAuMSwgMC4yXSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxud2hpdGVSaWdodEV5ZS5waWNrZWRDb2xvciA9IHdoaXRlQ29sb3I7XHJcbndoaXRlUmlnaHRFeWUudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG53aGl0ZVJpZ2h0RXllLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IHdoaXRlTGVmdEV5ZSA9IG5ldyBOb2RlKCk7XHJcbndoaXRlTGVmdEV5ZS5uYW1lID0gXCJ3aGl0ZUxlZnRFeWVcIjtcclxud2hpdGVMZWZ0RXllLm1vZGVsID0gYm94TW9kZWwoMC4xLCAwLjEsIDAuMDUsIFswLCAwLCAwXSk7XHJcbndoaXRlTGVmdEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbLTAuMTUsIDAuMSwgMC4yXSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxud2hpdGVMZWZ0RXllLnBpY2tlZENvbG9yID0gd2hpdGVDb2xvcjtcclxud2hpdGVMZWZ0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxud2hpdGVMZWZ0RXllLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IGJsYWNrUmlnaHRFeWUgPSBuZXcgTm9kZSgpO1xyXG5ibGFja1JpZ2h0RXllLm5hbWUgPSBcImJsYWNrUmlnaHRFeWVcIjtcclxuYmxhY2tSaWdodEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMSwgMC4wNiwgMC4wNSwgWzAsIDAsIDBdKTtcclxuYmxhY2tSaWdodEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbLTAuMDMsIDAsIDAuMDFdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5ibGFja1JpZ2h0RXllLnBpY2tlZENvbG9yID0gYmxhY2tDb2xvcjtcclxuYmxhY2tSaWdodEV5ZS52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbmJsYWNrUmlnaHRFeWUuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgYmxhY2tMZWZ0RXllID0gbmV3IE5vZGUoKTtcclxuYmxhY2tMZWZ0RXllLm5hbWUgPSBcImJsYWNrTGVmdEV5ZVwiO1xyXG5ibGFja0xlZnRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjEsIDAuMDYsIDAuMDUsIFswLCAwLCAwXSk7XHJcbmJsYWNrTGVmdEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMC4wMywgMCwgMC4wMV0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmJsYWNrTGVmdEV5ZS5waWNrZWRDb2xvciA9IGJsYWNrQ29sb3I7XHJcbmJsYWNrTGVmdEV5ZS52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbmJsYWNrTGVmdEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCBub3NlID0gbmV3IE5vZGUoKTtcclxubm9zZS5uYW1lID0gXCJub3NlXCI7XHJcbm5vc2UubW9kZWwgPSBib3hNb2RlbCgwLjE1LCAwLjMsIDAuMiwgWzAsIDAsIDBdKTtcclxubm9zZS50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMCwgLTAuMSwgMC4zXSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubm9zZS5waWNrZWRDb2xvciA9IGJsYWNrQ29sb3I7XHJcbm5vc2Uudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5ub3NlLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuY29uc3QgdW5kZXJub3NlID0gbmV3IE5vZGUoKTtcclxudW5kZXJub3NlLm5hbWUgPSBcInVuZGVybm9zZVwiO1xyXG51bmRlcm5vc2UubW9kZWwgPSBib3hNb2RlbCgwLjEsIDAuMywgMC4yLCBbMCwgMCwgMF0pO1xyXG51bmRlcm5vc2UudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAsIC0wLjIsIDAuM10sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnVuZGVybm9zZS5waWNrZWRDb2xvciA9IHdoaXRlQ29sb3I7XHJcbnVuZGVybm9zZS52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbnVuZGVybm9zZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCByaWdodEVhciA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0RWFyLm5hbWUgPSBcInJpZ2h0RWFyXCI7XHJcbnJpZ2h0RWFyLm1vZGVsID0gYm94TW9kZWwoMC4yLCAwLjIsIDAuMSwgWzAsIDAsIDBdKTtcclxucmlnaHRFYXIudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAuMTUsIDAuMzUsIDBdLFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnJpZ2h0RWFyLnBpY2tlZENvbG9yID0gYmxhY2tDb2xvcjtcclxucmlnaHRFYXIudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5yaWdodEVhci5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCBsZWZ0RWFyID0gbmV3IE5vZGUoKTtcclxubGVmdEVhci5uYW1lID0gXCJsZWZ0RWFyXCI7XHJcbmxlZnRFYXIubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC4xLCBbMCwgMCwgMF0pO1xyXG5sZWZ0RWFyLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFstMC4xNSwgMC4zNSwgMF0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmxlZnRFYXIucGlja2VkQ29sb3IgPSBibGFja0NvbG9yO1xyXG5sZWZ0RWFyLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxubGVmdEVhci5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCByaWdodEZyb250TGVnID0gbmV3IE5vZGUoKTtcclxucmlnaHRGcm9udExlZy5uYW1lID0gXCJyaWdodEZyb250TGVnXCI7XHJcbnJpZ2h0RnJvbnRMZWcubW9kZWwgPSBib3hNb2RlbCgxLCAwLjIsIDAuMTUsIFswLCAwLCAwXSk7XHJcbnJpZ2h0RnJvbnRMZWcudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAuMiwgLTAuMjUsIDAuMl0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnJpZ2h0RnJvbnRMZWcucGlja2VkQ29sb3IgPSBibGFja0NvbG9yO1xyXG5yaWdodEZyb250TGVnLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxucmlnaHRGcm9udExlZy5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcbmNvbnN0IHJpZ2h0RnJvbnRUb2UgPSBuZXcgTm9kZSgpO1xyXG5yaWdodEZyb250VG9lLm5hbWUgPSBcInJpZ2h0RnJvbnRUb2VcIjtcclxucmlnaHRGcm9udFRvZS5tb2RlbCA9IGJveE1vZGVsKDAuMSwgMC4yLCAwLjIsIFswLCAwLCAwXSk7XHJcbnJpZ2h0RnJvbnRUb2UudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAsIC0wLjQ1LCAwLjA1XSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRGcm9udFRvZS5waWNrZWRDb2xvciA9IHdoaXRlQ29sb3I7XHJcbnJpZ2h0RnJvbnRUb2Uudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5yaWdodEZyb250VG9lLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IGxlZnRGcm9udExlZyA9IG5ldyBOb2RlKCk7XHJcbmxlZnRGcm9udExlZy5uYW1lID0gXCJsZWZ0RnJvbnRMZWdcIjtcclxubGVmdEZyb250TGVnLm1vZGVsID0gYm94TW9kZWwoMSwgMC4yLCAwLjE1LCBbMCwgMCwgMF0pO1xyXG5sZWZ0RnJvbnRMZWcudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWy0wLjIsIC0wLjI1LCAwLjJdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5sZWZ0RnJvbnRMZWcucGlja2VkQ29sb3IgPSBibGFja0NvbG9yO1xyXG5sZWZ0RnJvbnRMZWcudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5sZWZ0RnJvbnRMZWcuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5jb25zdCBsZWZ0RnJvbnRUb2UgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0RnJvbnRUb2UubmFtZSA9IFwibGVmdEZyb250VG9lXCI7XHJcbmxlZnRGcm9udFRvZS5tb2RlbCA9IGJveE1vZGVsKDAuMSwgMC4yLCAwLjE1LCBbMCwgMCwgMF0pO1xyXG5sZWZ0RnJvbnRUb2UudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWy0wLCAtMC40NSwgMC4wNV0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmxlZnRGcm9udFRvZS5waWNrZWRDb2xvciA9IHdoaXRlQ29sb3I7XHJcbmxlZnRGcm9udFRvZS52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbmxlZnRGcm9udFRvZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCByaWdodFJlYXJMZWcgPSBuZXcgTm9kZSgpO1xyXG5yaWdodFJlYXJMZWcubmFtZSA9IFwicmlnaHRSZWFyTGVnXCI7XHJcbnJpZ2h0UmVhckxlZy5tb2RlbCA9IGJveE1vZGVsKDEsIDAuMiwgMC4xNSwgWzAsIDAsIDBdKTtcclxucmlnaHRSZWFyTGVnLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLjIsIC0wLjI1LCAtMC4yXSxcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5yaWdodFJlYXJMZWcucGlja2VkQ29sb3IgPSBibGFja0NvbG9yO1xyXG5yaWdodFJlYXJMZWcudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5yaWdodFJlYXJMZWcuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5jb25zdCByaWdodFJlYXJUb2UgPSBuZXcgTm9kZSgpO1xyXG5yaWdodFJlYXJUb2UubmFtZSA9IFwicmlnaHRSZWFyVG9lXCI7XHJcbnJpZ2h0UmVhclRvZS5tb2RlbCA9IGJveE1vZGVsKDAuMSwgMC4yLCAwLjIsIFswLCAwLCAwXSk7XHJcbnJpZ2h0UmVhclRvZS50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMCwgLTAuNDUsIDAuMDVdLFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnJpZ2h0UmVhclRvZS5waWNrZWRDb2xvciA9IHdoaXRlQ29sb3I7XHJcbnJpZ2h0UmVhclRvZS52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbnJpZ2h0UmVhclRvZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCBsZWZ0UmVhckxlZyA9IG5ldyBOb2RlKCk7XHJcbmxlZnRSZWFyTGVnLm5hbWUgPSBcImxlZnRSZWFyTGVnXCI7XHJcbmxlZnRSZWFyTGVnLm1vZGVsID0gYm94TW9kZWwoMSwgMC4yLCAwLjE1LCBbMCwgMCwgMF0pO1xyXG5sZWZ0UmVhckxlZy50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbLTAuMiwgLTAuMjUsIC0wLjJdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5sZWZ0UmVhckxlZy5waWNrZWRDb2xvciA9IGJsYWNrQ29sb3I7XHJcbmxlZnRSZWFyTGVnLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxubGVmdFJlYXJMZWcuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5jb25zdCBsZWZ0UmVhclRvZSA9IG5ldyBOb2RlKCk7XHJcbmxlZnRSZWFyVG9lLm5hbWUgPSBcImxlZnRSZWFyVG9lXCI7XHJcbmxlZnRSZWFyVG9lLm1vZGVsID0gYm94TW9kZWwoMC4xLCAwLjIsIDAuMiwgWzAsIDAsIDBdKTtcclxubGVmdFJlYXJUb2UudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWy0wLCAtMC40NSwgMC4wNV0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmxlZnRSZWFyVG9lLnBpY2tlZENvbG9yID0gd2hpdGVDb2xvcjtcclxubGVmdFJlYXJUb2Uudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5sZWZ0UmVhclRvZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCB0YWlsID0gbmV3IE5vZGUoKTtcclxudGFpbC5uYW1lID0gXCJ0YWlsXCI7XHJcbnRhaWwubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC40LCBbMCwgMCwgMF0pO1xyXG50YWlsLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLCAwLCAtMC42NV0sXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxudGFpbC5waWNrZWRDb2xvciA9IGJvZHlDb2xvcjtcclxudGFpbC52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbnRhaWwuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5jb25zdCB0YWlsZWRnZSA9IG5ldyBOb2RlKCk7XHJcbnRhaWxlZGdlLm5hbWUgPSBcInRhaWxlZGdlXCI7XHJcbnRhaWxlZGdlLm1vZGVsID0gYm94TW9kZWwoMC4yLCAwLjIsIDAuMiwgWzAsIDAsIDBdKTtcclxudGFpbGVkZ2UudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAsIDAsIC0wLjk1XSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxudGFpbGVkZ2UucGlja2VkQ29sb3IgPSB3aGl0ZUNvbG9yO1xyXG50YWlsZWRnZS52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbnRhaWxlZGdlLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmhlYWQuc2V0UGFyZW50KGZveCk7XHJcbnJpZ2h0RWFyLnNldFBhcmVudChoZWFkKTtcclxubGVmdEVhci5zZXRQYXJlbnQoaGVhZCk7XHJcbndoaXRlUmlnaHRFeWUuc2V0UGFyZW50KGhlYWQpO1xyXG53aGl0ZUxlZnRFeWUuc2V0UGFyZW50KGhlYWQpO1xyXG5ibGFja1JpZ2h0RXllLnNldFBhcmVudCh3aGl0ZVJpZ2h0RXllKTtcclxuYmxhY2tMZWZ0RXllLnNldFBhcmVudCh3aGl0ZUxlZnRFeWUpO1xyXG5ub3NlLnNldFBhcmVudChoZWFkKTtcclxudW5kZXJub3NlLnNldFBhcmVudChoZWFkKTtcclxucmlnaHRGcm9udExlZy5zZXRQYXJlbnQoZm94KTtcclxucmlnaHRGcm9udFRvZS5zZXRQYXJlbnQocmlnaHRGcm9udExlZyk7XHJcbmxlZnRGcm9udExlZy5zZXRQYXJlbnQoZm94KTtcclxubGVmdEZyb250VG9lLnNldFBhcmVudChsZWZ0RnJvbnRMZWcpO1xyXG5yaWdodFJlYXJMZWcuc2V0UGFyZW50KGZveCk7XHJcbnJpZ2h0UmVhclRvZS5zZXRQYXJlbnQocmlnaHRSZWFyTGVnKTtcclxubGVmdFJlYXJMZWcuc2V0UGFyZW50KGZveCk7XHJcbmxlZnRSZWFyVG9lLnNldFBhcmVudChsZWZ0UmVhckxlZyk7XHJcbnRhaWwuc2V0UGFyZW50KGZveCk7XHJcbnRhaWxlZGdlLnNldFBhcmVudChmb3gpO1xyXG5cclxudmFyIGZveE1vZGVsID0gW1xyXG4gIGZveFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm94TW9kZWw7XHJcbiIsImltcG9ydCBOb2RlIGZyb20gXCIuLi9ub2RlLmpzXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gaG9sbG93VGhpbmd5KCkge1xyXG4gICAgbGV0IHZlcnRpY2VzID0gW107XHJcbiAgICBsZXQgY29sb3JzID0gW107XHJcbiAgICBsZXQgdGFuZ2VudHMgPSBbXTtcclxuICAgIGxldCBiaXRhbmdlbnRzID0gW107XHJcbiAgICBsZXQgbm9ybWFscyA9IFtdO1xyXG4gICAgbGV0IHRleENvb3JkID0gW107XHJcbiAgICBsZXQgZmFjZXMgPSBnZW5lcmF0ZUZhY2VzKCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGJveGVzID0gW1xyXG4gICAgICB7IHNpemU6IFswLjIsIDAuOCwgMC4yXSwgcG9zaXRpb246IFswLCAxLCAwXSB9LFxyXG4gICAgICB7IHNpemU6IFswLjIsIDAuOCwgMC4yXSwgcG9zaXRpb246IFswLCAtMSwgMF0gfSxcclxuICAgICAgeyBzaXplOiBbMS44LCAwLjIsIDAuMl0sIHBvc2l0aW9uOiBbLTAuMywgMCwgMF0gfSxcclxuICAgICAgeyBzaXplOiBbMS44LCAwLjIsIDAuMl0sIHBvc2l0aW9uOiBbMC4zLCAwLCAwXSB9LFxyXG4gICAgICB7IHNpemU6IFswLjIsIDEuOCwgMC4yXSwgcG9zaXRpb246IFswLCAwLCAwLjNdIH0sXHJcbiAgICAgIHsgc2l6ZTogWzAuMiwgMS44LCAwLjJdLCBwb3NpdGlvbjogWzAsIDAsIC0wLjNdIH0sXHJcbiAgICAgIHsgc2l6ZTogWzAuMiwgMC4yLCAwLjhdLCBwb3NpdGlvbjogWzEsIDAsIDBdIH0sXHJcbiAgICAgIHsgc2l6ZTogWzAuMiwgMC4yLCAwLjhdLCBwb3NpdGlvbjogWy0xLCAwLCAwXSB9LFxyXG4gICAgICB7IHNpemU6IFswLjgsIDAuMiwgMC4yXSwgcG9zaXRpb246IFswLCAwLCAxXSB9LFxyXG4gICAgICB7IHNpemU6IFswLjgsIDAuMiwgMC4yXSwgcG9zaXRpb246IFswLCAwLCAtMV0gfSxcclxuICAgICAgeyBzaXplOiBbMC4yLCAwLjIsIDEuOF0sIHBvc2l0aW9uOiBbMCwgMC4zLCAwXSB9LFxyXG4gICAgICB7IHNpemU6IFswLjIsIDAuMiwgMS44XSwgcG9zaXRpb246IFswLCAtMC4zLCAwXSB9XHJcbiAgICBdO1xyXG4gICAgXHJcbiAgICBib3hlcy5mb3JFYWNoKGJveCA9PiB7XHJcbiAgICAgIGxldCB2ZXJ0aWNlc0JveCA9IGdlbmVyYXRlVmVydGljZXMoLi4uYm94LnNpemUsIGJveC5wb3NpdGlvbik7XHJcbiAgICAgIGxldCBub3JtYWxzQm94ID0gZ2VuZXJhdGVOb3JtYWxzKHZlcnRpY2VzQm94LCBmYWNlcyk7XHJcbiAgICAgIG5vcm1hbHMgPSBub3JtYWxzLmNvbmNhdChub3JtYWxzQm94KTtcclxuICAgICAgdmVydGljZXMgPSB2ZXJ0aWNlcy5jb25jYXQodG9WZXJ0aWNlcyh2ZXJ0aWNlc0JveCwgZmFjZXMpKTtcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmVydGljZXM6IHZlcnRpY2VzLFxyXG4gICAgICBmYWNlczogZmFjZXMsXHJcbiAgICAgIHRhbmdlbnRzOiB0YW5nZW50cyxcclxuICAgICAgYml0YW5nZW50czogYml0YW5nZW50cyxcclxuICAgICAgbm9ybWFsczogbm9ybWFscyxcclxuICAgICAgY29sb3JzOiBjb2xvcnMsXHJcbiAgICAgIHRleENvb3JkOiB0ZXhDb29yZCxcclxuICAgIH07XHJcbn1cclxuICBcclxuY29uc3QgaG9sbG93ID0gbmV3IE5vZGUoKTtcclxuaG9sbG93LmZsYWcgPSBcImhvbGxvd1wiO1xyXG5ob2xsb3cubmFtZSA9IFwiSG9sbG93IFRoaW5neVwiO1xyXG5ob2xsb3cubW9kZWwgPSBob2xsb3dUaGluZ3koKTtcclxuaG9sbG93LnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLCAwLCAwXSxcclxuICByb3RhdGU6IFs5MSwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuaG9sbG93LnBpY2tlZENvbG9yID0gWzAuOTIxNTY4NjI3LDAuNTY4NjI3NDUxLDAuODk4MDM5MjE2XSxcclxuaG9sbG93LnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmhvbGxvdy5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG52YXIgaG9sbG93TW9kZWwgPSBbXHJcbiAgICBob2xsb3dcclxuXVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbGxvd01vZGVsOyIsImltcG9ydCBOb2RlIGZyb20gXCIuLi9ub2RlLmpzXCI7XHJcblxyXG5jb25zdCBwaWcgPSBuZXcgTm9kZSgpO1xyXG5waWcuZmxhZyA9IFwiYXJ0aWN1bGF0ZWRcIjtcclxucGlnLm5hbWUgPSBcInBpZ1wiO1xyXG5waWcubW9kZWwgPSBib3hNb2RlbCgxLCAxLjUsIDEsIFswLCAwLCAwXSk7XHJcbnBpZy50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMCwgMCwgMF0sXHJcbiAgcm90YXRlOiBbMTAsIDU5LCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5waWcucGlja2VkQ29sb3IgPSBbMC45MjE1Njg2MjcsMC41Njg2Mjc0NTEsMC44OTgwMzkyMTZdLFxyXG5waWcuZGlmZnVzZSA9IFswLDAsMF0sXHJcbnBpZy5zcGVjdWxhciA9IFswLDAsMF0sXHJcbnBpZy5hbWJpZW50ID0gWzEsMSwxXSxcclxucGlnLnNoaW5pbmVzcyA9IDEsXHJcbnBpZy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5waWcuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgaGVhZCA9IG5ldyBOb2RlKCk7XHJcbmhlYWQubmFtZSA9IFwiaGVhZFwiO1xyXG5oZWFkLm1vZGVsID0gYm94TW9kZWwoMSwgMSwgMS4yLCBbLTEsIDAuNiwgMF0pO1xyXG5oZWFkLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5oZWFkLnBpY2tlZENvbG9yID0gWzAuOTIxNTY4NjI3LDAuNTY4NjI3NDUxLDAuODk4MDM5MjE2XSxcclxuaGVhZC5kaWZmdXNlID0gWzAsMCwwXSxcclxuaGVhZC5zcGVjdWxhciA9IFswLDAsMF0sXHJcbmhlYWQuYW1iaWVudCA9IFsxLDEsMV0sXHJcbmhlYWQuc2hpbmluZXNzID0gMSxcclxuaGVhZC52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5oZWFkLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCB3aGl0ZVJpZ2h0RXllID0gbmV3IE5vZGUoKTtcclxud2hpdGVSaWdodEV5ZS5uYW1lID0gXCJ3aGl0ZVJpZ2h0RXllXCI7XHJcbndoaXRlUmlnaHRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC4yLCBbLTEsIDAuNiwgMF0pO1xyXG53aGl0ZVJpZ2h0RXllLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWy0wLjUsIDAuMiwgMC40XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxud2hpdGVSaWdodEV5ZS5waWNrZWRDb2xvciA9IFswLjk5LDAuOTksMC45OV0sXHJcbndoaXRlUmlnaHRFeWUuZGlmZnVzZSA9IFswLDAsMF0sXHJcbndoaXRlUmlnaHRFeWUuc3BlY3VsYXIgPSBbMCwwLDBdLFxyXG53aGl0ZVJpZ2h0RXllLmFtYmllbnQgPSBbMSwxLDFdLFxyXG53aGl0ZVJpZ2h0RXllLnNoaW5pbmVzcyA9IDEsXHJcbndoaXRlUmlnaHRFeWUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxud2hpdGVSaWdodEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3Qgd2hpdGVMZWZ0RXllID0gbmV3IE5vZGUoKTtcclxud2hpdGVMZWZ0RXllLm5hbWUgPSBcIndoaXRlTGVmdEV5ZVwiO1xyXG53aGl0ZUxlZnRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC4yLCBbLTEsIDAuNiwgMF0pO1xyXG53aGl0ZUxlZnRFeWUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbLTAuNSwgMC4yLCAtMC40XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxud2hpdGVMZWZ0RXllLnBpY2tlZENvbG9yID0gWzAuOTksMC45OSwwLjk5XSxcclxud2hpdGVMZWZ0RXllLmRpZmZ1c2UgPSBbMCwwLDBdLFxyXG53aGl0ZUxlZnRFeWUuc3BlY3VsYXIgPSBbMCwwLDBdLFxyXG53aGl0ZUxlZnRFeWUuYW1iaWVudCA9IFsxLDEsMV0sXHJcbndoaXRlTGVmdEV5ZS5zaGluaW5lc3MgPSAxLFxyXG53aGl0ZUxlZnRFeWUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxud2hpdGVMZWZ0RXllLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCBibGFja1JpZ2h0RXllID0gbmV3IE5vZGUoKTtcclxuYmxhY2tSaWdodEV5ZS5uYW1lID0gXCJibGFja1JpZ2h0RXllXCI7XHJcbmJsYWNrUmlnaHRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC4yLCBbLTEsIDAuNiwgMF0pO1xyXG5ibGFja1JpZ2h0RXllLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuMDUsIDAsIDAuMDc1XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuYmxhY2tSaWdodEV5ZS5waWNrZWRDb2xvciA9IFswLDAsMF0sXHJcbmJsYWNrUmlnaHRFeWUuZGlmZnVzZSA9IFswLDAsMF0sXHJcbmJsYWNrUmlnaHRFeWUuc3BlY3VsYXIgPSBbMCwwLDBdLFxyXG5ibGFja1JpZ2h0RXllLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5ibGFja1JpZ2h0RXllLnNoaW5pbmVzcyA9IDEsXHJcbmJsYWNrUmlnaHRFeWUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuYmxhY2tSaWdodEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgYmxhY2tMZWZ0RXllID0gbmV3IE5vZGUoKTtcclxuYmxhY2tMZWZ0RXllLm5hbWUgPSBcImJsYWNrTGVmdEV5ZVwiO1xyXG5ibGFja0xlZnRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC4yLCBbLTEsIDAuNiwgMF0pO1xyXG5ibGFja0xlZnRFeWUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMC4wNSwgMCwgLTAuMDc1XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuYmxhY2tMZWZ0RXllLnBpY2tlZENvbG9yID0gWzAsMCwwXSxcclxuYmxhY2tMZWZ0RXllLmRpZmZ1c2UgPSBbMCwwLDBdLFxyXG5ibGFja0xlZnRFeWUuc3BlY3VsYXIgPSBbMCwwLDBdLFxyXG5ibGFja0xlZnRFeWUuYW1iaWVudCA9IFsxLDEsMV0sXHJcbmJsYWNrTGVmdEV5ZS5zaGluaW5lc3MgPSAxLFxyXG5ibGFja0xlZnRFeWUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuYmxhY2tMZWZ0RXllLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCBub3NlID0gbmV3IE5vZGUoKTtcclxubm9zZS5uYW1lID0gXCJub3NlXCI7XHJcbm5vc2UubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC40LCBbLTEuNSwgMC41NSwgMF0pO1xyXG5ub3NlLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuMDUsIDAsIDBdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5ub3NlLnBpY2tlZENvbG9yID0gWzAuNzY4NjI3NDUxLDAuMzc2NDcwNTg4LCAwLjc0NTA5ODAzOV0sXHJcbm5vc2UuZGlmZnVzZSA9IFswLDAsMF0sXHJcbm5vc2Uuc3BlY3VsYXIgPSBbMCwwLDBdLFxyXG5ub3NlLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5ub3NlLnNoaW5pbmVzcyA9IDEsXHJcbm5vc2Uudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxubm9zZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgcmlnaHRIb2xlID0gbmV3IE5vZGUoKTtcclxucmlnaHRIb2xlLm5hbWUgPSBcInJpZ2h0SG9sZVwiO1xyXG5yaWdodEhvbGUubW9kZWwgPSBib3hNb2RlbCgwLjE1LCAwLjIsIDAuMSwgWy0xLjYsIDAuNTUsIDBdKTtcclxucmlnaHRIb2xlLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuMDUsIDAsIDAuMV0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnJpZ2h0SG9sZS5waWNrZWRDb2xvciA9IFswLjkyMTU2ODYyNywwLjU2ODYyNzQ1MSwwLjg5ODAzOTIxNl0sXHJcbnJpZ2h0SG9sZS5kaWZmdXNlID0gWzAsMCwwXSxcclxucmlnaHRIb2xlLnNwZWN1bGFyID0gWzAsMCwwXSxcclxucmlnaHRIb2xlLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5yaWdodEhvbGUuc2hpbmluZXNzID0gMSxcclxucmlnaHRIb2xlLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbnJpZ2h0SG9sZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgbGVmdEhvbGUgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0SG9sZS5uYW1lID0gXCJsZWZ0SG9sZVwiO1xyXG5sZWZ0SG9sZS5tb2RlbCA9IGJveE1vZGVsKDAuMTUsIDAuMiwgMC4xLCBbLTEuNiwgMC41NSwgMF0pO1xyXG5sZWZ0SG9sZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLjA1LCAwLCAtMC4xXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubGVmdEhvbGUucGlja2VkQ29sb3IgPSBbMC45MjE1Njg2MjcsMC41Njg2Mjc0NTEsMC44OTgwMzkyMTZdLFxyXG5sZWZ0SG9sZS5kaWZmdXNlID0gWzAsMCwwXSxcclxubGVmdEhvbGUuc3BlY3VsYXIgPSBbMCwwLDBdLFxyXG5sZWZ0SG9sZS5hbWJpZW50ID0gWzEsMSwxXSxcclxubGVmdEhvbGUuc2hpbmluZXNzID0gMSxcclxubGVmdEhvbGUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxubGVmdEhvbGUuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IHJpZ2h0RnJvbnRMZWcgPSBuZXcgTm9kZSgpO1xyXG5yaWdodEZyb250TGVnLm5hbWUgPSBcInJpZ2h0RnJvbnRMZWdcIjtcclxucmlnaHRGcm9udExlZy5tb2RlbCA9IGJveE1vZGVsKDAuNSwgMC4yLCAwLjIsIFswLjEsIDAsIDAuMTVdKTtcclxucmlnaHRGcm9udExlZy50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFstMC42LCAtMC41LCAtMC40XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRGcm9udExlZy5waWNrZWRDb2xvciA9IFswLjc2ODYyNzQ1MSwwLjM3NjQ3MDU4OCwgMC43NDUwOTgwMzldLFxyXG5yaWdodEZyb250TGVnLmRpZmZ1c2UgPSBbMCwwLDBdLFxyXG5yaWdodEZyb250TGVnLnNwZWN1bGFyID0gWzAsMCwwXSxcclxucmlnaHRGcm9udExlZy5hbWJpZW50ID0gWzEsMSwxXSxcclxucmlnaHRGcm9udExlZy5zaGluaW5lc3MgPSAxLFxyXG5yaWdodEZyb250TGVnLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbnJpZ2h0RnJvbnRMZWcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IGxlZnRGcm9udExlZyA9IG5ldyBOb2RlKCk7XHJcbmxlZnRGcm9udExlZy5uYW1lID0gXCJsZWZ0RnJvbnRMZWdcIjtcclxubGVmdEZyb250TGVnLm1vZGVsID0gYm94TW9kZWwoMC41LCAwLjIsIDAuMiwgWzAuMSwgMCwgLTAuMTVdKTtcclxubGVmdEZyb250TGVnLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWy0wLjYsIC0wLjUsIDAuNF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmxlZnRGcm9udExlZy5waWNrZWRDb2xvciA9IFswLjc2ODYyNzQ1MSwwLjM3NjQ3MDU4OCwgMC43NDUwOTgwMzldLFxyXG5sZWZ0RnJvbnRMZWcuZGlmZnVzZSA9IFswLDAsMF0sXHJcbmxlZnRGcm9udExlZy5zcGVjdWxhciA9IFswLDAsMF0sXHJcbmxlZnRGcm9udExlZy5hbWJpZW50ID0gWzEsMSwxXSxcclxubGVmdEZyb250TGVnLnNoaW5pbmVzcyA9IDEsXHJcbmxlZnRGcm9udExlZy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5sZWZ0RnJvbnRMZWcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IHJpZ2h0UmVhckxlZyA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0UmVhckxlZy5uYW1lID0gXCJyaWdodFJlYXJMZWdcIjtcclxucmlnaHRSZWFyTGVnLm1vZGVsID0gYm94TW9kZWwoMC41LCAwLjIsIDAuMiwgWzAuNSwgMCwgMC4xNV0pO1xyXG5yaWdodFJlYXJMZWcudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMCwgLTAuNSwgLTAuNF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnJpZ2h0UmVhckxlZy5waWNrZWRDb2xvciA9IFswLjc2ODYyNzQ1MSwwLjM3NjQ3MDU4OCwgMC43NDUwOTgwMzldLFxyXG5yaWdodFJlYXJMZWcuZGlmZnVzZSA9IFswLDAsMF0sXHJcbnJpZ2h0UmVhckxlZy5zcGVjdWxhciA9IFswLDAsMF0sXHJcbnJpZ2h0UmVhckxlZy5hbWJpZW50ID0gWzEsMSwxXSxcclxucmlnaHRSZWFyTGVnLnNoaW5pbmVzcyA9IDEsXHJcbnJpZ2h0UmVhckxlZy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5yaWdodFJlYXJMZWcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IGxlZnRSZWFyTGVnID0gbmV3IE5vZGUoKTtcclxubGVmdFJlYXJMZWcubmFtZSA9IFwibGVmdFJlYXJMZWdcIjtcclxubGVmdFJlYXJMZWcubW9kZWwgPSBib3hNb2RlbCgwLjUsIDAuMiwgMC4yLCBbMC41LCAwLCAtMC4xNV0pO1xyXG5sZWZ0UmVhckxlZy50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLCAtMC41LCAwLjRdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5sZWZ0UmVhckxlZy5waWNrZWRDb2xvciA9IFswLjc2ODYyNzQ1MSwwLjM3NjQ3MDU4OCwgMC43NDUwOTgwMzldLFxyXG5sZWZ0UmVhckxlZy5kaWZmdXNlID0gWzAsMCwwXSxcclxubGVmdFJlYXJMZWcuc3BlY3VsYXIgPSBbMCwwLDBdLFxyXG5sZWZ0UmVhckxlZy5hbWJpZW50ID0gWzEsMSwxXSxcclxubGVmdFJlYXJMZWcuc2hpbmluZXNzID0gMSxcclxubGVmdFJlYXJMZWcudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxubGVmdFJlYXJMZWcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcblxyXG5oZWFkLnNldFBhcmVudChwaWcpO1xyXG53aGl0ZVJpZ2h0RXllLnNldFBhcmVudChoZWFkKTtcclxud2hpdGVMZWZ0RXllLnNldFBhcmVudChoZWFkKTtcclxuYmxhY2tSaWdodEV5ZS5zZXRQYXJlbnQod2hpdGVSaWdodEV5ZSk7XHJcbmJsYWNrTGVmdEV5ZS5zZXRQYXJlbnQod2hpdGVMZWZ0RXllKTtcclxubm9zZS5zZXRQYXJlbnQoaGVhZCk7XHJcbnJpZ2h0SG9sZS5zZXRQYXJlbnQobm9zZSk7XHJcbmxlZnRIb2xlLnNldFBhcmVudChub3NlKTtcclxucmlnaHRGcm9udExlZy5zZXRQYXJlbnQocGlnKTtcclxubGVmdEZyb250TGVnLnNldFBhcmVudChwaWcpO1xyXG5yaWdodFJlYXJMZWcuc2V0UGFyZW50KHBpZyk7XHJcbmxlZnRSZWFyTGVnLnNldFBhcmVudChwaWcpO1xyXG5cclxudmFyIHBpZ01vZGVsID0gW1xyXG4gICAgcGlnXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwaWdNb2RlbDtcclxuICAiLCJpbXBvcnQgTm9kZSBmcm9tIFwiLi4vbm9kZS5qc1wiO1xyXG5cclxuZnVuY3Rpb24gcmluZygpIHtcclxuICAgIGxldCB2ZXJ0aWNlcyA9IFtdO1xyXG4gICAgbGV0IGNvbG9ycyA9IFtdO1xyXG4gICAgbGV0IHRhbmdlbnRzID0gW107XHJcbiAgICBsZXQgYml0YW5nZW50cyA9IFtdO1xyXG4gICAgbGV0IG5vcm1hbHMgPSBbXTtcclxuICAgIGxldCB0ZXhDb29yZCA9IFtdO1xyXG4gICAgbGV0IGZhY2VzID0gZ2VuZXJhdGVGYWNlcygpO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVCb3hlcygpe1xyXG4gICAgbGV0IGJveGVzID0gW107XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMzYwOyArK2kpe1xyXG4gICAgICBsZXQgcmFkID0gZGVnVG9SYWQoaSk7XHJcbiAgICAgIGxldCBwb3NpdGlvbiA9IFtNYXRoLmNvcyhyYWQpLCBNYXRoLnNpbihyYWQpLCAwXTtcclxuICAgICAgbGV0IHNpemUgPSBbMC4wNSwgMC4wNSwgMC44XTtcclxuICAgICAgYm94ZXMucHVzaCh7IHNpemU6IHNpemUsIHBvc2l0aW9uOiBwb3NpdGlvbiB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBib3hlcztcclxuICB9XHJcblxyXG4gIGNvbnN0IGJveGVzID0gZ2VuZXJhdGVCb3hlcygpO1xyXG4gIFxyXG4gIGJveGVzLmZvckVhY2goYm94ID0+IHtcclxuICAgIGxldCB2ZXJ0aWNlc0JveCA9IGdlbmVyYXRlVmVydGljZXMoLi4uYm94LnNpemUsIGJveC5wb3NpdGlvbik7XHJcbiAgICBsZXQgbm9ybWFsc0JveCA9IGdlbmVyYXRlTm9ybWFscyh2ZXJ0aWNlc0JveCwgZmFjZXMpO1xyXG4gICAgbm9ybWFscyA9IG5vcm1hbHMuY29uY2F0KG5vcm1hbHNCb3gpO1xyXG4gICAgdmVydGljZXMgPSB2ZXJ0aWNlcy5jb25jYXQodG9WZXJ0aWNlcyh2ZXJ0aWNlc0JveCwgZmFjZXMpKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHZlcnRpY2VzOiB2ZXJ0aWNlcyxcclxuICAgIGZhY2VzOiBmYWNlcyxcclxuICAgIHRhbmdlbnRzOiB0YW5nZW50cyxcclxuICAgIGJpdGFuZ2VudHM6IGJpdGFuZ2VudHMsXHJcbiAgICBub3JtYWxzOiBub3JtYWxzLFxyXG4gICAgY29sb3JzOiBjb2xvcnMsXHJcbiAgICB0ZXhDb29yZDogdGV4Q29vcmQsXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgaG9sbG93ID0gbmV3IE5vZGUoKTtcclxuaG9sbG93LmZsYWcgPSBcImhvbGxvd1wiO1xyXG5ob2xsb3cubmFtZSA9IFwiUmluZ1wiO1xyXG5ob2xsb3cubW9kZWwgPSByaW5nKCk7XHJcbmhvbGxvdy50cmFuc2Zvcm0gPSB7XHJcbnRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG5yb3RhdGU6IFsxMCwgMCwgMF0sXHJcbnNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmhvbGxvdy5waWNrZWRDb2xvciA9IFs0NS8yNTUsMjE1LzI1NSw5Ni8yNTVdLFxyXG5ob2xsb3cudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5ob2xsb3cuYW5pbWF0aW9uID0ge1xyXG5pc0FuaW1hdGU6IGZhbHNlLFxyXG5kZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG52YXIgaG9sbG93UmluZ01vZGVsID0gW1xyXG4gIGhvbGxvd1xyXG5dXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9sbG93UmluZ01vZGVsOyIsIi8vIGNvbnN0IHsgZGVmYXVsdDogTWF0NCB9ID0gcmVxdWlyZShcIi4vc3RydWN0cy9tYXRoL01hdDRcIik7XHJcbmltcG9ydCBNYXQ0IGZyb20gXCIuL21hdGgvTWF0NC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XHJcbiAgICAgICAgdGhpcy5sb2NhbE1hdHJpeCA9IE1hdDQuZ2V0SWRlbnRpdHkoKTtcclxuICAgICAgICB0aGlzLndvcmxkTWF0cml4ID0gTWF0NC5nZXRJZGVudGl0eSgpO1xyXG4gICAgICAgIHRoaXMud29ybGRJbnZlcnNlTWF0cml4ID0gTWF0NC5nZXRJZGVudGl0eSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdvcmxkTWF0cml4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndvcmxkTWF0cml4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgc2V0UGFyZW50KHBhcmVudCkge1xyXG4gICAgICAgIC8vIGFscmVhZHkgaGF2ZSBwYXJlbnRcclxuICAgICAgICBpZiAodGhpcy5wYXJlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQubmFtZTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICBzZXRXb3JsZE10eChtYXRyaXgpIHtcclxuICAgICAgaWYgKG1hdHJpeCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMud29ybGRNYXRyaXggPSBNYXQ0Lm11bHRpcGx5KG1hdHJpeCwgdGhpcy5sb2NhbE1hdHJpeCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy53b3JsZE1hdHJpeCA9IHRoaXMubG9jYWxNYXRyaXg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgY29uc3Qgd29ybGRNYXRyaXggPSB0aGlzLndvcmxkTWF0cml4O1xyXG4gICAgICB0aGlzLndvcmxkSW52ZXJzZU1hdHJpeCA9IE1hdDQudHJhbnNwb3NlKFxyXG4gICAgICAgIE1hdDQuaW52ZXJzZSh0aGlzLndvcmxkTWF0cml4KVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIGNoaWxkLnNldFdvcmxkTXR4KHdvcmxkTWF0cml4KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICIsImltcG9ydCBOb2RlIGZyb20gXCIuLi9zdHJ1Y3RzL25vZGUuanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5pbWF0aW9ue1xyXG5cclxuICAgIHN0YXRpYyBwYXJzZUFuaW1hdGlvbkZ1bmN0aW9uKG1vZGVsKXtcclxuICAgICAgICBsZXQgYW5pbWF0aW9uID0gbW9kZWwuYW5pbWF0aW9uO1xyXG4gICAgICAgIGlmKGFuaW1hdGlvbi5pc0FuaW1hdGUpe1xyXG4gICAgICAgICAgICAvLyBwYXJzZSBzdHJpbmcgdG8gZnVuY3Rpb25cclxuICAgICAgICAgICAgbGV0IF9hbmltYXRpb25GdW5jdGlvbiA9IGV2YWwoYW5pbWF0aW9uLmFuaW1hdGlvbkZ1bmN0aW9uKVxyXG4gICAgICAgICAgICByZXR1cm4gX2FuaW1hdGlvbkZ1bmN0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYW5pbWF0ZShwYXJlbnRfbW9kZWwsIGRlbHRhVGltZSl7XHJcbiAgICAgICAgbGV0IGFuaW1hdGlvbiA9IHBhcmVudF9tb2RlbC5hbmltYXRpb247XHJcbiAgICAgICAgICAgIGlmKGFuaW1hdGlvbi5pc0FuaW1hdGUpe1xyXG4gICAgICAgICAgICAgICAgbGV0IF9hbmltYXRpb25GdW5jdGlvbiA9IEFuaW1hdGlvbi5wYXJzZUFuaW1hdGlvbkZ1bmN0aW9uKHBhcmVudF9tb2RlbCk7XHJcbiAgICAgICAgICAgICAgICBpZihfYW5pbWF0aW9uRnVuY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdHIgPSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmFuaW1hdGlvbkZ1bmN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uYW5pbWF0aW9uRnVuY3Rpb24gPSBfYW5pbWF0aW9uRnVuY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5hbmltYXRpb25GdW5jdGlvbihwYXJlbnRfbW9kZWwsIGRlbHRhVGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5hbmltYXRpb25GdW5jdGlvbiA9IHN0cjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihsZXQgbW9kZWwgb2YgcGFyZW50X21vZGVsLmNoaWxkcmVuKXsgICAgXHJcbiAgICAgICAgICAgIEFuaW1hdGlvbi5hbmltYXRlKG1vZGVsLCBkZWx0YVRpbWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJlY3Vyc2UgZWFjaCBub2RlIGNoaWxkXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldEF1dG8ocGFyZW50X21vZGVsKXtcclxuICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmlzQXV0byA9ICFwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmlzQXV0bztcclxuICAgICAgICBmb3IobGV0IG1vZGVsIG9mIHBhcmVudF9tb2RlbC5jaGlsZHJlbil7ICAgIFxyXG4gICAgICAgICAgICBBbmltYXRpb24uc2V0QXV0byhtb2RlbClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHBsYXlBbmltYXRpb24ocGFyZW50X21vZGVsKXtcclxuICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmlzQW5pbWF0ZSA9IHRydWU7XHJcbiAgICAgICAgaWYocGFyZW50X21vZGVsLmFuaW1hdGlvbi5pc1JldmVyc2Upe1xyXG4gICAgICAgICAgICBpZihwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lcyl7XHJcbiAgICAgICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lID0gcGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHBhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBwYXJlbnRfbW9kZWwuY2hpbGRyZW4peyAgICBcclxuICAgICAgICAgICAgQW5pbWF0aW9uLnBsYXlBbmltYXRpb24obW9kZWwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwYXVzZUNvbnRpbnVlQW5pbWF0aW9uKHBhcmVudF9tb2RlbCl7XHJcbiAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5pc0FuaW1hdGUgPSAhcGFyZW50X21vZGVsLmFuaW1hdGlvbi5pc0FuaW1hdGU7XHJcbiAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBwYXJlbnRfbW9kZWwuY2hpbGRyZW4peyAgICBcclxuICAgICAgICAgICAgQW5pbWF0aW9uLnBhdXNlQ29udGludWVBbmltYXRpb24obW9kZWwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZXZlcnNlQW5pbWF0aW9uKHBhcmVudF9tb2RlbCl7XHJcbiAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5pc1JldmVyc2UgPSAhcGFyZW50X21vZGVsLmFuaW1hdGlvbi5pc1JldmVyc2U7XHJcbiAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBwYXJlbnRfbW9kZWwuY2hpbGRyZW4peyAgICBcclxuICAgICAgICAgICAgQW5pbWF0aW9uLnJldmVyc2VBbmltYXRpb24obW9kZWwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhbmltYXRpb25TY3JpcHQoKXtcclxuICAgICAgICBjb25zdCBhbmltYXRpb25TY3JpcHQgPSBgKChfbm9kZSwgZGVsdGFUaW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmcmFtZXMgPSBfbm9kZS5hbmltYXRpb24uZnJhbWVzO1xyXG4gICAgICAgICAgICBpZihfbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lID49IGZyYW1lcy5sZW5ndGggfHwgX25vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA8IDApe1xyXG4gICAgICAgICAgICAgICAgaWYoX25vZGUuYW5pbWF0aW9uLmlzQXV0byl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoX25vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA8IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lID0gZnJhbWVzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF9ub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPSBfbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lICUgZnJhbWVzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfbm9kZS5hbmltYXRpb24uaXNBbmltYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBfbm9kZS50cmFuc2Zvcm0gPSBmcmFtZXNbX25vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZV07XHJcbiAgICAgICAgICAgICAgICBpZihfbm9kZS5hbmltYXRpb24uaXNSZXZlcnNlKXtcclxuICAgICAgICAgICAgICAgICAgICBfbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lLS07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIF9ub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pYFxyXG4gICAgICAgIHJldHVybiBhbmltYXRpb25TY3JpcHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5leHRGcmFtZShwYXJlbnRfbW9kZWwpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzKXtcclxuICAgICAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUrKztcclxuICAgICAgICAgICAgaWYocGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPj0gcGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lID0gcGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYXJlbnRfbW9kZWwudHJhbnNmb3JtID0gcGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXNbcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IG1vZGVsIG9mIHBhcmVudF9tb2RlbC5jaGlsZHJlbil7ICAgIFxyXG4gICAgICAgICAgICBBbmltYXRpb24ubmV4dEZyYW1lKG1vZGVsKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcHJldkZyYW1lKHBhcmVudF9tb2RlbCl7XHJcbiAgICAgICAgaWYocGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMpe1xyXG4gICAgICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZS0tO1xyXG4gICAgICAgICAgICBpZihwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA8IDApe1xyXG4gICAgICAgICAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhcmVudF9tb2RlbC50cmFuc2Zvcm0gPSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lc1twYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgbW9kZWwgb2YgcGFyZW50X21vZGVsLmNoaWxkcmVuKXsgICAgXHJcbiAgICAgICAgICAgIEFuaW1hdGlvbi5wcmV2RnJhbWUobW9kZWwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmaXJzdEZyYW1lKHBhcmVudF9tb2RlbCl7XHJcbiAgICAgICAgaWYocGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMpe1xyXG4gICAgICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICAgICAgICAgIHBhcmVudF9tb2RlbC50cmFuc2Zvcm0gPSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lc1twYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgbW9kZWwgb2YgcGFyZW50X21vZGVsLmNoaWxkcmVuKXsgICAgXHJcbiAgICAgICAgICAgIEFuaW1hdGlvbi5maXJzdEZyYW1lKG1vZGVsKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbGFzdEZyYW1lKHBhcmVudF9tb2RlbCl7XHJcbiAgICAgICAgaWYocGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMpe1xyXG4gICAgICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA9IHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIHBhcmVudF9tb2RlbC50cmFuc2Zvcm0gPSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lc1twYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgbW9kZWwgb2YgcGFyZW50X21vZGVsLmNoaWxkcmVuKXsgICAgXHJcbiAgICAgICAgICAgIEFuaW1hdGlvbi5sYXN0RnJhbWUobW9kZWwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFZlYzMgZnJvbSBcIi4uL3N0cnVjdHMvbWF0aC9WZWMzLmpzXCJcclxuaW1wb3J0IE1hdDQgZnJvbSBcIi4uL3N0cnVjdHMvbWF0aC9NYXQ0LmpzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYXtcclxuICAgIHN0YXRpYyBwcm9qZWN0aW9uT3J0b2dyYXBoaWMobGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIpIHtcclxuICAgICAgICAvLyBOb3RlOiBUaGlzIG1hdHJpeCBmbGlwcyB0aGUgWSBheGlzIHNvIDAgaXMgYXQgdGhlIHRvcC5cclxuICAgICAgICBjb25zdCB3aWR0aCA9IHJpZ2h0LWxlZnRcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSB0b3AtYm90dG9tXHJcbiAgICAgICAgY29uc3QgZGVwdGggPSBmYXIgLSBuZWFyXHJcbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbFJhdGlvID0gKHJpZ2h0ICsgbGVmdCkgLyB3aWR0aFxyXG4gICAgICAgIGNvbnN0IHZlcnRpY2FsUmF0aW8gPSAodG9wICsgYm90dG9tKSAvIGhlaWdodFxyXG4gICAgICAgIGNvbnN0IGRlcHRoUmF0aW8gPSAoZmFyICsgbmVhcikgLyBkZXB0aFxyXG5cclxuICAgICAgICByZXR1cm4gWzIgLyAod2lkdGgpLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMiAvIChoZWlnaHQpLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgLTIgLyAoZGVwdGgpLCAwLFxyXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbFJhdGlvLCB2ZXJ0aWNhbFJhdGlvLCBkZXB0aFJhdGlvLCAxXTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIHByb2plY3Rpb25QZXJzcGVjdGl2ZShmb3YsIGFzcGVjdCwgbmVhciwgZmFyKXtcclxuICAgICAgICBjb25zdCBmID0gMS4wIC8gTWF0aC50YW4oZm92IC8gMilcclxuICAgICAgICBjb25zdCByYW5nZUludiA9IDEgLyAobmVhciAtIGZhcilcclxuXHJcbiAgICAgICAgcmV0dXJuIFtmIC8gYXNwZWN0LCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgZiwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIChuZWFyICsgZmFyKSAqIHJhbmdlSW52LCAtMSxcclxuICAgICAgICAgICAgICAgIDAsIDAsIG5lYXIgKiBmYXIgKiByYW5nZUludiAqIDIsIDBdXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHByb2plY3Rpb25PYmxpcXVlKHRoZXRhLCBwaGkpe1xyXG5cclxuICAgICAgICB2YXIgdCA9IE1hdGgudGFuKHRoZXRhKVxyXG4gICAgICAgIHQgPSB0ID09IDAgPyAwLjAwMDAxIDogdFxyXG4gICAgICAgIHZhciBwID0gTWF0aC50YW4ocGhpKVxyXG4gICAgICAgIHAgPSBwID09IDAgPyAwLjAwMDAxIDogcFxyXG4gICAgICAgIHJldHVybiBbMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAtMS90LCAtMS9wLCAxLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMV1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbG9va0RpcmVjdGlvbihleWUsIGNlbnRlciwgdXApe1xyXG4gICAgICAgIC8vIG5vcm1hbGl6ZSBlYWNoIGFycmF5XHJcbiAgICAgICAgLy8gY2hhbmdlIGFzIFZlYzMgZnJvbSBhcnJheVxyXG4gICAgICAgIGxldCBfZXllID0gVmVjMy5mcm9tQXJyYXkoZXllKVxyXG4gICAgICAgIGxldCBfY2VudGVyID0gVmVjMy5mcm9tQXJyYXkoY2VudGVyKVxyXG4gICAgICAgIGxldCBfdXAgPSBWZWMzLmZyb21BcnJheSh1cClcclxuICAgIFxyXG5cclxuXHJcbiAgICAgICAgY29uc3QgZiA9IFZlYzMudW5pdFZlY3RvcihWZWMzLnN1YihfZXllLCBfY2VudGVyKSkgLy8gekF4aXNcclxuICAgICAgICBjb25zdCBzID0gVmVjMy51bml0VmVjdG9yKFZlYzMuY3Jvc3MoZiwgX3VwKSkgLy8geEF4aXNcclxuICAgICAgICBjb25zdCB1ID0gVmVjMy51bml0VmVjdG9yKFZlYzMuY3Jvc3MocywgZikpXHJcblxyXG4gICAgICAgIHJldHVybiBbcy54LCBzLnksIHMueiwgMCxcclxuICAgICAgICAgICAgICAgIHUueCwgdS55LCB1LnosIDAsXHJcbiAgICAgICAgICAgICAgICBmLngsIGYueSwgZi56LCAwLFxyXG4gICAgICAgICAgICAgICAgZXllWzBdLCBleWVbMV0sIGV5ZVsyXSwgMV1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1ha2VaVG9XTWF0cml4KGZ1ZGdlRmFjdG9yKXtcclxuICAgICAgICByZXR1cm4gWzEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIGZ1ZGdlRmFjdG9yLCAxXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwcm9qZWN0aW9uTWF0cml4KHByb2plY3Rpb25fdHlwZSwgX2ZvdiwgX2FzcGVjdCxfbmVhciwgX2ZhciwgdGhldGEgPSA5MCwgcGhpID0gOTApe1xyXG4gICAgICAgIGNvbnN0IGFzcGVjdCA9IF9hc3BlY3Q7XHJcbiAgICAgICAgY29uc3QgZm92ID0gX2ZvdjtcclxuICAgICAgICBjb25zdCBsZWZ0ID0gLTI7XHJcbiAgICAgICAgY29uc3QgcmlnaHQgPSAyO1xyXG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IC0yO1xyXG4gICAgICAgIGNvbnN0IHRvcCA9IDI7XHJcbiAgICAgICAgY29uc3QgZmFyT3J0aG8gPSBfZmFyO1xyXG4gICAgICAgIGNvbnN0IG5lYXJPcnRobyA9IC1mYXJPcnRobztcclxuICAgIFxyXG4gICAgICAgIHN3aXRjaCAocHJvamVjdGlvbl90eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJvcnRob2dyYXBoaWNcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBDYW1lcmEucHJvamVjdGlvbk9ydG9ncmFwaGljKGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhck9ydGhvLCBmYXJPcnRobylcclxuICAgICAgICAgICAgY2FzZSBcIm9ibGlxdWVcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICAgICAgICAgICAgICAgIENhbWVyYS5wcm9qZWN0aW9uT2JsaXF1ZSh0aGV0YSwgcGhpKSxcclxuICAgICAgICAgICAgICAgICAgICBDYW1lcmEucHJvamVjdGlvbk9ydG9ncmFwaGljKGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhck9ydGhvLCBmYXJPcnRobylcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwZXJzcGVjdGl2ZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIENhbWVyYS5wcm9qZWN0aW9uUGVyc3BlY3RpdmUoXHJcbiAgICAgICAgICAgICAgICAgICAgZm92LFxyXG4gICAgICAgICAgICAgICAgICAgIGFzcGVjdCxcclxuICAgICAgICAgICAgICAgICAgICBfbmVhcixcclxuICAgICAgICAgICAgICAgICAgICBfZmFyXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIENhbWVyYS5wcm9qZWN0aW9uT3J0b2dyYXBoaWMobGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyT3J0aG8sIGZhck9ydGhvKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdmlld01hdHJpeChvcmllbnRhdGlvbiwgbG9va0F0LCB1cCl7XHJcbiAgICAgICAgbGV0IFtyb2xsLCBwaXRjaCwgcmFkaXVzXSA9IG9yaWVudGF0aW9uXHJcblxyXG4gICAgICAgIC8vIHJvbGwsIHBpdGNoLCByYWRpdXNcclxuICAgICAgICB2YXIgY2FtZXJhTWF0cml4ID0gTWF0NC5tdWx0aXBseShcclxuICAgICAgICAgICAgTWF0NC5tdWx0aXBseShcclxuICAgICAgICAgICAgICAgIE1hdDQucm90YXRlWShwaXRjaCksXHJcbiAgICAgICAgICAgICAgICBNYXQ0LnJvdGF0ZVgocm9sbCkpLFxyXG4gICAgICAgICAgICBNYXQ0LnRyYW5zbGF0ZSgwLCAwLCByYWRpdXMpXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICB2YXIgY2FtZXJhUG9zaXRpb24gPSBbXHJcbiAgICAgICAgICAgIGNhbWVyYU1hdHJpeFsxMl0sXHJcbiAgICAgICAgICAgIGNhbWVyYU1hdHJpeFsxM10sXHJcbiAgICAgICAgICAgIGNhbWVyYU1hdHJpeFsxNF1cclxuICAgICAgICBdXHJcblxyXG4gICAgICAgIHZhciBjYW1lcmFNYXRyaXggPSBDYW1lcmEubG9va0RpcmVjdGlvbihjYW1lcmFQb3NpdGlvbiwgbG9va0F0LCB1cClcclxuXHJcbiAgICAgICAgdmFyIHZpZXdNYXRyaXggPSBNYXQ0LmludmVyc2UoY2FtZXJhTWF0cml4KVxyXG5cclxuICAgICAgICByZXR1cm4gdmlld01hdHJpeFxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhcGVyVGV4dHVyZShnbCkge1xyXG4gIGNvbnN0IHRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XHJcbiAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XHJcbiAgZ2wudGV4SW1hZ2UyRChcclxuICAgIGdsLlRFWFRVUkVfMkQsXHJcbiAgICAwLFxyXG4gICAgZ2wuUkdCQSxcclxuICAgIDEsXHJcbiAgICAxLFxyXG4gICAgMCxcclxuICAgIGdsLlJHQkEsXHJcbiAgICBnbC5VTlNJR05FRF9CWVRFLFxyXG4gICAgbmV3IFVpbnQ4QXJyYXkoWzAsIDAsIDAsIDBdKVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcclxuICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgaW1hZ2UpO1xyXG4gICAgaWYgKGlzUG93ZXJPZjIoaW1hZ2Uud2lkdGgpICYmIGlzUG93ZXJPZjIoaW1hZ2UuaGVpZ2h0KSkge1xyXG4gICAgICBnbC5nZW5lcmF0ZU1pcG1hcChnbC5URVhUVVJFXzJEKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBpbWFnZS5zcmMgPSBcIi4vbWFwcGluZy9wYXBlci5qcGVnXCI7IFxyXG4gIHJldHVybiB0ZXh0dXJlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1Bvd2VyT2YyKHZhbHVlKSB7XHJcbiAgcmV0dXJuICh2YWx1ZSAmICh2YWx1ZSAtIDEpKSA9PSAwO1xyXG59IFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVudmlyb25tZW50VGV4dHVyZShnbCkge1xyXG4gIGNvbnN0IHRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XHJcbiAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV9DVUJFX01BUCwgdGV4dHVyZSk7XHJcblxyXG4gIGNvbnN0IGZhY2VJbmZvcyA9IFtcclxuICAgIHsgdGFyZ2V0OiBnbC5URVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1gsIHVybDogXCIuL21hcHBpbmcvZW52aXJvbm1lbnQuanBnXCIgfSxcclxuICAgIHsgdGFyZ2V0OiBnbC5URVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1gsIHVybDogXCIuL21hcHBpbmcvZW52aXJvbm1lbnQuanBnXCIgfSxcclxuICAgIHsgdGFyZ2V0OiBnbC5URVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1ksIHVybDogXCIuL21hcHBpbmcvZW52aXJvbm1lbnQuanBnXCIgfSxcclxuICAgIHsgdGFyZ2V0OiBnbC5URVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1ksIHVybDogXCIuL21hcHBpbmcvZW52aXJvbm1lbnQuanBnXCIgfSxcclxuICAgIHsgdGFyZ2V0OiBnbC5URVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1osIHVybDogXCIuL21hcHBpbmcvZW52aXJvbm1lbnQuanBnXCIgfSxcclxuICAgIHsgdGFyZ2V0OiBnbC5URVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1osIHVybDogXCIuL21hcHBpbmcvZW52aXJvbm1lbnQuanBnXCIgfSxcclxuICBdO1xyXG5cclxuICBmYWNlSW5mb3MuZm9yRWFjaCgoZmFjZUluZm8pID0+IHtcclxuICAgIGNvbnN0IHsgdGFyZ2V0LCB1cmwgfSA9IGZhY2VJbmZvO1xyXG5cclxuICAgIGdsLnRleEltYWdlMkQoXHJcbiAgICAgIHRhcmdldCxcclxuICAgICAgMCxcclxuICAgICAgZ2wuUkdCQSxcclxuICAgICAgNTEyLFxyXG4gICAgICA1MTIsXHJcbiAgICAgIDAsXHJcbiAgICAgIGdsLlJHQkEsXHJcbiAgICAgIGdsLlVOU0lHTkVEX0JZVEUsXHJcbiAgICAgIG51bGxcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLnNyYyA9IHVybDtcclxuICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV9DVUJFX01BUCwgdGV4dHVyZSk7XHJcbiAgICAgIGdsLnRleEltYWdlMkQodGFyZ2V0LCAwLCBnbC5SR0JBLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBpbWFnZSk7XHJcbiAgICAgIGdsLmdlbmVyYXRlTWlwbWFwKGdsLlRFWFRVUkVfQ1VCRV9NQVApO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGdsLmdlbmVyYXRlTWlwbWFwKGdsLlRFWFRVUkVfQ1VCRV9NQVApO1xyXG4gIGdsLnRleFBhcmFtZXRlcmkoXHJcbiAgICBnbC5URVhUVVJFX0NVQkVfTUFQLFxyXG4gICAgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLFxyXG4gICAgZ2wuTElORUFSX01JUE1BUF9MSU5FQVJcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQnVtcFRleHR1cmUoZ2wpIHtcclxuICBjb25zdCB0ZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xyXG4gIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xyXG4gIGdsLnRleEltYWdlMkQoXHJcbiAgICBnbC5URVhUVVJFXzJELCBcclxuICAgIDAsIFxyXG4gICAgZ2wuUkdCQSwgXHJcbiAgICAxLCBcclxuICAgIDEsIFxyXG4gICAgMCwgXHJcbiAgICBnbC5SR0JBLCBcclxuICAgIGdsLlVOU0lHTkVEX0JZVEUsIFxyXG4gICAgbmV3IFVpbnQ4QXJyYXkoWzI1NSwgMCwgMCwgMjU1XSlcclxuICApO1xyXG5cclxuICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBpbWFnZS5zcmMgPSBcIi4vbWFwcGluZy9idW1wLnBuZ1wiO1xyXG4gIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xyXG4gICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBpbWFnZSk7XHJcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTElORUFSKTtcclxuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIpO1xyXG4gIH1cclxufVxyXG4gICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=