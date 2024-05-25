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
    node.shininess = 100 - shininess.value;
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
var phong = true;

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
            uLightPos: normalizeLight,
            ka: object.const.ka,
            kd: object.const.kd,
            ks: object.const.ks,
            uPhong: object.phong,
            uPhongAmbientColor: object.phongAmbient,
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
      _handler_eventHandler_js__WEBPACK_IMPORTED_MODULE_7__.nodeName.value = ""
      return;
    } 

    if (node.children.length > 0) {
      for (let i = 0; i < node.children.length; i++) {
        if (node.children[i].name === name) {
          node.children.splice(i, 1);
          _handler_eventHandler_js__WEBPACK_IMPORTED_MODULE_7__.nodeName.value = ""
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
chicken.pickedColor = [0.9, 0.9, 0],
chicken.diffuse = [0, 0, 0],
chicken.specular = [0, 0, 0],
chicken.ambient = [1, 1, 1],
chicken.phong = true;
chicken.phongAmbient = [0,0,0],
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
head.pickedColor = [0.9, 0.9, 0];
head.diffuse = [0, 0, 0];
head.specular = [0, 0, 0];
head.ambient = [1, 1, 1];
head.phong = true;
head.phongAmbient = [0,0,0],
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
beak.diffuse = [0, 0, 0];
beak.specular = [0, 0, 0];
beak.ambient = [1, 1, 1];
beak.phong = true;
beak.phongAmbient = [0,0,0],
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
whiteLeftEye.diffuse = [0, 0, 0];
whiteLeftEye.specular = [0, 0, 0];
whiteLeftEye.ambient = [1, 1, 1];
whiteLeftEye.phong = true;
whiteLeftEye.phongAmbient = [0,0,0],
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
blackLeftEye.diffuse = [0, 0, 0];
blackLeftEye.specular = [0, 0, 0];
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
whiteRightEye.diffuse = [0, 0, 0];
whiteRightEye.specular = [0, 0, 0];
whiteRightEye.ambient = [1, 1, 1];
whiteRightEye.phong = true;
whiteRightEye.phongAmbient = [0,0,0],
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
blackRightEye.diffuse = [0, 0, 0];
blackRightEye.specular = [0, 0, 0];
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
leftWing.pickedColor = [0.9, 0.9, 0];
leftWing.diffuse = [0, 0, 0];
leftWing.specular = [0, 0, 0];
leftWing.ambient = [1, 1, 1];
leftWing.phong = true;
leftWing.phongAmbient = [0,0,0],
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
rightWing.pickedColor = [0.9, 0.9, 0];
rightWing.diffuse = [0, 0, 0];
rightWing.specular = [0, 0, 0];
rightWing.ambient = [1, 1, 1];
rightWing.phong = true;
rightWing.phongAmbient = [0,0,0],
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
rightLeg.diffuse = [0, 0, 0];
rightLeg.specular = [0, 0, 0];
rightLeg.ambient = [1, 1, 1];
rightLeg.phong = true;
rightLeg.phongAmbient = [0,0,0],
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
rightFoot.diffuse = [0, 0, 0];
rightFoot.specular = [0, 0, 0];
rightFoot.ambient = [1, 1, 1];
rightFoot.phong = true;
rightFoot.phongAmbient = [0,0,0],
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
leftLeg.diffuse = [0, 0, 0];
leftLeg.specular = [0, 0, 0];
leftLeg.ambient = [1, 1, 1];
leftLeg.phong = true;
leftLeg.phongAmbient = [0,0,0],
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
leftFoot.diffuse = [0, 0, 0];
leftFoot.specular = [0, 0, 0];
leftFoot.ambient = [1, 1, 1];
leftFoot.phong = true;
leftFoot.phongAmbient = [0,0,0],
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
/* harmony import */ var _math_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/mathUtils.js */ "./src/structs/math/mathUtils.js");
/* harmony import */ var _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Animation.js */ "./src/utils/Animation.js");
/* harmony import */ var _boxModel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../boxModel.js */ "./src/structs/boxModel.js");





const bodyColor = [0.886, 0.345, 0.133];
const whiteColor = [0.99, 0.99, 0.99];
const blackColor = [0, 0, 0];
const brownColor = [0.545, 0.271, 0.075];

