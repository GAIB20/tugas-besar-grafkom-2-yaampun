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
    // if(target.animation.frames !== null){
    //     target.animation.frames.pop();
    //     handleTotalModelFrame(targetRoot);
    //     handleTotalNodeFrame(target);
    // }
    const deleteFrameModal = document.getElementById('delete-frame-modal')
    deleteFrameModal.className = deleteFrameModal.className + " hidden"
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
/* harmony import */ var _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/Animation.js */ "./src/utils/Animation.js");




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
      let rad = degToRad(i);
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
hollow.pickedColor = [45/255,215/255,96/255],
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
  animationFunction: _utils_Animation_js__WEBPACK_IMPORTED_MODULE_2__["default"].animationScript(),
  isAuto: true,
  isReverse: false
};

function hollowFrames() {
  let transform = {
    translate: [0, 0, 0],
    rotate: [degToRad(10), 0, 0],
    scale: [1, 1, 1],
  }
  let frames = []
  for(let k = 0; k < 360; ++k){
      let _transform = JSON.parse(JSON.stringify(transform));
      _transform.rotate[0] = degToRad((10+k) % 360)
      _transform.rotate[1] = degToRad((k+1)%360)
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

    static disableAnimation(parent_model){
        parent_model.animation.isAnimate = false;
        for(let model of parent_model.children){    
            Animation.disableAnimation(model)
        }
    }

    static deleteCurrentFrame(node){
        if(node.animation.frames){
            console.log(node.animation.frames)
            node.animation.frames.splice(node.animation.currentFrame-1, 1);
            console.log(node.animation.frames)
            if(node.animation.currentFrame >= node.animation.frames.length){
                node.animation.currentFrame = node.animation.frames.length - 1;
            }
            if(node.animation.frames.length == 0){
                node.animation.frames = null;
                node.animation.currentFrame = 0;
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0RBQUk7QUFDN0I7QUFDQSxxQkFBcUIsd0RBQVE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0RBQUk7QUFDN0I7QUFDQSxxQkFBcUIsd0RBQVE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnREFBSTtBQUM5QjtBQUNBLHNCQUFzQix3REFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdEQUFJO0FBQzlCO0FBQ0Esc0JBQXNCLHdEQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFJO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QU0sMEVBQTBFO0FBQ2hGLE1BQU0sMEVBQTBFO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBLFlBQVksY0FBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3hHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL2hhbmRsZXIvZXZlbnRIYW5kbGVyLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3N0cnVjdHMvYm94TW9kZWwuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tYXRoL01hdDQuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tYXRoL1ZlYzMuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tYXRoL1ZlYzQuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tYXRoL21hdGhVdGlscy5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy9zdHJ1Y3RzL21vZGVsL2NoaWNrZW4uanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tb2RlbC9mb3guanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tb2RlbC9ob2xsb3dUaGluZ3kuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tb2RlbC9waWcuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvc3RydWN0cy9tb2RlbC9yaW5nLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3N0cnVjdHMvbm9kZS5qcyIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi8uL3NyYy91dGlscy9BbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvdXRpbHMvQ2FtZXJhLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3V0aWxzL2ZpbGVNYW5hZ2VyLmpzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuLy4vc3JjL3V0aWxzL3RleHR1cmUuanMiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3R1Z2FzLWJlc2FyLWdyYWZrb20tMi15YWFtcHVuL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90dWdhcy1iZXNhci1ncmFma29tLTIteWFhbXB1bi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGFyZ2V0LCBcclxuICAgIHRhcmdldFJvb3QsIFxyXG4gICAgc2V0UHJvamVjdGlvblR5cGUsIFxyXG4gICAgc2V0T2JsaXF1ZVBoaSwgXHJcbiAgICBzZXRPYmxpcXVlVGhldGEsIFxyXG4gICAgc2V0VGFyZ2V0LCBcclxuICAgIHJlbmFtZVRhcmdldCxcclxuICAgIGxpZ2h0RGlyZWN0aW9uLFxyXG4gICAgZGVsZXRlTm9kZSxcclxuICAgIG9iamVjdHMsXHJcbiAgICBzZXRUYXJnZXRSb290LCBcclxuICAgIGNoYW5nZU1vZGVsT2JqZWN0LCBcclxuICAgIGNoYW5nZU1hcHBpbmdUZXh0dXJlLFxyXG4gICAgYWRkTm9kZSxcclxuICAgIGxvYWRPYmplY3RzLFxyXG4gICAgbW9kZWwsXHJcbiAgICBhZGRNb2RlbH0gZnJvbSBcIi4uL2luZGV4LmpzXCJcclxuaW1wb3J0IHsgZGVnVG9SYWQsIHJhZFRvRGVnIH0gZnJvbSBcIi4uL3N0cnVjdHMvbWF0aC9tYXRoVXRpbHMuanNcIjtcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi4vdXRpbHMvQW5pbWF0aW9uLmpzXCI7XHJcbmltcG9ydCB7IGxvYWRKU09OLCBzYXZlSlNPTiB9IGZyb20gXCIuLi91dGlscy9maWxlTWFuYWdlci5qc1wiO1xyXG5cclxuY29uc3QgdHJhbnNsYXRpb25YID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zbGF0aW9uLXgtc2xpZGVyJyk7XHJcbmNvbnN0IHRyYW5zbGF0aW9uWSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2xhdGlvbi15LXNsaWRlcicpO1xyXG5jb25zdCB0cmFuc2xhdGlvblogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNsYXRpb24tei1zbGlkZXInKTtcclxuY29uc3QgdHJhbnNsYXRhaW9uWFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zbGF0aW9uLXgtc2xpZGVyLXZhbHVlJyk7XHJcbmNvbnN0IHRyYW5zbGF0YWlvbllWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2xhdGlvbi15LXNsaWRlci12YWx1ZScpO1xyXG5jb25zdCB0cmFuc2xhdGFpb25aVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNsYXRpb24tei1zbGlkZXItdmFsdWUnKTtcclxuLy9yb3RhdGlvblxyXG5jb25zdCByb3RhdGlvblggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm90YXRpb24teC1zbGlkZXInKTtcclxuY29uc3Qgcm90YXRpb25ZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvdGF0aW9uLXktc2xpZGVyJyk7XHJcbmNvbnN0IHJvdGF0aW9uWiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGlvbi16LXNsaWRlcicpO1xyXG5jb25zdCByb3RhdGlvblhWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGlvbi14LXNsaWRlci12YWx1ZScpO1xyXG5jb25zdCByb3RhdGlvbllWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGlvbi15LXNsaWRlci12YWx1ZScpO1xyXG5jb25zdCByb3RhdGlvblpWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3RhdGlvbi16LXNsaWRlci12YWx1ZScpO1xyXG4vL3NjYWxhdGlvblxyXG5jb25zdCBzY2FsYXRpb25YID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjYWxhdGlvbi14LXNsaWRlcicpO1xyXG5jb25zdCBzY2FsYXRpb25ZID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjYWxhdGlvbi15LXNsaWRlcicpO1xyXG5jb25zdCBzY2FsYXRpb25aID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjYWxhdGlvbi16LXNsaWRlcicpO1xyXG5jb25zdCBzY2FsYXRpb25YVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NhbGF0aW9uLXgtc2xpZGVyLXZhbHVlJyk7XHJcbmNvbnN0IHNjYWxhdGlvbllWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY2FsYXRpb24teS1zbGlkZXItdmFsdWUnKTtcclxuY29uc3Qgc2NhbGF0aW9uWlZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjYWxhdGlvbi16LXNsaWRlci12YWx1ZScpO1xyXG4vLyBjb21wb25lbnQgY29udGFpbmVyXHJcbmNvbnN0IGNvbXBvbmVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wb25lbnQtY29udGFpbmVyJyk7XHJcbi8vY2FtZXJhXHJcbmNvbnN0IG9ydGhvZ3JhcGhpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcnRob2dyYXBoaWMnKTtcclxuY29uc3Qgb2JsaXF1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvYmxpcXVlJyk7XHJcbmNvbnN0IHBlcnNwZWN0aXZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BlcnNwZWN0aXZlJyk7XHJcbi8vIGNhbWVyYSByYWRpdXNcclxuY29uc3QgY2FtZXJhUmFkaXVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1yYWRpdXMtc2xpZGVyJyk7XHJcbi8vIGNhbWVyYSByb2xsLXBpdGNoXHJcbmNvbnN0IGNhbWVyYVJvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXJvbGwtc2xpZGVyJyk7XHJcbmNvbnN0IGNhbWVyYVBpdGNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1waXRjaC1zbGlkZXInKTtcclxuLy8gY2FtZXJhIHRoZXRhLXBoaVxyXG5jb25zdCBjYW1lcmFUaGV0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtdGhldGEtc2xpZGVyJyk7XHJcbmNvbnN0IGNhbWVyYVBoaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtcGhpLXNsaWRlcicpO1xyXG4vLyBzZXQgb3J0aG9ncmFwaGljIGFzIGRlZmF1bHQgaW5wdXQgcmFkaW8gYnV0dG9uXHJcbm9ydGhvZ3JhcGhpYy5jaGVja2VkID0gdHJ1ZTtcclxuLy8gY2FtZXJhIGRlZmF1bHQgdmlld1xyXG5jb25zdCBkZWZhdWx0VmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWZhdWx0LXZpZXcnKTtcclxuXHJcbi8vIG1vZGVsIFxyXG5jb25zdCBtb2RlbFNlbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RlbC1zZWxlY3Rpb24nKTtcclxuY29uc3QgbWFwcGluZ1NlbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXBwaW5nLXNlbGVjdGlvbicpO1xyXG5cclxuLy8gYW5pbWF0aW9uXHJcblxyXG4vLyBwYXVzZSwgcGxheSwgYXV0bywgcmV2ZXJzZVxyXG5jb25zdCBwYXVzZUNvbnRpbnVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhdXNlLWNvbnRpbnVlLWFuaW1hdGlvbicpO1xyXG5jb25zdCBwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXktYW5pbWF0aW9uJyk7XHJcbmNvbnN0IGF1dG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0by1hbmltYXRpb24nKTtcclxuY29uc3QgcmV2ZXJzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXZlcnNlLWFuaW1hdGlvbicpO1xyXG5cclxuLy8gbmV4dCwgcHJldiwgZmlyc3QsIGxhc3RcclxuY29uc3QgbmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0LWFuaW1hdGlvbicpO1xyXG5jb25zdCBwcmV2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXYtYW5pbWF0aW9uJyk7XHJcbmNvbnN0IGZpcnN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpcnN0LWFuaW1hdGlvbicpO1xyXG5jb25zdCBsYXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhc3QtYW5pbWF0aW9uJyk7XHJcblxyXG4vLyBmcmFtZSBoYW5kbGVyXHJcbmNvbnN0IGN1cnJlbnRNb2RlbEZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtbW9kZWwtZnJhbWUnKTtcclxuY29uc3QgY3VycmVudE5vZGVGcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LW5vZGUtZnJhbWUnKTtcclxuY29uc3QgdG90YWxNb2RlbEZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsLW1vZGVsLWZyYW1lJyk7XHJcbmNvbnN0IHRvdGFsTm9kZUZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsLW5vZGUtZnJhbWUnKTtcclxuXHJcbi8vIGFkZCBmcmFtZSBcclxuY29uc3QgYWRkRnJhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWZyYW1lJylcclxuY29uc3QgdmVyaWZ5QWRkRnJhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmVyaWZ5LWFkZC1mcmFtZScpXHJcbmNvbnN0IGNhbmNlbEFkZEZyYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbC1hZGQtZnJhbWUnKVxyXG5cclxuLy9lZGl0IGZyYW1lXHJcbmNvbnN0IGVkaXRGcmFtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWN1cnJlbnQtZnJhbWUnKVxyXG5jb25zdCB2ZXJpZnlFZGl0RnJhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmVyaWZ5LWVkaXQtZnJhbWUnKVxyXG5jb25zdCBjYW5jZWxFZGl0RnJhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsLWVkaXQtZnJhbWUnKVxyXG5cclxuLy8gZGVsZXRlIGZyYW1lXHJcbmNvbnN0IGRlbGV0ZUZyYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZS1jdXJyZW50LWZyYW1lJylcclxuY29uc3QgdmVyaWZ5RGVsZXRlRnJhbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmVyaWZ5LWRlbGV0ZS1mcmFtZScpXHJcbmNvbnN0IGNhbmNlbERlbGV0ZUZyYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbC1kZWxldGUtZnJhbWUnKVxyXG5cclxuLy8gYW1iaWVudCBsaWdodFxyXG5jb25zdCByZWRBbWJpZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZC1zbGlkZXInKTtcclxuY29uc3QgZ3JlZW5BbWJpZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyZWVuLXNsaWRlcicpO1xyXG5jb25zdCBibHVlQW1iaWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdibHVlLXNsaWRlcicpO1xyXG5cclxuLy8gbGlnaHQgcG9zaXRpb25cclxuY29uc3QgbGlnaHRYID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpZ2h0LXgtc2xpZGVyJyk7XHJcbmNvbnN0IGxpZ2h0WSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaWdodC15LXNsaWRlcicpO1xyXG5jb25zdCBsaWdodFogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlnaHQtei1zbGlkZXInKTtcclxuXHJcbi8vIHBob25nXHJcbmNvbnN0IHNoaW5pbmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGluaW5lc3Mtc2xpZGVyJyk7XHJcbmNvbnN0IHNwZWN1bGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwZWN1bGFyLXNsaWRlcicpO1xyXG5jb25zdCBkaWZmdXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpZmZ1c2Utc2xpZGVyJyk7XHJcbmNvbnN0IGFtYmllbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW1iaWVudC1zbGlkZXInKTtcclxuXHJcbi8vIGNvbG9yc1xyXG5jb25zdCBiYXNpY0NvbG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhc2ljLWNvbG9yJyk7XHJcbmNvbnN0IGRpZmZ1c2VDb2xvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWZmdXNlLWNvbG9yJyk7XHJcbmNvbnN0IHNwZWN1bGFyQ29sb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BlY3VsYXItY29sb3InKTtcclxuXHJcbi8vIG5vZGUgbWFuYWdlclxyXG5leHBvcnQgY29uc3Qgbm9kZU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9kZS1uYW1lJyk7XHJcbmNvbnN0IHJlbmFtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW5hbWUtYnRuJyk7XHJcbmNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGUtYnRuJyk7XHJcbmNvbnN0IGFkZENoaWxkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1jaGlsZC1idG4nKVxyXG5jb25zdCBpbXBvcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0LWJ0bicpO1xyXG5jb25zdCBleHBvcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwb3J0LWJ0bicpO1xyXG5cclxuLy8gc2F2ZSBhbmQgbG9hZFxyXG5jb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtYnRuJyk7IFxyXG5jb25zdCBsb2FkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWQtYnRuJyk7XHJcblxyXG5cclxuLy8gaW5pdGlhbFxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdE9wdGlvbk1vZGVsKG1vZGVsKXtcclxuICAgIG1vZGVsU2VsZWN0aW9uLmlubmVySFRNTCA9ICcnO1xyXG4gICAgbW9kZWwuZm9yRWFjaCgob2JqZWN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSBpbmRleDtcclxuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvYmplY3RbMF0ubmFtZTtcclxuICAgICAgICBtb2RlbFNlbGVjdGlvbi5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfSlcclxufVxyXG5cclxuLy8gZXZlbnQgbGlzdGVuZXJcclxudHJhbnNsYXRpb25YLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIHRhcmdldC50cmFuc2Zvcm0udHJhbnNsYXRlWzBdID0gKDIgKiB0cmFuc2xhdGlvblgudmFsdWUpIC8gMTAwO1xyXG4gICAgdHJhbnNsYXRhaW9uWFZhbHVlLnRleHRDb250ZW50ID0gdGFyZ2V0LnRyYW5zZm9ybS50cmFuc2xhdGVbMF07XHJcbn0pO1xyXG50cmFuc2xhdGlvblkuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgdGFyZ2V0LnRyYW5zZm9ybS50cmFuc2xhdGVbMV0gPSAoMiAqIHRyYW5zbGF0aW9uWS52YWx1ZSkgLyAxMDA7XHJcbiAgICB0cmFuc2xhdGFpb25ZVmFsdWUudGV4dENvbnRlbnQgPSB0YXJnZXQudHJhbnNmb3JtLnRyYW5zbGF0ZVsxXTtcclxufSk7XHJcbnRyYW5zbGF0aW9uWi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQudHJhbnNmb3JtLnRyYW5zbGF0ZVsyXSA9ICgyICogdHJhbnNsYXRpb25aLnZhbHVlKSAvIDEwMDtcclxuICAgIHRyYW5zbGF0YWlvblpWYWx1ZS50ZXh0Q29udGVudCA9IHRhcmdldC50cmFuc2Zvcm0udHJhbnNsYXRlWzJdO1xyXG59KTtcclxucm90YXRpb25YLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIHRhcmdldC50cmFuc2Zvcm0ucm90YXRlWzBdID0gZGVnVG9SYWQocm90YXRpb25YLnZhbHVlKTtcclxuICAgIHJvdGF0aW9uWFZhbHVlLnRleHRDb250ZW50ID0gcm90YXRpb25YLnZhbHVlO1xyXG59KVxyXG5yb3RhdGlvblkuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgdGFyZ2V0LnRyYW5zZm9ybS5yb3RhdGVbMV0gPSBkZWdUb1JhZChyb3RhdGlvblkudmFsdWUpO1xyXG4gICAgcm90YXRpb25ZVmFsdWUudGV4dENvbnRlbnQgPSByb3RhdGlvblkudmFsdWU7XHJcbn0pXHJcbnJvdGF0aW9uWi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQudHJhbnNmb3JtLnJvdGF0ZVsyXSA9IGRlZ1RvUmFkKHJvdGF0aW9uWi52YWx1ZSk7XHJcbiAgICByb3RhdGlvblpWYWx1ZS50ZXh0Q29udGVudCA9IHJvdGF0aW9uWi52YWx1ZTtcclxufSlcclxuc2NhbGF0aW9uWC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB0YXJnZXQudHJhbnNmb3JtLnNjYWxlWzBdID0gIHNjYWxhdGlvblgudmFsdWUgLyAyMDtcclxuICAgIHNjYWxhdGlvblhWYWx1ZS50ZXh0Q29udGVudCA9IHRhcmdldC50cmFuc2Zvcm0uc2NhbGVbMF07XHJcbn0pXHJcbnNjYWxhdGlvblkuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVsxXSA9ICBzY2FsYXRpb25ZLnZhbHVlIC8gMjA7XHJcbiAgICBzY2FsYXRpb25ZVmFsdWUudGV4dENvbnRlbnQgPSB0YXJnZXQudHJhbnNmb3JtLnNjYWxlWzFdO1xyXG59KVxyXG5zY2FsYXRpb25aLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIHRhcmdldC50cmFuc2Zvcm0uc2NhbGVbMl0gPSAgc2NhbGF0aW9uWi52YWx1ZSAvIDIwO1xyXG4gICAgc2NhbGF0aW9uWlZhbHVlLnRleHRDb250ZW50ID0gdGFyZ2V0LnRyYW5zZm9ybS5zY2FsZVsyXTtcclxufSlcclxuXHJcbi8vIG1vZGVsIHNlbGVjdGlvblxyXG5tb2RlbFNlbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpeyAgIFxyXG4gICAgY29uc29sZS5sb2cobW9kZWxTZWxlY3Rpb24udmFsdWUpO1xyXG4gICAgY2hhbmdlTW9kZWxPYmplY3QobW9kZWxTZWxlY3Rpb24udmFsdWUpO1xyXG59KVxyXG5cclxuLy8gY2FtZXJhXHJcbm9ydGhvZ3JhcGhpYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBzZXRQcm9qZWN0aW9uVHlwZShcIm9ydGhvZ3JhcGhpY1wiKTtcclxufSlcclxuXHJcbm9ibGlxdWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgc2V0UHJvamVjdGlvblR5cGUoXCJvYmxpcXVlXCIpO1xyXG59KVxyXG5cclxucGVyc3BlY3RpdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgc2V0UHJvamVjdGlvblR5cGUoXCJwZXJzcGVjdGl2ZVwiKTtcclxufSlcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhckNvbXBvbmVudCAoKSB7XHJcbiAgICBjb21wb25lbnRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q29tcG9uZW50KHRyZWVMZXZlbCA9IDAsIG9iamVjdHMpe1xyXG4gICAgb2JqZWN0cy5mb3JFYWNoKChvYmplY3QpID0+IHtcclxuICAgICAgICBsZXQgbmV3Q29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxyXG4gICAgICAgIG5ld0NvbXBvbmVudC5zdHlsZSA9ICdwYWRkaW5nLWxlZnQ6ICcgKyB0cmVlTGV2ZWwqMS41ICsgJ2VtOyc7XHJcbiAgICAgICAgbmV3Q29tcG9uZW50LmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtYXgtdy1maXQgY29tcG9uZW50XCI+JHtvYmplY3QubmFtZX08L2J1dHRvbj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIGxldCBjcmVhdGVkQnV0dG9uID0gbmV3Q29tcG9uZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wb25lbnQnKTtcclxuICAgICAgICBjcmVhdGVkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XHJcbiAgICAgICAgICAgIHNldFRhcmdldChvYmplY3QpO1xyXG4gICAgICAgICAgICBoYW5kbGVUcmFuc2Zvcm0ob2JqZWN0KTtcclxuICAgICAgICAgICAgc2V0U2xpZGVyKG9iamVjdCk7XHJcbiAgICAgICAgICAgIGhhbmRsZVRvdGFsTm9kZUZyYW1lKG9iamVjdCk7XHJcbiAgICAgICAgICAgIHNldE5vZGVNYW5hZ2VyKG9iamVjdCk7XHJcbiAgICAgICAgICAgIGxldCBjb21wb25lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbXBvbmVudFwiKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wb25lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzW2ldLmNsYXNzTmFtZSA9IGNvbXBvbmVudHNbaV0uY2xhc3NOYW1lLnJlcGxhY2UoXCIgYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHB4LTVcIiwgXCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXZ0LmN1cnJlbnRUYXJnZXQuY2xhc3NOYW1lICs9IFwiIGJvcmRlci0yIGJvcmRlci1ibGFjayBweC01XCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29tcG9uZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NvbXBvbmVudCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYob2JqZWN0LmNoaWxkcmVuLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBkaXNwbGF5Q29tcG9uZW50KHRyZWVMZXZlbCArIDEsIG9iamVjdC5jaGlsZHJlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0U2xpZGVyKG5vZGUpe1xyXG4gICAgcmVkQW1iaWVudC52YWx1ZSA9IG5vZGUuYW1iaWVudFswXTtcclxuICAgIGdyZWVuQW1iaWVudC52YWx1ZSA9IG5vZGUuYW1iaWVudFsxXTtcclxuICAgIGJsdWVBbWJpZW50LnZhbHVlID0gbm9kZS5hbWJpZW50WzJdO1xyXG4gICAgc2hpbmluZXNzLnZhbHVlID0gbm9kZS5zaGluaW5lc3M7XHJcbiAgICBzcGVjdWxhci52YWx1ZSA9IG5vZGUuc3BlY3VsYXJbMF07XHJcbiAgICBkaWZmdXNlLnZhbHVlID0gbm9kZS5kaWZmdXNlWzBdO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVRyYW5zZm9ybShub2RlKXtcclxuICAgIC8vIGNoYW5nZSB0cmFuc2xhdGlvbiwgcm90YXRpb24sIHNjYWxhdGlvblxyXG4gICAgbGV0IFt0eCwgdHksIHR6XSA9IG5vZGUudHJhbnNmb3JtLnRyYW5zbGF0ZVxyXG4gICAgLy8gdGltZXMgNTBcclxuXHJcbiAgICBsZXQgW3J4LCByeSwgcnpdID0gbm9kZS50cmFuc2Zvcm0ucm90YXRlXHJcbiAgICAvLyBjaGFuZ2Ugd2l0aCByYWRUb0RlZ1xyXG4gICAgaWYodHJ1ZSl7XHJcbiAgICByeCA9IHJhZFRvRGVnKHJ4KTtcclxuICAgIHJ5ID0gcmFkVG9EZWcocnkpO1xyXG4gICAgcnogPSByYWRUb0RlZyhyeik7XHJcbiAgICB9XHJcbiAgICBsZXQgW3N4LCBzeSwgc3pdID0gbm9kZS50cmFuc2Zvcm0uc2NhbGVcclxuICBcclxuICAgIHRyYW5zbGF0aW9uWC52YWx1ZSA9IHR4KjUwO1xyXG4gICAgdHJhbnNsYXRpb25ZLnZhbHVlID0gdHkqNTA7XHJcbiAgICB0cmFuc2xhdGlvbloudmFsdWUgPSB0eio1MDtcclxuICAgIHRyYW5zbGF0YWlvblhWYWx1ZS50ZXh0Q29udGVudCA9IHR4O1xyXG4gICAgdHJhbnNsYXRhaW9uWVZhbHVlLnRleHRDb250ZW50ID0gdHk7XHJcbiAgICB0cmFuc2xhdGFpb25aVmFsdWUudGV4dENvbnRlbnQgPSB0ejtcclxuXHJcbiAgICByb3RhdGlvblgudmFsdWUgPSByeDtcclxuICAgIHJvdGF0aW9uWS52YWx1ZSA9IHJ5O1xyXG4gICAgcm90YXRpb25aLnZhbHVlID0gcno7XHJcbiAgICByb3RhdGlvblhWYWx1ZS50ZXh0Q29udGVudCA9IHJ4O1xyXG4gICAgcm90YXRpb25ZVmFsdWUudGV4dENvbnRlbnQgPSByeTtcclxuICAgIHJvdGF0aW9uWlZhbHVlLnRleHRDb250ZW50ID0gcno7XHJcblxyXG4gICAgc2NhbGF0aW9uWFZhbHVlLnRleHRDb250ZW50ID0gc3g7XHJcbiAgICBzY2FsYXRpb25ZVmFsdWUudGV4dENvbnRlbnQgPSBzeTtcclxuICAgIHNjYWxhdGlvblpWYWx1ZS50ZXh0Q29udGVudCA9IHN6O1xyXG4gICAgc2NhbGF0aW9uWC52YWx1ZSA9IHN4KjIwO1xyXG4gICAgc2NhbGF0aW9uWS52YWx1ZSA9IHN4KjIwO1xyXG4gICAgc2NhbGF0aW9uWi52YWx1ZSA9IHN6KjIwO1xyXG5cclxuICAgIC8vIGNoYW5nZSBwaG9uZyBzbGlkZXJcclxuICAgIHJlZEFtYmllbnQudmFsdWUgPSBub2RlLmFtYmllbnRbMF07XHJcbiAgICBncmVlbkFtYmllbnQudmFsdWUgPSBub2RlLmFtYmllbnRbMV07XHJcbiAgICBibHVlQW1iaWVudC52YWx1ZSA9IG5vZGUuYW1iaWVudFsyXTtcclxuICAgIHNoaW5pbmVzcy52YWx1ZSA9IG5vZGUuc2hpbmluZXNzO1xyXG4gICAgXHJcbiAgICBiYXNpY0NvbG9yLnZhbHVlID0gcmdiVG9IZXgobm9kZS5waWNrZWRDb2xvcik7XHJcbiAgICBkaWZmdXNlQ29sb3IudmFsdWUgPSByZ2JUb0hleChub2RlLmRpZmZ1c2UpO1xyXG4gICAgc3BlY3VsYXJDb2xvci52YWx1ZSA9IHJnYlRvSGV4KG5vZGUuc3BlY3VsYXIpO1xyXG4gICAgXHJcbiAgICBhbWJpZW50LnZhbHVlID0gbm9kZS5jb25zdC5rYTtcclxuICAgIGRpZmZ1c2UudmFsdWUgPSBub2RlLmNvbnN0LmtkO1xyXG4gICAgc3BlY3VsYXIudmFsdWUgPSBub2RlLmNvbnN0LmtzO1xyXG4gICAgXHJcblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2FtZXJhVmlldyhub2RlKSB7XHJcbiAgICBsZXQgZXBzaWxvbiA9IDAuMDAxO1xyXG4gICAgXHJcbiAgICAvL3JhZGl1cywgcm9sbCwgcGl0Y2hcclxuICAgIGxldCByYWRpdXMgPSBwYXJzZUZsb2F0KGNhbWVyYVJhZGl1cy52YWx1ZSkvMTA7XHJcbiAgICBsZXQgcm9sbCA9IGRlZ1RvUmFkKHBhcnNlRmxvYXQoY2FtZXJhUm9sbC52YWx1ZSkpO1xyXG4gICAgbGV0IHBpdGNoID0gZGVnVG9SYWQocGFyc2VGbG9hdChjYW1lcmFQaXRjaC52YWx1ZSkpO1xyXG4gICAgbm9kZS52aWV3TWF0cml4LmNhbWVyYSA9IFtcclxuICAgICAgICByb2xsLFxyXG4gICAgICAgIHBpdGNoLFxyXG4gICAgICAgIHJhZGl1cyA9PSAwID8gZXBzaWxvbiA6IHJhZGl1cywgIFxyXG4gICAgXTtcclxuICAgIGZvcihsZXQgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbil7XHJcbiAgICAgICAgaGFuZGxlQ2FtZXJhVmlldyhjaGlsZCk7XHJcbiAgICB9XHJcbn1cclxuY2FtZXJhUmFkaXVzLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGxldCB2YWwgPSBwYXJzZUZsb2F0KGNhbWVyYVJhZGl1cy52YWx1ZSk7XHJcbiAgICB2YWwgLz0gMTA7XHJcbiAgICBcclxuICAgIGhhbmRsZUNhbWVyYVZpZXcodGFyZ2V0Um9vdCk7XHJcbiAgICAvLyB1cGRhdGUgY2FtZXJhIHJhZGl1cyB2YWx1ZVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1yYWRpdXMtc2xpZGVyLXZhbHVlJykudGV4dENvbnRlbnQgPSB2YWw7XHJcbn0pXHJcbmNhbWVyYVJvbGwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgXHJcbiAgICBoYW5kbGVDYW1lcmFWaWV3KHRhcmdldFJvb3QpXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXJvbGwtc2xpZGVyLXZhbHVlJykudGV4dENvbnRlbnQgPSBjYW1lcmFSb2xsLnZhbHVlO1xyXG59KVxyXG5jYW1lcmFQaXRjaC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgaGFuZGxlQ2FtZXJhVmlldyh0YXJnZXRSb290KVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1waXRjaC1zbGlkZXItdmFsdWUnKS50ZXh0Q29udGVudCA9IGNhbWVyYVBpdGNoLnZhbHVlO1xyXG59KVxyXG5cclxuLy90aGV0YSwgcGhpXHJcbmNhbWVyYVRoZXRhLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGxldCB0aGV0YSA9IGRlZ1RvUmFkKHBhcnNlRmxvYXQoY2FtZXJhVGhldGEudmFsdWUpKVxyXG4gICAgc2V0T2JsaXF1ZVRoZXRhKHRoZXRhKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEtdGhldGEtc2xpZGVyLXZhbHVlJykudGV4dENvbnRlbnQgPSBjYW1lcmFUaGV0YS52YWx1ZTtcclxufSlcclxuXHJcbmNhbWVyYVBoaS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgcGhpID0gZGVnVG9SYWQocGFyc2VGbG9hdChjYW1lcmFQaGkudmFsdWUpKVxyXG4gICAgc2V0T2JsaXF1ZVBoaShwaGkpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1waGktc2xpZGVyLXZhbHVlJykudGV4dENvbnRlbnQgPSBjYW1lcmFQaGkudmFsdWU7XHJcbn0pXHJcblxyXG4vLyBkZWZhdXRsIHZpZXdcclxuZGVmYXVsdFZpZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgY2FtZXJhUmFkaXVzLnZhbHVlID0gNTA7XHJcbiAgICBjYW1lcmFSb2xsLnZhbHVlID0gMDtcclxuICAgIGNhbWVyYVBpdGNoLnZhbHVlID0gMDtcclxuICAgIGNhbWVyYVRoZXRhLnZhbHVlID0gOTA7XHJcbiAgICBjYW1lcmFQaGkudmFsdWUgPSA5MDtcclxuICAgIGhhbmRsZUNhbWVyYVZpZXcodGFyZ2V0Um9vdCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXJhZGl1cy1zbGlkZXItdmFsdWUnKS50ZXh0Q29udGVudCA9IDU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXJvbGwtc2xpZGVyLXZhbHVlJykudGV4dENvbnRlbnQgPSAwO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYS1waXRjaC1zbGlkZXItdmFsdWUnKS50ZXh0Q29udGVudCA9IDA7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXRoZXRhLXNsaWRlci12YWx1ZScpLnRleHRDb250ZW50ID0gOTA7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhLXBoaS1zbGlkZXItdmFsdWUnKS50ZXh0Q29udGVudCA9IDkwO1xyXG59KVxyXG5cclxudmFyIHN0YXRlID0ge1xyXG4gICAgb2JqZWN0czogW11cclxufTtcclxuXHJcbi8vIHRleHR1cmUgc2VsZWN0aW9uXHJcbm1hcHBpbmdTZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgY29uc29sZS5sb2cobWFwcGluZ1NlbGVjdGlvbi52YWx1ZSlcclxuICAgIGNoYW5nZU1hcHBpbmdUZXh0dXJlKHN0YXRlLm9iamVjdHMsIG1hcHBpbmdTZWxlY3Rpb24udmFsdWUpO1xyXG59KTtcclxuXHJcbi8vIGFuaW1hdGlvblxyXG5wYXVzZUNvbnRpbnVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGlmKHRhcmdldFJvb3QuYW5pbWF0aW9uLmlzQW5pbWF0ZSl7XHJcbiAgICAgICAgLy8gY2hhbmdlIHRvIGNvbnRpbnVlXHJcbiAgICAgICAgcGF1c2VDb250aW51ZS50ZXh0Q29udGVudCA9IFwiQ29udGludWVcIjtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgcGF1c2VDb250aW51ZS50ZXh0Q29udGVudCA9IFwiUGF1c2VcIjtcclxuICAgIH1cclxuICAgIEFuaW1hdGlvbi5wYXVzZUNvbnRpbnVlQW5pbWF0aW9uKHRhcmdldFJvb3QpO1xyXG4gICAgXHJcbn0pXHJcblxyXG5wbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIHBhdXNlQ29udGludWUudGV4dENvbnRlbnQgPSBcIlBhdXNlXCI7XHJcbiAgICBBbmltYXRpb24ucGxheUFuaW1hdGlvbih0YXJnZXRSb290KTtcclxufSlcclxuXHJcblxyXG5hdXRvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIC8vIGNoYW5nZSB0byBjb250aW51ZVxyXG4gICAgYXV0by50ZXh0Q29udGVudCA9ICF0YXJnZXRSb290LmFuaW1hdGlvbi5pc0F1dG8gPyBcIlN0b3AgQXV0b1wiIDogXCJBdXRvXCI7XHJcbiAgICBBbmltYXRpb24uc2V0QXV0byh0YXJnZXRSb290KTtcclxufSlcclxuXHJcbnJldmVyc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgcmV2ZXJzZS50ZXh0Q29udGVudCA9ICF0YXJnZXRSb290LmFuaW1hdGlvbi5pc1JldmVyc2UgPyBcIlN0b3AgUmV2ZXJzZVwiIDogXCJSZXZlcnNlXCI7XHJcbiAgICBBbmltYXRpb24ucmV2ZXJzZUFuaW1hdGlvbih0YXJnZXRSb290KTtcclxufSlcclxuXHJcbi8vIG5leHQsIHByZXYsIGZpcnN0LCBsYXN0XHJcbm5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgQW5pbWF0aW9uLm5leHRGcmFtZSh0YXJnZXRSb290KTtcclxufSlcclxuXHJcbnByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgQW5pbWF0aW9uLnByZXZGcmFtZSh0YXJnZXRSb290KTtcclxufSlcclxuXHJcbmZpcnN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIEFuaW1hdGlvbi5maXJzdEZyYW1lKHRhcmdldFJvb3QpO1xyXG59KVxyXG5cclxubGFzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBBbmltYXRpb24ubGFzdEZyYW1lKHRhcmdldFJvb3QpO1xyXG59KVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQW1iaWVudENvbG9yKG5vZGUpe1xyXG4gICAgbm9kZS5hbWJpZW50WzBdID0gcmVkQW1iaWVudC52YWx1ZTtcclxuICAgIG5vZGUuYW1iaWVudFsxXSA9IGdyZWVuQW1iaWVudC52YWx1ZTtcclxuICAgIG5vZGUuYW1iaWVudFsyXSA9IGJsdWVBbWJpZW50LnZhbHVlO1xyXG4gICAgZm9yKGxldCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKXtcclxuICAgICAgICBoYW5kbGVBbWJpZW50Q29sb3IoY2hpbGQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5yZWRBbWJpZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGhhbmRsZUFtYmllbnRDb2xvcih0YXJnZXQpO1xyXG59KVxyXG5cclxuZ3JlZW5BbWJpZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGhhbmRsZUFtYmllbnRDb2xvcih0YXJnZXQpO1xyXG59KVxyXG5cclxuYmx1ZUFtYmllbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgaGFuZGxlQW1iaWVudENvbG9yKHRhcmdldCk7XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBoYW5kbGVQaG9uZyhub2RlKXtcclxuICAgIG5vZGUuc2hpbmluZXNzID0gMTAwIC0gc2hpbmluZXNzLnZhbHVlO1xyXG4gICAgbm9kZS5zcGVjdWxhciA9IGhleFRvUmdiKHNwZWN1bGFyQ29sb3IudmFsdWUpO1xyXG4gICAgbm9kZS5kaWZmdXNlID0gaGV4VG9SZ2IoZGlmZnVzZUNvbG9yLnZhbHVlKTtcclxuICAgIG5vZGUuY29uc3Qua3MgPSBwYXJzZUZsb2F0KHNwZWN1bGFyLnZhbHVlKTtcclxuICAgIG5vZGUuY29uc3Qua2QgPSBwYXJzZUZsb2F0KGRpZmZ1c2UudmFsdWUpO1xyXG4gICAgbm9kZS5jb25zdC5rYSA9IHBhcnNlRmxvYXQoYW1iaWVudC52YWx1ZSk7XHJcbiAgICBmb3IobGV0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pe1xyXG4gICAgICAgIGhhbmRsZVBob25nKGNoaWxkKTtcclxuICAgIH1cclxufVxyXG5cclxuc2hpbmluZXNzLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGhhbmRsZVBob25nKHRhcmdldCk7XHJcbn0pO1xyXG5cclxuYW1iaWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBoYW5kbGVQaG9uZyh0YXJnZXQpO1xyXG59KTtcclxuXHJcbnNwZWN1bGFyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIGhhbmRsZVBob25nKHRhcmdldCk7XHJcbn0pO1xyXG5cclxuZGlmZnVzZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBoYW5kbGVQaG9uZyh0YXJnZXQpO1xyXG59KTtcclxuXHJcbnNwZWN1bGFyQ29sb3IuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgaGFuZGxlUGhvbmcodGFyZ2V0KTtcclxufSk7XHJcblxyXG5kaWZmdXNlQ29sb3IuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgaGFuZGxlUGhvbmcodGFyZ2V0KTtcclxufSk7XHJcblxyXG5saWdodFguYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgbGlnaHREaXJlY3Rpb25bMF0gPSBwYXJzZUZsb2F0KGxpZ2h0WC52YWx1ZSk7XHJcbn0pXHJcblxyXG5saWdodFkuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgbGlnaHREaXJlY3Rpb25bMV0gPSBwYXJzZUZsb2F0KGxpZ2h0WS52YWx1ZSk7XHJcbn0pXHJcblxyXG5saWdodFouYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgbGlnaHREaXJlY3Rpb25bMl0gPSBwYXJzZUZsb2F0KGxpZ2h0Wi52YWx1ZSk7XHJcbn0pXHJcblxyXG4vKiogSEFORExFIEZSQU1FICovXHJcblxyXG4vLyB0b3RhbCBmcmFtZVxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlVG90YWxNb2RlbEZyYW1lKHBhcmVudF9ub2RlKXtcclxuICAgIC8vIGdldCB2YWx1ZSBvZiB0b3RhbCBtb2RlbCBmcmFtZSB0ZXh0XHJcbiAgICBsZXQgX3RvdGFsRnJhbWVUZXh0ID0gdG90YWxNb2RlbEZyYW1lLnRleHRDb250ZW50O1xyXG4gICAgLy8gZ2V0IHRvdGFsIGZyYW1lXHJcbiAgICBsZXQgX3RvdGFsRnJhbWUgPSBBbmltYXRpb24udG90YWxNb2RlbEZyYW1lcyhwYXJlbnRfbm9kZSk7XHJcbiAgICBjb25zb2xlLmxvZyhfdG90YWxGcmFtZSlcclxuICAgIC8vIHNldCB0b3RhbCBmcmFtZVxyXG4gICAgX3RvdGFsRnJhbWVUZXh0ID0gXCJUb3RhbCBNb2RlbCBGcmFtZXM6IFwiKyBfdG90YWxGcmFtZTtcclxuICAgIHRvdGFsTW9kZWxGcmFtZS50ZXh0Q29udGVudCA9IF90b3RhbEZyYW1lVGV4dDtcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlVG90YWxOb2RlRnJhbWUobm9kZSl7XHJcbiAgICBsZXQgX3RvdGFsRnJhbWVUZXh0ID0gdG90YWxOb2RlRnJhbWUudGV4dENvbnRlbnQ7XHJcbiAgICBsZXQgX3RvdGFsRnJhbWUgPSBBbmltYXRpb24udG90YWxOb2RlRnJhbWVzKG5vZGUpO1xyXG4gICAgX3RvdGFsRnJhbWVUZXh0ID0gXCJUb3RhbCBOb2RlIEZyYW1lczogXCIgKyBfdG90YWxGcmFtZVxyXG4gICAgdG90YWxOb2RlRnJhbWUudGV4dENvbnRlbnQgPSBfdG90YWxGcmFtZVRleHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDdXJyZW50TW9kZWxGcmFtZShwYXJlbnRfbW9kZWwpe1xyXG4gICAgbGV0IF9jdXJyZW50RnJhbWUgPSBBbmltYXRpb24uY3VycmVudE1vZGVsRnJhbWUocGFyZW50X21vZGVsKVxyXG4gICAgY3VycmVudE1vZGVsRnJhbWUudGV4dENvbnRlbnQgPSBcIkN1cnJlbnQgTW9kZWwgRnJhbWU6IFwiICsgX2N1cnJlbnRGcmFtZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQ3VycmVudE5vZGVGcmFtZShub2RlKXtcclxuICAgIGxldCBfY3VyckZyYW1lID0gQW5pbWF0aW9uLmN1cnJlbnROb2RlRnJhbWUobm9kZSlcclxuICAgIGN1cnJlbnROb2RlRnJhbWUudGV4dENvbnRlbnQgPSBcIkN1cnJlbnQgTm9kZSBGcmFtZTogXCIgKyBfY3VyckZyYW1lXHJcbn1cclxuXHJcbi8vIGFkZCBGcmFtZSBtZWNoYW5pc21cclxuY2FuY2VsQWRkRnJhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgYWRkRnJhbWVNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtZnJhbWUtbW9kYWwnKVxyXG4gICAgYWRkRnJhbWVNb2RhbC5jbGFzc05hbWUgPSBhZGRGcmFtZU1vZGFsLmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXHJcbn0pXHJcblxyXG5hZGRGcmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBhZGRGcmFtZU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1mcmFtZS1tb2RhbCcpXHJcbiAgICBhZGRGcmFtZU1vZGFsLmNsYXNzTmFtZSA9IGFkZEZyYW1lTW9kYWwuY2xhc3NOYW1lLnJlcGxhY2UoXCIgaGlkZGVuXCIsIFwiXCIpXHJcbn0pXHJcblxyXG52ZXJpZnlBZGRGcmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBBbmltYXRpb24uZGlzYWJsZUFuaW1hdGlvbih0YXJnZXRSb290KTtcclxuICAgIGxldCB0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdHJhbnNsYXRpb24teCcpLnZhbHVlXHJcbiAgICBsZXQgdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRyYW5zbGF0aW9uLXknKS52YWx1ZVxyXG4gICAgbGV0IHR6ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10cmFuc2xhdGlvbi16JykudmFsdWVcclxuICAgIFxyXG4gICAgLy8gcmFkc1xyXG4gICAgbGV0IHJ4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1yb3RhdGlvbi14JykudmFsdWVcclxuICAgIGxldCByeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcm90YXRpb24teScpLnZhbHVlXHJcbiAgICBsZXQgcnogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXJvdGF0aW9uLXonKS52YWx1ZVxyXG5cclxuICAgIGxldCBzeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtc2NhbGF0aW9uLXgnKS52YWx1ZVxyXG4gICAgbGV0IHN5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1zY2FsYXRpb24teScpLnZhbHVlXHJcbiAgICBsZXQgc3ogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXNjYWxhdGlvbi16JykudmFsdWVcclxuXHJcbiAgICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgICAgIHRyYW5zbGF0ZSA6IFt0eCwgdHksIHR6XSxcclxuICAgICAgICByb3RhdGUgOiBbZGVnVG9SYWQocngpLCBkZWdUb1JhZChyeSksIGRlZ1RvUmFkKHJ6KV0sXHJcbiAgICAgICAgc2NhbGUgOiBbc3gsIHN5LCBzel1cclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmKHRhcmdldC5hbmltYXRpb24uZnJhbWVzICE9PSBudWxsKXtcclxuICAgICAgICB0YXJnZXQuYW5pbWF0aW9uLmZyYW1lcy5wdXNoKHRyYW5zZm9ybSlcclxuICAgICAgICBoYW5kbGVUb3RhbE1vZGVsRnJhbWUodGFyZ2V0Um9vdCk7XHJcbiAgICAgICAgaGFuZGxlVG90YWxOb2RlRnJhbWUodGFyZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGFkZEZyYW1lTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWZyYW1lLW1vZGFsJylcclxuICAgIGFkZEZyYW1lTW9kYWwuY2xhc3NOYW1lID0gYWRkRnJhbWVNb2RhbC5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxyXG5cclxufSlcclxuXHJcbi8vZWRpdCBmcmFtZVxyXG5cclxuZWRpdEZyYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IGVkaXRGcmFtZU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZnJhbWUtbW9kYWwnKVxyXG4gICAgZWRpdEZyYW1lTW9kYWwuY2xhc3NOYW1lID0gZWRpdEZyYW1lTW9kYWwuY2xhc3NOYW1lLnJlcGxhY2UoXCIgaGlkZGVuXCIsIFwiXCIpXHJcbiAgICAvLyBzZXQgdmFsdWVcclxuICAgIGxldCB0cmFuc2Zvcm0gPSB0YXJnZXQudHJhbnNmb3JtXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10cmFuc2xhdGlvbi14JykudmFsdWUgPSB0cmFuc2Zvcm0udHJhbnNsYXRlWzBdXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10cmFuc2xhdGlvbi15JykudmFsdWUgPSB0cmFuc2Zvcm0udHJhbnNsYXRlWzFdXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10cmFuc2xhdGlvbi16JykudmFsdWUgPSB0cmFuc2Zvcm0udHJhbnNsYXRlWzJdXHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcm90YXRpb24teCcpLnZhbHVlID0gcmFkVG9EZWcodHJhbnNmb3JtLnJvdGF0ZVswXSlcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXJvdGF0aW9uLXknKS52YWx1ZSA9IHJhZFRvRGVnKHRyYW5zZm9ybS5yb3RhdGVbMV0pXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1yb3RhdGlvbi16JykudmFsdWUgPSByYWRUb0RlZyh0cmFuc2Zvcm0ucm90YXRlWzJdKVxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXNjYWxhdGlvbi14JykudmFsdWUgPSB0cmFuc2Zvcm0uc2NhbGVbMF1cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXNjYWxhdGlvbi15JykudmFsdWUgPSB0cmFuc2Zvcm0uc2NhbGVbMV1cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXNjYWxhdGlvbi16JykudmFsdWUgPSB0cmFuc2Zvcm0uc2NhbGVbMl1cclxufSlcclxuXHJcbmNhbmNlbEVkaXRGcmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBlZGl0RnJhbWVNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWZyYW1lLW1vZGFsJylcclxuICAgIGVkaXRGcmFtZU1vZGFsLmNsYXNzTmFtZSA9IGVkaXRGcmFtZU1vZGFsLmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXHJcbn0pXHJcblxyXG52ZXJpZnlFZGl0RnJhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgLy8gdHgsIHR5LCB0eiwgcngsIHJ5LCByeiwgc3gsIHN5LCBzelxyXG4gICAgQW5pbWF0aW9uLmRpc2FibGVBbmltYXRpb24odGFyZ2V0Um9vdCk7XHJcbiAgICBsZXQgdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10cmFuc2xhdGlvbi14JykudmFsdWVcclxuICAgIGxldCB0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRyYW5zbGF0aW9uLXknKS52YWx1ZVxyXG4gICAgbGV0IHR6ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdHJhbnNsYXRpb24teicpLnZhbHVlXHJcblxyXG4gICAgbGV0IHJ4ID0gZGVnVG9SYWQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcm90YXRpb24teCcpLnZhbHVlKVxyXG4gICAgbGV0IHJ5ID0gZGVnVG9SYWQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcm90YXRpb24teScpLnZhbHVlKVxyXG4gICAgbGV0IHJ6ID0gZGVnVG9SYWQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcm90YXRpb24teicpLnZhbHVlKVxyXG5cclxuICAgIGxldCBzeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXNjYWxhdGlvbi14JykudmFsdWVcclxuICAgIGxldCBzeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXNjYWxhdGlvbi15JykudmFsdWVcclxuICAgIGxldCBzeiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXNjYWxhdGlvbi16JykudmFsdWVcclxuXHJcbiAgICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgICAgIHRyYW5zbGF0ZSA6IFt0eCwgdHksIHR6XSxcclxuICAgICAgICByb3RhdGUgOiBbcngsIHJ5LCByel0sXHJcbiAgICAgICAgc2NhbGUgOiBbc3gsIHN5LCBzel1cclxuICAgIH1cclxuXHJcbiAgICBBbmltYXRpb24uZWRpdEN1cnJlbnRGcmFtZSh0YXJnZXQsIHRyYW5zZm9ybSk7XHJcblxyXG4gICAgLy8gZGlzYWJsZSBtb2RhbFxyXG4gICAgY29uc3QgZWRpdEZyYW1lTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1mcmFtZS1tb2RhbCcpXHJcbiAgICBlZGl0RnJhbWVNb2RhbC5jbGFzc05hbWUgPSBlZGl0RnJhbWVNb2RhbC5jbGFzc05hbWUgKyBcIiBoaWRkZW5cIlxyXG5cclxufSlcclxuXHJcbi8vIGRlbGV0ZSBmcmFtZVxyXG5kZWxldGVGcmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBkZWxldGVGcmFtZU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZS1mcmFtZS1tb2RhbCcpXHJcbiAgICBkZWxldGVGcmFtZU1vZGFsLmNsYXNzTmFtZSA9IGRlbGV0ZUZyYW1lTW9kYWwuY2xhc3NOYW1lLnJlcGxhY2UoXCIgaGlkZGVuXCIsIFwiXCIpXHJcbn0pXHJcblxyXG5jYW5jZWxEZWxldGVGcmFtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBkZWxldGVGcmFtZU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZS1mcmFtZS1tb2RhbCcpXHJcbiAgICBkZWxldGVGcmFtZU1vZGFsLmNsYXNzTmFtZSA9IGRlbGV0ZUZyYW1lTW9kYWwuY2xhc3NOYW1lICsgXCIgaGlkZGVuXCJcclxufSlcclxuXHJcbnZlcmlmeURlbGV0ZUZyYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIEFuaW1hdGlvbi5kaXNhYmxlQW5pbWF0aW9uKHRhcmdldFJvb3QpO1xyXG5cclxuICAgIC8vIGRlbGV0ZSBmcmFtZVxyXG4gICAgQW5pbWF0aW9uLmRlbGV0ZUN1cnJlbnRGcmFtZSh0YXJnZXQpO1xyXG5cclxuICAgIC8vIHVwZGF0ZSBub2RlIGZyYW1lXHJcbiAgICBoYW5kbGVUb3RhbE1vZGVsRnJhbWUodGFyZ2V0Um9vdCk7XHJcbiAgICBoYW5kbGVUb3RhbE5vZGVGcmFtZSh0YXJnZXQpO1xyXG4gICAgLy8gaWYodGFyZ2V0LmFuaW1hdGlvbi5mcmFtZXMgIT09IG51bGwpe1xyXG4gICAgLy8gICAgIHRhcmdldC5hbmltYXRpb24uZnJhbWVzLnBvcCgpO1xyXG4gICAgLy8gICAgIGhhbmRsZVRvdGFsTW9kZWxGcmFtZSh0YXJnZXRSb290KTtcclxuICAgIC8vICAgICBoYW5kbGVUb3RhbE5vZGVGcmFtZSh0YXJnZXQpO1xyXG4gICAgLy8gfVxyXG4gICAgY29uc3QgZGVsZXRlRnJhbWVNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGUtZnJhbWUtbW9kYWwnKVxyXG4gICAgZGVsZXRlRnJhbWVNb2RhbC5jbGFzc05hbWUgPSBkZWxldGVGcmFtZU1vZGFsLmNsYXNzTmFtZSArIFwiIGhpZGRlblwiXHJcbn0pXHJcblxyXG4vLyBjb2xvclxyXG5iYXNpY0NvbG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgIHRhcmdldC5waWNrZWRDb2xvciA9IGhleFRvUmdiKGJhc2ljQ29sb3IudmFsdWUpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHNldE5vZGVNYW5hZ2VyKG5vZGUpe1xyXG4gICAgbm9kZU5hbWUudmFsdWUgPSBub2RlLm5hbWU7XHJcbn07XHJcblxyXG5yZW5hbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgcmVuYW1lVGFyZ2V0KG5vZGVOYW1lLnZhbHVlKTtcclxuICAgIGNsZWFyQ29tcG9uZW50KCk7XHJcbiAgICBkaXNwbGF5Q29tcG9uZW50KDAsIG9iamVjdHMpO1xyXG59KVxyXG5cclxuZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGRlbGV0ZU5vZGUodGFyZ2V0Lm5hbWUpO1xyXG4gICAgY2xlYXJDb21wb25lbnQoKTtcclxuICAgIGRpc3BsYXlDb21wb25lbnQoMCwgb2JqZWN0cyk7XHJcbn0pXHJcblxyXG5hZGRDaGlsZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgYWRkTm9kZShub2RlTmFtZS52YWx1ZSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0YXJnZXQpXHJcbn0pXHJcblxyXG5zYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIHNhdmVKU09OKG9iamVjdHMpO1xyXG59KTtcclxuXHJcbmxvYWQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgbG9hZEpTT04oZXZlbnQudGFyZ2V0LCBmdW5jdGlvbihvYmplY3RzKXtcclxuICAgICAgICBsb2FkT2JqZWN0cyhvYmplY3RzKTtcclxuICAgICAgICBjb25zdCBpbXBvcnRlZE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIGltcG9ydGVkT3B0aW9uLnZhbHVlID0gbW9kZWwubGVuZ3RoO1xyXG4gICAgICAgIGltcG9ydGVkT3B0aW9uLnRleHQgPSBvYmplY3RzWzBdLm5hbWU7XHJcbiAgICAgICAgbW9kZWxTZWxlY3Rpb24uYXBwZW5kQ2hpbGQoaW1wb3J0ZWRPcHRpb24pO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvLyBTZXQgdGhlIHZhbHVlIG9mIG1vZGVsU2VsZWN0aW9uIHRvIFwiaW1wb3J0ZWRcIlxyXG4gICAgICAgIG1vZGVsU2VsZWN0aW9uLnZhbHVlID0gbW9kZWwubGVuZ3RoO1xyXG4gICAgICAgIGFkZE1vZGVsKG9iamVjdHMpO1xyXG4gICAgfSk7XHJcbn0pXHJcblxyXG5leHBvcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgY29uc29sZS5sb2coW3RhcmdldF0pO1xyXG4gICAgc2F2ZUpTT04oW3RhcmdldF0pO1xyXG59KTtcclxuXHJcbmltcG9ydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICBsb2FkSlNPTihldmVudC50YXJnZXQsIGZ1bmN0aW9uKG9iamVjdCl7XHJcbiAgICAgICAgb2JqZWN0WzBdLnNldFBhcmVudCh0YXJnZXQpO1xyXG4gICAgICAgIGNsZWFyQ29tcG9uZW50KCk7XHJcbiAgICAgICAgZGlzcGxheUNvbXBvbmVudCgwLCBvYmplY3RzKTtcclxuICAgIH0pO1xyXG59KVxyXG4iLCJpbXBvcnQgcGlnTW9kZWwgZnJvbSBcIi4vc3RydWN0cy9tb2RlbC9waWcuanNcIjtcclxuaW1wb3J0IGNoaWNrZW5Nb2RlbCBmcm9tIFwiLi9zdHJ1Y3RzL21vZGVsL2NoaWNrZW4uanNcIjtcclxuaW1wb3J0IGZveE1vZGVsIGZyb20gXCIuL3N0cnVjdHMvbW9kZWwvZm94LmpzXCI7XHJcbmltcG9ydCBNYXQ0IGZyb20gXCIuL3N0cnVjdHMvbWF0aC9NYXQ0LmpzXCI7XHJcbmltcG9ydCBWZWMzIGZyb20gXCIuL3N0cnVjdHMvbWF0aC9WZWMzLmpzXCI7XHJcbmltcG9ydCBWZWM0IGZyb20gXCIuL3N0cnVjdHMvbWF0aC9WZWM0LmpzXCI7XHJcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4vdXRpbHMvQ2FtZXJhLmpzXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlDb21wb25lbnQsIFxyXG4gIGNsZWFyQ29tcG9uZW50LCBcclxuICBpbml0T3B0aW9uTW9kZWwsIFxyXG4gIGhhbmRsZVRyYW5zZm9ybSwgXHJcbiAgaGFuZGxlVG90YWxNb2RlbEZyYW1lLFxyXG4gIGhhbmRsZVRvdGFsTm9kZUZyYW1lLFxyXG4gIGhhbmRsZUN1cnJlbnRNb2RlbEZyYW1lLFxyXG4gIGhhbmRsZUN1cnJlbnROb2RlRnJhbWUsXHJcbiAgbm9kZU5hbWV9IGZyb20gXCIuL2hhbmRsZXIvZXZlbnRIYW5kbGVyLmpzXCI7XHJcbmltcG9ydCBob2xsb3dNb2RlbCBmcm9tIFwiLi9zdHJ1Y3RzL21vZGVsL2hvbGxvd1RoaW5neS5qc1wiO1xyXG5pbXBvcnQgaG9sbG93UmluZ01vZGVsIGZyb20gXCIuL3N0cnVjdHMvbW9kZWwvcmluZy5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVQYXBlclRleHR1cmUsIGNyZWF0ZUVudmlyb25tZW50VGV4dHVyZSwgY3JlYXRlQnVtcFRleHR1cmUgfSBmcm9tIFwiLi91dGlscy90ZXh0dXJlLmpzXCJcclxuaW1wb3J0IEFuaW1hdGlvbiBmcm9tIFwiLi91dGlscy9BbmltYXRpb24uanNcIjtcclxuaW1wb3J0IE5vZGUgZnJvbSBcIi4vc3RydWN0cy9ub2RlLmpzXCI7XHJcbmltcG9ydCB7IGRlZ1RvUmFkIH0gZnJvbSBcIi4vc3RydWN0cy9tYXRoL21hdGhVdGlscy5qc1wiO1xyXG5cclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnbC1jYW52YXNcIik7XHJcbmNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbFwiKTtcclxuXHJcblxyXG5jb25zdCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZlcnRleC1zaGFkZXItM2RcIik/LnRleHRDb250ZW50O1xyXG5jb25zdCBmcmFnbWVudFNoYWRlclNvdXJjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJhZ21lbnQtc2hhZGVyLTNkXCIpPy50ZXh0Q29udGVudDtcclxuXHJcbi8vIHN0YXRlXHJcbmV4cG9ydCB2YXIgbW9kZWwgPSBbcGlnTW9kZWwsIGNoaWNrZW5Nb2RlbCwgZm94TW9kZWwsIGhvbGxvd01vZGVsLCBob2xsb3dSaW5nTW9kZWxdO1xyXG5leHBvcnQgdmFyIG9iamVjdHM7XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRPYmplY3RzKHZhbHVlKSB7XHJcbiAgb2JqZWN0cyA9IHZhbHVlO1xyXG59XHJcbmV4cG9ydCB2YXIgdGFyZ2V0O1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0VGFyZ2V0KHZhbHVlKSB7XHJcbiAgdGFyZ2V0ID0gdmFsdWU7XHJcbn1cclxuZXhwb3J0IHZhciB0YXJnZXRSb290O1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0VGFyZ2V0Um9vdCh2YWx1ZSkge1xyXG4gIHRhcmdldFJvb3QgPSB2YWx1ZTtcclxufVxyXG52YXIgbGlnaHRpbmc7XHJcbmV4cG9ydCB2YXIgbGlnaHREaXJlY3Rpb247XHJcbnZhciB0ZXh0dXJlO1xyXG52YXIgcHJvamVjdGlvbl90eXBlO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFByb2plY3Rpb25UeXBlKG5ld1Byb2plY3Rpb24pIHtcclxuICBwcm9qZWN0aW9uX3R5cGUgPSBuZXdQcm9qZWN0aW9uO1xyXG59XHJcbnZhciBmYWN0b3I7XHJcbnZhciBvYmxpcXVlX3RoZXRhO1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0T2JsaXF1ZVRoZXRhKG5ld1RoZXRhKSB7XHJcbiAgb2JsaXF1ZV90aGV0YSA9IG5ld1RoZXRhO1xyXG59XHJcbnZhciBvYmxpcXVlX3BoaTtcclxuZXhwb3J0IGZ1bmN0aW9uIHNldE9ibGlxdWVQaGkobmV3UGhpKSB7XHJcbiAgb2JsaXF1ZV9waGkgPSBuZXdQaGk7XHJcbn1cclxudmFyIG5vcm1hbGl6ZUxpZ2h0O1xyXG52YXIgd29ybGRWaWV3UHJvamVjdGlvbk1hdHJpeDtcclxudmFyIGN1YmVDb3VudCA9IDA7XHJcblxyXG4vLyBhbmltYXRpb25cclxudmFyIHRfYW5pbWF0aW9uID0gMDtcclxudmFyIGZwc190aW1lID0gMC4xNTtcclxuXHJcbmluaXRTdGF0ZSgpO1xyXG5cclxuZnVuY3Rpb24gaW5pdFN0YXRlKCkge1xyXG4gICAgb2JqZWN0cyA9IG1vZGVsWzBdO1xyXG4gICAgbGlnaHRpbmcgPSBmYWxzZTtcclxuICAgIGxpZ2h0RGlyZWN0aW9uID0gWzAuMCwgMC4wLCAxLjBdXHJcbiAgICB0ZXh0dXJlID0gXCJub25lXCI7XHJcbiAgICBwcm9qZWN0aW9uX3R5cGUgPSBcIm9ydGhvZ3JhcGhpY1wiO1xyXG4gICAgZmFjdG9yID0gMC4wO1xyXG4gICAgb2JsaXF1ZV90aGV0YSA9IDkwLjA7XHJcbiAgICBvYmxpcXVlX3BoaSA9IDkwLjA7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbW9kZWwubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIHNldERlZmF1bHRSb3RhdGlvbihtb2RlbFtpXSk7XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5Q29tcG9uZW50KDAsIG9iamVjdHMpO1xyXG4gICAgaW5pdE9wdGlvbk1vZGVsKG1vZGVsKTtcclxuICAgIGhhbmRsZVRyYW5zZm9ybShvYmplY3RzWzBdKVxyXG4gICAgaGFuZGxlVG90YWxNb2RlbEZyYW1lKG9iamVjdHNbMF0pXHJcbiAgICBoYW5kbGVUb3RhbE5vZGVGcmFtZShvYmplY3RzWzBdKVxyXG5cclxufVxyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIGlmKCFnbCl7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV2ViR0wgbm90IHN1cHBvcnRlZFwiKTtcclxuICAgIH1cclxuICAgIHRhcmdldCA9IG9iamVjdHNbMF07XHJcbiAgICB0YXJnZXRSb290ID0gdGFyZ2V0O1xyXG4gICAgcmVuZGVyKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldERlZmF1bHRTdGF0ZShvYmplY3RzKSB7XHJcbiAgICBvYmplY3RzLmZvckVhY2gob2JqZWN0ID0+IHtcclxuICAgICAgICBpZiAoIW9iamVjdC5tb2RlbC5jb2xvcnMpIHtcclxuICAgICAgICAgICAgaWYgKCFvYmplY3QucGlja2VkQ29sb3IpIHtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5tb2RlbC5jb2xvcnMgPSBnZW5lcmF0ZUNvbG9ycyhvYmplY3QubW9kZWwudmVydGljZXMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0Lm1vZGVsLmNvbG9ycyA9IGdlbmVyYXRlQ29sb3JzKFxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5tb2RlbC52ZXJ0aWNlcyxcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QucGlja2VkQ29sb3JcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIGlmICghb2JqZWN0LnByb2dyYW0gJiYgIWxpZ2h0aW5nKSB7XHJcbiAgICAgICAgICAgIG9iamVjdC5wcm9ncmFtID0gY3JlYXRlU2hhZGVyUHJvZ3JhbShcclxuICAgICAgICAgICAgICAgIGdsLFxyXG4gICAgICAgICAgICAgICAgdmVydGV4U2hhZGVyU291cmNlLFxyXG4gICAgICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIC8vICAgaWYgKG9iamVjdC5hbmltYXRpb24uaXNPYmplY3RBbmltYXRlICYmIG9iamVjdC5hbmltYXRpb24uYW5pbWF0ZSkge1xyXG4gICAgICAgIC8vICAgICBvYmplY3QudHJhbnNmb3JtID0gb2JqZWN0LmFuaW1hdGlvbi5hbmltYXRlW2NvdW50ZXIgJSBmcHNdO1xyXG4gICAgICAgIC8vICAgfVxyXG4gICAgICBcclxuICAgICAgICAgIC8vIG9iamVjdC50cmFuc2Zvcm0gPSBvYmplY3QuYW5pbWF0aW9uLmFuaW1hdGVbY291bnRlciAlIGZwc107XHJcbiAgICAgICAgb2JqZWN0LmxvY2FsTWF0cml4ID0gc2V0VHJhbnNmb3JtKG9iamVjdCk7XHJcbiAgICAgICAgaWYgKG9iamVjdC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHNldERlZmF1bHRTdGF0ZShvYmplY3QuY2hpbGRyZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFRyYW5zZm9ybShvYmplY3QpIHtcclxuICAgIC8qIFNldHVwIHRyYW5zZm9ybSBtYXRyaXggKi9cclxuXHJcbiAgICB2YXIgdHJhbnNmb3JtTWF0cml4ID0gTWF0NC50cmFuc2xhdGUoXHJcbiAgICAgIG9iamVjdC50cmFuc2Zvcm0udHJhbnNsYXRlWzBdLFxyXG4gICAgICBvYmplY3QudHJhbnNmb3JtLnRyYW5zbGF0ZVsxXSxcclxuICAgICAgb2JqZWN0LnRyYW5zZm9ybS50cmFuc2xhdGVbMl1cclxuICAgICk7XHJcblxyXG4gICAgbGV0IF9jZW50ZXIgPSBvYmplY3QubW9kZWwuY2VudGVyXHJcbiAgICBpZihfY2VudGVyKXtcclxuICAgICAgdHJhbnNmb3JtTWF0cml4ID0gTWF0NC5tdWx0aXBseShcclxuICAgICAgICB0cmFuc2Zvcm1NYXRyaXgsXHJcbiAgICAgICAgTWF0NC50cmFuc2xhdGUoX2NlbnRlclswXSwgX2NlbnRlclsxXSwgX2NlbnRlclsyXSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdHJhbnNmb3JtTWF0cml4ID0gTWF0NC5tdWx0aXBseShcclxuICAgICAgdHJhbnNmb3JtTWF0cml4LFxyXG4gICAgICBNYXQ0LnJvdGF0ZVgob2JqZWN0LnRyYW5zZm9ybS5yb3RhdGVbMF0pXHJcbiAgICApO1xyXG4gIFxyXG4gICAgdHJhbnNmb3JtTWF0cml4ID0gTWF0NC5tdWx0aXBseShcclxuICAgICAgdHJhbnNmb3JtTWF0cml4LFxyXG4gICAgICBNYXQ0LnJvdGF0ZVkob2JqZWN0LnRyYW5zZm9ybS5yb3RhdGVbMV0pXHJcbiAgICApO1xyXG4gIFxyXG4gICAgdHJhbnNmb3JtTWF0cml4ID0gTWF0NC5tdWx0aXBseShcclxuICAgICAgdHJhbnNmb3JtTWF0cml4LFxyXG4gICAgICBNYXQ0LnJvdGF0ZVoob2JqZWN0LnRyYW5zZm9ybS5yb3RhdGVbMl0pXHJcbiAgICApO1xyXG5cclxuICAgIGlmKF9jZW50ZXIpe1xyXG4gICAgICB0cmFuc2Zvcm1NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICAgIHRyYW5zZm9ybU1hdHJpeCxcclxuICAgICAgICBNYXQ0LnRyYW5zbGF0ZSgtX2NlbnRlclswXSwgLV9jZW50ZXJbMV0sIC1fY2VudGVyWzJdKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgdHJhbnNmb3JtTWF0cml4ID0gTWF0NC5tdWx0aXBseShcclxuICAgICAgdHJhbnNmb3JtTWF0cml4LFxyXG4gICAgICBNYXQ0LnNjYWxlKFxyXG4gICAgICAgIG9iamVjdC50cmFuc2Zvcm0uc2NhbGVbMF0sXHJcbiAgICAgICAgb2JqZWN0LnRyYW5zZm9ybS5zY2FsZVsxXSxcclxuICAgICAgICBvYmplY3QudHJhbnNmb3JtLnNjYWxlWzJdXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgXHJcbiAgICByZXR1cm4gdHJhbnNmb3JtTWF0cml4O1xyXG4gIH1cclxuXHJcbmZ1bmN0aW9uIHNldERlZmF1bHRSb3RhdGlvbihvYmplY3RzKSB7XHJcbiAgICBmb3IobGV0IG9iamVjdCBvZiBvYmplY3RzKXtcclxuICAgICAgICBvYmplY3QudHJhbnNmb3JtLnJvdGF0ZSA9IG9iamVjdC50cmFuc2Zvcm0ucm90YXRlLm1hcCgodmFsKSA9PiBkZWdUb1JhZCh2YWwpKTtcclxuICAgICAgICBpZihvYmplY3QuY2hpbGRyZW4ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHNldERlZmF1bHRSb3RhdGlvbihvYmplY3QuY2hpbGRyZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckxvb3Aob2JqZWN0cykge1xyXG4gICAgb2JqZWN0cy5mb3JFYWNoKG9iamVjdCA9PiB7XHJcbiAgICAgICAgZ2wudXNlUHJvZ3JhbShvYmplY3QucHJvZ3JhbSk7XHJcbiAgICAgICAgdmFyIG1vZGVsTWF0cml4ID0gb2JqZWN0LmdldFdvcmxkTWF0cml4KCk7XHJcblxyXG4gICAgICAgIG9iamVjdC53b3JsZE1hdHJpeCA9IHNldFByb2plY3Rpb25NYXRyaXgob2JqZWN0LndvcmxkTWF0cml4LCBvYmplY3QpXHJcblxyXG5cclxuICAgICAgICB2YXIgYV9wb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkob2JqZWN0Lm1vZGVsLnZlcnRpY2VzLmZsYXQoMSkpO1xyXG4gICAgICAgIHZhciBhX25vcm1hbCA9IG5ldyBGbG9hdDMyQXJyYXkob2JqZWN0Lm1vZGVsLm5vcm1hbHMuZmxhdCgxKSk7XHJcbiAgICAgICAgdmFyIGFfY29sb3IgPSBuZXcgRmxvYXQzMkFycmF5KG9iamVjdC5waWNrZWRDb2xvci5mbGF0KDEpKTtcclxuICAgICAgICB2YXIgYV90ZXh0dXJlID0gbmV3IEZsb2F0MzJBcnJheShvYmplY3QubW9kZWwudGV4Q29vcmQpO1xyXG4gICAgICAgIHZhciBhX3RhbmdlbnQgPSBuZXcgRmxvYXQzMkFycmF5KG9iamVjdC5tb2RlbC50YW5nZW50cy5mbGF0KDEpKTtcclxuICAgICAgICB2YXIgYV9iaXRhbmdlbnQgPSBuZXcgRmxvYXQzMkFycmF5KG9iamVjdC5tb2RlbC5iaXRhbmdlbnRzLmZsYXQoMSkpO1xyXG5cclxuICAgICAgICBzZXRBdHRyKGdsLCBvYmplY3QucHJvZ3JhbSwgYV9wb3NpdGlvbiwgYV9ub3JtYWwsIGFfY29sb3IsIGFfdGV4dHVyZSwgYV90YW5nZW50LCBhX2JpdGFuZ2VudCk7XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IGRpZmZ1c2UgPSBbMSwgMSwgMV07XHJcbiAgICAgICAgLy8gY29uc3Qgc3BlY3VsYXIgPSBbMCwgMCwgMF07XHJcbiAgICAgICAgLy8gY29uc3QgYW1iaWVudCA9IFsxLCAxICwxXVxyXG4gICAgICAgIC8vIGNvbnN0IHNoaW5pbmVzcyA9IDEwMDtcclxuXHJcbiAgICAgICAgdmFyIHVuaWZvcm1zID0ge1xyXG4gICAgICAgICAgICB1V29ybGRWaWV3UHJvamVjdGlvbjogb2JqZWN0LndvcmxkTWF0cml4LFxyXG4gICAgICAgICAgICB1V29ybGRJbnZlcnNlVHJhbnNwb3NlOiBvYmplY3Qud29ybGRJbnZlcnNlTWF0cml4LFxyXG4gICAgICAgICAgICB1UmV2ZXJzZUxpZ2h0RGlyZWN0aW9uOiBub3JtYWxpemVMaWdodCxcclxuICAgICAgICAgICAgdUNvbG9yOiBvYmplY3QucGlja2VkQ29sb3IuY29uY2F0KDEuMCksXHJcbiAgICAgICAgICAgIHVNb2RlbE1hdHJpeDogbW9kZWxNYXRyaXgsXHJcbiAgICAgICAgICAgIHVBbWJpZW50Q29sb3I6IG9iamVjdC5hbWJpZW50LFxyXG4gICAgICAgICAgICB1RGlmZnVzZUNvbG9yOiBvYmplY3QuZGlmZnVzZSxcclxuICAgICAgICAgICAgdVNwZWN1bGFyQ29sb3I6IG9iamVjdC5zcGVjdWxhcixcclxuICAgICAgICAgICAgdVNoaW5pbmVzczogb2JqZWN0LnNoaW5pbmVzcyxcclxuICAgICAgICAgICAgdUxpZ2h0UG9zOiBub3JtYWxpemVMaWdodCxcclxuICAgICAgICAgICAga2E6IG9iamVjdC5jb25zdC5rYSxcclxuICAgICAgICAgICAga2Q6IG9iamVjdC5jb25zdC5rZCxcclxuICAgICAgICAgICAga3M6IG9iamVjdC5jb25zdC5rcyxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFVuaWZvcm1zKGdsLCBvYmplY3QucHJvZ3JhbSwgdW5pZm9ybXMpO1xyXG5cclxuICAgICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFUywgMCwgb2JqZWN0Lm1vZGVsLnZlcnRpY2VzLmxlbmd0aCk7XHJcbiAgICAgICAgaWYgKG9iamVjdC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJlbmRlckxvb3Aob2JqZWN0LmNoaWxkcmVuKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxud2luZG93LnJlcXVlc3RBbmltRnJhbWUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gMSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfSkoKTtcclxuXHJcblxyXG5mdW5jdGlvbiByZW5kZXIobm93KSB7XHJcbiAgICBnbC52aWV3cG9ydCgwLCAwLCBnbC5jYW52YXMud2lkdGgsIGdsLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgZ2wuY2xlYXJDb2xvcigwLjgsIDAuOCwgMC44LCAxLjApO1xyXG4gICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IGdsLkRFUFRIX0JVRkZFUl9CSVQpO1xyXG5cclxuICAgIGdsLmVuYWJsZShnbC5DVUxMX0ZBQ0UpO1xyXG4gICAgZ2wuZW5hYmxlKGdsLkRFUFRIX1RFU1QpO1xyXG5cclxuICAgIHNldERlZmF1bHRTdGF0ZShvYmplY3RzKTtcclxuICAgIC8vIGRlbHRhIHRpbWVcclxuICAgIGlmKCFub3cpIG5vdyA9IDA7XHJcbiAgICBpZih0X2FuaW1hdGlvbiA9PT0gMCkgdF9hbmltYXRpb24gPSBub3c7XHJcblxyXG4gICAgaWYoKG5vdyAtIHRfYW5pbWF0aW9uKSA+PSBmcHNfdGltZSl7XHJcbiAgICAgIHRfYW5pbWF0aW9uID0gbm93O1xyXG4gICAgICBsZXQgZGVsdGFUaW1lID0gbm93IC0gdF9hbmltYXRpb247XHJcbiAgICAgIEFuaW1hdGlvbi5hbmltYXRlKHRhcmdldFJvb3QsIGRlbHRhVGltZSk7XHJcbiAgICAgIGhhbmRsZUN1cnJlbnRNb2RlbEZyYW1lKHRhcmdldFJvb3QpXHJcbiAgICAgIGhhbmRsZUN1cnJlbnROb2RlRnJhbWUodGFyZ2V0KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvYmplY3RzWzBdLnNldFdvcmxkTXR4KG51bGwpO1xyXG5cclxuICAgIG5vcm1hbGl6ZUxpZ2h0ID0gVmVjMy51bml0VmVjdG9yKFZlYzMuZnJvbUFycmF5KGxpZ2h0RGlyZWN0aW9uKSkuYXNBcnJheSgpXHJcbiAgICByZW5kZXJMb29wKG9iamVjdHMpO1xyXG4gICAgQW5pbWF0aW9uLmhhbmRsZVRyYW5zZm9ybSh0YXJnZXQsIGRvY3VtZW50KTtcclxuICAgIFxyXG4gICAgd2luZG93LnJlcXVlc3RBbmltRnJhbWUocmVuZGVyKTtcclxuICAgIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0UHJvamVjdGlvbk1hdHJpeChtYXRyaXgsIG9iamVjdCkge1xyXG4gICAgLy8gY29uc3QgY2FtZXJhID0gc2V0Q2FtZXJhKG9iamVjdCk7XHJcbiAgICBjb25zdCBwcm9qZWN0aW9uVmlldyA9IENhbWVyYS5wcm9qZWN0aW9uTWF0cml4KHByb2plY3Rpb25fdHlwZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWdUb1JhZCg0NSksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbnZhcy53aWR0aCAvIGNhbnZhcy5oZWlnaHQpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC52aWV3TWF0cml4Lm5lYXIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnZpZXdNYXRyaXguZmFyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JsaXF1ZV90aGV0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ibGlxdWVfcGhpKVxyXG4gICAgY29uc3Qgdmlld01hdHJpeCA9IENhbWVyYS52aWV3TWF0cml4KG9iamVjdC52aWV3TWF0cml4LmNhbWVyYSwgb2JqZWN0LnZpZXdNYXRyaXgubG9va0F0LCBvYmplY3Qudmlld01hdHJpeC51cCk7XHJcbiAgICB2YXIgdmlld1Byb2plY3Rpb25NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KHByb2plY3Rpb25WaWV3LCB2aWV3TWF0cml4KTtcclxuICAgIGlmIChmYWN0b3IgPCAwLjAxKSB7XHJcbiAgICAgICAgZmFjdG9yID0gMC4wMTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJvamVjdGlvbl90eXBlID09PSBcInBlcnNwZWN0aXZlXCIpIHtcclxuICAgICAgICB2aWV3UHJvamVjdGlvbk1hdHJpeCA9IE1hdDQubXVsdGlwbHkoXHJcbiAgICAgICAgICAgIENhbWVyYS5tYWtlWlRvV01hdHJpeChmYWN0b3IpLFxyXG4gICAgICAgICAgICB2aWV3UHJvamVjdGlvbk1hdHJpeCxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHdvcmxkVmlld1Byb2plY3Rpb25NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KHZpZXdQcm9qZWN0aW9uTWF0cml4LCBtYXRyaXgpO1xyXG5cclxuICAgIHJldHVybiB3b3JsZFZpZXdQcm9qZWN0aW9uTWF0cml4O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZU1vZGVsT2JqZWN0IChpbmRleCkge1xyXG4gICAgb2JqZWN0cyA9IG1vZGVsW2luZGV4XTtcclxuICAgIHNldFRhcmdldChvYmplY3RzWzBdKTtcclxuICAgIHNldFRhcmdldFJvb3Qob2JqZWN0c1swXSk7XHJcbiAgICBjbGVhckNvbXBvbmVudCgpO1xyXG4gICAgZGlzcGxheUNvbXBvbmVudCgwLCBvYmplY3RzKTtcclxuICAgIGhhbmRsZVRyYW5zZm9ybShvYmplY3RzWzBdKTtcclxuICAgIGhhbmRsZVRvdGFsTW9kZWxGcmFtZSh0YXJnZXRSb290KVxyXG4gICAgaGFuZGxlVG90YWxOb2RlRnJhbWUodGFyZ2V0Um9vdClcclxuICAgIHJlbmRlcigpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZU1hcHBpbmdUZXh0dXJlKG9iamVjdHMsIHRleHR1cmVUeXBlKSB7XHJcbiAgb2JqZWN0cy5mb3JFYWNoKChvYmplY3QpID0+IHtcclxuICAgIGlmICh0ZXh0dXJlVHlwZSA9PT0gXCIwXCIpIHtcclxuICAgICAgb2JqZWN0LnByb2dyYW0gPSBjcmVhdGVTaGFkZXJQcm9ncmFtKFxyXG4gICAgICAgIGdsLFxyXG4gICAgICAgIHZlcnRleF9zaGFkZXJfM2QsXHJcbiAgICAgICAgZnJhZ21lbnRfc2hhZGVyXzNkX25vX2xpZ2h0aW5nXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKHRleHR1cmVUeXBlID09PSBcIjFcIikge1xyXG4gICAgICBjcmVhdGVQYXBlclRleHR1cmUoZ2wpO1xyXG4gICAgICBvYmplY3QucHJvZ3JhbSA9IGNyZWF0ZVNoYWRlclByb2dyYW0oXHJcbiAgICAgICAgZ2wsXHJcbiAgICAgICAgdmVydGV4X3NoYWRlcl8zZCxcclxuICAgICAgICBmcmFnbWVudF9zaGFkZXJfdGV4dHVyZVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIGlmICh0ZXh0dXJlVHlwZSA9PT0gXCIyXCIpIHtcclxuICAgICAgY3JlYXRlRW52aXJvbm1lbnRUZXh0dXJlKGdsKTtcclxuICAgICAgb2JqZWN0LnByb2dyYW0gPSBjcmVhdGVTaGFkZXJQcm9ncmFtKFxyXG4gICAgICAgIGdsLFxyXG4gICAgICAgIHZlcnRleF9zaGFkZXJfM2QsXHJcbiAgICAgICAgZnJhZ21lbnRfc2hhZGVyX2Vudmlyb25tZW50XHJcbiAgICAgIClcclxuICAgIH0gZWxzZSBpZiAodGV4dHVyZVR5cGUgPT09IFwiM1wiKSB7XHJcbiAgICAgIGNyZWF0ZUJ1bXBUZXh0dXJlKGdsKTtcclxuICAgICAgb2JqZWN0LnByb2dyYW0gPSBjcmVhdGVTaGFkZXJQcm9ncmFtKFxyXG4gICAgICAgIGdsLFxyXG4gICAgICAgIHZlcnRleF9zaGFkZXJfM2QsXHJcbiAgICAgICAgZnJhZ21lbnRfc2hhZGVyX2J1bXBcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmIChvYmplY3QuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICBjaGFuZ2VNYXBwaW5nVGV4dHVyZShvYmplY3QuY2hpbGRyZW4sIHRleHR1cmVUeXBlKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmFtZVRhcmdldCAobmV3TmFtZSkge1xyXG4gIGZvciggbGV0IGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICBpZihvYmplY3RzW2ldLm5hbWUgPT09IHRhcmdldC5uYW1lKXtcclxuICAgICAgY29uc29sZS5sb2cob2JqZWN0c1tpXS5uYW1lKVxyXG4gICAgICBjb25zb2xlLmxvZyhuZXdOYW1lKVxyXG4gICAgICBvYmplY3RzW2ldLm5hbWUgPSBuZXdOYW1lO1xyXG4gICAgfVxyXG4gIH1cclxuICB0YXJnZXQubmFtZSA9IG5ld05hbWU7XHJcbiAgY2xlYXJDb21wb25lbnQoKTtcclxuICBkaXNwbGF5Q29tcG9uZW50KDAsIG9iamVjdHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlTm9kZSAobmFtZSkge1xyXG4gIGZ1bmN0aW9uIHJlbW92ZU5vZGUgKG5vZGUpIHtcclxuICAgIGlmIChub2RlLm5hbWUgPT09IG5hbWUpIHtcclxuICAgICAgb2JqZWN0cy5zcGxpY2Uob2JqZWN0cy5pbmRleE9mKG5vZGUpLCAxKTtcclxuICAgICAgbm9kZU5hbWUudmFsdWUgPSBcIlwiXHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gXHJcblxyXG4gICAgaWYgKG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAobm9kZS5jaGlsZHJlbltpXS5uYW1lID09PSBuYW1lKSB7XHJcbiAgICAgICAgICBub2RlLmNoaWxkcmVuLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgIG5vZGVOYW1lLnZhbHVlID0gXCJcIlxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZW1vdmVOb2RlKG5vZGUuY2hpbGRyZW5baV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlTm9kZShvYmplY3RzWzBdKTtcclxuICBjb25zb2xlLmxvZyhvYmplY3RzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5vZGUgKCkge1xyXG4gIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSgpOyBcclxuICBjdWJlQ291bnQrKztcclxuICBjaGVja05vZGUob2JqZWN0cywgXCJuZXdDdWJlXCIgKyBjdWJlQ291bnQpO1xyXG4gIG5ld05vZGUubmFtZSA9IFwibmV3Q3ViZVwiICsgY3ViZUNvdW50O1xyXG4gIG5ld05vZGUubW9kZWwgPSBib3hNb2RlbCgxLCAxLCAxLCBbMCwgMCwgMF0pO1xyXG4gIG5ld05vZGUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMCwgMCwgMF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgfTtcclxuICBuZXdOb2RlLnBpY2tlZENvbG9yID0gcmFuZG9tQ29sb3JzKCksXHJcbiAgbmV3Tm9kZS5kaWZmdXNlID0gWzEsMSwxXSxcclxuICBuZXdOb2RlLnNwZWN1bGFyID0gWzEsMSwxXSxcclxuICBuZXdOb2RlLmFtYmllbnQgPSBbMSwxLDFdLFxyXG4gIG5ld05vZGUuc2hpbmluZXNzID0gMSxcclxuICBuZXdOb2RlLmNvbnN0ID0ge1xyXG4gICAgICBrZDogMC41LFxyXG4gICAgICBrczogMC4wLFxyXG4gICAgICBrYTogMS4wLFxyXG4gIH1cclxuICBuZXdOb2RlLnZpZXdNYXRyaXggPSB7XHJcbiAgICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgICAgdXA6IFswLCAxLCAwXSxcclxuICAgICAgbmVhcjogMC4xLFxyXG4gICAgICBmYXI6IDUwLFxyXG4gIH07XHJcbiAgbmV3Tm9kZS5hbmltYXRpb24gPSB7XHJcbiAgICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgfTtcclxuICBuZXdOb2RlLndvcmxkTWF0cml4ID0gdGFyZ2V0LndvcmxkTWF0cml4O1xyXG4gIGlmIChvYmplY3RzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgbmV3Tm9kZS5zZXRQYXJlbnQodGFyZ2V0KTtcclxuICB9IGVsc2Uge1xyXG4gICAgb2JqZWN0cy5wdXNoKG5ld05vZGUpO1xyXG4gICAgdGFyZ2V0ID0gb2JqZWN0c1swXTtcclxuICAgIHRhcmdldFJvb3QgPSBvYmplY3RzWzBdO1xyXG4gICAgY29uc29sZS5sb2cob2JqZWN0cylcclxuICB9XHJcbiAgY2xlYXJDb21wb25lbnQoKTtcclxuICBkaXNwbGF5Q29tcG9uZW50KDAsIG9iamVjdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja05vZGUob2JqZWN0cywgbmFtZSkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKG9iamVjdHNbaV0ubmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICBjdWJlQ291bnQrKztcclxuICAgIH1cclxuICAgIGlmIChvYmplY3RzW2ldLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgY2hlY2tOb2RlKG9iamVjdHNbaV0uY2hpbGRyZW4sIG5hbWUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRPYmplY3RzKG9iamVjdHMpIHtcclxuICAgIHNldE9iamVjdHMob2JqZWN0cyk7XHJcbiAgICBzZXRUYXJnZXQob2JqZWN0c1swXSk7XHJcbiAgICBzZXRUYXJnZXRSb290KG9iamVjdHNbMF0pO1xyXG4gICAgY2xlYXJDb21wb25lbnQoKTtcclxuICAgIGRpc3BsYXlDb21wb25lbnQoMCwgb2JqZWN0cyk7XHJcbiAgICBoYW5kbGVUcmFuc2Zvcm0ob2JqZWN0c1swXSk7XHJcbiAgICBoYW5kbGVUb3RhbE1vZGVsRnJhbWUodGFyZ2V0Um9vdClcclxuICAgIGhhbmRsZVRvdGFsTm9kZUZyYW1lKHRhcmdldFJvb3QpXHJcbiAgICByZW5kZXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE1vZGVsKG9iamVjdCkge1xyXG4gIG1vZGVsLnB1c2gob2JqZWN0KTtcclxufSIsImltcG9ydCBWZWMzIGZyb20gXCIuL21hdGgvVmVjMy5qc1wiXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVWZXJ0aWNlcyhoZWlnaHQsIHdpZHRoLCBkZXB0aCwgb2Zmc2V0KSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIFtvZmZzZXRbMF0gLSB3aWR0aCAvIDIsIG9mZnNldFsxXSAtIGhlaWdodCAvIDIsIG9mZnNldFsyXSAtIGRlcHRoIC8gMl0sXHJcbiAgICBbb2Zmc2V0WzBdICsgd2lkdGggLyAyLCBvZmZzZXRbMV0gLSBoZWlnaHQgLyAyLCBvZmZzZXRbMl0gLSBkZXB0aCAvIDJdLFxyXG4gICAgW29mZnNldFswXSAtIHdpZHRoIC8gMiwgb2Zmc2V0WzFdICsgaGVpZ2h0IC8gMiwgb2Zmc2V0WzJdIC0gZGVwdGggLyAyXSxcclxuICAgIFtvZmZzZXRbMF0gKyB3aWR0aCAvIDIsIG9mZnNldFsxXSArIGhlaWdodCAvIDIsIG9mZnNldFsyXSAtIGRlcHRoIC8gMl0sXHJcbiAgICBbb2Zmc2V0WzBdIC0gd2lkdGggLyAyLCBvZmZzZXRbMV0gLSBoZWlnaHQgLyAyLCBvZmZzZXRbMl0gKyBkZXB0aCAvIDJdLFxyXG4gICAgW29mZnNldFswXSArIHdpZHRoIC8gMiwgb2Zmc2V0WzFdIC0gaGVpZ2h0IC8gMiwgb2Zmc2V0WzJdICsgZGVwdGggLyAyXSxcclxuICAgIFtvZmZzZXRbMF0gLSB3aWR0aCAvIDIsIG9mZnNldFsxXSArIGhlaWdodCAvIDIsIG9mZnNldFsyXSArIGRlcHRoIC8gMl0sXHJcbiAgICBbb2Zmc2V0WzBdICsgd2lkdGggLyAyLCBvZmZzZXRbMV0gKyBoZWlnaHQgLyAyLCBvZmZzZXRbMl0gKyBkZXB0aCAvIDJdLFxyXG4gIF1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlRmFjZXMoKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIFsxLCAzLCAyXSxcclxuICAgIFs0LCAyLCAzXSxcclxuICAgIFsxLCAyLCA1XSxcclxuICAgIFs2LCA1LCAyXSxcclxuICAgIFsxLCA1LCAzXSxcclxuICAgIFs1LCA3LCAzXSxcclxuICAgIFsyLCA0LCA2XSxcclxuICAgIFs4LCA2LCA0XSxcclxuICAgIFs0LCAzLCA4XSxcclxuICAgIFs3LCA4LCAzXSxcclxuICAgIFs1LCA2LCA3XSxcclxuICAgIFs4LCA3LCA2XSxcclxuICBdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVGV4Q29vciAoKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIDEsIDEsIDEsIDAsIDAsIDEsIDAsIDAsIDAsIDEsIDEsIDAsXHJcblxyXG4gICAgMCwgMSwgMSwgMSwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMSxcclxuXHJcbiAgICAwLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLFxyXG5cclxuICAgIDEsIDEsIDEsIDAsIDAsIDEsIDAsIDAsIDAsIDEsIDEsIDAsXHJcblxyXG4gICAgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMSwgMSwgMCwgMCxcclxuXHJcbiAgICAwLCAxLCAxLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAxLCAxLFxyXG4gIF1cclxufVxyXG5mdW5jdGlvbiBnZW5lcmF0ZVRhbmdlbnRzKCkge1xyXG4gIHJldHVybiBbXHJcbiAgICAvL2JhY2tcclxuICAgIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsXHJcbiAgICAvL2JvdHRvbVxyXG4gICAgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCxcclxuICAgIC8vbGVmdFxyXG4gICAgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCxcclxuICAgIC8vcmlnaHRcclxuICAgIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsXHJcbiAgICAvL3RvcFxyXG4gICAgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCxcclxuICAgIC8vZnJvbnRcclxuICAgIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsXHJcbiAgXVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUJpdGFuZ2VudHMoKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSxcclxuICAgICAgICAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLFxyXG4gICAgICAgIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsXHJcbiAgICAgICAgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCwgLTEsIDAsIDAsIC0xLCAwLCAwLCAtMSwgMCwgMCxcclxuICAgICAgICAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLFxyXG4gICAgXVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVOb3JtYWxzKHZlcnRpY2VzLCBmYWNlcykge1xyXG4gIGxldCBub3JtYWxzID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmYWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IGZhY2UgPSBmYWNlc1tpXTtcclxuICAgIGxldCB2MSA9IFZlYzMuZnJvbUFycmF5KHZlcnRpY2VzW2ZhY2VbMF0gLSAxXSlcclxuICAgIGxldCB2MiA9IFZlYzMuZnJvbUFycmF5KHZlcnRpY2VzW2ZhY2VbMV0gLSAxXSlcclxuICAgIGxldCB2MyA9IFZlYzMuZnJvbUFycmF5KHZlcnRpY2VzW2ZhY2VbMl0gLSAxXSlcclxuXHJcbiAgICBsZXQgdjF2MiA9IFZlYzMuc3ViKHYyLCB2MSk7XHJcbiAgICBsZXQgdjF2MyA9IFZlYzMuc3ViKHYzLHYxKTtcclxuXHJcbiAgICBsZXQgcmVzID0gVmVjMy51bml0VmVjdG9yKFZlYzMuY3Jvc3ModjF2Mix2MXYzKSkuYXNBcnJheSgpXHJcbiAgICBub3JtYWxzLnB1c2gocmVzKTtcclxuICAgIG5vcm1hbHMucHVzaChyZXMpO1xyXG4gICAgbm9ybWFscy5wdXNoKHJlcyk7XHJcbiAgfVxyXG4gIHJldHVybiBub3JtYWxzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbG9ycyh2ZXJ0aWNlcywgY29sb3IgPSBudWxsKSB7XHJcbiAgbGV0IGNvbG9ycyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpICs9IDMpIHtcclxuICAgIHZhciBjID0gY29sb3I7XHJcbiAgICBpZiAoY29sb3IgPT0gbnVsbCkge1xyXG4gICAgICBjID0gW01hdGgucmFuZG9tKCksIE1hdGgucmFuZG9tKCksIE1hdGgucmFuZG9tKCldO1xyXG4gICAgfSBcclxuICAgIGNvbG9ycy5wdXNoKGMpO1xyXG4gICAgY29sb3JzLnB1c2goYyk7XHJcbiAgICBjb2xvcnMucHVzaChjKTtcclxuICAgIGNvbG9ycy5wdXNoKGMpO1xyXG4gICAgY29sb3JzLnB1c2goYyk7XHJcbiAgICBjb2xvcnMucHVzaChjKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvbG9ycztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYm94TW9kZWwoaGVpZ2h0LCB3aWR0aCwgZGVwdGgsIG9mZnNldCkge1xyXG5cclxuICBsZXQgdmVydGljZXMgPSBnZW5lcmF0ZVZlcnRpY2VzKGhlaWdodCwgd2lkdGgsIGRlcHRoLCBvZmZzZXQpO1xyXG4gIGxldCBjZW50ZXIgPSBbb2Zmc2V0WzBdLCBvZmZzZXRbMV0sIG9mZnNldFsyXV07XHJcbiAgbGV0IGZhY2VzID0gZ2VuZXJhdGVGYWNlcygpO1xyXG4gIGxldCB0ZXhDb29yZCA9IGdlbmVyYXRlVGV4Q29vcigpO1xyXG4gIGxldCBub3JtYWxzID0gZ2VuZXJhdGVOb3JtYWxzKHZlcnRpY2VzLCBmYWNlcyk7XHJcbiAgdmVydGljZXMgPSB0b1ZlcnRpY2VzKHZlcnRpY2VzLCBmYWNlcyk7XHJcblxyXG4gIGxldCB0YW5nZW50cyA9IGdlbmVyYXRlVGFuZ2VudHMoKTtcclxuICBsZXQgYml0YW5nZW50cyA9IGdlbmVyYXRlQml0YW5nZW50cygpO1xyXG4gIGxldCBjb2xvcnMgPSBnZW5lcmF0ZUNvbG9ycyh2ZXJ0aWNlcyk7XHJcbiAgXHJcbiAgcmV0dXJuIHtcclxuICAgIHZlcnRpY2VzOiB2ZXJ0aWNlcyxcclxuICAgIGZhY2VzOiBmYWNlcyxcclxuICAgIHRhbmdlbnRzOiB0YW5nZW50cyxcclxuICAgIGJpdGFuZ2VudHM6IGJpdGFuZ2VudHMsXHJcbiAgICBub3JtYWxzOiBub3JtYWxzLFxyXG4gICAgY29sb3JzOiBjb2xvcnMsXHJcbiAgICB0ZXhDb29yZDogdGV4Q29vcmQsXHJcbiAgICBjZW50ZXIgOiBjZW50ZXJcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBWZWM0IGZyb20gXCIuL1ZlYzQuanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0NHtcclxuICAgIHN0YXRpYyBnZXRFbXB0eSgpe1xyXG4gICAgICAgIHJldHVybiBbMCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMF1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0SWRlbnRpdHkoKXtcclxuICAgICAgICByZXR1cm4gWzEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDFdO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgZ2V0VHJhbnNsYXRpb24oeCwgeSwgeil7XHJcbiAgICAgICAgcmV0dXJuIFsxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICB4LCB5LCB6LCAxXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0U2NhbGUoeCwgeSwgeil7XHJcbiAgICAgICAgcmV0dXJuIFt4LCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgeSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIHosIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAxXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Um90YXRpb25YKHRoZXRhKXtcclxuICAgICAgICByZXR1cm4gWzEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCBNYXRoLmNvcyh0aGV0YSksIC1NYXRoLnNpbih0aGV0YSksIDAsXHJcbiAgICAgICAgICAgICAgICAwLCBNYXRoLnNpbih0aGV0YSksIE1hdGguY29zKHRoZXRhKSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRSb3RhdGlvblkodGhldGEpe1xyXG4gICAgICAgIHJldHVybiBbTWF0aC5jb3ModGhldGEpLCAwLCBNYXRoLnNpbih0aGV0YSksIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgLU1hdGguc2luKHRoZXRhKSwgMCwgTWF0aC5jb3ModGhldGEpLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMV07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFJvdGF0aW9uWih0aGV0YSl7XHJcbiAgICAgICAgcmV0dXJuIFtNYXRoLmNvcyh0aGV0YSksIC1NYXRoLnNpbih0aGV0YSksIDAsIDAsXHJcbiAgICAgICAgICAgICAgICBNYXRoLnNpbih0aGV0YSksIE1hdGguY29zKHRoZXRhKSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAxXTtcclxuICAgIH0gICBcclxuICAgIFxyXG4gICAgc3RhdGljIHRyYW5zcG9zZShhKSB7XHJcbiAgICAgICAgaWYgKCFhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsOyAvLyBvciByZXR1cm4gYSBkZWZhdWx0IG1hdHJpeCBvciBoYW5kbGUgdGhlIG51bGwgY2FzZSBhcHByb3ByaWF0ZWx5XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIGFbMF0sIGFbNF0sIGFbOF0sIGFbMTJdLFxyXG4gICAgICAgICAgICBhWzFdLCBhWzVdLCBhWzldLCBhWzEzXSxcclxuICAgICAgICAgICAgYVsyXSwgYVs2XSwgYVsxMF0sIGFbMTRdLFxyXG4gICAgICAgICAgICBhWzNdLCBhWzddLCBhWzExXSwgYVsxNV1cclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpbnZlcnNlKGEpIHtcclxuICAgICAgICB2YXIgYTAwID0gYVswICogNCArIDBdO1xyXG4gICAgICAgIHZhciBhMDEgPSBhWzAgKiA0ICsgMV07XHJcbiAgICAgICAgdmFyIGEwMiA9IGFbMCAqIDQgKyAyXTtcclxuICAgICAgICB2YXIgYTAzID0gYVswICogNCArIDNdO1xyXG4gICAgICAgIHZhciBhMTAgPSBhWzEgKiA0ICsgMF07XHJcbiAgICAgICAgdmFyIGExMSA9IGFbMSAqIDQgKyAxXTtcclxuICAgICAgICB2YXIgYTEyID0gYVsxICogNCArIDJdO1xyXG4gICAgICAgIHZhciBhMTMgPSBhWzEgKiA0ICsgM107XHJcbiAgICAgICAgdmFyIGEyMCA9IGFbMiAqIDQgKyAwXTtcclxuICAgICAgICB2YXIgYTIxID0gYVsyICogNCArIDFdO1xyXG4gICAgICAgIHZhciBhMjIgPSBhWzIgKiA0ICsgMl07XHJcbiAgICAgICAgdmFyIGEyMyA9IGFbMiAqIDQgKyAzXTtcclxuICAgICAgICB2YXIgYTMwID0gYVszICogNCArIDBdO1xyXG4gICAgICAgIHZhciBhMzEgPSBhWzMgKiA0ICsgMV07XHJcbiAgICAgICAgdmFyIGEzMiA9IGFbMyAqIDQgKyAyXTtcclxuICAgICAgICB2YXIgYTMzID0gYVszICogNCArIDNdO1xyXG4gICAgICAgIHZhciBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTA7XHJcbiAgICAgICAgdmFyIGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMDtcclxuICAgICAgICB2YXIgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwO1xyXG4gICAgICAgIHZhciBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTE7XHJcbiAgICAgICAgdmFyIGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMTtcclxuICAgICAgICB2YXIgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyO1xyXG4gICAgICAgIHZhciBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzA7XHJcbiAgICAgICAgdmFyIGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMDtcclxuICAgICAgICB2YXIgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwO1xyXG4gICAgICAgIHZhciBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzE7XHJcbiAgICAgICAgdmFyIGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMTtcclxuICAgICAgICB2YXIgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyO1xyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XHJcbiAgICAgICAgdmFyIGRldCA9XHJcbiAgICAgICAgYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xyXG5cclxuICAgICAgICBpZiAoIWRldCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZXQgPSAxLjAgLyBkZXQ7XHJcblxyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIChhMTEgKiBiMTEgLSBhMTIgKiBiMTAgKyBhMTMgKiBiMDkpICogZGV0LFxyXG4gICAgICAgICAgICAoYTAyICogYjEwIC0gYTAxICogYjExIC0gYTAzICogYjA5KSAqIGRldCxcclxuICAgICAgICAgICAgKGEzMSAqIGIwNSAtIGEzMiAqIGIwNCArIGEzMyAqIGIwMykgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMjIgKiBiMDQgLSBhMjEgKiBiMDUgLSBhMjMgKiBiMDMpICogZGV0LFxyXG4gICAgICAgICAgICAoYTEyICogYjA4IC0gYTEwICogYjExIC0gYTEzICogYjA3KSAqIGRldCxcclxuICAgICAgICAgICAgKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMzIgKiBiMDIgLSBhMzAgKiBiMDUgLSBhMzMgKiBiMDEpICogZGV0LFxyXG4gICAgICAgICAgICAoYTIwICogYjA1IC0gYTIyICogYjAyICsgYTIzICogYjAxKSAqIGRldCxcclxuICAgICAgICAgICAgKGExMCAqIGIxMCAtIGExMSAqIGIwOCArIGExMyAqIGIwNikgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMDEgKiBiMDggLSBhMDAgKiBiMTAgLSBhMDMgKiBiMDYpICogZGV0LFxyXG4gICAgICAgICAgICAoYTMwICogYjA0IC0gYTMxICogYjAyICsgYTMzICogYjAwKSAqIGRldCxcclxuICAgICAgICAgICAgKGEyMSAqIGIwMiAtIGEyMCAqIGIwNCAtIGEyMyAqIGIwMCkgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMTEgKiBiMDcgLSBhMTAgKiBiMDkgLSBhMTIgKiBiMDYpICogZGV0LFxyXG4gICAgICAgICAgICAoYTAwICogYjA5IC0gYTAxICogYjA3ICsgYTAyICogYjA2KSAqIGRldCxcclxuICAgICAgICAgICAgKGEzMSAqIGIwMSAtIGEzMCAqIGIwMyAtIGEzMiAqIGIwMCkgKiBkZXQsXHJcbiAgICAgICAgICAgIChhMjAgKiBiMDMgLSBhMjEgKiBiMDEgKyBhMjIgKiBiMDApICogZGV0LFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRyYW5zbGF0ZSAodHgsIHR5LCB0eikge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIDEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgIHR4LCB0eSwgdHosIDFcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybiBiICogYVxyXG4gICAgc3RhdGljIG11bHRpcGx5KGEsIGIpe1xyXG4gICAgICAgIGxldCByZXMgPSBNYXQ0LmdldEVtcHR5KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyArK2kpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyArK2opIHtcclxuICAgICAgICAgICAgICAgIHJlc1tpICogNCArIGpdID0gVmVjNC5kb3QoTWF0NC5nZXRSb3coYiwgaSksIE1hdDQuZ2V0Q29sdW1uKGEsIGopKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJvdGF0ZVgocmFkKSB7XHJcbiAgICAgICAgdmFyIHNpbiA9IE1hdGguc2luKHJhZCk7XHJcbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKHJhZCk7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgY29zLCBzaW4sIDAsXHJcbiAgICAgICAgICAgIDAsIC1zaW4sIGNvcywgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJvdGF0ZVkocmFkKSB7XHJcbiAgICAgICAgdmFyIHNpbiA9IE1hdGguc2luKHJhZCk7XHJcbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKHJhZCk7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgY29zLCAwLCAtc2luLCAwLFxyXG4gICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICBzaW4sIDAsIGNvcywgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJvdGF0ZVoocmFkKSB7XHJcbiAgICAgICAgdmFyIHNpbiA9IE1hdGguc2luKHJhZCk7XHJcbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKHJhZCk7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgY29zLCBzaW4sIDAsIDAsXHJcbiAgICAgICAgICAgIC1zaW4sIGNvcywgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNjYWxlIChzeCwgc3ksIHN6KSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgc3gsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIHN5LCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCBzeiwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXRpbHNcclxuICAgIHN0YXRpYyBnZXRSb3cobWF0cml4LCByb3cpe1xyXG4gICAgICAgIC8vIHVzZSBWZWM0IHRvIGdldCB0aGUgcm93XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWM0KG1hdHJpeFtyb3cgKiA0XSwgbWF0cml4W3JvdyAqIDQgKyAxXSwgbWF0cml4W3JvdyAqIDQgKyAyXSwgbWF0cml4W3JvdyAqIDQgKyAzXSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldENvbHVtbihtYXRyaXgsIGNvbHVtbil7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWM0KG1hdHJpeFtjb2x1bW5dLCBtYXRyaXhbY29sdW1uICsgNF0sIG1hdHJpeFtjb2x1bW4gKyA4XSwgbWF0cml4W2NvbHVtbiArIDEyXSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWZWMze1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgeil7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMueiA9IHo7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYWRkKGEsIGIpe1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjMyhhLnggKyBiLngsIGEueSArIGIueSwgYS56ICsgYi56KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc3ViKGEsIGIpe1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjMyhhLnggLSBiLngsIGEueSAtIGIueSwgYS56IC0gYi56KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZG90KGEsIGIpe1xyXG4gICAgICAgIHJldHVybiBhLnggKiBiLnggKyBhLnkgKiBiLnkgKyBhLnogKiBiLno7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyb3NzKGEsIGIpe1xyXG4gICAgICAgIC8vIHJldHVybiBuZXcgVmVjMyhhLnogKiBiLnkgLSBhLnkgKiBiLnosIGEueCAqIGIueiAtIGEueiAqIGIueCAsYS55ICogYi54IC0gYS54ICogYi55KTtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzMoYS55ICogYi56IC0gYS56ICogYi55LCBhLnogKiBiLnggLSBhLnggKiBiLnogLGEueCAqIGIueSAtIGEueSAqIGIueCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5vcm0oYSl7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChhLnggKiBhLnggKyBhLnkgKiBhLnkgKyBhLnogKiBhLnopO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1bml0VmVjdG9yKGEpe1xyXG4gICAgICAgIGxldCBub3JtID0gVmVjMy5ub3JtKGEpO1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjMyhhLnggLyBub3JtLCBhLnkgLyBub3JtLCBhLnogLyBub3JtKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGFzQXJyYXkoKXsgIFxyXG4gICAgICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnksIHRoaXMuel07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZyb21BcnJheShhcnJheSl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWMzKGFycmF5WzBdLCBhcnJheVsxXSwgYXJyYXlbMl0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFZlYzMgZnJvbSBcIi4vVmVjMy5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjNHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIHosIHcpe1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLnogPSB6O1xyXG4gICAgICAgIHRoaXMudyA9IHc7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYWRkKGEsIGIpe1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjNChhLnggKyBiLngsIGEueSArIGIueSwgYS56ICsgYi56LCBhLncgKyBiLncpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkb3QoYSwgYil7XHJcbiAgICAgICAgbGV0IHJlcyA9IGEueCAqIGIueCArIGEueSAqIGIueSArIGEueiAqIGIueiArIGEudyAqIGIud1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG5vcm0oYSl7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChhLnggKiBhLnggKyBhLnkgKiBhLnkgKyBhLnogKiBhLnogKyBhLncgKiBhLncpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBub3JtYWxpemUoYSl7XHJcbiAgICAgICAgbGV0IG5vcm0gPSBWZWM0Lm5vcm0oYSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWM0KGEueCAvIG5vcm0sIGEueSAvIG5vcm0sIGEueiAvIG5vcm0sIGEudyAvIG5vcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc1ZlYzMoYSl7ICAgXHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWMzKGEueCwgYS55LCBhLnopO1xyXG4gICAgfVxyXG5cclxuICAgIGFzQXJyYXkoKXsgIFxyXG4gICAgICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnksIHRoaXMueiwgdGhpcy53XTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZnJvbUFycmF5KGFycmF5KXtcclxuICAgICAgICByZXR1cm4gbmV3IFZlYzQoYXJyYXlbMF0sIGFycmF5WzFdLCBhcnJheVsyXSwgYXJyYXlbM10pO1xyXG4gICAgfVxyXG5cclxufSIsIlxyXG5leHBvcnQgZnVuY3Rpb24gZGVnVG9SYWQoZGVncmVlcyl7XHJcbiAgICByZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XHJcbn0gICBcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYWRUb0RlZyhyYWRpYW5zKXtcclxuICAgIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcclxufSIsImltcG9ydCBOb2RlIGZyb20gXCIuLi9ub2RlLmpzXCI7XHJcbmltcG9ydCB7IGRlZ1RvUmFkIH0gZnJvbSBcIi4uL21hdGgvbWF0aFV0aWxzLmpzXCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uL3V0aWxzL0FuaW1hdGlvbi5qc1wiO1xyXG5pbXBvcnQgYm94TW9kZWwgZnJvbSBcIi4uL2JveE1vZGVsLmpzXCI7XHJcblxyXG4vLyBDcmVhdGUgdGhlIGNoaWNrZW4gYm9keSBub2RlXHJcbmNvbnN0IGNoaWNrZW4gPSBuZXcgTm9kZSgpO1xyXG5jaGlja2VuLmZsYWcgPSBcImFydGljdWxhdGVkXCI7XHJcbmNoaWNrZW4ubmFtZSA9IFwiY2hpY2tlblwiO1xyXG5jaGlja2VuLm1vZGVsID0gYm94TW9kZWwoMSwgMS41LCAxLCBbMCwgMCwgMF0pO1xyXG5jaGlja2VuLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgcm90YXRlOiBbNDIsIC01NSwgMjddLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuY2hpY2tlbi5waWNrZWRDb2xvciA9IFswLjksIDAuOSwgMF0sXHJcbmNoaWNrZW4uZGlmZnVzZSA9IFswLCAwLCAwXSxcclxuY2hpY2tlbi5zcGVjdWxhciA9IFswLCAwLCAwXSxcclxuY2hpY2tlbi5hbWJpZW50ID0gWzEsIDEsIDFdLFxyXG5jaGlja2VuLnNoaW5pbmVzcyA9IDEsXHJcbmNoaWNrZW4uY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxuY2hpY2tlbi52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gY2hpY2tlbkZyYW1lcygpe1xyXG4gICAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgICAgICB0cmFuc2xhdGU6IFswLCAwLCAwXSxcclxuICAgICAgICByb3RhdGU6IFtkZWdUb1JhZCg0MiksIGRlZ1RvUmFkKC01NSksIGRlZ1RvUmFkKDI3KV0sXHJcbiAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICAgIH1cclxuICAgIGxldCBmcmFtZXMgPSBbXVxyXG4gICAgZm9yKGxldCBrID0gMDsgayA8IDEwMDsgKytrKXtcclxuICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgX3RyYW5zZm9ybS50cmFuc2xhdGVbMF0gPSBrIC8gNTA7XHJcbiAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBmcmFtZXM7XHJcblxyXG59XHJcblxyXG5jaGlja2VuLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IGNoaWNrZW5GcmFtZXMoKSxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuLy8gQ3JlYXRlIHRoZSBoZWFkIG5vZGVcclxuY29uc3QgaGVhZCA9IG5ldyBOb2RlKCk7XHJcbmhlYWQubmFtZSA9IFwiaGVhZFwiO1xyXG5oZWFkLm1vZGVsID0gYm94TW9kZWwoMC42LCAwLjYsIDAuOCwgWzAsIDAsIDBdKTtcclxuaGVhZC50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLjc1LCAwLjc1LCAwXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuaGVhZC5waWNrZWRDb2xvciA9IFswLjksIDAuOSwgMF07XHJcbmhlYWQuZGlmZnVzZSA9IFswLCAwLCAwXTtcclxuaGVhZC5zcGVjdWxhciA9IFswLCAwLCAwXTtcclxuaGVhZC5hbWJpZW50ID0gWzEsIDEsIDFdO1xyXG5oZWFkLnNoaW5pbmVzcyA9IDEsXHJcbmhlYWQuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxuaGVhZC52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5oZWFkLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IG51bGwsXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogbnVsbCwgXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuLy8gQ3JlYXRlIHRoZSBiZWFrIG5vZGVcclxuY29uc3QgYmVhayA9IG5ldyBOb2RlKCk7XHJcbmJlYWsubmFtZSA9IFwiYmVha1wiO1xyXG5iZWFrLm1vZGVsID0gYm94TW9kZWwoMC4yLCAwLjIsIDAuMywgWy0wLjY1LCAtMC4xLCAwXSk7XHJcbmJlYWsudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMSwgMCwgMF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmJlYWsucGlja2VkQ29sb3IgPSBbMSwgMC41LCAwXTtcclxuYmVhay5kaWZmdXNlID0gWzAsIDAsIDBdO1xyXG5iZWFrLnNwZWN1bGFyID0gWzAsIDAsIDBdO1xyXG5iZWFrLmFtYmllbnQgPSBbMSwgMSwgMV07XHJcbmJlYWsuc2hpbmluZXNzID0gMSxcclxuYmVhay5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5iZWFrLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmJlYWsuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogbnVsbCxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBudWxsLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbmNvbnN0IHdoaXRlTGVmdEV5ZSA9IG5ldyBOb2RlKCk7XHJcbndoaXRlTGVmdEV5ZS5uYW1lID0gXCJ3aGl0ZUxlZnRFeWVcIjtcclxud2hpdGVMZWZ0RXllLm1vZGVsID0gYm94TW9kZWwoMC4wNzUsIDAuMSwgMC4xLCBbLTAuNzUsIDAuMiwgMC4xNV0pO1xyXG53aGl0ZUxlZnRFeWUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMS4wNCwgMCwgMF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbndoaXRlTGVmdEV5ZS5waWNrZWRDb2xvciA9IFswLjk5LCAwLjk5LCAwLjk5XTtcclxud2hpdGVMZWZ0RXllLmRpZmZ1c2UgPSBbMCwgMCwgMF07XHJcbndoaXRlTGVmdEV5ZS5zcGVjdWxhciA9IFswLCAwLCAwXTtcclxud2hpdGVMZWZ0RXllLmFtYmllbnQgPSBbMSwgMSwgMV07XHJcbndoaXRlTGVmdEV5ZS5zaGluaW5lc3MgPSAxLFxyXG53aGl0ZUxlZnRFeWUuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxud2hpdGVMZWZ0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbndoaXRlTGVmdEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBudWxsLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IG51bGwsXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuY29uc3QgYmxhY2tMZWZ0RXllID0gbmV3IE5vZGUoKTtcclxuYmxhY2tMZWZ0RXllLm5hbWUgPSBcImJsYWNrTGVmdEV5ZVwiO1xyXG5ibGFja0xlZnRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjA1LCAwLjA1LCAwLjA1LCBbLTAuNzUsIDAuMiwgMC4xNV0pO1xyXG5ibGFja0xlZnRFeWUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMC4wNiwgMCwgMF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmJsYWNrTGVmdEV5ZS5waWNrZWRDb2xvciA9IFswLCAwLCAwXTtcclxuYmxhY2tMZWZ0RXllLmRpZmZ1c2UgPSBbMCwgMCwgMF07XHJcbmJsYWNrTGVmdEV5ZS5zcGVjdWxhciA9IFswLCAwLCAwXTtcclxuYmxhY2tMZWZ0RXllLmFtYmllbnQgPSBbMSwgMSwgMV07XHJcbmJsYWNrTGVmdEV5ZS5zaGluaW5lc3MgPSAxLFxyXG5ibGFja0xlZnRFeWUuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxuYmxhY2tMZWZ0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmJsYWNrTGVmdEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBudWxsLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IG51bGwsXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG5cclxufTtcclxuXHJcbmNvbnN0IHdoaXRlUmlnaHRFeWUgPSBuZXcgTm9kZSgpO1xyXG53aGl0ZVJpZ2h0RXllLm5hbWUgPSBcIndoaXRlUmlnaHRFeWVcIjtcclxud2hpdGVSaWdodEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMDc1LCAwLjEsIDAuMSwgWy0wLjc1LCAwLjIsIDAuMTVdKTtcclxud2hpdGVSaWdodEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFsxLjA0LCAwLCAtMC4zMl0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbndoaXRlUmlnaHRFeWUucGlja2VkQ29sb3IgPSBbMC45OSwgMC45OSwgMC45OV07XHJcbndoaXRlUmlnaHRFeWUuZGlmZnVzZSA9IFswLCAwLCAwXTtcclxud2hpdGVSaWdodEV5ZS5zcGVjdWxhciA9IFswLCAwLCAwXTtcclxud2hpdGVSaWdodEV5ZS5hbWJpZW50ID0gWzEsIDEsIDFdO1xyXG53aGl0ZVJpZ2h0RXllLnNoaW5pbmVzcyA9IDEsXHJcbndoaXRlUmlnaHRFeWUuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxud2hpdGVSaWdodEV5ZS52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG53aGl0ZVJpZ2h0RXllLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IG51bGwsXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogbnVsbCxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcblxyXG59O1xyXG5cclxuY29uc3QgYmxhY2tSaWdodEV5ZSA9IG5ldyBOb2RlKCk7XHJcbmJsYWNrUmlnaHRFeWUubmFtZSA9IFwiYmxhY2tSaWdodEV5ZVwiO1xyXG5ibGFja1JpZ2h0RXllLm1vZGVsID0gYm94TW9kZWwoMC4wNSwgMC4wNSwgMC4wNSwgWy0wLjc1LCAwLjIsIDAuMTVdKTtcclxuYmxhY2tSaWdodEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLjA2LCAwLCAwXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuYmxhY2tSaWdodEV5ZS5waWNrZWRDb2xvciA9IFswLCAwLCAwXTtcclxuYmxhY2tSaWdodEV5ZS5kaWZmdXNlID0gWzAsIDAsIDBdO1xyXG5ibGFja1JpZ2h0RXllLnNwZWN1bGFyID0gWzAsIDAsIDBdO1xyXG5ibGFja1JpZ2h0RXllLmFtYmllbnQgPSBbMSwgMSwgMV07XHJcbmJsYWNrUmlnaHRFeWUuc2hpbmluZXNzID0gMSxcclxuYmxhY2tSaWdodEV5ZS5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5ibGFja1JpZ2h0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmJsYWNrUmlnaHRFeWUuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogbnVsbCxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBudWxsLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcblxyXG5cclxuLy8gQ3JlYXRlIHRoZSBsZWZ0IHdpbmcgbm9kZVxyXG5jb25zdCBsZWZ0V2luZyA9IG5ldyBOb2RlKCk7XHJcbmxlZnRXaW5nLm5hbWUgPSBcImxlZnRXaW5nXCI7XHJcbmxlZnRXaW5nLm1vZGVsID0gYm94TW9kZWwoMC41LCAwLjEsIDEsIFswLCAwLCAwXSk7XHJcbmxlZnRXaW5nLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAsIDAsIC0wLjc1XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDkwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmxlZnRXaW5nLnBpY2tlZENvbG9yID0gWzAuOSwgMC45LCAwXTtcclxubGVmdFdpbmcuZGlmZnVzZSA9IFswLCAwLCAwXTtcclxubGVmdFdpbmcuc3BlY3VsYXIgPSBbMCwgMCwgMF07XHJcbmxlZnRXaW5nLmFtYmllbnQgPSBbMSwgMSwgMV07XHJcbmxlZnRXaW5nLnNoaW5pbmVzcyA9IDEsXHJcbmxlZnRXaW5nLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmxlZnRXaW5nLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBsZWZ0V2luZ0ZyYW1lcygpe1xyXG5cclxuICAgIGxldCB0cmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgdHJhbnNsYXRlOiBbMCwgMCwgLTAuNzVdLFxyXG4gICAgICAgIHJvdGF0ZTogWzAsIDAsIE1hdGguUEkgLyAyXSxcclxuICAgICAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG4gICAgfVxyXG4gICAgbGV0IGZyYW1lcyA9IFtdXHJcbiAgICBmb3IobGV0IGsgPSAwOyBrIDwgNDsgKytrKXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDw9IDEyOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gLU1hdGguUEkgLyA5ICsgTWF0aC5QSS85ICogaSAvIDY7XHJcbiAgICAgICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpID0wIDsgaSA8PSAxMjsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IE1hdGguUEkgLyA5IC0gTWF0aC5QSS85ICogaSAvIDY7XHJcbiAgICAgICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGZyb20gLXBpLzkgdG8gMFxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8PSA2OyBpKyspe1xyXG4gICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IC1NYXRoLlBJIC8gOSArIE1hdGguUEkvOSAqIGkgLyA2O1xyXG4gICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pOyBcclxuICAgIH1cclxuICAgIHJldHVybiBmcmFtZXM7XHJcblxyXG59XHJcblxyXG5sZWZ0V2luZy5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBsZWZ0V2luZ0ZyYW1lcygpLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG4vLyBDcmVhdGUgdGhlIHJpZ2h0IHdpbmcgbm9kZVxyXG5jb25zdCByaWdodFdpbmcgPSBuZXcgTm9kZSgpO1xyXG5yaWdodFdpbmcubmFtZSA9IFwicmlnaHRXaW5nXCI7XHJcbnJpZ2h0V2luZy5tb2RlbCA9IGJveE1vZGVsKDAuNSwgMC4xLCAxLCBbMCwgMCwgMF0pO1xyXG5yaWdodFdpbmcudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMCwgMCwgMC43NV0sXHJcbiAgICByb3RhdGU6IFswLCAwLCA5MF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5yaWdodFdpbmcucGlja2VkQ29sb3IgPSBbMC45LCAwLjksIDBdO1xyXG5yaWdodFdpbmcuZGlmZnVzZSA9IFswLCAwLCAwXTtcclxucmlnaHRXaW5nLnNwZWN1bGFyID0gWzAsIDAsIDBdO1xyXG5yaWdodFdpbmcuYW1iaWVudCA9IFsxLCAxLCAxXTtcclxucmlnaHRXaW5nLnNoaW5pbmVzcyA9IDEsXHJcbnJpZ2h0V2luZy5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5yaWdodFdpbmcudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJpZ2h0V2luZ0ZyYW1lcygpe1xyXG4gICAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgICAgICB0cmFuc2xhdGU6IFswLCAwLCAwLjc1XSxcclxuICAgICAgICByb3RhdGU6IFswLCAwLCBNYXRoLlBJIC8gMl0sXHJcbiAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICAgIH1cclxuICAgIGxldCBmcmFtZXMgPSBbXVxyXG4gICAgZm9yKGxldCBrID0gMDsgayA8IDQ7ICsrayl7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8PSAxMjsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IE1hdGguUEkgLyA5IC0gTWF0aC5QSS85ICogaSAvIDY7XHJcbiAgICAgICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpID0wIDsgaSA8PSAxMjsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IC0gTWF0aC5QSSAvIDkgKyBNYXRoLlBJLzkgKiBpIC8gNjtcclxuICAgICAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZnJvbSBwaS82IHRvIDBcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gNjsgaSsrKXtcclxuICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSBNYXRoLlBJIC8gOSAtIE1hdGguUEkvOSAqIGkgLyA2O1xyXG4gICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pOyBcclxuICAgIH1cclxuICAgIHJldHVybiBmcmFtZXM7XHJcblxyXG59XHJcblxyXG5yaWdodFdpbmcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogcmlnaHRXaW5nRnJhbWVzKCksXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogQW5pbWF0aW9uLmFuaW1hdGlvblNjcmlwdCgpLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbi8vIENyZWF0ZSB0aGUgcmlnaHQgbGVnIG5vZGVcclxuY29uc3QgcmlnaHRMZWcgPSBuZXcgTm9kZSgpO1xyXG5yaWdodExlZy5uYW1lID0gXCJyaWdodExlZ1wiO1xyXG5yaWdodExlZy5tb2RlbCA9IGJveE1vZGVsKDAuNiwgMC4yLCAwLjIsIFswLCAwLCAwXSk7XHJcbnJpZ2h0TGVnLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWy0wLjUsIC0wLjgsIC0wLjM1XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRMZWcucGlja2VkQ29sb3IgPSBbMSwgMC41LCAwXTtcclxucmlnaHRMZWcuZGlmZnVzZSA9IFswLCAwLCAwXTtcclxucmlnaHRMZWcuc3BlY3VsYXIgPSBbMCwgMCwgMF07XHJcbnJpZ2h0TGVnLmFtYmllbnQgPSBbMSwgMSwgMV07XHJcbnJpZ2h0TGVnLnNoaW5pbmVzcyA9IDEsXHJcbnJpZ2h0TGVnLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbnJpZ2h0TGVnLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcblxyXG5mdW5jdGlvbiByaWdodExlZ0ZyYW1lcygpe1xyXG4gICAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgICAgICB0cmFuc2xhdGU6IFstMC41LCAtMC44LCAtMC4zNV0sXHJcbiAgICAgICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICAgIH1cclxuICAgIGxldCBmcmFtZXMgPSBbXVxyXG4gICAgZm9yKGxldCBrID0gMDsgayA8IDQ7ICsrayl7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8PSAxMjsgaSsrKXtcclxuICAgICAgICAgICAgLy8gYXBwZW5kIGZvciBhbmdsZSBwaS82IC0gcGkvMyAqIGkvMTIgdG8gZnJhbWVzXHJcbiAgICAgICAgICAgIC8vIGNsb25lIHRoZSB0cmFuc2Zvcm0gb2JqZWN0XHJcbiAgICAgICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMl0gPSBNYXRoLlBJIC8gNiAtIE1hdGguUEkvMyAqIGkgLyAxMjtcclxuICAgICAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGkgPTAgOyBpIDw9IDEyOyBpKyspe1xyXG4gICAgICAgICAgICAvLyBhcHBlbmQgZm9yIGFuZ2xlIHBpLzYgKiBpLzEyIHRvIGZyYW1lc1xyXG4gICAgICAgICAgICAvLyBjbG9uZSB0aGUgdHJhbnNmb3JtIG9iamVjdFxyXG4gICAgICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzJdID0gLSBNYXRoLlBJIC8gNiArIE1hdGguUEkvMyAqIGkgLyAxMjtcclxuICAgICAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZnJvbSBwaS82IHRvIDBcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gNjsgaSsrKXtcclxuICAgICAgICAvLyBhcHBlbmQgZm9yIGFuZ2xlIHBpLzYgLSBwaS8zICogaS8xMiB0byBmcmFtZXNcclxuICAgICAgICAvLyBjbG9uZSB0aGUgdHJhbnNmb3JtIG9iamVjdFxyXG4gICAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgICBfdHJhbnNmb3JtLnJvdGF0ZVsyXSA9IE1hdGguUEkgLyA2IC0gTWF0aC5QSS82ICogaSAvIDY7XHJcbiAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7IFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmcmFtZXM7XHJcbn1cclxuXHJcblxyXG5yaWdodExlZy5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzIDogcmlnaHRMZWdGcmFtZXMoKSxcclxuICAgIGN1cnJlbnRGcmFtZSA6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogQW5pbWF0aW9uLmFuaW1hdGlvblNjcmlwdCgpLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbi8vIGNyZXRlIHRoZSByaWdodCBmb290IG5vZGVcclxuY29uc3QgcmlnaHRGb290ID0gbmV3IE5vZGUoKTtcclxucmlnaHRGb290Lm5hbWUgPSBcInJpZ2h0Rm9vdFwiO1xyXG5yaWdodEZvb3QubW9kZWwgPSBib3hNb2RlbCgwLjEsIDAuNCwgMC4zLCBbMCwgMCwgMF0pO1xyXG5yaWdodEZvb3QudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMC4wMiwgLTAuMzQsIDBdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5yaWdodEZvb3QucGlja2VkQ29sb3IgPSBbMSwgMC41LCAwXTtcclxucmlnaHRGb290LmRpZmZ1c2UgPSBbMCwgMCwgMF07XHJcbnJpZ2h0Rm9vdC5zcGVjdWxhciA9IFswLCAwLCAwXTtcclxucmlnaHRGb290LmFtYmllbnQgPSBbMSwgMSwgMV07XHJcbnJpZ2h0Rm9vdC5zaGluaW5lc3MgPSAxLFxyXG5yaWdodEZvb3QuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxucmlnaHRGb290LnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbnJpZ2h0Rm9vdC5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBudWxsLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IG51bGwsXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuLy8gQ3JlYXRlIHRoZSBsZWZ0IGxlZyBub2RlXHJcbmNvbnN0IGxlZnRMZWcgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0TGVnLm5hbWUgPSBcImxlZnRMZWdcIjtcclxubGVmdExlZy5tb2RlbCA9IGJveE1vZGVsKDAuNiwgMC4yLCAwLjIsIFswLCAwLCAwXSk7XHJcbmxlZnRMZWcudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbLTAuNSwgLTAuOCwgMC4zNV0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmxlZnRMZWcucGlja2VkQ29sb3IgPSBbMSwgMC41LCAwXTtcclxubGVmdExlZy5kaWZmdXNlID0gWzAsIDAsIDBdO1xyXG5sZWZ0TGVnLnNwZWN1bGFyID0gWzAsIDAsIDBdO1xyXG5sZWZ0TGVnLmFtYmllbnQgPSBbMSwgMSwgMV07XHJcbmxlZnRMZWcuc2hpbmluZXNzID0gMSxcclxubGVmdExlZy5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5sZWZ0TGVnLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBsZWZ0TGVnRnJhbWVzKCl7XHJcbiAgICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgICAgIHRyYW5zbGF0ZTogWy0wLjUsIC0wLjgsIDAuMzVdLFxyXG4gICAgICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgICB9XHJcbiAgICBsZXQgZnJhbWVzID0gW11cclxuICAgIGZvcihsZXQgayA9IDA7IGsgPCA0OyArK2spe1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gMTI7IGkrKyl7XHJcbiAgICAgICAgICAgIC8vIGFwcGVuZCBmb3IgYW5nbGUgcGkvNiAtIHBpLzMgKiBpLzEyIHRvIGZyYW1lc1xyXG4gICAgICAgICAgICAvLyBjbG9uZSB0aGUgdHJhbnNmb3JtIG9iamVjdFxyXG4gICAgICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzJdID0gLSBNYXRoLlBJIC8gNiArIE1hdGguUEkvMyAqIGkgLyAxMjtcclxuICAgICAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGkgPTAgOyBpIDw9IDEyOyBpKyspe1xyXG4gICAgICAgICAgICAvLyBhcHBlbmQgZm9yIGFuZ2xlIHBpLzYgKiBpLzEyIHRvIGZyYW1lc1xyXG4gICAgICAgICAgICAvLyBjbG9uZSB0aGUgdHJhbnNmb3JtIG9iamVjdFxyXG4gICAgICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzJdID0gTWF0aC5QSSAvIDYgLSBNYXRoLlBJLzMgKiBpIC8gMTI7XHJcbiAgICAgICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGZyb20gLXBpLzYgdG8gMFxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8PSA2OyBpKyspe1xyXG4gICAgICAgIC8vIGFwcGVuZCBmb3IgYW5nbGUgcGkvNiAtIHBpLzMgKiBpLzEyIHRvIGZyYW1lc1xyXG4gICAgICAgIC8vIGNsb25lIHRoZSB0cmFuc2Zvcm0gb2JqZWN0XHJcbiAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzJdID0gLU1hdGguUEkgLyA2ICsgTWF0aC5QSS82ICogaSAvIDY7XHJcbiAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7IFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZyYW1lcztcclxufVxyXG5cclxubGVmdExlZy5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzIDogbGVmdExlZ0ZyYW1lcygpLFxyXG4gICAgY3VycmVudEZyYW1lIDogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuLy8gQ3JlYXRlIHRoZSBsZWZ0IGZvb3Qgbm9kZVxyXG5jb25zdCBsZWZ0Rm9vdCA9IG5ldyBOb2RlKCk7XHJcbmxlZnRGb290Lm5hbWUgPSBcImxlZnRGb290XCI7XHJcbmxlZnRGb290Lm1vZGVsID0gYm94TW9kZWwoMC4xLCAwLjQsIDAuMywgWzAsIDAsIDBdKTtcclxubGVmdEZvb3QudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMC4wMiwgLTAuMzQsIDBdLFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5sZWZ0Rm9vdC5waWNrZWRDb2xvciA9IFsxLCAwLjUsIDBdO1xyXG5sZWZ0Rm9vdC5kaWZmdXNlID0gWzAsIDAsIDBdO1xyXG5sZWZ0Rm9vdC5zcGVjdWxhciA9IFswLCAwLCAwXTtcclxubGVmdEZvb3QuYW1iaWVudCA9IFsxLCAxLCAxXTtcclxubGVmdEZvb3Quc2hpbmluZXNzID0gMSxcclxubGVmdEZvb3QuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxubGVmdEZvb3Qudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxubGVmdEZvb3QuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogbnVsbCxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBudWxsLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbi8vIENyZWF0ZSB0aGUgdGFpbCBub2RlXHJcbmNvbnN0IHRhaWwgPSBuZXcgTm9kZSgpO1xyXG50YWlsLm5hbWUgPSBcInRhaWxcIjtcclxuXHJcblxyXG4vLyBBc3NlbWJsZSB0aGUgY2hpY2tlbiBtb2RlbFxyXG4vLyBjaGlja2VuLmFkZENoaWxkKGhlYWQpO1xyXG4vLyBoZWFkLmFkZENoaWxkKGJlYWspO1xyXG4vLyBjaGlja2VuLmFkZENoaWxkKGxlZnRXaW5nKTtcclxuLy8gY2hpY2tlbi5hZGRDaGlsZChyaWdodFdpbmcpO1xyXG4vLyBjaGlja2VuLmFkZENoaWxkKGxlZnRMZWcpO1xyXG4vLyBjaGlja2VuLmFkZENoaWxkKHJpZ2h0TGVnKTtcclxuXHJcbi8vIEFzc2VtYmxlIHRoZSBjaGlja2VuIG1vZGVsXHJcbmhlYWQuc2V0UGFyZW50KGNoaWNrZW4pO1xyXG5iZWFrLnNldFBhcmVudChoZWFkKTtcclxud2hpdGVSaWdodEV5ZS5zZXRQYXJlbnQoaGVhZCk7XHJcbmJsYWNrUmlnaHRFeWUuc2V0UGFyZW50KHdoaXRlUmlnaHRFeWUpO1xyXG53aGl0ZUxlZnRFeWUuc2V0UGFyZW50KGhlYWQpO1xyXG5ibGFja0xlZnRFeWUuc2V0UGFyZW50KHdoaXRlTGVmdEV5ZSk7XHJcbmxlZnRXaW5nLnNldFBhcmVudChjaGlja2VuKTtcclxucmlnaHRXaW5nLnNldFBhcmVudChjaGlja2VuKTtcclxubGVmdExlZy5zZXRQYXJlbnQoY2hpY2tlbik7XHJcbmxlZnRGb290LnNldFBhcmVudChsZWZ0TGVnKTtcclxucmlnaHRMZWcuc2V0UGFyZW50KGNoaWNrZW4pO1xyXG5yaWdodEZvb3Quc2V0UGFyZW50KHJpZ2h0TGVnKTtcclxuXHJcblxyXG52YXIgY2hpY2tlbk1vZGVsID0gW1xyXG4gIGNoaWNrZW5cclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hpY2tlbk1vZGVsO1xyXG4iLCJpbXBvcnQgTm9kZSBmcm9tIFwiLi4vbm9kZS5qc1wiO1xyXG5pbXBvcnQgeyBkZWdUb1JhZCB9IGZyb20gXCIuLi9tYXRoL21hdGhVdGlscy5qc1wiO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuLi8uLi91dGlscy9BbmltYXRpb24uanNcIjtcclxuaW1wb3J0IGJveE1vZGVsLCB7Z2VuZXJhdGVGYWNlcywgZ2VuZXJhdGVOb3JtYWxzLCBnZW5lcmF0ZVZlcnRpY2VzfSBmcm9tIFwiLi4vYm94TW9kZWwuanNcIjtcclxuXHJcbmNvbnN0IGJvZHlDb2xvciA9IFswLjg4NiwgMC4zNDUsIDAuMTMzXTtcclxuY29uc3Qgd2hpdGVDb2xvciA9IFswLjk5LCAwLjk5LCAwLjk5XTtcclxuY29uc3QgYmxhY2tDb2xvciA9IFswLCAwLCAwXTtcclxuY29uc3QgYnJvd25Db2xvciA9IFswLjU0NSwgMC4yNzEsIDAuMDc1XTtcclxuXHJcbmNvbnN0IGZveCA9IG5ldyBOb2RlKCk7XHJcbmZveC5uYW1lID0gXCJmb3hcIjtcclxuZm94Lm1vZGVsID0gYm94TW9kZWwoMC42LCAwLjcsIDEsIFswLCAwLCAwXSk7IFxyXG5mb3gudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG4gIHJvdGF0ZTogWzMwLDQ1LCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5mb3gucGlja2VkQ29sb3IgPSBib2R5Q29sb3I7XHJcbmZveC5kaWZmdXNlID0gWzEsMSwxXSxcclxuZm94LnNwZWN1bGFyID0gWzEsMSwxXSxcclxuZm94LmFtYmllbnQgPSBbMSwxLDFdLFxyXG5mb3guc2hpbmluZXNzID0gMSxcclxuZm94LmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmZveC52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbmZveC5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBmcmFtZXM6IGZveEZyYW1lcygpLFxyXG4gIGN1cnJlbnRGcmFtZTogMCxcclxuICBhbmltYXRpb25GdW5jdGlvbjogQW5pbWF0aW9uLmFuaW1hdGlvblNjcmlwdCgpLFxyXG4gIGlzQXV0bzogZmFsc2UsXHJcbiAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZm94RnJhbWVzKCkge1xyXG4gIGxldCB0cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLCAwLCAwXSxcclxuICAgIHJvdGF0ZTogW2RlZ1RvUmFkKDMwKSwgZGVnVG9SYWQoNDUpLCBkZWdUb1JhZCgwKV0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG4gIH1cclxuICBsZXQgZnJhbWVzID0gW11cclxuICBmb3IobGV0IGsgPSAwOyBrIDwgNTA7ICsrayl7XHJcbiAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgX3RyYW5zZm9ybS50cmFuc2xhdGVbMF0gPSAgayAvIDUwIDtcclxuICAgICAgX3RyYW5zZm9ybS50cmFuc2xhdGVbMl0gPSAgayAvIDUwIDtcclxuICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZnJhbWVzO1xyXG5cclxufVxyXG5cclxuY29uc3QgaGVhZCA9IG5ldyBOb2RlKCk7XHJcbmhlYWQubmFtZSA9IFwiaGVhZFwiO1xyXG5oZWFkLm1vZGVsID0gYm94TW9kZWwoMC41LCAwLjUsIDAuNCwgWzAsIDAsIDBdKTtcclxuaGVhZC50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMCwgMC4xLCAwLjddLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5oZWFkLnBpY2tlZENvbG9yID0gYm9keUNvbG9yO1xyXG5oZWFkLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5oZWFkLnNwZWN1bGFyID0gWzEsMSwxXSxcclxuaGVhZC5hbWJpZW50ID0gWzEsMSwxXSxcclxuaGVhZC5zaGluaW5lc3MgPSAxLFxyXG5oZWFkLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmhlYWQudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5oZWFkLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IHdoaXRlUmlnaHRFeWUgPSBuZXcgTm9kZSgpO1xyXG53aGl0ZVJpZ2h0RXllLm5hbWUgPSBcIndoaXRlUmlnaHRFeWVcIjtcclxud2hpdGVSaWdodEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMSwgMC4xLCAwLjA1LCBbMCwgMCwgMF0pO1xyXG53aGl0ZVJpZ2h0RXllLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLjE1LCAwLjEsIDAuMl0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbndoaXRlUmlnaHRFeWUucGlja2VkQ29sb3IgPSB3aGl0ZUNvbG9yO1xyXG53aGl0ZVJpZ2h0RXllLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG53aGl0ZVJpZ2h0RXllLnNwZWN1bGFyID0gWzEsMSwxXSxcclxud2hpdGVSaWdodEV5ZS5hbWJpZW50ID0gWzEsMSwxXSxcclxud2hpdGVSaWdodEV5ZS5zaGluaW5lc3MgPSAxLFxyXG53aGl0ZVJpZ2h0RXllLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbndoaXRlUmlnaHRFeWUudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG53aGl0ZVJpZ2h0RXllLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IHdoaXRlTGVmdEV5ZSA9IG5ldyBOb2RlKCk7XHJcbndoaXRlTGVmdEV5ZS5uYW1lID0gXCJ3aGl0ZUxlZnRFeWVcIjtcclxud2hpdGVMZWZ0RXllLm1vZGVsID0gYm94TW9kZWwoMC4xLCAwLjEsIDAuMDUsIFswLCAwLCAwXSk7XHJcbndoaXRlTGVmdEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbLTAuMTUsIDAuMSwgMC4yXSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxud2hpdGVMZWZ0RXllLnBpY2tlZENvbG9yID0gd2hpdGVDb2xvcjtcclxud2hpdGVMZWZ0RXllLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG53aGl0ZUxlZnRFeWUuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG53aGl0ZUxlZnRFeWUuYW1iaWVudCA9IFsxLDEsMV0sXHJcbndoaXRlTGVmdEV5ZS5zaGluaW5lc3MgPSAxLFxyXG53aGl0ZUxlZnRFeWUuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxud2hpdGVMZWZ0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxud2hpdGVMZWZ0RXllLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IGJsYWNrUmlnaHRFeWUgPSBuZXcgTm9kZSgpO1xyXG5ibGFja1JpZ2h0RXllLm5hbWUgPSBcImJsYWNrUmlnaHRFeWVcIjtcclxuYmxhY2tSaWdodEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMSwgMC4wNiwgMC4wNSwgWzAsIDAsIDBdKTtcclxuYmxhY2tSaWdodEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbLTAuMDMsIDAsIDAuMDFdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5ibGFja1JpZ2h0RXllLnBpY2tlZENvbG9yID0gYmxhY2tDb2xvcjtcclxuYmxhY2tSaWdodEV5ZS5kaWZmdXNlID0gWzEsMSwxXSxcclxuYmxhY2tSaWdodEV5ZS5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbmJsYWNrUmlnaHRFeWUuYW1iaWVudCA9IFsxLDEsMV0sXHJcbmJsYWNrUmlnaHRFeWUuc2hpbmluZXNzID0gMSxcclxuYmxhY2tSaWdodEV5ZS5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5ibGFja1JpZ2h0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxuYmxhY2tSaWdodEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCBibGFja0xlZnRFeWUgPSBuZXcgTm9kZSgpO1xyXG5ibGFja0xlZnRFeWUubmFtZSA9IFwiYmxhY2tMZWZ0RXllXCI7XHJcbmJsYWNrTGVmdEV5ZS5tb2RlbCA9IGJveE1vZGVsKDAuMSwgMC4wNiwgMC4wNSwgWzAsIDAsIDBdKTtcclxuYmxhY2tMZWZ0RXllLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLjAzLCAwLCAwLjAxXSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuYmxhY2tMZWZ0RXllLnBpY2tlZENvbG9yID0gYmxhY2tDb2xvcjtcclxuYmxhY2tMZWZ0RXllLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5ibGFja0xlZnRFeWUuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5ibGFja0xlZnRFeWUuYW1iaWVudCA9IFsxLDEsMV0sXHJcbmJsYWNrTGVmdEV5ZS5zaGluaW5lc3MgPSAxLFxyXG5ibGFja0xlZnRFeWUuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxuYmxhY2tMZWZ0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxuYmxhY2tMZWZ0RXllLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IG5vc2UgPSBuZXcgTm9kZSgpO1xyXG5ub3NlLm5hbWUgPSBcIm5vc2VcIjtcclxubm9zZS5tb2RlbCA9IGJveE1vZGVsKDAuMTUsIDAuMywgMC4yLCBbMCwgMCwgMF0pO1xyXG5ub3NlLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLCAtMC4xLCAwLjNdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5ub3NlLnBpY2tlZENvbG9yID0gYmxhY2tDb2xvcjtcclxubm9zZS5kaWZmdXNlID0gWzEsMSwxXSxcclxubm9zZS5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbm5vc2UuYW1iaWVudCA9IFsxLDEsMV0sXHJcbm5vc2Uuc2hpbmluZXNzID0gMSxcclxubm9zZS5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5ub3NlLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxubm9zZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCB1bmRlcm5vc2UgPSBuZXcgTm9kZSgpO1xyXG51bmRlcm5vc2UubmFtZSA9IFwidW5kZXJub3NlXCI7XHJcbnVuZGVybm9zZS5tb2RlbCA9IGJveE1vZGVsKDAuMSwgMC4zLCAwLjIsIFswLCAwLCAwXSk7XHJcbnVuZGVybm9zZS50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMCwgLTAuMiwgMC4zXSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxudW5kZXJub3NlLnBpY2tlZENvbG9yID0gd2hpdGVDb2xvcjtcclxudW5kZXJub3NlLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG51bmRlcm5vc2Uuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG51bmRlcm5vc2UuYW1iaWVudCA9IFsxLDEsMV0sXHJcbnVuZGVybm9zZS5zaGluaW5lc3MgPSAxLFxyXG51bmRlcm5vc2UuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxudW5kZXJub3NlLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxudW5kZXJub3NlLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IHJpZ2h0RWFyID0gbmV3IE5vZGUoKTtcclxucmlnaHRFYXIubmFtZSA9IFwicmlnaHRFYXJcIjtcclxucmlnaHRFYXIubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC4xLCBbMCwgMCwgMF0pO1xyXG5yaWdodEVhci50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMC4xNSwgMC4zNSwgMF0sXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRFYXIucGlja2VkQ29sb3IgPSBibGFja0NvbG9yO1xyXG5yaWdodEVhci5kaWZmdXNlID0gWzEsMSwxXSxcclxucmlnaHRFYXIuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5yaWdodEVhci5hbWJpZW50ID0gWzEsMSwxXSxcclxucmlnaHRFYXIuc2hpbmluZXNzID0gMSxcclxucmlnaHRFYXIuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxucmlnaHRFYXIudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5yaWdodEVhci5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCBsZWZ0RWFyID0gbmV3IE5vZGUoKTtcclxubGVmdEVhci5uYW1lID0gXCJsZWZ0RWFyXCI7XHJcbmxlZnRFYXIubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC4xLCBbMCwgMCwgMF0pO1xyXG5sZWZ0RWFyLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFstMC4xNSwgMC4zNSwgMF0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmxlZnRFYXIucGlja2VkQ29sb3IgPSBibGFja0NvbG9yO1xyXG5sZWZ0RWFyLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5sZWZ0RWFyLnNwZWN1bGFyID0gWzEsMSwxXSxcclxubGVmdEVhci5hbWJpZW50ID0gWzEsMSwxXSxcclxubGVmdEVhci5zaGluaW5lc3MgPSAxLFxyXG5sZWZ0RWFyLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmxlZnRFYXIudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5sZWZ0RWFyLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IHJpZ2h0RnJvbnRMZWcgPSBuZXcgTm9kZSgpO1xyXG5yaWdodEZyb250TGVnLm5hbWUgPSBcInJpZ2h0RnJvbnRMZWdcIjtcclxucmlnaHRGcm9udExlZy5tb2RlbCA9IGJveE1vZGVsKDEsIDAuMiwgMC4xNSwgWzAsIDAsIDBdKTtcclxucmlnaHRGcm9udExlZy50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMC4yLCAtMC4yNSwgMC4yXSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxucmlnaHRGcm9udExlZy5waWNrZWRDb2xvciA9IGJsYWNrQ29sb3I7XHJcbnJpZ2h0RnJvbnRMZWcuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbnJpZ2h0RnJvbnRMZWcuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5yaWdodEZyb250TGVnLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5yaWdodEZyb250TGVnLnNoaW5pbmVzcyA9IDEsXHJcbnJpZ2h0RnJvbnRMZWcuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxucmlnaHRGcm9udExlZy52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbnJpZ2h0RnJvbnRMZWcuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZnJhbWVzOiByaWdodEZyb250TGVnRnJhbWVzKCksXHJcbiAgY3VycmVudEZyYW1lOiAwLFxyXG4gIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgaXNBdXRvOiBmYWxzZSxcclxuICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG5mdW5jdGlvbiByaWdodEZyb250TGVnRnJhbWVzICgpIHtcclxuICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMC4yLCAtMC4yNSwgMC4yXSwgXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgfVxyXG4gIGxldCBmcmFtZXMgPSBbXVxyXG4gIGZvcihsZXQgayA9IDA7IGsgPCAyNTsgKytrKXtcclxuICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IGRlZ1RvUmFkKC1rKTtcclxuICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgfVxyXG5cclxuICBmb3IobGV0IGsgPSAwOyBrIDwgMjU7ICsrayl7XHJcbiAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IGRlZ1RvUmFkKGspO1xyXG4gICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgfVxyXG4gIHJldHVybiBmcmFtZXM7XHJcblxyXG59XHJcblxyXG5jb25zdCByaWdodEZyb250VG9lID0gbmV3IE5vZGUoKTtcclxucmlnaHRGcm9udFRvZS5uYW1lID0gXCJyaWdodEZyb250VG9lXCI7XHJcbnJpZ2h0RnJvbnRUb2UubW9kZWwgPSBib3hNb2RlbCgwLjEsIDAuMiwgMC4yLCBbMCwgMCwgMF0pO1xyXG5yaWdodEZyb250VG9lLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLCAtMC40NSwgMC4wNV0sIFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnJpZ2h0RnJvbnRUb2UucGlja2VkQ29sb3IgPSB3aGl0ZUNvbG9yO1xyXG5yaWdodEZyb250VG9lLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5yaWdodEZyb250VG9lLnNwZWN1bGFyID0gWzEsMSwxXSxcclxucmlnaHRGcm9udFRvZS5hbWJpZW50ID0gWzEsMSwxXSxcclxucmlnaHRGcm9udFRvZS5zaGluaW5lc3MgPSAxLFxyXG5yaWdodEZyb250VG9lLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbnJpZ2h0RnJvbnRUb2Uudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5yaWdodEZyb250VG9lLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IGxlZnRGcm9udExlZyA9IG5ldyBOb2RlKCk7XHJcbmxlZnRGcm9udExlZy5uYW1lID0gXCJsZWZ0RnJvbnRMZWdcIjtcclxubGVmdEZyb250TGVnLm1vZGVsID0gYm94TW9kZWwoMSwgMC4yLCAwLjE1LCBbMCwgMCwgMF0pO1xyXG5sZWZ0RnJvbnRMZWcudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWy0wLjIsIC0wLjI1LCAwLjJdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5sZWZ0RnJvbnRMZWcucGlja2VkQ29sb3IgPSBibGFja0NvbG9yO1xyXG5sZWZ0RnJvbnRMZWcuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbmxlZnRGcm9udExlZy5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbmxlZnRGcm9udExlZy5hbWJpZW50ID0gWzEsMSwxXSxcclxubGVmdEZyb250TGVnLnNoaW5pbmVzcyA9IDEsXHJcbmxlZnRGcm9udExlZy5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5sZWZ0RnJvbnRMZWcudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5sZWZ0RnJvbnRMZWcuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgZnJhbWVzOiBsZWZ0RnJvbnRMZWdGcmFtZXMoKSxcclxuICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICBpc0F1dG86IGZhbHNlLFxyXG4gIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbmZ1bmN0aW9uIGxlZnRGcm9udExlZ0ZyYW1lcyAoKSB7XHJcbiAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWy0wLjIsIC0wLjI1LCAwLjJdLCBcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICB9XHJcbiAgbGV0IGZyYW1lcyA9IFtdXHJcblxyXG4gIGZvcihsZXQgayA9IDA7IGsgPCAyNTsgKytrKXtcclxuICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gZGVnVG9SYWQoayk7XHJcbiAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICB9XHJcbiAgZm9yKGxldCBrID0gMDsgayA8IDI1OyArK2spe1xyXG4gICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSBkZWdUb1JhZCgtayk7XHJcbiAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICB9XHJcbiAgcmV0dXJuIGZyYW1lcztcclxuXHJcbn1cclxuXHJcbmNvbnN0IGxlZnRGcm9udFRvZSA9IG5ldyBOb2RlKCk7XHJcbmxlZnRGcm9udFRvZS5uYW1lID0gXCJsZWZ0RnJvbnRUb2VcIjtcclxubGVmdEZyb250VG9lLm1vZGVsID0gYm94TW9kZWwoMC4xLCAwLjIsIDAuMTUsIFswLCAwLCAwXSk7XHJcbmxlZnRGcm9udFRvZS50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbLTAsIC0wLjQ1LCAwLjA1XSwgXHJcbiAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubGVmdEZyb250VG9lLnBpY2tlZENvbG9yID0gd2hpdGVDb2xvcjtcclxubGVmdEZyb250VG9lLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5sZWZ0RnJvbnRUb2Uuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5sZWZ0RnJvbnRUb2UuYW1iaWVudCA9IFsxLDEsMV0sXHJcbmxlZnRGcm9udFRvZS5zaGluaW5lc3MgPSAxLFxyXG5sZWZ0RnJvbnRUb2UuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxubGVmdEZyb250VG9lLnZpZXdNYXRyaXggPSB7XHJcbiAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgdXA6IFswLCAxLCAwXSxcclxuICBuZWFyOiAwLjEsXHJcbiAgZmFyOiA1MCxcclxufTtcclxubGVmdEZyb250VG9lLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IHJpZ2h0UmVhckxlZyA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0UmVhckxlZy5uYW1lID0gXCJyaWdodFJlYXJMZWdcIjtcclxucmlnaHRSZWFyTGVnLm1vZGVsID0gYm94TW9kZWwoMSwgMC4yLCAwLjE1LCBbMCwgMCwgMF0pO1xyXG5yaWdodFJlYXJMZWcudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAuMiwgLTAuMjUsIC0wLjJdLFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnJpZ2h0UmVhckxlZy5waWNrZWRDb2xvciA9IGJsYWNrQ29sb3I7XHJcbnJpZ2h0UmVhckxlZy5kaWZmdXNlID0gWzEsMSwxXSxcclxucmlnaHRSZWFyTGVnLnNwZWN1bGFyID0gWzEsMSwxXSxcclxucmlnaHRSZWFyTGVnLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5yaWdodFJlYXJMZWcuc2hpbmluZXNzID0gMSxcclxucmlnaHRSZWFyTGVnLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbnJpZ2h0UmVhckxlZy52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbnJpZ2h0UmVhckxlZy5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiByaWdodFJlYXJMZWdGcmFtZXMoKSxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmlnaHRSZWFyTGVnRnJhbWVzKCkge1xyXG4gIGxldCB0cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLjIsIC0wLjI1LCAtMC4yXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICB9XHJcbiAgbGV0IGZyYW1lcyA9IFtdXHJcbiAgZm9yKGxldCBrID0gMDsgayA8IDI1OyArK2spe1xyXG4gICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSBkZWdUb1JhZChrIC0gMjApO1xyXG4gICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgfVxyXG4gIGZvcihsZXQgayA9IDA7IGsgPCAyNTsgKytrKXtcclxuICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IGRlZ1RvUmFkKC1rICsgMjApO1xyXG4gICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICB9XHJcblxyXG4gIFxyXG5cclxuICByZXR1cm4gZnJhbWVzO1xyXG59XHJcblxyXG5jb25zdCByaWdodFJlYXJUb2UgPSBuZXcgTm9kZSgpO1xyXG5yaWdodFJlYXJUb2UubmFtZSA9IFwicmlnaHRSZWFyVG9lXCI7XHJcbnJpZ2h0UmVhclRvZS5tb2RlbCA9IGJveE1vZGVsKDAuMSwgMC4yLCAwLjIsIFswLCAwLCAwXSk7XHJcbnJpZ2h0UmVhclRvZS50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMCwgLTAuNDUsIDAuMDVdLFxyXG4gIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnJpZ2h0UmVhclRvZS5waWNrZWRDb2xvciA9IHdoaXRlQ29sb3I7XHJcbnJpZ2h0UmVhclRvZS5kaWZmdXNlID0gWzEsMSwxXSxcclxucmlnaHRSZWFyVG9lLnNwZWN1bGFyID0gWzEsMSwxXSxcclxucmlnaHRSZWFyVG9lLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5yaWdodFJlYXJUb2Uuc2hpbmluZXNzID0gMSxcclxucmlnaHRSZWFyVG9lLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbnJpZ2h0UmVhclRvZS52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbnJpZ2h0UmVhclRvZS5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiBmYWxzZSxcclxuICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCBsZWZ0UmVhckxlZyA9IG5ldyBOb2RlKCk7XHJcbmxlZnRSZWFyTGVnLm5hbWUgPSBcImxlZnRSZWFyTGVnXCI7XHJcbmxlZnRSZWFyTGVnLm1vZGVsID0gYm94TW9kZWwoMSwgMC4yLCAwLjE1LCBbMCwgMCwgMF0pO1xyXG5sZWZ0UmVhckxlZy50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbLTAuMiwgLTAuMjUsIC0wLjJdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5sZWZ0UmVhckxlZy5waWNrZWRDb2xvciA9IGJsYWNrQ29sb3I7XHJcbmxlZnRSZWFyTGVnLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5sZWZ0UmVhckxlZy5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbmxlZnRSZWFyTGVnLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5sZWZ0UmVhckxlZy5zaGluaW5lc3MgPSAxLFxyXG5sZWZ0UmVhckxlZy5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5sZWZ0UmVhckxlZy52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbmxlZnRSZWFyTGVnLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGZyYW1lczogbGVmdFJlYXJMZWdGcmFtZXMoKSxcclxuICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICBpc0F1dG86IGZhbHNlLFxyXG4gIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbmZ1bmN0aW9uIGxlZnRSZWFyTGVnRnJhbWVzKCkge1xyXG4gIGxldCB0cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFstMC4yLCAtMC4yNSwgLTAuMl0sIFxyXG4gICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG4gIH1cclxuICBsZXQgZnJhbWVzID0gW11cclxuICBmb3IobGV0IGsgPSAwOyBrIDwgMjU7ICsrayl7XHJcbiAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSBkZWdUb1JhZCgtayArIDIwKTtcclxuICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgfVxyXG5cclxuICBmb3IobGV0IGsgPSAwOyBrIDwgMjU7ICsrayl7XHJcbiAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICBfdHJhbnNmb3JtLnJvdGF0ZVswXSA9IGRlZ1RvUmFkKGsgLSAyMCk7XHJcbiAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICB9XHJcbiAgcmV0dXJuIGZyYW1lcztcclxufVxyXG5cclxuY29uc3QgbGVmdFJlYXJUb2UgPSBuZXcgTm9kZSgpO1xyXG5sZWZ0UmVhclRvZS5uYW1lID0gXCJsZWZ0UmVhclRvZVwiO1xyXG5sZWZ0UmVhclRvZS5tb2RlbCA9IGJveE1vZGVsKDAuMSwgMC4yLCAwLjIsIFswLCAwLCAwXSk7XHJcbmxlZnRSZWFyVG9lLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFstMCwgLTAuNDUsIDAuMDVdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5sZWZ0UmVhclRvZS5waWNrZWRDb2xvciA9IHdoaXRlQ29sb3I7XHJcbmxlZnRSZWFyVG9lLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5sZWZ0UmVhclRvZS5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbmxlZnRSZWFyVG9lLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5sZWZ0UmVhclRvZS5zaGluaW5lc3MgPSAxLFxyXG5sZWZ0UmVhclRvZS5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5sZWZ0UmVhclRvZS52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbmxlZnRSZWFyVG9lLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IHRhaWwgPSBuZXcgTm9kZSgpO1xyXG50YWlsLm5hbWUgPSBcInRhaWxcIjtcclxudGFpbC5tb2RlbCA9IGJveE1vZGVsKDAuMiwgMC4yLCAwLjQsIFswLCAwLCAwXSk7XHJcbnRhaWwudHJhbnNmb3JtID0ge1xyXG4gIHRyYW5zbGF0ZTogWzAsIDAsIC0wLjY1XSxcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG50YWlsLnBpY2tlZENvbG9yID0gYm9keUNvbG9yO1xyXG50YWlsLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG50YWlsLnNwZWN1bGFyID0gWzEsMSwxXSxcclxudGFpbC5hbWJpZW50ID0gWzEsMSwxXSxcclxudGFpbC5zaGluaW5lc3MgPSAxLFxyXG50YWlsLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbnRhaWwudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG50YWlsLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IHRhaWxlZGdlID0gbmV3IE5vZGUoKTtcclxudGFpbGVkZ2UubmFtZSA9IFwidGFpbGVkZ2VcIjtcclxudGFpbGVkZ2UubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC4yLCBbMCwgMCwgMF0pO1xyXG50YWlsZWRnZS50cmFuc2Zvcm0gPSB7XHJcbiAgdHJhbnNsYXRlOiBbMCwgMCwgLTAuOTVdLCBcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG50YWlsZWRnZS5waWNrZWRDb2xvciA9IHdoaXRlQ29sb3I7XHJcbnRhaWxlZGdlLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG50YWlsZWRnZS5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbnRhaWxlZGdlLmFtYmllbnQgPSBbMSwxLDFdLFxyXG50YWlsZWRnZS5zaGluaW5lc3MgPSAxLFxyXG50YWlsZWRnZS5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG50YWlsZWRnZS52aWV3TWF0cml4ID0ge1xyXG4gIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gIHVwOiBbMCwgMSwgMF0sXHJcbiAgbmVhcjogMC4xLFxyXG4gIGZhcjogNTAsXHJcbn07XHJcbnRhaWxlZGdlLmFuaW1hdGlvbiA9IHtcclxuICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmhlYWQuc2V0UGFyZW50KGZveCk7XHJcbnJpZ2h0RWFyLnNldFBhcmVudChoZWFkKTtcclxubGVmdEVhci5zZXRQYXJlbnQoaGVhZCk7XHJcbndoaXRlUmlnaHRFeWUuc2V0UGFyZW50KGhlYWQpO1xyXG53aGl0ZUxlZnRFeWUuc2V0UGFyZW50KGhlYWQpO1xyXG5ibGFja1JpZ2h0RXllLnNldFBhcmVudCh3aGl0ZVJpZ2h0RXllKTtcclxuYmxhY2tMZWZ0RXllLnNldFBhcmVudCh3aGl0ZUxlZnRFeWUpO1xyXG5ub3NlLnNldFBhcmVudChoZWFkKTtcclxudW5kZXJub3NlLnNldFBhcmVudChoZWFkKTtcclxucmlnaHRGcm9udExlZy5zZXRQYXJlbnQoZm94KTtcclxucmlnaHRGcm9udFRvZS5zZXRQYXJlbnQocmlnaHRGcm9udExlZyk7XHJcbmxlZnRGcm9udExlZy5zZXRQYXJlbnQoZm94KTtcclxubGVmdEZyb250VG9lLnNldFBhcmVudChsZWZ0RnJvbnRMZWcpO1xyXG5yaWdodFJlYXJMZWcuc2V0UGFyZW50KGZveCk7XHJcbnJpZ2h0UmVhclRvZS5zZXRQYXJlbnQocmlnaHRSZWFyTGVnKTtcclxubGVmdFJlYXJMZWcuc2V0UGFyZW50KGZveCk7XHJcbmxlZnRSZWFyVG9lLnNldFBhcmVudChsZWZ0UmVhckxlZyk7XHJcbnRhaWwuc2V0UGFyZW50KGZveCk7XHJcbnRhaWxlZGdlLnNldFBhcmVudChmb3gpO1xyXG5cclxudmFyIGZveE1vZGVsID0gW1xyXG4gIGZveFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm94TW9kZWw7XHJcbiIsImltcG9ydCBOb2RlIGZyb20gXCIuLi9ub2RlLmpzXCI7XHJcbmltcG9ydCB7IGRlZ1RvUmFkIH0gZnJvbSBcIi4uL21hdGgvbWF0aFV0aWxzLmpzXCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uL3V0aWxzL0FuaW1hdGlvbi5qc1wiO1xyXG5pbXBvcnQgYm94TW9kZWwsIHtnZW5lcmF0ZUZhY2VzLCBnZW5lcmF0ZU5vcm1hbHMsIGdlbmVyYXRlVmVydGljZXN9IGZyb20gXCIuLi9ib3hNb2RlbC5qc1wiO1xyXG5cclxuZnVuY3Rpb24gaG9sbG93VGhpbmd5KCkge1xyXG4gICAgbGV0IHZlcnRpY2VzID0gW107XHJcbiAgICBsZXQgY29sb3JzID0gW107XHJcbiAgICBsZXQgdGFuZ2VudHMgPSBbXTtcclxuICAgIGxldCBiaXRhbmdlbnRzID0gW107XHJcbiAgICBsZXQgbm9ybWFscyA9IFtdO1xyXG4gICAgbGV0IHRleENvb3JkID0gW107XHJcbiAgICBsZXQgZmFjZXMgPSBnZW5lcmF0ZUZhY2VzKCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGJveGVzID0gW1xyXG4gICAgICB7IHNpemU6IFswLjIsIDAuOCwgMC4yXSwgcG9zaXRpb246IFswLCAxLCAwXSB9LFxyXG4gICAgICB7IHNpemU6IFswLjIsIDAuOCwgMC4yXSwgcG9zaXRpb246IFswLCAtMSwgMF0gfSxcclxuICAgICAgeyBzaXplOiBbMS44LCAwLjIsIDAuMl0sIHBvc2l0aW9uOiBbLTAuMywgMCwgMF0gfSxcclxuICAgICAgeyBzaXplOiBbMS44LCAwLjIsIDAuMl0sIHBvc2l0aW9uOiBbMC4zLCAwLCAwXSB9LFxyXG4gICAgICB7IHNpemU6IFswLjIsIDEuOCwgMC4yXSwgcG9zaXRpb246IFswLCAwLCAwLjNdIH0sXHJcbiAgICAgIHsgc2l6ZTogWzAuMiwgMS44LCAwLjJdLCBwb3NpdGlvbjogWzAsIDAsIC0wLjNdIH0sXHJcbiAgICAgIHsgc2l6ZTogWzAuMiwgMC4yLCAwLjhdLCBwb3NpdGlvbjogWzEsIDAsIDBdIH0sXHJcbiAgICAgIHsgc2l6ZTogWzAuMiwgMC4yLCAwLjhdLCBwb3NpdGlvbjogWy0xLCAwLCAwXSB9LFxyXG4gICAgICB7IHNpemU6IFswLjgsIDAuMiwgMC4yXSwgcG9zaXRpb246IFswLCAwLCAxXSB9LFxyXG4gICAgICB7IHNpemU6IFswLjgsIDAuMiwgMC4yXSwgcG9zaXRpb246IFswLCAwLCAtMV0gfSxcclxuICAgICAgeyBzaXplOiBbMC4yLCAwLjIsIDEuOF0sIHBvc2l0aW9uOiBbMCwgMC4zLCAwXSB9LFxyXG4gICAgICB7IHNpemU6IFswLjIsIDAuMiwgMS44XSwgcG9zaXRpb246IFswLCAtMC4zLCAwXSB9XHJcbiAgICBdO1xyXG4gICAgXHJcbiAgICBib3hlcy5mb3JFYWNoKGJveCA9PiB7XHJcbiAgICAgIGxldCB2ZXJ0aWNlc0JveCA9IGdlbmVyYXRlVmVydGljZXMoLi4uYm94LnNpemUsIGJveC5wb3NpdGlvbik7XHJcbiAgICAgIGxldCBub3JtYWxzQm94ID0gZ2VuZXJhdGVOb3JtYWxzKHZlcnRpY2VzQm94LCBmYWNlcyk7XHJcbiAgICAgIG5vcm1hbHMgPSBub3JtYWxzLmNvbmNhdChub3JtYWxzQm94KTtcclxuICAgICAgdmVydGljZXMgPSB2ZXJ0aWNlcy5jb25jYXQodG9WZXJ0aWNlcyh2ZXJ0aWNlc0JveCwgZmFjZXMpKTtcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmVydGljZXM6IHZlcnRpY2VzLFxyXG4gICAgICBmYWNlczogZmFjZXMsXHJcbiAgICAgIHRhbmdlbnRzOiB0YW5nZW50cyxcclxuICAgICAgYml0YW5nZW50czogYml0YW5nZW50cyxcclxuICAgICAgbm9ybWFsczogbm9ybWFscyxcclxuICAgICAgY29sb3JzOiBjb2xvcnMsXHJcbiAgICAgIHRleENvb3JkOiB0ZXhDb29yZCxcclxuICAgIH07XHJcbn1cclxuICBcclxuY29uc3QgaG9sbG93ID0gbmV3IE5vZGUoKTtcclxuaG9sbG93LmZsYWcgPSBcImhvbGxvd1wiO1xyXG5ob2xsb3cubmFtZSA9IFwiSG9sbG93IFRoaW5neVwiO1xyXG5ob2xsb3cubW9kZWwgPSBob2xsb3dUaGluZ3koKTtcclxuaG9sbG93LnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLCAwLCAwXSxcclxuICByb3RhdGU6IFswLCAwLCAwXSxcclxuICBzY2FsZTogWzEsIDEsIDFdLFxyXG59O1xyXG5ob2xsb3cucGlja2VkQ29sb3IgPSByYW5kb21Db2xvcnMoKSxcclxuaG9sbG93LmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5ob2xsb3cuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5ob2xsb3cuYW1iaWVudCA9IFsxLDEsMV0sXHJcbmhvbGxvdy5zaGluaW5lc3MgPSAxLFxyXG5ob2xsb3cuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxuaG9sbG93LnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmhvbGxvdy5hbmltYXRpb24gPSB7XHJcbiAgaXNBbmltYXRlOiB0cnVlLFxyXG4gIGZyYW1lczogaG9sbG93RnJhbWVzKCksXHJcbiAgY3VycmVudEZyYW1lOiAwLFxyXG4gIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgaXNBdXRvOiB0cnVlLFxyXG4gIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbmZ1bmN0aW9uIGhvbGxvd0ZyYW1lcyAoKSB7XHJcbiAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgcm90YXRlOiBbZGVnVG9SYWQoMCksIGRlZ1RvUmFkKDApLCBkZWdUb1JhZCgwKV0sXHJcbiAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG4gIH1cclxuICBsZXQgZnJhbWVzID0gW11cclxuICBmb3IobGV0IGsgPSAwOyBrIDwgMzYxOyArK2spe1xyXG4gICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gZGVnVG9SYWQoayk7XHJcbiAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzFdID0gZGVnVG9SYWQoayk7XHJcbiAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzJdID0gZGVnVG9SYWQoayk7XHJcbiAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZyYW1lcztcclxufVxyXG5cclxudmFyIGhvbGxvd01vZGVsID0gW1xyXG4gICAgaG9sbG93XHJcbl1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBob2xsb3dNb2RlbDsiLCJpbXBvcnQgTm9kZSBmcm9tIFwiLi4vbm9kZS5qc1wiO1xyXG5pbXBvcnQgeyBkZWdUb1JhZCB9IGZyb20gXCIuLi9tYXRoL21hdGhVdGlscy5qc1wiO1xyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCIuLi8uLi91dGlscy9BbmltYXRpb24uanNcIjtcclxuaW1wb3J0IGJveE1vZGVsIGZyb20gXCIuLi9ib3hNb2RlbC5qc1wiO1xyXG5cclxuXHJcbmNvbnN0IHBpZyA9IG5ldyBOb2RlKCk7XHJcbnBpZy5mbGFnID0gXCJhcnRpY3VsYXRlZFwiO1xyXG5waWcubmFtZSA9IFwicGlnXCI7XHJcbnBpZy5tb2RlbCA9IGJveE1vZGVsKDEsIDEuNSwgMSwgWzAsIDAsIDBdKTtcclxucGlnLnRyYW5zZm9ybSA9IHtcclxuICB0cmFuc2xhdGU6IFswLCAwLCAwXSxcclxuICByb3RhdGU6IFsxMCwgNTksIDBdLFxyXG4gIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnBpZy5waWNrZWRDb2xvciA9IFswLjkyMTU2ODYyNywwLjU2ODYyNzQ1MSwwLjg5ODAzOTIxNl0sXHJcbnBpZy5kaWZmdXNlID0gWzEsMSwxXSxcclxucGlnLnNwZWN1bGFyID0gWzEsMSwxXSxcclxucGlnLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5waWcuc2hpbmluZXNzID0gMSxcclxucGlnLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbnBpZy52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5waWcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogcGlnRnJhbWVzKCksXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogQW5pbWF0aW9uLmFuaW1hdGlvblNjcmlwdCgpLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbmZ1bmN0aW9uIHBpZ0ZyYW1lcygpIHtcclxuICAgIGxldCB0cmFuc2Zvcm0gPSB7XHJcbiAgICAgICAgdHJhbnNsYXRlOiBbMCwgMCwgMF0sXHJcbiAgICAgICAgcm90YXRlOiBbZGVnVG9SYWQoMTApLCBkZWdUb1JhZCg1OSksIGRlZ1RvUmFkKDApXSxcclxuICAgICAgICBzY2FsZTogWzEsIDEsIDFdLFxyXG4gICAgfVxyXG4gICAgbGV0IGZyYW1lcyA9IFtdXHJcbiAgICBmb3IobGV0IGsgPSAwOyBrIDwgMjU7ICsrayl7XHJcbiAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgIF90cmFuc2Zvcm0udHJhbnNsYXRlWzFdID0gayAvIDI1O1xyXG4gICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gZnJhbWVzO1xyXG59XHJcblxyXG5jb25zdCBoZWFkID0gbmV3IE5vZGUoKTtcclxuaGVhZC5uYW1lID0gXCJoZWFkXCI7XHJcbmhlYWQubW9kZWwgPSBib3hNb2RlbCgxLCAxLCAxLjIsIFstMSwgMC42LCAwXSk7XHJcbmhlYWQudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMCwgMCwgMF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmhlYWQucGlja2VkQ29sb3IgPSBbMC45MjE1Njg2MjcsMC41Njg2Mjc0NTEsMC44OTgwMzkyMTZdLFxyXG5oZWFkLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5oZWFkLnNwZWN1bGFyID0gWzEsMSwxXSxcclxuaGVhZC5hbWJpZW50ID0gWzEsMSwxXSxcclxuaGVhZC5zaGluaW5lc3MgPSAxLFxyXG5oZWFkLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmhlYWQudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuaGVhZC5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBoZWFkRnJhbWVzKCksXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogQW5pbWF0aW9uLmFuaW1hdGlvblNjcmlwdCgpLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbmZ1bmN0aW9uIGhlYWRGcmFtZXMoKSB7XHJcbiAgICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgICAgIHRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgICB9XHJcbiAgICBsZXQgZnJhbWVzID0gW11cclxuICAgIGZvcihsZXQgayA9IDA7IGsgPCAyNTsgKytrKXtcclxuICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMl0gPSAtayAvIDEwMDtcclxuICAgICAgICBfdHJhbnNmb3JtLnNjYWxlWzBdID0gMSArIGsgLyA1MDtcclxuICAgICAgICBfdHJhbnNmb3JtLnNjYWxlWzFdID0gMSArIGsgLyA1MDtcclxuICAgICAgICBfdHJhbnNmb3JtLnNjYWxlWzJdID0gMSArIGsgLyA1MDtcclxuICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIGZyYW1lcztcclxufVxyXG5cclxuY29uc3Qgd2hpdGVSaWdodEV5ZSA9IG5ldyBOb2RlKCk7XHJcbndoaXRlUmlnaHRFeWUubmFtZSA9IFwid2hpdGVSaWdodEV5ZVwiO1xyXG53aGl0ZVJpZ2h0RXllLm1vZGVsID0gYm94TW9kZWwoMC4yLCAwLjIsIDAuMiwgWy0xLCAwLjYsIDBdKTtcclxud2hpdGVSaWdodEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFstMC41LCAwLjIsIDAuNF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbndoaXRlUmlnaHRFeWUucGlja2VkQ29sb3IgPSBbMC45OSwwLjk5LDAuOTldLFxyXG53aGl0ZVJpZ2h0RXllLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG53aGl0ZVJpZ2h0RXllLnNwZWN1bGFyID0gWzEsMSwxXSxcclxud2hpdGVSaWdodEV5ZS5hbWJpZW50ID0gWzEsMSwxXSxcclxud2hpdGVSaWdodEV5ZS5zaGluaW5lc3MgPSAxLFxyXG53aGl0ZVJpZ2h0RXllLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbndoaXRlUmlnaHRFeWUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxud2hpdGVSaWdodEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3Qgd2hpdGVMZWZ0RXllID0gbmV3IE5vZGUoKTtcclxud2hpdGVMZWZ0RXllLm5hbWUgPSBcIndoaXRlTGVmdEV5ZVwiO1xyXG53aGl0ZUxlZnRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC4yLCBbLTEsIDAuNiwgMF0pO1xyXG53aGl0ZUxlZnRFeWUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbLTAuNSwgMC4yLCAtMC40XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxud2hpdGVMZWZ0RXllLnBpY2tlZENvbG9yID0gWzAuOTksMC45OSwwLjk5XSxcclxud2hpdGVMZWZ0RXllLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG53aGl0ZUxlZnRFeWUuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG53aGl0ZUxlZnRFeWUuYW1iaWVudCA9IFsxLDEsMV0sXHJcbndoaXRlTGVmdEV5ZS5zaGluaW5lc3MgPSAxLFxyXG53aGl0ZUxlZnRFeWUuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxud2hpdGVMZWZ0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbndoaXRlTGVmdEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgYmxhY2tSaWdodEV5ZSA9IG5ldyBOb2RlKCk7XHJcbmJsYWNrUmlnaHRFeWUubmFtZSA9IFwiYmxhY2tSaWdodEV5ZVwiO1xyXG5ibGFja1JpZ2h0RXllLm1vZGVsID0gYm94TW9kZWwoMC4yLCAwLjIsIDAuMiwgWy0xLCAwLjYsIDBdKTtcclxuYmxhY2tSaWdodEV5ZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLjA1LCAwLCAwLjA3NV0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmJsYWNrUmlnaHRFeWUucGlja2VkQ29sb3IgPSBbMCwwLDBdLFxyXG5ibGFja1JpZ2h0RXllLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5ibGFja1JpZ2h0RXllLnNwZWN1bGFyID0gWzEsMSwxXSxcclxuYmxhY2tSaWdodEV5ZS5hbWJpZW50ID0gWzEsMSwxXSxcclxuYmxhY2tSaWdodEV5ZS5zaGluaW5lc3MgPSAxLFxyXG5ibGFja1JpZ2h0RXllLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmJsYWNrUmlnaHRFeWUudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxuYmxhY2tSaWdodEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgYmxhY2tMZWZ0RXllID0gbmV3IE5vZGUoKTtcclxuYmxhY2tMZWZ0RXllLm5hbWUgPSBcImJsYWNrTGVmdEV5ZVwiO1xyXG5ibGFja0xlZnRFeWUubW9kZWwgPSBib3hNb2RlbCgwLjIsIDAuMiwgMC4yLCBbLTEsIDAuNiwgMF0pO1xyXG5ibGFja0xlZnRFeWUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMC4wNSwgMCwgLTAuMDc1XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxuYmxhY2tMZWZ0RXllLnBpY2tlZENvbG9yID0gWzAsMCwwXSxcclxuYmxhY2tMZWZ0RXllLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5ibGFja0xlZnRFeWUuc3BlY3VsYXIgPSBbMSwxLDFdLFxyXG5ibGFja0xlZnRFeWUuYW1iaWVudCA9IFsxLDEsMV0sXHJcbmJsYWNrTGVmdEV5ZS5zaGluaW5lc3MgPSAxLFxyXG5ibGFja0xlZnRFeWUuY29uc3QgPSB7XHJcbiAgICBrZDogMC41LFxyXG4gICAga3M6IDAuMCxcclxuICAgIGthOiAxLjAsXHJcbn1cclxuYmxhY2tMZWZ0RXllLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmJsYWNrTGVmdEV5ZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3Qgbm9zZSA9IG5ldyBOb2RlKCk7XHJcbm5vc2UubmFtZSA9IFwibm9zZVwiO1xyXG5ub3NlLm1vZGVsID0gYm94TW9kZWwoMC4yLCAwLjIsIDAuNCwgWy0xLjUsIDAuNTUsIDBdKTtcclxubm9zZS50cmFuc2Zvcm0gPSB7XHJcbiAgICB0cmFuc2xhdGU6IFswLjA1LCAwLCAwXSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubm9zZS5waWNrZWRDb2xvciA9IFswLjc2ODYyNzQ1MSwwLjM3NjQ3MDU4OCwgMC43NDUwOTgwMzldLFxyXG5ub3NlLmRpZmZ1c2UgPSBbMSwxLDFdLFxyXG5ub3NlLnNwZWN1bGFyID0gWzEsMSwxXSxcclxubm9zZS5hbWJpZW50ID0gWzEsMSwxXSxcclxubm9zZS5zaGluaW5lc3MgPSAxLFxyXG5ub3NlLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbm5vc2Uudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxubm9zZS5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZGVnQW5pbWF0ZTogMC4xLFxyXG59O1xyXG5cclxuY29uc3QgcmlnaHRIb2xlID0gbmV3IE5vZGUoKTtcclxucmlnaHRIb2xlLm5hbWUgPSBcInJpZ2h0SG9sZVwiO1xyXG5yaWdodEhvbGUubW9kZWwgPSBib3hNb2RlbCgwLjE1LCAwLjIsIDAuMSwgWy0xLjYsIDAuNTUsIDBdKTtcclxucmlnaHRIb2xlLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAuMDUsIDAsIDAuMV0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnJpZ2h0SG9sZS5waWNrZWRDb2xvciA9IFswLjkyMTU2ODYyNywwLjU2ODYyNzQ1MSwwLjg5ODAzOTIxNl0sXHJcbnJpZ2h0SG9sZS5kaWZmdXNlID0gWzEsMSwxXSxcclxucmlnaHRIb2xlLnNwZWN1bGFyID0gWzEsMSwxXSxcclxucmlnaHRIb2xlLmFtYmllbnQgPSBbMSwxLDFdLFxyXG5yaWdodEhvbGUuc2hpbmluZXNzID0gMSxcclxucmlnaHRIb2xlLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbnJpZ2h0SG9sZS52aWV3TWF0cml4ID0ge1xyXG4gICAgY2FtZXJhOiBbMCwgMCwgNV0sXHJcbiAgICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICAgIHVwOiBbMCwgMSwgMF0sXHJcbiAgICBuZWFyOiAwLjEsXHJcbiAgICBmYXI6IDUwLFxyXG59O1xyXG5yaWdodEhvbGUuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGRlZ0FuaW1hdGU6IDAuMSxcclxufTtcclxuXHJcbmNvbnN0IGxlZnRIb2xlID0gbmV3IE5vZGUoKTtcclxubGVmdEhvbGUubmFtZSA9IFwibGVmdEhvbGVcIjtcclxubGVmdEhvbGUubW9kZWwgPSBib3hNb2RlbCgwLjE1LCAwLjIsIDAuMSwgWy0xLjYsIDAuNTUsIDBdKTtcclxubGVmdEhvbGUudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMC4wNSwgMCwgLTAuMV0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmxlZnRIb2xlLnBpY2tlZENvbG9yID0gWzAuOTIxNTY4NjI3LDAuNTY4NjI3NDUxLDAuODk4MDM5MjE2XSxcclxubGVmdEhvbGUuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbmxlZnRIb2xlLnNwZWN1bGFyID0gWzEsMSwxXSxcclxubGVmdEhvbGUuYW1iaWVudCA9IFsxLDEsMV0sXHJcbmxlZnRIb2xlLnNoaW5pbmVzcyA9IDEsXHJcbmxlZnRIb2xlLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmxlZnRIb2xlLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmxlZnRIb2xlLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBkZWdBbmltYXRlOiAwLjEsXHJcbn07XHJcblxyXG5jb25zdCByaWdodEZyb250TGVnID0gbmV3IE5vZGUoKTtcclxucmlnaHRGcm9udExlZy5uYW1lID0gXCJyaWdodEZyb250TGVnXCI7XHJcbnJpZ2h0RnJvbnRMZWcubW9kZWwgPSBib3hNb2RlbCgwLjUsIDAuMiwgMC4yLCBbMC4xLCAwLCAwLjE1XSk7XHJcbnJpZ2h0RnJvbnRMZWcudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbLTAuNiwgLTAuNSwgLTAuNF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnJpZ2h0RnJvbnRMZWcucGlja2VkQ29sb3IgPSBbMC43Njg2Mjc0NTEsMC4zNzY0NzA1ODgsIDAuNzQ1MDk4MDM5XSxcclxucmlnaHRGcm9udExlZy5kaWZmdXNlID0gWzEsMSwxXSxcclxucmlnaHRGcm9udExlZy5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbnJpZ2h0RnJvbnRMZWcuYW1iaWVudCA9IFsxLDEsMV0sXHJcbnJpZ2h0RnJvbnRMZWcuc2hpbmluZXNzID0gMSxcclxucmlnaHRGcm9udExlZy5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5yaWdodEZyb250TGVnLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbnJpZ2h0RnJvbnRMZWcuYW5pbWF0aW9uID0ge1xyXG4gICAgaXNBbmltYXRlOiBmYWxzZSxcclxuICAgIGZyYW1lczogcmlnaHRGcm9udExlZ0ZyYW1lcygpLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG5mdW5jdGlvbiByaWdodEZyb250TGVnRnJhbWVzKCkge1xyXG4gICAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgICAgICB0cmFuc2xhdGU6Wy0wLjYsIC0wLjUsIC0wLjRdLFxyXG4gICAgICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZyYW1lcyA9IFtdXHJcbiAgICBmb3IobGV0IGsgPSAwOyBrIDwgMjU7ICsrayl7XHJcbiAgICAgICAgbGV0IF90cmFuc2Zvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zZm9ybSkpO1xyXG4gICAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzBdID0gay8yNSA7XHJcbiAgICAgICAgX3RyYW5zZm9ybS50cmFuc2xhdGVbMl0gPSAtMC40ICsgLTAuMi8oMjUtayk7XHJcbiAgICAgICAgZnJhbWVzLnB1c2goX3RyYW5zZm9ybSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZyYW1lcztcclxufVxyXG5cclxuXHJcbmNvbnN0IGxlZnRGcm9udExlZyA9IG5ldyBOb2RlKCk7XHJcbmxlZnRGcm9udExlZy5uYW1lID0gXCJsZWZ0RnJvbnRMZWdcIjtcclxubGVmdEZyb250TGVnLm1vZGVsID0gYm94TW9kZWwoMC41LCAwLjIsIDAuMiwgWzAuMSwgMCwgLTAuMTVdKTtcclxubGVmdEZyb250TGVnLnRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWy0wLjYsIC0wLjUsIDAuNF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmxlZnRGcm9udExlZy5waWNrZWRDb2xvciA9IFswLjc2ODYyNzQ1MSwwLjM3NjQ3MDU4OCwgMC43NDUwOTgwMzldLFxyXG5sZWZ0RnJvbnRMZWcuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbmxlZnRGcm9udExlZy5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbmxlZnRGcm9udExlZy5hbWJpZW50ID0gWzEsMSwxXSxcclxubGVmdEZyb250TGVnLnNoaW5pbmVzcyA9IDEsXHJcbmxlZnRGcm9udExlZy5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufTtcclxubGVmdEZyb250TGVnLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmxlZnRGcm9udExlZy5hbmltYXRpb24gPSB7XHJcbiAgICBpc0FuaW1hdGU6IGZhbHNlLFxyXG4gICAgZnJhbWVzOiBsZWZ0RnJvbnRGcmFtZXMoKSxcclxuICAgIGN1cnJlbnRGcmFtZTogMCxcclxuICAgIGFuaW1hdGlvbkZ1bmN0aW9uOiBBbmltYXRpb24uYW5pbWF0aW9uU2NyaXB0KCksXHJcbiAgICBpc0F1dG86IGZhbHNlLFxyXG4gICAgaXNSZXZlcnNlOiBmYWxzZVxyXG59O1xyXG5cclxuZnVuY3Rpb24gbGVmdEZyb250RnJhbWVzKCkge1xyXG4gICAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgICAgICB0cmFuc2xhdGU6Wy0wLjYsIC0wLjUsIDAuNF0sXHJcbiAgICAgICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZnJhbWVzID0gW11cclxuICAgIGZvcihsZXQgayA9IDA7IGsgPCAyNTsgKytrKXtcclxuICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSAtay8yNSA7XHJcbiAgICAgICAgX3RyYW5zZm9ybS50cmFuc2xhdGVbMl0gPSAwLjQgKyAwLjIvKDI1LWspO1xyXG4gICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmcmFtZXM7XHJcbn1cclxuXHJcbmNvbnN0IHJpZ2h0UmVhckxlZyA9IG5ldyBOb2RlKCk7XHJcbnJpZ2h0UmVhckxlZy5uYW1lID0gXCJyaWdodFJlYXJMZWdcIjtcclxucmlnaHRSZWFyTGVnLm1vZGVsID0gYm94TW9kZWwoMC41LCAwLjIsIDAuMiwgWzAuNSwgMCwgMC4xNV0pO1xyXG5yaWdodFJlYXJMZWcudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMCwgLTAuNSwgLTAuNF0sXHJcbiAgICByb3RhdGU6IFswLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbnJpZ2h0UmVhckxlZy5waWNrZWRDb2xvciA9IFswLjc2ODYyNzQ1MSwwLjM3NjQ3MDU4OCwgMC43NDUwOTgwMzldLFxyXG5yaWdodFJlYXJMZWcuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbnJpZ2h0UmVhckxlZy5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbnJpZ2h0UmVhckxlZy5hbWJpZW50ID0gWzEsMSwxXSxcclxucmlnaHRSZWFyTGVnLnNoaW5pbmVzcyA9IDEsXHJcbnJpZ2h0UmVhckxlZy5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5yaWdodFJlYXJMZWcudmlld01hdHJpeCA9IHtcclxuICAgIGNhbWVyYTogWzAsIDAsIDVdLFxyXG4gICAgbG9va0F0OiBbMCwgMCwgMF0sXHJcbiAgICB1cDogWzAsIDEsIDBdLFxyXG4gICAgbmVhcjogMC4xLFxyXG4gICAgZmFyOiA1MCxcclxufTtcclxucmlnaHRSZWFyTGVnLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IHJpZ2h0UmVhckxlZ0ZyYW1lcygpLFxyXG4gICAgY3VycmVudEZyYW1lOiAwLFxyXG4gICAgYW5pbWF0aW9uRnVuY3Rpb246IEFuaW1hdGlvbi5hbmltYXRpb25TY3JpcHQoKSxcclxuICAgIGlzQXV0bzogZmFsc2UsXHJcbiAgICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG5mdW5jdGlvbiByaWdodFJlYXJMZWdGcmFtZXMoKSB7XHJcbiAgICBsZXQgdHJhbnNmb3JtID0ge1xyXG4gICAgICAgIHRyYW5zbGF0ZTpbMCwgLTAuNSwgLTAuNF0sXHJcbiAgICAgICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZnJhbWVzID0gW11cclxuICAgIGZvcihsZXQgayA9IDA7IGsgPCAyNTsgKytrKXtcclxuICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSBrLzI1IDtcclxuICAgICAgICBfdHJhbnNmb3JtLnRyYW5zbGF0ZVsyXSA9IC0wLjQgKyAtMC4yLygyNS1rKTtcclxuICAgICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZnJhbWVzO1xyXG59XHJcblxyXG5jb25zdCBsZWZ0UmVhckxlZyA9IG5ldyBOb2RlKCk7XHJcbmxlZnRSZWFyTGVnLm5hbWUgPSBcImxlZnRSZWFyTGVnXCI7XHJcbmxlZnRSZWFyTGVnLm1vZGVsID0gYm94TW9kZWwoMC41LCAwLjIsIDAuMiwgWzAuNSwgMCwgLTAuMTVdKTtcclxubGVmdFJlYXJMZWcudHJhbnNmb3JtID0ge1xyXG4gICAgdHJhbnNsYXRlOiBbMCwgLTAuNSwgMC40XSxcclxuICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgc2NhbGU6IFsxLCAxLCAxXSxcclxufTtcclxubGVmdFJlYXJMZWcucGlja2VkQ29sb3IgPSBbMC43Njg2Mjc0NTEsMC4zNzY0NzA1ODgsIDAuNzQ1MDk4MDM5XSxcclxubGVmdFJlYXJMZWcuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbmxlZnRSZWFyTGVnLnNwZWN1bGFyID0gWzEsMSwxXSxcclxubGVmdFJlYXJMZWcuYW1iaWVudCA9IFsxLDEsMV0sXHJcbmxlZnRSZWFyTGVnLnNoaW5pbmVzcyA9IDEsXHJcbmxlZnRSZWFyTGVnLmNvbnN0ID0ge1xyXG4gICAga2Q6IDAuNSxcclxuICAgIGtzOiAwLjAsXHJcbiAgICBrYTogMS4wLFxyXG59XHJcbmxlZnRSZWFyTGVnLnZpZXdNYXRyaXggPSB7XHJcbiAgICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICAgIGxvb2tBdDogWzAsIDAsIDBdLFxyXG4gICAgdXA6IFswLCAxLCAwXSxcclxuICAgIG5lYXI6IDAuMSxcclxuICAgIGZhcjogNTAsXHJcbn07XHJcbmxlZnRSZWFyTGVnLmFuaW1hdGlvbiA9IHtcclxuICAgIGlzQW5pbWF0ZTogZmFsc2UsXHJcbiAgICBmcmFtZXM6IGxlZnRSZWFyRnJhbWVzKCksXHJcbiAgICBjdXJyZW50RnJhbWU6IDAsXHJcbiAgICBhbmltYXRpb25GdW5jdGlvbjogQW5pbWF0aW9uLmFuaW1hdGlvblNjcmlwdCgpLFxyXG4gICAgaXNBdXRvOiBmYWxzZSxcclxuICAgIGlzUmV2ZXJzZTogZmFsc2VcclxufTtcclxuXHJcbmZ1bmN0aW9uIGxlZnRSZWFyRnJhbWVzKCkge1xyXG4gICAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgICAgICB0cmFuc2xhdGU6WzAsIC0wLjUsIDAuNF0sXHJcbiAgICAgICAgcm90YXRlOiBbMCwgMCwgMF0sXHJcbiAgICAgICAgc2NhbGU6IFsxLCAxLCAxXSxcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZnJhbWVzID0gW11cclxuICAgIGZvcihsZXQgayA9IDA7IGsgPCAyNTsgKytrKXtcclxuICAgICAgICBsZXQgX3RyYW5zZm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJhbnNmb3JtKSk7XHJcbiAgICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSAtay8yNSA7XHJcbiAgICAgICAgX3RyYW5zZm9ybS50cmFuc2xhdGVbMl0gPSAwLjQgKyAwLjIvKDI1LWspO1xyXG4gICAgICAgIGZyYW1lcy5wdXNoKF90cmFuc2Zvcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmcmFtZXM7XHJcbn1cclxuXHJcbmhlYWQuc2V0UGFyZW50KHBpZyk7XHJcbndoaXRlUmlnaHRFeWUuc2V0UGFyZW50KGhlYWQpO1xyXG53aGl0ZUxlZnRFeWUuc2V0UGFyZW50KGhlYWQpO1xyXG5ibGFja1JpZ2h0RXllLnNldFBhcmVudCh3aGl0ZVJpZ2h0RXllKTtcclxuYmxhY2tMZWZ0RXllLnNldFBhcmVudCh3aGl0ZUxlZnRFeWUpO1xyXG5ub3NlLnNldFBhcmVudChoZWFkKTtcclxucmlnaHRIb2xlLnNldFBhcmVudChub3NlKTtcclxubGVmdEhvbGUuc2V0UGFyZW50KG5vc2UpO1xyXG5yaWdodEZyb250TGVnLnNldFBhcmVudChwaWcpO1xyXG5sZWZ0RnJvbnRMZWcuc2V0UGFyZW50KHBpZyk7XHJcbnJpZ2h0UmVhckxlZy5zZXRQYXJlbnQocGlnKTtcclxubGVmdFJlYXJMZWcuc2V0UGFyZW50KHBpZyk7XHJcblxyXG52YXIgcGlnTW9kZWwgPSBbXHJcbiAgICBwaWdcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBpZ01vZGVsO1xyXG4gICIsImltcG9ydCBOb2RlIGZyb20gXCIuLi9ub2RlLmpzXCI7XHJcbmltcG9ydCBib3hNb2RlbCwge2dlbmVyYXRlRmFjZXMsIGdlbmVyYXRlTm9ybWFscywgZ2VuZXJhdGVWZXJ0aWNlc30gZnJvbSBcIi4uL2JveE1vZGVsLmpzXCI7XHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcIi4uLy4uL3V0aWxzL0FuaW1hdGlvbi5qc1wiO1xyXG5cclxuZnVuY3Rpb24gcmluZygpIHtcclxuICAgIGxldCB2ZXJ0aWNlcyA9IFtdO1xyXG4gICAgbGV0IGNvbG9ycyA9IFtdO1xyXG4gICAgbGV0IHRhbmdlbnRzID0gW107XHJcbiAgICBsZXQgYml0YW5nZW50cyA9IFtdO1xyXG4gICAgbGV0IG5vcm1hbHMgPSBbXTtcclxuICAgIGxldCB0ZXhDb29yZCA9IFtdO1xyXG4gICAgbGV0IGZhY2VzID0gZ2VuZXJhdGVGYWNlcygpO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVCb3hlcygpe1xyXG4gICAgbGV0IGJveGVzID0gW107XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMzYwOyArK2kpe1xyXG4gICAgICBsZXQgcmFkID0gZGVnVG9SYWQoaSk7XHJcbiAgICAgIGxldCBwb3NpdGlvbiA9IFtNYXRoLmNvcyhyYWQpLCBNYXRoLnNpbihyYWQpLCAwXTtcclxuICAgICAgbGV0IHNpemUgPSBbMC4wNSwgMC4wNSwgMC44XTtcclxuICAgICAgYm94ZXMucHVzaCh7IHNpemU6IHNpemUsIHBvc2l0aW9uOiBwb3NpdGlvbiB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBib3hlcztcclxuICB9XHJcblxyXG4gIGNvbnN0IGJveGVzID0gZ2VuZXJhdGVCb3hlcygpO1xyXG4gIFxyXG4gIGJveGVzLmZvckVhY2goYm94ID0+IHtcclxuICAgIGxldCB2ZXJ0aWNlc0JveCA9IGdlbmVyYXRlVmVydGljZXMoLi4uYm94LnNpemUsIGJveC5wb3NpdGlvbik7XHJcbiAgICBsZXQgbm9ybWFsc0JveCA9IGdlbmVyYXRlTm9ybWFscyh2ZXJ0aWNlc0JveCwgZmFjZXMpO1xyXG4gICAgbm9ybWFscyA9IG5vcm1hbHMuY29uY2F0KG5vcm1hbHNCb3gpO1xyXG4gICAgdmVydGljZXMgPSB2ZXJ0aWNlcy5jb25jYXQodG9WZXJ0aWNlcyh2ZXJ0aWNlc0JveCwgZmFjZXMpKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHZlcnRpY2VzOiB2ZXJ0aWNlcyxcclxuICAgIGZhY2VzOiBmYWNlcyxcclxuICAgIHRhbmdlbnRzOiB0YW5nZW50cyxcclxuICAgIGJpdGFuZ2VudHM6IGJpdGFuZ2VudHMsXHJcbiAgICBub3JtYWxzOiBub3JtYWxzLFxyXG4gICAgY29sb3JzOiBjb2xvcnMsXHJcbiAgICB0ZXhDb29yZDogdGV4Q29vcmQsXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgaG9sbG93ID0gbmV3IE5vZGUoKTtcclxuaG9sbG93LmZsYWcgPSBcImhvbGxvd1wiO1xyXG5ob2xsb3cubmFtZSA9IFwiUmluZ1wiO1xyXG5ob2xsb3cubW9kZWwgPSByaW5nKCk7XHJcbmhvbGxvdy50cmFuc2Zvcm0gPSB7XHJcbnRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG5yb3RhdGU6IFsxMCwgMCwgMF0sXHJcbnNjYWxlOiBbMSwgMSwgMV0sXHJcbn07XHJcbmhvbGxvdy5waWNrZWRDb2xvciA9IFs0NS8yNTUsMjE1LzI1NSw5Ni8yNTVdLFxyXG5ob2xsb3cudmlld01hdHJpeCA9IHtcclxuICBjYW1lcmE6IFswLCAwLCA1XSxcclxuICBsb29rQXQ6IFswLCAwLCAwXSxcclxuICB1cDogWzAsIDEsIDBdLFxyXG4gIG5lYXI6IDAuMSxcclxuICBmYXI6IDUwLFxyXG59O1xyXG5ob2xsb3cuZGlmZnVzZSA9IFsxLDEsMV0sXHJcbmhvbGxvdy5zcGVjdWxhciA9IFsxLDEsMV0sXHJcbmhvbGxvdy5hbWJpZW50ID0gWzEsMSwxXSxcclxuaG9sbG93LnNoaW5pbmVzcyA9IDEsXHJcbmhvbGxvdy5jb25zdCA9IHtcclxuICAgIGtkOiAwLjUsXHJcbiAgICBrczogMC4wLFxyXG4gICAga2E6IDEuMCxcclxufVxyXG5ob2xsb3cuYW5pbWF0aW9uID0ge1xyXG4gIGlzQW5pbWF0ZTogdHJ1ZSxcclxuICBmcmFtZXM6IGhvbGxvd0ZyYW1lcygpLFxyXG4gIGN1cnJlbnRGcmFtZTogMCxcclxuICBhbmltYXRpb25GdW5jdGlvbjogQW5pbWF0aW9uLmFuaW1hdGlvblNjcmlwdCgpLFxyXG4gIGlzQXV0bzogdHJ1ZSxcclxuICBpc1JldmVyc2U6IGZhbHNlXHJcbn07XHJcblxyXG5mdW5jdGlvbiBob2xsb3dGcmFtZXMoKSB7XHJcbiAgbGV0IHRyYW5zZm9ybSA9IHtcclxuICAgIHRyYW5zbGF0ZTogWzAsIDAsIDBdLFxyXG4gICAgcm90YXRlOiBbZGVnVG9SYWQoMTApLCAwLCAwXSxcclxuICAgIHNjYWxlOiBbMSwgMSwgMV0sXHJcbiAgfVxyXG4gIGxldCBmcmFtZXMgPSBbXVxyXG4gIGZvcihsZXQgayA9IDA7IGsgPCAzNjA7ICsrayl7XHJcbiAgICAgIGxldCBfdHJhbnNmb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm0pKTtcclxuICAgICAgX3RyYW5zZm9ybS5yb3RhdGVbMF0gPSBkZWdUb1JhZCgoMTAraykgJSAzNjApXHJcbiAgICAgIF90cmFuc2Zvcm0ucm90YXRlWzFdID0gZGVnVG9SYWQoKGsrMSklMzYwKVxyXG4gICAgICBmcmFtZXMucHVzaChfdHJhbnNmb3JtKTtcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIGZyYW1lcztcclxufVxyXG5cclxudmFyIGhvbGxvd1JpbmdNb2RlbCA9IFtcclxuICBob2xsb3dcclxuXVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbGxvd1JpbmdNb2RlbDsiLCIvLyBjb25zdCB7IGRlZmF1bHQ6IE1hdDQgfSA9IHJlcXVpcmUoXCIuL3N0cnVjdHMvbWF0aC9NYXQ0XCIpO1xyXG5pbXBvcnQgTWF0NCBmcm9tIFwiLi9tYXRoL01hdDQuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgIHRoaXMubG9jYWxNYXRyaXggPSBNYXQ0LmdldElkZW50aXR5KCk7XHJcbiAgICAgICAgdGhpcy53b3JsZE1hdHJpeCA9IE1hdDQuZ2V0SWRlbnRpdHkoKTtcclxuICAgICAgICB0aGlzLndvcmxkSW52ZXJzZU1hdHJpeCA9IE1hdDQuZ2V0SWRlbnRpdHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRXb3JsZE1hdHJpeCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53b3JsZE1hdHJpeDtcclxuICAgIH1cclxuICBcclxuICAgIHNldFBhcmVudChwYXJlbnQpIHtcclxuICAgICAgICAvLyBhbHJlYWR5IGhhdmUgcGFyZW50XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0aGlzKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2godGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50Lm5hbWU7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgc2V0V29ybGRNdHgobWF0cml4KSB7XHJcbiAgICAgIGlmIChtYXRyaXggIT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLndvcmxkTWF0cml4ID0gTWF0NC5tdWx0aXBseShtYXRyaXgsIHRoaXMubG9jYWxNYXRyaXgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMud29ybGRNYXRyaXggPSB0aGlzLmxvY2FsTWF0cml4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGNvbnN0IHdvcmxkTWF0cml4ID0gdGhpcy53b3JsZE1hdHJpeDtcclxuICAgICAgdGhpcy53b3JsZEludmVyc2VNYXRyaXggPSBNYXQ0LnRyYW5zcG9zZShcclxuICAgICAgICBNYXQ0LmludmVyc2UodGhpcy53b3JsZE1hdHJpeClcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICBjaGlsZC5zZXRXb3JsZE10eCh3b3JsZE1hdHJpeCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvSlNPTigpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICAgIGFtYmllbnQ6IHRoaXMuYW1iaWVudCxcclxuICAgICAgICAgIGFuaW1hdGlvbjogdGhpcy5hbmltYXRpb24sXHJcbiAgICAgICAgICBjaGlsZHJlbjogdGhpcy5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQudG9KU09OKCkpLFxyXG4gICAgICAgICAgY29uc3Q6IHRoaXMuY29uc3QsXHJcbiAgICAgICAgICBkaWZmdXNlOiB0aGlzLmRpZmZ1c2UsXHJcbiAgICAgICAgICBsb2NhbE1hdHJpeDogdGhpcy5sb2NhbE1hdHJpeCxcclxuICAgICAgICAgIG1vZGVsOiB0aGlzLm1vZGVsLFxyXG4gICAgICAgICAgcGlja2VkQ29sb3I6IHRoaXMucGlja2VkQ29sb3IsXHJcbiAgICAgICAgICBzaGluaW5lc3M6IHRoaXMuc2hpbmluZXNzLFxyXG4gICAgICAgICAgc3BlY3VsYXI6IHRoaXMuc3BlY3VsYXIsXHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRoaXMudHJhbnNmb3JtLFxyXG4gICAgICAgICAgdmlld01hdHJpeDogdGhpcy52aWV3TWF0cml4LCAgXHJcbiAgICAgICAgICB3b3JsZEludmVyc2VNYXRyaXg6IHRoaXMud29ybGRJbnZlcnNlTWF0cml4LFxyXG4gICAgICAgICAgd29ybGRNYXRyaXg6IHRoaXMud29ybGRNYXRyaXgsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZnJvbUpTT04oZGF0YSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IGRhdGEubmFtZTtcclxuICAgICAgICB0aGlzLmFtYmllbnQgPSBkYXRhLmFtYmllbnQ7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSBkYXRhLmFuaW1hdGlvbjtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuID0gZGF0YS5jaGlsZHJlbi5tYXAoY2hpbGREYXRhID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlID0gbmV3IE5vZGUoKTtcclxuICAgICAgICAgICAgY2hpbGROb2RlLmZyb21KU09OKGNoaWxkRGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jb25zdCA9IGRhdGEuY29uc3Q7XHJcbiAgICAgICAgdGhpcy5kaWZmdXNlID0gZGF0YS5kaWZmdXNlO1xyXG4gICAgICAgIHRoaXMubG9jYWxNYXRyaXggPSBkYXRhLmxvY2FsTWF0cml4O1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBkYXRhLm1vZGVsO1xyXG4gICAgICAgIHRoaXMucGlja2VkQ29sb3IgPSBkYXRhLnBpY2tlZENvbG9yO1xyXG4gICAgICAgIHRoaXMuc2hpbmluZXNzID0gZGF0YS5zaGluaW5lc3M7XHJcbiAgICAgICAgdGhpcy5zcGVjdWxhciA9IGRhdGEuc3BlY3VsYXI7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSBkYXRhLnRyYW5zZm9ybTtcclxuICAgICAgICB0aGlzLnZpZXdNYXRyaXggPSBkYXRhLnZpZXdNYXRyaXg7XHJcbiAgICAgICAgdGhpcy53b3JsZEludmVyc2VNYXRyaXggPSBkYXRhLndvcmxkSW52ZXJzZU1hdHJpeDtcclxuICAgICAgICB0aGlzLndvcmxkTWF0cml4ID0gZGF0YS53b3JsZE1hdHJpeDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBcclxuICB9XHJcbiAgIiwiaW1wb3J0IE5vZGUgZnJvbSBcIi4uL3N0cnVjdHMvbm9kZS5qc1wiO1xyXG5pbXBvcnQgeyBkZWdUb1JhZCwgcmFkVG9EZWcgfSBmcm9tIFwiLi4vc3RydWN0cy9tYXRoL21hdGhVdGlscy5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYXRpb257XHJcblxyXG4gICAgc3RhdGljIHBhcnNlQW5pbWF0aW9uRnVuY3Rpb24obW9kZWwpe1xyXG4gICAgICAgIGxldCBhbmltYXRpb24gPSBtb2RlbC5hbmltYXRpb247XHJcbiAgICAgICAgaWYoYW5pbWF0aW9uLmlzQW5pbWF0ZSl7XHJcbiAgICAgICAgICAgIC8vIHBhcnNlIHN0cmluZyB0byBmdW5jdGlvblxyXG4gICAgICAgICAgICBsZXQgX2FuaW1hdGlvbkZ1bmN0aW9uID0gZXZhbChhbmltYXRpb24uYW5pbWF0aW9uRnVuY3Rpb24pXHJcbiAgICAgICAgICAgIHJldHVybiBfYW5pbWF0aW9uRnVuY3Rpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhbmltYXRlKHBhcmVudF9tb2RlbCwgZGVsdGFUaW1lKXtcclxuICAgICAgICBsZXQgYW5pbWF0aW9uID0gcGFyZW50X21vZGVsLmFuaW1hdGlvbjtcclxuICAgICAgICAgICAgaWYoYW5pbWF0aW9uLmlzQW5pbWF0ZSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgX2FuaW1hdGlvbkZ1bmN0aW9uID0gQW5pbWF0aW9uLnBhcnNlQW5pbWF0aW9uRnVuY3Rpb24ocGFyZW50X21vZGVsKTtcclxuICAgICAgICAgICAgICAgIGlmKF9hbmltYXRpb25GdW5jdGlvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0ciA9IHBhcmVudF9tb2RlbC5hbmltYXRpb24uYW5pbWF0aW9uRnVuY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5hbmltYXRpb25GdW5jdGlvbiA9IF9hbmltYXRpb25GdW5jdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmFuaW1hdGlvbkZ1bmN0aW9uKHBhcmVudF9tb2RlbCwgZGVsdGFUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmFuaW1hdGlvbkZ1bmN0aW9uID0gc3RyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBwYXJlbnRfbW9kZWwuY2hpbGRyZW4peyAgICBcclxuICAgICAgICAgICAgQW5pbWF0aW9uLmFuaW1hdGUobW9kZWwsIGRlbHRhVGltZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmVjdXJzZSBlYWNoIG5vZGUgY2hpbGRcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0QXV0byhwYXJlbnRfbW9kZWwpe1xyXG4gICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uaXNBdXRvID0gIXBhcmVudF9tb2RlbC5hbmltYXRpb24uaXNBdXRvO1xyXG4gICAgICAgIGZvcihsZXQgbW9kZWwgb2YgcGFyZW50X21vZGVsLmNoaWxkcmVuKXsgICAgXHJcbiAgICAgICAgICAgIEFuaW1hdGlvbi5zZXRBdXRvKG1vZGVsKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcGxheUFuaW1hdGlvbihwYXJlbnRfbW9kZWwpe1xyXG4gICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uaXNBbmltYXRlID0gdHJ1ZTtcclxuICAgICAgICBpZihwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmlzUmV2ZXJzZSl7XHJcbiAgICAgICAgICAgIGlmKHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzKXtcclxuICAgICAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lcy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHBhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lID0gMDtcclxuICAgICAgICBmb3IobGV0IG1vZGVsIG9mIHBhcmVudF9tb2RlbC5jaGlsZHJlbil7ICAgIFxyXG4gICAgICAgICAgICBBbmltYXRpb24ucGxheUFuaW1hdGlvbihtb2RlbClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHBhdXNlQ29udGludWVBbmltYXRpb24ocGFyZW50X21vZGVsKXtcclxuICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmlzQW5pbWF0ZSA9ICFwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmlzQW5pbWF0ZTtcclxuICAgICAgICBmb3IobGV0IG1vZGVsIG9mIHBhcmVudF9tb2RlbC5jaGlsZHJlbil7ICAgIFxyXG4gICAgICAgICAgICBBbmltYXRpb24ucGF1c2VDb250aW51ZUFuaW1hdGlvbihtb2RlbClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJldmVyc2VBbmltYXRpb24ocGFyZW50X21vZGVsKXtcclxuICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmlzUmV2ZXJzZSA9ICFwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmlzUmV2ZXJzZTtcclxuICAgICAgICBmb3IobGV0IG1vZGVsIG9mIHBhcmVudF9tb2RlbC5jaGlsZHJlbil7ICAgIFxyXG4gICAgICAgICAgICBBbmltYXRpb24ucmV2ZXJzZUFuaW1hdGlvbihtb2RlbClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFuaW1hdGlvblNjcmlwdCgpe1xyXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvblNjcmlwdCA9IGAoKF9ub2RlLCBkZWx0YVRpbWUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGZyYW1lcyA9IF9ub2RlLmFuaW1hdGlvbi5mcmFtZXM7XHJcbiAgICAgICAgICAgIGlmKF9ub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPj0gZnJhbWVzLmxlbmd0aCB8fCBfbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lIDwgMCl7XHJcbiAgICAgICAgICAgICAgICBpZihfbm9kZS5hbmltYXRpb24uaXNBdXRvKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihfbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lIDwgMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9ub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPSBmcmFtZXMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgX25vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA9IF9ub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgJSBmcmFtZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXsgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX25vZGUuYW5pbWF0aW9uLmlzQW5pbWF0ZSkge1xyXG4gICAgICAgICAgICAgICAgX25vZGUudHJhbnNmb3JtID0gZnJhbWVzW19ub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWVdO1xyXG4gICAgICAgICAgICAgICAgaWYoX25vZGUuYW5pbWF0aW9uLmlzUmV2ZXJzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgX25vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZS0tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBfbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lKys7XHJcbiAgICAgICAgICAgICAgICAgICAgIGlmKF9ub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPT0gZnJhbWVzLmxlbmd0aCAmJiAhX25vZGUuYW5pbWF0aW9uLmlzQXV0bykgX25vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA9IGZyYW1lcy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlgXHJcbiAgICAgICAgcmV0dXJuIGFuaW1hdGlvblNjcmlwdDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbmV4dEZyYW1lKHBhcmVudF9tb2RlbCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYocGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMpe1xyXG4gICAgICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSsrO1xyXG4gICAgICAgICAgICBpZihwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA+PSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lcy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhcmVudF9tb2RlbC50cmFuc2Zvcm0gPSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lc1twYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgbW9kZWwgb2YgcGFyZW50X21vZGVsLmNoaWxkcmVuKXsgICAgXHJcbiAgICAgICAgICAgIEFuaW1hdGlvbi5uZXh0RnJhbWUobW9kZWwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwcmV2RnJhbWUocGFyZW50X21vZGVsKXtcclxuICAgICAgICBpZihwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lcyl7XHJcbiAgICAgICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lLS07XHJcbiAgICAgICAgICAgIGlmKHBhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lIDwgMCl7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGFyZW50X21vZGVsLnRyYW5zZm9ybSA9IHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzW3BhcmVudF9tb2RlbC5hbmltYXRpb24uY3VycmVudEZyYW1lXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBwYXJlbnRfbW9kZWwuY2hpbGRyZW4peyAgICBcclxuICAgICAgICAgICAgQW5pbWF0aW9uLnByZXZGcmFtZShtb2RlbClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZpcnN0RnJhbWUocGFyZW50X21vZGVsKXtcclxuICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmlzQW5pbWF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmKHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzKXtcclxuICAgICAgICAgICAgcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPSAwO1xyXG4gICAgICAgICAgICBwYXJlbnRfbW9kZWwudHJhbnNmb3JtID0gcGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXNbcGFyZW50X21vZGVsLmFuaW1hdGlvbi5jdXJyZW50RnJhbWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IG1vZGVsIG9mIHBhcmVudF9tb2RlbC5jaGlsZHJlbil7ICAgIFxyXG4gICAgICAgICAgICBBbmltYXRpb24uZmlyc3RGcmFtZShtb2RlbClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxhc3RGcmFtZShwYXJlbnRfbW9kZWwpe1xyXG4gICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uaXNBbmltYXRlID0gZmFsc2U7XHJcbiAgICAgICAgaWYocGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMpe1xyXG4gICAgICAgICAgICBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA9IHBhcmVudF9tb2RlbC5hbmltYXRpb24uZnJhbWVzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIHBhcmVudF9tb2RlbC50cmFuc2Zvcm0gPSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lc1twYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgbW9kZWwgb2YgcGFyZW50X21vZGVsLmNoaWxkcmVuKXsgICAgXHJcbiAgICAgICAgICAgIEFuaW1hdGlvbi5sYXN0RnJhbWUobW9kZWwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0b3RhbE1vZGVsRnJhbWVzKHBhcmVudF9tb2RlbCl7XHJcbiAgICAgICAgbGV0IHRvdGFsRnJhbWVzID0gMDtcclxuICAgICAgICBpZihwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmZyYW1lcyl7XHJcbiAgICAgICAgICAgIHRvdGFsRnJhbWVzID0gcGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGNoaWxkX21vZGVsIG9mIHBhcmVudF9tb2RlbC5jaGlsZHJlbil7ICAgIFxyXG4gICAgICAgICAgICAvLyByZWN1cnNlIGVhY2ggbm9kZSBjaGlsZCwgZmluZCBtYXggZnJhbWVcclxuICAgICAgICAgICAgbGV0IGNoaWxkVG90YWxGcmFtZXMgPSBBbmltYXRpb24udG90YWxNb2RlbEZyYW1lcyhjaGlsZF9tb2RlbCk7XHJcbiAgICAgICAgICAgIGlmKGNoaWxkVG90YWxGcmFtZXMgPiB0b3RhbEZyYW1lcyl7XHJcbiAgICAgICAgICAgICAgICB0b3RhbEZyYW1lcyA9IGNoaWxkVG90YWxGcmFtZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRvdGFsRnJhbWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0b3RhbE5vZGVGcmFtZXMocGFyZW50X21vZGVsKXtcclxuICAgICAgICBsZXQgdG90YWxOb2RlRnJhbWVzID0gXCItXCI7XHJcbiAgICAgICAgaWYocGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMpe1xyXG4gICAgICAgICAgICAvLyBhcyBzdHJpbmdcclxuICAgICAgICAgICAgdG90YWxOb2RlRnJhbWVzID0gcGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMubGVuZ3RoLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0b3RhbE5vZGVGcmFtZXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGN1cnJlbnRNb2RlbEZyYW1lKHBhcmVudF9tb2RlbCl7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICAgICAgaWYocGFyZW50X21vZGVsLmFuaW1hdGlvbi5mcmFtZXMpe1xyXG4gICAgICAgICAgICBjdXJyZW50RnJhbWUgPSBwYXJlbnRfbW9kZWwuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBwYXJlbnRfbW9kZWwuY2hpbGRyZW4peyAgICBcclxuICAgICAgICAgICAgLy8gcmVjdXJzZSBlYWNoIG5vZGUgY2hpbGQsIGZpbmQgbWF4IGZyYW1lXHJcbiAgICAgICAgICAgIGxldCBjaGlsZEN1cnJlbnRGcmFtZSA9IEFuaW1hdGlvbi5jdXJyZW50TW9kZWxGcmFtZShtb2RlbCk7XHJcbiAgICAgICAgICAgIGlmKGNoaWxkQ3VycmVudEZyYW1lID4gY3VycmVudEZyYW1lKXtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRGcmFtZSA9IGNoaWxkQ3VycmVudEZyYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjdXJyZW50RnJhbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGN1cnJlbnROb2RlRnJhbWUobm9kZSl7XHJcbiAgICAgICAgbGV0IGN1cnJGcmFtZSA9IFwiLVwiXHJcbiAgICAgICAgaWYobm9kZS5hbmltYXRpb24uZnJhbWVzKXtcclxuICAgICAgICAgICAgY3VyckZyYW1lID0gbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lLnRvU3RyaW5nKClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGN1cnJGcmFtZVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoYW5kbGVUcmFuc2Zvcm0obm9kZSwgZG9jKXtcclxuICAgICAgICBpZighbm9kZS5hbmltYXRpb24uaXNBbmltYXRlKSByZXR1cm47XHJcbiAgICAgICAgbGV0IFt0eCwgdHksIHR6XSA9IG5vZGUudHJhbnNmb3JtLnRyYW5zbGF0ZVxyXG4gICAgICAgIGxldCBbcngsIHJ5LCByel0gPSBub2RlLnRyYW5zZm9ybS5yb3RhdGVcclxuICAgICAgICByeCA9IHJhZFRvRGVnKHJ4KTsgXHJcbiAgICAgICAgcnkgPSByYWRUb0RlZyhyeSk7IFxyXG4gICAgICAgIHJ6ID0gcmFkVG9EZWcocnopO1xyXG4gICAgICAgIGxldCBbc3gsc3ksc3pdID0gbm9kZS50cmFuc2Zvcm0uc2NhbGVcclxuXHJcbiAgICAgICAvLyBzbGlkZXIgdHgsIHR5LCB0eiBcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2xhdGlvbi14LXNsaWRlclwiKS52YWx1ZSA9IHR4KjUwO1xyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInRyYW5zbGF0aW9uLXktc2xpZGVyXCIpLnZhbHVlID0gdHkqNTA7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwidHJhbnNsYXRpb24tei1zbGlkZXJcIikudmFsdWUgPSB0eio1MDtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJ0cmFuc2xhdGlvbi14LXNsaWRlci12YWx1ZVwiKS5pbm5lckhUTUwgPSB0eDsgICAgXHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwidHJhbnNsYXRpb24teS1zbGlkZXItdmFsdWVcIikuaW5uZXJIVE1MID0gdHk7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwidHJhbnNsYXRpb24tei1zbGlkZXItdmFsdWVcIikuaW5uZXJIVE1MID0gdHo7XHJcbiAgICAgICAgLy8gcm90YXRpb24gdHgsIHR5LCB0eiBcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJyb3RhdGlvbi14LXNsaWRlclwiKS52YWx1ZSA9IHJ4O1xyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInJvdGF0aW9uLXktc2xpZGVyXCIpLnZhbHVlID0gcnk7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwicm90YXRpb24tei1zbGlkZXJcIikudmFsdWUgPSByejtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJyb3RhdGlvbi14LXNsaWRlci12YWx1ZVwiKS5pbm5lckhUTUwgPSByeC50b0ZpeGVkKDIpO1xyXG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcInJvdGF0aW9uLXktc2xpZGVyLXZhbHVlXCIpLmlubmVySFRNTCA9IHJ5LnRvRml4ZWQoMik7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwicm90YXRpb24tei1zbGlkZXItdmFsdWVcIikuaW5uZXJIVE1MID0gcnoudG9GaXhlZCgyKTtcclxuICAgICAgICAvLyBzY2FsZSBzeCwgc3ksIHN6XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwic2NhbGF0aW9uLXgtc2xpZGVyXCIpLnZhbHVlID0gc3gqMTA7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwic2NhbGF0aW9uLXktc2xpZGVyXCIpLnZhbHVlID0gc3kqMTA7XHJcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwic2NhbGF0aW9uLXotc2xpZGVyXCIpLnZhbHVlID0gc3oqMTA7XHJcbiAgICAgICBcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJzY2FsYXRpb24teC1zbGlkZXItdmFsdWVcIikuaW5uZXJIVE1MID0gKHN4ICogMS4wMCkudG9GaXhlZCgyKTtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJzY2FsYXRpb24teS1zbGlkZXItdmFsdWVcIikuaW5uZXJIVE1MID0gKHN5ICogMS4wMCkudG9GaXhlZCgyKTtcclxuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJzY2FsYXRpb24tei1zbGlkZXItdmFsdWVcIikuaW5uZXJIVE1MID0gKHN6ICogMS4wMCkudG9GaXhlZCgyKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGlzYWJsZUFuaW1hdGlvbihwYXJlbnRfbW9kZWwpe1xyXG4gICAgICAgIHBhcmVudF9tb2RlbC5hbmltYXRpb24uaXNBbmltYXRlID0gZmFsc2U7XHJcbiAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBwYXJlbnRfbW9kZWwuY2hpbGRyZW4peyAgICBcclxuICAgICAgICAgICAgQW5pbWF0aW9uLmRpc2FibGVBbmltYXRpb24obW9kZWwpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkZWxldGVDdXJyZW50RnJhbWUobm9kZSl7XHJcbiAgICAgICAgaWYobm9kZS5hbmltYXRpb24uZnJhbWVzKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobm9kZS5hbmltYXRpb24uZnJhbWVzKVxyXG4gICAgICAgICAgICBub2RlLmFuaW1hdGlvbi5mcmFtZXMuc3BsaWNlKG5vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZS0xLCAxKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobm9kZS5hbmltYXRpb24uZnJhbWVzKVxyXG4gICAgICAgICAgICBpZihub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPj0gbm9kZS5hbmltYXRpb24uZnJhbWVzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgPSBub2RlLmFuaW1hdGlvbi5mcmFtZXMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihub2RlLmFuaW1hdGlvbi5mcmFtZXMubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hbmltYXRpb24uZnJhbWVzID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIG5vZGUuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGVkaXRDdXJyZW50RnJhbWUobm9kZSwgdHJhbnNmb3JtKXtcclxuICAgICAgICBpZihub2RlLmFuaW1hdGlvbi5mcmFtZXMpe1xyXG4gICAgICAgICAgICBsZXQgY3VyckZyYW1lID0gbm9kZS5hbmltYXRpb24uY3VycmVudEZyYW1lO1xyXG4gICAgICAgICAgICBpZihjdXJyRnJhbWUgPCBub2RlLmFuaW1hdGlvbi5mcmFtZXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIG5vZGUuYW5pbWF0aW9uLmZyYW1lc1tjdXJyRnJhbWVdID0gdHJhbnNmb3JtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoY3VyckZyYW1lID09IG5vZGUuYW5pbWF0aW9uLmZyYW1lcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgY3VyckZyYW1lID0gY3VyckZyYW1lIC0gMTtcclxuICAgICAgICAgICAgICAgIG5vZGUuYW5pbWF0aW9uLmZyYW1lc1tjdXJyRnJhbWVdID0gdHJhbnNmb3JtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyB1cGRhdGUgbm9kZSB0cmFuc2Zvcm1cclxuICAgICAgICAgICAgbm9kZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgVmVjMyBmcm9tIFwiLi4vc3RydWN0cy9tYXRoL1ZlYzMuanNcIlxyXG5pbXBvcnQgTWF0NCBmcm9tIFwiLi4vc3RydWN0cy9tYXRoL01hdDQuanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhe1xyXG4gICAgc3RhdGljIHByb2plY3Rpb25PcnRvZ3JhcGhpYyhsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikge1xyXG4gICAgICAgIC8vIE5vdGU6IFRoaXMgbWF0cml4IGZsaXBzIHRoZSBZIGF4aXMgc28gMCBpcyBhdCB0aGUgdG9wLlxyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gcmlnaHQtbGVmdFxyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRvcC1ib3R0b21cclxuICAgICAgICBjb25zdCBkZXB0aCA9IGZhciAtIG5lYXJcclxuICAgICAgICBjb25zdCBob3Jpem9udGFsUmF0aW8gPSAocmlnaHQgKyBsZWZ0KSAvIHdpZHRoXHJcbiAgICAgICAgY29uc3QgdmVydGljYWxSYXRpbyA9ICh0b3AgKyBib3R0b20pIC8gaGVpZ2h0XHJcbiAgICAgICAgY29uc3QgZGVwdGhSYXRpbyA9IChmYXIgKyBuZWFyKSAvIGRlcHRoXHJcblxyXG4gICAgICAgIHJldHVybiBbMiAvICh3aWR0aCksIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAyIC8gKGhlaWdodCksIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAtMiAvIChkZXB0aCksIDAsXHJcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsUmF0aW8sIHZlcnRpY2FsUmF0aW8sIGRlcHRoUmF0aW8sIDFdO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgcHJvamVjdGlvblBlcnNwZWN0aXZlKGZvdiwgYXNwZWN0LCBuZWFyLCBmYXIpe1xyXG4gICAgICAgIGNvbnN0IGYgPSAxLjAgLyBNYXRoLnRhbihmb3YgLyAyKVxyXG4gICAgICAgIGNvbnN0IHJhbmdlSW52ID0gMSAvIChuZWFyIC0gZmFyKVxyXG5cclxuICAgICAgICByZXR1cm4gW2YgLyBhc3BlY3QsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCBmLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgKG5lYXIgKyBmYXIpICogcmFuZ2VJbnYsIC0xLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgbmVhciAqIGZhciAqIHJhbmdlSW52ICogMiwgMF1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcHJvamVjdGlvbk9ibGlxdWUodGhldGEsIHBoaSl7XHJcblxyXG4gICAgICAgIHZhciB0ID0gTWF0aC50YW4odGhldGEpXHJcbiAgICAgICAgdCA9IHQgPT0gMCA/IDAuMDAwMDEgOiB0XHJcbiAgICAgICAgdmFyIHAgPSBNYXRoLnRhbihwaGkpXHJcbiAgICAgICAgcCA9IHAgPT0gMCA/IDAuMDAwMDEgOiBwXHJcbiAgICAgICAgcmV0dXJuIFsxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIC0xL3QsIC0xL3AsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAxXVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBsb29rRGlyZWN0aW9uKGV5ZSwgY2VudGVyLCB1cCl7XHJcbiAgICAgICAgLy8gbm9ybWFsaXplIGVhY2ggYXJyYXlcclxuICAgICAgICAvLyBjaGFuZ2UgYXMgVmVjMyBmcm9tIGFycmF5XHJcbiAgICAgICAgbGV0IF9leWUgPSBWZWMzLmZyb21BcnJheShleWUpXHJcbiAgICAgICAgbGV0IF9jZW50ZXIgPSBWZWMzLmZyb21BcnJheShjZW50ZXIpXHJcbiAgICAgICAgbGV0IF91cCA9IFZlYzMuZnJvbUFycmF5KHVwKVxyXG4gICAgXHJcblxyXG5cclxuICAgICAgICBjb25zdCBmID0gVmVjMy51bml0VmVjdG9yKFZlYzMuc3ViKF9leWUsIF9jZW50ZXIpKSAvLyB6QXhpc1xyXG4gICAgICAgIGNvbnN0IHMgPSBWZWMzLnVuaXRWZWN0b3IoVmVjMy5jcm9zcyhfdXAsIGYpKSAvLyB4QXhpc1xyXG4gICAgICAgIGNvbnN0IHUgPSBWZWMzLnVuaXRWZWN0b3IoVmVjMy5jcm9zcyhmLCBzKSlcclxuXHJcbiAgICAgICAgcmV0dXJuIFtzLngsIHMueSwgcy56LCAwLFxyXG4gICAgICAgICAgICAgICAgdS54LCB1LnksIHUueiwgMCxcclxuICAgICAgICAgICAgICAgIGYueCwgZi55LCBmLnosIDAsXHJcbiAgICAgICAgICAgICAgICBleWVbMF0sIGV5ZVsxXSwgZXllWzJdLCAxXVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWFrZVpUb1dNYXRyaXgoZnVkZ2VGYWN0b3Ipe1xyXG4gICAgICAgIHJldHVybiBbMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgZnVkZ2VGYWN0b3IsIDFdXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHByb2plY3Rpb25NYXRyaXgocHJvamVjdGlvbl90eXBlLCBfZm92LCBfYXNwZWN0LF9uZWFyLCBfZmFyLCB0aGV0YSA9IDkwLCBwaGkgPSA5MCl7XHJcbiAgICAgICAgY29uc3QgYXNwZWN0ID0gX2FzcGVjdDtcclxuICAgICAgICBjb25zdCBmb3YgPSBfZm92O1xyXG4gICAgICAgIGNvbnN0IGxlZnQgPSAtMjtcclxuICAgICAgICBjb25zdCByaWdodCA9IDI7XHJcbiAgICAgICAgY29uc3QgYm90dG9tID0gLTI7XHJcbiAgICAgICAgY29uc3QgdG9wID0gMjtcclxuICAgICAgICBjb25zdCBmYXJPcnRobyA9IF9mYXI7XHJcbiAgICAgICAgY29uc3QgbmVhck9ydGhvID0gLWZhck9ydGhvO1xyXG4gICAgXHJcbiAgICAgICAgc3dpdGNoIChwcm9qZWN0aW9uX3R5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIm9ydGhvZ3JhcGhpY1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIENhbWVyYS5wcm9qZWN0aW9uT3J0b2dyYXBoaWMobGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyT3J0aG8sIGZhck9ydGhvKVxyXG4gICAgICAgICAgICBjYXNlIFwib2JsaXF1ZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdDQubXVsdGlwbHkoXHJcbiAgICAgICAgICAgICAgICAgICAgQ2FtZXJhLnByb2plY3Rpb25PYmxpcXVlKHRoZXRhLCBwaGkpLFxyXG4gICAgICAgICAgICAgICAgICAgIENhbWVyYS5wcm9qZWN0aW9uT3J0b2dyYXBoaWMobGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyT3J0aG8sIGZhck9ydGhvKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY2FzZSBcInBlcnNwZWN0aXZlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FtZXJhLnByb2plY3Rpb25QZXJzcGVjdGl2ZShcclxuICAgICAgICAgICAgICAgICAgICBmb3YsXHJcbiAgICAgICAgICAgICAgICAgICAgYXNwZWN0LFxyXG4gICAgICAgICAgICAgICAgICAgIF9uZWFyLFxyXG4gICAgICAgICAgICAgICAgICAgIF9mYXJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FtZXJhLnByb2plY3Rpb25PcnRvZ3JhcGhpYyhsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXJPcnRobywgZmFyT3J0aG8pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB2aWV3TWF0cml4KG9yaWVudGF0aW9uLCBsb29rQXQsIHVwKXtcclxuICAgICAgICBsZXQgW3JvbGwsIHBpdGNoLCByYWRpdXNdID0gb3JpZW50YXRpb25cclxuXHJcbiAgICAgICAgLy8gcm9sbCwgcGl0Y2gsIHJhZGl1c1xyXG4gICAgICAgIHZhciBjYW1lcmFNYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICAgICAgICBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICAgICAgICAgICAgTWF0NC5yb3RhdGVZKHBpdGNoKSxcclxuICAgICAgICAgICAgICAgIE1hdDQucm90YXRlWChyb2xsKSksXHJcbiAgICAgICAgICAgIE1hdDQudHJhbnNsYXRlKDAsIDAsIHJhZGl1cylcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHZhciBjYW1lcmFQb3NpdGlvbiA9IFtcclxuICAgICAgICAgICAgY2FtZXJhTWF0cml4WzEyXSxcclxuICAgICAgICAgICAgY2FtZXJhTWF0cml4WzEzXSxcclxuICAgICAgICAgICAgY2FtZXJhTWF0cml4WzE0XVxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgdmFyIGNhbWVyYU1hdHJpeCA9IENhbWVyYS5sb29rRGlyZWN0aW9uKGNhbWVyYVBvc2l0aW9uLCBsb29rQXQsIHVwKVxyXG5cclxuICAgICAgICB2YXIgdmlld01hdHJpeCA9IE1hdDQuaW52ZXJzZShjYW1lcmFNYXRyaXgpXHJcblxyXG4gICAgICAgIHJldHVybiB2aWV3TWF0cml4XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgTm9kZSBmcm9tIFwiLi4vc3RydWN0cy9ub2RlLmpzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUpTT04ob2JqZWN0cykge1xyXG5cclxuICAgIC8vIENvbnZlcnQgTm9kZSBpbnN0YW5jZXMgdG8gc2VyaWFsaXphYmxlIGZvcm1hdFxyXG4gICAgY29uc3Qgc2VyaWFsaXphYmxlT2JqZWN0cyA9IG9iamVjdHMubWFwKG9iaiA9PiBvYmoudG9KU09OKCkpO1xyXG4gICAgY29uc3QganNvbkNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShzZXJpYWxpemFibGVPYmplY3RzLCBudWxsLCAyKTtcclxuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbanNvbkNvbnRlbnRdLCB7IHR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiIH0pO1xyXG5cclxuICAgIC8vIEVsZW1lbnQgdG8gdHJpZ2dlciB0aGUgZG93bmxvYWRcclxuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGEuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICBhLmRvd25sb2FkID0gb2JqZWN0c1swXS5uYW1lICsgXCIuanNvblwiO1xyXG4gICAgYS5oaWRkZW4gPSB0cnVlO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcclxuXHJcbiAgICAvLyBUcmlnZ2VyIGRvd25sb2FkXHJcbiAgICBhLmNsaWNrKCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpOyAgLy8gQ2xlYW4gdXBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRKU09OKGZpbGVJbnB1dCwgY2FsbGJhY2spIHtcclxuICAgIGNvbnN0IGZpbGUgPSBmaWxlSW5wdXQuZmlsZXNbMF07XHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGpzb25Db250ZW50ID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShqc29uQ29udGVudCk7XHJcbiAgICAgICAgY29uc3Qgb2JqZWN0cyA9IGRhdGEubWFwKG9iakRhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBub2RlID0gbmV3IE5vZGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGUuZnJvbUpTT04ob2JqRGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2FsbGJhY2sob2JqZWN0cyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmlsZSBjb3VsZCBub3QgYmUgcmVhZCEgQ29kZSBcIiArIGV2ZW50LnRhcmdldC5lcnJvci5jb2RlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFwZXJUZXh0dXJlKGdsKSB7XHJcbiAgY29uc3QgdGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcclxuICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcclxuICBnbC50ZXhJbWFnZTJEKFxyXG4gICAgZ2wuVEVYVFVSRV8yRCxcclxuICAgIDAsXHJcbiAgICBnbC5SR0JBLFxyXG4gICAgMSxcclxuICAgIDEsXHJcbiAgICAwLFxyXG4gICAgZ2wuUkdCQSxcclxuICAgIGdsLlVOU0lHTkVEX0JZVEUsXHJcbiAgICBuZXcgVWludDhBcnJheShbMCwgMCwgMCwgMF0pXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xyXG4gICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBpbWFnZSk7XHJcbiAgICBpZiAoaXNQb3dlck9mMihpbWFnZS53aWR0aCkgJiYgaXNQb3dlck9mMihpbWFnZS5oZWlnaHQpKSB7XHJcbiAgICAgIGdsLmdlbmVyYXRlTWlwbWFwKGdsLlRFWFRVUkVfMkQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGltYWdlLnNyYyA9IFwiLi9tYXBwaW5nL3BhcGVyLmpwZWdcIjsgXHJcbiAgcmV0dXJuIHRleHR1cmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUG93ZXJPZjIodmFsdWUpIHtcclxuICByZXR1cm4gKHZhbHVlICYgKHZhbHVlIC0gMSkpID09IDA7XHJcbn0gXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRW52aXJvbm1lbnRUZXh0dXJlKGdsKSB7XHJcbiAgY29uc3QgdGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcclxuICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFX0NVQkVfTUFQLCB0ZXh0dXJlKTtcclxuXHJcbiAgY29uc3QgZmFjZUluZm9zID0gW1xyXG4gICAgeyB0YXJnZXQ6IGdsLlRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWCwgdXJsOiBcIi4vbWFwcGluZy9lbnZpcm9ubWVudC5qcGdcIiB9LFxyXG4gICAgeyB0YXJnZXQ6IGdsLlRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWCwgdXJsOiBcIi4vbWFwcGluZy9lbnZpcm9ubWVudC5qcGdcIiB9LFxyXG4gICAgeyB0YXJnZXQ6IGdsLlRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWSwgdXJsOiBcIi4vbWFwcGluZy9lbnZpcm9ubWVudC5qcGdcIiB9LFxyXG4gICAgeyB0YXJnZXQ6IGdsLlRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWSwgdXJsOiBcIi4vbWFwcGluZy9lbnZpcm9ubWVudC5qcGdcIiB9LFxyXG4gICAgeyB0YXJnZXQ6IGdsLlRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWiwgdXJsOiBcIi4vbWFwcGluZy9lbnZpcm9ubWVudC5qcGdcIiB9LFxyXG4gICAgeyB0YXJnZXQ6IGdsLlRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWiwgdXJsOiBcIi4vbWFwcGluZy9lbnZpcm9ubWVudC5qcGdcIiB9LFxyXG4gIF07XHJcblxyXG4gIGZhY2VJbmZvcy5mb3JFYWNoKChmYWNlSW5mbykgPT4ge1xyXG4gICAgY29uc3QgeyB0YXJnZXQsIHVybCB9ID0gZmFjZUluZm87XHJcblxyXG4gICAgZ2wudGV4SW1hZ2UyRChcclxuICAgICAgdGFyZ2V0LFxyXG4gICAgICAwLFxyXG4gICAgICBnbC5SR0JBLFxyXG4gICAgICA1MTIsXHJcbiAgICAgIDUxMixcclxuICAgICAgMCxcclxuICAgICAgZ2wuUkdCQSxcclxuICAgICAgZ2wuVU5TSUdORURfQllURSxcclxuICAgICAgbnVsbFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2Uuc3JjID0gdXJsO1xyXG4gICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFX0NVQkVfTUFQLCB0ZXh0dXJlKTtcclxuICAgICAgZ2wudGV4SW1hZ2UyRCh0YXJnZXQsIDAsIGdsLlJHQkEsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIGltYWdlKTtcclxuICAgICAgZ2wuZ2VuZXJhdGVNaXBtYXAoZ2wuVEVYVFVSRV9DVUJFX01BUCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgZ2wuZ2VuZXJhdGVNaXBtYXAoZ2wuVEVYVFVSRV9DVUJFX01BUCk7XHJcbiAgZ2wudGV4UGFyYW1ldGVyaShcclxuICAgIGdsLlRFWFRVUkVfQ1VCRV9NQVAsXHJcbiAgICBnbC5URVhUVVJFX01JTl9GSUxURVIsXHJcbiAgICBnbC5MSU5FQVJfTUlQTUFQX0xJTkVBUlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCdW1wVGV4dHVyZShnbCkge1xyXG4gIGNvbnN0IHRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XHJcbiAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XHJcbiAgZ2wudGV4SW1hZ2UyRChcclxuICAgIGdsLlRFWFRVUkVfMkQsIFxyXG4gICAgMCwgXHJcbiAgICBnbC5SR0JBLCBcclxuICAgIDEsIFxyXG4gICAgMSwgXHJcbiAgICAwLCBcclxuICAgIGdsLlJHQkEsIFxyXG4gICAgZ2wuVU5TSUdORURfQllURSwgXHJcbiAgICBuZXcgVWludDhBcnJheShbMjU1LCAwLCAwLCAyNTVdKVxyXG4gICk7XHJcblxyXG4gIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGltYWdlLnNyYyA9IFwiLi9tYXBwaW5nL2J1bXAucG5nXCI7XHJcbiAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XHJcbiAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIGltYWdlKTtcclxuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5MSU5FQVIpO1xyXG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUik7XHJcbiAgfVxyXG59XHJcbiAgIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==