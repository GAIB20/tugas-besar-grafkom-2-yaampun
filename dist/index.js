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
/* harmony export */   handleCurrentModelFrame: () => (/* binding */ handleCurrentModelFrame),
/* harmony export */   handleCurrentNodeFrame: () => (/* binding */ handleCurrentNodeFrame),
/* harmony export */   handleTotalModelFrame: () => (/* binding */ handleTotalModelFrame),
/* harmony export */   handleTotalNodeFrame: () => (/* binding */ handleTotalNodeFrame),
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
// camera default view
const defaultView = document.getElementById('default-view');

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

// frame handler
const currentModelFrame = document.getElementById('current-model-frame');
const currentNodeFrame = document.getElementById('current-node-frame');
const totalModelFrame = document.getElementById('total-model-frame');
const totalNodeFrame = document.getElementById('total-node-frame');

// add frame handler
const addFrameButton = document.getElementById('cancel-add-frame')

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
const ambient = document.getElementById('ambient-slider');

// colors
const basicColor = document.getElementById('basic-color');
const diffuseColor = document.getElementById('diffuse-color');
const specularColor = document.getElementById('specular-color');

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
            handleTotalNodeFrame(object)
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

    // change phong slider
    redAmbient.value = node.ambient[0];
    greenAmbient.value = node.ambient[1];
    blueAmbient.value = node.ambient[2];
    shininess.value = node.shininess;
    
    basicColor.value = rgbToHex(node.pickedColor);
    diffuseColor.value = rgbToHex(node.diffuse);
    specularColor.value = rgbToHex(node.specular);
    
    ambient.value = node.const.ka;
    diffuse.value = node.const.kd;
    specular.value = node.const.ks;
    

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

// defautl view
defaultView.addEventListener('click', function(){
    cameraRadius.value = 50;
    cameraRoll.value = 0;
    cameraPitch.value = 0;
    cameraTheta.value = 90;
    cameraPhi.value = 90;
    handleCameraView(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot);
    document.getElementById('camera-radius-slider-value').textContent = 5;
    document.getElementById('camera-roll-slider-value').textContent = 0;
    document.getElementById('camera-pitch-slider-value').textContent = 0;
    document.getElementById('camera-theta-slider-value').textContent = 90;
    document.getElementById('camera-phi-slider-value').textContent = 90;
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
    node.specular = hexToRgb(specularColor.value);
    node.diffuse = hexToRgb(diffuseColor.value);
    node.const.ks = parseFloat(specular.value);
    node.const.kd = parseFloat(diffuse.value);
    node.const.ka = parseFloat(ambient.value);
    for(let child of node.children){
        handlePhong(child);
    }
}

shininess.addEventListener('input', function(){
    handlePhong(_index_js__WEBPACK_IMPORTED_MODULE_0__.target);
});

ambient.addEventListener('input', function(){
    handlePhong(_index_js__WEBPACK_IMPORTED_MODULE_0__.target);
});

specular.addEventListener('input', function(){
    handlePhong(_index_js__WEBPACK_IMPORTED_MODULE_0__.target);
});

diffuse.addEventListener('input', function(){
    handlePhong(_index_js__WEBPACK_IMPORTED_MODULE_0__.target);
});

specularColor.addEventListener('input', function(){
    handlePhong(_index_js__WEBPACK_IMPORTED_MODULE_0__.target);
});

diffuseColor.addEventListener('input', function(){
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

/** HANDLE FRAME */

// total frame
function handleTotalModelFrame(parent_node){
    // get value of total model frame text
    let _totalFrameText = totalModelFrame.textContent;
    // get total frame
    let _totalFrame = _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].totalModelFrames(parent_node);
    console.log(_totalFrame)
    // set total frame
    _totalFrameText = "Total Model Frames: "+ _totalFrame;
    totalModelFrame.textContent = _totalFrameText;


}

function handleTotalNodeFrame(node){
    let _totalFrameText = totalNodeFrame.textContent;
    let _totalFrame = _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].totalNodeFrames(node);
    _totalFrameText = "Total Node Frames: " + _totalFrame
    totalNodeFrame.textContent = _totalFrameText;
}

function handleCurrentModelFrame(parent_model){
    let _currentFrame = _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].currentModelFrame(parent_model)
    currentModelFrame.textContent = "Current Model Frame: " + _currentFrame
}

function handleCurrentNodeFrame(node){
    let _currFrame = _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].currentNodeFrame(node)
    currentNodeFrame.textContent = "Current Node Frame: " + _currFrame
}

// add Frame mechanism
addFrameButton.addEventListener('click', function(){
    const addFrameModal = document.getElementById('add-frame-modal')
    addFrameModal.className = addFrameModal.className + " hidden"
})

