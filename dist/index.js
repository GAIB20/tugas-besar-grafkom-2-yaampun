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
var fps_time = 0.15;

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
        var modelMatrix = object.getWorldMatrix();

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
            uReverseLightDirection: normalizeLight,
            uColor: object.pickedColor.concat(1.0),
            uModelMatrix: modelMatrix,
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

    if((now - t_animation) >= fps_time){
      let deltaTime = now - t_animation;
      t_animation = now;
      _utils_Animation_js__WEBPACK_IMPORTED_MODULE_11__["default"].animate(targetRoot, deltaTime);
      _utils_CharacterController_js__WEBPACK_IMPORTED_MODULE_14__["default"].velocityLoop(targetRoot, deltaTime);
      _utils_CharacterController_js__WEBPACK_IMPORTED_MODULE_14__["default"].gravityLoop(targetRoot, deltaTime);
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
  newNode.model = boxModel(1, 1, 1, [0, 0, 0]);
  newNode.transform = {
    translate: [0, 0, 0],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
  };
  newNode.pickedColor = randomColors(),
  newNode.diffuse = [1,1,1],
  newNode.specular = [1,1,1],
  newNode.ambient = [1,1,1],
  newNode.shininess = 1,
  newNode.const = {
      kd: 0.5,
      ks: 0.0,
      ka: 1.0,
  }
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
    console.log(objects)
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

        return viewMatrix
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
        // handle vy
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
        if(_index_js__WEBPACK_IMPORTED_MODULE_0__.targetRoot === undefined) return;

        // return if <= currentGround
        if(parent_node.transform.translate[1] <= CharacterController.currentGround){

            CharacterController.vy = 0;
            return;
        }
        // handle vy
        if(delta_time >= 20) delta_time = 15;
        CharacterController.vy += CharacterController.ay * delta_time;
        
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0STZCO0FBQ2Q7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0IsNEJBQTRCLE9BQU87QUFDbkMsaUNBQWlDLGdEQUFJO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG9FQUFRO0FBQ3JCLGFBQWEsb0VBQVE7QUFDckIsYUFBYSxvRUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0UjBDO0FBQ0E7QUFDMUM7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkRBQUk7QUFDdkIsc0JBQXNCLDZEQUFJO0FBQzFCLGtCQUFrQiw2REFBSTtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkRBQUksWUFBWSw2REFBSTtBQUN0QyxrQkFBa0IsNkRBQUksWUFBWSw2REFBSTtBQUN0QyxrQkFBa0IsNkRBQUksWUFBWSw2REFBSTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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OztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL2hhbmRsZXIvZXZlbnRIYW5kbGVyLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3N0cnVjdHMvYm94TW9kZWwuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tYXRoL01hdDQuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tYXRoL1ZlYzMuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tYXRoL1ZlYzQuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tYXRoL21hdGhVdGlscy5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21vZGVsL2NoaWNrZW4uanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tb2RlbC9mb3guanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tb2RlbC9ob2xsb3dUaGluZ3kuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tb2RlbC9waWcuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tb2RlbC9yaW5nLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3N0cnVjdHMvbm9kZS5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy91dGlscy9BbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvdXRpbHMvQ2FtZXJhLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3V0aWxzL0NoYXJhY3RlckNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvdXRpbHMvZmlsZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvdXRpbHMvdGV4dHVyZS5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YXJnZXQsIFxyXG4gICAgdGFyZ2V0Um9vdCwgXHJcbiAgICBzZXRQcm9qZWN0aW9uVHlwZSwgXHJcbiAgICBzZXRPYmxpcXVlUGhpLCBcclxuICAgIHNldE9ibGlxdWVUaGV0YSwgXHJcbiAgICBzZXRUYXJnZXQsIFxyXG4gICAgcmVuYW1lVGFyZ2V0LFxyXG4gICAgbGlnaHREaXJlY3Rpb24sXHJcbiAgICBkZWxldGVOb2RlLFxyXG4gICAgb2JqZWN0cyxcclxuICAgIHNldFRhcmdldFJvb3QsIFxyXG4gICAgY2hhbmdlTW9kZWxPYmplY3QsIFxyXG4gICAgY2hhbmdlTWFwcGluZ1RleHR1cmUsXHJcbiAgICBhZGROb2RlLFxyXG4gICAgbG9hZE9iamVjdHMsXHJcbiAgICBtb2RlbCxcclxuICAgIGFkZE1vZGVsfSBmcm9tIFwiLi4vaW5kZXguanNcIlxyXG5pbXBvcnQgeyBkZWdUb1JhZCwgcmFkVG9EZWcgfSBmcm9tIFwiLi4vc3RydWN0cy9tYXRoL21hdGhVdGlscy5qc1wiO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuLi91dGlscy9BbmltYXRpb24uanNcIjtcclxuaW1wb3J0IHsgbG9hZEpTT04sIHNhdmVKU09OIH0gZnJvbSBcIi4uL3V0aWxzL2ZpbGVNYW5hZ2VyLmpzXCI7XHJcbmltcG9ydCBDaGFyYWN0ZXJDb250cm9sbGVyIGZyb20gXCIuLi91dGlscy9DaGFyYWN0ZXJDb250cm9sbGVyLmpzXCI7XHJcblxyXG5jb25zdCB0cmFuc2xhdGlvblggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNsYXRpb24teC1zbGlkZXInKTtcclxuY29uc3QgdHJhbnNsYXRpb25ZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zbGF0aW9uLXktc2xpZGVyJyk7XHJcbmNvbnN0IHRyYW5zbGF0aW9uWiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2xhdGlvbi16LXNsaWRlcicpO1xyXG5jb25zdCB0cmFuc2xhdGFpb25YVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNsYXRpb24teC1zbGlkZXItdmFsdWUnKTtcclxuY29uc3QgdHJhbnNsYXRhaW9uWVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zbGF0aW9uLXktc2xpZGVyLXZhbHVlJyk7XHJcbmNvbnN0IHRyYW5zbGF0YWlvblpWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2xhdGlvbi16LXNsaWRlci12YWx1ZScpO1xyXG4vL3JvdGF0aW9uXHJcbmNvbnN0IHJvdGF0aW9uWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGlvbi14LXNsaWRlcicpO1xyXG5jb25zdCByb3RhdGlvblkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm90YXRpb24teS1zbGlkZXInKTtcclxuY29uc3Qgcm90YXRpb25aID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uLXotc2xpZGVyJyk7XHJcbmNvbnN0IHJvdGF0aW9uWFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uLXgtc2xpZGVyLXZhbHVlJyk7XHJcbmNvbnN0IHJvdGF0aW9uWVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uLXktc2xpZGVyLXZhbHVlJyk7XHJcbmNvbnN0IHJvdGF0aW9uWlZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uLXotc2xpZGVyLXZhbHVlJyk7XHJcbi8vc2NhbGF0aW9uXHJcbmNvbnN0IHNjYWxhdGlvblggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NhbGF0aW9uLXgtc2xpZGVyJyk7XHJcbmNvbnN0IHNjYWxhdGlvblkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NhbGF0aW9uLXktc2xpZGVyJyk7XHJcbmNvbnN0IHNjYWxhdGlvblogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NhbGF0aW9uLXotc2xpZGVyJyk7XHJcbmNvbnN0IHNjYWxhdGlvblhWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY2FsYXRpb24teC1zbGlkZXItdmFsdWUnKTtcclxuY29uc3Qgc2NhbGF0aW9uWVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjYWxhdGlvbi15LXNsaWRlci12YWx1ZScpO1xyXG5jb25zdCBzY2FsYXRpb25aVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NhbGF0aW9uLXotc2xpZGVyLXZhbHVlJyk7XHJcbi8vIGNvbXBvbmVudCBjb250YWluZXJcclxuY29uc3QgY29tcG9uZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBvbmVudC1jb250YWluZXInKTtcclxuLy9jYW1lcmFcclxuY29uc3Qgb3J0aG9ncmFwaGljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29ydGhvZ3JhcGhpYycpO1xyXG5jb25zdCBvYmxpcXVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29ibGlxdWUnKTtcclxuY29uc3QgcGVyc3BlY3RpdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGVyc3BlY3RpdmUnKTtcclxuLy8gY2FtZXJhIHJhZGl1c1xyXG5jb25zdCBjYW1lcmFSYWRpdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXJhZGl1cy1zbGlkZXInKTtcclxuLy8gY2FtZXJhIHJvbGwtcGl0Y2hcclxuY29uc3QgY2FtZXJhUm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcm9sbC1zbGlkZXInKTtcclxuY29uc3QgY2FtZXJhUGl0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXBpdGNoLXNsaWRlcicpO1xyXG4vLyBjYW1lcmEgdGhldGEtcGhpXHJcbmNvbnN0IGNhbWVyYVRoZXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS10aGV0YS1zbGlkZXInKTtcclxuY29uc3QgY2FtZXJhUGhpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1waGktc2xpZGVyJyk7XHJcbi8vIHNldCBvcnRob2dyYXBoaWMgYXMgZGVmYXVsdCBpbnB1dCByYWRpbyBidXR0b25cclxub3J0aG9ncmFwaGljLmNoZWNrZWQgPSB0cnVlO1xyXG4vLyBjYW1lcmEgZGVmYXVsdCB2aWV3XHJcbmNvbnN0IGRlZmF1bHRWaWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlZmF1bHQtdmlldycpO1xyXG5cclxuLy8gbW9kZWwgXHJcbmNvbnN0IG1vZGVsU2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGVsLXNlbGVjdGlvbicpO1xyXG5jb25zdCBtYXBwaW5nU2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcHBpbmctc2VsZWN0aW9uJyk7XHJcblxyXG4vLyBhbmltYXRpb25cclxuXHJcbi8vIHBhdXNlLCBwbGF5LCBhdXRvLCByZXZlcnNlXHJcbmNvbnN0IHBhdXNlQ29udGludWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF1c2UtY29udGludWUtYW5pbWF0aW9uJyk7XHJcbmNvbnN0IHBsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheS1hbmltYXRpb24nKTtcclxuY29uc3QgYXV0byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvLWFuaW1hdGlvbicpO1xyXG5jb25zdCByZXZlcnNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JldmVyc2UtYW5pbWF0aW9uJyk7XHJcblxyXG4vLyBuZXh0LCBwcmV2LCBmaXJzdCwgbGFzdFxyXG5jb25zdCBuZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQtYW5pbWF0aW9uJyk7XHJcbmNvbnN0IHByZXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldi1hbmltYXRpb24nKTtcclxuY29uc3QgZmlyc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlyc3QtYW5pbWF0aW9uJyk7XHJcbmNvbnN0IGxhc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFzdC1hbmltYXRpb24nKTtcclxuXHJcbi8vIGZyYW1lIGhhbmRsZXJcclxuY29uc3QgY3VycmVudE1vZGVsRnJhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC1tb2RlbC1mcmFtZScpO1xyXG5jb25zdCBjdXJyZW50Tm9kZUZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtbm9kZS1mcmFtZScpO1xyXG5jb25zdCB0b3RhbE1vZGVsRnJhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWwtbW9kZWwtZnJhbWUnKTtcclxuY29uc3QgdG90YWxOb2RlRnJhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWwtbm9kZS1mcmFtZScpO1xyXG5cclxuLy8gYWRkIGZyYW1lIFxyXG5jb25zdCBhZGRGcmFtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtZnJhbWUnKVxyXG5jb25zdCB2ZXJpZnlBZGRGcmFtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2ZXJpZnktYWRkLWZyYW1lJylcclxuY29uc3QgY2FuY2VsQWRkRnJhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsLWFkZC1mcmFtZScpXHJcblxyXG4vL2VkaXQgZnJhbWVcclxuY29uc3QgZWRpdEZyYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtY3VycmVudC1mcmFtZScpXHJcbmNvbnN0IHZlcmlmeUVkaXRGcmFtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2ZXJpZnktZWRpdC1mcmFtZScpXHJcbmNvbnN0IGNhbmNlbEVkaXRGcmFtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwtZWRpdC1mcmFtZScpXHJcblxyXG4vLyBkZWxldGUgZnJhbWVcclxuY29uc3QgZGVsZXRlRnJhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlLWN1cnJlbnQtZnJhbWUnKVxyXG5jb25zdCB2ZXJpZnlEZWxldGVGcmFtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2ZXJpZnktZGVsZXRlLWZyYW1lJylcclxuY29uc3QgY2FuY2VsRGVsZXRlRnJhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsLWRlbGV0ZS1mcmFtZScpXHJcblxyXG4vLyBhbmltYXRpb25cclxuY29uc3Qgc2F2ZUFuaW1hdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLWFuaW1hdGlvbicpXHJcbmNvbnN0IG9rU2F2ZUFuaW1hdGlvbk1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29rLXNhdmUtYW5pbWF0aW9uJylcclxuXHJcbi8vIGFtYmllbnQgbGlnaHRcclxuY29uc3QgcmVkQW1iaWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWQtc2xpZGVyJyk7XHJcbmNvbnN0IGdyZWVuQW1iaWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncmVlbi1zbGlkZXInKTtcclxuY29uc3QgYmx1ZUFtYmllbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmx1ZS1zbGlkZXInKTtcclxuXHJcbi8vIGxpZ2h0IHBvc2l0aW9uXHJcbmNvbnN0IGxpZ2h0WCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaWdodC14LXNsaWRlcicpO1xyXG5jb25zdCBsaWdodFkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlnaHQteS1zbGlkZXInKTtcclxuY29uc3QgbGlnaHRaID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpZ2h0LXotc2xpZGVyJyk7XHJcblxyXG4vLyBtYXRlcmlhbCBzZWxlY3Rpb25cclxuY29uc3QgbWF0ZXJpYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF0ZXJpYWwtc2VsZWN0aW9uJyk7XHJcblxyXG4vLyBwaG9uZ1xyXG5jb25zdCBzaGluaW5lc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpbmluZXNzLXNsaWRlcicpO1xyXG5jb25zdCBzcGVjdWxhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGVjdWxhci1zbGlkZXInKTtcclxuY29uc3QgZGlmZnVzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWZmdXNlLXNsaWRlcicpO1xyXG5jb25zdCBhbWJpZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FtYmllbnQtc2xpZGVyJyk7XHJcblxyXG4vLyBjb2xvcnNcclxuY29uc3QgYmFzaWNDb2xvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXNpYy1jb2xvcicpO1xyXG5jb25zdCBkaWZmdXNlQ29sb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlmZnVzZS1jb2xvcicpO1xyXG5jb25zdCBzcGVjdWxhckNvbG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwZWN1bGFyLWNvbG9yJyk7XHJcbmNvbnN0IGFtYmllbnRDb2xvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbWJpZW50LWNvbG9yJyk7XHJcblxyXG4vLyBub2RlIG1hbmFnZXJcclxuZXhwb3J0IGNvbnN0IG5vZGVOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vZGUtbmFtZScpO1xyXG5jb25zdCByZW5hbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVuYW1lLWJ0bicpO1xyXG5jb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlLWJ0bicpO1xyXG5jb25zdCBhZGRDaGlsZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtY2hpbGQtYnRuJylcclxuY29uc3QgaW1wb3J0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydC1idG4nKTtcclxuY29uc3QgZXhwb3J0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cG9ydC1idG4nKTtcclxuXHJcbi8vIHNhdmUgYW5kIGxvYWRcclxuY29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLWJ0bicpOyBcclxuY29uc3QgbG9hZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkLWJ0bicpO1xyXG5cclxuXHJcbi8vIGluaXRpYWxcclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRPcHRpb25Nb2RlbChtb2RlbCl7XHJcbiAgICBtb2RlbFNlbGVjdGlvbi5pbm5lckhUTUwgPSAnJztcclxuICAgIG1vZGVsLmZvckVhY2goKG9iamVjdCwgaW5kZXgpID0+IHtcclxuICAgICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gaW5kZXg7XHJcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gb2JqZWN0WzBdLm5hbWU7XHJcbiAgICAgICAgbW9kZWxTZWxlY3Rpb24uYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbi8vIGV2ZW50IGxpc3RlbmVyXHJcbnRyYW5zbGF0aW9uWC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQudHJhbnNmb3JtLnRyYW5zbGF0ZVswXSA9ICgyICogdHJhbnNsYXRpb25YLnZhbHVlKSAvIDEwMDtcclxuICAgIHRyYW5zbGF0YWlvblhWYWx1ZS50ZXh0Q29udGVudCA9IHRhcmdldC50cmFuc2Zvcm0udHJhbnNsYXRlWzBdO1xyXG59KTtcclxudHJhbnNsYXRpb25ZLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIHRhcmdldC50cmFuc2Zvcm0udHJhbnNsYXRlWzFdID0gKDIgKiB0cmFuc2xhdGlvblkudmFsdWUpIC8gMTAwO1xyXG4gICAgdHJhbnNsYXRhaW9uWVZhbHVlLnRleHRDb250ZW50ID0gdGFyZ2V0LnRyYW5zZm9ybS50cmFuc2xhdGVbMV07XHJcbn0pO1xyXG50cmFuc2xhdGlvblouYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgdGFyZ2V0LnRyYW5zZm9ybS50cmFuc2xhdGVbMl0gPSAoMiAqIHRyYW5zbGF0aW9uWi52YWx1ZSkgLyAxMDA7XHJcbiAgICB0cmFuc2xhdGFpb25aVmFsdWUudGV4dENvbnRlbnQgPSB0YXJnZXQudHJhbnNmb3JtLnRyYW5zbGF0ZVsyXTtcclxufSk7XHJcbnJvdGF0aW9uWC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQudHJhbnNmb3JtLnJvdGF0ZVswXSA9IGRlZ1RvUmFkKHJvdGF0aW9uWC52YWx1ZSk7XHJcbiAgICByb3RhdGlvblhWYWx1ZS50ZXh0Q29udGVudCA9IHJvdGF0aW9uWC52YWx1ZTtcclxufSlcclxucm90YXRpb25ZLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIHRhcmdldC50cmFuc2Zvcm0ucm90YXRlWzFdID0gZGVnVG9SYWQocm90YXRpb25ZLnZhbHVlKTtcclxuICAgIHJvdGF0aW9uWVZhbHVlLnRleHRDb250ZW50ID0gcm90YXRpb25ZLnZhbHVlO1xyXG59KVxyXG5yb3RhdGlvblouYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgdGFyZ2V0LnRyYW5zZm9ybS5yb3RhdGVbMl0gPSBkZWdUb1JhZChyb3RhdGlvbloudmFsdWUpO1xyXG4gICAgcm90YXRpb25aVmFsdWUudGV4dENvbnRlbnQgPSByb3RhdGlvbloudmFsdWU7XHJcbn0pXHJcbnNjYWxhdGlvblguYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVswXSA9ICBzY2FsYXRpb25YLnZhbHVlIC8gMjA7XHJcbiAgICBzY2FsYXRpb25YVmFsdWUudGV4dENvbnRlbnQgPSB0YXJnZXQudHJhbnNmb3JtLnNjYWxlWzBdO1xyXG59KVxyXG5zY2FsYXRpb25ZLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIHRhcmdldC50cmFuc2Zvcm0uc2NhbGVbMV0gPSAgc2NhbGF0aW9uWS52YWx1ZSAvIDIwO1xyXG4gICAgc2NhbGF0aW9uWVZhbHVlLnRleHRDb250ZW50ID0gdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVsxXTtcclxufSlcclxuc2NhbGF0aW9uWi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQudHJhbnNmb3JtLnNjYWxlWzJdID0gIHNjYWxhdGlvbloudmFsdWUgLyAyMDtcclxuICAgIHNjYWxhdGlvblpWYWx1ZS50ZXh0Q29udGVudCA9IHRhcmdldC50cmFuc2Zvcm0uc2NhbGVbMl07XHJcbn0pXHJcblxyXG4vLyBtb2RlbCBzZWxlY3Rpb25cclxubW9kZWxTZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKXsgICBcclxuICAgIGNvbnNvbGUubG9nKG1vZGVsU2VsZWN0aW9uLnZhbHVlKTtcclxuICAgIGNoYW5nZU1vZGVsT2JqZWN0KG1vZGVsU2VsZWN0aW9uLnZhbHVlKTtcclxufSlcclxuXHJcbi8vIGNhbWVyYVxyXG5vcnRob2dyYXBoaWMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgc2V0UHJvamVjdGlvblR5cGUoXCJvcnRob2dyYXBoaWNcIik7XHJcbn0pXHJcblxyXG5vYmxpcXVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIHNldFByb2plY3Rpb25UeXBlKFwib2JsaXF1ZVwiKTtcclxufSlcclxuXHJcbnBlcnNwZWN0aXZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIHNldFByb2plY3Rpb25UeXBlKFwicGVyc3BlY3RpdmVcIik7XHJcbn0pXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDb21wb25lbnQgKCkge1xyXG4gICAgY29tcG9uZW50Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUNvbXBvbmVudCh0cmVlTGV2ZWwgPSAwLCBvYmplY3RzKXtcclxuICAgIG9iamVjdHMuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld0NvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcclxuICAgICAgICBuZXdDb21wb25lbnQuc3R5bGUgPSAncGFkZGluZy1sZWZ0OiAnICsgdHJlZUxldmVsKjEuNSArICdlbTsnO1xyXG4gICAgICAgIG5ld0NvbXBvbmVudC5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWF4LXctZml0IGNvbXBvbmVudFwiPiR7b2JqZWN0Lm5hbWV9PC9idXR0b24+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBsZXQgY3JlYXRlZEJ1dHRvbiA9IG5ld0NvbXBvbmVudC5xdWVyeVNlbGVjdG9yKCcuY29tcG9uZW50Jyk7XHJcbiAgICAgICAgY3JlYXRlZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgICAgICBzZXRUYXJnZXQob2JqZWN0KTtcclxuICAgICAgICAgICAgaGFuZGxlVHJhbnNmb3JtKG9iamVjdCk7XHJcbiAgICAgICAgICAgIGhhbmRsZVRvdGFsTm9kZUZyYW1lKG9iamVjdCk7XHJcbiAgICAgICAgICAgIHNldE5vZGVNYW5hZ2VyKG9iamVjdCk7XHJcbiAgICAgICAgICAgIGxldCBjb21wb25lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbXBvbmVudFwiKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wb25lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzW2ldLmNsYXNzTmFtZSA9IGNvbXBvbmVudHNbaV0uY2xhc3NOYW1lLnJlcGxhY2UoXCIgYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHB4LTVcIiwgXCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXZ0LmN1cnJlbnRUYXJnZXQuY2xhc3NOYW1lICs9IFwiIGJvcmRlci0yIGJvcmRlci1ibGFjayBweC01XCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29tcG9uZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NvbXBvbmVudCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYob2JqZWN0LmNoaWxkcmVuLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBkaXNwbGF5Q29tcG9uZW50KHRyZWVMZXZlbCArIDEsIG9iamVjdC5jaGlsZHJlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVRyYW5zZm9ybShub2RlKXtcclxuICAgIC8vIGNoYW5nZSB0cmFuc2xhdGlvbiwgcm90YXRpb24sIHNjYWxhdGlvblxyXG4gICAgbGV0IFt0eCwgdHksIHR6XSA9IG5vZGUudHJhbnNmb3JtLnRyYW5zbGF0ZVxyXG4gICAgLy8gdGltZXMgNTBcclxuXHJcbiAgICBsZXQgW3J4LCByeSwgcnpdID0gbm9kZS50cmFuc2Zvcm0ucm90YXRlXHJcbiAgICAvLyBjaGFuZ2Ugd2l0aCByYWRUb0RlZ1xyXG4gICAgaWYodHJ1ZSl7XHJcbiAgICByeCA9IHJhZFRvRGVnKHJ4KTtcclxuICAgIHJ5ID0gcmFkVG9EZWcocnkpO1xyXG4gICAgcnogPSByYWRUb0RlZyhyeik7XHJcbiAgICB9XHJcbiAgICBsZXQgW3N4LCBzeSwgc3pdID0gbm9kZS50cmFuc2Zvcm0uc2NhbGVcclxuICBcclxuICAgIHRyYW5zbGF0aW9uWC52YWx1ZSA9IHR4KjUwO1xyXG4gICAgdHJhbnNsYXRpb25ZLnZhbHVlID0gdHkqNTA7XHJcbiAgICB0cmFuc2xhdGlvbloudmFsdWUgPSB0eio1MDtcclxuICAgIHRyYW5zbGF0YWlvblhWYWx1ZS50ZXh0Q29udGVudCA9IHR4O1xyXG4gICAgdHJhbnNsYXRhaW9uWVZhbHVlLnRleHRDb250ZW50ID0gdHk7XHJcbiAgICB0cmFuc2xhdGFpb25aVmFsdWUudGV4dENvbnRlbnQgPSB0ejtcclxuXHJcbiAgICByb3RhdGlvblgudmFsdWUgPSByeDtcclxuICAgIHJvdGF0aW9uWS52YWx1ZSA9IHJ5O1xyXG4gICAgcm90YXRpb25aLnZhbHVlID0gcno7XHJcbiAgICByb3RhdGlvblhWYWx1ZS50ZXh0Q29udGVudCA9IHJ4O1xyXG4gICAgcm90YXRpb25ZVmFsdWUudGV4dENvbnRlbnQgPSByeTtcclxuICAgIHJvdGF0aW9uWlZhbHVlLnRleHRDb250ZW50ID0gcno7XHJcblxyXG4gICAgc2NhbGF0aW9uWFZhbHVlLnRleHRDb250ZW50ID0gc3g7XHJcbiAgICBzY2FsYXRpb25ZVmFsdWUudGV4dENvbnRlbnQgPSBzeTtcclxuICAgIHNjYWxhdGlvblpWYWx1ZS50ZXh0Q29udGVudCA9IHN6O1xyXG4gICAgc2NhbGF0aW9uWC52YWx1ZSA9IHN4KjIwO1xyXG4gICAgc2NhbGF0aW9uWS52YWx1ZSA9IHN4KjIwO1xyXG4gICAgc2NhbGF0aW9uWi52YWx1ZSA9IHN6KjIwO1xyXG5cclxuICAgIC8vIGNoYW5nZSBwaG9uZyBzbGlkZXJcclxuICAgIHJlZEFtYmllbnQudmFsdWUgPSBub2RlLmFtYmllbnRbMF07XHJcbiAgICBncmVlbkFtYmllbnQudmFsdWUgPSBub2RlLmFtYmllbnRbMV07XHJcbiAgICBibHVlQW1iaWVudC52YWx1ZSA9IG5vZGUuYW1iaWVudFsyXTtcclxuICAgIHNoaW5pbmVzcy52YWx1ZSA9IG5vZGUuc2hpbmluZXNzO1xyXG4gICAgXHJcbiAgICBiYXNpY0NvbG9yLnZhbHVlID0gcmdiVG9IZXgobm9kZS5waWNrZWRDb2xvcik7XHJcbiAgICBkaWZmdXNlQ29sb3IudmFsdWUgPSByZ2JUb0hleChub2RlLnBpY2tlZENvbG9yKTtcclxuICAgIHNwZWN1bGFyQ29sb3IudmFsdWUgPSByZ2JUb0hleChub2RlLnNwZWN1bGFyKTtcclxuICAgIGFtYmllbnRDb2xvci52YWx1ZSA9IHJnYlRvSGV4KG5vZGUucGhvbmdBbWJpZW50KTtcclxuICAgIFxyXG4gICAgYW1iaWVudC52YWx1ZSA9IG5vZGUuY29uc3Qua2E7XHJcbiAgICBkaWZmdXNlLnZhbHVlID0gbm9kZS5jb25zdC5rZDtcclxuICAgIHNwZWN1bGFyLnZhbHVlID0gbm9kZS5jb25zdC5rcztcclxuXHJcbiAgICBtYXRlcmlhbC52YWx1ZSA9IG5vZGUucGhvbmcgPyAxIDogMDtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNhbWVyYVZpZXcobm9kZSkge1xyXG4gICAgbGV0IGVwc2lsb24gPSAwLjAwMTtcclxuICAgIC8vcmFkaXVzLCByb2xsLCBwaXRjaFxyXG4gICAgbGV0IHJhZGl1cyA9IHBhcnNlRmxvYXQoY2FtZXJhUmFkaXVzLnZhbHVlKS8xMDtcclxuICAgIGxldCByb2xsID0gZGVnVG9SYWQocGFyc2VGbG9hdChjYW1lcmFSb2xsLnZhbHVlKSk7XHJcbiAgICBsZXQgcGl0Y2ggPSBkZWdUb1JhZChwYXJzZUZsb2F0KGNhbWVyYVBpdGNoLnZhbHVlKSk7XHJcbiAgICBub2RlLnZpZXdNYXRyaXguY2FtZXJhID0gW1xyXG4gICAgICAgIHJvbGwsXHJcbiAgICAgICAgcGl0Y2gsXHJcbiAgICAgICAgcmFkaXVzID09IDAgPyBlcHNpbG9uIDogcmFkaXVzLCAgXHJcbiAgICBdO1xyXG4gICAgZm9yKGxldCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKXtcclxuICAgICAgICBoYW5kbGVDYW1lcmFWaWV3KGNoaWxkKTtcclxuICAgIH1cclxufVxyXG5jYW1lcmFSYWRpdXMuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgbGV0IHZhbCA9IHBhcnNlRmxvYXQoY2FtZXJhUmFkaXVzLnZhbHVlKTtcclxuICAgIHZhbCAvPSAxMDtcclxuICAgIFxyXG4gICAgaGFuZGxlQ2FtZXJhVmlldyh0YXJnZXRSb290KTtcclxuICAgIC8vIHVwZGF0ZSBjYW1lcmEgcmFkaXVzIHZhbHVlXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXJhZGl1cy1zbGlkZXItdmFsdWUnKS50ZXh0Q29udGVudCA9IHZhbDtcclxufSlcclxuY2FtZXJhUm9sbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBcclxuICAgIGhhbmRsZUNhbWVyYVZpZXcodGFyZ2V0Um9vdClcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcm9sbC1zbGlkZXItdmFsdWUnKS50ZXh0Q29udGVudCA9IGNhbWVyYVJvbGwudmFsdWU7XHJcbn0pXHJcbmNhbWVyYVBpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBoYW5kbGVDYW1lcmFWaWV3KHRhcmdldFJvb3QpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXBpdGNoLXNsaWRlci12YWx1ZScpLnRleHRDb250ZW50ID0gY2FtZXJhUGl0Y2gudmFsdWU7XHJcbn0pXHJcblxyXG4vL3RoZXRhLCBwaGlcclxuY2FtZXJhVGhldGEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgbGV0IHRoZXRhID0gZGVnVG9SYWQocGFyc2VGbG9hdChjYW1lcmFUaGV0YS52YWx1ZSkpXHJcbiAgICBzZXRPYmxpcXVlVGhldGEodGhldGEpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS10aGV0YS1zbGlkZXItdmFsdWUnKS50ZXh0Q29udGVudCA9IGNhbWVyYVRoZXRhLnZhbHVlO1xyXG59KVxyXG5cclxuY2FtZXJhUGhpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGxldCBwaGkgPSBkZWdUb1JhZChwYXJzZUZsb2F0KGNhbWVyYVBoaS52YWx1ZSkpXHJcbiAgICBzZXRPYmxpcXVlUGhpKHBoaSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXBoaS1zbGlkZXItdmFsdWUnKS50ZXh0Q29udGVudCA9IGNhbWVyYVBoaS52YWx1ZTtcclxufSlcclxuXHJcbi8vIGRlZmF1dGwgdmlld1xyXG5kZWZhdWx0Vmlldy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBjYW1lcmFSYWRpdXMudmFsdWUgPSA1MDtcclxuICAgIGNhbWVyYVJvbGwudmFsdWUgPSAwO1xyXG4gICAgY2FtZXJhUGl0Y2gudmFsdWUgPSAwO1xyXG4gICAgY2FtZXJhVGhldGEudmFsdWUgPSA5MDtcclxuICAgIGNhbWVyYVBoaS52YWx1ZSA9IDkwO1xyXG4gICAgaGFuZGxlQ2FtZXJhVmlldyh0YXJnZXRSb290KTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcmFkaXVzLXNsaWRlci12YWx1ZScpLnRleHRDb250ZW50ID0gNTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcm9sbC1zbGlkZXItdmFsdWUnKS50ZXh0Q29udGVudCA9IDA7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXBpdGNoLXNsaWRlci12YWx1ZScpLnRleHRDb250ZW50ID0gMDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtdGhldGEtc2xpZGVyLXZhbHVlJykudGV4dENvbnRlbnQgPSA5MDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcGhpLXNsaWRlci12YWx1ZScpLnRleHRDb250ZW50ID0gOTA7XHJcbn0pXHJcblxyXG52YXIgc3RhdGUgPSB7XHJcbiAgICBvYmplY3RzOiBbXVxyXG59O1xyXG5cclxuLy8gdGV4dHVyZSBzZWxlY3Rpb25cclxubWFwcGluZ1NlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhtYXBwaW5nU2VsZWN0aW9uLnZhbHVlKVxyXG4gICAgY2hhbmdlTWFwcGluZ1RleHR1cmUoc3RhdGUub2JqZWN0cywgbWFwcGluZ1NlbGVjdGlvbi52YWx1ZSk7XHJcbn0pO1xyXG5cclxuLy8gYW5pbWF0aW9uXHJcbnBhdXNlQ29udGludWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgaWYodGFyZ2V0Um9vdC5hbmltYXRpb24uaXNBbmltYXRlKXtcclxuICAgICAgICAvLyBjaGFuZ2UgdG8gY29udGludWVcclxuICAgICAgICBwYXVzZUNvbnRpbnVlLnRleHRDb250ZW50ID0gXCJDb250aW51ZVwiO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICBwYXVzZUNvbnRpbnVlLnRleHRDb250ZW50ID0gXCJQYXVzZVwiO1xyXG4gICAgfVxyXG4gICAgQW5pbWF0aW9uLnBhdXNlQ29udGludWVBbmltYXRpb24odGFyZ2V0Um9vdCk7XHJcbiAgICBcclxufSlcclxuXHJcbnBsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgcGF1c2VDb250aW51ZS50ZXh0Q29udGVudCA9IFwiUGF1c2VcIjtcclxuICAgIEFuaW1hdGlvbi5wbGF5QW5pbWF0aW9uKHRhcmdldFJvb3QpO1xyXG59KVxyXG5cclxuXHJcbmF1dG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgLy8gY2hhbmdlIHRvIGNvbnRpbnVlXHJcbiAgICBhdXRvLnRleHRDb250ZW50ID0gIXRhcmdldFJvb3QuYW5pbWF0aW9uLmlzQXV0byA/IFwiU3RvcCBBdXRvXCIgOiBcIkF1dG9cIjtcclxuICAgIEFuaW1hdGlvbi5zZXRBdXRvKHRhcmdldFJvb3QpO1xyXG59KVxyXG5cclxucmV2ZXJzZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICByZXZlcnNlLnRleHRDb250ZW50ID0gIXRhcmdldFJvb3QuYW5pbWF0aW9uLmlzUmV2ZXJzZSA/IFwiU3RvcCBSZXZlcnNlXCIgOiBcIlJldmVyc2VcIjtcclxuICAgIEFuaW1hdGlvbi5yZXZlcnNlQW5pbWF0aW9uKHRhcmdldFJvb3QpO1xyXG59KVxyXG5cclxuLy8gbmV4dCwgcHJldiwgZmlyc3QsIGxhc3RcclxubmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBBbmltYXRpb24uZGlzYWJsZUFuaW1hdGlvbih0YXJnZXRSb290KVxyXG4gICAgQW5pbWF0aW9uLm5leHRGcmFtZSh0YXJnZXRSb290KTtcclxuICAgIEFuaW1hdGlvbi5oYW5kbGVHZW5lcmFsVHJhbnNmb3JtKHRhcmdldFJvb3QsIGRvY3VtZW50KTtcclxuICAgIFxyXG59KVxyXG5cclxucHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBBbmltYXRpb24uZGlzYWJsZUFuaW1hdGlvbih0YXJnZXRSb290KVxyXG4gICAgQW5pbWF0aW9uLnByZXZGcmFtZSh0YXJnZXRSb290KTtcclxuICAgIEFuaW1hdGlvbi5oYW5kbGVHZW5lcmFsVHJhbnNmb3JtKHRhcmdldFJvb3QsIGRvY3VtZW50KTtcclxufSlcclxuXHJcbmZpcnN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIEFuaW1hdGlvbi5maXJzdEZyYW1lKHRhcmdldFJvb3QpO1xyXG4gICAgQW5pbWF0aW9uLmhhbmRsZUdlbmVyYWxUcmFuc2Zvcm0odGFyZ2V0Um9vdCwgZG9jdW1lbnQpO1xyXG59KVxyXG5cclxubGFzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBBbmltYXRpb24ubGFzdEZyYW1lKHRhcmdldFJvb3QpO1xyXG4gICAgQW5pbWF0aW9uLmhhbmRsZUdlbmVyYWxUcmFuc2Zvcm0odGFyZ2V0Um9vdCwgZG9jdW1lbnQpO1xyXG59KVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQW1iaWVudENvbG9yKG5vZGUpe1xyXG4gICAgbm9kZS5hbWJpZW50WzBdID0gcmVkQW1iaWVudC52YWx1ZTtcclxuICAgIG5vZGUuYW1iaWVudFsxXSA9IGdyZWVuQW1iaWVudC52YWx1ZTtcclxuICAgIG5vZGUuYW1iaWVudFsyXSA9IGJsdWVBbWJpZW50LnZhbHVlO1xyXG59XHJcblxyXG5yZWRBbWJpZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGhhbmRsZUFtYmllbnRDb2xvcih0YXJnZXQpO1xyXG59KVxyXG5cclxuZ3JlZW5BbWJpZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGhhbmRsZUFtYmllbnRDb2xvcih0YXJnZXQpO1xyXG59KVxyXG5cclxuYmx1ZUFtYmllbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgaGFuZGxlQW1iaWVudENvbG9yKHRhcmdldCk7XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBoYW5kbGVQaG9uZyhub2RlKXtcclxuICAgIG5vZGUuc2hpbmluZXNzID0gMTAwIC0gc2hpbmluZXNzLnZhbHVlO1xyXG4gICAgbm9kZS5waG9uZ0FtYmllbnQgPSBoZXhUb1JnYihhbWJpZW50Q29sb3IudmFsdWUpO1xyXG4gICAgbm9kZS5zcGVjdWxhciA9IGhleFRvUmdiKHNwZWN1bGFyQ29sb3IudmFsdWUpO1xyXG4gICAgbm9kZS5kaWZmdXNlID0gaGV4VG9SZ2IoZGlmZnVzZUNvbG9yLnZhbHVlKTtcclxuICAgIG5vZGUuY29uc3Qua3MgPSBwYXJzZUZsb2F0KHNwZWN1bGFyLnZhbHVlKTtcclxuICAgIG5vZGUuY29uc3Qua2QgPSBwYXJzZUZsb2F0KGRpZmZ1c2UudmFsdWUpO1xyXG4gICAgbm9kZS5jb25zdC5rYSA9IHBhcnNlRmxvYXQoYW1iaWVudC52YWx1ZSk7XHJcbiAgICBub2RlLnBpY2tlZENvbG9yID0gaGV4VG9SZ2IoYmFzaWNDb2xvci52YWx1ZSk7XHJcbn1cclxuXHJcbnNoaW5pbmVzcy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBoYW5kbGVQaG9uZyh0YXJnZXQpO1xyXG59KTtcclxuXHJcbmFtYmllbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgaGFuZGxlUGhvbmcodGFyZ2V0KTtcclxufSk7XHJcblxyXG5zcGVjdWxhci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBoYW5kbGVQaG9uZyh0YXJnZXQpO1xyXG59KTtcclxuXHJcbmRpZmZ1c2UuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgaGFuZGxlUGhvbmcodGFyZ2V0KTtcclxufSk7XHJcblxyXG5hbWJpZW50Q29sb3IuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgaGFuZGxlUGhvbmcodGFyZ2V0KTtcclxufSk7XHJcblxyXG5zcGVjdWxhckNvbG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGhhbmRsZVBob25nKHRhcmdldCk7XHJcbn0pO1xyXG5cclxuZGlmZnVzZUNvbG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIHRhcmdldC5waWNrZWRDb2xvciA9IGhleFRvUmdiKGJhc2ljQ29sb3IudmFsdWUpO1xyXG4gICAgYmFzaWNDb2xvci52YWx1ZSA9IGRpZmZ1c2VDb2xvci52YWx1ZTtcclxufSk7XHJcblxyXG5iYXNpY0NvbG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIHRhcmdldC5waWNrZWRDb2xvciA9IGhleFRvUmdiKGJhc2ljQ29sb3IudmFsdWUpO1xyXG4gICAgZGlmZnVzZUNvbG9yLnZhbHVlID0gYmFzaWNDb2xvci52YWx1ZTtcclxufSk7XHJcblxyXG5saWdodFguYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgbGlnaHREaXJlY3Rpb25bMF0gPSBwYXJzZUZsb2F0KGxpZ2h0WC52YWx1ZSk7XHJcbn0pXHJcblxyXG5saWdodFkuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgbGlnaHREaXJlY3Rpb25bMV0gPSBwYXJzZUZsb2F0KGxpZ2h0WS52YWx1ZSk7XHJcbn0pXHJcblxyXG5saWdodFouYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgbGlnaHREaXJlY3Rpb25bMl0gPSBwYXJzZUZsb2F0KGxpZ2h0Wi52YWx1ZSk7XHJcbn0pXHJcblxyXG4vKiogSEFORExFIEZSQU1FICovXHJcblxyXG4vLyB0b3RhbCBmcmFtZVxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlVG90YWxNb2RlbEZyYW1lKHBhcmVudF9ub2RlKXtcclxuICAgIC8vIGdldCB2YWx1ZSBvZiB0b3RhbCBtb2RlbCBmcmFtZSB0ZXh0XHJcbiAgICBsZXQgX3RvdGFsRnJhbWVUZXh0ID0gdG90YWxNb2RlbEZyYW1lLnRleHRDb250ZW50O1xyXG4gICAgLy8gZ2V0IHRvdGFsIGZyYW1lXHJcbiAgICBsZXQgX3RvdGFsRnJhbWUgPSBBbmltYXRpb24udG90YWxNb2RlbEZyYW1lcyhwYXJlbnRfbm9kZSk7XHJcbiAgICAvLyBzZXQgdG90YWwgZnJhbWVcclxuICAgIF90b3RhbEZyYW1lVGV4dCA9IFwiVG90YWwgTW9kZWwgRnJhbWVzOiBcIisgX3RvdGFsRnJhbWU7XHJcbiAgICB0b3RhbE1vZGVsRnJhbWUudGV4dENvbnRlbnQgPSBfdG90YWxGcmFtZVRleHQ7XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVRvdGFsTm9kZUZyYW1lKG5vZGUpe1xyXG4gICAgbGV0IF90b3RhbEZyYW1lVGV4dCA9IHRvdGFsTm9kZUZyYW1lLnRleHRDb250ZW50O1xyXG4gICAgbGV0IF90b3RhbEZyYW1lID0gQW5pbWF0aW9uLnRvdGFsTm9kZUZyYW1lcyhub2RlKTtcclxuICAgIF90b3RhbEZyYW1lVGV4dCA9IFwiVG90YWwgTm9kZSBGcmFtZXM6IFwiICsgX3RvdGFsRnJhbWVcclxuICAgIHRvdGFsTm9kZUZyYW1lLnRleHRDb250ZW50ID0gX3RvdGFsRnJhbWVUZXh0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQ3VycmVudE1vZGVsRnJhbWUocGFyZW50X21vZGVsKXtcclxuICAgIGxldCBfY3VycmVudEZyYW1lID0gQW5pbWF0aW9uLmN1cnJlbnRNb2RlbEZyYW1lKHBhcmVudF9tb2RlbClcclxuICAgIGN1cnJlbnRNb2RlbEZyYW1lLnRleHRDb250ZW50ID0gXCJDdXJyZW50IE1vZGVsIEZyYW1lOiBcIiArIF9jdXJyZW50RnJhbWVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUN1cnJlbnROb2RlRnJhbWUobm9kZSl7XHJcbiAgICBsZXQgX2N1cnJGcmFtZSA9IEFuaW1hdGlvbi5jdXJyZW50Tm9kZUZyYW1lKG5vZGUpXHJcbiAgICBjdXJyZW50Tm9kZUZyYW1lLnRleHRDb250ZW50ID0gXCJDdXJyZW50IE5vZGUgRnJhbWU6IFwiICsgX2N1cnJGcmFtZVxyXG59XHJcblxyXG4vLyBhZGQgRnJhbWUgbWVjaGFuaXNtXHJcbmNhbmNlbEFkZEZyYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGFkZEZyYW1lTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWZyYW1lLW1vZGFsJylcclxuICAgIGFkZEZyYW1lTW9kYWwuY2xhc3NOYW1lID0gYWRkRnJhbWVNb2RhbC5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxyXG59KVxyXG5cclxuYWRkRnJhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgYWRkRnJhbWVNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtZnJhbWUtbW9kYWwnKVxyXG4gICAgYWRkRnJhbWVNb2RhbC5jbGFzc05hbWUgPSBhZGRGcmFtZU1vZGFsLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGhpZGRlblwiLCBcIlwiKVxyXG59KVxyXG5cclxudmVyaWZ5QWRkRnJhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgQW5pbWF0aW9uLmRpc2FibGVBbmltYXRpb24odGFyZ2V0Um9vdCk7XHJcbiAgICBsZXQgdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRyYW5zbGF0aW9uLXgnKS52YWx1ZVxyXG4gICAgbGV0IHR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10cmFuc2xhdGlvbi15JykudmFsdWVcclxuICAgIGxldCB0eiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdHJhbnNsYXRpb24teicpLnZhbHVlXHJcbiAgICBcclxuICAgIC8vIHJhZHNcclxuICAgIGxldCByeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcm90YXRpb24teCcpLnZhbHVlXHJcbiAgICBsZXQgcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXJvdGF0aW9uLXknKS52YWx1ZVxyXG4gICAgbGV0IHJ6ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1yb3RhdGlvbi16JykudmFsdWVcclxuXHJcbiAgICBsZXQgc3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXNjYWxhdGlvbi14JykudmFsdWVcclxuICAgIGxldCBzeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtc2NhbGF0aW9uLXknKS52YWx1ZVxyXG4gICAgbGV0IHN6ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1zY2FsYXRpb24teicpLnZhbHVlXHJcblxyXG4gICAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgICAgICB0cmFuc2xhdGUgOiBbdHgsIHR5LCB0el0sXHJcbiAgICAgICAgcm90YXRlIDogW2RlZ1RvUmFkKHJ4KSwgZGVnVG9SYWQocnkpLCBkZWdUb1JhZChyeildLFxyXG4gICAgICAgIHNjYWxlIDogW3N4LCBzeSwgc3pdXHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZih0YXJnZXQuYW5pbWF0aW9uLmZyYW1lcyAhPT0gbnVsbCl7XHJcbiAgICAgICAgdGFyZ2V0LmFuaW1hdGlvbi5mcmFtZXMucHVzaCh0cmFuc2Zvcm0pXHJcbiAgICAgICAgaGFuZGxlVG90YWxNb2RlbEZyYW1lKHRhcmdldFJvb3QpO1xyXG4gICAgICAgIGhhbmRsZVRvdGFsTm9kZUZyYW1lKHRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBhZGRGcmFtZU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1mcmFtZS1tb2RhbCcpXHJcbiAgICBhZGRGcmFtZU1vZGFsLmNsYXNzTmFtZSA9IGFkZEZyYW1lTW9kYWwuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcclxuXHJcbn0pXHJcblxyXG4vL2VkaXQgZnJhbWVcclxuXHJcbmVkaXRGcmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBlZGl0RnJhbWVNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWZyYW1lLW1vZGFsJylcclxuICAgIGVkaXRGcmFtZU1vZGFsLmNsYXNzTmFtZSA9IGVkaXRGcmFtZU1vZGFsLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGhpZGRlblwiLCBcIlwiKVxyXG4gICAgLy8gc2V0IHZhbHVlXHJcbiAgICBsZXQgdHJhbnNmb3JtID0gdGFyZ2V0LnRyYW5zZm9ybVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdHJhbnNsYXRpb24teCcpLnZhbHVlID0gdHJhbnNmb3JtLnRyYW5zbGF0ZVswXVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdHJhbnNsYXRpb24teScpLnZhbHVlID0gdHJhbnNmb3JtLnRyYW5zbGF0ZVsxXVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdHJhbnNsYXRpb24teicpLnZhbHVlID0gdHJhbnNmb3JtLnRyYW5zbGF0ZVsyXVxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXJvdGF0aW9uLXgnKS52YWx1ZSA9IHJhZFRvRGVnKHRyYW5zZm9ybS5yb3RhdGVbMF0pXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1yb3RhdGlvbi15JykudmFsdWUgPSByYWRUb0RlZyh0cmFuc2Zvcm0ucm90YXRlWzFdKVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcm90YXRpb24teicpLnZhbHVlID0gcmFkVG9EZWcodHJhbnNmb3JtLnJvdGF0ZVsyXSlcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1zY2FsYXRpb24teCcpLnZhbHVlID0gdHJhbnNmb3JtLnNjYWxlWzBdXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1zY2FsYXRpb24teScpLnZhbHVlID0gdHJhbnNmb3JtLnNjYWxlWzFdXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1zY2FsYXRpb24teicpLnZhbHVlID0gdHJhbnNmb3JtLnNjYWxlWzJdXHJcbn0pXHJcblxyXG5jYW5jZWxFZGl0RnJhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgZWRpdEZyYW1lTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1mcmFtZS1tb2RhbCcpXHJcbiAgICBlZGl0RnJhbWVNb2RhbC5jbGFzc05hbWUgPSBlZGl0RnJhbWVNb2RhbC5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxyXG59KVxyXG5cclxudmVyaWZ5RWRpdEZyYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIC8vIHR4LCB0eSwgdHosIHJ4LCByeSwgcnosIHN4LCBzeSwgc3pcclxuICAgIEFuaW1hdGlvbi5kaXNhYmxlQW5pbWF0aW9uKHRhcmdldFJvb3QpO1xyXG4gICAgbGV0IHR4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdHJhbnNsYXRpb24teCcpLnZhbHVlXHJcbiAgICBsZXQgdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10cmFuc2xhdGlvbi15JykudmFsdWVcclxuICAgIGxldCB0eiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRyYW5zbGF0aW9uLXonKS52YWx1ZVxyXG5cclxuICAgIGxldCByeCA9IGRlZ1RvUmFkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXJvdGF0aW9uLXgnKS52YWx1ZSlcclxuICAgIGxldCByeSA9IGRlZ1RvUmFkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXJvdGF0aW9uLXknKS52YWx1ZSlcclxuICAgIGxldCByeiA9IGRlZ1RvUmFkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXJvdGF0aW9uLXonKS52YWx1ZSlcclxuXHJcbiAgICBsZXQgc3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1zY2FsYXRpb24teCcpLnZhbHVlXHJcbiAgICBsZXQgc3kgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1zY2FsYXRpb24teScpLnZhbHVlXHJcbiAgICBsZXQgc3ogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1zY2FsYXRpb24teicpLnZhbHVlXHJcblxyXG4gICAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgICAgICB0cmFuc2xhdGUgOiBbdHgsIHR5LCB0el0sXHJcbiAgICAgICAgcm90YXRlIDogW3J4LCByeSwgcnpdLFxyXG4gICAgICAgIHNjYWxlIDogW3N4LCBzeSwgc3pdXHJcbiAgICB9XHJcblxyXG4gICAgQW5pbWF0aW9uLmVkaXRDdXJyZW50RnJhbWUodGFyZ2V0LCB0cmFuc2Zvcm0pO1xyXG5cclxuICAgIC8vIGRpc2FibGUgbW9kYWxcclxuICAgIGNvbnN0IGVkaXRGcmFtZU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZnJhbWUtbW9kYWwnKVxyXG4gICAgZWRpdEZyYW1lTW9kYWwuY2xhc3NOYW1lID0gZWRpdEZyYW1lTW9kYWwuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcclxuXHJcbn0pXHJcblxyXG4vLyBkZWxldGUgZnJhbWVcclxuZGVsZXRlRnJhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgZGVsZXRlRnJhbWVNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGUtZnJhbWUtbW9kYWwnKVxyXG4gICAgZGVsZXRlRnJhbWVNb2RhbC5jbGFzc05hbWUgPSBkZWxldGVGcmFtZU1vZGFsLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGhpZGRlblwiLCBcIlwiKVxyXG59KVxyXG5cclxuY2FuY2VsRGVsZXRlRnJhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgZGVsZXRlRnJhbWVNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGUtZnJhbWUtbW9kYWwnKVxyXG4gICAgZGVsZXRlRnJhbWVNb2RhbC5jbGFzc05hbWUgPSBkZWxldGVGcmFtZU1vZGFsLmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXHJcbn0pXHJcblxyXG52ZXJpZnlEZWxldGVGcmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBBbmltYXRpb24uZGlzYWJsZUFuaW1hdGlvbih0YXJnZXRSb290KTtcclxuXHJcbiAgICAvLyBkZWxldGUgZnJhbWVcclxuICAgIEFuaW1hdGlvbi5kZWxldGVDdXJyZW50RnJhbWUodGFyZ2V0KTtcclxuXHJcbiAgICAvLyB1cGRhdGUgbm9kZSBmcmFtZVxyXG4gICAgaGFuZGxlVG90YWxNb2RlbEZyYW1lKHRhcmdldFJvb3QpO1xyXG4gICAgaGFuZGxlVG90YWxOb2RlRnJhbWUodGFyZ2V0KTtcclxuICAgIEFuaW1hdGlvbi5oYW5kbGVHZW5lcmFsVHJhbnNmb3JtKHRhcmdldFJvb3QsZG9jdW1lbnQpXHJcbiAgICAvLyBpZih0YXJnZXQuYW5pbWF0aW9uLmZyYW1lcyAhPT0gbnVsbCl7XHJcbiAgICAvLyAgICAgdGFyZ2V0LmFuaW1hdGlvbi5mcmFtZXMucG9wKCk7XHJcbiAgICAvLyAgICAgaGFuZGxlVG90YWxNb2RlbEZyYW1lKHRhcmdldFJvb3QpO1xyXG4gICAgLy8gICAgIGhhbmRsZVRvdGFsTm9kZUZyYW1lKHRhcmdldCk7XHJcbiAgICAvLyB9XHJcbiAgICBjb25zdCBkZWxldGVGcmFtZU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZS1mcmFtZS1tb2RhbCcpXHJcbiAgICBkZWxldGVGcmFtZU1vZGFsLmNsYXNzTmFtZSA9IGRlbGV0ZUZyYW1lTW9kYWwuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcclxufSlcclxuXHJcbnNhdmVBbmltYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgbGV0IGFuaW1hdGlvbk1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtYW5pbWF0aW9uLW1vZGFsJylcclxuICAgIGFuaW1hdGlvbk1vZGFsLmNsYXNzTmFtZSA9IGFuaW1hdGlvbk1vZGFsLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGhpZGRlblwiLCBcIlwiKVxyXG59KVxyXG5cclxub2tTYXZlQW5pbWF0aW9uTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgbGV0IGFuaW1hdGlvbk1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtYW5pbWF0aW9uLW1vZGFsJylcclxuICAgIGFuaW1hdGlvbk1vZGFsLmNsYXNzTmFtZSA9IGFuaW1hdGlvbk1vZGFsLmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXHJcbn0pXHJcblxyXG5cclxuZnVuY3Rpb24gc2V0Tm9kZU1hbmFnZXIobm9kZSl7XHJcbiAgICBub2RlTmFtZS52YWx1ZSA9IG5vZGUubmFtZTtcclxufTtcclxuXHJcbnJlbmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICByZW5hbWVUYXJnZXQobm9kZU5hbWUudmFsdWUpO1xyXG4gICAgY2xlYXJDb21wb25lbnQoKTtcclxuICAgIGRpc3BsYXlDb21wb25lbnQoMCwgb2JqZWN0cyk7XHJcbn0pXHJcblxyXG5kZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgZGVsZXRlTm9kZSh0YXJnZXQubmFtZSk7XHJcbiAgICBjbGVhckNvbXBvbmVudCgpO1xyXG4gICAgZGlzcGxheUNvbXBvbmVudCgwLCBvYmplY3RzKTtcclxufSlcclxuXHJcbmFkZENoaWxkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBhZGROb2RlKG5vZGVOYW1lLnZhbHVlKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldClcclxufSlcclxuXHJcbnNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgc2F2ZUpTT04ob2JqZWN0cyk7XHJcbn0pO1xyXG5cclxubG9hZC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICBsb2FkSlNPTihldmVudC50YXJnZXQsIGZ1bmN0aW9uKG9iamVjdHMpe1xyXG4gICAgICAgIGxvYWRPYmplY3RzKG9iamVjdHMpO1xyXG4gICAgICAgIGNvbnN0IGltcG9ydGVkT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgaW1wb3J0ZWRPcHRpb24udmFsdWUgPSBtb2RlbC5sZW5ndGg7XHJcbiAgICAgICAgaW1wb3J0ZWRPcHRpb24udGV4dCA9IG9iamVjdHNbMF0ubmFtZTtcclxuICAgICAgICBtb2RlbFNlbGVjdGlvbi5hcHBlbmRDaGlsZChpbXBvcnRlZE9wdGlvbik7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIFNldCB0aGUgdmFsdWUgb2YgbW9kZWxTZWxlY3Rpb24gdG8gXCJpbXBvcnRlZFwiXHJcbiAgICAgICAgbW9kZWxTZWxlY3Rpb24udmFsdWUgPSBtb2RlbC5sZW5ndGg7XHJcbiAgICAgICAgYWRkTW9kZWwob2JqZWN0cyk7XHJcbiAgICB9KTtcclxufSlcclxuXHJcbmV4cG9ydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zb2xlLmxvZyhbdGFyZ2V0XSk7XHJcbiAgICBzYXZlSlNPTihbdGFyZ2V0XSk7XHJcbn0pO1xyXG5cclxuaW1wb3J0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgIGxvYWRKU09OKGV2ZW50LnRhcmdldCwgZnVuY3Rpb24ob2JqZWN0KXtcclxuICAgICAgICBvYmplY3RbMF0uc2V0UGFyZW50KHRhcmdldCk7XHJcbiAgICAgICAgY2xlYXJDb21wb25lbnQoKTtcclxuICAgICAgICBkaXNwbGF5Q29tcG9uZW50KDAsIG9iamVjdHMpO1xyXG4gICAgfSk7XHJcbn0pXHJcblxyXG5cclxuLyoqXHJcbiAqIENoYXJhY3RlciBNb3ZlbWVudFxyXG4gKi9cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgc3dpdGNoKGV2ZW50LmtleSkge1xyXG4gICAgICAgIGNhc2UgJ0Fycm93VXAnOlxyXG4gICAgICAgICAgICBDaGFyYWN0ZXJDb250cm9sbGVyLnZ6ID0gMWUtMi80O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxyXG4gICAgICAgICAgICBDaGFyYWN0ZXJDb250cm9sbGVyLnZ6ID0gLTFlLTIvNDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcclxuICAgICAgICAgICAgQ2hhcmFjdGVyQ29udHJvbGxlci52eCA9IC0xZS0yLzQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxyXG4gICAgICAgICAgICBDaGFyYWN0ZXJDb250cm9sbGVyLnZ4ID0gMWUtMi80O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyBoYW5kbGUgc3BhY2VcclxuICAgICAgICBjYXNlICcgJzpcclxuICAgICAgICAgICAgQ2hhcmFjdGVyQ29udHJvbGxlci5jdXJyZW50R3JvdW5kID0gdGFyZ2V0Um9vdC50cmFuc2Zvcm0udHJhbnNsYXRlWzFdO1xyXG4gICAgICAgICAgICB0YXJnZXRSb290LnRyYW5zZm9ybS50cmFuc2xhdGVbMV0gKz0gMWUtMi80O1xyXG4gICAgICAgICAgICBDaGFyYWN0ZXJDb250cm9sbGVyLnZ5ID0gMWUtMi8yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAvLyBIYW5kbGUgb3RoZXIga2V5cyBpZiBuZWVkZWRcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxubWF0ZXJpYWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKXtcclxuICAgIHRhcmdldC5waG9uZyA9IG1hdGVyaWFsLnZhbHVlID09IDEgPyB0cnVlIDogZmFsc2U7XHJcbn0pOyIsImltcG9ydCBwaWdNb2RlbCBmcm9tIFwiLi9zdHJ1Y3RzL21vZGVsL3BpZy5qc1wiO1xyXG5pbXBvcnQgY2hpY2tlbk1vZGVsIGZyb20gXCIuL3N0cnVjdHMvbW9kZWwvY2hpY2tlbi5qc1wiO1xyXG5pbXBvcnQgZm94TW9kZWwgZnJvbSBcIi4vc3RydWN0cy9tb2RlbC9mb3guanNcIjtcclxuaW1wb3J0IE1hdDQgZnJvbSBcIi4vc3RydWN0cy9tYXRoL01hdDQuanNcIjtcclxuaW1wb3J0IFZlYzMgZnJvbSBcIi4vc3RydWN0cy9tYXRoL1ZlYzMuanNcIjtcclxuaW1wb3J0IFZlYzQgZnJvbSBcIi4vc3RydWN0cy9tYXRoL1ZlYzQuanNcIjtcclxuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi91dGlscy9DYW1lcmEuanNcIjtcclxuaW1wb3J0IHsgZGlzcGxheUNvbXBvbmVudCwgXHJcbiAgY2xlYXJDb21wb25lbnQsIFxyXG4gIGluaXRPcHRpb25Nb2RlbCwgXHJcbiAgaGFuZGxlVHJhbnNmb3JtLCBcclxuICBoYW5kbGVUb3RhbE1vZGVsRnJhbWUsXHJcbiAgaGFuZGxlVG90YWxOb2RlRnJhbWUsXHJcbiAgaGFuZGxlQ3VycmVudE1vZGVsRnJhbWUsXHJcbiAgaGFuZGxlQ3VycmVudE5vZGVGcmFtZSxcclxuICBub2RlTmFtZX0gZnJvbSBcIi4vaGFuZGxlci9ldmVudEhhbmRsZXIuanNcIjtcclxuaW1wb3J0IGhvbGxvd01vZGVsIGZyb20gXCIuL3N0cnVjdHMvbW9kZWwvaG9sbG93VGhpbmd5LmpzXCI7XHJcbmltcG9ydCBob2xsb3dSaW5nTW9kZWwgZnJvbSBcIi4vc3RydWN0cy9tb2RlbC9yaW5nLmpzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVBhcGVyVGV4dHVyZSwgY3JlYXRlRW52aXJvbm1lbnRUZXh0dXJlLCBjcmVhdGVCdW1wVGV4dHVyZSB9IGZyb20gXCIuL3V0aWxzL3RleHR1cmUuanNcIlxyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuL3V0aWxzL0FuaW1hdGlvbi5qc1wiO1xyXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9zdHJ1Y3RzL25vZGUuanNcIjtcclxuaW1wb3J0IHsgZGVnVG9SYWQgfSBmcm9tIFwiLi9zdHJ1Y3RzL21hdGgvbWF0aFV0aWxzLmpzXCI7XHJcbmltcG9ydCBDaGFyYWN0ZXJDb250cm9sbGVyIGZyb20gXCIuL3V0aWxzL0NoYXJhY3RlckNvbnRyb2xsZXIuanNcIjtcclxuXHJcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2wtY2FudmFzXCIpO1xyXG5jb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2xcIik7XHJcblxyXG5cclxuY29uc3QgdmVydGV4U2hhZGVyU291cmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZXJ0ZXgtc2hhZGVyLTNkXCIpPy50ZXh0Q29udGVudDtcclxuY29uc3QgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyYWdtZW50LXNoYWRlci0zZFwiKT8udGV4dENvbnRlbnQ7XHJcblxyXG4vLyBzdGF0ZVxyXG5leHBvcnQgdmFyIG1vZGVsID0gW3BpZ01vZGVsLCBjaGlja2VuTW9kZWwsIGZveE1vZGVsLCBob2xsb3dNb2RlbCwgaG9sbG93UmluZ01vZGVsXTtcclxuZXhwb3J0IHZhciBvYmplY3RzO1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0T2JqZWN0cyh2YWx1ZSkge1xyXG4gIG9iamVjdHMgPSB2YWx1ZTtcclxufVxyXG5leHBvcnQgdmFyIHRhcmdldDtcclxuZXhwb3J0IGZ1bmN0aW9uIHNldFRhcmdldCh2YWx1ZSkge1xyXG4gIHRhcmdldCA9IHZhbHVlO1xyXG59XHJcbmV4cG9ydCB2YXIgdGFyZ2V0Um9vdDtcclxuZXhwb3J0IGZ1bmN0aW9uIHNldFRhcmdldFJvb3QodmFsdWUpIHtcclxuICB0YXJnZXRSb290ID0gdmFsdWU7XHJcbn1cclxudmFyIGxpZ2h0aW5nO1xyXG5leHBvcnQgdmFyIGxpZ2h0RGlyZWN0aW9uO1xyXG52YXIgdGV4dHVyZTtcclxudmFyIHByb2plY3Rpb25fdHlwZTtcclxudmFyIHBob25nID0gdHJ1ZTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRQcm9qZWN0aW9uVHlwZShuZXdQcm9qZWN0aW9uKSB7XHJcbiAgcHJvamVjdGlvbl90eXBlID0gbmV3UHJvamVjdGlvbjtcclxufVxyXG52YXIgZmFjdG9yO1xyXG52YXIgb2JsaXF1ZV90aGV0YTtcclxuZXhwb3J0IGZ1bmN0aW9uIHNldE9ibGlxdWVUaGV0YShuZXdUaGV0YSkge1xyXG4gIG9ibGlxdWVfdGhldGEgPSBuZXdUaGV0YTtcclxufVxyXG52YXIgb2JsaXF1ZV9waGk7XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRPYmxpcXVlUGhpKG5ld1BoaSkge1xyXG4gIG9ibGlxdWVfcGhpID0gbmV3UGhpO1xyXG59XHJcbnZhciBub3JtYWxpemVMaWdodDtcclxudmFyIHdvcmxkVmlld1Byb2plY3Rpb25NYXRyaXg7XHJcbnZhciBjdWJlQ291bnQgPSAwO1xyXG5cclxuLy8gYW5pbWF0aW9uXHJcbnZhciB0X2FuaW1hdGlvbiA9IDA7XHJcbnZhciBmcHNfdGltZSA9IDAuMTU7XHJcblxyXG5pbml0U3RhdGUoKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRTdGF0ZSgpIHtcclxuICAgIG9iamVjdHMgPSBtb2RlbFswXTtcclxuICAgIGxpZ2h0aW5nID0gZmFsc2U7XHJcbiAgICBsaWdodERpcmVjdGlvbiA9IFswLjAsIDAuMCwgMS4wXVxyXG4gICAgdGV4dHVyZSA9IFwibm9uZVwiO1xyXG4gICAgcHJvamVjdGlvbl90eXBlID0gXCJvcnRob2dyYXBoaWNcIjtcclxuICAgIGZhY3RvciA9IDAuMDtcclxuICAgIG9ibGlxdWVfdGhldGEgPSA5MC4wO1xyXG4gICAgb2JsaXF1ZV9waGkgPSA5MC4wO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG1vZGVsLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBzZXREZWZhdWx0Um90YXRpb24obW9kZWxbaV0pO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheUNvbXBvbmVudCgwLCBvYmplY3RzKTtcclxuICAgIGluaXRPcHRpb25Nb2RlbChtb2RlbCk7XHJcbiAgICBoYW5kbGVUcmFuc2Zvcm0ob2JqZWN0c1swXSlcclxuICAgIGhhbmRsZVRvdGFsTW9kZWxGcmFtZShvYmplY3RzWzBdKVxyXG4gICAgaGFuZGxlVG90YWxOb2RlRnJhbWUob2JqZWN0c1swXSlcclxuXHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBpZighZ2wpe1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIldlYkdMIG5vdCBzdXBwb3J0ZWRcIik7XHJcbiAgICB9XHJcbiAgICB0YXJnZXQgPSBvYmplY3RzWzBdO1xyXG4gICAgdGFyZ2V0Um9vdCA9IHRhcmdldDtcclxuICAgIHJlbmRlcigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREZWZhdWx0U3RhdGUob2JqZWN0cykge1xyXG4gICAgb2JqZWN0cy5mb3JFYWNoKG9iamVjdCA9PiB7XHJcbiAgICAgICAgaWYgKCFvYmplY3QubW9kZWwuY29sb3JzKSB7XHJcbiAgICAgICAgICAgIGlmICghb2JqZWN0LnBpY2tlZENvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QubW9kZWwuY29sb3JzID0gZ2VuZXJhdGVDb2xvcnMob2JqZWN0Lm1vZGVsLnZlcnRpY2VzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5tb2RlbC5jb2xvcnMgPSBnZW5lcmF0ZUNvbG9ycyhcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QubW9kZWwudmVydGljZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnBpY2tlZENvbG9yXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBpZiAoIW9iamVjdC5wcm9ncmFtICkge1xyXG4gICAgICAgICAgICBvYmplY3QucHJvZ3JhbSA9IGNyZWF0ZVNoYWRlclByb2dyYW0oXHJcbiAgICAgICAgICAgICAgICBnbCxcclxuICAgICAgICAgICAgICAgIHZlcnRleFNoYWRlclNvdXJjZSxcclxuICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBvYmplY3QubG9jYWxNYXRyaXggPSBzZXRUcmFuc2Zvcm0ob2JqZWN0KTtcclxuICAgICAgICBpZiAob2JqZWN0LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc2V0RGVmYXVsdFN0YXRlKG9iamVjdC5jaGlsZHJlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VHJhbnNmb3JtKG9iamVjdCkge1xyXG4gICAgLyogU2V0dXAgdHJhbnNmb3JtIG1hdHJpeCAqL1xyXG5cclxuICAgIHZhciB0cmFuc2Zvcm1NYXRyaXggPSBNYXQ0LnRyYW5zbGF0ZShcclxuICAgICAgb2JqZWN0LnRyYW5zZm9ybS50cmFuc2xhdGVbMF0sXHJcbiAgICAgIG9iamVjdC50cmFuc2Zvcm0udHJhbnNsYXRlWzFdLFxyXG4gICAgICBvYmplY3QudHJhbnNmb3JtLnRyYW5zbGF0ZVsyXVxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgX2NlbnRlciA9IG9iamVjdC5tb2RlbC5jZW50ZXJcclxuICAgIGlmKF9jZW50ZXIpe1xyXG4gICAgICB0cmFuc2Zvcm1NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICAgIHRyYW5zZm9ybU1hdHJpeCxcclxuICAgICAgICBNYXQ0LnRyYW5zbGF0ZShfY2VudGVyWzBdLCBfY2VudGVyWzFdLCBfY2VudGVyWzJdKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICB0cmFuc2Zvcm1NYXRyaXgsXHJcbiAgICAgIE1hdDQucm90YXRlWChvYmplY3QudHJhbnNmb3JtLnJvdGF0ZVswXSlcclxuICAgICk7XHJcbiAgXHJcbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICB0cmFuc2Zvcm1NYXRyaXgsXHJcbiAgICAgIE1hdDQucm90YXRlWShvYmplY3QudHJhbnNmb3JtLnJvdGF0ZVsxXSlcclxuICAgICk7XHJcbiAgXHJcbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICB0cmFuc2Zvcm1NYXRyaXgsXHJcbiAgICAgIE1hdDQucm90YXRlWihvYmplY3QudHJhbnNmb3JtLnJvdGF0ZVsyXSlcclxuICAgICk7XHJcblxyXG4gICAgaWYoX2NlbnRlcil7XHJcbiAgICAgIHRyYW5zZm9ybU1hdHJpeCA9IE1hdDQubXVsdGlwbHkoXHJcbiAgICAgICAgdHJhbnNmb3JtTWF0cml4LFxyXG4gICAgICAgIE1hdDQudHJhbnNsYXRlKC1fY2VudGVyWzBdLCAtX2NlbnRlclsxXSwgLV9jZW50ZXJbMl0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICB0cmFuc2Zvcm1NYXRyaXgsXHJcbiAgICAgIE1hdDQuc2NhbGUoXHJcbiAgICAgICAgb2JqZWN0LnRyYW5zZm9ybS5zY2FsZVswXSxcclxuICAgICAgICBvYmplY3QudHJhbnNmb3JtLnNjYWxlWzFdLFxyXG4gICAgICAgIG9iamVjdC50cmFuc2Zvcm0uc2NhbGVbMl1cclxuICAgICAgKVxyXG4gICAgKTtcclxuICBcclxuICAgIHJldHVybiB0cmFuc2Zvcm1NYXRyaXg7XHJcbiAgfVxyXG5cclxuZnVuY3Rpb24gc2V0RGVmYXVsdFJvdGF0aW9uKG9iamVjdHMpIHtcclxuICAgIGZvcihsZXQgb2JqZWN0IG9mIG9iamVjdHMpe1xyXG4gICAgICAgIG9iamVjdC50cmFuc2Zvcm0ucm90YXRlID0gb2JqZWN0LnRyYW5zZm9ybS5yb3RhdGUubWFwKCh2YWwpID0+IGRlZ1RvUmFkKHZhbCkpO1xyXG4gICAgICAgIGlmKG9iamVjdC5jaGlsZHJlbi5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgc2V0RGVmYXVsdFJvdGF0aW9uKG9iamVjdC5jaGlsZHJlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyTG9vcChvYmplY3RzKSB7XHJcbiAgICBvYmplY3RzLmZvckVhY2gob2JqZWN0ID0+IHtcclxuICAgICAgICBnbC51c2VQcm9ncmFtKG9iamVjdC5wcm9ncmFtKTtcclxuICAgICAgICB2YXIgbW9kZWxNYXRyaXggPSBvYmplY3QuZ2V0V29ybGRNYXRyaXgoKTtcclxuXHJcbiAgICAgICAgb2JqZWN0LndvcmxkTWF0cml4ID0gc2V0UHJvamVjdGlvbk1hdHJpeChvYmplY3Qud29ybGRNYXRyaXgsIG9iamVjdClcclxuXHJcblxyXG4gICAgICAgIHZhciBhX3Bvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheShvYmplY3QubW9kZWwudmVydGljZXMuZmxhdCgxKSk7XHJcbiAgICAgICAgdmFyIGFfbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheShvYmplY3QubW9kZWwubm9ybWFscy5mbGF0KDEpKTtcclxuICAgICAgICB2YXIgYV9jb2xvciA9IG5ldyBGbG9hdDMyQXJyYXkob2JqZWN0LnBpY2tlZENvbG9yLmZsYXQoMSkpO1xyXG4gICAgICAgIHZhciBhX3RleHR1cmUgPSBuZXcgRmxvYXQzMkFycmF5KG9iamVjdC5tb2RlbC50ZXhDb29yZCk7XHJcbiAgICAgICAgdmFyIGFfdGFuZ2VudCA9IG5ldyBGbG9hdDMyQXJyYXkob2JqZWN0Lm1vZGVsLnRhbmdlbnRzLmZsYXQoMSkpO1xyXG4gICAgICAgIHZhciBhX2JpdGFuZ2VudCA9IG5ldyBGbG9hdDMyQXJyYXkob2JqZWN0Lm1vZGVsLmJpdGFuZ2VudHMuZmxhdCgxKSk7XHJcblxyXG4gICAgICAgIHNldEF0dHIoZ2wsIG9iamVjdC5wcm9ncmFtLCBhX3Bvc2l0aW9uLCBhX25vcm1hbCwgYV9jb2xvciwgYV90ZXh0dXJlLCBhX3RhbmdlbnQsIGFfYml0YW5nZW50KTtcclxuICAgICAgICB2YXIgdW5pZm9ybXMgPSB7XHJcbiAgICAgICAgICAgIHVXb3JsZFZpZXdQcm9qZWN0aW9uOiBvYmplY3Qud29ybGRNYXRyaXgsXHJcbiAgICAgICAgICAgIHVXb3JsZEludmVyc2VUcmFuc3Bvc2U6IG9iamVjdC53b3JsZEludmVyc2VNYXRyaXgsXHJcbiAgICAgICAgICAgIHVSZXZlcnNlTGlnaHREaXJlY3Rpb246IG5vcm1hbGl6ZUxpZ2h0LFxyXG4gICAgICAgICAgICB1Q29sb3I6IG9iamVjdC5waWNrZWRDb2xvci5jb25jYXQoMS4wKSxcclxuICAgICAgICAgICAgdU1vZGVsTWF0cml4OiBtb2RlbE1hdHJpeCxcclxuICAgICAgICAgICAgdUFtYmllbnRDb2xvcjogb2JqZWN0LmFtYmllbnQsXHJcbiAgICAgICAgICAgIHVEaWZmdXNlQ29sb3I6IG9iamVjdC5waWNrZWRDb2xvcixcclxuICAgICAgICAgICAgdVNwZWN1bGFyQ29sb3I6IG9iamVjdC5zcGVjdWxhcixcclxuICAgICAgICAgICAgdVNoaW5pbmVzczogb2JqZWN0LnNoaW5pbmVzcyxcclxuICAgICAgICAgICAgdUxpZ2h0UG9zOiBub3JtYWxpemVMaWdodCxcclxuICAgICAgICAgICAga2E6IG9iamVjdC5jb25zdC5rYSxcclxuICAgICAgICAgICAga2Q6IG9iamVjdC5jb25zdC5rZCxcclxuICAgICAgICAgICAga3M6IG9iamVjdC5jb25zdC5rcyxcclxuICAgICAgICAgICAgdVBob25nOiBvYmplY3QucGhvbmcsXHJcbiAgICAgICAgICAgIHVQaG9uZ0FtYmllbnRDb2xvcjogb2JqZWN0LnBob25nQW1iaWVudCxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFVuaWZvcm1zKGdsLCBvYmplY3QucHJvZ3JhbSwgdW5pZm9ybXMpO1xyXG5cclxuICAgICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFUywgMCwgb2JqZWN0Lm1vZGVsLnZlcnRpY2VzLmxlbmd0aCk7XHJcbiAgICAgICAgaWYgKG9iamVjdC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJlbmRlckxvb3Aob2JqZWN0LmNoaWxkcmVuKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxud2luZG93LnJlcXVlc3RBbmltRnJhbWUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gMSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfSkoKTtcclxuXHJcblxyXG5mdW5jdGlvbiByZW5kZXIobm93KSB7XHJcbiAgICBnbC52aWV3cG9ydCgwLCAwLCBnbC5jYW52YXMud2lkdGgsIGdsLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgZ2wuY2xlYXJDb2xvcigwLjgsIDAuOCwgMC44LCAxLjApO1xyXG4gICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IGdsLkRFUFRIX0JVRkZFUl9CSVQpO1xyXG5cclxuICAgIGdsLmVuYWJsZShnbC5DVUxMX0ZBQ0UpO1xyXG4gICAgZ2wuZW5hYmxlKGdsLkRFUFRIX1RFU1QpO1xyXG5cclxuICAgIHNldERlZmF1bHRTdGF0ZShvYmplY3RzKTtcclxuICAgIC8vIGRlbHRhIHRpbWVcclxuICAgIGlmKCFub3cpIG5vdyA9IDA7XHJcbiAgICBpZih0X2FuaW1hdGlvbiA9PT0gMCkgdF9hbmltYXRpb24gPSBub3c7XHJcblxyXG4gICAgaWYoKG5vdyAtIHRfYW5pbWF0aW9uKSA+PSBmcHNfdGltZSl7XHJcbiAgICAgIGxldCBkZWx0YVRpbWUgPSBub3cgLSB0X2FuaW1hdGlvbjtcclxuICAgICAgdF9hbmltYXRpb24gPSBub3c7XHJcbiAgICAgIEFuaW1hdGlvbi5hbmltYXRlKHRhcmdldFJvb3QsIGRlbHRhVGltZSk7XHJcbiAgICAgIENoYXJhY3RlckNvbnRyb2xsZXIudmVsb2NpdHlMb29wKHRhcmdldFJvb3QsIGRlbHRhVGltZSk7XHJcbiAgICAgIENoYXJhY3RlckNvbnRyb2xsZXIuZ3Jhdml0eUxvb3AodGFyZ2V0Um9vdCwgZGVsdGFUaW1lKTtcclxuICAgICAgaGFuZGxlQ3VycmVudE1vZGVsRnJhbWUodGFyZ2V0Um9vdClcclxuICAgICAgaGFuZGxlQ3VycmVudE5vZGVGcmFtZSh0YXJnZXQpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9iamVjdHNbMF0uc2V0V29ybGRNdHgobnVsbCk7XHJcblxyXG4gICAgbm9ybWFsaXplTGlnaHQgPSBWZWMzLnVuaXRWZWN0b3IoVmVjMy5mcm9tQXJyYXkobGlnaHREaXJlY3Rpb24pKS5hc0FycmF5KClcclxuICAgIHJlbmRlckxvb3Aob2JqZWN0cyk7XHJcbiAgICBBbmltYXRpb24uaGFuZGxlVHJhbnNmb3JtKHRhcmdldCwgZG9jdW1lbnQpO1xyXG4gICAgXHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1GcmFtZShyZW5kZXIpO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZXRQcm9qZWN0aW9uTWF0cml4KG1hdHJpeCwgb2JqZWN0KSB7XHJcbiAgICAvLyBjb25zdCBjYW1lcmEgPSBzZXRDYW1lcmEob2JqZWN0KTtcclxuICAgIGNvbnN0IHByb2plY3Rpb25WaWV3ID0gQ2FtZXJhLnByb2plY3Rpb25NYXRyaXgocHJvamVjdGlvbl90eXBlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZ1RvUmFkKDQ1KSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FudmFzLndpZHRoIC8gY2FudmFzLmhlaWdodCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnZpZXdNYXRyaXgubmVhciwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3Qudmlld01hdHJpeC5mYXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmxpcXVlX3RoZXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JsaXF1ZV9waGkpXHJcbiAgICBjb25zdCB2aWV3TWF0cml4ID0gQ2FtZXJhLnZpZXdNYXRyaXgob2JqZWN0LnZpZXdNYXRyaXguY2FtZXJhLCBvYmplY3Qudmlld01hdHJpeC5sb29rQXQsIG9iamVjdC52aWV3TWF0cml4LnVwKTtcclxuICAgIHZhciB2aWV3UHJvamVjdGlvbk1hdHJpeCA9IE1hdDQubXVsdGlwbHkocHJvamVjdGlvblZpZXcsIHZpZXdNYXRyaXgpO1xyXG4gICAgaWYgKGZhY3RvciA8IDAuMDEpIHtcclxuICAgICAgICBmYWN0b3IgPSAwLjAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcm9qZWN0aW9uX3R5cGUgPT09IFwicGVyc3BlY3RpdmVcIikge1xyXG4gICAgICAgIHZpZXdQcm9qZWN0aW9uTWF0cml4ID0gTWF0NC5tdWx0aXBseShcclxuICAgICAgICAgICAgQ2FtZXJhLm1ha2VaVG9XTWF0cml4KGZhY3RvciksXHJcbiAgICAgICAgICAgIHZpZXdQcm9qZWN0aW9uTWF0cml4LFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgd29ybGRWaWV3UHJvamVjdGlvbk1hdHJpeCA9IE1hdDQubXVsdGlwbHkodmlld1Byb2plY3Rpb25NYXRyaXgsIG1hdHJpeCk7XHJcblxyXG4gICAgcmV0dXJuIHdvcmxkVmlld1Byb2plY3Rpb25NYXRyaXg7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlTW9kZWxPYmplY3QgKGluZGV4KSB7XHJcbiAgICBvYmplY3RzID0gbW9kZWxbaW5kZXhdO1xyXG4gICAgc2V0VGFyZ2V0KG9iamVjdHNbMF0pO1xyXG4gICAgc2V0VGFyZ2V0Um9vdChvYmplY3RzWzBdKTtcclxuICAgIGNsZWFyQ29tcG9uZW50KCk7XHJcbiAgICBkaXNwbGF5Q29tcG9uZW50KDAsIG9iamVjdHMpO1xyXG4gICAgaGFuZGxlVHJhbnNmb3JtKG9iamVjdHNbMF0pO1xyXG4gICAgaGFuZGxlVG90YWxNb2RlbEZyYW1lKHRhcmdldFJvb3QpXHJcbiAgICBoYW5kbGVUb3RhbE5vZGVGcmFtZSh0YXJnZXRSb290KVxyXG4gICAgcmVuZGVyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VNYXBwaW5nVGV4dHVyZShvYmplY3RzLCB0ZXh0dXJlVHlwZSkge1xyXG4gIG9iamVjdHMuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICBpZiAodGV4dHVyZVR5cGUgPT09IFwiMFwiKSB7XHJcbiAgICAgIG9iamVjdC5wcm9ncmFtID0gY3JlYXRlU2hhZGVyUHJvZ3JhbShcclxuICAgICAgICBnbCxcclxuICAgICAgICB2ZXJ0ZXhfc2hhZGVyXzNkLFxyXG4gICAgICAgIGZyYWdtZW50X3NoYWRlcl8zZF9ub19saWdodGluZ1xyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIGlmICh0ZXh0dXJlVHlwZSA9PT0gXCIxXCIpIHtcclxuICAgICAgY3JlYXRlUGFwZXJUZXh0dXJlKGdsKTtcclxuICAgICAgb2JqZWN0LnByb2dyYW0gPSBjcmVhdGVTaGFkZXJQcm9ncmFtKFxyXG4gICAgICAgIGdsLFxyXG4gICAgICAgIHZlcnRleF9zaGFkZXJfM2QsXHJcbiAgICAgICAgZnJhZ21lbnRfc2hhZGVyX3RleHR1cmVcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAodGV4dHVyZVR5cGUgPT09IFwiMlwiKSB7XHJcbiAgICAgIGNyZWF0ZUVudmlyb25tZW50VGV4dHVyZShnbCk7XHJcbiAgICAgIG9iamVjdC5wcm9ncmFtID0gY3JlYXRlU2hhZGVyUHJvZ3JhbShcclxuICAgICAgICBnbCxcclxuICAgICAgICB2ZXJ0ZXhfc2hhZGVyXzNkLFxyXG4gICAgICAgIGZyYWdtZW50X3NoYWRlcl9lbnZpcm9ubWVudFxyXG4gICAgICApXHJcbiAgICB9IGVsc2UgaWYgKHRleHR1cmVUeXBlID09PSBcIjNcIikge1xyXG4gICAgICBjcmVhdGVCdW1wVGV4dHVyZShnbCk7XHJcbiAgICAgIG9iamVjdC5wcm9ncmFtID0gY3JlYXRlU2hhZGVyUHJvZ3JhbShcclxuICAgICAgICBnbCxcclxuICAgICAgICB2ZXJ0ZXhfc2hhZGVyXzNkLFxyXG4gICAgICAgIGZyYWdtZW50X3NoYWRlcl9idW1wXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAob2JqZWN0LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgY2hhbmdlTWFwcGluZ1RleHR1cmUob2JqZWN0LmNoaWxkcmVuLCB0ZXh0dXJlVHlwZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5hbWVUYXJnZXQgKG5ld05hbWUpIHtcclxuICBmb3IoIGxldCBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspe1xyXG4gICAgaWYob2JqZWN0c1tpXS5uYW1lID09PSB0YXJnZXQubmFtZSl7XHJcbiAgICAgIGNvbnNvbGUubG9nKG9iamVjdHNbaV0ubmFtZSlcclxuICAgICAgY29uc29sZS5sb2cobmV3TmFtZSlcclxuICAgICAgb2JqZWN0c1tpXS5uYW1lID0gbmV3TmFtZTtcclxuICAgIH1cclxuICB9XHJcbiAgdGFyZ2V0Lm5hbWUgPSBuZXdOYW1lO1xyXG4gIGNsZWFyQ29tcG9uZW50KCk7XHJcbiAgZGlzcGxheUNvbXBvbmVudCgwLCBvYmplY3RzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZU5vZGUgKG5hbWUpIHtcclxuICBmdW5jdGlvbiByZW1vdmVOb2RlIChub2RlKSB7XHJcbiAgICBpZiAobm9kZS5uYW1lID09PSBuYW1lKSB7XHJcbiAgICAgIG9iamVjdHMuc3BsaWNlKG9iamVjdHMuaW5kZXhPZihub2RlKSwgMSk7XHJcbiAgICAgIG5vZGVOYW1lLnZhbHVlID0gXCJcIlxyXG4gICAgICByZXR1cm47XHJcbiAgICB9IFxyXG5cclxuICAgIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW5baV0ubmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICAgICAgbm9kZS5jaGlsZHJlbi5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICBub2RlTmFtZS52YWx1ZSA9IFwiXCJcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVtb3ZlTm9kZShub2RlLmNoaWxkcmVuW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZU5vZGUob2JqZWN0c1swXSk7XHJcbiAgY29uc29sZS5sb2cob2JqZWN0cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGROb2RlICgpIHtcclxuICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUoKTsgXHJcbiAgY3ViZUNvdW50Kys7XHJcbiAgY2hlY2tOb2RlKG9iamVjdHMsIFwibmV3Q3ViZVwiICsgY3ViZUNvdW50KTtcclxuICBuZXdOb2RlLm5hbWUgPSBcIm5ld0N1YmVcIiArIGN1YmVDb3VudDtcclxuICBuZXdOb2RlLm1vZGVsID0gYm94TW9kZWwoMSwgMSwgMSwgWzAsIDAsIDBdKTtcclxuICBuZXdOb2RlLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG4gIH07XHJcbiAgbmV3Tm9kZS5waWNrZWRDb2xvciA9IHJhbmRvbUNvbG9ycygpLFxyXG4gIG5ld05vZGUuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbiAgbmV3Tm9kZS5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbiAgbmV3Tm9kZS5hbWJpZW50ID0gWzEsMSwxXSxcclxuICBuZXdOb2RlLnNoaW5pbmVzcyA9IDEsXHJcbiAgbmV3Tm9kZS5jb25zdCA9IHtcclxuICAgICAga2Q6IDAuNSxcclxuICAgICAga3M6IDAuMCxcclxuICAgICAga2E6IDEuMCxcclxuICB9XHJcbiAgbmV3Tm9kZS52aWV3TWF0cml4ID0ge1xyXG4gICAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICAgIG5lYXI6IDAuMSxcclxuICAgICAgZmFyOiA1MCxcclxuICB9O1xyXG4gIG5ld05vZGUuYW5pbWF0aW9uID0ge1xyXG4gICAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIH07XHJcbiAgbmV3Tm9kZS53b3JsZE1hdHJpeCA9IHRhcmdldC53b3JsZE1hdHJpeDtcclxuICBpZiAob2JqZWN0cy5sZW5ndGggIT09IDApIHtcclxuICAgIG5ld05vZGUuc2V0UGFyZW50KHRhcmdldCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG9iamVjdHMucHVzaChuZXdOb2RlKTtcclxuICAgIHRhcmdldCA9IG9iamVjdHNbMF07XHJcbiAgICB0YXJnZXRSb290ID0gb2JqZWN0c1swXTtcclxuICAgIGNvbnNvbGUubG9nKG9iamVjdHMpXHJcbiAgfVxyXG4gIGNsZWFyQ29tcG9uZW50KCk7XHJcbiAgZGlzcGxheUNvbXBvbmVudCgwLCBvYmplY3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tOb2RlKG9iamVjdHMsIG5hbWUpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChvYmplY3RzW2ldLm5hbWUgPT09IG5hbWUpIHtcclxuICAgICAgY3ViZUNvdW50Kys7XHJcbiAgICB9XHJcbiAgICBpZiAob2JqZWN0c1tpXS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNoZWNrTm9kZShvYmplY3RzW2ldLmNoaWxkcmVuLCBuYW1lKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkT2JqZWN0cyhvYmplY3RzKSB7XHJcbiAgICBzZXRPYmplY3RzKG9iamVjdHMpO1xyXG4gICAgc2V0VGFyZ2V0KG9iamVjdHNbMF0pO1xyXG4gICAgc2V0VGFyZ2V0Um9vdChvYmplY3RzWzBdKTtcclxuICAgIGNsZWFyQ29tcG9uZW50KCk7XHJcbiAgICBkaXNwbGF5Q29tcG9uZW50KDAsIG9iamVjdHMpO1xyXG4gICAgaGFuZGxlVHJhbnNmb3JtKG9iamVjdHNbMF0pO1xyXG4gICAgaGFuZGxlVG90YWxNb2RlbEZyYW1lKHRhcmdldFJvb3QpXHJcbiAgICBoYW5kbGVUb3RhbE5vZGVGcmFtZSh0YXJnZXRSb290KVxyXG4gICAgcmVuZGVyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRNb2RlbChvYmplY3QpIHtcclxuICBtb2RlbC5wdXNoKG9iamVjdCk7XHJcbn0iLCJpbXBvcnQgVmVjMyBmcm9tIFwiLi9tYXRoL1ZlYzMuanNcIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVmVydGljZXMoaGVpZ2h0LCB3aWR0aCwgZGVwdGgsIG9mZnNldCkge1xyXG4gIHJldHVybiBbXHJcbiAgICBbb2Zmc2V0WzBdIC0gd2lkdGggLyAyLCBvZmZzZXRbMV0gLSBoZWlnaHQgLyAyLCBvZmZzZXRbMl0gLSBkZXB0aCAvIDJdLFxyXG4gICAgW29mZnNldFswXSArIHdpZHRoIC8gMiwgb2Zmc2V0WzFdIC0gaGVpZ2h0IC8gMiwgb2Zmc2V0WzJdIC0gZGVwdGggLyAyXSxcclxuICAgIFtvZmZzZXRbMF0gLSB3aWR0aCAvIDIsIG9mZnNldFsxXSArIGhlaWdodCAvIDIsIG9mZnNldFsyXSAtIGRlcHRoIC8gMl0sXHJcbiAgICBbb2Zmc2V0WzBdICsgd2lkdGggLyAyLCBvZmZzZXRbMV0gKyBoZWlnaHQgLyAyLCBvZmZzZXRbMl0gLSBkZXB0aCAvIDJdLFxyXG4gICAgW29mZnNldFswXSAtIHdpZHRoIC8gMiwgb2Zmc2V0WzFdIC0gaGVpZ2h0IC8gMiwgb2Zmc2V0WzJdICsgZGVwdGggLyAyXSxcclxuICAgIFtvZmZzZXRbMF0gKyB3aWR0aCAvIDIsIG9mZnNldFsxXSAtIGhlaWdodCAvIDIsIG9mZnNldFsyXSArIGRlcHRoIC8gMl0sXHJcbiAgICBbb2Zmc2V0WzBdIC0gd2lkdGggLyAyLCBvZmZzZXRbMV0gKyBoZWlnaHQgLyAyLCBvZmZzZXRbMl0gKyBkZXB0aCAvIDJdLFxyXG4gICAgW29mZnNldFswXSArIHdpZHRoIC8gMiwgb2Zmc2V0WzFdICsgaGVpZ2h0IC8gMiwgb2Zmc2V0WzJdICsgZGVwdGggLyAyXSxcclxuICBdXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUZhY2VzKCkge1xyXG4gIHJldHVybiBbXHJcbiAgICBbMSwgMywgMl0sXHJcbiAgICBbNCwgMiwgM10sXHJcbiAgICBbMSwgMiwgNV0sXHJcbiAgICBbNiwgNSwgMl0sXHJcbiAgICBbMSwgNSwgM10sXHJcbiAgICBbNSwgNywgM10sXHJcbiAgICBbMiwgNCwgNl0sXHJcbiAgICBbOCwgNiwgNF0sXHJcbiAgICBbNCwgMywgOF0sXHJcbiAgICBbNywgOCwgM10sXHJcbiAgICBbNSwgNiwgN10sXHJcbiAgICBbOCwgNywgNl0sXHJcbiAgXVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVRleENvb3IgKCkge1xyXG4gIHJldHVybiBbXHJcbiAgICAxLCAxLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAxLCAxLCAwLFxyXG5cclxuICAgIDAsIDEsIDEsIDEsIDAsIDAsIDEsIDAsIDAsIDAsIDEsIDEsXHJcblxyXG4gICAgMCwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCxcclxuXHJcbiAgICAxLCAxLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAxLCAxLCAwLFxyXG5cclxuICAgIDEsIDAsIDAsIDAsIDEsIDEsIDAsIDEsIDEsIDEsIDAsIDAsXHJcblxyXG4gICAgMCwgMSwgMSwgMSwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMSxcclxuICBdXHJcbn1cclxuZnVuY3Rpb24gZ2VuZXJhdGVUYW5nZW50cygpIHtcclxuICByZXR1cm4gW1xyXG4gICAgLy9iYWNrXHJcbiAgICAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLFxyXG4gICAgLy9ib3R0b21cclxuICAgIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsXHJcbiAgICAvL2xlZnRcclxuICAgIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsXHJcbiAgICAvL3JpZ2h0XHJcbiAgICAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLFxyXG4gICAgLy90b3BcclxuICAgIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsXHJcbiAgICAvL2Zyb250XHJcbiAgICAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLFxyXG4gIF1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVCaXRhbmdlbnRzKCkge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLFxyXG4gICAgICAgIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsXHJcbiAgICAgICAgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSxcclxuICAgICAgICAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLFxyXG4gICAgICAgIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsXHJcbiAgICAgICAgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCxcclxuICAgIF1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlTm9ybWFscyh2ZXJ0aWNlcywgZmFjZXMpIHtcclxuICBsZXQgbm9ybWFscyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZmFjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBmYWNlID0gZmFjZXNbaV07XHJcbiAgICBsZXQgdjEgPSBWZWMzLmZyb21BcnJheSh2ZXJ0aWNlc1tmYWNlWzBdIC0gMV0pXHJcbiAgICBsZXQgdjIgPSBWZWMzLmZyb21BcnJheSh2ZXJ0aWNlc1tmYWNlWzFdIC0gMV0pXHJcbiAgICBsZXQgdjMgPSBWZWMzLmZyb21BcnJheSh2ZXJ0aWNlc1tmYWNlWzJdIC0gMV0pXHJcblxyXG4gICAgbGV0IHYxdjIgPSBWZWMzLnN1Yih2MiwgdjEpO1xyXG4gICAgbGV0IHYxdjMgPSBWZWMzLnN1Yih2Myx2MSk7XHJcblxyXG4gICAgbGV0IHJlcyA9IFZlYzMudW5pdFZlY3RvcihWZWMzLmNyb3NzKHYxdjIsdjF2MykpLmFzQXJyYXkoKVxyXG4gICAgbm9ybWFscy5wdXNoKHJlcyk7XHJcbiAgICBub3JtYWxzLnB1c2gocmVzKTtcclxuICAgIG5vcm1hbHMucHVzaChyZXMpO1xyXG4gIH1cclxuICByZXR1cm4gbm9ybWFscztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVDb2xvcnModmVydGljZXMsIGNvbG9yID0gbnVsbCkge1xyXG4gIGxldCBjb2xvcnMgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSArPSAzKSB7XHJcbiAgICB2YXIgYyA9IGNvbG9yO1xyXG4gICAgaWYgKGNvbG9yID09IG51bGwpIHtcclxuICAgICAgYyA9IFtNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpXTtcclxuICAgIH0gXHJcbiAgICBjb2xvcnMucHVzaChjKTtcclxuICAgIGNvbG9ycy5wdXNoKGMpO1xyXG4gICAgY29sb3JzLnB1c2goYyk7XHJcbiAgICBjb2xvcnMucHVzaChjKTtcclxuICAgIGNvbG9ycy5wdXNoKGMpO1xyXG4gICAgY29sb3JzLnB1c2goYyk7XHJcbiAgfVxyXG4gIHJldHVybiBjb2xvcnM7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJveE1vZGVsKGhlaWdodCwgd2lkdGgsIGRlcHRoLCBvZmZzZXQpIHtcclxuXHJcbiAgbGV0IHZlcnRpY2VzID0gZ2VuZXJhdGVWZXJ0aWNlcyhoZWlnaHQsIHdpZHRoLCBkZXB0aCwgb2Zmc2V0KTtcclxuICBsZXQgY2VudGVyID0gW29mZnNldFswXSwgb2Zmc2V0WzFdLCBvZmZzZXRbMl1dO1xyXG4gIGxldCBmYWNlcyA9IGdlbmVyYXRlRmFjZXMoKTtcclxuICBsZXQgdGV4Q29vcmQgPSBnZW5lcmF0ZVRleENvb3IoKTtcclxuICBsZXQgbm9ybWFscyA9IGdlbmVyYXRlTm9ybWFscyh2ZXJ0aWNlcywgZmFjZXMpO1xyXG4gIHZlcnRpY2VzID0gdG9WZXJ0aWNlcyh2ZXJ0aWNlcywgZmFjZXMpO1xyXG5cclxuICBsZXQgdGFuZ2VudHMgPSBnZW5lcmF0ZVRhbmdlbnRzKCk7XHJcbiAgbGV0IGJpdGFuZ2VudHMgPSBnZW5lcmF0ZUJpdGFuZ2VudHMoKTtcclxuICBsZXQgY29sb3JzID0gZ2VuZXJhdGVDb2xvcnModmVydGljZXMpO1xyXG4gIFxyXG4gIHJldHVybiB7XHJcbiAgICB2ZXJ0aWNlczogdmVydGljZXMsXHJcbiAgICBmYWNlczogZmFjZXMsXHJcbiAgICB0YW5nZW50czogdGFuZ2VudHMsXHJcbiAgICBiaXRhbmdlbnRzOiBiaXRhbmdlbnRzLFxyXG4gICAgbm9ybWFsczogbm9ybWFscyxcclxuICAgIGNvbG9yczogY29sb3JzLFxyXG4gICAgdGV4Q29vcmQ6IHRleENvb3JkLFxyXG4gICAgY2VudGVyIDogY2VudGVyXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgVmVjNCBmcm9tIFwiLi9WZWM0LmpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdDR7XHJcbiAgICBzdGF0aWMgZ2V0RW1wdHkoKXtcclxuICAgICAgICByZXR1cm4gWzAsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDBdXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldElkZW50aXR5KCl7XHJcbiAgICAgICAgcmV0dXJuIFsxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAxXTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIGdldFRyYW5zbGF0aW9uKHgsIHksIHope1xyXG4gICAgICAgIHJldHVybiBbMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICAgICAgeCwgeSwgeiwgMV07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFNjYWxlKHgsIHksIHope1xyXG4gICAgICAgIHJldHVybiBbeCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIHksIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCB6LCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMV07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFJvdGF0aW9uWCh0aGV0YSl7XHJcbiAgICAgICAgcmV0dXJuIFsxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgTWF0aC5jb3ModGhldGEpLCAtTWF0aC5zaW4odGhldGEpLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgTWF0aC5zaW4odGhldGEpLCBNYXRoLmNvcyh0aGV0YSksIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAxXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Um90YXRpb25ZKHRoZXRhKXtcclxuICAgICAgICByZXR1cm4gW01hdGguY29zKHRoZXRhKSwgMCwgTWF0aC5zaW4odGhldGEpLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIC1NYXRoLnNpbih0aGV0YSksIDAsIE1hdGguY29zKHRoZXRhKSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRSb3RhdGlvbloodGhldGEpe1xyXG4gICAgICAgIHJldHVybiBbTWF0aC5jb3ModGhldGEpLCAtTWF0aC5zaW4odGhldGEpLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgTWF0aC5zaW4odGhldGEpLCBNYXRoLmNvcyh0aGV0YSksIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMV07XHJcbiAgICB9ICAgXHJcbiAgICBcclxuICAgIHN0YXRpYyB0cmFuc3Bvc2UoYSkge1xyXG4gICAgICAgIGlmICghYSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gb3IgcmV0dXJuIGEgZGVmYXVsdCBtYXRyaXggb3IgaGFuZGxlIHRoZSBudWxsIGNhc2UgYXBwcm9wcmlhdGVseVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBhWzBdLCBhWzRdLCBhWzhdLCBhWzEyXSxcclxuICAgICAgICAgICAgYVsxXSwgYVs1XSwgYVs5XSwgYVsxM10sXHJcbiAgICAgICAgICAgIGFbMl0sIGFbNl0sIGFbMTBdLCBhWzE0XSxcclxuICAgICAgICAgICAgYVszXSwgYVs3XSwgYVsxMV0sIGFbMTVdXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaW52ZXJzZShhKSB7XHJcbiAgICAgICAgdmFyIGEwMCA9IGFbMCAqIDQgKyAwXTtcclxuICAgICAgICB2YXIgYTAxID0gYVswICogNCArIDFdO1xyXG4gICAgICAgIHZhciBhMDIgPSBhWzAgKiA0ICsgMl07XHJcbiAgICAgICAgdmFyIGEwMyA9IGFbMCAqIDQgKyAzXTtcclxuICAgICAgICB2YXIgYTEwID0gYVsxICogNCArIDBdO1xyXG4gICAgICAgIHZhciBhMTEgPSBhWzEgKiA0ICsgMV07XHJcbiAgICAgICAgdmFyIGExMiA9IGFbMSAqIDQgKyAyXTtcclxuICAgICAgICB2YXIgYTEzID0gYVsxICogNCArIDNdO1xyXG4gICAgICAgIHZhciBhMjAgPSBhWzIgKiA0ICsgMF07XHJcbiAgICAgICAgdmFyIGEyMSA9IGFbMiAqIDQgKyAxXTtcclxuICAgICAgICB2YXIgYTIyID0gYVsyICogNCArIDJdO1xyXG4gICAgICAgIHZhciBhMjMgPSBhWzIgKiA0ICsgM107XHJcbiAgICAgICAgdmFyIGEzMCA9IGFbMyAqIDQgKyAwXTtcclxuICAgICAgICB2YXIgYTMxID0gYVszICogNCArIDFdO1xyXG4gICAgICAgIHZhciBhMzIgPSBhWzMgKiA0ICsgMl07XHJcbiAgICAgICAgdmFyIGEzMyA9IGFbMyAqIDQgKyAzXTtcclxuICAgICAgICB2YXIgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwO1xyXG4gICAgICAgIHZhciBiMDEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTA7XHJcbiAgICAgICAgdmFyIGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMDtcclxuICAgICAgICB2YXIgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExO1xyXG4gICAgICAgIHZhciBiMDQgPSBhMDEgKiBhMTMgLSBhMDMgKiBhMTE7XHJcbiAgICAgICAgdmFyIGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMjtcclxuICAgICAgICB2YXIgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwO1xyXG4gICAgICAgIHZhciBiMDcgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzA7XHJcbiAgICAgICAgdmFyIGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMDtcclxuICAgICAgICB2YXIgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxO1xyXG4gICAgICAgIHZhciBiMTAgPSBhMjEgKiBhMzMgLSBhMjMgKiBhMzE7XHJcbiAgICAgICAgdmFyIGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMjtcclxuXHJcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxyXG4gICAgICAgIHZhciBkZXQgPVxyXG4gICAgICAgIGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcclxuXHJcbiAgICAgICAgaWYgKCFkZXQpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGV0ID0gMS4wIC8gZGV0O1xyXG5cclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAoYTExICogYjExIC0gYTEyICogYjEwICsgYTEzICogYjA5KSAqIGRldCxcclxuICAgICAgICAgICAgKGEwMiAqIGIxMCAtIGEwMSAqIGIxMSAtIGEwMyAqIGIwOSkgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMzEgKiBiMDUgLSBhMzIgKiBiMDQgKyBhMzMgKiBiMDMpICogZGV0LFxyXG4gICAgICAgICAgICAoYTIyICogYjA0IC0gYTIxICogYjA1IC0gYTIzICogYjAzKSAqIGRldCxcclxuICAgICAgICAgICAgKGExMiAqIGIwOCAtIGExMCAqIGIxMSAtIGExMyAqIGIwNykgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMDAgKiBiMTEgLSBhMDIgKiBiMDggKyBhMDMgKiBiMDcpICogZGV0LFxyXG4gICAgICAgICAgICAoYTMyICogYjAyIC0gYTMwICogYjA1IC0gYTMzICogYjAxKSAqIGRldCxcclxuICAgICAgICAgICAgKGEyMCAqIGIwNSAtIGEyMiAqIGIwMiArIGEyMyAqIGIwMSkgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMTAgKiBiMTAgLSBhMTEgKiBiMDggKyBhMTMgKiBiMDYpICogZGV0LFxyXG4gICAgICAgICAgICAoYTAxICogYjA4IC0gYTAwICogYjEwIC0gYTAzICogYjA2KSAqIGRldCxcclxuICAgICAgICAgICAgKGEzMCAqIGIwNCAtIGEzMSAqIGIwMiArIGEzMyAqIGIwMCkgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMjEgKiBiMDIgLSBhMjAgKiBiMDQgLSBhMjMgKiBiMDApICogZGV0LFxyXG4gICAgICAgICAgICAoYTExICogYjA3IC0gYTEwICogYjA5IC0gYTEyICogYjA2KSAqIGRldCxcclxuICAgICAgICAgICAgKGEwMCAqIGIwOSAtIGEwMSAqIGIwNyArIGEwMiAqIGIwNikgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMzEgKiBiMDEgLSBhMzAgKiBiMDMgLSBhMzIgKiBiMDApICogZGV0LFxyXG4gICAgICAgICAgICAoYTIwICogYjAzIC0gYTIxICogYjAxICsgYTIyICogYjAwKSAqIGRldCxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0cmFuc2xhdGUgKHR4LCB0eSwgdHopIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICB0eCwgdHksIHR6LCAxXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm4gYiAqIGFcclxuICAgIHN0YXRpYyBtdWx0aXBseShhLCBiKXtcclxuICAgICAgICBsZXQgcmVzID0gTWF0NC5nZXRFbXB0eSgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgKytpKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgKytqKSB7XHJcbiAgICAgICAgICAgICAgICByZXNbaSAqIDQgKyBqXSA9IFZlYzQuZG90KE1hdDQuZ2V0Um93KGIsIGkpLCBNYXQ0LmdldENvbHVtbihhLCBqKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByb3RhdGVYKHJhZCkge1xyXG4gICAgICAgIHZhciBzaW4gPSBNYXRoLnNpbihyYWQpO1xyXG4gICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhyYWQpO1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIDEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIGNvcywgc2luLCAwLFxyXG4gICAgICAgICAgICAwLCAtc2luLCBjb3MsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByb3RhdGVZKHJhZCkge1xyXG4gICAgICAgIHZhciBzaW4gPSBNYXRoLnNpbihyYWQpO1xyXG4gICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhyYWQpO1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIGNvcywgMCwgLXNpbiwgMCxcclxuICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgc2luLCAwLCBjb3MsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByb3RhdGVaKHJhZCkge1xyXG4gICAgICAgIHZhciBzaW4gPSBNYXRoLnNpbihyYWQpO1xyXG4gICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhyYWQpO1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIGNvcywgc2luLCAwLCAwLFxyXG4gICAgICAgICAgICAtc2luLCBjb3MsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzY2FsZSAoc3gsIHN5LCBzeikge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHN4LCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCBzeSwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgc3osIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHV0aWxzXHJcbiAgICBzdGF0aWMgZ2V0Um93KG1hdHJpeCwgcm93KXtcclxuICAgICAgICAvLyB1c2UgVmVjNCB0byBnZXQgdGhlIHJvd1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjNChtYXRyaXhbcm93ICogNF0sIG1hdHJpeFtyb3cgKiA0ICsgMV0sIG1hdHJpeFtyb3cgKiA0ICsgMl0sIG1hdHJpeFtyb3cgKiA0ICsgM10pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb2x1bW4obWF0cml4LCBjb2x1bW4pe1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjNChtYXRyaXhbY29sdW1uXSwgbWF0cml4W2NvbHVtbiArIDRdLCBtYXRyaXhbY29sdW1uICsgOF0sIG1hdHJpeFtjb2x1bW4gKyAxMl0pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjM3tcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIHope1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLnogPSB6O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGFkZChhLCBiKXtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzMoYS54ICsgYi54LCBhLnkgKyBiLnksIGEueiArIGIueik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHN1YihhLCBiKXtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzMoYS54IC0gYi54LCBhLnkgLSBiLnksIGEueiAtIGIueik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRvdChhLCBiKXtcclxuICAgICAgICByZXR1cm4gYS54ICogYi54ICsgYS55ICogYi55ICsgYS56ICogYi56O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcm9zcyhhLCBiKXtcclxuICAgICAgICAvLyByZXR1cm4gbmV3IFZlYzMoYS56ICogYi55IC0gYS55ICogYi56LCBhLnggKiBiLnogLSBhLnogKiBiLnggLGEueSAqIGIueCAtIGEueCAqIGIueSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWMzKGEueSAqIGIueiAtIGEueiAqIGIueSwgYS56ICogYi54IC0gYS54ICogYi56ICxhLnggKiBiLnkgLSBhLnkgKiBiLngpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBub3JtKGEpe1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoYS54ICogYS54ICsgYS55ICogYS55ICsgYS56ICogYS56KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdW5pdFZlY3RvcihhKXtcclxuICAgICAgICBsZXQgbm9ybSA9IFZlYzMubm9ybShhKTtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzMoYS54IC8gbm9ybSwgYS55IC8gbm9ybSwgYS56IC8gbm9ybSk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBhc0FycmF5KCl7ICBcclxuICAgICAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55LCB0aGlzLnpdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmcm9tQXJyYXkoYXJyYXkpe1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjMyhhcnJheVswXSwgYXJyYXlbMV0sIGFycmF5WzJdKTtcclxuICAgIH1cclxufSIsImltcG9ydCBWZWMzIGZyb20gXCIuL1ZlYzMuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlYzR7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB6LCB3KXtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy56ID0gejtcclxuICAgICAgICB0aGlzLncgPSB3O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGFkZChhLCBiKXtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzQoYS54ICsgYi54LCBhLnkgKyBiLnksIGEueiArIGIueiwgYS53ICsgYi53KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZG90KGEsIGIpe1xyXG4gICAgICAgIGxldCByZXMgPSBhLnggKiBiLnggKyBhLnkgKiBiLnkgKyBhLnogKiBiLnogKyBhLncgKiBiLndcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBub3JtKGEpe1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoYS54ICogYS54ICsgYS55ICogYS55ICsgYS56ICogYS56ICsgYS53ICogYS53KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbm9ybWFsaXplKGEpe1xyXG4gICAgICAgIGxldCBub3JtID0gVmVjNC5ub3JtKGEpO1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjNChhLnggLyBub3JtLCBhLnkgLyBub3JtLCBhLnogLyBub3JtLCBhLncgLyBub3JtKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXNWZWMzKGEpeyAgIFxyXG4gICAgICAgIHJldHVybiBuZXcgVmVjMyhhLngsIGEueSwgYS56KTtcclxuICAgIH1cclxuXHJcbiAgICBhc0FycmF5KCl7ICBcclxuICAgICAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55LCB0aGlzLnosIHRoaXMud107XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZyb21BcnJheShhcnJheSl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWM0KGFycmF5WzBdLCBhcnJheVsxXSwgYXJyYXlbMl0sIGFycmF5WzNdKTtcclxuICAgIH1cclxuXHJcbn0iLCJcclxuZXhwb3J0IGZ1bmN0aW9uIGRlZ1RvUmFkKGRlZ3JlZXMpe1xyXG4gICAgcmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xyXG59ICAgXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFkVG9EZWcocmFkaWFucyl7XHJcbiAgICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XHJcbn0iLCJpbXBvcnQgTm9kZSBmcm9tIFwiLi4vbm9kZS5qc1wiO1xyXG5pbXBvcnQgeyBkZWdUb1JhZCB9IGZyb20gXCIuLi9tYXRoL21hdGhVdGlscy5qc1wiO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuLi8uLi91dGlscy9BbmltYXRpb24uanNcIjtcclxuaW1wb3J0IGJveE1vZGVsIGZyb20gXCIuLi9ib3hNb2RlbC5qc1wiO1xyXG5cclxuLy8gQ3JlYXRlIHRoZSBjaGlja2VuIGJvZHkgbm9kZVxyXG5jb25zdCBjaGlja2VuID0gbmV3IE5vZGUoKTtcclxuY2hpY2tlbi5mbGFnID0gXCJhcnRpY3VsYXRlZFwiO1xyXG5jaGlja2VuLm5hbWUgPSBcImNoaWNrZW5cIjtcclxuY2hpY2tlbi5tb2RlbCA9IGJveE1vZGVsKDEsIDEuNSwgMSwgWzAsIDAsIDBdKTtcclxuY2hpY2tlbi50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLCAwLCAwXSxcclxuICAgIHJvdGF0ZTogWzQyLCAtNTUsIDI3XSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmNoaWNrZW4ucGlja2VkQ29sb3IgPSBbMC45LCAwLjksIDBdLFxyXG5jaGlja2VuLmRpZmZ1c2UgPSBbMCwgMCwgMF0sXHJcbmNoaWNrZW4uc3BlY3VsYXIgPSBbMCwgMCwgMF0sXHJcbmNoaWNrZW4uYW1iaWVudCA9IFsxLCAxLCAxXSxcclxuY2hpY2tlbi5zaGluaW5lc3MgPSAxLFxyXG5jaGlja2VuLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmNoaWNrZW4udmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNoaWNrZW5GcmFtZXMoKXtcclxuICAgIGxldCB0cmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgdHJhbnNsYXRlOiBbMCwgMCwgMF0sXHJcbiAgICAgICAgcm90YXRlOiBbZGVnVG9SYWQoNDIpLCBkZWdUb1JhZCgtNTUpLCBkZWdUb1JhZCgyNyldLFxyXG4gICAgICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgICB9XHJcbiAgICBsZXQgZnJhbWVzID0gW11cclxuICAgIGZvcihsZXQgayA9IDA7IGsgPCAxMDA7ICsrayl7XHJcbiAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgIF90cmFuc2Zvcm0udHJhbnNsYXRlWzBdID0gayAvIDUwO1xyXG4gICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gZnJhbWVzO1xyXG5cclxufVxyXG5cclxuY2hpY2tlbi5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBjaGlja2VuRnJhbWVzKCksXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogQW5pbWF0aW9uLmFuaW1hdGlvblNjcmlwdCgpLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbi8vIENyZWF0ZSB0aGUgaGVhZCBub2RlXHJcbmNvbnN0IGhlYWQgPSBuZXcgTm9kZSgpO1xyXG5oZWFkLm5hbWUgPSBcImhlYWRcIjtcclxuaGVhZC5tb2RlbCA9IGJveE1vZGVsKDAuNiwgMC42LCAwLjgsIFswLCAwLCAwXSk7XHJcbmhlYWQudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMC43NSwgMC43NSwgMF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmhlYWQucGlja2VkQ29sb3IgPSBbMC45LCAwLjksIDBdO1xyXG5oZWFkLmRpZmZ1c2UgPSBbMCwgMCwgMF07XHJcbmhlYWQuc3BlY3VsYXIgPSBbMCwgMCwgMF07XHJcbmhlYWQuYW1iaWVudCA9IFsxLCAxLCAxXTtcclxuaGVhZC5zaGluaW5lc3MgPSAxLFxyXG5oZWFkLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmhlYWQudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuaGVhZC5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBudWxsLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IG51bGwsIFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbi8vIENyZWF0ZSB0aGUgYmVhayBub2RlXHJcbmNvbnN0IGJlYWsgPSBuZXcgTm9kZSgpO1xyXG5iZWFrLm5hbWUgPSBcImJlYWtcIjtcclxuYmVhay5tb2RlbCA9IGJveE1vZGVsKDAuMiwgMC4yLCAwLjMsIFstMC42NSwgLTAuMSwgMF0pO1xyXG5iZWFrLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzEsIDAsIDBdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5iZWFrLnBpY2tlZENvbG9yID0gWzEsIDAuNSwgMF07XHJcbmJlYWsuZGlmZnVzZSA9IFswLCAwLCAwXTtcclxuYmVhay5zcGVjdWxhciA9IFswLCAwLCAwXTtcclxuYmVhay5hbWJpZW50ID0gWzEsIDEsIDFdO1xyXG5iZWFrLnNoaW5pbmVzcyA9IDEsXHJcbmJlYWsuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxuYmVhay52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5iZWFrLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IG51bGwsXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogbnVsbCxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG5jb25zdCB3aGl0ZUxlZnRFeWUgPSBuZXcgTm9kZSgpO1xyXG53aGl0ZUxlZnRFeWUubmFtZSA9IFwid2hpdGVMZWZ0RXllXCI7XHJcbndoaXRlTGVmdEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMDc1LCAwLjEsIDAuMSwgWy0wLjc1LCAwLjIsIDAuMTVdKTtcclxud2hpdGVMZWZ0RXllLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzEuMDQsIDAsIDBdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG53aGl0ZUxlZnRFeWUucGlja2VkQ29sb3IgPSBbMC45OSwgMC45OSwgMC45OV07XHJcbndoaXRlTGVmdEV5ZS5kaWZmdXNlID0gWzAsIDAsIDBdO1xyXG53aGl0ZUxlZnRFeWUuc3BlY3VsYXIgPSBbMCwgMCwgMF07XHJcbndoaXRlTGVmdEV5ZS5hbWJpZW50ID0gWzEsIDEsIDFdO1xyXG53aGl0ZUxlZnRFeWUuc2hpbmluZXNzID0gMSxcclxud2hpdGVMZWZ0RXllLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbndoaXRlTGVmdEV5ZS52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG53aGl0ZUxlZnRFeWUuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogbnVsbCxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBudWxsLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbmNvbnN0IGJsYWNrTGVmdEV5ZSA9IG5ldyBOb2RlKCk7XHJcbmJsYWNrTGVmdEV5ZS5uYW1lID0gXCJibGFja0xlZnRFeWVcIjtcclxuYmxhY2tMZWZ0RXllLm1vZGVsID0gYm94TW9kZWwoMC4wNSwgMC4wNSwgMC4wNSwgWy0wLjc1LCAwLjIsIDAuMTVdKTtcclxuYmxhY2tMZWZ0RXllLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuMDYsIDAsIDBdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5ibGFja0xlZnRFeWUucGlja2VkQ29sb3IgPSBbMCwgMCwgMF07XHJcbmJsYWNrTGVmdEV5ZS5kaWZmdXNlID0gWzAsIDAsIDBdO1xyXG5ibGFja0xlZnRFeWUuc3BlY3VsYXIgPSBbMCwgMCwgMF07XHJcbmJsYWNrTGVmdEV5ZS5hbWJpZW50ID0gWzEsIDEsIDFdO1xyXG5ibGFja0xlZnRFeWUuc2hpbmluZXNzID0gMSxcclxuYmxhY2tMZWZ0RXllLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmJsYWNrTGVmdEV5ZS52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5ibGFja0xlZnRFeWUuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogbnVsbCxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBudWxsLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxuXHJcbn07XHJcblxyXG5jb25zdCB3aGl0ZVJpZ2h0RXllID0gbmV3IE5vZGUoKTtcclxud2hpdGVSaWdodEV5ZS5uYW1lID0gXCJ3aGl0ZVJpZ2h0RXllXCI7XHJcbndoaXRlUmlnaHRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjA3NSwgMC4xLCAwLjEsIFstMC43NSwgMC4yLCAwLjE1XSk7XHJcbndoaXRlUmlnaHRFeWUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMS4wNCwgMCwgLTAuMzJdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG53aGl0ZVJpZ2h0RXllLnBpY2tlZENvbG9yID0gWzAuOTksIDAuOTksIDAuOTldO1xyXG53aGl0ZVJpZ2h0RXllLmRpZmZ1c2UgPSBbMCwgMCwgMF07XHJcbndoaXRlUmlnaHRFeWUuc3BlY3VsYXIgPSBbMCwgMCwgMF07XHJcbndoaXRlUmlnaHRFeWUuYW1iaWVudCA9IFsxLCAxLCAxXTtcclxud2hpdGVSaWdodEV5ZS5zaGluaW5lc3MgPSAxLFxyXG53aGl0ZVJpZ2h0RXllLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbndoaXRlUmlnaHRFeWUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxud2hpdGVSaWdodEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBudWxsLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IG51bGwsXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG5cclxufTtcclxuXHJcbmNvbnN0IGJsYWNrUmlnaHRFeWUgPSBuZXcgTm9kZSgpO1xyXG5ibGFja1JpZ2h0RXllLm5hbWUgPSBcImJsYWNrUmlnaHRFeWVcIjtcclxuYmxhY2tSaWdodEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMDUsIDAuMDUsIDAuMDUsIFstMC43NSwgMC4yLCAwLjE1XSk7XHJcbmJsYWNrUmlnaHRFeWUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMC4wNiwgMCwgMF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmJsYWNrUmlnaHRFeWUucGlja2VkQ29sb3IgPSBbMCwgMCwgMF07XHJcbmJsYWNrUmlnaHRFeWUuZGlmZnVzZSA9IFswLCAwLCAwXTtcclxuYmxhY2tSaWdodEV5ZS5zcGVjdWxhciA9IFswLCAwLCAwXTtcclxuYmxhY2tSaWdodEV5ZS5hbWJpZW50ID0gWzEsIDEsIDFdO1xyXG5ibGFja1JpZ2h0RXllLnNoaW5pbmVzcyA9IDEsXHJcbmJsYWNrUmlnaHRFeWUuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxuYmxhY2tSaWdodEV5ZS52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5ibGFja1JpZ2h0RXllLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IG51bGwsXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogbnVsbCxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG5cclxuXHJcbi8vIENyZWF0ZSB0aGUgbGVmdCB3aW5nIG5vZGVcclxuY29uc3QgbGVmdFdpbmcgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0V2luZy5uYW1lID0gXCJsZWZ0V2luZ1wiO1xyXG5sZWZ0V2luZy5tb2RlbCA9IGJveE1vZGVsKDAuNSwgMC4xLCAxLCBbMCwgMCwgMF0pO1xyXG5sZWZ0V2luZy50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLCAwLCAtMC43NV0sXHJcbiAgICByb3RhdGU6IFswLCAwLCA5MF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5sZWZ0V2luZy5waWNrZWRDb2xvciA9IFswLjksIDAuOSwgMF07XHJcbmxlZnRXaW5nLmRpZmZ1c2UgPSBbMCwgMCwgMF07XHJcbmxlZnRXaW5nLnNwZWN1bGFyID0gWzAsIDAsIDBdO1xyXG5sZWZ0V2luZy5hbWJpZW50ID0gWzEsIDEsIDFdO1xyXG5sZWZ0V2luZy5zaGluaW5lc3MgPSAxLFxyXG5sZWZ0V2luZy5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5sZWZ0V2luZy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gbGVmdFdpbmdGcmFtZXMoKXtcclxuXHJcbiAgICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgICAgIHRyYW5zbGF0ZTogWzAsIDAsIC0wLjc1XSxcclxuICAgICAgICByb3RhdGU6IFswLCAwLCBNYXRoLlBJIC8gMl0sXHJcbiAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICAgIH1cclxuICAgIGxldCBmcmFtZXMgPSBbXVxyXG4gICAgZm9yKGxldCBrID0gMDsgayA8IDQ7ICsrayl7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8PSAxMjsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IC1NYXRoLlBJIC8gOSArIE1hdGguUEkvOSAqIGkgLyA2O1xyXG4gICAgICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaSA9MCA7IGkgPD0gMTI7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSBNYXRoLlBJIC8gOSAtIE1hdGguUEkvOSAqIGkgLyA2O1xyXG4gICAgICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBmcm9tIC1waS85IHRvIDBcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gNjsgaSsrKXtcclxuICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSAtTWF0aC5QSSAvIDkgKyBNYXRoLlBJLzkgKiBpIC8gNjtcclxuICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTsgXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnJhbWVzO1xyXG5cclxufVxyXG5cclxubGVmdFdpbmcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogbGVmdFdpbmdGcmFtZXMoKSxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuLy8gQ3JlYXRlIHRoZSByaWdodCB3aW5nIG5vZGVcclxuY29uc3QgcmlnaHRXaW5nID0gbmV3IE5vZGUoKTtcclxucmlnaHRXaW5nLm5hbWUgPSBcInJpZ2h0V2luZ1wiO1xyXG5yaWdodFdpbmcubW9kZWwgPSBib3hNb2RlbCgwLjUsIDAuMSwgMSwgWzAsIDAsIDBdKTtcclxucmlnaHRXaW5nLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAsIDAsIDAuNzVdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgOTBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRXaW5nLnBpY2tlZENvbG9yID0gWzAuOSwgMC45LCAwXTtcclxucmlnaHRXaW5nLmRpZmZ1c2UgPSBbMCwgMCwgMF07XHJcbnJpZ2h0V2luZy5zcGVjdWxhciA9IFswLCAwLCAwXTtcclxucmlnaHRXaW5nLmFtYmllbnQgPSBbMSwgMSwgMV07XHJcbnJpZ2h0V2luZy5zaGluaW5lc3MgPSAxLFxyXG5yaWdodFdpbmcuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxucmlnaHRXaW5nLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcblxyXG5mdW5jdGlvbiByaWdodFdpbmdGcmFtZXMoKXtcclxuICAgIGxldCB0cmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgdHJhbnNsYXRlOiBbMCwgMCwgMC43NV0sXHJcbiAgICAgICAgcm90YXRlOiBbMCwgMCwgTWF0aC5QSSAvIDJdLFxyXG4gICAgICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgICB9XHJcbiAgICBsZXQgZnJhbWVzID0gW11cclxuICAgIGZvcihsZXQgayA9IDA7IGsgPCA0OyArK2spe1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gMTI7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSBNYXRoLlBJIC8gOSAtIE1hdGguUEkvOSAqIGkgLyA2O1xyXG4gICAgICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaSA9MCA7IGkgPD0gMTI7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSAtIE1hdGguUEkgLyA5ICsgTWF0aC5QSS85ICogaSAvIDY7XHJcbiAgICAgICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGZyb20gcGkvNiB0byAwXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDw9IDY7IGkrKyl7XHJcbiAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gTWF0aC5QSSAvIDkgLSBNYXRoLlBJLzkgKiBpIC8gNjtcclxuICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTsgXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnJhbWVzO1xyXG5cclxufVxyXG5cclxucmlnaHRXaW5nLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IHJpZ2h0V2luZ0ZyYW1lcygpLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG4vLyBDcmVhdGUgdGhlIHJpZ2h0IGxlZyBub2RlXHJcbmNvbnN0IHJpZ2h0TGVnID0gbmV3IE5vZGUoKTtcclxucmlnaHRMZWcubmFtZSA9IFwicmlnaHRMZWdcIjtcclxucmlnaHRMZWcubW9kZWwgPSBib3hNb2RlbCgwLjYsIDAuMiwgMC4yLCBbMCwgMCwgMF0pO1xyXG5yaWdodExlZy50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFstMC41LCAtMC44LCAtMC4zNV0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnJpZ2h0TGVnLnBpY2tlZENvbG9yID0gWzEsIDAuNSwgMF07XHJcbnJpZ2h0TGVnLmRpZmZ1c2UgPSBbMCwgMCwgMF07XHJcbnJpZ2h0TGVnLnNwZWN1bGFyID0gWzAsIDAsIDBdO1xyXG5yaWdodExlZy5hbWJpZW50ID0gWzEsIDEsIDFdO1xyXG5yaWdodExlZy5zaGluaW5lc3MgPSAxLFxyXG5yaWdodExlZy5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5yaWdodExlZy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmlnaHRMZWdGcmFtZXMoKXtcclxuICAgIGxldCB0cmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgdHJhbnNsYXRlOiBbLTAuNSwgLTAuOCwgLTAuMzVdLFxyXG4gICAgICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgICB9XHJcbiAgICBsZXQgZnJhbWVzID0gW11cclxuICAgIGZvcihsZXQgayA9IDA7IGsgPCA0OyArK2spe1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gMTI7IGkrKyl7XHJcbiAgICAgICAgICAgIC8vIGFwcGVuZCBmb3IgYW5nbGUgcGkvNiAtIHBpLzMgKiBpLzEyIHRvIGZyYW1lc1xyXG4gICAgICAgICAgICAvLyBjbG9uZSB0aGUgdHJhbnNmb3JtIG9iamVjdFxyXG4gICAgICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzJdID0gTWF0aC5QSSAvIDYgLSBNYXRoLlBJLzMgKiBpIC8gMTI7XHJcbiAgICAgICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpID0wIDsgaSA8PSAxMjsgaSsrKXtcclxuICAgICAgICAgICAgLy8gYXBwZW5kIGZvciBhbmdsZSBwaS82ICogaS8xMiB0byBmcmFtZXNcclxuICAgICAgICAgICAgLy8gY2xvbmUgdGhlIHRyYW5zZm9ybSBvYmplY3RcclxuICAgICAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVsyXSA9IC0gTWF0aC5QSSAvIDYgKyBNYXRoLlBJLzMgKiBpIC8gMTI7XHJcbiAgICAgICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGZyb20gcGkvNiB0byAwXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDw9IDY7IGkrKyl7XHJcbiAgICAgICAgLy8gYXBwZW5kIGZvciBhbmdsZSBwaS82IC0gcGkvMyAqIGkvMTIgdG8gZnJhbWVzXHJcbiAgICAgICAgLy8gY2xvbmUgdGhlIHRyYW5zZm9ybSBvYmplY3RcclxuICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMl0gPSBNYXRoLlBJIC8gNiAtIE1hdGguUEkvNiAqIGkgLyA2O1xyXG4gICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pOyBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZnJhbWVzO1xyXG59XHJcblxyXG5cclxucmlnaHRMZWcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lcyA6IHJpZ2h0TGVnRnJhbWVzKCksXHJcbiAgICBjdXJyZW50RnJhbWUgOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG4vLyBjcmV0ZSB0aGUgcmlnaHQgZm9vdCBub2RlXHJcbmNvbnN0IHJpZ2h0Rm9vdCA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0Rm9vdC5uYW1lID0gXCJyaWdodEZvb3RcIjtcclxucmlnaHRGb290Lm1vZGVsID0gYm94TW9kZWwoMC4xLCAwLjQsIDAuMywgWzAsIDAsIDBdKTtcclxucmlnaHRGb290LnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuMDIsIC0wLjM0LCAwXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRGb290LnBpY2tlZENvbG9yID0gWzEsIDAuNSwgMF07XHJcbnJpZ2h0Rm9vdC5kaWZmdXNlID0gWzAsIDAsIDBdO1xyXG5yaWdodEZvb3Quc3BlY3VsYXIgPSBbMCwgMCwgMF07XHJcbnJpZ2h0Rm9vdC5hbWJpZW50ID0gWzEsIDEsIDFdO1xyXG5yaWdodEZvb3Quc2hpbmluZXNzID0gMSxcclxucmlnaHRGb290LmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbnJpZ2h0Rm9vdC52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5yaWdodEZvb3QuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogbnVsbCxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBudWxsLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbi8vIENyZWF0ZSB0aGUgbGVmdCBsZWcgbm9kZVxyXG5jb25zdCBsZWZ0TGVnID0gbmV3IE5vZGUoKTtcclxubGVmdExlZy5uYW1lID0gXCJsZWZ0TGVnXCI7XHJcbmxlZnRMZWcubW9kZWwgPSBib3hNb2RlbCgwLjYsIDAuMiwgMC4yLCBbMCwgMCwgMF0pO1xyXG5sZWZ0TGVnLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWy0wLjUsIC0wLjgsIDAuMzVdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5sZWZ0TGVnLnBpY2tlZENvbG9yID0gWzEsIDAuNSwgMF07XHJcbmxlZnRMZWcuZGlmZnVzZSA9IFswLCAwLCAwXTtcclxubGVmdExlZy5zcGVjdWxhciA9IFswLCAwLCAwXTtcclxubGVmdExlZy5hbWJpZW50ID0gWzEsIDEsIDFdO1xyXG5sZWZ0TGVnLnNoaW5pbmVzcyA9IDEsXHJcbmxlZnRMZWcuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxubGVmdExlZy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gbGVmdExlZ0ZyYW1lcygpe1xyXG4gICAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgICAgICB0cmFuc2xhdGU6IFstMC41LCAtMC44LCAwLjM1XSxcclxuICAgICAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgICAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG4gICAgfVxyXG4gICAgbGV0IGZyYW1lcyA9IFtdXHJcbiAgICBmb3IobGV0IGsgPSAwOyBrIDwgNDsgKytrKXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDw9IDEyOyBpKyspe1xyXG4gICAgICAgICAgICAvLyBhcHBlbmQgZm9yIGFuZ2xlIHBpLzYgLSBwaS8zICogaS8xMiB0byBmcmFtZXNcclxuICAgICAgICAgICAgLy8gY2xvbmUgdGhlIHRyYW5zZm9ybSBvYmplY3RcclxuICAgICAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVsyXSA9IC0gTWF0aC5QSSAvIDYgKyBNYXRoLlBJLzMgKiBpIC8gMTI7XHJcbiAgICAgICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpID0wIDsgaSA8PSAxMjsgaSsrKXtcclxuICAgICAgICAgICAgLy8gYXBwZW5kIGZvciBhbmdsZSBwaS82ICogaS8xMiB0byBmcmFtZXNcclxuICAgICAgICAgICAgLy8gY2xvbmUgdGhlIHRyYW5zZm9ybSBvYmplY3RcclxuICAgICAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVsyXSA9IE1hdGguUEkgLyA2IC0gTWF0aC5QSS8zICogaSAvIDEyO1xyXG4gICAgICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBmcm9tIC1waS82IHRvIDBcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gNjsgaSsrKXtcclxuICAgICAgICAvLyBhcHBlbmQgZm9yIGFuZ2xlIHBpLzYgLSBwaS8zICogaS8xMiB0byBmcmFtZXNcclxuICAgICAgICAvLyBjbG9uZSB0aGUgdHJhbnNmb3JtIG9iamVjdFxyXG4gICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVsyXSA9IC1NYXRoLlBJIC8gNiArIE1hdGguUEkvNiAqIGkgLyA2O1xyXG4gICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pOyBcclxuICAgIH1cclxuICAgIHJldHVybiBmcmFtZXM7XHJcbn1cclxuXHJcbmxlZnRMZWcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lcyA6IGxlZnRMZWdGcmFtZXMoKSxcclxuICAgIGN1cnJlbnRGcmFtZSA6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogQW5pbWF0aW9uLmFuaW1hdGlvblNjcmlwdCgpLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbi8vIENyZWF0ZSB0aGUgbGVmdCBmb290IG5vZGVcclxuY29uc3QgbGVmdEZvb3QgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0Rm9vdC5uYW1lID0gXCJsZWZ0Rm9vdFwiO1xyXG5sZWZ0Rm9vdC5tb2RlbCA9IGJveE1vZGVsKDAuMSwgMC40LCAwLjMsIFswLCAwLCAwXSk7XHJcbmxlZnRGb290LnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuMDIsIC0wLjM0LCAwXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubGVmdEZvb3QucGlja2VkQ29sb3IgPSBbMSwgMC41LCAwXTtcclxubGVmdEZvb3QuZGlmZnVzZSA9IFswLCAwLCAwXTtcclxubGVmdEZvb3Quc3BlY3VsYXIgPSBbMCwgMCwgMF07XHJcbmxlZnRGb290LmFtYmllbnQgPSBbMSwgMSwgMV07XHJcbmxlZnRGb290LnNoaW5pbmVzcyA9IDEsXHJcbmxlZnRGb290LmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmxlZnRGb290LnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmxlZnRGb290LmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IG51bGwsXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogbnVsbCxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG4vLyBDcmVhdGUgdGhlIHRhaWwgbm9kZVxyXG5jb25zdCB0YWlsID0gbmV3IE5vZGUoKTtcclxudGFpbC5uYW1lID0gXCJ0YWlsXCI7XHJcblxyXG5cclxuLy8gQXNzZW1ibGUgdGhlIGNoaWNrZW4gbW9kZWxcclxuLy8gY2hpY2tlbi5hZGRDaGlsZChoZWFkKTtcclxuLy8gaGVhZC5hZGRDaGlsZChiZWFrKTtcclxuLy8gY2hpY2tlbi5hZGRDaGlsZChsZWZ0V2luZyk7XHJcbi8vIGNoaWNrZW4uYWRkQ2hpbGQocmlnaHRXaW5nKTtcclxuLy8gY2hpY2tlbi5hZGRDaGlsZChsZWZ0TGVnKTtcclxuLy8gY2hpY2tlbi5hZGRDaGlsZChyaWdodExlZyk7XHJcblxyXG4vLyBBc3NlbWJsZSB0aGUgY2hpY2tlbiBtb2RlbFxyXG5oZWFkLnNldFBhcmVudChjaGlja2VuKTtcclxuYmVhay5zZXRQYXJlbnQoaGVhZCk7XHJcbndoaXRlUmlnaHRFeWUuc2V0UGFyZW50KGhlYWQpO1xyXG5ibGFja1JpZ2h0RXllLnNldFBhcmVudCh3aGl0ZVJpZ2h0RXllKTtcclxud2hpdGVMZWZ0RXllLnNldFBhcmVudChoZWFkKTtcclxuYmxhY2tMZWZ0RXllLnNldFBhcmVudCh3aGl0ZUxlZnRFeWUpO1xyXG5sZWZ0V2luZy5zZXRQYXJlbnQoY2hpY2tlbik7XHJcbnJpZ2h0V2luZy5zZXRQYXJlbnQoY2hpY2tlbik7XHJcbmxlZnRMZWcuc2V0UGFyZW50KGNoaWNrZW4pO1xyXG5sZWZ0Rm9vdC5zZXRQYXJlbnQobGVmdExlZyk7XHJcbnJpZ2h0TGVnLnNldFBhcmVudChjaGlja2VuKTtcclxucmlnaHRGb290LnNldFBhcmVudChyaWdodExlZyk7XHJcblxyXG5cclxudmFyIGNoaWNrZW5Nb2RlbCA9IFtcclxuICBjaGlja2VuXHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoaWNrZW5Nb2RlbDtcclxuIiwiaW1wb3J0IE5vZGUgZnJvbSBcIi4uL25vZGUuanNcIjtcclxuaW1wb3J0IHsgZGVnVG9SYWQgfSBmcm9tIFwiLi4vbWF0aC9tYXRoVXRpbHMuanNcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vdXRpbHMvQW5pbWF0aW9uLmpzXCI7XHJcbmltcG9ydCBib3hNb2RlbCwge2dlbmVyYXRlRmFjZXMsIGdlbmVyYXRlTm9ybWFscywgZ2VuZXJhdGVWZXJ0aWNlc30gZnJvbSBcIi4uL2JveE1vZGVsLmpzXCI7XHJcblxyXG5jb25zdCBib2R5Q29sb3IgPSBbMC44ODYsIDAuMzQ1LCAwLjEzM107XHJcbmNvbnN0IHdoaXRlQ29sb3IgPSBbMC45OSwgMC45OSwgMC45OV07XHJcbmNvbnN0IGJsYWNrQ29sb3IgPSBbMCwgMCwgMF07XHJcbmNvbnN0IGJyb3duQ29sb3IgPSBbMC41NDUsIDAuMjcxLCAwLjA3NV07XHJcblxyXG5jb25zdCBmb3ggPSBuZXcgTm9kZSgpO1xyXG5mb3gubmFtZSA9IFwiZm94XCI7XHJcbmZveC5tb2RlbCA9IGJveE1vZGVsKDAuNiwgMC43LCAxLCBbMCwgMCwgMF0pOyBcclxuZm94LnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLCAwLCAwXSxcclxuICByb3RhdGU6IFszMCw0NSwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuZm94LnBpY2tlZENvbG9yID0gYm9keUNvbG9yO1xyXG5mb3guZGlmZnVzZSA9IFsxLDEsMV0sXHJcbmZveC5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbmZveC5hbWJpZW50ID0gWzEsMSwxXSxcclxuZm94LnNoaW5pbmVzcyA9IDEsXHJcbmZveC5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5mb3gudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5mb3guYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZnJhbWVzOiBmb3hGcmFtZXMoKSxcclxuICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICBpc0F1dG86IGZhbHNlLFxyXG4gIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbmZ1bmN0aW9uIGZveEZyYW1lcygpIHtcclxuICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMCwgMCwgMF0sXHJcbiAgICByb3RhdGU6IFtkZWdUb1JhZCgzMCksIGRlZ1RvUmFkKDQ1KSwgZGVnVG9SYWQoMCldLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICB9XHJcbiAgbGV0IGZyYW1lcyA9IFtdXHJcbiAgZm9yKGxldCBrID0gMDsgayA8IDUwOyArK2spe1xyXG4gICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgIF90cmFuc2Zvcm0udHJhbnNsYXRlWzBdID0gIGsgLyA1MCA7XHJcbiAgICAgIF90cmFuc2Zvcm0udHJhbnNsYXRlWzJdID0gIGsgLyA1MCA7XHJcbiAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZyYW1lcztcclxuXHJcbn1cclxuXHJcbmNvbnN0IGhlYWQgPSBuZXcgTm9kZSgpO1xyXG5oZWFkLm5hbWUgPSBcImhlYWRcIjtcclxuaGVhZC5tb2RlbCA9IGJveE1vZGVsKDAuNSwgMC41LCAwLjQsIFswLCAwLCAwXSk7XHJcbmhlYWQudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAsIDAuMSwgMC43XSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuaGVhZC5waWNrZWRDb2xvciA9IGJvZHlDb2xvcjtcclxuaGVhZC5kaWZmdXNlID0gWzEsMSwxXSxcclxuaGVhZC5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbmhlYWQuYW1iaWVudCA9IFsxLDEsMV0sXHJcbmhlYWQuc2hpbmluZXNzID0gMSxcclxuaGVhZC5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5oZWFkLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxuaGVhZC5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCB3aGl0ZVJpZ2h0RXllID0gbmV3IE5vZGUoKTtcclxud2hpdGVSaWdodEV5ZS5uYW1lID0gXCJ3aGl0ZVJpZ2h0RXllXCI7XHJcbndoaXRlUmlnaHRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjEsIDAuMSwgMC4wNSwgWzAsIDAsIDBdKTtcclxud2hpdGVSaWdodEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMC4xNSwgMC4xLCAwLjJdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG53aGl0ZVJpZ2h0RXllLnBpY2tlZENvbG9yID0gd2hpdGVDb2xvcjtcclxud2hpdGVSaWdodEV5ZS5kaWZmdXNlID0gWzEsMSwxXSxcclxud2hpdGVSaWdodEV5ZS5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbndoaXRlUmlnaHRFeWUuYW1iaWVudCA9IFsxLDEsMV0sXHJcbndoaXRlUmlnaHRFeWUuc2hpbmluZXNzID0gMSxcclxud2hpdGVSaWdodEV5ZS5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG53aGl0ZVJpZ2h0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxud2hpdGVSaWdodEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCB3aGl0ZUxlZnRFeWUgPSBuZXcgTm9kZSgpO1xyXG53aGl0ZUxlZnRFeWUubmFtZSA9IFwid2hpdGVMZWZ0RXllXCI7XHJcbndoaXRlTGVmdEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMSwgMC4xLCAwLjA1LCBbMCwgMCwgMF0pO1xyXG53aGl0ZUxlZnRFeWUudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWy0wLjE1LCAwLjEsIDAuMl0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbndoaXRlTGVmdEV5ZS5waWNrZWRDb2xvciA9IHdoaXRlQ29sb3I7XHJcbndoaXRlTGVmdEV5ZS5kaWZmdXNlID0gWzEsMSwxXSxcclxud2hpdGVMZWZ0RXllLnNwZWN1bGFyID0gWzEsMSwxXSxcclxud2hpdGVMZWZ0RXllLmFtYmllbnQgPSBbMSwxLDFdLFxyXG53aGl0ZUxlZnRFeWUuc2hpbmluZXNzID0gMSxcclxud2hpdGVMZWZ0RXllLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbndoaXRlTGVmdEV5ZS52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbndoaXRlTGVmdEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCBibGFja1JpZ2h0RXllID0gbmV3IE5vZGUoKTtcclxuYmxhY2tSaWdodEV5ZS5uYW1lID0gXCJibGFja1JpZ2h0RXllXCI7XHJcbmJsYWNrUmlnaHRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjEsIDAuMDYsIDAuMDUsIFswLCAwLCAwXSk7XHJcbmJsYWNrUmlnaHRFeWUudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWy0wLjAzLCAwLCAwLjAxXSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuYmxhY2tSaWdodEV5ZS5waWNrZWRDb2xvciA9IGJsYWNrQ29sb3I7XHJcbmJsYWNrUmlnaHRFeWUuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbmJsYWNrUmlnaHRFeWUuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5ibGFja1JpZ2h0RXllLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5ibGFja1JpZ2h0RXllLnNoaW5pbmVzcyA9IDEsXHJcbmJsYWNrUmlnaHRFeWUuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxuYmxhY2tSaWdodEV5ZS52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbmJsYWNrUmlnaHRFeWUuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgYmxhY2tMZWZ0RXllID0gbmV3IE5vZGUoKTtcclxuYmxhY2tMZWZ0RXllLm5hbWUgPSBcImJsYWNrTGVmdEV5ZVwiO1xyXG5ibGFja0xlZnRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjEsIDAuMDYsIDAuMDUsIFswLCAwLCAwXSk7XHJcbmJsYWNrTGVmdEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMC4wMywgMCwgMC4wMV0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmJsYWNrTGVmdEV5ZS5waWNrZWRDb2xvciA9IGJsYWNrQ29sb3I7XHJcbmJsYWNrTGVmdEV5ZS5kaWZmdXNlID0gWzEsMSwxXSxcclxuYmxhY2tMZWZ0RXllLnNwZWN1bGFyID0gWzEsMSwxXSxcclxuYmxhY2tMZWZ0RXllLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5ibGFja0xlZnRFeWUuc2hpbmluZXNzID0gMSxcclxuYmxhY2tMZWZ0RXllLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmJsYWNrTGVmdEV5ZS52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbmJsYWNrTGVmdEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCBub3NlID0gbmV3IE5vZGUoKTtcclxubm9zZS5uYW1lID0gXCJub3NlXCI7XHJcbm5vc2UubW9kZWwgPSBib3hNb2RlbCgwLjE1LCAwLjMsIDAuMiwgWzAsIDAsIDBdKTtcclxubm9zZS50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMCwgLTAuMSwgMC4zXSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubm9zZS5waWNrZWRDb2xvciA9IGJsYWNrQ29sb3I7XHJcbm5vc2UuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbm5vc2Uuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5ub3NlLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5ub3NlLnNoaW5pbmVzcyA9IDEsXHJcbm5vc2UuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxubm9zZS52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbm5vc2UuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgdW5kZXJub3NlID0gbmV3IE5vZGUoKTtcclxudW5kZXJub3NlLm5hbWUgPSBcInVuZGVybm9zZVwiO1xyXG51bmRlcm5vc2UubW9kZWwgPSBib3hNb2RlbCgwLjEsIDAuMywgMC4yLCBbMCwgMCwgMF0pO1xyXG51bmRlcm5vc2UudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAsIC0wLjIsIDAuM10sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnVuZGVybm9zZS5waWNrZWRDb2xvciA9IHdoaXRlQ29sb3I7XHJcbnVuZGVybm9zZS5kaWZmdXNlID0gWzEsMSwxXSxcclxudW5kZXJub3NlLnNwZWN1bGFyID0gWzEsMSwxXSxcclxudW5kZXJub3NlLmFtYmllbnQgPSBbMSwxLDFdLFxyXG51bmRlcm5vc2Uuc2hpbmluZXNzID0gMSxcclxudW5kZXJub3NlLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbnVuZGVybm9zZS52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbnVuZGVybm9zZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCByaWdodEVhciA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0RWFyLm5hbWUgPSBcInJpZ2h0RWFyXCI7XHJcbnJpZ2h0RWFyLm1vZGVsID0gYm94TW9kZWwoMC4yLCAwLjIsIDAuMSwgWzAsIDAsIDBdKTtcclxucmlnaHRFYXIudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAuMTUsIDAuMzUsIDBdLFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnJpZ2h0RWFyLnBpY2tlZENvbG9yID0gYmxhY2tDb2xvcjtcclxucmlnaHRFYXIuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbnJpZ2h0RWFyLnNwZWN1bGFyID0gWzEsMSwxXSxcclxucmlnaHRFYXIuYW1iaWVudCA9IFsxLDEsMV0sXHJcbnJpZ2h0RWFyLnNoaW5pbmVzcyA9IDEsXHJcbnJpZ2h0RWFyLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbnJpZ2h0RWFyLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxucmlnaHRFYXIuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgbGVmdEVhciA9IG5ldyBOb2RlKCk7XHJcbmxlZnRFYXIubmFtZSA9IFwibGVmdEVhclwiO1xyXG5sZWZ0RWFyLm1vZGVsID0gYm94TW9kZWwoMC4yLCAwLjIsIDAuMSwgWzAsIDAsIDBdKTtcclxubGVmdEVhci50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbLTAuMTUsIDAuMzUsIDBdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5sZWZ0RWFyLnBpY2tlZENvbG9yID0gYmxhY2tDb2xvcjtcclxubGVmdEVhci5kaWZmdXNlID0gWzEsMSwxXSxcclxubGVmdEVhci5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbmxlZnRFYXIuYW1iaWVudCA9IFsxLDEsMV0sXHJcbmxlZnRFYXIuc2hpbmluZXNzID0gMSxcclxubGVmdEVhci5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5sZWZ0RWFyLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxubGVmdEVhci5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCByaWdodEZyb250TGVnID0gbmV3IE5vZGUoKTtcclxucmlnaHRGcm9udExlZy5uYW1lID0gXCJyaWdodEZyb250TGVnXCI7XHJcbnJpZ2h0RnJvbnRMZWcubW9kZWwgPSBib3hNb2RlbCgxLCAwLjIsIDAuMTUsIFswLCAwLCAwXSk7XHJcbnJpZ2h0RnJvbnRMZWcudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAuMiwgLTAuMjUsIDAuMl0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnJpZ2h0RnJvbnRMZWcucGlja2VkQ29sb3IgPSBibGFja0NvbG9yO1xyXG5yaWdodEZyb250TGVnLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5yaWdodEZyb250TGVnLnNwZWN1bGFyID0gWzEsMSwxXSxcclxucmlnaHRGcm9udExlZy5hbWJpZW50ID0gWzEsMSwxXSxcclxucmlnaHRGcm9udExlZy5zaGluaW5lc3MgPSAxLFxyXG5yaWdodEZyb250TGVnLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbnJpZ2h0RnJvbnRMZWcudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5yaWdodEZyb250TGVnLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGZyYW1lczogcmlnaHRGcm9udExlZ0ZyYW1lcygpLFxyXG4gIGN1cnJlbnRGcmFtZTogMCxcclxuICBhbmltYXRpb25GdW5jdGlvbjogQW5pbWF0aW9uLmFuaW1hdGlvblNjcmlwdCgpLFxyXG4gIGlzQXV0bzogZmFsc2UsXHJcbiAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmlnaHRGcm9udExlZ0ZyYW1lcyAoKSB7XHJcbiAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuMiwgLTAuMjUsIDAuMl0sIFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG4gIH1cclxuICBsZXQgZnJhbWVzID0gW11cclxuICBmb3IobGV0IGsgPSAwOyBrIDwgMjU7ICsrayl7XHJcbiAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSBkZWdUb1JhZCgtayk7XHJcbiAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gIH1cclxuXHJcbiAgZm9yKGxldCBrID0gMDsgayA8IDI1OyArK2spe1xyXG4gICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSBkZWdUb1JhZChrKTtcclxuICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gIH1cclxuICByZXR1cm4gZnJhbWVzO1xyXG5cclxufVxyXG5cclxuY29uc3QgcmlnaHRGcm9udFRvZSA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0RnJvbnRUb2UubmFtZSA9IFwicmlnaHRGcm9udFRvZVwiO1xyXG5yaWdodEZyb250VG9lLm1vZGVsID0gYm94TW9kZWwoMC4xLCAwLjIsIDAuMiwgWzAsIDAsIDBdKTtcclxucmlnaHRGcm9udFRvZS50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMCwgLTAuNDUsIDAuMDVdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5yaWdodEZyb250VG9lLnBpY2tlZENvbG9yID0gd2hpdGVDb2xvcjtcclxucmlnaHRGcm9udFRvZS5kaWZmdXNlID0gWzEsMSwxXSxcclxucmlnaHRGcm9udFRvZS5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbnJpZ2h0RnJvbnRUb2UuYW1iaWVudCA9IFsxLDEsMV0sXHJcbnJpZ2h0RnJvbnRUb2Uuc2hpbmluZXNzID0gMSxcclxucmlnaHRGcm9udFRvZS5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5yaWdodEZyb250VG9lLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxucmlnaHRGcm9udFRvZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCBsZWZ0RnJvbnRMZWcgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0RnJvbnRMZWcubmFtZSA9IFwibGVmdEZyb250TGVnXCI7XHJcbmxlZnRGcm9udExlZy5tb2RlbCA9IGJveE1vZGVsKDEsIDAuMiwgMC4xNSwgWzAsIDAsIDBdKTtcclxubGVmdEZyb250TGVnLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFstMC4yLCAtMC4yNSwgMC4yXSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubGVmdEZyb250TGVnLnBpY2tlZENvbG9yID0gYmxhY2tDb2xvcjtcclxubGVmdEZyb250TGVnLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5sZWZ0RnJvbnRMZWcuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5sZWZ0RnJvbnRMZWcuYW1iaWVudCA9IFsxLDEsMV0sXHJcbmxlZnRGcm9udExlZy5zaGluaW5lc3MgPSAxLFxyXG5sZWZ0RnJvbnRMZWcuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxubGVmdEZyb250TGVnLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxubGVmdEZyb250TGVnLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGZyYW1lczogbGVmdEZyb250TGVnRnJhbWVzKCksXHJcbiAgY3VycmVudEZyYW1lOiAwLFxyXG4gIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgaXNBdXRvOiBmYWxzZSxcclxuICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG5mdW5jdGlvbiBsZWZ0RnJvbnRMZWdGcmFtZXMgKCkge1xyXG4gIGxldCB0cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFstMC4yLCAtMC4yNSwgMC4yXSwgXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgfVxyXG4gIGxldCBmcmFtZXMgPSBbXVxyXG5cclxuICBmb3IobGV0IGsgPSAwOyBrIDwgMjU7ICsrayl7XHJcbiAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IGRlZ1RvUmFkKGspO1xyXG4gICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgfVxyXG4gIGZvcihsZXQgayA9IDA7IGsgPCAyNTsgKytrKXtcclxuICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gZGVnVG9SYWQoLWspO1xyXG4gICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgfVxyXG4gIHJldHVybiBmcmFtZXM7XHJcblxyXG59XHJcblxyXG5jb25zdCBsZWZ0RnJvbnRUb2UgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0RnJvbnRUb2UubmFtZSA9IFwibGVmdEZyb250VG9lXCI7XHJcbmxlZnRGcm9udFRvZS5tb2RlbCA9IGJveE1vZGVsKDAuMSwgMC4yLCAwLjE1LCBbMCwgMCwgMF0pO1xyXG5sZWZ0RnJvbnRUb2UudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWy0wLCAtMC40NSwgMC4wNV0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmxlZnRGcm9udFRvZS5waWNrZWRDb2xvciA9IHdoaXRlQ29sb3I7XHJcbmxlZnRGcm9udFRvZS5kaWZmdXNlID0gWzEsMSwxXSxcclxubGVmdEZyb250VG9lLnNwZWN1bGFyID0gWzEsMSwxXSxcclxubGVmdEZyb250VG9lLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5sZWZ0RnJvbnRUb2Uuc2hpbmluZXNzID0gMSxcclxubGVmdEZyb250VG9lLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmxlZnRGcm9udFRvZS52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbmxlZnRGcm9udFRvZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCByaWdodFJlYXJMZWcgPSBuZXcgTm9kZSgpO1xyXG5yaWdodFJlYXJMZWcubmFtZSA9IFwicmlnaHRSZWFyTGVnXCI7XHJcbnJpZ2h0UmVhckxlZy5tb2RlbCA9IGJveE1vZGVsKDEsIDAuMiwgMC4xNSwgWzAsIDAsIDBdKTtcclxucmlnaHRSZWFyTGVnLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLjIsIC0wLjI1LCAtMC4yXSxcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5yaWdodFJlYXJMZWcucGlja2VkQ29sb3IgPSBibGFja0NvbG9yO1xyXG5yaWdodFJlYXJMZWcuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbnJpZ2h0UmVhckxlZy5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbnJpZ2h0UmVhckxlZy5hbWJpZW50ID0gWzEsMSwxXSxcclxucmlnaHRSZWFyTGVnLnNoaW5pbmVzcyA9IDEsXHJcbnJpZ2h0UmVhckxlZy5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5yaWdodFJlYXJMZWcudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5yaWdodFJlYXJMZWcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogcmlnaHRSZWFyTGVnRnJhbWVzKCksXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogQW5pbWF0aW9uLmFuaW1hdGlvblNjcmlwdCgpLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJpZ2h0UmVhckxlZ0ZyYW1lcygpIHtcclxuICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMC4yLCAtMC4yNSwgLTAuMl0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgfVxyXG4gIGxldCBmcmFtZXMgPSBbXVxyXG4gIGZvcihsZXQgayA9IDA7IGsgPCAyNTsgKytrKXtcclxuICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gZGVnVG9SYWQoayAtIDIwKTtcclxuICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gIH1cclxuICBmb3IobGV0IGsgPSAwOyBrIDwgMjU7ICsrayl7XHJcbiAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSBkZWdUb1JhZCgtayArIDIwKTtcclxuICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgfVxyXG5cclxuICBcclxuXHJcbiAgcmV0dXJuIGZyYW1lcztcclxufVxyXG5cclxuY29uc3QgcmlnaHRSZWFyVG9lID0gbmV3IE5vZGUoKTtcclxucmlnaHRSZWFyVG9lLm5hbWUgPSBcInJpZ2h0UmVhclRvZVwiO1xyXG5yaWdodFJlYXJUb2UubW9kZWwgPSBib3hNb2RlbCgwLjEsIDAuMiwgMC4yLCBbMCwgMCwgMF0pO1xyXG5yaWdodFJlYXJUb2UudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAsIC0wLjQ1LCAwLjA1XSxcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5yaWdodFJlYXJUb2UucGlja2VkQ29sb3IgPSB3aGl0ZUNvbG9yO1xyXG5yaWdodFJlYXJUb2UuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbnJpZ2h0UmVhclRvZS5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbnJpZ2h0UmVhclRvZS5hbWJpZW50ID0gWzEsMSwxXSxcclxucmlnaHRSZWFyVG9lLnNoaW5pbmVzcyA9IDEsXHJcbnJpZ2h0UmVhclRvZS5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5yaWdodFJlYXJUb2Uudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5yaWdodFJlYXJUb2UuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgbGVmdFJlYXJMZWcgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0UmVhckxlZy5uYW1lID0gXCJsZWZ0UmVhckxlZ1wiO1xyXG5sZWZ0UmVhckxlZy5tb2RlbCA9IGJveE1vZGVsKDEsIDAuMiwgMC4xNSwgWzAsIDAsIDBdKTtcclxubGVmdFJlYXJMZWcudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWy0wLjIsIC0wLjI1LCAtMC4yXSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubGVmdFJlYXJMZWcucGlja2VkQ29sb3IgPSBibGFja0NvbG9yO1xyXG5sZWZ0UmVhckxlZy5kaWZmdXNlID0gWzEsMSwxXSxcclxubGVmdFJlYXJMZWcuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5sZWZ0UmVhckxlZy5hbWJpZW50ID0gWzEsMSwxXSxcclxubGVmdFJlYXJMZWcuc2hpbmluZXNzID0gMSxcclxubGVmdFJlYXJMZWcuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxubGVmdFJlYXJMZWcudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5sZWZ0UmVhckxlZy5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBmcmFtZXM6IGxlZnRSZWFyTGVnRnJhbWVzKCksXHJcbiAgY3VycmVudEZyYW1lOiAwLFxyXG4gIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgaXNBdXRvOiBmYWxzZSxcclxuICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG5mdW5jdGlvbiBsZWZ0UmVhckxlZ0ZyYW1lcygpIHtcclxuICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbLTAuMiwgLTAuMjUsIC0wLjJdLCBcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICB9XHJcbiAgbGV0IGZyYW1lcyA9IFtdXHJcbiAgZm9yKGxldCBrID0gMDsgayA8IDI1OyArK2spe1xyXG4gICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gZGVnVG9SYWQoLWsgKyAyMCk7XHJcbiAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gIH1cclxuXHJcbiAgZm9yKGxldCBrID0gMDsgayA8IDI1OyArK2spe1xyXG4gICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSBkZWdUb1JhZChrIC0gMjApO1xyXG4gICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgfVxyXG4gIHJldHVybiBmcmFtZXM7XHJcbn1cclxuXHJcbmNvbnN0IGxlZnRSZWFyVG9lID0gbmV3IE5vZGUoKTtcclxubGVmdFJlYXJUb2UubmFtZSA9IFwibGVmdFJlYXJUb2VcIjtcclxubGVmdFJlYXJUb2UubW9kZWwgPSBib3hNb2RlbCgwLjEsIDAuMiwgMC4yLCBbMCwgMCwgMF0pO1xyXG5sZWZ0UmVhclRvZS50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbLTAsIC0wLjQ1LCAwLjA1XSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubGVmdFJlYXJUb2UucGlja2VkQ29sb3IgPSB3aGl0ZUNvbG9yO1xyXG5sZWZ0UmVhclRvZS5kaWZmdXNlID0gWzEsMSwxXSxcclxubGVmdFJlYXJUb2Uuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5sZWZ0UmVhclRvZS5hbWJpZW50ID0gWzEsMSwxXSxcclxubGVmdFJlYXJUb2Uuc2hpbmluZXNzID0gMSxcclxubGVmdFJlYXJUb2UuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxubGVmdFJlYXJUb2Uudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5sZWZ0UmVhclRvZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCB0YWlsID0gbmV3IE5vZGUoKTtcclxudGFpbC5uYW1lID0gXCJ0YWlsXCI7XHJcbnRhaWwubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC40LCBbMCwgMCwgMF0pO1xyXG50YWlsLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLCAwLCAtMC42NV0sXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxudGFpbC5waWNrZWRDb2xvciA9IGJvZHlDb2xvcjtcclxudGFpbC5kaWZmdXNlID0gWzEsMSwxXSxcclxudGFpbC5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbnRhaWwuYW1iaWVudCA9IFsxLDEsMV0sXHJcbnRhaWwuc2hpbmluZXNzID0gMSxcclxudGFpbC5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG50YWlsLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxudGFpbC5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCB0YWlsZWRnZSA9IG5ldyBOb2RlKCk7XHJcbnRhaWxlZGdlLm5hbWUgPSBcInRhaWxlZGdlXCI7XHJcbnRhaWxlZGdlLm1vZGVsID0gYm94TW9kZWwoMC4yLCAwLjIsIDAuMiwgWzAsIDAsIDBdKTtcclxudGFpbGVkZ2UudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAsIDAsIC0wLjk1XSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxudGFpbGVkZ2UucGlja2VkQ29sb3IgPSB3aGl0ZUNvbG9yO1xyXG50YWlsZWRnZS5kaWZmdXNlID0gWzEsMSwxXSxcclxudGFpbGVkZ2Uuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG50YWlsZWRnZS5hbWJpZW50ID0gWzEsMSwxXSxcclxudGFpbGVkZ2Uuc2hpbmluZXNzID0gMSxcclxudGFpbGVkZ2UuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxudGFpbGVkZ2Uudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG50YWlsZWRnZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5oZWFkLnNldFBhcmVudChmb3gpO1xyXG5yaWdodEVhci5zZXRQYXJlbnQoaGVhZCk7XHJcbmxlZnRFYXIuc2V0UGFyZW50KGhlYWQpO1xyXG53aGl0ZVJpZ2h0RXllLnNldFBhcmVudChoZWFkKTtcclxud2hpdGVMZWZ0RXllLnNldFBhcmVudChoZWFkKTtcclxuYmxhY2tSaWdodEV5ZS5zZXRQYXJlbnQod2hpdGVSaWdodEV5ZSk7XHJcbmJsYWNrTGVmdEV5ZS5zZXRQYXJlbnQod2hpdGVMZWZ0RXllKTtcclxubm9zZS5zZXRQYXJlbnQoaGVhZCk7XHJcbnVuZGVybm9zZS5zZXRQYXJlbnQoaGVhZCk7XHJcbnJpZ2h0RnJvbnRMZWcuc2V0UGFyZW50KGZveCk7XHJcbnJpZ2h0RnJvbnRUb2Uuc2V0UGFyZW50KHJpZ2h0RnJvbnRMZWcpO1xyXG5sZWZ0RnJvbnRMZWcuc2V0UGFyZW50KGZveCk7XHJcbmxlZnRGcm9udFRvZS5zZXRQYXJlbnQobGVmdEZyb250TGVnKTtcclxucmlnaHRSZWFyTGVnLnNldFBhcmVudChmb3gpO1xyXG5yaWdodFJlYXJUb2Uuc2V0UGFyZW50KHJpZ2h0UmVhckxlZyk7XHJcbmxlZnRSZWFyTGVnLnNldFBhcmVudChmb3gpO1xyXG5sZWZ0UmVhclRvZS5zZXRQYXJlbnQobGVmdFJlYXJMZWcpO1xyXG50YWlsLnNldFBhcmVudChmb3gpO1xyXG50YWlsZWRnZS5zZXRQYXJlbnQoZm94KTtcclxuXHJcbnZhciBmb3hNb2RlbCA9IFtcclxuICBmb3hcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZveE1vZGVsO1xyXG4iLCJpbXBvcnQgTm9kZSBmcm9tIFwiLi4vbm9kZS5qc1wiO1xyXG5pbXBvcnQgeyBkZWdUb1JhZCB9IGZyb20gXCIuLi9tYXRoL21hdGhVdGlscy5qc1wiO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuLi8uLi91dGlscy9BbmltYXRpb24uanNcIjtcclxuaW1wb3J0IGJveE1vZGVsLCB7Z2VuZXJhdGVGYWNlcywgZ2VuZXJhdGVOb3JtYWxzLCBnZW5lcmF0ZVZlcnRpY2VzfSBmcm9tIFwiLi4vYm94TW9kZWwuanNcIjtcclxuXHJcbmZ1bmN0aW9uIGhvbGxvd1RoaW5neSgpIHtcclxuICAgIGxldCB2ZXJ0aWNlcyA9IFtdO1xyXG4gICAgbGV0IGNvbG9ycyA9IFtdO1xyXG4gICAgbGV0IHRhbmdlbnRzID0gW107XHJcbiAgICBsZXQgYml0YW5nZW50cyA9IFtdO1xyXG4gICAgbGV0IG5vcm1hbHMgPSBbXTtcclxuICAgIGxldCB0ZXhDb29yZCA9IFtdO1xyXG4gICAgbGV0IGZhY2VzID0gZ2VuZXJhdGVGYWNlcygpO1xyXG4gICAgXHJcbiAgICBjb25zdCBib3hlcyA9IFtcclxuICAgICAgeyBzaXplOiBbMC4yLCAwLjgsIDAuMl0sIHBvc2l0aW9uOiBbMCwgMSwgMF0gfSxcclxuICAgICAgeyBzaXplOiBbMC4yLCAwLjgsIDAuMl0sIHBvc2l0aW9uOiBbMCwgLTEsIDBdIH0sXHJcbiAgICAgIHsgc2l6ZTogWzEuOCwgMC4yLCAwLjJdLCBwb3NpdGlvbjogWy0wLjMsIDAsIDBdIH0sXHJcbiAgICAgIHsgc2l6ZTogWzEuOCwgMC4yLCAwLjJdLCBwb3NpdGlvbjogWzAuMywgMCwgMF0gfSxcclxuICAgICAgeyBzaXplOiBbMC4yLCAxLjgsIDAuMl0sIHBvc2l0aW9uOiBbMCwgMCwgMC4zXSB9LFxyXG4gICAgICB7IHNpemU6IFswLjIsIDEuOCwgMC4yXSwgcG9zaXRpb246IFswLCAwLCAtMC4zXSB9LFxyXG4gICAgICB7IHNpemU6IFswLjIsIDAuMiwgMC44XSwgcG9zaXRpb246IFsxLCAwLCAwXSB9LFxyXG4gICAgICB7IHNpemU6IFswLjIsIDAuMiwgMC44XSwgcG9zaXRpb246IFstMSwgMCwgMF0gfSxcclxuICAgICAgeyBzaXplOiBbMC44LCAwLjIsIDAuMl0sIHBvc2l0aW9uOiBbMCwgMCwgMV0gfSxcclxuICAgICAgeyBzaXplOiBbMC44LCAwLjIsIDAuMl0sIHBvc2l0aW9uOiBbMCwgMCwgLTFdIH0sXHJcbiAgICAgIHsgc2l6ZTogWzAuMiwgMC4yLCAxLjhdLCBwb3NpdGlvbjogWzAsIDAuMywgMF0gfSxcclxuICAgICAgeyBzaXplOiBbMC4yLCAwLjIsIDEuOF0sIHBvc2l0aW9uOiBbMCwgLTAuMywgMF0gfVxyXG4gICAgXTtcclxuICAgIFxyXG4gICAgYm94ZXMuZm9yRWFjaChib3ggPT4ge1xyXG4gICAgICBsZXQgdmVydGljZXNCb3ggPSBnZW5lcmF0ZVZlcnRpY2VzKC4uLmJveC5zaXplLCBib3gucG9zaXRpb24pO1xyXG4gICAgICBsZXQgbm9ybWFsc0JveCA9IGdlbmVyYXRlTm9ybWFscyh2ZXJ0aWNlc0JveCwgZmFjZXMpO1xyXG4gICAgICBub3JtYWxzID0gbm9ybWFscy5jb25jYXQobm9ybWFsc0JveCk7XHJcbiAgICAgIHZlcnRpY2VzID0gdmVydGljZXMuY29uY2F0KHRvVmVydGljZXModmVydGljZXNCb3gsIGZhY2VzKSk7XHJcbiAgICB9KTtcclxuICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZlcnRpY2VzOiB2ZXJ0aWNlcyxcclxuICAgICAgZmFjZXM6IGZhY2VzLFxyXG4gICAgICB0YW5nZW50czogdGFuZ2VudHMsXHJcbiAgICAgIGJpdGFuZ2VudHM6IGJpdGFuZ2VudHMsXHJcbiAgICAgIG5vcm1hbHM6IG5vcm1hbHMsXHJcbiAgICAgIGNvbG9yczogY29sb3JzLFxyXG4gICAgICB0ZXhDb29yZDogdGV4Q29vcmQsXHJcbiAgICB9O1xyXG59XHJcbiAgXHJcbmNvbnN0IGhvbGxvdyA9IG5ldyBOb2RlKCk7XHJcbmhvbGxvdy5mbGFnID0gXCJob2xsb3dcIjtcclxuaG9sbG93Lm5hbWUgPSBcIkhvbGxvdyBUaGluZ3lcIjtcclxuaG9sbG93Lm1vZGVsID0gaG9sbG93VGhpbmd5KCk7XHJcbmhvbGxvdy50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMCwgMCwgMF0sXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuaG9sbG93LnBpY2tlZENvbG9yID0gcmFuZG9tQ29sb3JzKCksXHJcbmhvbGxvdy5kaWZmdXNlID0gWzEsMSwxXSxcclxuaG9sbG93LnNwZWN1bGFyID0gWzEsMSwxXSxcclxuaG9sbG93LmFtYmllbnQgPSBbMSwxLDFdLFxyXG5ob2xsb3cuc2hpbmluZXNzID0gMSxcclxuaG9sbG93LmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmhvbGxvdy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5ob2xsb3cuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogdHJ1ZSxcclxuICBmcmFtZXM6IGhvbGxvd0ZyYW1lcygpLFxyXG4gIGN1cnJlbnRGcmFtZTogMCxcclxuICBhbmltYXRpb25GdW5jdGlvbjogQW5pbWF0aW9uLmFuaW1hdGlvblNjcmlwdCgpLFxyXG4gIGlzQXV0bzogdHJ1ZSxcclxuICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG5mdW5jdGlvbiBob2xsb3dGcmFtZXMgKCkge1xyXG4gIGxldCB0cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLCAwLCAwXSxcclxuICAgIHJvdGF0ZTogW2RlZ1RvUmFkKDApLCBkZWdUb1JhZCgwKSwgZGVnVG9SYWQoMCldLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICB9XHJcbiAgbGV0IGZyYW1lcyA9IFtdXHJcbiAgZm9yKGxldCBrID0gMDsgayA8IDM2MTsgKytrKXtcclxuICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IGRlZ1RvUmFkKGspO1xyXG4gICAgICBfdHJhbnNmb3JtLnJvdGF0ZVsxXSA9IGRlZ1RvUmFkKGspO1xyXG4gICAgICBfdHJhbnNmb3JtLnJvdGF0ZVsyXSA9IGRlZ1RvUmFkKGspO1xyXG4gICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBmcmFtZXM7XHJcbn1cclxuXHJcbnZhciBob2xsb3dNb2RlbCA9IFtcclxuICAgIGhvbGxvd1xyXG5dXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9sbG93TW9kZWw7IiwiaW1wb3J0IE5vZGUgZnJvbSBcIi4uL25vZGUuanNcIjtcclxuaW1wb3J0IHsgZGVnVG9SYWQgfSBmcm9tIFwiLi4vbWF0aC9tYXRoVXRpbHMuanNcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vdXRpbHMvQW5pbWF0aW9uLmpzXCI7XHJcbmltcG9ydCBib3hNb2RlbCBmcm9tIFwiLi4vYm94TW9kZWwuanNcIjtcclxuXHJcblxyXG5jb25zdCBwaWcgPSBuZXcgTm9kZSgpO1xyXG5waWcuZmxhZyA9IFwiYXJ0aWN1bGF0ZWRcIjtcclxucGlnLm5hbWUgPSBcInBpZ1wiO1xyXG5waWcubW9kZWwgPSBib3hNb2RlbCgxLCAxLjUsIDEsIFswLCAwLCAwXSk7XHJcbnBpZy50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMCwgMCwgMF0sXHJcbiAgcm90YXRlOiBbMTAsIDU5LCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5waWcucGlja2VkQ29sb3IgPSBbMC45MjE1Njg2MjcsMC41Njg2Mjc0NTEsMC44OTgwMzkyMTZdLFxyXG5waWcuYW1iaWVudCA9IFsxLDEsMV07XHJcbnBpZy5waG9uZyA9IHRydWU7XHJcbnBpZy5waG9uZ0FtYmllbnQgPSBbMCwwLDBdLFxyXG5waWcuZGlmZnVzZSA9IFsxLDEsMV07XHJcbnBpZy5zcGVjdWxhciA9IFsxLDEsMV07XHJcbnBpZy5zaGluaW5lc3MgPSAxO1xyXG5waWcuY29uc3QgPSB7XHJcbiAgICBrZDogMS4wLFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn07XHJcbnBpZy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5waWcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogcGlnRnJhbWVzKCksXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogQW5pbWF0aW9uLmFuaW1hdGlvblNjcmlwdCgpLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBwaWdGcmFtZXMoKSB7XHJcbiAgICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgICAgIHRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgICAgIHJvdGF0ZTogW2RlZ1RvUmFkKDEwKSwgZGVnVG9SYWQoNTkpLCBkZWdUb1JhZCgwKV0sXHJcbiAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICAgIH1cclxuICAgIGxldCBmcmFtZXMgPSBbXVxyXG4gICAgZm9yKGxldCBrID0gMDsgayA8IDI1OyArK2spe1xyXG4gICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICBfdHJhbnNmb3JtLnRyYW5zbGF0ZVsxXSA9IGsgLyAyNTtcclxuICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGZyYW1lcztcclxufVxyXG5cclxuY29uc3QgaGVhZCA9IG5ldyBOb2RlKCk7XHJcbmhlYWQubmFtZSA9IFwiaGVhZFwiO1xyXG5oZWFkLm1vZGVsID0gYm94TW9kZWwoMSwgMSwgMS4yLCBbLTEsIDAuNiwgMF0pO1xyXG5oZWFkLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5oZWFkLnBpY2tlZENvbG9yID0gWzAuOTIxNTY4NjI3LDAuNTY4NjI3NDUxLDAuODk4MDM5MjE2XSxcclxuaGVhZC5hbWJpZW50ID0gWzEsMSwxXTtcclxuaGVhZC5waG9uZyA9IHRydWU7XHJcbmhlYWQucGhvbmdBbWJpZW50ID0gWzAsMCwwXSxcclxuaGVhZC5kaWZmdXNlID0gWzEsMSwxXTtcclxuaGVhZC5zcGVjdWxhciA9IFsxLDEsMV07XHJcbmhlYWQuc2hpbmluZXNzID0gMTtcclxuaGVhZC5jb25zdCA9IHtcclxuICAgIGtkOiAxLjAsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufTtcclxuaGVhZC52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5oZWFkLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IGhlYWRGcmFtZXMoKSxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5oZWFkLnBob25nID0gdHJ1ZTtcclxuXHJcbmZ1bmN0aW9uIGhlYWRGcmFtZXMoKSB7XHJcbiAgICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgICAgIHRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgICB9XHJcbiAgICBsZXQgZnJhbWVzID0gW11cclxuICAgIGZvcihsZXQgayA9IDA7IGsgPCAyNTsgKytrKXtcclxuICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMl0gPSAtayAvIDEwMDtcclxuICAgICAgICBfdHJhbnNmb3JtLnNjYWxlWzBdID0gMSArIGsgLyA1MDtcclxuICAgICAgICBfdHJhbnNmb3JtLnNjYWxlWzFdID0gMSArIGsgLyA1MDtcclxuICAgICAgICBfdHJhbnNmb3JtLnNjYWxlWzJdID0gMSArIGsgLyA1MDtcclxuICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIGZyYW1lcztcclxufVxyXG5cclxuY29uc3Qgd2hpdGVSaWdodEV5ZSA9IG5ldyBOb2RlKCk7XHJcbndoaXRlUmlnaHRFeWUubmFtZSA9IFwid2hpdGVSaWdodEV5ZVwiO1xyXG53aGl0ZVJpZ2h0RXllLm1vZGVsID0gYm94TW9kZWwoMC4yLCAwLjIsIDAuMiwgWy0xLCAwLjYsIDBdKTtcclxud2hpdGVSaWdodEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFstMC41LCAwLjIsIDAuNF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbndoaXRlUmlnaHRFeWUucGlja2VkQ29sb3IgPSBbMC45OSwwLjk5LDAuOTldLFxyXG53aGl0ZVJpZ2h0RXllLmFtYmllbnQgPSBbMSwxLDFdO1xyXG53aGl0ZVJpZ2h0RXllLnBob25nID0gdHJ1ZTtcclxud2hpdGVSaWdodEV5ZS5waG9uZ0FtYmllbnQgPSBbMCwwLDBdLFxyXG53aGl0ZVJpZ2h0RXllLmRpZmZ1c2UgPSBbMSwxLDFdO1xyXG53aGl0ZVJpZ2h0RXllLnNwZWN1bGFyID0gWzEsMSwxXTtcclxud2hpdGVSaWdodEV5ZS5zaGluaW5lc3MgPSAxO1xyXG53aGl0ZVJpZ2h0RXllLmNvbnN0ID0ge1xyXG4gICAga2Q6IDEuMCxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59O1xyXG53aGl0ZVJpZ2h0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbndoaXRlUmlnaHRFeWUuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxud2hpdGVSaWdodEV5ZS5waG9uZyA9IHRydWU7XHJcblxyXG5jb25zdCB3aGl0ZUxlZnRFeWUgPSBuZXcgTm9kZSgpO1xyXG53aGl0ZUxlZnRFeWUubmFtZSA9IFwid2hpdGVMZWZ0RXllXCI7XHJcbndoaXRlTGVmdEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMiwgMC4yLCAwLjIsIFstMSwgMC42LCAwXSk7XHJcbndoaXRlTGVmdEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFstMC41LCAwLjIsIC0wLjRdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG53aGl0ZUxlZnRFeWUucGlja2VkQ29sb3IgPSBbMC45OSwwLjk5LDAuOTldLFxyXG53aGl0ZUxlZnRFeWUuYW1iaWVudCA9IFsxLDEsMV07XHJcbndoaXRlTGVmdEV5ZS5waG9uZyA9IHRydWU7XHJcbndoaXRlTGVmdEV5ZS5waG9uZ0FtYmllbnQgPSBbMCwwLDBdLFxyXG53aGl0ZUxlZnRFeWUuZGlmZnVzZSA9IFsxLDEsMV07XHJcbndoaXRlTGVmdEV5ZS5zcGVjdWxhciA9IFsxLDEsMV07XHJcbndoaXRlTGVmdEV5ZS5zaGluaW5lc3MgPSAxO1xyXG53aGl0ZUxlZnRFeWUuY29uc3QgPSB7XHJcbiAgICBrZDogMS4wLFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn07XHJcbndoaXRlTGVmdEV5ZS52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG53aGl0ZUxlZnRFeWUuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxud2hpdGVMZWZ0RXllLnBob25nID0gdHJ1ZTtcclxuXHJcbmNvbnN0IGJsYWNrUmlnaHRFeWUgPSBuZXcgTm9kZSgpO1xyXG5ibGFja1JpZ2h0RXllLm5hbWUgPSBcImJsYWNrUmlnaHRFeWVcIjtcclxuYmxhY2tSaWdodEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMiwgMC4yLCAwLjIsIFstMSwgMC42LCAwXSk7XHJcbmJsYWNrUmlnaHRFeWUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMC4wNSwgMCwgMC4wNzVdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5ibGFja1JpZ2h0RXllLnBpY2tlZENvbG9yID0gWzAsMCwwXSxcclxuYmxhY2tSaWdodEV5ZS5hbWJpZW50ID0gWzEsMSwxXTtcclxuYmxhY2tSaWdodEV5ZS5waG9uZyA9IHRydWU7XHJcbmJsYWNrUmlnaHRFeWUucGhvbmdBbWJpZW50ID0gWzAsMCwwXSxcclxuYmxhY2tSaWdodEV5ZS5kaWZmdXNlID0gWzEsMSwxXTtcclxuYmxhY2tSaWdodEV5ZS5zcGVjdWxhciA9IFsxLDEsMV07XHJcbmJsYWNrUmlnaHRFeWUuc2hpbmluZXNzID0gMTtcclxuYmxhY2tSaWdodEV5ZS5jb25zdCA9IHtcclxuICAgIGtkOiAxLjAsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufTtcclxuYmxhY2tSaWdodEV5ZS52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5ibGFja1JpZ2h0RXllLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcbmJsYWNrUmlnaHRFeWUucGhvbmcgPSB0cnVlO1xyXG5cclxuY29uc3QgYmxhY2tMZWZ0RXllID0gbmV3IE5vZGUoKTtcclxuYmxhY2tMZWZ0RXllLm5hbWUgPSBcImJsYWNrTGVmdEV5ZVwiO1xyXG5ibGFja0xlZnRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC4yLCBbLTEsIDAuNiwgMF0pO1xyXG5ibGFja0xlZnRFeWUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMC4wNSwgMCwgLTAuMDc1XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuYmxhY2tMZWZ0RXllLnBpY2tlZENvbG9yID0gWzAsMCwwXSxcclxuYmxhY2tMZWZ0RXllLmFtYmllbnQgPSBbMSwxLDFdO1xyXG5ibGFja0xlZnRFeWUucGhvbmcgPSB0cnVlO1xyXG5ibGFja0xlZnRFeWUucGhvbmdBbWJpZW50ID0gWzAsMCwwXSxcclxuYmxhY2tMZWZ0RXllLmRpZmZ1c2UgPSBbMSwxLDFdO1xyXG5ibGFja0xlZnRFeWUuc3BlY3VsYXIgPSBbMSwxLDFdO1xyXG5ibGFja0xlZnRFeWUuc2hpbmluZXNzID0gMTtcclxuYmxhY2tMZWZ0RXllLmNvbnN0ID0ge1xyXG4gICAga2Q6IDEuMCxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59O1xyXG5ibGFja0xlZnRFeWUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuYmxhY2tMZWZ0RXllLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcbmJsYWNrTGVmdEV5ZS5waG9uZyA9IHRydWU7XHJcblxyXG5jb25zdCBub3NlID0gbmV3IE5vZGUoKTtcclxubm9zZS5uYW1lID0gXCJub3NlXCI7XHJcbm5vc2UubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC40LCBbLTEuNSwgMC41NSwgMF0pO1xyXG5ub3NlLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuMDUsIDAsIDBdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5ub3NlLnBpY2tlZENvbG9yID0gWzAuNzY4NjI3NDUxLDAuMzc2NDcwNTg4LCAwLjc0NTA5ODAzOV0sXHJcbm5vc2UuYW1iaWVudCA9IFsxLDEsMV07XHJcbm5vc2UucGhvbmcgPSB0cnVlO1xyXG5ub3NlLnBob25nQW1iaWVudCA9IFswLDAsMF0sXHJcbm5vc2UuZGlmZnVzZSA9IFsxLDEsMV07XHJcbm5vc2Uuc3BlY3VsYXIgPSBbMSwxLDFdO1xyXG5ub3NlLnNoaW5pbmVzcyA9IDE7XHJcbm5vc2UuY29uc3QgPSB7XHJcbiAgICBrZDogMS4wLFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn07XHJcbm5vc2Uudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxubm9zZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5ub3NlLnBob25nID0gdHJ1ZTtcclxuXHJcbmNvbnN0IHJpZ2h0SG9sZSA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0SG9sZS5uYW1lID0gXCJyaWdodEhvbGVcIjtcclxucmlnaHRIb2xlLm1vZGVsID0gYm94TW9kZWwoMC4xNSwgMC4yLCAwLjEsIFstMS42LCAwLjU1LCAwXSk7XHJcbnJpZ2h0SG9sZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLjA1LCAwLCAwLjFdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5yaWdodEhvbGUucGlja2VkQ29sb3IgPSBbMC45MjE1Njg2MjcsMC41Njg2Mjc0NTEsMC44OTgwMzkyMTZdLFxyXG5yaWdodEhvbGUuYW1iaWVudCA9IFsxLDEsMV07XHJcbnJpZ2h0SG9sZS5waG9uZyA9IHRydWU7XHJcbnJpZ2h0SG9sZS5waG9uZ0FtYmllbnQgPSBbMCwwLDBdLFxyXG5yaWdodEhvbGUuZGlmZnVzZSA9IFsxLDEsMV07XHJcbnJpZ2h0SG9sZS5zcGVjdWxhciA9IFsxLDEsMV07XHJcbnJpZ2h0SG9sZS5zaGluaW5lc3MgPSAxO1xyXG5yaWdodEhvbGUuY29uc3QgPSB7XHJcbiAgICBrZDogMS4wLFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn07XHJcbnJpZ2h0SG9sZS52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5yaWdodEhvbGUuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxucmlnaHRIb2xlLnBob25nID0gdHJ1ZTtcclxuXHJcbmNvbnN0IGxlZnRIb2xlID0gbmV3IE5vZGUoKTtcclxubGVmdEhvbGUubmFtZSA9IFwibGVmdEhvbGVcIjtcclxubGVmdEhvbGUubW9kZWwgPSBib3hNb2RlbCgwLjE1LCAwLjIsIDAuMSwgWy0xLjYsIDAuNTUsIDBdKTtcclxubGVmdEhvbGUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMC4wNSwgMCwgLTAuMV0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmxlZnRIb2xlLnBpY2tlZENvbG9yID0gWzAuOTIxNTY4NjI3LDAuNTY4NjI3NDUxLDAuODk4MDM5MjE2XSxcclxubGVmdEhvbGUuYW1iaWVudCA9IFsxLDEsMV07XHJcbmxlZnRIb2xlLnBob25nID0gdHJ1ZTtcclxubGVmdEhvbGUucGhvbmdBbWJpZW50ID0gWzAsMCwwXSxcclxubGVmdEhvbGUuZGlmZnVzZSA9IFsxLDEsMV07XHJcbmxlZnRIb2xlLnNwZWN1bGFyID0gWzEsMSwxXTtcclxubGVmdEhvbGUuc2hpbmluZXNzID0gMTtcclxubGVmdEhvbGUuY29uc3QgPSB7XHJcbiAgICBrZDogMS4wLFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn07XHJcbmxlZnRIb2xlLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmxlZnRIb2xlLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcbmxlZnRIb2xlLnBob25nID0gdHJ1ZTtcclxuXHJcbmNvbnN0IHJpZ2h0RnJvbnRMZWcgPSBuZXcgTm9kZSgpO1xyXG5yaWdodEZyb250TGVnLm5hbWUgPSBcInJpZ2h0RnJvbnRMZWdcIjtcclxucmlnaHRGcm9udExlZy5tb2RlbCA9IGJveE1vZGVsKDAuNSwgMC4yLCAwLjIsIFswLjEsIDAsIDAuMTVdKTtcclxucmlnaHRGcm9udExlZy50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFstMC42LCAtMC41LCAtMC40XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRGcm9udExlZy5waWNrZWRDb2xvciA9IFswLjc2ODYyNzQ1MSwwLjM3NjQ3MDU4OCwgMC43NDUwOTgwMzldLFxyXG5yaWdodEZyb250TGVnLmFtYmllbnQgPSBbMSwxLDFdO1xyXG5yaWdodEZyb250TGVnLnBob25nID0gdHJ1ZTtcclxucmlnaHRGcm9udExlZy5waG9uZ0FtYmllbnQgPSBbMCwwLDBdLFxyXG5yaWdodEZyb250TGVnLmRpZmZ1c2UgPSBbMSwxLDFdO1xyXG5yaWdodEZyb250TGVnLnNwZWN1bGFyID0gWzEsMSwxXTtcclxucmlnaHRGcm9udExlZy5zaGluaW5lc3MgPSAxO1xyXG5yaWdodEZyb250TGVnLmNvbnN0ID0ge1xyXG4gICAga2Q6IDEuMCxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59O1xyXG5yaWdodEZyb250TGVnLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbnJpZ2h0RnJvbnRMZWcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogcmlnaHRGcm9udExlZ0ZyYW1lcygpLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcbnJpZ2h0RnJvbnRMZWcucGhvbmcgPSB0cnVlO1xyXG5cclxuZnVuY3Rpb24gcmlnaHRGcm9udExlZ0ZyYW1lcygpIHtcclxuICAgIGxldCB0cmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgdHJhbnNsYXRlOlstMC42LCAtMC41LCAtMC40XSxcclxuICAgICAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgICAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG4gICAgfVxyXG5cclxuICAgIGxldCBmcmFtZXMgPSBbXVxyXG4gICAgZm9yKGxldCBrID0gMDsgayA8IDI1OyArK2spe1xyXG4gICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IGsvMjUgO1xyXG4gICAgICAgIF90cmFuc2Zvcm0udHJhbnNsYXRlWzJdID0gLTAuNCArIC0wLjIvKDI1LWspO1xyXG4gICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmcmFtZXM7XHJcbn1cclxuXHJcblxyXG5jb25zdCBsZWZ0RnJvbnRMZWcgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0RnJvbnRMZWcubmFtZSA9IFwibGVmdEZyb250TGVnXCI7XHJcbmxlZnRGcm9udExlZy5tb2RlbCA9IGJveE1vZGVsKDAuNSwgMC4yLCAwLjIsIFswLjEsIDAsIC0wLjE1XSk7XHJcbmxlZnRGcm9udExlZy50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFstMC42LCAtMC41LCAwLjRdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5sZWZ0RnJvbnRMZWcucGlja2VkQ29sb3IgPSBbMC43Njg2Mjc0NTEsMC4zNzY0NzA1ODgsIDAuNzQ1MDk4MDM5XSxcclxubGVmdEZyb250TGVnLmFtYmllbnQgPSBbMSwxLDFdO1xyXG5sZWZ0RnJvbnRMZWcucGhvbmcgPSB0cnVlO1xyXG5sZWZ0RnJvbnRMZWcucGhvbmdBbWJpZW50ID0gWzAsMCwwXSxcclxubGVmdEZyb250TGVnLmRpZmZ1c2UgPSBbMSwxLDFdO1xyXG5sZWZ0RnJvbnRMZWcuc3BlY3VsYXIgPSBbMSwxLDFdO1xyXG5sZWZ0RnJvbnRMZWcuc2hpbmluZXNzID0gMTtcclxubGVmdEZyb250TGVnLmNvbnN0ID0ge1xyXG4gICAga2Q6IDEuMCxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59O1xyXG5sZWZ0RnJvbnRMZWcudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxubGVmdEZyb250TGVnLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IGxlZnRGcm9udEZyYW1lcygpLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcbmxlZnRGcm9udExlZy5waG9uZyA9IHRydWU7XHJcblxyXG5mdW5jdGlvbiBsZWZ0RnJvbnRGcmFtZXMoKSB7XHJcbiAgICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgICAgIHRyYW5zbGF0ZTpbLTAuNiwgLTAuNSwgMC40XSxcclxuICAgICAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgICAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG4gICAgfVxyXG5cclxuICAgIGxldCBmcmFtZXMgPSBbXVxyXG4gICAgZm9yKGxldCBrID0gMDsgayA8IDI1OyArK2spe1xyXG4gICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IC1rLzI1IDtcclxuICAgICAgICBfdHJhbnNmb3JtLnRyYW5zbGF0ZVsyXSA9IDAuNCArIDAuMi8oMjUtayk7XHJcbiAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZyYW1lcztcclxufVxyXG5cclxuY29uc3QgcmlnaHRSZWFyTGVnID0gbmV3IE5vZGUoKTtcclxucmlnaHRSZWFyTGVnLm5hbWUgPSBcInJpZ2h0UmVhckxlZ1wiO1xyXG5yaWdodFJlYXJMZWcubW9kZWwgPSBib3hNb2RlbCgwLjUsIDAuMiwgMC4yLCBbMC41LCAwLCAwLjE1XSk7XHJcbnJpZ2h0UmVhckxlZy50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLCAtMC41LCAtMC40XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRSZWFyTGVnLnBpY2tlZENvbG9yID0gWzAuNzY4NjI3NDUxLDAuMzc2NDcwNTg4LCAwLjc0NTA5ODAzOV0sXHJcbnJpZ2h0UmVhckxlZy5hbWJpZW50ID0gWzEsMSwxXTtcclxucmlnaHRSZWFyTGVnLnBob25nID0gdHJ1ZTtcclxucmlnaHRSZWFyTGVnLnBob25nQW1iaWVudCA9IFswLDAsMF0sXHJcbnJpZ2h0UmVhckxlZy5kaWZmdXNlID0gWzEsMSwxXTtcclxucmlnaHRSZWFyTGVnLnNwZWN1bGFyID0gWzEsMSwxXTtcclxucmlnaHRSZWFyTGVnLnNoaW5pbmVzcyA9IDE7XHJcbnJpZ2h0UmVhckxlZy5jb25zdCA9IHtcclxuICAgIGtkOiAxLjAsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufTtcclxucmlnaHRSZWFyTGVnLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbnJpZ2h0UmVhckxlZy5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiByaWdodFJlYXJMZWdGcmFtZXMoKSxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5yaWdodFJlYXJMZWcucGhvbmcgPSB0cnVlO1xyXG5cclxuZnVuY3Rpb24gcmlnaHRSZWFyTGVnRnJhbWVzKCkge1xyXG4gICAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgICAgICB0cmFuc2xhdGU6WzAsIC0wLjUsIC0wLjRdLFxyXG4gICAgICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZyYW1lcyA9IFtdXHJcbiAgICBmb3IobGV0IGsgPSAwOyBrIDwgMjU7ICsrayl7XHJcbiAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gay8yNSA7XHJcbiAgICAgICAgX3RyYW5zZm9ybS50cmFuc2xhdGVbMl0gPSAtMC40ICsgLTAuMi8oMjUtayk7XHJcbiAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZyYW1lcztcclxufVxyXG5cclxuY29uc3QgbGVmdFJlYXJMZWcgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0UmVhckxlZy5uYW1lID0gXCJsZWZ0UmVhckxlZ1wiO1xyXG5sZWZ0UmVhckxlZy5tb2RlbCA9IGJveE1vZGVsKDAuNSwgMC4yLCAwLjIsIFswLjUsIDAsIC0wLjE1XSk7XHJcbmxlZnRSZWFyTGVnLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAsIC0wLjUsIDAuNF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmxlZnRSZWFyTGVnLnBpY2tlZENvbG9yID0gWzAuNzY4NjI3NDUxLDAuMzc2NDcwNTg4LCAwLjc0NTA5ODAzOV0sXHJcbmxlZnRSZWFyTGVnLmFtYmllbnQgPSBbMSwxLDFdO1xyXG5sZWZ0UmVhckxlZy5waG9uZyA9IHRydWU7XHJcbmxlZnRSZWFyTGVnLnBob25nQW1iaWVudCA9IFswLDAsMF0sXHJcbmxlZnRSZWFyTGVnLmRpZmZ1c2UgPSBbMSwxLDFdO1xyXG5sZWZ0UmVhckxlZy5zcGVjdWxhciA9IFsxLDEsMV07XHJcbmxlZnRSZWFyTGVnLnNoaW5pbmVzcyA9IDE7XHJcbmxlZnRSZWFyTGVnLmNvbnN0ID0ge1xyXG4gICAga2Q6IDEuMCxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59O1xyXG5sZWZ0UmVhckxlZy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5sZWZ0UmVhckxlZy5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBsZWZ0UmVhckZyYW1lcygpLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcbmxlZnRSZWFyTGVnLnBob25nID0gdHJ1ZTtcclxuXHJcbmZ1bmN0aW9uIGxlZnRSZWFyRnJhbWVzKCkge1xyXG4gICAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgICAgICB0cmFuc2xhdGU6WzAsIC0wLjUsIDAuNF0sXHJcbiAgICAgICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZnJhbWVzID0gW11cclxuICAgIGZvcihsZXQgayA9IDA7IGsgPCAyNTsgKytrKXtcclxuICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSAtay8yNSA7XHJcbiAgICAgICAgX3RyYW5zZm9ybS50cmFuc2xhdGVbMl0gPSAwLjQgKyAwLjIvKDI1LWspO1xyXG4gICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmcmFtZXM7XHJcbn1cclxuXHJcbmhlYWQuc2V0UGFyZW50KHBpZyk7XHJcbndoaXRlUmlnaHRFeWUuc2V0UGFyZW50KGhlYWQpO1xyXG53aGl0ZUxlZnRFeWUuc2V0UGFyZW50KGhlYWQpO1xyXG5ibGFja1JpZ2h0RXllLnNldFBhcmVudCh3aGl0ZVJpZ2h0RXllKTtcclxuYmxhY2tMZWZ0RXllLnNldFBhcmVudCh3aGl0ZUxlZnRFeWUpO1xyXG5ub3NlLnNldFBhcmVudChoZWFkKTtcclxucmlnaHRIb2xlLnNldFBhcmVudChub3NlKTtcclxubGVmdEhvbGUuc2V0UGFyZW50KG5vc2UpO1xyXG5yaWdodEZyb250TGVnLnNldFBhcmVudChwaWcpO1xyXG5sZWZ0RnJvbnRMZWcuc2V0UGFyZW50KHBpZyk7XHJcbnJpZ2h0UmVhckxlZy5zZXRQYXJlbnQocGlnKTtcclxubGVmdFJlYXJMZWcuc2V0UGFyZW50KHBpZyk7XHJcblxyXG52YXIgcGlnTW9kZWwgPSBbXHJcbiAgICBwaWdcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBpZ01vZGVsO1xyXG4gICIsImltcG9ydCBOb2RlIGZyb20gXCIuLi9ub2RlLmpzXCI7XHJcbmltcG9ydCBib3hNb2RlbCwge2dlbmVyYXRlRmFjZXMsIGdlbmVyYXRlTm9ybWFscywgZ2VuZXJhdGVWZXJ0aWNlc30gZnJvbSBcIi4uL2JveE1vZGVsLmpzXCI7XHJcbmltcG9ydCB7IHJhZFRvRGVnLGRlZ1RvUmFkIH0gZnJvbSBcIi4uL21hdGgvbWF0aFV0aWxzLmpzXCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uL3V0aWxzL0FuaW1hdGlvbi5qc1wiO1xyXG5cclxuZnVuY3Rpb24gcmluZygpIHtcclxuICAgIGxldCB2ZXJ0aWNlcyA9IFtdO1xyXG4gICAgbGV0IGNvbG9ycyA9IFtdO1xyXG4gICAgbGV0IHRhbmdlbnRzID0gW107XHJcbiAgICBsZXQgYml0YW5nZW50cyA9IFtdO1xyXG4gICAgbGV0IG5vcm1hbHMgPSBbXTtcclxuICAgIGxldCB0ZXhDb29yZCA9IFtdO1xyXG4gICAgbGV0IGZhY2VzID0gZ2VuZXJhdGVGYWNlcygpO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVCb3hlcygpe1xyXG4gICAgbGV0IGJveGVzID0gW107XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMzYwOyArK2kpe1xyXG4gICAgICBsZXQgcmFkID0gZGVnVG9SYWQoaSk7XHJcbiAgICAgIGxldCBwb3NpdGlvbiA9IFtNYXRoLmNvcyhyYWQpLCBNYXRoLnNpbihyYWQpLCAwXTtcclxuICAgICAgbGV0IHNpemUgPSBbMC4wNSwgMC4wNSwgMC44XTtcclxuICAgICAgYm94ZXMucHVzaCh7IHNpemU6IHNpemUsIHBvc2l0aW9uOiBwb3NpdGlvbiB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBib3hlcztcclxuICB9XHJcblxyXG4gIGNvbnN0IGJveGVzID0gZ2VuZXJhdGVCb3hlcygpO1xyXG4gIFxyXG4gIGJveGVzLmZvckVhY2goYm94ID0+IHtcclxuICAgIGxldCB2ZXJ0aWNlc0JveCA9IGdlbmVyYXRlVmVydGljZXMoLi4uYm94LnNpemUsIGJveC5wb3NpdGlvbik7XHJcbiAgICBsZXQgbm9ybWFsc0JveCA9IGdlbmVyYXRlTm9ybWFscyh2ZXJ0aWNlc0JveCwgZmFjZXMpO1xyXG4gICAgbm9ybWFscyA9IG5vcm1hbHMuY29uY2F0KG5vcm1hbHNCb3gpO1xyXG4gICAgdmVydGljZXMgPSB2ZXJ0aWNlcy5jb25jYXQodG9WZXJ0aWNlcyh2ZXJ0aWNlc0JveCwgZmFjZXMpKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHZlcnRpY2VzOiB2ZXJ0aWNlcyxcclxuICAgIGZhY2VzOiBmYWNlcyxcclxuICAgIHRhbmdlbnRzOiB0YW5nZW50cyxcclxuICAgIGJpdGFuZ2VudHM6IGJpdGFuZ2VudHMsXHJcbiAgICBub3JtYWxzOiBub3JtYWxzLFxyXG4gICAgY29sb3JzOiBjb2xvcnMsXHJcbiAgICB0ZXhDb29yZDogdGV4Q29vcmQsXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgaG9sbG93ID0gbmV3IE5vZGUoKTtcclxuaG9sbG93LmZsYWcgPSBcImhvbGxvd1wiO1xyXG5ob2xsb3cubmFtZSA9IFwiUmluZ1wiO1xyXG5ob2xsb3cubW9kZWwgPSByaW5nKCk7XHJcbmhvbGxvdy50cmFuc2Zvcm0gPSB7XHJcbnRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG5yb3RhdGU6IFsxMCwgMCwgMF0sXHJcbnNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmhvbGxvdy5waWNrZWRDb2xvciA9IHJhbmRvbUNvbG9ycygpXHJcbmhvbGxvdy52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbmhvbGxvdy5kaWZmdXNlID0gWzEsMSwxXSxcclxuaG9sbG93LnNwZWN1bGFyID0gWzEsMSwxXSxcclxuaG9sbG93LmFtYmllbnQgPSBbMSwxLDFdLFxyXG5ob2xsb3cuc2hpbmluZXNzID0gMSxcclxuaG9sbG93LmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmhvbGxvdy5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiB0cnVlLFxyXG4gIGZyYW1lczogaG9sbG93RnJhbWVzKCksXHJcbiAgY3VycmVudEZyYW1lOiAwLFxyXG4gIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgaXNBdXRvOiB0cnVlLFxyXG4gIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbmZ1bmN0aW9uIGhvbGxvd0ZyYW1lcygpIHtcclxuICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMCwgMCwgMF0sXHJcbiAgICByb3RhdGU6IFtkZWdUb1JhZCgxMCksIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICB9XHJcbiAgbGV0IGZyYW1lcyA9IFtdXHJcbiAgZm9yKGxldCBrID0gMDsgayA8IDM2MDsgKytrKXtcclxuICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IGRlZ1RvUmFkKCgxMCtrKSAlIDM2MClcclxuICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMV0gPSBkZWdUb1JhZCgoaysxKSUzNjApXHJcbiAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gIH1cclxuICBcclxuICByZXR1cm4gZnJhbWVzO1xyXG59XHJcblxyXG52YXIgaG9sbG93UmluZ01vZGVsID0gW1xyXG4gIGhvbGxvd1xyXG5dXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9sbG93UmluZ01vZGVsOyIsIi8vIGNvbnN0IHsgZGVmYXVsdDogTWF0NCB9ID0gcmVxdWlyZShcIi4vc3RydWN0cy9tYXRoL01hdDRcIik7XHJcbmltcG9ydCBNYXQ0IGZyb20gXCIuL21hdGgvTWF0NC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XHJcbiAgICAgICAgdGhpcy5sb2NhbE1hdHJpeCA9IE1hdDQuZ2V0SWRlbnRpdHkoKTtcclxuICAgICAgICB0aGlzLndvcmxkTWF0cml4ID0gTWF0NC5nZXRJZGVudGl0eSgpO1xyXG4gICAgICAgIHRoaXMud29ybGRJbnZlcnNlTWF0cml4ID0gTWF0NC5nZXRJZGVudGl0eSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdvcmxkTWF0cml4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndvcmxkTWF0cml4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgc2V0UGFyZW50KHBhcmVudCkge1xyXG4gICAgICAgIC8vIGFscmVhZHkgaGF2ZSBwYXJlbnRcclxuICAgICAgICBpZiAodGhpcy5wYXJlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQubmFtZTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICBzZXRXb3JsZE10eChtYXRyaXgpIHtcclxuICAgICAgaWYgKG1hdHJpeCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMud29ybGRNYXRyaXggPSBNYXQ0Lm11bHRpcGx5KG1hdHJpeCwgdGhpcy5sb2NhbE1hdHJpeCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy53b3JsZE1hdHJpeCA9IHRoaXMubG9jYWxNYXRyaXg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgY29uc3Qgd29ybGRNYXRyaXggPSB0aGlzLndvcmxkTWF0cml4O1xyXG4gICAgICB0aGlzLndvcmxkSW52ZXJzZU1hdHJpeCA9IE1hdDQudHJhbnNwb3NlKFxyXG4gICAgICAgIE1hdDQuaW52ZXJzZSh0aGlzLndvcmxkTWF0cml4KVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIGNoaWxkLnNldFdvcmxkTXR4KHdvcmxkTWF0cml4KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9KU09OKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgYW1iaWVudDogdGhpcy5hbWJpZW50LFxyXG4gICAgICAgICAgYW5pbWF0aW9uOiB0aGlzLmFuaW1hdGlvbixcclxuICAgICAgICAgIGNoaWxkcmVuOiB0aGlzLmNoaWxkcmVuLm1hcChjaGlsZCA9PiBjaGlsZC50b0pTT04oKSksXHJcbiAgICAgICAgICBjb25zdDogdGhpcy5jb25zdCxcclxuICAgICAgICAgIGRpZmZ1c2U6IHRoaXMuZGlmZnVzZSxcclxuICAgICAgICAgIGxvY2FsTWF0cml4OiB0aGlzLmxvY2FsTWF0cml4LFxyXG4gICAgICAgICAgbW9kZWw6IHRoaXMubW9kZWwsXHJcbiAgICAgICAgICBwaWNrZWRDb2xvcjogdGhpcy5waWNrZWRDb2xvcixcclxuICAgICAgICAgIHNoaW5pbmVzczogdGhpcy5zaGluaW5lc3MsXHJcbiAgICAgICAgICBzcGVjdWxhcjogdGhpcy5zcGVjdWxhcixcclxuICAgICAgICAgIHRyYW5zZm9ybTogdGhpcy50cmFuc2Zvcm0sXHJcbiAgICAgICAgICB2aWV3TWF0cml4OiB0aGlzLnZpZXdNYXRyaXgsICBcclxuICAgICAgICAgIHdvcmxkSW52ZXJzZU1hdHJpeDogdGhpcy53b3JsZEludmVyc2VNYXRyaXgsXHJcbiAgICAgICAgICB3b3JsZE1hdHJpeDogdGhpcy53b3JsZE1hdHJpeCxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmcm9tSlNPTihkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgICAgIHRoaXMuYW1iaWVudCA9IGRhdGEuYW1iaWVudDtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IGRhdGEuYW5pbWF0aW9uO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBkYXRhLmNoaWxkcmVuLm1hcChjaGlsZERhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZE5vZGUgPSBuZXcgTm9kZSgpO1xyXG4gICAgICAgICAgICBjaGlsZE5vZGUuZnJvbUpTT04oY2hpbGREYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNvbnN0ID0gZGF0YS5jb25zdDtcclxuICAgICAgICB0aGlzLmRpZmZ1c2UgPSBkYXRhLmRpZmZ1c2U7XHJcbiAgICAgICAgdGhpcy5sb2NhbE1hdHJpeCA9IGRhdGEubG9jYWxNYXRyaXg7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IGRhdGEubW9kZWw7XHJcbiAgICAgICAgdGhpcy5waWNrZWRDb2xvciA9IGRhdGEucGlja2VkQ29sb3I7XHJcbiAgICAgICAgdGhpcy5zaGluaW5lc3MgPSBkYXRhLnNoaW5pbmVzcztcclxuICAgICAgICB0aGlzLnNwZWN1bGFyID0gZGF0YS5zcGVjdWxhcjtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IGRhdGEudHJhbnNmb3JtO1xyXG4gICAgICAgIHRoaXMudmlld01hdHJpeCA9IGRhdGEudmlld01hdHJpeDtcclxuICAgICAgICB0aGlzLndvcmxkSW52ZXJzZU1hdHJpeCA9IGRhdGEud29ybGRJbnZlcnNlTWF0cml4O1xyXG4gICAgICAgIHRoaXMud29ybGRNYXRyaXggPSBkYXRhLndvcmxkTWF0cml4O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gIH1cclxuICAiLCJpbXBvcnQgTm9kZSBmcm9tIFwiLi4vc3RydWN0cy9ub2RlLmpzXCI7XHJcbmltcG9ydCB7IGRlZ1RvUmFkLCByYWRUb0RlZyB9IGZyb20gXCIuLi9zdHJ1Y3RzL21hdGgvbWF0aFV0aWxzLmpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuaW1hdGlvbntcclxuXHJcbiAgICBzdGF0aWMgcGFyc2VBbmltYXRpb25GdW5jdGlvbihtb2RlbCl7XHJcbiAgICAgICAgbGV0IGFuaW1hdGlvbiA9IG1vZGVsLmFuaW1hdGlvbjtcclxuICAgICAgICBpZihhbmltYXRpb24uaXNBbmltYXRlKXtcclxuICAgICAgICAgICAgLy8gcGFyc2Ugc3RyaW5nIHRvIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgIGxldCBfYW5pbWF0aW9uRnVuY3Rpb24gPSBldmFsKGFuaW1hdGlvbi5hbmltYXRpb25GdW5jdGlvbilcclxuICAgICAgICAgICAgcmV0dXJuIF9hbmltYXRpb25GdW5jdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFuaW1hdGUocGFyZW50X21vZGVsLCBkZWx0YVRpbWUpe1xyXG4gICAgICAgIGxldCBhbmltYXRpb24gPSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uO1xyXG4gICAgICAgICAgICBpZihhbmltYXRpb24uaXNBbmltYXRlKXtcclxuICAgICAgICAgICAgICAgIGxldCBfYW5pbWF0aW9uRnVuY3Rpb24gPSBBbmltYXRpb24ucGFyc2VBbmltYXRpb25GdW5jdGlvbihwYXJlbnRfbW9kZWwpO1xyXG4gICAgICAgICAgICAgICAgaWYoX2FuaW1hdGlvbkZ1bmN0aW9uKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RyID0gcGFyZW50X21vZGVsLmFuaW1hdGlvbi5hbmltYXRpb25GdW5jdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmFuaW1hdGlvbkZ1bmN0aW9uID0gX2FuaW1hdGlvbkZ1bmN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uYW5pbWF0aW9uRnVuY3Rpb24ocGFyZW50X21vZGVsLCBkZWx0YVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uYW5pbWF0aW9uRnVuY3Rpb24gPSBzdHI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IobGV0IG1vZGVsIG9mIHBhcmVudF9tb2RlbC5jaGlsZHJlbil7ICAgIFxyXG4gICAgICAgICAgICBBbmltYXRpb24uYW5pbWF0ZShtb2RlbCwgZGVsdGFUaW1lKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyByZWN1cnNlIGVhY2ggbm9kZSBjaGlsZFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRBdXRvKHBhcmVudF9tb2RlbCl7XHJcbiAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5pc0F1dG8gPSAhcGFyZW50X21vZGVsLmFuaW1hdGlvbi5pc0F1dG87XHJcbiAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBwYXJlbnRfbW9kZWwuY2hpbGRyZW4peyAgICBcclxuICAgICAgICAgICAgQW5pbWF0aW9uLnNldEF1dG8obW9kZWwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwbGF5QW5pbWF0aW9uKHBhcmVudF9tb2RlbCl7XHJcbiAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5pc0FuaW1hdGUgPSB0cnVlO1xyXG4gICAgICAgIGlmKHBhcmVudF9tb2RlbC5hbmltYXRpb24uaXNSZXZlcnNlKXtcclxuICAgICAgICAgICAgaWYocGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMpe1xyXG4gICAgICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA9IHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPSAwO1xyXG4gICAgICAgIGZvcihsZXQgbW9kZWwgb2YgcGFyZW50X21vZGVsLmNoaWxkcmVuKXsgICAgXHJcbiAgICAgICAgICAgIEFuaW1hdGlvbi5wbGF5QW5pbWF0aW9uKG1vZGVsKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcGF1c2VDb250aW51ZUFuaW1hdGlvbihwYXJlbnRfbW9kZWwpe1xyXG4gICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uaXNBbmltYXRlID0gIXBhcmVudF9tb2RlbC5hbmltYXRpb24uaXNBbmltYXRlO1xyXG4gICAgICAgIGZvcihsZXQgbW9kZWwgb2YgcGFyZW50X21vZGVsLmNoaWxkcmVuKXsgICAgXHJcbiAgICAgICAgICAgIEFuaW1hdGlvbi5wYXVzZUNvbnRpbnVlQW5pbWF0aW9uKG1vZGVsKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmV2ZXJzZUFuaW1hdGlvbihwYXJlbnRfbW9kZWwpe1xyXG4gICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uaXNSZXZlcnNlID0gIXBhcmVudF9tb2RlbC5hbmltYXRpb24uaXNSZXZlcnNlO1xyXG4gICAgICAgIGZvcihsZXQgbW9kZWwgb2YgcGFyZW50X21vZGVsLmNoaWxkcmVuKXsgICAgXHJcbiAgICAgICAgICAgIEFuaW1hdGlvbi5yZXZlcnNlQW5pbWF0aW9uKG1vZGVsKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYW5pbWF0aW9uU2NyaXB0KCl7XHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uU2NyaXB0ID0gYCgoX25vZGUsIGRlbHRhVGltZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZnJhbWVzID0gX25vZGUuYW5pbWF0aW9uLmZyYW1lcztcclxuICAgICAgICAgICAgaWYoX25vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA+PSBmcmFtZXMubGVuZ3RoIHx8IF9ub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPCAwKXtcclxuICAgICAgICAgICAgICAgIGlmKF9ub2RlLmFuaW1hdGlvbi5pc0F1dG8pe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKF9ub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPCAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX25vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA9IGZyYW1lcy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBfbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lID0gX25vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSAlIGZyYW1lcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNleyAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfbm9kZS5hbmltYXRpb24uaXNBbmltYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBfbm9kZS50cmFuc2Zvcm0gPSBmcmFtZXNbX25vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZV07XHJcbiAgICAgICAgICAgICAgICBpZihfbm9kZS5hbmltYXRpb24uaXNSZXZlcnNlKXtcclxuICAgICAgICAgICAgICAgICAgICBfbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lLS07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIF9ub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUrKztcclxuICAgICAgICAgICAgICAgICAgICAgaWYoX25vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA9PSBmcmFtZXMubGVuZ3RoICYmICFfbm9kZS5hbmltYXRpb24uaXNBdXRvKSBfbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lID0gZnJhbWVzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KWBcclxuICAgICAgICByZXR1cm4gYW5pbWF0aW9uU2NyaXB0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBuZXh0RnJhbWUocGFyZW50X21vZGVsKXtcclxuICAgICAgICBcclxuICAgICAgICBpZihwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lcyl7XHJcbiAgICAgICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lKys7XHJcbiAgICAgICAgICAgIGlmKHBhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lID49IHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA9IHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGFyZW50X21vZGVsLnRyYW5zZm9ybSA9IHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzW3BhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBwYXJlbnRfbW9kZWwuY2hpbGRyZW4peyAgICBcclxuICAgICAgICAgICAgQW5pbWF0aW9uLm5leHRGcmFtZShtb2RlbClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHByZXZGcmFtZShwYXJlbnRfbW9kZWwpe1xyXG4gICAgICAgIGlmKHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzKXtcclxuICAgICAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUtLTtcclxuICAgICAgICAgICAgaWYocGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPCAwKXtcclxuICAgICAgICAgICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYXJlbnRfbW9kZWwudHJhbnNmb3JtID0gcGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXNbcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IG1vZGVsIG9mIHBhcmVudF9tb2RlbC5jaGlsZHJlbil7ICAgIFxyXG4gICAgICAgICAgICBBbmltYXRpb24ucHJldkZyYW1lKG1vZGVsKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZmlyc3RGcmFtZShwYXJlbnRfbW9kZWwpe1xyXG4gICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uaXNBbmltYXRlID0gZmFsc2U7XHJcbiAgICAgICAgaWYocGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMpe1xyXG4gICAgICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICAgICAgICAgIHBhcmVudF9tb2RlbC50cmFuc2Zvcm0gPSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lc1twYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgbW9kZWwgb2YgcGFyZW50X21vZGVsLmNoaWxkcmVuKXsgICAgXHJcbiAgICAgICAgICAgIEFuaW1hdGlvbi5maXJzdEZyYW1lKG1vZGVsKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbGFzdEZyYW1lKHBhcmVudF9tb2RlbCl7XHJcbiAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5pc0FuaW1hdGUgPSBmYWxzZTtcclxuICAgICAgICBpZihwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lcyl7XHJcbiAgICAgICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lID0gcGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgcGFyZW50X21vZGVsLnRyYW5zZm9ybSA9IHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzW3BhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBwYXJlbnRfbW9kZWwuY2hpbGRyZW4peyAgICBcclxuICAgICAgICAgICAgQW5pbWF0aW9uLmxhc3RGcmFtZShtb2RlbClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRvdGFsTW9kZWxGcmFtZXMocGFyZW50X21vZGVsKXtcclxuICAgICAgICBsZXQgdG90YWxGcmFtZXMgPSAwO1xyXG4gICAgICAgIGlmKHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzKXtcclxuICAgICAgICAgICAgdG90YWxGcmFtZXMgPSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lcy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgY2hpbGRfbW9kZWwgb2YgcGFyZW50X21vZGVsLmNoaWxkcmVuKXsgICAgXHJcbiAgICAgICAgICAgIC8vIHJlY3Vyc2UgZWFjaCBub2RlIGNoaWxkLCBmaW5kIG1heCBmcmFtZVxyXG4gICAgICAgICAgICBsZXQgY2hpbGRUb3RhbEZyYW1lcyA9IEFuaW1hdGlvbi50b3RhbE1vZGVsRnJhbWVzKGNoaWxkX21vZGVsKTtcclxuICAgICAgICAgICAgaWYoY2hpbGRUb3RhbEZyYW1lcyA+IHRvdGFsRnJhbWVzKXtcclxuICAgICAgICAgICAgICAgIHRvdGFsRnJhbWVzID0gY2hpbGRUb3RhbEZyYW1lcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdG90YWxGcmFtZXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRvdGFsTm9kZUZyYW1lcyhwYXJlbnRfbW9kZWwpe1xyXG4gICAgICAgIGxldCB0b3RhbE5vZGVGcmFtZXMgPSBcIi1cIjtcclxuICAgICAgICBpZihwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lcyl7XHJcbiAgICAgICAgICAgIC8vIGFzIHN0cmluZ1xyXG4gICAgICAgICAgICB0b3RhbE5vZGVGcmFtZXMgPSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lcy5sZW5ndGgudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRvdGFsTm9kZUZyYW1lcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3VycmVudE1vZGVsRnJhbWUocGFyZW50X21vZGVsKXtcclxuICAgICAgICBsZXQgY3VycmVudEZyYW1lID0gMDtcclxuICAgICAgICBpZihwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lcyl7XHJcbiAgICAgICAgICAgIGN1cnJlbnRGcmFtZSA9IHBhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IG1vZGVsIG9mIHBhcmVudF9tb2RlbC5jaGlsZHJlbil7ICAgIFxyXG4gICAgICAgICAgICAvLyByZWN1cnNlIGVhY2ggbm9kZSBjaGlsZCwgZmluZCBtYXggZnJhbWVcclxuICAgICAgICAgICAgbGV0IGNoaWxkQ3VycmVudEZyYW1lID0gQW5pbWF0aW9uLmN1cnJlbnRNb2RlbEZyYW1lKG1vZGVsKTtcclxuICAgICAgICAgICAgaWYoY2hpbGRDdXJyZW50RnJhbWUgPiBjdXJyZW50RnJhbWUpe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudEZyYW1lID0gY2hpbGRDdXJyZW50RnJhbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRGcmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3VycmVudE5vZGVGcmFtZShub2RlKXtcclxuICAgICAgICBsZXQgY3VyckZyYW1lID0gXCItXCJcclxuICAgICAgICBpZihub2RlLmFuaW1hdGlvbi5mcmFtZXMpe1xyXG4gICAgICAgICAgICBjdXJyRnJhbWUgPSBub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUudG9TdHJpbmcoKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY3VyckZyYW1lXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhhbmRsZUdlbmVyYWxUcmFuc2Zvcm0obm9kZSwgZG9jKXtcclxuICAgICAgICBsZXQgW3R4LCB0eSwgdHpdID0gbm9kZS50cmFuc2Zvcm0udHJhbnNsYXRlXHJcbiAgICAgICAgbGV0IFtyeCwgcnksIHJ6XSA9IG5vZGUudHJhbnNmb3JtLnJvdGF0ZVxyXG4gICAgICAgIHJ4ID0gcmFkVG9EZWcocngpOyBcclxuICAgICAgICByeSA9IHJhZFRvRGVnKHJ5KTsgXHJcbiAgICAgICAgcnogPSByYWRUb0RlZyhyeik7XHJcbiAgICAgICAgbGV0IFtzeCxzeSxzel0gPSBub2RlLnRyYW5zZm9ybS5zY2FsZVxyXG5cclxuICAgICAgIC8vIHNsaWRlciB0eCwgdHksIHR6IFxyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInRyYW5zbGF0aW9uLXgtc2xpZGVyXCIpLnZhbHVlID0gdHgqNTA7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwidHJhbnNsYXRpb24teS1zbGlkZXJcIikudmFsdWUgPSB0eSo1MDtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2xhdGlvbi16LXNsaWRlclwiKS52YWx1ZSA9IHR6KjUwO1xyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInRyYW5zbGF0aW9uLXgtc2xpZGVyLXZhbHVlXCIpLmlubmVySFRNTCA9IHR4LnRvRml4ZWQoMik7ICAgIFxyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInRyYW5zbGF0aW9uLXktc2xpZGVyLXZhbHVlXCIpLmlubmVySFRNTCA9IHR5LnRvRml4ZWQoMik7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwidHJhbnNsYXRpb24tei1zbGlkZXItdmFsdWVcIikuaW5uZXJIVE1MID0gdHoudG9GaXhlZCgyKTtcclxuICAgICAgICAvLyByb3RhdGlvbiB0eCwgdHksIHR6IFxyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInJvdGF0aW9uLXgtc2xpZGVyXCIpLnZhbHVlID0gcng7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwicm90YXRpb24teS1zbGlkZXJcIikudmFsdWUgPSByeTtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJyb3RhdGlvbi16LXNsaWRlclwiKS52YWx1ZSA9IHJ6O1xyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInJvdGF0aW9uLXgtc2xpZGVyLXZhbHVlXCIpLmlubmVySFRNTCA9IHJ4LnRvRml4ZWQoMik7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwicm90YXRpb24teS1zbGlkZXItdmFsdWVcIikuaW5uZXJIVE1MID0gcnkudG9GaXhlZCgyKTtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJyb3RhdGlvbi16LXNsaWRlci12YWx1ZVwiKS5pbm5lckhUTUwgPSByei50b0ZpeGVkKDIpO1xyXG4gICAgICAgIC8vIHNjYWxlIHN4LCBzeSwgc3pcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJzY2FsYXRpb24teC1zbGlkZXJcIikudmFsdWUgPSBzeCoxMDtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJzY2FsYXRpb24teS1zbGlkZXJcIikudmFsdWUgPSBzeSoxMDtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJzY2FsYXRpb24tei1zbGlkZXJcIikudmFsdWUgPSBzeioxMDtcclxuICAgICAgIFxyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInNjYWxhdGlvbi14LXNsaWRlci12YWx1ZVwiKS5pbm5lckhUTUwgPSAoc3ggKiAxLjAwKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInNjYWxhdGlvbi15LXNsaWRlci12YWx1ZVwiKS5pbm5lckhUTUwgPSAoc3kgKiAxLjAwKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInNjYWxhdGlvbi16LXNsaWRlci12YWx1ZVwiKS5pbm5lckhUTUwgPSAoc3ogKiAxLjAwKS50b0ZpeGVkKDIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoYW5kbGVUcmFuc2Zvcm0obm9kZSwgZG9jKXtcclxuICAgICAgICBpZighbm9kZS5hbmltYXRpb24uaXNBbmltYXRlKSByZXR1cm47XHJcbiAgICAgICAgQW5pbWF0aW9uLmhhbmRsZUdlbmVyYWxUcmFuc2Zvcm0obm9kZSwgZG9jKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlbmFibGVBbmltYXRpb24ocGFyZW50X21vZGVsKXtcclxuICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmlzQW5pbWF0ZSA9IHRydWU7XHJcbiAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBwYXJlbnRfbW9kZWwuY2hpbGRyZW4peyAgICBcclxuICAgICAgICAgICAgQW5pbWF0aW9uLmVuYWJsZUFuaW1hdGlvbihtb2RlbClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRpc2FibGVBbmltYXRpb24ocGFyZW50X21vZGVsKXtcclxuICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmlzQW5pbWF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIGZvcihsZXQgbW9kZWwgb2YgcGFyZW50X21vZGVsLmNoaWxkcmVuKXsgICAgXHJcbiAgICAgICAgICAgIEFuaW1hdGlvbi5kaXNhYmxlQW5pbWF0aW9uKG1vZGVsKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVsZXRlQ3VycmVudEZyYW1lKG5vZGUpe1xyXG4gICAgICAgIGlmKG5vZGUuYW5pbWF0aW9uLmZyYW1lcyl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBub2RlLmFuaW1hdGlvbi5mcmFtZXMuc3BsaWNlKG5vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSwgMSk7XHJcbiAgICAgICAgICAgIGlmKG5vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSAhPSAwKXtcclxuICAgICAgICAgICAgICAgIG5vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSAtPSAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKG5vZGUuYW5pbWF0aW9uLmZyYW1lcy5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFuaW1hdGlvbi5mcmFtZXMgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lID0gMDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBub2RlLnRyYW5zZm9ybSA9IG5vZGUuYW5pbWF0aW9uLmZyYW1lc1tub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWVdXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZWRpdEN1cnJlbnRGcmFtZShub2RlLCB0cmFuc2Zvcm0pe1xyXG4gICAgICAgIGlmKG5vZGUuYW5pbWF0aW9uLmZyYW1lcyl7XHJcbiAgICAgICAgICAgIGxldCBjdXJyRnJhbWUgPSBub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWU7XHJcbiAgICAgICAgICAgIGlmKGN1cnJGcmFtZSA8IG5vZGUuYW5pbWF0aW9uLmZyYW1lcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hbmltYXRpb24uZnJhbWVzW2N1cnJGcmFtZV0gPSB0cmFuc2Zvcm07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihjdXJyRnJhbWUgPT0gbm9kZS5hbmltYXRpb24uZnJhbWVzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBjdXJyRnJhbWUgPSBjdXJyRnJhbWUgLSAxO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hbmltYXRpb24uZnJhbWVzW2N1cnJGcmFtZV0gPSB0cmFuc2Zvcm07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBub2RlIHRyYW5zZm9ybVxyXG4gICAgICAgICAgICBub2RlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBWZWMzIGZyb20gXCIuLi9zdHJ1Y3RzL21hdGgvVmVjMy5qc1wiXHJcbmltcG9ydCBNYXQ0IGZyb20gXCIuLi9zdHJ1Y3RzL21hdGgvTWF0NC5qc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmF7XHJcbiAgICBzdGF0aWMgcHJvamVjdGlvbk9ydG9ncmFwaGljKGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyKSB7XHJcbiAgICAgICAgLy8gTm90ZTogVGhpcyBtYXRyaXggZmxpcHMgdGhlIFkgYXhpcyBzbyAwIGlzIGF0IHRoZSB0b3AuXHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSByaWdodC1sZWZ0XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdG9wLWJvdHRvbVxyXG4gICAgICAgIGNvbnN0IGRlcHRoID0gZmFyIC0gbmVhclxyXG4gICAgICAgIGNvbnN0IGhvcml6b250YWxSYXRpbyA9IChyaWdodCArIGxlZnQpIC8gd2lkdGhcclxuICAgICAgICBjb25zdCB2ZXJ0aWNhbFJhdGlvID0gKHRvcCArIGJvdHRvbSkgLyBoZWlnaHRcclxuICAgICAgICBjb25zdCBkZXB0aFJhdGlvID0gKGZhciArIG5lYXIpIC8gZGVwdGhcclxuXHJcbiAgICAgICAgcmV0dXJuIFsyIC8gKHdpZHRoKSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDIgLyAoaGVpZ2h0KSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIC0yIC8gKGRlcHRoKSwgMCxcclxuICAgICAgICAgICAgICAgIGhvcml6b250YWxSYXRpbywgdmVydGljYWxSYXRpbywgZGVwdGhSYXRpbywgMV07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBwcm9qZWN0aW9uUGVyc3BlY3RpdmUoZm92LCBhc3BlY3QsIG5lYXIsIGZhcil7XHJcbiAgICAgICAgY29uc3QgZiA9IDEuMCAvIE1hdGgudGFuKGZvdiAvIDIpXHJcbiAgICAgICAgY29uc3QgcmFuZ2VJbnYgPSAxIC8gKG5lYXIgLSBmYXIpXHJcblxyXG4gICAgICAgIHJldHVybiBbZiAvIGFzcGVjdCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIGYsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAobmVhciArIGZhcikgKiByYW5nZUludiwgLTEsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCBuZWFyICogZmFyICogcmFuZ2VJbnYgKiAyLCAwXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwcm9qZWN0aW9uT2JsaXF1ZSh0aGV0YSwgcGhpKXtcclxuXHJcbiAgICAgICAgdmFyIHQgPSBNYXRoLnRhbih0aGV0YSlcclxuICAgICAgICB0ID0gdCA9PSAwID8gMC4wMDAwMSA6IHRcclxuICAgICAgICB2YXIgcCA9IE1hdGgudGFuKHBoaSlcclxuICAgICAgICBwID0gcCA9PSAwID8gMC4wMDAwMSA6IHBcclxuICAgICAgICByZXR1cm4gWzEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgLTEvdCwgLTEvcCwgMSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDFdXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvb2tEaXJlY3Rpb24oZXllLCBjZW50ZXIsIHVwKXtcclxuICAgICAgICAvLyBub3JtYWxpemUgZWFjaCBhcnJheVxyXG4gICAgICAgIC8vIGNoYW5nZSBhcyBWZWMzIGZyb20gYXJyYXlcclxuICAgICAgICBsZXQgX2V5ZSA9IFZlYzMuZnJvbUFycmF5KGV5ZSlcclxuICAgICAgICBsZXQgX2NlbnRlciA9IFZlYzMuZnJvbUFycmF5KGNlbnRlcilcclxuICAgICAgICBsZXQgX3VwID0gVmVjMy5mcm9tQXJyYXkodXApXHJcbiAgICBcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGYgPSBWZWMzLnVuaXRWZWN0b3IoVmVjMy5zdWIoX2V5ZSwgX2NlbnRlcikpIC8vIHpBeGlzXHJcbiAgICAgICAgY29uc3QgcyA9IFZlYzMudW5pdFZlY3RvcihWZWMzLmNyb3NzKF91cCwgZikpIC8vIHhBeGlzXHJcbiAgICAgICAgY29uc3QgdSA9IFZlYzMudW5pdFZlY3RvcihWZWMzLmNyb3NzKGYsIHMpKVxyXG5cclxuICAgICAgICByZXR1cm4gW3MueCwgcy55LCBzLnosIDAsXHJcbiAgICAgICAgICAgICAgICB1LngsIHUueSwgdS56LCAwLFxyXG4gICAgICAgICAgICAgICAgZi54LCBmLnksIGYueiwgMCxcclxuICAgICAgICAgICAgICAgIGV5ZVswXSwgZXllWzFdLCBleWVbMl0sIDFdXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtYWtlWlRvV01hdHJpeChmdWRnZUZhY3Rvcil7XHJcbiAgICAgICAgcmV0dXJuIFsxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCBmdWRnZUZhY3RvciwgMV1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcHJvamVjdGlvbk1hdHJpeChwcm9qZWN0aW9uX3R5cGUsIF9mb3YsIF9hc3BlY3QsX25lYXIsIF9mYXIsIHRoZXRhID0gOTAsIHBoaSA9IDkwKXtcclxuICAgICAgICBjb25zdCBhc3BlY3QgPSBfYXNwZWN0O1xyXG4gICAgICAgIGNvbnN0IGZvdiA9IF9mb3Y7XHJcbiAgICAgICAgY29uc3QgbGVmdCA9IC0yO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gMjtcclxuICAgICAgICBjb25zdCBib3R0b20gPSAtMjtcclxuICAgICAgICBjb25zdCB0b3AgPSAyO1xyXG4gICAgICAgIGNvbnN0IGZhck9ydGhvID0gX2ZhcjtcclxuICAgICAgICBjb25zdCBuZWFyT3J0aG8gPSAtZmFyT3J0aG87XHJcbiAgICBcclxuICAgICAgICBzd2l0Y2ggKHByb2plY3Rpb25fdHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwib3J0aG9ncmFwaGljXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FtZXJhLnByb2plY3Rpb25PcnRvZ3JhcGhpYyhsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXJPcnRobywgZmFyT3J0aG8pXHJcbiAgICAgICAgICAgIGNhc2UgXCJvYmxpcXVlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0NC5tdWx0aXBseShcclxuICAgICAgICAgICAgICAgICAgICBDYW1lcmEucHJvamVjdGlvbk9ibGlxdWUodGhldGEsIHBoaSksXHJcbiAgICAgICAgICAgICAgICAgICAgQ2FtZXJhLnByb2plY3Rpb25PcnRvZ3JhcGhpYyhsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXJPcnRobywgZmFyT3J0aG8pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjYXNlIFwicGVyc3BlY3RpdmVcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBDYW1lcmEucHJvamVjdGlvblBlcnNwZWN0aXZlKFxyXG4gICAgICAgICAgICAgICAgICAgIGZvdixcclxuICAgICAgICAgICAgICAgICAgICBhc3BlY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgX25lYXIsXHJcbiAgICAgICAgICAgICAgICAgICAgX2ZhclxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBDYW1lcmEucHJvamVjdGlvbk9ydG9ncmFwaGljKGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhck9ydGhvLCBmYXJPcnRobylcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHZpZXdNYXRyaXgob3JpZW50YXRpb24sIGxvb2tBdCwgdXApe1xyXG4gICAgICAgIGxldCBbcm9sbCwgcGl0Y2gsIHJhZGl1c10gPSBvcmllbnRhdGlvblxyXG5cclxuICAgICAgICAvLyByb2xsLCBwaXRjaCwgcmFkaXVzXHJcbiAgICAgICAgdmFyIGNhbWVyYU1hdHJpeCA9IE1hdDQubXVsdGlwbHkoXHJcbiAgICAgICAgICAgIE1hdDQubXVsdGlwbHkoXHJcbiAgICAgICAgICAgICAgICBNYXQ0LnJvdGF0ZVkocGl0Y2gpLFxyXG4gICAgICAgICAgICAgICAgTWF0NC5yb3RhdGVYKHJvbGwpKSxcclxuICAgICAgICAgICAgTWF0NC50cmFuc2xhdGUoMCwgMCwgcmFkaXVzKVxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgdmFyIGNhbWVyYVBvc2l0aW9uID0gW1xyXG4gICAgICAgICAgICBjYW1lcmFNYXRyaXhbMTJdLFxyXG4gICAgICAgICAgICBjYW1lcmFNYXRyaXhbMTNdLFxyXG4gICAgICAgICAgICBjYW1lcmFNYXRyaXhbMTRdXHJcbiAgICAgICAgXVxyXG5cclxuICAgICAgICB2YXIgY2FtZXJhTWF0cml4ID0gQ2FtZXJhLmxvb2tEaXJlY3Rpb24oY2FtZXJhUG9zaXRpb24sIGxvb2tBdCwgdXApXHJcblxyXG4gICAgICAgIHZhciB2aWV3TWF0cml4ID0gTWF0NC5pbnZlcnNlKGNhbWVyYU1hdHJpeClcclxuXHJcbiAgICAgICAgcmV0dXJuIHZpZXdNYXRyaXhcclxuICAgIH1cclxufSIsImltcG9ydCB7IHRhcmdldFJvb3QgfSBmcm9tIFwiLi4vaW5kZXguanNcIjtcclxuaW1wb3J0IHsgZGVnVG9SYWQgfSBmcm9tIFwiLi4vc3RydWN0cy9tYXRoL21hdGhVdGlscy5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcmFjdGVyQ29udHJvbGxlcntcclxuXHJcbiAgICAvLyB2ZWxvY2l0eVxyXG4gICAgc3RhdGljIHZ4ID0gMDtcclxuICAgIHN0YXRpYyB2eSA9IDA7XHJcbiAgICBzdGF0aWMgdnogPSAwO1xyXG5cclxuICAgIC8vIGFjY2VsZXJhdGlvblxyXG4gICAgc3RhdGljIGF4ID0gMWUtNTtcclxuICAgIHN0YXRpYyBheSA9IC0xZS01OyAvLyBmb3IgZ3Jhdml0eVxyXG4gICAgc3RhdGljIGF6ID0gMWUtNTtcclxuXHJcbiAgICBzdGF0aWMgamVyayA9IDAuMDE7XHJcbiAgICBzdGF0aWMgY3VycmVudEdyb3VuZCA9IDA7XHJcblxyXG4gICAgc3RhdGljIHZlbG9jaXR5VGhyZXNob2xkID0gMWUtNDtcclxuXHJcbiAgICBzdGF0aWMgdmVsb2NpdHlMb29wKHBhcmVudF9ub2RlLCBkZWx0YV90aW1lKXtcclxuICAgICAgICAvLyBoYW5kbGUgdGhlIHRyYW5zZm9ybWF0aW9uIG9mIHRoZSBjaGFyYWN0ZXJcclxuICAgICAgICBpZihkZWx0YV90aW1lID49IDIwKSBkZWx0YV90aW1lID0gMTVcclxuICAgICAgICBwYXJlbnRfbm9kZS50cmFuc2Zvcm0udHJhbnNsYXRlWzBdICs9IENoYXJhY3RlckNvbnRyb2xsZXIudnggKiBkZWx0YV90aW1lO1xyXG4gICAgICAgIHBhcmVudF9ub2RlLnRyYW5zZm9ybS50cmFuc2xhdGVbMV0gKz0gQ2hhcmFjdGVyQ29udHJvbGxlci52eSAqIGRlbHRhX3RpbWU7XHJcbiAgICAgICAgcGFyZW50X25vZGUudHJhbnNmb3JtLnRyYW5zbGF0ZVsyXSArPSBDaGFyYWN0ZXJDb250cm9sbGVyLnZ6ICogZGVsdGFfdGltZTtcclxuXHJcbiAgICAgICAgLy8gaGFuZGxlIHZ4XHJcbiAgICAgICAgaWYoQ2hhcmFjdGVyQ29udHJvbGxlci52eCA+IENoYXJhY3RlckNvbnRyb2xsZXIudmVsb2NpdHlUaHJlc2hvbGQpe1xyXG4gICAgICAgIENoYXJhY3RlckNvbnRyb2xsZXIudnggLT0gQ2hhcmFjdGVyQ29udHJvbGxlci5heCAqIGRlbHRhX3RpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoQ2hhcmFjdGVyQ29udHJvbGxlci52eCA8IC1DaGFyYWN0ZXJDb250cm9sbGVyLnZlbG9jaXR5VGhyZXNob2xkKXtcclxuICAgICAgICBDaGFyYWN0ZXJDb250cm9sbGVyLnZ4ICs9IENoYXJhY3RlckNvbnRyb2xsZXIuYXggKiBkZWx0YV90aW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBoYW5kbGUgdnlcclxuICAgICAgICBpZihDaGFyYWN0ZXJDb250cm9sbGVyLnZ6ID4gQ2hhcmFjdGVyQ29udHJvbGxlci52ZWxvY2l0eVRocmVzaG9sZCl7XHJcbiAgICAgICAgQ2hhcmFjdGVyQ29udHJvbGxlci52eiAtPSBDaGFyYWN0ZXJDb250cm9sbGVyLmF6ICogZGVsdGFfdGltZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihDaGFyYWN0ZXJDb250cm9sbGVyLnZ6IDwgLUNoYXJhY3RlckNvbnRyb2xsZXIudmVsb2NpdHlUaHJlc2hvbGQpe1xyXG4gICAgICAgIENoYXJhY3RlckNvbnRyb2xsZXIudnogKz0gQ2hhcmFjdGVyQ29udHJvbGxlci5heiAqIGRlbHRhX3RpbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBoYW5kbGUgbmVhciAwIHZlbG9jaXR5XHJcbiAgICAgICAgaWYoTWF0aC5hYnMoQ2hhcmFjdGVyQ29udHJvbGxlci52eCkgPCBDaGFyYWN0ZXJDb250cm9sbGVyLnZlbG9jaXR5VGhyZXNob2xkICl7XHJcbiAgICAgICAgICAgIENoYXJhY3RlckNvbnRyb2xsZXIudnggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihNYXRoLmFicyhDaGFyYWN0ZXJDb250cm9sbGVyLnZ5KSA8IENoYXJhY3RlckNvbnRyb2xsZXIudmVsb2NpdHlUaHJlc2hvbGQpe1xyXG4gICAgICAgICAgICBDaGFyYWN0ZXJDb250cm9sbGVyLnZ5ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoTWF0aC5hYnMoQ2hhcmFjdGVyQ29udHJvbGxlci52eikgPCBDaGFyYWN0ZXJDb250cm9sbGVyLnZlbG9jaXR5VGhyZXNob2xkKXtcclxuICAgICAgICAgICAgQ2hhcmFjdGVyQ29udHJvbGxlci52eiA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBncmF2aXR5TG9vcChwYXJlbnRfbm9kZSwgZGVsdGFfdGltZSl7XHJcbiAgICAgICAgaWYodGFyZ2V0Um9vdCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIHJldHVybiBpZiA8PSBjdXJyZW50R3JvdW5kXHJcbiAgICAgICAgaWYocGFyZW50X25vZGUudHJhbnNmb3JtLnRyYW5zbGF0ZVsxXSA8PSBDaGFyYWN0ZXJDb250cm9sbGVyLmN1cnJlbnRHcm91bmQpe1xyXG5cclxuICAgICAgICAgICAgQ2hhcmFjdGVyQ29udHJvbGxlci52eSA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaGFuZGxlIHZ5XHJcbiAgICAgICAgaWYoZGVsdGFfdGltZSA+PSAyMCkgZGVsdGFfdGltZSA9IDE1O1xyXG4gICAgICAgIENoYXJhY3RlckNvbnRyb2xsZXIudnkgKz0gQ2hhcmFjdGVyQ29udHJvbGxlci5heSAqIGRlbHRhX3RpbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gaWYoKVxyXG4gICAgICAgIC8vIENoYXJhY3RlckNvbnRyb2xsZXIudnkgKz0gQ2hhcmFjdGVyQ29udHJvbGxlci5heSAqIGRlbHRhX3RpbWU7XHJcbiAgICAgICAgLy8gY29udmVyZ2UgYWxsIGFjY2VsZXJhdGlvbiBpbnRvIDBcclxuICAgICAgICAvLyBoYW5kbGUgYXggaWYgK1xyXG4gICAgICAgIC8vIGlmKENoYXJhY3RlckNvbnRyb2xsZXIuYXggPiAwLjAwMSl7XHJcbiAgICAgICAgLy8gICAgIENoYXJhY3RlckNvbnRyb2xsZXIuYXggLT0gQ2hhcmFjdGVyQ29udHJvbGxlci5qZXJrICogZGVsdGFfdGltZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gLy8gaGFuZGxlIGF4IGlmIC1cclxuICAgICAgICAvLyBlbHNlIGlmKENoYXJhY3RlckNvbnRyb2xsZXIuYXggPCAtMC4wMDEpe1xyXG4gICAgICAgIC8vICAgICBDaGFyYWN0ZXJDb250cm9sbGVyLmF4ICs9IENoYXJhY3RlckNvbnRyb2xsZXIuamVyayAqIGRlbHRhX3RpbWU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIC8vIGhhbmRsZSBpZiBheCBpcyBjbG9zZSB0byAwIGJ1dCBub3QgMFxyXG4gICAgICAgIC8vIGVsc2V7XHJcbiAgICAgICAgLy8gICAgIENoYXJhY3RlckNvbnRyb2xsZXIuYXggPSAwO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gLy8gaGFuZGxlIGF6IGlmICtcclxuICAgICAgICAvLyBpZihDaGFyYWN0ZXJDb250cm9sbGVyLmF6ID4gMCl7XHJcbiAgICAgICAgLy8gICAgIENoYXJhY3RlckNvbnRyb2xsZXIuYXogLT0gQ2hhcmFjdGVyQ29udHJvbGxlci5qZXJrICogZGVsdGFfdGltZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gLy8gaGFuZGxlIGF6IGlmIC1cclxuICAgICAgICAvLyBlbHNlIGlmKENoYXJhY3RlckNvbnRyb2xsZXIuYXogPCAwKXtcclxuICAgICAgICAvLyAgICAgQ2hhcmFjdGVyQ29udHJvbGxlci5heiArPSBDaGFyYWN0ZXJDb250cm9sbGVyLmplcmsgKiBkZWx0YV90aW1lO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyAvLyBoYW5kbGUgaWYgYXogaXMgY2xvc2UgdG8gMCBidXQgbm90IDBcclxuICAgICAgICAvLyBlbHNlIGlmKE1hdGguYWJzKENoYXJhY3RlckNvbnRyb2xsZXIuYXopIDwgQ2hhcmFjdGVyQ29udHJvbGxlci5qZXJrKXtcclxuICAgICAgICAvLyAgICAgQ2hhcmFjdGVyQ29udHJvbGxlci5heiA9IDA7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IE5vZGUgZnJvbSBcIi4uL3N0cnVjdHMvbm9kZS5qc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVKU09OKG9iamVjdHMpIHtcclxuXHJcbiAgICAvLyBDb252ZXJ0IE5vZGUgaW5zdGFuY2VzIHRvIHNlcmlhbGl6YWJsZSBmb3JtYXRcclxuICAgIGNvbnN0IHNlcmlhbGl6YWJsZU9iamVjdHMgPSBvYmplY3RzLm1hcChvYmogPT4gb2JqLnRvSlNPTigpKTtcclxuICAgIGNvbnN0IGpzb25Db250ZW50ID0gSlNPTi5zdHJpbmdpZnkoc2VyaWFsaXphYmxlT2JqZWN0cywgbnVsbCwgMik7XHJcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2pzb25Db250ZW50XSwgeyB0eXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9KTtcclxuXHJcbiAgICAvLyBFbGVtZW50IHRvIHRyaWdnZXIgdGhlIGRvd25sb2FkXHJcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBhLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgYS5kb3dubG9hZCA9IG9iamVjdHNbMF0ubmFtZSArIFwiLmpzb25cIjtcclxuICAgIGEuaGlkZGVuID0gdHJ1ZTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XHJcblxyXG4gICAgLy8gVHJpZ2dlciBkb3dubG9hZFxyXG4gICAgYS5jbGljaygpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTsgIC8vIENsZWFuIHVwXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkSlNPTihmaWxlSW5wdXQsIGNhbGxiYWNrKSB7XHJcbiAgICBjb25zdCBmaWxlID0gZmlsZUlucHV0LmZpbGVzWzBdO1xyXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBqc29uQ29udGVudCA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoanNvbkNvbnRlbnQpO1xyXG4gICAgICAgIGNvbnN0IG9iamVjdHMgPSBkYXRhLm1hcChvYmpEYXRhID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBOb2RlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlLmZyb21KU09OKG9iakRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNhbGxiYWNrKG9iamVjdHMpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZpbGUgY291bGQgbm90IGJlIHJlYWQhIENvZGUgXCIgKyBldmVudC50YXJnZXQuZXJyb3IuY29kZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhcGVyVGV4dHVyZShnbCkge1xyXG4gIGNvbnN0IHRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XHJcbiAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XHJcbiAgZ2wudGV4SW1hZ2UyRChcclxuICAgIGdsLlRFWFRVUkVfMkQsXHJcbiAgICAwLFxyXG4gICAgZ2wuUkdCQSxcclxuICAgIDEsXHJcbiAgICAxLFxyXG4gICAgMCxcclxuICAgIGdsLlJHQkEsXHJcbiAgICBnbC5VTlNJR05FRF9CWVRFLFxyXG4gICAgbmV3IFVpbnQ4QXJyYXkoWzAsIDAsIDAsIDBdKVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcclxuICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgaW1hZ2UpO1xyXG4gICAgaWYgKGlzUG93ZXJPZjIoaW1hZ2Uud2lkdGgpICYmIGlzUG93ZXJPZjIoaW1hZ2UuaGVpZ2h0KSkge1xyXG4gICAgICBnbC5nZW5lcmF0ZU1pcG1hcChnbC5URVhUVVJFXzJEKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBpbWFnZS5zcmMgPSBcIi4vbWFwcGluZy9wYXBlci5qcGVnXCI7IFxyXG4gIHJldHVybiB0ZXh0dXJlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1Bvd2VyT2YyKHZhbHVlKSB7XHJcbiAgcmV0dXJuICh2YWx1ZSAmICh2YWx1ZSAtIDEpKSA9PSAwO1xyXG59IFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVudmlyb25tZW50VGV4dHVyZShnbCkge1xyXG4gIGNvbnN0IHRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XHJcbiAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV9DVUJFX01BUCwgdGV4dHVyZSk7XHJcblxyXG4gIGNvbnN0IGZhY2VJbmZvcyA9IFtcclxuICAgIHsgdGFyZ2V0OiBnbC5URVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1gsIHVybDogXCIuL21hcHBpbmcvZW52aXJvbm1lbnQuanBnXCIgfSxcclxuICAgIHsgdGFyZ2V0OiBnbC5URVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1gsIHVybDogXCIuL21hcHBpbmcvZW52aXJvbm1lbnQuanBnXCIgfSxcclxuICAgIHsgdGFyZ2V0OiBnbC5URVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1ksIHVybDogXCIuL21hcHBpbmcvZW52aXJvbm1lbnQuanBnXCIgfSxcclxuICAgIHsgdGFyZ2V0OiBnbC5URVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1ksIHVybDogXCIuL21hcHBpbmcvZW52aXJvbm1lbnQuanBnXCIgfSxcclxuICAgIHsgdGFyZ2V0OiBnbC5URVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1osIHVybDogXCIuL21hcHBpbmcvZW52aXJvbm1lbnQuanBnXCIgfSxcclxuICAgIHsgdGFyZ2V0OiBnbC5URVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1osIHVybDogXCIuL21hcHBpbmcvZW52aXJvbm1lbnQuanBnXCIgfSxcclxuICBdO1xyXG5cclxuICBmYWNlSW5mb3MuZm9yRWFjaCgoZmFjZUluZm8pID0+IHtcclxuICAgIGNvbnN0IHsgdGFyZ2V0LCB1cmwgfSA9IGZhY2VJbmZvO1xyXG5cclxuICAgIGdsLnRleEltYWdlMkQoXHJcbiAgICAgIHRhcmdldCxcclxuICAgICAgMCxcclxuICAgICAgZ2wuUkdCQSxcclxuICAgICAgNTEyLFxyXG4gICAgICA1MTIsXHJcbiAgICAgIDAsXHJcbiAgICAgIGdsLlJHQkEsXHJcbiAgICAgIGdsLlVOU0lHTkVEX0JZVEUsXHJcbiAgICAgIG51bGxcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLnNyYyA9IHVybDtcclxuICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV9DVUJFX01BUCwgdGV4dHVyZSk7XHJcbiAgICAgIGdsLnRleEltYWdlMkQodGFyZ2V0LCAwLCBnbC5SR0JBLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBpbWFnZSk7XHJcbiAgICAgIGdsLmdlbmVyYXRlTWlwbWFwKGdsLlRFWFRVUkVfQ1VCRV9NQVApO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGdsLmdlbmVyYXRlTWlwbWFwKGdsLlRFWFRVUkVfQ1VCRV9NQVApO1xyXG4gIGdsLnRleFBhcmFtZXRlcmkoXHJcbiAgICBnbC5URVhUVVJFX0NVQkVfTUFQLFxyXG4gICAgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLFxyXG4gICAgZ2wuTElORUFSX01JUE1BUF9MSU5FQVJcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQnVtcFRleHR1cmUoZ2wpIHtcclxuICBjb25zdCB0ZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xyXG4gIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xyXG4gIGdsLnRleEltYWdlMkQoXHJcbiAgICBnbC5URVhUVVJFXzJELCBcclxuICAgIDAsIFxyXG4gICAgZ2wuUkdCQSwgXHJcbiAgICAxLCBcclxuICAgIDEsIFxyXG4gICAgMCwgXHJcbiAgICBnbC5SR0JBLCBcclxuICAgIGdsLlVOU0lHTkVEX0JZVEUsIFxyXG4gICAgbmV3IFVpbnQ4QXJyYXkoWzI1NSwgMCwgMCwgMjU1XSlcclxuICApO1xyXG5cclxuICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBpbWFnZS5zcmMgPSBcIi4vbWFwcGluZy9idW1wLnBuZ1wiO1xyXG4gIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xyXG4gICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBpbWFnZSk7XHJcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTElORUFSKTtcclxuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIpO1xyXG4gIH1cclxufVxyXG4gICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=