const fox = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
fox.name = "fox";
fox.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.6, 0.7, 1, [0, 0, 0]); 
fox.transform = {
  translate: [0, 0, 0],
  rotate: [30,45, 0],
  scale: [1, 1, 1],
};
fox.pickedColor = bodyColor;
fox.diffuse = [1,1,1],
fox.specular = [1,1,1],
fox.ambient = [1,1,1],
fox.shininess = 1,
fox.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
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
whiteRightEye.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.1, 0.1, 0.05, [0, 0, 0]);
whiteRightEye.transform = {
  translate: [0.15, 0.1, 0.2], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
whiteRightEye.pickedColor = whiteColor;
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
whiteLeftEye.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.1, 0.1, 0.05, [0, 0, 0]);
whiteLeftEye.transform = {
  translate: [-0.15, 0.1, 0.2], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
whiteLeftEye.pickedColor = whiteColor;
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
blackRightEye.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.1, 0.06, 0.05, [0, 0, 0]);
blackRightEye.transform = {
  translate: [-0.03, 0, 0.01], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
blackRightEye.pickedColor = blackColor;
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
blackLeftEye.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.1, 0.06, 0.05, [0, 0, 0]);
blackLeftEye.transform = {
  translate: [0.03, 0, 0.01], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
blackLeftEye.pickedColor = blackColor;
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
nose.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.15, 0.3, 0.2, [0, 0, 0]);
nose.transform = {
  translate: [0, -0.1, 0.3], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
nose.pickedColor = blackColor;
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

const undernose = new _node_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
undernose.name = "undernose";
undernose.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.1, 0.3, 0.2, [0, 0, 0]);
undernose.transform = {
  translate: [0, -0.2, 0.3], 
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
undernose.pickedColor = whiteColor;
undernose.diffuse = [1,1,1],
undernose.specular = [1,1,1],
undernose.ambient = [1,1,1],
undernose.shininess = 1,
undernose.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
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
rightEar.diffuse = [1,1,1],
rightEar.specular = [1,1,1],
rightEar.ambient = [1,1,1],
rightEar.shininess = 1,
rightEar.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
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
leftEar.diffuse = [1,1,1],
leftEar.specular = [1,1,1],
leftEar.ambient = [1,1,1],
leftEar.shininess = 1,
leftEar.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
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
rightFrontToe.diffuse = [1,1,1],
rightFrontToe.specular = [1,1,1],
rightFrontToe.ambient = [1,1,1],
rightFrontToe.shininess = 1,
rightFrontToe.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
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
leftFrontToe.diffuse = [1,1,1],
leftFrontToe.specular = [1,1,1],
leftFrontToe.ambient = [1,1,1],
leftFrontToe.shininess = 1,
leftFrontToe.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
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
rightRearToe.diffuse = [1,1,1],
rightRearToe.specular = [1,1,1],
rightRearToe.ambient = [1,1,1],
rightRearToe.shininess = 1,
rightRearToe.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
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
leftRearToe.diffuse = [1,1,1],
leftRearToe.specular = [1,1,1],
leftRearToe.ambient = [1,1,1],
leftRearToe.shininess = 1,
leftRearToe.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
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
tail.diffuse = [1,1,1],
tail.specular = [1,1,1],
tail.ambient = [1,1,1],
tail.shininess = 1,
tail.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
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
tailedge.diffuse = [1,1,1],
tailedge.specular = [1,1,1],
tailedge.ambient = [1,1,1],
tailedge.shininess = 1,
tailedge.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
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
hollow.diffuse = [1,1,1],
hollow.specular = [1,1,1],
hollow.ambient = [1,1,1],
hollow.shininess = 1,
hollow.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
}
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
pig.phongAmbient = [0,0,0],
pig.diffuse = [1,1,1];
pig.specular = [1,1,1];
pig.shininess = 1;
pig.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 1.0,
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
head.phongAmbient = [0,0,0],
head.diffuse = [1,1,1];
head.specular = [1,1,1];
head.shininess = 1;
head.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 1.0,
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
whiteRightEye.phongAmbient = [0,0,0],
whiteRightEye.diffuse = [1,1,1];
whiteRightEye.specular = [1,1,1];
whiteRightEye.shininess = 1;
whiteRightEye.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 1.0,
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
whiteLeftEye.phongAmbient = [0,0,0],
whiteLeftEye.diffuse = [1,1,1];
whiteLeftEye.specular = [1,1,1];
whiteLeftEye.shininess = 1;
whiteLeftEye.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 1.0,
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
    ks: 0.0,
    ka: 1.0,
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
    ks: 0.0,
    ka: 1.0,
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
nose.phongAmbient = [0,0,0],
nose.diffuse = [1,1,1];
nose.specular = [1,1,1];
nose.shininess = 1;
nose.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 1.0,
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
rightHole.phongAmbient = [0,0,0],
rightHole.diffuse = [1,1,1];
rightHole.specular = [1,1,1];
rightHole.shininess = 1;
rightHole.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 1.0,
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
leftHole.phongAmbient = [0,0,0],
leftHole.diffuse = [1,1,1];
leftHole.specular = [1,1,1];
leftHole.shininess = 1;
leftHole.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 1.0,
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
rightFrontLeg.phongAmbient = [0,0,0],
rightFrontLeg.diffuse = [1,1,1];
rightFrontLeg.specular = [1,1,1];
rightFrontLeg.shininess = 1;
rightFrontLeg.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 1.0,
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
leftFrontLeg.phongAmbient = [0,0,0],
leftFrontLeg.diffuse = [1,1,1];
leftFrontLeg.specular = [1,1,1];
leftFrontLeg.shininess = 1;
leftFrontLeg.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 1.0,
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
rightRearLeg.phongAmbient = [0,0,0],
rightRearLeg.diffuse = [1,1,1];
rightRearLeg.specular = [1,1,1];
rightRearLeg.shininess = 1;
rightRearLeg.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 1.0,
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
leftRearLeg.phongAmbient = [0,0,0],
leftRearLeg.diffuse = [1,1,1];
leftRearLeg.specular = [1,1,1];
leftRearLeg.shininess = 1;
leftRearLeg.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 1.0,
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
hollow.diffuse = [1,1,1],
hollow.specular = [1,1,1],
hollow.ambient = [1,1,1],
hollow.shininess = 1,
hollow.const = {
    kd: 0.5,
    ks: 0.0,
    ka: 1.0,
}
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
        // console.log(parent_model.viewMatrix)
        // console.log(parent_model.transform.translate[axis])
        // delta
    
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
            phi = Math.atan2(y, x)
    
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
       
        
        // if()
        // CharacterController.vy += CharacterController.ay * delta_time;
        // converge all acceleration into 0
        // handle ax if +
        // if(CharacterController.ax > 0.001){
        //     CharacterController.ax -= CharacterController.jerk * delta_time;
        // }
        // // handle ax if -
        // else if(CharacterController.ax < -0.001){
        //     CharacterController.ax += CharacterController.jerk * delta_time;
        // }
        // // handle if ax is close to 0 but not 0
        // else{
        //     CharacterController.ax = 0;
        // }

        // // handle az if +
        // if(CharacterController.az > 0){
        //     CharacterController.az -= CharacterController.jerk * delta_time;
        // }
        // // handle az if -
        // else if(CharacterController.az < 0){
        //     CharacterController.az += CharacterController.jerk * delta_time;
        // }
        // // handle if az is close to 0 but not 0
        // else if(Math.abs(CharacterController.az) < CharacterController.jerk){
        //     CharacterController.az = 0;
        // }
        
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEk2QjtBQUNkO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CLDRCQUE0QixPQUFPO0FBQ25DLGlDQUFpQyxnREFBSTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0RBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdEQUFJO0FBQ3ZCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbk1lO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hDNkI7QUFDN0I7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdEQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQOEI7QUFDa0I7QUFDQztBQUNYO0FBQ3RDO0FBQ0E7QUFDQSxvQkFBb0IsZ0RBQUk7QUFDeEI7QUFDQTtBQUNBLGdCQUFnQix3REFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw0REFBUSxNQUFNLDREQUFRLE9BQU8sNERBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkRBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnREFBSTtBQUNyQjtBQUNBLGFBQWEsd0RBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0RBQUk7QUFDckI7QUFDQSxhQUFhLHdEQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnREFBSTtBQUM3QjtBQUNBLHFCQUFxQix3REFBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0RBQUk7QUFDN0I7QUFDQSxxQkFBcUIsd0RBQVE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0RBQUk7QUFDOUI7QUFDQSxzQkFBc0Isd0RBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0RBQUk7QUFDOUI7QUFDQSxzQkFBc0Isd0RBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFJO0FBQ3pCO0FBQ0EsaUJBQWlCLHdEQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNGc0M7QUFDNEI7QUFDbkQ7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsb0VBQVE7QUFDckIsYUFBYSxvRUFBUTtBQUNyQixhQUFhLG9FQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RSMEM7QUFDQTtBQUMxQztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvaGFuZGxlci9ldmVudEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9ib3hNb2RlbC5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21hdGgvTWF0NC5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21hdGgvVmVjMy5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21hdGgvVmVjNC5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21hdGgvbWF0aFV0aWxzLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3N0cnVjdHMvbW9kZWwvY2hpY2tlbi5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21vZGVsL2ZveC5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21vZGVsL2hvbGxvd1RoaW5neS5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21vZGVsL3BpZy5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21vZGVsL3JpbmcuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9ub2RlLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3V0aWxzL0FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy91dGlscy9DYW1lcmEuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvdXRpbHMvQ2hhcmFjdGVyQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy91dGlscy9maWxlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy91dGlscy90ZXh0dXJlLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRhcmdldCwgXHJcbiAgICB0YXJnZXRSb290LCBcclxuICAgIHNldFByb2plY3Rpb25UeXBlLCBcclxuICAgIHNldE9ibGlxdWVQaGksIFxyXG4gICAgc2V0T2JsaXF1ZVRoZXRhLCBcclxuICAgIHNldFRhcmdldCwgXHJcbiAgICByZW5hbWVUYXJnZXQsXHJcbiAgICBsaWdodERpcmVjdGlvbixcclxuICAgIGRlbGV0ZU5vZGUsXHJcbiAgICBvYmplY3RzLFxyXG4gICAgc2V0VGFyZ2V0Um9vdCwgXHJcbiAgICBjaGFuZ2VNb2RlbE9iamVjdCwgXHJcbiAgICBjaGFuZ2VNYXBwaW5nVGV4dHVyZSxcclxuICAgIGFkZE5vZGUsXHJcbiAgICBsb2FkT2JqZWN0cyxcclxuICAgIGFkZE1vZGVsLFxyXG4gICAgbW9kZWwsXHJcbiAgICBmcHN9IGZyb20gXCIuLi9pbmRleC5qc1wiXHJcbmltcG9ydCB7IGRlZ1RvUmFkLCByYWRUb0RlZyB9IGZyb20gXCIuLi9zdHJ1Y3RzL21hdGgvbWF0aFV0aWxzLmpzXCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uL3V0aWxzL0FuaW1hdGlvbi5qc1wiO1xyXG5pbXBvcnQgeyBsb2FkSlNPTiwgc2F2ZUpTT04gfSBmcm9tIFwiLi4vdXRpbHMvZmlsZU1hbmFnZXIuanNcIjtcclxuaW1wb3J0IENoYXJhY3RlckNvbnRyb2xsZXIgZnJvbSBcIi4uL3V0aWxzL0NoYXJhY3RlckNvbnRyb2xsZXIuanNcIjtcclxuXHJcbmNvbnN0IHRyYW5zbGF0aW9uWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2xhdGlvbi14LXNsaWRlcicpO1xyXG5jb25zdCB0cmFuc2xhdGlvblkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNsYXRpb24teS1zbGlkZXInKTtcclxuY29uc3QgdHJhbnNsYXRpb25aID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zbGF0aW9uLXotc2xpZGVyJyk7XHJcbmNvbnN0IHRyYW5zbGF0YWlvblhWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2xhdGlvbi14LXNsaWRlci12YWx1ZScpO1xyXG5jb25zdCB0cmFuc2xhdGFpb25ZVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNsYXRpb24teS1zbGlkZXItdmFsdWUnKTtcclxuY29uc3QgdHJhbnNsYXRhaW9uWlZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zbGF0aW9uLXotc2xpZGVyLXZhbHVlJyk7XHJcbi8vcm90YXRpb25cclxuY29uc3Qgcm90YXRpb25YID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uLXgtc2xpZGVyJyk7XHJcbmNvbnN0IHJvdGF0aW9uWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGlvbi15LXNsaWRlcicpO1xyXG5jb25zdCByb3RhdGlvblogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm90YXRpb24tei1zbGlkZXInKTtcclxuY29uc3Qgcm90YXRpb25YVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm90YXRpb24teC1zbGlkZXItdmFsdWUnKTtcclxuY29uc3Qgcm90YXRpb25ZVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm90YXRpb24teS1zbGlkZXItdmFsdWUnKTtcclxuY29uc3Qgcm90YXRpb25aVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm90YXRpb24tei1zbGlkZXItdmFsdWUnKTtcclxuLy9zY2FsYXRpb25cclxuY29uc3Qgc2NhbGF0aW9uWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY2FsYXRpb24teC1zbGlkZXInKTtcclxuY29uc3Qgc2NhbGF0aW9uWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY2FsYXRpb24teS1zbGlkZXInKTtcclxuY29uc3Qgc2NhbGF0aW9uWiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY2FsYXRpb24tei1zbGlkZXInKTtcclxuY29uc3Qgc2NhbGF0aW9uWFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjYWxhdGlvbi14LXNsaWRlci12YWx1ZScpO1xyXG5jb25zdCBzY2FsYXRpb25ZVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NhbGF0aW9uLXktc2xpZGVyLXZhbHVlJyk7XHJcbmNvbnN0IHNjYWxhdGlvblpWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY2FsYXRpb24tei1zbGlkZXItdmFsdWUnKTtcclxuLy8gY29tcG9uZW50IGNvbnRhaW5lclxyXG5jb25zdCBjb21wb25lbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcG9uZW50LWNvbnRhaW5lcicpO1xyXG4vL2NhbWVyYVxyXG5jb25zdCBvcnRob2dyYXBoaWMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3J0aG9ncmFwaGljJyk7XHJcbmNvbnN0IG9ibGlxdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2JsaXF1ZScpO1xyXG5jb25zdCBwZXJzcGVjdGl2ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZXJzcGVjdGl2ZScpO1xyXG4vLyBjYW1lcmEgcmFkaXVzXHJcbmNvbnN0IGNhbWVyYVJhZGl1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcmFkaXVzLXNsaWRlcicpO1xyXG4vLyBjYW1lcmEgcm9sbC1waXRjaFxyXG5jb25zdCBjYW1lcmFSb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1yb2xsLXNsaWRlcicpO1xyXG5jb25zdCBjYW1lcmFQaXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcGl0Y2gtc2xpZGVyJyk7XHJcbi8vIGNhbWVyYSB0aGV0YS1waGlcclxuY29uc3QgY2FtZXJhVGhldGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXRoZXRhLXNsaWRlcicpO1xyXG5jb25zdCBjYW1lcmFQaGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXBoaS1zbGlkZXInKTtcclxuLy8gc2V0IG9ydGhvZ3JhcGhpYyBhcyBkZWZhdWx0IGlucHV0IHJhZGlvIGJ1dHRvblxyXG5vcnRob2dyYXBoaWMuY2hlY2tlZCA9IHRydWU7XHJcbi8vIGNhbWVyYSBkZWZhdWx0IHZpZXdcclxuY29uc3QgZGVmYXVsdFZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVmYXVsdC12aWV3Jyk7XHJcblxyXG4vLyBtb2RlbCBcclxuY29uc3QgbW9kZWxTZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kZWwtc2VsZWN0aW9uJyk7XHJcbmNvbnN0IG1hcHBpbmdTZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwcGluZy1zZWxlY3Rpb24nKTtcclxuXHJcbi8vIGFuaW1hdGlvblxyXG5cclxuLy8gcGF1c2UsIHBsYXksIGF1dG8sIHJldmVyc2VcclxuY29uc3QgcGF1c2VDb250aW51ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXVzZS1jb250aW51ZS1hbmltYXRpb24nKTtcclxuY29uc3QgcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5LWFuaW1hdGlvbicpO1xyXG5jb25zdCBhdXRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dG8tYW5pbWF0aW9uJyk7XHJcbmNvbnN0IHJldmVyc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmV2ZXJzZS1hbmltYXRpb24nKTtcclxuXHJcbi8vIG5leHQsIHByZXYsIGZpcnN0LCBsYXN0XHJcbmNvbnN0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dC1hbmltYXRpb24nKTtcclxuY29uc3QgcHJldiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2LWFuaW1hdGlvbicpO1xyXG5jb25zdCBmaXJzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaXJzdC1hbmltYXRpb24nKTtcclxuY29uc3QgbGFzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXN0LWFuaW1hdGlvbicpO1xyXG5cclxuLy8gZnJhbWUgaGFuZGxlclxyXG5jb25zdCBjdXJyZW50RlBTID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtZnBzJyk7XHJcbmNvbnN0IGN1cnJlbnRNb2RlbEZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtbW9kZWwtZnJhbWUnKTtcclxuY29uc3QgY3VycmVudE5vZGVGcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LW5vZGUtZnJhbWUnKTtcclxuY29uc3QgdG90YWxNb2RlbEZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsLW1vZGVsLWZyYW1lJyk7XHJcbmNvbnN0IHRvdGFsTm9kZUZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsLW5vZGUtZnJhbWUnKTtcclxuXHJcbi8vIGFkZCBmcmFtZSBcclxuY29uc3QgYWRkRnJhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWZyYW1lJylcclxuY29uc3QgdmVyaWZ5QWRkRnJhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmVyaWZ5LWFkZC1mcmFtZScpXHJcbmNvbnN0IGNhbmNlbEFkZEZyYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbC1hZGQtZnJhbWUnKVxyXG5cclxuLy9lZGl0IGZyYW1lXHJcbmNvbnN0IGVkaXRGcmFtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWN1cnJlbnQtZnJhbWUnKVxyXG5jb25zdCB2ZXJpZnlFZGl0RnJhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmVyaWZ5LWVkaXQtZnJhbWUnKVxyXG5jb25zdCBjYW5jZWxFZGl0RnJhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsLWVkaXQtZnJhbWUnKVxyXG5cclxuLy8gZGVsZXRlIGZyYW1lXHJcbmNvbnN0IGRlbGV0ZUZyYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZS1jdXJyZW50LWZyYW1lJylcclxuY29uc3QgdmVyaWZ5RGVsZXRlRnJhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmVyaWZ5LWRlbGV0ZS1mcmFtZScpXHJcbmNvbnN0IGNhbmNlbERlbGV0ZUZyYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbC1kZWxldGUtZnJhbWUnKVxyXG5cclxuLy8gYW5pbWF0aW9uXHJcbmNvbnN0IHNhdmVBbmltYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZS1hbmltYXRpb24nKVxyXG5jb25zdCBva1NhdmVBbmltYXRpb25Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvay1zYXZlLWFuaW1hdGlvbicpXHJcblxyXG4vLyBhbWJpZW50IGxpZ2h0XHJcbmNvbnN0IHJlZEFtYmllbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVkLXNsaWRlcicpO1xyXG5jb25zdCBncmVlbkFtYmllbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JlZW4tc2xpZGVyJyk7XHJcbmNvbnN0IGJsdWVBbWJpZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JsdWUtc2xpZGVyJyk7XHJcblxyXG4vLyBsaWdodCBwb3NpdGlvblxyXG5jb25zdCBsaWdodFggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlnaHQteC1zbGlkZXInKTtcclxuY29uc3QgbGlnaHRZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpZ2h0LXktc2xpZGVyJyk7XHJcbmNvbnN0IGxpZ2h0WiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaWdodC16LXNsaWRlcicpO1xyXG5cclxuLy8gbWF0ZXJpYWwgc2VsZWN0aW9uXHJcbmNvbnN0IG1hdGVyaWFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hdGVyaWFsLXNlbGVjdGlvbicpO1xyXG5cclxuLy8gcGhvbmdcclxuY29uc3Qgc2hpbmluZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaW5pbmVzcy1zbGlkZXInKTtcclxuY29uc3Qgc3BlY3VsYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BlY3VsYXItc2xpZGVyJyk7XHJcbmNvbnN0IGRpZmZ1c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlmZnVzZS1zbGlkZXInKTtcclxuY29uc3QgYW1iaWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbWJpZW50LXNsaWRlcicpO1xyXG5cclxuLy8gY29sb3JzXHJcbmNvbnN0IGJhc2ljQ29sb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFzaWMtY29sb3InKTtcclxuY29uc3QgZGlmZnVzZUNvbG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpZmZ1c2UtY29sb3InKTtcclxuY29uc3Qgc3BlY3VsYXJDb2xvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGVjdWxhci1jb2xvcicpO1xyXG5jb25zdCBhbWJpZW50Q29sb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW1iaWVudC1jb2xvcicpO1xyXG5cclxuLy8gbm9kZSBtYW5hZ2VyXHJcbmV4cG9ydCBjb25zdCBub2RlTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub2RlLW5hbWUnKTtcclxuY29uc3QgcmVuYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbmFtZS1idG4nKTtcclxuY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZS1idG4nKTtcclxuY29uc3QgYWRkQ2hpbGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWNoaWxkLWJ0bicpXHJcbmNvbnN0IGltcG9ydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbXBvcnQtYnRuJyk7XHJcbmNvbnN0IGV4cG9ydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHBvcnQtYnRuJyk7XHJcblxyXG4vLyBzYXZlIGFuZCBsb2FkXHJcbmNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZS1idG4nKTsgXHJcbmNvbnN0IGxvYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZC1idG4nKTtcclxuXHJcblxyXG4vLyBpbml0aWFsXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0T3B0aW9uTW9kZWwobW9kZWwpe1xyXG4gICAgbW9kZWxTZWxlY3Rpb24uaW5uZXJIVE1MID0gJyc7XHJcbiAgICBtb2RlbC5mb3JFYWNoKChvYmplY3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IGluZGV4O1xyXG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG9iamVjdFswXS5uYW1lO1xyXG4gICAgICAgIG1vZGVsU2VsZWN0aW9uLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICB9KVxyXG59XHJcblxyXG4vLyBldmVudCBsaXN0ZW5lclxyXG50cmFuc2xhdGlvblguYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgdGFyZ2V0LnRyYW5zZm9ybS50cmFuc2xhdGVbMF0gPSAoMiAqIHRyYW5zbGF0aW9uWC52YWx1ZSkgLyAxMDA7XHJcbiAgICB0cmFuc2xhdGFpb25YVmFsdWUudGV4dENvbnRlbnQgPSB0YXJnZXQudHJhbnNmb3JtLnRyYW5zbGF0ZVswXTtcclxufSk7XHJcbnRyYW5zbGF0aW9uWS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQudHJhbnNmb3JtLnRyYW5zbGF0ZVsxXSA9ICgyICogdHJhbnNsYXRpb25ZLnZhbHVlKSAvIDEwMDtcclxuICAgIHRyYW5zbGF0YWlvbllWYWx1ZS50ZXh0Q29udGVudCA9IHRhcmdldC50cmFuc2Zvcm0udHJhbnNsYXRlWzFdO1xyXG59KTtcclxudHJhbnNsYXRpb25aLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIHRhcmdldC50cmFuc2Zvcm0udHJhbnNsYXRlWzJdID0gKDIgKiB0cmFuc2xhdGlvbloudmFsdWUpIC8gMTAwO1xyXG4gICAgdHJhbnNsYXRhaW9uWlZhbHVlLnRleHRDb250ZW50ID0gdGFyZ2V0LnRyYW5zZm9ybS50cmFuc2xhdGVbMl07XHJcbn0pO1xyXG5yb3RhdGlvblguYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgdGFyZ2V0LnRyYW5zZm9ybS5yb3RhdGVbMF0gPSBkZWdUb1JhZChyb3RhdGlvblgudmFsdWUpO1xyXG4gICAgcm90YXRpb25YVmFsdWUudGV4dENvbnRlbnQgPSByb3RhdGlvblgudmFsdWU7XHJcbn0pXHJcbnJvdGF0aW9uWS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQudHJhbnNmb3JtLnJvdGF0ZVsxXSA9IGRlZ1RvUmFkKHJvdGF0aW9uWS52YWx1ZSk7XHJcbiAgICByb3RhdGlvbllWYWx1ZS50ZXh0Q29udGVudCA9IHJvdGF0aW9uWS52YWx1ZTtcclxufSlcclxucm90YXRpb25aLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIHRhcmdldC50cmFuc2Zvcm0ucm90YXRlWzJdID0gZGVnVG9SYWQocm90YXRpb25aLnZhbHVlKTtcclxuICAgIHJvdGF0aW9uWlZhbHVlLnRleHRDb250ZW50ID0gcm90YXRpb25aLnZhbHVlO1xyXG59KVxyXG5zY2FsYXRpb25YLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIHRhcmdldC50cmFuc2Zvcm0uc2NhbGVbMF0gPSAgc2NhbGF0aW9uWC52YWx1ZSAvIDIwO1xyXG4gICAgc2NhbGF0aW9uWFZhbHVlLnRleHRDb250ZW50ID0gdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVswXTtcclxufSlcclxuc2NhbGF0aW9uWS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQudHJhbnNmb3JtLnNjYWxlWzFdID0gIHNjYWxhdGlvblkudmFsdWUgLyAyMDtcclxuICAgIHNjYWxhdGlvbllWYWx1ZS50ZXh0Q29udGVudCA9IHRhcmdldC50cmFuc2Zvcm0uc2NhbGVbMV07XHJcbn0pXHJcbnNjYWxhdGlvblouYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVsyXSA9ICBzY2FsYXRpb25aLnZhbHVlIC8gMjA7XHJcbiAgICBzY2FsYXRpb25aVmFsdWUudGV4dENvbnRlbnQgPSB0YXJnZXQudHJhbnNmb3JtLnNjYWxlWzJdO1xyXG59KVxyXG5cclxuLy8gbW9kZWwgc2VsZWN0aW9uXHJcbm1vZGVsU2VsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCl7ICAgXHJcbiAgICBjb25zb2xlLmxvZyhtb2RlbFNlbGVjdGlvbi52YWx1ZSk7XHJcbiAgICBjaGFuZ2VNb2RlbE9iamVjdChtb2RlbFNlbGVjdGlvbi52YWx1ZSk7XHJcbn0pXHJcblxyXG4vLyBjYW1lcmFcclxub3J0aG9ncmFwaGljLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIHNldFByb2plY3Rpb25UeXBlKFwib3J0aG9ncmFwaGljXCIpO1xyXG59KVxyXG5cclxub2JsaXF1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBzZXRQcm9qZWN0aW9uVHlwZShcIm9ibGlxdWVcIik7XHJcbn0pXHJcblxyXG5wZXJzcGVjdGl2ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBzZXRQcm9qZWN0aW9uVHlwZShcInBlcnNwZWN0aXZlXCIpO1xyXG59KVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ29tcG9uZW50ICgpIHtcclxuICAgIGNvbXBvbmVudENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDb21wb25lbnQodHJlZUxldmVsID0gMCwgb2JqZWN0cyl7XHJcbiAgICBvYmplY3RzLmZvckVhY2goKG9iamVjdCkgPT4ge1xyXG4gICAgICAgIGxldCBuZXdDb21wb25lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXHJcbiAgICAgICAgbmV3Q29tcG9uZW50LnN0eWxlID0gJ3BhZGRpbmctbGVmdDogJyArIHRyZWVMZXZlbCoxLjUgKyAnZW07JztcclxuICAgICAgICBuZXdDb21wb25lbnQuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1heC13LWZpdCBjb21wb25lbnRcIj4ke29iamVjdC5uYW1lfTwvYnV0dG9uPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgbGV0IGNyZWF0ZWRCdXR0b24gPSBuZXdDb21wb25lbnQucXVlcnlTZWxlY3RvcignLmNvbXBvbmVudCcpO1xyXG4gICAgICAgIGNyZWF0ZWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldnQpIHtcclxuICAgICAgICAgICAgc2V0VGFyZ2V0KG9iamVjdCk7XHJcbiAgICAgICAgICAgIGhhbmRsZVRyYW5zZm9ybShvYmplY3QpO1xyXG4gICAgICAgICAgICBoYW5kbGVUb3RhbE5vZGVGcmFtZShvYmplY3QpO1xyXG4gICAgICAgICAgICBzZXROb2RlTWFuYWdlcihvYmplY3QpO1xyXG4gICAgICAgICAgICBsZXQgY29tcG9uZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb21wb25lbnRcIik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcG9uZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50c1tpXS5jbGFzc05hbWUgPSBjb21wb25lbnRzW2ldLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGJvcmRlci0yIGJvcmRlci1ibGFjayBweC01XCIsIFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV2dC5jdXJyZW50VGFyZ2V0LmNsYXNzTmFtZSArPSBcIiBib3JkZXItMiBib3JkZXItYmxhY2sgcHgtNVwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbXBvbmVudENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdDb21wb25lbnQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKG9iamVjdC5jaGlsZHJlbi5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgZGlzcGxheUNvbXBvbmVudCh0cmVlTGV2ZWwgKyAxLCBvYmplY3QuY2hpbGRyZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVUcmFuc2Zvcm0obm9kZSl7XHJcbiAgICAvLyBjaGFuZ2UgdHJhbnNsYXRpb24sIHJvdGF0aW9uLCBzY2FsYXRpb25cclxuICAgIGxldCBbdHgsIHR5LCB0el0gPSBub2RlLnRyYW5zZm9ybS50cmFuc2xhdGVcclxuICAgIC8vIHRpbWVzIDUwXHJcblxyXG4gICAgbGV0IFtyeCwgcnksIHJ6XSA9IG5vZGUudHJhbnNmb3JtLnJvdGF0ZVxyXG4gICAgLy8gY2hhbmdlIHdpdGggcmFkVG9EZWdcclxuICAgIGlmKHRydWUpe1xyXG4gICAgcnggPSByYWRUb0RlZyhyeCk7XHJcbiAgICByeSA9IHJhZFRvRGVnKHJ5KTtcclxuICAgIHJ6ID0gcmFkVG9EZWcocnopO1xyXG4gICAgfVxyXG4gICAgbGV0IFtzeCwgc3ksIHN6XSA9IG5vZGUudHJhbnNmb3JtLnNjYWxlXHJcbiAgXHJcbiAgICB0cmFuc2xhdGlvblgudmFsdWUgPSB0eCo1MDtcclxuICAgIHRyYW5zbGF0aW9uWS52YWx1ZSA9IHR5KjUwO1xyXG4gICAgdHJhbnNsYXRpb25aLnZhbHVlID0gdHoqNTA7XHJcbiAgICB0cmFuc2xhdGFpb25YVmFsdWUudGV4dENvbnRlbnQgPSB0eDtcclxuICAgIHRyYW5zbGF0YWlvbllWYWx1ZS50ZXh0Q29udGVudCA9IHR5O1xyXG4gICAgdHJhbnNsYXRhaW9uWlZhbHVlLnRleHRDb250ZW50ID0gdHo7XHJcblxyXG4gICAgcm90YXRpb25YLnZhbHVlID0gcng7XHJcbiAgICByb3RhdGlvblkudmFsdWUgPSByeTtcclxuICAgIHJvdGF0aW9uWi52YWx1ZSA9IHJ6O1xyXG4gICAgcm90YXRpb25YVmFsdWUudGV4dENvbnRlbnQgPSByeDtcclxuICAgIHJvdGF0aW9uWVZhbHVlLnRleHRDb250ZW50ID0gcnk7XHJcbiAgICByb3RhdGlvblpWYWx1ZS50ZXh0Q29udGVudCA9IHJ6O1xyXG5cclxuICAgIHNjYWxhdGlvblhWYWx1ZS50ZXh0Q29udGVudCA9IHN4O1xyXG4gICAgc2NhbGF0aW9uWVZhbHVlLnRleHRDb250ZW50ID0gc3k7XHJcbiAgICBzY2FsYXRpb25aVmFsdWUudGV4dENvbnRlbnQgPSBzejtcclxuICAgIHNjYWxhdGlvblgudmFsdWUgPSBzeCoyMDtcclxuICAgIHNjYWxhdGlvblkudmFsdWUgPSBzeCoyMDtcclxuICAgIHNjYWxhdGlvbloudmFsdWUgPSBzeioyMDtcclxuXHJcbiAgICAvLyBjaGFuZ2UgcGhvbmcgc2xpZGVyXHJcbiAgICByZWRBbWJpZW50LnZhbHVlID0gbm9kZS5hbWJpZW50WzBdO1xyXG4gICAgZ3JlZW5BbWJpZW50LnZhbHVlID0gbm9kZS5hbWJpZW50WzFdO1xyXG4gICAgYmx1ZUFtYmllbnQudmFsdWUgPSBub2RlLmFtYmllbnRbMl07XHJcbiAgICBzaGluaW5lc3MudmFsdWUgPSBub2RlLnNoaW5pbmVzcztcclxuICAgIFxyXG4gICAgYmFzaWNDb2xvci52YWx1ZSA9IHJnYlRvSGV4KG5vZGUucGlja2VkQ29sb3IpO1xyXG4gICAgZGlmZnVzZUNvbG9yLnZhbHVlID0gcmdiVG9IZXgobm9kZS5waWNrZWRDb2xvcik7XHJcbiAgICBzcGVjdWxhckNvbG9yLnZhbHVlID0gcmdiVG9IZXgobm9kZS5zcGVjdWxhcik7XHJcbiAgICBhbWJpZW50Q29sb3IudmFsdWUgPSByZ2JUb0hleChub2RlLnBob25nQW1iaWVudCk7XHJcbiAgICBcclxuICAgIGFtYmllbnQudmFsdWUgPSBub2RlLmNvbnN0LmthO1xyXG4gICAgZGlmZnVzZS52YWx1ZSA9IG5vZGUuY29uc3Qua2Q7XHJcbiAgICBzcGVjdWxhci52YWx1ZSA9IG5vZGUuY29uc3Qua3M7XHJcblxyXG4gICAgbWF0ZXJpYWwudmFsdWUgPSBub2RlLnBob25nID8gMSA6IDA7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDYW1lcmFWaWV3KG5vZGUpIHtcclxuICAgIGxldCBlcHNpbG9uID0gMC4wMDE7XHJcbiAgICAvL3JhZGl1cywgcm9sbCwgcGl0Y2hcclxuICAgIGxldCByYWRpdXMgPSBwYXJzZUZsb2F0KGNhbWVyYVJhZGl1cy52YWx1ZSkvMTA7XHJcbiAgICBsZXQgcm9sbCA9IGRlZ1RvUmFkKHBhcnNlRmxvYXQoY2FtZXJhUm9sbC52YWx1ZSkpO1xyXG4gICAgbGV0IHBpdGNoID0gZGVnVG9SYWQocGFyc2VGbG9hdChjYW1lcmFQaXRjaC52YWx1ZSkpO1xyXG4gICAgbm9kZS52aWV3TWF0cml4LmNhbWVyYSA9IFtcclxuICAgICAgICByb2xsLFxyXG4gICAgICAgIHBpdGNoLFxyXG4gICAgICAgIHJhZGl1cyA9PSAwID8gZXBzaWxvbiA6IHJhZGl1cywgIFxyXG4gICAgXTtcclxuICAgIGZvcihsZXQgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbil7XHJcbiAgICAgICAgaGFuZGxlQ2FtZXJhVmlldyhjaGlsZCk7XHJcbiAgICB9XHJcbn1cclxuY2FtZXJhUmFkaXVzLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGxldCB2YWwgPSBwYXJzZUZsb2F0KGNhbWVyYVJhZGl1cy52YWx1ZSk7XHJcbiAgICB2YWwgLz0gMTA7XHJcbiAgICBcclxuICAgIGhhbmRsZUNhbWVyYVZpZXcodGFyZ2V0Um9vdCk7XHJcbiAgICAvLyB1cGRhdGUgY2FtZXJhIHJhZGl1cyB2YWx1ZVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1yYWRpdXMtc2xpZGVyLXZhbHVlJykudGV4dENvbnRlbnQgPSB2YWw7XHJcbn0pXHJcbmNhbWVyYVJvbGwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgXHJcbiAgICBoYW5kbGVDYW1lcmFWaWV3KHRhcmdldFJvb3QpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXJvbGwtc2xpZGVyLXZhbHVlJykudGV4dENvbnRlbnQgPSBjYW1lcmFSb2xsLnZhbHVlO1xyXG59KVxyXG5jYW1lcmFQaXRjaC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgaGFuZGxlQ2FtZXJhVmlldyh0YXJnZXRSb290KVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1waXRjaC1zbGlkZXItdmFsdWUnKS50ZXh0Q29udGVudCA9IGNhbWVyYVBpdGNoLnZhbHVlO1xyXG59KVxyXG5cclxuLy90aGV0YSwgcGhpXHJcbmNhbWVyYVRoZXRhLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGxldCB0aGV0YSA9IGRlZ1RvUmFkKHBhcnNlRmxvYXQoY2FtZXJhVGhldGEudmFsdWUpKVxyXG4gICAgc2V0T2JsaXF1ZVRoZXRhKHRoZXRhKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtdGhldGEtc2xpZGVyLXZhbHVlJykudGV4dENvbnRlbnQgPSBjYW1lcmFUaGV0YS52YWx1ZTtcclxufSlcclxuXHJcbmNhbWVyYVBoaS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgcGhpID0gZGVnVG9SYWQocGFyc2VGbG9hdChjYW1lcmFQaGkudmFsdWUpKVxyXG4gICAgc2V0T2JsaXF1ZVBoaShwaGkpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1waGktc2xpZGVyLXZhbHVlJykudGV4dENvbnRlbnQgPSBjYW1lcmFQaGkudmFsdWU7XHJcbn0pXHJcblxyXG4vLyBkZWZhdXRsIHZpZXdcclxuZGVmYXVsdFZpZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgY2FtZXJhUmFkaXVzLnZhbHVlID0gNTA7XHJcbiAgICBjYW1lcmFSb2xsLnZhbHVlID0gMDtcclxuICAgIGNhbWVyYVBpdGNoLnZhbHVlID0gMDtcclxuICAgIGNhbWVyYVRoZXRhLnZhbHVlID0gOTA7XHJcbiAgICBjYW1lcmFQaGkudmFsdWUgPSA5MDtcclxuICAgIGhhbmRsZUNhbWVyYVZpZXcodGFyZ2V0Um9vdCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXJhZGl1cy1zbGlkZXItdmFsdWUnKS50ZXh0Q29udGVudCA9IDU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXJvbGwtc2xpZGVyLXZhbHVlJykudGV4dENvbnRlbnQgPSAwO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1waXRjaC1zbGlkZXItdmFsdWUnKS50ZXh0Q29udGVudCA9IDA7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXRoZXRhLXNsaWRlci12YWx1ZScpLnRleHRDb250ZW50ID0gOTA7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXBoaS1zbGlkZXItdmFsdWUnKS50ZXh0Q29udGVudCA9IDkwO1xyXG59KVxyXG5cclxudmFyIHN0YXRlID0ge1xyXG4gICAgb2JqZWN0czogW11cclxufTtcclxuXHJcbi8vIHRleHR1cmUgc2VsZWN0aW9uXHJcbm1hcHBpbmdTZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgY29uc29sZS5sb2cobWFwcGluZ1NlbGVjdGlvbi52YWx1ZSlcclxuICAgIGNoYW5nZU1hcHBpbmdUZXh0dXJlKHN0YXRlLm9iamVjdHMsIG1hcHBpbmdTZWxlY3Rpb24udmFsdWUpO1xyXG59KTtcclxuXHJcbi8vIGFuaW1hdGlvblxyXG5wYXVzZUNvbnRpbnVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGlmKHRhcmdldFJvb3QuYW5pbWF0aW9uLmlzQW5pbWF0ZSl7XHJcbiAgICAgICAgLy8gY2hhbmdlIHRvIGNvbnRpbnVlXHJcbiAgICAgICAgcGF1c2VDb250aW51ZS50ZXh0Q29udGVudCA9IFwiQ29udGludWVcIjtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgcGF1c2VDb250aW51ZS50ZXh0Q29udGVudCA9IFwiUGF1c2VcIjtcclxuICAgIH1cclxuICAgIEFuaW1hdGlvbi5wYXVzZUNvbnRpbnVlQW5pbWF0aW9uKHRhcmdldFJvb3QpO1xyXG4gICAgXHJcbn0pXHJcblxyXG5wbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIHBhdXNlQ29udGludWUudGV4dENvbnRlbnQgPSBcIlBhdXNlXCI7XHJcbiAgICBBbmltYXRpb24ucGxheUFuaW1hdGlvbih0YXJnZXRSb290KTtcclxufSlcclxuXHJcblxyXG5hdXRvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIC8vIGNoYW5nZSB0byBjb250aW51ZVxyXG4gICAgYXV0by50ZXh0Q29udGVudCA9ICF0YXJnZXRSb290LmFuaW1hdGlvbi5pc0F1dG8gPyBcIlN0b3AgQXV0b1wiIDogXCJBdXRvXCI7XHJcbiAgICBBbmltYXRpb24uc2V0QXV0byh0YXJnZXRSb290KTtcclxufSlcclxuXHJcbnJldmVyc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgcmV2ZXJzZS50ZXh0Q29udGVudCA9ICF0YXJnZXRSb290LmFuaW1hdGlvbi5pc1JldmVyc2UgPyBcIlN0b3AgUmV2ZXJzZVwiIDogXCJSZXZlcnNlXCI7XHJcbiAgICBBbmltYXRpb24ucmV2ZXJzZUFuaW1hdGlvbih0YXJnZXRSb290KTtcclxufSlcclxuXHJcbi8vIG5leHQsIHByZXYsIGZpcnN0LCBsYXN0XHJcbm5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgQW5pbWF0aW9uLmRpc2FibGVBbmltYXRpb24odGFyZ2V0Um9vdClcclxuICAgIEFuaW1hdGlvbi5uZXh0RnJhbWUodGFyZ2V0Um9vdCk7XHJcbiAgICBBbmltYXRpb24uaGFuZGxlR2VuZXJhbFRyYW5zZm9ybSh0YXJnZXRSb290LCBkb2N1bWVudCk7XHJcbiAgICBcclxufSlcclxuXHJcbnByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgQW5pbWF0aW9uLmRpc2FibGVBbmltYXRpb24odGFyZ2V0Um9vdClcclxuICAgIEFuaW1hdGlvbi5wcmV2RnJhbWUodGFyZ2V0Um9vdCk7XHJcbiAgICBBbmltYXRpb24uaGFuZGxlR2VuZXJhbFRyYW5zZm9ybSh0YXJnZXRSb290LCBkb2N1bWVudCk7XHJcbn0pXHJcblxyXG5maXJzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBBbmltYXRpb24uZmlyc3RGcmFtZSh0YXJnZXRSb290KTtcclxuICAgIEFuaW1hdGlvbi5oYW5kbGVHZW5lcmFsVHJhbnNmb3JtKHRhcmdldFJvb3QsIGRvY3VtZW50KTtcclxufSlcclxuXHJcbmxhc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgQW5pbWF0aW9uLmxhc3RGcmFtZSh0YXJnZXRSb290KTtcclxuICAgIEFuaW1hdGlvbi5oYW5kbGVHZW5lcmFsVHJhbnNmb3JtKHRhcmdldFJvb3QsIGRvY3VtZW50KTtcclxufSlcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUFtYmllbnRDb2xvcihub2RlKXtcclxuICAgIG5vZGUuYW1iaWVudFswXSA9IHJlZEFtYmllbnQudmFsdWU7XHJcbiAgICBub2RlLmFtYmllbnRbMV0gPSBncmVlbkFtYmllbnQudmFsdWU7XHJcbiAgICBub2RlLmFtYmllbnRbMl0gPSBibHVlQW1iaWVudC52YWx1ZTtcclxufVxyXG5cclxucmVkQW1iaWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBoYW5kbGVBbWJpZW50Q29sb3IodGFyZ2V0KTtcclxufSlcclxuXHJcbmdyZWVuQW1iaWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBoYW5kbGVBbWJpZW50Q29sb3IodGFyZ2V0KTtcclxufSlcclxuXHJcbmJsdWVBbWJpZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGhhbmRsZUFtYmllbnRDb2xvcih0YXJnZXQpO1xyXG59KVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlUGhvbmcobm9kZSl7XHJcbiAgICBub2RlLnNoaW5pbmVzcyA9IDEwMCAtIHNoaW5pbmVzcy52YWx1ZTtcclxuICAgIG5vZGUucGhvbmdBbWJpZW50ID0gaGV4VG9SZ2IoYW1iaWVudENvbG9yLnZhbHVlKTtcclxuICAgIG5vZGUuc3BlY3VsYXIgPSBoZXhUb1JnYihzcGVjdWxhckNvbG9yLnZhbHVlKTtcclxuICAgIG5vZGUuZGlmZnVzZSA9IGhleFRvUmdiKGRpZmZ1c2VDb2xvci52YWx1ZSk7XHJcbiAgICBub2RlLmNvbnN0LmtzID0gcGFyc2VGbG9hdChzcGVjdWxhci52YWx1ZSk7XHJcbiAgICBub2RlLmNvbnN0LmtkID0gcGFyc2VGbG9hdChkaWZmdXNlLnZhbHVlKTtcclxuICAgIG5vZGUuY29uc3Qua2EgPSBwYXJzZUZsb2F0KGFtYmllbnQudmFsdWUpO1xyXG4gICAgbm9kZS5waWNrZWRDb2xvciA9IGhleFRvUmdiKGJhc2ljQ29sb3IudmFsdWUpO1xyXG59XHJcblxyXG5zaGluaW5lc3MuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgaGFuZGxlUGhvbmcodGFyZ2V0KTtcclxufSk7XHJcblxyXG5hbWJpZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGhhbmRsZVBob25nKHRhcmdldCk7XHJcbn0pO1xyXG5cclxuc3BlY3VsYXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgaGFuZGxlUGhvbmcodGFyZ2V0KTtcclxufSk7XHJcblxyXG5kaWZmdXNlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGhhbmRsZVBob25nKHRhcmdldCk7XHJcbn0pO1xyXG5cclxuYW1iaWVudENvbG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGhhbmRsZVBob25nKHRhcmdldCk7XHJcbn0pO1xyXG5cclxuc3BlY3VsYXJDb2xvci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBoYW5kbGVQaG9uZyh0YXJnZXQpO1xyXG59KTtcclxuXHJcbmRpZmZ1c2VDb2xvci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQucGlja2VkQ29sb3IgPSBoZXhUb1JnYihiYXNpY0NvbG9yLnZhbHVlKTtcclxuICAgIGJhc2ljQ29sb3IudmFsdWUgPSBkaWZmdXNlQ29sb3IudmFsdWU7XHJcbn0pO1xyXG5cclxuYmFzaWNDb2xvci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQucGlja2VkQ29sb3IgPSBoZXhUb1JnYihiYXNpY0NvbG9yLnZhbHVlKTtcclxuICAgIGRpZmZ1c2VDb2xvci52YWx1ZSA9IGJhc2ljQ29sb3IudmFsdWU7XHJcbn0pO1xyXG5cclxubGlnaHRYLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGxpZ2h0RGlyZWN0aW9uWzBdID0gcGFyc2VGbG9hdChsaWdodFgudmFsdWUpO1xyXG59KVxyXG5cclxubGlnaHRZLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGxpZ2h0RGlyZWN0aW9uWzFdID0gcGFyc2VGbG9hdChsaWdodFkudmFsdWUpO1xyXG59KVxyXG5cclxubGlnaHRaLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGxpZ2h0RGlyZWN0aW9uWzJdID0gcGFyc2VGbG9hdChsaWdodFoudmFsdWUpO1xyXG59KVxyXG5cclxuLyoqIEhBTkRMRSBGUkFNRSAqL1xyXG5cclxuLy8gdG90YWwgZnJhbWVcclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVRvdGFsTW9kZWxGcmFtZShwYXJlbnRfbm9kZSl7XHJcbiAgICAvLyBnZXQgdmFsdWUgb2YgdG90YWwgbW9kZWwgZnJhbWUgdGV4dFxyXG4gICAgbGV0IF90b3RhbEZyYW1lVGV4dCA9IHRvdGFsTW9kZWxGcmFtZS50ZXh0Q29udGVudDtcclxuICAgIC8vIGdldCB0b3RhbCBmcmFtZVxyXG4gICAgbGV0IF90b3RhbEZyYW1lID0gQW5pbWF0aW9uLnRvdGFsTW9kZWxGcmFtZXMocGFyZW50X25vZGUpO1xyXG4gICAgLy8gc2V0IHRvdGFsIGZyYW1lXHJcbiAgICBfdG90YWxGcmFtZVRleHQgPSBcIlRvdGFsIE1vZGVsIEZyYW1lczogXCIrIF90b3RhbEZyYW1lO1xyXG4gICAgdG90YWxNb2RlbEZyYW1lLnRleHRDb250ZW50ID0gX3RvdGFsRnJhbWVUZXh0O1xyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVUb3RhbE5vZGVGcmFtZShub2RlKXtcclxuICAgIGxldCBfdG90YWxGcmFtZVRleHQgPSB0b3RhbE5vZGVGcmFtZS50ZXh0Q29udGVudDtcclxuICAgIGxldCBfdG90YWxGcmFtZSA9IEFuaW1hdGlvbi50b3RhbE5vZGVGcmFtZXMobm9kZSk7XHJcbiAgICBfdG90YWxGcmFtZVRleHQgPSBcIlRvdGFsIE5vZGUgRnJhbWVzOiBcIiArIF90b3RhbEZyYW1lXHJcbiAgICB0b3RhbE5vZGVGcmFtZS50ZXh0Q29udGVudCA9IF90b3RhbEZyYW1lVGV4dDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUZwcygpe1xyXG4gICAgY3VycmVudEZQUy50ZXh0Q29udGVudCA9IFwiQ3VycmVudCBGUFM6IFwiICsgZnBzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQ3VycmVudE1vZGVsRnJhbWUocGFyZW50X21vZGVsKXtcclxuICAgIGxldCBfY3VycmVudEZyYW1lID0gQW5pbWF0aW9uLmN1cnJlbnRNb2RlbEZyYW1lKHBhcmVudF9tb2RlbClcclxuICAgIGN1cnJlbnRNb2RlbEZyYW1lLnRleHRDb250ZW50ID0gXCJDdXJyZW50IE1vZGVsIEZyYW1lOiBcIiArIF9jdXJyZW50RnJhbWVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUN1cnJlbnROb2RlRnJhbWUobm9kZSl7XHJcbiAgICBsZXQgX2N1cnJGcmFtZSA9IEFuaW1hdGlvbi5jdXJyZW50Tm9kZUZyYW1lKG5vZGUpXHJcbiAgICBjdXJyZW50Tm9kZUZyYW1lLnRleHRDb250ZW50ID0gXCJDdXJyZW50IE5vZGUgRnJhbWU6IFwiICsgX2N1cnJGcmFtZVxyXG59XHJcblxyXG4vLyBhZGQgRnJhbWUgbWVjaGFuaXNtXHJcbmNhbmNlbEFkZEZyYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGFkZEZyYW1lTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWZyYW1lLW1vZGFsJylcclxuICAgIGFkZEZyYW1lTW9kYWwuY2xhc3NOYW1lID0gYWRkRnJhbWVNb2RhbC5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxyXG59KVxyXG5cclxuYWRkRnJhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgYWRkRnJhbWVNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtZnJhbWUtbW9kYWwnKVxyXG4gICAgYWRkRnJhbWVNb2RhbC5jbGFzc05hbWUgPSBhZGRGcmFtZU1vZGFsLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGhpZGRlblwiLCBcIlwiKVxyXG59KVxyXG5cclxudmVyaWZ5QWRkRnJhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgQW5pbWF0aW9uLmRpc2FibGVBbmltYXRpb24odGFyZ2V0Um9vdCk7XHJcbiAgICBsZXQgdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRyYW5zbGF0aW9uLXgnKS52YWx1ZVxyXG4gICAgbGV0IHR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10cmFuc2xhdGlvbi15JykudmFsdWVcclxuICAgIGxldCB0eiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdHJhbnNsYXRpb24teicpLnZhbHVlXHJcbiAgICBcclxuICAgIC8vIHJhZHNcclxuICAgIGxldCByeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcm90YXRpb24teCcpLnZhbHVlXHJcbiAgICBsZXQgcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXJvdGF0aW9uLXknKS52YWx1ZVxyXG4gICAgbGV0IHJ6ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1yb3RhdGlvbi16JykudmFsdWVcclxuXHJcbiAgICBsZXQgc3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXNjYWxhdGlvbi14JykudmFsdWVcclxuICAgIGxldCBzeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtc2NhbGF0aW9uLXknKS52YWx1ZVxyXG4gICAgbGV0IHN6ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1zY2FsYXRpb24teicpLnZhbHVlXHJcblxyXG4gICAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgICAgICB0cmFuc2xhdGUgOiBbdHgsIHR5LCB0el0sXHJcbiAgICAgICAgcm90YXRlIDogW2RlZ1RvUmFkKHJ4KSwgZGVnVG9SYWQocnkpLCBkZWdUb1JhZChyeildLFxyXG4gICAgICAgIHNjYWxlIDogW3N4LCBzeSwgc3pdXHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZih0YXJnZXQuYW5pbWF0aW9uLmZyYW1lcyAhPT0gbnVsbCl7XHJcbiAgICAgICAgdGFyZ2V0LmFuaW1hdGlvbi5mcmFtZXMucHVzaCh0cmFuc2Zvcm0pXHJcbiAgICAgICAgaGFuZGxlVG90YWxNb2RlbEZyYW1lKHRhcmdldFJvb3QpO1xyXG4gICAgICAgIGhhbmRsZVRvdGFsTm9kZUZyYW1lKHRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBhZGRGcmFtZU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1mcmFtZS1tb2RhbCcpXHJcbiAgICBhZGRGcmFtZU1vZGFsLmNsYXNzTmFtZSA9IGFkZEZyYW1lTW9kYWwuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcclxuXHJcbn0pXHJcblxyXG4vL2VkaXQgZnJhbWVcclxuXHJcbmVkaXRGcmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBlZGl0RnJhbWVNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWZyYW1lLW1vZGFsJylcclxuICAgIGVkaXRGcmFtZU1vZGFsLmNsYXNzTmFtZSA9IGVkaXRGcmFtZU1vZGFsLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGhpZGRlblwiLCBcIlwiKVxyXG4gICAgLy8gc2V0IHZhbHVlXHJcbiAgICBsZXQgdHJhbnNmb3JtID0gdGFyZ2V0LnRyYW5zZm9ybVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdHJhbnNsYXRpb24teCcpLnZhbHVlID0gdHJhbnNmb3JtLnRyYW5zbGF0ZVswXVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdHJhbnNsYXRpb24teScpLnZhbHVlID0gdHJhbnNmb3JtLnRyYW5zbGF0ZVsxXVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdHJhbnNsYXRpb24teicpLnZhbHVlID0gdHJhbnNmb3JtLnRyYW5zbGF0ZVsyXVxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXJvdGF0aW9uLXgnKS52YWx1ZSA9IHJhZFRvRGVnKHRyYW5zZm9ybS5yb3RhdGVbMF0pXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1yb3RhdGlvbi15JykudmFsdWUgPSByYWRUb0RlZyh0cmFuc2Zvcm0ucm90YXRlWzFdKVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcm90YXRpb24teicpLnZhbHVlID0gcmFkVG9EZWcodHJhbnNmb3JtLnJvdGF0ZVsyXSlcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1zY2FsYXRpb24teCcpLnZhbHVlID0gdHJhbnNmb3JtLnNjYWxlWzBdXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1zY2FsYXRpb24teScpLnZhbHVlID0gdHJhbnNmb3JtLnNjYWxlWzFdXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1zY2FsYXRpb24teicpLnZhbHVlID0gdHJhbnNmb3JtLnNjYWxlWzJdXHJcbn0pXHJcblxyXG5jYW5jZWxFZGl0RnJhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgZWRpdEZyYW1lTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1mcmFtZS1tb2RhbCcpXHJcbiAgICBlZGl0RnJhbWVNb2RhbC5jbGFzc05hbWUgPSBlZGl0RnJhbWVNb2RhbC5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxyXG59KVxyXG5cclxudmVyaWZ5RWRpdEZyYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIC8vIHR4LCB0eSwgdHosIHJ4LCByeSwgcnosIHN4LCBzeSwgc3pcclxuICAgIEFuaW1hdGlvbi5kaXNhYmxlQW5pbWF0aW9uKHRhcmdldFJvb3QpO1xyXG4gICAgbGV0IHR4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdHJhbnNsYXRpb24teCcpLnZhbHVlXHJcbiAgICBsZXQgdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10cmFuc2xhdGlvbi15JykudmFsdWVcclxuICAgIGxldCB0eiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRyYW5zbGF0aW9uLXonKS52YWx1ZVxyXG5cclxuICAgIGxldCByeCA9IGRlZ1RvUmFkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXJvdGF0aW9uLXgnKS52YWx1ZSlcclxuICAgIGxldCByeSA9IGRlZ1RvUmFkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXJvdGF0aW9uLXknKS52YWx1ZSlcclxuICAgIGxldCByeiA9IGRlZ1RvUmFkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXJvdGF0aW9uLXonKS52YWx1ZSlcclxuXHJcbiAgICBsZXQgc3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1zY2FsYXRpb24teCcpLnZhbHVlXHJcbiAgICBsZXQgc3kgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1zY2FsYXRpb24teScpLnZhbHVlXHJcbiAgICBsZXQgc3ogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1zY2FsYXRpb24teicpLnZhbHVlXHJcblxyXG4gICAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgICAgICB0cmFuc2xhdGUgOiBbdHgsIHR5LCB0el0sXHJcbiAgICAgICAgcm90YXRlIDogW3J4LCByeSwgcnpdLFxyXG4gICAgICAgIHNjYWxlIDogW3N4LCBzeSwgc3pdXHJcbiAgICB9XHJcblxyXG4gICAgQW5pbWF0aW9uLmVkaXRDdXJyZW50RnJhbWUodGFyZ2V0LCB0cmFuc2Zvcm0pO1xyXG5cclxuICAgIC8vIGRpc2FibGUgbW9kYWxcclxuICAgIGNvbnN0IGVkaXRGcmFtZU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZnJhbWUtbW9kYWwnKVxyXG4gICAgZWRpdEZyYW1lTW9kYWwuY2xhc3NOYW1lID0gZWRpdEZyYW1lTW9kYWwuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcclxuXHJcbn0pXHJcblxyXG4vLyBkZWxldGUgZnJhbWVcclxuZGVsZXRlRnJhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgZGVsZXRlRnJhbWVNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGUtZnJhbWUtbW9kYWwnKVxyXG4gICAgZGVsZXRlRnJhbWVNb2RhbC5jbGFzc05hbWUgPSBkZWxldGVGcmFtZU1vZGFsLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGhpZGRlblwiLCBcIlwiKVxyXG59KVxyXG5cclxuY2FuY2VsRGVsZXRlRnJhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgZGVsZXRlRnJhbWVNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGUtZnJhbWUtbW9kYWwnKVxyXG4gICAgZGVsZXRlRnJhbWVNb2RhbC5jbGFzc05hbWUgPSBkZWxldGVGcmFtZU1vZGFsLmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXHJcbn0pXHJcblxyXG52ZXJpZnlEZWxldGVGcmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBBbmltYXRpb24uZGlzYWJsZUFuaW1hdGlvbih0YXJnZXRSb290KTtcclxuXHJcbiAgICAvLyBkZWxldGUgZnJhbWVcclxuICAgIEFuaW1hdGlvbi5kZWxldGVDdXJyZW50RnJhbWUodGFyZ2V0KTtcclxuXHJcbiAgICAvLyB1cGRhdGUgbm9kZSBmcmFtZVxyXG4gICAgaGFuZGxlVG90YWxNb2RlbEZyYW1lKHRhcmdldFJvb3QpO1xyXG4gICAgaGFuZGxlVG90YWxOb2RlRnJhbWUodGFyZ2V0KTtcclxuICAgIEFuaW1hdGlvbi5oYW5kbGVHZW5lcmFsVHJhbnNmb3JtKHRhcmdldFJvb3QsZG9jdW1lbnQpXHJcbiAgICAvLyBpZih0YXJnZXQuYW5pbWF0aW9uLmZyYW1lcyAhPT0gbnVsbCl7XHJcbiAgICAvLyAgICAgdGFyZ2V0LmFuaW1hdGlvbi5mcmFtZXMucG9wKCk7XHJcbiAgICAvLyAgICAgaGFuZGxlVG90YWxNb2RlbEZyYW1lKHRhcmdldFJvb3QpO1xyXG4gICAgLy8gICAgIGhhbmRsZVRvdGFsTm9kZUZyYW1lKHRhcmdldCk7XHJcbiAgICAvLyB9XHJcbiAgICBjb25zdCBkZWxldGVGcmFtZU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZS1mcmFtZS1tb2RhbCcpXHJcbiAgICBkZWxldGVGcmFtZU1vZGFsLmNsYXNzTmFtZSA9IGRlbGV0ZUZyYW1lTW9kYWwuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcclxufSlcclxuXHJcbnNhdmVBbmltYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgbGV0IGFuaW1hdGlvbk1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtYW5pbWF0aW9uLW1vZGFsJylcclxuICAgIGFuaW1hdGlvbk1vZGFsLmNsYXNzTmFtZSA9IGFuaW1hdGlvbk1vZGFsLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGhpZGRlblwiLCBcIlwiKVxyXG59KVxyXG5cclxub2tTYXZlQW5pbWF0aW9uTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgbGV0IGFuaW1hdGlvbk1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtYW5pbWF0aW9uLW1vZGFsJylcclxuICAgIGFuaW1hdGlvbk1vZGFsLmNsYXNzTmFtZSA9IGFuaW1hdGlvbk1vZGFsLmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXHJcbn0pXHJcblxyXG5cclxuZnVuY3Rpb24gc2V0Tm9kZU1hbmFnZXIobm9kZSl7XHJcbiAgICBub2RlTmFtZS52YWx1ZSA9IG5vZGUubmFtZTtcclxufTtcclxuXHJcbnJlbmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICByZW5hbWVUYXJnZXQobm9kZU5hbWUudmFsdWUpO1xyXG4gICAgY2xlYXJDb21wb25lbnQoKTtcclxuICAgIGRpc3BsYXlDb21wb25lbnQoMCwgb2JqZWN0cyk7XHJcbn0pXHJcblxyXG5kZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgZGVsZXRlTm9kZSh0YXJnZXQubmFtZSk7XHJcbiAgICBjbGVhckNvbXBvbmVudCgpO1xyXG4gICAgZGlzcGxheUNvbXBvbmVudCgwLCBvYmplY3RzKTtcclxufSlcclxuXHJcbmFkZENoaWxkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBhZGROb2RlKG5vZGVOYW1lLnZhbHVlKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldClcclxufSlcclxuXHJcbnNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgc2F2ZUpTT04ob2JqZWN0cyk7XHJcbn0pO1xyXG5cclxubG9hZC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICBsb2FkSlNPTihldmVudC50YXJnZXQsIGZ1bmN0aW9uKG9iamVjdHMpe1xyXG4gICAgICAgIGxvYWRPYmplY3RzKG9iamVjdHMpO1xyXG4gICAgICAgIGNvbnN0IGltcG9ydGVkT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgaW1wb3J0ZWRPcHRpb24udmFsdWUgPSBtb2RlbC5sZW5ndGg7XHJcbiAgICAgICAgaW1wb3J0ZWRPcHRpb24udGV4dCA9IG9iamVjdHNbMF0ubmFtZTtcclxuICAgICAgICBtb2RlbFNlbGVjdGlvbi5hcHBlbmRDaGlsZChpbXBvcnRlZE9wdGlvbik7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIFNldCB0aGUgdmFsdWUgb2YgbW9kZWxTZWxlY3Rpb24gdG8gXCJpbXBvcnRlZFwiXHJcbiAgICAgICAgbW9kZWxTZWxlY3Rpb24udmFsdWUgPSBtb2RlbC5sZW5ndGg7XHJcbiAgICAgICAgYWRkTW9kZWwob2JqZWN0cyk7XHJcbiAgICB9KTtcclxufSlcclxuXHJcbmV4cG9ydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zb2xlLmxvZyhbdGFyZ2V0XSk7XHJcbiAgICBzYXZlSlNPTihbdGFyZ2V0XSk7XHJcbn0pO1xyXG5cclxuaW1wb3J0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgIGxvYWRKU09OKGV2ZW50LnRhcmdldCwgZnVuY3Rpb24ob2JqZWN0KXtcclxuICAgICAgICBvYmplY3RbMF0uc2V0UGFyZW50KHRhcmdldCk7XHJcbiAgICAgICAgY2xlYXJDb21wb25lbnQoKTtcclxuICAgICAgICBkaXNwbGF5Q29tcG9uZW50KDAsIG9iamVjdHMpO1xyXG4gICAgfSk7XHJcbn0pXHJcblxyXG5cclxuLyoqXHJcbiAqIENoYXJhY3RlciBNb3ZlbWVudFxyXG4gKi9cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgc3dpdGNoKGV2ZW50LmtleSkge1xyXG4gICAgICAgIGNhc2UgJ0Fycm93VXAnOlxyXG4gICAgICAgICAgICBDaGFyYWN0ZXJDb250cm9sbGVyLnZ6ID0gMWUtMi80O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxyXG4gICAgICAgICAgICBDaGFyYWN0ZXJDb250cm9sbGVyLnZ6ID0gLTFlLTIvNDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcclxuICAgICAgICAgICAgQ2hhcmFjdGVyQ29udHJvbGxlci52eCA9IC0xZS0yLzQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxyXG4gICAgICAgICAgICBDaGFyYWN0ZXJDb250cm9sbGVyLnZ4ID0gMWUtMi80O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyBoYW5kbGUgc3BhY2VcclxuICAgICAgICBjYXNlICcgJzpcclxuICAgICAgICAgICAgaWYoQ2hhcmFjdGVyQ29udHJvbGxlci5pc0p1bXBpbmcpIGJyZWFrO1xyXG4gICAgICAgICAgICBDaGFyYWN0ZXJDb250cm9sbGVyLmlzSnVtcGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIENoYXJhY3RlckNvbnRyb2xsZXIuY3VycmVudEdyb3VuZCA9IHRhcmdldFJvb3QudHJhbnNmb3JtLnRyYW5zbGF0ZVsxXTtcclxuICAgICAgICAgICAgdGFyZ2V0Um9vdC50cmFuc2Zvcm0udHJhbnNsYXRlWzFdICs9IDFlLTIvNDtcclxuICAgICAgICAgICAgQ2hhcmFjdGVyQ29udHJvbGxlci52eSA9IDFlLTIvMjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgLy8gSGFuZGxlIG90aGVyIGtleXMgaWYgbmVlZGVkXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbm1hdGVyaWFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQucGhvbmcgPSBtYXRlcmlhbC52YWx1ZSA9PSAxID8gdHJ1ZSA6IGZhbHNlO1xyXG59KTsiLCJpbXBvcnQgcGlnTW9kZWwgZnJvbSBcIi4vc3RydWN0cy9tb2RlbC9waWcuanNcIjtcclxuaW1wb3J0IGNoaWNrZW5Nb2RlbCBmcm9tIFwiLi9zdHJ1Y3RzL21vZGVsL2NoaWNrZW4uanNcIjtcclxuaW1wb3J0IGZveE1vZGVsIGZyb20gXCIuL3N0cnVjdHMvbW9kZWwvZm94LmpzXCI7XHJcbmltcG9ydCBNYXQ0IGZyb20gXCIuL3N0cnVjdHMvbWF0aC9NYXQ0LmpzXCI7XHJcbmltcG9ydCBWZWMzIGZyb20gXCIuL3N0cnVjdHMvbWF0aC9WZWMzLmpzXCI7XHJcbmltcG9ydCBWZWM0IGZyb20gXCIuL3N0cnVjdHMvbWF0aC9WZWM0LmpzXCI7XHJcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4vdXRpbHMvQ2FtZXJhLmpzXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlDb21wb25lbnQsIFxyXG4gIGNsZWFyQ29tcG9uZW50LCBcclxuICBpbml0T3B0aW9uTW9kZWwsIFxyXG4gIGhhbmRsZVRyYW5zZm9ybSxcclxuICBoYW5kbGVGcHMsIFxyXG4gIGhhbmRsZVRvdGFsTW9kZWxGcmFtZSxcclxuICBoYW5kbGVUb3RhbE5vZGVGcmFtZSxcclxuICBoYW5kbGVDdXJyZW50TW9kZWxGcmFtZSxcclxuICBoYW5kbGVDdXJyZW50Tm9kZUZyYW1lLFxyXG4gIG5vZGVOYW1lfSBmcm9tIFwiLi9oYW5kbGVyL2V2ZW50SGFuZGxlci5qc1wiO1xyXG5pbXBvcnQgaG9sbG93TW9kZWwgZnJvbSBcIi4vc3RydWN0cy9tb2RlbC9ob2xsb3dUaGluZ3kuanNcIjtcclxuaW1wb3J0IGhvbGxvd1JpbmdNb2RlbCBmcm9tIFwiLi9zdHJ1Y3RzL21vZGVsL3JpbmcuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlUGFwZXJUZXh0dXJlLCBjcmVhdGVFbnZpcm9ubWVudFRleHR1cmUsIGNyZWF0ZUJ1bXBUZXh0dXJlIH0gZnJvbSBcIi4vdXRpbHMvdGV4dHVyZS5qc1wiXHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4vdXRpbHMvQW5pbWF0aW9uLmpzXCI7XHJcbmltcG9ydCBOb2RlIGZyb20gXCIuL3N0cnVjdHMvbm9kZS5qc1wiO1xyXG5pbXBvcnQgeyBkZWdUb1JhZCB9IGZyb20gXCIuL3N0cnVjdHMvbWF0aC9tYXRoVXRpbHMuanNcIjtcclxuaW1wb3J0IENoYXJhY3RlckNvbnRyb2xsZXIgZnJvbSBcIi4vdXRpbHMvQ2hhcmFjdGVyQ29udHJvbGxlci5qc1wiO1xyXG5pbXBvcnQgYm94TW9kZWwgZnJvbSBcIi4vc3RydWN0cy9ib3hNb2RlbC5qc1wiO1xyXG5cclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnbC1jYW52YXNcIik7XHJcbmNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbFwiKTtcclxuXHJcblxyXG5jb25zdCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZlcnRleC1zaGFkZXItM2RcIik/LnRleHRDb250ZW50O1xyXG5jb25zdCBmcmFnbWVudFNoYWRlclNvdXJjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJhZ21lbnQtc2hhZGVyLTNkXCIpPy50ZXh0Q29udGVudDtcclxuXHJcbi8vIHN0YXRlXHJcbmV4cG9ydCB2YXIgbW9kZWwgPSBbcGlnTW9kZWwsIGNoaWNrZW5Nb2RlbCwgZm94TW9kZWwsIGhvbGxvd01vZGVsLCBob2xsb3dSaW5nTW9kZWxdO1xyXG5leHBvcnQgdmFyIG9iamVjdHM7XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRPYmplY3RzKHZhbHVlKSB7XHJcbiAgb2JqZWN0cyA9IHZhbHVlO1xyXG59XHJcbmV4cG9ydCB2YXIgdGFyZ2V0O1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0VGFyZ2V0KHZhbHVlKSB7XHJcbiAgdGFyZ2V0ID0gdmFsdWU7XHJcbn1cclxuZXhwb3J0IHZhciB0YXJnZXRSb290O1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0VGFyZ2V0Um9vdCh2YWx1ZSkge1xyXG4gIHRhcmdldFJvb3QgPSB2YWx1ZTtcclxufVxyXG52YXIgbGlnaHRpbmc7XHJcbmV4cG9ydCB2YXIgbGlnaHREaXJlY3Rpb247XHJcbnZhciB0ZXh0dXJlO1xyXG52YXIgcHJvamVjdGlvbl90eXBlO1xyXG52YXIgcGhvbmcgPSB0cnVlO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFByb2plY3Rpb25UeXBlKG5ld1Byb2plY3Rpb24pIHtcclxuICBwcm9qZWN0aW9uX3R5cGUgPSBuZXdQcm9qZWN0aW9uO1xyXG59XHJcbnZhciBmYWN0b3I7XHJcbnZhciBvYmxpcXVlX3RoZXRhO1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0T2JsaXF1ZVRoZXRhKG5ld1RoZXRhKSB7XHJcbiAgb2JsaXF1ZV90aGV0YSA9IG5ld1RoZXRhO1xyXG59XHJcbnZhciBvYmxpcXVlX3BoaTtcclxuZXhwb3J0IGZ1bmN0aW9uIHNldE9ibGlxdWVQaGkobmV3UGhpKSB7XHJcbiAgb2JsaXF1ZV9waGkgPSBuZXdQaGk7XHJcbn1cclxudmFyIG5vcm1hbGl6ZUxpZ2h0O1xyXG52YXIgd29ybGRWaWV3UHJvamVjdGlvbk1hdHJpeDtcclxudmFyIGN1YmVDb3VudCA9IDA7XHJcblxyXG4vLyBhbmltYXRpb25cclxudmFyIHRfYW5pbWF0aW9uID0gMDtcclxudmFyIHRfdGV4dF9mcHMgPSAwO1xyXG52YXIgZnJlcV9sb29wID0gNjA7XHJcbnZhciBmcmVxX3RleHRfZnBzID0gMjtcclxudmFyIGxvb3BfcGVyaW9kID0gMTAwMC9mcmVxX2xvb3A7XHJcbnZhciB0ZXh0X2Zwc19wZXJpb2QgPSAxMDAwL2ZyZXFfdGV4dF9mcHM7XHJcbmV4cG9ydCB2YXIgZnBzID0gMDtcclxuXHJcbmluaXRTdGF0ZSgpO1xyXG5cclxuZnVuY3Rpb24gaW5pdFN0YXRlKCkge1xyXG4gICAgb2JqZWN0cyA9IG1vZGVsWzBdO1xyXG4gICAgbGlnaHRpbmcgPSBmYWxzZTtcclxuICAgIGxpZ2h0RGlyZWN0aW9uID0gWzAuMCwgMC4wLCAxLjBdXHJcbiAgICB0ZXh0dXJlID0gXCJub25lXCI7XHJcbiAgICBwcm9qZWN0aW9uX3R5cGUgPSBcIm9ydGhvZ3JhcGhpY1wiO1xyXG4gICAgZmFjdG9yID0gMC4wO1xyXG4gICAgb2JsaXF1ZV90aGV0YSA9IDkwLjA7XHJcbiAgICBvYmxpcXVlX3BoaSA9IDkwLjA7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbW9kZWwubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIHNldERlZmF1bHRSb3RhdGlvbihtb2RlbFtpXSk7XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5Q29tcG9uZW50KDAsIG9iamVjdHMpO1xyXG4gICAgaW5pdE9wdGlvbk1vZGVsKG1vZGVsKTtcclxuICAgIGhhbmRsZVRyYW5zZm9ybShvYmplY3RzWzBdKVxyXG4gICAgaGFuZGxlVG90YWxNb2RlbEZyYW1lKG9iamVjdHNbMF0pXHJcbiAgICBoYW5kbGVUb3RhbE5vZGVGcmFtZShvYmplY3RzWzBdKVxyXG5cclxufVxyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIGlmKCFnbCl7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV2ViR0wgbm90IHN1cHBvcnRlZFwiKTtcclxuICAgIH1cclxuICAgIHRhcmdldCA9IG9iamVjdHNbMF07XHJcbiAgICB0YXJnZXRSb290ID0gdGFyZ2V0O1xyXG4gICAgcmVuZGVyKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldERlZmF1bHRTdGF0ZShvYmplY3RzKSB7XHJcbiAgICBvYmplY3RzLmZvckVhY2gob2JqZWN0ID0+IHtcclxuICAgICAgICBpZiAoIW9iamVjdC5tb2RlbC5jb2xvcnMpIHtcclxuICAgICAgICAgICAgaWYgKCFvYmplY3QucGlja2VkQ29sb3IpIHtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5tb2RlbC5jb2xvcnMgPSBnZW5lcmF0ZUNvbG9ycyhvYmplY3QubW9kZWwudmVydGljZXMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0Lm1vZGVsLmNvbG9ycyA9IGdlbmVyYXRlQ29sb3JzKFxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5tb2RlbC52ZXJ0aWNlcyxcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QucGlja2VkQ29sb3JcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIGlmICghb2JqZWN0LnByb2dyYW0gKSB7XHJcbiAgICAgICAgICAgIG9iamVjdC5wcm9ncmFtID0gY3JlYXRlU2hhZGVyUHJvZ3JhbShcclxuICAgICAgICAgICAgICAgIGdsLFxyXG4gICAgICAgICAgICAgICAgdmVydGV4U2hhZGVyU291cmNlLFxyXG4gICAgICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIG9iamVjdC5sb2NhbE1hdHJpeCA9IHNldFRyYW5zZm9ybShvYmplY3QpO1xyXG4gICAgICAgIGlmIChvYmplY3QuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBzZXREZWZhdWx0U3RhdGUob2JqZWN0LmNoaWxkcmVuKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRUcmFuc2Zvcm0ob2JqZWN0KSB7XHJcbiAgICAvKiBTZXR1cCB0cmFuc2Zvcm0gbWF0cml4ICovXHJcblxyXG4gICAgdmFyIHRyYW5zZm9ybU1hdHJpeCA9IE1hdDQudHJhbnNsYXRlKFxyXG4gICAgICBvYmplY3QudHJhbnNmb3JtLnRyYW5zbGF0ZVswXSxcclxuICAgICAgb2JqZWN0LnRyYW5zZm9ybS50cmFuc2xhdGVbMV0sXHJcbiAgICAgIG9iamVjdC50cmFuc2Zvcm0udHJhbnNsYXRlWzJdXHJcbiAgICApO1xyXG5cclxuICAgIGxldCBfY2VudGVyID0gb2JqZWN0Lm1vZGVsLmNlbnRlclxyXG4gICAgaWYoX2NlbnRlcil7XHJcbiAgICAgIHRyYW5zZm9ybU1hdHJpeCA9IE1hdDQubXVsdGlwbHkoXHJcbiAgICAgICAgdHJhbnNmb3JtTWF0cml4LFxyXG4gICAgICAgIE1hdDQudHJhbnNsYXRlKF9jZW50ZXJbMF0sIF9jZW50ZXJbMV0sIF9jZW50ZXJbMl0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRyYW5zZm9ybU1hdHJpeCA9IE1hdDQubXVsdGlwbHkoXHJcbiAgICAgIHRyYW5zZm9ybU1hdHJpeCxcclxuICAgICAgTWF0NC5yb3RhdGVYKG9iamVjdC50cmFuc2Zvcm0ucm90YXRlWzBdKVxyXG4gICAgKTtcclxuICBcclxuICAgIHRyYW5zZm9ybU1hdHJpeCA9IE1hdDQubXVsdGlwbHkoXHJcbiAgICAgIHRyYW5zZm9ybU1hdHJpeCxcclxuICAgICAgTWF0NC5yb3RhdGVZKG9iamVjdC50cmFuc2Zvcm0ucm90YXRlWzFdKVxyXG4gICAgKTtcclxuICBcclxuICAgIHRyYW5zZm9ybU1hdHJpeCA9IE1hdDQubXVsdGlwbHkoXHJcbiAgICAgIHRyYW5zZm9ybU1hdHJpeCxcclxuICAgICAgTWF0NC5yb3RhdGVaKG9iamVjdC50cmFuc2Zvcm0ucm90YXRlWzJdKVxyXG4gICAgKTtcclxuXHJcbiAgICBpZihfY2VudGVyKXtcclxuICAgICAgdHJhbnNmb3JtTWF0cml4ID0gTWF0NC5tdWx0aXBseShcclxuICAgICAgICB0cmFuc2Zvcm1NYXRyaXgsXHJcbiAgICAgICAgTWF0NC50cmFuc2xhdGUoLV9jZW50ZXJbMF0sIC1fY2VudGVyWzFdLCAtX2NlbnRlclsyXSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICBcclxuICAgIHRyYW5zZm9ybU1hdHJpeCA9IE1hdDQubXVsdGlwbHkoXHJcbiAgICAgIHRyYW5zZm9ybU1hdHJpeCxcclxuICAgICAgTWF0NC5zY2FsZShcclxuICAgICAgICBvYmplY3QudHJhbnNmb3JtLnNjYWxlWzBdLFxyXG4gICAgICAgIG9iamVjdC50cmFuc2Zvcm0uc2NhbGVbMV0sXHJcbiAgICAgICAgb2JqZWN0LnRyYW5zZm9ybS5zY2FsZVsyXVxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIFxyXG4gICAgcmV0dXJuIHRyYW5zZm9ybU1hdHJpeDtcclxuICB9XHJcblxyXG5mdW5jdGlvbiBzZXREZWZhdWx0Um90YXRpb24ob2JqZWN0cykge1xyXG4gICAgZm9yKGxldCBvYmplY3Qgb2Ygb2JqZWN0cyl7XHJcbiAgICAgICAgb2JqZWN0LnRyYW5zZm9ybS5yb3RhdGUgPSBvYmplY3QudHJhbnNmb3JtLnJvdGF0ZS5tYXAoKHZhbCkgPT4gZGVnVG9SYWQodmFsKSk7XHJcbiAgICAgICAgaWYob2JqZWN0LmNoaWxkcmVuLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBzZXREZWZhdWx0Um90YXRpb24ob2JqZWN0LmNoaWxkcmVuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJMb29wKG9iamVjdHMpIHtcclxuICAgIG9iamVjdHMuZm9yRWFjaChvYmplY3QgPT4ge1xyXG4gICAgICAgIGdsLnVzZVByb2dyYW0ob2JqZWN0LnByb2dyYW0pO1xyXG5cclxuICAgICAgICBvYmplY3Qud29ybGRNYXRyaXggPSBzZXRQcm9qZWN0aW9uTWF0cml4KG9iamVjdC53b3JsZE1hdHJpeCwgb2JqZWN0KVxyXG5cclxuXHJcbiAgICAgICAgdmFyIGFfcG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KG9iamVjdC5tb2RlbC52ZXJ0aWNlcy5mbGF0KDEpKTtcclxuICAgICAgICB2YXIgYV9ub3JtYWwgPSBuZXcgRmxvYXQzMkFycmF5KG9iamVjdC5tb2RlbC5ub3JtYWxzLmZsYXQoMSkpO1xyXG4gICAgICAgIHZhciBhX2NvbG9yID0gbmV3IEZsb2F0MzJBcnJheShvYmplY3QucGlja2VkQ29sb3IuZmxhdCgxKSk7XHJcbiAgICAgICAgdmFyIGFfdGV4dHVyZSA9IG5ldyBGbG9hdDMyQXJyYXkob2JqZWN0Lm1vZGVsLnRleENvb3JkKTtcclxuICAgICAgICB2YXIgYV90YW5nZW50ID0gbmV3IEZsb2F0MzJBcnJheShvYmplY3QubW9kZWwudGFuZ2VudHMuZmxhdCgxKSk7XHJcbiAgICAgICAgdmFyIGFfYml0YW5nZW50ID0gbmV3IEZsb2F0MzJBcnJheShvYmplY3QubW9kZWwuYml0YW5nZW50cy5mbGF0KDEpKTtcclxuXHJcbiAgICAgICAgc2V0QXR0cihnbCwgb2JqZWN0LnByb2dyYW0sIGFfcG9zaXRpb24sIGFfbm9ybWFsLCBhX2NvbG9yLCBhX3RleHR1cmUsIGFfdGFuZ2VudCwgYV9iaXRhbmdlbnQpO1xyXG4gICAgICAgIHZhciB1bmlmb3JtcyA9IHtcclxuICAgICAgICAgICAgdVdvcmxkVmlld1Byb2plY3Rpb246IG9iamVjdC53b3JsZE1hdHJpeCxcclxuICAgICAgICAgICAgdVdvcmxkSW52ZXJzZVRyYW5zcG9zZTogb2JqZWN0LndvcmxkSW52ZXJzZU1hdHJpeCxcclxuICAgICAgICAgICAgdUNvbG9yOiBvYmplY3QucGlja2VkQ29sb3IuY29uY2F0KDEuMCksXHJcbiAgICAgICAgICAgIHVBbWJpZW50Q29sb3I6IG9iamVjdC5hbWJpZW50LFxyXG4gICAgICAgICAgICB1RGlmZnVzZUNvbG9yOiBvYmplY3QucGlja2VkQ29sb3IsXHJcbiAgICAgICAgICAgIHVTcGVjdWxhckNvbG9yOiBvYmplY3Quc3BlY3VsYXIsXHJcbiAgICAgICAgICAgIHVTaGluaW5lc3M6IG9iamVjdC5zaGluaW5lc3MsXHJcbiAgICAgICAgICAgIHVMaWdodFBvczogbm9ybWFsaXplTGlnaHQsXHJcbiAgICAgICAgICAgIGthOiBvYmplY3QuY29uc3Qua2EsXHJcbiAgICAgICAgICAgIGtkOiBvYmplY3QuY29uc3Qua2QsXHJcbiAgICAgICAgICAgIGtzOiBvYmplY3QuY29uc3Qua3MsXHJcbiAgICAgICAgICAgIHVQaG9uZzogb2JqZWN0LnBob25nLFxyXG4gICAgICAgICAgICB1UGhvbmdBbWJpZW50Q29sb3I6IG9iamVjdC5waG9uZ0FtYmllbnQsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRVbmlmb3JtcyhnbCwgb2JqZWN0LnByb2dyYW0sIHVuaWZvcm1zKTtcclxuXHJcbiAgICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRVMsIDAsIG9iamVjdC5tb2RlbC52ZXJ0aWNlcy5sZW5ndGgpO1xyXG4gICAgICAgIGlmIChvYmplY3QuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZW5kZXJMb29wKG9iamVjdC5jaGlsZHJlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbndpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDEpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH0pKCk7XHJcblxyXG5cclxuZnVuY3Rpb24gcmVuZGVyKG5vdykge1xyXG4gICAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcclxuICAgIGdsLmNsZWFyQ29sb3IoMC44LCAwLjgsIDAuOCwgMS4wKTtcclxuICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcclxuXHJcbiAgICBnbC5lbmFibGUoZ2wuQ1VMTF9GQUNFKTtcclxuICAgIGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcclxuXHJcbiAgICBzZXREZWZhdWx0U3RhdGUob2JqZWN0cyk7XHJcbiAgICAvLyBkZWx0YSB0aW1lXHJcbiAgICBpZighbm93KSBub3cgPSAwO1xyXG4gICAgaWYodF9hbmltYXRpb24gPT09IDApIHRfYW5pbWF0aW9uID0gbm93O1xyXG4gICAgaWYodF90ZXh0X2ZwcyA9PT0gMCkgdF90ZXh0X2ZwcyA9IG5vdztcclxuXHJcbiAgICBpZigobm93IC0gdF9hbmltYXRpb24pID49IGxvb3BfcGVyaW9kKXtcclxuICAgICAgbGV0IGRlbHRhVGltZSA9IG5vdyAtIHRfYW5pbWF0aW9uO1xyXG4gICAgICB0X2FuaW1hdGlvbiA9IG5vdztcclxuICAgICAgZnBzID0gKDEwMDAgLyBkZWx0YVRpbWUpLnRvRml4ZWQoMik7XHJcbiAgICAgIEFuaW1hdGlvbi5hbmltYXRlKHRhcmdldFJvb3QsIGRlbHRhVGltZSk7XHJcbiAgICAgIENoYXJhY3RlckNvbnRyb2xsZXIudmVsb2NpdHlMb29wKHRhcmdldFJvb3QsIGRlbHRhVGltZSk7XHJcbiAgICAgIENoYXJhY3RlckNvbnRyb2xsZXIuZ3Jhdml0eUxvb3AodGFyZ2V0Um9vdCwgZGVsdGFUaW1lKTtcclxuICAgICAgaGFuZGxlQ3VycmVudE1vZGVsRnJhbWUodGFyZ2V0Um9vdClcclxuICAgICAgaGFuZGxlQ3VycmVudE5vZGVGcmFtZSh0YXJnZXQpXHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlmKChub3cgLSB0X3RleHRfZnBzKSA+PSB0ZXh0X2Zwc19wZXJpb2Qpe1xyXG4gICAgICB0X3RleHRfZnBzID0gbm93O1xyXG4gICAgICBoYW5kbGVGcHMoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb2JqZWN0c1swXS5zZXRXb3JsZE10eChudWxsKTtcclxuXHJcbiAgICBub3JtYWxpemVMaWdodCA9IFZlYzMudW5pdFZlY3RvcihWZWMzLmZyb21BcnJheShsaWdodERpcmVjdGlvbikpLmFzQXJyYXkoKVxyXG4gICAgcmVuZGVyTG9vcChvYmplY3RzKTtcclxuICAgIEFuaW1hdGlvbi5oYW5kbGVUcmFuc2Zvcm0odGFyZ2V0LCBkb2N1bWVudCk7XHJcbiAgICBcclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lKHJlbmRlcik7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldFByb2plY3Rpb25NYXRyaXgobWF0cml4LCBvYmplY3QpIHtcclxuICAgIC8vIGNvbnN0IGNhbWVyYSA9IHNldENhbWVyYShvYmplY3QpO1xyXG4gICAgY29uc3QgcHJvamVjdGlvblZpZXcgPSBDYW1lcmEucHJvamVjdGlvbk1hdHJpeChwcm9qZWN0aW9uX3R5cGUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVnVG9SYWQoNDUpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjYW52YXMud2lkdGggLyBjYW52YXMuaGVpZ2h0KSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3Qudmlld01hdHJpeC5uZWFyLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC52aWV3TWF0cml4LmZhcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ibGlxdWVfdGhldGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmxpcXVlX3BoaSlcclxuICAgIGNvbnN0IHZpZXdNYXRyaXggPSBDYW1lcmEudmlld01hdHJpeChvYmplY3Qudmlld01hdHJpeC5jYW1lcmEsIG9iamVjdC52aWV3TWF0cml4Lmxvb2tBdCwgb2JqZWN0LnZpZXdNYXRyaXgudXApO1xyXG4gICAgdmFyIHZpZXdQcm9qZWN0aW9uTWF0cml4ID0gTWF0NC5tdWx0aXBseShwcm9qZWN0aW9uVmlldywgdmlld01hdHJpeCk7XHJcbiAgICBpZiAoZmFjdG9yIDwgMC4wMSkge1xyXG4gICAgICAgIGZhY3RvciA9IDAuMDE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb2plY3Rpb25fdHlwZSA9PT0gXCJwZXJzcGVjdGl2ZVwiKSB7XHJcbiAgICAgICAgdmlld1Byb2plY3Rpb25NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICAgICAgICBDYW1lcmEubWFrZVpUb1dNYXRyaXgoZmFjdG9yKSxcclxuICAgICAgICAgICAgdmlld1Byb2plY3Rpb25NYXRyaXgsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB3b3JsZFZpZXdQcm9qZWN0aW9uTWF0cml4ID0gTWF0NC5tdWx0aXBseSh2aWV3UHJvamVjdGlvbk1hdHJpeCwgbWF0cml4KTtcclxuXHJcbiAgICByZXR1cm4gd29ybGRWaWV3UHJvamVjdGlvbk1hdHJpeDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VNb2RlbE9iamVjdCAoaW5kZXgpIHtcclxuICAgIG9iamVjdHMgPSBtb2RlbFtpbmRleF07XHJcbiAgICBzZXRUYXJnZXQob2JqZWN0c1swXSk7XHJcbiAgICBzZXRUYXJnZXRSb290KG9iamVjdHNbMF0pO1xyXG4gICAgY2xlYXJDb21wb25lbnQoKTtcclxuICAgIGRpc3BsYXlDb21wb25lbnQoMCwgb2JqZWN0cyk7XHJcbiAgICBoYW5kbGVUcmFuc2Zvcm0ob2JqZWN0c1swXSk7XHJcbiAgICBoYW5kbGVUb3RhbE1vZGVsRnJhbWUodGFyZ2V0Um9vdClcclxuICAgIGhhbmRsZVRvdGFsTm9kZUZyYW1lKHRhcmdldFJvb3QpXHJcbiAgICByZW5kZXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZU1hcHBpbmdUZXh0dXJlKG9iamVjdHMsIHRleHR1cmVUeXBlKSB7XHJcbiAgb2JqZWN0cy5mb3JFYWNoKChvYmplY3QpID0+IHtcclxuICAgIGlmICh0ZXh0dXJlVHlwZSA9PT0gXCIwXCIpIHtcclxuICAgICAgb2JqZWN0LnByb2dyYW0gPSBjcmVhdGVTaGFkZXJQcm9ncmFtKFxyXG4gICAgICAgIGdsLFxyXG4gICAgICAgIHZlcnRleF9zaGFkZXJfM2QsXHJcbiAgICAgICAgZnJhZ21lbnRfc2hhZGVyXzNkX25vX2xpZ2h0aW5nXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKHRleHR1cmVUeXBlID09PSBcIjFcIikge1xyXG4gICAgICBjcmVhdGVQYXBlclRleHR1cmUoZ2wpO1xyXG4gICAgICBvYmplY3QucHJvZ3JhbSA9IGNyZWF0ZVNoYWRlclByb2dyYW0oXHJcbiAgICAgICAgZ2wsXHJcbiAgICAgICAgdmVydGV4X3NoYWRlcl8zZCxcclxuICAgICAgICBmcmFnbWVudF9zaGFkZXJfdGV4dHVyZVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIGlmICh0ZXh0dXJlVHlwZSA9PT0gXCIyXCIpIHtcclxuICAgICAgY3JlYXRlRW52aXJvbm1lbnRUZXh0dXJlKGdsKTtcclxuICAgICAgb2JqZWN0LnByb2dyYW0gPSBjcmVhdGVTaGFkZXJQcm9ncmFtKFxyXG4gICAgICAgIGdsLFxyXG4gICAgICAgIHZlcnRleF9zaGFkZXJfM2QsXHJcbiAgICAgICAgZnJhZ21lbnRfc2hhZGVyX2Vudmlyb25tZW50XHJcbiAgICAgIClcclxuICAgIH0gZWxzZSBpZiAodGV4dHVyZVR5cGUgPT09IFwiM1wiKSB7XHJcbiAgICAgIGNyZWF0ZUJ1bXBUZXh0dXJlKGdsKTtcclxuICAgICAgb2JqZWN0LnByb2dyYW0gPSBjcmVhdGVTaGFkZXJQcm9ncmFtKFxyXG4gICAgICAgIGdsLFxyXG4gICAgICAgIHZlcnRleF9zaGFkZXJfM2QsXHJcbiAgICAgICAgZnJhZ21lbnRfc2hhZGVyX2J1bXBcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmIChvYmplY3QuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICBjaGFuZ2VNYXBwaW5nVGV4dHVyZShvYmplY3QuY2hpbGRyZW4sIHRleHR1cmVUeXBlKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmFtZVRhcmdldCAobmV3TmFtZSkge1xyXG4gIGZvciggbGV0IGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICBpZihvYmplY3RzW2ldLm5hbWUgPT09IHRhcmdldC5uYW1lKXtcclxuICAgICAgY29uc29sZS5sb2cob2JqZWN0c1tpXS5uYW1lKVxyXG4gICAgICBjb25zb2xlLmxvZyhuZXdOYW1lKVxyXG4gICAgICBvYmplY3RzW2ldLm5hbWUgPSBuZXdOYW1lO1xyXG4gICAgfVxyXG4gIH1cclxuICB0YXJnZXQubmFtZSA9IG5ld05hbWU7XHJcbiAgY2xlYXJDb21wb25lbnQoKTtcclxuICBkaXNwbGF5Q29tcG9uZW50KDAsIG9iamVjdHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlTm9kZSAobmFtZSkge1xyXG4gIGZ1bmN0aW9uIHJlbW92ZU5vZGUgKG5vZGUpIHtcclxuICAgIGlmIChub2RlLm5hbWUgPT09IG5hbWUpIHtcclxuICAgICAgb2JqZWN0cy5zcGxpY2Uob2JqZWN0cy5pbmRleE9mKG5vZGUpLCAxKTtcclxuICAgICAgbm9kZU5hbWUudmFsdWUgPSBcIlwiXHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gXHJcblxyXG4gICAgaWYgKG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAobm9kZS5jaGlsZHJlbltpXS5uYW1lID09PSBuYW1lKSB7XHJcbiAgICAgICAgICBub2RlLmNoaWxkcmVuLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgIG5vZGVOYW1lLnZhbHVlID0gXCJcIlxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZW1vdmVOb2RlKG5vZGUuY2hpbGRyZW5baV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlTm9kZShvYmplY3RzWzBdKTtcclxuICBjb25zb2xlLmxvZyhvYmplY3RzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5vZGUgKCkge1xyXG4gIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSgpOyBcclxuICBjdWJlQ291bnQrKztcclxuICBjaGVja05vZGUob2JqZWN0cywgXCJuZXdDdWJlXCIgKyBjdWJlQ291bnQpO1xyXG4gIG5ld05vZGUubmFtZSA9IFwibmV3Q3ViZVwiICsgY3ViZUNvdW50O1xyXG4gIG5ld05vZGUubW9kZWwgPSBib3hNb2RlbCgxLCAxLCAxLCBbMCwgMCwgMF0pO1xyXG4gIG5ld05vZGUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMCwgMCwgMF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgfTtcclxuICBuZXdOb2RlLnBpY2tlZENvbG9yID0gcmFuZG9tQ29sb3JzKCksXHJcbiAgbmV3Tm9kZS5hbWJpZW50ID0gWzEsMSwxXTtcclxuICBuZXdOb2RlLnBob25nID0gdHJ1ZTtcclxuICBuZXdOb2RlLnBob25nQW1iaWVudCA9IFswLDAsMF0sXHJcbiAgbmV3Tm9kZS5kaWZmdXNlID0gWzEsMSwxXTtcclxuICBuZXdOb2RlLnNwZWN1bGFyID0gWzEsMSwxXTtcclxuICBuZXdOb2RlLnNoaW5pbmVzcyA9IDE7XHJcbiAgbmV3Tm9kZS5jb25zdCA9IHtcclxuICAgICAga2Q6IDEuMCxcclxuICAgICAga3M6IDAuMCxcclxuICAgICAga2E6IDEuMCxcclxuICB9O1xyXG4gIG5ld05vZGUudmlld01hdHJpeCA9IHtcclxuICAgICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgICBuZWFyOiAwLjEsXHJcbiAgICAgIGZhcjogNTAsXHJcbiAgfTtcclxuICBuZXdOb2RlLmFuaW1hdGlvbiA9IHtcclxuICAgICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICB9O1xyXG4gIG5ld05vZGUud29ybGRNYXRyaXggPSB0YXJnZXQud29ybGRNYXRyaXg7XHJcbiAgaWYgKG9iamVjdHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICBuZXdOb2RlLnNldFBhcmVudCh0YXJnZXQpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBvYmplY3RzLnB1c2gobmV3Tm9kZSk7XHJcbiAgICB0YXJnZXQgPSBvYmplY3RzWzBdO1xyXG4gICAgdGFyZ2V0Um9vdCA9IG9iamVjdHNbMF07XHJcbiAgICByZW5kZXIoKTtcclxuICB9XHJcbiAgY2xlYXJDb21wb25lbnQoKTtcclxuICBkaXNwbGF5Q29tcG9uZW50KDAsIG9iamVjdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja05vZGUob2JqZWN0cywgbmFtZSkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKG9iamVjdHNbaV0ubmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICBjdWJlQ291bnQrKztcclxuICAgIH1cclxuICAgIGlmIChvYmplY3RzW2ldLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgY2hlY2tOb2RlKG9iamVjdHNbaV0uY2hpbGRyZW4sIG5hbWUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRPYmplY3RzKG9iamVjdHMpIHtcclxuICAgIHNldE9iamVjdHMob2JqZWN0cyk7XHJcbiAgICBzZXRUYXJnZXQob2JqZWN0c1swXSk7XHJcbiAgICBzZXRUYXJnZXRSb290KG9iamVjdHNbMF0pO1xyXG4gICAgY2xlYXJDb21wb25lbnQoKTtcclxuICAgIGRpc3BsYXlDb21wb25lbnQoMCwgb2JqZWN0cyk7XHJcbiAgICBoYW5kbGVUcmFuc2Zvcm0ob2JqZWN0c1swXSk7XHJcbiAgICBoYW5kbGVUb3RhbE1vZGVsRnJhbWUodGFyZ2V0Um9vdClcclxuICAgIGhhbmRsZVRvdGFsTm9kZUZyYW1lKHRhcmdldFJvb3QpXHJcbiAgICByZW5kZXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE1vZGVsKG9iamVjdCkge1xyXG4gIG1vZGVsLnB1c2gob2JqZWN0KTtcclxufSIsImltcG9ydCBWZWMzIGZyb20gXCIuL21hdGgvVmVjMy5qc1wiXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVWZXJ0aWNlcyhoZWlnaHQsIHdpZHRoLCBkZXB0aCwgb2Zmc2V0KSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIFtvZmZzZXRbMF0gLSB3aWR0aCAvIDIsIG9mZnNldFsxXSAtIGhlaWdodCAvIDIsIG9mZnNldFsyXSAtIGRlcHRoIC8gMl0sXHJcbiAgICBbb2Zmc2V0WzBdICsgd2lkdGggLyAyLCBvZmZzZXRbMV0gLSBoZWlnaHQgLyAyLCBvZmZzZXRbMl0gLSBkZXB0aCAvIDJdLFxyXG4gICAgW29mZnNldFswXSAtIHdpZHRoIC8gMiwgb2Zmc2V0WzFdICsgaGVpZ2h0IC8gMiwgb2Zmc2V0WzJdIC0gZGVwdGggLyAyXSxcclxuICAgIFtvZmZzZXRbMF0gKyB3aWR0aCAvIDIsIG9mZnNldFsxXSArIGhlaWdodCAvIDIsIG9mZnNldFsyXSAtIGRlcHRoIC8gMl0sXHJcbiAgICBbb2Zmc2V0WzBdIC0gd2lkdGggLyAyLCBvZmZzZXRbMV0gLSBoZWlnaHQgLyAyLCBvZmZzZXRbMl0gKyBkZXB0aCAvIDJdLFxyXG4gICAgW29mZnNldFswXSArIHdpZHRoIC8gMiwgb2Zmc2V0WzFdIC0gaGVpZ2h0IC8gMiwgb2Zmc2V0WzJdICsgZGVwdGggLyAyXSxcclxuICAgIFtvZmZzZXRbMF0gLSB3aWR0aCAvIDIsIG9mZnNldFsxXSArIGhlaWdodCAvIDIsIG9mZnNldFsyXSArIGRlcHRoIC8gMl0sXHJcbiAgICBbb2Zmc2V0WzBdICsgd2lkdGggLyAyLCBvZmZzZXRbMV0gKyBoZWlnaHQgLyAyLCBvZmZzZXRbMl0gKyBkZXB0aCAvIDJdLFxyXG4gIF1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlRmFjZXMoKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIFsxLCAzLCAyXSxcclxuICAgIFs0LCAyLCAzXSxcclxuICAgIFsxLCAyLCA1XSxcclxuICAgIFs2LCA1LCAyXSxcclxuICAgIFsxLCA1LCAzXSxcclxuICAgIFs1LCA3LCAzXSxcclxuICAgIFsyLCA0LCA2XSxcclxuICAgIFs4LCA2LCA0XSxcclxuICAgIFs0LCAzLCA4XSxcclxuICAgIFs3LCA4LCAzXSxcclxuICAgIFs1LCA2LCA3XSxcclxuICAgIFs4LCA3LCA2XSxcclxuICBdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVGV4Q29vciAoKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIDEsIDEsIDEsIDAsIDAsIDEsIDAsIDAsIDAsIDEsIDEsIDAsXHJcblxyXG4gICAgMCwgMSwgMSwgMSwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMSxcclxuXHJcbiAgICAwLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLFxyXG5cclxuICAgIDEsIDEsIDEsIDAsIDAsIDEsIDAsIDAsIDAsIDEsIDEsIDAsXHJcblxyXG4gICAgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMSwgMSwgMCwgMCxcclxuXHJcbiAgICAwLCAxLCAxLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAxLCAxLFxyXG4gIF1cclxufVxyXG5mdW5jdGlvbiBnZW5lcmF0ZVRhbmdlbnRzKCkge1xyXG4gIHJldHVybiBbXHJcbiAgICAvL2JhY2tcclxuICAgIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsXHJcbiAgICAvL2JvdHRvbVxyXG4gICAgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCxcclxuICAgIC8vbGVmdFxyXG4gICAgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCxcclxuICAgIC8vcmlnaHRcclxuICAgIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsXHJcbiAgICAvL3RvcFxyXG4gICAgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCxcclxuICAgIC8vZnJvbnRcclxuICAgIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsXHJcbiAgXVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUJpdGFuZ2VudHMoKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSxcclxuICAgICAgICAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLFxyXG4gICAgICAgIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsXHJcbiAgICAgICAgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCxcclxuICAgICAgICAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLFxyXG4gICAgXVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVOb3JtYWxzKHZlcnRpY2VzLCBmYWNlcykge1xyXG4gIGxldCBub3JtYWxzID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmYWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IGZhY2UgPSBmYWNlc1tpXTtcclxuICAgIGxldCB2MSA9IFZlYzMuZnJvbUFycmF5KHZlcnRpY2VzW2ZhY2VbMF0gLSAxXSlcclxuICAgIGxldCB2MiA9IFZlYzMuZnJvbUFycmF5KHZlcnRpY2VzW2ZhY2VbMV0gLSAxXSlcclxuICAgIGxldCB2MyA9IFZlYzMuZnJvbUFycmF5KHZlcnRpY2VzW2ZhY2VbMl0gLSAxXSlcclxuXHJcbiAgICBsZXQgdjF2MiA9IFZlYzMuc3ViKHYyLCB2MSk7XHJcbiAgICBsZXQgdjF2MyA9IFZlYzMuc3ViKHYzLHYxKTtcclxuXHJcbiAgICBsZXQgcmVzID0gVmVjMy51bml0VmVjdG9yKFZlYzMuY3Jvc3ModjF2Mix2MXYzKSkuYXNBcnJheSgpXHJcbiAgICBub3JtYWxzLnB1c2gocmVzKTtcclxuICAgIG5vcm1hbHMucHVzaChyZXMpO1xyXG4gICAgbm9ybWFscy5wdXNoKHJlcyk7XHJcbiAgfVxyXG4gIHJldHVybiBub3JtYWxzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbG9ycyh2ZXJ0aWNlcywgY29sb3IgPSBudWxsKSB7XHJcbiAgbGV0IGNvbG9ycyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpICs9IDMpIHtcclxuICAgIHZhciBjID0gY29sb3I7XHJcbiAgICBpZiAoY29sb3IgPT0gbnVsbCkge1xyXG4gICAgICBjID0gW01hdGgucmFuZG9tKCksIE1hdGgucmFuZG9tKCksIE1hdGgucmFuZG9tKCldO1xyXG4gICAgfSBcclxuICAgIGNvbG9ycy5wdXNoKGMpO1xyXG4gICAgY29sb3JzLnB1c2goYyk7XHJcbiAgICBjb2xvcnMucHVzaChjKTtcclxuICAgIGNvbG9ycy5wdXNoKGMpO1xyXG4gICAgY29sb3JzLnB1c2goYyk7XHJcbiAgICBjb2xvcnMucHVzaChjKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbG9ycztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYm94TW9kZWwoaGVpZ2h0LCB3aWR0aCwgZGVwdGgsIG9mZnNldCkge1xyXG5cclxuICBsZXQgdmVydGljZXMgPSBnZW5lcmF0ZVZlcnRpY2VzKGhlaWdodCwgd2lkdGgsIGRlcHRoLCBvZmZzZXQpO1xyXG4gIGxldCBjZW50ZXIgPSBbb2Zmc2V0WzBdLCBvZmZzZXRbMV0sIG9mZnNldFsyXV07XHJcbiAgbGV0IGZhY2VzID0gZ2VuZXJhdGVGYWNlcygpO1xyXG4gIGxldCB0ZXhDb29yZCA9IGdlbmVyYXRlVGV4Q29vcigpO1xyXG4gIGxldCBub3JtYWxzID0gZ2VuZXJhdGVOb3JtYWxzKHZlcnRpY2VzLCBmYWNlcyk7XHJcbiAgdmVydGljZXMgPSB0b1ZlcnRpY2VzKHZlcnRpY2VzLCBmYWNlcyk7XHJcblxyXG4gIGxldCB0YW5nZW50cyA9IGdlbmVyYXRlVGFuZ2VudHMoKTtcclxuICBsZXQgYml0YW5nZW50cyA9IGdlbmVyYXRlQml0YW5nZW50cygpO1xyXG4gIGxldCBjb2xvcnMgPSBnZW5lcmF0ZUNvbG9ycyh2ZXJ0aWNlcyk7XHJcbiAgXHJcbiAgcmV0dXJuIHtcclxuICAgIHZlcnRpY2VzOiB2ZXJ0aWNlcyxcclxuICAgIGZhY2VzOiBmYWNlcyxcclxuICAgIHRhbmdlbnRzOiB0YW5nZW50cyxcclxuICAgIGJpdGFuZ2VudHM6IGJpdGFuZ2VudHMsXHJcbiAgICBub3JtYWxzOiBub3JtYWxzLFxyXG4gICAgY29sb3JzOiBjb2xvcnMsXHJcbiAgICB0ZXhDb29yZDogdGV4Q29vcmQsXHJcbiAgICBjZW50ZXIgOiBjZW50ZXJcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBWZWM0IGZyb20gXCIuL1ZlYzQuanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0NHtcclxuICAgIHN0YXRpYyBnZXRFbXB0eSgpe1xyXG4gICAgICAgIHJldHVybiBbMCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMF1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0SWRlbnRpdHkoKXtcclxuICAgICAgICByZXR1cm4gWzEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDFdO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgZ2V0VHJhbnNsYXRpb24oeCwgeSwgeil7XHJcbiAgICAgICAgcmV0dXJuIFsxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICB4LCB5LCB6LCAxXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0U2NhbGUoeCwgeSwgeil7XHJcbiAgICAgICAgcmV0dXJuIFt4LCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgeSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIHosIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAxXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Um90YXRpb25YKHRoZXRhKXtcclxuICAgICAgICByZXR1cm4gWzEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCBNYXRoLmNvcyh0aGV0YSksIC1NYXRoLnNpbih0aGV0YSksIDAsXHJcbiAgICAgICAgICAgICAgICAwLCBNYXRoLnNpbih0aGV0YSksIE1hdGguY29zKHRoZXRhKSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRSb3RhdGlvblkodGhldGEpe1xyXG4gICAgICAgIHJldHVybiBbTWF0aC5jb3ModGhldGEpLCAwLCBNYXRoLnNpbih0aGV0YSksIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgLU1hdGguc2luKHRoZXRhKSwgMCwgTWF0aC5jb3ModGhldGEpLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMV07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFJvdGF0aW9uWih0aGV0YSl7XHJcbiAgICAgICAgcmV0dXJuIFtNYXRoLmNvcyh0aGV0YSksIC1NYXRoLnNpbih0aGV0YSksIDAsIDAsXHJcbiAgICAgICAgICAgICAgICBNYXRoLnNpbih0aGV0YSksIE1hdGguY29zKHRoZXRhKSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAxXTtcclxuICAgIH0gICBcclxuICAgIFxyXG4gICAgc3RhdGljIHRyYW5zcG9zZShhKSB7XHJcbiAgICAgICAgaWYgKCFhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsOyAvLyBvciByZXR1cm4gYSBkZWZhdWx0IG1hdHJpeCBvciBoYW5kbGUgdGhlIG51bGwgY2FzZSBhcHByb3ByaWF0ZWx5XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIGFbMF0sIGFbNF0sIGFbOF0sIGFbMTJdLFxyXG4gICAgICAgICAgICBhWzFdLCBhWzVdLCBhWzldLCBhWzEzXSxcclxuICAgICAgICAgICAgYVsyXSwgYVs2XSwgYVsxMF0sIGFbMTRdLFxyXG4gICAgICAgICAgICBhWzNdLCBhWzddLCBhWzExXSwgYVsxNV1cclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpbnZlcnNlKGEpIHtcclxuICAgICAgICB2YXIgYTAwID0gYVswICogNCArIDBdO1xyXG4gICAgICAgIHZhciBhMDEgPSBhWzAgKiA0ICsgMV07XHJcbiAgICAgICAgdmFyIGEwMiA9IGFbMCAqIDQgKyAyXTtcclxuICAgICAgICB2YXIgYTAzID0gYVswICogNCArIDNdO1xyXG4gICAgICAgIHZhciBhMTAgPSBhWzEgKiA0ICsgMF07XHJcbiAgICAgICAgdmFyIGExMSA9IGFbMSAqIDQgKyAxXTtcclxuICAgICAgICB2YXIgYTEyID0gYVsxICogNCArIDJdO1xyXG4gICAgICAgIHZhciBhMTMgPSBhWzEgKiA0ICsgM107XHJcbiAgICAgICAgdmFyIGEyMCA9IGFbMiAqIDQgKyAwXTtcclxuICAgICAgICB2YXIgYTIxID0gYVsyICogNCArIDFdO1xyXG4gICAgICAgIHZhciBhMjIgPSBhWzIgKiA0ICsgMl07XHJcbiAgICAgICAgdmFyIGEyMyA9IGFbMiAqIDQgKyAzXTtcclxuICAgICAgICB2YXIgYTMwID0gYVszICogNCArIDBdO1xyXG4gICAgICAgIHZhciBhMzEgPSBhWzMgKiA0ICsgMV07XHJcbiAgICAgICAgdmFyIGEzMiA9IGFbMyAqIDQgKyAyXTtcclxuICAgICAgICB2YXIgYTMzID0gYVszICogNCArIDNdO1xyXG4gICAgICAgIHZhciBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTA7XHJcbiAgICAgICAgdmFyIGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMDtcclxuICAgICAgICB2YXIgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwO1xyXG4gICAgICAgIHZhciBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTE7XHJcbiAgICAgICAgdmFyIGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMTtcclxuICAgICAgICB2YXIgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyO1xyXG4gICAgICAgIHZhciBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzA7XHJcbiAgICAgICAgdmFyIGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMDtcclxuICAgICAgICB2YXIgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwO1xyXG4gICAgICAgIHZhciBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzE7XHJcbiAgICAgICAgdmFyIGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMTtcclxuICAgICAgICB2YXIgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyO1xyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XHJcbiAgICAgICAgdmFyIGRldCA9XHJcbiAgICAgICAgYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xyXG5cclxuICAgICAgICBpZiAoIWRldCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZXQgPSAxLjAgLyBkZXQ7XHJcblxyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIChhMTEgKiBiMTEgLSBhMTIgKiBiMTAgKyBhMTMgKiBiMDkpICogZGV0LFxyXG4gICAgICAgICAgICAoYTAyICogYjEwIC0gYTAxICogYjExIC0gYTAzICogYjA5KSAqIGRldCxcclxuICAgICAgICAgICAgKGEzMSAqIGIwNSAtIGEzMiAqIGIwNCArIGEzMyAqIGIwMykgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMjIgKiBiMDQgLSBhMjEgKiBiMDUgLSBhMjMgKiBiMDMpICogZGV0LFxyXG4gICAgICAgICAgICAoYTEyICogYjA4IC0gYTEwICogYjExIC0gYTEzICogYjA3KSAqIGRldCxcclxuICAgICAgICAgICAgKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMzIgKiBiMDIgLSBhMzAgKiBiMDUgLSBhMzMgKiBiMDEpICogZGV0LFxyXG4gICAgICAgICAgICAoYTIwICogYjA1IC0gYTIyICogYjAyICsgYTIzICogYjAxKSAqIGRldCxcclxuICAgICAgICAgICAgKGExMCAqIGIxMCAtIGExMSAqIGIwOCArIGExMyAqIGIwNikgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMDEgKiBiMDggLSBhMDAgKiBiMTAgLSBhMDMgKiBiMDYpICogZGV0LFxyXG4gICAgICAgICAgICAoYTMwICogYjA0IC0gYTMxICogYjAyICsgYTMzICogYjAwKSAqIGRldCxcclxuICAgICAgICAgICAgKGEyMSAqIGIwMiAtIGEyMCAqIGIwNCAtIGEyMyAqIGIwMCkgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMTEgKiBiMDcgLSBhMTAgKiBiMDkgLSBhMTIgKiBiMDYpICogZGV0LFxyXG4gICAgICAgICAgICAoYTAwICogYjA5IC0gYTAxICogYjA3ICsgYTAyICogYjA2KSAqIGRldCxcclxuICAgICAgICAgICAgKGEzMSAqIGIwMSAtIGEzMCAqIGIwMyAtIGEzMiAqIGIwMCkgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMjAgKiBiMDMgLSBhMjEgKiBiMDEgKyBhMjIgKiBiMDApICogZGV0LFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRyYW5zbGF0ZSAodHgsIHR5LCB0eikge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIDEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgIHR4LCB0eSwgdHosIDFcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybiBiICogYVxyXG4gICAgc3RhdGljIG11bHRpcGx5KGEsIGIpe1xyXG4gICAgICAgIGxldCByZXMgPSBNYXQ0LmdldEVtcHR5KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyArK2kpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyArK2opIHtcclxuICAgICAgICAgICAgICAgIHJlc1tpICogNCArIGpdID0gVmVjNC5kb3QoTWF0NC5nZXRSb3coYiwgaSksIE1hdDQuZ2V0Q29sdW1uKGEsIGopKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJvdGF0ZVgocmFkKSB7XHJcbiAgICAgICAgdmFyIHNpbiA9IE1hdGguc2luKHJhZCk7XHJcbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKHJhZCk7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgY29zLCBzaW4sIDAsXHJcbiAgICAgICAgICAgIDAsIC1zaW4sIGNvcywgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJvdGF0ZVkocmFkKSB7XHJcbiAgICAgICAgdmFyIHNpbiA9IE1hdGguc2luKHJhZCk7XHJcbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKHJhZCk7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgY29zLCAwLCAtc2luLCAwLFxyXG4gICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICBzaW4sIDAsIGNvcywgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJvdGF0ZVoocmFkKSB7XHJcbiAgICAgICAgdmFyIHNpbiA9IE1hdGguc2luKHJhZCk7XHJcbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKHJhZCk7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgY29zLCBzaW4sIDAsIDAsXHJcbiAgICAgICAgICAgIC1zaW4sIGNvcywgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNjYWxlIChzeCwgc3ksIHN6KSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgc3gsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIHN5LCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCBzeiwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXRpbHNcclxuICAgIHN0YXRpYyBnZXRSb3cobWF0cml4LCByb3cpe1xyXG4gICAgICAgIC8vIHVzZSBWZWM0IHRvIGdldCB0aGUgcm93XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWM0KG1hdHJpeFtyb3cgKiA0XSwgbWF0cml4W3JvdyAqIDQgKyAxXSwgbWF0cml4W3JvdyAqIDQgKyAyXSwgbWF0cml4W3JvdyAqIDQgKyAzXSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldENvbHVtbihtYXRyaXgsIGNvbHVtbil7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWM0KG1hdHJpeFtjb2x1bW5dLCBtYXRyaXhbY29sdW1uICsgNF0sIG1hdHJpeFtjb2x1bW4gKyA4XSwgbWF0cml4W2NvbHVtbiArIDEyXSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWZWMze1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgeil7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMueiA9IHo7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYWRkKGEsIGIpe1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjMyhhLnggKyBiLngsIGEueSArIGIueSwgYS56ICsgYi56KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc3ViKGEsIGIpe1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjMyhhLnggLSBiLngsIGEueSAtIGIueSwgYS56IC0gYi56KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZG90KGEsIGIpe1xyXG4gICAgICAgIHJldHVybiBhLnggKiBiLnggKyBhLnkgKiBiLnkgKyBhLnogKiBiLno7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyb3NzKGEsIGIpe1xyXG4gICAgICAgIC8vIHJldHVybiBuZXcgVmVjMyhhLnogKiBiLnkgLSBhLnkgKiBiLnosIGEueCAqIGIueiAtIGEueiAqIGIueCAsYS55ICogYi54IC0gYS54ICogYi55KTtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzMoYS55ICogYi56IC0gYS56ICogYi55LCBhLnogKiBiLnggLSBhLnggKiBiLnogLGEueCAqIGIueSAtIGEueSAqIGIueCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5vcm0oYSl7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChhLnggKiBhLnggKyBhLnkgKiBhLnkgKyBhLnogKiBhLnopO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1bml0VmVjdG9yKGEpe1xyXG4gICAgICAgIGxldCBub3JtID0gVmVjMy5ub3JtKGEpO1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjMyhhLnggLyBub3JtLCBhLnkgLyBub3JtLCBhLnogLyBub3JtKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGFzQXJyYXkoKXsgIFxyXG4gICAgICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnksIHRoaXMuel07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZyb21BcnJheShhcnJheSl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWMzKGFycmF5WzBdLCBhcnJheVsxXSwgYXJyYXlbMl0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFZlYzMgZnJvbSBcIi4vVmVjMy5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjNHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIHosIHcpe1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLnogPSB6O1xyXG4gICAgICAgIHRoaXMudyA9IHc7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYWRkKGEsIGIpe1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjNChhLnggKyBiLngsIGEueSArIGIueSwgYS56ICsgYi56LCBhLncgKyBiLncpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkb3QoYSwgYil7XHJcbiAgICAgICAgbGV0IHJlcyA9IGEueCAqIGIueCArIGEueSAqIGIueSArIGEueiAqIGIueiArIGEudyAqIGIud1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5vcm0oYSl7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChhLnggKiBhLnggKyBhLnkgKiBhLnkgKyBhLnogKiBhLnogKyBhLncgKiBhLncpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBub3JtYWxpemUoYSl7XHJcbiAgICAgICAgbGV0IG5vcm0gPSBWZWM0Lm5vcm0oYSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWM0KGEueCAvIG5vcm0sIGEueSAvIG5vcm0sIGEueiAvIG5vcm0sIGEudyAvIG5vcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc1ZlYzMoYSl7ICAgXHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWMzKGEueCwgYS55LCBhLnopO1xyXG4gICAgfVxyXG5cclxuICAgIGFzQXJyYXkoKXsgIFxyXG4gICAgICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnksIHRoaXMueiwgdGhpcy53XTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZnJvbUFycmF5KGFycmF5KXtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzQoYXJyYXlbMF0sIGFycmF5WzFdLCBhcnJheVsyXSwgYXJyYXlbM10pO1xyXG4gICAgfVxyXG5cclxufSIsIlxyXG5leHBvcnQgZnVuY3Rpb24gZGVnVG9SYWQoZGVncmVlcyl7XHJcbiAgICByZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XHJcbn0gICBcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYWRUb0RlZyhyYWRpYW5zKXtcclxuICAgIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcclxufSIsImltcG9ydCBOb2RlIGZyb20gXCIuLi9ub2RlLmpzXCI7XHJcbmltcG9ydCB7IGRlZ1RvUmFkIH0gZnJvbSBcIi4uL21hdGgvbWF0aFV0aWxzLmpzXCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uL3V0aWxzL0FuaW1hdGlvbi5qc1wiO1xyXG5pbXBvcnQgYm94TW9kZWwgZnJvbSBcIi4uL2JveE1vZGVsLmpzXCI7XHJcblxyXG4vLyBDcmVhdGUgdGhlIGNoaWNrZW4gYm9keSBub2RlXHJcbmNvbnN0IGNoaWNrZW4gPSBuZXcgTm9kZSgpO1xyXG5jaGlja2VuLmZsYWcgPSBcImFydGljdWxhdGVkXCI7XHJcbmNoaWNrZW4ubmFtZSA9IFwiY2hpY2tlblwiO1xyXG5jaGlja2VuLm1vZGVsID0gYm94TW9kZWwoMSwgMS41LCAxLCBbMCwgMCwgMF0pO1xyXG5jaGlja2VuLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgcm90YXRlOiBbNDIsIC01NSwgMjddLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuY2hpY2tlbi5waWNrZWRDb2xvciA9IFswLjksIDAuOSwgMF0sXHJcbmNoaWNrZW4uZGlmZnVzZSA9IFswLCAwLCAwXSxcclxuY2hpY2tlbi5zcGVjdWxhciA9IFswLCAwLCAwXSxcclxuY2hpY2tlbi5hbWJpZW50ID0gWzEsIDEsIDFdLFxyXG5jaGlja2VuLnBob25nID0gdHJ1ZTtcclxuY2hpY2tlbi5waG9uZ0FtYmllbnQgPSBbMCwwLDBdLFxyXG5jaGlja2VuLnNoaW5pbmVzcyA9IDEsXHJcbmNoaWNrZW4uY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxuY2hpY2tlbi52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hpY2tlbkZyYW1lcygpe1xyXG4gICAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgICAgICB0cmFuc2xhdGU6IFswLCAwLCAwXSxcclxuICAgICAgICByb3RhdGU6IFtkZWdUb1JhZCg0MiksIGRlZ1RvUmFkKC01NSksIGRlZ1RvUmFkKDI3KV0sXHJcbiAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICAgIH1cclxuICAgIGxldCBmcmFtZXMgPSBbXVxyXG4gICAgZm9yKGxldCBrID0gMDsgayA8IDEwMDsgKytrKXtcclxuICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgX3RyYW5zZm9ybS50cmFuc2xhdGVbMF0gPSBrIC8gNTA7XHJcbiAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBmcmFtZXM7XHJcblxyXG59XHJcblxyXG5jaGlja2VuLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IGNoaWNrZW5GcmFtZXMoKSxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuLy8gQ3JlYXRlIHRoZSBoZWFkIG5vZGVcclxuY29uc3QgaGVhZCA9IG5ldyBOb2RlKCk7XHJcbmhlYWQubmFtZSA9IFwiaGVhZFwiO1xyXG5oZWFkLm1vZGVsID0gYm94TW9kZWwoMC42LCAwLjYsIDAuOCwgWzAsIDAsIDBdKTtcclxuaGVhZC50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLjc1LCAwLjc1LCAwXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuaGVhZC5waWNrZWRDb2xvciA9IFswLjksIDAuOSwgMF07XHJcbmhlYWQuZGlmZnVzZSA9IFswLCAwLCAwXTtcclxuaGVhZC5zcGVjdWxhciA9IFswLCAwLCAwXTtcclxuaGVhZC5hbWJpZW50ID0gWzEsIDEsIDFdO1xyXG5oZWFkLnBob25nID0gdHJ1ZTtcclxuaGVhZC5waG9uZ0FtYmllbnQgPSBbMCwwLDBdLFxyXG5oZWFkLnNoaW5pbmVzcyA9IDEsXHJcbmhlYWQuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxuaGVhZC52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5oZWFkLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IG51bGwsXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogbnVsbCwgXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuLy8gQ3JlYXRlIHRoZSBiZWFrIG5vZGVcclxuY29uc3QgYmVhayA9IG5ldyBOb2RlKCk7XHJcbmJlYWsubmFtZSA9IFwiYmVha1wiO1xyXG5iZWFrLm1vZGVsID0gYm94TW9kZWwoMC4yLCAwLjIsIDAuMywgWy0wLjY1LCAtMC4xLCAwXSk7XHJcbmJlYWsudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMSwgMCwgMF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmJlYWsucGlja2VkQ29sb3IgPSBbMSwgMC41LCAwXTtcclxuYmVhay5kaWZmdXNlID0gWzAsIDAsIDBdO1xyXG5iZWFrLnNwZWN1bGFyID0gWzAsIDAsIDBdO1xyXG5iZWFrLmFtYmllbnQgPSBbMSwgMSwgMV07XHJcbmJlYWsucGhvbmcgPSB0cnVlO1xyXG5iZWFrLnBob25nQW1iaWVudCA9IFswLDAsMF0sXHJcbmJlYWsuc2hpbmluZXNzID0gMSxcclxuYmVhay5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5iZWFrLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmJlYWsuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogbnVsbCxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBudWxsLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbmNvbnN0IHdoaXRlTGVmdEV5ZSA9IG5ldyBOb2RlKCk7XHJcbndoaXRlTGVmdEV5ZS5uYW1lID0gXCJ3aGl0ZUxlZnRFeWVcIjtcclxud2hpdGVMZWZ0RXllLm1vZGVsID0gYm94TW9kZWwoMC4wNzUsIDAuMSwgMC4xLCBbLTAuNzUsIDAuMiwgMC4xNV0pO1xyXG53aGl0ZUxlZnRFeWUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMS4wNCwgMCwgMF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbndoaXRlTGVmdEV5ZS5waWNrZWRDb2xvciA9IFswLjk5LCAwLjk5LCAwLjk5XTtcclxud2hpdGVMZWZ0RXllLmRpZmZ1c2UgPSBbMCwgMCwgMF07XHJcbndoaXRlTGVmdEV5ZS5zcGVjdWxhciA9IFswLCAwLCAwXTtcclxud2hpdGVMZWZ0RXllLmFtYmllbnQgPSBbMSwgMSwgMV07XHJcbndoaXRlTGVmdEV5ZS5waG9uZyA9IHRydWU7XHJcbndoaXRlTGVmdEV5ZS5waG9uZ0FtYmllbnQgPSBbMCwwLDBdLFxyXG53aGl0ZUxlZnRFeWUuc2hpbmluZXNzID0gMSxcclxud2hpdGVMZWZ0RXllLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbndoaXRlTGVmdEV5ZS52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG53aGl0ZUxlZnRFeWUuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogbnVsbCxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBudWxsLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbmNvbnN0IGJsYWNrTGVmdEV5ZSA9IG5ldyBOb2RlKCk7XHJcbmJsYWNrTGVmdEV5ZS5uYW1lID0gXCJibGFja0xlZnRFeWVcIjtcclxuYmxhY2tMZWZ0RXllLm1vZGVsID0gYm94TW9kZWwoMC4wNSwgMC4wNSwgMC4wNSwgWy0wLjc1LCAwLjIsIDAuMTVdKTtcclxuYmxhY2tMZWZ0RXllLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuMDYsIDAsIDBdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5ibGFja0xlZnRFeWUucGlja2VkQ29sb3IgPSBbMCwgMCwgMF07XHJcbmJsYWNrTGVmdEV5ZS5kaWZmdXNlID0gWzAsIDAsIDBdO1xyXG5ibGFja0xlZnRFeWUuc3BlY3VsYXIgPSBbMCwgMCwgMF07XHJcbmJsYWNrTGVmdEV5ZS5hbWJpZW50ID0gWzEsIDEsIDFdO1xyXG5ibGFja0xlZnRFeWUucGhvbmcgPSB0cnVlO1xyXG5ibGFja0xlZnRFeWUucGhvbmdBbWJpZW50ID0gWzAsMCwwXSxcclxuYmxhY2tMZWZ0RXllLnNoaW5pbmVzcyA9IDEsXHJcbmJsYWNrTGVmdEV5ZS5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5ibGFja0xlZnRFeWUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuYmxhY2tMZWZ0RXllLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IG51bGwsXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogbnVsbCxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcblxyXG59O1xyXG5cclxuY29uc3Qgd2hpdGVSaWdodEV5ZSA9IG5ldyBOb2RlKCk7XHJcbndoaXRlUmlnaHRFeWUubmFtZSA9IFwid2hpdGVSaWdodEV5ZVwiO1xyXG53aGl0ZVJpZ2h0RXllLm1vZGVsID0gYm94TW9kZWwoMC4wNzUsIDAuMSwgMC4xLCBbLTAuNzUsIDAuMiwgMC4xNV0pO1xyXG53aGl0ZVJpZ2h0RXllLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzEuMDQsIDAsIC0wLjMyXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxud2hpdGVSaWdodEV5ZS5waWNrZWRDb2xvciA9IFswLjk5LCAwLjk5LCAwLjk5XTtcclxud2hpdGVSaWdodEV5ZS5kaWZmdXNlID0gWzAsIDAsIDBdO1xyXG53aGl0ZVJpZ2h0RXllLnNwZWN1bGFyID0gWzAsIDAsIDBdO1xyXG53aGl0ZVJpZ2h0RXllLmFtYmllbnQgPSBbMSwgMSwgMV07XHJcbndoaXRlUmlnaHRFeWUucGhvbmcgPSB0cnVlO1xyXG53aGl0ZVJpZ2h0RXllLnBob25nQW1iaWVudCA9IFswLDAsMF0sXHJcbndoaXRlUmlnaHRFeWUuc2hpbmluZXNzID0gMSxcclxud2hpdGVSaWdodEV5ZS5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG53aGl0ZVJpZ2h0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbndoaXRlUmlnaHRFeWUuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogbnVsbCxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBudWxsLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxuXHJcbn07XHJcblxyXG5jb25zdCBibGFja1JpZ2h0RXllID0gbmV3IE5vZGUoKTtcclxuYmxhY2tSaWdodEV5ZS5uYW1lID0gXCJibGFja1JpZ2h0RXllXCI7XHJcbmJsYWNrUmlnaHRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjA1LCAwLjA1LCAwLjA1LCBbLTAuNzUsIDAuMiwgMC4xNV0pO1xyXG5ibGFja1JpZ2h0RXllLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuMDYsIDAsIDBdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5ibGFja1JpZ2h0RXllLnBpY2tlZENvbG9yID0gWzAsIDAsIDBdO1xyXG5ibGFja1JpZ2h0RXllLmRpZmZ1c2UgPSBbMCwgMCwgMF07XHJcbmJsYWNrUmlnaHRFeWUuc3BlY3VsYXIgPSBbMCwgMCwgMF07XHJcbmJsYWNrUmlnaHRFeWUuYW1iaWVudCA9IFsxLCAxLCAxXTtcclxuYmxhY2tSaWdodEV5ZS5waG9uZyA9IHRydWU7XHJcbmJsYWNrUmlnaHRFeWUucGhvbmdBbWJpZW50ID0gWzAsMCwwXSxcclxuYmxhY2tSaWdodEV5ZS5zaGluaW5lc3MgPSAxLFxyXG5ibGFja1JpZ2h0RXllLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmJsYWNrUmlnaHRFeWUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuYmxhY2tSaWdodEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBudWxsLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IG51bGwsXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuXHJcblxyXG4vLyBDcmVhdGUgdGhlIGxlZnQgd2luZyBub2RlXHJcbmNvbnN0IGxlZnRXaW5nID0gbmV3IE5vZGUoKTtcclxubGVmdFdpbmcubmFtZSA9IFwibGVmdFdpbmdcIjtcclxubGVmdFdpbmcubW9kZWwgPSBib3hNb2RlbCgwLjUsIDAuMSwgMSwgWzAsIDAsIDBdKTtcclxubGVmdFdpbmcudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMCwgMCwgLTAuNzVdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgOTBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubGVmdFdpbmcucGlja2VkQ29sb3IgPSBbMC45LCAwLjksIDBdO1xyXG5sZWZ0V2luZy5kaWZmdXNlID0gWzAsIDAsIDBdO1xyXG5sZWZ0V2luZy5zcGVjdWxhciA9IFswLCAwLCAwXTtcclxubGVmdFdpbmcuYW1iaWVudCA9IFsxLCAxLCAxXTtcclxubGVmdFdpbmcucGhvbmcgPSB0cnVlO1xyXG5sZWZ0V2luZy5waG9uZ0FtYmllbnQgPSBbMCwwLDBdLFxyXG5sZWZ0V2luZy5zaGluaW5lc3MgPSAxLFxyXG5sZWZ0V2luZy5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5sZWZ0V2luZy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gbGVmdFdpbmdGcmFtZXMoKXtcclxuXHJcbiAgICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgICAgIHRyYW5zbGF0ZTogWzAsIDAsIC0wLjc1XSxcclxuICAgICAgICByb3RhdGU6IFswLCAwLCBNYXRoLlBJIC8gMl0sXHJcbiAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICAgIH1cclxuICAgIGxldCBmcmFtZXMgPSBbXVxyXG4gICAgZm9yKGxldCBrID0gMDsgayA8IDQ7ICsrayl7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8PSAxMjsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IC1NYXRoLlBJIC8gOSArIE1hdGguUEkvOSAqIGkgLyA2O1xyXG4gICAgICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaSA9MCA7IGkgPD0gMTI7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSBNYXRoLlBJIC8gOSAtIE1hdGguUEkvOSAqIGkgLyA2O1xyXG4gICAgICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBmcm9tIC1waS85IHRvIDBcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gNjsgaSsrKXtcclxuICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSAtTWF0aC5QSSAvIDkgKyBNYXRoLlBJLzkgKiBpIC8gNjtcclxuICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTsgXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnJhbWVzO1xyXG5cclxufVxyXG5cclxubGVmdFdpbmcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogbGVmdFdpbmdGcmFtZXMoKSxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuLy8gQ3JlYXRlIHRoZSByaWdodCB3aW5nIG5vZGVcclxuY29uc3QgcmlnaHRXaW5nID0gbmV3IE5vZGUoKTtcclxucmlnaHRXaW5nLm5hbWUgPSBcInJpZ2h0V2luZ1wiO1xyXG5yaWdodFdpbmcubW9kZWwgPSBib3hNb2RlbCgwLjUsIDAuMSwgMSwgWzAsIDAsIDBdKTtcclxucmlnaHRXaW5nLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAsIDAsIDAuNzVdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgOTBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRXaW5nLnBpY2tlZENvbG9yID0gWzAuOSwgMC45LCAwXTtcclxucmlnaHRXaW5nLmRpZmZ1c2UgPSBbMCwgMCwgMF07XHJcbnJpZ2h0V2luZy5zcGVjdWxhciA9IFswLCAwLCAwXTtcclxucmlnaHRXaW5nLmFtYmllbnQgPSBbMSwgMSwgMV07XHJcbnJpZ2h0V2luZy5waG9uZyA9IHRydWU7XHJcbnJpZ2h0V2luZy5waG9uZ0FtYmllbnQgPSBbMCwwLDBdLFxyXG5yaWdodFdpbmcuc2hpbmluZXNzID0gMSxcclxucmlnaHRXaW5nLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbnJpZ2h0V2luZy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmlnaHRXaW5nRnJhbWVzKCl7XHJcbiAgICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgICAgIHRyYW5zbGF0ZTogWzAsIDAsIDAuNzVdLFxyXG4gICAgICAgIHJvdGF0ZTogWzAsIDAsIE1hdGguUEkgLyAyXSxcclxuICAgICAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG4gICAgfVxyXG4gICAgbGV0IGZyYW1lcyA9IFtdXHJcbiAgICBmb3IobGV0IGsgPSAwOyBrIDwgNDsgKytrKXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDw9IDEyOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gTWF0aC5QSSAvIDkgLSBNYXRoLlBJLzkgKiBpIC8gNjtcclxuICAgICAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGkgPTAgOyBpIDw9IDEyOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gLSBNYXRoLlBJIC8gOSArIE1hdGguUEkvOSAqIGkgLyA2O1xyXG4gICAgICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBmcm9tIHBpLzYgdG8gMFxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8PSA2OyBpKyspe1xyXG4gICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IE1hdGguUEkgLyA5IC0gTWF0aC5QSS85ICogaSAvIDY7XHJcbiAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7IFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZyYW1lcztcclxuXHJcbn1cclxuXHJcbnJpZ2h0V2luZy5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiByaWdodFdpbmdGcmFtZXMoKSxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuLy8gQ3JlYXRlIHRoZSByaWdodCBsZWcgbm9kZVxyXG5jb25zdCByaWdodExlZyA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0TGVnLm5hbWUgPSBcInJpZ2h0TGVnXCI7XHJcbnJpZ2h0TGVnLm1vZGVsID0gYm94TW9kZWwoMC42LCAwLjIsIDAuMiwgWzAsIDAsIDBdKTtcclxucmlnaHRMZWcudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbLTAuNSwgLTAuOCwgLTAuMzVdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5yaWdodExlZy5waWNrZWRDb2xvciA9IFsxLCAwLjUsIDBdO1xyXG5yaWdodExlZy5kaWZmdXNlID0gWzAsIDAsIDBdO1xyXG5yaWdodExlZy5zcGVjdWxhciA9IFswLCAwLCAwXTtcclxucmlnaHRMZWcuYW1iaWVudCA9IFsxLCAxLCAxXTtcclxucmlnaHRMZWcucGhvbmcgPSB0cnVlO1xyXG5yaWdodExlZy5waG9uZ0FtYmllbnQgPSBbMCwwLDBdLFxyXG5yaWdodExlZy5zaGluaW5lc3MgPSAxLFxyXG5yaWdodExlZy5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5yaWdodExlZy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmlnaHRMZWdGcmFtZXMoKXtcclxuICAgIGxldCB0cmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgdHJhbnNsYXRlOiBbLTAuNSwgLTAuOCwgLTAuMzVdLFxyXG4gICAgICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgICB9XHJcbiAgICBsZXQgZnJhbWVzID0gW11cclxuICAgIGZvcihsZXQgayA9IDA7IGsgPCA0OyArK2spe1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gMTI7IGkrKyl7XHJcbiAgICAgICAgICAgIC8vIGFwcGVuZCBmb3IgYW5nbGUgcGkvNiAtIHBpLzMgKiBpLzEyIHRvIGZyYW1lc1xyXG4gICAgICAgICAgICAvLyBjbG9uZSB0aGUgdHJhbnNmb3JtIG9iamVjdFxyXG4gICAgICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzJdID0gTWF0aC5QSSAvIDYgLSBNYXRoLlBJLzMgKiBpIC8gMTI7XHJcbiAgICAgICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpID0wIDsgaSA8PSAxMjsgaSsrKXtcclxuICAgICAgICAgICAgLy8gYXBwZW5kIGZvciBhbmdsZSBwaS82ICogaS8xMiB0byBmcmFtZXNcclxuICAgICAgICAgICAgLy8gY2xvbmUgdGhlIHRyYW5zZm9ybSBvYmplY3RcclxuICAgICAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVsyXSA9IC0gTWF0aC5QSSAvIDYgKyBNYXRoLlBJLzMgKiBpIC8gMTI7XHJcbiAgICAgICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGZyb20gcGkvNiB0byAwXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDw9IDY7IGkrKyl7XHJcbiAgICAgICAgLy8gYXBwZW5kIGZvciBhbmdsZSBwaS82IC0gcGkvMyAqIGkvMTIgdG8gZnJhbWVzXHJcbiAgICAgICAgLy8gY2xvbmUgdGhlIHRyYW5zZm9ybSBvYmplY3RcclxuICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMl0gPSBNYXRoLlBJIC8gNiAtIE1hdGguUEkvNiAqIGkgLyA2O1xyXG4gICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pOyBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZnJhbWVzO1xyXG59XHJcblxyXG5cclxucmlnaHRMZWcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lcyA6IHJpZ2h0TGVnRnJhbWVzKCksXHJcbiAgICBjdXJyZW50RnJhbWUgOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG4vLyBjcmV0ZSB0aGUgcmlnaHQgZm9vdCBub2RlXHJcbmNvbnN0IHJpZ2h0Rm9vdCA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0Rm9vdC5uYW1lID0gXCJyaWdodEZvb3RcIjtcclxucmlnaHRGb290Lm1vZGVsID0gYm94TW9kZWwoMC4xLCAwLjQsIDAuMywgWzAsIDAsIDBdKTtcclxucmlnaHRGb290LnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuMDIsIC0wLjM0LCAwXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRGb290LnBpY2tlZENvbG9yID0gWzEsIDAuNSwgMF07XHJcbnJpZ2h0Rm9vdC5kaWZmdXNlID0gWzAsIDAsIDBdO1xyXG5yaWdodEZvb3Quc3BlY3VsYXIgPSBbMCwgMCwgMF07XHJcbnJpZ2h0Rm9vdC5hbWJpZW50ID0gWzEsIDEsIDFdO1xyXG5yaWdodEZvb3QucGhvbmcgPSB0cnVlO1xyXG5yaWdodEZvb3QucGhvbmdBbWJpZW50ID0gWzAsMCwwXSxcclxucmlnaHRGb290LnNoaW5pbmVzcyA9IDEsXHJcbnJpZ2h0Rm9vdC5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5yaWdodEZvb3Qudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxucmlnaHRGb290LmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IG51bGwsXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogbnVsbCxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG4vLyBDcmVhdGUgdGhlIGxlZnQgbGVnIG5vZGVcclxuY29uc3QgbGVmdExlZyA9IG5ldyBOb2RlKCk7XHJcbmxlZnRMZWcubmFtZSA9IFwibGVmdExlZ1wiO1xyXG5sZWZ0TGVnLm1vZGVsID0gYm94TW9kZWwoMC42LCAwLjIsIDAuMiwgWzAsIDAsIDBdKTtcclxubGVmdExlZy50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFstMC41LCAtMC44LCAwLjM1XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubGVmdExlZy5waWNrZWRDb2xvciA9IFsxLCAwLjUsIDBdO1xyXG5sZWZ0TGVnLmRpZmZ1c2UgPSBbMCwgMCwgMF07XHJcbmxlZnRMZWcuc3BlY3VsYXIgPSBbMCwgMCwgMF07XHJcbmxlZnRMZWcuYW1iaWVudCA9IFsxLCAxLCAxXTtcclxubGVmdExlZy5waG9uZyA9IHRydWU7XHJcbmxlZnRMZWcucGhvbmdBbWJpZW50ID0gWzAsMCwwXSxcclxubGVmdExlZy5zaGluaW5lc3MgPSAxLFxyXG5sZWZ0TGVnLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmxlZnRMZWcudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGxlZnRMZWdGcmFtZXMoKXtcclxuICAgIGxldCB0cmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgdHJhbnNsYXRlOiBbLTAuNSwgLTAuOCwgMC4zNV0sXHJcbiAgICAgICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICAgIH1cclxuICAgIGxldCBmcmFtZXMgPSBbXVxyXG4gICAgZm9yKGxldCBrID0gMDsgayA8IDQ7ICsrayl7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8PSAxMjsgaSsrKXtcclxuICAgICAgICAgICAgLy8gYXBwZW5kIGZvciBhbmdsZSBwaS82IC0gcGkvMyAqIGkvMTIgdG8gZnJhbWVzXHJcbiAgICAgICAgICAgIC8vIGNsb25lIHRoZSB0cmFuc2Zvcm0gb2JqZWN0XHJcbiAgICAgICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMl0gPSAtIE1hdGguUEkgLyA2ICsgTWF0aC5QSS8zICogaSAvIDEyO1xyXG4gICAgICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaSA9MCA7IGkgPD0gMTI7IGkrKyl7XHJcbiAgICAgICAgICAgIC8vIGFwcGVuZCBmb3IgYW5nbGUgcGkvNiAqIGkvMTIgdG8gZnJhbWVzXHJcbiAgICAgICAgICAgIC8vIGNsb25lIHRoZSB0cmFuc2Zvcm0gb2JqZWN0XHJcbiAgICAgICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMl0gPSBNYXRoLlBJIC8gNiAtIE1hdGguUEkvMyAqIGkgLyAxMjtcclxuICAgICAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZnJvbSAtcGkvNiB0byAwXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDw9IDY7IGkrKyl7XHJcbiAgICAgICAgLy8gYXBwZW5kIGZvciBhbmdsZSBwaS82IC0gcGkvMyAqIGkvMTIgdG8gZnJhbWVzXHJcbiAgICAgICAgLy8gY2xvbmUgdGhlIHRyYW5zZm9ybSBvYmplY3RcclxuICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMl0gPSAtTWF0aC5QSSAvIDYgKyBNYXRoLlBJLzYgKiBpIC8gNjtcclxuICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTsgXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnJhbWVzO1xyXG59XHJcblxyXG5sZWZ0TGVnLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXMgOiBsZWZ0TGVnRnJhbWVzKCksXHJcbiAgICBjdXJyZW50RnJhbWUgOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG4vLyBDcmVhdGUgdGhlIGxlZnQgZm9vdCBub2RlXHJcbmNvbnN0IGxlZnRGb290ID0gbmV3IE5vZGUoKTtcclxubGVmdEZvb3QubmFtZSA9IFwibGVmdEZvb3RcIjtcclxubGVmdEZvb3QubW9kZWwgPSBib3hNb2RlbCgwLjEsIDAuNCwgMC4zLCBbMCwgMCwgMF0pO1xyXG5sZWZ0Rm9vdC50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLjAyLCAtMC4zNCwgMF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmxlZnRGb290LnBpY2tlZENvbG9yID0gWzEsIDAuNSwgMF07XHJcbmxlZnRGb290LmRpZmZ1c2UgPSBbMCwgMCwgMF07XHJcbmxlZnRGb290LnNwZWN1bGFyID0gWzAsIDAsIDBdO1xyXG5sZWZ0Rm9vdC5hbWJpZW50ID0gWzEsIDEsIDFdO1xyXG5sZWZ0Rm9vdC5waG9uZyA9IHRydWU7XHJcbmxlZnRGb290LnBob25nQW1iaWVudCA9IFswLDAsMF0sXHJcbmxlZnRGb290LnNoaW5pbmVzcyA9IDEsXHJcbmxlZnRGb290LmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmxlZnRGb290LnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmxlZnRGb290LmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IG51bGwsXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogbnVsbCxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG4vLyBDcmVhdGUgdGhlIHRhaWwgbm9kZVxyXG5jb25zdCB0YWlsID0gbmV3IE5vZGUoKTtcclxudGFpbC5uYW1lID0gXCJ0YWlsXCI7XHJcblxyXG5cclxuLy8gQXNzZW1ibGUgdGhlIGNoaWNrZW4gbW9kZWxcclxuLy8gY2hpY2tlbi5hZGRDaGlsZChoZWFkKTtcclxuLy8gaGVhZC5hZGRDaGlsZChiZWFrKTtcclxuLy8gY2hpY2tlbi5hZGRDaGlsZChsZWZ0V2luZyk7XHJcbi8vIGNoaWNrZW4uYWRkQ2hpbGQocmlnaHRXaW5nKTtcclxuLy8gY2hpY2tlbi5hZGRDaGlsZChsZWZ0TGVnKTtcclxuLy8gY2hpY2tlbi5hZGRDaGlsZChyaWdodExlZyk7XHJcblxyXG4vLyBBc3NlbWJsZSB0aGUgY2hpY2tlbiBtb2RlbFxyXG5oZWFkLnNldFBhcmVudChjaGlja2VuKTtcclxuYmVhay5zZXRQYXJlbnQoaGVhZCk7XHJcbndoaXRlUmlnaHRFeWUuc2V0UGFyZW50KGhlYWQpO1xyXG5ibGFja1JpZ2h0RXllLnNldFBhcmVudCh3aGl0ZVJpZ2h0RXllKTtcclxud2hpdGVMZWZ0RXllLnNldFBhcmVudChoZWFkKTtcclxuYmxhY2tMZWZ0RXllLnNldFBhcmVudCh3aGl0ZUxlZnRFeWUpO1xyXG5sZWZ0V2luZy5zZXRQYXJlbnQoY2hpY2tlbik7XHJcbnJpZ2h0V2luZy5zZXRQYXJlbnQoY2hpY2tlbik7XHJcbmxlZnRMZWcuc2V0UGFyZW50KGNoaWNrZW4pO1xyXG5sZWZ0Rm9vdC5zZXRQYXJlbnQobGVmdExlZyk7XHJcbnJpZ2h0TGVnLnNldFBhcmVudChjaGlja2VuKTtcclxucmlnaHRGb290LnNldFBhcmVudChyaWdodExlZyk7XHJcblxyXG5cclxudmFyIGNoaWNrZW5Nb2RlbCA9IFtcclxuICBjaGlja2VuXHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoaWNrZW5Nb2RlbDtcclxuIiwiaW1wb3J0IE5vZGUgZnJvbSBcIi4uL25vZGUuanNcIjtcclxuaW1wb3J0IHsgZGVnVG9SYWQgfSBmcm9tIFwiLi4vbWF0aC9tYXRoVXRpbHMuanNcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vdXRpbHMvQW5pbWF0aW9uLmpzXCI7XHJcbmltcG9ydCBib3hNb2RlbCwge2dlbmVyYXRlRmFjZXMsIGdlbmVyYXRlTm9ybWFscywgZ2VuZXJhdGVWZXJ0aWNlc30gZnJvbSBcIi4uL2JveE1vZGVsLmpzXCI7XHJcblxyXG5jb25zdCBib2R5Q29sb3IgPSBbMC44ODYsIDAuMzQ1LCAwLjEzM107XHJcbmNvbnN0IHdoaXRlQ29sb3IgPSBbMC45OSwgMC45OSwgMC45OV07XHJcbmNvbnN0IGJsYWNrQ29sb3IgPSBbMCwgMCwgMF07XHJcbmNvbnN0IGJyb3duQ29sb3IgPSBbMC41NDUsIDAuMjcxLCAwLjA3NV07XHJcblxyXG5jb25zdCBmb3ggPSBuZXcgTm9kZSgpO1xyXG5mb3gubmFtZSA9IFwiZm94XCI7XHJcbmZveC5tb2RlbCA9IGJveE1vZGVsKDAuNiwgMC43LCAxLCBbMCwgMCwgMF0pOyBcclxuZm94LnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLCAwLCAwXSxcclxuICByb3RhdGU6IFszMCw0NSwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuZm94LnBpY2tlZENvbG9yID0gYm9keUNvbG9yO1xyXG5mb3guZGlmZnVzZSA9IFsxLDEsMV0sXHJcbmZveC5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbmZveC5hbWJpZW50ID0gWzEsMSwxXSxcclxuZm94LnNoaW5pbmVzcyA9IDEsXHJcbmZveC5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5mb3gudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5mb3guYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZnJhbWVzOiBmb3hGcmFtZXMoKSxcclxuICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICBpc0F1dG86IGZhbHNlLFxyXG4gIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbmZ1bmN0aW9uIGZveEZyYW1lcygpIHtcclxuICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMCwgMCwgMF0sXHJcbiAgICByb3RhdGU6IFtkZWdUb1JhZCgzMCksIGRlZ1RvUmFkKDQ1KSwgZGVnVG9SYWQoMCldLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICB9XHJcbiAgbGV0IGZyYW1lcyA9IFtdXHJcbiAgZm9yKGxldCBrID0gMDsgayA8IDUwOyArK2spe1xyXG4gICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgIF90cmFuc2Zvcm0udHJhbnNsYXRlWzBdID0gIGsgLyA1MCA7XHJcbiAgICAgIF90cmFuc2Zvcm0udHJhbnNsYXRlWzJdID0gIGsgLyA1MCA7XHJcbiAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZyYW1lcztcclxuXHJcbn1cclxuXHJcbmNvbnN0IGhlYWQgPSBuZXcgTm9kZSgpO1xyXG5oZWFkLm5hbWUgPSBcImhlYWRcIjtcclxuaGVhZC5tb2RlbCA9IGJveE1vZGVsKDAuNSwgMC41LCAwLjQsIFswLCAwLCAwXSk7XHJcbmhlYWQudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAsIDAuMSwgMC43XSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuaGVhZC5waWNrZWRDb2xvciA9IGJvZHlDb2xvcjtcclxuaGVhZC5kaWZmdXNlID0gWzEsMSwxXSxcclxuaGVhZC5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbmhlYWQuYW1iaWVudCA9IFsxLDEsMV0sXHJcbmhlYWQuc2hpbmluZXNzID0gMSxcclxuaGVhZC5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5oZWFkLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxuaGVhZC5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCB3aGl0ZVJpZ2h0RXllID0gbmV3IE5vZGUoKTtcclxud2hpdGVSaWdodEV5ZS5uYW1lID0gXCJ3aGl0ZVJpZ2h0RXllXCI7XHJcbndoaXRlUmlnaHRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjEsIDAuMSwgMC4wNSwgWzAsIDAsIDBdKTtcclxud2hpdGVSaWdodEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMC4xNSwgMC4xLCAwLjJdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG53aGl0ZVJpZ2h0RXllLnBpY2tlZENvbG9yID0gd2hpdGVDb2xvcjtcclxud2hpdGVSaWdodEV5ZS5kaWZmdXNlID0gWzEsMSwxXSxcclxud2hpdGVSaWdodEV5ZS5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbndoaXRlUmlnaHRFeWUuYW1iaWVudCA9IFsxLDEsMV0sXHJcbndoaXRlUmlnaHRFeWUuc2hpbmluZXNzID0gMSxcclxud2hpdGVSaWdodEV5ZS5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG53aGl0ZVJpZ2h0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxud2hpdGVSaWdodEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCB3aGl0ZUxlZnRFeWUgPSBuZXcgTm9kZSgpO1xyXG53aGl0ZUxlZnRFeWUubmFtZSA9IFwid2hpdGVMZWZ0RXllXCI7XHJcbndoaXRlTGVmdEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMSwgMC4xLCAwLjA1LCBbMCwgMCwgMF0pO1xyXG53aGl0ZUxlZnRFeWUudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWy0wLjE1LCAwLjEsIDAuMl0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbndoaXRlTGVmdEV5ZS5waWNrZWRDb2xvciA9IHdoaXRlQ29sb3I7XHJcbndoaXRlTGVmdEV5ZS5kaWZmdXNlID0gWzEsMSwxXSxcclxud2hpdGVMZWZ0RXllLnNwZWN1bGFyID0gWzEsMSwxXSxcclxud2hpdGVMZWZ0RXllLmFtYmllbnQgPSBbMSwxLDFdLFxyXG53aGl0ZUxlZnRFeWUuc2hpbmluZXNzID0gMSxcclxud2hpdGVMZWZ0RXllLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbndoaXRlTGVmdEV5ZS52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbndoaXRlTGVmdEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCBibGFja1JpZ2h0RXllID0gbmV3IE5vZGUoKTtcclxuYmxhY2tSaWdodEV5ZS5uYW1lID0gXCJibGFja1JpZ2h0RXllXCI7XHJcbmJsYWNrUmlnaHRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjEsIDAuMDYsIDAuMDUsIFswLCAwLCAwXSk7XHJcbmJsYWNrUmlnaHRFeWUudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWy0wLjAzLCAwLCAwLjAxXSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuYmxhY2tSaWdodEV5ZS5waWNrZWRDb2xvciA9IGJsYWNrQ29sb3I7XHJcbmJsYWNrUmlnaHRFeWUuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbmJsYWNrUmlnaHRFeWUuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5ibGFja1JpZ2h0RXllLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5ibGFja1JpZ2h0RXllLnNoaW5pbmVzcyA9IDEsXHJcbmJsYWNrUmlnaHRFeWUuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxuYmxhY2tSaWdodEV5ZS52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbmJsYWNrUmlnaHRFeWUuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgYmxhY2tMZWZ0RXllID0gbmV3IE5vZGUoKTtcclxuYmxhY2tMZWZ0RXllLm5hbWUgPSBcImJsYWNrTGVmdEV5ZVwiO1xyXG5ibGFja0xlZnRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjEsIDAuMDYsIDAuMDUsIFswLCAwLCAwXSk7XHJcbmJsYWNrTGVmdEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMC4wMywgMCwgMC4wMV0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmJsYWNrTGVmdEV5ZS5waWNrZWRDb2xvciA9IGJsYWNrQ29sb3I7XHJcbmJsYWNrTGVmdEV5ZS5kaWZmdXNlID0gWzEsMSwxXSxcclxuYmxhY2tMZWZ0RXllLnNwZWN1bGFyID0gWzEsMSwxXSxcclxuYmxhY2tMZWZ0RXllLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5ibGFja0xlZnRFeWUuc2hpbmluZXNzID0gMSxcclxuYmxhY2tMZWZ0RXllLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmJsYWNrTGVmdEV5ZS52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbmJsYWNrTGVmdEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCBub3NlID0gbmV3IE5vZGUoKTtcclxubm9zZS5uYW1lID0gXCJub3NlXCI7XHJcbm5vc2UubW9kZWwgPSBib3hNb2RlbCgwLjE1LCAwLjMsIDAuMiwgWzAsIDAsIDBdKTtcclxubm9zZS50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMCwgLTAuMSwgMC4zXSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubm9zZS5waWNrZWRDb2xvciA9IGJsYWNrQ29sb3I7XHJcbm5vc2UuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbm5vc2Uuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5ub3NlLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5ub3NlLnNoaW5pbmVzcyA9IDEsXHJcbm5vc2UuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxubm9zZS52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbm5vc2UuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgdW5kZXJub3NlID0gbmV3IE5vZGUoKTtcclxudW5kZXJub3NlLm5hbWUgPSBcInVuZGVybm9zZVwiO1xyXG51bmRlcm5vc2UubW9kZWwgPSBib3hNb2RlbCgwLjEsIDAuMywgMC4yLCBbMCwgMCwgMF0pO1xyXG51bmRlcm5vc2UudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAsIC0wLjIsIDAuM10sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnVuZGVybm9zZS5waWNrZWRDb2xvciA9IHdoaXRlQ29sb3I7XHJcbnVuZGVybm9zZS5kaWZmdXNlID0gWzEsMSwxXSxcclxudW5kZXJub3NlLnNwZWN1bGFyID0gWzEsMSwxXSxcclxudW5kZXJub3NlLmFtYmllbnQgPSBbMSwxLDFdLFxyXG51bmRlcm5vc2Uuc2hpbmluZXNzID0gMSxcclxudW5kZXJub3NlLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbnVuZGVybm9zZS52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbnVuZGVybm9zZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCByaWdodEVhciA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0RWFyLm5hbWUgPSBcInJpZ2h0RWFyXCI7XHJcbnJpZ2h0RWFyLm1vZGVsID0gYm94TW9kZWwoMC4yLCAwLjIsIDAuMSwgWzAsIDAsIDBdKTtcclxucmlnaHRFYXIudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAuMTUsIDAuMzUsIDBdLFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnJpZ2h0RWFyLnBpY2tlZENvbG9yID0gYmxhY2tDb2xvcjtcclxucmlnaHRFYXIuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbnJpZ2h0RWFyLnNwZWN1bGFyID0gWzEsMSwxXSxcclxucmlnaHRFYXIuYW1iaWVudCA9IFsxLDEsMV0sXHJcbnJpZ2h0RWFyLnNoaW5pbmVzcyA9IDEsXHJcbnJpZ2h0RWFyLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbnJpZ2h0RWFyLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxucmlnaHRFYXIuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgbGVmdEVhciA9IG5ldyBOb2RlKCk7XHJcbmxlZnRFYXIubmFtZSA9IFwibGVmdEVhclwiO1xyXG5sZWZ0RWFyLm1vZGVsID0gYm94TW9kZWwoMC4yLCAwLjIsIDAuMSwgWzAsIDAsIDBdKTtcclxubGVmdEVhci50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbLTAuMTUsIDAuMzUsIDBdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5sZWZ0RWFyLnBpY2tlZENvbG9yID0gYmxhY2tDb2xvcjtcclxubGVmdEVhci5kaWZmdXNlID0gWzEsMSwxXSxcclxubGVmdEVhci5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbmxlZnRFYXIuYW1iaWVudCA9IFsxLDEsMV0sXHJcbmxlZnRFYXIuc2hpbmluZXNzID0gMSxcclxubGVmdEVhci5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5sZWZ0RWFyLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxubGVmdEVhci5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCByaWdodEZyb250TGVnID0gbmV3IE5vZGUoKTtcclxucmlnaHRGcm9udExlZy5uYW1lID0gXCJyaWdodEZyb250TGVnXCI7XHJcbnJpZ2h0RnJvbnRMZWcubW9kZWwgPSBib3hNb2RlbCgxLCAwLjIsIDAuMTUsIFswLCAwLCAwXSk7XHJcbnJpZ2h0RnJvbnRMZWcudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAuMiwgLTAuMjUsIDAuMl0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnJpZ2h0RnJvbnRMZWcucGlja2VkQ29sb3IgPSBibGFja0NvbG9yO1xyXG5yaWdodEZyb250TGVnLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5yaWdodEZyb250TGVnLnNwZWN1bGFyID0gWzEsMSwxXSxcclxucmlnaHRGcm9udExlZy5hbWJpZW50ID0gWzEsMSwxXSxcclxucmlnaHRGcm9udExlZy5zaGluaW5lc3MgPSAxLFxyXG5yaWdodEZyb250TGVnLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbnJpZ2h0RnJvbnRMZWcudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5yaWdodEZyb250TGVnLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGZyYW1lczogcmlnaHRGcm9udExlZ0ZyYW1lcygpLFxyXG4gIGN1cnJlbnRGcmFtZTogMCxcclxuICBhbmltYXRpb25GdW5jdGlvbjogQW5pbWF0aW9uLmFuaW1hdGlvblNjcmlwdCgpLFxyXG4gIGlzQXV0bzogZmFsc2UsXHJcbiAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmlnaHRGcm9udExlZ0ZyYW1lcyAoKSB7XHJcbiAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuMiwgLTAuMjUsIDAuMl0sIFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG4gIH1cclxuICBsZXQgZnJhbWVzID0gW11cclxuICBmb3IobGV0IGsgPSAwOyBrIDwgMjU7ICsrayl7XHJcbiAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSBkZWdUb1JhZCgtayk7XHJcbiAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gIH1cclxuXHJcbiAgZm9yKGxldCBrID0gMDsgayA8IDI1OyArK2spe1xyXG4gICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSBkZWdUb1JhZChrKTtcclxuICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gIH1cclxuICByZXR1cm4gZnJhbWVzO1xyXG5cclxufVxyXG5cclxuY29uc3QgcmlnaHRGcm9udFRvZSA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0RnJvbnRUb2UubmFtZSA9IFwicmlnaHRGcm9udFRvZVwiO1xyXG5yaWdodEZyb250VG9lLm1vZGVsID0gYm94TW9kZWwoMC4xLCAwLjIsIDAuMiwgWzAsIDAsIDBdKTtcclxucmlnaHRGcm9udFRvZS50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMCwgLTAuNDUsIDAuMDVdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5yaWdodEZyb250VG9lLnBpY2tlZENvbG9yID0gd2hpdGVDb2xvcjtcclxucmlnaHRGcm9udFRvZS5kaWZmdXNlID0gWzEsMSwxXSxcclxucmlnaHRGcm9udFRvZS5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbnJpZ2h0RnJvbnRUb2UuYW1iaWVudCA9IFsxLDEsMV0sXHJcbnJpZ2h0RnJvbnRUb2Uuc2hpbmluZXNzID0gMSxcclxucmlnaHRGcm9udFRvZS5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5yaWdodEZyb250VG9lLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxucmlnaHRGcm9udFRvZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCBsZWZ0RnJvbnRMZWcgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0RnJvbnRMZWcubmFtZSA9IFwibGVmdEZyb250TGVnXCI7XHJcbmxlZnRGcm9udExlZy5tb2RlbCA9IGJveE1vZGVsKDEsIDAuMiwgMC4xNSwgWzAsIDAsIDBdKTtcclxubGVmdEZyb250TGVnLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFstMC4yLCAtMC4yNSwgMC4yXSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubGVmdEZyb250TGVnLnBpY2tlZENvbG9yID0gYmxhY2tDb2xvcjtcclxubGVmdEZyb250TGVnLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5sZWZ0RnJvbnRMZWcuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5sZWZ0RnJvbnRMZWcuYW1iaWVudCA9IFsxLDEsMV0sXHJcbmxlZnRGcm9udExlZy5zaGluaW5lc3MgPSAxLFxyXG5sZWZ0RnJvbnRMZWcuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxubGVmdEZyb250TGVnLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxubGVmdEZyb250TGVnLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGZyYW1lczogbGVmdEZyb250TGVnRnJhbWVzKCksXHJcbiAgY3VycmVudEZyYW1lOiAwLFxyXG4gIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgaXNBdXRvOiBmYWxzZSxcclxuICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG5mdW5jdGlvbiBsZWZ0RnJvbnRMZWdGcmFtZXMgKCkge1xyXG4gIGxldCB0cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFstMC4yLCAtMC4yNSwgMC4yXSwgXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgfVxyXG4gIGxldCBmcmFtZXMgPSBbXVxyXG5cclxuICBmb3IobGV0IGsgPSAwOyBrIDwgMjU7ICsrayl7XHJcbiAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IGRlZ1RvUmFkKGspO1xyXG4gICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgfVxyXG4gIGZvcihsZXQgayA9IDA7IGsgPCAyNTsgKytrKXtcclxuICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gZGVnVG9SYWQoLWspO1xyXG4gICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgfVxyXG4gIHJldHVybiBmcmFtZXM7XHJcblxyXG59XHJcblxyXG5jb25zdCBsZWZ0RnJvbnRUb2UgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0RnJvbnRUb2UubmFtZSA9IFwibGVmdEZyb250VG9lXCI7XHJcbmxlZnRGcm9udFRvZS5tb2RlbCA9IGJveE1vZGVsKDAuMSwgMC4yLCAwLjE1LCBbMCwgMCwgMF0pO1xyXG5sZWZ0RnJvbnRUb2UudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWy0wLCAtMC40NSwgMC4wNV0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmxlZnRGcm9udFRvZS5waWNrZWRDb2xvciA9IHdoaXRlQ29sb3I7XHJcbmxlZnRGcm9udFRvZS5kaWZmdXNlID0gWzEsMSwxXSxcclxubGVmdEZyb250VG9lLnNwZWN1bGFyID0gWzEsMSwxXSxcclxubGVmdEZyb250VG9lLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5sZWZ0RnJvbnRUb2Uuc2hpbmluZXNzID0gMSxcclxubGVmdEZyb250VG9lLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmxlZnRGcm9udFRvZS52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbmxlZnRGcm9udFRvZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCByaWdodFJlYXJMZWcgPSBuZXcgTm9kZSgpO1xyXG5yaWdodFJlYXJMZWcubmFtZSA9IFwicmlnaHRSZWFyTGVnXCI7XHJcbnJpZ2h0UmVhckxlZy5tb2RlbCA9IGJveE1vZGVsKDEsIDAuMiwgMC4xNSwgWzAsIDAsIDBdKTtcclxucmlnaHRSZWFyTGVnLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLjIsIC0wLjI1LCAtMC4yXSxcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5yaWdodFJlYXJMZWcucGlja2VkQ29sb3IgPSBibGFja0NvbG9yO1xyXG5yaWdodFJlYXJMZWcuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbnJpZ2h0UmVhckxlZy5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbnJpZ2h0UmVhckxlZy5hbWJpZW50ID0gWzEsMSwxXSxcclxucmlnaHRSZWFyTGVnLnNoaW5pbmVzcyA9IDEsXHJcbnJpZ2h0UmVhckxlZy5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5yaWdodFJlYXJMZWcudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5yaWdodFJlYXJMZWcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogcmlnaHRSZWFyTGVnRnJhbWVzKCksXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogQW5pbWF0aW9uLmFuaW1hdGlvblNjcmlwdCgpLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJpZ2h0UmVhckxlZ0ZyYW1lcygpIHtcclxuICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMC4yLCAtMC4yNSwgLTAuMl0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgfVxyXG4gIGxldCBmcmFtZXMgPSBbXVxyXG4gIGZvcihsZXQgayA9IDA7IGsgPCAyNTsgKytrKXtcclxuICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gZGVnVG9SYWQoayAtIDIwKTtcclxuICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gIH1cclxuICBmb3IobGV0IGsgPSAwOyBrIDwgMjU7ICsrayl7XHJcbiAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSBkZWdUb1JhZCgtayArIDIwKTtcclxuICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgfVxyXG5cclxuICBcclxuXHJcbiAgcmV0dXJuIGZyYW1lcztcclxufVxyXG5cclxuY29uc3QgcmlnaHRSZWFyVG9lID0gbmV3IE5vZGUoKTtcclxucmlnaHRSZWFyVG9lLm5hbWUgPSBcInJpZ2h0UmVhclRvZVwiO1xyXG5yaWdodFJlYXJUb2UubW9kZWwgPSBib3hNb2RlbCgwLjEsIDAuMiwgMC4yLCBbMCwgMCwgMF0pO1xyXG5yaWdodFJlYXJUb2UudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAsIC0wLjQ1LCAwLjA1XSxcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5yaWdodFJlYXJUb2UucGlja2VkQ29sb3IgPSB3aGl0ZUNvbG9yO1xyXG5yaWdodFJlYXJUb2UuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbnJpZ2h0UmVhclRvZS5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbnJpZ2h0UmVhclRvZS5hbWJpZW50ID0gWzEsMSwxXSxcclxucmlnaHRSZWFyVG9lLnNoaW5pbmVzcyA9IDEsXHJcbnJpZ2h0UmVhclRvZS5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5yaWdodFJlYXJUb2Uudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5yaWdodFJlYXJUb2UuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgbGVmdFJlYXJMZWcgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0UmVhckxlZy5uYW1lID0gXCJsZWZ0UmVhckxlZ1wiO1xyXG5sZWZ0UmVhckxlZy5tb2RlbCA9IGJveE1vZGVsKDEsIDAuMiwgMC4xNSwgWzAsIDAsIDBdKTtcclxubGVmdFJlYXJMZWcudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWy0wLjIsIC0wLjI1LCAtMC4yXSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubGVmdFJlYXJMZWcucGlja2VkQ29sb3IgPSBibGFja0NvbG9yO1xyXG5sZWZ0UmVhckxlZy5kaWZmdXNlID0gWzEsMSwxXSxcclxubGVmdFJlYXJMZWcuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5sZWZ0UmVhckxlZy5hbWJpZW50ID0gWzEsMSwxXSxcclxubGVmdFJlYXJMZWcuc2hpbmluZXNzID0gMSxcclxubGVmdFJlYXJMZWcuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxubGVmdFJlYXJMZWcudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5sZWZ0UmVhckxlZy5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBmcmFtZXM6IGxlZnRSZWFyTGVnRnJhbWVzKCksXHJcbiAgY3VycmVudEZyYW1lOiAwLFxyXG4gIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgaXNBdXRvOiBmYWxzZSxcclxuICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG5mdW5jdGlvbiBsZWZ0UmVhckxlZ0ZyYW1lcygpIHtcclxuICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbLTAuMiwgLTAuMjUsIC0wLjJdLCBcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICB9XHJcbiAgbGV0IGZyYW1lcyA9IFtdXHJcbiAgZm9yKGxldCBrID0gMDsgayA8IDI1OyArK2spe1xyXG4gICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gZGVnVG9SYWQoLWsgKyAyMCk7XHJcbiAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gIH1cclxuXHJcbiAgZm9yKGxldCBrID0gMDsgayA8IDI1OyArK2spe1xyXG4gICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSBkZWdUb1JhZChrIC0gMjApO1xyXG4gICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgfVxyXG4gIHJldHVybiBmcmFtZXM7XHJcbn1cclxuXHJcbmNvbnN0IGxlZnRSZWFyVG9lID0gbmV3IE5vZGUoKTtcclxubGVmdFJlYXJUb2UubmFtZSA9IFwibGVmdFJlYXJUb2VcIjtcclxubGVmdFJlYXJUb2UubW9kZWwgPSBib3hNb2RlbCgwLjEsIDAuMiwgMC4yLCBbMCwgMCwgMF0pO1xyXG5sZWZ0UmVhclRvZS50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbLTAsIC0wLjQ1LCAwLjA1XSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubGVmdFJlYXJUb2UucGlja2VkQ29sb3IgPSB3aGl0ZUNvbG9yO1xyXG5sZWZ0UmVhclRvZS5kaWZmdXNlID0gWzEsMSwxXSxcclxubGVmdFJlYXJUb2Uuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5sZWZ0UmVhclRvZS5hbWJpZW50ID0gWzEsMSwxXSxcclxubGVmdFJlYXJUb2Uuc2hpbmluZXNzID0gMSxcclxubGVmdFJlYXJUb2UuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxubGVmdFJlYXJUb2Uudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5sZWZ0UmVhclRvZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCB0YWlsID0gbmV3IE5vZGUoKTtcclxudGFpbC5uYW1lID0gXCJ0YWlsXCI7XHJcbnRhaWwubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC40LCBbMCwgMCwgMF0pO1xyXG50YWlsLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLCAwLCAtMC42NV0sXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxudGFpbC5waWNrZWRDb2xvciA9IGJvZHlDb2xvcjtcclxudGFpbC5kaWZmdXNlID0gWzEsMSwxXSxcclxudGFpbC5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbnRhaWwuYW1iaWVudCA9IFsxLDEsMV0sXHJcbnRhaWwuc2hpbmluZXNzID0gMSxcclxudGFpbC5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG50YWlsLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxudGFpbC5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCB0YWlsZWRnZSA9IG5ldyBOb2RlKCk7XHJcbnRhaWxlZGdlLm5hbWUgPSBcInRhaWxlZGdlXCI7XHJcbnRhaWxlZGdlLm1vZGVsID0gYm94TW9kZWwoMC4yLCAwLjIsIDAuMiwgWzAsIDAsIDBdKTtcclxudGFpbGVkZ2UudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAsIDAsIC0wLjk1XSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxudGFpbGVkZ2UucGlja2VkQ29sb3IgPSB3aGl0ZUNvbG9yO1xyXG50YWlsZWRnZS5kaWZmdXNlID0gWzEsMSwxXSxcclxudGFpbGVkZ2Uuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG50YWlsZWRnZS5hbWJpZW50ID0gWzEsMSwxXSxcclxudGFpbGVkZ2Uuc2hpbmluZXNzID0gMSxcclxudGFpbGVkZ2UuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxudGFpbGVkZ2Uudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG50YWlsZWRnZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5oZWFkLnNldFBhcmVudChmb3gpO1xyXG5yaWdodEVhci5zZXRQYXJlbnQoaGVhZCk7XHJcbmxlZnRFYXIuc2V0UGFyZW50KGhlYWQpO1xyXG53aGl0ZVJpZ2h0RXllLnNldFBhcmVudChoZWFkKTtcclxud2hpdGVMZWZ0RXllLnNldFBhcmVudChoZWFkKTtcclxuYmxhY2tSaWdodEV5ZS5zZXRQYXJlbnQod2hpdGVSaWdodEV5ZSk7XHJcbmJsYWNrTGVmdEV5ZS5zZXRQYXJlbnQod2hpdGVMZWZ0RXllKTtcclxubm9zZS5zZXRQYXJlbnQoaGVhZCk7XHJcbnVuZGVybm9zZS5zZXRQYXJlbnQoaGVhZCk7XHJcbnJpZ2h0RnJvbnRMZWcuc2V0UGFyZW50KGZveCk7XHJcbnJpZ2h0RnJvbnRUb2Uuc2V0UGFyZW50KHJpZ2h0RnJvbnRMZWcpO1xyXG5sZWZ0RnJvbnRMZWcuc2V0UGFyZW50KGZveCk7XHJcbmxlZnRGcm9udFRvZS5zZXRQYXJlbnQobGVmdEZyb250TGVnKTtcclxucmlnaHRSZWFyTGVnLnNldFBhcmVudChmb3gpO1xyXG5yaWdodFJlYXJUb2Uuc2V0UGFyZW50KHJpZ2h0UmVhckxlZyk7XHJcbmxlZnRSZWFyTGVnLnNldFBhcmVudChmb3gpO1xyXG5sZWZ0UmVhclRvZS5zZXRQYXJlbnQobGVmdFJlYXJMZWcpO1xyXG50YWlsLnNldFBhcmVudChmb3gpO1xyXG50YWlsZWRnZS5zZXRQYXJlbnQoZm94KTtcclxuXHJcbnZhciBmb3hNb2RlbCA9IFtcclxuICBmb3hcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZveE1vZGVsO1xyXG4iLCJpbXBvcnQgTm9kZSBmcm9tIFwiLi4vbm9kZS5qc1wiO1xyXG5pbXBvcnQgeyBkZWdUb1JhZCB9IGZyb20gXCIuLi9tYXRoL21hdGhVdGlscy5qc1wiO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuLi8uLi91dGlscy9BbmltYXRpb24uanNcIjtcclxuaW1wb3J0IGJveE1vZGVsLCB7Z2VuZXJhdGVGYWNlcywgZ2VuZXJhdGVOb3JtYWxzLCBnZW5lcmF0ZVZlcnRpY2VzfSBmcm9tIFwiLi4vYm94TW9kZWwuanNcIjtcclxuXHJcbmZ1bmN0aW9uIGhvbGxvd1RoaW5neSgpIHtcclxuICAgIGxldCB2ZXJ0aWNlcyA9IFtdO1xyXG4gICAgbGV0IGNvbG9ycyA9IFtdO1xyXG4gICAgbGV0IHRhbmdlbnRzID0gW107XHJcbiAgICBsZXQgYml0YW5nZW50cyA9IFtdO1xyXG4gICAgbGV0IG5vcm1hbHMgPSBbXTtcclxuICAgIGxldCB0ZXhDb29yZCA9IFtdO1xyXG4gICAgbGV0IGZhY2VzID0gZ2VuZXJhdGVGYWNlcygpO1xyXG4gICAgXHJcbiAgICBjb25zdCBib3hlcyA9IFtcclxuICAgICAgeyBzaXplOiBbMC4yLCAwLjgsIDAuMl0sIHBvc2l0aW9uOiBbMCwgMSwgMF0gfSxcclxuICAgICAgeyBzaXplOiBbMC4yLCAwLjgsIDAuMl0sIHBvc2l0aW9uOiBbMCwgLTEsIDBdIH0sXHJcbiAgICAgIHsgc2l6ZTogWzEuOCwgMC4yLCAwLjJdLCBwb3NpdGlvbjogWy0wLjMsIDAsIDBdIH0sXHJcbiAgICAgIHsgc2l6ZTogWzEuOCwgMC4yLCAwLjJdLCBwb3NpdGlvbjogWzAuMywgMCwgMF0gfSxcclxuICAgICAgeyBzaXplOiBbMC4yLCAxLjgsIDAuMl0sIHBvc2l0aW9uOiBbMCwgMCwgMC4zXSB9LFxyXG4gICAgICB7IHNpemU6IFswLjIsIDEuOCwgMC4yXSwgcG9zaXRpb246IFswLCAwLCAtMC4zXSB9LFxyXG4gICAgICB7IHNpemU6IFswLjIsIDAuMiwgMC44XSwgcG9zaXRpb246IFsxLCAwLCAwXSB9LFxyXG4gICAgICB7IHNpemU6IFswLjIsIDAuMiwgMC44XSwgcG9zaXRpb246IFstMSwgMCwgMF0gfSxcclxuICAgICAgeyBzaXplOiBbMC44LCAwLjIsIDAuMl0sIHBvc2l0aW9uOiBbMCwgMCwgMV0gfSxcclxuICAgICAgeyBzaXplOiBbMC44LCAwLjIsIDAuMl0sIHBvc2l0aW9uOiBbMCwgMCwgLTFdIH0sXHJcbiAgICAgIHsgc2l6ZTogWzAuMiwgMC4yLCAxLjhdLCBwb3NpdGlvbjogWzAsIDAuMywgMF0gfSxcclxuICAgICAgeyBzaXplOiBbMC4yLCAwLjIsIDEuOF0sIHBvc2l0aW9uOiBbMCwgLTAuMywgMF0gfVxyXG4gICAgXTtcclxuICAgIFxyXG4gICAgYm94ZXMuZm9yRWFjaChib3ggPT4ge1xyXG4gICAgICBsZXQgdmVydGljZXNCb3ggPSBnZW5lcmF0ZVZlcnRpY2VzKC4uLmJveC5zaXplLCBib3gucG9zaXRpb24pO1xyXG4gICAgICBsZXQgbm9ybWFsc0JveCA9IGdlbmVyYXRlTm9ybWFscyh2ZXJ0aWNlc0JveCwgZmFjZXMpO1xyXG4gICAgICBub3JtYWxzID0gbm9ybWFscy5jb25jYXQobm9ybWFsc0JveCk7XHJcbiAgICAgIHZlcnRpY2VzID0gdmVydGljZXMuY29uY2F0KHRvVmVydGljZXModmVydGljZXNCb3gsIGZhY2VzKSk7XHJcbiAgICB9KTtcclxuICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZlcnRpY2VzOiB2ZXJ0aWNlcyxcclxuICAgICAgZmFjZXM6IGZhY2VzLFxyXG4gICAgICB0YW5nZW50czogdGFuZ2VudHMsXHJcbiAgICAgIGJpdGFuZ2VudHM6IGJpdGFuZ2VudHMsXHJcbiAgICAgIG5vcm1hbHM6IG5vcm1hbHMsXHJcbiAgICAgIGNvbG9yczogY29sb3JzLFxyXG4gICAgICB0ZXhDb29yZDogdGV4Q29vcmQsXHJcbiAgICB9O1xyXG59XHJcbiAgXHJcbmNvbnN0IGhvbGxvdyA9IG5ldyBOb2RlKCk7XHJcbmhvbGxvdy5mbGFnID0gXCJob2xsb3dcIjtcclxuaG9sbG93Lm5hbWUgPSBcIkhvbGxvdyBUaGluZ3lcIjtcclxuaG9sbG93Lm1vZGVsID0gaG9sbG93VGhpbmd5KCk7XHJcbmhvbGxvdy50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMCwgMCwgMF0sXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuaG9sbG93LnBpY2tlZENvbG9yID0gcmFuZG9tQ29sb3JzKCksXHJcbmhvbGxvdy5kaWZmdXNlID0gWzEsMSwxXSxcclxuaG9sbG93LnNwZWN1bGFyID0gWzEsMSwxXSxcclxuaG9sbG93LmFtYmllbnQgPSBbMSwxLDFdLFxyXG5ob2xsb3cuc2hpbmluZXNzID0gMSxcclxuaG9sbG93LmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmhvbGxvdy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5ob2xsb3cuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogdHJ1ZSxcclxuICBmcmFtZXM6IGhvbGxvd0ZyYW1lcygpLFxyXG4gIGN1cnJlbnRGcmFtZTogMCxcclxuICBhbmltYXRpb25GdW5jdGlvbjogQW5pbWF0aW9uLmFuaW1hdGlvblNjcmlwdCgpLFxyXG4gIGlzQXV0bzogdHJ1ZSxcclxuICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG5mdW5jdGlvbiBob2xsb3dGcmFtZXMgKCkge1xyXG4gIGxldCB0cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLCAwLCAwXSxcclxuICAgIHJvdGF0ZTogW2RlZ1RvUmFkKDApLCBkZWdUb1JhZCgwKSwgZGVnVG9SYWQoMCldLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICB9XHJcbiAgbGV0IGZyYW1lcyA9IFtdXHJcbiAgZm9yKGxldCBrID0gMDsgayA8IDM2MTsgKytrKXtcclxuICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IGRlZ1RvUmFkKGspO1xyXG4gICAgICBfdHJhbnNmb3JtLnJvdGF0ZVsxXSA9IGRlZ1RvUmFkKGspO1xyXG4gICAgICBfdHJhbnNmb3JtLnJvdGF0ZVsyXSA9IGRlZ1RvUmFkKGspO1xyXG4gICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBmcmFtZXM7XHJcbn1cclxuXHJcbnZhciBob2xsb3dNb2RlbCA9IFtcclxuICAgIGhvbGxvd1xyXG5dXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9sbG93TW9kZWw7IiwiaW1wb3J0IE5vZGUgZnJvbSBcIi4uL25vZGUuanNcIjtcclxuaW1wb3J0IHsgZGVnVG9SYWQgfSBmcm9tIFwiLi4vbWF0aC9tYXRoVXRpbHMuanNcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vdXRpbHMvQW5pbWF0aW9uLmpzXCI7XHJcbmltcG9ydCBib3hNb2RlbCBmcm9tIFwiLi4vYm94TW9kZWwuanNcIjtcclxuXHJcblxyXG5jb25zdCBwaWcgPSBuZXcgTm9kZSgpO1xyXG5waWcuZmxhZyA9IFwiYXJ0aWN1bGF0ZWRcIjtcclxucGlnLm5hbWUgPSBcInBpZ1wiO1xyXG5waWcubW9kZWwgPSBib3hNb2RlbCgxLCAxLjUsIDEsIFswLCAwLCAwXSk7XHJcbnBpZy50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMCwgMCwgMF0sXHJcbiAgcm90YXRlOiBbMTAsIDU5LCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5waWcucGlja2VkQ29sb3IgPSBbMC45MjE1Njg2MjcsMC41Njg2Mjc0NTEsMC44OTgwMzkyMTZdLFxyXG5waWcuYW1iaWVudCA9IFsxLDEsMV07XHJcbnBpZy5waG9uZyA9IHRydWU7XHJcbnBpZy5waG9uZ0FtYmllbnQgPSBbMCwwLDBdLFxyXG5waWcuZGlmZnVzZSA9IFsxLDEsMV07XHJcbnBpZy5zcGVjdWxhciA9IFsxLDEsMV07XHJcbnBpZy5zaGluaW5lc3MgPSAxO1xyXG5waWcuY29uc3QgPSB7XHJcbiAgICBrZDogMS4wLFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn07XHJcbnBpZy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5waWcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogcGlnRnJhbWVzKCksXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogQW5pbWF0aW9uLmFuaW1hdGlvblNjcmlwdCgpLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBwaWdGcmFtZXMoKSB7XHJcbiAgICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgICAgIHRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgICAgIHJvdGF0ZTogW2RlZ1RvUmFkKDEwKSwgZGVnVG9SYWQoNTkpLCBkZWdUb1JhZCgwKV0sXHJcbiAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICAgIH1cclxuICAgIGxldCBmcmFtZXMgPSBbXVxyXG4gICAgZm9yKGxldCBrID0gMDsgayA8IDI1OyArK2spe1xyXG4gICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICBfdHJhbnNmb3JtLnRyYW5zbGF0ZVsxXSA9IGsgLyAyNTtcclxuICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGZyYW1lcztcclxufVxyXG5cclxuY29uc3QgaGVhZCA9IG5ldyBOb2RlKCk7XHJcbmhlYWQubmFtZSA9IFwiaGVhZFwiO1xyXG5oZWFkLm1vZGVsID0gYm94TW9kZWwoMSwgMSwgMS4yLCBbLTEsIDAuNiwgMF0pO1xyXG5oZWFkLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5oZWFkLnBpY2tlZENvbG9yID0gWzAuOTIxNTY4NjI3LDAuNTY4NjI3NDUxLDAuODk4MDM5MjE2XSxcclxuaGVhZC5hbWJpZW50ID0gWzEsMSwxXTtcclxuaGVhZC5waG9uZyA9IHRydWU7XHJcbmhlYWQucGhvbmdBbWJpZW50ID0gWzAsMCwwXSxcclxuaGVhZC5kaWZmdXNlID0gWzEsMSwxXTtcclxuaGVhZC5zcGVjdWxhciA9IFsxLDEsMV07XHJcbmhlYWQuc2hpbmluZXNzID0gMTtcclxuaGVhZC5jb25zdCA9IHtcclxuICAgIGtkOiAxLjAsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufTtcclxuaGVhZC52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5oZWFkLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IGhlYWRGcmFtZXMoKSxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5oZWFkLnBob25nID0gdHJ1ZTtcclxuXHJcbmZ1bmN0aW9uIGhlYWRGcmFtZXMoKSB7XHJcbiAgICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgICAgIHRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgICB9XHJcbiAgICBsZXQgZnJhbWVzID0gW11cclxuICAgIGZvcihsZXQgayA9IDA7IGsgPCAyNTsgKytrKXtcclxuICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMl0gPSAtayAvIDEwMDtcclxuICAgICAgICBfdHJhbnNmb3JtLnNjYWxlWzBdID0gMSArIGsgLyA1MDtcclxuICAgICAgICBfdHJhbnNmb3JtLnNjYWxlWzFdID0gMSArIGsgLyA1MDtcclxuICAgICAgICBfdHJhbnNmb3JtLnNjYWxlWzJdID0gMSArIGsgLyA1MDtcclxuICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIGZyYW1lcztcclxufVxyXG5cclxuY29uc3Qgd2hpdGVSaWdodEV5ZSA9IG5ldyBOb2RlKCk7XHJcbndoaXRlUmlnaHRFeWUubmFtZSA9IFwid2hpdGVSaWdodEV5ZVwiO1xyXG53aGl0ZVJpZ2h0RXllLm1vZGVsID0gYm94TW9kZWwoMC4yLCAwLjIsIDAuMiwgWy0xLCAwLjYsIDBdKTtcclxud2hpdGVSaWdodEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFstMC41LCAwLjIsIDAuNF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbndoaXRlUmlnaHRFeWUucGlja2VkQ29sb3IgPSBbMC45OSwwLjk5LDAuOTldLFxyXG53aGl0ZVJpZ2h0RXllLmFtYmllbnQgPSBbMSwxLDFdO1xyXG53aGl0ZVJpZ2h0RXllLnBob25nID0gdHJ1ZTtcclxud2hpdGVSaWdodEV5ZS5waG9uZ0FtYmllbnQgPSBbMCwwLDBdLFxyXG53aGl0ZVJpZ2h0RXllLmRpZmZ1c2UgPSBbMSwxLDFdO1xyXG53aGl0ZVJpZ2h0RXllLnNwZWN1bGFyID0gWzEsMSwxXTtcclxud2hpdGVSaWdodEV5ZS5zaGluaW5lc3MgPSAxO1xyXG53aGl0ZVJpZ2h0RXllLmNvbnN0ID0ge1xyXG4gICAga2Q6IDEuMCxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59O1xyXG53aGl0ZVJpZ2h0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbndoaXRlUmlnaHRFeWUuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxud2hpdGVSaWdodEV5ZS5waG9uZyA9IHRydWU7XHJcblxyXG5jb25zdCB3aGl0ZUxlZnRFeWUgPSBuZXcgTm9kZSgpO1xyXG53aGl0ZUxlZnRFeWUubmFtZSA9IFwid2hpdGVMZWZ0RXllXCI7XHJcbndoaXRlTGVmdEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMiwgMC4yLCAwLjIsIFstMSwgMC42LCAwXSk7XHJcbndoaXRlTGVmdEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFstMC41LCAwLjIsIC0wLjRdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG53aGl0ZUxlZnRFeWUucGlja2VkQ29sb3IgPSBbMC45OSwwLjk5LDAuOTldLFxyXG53aGl0ZUxlZnRFeWUuYW1iaWVudCA9IFsxLDEsMV07XHJcbndoaXRlTGVmdEV5ZS5waG9uZyA9IHRydWU7XHJcbndoaXRlTGVmdEV5ZS5waG9uZ0FtYmllbnQgPSBbMCwwLDBdLFxyXG53aGl0ZUxlZnRFeWUuZGlmZnVzZSA9IFsxLDEsMV07XHJcbndoaXRlTGVmdEV5ZS5zcGVjdWxhciA9IFsxLDEsMV07XHJcbndoaXRlTGVmdEV5ZS5zaGluaW5lc3MgPSAxO1xyXG53aGl0ZUxlZnRFeWUuY29uc3QgPSB7XHJcbiAgICBrZDogMS4wLFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn07XHJcbndoaXRlTGVmdEV5ZS52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG53aGl0ZUxlZnRFeWUuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxud2hpdGVMZWZ0RXllLnBob25nID0gdHJ1ZTtcclxuXHJcbmNvbnN0IGJsYWNrUmlnaHRFeWUgPSBuZXcgTm9kZSgpO1xyXG5ibGFja1JpZ2h0RXllLm5hbWUgPSBcImJsYWNrUmlnaHRFeWVcIjtcclxuYmxhY2tSaWdodEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMiwgMC4yLCAwLjIsIFstMSwgMC42LCAwXSk7XHJcbmJsYWNrUmlnaHRFeWUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMC4wNSwgMCwgMC4wNzVdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5ibGFja1JpZ2h0RXllLnBpY2tlZENvbG9yID0gWzAsMCwwXSxcclxuYmxhY2tSaWdodEV5ZS5hbWJpZW50ID0gWzEsMSwxXTtcclxuYmxhY2tSaWdodEV5ZS5waG9uZyA9IHRydWU7XHJcbmJsYWNrUmlnaHRFeWUucGhvbmdBbWJpZW50ID0gWzAsMCwwXSxcclxuYmxhY2tSaWdodEV5ZS5kaWZmdXNlID0gWzEsMSwxXTtcclxuYmxhY2tSaWdodEV5ZS5zcGVjdWxhciA9IFsxLDEsMV07XHJcbmJsYWNrUmlnaHRFeWUuc2hpbmluZXNzID0gMTtcclxuYmxhY2tSaWdodEV5ZS5jb25zdCA9IHtcclxuICAgIGtkOiAxLjAsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufTtcclxuYmxhY2tSaWdodEV5ZS52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5ibGFja1JpZ2h0RXllLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcbmJsYWNrUmlnaHRFeWUucGhvbmcgPSB0cnVlO1xyXG5cclxuY29uc3QgYmxhY2tMZWZ0RXllID0gbmV3IE5vZGUoKTtcclxuYmxhY2tMZWZ0RXllLm5hbWUgPSBcImJsYWNrTGVmdEV5ZVwiO1xyXG5ibGFja0xlZnRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC4yLCBbLTEsIDAuNiwgMF0pO1xyXG5ibGFja0xlZnRFeWUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMC4wNSwgMCwgLTAuMDc1XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuYmxhY2tMZWZ0RXllLnBpY2tlZENvbG9yID0gWzAsMCwwXSxcclxuYmxhY2tMZWZ0RXllLmFtYmllbnQgPSBbMSwxLDFdO1xyXG5ibGFja0xlZnRFeWUucGhvbmcgPSB0cnVlO1xyXG5ibGFja0xlZnRFeWUucGhvbmdBbWJpZW50ID0gWzAsMCwwXSxcclxuYmxhY2tMZWZ0RXllLmRpZmZ1c2UgPSBbMSwxLDFdO1xyXG5ibGFja0xlZnRFeWUuc3BlY3VsYXIgPSBbMSwxLDFdO1xyXG5ibGFja0xlZnRFeWUuc2hpbmluZXNzID0gMTtcclxuYmxhY2tMZWZ0RXllLmNvbnN0ID0ge1xyXG4gICAga2Q6IDEuMCxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59O1xyXG5ibGFja0xlZnRFeWUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuYmxhY2tMZWZ0RXllLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcbmJsYWNrTGVmdEV5ZS5waG9uZyA9IHRydWU7XHJcblxyXG5jb25zdCBub3NlID0gbmV3IE5vZGUoKTtcclxubm9zZS5uYW1lID0gXCJub3NlXCI7XHJcbm5vc2UubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC40LCBbLTEuNSwgMC41NSwgMF0pO1xyXG5ub3NlLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuMDUsIDAsIDBdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5ub3NlLnBpY2tlZENvbG9yID0gWzAuNzY4NjI3NDUxLDAuMzc2NDcwNTg4LCAwLjc0NTA5ODAzOV0sXHJcbm5vc2UuYW1iaWVudCA9IFsxLDEsMV07XHJcbm5vc2UucGhvbmcgPSB0cnVlO1xyXG5ub3NlLnBob25nQW1iaWVudCA9IFswLDAsMF0sXHJcbm5vc2UuZGlmZnVzZSA9IFsxLDEsMV07XHJcbm5vc2Uuc3BlY3VsYXIgPSBbMSwxLDFdO1xyXG5ub3NlLnNoaW5pbmVzcyA9IDE7XHJcbm5vc2UuY29uc3QgPSB7XHJcbiAgICBrZDogMS4wLFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn07XHJcbm5vc2Uudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxubm9zZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5ub3NlLnBob25nID0gdHJ1ZTtcclxuXHJcbmNvbnN0IHJpZ2h0SG9sZSA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0SG9sZS5uYW1lID0gXCJyaWdodEhvbGVcIjtcclxucmlnaHRIb2xlLm1vZGVsID0gYm94TW9kZWwoMC4xNSwgMC4yLCAwLjEsIFstMS42LCAwLjU1LCAwXSk7XHJcbnJpZ2h0SG9sZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLjA1LCAwLCAwLjFdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5yaWdodEhvbGUucGlja2VkQ29sb3IgPSBbMC45MjE1Njg2MjcsMC41Njg2Mjc0NTEsMC44OTgwMzkyMTZdLFxyXG5yaWdodEhvbGUuYW1iaWVudCA9IFsxLDEsMV07XHJcbnJpZ2h0SG9sZS5waG9uZyA9IHRydWU7XHJcbnJpZ2h0SG9sZS5waG9uZ0FtYmllbnQgPSBbMCwwLDBdLFxyXG5yaWdodEhvbGUuZGlmZnVzZSA9IFsxLDEsMV07XHJcbnJpZ2h0SG9sZS5zcGVjdWxhciA9IFsxLDEsMV07XHJcbnJpZ2h0SG9sZS5zaGluaW5lc3MgPSAxO1xyXG5yaWdodEhvbGUuY29uc3QgPSB7XHJcbiAgICBrZDogMS4wLFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn07XHJcbnJpZ2h0SG9sZS52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5yaWdodEhvbGUuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxucmlnaHRIb2xlLnBob25nID0gdHJ1ZTtcclxuXHJcbmNvbnN0IGxlZnRIb2xlID0gbmV3IE5vZGUoKTtcclxubGVmdEhvbGUubmFtZSA9IFwibGVmdEhvbGVcIjtcclxubGVmdEhvbGUubW9kZWwgPSBib3hNb2RlbCgwLjE1LCAwLjIsIDAuMSwgWy0xLjYsIDAuNTUsIDBdKTtcclxubGVmdEhvbGUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMC4wNSwgMCwgLTAuMV0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmxlZnRIb2xlLnBpY2tlZENvbG9yID0gWzAuOTIxNTY4NjI3LDAuNTY4NjI3NDUxLDAuODk4MDM5MjE2XSxcclxubGVmdEhvbGUuYW1iaWVudCA9IFsxLDEsMV07XHJcbmxlZnRIb2xlLnBob25nID0gdHJ1ZTtcclxubGVmdEhvbGUucGhvbmdBbWJpZW50ID0gWzAsMCwwXSxcclxubGVmdEhvbGUuZGlmZnVzZSA9IFsxLDEsMV07XHJcbmxlZnRIb2xlLnNwZWN1bGFyID0gWzEsMSwxXTtcclxubGVmdEhvbGUuc2hpbmluZXNzID0gMTtcclxubGVmdEhvbGUuY29uc3QgPSB7XHJcbiAgICBrZDogMS4wLFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn07XHJcbmxlZnRIb2xlLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmxlZnRIb2xlLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcbmxlZnRIb2xlLnBob25nID0gdHJ1ZTtcclxuXHJcbmNvbnN0IHJpZ2h0RnJvbnRMZWcgPSBuZXcgTm9kZSgpO1xyXG5yaWdodEZyb250TGVnLm5hbWUgPSBcInJpZ2h0RnJvbnRMZWdcIjtcclxucmlnaHRGcm9udExlZy5tb2RlbCA9IGJveE1vZGVsKDAuNSwgMC4yLCAwLjIsIFswLjEsIDAsIDAuMTVdKTtcclxucmlnaHRGcm9udExlZy50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFstMC42LCAtMC41LCAtMC40XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRGcm9udExlZy5waWNrZWRDb2xvciA9IFswLjc2ODYyNzQ1MSwwLjM3NjQ3MDU4OCwgMC43NDUwOTgwMzldLFxyXG5yaWdodEZyb250TGVnLmFtYmllbnQgPSBbMSwxLDFdO1xyXG5yaWdodEZyb250TGVnLnBob25nID0gdHJ1ZTtcclxucmlnaHRGcm9udExlZy5waG9uZ0FtYmllbnQgPSBbMCwwLDBdLFxyXG5yaWdodEZyb250TGVnLmRpZmZ1c2UgPSBbMSwxLDFdO1xyXG5yaWdodEZyb250TGVnLnNwZWN1bGFyID0gWzEsMSwxXTtcclxucmlnaHRGcm9udExlZy5zaGluaW5lc3MgPSAxO1xyXG5yaWdodEZyb250TGVnLmNvbnN0ID0ge1xyXG4gICAga2Q6IDEuMCxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59O1xyXG5yaWdodEZyb250TGVnLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbnJpZ2h0RnJvbnRMZWcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogcmlnaHRGcm9udExlZ0ZyYW1lcygpLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcbnJpZ2h0RnJvbnRMZWcucGhvbmcgPSB0cnVlO1xyXG5cclxuZnVuY3Rpb24gcmlnaHRGcm9udExlZ0ZyYW1lcygpIHtcclxuICAgIGxldCB0cmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgdHJhbnNsYXRlOlstMC42LCAtMC41LCAtMC40XSxcclxuICAgICAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgICAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG4gICAgfVxyXG5cclxuICAgIGxldCBmcmFtZXMgPSBbXVxyXG4gICAgZm9yKGxldCBrID0gMDsgayA8IDI1OyArK2spe1xyXG4gICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IGsvMjUgO1xyXG4gICAgICAgIF90cmFuc2Zvcm0udHJhbnNsYXRlWzJdID0gLTAuNCArIC0wLjIvKDI1LWspO1xyXG4gICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmcmFtZXM7XHJcbn1cclxuXHJcblxyXG5jb25zdCBsZWZ0RnJvbnRMZWcgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0RnJvbnRMZWcubmFtZSA9IFwibGVmdEZyb250TGVnXCI7XHJcbmxlZnRGcm9udExlZy5tb2RlbCA9IGJveE1vZGVsKDAuNSwgMC4yLCAwLjIsIFswLjEsIDAsIC0wLjE1XSk7XHJcbmxlZnRGcm9udExlZy50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFstMC42LCAtMC41LCAwLjRdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5sZWZ0RnJvbnRMZWcucGlja2VkQ29sb3IgPSBbMC43Njg2Mjc0NTEsMC4zNzY0NzA1ODgsIDAuNzQ1MDk4MDM5XSxcclxubGVmdEZyb250TGVnLmFtYmllbnQgPSBbMSwxLDFdO1xyXG5sZWZ0RnJvbnRMZWcucGhvbmcgPSB0cnVlO1xyXG5sZWZ0RnJvbnRMZWcucGhvbmdBbWJpZW50ID0gWzAsMCwwXSxcclxubGVmdEZyb250TGVnLmRpZmZ1c2UgPSBbMSwxLDFdO1xyXG5sZWZ0RnJvbnRMZWcuc3BlY3VsYXIgPSBbMSwxLDFdO1xyXG5sZWZ0RnJvbnRMZWcuc2hpbmluZXNzID0gMTtcclxubGVmdEZyb250TGVnLmNvbnN0ID0ge1xyXG4gICAga2Q6IDEuMCxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59O1xyXG5sZWZ0RnJvbnRMZWcudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxubGVmdEZyb250TGVnLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IGxlZnRGcm9udEZyYW1lcygpLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcbmxlZnRGcm9udExlZy5waG9uZyA9IHRydWU7XHJcblxyXG5mdW5jdGlvbiBsZWZ0RnJvbnRGcmFtZXMoKSB7XHJcbiAgICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgICAgIHRyYW5zbGF0ZTpbLTAuNiwgLTAuNSwgMC40XSxcclxuICAgICAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgICAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG4gICAgfVxyXG5cclxuICAgIGxldCBmcmFtZXMgPSBbXVxyXG4gICAgZm9yKGxldCBrID0gMDsgayA8IDI1OyArK2spe1xyXG4gICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IC1rLzI1IDtcclxuICAgICAgICBfdHJhbnNmb3JtLnRyYW5zbGF0ZVsyXSA9IDAuNCArIDAuMi8oMjUtayk7XHJcbiAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZyYW1lcztcclxufVxyXG5cclxuY29uc3QgcmlnaHRSZWFyTGVnID0gbmV3IE5vZGUoKTtcclxucmlnaHRSZWFyTGVnLm5hbWUgPSBcInJpZ2h0UmVhckxlZ1wiO1xyXG5yaWdodFJlYXJMZWcubW9kZWwgPSBib3hNb2RlbCgwLjUsIDAuMiwgMC4yLCBbMC41LCAwLCAwLjE1XSk7XHJcbnJpZ2h0UmVhckxlZy50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLCAtMC41LCAtMC40XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRSZWFyTGVnLnBpY2tlZENvbG9yID0gWzAuNzY4NjI3NDUxLDAuMzc2NDcwNTg4LCAwLjc0NTA5ODAzOV0sXHJcbnJpZ2h0UmVhckxlZy5hbWJpZW50ID0gWzEsMSwxXTtcclxucmlnaHRSZWFyTGVnLnBob25nID0gdHJ1ZTtcclxucmlnaHRSZWFyTGVnLnBob25nQW1iaWVudCA9IFswLDAsMF0sXHJcbnJpZ2h0UmVhckxlZy5kaWZmdXNlID0gWzEsMSwxXTtcclxucmlnaHRSZWFyTGVnLnNwZWN1bGFyID0gWzEsMSwxXTtcclxucmlnaHRSZWFyTGVnLnNoaW5pbmVzcyA9IDE7XHJcbnJpZ2h0UmVhckxlZy5jb25zdCA9IHtcclxuICAgIGtkOiAxLjAsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufTtcclxucmlnaHRSZWFyTGVnLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbnJpZ2h0UmVhckxlZy5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiByaWdodFJlYXJMZWdGcmFtZXMoKSxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5yaWdodFJlYXJMZWcucGhvbmcgPSB0cnVlO1xyXG5cclxuZnVuY3Rpb24gcmlnaHRSZWFyTGVnRnJhbWVzKCkge1xyXG4gICAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgICAgICB0cmFuc2xhdGU6WzAsIC0wLjUsIC0wLjRdLFxyXG4gICAgICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZyYW1lcyA9IFtdXHJcbiAgICBmb3IobGV0IGsgPSAwOyBrIDwgMjU7ICsrayl7XHJcbiAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gay8yNSA7XHJcbiAgICAgICAgX3RyYW5zZm9ybS50cmFuc2xhdGVbMl0gPSAtMC40ICsgLTAuMi8oMjUtayk7XHJcbiAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZyYW1lcztcclxufVxyXG5cclxuY29uc3QgbGVmdFJlYXJMZWcgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0UmVhckxlZy5uYW1lID0gXCJsZWZ0UmVhckxlZ1wiO1xyXG5sZWZ0UmVhckxlZy5tb2RlbCA9IGJveE1vZGVsKDAuNSwgMC4yLCAwLjIsIFswLjUsIDAsIC0wLjE1XSk7XHJcbmxlZnRSZWFyTGVnLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAsIC0wLjUsIDAuNF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmxlZnRSZWFyTGVnLnBpY2tlZENvbG9yID0gWzAuNzY4NjI3NDUxLDAuMzc2NDcwNTg4LCAwLjc0NTA5ODAzOV0sXHJcbmxlZnRSZWFyTGVnLmFtYmllbnQgPSBbMSwxLDFdO1xyXG5sZWZ0UmVhckxlZy5waG9uZyA9IHRydWU7XHJcbmxlZnRSZWFyTGVnLnBob25nQW1iaWVudCA9IFswLDAsMF0sXHJcbmxlZnRSZWFyTGVnLmRpZmZ1c2UgPSBbMSwxLDFdO1xyXG5sZWZ0UmVhckxlZy5zcGVjdWxhciA9IFsxLDEsMV07XHJcbmxlZnRSZWFyTGVnLnNoaW5pbmVzcyA9IDE7XHJcbmxlZnRSZWFyTGVnLmNvbnN0ID0ge1xyXG4gICAga2Q6IDEuMCxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59O1xyXG5sZWZ0UmVhckxlZy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5sZWZ0UmVhckxlZy5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBsZWZ0UmVhckZyYW1lcygpLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcbmxlZnRSZWFyTGVnLnBob25nID0gdHJ1ZTtcclxuXHJcbmZ1bmN0aW9uIGxlZnRSZWFyRnJhbWVzKCkge1xyXG4gICAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgICAgICB0cmFuc2xhdGU6WzAsIC0wLjUsIDAuNF0sXHJcbiAgICAgICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZnJhbWVzID0gW11cclxuICAgIGZvcihsZXQgayA9IDA7IGsgPCAyNTsgKytrKXtcclxuICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSAtay8yNSA7XHJcbiAgICAgICAgX3RyYW5zZm9ybS50cmFuc2xhdGVbMl0gPSAwLjQgKyAwLjIvKDI1LWspO1xyXG4gICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmcmFtZXM7XHJcbn1cclxuXHJcbmhlYWQuc2V0UGFyZW50KHBpZyk7XHJcbndoaXRlUmlnaHRFeWUuc2V0UGFyZW50KGhlYWQpO1xyXG53aGl0ZUxlZnRFeWUuc2V0UGFyZW50KGhlYWQpO1xyXG5ibGFja1JpZ2h0RXllLnNldFBhcmVudCh3aGl0ZVJpZ2h0RXllKTtcclxuYmxhY2tMZWZ0RXllLnNldFBhcmVudCh3aGl0ZUxlZnRFeWUpO1xyXG5ub3NlLnNldFBhcmVudChoZWFkKTtcclxucmlnaHRIb2xlLnNldFBhcmVudChub3NlKTtcclxubGVmdEhvbGUuc2V0UGFyZW50KG5vc2UpO1xyXG5yaWdodEZyb250TGVnLnNldFBhcmVudChwaWcpO1xyXG5sZWZ0RnJvbnRMZWcuc2V0UGFyZW50KHBpZyk7XHJcbnJpZ2h0UmVhckxlZy5zZXRQYXJlbnQocGlnKTtcclxubGVmdFJlYXJMZWcuc2V0UGFyZW50KHBpZyk7XHJcblxyXG52YXIgcGlnTW9kZWwgPSBbXHJcbiAgICBwaWdcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBpZ01vZGVsO1xyXG4gICIsImltcG9ydCBOb2RlIGZyb20gXCIuLi9ub2RlLmpzXCI7XHJcbmltcG9ydCBib3hNb2RlbCwge2dlbmVyYXRlRmFjZXMsIGdlbmVyYXRlTm9ybWFscywgZ2VuZXJhdGVWZXJ0aWNlc30gZnJvbSBcIi4uL2JveE1vZGVsLmpzXCI7XHJcbmltcG9ydCB7IHJhZFRvRGVnLGRlZ1RvUmFkIH0gZnJvbSBcIi4uL21hdGgvbWF0aFV0aWxzLmpzXCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uL3V0aWxzL0FuaW1hdGlvbi5qc1wiO1xyXG5cclxuZnVuY3Rpb24gcmluZygpIHtcclxuICAgIGxldCB2ZXJ0aWNlcyA9IFtdO1xyXG4gICAgbGV0IGNvbG9ycyA9IFtdO1xyXG4gICAgbGV0IHRhbmdlbnRzID0gW107XHJcbiAgICBsZXQgYml0YW5nZW50cyA9IFtdO1xyXG4gICAgbGV0IG5vcm1hbHMgPSBbXTtcclxuICAgIGxldCB0ZXhDb29yZCA9IFtdO1xyXG4gICAgbGV0IGZhY2VzID0gZ2VuZXJhdGVGYWNlcygpO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVCb3hlcygpe1xyXG4gICAgbGV0IGJveGVzID0gW107XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMzYwOyArK2kpe1xyXG4gICAgICBsZXQgcmFkID0gZGVnVG9SYWQoaSk7XHJcbiAgICAgIGxldCBwb3NpdGlvbiA9IFtNYXRoLmNvcyhyYWQpLCBNYXRoLnNpbihyYWQpLCAwXTtcclxuICAgICAgbGV0IHNpemUgPSBbMC4wNSwgMC4wNSwgMC44XTtcclxuICAgICAgYm94ZXMucHVzaCh7IHNpemU6IHNpemUsIHBvc2l0aW9uOiBwb3NpdGlvbiB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBib3hlcztcclxuICB9XHJcblxyXG4gIGNvbnN0IGJveGVzID0gZ2VuZXJhdGVCb3hlcygpO1xyXG4gIFxyXG4gIGJveGVzLmZvckVhY2goYm94ID0+IHtcclxuICAgIGxldCB2ZXJ0aWNlc0JveCA9IGdlbmVyYXRlVmVydGljZXMoLi4uYm94LnNpemUsIGJveC5wb3NpdGlvbik7XHJcbiAgICBsZXQgbm9ybWFsc0JveCA9IGdlbmVyYXRlTm9ybWFscyh2ZXJ0aWNlc0JveCwgZmFjZXMpO1xyXG4gICAgbm9ybWFscyA9IG5vcm1hbHMuY29uY2F0KG5vcm1hbHNCb3gpO1xyXG4gICAgdmVydGljZXMgPSB2ZXJ0aWNlcy5jb25jYXQodG9WZXJ0aWNlcyh2ZXJ0aWNlc0JveCwgZmFjZXMpKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHZlcnRpY2VzOiB2ZXJ0aWNlcyxcclxuICAgIGZhY2VzOiBmYWNlcyxcclxuICAgIHRhbmdlbnRzOiB0YW5nZW50cyxcclxuICAgIGJpdGFuZ2VudHM6IGJpdGFuZ2VudHMsXHJcbiAgICBub3JtYWxzOiBub3JtYWxzLFxyXG4gICAgY29sb3JzOiBjb2xvcnMsXHJcbiAgICB0ZXhDb29yZDogdGV4Q29vcmQsXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgaG9sbG93ID0gbmV3IE5vZGUoKTtcclxuaG9sbG93LmZsYWcgPSBcImhvbGxvd1wiO1xyXG5ob2xsb3cubmFtZSA9IFwiUmluZ1wiO1xyXG5ob2xsb3cubW9kZWwgPSByaW5nKCk7XHJcbmhvbGxvdy50cmFuc2Zvcm0gPSB7XHJcbnRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG5yb3RhdGU6IFsxMCwgMCwgMF0sXHJcbnNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmhvbGxvdy5waWNrZWRDb2xvciA9IHJhbmRvbUNvbG9ycygpXHJcbmhvbGxvdy52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbmhvbGxvdy5kaWZmdXNlID0gWzEsMSwxXSxcclxuaG9sbG93LnNwZWN1bGFyID0gWzEsMSwxXSxcclxuaG9sbG93LmFtYmllbnQgPSBbMSwxLDFdLFxyXG5ob2xsb3cuc2hpbmluZXNzID0gMSxcclxuaG9sbG93LmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmhvbGxvdy5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiB0cnVlLFxyXG4gIGZyYW1lczogaG9sbG93RnJhbWVzKCksXHJcbiAgY3VycmVudEZyYW1lOiAwLFxyXG4gIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgaXNBdXRvOiB0cnVlLFxyXG4gIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbmZ1bmN0aW9uIGhvbGxvd0ZyYW1lcygpIHtcclxuICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMCwgMCwgMF0sXHJcbiAgICByb3RhdGU6IFtkZWdUb1JhZCgxMCksIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICB9XHJcbiAgbGV0IGZyYW1lcyA9IFtdXHJcbiAgZm9yKGxldCBrID0gMDsgayA8IDM2MDsgKytrKXtcclxuICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IGRlZ1RvUmFkKCgxMCtrKSAlIDM2MClcclxuICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMV0gPSBkZWdUb1JhZCgoaysxKSUzNjApXHJcbiAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gIH1cclxuICBcclxuICByZXR1cm4gZnJhbWVzO1xyXG59XHJcblxyXG52YXIgaG9sbG93UmluZ01vZGVsID0gW1xyXG4gIGhvbGxvd1xyXG5dXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9sbG93UmluZ01vZGVsOyIsIi8vIGNvbnN0IHsgZGVmYXVsdDogTWF0NCB9ID0gcmVxdWlyZShcIi4vc3RydWN0cy9tYXRoL01hdDRcIik7XHJcbmltcG9ydCBNYXQ0IGZyb20gXCIuL21hdGgvTWF0NC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XHJcbiAgICAgICAgdGhpcy5sb2NhbE1hdHJpeCA9IE1hdDQuZ2V0SWRlbnRpdHkoKTtcclxuICAgICAgICB0aGlzLndvcmxkTWF0cml4ID0gTWF0NC5nZXRJZGVudGl0eSgpO1xyXG4gICAgICAgIHRoaXMud29ybGRJbnZlcnNlTWF0cml4ID0gTWF0NC5nZXRJZGVudGl0eSgpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgc2V0UGFyZW50KHBhcmVudCkge1xyXG4gICAgICAgIC8vIGFscmVhZHkgaGF2ZSBwYXJlbnRcclxuICAgICAgICBpZiAodGhpcy5wYXJlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQubmFtZTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICBzZXRXb3JsZE10eChtYXRyaXgpIHtcclxuICAgICAgaWYgKG1hdHJpeCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMud29ybGRNYXRyaXggPSBNYXQ0Lm11bHRpcGx5KG1hdHJpeCwgdGhpcy5sb2NhbE1hdHJpeCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy53b3JsZE1hdHJpeCA9IHRoaXMubG9jYWxNYXRyaXg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgY29uc3Qgd29ybGRNYXRyaXggPSB0aGlzLndvcmxkTWF0cml4O1xyXG4gICAgICB0aGlzLndvcmxkSW52ZXJzZU1hdHJpeCA9IE1hdDQudHJhbnNwb3NlKFxyXG4gICAgICAgIE1hdDQuaW52ZXJzZSh0aGlzLndvcmxkTWF0cml4KVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIGNoaWxkLnNldFdvcmxkTXR4KHdvcmxkTWF0cml4KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9KU09OKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgYW1iaWVudDogdGhpcy5hbWJpZW50LFxyXG4gICAgICAgICAgYW5pbWF0aW9uOiB0aGlzLmFuaW1hdGlvbixcclxuICAgICAgICAgIGNoaWxkcmVuOiB0aGlzLmNoaWxkcmVuLm1hcChjaGlsZCA9PiBjaGlsZC50b0pTT04oKSksXHJcbiAgICAgICAgICBjb25zdDogdGhpcy5jb25zdCxcclxuICAgICAgICAgIGRpZmZ1c2U6IHRoaXMuZGlmZnVzZSxcclxuICAgICAgICAgIGxvY2FsTWF0cml4OiB0aGlzLmxvY2FsTWF0cml4LFxyXG4gICAgICAgICAgbW9kZWw6IHRoaXMubW9kZWwsXHJcbiAgICAgICAgICBwaWNrZWRDb2xvcjogdGhpcy5waWNrZWRDb2xvcixcclxuICAgICAgICAgIHBob25nOiB0aGlzLnBob25nLFxyXG4gICAgICAgICAgcGhvbmdBbWJpZW50OiB0aGlzLnBob25nQW1iaWVudCxcclxuICAgICAgICAgIHNoaW5pbmVzczogdGhpcy5zaGluaW5lc3MsXHJcbiAgICAgICAgICBzcGVjdWxhcjogdGhpcy5zcGVjdWxhcixcclxuICAgICAgICAgIHRyYW5zZm9ybTogdGhpcy50cmFuc2Zvcm0sXHJcbiAgICAgICAgICB2aWV3TWF0cml4OiB0aGlzLnZpZXdNYXRyaXgsICBcclxuICAgICAgICAgIHdvcmxkSW52ZXJzZU1hdHJpeDogdGhpcy53b3JsZEludmVyc2VNYXRyaXgsXHJcbiAgICAgICAgICB3b3JsZE1hdHJpeDogdGhpcy53b3JsZE1hdHJpeCxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmcm9tSlNPTihkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgICAgIHRoaXMuYW1iaWVudCA9IGRhdGEuYW1iaWVudDtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IGRhdGEuYW5pbWF0aW9uO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBkYXRhLmNoaWxkcmVuLm1hcChjaGlsZERhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZE5vZGUgPSBuZXcgTm9kZSgpO1xyXG4gICAgICAgICAgICBjaGlsZE5vZGUuZnJvbUpTT04oY2hpbGREYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNvbnN0ID0gZGF0YS5jb25zdDtcclxuICAgICAgICB0aGlzLmRpZmZ1c2UgPSBkYXRhLmRpZmZ1c2U7XHJcbiAgICAgICAgdGhpcy5sb2NhbE1hdHJpeCA9IGRhdGEubG9jYWxNYXRyaXg7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IGRhdGEubW9kZWw7XHJcbiAgICAgICAgdGhpcy5waWNrZWRDb2xvciA9IGRhdGEucGlja2VkQ29sb3I7XHJcbiAgICAgICAgdGhpcy5waG9uZyA9IGRhdGEucGhvbmc7XHJcbiAgICAgICAgdGhpcy5waG9uZ0FtYmllbnQgPSBkYXRhLnBob25nQW1iaWVudDtcclxuICAgICAgICB0aGlzLnNoaW5pbmVzcyA9IGRhdGEuc2hpbmluZXNzO1xyXG4gICAgICAgIHRoaXMuc3BlY3VsYXIgPSBkYXRhLnNwZWN1bGFyO1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gZGF0YS50cmFuc2Zvcm07XHJcbiAgICAgICAgdGhpcy52aWV3TWF0cml4ID0gZGF0YS52aWV3TWF0cml4O1xyXG4gICAgICAgIHRoaXMud29ybGRJbnZlcnNlTWF0cml4ID0gZGF0YS53b3JsZEludmVyc2VNYXRyaXg7XHJcbiAgICAgICAgdGhpcy53b3JsZE1hdHJpeCA9IGRhdGEud29ybGRNYXRyaXg7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgfVxyXG4gICIsImltcG9ydCBOb2RlIGZyb20gXCIuLi9zdHJ1Y3RzL25vZGUuanNcIjtcclxuaW1wb3J0IHsgZGVnVG9SYWQsIHJhZFRvRGVnIH0gZnJvbSBcIi4uL3N0cnVjdHMvbWF0aC9tYXRoVXRpbHMuanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5pbWF0aW9ue1xyXG5cclxuICAgIHN0YXRpYyBwYXJzZUFuaW1hdGlvbkZ1bmN0aW9uKG1vZGVsKXtcclxuICAgICAgICBsZXQgYW5pbWF0aW9uID0gbW9kZWwuYW5pbWF0aW9uO1xyXG4gICAgICAgIGlmKGFuaW1hdGlvbi5pc0FuaW1hdGUpe1xyXG4gICAgICAgICAgICAvLyBwYXJzZSBzdHJpbmcgdG8gZnVuY3Rpb25cclxuICAgICAgICAgICAgbGV0IF9hbmltYXRpb25GdW5jdGlvbiA9IGV2YWwoYW5pbWF0aW9uLmFuaW1hdGlvbkZ1bmN0aW9uKVxyXG4gICAgICAgICAgICByZXR1cm4gX2FuaW1hdGlvbkZ1bmN0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYW5pbWF0ZShwYXJlbnRfbW9kZWwsIGRlbHRhVGltZSl7XHJcbiAgICAgICAgbGV0IGFuaW1hdGlvbiA9IHBhcmVudF9tb2RlbC5hbmltYXRpb247XHJcbiAgICAgICAgICAgIGlmKGFuaW1hdGlvbi5pc0FuaW1hdGUpe1xyXG4gICAgICAgICAgICAgICAgbGV0IF9hbmltYXRpb25GdW5jdGlvbiA9IEFuaW1hdGlvbi5wYXJzZUFuaW1hdGlvbkZ1bmN0aW9uKHBhcmVudF9tb2RlbCk7XHJcbiAgICAgICAgICAgICAgICBpZihfYW5pbWF0aW9uRnVuY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdHIgPSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmFuaW1hdGlvbkZ1bmN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uYW5pbWF0aW9uRnVuY3Rpb24gPSBfYW5pbWF0aW9uRnVuY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5hbmltYXRpb25GdW5jdGlvbihwYXJlbnRfbW9kZWwsIGRlbHRhVGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5hbmltYXRpb25GdW5jdGlvbiA9IHN0cjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihsZXQgbW9kZWwgb2YgcGFyZW50X21vZGVsLmNoaWxkcmVuKXsgICAgXHJcbiAgICAgICAgICAgIEFuaW1hdGlvbi5hbmltYXRlKG1vZGVsLCBkZWx0YVRpbWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJlY3Vyc2UgZWFjaCBub2RlIGNoaWxkXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldEF1dG8ocGFyZW50X21vZGVsKXtcclxuICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmlzQXV0byA9ICFwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmlzQXV0bztcclxuICAgICAgICBmb3IobGV0IG1vZGVsIG9mIHBhcmVudF9tb2RlbC5jaGlsZHJlbil7ICAgIFxyXG4gICAgICAgICAgICBBbmltYXRpb24uc2V0QXV0byhtb2RlbClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHBsYXlBbmltYXRpb24ocGFyZW50X21vZGVsKXtcclxuICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmlzQW5pbWF0ZSA9IHRydWU7XHJcbiAgICAgICAgaWYocGFyZW50X21vZGVsLmFuaW1hdGlvbi5pc1JldmVyc2Upe1xyXG4gICAgICAgICAgICBpZihwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lcyl7XHJcbiAgICAgICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lID0gcGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHBhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBwYXJlbnRfbW9kZWwuY2hpbGRyZW4peyAgICBcclxuICAgICAgICAgICAgQW5pbWF0aW9uLnBsYXlBbmltYXRpb24obW9kZWwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwYXVzZUNvbnRpbnVlQW5pbWF0aW9uKHBhcmVudF9tb2RlbCl7XHJcbiAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5pc0FuaW1hdGUgPSAhcGFyZW50X21vZGVsLmFuaW1hdGlvbi5pc0FuaW1hdGU7XHJcbiAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBwYXJlbnRfbW9kZWwuY2hpbGRyZW4peyAgICBcclxuICAgICAgICAgICAgQW5pbWF0aW9uLnBhdXNlQ29udGludWVBbmltYXRpb24obW9kZWwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZXZlcnNlQW5pbWF0aW9uKHBhcmVudF9tb2RlbCl7XHJcbiAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5pc1JldmVyc2UgPSAhcGFyZW50X21vZGVsLmFuaW1hdGlvbi5pc1JldmVyc2U7XHJcbiAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBwYXJlbnRfbW9kZWwuY2hpbGRyZW4peyAgICBcclxuICAgICAgICAgICAgQW5pbWF0aW9uLnJldmVyc2VBbmltYXRpb24obW9kZWwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhbmltYXRpb25TY3JpcHQoKXtcclxuICAgICAgICBjb25zdCBhbmltYXRpb25TY3JpcHQgPSBgKChfbm9kZSwgZGVsdGFUaW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmcmFtZXMgPSBfbm9kZS5hbmltYXRpb24uZnJhbWVzO1xyXG4gICAgICAgICAgICBpZihfbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lID49IGZyYW1lcy5sZW5ndGggfHwgX25vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA8IDApe1xyXG4gICAgICAgICAgICAgICAgaWYoX25vZGUuYW5pbWF0aW9uLmlzQXV0byl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoX25vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA8IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lID0gZnJhbWVzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF9ub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPSBfbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lICUgZnJhbWVzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7ICAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF9ub2RlLmFuaW1hdGlvbi5pc0FuaW1hdGUpIHtcclxuICAgICAgICAgICAgICAgIF9ub2RlLnRyYW5zZm9ybSA9IGZyYW1lc1tfbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lXTtcclxuICAgICAgICAgICAgICAgIGlmKF9ub2RlLmFuaW1hdGlvbi5pc1JldmVyc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgIF9ub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUtLTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgX25vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICBpZihfbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lID09IGZyYW1lcy5sZW5ndGggJiYgIV9ub2RlLmFuaW1hdGlvbi5pc0F1dG8pIF9ub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPSBmcmFtZXMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pYFxyXG4gICAgICAgIHJldHVybiBhbmltYXRpb25TY3JpcHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5leHRGcmFtZShwYXJlbnRfbW9kZWwpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzKXtcclxuICAgICAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUrKztcclxuICAgICAgICAgICAgaWYocGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPj0gcGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lID0gcGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYXJlbnRfbW9kZWwudHJhbnNmb3JtID0gcGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXNbcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IG1vZGVsIG9mIHBhcmVudF9tb2RlbC5jaGlsZHJlbil7ICAgIFxyXG4gICAgICAgICAgICBBbmltYXRpb24ubmV4dEZyYW1lKG1vZGVsKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcHJldkZyYW1lKHBhcmVudF9tb2RlbCl7XHJcbiAgICAgICAgaWYocGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMpe1xyXG4gICAgICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZS0tO1xyXG4gICAgICAgICAgICBpZihwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA8IDApe1xyXG4gICAgICAgICAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhcmVudF9tb2RlbC50cmFuc2Zvcm0gPSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lc1twYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgbW9kZWwgb2YgcGFyZW50X21vZGVsLmNoaWxkcmVuKXsgICAgXHJcbiAgICAgICAgICAgIEFuaW1hdGlvbi5wcmV2RnJhbWUobW9kZWwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmaXJzdEZyYW1lKHBhcmVudF9tb2RlbCl7XHJcbiAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5pc0FuaW1hdGUgPSBmYWxzZTtcclxuICAgICAgICBpZihwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lcyl7XHJcbiAgICAgICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lID0gMDtcclxuICAgICAgICAgICAgcGFyZW50X21vZGVsLnRyYW5zZm9ybSA9IHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzW3BhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBwYXJlbnRfbW9kZWwuY2hpbGRyZW4peyAgICBcclxuICAgICAgICAgICAgQW5pbWF0aW9uLmZpcnN0RnJhbWUobW9kZWwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBsYXN0RnJhbWUocGFyZW50X21vZGVsKXtcclxuICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmlzQW5pbWF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmKHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzKXtcclxuICAgICAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lcy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICBwYXJlbnRfbW9kZWwudHJhbnNmb3JtID0gcGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXNbcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IG1vZGVsIG9mIHBhcmVudF9tb2RlbC5jaGlsZHJlbil7ICAgIFxyXG4gICAgICAgICAgICBBbmltYXRpb24ubGFzdEZyYW1lKG1vZGVsKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdG90YWxNb2RlbEZyYW1lcyhwYXJlbnRfbW9kZWwpe1xyXG4gICAgICAgIGxldCB0b3RhbEZyYW1lcyA9IDA7XHJcbiAgICAgICAgaWYocGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMpe1xyXG4gICAgICAgICAgICB0b3RhbEZyYW1lcyA9IHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBjaGlsZF9tb2RlbCBvZiBwYXJlbnRfbW9kZWwuY2hpbGRyZW4peyAgICBcclxuICAgICAgICAgICAgLy8gcmVjdXJzZSBlYWNoIG5vZGUgY2hpbGQsIGZpbmQgbWF4IGZyYW1lXHJcbiAgICAgICAgICAgIGxldCBjaGlsZFRvdGFsRnJhbWVzID0gQW5pbWF0aW9uLnRvdGFsTW9kZWxGcmFtZXMoY2hpbGRfbW9kZWwpO1xyXG4gICAgICAgICAgICBpZihjaGlsZFRvdGFsRnJhbWVzID4gdG90YWxGcmFtZXMpe1xyXG4gICAgICAgICAgICAgICAgdG90YWxGcmFtZXMgPSBjaGlsZFRvdGFsRnJhbWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0b3RhbEZyYW1lcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdG90YWxOb2RlRnJhbWVzKHBhcmVudF9tb2RlbCl7XHJcbiAgICAgICAgbGV0IHRvdGFsTm9kZUZyYW1lcyA9IFwiLVwiO1xyXG4gICAgICAgIGlmKHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzKXtcclxuICAgICAgICAgICAgLy8gYXMgc3RyaW5nXHJcbiAgICAgICAgICAgIHRvdGFsTm9kZUZyYW1lcyA9IHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzLmxlbmd0aC50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdG90YWxOb2RlRnJhbWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjdXJyZW50TW9kZWxGcmFtZShwYXJlbnRfbW9kZWwpe1xyXG4gICAgICAgIGxldCBjdXJyZW50RnJhbWUgPSAwO1xyXG4gICAgICAgIGlmKHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzKXtcclxuICAgICAgICAgICAgY3VycmVudEZyYW1lID0gcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgbW9kZWwgb2YgcGFyZW50X21vZGVsLmNoaWxkcmVuKXsgICAgXHJcbiAgICAgICAgICAgIC8vIHJlY3Vyc2UgZWFjaCBub2RlIGNoaWxkLCBmaW5kIG1heCBmcmFtZVxyXG4gICAgICAgICAgICBsZXQgY2hpbGRDdXJyZW50RnJhbWUgPSBBbmltYXRpb24uY3VycmVudE1vZGVsRnJhbWUobW9kZWwpO1xyXG4gICAgICAgICAgICBpZihjaGlsZEN1cnJlbnRGcmFtZSA+IGN1cnJlbnRGcmFtZSl7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50RnJhbWUgPSBjaGlsZEN1cnJlbnRGcmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY3VycmVudEZyYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjdXJyZW50Tm9kZUZyYW1lKG5vZGUpe1xyXG4gICAgICAgIGxldCBjdXJyRnJhbWUgPSBcIi1cIlxyXG4gICAgICAgIGlmKG5vZGUuYW5pbWF0aW9uLmZyYW1lcyl7XHJcbiAgICAgICAgICAgIGN1cnJGcmFtZSA9IG5vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZS50b1N0cmluZygpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjdXJyRnJhbWVcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGFuZGxlR2VuZXJhbFRyYW5zZm9ybShub2RlLCBkb2Mpe1xyXG4gICAgICAgIGxldCBbdHgsIHR5LCB0el0gPSBub2RlLnRyYW5zZm9ybS50cmFuc2xhdGVcclxuICAgICAgICBsZXQgW3J4LCByeSwgcnpdID0gbm9kZS50cmFuc2Zvcm0ucm90YXRlXHJcbiAgICAgICAgcnggPSByYWRUb0RlZyhyeCk7IFxyXG4gICAgICAgIHJ5ID0gcmFkVG9EZWcocnkpOyBcclxuICAgICAgICByeiA9IHJhZFRvRGVnKHJ6KTtcclxuICAgICAgICBsZXQgW3N4LHN5LHN6XSA9IG5vZGUudHJhbnNmb3JtLnNjYWxlXHJcblxyXG4gICAgICAgLy8gc2xpZGVyIHR4LCB0eSwgdHogXHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwidHJhbnNsYXRpb24teC1zbGlkZXJcIikudmFsdWUgPSB0eCo1MDtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2xhdGlvbi15LXNsaWRlclwiKS52YWx1ZSA9IHR5KjUwO1xyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInRyYW5zbGF0aW9uLXotc2xpZGVyXCIpLnZhbHVlID0gdHoqNTA7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwidHJhbnNsYXRpb24teC1zbGlkZXItdmFsdWVcIikuaW5uZXJIVE1MID0gdHgudG9GaXhlZCgyKTsgICAgXHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwidHJhbnNsYXRpb24teS1zbGlkZXItdmFsdWVcIikuaW5uZXJIVE1MID0gdHkudG9GaXhlZCgyKTtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2xhdGlvbi16LXNsaWRlci12YWx1ZVwiKS5pbm5lckhUTUwgPSB0ei50b0ZpeGVkKDIpO1xyXG4gICAgICAgIC8vIHJvdGF0aW9uIHR4LCB0eSwgdHogXHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwicm90YXRpb24teC1zbGlkZXJcIikudmFsdWUgPSByeDtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJyb3RhdGlvbi15LXNsaWRlclwiKS52YWx1ZSA9IHJ5O1xyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInJvdGF0aW9uLXotc2xpZGVyXCIpLnZhbHVlID0gcno7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwicm90YXRpb24teC1zbGlkZXItdmFsdWVcIikuaW5uZXJIVE1MID0gcngudG9GaXhlZCgyKTtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJyb3RhdGlvbi15LXNsaWRlci12YWx1ZVwiKS5pbm5lckhUTUwgPSByeS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInJvdGF0aW9uLXotc2xpZGVyLXZhbHVlXCIpLmlubmVySFRNTCA9IHJ6LnRvRml4ZWQoMik7XHJcbiAgICAgICAgLy8gc2NhbGUgc3gsIHN5LCBzelxyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInNjYWxhdGlvbi14LXNsaWRlclwiKS52YWx1ZSA9IHN4KjEwO1xyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInNjYWxhdGlvbi15LXNsaWRlclwiKS52YWx1ZSA9IHN5KjEwO1xyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInNjYWxhdGlvbi16LXNsaWRlclwiKS52YWx1ZSA9IHN6KjEwO1xyXG4gICAgICAgXHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwic2NhbGF0aW9uLXgtc2xpZGVyLXZhbHVlXCIpLmlubmVySFRNTCA9IChzeCAqIDEuMDApLnRvRml4ZWQoMik7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwic2NhbGF0aW9uLXktc2xpZGVyLXZhbHVlXCIpLmlubmVySFRNTCA9IChzeSAqIDEuMDApLnRvRml4ZWQoMik7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwic2NhbGF0aW9uLXotc2xpZGVyLXZhbHVlXCIpLmlubmVySFRNTCA9IChzeiAqIDEuMDApLnRvRml4ZWQoMik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhhbmRsZVRyYW5zZm9ybShub2RlLCBkb2Mpe1xyXG4gICAgICAgIGlmKCFub2RlLmFuaW1hdGlvbi5pc0FuaW1hdGUpIHJldHVybjtcclxuICAgICAgICBBbmltYXRpb24uaGFuZGxlR2VuZXJhbFRyYW5zZm9ybShub2RlLCBkb2MpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGVuYWJsZUFuaW1hdGlvbihwYXJlbnRfbW9kZWwpe1xyXG4gICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uaXNBbmltYXRlID0gdHJ1ZTtcclxuICAgICAgICBmb3IobGV0IG1vZGVsIG9mIHBhcmVudF9tb2RlbC5jaGlsZHJlbil7ICAgIFxyXG4gICAgICAgICAgICBBbmltYXRpb24uZW5hYmxlQW5pbWF0aW9uKG1vZGVsKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGlzYWJsZUFuaW1hdGlvbihwYXJlbnRfbW9kZWwpe1xyXG4gICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uaXNBbmltYXRlID0gZmFsc2U7XHJcbiAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBwYXJlbnRfbW9kZWwuY2hpbGRyZW4peyAgICBcclxuICAgICAgICAgICAgQW5pbWF0aW9uLmRpc2FibGVBbmltYXRpb24obW9kZWwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWxldGVDdXJyZW50RnJhbWUobm9kZSl7XHJcbiAgICAgICAgaWYobm9kZS5hbmltYXRpb24uZnJhbWVzKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG5vZGUuYW5pbWF0aW9uLmZyYW1lcy5zcGxpY2Uobm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lLCAxKTtcclxuICAgICAgICAgICAgaWYobm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lICE9IDApe1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lIC09IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYobm9kZS5hbmltYXRpb24uZnJhbWVzLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgICAgICAgIG5vZGUuYW5pbWF0aW9uLmZyYW1lcyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIG5vZGUudHJhbnNmb3JtID0gbm9kZS5hbmltYXRpb24uZnJhbWVzW25vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZV1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlZGl0Q3VycmVudEZyYW1lKG5vZGUsIHRyYW5zZm9ybSl7XHJcbiAgICAgICAgaWYobm9kZS5hbmltYXRpb24uZnJhbWVzKXtcclxuICAgICAgICAgICAgbGV0IGN1cnJGcmFtZSA9IG5vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZTtcclxuICAgICAgICAgICAgaWYoY3VyckZyYW1lIDwgbm9kZS5hbmltYXRpb24uZnJhbWVzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFuaW1hdGlvbi5mcmFtZXNbY3VyckZyYW1lXSA9IHRyYW5zZm9ybTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGN1cnJGcmFtZSA9PSBub2RlLmFuaW1hdGlvbi5mcmFtZXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIGN1cnJGcmFtZSA9IGN1cnJGcmFtZSAtIDE7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFuaW1hdGlvbi5mcmFtZXNbY3VyckZyYW1lXSA9IHRyYW5zZm9ybTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gdXBkYXRlIG5vZGUgdHJhbnNmb3JtXHJcbiAgICAgICAgICAgIG5vZGUudHJhbnNmb3JtID0gdHJhbnNmb3JtOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IFZlYzMgZnJvbSBcIi4uL3N0cnVjdHMvbWF0aC9WZWMzLmpzXCJcclxuaW1wb3J0IE1hdDQgZnJvbSBcIi4uL3N0cnVjdHMvbWF0aC9NYXQ0LmpzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYXtcclxuICAgIHN0YXRpYyBwcm9qZWN0aW9uT3J0b2dyYXBoaWMobGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIpIHtcclxuICAgICAgICAvLyBOb3RlOiBUaGlzIG1hdHJpeCBmbGlwcyB0aGUgWSBheGlzIHNvIDAgaXMgYXQgdGhlIHRvcC5cclxuICAgICAgICBjb25zdCB3aWR0aCA9IHJpZ2h0LWxlZnRcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSB0b3AtYm90dG9tXHJcbiAgICAgICAgY29uc3QgZGVwdGggPSBmYXIgLSBuZWFyXHJcbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbFJhdGlvID0gKHJpZ2h0ICsgbGVmdCkgLyB3aWR0aFxyXG4gICAgICAgIGNvbnN0IHZlcnRpY2FsUmF0aW8gPSAodG9wICsgYm90dG9tKSAvIGhlaWdodFxyXG4gICAgICAgIGNvbnN0IGRlcHRoUmF0aW8gPSAoZmFyICsgbmVhcikgLyBkZXB0aFxyXG5cclxuICAgICAgICByZXR1cm4gWzIgLyAod2lkdGgpLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMiAvIChoZWlnaHQpLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgLTIgLyAoZGVwdGgpLCAwLFxyXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbFJhdGlvLCB2ZXJ0aWNhbFJhdGlvLCBkZXB0aFJhdGlvLCAxXTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIHByb2plY3Rpb25QZXJzcGVjdGl2ZShmb3YsIGFzcGVjdCwgbmVhciwgZmFyKXtcclxuICAgICAgICBjb25zdCBmID0gMS4wIC8gTWF0aC50YW4oZm92IC8gMilcclxuICAgICAgICBjb25zdCByYW5nZUludiA9IDEgLyAobmVhciAtIGZhcilcclxuXHJcbiAgICAgICAgcmV0dXJuIFtmIC8gYXNwZWN0LCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgZiwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIChuZWFyICsgZmFyKSAqIHJhbmdlSW52LCAtMSxcclxuICAgICAgICAgICAgICAgIDAsIDAsIG5lYXIgKiBmYXIgKiByYW5nZUludiAqIDIsIDBdXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHByb2plY3Rpb25PYmxpcXVlKHRoZXRhLCBwaGkpe1xyXG5cclxuICAgICAgICB2YXIgdCA9IE1hdGgudGFuKHRoZXRhKVxyXG4gICAgICAgIHQgPSB0ID09IDAgPyAwLjAwMDAxIDogdFxyXG4gICAgICAgIHZhciBwID0gTWF0aC50YW4ocGhpKVxyXG4gICAgICAgIHAgPSBwID09IDAgPyAwLjAwMDAxIDogcFxyXG4gICAgICAgIHJldHVybiBbMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAtMS90LCAtMS9wLCAxLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMV1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbG9va0RpcmVjdGlvbihleWUsIGNlbnRlciwgdXApe1xyXG4gICAgICAgIC8vIG5vcm1hbGl6ZSBlYWNoIGFycmF5XHJcbiAgICAgICAgLy8gY2hhbmdlIGFzIFZlYzMgZnJvbSBhcnJheVxyXG4gICAgICAgIGxldCBfZXllID0gVmVjMy5mcm9tQXJyYXkoZXllKVxyXG4gICAgICAgIGxldCBfY2VudGVyID0gVmVjMy5mcm9tQXJyYXkoY2VudGVyKVxyXG4gICAgICAgIGxldCBfdXAgPSBWZWMzLmZyb21BcnJheSh1cClcclxuICAgIFxyXG5cclxuXHJcbiAgICAgICAgY29uc3QgZiA9IFZlYzMudW5pdFZlY3RvcihWZWMzLnN1YihfZXllLCBfY2VudGVyKSkgLy8gekF4aXNcclxuICAgICAgICBjb25zdCBzID0gVmVjMy51bml0VmVjdG9yKFZlYzMuY3Jvc3MoX3VwLCBmKSkgLy8geEF4aXNcclxuICAgICAgICBjb25zdCB1ID0gVmVjMy51bml0VmVjdG9yKFZlYzMuY3Jvc3MoZiwgcykpXHJcblxyXG4gICAgICAgIHJldHVybiBbcy54LCBzLnksIHMueiwgMCxcclxuICAgICAgICAgICAgICAgIHUueCwgdS55LCB1LnosIDAsXHJcbiAgICAgICAgICAgICAgICBmLngsIGYueSwgZi56LCAwLFxyXG4gICAgICAgICAgICAgICAgZXllWzBdLCBleWVbMV0sIGV5ZVsyXSwgMV1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1ha2VaVG9XTWF0cml4KGZ1ZGdlRmFjdG9yKXtcclxuICAgICAgICByZXR1cm4gWzEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIGZ1ZGdlRmFjdG9yLCAxXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwcm9qZWN0aW9uTWF0cml4KHByb2plY3Rpb25fdHlwZSwgX2ZvdiwgX2FzcGVjdCxfbmVhciwgX2ZhciwgdGhldGEgPSA5MCwgcGhpID0gOTApe1xyXG4gICAgICAgIGNvbnN0IGFzcGVjdCA9IF9hc3BlY3Q7XHJcbiAgICAgICAgY29uc3QgZm92ID0gX2ZvdjtcclxuICAgICAgICBjb25zdCBsZWZ0ID0gLTI7XHJcbiAgICAgICAgY29uc3QgcmlnaHQgPSAyO1xyXG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IC0yO1xyXG4gICAgICAgIGNvbnN0IHRvcCA9IDI7XHJcbiAgICAgICAgY29uc3QgZmFyT3J0aG8gPSBfZmFyO1xyXG4gICAgICAgIGNvbnN0IG5lYXJPcnRobyA9IC1mYXJPcnRobztcclxuICAgIFxyXG4gICAgICAgIHN3aXRjaCAocHJvamVjdGlvbl90eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJvcnRob2dyYXBoaWNcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBDYW1lcmEucHJvamVjdGlvbk9ydG9ncmFwaGljKGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhck9ydGhvLCBmYXJPcnRobylcclxuICAgICAgICAgICAgY2FzZSBcIm9ibGlxdWVcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICAgICAgICAgICAgICAgIENhbWVyYS5wcm9qZWN0aW9uT2JsaXF1ZSh0aGV0YSwgcGhpKSxcclxuICAgICAgICAgICAgICAgICAgICBDYW1lcmEucHJvamVjdGlvbk9ydG9ncmFwaGljKGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhck9ydGhvLCBmYXJPcnRobylcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwZXJzcGVjdGl2ZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIENhbWVyYS5wcm9qZWN0aW9uUGVyc3BlY3RpdmUoXHJcbiAgICAgICAgICAgICAgICAgICAgZm92LFxyXG4gICAgICAgICAgICAgICAgICAgIGFzcGVjdCxcclxuICAgICAgICAgICAgICAgICAgICBfbmVhcixcclxuICAgICAgICAgICAgICAgICAgICBfZmFyXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIENhbWVyYS5wcm9qZWN0aW9uT3J0b2dyYXBoaWMobGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyT3J0aG8sIGZhck9ydGhvKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdmlld01hdHJpeChvcmllbnRhdGlvbiwgbG9va0F0LCB1cCl7XHJcbiAgICAgICAgbGV0IFtyb2xsLCBwaXRjaCwgcmFkaXVzXSA9IG9yaWVudGF0aW9uXHJcblxyXG4gICAgICAgIC8vIHJvbGwsIHBpdGNoLCByYWRpdXNcclxuICAgICAgICB2YXIgY2FtZXJhTWF0cml4ID0gTWF0NC5tdWx0aXBseShcclxuICAgICAgICAgICAgTWF0NC5tdWx0aXBseShcclxuICAgICAgICAgICAgICAgIE1hdDQucm90YXRlWShwaXRjaCksXHJcbiAgICAgICAgICAgICAgICBNYXQ0LnJvdGF0ZVgocm9sbCkpLFxyXG4gICAgICAgICAgICBNYXQ0LnRyYW5zbGF0ZSgwLCAwLCByYWRpdXMpXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICB2YXIgY2FtZXJhUG9zaXRpb24gPSBbXHJcbiAgICAgICAgICAgIGNhbWVyYU1hdHJpeFsxMl0sXHJcbiAgICAgICAgICAgIGNhbWVyYU1hdHJpeFsxM10sXHJcbiAgICAgICAgICAgIGNhbWVyYU1hdHJpeFsxNF1cclxuICAgICAgICBdXHJcblxyXG4gICAgICAgIHZhciBjYW1lcmFNYXRyaXggPSBDYW1lcmEubG9va0RpcmVjdGlvbihjYW1lcmFQb3NpdGlvbiwgbG9va0F0LCB1cClcclxuXHJcbiAgICAgICAgdmFyIHZpZXdNYXRyaXggPSBNYXQ0LmludmVyc2UoY2FtZXJhTWF0cml4KVxyXG57fVxyXG4gICAgICAgIHJldHVybiB2aWV3TWF0cml4XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVwZGF0ZUxvb2tBdChwYXJlbnRfbW9kZWwsIGF4aXMpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBhcmVudF9tb2RlbC52aWV3TWF0cml4KVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBhcmVudF9tb2RlbC50cmFuc2Zvcm0udHJhbnNsYXRlW2F4aXNdKVxyXG4gICAgICAgIC8vIGRlbHRhXHJcbiAgICBcclxuICAgICAgICBsZXQgZGVsdGEgPSBwYXJlbnRfbW9kZWwudHJhbnNmb3JtLnRyYW5zbGF0ZVtheGlzXSAtIHBhcmVudF9tb2RlbC52aWV3TWF0cml4Lmxvb2tBdFtheGlzXVxyXG4gICAgICAgIGxldCBsb29rQXRBeGlzID0gcGFyZW50X21vZGVsLnRyYW5zZm9ybS50cmFuc2xhdGVbYXhpc11cclxuICBcclxuICAgICAgICBDYW1lcmEuZ2VuZXJhbFVwZGF0ZUxvb2tBdChwYXJlbnRfbW9kZWwsIGF4aXMsIGRlbHRhLCBsb29rQXRBeGlzKVxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdlbmVyYWxVcGRhdGVMb29rQXQocGFyZW50X21vZGVsLCBheGlzLCBkZWx0YSwgbG9va0F0QXhpcyl7XHJcbiAgICAgICAgICAgIGlmKHBhcmVudF9tb2RlbC5mbGFnKXtcclxuICAgICAgICAgICAgcGFyZW50X21vZGVsLnZpZXdNYXRyaXgubG9va0F0W2F4aXNdID0gbG9va0F0QXhpc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBjYW1lcmEgcG9zaXRpb24gW3RoZXRhLCBwaGksIHJhZGl1c11cclxuICAgICAgICAgICAgLy8gcmVwcmVzZW50IGluIGNhcnRlc2lhbiBjb29yZGluYXRlcyBmcm9tIHNwaGVyaWNhbCBjb29yZGluYXRlcyBvZiBjYW1lcmFcclxuICAgICAgICAgICAgbGV0IHIgPSBwYXJlbnRfbW9kZWwudmlld01hdHJpeC5jYW1lcmFbMl1cclxuICAgICAgICAgICAgbGV0IHRoZXRhID0gcGFyZW50X21vZGVsLnZpZXdNYXRyaXguY2FtZXJhWzFdXHJcbiAgICAgICAgICAgIGxldCBwaGkgPSBwYXJlbnRfbW9kZWwudmlld01hdHJpeC5jYW1lcmFbMF1cclxuICAgICAgICAgICAgbGV0IHggPSByICogTWF0aC5zaW4odGhldGEpICogTWF0aC5jb3MocGhpKVxyXG4gICAgICAgICAgICBsZXQgeSA9IHIgKiBNYXRoLnNpbih0aGV0YSkgKiBNYXRoLnNpbihwaGkpXHJcbiAgICAgICAgICAgIGxldCB6ID0gciAqIE1hdGguY29zKHRoZXRhKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gLy8gdHJhbnNmb3JtIGJ5IGxvb2tBdFxyXG4gICAgICAgICAgICBpZihheGlzID09IDApe1xyXG4gICAgICAgICAgICB4ID0geCAtIGRlbHRhXHJcbiAgICAgICAgICAgIHkgPSB5XHJcbiAgICAgICAgICAgIHogPSB6XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihheGlzID09IDEpe1xyXG4gICAgICAgICAgICB4ID0geFxyXG4gICAgICAgICAgICB5ID0geSAtIGRlbHRhXHJcbiAgICAgICAgICAgIHogPSB6XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihheGlzID09IDIpe1xyXG4gICAgICAgICAgICB4ID0geFxyXG4gICAgICAgICAgICB5ID0geVxyXG4gICAgICAgICAgICB6ID0geiAtIGRlbHRhXHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAvLyBjb252ZXJ0IGJhY2sgdG8gc3BoZXJpY2FsIGNvb3JkaW5hdGVzXHJcbiAgICBcclxuICAgICAgICAgICAgciA9IE1hdGguc3FydCh4KnggKyB5KnkgKyB6KnopXHJcbiAgICAgICAgICAgIHRoZXRhID0gTWF0aC5hY29zKHovcilcclxuICAgICAgICAgICAgcGhpID0gTWF0aC5hdGFuMih5LCB4KVxyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIC8vIHNldCB0aGUgbmV3IHZhbHVlc1xyXG4gICAgICAgICAgICBwYXJlbnRfbW9kZWwudmlld01hdHJpeC5jYW1lcmFbMF0gPSBwaGlcclxuICAgICAgICAgICAgcGFyZW50X21vZGVsLnZpZXdNYXRyaXguY2FtZXJhWzFdID0gdGhldGFcclxuICAgICAgICAgICAgcGFyZW50X21vZGVsLnZpZXdNYXRyaXguY2FtZXJhWzJdID0gclxyXG5cclxuICAgICAgICAgICAgaWYoIXBhcmVudF9tb2RlbC5mbGFnKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gcGFyZW50X21vZGVsLnRyYW5zZm9ybS50cmFuc2xhdGVbYXhpc10gLT0gZGVsdGFcclxuICAgICAgICAgICAgICAgIHBhcmVudF9tb2RlbC52aWV3TWF0cml4Lmxvb2tBdFtheGlzXSA9IGxvb2tBdEF4aXNcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJlbnRfbW9kZWwuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIENhbWVyYS5nZW5lcmFsVXBkYXRlTG9va0F0KHBhcmVudF9tb2RlbC5jaGlsZHJlbltpXSwgYXhpcywgZGVsdGEsIGxvb2tBdEF4aXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IHRhcmdldFJvb3QgfSBmcm9tIFwiLi4vaW5kZXguanNcIjtcclxuaW1wb3J0IHsgZGVnVG9SYWQgfSBmcm9tIFwiLi4vc3RydWN0cy9tYXRoL21hdGhVdGlscy5qc1wiO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuL0FuaW1hdGlvbi5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcmFjdGVyQ29udHJvbGxlcntcclxuXHJcbiAgICAvLyB2ZWxvY2l0eVxyXG4gICAgc3RhdGljIHZ4ID0gMDtcclxuICAgIHN0YXRpYyB2eSA9IDA7XHJcbiAgICBzdGF0aWMgdnogPSAwO1xyXG5cclxuICAgIC8vIGFjY2VsZXJhdGlvblxyXG4gICAgc3RhdGljIGF4ID0gMWUtNTtcclxuICAgIHN0YXRpYyBheSA9IC0xZS01OyAvLyBmb3IgZ3Jhdml0eVxyXG4gICAgc3RhdGljIGF6ID0gMWUtNTtcclxuXHJcbiAgICBzdGF0aWMgamVyayA9IDAuMDE7XHJcbiAgICBzdGF0aWMgY3VycmVudEdyb3VuZCA9IDA7XHJcblxyXG4gICAgc3RhdGljIHZlbG9jaXR5VGhyZXNob2xkID0gMWUtNDtcclxuICAgIHN0YXRpYyBpc0p1bXBpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBzdGF0aWMgdmVsb2NpdHlMb29wKHBhcmVudF9ub2RlLCBkZWx0YV90aW1lKXtcclxuICAgICAgICAvLyBoYW5kbGUgdGhlIHRyYW5zZm9ybWF0aW9uIG9mIHRoZSBjaGFyYWN0ZXJcclxuICAgICAgICBpZihkZWx0YV90aW1lID49IDIwKSBkZWx0YV90aW1lID0gMTVcclxuICAgICAgICBwYXJlbnRfbm9kZS50cmFuc2Zvcm0udHJhbnNsYXRlWzBdICs9IENoYXJhY3RlckNvbnRyb2xsZXIudnggKiBkZWx0YV90aW1lO1xyXG4gICAgICAgIHBhcmVudF9ub2RlLnRyYW5zZm9ybS50cmFuc2xhdGVbMV0gKz0gQ2hhcmFjdGVyQ29udHJvbGxlci52eSAqIGRlbHRhX3RpbWU7XHJcbiAgICAgICAgcGFyZW50X25vZGUudHJhbnNmb3JtLnRyYW5zbGF0ZVsyXSArPSBDaGFyYWN0ZXJDb250cm9sbGVyLnZ6ICogZGVsdGFfdGltZTtcclxuXHJcbiAgICAgICAgLy8gaGFuZGxlIHZ4XHJcbiAgICAgICAgaWYoQ2hhcmFjdGVyQ29udHJvbGxlci52eCA+IENoYXJhY3RlckNvbnRyb2xsZXIudmVsb2NpdHlUaHJlc2hvbGQpe1xyXG4gICAgICAgIENoYXJhY3RlckNvbnRyb2xsZXIudnggLT0gQ2hhcmFjdGVyQ29udHJvbGxlci5heCAqIGRlbHRhX3RpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoQ2hhcmFjdGVyQ29udHJvbGxlci52eCA8IC1DaGFyYWN0ZXJDb250cm9sbGVyLnZlbG9jaXR5VGhyZXNob2xkKXtcclxuICAgICAgICBDaGFyYWN0ZXJDb250cm9sbGVyLnZ4ICs9IENoYXJhY3RlckNvbnRyb2xsZXIuYXggKiBkZWx0YV90aW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBoYW5kbGUgdnpcclxuICAgICAgICBpZihDaGFyYWN0ZXJDb250cm9sbGVyLnZ6ID4gQ2hhcmFjdGVyQ29udHJvbGxlci52ZWxvY2l0eVRocmVzaG9sZCl7XHJcbiAgICAgICAgQ2hhcmFjdGVyQ29udHJvbGxlci52eiAtPSBDaGFyYWN0ZXJDb250cm9sbGVyLmF6ICogZGVsdGFfdGltZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihDaGFyYWN0ZXJDb250cm9sbGVyLnZ6IDwgLUNoYXJhY3RlckNvbnRyb2xsZXIudmVsb2NpdHlUaHJlc2hvbGQpe1xyXG4gICAgICAgIENoYXJhY3RlckNvbnRyb2xsZXIudnogKz0gQ2hhcmFjdGVyQ29udHJvbGxlci5heiAqIGRlbHRhX3RpbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBoYW5kbGUgbmVhciAwIHZlbG9jaXR5XHJcbiAgICAgICAgaWYoTWF0aC5hYnMoQ2hhcmFjdGVyQ29udHJvbGxlci52eCkgPCBDaGFyYWN0ZXJDb250cm9sbGVyLnZlbG9jaXR5VGhyZXNob2xkICl7XHJcbiAgICAgICAgICAgIENoYXJhY3RlckNvbnRyb2xsZXIudnggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihNYXRoLmFicyhDaGFyYWN0ZXJDb250cm9sbGVyLnZ5KSA8IENoYXJhY3RlckNvbnRyb2xsZXIudmVsb2NpdHlUaHJlc2hvbGQpe1xyXG4gICAgICAgICAgICBDaGFyYWN0ZXJDb250cm9sbGVyLnZ5ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoTWF0aC5hYnMoQ2hhcmFjdGVyQ29udHJvbGxlci52eikgPCBDaGFyYWN0ZXJDb250cm9sbGVyLnZlbG9jaXR5VGhyZXNob2xkKXtcclxuICAgICAgICAgICAgQ2hhcmFjdGVyQ29udHJvbGxlci52eiA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdyYXZpdHlMb29wKHBhcmVudF9ub2RlLCBkZWx0YV90aW1lKXtcclxuICAgICAgICBpZih0YXJnZXRSb290ID09PSB1bmRlZmluZWQgfHwgIUNoYXJhY3RlckNvbnRyb2xsZXIuaXNKdW1waW5nICkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyByZXR1cm4gaWYgPD0gY3VycmVudEdyb3VuZFxyXG4gICAgICAgIGlmKHBhcmVudF9ub2RlLnRyYW5zZm9ybS50cmFuc2xhdGVbMV0gPD0gQ2hhcmFjdGVyQ29udHJvbGxlci5jdXJyZW50R3JvdW5kKXtcclxuICAgICAgICAgICAgcGFyZW50X25vZGUudHJhbnNmb3JtLnRyYW5zbGF0ZVsxXSA9IENoYXJhY3RlckNvbnRyb2xsZXIuY3VycmVudEdyb3VuZDtcclxuICAgICAgICAgICAgQ2hhcmFjdGVyQ29udHJvbGxlci52eSA9IDA7XHJcbiAgICAgICAgICAgIENoYXJhY3RlckNvbnRyb2xsZXIuaXNKdW1waW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIEFuaW1hdGlvbi5oYW5kbGVHZW5lcmFsVHJhbnNmb3JtKHBhcmVudF9ub2RlLCBkb2N1bWVudClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBoYW5kbGUgdnlcclxuICAgICAgICBpZihkZWx0YV90aW1lID49IDIwKSBkZWx0YV90aW1lID0gMTU7XHJcbiAgICAgICAgQ2hhcmFjdGVyQ29udHJvbGxlci52eSArPSBDaGFyYWN0ZXJDb250cm9sbGVyLmF5ICogZGVsdGFfdGltZTtcclxuICAgICAgICBBbmltYXRpb24uaGFuZGxlR2VuZXJhbFRyYW5zZm9ybShwYXJlbnRfbm9kZSwgZG9jdW1lbnQpXHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAvLyBpZigpXHJcbiAgICAgICAgLy8gQ2hhcmFjdGVyQ29udHJvbGxlci52eSArPSBDaGFyYWN0ZXJDb250cm9sbGVyLmF5ICogZGVsdGFfdGltZTtcclxuICAgICAgICAvLyBjb252ZXJnZSBhbGwgYWNjZWxlcmF0aW9uIGludG8gMFxyXG4gICAgICAgIC8vIGhhbmRsZSBheCBpZiArXHJcbiAgICAgICAgLy8gaWYoQ2hhcmFjdGVyQ29udHJvbGxlci5heCA+IDAuMDAxKXtcclxuICAgICAgICAvLyAgICAgQ2hhcmFjdGVyQ29udHJvbGxlci5heCAtPSBDaGFyYWN0ZXJDb250cm9sbGVyLmplcmsgKiBkZWx0YV90aW1lO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyAvLyBoYW5kbGUgYXggaWYgLVxyXG4gICAgICAgIC8vIGVsc2UgaWYoQ2hhcmFjdGVyQ29udHJvbGxlci5heCA8IC0wLjAwMSl7XHJcbiAgICAgICAgLy8gICAgIENoYXJhY3RlckNvbnRyb2xsZXIuYXggKz0gQ2hhcmFjdGVyQ29udHJvbGxlci5qZXJrICogZGVsdGFfdGltZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gLy8gaGFuZGxlIGlmIGF4IGlzIGNsb3NlIHRvIDAgYnV0IG5vdCAwXHJcbiAgICAgICAgLy8gZWxzZXtcclxuICAgICAgICAvLyAgICAgQ2hhcmFjdGVyQ29udHJvbGxlci5heCA9IDA7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyAvLyBoYW5kbGUgYXogaWYgK1xyXG4gICAgICAgIC8vIGlmKENoYXJhY3RlckNvbnRyb2xsZXIuYXogPiAwKXtcclxuICAgICAgICAvLyAgICAgQ2hhcmFjdGVyQ29udHJvbGxlci5heiAtPSBDaGFyYWN0ZXJDb250cm9sbGVyLmplcmsgKiBkZWx0YV90aW1lO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyAvLyBoYW5kbGUgYXogaWYgLVxyXG4gICAgICAgIC8vIGVsc2UgaWYoQ2hhcmFjdGVyQ29udHJvbGxlci5heiA8IDApe1xyXG4gICAgICAgIC8vICAgICBDaGFyYWN0ZXJDb250cm9sbGVyLmF6ICs9IENoYXJhY3RlckNvbnRyb2xsZXIuamVyayAqIGRlbHRhX3RpbWU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIC8vIGhhbmRsZSBpZiBheiBpcyBjbG9zZSB0byAwIGJ1dCBub3QgMFxyXG4gICAgICAgIC8vIGVsc2UgaWYoTWF0aC5hYnMoQ2hhcmFjdGVyQ29udHJvbGxlci5heikgPCBDaGFyYWN0ZXJDb250cm9sbGVyLmplcmspe1xyXG4gICAgICAgIC8vICAgICBDaGFyYWN0ZXJDb250cm9sbGVyLmF6ID0gMDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgTm9kZSBmcm9tIFwiLi4vc3RydWN0cy9ub2RlLmpzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUpTT04ob2JqZWN0cykge1xyXG5cclxuICAgIC8vIENvbnZlcnQgTm9kZSBpbnN0YW5jZXMgdG8gc2VyaWFsaXphYmxlIGZvcm1hdFxyXG4gICAgY29uc3Qgc2VyaWFsaXphYmxlT2JqZWN0cyA9IG9iamVjdHMubWFwKG9iaiA9PiBvYmoudG9KU09OKCkpO1xyXG4gICAgY29uc3QganNvbkNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShzZXJpYWxpemFibGVPYmplY3RzLCBudWxsLCAyKTtcclxuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbanNvbkNvbnRlbnRdLCB7IHR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiIH0pO1xyXG5cclxuICAgIC8vIEVsZW1lbnQgdG8gdHJpZ2dlciB0aGUgZG93bmxvYWRcclxuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGEuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICBhLmRvd25sb2FkID0gb2JqZWN0c1swXS5uYW1lICsgXCIuanNvblwiO1xyXG4gICAgYS5oaWRkZW4gPSB0cnVlO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcclxuXHJcbiAgICAvLyBUcmlnZ2VyIGRvd25sb2FkXHJcbiAgICBhLmNsaWNrKCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpOyAgLy8gQ2xlYW4gdXBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRKU09OKGZpbGVJbnB1dCwgY2FsbGJhY2spIHtcclxuICAgIGNvbnN0IGZpbGUgPSBmaWxlSW5wdXQuZmlsZXNbMF07XHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGpzb25Db250ZW50ID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShqc29uQ29udGVudCk7XHJcbiAgICAgICAgY29uc3Qgb2JqZWN0cyA9IGRhdGEubWFwKG9iakRhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBub2RlID0gbmV3IE5vZGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGUuZnJvbUpTT04ob2JqRGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2FsbGJhY2sob2JqZWN0cyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmlsZSBjb3VsZCBub3QgYmUgcmVhZCEgQ29kZSBcIiArIGV2ZW50LnRhcmdldC5lcnJvci5jb2RlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFwZXJUZXh0dXJlKGdsKSB7XHJcbiAgY29uc3QgdGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcclxuICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcclxuICBnbC50ZXhJbWFnZTJEKFxyXG4gICAgZ2wuVEVYVFVSRV8yRCxcclxuICAgIDAsXHJcbiAgICBnbC5SR0JBLFxyXG4gICAgMSxcclxuICAgIDEsXHJcbiAgICAwLFxyXG4gICAgZ2wuUkdCQSxcclxuICAgIGdsLlVOU0lHTkVEX0JZVEUsXHJcbiAgICBuZXcgVWludDhBcnJheShbMCwgMCwgMCwgMF0pXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xyXG4gICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBpbWFnZSk7XHJcbiAgICBpZiAoaXNQb3dlck9mMihpbWFnZS53aWR0aCkgJiYgaXNQb3dlck9mMihpbWFnZS5oZWlnaHQpKSB7XHJcbiAgICAgIGdsLmdlbmVyYXRlTWlwbWFwKGdsLlRFWFRVUkVfMkQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGltYWdlLnNyYyA9IFwiLi9tYXBwaW5nL3BhcGVyLmpwZWdcIjsgXHJcbiAgcmV0dXJuIHRleHR1cmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUG93ZXJPZjIodmFsdWUpIHtcclxuICByZXR1cm4gKHZhbHVlICYgKHZhbHVlIC0gMSkpID09IDA7XHJcbn0gXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRW52aXJvbm1lbnRUZXh0dXJlKGdsKSB7XHJcbiAgY29uc3QgdGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcclxuICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFX0NVQkVfTUFQLCB0ZXh0dXJlKTtcclxuXHJcbiAgY29uc3QgZmFjZUluZm9zID0gW1xyXG4gICAgeyB0YXJnZXQ6IGdsLlRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWCwgdXJsOiBcIi4vbWFwcGluZy9lbnZpcm9ubWVudC5qcGdcIiB9LFxyXG4gICAgeyB0YXJnZXQ6IGdsLlRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWCwgdXJsOiBcIi4vbWFwcGluZy9lbnZpcm9ubWVudC5qcGdcIiB9LFxyXG4gICAgeyB0YXJnZXQ6IGdsLlRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWSwgdXJsOiBcIi4vbWFwcGluZy9lbnZpcm9ubWVudC5qcGdcIiB9LFxyXG4gICAgeyB0YXJnZXQ6IGdsLlRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWSwgdXJsOiBcIi4vbWFwcGluZy9lbnZpcm9ubWVudC5qcGdcIiB9LFxyXG4gICAgeyB0YXJnZXQ6IGdsLlRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWiwgdXJsOiBcIi4vbWFwcGluZy9lbnZpcm9ubWVudC5qcGdcIiB9LFxyXG4gICAgeyB0YXJnZXQ6IGdsLlRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWiwgdXJsOiBcIi4vbWFwcGluZy9lbnZpcm9ubWVudC5qcGdcIiB9LFxyXG4gIF07XHJcblxyXG4gIGZhY2VJbmZvcy5mb3JFYWNoKChmYWNlSW5mbykgPT4ge1xyXG4gICAgY29uc3QgeyB0YXJnZXQsIHVybCB9ID0gZmFjZUluZm87XHJcblxyXG4gICAgZ2wudGV4SW1hZ2UyRChcclxuICAgICAgdGFyZ2V0LFxyXG4gICAgICAwLFxyXG4gICAgICBnbC5SR0JBLFxyXG4gICAgICA1MTIsXHJcbiAgICAgIDUxMixcclxuICAgICAgMCxcclxuICAgICAgZ2wuUkdCQSxcclxuICAgICAgZ2wuVU5TSUdORURfQllURSxcclxuICAgICAgbnVsbFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2Uuc3JjID0gdXJsO1xyXG4gICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFX0NVQkVfTUFQLCB0ZXh0dXJlKTtcclxuICAgICAgZ2wudGV4SW1hZ2UyRCh0YXJnZXQsIDAsIGdsLlJHQkEsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIGltYWdlKTtcclxuICAgICAgZ2wuZ2VuZXJhdGVNaXBtYXAoZ2wuVEVYVFVSRV9DVUJFX01BUCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgZ2wuZ2VuZXJhdGVNaXBtYXAoZ2wuVEVYVFVSRV9DVUJFX01BUCk7XHJcbiAgZ2wudGV4UGFyYW1ldGVyaShcclxuICAgIGdsLlRFWFRVUkVfQ1VCRV9NQVAsXHJcbiAgICBnbC5URVhUVVJFX01JTl9GSUxURVIsXHJcbiAgICBnbC5MSU5FQVJfTUlQTUFQX0xJTkVBUlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCdW1wVGV4dHVyZShnbCkge1xyXG4gIGNvbnN0IHRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XHJcbiAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XHJcbiAgZ2wudGV4SW1hZ2UyRChcclxuICAgIGdsLlRFWFRVUkVfMkQsIFxyXG4gICAgMCwgXHJcbiAgICBnbC5SR0JBLCBcclxuICAgIDEsIFxyXG4gICAgMSwgXHJcbiAgICAwLCBcclxuICAgIGdsLlJHQkEsIFxyXG4gICAgZ2wuVU5TSUdORURfQllURSwgXHJcbiAgICBuZXcgVWludDhBcnJheShbMjU1LCAwLCAwLCAyNTVdKVxyXG4gICk7XHJcblxyXG4gIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGltYWdlLnNyYyA9IFwiLi9tYXBwaW5nL2J1bXAucG5nXCI7XHJcbiAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XHJcbiAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIGltYWdlKTtcclxuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5MSU5FQVIpO1xyXG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUik7XHJcbiAgfVxyXG59XHJcbiAgIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==