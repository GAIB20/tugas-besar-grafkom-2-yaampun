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

// phong
const shininess = document.getElementById('shininess-slider');
const specular = document.getElementById('specular-slider');
const diffuse = document.getElementById('diffuse-slider');
const ambient = document.getElementById('ambient-slider');

// colors
const basicColor = document.getElementById('basic-color');
const diffuseColor = document.getElementById('diffuse-color');
const specularColor = document.getElementById('specular-color');

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
            setSlider(object);
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

// color
basicColor.addEventListener('input', function(){
    _index_js__WEBPACK_IMPORTED_MODULE_0__.target.pickedColor = hexToRgb(basicColor.value);
});

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
    frames: headFrames(),
    currentFrame: 0,
    animationFunction: _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].animationScript(),
    isAuto: false,
    isReverse: false
};

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
whiteLeftEye.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.2, 0.2, 0.2, [-1, 0.6, 0]);
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
blackRightEye.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.2, 0.2, 0.2, [-1, 0.6, 0]);
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
blackLeftEye.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.2, 0.2, 0.2, [-1, 0.6, 0]);
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
nose.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.2, 0.2, 0.4, [-1.5, 0.55, 0]);
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
rightHole.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.15, 0.2, 0.1, [-1.6, 0.55, 0]);
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
leftHole.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.15, 0.2, 0.1, [-1.6, 0.55, 0]);
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
rightFrontLeg.model = (0,_boxModel_js__WEBPACK_IMPORTED_MODULE_3__["default"])(0.5, 0.2, 0.2, [0.1, 0, 0.15]);
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
    frames: rightFrontLegFrames(),
    currentFrame: 0,
    animationFunction: _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].animationScript(),
    isAuto: false,
    isReverse: false
};

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
leftFrontLeg.diffuse = [1,1,1],
leftFrontLeg.specular = [1,1,1],
leftFrontLeg.ambient = [1,1,1],
leftFrontLeg.shininess = 1,
leftFrontLeg.const = {
    kd: 0.5,
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
    frames: leftRearFrames(),
    currentFrame: 0,
    animationFunction: _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].animationScript(),
    isAuto: false,
    isReverse: false
};

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
        doc.getElementById("translation-x-slider-value").innerHTML = tx;    
        doc.getElementById("translation-y-slider-value").innerHTML = ty;
        doc.getElementById("translation-z-slider-value").innerHTML = tz;
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
            Animation.disableAnimation(model)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNkRBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNkRBQUk7QUFDNUI7QUFDQSxRQUFRLDZEQUFJO0FBQ1o7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZEQUFJO0FBQzFCO0FBQ0EsTUFBTSw2REFBSTtBQUNWO0FBQ0E7QUFDQSxzQkFBc0IsNkRBQUk7QUFDMUI7QUFDQSxNQUFNLDZEQUFJO0FBQ1Y7QUFDQTtBQUNBLHNCQUFzQiw2REFBSTtBQUMxQjtBQUNBLE1BQU0sNkRBQUk7QUFDVjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNkRBQUk7QUFDNUI7QUFDQSxRQUFRLDZEQUFJO0FBQ1o7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZEQUFJO0FBQzFCO0FBQ0EsTUFBTSw2REFBSTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUUscUVBQVE7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNERBQVM7QUFDZixNQUFNLGlGQUF1QjtBQUM3QixNQUFNLGlGQUFzQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZEQUFJLFlBQVksNkRBQUk7QUFDekM7QUFDQSxJQUFJLDREQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix3REFBTTtBQUNqQyxvREFBb0QscUVBQVE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3REFBTTtBQUM3QiwrQkFBK0IsNkRBQUk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw2REFBSTtBQUNuQyxZQUFZLHdEQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDZEQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUksd0VBQWM7QUFDbEIsSUFBSSwwRUFBZ0I7QUFDcEIsSUFBSSx5RUFBZTtBQUNuQixJQUFJLCtFQUFxQjtBQUN6QixJQUFJLCtFQUFvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sTUFBTSxzRUFBa0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixNQUFNLDRFQUF3QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLE1BQU0scUVBQWlCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ087QUFDUCxrQkFBa0Isb0JBQW9CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx3RUFBYztBQUNoQixFQUFFLDBFQUFnQjtBQUNsQjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhEQUFRO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMEJBQTBCO0FBQ2hEO0FBQ0E7QUFDQSxVQUFVLDhEQUFRO0FBQ2xCLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1Asc0JBQXNCLHlEQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0VBQWM7QUFDaEIsRUFBRSwwRUFBZ0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG9CQUFvQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUksd0VBQWM7QUFDbEIsSUFBSSwwRUFBZ0I7QUFDcEIsSUFBSSx5RUFBZTtBQUNuQixJQUFJLCtFQUFxQjtBQUN6QixJQUFJLCtFQUFvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZkaUM7QUFDakM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0EsYUFBYSxxREFBSTtBQUNqQixhQUFhLHFEQUFJO0FBQ2pCLGFBQWEscURBQUk7QUFDakI7QUFDQSxlQUFlLHFEQUFJO0FBQ25CLGVBQWUscURBQUk7QUFDbkI7QUFDQSxjQUFjLHFEQUFJLFlBQVkscURBQUk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEk2QjtBQUNkO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CLDRCQUE0QixPQUFPO0FBQ25DLGlDQUFpQyxnREFBSTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0RBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdEQUFJO0FBQ3ZCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbk1lO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hDNkI7QUFDN0I7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdEQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQOEI7QUFDa0I7QUFDQztBQUNYO0FBQ3RDO0FBQ0E7QUFDQSxvQkFBb0IsZ0RBQUk7QUFDeEI7QUFDQTtBQUNBLGdCQUFnQix3REFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDREQUFRLE1BQU0sNERBQVEsT0FBTyw0REFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwyREFBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdEQUFJO0FBQ3JCO0FBQ0EsYUFBYSx3REFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdEQUFJO0FBQ3JCO0FBQ0EsYUFBYSx3REFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnREFBSTtBQUM3QjtBQUNBLHFCQUFxQix3REFBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnREFBSTtBQUM3QjtBQUNBLHFCQUFxQix3REFBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdEQUFJO0FBQzlCO0FBQ0Esc0JBQXNCLHdEQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZzQztBQUM0QjtBQUNuRDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxvRUFBUTtBQUNyQixhQUFhLG9FQUFRO0FBQ3JCLGFBQWEsb0VBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdFIwQztBQUNBO0FBQzFDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvaGFuZGxlci9ldmVudEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9ib3hNb2RlbC5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21hdGgvTWF0NC5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21hdGgvVmVjMy5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21hdGgvVmVjNC5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21hdGgvbWF0aFV0aWxzLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3N0cnVjdHMvbW9kZWwvY2hpY2tlbi5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21vZGVsL2ZveC5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21vZGVsL2hvbGxvd1RoaW5neS5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21vZGVsL3BpZy5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21vZGVsL3JpbmcuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9ub2RlLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3V0aWxzL0FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy91dGlscy9DYW1lcmEuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvdXRpbHMvZmlsZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvdXRpbHMvdGV4dHVyZS5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YXJnZXQsIFxyXG4gICAgdGFyZ2V0Um9vdCwgXHJcbiAgICBzZXRQcm9qZWN0aW9uVHlwZSwgXHJcbiAgICBzZXRPYmxpcXVlUGhpLCBcclxuICAgIHNldE9ibGlxdWVUaGV0YSwgXHJcbiAgICBzZXRUYXJnZXQsIFxyXG4gICAgcmVuYW1lVGFyZ2V0LFxyXG4gICAgbGlnaHREaXJlY3Rpb24sXHJcbiAgICBkZWxldGVOb2RlLFxyXG4gICAgb2JqZWN0cyxcclxuICAgIHNldFRhcmdldFJvb3QsIFxyXG4gICAgY2hhbmdlTW9kZWxPYmplY3QsIFxyXG4gICAgY2hhbmdlTWFwcGluZ1RleHR1cmUsXHJcbiAgICBhZGROb2RlLFxyXG4gICAgbG9hZE9iamVjdHMsXHJcbiAgICBtb2RlbCxcclxuICAgIGFkZE1vZGVsfSBmcm9tIFwiLi4vaW5kZXguanNcIlxyXG5pbXBvcnQgeyBkZWdUb1JhZCwgcmFkVG9EZWcgfSBmcm9tIFwiLi4vc3RydWN0cy9tYXRoL21hdGhVdGlscy5qc1wiO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuLi91dGlscy9BbmltYXRpb24uanNcIjtcclxuaW1wb3J0IHsgbG9hZEpTT04sIHNhdmVKU09OIH0gZnJvbSBcIi4uL3V0aWxzL2ZpbGVNYW5hZ2VyLmpzXCI7XHJcblxyXG5jb25zdCB0cmFuc2xhdGlvblggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNsYXRpb24teC1zbGlkZXInKTtcclxuY29uc3QgdHJhbnNsYXRpb25ZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zbGF0aW9uLXktc2xpZGVyJyk7XHJcbmNvbnN0IHRyYW5zbGF0aW9uWiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2xhdGlvbi16LXNsaWRlcicpO1xyXG5jb25zdCB0cmFuc2xhdGFpb25YVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNsYXRpb24teC1zbGlkZXItdmFsdWUnKTtcclxuY29uc3QgdHJhbnNsYXRhaW9uWVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zbGF0aW9uLXktc2xpZGVyLXZhbHVlJyk7XHJcbmNvbnN0IHRyYW5zbGF0YWlvblpWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2xhdGlvbi16LXNsaWRlci12YWx1ZScpO1xyXG4vL3JvdGF0aW9uXHJcbmNvbnN0IHJvdGF0aW9uWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGlvbi14LXNsaWRlcicpO1xyXG5jb25zdCByb3RhdGlvblkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm90YXRpb24teS1zbGlkZXInKTtcclxuY29uc3Qgcm90YXRpb25aID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uLXotc2xpZGVyJyk7XHJcbmNvbnN0IHJvdGF0aW9uWFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uLXgtc2xpZGVyLXZhbHVlJyk7XHJcbmNvbnN0IHJvdGF0aW9uWVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uLXktc2xpZGVyLXZhbHVlJyk7XHJcbmNvbnN0IHJvdGF0aW9uWlZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uLXotc2xpZGVyLXZhbHVlJyk7XHJcbi8vc2NhbGF0aW9uXHJcbmNvbnN0IHNjYWxhdGlvblggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NhbGF0aW9uLXgtc2xpZGVyJyk7XHJcbmNvbnN0IHNjYWxhdGlvblkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NhbGF0aW9uLXktc2xpZGVyJyk7XHJcbmNvbnN0IHNjYWxhdGlvblogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NhbGF0aW9uLXotc2xpZGVyJyk7XHJcbmNvbnN0IHNjYWxhdGlvblhWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY2FsYXRpb24teC1zbGlkZXItdmFsdWUnKTtcclxuY29uc3Qgc2NhbGF0aW9uWVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjYWxhdGlvbi15LXNsaWRlci12YWx1ZScpO1xyXG5jb25zdCBzY2FsYXRpb25aVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NhbGF0aW9uLXotc2xpZGVyLXZhbHVlJyk7XHJcbi8vIGNvbXBvbmVudCBjb250YWluZXJcclxuY29uc3QgY29tcG9uZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBvbmVudC1jb250YWluZXInKTtcclxuLy9jYW1lcmFcclxuY29uc3Qgb3J0aG9ncmFwaGljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29ydGhvZ3JhcGhpYycpO1xyXG5jb25zdCBvYmxpcXVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29ibGlxdWUnKTtcclxuY29uc3QgcGVyc3BlY3RpdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGVyc3BlY3RpdmUnKTtcclxuLy8gY2FtZXJhIHJhZGl1c1xyXG5jb25zdCBjYW1lcmFSYWRpdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXJhZGl1cy1zbGlkZXInKTtcclxuLy8gY2FtZXJhIHJvbGwtcGl0Y2hcclxuY29uc3QgY2FtZXJhUm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcm9sbC1zbGlkZXInKTtcclxuY29uc3QgY2FtZXJhUGl0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXBpdGNoLXNsaWRlcicpO1xyXG4vLyBjYW1lcmEgdGhldGEtcGhpXHJcbmNvbnN0IGNhbWVyYVRoZXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS10aGV0YS1zbGlkZXInKTtcclxuY29uc3QgY2FtZXJhUGhpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1waGktc2xpZGVyJyk7XHJcbi8vIHNldCBvcnRob2dyYXBoaWMgYXMgZGVmYXVsdCBpbnB1dCByYWRpbyBidXR0b25cclxub3J0aG9ncmFwaGljLmNoZWNrZWQgPSB0cnVlO1xyXG4vLyBjYW1lcmEgZGVmYXVsdCB2aWV3XHJcbmNvbnN0IGRlZmF1bHRWaWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlZmF1bHQtdmlldycpO1xyXG5cclxuLy8gbW9kZWwgXHJcbmNvbnN0IG1vZGVsU2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGVsLXNlbGVjdGlvbicpO1xyXG5jb25zdCBtYXBwaW5nU2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcHBpbmctc2VsZWN0aW9uJyk7XHJcblxyXG4vLyBhbmltYXRpb25cclxuXHJcbi8vIHBhdXNlLCBwbGF5LCBhdXRvLCByZXZlcnNlXHJcbmNvbnN0IHBhdXNlQ29udGludWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF1c2UtY29udGludWUtYW5pbWF0aW9uJyk7XHJcbmNvbnN0IHBsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheS1hbmltYXRpb24nKTtcclxuY29uc3QgYXV0byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvLWFuaW1hdGlvbicpO1xyXG5jb25zdCByZXZlcnNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JldmVyc2UtYW5pbWF0aW9uJyk7XHJcblxyXG4vLyBuZXh0LCBwcmV2LCBmaXJzdCwgbGFzdFxyXG5jb25zdCBuZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQtYW5pbWF0aW9uJyk7XHJcbmNvbnN0IHByZXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldi1hbmltYXRpb24nKTtcclxuY29uc3QgZmlyc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlyc3QtYW5pbWF0aW9uJyk7XHJcbmNvbnN0IGxhc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFzdC1hbmltYXRpb24nKTtcclxuXHJcbi8vIGZyYW1lIGhhbmRsZXJcclxuY29uc3QgY3VycmVudE1vZGVsRnJhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC1tb2RlbC1mcmFtZScpO1xyXG5jb25zdCBjdXJyZW50Tm9kZUZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtbm9kZS1mcmFtZScpO1xyXG5jb25zdCB0b3RhbE1vZGVsRnJhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWwtbW9kZWwtZnJhbWUnKTtcclxuY29uc3QgdG90YWxOb2RlRnJhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWwtbm9kZS1mcmFtZScpO1xyXG5cclxuLy8gYWRkIGZyYW1lIFxyXG5jb25zdCBhZGRGcmFtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtZnJhbWUnKVxyXG5jb25zdCB2ZXJpZnlBZGRGcmFtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2ZXJpZnktYWRkLWZyYW1lJylcclxuY29uc3QgY2FuY2VsQWRkRnJhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsLWFkZC1mcmFtZScpXHJcblxyXG4vL2VkaXQgZnJhbWVcclxuY29uc3QgZWRpdEZyYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtY3VycmVudC1mcmFtZScpXHJcbmNvbnN0IHZlcmlmeUVkaXRGcmFtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2ZXJpZnktZWRpdC1mcmFtZScpXHJcbmNvbnN0IGNhbmNlbEVkaXRGcmFtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwtZWRpdC1mcmFtZScpXHJcblxyXG4vLyBkZWxldGUgZnJhbWVcclxuY29uc3QgZGVsZXRlRnJhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlLWN1cnJlbnQtZnJhbWUnKVxyXG5jb25zdCB2ZXJpZnlEZWxldGVGcmFtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2ZXJpZnktZGVsZXRlLWZyYW1lJylcclxuY29uc3QgY2FuY2VsRGVsZXRlRnJhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsLWRlbGV0ZS1mcmFtZScpXHJcblxyXG4vLyBhbmltYXRpb25cclxuY29uc3Qgc2F2ZUFuaW1hdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLWFuaW1hdGlvbicpXHJcbmNvbnN0IG9rU2F2ZUFuaW1hdGlvbk1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29rLXNhdmUtYW5pbWF0aW9uJylcclxuXHJcbi8vIGFtYmllbnQgbGlnaHRcclxuY29uc3QgcmVkQW1iaWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWQtc2xpZGVyJyk7XHJcbmNvbnN0IGdyZWVuQW1iaWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncmVlbi1zbGlkZXInKTtcclxuY29uc3QgYmx1ZUFtYmllbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmx1ZS1zbGlkZXInKTtcclxuXHJcbi8vIGxpZ2h0IHBvc2l0aW9uXHJcbmNvbnN0IGxpZ2h0WCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaWdodC14LXNsaWRlcicpO1xyXG5jb25zdCBsaWdodFkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlnaHQteS1zbGlkZXInKTtcclxuY29uc3QgbGlnaHRaID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpZ2h0LXotc2xpZGVyJyk7XHJcblxyXG4vLyBwaG9uZ1xyXG5jb25zdCBzaGluaW5lc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpbmluZXNzLXNsaWRlcicpO1xyXG5jb25zdCBzcGVjdWxhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGVjdWxhci1zbGlkZXInKTtcclxuY29uc3QgZGlmZnVzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWZmdXNlLXNsaWRlcicpO1xyXG5jb25zdCBhbWJpZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FtYmllbnQtc2xpZGVyJyk7XHJcblxyXG4vLyBjb2xvcnNcclxuY29uc3QgYmFzaWNDb2xvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXNpYy1jb2xvcicpO1xyXG5jb25zdCBkaWZmdXNlQ29sb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlmZnVzZS1jb2xvcicpO1xyXG5jb25zdCBzcGVjdWxhckNvbG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwZWN1bGFyLWNvbG9yJyk7XHJcblxyXG4vLyBub2RlIG1hbmFnZXJcclxuZXhwb3J0IGNvbnN0IG5vZGVOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vZGUtbmFtZScpO1xyXG5jb25zdCByZW5hbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVuYW1lLWJ0bicpO1xyXG5jb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlLWJ0bicpO1xyXG5jb25zdCBhZGRDaGlsZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtY2hpbGQtYnRuJylcclxuY29uc3QgaW1wb3J0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltcG9ydC1idG4nKTtcclxuY29uc3QgZXhwb3J0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cG9ydC1idG4nKTtcclxuXHJcbi8vIHNhdmUgYW5kIGxvYWRcclxuY29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLWJ0bicpOyBcclxuY29uc3QgbG9hZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkLWJ0bicpO1xyXG5cclxuXHJcbi8vIGluaXRpYWxcclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRPcHRpb25Nb2RlbChtb2RlbCl7XHJcbiAgICBtb2RlbFNlbGVjdGlvbi5pbm5lckhUTUwgPSAnJztcclxuICAgIG1vZGVsLmZvckVhY2goKG9iamVjdCwgaW5kZXgpID0+IHtcclxuICAgICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gaW5kZXg7XHJcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gb2JqZWN0WzBdLm5hbWU7XHJcbiAgICAgICAgbW9kZWxTZWxlY3Rpb24uYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbi8vIGV2ZW50IGxpc3RlbmVyXHJcbnRyYW5zbGF0aW9uWC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQudHJhbnNmb3JtLnRyYW5zbGF0ZVswXSA9ICgyICogdHJhbnNsYXRpb25YLnZhbHVlKSAvIDEwMDtcclxuICAgIHRyYW5zbGF0YWlvblhWYWx1ZS50ZXh0Q29udGVudCA9IHRhcmdldC50cmFuc2Zvcm0udHJhbnNsYXRlWzBdO1xyXG59KTtcclxudHJhbnNsYXRpb25ZLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIHRhcmdldC50cmFuc2Zvcm0udHJhbnNsYXRlWzFdID0gKDIgKiB0cmFuc2xhdGlvblkudmFsdWUpIC8gMTAwO1xyXG4gICAgdHJhbnNsYXRhaW9uWVZhbHVlLnRleHRDb250ZW50ID0gdGFyZ2V0LnRyYW5zZm9ybS50cmFuc2xhdGVbMV07XHJcbn0pO1xyXG50cmFuc2xhdGlvblouYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgdGFyZ2V0LnRyYW5zZm9ybS50cmFuc2xhdGVbMl0gPSAoMiAqIHRyYW5zbGF0aW9uWi52YWx1ZSkgLyAxMDA7XHJcbiAgICB0cmFuc2xhdGFpb25aVmFsdWUudGV4dENvbnRlbnQgPSB0YXJnZXQudHJhbnNmb3JtLnRyYW5zbGF0ZVsyXTtcclxufSk7XHJcbnJvdGF0aW9uWC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQudHJhbnNmb3JtLnJvdGF0ZVswXSA9IGRlZ1RvUmFkKHJvdGF0aW9uWC52YWx1ZSk7XHJcbiAgICByb3RhdGlvblhWYWx1ZS50ZXh0Q29udGVudCA9IHJvdGF0aW9uWC52YWx1ZTtcclxufSlcclxucm90YXRpb25ZLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIHRhcmdldC50cmFuc2Zvcm0ucm90YXRlWzFdID0gZGVnVG9SYWQocm90YXRpb25ZLnZhbHVlKTtcclxuICAgIHJvdGF0aW9uWVZhbHVlLnRleHRDb250ZW50ID0gcm90YXRpb25ZLnZhbHVlO1xyXG59KVxyXG5yb3RhdGlvblouYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgdGFyZ2V0LnRyYW5zZm9ybS5yb3RhdGVbMl0gPSBkZWdUb1JhZChyb3RhdGlvbloudmFsdWUpO1xyXG4gICAgcm90YXRpb25aVmFsdWUudGV4dENvbnRlbnQgPSByb3RhdGlvbloudmFsdWU7XHJcbn0pXHJcbnNjYWxhdGlvblguYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVswXSA9ICBzY2FsYXRpb25YLnZhbHVlIC8gMjA7XHJcbiAgICBzY2FsYXRpb25YVmFsdWUudGV4dENvbnRlbnQgPSB0YXJnZXQudHJhbnNmb3JtLnNjYWxlWzBdO1xyXG59KVxyXG5zY2FsYXRpb25ZLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIHRhcmdldC50cmFuc2Zvcm0uc2NhbGVbMV0gPSAgc2NhbGF0aW9uWS52YWx1ZSAvIDIwO1xyXG4gICAgc2NhbGF0aW9uWVZhbHVlLnRleHRDb250ZW50ID0gdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVsxXTtcclxufSlcclxuc2NhbGF0aW9uWi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQudHJhbnNmb3JtLnNjYWxlWzJdID0gIHNjYWxhdGlvbloudmFsdWUgLyAyMDtcclxuICAgIHNjYWxhdGlvblpWYWx1ZS50ZXh0Q29udGVudCA9IHRhcmdldC50cmFuc2Zvcm0uc2NhbGVbMl07XHJcbn0pXHJcblxyXG4vLyBtb2RlbCBzZWxlY3Rpb25cclxubW9kZWxTZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKXsgICBcclxuICAgIGNvbnNvbGUubG9nKG1vZGVsU2VsZWN0aW9uLnZhbHVlKTtcclxuICAgIGNoYW5nZU1vZGVsT2JqZWN0KG1vZGVsU2VsZWN0aW9uLnZhbHVlKTtcclxufSlcclxuXHJcbi8vIGNhbWVyYVxyXG5vcnRob2dyYXBoaWMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgc2V0UHJvamVjdGlvblR5cGUoXCJvcnRob2dyYXBoaWNcIik7XHJcbn0pXHJcblxyXG5vYmxpcXVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIHNldFByb2plY3Rpb25UeXBlKFwib2JsaXF1ZVwiKTtcclxufSlcclxuXHJcbnBlcnNwZWN0aXZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIHNldFByb2plY3Rpb25UeXBlKFwicGVyc3BlY3RpdmVcIik7XHJcbn0pXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDb21wb25lbnQgKCkge1xyXG4gICAgY29tcG9uZW50Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUNvbXBvbmVudCh0cmVlTGV2ZWwgPSAwLCBvYmplY3RzKXtcclxuICAgIG9iamVjdHMuZm9yRWFjaCgob2JqZWN0KSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld0NvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcclxuICAgICAgICBuZXdDb21wb25lbnQuc3R5bGUgPSAncGFkZGluZy1sZWZ0OiAnICsgdHJlZUxldmVsKjEuNSArICdlbTsnO1xyXG4gICAgICAgIG5ld0NvbXBvbmVudC5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWF4LXctZml0IGNvbXBvbmVudFwiPiR7b2JqZWN0Lm5hbWV9PC9idXR0b24+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBsZXQgY3JlYXRlZEJ1dHRvbiA9IG5ld0NvbXBvbmVudC5xdWVyeVNlbGVjdG9yKCcuY29tcG9uZW50Jyk7XHJcbiAgICAgICAgY3JlYXRlZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgICAgICBzZXRUYXJnZXQob2JqZWN0KTtcclxuICAgICAgICAgICAgaGFuZGxlVHJhbnNmb3JtKG9iamVjdCk7XHJcbiAgICAgICAgICAgIHNldFNsaWRlcihvYmplY3QpO1xyXG4gICAgICAgICAgICBoYW5kbGVUb3RhbE5vZGVGcmFtZShvYmplY3QpO1xyXG4gICAgICAgICAgICBzZXROb2RlTWFuYWdlcihvYmplY3QpO1xyXG4gICAgICAgICAgICBsZXQgY29tcG9uZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb21wb25lbnRcIik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcG9uZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50c1tpXS5jbGFzc05hbWUgPSBjb21wb25lbnRzW2ldLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGJvcmRlci0yIGJvcmRlci1ibGFjayBweC01XCIsIFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV2dC5jdXJyZW50VGFyZ2V0LmNsYXNzTmFtZSArPSBcIiBib3JkZXItMiBib3JkZXItYmxhY2sgcHgtNVwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbXBvbmVudENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdDb21wb25lbnQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKG9iamVjdC5jaGlsZHJlbi5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgZGlzcGxheUNvbXBvbmVudCh0cmVlTGV2ZWwgKyAxLCBvYmplY3QuY2hpbGRyZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFNsaWRlcihub2RlKXtcclxuICAgIHJlZEFtYmllbnQudmFsdWUgPSBub2RlLmFtYmllbnRbMF07XHJcbiAgICBncmVlbkFtYmllbnQudmFsdWUgPSBub2RlLmFtYmllbnRbMV07XHJcbiAgICBibHVlQW1iaWVudC52YWx1ZSA9IG5vZGUuYW1iaWVudFsyXTtcclxuICAgIHNoaW5pbmVzcy52YWx1ZSA9IG5vZGUuc2hpbmluZXNzO1xyXG4gICAgc3BlY3VsYXIudmFsdWUgPSBub2RlLnNwZWN1bGFyWzBdO1xyXG4gICAgZGlmZnVzZS52YWx1ZSA9IG5vZGUuZGlmZnVzZVswXTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVUcmFuc2Zvcm0obm9kZSl7XHJcbiAgICAvLyBjaGFuZ2UgdHJhbnNsYXRpb24sIHJvdGF0aW9uLCBzY2FsYXRpb25cclxuICAgIGxldCBbdHgsIHR5LCB0el0gPSBub2RlLnRyYW5zZm9ybS50cmFuc2xhdGVcclxuICAgIC8vIHRpbWVzIDUwXHJcblxyXG4gICAgbGV0IFtyeCwgcnksIHJ6XSA9IG5vZGUudHJhbnNmb3JtLnJvdGF0ZVxyXG4gICAgLy8gY2hhbmdlIHdpdGggcmFkVG9EZWdcclxuICAgIGlmKHRydWUpe1xyXG4gICAgcnggPSByYWRUb0RlZyhyeCk7XHJcbiAgICByeSA9IHJhZFRvRGVnKHJ5KTtcclxuICAgIHJ6ID0gcmFkVG9EZWcocnopO1xyXG4gICAgfVxyXG4gICAgbGV0IFtzeCwgc3ksIHN6XSA9IG5vZGUudHJhbnNmb3JtLnNjYWxlXHJcbiAgXHJcbiAgICB0cmFuc2xhdGlvblgudmFsdWUgPSB0eCo1MDtcclxuICAgIHRyYW5zbGF0aW9uWS52YWx1ZSA9IHR5KjUwO1xyXG4gICAgdHJhbnNsYXRpb25aLnZhbHVlID0gdHoqNTA7XHJcbiAgICB0cmFuc2xhdGFpb25YVmFsdWUudGV4dENvbnRlbnQgPSB0eDtcclxuICAgIHRyYW5zbGF0YWlvbllWYWx1ZS50ZXh0Q29udGVudCA9IHR5O1xyXG4gICAgdHJhbnNsYXRhaW9uWlZhbHVlLnRleHRDb250ZW50ID0gdHo7XHJcblxyXG4gICAgcm90YXRpb25YLnZhbHVlID0gcng7XHJcbiAgICByb3RhdGlvblkudmFsdWUgPSByeTtcclxuICAgIHJvdGF0aW9uWi52YWx1ZSA9IHJ6O1xyXG4gICAgcm90YXRpb25YVmFsdWUudGV4dENvbnRlbnQgPSByeDtcclxuICAgIHJvdGF0aW9uWVZhbHVlLnRleHRDb250ZW50ID0gcnk7XHJcbiAgICByb3RhdGlvblpWYWx1ZS50ZXh0Q29udGVudCA9IHJ6O1xyXG5cclxuICAgIHNjYWxhdGlvblhWYWx1ZS50ZXh0Q29udGVudCA9IHN4O1xyXG4gICAgc2NhbGF0aW9uWVZhbHVlLnRleHRDb250ZW50ID0gc3k7XHJcbiAgICBzY2FsYXRpb25aVmFsdWUudGV4dENvbnRlbnQgPSBzejtcclxuICAgIHNjYWxhdGlvblgudmFsdWUgPSBzeCoyMDtcclxuICAgIHNjYWxhdGlvblkudmFsdWUgPSBzeCoyMDtcclxuICAgIHNjYWxhdGlvbloudmFsdWUgPSBzeioyMDtcclxuXHJcbiAgICAvLyBjaGFuZ2UgcGhvbmcgc2xpZGVyXHJcbiAgICByZWRBbWJpZW50LnZhbHVlID0gbm9kZS5hbWJpZW50WzBdO1xyXG4gICAgZ3JlZW5BbWJpZW50LnZhbHVlID0gbm9kZS5hbWJpZW50WzFdO1xyXG4gICAgYmx1ZUFtYmllbnQudmFsdWUgPSBub2RlLmFtYmllbnRbMl07XHJcbiAgICBzaGluaW5lc3MudmFsdWUgPSBub2RlLnNoaW5pbmVzcztcclxuICAgIFxyXG4gICAgYmFzaWNDb2xvci52YWx1ZSA9IHJnYlRvSGV4KG5vZGUucGlja2VkQ29sb3IpO1xyXG4gICAgZGlmZnVzZUNvbG9yLnZhbHVlID0gcmdiVG9IZXgobm9kZS5kaWZmdXNlKTtcclxuICAgIHNwZWN1bGFyQ29sb3IudmFsdWUgPSByZ2JUb0hleChub2RlLnNwZWN1bGFyKTtcclxuICAgIFxyXG4gICAgYW1iaWVudC52YWx1ZSA9IG5vZGUuY29uc3Qua2E7XHJcbiAgICBkaWZmdXNlLnZhbHVlID0gbm9kZS5jb25zdC5rZDtcclxuICAgIHNwZWN1bGFyLnZhbHVlID0gbm9kZS5jb25zdC5rcztcclxuICAgIFxyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNhbWVyYVZpZXcobm9kZSkge1xyXG4gICAgbGV0IGVwc2lsb24gPSAwLjAwMTtcclxuICAgIFxyXG4gICAgLy9yYWRpdXMsIHJvbGwsIHBpdGNoXHJcbiAgICBsZXQgcmFkaXVzID0gcGFyc2VGbG9hdChjYW1lcmFSYWRpdXMudmFsdWUpLzEwO1xyXG4gICAgbGV0IHJvbGwgPSBkZWdUb1JhZChwYXJzZUZsb2F0KGNhbWVyYVJvbGwudmFsdWUpKTtcclxuICAgIGxldCBwaXRjaCA9IGRlZ1RvUmFkKHBhcnNlRmxvYXQoY2FtZXJhUGl0Y2gudmFsdWUpKTtcclxuICAgIG5vZGUudmlld01hdHJpeC5jYW1lcmEgPSBbXHJcbiAgICAgICAgcm9sbCxcclxuICAgICAgICBwaXRjaCxcclxuICAgICAgICByYWRpdXMgPT0gMCA/IGVwc2lsb24gOiByYWRpdXMsICBcclxuICAgIF07XHJcbiAgICBmb3IobGV0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pe1xyXG4gICAgICAgIGhhbmRsZUNhbWVyYVZpZXcoY2hpbGQpO1xyXG4gICAgfVxyXG59XHJcbmNhbWVyYVJhZGl1cy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgdmFsID0gcGFyc2VGbG9hdChjYW1lcmFSYWRpdXMudmFsdWUpO1xyXG4gICAgdmFsIC89IDEwO1xyXG4gICAgXHJcbiAgICBoYW5kbGVDYW1lcmFWaWV3KHRhcmdldFJvb3QpO1xyXG4gICAgLy8gdXBkYXRlIGNhbWVyYSByYWRpdXMgdmFsdWVcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcmFkaXVzLXNsaWRlci12YWx1ZScpLnRleHRDb250ZW50ID0gdmFsO1xyXG59KVxyXG5jYW1lcmFSb2xsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIFxyXG4gICAgaGFuZGxlQ2FtZXJhVmlldyh0YXJnZXRSb290KVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1yb2xsLXNsaWRlci12YWx1ZScpLnRleHRDb250ZW50ID0gY2FtZXJhUm9sbC52YWx1ZTtcclxufSlcclxuY2FtZXJhUGl0Y2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIGhhbmRsZUNhbWVyYVZpZXcodGFyZ2V0Um9vdClcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcGl0Y2gtc2xpZGVyLXZhbHVlJykudGV4dENvbnRlbnQgPSBjYW1lcmFQaXRjaC52YWx1ZTtcclxufSlcclxuXHJcbi8vdGhldGEsIHBoaVxyXG5jYW1lcmFUaGV0YS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgdGhldGEgPSBkZWdUb1JhZChwYXJzZUZsb2F0KGNhbWVyYVRoZXRhLnZhbHVlKSlcclxuICAgIHNldE9ibGlxdWVUaGV0YSh0aGV0YSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXRoZXRhLXNsaWRlci12YWx1ZScpLnRleHRDb250ZW50ID0gY2FtZXJhVGhldGEudmFsdWU7XHJcbn0pXHJcblxyXG5jYW1lcmFQaGkuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgbGV0IHBoaSA9IGRlZ1RvUmFkKHBhcnNlRmxvYXQoY2FtZXJhUGhpLnZhbHVlKSlcclxuICAgIHNldE9ibGlxdWVQaGkocGhpKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcGhpLXNsaWRlci12YWx1ZScpLnRleHRDb250ZW50ID0gY2FtZXJhUGhpLnZhbHVlO1xyXG59KVxyXG5cclxuLy8gZGVmYXV0bCB2aWV3XHJcbmRlZmF1bHRWaWV3LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGNhbWVyYVJhZGl1cy52YWx1ZSA9IDUwO1xyXG4gICAgY2FtZXJhUm9sbC52YWx1ZSA9IDA7XHJcbiAgICBjYW1lcmFQaXRjaC52YWx1ZSA9IDA7XHJcbiAgICBjYW1lcmFUaGV0YS52YWx1ZSA9IDkwO1xyXG4gICAgY2FtZXJhUGhpLnZhbHVlID0gOTA7XHJcbiAgICBoYW5kbGVDYW1lcmFWaWV3KHRhcmdldFJvb3QpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1yYWRpdXMtc2xpZGVyLXZhbHVlJykudGV4dENvbnRlbnQgPSA1O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1yb2xsLXNsaWRlci12YWx1ZScpLnRleHRDb250ZW50ID0gMDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcGl0Y2gtc2xpZGVyLXZhbHVlJykudGV4dENvbnRlbnQgPSAwO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS10aGV0YS1zbGlkZXItdmFsdWUnKS50ZXh0Q29udGVudCA9IDkwO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1waGktc2xpZGVyLXZhbHVlJykudGV4dENvbnRlbnQgPSA5MDtcclxufSlcclxuXHJcbnZhciBzdGF0ZSA9IHtcclxuICAgIG9iamVjdHM6IFtdXHJcbn07XHJcblxyXG4vLyB0ZXh0dXJlIHNlbGVjdGlvblxyXG5tYXBwaW5nU2VsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKG1hcHBpbmdTZWxlY3Rpb24udmFsdWUpXHJcbiAgICBjaGFuZ2VNYXBwaW5nVGV4dHVyZShzdGF0ZS5vYmplY3RzLCBtYXBwaW5nU2VsZWN0aW9uLnZhbHVlKTtcclxufSk7XHJcblxyXG4vLyBhbmltYXRpb25cclxucGF1c2VDb250aW51ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBpZih0YXJnZXRSb290LmFuaW1hdGlvbi5pc0FuaW1hdGUpe1xyXG4gICAgICAgIC8vIGNoYW5nZSB0byBjb250aW51ZVxyXG4gICAgICAgIHBhdXNlQ29udGludWUudGV4dENvbnRlbnQgPSBcIkNvbnRpbnVlXCI7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIHBhdXNlQ29udGludWUudGV4dENvbnRlbnQgPSBcIlBhdXNlXCI7XHJcbiAgICB9XHJcbiAgICBBbmltYXRpb24ucGF1c2VDb250aW51ZUFuaW1hdGlvbih0YXJnZXRSb290KTtcclxuICAgIFxyXG59KVxyXG5cclxucGxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBwYXVzZUNvbnRpbnVlLnRleHRDb250ZW50ID0gXCJQYXVzZVwiO1xyXG4gICAgQW5pbWF0aW9uLnBsYXlBbmltYXRpb24odGFyZ2V0Um9vdCk7XHJcbn0pXHJcblxyXG5cclxuYXV0by5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAvLyBjaGFuZ2UgdG8gY29udGludWVcclxuICAgIGF1dG8udGV4dENvbnRlbnQgPSAhdGFyZ2V0Um9vdC5hbmltYXRpb24uaXNBdXRvID8gXCJTdG9wIEF1dG9cIiA6IFwiQXV0b1wiO1xyXG4gICAgQW5pbWF0aW9uLnNldEF1dG8odGFyZ2V0Um9vdCk7XHJcbn0pXHJcblxyXG5yZXZlcnNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIHJldmVyc2UudGV4dENvbnRlbnQgPSAhdGFyZ2V0Um9vdC5hbmltYXRpb24uaXNSZXZlcnNlID8gXCJTdG9wIFJldmVyc2VcIiA6IFwiUmV2ZXJzZVwiO1xyXG4gICAgQW5pbWF0aW9uLnJldmVyc2VBbmltYXRpb24odGFyZ2V0Um9vdCk7XHJcbn0pXHJcblxyXG4vLyBuZXh0LCBwcmV2LCBmaXJzdCwgbGFzdFxyXG5uZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIEFuaW1hdGlvbi5kaXNhYmxlQW5pbWF0aW9uKHRhcmdldFJvb3QpXHJcbiAgICBBbmltYXRpb24ubmV4dEZyYW1lKHRhcmdldFJvb3QpO1xyXG4gICAgQW5pbWF0aW9uLmhhbmRsZUdlbmVyYWxUcmFuc2Zvcm0odGFyZ2V0Um9vdCwgZG9jdW1lbnQpO1xyXG4gICAgXHJcbn0pXHJcblxyXG5wcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIEFuaW1hdGlvbi5kaXNhYmxlQW5pbWF0aW9uKHRhcmdldFJvb3QpXHJcbiAgICBBbmltYXRpb24ucHJldkZyYW1lKHRhcmdldFJvb3QpO1xyXG4gICAgQW5pbWF0aW9uLmhhbmRsZUdlbmVyYWxUcmFuc2Zvcm0odGFyZ2V0Um9vdCwgZG9jdW1lbnQpO1xyXG59KVxyXG5cclxuZmlyc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgQW5pbWF0aW9uLmZpcnN0RnJhbWUodGFyZ2V0Um9vdCk7XHJcbiAgICBBbmltYXRpb24uaGFuZGxlR2VuZXJhbFRyYW5zZm9ybSh0YXJnZXRSb290LCBkb2N1bWVudCk7XHJcbn0pXHJcblxyXG5sYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIEFuaW1hdGlvbi5sYXN0RnJhbWUodGFyZ2V0Um9vdCk7XHJcbiAgICBBbmltYXRpb24uaGFuZGxlR2VuZXJhbFRyYW5zZm9ybSh0YXJnZXRSb290LCBkb2N1bWVudCk7XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBoYW5kbGVBbWJpZW50Q29sb3Iobm9kZSl7XHJcbiAgICBub2RlLmFtYmllbnRbMF0gPSByZWRBbWJpZW50LnZhbHVlO1xyXG4gICAgbm9kZS5hbWJpZW50WzFdID0gZ3JlZW5BbWJpZW50LnZhbHVlO1xyXG4gICAgbm9kZS5hbWJpZW50WzJdID0gYmx1ZUFtYmllbnQudmFsdWU7XHJcbiAgICBmb3IobGV0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pe1xyXG4gICAgICAgIGhhbmRsZUFtYmllbnRDb2xvcihjaGlsZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnJlZEFtYmllbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgaGFuZGxlQW1iaWVudENvbG9yKHRhcmdldCk7XHJcbn0pXHJcblxyXG5ncmVlbkFtYmllbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgaGFuZGxlQW1iaWVudENvbG9yKHRhcmdldCk7XHJcbn0pXHJcblxyXG5ibHVlQW1iaWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBoYW5kbGVBbWJpZW50Q29sb3IodGFyZ2V0KTtcclxufSlcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVBob25nKG5vZGUpe1xyXG4gICAgbm9kZS5zaGluaW5lc3MgPSAxMDAgLSBzaGluaW5lc3MudmFsdWU7XHJcbiAgICBub2RlLnNwZWN1bGFyID0gaGV4VG9SZ2Ioc3BlY3VsYXJDb2xvci52YWx1ZSk7XHJcbiAgICBub2RlLmRpZmZ1c2UgPSBoZXhUb1JnYihkaWZmdXNlQ29sb3IudmFsdWUpO1xyXG4gICAgbm9kZS5jb25zdC5rcyA9IHBhcnNlRmxvYXQoc3BlY3VsYXIudmFsdWUpO1xyXG4gICAgbm9kZS5jb25zdC5rZCA9IHBhcnNlRmxvYXQoZGlmZnVzZS52YWx1ZSk7XHJcbiAgICBub2RlLmNvbnN0LmthID0gcGFyc2VGbG9hdChhbWJpZW50LnZhbHVlKTtcclxuICAgIGZvcihsZXQgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbil7XHJcbiAgICAgICAgaGFuZGxlUGhvbmcoY2hpbGQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5zaGluaW5lc3MuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgaGFuZGxlUGhvbmcodGFyZ2V0KTtcclxufSk7XHJcblxyXG5hbWJpZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGhhbmRsZVBob25nKHRhcmdldCk7XHJcbn0pO1xyXG5cclxuc3BlY3VsYXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgaGFuZGxlUGhvbmcodGFyZ2V0KTtcclxufSk7XHJcblxyXG5kaWZmdXNlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGhhbmRsZVBob25nKHRhcmdldCk7XHJcbn0pO1xyXG5cclxuc3BlY3VsYXJDb2xvci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBoYW5kbGVQaG9uZyh0YXJnZXQpO1xyXG59KTtcclxuXHJcbmRpZmZ1c2VDb2xvci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBoYW5kbGVQaG9uZyh0YXJnZXQpO1xyXG59KTtcclxuXHJcbmxpZ2h0WC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBsaWdodERpcmVjdGlvblswXSA9IHBhcnNlRmxvYXQobGlnaHRYLnZhbHVlKTtcclxufSlcclxuXHJcbmxpZ2h0WS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBsaWdodERpcmVjdGlvblsxXSA9IHBhcnNlRmxvYXQobGlnaHRZLnZhbHVlKTtcclxufSlcclxuXHJcbmxpZ2h0Wi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBsaWdodERpcmVjdGlvblsyXSA9IHBhcnNlRmxvYXQobGlnaHRaLnZhbHVlKTtcclxufSlcclxuXHJcbi8qKiBIQU5ETEUgRlJBTUUgKi9cclxuXHJcbi8vIHRvdGFsIGZyYW1lXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVUb3RhbE1vZGVsRnJhbWUocGFyZW50X25vZGUpe1xyXG4gICAgLy8gZ2V0IHZhbHVlIG9mIHRvdGFsIG1vZGVsIGZyYW1lIHRleHRcclxuICAgIGxldCBfdG90YWxGcmFtZVRleHQgPSB0b3RhbE1vZGVsRnJhbWUudGV4dENvbnRlbnQ7XHJcbiAgICAvLyBnZXQgdG90YWwgZnJhbWVcclxuICAgIGxldCBfdG90YWxGcmFtZSA9IEFuaW1hdGlvbi50b3RhbE1vZGVsRnJhbWVzKHBhcmVudF9ub2RlKTtcclxuICAgIC8vIHNldCB0b3RhbCBmcmFtZVxyXG4gICAgX3RvdGFsRnJhbWVUZXh0ID0gXCJUb3RhbCBNb2RlbCBGcmFtZXM6IFwiKyBfdG90YWxGcmFtZTtcclxuICAgIHRvdGFsTW9kZWxGcmFtZS50ZXh0Q29udGVudCA9IF90b3RhbEZyYW1lVGV4dDtcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlVG90YWxOb2RlRnJhbWUobm9kZSl7XHJcbiAgICBsZXQgX3RvdGFsRnJhbWVUZXh0ID0gdG90YWxOb2RlRnJhbWUudGV4dENvbnRlbnQ7XHJcbiAgICBsZXQgX3RvdGFsRnJhbWUgPSBBbmltYXRpb24udG90YWxOb2RlRnJhbWVzKG5vZGUpO1xyXG4gICAgX3RvdGFsRnJhbWVUZXh0ID0gXCJUb3RhbCBOb2RlIEZyYW1lczogXCIgKyBfdG90YWxGcmFtZVxyXG4gICAgdG90YWxOb2RlRnJhbWUudGV4dENvbnRlbnQgPSBfdG90YWxGcmFtZVRleHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDdXJyZW50TW9kZWxGcmFtZShwYXJlbnRfbW9kZWwpe1xyXG4gICAgbGV0IF9jdXJyZW50RnJhbWUgPSBBbmltYXRpb24uY3VycmVudE1vZGVsRnJhbWUocGFyZW50X21vZGVsKVxyXG4gICAgY3VycmVudE1vZGVsRnJhbWUudGV4dENvbnRlbnQgPSBcIkN1cnJlbnQgTW9kZWwgRnJhbWU6IFwiICsgX2N1cnJlbnRGcmFtZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQ3VycmVudE5vZGVGcmFtZShub2RlKXtcclxuICAgIGxldCBfY3VyckZyYW1lID0gQW5pbWF0aW9uLmN1cnJlbnROb2RlRnJhbWUobm9kZSlcclxuICAgIGN1cnJlbnROb2RlRnJhbWUudGV4dENvbnRlbnQgPSBcIkN1cnJlbnQgTm9kZSBGcmFtZTogXCIgKyBfY3VyckZyYW1lXHJcbn1cclxuXHJcbi8vIGFkZCBGcmFtZSBtZWNoYW5pc21cclxuY2FuY2VsQWRkRnJhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgYWRkRnJhbWVNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtZnJhbWUtbW9kYWwnKVxyXG4gICAgYWRkRnJhbWVNb2RhbC5jbGFzc05hbWUgPSBhZGRGcmFtZU1vZGFsLmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXHJcbn0pXHJcblxyXG5hZGRGcmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBhZGRGcmFtZU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1mcmFtZS1tb2RhbCcpXHJcbiAgICBhZGRGcmFtZU1vZGFsLmNsYXNzTmFtZSA9IGFkZEZyYW1lTW9kYWwuY2xhc3NOYW1lLnJlcGxhY2UoXCIgaGlkZGVuXCIsIFwiXCIpXHJcbn0pXHJcblxyXG52ZXJpZnlBZGRGcmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBBbmltYXRpb24uZGlzYWJsZUFuaW1hdGlvbih0YXJnZXRSb290KTtcclxuICAgIGxldCB0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdHJhbnNsYXRpb24teCcpLnZhbHVlXHJcbiAgICBsZXQgdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRyYW5zbGF0aW9uLXknKS52YWx1ZVxyXG4gICAgbGV0IHR6ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10cmFuc2xhdGlvbi16JykudmFsdWVcclxuICAgIFxyXG4gICAgLy8gcmFkc1xyXG4gICAgbGV0IHJ4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1yb3RhdGlvbi14JykudmFsdWVcclxuICAgIGxldCByeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcm90YXRpb24teScpLnZhbHVlXHJcbiAgICBsZXQgcnogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXJvdGF0aW9uLXonKS52YWx1ZVxyXG5cclxuICAgIGxldCBzeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtc2NhbGF0aW9uLXgnKS52YWx1ZVxyXG4gICAgbGV0IHN5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1zY2FsYXRpb24teScpLnZhbHVlXHJcbiAgICBsZXQgc3ogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXNjYWxhdGlvbi16JykudmFsdWVcclxuXHJcbiAgICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgICAgIHRyYW5zbGF0ZSA6IFt0eCwgdHksIHR6XSxcclxuICAgICAgICByb3RhdGUgOiBbZGVnVG9SYWQocngpLCBkZWdUb1JhZChyeSksIGRlZ1RvUmFkKHJ6KV0sXHJcbiAgICAgICAgc2NhbGUgOiBbc3gsIHN5LCBzel1cclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmKHRhcmdldC5hbmltYXRpb24uZnJhbWVzICE9PSBudWxsKXtcclxuICAgICAgICB0YXJnZXQuYW5pbWF0aW9uLmZyYW1lcy5wdXNoKHRyYW5zZm9ybSlcclxuICAgICAgICBoYW5kbGVUb3RhbE1vZGVsRnJhbWUodGFyZ2V0Um9vdCk7XHJcbiAgICAgICAgaGFuZGxlVG90YWxOb2RlRnJhbWUodGFyZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGFkZEZyYW1lTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWZyYW1lLW1vZGFsJylcclxuICAgIGFkZEZyYW1lTW9kYWwuY2xhc3NOYW1lID0gYWRkRnJhbWVNb2RhbC5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxyXG5cclxufSlcclxuXHJcbi8vZWRpdCBmcmFtZVxyXG5cclxuZWRpdEZyYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGVkaXRGcmFtZU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZnJhbWUtbW9kYWwnKVxyXG4gICAgZWRpdEZyYW1lTW9kYWwuY2xhc3NOYW1lID0gZWRpdEZyYW1lTW9kYWwuY2xhc3NOYW1lLnJlcGxhY2UoXCIgaGlkZGVuXCIsIFwiXCIpXHJcbiAgICAvLyBzZXQgdmFsdWVcclxuICAgIGxldCB0cmFuc2Zvcm0gPSB0YXJnZXQudHJhbnNmb3JtXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10cmFuc2xhdGlvbi14JykudmFsdWUgPSB0cmFuc2Zvcm0udHJhbnNsYXRlWzBdXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10cmFuc2xhdGlvbi15JykudmFsdWUgPSB0cmFuc2Zvcm0udHJhbnNsYXRlWzFdXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10cmFuc2xhdGlvbi16JykudmFsdWUgPSB0cmFuc2Zvcm0udHJhbnNsYXRlWzJdXHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcm90YXRpb24teCcpLnZhbHVlID0gcmFkVG9EZWcodHJhbnNmb3JtLnJvdGF0ZVswXSlcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXJvdGF0aW9uLXknKS52YWx1ZSA9IHJhZFRvRGVnKHRyYW5zZm9ybS5yb3RhdGVbMV0pXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1yb3RhdGlvbi16JykudmFsdWUgPSByYWRUb0RlZyh0cmFuc2Zvcm0ucm90YXRlWzJdKVxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXNjYWxhdGlvbi14JykudmFsdWUgPSB0cmFuc2Zvcm0uc2NhbGVbMF1cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXNjYWxhdGlvbi15JykudmFsdWUgPSB0cmFuc2Zvcm0uc2NhbGVbMV1cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXNjYWxhdGlvbi16JykudmFsdWUgPSB0cmFuc2Zvcm0uc2NhbGVbMl1cclxufSlcclxuXHJcbmNhbmNlbEVkaXRGcmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBlZGl0RnJhbWVNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWZyYW1lLW1vZGFsJylcclxuICAgIGVkaXRGcmFtZU1vZGFsLmNsYXNzTmFtZSA9IGVkaXRGcmFtZU1vZGFsLmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXHJcbn0pXHJcblxyXG52ZXJpZnlFZGl0RnJhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgLy8gdHgsIHR5LCB0eiwgcngsIHJ5LCByeiwgc3gsIHN5LCBzelxyXG4gICAgQW5pbWF0aW9uLmRpc2FibGVBbmltYXRpb24odGFyZ2V0Um9vdCk7XHJcbiAgICBsZXQgdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10cmFuc2xhdGlvbi14JykudmFsdWVcclxuICAgIGxldCB0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRyYW5zbGF0aW9uLXknKS52YWx1ZVxyXG4gICAgbGV0IHR6ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdHJhbnNsYXRpb24teicpLnZhbHVlXHJcblxyXG4gICAgbGV0IHJ4ID0gZGVnVG9SYWQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcm90YXRpb24teCcpLnZhbHVlKVxyXG4gICAgbGV0IHJ5ID0gZGVnVG9SYWQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcm90YXRpb24teScpLnZhbHVlKVxyXG4gICAgbGV0IHJ6ID0gZGVnVG9SYWQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcm90YXRpb24teicpLnZhbHVlKVxyXG5cclxuICAgIGxldCBzeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXNjYWxhdGlvbi14JykudmFsdWVcclxuICAgIGxldCBzeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXNjYWxhdGlvbi15JykudmFsdWVcclxuICAgIGxldCBzeiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXNjYWxhdGlvbi16JykudmFsdWVcclxuXHJcbiAgICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgICAgIHRyYW5zbGF0ZSA6IFt0eCwgdHksIHR6XSxcclxuICAgICAgICByb3RhdGUgOiBbcngsIHJ5LCByel0sXHJcbiAgICAgICAgc2NhbGUgOiBbc3gsIHN5LCBzel1cclxuICAgIH1cclxuXHJcbiAgICBBbmltYXRpb24uZWRpdEN1cnJlbnRGcmFtZSh0YXJnZXQsIHRyYW5zZm9ybSk7XHJcblxyXG4gICAgLy8gZGlzYWJsZSBtb2RhbFxyXG4gICAgY29uc3QgZWRpdEZyYW1lTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1mcmFtZS1tb2RhbCcpXHJcbiAgICBlZGl0RnJhbWVNb2RhbC5jbGFzc05hbWUgPSBlZGl0RnJhbWVNb2RhbC5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxyXG5cclxufSlcclxuXHJcbi8vIGRlbGV0ZSBmcmFtZVxyXG5kZWxldGVGcmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBkZWxldGVGcmFtZU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZS1mcmFtZS1tb2RhbCcpXHJcbiAgICBkZWxldGVGcmFtZU1vZGFsLmNsYXNzTmFtZSA9IGRlbGV0ZUZyYW1lTW9kYWwuY2xhc3NOYW1lLnJlcGxhY2UoXCIgaGlkZGVuXCIsIFwiXCIpXHJcbn0pXHJcblxyXG5jYW5jZWxEZWxldGVGcmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBkZWxldGVGcmFtZU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZS1mcmFtZS1tb2RhbCcpXHJcbiAgICBkZWxldGVGcmFtZU1vZGFsLmNsYXNzTmFtZSA9IGRlbGV0ZUZyYW1lTW9kYWwuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcclxufSlcclxuXHJcbnZlcmlmeURlbGV0ZUZyYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIEFuaW1hdGlvbi5kaXNhYmxlQW5pbWF0aW9uKHRhcmdldFJvb3QpO1xyXG5cclxuICAgIC8vIGRlbGV0ZSBmcmFtZVxyXG4gICAgQW5pbWF0aW9uLmRlbGV0ZUN1cnJlbnRGcmFtZSh0YXJnZXQpO1xyXG5cclxuICAgIC8vIHVwZGF0ZSBub2RlIGZyYW1lXHJcbiAgICBoYW5kbGVUb3RhbE1vZGVsRnJhbWUodGFyZ2V0Um9vdCk7XHJcbiAgICBoYW5kbGVUb3RhbE5vZGVGcmFtZSh0YXJnZXQpO1xyXG4gICAgQW5pbWF0aW9uLmhhbmRsZUdlbmVyYWxUcmFuc2Zvcm0odGFyZ2V0Um9vdCxkb2N1bWVudClcclxuICAgIC8vIGlmKHRhcmdldC5hbmltYXRpb24uZnJhbWVzICE9PSBudWxsKXtcclxuICAgIC8vICAgICB0YXJnZXQuYW5pbWF0aW9uLmZyYW1lcy5wb3AoKTtcclxuICAgIC8vICAgICBoYW5kbGVUb3RhbE1vZGVsRnJhbWUodGFyZ2V0Um9vdCk7XHJcbiAgICAvLyAgICAgaGFuZGxlVG90YWxOb2RlRnJhbWUodGFyZ2V0KTtcclxuICAgIC8vIH1cclxuICAgIGNvbnN0IGRlbGV0ZUZyYW1lTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlLWZyYW1lLW1vZGFsJylcclxuICAgIGRlbGV0ZUZyYW1lTW9kYWwuY2xhc3NOYW1lID0gZGVsZXRlRnJhbWVNb2RhbC5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxyXG59KVxyXG5cclxuc2F2ZUFuaW1hdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgYW5pbWF0aW9uTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZS1hbmltYXRpb24tbW9kYWwnKVxyXG4gICAgYW5pbWF0aW9uTW9kYWwuY2xhc3NOYW1lID0gYW5pbWF0aW9uTW9kYWwuY2xhc3NOYW1lLnJlcGxhY2UoXCIgaGlkZGVuXCIsIFwiXCIpXHJcbn0pXHJcblxyXG5va1NhdmVBbmltYXRpb25Nb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgYW5pbWF0aW9uTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZS1hbmltYXRpb24tbW9kYWwnKVxyXG4gICAgYW5pbWF0aW9uTW9kYWwuY2xhc3NOYW1lID0gYW5pbWF0aW9uTW9kYWwuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcclxufSlcclxuXHJcbi8vIGNvbG9yXHJcbmJhc2ljQ29sb3IuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgdGFyZ2V0LnBpY2tlZENvbG9yID0gaGV4VG9SZ2IoYmFzaWNDb2xvci52YWx1ZSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gc2V0Tm9kZU1hbmFnZXIobm9kZSl7XHJcbiAgICBub2RlTmFtZS52YWx1ZSA9IG5vZGUubmFtZTtcclxufTtcclxuXHJcbnJlbmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICByZW5hbWVUYXJnZXQobm9kZU5hbWUudmFsdWUpO1xyXG4gICAgY2xlYXJDb21wb25lbnQoKTtcclxuICAgIGRpc3BsYXlDb21wb25lbnQoMCwgb2JqZWN0cyk7XHJcbn0pXHJcblxyXG5kZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgZGVsZXRlTm9kZSh0YXJnZXQubmFtZSk7XHJcbiAgICBjbGVhckNvbXBvbmVudCgpO1xyXG4gICAgZGlzcGxheUNvbXBvbmVudCgwLCBvYmplY3RzKTtcclxufSlcclxuXHJcbmFkZENoaWxkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBhZGROb2RlKG5vZGVOYW1lLnZhbHVlKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldClcclxufSlcclxuXHJcbnNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgc2F2ZUpTT04ob2JqZWN0cyk7XHJcbn0pO1xyXG5cclxubG9hZC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICBsb2FkSlNPTihldmVudC50YXJnZXQsIGZ1bmN0aW9uKG9iamVjdHMpe1xyXG4gICAgICAgIGxvYWRPYmplY3RzKG9iamVjdHMpO1xyXG4gICAgICAgIGNvbnN0IGltcG9ydGVkT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgaW1wb3J0ZWRPcHRpb24udmFsdWUgPSBtb2RlbC5sZW5ndGg7XHJcbiAgICAgICAgaW1wb3J0ZWRPcHRpb24udGV4dCA9IG9iamVjdHNbMF0ubmFtZTtcclxuICAgICAgICBtb2RlbFNlbGVjdGlvbi5hcHBlbmRDaGlsZChpbXBvcnRlZE9wdGlvbik7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIFNldCB0aGUgdmFsdWUgb2YgbW9kZWxTZWxlY3Rpb24gdG8gXCJpbXBvcnRlZFwiXHJcbiAgICAgICAgbW9kZWxTZWxlY3Rpb24udmFsdWUgPSBtb2RlbC5sZW5ndGg7XHJcbiAgICAgICAgYWRkTW9kZWwob2JqZWN0cyk7XHJcbiAgICB9KTtcclxufSlcclxuXHJcbmV4cG9ydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zb2xlLmxvZyhbdGFyZ2V0XSk7XHJcbiAgICBzYXZlSlNPTihbdGFyZ2V0XSk7XHJcbn0pO1xyXG5cclxuaW1wb3J0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgIGxvYWRKU09OKGV2ZW50LnRhcmdldCwgZnVuY3Rpb24ob2JqZWN0KXtcclxuICAgICAgICBvYmplY3RbMF0uc2V0UGFyZW50KHRhcmdldCk7XHJcbiAgICAgICAgY2xlYXJDb21wb25lbnQoKTtcclxuICAgICAgICBkaXNwbGF5Q29tcG9uZW50KDAsIG9iamVjdHMpO1xyXG4gICAgfSk7XHJcbn0pXHJcbiIsImltcG9ydCBwaWdNb2RlbCBmcm9tIFwiLi9zdHJ1Y3RzL21vZGVsL3BpZy5qc1wiO1xyXG5pbXBvcnQgY2hpY2tlbk1vZGVsIGZyb20gXCIuL3N0cnVjdHMvbW9kZWwvY2hpY2tlbi5qc1wiO1xyXG5pbXBvcnQgZm94TW9kZWwgZnJvbSBcIi4vc3RydWN0cy9tb2RlbC9mb3guanNcIjtcclxuaW1wb3J0IE1hdDQgZnJvbSBcIi4vc3RydWN0cy9tYXRoL01hdDQuanNcIjtcclxuaW1wb3J0IFZlYzMgZnJvbSBcIi4vc3RydWN0cy9tYXRoL1ZlYzMuanNcIjtcclxuaW1wb3J0IFZlYzQgZnJvbSBcIi4vc3RydWN0cy9tYXRoL1ZlYzQuanNcIjtcclxuaW1wb3J0IENhbWVyYSBmcm9tIFwiLi91dGlscy9DYW1lcmEuanNcIjtcclxuaW1wb3J0IHsgZGlzcGxheUNvbXBvbmVudCwgXHJcbiAgY2xlYXJDb21wb25lbnQsIFxyXG4gIGluaXRPcHRpb25Nb2RlbCwgXHJcbiAgaGFuZGxlVHJhbnNmb3JtLCBcclxuICBoYW5kbGVUb3RhbE1vZGVsRnJhbWUsXHJcbiAgaGFuZGxlVG90YWxOb2RlRnJhbWUsXHJcbiAgaGFuZGxlQ3VycmVudE1vZGVsRnJhbWUsXHJcbiAgaGFuZGxlQ3VycmVudE5vZGVGcmFtZSxcclxuICBub2RlTmFtZX0gZnJvbSBcIi4vaGFuZGxlci9ldmVudEhhbmRsZXIuanNcIjtcclxuaW1wb3J0IGhvbGxvd01vZGVsIGZyb20gXCIuL3N0cnVjdHMvbW9kZWwvaG9sbG93VGhpbmd5LmpzXCI7XHJcbmltcG9ydCBob2xsb3dSaW5nTW9kZWwgZnJvbSBcIi4vc3RydWN0cy9tb2RlbC9yaW5nLmpzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVBhcGVyVGV4dHVyZSwgY3JlYXRlRW52aXJvbm1lbnRUZXh0dXJlLCBjcmVhdGVCdW1wVGV4dHVyZSB9IGZyb20gXCIuL3V0aWxzL3RleHR1cmUuanNcIlxyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuL3V0aWxzL0FuaW1hdGlvbi5qc1wiO1xyXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9zdHJ1Y3RzL25vZGUuanNcIjtcclxuaW1wb3J0IHsgZGVnVG9SYWQgfSBmcm9tIFwiLi9zdHJ1Y3RzL21hdGgvbWF0aFV0aWxzLmpzXCI7XHJcblxyXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdsLWNhbnZhc1wiKTtcclxuY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xyXG5cclxuXHJcbmNvbnN0IHZlcnRleFNoYWRlclNvdXJjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVydGV4LXNoYWRlci0zZFwiKT8udGV4dENvbnRlbnQ7XHJcbmNvbnN0IGZyYWdtZW50U2hhZGVyU291cmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcmFnbWVudC1zaGFkZXItM2RcIik/LnRleHRDb250ZW50O1xyXG5cclxuLy8gc3RhdGVcclxuZXhwb3J0IHZhciBtb2RlbCA9IFtwaWdNb2RlbCwgY2hpY2tlbk1vZGVsLCBmb3hNb2RlbCwgaG9sbG93TW9kZWwsIGhvbGxvd1JpbmdNb2RlbF07XHJcbmV4cG9ydCB2YXIgb2JqZWN0cztcclxuZXhwb3J0IGZ1bmN0aW9uIHNldE9iamVjdHModmFsdWUpIHtcclxuICBvYmplY3RzID0gdmFsdWU7XHJcbn1cclxuZXhwb3J0IHZhciB0YXJnZXQ7XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRUYXJnZXQodmFsdWUpIHtcclxuICB0YXJnZXQgPSB2YWx1ZTtcclxufVxyXG5leHBvcnQgdmFyIHRhcmdldFJvb3Q7XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRUYXJnZXRSb290KHZhbHVlKSB7XHJcbiAgdGFyZ2V0Um9vdCA9IHZhbHVlO1xyXG59XHJcbnZhciBsaWdodGluZztcclxuZXhwb3J0IHZhciBsaWdodERpcmVjdGlvbjtcclxudmFyIHRleHR1cmU7XHJcbnZhciBwcm9qZWN0aW9uX3R5cGU7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvamVjdGlvblR5cGUobmV3UHJvamVjdGlvbikge1xyXG4gIHByb2plY3Rpb25fdHlwZSA9IG5ld1Byb2plY3Rpb247XHJcbn1cclxudmFyIGZhY3RvcjtcclxudmFyIG9ibGlxdWVfdGhldGE7XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRPYmxpcXVlVGhldGEobmV3VGhldGEpIHtcclxuICBvYmxpcXVlX3RoZXRhID0gbmV3VGhldGE7XHJcbn1cclxudmFyIG9ibGlxdWVfcGhpO1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0T2JsaXF1ZVBoaShuZXdQaGkpIHtcclxuICBvYmxpcXVlX3BoaSA9IG5ld1BoaTtcclxufVxyXG52YXIgbm9ybWFsaXplTGlnaHQ7XHJcbnZhciB3b3JsZFZpZXdQcm9qZWN0aW9uTWF0cml4O1xyXG52YXIgY3ViZUNvdW50ID0gMDtcclxuXHJcbi8vIGFuaW1hdGlvblxyXG52YXIgdF9hbmltYXRpb24gPSAwO1xyXG52YXIgZnBzX3RpbWUgPSAwLjE1O1xyXG5cclxuaW5pdFN0YXRlKCk7XHJcblxyXG5mdW5jdGlvbiBpbml0U3RhdGUoKSB7XHJcbiAgICBvYmplY3RzID0gbW9kZWxbMF07XHJcbiAgICBsaWdodGluZyA9IGZhbHNlO1xyXG4gICAgbGlnaHREaXJlY3Rpb24gPSBbMC4wLCAwLjAsIDEuMF1cclxuICAgIHRleHR1cmUgPSBcIm5vbmVcIjtcclxuICAgIHByb2plY3Rpb25fdHlwZSA9IFwib3J0aG9ncmFwaGljXCI7XHJcbiAgICBmYWN0b3IgPSAwLjA7XHJcbiAgICBvYmxpcXVlX3RoZXRhID0gOTAuMDtcclxuICAgIG9ibGlxdWVfcGhpID0gOTAuMDtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBtb2RlbC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgc2V0RGVmYXVsdFJvdGF0aW9uKG1vZGVsW2ldKTtcclxuICAgIH1cclxuICAgIGRpc3BsYXlDb21wb25lbnQoMCwgb2JqZWN0cyk7XHJcbiAgICBpbml0T3B0aW9uTW9kZWwobW9kZWwpO1xyXG4gICAgaGFuZGxlVHJhbnNmb3JtKG9iamVjdHNbMF0pXHJcbiAgICBoYW5kbGVUb3RhbE1vZGVsRnJhbWUob2JqZWN0c1swXSlcclxuICAgIGhhbmRsZVRvdGFsTm9kZUZyYW1lKG9iamVjdHNbMF0pXHJcblxyXG59XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgaWYoIWdsKXtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXZWJHTCBub3Qgc3VwcG9ydGVkXCIpO1xyXG4gICAgfVxyXG4gICAgdGFyZ2V0ID0gb2JqZWN0c1swXTtcclxuICAgIHRhcmdldFJvb3QgPSB0YXJnZXQ7XHJcbiAgICByZW5kZXIoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RGVmYXVsdFN0YXRlKG9iamVjdHMpIHtcclxuICAgIG9iamVjdHMuZm9yRWFjaChvYmplY3QgPT4ge1xyXG4gICAgICAgIGlmICghb2JqZWN0Lm1vZGVsLmNvbG9ycykge1xyXG4gICAgICAgICAgICBpZiAoIW9iamVjdC5waWNrZWRDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0Lm1vZGVsLmNvbG9ycyA9IGdlbmVyYXRlQ29sb3JzKG9iamVjdC5tb2RlbC52ZXJ0aWNlcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QubW9kZWwuY29sb3JzID0gZ2VuZXJhdGVDb2xvcnMoXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Lm1vZGVsLnZlcnRpY2VzLFxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5waWNrZWRDb2xvclxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgaWYgKCFvYmplY3QucHJvZ3JhbSAmJiAhbGlnaHRpbmcpIHtcclxuICAgICAgICAgICAgb2JqZWN0LnByb2dyYW0gPSBjcmVhdGVTaGFkZXJQcm9ncmFtKFxyXG4gICAgICAgICAgICAgICAgZ2wsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UsXHJcbiAgICAgICAgICAgICAgICBmcmFnbWVudFNoYWRlclNvdXJjZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgLy8gICBpZiAob2JqZWN0LmFuaW1hdGlvbi5pc09iamVjdEFuaW1hdGUgJiYgb2JqZWN0LmFuaW1hdGlvbi5hbmltYXRlKSB7XHJcbiAgICAgICAgLy8gICAgIG9iamVjdC50cmFuc2Zvcm0gPSBvYmplY3QuYW5pbWF0aW9uLmFuaW1hdGVbY291bnRlciAlIGZwc107XHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgLy8gb2JqZWN0LnRyYW5zZm9ybSA9IG9iamVjdC5hbmltYXRpb24uYW5pbWF0ZVtjb3VudGVyICUgZnBzXTtcclxuICAgICAgICBvYmplY3QubG9jYWxNYXRyaXggPSBzZXRUcmFuc2Zvcm0ob2JqZWN0KTtcclxuICAgICAgICBpZiAob2JqZWN0LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc2V0RGVmYXVsdFN0YXRlKG9iamVjdC5jaGlsZHJlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VHJhbnNmb3JtKG9iamVjdCkge1xyXG4gICAgLyogU2V0dXAgdHJhbnNmb3JtIG1hdHJpeCAqL1xyXG5cclxuICAgIHZhciB0cmFuc2Zvcm1NYXRyaXggPSBNYXQ0LnRyYW5zbGF0ZShcclxuICAgICAgb2JqZWN0LnRyYW5zZm9ybS50cmFuc2xhdGVbMF0sXHJcbiAgICAgIG9iamVjdC50cmFuc2Zvcm0udHJhbnNsYXRlWzFdLFxyXG4gICAgICBvYmplY3QudHJhbnNmb3JtLnRyYW5zbGF0ZVsyXVxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgX2NlbnRlciA9IG9iamVjdC5tb2RlbC5jZW50ZXJcclxuICAgIGlmKF9jZW50ZXIpe1xyXG4gICAgICB0cmFuc2Zvcm1NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICAgIHRyYW5zZm9ybU1hdHJpeCxcclxuICAgICAgICBNYXQ0LnRyYW5zbGF0ZShfY2VudGVyWzBdLCBfY2VudGVyWzFdLCBfY2VudGVyWzJdKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICB0cmFuc2Zvcm1NYXRyaXgsXHJcbiAgICAgIE1hdDQucm90YXRlWChvYmplY3QudHJhbnNmb3JtLnJvdGF0ZVswXSlcclxuICAgICk7XHJcbiAgXHJcbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICB0cmFuc2Zvcm1NYXRyaXgsXHJcbiAgICAgIE1hdDQucm90YXRlWShvYmplY3QudHJhbnNmb3JtLnJvdGF0ZVsxXSlcclxuICAgICk7XHJcbiAgXHJcbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICB0cmFuc2Zvcm1NYXRyaXgsXHJcbiAgICAgIE1hdDQucm90YXRlWihvYmplY3QudHJhbnNmb3JtLnJvdGF0ZVsyXSlcclxuICAgICk7XHJcblxyXG4gICAgaWYoX2NlbnRlcil7XHJcbiAgICAgIHRyYW5zZm9ybU1hdHJpeCA9IE1hdDQubXVsdGlwbHkoXHJcbiAgICAgICAgdHJhbnNmb3JtTWF0cml4LFxyXG4gICAgICAgIE1hdDQudHJhbnNsYXRlKC1fY2VudGVyWzBdLCAtX2NlbnRlclsxXSwgLV9jZW50ZXJbMl0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICB0cmFuc2Zvcm1NYXRyaXgsXHJcbiAgICAgIE1hdDQuc2NhbGUoXHJcbiAgICAgICAgb2JqZWN0LnRyYW5zZm9ybS5zY2FsZVswXSxcclxuICAgICAgICBvYmplY3QudHJhbnNmb3JtLnNjYWxlWzFdLFxyXG4gICAgICAgIG9iamVjdC50cmFuc2Zvcm0uc2NhbGVbMl1cclxuICAgICAgKVxyXG4gICAgKTtcclxuICBcclxuICAgIHJldHVybiB0cmFuc2Zvcm1NYXRyaXg7XHJcbiAgfVxyXG5cclxuZnVuY3Rpb24gc2V0RGVmYXVsdFJvdGF0aW9uKG9iamVjdHMpIHtcclxuICAgIGZvcihsZXQgb2JqZWN0IG9mIG9iamVjdHMpe1xyXG4gICAgICAgIG9iamVjdC50cmFuc2Zvcm0ucm90YXRlID0gb2JqZWN0LnRyYW5zZm9ybS5yb3RhdGUubWFwKCh2YWwpID0+IGRlZ1RvUmFkKHZhbCkpO1xyXG4gICAgICAgIGlmKG9iamVjdC5jaGlsZHJlbi5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgc2V0RGVmYXVsdFJvdGF0aW9uKG9iamVjdC5jaGlsZHJlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyTG9vcChvYmplY3RzKSB7XHJcbiAgICBvYmplY3RzLmZvckVhY2gob2JqZWN0ID0+IHtcclxuICAgICAgICBnbC51c2VQcm9ncmFtKG9iamVjdC5wcm9ncmFtKTtcclxuICAgICAgICB2YXIgbW9kZWxNYXRyaXggPSBvYmplY3QuZ2V0V29ybGRNYXRyaXgoKTtcclxuXHJcbiAgICAgICAgb2JqZWN0LndvcmxkTWF0cml4ID0gc2V0UHJvamVjdGlvbk1hdHJpeChvYmplY3Qud29ybGRNYXRyaXgsIG9iamVjdClcclxuXHJcblxyXG4gICAgICAgIHZhciBhX3Bvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheShvYmplY3QubW9kZWwudmVydGljZXMuZmxhdCgxKSk7XHJcbiAgICAgICAgdmFyIGFfbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheShvYmplY3QubW9kZWwubm9ybWFscy5mbGF0KDEpKTtcclxuICAgICAgICB2YXIgYV9jb2xvciA9IG5ldyBGbG9hdDMyQXJyYXkob2JqZWN0LnBpY2tlZENvbG9yLmZsYXQoMSkpO1xyXG4gICAgICAgIHZhciBhX3RleHR1cmUgPSBuZXcgRmxvYXQzMkFycmF5KG9iamVjdC5tb2RlbC50ZXhDb29yZCk7XHJcbiAgICAgICAgdmFyIGFfdGFuZ2VudCA9IG5ldyBGbG9hdDMyQXJyYXkob2JqZWN0Lm1vZGVsLnRhbmdlbnRzLmZsYXQoMSkpO1xyXG4gICAgICAgIHZhciBhX2JpdGFuZ2VudCA9IG5ldyBGbG9hdDMyQXJyYXkob2JqZWN0Lm1vZGVsLmJpdGFuZ2VudHMuZmxhdCgxKSk7XHJcblxyXG4gICAgICAgIHNldEF0dHIoZ2wsIG9iamVjdC5wcm9ncmFtLCBhX3Bvc2l0aW9uLCBhX25vcm1hbCwgYV9jb2xvciwgYV90ZXh0dXJlLCBhX3RhbmdlbnQsIGFfYml0YW5nZW50KTtcclxuXHJcbiAgICAgICAgLy8gY29uc3QgZGlmZnVzZSA9IFsxLCAxLCAxXTtcclxuICAgICAgICAvLyBjb25zdCBzcGVjdWxhciA9IFswLCAwLCAwXTtcclxuICAgICAgICAvLyBjb25zdCBhbWJpZW50ID0gWzEsIDEgLDFdXHJcbiAgICAgICAgLy8gY29uc3Qgc2hpbmluZXNzID0gMTAwO1xyXG5cclxuICAgICAgICB2YXIgdW5pZm9ybXMgPSB7XHJcbiAgICAgICAgICAgIHVXb3JsZFZpZXdQcm9qZWN0aW9uOiBvYmplY3Qud29ybGRNYXRyaXgsXHJcbiAgICAgICAgICAgIHVXb3JsZEludmVyc2VUcmFuc3Bvc2U6IG9iamVjdC53b3JsZEludmVyc2VNYXRyaXgsXHJcbiAgICAgICAgICAgIHVSZXZlcnNlTGlnaHREaXJlY3Rpb246IG5vcm1hbGl6ZUxpZ2h0LFxyXG4gICAgICAgICAgICB1Q29sb3I6IG9iamVjdC5waWNrZWRDb2xvci5jb25jYXQoMS4wKSxcclxuICAgICAgICAgICAgdU1vZGVsTWF0cml4OiBtb2RlbE1hdHJpeCxcclxuICAgICAgICAgICAgdUFtYmllbnRDb2xvcjogb2JqZWN0LmFtYmllbnQsXHJcbiAgICAgICAgICAgIHVEaWZmdXNlQ29sb3I6IG9iamVjdC5kaWZmdXNlLFxyXG4gICAgICAgICAgICB1U3BlY3VsYXJDb2xvcjogb2JqZWN0LnNwZWN1bGFyLFxyXG4gICAgICAgICAgICB1U2hpbmluZXNzOiBvYmplY3Quc2hpbmluZXNzLFxyXG4gICAgICAgICAgICB1TGlnaHRQb3M6IG5vcm1hbGl6ZUxpZ2h0LFxyXG4gICAgICAgICAgICBrYTogb2JqZWN0LmNvbnN0LmthLFxyXG4gICAgICAgICAgICBrZDogb2JqZWN0LmNvbnN0LmtkLFxyXG4gICAgICAgICAgICBrczogb2JqZWN0LmNvbnN0LmtzLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VW5pZm9ybXMoZ2wsIG9iamVjdC5wcm9ncmFtLCB1bmlmb3Jtcyk7XHJcblxyXG4gICAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVTLCAwLCBvYmplY3QubW9kZWwudmVydGljZXMubGVuZ3RoKTtcclxuICAgICAgICBpZiAob2JqZWN0LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmVuZGVyTG9vcChvYmplY3QuY2hpbGRyZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG53aW5kb3cucmVxdWVzdEFuaW1GcmFtZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICB3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyAxKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9KSgpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbmRlcihub3cpIHtcclxuICAgIGdsLnZpZXdwb3J0KDAsIDAsIGdsLmNhbnZhcy53aWR0aCwgZ2wuY2FudmFzLmhlaWdodCk7XHJcbiAgICBnbC5jbGVhckNvbG9yKDAuOCwgMC44LCAwLjgsIDEuMCk7XHJcbiAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVCk7XHJcblxyXG4gICAgZ2wuZW5hYmxlKGdsLkNVTExfRkFDRSk7XHJcbiAgICBnbC5lbmFibGUoZ2wuREVQVEhfVEVTVCk7XHJcblxyXG4gICAgc2V0RGVmYXVsdFN0YXRlKG9iamVjdHMpO1xyXG4gICAgLy8gZGVsdGEgdGltZVxyXG4gICAgaWYoIW5vdykgbm93ID0gMDtcclxuICAgIGlmKHRfYW5pbWF0aW9uID09PSAwKSB0X2FuaW1hdGlvbiA9IG5vdztcclxuXHJcbiAgICBpZigobm93IC0gdF9hbmltYXRpb24pID49IGZwc190aW1lKXtcclxuICAgICAgdF9hbmltYXRpb24gPSBub3c7XHJcbiAgICAgIGxldCBkZWx0YVRpbWUgPSBub3cgLSB0X2FuaW1hdGlvbjtcclxuICAgICAgQW5pbWF0aW9uLmFuaW1hdGUodGFyZ2V0Um9vdCwgZGVsdGFUaW1lKTtcclxuICAgICAgaGFuZGxlQ3VycmVudE1vZGVsRnJhbWUodGFyZ2V0Um9vdClcclxuICAgICAgaGFuZGxlQ3VycmVudE5vZGVGcmFtZSh0YXJnZXQpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9iamVjdHNbMF0uc2V0V29ybGRNdHgobnVsbCk7XHJcblxyXG4gICAgbm9ybWFsaXplTGlnaHQgPSBWZWMzLnVuaXRWZWN0b3IoVmVjMy5mcm9tQXJyYXkobGlnaHREaXJlY3Rpb24pKS5hc0FycmF5KClcclxuICAgIHJlbmRlckxvb3Aob2JqZWN0cyk7XHJcbiAgICBBbmltYXRpb24uaGFuZGxlVHJhbnNmb3JtKHRhcmdldCwgZG9jdW1lbnQpO1xyXG4gICAgXHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1GcmFtZShyZW5kZXIpO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZXRQcm9qZWN0aW9uTWF0cml4KG1hdHJpeCwgb2JqZWN0KSB7XHJcbiAgICAvLyBjb25zdCBjYW1lcmEgPSBzZXRDYW1lcmEob2JqZWN0KTtcclxuICAgIGNvbnN0IHByb2plY3Rpb25WaWV3ID0gQ2FtZXJhLnByb2plY3Rpb25NYXRyaXgocHJvamVjdGlvbl90eXBlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZ1RvUmFkKDQ1KSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FudmFzLndpZHRoIC8gY2FudmFzLmhlaWdodCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnZpZXdNYXRyaXgubmVhciwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3Qudmlld01hdHJpeC5mYXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmxpcXVlX3RoZXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JsaXF1ZV9waGkpXHJcbiAgICBjb25zdCB2aWV3TWF0cml4ID0gQ2FtZXJhLnZpZXdNYXRyaXgob2JqZWN0LnZpZXdNYXRyaXguY2FtZXJhLCBvYmplY3Qudmlld01hdHJpeC5sb29rQXQsIG9iamVjdC52aWV3TWF0cml4LnVwKTtcclxuICAgIHZhciB2aWV3UHJvamVjdGlvbk1hdHJpeCA9IE1hdDQubXVsdGlwbHkocHJvamVjdGlvblZpZXcsIHZpZXdNYXRyaXgpO1xyXG4gICAgaWYgKGZhY3RvciA8IDAuMDEpIHtcclxuICAgICAgICBmYWN0b3IgPSAwLjAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcm9qZWN0aW9uX3R5cGUgPT09IFwicGVyc3BlY3RpdmVcIikge1xyXG4gICAgICAgIHZpZXdQcm9qZWN0aW9uTWF0cml4ID0gTWF0NC5tdWx0aXBseShcclxuICAgICAgICAgICAgQ2FtZXJhLm1ha2VaVG9XTWF0cml4KGZhY3RvciksXHJcbiAgICAgICAgICAgIHZpZXdQcm9qZWN0aW9uTWF0cml4LFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgd29ybGRWaWV3UHJvamVjdGlvbk1hdHJpeCA9IE1hdDQubXVsdGlwbHkodmlld1Byb2plY3Rpb25NYXRyaXgsIG1hdHJpeCk7XHJcblxyXG4gICAgcmV0dXJuIHdvcmxkVmlld1Byb2plY3Rpb25NYXRyaXg7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlTW9kZWxPYmplY3QgKGluZGV4KSB7XHJcbiAgICBvYmplY3RzID0gbW9kZWxbaW5kZXhdO1xyXG4gICAgc2V0VGFyZ2V0KG9iamVjdHNbMF0pO1xyXG4gICAgc2V0VGFyZ2V0Um9vdChvYmplY3RzWzBdKTtcclxuICAgIGNsZWFyQ29tcG9uZW50KCk7XHJcbiAgICBkaXNwbGF5Q29tcG9uZW50KDAsIG9iamVjdHMpO1xyXG4gICAgaGFuZGxlVHJhbnNmb3JtKG9iamVjdHNbMF0pO1xyXG4gICAgaGFuZGxlVG90YWxNb2RlbEZyYW1lKHRhcmdldFJvb3QpXHJcbiAgICBoYW5kbGVUb3RhbE5vZGVGcmFtZSh0YXJnZXRSb290KVxyXG4gICAgcmVuZGVyKCk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlTWFwcGluZ1RleHR1cmUob2JqZWN0cywgdGV4dHVyZVR5cGUpIHtcclxuICBvYmplY3RzLmZvckVhY2goKG9iamVjdCkgPT4ge1xyXG4gICAgaWYgKHRleHR1cmVUeXBlID09PSBcIjBcIikge1xyXG4gICAgICBvYmplY3QucHJvZ3JhbSA9IGNyZWF0ZVNoYWRlclByb2dyYW0oXHJcbiAgICAgICAgZ2wsXHJcbiAgICAgICAgdmVydGV4X3NoYWRlcl8zZCxcclxuICAgICAgICBmcmFnbWVudF9zaGFkZXJfM2Rfbm9fbGlnaHRpbmdcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAodGV4dHVyZVR5cGUgPT09IFwiMVwiKSB7XHJcbiAgICAgIGNyZWF0ZVBhcGVyVGV4dHVyZShnbCk7XHJcbiAgICAgIG9iamVjdC5wcm9ncmFtID0gY3JlYXRlU2hhZGVyUHJvZ3JhbShcclxuICAgICAgICBnbCxcclxuICAgICAgICB2ZXJ0ZXhfc2hhZGVyXzNkLFxyXG4gICAgICAgIGZyYWdtZW50X3NoYWRlcl90ZXh0dXJlXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKHRleHR1cmVUeXBlID09PSBcIjJcIikge1xyXG4gICAgICBjcmVhdGVFbnZpcm9ubWVudFRleHR1cmUoZ2wpO1xyXG4gICAgICBvYmplY3QucHJvZ3JhbSA9IGNyZWF0ZVNoYWRlclByb2dyYW0oXHJcbiAgICAgICAgZ2wsXHJcbiAgICAgICAgdmVydGV4X3NoYWRlcl8zZCxcclxuICAgICAgICBmcmFnbWVudF9zaGFkZXJfZW52aXJvbm1lbnRcclxuICAgICAgKVxyXG4gICAgfSBlbHNlIGlmICh0ZXh0dXJlVHlwZSA9PT0gXCIzXCIpIHtcclxuICAgICAgY3JlYXRlQnVtcFRleHR1cmUoZ2wpO1xyXG4gICAgICBvYmplY3QucHJvZ3JhbSA9IGNyZWF0ZVNoYWRlclByb2dyYW0oXHJcbiAgICAgICAgZ2wsXHJcbiAgICAgICAgdmVydGV4X3NoYWRlcl8zZCxcclxuICAgICAgICBmcmFnbWVudF9zaGFkZXJfYnVtcFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKG9iamVjdC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNoYW5nZU1hcHBpbmdUZXh0dXJlKG9iamVjdC5jaGlsZHJlbiwgdGV4dHVyZVR5cGUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuYW1lVGFyZ2V0IChuZXdOYW1lKSB7XHJcbiAgZm9yKCBsZXQgaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSsrKXtcclxuICAgIGlmKG9iamVjdHNbaV0ubmFtZSA9PT0gdGFyZ2V0Lm5hbWUpe1xyXG4gICAgICBjb25zb2xlLmxvZyhvYmplY3RzW2ldLm5hbWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKG5ld05hbWUpXHJcbiAgICAgIG9iamVjdHNbaV0ubmFtZSA9IG5ld05hbWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRhcmdldC5uYW1lID0gbmV3TmFtZTtcclxuICBjbGVhckNvbXBvbmVudCgpO1xyXG4gIGRpc3BsYXlDb21wb25lbnQoMCwgb2JqZWN0cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVOb2RlIChuYW1lKSB7XHJcbiAgZnVuY3Rpb24gcmVtb3ZlTm9kZSAobm9kZSkge1xyXG4gICAgaWYgKG5vZGUubmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICBvYmplY3RzLnNwbGljZShvYmplY3RzLmluZGV4T2Yobm9kZSksIDEpO1xyXG4gICAgICBub2RlTmFtZS52YWx1ZSA9IFwiXCJcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBcclxuXHJcbiAgICBpZiAobm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuW2ldLm5hbWUgPT09IG5hbWUpIHtcclxuICAgICAgICAgIG5vZGUuY2hpbGRyZW4uc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgbm9kZU5hbWUudmFsdWUgPSBcIlwiXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlbW92ZU5vZGUobm9kZS5jaGlsZHJlbltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVOb2RlKG9iamVjdHNbMF0pO1xyXG4gIGNvbnNvbGUubG9nKG9iamVjdHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkTm9kZSAoKSB7XHJcbiAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKCk7IFxyXG4gIGN1YmVDb3VudCsrO1xyXG4gIGNoZWNrTm9kZShvYmplY3RzLCBcIm5ld0N1YmVcIiArIGN1YmVDb3VudCk7XHJcbiAgbmV3Tm9kZS5uYW1lID0gXCJuZXdDdWJlXCIgKyBjdWJlQ291bnQ7XHJcbiAgbmV3Tm9kZS5tb2RlbCA9IGJveE1vZGVsKDEsIDEsIDEsIFswLCAwLCAwXSk7XHJcbiAgbmV3Tm9kZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLCAwLCAwXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICB9O1xyXG4gIG5ld05vZGUucGlja2VkQ29sb3IgPSByYW5kb21Db2xvcnMoKSxcclxuICBuZXdOb2RlLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG4gIG5ld05vZGUuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG4gIG5ld05vZGUuYW1iaWVudCA9IFsxLDEsMV0sXHJcbiAgbmV3Tm9kZS5zaGluaW5lc3MgPSAxLFxyXG4gIG5ld05vZGUuY29uc3QgPSB7XHJcbiAgICAgIGtkOiAwLjUsXHJcbiAgICAgIGtzOiAwLjAsXHJcbiAgICAgIGthOiAxLjAsXHJcbiAgfVxyXG4gIG5ld05vZGUudmlld01hdHJpeCA9IHtcclxuICAgICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgICBuZWFyOiAwLjEsXHJcbiAgICAgIGZhcjogNTAsXHJcbiAgfTtcclxuICBuZXdOb2RlLmFuaW1hdGlvbiA9IHtcclxuICAgICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICB9O1xyXG4gIG5ld05vZGUud29ybGRNYXRyaXggPSB0YXJnZXQud29ybGRNYXRyaXg7XHJcbiAgaWYgKG9iamVjdHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICBuZXdOb2RlLnNldFBhcmVudCh0YXJnZXQpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBvYmplY3RzLnB1c2gobmV3Tm9kZSk7XHJcbiAgICB0YXJnZXQgPSBvYmplY3RzWzBdO1xyXG4gICAgdGFyZ2V0Um9vdCA9IG9iamVjdHNbMF07XHJcbiAgICBjb25zb2xlLmxvZyhvYmplY3RzKVxyXG4gIH1cclxuICBjbGVhckNvbXBvbmVudCgpO1xyXG4gIGRpc3BsYXlDb21wb25lbnQoMCwgb2JqZWN0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrTm9kZShvYmplY3RzLCBuYW1lKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAob2JqZWN0c1tpXS5uYW1lID09PSBuYW1lKSB7XHJcbiAgICAgIGN1YmVDb3VudCsrO1xyXG4gICAgfVxyXG4gICAgaWYgKG9iamVjdHNbaV0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICBjaGVja05vZGUob2JqZWN0c1tpXS5jaGlsZHJlbiwgbmFtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZE9iamVjdHMob2JqZWN0cykge1xyXG4gICAgc2V0T2JqZWN0cyhvYmplY3RzKTtcclxuICAgIHNldFRhcmdldChvYmplY3RzWzBdKTtcclxuICAgIHNldFRhcmdldFJvb3Qob2JqZWN0c1swXSk7XHJcbiAgICBjbGVhckNvbXBvbmVudCgpO1xyXG4gICAgZGlzcGxheUNvbXBvbmVudCgwLCBvYmplY3RzKTtcclxuICAgIGhhbmRsZVRyYW5zZm9ybShvYmplY3RzWzBdKTtcclxuICAgIGhhbmRsZVRvdGFsTW9kZWxGcmFtZSh0YXJnZXRSb290KVxyXG4gICAgaGFuZGxlVG90YWxOb2RlRnJhbWUodGFyZ2V0Um9vdClcclxuICAgIHJlbmRlcigpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkTW9kZWwob2JqZWN0KSB7XHJcbiAgbW9kZWwucHVzaChvYmplY3QpO1xyXG59IiwiaW1wb3J0IFZlYzMgZnJvbSBcIi4vbWF0aC9WZWMzLmpzXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVZlcnRpY2VzKGhlaWdodCwgd2lkdGgsIGRlcHRoLCBvZmZzZXQpIHtcclxuICByZXR1cm4gW1xyXG4gICAgW29mZnNldFswXSAtIHdpZHRoIC8gMiwgb2Zmc2V0WzFdIC0gaGVpZ2h0IC8gMiwgb2Zmc2V0WzJdIC0gZGVwdGggLyAyXSxcclxuICAgIFtvZmZzZXRbMF0gKyB3aWR0aCAvIDIsIG9mZnNldFsxXSAtIGhlaWdodCAvIDIsIG9mZnNldFsyXSAtIGRlcHRoIC8gMl0sXHJcbiAgICBbb2Zmc2V0WzBdIC0gd2lkdGggLyAyLCBvZmZzZXRbMV0gKyBoZWlnaHQgLyAyLCBvZmZzZXRbMl0gLSBkZXB0aCAvIDJdLFxyXG4gICAgW29mZnNldFswXSArIHdpZHRoIC8gMiwgb2Zmc2V0WzFdICsgaGVpZ2h0IC8gMiwgb2Zmc2V0WzJdIC0gZGVwdGggLyAyXSxcclxuICAgIFtvZmZzZXRbMF0gLSB3aWR0aCAvIDIsIG9mZnNldFsxXSAtIGhlaWdodCAvIDIsIG9mZnNldFsyXSArIGRlcHRoIC8gMl0sXHJcbiAgICBbb2Zmc2V0WzBdICsgd2lkdGggLyAyLCBvZmZzZXRbMV0gLSBoZWlnaHQgLyAyLCBvZmZzZXRbMl0gKyBkZXB0aCAvIDJdLFxyXG4gICAgW29mZnNldFswXSAtIHdpZHRoIC8gMiwgb2Zmc2V0WzFdICsgaGVpZ2h0IC8gMiwgb2Zmc2V0WzJdICsgZGVwdGggLyAyXSxcclxuICAgIFtvZmZzZXRbMF0gKyB3aWR0aCAvIDIsIG9mZnNldFsxXSArIGhlaWdodCAvIDIsIG9mZnNldFsyXSArIGRlcHRoIC8gMl0sXHJcbiAgXVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVGYWNlcygpIHtcclxuICByZXR1cm4gW1xyXG4gICAgWzEsIDMsIDJdLFxyXG4gICAgWzQsIDIsIDNdLFxyXG4gICAgWzEsIDIsIDVdLFxyXG4gICAgWzYsIDUsIDJdLFxyXG4gICAgWzEsIDUsIDNdLFxyXG4gICAgWzUsIDcsIDNdLFxyXG4gICAgWzIsIDQsIDZdLFxyXG4gICAgWzgsIDYsIDRdLFxyXG4gICAgWzQsIDMsIDhdLFxyXG4gICAgWzcsIDgsIDNdLFxyXG4gICAgWzUsIDYsIDddLFxyXG4gICAgWzgsIDcsIDZdLFxyXG4gIF1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVUZXhDb29yICgpIHtcclxuICByZXR1cm4gW1xyXG4gICAgMSwgMSwgMSwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMCxcclxuXHJcbiAgICAwLCAxLCAxLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAxLCAxLFxyXG5cclxuICAgIDAsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsXHJcblxyXG4gICAgMSwgMSwgMSwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMCxcclxuXHJcbiAgICAxLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAxLCAxLCAwLCAwLFxyXG5cclxuICAgIDAsIDEsIDEsIDEsIDAsIDAsIDEsIDAsIDAsIDAsIDEsIDEsXHJcbiAgXVxyXG59XHJcbmZ1bmN0aW9uIGdlbmVyYXRlVGFuZ2VudHMoKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIC8vYmFja1xyXG4gICAgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSxcclxuICAgIC8vYm90dG9tXHJcbiAgICAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLFxyXG4gICAgLy9sZWZ0XHJcbiAgICAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLFxyXG4gICAgLy9yaWdodFxyXG4gICAgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCxcclxuICAgIC8vdG9wXHJcbiAgICAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLFxyXG4gICAgLy9mcm9udFxyXG4gICAgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSxcclxuICBdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQml0YW5nZW50cygpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCxcclxuICAgICAgICAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLFxyXG4gICAgICAgIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsXHJcbiAgICAgICAgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCxcclxuICAgICAgICAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLFxyXG4gICAgICAgIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsXHJcbiAgICBdXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU5vcm1hbHModmVydGljZXMsIGZhY2VzKSB7XHJcbiAgbGV0IG5vcm1hbHMgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZhY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBsZXQgZmFjZSA9IGZhY2VzW2ldO1xyXG4gICAgbGV0IHYxID0gVmVjMy5mcm9tQXJyYXkodmVydGljZXNbZmFjZVswXSAtIDFdKVxyXG4gICAgbGV0IHYyID0gVmVjMy5mcm9tQXJyYXkodmVydGljZXNbZmFjZVsxXSAtIDFdKVxyXG4gICAgbGV0IHYzID0gVmVjMy5mcm9tQXJyYXkodmVydGljZXNbZmFjZVsyXSAtIDFdKVxyXG5cclxuICAgIGxldCB2MXYyID0gVmVjMy5zdWIodjIsIHYxKTtcclxuICAgIGxldCB2MXYzID0gVmVjMy5zdWIodjMsdjEpO1xyXG5cclxuICAgIGxldCByZXMgPSBWZWMzLnVuaXRWZWN0b3IoVmVjMy5jcm9zcyh2MXYyLHYxdjMpKS5hc0FycmF5KClcclxuICAgIG5vcm1hbHMucHVzaChyZXMpO1xyXG4gICAgbm9ybWFscy5wdXNoKHJlcyk7XHJcbiAgICBub3JtYWxzLnB1c2gocmVzKTtcclxuICB9XHJcbiAgcmV0dXJuIG5vcm1hbHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlQ29sb3JzKHZlcnRpY2VzLCBjb2xvciA9IG51bGwpIHtcclxuICBsZXQgY29sb3JzID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkgKz0gMykge1xyXG4gICAgdmFyIGMgPSBjb2xvcjtcclxuICAgIGlmIChjb2xvciA9PSBudWxsKSB7XHJcbiAgICAgIGMgPSBbTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKV07XHJcbiAgICB9IFxyXG4gICAgY29sb3JzLnB1c2goYyk7XHJcbiAgICBjb2xvcnMucHVzaChjKTtcclxuICAgIGNvbG9ycy5wdXNoKGMpO1xyXG4gICAgY29sb3JzLnB1c2goYyk7XHJcbiAgICBjb2xvcnMucHVzaChjKTtcclxuICAgIGNvbG9ycy5wdXNoKGMpO1xyXG4gIH1cclxuICByZXR1cm4gY29sb3JzO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBib3hNb2RlbChoZWlnaHQsIHdpZHRoLCBkZXB0aCwgb2Zmc2V0KSB7XHJcblxyXG4gIGxldCB2ZXJ0aWNlcyA9IGdlbmVyYXRlVmVydGljZXMoaGVpZ2h0LCB3aWR0aCwgZGVwdGgsIG9mZnNldCk7XHJcbiAgbGV0IGNlbnRlciA9IFtvZmZzZXRbMF0sIG9mZnNldFsxXSwgb2Zmc2V0WzJdXTtcclxuICBsZXQgZmFjZXMgPSBnZW5lcmF0ZUZhY2VzKCk7XHJcbiAgbGV0IHRleENvb3JkID0gZ2VuZXJhdGVUZXhDb29yKCk7XHJcbiAgbGV0IG5vcm1hbHMgPSBnZW5lcmF0ZU5vcm1hbHModmVydGljZXMsIGZhY2VzKTtcclxuICB2ZXJ0aWNlcyA9IHRvVmVydGljZXModmVydGljZXMsIGZhY2VzKTtcclxuXHJcbiAgbGV0IHRhbmdlbnRzID0gZ2VuZXJhdGVUYW5nZW50cygpO1xyXG4gIGxldCBiaXRhbmdlbnRzID0gZ2VuZXJhdGVCaXRhbmdlbnRzKCk7XHJcbiAgbGV0IGNvbG9ycyA9IGdlbmVyYXRlQ29sb3JzKHZlcnRpY2VzKTtcclxuICBcclxuICByZXR1cm4ge1xyXG4gICAgdmVydGljZXM6IHZlcnRpY2VzLFxyXG4gICAgZmFjZXM6IGZhY2VzLFxyXG4gICAgdGFuZ2VudHM6IHRhbmdlbnRzLFxyXG4gICAgYml0YW5nZW50czogYml0YW5nZW50cyxcclxuICAgIG5vcm1hbHM6IG5vcm1hbHMsXHJcbiAgICBjb2xvcnM6IGNvbG9ycyxcclxuICAgIHRleENvb3JkOiB0ZXhDb29yZCxcclxuICAgIGNlbnRlciA6IGNlbnRlclxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IFZlYzQgZnJvbSBcIi4vVmVjNC5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXQ0e1xyXG4gICAgc3RhdGljIGdldEVtcHR5KCl7XHJcbiAgICAgICAgcmV0dXJuIFswLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAwXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRJZGVudGl0eSgpe1xyXG4gICAgICAgIHJldHVybiBbMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMV07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBnZXRUcmFuc2xhdGlvbih4LCB5LCB6KXtcclxuICAgICAgICByZXR1cm4gWzEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgICAgIHgsIHksIHosIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRTY2FsZSh4LCB5LCB6KXtcclxuICAgICAgICByZXR1cm4gW3gsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCB5LCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgeiwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRSb3RhdGlvblgodGhldGEpe1xyXG4gICAgICAgIHJldHVybiBbMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIE1hdGguY29zKHRoZXRhKSwgLU1hdGguc2luKHRoZXRhKSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIE1hdGguc2luKHRoZXRhKSwgTWF0aC5jb3ModGhldGEpLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMV07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFJvdGF0aW9uWSh0aGV0YSl7XHJcbiAgICAgICAgcmV0dXJuIFtNYXRoLmNvcyh0aGV0YSksIDAsIE1hdGguc2luKHRoZXRhKSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAtTWF0aC5zaW4odGhldGEpLCAwLCBNYXRoLmNvcyh0aGV0YSksIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAxXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Um90YXRpb25aKHRoZXRhKXtcclxuICAgICAgICByZXR1cm4gW01hdGguY29zKHRoZXRhKSwgLU1hdGguc2luKHRoZXRhKSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIE1hdGguc2luKHRoZXRhKSwgTWF0aC5jb3ModGhldGEpLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDFdO1xyXG4gICAgfSAgIFxyXG4gICAgXHJcbiAgICBzdGF0aWMgdHJhbnNwb3NlKGEpIHtcclxuICAgICAgICBpZiAoIWEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7IC8vIG9yIHJldHVybiBhIGRlZmF1bHQgbWF0cml4IG9yIGhhbmRsZSB0aGUgbnVsbCBjYXNlIGFwcHJvcHJpYXRlbHlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgYVswXSwgYVs0XSwgYVs4XSwgYVsxMl0sXHJcbiAgICAgICAgICAgIGFbMV0sIGFbNV0sIGFbOV0sIGFbMTNdLFxyXG4gICAgICAgICAgICBhWzJdLCBhWzZdLCBhWzEwXSwgYVsxNF0sXHJcbiAgICAgICAgICAgIGFbM10sIGFbN10sIGFbMTFdLCBhWzE1XVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGludmVyc2UoYSkge1xyXG4gICAgICAgIHZhciBhMDAgPSBhWzAgKiA0ICsgMF07XHJcbiAgICAgICAgdmFyIGEwMSA9IGFbMCAqIDQgKyAxXTtcclxuICAgICAgICB2YXIgYTAyID0gYVswICogNCArIDJdO1xyXG4gICAgICAgIHZhciBhMDMgPSBhWzAgKiA0ICsgM107XHJcbiAgICAgICAgdmFyIGExMCA9IGFbMSAqIDQgKyAwXTtcclxuICAgICAgICB2YXIgYTExID0gYVsxICogNCArIDFdO1xyXG4gICAgICAgIHZhciBhMTIgPSBhWzEgKiA0ICsgMl07XHJcbiAgICAgICAgdmFyIGExMyA9IGFbMSAqIDQgKyAzXTtcclxuICAgICAgICB2YXIgYTIwID0gYVsyICogNCArIDBdO1xyXG4gICAgICAgIHZhciBhMjEgPSBhWzIgKiA0ICsgMV07XHJcbiAgICAgICAgdmFyIGEyMiA9IGFbMiAqIDQgKyAyXTtcclxuICAgICAgICB2YXIgYTIzID0gYVsyICogNCArIDNdO1xyXG4gICAgICAgIHZhciBhMzAgPSBhWzMgKiA0ICsgMF07XHJcbiAgICAgICAgdmFyIGEzMSA9IGFbMyAqIDQgKyAxXTtcclxuICAgICAgICB2YXIgYTMyID0gYVszICogNCArIDJdO1xyXG4gICAgICAgIHZhciBhMzMgPSBhWzMgKiA0ICsgM107XHJcbiAgICAgICAgdmFyIGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMDtcclxuICAgICAgICB2YXIgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwO1xyXG4gICAgICAgIHZhciBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTA7XHJcbiAgICAgICAgdmFyIGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMTtcclxuICAgICAgICB2YXIgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExO1xyXG4gICAgICAgIHZhciBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTI7XHJcbiAgICAgICAgdmFyIGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMDtcclxuICAgICAgICB2YXIgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwO1xyXG4gICAgICAgIHZhciBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzA7XHJcbiAgICAgICAgdmFyIGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMTtcclxuICAgICAgICB2YXIgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxO1xyXG4gICAgICAgIHZhciBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzI7XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcclxuICAgICAgICB2YXIgZGV0ID1cclxuICAgICAgICBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XHJcblxyXG4gICAgICAgIGlmICghZGV0KSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRldCA9IDEuMCAvIGRldDtcclxuXHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgKGExMSAqIGIxMSAtIGExMiAqIGIxMCArIGExMyAqIGIwOSkgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMDIgKiBiMTAgLSBhMDEgKiBiMTEgLSBhMDMgKiBiMDkpICogZGV0LFxyXG4gICAgICAgICAgICAoYTMxICogYjA1IC0gYTMyICogYjA0ICsgYTMzICogYjAzKSAqIGRldCxcclxuICAgICAgICAgICAgKGEyMiAqIGIwNCAtIGEyMSAqIGIwNSAtIGEyMyAqIGIwMykgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMTIgKiBiMDggLSBhMTAgKiBiMTEgLSBhMTMgKiBiMDcpICogZGV0LFxyXG4gICAgICAgICAgICAoYTAwICogYjExIC0gYTAyICogYjA4ICsgYTAzICogYjA3KSAqIGRldCxcclxuICAgICAgICAgICAgKGEzMiAqIGIwMiAtIGEzMCAqIGIwNSAtIGEzMyAqIGIwMSkgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMjAgKiBiMDUgLSBhMjIgKiBiMDIgKyBhMjMgKiBiMDEpICogZGV0LFxyXG4gICAgICAgICAgICAoYTEwICogYjEwIC0gYTExICogYjA4ICsgYTEzICogYjA2KSAqIGRldCxcclxuICAgICAgICAgICAgKGEwMSAqIGIwOCAtIGEwMCAqIGIxMCAtIGEwMyAqIGIwNikgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMzAgKiBiMDQgLSBhMzEgKiBiMDIgKyBhMzMgKiBiMDApICogZGV0LFxyXG4gICAgICAgICAgICAoYTIxICogYjAyIC0gYTIwICogYjA0IC0gYTIzICogYjAwKSAqIGRldCxcclxuICAgICAgICAgICAgKGExMSAqIGIwNyAtIGExMCAqIGIwOSAtIGExMiAqIGIwNikgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMDAgKiBiMDkgLSBhMDEgKiBiMDcgKyBhMDIgKiBiMDYpICogZGV0LFxyXG4gICAgICAgICAgICAoYTMxICogYjAxIC0gYTMwICogYjAzIC0gYTMyICogYjAwKSAqIGRldCxcclxuICAgICAgICAgICAgKGEyMCAqIGIwMyAtIGEyMSAqIGIwMSArIGEyMiAqIGIwMCkgKiBkZXQsXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdHJhbnNsYXRlICh0eCwgdHksIHR6KSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgdHgsIHR5LCB0eiwgMVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0dXJuIGIgKiBhXHJcbiAgICBzdGF0aWMgbXVsdGlwbHkoYSwgYil7XHJcbiAgICAgICAgbGV0IHJlcyA9IE1hdDQuZ2V0RW1wdHkoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7ICsraSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7ICsraikge1xyXG4gICAgICAgICAgICAgICAgcmVzW2kgKiA0ICsgal0gPSBWZWM0LmRvdChNYXQ0LmdldFJvdyhiLCBpKSwgTWF0NC5nZXRDb2x1bW4oYSwgaikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcm90YXRlWChyYWQpIHtcclxuICAgICAgICB2YXIgc2luID0gTWF0aC5zaW4ocmFkKTtcclxuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MocmFkKTtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCBjb3MsIHNpbiwgMCxcclxuICAgICAgICAgICAgMCwgLXNpbiwgY29zLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcm90YXRlWShyYWQpIHtcclxuICAgICAgICB2YXIgc2luID0gTWF0aC5zaW4ocmFkKTtcclxuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MocmFkKTtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBjb3MsIDAsIC1zaW4sIDAsXHJcbiAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgIHNpbiwgMCwgY29zLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcm90YXRlWihyYWQpIHtcclxuICAgICAgICB2YXIgc2luID0gTWF0aC5zaW4ocmFkKTtcclxuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MocmFkKTtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBjb3MsIHNpbiwgMCwgMCxcclxuICAgICAgICAgICAgLXNpbiwgY29zLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2NhbGUgKHN4LCBzeSwgc3opIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBzeCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgc3ksIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIHN6LCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1dGlsc1xyXG4gICAgc3RhdGljIGdldFJvdyhtYXRyaXgsIHJvdyl7XHJcbiAgICAgICAgLy8gdXNlIFZlYzQgdG8gZ2V0IHRoZSByb3dcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzQobWF0cml4W3JvdyAqIDRdLCBtYXRyaXhbcm93ICogNCArIDFdLCBtYXRyaXhbcm93ICogNCArIDJdLCBtYXRyaXhbcm93ICogNCArIDNdKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Q29sdW1uKG1hdHJpeCwgY29sdW1uKXtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzQobWF0cml4W2NvbHVtbl0sIG1hdHJpeFtjb2x1bW4gKyA0XSwgbWF0cml4W2NvbHVtbiArIDhdLCBtYXRyaXhbY29sdW1uICsgMTJdKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlYzN7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB6KXtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy56ID0gejtcclxuICAgIH1cclxuICAgIHN0YXRpYyBhZGQoYSwgYil7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWMzKGEueCArIGIueCwgYS55ICsgYi55LCBhLnogKyBiLnopO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzdWIoYSwgYil7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWMzKGEueCAtIGIueCwgYS55IC0gYi55LCBhLnogLSBiLnopO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkb3QoYSwgYil7XHJcbiAgICAgICAgcmV0dXJuIGEueCAqIGIueCArIGEueSAqIGIueSArIGEueiAqIGIuejtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3Jvc3MoYSwgYil7XHJcbiAgICAgICAgLy8gcmV0dXJuIG5ldyBWZWMzKGEueiAqIGIueSAtIGEueSAqIGIueiwgYS54ICogYi56IC0gYS56ICogYi54ICxhLnkgKiBiLnggLSBhLnggKiBiLnkpO1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjMyhhLnkgKiBiLnogLSBhLnogKiBiLnksIGEueiAqIGIueCAtIGEueCAqIGIueiAsYS54ICogYi55IC0gYS55ICogYi54KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbm9ybShhKXtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGEueCAqIGEueCArIGEueSAqIGEueSArIGEueiAqIGEueik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVuaXRWZWN0b3IoYSl7XHJcbiAgICAgICAgbGV0IG5vcm0gPSBWZWMzLm5vcm0oYSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWMzKGEueCAvIG5vcm0sIGEueSAvIG5vcm0sIGEueiAvIG5vcm0pO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgYXNBcnJheSgpeyAgXHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueSwgdGhpcy56XTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZnJvbUFycmF5KGFycmF5KXtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzMoYXJyYXlbMF0sIGFycmF5WzFdLCBhcnJheVsyXSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVmVjMyBmcm9tIFwiLi9WZWMzLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWM0e1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgeiwgdyl7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMueiA9IHo7XHJcbiAgICAgICAgdGhpcy53ID0gdztcclxuICAgIH1cclxuICAgIHN0YXRpYyBhZGQoYSwgYil7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWM0KGEueCArIGIueCwgYS55ICsgYi55LCBhLnogKyBiLnosIGEudyArIGIudyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRvdChhLCBiKXtcclxuICAgICAgICBsZXQgcmVzID0gYS54ICogYi54ICsgYS55ICogYi55ICsgYS56ICogYi56ICsgYS53ICogYi53XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbm9ybShhKXtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGEueCAqIGEueCArIGEueSAqIGEueSArIGEueiAqIGEueiArIGEudyAqIGEudyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5vcm1hbGl6ZShhKXtcclxuICAgICAgICBsZXQgbm9ybSA9IFZlYzQubm9ybShhKTtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzQoYS54IC8gbm9ybSwgYS55IC8gbm9ybSwgYS56IC8gbm9ybSwgYS53IC8gbm9ybSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzVmVjMyhhKXsgICBcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzMoYS54LCBhLnksIGEueik7XHJcbiAgICB9XHJcblxyXG4gICAgYXNBcnJheSgpeyAgXHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueSwgdGhpcy56LCB0aGlzLnddO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmcm9tQXJyYXkoYXJyYXkpe1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjNChhcnJheVswXSwgYXJyYXlbMV0sIGFycmF5WzJdLCBhcnJheVszXSk7XHJcbiAgICB9XHJcblxyXG59IiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWdUb1JhZChkZWdyZWVzKXtcclxuICAgIHJldHVybiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcclxufSAgIFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhZFRvRGVnKHJhZGlhbnMpe1xyXG4gICAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xyXG59IiwiaW1wb3J0IE5vZGUgZnJvbSBcIi4uL25vZGUuanNcIjtcclxuaW1wb3J0IHsgZGVnVG9SYWQgfSBmcm9tIFwiLi4vbWF0aC9tYXRoVXRpbHMuanNcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vdXRpbHMvQW5pbWF0aW9uLmpzXCI7XHJcbmltcG9ydCBib3hNb2RlbCBmcm9tIFwiLi4vYm94TW9kZWwuanNcIjtcclxuXHJcbi8vIENyZWF0ZSB0aGUgY2hpY2tlbiBib2R5IG5vZGVcclxuY29uc3QgY2hpY2tlbiA9IG5ldyBOb2RlKCk7XHJcbmNoaWNrZW4uZmxhZyA9IFwiYXJ0aWN1bGF0ZWRcIjtcclxuY2hpY2tlbi5uYW1lID0gXCJjaGlja2VuXCI7XHJcbmNoaWNrZW4ubW9kZWwgPSBib3hNb2RlbCgxLCAxLjUsIDEsIFswLCAwLCAwXSk7XHJcbmNoaWNrZW4udHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMCwgMCwgMF0sXHJcbiAgICByb3RhdGU6IFs0MiwgLTU1LCAyN10sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5jaGlja2VuLnBpY2tlZENvbG9yID0gWzAuOSwgMC45LCAwXSxcclxuY2hpY2tlbi5kaWZmdXNlID0gWzAsIDAsIDBdLFxyXG5jaGlja2VuLnNwZWN1bGFyID0gWzAsIDAsIDBdLFxyXG5jaGlja2VuLmFtYmllbnQgPSBbMSwgMSwgMV0sXHJcbmNoaWNrZW4uc2hpbmluZXNzID0gMSxcclxuY2hpY2tlbi5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5jaGlja2VuLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGlja2VuRnJhbWVzKCl7XHJcbiAgICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgICAgIHRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgICAgIHJvdGF0ZTogW2RlZ1RvUmFkKDQyKSwgZGVnVG9SYWQoLTU1KSwgZGVnVG9SYWQoMjcpXSxcclxuICAgICAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG4gICAgfVxyXG4gICAgbGV0IGZyYW1lcyA9IFtdXHJcbiAgICBmb3IobGV0IGsgPSAwOyBrIDwgMTAwOyArK2spe1xyXG4gICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICBfdHJhbnNmb3JtLnRyYW5zbGF0ZVswXSA9IGsgLyA1MDtcclxuICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGZyYW1lcztcclxuXHJcbn1cclxuXHJcbmNoaWNrZW4uYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogY2hpY2tlbkZyYW1lcygpLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG4vLyBDcmVhdGUgdGhlIGhlYWQgbm9kZVxyXG5jb25zdCBoZWFkID0gbmV3IE5vZGUoKTtcclxuaGVhZC5uYW1lID0gXCJoZWFkXCI7XHJcbmhlYWQubW9kZWwgPSBib3hNb2RlbCgwLjYsIDAuNiwgMC44LCBbMCwgMCwgMF0pO1xyXG5oZWFkLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuNzUsIDAuNzUsIDBdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5oZWFkLnBpY2tlZENvbG9yID0gWzAuOSwgMC45LCAwXTtcclxuaGVhZC5kaWZmdXNlID0gWzAsIDAsIDBdO1xyXG5oZWFkLnNwZWN1bGFyID0gWzAsIDAsIDBdO1xyXG5oZWFkLmFtYmllbnQgPSBbMSwgMSwgMV07XHJcbmhlYWQuc2hpbmluZXNzID0gMSxcclxuaGVhZC5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5oZWFkLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmhlYWQuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogbnVsbCxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBudWxsLCBcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG4vLyBDcmVhdGUgdGhlIGJlYWsgbm9kZVxyXG5jb25zdCBiZWFrID0gbmV3IE5vZGUoKTtcclxuYmVhay5uYW1lID0gXCJiZWFrXCI7XHJcbmJlYWsubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC4zLCBbLTAuNjUsIC0wLjEsIDBdKTtcclxuYmVhay50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFsxLCAwLCAwXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuYmVhay5waWNrZWRDb2xvciA9IFsxLCAwLjUsIDBdO1xyXG5iZWFrLmRpZmZ1c2UgPSBbMCwgMCwgMF07XHJcbmJlYWsuc3BlY3VsYXIgPSBbMCwgMCwgMF07XHJcbmJlYWsuYW1iaWVudCA9IFsxLCAxLCAxXTtcclxuYmVhay5zaGluaW5lc3MgPSAxLFxyXG5iZWFrLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmJlYWsudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuYmVhay5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBudWxsLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IG51bGwsXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuY29uc3Qgd2hpdGVMZWZ0RXllID0gbmV3IE5vZGUoKTtcclxud2hpdGVMZWZ0RXllLm5hbWUgPSBcIndoaXRlTGVmdEV5ZVwiO1xyXG53aGl0ZUxlZnRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjA3NSwgMC4xLCAwLjEsIFstMC43NSwgMC4yLCAwLjE1XSk7XHJcbndoaXRlTGVmdEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFsxLjA0LCAwLCAwXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxud2hpdGVMZWZ0RXllLnBpY2tlZENvbG9yID0gWzAuOTksIDAuOTksIDAuOTldO1xyXG53aGl0ZUxlZnRFeWUuZGlmZnVzZSA9IFswLCAwLCAwXTtcclxud2hpdGVMZWZ0RXllLnNwZWN1bGFyID0gWzAsIDAsIDBdO1xyXG53aGl0ZUxlZnRFeWUuYW1iaWVudCA9IFsxLCAxLCAxXTtcclxud2hpdGVMZWZ0RXllLnNoaW5pbmVzcyA9IDEsXHJcbndoaXRlTGVmdEV5ZS5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG53aGl0ZUxlZnRFeWUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxud2hpdGVMZWZ0RXllLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IG51bGwsXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogbnVsbCxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG5jb25zdCBibGFja0xlZnRFeWUgPSBuZXcgTm9kZSgpO1xyXG5ibGFja0xlZnRFeWUubmFtZSA9IFwiYmxhY2tMZWZ0RXllXCI7XHJcbmJsYWNrTGVmdEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMDUsIDAuMDUsIDAuMDUsIFstMC43NSwgMC4yLCAwLjE1XSk7XHJcbmJsYWNrTGVmdEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLjA2LCAwLCAwXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuYmxhY2tMZWZ0RXllLnBpY2tlZENvbG9yID0gWzAsIDAsIDBdO1xyXG5ibGFja0xlZnRFeWUuZGlmZnVzZSA9IFswLCAwLCAwXTtcclxuYmxhY2tMZWZ0RXllLnNwZWN1bGFyID0gWzAsIDAsIDBdO1xyXG5ibGFja0xlZnRFeWUuYW1iaWVudCA9IFsxLCAxLCAxXTtcclxuYmxhY2tMZWZ0RXllLnNoaW5pbmVzcyA9IDEsXHJcbmJsYWNrTGVmdEV5ZS5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5ibGFja0xlZnRFeWUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuYmxhY2tMZWZ0RXllLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IG51bGwsXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogbnVsbCxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcblxyXG59O1xyXG5cclxuY29uc3Qgd2hpdGVSaWdodEV5ZSA9IG5ldyBOb2RlKCk7XHJcbndoaXRlUmlnaHRFeWUubmFtZSA9IFwid2hpdGVSaWdodEV5ZVwiO1xyXG53aGl0ZVJpZ2h0RXllLm1vZGVsID0gYm94TW9kZWwoMC4wNzUsIDAuMSwgMC4xLCBbLTAuNzUsIDAuMiwgMC4xNV0pO1xyXG53aGl0ZVJpZ2h0RXllLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzEuMDQsIDAsIC0wLjMyXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxud2hpdGVSaWdodEV5ZS5waWNrZWRDb2xvciA9IFswLjk5LCAwLjk5LCAwLjk5XTtcclxud2hpdGVSaWdodEV5ZS5kaWZmdXNlID0gWzAsIDAsIDBdO1xyXG53aGl0ZVJpZ2h0RXllLnNwZWN1bGFyID0gWzAsIDAsIDBdO1xyXG53aGl0ZVJpZ2h0RXllLmFtYmllbnQgPSBbMSwgMSwgMV07XHJcbndoaXRlUmlnaHRFeWUuc2hpbmluZXNzID0gMSxcclxud2hpdGVSaWdodEV5ZS5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG53aGl0ZVJpZ2h0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbndoaXRlUmlnaHRFeWUuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogbnVsbCxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBudWxsLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxuXHJcbn07XHJcblxyXG5jb25zdCBibGFja1JpZ2h0RXllID0gbmV3IE5vZGUoKTtcclxuYmxhY2tSaWdodEV5ZS5uYW1lID0gXCJibGFja1JpZ2h0RXllXCI7XHJcbmJsYWNrUmlnaHRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjA1LCAwLjA1LCAwLjA1LCBbLTAuNzUsIDAuMiwgMC4xNV0pO1xyXG5ibGFja1JpZ2h0RXllLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuMDYsIDAsIDBdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5ibGFja1JpZ2h0RXllLnBpY2tlZENvbG9yID0gWzAsIDAsIDBdO1xyXG5ibGFja1JpZ2h0RXllLmRpZmZ1c2UgPSBbMCwgMCwgMF07XHJcbmJsYWNrUmlnaHRFeWUuc3BlY3VsYXIgPSBbMCwgMCwgMF07XHJcbmJsYWNrUmlnaHRFeWUuYW1iaWVudCA9IFsxLCAxLCAxXTtcclxuYmxhY2tSaWdodEV5ZS5zaGluaW5lc3MgPSAxLFxyXG5ibGFja1JpZ2h0RXllLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmJsYWNrUmlnaHRFeWUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuYmxhY2tSaWdodEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBudWxsLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IG51bGwsXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuXHJcblxyXG4vLyBDcmVhdGUgdGhlIGxlZnQgd2luZyBub2RlXHJcbmNvbnN0IGxlZnRXaW5nID0gbmV3IE5vZGUoKTtcclxubGVmdFdpbmcubmFtZSA9IFwibGVmdFdpbmdcIjtcclxubGVmdFdpbmcubW9kZWwgPSBib3hNb2RlbCgwLjUsIDAuMSwgMSwgWzAsIDAsIDBdKTtcclxubGVmdFdpbmcudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMCwgMCwgLTAuNzVdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgOTBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubGVmdFdpbmcucGlja2VkQ29sb3IgPSBbMC45LCAwLjksIDBdO1xyXG5sZWZ0V2luZy5kaWZmdXNlID0gWzAsIDAsIDBdO1xyXG5sZWZ0V2luZy5zcGVjdWxhciA9IFswLCAwLCAwXTtcclxubGVmdFdpbmcuYW1iaWVudCA9IFsxLCAxLCAxXTtcclxubGVmdFdpbmcuc2hpbmluZXNzID0gMSxcclxubGVmdFdpbmcuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxubGVmdFdpbmcudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGxlZnRXaW5nRnJhbWVzKCl7XHJcblxyXG4gICAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgICAgICB0cmFuc2xhdGU6IFswLCAwLCAtMC43NV0sXHJcbiAgICAgICAgcm90YXRlOiBbMCwgMCwgTWF0aC5QSSAvIDJdLFxyXG4gICAgICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgICB9XHJcbiAgICBsZXQgZnJhbWVzID0gW11cclxuICAgIGZvcihsZXQgayA9IDA7IGsgPCA0OyArK2spe1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gMTI7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSAtTWF0aC5QSSAvIDkgKyBNYXRoLlBJLzkgKiBpIC8gNjtcclxuICAgICAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGkgPTAgOyBpIDw9IDEyOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gTWF0aC5QSSAvIDkgLSBNYXRoLlBJLzkgKiBpIC8gNjtcclxuICAgICAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZnJvbSAtcGkvOSB0byAwXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDw9IDY7IGkrKyl7XHJcbiAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gLU1hdGguUEkgLyA5ICsgTWF0aC5QSS85ICogaSAvIDY7XHJcbiAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7IFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZyYW1lcztcclxuXHJcbn1cclxuXHJcbmxlZnRXaW5nLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IGxlZnRXaW5nRnJhbWVzKCksXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogQW5pbWF0aW9uLmFuaW1hdGlvblNjcmlwdCgpLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbi8vIENyZWF0ZSB0aGUgcmlnaHQgd2luZyBub2RlXHJcbmNvbnN0IHJpZ2h0V2luZyA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0V2luZy5uYW1lID0gXCJyaWdodFdpbmdcIjtcclxucmlnaHRXaW5nLm1vZGVsID0gYm94TW9kZWwoMC41LCAwLjEsIDEsIFswLCAwLCAwXSk7XHJcbnJpZ2h0V2luZy50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLCAwLCAwLjc1XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDkwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnJpZ2h0V2luZy5waWNrZWRDb2xvciA9IFswLjksIDAuOSwgMF07XHJcbnJpZ2h0V2luZy5kaWZmdXNlID0gWzAsIDAsIDBdO1xyXG5yaWdodFdpbmcuc3BlY3VsYXIgPSBbMCwgMCwgMF07XHJcbnJpZ2h0V2luZy5hbWJpZW50ID0gWzEsIDEsIDFdO1xyXG5yaWdodFdpbmcuc2hpbmluZXNzID0gMSxcclxucmlnaHRXaW5nLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbnJpZ2h0V2luZy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmlnaHRXaW5nRnJhbWVzKCl7XHJcbiAgICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgICAgIHRyYW5zbGF0ZTogWzAsIDAsIDAuNzVdLFxyXG4gICAgICAgIHJvdGF0ZTogWzAsIDAsIE1hdGguUEkgLyAyXSxcclxuICAgICAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG4gICAgfVxyXG4gICAgbGV0IGZyYW1lcyA9IFtdXHJcbiAgICBmb3IobGV0IGsgPSAwOyBrIDwgNDsgKytrKXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDw9IDEyOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gTWF0aC5QSSAvIDkgLSBNYXRoLlBJLzkgKiBpIC8gNjtcclxuICAgICAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGkgPTAgOyBpIDw9IDEyOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gLSBNYXRoLlBJIC8gOSArIE1hdGguUEkvOSAqIGkgLyA2O1xyXG4gICAgICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBmcm9tIHBpLzYgdG8gMFxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8PSA2OyBpKyspe1xyXG4gICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IE1hdGguUEkgLyA5IC0gTWF0aC5QSS85ICogaSAvIDY7XHJcbiAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7IFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZyYW1lcztcclxuXHJcbn1cclxuXHJcbnJpZ2h0V2luZy5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiByaWdodFdpbmdGcmFtZXMoKSxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuLy8gQ3JlYXRlIHRoZSByaWdodCBsZWcgbm9kZVxyXG5jb25zdCByaWdodExlZyA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0TGVnLm5hbWUgPSBcInJpZ2h0TGVnXCI7XHJcbnJpZ2h0TGVnLm1vZGVsID0gYm94TW9kZWwoMC42LCAwLjIsIDAuMiwgWzAsIDAsIDBdKTtcclxucmlnaHRMZWcudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbLTAuNSwgLTAuOCwgLTAuMzVdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5yaWdodExlZy5waWNrZWRDb2xvciA9IFsxLCAwLjUsIDBdO1xyXG5yaWdodExlZy5kaWZmdXNlID0gWzAsIDAsIDBdO1xyXG5yaWdodExlZy5zcGVjdWxhciA9IFswLCAwLCAwXTtcclxucmlnaHRMZWcuYW1iaWVudCA9IFsxLCAxLCAxXTtcclxucmlnaHRMZWcuc2hpbmluZXNzID0gMSxcclxucmlnaHRMZWcuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxucmlnaHRMZWcudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJpZ2h0TGVnRnJhbWVzKCl7XHJcbiAgICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgICAgIHRyYW5zbGF0ZTogWy0wLjUsIC0wLjgsIC0wLjM1XSxcclxuICAgICAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgICAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG4gICAgfVxyXG4gICAgbGV0IGZyYW1lcyA9IFtdXHJcbiAgICBmb3IobGV0IGsgPSAwOyBrIDwgNDsgKytrKXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDw9IDEyOyBpKyspe1xyXG4gICAgICAgICAgICAvLyBhcHBlbmQgZm9yIGFuZ2xlIHBpLzYgLSBwaS8zICogaS8xMiB0byBmcmFtZXNcclxuICAgICAgICAgICAgLy8gY2xvbmUgdGhlIHRyYW5zZm9ybSBvYmplY3RcclxuICAgICAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVsyXSA9IE1hdGguUEkgLyA2IC0gTWF0aC5QSS8zICogaSAvIDEyO1xyXG4gICAgICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaSA9MCA7IGkgPD0gMTI7IGkrKyl7XHJcbiAgICAgICAgICAgIC8vIGFwcGVuZCBmb3IgYW5nbGUgcGkvNiAqIGkvMTIgdG8gZnJhbWVzXHJcbiAgICAgICAgICAgIC8vIGNsb25lIHRoZSB0cmFuc2Zvcm0gb2JqZWN0XHJcbiAgICAgICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMl0gPSAtIE1hdGguUEkgLyA2ICsgTWF0aC5QSS8zICogaSAvIDEyO1xyXG4gICAgICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBmcm9tIHBpLzYgdG8gMFxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8PSA2OyBpKyspe1xyXG4gICAgICAgIC8vIGFwcGVuZCBmb3IgYW5nbGUgcGkvNiAtIHBpLzMgKiBpLzEyIHRvIGZyYW1lc1xyXG4gICAgICAgIC8vIGNsb25lIHRoZSB0cmFuc2Zvcm0gb2JqZWN0XHJcbiAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzJdID0gTWF0aC5QSSAvIDYgLSBNYXRoLlBJLzYgKiBpIC8gNjtcclxuICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTsgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZyYW1lcztcclxufVxyXG5cclxuXHJcbnJpZ2h0TGVnLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXMgOiByaWdodExlZ0ZyYW1lcygpLFxyXG4gICAgY3VycmVudEZyYW1lIDogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuLy8gY3JldGUgdGhlIHJpZ2h0IGZvb3Qgbm9kZVxyXG5jb25zdCByaWdodEZvb3QgPSBuZXcgTm9kZSgpO1xyXG5yaWdodEZvb3QubmFtZSA9IFwicmlnaHRGb290XCI7XHJcbnJpZ2h0Rm9vdC5tb2RlbCA9IGJveE1vZGVsKDAuMSwgMC40LCAwLjMsIFswLCAwLCAwXSk7XHJcbnJpZ2h0Rm9vdC50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLjAyLCAtMC4zNCwgMF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnJpZ2h0Rm9vdC5waWNrZWRDb2xvciA9IFsxLCAwLjUsIDBdO1xyXG5yaWdodEZvb3QuZGlmZnVzZSA9IFswLCAwLCAwXTtcclxucmlnaHRGb290LnNwZWN1bGFyID0gWzAsIDAsIDBdO1xyXG5yaWdodEZvb3QuYW1iaWVudCA9IFsxLCAxLCAxXTtcclxucmlnaHRGb290LnNoaW5pbmVzcyA9IDEsXHJcbnJpZ2h0Rm9vdC5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5yaWdodEZvb3Qudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxucmlnaHRGb290LmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IG51bGwsXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogbnVsbCxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG4vLyBDcmVhdGUgdGhlIGxlZnQgbGVnIG5vZGVcclxuY29uc3QgbGVmdExlZyA9IG5ldyBOb2RlKCk7XHJcbmxlZnRMZWcubmFtZSA9IFwibGVmdExlZ1wiO1xyXG5sZWZ0TGVnLm1vZGVsID0gYm94TW9kZWwoMC42LCAwLjIsIDAuMiwgWzAsIDAsIDBdKTtcclxubGVmdExlZy50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFstMC41LCAtMC44LCAwLjM1XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubGVmdExlZy5waWNrZWRDb2xvciA9IFsxLCAwLjUsIDBdO1xyXG5sZWZ0TGVnLmRpZmZ1c2UgPSBbMCwgMCwgMF07XHJcbmxlZnRMZWcuc3BlY3VsYXIgPSBbMCwgMCwgMF07XHJcbmxlZnRMZWcuYW1iaWVudCA9IFsxLCAxLCAxXTtcclxubGVmdExlZy5zaGluaW5lc3MgPSAxLFxyXG5sZWZ0TGVnLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmxlZnRMZWcudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGxlZnRMZWdGcmFtZXMoKXtcclxuICAgIGxldCB0cmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgdHJhbnNsYXRlOiBbLTAuNSwgLTAuOCwgMC4zNV0sXHJcbiAgICAgICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICAgIH1cclxuICAgIGxldCBmcmFtZXMgPSBbXVxyXG4gICAgZm9yKGxldCBrID0gMDsgayA8IDQ7ICsrayl7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8PSAxMjsgaSsrKXtcclxuICAgICAgICAgICAgLy8gYXBwZW5kIGZvciBhbmdsZSBwaS82IC0gcGkvMyAqIGkvMTIgdG8gZnJhbWVzXHJcbiAgICAgICAgICAgIC8vIGNsb25lIHRoZSB0cmFuc2Zvcm0gb2JqZWN0XHJcbiAgICAgICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMl0gPSAtIE1hdGguUEkgLyA2ICsgTWF0aC5QSS8zICogaSAvIDEyO1xyXG4gICAgICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaSA9MCA7IGkgPD0gMTI7IGkrKyl7XHJcbiAgICAgICAgICAgIC8vIGFwcGVuZCBmb3IgYW5nbGUgcGkvNiAqIGkvMTIgdG8gZnJhbWVzXHJcbiAgICAgICAgICAgIC8vIGNsb25lIHRoZSB0cmFuc2Zvcm0gb2JqZWN0XHJcbiAgICAgICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMl0gPSBNYXRoLlBJIC8gNiAtIE1hdGguUEkvMyAqIGkgLyAxMjtcclxuICAgICAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZnJvbSAtcGkvNiB0byAwXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDw9IDY7IGkrKyl7XHJcbiAgICAgICAgLy8gYXBwZW5kIGZvciBhbmdsZSBwaS82IC0gcGkvMyAqIGkvMTIgdG8gZnJhbWVzXHJcbiAgICAgICAgLy8gY2xvbmUgdGhlIHRyYW5zZm9ybSBvYmplY3RcclxuICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMl0gPSAtTWF0aC5QSSAvIDYgKyBNYXRoLlBJLzYgKiBpIC8gNjtcclxuICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTsgXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnJhbWVzO1xyXG59XHJcblxyXG5sZWZ0TGVnLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXMgOiBsZWZ0TGVnRnJhbWVzKCksXHJcbiAgICBjdXJyZW50RnJhbWUgOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG4vLyBDcmVhdGUgdGhlIGxlZnQgZm9vdCBub2RlXHJcbmNvbnN0IGxlZnRGb290ID0gbmV3IE5vZGUoKTtcclxubGVmdEZvb3QubmFtZSA9IFwibGVmdEZvb3RcIjtcclxubGVmdEZvb3QubW9kZWwgPSBib3hNb2RlbCgwLjEsIDAuNCwgMC4zLCBbMCwgMCwgMF0pO1xyXG5sZWZ0Rm9vdC50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLjAyLCAtMC4zNCwgMF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmxlZnRGb290LnBpY2tlZENvbG9yID0gWzEsIDAuNSwgMF07XHJcbmxlZnRGb290LmRpZmZ1c2UgPSBbMCwgMCwgMF07XHJcbmxlZnRGb290LnNwZWN1bGFyID0gWzAsIDAsIDBdO1xyXG5sZWZ0Rm9vdC5hbWJpZW50ID0gWzEsIDEsIDFdO1xyXG5sZWZ0Rm9vdC5zaGluaW5lc3MgPSAxLFxyXG5sZWZ0Rm9vdC5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5sZWZ0Rm9vdC52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5sZWZ0Rm9vdC5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBudWxsLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IG51bGwsXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuLy8gQ3JlYXRlIHRoZSB0YWlsIG5vZGVcclxuY29uc3QgdGFpbCA9IG5ldyBOb2RlKCk7XHJcbnRhaWwubmFtZSA9IFwidGFpbFwiO1xyXG5cclxuXHJcbi8vIEFzc2VtYmxlIHRoZSBjaGlja2VuIG1vZGVsXHJcbi8vIGNoaWNrZW4uYWRkQ2hpbGQoaGVhZCk7XHJcbi8vIGhlYWQuYWRkQ2hpbGQoYmVhayk7XHJcbi8vIGNoaWNrZW4uYWRkQ2hpbGQobGVmdFdpbmcpO1xyXG4vLyBjaGlja2VuLmFkZENoaWxkKHJpZ2h0V2luZyk7XHJcbi8vIGNoaWNrZW4uYWRkQ2hpbGQobGVmdExlZyk7XHJcbi8vIGNoaWNrZW4uYWRkQ2hpbGQocmlnaHRMZWcpO1xyXG5cclxuLy8gQXNzZW1ibGUgdGhlIGNoaWNrZW4gbW9kZWxcclxuaGVhZC5zZXRQYXJlbnQoY2hpY2tlbik7XHJcbmJlYWsuc2V0UGFyZW50KGhlYWQpO1xyXG53aGl0ZVJpZ2h0RXllLnNldFBhcmVudChoZWFkKTtcclxuYmxhY2tSaWdodEV5ZS5zZXRQYXJlbnQod2hpdGVSaWdodEV5ZSk7XHJcbndoaXRlTGVmdEV5ZS5zZXRQYXJlbnQoaGVhZCk7XHJcbmJsYWNrTGVmdEV5ZS5zZXRQYXJlbnQod2hpdGVMZWZ0RXllKTtcclxubGVmdFdpbmcuc2V0UGFyZW50KGNoaWNrZW4pO1xyXG5yaWdodFdpbmcuc2V0UGFyZW50KGNoaWNrZW4pO1xyXG5sZWZ0TGVnLnNldFBhcmVudChjaGlja2VuKTtcclxubGVmdEZvb3Quc2V0UGFyZW50KGxlZnRMZWcpO1xyXG5yaWdodExlZy5zZXRQYXJlbnQoY2hpY2tlbik7XHJcbnJpZ2h0Rm9vdC5zZXRQYXJlbnQocmlnaHRMZWcpO1xyXG5cclxuXHJcbnZhciBjaGlja2VuTW9kZWwgPSBbXHJcbiAgY2hpY2tlblxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjaGlja2VuTW9kZWw7XHJcbiIsImltcG9ydCBOb2RlIGZyb20gXCIuLi9ub2RlLmpzXCI7XHJcbmltcG9ydCB7IGRlZ1RvUmFkIH0gZnJvbSBcIi4uL21hdGgvbWF0aFV0aWxzLmpzXCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uL3V0aWxzL0FuaW1hdGlvbi5qc1wiO1xyXG5pbXBvcnQgYm94TW9kZWwsIHtnZW5lcmF0ZUZhY2VzLCBnZW5lcmF0ZU5vcm1hbHMsIGdlbmVyYXRlVmVydGljZXN9IGZyb20gXCIuLi9ib3hNb2RlbC5qc1wiO1xyXG5cclxuY29uc3QgYm9keUNvbG9yID0gWzAuODg2LCAwLjM0NSwgMC4xMzNdO1xyXG5jb25zdCB3aGl0ZUNvbG9yID0gWzAuOTksIDAuOTksIDAuOTldO1xyXG5jb25zdCBibGFja0NvbG9yID0gWzAsIDAsIDBdO1xyXG5jb25zdCBicm93bkNvbG9yID0gWzAuNTQ1LCAwLjI3MSwgMC4wNzVdO1xyXG5cclxuY29uc3QgZm94ID0gbmV3IE5vZGUoKTtcclxuZm94Lm5hbWUgPSBcImZveFwiO1xyXG5mb3gubW9kZWwgPSBib3hNb2RlbCgwLjYsIDAuNywgMSwgWzAsIDAsIDBdKTsgXHJcbmZveC50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMCwgMCwgMF0sXHJcbiAgcm90YXRlOiBbMzAsNDUsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmZveC5waWNrZWRDb2xvciA9IGJvZHlDb2xvcjtcclxuZm94LmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5mb3guc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5mb3guYW1iaWVudCA9IFsxLDEsMV0sXHJcbmZveC5zaGluaW5lc3MgPSAxLFxyXG5mb3guY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxuZm94LnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxuZm94LmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGZyYW1lczogZm94RnJhbWVzKCksXHJcbiAgY3VycmVudEZyYW1lOiAwLFxyXG4gIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgaXNBdXRvOiBmYWxzZSxcclxuICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG5mdW5jdGlvbiBmb3hGcmFtZXMoKSB7XHJcbiAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgcm90YXRlOiBbZGVnVG9SYWQoMzApLCBkZWdUb1JhZCg0NSksIGRlZ1RvUmFkKDApXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgfVxyXG4gIGxldCBmcmFtZXMgPSBbXVxyXG4gIGZvcihsZXQgayA9IDA7IGsgPCA1MDsgKytrKXtcclxuICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICBfdHJhbnNmb3JtLnRyYW5zbGF0ZVswXSA9ICBrIC8gNTAgO1xyXG4gICAgICBfdHJhbnNmb3JtLnRyYW5zbGF0ZVsyXSA9ICBrIC8gNTAgO1xyXG4gICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBmcmFtZXM7XHJcblxyXG59XHJcblxyXG5jb25zdCBoZWFkID0gbmV3IE5vZGUoKTtcclxuaGVhZC5uYW1lID0gXCJoZWFkXCI7XHJcbmhlYWQubW9kZWwgPSBib3hNb2RlbCgwLjUsIDAuNSwgMC40LCBbMCwgMCwgMF0pO1xyXG5oZWFkLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLCAwLjEsIDAuN10sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmhlYWQucGlja2VkQ29sb3IgPSBib2R5Q29sb3I7XHJcbmhlYWQuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbmhlYWQuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5oZWFkLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5oZWFkLnNoaW5pbmVzcyA9IDEsXHJcbmhlYWQuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxuaGVhZC52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbmhlYWQuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3Qgd2hpdGVSaWdodEV5ZSA9IG5ldyBOb2RlKCk7XHJcbndoaXRlUmlnaHRFeWUubmFtZSA9IFwid2hpdGVSaWdodEV5ZVwiO1xyXG53aGl0ZVJpZ2h0RXllLm1vZGVsID0gYm94TW9kZWwoMC4xLCAwLjEsIDAuMDUsIFswLCAwLCAwXSk7XHJcbndoaXRlUmlnaHRFeWUudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAuMTUsIDAuMSwgMC4yXSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxud2hpdGVSaWdodEV5ZS5waWNrZWRDb2xvciA9IHdoaXRlQ29sb3I7XHJcbndoaXRlUmlnaHRFeWUuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbndoaXRlUmlnaHRFeWUuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG53aGl0ZVJpZ2h0RXllLmFtYmllbnQgPSBbMSwxLDFdLFxyXG53aGl0ZVJpZ2h0RXllLnNoaW5pbmVzcyA9IDEsXHJcbndoaXRlUmlnaHRFeWUuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxud2hpdGVSaWdodEV5ZS52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbndoaXRlUmlnaHRFeWUuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3Qgd2hpdGVMZWZ0RXllID0gbmV3IE5vZGUoKTtcclxud2hpdGVMZWZ0RXllLm5hbWUgPSBcIndoaXRlTGVmdEV5ZVwiO1xyXG53aGl0ZUxlZnRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjEsIDAuMSwgMC4wNSwgWzAsIDAsIDBdKTtcclxud2hpdGVMZWZ0RXllLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFstMC4xNSwgMC4xLCAwLjJdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG53aGl0ZUxlZnRFeWUucGlja2VkQ29sb3IgPSB3aGl0ZUNvbG9yO1xyXG53aGl0ZUxlZnRFeWUuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbndoaXRlTGVmdEV5ZS5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbndoaXRlTGVmdEV5ZS5hbWJpZW50ID0gWzEsMSwxXSxcclxud2hpdGVMZWZ0RXllLnNoaW5pbmVzcyA9IDEsXHJcbndoaXRlTGVmdEV5ZS5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG53aGl0ZUxlZnRFeWUudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG53aGl0ZUxlZnRFeWUuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgYmxhY2tSaWdodEV5ZSA9IG5ldyBOb2RlKCk7XHJcbmJsYWNrUmlnaHRFeWUubmFtZSA9IFwiYmxhY2tSaWdodEV5ZVwiO1xyXG5ibGFja1JpZ2h0RXllLm1vZGVsID0gYm94TW9kZWwoMC4xLCAwLjA2LCAwLjA1LCBbMCwgMCwgMF0pO1xyXG5ibGFja1JpZ2h0RXllLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFstMC4wMywgMCwgMC4wMV0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmJsYWNrUmlnaHRFeWUucGlja2VkQ29sb3IgPSBibGFja0NvbG9yO1xyXG5ibGFja1JpZ2h0RXllLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5ibGFja1JpZ2h0RXllLnNwZWN1bGFyID0gWzEsMSwxXSxcclxuYmxhY2tSaWdodEV5ZS5hbWJpZW50ID0gWzEsMSwxXSxcclxuYmxhY2tSaWdodEV5ZS5zaGluaW5lc3MgPSAxLFxyXG5ibGFja1JpZ2h0RXllLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmJsYWNrUmlnaHRFeWUudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5ibGFja1JpZ2h0RXllLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IGJsYWNrTGVmdEV5ZSA9IG5ldyBOb2RlKCk7XHJcbmJsYWNrTGVmdEV5ZS5uYW1lID0gXCJibGFja0xlZnRFeWVcIjtcclxuYmxhY2tMZWZ0RXllLm1vZGVsID0gYm94TW9kZWwoMC4xLCAwLjA2LCAwLjA1LCBbMCwgMCwgMF0pO1xyXG5ibGFja0xlZnRFeWUudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAuMDMsIDAsIDAuMDFdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5ibGFja0xlZnRFeWUucGlja2VkQ29sb3IgPSBibGFja0NvbG9yO1xyXG5ibGFja0xlZnRFeWUuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbmJsYWNrTGVmdEV5ZS5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbmJsYWNrTGVmdEV5ZS5hbWJpZW50ID0gWzEsMSwxXSxcclxuYmxhY2tMZWZ0RXllLnNoaW5pbmVzcyA9IDEsXHJcbmJsYWNrTGVmdEV5ZS5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5ibGFja0xlZnRFeWUudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5ibGFja0xlZnRFeWUuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3Qgbm9zZSA9IG5ldyBOb2RlKCk7XHJcbm5vc2UubmFtZSA9IFwibm9zZVwiO1xyXG5ub3NlLm1vZGVsID0gYm94TW9kZWwoMC4xNSwgMC4zLCAwLjIsIFswLCAwLCAwXSk7XHJcbm5vc2UudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAsIC0wLjEsIDAuM10sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbm5vc2UucGlja2VkQ29sb3IgPSBibGFja0NvbG9yO1xyXG5ub3NlLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5ub3NlLnNwZWN1bGFyID0gWzEsMSwxXSxcclxubm9zZS5hbWJpZW50ID0gWzEsMSwxXSxcclxubm9zZS5zaGluaW5lc3MgPSAxLFxyXG5ub3NlLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbm5vc2Uudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5ub3NlLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IHVuZGVybm9zZSA9IG5ldyBOb2RlKCk7XHJcbnVuZGVybm9zZS5uYW1lID0gXCJ1bmRlcm5vc2VcIjtcclxudW5kZXJub3NlLm1vZGVsID0gYm94TW9kZWwoMC4xLCAwLjMsIDAuMiwgWzAsIDAsIDBdKTtcclxudW5kZXJub3NlLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLCAtMC4yLCAwLjNdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG51bmRlcm5vc2UucGlja2VkQ29sb3IgPSB3aGl0ZUNvbG9yO1xyXG51bmRlcm5vc2UuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbnVuZGVybm9zZS5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbnVuZGVybm9zZS5hbWJpZW50ID0gWzEsMSwxXSxcclxudW5kZXJub3NlLnNoaW5pbmVzcyA9IDEsXHJcbnVuZGVybm9zZS5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG51bmRlcm5vc2Uudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG51bmRlcm5vc2UuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgcmlnaHRFYXIgPSBuZXcgTm9kZSgpO1xyXG5yaWdodEVhci5uYW1lID0gXCJyaWdodEVhclwiO1xyXG5yaWdodEVhci5tb2RlbCA9IGJveE1vZGVsKDAuMiwgMC4yLCAwLjEsIFswLCAwLCAwXSk7XHJcbnJpZ2h0RWFyLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLjE1LCAwLjM1LCAwXSxcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5yaWdodEVhci5waWNrZWRDb2xvciA9IGJsYWNrQ29sb3I7XHJcbnJpZ2h0RWFyLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5yaWdodEVhci5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbnJpZ2h0RWFyLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5yaWdodEVhci5zaGluaW5lc3MgPSAxLFxyXG5yaWdodEVhci5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5yaWdodEVhci52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbnJpZ2h0RWFyLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IGxlZnRFYXIgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0RWFyLm5hbWUgPSBcImxlZnRFYXJcIjtcclxubGVmdEVhci5tb2RlbCA9IGJveE1vZGVsKDAuMiwgMC4yLCAwLjEsIFswLCAwLCAwXSk7XHJcbmxlZnRFYXIudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWy0wLjE1LCAwLjM1LCAwXSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubGVmdEVhci5waWNrZWRDb2xvciA9IGJsYWNrQ29sb3I7XHJcbmxlZnRFYXIuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbmxlZnRFYXIuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5sZWZ0RWFyLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5sZWZ0RWFyLnNoaW5pbmVzcyA9IDEsXHJcbmxlZnRFYXIuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxubGVmdEVhci52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbmxlZnRFYXIuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgcmlnaHRGcm9udExlZyA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0RnJvbnRMZWcubmFtZSA9IFwicmlnaHRGcm9udExlZ1wiO1xyXG5yaWdodEZyb250TGVnLm1vZGVsID0gYm94TW9kZWwoMSwgMC4yLCAwLjE1LCBbMCwgMCwgMF0pO1xyXG5yaWdodEZyb250TGVnLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLjIsIC0wLjI1LCAwLjJdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5yaWdodEZyb250TGVnLnBpY2tlZENvbG9yID0gYmxhY2tDb2xvcjtcclxucmlnaHRGcm9udExlZy5kaWZmdXNlID0gWzEsMSwxXSxcclxucmlnaHRGcm9udExlZy5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbnJpZ2h0RnJvbnRMZWcuYW1iaWVudCA9IFsxLDEsMV0sXHJcbnJpZ2h0RnJvbnRMZWcuc2hpbmluZXNzID0gMSxcclxucmlnaHRGcm9udExlZy5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5yaWdodEZyb250TGVnLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxucmlnaHRGcm9udExlZy5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBmcmFtZXM6IHJpZ2h0RnJvbnRMZWdGcmFtZXMoKSxcclxuICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICBpc0F1dG86IGZhbHNlLFxyXG4gIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJpZ2h0RnJvbnRMZWdGcmFtZXMgKCkge1xyXG4gIGxldCB0cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLjIsIC0wLjI1LCAwLjJdLCBcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICB9XHJcbiAgbGV0IGZyYW1lcyA9IFtdXHJcbiAgZm9yKGxldCBrID0gMDsgayA8IDI1OyArK2spe1xyXG4gICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gZGVnVG9SYWQoLWspO1xyXG4gICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICB9XHJcblxyXG4gIGZvcihsZXQgayA9IDA7IGsgPCAyNTsgKytrKXtcclxuICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gZGVnVG9SYWQoayk7XHJcbiAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICB9XHJcbiAgcmV0dXJuIGZyYW1lcztcclxuXHJcbn1cclxuXHJcbmNvbnN0IHJpZ2h0RnJvbnRUb2UgPSBuZXcgTm9kZSgpO1xyXG5yaWdodEZyb250VG9lLm5hbWUgPSBcInJpZ2h0RnJvbnRUb2VcIjtcclxucmlnaHRGcm9udFRvZS5tb2RlbCA9IGJveE1vZGVsKDAuMSwgMC4yLCAwLjIsIFswLCAwLCAwXSk7XHJcbnJpZ2h0RnJvbnRUb2UudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAsIC0wLjQ1LCAwLjA1XSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRGcm9udFRvZS5waWNrZWRDb2xvciA9IHdoaXRlQ29sb3I7XHJcbnJpZ2h0RnJvbnRUb2UuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbnJpZ2h0RnJvbnRUb2Uuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5yaWdodEZyb250VG9lLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5yaWdodEZyb250VG9lLnNoaW5pbmVzcyA9IDEsXHJcbnJpZ2h0RnJvbnRUb2UuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxucmlnaHRGcm9udFRvZS52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbnJpZ2h0RnJvbnRUb2UuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgbGVmdEZyb250TGVnID0gbmV3IE5vZGUoKTtcclxubGVmdEZyb250TGVnLm5hbWUgPSBcImxlZnRGcm9udExlZ1wiO1xyXG5sZWZ0RnJvbnRMZWcubW9kZWwgPSBib3hNb2RlbCgxLCAwLjIsIDAuMTUsIFswLCAwLCAwXSk7XHJcbmxlZnRGcm9udExlZy50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbLTAuMiwgLTAuMjUsIDAuMl0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmxlZnRGcm9udExlZy5waWNrZWRDb2xvciA9IGJsYWNrQ29sb3I7XHJcbmxlZnRGcm9udExlZy5kaWZmdXNlID0gWzEsMSwxXSxcclxubGVmdEZyb250TGVnLnNwZWN1bGFyID0gWzEsMSwxXSxcclxubGVmdEZyb250TGVnLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5sZWZ0RnJvbnRMZWcuc2hpbmluZXNzID0gMSxcclxubGVmdEZyb250TGVnLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmxlZnRGcm9udExlZy52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbmxlZnRGcm9udExlZy5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBmcmFtZXM6IGxlZnRGcm9udExlZ0ZyYW1lcygpLFxyXG4gIGN1cnJlbnRGcmFtZTogMCxcclxuICBhbmltYXRpb25GdW5jdGlvbjogQW5pbWF0aW9uLmFuaW1hdGlvblNjcmlwdCgpLFxyXG4gIGlzQXV0bzogZmFsc2UsXHJcbiAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuZnVuY3Rpb24gbGVmdEZyb250TGVnRnJhbWVzICgpIHtcclxuICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbLTAuMiwgLTAuMjUsIDAuMl0sIFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG4gIH1cclxuICBsZXQgZnJhbWVzID0gW11cclxuXHJcbiAgZm9yKGxldCBrID0gMDsgayA8IDI1OyArK2spe1xyXG4gICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSBkZWdUb1JhZChrKTtcclxuICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gIH1cclxuICBmb3IobGV0IGsgPSAwOyBrIDwgMjU7ICsrayl7XHJcbiAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IGRlZ1RvUmFkKC1rKTtcclxuICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gIH1cclxuICByZXR1cm4gZnJhbWVzO1xyXG5cclxufVxyXG5cclxuY29uc3QgbGVmdEZyb250VG9lID0gbmV3IE5vZGUoKTtcclxubGVmdEZyb250VG9lLm5hbWUgPSBcImxlZnRGcm9udFRvZVwiO1xyXG5sZWZ0RnJvbnRUb2UubW9kZWwgPSBib3hNb2RlbCgwLjEsIDAuMiwgMC4xNSwgWzAsIDAsIDBdKTtcclxubGVmdEZyb250VG9lLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFstMCwgLTAuNDUsIDAuMDVdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5sZWZ0RnJvbnRUb2UucGlja2VkQ29sb3IgPSB3aGl0ZUNvbG9yO1xyXG5sZWZ0RnJvbnRUb2UuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbmxlZnRGcm9udFRvZS5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbmxlZnRGcm9udFRvZS5hbWJpZW50ID0gWzEsMSwxXSxcclxubGVmdEZyb250VG9lLnNoaW5pbmVzcyA9IDEsXHJcbmxlZnRGcm9udFRvZS5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5sZWZ0RnJvbnRUb2Uudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5sZWZ0RnJvbnRUb2UuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgcmlnaHRSZWFyTGVnID0gbmV3IE5vZGUoKTtcclxucmlnaHRSZWFyTGVnLm5hbWUgPSBcInJpZ2h0UmVhckxlZ1wiO1xyXG5yaWdodFJlYXJMZWcubW9kZWwgPSBib3hNb2RlbCgxLCAwLjIsIDAuMTUsIFswLCAwLCAwXSk7XHJcbnJpZ2h0UmVhckxlZy50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMC4yLCAtMC4yNSwgLTAuMl0sXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRSZWFyTGVnLnBpY2tlZENvbG9yID0gYmxhY2tDb2xvcjtcclxucmlnaHRSZWFyTGVnLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5yaWdodFJlYXJMZWcuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5yaWdodFJlYXJMZWcuYW1iaWVudCA9IFsxLDEsMV0sXHJcbnJpZ2h0UmVhckxlZy5zaGluaW5lc3MgPSAxLFxyXG5yaWdodFJlYXJMZWcuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxucmlnaHRSZWFyTGVnLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxucmlnaHRSZWFyTGVnLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IHJpZ2h0UmVhckxlZ0ZyYW1lcygpLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG5mdW5jdGlvbiByaWdodFJlYXJMZWdGcmFtZXMoKSB7XHJcbiAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuMiwgLTAuMjUsIC0wLjJdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG4gIH1cclxuICBsZXQgZnJhbWVzID0gW11cclxuICBmb3IobGV0IGsgPSAwOyBrIDwgMjU7ICsrayl7XHJcbiAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IGRlZ1RvUmFkKGsgLSAyMCk7XHJcbiAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICB9XHJcbiAgZm9yKGxldCBrID0gMDsgayA8IDI1OyArK2spe1xyXG4gICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gZGVnVG9SYWQoLWsgKyAyMCk7XHJcbiAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gIH1cclxuXHJcbiAgXHJcblxyXG4gIHJldHVybiBmcmFtZXM7XHJcbn1cclxuXHJcbmNvbnN0IHJpZ2h0UmVhclRvZSA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0UmVhclRvZS5uYW1lID0gXCJyaWdodFJlYXJUb2VcIjtcclxucmlnaHRSZWFyVG9lLm1vZGVsID0gYm94TW9kZWwoMC4xLCAwLjIsIDAuMiwgWzAsIDAsIDBdKTtcclxucmlnaHRSZWFyVG9lLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLCAtMC40NSwgMC4wNV0sXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRSZWFyVG9lLnBpY2tlZENvbG9yID0gd2hpdGVDb2xvcjtcclxucmlnaHRSZWFyVG9lLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5yaWdodFJlYXJUb2Uuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5yaWdodFJlYXJUb2UuYW1iaWVudCA9IFsxLDEsMV0sXHJcbnJpZ2h0UmVhclRvZS5zaGluaW5lc3MgPSAxLFxyXG5yaWdodFJlYXJUb2UuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxucmlnaHRSZWFyVG9lLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxucmlnaHRSZWFyVG9lLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IGxlZnRSZWFyTGVnID0gbmV3IE5vZGUoKTtcclxubGVmdFJlYXJMZWcubmFtZSA9IFwibGVmdFJlYXJMZWdcIjtcclxubGVmdFJlYXJMZWcubW9kZWwgPSBib3hNb2RlbCgxLCAwLjIsIDAuMTUsIFswLCAwLCAwXSk7XHJcbmxlZnRSZWFyTGVnLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFstMC4yLCAtMC4yNSwgLTAuMl0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmxlZnRSZWFyTGVnLnBpY2tlZENvbG9yID0gYmxhY2tDb2xvcjtcclxubGVmdFJlYXJMZWcuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbmxlZnRSZWFyTGVnLnNwZWN1bGFyID0gWzEsMSwxXSxcclxubGVmdFJlYXJMZWcuYW1iaWVudCA9IFsxLDEsMV0sXHJcbmxlZnRSZWFyTGVnLnNoaW5pbmVzcyA9IDEsXHJcbmxlZnRSZWFyTGVnLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmxlZnRSZWFyTGVnLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxubGVmdFJlYXJMZWcuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZnJhbWVzOiBsZWZ0UmVhckxlZ0ZyYW1lcygpLFxyXG4gIGN1cnJlbnRGcmFtZTogMCxcclxuICBhbmltYXRpb25GdW5jdGlvbjogQW5pbWF0aW9uLmFuaW1hdGlvblNjcmlwdCgpLFxyXG4gIGlzQXV0bzogZmFsc2UsXHJcbiAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuZnVuY3Rpb24gbGVmdFJlYXJMZWdGcmFtZXMoKSB7XHJcbiAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWy0wLjIsIC0wLjI1LCAtMC4yXSwgXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgfVxyXG4gIGxldCBmcmFtZXMgPSBbXVxyXG4gIGZvcihsZXQgayA9IDA7IGsgPCAyNTsgKytrKXtcclxuICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IGRlZ1RvUmFkKC1rICsgMjApO1xyXG4gICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICB9XHJcblxyXG4gIGZvcihsZXQgayA9IDA7IGsgPCAyNTsgKytrKXtcclxuICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gZGVnVG9SYWQoayAtIDIwKTtcclxuICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gIH1cclxuICByZXR1cm4gZnJhbWVzO1xyXG59XHJcblxyXG5jb25zdCBsZWZ0UmVhclRvZSA9IG5ldyBOb2RlKCk7XHJcbmxlZnRSZWFyVG9lLm5hbWUgPSBcImxlZnRSZWFyVG9lXCI7XHJcbmxlZnRSZWFyVG9lLm1vZGVsID0gYm94TW9kZWwoMC4xLCAwLjIsIDAuMiwgWzAsIDAsIDBdKTtcclxubGVmdFJlYXJUb2UudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWy0wLCAtMC40NSwgMC4wNV0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmxlZnRSZWFyVG9lLnBpY2tlZENvbG9yID0gd2hpdGVDb2xvcjtcclxubGVmdFJlYXJUb2UuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbmxlZnRSZWFyVG9lLnNwZWN1bGFyID0gWzEsMSwxXSxcclxubGVmdFJlYXJUb2UuYW1iaWVudCA9IFsxLDEsMV0sXHJcbmxlZnRSZWFyVG9lLnNoaW5pbmVzcyA9IDEsXHJcbmxlZnRSZWFyVG9lLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmxlZnRSZWFyVG9lLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxubGVmdFJlYXJUb2UuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgdGFpbCA9IG5ldyBOb2RlKCk7XHJcbnRhaWwubmFtZSA9IFwidGFpbFwiO1xyXG50YWlsLm1vZGVsID0gYm94TW9kZWwoMC4yLCAwLjIsIDAuNCwgWzAsIDAsIDBdKTtcclxudGFpbC50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMCwgMCwgLTAuNjVdLFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnRhaWwucGlja2VkQ29sb3IgPSBib2R5Q29sb3I7XHJcbnRhaWwuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbnRhaWwuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG50YWlsLmFtYmllbnQgPSBbMSwxLDFdLFxyXG50YWlsLnNoaW5pbmVzcyA9IDEsXHJcbnRhaWwuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxudGFpbC52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbnRhaWwuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgdGFpbGVkZ2UgPSBuZXcgTm9kZSgpO1xyXG50YWlsZWRnZS5uYW1lID0gXCJ0YWlsZWRnZVwiO1xyXG50YWlsZWRnZS5tb2RlbCA9IGJveE1vZGVsKDAuMiwgMC4yLCAwLjIsIFswLCAwLCAwXSk7XHJcbnRhaWxlZGdlLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLCAwLCAtMC45NV0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnRhaWxlZGdlLnBpY2tlZENvbG9yID0gd2hpdGVDb2xvcjtcclxudGFpbGVkZ2UuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbnRhaWxlZGdlLnNwZWN1bGFyID0gWzEsMSwxXSxcclxudGFpbGVkZ2UuYW1iaWVudCA9IFsxLDEsMV0sXHJcbnRhaWxlZGdlLnNoaW5pbmVzcyA9IDEsXHJcbnRhaWxlZGdlLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbnRhaWxlZGdlLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxudGFpbGVkZ2UuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuaGVhZC5zZXRQYXJlbnQoZm94KTtcclxucmlnaHRFYXIuc2V0UGFyZW50KGhlYWQpO1xyXG5sZWZ0RWFyLnNldFBhcmVudChoZWFkKTtcclxud2hpdGVSaWdodEV5ZS5zZXRQYXJlbnQoaGVhZCk7XHJcbndoaXRlTGVmdEV5ZS5zZXRQYXJlbnQoaGVhZCk7XHJcbmJsYWNrUmlnaHRFeWUuc2V0UGFyZW50KHdoaXRlUmlnaHRFeWUpO1xyXG5ibGFja0xlZnRFeWUuc2V0UGFyZW50KHdoaXRlTGVmdEV5ZSk7XHJcbm5vc2Uuc2V0UGFyZW50KGhlYWQpO1xyXG51bmRlcm5vc2Uuc2V0UGFyZW50KGhlYWQpO1xyXG5yaWdodEZyb250TGVnLnNldFBhcmVudChmb3gpO1xyXG5yaWdodEZyb250VG9lLnNldFBhcmVudChyaWdodEZyb250TGVnKTtcclxubGVmdEZyb250TGVnLnNldFBhcmVudChmb3gpO1xyXG5sZWZ0RnJvbnRUb2Uuc2V0UGFyZW50KGxlZnRGcm9udExlZyk7XHJcbnJpZ2h0UmVhckxlZy5zZXRQYXJlbnQoZm94KTtcclxucmlnaHRSZWFyVG9lLnNldFBhcmVudChyaWdodFJlYXJMZWcpO1xyXG5sZWZ0UmVhckxlZy5zZXRQYXJlbnQoZm94KTtcclxubGVmdFJlYXJUb2Uuc2V0UGFyZW50KGxlZnRSZWFyTGVnKTtcclxudGFpbC5zZXRQYXJlbnQoZm94KTtcclxudGFpbGVkZ2Uuc2V0UGFyZW50KGZveCk7XHJcblxyXG52YXIgZm94TW9kZWwgPSBbXHJcbiAgZm94XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3hNb2RlbDtcclxuIiwiaW1wb3J0IE5vZGUgZnJvbSBcIi4uL25vZGUuanNcIjtcclxuaW1wb3J0IHsgZGVnVG9SYWQgfSBmcm9tIFwiLi4vbWF0aC9tYXRoVXRpbHMuanNcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vdXRpbHMvQW5pbWF0aW9uLmpzXCI7XHJcbmltcG9ydCBib3hNb2RlbCwge2dlbmVyYXRlRmFjZXMsIGdlbmVyYXRlTm9ybWFscywgZ2VuZXJhdGVWZXJ0aWNlc30gZnJvbSBcIi4uL2JveE1vZGVsLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBob2xsb3dUaGluZ3koKSB7XHJcbiAgICBsZXQgdmVydGljZXMgPSBbXTtcclxuICAgIGxldCBjb2xvcnMgPSBbXTtcclxuICAgIGxldCB0YW5nZW50cyA9IFtdO1xyXG4gICAgbGV0IGJpdGFuZ2VudHMgPSBbXTtcclxuICAgIGxldCBub3JtYWxzID0gW107XHJcbiAgICBsZXQgdGV4Q29vcmQgPSBbXTtcclxuICAgIGxldCBmYWNlcyA9IGdlbmVyYXRlRmFjZXMoKTtcclxuICAgIFxyXG4gICAgY29uc3QgYm94ZXMgPSBbXHJcbiAgICAgIHsgc2l6ZTogWzAuMiwgMC44LCAwLjJdLCBwb3NpdGlvbjogWzAsIDEsIDBdIH0sXHJcbiAgICAgIHsgc2l6ZTogWzAuMiwgMC44LCAwLjJdLCBwb3NpdGlvbjogWzAsIC0xLCAwXSB9LFxyXG4gICAgICB7IHNpemU6IFsxLjgsIDAuMiwgMC4yXSwgcG9zaXRpb246IFstMC4zLCAwLCAwXSB9LFxyXG4gICAgICB7IHNpemU6IFsxLjgsIDAuMiwgMC4yXSwgcG9zaXRpb246IFswLjMsIDAsIDBdIH0sXHJcbiAgICAgIHsgc2l6ZTogWzAuMiwgMS44LCAwLjJdLCBwb3NpdGlvbjogWzAsIDAsIDAuM10gfSxcclxuICAgICAgeyBzaXplOiBbMC4yLCAxLjgsIDAuMl0sIHBvc2l0aW9uOiBbMCwgMCwgLTAuM10gfSxcclxuICAgICAgeyBzaXplOiBbMC4yLCAwLjIsIDAuOF0sIHBvc2l0aW9uOiBbMSwgMCwgMF0gfSxcclxuICAgICAgeyBzaXplOiBbMC4yLCAwLjIsIDAuOF0sIHBvc2l0aW9uOiBbLTEsIDAsIDBdIH0sXHJcbiAgICAgIHsgc2l6ZTogWzAuOCwgMC4yLCAwLjJdLCBwb3NpdGlvbjogWzAsIDAsIDFdIH0sXHJcbiAgICAgIHsgc2l6ZTogWzAuOCwgMC4yLCAwLjJdLCBwb3NpdGlvbjogWzAsIDAsIC0xXSB9LFxyXG4gICAgICB7IHNpemU6IFswLjIsIDAuMiwgMS44XSwgcG9zaXRpb246IFswLCAwLjMsIDBdIH0sXHJcbiAgICAgIHsgc2l6ZTogWzAuMiwgMC4yLCAxLjhdLCBwb3NpdGlvbjogWzAsIC0wLjMsIDBdIH1cclxuICAgIF07XHJcbiAgICBcclxuICAgIGJveGVzLmZvckVhY2goYm94ID0+IHtcclxuICAgICAgbGV0IHZlcnRpY2VzQm94ID0gZ2VuZXJhdGVWZXJ0aWNlcyguLi5ib3guc2l6ZSwgYm94LnBvc2l0aW9uKTtcclxuICAgICAgbGV0IG5vcm1hbHNCb3ggPSBnZW5lcmF0ZU5vcm1hbHModmVydGljZXNCb3gsIGZhY2VzKTtcclxuICAgICAgbm9ybWFscyA9IG5vcm1hbHMuY29uY2F0KG5vcm1hbHNCb3gpO1xyXG4gICAgICB2ZXJ0aWNlcyA9IHZlcnRpY2VzLmNvbmNhdCh0b1ZlcnRpY2VzKHZlcnRpY2VzQm94LCBmYWNlcykpO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2ZXJ0aWNlczogdmVydGljZXMsXHJcbiAgICAgIGZhY2VzOiBmYWNlcyxcclxuICAgICAgdGFuZ2VudHM6IHRhbmdlbnRzLFxyXG4gICAgICBiaXRhbmdlbnRzOiBiaXRhbmdlbnRzLFxyXG4gICAgICBub3JtYWxzOiBub3JtYWxzLFxyXG4gICAgICBjb2xvcnM6IGNvbG9ycyxcclxuICAgICAgdGV4Q29vcmQ6IHRleENvb3JkLFxyXG4gICAgfTtcclxufVxyXG4gIFxyXG5jb25zdCBob2xsb3cgPSBuZXcgTm9kZSgpO1xyXG5ob2xsb3cuZmxhZyA9IFwiaG9sbG93XCI7XHJcbmhvbGxvdy5uYW1lID0gXCJIb2xsb3cgVGhpbmd5XCI7XHJcbmhvbGxvdy5tb2RlbCA9IGhvbGxvd1RoaW5neSgpO1xyXG5ob2xsb3cudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmhvbGxvdy5waWNrZWRDb2xvciA9IHJhbmRvbUNvbG9ycygpLFxyXG5ob2xsb3cuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbmhvbGxvdy5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbmhvbGxvdy5hbWJpZW50ID0gWzEsMSwxXSxcclxuaG9sbG93LnNoaW5pbmVzcyA9IDEsXHJcbmhvbGxvdy5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5ob2xsb3cudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuaG9sbG93LmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IHRydWUsXHJcbiAgZnJhbWVzOiBob2xsb3dGcmFtZXMoKSxcclxuICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICBpc0F1dG86IHRydWUsXHJcbiAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuZnVuY3Rpb24gaG9sbG93RnJhbWVzICgpIHtcclxuICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMCwgMCwgMF0sXHJcbiAgICByb3RhdGU6IFtkZWdUb1JhZCgwKSwgZGVnVG9SYWQoMCksIGRlZ1RvUmFkKDApXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgfVxyXG4gIGxldCBmcmFtZXMgPSBbXVxyXG4gIGZvcihsZXQgayA9IDA7IGsgPCAzNjE7ICsrayl7XHJcbiAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSBkZWdUb1JhZChrKTtcclxuICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMV0gPSBkZWdUb1JhZChrKTtcclxuICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMl0gPSBkZWdUb1JhZChrKTtcclxuICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZnJhbWVzO1xyXG59XHJcblxyXG52YXIgaG9sbG93TW9kZWwgPSBbXHJcbiAgICBob2xsb3dcclxuXVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbGxvd01vZGVsOyIsImltcG9ydCBOb2RlIGZyb20gXCIuLi9ub2RlLmpzXCI7XHJcbmltcG9ydCB7IGRlZ1RvUmFkIH0gZnJvbSBcIi4uL21hdGgvbWF0aFV0aWxzLmpzXCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uL3V0aWxzL0FuaW1hdGlvbi5qc1wiO1xyXG5pbXBvcnQgYm94TW9kZWwgZnJvbSBcIi4uL2JveE1vZGVsLmpzXCI7XHJcblxyXG5cclxuY29uc3QgcGlnID0gbmV3IE5vZGUoKTtcclxucGlnLmZsYWcgPSBcImFydGljdWxhdGVkXCI7XHJcbnBpZy5uYW1lID0gXCJwaWdcIjtcclxucGlnLm1vZGVsID0gYm94TW9kZWwoMSwgMS41LCAxLCBbMCwgMCwgMF0pO1xyXG5waWcudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG4gIHJvdGF0ZTogWzEwLCA1OSwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucGlnLnBpY2tlZENvbG9yID0gWzAuOTIxNTY4NjI3LDAuNTY4NjI3NDUxLDAuODk4MDM5MjE2XSxcclxucGlnLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5waWcuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5waWcuYW1iaWVudCA9IFsxLDEsMV0sXHJcbnBpZy5zaGluaW5lc3MgPSAxLFxyXG5waWcuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxucGlnLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbnBpZy5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBwaWdGcmFtZXMoKSxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuZnVuY3Rpb24gcGlnRnJhbWVzKCkge1xyXG4gICAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgICAgICB0cmFuc2xhdGU6IFswLCAwLCAwXSxcclxuICAgICAgICByb3RhdGU6IFtkZWdUb1JhZCgxMCksIGRlZ1RvUmFkKDU5KSwgZGVnVG9SYWQoMCldLFxyXG4gICAgICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgICB9XHJcbiAgICBsZXQgZnJhbWVzID0gW11cclxuICAgIGZvcihsZXQgayA9IDA7IGsgPCAyNTsgKytrKXtcclxuICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgX3RyYW5zZm9ybS50cmFuc2xhdGVbMV0gPSBrIC8gMjU7XHJcbiAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBmcmFtZXM7XHJcbn1cclxuXHJcbmNvbnN0IGhlYWQgPSBuZXcgTm9kZSgpO1xyXG5oZWFkLm5hbWUgPSBcImhlYWRcIjtcclxuaGVhZC5tb2RlbCA9IGJveE1vZGVsKDEsIDEsIDEuMiwgWy0xLCAwLjYsIDBdKTtcclxuaGVhZC50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLCAwLCAwXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuaGVhZC5waWNrZWRDb2xvciA9IFswLjkyMTU2ODYyNywwLjU2ODYyNzQ1MSwwLjg5ODAzOTIxNl0sXHJcbmhlYWQuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbmhlYWQuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5oZWFkLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5oZWFkLnNoaW5pbmVzcyA9IDEsXHJcbmhlYWQuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxuaGVhZC52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5oZWFkLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IGhlYWRGcmFtZXMoKSxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuZnVuY3Rpb24gaGVhZEZyYW1lcygpIHtcclxuICAgIGxldCB0cmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgdHJhbnNsYXRlOiBbMCwgMCwgMF0sXHJcbiAgICAgICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICAgIH1cclxuICAgIGxldCBmcmFtZXMgPSBbXVxyXG4gICAgZm9yKGxldCBrID0gMDsgayA8IDI1OyArK2spe1xyXG4gICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVsyXSA9IC1rIC8gMTAwO1xyXG4gICAgICAgIF90cmFuc2Zvcm0uc2NhbGVbMF0gPSAxICsgayAvIDUwO1xyXG4gICAgICAgIF90cmFuc2Zvcm0uc2NhbGVbMV0gPSAxICsgayAvIDUwO1xyXG4gICAgICAgIF90cmFuc2Zvcm0uc2NhbGVbMl0gPSAxICsgayAvIDUwO1xyXG4gICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gZnJhbWVzO1xyXG59XHJcblxyXG5jb25zdCB3aGl0ZVJpZ2h0RXllID0gbmV3IE5vZGUoKTtcclxud2hpdGVSaWdodEV5ZS5uYW1lID0gXCJ3aGl0ZVJpZ2h0RXllXCI7XHJcbndoaXRlUmlnaHRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC4yLCBbLTEsIDAuNiwgMF0pO1xyXG53aGl0ZVJpZ2h0RXllLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWy0wLjUsIDAuMiwgMC40XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxud2hpdGVSaWdodEV5ZS5waWNrZWRDb2xvciA9IFswLjk5LDAuOTksMC45OV0sXHJcbndoaXRlUmlnaHRFeWUuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbndoaXRlUmlnaHRFeWUuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG53aGl0ZVJpZ2h0RXllLmFtYmllbnQgPSBbMSwxLDFdLFxyXG53aGl0ZVJpZ2h0RXllLnNoaW5pbmVzcyA9IDEsXHJcbndoaXRlUmlnaHRFeWUuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxud2hpdGVSaWdodEV5ZS52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG53aGl0ZVJpZ2h0RXllLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCB3aGl0ZUxlZnRFeWUgPSBuZXcgTm9kZSgpO1xyXG53aGl0ZUxlZnRFeWUubmFtZSA9IFwid2hpdGVMZWZ0RXllXCI7XHJcbndoaXRlTGVmdEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMiwgMC4yLCAwLjIsIFstMSwgMC42LCAwXSk7XHJcbndoaXRlTGVmdEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFstMC41LCAwLjIsIC0wLjRdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG53aGl0ZUxlZnRFeWUucGlja2VkQ29sb3IgPSBbMC45OSwwLjk5LDAuOTldLFxyXG53aGl0ZUxlZnRFeWUuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbndoaXRlTGVmdEV5ZS5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbndoaXRlTGVmdEV5ZS5hbWJpZW50ID0gWzEsMSwxXSxcclxud2hpdGVMZWZ0RXllLnNoaW5pbmVzcyA9IDEsXHJcbndoaXRlTGVmdEV5ZS5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG53aGl0ZUxlZnRFeWUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxud2hpdGVMZWZ0RXllLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCBibGFja1JpZ2h0RXllID0gbmV3IE5vZGUoKTtcclxuYmxhY2tSaWdodEV5ZS5uYW1lID0gXCJibGFja1JpZ2h0RXllXCI7XHJcbmJsYWNrUmlnaHRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC4yLCBbLTEsIDAuNiwgMF0pO1xyXG5ibGFja1JpZ2h0RXllLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuMDUsIDAsIDAuMDc1XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuYmxhY2tSaWdodEV5ZS5waWNrZWRDb2xvciA9IFswLDAsMF0sXHJcbmJsYWNrUmlnaHRFeWUuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbmJsYWNrUmlnaHRFeWUuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5ibGFja1JpZ2h0RXllLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5ibGFja1JpZ2h0RXllLnNoaW5pbmVzcyA9IDEsXHJcbmJsYWNrUmlnaHRFeWUuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxuYmxhY2tSaWdodEV5ZS52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5ibGFja1JpZ2h0RXllLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCBibGFja0xlZnRFeWUgPSBuZXcgTm9kZSgpO1xyXG5ibGFja0xlZnRFeWUubmFtZSA9IFwiYmxhY2tMZWZ0RXllXCI7XHJcbmJsYWNrTGVmdEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMiwgMC4yLCAwLjIsIFstMSwgMC42LCAwXSk7XHJcbmJsYWNrTGVmdEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLjA1LCAwLCAtMC4wNzVdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5ibGFja0xlZnRFeWUucGlja2VkQ29sb3IgPSBbMCwwLDBdLFxyXG5ibGFja0xlZnRFeWUuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbmJsYWNrTGVmdEV5ZS5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbmJsYWNrTGVmdEV5ZS5hbWJpZW50ID0gWzEsMSwxXSxcclxuYmxhY2tMZWZ0RXllLnNoaW5pbmVzcyA9IDEsXHJcbmJsYWNrTGVmdEV5ZS5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5ibGFja0xlZnRFeWUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuYmxhY2tMZWZ0RXllLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCBub3NlID0gbmV3IE5vZGUoKTtcclxubm9zZS5uYW1lID0gXCJub3NlXCI7XHJcbm5vc2UubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC40LCBbLTEuNSwgMC41NSwgMF0pO1xyXG5ub3NlLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuMDUsIDAsIDBdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5ub3NlLnBpY2tlZENvbG9yID0gWzAuNzY4NjI3NDUxLDAuMzc2NDcwNTg4LCAwLjc0NTA5ODAzOV0sXHJcbm5vc2UuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbm5vc2Uuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5ub3NlLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5ub3NlLnNoaW5pbmVzcyA9IDEsXHJcbm5vc2UuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxubm9zZS52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5ub3NlLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCByaWdodEhvbGUgPSBuZXcgTm9kZSgpO1xyXG5yaWdodEhvbGUubmFtZSA9IFwicmlnaHRIb2xlXCI7XHJcbnJpZ2h0SG9sZS5tb2RlbCA9IGJveE1vZGVsKDAuMTUsIDAuMiwgMC4xLCBbLTEuNiwgMC41NSwgMF0pO1xyXG5yaWdodEhvbGUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMC4wNSwgMCwgMC4xXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRIb2xlLnBpY2tlZENvbG9yID0gWzAuOTIxNTY4NjI3LDAuNTY4NjI3NDUxLDAuODk4MDM5MjE2XSxcclxucmlnaHRIb2xlLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5yaWdodEhvbGUuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5yaWdodEhvbGUuYW1iaWVudCA9IFsxLDEsMV0sXHJcbnJpZ2h0SG9sZS5zaGluaW5lc3MgPSAxLFxyXG5yaWdodEhvbGUuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxucmlnaHRIb2xlLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbnJpZ2h0SG9sZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgbGVmdEhvbGUgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0SG9sZS5uYW1lID0gXCJsZWZ0SG9sZVwiO1xyXG5sZWZ0SG9sZS5tb2RlbCA9IGJveE1vZGVsKDAuMTUsIDAuMiwgMC4xLCBbLTEuNiwgMC41NSwgMF0pO1xyXG5sZWZ0SG9sZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLjA1LCAwLCAtMC4xXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubGVmdEhvbGUucGlja2VkQ29sb3IgPSBbMC45MjE1Njg2MjcsMC41Njg2Mjc0NTEsMC44OTgwMzkyMTZdLFxyXG5sZWZ0SG9sZS5kaWZmdXNlID0gWzEsMSwxXSxcclxubGVmdEhvbGUuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5sZWZ0SG9sZS5hbWJpZW50ID0gWzEsMSwxXSxcclxubGVmdEhvbGUuc2hpbmluZXNzID0gMSxcclxubGVmdEhvbGUuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxubGVmdEhvbGUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxubGVmdEhvbGUuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IHJpZ2h0RnJvbnRMZWcgPSBuZXcgTm9kZSgpO1xyXG5yaWdodEZyb250TGVnLm5hbWUgPSBcInJpZ2h0RnJvbnRMZWdcIjtcclxucmlnaHRGcm9udExlZy5tb2RlbCA9IGJveE1vZGVsKDAuNSwgMC4yLCAwLjIsIFswLjEsIDAsIDAuMTVdKTtcclxucmlnaHRGcm9udExlZy50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFstMC42LCAtMC41LCAtMC40XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRGcm9udExlZy5waWNrZWRDb2xvciA9IFswLjc2ODYyNzQ1MSwwLjM3NjQ3MDU4OCwgMC43NDUwOTgwMzldLFxyXG5yaWdodEZyb250TGVnLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5yaWdodEZyb250TGVnLnNwZWN1bGFyID0gWzEsMSwxXSxcclxucmlnaHRGcm9udExlZy5hbWJpZW50ID0gWzEsMSwxXSxcclxucmlnaHRGcm9udExlZy5zaGluaW5lc3MgPSAxLFxyXG5yaWdodEZyb250TGVnLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbnJpZ2h0RnJvbnRMZWcudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxucmlnaHRGcm9udExlZy5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiByaWdodEZyb250TGVnRnJhbWVzKCksXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogQW5pbWF0aW9uLmFuaW1hdGlvblNjcmlwdCgpLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJpZ2h0RnJvbnRMZWdGcmFtZXMoKSB7XHJcbiAgICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgICAgIHRyYW5zbGF0ZTpbLTAuNiwgLTAuNSwgLTAuNF0sXHJcbiAgICAgICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZnJhbWVzID0gW11cclxuICAgIGZvcihsZXQgayA9IDA7IGsgPCAyNTsgKytrKXtcclxuICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSBrLzI1IDtcclxuICAgICAgICBfdHJhbnNmb3JtLnRyYW5zbGF0ZVsyXSA9IC0wLjQgKyAtMC4yLygyNS1rKTtcclxuICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZnJhbWVzO1xyXG59XHJcblxyXG5cclxuY29uc3QgbGVmdEZyb250TGVnID0gbmV3IE5vZGUoKTtcclxubGVmdEZyb250TGVnLm5hbWUgPSBcImxlZnRGcm9udExlZ1wiO1xyXG5sZWZ0RnJvbnRMZWcubW9kZWwgPSBib3hNb2RlbCgwLjUsIDAuMiwgMC4yLCBbMC4xLCAwLCAtMC4xNV0pO1xyXG5sZWZ0RnJvbnRMZWcudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbLTAuNiwgLTAuNSwgMC40XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubGVmdEZyb250TGVnLnBpY2tlZENvbG9yID0gWzAuNzY4NjI3NDUxLDAuMzc2NDcwNTg4LCAwLjc0NTA5ODAzOV0sXHJcbmxlZnRGcm9udExlZy5kaWZmdXNlID0gWzEsMSwxXSxcclxubGVmdEZyb250TGVnLnNwZWN1bGFyID0gWzEsMSwxXSxcclxubGVmdEZyb250TGVnLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5sZWZ0RnJvbnRMZWcuc2hpbmluZXNzID0gMSxcclxubGVmdEZyb250TGVnLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59O1xyXG5sZWZ0RnJvbnRMZWcudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxubGVmdEZyb250TGVnLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IGxlZnRGcm9udEZyYW1lcygpLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG5mdW5jdGlvbiBsZWZ0RnJvbnRGcmFtZXMoKSB7XHJcbiAgICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgICAgIHRyYW5zbGF0ZTpbLTAuNiwgLTAuNSwgMC40XSxcclxuICAgICAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgICAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG4gICAgfVxyXG5cclxuICAgIGxldCBmcmFtZXMgPSBbXVxyXG4gICAgZm9yKGxldCBrID0gMDsgayA8IDI1OyArK2spe1xyXG4gICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IC1rLzI1IDtcclxuICAgICAgICBfdHJhbnNmb3JtLnRyYW5zbGF0ZVsyXSA9IDAuNCArIDAuMi8oMjUtayk7XHJcbiAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZyYW1lcztcclxufVxyXG5cclxuY29uc3QgcmlnaHRSZWFyTGVnID0gbmV3IE5vZGUoKTtcclxucmlnaHRSZWFyTGVnLm5hbWUgPSBcInJpZ2h0UmVhckxlZ1wiO1xyXG5yaWdodFJlYXJMZWcubW9kZWwgPSBib3hNb2RlbCgwLjUsIDAuMiwgMC4yLCBbMC41LCAwLCAwLjE1XSk7XHJcbnJpZ2h0UmVhckxlZy50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLCAtMC41LCAtMC40XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRSZWFyTGVnLnBpY2tlZENvbG9yID0gWzAuNzY4NjI3NDUxLDAuMzc2NDcwNTg4LCAwLjc0NTA5ODAzOV0sXHJcbnJpZ2h0UmVhckxlZy5kaWZmdXNlID0gWzEsMSwxXSxcclxucmlnaHRSZWFyTGVnLnNwZWN1bGFyID0gWzEsMSwxXSxcclxucmlnaHRSZWFyTGVnLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5yaWdodFJlYXJMZWcuc2hpbmluZXNzID0gMSxcclxucmlnaHRSZWFyTGVnLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbnJpZ2h0UmVhckxlZy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5yaWdodFJlYXJMZWcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogcmlnaHRSZWFyTGVnRnJhbWVzKCksXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogQW5pbWF0aW9uLmFuaW1hdGlvblNjcmlwdCgpLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJpZ2h0UmVhckxlZ0ZyYW1lcygpIHtcclxuICAgIGxldCB0cmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgdHJhbnNsYXRlOlswLCAtMC41LCAtMC40XSxcclxuICAgICAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgICAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG4gICAgfVxyXG5cclxuICAgIGxldCBmcmFtZXMgPSBbXVxyXG4gICAgZm9yKGxldCBrID0gMDsgayA8IDI1OyArK2spe1xyXG4gICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IGsvMjUgO1xyXG4gICAgICAgIF90cmFuc2Zvcm0udHJhbnNsYXRlWzJdID0gLTAuNCArIC0wLjIvKDI1LWspO1xyXG4gICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmcmFtZXM7XHJcbn1cclxuXHJcbmNvbnN0IGxlZnRSZWFyTGVnID0gbmV3IE5vZGUoKTtcclxubGVmdFJlYXJMZWcubmFtZSA9IFwibGVmdFJlYXJMZWdcIjtcclxubGVmdFJlYXJMZWcubW9kZWwgPSBib3hNb2RlbCgwLjUsIDAuMiwgMC4yLCBbMC41LCAwLCAtMC4xNV0pO1xyXG5sZWZ0UmVhckxlZy50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLCAtMC41LCAwLjRdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5sZWZ0UmVhckxlZy5waWNrZWRDb2xvciA9IFswLjc2ODYyNzQ1MSwwLjM3NjQ3MDU4OCwgMC43NDUwOTgwMzldLFxyXG5sZWZ0UmVhckxlZy5kaWZmdXNlID0gWzEsMSwxXSxcclxubGVmdFJlYXJMZWcuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5sZWZ0UmVhckxlZy5hbWJpZW50ID0gWzEsMSwxXSxcclxubGVmdFJlYXJMZWcuc2hpbmluZXNzID0gMSxcclxubGVmdFJlYXJMZWcuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxubGVmdFJlYXJMZWcudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxubGVmdFJlYXJMZWcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogbGVmdFJlYXJGcmFtZXMoKSxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuZnVuY3Rpb24gbGVmdFJlYXJGcmFtZXMoKSB7XHJcbiAgICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgICAgIHRyYW5zbGF0ZTpbMCwgLTAuNSwgMC40XSxcclxuICAgICAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgICAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG4gICAgfVxyXG5cclxuICAgIGxldCBmcmFtZXMgPSBbXVxyXG4gICAgZm9yKGxldCBrID0gMDsgayA8IDI1OyArK2spe1xyXG4gICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IC1rLzI1IDtcclxuICAgICAgICBfdHJhbnNmb3JtLnRyYW5zbGF0ZVsyXSA9IDAuNCArIDAuMi8oMjUtayk7XHJcbiAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZyYW1lcztcclxufVxyXG5cclxuaGVhZC5zZXRQYXJlbnQocGlnKTtcclxud2hpdGVSaWdodEV5ZS5zZXRQYXJlbnQoaGVhZCk7XHJcbndoaXRlTGVmdEV5ZS5zZXRQYXJlbnQoaGVhZCk7XHJcbmJsYWNrUmlnaHRFeWUuc2V0UGFyZW50KHdoaXRlUmlnaHRFeWUpO1xyXG5ibGFja0xlZnRFeWUuc2V0UGFyZW50KHdoaXRlTGVmdEV5ZSk7XHJcbm5vc2Uuc2V0UGFyZW50KGhlYWQpO1xyXG5yaWdodEhvbGUuc2V0UGFyZW50KG5vc2UpO1xyXG5sZWZ0SG9sZS5zZXRQYXJlbnQobm9zZSk7XHJcbnJpZ2h0RnJvbnRMZWcuc2V0UGFyZW50KHBpZyk7XHJcbmxlZnRGcm9udExlZy5zZXRQYXJlbnQocGlnKTtcclxucmlnaHRSZWFyTGVnLnNldFBhcmVudChwaWcpO1xyXG5sZWZ0UmVhckxlZy5zZXRQYXJlbnQocGlnKTtcclxuXHJcbnZhciBwaWdNb2RlbCA9IFtcclxuICAgIHBpZ1xyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGlnTW9kZWw7XHJcbiAgIiwiaW1wb3J0IE5vZGUgZnJvbSBcIi4uL25vZGUuanNcIjtcclxuaW1wb3J0IGJveE1vZGVsLCB7Z2VuZXJhdGVGYWNlcywgZ2VuZXJhdGVOb3JtYWxzLCBnZW5lcmF0ZVZlcnRpY2VzfSBmcm9tIFwiLi4vYm94TW9kZWwuanNcIjtcclxuaW1wb3J0IHsgcmFkVG9EZWcsZGVnVG9SYWQgfSBmcm9tIFwiLi4vbWF0aC9tYXRoVXRpbHMuanNcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vLi4vdXRpbHMvQW5pbWF0aW9uLmpzXCI7XHJcblxyXG5mdW5jdGlvbiByaW5nKCkge1xyXG4gICAgbGV0IHZlcnRpY2VzID0gW107XHJcbiAgICBsZXQgY29sb3JzID0gW107XHJcbiAgICBsZXQgdGFuZ2VudHMgPSBbXTtcclxuICAgIGxldCBiaXRhbmdlbnRzID0gW107XHJcbiAgICBsZXQgbm9ybWFscyA9IFtdO1xyXG4gICAgbGV0IHRleENvb3JkID0gW107XHJcbiAgICBsZXQgZmFjZXMgPSBnZW5lcmF0ZUZhY2VzKCk7XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUJveGVzKCl7XHJcbiAgICBsZXQgYm94ZXMgPSBbXTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAzNjA7ICsraSl7XHJcbiAgICAgIGxldCByYWQgPSBkZWdUb1JhZChpKTtcclxuICAgICAgbGV0IHBvc2l0aW9uID0gW01hdGguY29zKHJhZCksIE1hdGguc2luKHJhZCksIDBdO1xyXG4gICAgICBsZXQgc2l6ZSA9IFswLjA1LCAwLjA1LCAwLjhdO1xyXG4gICAgICBib3hlcy5wdXNoKHsgc2l6ZTogc2l6ZSwgcG9zaXRpb246IHBvc2l0aW9uIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJveGVzO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYm94ZXMgPSBnZW5lcmF0ZUJveGVzKCk7XHJcbiAgXHJcbiAgYm94ZXMuZm9yRWFjaChib3ggPT4ge1xyXG4gICAgbGV0IHZlcnRpY2VzQm94ID0gZ2VuZXJhdGVWZXJ0aWNlcyguLi5ib3guc2l6ZSwgYm94LnBvc2l0aW9uKTtcclxuICAgIGxldCBub3JtYWxzQm94ID0gZ2VuZXJhdGVOb3JtYWxzKHZlcnRpY2VzQm94LCBmYWNlcyk7XHJcbiAgICBub3JtYWxzID0gbm9ybWFscy5jb25jYXQobm9ybWFsc0JveCk7XHJcbiAgICB2ZXJ0aWNlcyA9IHZlcnRpY2VzLmNvbmNhdCh0b1ZlcnRpY2VzKHZlcnRpY2VzQm94LCBmYWNlcykpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdmVydGljZXM6IHZlcnRpY2VzLFxyXG4gICAgZmFjZXM6IGZhY2VzLFxyXG4gICAgdGFuZ2VudHM6IHRhbmdlbnRzLFxyXG4gICAgYml0YW5nZW50czogYml0YW5nZW50cyxcclxuICAgIG5vcm1hbHM6IG5vcm1hbHMsXHJcbiAgICBjb2xvcnM6IGNvbG9ycyxcclxuICAgIHRleENvb3JkOiB0ZXhDb29yZCxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBob2xsb3cgPSBuZXcgTm9kZSgpO1xyXG5ob2xsb3cuZmxhZyA9IFwiaG9sbG93XCI7XHJcbmhvbGxvdy5uYW1lID0gXCJSaW5nXCI7XHJcbmhvbGxvdy5tb2RlbCA9IHJpbmcoKTtcclxuaG9sbG93LnRyYW5zZm9ybSA9IHtcclxudHJhbnNsYXRlOiBbMCwgMCwgMF0sXHJcbnJvdGF0ZTogWzEwLCAwLCAwXSxcclxuc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuaG9sbG93LnBpY2tlZENvbG9yID0gcmFuZG9tQ29sb3JzKClcclxuaG9sbG93LnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxuaG9sbG93LmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5ob2xsb3cuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5ob2xsb3cuYW1iaWVudCA9IFsxLDEsMV0sXHJcbmhvbGxvdy5zaGluaW5lc3MgPSAxLFxyXG5ob2xsb3cuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxuaG9sbG93LmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IHRydWUsXHJcbiAgZnJhbWVzOiBob2xsb3dGcmFtZXMoKSxcclxuICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICBpc0F1dG86IHRydWUsXHJcbiAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuZnVuY3Rpb24gaG9sbG93RnJhbWVzKCkge1xyXG4gIGxldCB0cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLCAwLCAwXSxcclxuICAgIHJvdGF0ZTogW2RlZ1RvUmFkKDEwKSwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG4gIH1cclxuICBsZXQgZnJhbWVzID0gW11cclxuICBmb3IobGV0IGsgPSAwOyBrIDwgMzYwOyArK2spe1xyXG4gICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gZGVnVG9SYWQoKDEwK2spICUgMzYwKVxyXG4gICAgICBfdHJhbnNmb3JtLnJvdGF0ZVsxXSA9IGRlZ1RvUmFkKChrKzEpJTM2MClcclxuICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiBmcmFtZXM7XHJcbn1cclxuXHJcbnZhciBob2xsb3dSaW5nTW9kZWwgPSBbXHJcbiAgaG9sbG93XHJcbl1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBob2xsb3dSaW5nTW9kZWw7IiwiLy8gY29uc3QgeyBkZWZhdWx0OiBNYXQ0IH0gPSByZXF1aXJlKFwiLi9zdHJ1Y3RzL21hdGgvTWF0NFwiKTtcclxuaW1wb3J0IE1hdDQgZnJvbSBcIi4vbWF0aC9NYXQ0LmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcclxuICAgICAgICB0aGlzLmxvY2FsTWF0cml4ID0gTWF0NC5nZXRJZGVudGl0eSgpO1xyXG4gICAgICAgIHRoaXMud29ybGRNYXRyaXggPSBNYXQ0LmdldElkZW50aXR5KCk7XHJcbiAgICAgICAgdGhpcy53b3JsZEludmVyc2VNYXRyaXggPSBNYXQ0LmdldElkZW50aXR5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V29ybGRNYXRyaXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud29ybGRNYXRyaXg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBzZXRQYXJlbnQocGFyZW50KSB7XHJcbiAgICAgICAgLy8gYWxyZWFkeSBoYXZlIHBhcmVudFxyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcyk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudC5uYW1lO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgIHNldFdvcmxkTXR4KG1hdHJpeCkge1xyXG4gICAgICBpZiAobWF0cml4ICE9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy53b3JsZE1hdHJpeCA9IE1hdDQubXVsdGlwbHkobWF0cml4LCB0aGlzLmxvY2FsTWF0cml4KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLndvcmxkTWF0cml4ID0gdGhpcy5sb2NhbE1hdHJpeDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBjb25zdCB3b3JsZE1hdHJpeCA9IHRoaXMud29ybGRNYXRyaXg7XHJcbiAgICAgIHRoaXMud29ybGRJbnZlcnNlTWF0cml4ID0gTWF0NC50cmFuc3Bvc2UoXHJcbiAgICAgICAgTWF0NC5pbnZlcnNlKHRoaXMud29ybGRNYXRyaXgpXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgY2hpbGQuc2V0V29ybGRNdHgod29ybGRNYXRyaXgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b0pTT04oKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICBhbWJpZW50OiB0aGlzLmFtYmllbnQsXHJcbiAgICAgICAgICBhbmltYXRpb246IHRoaXMuYW5pbWF0aW9uLFxyXG4gICAgICAgICAgY2hpbGRyZW46IHRoaXMuY2hpbGRyZW4ubWFwKGNoaWxkID0+IGNoaWxkLnRvSlNPTigpKSxcclxuICAgICAgICAgIGNvbnN0OiB0aGlzLmNvbnN0LFxyXG4gICAgICAgICAgZGlmZnVzZTogdGhpcy5kaWZmdXNlLFxyXG4gICAgICAgICAgbG9jYWxNYXRyaXg6IHRoaXMubG9jYWxNYXRyaXgsXHJcbiAgICAgICAgICBtb2RlbDogdGhpcy5tb2RlbCxcclxuICAgICAgICAgIHBpY2tlZENvbG9yOiB0aGlzLnBpY2tlZENvbG9yLFxyXG4gICAgICAgICAgc2hpbmluZXNzOiB0aGlzLnNoaW5pbmVzcyxcclxuICAgICAgICAgIHNwZWN1bGFyOiB0aGlzLnNwZWN1bGFyLFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0aGlzLnRyYW5zZm9ybSxcclxuICAgICAgICAgIHZpZXdNYXRyaXg6IHRoaXMudmlld01hdHJpeCwgIFxyXG4gICAgICAgICAgd29ybGRJbnZlcnNlTWF0cml4OiB0aGlzLndvcmxkSW52ZXJzZU1hdHJpeCxcclxuICAgICAgICAgIHdvcmxkTWF0cml4OiB0aGlzLndvcmxkTWF0cml4LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZyb21KU09OKGRhdGEpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgdGhpcy5hbWJpZW50ID0gZGF0YS5hbWJpZW50O1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gZGF0YS5hbmltYXRpb247XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IGRhdGEuY2hpbGRyZW4ubWFwKGNoaWxkRGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IG5ldyBOb2RlKCk7XHJcbiAgICAgICAgICAgIGNoaWxkTm9kZS5mcm9tSlNPTihjaGlsZERhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gY2hpbGROb2RlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY29uc3QgPSBkYXRhLmNvbnN0O1xyXG4gICAgICAgIHRoaXMuZGlmZnVzZSA9IGRhdGEuZGlmZnVzZTtcclxuICAgICAgICB0aGlzLmxvY2FsTWF0cml4ID0gZGF0YS5sb2NhbE1hdHJpeDtcclxuICAgICAgICB0aGlzLm1vZGVsID0gZGF0YS5tb2RlbDtcclxuICAgICAgICB0aGlzLnBpY2tlZENvbG9yID0gZGF0YS5waWNrZWRDb2xvcjtcclxuICAgICAgICB0aGlzLnNoaW5pbmVzcyA9IGRhdGEuc2hpbmluZXNzO1xyXG4gICAgICAgIHRoaXMuc3BlY3VsYXIgPSBkYXRhLnNwZWN1bGFyO1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gZGF0YS50cmFuc2Zvcm07XHJcbiAgICAgICAgdGhpcy52aWV3TWF0cml4ID0gZGF0YS52aWV3TWF0cml4O1xyXG4gICAgICAgIHRoaXMud29ybGRJbnZlcnNlTWF0cml4ID0gZGF0YS53b3JsZEludmVyc2VNYXRyaXg7XHJcbiAgICAgICAgdGhpcy53b3JsZE1hdHJpeCA9IGRhdGEud29ybGRNYXRyaXg7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgfVxyXG4gICIsImltcG9ydCBOb2RlIGZyb20gXCIuLi9zdHJ1Y3RzL25vZGUuanNcIjtcclxuaW1wb3J0IHsgZGVnVG9SYWQsIHJhZFRvRGVnIH0gZnJvbSBcIi4uL3N0cnVjdHMvbWF0aC9tYXRoVXRpbHMuanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5pbWF0aW9ue1xyXG5cclxuICAgIHN0YXRpYyBwYXJzZUFuaW1hdGlvbkZ1bmN0aW9uKG1vZGVsKXtcclxuICAgICAgICBsZXQgYW5pbWF0aW9uID0gbW9kZWwuYW5pbWF0aW9uO1xyXG4gICAgICAgIGlmKGFuaW1hdGlvbi5pc0FuaW1hdGUpe1xyXG4gICAgICAgICAgICAvLyBwYXJzZSBzdHJpbmcgdG8gZnVuY3Rpb25cclxuICAgICAgICAgICAgbGV0IF9hbmltYXRpb25GdW5jdGlvbiA9IGV2YWwoYW5pbWF0aW9uLmFuaW1hdGlvbkZ1bmN0aW9uKVxyXG4gICAgICAgICAgICByZXR1cm4gX2FuaW1hdGlvbkZ1bmN0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYW5pbWF0ZShwYXJlbnRfbW9kZWwsIGRlbHRhVGltZSl7XHJcbiAgICAgICAgbGV0IGFuaW1hdGlvbiA9IHBhcmVudF9tb2RlbC5hbmltYXRpb247XHJcbiAgICAgICAgICAgIGlmKGFuaW1hdGlvbi5pc0FuaW1hdGUpe1xyXG4gICAgICAgICAgICAgICAgbGV0IF9hbmltYXRpb25GdW5jdGlvbiA9IEFuaW1hdGlvbi5wYXJzZUFuaW1hdGlvbkZ1bmN0aW9uKHBhcmVudF9tb2RlbCk7XHJcbiAgICAgICAgICAgICAgICBpZihfYW5pbWF0aW9uRnVuY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdHIgPSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmFuaW1hdGlvbkZ1bmN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uYW5pbWF0aW9uRnVuY3Rpb24gPSBfYW5pbWF0aW9uRnVuY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5hbmltYXRpb25GdW5jdGlvbihwYXJlbnRfbW9kZWwsIGRlbHRhVGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5hbmltYXRpb25GdW5jdGlvbiA9IHN0cjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihsZXQgbW9kZWwgb2YgcGFyZW50X21vZGVsLmNoaWxkcmVuKXsgICAgXHJcbiAgICAgICAgICAgIEFuaW1hdGlvbi5hbmltYXRlKG1vZGVsLCBkZWx0YVRpbWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJlY3Vyc2UgZWFjaCBub2RlIGNoaWxkXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldEF1dG8ocGFyZW50X21vZGVsKXtcclxuICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmlzQXV0byA9ICFwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmlzQXV0bztcclxuICAgICAgICBmb3IobGV0IG1vZGVsIG9mIHBhcmVudF9tb2RlbC5jaGlsZHJlbil7ICAgIFxyXG4gICAgICAgICAgICBBbmltYXRpb24uc2V0QXV0byhtb2RlbClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHBsYXlBbmltYXRpb24ocGFyZW50X21vZGVsKXtcclxuICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmlzQW5pbWF0ZSA9IHRydWU7XHJcbiAgICAgICAgaWYocGFyZW50X21vZGVsLmFuaW1hdGlvbi5pc1JldmVyc2Upe1xyXG4gICAgICAgICAgICBpZihwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lcyl7XHJcbiAgICAgICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lID0gcGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHBhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBwYXJlbnRfbW9kZWwuY2hpbGRyZW4peyAgICBcclxuICAgICAgICAgICAgQW5pbWF0aW9uLnBsYXlBbmltYXRpb24obW9kZWwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwYXVzZUNvbnRpbnVlQW5pbWF0aW9uKHBhcmVudF9tb2RlbCl7XHJcbiAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5pc0FuaW1hdGUgPSAhcGFyZW50X21vZGVsLmFuaW1hdGlvbi5pc0FuaW1hdGU7XHJcbiAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBwYXJlbnRfbW9kZWwuY2hpbGRyZW4peyAgICBcclxuICAgICAgICAgICAgQW5pbWF0aW9uLnBhdXNlQ29udGludWVBbmltYXRpb24obW9kZWwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZXZlcnNlQW5pbWF0aW9uKHBhcmVudF9tb2RlbCl7XHJcbiAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5pc1JldmVyc2UgPSAhcGFyZW50X21vZGVsLmFuaW1hdGlvbi5pc1JldmVyc2U7XHJcbiAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBwYXJlbnRfbW9kZWwuY2hpbGRyZW4peyAgICBcclxuICAgICAgICAgICAgQW5pbWF0aW9uLnJldmVyc2VBbmltYXRpb24obW9kZWwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhbmltYXRpb25TY3JpcHQoKXtcclxuICAgICAgICBjb25zdCBhbmltYXRpb25TY3JpcHQgPSBgKChfbm9kZSwgZGVsdGFUaW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmcmFtZXMgPSBfbm9kZS5hbmltYXRpb24uZnJhbWVzO1xyXG4gICAgICAgICAgICBpZihfbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lID49IGZyYW1lcy5sZW5ndGggfHwgX25vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA8IDApe1xyXG4gICAgICAgICAgICAgICAgaWYoX25vZGUuYW5pbWF0aW9uLmlzQXV0byl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoX25vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA8IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lID0gZnJhbWVzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF9ub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPSBfbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lICUgZnJhbWVzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7ICAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF9ub2RlLmFuaW1hdGlvbi5pc0FuaW1hdGUpIHtcclxuICAgICAgICAgICAgICAgIF9ub2RlLnRyYW5zZm9ybSA9IGZyYW1lc1tfbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lXTtcclxuICAgICAgICAgICAgICAgIGlmKF9ub2RlLmFuaW1hdGlvbi5pc1JldmVyc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgIF9ub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUtLTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgX25vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICBpZihfbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lID09IGZyYW1lcy5sZW5ndGggJiYgIV9ub2RlLmFuaW1hdGlvbi5pc0F1dG8pIF9ub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPSBmcmFtZXMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pYFxyXG4gICAgICAgIHJldHVybiBhbmltYXRpb25TY3JpcHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5leHRGcmFtZShwYXJlbnRfbW9kZWwpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzKXtcclxuICAgICAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUrKztcclxuICAgICAgICAgICAgaWYocGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPj0gcGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lID0gcGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYXJlbnRfbW9kZWwudHJhbnNmb3JtID0gcGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXNbcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IG1vZGVsIG9mIHBhcmVudF9tb2RlbC5jaGlsZHJlbil7ICAgIFxyXG4gICAgICAgICAgICBBbmltYXRpb24ubmV4dEZyYW1lKG1vZGVsKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcHJldkZyYW1lKHBhcmVudF9tb2RlbCl7XHJcbiAgICAgICAgaWYocGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMpe1xyXG4gICAgICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZS0tO1xyXG4gICAgICAgICAgICBpZihwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA8IDApe1xyXG4gICAgICAgICAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhcmVudF9tb2RlbC50cmFuc2Zvcm0gPSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lc1twYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgbW9kZWwgb2YgcGFyZW50X21vZGVsLmNoaWxkcmVuKXsgICAgXHJcbiAgICAgICAgICAgIEFuaW1hdGlvbi5wcmV2RnJhbWUobW9kZWwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmaXJzdEZyYW1lKHBhcmVudF9tb2RlbCl7XHJcbiAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5pc0FuaW1hdGUgPSBmYWxzZTtcclxuICAgICAgICBpZihwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lcyl7XHJcbiAgICAgICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lID0gMDtcclxuICAgICAgICAgICAgcGFyZW50X21vZGVsLnRyYW5zZm9ybSA9IHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzW3BhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBwYXJlbnRfbW9kZWwuY2hpbGRyZW4peyAgICBcclxuICAgICAgICAgICAgQW5pbWF0aW9uLmZpcnN0RnJhbWUobW9kZWwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBsYXN0RnJhbWUocGFyZW50X21vZGVsKXtcclxuICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmlzQW5pbWF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmKHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzKXtcclxuICAgICAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lcy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICBwYXJlbnRfbW9kZWwudHJhbnNmb3JtID0gcGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXNbcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IG1vZGVsIG9mIHBhcmVudF9tb2RlbC5jaGlsZHJlbil7ICAgIFxyXG4gICAgICAgICAgICBBbmltYXRpb24ubGFzdEZyYW1lKG1vZGVsKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdG90YWxNb2RlbEZyYW1lcyhwYXJlbnRfbW9kZWwpe1xyXG4gICAgICAgIGxldCB0b3RhbEZyYW1lcyA9IDA7XHJcbiAgICAgICAgaWYocGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMpe1xyXG4gICAgICAgICAgICB0b3RhbEZyYW1lcyA9IHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBjaGlsZF9tb2RlbCBvZiBwYXJlbnRfbW9kZWwuY2hpbGRyZW4peyAgICBcclxuICAgICAgICAgICAgLy8gcmVjdXJzZSBlYWNoIG5vZGUgY2hpbGQsIGZpbmQgbWF4IGZyYW1lXHJcbiAgICAgICAgICAgIGxldCBjaGlsZFRvdGFsRnJhbWVzID0gQW5pbWF0aW9uLnRvdGFsTW9kZWxGcmFtZXMoY2hpbGRfbW9kZWwpO1xyXG4gICAgICAgICAgICBpZihjaGlsZFRvdGFsRnJhbWVzID4gdG90YWxGcmFtZXMpe1xyXG4gICAgICAgICAgICAgICAgdG90YWxGcmFtZXMgPSBjaGlsZFRvdGFsRnJhbWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0b3RhbEZyYW1lcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdG90YWxOb2RlRnJhbWVzKHBhcmVudF9tb2RlbCl7XHJcbiAgICAgICAgbGV0IHRvdGFsTm9kZUZyYW1lcyA9IFwiLVwiO1xyXG4gICAgICAgIGlmKHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzKXtcclxuICAgICAgICAgICAgLy8gYXMgc3RyaW5nXHJcbiAgICAgICAgICAgIHRvdGFsTm9kZUZyYW1lcyA9IHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzLmxlbmd0aC50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdG90YWxOb2RlRnJhbWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjdXJyZW50TW9kZWxGcmFtZShwYXJlbnRfbW9kZWwpe1xyXG4gICAgICAgIGxldCBjdXJyZW50RnJhbWUgPSAwO1xyXG4gICAgICAgIGlmKHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzKXtcclxuICAgICAgICAgICAgY3VycmVudEZyYW1lID0gcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgbW9kZWwgb2YgcGFyZW50X21vZGVsLmNoaWxkcmVuKXsgICAgXHJcbiAgICAgICAgICAgIC8vIHJlY3Vyc2UgZWFjaCBub2RlIGNoaWxkLCBmaW5kIG1heCBmcmFtZVxyXG4gICAgICAgICAgICBsZXQgY2hpbGRDdXJyZW50RnJhbWUgPSBBbmltYXRpb24uY3VycmVudE1vZGVsRnJhbWUobW9kZWwpO1xyXG4gICAgICAgICAgICBpZihjaGlsZEN1cnJlbnRGcmFtZSA+IGN1cnJlbnRGcmFtZSl7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50RnJhbWUgPSBjaGlsZEN1cnJlbnRGcmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY3VycmVudEZyYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjdXJyZW50Tm9kZUZyYW1lKG5vZGUpe1xyXG4gICAgICAgIGxldCBjdXJyRnJhbWUgPSBcIi1cIlxyXG4gICAgICAgIGlmKG5vZGUuYW5pbWF0aW9uLmZyYW1lcyl7XHJcbiAgICAgICAgICAgIGN1cnJGcmFtZSA9IG5vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZS50b1N0cmluZygpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjdXJyRnJhbWVcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGFuZGxlR2VuZXJhbFRyYW5zZm9ybShub2RlLCBkb2Mpe1xyXG4gICAgICAgIGxldCBbdHgsIHR5LCB0el0gPSBub2RlLnRyYW5zZm9ybS50cmFuc2xhdGVcclxuICAgICAgICBsZXQgW3J4LCByeSwgcnpdID0gbm9kZS50cmFuc2Zvcm0ucm90YXRlXHJcbiAgICAgICAgcnggPSByYWRUb0RlZyhyeCk7IFxyXG4gICAgICAgIHJ5ID0gcmFkVG9EZWcocnkpOyBcclxuICAgICAgICByeiA9IHJhZFRvRGVnKHJ6KTtcclxuICAgICAgICBsZXQgW3N4LHN5LHN6XSA9IG5vZGUudHJhbnNmb3JtLnNjYWxlXHJcblxyXG4gICAgICAgLy8gc2xpZGVyIHR4LCB0eSwgdHogXHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwidHJhbnNsYXRpb24teC1zbGlkZXJcIikudmFsdWUgPSB0eCo1MDtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2xhdGlvbi15LXNsaWRlclwiKS52YWx1ZSA9IHR5KjUwO1xyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInRyYW5zbGF0aW9uLXotc2xpZGVyXCIpLnZhbHVlID0gdHoqNTA7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwidHJhbnNsYXRpb24teC1zbGlkZXItdmFsdWVcIikuaW5uZXJIVE1MID0gdHg7ICAgIFxyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInRyYW5zbGF0aW9uLXktc2xpZGVyLXZhbHVlXCIpLmlubmVySFRNTCA9IHR5O1xyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInRyYW5zbGF0aW9uLXotc2xpZGVyLXZhbHVlXCIpLmlubmVySFRNTCA9IHR6O1xyXG4gICAgICAgIC8vIHJvdGF0aW9uIHR4LCB0eSwgdHogXHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwicm90YXRpb24teC1zbGlkZXJcIikudmFsdWUgPSByeDtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJyb3RhdGlvbi15LXNsaWRlclwiKS52YWx1ZSA9IHJ5O1xyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInJvdGF0aW9uLXotc2xpZGVyXCIpLnZhbHVlID0gcno7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwicm90YXRpb24teC1zbGlkZXItdmFsdWVcIikuaW5uZXJIVE1MID0gcngudG9GaXhlZCgyKTtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJyb3RhdGlvbi15LXNsaWRlci12YWx1ZVwiKS5pbm5lckhUTUwgPSByeS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInJvdGF0aW9uLXotc2xpZGVyLXZhbHVlXCIpLmlubmVySFRNTCA9IHJ6LnRvRml4ZWQoMik7XHJcbiAgICAgICAgLy8gc2NhbGUgc3gsIHN5LCBzelxyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInNjYWxhdGlvbi14LXNsaWRlclwiKS52YWx1ZSA9IHN4KjEwO1xyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInNjYWxhdGlvbi15LXNsaWRlclwiKS52YWx1ZSA9IHN5KjEwO1xyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInNjYWxhdGlvbi16LXNsaWRlclwiKS52YWx1ZSA9IHN6KjEwO1xyXG4gICAgICAgXHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwic2NhbGF0aW9uLXgtc2xpZGVyLXZhbHVlXCIpLmlubmVySFRNTCA9IChzeCAqIDEuMDApLnRvRml4ZWQoMik7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwic2NhbGF0aW9uLXktc2xpZGVyLXZhbHVlXCIpLmlubmVySFRNTCA9IChzeSAqIDEuMDApLnRvRml4ZWQoMik7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwic2NhbGF0aW9uLXotc2xpZGVyLXZhbHVlXCIpLmlubmVySFRNTCA9IChzeiAqIDEuMDApLnRvRml4ZWQoMik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhhbmRsZVRyYW5zZm9ybShub2RlLCBkb2Mpe1xyXG4gICAgICAgIGlmKCFub2RlLmFuaW1hdGlvbi5pc0FuaW1hdGUpIHJldHVybjtcclxuICAgICAgICBBbmltYXRpb24uaGFuZGxlR2VuZXJhbFRyYW5zZm9ybShub2RlLCBkb2MpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGVuYWJsZUFuaW1hdGlvbihwYXJlbnRfbW9kZWwpe1xyXG4gICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uaXNBbmltYXRlID0gdHJ1ZTtcclxuICAgICAgICBmb3IobGV0IG1vZGVsIG9mIHBhcmVudF9tb2RlbC5jaGlsZHJlbil7ICAgIFxyXG4gICAgICAgICAgICBBbmltYXRpb24uZGlzYWJsZUFuaW1hdGlvbihtb2RlbClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRpc2FibGVBbmltYXRpb24ocGFyZW50X21vZGVsKXtcclxuICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmlzQW5pbWF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIGZvcihsZXQgbW9kZWwgb2YgcGFyZW50X21vZGVsLmNoaWxkcmVuKXsgICAgXHJcbiAgICAgICAgICAgIEFuaW1hdGlvbi5kaXNhYmxlQW5pbWF0aW9uKG1vZGVsKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVsZXRlQ3VycmVudEZyYW1lKG5vZGUpe1xyXG4gICAgICAgIGlmKG5vZGUuYW5pbWF0aW9uLmZyYW1lcyl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBub2RlLmFuaW1hdGlvbi5mcmFtZXMuc3BsaWNlKG5vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSwgMSk7XHJcbiAgICAgICAgICAgIGlmKG5vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSAhPSAwKXtcclxuICAgICAgICAgICAgICAgIG5vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSAtPSAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKG5vZGUuYW5pbWF0aW9uLmZyYW1lcy5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFuaW1hdGlvbi5mcmFtZXMgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lID0gMDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBub2RlLnRyYW5zZm9ybSA9IG5vZGUuYW5pbWF0aW9uLmZyYW1lc1tub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWVdXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZWRpdEN1cnJlbnRGcmFtZShub2RlLCB0cmFuc2Zvcm0pe1xyXG4gICAgICAgIGlmKG5vZGUuYW5pbWF0aW9uLmZyYW1lcyl7XHJcbiAgICAgICAgICAgIGxldCBjdXJyRnJhbWUgPSBub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWU7XHJcbiAgICAgICAgICAgIGlmKGN1cnJGcmFtZSA8IG5vZGUuYW5pbWF0aW9uLmZyYW1lcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hbmltYXRpb24uZnJhbWVzW2N1cnJGcmFtZV0gPSB0cmFuc2Zvcm07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihjdXJyRnJhbWUgPT0gbm9kZS5hbmltYXRpb24uZnJhbWVzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBjdXJyRnJhbWUgPSBjdXJyRnJhbWUgLSAxO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hbmltYXRpb24uZnJhbWVzW2N1cnJGcmFtZV0gPSB0cmFuc2Zvcm07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBub2RlIHRyYW5zZm9ybVxyXG4gICAgICAgICAgICBub2RlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBWZWMzIGZyb20gXCIuLi9zdHJ1Y3RzL21hdGgvVmVjMy5qc1wiXHJcbmltcG9ydCBNYXQ0IGZyb20gXCIuLi9zdHJ1Y3RzL21hdGgvTWF0NC5qc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmF7XHJcbiAgICBzdGF0aWMgcHJvamVjdGlvbk9ydG9ncmFwaGljKGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyKSB7XHJcbiAgICAgICAgLy8gTm90ZTogVGhpcyBtYXRyaXggZmxpcHMgdGhlIFkgYXhpcyBzbyAwIGlzIGF0IHRoZSB0b3AuXHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSByaWdodC1sZWZ0XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdG9wLWJvdHRvbVxyXG4gICAgICAgIGNvbnN0IGRlcHRoID0gZmFyIC0gbmVhclxyXG4gICAgICAgIGNvbnN0IGhvcml6b250YWxSYXRpbyA9IChyaWdodCArIGxlZnQpIC8gd2lkdGhcclxuICAgICAgICBjb25zdCB2ZXJ0aWNhbFJhdGlvID0gKHRvcCArIGJvdHRvbSkgLyBoZWlnaHRcclxuICAgICAgICBjb25zdCBkZXB0aFJhdGlvID0gKGZhciArIG5lYXIpIC8gZGVwdGhcclxuXHJcbiAgICAgICAgcmV0dXJuIFsyIC8gKHdpZHRoKSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDIgLyAoaGVpZ2h0KSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIC0yIC8gKGRlcHRoKSwgMCxcclxuICAgICAgICAgICAgICAgIGhvcml6b250YWxSYXRpbywgdmVydGljYWxSYXRpbywgZGVwdGhSYXRpbywgMV07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBwcm9qZWN0aW9uUGVyc3BlY3RpdmUoZm92LCBhc3BlY3QsIG5lYXIsIGZhcil7XHJcbiAgICAgICAgY29uc3QgZiA9IDEuMCAvIE1hdGgudGFuKGZvdiAvIDIpXHJcbiAgICAgICAgY29uc3QgcmFuZ2VJbnYgPSAxIC8gKG5lYXIgLSBmYXIpXHJcblxyXG4gICAgICAgIHJldHVybiBbZiAvIGFzcGVjdCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIGYsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAobmVhciArIGZhcikgKiByYW5nZUludiwgLTEsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCBuZWFyICogZmFyICogcmFuZ2VJbnYgKiAyLCAwXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwcm9qZWN0aW9uT2JsaXF1ZSh0aGV0YSwgcGhpKXtcclxuXHJcbiAgICAgICAgdmFyIHQgPSBNYXRoLnRhbih0aGV0YSlcclxuICAgICAgICB0ID0gdCA9PSAwID8gMC4wMDAwMSA6IHRcclxuICAgICAgICB2YXIgcCA9IE1hdGgudGFuKHBoaSlcclxuICAgICAgICBwID0gcCA9PSAwID8gMC4wMDAwMSA6IHBcclxuICAgICAgICByZXR1cm4gWzEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgLTEvdCwgLTEvcCwgMSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDFdXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvb2tEaXJlY3Rpb24oZXllLCBjZW50ZXIsIHVwKXtcclxuICAgICAgICAvLyBub3JtYWxpemUgZWFjaCBhcnJheVxyXG4gICAgICAgIC8vIGNoYW5nZSBhcyBWZWMzIGZyb20gYXJyYXlcclxuICAgICAgICBsZXQgX2V5ZSA9IFZlYzMuZnJvbUFycmF5KGV5ZSlcclxuICAgICAgICBsZXQgX2NlbnRlciA9IFZlYzMuZnJvbUFycmF5KGNlbnRlcilcclxuICAgICAgICBsZXQgX3VwID0gVmVjMy5mcm9tQXJyYXkodXApXHJcbiAgICBcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGYgPSBWZWMzLnVuaXRWZWN0b3IoVmVjMy5zdWIoX2V5ZSwgX2NlbnRlcikpIC8vIHpBeGlzXHJcbiAgICAgICAgY29uc3QgcyA9IFZlYzMudW5pdFZlY3RvcihWZWMzLmNyb3NzKF91cCwgZikpIC8vIHhBeGlzXHJcbiAgICAgICAgY29uc3QgdSA9IFZlYzMudW5pdFZlY3RvcihWZWMzLmNyb3NzKGYsIHMpKVxyXG5cclxuICAgICAgICByZXR1cm4gW3MueCwgcy55LCBzLnosIDAsXHJcbiAgICAgICAgICAgICAgICB1LngsIHUueSwgdS56LCAwLFxyXG4gICAgICAgICAgICAgICAgZi54LCBmLnksIGYueiwgMCxcclxuICAgICAgICAgICAgICAgIGV5ZVswXSwgZXllWzFdLCBleWVbMl0sIDFdXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtYWtlWlRvV01hdHJpeChmdWRnZUZhY3Rvcil7XHJcbiAgICAgICAgcmV0dXJuIFsxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCBmdWRnZUZhY3RvciwgMV1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcHJvamVjdGlvbk1hdHJpeChwcm9qZWN0aW9uX3R5cGUsIF9mb3YsIF9hc3BlY3QsX25lYXIsIF9mYXIsIHRoZXRhID0gOTAsIHBoaSA9IDkwKXtcclxuICAgICAgICBjb25zdCBhc3BlY3QgPSBfYXNwZWN0O1xyXG4gICAgICAgIGNvbnN0IGZvdiA9IF9mb3Y7XHJcbiAgICAgICAgY29uc3QgbGVmdCA9IC0yO1xyXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gMjtcclxuICAgICAgICBjb25zdCBib3R0b20gPSAtMjtcclxuICAgICAgICBjb25zdCB0b3AgPSAyO1xyXG4gICAgICAgIGNvbnN0IGZhck9ydGhvID0gX2ZhcjtcclxuICAgICAgICBjb25zdCBuZWFyT3J0aG8gPSAtZmFyT3J0aG87XHJcbiAgICBcclxuICAgICAgICBzd2l0Y2ggKHByb2plY3Rpb25fdHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwib3J0aG9ncmFwaGljXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FtZXJhLnByb2plY3Rpb25PcnRvZ3JhcGhpYyhsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXJPcnRobywgZmFyT3J0aG8pXHJcbiAgICAgICAgICAgIGNhc2UgXCJvYmxpcXVlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0NC5tdWx0aXBseShcclxuICAgICAgICAgICAgICAgICAgICBDYW1lcmEucHJvamVjdGlvbk9ibGlxdWUodGhldGEsIHBoaSksXHJcbiAgICAgICAgICAgICAgICAgICAgQ2FtZXJhLnByb2plY3Rpb25PcnRvZ3JhcGhpYyhsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXJPcnRobywgZmFyT3J0aG8pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjYXNlIFwicGVyc3BlY3RpdmVcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBDYW1lcmEucHJvamVjdGlvblBlcnNwZWN0aXZlKFxyXG4gICAgICAgICAgICAgICAgICAgIGZvdixcclxuICAgICAgICAgICAgICAgICAgICBhc3BlY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgX25lYXIsXHJcbiAgICAgICAgICAgICAgICAgICAgX2ZhclxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBDYW1lcmEucHJvamVjdGlvbk9ydG9ncmFwaGljKGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhck9ydGhvLCBmYXJPcnRobylcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHZpZXdNYXRyaXgob3JpZW50YXRpb24sIGxvb2tBdCwgdXApe1xyXG4gICAgICAgIGxldCBbcm9sbCwgcGl0Y2gsIHJhZGl1c10gPSBvcmllbnRhdGlvblxyXG5cclxuICAgICAgICAvLyByb2xsLCBwaXRjaCwgcmFkaXVzXHJcbiAgICAgICAgdmFyIGNhbWVyYU1hdHJpeCA9IE1hdDQubXVsdGlwbHkoXHJcbiAgICAgICAgICAgIE1hdDQubXVsdGlwbHkoXHJcbiAgICAgICAgICAgICAgICBNYXQ0LnJvdGF0ZVkocGl0Y2gpLFxyXG4gICAgICAgICAgICAgICAgTWF0NC5yb3RhdGVYKHJvbGwpKSxcclxuICAgICAgICAgICAgTWF0NC50cmFuc2xhdGUoMCwgMCwgcmFkaXVzKVxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgdmFyIGNhbWVyYVBvc2l0aW9uID0gW1xyXG4gICAgICAgICAgICBjYW1lcmFNYXRyaXhbMTJdLFxyXG4gICAgICAgICAgICBjYW1lcmFNYXRyaXhbMTNdLFxyXG4gICAgICAgICAgICBjYW1lcmFNYXRyaXhbMTRdXHJcbiAgICAgICAgXVxyXG5cclxuICAgICAgICB2YXIgY2FtZXJhTWF0cml4ID0gQ2FtZXJhLmxvb2tEaXJlY3Rpb24oY2FtZXJhUG9zaXRpb24sIGxvb2tBdCwgdXApXHJcblxyXG4gICAgICAgIHZhciB2aWV3TWF0cml4ID0gTWF0NC5pbnZlcnNlKGNhbWVyYU1hdHJpeClcclxuXHJcbiAgICAgICAgcmV0dXJuIHZpZXdNYXRyaXhcclxuICAgIH1cclxufSIsImltcG9ydCBOb2RlIGZyb20gXCIuLi9zdHJ1Y3RzL25vZGUuanNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlSlNPTihvYmplY3RzKSB7XHJcblxyXG4gICAgLy8gQ29udmVydCBOb2RlIGluc3RhbmNlcyB0byBzZXJpYWxpemFibGUgZm9ybWF0XHJcbiAgICBjb25zdCBzZXJpYWxpemFibGVPYmplY3RzID0gb2JqZWN0cy5tYXAob2JqID0+IG9iai50b0pTT04oKSk7XHJcbiAgICBjb25zdCBqc29uQ29udGVudCA9IEpTT04uc3RyaW5naWZ5KHNlcmlhbGl6YWJsZU9iamVjdHMsIG51bGwsIDIpO1xyXG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtqc29uQ29udGVudF0sIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSk7XHJcblxyXG4gICAgLy8gRWxlbWVudCB0byB0cmlnZ2VyIHRoZSBkb3dubG9hZFxyXG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgYS5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgIGEuZG93bmxvYWQgPSBvYmplY3RzWzBdLm5hbWUgKyBcIi5qc29uXCI7XHJcbiAgICBhLmhpZGRlbiA9IHRydWU7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xyXG5cclxuICAgIC8vIFRyaWdnZXIgZG93bmxvYWRcclxuICAgIGEuY2xpY2soKTtcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYSk7ICAvLyBDbGVhbiB1cFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEpTT04oZmlsZUlucHV0LCBjYWxsYmFjaykge1xyXG4gICAgY29uc3QgZmlsZSA9IGZpbGVJbnB1dC5maWxlc1swXTtcclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QganNvbkNvbnRlbnQgPSBldmVudC50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGpzb25Db250ZW50KTtcclxuICAgICAgICBjb25zdCBvYmplY3RzID0gZGF0YS5tYXAob2JqRGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgTm9kZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZS5mcm9tSlNPTihvYmpEYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjYWxsYmFjayhvYmplY3RzKTtcclxuICAgIH07XHJcblxyXG4gICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGaWxlIGNvdWxkIG5vdCBiZSByZWFkISBDb2RlIFwiICsgZXZlbnQudGFyZ2V0LmVycm9yLmNvZGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYXBlclRleHR1cmUoZ2wpIHtcclxuICBjb25zdCB0ZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xyXG4gIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xyXG4gIGdsLnRleEltYWdlMkQoXHJcbiAgICBnbC5URVhUVVJFXzJELFxyXG4gICAgMCxcclxuICAgIGdsLlJHQkEsXHJcbiAgICAxLFxyXG4gICAgMSxcclxuICAgIDAsXHJcbiAgICBnbC5SR0JBLFxyXG4gICAgZ2wuVU5TSUdORURfQllURSxcclxuICAgIG5ldyBVaW50OEFycmF5KFswLCAwLCAwLCAwXSlcclxuICApO1xyXG5cclxuICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XHJcbiAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIGltYWdlKTtcclxuICAgIGlmIChpc1Bvd2VyT2YyKGltYWdlLndpZHRoKSAmJiBpc1Bvd2VyT2YyKGltYWdlLmhlaWdodCkpIHtcclxuICAgICAgZ2wuZ2VuZXJhdGVNaXBtYXAoZ2wuVEVYVFVSRV8yRCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgaW1hZ2Uuc3JjID0gXCIuL21hcHBpbmcvcGFwZXIuanBlZ1wiOyBcclxuICByZXR1cm4gdGV4dHVyZTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNQb3dlck9mMih2YWx1ZSkge1xyXG4gIHJldHVybiAodmFsdWUgJiAodmFsdWUgLSAxKSkgPT0gMDtcclxufSBcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbnZpcm9ubWVudFRleHR1cmUoZ2wpIHtcclxuICBjb25zdCB0ZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xyXG4gIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfQ1VCRV9NQVAsIHRleHR1cmUpO1xyXG5cclxuICBjb25zdCBmYWNlSW5mb3MgPSBbXHJcbiAgICB7IHRhcmdldDogZ2wuVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9YLCB1cmw6IFwiLi9tYXBwaW5nL2Vudmlyb25tZW50LmpwZ1wiIH0sXHJcbiAgICB7IHRhcmdldDogZ2wuVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9YLCB1cmw6IFwiLi9tYXBwaW5nL2Vudmlyb25tZW50LmpwZ1wiIH0sXHJcbiAgICB7IHRhcmdldDogZ2wuVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9ZLCB1cmw6IFwiLi9tYXBwaW5nL2Vudmlyb25tZW50LmpwZ1wiIH0sXHJcbiAgICB7IHRhcmdldDogZ2wuVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9ZLCB1cmw6IFwiLi9tYXBwaW5nL2Vudmlyb25tZW50LmpwZ1wiIH0sXHJcbiAgICB7IHRhcmdldDogZ2wuVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9aLCB1cmw6IFwiLi9tYXBwaW5nL2Vudmlyb25tZW50LmpwZ1wiIH0sXHJcbiAgICB7IHRhcmdldDogZ2wuVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9aLCB1cmw6IFwiLi9tYXBwaW5nL2Vudmlyb25tZW50LmpwZ1wiIH0sXHJcbiAgXTtcclxuXHJcbiAgZmFjZUluZm9zLmZvckVhY2goKGZhY2VJbmZvKSA9PiB7XHJcbiAgICBjb25zdCB7IHRhcmdldCwgdXJsIH0gPSBmYWNlSW5mbztcclxuXHJcbiAgICBnbC50ZXhJbWFnZTJEKFxyXG4gICAgICB0YXJnZXQsXHJcbiAgICAgIDAsXHJcbiAgICAgIGdsLlJHQkEsXHJcbiAgICAgIDUxMixcclxuICAgICAgNTEyLFxyXG4gICAgICAwLFxyXG4gICAgICBnbC5SR0JBLFxyXG4gICAgICBnbC5VTlNJR05FRF9CWVRFLFxyXG4gICAgICBudWxsXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZS5zcmMgPSB1cmw7XHJcbiAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfQ1VCRV9NQVAsIHRleHR1cmUpO1xyXG4gICAgICBnbC50ZXhJbWFnZTJEKHRhcmdldCwgMCwgZ2wuUkdCQSwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgaW1hZ2UpO1xyXG4gICAgICBnbC5nZW5lcmF0ZU1pcG1hcChnbC5URVhUVVJFX0NVQkVfTUFQKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBnbC5nZW5lcmF0ZU1pcG1hcChnbC5URVhUVVJFX0NVQkVfTUFQKTtcclxuICBnbC50ZXhQYXJhbWV0ZXJpKFxyXG4gICAgZ2wuVEVYVFVSRV9DVUJFX01BUCxcclxuICAgIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUixcclxuICAgIGdsLkxJTkVBUl9NSVBNQVBfTElORUFSXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJ1bXBUZXh0dXJlKGdsKSB7XHJcbiAgY29uc3QgdGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcclxuICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcclxuICBnbC50ZXhJbWFnZTJEKFxyXG4gICAgZ2wuVEVYVFVSRV8yRCwgXHJcbiAgICAwLCBcclxuICAgIGdsLlJHQkEsIFxyXG4gICAgMSwgXHJcbiAgICAxLCBcclxuICAgIDAsIFxyXG4gICAgZ2wuUkdCQSwgXHJcbiAgICBnbC5VTlNJR05FRF9CWVRFLCBcclxuICAgIG5ldyBVaW50OEFycmF5KFsyNTUsIDAsIDAsIDI1NV0pXHJcbiAgKTtcclxuXHJcbiAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgaW1hZ2Uuc3JjID0gXCIuL21hcHBpbmcvYnVtcC5wbmdcIjtcclxuICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcclxuICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgaW1hZ2UpO1xyXG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLkxJTkVBUik7XHJcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSKTtcclxuICB9XHJcbn1cclxuICAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9