basicColor.addEventListener('input', function(){
    _index_js__WEBPACK_IMPORTED_MODULE_0__.target.pickedColor = hexToRgb(basicColor.value);
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
            ka: object.const.ka,
            kd: object.const.kd,
            ks: object.const.ks,
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
      (0,_handler_eventHandler_js__WEBPACK_IMPORTED_MODULE_7__.handleCurrentModelFrame)(targetRoot)
      ;(0,_handler_eventHandler_js__WEBPACK_IMPORTED_MODULE_7__.handleCurrentNodeFrame)(target)
    }


    objects[0].setWorldMtx(null);

    normalizeLight = _structs_math_Vec3_js__WEBPACK_IMPORTED_MODULE_4__["default"].unitVector(_structs_math_Vec3_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromArray(lightDirection)).asArray()
    renderLoop(objects);
    _utils_Animation_js__WEBPACK_IMPORTED_MODULE_11__["default"].handleTransform(target, document);
    
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
    (0,_handler_eventHandler_js__WEBPACK_IMPORTED_MODULE_7__.handleTotalModelFrame)(targetRoot)
    ;(0,_handler_eventHandler_js__WEBPACK_IMPORTED_MODULE_7__.handleTotalNodeFrame)(targetRoot)
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
chicken.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
}
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
head.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
}
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
beak.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
}
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
whiteLeftEye.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
}
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
blackLeftEye.shininess = 1,
blackLeftEye.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
}
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
whiteRightEye.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
}
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
blackRightEye.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
}
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
leftWing.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
}
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
        rotate: [0, 0, Math.PI / 2],
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
rightWing.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
}
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
        rotate: [0, 0, Math.PI / 2],
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
rightLeg.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
}
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
rightFoot.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
}
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
leftLeg.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
}
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
leftFoot.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
}
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
pig.diffuse = [1,1,1],
pig.specular = [1,1,1],
pig.ambient = [1,1,1],
pig.shininess = 1,
pig.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
}
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
head.diffuse = [1,1,1],
head.specular = [1,1,1],
head.ambient = [1,1,1],
head.shininess = 1,
head.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
}
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
whiteRightEye.diffuse = [1,1,1],
whiteRightEye.specular = [1,1,1],
whiteRightEye.ambient = [1,1,1],
whiteRightEye.shininess = 1,
whiteRightEye.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
}
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
whiteLeftEye.diffuse = [1,1,1],
whiteLeftEye.specular = [1,1,1],
whiteLeftEye.ambient = [1,1,1],
whiteLeftEye.shininess = 1,
whiteLeftEye.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
}
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
blackRightEye.diffuse = [1,1,1],
blackRightEye.specular = [1,1,1],
blackRightEye.ambient = [1,1,1],
blackRightEye.shininess = 1,
blackRightEye.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
}
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
blackLeftEye.diffuse = [1,1,1],
blackLeftEye.specular = [1,1,1],
blackLeftEye.ambient = [1,1,1],
blackLeftEye.shininess = 1,
blackLeftEye.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
}
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
nose.diffuse = [1,1,1],
nose.specular = [1,1,1],
nose.ambient = [1,1,1],
nose.shininess = 1,
nose.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
}
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
rightHole.diffuse = [1,1,1],
rightHole.specular = [1,1,1],
rightHole.ambient = [1,1,1],
rightHole.shininess = 1,
rightHole.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
}
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
leftHole.diffuse = [1,1,1],
leftHole.specular = [1,1,1],
leftHole.ambient = [1,1,1],
leftHole.shininess = 1,
leftHole.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
}
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
rightFrontLeg.diffuse = [1,1,1],
rightFrontLeg.specular = [1,1,1],
rightFrontLeg.ambient = [1,1,1],
rightFrontLeg.shininess = 1,
rightFrontLeg.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
}
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
leftFrontLeg.diffuse = [1,1,1],
leftFrontLeg.specular = [1,1,1],
leftFrontLeg.ambient = [1,1,1],
leftFrontLeg.shininess = 1,
leftFrontLeg.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
}
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
rightRearLeg.diffuse = [1,1,1],
rightRearLeg.specular = [1,1,1],
rightRearLeg.ambient = [1,1,1],
rightRearLeg.shininess = 1,
rightRearLeg.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
}
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
leftRearLeg.diffuse = [1,1,1],
leftRearLeg.specular = [1,1,1],
leftRearLeg.ambient = [1,1,1],
leftRearLeg.shininess = 1,
leftRearLeg.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
}
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
/* harmony import */ var _structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../structs/math/mathUtils.js */ "./src/structs/math/mathUtils.js");


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
        parent_model.animation.isAnimate = false;
        if(parent_model.animation.frames){
            parent_model.animation.currentFrame = 0;
            parent_model.transform = parent_model.animation.frames[parent_model.animation.currentFrame];
        }
        for(let model of parent_model.children){    
            Animation.firstFrame(model)
        }
    }

    static lastFrame(parent_model){
        parent_model.animation.isAnimate = false;
        if(parent_model.animation.frames){
            parent_model.animation.currentFrame = parent_model.animation.frames.length - 1;
            parent_model.transform = parent_model.animation.frames[parent_model.animation.currentFrame];
        }
        for(let model of parent_model.children){    
            Animation.lastFrame(model)
        }
    }

    static totalModelFrames(parent_model){
        let totalFrames = 0;
        if(parent_model.animation.frames){
            totalFrames = parent_model.animation.frames.length;
        }
        for(let child_model of parent_model.children){    
            // recurse each node child, find max frame
            let childTotalFrames = Animation.totalModelFrames(child_model);
            if(childTotalFrames > totalFrames){
                totalFrames = childTotalFrames;
            }
        }
        return totalFrames;
    }

    static totalNodeFrames(parent_model){
        let totalNodeFrames = "-";
        if(parent_model.animation.frames){
            // as string
            totalNodeFrames = parent_model.animation.frames.length.toString();
        }
        return totalNodeFrames;
    }

    static currentModelFrame(parent_model){
        let currentFrame = 0;
        if(parent_model.animation.frames){
            currentFrame = parent_model.animation.currentFrame;
        }
        for(let model of parent_model.children){    
            // recurse each node child, find max frame
            let childCurrentFrame = Animation.currentModelFrame(model);
            if(childCurrentFrame > currentFrame){
                currentFrame = childCurrentFrame;
            }
        }
        return currentFrame;
    }

    static currentNodeFrame(node){
        let currFrame = "-"
        if(node.animation.frames){
            currFrame = node.animation.currentFrame.toString()
        }
        return currFrame
    }

    static handleTransform(node, doc){
        if(!node.animation.isAnimate) return;
        let [tx, ty, tz] = node.transform.translate
        let [rx, ry, rz] = node.transform.rotate
        rx = (0,_structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.radToDeg)(rx); 
        ry = (0,_structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.radToDeg)(ry); 
        rz = (0,_structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.radToDeg)(rz);
        let [sx,sy,sz] = node.transform.scale

       // slider tx, ty, tz 
        doc.getElementById("translation-x-slider").value = tx*50;
        doc.getElementById("translation-y-slider").value = ty*50;
        doc.getElementById("translation-z-slider").value = tz*50;
        doc.getElementById("translation-x-slider-value").innerHTML = tx;    
        doc.getElementById("translation-y-slider-value").innerHTML = ty;
        doc.getElementById("translation-z-slider-value").innerHTML = tz;
        // rotation tx, ty, tz 
        console.log(rz)
        doc.getElementById("rotation-x-slider").value = rx;
        doc.getElementById("rotation-y-slider").value = ry;
        doc.getElementById("rotation-z-slider").value = rz;
        doc.getElementById("rotation-x-slider-value").innerHTML = rx.toFixed(2);
        doc.getElementById("rotation-y-slider-value").innerHTML = ry.toFixed(2);
        doc.getElementById("rotation-z-slider-value").innerHTML = rz.toFixed(2);
        console.log(rz)

        // scale tx, ty, tz
        doc.getElementById("scalation-x-slider").value = sx*10;
        doc.getElementById("scalation-y-slider").value = sy*10;
        doc.getElementById("scalation-z-slider").value = sz*10;
        doc.getElementById("scalation-x-slider-value").innerHTML = sx.toFixed(2);
        doc.getElementById("scalation-y-slider-value").innerHTML = sy.toFixed(2);
        doc.getElementById("scalation-z-slider-value").innerHTML = sz.toFixed(2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNkRBQUk7QUFDNUI7QUFDQSxRQUFRLDZEQUFJO0FBQ1o7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZEQUFJO0FBQzFCO0FBQ0EsTUFBTSw2REFBSTtBQUNWO0FBQ0E7QUFDQSxzQkFBc0IsNkRBQUk7QUFDMUI7QUFDQSxNQUFNLDZEQUFJO0FBQ1Y7QUFDQTtBQUNBLHNCQUFzQiw2REFBSTtBQUMxQjtBQUNBLE1BQU0sNkRBQUk7QUFDVjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNkRBQUk7QUFDNUI7QUFDQSxRQUFRLDZEQUFJO0FBQ1o7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZEQUFJO0FBQzFCO0FBQ0EsTUFBTSw2REFBSTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDREQUFTO0FBQ2YsTUFBTSxpRkFBdUI7QUFDN0IsTUFBTSxpRkFBc0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0RBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdEQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnREFBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnREFBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnREFBSTtBQUM5QjtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnREFBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnREFBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdEQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdEQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0RBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0RBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnREFBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnREFBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdEQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Yk07QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0Q0FBNEM7QUFDcEQsUUFBUSw2Q0FBNkM7QUFDckQsUUFBUSwrQ0FBK0M7QUFDdkQsUUFBUSw4Q0FBOEM7QUFDdEQsUUFBUSw4Q0FBOEM7QUFDdEQsUUFBUSwrQ0FBK0M7QUFDdkQsUUFBUSw0Q0FBNEM7QUFDcEQsUUFBUSw2Q0FBNkM7QUFDckQsUUFBUSw0Q0FBNEM7QUFDcEQsUUFBUSw2Q0FBNkM7QUFDckQsUUFBUSw4Q0FBOEM7QUFDdEQsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnREFBSTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7O0FDeEVJO0FBQzlCO0FBQ0EsZ0JBQWdCLGdEQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnREFBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdEQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0RBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnREFBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdEQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0RBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnREFBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0RBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsb0VBQVE7QUFDckIsYUFBYSxvRUFBUTtBQUNyQixhQUFhLG9FQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsTzBDO0FBQ0E7QUFDMUM7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkRBQUk7QUFDdkIsc0JBQXNCLDZEQUFJO0FBQzFCLGtCQUFrQiw2REFBSTtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkRBQUksWUFBWSw2REFBSTtBQUN0QyxrQkFBa0IsNkRBQUksWUFBWSw2REFBSTtBQUN0QyxrQkFBa0IsNkRBQUksWUFBWSw2REFBSTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZEQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkRBQUk7QUFDL0IsWUFBWSw2REFBSTtBQUNoQixnQkFBZ0IsNkRBQUk7QUFDcEIsZ0JBQWdCLDZEQUFJO0FBQ3BCLFlBQVksNkRBQUk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkRBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMEVBQTBFO0FBQ2hGLE1BQU0sMEVBQTBFO0FBQ2hGLE1BQU0sMEVBQTBFO0FBQ2hGLE1BQU0sMEVBQTBFO0FBQ2hGLE1BQU0sMEVBQTBFO0FBQ2hGLE1BQU0sMEVBQTBFO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBLFlBQVksY0FBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3hHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL2hhbmRsZXIvZXZlbnRIYW5kbGVyLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3N0cnVjdHMvbWF0aC9NYXQ0LmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3N0cnVjdHMvbWF0aC9WZWMzLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3N0cnVjdHMvbWF0aC9WZWM0LmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3N0cnVjdHMvbWF0aC9tYXRoVXRpbHMuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tb2RlbC9jaGlja2VuLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3N0cnVjdHMvbW9kZWwvZm94LmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3N0cnVjdHMvbW9kZWwvaG9sbG93VGhpbmd5LmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3N0cnVjdHMvbW9kZWwvcGlnLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3N0cnVjdHMvbW9kZWwvcmluZy5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL25vZGUuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvdXRpbHMvQW5pbWF0aW9uLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3V0aWxzL0NhbWVyYS5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy91dGlscy90ZXh0dXJlLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRhcmdldCwgXHJcbiAgICB0YXJnZXRSb290LCBcclxuICAgIHNldFByb2plY3Rpb25UeXBlLCBcclxuICAgIHNldE9ibGlxdWVQaGksIFxyXG4gICAgc2V0T2JsaXF1ZVRoZXRhLCBcclxuICAgIHNldFRhcmdldCwgXHJcbiAgICBsaWdodERpcmVjdGlvbixcclxuICAgIHNldFRhcmdldFJvb3QsIFxyXG4gICAgY2hhbmdlTW9kZWxPYmplY3QsIFxyXG4gICAgY2hhbmdlTWFwcGluZ1RleHR1cmV9IGZyb20gXCIuLi9pbmRleC5qc1wiXHJcbmltcG9ydCB7IGRlZ1RvUmFkLCByYWRUb0RlZyB9IGZyb20gXCIuLi9zdHJ1Y3RzL21hdGgvbWF0aFV0aWxzLmpzXCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uL3V0aWxzL0FuaW1hdGlvbi5qc1wiO1xyXG5cclxuY29uc3QgdHJhbnNsYXRpb25YID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zbGF0aW9uLXgtc2xpZGVyJyk7XHJcbmNvbnN0IHRyYW5zbGF0aW9uWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2xhdGlvbi15LXNsaWRlcicpO1xyXG5jb25zdCB0cmFuc2xhdGlvblogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNsYXRpb24tei1zbGlkZXInKTtcclxuY29uc3QgdHJhbnNsYXRhaW9uWFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zbGF0aW9uLXgtc2xpZGVyLXZhbHVlJyk7XHJcbmNvbnN0IHRyYW5zbGF0YWlvbllWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2xhdGlvbi15LXNsaWRlci12YWx1ZScpO1xyXG5jb25zdCB0cmFuc2xhdGFpb25aVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNsYXRpb24tei1zbGlkZXItdmFsdWUnKTtcclxuLy9yb3RhdGlvblxyXG5jb25zdCByb3RhdGlvblggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm90YXRpb24teC1zbGlkZXInKTtcclxuY29uc3Qgcm90YXRpb25ZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uLXktc2xpZGVyJyk7XHJcbmNvbnN0IHJvdGF0aW9uWiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGlvbi16LXNsaWRlcicpO1xyXG5jb25zdCByb3RhdGlvblhWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGlvbi14LXNsaWRlci12YWx1ZScpO1xyXG5jb25zdCByb3RhdGlvbllWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGlvbi15LXNsaWRlci12YWx1ZScpO1xyXG5jb25zdCByb3RhdGlvblpWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGlvbi16LXNsaWRlci12YWx1ZScpO1xyXG4vL3NjYWxhdGlvblxyXG5jb25zdCBzY2FsYXRpb25YID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjYWxhdGlvbi14LXNsaWRlcicpO1xyXG5jb25zdCBzY2FsYXRpb25ZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjYWxhdGlvbi15LXNsaWRlcicpO1xyXG5jb25zdCBzY2FsYXRpb25aID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjYWxhdGlvbi16LXNsaWRlcicpO1xyXG5jb25zdCBzY2FsYXRpb25YVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NhbGF0aW9uLXgtc2xpZGVyLXZhbHVlJyk7XHJcbmNvbnN0IHNjYWxhdGlvbllWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY2FsYXRpb24teS1zbGlkZXItdmFsdWUnKTtcclxuY29uc3Qgc2NhbGF0aW9uWlZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjYWxhdGlvbi16LXNsaWRlci12YWx1ZScpO1xyXG4vLyBjb21wb25lbnQgY29udGFpbmVyXHJcbmNvbnN0IGNvbXBvbmVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wb25lbnQtY29udGFpbmVyJyk7XHJcbi8vY2FtZXJhXHJcbmNvbnN0IG9ydGhvZ3JhcGhpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcnRob2dyYXBoaWMnKTtcclxuY29uc3Qgb2JsaXF1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvYmxpcXVlJyk7XHJcbmNvbnN0IHBlcnNwZWN0aXZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BlcnNwZWN0aXZlJyk7XHJcbi8vIGNhbWVyYSByYWRpdXNcclxuY29uc3QgY2FtZXJhUmFkaXVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1yYWRpdXMtc2xpZGVyJyk7XHJcbi8vIGNhbWVyYSByb2xsLXBpdGNoXHJcbmNvbnN0IGNhbWVyYVJvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXJvbGwtc2xpZGVyJyk7XHJcbmNvbnN0IGNhbWVyYVBpdGNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1waXRjaC1zbGlkZXInKTtcclxuLy8gY2FtZXJhIHRoZXRhLXBoaVxyXG5jb25zdCBjYW1lcmFUaGV0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtdGhldGEtc2xpZGVyJyk7XHJcbmNvbnN0IGNhbWVyYVBoaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcGhpLXNsaWRlcicpO1xyXG4vLyBzZXQgb3J0aG9ncmFwaGljIGFzIGRlZmF1bHQgaW5wdXQgcmFkaW8gYnV0dG9uXHJcbm9ydGhvZ3JhcGhpYy5jaGVja2VkID0gdHJ1ZTtcclxuLy8gY2FtZXJhIGRlZmF1bHQgdmlld1xyXG5jb25zdCBkZWZhdWx0VmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWZhdWx0LXZpZXcnKTtcclxuXHJcbi8vIG1vZGVsIFxyXG5jb25zdCBtb2RlbFNlbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RlbC1zZWxlY3Rpb24nKTtcclxuY29uc3QgbWFwcGluZ1NlbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXBwaW5nLXNlbGVjdGlvbicpO1xyXG5cclxuLy8gYW5pbWF0aW9uXHJcblxyXG4vLyBwYXVzZSwgcGxheSwgYXV0bywgcmV2ZXJzZVxyXG5jb25zdCBwYXVzZUNvbnRpbnVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhdXNlLWNvbnRpbnVlLWFuaW1hdGlvbicpO1xyXG5jb25zdCBwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXktYW5pbWF0aW9uJyk7XHJcbmNvbnN0IGF1dG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0by1hbmltYXRpb24nKTtcclxuY29uc3QgcmV2ZXJzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXZlcnNlLWFuaW1hdGlvbicpO1xyXG5cclxuLy8gbmV4dCwgcHJldiwgZmlyc3QsIGxhc3RcclxuY29uc3QgbmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0LWFuaW1hdGlvbicpO1xyXG5jb25zdCBwcmV2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXYtYW5pbWF0aW9uJyk7XHJcbmNvbnN0IGZpcnN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpcnN0LWFuaW1hdGlvbicpO1xyXG5jb25zdCBsYXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhc3QtYW5pbWF0aW9uJyk7XHJcblxyXG4vLyBmcmFtZSBoYW5kbGVyXHJcbmNvbnN0IGN1cnJlbnRNb2RlbEZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtbW9kZWwtZnJhbWUnKTtcclxuY29uc3QgY3VycmVudE5vZGVGcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LW5vZGUtZnJhbWUnKTtcclxuY29uc3QgdG90YWxNb2RlbEZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsLW1vZGVsLWZyYW1lJyk7XHJcbmNvbnN0IHRvdGFsTm9kZUZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsLW5vZGUtZnJhbWUnKTtcclxuXHJcbi8vIGFkZCBmcmFtZSBoYW5kbGVyXHJcbmNvbnN0IGFkZEZyYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbC1hZGQtZnJhbWUnKVxyXG5cclxuLy8gYW1iaWVudCBsaWdodFxyXG5jb25zdCByZWRBbWJpZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZC1zbGlkZXInKTtcclxuY29uc3QgZ3JlZW5BbWJpZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyZWVuLXNsaWRlcicpO1xyXG5jb25zdCBibHVlQW1iaWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdibHVlLXNsaWRlcicpO1xyXG5cclxuLy8gbGlnaHQgcG9zaXRpb25cclxuY29uc3QgbGlnaHRYID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpZ2h0LXgtc2xpZGVyJyk7XHJcbmNvbnN0IGxpZ2h0WSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaWdodC15LXNsaWRlcicpO1xyXG5jb25zdCBsaWdodFogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlnaHQtei1zbGlkZXInKTtcclxuXHJcbi8vIHBob25nXHJcbmNvbnN0IHNoaW5pbmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGluaW5lc3Mtc2xpZGVyJyk7XHJcbmNvbnN0IHNwZWN1bGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwZWN1bGFyLXNsaWRlcicpO1xyXG5jb25zdCBkaWZmdXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpZmZ1c2Utc2xpZGVyJyk7XHJcbmNvbnN0IGFtYmllbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW1iaWVudC1zbGlkZXInKTtcclxuXHJcbi8vIGNvbG9yc1xyXG5jb25zdCBiYXNpY0NvbG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhc2ljLWNvbG9yJyk7XHJcbmNvbnN0IGRpZmZ1c2VDb2xvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWZmdXNlLWNvbG9yJyk7XHJcbmNvbnN0IHNwZWN1bGFyQ29sb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BlY3VsYXItY29sb3InKTtcclxuXHJcbi8vIGluaXRpYWxcclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRPcHRpb25Nb2RlbChtb2RlbCl7XHJcbiAgICBtb2RlbFNlbGVjdGlvbi5pbm5lckhUTUwgPSAnJztcclxuICAgIG1vZGVsLmZvckVhY2goKG9iamVjdCwgaW5kZXgpID0+IHtcclxuICAgICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gaW5kZXg7XHJcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gb2JqZWN0WzBdLm5hbWU7XHJcbiAgICAgICAgbW9kZWxTZWxlY3Rpb24uYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH0pXHJcblxyXG59XHJcblxyXG4vLyBldmVudCBsaXN0ZW5lclxyXG50cmFuc2xhdGlvblguYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgdGFyZ2V0LnRyYW5zZm9ybS50cmFuc2xhdGVbMF0gPSAoMiAqIHRyYW5zbGF0aW9uWC52YWx1ZSkgLyAxMDA7XHJcbiAgICB0cmFuc2xhdGFpb25YVmFsdWUudGV4dENvbnRlbnQgPSB0YXJnZXQudHJhbnNmb3JtLnRyYW5zbGF0ZVswXTtcclxufSk7XHJcbnRyYW5zbGF0aW9uWS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQudHJhbnNmb3JtLnRyYW5zbGF0ZVsxXSA9ICgyICogdHJhbnNsYXRpb25ZLnZhbHVlKSAvIDEwMDtcclxuICAgIHRyYW5zbGF0YWlvbllWYWx1ZS50ZXh0Q29udGVudCA9IHRhcmdldC50cmFuc2Zvcm0udHJhbnNsYXRlWzFdO1xyXG59KTtcclxudHJhbnNsYXRpb25aLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIHRhcmdldC50cmFuc2Zvcm0udHJhbnNsYXRlWzJdID0gKDIgKiB0cmFuc2xhdGlvbloudmFsdWUpIC8gMTAwO1xyXG4gICAgdHJhbnNsYXRhaW9uWlZhbHVlLnRleHRDb250ZW50ID0gdGFyZ2V0LnRyYW5zZm9ybS50cmFuc2xhdGVbMl07XHJcbn0pO1xyXG5yb3RhdGlvblguYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgdGFyZ2V0LnRyYW5zZm9ybS5yb3RhdGVbMF0gPSBkZWdUb1JhZChyb3RhdGlvblgudmFsdWUpO1xyXG4gICAgcm90YXRpb25YVmFsdWUudGV4dENvbnRlbnQgPSByb3RhdGlvblgudmFsdWU7XHJcbn0pXHJcbnJvdGF0aW9uWS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQudHJhbnNmb3JtLnJvdGF0ZVsxXSA9IGRlZ1RvUmFkKHJvdGF0aW9uWS52YWx1ZSk7XHJcbiAgICByb3RhdGlvbllWYWx1ZS50ZXh0Q29udGVudCA9IHJvdGF0aW9uWS52YWx1ZTtcclxufSlcclxucm90YXRpb25aLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIHRhcmdldC50cmFuc2Zvcm0ucm90YXRlWzJdID0gZGVnVG9SYWQocm90YXRpb25aLnZhbHVlKTtcclxuICAgIHJvdGF0aW9uWlZhbHVlLnRleHRDb250ZW50ID0gcm90YXRpb25aLnZhbHVlO1xyXG59KVxyXG5zY2FsYXRpb25YLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIHRhcmdldC50cmFuc2Zvcm0uc2NhbGVbMF0gPSAgc2NhbGF0aW9uWC52YWx1ZSAvIDIwO1xyXG4gICAgc2NhbGF0aW9uWFZhbHVlLnRleHRDb250ZW50ID0gdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVswXTtcclxufSlcclxuc2NhbGF0aW9uWS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQudHJhbnNmb3JtLnNjYWxlWzFdID0gIHNjYWxhdGlvblkudmFsdWUgLyAyMDtcclxuICAgIHNjYWxhdGlvbllWYWx1ZS50ZXh0Q29udGVudCA9IHRhcmdldC50cmFuc2Zvcm0uc2NhbGVbMV07XHJcbn0pXHJcbnNjYWxhdGlvblouYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVsyXSA9ICBzY2FsYXRpb25aLnZhbHVlIC8gMjA7XHJcbiAgICBzY2FsYXRpb25aVmFsdWUudGV4dENvbnRlbnQgPSB0YXJnZXQudHJhbnNmb3JtLnNjYWxlWzJdO1xyXG59KVxyXG5cclxuLy8gbW9kZWwgc2VsZWN0aW9uXHJcbm1vZGVsU2VsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCl7ICAgXHJcbiAgICBjb25zb2xlLmxvZyhtb2RlbFNlbGVjdGlvbi52YWx1ZSk7XHJcbiAgICBjaGFuZ2VNb2RlbE9iamVjdChtb2RlbFNlbGVjdGlvbi52YWx1ZSk7XHJcbn0pXHJcblxyXG4vLyBjYW1lcmFcclxub3J0aG9ncmFwaGljLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIHNldFByb2plY3Rpb25UeXBlKFwib3J0aG9ncmFwaGljXCIpO1xyXG59KVxyXG5cclxub2JsaXF1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBzZXRQcm9qZWN0aW9uVHlwZShcIm9ibGlxdWVcIik7XHJcbn0pXHJcblxyXG5wZXJzcGVjdGl2ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBzZXRQcm9qZWN0aW9uVHlwZShcInBlcnNwZWN0aXZlXCIpO1xyXG59KVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ29tcG9uZW50ICgpIHtcclxuICAgIGNvbXBvbmVudENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDb21wb25lbnQodHJlZUxldmVsID0gMCwgb2JqZWN0cyl7XHJcbiAgICBvYmplY3RzLmZvckVhY2goKG9iamVjdCkgPT4ge1xyXG4gICAgICAgIGxldCBuZXdDb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXHJcbiAgICAgICAgbmV3Q29tcG9uZW50LnN0eWxlID0gJ3BhZGRpbmctbGVmdDogJyArIHRyZWVMZXZlbCoxLjUgKyAnZW07JztcclxuICAgICAgICBuZXdDb21wb25lbnQuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1heC13LWZpdCBjb21wb25lbnRcIj4ke29iamVjdC5uYW1lfTwvYnV0dG9uPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgbGV0IGNyZWF0ZWRCdXR0b24gPSBuZXdDb21wb25lbnQucXVlcnlTZWxlY3RvcignLmNvbXBvbmVudCcpO1xyXG4gICAgICAgIGNyZWF0ZWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldnQpIHtcclxuICAgICAgICAgICAgc2V0VGFyZ2V0KG9iamVjdCk7XHJcbiAgICAgICAgICAgIGhhbmRsZVRyYW5zZm9ybShvYmplY3QpO1xyXG4gICAgICAgICAgICBzZXRTbGlkZXIob2JqZWN0KTtcclxuICAgICAgICAgICAgaGFuZGxlVG90YWxOb2RlRnJhbWUob2JqZWN0KVxyXG4gICAgICAgICAgICBsZXQgY29tcG9uZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb21wb25lbnRcIik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcG9uZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50c1tpXS5jbGFzc05hbWUgPSBjb21wb25lbnRzW2ldLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGJvcmRlci0yXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV2dC5jdXJyZW50VGFyZ2V0LmNsYXNzTmFtZSArPSBcIiBib3JkZXItMlwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbXBvbmVudENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdDb21wb25lbnQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKG9iamVjdC5jaGlsZHJlbi5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgZGlzcGxheUNvbXBvbmVudCh0cmVlTGV2ZWwgKyAxLCBvYmplY3QuY2hpbGRyZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFNsaWRlcihub2RlKXtcclxuICAgIHJlZEFtYmllbnQudmFsdWUgPSBub2RlLmFtYmllbnRbMF07XHJcbiAgICBncmVlbkFtYmllbnQudmFsdWUgPSBub2RlLmFtYmllbnRbMV07XHJcbiAgICBibHVlQW1iaWVudC52YWx1ZSA9IG5vZGUuYW1iaWVudFsyXTtcclxuICAgIHNoaW5pbmVzcy52YWx1ZSA9IG5vZGUuc2hpbmluZXNzO1xyXG4gICAgc3BlY3VsYXIudmFsdWUgPSBub2RlLnNwZWN1bGFyWzBdO1xyXG4gICAgZGlmZnVzZS52YWx1ZSA9IG5vZGUuZGlmZnVzZVswXTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVUcmFuc2Zvcm0obm9kZSl7XHJcbiAgICAvLyBjaGFuZ2UgdHJhbnNsYXRpb24sIHJvdGF0aW9uLCBzY2FsYXRpb25cclxuICAgIGxldCBbdHgsIHR5LCB0el0gPSBub2RlLnRyYW5zZm9ybS50cmFuc2xhdGVcclxuICAgIC8vIHRpbWVzIDUwXHJcblxyXG4gICAgbGV0IFtyeCwgcnksIHJ6XSA9IG5vZGUudHJhbnNmb3JtLnJvdGF0ZVxyXG4gICAgLy8gY2hhbmdlIHdpdGggcmFkVG9EZWdcclxuICAgIGlmKHRydWUpe1xyXG4gICAgcnggPSByYWRUb0RlZyhyeCk7XHJcbiAgICByeSA9IHJhZFRvRGVnKHJ5KTtcclxuICAgIHJ6ID0gcmFkVG9EZWcocnopO1xyXG4gICAgfVxyXG4gICAgbGV0IFtzeCwgc3ksIHN6XSA9IG5vZGUudHJhbnNmb3JtLnNjYWxlXHJcbiAgXHJcbiAgICB0cmFuc2xhdGlvblgudmFsdWUgPSB0eCo1MDtcclxuICAgIHRyYW5zbGF0aW9uWS52YWx1ZSA9IHR5KjUwO1xyXG4gICAgdHJhbnNsYXRpb25aLnZhbHVlID0gdHoqNTA7XHJcbiAgICB0cmFuc2xhdGFpb25YVmFsdWUudGV4dENvbnRlbnQgPSB0eDtcclxuICAgIHRyYW5zbGF0YWlvbllWYWx1ZS50ZXh0Q29udGVudCA9IHR5O1xyXG4gICAgdHJhbnNsYXRhaW9uWlZhbHVlLnRleHRDb250ZW50ID0gdHo7XHJcblxyXG4gICAgcm90YXRpb25YLnZhbHVlID0gcng7XHJcbiAgICByb3RhdGlvblkudmFsdWUgPSByeTtcclxuICAgIHJvdGF0aW9uWi52YWx1ZSA9IHJ6O1xyXG4gICAgcm90YXRpb25YVmFsdWUudGV4dENvbnRlbnQgPSByeDtcclxuICAgIHJvdGF0aW9uWVZhbHVlLnRleHRDb250ZW50ID0gcnk7XHJcbiAgICByb3RhdGlvblpWYWx1ZS50ZXh0Q29udGVudCA9IHJ6O1xyXG5cclxuICAgIHNjYWxhdGlvblhWYWx1ZS50ZXh0Q29udGVudCA9IHN4O1xyXG4gICAgc2NhbGF0aW9uWVZhbHVlLnRleHRDb250ZW50ID0gc3k7XHJcbiAgICBzY2FsYXRpb25aVmFsdWUudGV4dENvbnRlbnQgPSBzejtcclxuICAgIHNjYWxhdGlvblgudmFsdWUgPSBzeCoyMDtcclxuICAgIHNjYWxhdGlvblkudmFsdWUgPSBzeCoyMDtcclxuICAgIHNjYWxhdGlvbloudmFsdWUgPSBzeioyMDtcclxuXHJcbiAgICAvLyBjaGFuZ2UgcGhvbmcgc2xpZGVyXHJcbiAgICByZWRBbWJpZW50LnZhbHVlID0gbm9kZS5hbWJpZW50WzBdO1xyXG4gICAgZ3JlZW5BbWJpZW50LnZhbHVlID0gbm9kZS5hbWJpZW50WzFdO1xyXG4gICAgYmx1ZUFtYmllbnQudmFsdWUgPSBub2RlLmFtYmllbnRbMl07XHJcbiAgICBzaGluaW5lc3MudmFsdWUgPSBub2RlLnNoaW5pbmVzcztcclxuICAgIFxyXG4gICAgYmFzaWNDb2xvci52YWx1ZSA9IHJnYlRvSGV4KG5vZGUucGlja2VkQ29sb3IpO1xyXG4gICAgZGlmZnVzZUNvbG9yLnZhbHVlID0gcmdiVG9IZXgobm9kZS5kaWZmdXNlKTtcclxuICAgIHNwZWN1bGFyQ29sb3IudmFsdWUgPSByZ2JUb0hleChub2RlLnNwZWN1bGFyKTtcclxuICAgIFxyXG4gICAgYW1iaWVudC52YWx1ZSA9IG5vZGUuY29uc3Qua2E7XHJcbiAgICBkaWZmdXNlLnZhbHVlID0gbm9kZS5jb25zdC5rZDtcclxuICAgIHNwZWN1bGFyLnZhbHVlID0gbm9kZS5jb25zdC5rcztcclxuICAgIFxyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNhbWVyYVZpZXcobm9kZSkge1xyXG4gICAgbGV0IGVwc2lsb24gPSAwLjAwMTtcclxuICAgIFxyXG4gICAgLy9yYWRpdXMsIHJvbGwsIHBpdGNoXHJcbiAgICBsZXQgcmFkaXVzID0gcGFyc2VGbG9hdChjYW1lcmFSYWRpdXMudmFsdWUpLzEwO1xyXG4gICAgbGV0IHJvbGwgPSBkZWdUb1JhZChwYXJzZUZsb2F0KGNhbWVyYVJvbGwudmFsdWUpKTtcclxuICAgIGxldCBwaXRjaCA9IGRlZ1RvUmFkKHBhcnNlRmxvYXQoY2FtZXJhUGl0Y2gudmFsdWUpKTtcclxuICAgIG5vZGUudmlld01hdHJpeC5jYW1lcmEgPSBbXHJcbiAgICAgICAgcm9sbCxcclxuICAgICAgICBwaXRjaCxcclxuICAgICAgICByYWRpdXMgPT0gMCA/IGVwc2lsb24gOiByYWRpdXMsICBcclxuICAgIF07XHJcbiAgICBmb3IobGV0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pe1xyXG4gICAgICAgIGhhbmRsZUNhbWVyYVZpZXcoY2hpbGQpO1xyXG4gICAgfVxyXG59XHJcbmNhbWVyYVJhZGl1cy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgdmFsID0gcGFyc2VGbG9hdChjYW1lcmFSYWRpdXMudmFsdWUpO1xyXG4gICAgdmFsIC89IDEwO1xyXG4gICAgXHJcbiAgICBoYW5kbGVDYW1lcmFWaWV3KHRhcmdldFJvb3QpO1xyXG4gICAgLy8gdXBkYXRlIGNhbWVyYSByYWRpdXMgdmFsdWVcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcmFkaXVzLXNsaWRlci12YWx1ZScpLnRleHRDb250ZW50ID0gdmFsO1xyXG59KVxyXG5jYW1lcmFSb2xsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIFxyXG4gICAgaGFuZGxlQ2FtZXJhVmlldyh0YXJnZXRSb290KVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1yb2xsLXNsaWRlci12YWx1ZScpLnRleHRDb250ZW50ID0gY2FtZXJhUm9sbC52YWx1ZTtcclxufSlcclxuY2FtZXJhUGl0Y2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIGhhbmRsZUNhbWVyYVZpZXcodGFyZ2V0Um9vdClcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcGl0Y2gtc2xpZGVyLXZhbHVlJykudGV4dENvbnRlbnQgPSBjYW1lcmFQaXRjaC52YWx1ZTtcclxufSlcclxuXHJcbi8vdGhldGEsIHBoaVxyXG5jYW1lcmFUaGV0YS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgdGhldGEgPSBkZWdUb1JhZChwYXJzZUZsb2F0KGNhbWVyYVRoZXRhLnZhbHVlKSlcclxuICAgIHNldE9ibGlxdWVUaGV0YSh0aGV0YSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXRoZXRhLXNsaWRlci12YWx1ZScpLnRleHRDb250ZW50ID0gY2FtZXJhVGhldGEudmFsdWU7XHJcbn0pXHJcblxyXG5jYW1lcmFQaGkuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgbGV0IHBoaSA9IGRlZ1RvUmFkKHBhcnNlRmxvYXQoY2FtZXJhUGhpLnZhbHVlKSlcclxuICAgIHNldE9ibGlxdWVQaGkocGhpKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcGhpLXNsaWRlci12YWx1ZScpLnRleHRDb250ZW50ID0gY2FtZXJhUGhpLnZhbHVlO1xyXG59KVxyXG5cclxuLy8gZGVmYXV0bCB2aWV3XHJcbmRlZmF1bHRWaWV3LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGNhbWVyYVJhZGl1cy52YWx1ZSA9IDUwO1xyXG4gICAgY2FtZXJhUm9sbC52YWx1ZSA9IDA7XHJcbiAgICBjYW1lcmFQaXRjaC52YWx1ZSA9IDA7XHJcbiAgICBjYW1lcmFUaGV0YS52YWx1ZSA9IDkwO1xyXG4gICAgY2FtZXJhUGhpLnZhbHVlID0gOTA7XHJcbiAgICBoYW5kbGVDYW1lcmFWaWV3KHRhcmdldFJvb3QpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1yYWRpdXMtc2xpZGVyLXZhbHVlJykudGV4dENvbnRlbnQgPSA1O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1yb2xsLXNsaWRlci12YWx1ZScpLnRleHRDb250ZW50ID0gMDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcGl0Y2gtc2xpZGVyLXZhbHVlJykudGV4dENvbnRlbnQgPSAwO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS10aGV0YS1zbGlkZXItdmFsdWUnKS50ZXh0Q29udGVudCA9IDkwO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1waGktc2xpZGVyLXZhbHVlJykudGV4dENvbnRlbnQgPSA5MDtcclxufSlcclxuXHJcbnZhciBzdGF0ZSA9IHtcclxuICAgIG9iamVjdHM6IFtdXHJcbn07XHJcblxyXG4vLyB0ZXh0dXJlIHNlbGVjdGlvblxyXG5tYXBwaW5nU2VsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKG1hcHBpbmdTZWxlY3Rpb24udmFsdWUpXHJcbiAgICBjaGFuZ2VNYXBwaW5nVGV4dHVyZShzdGF0ZS5vYmplY3RzLCBtYXBwaW5nU2VsZWN0aW9uLnZhbHVlKTtcclxufSk7XHJcblxyXG4vLyBhbmltYXRpb25cclxucGF1c2VDb250aW51ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBpZih0YXJnZXRSb290LmFuaW1hdGlvbi5pc0FuaW1hdGUpe1xyXG4gICAgICAgIC8vIGNoYW5nZSB0byBjb250aW51ZVxyXG4gICAgICAgIHBhdXNlQ29udGludWUudGV4dENvbnRlbnQgPSBcIkNvbnRpbnVlXCI7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIHBhdXNlQ29udGludWUudGV4dENvbnRlbnQgPSBcIlBhdXNlXCI7XHJcbiAgICB9XHJcbiAgICBBbmltYXRpb24ucGF1c2VDb250aW51ZUFuaW1hdGlvbih0YXJnZXRSb290KTtcclxuICAgIFxyXG59KVxyXG5cclxucGxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBwYXVzZUNvbnRpbnVlLnRleHRDb250ZW50ID0gXCJQYXVzZVwiO1xyXG4gICAgQW5pbWF0aW9uLnBsYXlBbmltYXRpb24odGFyZ2V0Um9vdCk7XHJcbn0pXHJcblxyXG5cclxuYXV0by5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAvLyBjaGFuZ2UgdG8gY29udGludWVcclxuICAgIGF1dG8udGV4dENvbnRlbnQgPSAhdGFyZ2V0Um9vdC5hbmltYXRpb24uaXNBdXRvID8gXCJTdG9wIEF1dG9cIiA6IFwiQXV0b1wiO1xyXG4gICAgQW5pbWF0aW9uLnNldEF1dG8odGFyZ2V0Um9vdCk7XHJcbn0pXHJcblxyXG5yZXZlcnNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIHJldmVyc2UudGV4dENvbnRlbnQgPSAhdGFyZ2V0Um9vdC5hbmltYXRpb24uaXNSZXZlcnNlID8gXCJTdG9wIFJldmVyc2VcIiA6IFwiUmV2ZXJzZVwiO1xyXG4gICAgQW5pbWF0aW9uLnJldmVyc2VBbmltYXRpb24odGFyZ2V0Um9vdCk7XHJcbn0pXHJcblxyXG4vLyBuZXh0LCBwcmV2LCBmaXJzdCwgbGFzdFxyXG5uZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIEFuaW1hdGlvbi5uZXh0RnJhbWUodGFyZ2V0Um9vdCk7XHJcbn0pXHJcblxyXG5wcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIEFuaW1hdGlvbi5wcmV2RnJhbWUodGFyZ2V0Um9vdCk7XHJcbn0pXHJcblxyXG5maXJzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBBbmltYXRpb24uZmlyc3RGcmFtZSh0YXJnZXRSb290KTtcclxufSlcclxuXHJcbmxhc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgQW5pbWF0aW9uLmxhc3RGcmFtZSh0YXJnZXRSb290KTtcclxufSlcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUFtYmllbnRDb2xvcihub2RlKXtcclxuICAgIG5vZGUuYW1iaWVudFswXSA9IHJlZEFtYmllbnQudmFsdWU7XHJcbiAgICBub2RlLmFtYmllbnRbMV0gPSBncmVlbkFtYmllbnQudmFsdWU7XHJcbiAgICBub2RlLmFtYmllbnRbMl0gPSBibHVlQW1iaWVudC52YWx1ZTtcclxuICAgIGZvcihsZXQgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbil7XHJcbiAgICAgICAgaGFuZGxlQW1iaWVudENvbG9yKGNoaWxkKTtcclxuICAgIH1cclxufVxyXG5cclxucmVkQW1iaWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBoYW5kbGVBbWJpZW50Q29sb3IodGFyZ2V0KTtcclxufSlcclxuXHJcbmdyZWVuQW1iaWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBoYW5kbGVBbWJpZW50Q29sb3IodGFyZ2V0KTtcclxufSlcclxuXHJcbmJsdWVBbWJpZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGhhbmRsZUFtYmllbnRDb2xvcih0YXJnZXQpO1xyXG59KVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlUGhvbmcobm9kZSl7XHJcbiAgICBub2RlLnNoaW5pbmVzcyA9IDEwMCAtIHNoaW5pbmVzcy52YWx1ZTtcclxuICAgIG5vZGUuc3BlY3VsYXIgPSBoZXhUb1JnYihzcGVjdWxhckNvbG9yLnZhbHVlKTtcclxuICAgIG5vZGUuZGlmZnVzZSA9IGhleFRvUmdiKGRpZmZ1c2VDb2xvci52YWx1ZSk7XHJcbiAgICBub2RlLmNvbnN0LmtzID0gcGFyc2VGbG9hdChzcGVjdWxhci52YWx1ZSk7XHJcbiAgICBub2RlLmNvbnN0LmtkID0gcGFyc2VGbG9hdChkaWZmdXNlLnZhbHVlKTtcclxuICAgIG5vZGUuY29uc3Qua2EgPSBwYXJzZUZsb2F0KGFtYmllbnQudmFsdWUpO1xyXG4gICAgZm9yKGxldCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKXtcclxuICAgICAgICBoYW5kbGVQaG9uZyhjaGlsZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnNoaW5pbmVzcy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBoYW5kbGVQaG9uZyh0YXJnZXQpO1xyXG59KTtcclxuXHJcbmFtYmllbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgaGFuZGxlUGhvbmcodGFyZ2V0KTtcclxufSk7XHJcblxyXG5zcGVjdWxhci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBoYW5kbGVQaG9uZyh0YXJnZXQpO1xyXG59KTtcclxuXHJcbmRpZmZ1c2UuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgaGFuZGxlUGhvbmcodGFyZ2V0KTtcclxufSk7XHJcblxyXG5zcGVjdWxhckNvbG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGhhbmRsZVBob25nKHRhcmdldCk7XHJcbn0pO1xyXG5cclxuZGlmZnVzZUNvbG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGhhbmRsZVBob25nKHRhcmdldCk7XHJcbn0pO1xyXG5cclxubGlnaHRYLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGxpZ2h0RGlyZWN0aW9uWzBdID0gcGFyc2VGbG9hdChsaWdodFgudmFsdWUpO1xyXG59KVxyXG5cclxubGlnaHRZLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGxpZ2h0RGlyZWN0aW9uWzFdID0gcGFyc2VGbG9hdChsaWdodFkudmFsdWUpO1xyXG59KVxyXG5cclxubGlnaHRaLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGxpZ2h0RGlyZWN0aW9uWzJdID0gcGFyc2VGbG9hdChsaWdodFoudmFsdWUpO1xyXG59KVxyXG5cclxuLyoqIEhBTkRMRSBGUkFNRSAqL1xyXG5cclxuLy8gdG90YWwgZnJhbWVcclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVRvdGFsTW9kZWxGcmFtZShwYXJlbnRfbm9kZSl7XHJcbiAgICAvLyBnZXQgdmFsdWUgb2YgdG90YWwgbW9kZWwgZnJhbWUgdGV4dFxyXG4gICAgbGV0IF90b3RhbEZyYW1lVGV4dCA9IHRvdGFsTW9kZWxGcmFtZS50ZXh0Q29udGVudDtcclxuICAgIC8vIGdldCB0b3RhbCBmcmFtZVxyXG4gICAgbGV0IF90b3RhbEZyYW1lID0gQW5pbWF0aW9uLnRvdGFsTW9kZWxGcmFtZXMocGFyZW50X25vZGUpO1xyXG4gICAgY29uc29sZS5sb2coX3RvdGFsRnJhbWUpXHJcbiAgICAvLyBzZXQgdG90YWwgZnJhbWVcclxuICAgIF90b3RhbEZyYW1lVGV4dCA9IFwiVG90YWwgTW9kZWwgRnJhbWVzOiBcIisgX3RvdGFsRnJhbWU7XHJcbiAgICB0b3RhbE1vZGVsRnJhbWUudGV4dENvbnRlbnQgPSBfdG90YWxGcmFtZVRleHQ7XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVRvdGFsTm9kZUZyYW1lKG5vZGUpe1xyXG4gICAgbGV0IF90b3RhbEZyYW1lVGV4dCA9IHRvdGFsTm9kZUZyYW1lLnRleHRDb250ZW50O1xyXG4gICAgbGV0IF90b3RhbEZyYW1lID0gQW5pbWF0aW9uLnRvdGFsTm9kZUZyYW1lcyhub2RlKTtcclxuICAgIF90b3RhbEZyYW1lVGV4dCA9IFwiVG90YWwgTm9kZSBGcmFtZXM6IFwiICsgX3RvdGFsRnJhbWVcclxuICAgIHRvdGFsTm9kZUZyYW1lLnRleHRDb250ZW50ID0gX3RvdGFsRnJhbWVUZXh0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQ3VycmVudE1vZGVsRnJhbWUocGFyZW50X21vZGVsKXtcclxuICAgIGxldCBfY3VycmVudEZyYW1lID0gQW5pbWF0aW9uLmN1cnJlbnRNb2RlbEZyYW1lKHBhcmVudF9tb2RlbClcclxuICAgIGN1cnJlbnRNb2RlbEZyYW1lLnRleHRDb250ZW50ID0gXCJDdXJyZW50IE1vZGVsIEZyYW1lOiBcIiArIF9jdXJyZW50RnJhbWVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUN1cnJlbnROb2RlRnJhbWUobm9kZSl7XHJcbiAgICBsZXQgX2N1cnJGcmFtZSA9IEFuaW1hdGlvbi5jdXJyZW50Tm9kZUZyYW1lKG5vZGUpXHJcbiAgICBjdXJyZW50Tm9kZUZyYW1lLnRleHRDb250ZW50ID0gXCJDdXJyZW50IE5vZGUgRnJhbWU6IFwiICsgX2N1cnJGcmFtZVxyXG59XHJcblxyXG4vLyBhZGQgRnJhbWUgbWVjaGFuaXNtXHJcbmFkZEZyYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGFkZEZyYW1lTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWZyYW1lLW1vZGFsJylcclxuICAgIGFkZEZyYW1lTW9kYWwuY2xhc3NOYW1lID0gYWRkRnJhbWVNb2RhbC5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxyXG59KVxyXG5cclxuYmFzaWNDb2xvci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQucGlja2VkQ29sb3IgPSBoZXhUb1JnYihiYXNpY0NvbG9yLnZhbHVlKTtcclxufSk7XHJcblxyXG4iLCJpbXBvcnQgcGlnTW9kZWwgZnJvbSBcIi4vc3RydWN0cy9tb2RlbC9waWcuanNcIjtcclxuaW1wb3J0IGNoaWNrZW5Nb2RlbCBmcm9tIFwiLi9zdHJ1Y3RzL21vZGVsL2NoaWNrZW4uanNcIjtcclxuaW1wb3J0IGZveE1vZGVsIGZyb20gXCIuL3N0cnVjdHMvbW9kZWwvZm94LmpzXCI7XHJcbmltcG9ydCBNYXQ0IGZyb20gXCIuL3N0cnVjdHMvbWF0aC9NYXQ0LmpzXCI7XHJcbmltcG9ydCBWZWMzIGZyb20gXCIuL3N0cnVjdHMvbWF0aC9WZWMzLmpzXCI7XHJcbmltcG9ydCBWZWM0IGZyb20gXCIuL3N0cnVjdHMvbWF0aC9WZWM0LmpzXCI7XHJcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4vdXRpbHMvQ2FtZXJhLmpzXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlDb21wb25lbnQsIFxyXG4gIGNsZWFyQ29tcG9uZW50LCBcclxuICBpbml0T3B0aW9uTW9kZWwsIFxyXG4gIGhhbmRsZVRyYW5zZm9ybSwgXHJcbiAgaGFuZGxlVG90YWxNb2RlbEZyYW1lLFxyXG4gIGhhbmRsZVRvdGFsTm9kZUZyYW1lLFxyXG4gIGhhbmRsZUN1cnJlbnRNb2RlbEZyYW1lLFxyXG4gIGhhbmRsZUN1cnJlbnROb2RlRnJhbWUgfSBmcm9tIFwiLi9oYW5kbGVyL2V2ZW50SGFuZGxlci5qc1wiO1xyXG5pbXBvcnQgaG9sbG93TW9kZWwgZnJvbSBcIi4vc3RydWN0cy9tb2RlbC9ob2xsb3dUaGluZ3kuanNcIjtcclxuaW1wb3J0IGhvbGxvd1JpbmdNb2RlbCBmcm9tIFwiLi9zdHJ1Y3RzL21vZGVsL3JpbmcuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlUGFwZXJUZXh0dXJlLCBjcmVhdGVFbnZpcm9ubWVudFRleHR1cmUsIGNyZWF0ZUJ1bXBUZXh0dXJlIH0gZnJvbSBcIi4vdXRpbHMvdGV4dHVyZS5qc1wiXHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4vdXRpbHMvQW5pbWF0aW9uLmpzXCI7XHJcblxyXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdsLWNhbnZhc1wiKTtcclxuY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xyXG5cclxuXHJcbmNvbnN0IHZlcnRleFNoYWRlclNvdXJjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVydGV4LXNoYWRlci0zZFwiKT8udGV4dENvbnRlbnQ7XHJcbmNvbnN0IGZyYWdtZW50U2hhZGVyU291cmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmFnbWVudC1zaGFkZXItM2RcIik/LnRleHRDb250ZW50O1xyXG5cclxuLy8gc3RhdGVcclxudmFyIG1vZGVsID0gW3BpZ01vZGVsLCBjaGlja2VuTW9kZWwsIGZveE1vZGVsLCBob2xsb3dNb2RlbCwgaG9sbG93UmluZ01vZGVsXTtcclxudmFyIG9iamVjdHM7XHJcbmV4cG9ydCB2YXIgdGFyZ2V0O1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0VGFyZ2V0KHZhbHVlKSB7XHJcbiAgdGFyZ2V0ID0gdmFsdWU7XHJcbn1cclxuZXhwb3J0IHZhciB0YXJnZXRSb290O1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0VGFyZ2V0Um9vdCh2YWx1ZSkge1xyXG4gIHRhcmdldFJvb3QgPSB2YWx1ZTtcclxufVxyXG52YXIgbGlnaHRpbmc7XHJcbmV4cG9ydCB2YXIgbGlnaHREaXJlY3Rpb247XHJcbnZhciB0ZXh0dXJlO1xyXG52YXIgcHJvamVjdGlvbl90eXBlO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFByb2plY3Rpb25UeXBlKG5ld1Byb2plY3Rpb24pIHtcclxuICBwcm9qZWN0aW9uX3R5cGUgPSBuZXdQcm9qZWN0aW9uO1xyXG59XHJcbnZhciBmYWN0b3I7XHJcbnZhciBvYmxpcXVlX3RoZXRhO1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0T2JsaXF1ZVRoZXRhKG5ld1RoZXRhKSB7XHJcbiAgb2JsaXF1ZV90aGV0YSA9IG5ld1RoZXRhO1xyXG59XHJcbnZhciBvYmxpcXVlX3BoaTtcclxuZXhwb3J0IGZ1bmN0aW9uIHNldE9ibGlxdWVQaGkobmV3UGhpKSB7XHJcbiAgb2JsaXF1ZV9waGkgPSBuZXdQaGk7XHJcbn1cclxudmFyIG5vcm1hbGl6ZUxpZ2h0O1xyXG52YXIgd29ybGRWaWV3UHJvamVjdGlvbk1hdHJpeDtcclxuXHJcbi8vIGFuaW1hdGlvblxyXG52YXIgdF9hbmltYXRpb24gPSAwO1xyXG52YXIgZnBzX3RpbWUgPSAwLjE1O1xyXG5cclxuaW5pdFN0YXRlKCk7XHJcblxyXG5mdW5jdGlvbiBpbml0U3RhdGUoKSB7XHJcbiAgICBvYmplY3RzID0gbW9kZWxbMF07XHJcbiAgICBmb2N1cyA9IG51bGw7XHJcbiAgICBsaWdodGluZyA9IGZhbHNlO1xyXG4gICAgbGlnaHREaXJlY3Rpb24gPSBbMC4wLCAwLjAsIDEuMF1cclxuICAgIHRleHR1cmUgPSBcIm5vbmVcIjtcclxuICAgIHByb2plY3Rpb25fdHlwZSA9IFwib3J0aG9ncmFwaGljXCI7XHJcbiAgICBmYWN0b3IgPSAwLjA7XHJcbiAgICBvYmxpcXVlX3RoZXRhID0gOTAuMDtcclxuICAgIG9ibGlxdWVfcGhpID0gOTAuMDtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBtb2RlbC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgc2V0RGVmYXVsdFJvdGF0aW9uKG1vZGVsW2ldKTtcclxuICAgIH1cclxuICAgIGRpc3BsYXlDb21wb25lbnQoMCwgb2JqZWN0cyk7XHJcbiAgICBpbml0T3B0aW9uTW9kZWwobW9kZWwpO1xyXG4gICAgaGFuZGxlVHJhbnNmb3JtKG9iamVjdHNbMF0pXHJcblxyXG59XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgaWYoIWdsKXtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXZWJHTCBub3Qgc3VwcG9ydGVkXCIpO1xyXG4gICAgfVxyXG4gICAgdGFyZ2V0ID0gb2JqZWN0c1swXTtcclxuICAgIHRhcmdldFJvb3QgPSB0YXJnZXQ7XHJcblxyXG5cclxuICAgIHJlbmRlcigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREZWZhdWx0U3RhdGUob2JqZWN0cykge1xyXG4gICAgb2JqZWN0cy5mb3JFYWNoKG9iamVjdCA9PiB7XHJcbiAgICAgICAgaWYgKCFvYmplY3QubW9kZWwuY29sb3JzKSB7XHJcbiAgICAgICAgICAgIGlmICghb2JqZWN0LnBpY2tlZENvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QubW9kZWwuY29sb3JzID0gZ2VuZXJhdGVDb2xvcnMob2JqZWN0Lm1vZGVsLnZlcnRpY2VzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5tb2RlbC5jb2xvcnMgPSBnZW5lcmF0ZUNvbG9ycyhcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QubW9kZWwudmVydGljZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnBpY2tlZENvbG9yXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBpZiAoIW9iamVjdC5wcm9ncmFtICYmICFsaWdodGluZykge1xyXG4gICAgICAgICAgICBvYmplY3QucHJvZ3JhbSA9IGNyZWF0ZVNoYWRlclByb2dyYW0oXHJcbiAgICAgICAgICAgICAgICBnbCxcclxuICAgICAgICAgICAgICAgIHZlcnRleFNoYWRlclNvdXJjZSxcclxuICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAvLyAgIGlmIChvYmplY3QuYW5pbWF0aW9uLmlzT2JqZWN0QW5pbWF0ZSAmJiBvYmplY3QuYW5pbWF0aW9uLmFuaW1hdGUpIHtcclxuICAgICAgICAvLyAgICAgb2JqZWN0LnRyYW5zZm9ybSA9IG9iamVjdC5hbmltYXRpb24uYW5pbWF0ZVtjb3VudGVyICUgZnBzXTtcclxuICAgICAgICAvLyAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAvLyBvYmplY3QudHJhbnNmb3JtID0gb2JqZWN0LmFuaW1hdGlvbi5hbmltYXRlW2NvdW50ZXIgJSBmcHNdO1xyXG4gICAgICAgIG9iamVjdC5sb2NhbE1hdHJpeCA9IHNldFRyYW5zZm9ybShvYmplY3QpO1xyXG4gICAgICAgIGlmIChvYmplY3QuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzZXREZWZhdWx0U3RhdGUob2JqZWN0LmNoaWxkcmVuKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRUcmFuc2Zvcm0ob2JqZWN0KSB7XHJcbiAgICAvKiBTZXR1cCB0cmFuc2Zvcm0gbWF0cml4ICovXHJcblxyXG4gICAgdmFyIHRyYW5zZm9ybU1hdHJpeCA9IE1hdDQudHJhbnNsYXRlKFxyXG4gICAgICBvYmplY3QudHJhbnNmb3JtLnRyYW5zbGF0ZVswXSxcclxuICAgICAgb2JqZWN0LnRyYW5zZm9ybS50cmFuc2xhdGVbMV0sXHJcbiAgICAgIG9iamVjdC50cmFuc2Zvcm0udHJhbnNsYXRlWzJdXHJcbiAgICApO1xyXG5cclxuICAgIGxldCBfY2VudGVyID0gb2JqZWN0Lm1vZGVsLmNlbnRlclxyXG4gICAgaWYoX2NlbnRlcil7XHJcbiAgICAgIHRyYW5zZm9ybU1hdHJpeCA9IE1hdDQubXVsdGlwbHkoXHJcbiAgICAgICAgdHJhbnNmb3JtTWF0cml4LFxyXG4gICAgICAgIE1hdDQudHJhbnNsYXRlKF9jZW50ZXJbMF0sIF9jZW50ZXJbMV0sIF9jZW50ZXJbMl0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRyYW5zZm9ybU1hdHJpeCA9IE1hdDQubXVsdGlwbHkoXHJcbiAgICAgIHRyYW5zZm9ybU1hdHJpeCxcclxuICAgICAgTWF0NC5yb3RhdGVYKG9iamVjdC50cmFuc2Zvcm0ucm90YXRlWzBdKVxyXG4gICAgKTtcclxuICBcclxuICAgIHRyYW5zZm9ybU1hdHJpeCA9IE1hdDQubXVsdGlwbHkoXHJcbiAgICAgIHRyYW5zZm9ybU1hdHJpeCxcclxuICAgICAgTWF0NC5yb3RhdGVZKG9iamVjdC50cmFuc2Zvcm0ucm90YXRlWzFdKVxyXG4gICAgKTtcclxuICBcclxuICAgIHRyYW5zZm9ybU1hdHJpeCA9IE1hdDQubXVsdGlwbHkoXHJcbiAgICAgIHRyYW5zZm9ybU1hdHJpeCxcclxuICAgICAgTWF0NC5yb3RhdGVaKG9iamVjdC50cmFuc2Zvcm0ucm90YXRlWzJdKVxyXG4gICAgKTtcclxuXHJcbiAgICBpZihfY2VudGVyKXtcclxuICAgICAgdHJhbnNmb3JtTWF0cml4ID0gTWF0NC5tdWx0aXBseShcclxuICAgICAgICB0cmFuc2Zvcm1NYXRyaXgsXHJcbiAgICAgICAgTWF0NC50cmFuc2xhdGUoLV9jZW50ZXJbMF0sIC1fY2VudGVyWzFdLCAtX2NlbnRlclsyXSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICBcclxuICAgIHRyYW5zZm9ybU1hdHJpeCA9IE1hdDQubXVsdGlwbHkoXHJcbiAgICAgIHRyYW5zZm9ybU1hdHJpeCxcclxuICAgICAgTWF0NC5zY2FsZShcclxuICAgICAgICBvYmplY3QudHJhbnNmb3JtLnNjYWxlWzBdLFxyXG4gICAgICAgIG9iamVjdC50cmFuc2Zvcm0uc2NhbGVbMV0sXHJcbiAgICAgICAgb2JqZWN0LnRyYW5zZm9ybS5zY2FsZVsyXVxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIFxyXG4gICAgcmV0dXJuIHRyYW5zZm9ybU1hdHJpeDtcclxuICB9XHJcblxyXG5mdW5jdGlvbiBzZXREZWZhdWx0Um90YXRpb24ob2JqZWN0cykge1xyXG4gICAgZm9yKGxldCBvYmplY3Qgb2Ygb2JqZWN0cyl7XHJcbiAgICAgICAgb2JqZWN0LnRyYW5zZm9ybS5yb3RhdGUgPSBvYmplY3QudHJhbnNmb3JtLnJvdGF0ZS5tYXAoKHZhbCkgPT4gZGVnVG9SYWQodmFsKSk7XHJcbiAgICAgICAgaWYob2JqZWN0LmNoaWxkcmVuLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBzZXREZWZhdWx0Um90YXRpb24ob2JqZWN0LmNoaWxkcmVuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJMb29wKG9iamVjdHMpIHtcclxuICAgIG9iamVjdHMuZm9yRWFjaChvYmplY3QgPT4ge1xyXG4gICAgICAgIGdsLnVzZVByb2dyYW0ob2JqZWN0LnByb2dyYW0pO1xyXG4gICAgICAgIHZhciBtb2RlbE1hdHJpeCA9IG9iamVjdC5nZXRXb3JsZE1hdHJpeCgpO1xyXG5cclxuICAgICAgICBvYmplY3Qud29ybGRNYXRyaXggPSBzZXRQcm9qZWN0aW9uTWF0cml4KG9iamVjdC53b3JsZE1hdHJpeCwgb2JqZWN0KVxyXG5cclxuXHJcbiAgICAgICAgdmFyIGFfcG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KG9iamVjdC5tb2RlbC52ZXJ0aWNlcy5mbGF0KDEpKTtcclxuICAgICAgICB2YXIgYV9ub3JtYWwgPSBuZXcgRmxvYXQzMkFycmF5KG9iamVjdC5tb2RlbC5ub3JtYWxzLmZsYXQoMSkpO1xyXG4gICAgICAgIHZhciBhX2NvbG9yID0gbmV3IEZsb2F0MzJBcnJheShvYmplY3QucGlja2VkQ29sb3IuZmxhdCgxKSk7XHJcbiAgICAgICAgdmFyIGFfdGV4dHVyZSA9IG5ldyBGbG9hdDMyQXJyYXkob2JqZWN0Lm1vZGVsLnRleENvb3JkKTtcclxuICAgICAgICB2YXIgYV90YW5nZW50ID0gbmV3IEZsb2F0MzJBcnJheShvYmplY3QubW9kZWwudGFuZ2VudHMuZmxhdCgxKSk7XHJcbiAgICAgICAgdmFyIGFfYml0YW5nZW50ID0gbmV3IEZsb2F0MzJBcnJheShvYmplY3QubW9kZWwuYml0YW5nZW50cy5mbGF0KDEpKTtcclxuXHJcbiAgICAgICAgc2V0QXR0cihnbCwgb2JqZWN0LnByb2dyYW0sIGFfcG9zaXRpb24sIGFfbm9ybWFsLCBhX2NvbG9yLCBhX3RleHR1cmUsIGFfdGFuZ2VudCwgYV9iaXRhbmdlbnQpO1xyXG5cclxuICAgICAgICAvLyBjb25zdCBkaWZmdXNlID0gWzEsIDEsIDFdO1xyXG4gICAgICAgIC8vIGNvbnN0IHNwZWN1bGFyID0gWzAsIDAsIDBdO1xyXG4gICAgICAgIC8vIGNvbnN0IGFtYmllbnQgPSBbMSwgMSAsMV1cclxuICAgICAgICAvLyBjb25zdCBzaGluaW5lc3MgPSAxMDA7XHJcblxyXG4gICAgICAgIHZhciB1bmlmb3JtcyA9IHtcclxuICAgICAgICAgICAgdVdvcmxkVmlld1Byb2plY3Rpb246IG9iamVjdC53b3JsZE1hdHJpeCxcclxuICAgICAgICAgICAgdVdvcmxkSW52ZXJzZVRyYW5zcG9zZTogb2JqZWN0LndvcmxkSW52ZXJzZU1hdHJpeCxcclxuICAgICAgICAgICAgdVJldmVyc2VMaWdodERpcmVjdGlvbjogbm9ybWFsaXplTGlnaHQsXHJcbiAgICAgICAgICAgIHVDb2xvcjogb2JqZWN0LnBpY2tlZENvbG9yLmNvbmNhdCgxLjApLFxyXG4gICAgICAgICAgICB1TW9kZWxNYXRyaXg6IG1vZGVsTWF0cml4LFxyXG4gICAgICAgICAgICB1QW1iaWVudENvbG9yOiBvYmplY3QuYW1iaWVudCxcclxuICAgICAgICAgICAgdURpZmZ1c2VDb2xvcjogb2JqZWN0LmRpZmZ1c2UsXHJcbiAgICAgICAgICAgIHVTcGVjdWxhckNvbG9yOiBvYmplY3Quc3BlY3VsYXIsXHJcbiAgICAgICAgICAgIHVTaGluaW5lc3M6IG9iamVjdC5zaGluaW5lc3MsXHJcbiAgICAgICAgICAgIHVMaWdodFBvczogbm9ybWFsaXplTGlnaHQsXHJcbiAgICAgICAgICAgIGthOiBvYmplY3QuY29uc3Qua2EsXHJcbiAgICAgICAgICAgIGtkOiBvYmplY3QuY29uc3Qua2QsXHJcbiAgICAgICAgICAgIGtzOiBvYmplY3QuY29uc3Qua3MsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRVbmlmb3JtcyhnbCwgb2JqZWN0LnByb2dyYW0sIHVuaWZvcm1zKTtcclxuXHJcbiAgICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRVMsIDAsIG9iamVjdC5tb2RlbC52ZXJ0aWNlcy5sZW5ndGgpO1xyXG4gICAgICAgIGlmIChvYmplY3QuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZW5kZXJMb29wKG9iamVjdC5jaGlsZHJlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbndpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDEpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH0pKCk7XHJcblxyXG5cclxuZnVuY3Rpb24gcmVuZGVyKG5vdykge1xyXG4gICAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcclxuICAgIGdsLmNsZWFyQ29sb3IoMC44LCAwLjgsIDAuOCwgMS4wKTtcclxuICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcclxuXHJcbiAgICBnbC5lbmFibGUoZ2wuQ1VMTF9GQUNFKTtcclxuICAgIGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcclxuXHJcbiAgICBzZXREZWZhdWx0U3RhdGUob2JqZWN0cyk7XHJcbiAgICAvLyBkZWx0YSB0aW1lXHJcbiAgICBpZighbm93KSBub3cgPSAwO1xyXG4gICAgaWYodF9hbmltYXRpb24gPT09IDApIHRfYW5pbWF0aW9uID0gbm93O1xyXG5cclxuICAgIGlmKChub3cgLSB0X2FuaW1hdGlvbikgPj0gZnBzX3RpbWUpe1xyXG4gICAgICB0X2FuaW1hdGlvbiA9IG5vdztcclxuICAgICAgbGV0IGRlbHRhVGltZSA9IG5vdyAtIHRfYW5pbWF0aW9uO1xyXG4gICAgICBBbmltYXRpb24uYW5pbWF0ZSh0YXJnZXRSb290LCBkZWx0YVRpbWUpO1xyXG4gICAgICBoYW5kbGVDdXJyZW50TW9kZWxGcmFtZSh0YXJnZXRSb290KVxyXG4gICAgICBoYW5kbGVDdXJyZW50Tm9kZUZyYW1lKHRhcmdldClcclxuICAgIH1cclxuXHJcblxyXG4gICAgb2JqZWN0c1swXS5zZXRXb3JsZE10eChudWxsKTtcclxuXHJcbiAgICBub3JtYWxpemVMaWdodCA9IFZlYzMudW5pdFZlY3RvcihWZWMzLmZyb21BcnJheShsaWdodERpcmVjdGlvbikpLmFzQXJyYXkoKVxyXG4gICAgcmVuZGVyTG9vcChvYmplY3RzKTtcclxuICAgIEFuaW1hdGlvbi5oYW5kbGVUcmFuc2Zvcm0odGFyZ2V0LCBkb2N1bWVudCk7XHJcbiAgICBcclxuICB3aW5kb3cucmVxdWVzdEFuaW1GcmFtZShyZW5kZXIpO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZXRQcm9qZWN0aW9uTWF0cml4KG1hdHJpeCwgb2JqZWN0KSB7XHJcbiAgICAvLyBjb25zdCBjYW1lcmEgPSBzZXRDYW1lcmEob2JqZWN0KTtcclxuICAgIGNvbnN0IHByb2plY3Rpb25WaWV3ID0gQ2FtZXJhLnByb2plY3Rpb25NYXRyaXgocHJvamVjdGlvbl90eXBlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZ1RvUmFkKDQ1KSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FudmFzLndpZHRoIC8gY2FudmFzLmhlaWdodCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnZpZXdNYXRyaXgubmVhciwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3Qudmlld01hdHJpeC5mYXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmxpcXVlX3RoZXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JsaXF1ZV9waGkpXHJcbiAgICBjb25zdCB2aWV3TWF0cml4ID0gQ2FtZXJhLnZpZXdNYXRyaXgob2JqZWN0LnZpZXdNYXRyaXguY2FtZXJhLCBvYmplY3Qudmlld01hdHJpeC5sb29rQXQsIG9iamVjdC52aWV3TWF0cml4LnVwKTtcclxuICAgIHZhciB2aWV3UHJvamVjdGlvbk1hdHJpeCA9IE1hdDQubXVsdGlwbHkocHJvamVjdGlvblZpZXcsIHZpZXdNYXRyaXgpO1xyXG4gICAgaWYgKGZhY3RvciA8IDAuMDEpIHtcclxuICAgICAgICBmYWN0b3IgPSAwLjAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcm9qZWN0aW9uX3R5cGUgPT09IFwicGVyc3BlY3RpdmVcIikge1xyXG4gICAgICAgIHZpZXdQcm9qZWN0aW9uTWF0cml4ID0gTWF0NC5tdWx0aXBseShcclxuICAgICAgICAgICAgQ2FtZXJhLm1ha2VaVG9XTWF0cml4KGZhY3RvciksXHJcbiAgICAgICAgICAgIHZpZXdQcm9qZWN0aW9uTWF0cml4LFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgd29ybGRWaWV3UHJvamVjdGlvbk1hdHJpeCA9IE1hdDQubXVsdGlwbHkodmlld1Byb2plY3Rpb25NYXRyaXgsIG1hdHJpeCk7XHJcblxyXG4gICAgcmV0dXJuIHdvcmxkVmlld1Byb2plY3Rpb25NYXRyaXg7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlTW9kZWxPYmplY3QgKGluZGV4KSB7XHJcbiAgICBvYmplY3RzID0gbW9kZWxbaW5kZXhdO1xyXG4gICAgc2V0VGFyZ2V0KG9iamVjdHNbMF0pO1xyXG4gICAgc2V0VGFyZ2V0Um9vdChvYmplY3RzWzBdKTtcclxuICAgIGNsZWFyQ29tcG9uZW50KCk7XHJcbiAgICBkaXNwbGF5Q29tcG9uZW50KDAsIG9iamVjdHMpO1xyXG4gICAgaGFuZGxlVHJhbnNmb3JtKG9iamVjdHNbMF0pO1xyXG4gICAgaGFuZGxlVG90YWxNb2RlbEZyYW1lKHRhcmdldFJvb3QpXHJcbiAgICBoYW5kbGVUb3RhbE5vZGVGcmFtZSh0YXJnZXRSb290KVxyXG4gICAgcmVuZGVyKCk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlTWFwcGluZ1RleHR1cmUob2JqZWN0cywgdGV4dHVyZVR5cGUpIHtcclxuICBvYmplY3RzLmZvckVhY2goKG9iamVjdCkgPT4ge1xyXG4gICAgaWYgKHRleHR1cmVUeXBlID09PSBcIjBcIikge1xyXG4gICAgICBvYmplY3QucHJvZ3JhbSA9IGNyZWF0ZVNoYWRlclByb2dyYW0oXHJcbiAgICAgICAgZ2wsXHJcbiAgICAgICAgdmVydGV4X3NoYWRlcl8zZCxcclxuICAgICAgICBmcmFnbWVudF9zaGFkZXJfM2Rfbm9fbGlnaHRpbmdcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAodGV4dHVyZVR5cGUgPT09IFwiMVwiKSB7XHJcbiAgICAgIGNyZWF0ZVBhcGVyVGV4dHVyZShnbCk7XHJcbiAgICAgIG9iamVjdC5wcm9ncmFtID0gY3JlYXRlU2hhZGVyUHJvZ3JhbShcclxuICAgICAgICBnbCxcclxuICAgICAgICB2ZXJ0ZXhfc2hhZGVyXzNkLFxyXG4gICAgICAgIGZyYWdtZW50X3NoYWRlcl90ZXh0dXJlXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKHRleHR1cmVUeXBlID09PSBcIjJcIikge1xyXG4gICAgICBjcmVhdGVFbnZpcm9ubWVudFRleHR1cmUoZ2wpO1xyXG4gICAgICBvYmplY3QucHJvZ3JhbSA9IGNyZWF0ZVNoYWRlclByb2dyYW0oXHJcbiAgICAgICAgZ2wsXHJcbiAgICAgICAgdmVydGV4X3NoYWRlcl8zZCxcclxuICAgICAgICBmcmFnbWVudF9zaGFkZXJfZW52aXJvbm1lbnRcclxuICAgICAgKVxyXG4gICAgfSBlbHNlIGlmICh0ZXh0dXJlVHlwZSA9PT0gXCIzXCIpIHtcclxuICAgICAgY3JlYXRlQnVtcFRleHR1cmUoZ2wpO1xyXG4gICAgICBvYmplY3QucHJvZ3JhbSA9IGNyZWF0ZVNoYWRlclByb2dyYW0oXHJcbiAgICAgICAgZ2wsXHJcbiAgICAgICAgdmVydGV4X3NoYWRlcl8zZCxcclxuICAgICAgICBmcmFnbWVudF9zaGFkZXJfYnVtcFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKG9iamVjdC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNoYW5nZU1hcHBpbmdUZXh0dXJlKG9iamVjdC5jaGlsZHJlbiwgdGV4dHVyZVR5cGUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBWZWM0IGZyb20gXCIuL1ZlYzQuanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0NHtcclxuICAgIHN0YXRpYyBnZXRFbXB0eSgpe1xyXG4gICAgICAgIHJldHVybiBbMCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMF1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0SWRlbnRpdHkoKXtcclxuICAgICAgICByZXR1cm4gWzEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDFdO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgZ2V0VHJhbnNsYXRpb24oeCwgeSwgeil7XHJcbiAgICAgICAgcmV0dXJuIFsxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICB4LCB5LCB6LCAxXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0U2NhbGUoeCwgeSwgeil7XHJcbiAgICAgICAgcmV0dXJuIFt4LCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgeSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIHosIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAxXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Um90YXRpb25YKHRoZXRhKXtcclxuICAgICAgICByZXR1cm4gWzEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCBNYXRoLmNvcyh0aGV0YSksIC1NYXRoLnNpbih0aGV0YSksIDAsXHJcbiAgICAgICAgICAgICAgICAwLCBNYXRoLnNpbih0aGV0YSksIE1hdGguY29zKHRoZXRhKSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRSb3RhdGlvblkodGhldGEpe1xyXG4gICAgICAgIHJldHVybiBbTWF0aC5jb3ModGhldGEpLCAwLCBNYXRoLnNpbih0aGV0YSksIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgLU1hdGguc2luKHRoZXRhKSwgMCwgTWF0aC5jb3ModGhldGEpLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMV07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFJvdGF0aW9uWih0aGV0YSl7XHJcbiAgICAgICAgcmV0dXJuIFtNYXRoLmNvcyh0aGV0YSksIC1NYXRoLnNpbih0aGV0YSksIDAsIDAsXHJcbiAgICAgICAgICAgICAgICBNYXRoLnNpbih0aGV0YSksIE1hdGguY29zKHRoZXRhKSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAxXTtcclxuICAgIH0gICBcclxuICAgIFxyXG4gICAgc3RhdGljIHRyYW5zcG9zZShhKSB7XHJcbiAgICAgICAgaWYgKCFhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsOyAvLyBvciByZXR1cm4gYSBkZWZhdWx0IG1hdHJpeCBvciBoYW5kbGUgdGhlIG51bGwgY2FzZSBhcHByb3ByaWF0ZWx5XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIGFbMF0sIGFbNF0sIGFbOF0sIGFbMTJdLFxyXG4gICAgICAgICAgICBhWzFdLCBhWzVdLCBhWzldLCBhWzEzXSxcclxuICAgICAgICAgICAgYVsyXSwgYVs2XSwgYVsxMF0sIGFbMTRdLFxyXG4gICAgICAgICAgICBhWzNdLCBhWzddLCBhWzExXSwgYVsxNV1cclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpbnZlcnNlKGEpIHtcclxuICAgICAgICB2YXIgYTAwID0gYVswICogNCArIDBdO1xyXG4gICAgICAgIHZhciBhMDEgPSBhWzAgKiA0ICsgMV07XHJcbiAgICAgICAgdmFyIGEwMiA9IGFbMCAqIDQgKyAyXTtcclxuICAgICAgICB2YXIgYTAzID0gYVswICogNCArIDNdO1xyXG4gICAgICAgIHZhciBhMTAgPSBhWzEgKiA0ICsgMF07XHJcbiAgICAgICAgdmFyIGExMSA9IGFbMSAqIDQgKyAxXTtcclxuICAgICAgICB2YXIgYTEyID0gYVsxICogNCArIDJdO1xyXG4gICAgICAgIHZhciBhMTMgPSBhWzEgKiA0ICsgM107XHJcbiAgICAgICAgdmFyIGEyMCA9IGFbMiAqIDQgKyAwXTtcclxuICAgICAgICB2YXIgYTIxID0gYVsyICogNCArIDFdO1xyXG4gICAgICAgIHZhciBhMjIgPSBhWzIgKiA0ICsgMl07XHJcbiAgICAgICAgdmFyIGEyMyA9IGFbMiAqIDQgKyAzXTtcclxuICAgICAgICB2YXIgYTMwID0gYVszICogNCArIDBdO1xyXG4gICAgICAgIHZhciBhMzEgPSBhWzMgKiA0ICsgMV07XHJcbiAgICAgICAgdmFyIGEzMiA9IGFbMyAqIDQgKyAyXTtcclxuICAgICAgICB2YXIgYTMzID0gYVszICogNCArIDNdO1xyXG4gICAgICAgIHZhciBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTA7XHJcbiAgICAgICAgdmFyIGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMDtcclxuICAgICAgICB2YXIgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwO1xyXG4gICAgICAgIHZhciBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTE7XHJcbiAgICAgICAgdmFyIGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMTtcclxuICAgICAgICB2YXIgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyO1xyXG4gICAgICAgIHZhciBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzA7XHJcbiAgICAgICAgdmFyIGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMDtcclxuICAgICAgICB2YXIgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwO1xyXG4gICAgICAgIHZhciBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzE7XHJcbiAgICAgICAgdmFyIGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMTtcclxuICAgICAgICB2YXIgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyO1xyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XHJcbiAgICAgICAgdmFyIGRldCA9XHJcbiAgICAgICAgYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xyXG5cclxuICAgICAgICBpZiAoIWRldCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZXQgPSAxLjAgLyBkZXQ7XHJcblxyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIChhMTEgKiBiMTEgLSBhMTIgKiBiMTAgKyBhMTMgKiBiMDkpICogZGV0LFxyXG4gICAgICAgICAgICAoYTAyICogYjEwIC0gYTAxICogYjExIC0gYTAzICogYjA5KSAqIGRldCxcclxuICAgICAgICAgICAgKGEzMSAqIGIwNSAtIGEzMiAqIGIwNCArIGEzMyAqIGIwMykgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMjIgKiBiMDQgLSBhMjEgKiBiMDUgLSBhMjMgKiBiMDMpICogZGV0LFxyXG4gICAgICAgICAgICAoYTEyICogYjA4IC0gYTEwICogYjExIC0gYTEzICogYjA3KSAqIGRldCxcclxuICAgICAgICAgICAgKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMzIgKiBiMDIgLSBhMzAgKiBiMDUgLSBhMzMgKiBiMDEpICogZGV0LFxyXG4gICAgICAgICAgICAoYTIwICogYjA1IC0gYTIyICogYjAyICsgYTIzICogYjAxKSAqIGRldCxcclxuICAgICAgICAgICAgKGExMCAqIGIxMCAtIGExMSAqIGIwOCArIGExMyAqIGIwNikgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMDEgKiBiMDggLSBhMDAgKiBiMTAgLSBhMDMgKiBiMDYpICogZGV0LFxyXG4gICAgICAgICAgICAoYTMwICogYjA0IC0gYTMxICogYjAyICsgYTMzICogYjAwKSAqIGRldCxcclxuICAgICAgICAgICAgKGEyMSAqIGIwMiAtIGEyMCAqIGIwNCAtIGEyMyAqIGIwMCkgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMTEgKiBiMDcgLSBhMTAgKiBiMDkgLSBhMTIgKiBiMDYpICogZGV0LFxyXG4gICAgICAgICAgICAoYTAwICogYjA5IC0gYTAxICogYjA3ICsgYTAyICogYjA2KSAqIGRldCxcclxuICAgICAgICAgICAgKGEzMSAqIGIwMSAtIGEzMCAqIGIwMyAtIGEzMiAqIGIwMCkgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMjAgKiBiMDMgLSBhMjEgKiBiMDEgKyBhMjIgKiBiMDApICogZGV0LFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRyYW5zbGF0ZSAodHgsIHR5LCB0eikge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIDEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgIHR4LCB0eSwgdHosIDFcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybiBiICogYVxyXG4gICAgc3RhdGljIG11bHRpcGx5KGEsIGIpe1xyXG4gICAgICAgIGxldCByZXMgPSBNYXQ0LmdldEVtcHR5KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyArK2kpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyArK2opIHtcclxuICAgICAgICAgICAgICAgIHJlc1tpICogNCArIGpdID0gVmVjNC5kb3QoTWF0NC5nZXRSb3coYiwgaSksIE1hdDQuZ2V0Q29sdW1uKGEsIGopKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJvdGF0ZVgocmFkKSB7XHJcbiAgICAgICAgdmFyIHNpbiA9IE1hdGguc2luKHJhZCk7XHJcbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKHJhZCk7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgY29zLCBzaW4sIDAsXHJcbiAgICAgICAgICAgIDAsIC1zaW4sIGNvcywgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJvdGF0ZVkocmFkKSB7XHJcbiAgICAgICAgdmFyIHNpbiA9IE1hdGguc2luKHJhZCk7XHJcbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKHJhZCk7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgY29zLCAwLCAtc2luLCAwLFxyXG4gICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICBzaW4sIDAsIGNvcywgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJvdGF0ZVoocmFkKSB7XHJcbiAgICAgICAgdmFyIHNpbiA9IE1hdGguc2luKHJhZCk7XHJcbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKHJhZCk7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgY29zLCBzaW4sIDAsIDAsXHJcbiAgICAgICAgICAgIC1zaW4sIGNvcywgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNjYWxlIChzeCwgc3ksIHN6KSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgc3gsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIHN5LCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCBzeiwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXRpbHNcclxuICAgIHN0YXRpYyBnZXRSb3cobWF0cml4LCByb3cpe1xyXG4gICAgICAgIC8vIHVzZSBWZWM0IHRvIGdldCB0aGUgcm93XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWM0KG1hdHJpeFtyb3cgKiA0XSwgbWF0cml4W3JvdyAqIDQgKyAxXSwgbWF0cml4W3JvdyAqIDQgKyAyXSwgbWF0cml4W3JvdyAqIDQgKyAzXSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldENvbHVtbihtYXRyaXgsIGNvbHVtbil7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWM0KG1hdHJpeFtjb2x1bW5dLCBtYXRyaXhbY29sdW1uICsgNF0sIG1hdHJpeFtjb2x1bW4gKyA4XSwgbWF0cml4W2NvbHVtbiArIDEyXSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWZWMze1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgeil7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMueiA9IHo7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYWRkKGEsIGIpe1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjMyhhLnggKyBiLngsIGEueSArIGIueSwgYS56ICsgYi56KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc3ViKGEsIGIpe1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjMyhhLnggLSBiLngsIGEueSAtIGIueSwgYS56IC0gYi56KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZG90KGEsIGIpe1xyXG4gICAgICAgIHJldHVybiBhLnggKiBiLnggKyBhLnkgKiBiLnkgKyBhLnogKiBiLno7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyb3NzKGEsIGIpe1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjMyhhLnogKiBiLnkgLSBhLnkgKiBiLnosIGEueCAqIGIueiAtIGEueiAqIGIueCAsYS55ICogYi54IC0gYS54ICogYi55KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbm9ybShhKXtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGEueCAqIGEueCArIGEueSAqIGEueSArIGEueiAqIGEueik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVuaXRWZWN0b3IoYSl7XHJcbiAgICAgICAgbGV0IG5vcm0gPSBWZWMzLm5vcm0oYSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWMzKGEueCAvIG5vcm0sIGEueSAvIG5vcm0sIGEueiAvIG5vcm0pO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgYXNBcnJheSgpeyAgXHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueSwgdGhpcy56XTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZnJvbUFycmF5KGFycmF5KXtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzMoYXJyYXlbMF0sIGFycmF5WzFdLCBhcnJheVsyXSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVmVjMyBmcm9tIFwiLi9WZWMzLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWM0e1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgeiwgdyl7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMueiA9IHo7XHJcbiAgICAgICAgdGhpcy53ID0gdztcclxuICAgIH1cclxuICAgIHN0YXRpYyBhZGQoYSwgYil7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWM0KGEueCArIGIueCwgYS55ICsgYi55LCBhLnogKyBiLnosIGEudyArIGIudyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRvdChhLCBiKXtcclxuICAgICAgICBsZXQgcmVzID0gYS54ICogYi54ICsgYS55ICogYi55ICsgYS56ICogYi56ICsgYS53ICogYi53XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbm9ybShhKXtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGEueCAqIGEueCArIGEueSAqIGEueSArIGEueiAqIGEueiArIGEudyAqIGEudyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5vcm1hbGl6ZShhKXtcclxuICAgICAgICBsZXQgbm9ybSA9IFZlYzQubm9ybShhKTtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzQoYS54IC8gbm9ybSwgYS55IC8gbm9ybSwgYS56IC8gbm9ybSwgYS53IC8gbm9ybSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzVmVjMyhhKXsgICBcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzMoYS54LCBhLnksIGEueik7XHJcbiAgICB9XHJcblxyXG4gICAgYXNBcnJheSgpeyAgXHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueSwgdGhpcy56LCB0aGlzLnddO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmcm9tQXJyYXkoYXJyYXkpe1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjNChhcnJheVswXSwgYXJyYXlbMV0sIGFycmF5WzJdLCBhcnJheVszXSk7XHJcbiAgICB9XHJcblxyXG59IiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWdUb1JhZChkZWdyZWVzKXtcclxuICAgIHJldHVybiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcclxufSAgIFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhZFRvRGVnKHJhZGlhbnMpe1xyXG4gICAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xyXG59IiwiaW1wb3J0IE5vZGUgZnJvbSBcIi4uL25vZGUuanNcIjtcclxuaW1wb3J0IHsgZGVnVG9SYWQgfSBmcm9tIFwiLi4vbWF0aC9tYXRoVXRpbHMuanNcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vdXRpbHMvQW5pbWF0aW9uLmpzXCI7XHJcblxyXG4vLyBDcmVhdGUgdGhlIGNoaWNrZW4gYm9keSBub2RlXHJcbmNvbnN0IGNoaWNrZW4gPSBuZXcgTm9kZSgpO1xyXG5jaGlja2VuLmZsYWcgPSBcImFydGljdWxhdGVkXCI7XHJcbmNoaWNrZW4ubmFtZSA9IFwiY2hpY2tlblwiO1xyXG5jaGlja2VuLm1vZGVsID0gYm94TW9kZWwoMSwgMS41LCAxLCBbMCwgMCwgMF0pO1xyXG5jaGlja2VuLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgcm90YXRlOiBbNDIsIC01NSwgMjddLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuY2hpY2tlbi5waWNrZWRDb2xvciA9IFswLjksIDAuOSwgMF0sXHJcbmNoaWNrZW4uZGlmZnVzZSA9IFswLCAwLCAwXSxcclxuY2hpY2tlbi5zcGVjdWxhciA9IFswLCAwLCAwXSxcclxuY2hpY2tlbi5hbWJpZW50ID0gWzEsIDEsIDFdLFxyXG5jaGlja2VuLnNoaW5pbmVzcyA9IDEsXHJcbmNoaWNrZW4uY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxuY2hpY2tlbi52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hpY2tlbkZyYW1lcygpe1xyXG4gICAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgICAgICB0cmFuc2xhdGU6IFswLCAwLCAwXSxcclxuICAgICAgICByb3RhdGU6IFtkZWdUb1JhZCg0MiksIGRlZ1RvUmFkKC01NSksIGRlZ1RvUmFkKDI3KV0sXHJcbiAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICAgIH1cclxuICAgIGxldCBmcmFtZXMgPSBbXVxyXG4gICAgZm9yKGxldCBrID0gMDsgayA8IDEwMDsgKytrKXtcclxuICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgX3RyYW5zZm9ybS50cmFuc2xhdGVbMF0gPSBrIC8gNTA7XHJcbiAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBmcmFtZXM7XHJcblxyXG59XHJcblxyXG5jaGlja2VuLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IGNoaWNrZW5GcmFtZXMoKSxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuLy8gQ3JlYXRlIHRoZSBoZWFkIG5vZGVcclxuY29uc3QgaGVhZCA9IG5ldyBOb2RlKCk7XHJcbmhlYWQubmFtZSA9IFwiaGVhZFwiO1xyXG5oZWFkLm1vZGVsID0gYm94TW9kZWwoMC42LCAwLjYsIDAuOCwgWzAsIDAsIDBdKTtcclxuaGVhZC50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLjc1LCAwLjc1LCAwXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuaGVhZC5waWNrZWRDb2xvciA9IFswLjksIDAuOSwgMF07XHJcbmhlYWQuZGlmZnVzZSA9IFswLCAwLCAwXTtcclxuaGVhZC5zcGVjdWxhciA9IFswLCAwLCAwXTtcclxuaGVhZC5hbWJpZW50ID0gWzEsIDEsIDFdO1xyXG5oZWFkLnNoaW5pbmVzcyA9IDEsXHJcbmhlYWQuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxuaGVhZC52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5oZWFkLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IG51bGwsXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogbnVsbCwgXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuLy8gQ3JlYXRlIHRoZSBiZWFrIG5vZGVcclxuY29uc3QgYmVhayA9IG5ldyBOb2RlKCk7XHJcbmJlYWsubmFtZSA9IFwiYmVha1wiO1xyXG5iZWFrLm1vZGVsID0gYm94TW9kZWwoMC4yLCAwLjIsIDAuMywgWy0wLjY1LCAtMC4xLCAwXSk7XHJcbmJlYWsudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMSwgMCwgMF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmJlYWsucGlja2VkQ29sb3IgPSBbMSwgMC41LCAwXTtcclxuYmVhay5kaWZmdXNlID0gWzAsIDAsIDBdO1xyXG5iZWFrLnNwZWN1bGFyID0gWzAsIDAsIDBdO1xyXG5iZWFrLmFtYmllbnQgPSBbMSwgMSwgMV07XHJcbmJlYWsuc2hpbmluZXNzID0gMSxcclxuYmVhay5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5iZWFrLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmJlYWsuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogbnVsbCxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBudWxsLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbmNvbnN0IHdoaXRlTGVmdEV5ZSA9IG5ldyBOb2RlKCk7XHJcbndoaXRlTGVmdEV5ZS5uYW1lID0gXCJ3aGl0ZUxlZnRFeWVcIjtcclxud2hpdGVMZWZ0RXllLm1vZGVsID0gYm94TW9kZWwoMC4wNzUsIDAuMSwgMC4xLCBbLTAuNzUsIDAuMiwgMC4xNV0pO1xyXG53aGl0ZUxlZnRFeWUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMS4wNCwgMCwgMF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbndoaXRlTGVmdEV5ZS5waWNrZWRDb2xvciA9IFswLjk5LCAwLjk5LCAwLjk5XTtcclxud2hpdGVMZWZ0RXllLmRpZmZ1c2UgPSBbMCwgMCwgMF07XHJcbndoaXRlTGVmdEV5ZS5zcGVjdWxhciA9IFswLCAwLCAwXTtcclxud2hpdGVMZWZ0RXllLmFtYmllbnQgPSBbMSwgMSwgMV07XHJcbndoaXRlTGVmdEV5ZS5zaGluaW5lc3MgPSAxLFxyXG53aGl0ZUxlZnRFeWUuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxud2hpdGVMZWZ0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbndoaXRlTGVmdEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBudWxsLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IG51bGwsXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuY29uc3QgYmxhY2tMZWZ0RXllID0gbmV3IE5vZGUoKTtcclxuYmxhY2tMZWZ0RXllLm5hbWUgPSBcImJsYWNrTGVmdEV5ZVwiO1xyXG5ibGFja0xlZnRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjA1LCAwLjA1LCAwLjA1LCBbLTAuNzUsIDAuMiwgMC4xNV0pO1xyXG5ibGFja0xlZnRFeWUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMC4wNiwgMCwgMF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmJsYWNrTGVmdEV5ZS5waWNrZWRDb2xvciA9IFswLCAwLCAwXTtcclxuYmxhY2tMZWZ0RXllLmRpZmZ1c2UgPSBbMCwgMCwgMF07XHJcbmJsYWNrTGVmdEV5ZS5zcGVjdWxhciA9IFswLCAwLCAwXTtcclxuYmxhY2tMZWZ0RXllLmFtYmllbnQgPSBbMSwgMSwgMV07XHJcbmJsYWNrTGVmdEV5ZS5zaGluaW5lc3MgPSAxLFxyXG5ibGFja0xlZnRFeWUuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxuYmxhY2tMZWZ0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmJsYWNrTGVmdEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBudWxsLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IG51bGwsXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG5cclxufTtcclxuXHJcbmNvbnN0IHdoaXRlUmlnaHRFeWUgPSBuZXcgTm9kZSgpO1xyXG53aGl0ZVJpZ2h0RXllLm5hbWUgPSBcIndoaXRlUmlnaHRFeWVcIjtcclxud2hpdGVSaWdodEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMDc1LCAwLjEsIDAuMSwgWy0wLjc1LCAwLjIsIDAuMTVdKTtcclxud2hpdGVSaWdodEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFsxLjA0LCAwLCAtMC4zMl0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbndoaXRlUmlnaHRFeWUucGlja2VkQ29sb3IgPSBbMC45OSwgMC45OSwgMC45OV07XHJcbndoaXRlUmlnaHRFeWUuZGlmZnVzZSA9IFswLCAwLCAwXTtcclxud2hpdGVSaWdodEV5ZS5zcGVjdWxhciA9IFswLCAwLCAwXTtcclxud2hpdGVSaWdodEV5ZS5hbWJpZW50ID0gWzEsIDEsIDFdO1xyXG53aGl0ZVJpZ2h0RXllLnNoaW5pbmVzcyA9IDEsXHJcbndoaXRlUmlnaHRFeWUuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxud2hpdGVSaWdodEV5ZS52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG53aGl0ZVJpZ2h0RXllLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IG51bGwsXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogbnVsbCxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcblxyXG59O1xyXG5cclxuY29uc3QgYmxhY2tSaWdodEV5ZSA9IG5ldyBOb2RlKCk7XHJcbmJsYWNrUmlnaHRFeWUubmFtZSA9IFwiYmxhY2tSaWdodEV5ZVwiO1xyXG5ibGFja1JpZ2h0RXllLm1vZGVsID0gYm94TW9kZWwoMC4wNSwgMC4wNSwgMC4wNSwgWy0wLjc1LCAwLjIsIDAuMTVdKTtcclxuYmxhY2tSaWdodEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLjA2LCAwLCAwXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuYmxhY2tSaWdodEV5ZS5waWNrZWRDb2xvciA9IFswLCAwLCAwXTtcclxuYmxhY2tSaWdodEV5ZS5kaWZmdXNlID0gWzAsIDAsIDBdO1xyXG5ibGFja1JpZ2h0RXllLnNwZWN1bGFyID0gWzAsIDAsIDBdO1xyXG5ibGFja1JpZ2h0RXllLmFtYmllbnQgPSBbMSwgMSwgMV07XHJcbmJsYWNrUmlnaHRFeWUuc2hpbmluZXNzID0gMSxcclxuYmxhY2tSaWdodEV5ZS5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5ibGFja1JpZ2h0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmJsYWNrUmlnaHRFeWUuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogbnVsbCxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBudWxsLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcblxyXG5cclxuLy8gQ3JlYXRlIHRoZSBsZWZ0IHdpbmcgbm9kZVxyXG5jb25zdCBsZWZ0V2luZyA9IG5ldyBOb2RlKCk7XHJcbmxlZnRXaW5nLm5hbWUgPSBcImxlZnRXaW5nXCI7XHJcbmxlZnRXaW5nLm1vZGVsID0gYm94TW9kZWwoMC41LCAwLjEsIDEsIFswLCAwLCAwXSk7XHJcbmxlZnRXaW5nLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAsIDAsIC0wLjc1XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDkwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmxlZnRXaW5nLnBpY2tlZENvbG9yID0gWzAuOSwgMC45LCAwXTtcclxubGVmdFdpbmcuZGlmZnVzZSA9IFswLCAwLCAwXTtcclxubGVmdFdpbmcuc3BlY3VsYXIgPSBbMCwgMCwgMF07XHJcbmxlZnRXaW5nLmFtYmllbnQgPSBbMSwgMSwgMV07XHJcbmxlZnRXaW5nLnNoaW5pbmVzcyA9IDEsXHJcbmxlZnRXaW5nLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmxlZnRXaW5nLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBsZWZ0V2luZ0ZyYW1lcygpe1xyXG5cclxuICAgIGxldCB0cmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgdHJhbnNsYXRlOiBbMCwgMCwgLTAuNzVdLFxyXG4gICAgICAgIHJvdGF0ZTogWzAsIDAsIE1hdGguUEkgLyAyXSxcclxuICAgICAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG4gICAgfVxyXG4gICAgbGV0IGZyYW1lcyA9IFtdXHJcbiAgICBmb3IobGV0IGsgPSAwOyBrIDwgNDsgKytrKXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDw9IDEyOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gLU1hdGguUEkgLyA5ICsgTWF0aC5QSS85ICogaSAvIDY7XHJcbiAgICAgICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpID0wIDsgaSA8PSAxMjsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IE1hdGguUEkgLyA5IC0gTWF0aC5QSS85ICogaSAvIDY7XHJcbiAgICAgICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGZyb20gLXBpLzkgdG8gMFxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8PSA2OyBpKyspe1xyXG4gICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IC1NYXRoLlBJIC8gOSArIE1hdGguUEkvOSAqIGkgLyA2O1xyXG4gICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pOyBcclxuICAgIH1cclxuICAgIHJldHVybiBmcmFtZXM7XHJcblxyXG59XHJcblxyXG5sZWZ0V2luZy5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBsZWZ0V2luZ0ZyYW1lcygpLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG4vLyBDcmVhdGUgdGhlIHJpZ2h0IHdpbmcgbm9kZVxyXG5jb25zdCByaWdodFdpbmcgPSBuZXcgTm9kZSgpO1xyXG5yaWdodFdpbmcubmFtZSA9IFwicmlnaHRXaW5nXCI7XHJcbnJpZ2h0V2luZy5tb2RlbCA9IGJveE1vZGVsKDAuNSwgMC4xLCAxLCBbMCwgMCwgMF0pO1xyXG5yaWdodFdpbmcudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMCwgMCwgMC43NV0sXHJcbiAgICByb3RhdGU6IFswLCAwLCA5MF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5yaWdodFdpbmcucGlja2VkQ29sb3IgPSBbMC45LCAwLjksIDBdO1xyXG5yaWdodFdpbmcuZGlmZnVzZSA9IFswLCAwLCAwXTtcclxucmlnaHRXaW5nLnNwZWN1bGFyID0gWzAsIDAsIDBdO1xyXG5yaWdodFdpbmcuYW1iaWVudCA9IFsxLCAxLCAxXTtcclxucmlnaHRXaW5nLnNoaW5pbmVzcyA9IDEsXHJcbnJpZ2h0V2luZy5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5yaWdodFdpbmcudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJpZ2h0V2luZ0ZyYW1lcygpe1xyXG4gICAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgICAgICB0cmFuc2xhdGU6IFswLCAwLCAwLjc1XSxcclxuICAgICAgICByb3RhdGU6IFswLCAwLCBNYXRoLlBJIC8gMl0sXHJcbiAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICAgIH1cclxuICAgIGxldCBmcmFtZXMgPSBbXVxyXG4gICAgZm9yKGxldCBrID0gMDsgayA8IDQ7ICsrayl7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8PSAxMjsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IE1hdGguUEkgLyA5IC0gTWF0aC5QSS85ICogaSAvIDY7XHJcbiAgICAgICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpID0wIDsgaSA8PSAxMjsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IC0gTWF0aC5QSSAvIDkgKyBNYXRoLlBJLzkgKiBpIC8gNjtcclxuICAgICAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZnJvbSBwaS82IHRvIDBcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gNjsgaSsrKXtcclxuICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSBNYXRoLlBJIC8gOSAtIE1hdGguUEkvOSAqIGkgLyA2O1xyXG4gICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pOyBcclxuICAgIH1cclxuICAgIHJldHVybiBmcmFtZXM7XHJcblxyXG59XHJcblxyXG5yaWdodFdpbmcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogcmlnaHRXaW5nRnJhbWVzKCksXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogQW5pbWF0aW9uLmFuaW1hdGlvblNjcmlwdCgpLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbi8vIENyZWF0ZSB0aGUgcmlnaHQgbGVnIG5vZGVcclxuY29uc3QgcmlnaHRMZWcgPSBuZXcgTm9kZSgpO1xyXG5yaWdodExlZy5uYW1lID0gXCJyaWdodExlZ1wiO1xyXG5yaWdodExlZy5tb2RlbCA9IGJveE1vZGVsKDAuNiwgMC4yLCAwLjIsIFswLCAwLCAwXSk7XHJcbnJpZ2h0TGVnLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWy0wLjUsIC0wLjgsIC0wLjM1XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRMZWcucGlja2VkQ29sb3IgPSBbMSwgMC41LCAwXTtcclxucmlnaHRMZWcuZGlmZnVzZSA9IFswLCAwLCAwXTtcclxucmlnaHRMZWcuc3BlY3VsYXIgPSBbMCwgMCwgMF07XHJcbnJpZ2h0TGVnLmFtYmllbnQgPSBbMSwgMSwgMV07XHJcbnJpZ2h0TGVnLnNoaW5pbmVzcyA9IDEsXHJcbnJpZ2h0TGVnLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbnJpZ2h0TGVnLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcblxyXG5mdW5jdGlvbiByaWdodExlZ0ZyYW1lcygpe1xyXG4gICAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgICAgICB0cmFuc2xhdGU6IFstMC41LCAtMC44LCAtMC4zNV0sXHJcbiAgICAgICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICAgIH1cclxuICAgIGxldCBmcmFtZXMgPSBbXVxyXG4gICAgZm9yKGxldCBrID0gMDsgayA8IDQ7ICsrayl7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8PSAxMjsgaSsrKXtcclxuICAgICAgICAgICAgLy8gYXBwZW5kIGZvciBhbmdsZSBwaS82IC0gcGkvMyAqIGkvMTIgdG8gZnJhbWVzXHJcbiAgICAgICAgICAgIC8vIGNsb25lIHRoZSB0cmFuc2Zvcm0gb2JqZWN0XHJcbiAgICAgICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMl0gPSBNYXRoLlBJIC8gNiAtIE1hdGguUEkvMyAqIGkgLyAxMjtcclxuICAgICAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGkgPTAgOyBpIDw9IDEyOyBpKyspe1xyXG4gICAgICAgICAgICAvLyBhcHBlbmQgZm9yIGFuZ2xlIHBpLzYgKiBpLzEyIHRvIGZyYW1lc1xyXG4gICAgICAgICAgICAvLyBjbG9uZSB0aGUgdHJhbnNmb3JtIG9iamVjdFxyXG4gICAgICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzJdID0gLSBNYXRoLlBJIC8gNiArIE1hdGguUEkvMyAqIGkgLyAxMjtcclxuICAgICAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZnJvbSBwaS82IHRvIDBcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gNjsgaSsrKXtcclxuICAgICAgICAvLyBhcHBlbmQgZm9yIGFuZ2xlIHBpLzYgLSBwaS8zICogaS8xMiB0byBmcmFtZXNcclxuICAgICAgICAvLyBjbG9uZSB0aGUgdHJhbnNmb3JtIG9iamVjdFxyXG4gICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVsyXSA9IE1hdGguUEkgLyA2IC0gTWF0aC5QSS82ICogaSAvIDY7XHJcbiAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7IFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmcmFtZXM7XHJcbn1cclxuXHJcblxyXG5yaWdodExlZy5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzIDogcmlnaHRMZWdGcmFtZXMoKSxcclxuICAgIGN1cnJlbnRGcmFtZSA6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogQW5pbWF0aW9uLmFuaW1hdGlvblNjcmlwdCgpLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbi8vIGNyZXRlIHRoZSByaWdodCBmb290IG5vZGVcclxuY29uc3QgcmlnaHRGb290ID0gbmV3IE5vZGUoKTtcclxucmlnaHRGb290Lm5hbWUgPSBcInJpZ2h0Rm9vdFwiO1xyXG5yaWdodEZvb3QubW9kZWwgPSBib3hNb2RlbCgwLjEsIDAuNCwgMC4zLCBbMCwgMCwgMF0pO1xyXG5yaWdodEZvb3QudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMC4wMiwgLTAuMzQsIDBdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5yaWdodEZvb3QucGlja2VkQ29sb3IgPSBbMSwgMC41LCAwXTtcclxucmlnaHRGb290LmRpZmZ1c2UgPSBbMCwgMCwgMF07XHJcbnJpZ2h0Rm9vdC5zcGVjdWxhciA9IFswLCAwLCAwXTtcclxucmlnaHRGb290LmFtYmllbnQgPSBbMSwgMSwgMV07XHJcbnJpZ2h0Rm9vdC5zaGluaW5lc3MgPSAxLFxyXG5yaWdodEZvb3QuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxucmlnaHRGb290LnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbnJpZ2h0Rm9vdC5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBudWxsLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IG51bGwsXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuLy8gQ3JlYXRlIHRoZSBsZWZ0IGxlZyBub2RlXHJcbmNvbnN0IGxlZnRMZWcgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0TGVnLm5hbWUgPSBcImxlZnRMZWdcIjtcclxubGVmdExlZy5tb2RlbCA9IGJveE1vZGVsKDAuNiwgMC4yLCAwLjIsIFswLCAwLCAwXSk7XHJcbmxlZnRMZWcudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbLTAuNSwgLTAuOCwgMC4zNV0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmxlZnRMZWcucGlja2VkQ29sb3IgPSBbMSwgMC41LCAwXTtcclxubGVmdExlZy5kaWZmdXNlID0gWzAsIDAsIDBdO1xyXG5sZWZ0TGVnLnNwZWN1bGFyID0gWzAsIDAsIDBdO1xyXG5sZWZ0TGVnLmFtYmllbnQgPSBbMSwgMSwgMV07XHJcbmxlZnRMZWcuc2hpbmluZXNzID0gMSxcclxubGVmdExlZy5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5sZWZ0TGVnLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBsZWZ0TGVnRnJhbWVzKCl7XHJcbiAgICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgICAgIHRyYW5zbGF0ZTogWy0wLjUsIC0wLjgsIDAuMzVdLFxyXG4gICAgICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgICB9XHJcbiAgICBsZXQgZnJhbWVzID0gW11cclxuICAgIGZvcihsZXQgayA9IDA7IGsgPCA0OyArK2spe1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gMTI7IGkrKyl7XHJcbiAgICAgICAgICAgIC8vIGFwcGVuZCBmb3IgYW5nbGUgcGkvNiAtIHBpLzMgKiBpLzEyIHRvIGZyYW1lc1xyXG4gICAgICAgICAgICAvLyBjbG9uZSB0aGUgdHJhbnNmb3JtIG9iamVjdFxyXG4gICAgICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzJdID0gLSBNYXRoLlBJIC8gNiArIE1hdGguUEkvMyAqIGkgLyAxMjtcclxuICAgICAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGkgPTAgOyBpIDw9IDEyOyBpKyspe1xyXG4gICAgICAgICAgICAvLyBhcHBlbmQgZm9yIGFuZ2xlIHBpLzYgKiBpLzEyIHRvIGZyYW1lc1xyXG4gICAgICAgICAgICAvLyBjbG9uZSB0aGUgdHJhbnNmb3JtIG9iamVjdFxyXG4gICAgICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzJdID0gTWF0aC5QSSAvIDYgLSBNYXRoLlBJLzMgKiBpIC8gMTI7XHJcbiAgICAgICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGZyb20gLXBpLzYgdG8gMFxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8PSA2OyBpKyspe1xyXG4gICAgICAgIC8vIGFwcGVuZCBmb3IgYW5nbGUgcGkvNiAtIHBpLzMgKiBpLzEyIHRvIGZyYW1lc1xyXG4gICAgICAgIC8vIGNsb25lIHRoZSB0cmFuc2Zvcm0gb2JqZWN0XHJcbiAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzJdID0gLU1hdGguUEkgLyA2ICsgTWF0aC5QSS82ICogaSAvIDY7XHJcbiAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7IFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZyYW1lcztcclxufVxyXG5cclxubGVmdExlZy5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzIDogbGVmdExlZ0ZyYW1lcygpLFxyXG4gICAgY3VycmVudEZyYW1lIDogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuLy8gQ3JlYXRlIHRoZSBsZWZ0IGZvb3Qgbm9kZVxyXG5jb25zdCBsZWZ0Rm9vdCA9IG5ldyBOb2RlKCk7XHJcbmxlZnRGb290Lm5hbWUgPSBcImxlZnRGb290XCI7XHJcbmxlZnRGb290Lm1vZGVsID0gYm94TW9kZWwoMC4xLCAwLjQsIDAuMywgWzAsIDAsIDBdKTtcclxubGVmdEZvb3QudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMC4wMiwgLTAuMzQsIDBdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5sZWZ0Rm9vdC5waWNrZWRDb2xvciA9IFsxLCAwLjUsIDBdO1xyXG5sZWZ0Rm9vdC5kaWZmdXNlID0gWzAsIDAsIDBdO1xyXG5sZWZ0Rm9vdC5zcGVjdWxhciA9IFswLCAwLCAwXTtcclxubGVmdEZvb3QuYW1iaWVudCA9IFsxLCAxLCAxXTtcclxubGVmdEZvb3Quc2hpbmluZXNzID0gMSxcclxubGVmdEZvb3QuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxubGVmdEZvb3Qudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxubGVmdEZvb3QuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogbnVsbCxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBudWxsLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbi8vIENyZWF0ZSB0aGUgdGFpbCBub2RlXHJcbmNvbnN0IHRhaWwgPSBuZXcgTm9kZSgpO1xyXG50YWlsLm5hbWUgPSBcInRhaWxcIjtcclxuXHJcblxyXG4vLyBBc3NlbWJsZSB0aGUgY2hpY2tlbiBtb2RlbFxyXG4vLyBjaGlja2VuLmFkZENoaWxkKGhlYWQpO1xyXG4vLyBoZWFkLmFkZENoaWxkKGJlYWspO1xyXG4vLyBjaGlja2VuLmFkZENoaWxkKGxlZnRXaW5nKTtcclxuLy8gY2hpY2tlbi5hZGRDaGlsZChyaWdodFdpbmcpO1xyXG4vLyBjaGlja2VuLmFkZENoaWxkKGxlZnRMZWcpO1xyXG4vLyBjaGlja2VuLmFkZENoaWxkKHJpZ2h0TGVnKTtcclxuXHJcbi8vIEFzc2VtYmxlIHRoZSBjaGlja2VuIG1vZGVsXHJcbmhlYWQuc2V0UGFyZW50KGNoaWNrZW4pO1xyXG5iZWFrLnNldFBhcmVudChoZWFkKTtcclxud2hpdGVSaWdodEV5ZS5zZXRQYXJlbnQoaGVhZCk7XHJcbmJsYWNrUmlnaHRFeWUuc2V0UGFyZW50KHdoaXRlUmlnaHRFeWUpO1xyXG53aGl0ZUxlZnRFeWUuc2V0UGFyZW50KGhlYWQpO1xyXG5ibGFja0xlZnRFeWUuc2V0UGFyZW50KHdoaXRlTGVmdEV5ZSk7XHJcbmxlZnRXaW5nLnNldFBhcmVudChjaGlja2VuKTtcclxucmlnaHRXaW5nLnNldFBhcmVudChjaGlja2VuKTtcclxubGVmdExlZy5zZXRQYXJlbnQoY2hpY2tlbik7XHJcbmxlZnRGb290LnNldFBhcmVudChsZWZ0TGVnKTtcclxucmlnaHRMZWcuc2V0UGFyZW50KGNoaWNrZW4pO1xyXG5yaWdodEZvb3Quc2V0UGFyZW50KHJpZ2h0TGVnKTtcclxuXHJcblxyXG52YXIgY2hpY2tlbk1vZGVsID0gW1xyXG4gIGNoaWNrZW5cclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hpY2tlbk1vZGVsO1xyXG4iLCJpbXBvcnQgTm9kZSBmcm9tIFwiLi4vbm9kZS5qc1wiO1xyXG5cclxuY29uc3QgYm9keUNvbG9yID0gWzAuODg2LCAwLjM0NSwgMC4xMzNdO1xyXG5jb25zdCB3aGl0ZUNvbG9yID0gWzAuOTksIDAuOTksIDAuOTldO1xyXG5jb25zdCBibGFja0NvbG9yID0gWzAsIDAsIDBdO1xyXG5jb25zdCBicm93bkNvbG9yID0gWzAuNTQ1LCAwLjI3MSwgMC4wNzVdO1xyXG5cclxuY29uc3QgZm94ID0gbmV3IE5vZGUoKTtcclxuZm94Lm5hbWUgPSBcImZveFwiO1xyXG5mb3gubW9kZWwgPSBib3hNb2RlbCgwLjYsIDAuNywgMSwgWzAsIDAsIDBdKTsgXHJcbmZveC50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMCwgMCwgMF0sXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuZm94LnBpY2tlZENvbG9yID0gYm9keUNvbG9yO1xyXG5mb3gudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5mb3guYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgaGVhZCA9IG5ldyBOb2RlKCk7XHJcbmhlYWQubmFtZSA9IFwiaGVhZFwiO1xyXG5oZWFkLm1vZGVsID0gYm94TW9kZWwoMC41LCAwLjUsIDAuNCwgWzAsIDAsIDBdKTtcclxuaGVhZC50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMCwgMC4xLCAwLjddLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5oZWFkLnBpY2tlZENvbG9yID0gYm9keUNvbG9yO1xyXG5oZWFkLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxuaGVhZC5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCB3aGl0ZVJpZ2h0RXllID0gbmV3IE5vZGUoKTtcclxud2hpdGVSaWdodEV5ZS5uYW1lID0gXCJ3aGl0ZVJpZ2h0RXllXCI7XHJcbndoaXRlUmlnaHRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjEsIDAuMSwgMC4wNSwgWzAsIDAsIDBdKTtcclxud2hpdGVSaWdodEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMC4xNSwgMC4xLCAwLjJdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG53aGl0ZVJpZ2h0RXllLnBpY2tlZENvbG9yID0gd2hpdGVDb2xvcjtcclxud2hpdGVSaWdodEV5ZS52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbndoaXRlUmlnaHRFeWUuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3Qgd2hpdGVMZWZ0RXllID0gbmV3IE5vZGUoKTtcclxud2hpdGVMZWZ0RXllLm5hbWUgPSBcIndoaXRlTGVmdEV5ZVwiO1xyXG53aGl0ZUxlZnRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjEsIDAuMSwgMC4wNSwgWzAsIDAsIDBdKTtcclxud2hpdGVMZWZ0RXllLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFstMC4xNSwgMC4xLCAwLjJdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG53aGl0ZUxlZnRFeWUucGlja2VkQ29sb3IgPSB3aGl0ZUNvbG9yO1xyXG53aGl0ZUxlZnRFeWUudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG53aGl0ZUxlZnRFeWUuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgYmxhY2tSaWdodEV5ZSA9IG5ldyBOb2RlKCk7XHJcbmJsYWNrUmlnaHRFeWUubmFtZSA9IFwiYmxhY2tSaWdodEV5ZVwiO1xyXG5ibGFja1JpZ2h0RXllLm1vZGVsID0gYm94TW9kZWwoMC4xLCAwLjA2LCAwLjA1LCBbMCwgMCwgMF0pO1xyXG5ibGFja1JpZ2h0RXllLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFstMC4wMywgMCwgMC4wMV0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmJsYWNrUmlnaHRFeWUucGlja2VkQ29sb3IgPSBibGFja0NvbG9yO1xyXG5ibGFja1JpZ2h0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxuYmxhY2tSaWdodEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCBibGFja0xlZnRFeWUgPSBuZXcgTm9kZSgpO1xyXG5ibGFja0xlZnRFeWUubmFtZSA9IFwiYmxhY2tMZWZ0RXllXCI7XHJcbmJsYWNrTGVmdEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMSwgMC4wNiwgMC4wNSwgWzAsIDAsIDBdKTtcclxuYmxhY2tMZWZ0RXllLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLjAzLCAwLCAwLjAxXSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuYmxhY2tMZWZ0RXllLnBpY2tlZENvbG9yID0gYmxhY2tDb2xvcjtcclxuYmxhY2tMZWZ0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxuYmxhY2tMZWZ0RXllLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IG5vc2UgPSBuZXcgTm9kZSgpO1xyXG5ub3NlLm5hbWUgPSBcIm5vc2VcIjtcclxubm9zZS5tb2RlbCA9IGJveE1vZGVsKDAuMTUsIDAuMywgMC4yLCBbMCwgMCwgMF0pO1xyXG5ub3NlLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLCAtMC4xLCAwLjNdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5ub3NlLnBpY2tlZENvbG9yID0gYmxhY2tDb2xvcjtcclxubm9zZS52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbm5vc2UuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5jb25zdCB1bmRlcm5vc2UgPSBuZXcgTm9kZSgpO1xyXG51bmRlcm5vc2UubmFtZSA9IFwidW5kZXJub3NlXCI7XHJcbnVuZGVybm9zZS5tb2RlbCA9IGJveE1vZGVsKDAuMSwgMC4zLCAwLjIsIFswLCAwLCAwXSk7XHJcbnVuZGVybm9zZS50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMCwgLTAuMiwgMC4zXSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxudW5kZXJub3NlLnBpY2tlZENvbG9yID0gd2hpdGVDb2xvcjtcclxudW5kZXJub3NlLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxudW5kZXJub3NlLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IHJpZ2h0RWFyID0gbmV3IE5vZGUoKTtcclxucmlnaHRFYXIubmFtZSA9IFwicmlnaHRFYXJcIjtcclxucmlnaHRFYXIubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC4xLCBbMCwgMCwgMF0pO1xyXG5yaWdodEVhci50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMC4xNSwgMC4zNSwgMF0sXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRFYXIucGlja2VkQ29sb3IgPSBibGFja0NvbG9yO1xyXG5yaWdodEVhci52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbnJpZ2h0RWFyLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IGxlZnRFYXIgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0RWFyLm5hbWUgPSBcImxlZnRFYXJcIjtcclxubGVmdEVhci5tb2RlbCA9IGJveE1vZGVsKDAuMiwgMC4yLCAwLjEsIFswLCAwLCAwXSk7XHJcbmxlZnRFYXIudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWy0wLjE1LCAwLjM1LCAwXSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubGVmdEVhci5waWNrZWRDb2xvciA9IGJsYWNrQ29sb3I7XHJcbmxlZnRFYXIudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5sZWZ0RWFyLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IHJpZ2h0RnJvbnRMZWcgPSBuZXcgTm9kZSgpO1xyXG5yaWdodEZyb250TGVnLm5hbWUgPSBcInJpZ2h0RnJvbnRMZWdcIjtcclxucmlnaHRGcm9udExlZy5tb2RlbCA9IGJveE1vZGVsKDEsIDAuMiwgMC4xNSwgWzAsIDAsIDBdKTtcclxucmlnaHRGcm9udExlZy50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMC4yLCAtMC4yNSwgMC4yXSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRGcm9udExlZy5waWNrZWRDb2xvciA9IGJsYWNrQ29sb3I7XHJcbnJpZ2h0RnJvbnRMZWcudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5yaWdodEZyb250TGVnLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuY29uc3QgcmlnaHRGcm9udFRvZSA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0RnJvbnRUb2UubmFtZSA9IFwicmlnaHRGcm9udFRvZVwiO1xyXG5yaWdodEZyb250VG9lLm1vZGVsID0gYm94TW9kZWwoMC4xLCAwLjIsIDAuMiwgWzAsIDAsIDBdKTtcclxucmlnaHRGcm9udFRvZS50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMCwgLTAuNDUsIDAuMDVdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5yaWdodEZyb250VG9lLnBpY2tlZENvbG9yID0gd2hpdGVDb2xvcjtcclxucmlnaHRGcm9udFRvZS52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbnJpZ2h0RnJvbnRUb2UuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgbGVmdEZyb250TGVnID0gbmV3IE5vZGUoKTtcclxubGVmdEZyb250TGVnLm5hbWUgPSBcImxlZnRGcm9udExlZ1wiO1xyXG5sZWZ0RnJvbnRMZWcubW9kZWwgPSBib3hNb2RlbCgxLCAwLjIsIDAuMTUsIFswLCAwLCAwXSk7XHJcbmxlZnRGcm9udExlZy50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbLTAuMiwgLTAuMjUsIDAuMl0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmxlZnRGcm9udExlZy5waWNrZWRDb2xvciA9IGJsYWNrQ29sb3I7XHJcbmxlZnRGcm9udExlZy52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbmxlZnRGcm9udExlZy5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcbmNvbnN0IGxlZnRGcm9udFRvZSA9IG5ldyBOb2RlKCk7XHJcbmxlZnRGcm9udFRvZS5uYW1lID0gXCJsZWZ0RnJvbnRUb2VcIjtcclxubGVmdEZyb250VG9lLm1vZGVsID0gYm94TW9kZWwoMC4xLCAwLjIsIDAuMTUsIFswLCAwLCAwXSk7XHJcbmxlZnRGcm9udFRvZS50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbLTAsIC0wLjQ1LCAwLjA1XSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubGVmdEZyb250VG9lLnBpY2tlZENvbG9yID0gd2hpdGVDb2xvcjtcclxubGVmdEZyb250VG9lLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxubGVmdEZyb250VG9lLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IHJpZ2h0UmVhckxlZyA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0UmVhckxlZy5uYW1lID0gXCJyaWdodFJlYXJMZWdcIjtcclxucmlnaHRSZWFyTGVnLm1vZGVsID0gYm94TW9kZWwoMSwgMC4yLCAwLjE1LCBbMCwgMCwgMF0pO1xyXG5yaWdodFJlYXJMZWcudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAuMiwgLTAuMjUsIC0wLjJdLFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnJpZ2h0UmVhckxlZy5waWNrZWRDb2xvciA9IGJsYWNrQ29sb3I7XHJcbnJpZ2h0UmVhckxlZy52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbnJpZ2h0UmVhckxlZy5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcbmNvbnN0IHJpZ2h0UmVhclRvZSA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0UmVhclRvZS5uYW1lID0gXCJyaWdodFJlYXJUb2VcIjtcclxucmlnaHRSZWFyVG9lLm1vZGVsID0gYm94TW9kZWwoMC4xLCAwLjIsIDAuMiwgWzAsIDAsIDBdKTtcclxucmlnaHRSZWFyVG9lLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLCAtMC40NSwgMC4wNV0sXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRSZWFyVG9lLnBpY2tlZENvbG9yID0gd2hpdGVDb2xvcjtcclxucmlnaHRSZWFyVG9lLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxucmlnaHRSZWFyVG9lLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IGxlZnRSZWFyTGVnID0gbmV3IE5vZGUoKTtcclxubGVmdFJlYXJMZWcubmFtZSA9IFwibGVmdFJlYXJMZWdcIjtcclxubGVmdFJlYXJMZWcubW9kZWwgPSBib3hNb2RlbCgxLCAwLjIsIDAuMTUsIFswLCAwLCAwXSk7XHJcbmxlZnRSZWFyTGVnLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFstMC4yLCAtMC4yNSwgLTAuMl0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmxlZnRSZWFyTGVnLnBpY2tlZENvbG9yID0gYmxhY2tDb2xvcjtcclxubGVmdFJlYXJMZWcudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5sZWZ0UmVhckxlZy5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcbmNvbnN0IGxlZnRSZWFyVG9lID0gbmV3IE5vZGUoKTtcclxubGVmdFJlYXJUb2UubmFtZSA9IFwibGVmdFJlYXJUb2VcIjtcclxubGVmdFJlYXJUb2UubW9kZWwgPSBib3hNb2RlbCgwLjEsIDAuMiwgMC4yLCBbMCwgMCwgMF0pO1xyXG5sZWZ0UmVhclRvZS50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbLTAsIC0wLjQ1LCAwLjA1XSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubGVmdFJlYXJUb2UucGlja2VkQ29sb3IgPSB3aGl0ZUNvbG9yO1xyXG5sZWZ0UmVhclRvZS52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbmxlZnRSZWFyVG9lLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IHRhaWwgPSBuZXcgTm9kZSgpO1xyXG50YWlsLm5hbWUgPSBcInRhaWxcIjtcclxudGFpbC5tb2RlbCA9IGJveE1vZGVsKDAuMiwgMC4yLCAwLjQsIFswLCAwLCAwXSk7XHJcbnRhaWwudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAsIDAsIC0wLjY1XSxcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG50YWlsLnBpY2tlZENvbG9yID0gYm9keUNvbG9yO1xyXG50YWlsLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxudGFpbC5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcbmNvbnN0IHRhaWxlZGdlID0gbmV3IE5vZGUoKTtcclxudGFpbGVkZ2UubmFtZSA9IFwidGFpbGVkZ2VcIjtcclxudGFpbGVkZ2UubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC4yLCBbMCwgMCwgMF0pO1xyXG50YWlsZWRnZS50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMCwgMCwgLTAuOTVdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG50YWlsZWRnZS5waWNrZWRDb2xvciA9IHdoaXRlQ29sb3I7XHJcbnRhaWxlZGdlLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxudGFpbGVkZ2UuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuaGVhZC5zZXRQYXJlbnQoZm94KTtcclxucmlnaHRFYXIuc2V0UGFyZW50KGhlYWQpO1xyXG5sZWZ0RWFyLnNldFBhcmVudChoZWFkKTtcclxud2hpdGVSaWdodEV5ZS5zZXRQYXJlbnQoaGVhZCk7XHJcbndoaXRlTGVmdEV5ZS5zZXRQYXJlbnQoaGVhZCk7XHJcbmJsYWNrUmlnaHRFeWUuc2V0UGFyZW50KHdoaXRlUmlnaHRFeWUpO1xyXG5ibGFja0xlZnRFeWUuc2V0UGFyZW50KHdoaXRlTGVmdEV5ZSk7XHJcbm5vc2Uuc2V0UGFyZW50KGhlYWQpO1xyXG51bmRlcm5vc2Uuc2V0UGFyZW50KGhlYWQpO1xyXG5yaWdodEZyb250TGVnLnNldFBhcmVudChmb3gpO1xyXG5yaWdodEZyb250VG9lLnNldFBhcmVudChyaWdodEZyb250TGVnKTtcclxubGVmdEZyb250TGVnLnNldFBhcmVudChmb3gpO1xyXG5sZWZ0RnJvbnRUb2Uuc2V0UGFyZW50KGxlZnRGcm9udExlZyk7XHJcbnJpZ2h0UmVhckxlZy5zZXRQYXJlbnQoZm94KTtcclxucmlnaHRSZWFyVG9lLnNldFBhcmVudChyaWdodFJlYXJMZWcpO1xyXG5sZWZ0UmVhckxlZy5zZXRQYXJlbnQoZm94KTtcclxubGVmdFJlYXJUb2Uuc2V0UGFyZW50KGxlZnRSZWFyTGVnKTtcclxudGFpbC5zZXRQYXJlbnQoZm94KTtcclxudGFpbGVkZ2Uuc2V0UGFyZW50KGZveCk7XHJcblxyXG52YXIgZm94TW9kZWwgPSBbXHJcbiAgZm94XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3hNb2RlbDtcclxuIiwiaW1wb3J0IE5vZGUgZnJvbSBcIi4uL25vZGUuanNcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBob2xsb3dUaGluZ3koKSB7XHJcbiAgICBsZXQgdmVydGljZXMgPSBbXTtcclxuICAgIGxldCBjb2xvcnMgPSBbXTtcclxuICAgIGxldCB0YW5nZW50cyA9IFtdO1xyXG4gICAgbGV0IGJpdGFuZ2VudHMgPSBbXTtcclxuICAgIGxldCBub3JtYWxzID0gW107XHJcbiAgICBsZXQgdGV4Q29vcmQgPSBbXTtcclxuICAgIGxldCBmYWNlcyA9IGdlbmVyYXRlRmFjZXMoKTtcclxuICAgIFxyXG4gICAgY29uc3QgYm94ZXMgPSBbXHJcbiAgICAgIHsgc2l6ZTogWzAuMiwgMC44LCAwLjJdLCBwb3NpdGlvbjogWzAsIDEsIDBdIH0sXHJcbiAgICAgIHsgc2l6ZTogWzAuMiwgMC44LCAwLjJdLCBwb3NpdGlvbjogWzAsIC0xLCAwXSB9LFxyXG4gICAgICB7IHNpemU6IFsxLjgsIDAuMiwgMC4yXSwgcG9zaXRpb246IFstMC4zLCAwLCAwXSB9LFxyXG4gICAgICB7IHNpemU6IFsxLjgsIDAuMiwgMC4yXSwgcG9zaXRpb246IFswLjMsIDAsIDBdIH0sXHJcbiAgICAgIHsgc2l6ZTogWzAuMiwgMS44LCAwLjJdLCBwb3NpdGlvbjogWzAsIDAsIDAuM10gfSxcclxuICAgICAgeyBzaXplOiBbMC4yLCAxLjgsIDAuMl0sIHBvc2l0aW9uOiBbMCwgMCwgLTAuM10gfSxcclxuICAgICAgeyBzaXplOiBbMC4yLCAwLjIsIDAuOF0sIHBvc2l0aW9uOiBbMSwgMCwgMF0gfSxcclxuICAgICAgeyBzaXplOiBbMC4yLCAwLjIsIDAuOF0sIHBvc2l0aW9uOiBbLTEsIDAsIDBdIH0sXHJcbiAgICAgIHsgc2l6ZTogWzAuOCwgMC4yLCAwLjJdLCBwb3NpdGlvbjogWzAsIDAsIDFdIH0sXHJcbiAgICAgIHsgc2l6ZTogWzAuOCwgMC4yLCAwLjJdLCBwb3NpdGlvbjogWzAsIDAsIC0xXSB9LFxyXG4gICAgICB7IHNpemU6IFswLjIsIDAuMiwgMS44XSwgcG9zaXRpb246IFswLCAwLjMsIDBdIH0sXHJcbiAgICAgIHsgc2l6ZTogWzAuMiwgMC4yLCAxLjhdLCBwb3NpdGlvbjogWzAsIC0wLjMsIDBdIH1cclxuICAgIF07XHJcbiAgICBcclxuICAgIGJveGVzLmZvckVhY2goYm94ID0+IHtcclxuICAgICAgbGV0IHZlcnRpY2VzQm94ID0gZ2VuZXJhdGVWZXJ0aWNlcyguLi5ib3guc2l6ZSwgYm94LnBvc2l0aW9uKTtcclxuICAgICAgbGV0IG5vcm1hbHNCb3ggPSBnZW5lcmF0ZU5vcm1hbHModmVydGljZXNCb3gsIGZhY2VzKTtcclxuICAgICAgbm9ybWFscyA9IG5vcm1hbHMuY29uY2F0KG5vcm1hbHNCb3gpO1xyXG4gICAgICB2ZXJ0aWNlcyA9IHZlcnRpY2VzLmNvbmNhdCh0b1ZlcnRpY2VzKHZlcnRpY2VzQm94LCBmYWNlcykpO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2ZXJ0aWNlczogdmVydGljZXMsXHJcbiAgICAgIGZhY2VzOiBmYWNlcyxcclxuICAgICAgdGFuZ2VudHM6IHRhbmdlbnRzLFxyXG4gICAgICBiaXRhbmdlbnRzOiBiaXRhbmdlbnRzLFxyXG4gICAgICBub3JtYWxzOiBub3JtYWxzLFxyXG4gICAgICBjb2xvcnM6IGNvbG9ycyxcclxuICAgICAgdGV4Q29vcmQ6IHRleENvb3JkLFxyXG4gICAgfTtcclxufVxyXG4gIFxyXG5jb25zdCBob2xsb3cgPSBuZXcgTm9kZSgpO1xyXG5ob2xsb3cuZmxhZyA9IFwiaG9sbG93XCI7XHJcbmhvbGxvdy5uYW1lID0gXCJIb2xsb3cgVGhpbmd5XCI7XHJcbmhvbGxvdy5tb2RlbCA9IGhvbGxvd1RoaW5neSgpO1xyXG5ob2xsb3cudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG4gIHJvdGF0ZTogWzkxLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5ob2xsb3cucGlja2VkQ29sb3IgPSBbMC45MjE1Njg2MjcsMC41Njg2Mjc0NTEsMC44OTgwMzkyMTZdLFxyXG5ob2xsb3cudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuaG9sbG93LmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbnZhciBob2xsb3dNb2RlbCA9IFtcclxuICAgIGhvbGxvd1xyXG5dXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9sbG93TW9kZWw7IiwiaW1wb3J0IE5vZGUgZnJvbSBcIi4uL25vZGUuanNcIjtcclxuXHJcbmNvbnN0IHBpZyA9IG5ldyBOb2RlKCk7XHJcbnBpZy5mbGFnID0gXCJhcnRpY3VsYXRlZFwiO1xyXG5waWcubmFtZSA9IFwicGlnXCI7XHJcbnBpZy5tb2RlbCA9IGJveE1vZGVsKDEsIDEuNSwgMSwgWzAsIDAsIDBdKTtcclxucGlnLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLCAwLCAwXSxcclxuICByb3RhdGU6IFsxMCwgNTksIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnBpZy5waWNrZWRDb2xvciA9IFswLjkyMTU2ODYyNywwLjU2ODYyNzQ1MSwwLjg5ODAzOTIxNl0sXHJcbnBpZy5kaWZmdXNlID0gWzEsMSwxXSxcclxucGlnLnNwZWN1bGFyID0gWzEsMSwxXSxcclxucGlnLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5waWcuc2hpbmluZXNzID0gMSxcclxucGlnLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbnBpZy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5waWcuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgaGVhZCA9IG5ldyBOb2RlKCk7XHJcbmhlYWQubmFtZSA9IFwiaGVhZFwiO1xyXG5oZWFkLm1vZGVsID0gYm94TW9kZWwoMSwgMSwgMS4yLCBbLTEsIDAuNiwgMF0pO1xyXG5oZWFkLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5oZWFkLnBpY2tlZENvbG9yID0gWzAuOTIxNTY4NjI3LDAuNTY4NjI3NDUxLDAuODk4MDM5MjE2XSxcclxuaGVhZC5kaWZmdXNlID0gWzEsMSwxXSxcclxuaGVhZC5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbmhlYWQuYW1iaWVudCA9IFsxLDEsMV0sXHJcbmhlYWQuc2hpbmluZXNzID0gMSxcclxuaGVhZC5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5oZWFkLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmhlYWQuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IHdoaXRlUmlnaHRFeWUgPSBuZXcgTm9kZSgpO1xyXG53aGl0ZVJpZ2h0RXllLm5hbWUgPSBcIndoaXRlUmlnaHRFeWVcIjtcclxud2hpdGVSaWdodEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMiwgMC4yLCAwLjIsIFstMSwgMC42LCAwXSk7XHJcbndoaXRlUmlnaHRFeWUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbLTAuNSwgMC4yLCAwLjRdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG53aGl0ZVJpZ2h0RXllLnBpY2tlZENvbG9yID0gWzAuOTksMC45OSwwLjk5XSxcclxud2hpdGVSaWdodEV5ZS5kaWZmdXNlID0gWzEsMSwxXSxcclxud2hpdGVSaWdodEV5ZS5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbndoaXRlUmlnaHRFeWUuYW1iaWVudCA9IFsxLDEsMV0sXHJcbndoaXRlUmlnaHRFeWUuc2hpbmluZXNzID0gMSxcclxud2hpdGVSaWdodEV5ZS5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG53aGl0ZVJpZ2h0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbndoaXRlUmlnaHRFeWUuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IHdoaXRlTGVmdEV5ZSA9IG5ldyBOb2RlKCk7XHJcbndoaXRlTGVmdEV5ZS5uYW1lID0gXCJ3aGl0ZUxlZnRFeWVcIjtcclxud2hpdGVMZWZ0RXllLm1vZGVsID0gYm94TW9kZWwoMC4yLCAwLjIsIDAuMiwgWy0xLCAwLjYsIDBdKTtcclxud2hpdGVMZWZ0RXllLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWy0wLjUsIDAuMiwgLTAuNF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbndoaXRlTGVmdEV5ZS5waWNrZWRDb2xvciA9IFswLjk5LDAuOTksMC45OV0sXHJcbndoaXRlTGVmdEV5ZS5kaWZmdXNlID0gWzEsMSwxXSxcclxud2hpdGVMZWZ0RXllLnNwZWN1bGFyID0gWzEsMSwxXSxcclxud2hpdGVMZWZ0RXllLmFtYmllbnQgPSBbMSwxLDFdLFxyXG53aGl0ZUxlZnRFeWUuc2hpbmluZXNzID0gMSxcclxud2hpdGVMZWZ0RXllLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbndoaXRlTGVmdEV5ZS52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG53aGl0ZUxlZnRFeWUuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IGJsYWNrUmlnaHRFeWUgPSBuZXcgTm9kZSgpO1xyXG5ibGFja1JpZ2h0RXllLm5hbWUgPSBcImJsYWNrUmlnaHRFeWVcIjtcclxuYmxhY2tSaWdodEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMiwgMC4yLCAwLjIsIFstMSwgMC42LCAwXSk7XHJcbmJsYWNrUmlnaHRFeWUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMC4wNSwgMCwgMC4wNzVdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5ibGFja1JpZ2h0RXllLnBpY2tlZENvbG9yID0gWzAsMCwwXSxcclxuYmxhY2tSaWdodEV5ZS5kaWZmdXNlID0gWzEsMSwxXSxcclxuYmxhY2tSaWdodEV5ZS5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbmJsYWNrUmlnaHRFeWUuYW1iaWVudCA9IFsxLDEsMV0sXHJcbmJsYWNrUmlnaHRFeWUuc2hpbmluZXNzID0gMSxcclxuYmxhY2tSaWdodEV5ZS5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5ibGFja1JpZ2h0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmJsYWNrUmlnaHRFeWUuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IGJsYWNrTGVmdEV5ZSA9IG5ldyBOb2RlKCk7XHJcbmJsYWNrTGVmdEV5ZS5uYW1lID0gXCJibGFja0xlZnRFeWVcIjtcclxuYmxhY2tMZWZ0RXllLm1vZGVsID0gYm94TW9kZWwoMC4yLCAwLjIsIDAuMiwgWy0xLCAwLjYsIDBdKTtcclxuYmxhY2tMZWZ0RXllLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuMDUsIDAsIC0wLjA3NV0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmJsYWNrTGVmdEV5ZS5waWNrZWRDb2xvciA9IFswLDAsMF0sXHJcbmJsYWNrTGVmdEV5ZS5kaWZmdXNlID0gWzEsMSwxXSxcclxuYmxhY2tMZWZ0RXllLnNwZWN1bGFyID0gWzEsMSwxXSxcclxuYmxhY2tMZWZ0RXllLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5ibGFja0xlZnRFeWUuc2hpbmluZXNzID0gMSxcclxuYmxhY2tMZWZ0RXllLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmJsYWNrTGVmdEV5ZS52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5ibGFja0xlZnRFeWUuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IG5vc2UgPSBuZXcgTm9kZSgpO1xyXG5ub3NlLm5hbWUgPSBcIm5vc2VcIjtcclxubm9zZS5tb2RlbCA9IGJveE1vZGVsKDAuMiwgMC4yLCAwLjQsIFstMS41LCAwLjU1LCAwXSk7XHJcbm5vc2UudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMC4wNSwgMCwgMF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbm5vc2UucGlja2VkQ29sb3IgPSBbMC43Njg2Mjc0NTEsMC4zNzY0NzA1ODgsIDAuNzQ1MDk4MDM5XSxcclxubm9zZS5kaWZmdXNlID0gWzEsMSwxXSxcclxubm9zZS5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbm5vc2UuYW1iaWVudCA9IFsxLDEsMV0sXHJcbm5vc2Uuc2hpbmluZXNzID0gMSxcclxubm9zZS5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5ub3NlLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbm5vc2UuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IHJpZ2h0SG9sZSA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0SG9sZS5uYW1lID0gXCJyaWdodEhvbGVcIjtcclxucmlnaHRIb2xlLm1vZGVsID0gYm94TW9kZWwoMC4xNSwgMC4yLCAwLjEsIFstMS42LCAwLjU1LCAwXSk7XHJcbnJpZ2h0SG9sZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLjA1LCAwLCAwLjFdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5yaWdodEhvbGUucGlja2VkQ29sb3IgPSBbMC45MjE1Njg2MjcsMC41Njg2Mjc0NTEsMC44OTgwMzkyMTZdLFxyXG5yaWdodEhvbGUuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbnJpZ2h0SG9sZS5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbnJpZ2h0SG9sZS5hbWJpZW50ID0gWzEsMSwxXSxcclxucmlnaHRIb2xlLnNoaW5pbmVzcyA9IDEsXHJcbnJpZ2h0SG9sZS5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5yaWdodEhvbGUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxucmlnaHRIb2xlLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCBsZWZ0SG9sZSA9IG5ldyBOb2RlKCk7XHJcbmxlZnRIb2xlLm5hbWUgPSBcImxlZnRIb2xlXCI7XHJcbmxlZnRIb2xlLm1vZGVsID0gYm94TW9kZWwoMC4xNSwgMC4yLCAwLjEsIFstMS42LCAwLjU1LCAwXSk7XHJcbmxlZnRIb2xlLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuMDUsIDAsIC0wLjFdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5sZWZ0SG9sZS5waWNrZWRDb2xvciA9IFswLjkyMTU2ODYyNywwLjU2ODYyNzQ1MSwwLjg5ODAzOTIxNl0sXHJcbmxlZnRIb2xlLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5sZWZ0SG9sZS5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbmxlZnRIb2xlLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5sZWZ0SG9sZS5zaGluaW5lc3MgPSAxLFxyXG5sZWZ0SG9sZS5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5sZWZ0SG9sZS52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5sZWZ0SG9sZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgcmlnaHRGcm9udExlZyA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0RnJvbnRMZWcubmFtZSA9IFwicmlnaHRGcm9udExlZ1wiO1xyXG5yaWdodEZyb250TGVnLm1vZGVsID0gYm94TW9kZWwoMC41LCAwLjIsIDAuMiwgWzAuMSwgMCwgMC4xNV0pO1xyXG5yaWdodEZyb250TGVnLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWy0wLjYsIC0wLjUsIC0wLjRdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5yaWdodEZyb250TGVnLnBpY2tlZENvbG9yID0gWzAuNzY4NjI3NDUxLDAuMzc2NDcwNTg4LCAwLjc0NTA5ODAzOV0sXHJcbnJpZ2h0RnJvbnRMZWcuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbnJpZ2h0RnJvbnRMZWcuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5yaWdodEZyb250TGVnLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5yaWdodEZyb250TGVnLnNoaW5pbmVzcyA9IDEsXHJcbnJpZ2h0RnJvbnRMZWcuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxucmlnaHRGcm9udExlZy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5yaWdodEZyb250TGVnLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCBsZWZ0RnJvbnRMZWcgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0RnJvbnRMZWcubmFtZSA9IFwibGVmdEZyb250TGVnXCI7XHJcbmxlZnRGcm9udExlZy5tb2RlbCA9IGJveE1vZGVsKDAuNSwgMC4yLCAwLjIsIFswLjEsIDAsIC0wLjE1XSk7XHJcbmxlZnRGcm9udExlZy50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFstMC42LCAtMC41LCAwLjRdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5sZWZ0RnJvbnRMZWcucGlja2VkQ29sb3IgPSBbMC43Njg2Mjc0NTEsMC4zNzY0NzA1ODgsIDAuNzQ1MDk4MDM5XSxcclxubGVmdEZyb250TGVnLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5sZWZ0RnJvbnRMZWcuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5sZWZ0RnJvbnRMZWcuYW1iaWVudCA9IFsxLDEsMV0sXHJcbmxlZnRGcm9udExlZy5zaGluaW5lc3MgPSAxLFxyXG5sZWZ0RnJvbnRMZWcuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxubGVmdEZyb250TGVnLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmxlZnRGcm9udExlZy5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgcmlnaHRSZWFyTGVnID0gbmV3IE5vZGUoKTtcclxucmlnaHRSZWFyTGVnLm5hbWUgPSBcInJpZ2h0UmVhckxlZ1wiO1xyXG5yaWdodFJlYXJMZWcubW9kZWwgPSBib3hNb2RlbCgwLjUsIDAuMiwgMC4yLCBbMC41LCAwLCAwLjE1XSk7XHJcbnJpZ2h0UmVhckxlZy50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLCAtMC41LCAtMC40XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRSZWFyTGVnLnBpY2tlZENvbG9yID0gWzAuNzY4NjI3NDUxLDAuMzc2NDcwNTg4LCAwLjc0NTA5ODAzOV0sXHJcbnJpZ2h0UmVhckxlZy5kaWZmdXNlID0gWzEsMSwxXSxcclxucmlnaHRSZWFyTGVnLnNwZWN1bGFyID0gWzEsMSwxXSxcclxucmlnaHRSZWFyTGVnLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5yaWdodFJlYXJMZWcuc2hpbmluZXNzID0gMSxcclxucmlnaHRSZWFyTGVnLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbnJpZ2h0UmVhckxlZy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5yaWdodFJlYXJMZWcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IGxlZnRSZWFyTGVnID0gbmV3IE5vZGUoKTtcclxubGVmdFJlYXJMZWcubmFtZSA9IFwibGVmdFJlYXJMZWdcIjtcclxubGVmdFJlYXJMZWcubW9kZWwgPSBib3hNb2RlbCgwLjUsIDAuMiwgMC4yLCBbMC41LCAwLCAtMC4xNV0pO1xyXG5sZWZ0UmVhckxlZy50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLCAtMC41LCAwLjRdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5sZWZ0UmVhckxlZy5waWNrZWRDb2xvciA9IFswLjc2ODYyNzQ1MSwwLjM3NjQ3MDU4OCwgMC43NDUwOTgwMzldLFxyXG5sZWZ0UmVhckxlZy5kaWZmdXNlID0gWzEsMSwxXSxcclxubGVmdFJlYXJMZWcuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5sZWZ0UmVhckxlZy5hbWJpZW50ID0gWzEsMSwxXSxcclxubGVmdFJlYXJMZWcuc2hpbmluZXNzID0gMSxcclxubGVmdFJlYXJMZWcuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxubGVmdFJlYXJMZWcudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxubGVmdFJlYXJMZWcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcblxyXG5oZWFkLnNldFBhcmVudChwaWcpO1xyXG53aGl0ZVJpZ2h0RXllLnNldFBhcmVudChoZWFkKTtcclxud2hpdGVMZWZ0RXllLnNldFBhcmVudChoZWFkKTtcclxuYmxhY2tSaWdodEV5ZS5zZXRQYXJlbnQod2hpdGVSaWdodEV5ZSk7XHJcbmJsYWNrTGVmdEV5ZS5zZXRQYXJlbnQod2hpdGVMZWZ0RXllKTtcclxubm9zZS5zZXRQYXJlbnQoaGVhZCk7XHJcbnJpZ2h0SG9sZS5zZXRQYXJlbnQobm9zZSk7XHJcbmxlZnRIb2xlLnNldFBhcmVudChub3NlKTtcclxucmlnaHRGcm9udExlZy5zZXRQYXJlbnQocGlnKTtcclxubGVmdEZyb250TGVnLnNldFBhcmVudChwaWcpO1xyXG5yaWdodFJlYXJMZWcuc2V0UGFyZW50KHBpZyk7XHJcbmxlZnRSZWFyTGVnLnNldFBhcmVudChwaWcpO1xyXG5cclxudmFyIHBpZ01vZGVsID0gW1xyXG4gICAgcGlnXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwaWdNb2RlbDtcclxuICAiLCJpbXBvcnQgTm9kZSBmcm9tIFwiLi4vbm9kZS5qc1wiO1xyXG5cclxuZnVuY3Rpb24gcmluZygpIHtcclxuICAgIGxldCB2ZXJ0aWNlcyA9IFtdO1xyXG4gICAgbGV0IGNvbG9ycyA9IFtdO1xyXG4gICAgbGV0IHRhbmdlbnRzID0gW107XHJcbiAgICBsZXQgYml0YW5nZW50cyA9IFtdO1xyXG4gICAgbGV0IG5vcm1hbHMgPSBbXTtcclxuICAgIGxldCB0ZXhDb29yZCA9IFtdO1xyXG4gICAgbGV0IGZhY2VzID0gZ2VuZXJhdGVGYWNlcygpO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVCb3hlcygpe1xyXG4gICAgbGV0IGJveGVzID0gW107XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMzYwOyArK2kpe1xyXG4gICAgICBsZXQgcmFkID0gZGVnVG9SYWQoaSk7XHJcbiAgICAgIGxldCBwb3NpdGlvbiA9IFtNYXRoLmNvcyhyYWQpLCBNYXRoLnNpbihyYWQpLCAwXTtcclxuICAgICAgbGV0IHNpemUgPSBbMC4wNSwgMC4wNSwgMC44XTtcclxuICAgICAgYm94ZXMucHVzaCh7IHNpemU6IHNpemUsIHBvc2l0aW9uOiBwb3NpdGlvbiB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBib3hlcztcclxuICB9XHJcblxyXG4gIGNvbnN0IGJveGVzID0gZ2VuZXJhdGVCb3hlcygpO1xyXG4gIFxyXG4gIGJveGVzLmZvckVhY2goYm94ID0+IHtcclxuICAgIGxldCB2ZXJ0aWNlc0JveCA9IGdlbmVyYXRlVmVydGljZXMoLi4uYm94LnNpemUsIGJveC5wb3NpdGlvbik7XHJcbiAgICBsZXQgbm9ybWFsc0JveCA9IGdlbmVyYXRlTm9ybWFscyh2ZXJ0aWNlc0JveCwgZmFjZXMpO1xyXG4gICAgbm9ybWFscyA9IG5vcm1hbHMuY29uY2F0KG5vcm1hbHNCb3gpO1xyXG4gICAgdmVydGljZXMgPSB2ZXJ0aWNlcy5jb25jYXQodG9WZXJ0aWNlcyh2ZXJ0aWNlc0JveCwgZmFjZXMpKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHZlcnRpY2VzOiB2ZXJ0aWNlcyxcclxuICAgIGZhY2VzOiBmYWNlcyxcclxuICAgIHRhbmdlbnRzOiB0YW5nZW50cyxcclxuICAgIGJpdGFuZ2VudHM6IGJpdGFuZ2VudHMsXHJcbiAgICBub3JtYWxzOiBub3JtYWxzLFxyXG4gICAgY29sb3JzOiBjb2xvcnMsXHJcbiAgICB0ZXhDb29yZDogdGV4Q29vcmQsXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgaG9sbG93ID0gbmV3IE5vZGUoKTtcclxuaG9sbG93LmZsYWcgPSBcImhvbGxvd1wiO1xyXG5ob2xsb3cubmFtZSA9IFwiUmluZ1wiO1xyXG5ob2xsb3cubW9kZWwgPSByaW5nKCk7XHJcbmhvbGxvdy50cmFuc2Zvcm0gPSB7XHJcbnRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG5yb3RhdGU6IFsxMCwgMCwgMF0sXHJcbnNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmhvbGxvdy5waWNrZWRDb2xvciA9IFs0NS8yNTUsMjE1LzI1NSw5Ni8yNTVdLFxyXG5ob2xsb3cudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5ob2xsb3cuYW5pbWF0aW9uID0ge1xyXG5pc0FuaW1hdGU6IGZhbHNlLFxyXG5kZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG52YXIgaG9sbG93UmluZ01vZGVsID0gW1xyXG4gIGhvbGxvd1xyXG5dXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9sbG93UmluZ01vZGVsOyIsIi8vIGNvbnN0IHsgZGVmYXVsdDogTWF0NCB9ID0gcmVxdWlyZShcIi4vc3RydWN0cy9tYXRoL01hdDRcIik7XHJcbmltcG9ydCBNYXQ0IGZyb20gXCIuL21hdGgvTWF0NC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XHJcbiAgICAgICAgdGhpcy5sb2NhbE1hdHJpeCA9IE1hdDQuZ2V0SWRlbnRpdHkoKTtcclxuICAgICAgICB0aGlzLndvcmxkTWF0cml4ID0gTWF0NC5nZXRJZGVudGl0eSgpO1xyXG4gICAgICAgIHRoaXMud29ybGRJbnZlcnNlTWF0cml4ID0gTWF0NC5nZXRJZGVudGl0eSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdvcmxkTWF0cml4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndvcmxkTWF0cml4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgc2V0UGFyZW50KHBhcmVudCkge1xyXG4gICAgICAgIC8vIGFscmVhZHkgaGF2ZSBwYXJlbnRcclxuICAgICAgICBpZiAodGhpcy5wYXJlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQubmFtZTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICBzZXRXb3JsZE10eChtYXRyaXgpIHtcclxuICAgICAgaWYgKG1hdHJpeCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMud29ybGRNYXRyaXggPSBNYXQ0Lm11bHRpcGx5KG1hdHJpeCwgdGhpcy5sb2NhbE1hdHJpeCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy53b3JsZE1hdHJpeCA9IHRoaXMubG9jYWxNYXRyaXg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgY29uc3Qgd29ybGRNYXRyaXggPSB0aGlzLndvcmxkTWF0cml4O1xyXG4gICAgICB0aGlzLndvcmxkSW52ZXJzZU1hdHJpeCA9IE1hdDQudHJhbnNwb3NlKFxyXG4gICAgICAgIE1hdDQuaW52ZXJzZSh0aGlzLndvcmxkTWF0cml4KVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIGNoaWxkLnNldFdvcmxkTXR4KHdvcmxkTWF0cml4KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICIsImltcG9ydCBOb2RlIGZyb20gXCIuLi9zdHJ1Y3RzL25vZGUuanNcIjtcclxuaW1wb3J0IHsgZGVnVG9SYWQsIHJhZFRvRGVnIH0gZnJvbSBcIi4uL3N0cnVjdHMvbWF0aC9tYXRoVXRpbHMuanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5pbWF0aW9ue1xyXG5cclxuICAgIHN0YXRpYyBwYXJzZUFuaW1hdGlvbkZ1bmN0aW9uKG1vZGVsKXtcclxuICAgICAgICBsZXQgYW5pbWF0aW9uID0gbW9kZWwuYW5pbWF0aW9uO1xyXG4gICAgICAgIGlmKGFuaW1hdGlvbi5pc0FuaW1hdGUpe1xyXG4gICAgICAgICAgICAvLyBwYXJzZSBzdHJpbmcgdG8gZnVuY3Rpb25cclxuICAgICAgICAgICAgbGV0IF9hbmltYXRpb25GdW5jdGlvbiA9IGV2YWwoYW5pbWF0aW9uLmFuaW1hdGlvbkZ1bmN0aW9uKVxyXG4gICAgICAgICAgICByZXR1cm4gX2FuaW1hdGlvbkZ1bmN0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYW5pbWF0ZShwYXJlbnRfbW9kZWwsIGRlbHRhVGltZSl7XHJcbiAgICAgICAgbGV0IGFuaW1hdGlvbiA9IHBhcmVudF9tb2RlbC5hbmltYXRpb247XHJcbiAgICAgICAgICAgIGlmKGFuaW1hdGlvbi5pc0FuaW1hdGUpe1xyXG4gICAgICAgICAgICAgICAgbGV0IF9hbmltYXRpb25GdW5jdGlvbiA9IEFuaW1hdGlvbi5wYXJzZUFuaW1hdGlvbkZ1bmN0aW9uKHBhcmVudF9tb2RlbCk7XHJcbiAgICAgICAgICAgICAgICBpZihfYW5pbWF0aW9uRnVuY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdHIgPSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmFuaW1hdGlvbkZ1bmN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uYW5pbWF0aW9uRnVuY3Rpb24gPSBfYW5pbWF0aW9uRnVuY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5hbmltYXRpb25GdW5jdGlvbihwYXJlbnRfbW9kZWwsIGRlbHRhVGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5hbmltYXRpb25GdW5jdGlvbiA9IHN0cjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihsZXQgbW9kZWwgb2YgcGFyZW50X21vZGVsLmNoaWxkcmVuKXsgICAgXHJcbiAgICAgICAgICAgIEFuaW1hdGlvbi5hbmltYXRlKG1vZGVsLCBkZWx0YVRpbWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJlY3Vyc2UgZWFjaCBub2RlIGNoaWxkXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldEF1dG8ocGFyZW50X21vZGVsKXtcclxuICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmlzQXV0byA9ICFwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmlzQXV0bztcclxuICAgICAgICBmb3IobGV0IG1vZGVsIG9mIHBhcmVudF9tb2RlbC5jaGlsZHJlbil7ICAgIFxyXG4gICAgICAgICAgICBBbmltYXRpb24uc2V0QXV0byhtb2RlbClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHBsYXlBbmltYXRpb24ocGFyZW50X21vZGVsKXtcclxuICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmlzQW5pbWF0ZSA9IHRydWU7XHJcbiAgICAgICAgaWYocGFyZW50X21vZGVsLmFuaW1hdGlvbi5pc1JldmVyc2Upe1xyXG4gICAgICAgICAgICBpZihwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lcyl7XHJcbiAgICAgICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lID0gcGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHBhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBwYXJlbnRfbW9kZWwuY2hpbGRyZW4peyAgICBcclxuICAgICAgICAgICAgQW5pbWF0aW9uLnBsYXlBbmltYXRpb24obW9kZWwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwYXVzZUNvbnRpbnVlQW5pbWF0aW9uKHBhcmVudF9tb2RlbCl7XHJcbiAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5pc0FuaW1hdGUgPSAhcGFyZW50X21vZGVsLmFuaW1hdGlvbi5pc0FuaW1hdGU7XHJcbiAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBwYXJlbnRfbW9kZWwuY2hpbGRyZW4peyAgICBcclxuICAgICAgICAgICAgQW5pbWF0aW9uLnBhdXNlQ29udGludWVBbmltYXRpb24obW9kZWwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZXZlcnNlQW5pbWF0aW9uKHBhcmVudF9tb2RlbCl7XHJcbiAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5pc1JldmVyc2UgPSAhcGFyZW50X21vZGVsLmFuaW1hdGlvbi5pc1JldmVyc2U7XHJcbiAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBwYXJlbnRfbW9kZWwuY2hpbGRyZW4peyAgICBcclxuICAgICAgICAgICAgQW5pbWF0aW9uLnJldmVyc2VBbmltYXRpb24obW9kZWwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhbmltYXRpb25TY3JpcHQoKXtcclxuICAgICAgICBjb25zdCBhbmltYXRpb25TY3JpcHQgPSBgKChfbm9kZSwgZGVsdGFUaW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmcmFtZXMgPSBfbm9kZS5hbmltYXRpb24uZnJhbWVzO1xyXG4gICAgICAgICAgICBpZihfbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lID49IGZyYW1lcy5sZW5ndGggfHwgX25vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA8IDApe1xyXG4gICAgICAgICAgICAgICAgaWYoX25vZGUuYW5pbWF0aW9uLmlzQXV0byl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoX25vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA8IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lID0gZnJhbWVzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF9ub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPSBfbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lICUgZnJhbWVzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfbm9kZS5hbmltYXRpb24uaXNBbmltYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBfbm9kZS50cmFuc2Zvcm0gPSBmcmFtZXNbX25vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZV07XHJcbiAgICAgICAgICAgICAgICBpZihfbm9kZS5hbmltYXRpb24uaXNSZXZlcnNlKXtcclxuICAgICAgICAgICAgICAgICAgICBfbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lLS07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIF9ub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pYFxyXG4gICAgICAgIHJldHVybiBhbmltYXRpb25TY3JpcHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5leHRGcmFtZShwYXJlbnRfbW9kZWwpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzKXtcclxuICAgICAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUrKztcclxuICAgICAgICAgICAgaWYocGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPj0gcGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lID0gcGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYXJlbnRfbW9kZWwudHJhbnNmb3JtID0gcGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXNbcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IG1vZGVsIG9mIHBhcmVudF9tb2RlbC5jaGlsZHJlbil7ICAgIFxyXG4gICAgICAgICAgICBBbmltYXRpb24ubmV4dEZyYW1lKG1vZGVsKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcHJldkZyYW1lKHBhcmVudF9tb2RlbCl7XHJcbiAgICAgICAgaWYocGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMpe1xyXG4gICAgICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZS0tO1xyXG4gICAgICAgICAgICBpZihwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA8IDApe1xyXG4gICAgICAgICAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhcmVudF9tb2RlbC50cmFuc2Zvcm0gPSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lc1twYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgbW9kZWwgb2YgcGFyZW50X21vZGVsLmNoaWxkcmVuKXsgICAgXHJcbiAgICAgICAgICAgIEFuaW1hdGlvbi5wcmV2RnJhbWUobW9kZWwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmaXJzdEZyYW1lKHBhcmVudF9tb2RlbCl7XHJcbiAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5pc0FuaW1hdGUgPSBmYWxzZTtcclxuICAgICAgICBpZihwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lcyl7XHJcbiAgICAgICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lID0gMDtcclxuICAgICAgICAgICAgcGFyZW50X21vZGVsLnRyYW5zZm9ybSA9IHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzW3BhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBwYXJlbnRfbW9kZWwuY2hpbGRyZW4peyAgICBcclxuICAgICAgICAgICAgQW5pbWF0aW9uLmZpcnN0RnJhbWUobW9kZWwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBsYXN0RnJhbWUocGFyZW50X21vZGVsKXtcclxuICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmlzQW5pbWF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmKHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzKXtcclxuICAgICAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lcy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICBwYXJlbnRfbW9kZWwudHJhbnNmb3JtID0gcGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXNbcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IG1vZGVsIG9mIHBhcmVudF9tb2RlbC5jaGlsZHJlbil7ICAgIFxyXG4gICAgICAgICAgICBBbmltYXRpb24ubGFzdEZyYW1lKG1vZGVsKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdG90YWxNb2RlbEZyYW1lcyhwYXJlbnRfbW9kZWwpe1xyXG4gICAgICAgIGxldCB0b3RhbEZyYW1lcyA9IDA7XHJcbiAgICAgICAgaWYocGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMpe1xyXG4gICAgICAgICAgICB0b3RhbEZyYW1lcyA9IHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBjaGlsZF9tb2RlbCBvZiBwYXJlbnRfbW9kZWwuY2hpbGRyZW4peyAgICBcclxuICAgICAgICAgICAgLy8gcmVjdXJzZSBlYWNoIG5vZGUgY2hpbGQsIGZpbmQgbWF4IGZyYW1lXHJcbiAgICAgICAgICAgIGxldCBjaGlsZFRvdGFsRnJhbWVzID0gQW5pbWF0aW9uLnRvdGFsTW9kZWxGcmFtZXMoY2hpbGRfbW9kZWwpO1xyXG4gICAgICAgICAgICBpZihjaGlsZFRvdGFsRnJhbWVzID4gdG90YWxGcmFtZXMpe1xyXG4gICAgICAgICAgICAgICAgdG90YWxGcmFtZXMgPSBjaGlsZFRvdGFsRnJhbWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0b3RhbEZyYW1lcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdG90YWxOb2RlRnJhbWVzKHBhcmVudF9tb2RlbCl7XHJcbiAgICAgICAgbGV0IHRvdGFsTm9kZUZyYW1lcyA9IFwiLVwiO1xyXG4gICAgICAgIGlmKHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzKXtcclxuICAgICAgICAgICAgLy8gYXMgc3RyaW5nXHJcbiAgICAgICAgICAgIHRvdGFsTm9kZUZyYW1lcyA9IHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzLmxlbmd0aC50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdG90YWxOb2RlRnJhbWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjdXJyZW50TW9kZWxGcmFtZShwYXJlbnRfbW9kZWwpe1xyXG4gICAgICAgIGxldCBjdXJyZW50RnJhbWUgPSAwO1xyXG4gICAgICAgIGlmKHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzKXtcclxuICAgICAgICAgICAgY3VycmVudEZyYW1lID0gcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgbW9kZWwgb2YgcGFyZW50X21vZGVsLmNoaWxkcmVuKXsgICAgXHJcbiAgICAgICAgICAgIC8vIHJlY3Vyc2UgZWFjaCBub2RlIGNoaWxkLCBmaW5kIG1heCBmcmFtZVxyXG4gICAgICAgICAgICBsZXQgY2hpbGRDdXJyZW50RnJhbWUgPSBBbmltYXRpb24uY3VycmVudE1vZGVsRnJhbWUobW9kZWwpO1xyXG4gICAgICAgICAgICBpZihjaGlsZEN1cnJlbnRGcmFtZSA+IGN1cnJlbnRGcmFtZSl7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50RnJhbWUgPSBjaGlsZEN1cnJlbnRGcmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY3VycmVudEZyYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjdXJyZW50Tm9kZUZyYW1lKG5vZGUpe1xyXG4gICAgICAgIGxldCBjdXJyRnJhbWUgPSBcIi1cIlxyXG4gICAgICAgIGlmKG5vZGUuYW5pbWF0aW9uLmZyYW1lcyl7XHJcbiAgICAgICAgICAgIGN1cnJGcmFtZSA9IG5vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZS50b1N0cmluZygpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjdXJyRnJhbWVcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGFuZGxlVHJhbnNmb3JtKG5vZGUsIGRvYyl7XHJcbiAgICAgICAgaWYoIW5vZGUuYW5pbWF0aW9uLmlzQW5pbWF0ZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBbdHgsIHR5LCB0el0gPSBub2RlLnRyYW5zZm9ybS50cmFuc2xhdGVcclxuICAgICAgICBsZXQgW3J4LCByeSwgcnpdID0gbm9kZS50cmFuc2Zvcm0ucm90YXRlXHJcbiAgICAgICAgcnggPSByYWRUb0RlZyhyeCk7IFxyXG4gICAgICAgIHJ5ID0gcmFkVG9EZWcocnkpOyBcclxuICAgICAgICByeiA9IHJhZFRvRGVnKHJ6KTtcclxuICAgICAgICBsZXQgW3N4LHN5LHN6XSA9IG5vZGUudHJhbnNmb3JtLnNjYWxlXHJcblxyXG4gICAgICAgLy8gc2xpZGVyIHR4LCB0eSwgdHogXHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwidHJhbnNsYXRpb24teC1zbGlkZXJcIikudmFsdWUgPSB0eCo1MDtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2xhdGlvbi15LXNsaWRlclwiKS52YWx1ZSA9IHR5KjUwO1xyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInRyYW5zbGF0aW9uLXotc2xpZGVyXCIpLnZhbHVlID0gdHoqNTA7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwidHJhbnNsYXRpb24teC1zbGlkZXItdmFsdWVcIikuaW5uZXJIVE1MID0gdHg7ICAgIFxyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInRyYW5zbGF0aW9uLXktc2xpZGVyLXZhbHVlXCIpLmlubmVySFRNTCA9IHR5O1xyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInRyYW5zbGF0aW9uLXotc2xpZGVyLXZhbHVlXCIpLmlubmVySFRNTCA9IHR6O1xyXG4gICAgICAgIC8vIHJvdGF0aW9uIHR4LCB0eSwgdHogXHJcbiAgICAgICAgY29uc29sZS5sb2cocnopXHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwicm90YXRpb24teC1zbGlkZXJcIikudmFsdWUgPSByeDtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJyb3RhdGlvbi15LXNsaWRlclwiKS52YWx1ZSA9IHJ5O1xyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInJvdGF0aW9uLXotc2xpZGVyXCIpLnZhbHVlID0gcno7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwicm90YXRpb24teC1zbGlkZXItdmFsdWVcIikuaW5uZXJIVE1MID0gcngudG9GaXhlZCgyKTtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJyb3RhdGlvbi15LXNsaWRlci12YWx1ZVwiKS5pbm5lckhUTUwgPSByeS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInJvdGF0aW9uLXotc2xpZGVyLXZhbHVlXCIpLmlubmVySFRNTCA9IHJ6LnRvRml4ZWQoMik7XHJcbiAgICAgICAgY29uc29sZS5sb2cocnopXHJcblxyXG4gICAgICAgIC8vIHNjYWxlIHR4LCB0eSwgdHpcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJzY2FsYXRpb24teC1zbGlkZXJcIikudmFsdWUgPSBzeCoxMDtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJzY2FsYXRpb24teS1zbGlkZXJcIikudmFsdWUgPSBzeSoxMDtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJzY2FsYXRpb24tei1zbGlkZXJcIikudmFsdWUgPSBzeioxMDtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJzY2FsYXRpb24teC1zbGlkZXItdmFsdWVcIikuaW5uZXJIVE1MID0gc3gudG9GaXhlZCgyKTtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJzY2FsYXRpb24teS1zbGlkZXItdmFsdWVcIikuaW5uZXJIVE1MID0gc3kudG9GaXhlZCgyKTtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJzY2FsYXRpb24tei1zbGlkZXItdmFsdWVcIikuaW5uZXJIVE1MID0gc3oudG9GaXhlZCgyKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgVmVjMyBmcm9tIFwiLi4vc3RydWN0cy9tYXRoL1ZlYzMuanNcIlxyXG5pbXBvcnQgTWF0NCBmcm9tIFwiLi4vc3RydWN0cy9tYXRoL01hdDQuanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhe1xyXG4gICAgc3RhdGljIHByb2plY3Rpb25PcnRvZ3JhcGhpYyhsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikge1xyXG4gICAgICAgIC8vIE5vdGU6IFRoaXMgbWF0cml4IGZsaXBzIHRoZSBZIGF4aXMgc28gMCBpcyBhdCB0aGUgdG9wLlxyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gcmlnaHQtbGVmdFxyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRvcC1ib3R0b21cclxuICAgICAgICBjb25zdCBkZXB0aCA9IGZhciAtIG5lYXJcclxuICAgICAgICBjb25zdCBob3Jpem9udGFsUmF0aW8gPSAocmlnaHQgKyBsZWZ0KSAvIHdpZHRoXHJcbiAgICAgICAgY29uc3QgdmVydGljYWxSYXRpbyA9ICh0b3AgKyBib3R0b20pIC8gaGVpZ2h0XHJcbiAgICAgICAgY29uc3QgZGVwdGhSYXRpbyA9IChmYXIgKyBuZWFyKSAvIGRlcHRoXHJcblxyXG4gICAgICAgIHJldHVybiBbMiAvICh3aWR0aCksIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAyIC8gKGhlaWdodCksIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAtMiAvIChkZXB0aCksIDAsXHJcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsUmF0aW8sIHZlcnRpY2FsUmF0aW8sIGRlcHRoUmF0aW8sIDFdO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgcHJvamVjdGlvblBlcnNwZWN0aXZlKGZvdiwgYXNwZWN0LCBuZWFyLCBmYXIpe1xyXG4gICAgICAgIGNvbnN0IGYgPSAxLjAgLyBNYXRoLnRhbihmb3YgLyAyKVxyXG4gICAgICAgIGNvbnN0IHJhbmdlSW52ID0gMSAvIChuZWFyIC0gZmFyKVxyXG5cclxuICAgICAgICByZXR1cm4gW2YgLyBhc3BlY3QsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCBmLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgKG5lYXIgKyBmYXIpICogcmFuZ2VJbnYsIC0xLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgbmVhciAqIGZhciAqIHJhbmdlSW52ICogMiwgMF1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcHJvamVjdGlvbk9ibGlxdWUodGhldGEsIHBoaSl7XHJcblxyXG4gICAgICAgIHZhciB0ID0gTWF0aC50YW4odGhldGEpXHJcbiAgICAgICAgdCA9IHQgPT0gMCA/IDAuMDAwMDEgOiB0XHJcbiAgICAgICAgdmFyIHAgPSBNYXRoLnRhbihwaGkpXHJcbiAgICAgICAgcCA9IHAgPT0gMCA/IDAuMDAwMDEgOiBwXHJcbiAgICAgICAgcmV0dXJuIFsxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIC0xL3QsIC0xL3AsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAxXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBsb29rRGlyZWN0aW9uKGV5ZSwgY2VudGVyLCB1cCl7XHJcbiAgICAgICAgLy8gbm9ybWFsaXplIGVhY2ggYXJyYXlcclxuICAgICAgICAvLyBjaGFuZ2UgYXMgVmVjMyBmcm9tIGFycmF5XHJcbiAgICAgICAgbGV0IF9leWUgPSBWZWMzLmZyb21BcnJheShleWUpXHJcbiAgICAgICAgbGV0IF9jZW50ZXIgPSBWZWMzLmZyb21BcnJheShjZW50ZXIpXHJcbiAgICAgICAgbGV0IF91cCA9IFZlYzMuZnJvbUFycmF5KHVwKVxyXG4gICAgXHJcblxyXG5cclxuICAgICAgICBjb25zdCBmID0gVmVjMy51bml0VmVjdG9yKFZlYzMuc3ViKF9leWUsIF9jZW50ZXIpKSAvLyB6QXhpc1xyXG4gICAgICAgIGNvbnN0IHMgPSBWZWMzLnVuaXRWZWN0b3IoVmVjMy5jcm9zcyhmLCBfdXApKSAvLyB4QXhpc1xyXG4gICAgICAgIGNvbnN0IHUgPSBWZWMzLnVuaXRWZWN0b3IoVmVjMy5jcm9zcyhzLCBmKSlcclxuXHJcbiAgICAgICAgcmV0dXJuIFtzLngsIHMueSwgcy56LCAwLFxyXG4gICAgICAgICAgICAgICAgdS54LCB1LnksIHUueiwgMCxcclxuICAgICAgICAgICAgICAgIGYueCwgZi55LCBmLnosIDAsXHJcbiAgICAgICAgICAgICAgICBleWVbMF0sIGV5ZVsxXSwgZXllWzJdLCAxXVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWFrZVpUb1dNYXRyaXgoZnVkZ2VGYWN0b3Ipe1xyXG4gICAgICAgIHJldHVybiBbMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgZnVkZ2VGYWN0b3IsIDFdXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHByb2plY3Rpb25NYXRyaXgocHJvamVjdGlvbl90eXBlLCBfZm92LCBfYXNwZWN0LF9uZWFyLCBfZmFyLCB0aGV0YSA9IDkwLCBwaGkgPSA5MCl7XHJcbiAgICAgICAgY29uc3QgYXNwZWN0ID0gX2FzcGVjdDtcclxuICAgICAgICBjb25zdCBmb3YgPSBfZm92O1xyXG4gICAgICAgIGNvbnN0IGxlZnQgPSAtMjtcclxuICAgICAgICBjb25zdCByaWdodCA9IDI7XHJcbiAgICAgICAgY29uc3QgYm90dG9tID0gLTI7XHJcbiAgICAgICAgY29uc3QgdG9wID0gMjtcclxuICAgICAgICBjb25zdCBmYXJPcnRobyA9IF9mYXI7XHJcbiAgICAgICAgY29uc3QgbmVhck9ydGhvID0gLWZhck9ydGhvO1xyXG4gICAgXHJcbiAgICAgICAgc3dpdGNoIChwcm9qZWN0aW9uX3R5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIm9ydGhvZ3JhcGhpY1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIENhbWVyYS5wcm9qZWN0aW9uT3J0b2dyYXBoaWMobGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyT3J0aG8sIGZhck9ydGhvKVxyXG4gICAgICAgICAgICBjYXNlIFwib2JsaXF1ZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdDQubXVsdGlwbHkoXHJcbiAgICAgICAgICAgICAgICAgICAgQ2FtZXJhLnByb2plY3Rpb25PYmxpcXVlKHRoZXRhLCBwaGkpLFxyXG4gICAgICAgICAgICAgICAgICAgIENhbWVyYS5wcm9qZWN0aW9uT3J0b2dyYXBoaWMobGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyT3J0aG8sIGZhck9ydGhvKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY2FzZSBcInBlcnNwZWN0aXZlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FtZXJhLnByb2plY3Rpb25QZXJzcGVjdGl2ZShcclxuICAgICAgICAgICAgICAgICAgICBmb3YsXHJcbiAgICAgICAgICAgICAgICAgICAgYXNwZWN0LFxyXG4gICAgICAgICAgICAgICAgICAgIF9uZWFyLFxyXG4gICAgICAgICAgICAgICAgICAgIF9mYXJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FtZXJhLnByb2plY3Rpb25PcnRvZ3JhcGhpYyhsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXJPcnRobywgZmFyT3J0aG8pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB2aWV3TWF0cml4KG9yaWVudGF0aW9uLCBsb29rQXQsIHVwKXtcclxuICAgICAgICBsZXQgW3JvbGwsIHBpdGNoLCByYWRpdXNdID0gb3JpZW50YXRpb25cclxuXHJcbiAgICAgICAgLy8gcm9sbCwgcGl0Y2gsIHJhZGl1c1xyXG4gICAgICAgIHZhciBjYW1lcmFNYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICAgICAgICBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICAgICAgICAgICAgTWF0NC5yb3RhdGVZKHBpdGNoKSxcclxuICAgICAgICAgICAgICAgIE1hdDQucm90YXRlWChyb2xsKSksXHJcbiAgICAgICAgICAgIE1hdDQudHJhbnNsYXRlKDAsIDAsIHJhZGl1cylcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHZhciBjYW1lcmFQb3NpdGlvbiA9IFtcclxuICAgICAgICAgICAgY2FtZXJhTWF0cml4WzEyXSxcclxuICAgICAgICAgICAgY2FtZXJhTWF0cml4WzEzXSxcclxuICAgICAgICAgICAgY2FtZXJhTWF0cml4WzE0XVxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgdmFyIGNhbWVyYU1hdHJpeCA9IENhbWVyYS5sb29rRGlyZWN0aW9uKGNhbWVyYVBvc2l0aW9uLCBsb29rQXQsIHVwKVxyXG5cclxuICAgICAgICB2YXIgdmlld01hdHJpeCA9IE1hdDQuaW52ZXJzZShjYW1lcmFNYXRyaXgpXHJcblxyXG4gICAgICAgIHJldHVybiB2aWV3TWF0cml4XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFwZXJUZXh0dXJlKGdsKSB7XHJcbiAgY29uc3QgdGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcclxuICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcclxuICBnbC50ZXhJbWFnZTJEKFxyXG4gICAgZ2wuVEVYVFVSRV8yRCxcclxuICAgIDAsXHJcbiAgICBnbC5SR0JBLFxyXG4gICAgMSxcclxuICAgIDEsXHJcbiAgICAwLFxyXG4gICAgZ2wuUkdCQSxcclxuICAgIGdsLlVOU0lHTkVEX0JZVEUsXHJcbiAgICBuZXcgVWludDhBcnJheShbMCwgMCwgMCwgMF0pXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xyXG4gICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBpbWFnZSk7XHJcbiAgICBpZiAoaXNQb3dlck9mMihpbWFnZS53aWR0aCkgJiYgaXNQb3dlck9mMihpbWFnZS5oZWlnaHQpKSB7XHJcbiAgICAgIGdsLmdlbmVyYXRlTWlwbWFwKGdsLlRFWFRVUkVfMkQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGltYWdlLnNyYyA9IFwiLi9tYXBwaW5nL3BhcGVyLmpwZWdcIjsgXHJcbiAgcmV0dXJuIHRleHR1cmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUG93ZXJPZjIodmFsdWUpIHtcclxuICByZXR1cm4gKHZhbHVlICYgKHZhbHVlIC0gMSkpID09IDA7XHJcbn0gXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRW52aXJvbm1lbnRUZXh0dXJlKGdsKSB7XHJcbiAgY29uc3QgdGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcclxuICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFX0NVQkVfTUFQLCB0ZXh0dXJlKTtcclxuXHJcbiAgY29uc3QgZmFjZUluZm9zID0gW1xyXG4gICAgeyB0YXJnZXQ6IGdsLlRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWCwgdXJsOiBcIi4vbWFwcGluZy9lbnZpcm9ubWVudC5qcGdcIiB9LFxyXG4gICAgeyB0YXJnZXQ6IGdsLlRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWCwgdXJsOiBcIi4vbWFwcGluZy9lbnZpcm9ubWVudC5qcGdcIiB9LFxyXG4gICAgeyB0YXJnZXQ6IGdsLlRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWSwgdXJsOiBcIi4vbWFwcGluZy9lbnZpcm9ubWVudC5qcGdcIiB9LFxyXG4gICAgeyB0YXJnZXQ6IGdsLlRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWSwgdXJsOiBcIi4vbWFwcGluZy9lbnZpcm9ubWVudC5qcGdcIiB9LFxyXG4gICAgeyB0YXJnZXQ6IGdsLlRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWiwgdXJsOiBcIi4vbWFwcGluZy9lbnZpcm9ubWVudC5qcGdcIiB9LFxyXG4gICAgeyB0YXJnZXQ6IGdsLlRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWiwgdXJsOiBcIi4vbWFwcGluZy9lbnZpcm9ubWVudC5qcGdcIiB9LFxyXG4gIF07XHJcblxyXG4gIGZhY2VJbmZvcy5mb3JFYWNoKChmYWNlSW5mbykgPT4ge1xyXG4gICAgY29uc3QgeyB0YXJnZXQsIHVybCB9ID0gZmFjZUluZm87XHJcblxyXG4gICAgZ2wudGV4SW1hZ2UyRChcclxuICAgICAgdGFyZ2V0LFxyXG4gICAgICAwLFxyXG4gICAgICBnbC5SR0JBLFxyXG4gICAgICA1MTIsXHJcbiAgICAgIDUxMixcclxuICAgICAgMCxcclxuICAgICAgZ2wuUkdCQSxcclxuICAgICAgZ2wuVU5TSUdORURfQllURSxcclxuICAgICAgbnVsbFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2Uuc3JjID0gdXJsO1xyXG4gICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFX0NVQkVfTUFQLCB0ZXh0dXJlKTtcclxuICAgICAgZ2wudGV4SW1hZ2UyRCh0YXJnZXQsIDAsIGdsLlJHQkEsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIGltYWdlKTtcclxuICAgICAgZ2wuZ2VuZXJhdGVNaXBtYXAoZ2wuVEVYVFVSRV9DVUJFX01BUCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgZ2wuZ2VuZXJhdGVNaXBtYXAoZ2wuVEVYVFVSRV9DVUJFX01BUCk7XHJcbiAgZ2wudGV4UGFyYW1ldGVyaShcclxuICAgIGdsLlRFWFRVUkVfQ1VCRV9NQVAsXHJcbiAgICBnbC5URVhUVVJFX01JTl9GSUxURVIsXHJcbiAgICBnbC5MSU5FQVJfTUlQTUFQX0xJTkVBUlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCdW1wVGV4dHVyZShnbCkge1xyXG4gIGNvbnN0IHRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XHJcbiAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XHJcbiAgZ2wudGV4SW1hZ2UyRChcclxuICAgIGdsLlRFWFRVUkVfMkQsIFxyXG4gICAgMCwgXHJcbiAgICBnbC5SR0JBLCBcclxuICAgIDEsIFxyXG4gICAgMSwgXHJcbiAgICAwLCBcclxuICAgIGdsLlJHQkEsIFxyXG4gICAgZ2wuVU5TSUdORURfQllURSwgXHJcbiAgICBuZXcgVWludDhBcnJheShbMjU1LCAwLCAwLCAyNTVdKVxyXG4gICk7XHJcblxyXG4gIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGltYWdlLnNyYyA9IFwiLi9tYXBwaW5nL2J1bXAucG5nXCI7XHJcbiAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XHJcbiAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIGltYWdlKTtcclxuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5MSU5FQVIpO1xyXG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUik7XHJcbiAgfVxyXG59XHJcbiAgIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==