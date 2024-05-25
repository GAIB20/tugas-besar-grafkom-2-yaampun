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
/* harmony export */   handleCameraPosition: () => (/* binding */ handleCameraPosition),
/* harmony export */   handleCurrentModelFrame: () => (/* binding */ handleCurrentModelFrame),
/* harmony export */   handleCurrentNodeFrame: () => (/* binding */ handleCurrentNodeFrame),
/* harmony export */   handleFps: () => (/* binding */ handleFps),
/* harmony export */   handleTotalModelFrame: () => (/* binding */ handleTotalModelFrame),
/* harmony export */   handleTotalNodeFrame: () => (/* binding */ handleTotalNodeFrame),
/* harmony export */   handleTransform: () => (/* binding */ handleTransform),
/* harmony export */   initOptionModel: () => (/* binding */ initOptionModel),
/* harmony export */   nodeName: () => (/* binding */ nodeName)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
/* harmony import */ var _structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../structs/math/mathUtils.js */ "./src/structs/math/mathUtils.js");
/* harmony import */ var _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Animation.js */ "./src/utils/Animation.js");
/* harmony import */ var _utils_fileManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/fileManager.js */ "./src/utils/fileManager.js");
/* harmony import */ var _utils_CharacterController_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/CharacterController.js */ "./src/utils/CharacterController.js");
/* harmony import */ var _utils_Camera_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/Camera.js */ "./src/utils/Camera.js");







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
// camera following model
const followModel = document.getElementById('follow-model');

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
const currentFPS = document.getElementById('current-fps');
const currentModelFrame = document.getElementById('current-model-frame');
const currentNodeFrame = document.getElementById('current-node-frame');
const totalModelFrame = document.getElementById('total-model-frame');
const totalNodeFrame = document.getElementById('total-node-frame');

// add frame 
const addFrameButton = document.getElementById('add-frame')
const verifyAddFrameButton = document.getElementById('verify-add-frame')
const cancelAddFrameButton = document.getElementById('cancel-add-frame')

//edit frame
const editFrameButton = document.getElementById('edit-current-frame')
const verifyEditFrameButton = document.getElementById('verify-edit-frame')
const cancelEditFrameButton = document.getElementById('cancel-edit-frame')

// delete frame
const deleteFrameButton = document.getElementById('delete-current-frame')
const verifyDeleteFrameButton = document.getElementById('verify-delete-frame')
const cancelDeleteFrameButton = document.getElementById('cancel-delete-frame')

// animation
const saveAnimation = document.getElementById('save-animation')
const okSaveAnimationModal = document.getElementById('ok-save-animation')

// ambient light
const redAmbient = document.getElementById('red-slider');
const greenAmbient = document.getElementById('green-slider');
const blueAmbient = document.getElementById('blue-slider');

// light position
const lightX = document.getElementById('light-x-slider');
const lightY = document.getElementById('light-y-slider');
const lightZ = document.getElementById('light-z-slider');

// material selection
const material = document.getElementById('material-selection');

// phong
const shininess = document.getElementById('shininess-slider');
const specular = document.getElementById('specular-slider');
const diffuse = document.getElementById('diffuse-slider');
const ambient = document.getElementById('ambient-slider');

// colors
const basicColor = document.getElementById('basic-color');
const diffuseColor = document.getElementById('diffuse-color');
const specularColor = document.getElementById('specular-color');
const ambientColor = document.getElementById('ambient-color');

// node manager
const nodeName = document.getElementById('node-name');
const renameButton = document.getElementById('rename-btn');
const deleteButton = document.getElementById('delete-btn');
const addChildButton = document.getElementById('add-child-btn')
const importButton = document.getElementById('import-btn');
const exportButton = document.getElementById('export-btn');

// save and load
const saveButton = document.getElementById('save-btn'); 
const load = document.getElementById('load-btn');

// spot light
const spotLight = document.getElementById('spot-selection');


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
    ;(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.changeModelObject)(modelSelection.value);

    // handle auto/stop auto
    if(_index_js__WEBPACK_IMPORTED_MODULE_0__.target.animation.isAuto){
        auto.textContent = "Stop Auto";
    }
    else{
        auto.textContent = "Auto";
    }
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
            handleTotalNodeFrame(object);
            setNodeManager(object);
            let components = document.getElementsByClassName("component");
            for (let i = 0; i < components.length; i++) {
                components[i].className = components[i].className.replace(" border-2 border-black px-5", "");
            }
            evt.currentTarget.className += " border-2 border-black px-5";
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
    diffuseColor.value = rgbToHex(node.pickedColor);
    specularColor.value = rgbToHex(node.specular);
    ambientColor.value = rgbToHex(node.phongAmbient);
    
    ambient.value = node.const.ka;
    diffuse.value = node.const.kd;
    specular.value = node.const.ks;

    material.value = node.phong ? 1 : 0;

    nodeName.value = node.name;
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

function handleCameraPosition(parent_node){
    let roll = parent_node.viewMatrix.camera[0];
    let pitch = parent_node.viewMatrix.camera[1];
    let radius = parent_node.viewMatrix.camera[2];

    cameraRadius.value = radius*10;
    document.getElementById('camera-radius-slider-value').textContent = radius.toFixed(2);

    cameraRoll.value = (0,_structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.radToDeg)(roll);
    document.getElementById('camera-roll-slider-value').textContent = (0,_structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.radToDeg)(roll).toFixed(2);

    cameraPitch.value = (0,_structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.radToDeg)(pitch);
    document.getElementById('camera-pitch-slider-value').textContent = (0,_structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.radToDeg)(pitch).toFixed(2);

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

// follow model
followModel.addEventListener('click', function(){
    _utils_CharacterController_js__WEBPACK_IMPORTED_MODULE_4__["default"].isFollowPlayer = !_utils_CharacterController_js__WEBPACK_IMPORTED_MODULE_4__["default"].isFollowPlayer;
    if(!_utils_CharacterController_js__WEBPACK_IMPORTED_MODULE_4__["default"].isFollowPlayer){
        followModel.textContent = "On";
        followModel.className = `text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 \ 
        font-medium rounded-lg text-lg px-5 py-1 mt-2 me-2 mb-2 dark:bg-blue-600  \
        dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`
    }
    else{
        followModel.textContent = "Off";
        followModel.className = `text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 \
        font-medium rounded-lg text-lg px-5 py-1 mt-2 me-2 mb-2 dark:bg-red-600 \
        dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800`
    }
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
    if(_utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].currentModelFrame(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot) == 0) return;
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
    _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].disableAnimation(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot)
    _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].nextFrame(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot);
    _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].handleGeneralTransform(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot, document);
    
})

prev.addEventListener('click', function(){
    _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].disableAnimation(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot)
    _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].prevFrame(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot);
    _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].handleGeneralTransform(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot, document);
})

first.addEventListener('click', function(){
    _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].firstFrame(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot);
    _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].handleGeneralTransform(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot, document);
})

last.addEventListener('click', function(){
    _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].lastFrame(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot);
    _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].handleGeneralTransform(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot, document);
})

function handleAmbientColor(node){
    node.ambient[0] = redAmbient.value;
    node.ambient[1] = greenAmbient.value;
    node.ambient[2] = blueAmbient.value;
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
    node.shininess = shininess.value;
    node.phongAmbient = hexToRgb(ambientColor.value);
    node.specular = hexToRgb(specularColor.value);
    node.diffuse = hexToRgb(diffuseColor.value);
    node.const.ks = parseFloat(specular.value);
    node.const.kd = parseFloat(diffuse.value);
    node.const.ka = parseFloat(ambient.value);
    node.pickedColor = hexToRgb(basicColor.value);
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

ambientColor.addEventListener('input', function(){
    handlePhong(_index_js__WEBPACK_IMPORTED_MODULE_0__.target);
});

specularColor.addEventListener('input', function(){
    handlePhong(_index_js__WEBPACK_IMPORTED_MODULE_0__.target);
});

diffuseColor.addEventListener('input', function(){
    _index_js__WEBPACK_IMPORTED_MODULE_0__.target.pickedColor = hexToRgb(basicColor.value);
    basicColor.value = diffuseColor.value;
});

basicColor.addEventListener('input', function(){
    _index_js__WEBPACK_IMPORTED_MODULE_0__.target.pickedColor = hexToRgb(basicColor.value);
    diffuseColor.value = basicColor.value;
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

function handleFps(){
    currentFPS.textContent = "Current FPS: " + _index_js__WEBPACK_IMPORTED_MODULE_0__.fps;
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
cancelAddFrameButton.addEventListener('click', function(){
    const addFrameModal = document.getElementById('add-frame-modal')
    addFrameModal.className = addFrameModal.className + " hidden"
})

addFrameButton.addEventListener('click', function(){
    const addFrameModal = document.getElementById('add-frame-modal')
    addFrameModal.className = addFrameModal.className.replace(" hidden", "")
})

verifyAddFrameButton.addEventListener('click', function(){
    _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].disableAnimation(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot);
    let tx = document.getElementById('add-translation-x').value
    let ty = document.getElementById('add-translation-y').value
    let tz = document.getElementById('add-translation-z').value
    
    // rads
    let rx = document.getElementById('add-rotation-x').value
    let ry = document.getElementById('add-rotation-y').value
    let rz = document.getElementById('add-rotation-z').value

    let sx = document.getElementById('add-scalation-x').value
    let sy = document.getElementById('add-scalation-y').value
    let sz = document.getElementById('add-scalation-z').value

    let transform = {
        translate : [tx, ty, tz],
        rotate : [(0,_structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(rx), (0,_structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(ry), (0,_structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(rz)],
        scale : [sx, sy, sz]

    }
    
    if(_index_js__WEBPACK_IMPORTED_MODULE_0__.target.animation.frames !== null){
        _index_js__WEBPACK_IMPORTED_MODULE_0__.target.animation.frames.push(transform)
        handleTotalModelFrame(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot);
        handleTotalNodeFrame(_index_js__WEBPACK_IMPORTED_MODULE_0__.target);
    }

    
    

    const addFrameModal = document.getElementById('add-frame-modal')
    addFrameModal.className = addFrameModal.className + " hidden"

})

//edit frame

editFrameButton.addEventListener('click', function(){
    const editFrameModal = document.getElementById('edit-frame-modal')
    editFrameModal.className = editFrameModal.className.replace(" hidden", "")
    // set value
    let transform = _index_js__WEBPACK_IMPORTED_MODULE_0__.target.transform
    document.getElementById('edit-translation-x').value = transform.translate[0]
    document.getElementById('edit-translation-y').value = transform.translate[1]
    document.getElementById('edit-translation-z').value = transform.translate[2]

    document.getElementById('edit-rotation-x').value = (0,_structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.radToDeg)(transform.rotate[0])
    document.getElementById('edit-rotation-y').value = (0,_structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.radToDeg)(transform.rotate[1])
    document.getElementById('edit-rotation-z').value = (0,_structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.radToDeg)(transform.rotate[2])

    document.getElementById('edit-scalation-x').value = transform.scale[0]
    document.getElementById('edit-scalation-y').value = transform.scale[1]
    document.getElementById('edit-scalation-z').value = transform.scale[2]
})

cancelEditFrameButton.addEventListener('click', function(){
    const editFrameModal = document.getElementById('edit-frame-modal')
    editFrameModal.className = editFrameModal.className + " hidden"
})

verifyEditFrameButton.addEventListener('click', function(){
    // tx, ty, tz, rx, ry, rz, sx, sy, sz
    _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].disableAnimation(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot);
    let tx = document.getElementById('edit-translation-x').value
    let ty = document.getElementById('edit-translation-y').value
    let tz = document.getElementById('edit-translation-z').value

    let rx = (0,_structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(document.getElementById('edit-rotation-x').value)
    let ry = (0,_structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(document.getElementById('edit-rotation-y').value)
    let rz = (0,_structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(document.getElementById('edit-rotation-z').value)

    let sx = document.getElementById('edit-scalation-x').value
    let sy = document.getElementById('edit-scalation-y').value
    let sz = document.getElementById('edit-scalation-z').value

    let transform = {
        translate : [tx, ty, tz],
        rotate : [rx, ry, rz],
        scale : [sx, sy, sz]
    }

    _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].editCurrentFrame(_index_js__WEBPACK_IMPORTED_MODULE_0__.target, transform);

    // disable modal
    const editFrameModal = document.getElementById('edit-frame-modal')
    editFrameModal.className = editFrameModal.className + " hidden"

})

// delete frame
deleteFrameButton.addEventListener('click', function(){
    const deleteFrameModal = document.getElementById('delete-frame-modal')
    deleteFrameModal.className = deleteFrameModal.className.replace(" hidden", "")
})

cancelDeleteFrameButton.addEventListener('click', function(){
    const deleteFrameModal = document.getElementById('delete-frame-modal')
    deleteFrameModal.className = deleteFrameModal.className + " hidden"
})

verifyDeleteFrameButton.addEventListener('click', function(){
    _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].disableAnimation(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot);

    // delete frame
    _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].deleteCurrentFrame(_index_js__WEBPACK_IMPORTED_MODULE_0__.target);

    // update node frame
    handleTotalModelFrame(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot);
    handleTotalNodeFrame(_index_js__WEBPACK_IMPORTED_MODULE_0__.target);
    _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].handleGeneralTransform(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot,document)
    // if(target.animation.frames !== null){
    //     target.animation.frames.pop();
    //     handleTotalModelFrame(targetRoot);
    //     handleTotalNodeFrame(target);
    // }
    const deleteFrameModal = document.getElementById('delete-frame-modal')
    deleteFrameModal.className = deleteFrameModal.className + " hidden"
})

saveAnimation.addEventListener('click', function(){
    let animationModal = document.getElementById('save-animation-modal')
    animationModal.className = animationModal.className.replace(" hidden", "")
})

okSaveAnimationModal.addEventListener('click', function(){
    let animationModal = document.getElementById('save-animation-modal')
    animationModal.className = animationModal.className + " hidden"
})


function setNodeManager(node){
    nodeName.value = node.name;
};

renameButton.addEventListener('click', function(){
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.renameTarget)(nodeName.value);
    clearComponent();
    displayComponent(0, _index_js__WEBPACK_IMPORTED_MODULE_0__.objects);
})

deleteButton.addEventListener('click', function(){
    ;(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.deleteNode)(_index_js__WEBPACK_IMPORTED_MODULE_0__.target.name);
    clearComponent();
    displayComponent(0, _index_js__WEBPACK_IMPORTED_MODULE_0__.objects);
})

addChildButton.addEventListener('click', function() {
    ;(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.addNode)(nodeName.value);
    // console.log(target)
})

saveButton.addEventListener('click', function(){
    ;(0,_utils_fileManager_js__WEBPACK_IMPORTED_MODULE_3__.saveJSON)(_index_js__WEBPACK_IMPORTED_MODULE_0__.objects);
});

load.addEventListener('change', function(event){
    (0,_utils_fileManager_js__WEBPACK_IMPORTED_MODULE_3__.loadJSON)(event.target, function(objects){
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.loadObjects)(objects);
        const importedOption = document.createElement('option');
        importedOption.value = _index_js__WEBPACK_IMPORTED_MODULE_0__.model.length;
        importedOption.text = objects[0].name;
        modelSelection.appendChild(importedOption);
        

        // Set the value of modelSelection to "imported"
        modelSelection.value = _index_js__WEBPACK_IMPORTED_MODULE_0__.model.length;
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.addModel)(objects);
    });
})

exportButton.addEventListener('click', function(){
    console.log([_index_js__WEBPACK_IMPORTED_MODULE_0__.target]);
    (0,_utils_fileManager_js__WEBPACK_IMPORTED_MODULE_3__.saveJSON)([_index_js__WEBPACK_IMPORTED_MODULE_0__.target]);
});

importButton.addEventListener('change', function(event){
    (0,_utils_fileManager_js__WEBPACK_IMPORTED_MODULE_3__.loadJSON)(event.target, function(object){
        object[0].setParent(_index_js__WEBPACK_IMPORTED_MODULE_0__.target);
        clearComponent();
        displayComponent(0, _index_js__WEBPACK_IMPORTED_MODULE_0__.objects);
    });
})


/**
 * Character Movement
 */

document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowUp':
            _utils_CharacterController_js__WEBPACK_IMPORTED_MODULE_4__["default"].vz = 1e-2/4;
            break;
        case 'ArrowDown':
            _utils_CharacterController_js__WEBPACK_IMPORTED_MODULE_4__["default"].vz = -1e-2/4;
            break;
        case 'ArrowLeft':
            _utils_CharacterController_js__WEBPACK_IMPORTED_MODULE_4__["default"].vx = -1e-2/4;
            break;
        case 'ArrowRight':
            _utils_CharacterController_js__WEBPACK_IMPORTED_MODULE_4__["default"].vx = 1e-2/4;
            break;
        // handle space
        case ' ':
            if(_utils_CharacterController_js__WEBPACK_IMPORTED_MODULE_4__["default"].isJumping) break;
            _utils_CharacterController_js__WEBPACK_IMPORTED_MODULE_4__["default"].isJumping = true;
            _utils_CharacterController_js__WEBPACK_IMPORTED_MODULE_4__["default"].currentGround = _index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot.transform.translate[1];
            _index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot.transform.translate[1] += 1e-2/4;
            _utils_CharacterController_js__WEBPACK_IMPORTED_MODULE_4__["default"].vy = 1e-2/2;
            break;
        default:
            // Handle other keys if needed
            break;
    }
});

material.addEventListener('change', function(){
    _index_js__WEBPACK_IMPORTED_MODULE_0__.target.phong = material.value == 1 ? true : false;
});

spotLight.addEventListener('change', function(){
    var spot = spotLight.value == 1 ? true : false;
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.setSpotLight)(spot);
})

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addModel: () => (/* binding */ addModel),
/* harmony export */   addNode: () => (/* binding */ addNode),
/* harmony export */   changeMappingTexture: () => (/* binding */ changeMappingTexture),
/* harmony export */   changeModelObject: () => (/* binding */ changeModelObject),
/* harmony export */   deleteNode: () => (/* binding */ deleteNode),
/* harmony export */   fps: () => (/* binding */ fps),
/* harmony export */   lightDirection: () => (/* binding */ lightDirection),
/* harmony export */   loadObjects: () => (/* binding */ loadObjects),
/* harmony export */   model: () => (/* binding */ model),
/* harmony export */   objects: () => (/* binding */ objects),
/* harmony export */   renameTarget: () => (/* binding */ renameTarget),
/* harmony export */   setObjects: () => (/* binding */ setObjects),
/* harmony export */   setObliquePhi: () => (/* binding */ setObliquePhi),
/* harmony export */   setObliqueTheta: () => (/* binding */ setObliqueTheta),
/* harmony export */   setProjectionType: () => (/* binding */ setProjectionType),
/* harmony export */   setSpotLight: () => (/* binding */ setSpotLight),
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
/* harmony import */ var _structs_node_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./structs/node.js */ "./src/structs/node.js");
/* harmony import */ var _structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./structs/math/mathUtils.js */ "./src/structs/math/mathUtils.js");
/* harmony import */ var _utils_CharacterController_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/CharacterController.js */ "./src/utils/CharacterController.js");
/* harmony import */ var _structs_boxModel_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./structs/boxModel.js */ "./src/structs/boxModel.js");

















const canvas = document.getElementById("gl-canvas");
const gl = canvas.getContext("webgl");


const vertexShaderSource = document.getElementById("vertex-shader-3d")?.textContent;
const fragmentShaderSource = document.getElementById("fragment-shader-3d")?.textContent;

// state
var model = [_structs_model_pig_js__WEBPACK_IMPORTED_MODULE_0__["default"], _structs_model_chicken_js__WEBPACK_IMPORTED_MODULE_1__["default"], _structs_model_fox_js__WEBPACK_IMPORTED_MODULE_2__["default"], _structs_model_hollowThingy_js__WEBPACK_IMPORTED_MODULE_8__["default"], _structs_model_ring_js__WEBPACK_IMPORTED_MODULE_9__["default"]];
var objects;
function setObjects(value) {
  objects = value;
}
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
var spotLight = false;
function setSpotLight(value) {
  spotLight = value;
};

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
var cubeCount = 0;

// animation
var t_animation = 0;
var t_text_fps = 0;
var freq_loop = 60;
var freq_text_fps = 2;
var loop_period = 1000/freq_loop;
var text_fps_period = 1000/freq_text_fps;
var fps = 0;

initState();

function initState() {
    objects = model[0];
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
    ;(0,_handler_eventHandler_js__WEBPACK_IMPORTED_MODULE_7__.handleTotalModelFrame)(objects[0])
    ;(0,_handler_eventHandler_js__WEBPACK_IMPORTED_MODULE_7__.handleTotalNodeFrame)(objects[0])

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
      
        if (!object.program ) {
            object.program = createShaderProgram(
                gl,
                vertexShaderSource,
                fragmentShaderSource
            );
        } 
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
        object.transform.rotate = object.transform.rotate.map((val) => (0,_structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_13__.degToRad)(val));
        if(object.children.length > 0){
            setDefaultRotation(object.children);
        }
    }

}

function renderLoop(objects) {
    objects.forEach(object => {
        gl.useProgram(object.program);

        object.worldMatrix = setProjectionMatrix(object.worldMatrix, object)


        var a_position = new Float32Array(object.model.vertices.flat(1));
        var a_normal = new Float32Array(object.model.normals.flat(1));
        var a_color = new Float32Array(object.pickedColor.flat(1));
        var a_texture = new Float32Array(object.model.texCoord);
        var a_tangent = new Float32Array(object.model.tangents.flat(1));
        var a_bitangent = new Float32Array(object.model.bitangents.flat(1));

        setAttr(gl, object.program, a_position, a_normal, a_color, a_texture, a_tangent, a_bitangent);
        var uniforms = {
            uWorldViewProjection: object.worldMatrix,
            uWorldInverseTranspose: object.worldInverseMatrix,
            uColor: object.pickedColor.concat(1.0),
            uAmbientColor: object.ambient,
            uDiffuseColor: object.pickedColor,
            uSpecularColor: object.specular,
            uShininess: object.shininess,
            uLightPos: lightDirection,
            ka: object.const.ka,
            kd: object.const.kd,
            ks: object.const.ks,
            uPhong: object.phong,
            uPhongAmbientColor: object.phongAmbient,
            uSpotLight: spotLight,
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
    if(t_text_fps === 0) t_text_fps = now;

    if((now - t_animation) >= loop_period){
      let deltaTime = now - t_animation;
      t_animation = now;
      fps = (1000 / deltaTime).toFixed(2);
      _utils_Animation_js__WEBPACK_IMPORTED_MODULE_11__["default"].animate(targetRoot, deltaTime);
      _utils_CharacterController_js__WEBPACK_IMPORTED_MODULE_14__["default"].velocityLoop(targetRoot, deltaTime);
      _utils_CharacterController_js__WEBPACK_IMPORTED_MODULE_14__["default"].gravityLoop(targetRoot, deltaTime);
      (0,_handler_eventHandler_js__WEBPACK_IMPORTED_MODULE_7__.handleCurrentModelFrame)(targetRoot)
      ;(0,_handler_eventHandler_js__WEBPACK_IMPORTED_MODULE_7__.handleCurrentNodeFrame)(target)
      
    }

    if((now - t_text_fps) >= text_fps_period){
      t_text_fps = now;
      (0,_handler_eventHandler_js__WEBPACK_IMPORTED_MODULE_7__.handleFps)();
    }


    objects[0].setWorldMtx(null);

    normalizeLight = _structs_math_Vec3_js__WEBPACK_IMPORTED_MODULE_4__["default"].unitVector(_structs_math_Vec3_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromArray(lightDirection)).asArray()
    renderLoop(objects);
    _utils_Animation_js__WEBPACK_IMPORTED_MODULE_11__["default"].handleTransform(target, document);
    // handle character controller
    _utils_CharacterController_js__WEBPACK_IMPORTED_MODULE_14__["default"].followPlayerLoop(targetRoot);
    (0,_handler_eventHandler_js__WEBPACK_IMPORTED_MODULE_7__.handleCameraPosition)(targetRoot);

    

    
    window.requestAnimFrame(render);
    
}


function setProjectionMatrix(matrix, object) {
    // const camera = setCamera(object);
    const projectionView = _utils_Camera_js__WEBPACK_IMPORTED_MODULE_6__["default"].projectionMatrix(projection_type, 
                                                    (0,_structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_13__.degToRad)(45), 
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

function renameTarget (newName) {
  for( let i = 0; i < objects.length; i++){
    if(objects[i].name === target.name){
      console.log(objects[i].name)
      console.log(newName)
      objects[i].name = newName;
    }
  }
  target.name = newName;
  (0,_handler_eventHandler_js__WEBPACK_IMPORTED_MODULE_7__.clearComponent)();
  (0,_handler_eventHandler_js__WEBPACK_IMPORTED_MODULE_7__.displayComponent)(0, objects);
}

function deleteNode (name) {
  function removeNode (node) {
    if (node.name === name) {
      objects.splice(objects.indexOf(node), 1);
      nodeName.value = ""
      return;
    } 

    if (node.children.length > 0) {
      for (let i = 0; i < node.children.length; i++) {
        if (node.children[i].name === name) {
          node.children.splice(i, 1);
          nodeName.value = ""
        } else {
          removeNode(node.children[i]);
        }
      }
    }
  }

  removeNode(objects[0]);
  console.log(objects);
}

function addNode () {
  const newNode = new _structs_node_js__WEBPACK_IMPORTED_MODULE_12__["default"](); 
  cubeCount++;
  checkNode(objects, "newCube" + cubeCount);
  newNode.name = "newCube" + cubeCount;
  newNode.model = (0,_structs_boxModel_js__WEBPACK_IMPORTED_MODULE_15__["default"])(1, 1, 1, [0, 0, 0]);
  newNode.transform = {
    translate: [0, 0, 0],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
  };
  newNode.pickedColor = randomColors(),
  newNode.ambient = [1,1,1];
  newNode.phong = true;
  newNode.phongAmbient = [0,0,0],
  newNode.diffuse = [1,1,1];
  newNode.specular = [1,1,1];
  newNode.shininess = 1;
  newNode.const = {
      kd: 1.0,
      ks: 0.0,
      ka: 1.0,
  };
  newNode.viewMatrix = {
      camera: [0, 0, 5],
      lookAt: [0, 0, 0],
      up: [0, 1, 0],
      near: 0.1,
      far: 50,
  };
  newNode.animation = {
      isAnimate: false,
  };
  newNode.worldMatrix = target.worldMatrix;
  if (objects.length !== 0) {
    newNode.setParent(target);
  } else {
    objects.push(newNode);
    target = objects[0];
    targetRoot = objects[0];
    render();
  }
  (0,_handler_eventHandler_js__WEBPACK_IMPORTED_MODULE_7__.clearComponent)();
  (0,_handler_eventHandler_js__WEBPACK_IMPORTED_MODULE_7__.displayComponent)(0, objects);
}

function checkNode(objects, name) {
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].name === name) {
      cubeCount++;
    }
    if (objects[i].children.length > 0) {
      checkNode(objects[i].children, name);
    }
  }
}

function loadObjects(objects) {
    setObjects(objects);
    setTarget(objects[0]);
    setTargetRoot(objects[0]);
    (0,_handler_eventHandler_js__WEBPACK_IMPORTED_MODULE_7__.clearComponent)();
    (0,_handler_eventHandler_js__WEBPACK_IMPORTED_MODULE_7__.displayComponent)(0, objects);
    (0,_handler_eventHandler_js__WEBPACK_IMPORTED_MODULE_7__.handleTransform)(objects[0]);
    (0,_handler_eventHandler_js__WEBPACK_IMPORTED_MODULE_7__.handleTotalModelFrame)(targetRoot)
    ;(0,_handler_eventHandler_js__WEBPACK_IMPORTED_MODULE_7__.handleTotalNodeFrame)(targetRoot)
    render();
}

function addModel(object) {
  model.push(object);
}

/***/ }),

/***/ "./src/structs/boxModel.js":
/*!*********************************!*\
  !*** ./src/structs/boxModel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ boxModel),
/* harmony export */   generateFaces: () => (/* binding */ generateFaces),
/* harmony export */   generateNormals: () => (/* binding */ generateNormals),
/* harmony export */   generateVertices: () => (/* binding */ generateVertices)
/* harmony export */ });
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math/Vec3.js */ "./src/structs/math/Vec3.js");


function generateVertices(height, width, depth, offset) {
  return [
    [offset[0] - width / 2, offset[1] - height / 2, offset[2] - depth / 2],
    [offset[0] + width / 2, offset[1] - height / 2, offset[2] - depth / 2],
    [offset[0] - width / 2, offset[1] + height / 2, offset[2] - depth / 2],
    [offset[0] + width / 2, offset[1] + height / 2, offset[2] - depth / 2],
    [offset[0] - width / 2, offset[1] - height / 2, offset[2] + depth / 2],
    [offset[0] + width / 2, offset[1] - height / 2, offset[2] + depth / 2],
    [offset[0] - width / 2, offset[1] + height / 2, offset[2] + depth / 2],
    [offset[0] + width / 2, offset[1] + height / 2, offset[2] + depth / 2],
  ]
}

function generateFaces() {
  return [
    [1, 3, 2],
    [4, 2, 3],
    [1, 2, 5],
    [6, 5, 2],
    [1, 5, 3],
    [5, 7, 3],
    [2, 4, 6],
    [8, 6, 4],
    [4, 3, 8],
    [7, 8, 3],
    [5, 6, 7],
    [8, 7, 6],
  ]
}

function generateTexCoor () {
  return [
    1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0,

    0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1,

    0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0,

    1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0,

    1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0,

    0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1,
  ]
}
function generateTangents() {
  return [
    //back
    0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
    //bottom
    0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
    //left
    -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
    //right
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    //top
    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
    //front
    0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
  ]
}

function generateBitangents() {
    return [
        0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
        0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
        0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
        0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
        -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    ]
}

function generateNormals(vertices, faces) {
  let normals = [];
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i];
    let v1 = _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromArray(vertices[face[0] - 1])
    let v2 = _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromArray(vertices[face[1] - 1])
    let v3 = _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromArray(vertices[face[2] - 1])

    let v1v2 = _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["default"].sub(v2, v1);
    let v1v3 = _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["default"].sub(v3,v1);

    let res = _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["default"].unitVector(_math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["default"].cross(v1v2,v1v3)).asArray()
    normals.push(res);
    normals.push(res);
    normals.push(res);
  }
  return normals;
}

function generateColors(vertices, color = null) {
  let colors = [];
  for (let i = 0; i < vertices.length; i += 3) {
    var c = color;
    if (color == null) {
      c = [Math.random(), Math.random(), Math.random()];
    } 
    colors.push(c);
    colors.push(c);
    colors.push(c);
    colors.push(c);
    colors.push(c);
    colors.push(c);
  }
  return colors;
}

function boxModel(height, width, depth, offset) {

  let vertices = generateVertices(height, width, depth, offset);
  let center = [offset[0], offset[1], offset[2]];
  let faces = generateFaces();
  let texCoord = generateTexCoor();
  let normals = generateNormals(vertices, faces);
  vertices = toVertices(vertices, faces);

  let tangents = generateTangents();
  let bitangents = generateBitangents();
  let colors = generateColors(vertices);
  
  return {
    vertices: vertices,
    faces: faces,
    tangents: tangents,
    bitangents: bitangents,
    normals: normals,
    colors: colors,
    texCoord: texCoord,
    center : center
  };
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
        // return new Vec3(a.z * b.y - a.y * b.z, a.x * b.z - a.z * b.x ,a.y * b.x - a.x * b.y);
        return new Vec3(a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z ,a.x * b.y - a.y * b.x);
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
/* harmony import */ var _boxModel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../boxModel.js */ "./src/structs/boxModel.js");





// Create the chicken body node
const chicken = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
chicken.flag = "articulated";
chicken.name = "chicken";
chicken.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(1, 1.5, 1, [0, 0, 0]);
chicken.transform = {
    translate: [0, 0, 0],
    rotate: [42, -55, 27],
    scale: [1, 1, 1],
};
chicken.pickedColor = [0.7, 0.7, 0],
chicken.diffuse = [1,1,1];
chicken.specular = [1,1,1];
chicken.ambient = [1, 1, 1],
chicken.phong = true;
chicken.phongAmbient = [0.7, 0.7, 0],
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
head.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.6, 0.6, 0.8, [0, 0, 0]);
head.transform = {
    translate: [0.75, 0.75, 0],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
head.pickedColor = [0.7, 0.7, 0];
head.diffuse = [1, 1, 1];
head.specular = [1, 1, 1];
head.ambient = [1, 1, 1];
head.phong = true;
head.phongAmbient = [0.7, 0.7, 0],
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
beak.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.2, 0.2, 0.3, [-0.65, -0.1, 0]);
beak.transform = {
    translate: [1, 0, 0],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
beak.pickedColor = [1, 0.5, 0];
beak.diffuse = [1, 1, 1];
beak.specular = [1, 1, 1];
beak.ambient = [1, 1, 1];
beak.phong = true;
beak.phongAmbient = [1, 0.5, 0],
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
whiteLeftEye.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.075, 0.1, 0.1, [-0.75, 0.2, 0.15]);
whiteLeftEye.transform = {
    translate: [1.04, 0, 0],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
whiteLeftEye.pickedColor = [0.99, 0.99, 0.99];
whiteLeftEye.diffuse = [1, 1, 1];
whiteLeftEye.specular = [1, 1, 1];
whiteLeftEye.ambient = [1, 1, 1];
whiteLeftEye.phong = true;
whiteLeftEye.phongAmbient = [0.99, 0.99, 0.99],
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
blackLeftEye.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.05, 0.05, 0.05, [-0.75, 0.2, 0.15]);
blackLeftEye.transform = {
    translate: [0.06, 0, 0],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
blackLeftEye.pickedColor = [0, 0, 0];
blackLeftEye.diffuse = [1, 1, 1];
blackLeftEye.specular = [1, 1, 1];
blackLeftEye.ambient = [1, 1, 1];
blackLeftEye.phong = true;
blackLeftEye.phongAmbient = [0,0,0],
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
whiteRightEye.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.075, 0.1, 0.1, [-0.75, 0.2, 0.15]);
whiteRightEye.transform = {
    translate: [1.04, 0, -0.32],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
whiteRightEye.pickedColor = [0.99, 0.99, 0.99];
whiteRightEye.diffuse = [1, 1, 1];
whiteRightEye.specular = [1, 1, 1];
whiteRightEye.ambient = [1, 1, 1];
whiteRightEye.phong = true;
whiteRightEye.phongAmbient = [0.99, 0.99, 0.99],
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
blackRightEye.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.05, 0.05, 0.05, [-0.75, 0.2, 0.15]);
blackRightEye.transform = {
    translate: [0.06, 0, 0],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
blackRightEye.pickedColor = [0, 0, 0];
blackRightEye.diffuse = [1, 1, 1];
blackRightEye.specular = [1, 1, 1];
blackRightEye.ambient = [1, 1, 1];
blackRightEye.phong = true;
blackRightEye.phongAmbient = [0,0,0],
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
leftWing.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.5, 0.1, 1, [0, 0, 0]);
leftWing.transform = {
    translate: [0, 0, -0.75],
    rotate: [0, 0, 90],
    scale: [1, 1, 1],
};
leftWing.pickedColor = [0.7, 0.7, 0];
leftWing.diffuse = [1, 1, 1];
leftWing.specular = [1, 1, 1];
leftWing.ambient = [1, 1, 1];
leftWing.phong = true;
leftWing.phongAmbient = [0.7, 0.7, 0],
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
rightWing.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.5, 0.1, 1, [0, 0, 0]);
rightWing.transform = {
    translate: [0, 0, 0.75],
    rotate: [0, 0, 90],
    scale: [1, 1, 1],
};
rightWing.pickedColor = [0.7, 0.7, 0];
rightWing.diffuse = [1, 1, 1];
rightWing.specular = [1, 1, 1];
rightWing.ambient = [1, 1, 1];
rightWing.phong = true;
rightWing.phongAmbient = [0.7, 0.7, 0],
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
rightLeg.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.6, 0.2, 0.2, [0, 0, 0]);
rightLeg.transform = {
    translate: [-0.5, -0.8, -0.35],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
rightLeg.pickedColor = [1, 0.5, 0];
rightLeg.diffuse = [1, 1, 1];
rightLeg.specular = [1, 1, 1];
rightLeg.ambient = [1, 1, 1];
rightLeg.phong = true;
rightLeg.phongAmbient = [1, 0.5, 0],
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
rightFoot.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.1, 0.4, 0.3, [0, 0, 0]);
rightFoot.transform = {
    translate: [0.02, -0.34, 0],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
rightFoot.pickedColor = [1, 0.5, 0];
rightFoot.diffuse = [1, 1, 1];
rightFoot.specular = [1, 1, 1];
rightFoot.ambient = [1, 1, 1];
rightFoot.phong = true;
rightFoot.phongAmbient = [1, 0.5, 0],
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
leftLeg.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.6, 0.2, 0.2, [0, 0, 0]);
leftLeg.transform = {
    translate: [-0.5, -0.8, 0.35],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
leftLeg.pickedColor = [1, 0.5, 0];
leftLeg.diffuse = [1, 1, 1];
leftLeg.specular = [1, 1, 1];
leftLeg.ambient = [1, 1, 1];
leftLeg.phong = true;
leftLeg.phongAmbient = [1, 0.5, 0],
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
leftFoot.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.1, 0.4, 0.3, [0, 0, 0]);
leftFoot.transform = {
    translate: [0.02, -0.34, 0],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
leftFoot.pickedColor = [1, 0.5, 0];
leftFoot.diffuse = [1, 1, 1];
leftFoot.specular = [1, 1, 1];
leftFoot.ambient = [1, 1, 1];
leftFoot.phong = true;
leftFoot.phongAmbient = [1, 0.5, 0],
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
/* harmony import */ var _math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/mathUtils.js */ "./src/structs/math/mathUtils.js");
/* harmony import */ var _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Animation.js */ "./src/utils/Animation.js");
/* harmony import */ var _boxModel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../boxModel.js */ "./src/structs/boxModel.js");





const bodyColor = [0.886, 0.345, 0.133];
const whiteColor = [0.99, 0.99, 0.99];
const blackColor = [0, 0, 0];
const brownColor = [0.545, 0.271, 0.075];

const fox = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
fox.flag = "articulated";
fox.name = "fox";
fox.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.6, 0.7, 1, [0, 0, 0]); 
fox.transform = {
  translate: [0, 0, 0],
  rotate: [30,45, 0],
  scale: [1, 1, 1],
};
fox.pickedColor = bodyColor;
fox.phong = true;
fox.phongAmbient = bodyColor,
fox.diffuse = [1,1,1],
fox.specular = [1,1,1],
fox.ambient = [1,1,1],
fox.shininess = 1,
fox.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 0.5,
}
fox.viewMatrix = {
  camera: [0, 0, 5],
  lookAt: [0, 0, 0],
  up: [0, 1, 0],
  near: 0.1,
  far: 50,
};
fox.animation = {
  isAnimate: false,
  frames: foxFrames(),
  currentFrame: 0,
  animationFunction: _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].animationScript(),
  isAuto: false,
  isReverse: false
};

function foxFrames() {
  let transform = {
    translate: [0, 0, 0],
    rotate: [(0,_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(30), (0,_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(45), (0,_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(0)],
    scale: [1, 1, 1],
  }
  let frames = []
  for(let k = 0; k < 50; ++k){
      let _transform = JSON.parse(JSON.stringify(transform));
      _transform.translate[0] =  k / 50 ;
      _transform.translate[2] =  k / 50 ;
      frames.push(_transform);
  }

  return frames;

}

const head = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
head.name = "head";
head.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.5, 0.5, 0.4, [0, 0, 0]);
head.transform = {
  translate: [0, 0.1, 0.7], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
head.pickedColor = bodyColor;
head.phong = true;
head.phongAmbient = bodyColor,
head.diffuse = [1,1,1],
head.specular = [1,1,1],
head.ambient = [1,1,1],
head.shininess = 1,
head.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 0.5,
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
whiteRightEye.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.1, 0.1, 0.05, [0, 0, 0]);
whiteRightEye.transform = {
  translate: [0.15, 0.1, 0.2], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
whiteRightEye.pickedColor = whiteColor;
whiteRightEye.phong = true;
whiteRightEye.phongAmbient = whiteColor,
whiteRightEye.diffuse = [1,1,1],
whiteRightEye.specular = [1,1,1],
whiteRightEye.ambient = [1,1,1],
whiteRightEye.shininess = 1,
whiteRightEye.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 0.5,
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
whiteLeftEye.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.1, 0.1, 0.05, [0, 0, 0]);
whiteLeftEye.transform = {
  translate: [-0.15, 0.1, 0.2], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
whiteLeftEye.pickedColor = whiteColor;
whiteLeftEye.phong = true;
whiteLeftEye.phongAmbient = whiteColor,
whiteLeftEye.diffuse = [1,1,1],
whiteLeftEye.specular = [1,1,1],
whiteLeftEye.ambient = [1,1,1],
whiteLeftEye.shininess = 1,
whiteLeftEye.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 0.5,
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
blackRightEye.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.1, 0.06, 0.05, [0, 0, 0]);
blackRightEye.transform = {
  translate: [-0.03, 0, 0.01], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
blackRightEye.pickedColor = blackColor;
blackRightEye.phong = true;
blackRightEye.phongAmbient = blackColor,
blackRightEye.diffuse = [1,1,1],
blackRightEye.specular = [1,1,1],
blackRightEye.ambient = [1,1,1],
blackRightEye.shininess = 1,
blackRightEye.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 0.5,
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
blackLeftEye.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.1, 0.06, 0.05, [0, 0, 0]);
blackLeftEye.transform = {
  translate: [0.03, 0, 0.01], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
blackLeftEye.pickedColor = blackColor;
blackLeftEye.phong = true;
blackLeftEye.phongAmbient = blackColor,
blackLeftEye.diffuse = [1,1,1],
blackLeftEye.specular = [1,1,1],
blackLeftEye.ambient = [1,1,1],
blackLeftEye.shininess = 1,
blackLeftEye.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 0.5,
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
nose.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.15, 0.3, 0.2, [0, 0, 0]);
nose.transform = {
  translate: [0, -0.1, 0.3], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
nose.pickedColor = blackColor;
nose.phong = true;
nose.phongAmbient = blackColor,
nose.diffuse = [1,1,1],
nose.specular = [1,1,1],
nose.ambient = [1,1,1],
nose.shininess = 1,
nose.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 0.5,
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

const undernose = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
undernose.name = "undernose";
undernose.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.1, 0.3, 0.2, [0, 0, 0]);
undernose.transform = {
  translate: [0, -0.2, 0.3], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
undernose.pickedColor = whiteColor;
undernose.phong = true;
undernose.phongAmbient = whiteColor,
undernose.diffuse = [1,1,1],
undernose.specular = [1,1,1],
undernose.ambient = [1,1,1],
undernose.shininess = 1,
undernose.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 0.5,
}
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
rightEar.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.2, 0.2, 0.1, [0, 0, 0]);
rightEar.transform = {
  translate: [0.15, 0.35, 0],
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
rightEar.pickedColor = blackColor;
rightEar.phong = true;
rightEar.phongAmbient = blackColor,
rightEar.diffuse = [1,1,1],
rightEar.specular = [1,1,1],
rightEar.ambient = [1,1,1],
rightEar.shininess = 1,
rightEar.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 0.5,
}
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
leftEar.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.2, 0.2, 0.1, [0, 0, 0]);
leftEar.transform = {
  translate: [-0.15, 0.35, 0], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
leftEar.pickedColor = blackColor;
leftEar.phong = true;
leftEar.phongAmbient = blackColor,
leftEar.diffuse = [1,1,1],
leftEar.specular = [1,1,1],
leftEar.ambient = [1,1,1],
leftEar.shininess = 1,
leftEar.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 0.5,
}
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
rightFrontLeg.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(1, 0.2, 0.15, [0, 0, 0]);
rightFrontLeg.transform = {
  translate: [0.2, -0.25, 0.2], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
rightFrontLeg.pickedColor = blackColor;
rightFrontLeg.phong = true;
rightFrontLeg.phongAmbient = blackColor,
rightFrontLeg.diffuse = [1,1,1],
rightFrontLeg.specular = [1,1,1],
rightFrontLeg.ambient = [1,1,1],
rightFrontLeg.shininess = 1,
rightFrontLeg.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 0.5,
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
  frames: rightFrontLegFrames(),
  currentFrame: 0,
  animationFunction: _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].animationScript(),
  isAuto: false,
  isReverse: false
};

function rightFrontLegFrames () {
  let transform = {
    translate: [0.2, -0.25, 0.2], 
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
  }
  let frames = []
  for(let k = 0; k < 25; ++k){
      let _transform = JSON.parse(JSON.stringify(transform));
      _transform.rotate[0] = (0,_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(-k);
      frames.push(_transform);
  }

  for(let k = 0; k < 25; ++k){
    let _transform = JSON.parse(JSON.stringify(transform));
    _transform.rotate[0] = (0,_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(k);
    frames.push(_transform);
  }
  return frames;

}

const rightFrontToe = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
rightFrontToe.name = "rightFrontToe";
rightFrontToe.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.1, 0.2, 0.2, [0, 0, 0]);
rightFrontToe.transform = {
  translate: [0, -0.45, 0.05], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
rightFrontToe.pickedColor = whiteColor;
rightFrontToe.phong = true;
rightFrontToe.phongAmbient = whiteColor,
rightFrontToe.diffuse = [1,1,1],
rightFrontToe.specular = [1,1,1],
rightFrontToe.ambient = [1,1,1],
rightFrontToe.shininess = 1,
rightFrontToe.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 0.5,
}
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
leftFrontLeg.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(1, 0.2, 0.15, [0, 0, 0]);
leftFrontLeg.transform = {
  translate: [-0.2, -0.25, 0.2], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
leftFrontLeg.pickedColor = blackColor;
leftFrontLeg.phong = true;
leftFrontLeg.phongAmbient = blackColor,
leftFrontLeg.diffuse = [1,1,1],
leftFrontLeg.specular = [1,1,1],
leftFrontLeg.ambient = [1,1,1],
leftFrontLeg.shininess = 1,
leftFrontLeg.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 0.5,
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
  frames: leftFrontLegFrames(),
  currentFrame: 0,
  animationFunction: _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].animationScript(),
  isAuto: false,
  isReverse: false
};

function leftFrontLegFrames () {
  let transform = {
    translate: [-0.2, -0.25, 0.2], 
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
  }
  let frames = []

  for(let k = 0; k < 25; ++k){
    let _transform = JSON.parse(JSON.stringify(transform));
    _transform.rotate[0] = (0,_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(k);
    frames.push(_transform);
  }
  for(let k = 0; k < 25; ++k){
    let _transform = JSON.parse(JSON.stringify(transform));
    _transform.rotate[0] = (0,_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(-k);
    frames.push(_transform);
  }
  return frames;

}

const leftFrontToe = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
leftFrontToe.name = "leftFrontToe";
leftFrontToe.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.1, 0.2, 0.15, [0, 0, 0]);
leftFrontToe.transform = {
  translate: [-0, -0.45, 0.05], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
leftFrontToe.pickedColor = whiteColor;
leftFrontToe.phong = true;
leftFrontToe.phongAmbient = whiteColor,
leftFrontToe.diffuse = [1,1,1],
leftFrontToe.specular = [1,1,1],
leftFrontToe.ambient = [1,1,1],
leftFrontToe.shininess = 1,
leftFrontToe.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 0.5,
}
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
rightRearLeg.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(1, 0.2, 0.15, [0, 0, 0]);
rightRearLeg.transform = {
  translate: [0.2, -0.25, -0.2],
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
rightRearLeg.pickedColor = blackColor;
rightRearLeg.phong = true;
rightRearLeg.phongAmbient = blackColor,
rightRearLeg.diffuse = [1,1,1],
rightRearLeg.specular = [1,1,1],
rightRearLeg.ambient = [1,1,1],
rightRearLeg.shininess = 1,
rightRearLeg.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 0.5,
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
    frames: rightRearLegFrames(),
    currentFrame: 0,
    animationFunction: _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].animationScript(),
    isAuto: false,
    isReverse: false
};

function rightRearLegFrames() {
  let transform = {
    translate: [0.2, -0.25, -0.2],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
  }
  let frames = []
  for(let k = 0; k < 25; ++k){
    let _transform = JSON.parse(JSON.stringify(transform));
    _transform.rotate[0] = (0,_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(k - 20);
    frames.push(_transform);
  }
  for(let k = 0; k < 25; ++k){
      let _transform = JSON.parse(JSON.stringify(transform));
      _transform.rotate[0] = (0,_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(-k + 20);
      frames.push(_transform);
  }

  

  return frames;
}

const rightRearToe = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
rightRearToe.name = "rightRearToe";
rightRearToe.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.1, 0.2, 0.2, [0, 0, 0]);
rightRearToe.transform = {
  translate: [0, -0.45, 0.05],
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
rightRearToe.pickedColor = whiteColor;
rightRearToe.phong = true;
rightRearToe.phongAmbient = whiteColor,
rightRearToe.diffuse = [1,1,1],
rightRearToe.specular = [1,1,1],
rightRearToe.ambient = [1,1,1],
rightRearToe.shininess = 1,
rightRearToe.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 0.5,
}
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
leftRearLeg.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(1, 0.2, 0.15, [0, 0, 0]);
leftRearLeg.transform = {
  translate: [-0.2, -0.25, -0.2], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
leftRearLeg.pickedColor = blackColor;
leftRearLeg.phong = true;
leftRearLeg.phongAmbient = blackColor,
leftRearLeg.diffuse = [1,1,1],
leftRearLeg.specular = [1,1,1],
leftRearLeg.ambient = [1,1,1],
leftRearLeg.shininess = 1,
leftRearLeg.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 0.5,
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
  frames: leftRearLegFrames(),
  currentFrame: 0,
  animationFunction: _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].animationScript(),
  isAuto: false,
  isReverse: false
};

function leftRearLegFrames() {
  let transform = {
    translate: [-0.2, -0.25, -0.2], 
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
  }
  let frames = []
  for(let k = 0; k < 25; ++k){
      let _transform = JSON.parse(JSON.stringify(transform));
      _transform.rotate[0] = (0,_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(-k + 20);
      frames.push(_transform);
  }

  for(let k = 0; k < 25; ++k){
    let _transform = JSON.parse(JSON.stringify(transform));
    _transform.rotate[0] = (0,_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(k - 20);
    frames.push(_transform);
  }
  return frames;
}

const leftRearToe = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
leftRearToe.name = "leftRearToe";
leftRearToe.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.1, 0.2, 0.2, [0, 0, 0]);
leftRearToe.transform = {
  translate: [-0, -0.45, 0.05], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
leftRearToe.pickedColor = whiteColor;
leftRearToe.phong = true;
leftRearToe.phongAmbient = whiteColor,
leftRearToe.diffuse = [1,1,1],
leftRearToe.specular = [1,1,1],
leftRearToe.ambient = [1,1,1],
leftRearToe.shininess = 1,
leftRearToe.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 0.5,
}
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
tail.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.2, 0.2, 0.4, [0, 0, 0]);
tail.transform = {
  translate: [0, 0, -0.65],
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
tail.pickedColor = bodyColor;
tail.phong = true;
tail.phongAmbient = bodyColor,
tail.diffuse = [1,1,1],
tail.specular = [1,1,1],
tail.ambient = [1,1,1],
tail.shininess = 1,
tail.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 0.5,
}
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
tailedge.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.2, 0.2, 0.2, [0, 0, 0]);
tailedge.transform = {
  translate: [0, 0, -0.95], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
tailedge.pickedColor = whiteColor;
tailedge.phong = true;
tailedge.phongAmbient = whiteColor,
tailedge.diffuse = [1,1,1],
tailedge.specular = [1,1,1],
tailedge.ambient = [1,1,1],
tailedge.shininess = 1,
tailedge.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 0.5,
}
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
/* harmony import */ var _math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/mathUtils.js */ "./src/structs/math/mathUtils.js");
/* harmony import */ var _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Animation.js */ "./src/utils/Animation.js");
/* harmony import */ var _boxModel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../boxModel.js */ "./src/structs/boxModel.js");





function hollowThingy() {
    let vertices = [];
    let colors = [];
    let tangents = [];
    let bitangents = [];
    let normals = [];
    let texCoord = [];
    let faces = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__.generateFaces)();
    
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
      let verticesBox = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__.generateVertices)(...box.size, box.position);
      let normalsBox = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__.generateNormals)(verticesBox, faces);
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
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
hollow.pickedColor = randomColors(),
hollow.ambient = [1,1,1];
hollow.phong = true;
hollow.phongAmbient = [0,0,0],
hollow.diffuse = [1,1,1];
hollow.specular = [1,1,1];
hollow.shininess = 1;
hollow.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 1.0,
};
hollow.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
hollow.animation = {
  isAnimate: true,
  frames: hollowFrames(),
  currentFrame: 0,
  animationFunction: _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].animationScript(),
  isAuto: true,
  isReverse: false
};

function hollowFrames () {
  let transform = {
    translate: [0, 0, 0],
    rotate: [(0,_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(0), (0,_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(0), (0,_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(0)],
    scale: [1, 1, 1],
  }
  let frames = []
  for(let k = 0; k < 361; ++k){
      let _transform = JSON.parse(JSON.stringify(transform));
      _transform.rotate[0] = (0,_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(k);
      _transform.rotate[1] = (0,_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(k);
      _transform.rotate[2] = (0,_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(k);
      frames.push(_transform);
  }

  return frames;
}

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
/* harmony import */ var _math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/mathUtils.js */ "./src/structs/math/mathUtils.js");
/* harmony import */ var _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Animation.js */ "./src/utils/Animation.js");
/* harmony import */ var _boxModel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../boxModel.js */ "./src/structs/boxModel.js");






const pig = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
pig.flag = "articulated";
pig.name = "pig";
pig.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(1, 1.5, 1, [0, 0, 0]);
pig.transform = {
  translate: [0, 0, 0],
  rotate: [10, 59, 0],
  scale: [1, 1, 1],
};
pig.pickedColor = [0.921568627,0.568627451,0.898039216],
pig.ambient = [1,1,1];
pig.phong = true;
pig.phongAmbient = [0.921568627,0.568627451,0.898039216],
pig.diffuse = [1,1,1];
pig.specular = [1,1,1];
pig.shininess = 1;
pig.const = {
    kd: 1.0,
    ks: 1.0,
    ka: 0.5,
};
pig.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
pig.animation = {
    isAnimate: false,
    frames: pigFrames(),
    currentFrame: 0,
    animationFunction: _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].animationScript(),
    isAuto: false,
    isReverse: false
};


function pigFrames() {
    let transform = {
        translate: [0, 0, 0],
        rotate: [(0,_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(10), (0,_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(59), (0,_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.degToRad)(0)],
        scale: [1, 1, 1],
    }
    let frames = []
    for(let k = 0; k < 25; ++k){
        let _transform = JSON.parse(JSON.stringify(transform));
        _transform.translate[1] = k / 25;
        frames.push(_transform);
    }
    
    return frames;
}

const head = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
head.name = "head";
head.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(1, 1, 1.2, [-1, 0.6, 0]);
head.transform = {
    translate: [0, 0, 0],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
head.pickedColor = [0.921568627,0.568627451,0.898039216],
head.ambient = [1,1,1];
head.phong = true;
head.phongAmbient = [0.921568627,0.568627451,0.898039216],
head.diffuse = [1,1,1];
head.specular = [1,1,1];
head.shininess = 1;
head.const = {
    kd: 1.0,
    ks: 1.0,
    ka: 0.5,
};
head.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
head.animation = {
    isAnimate: false,
    frames: headFrames(),
    currentFrame: 0,
    animationFunction: _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].animationScript(),
    isAuto: false,
    isReverse: false
};
head.phong = true;

function headFrames() {
    let transform = {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        scale: [1, 1, 1],
    }
    let frames = []
    for(let k = 0; k < 25; ++k){
        let _transform = JSON.parse(JSON.stringify(transform));
        _transform.rotate[2] = -k / 100;
        _transform.scale[0] = 1 + k / 50;
        _transform.scale[1] = 1 + k / 50;
        _transform.scale[2] = 1 + k / 50;
        frames.push(_transform);
    }


    return frames;
}

const whiteRightEye = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
whiteRightEye.name = "whiteRightEye";
whiteRightEye.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.2, 0.2, 0.2, [-1, 0.6, 0]);
whiteRightEye.transform = {
    translate: [-0.5, 0.2, 0.4],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
whiteRightEye.pickedColor = [0.99,0.99,0.99],
whiteRightEye.ambient = [1,1,1];
whiteRightEye.phong = true;
whiteRightEye.phongAmbient = [0.99,0.99,0.99],
whiteRightEye.diffuse = [1,1,1];
whiteRightEye.specular = [1,1,1];
whiteRightEye.shininess = 1;
whiteRightEye.const = {
    kd: 1.0,
    ks: 1.0,
    ka: 0.5,
};
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
whiteRightEye.phong = true;

const whiteLeftEye = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
whiteLeftEye.name = "whiteLeftEye";
whiteLeftEye.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.2, 0.2, 0.2, [-1, 0.6, 0]);
whiteLeftEye.transform = {
    translate: [-0.5, 0.2, -0.4],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
whiteLeftEye.pickedColor = [0.99,0.99,0.99],
whiteLeftEye.ambient = [1,1,1];
whiteLeftEye.phong = true;
whiteLeftEye.phongAmbient = [0.99,0.99,0.99],
whiteLeftEye.diffuse = [1,1,1];
whiteLeftEye.specular = [1,1,1];
whiteLeftEye.shininess = 1;
whiteLeftEye.const = {
    kd: 1.0,
    ks: 1.0,
    ka: 0.5,
};
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
whiteLeftEye.phong = true;

const blackRightEye = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
blackRightEye.name = "blackRightEye";
blackRightEye.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.2, 0.2, 0.2, [-1, 0.6, 0]);
blackRightEye.transform = {
    translate: [0.05, 0, 0.075],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
blackRightEye.pickedColor = [0,0,0],
blackRightEye.ambient = [1,1,1];
blackRightEye.phong = true;
blackRightEye.phongAmbient = [0,0,0],
blackRightEye.diffuse = [1,1,1];
blackRightEye.specular = [1,1,1];
blackRightEye.shininess = 1;
blackRightEye.const = {
    kd: 1.0,
    ks: 1.0,
    ka: 0.5,
};
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
blackRightEye.phong = true;

const blackLeftEye = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
blackLeftEye.name = "blackLeftEye";
blackLeftEye.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.2, 0.2, 0.2, [-1, 0.6, 0]);
blackLeftEye.transform = {
    translate: [0.05, 0, -0.075],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
blackLeftEye.pickedColor = [0,0,0],
blackLeftEye.ambient = [1,1,1];
blackLeftEye.phong = true;
blackLeftEye.phongAmbient = [0,0,0],
blackLeftEye.diffuse = [1,1,1];
blackLeftEye.specular = [1,1,1];
blackLeftEye.shininess = 1;
blackLeftEye.const = {
    kd: 1.0,
    ks: 1.0,
    ka: 0.5,
};
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
blackLeftEye.phong = true;

const nose = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
nose.name = "nose";
nose.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.2, 0.2, 0.4, [-1.5, 0.55, 0]);
nose.transform = {
    translate: [0.05, 0, 0],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
nose.pickedColor = [0.768627451,0.376470588, 0.745098039],
nose.ambient = [1,1,1];
nose.phong = true;
nose.phongAmbient = [0.768627451,0.376470588, 0.745098039],
nose.diffuse = [1,1,1];
nose.specular = [1,1,1];
nose.shininess = 1;
nose.const = {
    kd: 1.0,
    ks: 1.0,
    ka: 0.5,
};
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
nose.phong = true;

const rightHole = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
rightHole.name = "rightHole";
rightHole.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.15, 0.2, 0.1, [-1.6, 0.55, 0]);
rightHole.transform = {
    translate: [0.05, 0, 0.1],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
rightHole.pickedColor = [0.921568627,0.568627451,0.898039216],
rightHole.ambient = [1,1,1];
rightHole.phong = true;
rightHole.phongAmbient = [0.921568627,0.568627451,0.898039216],
rightHole.diffuse = [1,1,1];
rightHole.specular = [1,1,1];
rightHole.shininess = 1;
rightHole.const = {
    kd: 1.0,
    ks: 1.0,
    ka: 0.5,
};
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
rightHole.phong = true;

const leftHole = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
leftHole.name = "leftHole";
leftHole.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.15, 0.2, 0.1, [-1.6, 0.55, 0]);
leftHole.transform = {
    translate: [0.05, 0, -0.1],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
leftHole.pickedColor = [0.921568627,0.568627451,0.898039216],
leftHole.ambient = [1,1,1];
leftHole.phong = true;
leftHole.phongAmbient = [0.921568627,0.568627451,0.898039216],
leftHole.diffuse = [1,1,1];
leftHole.specular = [1,1,1];
leftHole.shininess = 1;
leftHole.const = {
    kd: 1.0,
    ks: 1.0,
    ka: 0.5,
};
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
leftHole.phong = true;

const rightFrontLeg = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
rightFrontLeg.name = "rightFrontLeg";
rightFrontLeg.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.5, 0.2, 0.2, [0.1, 0, 0.15]);
rightFrontLeg.transform = {
    translate: [-0.6, -0.5, -0.4],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
rightFrontLeg.pickedColor = [0.768627451,0.376470588, 0.745098039],
rightFrontLeg.ambient = [1,1,1];
rightFrontLeg.phong = true;
rightFrontLeg.phongAmbient = [0.768627451,0.376470588, 0.745098039],
rightFrontLeg.diffuse = [1,1,1];
rightFrontLeg.specular = [1,1,1];
rightFrontLeg.shininess = 1;
rightFrontLeg.const = {
    kd: 1.0,
    ks: 1.0,
    ka: 0.5,
};
rightFrontLeg.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
rightFrontLeg.animation = {
    isAnimate: false,
    frames: rightFrontLegFrames(),
    currentFrame: 0,
    animationFunction: _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].animationScript(),
    isAuto: false,
    isReverse: false
};
rightFrontLeg.phong = true;

function rightFrontLegFrames() {
    let transform = {
        translate:[-0.6, -0.5, -0.4],
        rotate: [0, 0, 0],
        scale: [1, 1, 1],
    }

    let frames = []
    for(let k = 0; k < 25; ++k){
        let _transform = JSON.parse(JSON.stringify(transform));
        _transform.rotate[0] = k/25 ;
        _transform.translate[2] = -0.4 + -0.2/(25-k);
        frames.push(_transform);
    }

    return frames;
}


const leftFrontLeg = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
leftFrontLeg.name = "leftFrontLeg";
leftFrontLeg.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.5, 0.2, 0.2, [0.1, 0, -0.15]);
leftFrontLeg.transform = {
    translate: [-0.6, -0.5, 0.4],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
leftFrontLeg.pickedColor = [0.768627451,0.376470588, 0.745098039],
leftFrontLeg.ambient = [1,1,1];
leftFrontLeg.phong = true;
leftFrontLeg.phongAmbient = [0.768627451,0.376470588, 0.745098039],
leftFrontLeg.diffuse = [1,1,1];
leftFrontLeg.specular = [1,1,1];
leftFrontLeg.shininess = 1;
leftFrontLeg.const = {
    kd: 1.0,
    ks: 1.0,
    ka: 0.5,
};
leftFrontLeg.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
leftFrontLeg.animation = {
    isAnimate: false,
    frames: leftFrontFrames(),
    currentFrame: 0,
    animationFunction: _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].animationScript(),
    isAuto: false,
    isReverse: false
};
leftFrontLeg.phong = true;

function leftFrontFrames() {
    let transform = {
        translate:[-0.6, -0.5, 0.4],
        rotate: [0, 0, 0],
        scale: [1, 1, 1],
    }

    let frames = []
    for(let k = 0; k < 25; ++k){
        let _transform = JSON.parse(JSON.stringify(transform));
        _transform.rotate[0] = -k/25 ;
        _transform.translate[2] = 0.4 + 0.2/(25-k);
        frames.push(_transform);
    }

    return frames;
}

const rightRearLeg = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
rightRearLeg.name = "rightRearLeg";
rightRearLeg.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.5, 0.2, 0.2, [0.5, 0, 0.15]);
rightRearLeg.transform = {
    translate: [0, -0.5, -0.4],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
rightRearLeg.pickedColor = [0.768627451,0.376470588, 0.745098039],
rightRearLeg.ambient = [1,1,1];
rightRearLeg.phong = true;
rightRearLeg.phongAmbient = [0.768627451,0.376470588, 0.745098039],
rightRearLeg.diffuse = [1,1,1];
rightRearLeg.specular = [1,1,1];
rightRearLeg.shininess = 1;
rightRearLeg.const = {
    kd: 1.0,
    ks: 1.0,
    ka: 0.5,
};
rightRearLeg.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
rightRearLeg.animation = {
    isAnimate: false,
    frames: rightRearLegFrames(),
    currentFrame: 0,
    animationFunction: _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].animationScript(),
    isAuto: false,
    isReverse: false
};
rightRearLeg.phong = true;

function rightRearLegFrames() {
    let transform = {
        translate:[0, -0.5, -0.4],
        rotate: [0, 0, 0],
        scale: [1, 1, 1],
    }

    let frames = []
    for(let k = 0; k < 25; ++k){
        let _transform = JSON.parse(JSON.stringify(transform));
        _transform.rotate[0] = k/25 ;
        _transform.translate[2] = -0.4 + -0.2/(25-k);
        frames.push(_transform);
    }

    return frames;
}

const leftRearLeg = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
leftRearLeg.name = "leftRearLeg";
leftRearLeg.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.5, 0.2, 0.2, [0.5, 0, -0.15]);
leftRearLeg.transform = {
    translate: [0, -0.5, 0.4],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
leftRearLeg.pickedColor = [0.768627451,0.376470588, 0.745098039],
leftRearLeg.ambient = [1,1,1];
leftRearLeg.phong = true;
leftRearLeg.phongAmbient = [0.768627451,0.376470588, 0.745098039],
leftRearLeg.diffuse = [1,1,1];
leftRearLeg.specular = [1,1,1];
leftRearLeg.shininess = 1;
leftRearLeg.const = {
    kd: 1.0,
    ks: 1.0,
    ka: 0.5,
};
leftRearLeg.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
leftRearLeg.animation = {
    isAnimate: false,
    frames: leftRearFrames(),
    currentFrame: 0,
    animationFunction: _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].animationScript(),
    isAuto: false,
    isReverse: false
};
leftRearLeg.phong = true;

function leftRearFrames() {
    let transform = {
        translate:[0, -0.5, 0.4],
        rotate: [0, 0, 0],
        scale: [1, 1, 1],
    }

    let frames = []
    for(let k = 0; k < 25; ++k){
        let _transform = JSON.parse(JSON.stringify(transform));
        _transform.rotate[0] = -k/25 ;
        _transform.translate[2] = 0.4 + 0.2/(25-k);
        frames.push(_transform);
    }

    return frames;
}

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
/* harmony import */ var _boxModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../boxModel.js */ "./src/structs/boxModel.js");
/* harmony import */ var _math_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/mathUtils.js */ "./src/structs/math/mathUtils.js");
/* harmony import */ var _utils_Animation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/Animation.js */ "./src/utils/Animation.js");





function ring() {
    let vertices = [];
    let colors = [];
    let tangents = [];
    let bitangents = [];
    let normals = [];
    let texCoord = [];
    let faces = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_1__.generateFaces)();

function generateBoxes(){
    let boxes = [];
    for(let i = 0; i < 360; ++i){
      let rad = (0,_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__.degToRad)(i);
      let position = [Math.cos(rad), Math.sin(rad), 0];
      let size = [0.05, 0.05, 0.8];
      boxes.push({ size: size, position: position });
    }
    return boxes;
  }

  const boxes = generateBoxes();
  
  boxes.forEach(box => {
    let verticesBox = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_1__.generateVertices)(...box.size, box.position);
    let normalsBox = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_1__.generateNormals)(verticesBox, faces);
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
hollow.pickedColor = randomColors()
hollow.viewMatrix = {
  camera: [0, 0, 5],
  lookAt: [0, 0, 0],
  up: [0, 1, 0],
  near: 0.1,
  far: 50,
};
hollow.ambient = [1,1,1];
hollow.phong = true;
hollow.phongAmbient = [0,0,0],
hollow.diffuse = [1,1,1];
hollow.specular = [1,1,1];
hollow.shininess = 1;
hollow.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 1.0,
};
hollow.animation = {
  isAnimate: true,
  frames: hollowFrames(),
  currentFrame: 0,
  animationFunction: _utils_Animation_js__WEBPACK_IMPORTED_MODULE_3__["default"].animationScript(),
  isAuto: true,
  isReverse: false
};

function hollowFrames() {
  let transform = {
    translate: [0, 0, 0],
    rotate: [(0,_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__.degToRad)(10), 0, 0],
    scale: [1, 1, 1],
  }
  let frames = []
  for(let k = 0; k < 360; ++k){
      let _transform = JSON.parse(JSON.stringify(transform));
      _transform.rotate[0] = (0,_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__.degToRad)((10+k) % 360)
      _transform.rotate[1] = (0,_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__.degToRad)((k+1)%360)
      frames.push(_transform);
  }
  
  return frames;
}

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

    toJSON() {
      return {
          name: this.name,
          ambient: this.ambient,
          animation: this.animation,
          children: this.children.map(child => child.toJSON()),
          const: this.const,
          diffuse: this.diffuse,
          localMatrix: this.localMatrix,
          model: this.model,
          pickedColor: this.pickedColor,
          phong: this.phong,
          phongAmbient: this.phongAmbient,
          shininess: this.shininess,
          specular: this.specular,
          transform: this.transform,
          viewMatrix: this.viewMatrix,  
          worldInverseMatrix: this.worldInverseMatrix,
          worldMatrix: this.worldMatrix,
      };
    }

    fromJSON(data) {
        this.name = data.name;
        this.ambient = data.ambient;
        this.animation = data.animation;
        this.children = data.children.map(childData => {
            const childNode = new Node();
            childNode.fromJSON(childData);
            return childNode;
        });
        this.const = data.const;
        this.diffuse = data.diffuse;
        this.localMatrix = data.localMatrix;
        this.model = data.model;
        this.pickedColor = data.pickedColor;
        this.phong = data.phong;
        this.phongAmbient = data.phongAmbient;
        this.shininess = data.shininess;
        this.specular = data.specular;
        this.transform = data.transform;
        this.viewMatrix = data.viewMatrix;
        this.worldInverseMatrix = data.worldInverseMatrix;
        this.worldMatrix = data.worldMatrix;
        return this;
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
                     if(_node.animation.currentFrame == frames.length && !_node.animation.isAuto) _node.animation.currentFrame = frames.length - 1;
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

    static handleGeneralTransform(node, doc){
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
        doc.getElementById("translation-x-slider-value").innerHTML = tx.toFixed(2);    
        doc.getElementById("translation-y-slider-value").innerHTML = ty.toFixed(2);
        doc.getElementById("translation-z-slider-value").innerHTML = tz.toFixed(2);
        // rotation tx, ty, tz 
        doc.getElementById("rotation-x-slider").value = rx;
        doc.getElementById("rotation-y-slider").value = ry;
        doc.getElementById("rotation-z-slider").value = rz;
        doc.getElementById("rotation-x-slider-value").innerHTML = rx.toFixed(2);
        doc.getElementById("rotation-y-slider-value").innerHTML = ry.toFixed(2);
        doc.getElementById("rotation-z-slider-value").innerHTML = rz.toFixed(2);
        // scale sx, sy, sz
        doc.getElementById("scalation-x-slider").value = sx*10;
        doc.getElementById("scalation-y-slider").value = sy*10;
        doc.getElementById("scalation-z-slider").value = sz*10;
       
        doc.getElementById("scalation-x-slider-value").innerHTML = (sx * 1.00).toFixed(2);
        doc.getElementById("scalation-y-slider-value").innerHTML = (sy * 1.00).toFixed(2);
        doc.getElementById("scalation-z-slider-value").innerHTML = (sz * 1.00).toFixed(2);
    }

    static handleTransform(node, doc){
        if(!node.animation.isAnimate) return;
        Animation.handleGeneralTransform(node, doc)
    }

    static enableAnimation(parent_model){
        parent_model.animation.isAnimate = true;
        for(let model of parent_model.children){    
            Animation.enableAnimation(model)
        }
    }

    static disableAnimation(parent_model){
        parent_model.animation.isAnimate = false;
        for(let model of parent_model.children){    
            Animation.disableAnimation(model)
        }
    }

    static deleteCurrentFrame(node){
        if(node.animation.frames){
            
            node.animation.frames.splice(node.animation.currentFrame, 1);
            if(node.animation.currentFrame != 0){
                node.animation.currentFrame -= 1
            }
            
            if(node.animation.frames.length == 0){
                node.animation.frames = null;
                node.animation.currentFrame = 0;
                return;
            }
        
            node.transform = node.animation.frames[node.animation.currentFrame]

        }
    }

    static editCurrentFrame(node, transform){
        if(node.animation.frames){
            let currFrame = node.animation.currentFrame;
            if(currFrame < node.animation.frames.length){
                node.animation.frames[currFrame] = transform;
            }
            else if(currFrame == node.animation.frames.length){
                currFrame = currFrame - 1;
                node.animation.frames[currFrame] = transform;
            }

            // update node transform
            node.transform = transform; 
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
        const s = _structs_math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["default"].unitVector(_structs_math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["default"].cross(_up, f)) // xAxis
        const u = _structs_math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["default"].unitVector(_structs_math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["default"].cross(f, s))

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
{}
        return viewMatrix
    }

    static updateLookAt(parent_model, axis){
    
        let delta = parent_model.transform.translate[axis] - parent_model.viewMatrix.lookAt[axis]
        let lookAtAxis = parent_model.transform.translate[axis]
  
        Camera.generalUpdateLookAt(parent_model, axis, delta, lookAtAxis)
       
    }

    static generalUpdateLookAt(parent_model, axis, delta, lookAtAxis){
            if(parent_model.flag){
            parent_model.viewMatrix.lookAt[axis] = lookAtAxis
            }
            // update camera position [theta, phi, radius]
            // represent in cartesian coordinates from spherical coordinates of camera
            let r = parent_model.viewMatrix.camera[2]
            let theta = parent_model.viewMatrix.camera[1]
            let phi = parent_model.viewMatrix.camera[0]
            let x = r * Math.sin(theta) * Math.cos(phi)
            let y = r * Math.sin(theta) * Math.sin(phi)
            let z = r * Math.cos(theta)
            
            // // transform by lookAt
            if(axis == 0){
            x = x - delta
            y = y
            z = z
            }
            else if(axis == 1){
            x = x
            y = y - delta
            z = z
            }
            else if(axis == 2){
            x = x
            y = y
            z = z - delta
            }
    
            // convert back to spherical coordinates
    
            r = Math.sqrt(x*x + y*y + z*z)
            theta = Math.acos(z/r)
            phi = Math.atan2(y, Math.abs(x))
    
            // // set the new values
            parent_model.viewMatrix.camera[0] = phi
            parent_model.viewMatrix.camera[1] = theta
            parent_model.viewMatrix.camera[2] = r

            if(!parent_model.flag){
                
                // parent_model.transform.translate[axis] -= delta
                parent_model.viewMatrix.lookAt[axis] = lookAtAxis
            }

            for (let i = 0; i < parent_model.children.length; i++) {
                Camera.generalUpdateLookAt(parent_model.children[i], axis, delta, lookAtAxis)
            }
    }
}

/***/ }),

/***/ "./src/utils/CharacterController.js":
/*!******************************************!*\
  !*** ./src/utils/CharacterController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CharacterController)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
/* harmony import */ var _structs_math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../structs/math/mathUtils.js */ "./src/structs/math/mathUtils.js");
/* harmony import */ var _Animation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Animation.js */ "./src/utils/Animation.js");
/* harmony import */ var _Camera_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Camera.js */ "./src/utils/Camera.js");





class CharacterController{

    // velocity
    static vx = 0;
    static vy = 0;
    static vz = 0;

    // acceleration
    static ax = 1e-5;
    static ay = -1e-5; // for gravity
    static az = 1e-5;

    static jerk = 0.01;
    static currentGround = 0;

    static velocityThreshold = 1e-4;
    static isJumping = false;

    static isFollowPlayer = false;

    static velocityLoop(parent_node, delta_time){
        // handle the transformation of the character
        if(delta_time >= 20) delta_time = 15
        parent_node.transform.translate[0] += CharacterController.vx * delta_time;
        parent_node.transform.translate[1] += CharacterController.vy * delta_time;
        parent_node.transform.translate[2] += CharacterController.vz * delta_time;

        // handle vx
        if(CharacterController.vx > CharacterController.velocityThreshold){
        CharacterController.vx -= CharacterController.ax * delta_time;
        }
        else if(CharacterController.vx < -CharacterController.velocityThreshold){
        CharacterController.vx += CharacterController.ax * delta_time;
        }
        // handle vz
        if(CharacterController.vz > CharacterController.velocityThreshold){
        CharacterController.vz -= CharacterController.az * delta_time;
        }
        else if(CharacterController.vz < -CharacterController.velocityThreshold){
        CharacterController.vz += CharacterController.az * delta_time;
        }
        // handle near 0 velocity
        if(Math.abs(CharacterController.vx) < CharacterController.velocityThreshold ){
            CharacterController.vx = 0;
        }
        if(Math.abs(CharacterController.vy) < CharacterController.velocityThreshold){
            CharacterController.vy = 0;
        }
        if(Math.abs(CharacterController.vz) < CharacterController.velocityThreshold){
            CharacterController.vz = 0;
        }
        _Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].handleGeneralTransform(parent_node, document)
        
    }

    static gravityLoop(parent_node, delta_time){
        if(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot === undefined || !CharacterController.isJumping ) return;

        // return if <= currentGround
        if(parent_node.transform.translate[1] <= CharacterController.currentGround){
            parent_node.transform.translate[1] = CharacterController.currentGround;
            CharacterController.vy = 0;
            CharacterController.isJumping = false;
            _Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].handleGeneralTransform(parent_node, document)
            return;
        }
        // handle vy
        if(delta_time >= 20) delta_time = 15;
        CharacterController.vy += CharacterController.ay * delta_time;
        _Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].handleGeneralTransform(parent_node, document)
        
    }

    static followPlayerLoop(parent_node, delta_time = 0){
        if(!CharacterController.isFollowPlayer) return;
        _Camera_js__WEBPACK_IMPORTED_MODULE_3__["default"].updateLookAt(parent_node, 0);
        _Camera_js__WEBPACK_IMPORTED_MODULE_3__["default"].updateLookAt(parent_node, 1);
        _Camera_js__WEBPACK_IMPORTED_MODULE_3__["default"].updateLookAt(parent_node, 2);
    }
}

/***/ }),

/***/ "./src/utils/fileManager.js":
/*!**********************************!*\
  !*** ./src/utils/fileManager.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadJSON: () => (/* binding */ loadJSON),
/* harmony export */   saveJSON: () => (/* binding */ saveJSON)
/* harmony export */ });
/* harmony import */ var _structs_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../structs/node.js */ "./src/structs/node.js");


function saveJSON(objects) {

    // Convert Node instances to serializable format
    const serializableObjects = objects.map(obj => obj.toJSON());
    const jsonContent = JSON.stringify(serializableObjects, null, 2);
    const blob = new Blob([jsonContent], { type: "application/json" });

    // Element to trigger the download
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = objects[0].name + ".json";
    a.hidden = true;
    document.body.appendChild(a);

    // Trigger download
    a.click();
    document.body.removeChild(a);  // Clean up
}

function loadJSON(fileInput, callback) {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const jsonContent = event.target.result;
        const data = JSON.parse(jsonContent);
        const objects = data.map(objData => {
            const node = new _structs_node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
            return node.fromJSON(objData);
        });
        callback(objects);
    };

    reader.onerror = function(event) {
        console.error("File could not be read! Code " + event.target.error.code);
    };

    reader.readAsText(file);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDaEYsTUFBTSwwRUFBMEU7QUFDaEYsTUFBTSwwRUFBMEU7QUFDaEYsTUFBTSwwRUFBMEU7QUFDaEYsTUFBTSwwRUFBMEU7QUFDaEY7QUFDQTtBQUNBO0FBQ0EsWUFBWSxjQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDeEdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvaGFuZGxlci9ldmVudEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9ib3hNb2RlbC5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21hdGgvTWF0NC5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21hdGgvVmVjMy5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21hdGgvVmVjNC5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21hdGgvbWF0aFV0aWxzLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3N0cnVjdHMvbW9kZWwvY2hpY2tlbi5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21vZGVsL2ZveC5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21vZGVsL2hvbGxvd1RoaW5neS5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21vZGVsL3BpZy5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21vZGVsL3JpbmcuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9ub2RlLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3V0aWxzL0FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy91dGlscy9DYW1lcmEuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvdXRpbHMvQ2hhcmFjdGVyQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy91dGlscy9maWxlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy91dGlscy90ZXh0dXJlLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRhcmdldCwgXHJcbiAgICB0YXJnZXRSb290LCBcclxuICAgIHNldFByb2plY3Rpb25UeXBlLCBcclxuICAgIHNldE9ibGlxdWVQaGksIFxyXG4gICAgc2V0T2JsaXF1ZVRoZXRhLCBcclxuICAgIHNldFRhcmdldCwgXHJcbiAgICByZW5hbWVUYXJnZXQsXHJcbiAgICBsaWdodERpcmVjdGlvbixcclxuICAgIGRlbGV0ZU5vZGUsXHJcbiAgICBvYmplY3RzLFxyXG4gICAgc2V0VGFyZ2V0Um9vdCwgXHJcbiAgICBjaGFuZ2VNb2RlbE9iamVjdCwgXHJcbiAgICBjaGFuZ2VNYXBwaW5nVGV4dHVyZSxcclxuICAgIGFkZE5vZGUsXHJcbiAgICBsb2FkT2JqZWN0cyxcclxuICAgIGFkZE1vZGVsLFxyXG4gICAgbW9kZWwsXHJcbiAgICBmcHMsXHJcbiAgICBzZXRTcG90TGlnaHR9IGZyb20gXCIuLi9pbmRleC5qc1wiXHJcbmltcG9ydCB7IGRlZ1RvUmFkLCByYWRUb0RlZyB9IGZyb20gXCIuLi9zdHJ1Y3RzL21hdGgvbWF0aFV0aWxzLmpzXCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uL3V0aWxzL0FuaW1hdGlvbi5qc1wiO1xyXG5pbXBvcnQgeyBsb2FkSlNPTiwgc2F2ZUpTT04gfSBmcm9tIFwiLi4vdXRpbHMvZmlsZU1hbmFnZXIuanNcIjtcclxuaW1wb3J0IENoYXJhY3RlckNvbnRyb2xsZXIgZnJvbSBcIi4uL3V0aWxzL0NoYXJhY3RlckNvbnRyb2xsZXIuanNcIjtcclxuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi4vdXRpbHMvQ2FtZXJhLmpzXCI7XHJcblxyXG5jb25zdCB0cmFuc2xhdGlvblggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNsYXRpb24teC1zbGlkZXInKTtcclxuY29uc3QgdHJhbnNsYXRpb25ZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zbGF0aW9uLXktc2xpZGVyJyk7XHJcbmNvbnN0IHRyYW5zbGF0aW9uWiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2xhdGlvbi16LXNsaWRlcicpO1xyXG5jb25zdCB0cmFuc2xhdGFpb25YVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNsYXRpb24teC1zbGlkZXItdmFsdWUnKTtcclxuY29uc3QgdHJhbnNsYXRhaW9uWVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zbGF0aW9uLXktc2xpZGVyLXZhbHVlJyk7XHJcbmNvbnN0IHRyYW5zbGF0YWlvblpWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2xhdGlvbi16LXNsaWRlci12YWx1ZScpO1xyXG4vL3JvdGF0aW9uXHJcbmNvbnN0IHJvdGF0aW9uWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGlvbi14LXNsaWRlcicpO1xyXG5jb25zdCByb3RhdGlvblkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm90YXRpb24teS1zbGlkZXInKTtcclxuY29uc3Qgcm90YXRpb25aID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uLXotc2xpZGVyJyk7XHJcbmNvbnN0IHJvdGF0aW9uWFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uLXgtc2xpZGVyLXZhbHVlJyk7XHJcbmNvbnN0IHJvdGF0aW9uWVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uLXktc2xpZGVyLXZhbHVlJyk7XHJcbmNvbnN0IHJvdGF0aW9uWlZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uLXotc2xpZGVyLXZhbHVlJyk7XHJcbi8vc2NhbGF0aW9uXHJcbmNvbnN0IHNjYWxhdGlvblggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NhbGF0aW9uLXgtc2xpZGVyJyk7XHJcbmNvbnN0IHNjYWxhdGlvblkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NhbGF0aW9uLXktc2xpZGVyJyk7XHJcbmNvbnN0IHNjYWxhdGlvblogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NhbGF0aW9uLXotc2xpZGVyJyk7XHJcbmNvbnN0IHNjYWxhdGlvblhWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY2FsYXRpb24teC1zbGlkZXItdmFsdWUnKTtcclxuY29uc3Qgc2NhbGF0aW9uWVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjYWxhdGlvbi15LXNsaWRlci12YWx1ZScpO1xyXG5jb25zdCBzY2FsYXRpb25aVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NhbGF0aW9uLXotc2xpZGVyLXZhbHVlJyk7XHJcbi8vIGNvbXBvbmVudCBjb250YWluZXJcclxuY29uc3QgY29tcG9uZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBvbmVudC1jb250YWluZXInKTtcclxuLy9jYW1lcmFcclxuY29uc3Qgb3J0aG9ncmFwaGljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29ydGhvZ3JhcGhpYycpO1xyXG5jb25zdCBvYmxpcXVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29ibGlxdWUnKTtcclxuY29uc3QgcGVyc3BlY3RpdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGVyc3BlY3RpdmUnKTtcclxuLy8gY2FtZXJhIHJhZGl1c1xyXG5jb25zdCBjYW1lcmFSYWRpdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXJhZGl1cy1zbGlkZXInKTtcclxuLy8gY2FtZXJhIHJvbGwtcGl0Y2hcclxuY29uc3QgY2FtZXJhUm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcm9sbC1zbGlkZXInKTtcclxuY29uc3QgY2FtZXJhUGl0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXBpdGNoLXNsaWRlcicpO1xyXG4vLyBjYW1lcmEgdGhldGEtcGhpXHJcbmNvbnN0IGNhbWVyYVRoZXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS10aGV0YS1zbGlkZXInKTtcclxuY29uc3QgY2FtZXJhUGhpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1waGktc2xpZGVyJyk7XHJcbi8vIHNldCBvcnRob2dyYXBoaWMgYXMgZGVmYXVsdCBpbnB1dCByYWRpbyBidXR0b25cclxub3J0aG9ncmFwaGljLmNoZWNrZWQgPSB0cnVlO1xyXG4vLyBjYW1lcmEgZGVmYXVsdCB2aWV3XHJcbmNvbnN0IGRlZmF1bHRWaWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlZmF1bHQtdmlldycpO1xyXG4vLyBjYW1lcmEgZm9sbG93aW5nIG1vZGVsXHJcbmNvbnN0IGZvbGxvd01vZGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbGxvdy1tb2RlbCcpO1xyXG5cclxuLy8gbW9kZWwgXHJcbmNvbnN0IG1vZGVsU2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGVsLXNlbGVjdGlvbicpO1xyXG5jb25zdCBtYXBwaW5nU2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcHBpbmctc2VsZWN0aW9uJyk7XHJcblxyXG4vLyBhbmltYXRpb25cclxuXHJcbi8vIHBhdXNlLCBwbGF5LCBhdXRvLCByZXZlcnNlXHJcbmNvbnN0IHBhdXNlQ29udGludWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF1c2UtY29udGludWUtYW5pbWF0aW9uJyk7XHJcbmNvbnN0IHBsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheS1hbmltYXRpb24nKTtcclxuY29uc3QgYXV0byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvLWFuaW1hdGlvbicpO1xyXG5jb25zdCByZXZlcnNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JldmVyc2UtYW5pbWF0aW9uJyk7XHJcblxyXG4vLyBuZXh0LCBwcmV2LCBmaXJzdCwgbGFzdFxyXG5jb25zdCBuZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQtYW5pbWF0aW9uJyk7XHJcbmNvbnN0IHByZXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldi1hbmltYXRpb24nKTtcclxuY29uc3QgZmlyc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlyc3QtYW5pbWF0aW9uJyk7XHJcbmNvbnN0IGxhc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFzdC1hbmltYXRpb24nKTtcclxuXHJcbi8vIGZyYW1lIGhhbmRsZXJcclxuY29uc3QgY3VycmVudEZQUyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LWZwcycpO1xyXG5jb25zdCBjdXJyZW50TW9kZWxGcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LW1vZGVsLWZyYW1lJyk7XHJcbmNvbnN0IGN1cnJlbnROb2RlRnJhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC1ub2RlLWZyYW1lJyk7XHJcbmNvbnN0IHRvdGFsTW9kZWxGcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbC1tb2RlbC1mcmFtZScpO1xyXG5jb25zdCB0b3RhbE5vZGVGcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbC1ub2RlLWZyYW1lJyk7XHJcblxyXG4vLyBhZGQgZnJhbWUgXHJcbmNvbnN0IGFkZEZyYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1mcmFtZScpXHJcbmNvbnN0IHZlcmlmeUFkZEZyYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZlcmlmeS1hZGQtZnJhbWUnKVxyXG5jb25zdCBjYW5jZWxBZGRGcmFtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwtYWRkLWZyYW1lJylcclxuXHJcbi8vZWRpdCBmcmFtZVxyXG5jb25zdCBlZGl0RnJhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1jdXJyZW50LWZyYW1lJylcclxuY29uc3QgdmVyaWZ5RWRpdEZyYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZlcmlmeS1lZGl0LWZyYW1lJylcclxuY29uc3QgY2FuY2VsRWRpdEZyYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbC1lZGl0LWZyYW1lJylcclxuXHJcbi8vIGRlbGV0ZSBmcmFtZVxyXG5jb25zdCBkZWxldGVGcmFtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGUtY3VycmVudC1mcmFtZScpXHJcbmNvbnN0IHZlcmlmeURlbGV0ZUZyYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZlcmlmeS1kZWxldGUtZnJhbWUnKVxyXG5jb25zdCBjYW5jZWxEZWxldGVGcmFtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwtZGVsZXRlLWZyYW1lJylcclxuXHJcbi8vIGFuaW1hdGlvblxyXG5jb25zdCBzYXZlQW5pbWF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtYW5pbWF0aW9uJylcclxuY29uc3Qgb2tTYXZlQW5pbWF0aW9uTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2stc2F2ZS1hbmltYXRpb24nKVxyXG5cclxuLy8gYW1iaWVudCBsaWdodFxyXG5jb25zdCByZWRBbWJpZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZC1zbGlkZXInKTtcclxuY29uc3QgZ3JlZW5BbWJpZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyZWVuLXNsaWRlcicpO1xyXG5jb25zdCBibHVlQW1iaWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdibHVlLXNsaWRlcicpO1xyXG5cclxuLy8gbGlnaHQgcG9zaXRpb25cclxuY29uc3QgbGlnaHRYID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpZ2h0LXgtc2xpZGVyJyk7XHJcbmNvbnN0IGxpZ2h0WSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaWdodC15LXNsaWRlcicpO1xyXG5jb25zdCBsaWdodFogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlnaHQtei1zbGlkZXInKTtcclxuXHJcbi8vIG1hdGVyaWFsIHNlbGVjdGlvblxyXG5jb25zdCBtYXRlcmlhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXRlcmlhbC1zZWxlY3Rpb24nKTtcclxuXHJcbi8vIHBob25nXHJcbmNvbnN0IHNoaW5pbmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGluaW5lc3Mtc2xpZGVyJyk7XHJcbmNvbnN0IHNwZWN1bGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwZWN1bGFyLXNsaWRlcicpO1xyXG5jb25zdCBkaWZmdXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpZmZ1c2Utc2xpZGVyJyk7XHJcbmNvbnN0IGFtYmllbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW1iaWVudC1zbGlkZXInKTtcclxuXHJcbi8vIGNvbG9yc1xyXG5jb25zdCBiYXNpY0NvbG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhc2ljLWNvbG9yJyk7XHJcbmNvbnN0IGRpZmZ1c2VDb2xvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWZmdXNlLWNvbG9yJyk7XHJcbmNvbnN0IHNwZWN1bGFyQ29sb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BlY3VsYXItY29sb3InKTtcclxuY29uc3QgYW1iaWVudENvbG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FtYmllbnQtY29sb3InKTtcclxuXHJcbi8vIG5vZGUgbWFuYWdlclxyXG5leHBvcnQgY29uc3Qgbm9kZU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9kZS1uYW1lJyk7XHJcbmNvbnN0IHJlbmFtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW5hbWUtYnRuJyk7XHJcbmNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGUtYnRuJyk7XHJcbmNvbnN0IGFkZENoaWxkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1jaGlsZC1idG4nKVxyXG5jb25zdCBpbXBvcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0LWJ0bicpO1xyXG5jb25zdCBleHBvcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwb3J0LWJ0bicpO1xyXG5cclxuLy8gc2F2ZSBhbmQgbG9hZFxyXG5jb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtYnRuJyk7IFxyXG5jb25zdCBsb2FkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWQtYnRuJyk7XHJcblxyXG4vLyBzcG90IGxpZ2h0XHJcbmNvbnN0IHNwb3RMaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcG90LXNlbGVjdGlvbicpO1xyXG5cclxuXHJcbi8vIGluaXRpYWxcclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRPcHRpb25Nb2RlbChtb2RlbCl7XHJcbiAgICBtb2RlbFNlbGVjdGlvbi5pbm5lckhUTUwgPSAnJztcclxuICAgIG1vZGVsLmZvckVhY2goKG9iamVjdCwgaW5kZXgpID0+IHtcclxuICAgICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gaW5kZXg7XHJcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gb2JqZWN0WzBdLm5hbWU7XHJcbiAgICAgICAgbW9kZWxTZWxlY3Rpb24uYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbi8vIGV2ZW50IGxpc3RlbmVyXHJcbnRyYW5zbGF0aW9uWC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQudHJhbnNmb3JtLnRyYW5zbGF0ZVswXSA9ICgyICogdHJhbnNsYXRpb25YLnZhbHVlKSAvIDEwMDtcclxuICAgIHRyYW5zbGF0YWlvblhWYWx1ZS50ZXh0Q29udGVudCA9IHRhcmdldC50cmFuc2Zvcm0udHJhbnNsYXRlWzBdO1xyXG59KTtcclxudHJhbnNsYXRpb25ZLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIHRhcmdldC50cmFuc2Zvcm0udHJhbnNsYXRlWzFdID0gKDIgKiB0cmFuc2xhdGlvblkudmFsdWUpIC8gMTAwO1xyXG4gICAgdHJhbnNsYXRhaW9uWVZhbHVlLnRleHRDb250ZW50ID0gdGFyZ2V0LnRyYW5zZm9ybS50cmFuc2xhdGVbMV07XHJcbn0pO1xyXG50cmFuc2xhdGlvblouYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgdGFyZ2V0LnRyYW5zZm9ybS50cmFuc2xhdGVbMl0gPSAoMiAqIHRyYW5zbGF0aW9uWi52YWx1ZSkgLyAxMDA7XHJcbiAgICB0cmFuc2xhdGFpb25aVmFsdWUudGV4dENvbnRlbnQgPSB0YXJnZXQudHJhbnNmb3JtLnRyYW5zbGF0ZVsyXTtcclxufSk7XHJcbnJvdGF0aW9uWC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQudHJhbnNmb3JtLnJvdGF0ZVswXSA9IGRlZ1RvUmFkKHJvdGF0aW9uWC52YWx1ZSk7XHJcbiAgICByb3RhdGlvblhWYWx1ZS50ZXh0Q29udGVudCA9IHJvdGF0aW9uWC52YWx1ZTtcclxufSlcclxucm90YXRpb25ZLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIHRhcmdldC50cmFuc2Zvcm0ucm90YXRlWzFdID0gZGVnVG9SYWQocm90YXRpb25ZLnZhbHVlKTtcclxuICAgIHJvdGF0aW9uWVZhbHVlLnRleHRDb250ZW50ID0gcm90YXRpb25ZLnZhbHVlO1xyXG59KVxyXG5yb3RhdGlvblouYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgdGFyZ2V0LnRyYW5zZm9ybS5yb3RhdGVbMl0gPSBkZWdUb1JhZChyb3RhdGlvbloudmFsdWUpO1xyXG4gICAgcm90YXRpb25aVmFsdWUudGV4dENvbnRlbnQgPSByb3RhdGlvbloudmFsdWU7XHJcbn0pXHJcbnNjYWxhdGlvblguYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVswXSA9ICBzY2FsYXRpb25YLnZhbHVlIC8gMjA7XHJcbiAgICBzY2FsYXRpb25YVmFsdWUudGV4dENvbnRlbnQgPSB0YXJnZXQudHJhbnNmb3JtLnNjYWxlWzBdO1xyXG59KVxyXG5zY2FsYXRpb25ZLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIHRhcmdldC50cmFuc2Zvcm0uc2NhbGVbMV0gPSAgc2NhbGF0aW9uWS52YWx1ZSAvIDIwO1xyXG4gICAgc2NhbGF0aW9uWVZhbHVlLnRleHRDb250ZW50ID0gdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVsxXTtcclxufSlcclxuc2NhbGF0aW9uWi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQudHJhbnNmb3JtLnNjYWxlWzJdID0gIHNjYWxhdGlvbloudmFsdWUgLyAyMDtcclxuICAgIHNjYWxhdGlvblpWYWx1ZS50ZXh0Q29udGVudCA9IHRhcmdldC50cmFuc2Zvcm0uc2NhbGVbMl07XHJcbn0pXHJcblxyXG4vLyBtb2RlbCBzZWxlY3Rpb25cclxubW9kZWxTZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKXsgICBcclxuICAgIGNoYW5nZU1vZGVsT2JqZWN0KG1vZGVsU2VsZWN0aW9uLnZhbHVlKTtcclxuXHJcbiAgICAvLyBoYW5kbGUgYXV0by9zdG9wIGF1dG9cclxuICAgIGlmKHRhcmdldC5hbmltYXRpb24uaXNBdXRvKXtcclxuICAgICAgICBhdXRvLnRleHRDb250ZW50ID0gXCJTdG9wIEF1dG9cIjtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgYXV0by50ZXh0Q29udGVudCA9IFwiQXV0b1wiO1xyXG4gICAgfVxyXG59KVxyXG5cclxuLy8gY2FtZXJhXHJcbm9ydGhvZ3JhcGhpYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBzZXRQcm9qZWN0aW9uVHlwZShcIm9ydGhvZ3JhcGhpY1wiKTtcclxufSlcclxuXHJcbm9ibGlxdWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgc2V0UHJvamVjdGlvblR5cGUoXCJvYmxpcXVlXCIpO1xyXG59KVxyXG5cclxucGVyc3BlY3RpdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgc2V0UHJvamVjdGlvblR5cGUoXCJwZXJzcGVjdGl2ZVwiKTtcclxufSlcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhckNvbXBvbmVudCAoKSB7XHJcbiAgICBjb21wb25lbnRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q29tcG9uZW50KHRyZWVMZXZlbCA9IDAsIG9iamVjdHMpe1xyXG4gICAgb2JqZWN0cy5mb3JFYWNoKChvYmplY3QpID0+IHtcclxuICAgICAgICBsZXQgbmV3Q29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxyXG4gICAgICAgIG5ld0NvbXBvbmVudC5zdHlsZSA9ICdwYWRkaW5nLWxlZnQ6ICcgKyB0cmVlTGV2ZWwqMS41ICsgJ2VtOyc7XHJcbiAgICAgICAgbmV3Q29tcG9uZW50LmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtYXgtdy1maXQgY29tcG9uZW50XCI+JHtvYmplY3QubmFtZX08L2J1dHRvbj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIGxldCBjcmVhdGVkQnV0dG9uID0gbmV3Q29tcG9uZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wb25lbnQnKTtcclxuICAgICAgICBjcmVhdGVkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XHJcbiAgICAgICAgICAgIHNldFRhcmdldChvYmplY3QpO1xyXG4gICAgICAgICAgICBoYW5kbGVUcmFuc2Zvcm0ob2JqZWN0KTtcclxuICAgICAgICAgICAgaGFuZGxlVG90YWxOb2RlRnJhbWUob2JqZWN0KTtcclxuICAgICAgICAgICAgc2V0Tm9kZU1hbmFnZXIob2JqZWN0KTtcclxuICAgICAgICAgICAgbGV0IGNvbXBvbmVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29tcG9uZW50XCIpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXBvbmVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudHNbaV0uY2xhc3NOYW1lID0gY29tcG9uZW50c1tpXS5jbGFzc05hbWUucmVwbGFjZShcIiBib3JkZXItMiBib3JkZXItYmxhY2sgcHgtNVwiLCBcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBldnQuY3VycmVudFRhcmdldC5jbGFzc05hbWUgKz0gXCIgYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHB4LTVcIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb21wb25lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q29tcG9uZW50KTtcclxuICAgICAgICBcclxuICAgICAgICBpZihvYmplY3QuY2hpbGRyZW4ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIGRpc3BsYXlDb21wb25lbnQodHJlZUxldmVsICsgMSwgb2JqZWN0LmNoaWxkcmVuKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlVHJhbnNmb3JtKG5vZGUpe1xyXG4gICAgLy8gY2hhbmdlIHRyYW5zbGF0aW9uLCByb3RhdGlvbiwgc2NhbGF0aW9uXHJcbiAgICBsZXQgW3R4LCB0eSwgdHpdID0gbm9kZS50cmFuc2Zvcm0udHJhbnNsYXRlXHJcbiAgICAvLyB0aW1lcyA1MFxyXG5cclxuICAgIGxldCBbcngsIHJ5LCByel0gPSBub2RlLnRyYW5zZm9ybS5yb3RhdGVcclxuICAgIC8vIGNoYW5nZSB3aXRoIHJhZFRvRGVnXHJcbiAgICBpZih0cnVlKXtcclxuICAgIHJ4ID0gcmFkVG9EZWcocngpO1xyXG4gICAgcnkgPSByYWRUb0RlZyhyeSk7XHJcbiAgICByeiA9IHJhZFRvRGVnKHJ6KTtcclxuICAgIH1cclxuICAgIGxldCBbc3gsIHN5LCBzel0gPSBub2RlLnRyYW5zZm9ybS5zY2FsZVxyXG4gIFxyXG4gICAgdHJhbnNsYXRpb25YLnZhbHVlID0gdHgqNTA7XHJcbiAgICB0cmFuc2xhdGlvblkudmFsdWUgPSB0eSo1MDtcclxuICAgIHRyYW5zbGF0aW9uWi52YWx1ZSA9IHR6KjUwO1xyXG4gICAgdHJhbnNsYXRhaW9uWFZhbHVlLnRleHRDb250ZW50ID0gdHg7XHJcbiAgICB0cmFuc2xhdGFpb25ZVmFsdWUudGV4dENvbnRlbnQgPSB0eTtcclxuICAgIHRyYW5zbGF0YWlvblpWYWx1ZS50ZXh0Q29udGVudCA9IHR6O1xyXG5cclxuICAgIHJvdGF0aW9uWC52YWx1ZSA9IHJ4O1xyXG4gICAgcm90YXRpb25ZLnZhbHVlID0gcnk7XHJcbiAgICByb3RhdGlvbloudmFsdWUgPSByejtcclxuICAgIHJvdGF0aW9uWFZhbHVlLnRleHRDb250ZW50ID0gcng7XHJcbiAgICByb3RhdGlvbllWYWx1ZS50ZXh0Q29udGVudCA9IHJ5O1xyXG4gICAgcm90YXRpb25aVmFsdWUudGV4dENvbnRlbnQgPSByejtcclxuXHJcbiAgICBzY2FsYXRpb25YVmFsdWUudGV4dENvbnRlbnQgPSBzeDtcclxuICAgIHNjYWxhdGlvbllWYWx1ZS50ZXh0Q29udGVudCA9IHN5O1xyXG4gICAgc2NhbGF0aW9uWlZhbHVlLnRleHRDb250ZW50ID0gc3o7XHJcbiAgICBzY2FsYXRpb25YLnZhbHVlID0gc3gqMjA7XHJcbiAgICBzY2FsYXRpb25ZLnZhbHVlID0gc3gqMjA7XHJcbiAgICBzY2FsYXRpb25aLnZhbHVlID0gc3oqMjA7XHJcblxyXG4gICAgLy8gY2hhbmdlIHBob25nIHNsaWRlclxyXG4gICAgcmVkQW1iaWVudC52YWx1ZSA9IG5vZGUuYW1iaWVudFswXTtcclxuICAgIGdyZWVuQW1iaWVudC52YWx1ZSA9IG5vZGUuYW1iaWVudFsxXTtcclxuICAgIGJsdWVBbWJpZW50LnZhbHVlID0gbm9kZS5hbWJpZW50WzJdO1xyXG4gICAgc2hpbmluZXNzLnZhbHVlID0gbm9kZS5zaGluaW5lc3M7XHJcbiAgICBcclxuICAgIGJhc2ljQ29sb3IudmFsdWUgPSByZ2JUb0hleChub2RlLnBpY2tlZENvbG9yKTtcclxuICAgIGRpZmZ1c2VDb2xvci52YWx1ZSA9IHJnYlRvSGV4KG5vZGUucGlja2VkQ29sb3IpO1xyXG4gICAgc3BlY3VsYXJDb2xvci52YWx1ZSA9IHJnYlRvSGV4KG5vZGUuc3BlY3VsYXIpO1xyXG4gICAgYW1iaWVudENvbG9yLnZhbHVlID0gcmdiVG9IZXgobm9kZS5waG9uZ0FtYmllbnQpO1xyXG4gICAgXHJcbiAgICBhbWJpZW50LnZhbHVlID0gbm9kZS5jb25zdC5rYTtcclxuICAgIGRpZmZ1c2UudmFsdWUgPSBub2RlLmNvbnN0LmtkO1xyXG4gICAgc3BlY3VsYXIudmFsdWUgPSBub2RlLmNvbnN0LmtzO1xyXG5cclxuICAgIG1hdGVyaWFsLnZhbHVlID0gbm9kZS5waG9uZyA/IDEgOiAwO1xyXG5cclxuICAgIG5vZGVOYW1lLnZhbHVlID0gbm9kZS5uYW1lO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2FtZXJhVmlldyhub2RlKSB7XHJcbiAgICBsZXQgZXBzaWxvbiA9IDAuMDAxO1xyXG4gICAgLy9yYWRpdXMsIHJvbGwsIHBpdGNoXHJcbiAgICBsZXQgcmFkaXVzID0gcGFyc2VGbG9hdChjYW1lcmFSYWRpdXMudmFsdWUpLzEwO1xyXG4gICAgbGV0IHJvbGwgPSBkZWdUb1JhZChwYXJzZUZsb2F0KGNhbWVyYVJvbGwudmFsdWUpKTtcclxuICAgIGxldCBwaXRjaCA9IGRlZ1RvUmFkKHBhcnNlRmxvYXQoY2FtZXJhUGl0Y2gudmFsdWUpKTtcclxuICAgIG5vZGUudmlld01hdHJpeC5jYW1lcmEgPSBbXHJcbiAgICAgICAgcm9sbCxcclxuICAgICAgICBwaXRjaCxcclxuICAgICAgICByYWRpdXMgPT0gMCA/IGVwc2lsb24gOiByYWRpdXMsICBcclxuICAgIF07XHJcbiAgICBmb3IobGV0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pe1xyXG4gICAgICAgIGhhbmRsZUNhbWVyYVZpZXcoY2hpbGQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQ2FtZXJhUG9zaXRpb24ocGFyZW50X25vZGUpe1xyXG4gICAgbGV0IHJvbGwgPSBwYXJlbnRfbm9kZS52aWV3TWF0cml4LmNhbWVyYVswXTtcclxuICAgIGxldCBwaXRjaCA9IHBhcmVudF9ub2RlLnZpZXdNYXRyaXguY2FtZXJhWzFdO1xyXG4gICAgbGV0IHJhZGl1cyA9IHBhcmVudF9ub2RlLnZpZXdNYXRyaXguY2FtZXJhWzJdO1xyXG5cclxuICAgIGNhbWVyYVJhZGl1cy52YWx1ZSA9IHJhZGl1cyoxMDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcmFkaXVzLXNsaWRlci12YWx1ZScpLnRleHRDb250ZW50ID0gcmFkaXVzLnRvRml4ZWQoMik7XHJcblxyXG4gICAgY2FtZXJhUm9sbC52YWx1ZSA9IHJhZFRvRGVnKHJvbGwpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1yb2xsLXNsaWRlci12YWx1ZScpLnRleHRDb250ZW50ID0gcmFkVG9EZWcocm9sbCkudG9GaXhlZCgyKTtcclxuXHJcbiAgICBjYW1lcmFQaXRjaC52YWx1ZSA9IHJhZFRvRGVnKHBpdGNoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcGl0Y2gtc2xpZGVyLXZhbHVlJykudGV4dENvbnRlbnQgPSByYWRUb0RlZyhwaXRjaCkudG9GaXhlZCgyKTtcclxuXHJcbn1cclxuY2FtZXJhUmFkaXVzLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGxldCB2YWwgPSBwYXJzZUZsb2F0KGNhbWVyYVJhZGl1cy52YWx1ZSk7XHJcbiAgICB2YWwgLz0gMTA7XHJcbiAgICBcclxuICAgIGhhbmRsZUNhbWVyYVZpZXcodGFyZ2V0Um9vdCk7XHJcbiAgICAvLyB1cGRhdGUgY2FtZXJhIHJhZGl1cyB2YWx1ZVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1yYWRpdXMtc2xpZGVyLXZhbHVlJykudGV4dENvbnRlbnQgPSB2YWw7XHJcbn0pXHJcbmNhbWVyYVJvbGwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgXHJcbiAgICBoYW5kbGVDYW1lcmFWaWV3KHRhcmdldFJvb3QpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXJvbGwtc2xpZGVyLXZhbHVlJykudGV4dENvbnRlbnQgPSBjYW1lcmFSb2xsLnZhbHVlO1xyXG59KVxyXG5jYW1lcmFQaXRjaC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgaGFuZGxlQ2FtZXJhVmlldyh0YXJnZXRSb290KVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1waXRjaC1zbGlkZXItdmFsdWUnKS50ZXh0Q29udGVudCA9IGNhbWVyYVBpdGNoLnZhbHVlO1xyXG59KVxyXG5cclxuLy90aGV0YSwgcGhpXHJcbmNhbWVyYVRoZXRhLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGxldCB0aGV0YSA9IGRlZ1RvUmFkKHBhcnNlRmxvYXQoY2FtZXJhVGhldGEudmFsdWUpKVxyXG4gICAgc2V0T2JsaXF1ZVRoZXRhKHRoZXRhKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtdGhldGEtc2xpZGVyLXZhbHVlJykudGV4dENvbnRlbnQgPSBjYW1lcmFUaGV0YS52YWx1ZTtcclxufSlcclxuXHJcbmNhbWVyYVBoaS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgcGhpID0gZGVnVG9SYWQocGFyc2VGbG9hdChjYW1lcmFQaGkudmFsdWUpKVxyXG4gICAgc2V0T2JsaXF1ZVBoaShwaGkpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1waGktc2xpZGVyLXZhbHVlJykudGV4dENvbnRlbnQgPSBjYW1lcmFQaGkudmFsdWU7XHJcbn0pXHJcblxyXG4vLyBkZWZhdXRsIHZpZXdcclxuZGVmYXVsdFZpZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgY2FtZXJhUmFkaXVzLnZhbHVlID0gNTA7XHJcbiAgICBjYW1lcmFSb2xsLnZhbHVlID0gMDtcclxuICAgIGNhbWVyYVBpdGNoLnZhbHVlID0gMDtcclxuICAgIGNhbWVyYVRoZXRhLnZhbHVlID0gOTA7XHJcbiAgICBjYW1lcmFQaGkudmFsdWUgPSA5MDtcclxuICAgIGhhbmRsZUNhbWVyYVZpZXcodGFyZ2V0Um9vdCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXJhZGl1cy1zbGlkZXItdmFsdWUnKS50ZXh0Q29udGVudCA9IDU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXJvbGwtc2xpZGVyLXZhbHVlJykudGV4dENvbnRlbnQgPSAwO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1waXRjaC1zbGlkZXItdmFsdWUnKS50ZXh0Q29udGVudCA9IDA7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXRoZXRhLXNsaWRlci12YWx1ZScpLnRleHRDb250ZW50ID0gOTA7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXBoaS1zbGlkZXItdmFsdWUnKS50ZXh0Q29udGVudCA9IDkwO1xyXG59KVxyXG5cclxuLy8gZm9sbG93IG1vZGVsXHJcbmZvbGxvd01vZGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIENoYXJhY3RlckNvbnRyb2xsZXIuaXNGb2xsb3dQbGF5ZXIgPSAhQ2hhcmFjdGVyQ29udHJvbGxlci5pc0ZvbGxvd1BsYXllcjtcclxuICAgIGlmKCFDaGFyYWN0ZXJDb250cm9sbGVyLmlzRm9sbG93UGxheWVyKXtcclxuICAgICAgICBmb2xsb3dNb2RlbC50ZXh0Q29udGVudCA9IFwiT25cIjtcclxuICAgICAgICBmb2xsb3dNb2RlbC5jbGFzc05hbWUgPSBgdGV4dC13aGl0ZSBiZy1ibHVlLTcwMCBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6cmluZy1ibHVlLTMwMCBcXCBcclxuICAgICAgICBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtbGcgcHgtNSBweS0xIG10LTIgbWUtMiBtYi0yIGRhcms6YmctYmx1ZS02MDAgIFxcXHJcbiAgICAgICAgZGFyazpob3ZlcjpiZy1ibHVlLTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZGFyazpmb2N1czpyaW5nLWJsdWUtODAwYFxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICBmb2xsb3dNb2RlbC50ZXh0Q29udGVudCA9IFwiT2ZmXCI7XHJcbiAgICAgICAgZm9sbG93TW9kZWwuY2xhc3NOYW1lID0gYHRleHQtd2hpdGUgYmctcmVkLTcwMCBob3ZlcjpiZy1yZWQtODAwIGZvY3VzOnJpbmctNCBmb2N1czpyaW5nLXJlZC0zMDAgXFxcclxuICAgICAgICBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtbGcgcHgtNSBweS0xIG10LTIgbWUtMiBtYi0yIGRhcms6YmctcmVkLTYwMCBcXFxyXG4gICAgICAgIGRhcms6aG92ZXI6YmctcmVkLTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZGFyazpmb2N1czpyaW5nLXJlZC04MDBgXHJcbiAgICB9XHJcbn0pXHJcblxyXG52YXIgc3RhdGUgPSB7XHJcbiAgICBvYmplY3RzOiBbXVxyXG59O1xyXG5cclxuLy8gdGV4dHVyZSBzZWxlY3Rpb25cclxubWFwcGluZ1NlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhtYXBwaW5nU2VsZWN0aW9uLnZhbHVlKVxyXG4gICAgY2hhbmdlTWFwcGluZ1RleHR1cmUoc3RhdGUub2JqZWN0cywgbWFwcGluZ1NlbGVjdGlvbi52YWx1ZSk7XHJcbn0pO1xyXG5cclxuLy8gYW5pbWF0aW9uXHJcbnBhdXNlQ29udGludWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgaWYoQW5pbWF0aW9uLmN1cnJlbnRNb2RlbEZyYW1lKHRhcmdldFJvb3QpID09IDApIHJldHVybjtcclxuICAgIGlmKHRhcmdldFJvb3QuYW5pbWF0aW9uLmlzQW5pbWF0ZSl7XHJcbiAgICAgICAgLy8gY2hhbmdlIHRvIGNvbnRpbnVlXHJcbiAgICAgICAgcGF1c2VDb250aW51ZS50ZXh0Q29udGVudCA9IFwiQ29udGludWVcIjtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgcGF1c2VDb250aW51ZS50ZXh0Q29udGVudCA9IFwiUGF1c2VcIjtcclxuICAgIH1cclxuICAgIEFuaW1hdGlvbi5wYXVzZUNvbnRpbnVlQW5pbWF0aW9uKHRhcmdldFJvb3QpO1xyXG4gICAgXHJcbn0pXHJcblxyXG5wbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIHBhdXNlQ29udGludWUudGV4dENvbnRlbnQgPSBcIlBhdXNlXCI7XHJcbiAgICBBbmltYXRpb24ucGxheUFuaW1hdGlvbih0YXJnZXRSb290KTtcclxufSlcclxuXHJcblxyXG5hdXRvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIC8vIGNoYW5nZSB0byBjb250aW51ZVxyXG4gICAgYXV0by50ZXh0Q29udGVudCA9ICF0YXJnZXRSb290LmFuaW1hdGlvbi5pc0F1dG8gPyBcIlN0b3AgQXV0b1wiIDogXCJBdXRvXCI7XHJcbiAgICBBbmltYXRpb24uc2V0QXV0byh0YXJnZXRSb290KTtcclxufSlcclxuXHJcbnJldmVyc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgcmV2ZXJzZS50ZXh0Q29udGVudCA9ICF0YXJnZXRSb290LmFuaW1hdGlvbi5pc1JldmVyc2UgPyBcIlN0b3AgUmV2ZXJzZVwiIDogXCJSZXZlcnNlXCI7XHJcbiAgICBBbmltYXRpb24ucmV2ZXJzZUFuaW1hdGlvbih0YXJnZXRSb290KTtcclxufSlcclxuXHJcbi8vIG5leHQsIHByZXYsIGZpcnN0LCBsYXN0XHJcbm5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgQW5pbWF0aW9uLmRpc2FibGVBbmltYXRpb24odGFyZ2V0Um9vdClcclxuICAgIEFuaW1hdGlvbi5uZXh0RnJhbWUodGFyZ2V0Um9vdCk7XHJcbiAgICBBbmltYXRpb24uaGFuZGxlR2VuZXJhbFRyYW5zZm9ybSh0YXJnZXRSb290LCBkb2N1bWVudCk7XHJcbiAgICBcclxufSlcclxuXHJcbnByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgQW5pbWF0aW9uLmRpc2FibGVBbmltYXRpb24odGFyZ2V0Um9vdClcclxuICAgIEFuaW1hdGlvbi5wcmV2RnJhbWUodGFyZ2V0Um9vdCk7XHJcbiAgICBBbmltYXRpb24uaGFuZGxlR2VuZXJhbFRyYW5zZm9ybSh0YXJnZXRSb290LCBkb2N1bWVudCk7XHJcbn0pXHJcblxyXG5maXJzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBBbmltYXRpb24uZmlyc3RGcmFtZSh0YXJnZXRSb290KTtcclxuICAgIEFuaW1hdGlvbi5oYW5kbGVHZW5lcmFsVHJhbnNmb3JtKHRhcmdldFJvb3QsIGRvY3VtZW50KTtcclxufSlcclxuXHJcbmxhc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgQW5pbWF0aW9uLmxhc3RGcmFtZSh0YXJnZXRSb290KTtcclxuICAgIEFuaW1hdGlvbi5oYW5kbGVHZW5lcmFsVHJhbnNmb3JtKHRhcmdldFJvb3QsIGRvY3VtZW50KTtcclxufSlcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUFtYmllbnRDb2xvcihub2RlKXtcclxuICAgIG5vZGUuYW1iaWVudFswXSA9IHJlZEFtYmllbnQudmFsdWU7XHJcbiAgICBub2RlLmFtYmllbnRbMV0gPSBncmVlbkFtYmllbnQudmFsdWU7XHJcbiAgICBub2RlLmFtYmllbnRbMl0gPSBibHVlQW1iaWVudC52YWx1ZTtcclxufVxyXG5cclxucmVkQW1iaWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBoYW5kbGVBbWJpZW50Q29sb3IodGFyZ2V0KTtcclxufSlcclxuXHJcbmdyZWVuQW1iaWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBoYW5kbGVBbWJpZW50Q29sb3IodGFyZ2V0KTtcclxufSlcclxuXHJcbmJsdWVBbWJpZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGhhbmRsZUFtYmllbnRDb2xvcih0YXJnZXQpO1xyXG59KVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlUGhvbmcobm9kZSl7XHJcbiAgICBub2RlLnNoaW5pbmVzcyA9IHNoaW5pbmVzcy52YWx1ZTtcclxuICAgIG5vZGUucGhvbmdBbWJpZW50ID0gaGV4VG9SZ2IoYW1iaWVudENvbG9yLnZhbHVlKTtcclxuICAgIG5vZGUuc3BlY3VsYXIgPSBoZXhUb1JnYihzcGVjdWxhckNvbG9yLnZhbHVlKTtcclxuICAgIG5vZGUuZGlmZnVzZSA9IGhleFRvUmdiKGRpZmZ1c2VDb2xvci52YWx1ZSk7XHJcbiAgICBub2RlLmNvbnN0LmtzID0gcGFyc2VGbG9hdChzcGVjdWxhci52YWx1ZSk7XHJcbiAgICBub2RlLmNvbnN0LmtkID0gcGFyc2VGbG9hdChkaWZmdXNlLnZhbHVlKTtcclxuICAgIG5vZGUuY29uc3Qua2EgPSBwYXJzZUZsb2F0KGFtYmllbnQudmFsdWUpO1xyXG4gICAgbm9kZS5waWNrZWRDb2xvciA9IGhleFRvUmdiKGJhc2ljQ29sb3IudmFsdWUpO1xyXG59XHJcblxyXG5zaGluaW5lc3MuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgaGFuZGxlUGhvbmcodGFyZ2V0KTtcclxufSk7XHJcblxyXG5hbWJpZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGhhbmRsZVBob25nKHRhcmdldCk7XHJcbn0pO1xyXG5cclxuc3BlY3VsYXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgaGFuZGxlUGhvbmcodGFyZ2V0KTtcclxufSk7XHJcblxyXG5kaWZmdXNlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGhhbmRsZVBob25nKHRhcmdldCk7XHJcbn0pO1xyXG5cclxuYW1iaWVudENvbG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGhhbmRsZVBob25nKHRhcmdldCk7XHJcbn0pO1xyXG5cclxuc3BlY3VsYXJDb2xvci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBoYW5kbGVQaG9uZyh0YXJnZXQpO1xyXG59KTtcclxuXHJcbmRpZmZ1c2VDb2xvci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQucGlja2VkQ29sb3IgPSBoZXhUb1JnYihiYXNpY0NvbG9yLnZhbHVlKTtcclxuICAgIGJhc2ljQ29sb3IudmFsdWUgPSBkaWZmdXNlQ29sb3IudmFsdWU7XHJcbn0pO1xyXG5cclxuYmFzaWNDb2xvci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQucGlja2VkQ29sb3IgPSBoZXhUb1JnYihiYXNpY0NvbG9yLnZhbHVlKTtcclxuICAgIGRpZmZ1c2VDb2xvci52YWx1ZSA9IGJhc2ljQ29sb3IudmFsdWU7XHJcbn0pO1xyXG5cclxubGlnaHRYLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGxpZ2h0RGlyZWN0aW9uWzBdID0gcGFyc2VGbG9hdChsaWdodFgudmFsdWUpO1xyXG59KVxyXG5cclxubGlnaHRZLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGxpZ2h0RGlyZWN0aW9uWzFdID0gcGFyc2VGbG9hdChsaWdodFkudmFsdWUpO1xyXG59KVxyXG5cclxubGlnaHRaLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGxpZ2h0RGlyZWN0aW9uWzJdID0gcGFyc2VGbG9hdChsaWdodFoudmFsdWUpO1xyXG59KVxyXG5cclxuLyoqIEhBTkRMRSBGUkFNRSAqL1xyXG5cclxuLy8gdG90YWwgZnJhbWVcclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVRvdGFsTW9kZWxGcmFtZShwYXJlbnRfbm9kZSl7XHJcbiAgICAvLyBnZXQgdmFsdWUgb2YgdG90YWwgbW9kZWwgZnJhbWUgdGV4dFxyXG4gICAgbGV0IF90b3RhbEZyYW1lVGV4dCA9IHRvdGFsTW9kZWxGcmFtZS50ZXh0Q29udGVudDtcclxuICAgIC8vIGdldCB0b3RhbCBmcmFtZVxyXG4gICAgbGV0IF90b3RhbEZyYW1lID0gQW5pbWF0aW9uLnRvdGFsTW9kZWxGcmFtZXMocGFyZW50X25vZGUpO1xyXG4gICAgLy8gc2V0IHRvdGFsIGZyYW1lXHJcbiAgICBfdG90YWxGcmFtZVRleHQgPSBcIlRvdGFsIE1vZGVsIEZyYW1lczogXCIrIF90b3RhbEZyYW1lO1xyXG4gICAgdG90YWxNb2RlbEZyYW1lLnRleHRDb250ZW50ID0gX3RvdGFsRnJhbWVUZXh0O1xyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVUb3RhbE5vZGVGcmFtZShub2RlKXtcclxuICAgIGxldCBfdG90YWxGcmFtZVRleHQgPSB0b3RhbE5vZGVGcmFtZS50ZXh0Q29udGVudDtcclxuICAgIGxldCBfdG90YWxGcmFtZSA9IEFuaW1hdGlvbi50b3RhbE5vZGVGcmFtZXMobm9kZSk7XHJcbiAgICBfdG90YWxGcmFtZVRleHQgPSBcIlRvdGFsIE5vZGUgRnJhbWVzOiBcIiArIF90b3RhbEZyYW1lXHJcbiAgICB0b3RhbE5vZGVGcmFtZS50ZXh0Q29udGVudCA9IF90b3RhbEZyYW1lVGV4dDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUZwcygpe1xyXG4gICAgY3VycmVudEZQUy50ZXh0Q29udGVudCA9IFwiQ3VycmVudCBGUFM6IFwiICsgZnBzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQ3VycmVudE1vZGVsRnJhbWUocGFyZW50X21vZGVsKXtcclxuICAgIGxldCBfY3VycmVudEZyYW1lID0gQW5pbWF0aW9uLmN1cnJlbnRNb2RlbEZyYW1lKHBhcmVudF9tb2RlbClcclxuICAgIGN1cnJlbnRNb2RlbEZyYW1lLnRleHRDb250ZW50ID0gXCJDdXJyZW50IE1vZGVsIEZyYW1lOiBcIiArIF9jdXJyZW50RnJhbWVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUN1cnJlbnROb2RlRnJhbWUobm9kZSl7XHJcbiAgICBsZXQgX2N1cnJGcmFtZSA9IEFuaW1hdGlvbi5jdXJyZW50Tm9kZUZyYW1lKG5vZGUpXHJcbiAgICBjdXJyZW50Tm9kZUZyYW1lLnRleHRDb250ZW50ID0gXCJDdXJyZW50IE5vZGUgRnJhbWU6IFwiICsgX2N1cnJGcmFtZVxyXG59XHJcblxyXG4vLyBhZGQgRnJhbWUgbWVjaGFuaXNtXHJcbmNhbmNlbEFkZEZyYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGFkZEZyYW1lTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWZyYW1lLW1vZGFsJylcclxuICAgIGFkZEZyYW1lTW9kYWwuY2xhc3NOYW1lID0gYWRkRnJhbWVNb2RhbC5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxyXG59KVxyXG5cclxuYWRkRnJhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgYWRkRnJhbWVNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtZnJhbWUtbW9kYWwnKVxyXG4gICAgYWRkRnJhbWVNb2RhbC5jbGFzc05hbWUgPSBhZGRGcmFtZU1vZGFsLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGhpZGRlblwiLCBcIlwiKVxyXG59KVxyXG5cclxudmVyaWZ5QWRkRnJhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgQW5pbWF0aW9uLmRpc2FibGVBbmltYXRpb24odGFyZ2V0Um9vdCk7XHJcbiAgICBsZXQgdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRyYW5zbGF0aW9uLXgnKS52YWx1ZVxyXG4gICAgbGV0IHR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10cmFuc2xhdGlvbi15JykudmFsdWVcclxuICAgIGxldCB0eiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdHJhbnNsYXRpb24teicpLnZhbHVlXHJcbiAgICBcclxuICAgIC8vIHJhZHNcclxuICAgIGxldCByeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcm90YXRpb24teCcpLnZhbHVlXHJcbiAgICBsZXQgcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXJvdGF0aW9uLXknKS52YWx1ZVxyXG4gICAgbGV0IHJ6ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1yb3RhdGlvbi16JykudmFsdWVcclxuXHJcbiAgICBsZXQgc3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXNjYWxhdGlvbi14JykudmFsdWVcclxuICAgIGxldCBzeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtc2NhbGF0aW9uLXknKS52YWx1ZVxyXG4gICAgbGV0IHN6ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1zY2FsYXRpb24teicpLnZhbHVlXHJcblxyXG4gICAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgICAgICB0cmFuc2xhdGUgOiBbdHgsIHR5LCB0el0sXHJcbiAgICAgICAgcm90YXRlIDogW2RlZ1RvUmFkKHJ4KSwgZGVnVG9SYWQocnkpLCBkZWdUb1JhZChyeildLFxyXG4gICAgICAgIHNjYWxlIDogW3N4LCBzeSwgc3pdXHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZih0YXJnZXQuYW5pbWF0aW9uLmZyYW1lcyAhPT0gbnVsbCl7XHJcbiAgICAgICAgdGFyZ2V0LmFuaW1hdGlvbi5mcmFtZXMucHVzaCh0cmFuc2Zvcm0pXHJcbiAgICAgICAgaGFuZGxlVG90YWxNb2RlbEZyYW1lKHRhcmdldFJvb3QpO1xyXG4gICAgICAgIGhhbmRsZVRvdGFsTm9kZUZyYW1lKHRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBhZGRGcmFtZU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1mcmFtZS1tb2RhbCcpXHJcbiAgICBhZGRGcmFtZU1vZGFsLmNsYXNzTmFtZSA9IGFkZEZyYW1lTW9kYWwuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcclxuXHJcbn0pXHJcblxyXG4vL2VkaXQgZnJhbWVcclxuXHJcbmVkaXRGcmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBlZGl0RnJhbWVNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWZyYW1lLW1vZGFsJylcclxuICAgIGVkaXRGcmFtZU1vZGFsLmNsYXNzTmFtZSA9IGVkaXRGcmFtZU1vZGFsLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGhpZGRlblwiLCBcIlwiKVxyXG4gICAgLy8gc2V0IHZhbHVlXHJcbiAgICBsZXQgdHJhbnNmb3JtID0gdGFyZ2V0LnRyYW5zZm9ybVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdHJhbnNsYXRpb24teCcpLnZhbHVlID0gdHJhbnNmb3JtLnRyYW5zbGF0ZVswXVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdHJhbnNsYXRpb24teScpLnZhbHVlID0gdHJhbnNmb3JtLnRyYW5zbGF0ZVsxXVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdHJhbnNsYXRpb24teicpLnZhbHVlID0gdHJhbnNmb3JtLnRyYW5zbGF0ZVsyXVxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXJvdGF0aW9uLXgnKS52YWx1ZSA9IHJhZFRvRGVnKHRyYW5zZm9ybS5yb3RhdGVbMF0pXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1yb3RhdGlvbi15JykudmFsdWUgPSByYWRUb0RlZyh0cmFuc2Zvcm0ucm90YXRlWzFdKVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcm90YXRpb24teicpLnZhbHVlID0gcmFkVG9EZWcodHJhbnNmb3JtLnJvdGF0ZVsyXSlcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1zY2FsYXRpb24teCcpLnZhbHVlID0gdHJhbnNmb3JtLnNjYWxlWzBdXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1zY2FsYXRpb24teScpLnZhbHVlID0gdHJhbnNmb3JtLnNjYWxlWzFdXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1zY2FsYXRpb24teicpLnZhbHVlID0gdHJhbnNmb3JtLnNjYWxlWzJdXHJcbn0pXHJcblxyXG5jYW5jZWxFZGl0RnJhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgZWRpdEZyYW1lTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1mcmFtZS1tb2RhbCcpXHJcbiAgICBlZGl0RnJhbWVNb2RhbC5jbGFzc05hbWUgPSBlZGl0RnJhbWVNb2RhbC5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxyXG59KVxyXG5cclxudmVyaWZ5RWRpdEZyYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIC8vIHR4LCB0eSwgdHosIHJ4LCByeSwgcnosIHN4LCBzeSwgc3pcclxuICAgIEFuaW1hdGlvbi5kaXNhYmxlQW5pbWF0aW9uKHRhcmdldFJvb3QpO1xyXG4gICAgbGV0IHR4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdHJhbnNsYXRpb24teCcpLnZhbHVlXHJcbiAgICBsZXQgdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10cmFuc2xhdGlvbi15JykudmFsdWVcclxuICAgIGxldCB0eiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRyYW5zbGF0aW9uLXonKS52YWx1ZVxyXG5cclxuICAgIGxldCByeCA9IGRlZ1RvUmFkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXJvdGF0aW9uLXgnKS52YWx1ZSlcclxuICAgIGxldCByeSA9IGRlZ1RvUmFkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXJvdGF0aW9uLXknKS52YWx1ZSlcclxuICAgIGxldCByeiA9IGRlZ1RvUmFkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXJvdGF0aW9uLXonKS52YWx1ZSlcclxuXHJcbiAgICBsZXQgc3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1zY2FsYXRpb24teCcpLnZhbHVlXHJcbiAgICBsZXQgc3kgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1zY2FsYXRpb24teScpLnZhbHVlXHJcbiAgICBsZXQgc3ogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1zY2FsYXRpb24teicpLnZhbHVlXHJcblxyXG4gICAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgICAgICB0cmFuc2xhdGUgOiBbdHgsIHR5LCB0el0sXHJcbiAgICAgICAgcm90YXRlIDogW3J4LCByeSwgcnpdLFxyXG4gICAgICAgIHNjYWxlIDogW3N4LCBzeSwgc3pdXHJcbiAgICB9XHJcblxyXG4gICAgQW5pbWF0aW9uLmVkaXRDdXJyZW50RnJhbWUodGFyZ2V0LCB0cmFuc2Zvcm0pO1xyXG5cclxuICAgIC8vIGRpc2FibGUgbW9kYWxcclxuICAgIGNvbnN0IGVkaXRGcmFtZU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZnJhbWUtbW9kYWwnKVxyXG4gICAgZWRpdEZyYW1lTW9kYWwuY2xhc3NOYW1lID0gZWRpdEZyYW1lTW9kYWwuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcclxuXHJcbn0pXHJcblxyXG4vLyBkZWxldGUgZnJhbWVcclxuZGVsZXRlRnJhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgZGVsZXRlRnJhbWVNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGUtZnJhbWUtbW9kYWwnKVxyXG4gICAgZGVsZXRlRnJhbWVNb2RhbC5jbGFzc05hbWUgPSBkZWxldGVGcmFtZU1vZGFsLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGhpZGRlblwiLCBcIlwiKVxyXG59KVxyXG5cclxuY2FuY2VsRGVsZXRlRnJhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgZGVsZXRlRnJhbWVNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGUtZnJhbWUtbW9kYWwnKVxyXG4gICAgZGVsZXRlRnJhbWVNb2RhbC5jbGFzc05hbWUgPSBkZWxldGVGcmFtZU1vZGFsLmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXHJcbn0pXHJcblxyXG52ZXJpZnlEZWxldGVGcmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBBbmltYXRpb24uZGlzYWJsZUFuaW1hdGlvbih0YXJnZXRSb290KTtcclxuXHJcbiAgICAvLyBkZWxldGUgZnJhbWVcclxuICAgIEFuaW1hdGlvbi5kZWxldGVDdXJyZW50RnJhbWUodGFyZ2V0KTtcclxuXHJcbiAgICAvLyB1cGRhdGUgbm9kZSBmcmFtZVxyXG4gICAgaGFuZGxlVG90YWxNb2RlbEZyYW1lKHRhcmdldFJvb3QpO1xyXG4gICAgaGFuZGxlVG90YWxOb2RlRnJhbWUodGFyZ2V0KTtcclxuICAgIEFuaW1hdGlvbi5oYW5kbGVHZW5lcmFsVHJhbnNmb3JtKHRhcmdldFJvb3QsZG9jdW1lbnQpXHJcbiAgICAvLyBpZih0YXJnZXQuYW5pbWF0aW9uLmZyYW1lcyAhPT0gbnVsbCl7XHJcbiAgICAvLyAgICAgdGFyZ2V0LmFuaW1hdGlvbi5mcmFtZXMucG9wKCk7XHJcbiAgICAvLyAgICAgaGFuZGxlVG90YWxNb2RlbEZyYW1lKHRhcmdldFJvb3QpO1xyXG4gICAgLy8gICAgIGhhbmRsZVRvdGFsTm9kZUZyYW1lKHRhcmdldCk7XHJcbiAgICAvLyB9XHJcbiAgICBjb25zdCBkZWxldGVGcmFtZU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZS1mcmFtZS1tb2RhbCcpXHJcbiAgICBkZWxldGVGcmFtZU1vZGFsLmNsYXNzTmFtZSA9IGRlbGV0ZUZyYW1lTW9kYWwuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcclxufSlcclxuXHJcbnNhdmVBbmltYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgbGV0IGFuaW1hdGlvbk1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtYW5pbWF0aW9uLW1vZGFsJylcclxuICAgIGFuaW1hdGlvbk1vZGFsLmNsYXNzTmFtZSA9IGFuaW1hdGlvbk1vZGFsLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGhpZGRlblwiLCBcIlwiKVxyXG59KVxyXG5cclxub2tTYXZlQW5pbWF0aW9uTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgbGV0IGFuaW1hdGlvbk1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtYW5pbWF0aW9uLW1vZGFsJylcclxuICAgIGFuaW1hdGlvbk1vZGFsLmNsYXNzTmFtZSA9IGFuaW1hdGlvbk1vZGFsLmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXHJcbn0pXHJcblxyXG5cclxuZnVuY3Rpb24gc2V0Tm9kZU1hbmFnZXIobm9kZSl7XHJcbiAgICBub2RlTmFtZS52YWx1ZSA9IG5vZGUubmFtZTtcclxufTtcclxuXHJcbnJlbmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICByZW5hbWVUYXJnZXQobm9kZU5hbWUudmFsdWUpO1xyXG4gICAgY2xlYXJDb21wb25lbnQoKTtcclxuICAgIGRpc3BsYXlDb21wb25lbnQoMCwgb2JqZWN0cyk7XHJcbn0pXHJcblxyXG5kZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgZGVsZXRlTm9kZSh0YXJnZXQubmFtZSk7XHJcbiAgICBjbGVhckNvbXBvbmVudCgpO1xyXG4gICAgZGlzcGxheUNvbXBvbmVudCgwLCBvYmplY3RzKTtcclxufSlcclxuXHJcbmFkZENoaWxkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBhZGROb2RlKG5vZGVOYW1lLnZhbHVlKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldClcclxufSlcclxuXHJcbnNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgc2F2ZUpTT04ob2JqZWN0cyk7XHJcbn0pO1xyXG5cclxubG9hZC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICBsb2FkSlNPTihldmVudC50YXJnZXQsIGZ1bmN0aW9uKG9iamVjdHMpe1xyXG4gICAgICAgIGxvYWRPYmplY3RzKG9iamVjdHMpO1xyXG4gICAgICAgIGNvbnN0IGltcG9ydGVkT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgaW1wb3J0ZWRPcHRpb24udmFsdWUgPSBtb2RlbC5sZW5ndGg7XHJcbiAgICAgICAgaW1wb3J0ZWRPcHRpb24udGV4dCA9IG9iamVjdHNbMF0ubmFtZTtcclxuICAgICAgICBtb2RlbFNlbGVjdGlvbi5hcHBlbmRDaGlsZChpbXBvcnRlZE9wdGlvbik7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIFNldCB0aGUgdmFsdWUgb2YgbW9kZWxTZWxlY3Rpb24gdG8gXCJpbXBvcnRlZFwiXHJcbiAgICAgICAgbW9kZWxTZWxlY3Rpb24udmFsdWUgPSBtb2RlbC5sZW5ndGg7XHJcbiAgICAgICAgYWRkTW9kZWwob2JqZWN0cyk7XHJcbiAgICB9KTtcclxufSlcclxuXHJcbmV4cG9ydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zb2xlLmxvZyhbdGFyZ2V0XSk7XHJcbiAgICBzYXZlSlNPTihbdGFyZ2V0XSk7XHJcbn0pO1xyXG5cclxuaW1wb3J0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgIGxvYWRKU09OKGV2ZW50LnRhcmdldCwgZnVuY3Rpb24ob2JqZWN0KXtcclxuICAgICAgICBvYmplY3RbMF0uc2V0UGFyZW50KHRhcmdldCk7XHJcbiAgICAgICAgY2xlYXJDb21wb25lbnQoKTtcclxuICAgICAgICBkaXNwbGF5Q29tcG9uZW50KDAsIG9iamVjdHMpO1xyXG4gICAgfSk7XHJcbn0pXHJcblxyXG5cclxuLyoqXHJcbiAqIENoYXJhY3RlciBNb3ZlbWVudFxyXG4gKi9cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgc3dpdGNoKGV2ZW50LmtleSkge1xyXG4gICAgICAgIGNhc2UgJ0Fycm93VXAnOlxyXG4gICAgICAgICAgICBDaGFyYWN0ZXJDb250cm9sbGVyLnZ6ID0gMWUtMi80O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxyXG4gICAgICAgICAgICBDaGFyYWN0ZXJDb250cm9sbGVyLnZ6ID0gLTFlLTIvNDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcclxuICAgICAgICAgICAgQ2hhcmFjdGVyQ29udHJvbGxlci52eCA9IC0xZS0yLzQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxyXG4gICAgICAgICAgICBDaGFyYWN0ZXJDb250cm9sbGVyLnZ4ID0gMWUtMi80O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyBoYW5kbGUgc3BhY2VcclxuICAgICAgICBjYXNlICcgJzpcclxuICAgICAgICAgICAgaWYoQ2hhcmFjdGVyQ29udHJvbGxlci5pc0p1bXBpbmcpIGJyZWFrO1xyXG4gICAgICAgICAgICBDaGFyYWN0ZXJDb250cm9sbGVyLmlzSnVtcGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIENoYXJhY3RlckNvbnRyb2xsZXIuY3VycmVudEdyb3VuZCA9IHRhcmdldFJvb3QudHJhbnNmb3JtLnRyYW5zbGF0ZVsxXTtcclxuICAgICAgICAgICAgdGFyZ2V0Um9vdC50cmFuc2Zvcm0udHJhbnNsYXRlWzFdICs9IDFlLTIvNDtcclxuICAgICAgICAgICAgQ2hhcmFjdGVyQ29udHJvbGxlci52eSA9IDFlLTIvMjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgLy8gSGFuZGxlIG90aGVyIGtleXMgaWYgbmVlZGVkXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbm1hdGVyaWFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQucGhvbmcgPSBtYXRlcmlhbC52YWx1ZSA9PSAxID8gdHJ1ZSA6IGZhbHNlO1xyXG59KTtcclxuXHJcbnNwb3RMaWdodC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG4gICAgdmFyIHNwb3QgPSBzcG90TGlnaHQudmFsdWUgPT0gMSA/IHRydWUgOiBmYWxzZTtcclxuICAgIHNldFNwb3RMaWdodChzcG90KTtcclxufSkiLCJpbXBvcnQgcGlnTW9kZWwgZnJvbSBcIi4vc3RydWN0cy9tb2RlbC9waWcuanNcIjtcclxuaW1wb3J0IGNoaWNrZW5Nb2RlbCBmcm9tIFwiLi9zdHJ1Y3RzL21vZGVsL2NoaWNrZW4uanNcIjtcclxuaW1wb3J0IGZveE1vZGVsIGZyb20gXCIuL3N0cnVjdHMvbW9kZWwvZm94LmpzXCI7XHJcbmltcG9ydCBNYXQ0IGZyb20gXCIuL3N0cnVjdHMvbWF0aC9NYXQ0LmpzXCI7XHJcbmltcG9ydCBWZWMzIGZyb20gXCIuL3N0cnVjdHMvbWF0aC9WZWMzLmpzXCI7XHJcbmltcG9ydCBWZWM0IGZyb20gXCIuL3N0cnVjdHMvbWF0aC9WZWM0LmpzXCI7XHJcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4vdXRpbHMvQ2FtZXJhLmpzXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlDb21wb25lbnQsIFxyXG4gIGNsZWFyQ29tcG9uZW50LCBcclxuICBpbml0T3B0aW9uTW9kZWwsIFxyXG4gIGhhbmRsZVRyYW5zZm9ybSxcclxuICBoYW5kbGVGcHMsIFxyXG4gIGhhbmRsZVRvdGFsTW9kZWxGcmFtZSxcclxuICBoYW5kbGVUb3RhbE5vZGVGcmFtZSxcclxuICBoYW5kbGVDdXJyZW50TW9kZWxGcmFtZSxcclxuICBoYW5kbGVDdXJyZW50Tm9kZUZyYW1lLFxyXG4gIGhhbmRsZUNhbWVyYVBvc2l0aW9uXHJcbiAgfSBmcm9tIFwiLi9oYW5kbGVyL2V2ZW50SGFuZGxlci5qc1wiO1xyXG5pbXBvcnQgaG9sbG93TW9kZWwgZnJvbSBcIi4vc3RydWN0cy9tb2RlbC9ob2xsb3dUaGluZ3kuanNcIjtcclxuaW1wb3J0IGhvbGxvd1JpbmdNb2RlbCBmcm9tIFwiLi9zdHJ1Y3RzL21vZGVsL3JpbmcuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlUGFwZXJUZXh0dXJlLCBjcmVhdGVFbnZpcm9ubWVudFRleHR1cmUsIGNyZWF0ZUJ1bXBUZXh0dXJlIH0gZnJvbSBcIi4vdXRpbHMvdGV4dHVyZS5qc1wiXHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4vdXRpbHMvQW5pbWF0aW9uLmpzXCI7XHJcbmltcG9ydCBOb2RlIGZyb20gXCIuL3N0cnVjdHMvbm9kZS5qc1wiO1xyXG5pbXBvcnQgeyBkZWdUb1JhZCB9IGZyb20gXCIuL3N0cnVjdHMvbWF0aC9tYXRoVXRpbHMuanNcIjtcclxuaW1wb3J0IENoYXJhY3RlckNvbnRyb2xsZXIgZnJvbSBcIi4vdXRpbHMvQ2hhcmFjdGVyQ29udHJvbGxlci5qc1wiO1xyXG5pbXBvcnQgYm94TW9kZWwgZnJvbSBcIi4vc3RydWN0cy9ib3hNb2RlbC5qc1wiO1xyXG5cclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnbC1jYW52YXNcIik7XHJcbmNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbFwiKTtcclxuXHJcblxyXG5jb25zdCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZlcnRleC1zaGFkZXItM2RcIik/LnRleHRDb250ZW50O1xyXG5jb25zdCBmcmFnbWVudFNoYWRlclNvdXJjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJhZ21lbnQtc2hhZGVyLTNkXCIpPy50ZXh0Q29udGVudDtcclxuXHJcbi8vIHN0YXRlXHJcbmV4cG9ydCB2YXIgbW9kZWwgPSBbcGlnTW9kZWwsIGNoaWNrZW5Nb2RlbCwgZm94TW9kZWwsIGhvbGxvd01vZGVsLCBob2xsb3dSaW5nTW9kZWxdO1xyXG5leHBvcnQgdmFyIG9iamVjdHM7XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRPYmplY3RzKHZhbHVlKSB7XHJcbiAgb2JqZWN0cyA9IHZhbHVlO1xyXG59XHJcbmV4cG9ydCB2YXIgdGFyZ2V0O1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0VGFyZ2V0KHZhbHVlKSB7XHJcbiAgdGFyZ2V0ID0gdmFsdWU7XHJcbn1cclxuZXhwb3J0IHZhciB0YXJnZXRSb290O1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0VGFyZ2V0Um9vdCh2YWx1ZSkge1xyXG4gIHRhcmdldFJvb3QgPSB2YWx1ZTtcclxufVxyXG52YXIgbGlnaHRpbmc7XHJcbmV4cG9ydCB2YXIgbGlnaHREaXJlY3Rpb247XHJcbnZhciB0ZXh0dXJlO1xyXG52YXIgcHJvamVjdGlvbl90eXBlO1xyXG52YXIgc3BvdExpZ2h0ID0gZmFsc2U7XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTcG90TGlnaHQodmFsdWUpIHtcclxuICBzcG90TGlnaHQgPSB2YWx1ZTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRQcm9qZWN0aW9uVHlwZShuZXdQcm9qZWN0aW9uKSB7XHJcbiAgcHJvamVjdGlvbl90eXBlID0gbmV3UHJvamVjdGlvbjtcclxufVxyXG52YXIgZmFjdG9yO1xyXG52YXIgb2JsaXF1ZV90aGV0YTtcclxuZXhwb3J0IGZ1bmN0aW9uIHNldE9ibGlxdWVUaGV0YShuZXdUaGV0YSkge1xyXG4gIG9ibGlxdWVfdGhldGEgPSBuZXdUaGV0YTtcclxufVxyXG52YXIgb2JsaXF1ZV9waGk7XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRPYmxpcXVlUGhpKG5ld1BoaSkge1xyXG4gIG9ibGlxdWVfcGhpID0gbmV3UGhpO1xyXG59XHJcbnZhciBub3JtYWxpemVMaWdodDtcclxudmFyIHdvcmxkVmlld1Byb2plY3Rpb25NYXRyaXg7XHJcbnZhciBjdWJlQ291bnQgPSAwO1xyXG5cclxuLy8gYW5pbWF0aW9uXHJcbnZhciB0X2FuaW1hdGlvbiA9IDA7XHJcbnZhciB0X3RleHRfZnBzID0gMDtcclxudmFyIGZyZXFfbG9vcCA9IDYwO1xyXG52YXIgZnJlcV90ZXh0X2ZwcyA9IDI7XHJcbnZhciBsb29wX3BlcmlvZCA9IDEwMDAvZnJlcV9sb29wO1xyXG52YXIgdGV4dF9mcHNfcGVyaW9kID0gMTAwMC9mcmVxX3RleHRfZnBzO1xyXG5leHBvcnQgdmFyIGZwcyA9IDA7XHJcblxyXG5pbml0U3RhdGUoKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRTdGF0ZSgpIHtcclxuICAgIG9iamVjdHMgPSBtb2RlbFswXTtcclxuICAgIGxpZ2h0aW5nID0gZmFsc2U7XHJcbiAgICBsaWdodERpcmVjdGlvbiA9IFswLjAsIDAuMCwgMS4wXVxyXG4gICAgdGV4dHVyZSA9IFwibm9uZVwiO1xyXG4gICAgcHJvamVjdGlvbl90eXBlID0gXCJvcnRob2dyYXBoaWNcIjtcclxuICAgIGZhY3RvciA9IDAuMDtcclxuICAgIG9ibGlxdWVfdGhldGEgPSA5MC4wO1xyXG4gICAgb2JsaXF1ZV9waGkgPSA5MC4wO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG1vZGVsLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBzZXREZWZhdWx0Um90YXRpb24obW9kZWxbaV0pO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheUNvbXBvbmVudCgwLCBvYmplY3RzKTtcclxuICAgIGluaXRPcHRpb25Nb2RlbChtb2RlbCk7XHJcbiAgICBoYW5kbGVUcmFuc2Zvcm0ob2JqZWN0c1swXSlcclxuICAgIGhhbmRsZVRvdGFsTW9kZWxGcmFtZShvYmplY3RzWzBdKVxyXG4gICAgaGFuZGxlVG90YWxOb2RlRnJhbWUob2JqZWN0c1swXSlcclxuXHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBpZighZ2wpe1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIldlYkdMIG5vdCBzdXBwb3J0ZWRcIik7XHJcbiAgICB9XHJcbiAgICB0YXJnZXQgPSBvYmplY3RzWzBdO1xyXG4gICAgdGFyZ2V0Um9vdCA9IHRhcmdldDtcclxuICAgIHJlbmRlcigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREZWZhdWx0U3RhdGUob2JqZWN0cykge1xyXG4gICAgb2JqZWN0cy5mb3JFYWNoKG9iamVjdCA9PiB7XHJcbiAgICAgICAgaWYgKCFvYmplY3QubW9kZWwuY29sb3JzKSB7XHJcbiAgICAgICAgICAgIGlmICghb2JqZWN0LnBpY2tlZENvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QubW9kZWwuY29sb3JzID0gZ2VuZXJhdGVDb2xvcnMob2JqZWN0Lm1vZGVsLnZlcnRpY2VzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5tb2RlbC5jb2xvcnMgPSBnZW5lcmF0ZUNvbG9ycyhcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QubW9kZWwudmVydGljZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnBpY2tlZENvbG9yXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBpZiAoIW9iamVjdC5wcm9ncmFtICkge1xyXG4gICAgICAgICAgICBvYmplY3QucHJvZ3JhbSA9IGNyZWF0ZVNoYWRlclByb2dyYW0oXHJcbiAgICAgICAgICAgICAgICBnbCxcclxuICAgICAgICAgICAgICAgIHZlcnRleFNoYWRlclNvdXJjZSxcclxuICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBvYmplY3QubG9jYWxNYXRyaXggPSBzZXRUcmFuc2Zvcm0ob2JqZWN0KTtcclxuICAgICAgICBpZiAob2JqZWN0LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc2V0RGVmYXVsdFN0YXRlKG9iamVjdC5jaGlsZHJlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VHJhbnNmb3JtKG9iamVjdCkge1xyXG4gICAgLyogU2V0dXAgdHJhbnNmb3JtIG1hdHJpeCAqL1xyXG5cclxuICAgIHZhciB0cmFuc2Zvcm1NYXRyaXggPSBNYXQ0LnRyYW5zbGF0ZShcclxuICAgICAgb2JqZWN0LnRyYW5zZm9ybS50cmFuc2xhdGVbMF0sXHJcbiAgICAgIG9iamVjdC50cmFuc2Zvcm0udHJhbnNsYXRlWzFdLFxyXG4gICAgICBvYmplY3QudHJhbnNmb3JtLnRyYW5zbGF0ZVsyXVxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgX2NlbnRlciA9IG9iamVjdC5tb2RlbC5jZW50ZXJcclxuICAgIGlmKF9jZW50ZXIpe1xyXG4gICAgICB0cmFuc2Zvcm1NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICAgIHRyYW5zZm9ybU1hdHJpeCxcclxuICAgICAgICBNYXQ0LnRyYW5zbGF0ZShfY2VudGVyWzBdLCBfY2VudGVyWzFdLCBfY2VudGVyWzJdKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICB0cmFuc2Zvcm1NYXRyaXgsXHJcbiAgICAgIE1hdDQucm90YXRlWChvYmplY3QudHJhbnNmb3JtLnJvdGF0ZVswXSlcclxuICAgICk7XHJcbiAgXHJcbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICB0cmFuc2Zvcm1NYXRyaXgsXHJcbiAgICAgIE1hdDQucm90YXRlWShvYmplY3QudHJhbnNmb3JtLnJvdGF0ZVsxXSlcclxuICAgICk7XHJcbiAgXHJcbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICB0cmFuc2Zvcm1NYXRyaXgsXHJcbiAgICAgIE1hdDQucm90YXRlWihvYmplY3QudHJhbnNmb3JtLnJvdGF0ZVsyXSlcclxuICAgICk7XHJcblxyXG4gICAgaWYoX2NlbnRlcil7XHJcbiAgICAgIHRyYW5zZm9ybU1hdHJpeCA9IE1hdDQubXVsdGlwbHkoXHJcbiAgICAgICAgdHJhbnNmb3JtTWF0cml4LFxyXG4gICAgICAgIE1hdDQudHJhbnNsYXRlKC1fY2VudGVyWzBdLCAtX2NlbnRlclsxXSwgLV9jZW50ZXJbMl0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICB0cmFuc2Zvcm1NYXRyaXgsXHJcbiAgICAgIE1hdDQuc2NhbGUoXHJcbiAgICAgICAgb2JqZWN0LnRyYW5zZm9ybS5zY2FsZVswXSxcclxuICAgICAgICBvYmplY3QudHJhbnNmb3JtLnNjYWxlWzFdLFxyXG4gICAgICAgIG9iamVjdC50cmFuc2Zvcm0uc2NhbGVbMl1cclxuICAgICAgKVxyXG4gICAgKTtcclxuICBcclxuICAgIHJldHVybiB0cmFuc2Zvcm1NYXRyaXg7XHJcbiAgfVxyXG5cclxuZnVuY3Rpb24gc2V0RGVmYXVsdFJvdGF0aW9uKG9iamVjdHMpIHtcclxuICAgIGZvcihsZXQgb2JqZWN0IG9mIG9iamVjdHMpe1xyXG4gICAgICAgIG9iamVjdC50cmFuc2Zvcm0ucm90YXRlID0gb2JqZWN0LnRyYW5zZm9ybS5yb3RhdGUubWFwKCh2YWwpID0+IGRlZ1RvUmFkKHZhbCkpO1xyXG4gICAgICAgIGlmKG9iamVjdC5jaGlsZHJlbi5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgc2V0RGVmYXVsdFJvdGF0aW9uKG9iamVjdC5jaGlsZHJlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyTG9vcChvYmplY3RzKSB7XHJcbiAgICBvYmplY3RzLmZvckVhY2gob2JqZWN0ID0+IHtcclxuICAgICAgICBnbC51c2VQcm9ncmFtKG9iamVjdC5wcm9ncmFtKTtcclxuXHJcbiAgICAgICAgb2JqZWN0LndvcmxkTWF0cml4ID0gc2V0UHJvamVjdGlvbk1hdHJpeChvYmplY3Qud29ybGRNYXRyaXgsIG9iamVjdClcclxuXHJcblxyXG4gICAgICAgIHZhciBhX3Bvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheShvYmplY3QubW9kZWwudmVydGljZXMuZmxhdCgxKSk7XHJcbiAgICAgICAgdmFyIGFfbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheShvYmplY3QubW9kZWwubm9ybWFscy5mbGF0KDEpKTtcclxuICAgICAgICB2YXIgYV9jb2xvciA9IG5ldyBGbG9hdDMyQXJyYXkob2JqZWN0LnBpY2tlZENvbG9yLmZsYXQoMSkpO1xyXG4gICAgICAgIHZhciBhX3RleHR1cmUgPSBuZXcgRmxvYXQzMkFycmF5KG9iamVjdC5tb2RlbC50ZXhDb29yZCk7XHJcbiAgICAgICAgdmFyIGFfdGFuZ2VudCA9IG5ldyBGbG9hdDMyQXJyYXkob2JqZWN0Lm1vZGVsLnRhbmdlbnRzLmZsYXQoMSkpO1xyXG4gICAgICAgIHZhciBhX2JpdGFuZ2VudCA9IG5ldyBGbG9hdDMyQXJyYXkob2JqZWN0Lm1vZGVsLmJpdGFuZ2VudHMuZmxhdCgxKSk7XHJcblxyXG4gICAgICAgIHNldEF0dHIoZ2wsIG9iamVjdC5wcm9ncmFtLCBhX3Bvc2l0aW9uLCBhX25vcm1hbCwgYV9jb2xvciwgYV90ZXh0dXJlLCBhX3RhbmdlbnQsIGFfYml0YW5nZW50KTtcclxuICAgICAgICB2YXIgdW5pZm9ybXMgPSB7XHJcbiAgICAgICAgICAgIHVXb3JsZFZpZXdQcm9qZWN0aW9uOiBvYmplY3Qud29ybGRNYXRyaXgsXHJcbiAgICAgICAgICAgIHVXb3JsZEludmVyc2VUcmFuc3Bvc2U6IG9iamVjdC53b3JsZEludmVyc2VNYXRyaXgsXHJcbiAgICAgICAgICAgIHVDb2xvcjogb2JqZWN0LnBpY2tlZENvbG9yLmNvbmNhdCgxLjApLFxyXG4gICAgICAgICAgICB1QW1iaWVudENvbG9yOiBvYmplY3QuYW1iaWVudCxcclxuICAgICAgICAgICAgdURpZmZ1c2VDb2xvcjogb2JqZWN0LnBpY2tlZENvbG9yLFxyXG4gICAgICAgICAgICB1U3BlY3VsYXJDb2xvcjogb2JqZWN0LnNwZWN1bGFyLFxyXG4gICAgICAgICAgICB1U2hpbmluZXNzOiBvYmplY3Quc2hpbmluZXNzLFxyXG4gICAgICAgICAgICB1TGlnaHRQb3M6IGxpZ2h0RGlyZWN0aW9uLFxyXG4gICAgICAgICAgICBrYTogb2JqZWN0LmNvbnN0LmthLFxyXG4gICAgICAgICAgICBrZDogb2JqZWN0LmNvbnN0LmtkLFxyXG4gICAgICAgICAgICBrczogb2JqZWN0LmNvbnN0LmtzLFxyXG4gICAgICAgICAgICB1UGhvbmc6IG9iamVjdC5waG9uZyxcclxuICAgICAgICAgICAgdVBob25nQW1iaWVudENvbG9yOiBvYmplY3QucGhvbmdBbWJpZW50LFxyXG4gICAgICAgICAgICB1U3BvdExpZ2h0OiBzcG90TGlnaHQsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRVbmlmb3JtcyhnbCwgb2JqZWN0LnByb2dyYW0sIHVuaWZvcm1zKTtcclxuXHJcbiAgICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRVMsIDAsIG9iamVjdC5tb2RlbC52ZXJ0aWNlcy5sZW5ndGgpO1xyXG4gICAgICAgIGlmIChvYmplY3QuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZW5kZXJMb29wKG9iamVjdC5jaGlsZHJlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbndpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDEpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH0pKCk7XHJcblxyXG5cclxuZnVuY3Rpb24gcmVuZGVyKG5vdykge1xyXG4gICAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcclxuICAgIGdsLmNsZWFyQ29sb3IoMC44LCAwLjgsIDAuOCwgMS4wKTtcclxuICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcclxuXHJcbiAgICBnbC5lbmFibGUoZ2wuQ1VMTF9GQUNFKTtcclxuICAgIGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcclxuXHJcbiAgICBzZXREZWZhdWx0U3RhdGUob2JqZWN0cyk7XHJcbiAgICAvLyBkZWx0YSB0aW1lXHJcbiAgICBpZighbm93KSBub3cgPSAwO1xyXG4gICAgaWYodF9hbmltYXRpb24gPT09IDApIHRfYW5pbWF0aW9uID0gbm93O1xyXG4gICAgaWYodF90ZXh0X2ZwcyA9PT0gMCkgdF90ZXh0X2ZwcyA9IG5vdztcclxuXHJcbiAgICBpZigobm93IC0gdF9hbmltYXRpb24pID49IGxvb3BfcGVyaW9kKXtcclxuICAgICAgbGV0IGRlbHRhVGltZSA9IG5vdyAtIHRfYW5pbWF0aW9uO1xyXG4gICAgICB0X2FuaW1hdGlvbiA9IG5vdztcclxuICAgICAgZnBzID0gKDEwMDAgLyBkZWx0YVRpbWUpLnRvRml4ZWQoMik7XHJcbiAgICAgIEFuaW1hdGlvbi5hbmltYXRlKHRhcmdldFJvb3QsIGRlbHRhVGltZSk7XHJcbiAgICAgIENoYXJhY3RlckNvbnRyb2xsZXIudmVsb2NpdHlMb29wKHRhcmdldFJvb3QsIGRlbHRhVGltZSk7XHJcbiAgICAgIENoYXJhY3RlckNvbnRyb2xsZXIuZ3Jhdml0eUxvb3AodGFyZ2V0Um9vdCwgZGVsdGFUaW1lKTtcclxuICAgICAgaGFuZGxlQ3VycmVudE1vZGVsRnJhbWUodGFyZ2V0Um9vdClcclxuICAgICAgaGFuZGxlQ3VycmVudE5vZGVGcmFtZSh0YXJnZXQpXHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlmKChub3cgLSB0X3RleHRfZnBzKSA+PSB0ZXh0X2Zwc19wZXJpb2Qpe1xyXG4gICAgICB0X3RleHRfZnBzID0gbm93O1xyXG4gICAgICBoYW5kbGVGcHMoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb2JqZWN0c1swXS5zZXRXb3JsZE10eChudWxsKTtcclxuXHJcbiAgICBub3JtYWxpemVMaWdodCA9IFZlYzMudW5pdFZlY3RvcihWZWMzLmZyb21BcnJheShsaWdodERpcmVjdGlvbikpLmFzQXJyYXkoKVxyXG4gICAgcmVuZGVyTG9vcChvYmplY3RzKTtcclxuICAgIEFuaW1hdGlvbi5oYW5kbGVUcmFuc2Zvcm0odGFyZ2V0LCBkb2N1bWVudCk7XHJcbiAgICAvLyBoYW5kbGUgY2hhcmFjdGVyIGNvbnRyb2xsZXJcclxuICAgIENoYXJhY3RlckNvbnRyb2xsZXIuZm9sbG93UGxheWVyTG9vcCh0YXJnZXRSb290KTtcclxuICAgIGhhbmRsZUNhbWVyYVBvc2l0aW9uKHRhcmdldFJvb3QpO1xyXG5cclxuICAgIFxyXG5cclxuICAgIFxyXG4gICAgd2luZG93LnJlcXVlc3RBbmltRnJhbWUocmVuZGVyKTtcclxuICAgIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0UHJvamVjdGlvbk1hdHJpeChtYXRyaXgsIG9iamVjdCkge1xyXG4gICAgLy8gY29uc3QgY2FtZXJhID0gc2V0Q2FtZXJhKG9iamVjdCk7XHJcbiAgICBjb25zdCBwcm9qZWN0aW9uVmlldyA9IENhbWVyYS5wcm9qZWN0aW9uTWF0cml4KHByb2plY3Rpb25fdHlwZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWdUb1JhZCg0NSksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbnZhcy53aWR0aCAvIGNhbnZhcy5oZWlnaHQpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC52aWV3TWF0cml4Lm5lYXIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnZpZXdNYXRyaXguZmFyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JsaXF1ZV90aGV0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ibGlxdWVfcGhpKVxyXG4gICAgY29uc3Qgdmlld01hdHJpeCA9IENhbWVyYS52aWV3TWF0cml4KG9iamVjdC52aWV3TWF0cml4LmNhbWVyYSwgb2JqZWN0LnZpZXdNYXRyaXgubG9va0F0LCBvYmplY3Qudmlld01hdHJpeC51cCk7XHJcbiAgICB2YXIgdmlld1Byb2plY3Rpb25NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KHByb2plY3Rpb25WaWV3LCB2aWV3TWF0cml4KTtcclxuICAgIGlmIChmYWN0b3IgPCAwLjAxKSB7XHJcbiAgICAgICAgZmFjdG9yID0gMC4wMTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJvamVjdGlvbl90eXBlID09PSBcInBlcnNwZWN0aXZlXCIpIHtcclxuICAgICAgICB2aWV3UHJvamVjdGlvbk1hdHJpeCA9IE1hdDQubXVsdGlwbHkoXHJcbiAgICAgICAgICAgIENhbWVyYS5tYWtlWlRvV01hdHJpeChmYWN0b3IpLFxyXG4gICAgICAgICAgICB2aWV3UHJvamVjdGlvbk1hdHJpeCxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHdvcmxkVmlld1Byb2plY3Rpb25NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KHZpZXdQcm9qZWN0aW9uTWF0cml4LCBtYXRyaXgpO1xyXG5cclxuICAgIHJldHVybiB3b3JsZFZpZXdQcm9qZWN0aW9uTWF0cml4O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZU1vZGVsT2JqZWN0IChpbmRleCkge1xyXG4gICAgb2JqZWN0cyA9IG1vZGVsW2luZGV4XTtcclxuICAgIHNldFRhcmdldChvYmplY3RzWzBdKTtcclxuICAgIHNldFRhcmdldFJvb3Qob2JqZWN0c1swXSk7XHJcbiAgICBjbGVhckNvbXBvbmVudCgpO1xyXG4gICAgZGlzcGxheUNvbXBvbmVudCgwLCBvYmplY3RzKTtcclxuICAgIGhhbmRsZVRyYW5zZm9ybShvYmplY3RzWzBdKTtcclxuICAgIGhhbmRsZVRvdGFsTW9kZWxGcmFtZSh0YXJnZXRSb290KVxyXG4gICAgaGFuZGxlVG90YWxOb2RlRnJhbWUodGFyZ2V0Um9vdClcclxuICAgIHJlbmRlcigpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlTWFwcGluZ1RleHR1cmUob2JqZWN0cywgdGV4dHVyZVR5cGUpIHtcclxuICBvYmplY3RzLmZvckVhY2goKG9iamVjdCkgPT4ge1xyXG4gICAgaWYgKHRleHR1cmVUeXBlID09PSBcIjBcIikge1xyXG4gICAgICBvYmplY3QucHJvZ3JhbSA9IGNyZWF0ZVNoYWRlclByb2dyYW0oXHJcbiAgICAgICAgZ2wsXHJcbiAgICAgICAgdmVydGV4X3NoYWRlcl8zZCxcclxuICAgICAgICBmcmFnbWVudF9zaGFkZXJfM2Rfbm9fbGlnaHRpbmdcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAodGV4dHVyZVR5cGUgPT09IFwiMVwiKSB7XHJcbiAgICAgIGNyZWF0ZVBhcGVyVGV4dHVyZShnbCk7XHJcbiAgICAgIG9iamVjdC5wcm9ncmFtID0gY3JlYXRlU2hhZGVyUHJvZ3JhbShcclxuICAgICAgICBnbCxcclxuICAgICAgICB2ZXJ0ZXhfc2hhZGVyXzNkLFxyXG4gICAgICAgIGZyYWdtZW50X3NoYWRlcl90ZXh0dXJlXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKHRleHR1cmVUeXBlID09PSBcIjJcIikge1xyXG4gICAgICBjcmVhdGVFbnZpcm9ubWVudFRleHR1cmUoZ2wpO1xyXG4gICAgICBvYmplY3QucHJvZ3JhbSA9IGNyZWF0ZVNoYWRlclByb2dyYW0oXHJcbiAgICAgICAgZ2wsXHJcbiAgICAgICAgdmVydGV4X3NoYWRlcl8zZCxcclxuICAgICAgICBmcmFnbWVudF9zaGFkZXJfZW52aXJvbm1lbnRcclxuICAgICAgKVxyXG4gICAgfSBlbHNlIGlmICh0ZXh0dXJlVHlwZSA9PT0gXCIzXCIpIHtcclxuICAgICAgY3JlYXRlQnVtcFRleHR1cmUoZ2wpO1xyXG4gICAgICBvYmplY3QucHJvZ3JhbSA9IGNyZWF0ZVNoYWRlclByb2dyYW0oXHJcbiAgICAgICAgZ2wsXHJcbiAgICAgICAgdmVydGV4X3NoYWRlcl8zZCxcclxuICAgICAgICBmcmFnbWVudF9zaGFkZXJfYnVtcFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKG9iamVjdC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNoYW5nZU1hcHBpbmdUZXh0dXJlKG9iamVjdC5jaGlsZHJlbiwgdGV4dHVyZVR5cGUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuYW1lVGFyZ2V0IChuZXdOYW1lKSB7XHJcbiAgZm9yKCBsZXQgaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSsrKXtcclxuICAgIGlmKG9iamVjdHNbaV0ubmFtZSA9PT0gdGFyZ2V0Lm5hbWUpe1xyXG4gICAgICBjb25zb2xlLmxvZyhvYmplY3RzW2ldLm5hbWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKG5ld05hbWUpXHJcbiAgICAgIG9iamVjdHNbaV0ubmFtZSA9IG5ld05hbWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRhcmdldC5uYW1lID0gbmV3TmFtZTtcclxuICBjbGVhckNvbXBvbmVudCgpO1xyXG4gIGRpc3BsYXlDb21wb25lbnQoMCwgb2JqZWN0cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVOb2RlIChuYW1lKSB7XHJcbiAgZnVuY3Rpb24gcmVtb3ZlTm9kZSAobm9kZSkge1xyXG4gICAgaWYgKG5vZGUubmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICBvYmplY3RzLnNwbGljZShvYmplY3RzLmluZGV4T2Yobm9kZSksIDEpO1xyXG4gICAgICBub2RlTmFtZS52YWx1ZSA9IFwiXCJcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBcclxuXHJcbiAgICBpZiAobm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuW2ldLm5hbWUgPT09IG5hbWUpIHtcclxuICAgICAgICAgIG5vZGUuY2hpbGRyZW4uc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgbm9kZU5hbWUudmFsdWUgPSBcIlwiXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlbW92ZU5vZGUobm9kZS5jaGlsZHJlbltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVOb2RlKG9iamVjdHNbMF0pO1xyXG4gIGNvbnNvbGUubG9nKG9iamVjdHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkTm9kZSAoKSB7XHJcbiAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKCk7IFxyXG4gIGN1YmVDb3VudCsrO1xyXG4gIGNoZWNrTm9kZShvYmplY3RzLCBcIm5ld0N1YmVcIiArIGN1YmVDb3VudCk7XHJcbiAgbmV3Tm9kZS5uYW1lID0gXCJuZXdDdWJlXCIgKyBjdWJlQ291bnQ7XHJcbiAgbmV3Tm9kZS5tb2RlbCA9IGJveE1vZGVsKDEsIDEsIDEsIFswLCAwLCAwXSk7XHJcbiAgbmV3Tm9kZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLCAwLCAwXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICB9O1xyXG4gIG5ld05vZGUucGlja2VkQ29sb3IgPSByYW5kb21Db2xvcnMoKSxcclxuICBuZXdOb2RlLmFtYmllbnQgPSBbMSwxLDFdO1xyXG4gIG5ld05vZGUucGhvbmcgPSB0cnVlO1xyXG4gIG5ld05vZGUucGhvbmdBbWJpZW50ID0gWzAsMCwwXSxcclxuICBuZXdOb2RlLmRpZmZ1c2UgPSBbMSwxLDFdO1xyXG4gIG5ld05vZGUuc3BlY3VsYXIgPSBbMSwxLDFdO1xyXG4gIG5ld05vZGUuc2hpbmluZXNzID0gMTtcclxuICBuZXdOb2RlLmNvbnN0ID0ge1xyXG4gICAgICBrZDogMS4wLFxyXG4gICAgICBrczogMC4wLFxyXG4gICAgICBrYTogMS4wLFxyXG4gIH07XHJcbiAgbmV3Tm9kZS52aWV3TWF0cml4ID0ge1xyXG4gICAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICAgIG5lYXI6IDAuMSxcclxuICAgICAgZmFyOiA1MCxcclxuICB9O1xyXG4gIG5ld05vZGUuYW5pbWF0aW9uID0ge1xyXG4gICAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIH07XHJcbiAgbmV3Tm9kZS53b3JsZE1hdHJpeCA9IHRhcmdldC53b3JsZE1hdHJpeDtcclxuICBpZiAob2JqZWN0cy5sZW5ndGggIT09IDApIHtcclxuICAgIG5ld05vZGUuc2V0UGFyZW50KHRhcmdldCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG9iamVjdHMucHVzaChuZXdOb2RlKTtcclxuICAgIHRhcmdldCA9IG9iamVjdHNbMF07XHJcbiAgICB0YXJnZXRSb290ID0gb2JqZWN0c1swXTtcclxuICAgIHJlbmRlcigpO1xyXG4gIH1cclxuICBjbGVhckNvbXBvbmVudCgpO1xyXG4gIGRpc3BsYXlDb21wb25lbnQoMCwgb2JqZWN0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrTm9kZShvYmplY3RzLCBuYW1lKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAob2JqZWN0c1tpXS5uYW1lID09PSBuYW1lKSB7XHJcbiAgICAgIGN1YmVDb3VudCsrO1xyXG4gICAgfVxyXG4gICAgaWYgKG9iamVjdHNbaV0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICBjaGVja05vZGUob2JqZWN0c1tpXS5jaGlsZHJlbiwgbmFtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZE9iamVjdHMob2JqZWN0cykge1xyXG4gICAgc2V0T2JqZWN0cyhvYmplY3RzKTtcclxuICAgIHNldFRhcmdldChvYmplY3RzWzBdKTtcclxuICAgIHNldFRhcmdldFJvb3Qob2JqZWN0c1swXSk7XHJcbiAgICBjbGVhckNvbXBvbmVudCgpO1xyXG4gICAgZGlzcGxheUNvbXBvbmVudCgwLCBvYmplY3RzKTtcclxuICAgIGhhbmRsZVRyYW5zZm9ybShvYmplY3RzWzBdKTtcclxuICAgIGhhbmRsZVRvdGFsTW9kZWxGcmFtZSh0YXJnZXRSb290KVxyXG4gICAgaGFuZGxlVG90YWxOb2RlRnJhbWUodGFyZ2V0Um9vdClcclxuICAgIHJlbmRlcigpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkTW9kZWwob2JqZWN0KSB7XHJcbiAgbW9kZWwucHVzaChvYmplY3QpO1xyXG59IiwiaW1wb3J0IFZlYzMgZnJvbSBcIi4vbWF0aC9WZWMzLmpzXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVZlcnRpY2VzKGhlaWdodCwgd2lkdGgsIGRlcHRoLCBvZmZzZXQpIHtcclxuICByZXR1cm4gW1xyXG4gICAgW29mZnNldFswXSAtIHdpZHRoIC8gMiwgb2Zmc2V0WzFdIC0gaGVpZ2h0IC8gMiwgb2Zmc2V0WzJdIC0gZGVwdGggLyAyXSxcclxuICAgIFtvZmZzZXRbMF0gKyB3aWR0aCAvIDIsIG9mZnNldFsxXSAtIGhlaWdodCAvIDIsIG9mZnNldFsyXSAtIGRlcHRoIC8gMl0sXHJcbiAgICBbb2Zmc2V0WzBdIC0gd2lkdGggLyAyLCBvZmZzZXRbMV0gKyBoZWlnaHQgLyAyLCBvZmZzZXRbMl0gLSBkZXB0aCAvIDJdLFxyXG4gICAgW29mZnNldFswXSArIHdpZHRoIC8gMiwgb2Zmc2V0WzFdICsgaGVpZ2h0IC8gMiwgb2Zmc2V0WzJdIC0gZGVwdGggLyAyXSxcclxuICAgIFtvZmZzZXRbMF0gLSB3aWR0aCAvIDIsIG9mZnNldFsxXSAtIGhlaWdodCAvIDIsIG9mZnNldFsyXSArIGRlcHRoIC8gMl0sXHJcbiAgICBbb2Zmc2V0WzBdICsgd2lkdGggLyAyLCBvZmZzZXRbMV0gLSBoZWlnaHQgLyAyLCBvZmZzZXRbMl0gKyBkZXB0aCAvIDJdLFxyXG4gICAgW29mZnNldFswXSAtIHdpZHRoIC8gMiwgb2Zmc2V0WzFdICsgaGVpZ2h0IC8gMiwgb2Zmc2V0WzJdICsgZGVwdGggLyAyXSxcclxuICAgIFtvZmZzZXRbMF0gKyB3aWR0aCAvIDIsIG9mZnNldFsxXSArIGhlaWdodCAvIDIsIG9mZnNldFsyXSArIGRlcHRoIC8gMl0sXHJcbiAgXVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVGYWNlcygpIHtcclxuICByZXR1cm4gW1xyXG4gICAgWzEsIDMsIDJdLFxyXG4gICAgWzQsIDIsIDNdLFxyXG4gICAgWzEsIDIsIDVdLFxyXG4gICAgWzYsIDUsIDJdLFxyXG4gICAgWzEsIDUsIDNdLFxyXG4gICAgWzUsIDcsIDNdLFxyXG4gICAgWzIsIDQsIDZdLFxyXG4gICAgWzgsIDYsIDRdLFxyXG4gICAgWzQsIDMsIDhdLFxyXG4gICAgWzcsIDgsIDNdLFxyXG4gICAgWzUsIDYsIDddLFxyXG4gICAgWzgsIDcsIDZdLFxyXG4gIF1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVUZXhDb29yICgpIHtcclxuICByZXR1cm4gW1xyXG4gICAgMSwgMSwgMSwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMCxcclxuXHJcbiAgICAwLCAxLCAxLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAxLCAxLFxyXG5cclxuICAgIDAsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsXHJcblxyXG4gICAgMSwgMSwgMSwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMCxcclxuXHJcbiAgICAxLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAxLCAxLCAwLCAwLFxyXG5cclxuICAgIDAsIDEsIDEsIDEsIDAsIDAsIDEsIDAsIDAsIDAsIDEsIDEsXHJcbiAgXVxyXG59XHJcbmZ1bmN0aW9uIGdlbmVyYXRlVGFuZ2VudHMoKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIC8vYmFja1xyXG4gICAgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSxcclxuICAgIC8vYm90dG9tXHJcbiAgICAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLFxyXG4gICAgLy9sZWZ0XHJcbiAgICAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLFxyXG4gICAgLy9yaWdodFxyXG4gICAgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCxcclxuICAgIC8vdG9wXHJcbiAgICAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLFxyXG4gICAgLy9mcm9udFxyXG4gICAgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSxcclxuICBdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQml0YW5nZW50cygpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCxcclxuICAgICAgICAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLFxyXG4gICAgICAgIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsXHJcbiAgICAgICAgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCxcclxuICAgICAgICAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLFxyXG4gICAgICAgIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsXHJcbiAgICBdXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU5vcm1hbHModmVydGljZXMsIGZhY2VzKSB7XHJcbiAgbGV0IG5vcm1hbHMgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZhY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBsZXQgZmFjZSA9IGZhY2VzW2ldO1xyXG4gICAgbGV0IHYxID0gVmVjMy5mcm9tQXJyYXkodmVydGljZXNbZmFjZVswXSAtIDFdKVxyXG4gICAgbGV0IHYyID0gVmVjMy5mcm9tQXJyYXkodmVydGljZXNbZmFjZVsxXSAtIDFdKVxyXG4gICAgbGV0IHYzID0gVmVjMy5mcm9tQXJyYXkodmVydGljZXNbZmFjZVsyXSAtIDFdKVxyXG5cclxuICAgIGxldCB2MXYyID0gVmVjMy5zdWIodjIsIHYxKTtcclxuICAgIGxldCB2MXYzID0gVmVjMy5zdWIodjMsdjEpO1xyXG5cclxuICAgIGxldCByZXMgPSBWZWMzLnVuaXRWZWN0b3IoVmVjMy5jcm9zcyh2MXYyLHYxdjMpKS5hc0FycmF5KClcclxuICAgIG5vcm1hbHMucHVzaChyZXMpO1xyXG4gICAgbm9ybWFscy5wdXNoKHJlcyk7XHJcbiAgICBub3JtYWxzLnB1c2gocmVzKTtcclxuICB9XHJcbiAgcmV0dXJuIG5vcm1hbHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQ29sb3JzKHZlcnRpY2VzLCBjb2xvciA9IG51bGwpIHtcclxuICBsZXQgY29sb3JzID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkgKz0gMykge1xyXG4gICAgdmFyIGMgPSBjb2xvcjtcclxuICAgIGlmIChjb2xvciA9PSBudWxsKSB7XHJcbiAgICAgIGMgPSBbTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKV07XHJcbiAgICB9IFxyXG4gICAgY29sb3JzLnB1c2goYyk7XHJcbiAgICBjb2xvcnMucHVzaChjKTtcclxuICAgIGNvbG9ycy5wdXNoKGMpO1xyXG4gICAgY29sb3JzLnB1c2goYyk7XHJcbiAgICBjb2xvcnMucHVzaChjKTtcclxuICAgIGNvbG9ycy5wdXNoKGMpO1xyXG4gIH1cclxuICByZXR1cm4gY29sb3JzO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBib3hNb2RlbChoZWlnaHQsIHdpZHRoLCBkZXB0aCwgb2Zmc2V0KSB7XHJcblxyXG4gIGxldCB2ZXJ0aWNlcyA9IGdlbmVyYXRlVmVydGljZXMoaGVpZ2h0LCB3aWR0aCwgZGVwdGgsIG9mZnNldCk7XHJcbiAgbGV0IGNlbnRlciA9IFtvZmZzZXRbMF0sIG9mZnNldFsxXSwgb2Zmc2V0WzJdXTtcclxuICBsZXQgZmFjZXMgPSBnZW5lcmF0ZUZhY2VzKCk7XHJcbiAgbGV0IHRleENvb3JkID0gZ2VuZXJhdGVUZXhDb29yKCk7XHJcbiAgbGV0IG5vcm1hbHMgPSBnZW5lcmF0ZU5vcm1hbHModmVydGljZXMsIGZhY2VzKTtcclxuICB2ZXJ0aWNlcyA9IHRvVmVydGljZXModmVydGljZXMsIGZhY2VzKTtcclxuXHJcbiAgbGV0IHRhbmdlbnRzID0gZ2VuZXJhdGVUYW5nZW50cygpO1xyXG4gIGxldCBiaXRhbmdlbnRzID0gZ2VuZXJhdGVCaXRhbmdlbnRzKCk7XHJcbiAgbGV0IGNvbG9ycyA9IGdlbmVyYXRlQ29sb3JzKHZlcnRpY2VzKTtcclxuICBcclxuICByZXR1cm4ge1xyXG4gICAgdmVydGljZXM6IHZlcnRpY2VzLFxyXG4gICAgZmFjZXM6IGZhY2VzLFxyXG4gICAgdGFuZ2VudHM6IHRhbmdlbnRzLFxyXG4gICAgYml0YW5nZW50czogYml0YW5nZW50cyxcclxuICAgIG5vcm1hbHM6IG5vcm1hbHMsXHJcbiAgICBjb2xvcnM6IGNvbG9ycyxcclxuICAgIHRleENvb3JkOiB0ZXhDb29yZCxcclxuICAgIGNlbnRlciA6IGNlbnRlclxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IFZlYzQgZnJvbSBcIi4vVmVjNC5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXQ0e1xyXG4gICAgc3RhdGljIGdldEVtcHR5KCl7XHJcbiAgICAgICAgcmV0dXJuIFswLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAwXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRJZGVudGl0eSgpe1xyXG4gICAgICAgIHJldHVybiBbMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMV07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBnZXRUcmFuc2xhdGlvbih4LCB5LCB6KXtcclxuICAgICAgICByZXR1cm4gWzEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgICAgIHgsIHksIHosIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRTY2FsZSh4LCB5LCB6KXtcclxuICAgICAgICByZXR1cm4gW3gsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCB5LCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgeiwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRSb3RhdGlvblgodGhldGEpe1xyXG4gICAgICAgIHJldHVybiBbMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIE1hdGguY29zKHRoZXRhKSwgLU1hdGguc2luKHRoZXRhKSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIE1hdGguc2luKHRoZXRhKSwgTWF0aC5jb3ModGhldGEpLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMV07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFJvdGF0aW9uWSh0aGV0YSl7XHJcbiAgICAgICAgcmV0dXJuIFtNYXRoLmNvcyh0aGV0YSksIDAsIE1hdGguc2luKHRoZXRhKSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAtTWF0aC5zaW4odGhldGEpLCAwLCBNYXRoLmNvcyh0aGV0YSksIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAxXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Um90YXRpb25aKHRoZXRhKXtcclxuICAgICAgICByZXR1cm4gW01hdGguY29zKHRoZXRhKSwgLU1hdGguc2luKHRoZXRhKSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIE1hdGguc2luKHRoZXRhKSwgTWF0aC5jb3ModGhldGEpLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDFdO1xyXG4gICAgfSAgIFxyXG4gICAgXHJcbiAgICBzdGF0aWMgdHJhbnNwb3NlKGEpIHtcclxuICAgICAgICBpZiAoIWEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vIG9yIHJldHVybiBhIGRlZmF1bHQgbWF0cml4IG9yIGhhbmRsZSB0aGUgbnVsbCBjYXNlIGFwcHJvcHJpYXRlbHlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgYVswXSwgYVs0XSwgYVs4XSwgYVsxMl0sXHJcbiAgICAgICAgICAgIGFbMV0sIGFbNV0sIGFbOV0sIGFbMTNdLFxyXG4gICAgICAgICAgICBhWzJdLCBhWzZdLCBhWzEwXSwgYVsxNF0sXHJcbiAgICAgICAgICAgIGFbM10sIGFbN10sIGFbMTFdLCBhWzE1XVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGludmVyc2UoYSkge1xyXG4gICAgICAgIHZhciBhMDAgPSBhWzAgKiA0ICsgMF07XHJcbiAgICAgICAgdmFyIGEwMSA9IGFbMCAqIDQgKyAxXTtcclxuICAgICAgICB2YXIgYTAyID0gYVswICogNCArIDJdO1xyXG4gICAgICAgIHZhciBhMDMgPSBhWzAgKiA0ICsgM107XHJcbiAgICAgICAgdmFyIGExMCA9IGFbMSAqIDQgKyAwXTtcclxuICAgICAgICB2YXIgYTExID0gYVsxICogNCArIDFdO1xyXG4gICAgICAgIHZhciBhMTIgPSBhWzEgKiA0ICsgMl07XHJcbiAgICAgICAgdmFyIGExMyA9IGFbMSAqIDQgKyAzXTtcclxuICAgICAgICB2YXIgYTIwID0gYVsyICogNCArIDBdO1xyXG4gICAgICAgIHZhciBhMjEgPSBhWzIgKiA0ICsgMV07XHJcbiAgICAgICAgdmFyIGEyMiA9IGFbMiAqIDQgKyAyXTtcclxuICAgICAgICB2YXIgYTIzID0gYVsyICogNCArIDNdO1xyXG4gICAgICAgIHZhciBhMzAgPSBhWzMgKiA0ICsgMF07XHJcbiAgICAgICAgdmFyIGEzMSA9IGFbMyAqIDQgKyAxXTtcclxuICAgICAgICB2YXIgYTMyID0gYVszICogNCArIDJdO1xyXG4gICAgICAgIHZhciBhMzMgPSBhWzMgKiA0ICsgM107XHJcbiAgICAgICAgdmFyIGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMDtcclxuICAgICAgICB2YXIgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwO1xyXG4gICAgICAgIHZhciBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTA7XHJcbiAgICAgICAgdmFyIGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMTtcclxuICAgICAgICB2YXIgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExO1xyXG4gICAgICAgIHZhciBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTI7XHJcbiAgICAgICAgdmFyIGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMDtcclxuICAgICAgICB2YXIgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwO1xyXG4gICAgICAgIHZhciBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzA7XHJcbiAgICAgICAgdmFyIGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMTtcclxuICAgICAgICB2YXIgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxO1xyXG4gICAgICAgIHZhciBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzI7XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcclxuICAgICAgICB2YXIgZGV0ID1cclxuICAgICAgICBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XHJcblxyXG4gICAgICAgIGlmICghZGV0KSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRldCA9IDEuMCAvIGRldDtcclxuXHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgKGExMSAqIGIxMSAtIGExMiAqIGIxMCArIGExMyAqIGIwOSkgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMDIgKiBiMTAgLSBhMDEgKiBiMTEgLSBhMDMgKiBiMDkpICogZGV0LFxyXG4gICAgICAgICAgICAoYTMxICogYjA1IC0gYTMyICogYjA0ICsgYTMzICogYjAzKSAqIGRldCxcclxuICAgICAgICAgICAgKGEyMiAqIGIwNCAtIGEyMSAqIGIwNSAtIGEyMyAqIGIwMykgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMTIgKiBiMDggLSBhMTAgKiBiMTEgLSBhMTMgKiBiMDcpICogZGV0LFxyXG4gICAgICAgICAgICAoYTAwICogYjExIC0gYTAyICogYjA4ICsgYTAzICogYjA3KSAqIGRldCxcclxuICAgICAgICAgICAgKGEzMiAqIGIwMiAtIGEzMCAqIGIwNSAtIGEzMyAqIGIwMSkgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMjAgKiBiMDUgLSBhMjIgKiBiMDIgKyBhMjMgKiBiMDEpICogZGV0LFxyXG4gICAgICAgICAgICAoYTEwICogYjEwIC0gYTExICogYjA4ICsgYTEzICogYjA2KSAqIGRldCxcclxuICAgICAgICAgICAgKGEwMSAqIGIwOCAtIGEwMCAqIGIxMCAtIGEwMyAqIGIwNikgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMzAgKiBiMDQgLSBhMzEgKiBiMDIgKyBhMzMgKiBiMDApICogZGV0LFxyXG4gICAgICAgICAgICAoYTIxICogYjAyIC0gYTIwICogYjA0IC0gYTIzICogYjAwKSAqIGRldCxcclxuICAgICAgICAgICAgKGExMSAqIGIwNyAtIGExMCAqIGIwOSAtIGExMiAqIGIwNikgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMDAgKiBiMDkgLSBhMDEgKiBiMDcgKyBhMDIgKiBiMDYpICogZGV0LFxyXG4gICAgICAgICAgICAoYTMxICogYjAxIC0gYTMwICogYjAzIC0gYTMyICogYjAwKSAqIGRldCxcclxuICAgICAgICAgICAgKGEyMCAqIGIwMyAtIGEyMSAqIGIwMSArIGEyMiAqIGIwMCkgKiBkZXQsXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdHJhbnNsYXRlICh0eCwgdHksIHR6KSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgdHgsIHR5LCB0eiwgMVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0dXJuIGIgKiBhXHJcbiAgICBzdGF0aWMgbXVsdGlwbHkoYSwgYil7XHJcbiAgICAgICAgbGV0IHJlcyA9IE1hdDQuZ2V0RW1wdHkoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7ICsraSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7ICsraikge1xyXG4gICAgICAgICAgICAgICAgcmVzW2kgKiA0ICsgal0gPSBWZWM0LmRvdChNYXQ0LmdldFJvdyhiLCBpKSwgTWF0NC5nZXRDb2x1bW4oYSwgaikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcm90YXRlWChyYWQpIHtcclxuICAgICAgICB2YXIgc2luID0gTWF0aC5zaW4ocmFkKTtcclxuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MocmFkKTtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCBjb3MsIHNpbiwgMCxcclxuICAgICAgICAgICAgMCwgLXNpbiwgY29zLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcm90YXRlWShyYWQpIHtcclxuICAgICAgICB2YXIgc2luID0gTWF0aC5zaW4ocmFkKTtcclxuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MocmFkKTtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBjb3MsIDAsIC1zaW4sIDAsXHJcbiAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgIHNpbiwgMCwgY29zLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcm90YXRlWihyYWQpIHtcclxuICAgICAgICB2YXIgc2luID0gTWF0aC5zaW4ocmFkKTtcclxuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MocmFkKTtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBjb3MsIHNpbiwgMCwgMCxcclxuICAgICAgICAgICAgLXNpbiwgY29zLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2NhbGUgKHN4LCBzeSwgc3opIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBzeCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgc3ksIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIHN6LCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1dGlsc1xyXG4gICAgc3RhdGljIGdldFJvdyhtYXRyaXgsIHJvdyl7XHJcbiAgICAgICAgLy8gdXNlIFZlYzQgdG8gZ2V0IHRoZSByb3dcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzQobWF0cml4W3JvdyAqIDRdLCBtYXRyaXhbcm93ICogNCArIDFdLCBtYXRyaXhbcm93ICogNCArIDJdLCBtYXRyaXhbcm93ICogNCArIDNdKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Q29sdW1uKG1hdHJpeCwgY29sdW1uKXtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzQobWF0cml4W2NvbHVtbl0sIG1hdHJpeFtjb2x1bW4gKyA0XSwgbWF0cml4W2NvbHVtbiArIDhdLCBtYXRyaXhbY29sdW1uICsgMTJdKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlYzN7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB6KXtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy56ID0gejtcclxuICAgIH1cclxuICAgIHN0YXRpYyBhZGQoYSwgYil7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWMzKGEueCArIGIueCwgYS55ICsgYi55LCBhLnogKyBiLnopO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzdWIoYSwgYil7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWMzKGEueCAtIGIueCwgYS55IC0gYi55LCBhLnogLSBiLnopO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkb3QoYSwgYil7XHJcbiAgICAgICAgcmV0dXJuIGEueCAqIGIueCArIGEueSAqIGIueSArIGEueiAqIGIuejtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3Jvc3MoYSwgYil7XHJcbiAgICAgICAgLy8gcmV0dXJuIG5ldyBWZWMzKGEueiAqIGIueSAtIGEueSAqIGIueiwgYS54ICogYi56IC0gYS56ICogYi54ICxhLnkgKiBiLnggLSBhLnggKiBiLnkpO1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjMyhhLnkgKiBiLnogLSBhLnogKiBiLnksIGEueiAqIGIueCAtIGEueCAqIGIueiAsYS54ICogYi55IC0gYS55ICogYi54KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbm9ybShhKXtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGEueCAqIGEueCArIGEueSAqIGEueSArIGEueiAqIGEueik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVuaXRWZWN0b3IoYSl7XHJcbiAgICAgICAgbGV0IG5vcm0gPSBWZWMzLm5vcm0oYSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWMzKGEueCAvIG5vcm0sIGEueSAvIG5vcm0sIGEueiAvIG5vcm0pO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgYXNBcnJheSgpeyAgXHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueSwgdGhpcy56XTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZnJvbUFycmF5KGFycmF5KXtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzMoYXJyYXlbMF0sIGFycmF5WzFdLCBhcnJheVsyXSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVmVjMyBmcm9tIFwiLi9WZWMzLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWM0e1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgeiwgdyl7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMueiA9IHo7XHJcbiAgICAgICAgdGhpcy53ID0gdztcclxuICAgIH1cclxuICAgIHN0YXRpYyBhZGQoYSwgYil7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWM0KGEueCArIGIueCwgYS55ICsgYi55LCBhLnogKyBiLnosIGEudyArIGIudyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRvdChhLCBiKXtcclxuICAgICAgICBsZXQgcmVzID0gYS54ICogYi54ICsgYS55ICogYi55ICsgYS56ICogYi56ICsgYS53ICogYi53XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbm9ybShhKXtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGEueCAqIGEueCArIGEueSAqIGEueSArIGEueiAqIGEueiArIGEudyAqIGEudyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5vcm1hbGl6ZShhKXtcclxuICAgICAgICBsZXQgbm9ybSA9IFZlYzQubm9ybShhKTtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzQoYS54IC8gbm9ybSwgYS55IC8gbm9ybSwgYS56IC8gbm9ybSwgYS53IC8gbm9ybSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzVmVjMyhhKXsgICBcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzMoYS54LCBhLnksIGEueik7XHJcbiAgICB9XHJcblxyXG4gICAgYXNBcnJheSgpeyAgXHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueSwgdGhpcy56LCB0aGlzLnddO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmcm9tQXJyYXkoYXJyYXkpe1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjNChhcnJheVswXSwgYXJyYXlbMV0sIGFycmF5WzJdLCBhcnJheVszXSk7XHJcbiAgICB9XHJcblxyXG59IiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWdUb1JhZChkZWdyZWVzKXtcclxuICAgIHJldHVybiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcclxufSAgIFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhZFRvRGVnKHJhZGlhbnMpe1xyXG4gICAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xyXG59IiwiaW1wb3J0IE5vZGUgZnJvbSBcIi4uL25vZGUuanNcIjtcclxuaW1wb3J0IHsgZGVnVG9SYWQgfSBmcm9tIFwiLi4vbWF0aC9tYXRoVXRpbHMuanNcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vdXRpbHMvQW5pbWF0aW9uLmpzXCI7XHJcbmltcG9ydCBib3hNb2RlbCBmcm9tIFwiLi4vYm94TW9kZWwuanNcIjtcclxuXHJcbi8vIENyZWF0ZSB0aGUgY2hpY2tlbiBib2R5IG5vZGVcclxuY29uc3QgY2hpY2tlbiA9IG5ldyBOb2RlKCk7XHJcbmNoaWNrZW4uZmxhZyA9IFwiYXJ0aWN1bGF0ZWRcIjtcclxuY2hpY2tlbi5uYW1lID0gXCJjaGlja2VuXCI7XHJcbmNoaWNrZW4ubW9kZWwgPSBib3hNb2RlbCgxLCAxLjUsIDEsIFswLCAwLCAwXSk7XHJcbmNoaWNrZW4udHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMCwgMCwgMF0sXHJcbiAgICByb3RhdGU6IFs0MiwgLTU1LCAyN10sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5jaGlja2VuLnBpY2tlZENvbG9yID0gWzAuNywgMC43LCAwXSxcclxuY2hpY2tlbi5kaWZmdXNlID0gWzEsMSwxXTtcclxuY2hpY2tlbi5zcGVjdWxhciA9IFsxLDEsMV07XHJcbmNoaWNrZW4uYW1iaWVudCA9IFsxLCAxLCAxXSxcclxuY2hpY2tlbi5waG9uZyA9IHRydWU7XHJcbmNoaWNrZW4ucGhvbmdBbWJpZW50ID0gWzAuNywgMC43LCAwXSxcclxuY2hpY2tlbi5zaGluaW5lc3MgPSAxLFxyXG5jaGlja2VuLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmNoaWNrZW4udmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoaWNrZW5GcmFtZXMoKXtcclxuICAgIGxldCB0cmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgdHJhbnNsYXRlOiBbMCwgMCwgMF0sXHJcbiAgICAgICAgcm90YXRlOiBbZGVnVG9SYWQoNDIpLCBkZWdUb1JhZCgtNTUpLCBkZWdUb1JhZCgyNyldLFxyXG4gICAgICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgICB9XHJcbiAgICBsZXQgZnJhbWVzID0gW11cclxuICAgIGZvcihsZXQgayA9IDA7IGsgPCAxMDA7ICsrayl7XHJcbiAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgIF90cmFuc2Zvcm0udHJhbnNsYXRlWzBdID0gayAvIDUwO1xyXG4gICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gZnJhbWVzO1xyXG5cclxufVxyXG5cclxuY2hpY2tlbi5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBjaGlja2VuRnJhbWVzKCksXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogQW5pbWF0aW9uLmFuaW1hdGlvblNjcmlwdCgpLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbi8vIENyZWF0ZSB0aGUgaGVhZCBub2RlXHJcbmNvbnN0IGhlYWQgPSBuZXcgTm9kZSgpO1xyXG5oZWFkLm5hbWUgPSBcImhlYWRcIjtcclxuaGVhZC5tb2RlbCA9IGJveE1vZGVsKDAuNiwgMC42LCAwLjgsIFswLCAwLCAwXSk7XHJcbmhlYWQudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMC43NSwgMC43NSwgMF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmhlYWQucGlja2VkQ29sb3IgPSBbMC43LCAwLjcsIDBdO1xyXG5oZWFkLmRpZmZ1c2UgPSBbMSwgMSwgMV07XHJcbmhlYWQuc3BlY3VsYXIgPSBbMSwgMSwgMV07XHJcbmhlYWQuYW1iaWVudCA9IFsxLCAxLCAxXTtcclxuaGVhZC5waG9uZyA9IHRydWU7XHJcbmhlYWQucGhvbmdBbWJpZW50ID0gWzAuNywgMC43LCAwXSxcclxuaGVhZC5zaGluaW5lc3MgPSAxLFxyXG5oZWFkLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmhlYWQudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuaGVhZC5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBudWxsLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IG51bGwsIFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbi8vIENyZWF0ZSB0aGUgYmVhayBub2RlXHJcbmNvbnN0IGJlYWsgPSBuZXcgTm9kZSgpO1xyXG5iZWFrLm5hbWUgPSBcImJlYWtcIjtcclxuYmVhay5tb2RlbCA9IGJveE1vZGVsKDAuMiwgMC4yLCAwLjMsIFstMC42NSwgLTAuMSwgMF0pO1xyXG5iZWFrLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzEsIDAsIDBdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5iZWFrLnBpY2tlZENvbG9yID0gWzEsIDAuNSwgMF07XHJcbmJlYWsuZGlmZnVzZSA9IFsxLCAxLCAxXTtcclxuYmVhay5zcGVjdWxhciA9IFsxLCAxLCAxXTtcclxuYmVhay5hbWJpZW50ID0gWzEsIDEsIDFdO1xyXG5iZWFrLnBob25nID0gdHJ1ZTtcclxuYmVhay5waG9uZ0FtYmllbnQgPSBbMSwgMC41LCAwXSxcclxuYmVhay5zaGluaW5lc3MgPSAxLFxyXG5iZWFrLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmJlYWsudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuYmVhay5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBudWxsLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IG51bGwsXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuY29uc3Qgd2hpdGVMZWZ0RXllID0gbmV3IE5vZGUoKTtcclxud2hpdGVMZWZ0RXllLm5hbWUgPSBcIndoaXRlTGVmdEV5ZVwiO1xyXG53aGl0ZUxlZnRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjA3NSwgMC4xLCAwLjEsIFstMC43NSwgMC4yLCAwLjE1XSk7XHJcbndoaXRlTGVmdEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFsxLjA0LCAwLCAwXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxud2hpdGVMZWZ0RXllLnBpY2tlZENvbG9yID0gWzAuOTksIDAuOTksIDAuOTldO1xyXG53aGl0ZUxlZnRFeWUuZGlmZnVzZSA9IFsxLCAxLCAxXTtcclxud2hpdGVMZWZ0RXllLnNwZWN1bGFyID0gWzEsIDEsIDFdO1xyXG53aGl0ZUxlZnRFeWUuYW1iaWVudCA9IFsxLCAxLCAxXTtcclxud2hpdGVMZWZ0RXllLnBob25nID0gdHJ1ZTtcclxud2hpdGVMZWZ0RXllLnBob25nQW1iaWVudCA9IFswLjk5LCAwLjk5LCAwLjk5XSxcclxud2hpdGVMZWZ0RXllLnNoaW5pbmVzcyA9IDEsXHJcbndoaXRlTGVmdEV5ZS5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG53aGl0ZUxlZnRFeWUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxud2hpdGVMZWZ0RXllLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IG51bGwsXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogbnVsbCxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG5jb25zdCBibGFja0xlZnRFeWUgPSBuZXcgTm9kZSgpO1xyXG5ibGFja0xlZnRFeWUubmFtZSA9IFwiYmxhY2tMZWZ0RXllXCI7XHJcbmJsYWNrTGVmdEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMDUsIDAuMDUsIDAuMDUsIFstMC43NSwgMC4yLCAwLjE1XSk7XHJcbmJsYWNrTGVmdEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLjA2LCAwLCAwXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuYmxhY2tMZWZ0RXllLnBpY2tlZENvbG9yID0gWzAsIDAsIDBdO1xyXG5ibGFja0xlZnRFeWUuZGlmZnVzZSA9IFsxLCAxLCAxXTtcclxuYmxhY2tMZWZ0RXllLnNwZWN1bGFyID0gWzEsIDEsIDFdO1xyXG5ibGFja0xlZnRFeWUuYW1iaWVudCA9IFsxLCAxLCAxXTtcclxuYmxhY2tMZWZ0RXllLnBob25nID0gdHJ1ZTtcclxuYmxhY2tMZWZ0RXllLnBob25nQW1iaWVudCA9IFswLDAsMF0sXHJcbmJsYWNrTGVmdEV5ZS5zaGluaW5lc3MgPSAxLFxyXG5ibGFja0xlZnRFeWUuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxuYmxhY2tMZWZ0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmJsYWNrTGVmdEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBudWxsLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IG51bGwsXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG5cclxufTtcclxuXHJcbmNvbnN0IHdoaXRlUmlnaHRFeWUgPSBuZXcgTm9kZSgpO1xyXG53aGl0ZVJpZ2h0RXllLm5hbWUgPSBcIndoaXRlUmlnaHRFeWVcIjtcclxud2hpdGVSaWdodEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMDc1LCAwLjEsIDAuMSwgWy0wLjc1LCAwLjIsIDAuMTVdKTtcclxud2hpdGVSaWdodEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFsxLjA0LCAwLCAtMC4zMl0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbndoaXRlUmlnaHRFeWUucGlja2VkQ29sb3IgPSBbMC45OSwgMC45OSwgMC45OV07XHJcbndoaXRlUmlnaHRFeWUuZGlmZnVzZSA9IFsxLCAxLCAxXTtcclxud2hpdGVSaWdodEV5ZS5zcGVjdWxhciA9IFsxLCAxLCAxXTtcclxud2hpdGVSaWdodEV5ZS5hbWJpZW50ID0gWzEsIDEsIDFdO1xyXG53aGl0ZVJpZ2h0RXllLnBob25nID0gdHJ1ZTtcclxud2hpdGVSaWdodEV5ZS5waG9uZ0FtYmllbnQgPSBbMC45OSwgMC45OSwgMC45OV0sXHJcbndoaXRlUmlnaHRFeWUuc2hpbmluZXNzID0gMSxcclxud2hpdGVSaWdodEV5ZS5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG53aGl0ZVJpZ2h0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbndoaXRlUmlnaHRFeWUuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogbnVsbCxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBudWxsLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxuXHJcbn07XHJcblxyXG5jb25zdCBibGFja1JpZ2h0RXllID0gbmV3IE5vZGUoKTtcclxuYmxhY2tSaWdodEV5ZS5uYW1lID0gXCJibGFja1JpZ2h0RXllXCI7XHJcbmJsYWNrUmlnaHRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjA1LCAwLjA1LCAwLjA1LCBbLTAuNzUsIDAuMiwgMC4xNV0pO1xyXG5ibGFja1JpZ2h0RXllLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuMDYsIDAsIDBdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5ibGFja1JpZ2h0RXllLnBpY2tlZENvbG9yID0gWzAsIDAsIDBdO1xyXG5ibGFja1JpZ2h0RXllLmRpZmZ1c2UgPSBbMSwgMSwgMV07XHJcbmJsYWNrUmlnaHRFeWUuc3BlY3VsYXIgPSBbMSwgMSwgMV07XHJcbmJsYWNrUmlnaHRFeWUuYW1iaWVudCA9IFsxLCAxLCAxXTtcclxuYmxhY2tSaWdodEV5ZS5waG9uZyA9IHRydWU7XHJcbmJsYWNrUmlnaHRFeWUucGhvbmdBbWJpZW50ID0gWzAsMCwwXSxcclxuYmxhY2tSaWdodEV5ZS5zaGluaW5lc3MgPSAxLFxyXG5ibGFja1JpZ2h0RXllLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmJsYWNrUmlnaHRFeWUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuYmxhY2tSaWdodEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBudWxsLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IG51bGwsXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuXHJcblxyXG4vLyBDcmVhdGUgdGhlIGxlZnQgd2luZyBub2RlXHJcbmNvbnN0IGxlZnRXaW5nID0gbmV3IE5vZGUoKTtcclxubGVmdFdpbmcubmFtZSA9IFwibGVmdFdpbmdcIjtcclxubGVmdFdpbmcubW9kZWwgPSBib3hNb2RlbCgwLjUsIDAuMSwgMSwgWzAsIDAsIDBdKTtcclxubGVmdFdpbmcudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMCwgMCwgLTAuNzVdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgOTBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubGVmdFdpbmcucGlja2VkQ29sb3IgPSBbMC43LCAwLjcsIDBdO1xyXG5sZWZ0V2luZy5kaWZmdXNlID0gWzEsIDEsIDFdO1xyXG5sZWZ0V2luZy5zcGVjdWxhciA9IFsxLCAxLCAxXTtcclxubGVmdFdpbmcuYW1iaWVudCA9IFsxLCAxLCAxXTtcclxubGVmdFdpbmcucGhvbmcgPSB0cnVlO1xyXG5sZWZ0V2luZy5waG9uZ0FtYmllbnQgPSBbMC43LCAwLjcsIDBdLFxyXG5sZWZ0V2luZy5zaGluaW5lc3MgPSAxLFxyXG5sZWZ0V2luZy5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5sZWZ0V2luZy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gbGVmdFdpbmdGcmFtZXMoKXtcclxuXHJcbiAgICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgICAgIHRyYW5zbGF0ZTogWzAsIDAsIC0wLjc1XSxcclxuICAgICAgICByb3RhdGU6IFswLCAwLCBNYXRoLlBJIC8gMl0sXHJcbiAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICAgIH1cclxuICAgIGxldCBmcmFtZXMgPSBbXVxyXG4gICAgZm9yKGxldCBrID0gMDsgayA8IDQ7ICsrayl7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8PSAxMjsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IC1NYXRoLlBJIC8gOSArIE1hdGguUEkvOSAqIGkgLyA2O1xyXG4gICAgICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaSA9MCA7IGkgPD0gMTI7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSBNYXRoLlBJIC8gOSAtIE1hdGguUEkvOSAqIGkgLyA2O1xyXG4gICAgICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBmcm9tIC1waS85IHRvIDBcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gNjsgaSsrKXtcclxuICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSAtTWF0aC5QSSAvIDkgKyBNYXRoLlBJLzkgKiBpIC8gNjtcclxuICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTsgXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnJhbWVzO1xyXG5cclxufVxyXG5cclxubGVmdFdpbmcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogbGVmdFdpbmdGcmFtZXMoKSxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuLy8gQ3JlYXRlIHRoZSByaWdodCB3aW5nIG5vZGVcclxuY29uc3QgcmlnaHRXaW5nID0gbmV3IE5vZGUoKTtcclxucmlnaHRXaW5nLm5hbWUgPSBcInJpZ2h0V2luZ1wiO1xyXG5yaWdodFdpbmcubW9kZWwgPSBib3hNb2RlbCgwLjUsIDAuMSwgMSwgWzAsIDAsIDBdKTtcclxucmlnaHRXaW5nLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAsIDAsIDAuNzVdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgOTBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRXaW5nLnBpY2tlZENvbG9yID0gWzAuNywgMC43LCAwXTtcclxucmlnaHRXaW5nLmRpZmZ1c2UgPSBbMSwgMSwgMV07XHJcbnJpZ2h0V2luZy5zcGVjdWxhciA9IFsxLCAxLCAxXTtcclxucmlnaHRXaW5nLmFtYmllbnQgPSBbMSwgMSwgMV07XHJcbnJpZ2h0V2luZy5waG9uZyA9IHRydWU7XHJcbnJpZ2h0V2luZy5waG9uZ0FtYmllbnQgPSBbMC43LCAwLjcsIDBdLFxyXG5yaWdodFdpbmcuc2hpbmluZXNzID0gMSxcclxucmlnaHRXaW5nLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbnJpZ2h0V2luZy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmlnaHRXaW5nRnJhbWVzKCl7XHJcbiAgICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgICAgIHRyYW5zbGF0ZTogWzAsIDAsIDAuNzVdLFxyXG4gICAgICAgIHJvdGF0ZTogWzAsIDAsIE1hdGguUEkgLyAyXSxcclxuICAgICAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG4gICAgfVxyXG4gICAgbGV0IGZyYW1lcyA9IFtdXHJcbiAgICBmb3IobGV0IGsgPSAwOyBrIDwgNDsgKytrKXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDw9IDEyOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gTWF0aC5QSSAvIDkgLSBNYXRoLlBJLzkgKiBpIC8gNjtcclxuICAgICAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGkgPTAgOyBpIDw9IDEyOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gLSBNYXRoLlBJIC8gOSArIE1hdGguUEkvOSAqIGkgLyA2O1xyXG4gICAgICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBmcm9tIHBpLzYgdG8gMFxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8PSA2OyBpKyspe1xyXG4gICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IE1hdGguUEkgLyA5IC0gTWF0aC5QSS85ICogaSAvIDY7XHJcbiAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7IFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZyYW1lcztcclxuXHJcbn1cclxuXHJcbnJpZ2h0V2luZy5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiByaWdodFdpbmdGcmFtZXMoKSxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuLy8gQ3JlYXRlIHRoZSByaWdodCBsZWcgbm9kZVxyXG5jb25zdCByaWdodExlZyA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0TGVnLm5hbWUgPSBcInJpZ2h0TGVnXCI7XHJcbnJpZ2h0TGVnLm1vZGVsID0gYm94TW9kZWwoMC42LCAwLjIsIDAuMiwgWzAsIDAsIDBdKTtcclxucmlnaHRMZWcudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbLTAuNSwgLTAuOCwgLTAuMzVdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5yaWdodExlZy5waWNrZWRDb2xvciA9IFsxLCAwLjUsIDBdO1xyXG5yaWdodExlZy5kaWZmdXNlID0gWzEsIDEsIDFdO1xyXG5yaWdodExlZy5zcGVjdWxhciA9IFsxLCAxLCAxXTtcclxucmlnaHRMZWcuYW1iaWVudCA9IFsxLCAxLCAxXTtcclxucmlnaHRMZWcucGhvbmcgPSB0cnVlO1xyXG5yaWdodExlZy5waG9uZ0FtYmllbnQgPSBbMSwgMC41LCAwXSxcclxucmlnaHRMZWcuc2hpbmluZXNzID0gMSxcclxucmlnaHRMZWcuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxucmlnaHRMZWcudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJpZ2h0TGVnRnJhbWVzKCl7XHJcbiAgICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgICAgIHRyYW5zbGF0ZTogWy0wLjUsIC0wLjgsIC0wLjM1XSxcclxuICAgICAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgICAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG4gICAgfVxyXG4gICAgbGV0IGZyYW1lcyA9IFtdXHJcbiAgICBmb3IobGV0IGsgPSAwOyBrIDwgNDsgKytrKXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDw9IDEyOyBpKyspe1xyXG4gICAgICAgICAgICAvLyBhcHBlbmQgZm9yIGFuZ2xlIHBpLzYgLSBwaS8zICogaS8xMiB0byBmcmFtZXNcclxuICAgICAgICAgICAgLy8gY2xvbmUgdGhlIHRyYW5zZm9ybSBvYmplY3RcclxuICAgICAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVsyXSA9IE1hdGguUEkgLyA2IC0gTWF0aC5QSS8zICogaSAvIDEyO1xyXG4gICAgICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaSA9MCA7IGkgPD0gMTI7IGkrKyl7XHJcbiAgICAgICAgICAgIC8vIGFwcGVuZCBmb3IgYW5nbGUgcGkvNiAqIGkvMTIgdG8gZnJhbWVzXHJcbiAgICAgICAgICAgIC8vIGNsb25lIHRoZSB0cmFuc2Zvcm0gb2JqZWN0XHJcbiAgICAgICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMl0gPSAtIE1hdGguUEkgLyA2ICsgTWF0aC5QSS8zICogaSAvIDEyO1xyXG4gICAgICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBmcm9tIHBpLzYgdG8gMFxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8PSA2OyBpKyspe1xyXG4gICAgICAgIC8vIGFwcGVuZCBmb3IgYW5nbGUgcGkvNiAtIHBpLzMgKiBpLzEyIHRvIGZyYW1lc1xyXG4gICAgICAgIC8vIGNsb25lIHRoZSB0cmFuc2Zvcm0gb2JqZWN0XHJcbiAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzJdID0gTWF0aC5QSSAvIDYgLSBNYXRoLlBJLzYgKiBpIC8gNjtcclxuICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTsgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZyYW1lcztcclxufVxyXG5cclxuXHJcbnJpZ2h0TGVnLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXMgOiByaWdodExlZ0ZyYW1lcygpLFxyXG4gICAgY3VycmVudEZyYW1lIDogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuLy8gY3JldGUgdGhlIHJpZ2h0IGZvb3Qgbm9kZVxyXG5jb25zdCByaWdodEZvb3QgPSBuZXcgTm9kZSgpO1xyXG5yaWdodEZvb3QubmFtZSA9IFwicmlnaHRGb290XCI7XHJcbnJpZ2h0Rm9vdC5tb2RlbCA9IGJveE1vZGVsKDAuMSwgMC40LCAwLjMsIFswLCAwLCAwXSk7XHJcbnJpZ2h0Rm9vdC50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLjAyLCAtMC4zNCwgMF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnJpZ2h0Rm9vdC5waWNrZWRDb2xvciA9IFsxLCAwLjUsIDBdO1xyXG5yaWdodEZvb3QuZGlmZnVzZSA9IFsxLCAxLCAxXTtcclxucmlnaHRGb290LnNwZWN1bGFyID0gWzEsIDEsIDFdO1xyXG5yaWdodEZvb3QuYW1iaWVudCA9IFsxLCAxLCAxXTtcclxucmlnaHRGb290LnBob25nID0gdHJ1ZTtcclxucmlnaHRGb290LnBob25nQW1iaWVudCA9IFsxLCAwLjUsIDBdLFxyXG5yaWdodEZvb3Quc2hpbmluZXNzID0gMSxcclxucmlnaHRGb290LmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbnJpZ2h0Rm9vdC52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5yaWdodEZvb3QuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogbnVsbCxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBudWxsLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbi8vIENyZWF0ZSB0aGUgbGVmdCBsZWcgbm9kZVxyXG5jb25zdCBsZWZ0TGVnID0gbmV3IE5vZGUoKTtcclxubGVmdExlZy5uYW1lID0gXCJsZWZ0TGVnXCI7XHJcbmxlZnRMZWcubW9kZWwgPSBib3hNb2RlbCgwLjYsIDAuMiwgMC4yLCBbMCwgMCwgMF0pO1xyXG5sZWZ0TGVnLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWy0wLjUsIC0wLjgsIDAuMzVdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5sZWZ0TGVnLnBpY2tlZENvbG9yID0gWzEsIDAuNSwgMF07XHJcbmxlZnRMZWcuZGlmZnVzZSA9IFsxLCAxLCAxXTtcclxubGVmdExlZy5zcGVjdWxhciA9IFsxLCAxLCAxXTtcclxubGVmdExlZy5hbWJpZW50ID0gWzEsIDEsIDFdO1xyXG5sZWZ0TGVnLnBob25nID0gdHJ1ZTtcclxubGVmdExlZy5waG9uZ0FtYmllbnQgPSBbMSwgMC41LCAwXSxcclxubGVmdExlZy5zaGluaW5lc3MgPSAxLFxyXG5sZWZ0TGVnLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmxlZnRMZWcudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGxlZnRMZWdGcmFtZXMoKXtcclxuICAgIGxldCB0cmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgdHJhbnNsYXRlOiBbLTAuNSwgLTAuOCwgMC4zNV0sXHJcbiAgICAgICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICAgIH1cclxuICAgIGxldCBmcmFtZXMgPSBbXVxyXG4gICAgZm9yKGxldCBrID0gMDsgayA8IDQ7ICsrayl7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8PSAxMjsgaSsrKXtcclxuICAgICAgICAgICAgLy8gYXBwZW5kIGZvciBhbmdsZSBwaS82IC0gcGkvMyAqIGkvMTIgdG8gZnJhbWVzXHJcbiAgICAgICAgICAgIC8vIGNsb25lIHRoZSB0cmFuc2Zvcm0gb2JqZWN0XHJcbiAgICAgICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMl0gPSAtIE1hdGguUEkgLyA2ICsgTWF0aC5QSS8zICogaSAvIDEyO1xyXG4gICAgICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaSA9MCA7IGkgPD0gMTI7IGkrKyl7XHJcbiAgICAgICAgICAgIC8vIGFwcGVuZCBmb3IgYW5nbGUgcGkvNiAqIGkvMTIgdG8gZnJhbWVzXHJcbiAgICAgICAgICAgIC8vIGNsb25lIHRoZSB0cmFuc2Zvcm0gb2JqZWN0XHJcbiAgICAgICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMl0gPSBNYXRoLlBJIC8gNiAtIE1hdGguUEkvMyAqIGkgLyAxMjtcclxuICAgICAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZnJvbSAtcGkvNiB0byAwXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDw9IDY7IGkrKyl7XHJcbiAgICAgICAgLy8gYXBwZW5kIGZvciBhbmdsZSBwaS82IC0gcGkvMyAqIGkvMTIgdG8gZnJhbWVzXHJcbiAgICAgICAgLy8gY2xvbmUgdGhlIHRyYW5zZm9ybSBvYmplY3RcclxuICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMl0gPSAtTWF0aC5QSSAvIDYgKyBNYXRoLlBJLzYgKiBpIC8gNjtcclxuICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTsgXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnJhbWVzO1xyXG59XHJcblxyXG5sZWZ0TGVnLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXMgOiBsZWZ0TGVnRnJhbWVzKCksXHJcbiAgICBjdXJyZW50RnJhbWUgOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG4vLyBDcmVhdGUgdGhlIGxlZnQgZm9vdCBub2RlXHJcbmNvbnN0IGxlZnRGb290ID0gbmV3IE5vZGUoKTtcclxubGVmdEZvb3QubmFtZSA9IFwibGVmdEZvb3RcIjtcclxubGVmdEZvb3QubW9kZWwgPSBib3hNb2RlbCgwLjEsIDAuNCwgMC4zLCBbMCwgMCwgMF0pO1xyXG5sZWZ0Rm9vdC50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLjAyLCAtMC4zNCwgMF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmxlZnRGb290LnBpY2tlZENvbG9yID0gWzEsIDAuNSwgMF07XHJcbmxlZnRGb290LmRpZmZ1c2UgPSBbMSwgMSwgMV07XHJcbmxlZnRGb290LnNwZWN1bGFyID0gWzEsIDEsIDFdO1xyXG5sZWZ0Rm9vdC5hbWJpZW50ID0gWzEsIDEsIDFdO1xyXG5sZWZ0Rm9vdC5waG9uZyA9IHRydWU7XHJcbmxlZnRGb290LnBob25nQW1iaWVudCA9IFsxLCAwLjUsIDBdLFxyXG5sZWZ0Rm9vdC5zaGluaW5lc3MgPSAxLFxyXG5sZWZ0Rm9vdC5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5sZWZ0Rm9vdC52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5sZWZ0Rm9vdC5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBudWxsLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IG51bGwsXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuLy8gQXNzZW1ibGUgdGhlIGNoaWNrZW4gbW9kZWxcclxuLy8gY2hpY2tlbi5hZGRDaGlsZChoZWFkKTtcclxuLy8gaGVhZC5hZGRDaGlsZChiZWFrKTtcclxuLy8gY2hpY2tlbi5hZGRDaGlsZChsZWZ0V2luZyk7XHJcbi8vIGNoaWNrZW4uYWRkQ2hpbGQocmlnaHRXaW5nKTtcclxuLy8gY2hpY2tlbi5hZGRDaGlsZChsZWZ0TGVnKTtcclxuLy8gY2hpY2tlbi5hZGRDaGlsZChyaWdodExlZyk7XHJcblxyXG4vLyBBc3NlbWJsZSB0aGUgY2hpY2tlbiBtb2RlbFxyXG5oZWFkLnNldFBhcmVudChjaGlja2VuKTtcclxuYmVhay5zZXRQYXJlbnQoaGVhZCk7XHJcbndoaXRlUmlnaHRFeWUuc2V0UGFyZW50KGhlYWQpO1xyXG5ibGFja1JpZ2h0RXllLnNldFBhcmVudCh3aGl0ZVJpZ2h0RXllKTtcclxud2hpdGVMZWZ0RXllLnNldFBhcmVudChoZWFkKTtcclxuYmxhY2tMZWZ0RXllLnNldFBhcmVudCh3aGl0ZUxlZnRFeWUpO1xyXG5sZWZ0V2luZy5zZXRQYXJlbnQoY2hpY2tlbik7XHJcbnJpZ2h0V2luZy5zZXRQYXJlbnQoY2hpY2tlbik7XHJcbmxlZnRMZWcuc2V0UGFyZW50KGNoaWNrZW4pO1xyXG5sZWZ0Rm9vdC5zZXRQYXJlbnQobGVmdExlZyk7XHJcbnJpZ2h0TGVnLnNldFBhcmVudChjaGlja2VuKTtcclxucmlnaHRGb290LnNldFBhcmVudChyaWdodExlZyk7XHJcblxyXG5cclxudmFyIGNoaWNrZW5Nb2RlbCA9IFtcclxuICBjaGlja2VuXHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoaWNrZW5Nb2RlbDtcclxuIiwiaW1wb3J0IE5vZGUgZnJvbSBcIi4uL25vZGUuanNcIjtcclxuaW1wb3J0IHsgZGVnVG9SYWQgfSBmcm9tIFwiLi4vbWF0aC9tYXRoVXRpbHMuanNcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vdXRpbHMvQW5pbWF0aW9uLmpzXCI7XHJcbmltcG9ydCBib3hNb2RlbCwge2dlbmVyYXRlRmFjZXMsIGdlbmVyYXRlTm9ybWFscywgZ2VuZXJhdGVWZXJ0aWNlc30gZnJvbSBcIi4uL2JveE1vZGVsLmpzXCI7XHJcblxyXG5jb25zdCBib2R5Q29sb3IgPSBbMC44ODYsIDAuMzQ1LCAwLjEzM107XHJcbmNvbnN0IHdoaXRlQ29sb3IgPSBbMC45OSwgMC45OSwgMC45OV07XHJcbmNvbnN0IGJsYWNrQ29sb3IgPSBbMCwgMCwgMF07XHJcbmNvbnN0IGJyb3duQ29sb3IgPSBbMC41NDUsIDAuMjcxLCAwLjA3NV07XHJcblxyXG5jb25zdCBmb3ggPSBuZXcgTm9kZSgpO1xyXG5mb3guZmxhZyA9IFwiYXJ0aWN1bGF0ZWRcIjtcclxuZm94Lm5hbWUgPSBcImZveFwiO1xyXG5mb3gubW9kZWwgPSBib3hNb2RlbCgwLjYsIDAuNywgMSwgWzAsIDAsIDBdKTsgXHJcbmZveC50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMCwgMCwgMF0sXHJcbiAgcm90YXRlOiBbMzAsNDUsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmZveC5waWNrZWRDb2xvciA9IGJvZHlDb2xvcjtcclxuZm94LnBob25nID0gdHJ1ZTtcclxuZm94LnBob25nQW1iaWVudCA9IGJvZHlDb2xvcixcclxuZm94LmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5mb3guc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5mb3guYW1iaWVudCA9IFsxLDEsMV0sXHJcbmZveC5zaGluaW5lc3MgPSAxLFxyXG5mb3guY29uc3QgPSB7XHJcbiAgICBrZDogMS4wLFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAwLjUsXHJcbn1cclxuZm94LnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxuZm94LmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGZyYW1lczogZm94RnJhbWVzKCksXHJcbiAgY3VycmVudEZyYW1lOiAwLFxyXG4gIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgaXNBdXRvOiBmYWxzZSxcclxuICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG5mdW5jdGlvbiBmb3hGcmFtZXMoKSB7XHJcbiAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgcm90YXRlOiBbZGVnVG9SYWQoMzApLCBkZWdUb1JhZCg0NSksIGRlZ1RvUmFkKDApXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgfVxyXG4gIGxldCBmcmFtZXMgPSBbXVxyXG4gIGZvcihsZXQgayA9IDA7IGsgPCA1MDsgKytrKXtcclxuICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICBfdHJhbnNmb3JtLnRyYW5zbGF0ZVswXSA9ICBrIC8gNTAgO1xyXG4gICAgICBfdHJhbnNmb3JtLnRyYW5zbGF0ZVsyXSA9ICBrIC8gNTAgO1xyXG4gICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBmcmFtZXM7XHJcblxyXG59XHJcblxyXG5jb25zdCBoZWFkID0gbmV3IE5vZGUoKTtcclxuaGVhZC5uYW1lID0gXCJoZWFkXCI7XHJcbmhlYWQubW9kZWwgPSBib3hNb2RlbCgwLjUsIDAuNSwgMC40LCBbMCwgMCwgMF0pO1xyXG5oZWFkLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLCAwLjEsIDAuN10sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmhlYWQucGlja2VkQ29sb3IgPSBib2R5Q29sb3I7XHJcbmhlYWQucGhvbmcgPSB0cnVlO1xyXG5oZWFkLnBob25nQW1iaWVudCA9IGJvZHlDb2xvcixcclxuaGVhZC5kaWZmdXNlID0gWzEsMSwxXSxcclxuaGVhZC5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbmhlYWQuYW1iaWVudCA9IFsxLDEsMV0sXHJcbmhlYWQuc2hpbmluZXNzID0gMSxcclxuaGVhZC5jb25zdCA9IHtcclxuICAgIGtkOiAxLjAsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDAuNSxcclxufVxyXG5oZWFkLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxuaGVhZC5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCB3aGl0ZVJpZ2h0RXllID0gbmV3IE5vZGUoKTtcclxud2hpdGVSaWdodEV5ZS5uYW1lID0gXCJ3aGl0ZVJpZ2h0RXllXCI7XHJcbndoaXRlUmlnaHRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjEsIDAuMSwgMC4wNSwgWzAsIDAsIDBdKTtcclxud2hpdGVSaWdodEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMC4xNSwgMC4xLCAwLjJdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG53aGl0ZVJpZ2h0RXllLnBpY2tlZENvbG9yID0gd2hpdGVDb2xvcjtcclxud2hpdGVSaWdodEV5ZS5waG9uZyA9IHRydWU7XHJcbndoaXRlUmlnaHRFeWUucGhvbmdBbWJpZW50ID0gd2hpdGVDb2xvcixcclxud2hpdGVSaWdodEV5ZS5kaWZmdXNlID0gWzEsMSwxXSxcclxud2hpdGVSaWdodEV5ZS5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbndoaXRlUmlnaHRFeWUuYW1iaWVudCA9IFsxLDEsMV0sXHJcbndoaXRlUmlnaHRFeWUuc2hpbmluZXNzID0gMSxcclxud2hpdGVSaWdodEV5ZS5jb25zdCA9IHtcclxuICAgIGtkOiAxLjAsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDAuNSxcclxufVxyXG53aGl0ZVJpZ2h0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxud2hpdGVSaWdodEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCB3aGl0ZUxlZnRFeWUgPSBuZXcgTm9kZSgpO1xyXG53aGl0ZUxlZnRFeWUubmFtZSA9IFwid2hpdGVMZWZ0RXllXCI7XHJcbndoaXRlTGVmdEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMSwgMC4xLCAwLjA1LCBbMCwgMCwgMF0pO1xyXG53aGl0ZUxlZnRFeWUudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWy0wLjE1LCAwLjEsIDAuMl0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbndoaXRlTGVmdEV5ZS5waWNrZWRDb2xvciA9IHdoaXRlQ29sb3I7XHJcbndoaXRlTGVmdEV5ZS5waG9uZyA9IHRydWU7XHJcbndoaXRlTGVmdEV5ZS5waG9uZ0FtYmllbnQgPSB3aGl0ZUNvbG9yLFxyXG53aGl0ZUxlZnRFeWUuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbndoaXRlTGVmdEV5ZS5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbndoaXRlTGVmdEV5ZS5hbWJpZW50ID0gWzEsMSwxXSxcclxud2hpdGVMZWZ0RXllLnNoaW5pbmVzcyA9IDEsXHJcbndoaXRlTGVmdEV5ZS5jb25zdCA9IHtcclxuICAgIGtkOiAxLjAsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDAuNSxcclxufVxyXG53aGl0ZUxlZnRFeWUudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG53aGl0ZUxlZnRFeWUuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgYmxhY2tSaWdodEV5ZSA9IG5ldyBOb2RlKCk7XHJcbmJsYWNrUmlnaHRFeWUubmFtZSA9IFwiYmxhY2tSaWdodEV5ZVwiO1xyXG5ibGFja1JpZ2h0RXllLm1vZGVsID0gYm94TW9kZWwoMC4xLCAwLjA2LCAwLjA1LCBbMCwgMCwgMF0pO1xyXG5ibGFja1JpZ2h0RXllLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFstMC4wMywgMCwgMC4wMV0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmJsYWNrUmlnaHRFeWUucGlja2VkQ29sb3IgPSBibGFja0NvbG9yO1xyXG5ibGFja1JpZ2h0RXllLnBob25nID0gdHJ1ZTtcclxuYmxhY2tSaWdodEV5ZS5waG9uZ0FtYmllbnQgPSBibGFja0NvbG9yLFxyXG5ibGFja1JpZ2h0RXllLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5ibGFja1JpZ2h0RXllLnNwZWN1bGFyID0gWzEsMSwxXSxcclxuYmxhY2tSaWdodEV5ZS5hbWJpZW50ID0gWzEsMSwxXSxcclxuYmxhY2tSaWdodEV5ZS5zaGluaW5lc3MgPSAxLFxyXG5ibGFja1JpZ2h0RXllLmNvbnN0ID0ge1xyXG4gICAga2Q6IDEuMCxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMC41LFxyXG59XHJcbmJsYWNrUmlnaHRFeWUudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5ibGFja1JpZ2h0RXllLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IGJsYWNrTGVmdEV5ZSA9IG5ldyBOb2RlKCk7XHJcbmJsYWNrTGVmdEV5ZS5uYW1lID0gXCJibGFja0xlZnRFeWVcIjtcclxuYmxhY2tMZWZ0RXllLm1vZGVsID0gYm94TW9kZWwoMC4xLCAwLjA2LCAwLjA1LCBbMCwgMCwgMF0pO1xyXG5ibGFja0xlZnRFeWUudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAuMDMsIDAsIDAuMDFdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5ibGFja0xlZnRFeWUucGlja2VkQ29sb3IgPSBibGFja0NvbG9yO1xyXG5ibGFja0xlZnRFeWUucGhvbmcgPSB0cnVlO1xyXG5ibGFja0xlZnRFeWUucGhvbmdBbWJpZW50ID0gYmxhY2tDb2xvcixcclxuYmxhY2tMZWZ0RXllLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5ibGFja0xlZnRFeWUuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5ibGFja0xlZnRFeWUuYW1iaWVudCA9IFsxLDEsMV0sXHJcbmJsYWNrTGVmdEV5ZS5zaGluaW5lc3MgPSAxLFxyXG5ibGFja0xlZnRFeWUuY29uc3QgPSB7XHJcbiAgICBrZDogMS4wLFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAwLjUsXHJcbn1cclxuYmxhY2tMZWZ0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxuYmxhY2tMZWZ0RXllLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IG5vc2UgPSBuZXcgTm9kZSgpO1xyXG5ub3NlLm5hbWUgPSBcIm5vc2VcIjtcclxubm9zZS5tb2RlbCA9IGJveE1vZGVsKDAuMTUsIDAuMywgMC4yLCBbMCwgMCwgMF0pO1xyXG5ub3NlLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLCAtMC4xLCAwLjNdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5ub3NlLnBpY2tlZENvbG9yID0gYmxhY2tDb2xvcjtcclxubm9zZS5waG9uZyA9IHRydWU7XHJcbm5vc2UucGhvbmdBbWJpZW50ID0gYmxhY2tDb2xvcixcclxubm9zZS5kaWZmdXNlID0gWzEsMSwxXSxcclxubm9zZS5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbm5vc2UuYW1iaWVudCA9IFsxLDEsMV0sXHJcbm5vc2Uuc2hpbmluZXNzID0gMSxcclxubm9zZS5jb25zdCA9IHtcclxuICAgIGtkOiAxLjAsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDAuNSxcclxufVxyXG5ub3NlLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxubm9zZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCB1bmRlcm5vc2UgPSBuZXcgTm9kZSgpO1xyXG51bmRlcm5vc2UubmFtZSA9IFwidW5kZXJub3NlXCI7XHJcbnVuZGVybm9zZS5tb2RlbCA9IGJveE1vZGVsKDAuMSwgMC4zLCAwLjIsIFswLCAwLCAwXSk7XHJcbnVuZGVybm9zZS50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMCwgLTAuMiwgMC4zXSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxudW5kZXJub3NlLnBpY2tlZENvbG9yID0gd2hpdGVDb2xvcjtcclxudW5kZXJub3NlLnBob25nID0gdHJ1ZTtcclxudW5kZXJub3NlLnBob25nQW1iaWVudCA9IHdoaXRlQ29sb3IsXHJcbnVuZGVybm9zZS5kaWZmdXNlID0gWzEsMSwxXSxcclxudW5kZXJub3NlLnNwZWN1bGFyID0gWzEsMSwxXSxcclxudW5kZXJub3NlLmFtYmllbnQgPSBbMSwxLDFdLFxyXG51bmRlcm5vc2Uuc2hpbmluZXNzID0gMSxcclxudW5kZXJub3NlLmNvbnN0ID0ge1xyXG4gICAga2Q6IDEuMCxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMC41LFxyXG59XHJcbnVuZGVybm9zZS52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbnVuZGVybm9zZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCByaWdodEVhciA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0RWFyLm5hbWUgPSBcInJpZ2h0RWFyXCI7XHJcbnJpZ2h0RWFyLm1vZGVsID0gYm94TW9kZWwoMC4yLCAwLjIsIDAuMSwgWzAsIDAsIDBdKTtcclxucmlnaHRFYXIudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAuMTUsIDAuMzUsIDBdLFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnJpZ2h0RWFyLnBpY2tlZENvbG9yID0gYmxhY2tDb2xvcjtcclxucmlnaHRFYXIucGhvbmcgPSB0cnVlO1xyXG5yaWdodEVhci5waG9uZ0FtYmllbnQgPSBibGFja0NvbG9yLFxyXG5yaWdodEVhci5kaWZmdXNlID0gWzEsMSwxXSxcclxucmlnaHRFYXIuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5yaWdodEVhci5hbWJpZW50ID0gWzEsMSwxXSxcclxucmlnaHRFYXIuc2hpbmluZXNzID0gMSxcclxucmlnaHRFYXIuY29uc3QgPSB7XHJcbiAgICBrZDogMS4wLFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAwLjUsXHJcbn1cclxucmlnaHRFYXIudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5yaWdodEVhci5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCBsZWZ0RWFyID0gbmV3IE5vZGUoKTtcclxubGVmdEVhci5uYW1lID0gXCJsZWZ0RWFyXCI7XHJcbmxlZnRFYXIubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC4xLCBbMCwgMCwgMF0pO1xyXG5sZWZ0RWFyLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFstMC4xNSwgMC4zNSwgMF0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmxlZnRFYXIucGlja2VkQ29sb3IgPSBibGFja0NvbG9yO1xyXG5sZWZ0RWFyLnBob25nID0gdHJ1ZTtcclxubGVmdEVhci5waG9uZ0FtYmllbnQgPSBibGFja0NvbG9yLFxyXG5sZWZ0RWFyLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5sZWZ0RWFyLnNwZWN1bGFyID0gWzEsMSwxXSxcclxubGVmdEVhci5hbWJpZW50ID0gWzEsMSwxXSxcclxubGVmdEVhci5zaGluaW5lc3MgPSAxLFxyXG5sZWZ0RWFyLmNvbnN0ID0ge1xyXG4gICAga2Q6IDEuMCxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMC41LFxyXG59XHJcbmxlZnRFYXIudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5sZWZ0RWFyLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IHJpZ2h0RnJvbnRMZWcgPSBuZXcgTm9kZSgpO1xyXG5yaWdodEZyb250TGVnLm5hbWUgPSBcInJpZ2h0RnJvbnRMZWdcIjtcclxucmlnaHRGcm9udExlZy5tb2RlbCA9IGJveE1vZGVsKDEsIDAuMiwgMC4xNSwgWzAsIDAsIDBdKTtcclxucmlnaHRGcm9udExlZy50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMC4yLCAtMC4yNSwgMC4yXSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRGcm9udExlZy5waWNrZWRDb2xvciA9IGJsYWNrQ29sb3I7XHJcbnJpZ2h0RnJvbnRMZWcucGhvbmcgPSB0cnVlO1xyXG5yaWdodEZyb250TGVnLnBob25nQW1iaWVudCA9IGJsYWNrQ29sb3IsXHJcbnJpZ2h0RnJvbnRMZWcuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbnJpZ2h0RnJvbnRMZWcuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5yaWdodEZyb250TGVnLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5yaWdodEZyb250TGVnLnNoaW5pbmVzcyA9IDEsXHJcbnJpZ2h0RnJvbnRMZWcuY29uc3QgPSB7XHJcbiAgICBrZDogMS4wLFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAwLjUsXHJcbn1cclxucmlnaHRGcm9udExlZy52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbnJpZ2h0RnJvbnRMZWcuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZnJhbWVzOiByaWdodEZyb250TGVnRnJhbWVzKCksXHJcbiAgY3VycmVudEZyYW1lOiAwLFxyXG4gIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgaXNBdXRvOiBmYWxzZSxcclxuICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG5mdW5jdGlvbiByaWdodEZyb250TGVnRnJhbWVzICgpIHtcclxuICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMC4yLCAtMC4yNSwgMC4yXSwgXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgfVxyXG4gIGxldCBmcmFtZXMgPSBbXVxyXG4gIGZvcihsZXQgayA9IDA7IGsgPCAyNTsgKytrKXtcclxuICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IGRlZ1RvUmFkKC1rKTtcclxuICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgfVxyXG5cclxuICBmb3IobGV0IGsgPSAwOyBrIDwgMjU7ICsrayl7XHJcbiAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IGRlZ1RvUmFkKGspO1xyXG4gICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgfVxyXG4gIHJldHVybiBmcmFtZXM7XHJcblxyXG59XHJcblxyXG5jb25zdCByaWdodEZyb250VG9lID0gbmV3IE5vZGUoKTtcclxucmlnaHRGcm9udFRvZS5uYW1lID0gXCJyaWdodEZyb250VG9lXCI7XHJcbnJpZ2h0RnJvbnRUb2UubW9kZWwgPSBib3hNb2RlbCgwLjEsIDAuMiwgMC4yLCBbMCwgMCwgMF0pO1xyXG5yaWdodEZyb250VG9lLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLCAtMC40NSwgMC4wNV0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnJpZ2h0RnJvbnRUb2UucGlja2VkQ29sb3IgPSB3aGl0ZUNvbG9yO1xyXG5yaWdodEZyb250VG9lLnBob25nID0gdHJ1ZTtcclxucmlnaHRGcm9udFRvZS5waG9uZ0FtYmllbnQgPSB3aGl0ZUNvbG9yLFxyXG5yaWdodEZyb250VG9lLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5yaWdodEZyb250VG9lLnNwZWN1bGFyID0gWzEsMSwxXSxcclxucmlnaHRGcm9udFRvZS5hbWJpZW50ID0gWzEsMSwxXSxcclxucmlnaHRGcm9udFRvZS5zaGluaW5lc3MgPSAxLFxyXG5yaWdodEZyb250VG9lLmNvbnN0ID0ge1xyXG4gICAga2Q6IDEuMCxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMC41LFxyXG59XHJcbnJpZ2h0RnJvbnRUb2Uudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5yaWdodEZyb250VG9lLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IGxlZnRGcm9udExlZyA9IG5ldyBOb2RlKCk7XHJcbmxlZnRGcm9udExlZy5uYW1lID0gXCJsZWZ0RnJvbnRMZWdcIjtcclxubGVmdEZyb250TGVnLm1vZGVsID0gYm94TW9kZWwoMSwgMC4yLCAwLjE1LCBbMCwgMCwgMF0pO1xyXG5sZWZ0RnJvbnRMZWcudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWy0wLjIsIC0wLjI1LCAwLjJdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5sZWZ0RnJvbnRMZWcucGlja2VkQ29sb3IgPSBibGFja0NvbG9yO1xyXG5sZWZ0RnJvbnRMZWcucGhvbmcgPSB0cnVlO1xyXG5sZWZ0RnJvbnRMZWcucGhvbmdBbWJpZW50ID0gYmxhY2tDb2xvcixcclxubGVmdEZyb250TGVnLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5sZWZ0RnJvbnRMZWcuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5sZWZ0RnJvbnRMZWcuYW1iaWVudCA9IFsxLDEsMV0sXHJcbmxlZnRGcm9udExlZy5zaGluaW5lc3MgPSAxLFxyXG5sZWZ0RnJvbnRMZWcuY29uc3QgPSB7XHJcbiAgICBrZDogMS4wLFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAwLjUsXHJcbn1cclxubGVmdEZyb250TGVnLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxubGVmdEZyb250TGVnLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGZyYW1lczogbGVmdEZyb250TGVnRnJhbWVzKCksXHJcbiAgY3VycmVudEZyYW1lOiAwLFxyXG4gIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgaXNBdXRvOiBmYWxzZSxcclxuICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG5mdW5jdGlvbiBsZWZ0RnJvbnRMZWdGcmFtZXMgKCkge1xyXG4gIGxldCB0cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFstMC4yLCAtMC4yNSwgMC4yXSwgXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgfVxyXG4gIGxldCBmcmFtZXMgPSBbXVxyXG5cclxuICBmb3IobGV0IGsgPSAwOyBrIDwgMjU7ICsrayl7XHJcbiAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IGRlZ1RvUmFkKGspO1xyXG4gICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgfVxyXG4gIGZvcihsZXQgayA9IDA7IGsgPCAyNTsgKytrKXtcclxuICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gZGVnVG9SYWQoLWspO1xyXG4gICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgfVxyXG4gIHJldHVybiBmcmFtZXM7XHJcblxyXG59XHJcblxyXG5jb25zdCBsZWZ0RnJvbnRUb2UgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0RnJvbnRUb2UubmFtZSA9IFwibGVmdEZyb250VG9lXCI7XHJcbmxlZnRGcm9udFRvZS5tb2RlbCA9IGJveE1vZGVsKDAuMSwgMC4yLCAwLjE1LCBbMCwgMCwgMF0pO1xyXG5sZWZ0RnJvbnRUb2UudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWy0wLCAtMC40NSwgMC4wNV0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmxlZnRGcm9udFRvZS5waWNrZWRDb2xvciA9IHdoaXRlQ29sb3I7XHJcbmxlZnRGcm9udFRvZS5waG9uZyA9IHRydWU7XHJcbmxlZnRGcm9udFRvZS5waG9uZ0FtYmllbnQgPSB3aGl0ZUNvbG9yLFxyXG5sZWZ0RnJvbnRUb2UuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbmxlZnRGcm9udFRvZS5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbmxlZnRGcm9udFRvZS5hbWJpZW50ID0gWzEsMSwxXSxcclxubGVmdEZyb250VG9lLnNoaW5pbmVzcyA9IDEsXHJcbmxlZnRGcm9udFRvZS5jb25zdCA9IHtcclxuICAgIGtkOiAxLjAsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDAuNSxcclxufVxyXG5sZWZ0RnJvbnRUb2Uudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5sZWZ0RnJvbnRUb2UuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgcmlnaHRSZWFyTGVnID0gbmV3IE5vZGUoKTtcclxucmlnaHRSZWFyTGVnLm5hbWUgPSBcInJpZ2h0UmVhckxlZ1wiO1xyXG5yaWdodFJlYXJMZWcubW9kZWwgPSBib3hNb2RlbCgxLCAwLjIsIDAuMTUsIFswLCAwLCAwXSk7XHJcbnJpZ2h0UmVhckxlZy50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMC4yLCAtMC4yNSwgLTAuMl0sXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRSZWFyTGVnLnBpY2tlZENvbG9yID0gYmxhY2tDb2xvcjtcclxucmlnaHRSZWFyTGVnLnBob25nID0gdHJ1ZTtcclxucmlnaHRSZWFyTGVnLnBob25nQW1iaWVudCA9IGJsYWNrQ29sb3IsXHJcbnJpZ2h0UmVhckxlZy5kaWZmdXNlID0gWzEsMSwxXSxcclxucmlnaHRSZWFyTGVnLnNwZWN1bGFyID0gWzEsMSwxXSxcclxucmlnaHRSZWFyTGVnLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5yaWdodFJlYXJMZWcuc2hpbmluZXNzID0gMSxcclxucmlnaHRSZWFyTGVnLmNvbnN0ID0ge1xyXG4gICAga2Q6IDEuMCxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMC41LFxyXG59XHJcbnJpZ2h0UmVhckxlZy52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbnJpZ2h0UmVhckxlZy5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiByaWdodFJlYXJMZWdGcmFtZXMoKSxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmlnaHRSZWFyTGVnRnJhbWVzKCkge1xyXG4gIGxldCB0cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLjIsIC0wLjI1LCAtMC4yXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICB9XHJcbiAgbGV0IGZyYW1lcyA9IFtdXHJcbiAgZm9yKGxldCBrID0gMDsgayA8IDI1OyArK2spe1xyXG4gICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSBkZWdUb1JhZChrIC0gMjApO1xyXG4gICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgfVxyXG4gIGZvcihsZXQgayA9IDA7IGsgPCAyNTsgKytrKXtcclxuICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IGRlZ1RvUmFkKC1rICsgMjApO1xyXG4gICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICB9XHJcblxyXG4gIFxyXG5cclxuICByZXR1cm4gZnJhbWVzO1xyXG59XHJcblxyXG5jb25zdCByaWdodFJlYXJUb2UgPSBuZXcgTm9kZSgpO1xyXG5yaWdodFJlYXJUb2UubmFtZSA9IFwicmlnaHRSZWFyVG9lXCI7XHJcbnJpZ2h0UmVhclRvZS5tb2RlbCA9IGJveE1vZGVsKDAuMSwgMC4yLCAwLjIsIFswLCAwLCAwXSk7XHJcbnJpZ2h0UmVhclRvZS50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMCwgLTAuNDUsIDAuMDVdLFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnJpZ2h0UmVhclRvZS5waWNrZWRDb2xvciA9IHdoaXRlQ29sb3I7XHJcbnJpZ2h0UmVhclRvZS5waG9uZyA9IHRydWU7XHJcbnJpZ2h0UmVhclRvZS5waG9uZ0FtYmllbnQgPSB3aGl0ZUNvbG9yLFxyXG5yaWdodFJlYXJUb2UuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbnJpZ2h0UmVhclRvZS5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbnJpZ2h0UmVhclRvZS5hbWJpZW50ID0gWzEsMSwxXSxcclxucmlnaHRSZWFyVG9lLnNoaW5pbmVzcyA9IDEsXHJcbnJpZ2h0UmVhclRvZS5jb25zdCA9IHtcclxuICAgIGtkOiAxLjAsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDAuNSxcclxufVxyXG5yaWdodFJlYXJUb2Uudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5yaWdodFJlYXJUb2UuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgbGVmdFJlYXJMZWcgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0UmVhckxlZy5uYW1lID0gXCJsZWZ0UmVhckxlZ1wiO1xyXG5sZWZ0UmVhckxlZy5tb2RlbCA9IGJveE1vZGVsKDEsIDAuMiwgMC4xNSwgWzAsIDAsIDBdKTtcclxubGVmdFJlYXJMZWcudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWy0wLjIsIC0wLjI1LCAtMC4yXSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubGVmdFJlYXJMZWcucGlja2VkQ29sb3IgPSBibGFja0NvbG9yO1xyXG5sZWZ0UmVhckxlZy5waG9uZyA9IHRydWU7XHJcbmxlZnRSZWFyTGVnLnBob25nQW1iaWVudCA9IGJsYWNrQ29sb3IsXHJcbmxlZnRSZWFyTGVnLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5sZWZ0UmVhckxlZy5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbmxlZnRSZWFyTGVnLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5sZWZ0UmVhckxlZy5zaGluaW5lc3MgPSAxLFxyXG5sZWZ0UmVhckxlZy5jb25zdCA9IHtcclxuICAgIGtkOiAxLjAsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDAuNSxcclxufVxyXG5sZWZ0UmVhckxlZy52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbmxlZnRSZWFyTGVnLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGZyYW1lczogbGVmdFJlYXJMZWdGcmFtZXMoKSxcclxuICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICBpc0F1dG86IGZhbHNlLFxyXG4gIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbmZ1bmN0aW9uIGxlZnRSZWFyTGVnRnJhbWVzKCkge1xyXG4gIGxldCB0cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFstMC4yLCAtMC4yNSwgLTAuMl0sIFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG4gIH1cclxuICBsZXQgZnJhbWVzID0gW11cclxuICBmb3IobGV0IGsgPSAwOyBrIDwgMjU7ICsrayl7XHJcbiAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSBkZWdUb1JhZCgtayArIDIwKTtcclxuICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgfVxyXG5cclxuICBmb3IobGV0IGsgPSAwOyBrIDwgMjU7ICsrayl7XHJcbiAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IGRlZ1RvUmFkKGsgLSAyMCk7XHJcbiAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICB9XHJcbiAgcmV0dXJuIGZyYW1lcztcclxufVxyXG5cclxuY29uc3QgbGVmdFJlYXJUb2UgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0UmVhclRvZS5uYW1lID0gXCJsZWZ0UmVhclRvZVwiO1xyXG5sZWZ0UmVhclRvZS5tb2RlbCA9IGJveE1vZGVsKDAuMSwgMC4yLCAwLjIsIFswLCAwLCAwXSk7XHJcbmxlZnRSZWFyVG9lLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFstMCwgLTAuNDUsIDAuMDVdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5sZWZ0UmVhclRvZS5waWNrZWRDb2xvciA9IHdoaXRlQ29sb3I7XHJcbmxlZnRSZWFyVG9lLnBob25nID0gdHJ1ZTtcclxubGVmdFJlYXJUb2UucGhvbmdBbWJpZW50ID0gd2hpdGVDb2xvcixcclxubGVmdFJlYXJUb2UuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbmxlZnRSZWFyVG9lLnNwZWN1bGFyID0gWzEsMSwxXSxcclxubGVmdFJlYXJUb2UuYW1iaWVudCA9IFsxLDEsMV0sXHJcbmxlZnRSZWFyVG9lLnNoaW5pbmVzcyA9IDEsXHJcbmxlZnRSZWFyVG9lLmNvbnN0ID0ge1xyXG4gICAga2Q6IDEuMCxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMC41LFxyXG59XHJcbmxlZnRSZWFyVG9lLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxubGVmdFJlYXJUb2UuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgdGFpbCA9IG5ldyBOb2RlKCk7XHJcbnRhaWwubmFtZSA9IFwidGFpbFwiO1xyXG50YWlsLm1vZGVsID0gYm94TW9kZWwoMC4yLCAwLjIsIDAuNCwgWzAsIDAsIDBdKTtcclxudGFpbC50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMCwgMCwgLTAuNjVdLFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnRhaWwucGlja2VkQ29sb3IgPSBib2R5Q29sb3I7XHJcbnRhaWwucGhvbmcgPSB0cnVlO1xyXG50YWlsLnBob25nQW1iaWVudCA9IGJvZHlDb2xvcixcclxudGFpbC5kaWZmdXNlID0gWzEsMSwxXSxcclxudGFpbC5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbnRhaWwuYW1iaWVudCA9IFsxLDEsMV0sXHJcbnRhaWwuc2hpbmluZXNzID0gMSxcclxudGFpbC5jb25zdCA9IHtcclxuICAgIGtkOiAxLjAsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDAuNSxcclxufVxyXG50YWlsLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxudGFpbC5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCB0YWlsZWRnZSA9IG5ldyBOb2RlKCk7XHJcbnRhaWxlZGdlLm5hbWUgPSBcInRhaWxlZGdlXCI7XHJcbnRhaWxlZGdlLm1vZGVsID0gYm94TW9kZWwoMC4yLCAwLjIsIDAuMiwgWzAsIDAsIDBdKTtcclxudGFpbGVkZ2UudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAsIDAsIC0wLjk1XSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxudGFpbGVkZ2UucGlja2VkQ29sb3IgPSB3aGl0ZUNvbG9yO1xyXG50YWlsZWRnZS5waG9uZyA9IHRydWU7XHJcbnRhaWxlZGdlLnBob25nQW1iaWVudCA9IHdoaXRlQ29sb3IsXHJcbnRhaWxlZGdlLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG50YWlsZWRnZS5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbnRhaWxlZGdlLmFtYmllbnQgPSBbMSwxLDFdLFxyXG50YWlsZWRnZS5zaGluaW5lc3MgPSAxLFxyXG50YWlsZWRnZS5jb25zdCA9IHtcclxuICAgIGtkOiAxLjAsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDAuNSxcclxufVxyXG50YWlsZWRnZS52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbnRhaWxlZGdlLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmhlYWQuc2V0UGFyZW50KGZveCk7XHJcbnJpZ2h0RWFyLnNldFBhcmVudChoZWFkKTtcclxubGVmdEVhci5zZXRQYXJlbnQoaGVhZCk7XHJcbndoaXRlUmlnaHRFeWUuc2V0UGFyZW50KGhlYWQpO1xyXG53aGl0ZUxlZnRFeWUuc2V0UGFyZW50KGhlYWQpO1xyXG5ibGFja1JpZ2h0RXllLnNldFBhcmVudCh3aGl0ZVJpZ2h0RXllKTtcclxuYmxhY2tMZWZ0RXllLnNldFBhcmVudCh3aGl0ZUxlZnRFeWUpO1xyXG5ub3NlLnNldFBhcmVudChoZWFkKTtcclxudW5kZXJub3NlLnNldFBhcmVudChoZWFkKTtcclxucmlnaHRGcm9udExlZy5zZXRQYXJlbnQoZm94KTtcclxucmlnaHRGcm9udFRvZS5zZXRQYXJlbnQocmlnaHRGcm9udExlZyk7XHJcbmxlZnRGcm9udExlZy5zZXRQYXJlbnQoZm94KTtcclxubGVmdEZyb250VG9lLnNldFBhcmVudChsZWZ0RnJvbnRMZWcpO1xyXG5yaWdodFJlYXJMZWcuc2V0UGFyZW50KGZveCk7XHJcbnJpZ2h0UmVhclRvZS5zZXRQYXJlbnQocmlnaHRSZWFyTGVnKTtcclxubGVmdFJlYXJMZWcuc2V0UGFyZW50KGZveCk7XHJcbmxlZnRSZWFyVG9lLnNldFBhcmVudChsZWZ0UmVhckxlZyk7XHJcbnRhaWwuc2V0UGFyZW50KGZveCk7XHJcbnRhaWxlZGdlLnNldFBhcmVudChmb3gpO1xyXG5cclxudmFyIGZveE1vZGVsID0gW1xyXG4gIGZveFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm94TW9kZWw7XHJcbiIsImltcG9ydCBOb2RlIGZyb20gXCIuLi9ub2RlLmpzXCI7XHJcbmltcG9ydCB7IGRlZ1RvUmFkIH0gZnJvbSBcIi4uL21hdGgvbWF0aFV0aWxzLmpzXCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uL3V0aWxzL0FuaW1hdGlvbi5qc1wiO1xyXG5pbXBvcnQgYm94TW9kZWwsIHtnZW5lcmF0ZUZhY2VzLCBnZW5lcmF0ZU5vcm1hbHMsIGdlbmVyYXRlVmVydGljZXN9IGZyb20gXCIuLi9ib3hNb2RlbC5qc1wiO1xyXG5cclxuZnVuY3Rpb24gaG9sbG93VGhpbmd5KCkge1xyXG4gICAgbGV0IHZlcnRpY2VzID0gW107XHJcbiAgICBsZXQgY29sb3JzID0gW107XHJcbiAgICBsZXQgdGFuZ2VudHMgPSBbXTtcclxuICAgIGxldCBiaXRhbmdlbnRzID0gW107XHJcbiAgICBsZXQgbm9ybWFscyA9IFtdO1xyXG4gICAgbGV0IHRleENvb3JkID0gW107XHJcbiAgICBsZXQgZmFjZXMgPSBnZW5lcmF0ZUZhY2VzKCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGJveGVzID0gW1xyXG4gICAgICB7IHNpemU6IFswLjIsIDAuOCwgMC4yXSwgcG9zaXRpb246IFswLCAxLCAwXSB9LFxyXG4gICAgICB7IHNpemU6IFswLjIsIDAuOCwgMC4yXSwgcG9zaXRpb246IFswLCAtMSwgMF0gfSxcclxuICAgICAgeyBzaXplOiBbMS44LCAwLjIsIDAuMl0sIHBvc2l0aW9uOiBbLTAuMywgMCwgMF0gfSxcclxuICAgICAgeyBzaXplOiBbMS44LCAwLjIsIDAuMl0sIHBvc2l0aW9uOiBbMC4zLCAwLCAwXSB9LFxyXG4gICAgICB7IHNpemU6IFswLjIsIDEuOCwgMC4yXSwgcG9zaXRpb246IFswLCAwLCAwLjNdIH0sXHJcbiAgICAgIHsgc2l6ZTogWzAuMiwgMS44LCAwLjJdLCBwb3NpdGlvbjogWzAsIDAsIC0wLjNdIH0sXHJcbiAgICAgIHsgc2l6ZTogWzAuMiwgMC4yLCAwLjhdLCBwb3NpdGlvbjogWzEsIDAsIDBdIH0sXHJcbiAgICAgIHsgc2l6ZTogWzAuMiwgMC4yLCAwLjhdLCBwb3NpdGlvbjogWy0xLCAwLCAwXSB9LFxyXG4gICAgICB7IHNpemU6IFswLjgsIDAuMiwgMC4yXSwgcG9zaXRpb246IFswLCAwLCAxXSB9LFxyXG4gICAgICB7IHNpemU6IFswLjgsIDAuMiwgMC4yXSwgcG9zaXRpb246IFswLCAwLCAtMV0gfSxcclxuICAgICAgeyBzaXplOiBbMC4yLCAwLjIsIDEuOF0sIHBvc2l0aW9uOiBbMCwgMC4zLCAwXSB9LFxyXG4gICAgICB7IHNpemU6IFswLjIsIDAuMiwgMS44XSwgcG9zaXRpb246IFswLCAtMC4zLCAwXSB9XHJcbiAgICBdO1xyXG4gICAgXHJcbiAgICBib3hlcy5mb3JFYWNoKGJveCA9PiB7XHJcbiAgICAgIGxldCB2ZXJ0aWNlc0JveCA9IGdlbmVyYXRlVmVydGljZXMoLi4uYm94LnNpemUsIGJveC5wb3NpdGlvbik7XHJcbiAgICAgIGxldCBub3JtYWxzQm94ID0gZ2VuZXJhdGVOb3JtYWxzKHZlcnRpY2VzQm94LCBmYWNlcyk7XHJcbiAgICAgIG5vcm1hbHMgPSBub3JtYWxzLmNvbmNhdChub3JtYWxzQm94KTtcclxuICAgICAgdmVydGljZXMgPSB2ZXJ0aWNlcy5jb25jYXQodG9WZXJ0aWNlcyh2ZXJ0aWNlc0JveCwgZmFjZXMpKTtcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmVydGljZXM6IHZlcnRpY2VzLFxyXG4gICAgICBmYWNlczogZmFjZXMsXHJcbiAgICAgIHRhbmdlbnRzOiB0YW5nZW50cyxcclxuICAgICAgYml0YW5nZW50czogYml0YW5nZW50cyxcclxuICAgICAgbm9ybWFsczogbm9ybWFscyxcclxuICAgICAgY29sb3JzOiBjb2xvcnMsXHJcbiAgICAgIHRleENvb3JkOiB0ZXhDb29yZCxcclxuICAgIH07XHJcbn1cclxuICBcclxuY29uc3QgaG9sbG93ID0gbmV3IE5vZGUoKTtcclxuaG9sbG93LmZsYWcgPSBcImhvbGxvd1wiO1xyXG5ob2xsb3cubmFtZSA9IFwiSG9sbG93IFRoaW5neVwiO1xyXG5ob2xsb3cubW9kZWwgPSBob2xsb3dUaGluZ3koKTtcclxuaG9sbG93LnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLCAwLCAwXSxcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5ob2xsb3cucGlja2VkQ29sb3IgPSByYW5kb21Db2xvcnMoKSxcclxuaG9sbG93LmFtYmllbnQgPSBbMSwxLDFdO1xyXG5ob2xsb3cucGhvbmcgPSB0cnVlO1xyXG5ob2xsb3cucGhvbmdBbWJpZW50ID0gWzAsMCwwXSxcclxuaG9sbG93LmRpZmZ1c2UgPSBbMSwxLDFdO1xyXG5ob2xsb3cuc3BlY3VsYXIgPSBbMSwxLDFdO1xyXG5ob2xsb3cuc2hpbmluZXNzID0gMTtcclxuaG9sbG93LmNvbnN0ID0ge1xyXG4gICAga2Q6IDEuMCxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59O1xyXG5ob2xsb3cudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuaG9sbG93LmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IHRydWUsXHJcbiAgZnJhbWVzOiBob2xsb3dGcmFtZXMoKSxcclxuICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICBpc0F1dG86IHRydWUsXHJcbiAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuZnVuY3Rpb24gaG9sbG93RnJhbWVzICgpIHtcclxuICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMCwgMCwgMF0sXHJcbiAgICByb3RhdGU6IFtkZWdUb1JhZCgwKSwgZGVnVG9SYWQoMCksIGRlZ1RvUmFkKDApXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgfVxyXG4gIGxldCBmcmFtZXMgPSBbXVxyXG4gIGZvcihsZXQgayA9IDA7IGsgPCAzNjE7ICsrayl7XHJcbiAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSBkZWdUb1JhZChrKTtcclxuICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMV0gPSBkZWdUb1JhZChrKTtcclxuICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMl0gPSBkZWdUb1JhZChrKTtcclxuICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZnJhbWVzO1xyXG59XHJcblxyXG52YXIgaG9sbG93TW9kZWwgPSBbXHJcbiAgICBob2xsb3dcclxuXVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbGxvd01vZGVsOyIsImltcG9ydCBOb2RlIGZyb20gXCIuLi9ub2RlLmpzXCI7XHJcbmltcG9ydCB7IGRlZ1RvUmFkIH0gZnJvbSBcIi4uL21hdGgvbWF0aFV0aWxzLmpzXCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uL3V0aWxzL0FuaW1hdGlvbi5qc1wiO1xyXG5pbXBvcnQgYm94TW9kZWwgZnJvbSBcIi4uL2JveE1vZGVsLmpzXCI7XHJcblxyXG5cclxuY29uc3QgcGlnID0gbmV3IE5vZGUoKTtcclxucGlnLmZsYWcgPSBcImFydGljdWxhdGVkXCI7XHJcbnBpZy5uYW1lID0gXCJwaWdcIjtcclxucGlnLm1vZGVsID0gYm94TW9kZWwoMSwgMS41LCAxLCBbMCwgMCwgMF0pO1xyXG5waWcudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG4gIHJvdGF0ZTogWzEwLCA1OSwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucGlnLnBpY2tlZENvbG9yID0gWzAuOTIxNTY4NjI3LDAuNTY4NjI3NDUxLDAuODk4MDM5MjE2XSxcclxucGlnLmFtYmllbnQgPSBbMSwxLDFdO1xyXG5waWcucGhvbmcgPSB0cnVlO1xyXG5waWcucGhvbmdBbWJpZW50ID0gWzAuOTIxNTY4NjI3LDAuNTY4NjI3NDUxLDAuODk4MDM5MjE2XSxcclxucGlnLmRpZmZ1c2UgPSBbMSwxLDFdO1xyXG5waWcuc3BlY3VsYXIgPSBbMSwxLDFdO1xyXG5waWcuc2hpbmluZXNzID0gMTtcclxucGlnLmNvbnN0ID0ge1xyXG4gICAga2Q6IDEuMCxcclxuICAgIGtzOiAxLjAsXHJcbiAgICBrYTogMC41LFxyXG59O1xyXG5waWcudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxucGlnLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IHBpZ0ZyYW1lcygpLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gcGlnRnJhbWVzKCkge1xyXG4gICAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgICAgICB0cmFuc2xhdGU6IFswLCAwLCAwXSxcclxuICAgICAgICByb3RhdGU6IFtkZWdUb1JhZCgxMCksIGRlZ1RvUmFkKDU5KSwgZGVnVG9SYWQoMCldLFxyXG4gICAgICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgICB9XHJcbiAgICBsZXQgZnJhbWVzID0gW11cclxuICAgIGZvcihsZXQgayA9IDA7IGsgPCAyNTsgKytrKXtcclxuICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgX3RyYW5zZm9ybS50cmFuc2xhdGVbMV0gPSBrIC8gMjU7XHJcbiAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBmcmFtZXM7XHJcbn1cclxuXHJcbmNvbnN0IGhlYWQgPSBuZXcgTm9kZSgpO1xyXG5oZWFkLm5hbWUgPSBcImhlYWRcIjtcclxuaGVhZC5tb2RlbCA9IGJveE1vZGVsKDEsIDEsIDEuMiwgWy0xLCAwLjYsIDBdKTtcclxuaGVhZC50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLCAwLCAwXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuaGVhZC5waWNrZWRDb2xvciA9IFswLjkyMTU2ODYyNywwLjU2ODYyNzQ1MSwwLjg5ODAzOTIxNl0sXHJcbmhlYWQuYW1iaWVudCA9IFsxLDEsMV07XHJcbmhlYWQucGhvbmcgPSB0cnVlO1xyXG5oZWFkLnBob25nQW1iaWVudCA9IFswLjkyMTU2ODYyNywwLjU2ODYyNzQ1MSwwLjg5ODAzOTIxNl0sXHJcbmhlYWQuZGlmZnVzZSA9IFsxLDEsMV07XHJcbmhlYWQuc3BlY3VsYXIgPSBbMSwxLDFdO1xyXG5oZWFkLnNoaW5pbmVzcyA9IDE7XHJcbmhlYWQuY29uc3QgPSB7XHJcbiAgICBrZDogMS4wLFxyXG4gICAga3M6IDEuMCxcclxuICAgIGthOiAwLjUsXHJcbn07XHJcbmhlYWQudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuaGVhZC5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBoZWFkRnJhbWVzKCksXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogQW5pbWF0aW9uLmFuaW1hdGlvblNjcmlwdCgpLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuaGVhZC5waG9uZyA9IHRydWU7XHJcblxyXG5mdW5jdGlvbiBoZWFkRnJhbWVzKCkge1xyXG4gICAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgICAgICB0cmFuc2xhdGU6IFswLCAwLCAwXSxcclxuICAgICAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgICAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG4gICAgfVxyXG4gICAgbGV0IGZyYW1lcyA9IFtdXHJcbiAgICBmb3IobGV0IGsgPSAwOyBrIDwgMjU7ICsrayl7XHJcbiAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzJdID0gLWsgLyAxMDA7XHJcbiAgICAgICAgX3RyYW5zZm9ybS5zY2FsZVswXSA9IDEgKyBrIC8gNTA7XHJcbiAgICAgICAgX3RyYW5zZm9ybS5zY2FsZVsxXSA9IDEgKyBrIC8gNTA7XHJcbiAgICAgICAgX3RyYW5zZm9ybS5zY2FsZVsyXSA9IDEgKyBrIC8gNTA7XHJcbiAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiBmcmFtZXM7XHJcbn1cclxuXHJcbmNvbnN0IHdoaXRlUmlnaHRFeWUgPSBuZXcgTm9kZSgpO1xyXG53aGl0ZVJpZ2h0RXllLm5hbWUgPSBcIndoaXRlUmlnaHRFeWVcIjtcclxud2hpdGVSaWdodEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMiwgMC4yLCAwLjIsIFstMSwgMC42LCAwXSk7XHJcbndoaXRlUmlnaHRFeWUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbLTAuNSwgMC4yLCAwLjRdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG53aGl0ZVJpZ2h0RXllLnBpY2tlZENvbG9yID0gWzAuOTksMC45OSwwLjk5XSxcclxud2hpdGVSaWdodEV5ZS5hbWJpZW50ID0gWzEsMSwxXTtcclxud2hpdGVSaWdodEV5ZS5waG9uZyA9IHRydWU7XHJcbndoaXRlUmlnaHRFeWUucGhvbmdBbWJpZW50ID0gWzAuOTksMC45OSwwLjk5XSxcclxud2hpdGVSaWdodEV5ZS5kaWZmdXNlID0gWzEsMSwxXTtcclxud2hpdGVSaWdodEV5ZS5zcGVjdWxhciA9IFsxLDEsMV07XHJcbndoaXRlUmlnaHRFeWUuc2hpbmluZXNzID0gMTtcclxud2hpdGVSaWdodEV5ZS5jb25zdCA9IHtcclxuICAgIGtkOiAxLjAsXHJcbiAgICBrczogMS4wLFxyXG4gICAga2E6IDAuNSxcclxufTtcclxud2hpdGVSaWdodEV5ZS52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG53aGl0ZVJpZ2h0RXllLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcbndoaXRlUmlnaHRFeWUucGhvbmcgPSB0cnVlO1xyXG5cclxuY29uc3Qgd2hpdGVMZWZ0RXllID0gbmV3IE5vZGUoKTtcclxud2hpdGVMZWZ0RXllLm5hbWUgPSBcIndoaXRlTGVmdEV5ZVwiO1xyXG53aGl0ZUxlZnRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC4yLCBbLTEsIDAuNiwgMF0pO1xyXG53aGl0ZUxlZnRFeWUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbLTAuNSwgMC4yLCAtMC40XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxud2hpdGVMZWZ0RXllLnBpY2tlZENvbG9yID0gWzAuOTksMC45OSwwLjk5XSxcclxud2hpdGVMZWZ0RXllLmFtYmllbnQgPSBbMSwxLDFdO1xyXG53aGl0ZUxlZnRFeWUucGhvbmcgPSB0cnVlO1xyXG53aGl0ZUxlZnRFeWUucGhvbmdBbWJpZW50ID0gWzAuOTksMC45OSwwLjk5XSxcclxud2hpdGVMZWZ0RXllLmRpZmZ1c2UgPSBbMSwxLDFdO1xyXG53aGl0ZUxlZnRFeWUuc3BlY3VsYXIgPSBbMSwxLDFdO1xyXG53aGl0ZUxlZnRFeWUuc2hpbmluZXNzID0gMTtcclxud2hpdGVMZWZ0RXllLmNvbnN0ID0ge1xyXG4gICAga2Q6IDEuMCxcclxuICAgIGtzOiAxLjAsXHJcbiAgICBrYTogMC41LFxyXG59O1xyXG53aGl0ZUxlZnRFeWUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxud2hpdGVMZWZ0RXllLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcbndoaXRlTGVmdEV5ZS5waG9uZyA9IHRydWU7XHJcblxyXG5jb25zdCBibGFja1JpZ2h0RXllID0gbmV3IE5vZGUoKTtcclxuYmxhY2tSaWdodEV5ZS5uYW1lID0gXCJibGFja1JpZ2h0RXllXCI7XHJcbmJsYWNrUmlnaHRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC4yLCBbLTEsIDAuNiwgMF0pO1xyXG5ibGFja1JpZ2h0RXllLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuMDUsIDAsIDAuMDc1XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuYmxhY2tSaWdodEV5ZS5waWNrZWRDb2xvciA9IFswLDAsMF0sXHJcbmJsYWNrUmlnaHRFeWUuYW1iaWVudCA9IFsxLDEsMV07XHJcbmJsYWNrUmlnaHRFeWUucGhvbmcgPSB0cnVlO1xyXG5ibGFja1JpZ2h0RXllLnBob25nQW1iaWVudCA9IFswLDAsMF0sXHJcbmJsYWNrUmlnaHRFeWUuZGlmZnVzZSA9IFsxLDEsMV07XHJcbmJsYWNrUmlnaHRFeWUuc3BlY3VsYXIgPSBbMSwxLDFdO1xyXG5ibGFja1JpZ2h0RXllLnNoaW5pbmVzcyA9IDE7XHJcbmJsYWNrUmlnaHRFeWUuY29uc3QgPSB7XHJcbiAgICBrZDogMS4wLFxyXG4gICAga3M6IDEuMCxcclxuICAgIGthOiAwLjUsXHJcbn07XHJcbmJsYWNrUmlnaHRFeWUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuYmxhY2tSaWdodEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5ibGFja1JpZ2h0RXllLnBob25nID0gdHJ1ZTtcclxuXHJcbmNvbnN0IGJsYWNrTGVmdEV5ZSA9IG5ldyBOb2RlKCk7XHJcbmJsYWNrTGVmdEV5ZS5uYW1lID0gXCJibGFja0xlZnRFeWVcIjtcclxuYmxhY2tMZWZ0RXllLm1vZGVsID0gYm94TW9kZWwoMC4yLCAwLjIsIDAuMiwgWy0xLCAwLjYsIDBdKTtcclxuYmxhY2tMZWZ0RXllLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuMDUsIDAsIC0wLjA3NV0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmJsYWNrTGVmdEV5ZS5waWNrZWRDb2xvciA9IFswLDAsMF0sXHJcbmJsYWNrTGVmdEV5ZS5hbWJpZW50ID0gWzEsMSwxXTtcclxuYmxhY2tMZWZ0RXllLnBob25nID0gdHJ1ZTtcclxuYmxhY2tMZWZ0RXllLnBob25nQW1iaWVudCA9IFswLDAsMF0sXHJcbmJsYWNrTGVmdEV5ZS5kaWZmdXNlID0gWzEsMSwxXTtcclxuYmxhY2tMZWZ0RXllLnNwZWN1bGFyID0gWzEsMSwxXTtcclxuYmxhY2tMZWZ0RXllLnNoaW5pbmVzcyA9IDE7XHJcbmJsYWNrTGVmdEV5ZS5jb25zdCA9IHtcclxuICAgIGtkOiAxLjAsXHJcbiAgICBrczogMS4wLFxyXG4gICAga2E6IDAuNSxcclxufTtcclxuYmxhY2tMZWZ0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmJsYWNrTGVmdEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5ibGFja0xlZnRFeWUucGhvbmcgPSB0cnVlO1xyXG5cclxuY29uc3Qgbm9zZSA9IG5ldyBOb2RlKCk7XHJcbm5vc2UubmFtZSA9IFwibm9zZVwiO1xyXG5ub3NlLm1vZGVsID0gYm94TW9kZWwoMC4yLCAwLjIsIDAuNCwgWy0xLjUsIDAuNTUsIDBdKTtcclxubm9zZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLjA1LCAwLCAwXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubm9zZS5waWNrZWRDb2xvciA9IFswLjc2ODYyNzQ1MSwwLjM3NjQ3MDU4OCwgMC43NDUwOTgwMzldLFxyXG5ub3NlLmFtYmllbnQgPSBbMSwxLDFdO1xyXG5ub3NlLnBob25nID0gdHJ1ZTtcclxubm9zZS5waG9uZ0FtYmllbnQgPSBbMC43Njg2Mjc0NTEsMC4zNzY0NzA1ODgsIDAuNzQ1MDk4MDM5XSxcclxubm9zZS5kaWZmdXNlID0gWzEsMSwxXTtcclxubm9zZS5zcGVjdWxhciA9IFsxLDEsMV07XHJcbm5vc2Uuc2hpbmluZXNzID0gMTtcclxubm9zZS5jb25zdCA9IHtcclxuICAgIGtkOiAxLjAsXHJcbiAgICBrczogMS4wLFxyXG4gICAga2E6IDAuNSxcclxufTtcclxubm9zZS52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5ub3NlLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcbm5vc2UucGhvbmcgPSB0cnVlO1xyXG5cclxuY29uc3QgcmlnaHRIb2xlID0gbmV3IE5vZGUoKTtcclxucmlnaHRIb2xlLm5hbWUgPSBcInJpZ2h0SG9sZVwiO1xyXG5yaWdodEhvbGUubW9kZWwgPSBib3hNb2RlbCgwLjE1LCAwLjIsIDAuMSwgWy0xLjYsIDAuNTUsIDBdKTtcclxucmlnaHRIb2xlLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuMDUsIDAsIDAuMV0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnJpZ2h0SG9sZS5waWNrZWRDb2xvciA9IFswLjkyMTU2ODYyNywwLjU2ODYyNzQ1MSwwLjg5ODAzOTIxNl0sXHJcbnJpZ2h0SG9sZS5hbWJpZW50ID0gWzEsMSwxXTtcclxucmlnaHRIb2xlLnBob25nID0gdHJ1ZTtcclxucmlnaHRIb2xlLnBob25nQW1iaWVudCA9IFswLjkyMTU2ODYyNywwLjU2ODYyNzQ1MSwwLjg5ODAzOTIxNl0sXHJcbnJpZ2h0SG9sZS5kaWZmdXNlID0gWzEsMSwxXTtcclxucmlnaHRIb2xlLnNwZWN1bGFyID0gWzEsMSwxXTtcclxucmlnaHRIb2xlLnNoaW5pbmVzcyA9IDE7XHJcbnJpZ2h0SG9sZS5jb25zdCA9IHtcclxuICAgIGtkOiAxLjAsXHJcbiAgICBrczogMS4wLFxyXG4gICAga2E6IDAuNSxcclxufTtcclxucmlnaHRIb2xlLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbnJpZ2h0SG9sZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5yaWdodEhvbGUucGhvbmcgPSB0cnVlO1xyXG5cclxuY29uc3QgbGVmdEhvbGUgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0SG9sZS5uYW1lID0gXCJsZWZ0SG9sZVwiO1xyXG5sZWZ0SG9sZS5tb2RlbCA9IGJveE1vZGVsKDAuMTUsIDAuMiwgMC4xLCBbLTEuNiwgMC41NSwgMF0pO1xyXG5sZWZ0SG9sZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLjA1LCAwLCAtMC4xXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubGVmdEhvbGUucGlja2VkQ29sb3IgPSBbMC45MjE1Njg2MjcsMC41Njg2Mjc0NTEsMC44OTgwMzkyMTZdLFxyXG5sZWZ0SG9sZS5hbWJpZW50ID0gWzEsMSwxXTtcclxubGVmdEhvbGUucGhvbmcgPSB0cnVlO1xyXG5sZWZ0SG9sZS5waG9uZ0FtYmllbnQgPSBbMC45MjE1Njg2MjcsMC41Njg2Mjc0NTEsMC44OTgwMzkyMTZdLFxyXG5sZWZ0SG9sZS5kaWZmdXNlID0gWzEsMSwxXTtcclxubGVmdEhvbGUuc3BlY3VsYXIgPSBbMSwxLDFdO1xyXG5sZWZ0SG9sZS5zaGluaW5lc3MgPSAxO1xyXG5sZWZ0SG9sZS5jb25zdCA9IHtcclxuICAgIGtkOiAxLjAsXHJcbiAgICBrczogMS4wLFxyXG4gICAga2E6IDAuNSxcclxufTtcclxubGVmdEhvbGUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxubGVmdEhvbGUuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxubGVmdEhvbGUucGhvbmcgPSB0cnVlO1xyXG5cclxuY29uc3QgcmlnaHRGcm9udExlZyA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0RnJvbnRMZWcubmFtZSA9IFwicmlnaHRGcm9udExlZ1wiO1xyXG5yaWdodEZyb250TGVnLm1vZGVsID0gYm94TW9kZWwoMC41LCAwLjIsIDAuMiwgWzAuMSwgMCwgMC4xNV0pO1xyXG5yaWdodEZyb250TGVnLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWy0wLjYsIC0wLjUsIC0wLjRdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5yaWdodEZyb250TGVnLnBpY2tlZENvbG9yID0gWzAuNzY4NjI3NDUxLDAuMzc2NDcwNTg4LCAwLjc0NTA5ODAzOV0sXHJcbnJpZ2h0RnJvbnRMZWcuYW1iaWVudCA9IFsxLDEsMV07XHJcbnJpZ2h0RnJvbnRMZWcucGhvbmcgPSB0cnVlO1xyXG5yaWdodEZyb250TGVnLnBob25nQW1iaWVudCA9IFswLjc2ODYyNzQ1MSwwLjM3NjQ3MDU4OCwgMC43NDUwOTgwMzldLFxyXG5yaWdodEZyb250TGVnLmRpZmZ1c2UgPSBbMSwxLDFdO1xyXG5yaWdodEZyb250TGVnLnNwZWN1bGFyID0gWzEsMSwxXTtcclxucmlnaHRGcm9udExlZy5zaGluaW5lc3MgPSAxO1xyXG5yaWdodEZyb250TGVnLmNvbnN0ID0ge1xyXG4gICAga2Q6IDEuMCxcclxuICAgIGtzOiAxLjAsXHJcbiAgICBrYTogMC41LFxyXG59O1xyXG5yaWdodEZyb250TGVnLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbnJpZ2h0RnJvbnRMZWcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogcmlnaHRGcm9udExlZ0ZyYW1lcygpLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcbnJpZ2h0RnJvbnRMZWcucGhvbmcgPSB0cnVlO1xyXG5cclxuZnVuY3Rpb24gcmlnaHRGcm9udExlZ0ZyYW1lcygpIHtcclxuICAgIGxldCB0cmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgdHJhbnNsYXRlOlstMC42LCAtMC41LCAtMC40XSxcclxuICAgICAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgICAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG4gICAgfVxyXG5cclxuICAgIGxldCBmcmFtZXMgPSBbXVxyXG4gICAgZm9yKGxldCBrID0gMDsgayA8IDI1OyArK2spe1xyXG4gICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IGsvMjUgO1xyXG4gICAgICAgIF90cmFuc2Zvcm0udHJhbnNsYXRlWzJdID0gLTAuNCArIC0wLjIvKDI1LWspO1xyXG4gICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmcmFtZXM7XHJcbn1cclxuXHJcblxyXG5jb25zdCBsZWZ0RnJvbnRMZWcgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0RnJvbnRMZWcubmFtZSA9IFwibGVmdEZyb250TGVnXCI7XHJcbmxlZnRGcm9udExlZy5tb2RlbCA9IGJveE1vZGVsKDAuNSwgMC4yLCAwLjIsIFswLjEsIDAsIC0wLjE1XSk7XHJcbmxlZnRGcm9udExlZy50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFstMC42LCAtMC41LCAwLjRdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5sZWZ0RnJvbnRMZWcucGlja2VkQ29sb3IgPSBbMC43Njg2Mjc0NTEsMC4zNzY0NzA1ODgsIDAuNzQ1MDk4MDM5XSxcclxubGVmdEZyb250TGVnLmFtYmllbnQgPSBbMSwxLDFdO1xyXG5sZWZ0RnJvbnRMZWcucGhvbmcgPSB0cnVlO1xyXG5sZWZ0RnJvbnRMZWcucGhvbmdBbWJpZW50ID0gWzAuNzY4NjI3NDUxLDAuMzc2NDcwNTg4LCAwLjc0NTA5ODAzOV0sXHJcbmxlZnRGcm9udExlZy5kaWZmdXNlID0gWzEsMSwxXTtcclxubGVmdEZyb250TGVnLnNwZWN1bGFyID0gWzEsMSwxXTtcclxubGVmdEZyb250TGVnLnNoaW5pbmVzcyA9IDE7XHJcbmxlZnRGcm9udExlZy5jb25zdCA9IHtcclxuICAgIGtkOiAxLjAsXHJcbiAgICBrczogMS4wLFxyXG4gICAga2E6IDAuNSxcclxufTtcclxubGVmdEZyb250TGVnLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmxlZnRGcm9udExlZy5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBsZWZ0RnJvbnRGcmFtZXMoKSxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5sZWZ0RnJvbnRMZWcucGhvbmcgPSB0cnVlO1xyXG5cclxuZnVuY3Rpb24gbGVmdEZyb250RnJhbWVzKCkge1xyXG4gICAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgICAgICB0cmFuc2xhdGU6Wy0wLjYsIC0wLjUsIDAuNF0sXHJcbiAgICAgICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZnJhbWVzID0gW11cclxuICAgIGZvcihsZXQgayA9IDA7IGsgPCAyNTsgKytrKXtcclxuICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSAtay8yNSA7XHJcbiAgICAgICAgX3RyYW5zZm9ybS50cmFuc2xhdGVbMl0gPSAwLjQgKyAwLjIvKDI1LWspO1xyXG4gICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmcmFtZXM7XHJcbn1cclxuXHJcbmNvbnN0IHJpZ2h0UmVhckxlZyA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0UmVhckxlZy5uYW1lID0gXCJyaWdodFJlYXJMZWdcIjtcclxucmlnaHRSZWFyTGVnLm1vZGVsID0gYm94TW9kZWwoMC41LCAwLjIsIDAuMiwgWzAuNSwgMCwgMC4xNV0pO1xyXG5yaWdodFJlYXJMZWcudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMCwgLTAuNSwgLTAuNF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnJpZ2h0UmVhckxlZy5waWNrZWRDb2xvciA9IFswLjc2ODYyNzQ1MSwwLjM3NjQ3MDU4OCwgMC43NDUwOTgwMzldLFxyXG5yaWdodFJlYXJMZWcuYW1iaWVudCA9IFsxLDEsMV07XHJcbnJpZ2h0UmVhckxlZy5waG9uZyA9IHRydWU7XHJcbnJpZ2h0UmVhckxlZy5waG9uZ0FtYmllbnQgPSBbMC43Njg2Mjc0NTEsMC4zNzY0NzA1ODgsIDAuNzQ1MDk4MDM5XSxcclxucmlnaHRSZWFyTGVnLmRpZmZ1c2UgPSBbMSwxLDFdO1xyXG5yaWdodFJlYXJMZWcuc3BlY3VsYXIgPSBbMSwxLDFdO1xyXG5yaWdodFJlYXJMZWcuc2hpbmluZXNzID0gMTtcclxucmlnaHRSZWFyTGVnLmNvbnN0ID0ge1xyXG4gICAga2Q6IDEuMCxcclxuICAgIGtzOiAxLjAsXHJcbiAgICBrYTogMC41LFxyXG59O1xyXG5yaWdodFJlYXJMZWcudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxucmlnaHRSZWFyTGVnLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IHJpZ2h0UmVhckxlZ0ZyYW1lcygpLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcbnJpZ2h0UmVhckxlZy5waG9uZyA9IHRydWU7XHJcblxyXG5mdW5jdGlvbiByaWdodFJlYXJMZWdGcmFtZXMoKSB7XHJcbiAgICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgICAgIHRyYW5zbGF0ZTpbMCwgLTAuNSwgLTAuNF0sXHJcbiAgICAgICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZnJhbWVzID0gW11cclxuICAgIGZvcihsZXQgayA9IDA7IGsgPCAyNTsgKytrKXtcclxuICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSBrLzI1IDtcclxuICAgICAgICBfdHJhbnNmb3JtLnRyYW5zbGF0ZVsyXSA9IC0wLjQgKyAtMC4yLygyNS1rKTtcclxuICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZnJhbWVzO1xyXG59XHJcblxyXG5jb25zdCBsZWZ0UmVhckxlZyA9IG5ldyBOb2RlKCk7XHJcbmxlZnRSZWFyTGVnLm5hbWUgPSBcImxlZnRSZWFyTGVnXCI7XHJcbmxlZnRSZWFyTGVnLm1vZGVsID0gYm94TW9kZWwoMC41LCAwLjIsIDAuMiwgWzAuNSwgMCwgLTAuMTVdKTtcclxubGVmdFJlYXJMZWcudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMCwgLTAuNSwgMC40XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubGVmdFJlYXJMZWcucGlja2VkQ29sb3IgPSBbMC43Njg2Mjc0NTEsMC4zNzY0NzA1ODgsIDAuNzQ1MDk4MDM5XSxcclxubGVmdFJlYXJMZWcuYW1iaWVudCA9IFsxLDEsMV07XHJcbmxlZnRSZWFyTGVnLnBob25nID0gdHJ1ZTtcclxubGVmdFJlYXJMZWcucGhvbmdBbWJpZW50ID0gWzAuNzY4NjI3NDUxLDAuMzc2NDcwNTg4LCAwLjc0NTA5ODAzOV0sXHJcbmxlZnRSZWFyTGVnLmRpZmZ1c2UgPSBbMSwxLDFdO1xyXG5sZWZ0UmVhckxlZy5zcGVjdWxhciA9IFsxLDEsMV07XHJcbmxlZnRSZWFyTGVnLnNoaW5pbmVzcyA9IDE7XHJcbmxlZnRSZWFyTGVnLmNvbnN0ID0ge1xyXG4gICAga2Q6IDEuMCxcclxuICAgIGtzOiAxLjAsXHJcbiAgICBrYTogMC41LFxyXG59O1xyXG5sZWZ0UmVhckxlZy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5sZWZ0UmVhckxlZy5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBsZWZ0UmVhckZyYW1lcygpLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcbmxlZnRSZWFyTGVnLnBob25nID0gdHJ1ZTtcclxuXHJcbmZ1bmN0aW9uIGxlZnRSZWFyRnJhbWVzKCkge1xyXG4gICAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgICAgICB0cmFuc2xhdGU6WzAsIC0wLjUsIDAuNF0sXHJcbiAgICAgICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZnJhbWVzID0gW11cclxuICAgIGZvcihsZXQgayA9IDA7IGsgPCAyNTsgKytrKXtcclxuICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSAtay8yNSA7XHJcbiAgICAgICAgX3RyYW5zZm9ybS50cmFuc2xhdGVbMl0gPSAwLjQgKyAwLjIvKDI1LWspO1xyXG4gICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmcmFtZXM7XHJcbn1cclxuXHJcbmhlYWQuc2V0UGFyZW50KHBpZyk7XHJcbndoaXRlUmlnaHRFeWUuc2V0UGFyZW50KGhlYWQpO1xyXG53aGl0ZUxlZnRFeWUuc2V0UGFyZW50KGhlYWQpO1xyXG5ibGFja1JpZ2h0RXllLnNldFBhcmVudCh3aGl0ZVJpZ2h0RXllKTtcclxuYmxhY2tMZWZ0RXllLnNldFBhcmVudCh3aGl0ZUxlZnRFeWUpO1xyXG5ub3NlLnNldFBhcmVudChoZWFkKTtcclxucmlnaHRIb2xlLnNldFBhcmVudChub3NlKTtcclxubGVmdEhvbGUuc2V0UGFyZW50KG5vc2UpO1xyXG5yaWdodEZyb250TGVnLnNldFBhcmVudChwaWcpO1xyXG5sZWZ0RnJvbnRMZWcuc2V0UGFyZW50KHBpZyk7XHJcbnJpZ2h0UmVhckxlZy5zZXRQYXJlbnQocGlnKTtcclxubGVmdFJlYXJMZWcuc2V0UGFyZW50KHBpZyk7XHJcblxyXG52YXIgcGlnTW9kZWwgPSBbXHJcbiAgICBwaWdcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBpZ01vZGVsO1xyXG4gICIsImltcG9ydCBOb2RlIGZyb20gXCIuLi9ub2RlLmpzXCI7XHJcbmltcG9ydCBib3hNb2RlbCwge2dlbmVyYXRlRmFjZXMsIGdlbmVyYXRlTm9ybWFscywgZ2VuZXJhdGVWZXJ0aWNlc30gZnJvbSBcIi4uL2JveE1vZGVsLmpzXCI7XHJcbmltcG9ydCB7IHJhZFRvRGVnLGRlZ1RvUmFkIH0gZnJvbSBcIi4uL21hdGgvbWF0aFV0aWxzLmpzXCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uL3V0aWxzL0FuaW1hdGlvbi5qc1wiO1xyXG5cclxuZnVuY3Rpb24gcmluZygpIHtcclxuICAgIGxldCB2ZXJ0aWNlcyA9IFtdO1xyXG4gICAgbGV0IGNvbG9ycyA9IFtdO1xyXG4gICAgbGV0IHRhbmdlbnRzID0gW107XHJcbiAgICBsZXQgYml0YW5nZW50cyA9IFtdO1xyXG4gICAgbGV0IG5vcm1hbHMgPSBbXTtcclxuICAgIGxldCB0ZXhDb29yZCA9IFtdO1xyXG4gICAgbGV0IGZhY2VzID0gZ2VuZXJhdGVGYWNlcygpO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVCb3hlcygpe1xyXG4gICAgbGV0IGJveGVzID0gW107XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMzYwOyArK2kpe1xyXG4gICAgICBsZXQgcmFkID0gZGVnVG9SYWQoaSk7XHJcbiAgICAgIGxldCBwb3NpdGlvbiA9IFtNYXRoLmNvcyhyYWQpLCBNYXRoLnNpbihyYWQpLCAwXTtcclxuICAgICAgbGV0IHNpemUgPSBbMC4wNSwgMC4wNSwgMC44XTtcclxuICAgICAgYm94ZXMucHVzaCh7IHNpemU6IHNpemUsIHBvc2l0aW9uOiBwb3NpdGlvbiB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBib3hlcztcclxuICB9XHJcblxyXG4gIGNvbnN0IGJveGVzID0gZ2VuZXJhdGVCb3hlcygpO1xyXG4gIFxyXG4gIGJveGVzLmZvckVhY2goYm94ID0+IHtcclxuICAgIGxldCB2ZXJ0aWNlc0JveCA9IGdlbmVyYXRlVmVydGljZXMoLi4uYm94LnNpemUsIGJveC5wb3NpdGlvbik7XHJcbiAgICBsZXQgbm9ybWFsc0JveCA9IGdlbmVyYXRlTm9ybWFscyh2ZXJ0aWNlc0JveCwgZmFjZXMpO1xyXG4gICAgbm9ybWFscyA9IG5vcm1hbHMuY29uY2F0KG5vcm1hbHNCb3gpO1xyXG4gICAgdmVydGljZXMgPSB2ZXJ0aWNlcy5jb25jYXQodG9WZXJ0aWNlcyh2ZXJ0aWNlc0JveCwgZmFjZXMpKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHZlcnRpY2VzOiB2ZXJ0aWNlcyxcclxuICAgIGZhY2VzOiBmYWNlcyxcclxuICAgIHRhbmdlbnRzOiB0YW5nZW50cyxcclxuICAgIGJpdGFuZ2VudHM6IGJpdGFuZ2VudHMsXHJcbiAgICBub3JtYWxzOiBub3JtYWxzLFxyXG4gICAgY29sb3JzOiBjb2xvcnMsXHJcbiAgICB0ZXhDb29yZDogdGV4Q29vcmQsXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgaG9sbG93ID0gbmV3IE5vZGUoKTtcclxuaG9sbG93LmZsYWcgPSBcImhvbGxvd1wiO1xyXG5ob2xsb3cubmFtZSA9IFwiUmluZ1wiO1xyXG5ob2xsb3cubW9kZWwgPSByaW5nKCk7XHJcbmhvbGxvdy50cmFuc2Zvcm0gPSB7XHJcbnRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG5yb3RhdGU6IFsxMCwgMCwgMF0sXHJcbnNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmhvbGxvdy5waWNrZWRDb2xvciA9IHJhbmRvbUNvbG9ycygpXHJcbmhvbGxvdy52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbmhvbGxvdy5hbWJpZW50ID0gWzEsMSwxXTtcclxuaG9sbG93LnBob25nID0gdHJ1ZTtcclxuaG9sbG93LnBob25nQW1iaWVudCA9IFswLDAsMF0sXHJcbmhvbGxvdy5kaWZmdXNlID0gWzEsMSwxXTtcclxuaG9sbG93LnNwZWN1bGFyID0gWzEsMSwxXTtcclxuaG9sbG93LnNoaW5pbmVzcyA9IDE7XHJcbmhvbGxvdy5jb25zdCA9IHtcclxuICAgIGtkOiAxLjAsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufTtcclxuaG9sbG93LmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IHRydWUsXHJcbiAgZnJhbWVzOiBob2xsb3dGcmFtZXMoKSxcclxuICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICBpc0F1dG86IHRydWUsXHJcbiAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuZnVuY3Rpb24gaG9sbG93RnJhbWVzKCkge1xyXG4gIGxldCB0cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLCAwLCAwXSxcclxuICAgIHJvdGF0ZTogW2RlZ1RvUmFkKDEwKSwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG4gIH1cclxuICBsZXQgZnJhbWVzID0gW11cclxuICBmb3IobGV0IGsgPSAwOyBrIDwgMzYwOyArK2spe1xyXG4gICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gZGVnVG9SYWQoKDEwK2spICUgMzYwKVxyXG4gICAgICBfdHJhbnNmb3JtLnJvdGF0ZVsxXSA9IGRlZ1RvUmFkKChrKzEpJTM2MClcclxuICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiBmcmFtZXM7XHJcbn1cclxuXHJcbnZhciBob2xsb3dSaW5nTW9kZWwgPSBbXHJcbiAgaG9sbG93XHJcbl1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBob2xsb3dSaW5nTW9kZWw7IiwiLy8gY29uc3QgeyBkZWZhdWx0OiBNYXQ0IH0gPSByZXF1aXJlKFwiLi9zdHJ1Y3RzL21hdGgvTWF0NFwiKTtcclxuaW1wb3J0IE1hdDQgZnJvbSBcIi4vbWF0aC9NYXQ0LmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcclxuICAgICAgICB0aGlzLmxvY2FsTWF0cml4ID0gTWF0NC5nZXRJZGVudGl0eSgpO1xyXG4gICAgICAgIHRoaXMud29ybGRNYXRyaXggPSBNYXQ0LmdldElkZW50aXR5KCk7XHJcbiAgICAgICAgdGhpcy53b3JsZEludmVyc2VNYXRyaXggPSBNYXQ0LmdldElkZW50aXR5KCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBzZXRQYXJlbnQocGFyZW50KSB7XHJcbiAgICAgICAgLy8gYWxyZWFkeSBoYXZlIHBhcmVudFxyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcyk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudC5uYW1lO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgIHNldFdvcmxkTXR4KG1hdHJpeCkge1xyXG4gICAgICBpZiAobWF0cml4ICE9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy53b3JsZE1hdHJpeCA9IE1hdDQubXVsdGlwbHkobWF0cml4LCB0aGlzLmxvY2FsTWF0cml4KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLndvcmxkTWF0cml4ID0gdGhpcy5sb2NhbE1hdHJpeDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBjb25zdCB3b3JsZE1hdHJpeCA9IHRoaXMud29ybGRNYXRyaXg7XHJcbiAgICAgIHRoaXMud29ybGRJbnZlcnNlTWF0cml4ID0gTWF0NC50cmFuc3Bvc2UoXHJcbiAgICAgICAgTWF0NC5pbnZlcnNlKHRoaXMud29ybGRNYXRyaXgpXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgY2hpbGQuc2V0V29ybGRNdHgod29ybGRNYXRyaXgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b0pTT04oKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICBhbWJpZW50OiB0aGlzLmFtYmllbnQsXHJcbiAgICAgICAgICBhbmltYXRpb246IHRoaXMuYW5pbWF0aW9uLFxyXG4gICAgICAgICAgY2hpbGRyZW46IHRoaXMuY2hpbGRyZW4ubWFwKGNoaWxkID0+IGNoaWxkLnRvSlNPTigpKSxcclxuICAgICAgICAgIGNvbnN0OiB0aGlzLmNvbnN0LFxyXG4gICAgICAgICAgZGlmZnVzZTogdGhpcy5kaWZmdXNlLFxyXG4gICAgICAgICAgbG9jYWxNYXRyaXg6IHRoaXMubG9jYWxNYXRyaXgsXHJcbiAgICAgICAgICBtb2RlbDogdGhpcy5tb2RlbCxcclxuICAgICAgICAgIHBpY2tlZENvbG9yOiB0aGlzLnBpY2tlZENvbG9yLFxyXG4gICAgICAgICAgcGhvbmc6IHRoaXMucGhvbmcsXHJcbiAgICAgICAgICBwaG9uZ0FtYmllbnQ6IHRoaXMucGhvbmdBbWJpZW50LFxyXG4gICAgICAgICAgc2hpbmluZXNzOiB0aGlzLnNoaW5pbmVzcyxcclxuICAgICAgICAgIHNwZWN1bGFyOiB0aGlzLnNwZWN1bGFyLFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0aGlzLnRyYW5zZm9ybSxcclxuICAgICAgICAgIHZpZXdNYXRyaXg6IHRoaXMudmlld01hdHJpeCwgIFxyXG4gICAgICAgICAgd29ybGRJbnZlcnNlTWF0cml4OiB0aGlzLndvcmxkSW52ZXJzZU1hdHJpeCxcclxuICAgICAgICAgIHdvcmxkTWF0cml4OiB0aGlzLndvcmxkTWF0cml4LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZyb21KU09OKGRhdGEpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgdGhpcy5hbWJpZW50ID0gZGF0YS5hbWJpZW50O1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gZGF0YS5hbmltYXRpb247XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IGRhdGEuY2hpbGRyZW4ubWFwKGNoaWxkRGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IG5ldyBOb2RlKCk7XHJcbiAgICAgICAgICAgIGNoaWxkTm9kZS5mcm9tSlNPTihjaGlsZERhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gY2hpbGROb2RlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY29uc3QgPSBkYXRhLmNvbnN0O1xyXG4gICAgICAgIHRoaXMuZGlmZnVzZSA9IGRhdGEuZGlmZnVzZTtcclxuICAgICAgICB0aGlzLmxvY2FsTWF0cml4ID0gZGF0YS5sb2NhbE1hdHJpeDtcclxuICAgICAgICB0aGlzLm1vZGVsID0gZGF0YS5tb2RlbDtcclxuICAgICAgICB0aGlzLnBpY2tlZENvbG9yID0gZGF0YS5waWNrZWRDb2xvcjtcclxuICAgICAgICB0aGlzLnBob25nID0gZGF0YS5waG9uZztcclxuICAgICAgICB0aGlzLnBob25nQW1iaWVudCA9IGRhdGEucGhvbmdBbWJpZW50O1xyXG4gICAgICAgIHRoaXMuc2hpbmluZXNzID0gZGF0YS5zaGluaW5lc3M7XHJcbiAgICAgICAgdGhpcy5zcGVjdWxhciA9IGRhdGEuc3BlY3VsYXI7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSBkYXRhLnRyYW5zZm9ybTtcclxuICAgICAgICB0aGlzLnZpZXdNYXRyaXggPSBkYXRhLnZpZXdNYXRyaXg7XHJcbiAgICAgICAgdGhpcy53b3JsZEludmVyc2VNYXRyaXggPSBkYXRhLndvcmxkSW52ZXJzZU1hdHJpeDtcclxuICAgICAgICB0aGlzLndvcmxkTWF0cml4ID0gZGF0YS53b3JsZE1hdHJpeDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBcclxuICB9XHJcbiAgIiwiaW1wb3J0IE5vZGUgZnJvbSBcIi4uL3N0cnVjdHMvbm9kZS5qc1wiO1xyXG5pbXBvcnQgeyBkZWdUb1JhZCwgcmFkVG9EZWcgfSBmcm9tIFwiLi4vc3RydWN0cy9tYXRoL21hdGhVdGlscy5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYXRpb257XHJcblxyXG4gICAgc3RhdGljIHBhcnNlQW5pbWF0aW9uRnVuY3Rpb24obW9kZWwpe1xyXG4gICAgICAgIGxldCBhbmltYXRpb24gPSBtb2RlbC5hbmltYXRpb247XHJcbiAgICAgICAgaWYoYW5pbWF0aW9uLmlzQW5pbWF0ZSl7XHJcbiAgICAgICAgICAgIC8vIHBhcnNlIHN0cmluZyB0byBmdW5jdGlvblxyXG4gICAgICAgICAgICBsZXQgX2FuaW1hdGlvbkZ1bmN0aW9uID0gZXZhbChhbmltYXRpb24uYW5pbWF0aW9uRnVuY3Rpb24pXHJcbiAgICAgICAgICAgIHJldHVybiBfYW5pbWF0aW9uRnVuY3Rpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhbmltYXRlKHBhcmVudF9tb2RlbCwgZGVsdGFUaW1lKXtcclxuICAgICAgICBsZXQgYW5pbWF0aW9uID0gcGFyZW50X21vZGVsLmFuaW1hdGlvbjtcclxuICAgICAgICAgICAgaWYoYW5pbWF0aW9uLmlzQW5pbWF0ZSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgX2FuaW1hdGlvbkZ1bmN0aW9uID0gQW5pbWF0aW9uLnBhcnNlQW5pbWF0aW9uRnVuY3Rpb24ocGFyZW50X21vZGVsKTtcclxuICAgICAgICAgICAgICAgIGlmKF9hbmltYXRpb25GdW5jdGlvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0ciA9IHBhcmVudF9tb2RlbC5hbmltYXRpb24uYW5pbWF0aW9uRnVuY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5hbmltYXRpb25GdW5jdGlvbiA9IF9hbmltYXRpb25GdW5jdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmFuaW1hdGlvbkZ1bmN0aW9uKHBhcmVudF9tb2RlbCwgZGVsdGFUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmFuaW1hdGlvbkZ1bmN0aW9uID0gc3RyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBwYXJlbnRfbW9kZWwuY2hpbGRyZW4peyAgICBcclxuICAgICAgICAgICAgQW5pbWF0aW9uLmFuaW1hdGUobW9kZWwsIGRlbHRhVGltZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmVjdXJzZSBlYWNoIG5vZGUgY2hpbGRcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0QXV0byhwYXJlbnRfbW9kZWwpe1xyXG4gICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uaXNBdXRvID0gIXBhcmVudF9tb2RlbC5hbmltYXRpb24uaXNBdXRvO1xyXG4gICAgICAgIGZvcihsZXQgbW9kZWwgb2YgcGFyZW50X21vZGVsLmNoaWxkcmVuKXsgICAgXHJcbiAgICAgICAgICAgIEFuaW1hdGlvbi5zZXRBdXRvKG1vZGVsKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcGxheUFuaW1hdGlvbihwYXJlbnRfbW9kZWwpe1xyXG4gICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uaXNBbmltYXRlID0gdHJ1ZTtcclxuICAgICAgICBpZihwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmlzUmV2ZXJzZSl7XHJcbiAgICAgICAgICAgIGlmKHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzKXtcclxuICAgICAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lcy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHBhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lID0gMDtcclxuICAgICAgICBmb3IobGV0IG1vZGVsIG9mIHBhcmVudF9tb2RlbC5jaGlsZHJlbil7ICAgIFxyXG4gICAgICAgICAgICBBbmltYXRpb24ucGxheUFuaW1hdGlvbihtb2RlbClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHBhdXNlQ29udGludWVBbmltYXRpb24ocGFyZW50X21vZGVsKXtcclxuICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmlzQW5pbWF0ZSA9ICFwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmlzQW5pbWF0ZTtcclxuICAgICAgICBmb3IobGV0IG1vZGVsIG9mIHBhcmVudF9tb2RlbC5jaGlsZHJlbil7ICAgIFxyXG4gICAgICAgICAgICBBbmltYXRpb24ucGF1c2VDb250aW51ZUFuaW1hdGlvbihtb2RlbClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJldmVyc2VBbmltYXRpb24ocGFyZW50X21vZGVsKXtcclxuICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmlzUmV2ZXJzZSA9ICFwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmlzUmV2ZXJzZTtcclxuICAgICAgICBmb3IobGV0IG1vZGVsIG9mIHBhcmVudF9tb2RlbC5jaGlsZHJlbil7ICAgIFxyXG4gICAgICAgICAgICBBbmltYXRpb24ucmV2ZXJzZUFuaW1hdGlvbihtb2RlbClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFuaW1hdGlvblNjcmlwdCgpe1xyXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvblNjcmlwdCA9IGAoKF9ub2RlLCBkZWx0YVRpbWUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGZyYW1lcyA9IF9ub2RlLmFuaW1hdGlvbi5mcmFtZXM7XHJcbiAgICAgICAgICAgIGlmKF9ub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPj0gZnJhbWVzLmxlbmd0aCB8fCBfbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lIDwgMCl7XHJcbiAgICAgICAgICAgICAgICBpZihfbm9kZS5hbmltYXRpb24uaXNBdXRvKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihfbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lIDwgMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9ub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPSBmcmFtZXMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgX25vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA9IF9ub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgJSBmcmFtZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXsgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX25vZGUuYW5pbWF0aW9uLmlzQW5pbWF0ZSkge1xyXG4gICAgICAgICAgICAgICAgX25vZGUudHJhbnNmb3JtID0gZnJhbWVzW19ub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWVdO1xyXG4gICAgICAgICAgICAgICAgaWYoX25vZGUuYW5pbWF0aW9uLmlzUmV2ZXJzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgX25vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZS0tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBfbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lKys7XHJcbiAgICAgICAgICAgICAgICAgICAgIGlmKF9ub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPT0gZnJhbWVzLmxlbmd0aCAmJiAhX25vZGUuYW5pbWF0aW9uLmlzQXV0bykgX25vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA9IGZyYW1lcy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlgXHJcbiAgICAgICAgcmV0dXJuIGFuaW1hdGlvblNjcmlwdDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbmV4dEZyYW1lKHBhcmVudF9tb2RlbCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYocGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMpe1xyXG4gICAgICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSsrO1xyXG4gICAgICAgICAgICBpZihwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA+PSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lcy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhcmVudF9tb2RlbC50cmFuc2Zvcm0gPSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lc1twYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgbW9kZWwgb2YgcGFyZW50X21vZGVsLmNoaWxkcmVuKXsgICAgXHJcbiAgICAgICAgICAgIEFuaW1hdGlvbi5uZXh0RnJhbWUobW9kZWwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwcmV2RnJhbWUocGFyZW50X21vZGVsKXtcclxuICAgICAgICBpZihwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lcyl7XHJcbiAgICAgICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lLS07XHJcbiAgICAgICAgICAgIGlmKHBhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lIDwgMCl7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGFyZW50X21vZGVsLnRyYW5zZm9ybSA9IHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzW3BhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBwYXJlbnRfbW9kZWwuY2hpbGRyZW4peyAgICBcclxuICAgICAgICAgICAgQW5pbWF0aW9uLnByZXZGcmFtZShtb2RlbClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZpcnN0RnJhbWUocGFyZW50X21vZGVsKXtcclxuICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmlzQW5pbWF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmKHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzKXtcclxuICAgICAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPSAwO1xyXG4gICAgICAgICAgICBwYXJlbnRfbW9kZWwudHJhbnNmb3JtID0gcGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXNbcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IG1vZGVsIG9mIHBhcmVudF9tb2RlbC5jaGlsZHJlbil7ICAgIFxyXG4gICAgICAgICAgICBBbmltYXRpb24uZmlyc3RGcmFtZShtb2RlbClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxhc3RGcmFtZShwYXJlbnRfbW9kZWwpe1xyXG4gICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uaXNBbmltYXRlID0gZmFsc2U7XHJcbiAgICAgICAgaWYocGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMpe1xyXG4gICAgICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA9IHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIHBhcmVudF9tb2RlbC50cmFuc2Zvcm0gPSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lc1twYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgbW9kZWwgb2YgcGFyZW50X21vZGVsLmNoaWxkcmVuKXsgICAgXHJcbiAgICAgICAgICAgIEFuaW1hdGlvbi5sYXN0RnJhbWUobW9kZWwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0b3RhbE1vZGVsRnJhbWVzKHBhcmVudF9tb2RlbCl7XHJcbiAgICAgICAgbGV0IHRvdGFsRnJhbWVzID0gMDtcclxuICAgICAgICBpZihwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lcyl7XHJcbiAgICAgICAgICAgIHRvdGFsRnJhbWVzID0gcGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGNoaWxkX21vZGVsIG9mIHBhcmVudF9tb2RlbC5jaGlsZHJlbil7ICAgIFxyXG4gICAgICAgICAgICAvLyByZWN1cnNlIGVhY2ggbm9kZSBjaGlsZCwgZmluZCBtYXggZnJhbWVcclxuICAgICAgICAgICAgbGV0IGNoaWxkVG90YWxGcmFtZXMgPSBBbmltYXRpb24udG90YWxNb2RlbEZyYW1lcyhjaGlsZF9tb2RlbCk7XHJcbiAgICAgICAgICAgIGlmKGNoaWxkVG90YWxGcmFtZXMgPiB0b3RhbEZyYW1lcyl7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEZyYW1lcyA9IGNoaWxkVG90YWxGcmFtZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRvdGFsRnJhbWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0b3RhbE5vZGVGcmFtZXMocGFyZW50X21vZGVsKXtcclxuICAgICAgICBsZXQgdG90YWxOb2RlRnJhbWVzID0gXCItXCI7XHJcbiAgICAgICAgaWYocGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMpe1xyXG4gICAgICAgICAgICAvLyBhcyBzdHJpbmdcclxuICAgICAgICAgICAgdG90YWxOb2RlRnJhbWVzID0gcGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMubGVuZ3RoLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0b3RhbE5vZGVGcmFtZXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGN1cnJlbnRNb2RlbEZyYW1lKHBhcmVudF9tb2RlbCl7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICAgICAgaWYocGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMpe1xyXG4gICAgICAgICAgICBjdXJyZW50RnJhbWUgPSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBwYXJlbnRfbW9kZWwuY2hpbGRyZW4peyAgICBcclxuICAgICAgICAgICAgLy8gcmVjdXJzZSBlYWNoIG5vZGUgY2hpbGQsIGZpbmQgbWF4IGZyYW1lXHJcbiAgICAgICAgICAgIGxldCBjaGlsZEN1cnJlbnRGcmFtZSA9IEFuaW1hdGlvbi5jdXJyZW50TW9kZWxGcmFtZShtb2RlbCk7XHJcbiAgICAgICAgICAgIGlmKGNoaWxkQ3VycmVudEZyYW1lID4gY3VycmVudEZyYW1lKXtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRGcmFtZSA9IGNoaWxkQ3VycmVudEZyYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjdXJyZW50RnJhbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGN1cnJlbnROb2RlRnJhbWUobm9kZSl7XHJcbiAgICAgICAgbGV0IGN1cnJGcmFtZSA9IFwiLVwiXHJcbiAgICAgICAgaWYobm9kZS5hbmltYXRpb24uZnJhbWVzKXtcclxuICAgICAgICAgICAgY3VyckZyYW1lID0gbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lLnRvU3RyaW5nKClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGN1cnJGcmFtZVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoYW5kbGVHZW5lcmFsVHJhbnNmb3JtKG5vZGUsIGRvYyl7XHJcbiAgICAgICAgbGV0IFt0eCwgdHksIHR6XSA9IG5vZGUudHJhbnNmb3JtLnRyYW5zbGF0ZVxyXG4gICAgICAgIGxldCBbcngsIHJ5LCByel0gPSBub2RlLnRyYW5zZm9ybS5yb3RhdGVcclxuICAgICAgICByeCA9IHJhZFRvRGVnKHJ4KTsgXHJcbiAgICAgICAgcnkgPSByYWRUb0RlZyhyeSk7IFxyXG4gICAgICAgIHJ6ID0gcmFkVG9EZWcocnopO1xyXG4gICAgICAgIGxldCBbc3gsc3ksc3pdID0gbm9kZS50cmFuc2Zvcm0uc2NhbGVcclxuXHJcbiAgICAgICAvLyBzbGlkZXIgdHgsIHR5LCB0eiBcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2xhdGlvbi14LXNsaWRlclwiKS52YWx1ZSA9IHR4KjUwO1xyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInRyYW5zbGF0aW9uLXktc2xpZGVyXCIpLnZhbHVlID0gdHkqNTA7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwidHJhbnNsYXRpb24tei1zbGlkZXJcIikudmFsdWUgPSB0eio1MDtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2xhdGlvbi14LXNsaWRlci12YWx1ZVwiKS5pbm5lckhUTUwgPSB0eC50b0ZpeGVkKDIpOyAgICBcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2xhdGlvbi15LXNsaWRlci12YWx1ZVwiKS5pbm5lckhUTUwgPSB0eS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInRyYW5zbGF0aW9uLXotc2xpZGVyLXZhbHVlXCIpLmlubmVySFRNTCA9IHR6LnRvRml4ZWQoMik7XHJcbiAgICAgICAgLy8gcm90YXRpb24gdHgsIHR5LCB0eiBcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJyb3RhdGlvbi14LXNsaWRlclwiKS52YWx1ZSA9IHJ4O1xyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInJvdGF0aW9uLXktc2xpZGVyXCIpLnZhbHVlID0gcnk7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwicm90YXRpb24tei1zbGlkZXJcIikudmFsdWUgPSByejtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJyb3RhdGlvbi14LXNsaWRlci12YWx1ZVwiKS5pbm5lckhUTUwgPSByeC50b0ZpeGVkKDIpO1xyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInJvdGF0aW9uLXktc2xpZGVyLXZhbHVlXCIpLmlubmVySFRNTCA9IHJ5LnRvRml4ZWQoMik7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwicm90YXRpb24tei1zbGlkZXItdmFsdWVcIikuaW5uZXJIVE1MID0gcnoudG9GaXhlZCgyKTtcclxuICAgICAgICAvLyBzY2FsZSBzeCwgc3ksIHN6XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwic2NhbGF0aW9uLXgtc2xpZGVyXCIpLnZhbHVlID0gc3gqMTA7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwic2NhbGF0aW9uLXktc2xpZGVyXCIpLnZhbHVlID0gc3kqMTA7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwic2NhbGF0aW9uLXotc2xpZGVyXCIpLnZhbHVlID0gc3oqMTA7XHJcbiAgICAgICBcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJzY2FsYXRpb24teC1zbGlkZXItdmFsdWVcIikuaW5uZXJIVE1MID0gKHN4ICogMS4wMCkudG9GaXhlZCgyKTtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJzY2FsYXRpb24teS1zbGlkZXItdmFsdWVcIikuaW5uZXJIVE1MID0gKHN5ICogMS4wMCkudG9GaXhlZCgyKTtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJzY2FsYXRpb24tei1zbGlkZXItdmFsdWVcIikuaW5uZXJIVE1MID0gKHN6ICogMS4wMCkudG9GaXhlZCgyKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGFuZGxlVHJhbnNmb3JtKG5vZGUsIGRvYyl7XHJcbiAgICAgICAgaWYoIW5vZGUuYW5pbWF0aW9uLmlzQW5pbWF0ZSkgcmV0dXJuO1xyXG4gICAgICAgIEFuaW1hdGlvbi5oYW5kbGVHZW5lcmFsVHJhbnNmb3JtKG5vZGUsIGRvYylcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZW5hYmxlQW5pbWF0aW9uKHBhcmVudF9tb2RlbCl7XHJcbiAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5pc0FuaW1hdGUgPSB0cnVlO1xyXG4gICAgICAgIGZvcihsZXQgbW9kZWwgb2YgcGFyZW50X21vZGVsLmNoaWxkcmVuKXsgICAgXHJcbiAgICAgICAgICAgIEFuaW1hdGlvbi5lbmFibGVBbmltYXRpb24obW9kZWwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkaXNhYmxlQW5pbWF0aW9uKHBhcmVudF9tb2RlbCl7XHJcbiAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5pc0FuaW1hdGUgPSBmYWxzZTtcclxuICAgICAgICBmb3IobGV0IG1vZGVsIG9mIHBhcmVudF9tb2RlbC5jaGlsZHJlbil7ICAgIFxyXG4gICAgICAgICAgICBBbmltYXRpb24uZGlzYWJsZUFuaW1hdGlvbihtb2RlbClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlbGV0ZUN1cnJlbnRGcmFtZShub2RlKXtcclxuICAgICAgICBpZihub2RlLmFuaW1hdGlvbi5mcmFtZXMpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbm9kZS5hbmltYXRpb24uZnJhbWVzLnNwbGljZShub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUsIDEpO1xyXG4gICAgICAgICAgICBpZihub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgIT0gMCl7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgLT0gMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihub2RlLmFuaW1hdGlvbi5mcmFtZXMubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hbmltYXRpb24uZnJhbWVzID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIG5vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgbm9kZS50cmFuc2Zvcm0gPSBub2RlLmFuaW1hdGlvbi5mcmFtZXNbbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lXVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGVkaXRDdXJyZW50RnJhbWUobm9kZSwgdHJhbnNmb3JtKXtcclxuICAgICAgICBpZihub2RlLmFuaW1hdGlvbi5mcmFtZXMpe1xyXG4gICAgICAgICAgICBsZXQgY3VyckZyYW1lID0gbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lO1xyXG4gICAgICAgICAgICBpZihjdXJyRnJhbWUgPCBub2RlLmFuaW1hdGlvbi5mcmFtZXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIG5vZGUuYW5pbWF0aW9uLmZyYW1lc1tjdXJyRnJhbWVdID0gdHJhbnNmb3JtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoY3VyckZyYW1lID09IG5vZGUuYW5pbWF0aW9uLmZyYW1lcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgY3VyckZyYW1lID0gY3VyckZyYW1lIC0gMTtcclxuICAgICAgICAgICAgICAgIG5vZGUuYW5pbWF0aW9uLmZyYW1lc1tjdXJyRnJhbWVdID0gdHJhbnNmb3JtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyB1cGRhdGUgbm9kZSB0cmFuc2Zvcm1cclxuICAgICAgICAgICAgbm9kZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgVmVjMyBmcm9tIFwiLi4vc3RydWN0cy9tYXRoL1ZlYzMuanNcIlxyXG5pbXBvcnQgTWF0NCBmcm9tIFwiLi4vc3RydWN0cy9tYXRoL01hdDQuanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhe1xyXG4gICAgc3RhdGljIHByb2plY3Rpb25PcnRvZ3JhcGhpYyhsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikge1xyXG4gICAgICAgIC8vIE5vdGU6IFRoaXMgbWF0cml4IGZsaXBzIHRoZSBZIGF4aXMgc28gMCBpcyBhdCB0aGUgdG9wLlxyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gcmlnaHQtbGVmdFxyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRvcC1ib3R0b21cclxuICAgICAgICBjb25zdCBkZXB0aCA9IGZhciAtIG5lYXJcclxuICAgICAgICBjb25zdCBob3Jpem9udGFsUmF0aW8gPSAocmlnaHQgKyBsZWZ0KSAvIHdpZHRoXHJcbiAgICAgICAgY29uc3QgdmVydGljYWxSYXRpbyA9ICh0b3AgKyBib3R0b20pIC8gaGVpZ2h0XHJcbiAgICAgICAgY29uc3QgZGVwdGhSYXRpbyA9IChmYXIgKyBuZWFyKSAvIGRlcHRoXHJcblxyXG4gICAgICAgIHJldHVybiBbMiAvICh3aWR0aCksIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAyIC8gKGhlaWdodCksIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAtMiAvIChkZXB0aCksIDAsXHJcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsUmF0aW8sIHZlcnRpY2FsUmF0aW8sIGRlcHRoUmF0aW8sIDFdO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgcHJvamVjdGlvblBlcnNwZWN0aXZlKGZvdiwgYXNwZWN0LCBuZWFyLCBmYXIpe1xyXG4gICAgICAgIGNvbnN0IGYgPSAxLjAgLyBNYXRoLnRhbihmb3YgLyAyKVxyXG4gICAgICAgIGNvbnN0IHJhbmdlSW52ID0gMSAvIChuZWFyIC0gZmFyKVxyXG5cclxuICAgICAgICByZXR1cm4gW2YgLyBhc3BlY3QsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCBmLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgKG5lYXIgKyBmYXIpICogcmFuZ2VJbnYsIC0xLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgbmVhciAqIGZhciAqIHJhbmdlSW52ICogMiwgMF1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcHJvamVjdGlvbk9ibGlxdWUodGhldGEsIHBoaSl7XHJcblxyXG4gICAgICAgIHZhciB0ID0gTWF0aC50YW4odGhldGEpXHJcbiAgICAgICAgdCA9IHQgPT0gMCA/IDAuMDAwMDEgOiB0XHJcbiAgICAgICAgdmFyIHAgPSBNYXRoLnRhbihwaGkpXHJcbiAgICAgICAgcCA9IHAgPT0gMCA/IDAuMDAwMDEgOiBwXHJcbiAgICAgICAgcmV0dXJuIFsxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIC0xL3QsIC0xL3AsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAxXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBsb29rRGlyZWN0aW9uKGV5ZSwgY2VudGVyLCB1cCl7XHJcbiAgICAgICAgLy8gbm9ybWFsaXplIGVhY2ggYXJyYXlcclxuICAgICAgICAvLyBjaGFuZ2UgYXMgVmVjMyBmcm9tIGFycmF5XHJcbiAgICAgICAgbGV0IF9leWUgPSBWZWMzLmZyb21BcnJheShleWUpXHJcbiAgICAgICAgbGV0IF9jZW50ZXIgPSBWZWMzLmZyb21BcnJheShjZW50ZXIpXHJcbiAgICAgICAgbGV0IF91cCA9IFZlYzMuZnJvbUFycmF5KHVwKVxyXG4gICAgXHJcblxyXG5cclxuICAgICAgICBjb25zdCBmID0gVmVjMy51bml0VmVjdG9yKFZlYzMuc3ViKF9leWUsIF9jZW50ZXIpKSAvLyB6QXhpc1xyXG4gICAgICAgIGNvbnN0IHMgPSBWZWMzLnVuaXRWZWN0b3IoVmVjMy5jcm9zcyhfdXAsIGYpKSAvLyB4QXhpc1xyXG4gICAgICAgIGNvbnN0IHUgPSBWZWMzLnVuaXRWZWN0b3IoVmVjMy5jcm9zcyhmLCBzKSlcclxuXHJcbiAgICAgICAgcmV0dXJuIFtzLngsIHMueSwgcy56LCAwLFxyXG4gICAgICAgICAgICAgICAgdS54LCB1LnksIHUueiwgMCxcclxuICAgICAgICAgICAgICAgIGYueCwgZi55LCBmLnosIDAsXHJcbiAgICAgICAgICAgICAgICBleWVbMF0sIGV5ZVsxXSwgZXllWzJdLCAxXVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWFrZVpUb1dNYXRyaXgoZnVkZ2VGYWN0b3Ipe1xyXG4gICAgICAgIHJldHVybiBbMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgZnVkZ2VGYWN0b3IsIDFdXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHByb2plY3Rpb25NYXRyaXgocHJvamVjdGlvbl90eXBlLCBfZm92LCBfYXNwZWN0LF9uZWFyLCBfZmFyLCB0aGV0YSA9IDkwLCBwaGkgPSA5MCl7XHJcbiAgICAgICAgY29uc3QgYXNwZWN0ID0gX2FzcGVjdDtcclxuICAgICAgICBjb25zdCBmb3YgPSBfZm92O1xyXG4gICAgICAgIGNvbnN0IGxlZnQgPSAtMjtcclxuICAgICAgICBjb25zdCByaWdodCA9IDI7XHJcbiAgICAgICAgY29uc3QgYm90dG9tID0gLTI7XHJcbiAgICAgICAgY29uc3QgdG9wID0gMjtcclxuICAgICAgICBjb25zdCBmYXJPcnRobyA9IF9mYXI7XHJcbiAgICAgICAgY29uc3QgbmVhck9ydGhvID0gLWZhck9ydGhvO1xyXG4gICAgXHJcbiAgICAgICAgc3dpdGNoIChwcm9qZWN0aW9uX3R5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIm9ydGhvZ3JhcGhpY1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIENhbWVyYS5wcm9qZWN0aW9uT3J0b2dyYXBoaWMobGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyT3J0aG8sIGZhck9ydGhvKVxyXG4gICAgICAgICAgICBjYXNlIFwib2JsaXF1ZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdDQubXVsdGlwbHkoXHJcbiAgICAgICAgICAgICAgICAgICAgQ2FtZXJhLnByb2plY3Rpb25PYmxpcXVlKHRoZXRhLCBwaGkpLFxyXG4gICAgICAgICAgICAgICAgICAgIENhbWVyYS5wcm9qZWN0aW9uT3J0b2dyYXBoaWMobGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyT3J0aG8sIGZhck9ydGhvKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY2FzZSBcInBlcnNwZWN0aXZlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FtZXJhLnByb2plY3Rpb25QZXJzcGVjdGl2ZShcclxuICAgICAgICAgICAgICAgICAgICBmb3YsXHJcbiAgICAgICAgICAgICAgICAgICAgYXNwZWN0LFxyXG4gICAgICAgICAgICAgICAgICAgIF9uZWFyLFxyXG4gICAgICAgICAgICAgICAgICAgIF9mYXJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FtZXJhLnByb2plY3Rpb25PcnRvZ3JhcGhpYyhsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXJPcnRobywgZmFyT3J0aG8pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB2aWV3TWF0cml4KG9yaWVudGF0aW9uLCBsb29rQXQsIHVwKXtcclxuICAgICAgICBsZXQgW3JvbGwsIHBpdGNoLCByYWRpdXNdID0gb3JpZW50YXRpb25cclxuXHJcbiAgICAgICAgLy8gcm9sbCwgcGl0Y2gsIHJhZGl1c1xyXG4gICAgICAgIHZhciBjYW1lcmFNYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICAgICAgICBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICAgICAgICAgICAgTWF0NC5yb3RhdGVZKHBpdGNoKSxcclxuICAgICAgICAgICAgICAgIE1hdDQucm90YXRlWChyb2xsKSksXHJcbiAgICAgICAgICAgIE1hdDQudHJhbnNsYXRlKDAsIDAsIHJhZGl1cylcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHZhciBjYW1lcmFQb3NpdGlvbiA9IFtcclxuICAgICAgICAgICAgY2FtZXJhTWF0cml4WzEyXSxcclxuICAgICAgICAgICAgY2FtZXJhTWF0cml4WzEzXSxcclxuICAgICAgICAgICAgY2FtZXJhTWF0cml4WzE0XVxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgdmFyIGNhbWVyYU1hdHJpeCA9IENhbWVyYS5sb29rRGlyZWN0aW9uKGNhbWVyYVBvc2l0aW9uLCBsb29rQXQsIHVwKVxyXG5cclxuICAgICAgICB2YXIgdmlld01hdHJpeCA9IE1hdDQuaW52ZXJzZShjYW1lcmFNYXRyaXgpXHJcbnt9XHJcbiAgICAgICAgcmV0dXJuIHZpZXdNYXRyaXhcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdXBkYXRlTG9va0F0KHBhcmVudF9tb2RlbCwgYXhpcyl7XHJcbiAgICBcclxuICAgICAgICBsZXQgZGVsdGEgPSBwYXJlbnRfbW9kZWwudHJhbnNmb3JtLnRyYW5zbGF0ZVtheGlzXSAtIHBhcmVudF9tb2RlbC52aWV3TWF0cml4Lmxvb2tBdFtheGlzXVxyXG4gICAgICAgIGxldCBsb29rQXRBeGlzID0gcGFyZW50X21vZGVsLnRyYW5zZm9ybS50cmFuc2xhdGVbYXhpc11cclxuICBcclxuICAgICAgICBDYW1lcmEuZ2VuZXJhbFVwZGF0ZUxvb2tBdChwYXJlbnRfbW9kZWwsIGF4aXMsIGRlbHRhLCBsb29rQXRBeGlzKVxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdlbmVyYWxVcGRhdGVMb29rQXQocGFyZW50X21vZGVsLCBheGlzLCBkZWx0YSwgbG9va0F0QXhpcyl7XHJcbiAgICAgICAgICAgIGlmKHBhcmVudF9tb2RlbC5mbGFnKXtcclxuICAgICAgICAgICAgcGFyZW50X21vZGVsLnZpZXdNYXRyaXgubG9va0F0W2F4aXNdID0gbG9va0F0QXhpc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBjYW1lcmEgcG9zaXRpb24gW3RoZXRhLCBwaGksIHJhZGl1c11cclxuICAgICAgICAgICAgLy8gcmVwcmVzZW50IGluIGNhcnRlc2lhbiBjb29yZGluYXRlcyBmcm9tIHNwaGVyaWNhbCBjb29yZGluYXRlcyBvZiBjYW1lcmFcclxuICAgICAgICAgICAgbGV0IHIgPSBwYXJlbnRfbW9kZWwudmlld01hdHJpeC5jYW1lcmFbMl1cclxuICAgICAgICAgICAgbGV0IHRoZXRhID0gcGFyZW50X21vZGVsLnZpZXdNYXRyaXguY2FtZXJhWzFdXHJcbiAgICAgICAgICAgIGxldCBwaGkgPSBwYXJlbnRfbW9kZWwudmlld01hdHJpeC5jYW1lcmFbMF1cclxuICAgICAgICAgICAgbGV0IHggPSByICogTWF0aC5zaW4odGhldGEpICogTWF0aC5jb3MocGhpKVxyXG4gICAgICAgICAgICBsZXQgeSA9IHIgKiBNYXRoLnNpbih0aGV0YSkgKiBNYXRoLnNpbihwaGkpXHJcbiAgICAgICAgICAgIGxldCB6ID0gciAqIE1hdGguY29zKHRoZXRhKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gLy8gdHJhbnNmb3JtIGJ5IGxvb2tBdFxyXG4gICAgICAgICAgICBpZihheGlzID09IDApe1xyXG4gICAgICAgICAgICB4ID0geCAtIGRlbHRhXHJcbiAgICAgICAgICAgIHkgPSB5XHJcbiAgICAgICAgICAgIHogPSB6XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihheGlzID09IDEpe1xyXG4gICAgICAgICAgICB4ID0geFxyXG4gICAgICAgICAgICB5ID0geSAtIGRlbHRhXHJcbiAgICAgICAgICAgIHogPSB6XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihheGlzID09IDIpe1xyXG4gICAgICAgICAgICB4ID0geFxyXG4gICAgICAgICAgICB5ID0geVxyXG4gICAgICAgICAgICB6ID0geiAtIGRlbHRhXHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAvLyBjb252ZXJ0IGJhY2sgdG8gc3BoZXJpY2FsIGNvb3JkaW5hdGVzXHJcbiAgICBcclxuICAgICAgICAgICAgciA9IE1hdGguc3FydCh4KnggKyB5KnkgKyB6KnopXHJcbiAgICAgICAgICAgIHRoZXRhID0gTWF0aC5hY29zKHovcilcclxuICAgICAgICAgICAgcGhpID0gTWF0aC5hdGFuMih5LCBNYXRoLmFicyh4KSlcclxuICAgIFxyXG4gICAgICAgICAgICAvLyAvLyBzZXQgdGhlIG5ldyB2YWx1ZXNcclxuICAgICAgICAgICAgcGFyZW50X21vZGVsLnZpZXdNYXRyaXguY2FtZXJhWzBdID0gcGhpXHJcbiAgICAgICAgICAgIHBhcmVudF9tb2RlbC52aWV3TWF0cml4LmNhbWVyYVsxXSA9IHRoZXRhXHJcbiAgICAgICAgICAgIHBhcmVudF9tb2RlbC52aWV3TWF0cml4LmNhbWVyYVsyXSA9IHJcclxuXHJcbiAgICAgICAgICAgIGlmKCFwYXJlbnRfbW9kZWwuZmxhZyl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIHBhcmVudF9tb2RlbC50cmFuc2Zvcm0udHJhbnNsYXRlW2F4aXNdIC09IGRlbHRhXHJcbiAgICAgICAgICAgICAgICBwYXJlbnRfbW9kZWwudmlld01hdHJpeC5sb29rQXRbYXhpc10gPSBsb29rQXRBeGlzXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyZW50X21vZGVsLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBDYW1lcmEuZ2VuZXJhbFVwZGF0ZUxvb2tBdChwYXJlbnRfbW9kZWwuY2hpbGRyZW5baV0sIGF4aXMsIGRlbHRhLCBsb29rQXRBeGlzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyB0YXJnZXRSb290IH0gZnJvbSBcIi4uL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IGRlZ1RvUmFkIH0gZnJvbSBcIi4uL3N0cnVjdHMvbWF0aC9tYXRoVXRpbHMuanNcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi9BbmltYXRpb24uanNcIjtcclxuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi9DYW1lcmEuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3RlckNvbnRyb2xsZXJ7XHJcblxyXG4gICAgLy8gdmVsb2NpdHlcclxuICAgIHN0YXRpYyB2eCA9IDA7XHJcbiAgICBzdGF0aWMgdnkgPSAwO1xyXG4gICAgc3RhdGljIHZ6ID0gMDtcclxuXHJcbiAgICAvLyBhY2NlbGVyYXRpb25cclxuICAgIHN0YXRpYyBheCA9IDFlLTU7XHJcbiAgICBzdGF0aWMgYXkgPSAtMWUtNTsgLy8gZm9yIGdyYXZpdHlcclxuICAgIHN0YXRpYyBheiA9IDFlLTU7XHJcblxyXG4gICAgc3RhdGljIGplcmsgPSAwLjAxO1xyXG4gICAgc3RhdGljIGN1cnJlbnRHcm91bmQgPSAwO1xyXG5cclxuICAgIHN0YXRpYyB2ZWxvY2l0eVRocmVzaG9sZCA9IDFlLTQ7XHJcbiAgICBzdGF0aWMgaXNKdW1waW5nID0gZmFsc2U7XHJcblxyXG4gICAgc3RhdGljIGlzRm9sbG93UGxheWVyID0gZmFsc2U7XHJcblxyXG4gICAgc3RhdGljIHZlbG9jaXR5TG9vcChwYXJlbnRfbm9kZSwgZGVsdGFfdGltZSl7XHJcbiAgICAgICAgLy8gaGFuZGxlIHRoZSB0cmFuc2Zvcm1hdGlvbiBvZiB0aGUgY2hhcmFjdGVyXHJcbiAgICAgICAgaWYoZGVsdGFfdGltZSA+PSAyMCkgZGVsdGFfdGltZSA9IDE1XHJcbiAgICAgICAgcGFyZW50X25vZGUudHJhbnNmb3JtLnRyYW5zbGF0ZVswXSArPSBDaGFyYWN0ZXJDb250cm9sbGVyLnZ4ICogZGVsdGFfdGltZTtcclxuICAgICAgICBwYXJlbnRfbm9kZS50cmFuc2Zvcm0udHJhbnNsYXRlWzFdICs9IENoYXJhY3RlckNvbnRyb2xsZXIudnkgKiBkZWx0YV90aW1lO1xyXG4gICAgICAgIHBhcmVudF9ub2RlLnRyYW5zZm9ybS50cmFuc2xhdGVbMl0gKz0gQ2hhcmFjdGVyQ29udHJvbGxlci52eiAqIGRlbHRhX3RpbWU7XHJcblxyXG4gICAgICAgIC8vIGhhbmRsZSB2eFxyXG4gICAgICAgIGlmKENoYXJhY3RlckNvbnRyb2xsZXIudnggPiBDaGFyYWN0ZXJDb250cm9sbGVyLnZlbG9jaXR5VGhyZXNob2xkKXtcclxuICAgICAgICBDaGFyYWN0ZXJDb250cm9sbGVyLnZ4IC09IENoYXJhY3RlckNvbnRyb2xsZXIuYXggKiBkZWx0YV90aW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKENoYXJhY3RlckNvbnRyb2xsZXIudnggPCAtQ2hhcmFjdGVyQ29udHJvbGxlci52ZWxvY2l0eVRocmVzaG9sZCl7XHJcbiAgICAgICAgQ2hhcmFjdGVyQ29udHJvbGxlci52eCArPSBDaGFyYWN0ZXJDb250cm9sbGVyLmF4ICogZGVsdGFfdGltZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaGFuZGxlIHZ6XHJcbiAgICAgICAgaWYoQ2hhcmFjdGVyQ29udHJvbGxlci52eiA+IENoYXJhY3RlckNvbnRyb2xsZXIudmVsb2NpdHlUaHJlc2hvbGQpe1xyXG4gICAgICAgIENoYXJhY3RlckNvbnRyb2xsZXIudnogLT0gQ2hhcmFjdGVyQ29udHJvbGxlci5heiAqIGRlbHRhX3RpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoQ2hhcmFjdGVyQ29udHJvbGxlci52eiA8IC1DaGFyYWN0ZXJDb250cm9sbGVyLnZlbG9jaXR5VGhyZXNob2xkKXtcclxuICAgICAgICBDaGFyYWN0ZXJDb250cm9sbGVyLnZ6ICs9IENoYXJhY3RlckNvbnRyb2xsZXIuYXogKiBkZWx0YV90aW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBoYW5kbGUgbmVhciAwIHZlbG9jaXR5XHJcbiAgICAgICAgaWYoTWF0aC5hYnMoQ2hhcmFjdGVyQ29udHJvbGxlci52eCkgPCBDaGFyYWN0ZXJDb250cm9sbGVyLnZlbG9jaXR5VGhyZXNob2xkICl7XHJcbiAgICAgICAgICAgIENoYXJhY3RlckNvbnRyb2xsZXIudnggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihNYXRoLmFicyhDaGFyYWN0ZXJDb250cm9sbGVyLnZ5KSA8IENoYXJhY3RlckNvbnRyb2xsZXIudmVsb2NpdHlUaHJlc2hvbGQpe1xyXG4gICAgICAgICAgICBDaGFyYWN0ZXJDb250cm9sbGVyLnZ5ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoTWF0aC5hYnMoQ2hhcmFjdGVyQ29udHJvbGxlci52eikgPCBDaGFyYWN0ZXJDb250cm9sbGVyLnZlbG9jaXR5VGhyZXNob2xkKXtcclxuICAgICAgICAgICAgQ2hhcmFjdGVyQ29udHJvbGxlci52eiA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEFuaW1hdGlvbi5oYW5kbGVHZW5lcmFsVHJhbnNmb3JtKHBhcmVudF9ub2RlLCBkb2N1bWVudClcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ3Jhdml0eUxvb3AocGFyZW50X25vZGUsIGRlbHRhX3RpbWUpe1xyXG4gICAgICAgIGlmKHRhcmdldFJvb3QgPT09IHVuZGVmaW5lZCB8fCAhQ2hhcmFjdGVyQ29udHJvbGxlci5pc0p1bXBpbmcgKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIHJldHVybiBpZiA8PSBjdXJyZW50R3JvdW5kXHJcbiAgICAgICAgaWYocGFyZW50X25vZGUudHJhbnNmb3JtLnRyYW5zbGF0ZVsxXSA8PSBDaGFyYWN0ZXJDb250cm9sbGVyLmN1cnJlbnRHcm91bmQpe1xyXG4gICAgICAgICAgICBwYXJlbnRfbm9kZS50cmFuc2Zvcm0udHJhbnNsYXRlWzFdID0gQ2hhcmFjdGVyQ29udHJvbGxlci5jdXJyZW50R3JvdW5kO1xyXG4gICAgICAgICAgICBDaGFyYWN0ZXJDb250cm9sbGVyLnZ5ID0gMDtcclxuICAgICAgICAgICAgQ2hhcmFjdGVyQ29udHJvbGxlci5pc0p1bXBpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgQW5pbWF0aW9uLmhhbmRsZUdlbmVyYWxUcmFuc2Zvcm0ocGFyZW50X25vZGUsIGRvY3VtZW50KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGhhbmRsZSB2eVxyXG4gICAgICAgIGlmKGRlbHRhX3RpbWUgPj0gMjApIGRlbHRhX3RpbWUgPSAxNTtcclxuICAgICAgICBDaGFyYWN0ZXJDb250cm9sbGVyLnZ5ICs9IENoYXJhY3RlckNvbnRyb2xsZXIuYXkgKiBkZWx0YV90aW1lO1xyXG4gICAgICAgIEFuaW1hdGlvbi5oYW5kbGVHZW5lcmFsVHJhbnNmb3JtKHBhcmVudF9ub2RlLCBkb2N1bWVudClcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZm9sbG93UGxheWVyTG9vcChwYXJlbnRfbm9kZSwgZGVsdGFfdGltZSA9IDApe1xyXG4gICAgICAgIGlmKCFDaGFyYWN0ZXJDb250cm9sbGVyLmlzRm9sbG93UGxheWVyKSByZXR1cm47XHJcbiAgICAgICAgQ2FtZXJhLnVwZGF0ZUxvb2tBdChwYXJlbnRfbm9kZSwgMCk7XHJcbiAgICAgICAgQ2FtZXJhLnVwZGF0ZUxvb2tBdChwYXJlbnRfbm9kZSwgMSk7XHJcbiAgICAgICAgQ2FtZXJhLnVwZGF0ZUxvb2tBdChwYXJlbnRfbm9kZSwgMik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgTm9kZSBmcm9tIFwiLi4vc3RydWN0cy9ub2RlLmpzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUpTT04ob2JqZWN0cykge1xyXG5cclxuICAgIC8vIENvbnZlcnQgTm9kZSBpbnN0YW5jZXMgdG8gc2VyaWFsaXphYmxlIGZvcm1hdFxyXG4gICAgY29uc3Qgc2VyaWFsaXphYmxlT2JqZWN0cyA9IG9iamVjdHMubWFwKG9iaiA9PiBvYmoudG9KU09OKCkpO1xyXG4gICAgY29uc3QganNvbkNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShzZXJpYWxpemFibGVPYmplY3RzLCBudWxsLCAyKTtcclxuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbanNvbkNvbnRlbnRdLCB7IHR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiIH0pO1xyXG5cclxuICAgIC8vIEVsZW1lbnQgdG8gdHJpZ2dlciB0aGUgZG93bmxvYWRcclxuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGEuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICBhLmRvd25sb2FkID0gb2JqZWN0c1swXS5uYW1lICsgXCIuanNvblwiO1xyXG4gICAgYS5oaWRkZW4gPSB0cnVlO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcclxuXHJcbiAgICAvLyBUcmlnZ2VyIGRvd25sb2FkXHJcbiAgICBhLmNsaWNrKCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpOyAgLy8gQ2xlYW4gdXBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRKU09OKGZpbGVJbnB1dCwgY2FsbGJhY2spIHtcclxuICAgIGNvbnN0IGZpbGUgPSBmaWxlSW5wdXQuZmlsZXNbMF07XHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGpzb25Db250ZW50ID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShqc29uQ29udGVudCk7XHJcbiAgICAgICAgY29uc3Qgb2JqZWN0cyA9IGRhdGEubWFwKG9iakRhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBub2RlID0gbmV3IE5vZGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGUuZnJvbUpTT04ob2JqRGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2FsbGJhY2sob2JqZWN0cyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmlsZSBjb3VsZCBub3QgYmUgcmVhZCEgQ29kZSBcIiArIGV2ZW50LnRhcmdldC5lcnJvci5jb2RlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFwZXJUZXh0dXJlKGdsKSB7XHJcbiAgY29uc3QgdGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcclxuICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcclxuICBnbC50ZXhJbWFnZTJEKFxyXG4gICAgZ2wuVEVYVFVSRV8yRCxcclxuICAgIDAsXHJcbiAgICBnbC5SR0JBLFxyXG4gICAgMSxcclxuICAgIDEsXHJcbiAgICAwLFxyXG4gICAgZ2wuUkdCQSxcclxuICAgIGdsLlVOU0lHTkVEX0JZVEUsXHJcbiAgICBuZXcgVWludDhBcnJheShbMCwgMCwgMCwgMF0pXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xyXG4gICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBpbWFnZSk7XHJcbiAgICBpZiAoaXNQb3dlck9mMihpbWFnZS53aWR0aCkgJiYgaXNQb3dlck9mMihpbWFnZS5oZWlnaHQpKSB7XHJcbiAgICAgIGdsLmdlbmVyYXRlTWlwbWFwKGdsLlRFWFRVUkVfMkQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGltYWdlLnNyYyA9IFwiLi9tYXBwaW5nL3BhcGVyLmpwZWdcIjsgXHJcbiAgcmV0dXJuIHRleHR1cmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUG93ZXJPZjIodmFsdWUpIHtcclxuICByZXR1cm4gKHZhbHVlICYgKHZhbHVlIC0gMSkpID09IDA7XHJcbn0gXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRW52aXJvbm1lbnRUZXh0dXJlKGdsKSB7XHJcbiAgY29uc3QgdGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcclxuICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFX0NVQkVfTUFQLCB0ZXh0dXJlKTtcclxuXHJcbiAgY29uc3QgZmFjZUluZm9zID0gW1xyXG4gICAgeyB0YXJnZXQ6IGdsLlRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWCwgdXJsOiBcIi4vbWFwcGluZy9lbnZpcm9ubWVudC5qcGdcIiB9LFxyXG4gICAgeyB0YXJnZXQ6IGdsLlRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWCwgdXJsOiBcIi4vbWFwcGluZy9lbnZpcm9ubWVudC5qcGdcIiB9LFxyXG4gICAgeyB0YXJnZXQ6IGdsLlRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWSwgdXJsOiBcIi4vbWFwcGluZy9lbnZpcm9ubWVudC5qcGdcIiB9LFxyXG4gICAgeyB0YXJnZXQ6IGdsLlRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWSwgdXJsOiBcIi4vbWFwcGluZy9lbnZpcm9ubWVudC5qcGdcIiB9LFxyXG4gICAgeyB0YXJnZXQ6IGdsLlRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWiwgdXJsOiBcIi4vbWFwcGluZy9lbnZpcm9ubWVudC5qcGdcIiB9LFxyXG4gICAgeyB0YXJnZXQ6IGdsLlRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWiwgdXJsOiBcIi4vbWFwcGluZy9lbnZpcm9ubWVudC5qcGdcIiB9LFxyXG4gIF07XHJcblxyXG4gIGZhY2VJbmZvcy5mb3JFYWNoKChmYWNlSW5mbykgPT4ge1xyXG4gICAgY29uc3QgeyB0YXJnZXQsIHVybCB9ID0gZmFjZUluZm87XHJcblxyXG4gICAgZ2wudGV4SW1hZ2UyRChcclxuICAgICAgdGFyZ2V0LFxyXG4gICAgICAwLFxyXG4gICAgICBnbC5SR0JBLFxyXG4gICAgICA1MTIsXHJcbiAgICAgIDUxMixcclxuICAgICAgMCxcclxuICAgICAgZ2wuUkdCQSxcclxuICAgICAgZ2wuVU5TSUdORURfQllURSxcclxuICAgICAgbnVsbFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2Uuc3JjID0gdXJsO1xyXG4gICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFX0NVQkVfTUFQLCB0ZXh0dXJlKTtcclxuICAgICAgZ2wudGV4SW1hZ2UyRCh0YXJnZXQsIDAsIGdsLlJHQkEsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIGltYWdlKTtcclxuICAgICAgZ2wuZ2VuZXJhdGVNaXBtYXAoZ2wuVEVYVFVSRV9DVUJFX01BUCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgZ2wuZ2VuZXJhdGVNaXBtYXAoZ2wuVEVYVFVSRV9DVUJFX01BUCk7XHJcbiAgZ2wudGV4UGFyYW1ldGVyaShcclxuICAgIGdsLlRFWFRVUkVfQ1VCRV9NQVAsXHJcbiAgICBnbC5URVhUVVJFX01JTl9GSUxURVIsXHJcbiAgICBnbC5MSU5FQVJfTUlQTUFQX0xJTkVBUlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCdW1wVGV4dHVyZShnbCkge1xyXG4gIGNvbnN0IHRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XHJcbiAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XHJcbiAgZ2wudGV4SW1hZ2UyRChcclxuICAgIGdsLlRFWFRVUkVfMkQsIFxyXG4gICAgMCwgXHJcbiAgICBnbC5SR0JBLCBcclxuICAgIDEsIFxyXG4gICAgMSwgXHJcbiAgICAwLCBcclxuICAgIGdsLlJHQkEsIFxyXG4gICAgZ2wuVU5TSUdORURfQllURSwgXHJcbiAgICBuZXcgVWludDhBcnJheShbMjU1LCAwLCAwLCAyNTVdKVxyXG4gICk7XHJcblxyXG4gIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGltYWdlLnNyYyA9IFwiLi9tYXBwaW5nL2J1bXAucG5nXCI7XHJcbiAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XHJcbiAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIGltYWdlKTtcclxuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5MSU5FQVIpO1xyXG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUik7XHJcbiAgfVxyXG59XHJcbiAgIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==