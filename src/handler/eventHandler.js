import { target, 
    targetRoot, 
    setProjectionType, 
    setObliquePhi, 
    setObliqueTheta, 
    setTarget, 
    renameTarget,
    lightDirection,
    deleteNode,
    objects,
    setTargetRoot, 
    changeModelObject, 
    changeMappingTexture,
    addNode,
    loadObjects,
    model,
    addModel} from "../index.js"
import { degToRad, radToDeg } from "../structs/math/mathUtils.js";
import Animation from "../utils/Animation.js";
import { loadJSON, saveJSON } from "../utils/fileManager.js";
import CharacterController from "../utils/CharacterController.js";

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
export const nodeName = document.getElementById('node-name');
const renameButton = document.getElementById('rename-btn');
const deleteButton = document.getElementById('delete-btn');
const addChildButton = document.getElementById('add-child-btn')
const importButton = document.getElementById('import-btn');
const exportButton = document.getElementById('export-btn');

// save and load
const saveButton = document.getElementById('save-btn'); 
const load = document.getElementById('load-btn');


// initial
export function initOptionModel(model){
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
    target.transform.rotate[0] = degToRad(rotationX.value);
    rotationXValue.textContent = rotationX.value;
})
rotationY.addEventListener('input', function(){
    target.transform.rotate[1] = degToRad(rotationY.value);
    rotationYValue.textContent = rotationY.value;
})
rotationZ.addEventListener('input', function(){
    target.transform.rotate[2] = degToRad(rotationZ.value);
    rotationZValue.textContent = rotationZ.value;
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

// model selection
modelSelection.addEventListener('change', function(){   
    console.log(modelSelection.value);
    changeModelObject(modelSelection.value);
})

// camera
orthographic.addEventListener('click', function(){
    setProjectionType("orthographic");
})

oblique.addEventListener('click', function(){
    setProjectionType("oblique");
})

perspective.addEventListener('click', function(){
    setProjectionType("perspective");
})

export function clearComponent () {
    componentContainer.innerHTML = '';
}

export function displayComponent(treeLevel = 0, objects){
    objects.forEach((object) => {
        let newComponent = document.createElement('div'); 
        newComponent.style = 'padding-left: ' + treeLevel*1.5 + 'em;';
        newComponent.innerHTML += `
            <button class="max-w-fit component">${object.name}</button>
        `;
        let createdButton = newComponent.querySelector('.component');
        createdButton.addEventListener('click', function(evt) {
            setTarget(object);
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

export function handleTransform(node){
    // change translation, rotation, scalation
    let [tx, ty, tz] = node.transform.translate
    // times 50

    let [rx, ry, rz] = node.transform.rotate
    // change with radToDeg
    if(true){
    rx = radToDeg(rx);
    ry = radToDeg(ry);
    rz = radToDeg(rz);
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
    let val = parseFloat(cameraRadius.value);
    val /= 10;
    
    handleCameraView(targetRoot);
    // update camera radius value
    document.getElementById('camera-radius-slider-value').textContent = val;
})
cameraRoll.addEventListener('input', function(){
    
    handleCameraView(targetRoot)
    document.getElementById('camera-roll-slider-value').textContent = cameraRoll.value;
})
cameraPitch.addEventListener('input', function(){

    handleCameraView(targetRoot)
    document.getElementById('camera-pitch-slider-value').textContent = cameraPitch.value;
})

//theta, phi
cameraTheta.addEventListener('input', function(){
    let theta = degToRad(parseFloat(cameraTheta.value))
    setObliqueTheta(theta);
    document.getElementById('camera-theta-slider-value').textContent = cameraTheta.value;
})

cameraPhi.addEventListener('input', function(){
    let phi = degToRad(parseFloat(cameraPhi.value))
    setObliquePhi(phi);
    document.getElementById('camera-phi-slider-value').textContent = cameraPhi.value;
})

// defautl view
defaultView.addEventListener('click', function(){
    cameraRadius.value = 50;
    cameraRoll.value = 0;
    cameraPitch.value = 0;
    cameraTheta.value = 90;
    cameraPhi.value = 90;
    handleCameraView(targetRoot);
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
    changeMappingTexture(state.objects, mappingSelection.value);
});

// animation
pauseContinue.addEventListener('click', function(){
    if(targetRoot.animation.isAnimate){
        // change to continue
        pauseContinue.textContent = "Continue";
    }
    else{
        pauseContinue.textContent = "Pause";
    }
    Animation.pauseContinueAnimation(targetRoot);
    
})

play.addEventListener('click', function(){
    pauseContinue.textContent = "Pause";
    Animation.playAnimation(targetRoot);
})


auto.addEventListener('click', function(){
    // change to continue
    auto.textContent = !targetRoot.animation.isAuto ? "Stop Auto" : "Auto";
    Animation.setAuto(targetRoot);
})

reverse.addEventListener('click', function(){
    reverse.textContent = !targetRoot.animation.isReverse ? "Stop Reverse" : "Reverse";
    Animation.reverseAnimation(targetRoot);
})

// next, prev, first, last
next.addEventListener('click', function(){
    Animation.disableAnimation(targetRoot)
    Animation.nextFrame(targetRoot);
    Animation.handleGeneralTransform(targetRoot, document);
    
})

prev.addEventListener('click', function(){
    Animation.disableAnimation(targetRoot)
    Animation.prevFrame(targetRoot);
    Animation.handleGeneralTransform(targetRoot, document);
})

first.addEventListener('click', function(){
    Animation.firstFrame(targetRoot);
    Animation.handleGeneralTransform(targetRoot, document);
})

last.addEventListener('click', function(){
    Animation.lastFrame(targetRoot);
    Animation.handleGeneralTransform(targetRoot, document);
})

function handleAmbientColor(node){
    node.ambient[0] = redAmbient.value;
    node.ambient[1] = greenAmbient.value;
    node.ambient[2] = blueAmbient.value;
}

redAmbient.addEventListener('input', function(){
    handleAmbientColor(target);
})

greenAmbient.addEventListener('input', function(){
    handleAmbientColor(target);
})

blueAmbient.addEventListener('input', function(){
    handleAmbientColor(target);
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
    handlePhong(target);
});

ambient.addEventListener('input', function(){
    handlePhong(target);
});

specular.addEventListener('input', function(){
    handlePhong(target);
});

diffuse.addEventListener('input', function(){
    handlePhong(target);
});

ambientColor.addEventListener('input', function(){
    handlePhong(target);
});

specularColor.addEventListener('input', function(){
    handlePhong(target);
});

diffuseColor.addEventListener('input', function(){
    target.pickedColor = hexToRgb(basicColor.value);
    basicColor.value = diffuseColor.value;
});

basicColor.addEventListener('input', function(){
    target.pickedColor = hexToRgb(basicColor.value);
    diffuseColor.value = basicColor.value;
});

lightX.addEventListener('input', function(){
    lightDirection[0] = parseFloat(lightX.value);
})

lightY.addEventListener('input', function(){
    lightDirection[1] = parseFloat(lightY.value);
})

lightZ.addEventListener('input', function(){
    lightDirection[2] = parseFloat(lightZ.value);
})

/** HANDLE FRAME */

// total frame
export function handleTotalModelFrame(parent_node){
    // get value of total model frame text
    let _totalFrameText = totalModelFrame.textContent;
    // get total frame
    let _totalFrame = Animation.totalModelFrames(parent_node);
    // set total frame
    _totalFrameText = "Total Model Frames: "+ _totalFrame;
    totalModelFrame.textContent = _totalFrameText;


}

export function handleTotalNodeFrame(node){
    let _totalFrameText = totalNodeFrame.textContent;
    let _totalFrame = Animation.totalNodeFrames(node);
    _totalFrameText = "Total Node Frames: " + _totalFrame
    totalNodeFrame.textContent = _totalFrameText;
}

export function handleCurrentModelFrame(parent_model){
    let _currentFrame = Animation.currentModelFrame(parent_model)
    currentModelFrame.textContent = "Current Model Frame: " + _currentFrame
}

export function handleCurrentNodeFrame(node){
    let _currFrame = Animation.currentNodeFrame(node)
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
    Animation.disableAnimation(targetRoot);
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
        rotate : [degToRad(rx), degToRad(ry), degToRad(rz)],
        scale : [sx, sy, sz]

    }
    
    if(target.animation.frames !== null){
        target.animation.frames.push(transform)
        handleTotalModelFrame(targetRoot);
        handleTotalNodeFrame(target);
    }

    
    

    const addFrameModal = document.getElementById('add-frame-modal')
    addFrameModal.className = addFrameModal.className + " hidden"

})

//edit frame

editFrameButton.addEventListener('click', function(){
    const editFrameModal = document.getElementById('edit-frame-modal')
    editFrameModal.className = editFrameModal.className.replace(" hidden", "")
    // set value
    let transform = target.transform
    document.getElementById('edit-translation-x').value = transform.translate[0]
    document.getElementById('edit-translation-y').value = transform.translate[1]
    document.getElementById('edit-translation-z').value = transform.translate[2]

    document.getElementById('edit-rotation-x').value = radToDeg(transform.rotate[0])
    document.getElementById('edit-rotation-y').value = radToDeg(transform.rotate[1])
    document.getElementById('edit-rotation-z').value = radToDeg(transform.rotate[2])

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
    Animation.disableAnimation(targetRoot);
    let tx = document.getElementById('edit-translation-x').value
    let ty = document.getElementById('edit-translation-y').value
    let tz = document.getElementById('edit-translation-z').value

    let rx = degToRad(document.getElementById('edit-rotation-x').value)
    let ry = degToRad(document.getElementById('edit-rotation-y').value)
    let rz = degToRad(document.getElementById('edit-rotation-z').value)

    let sx = document.getElementById('edit-scalation-x').value
    let sy = document.getElementById('edit-scalation-y').value
    let sz = document.getElementById('edit-scalation-z').value

    let transform = {
        translate : [tx, ty, tz],
        rotate : [rx, ry, rz],
        scale : [sx, sy, sz]
    }

    Animation.editCurrentFrame(target, transform);

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
    Animation.disableAnimation(targetRoot);

    // delete frame
    Animation.deleteCurrentFrame(target);

    // update node frame
    handleTotalModelFrame(targetRoot);
    handleTotalNodeFrame(target);
    Animation.handleGeneralTransform(targetRoot,document)
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
    renameTarget(nodeName.value);
    clearComponent();
    displayComponent(0, objects);
})

deleteButton.addEventListener('click', function(){
    deleteNode(target.name);
    clearComponent();
    displayComponent(0, objects);
})

addChildButton.addEventListener('click', function() {
    addNode(nodeName.value);
    // console.log(target)
})

saveButton.addEventListener('click', function(){
    saveJSON(objects);
});

load.addEventListener('change', function(event){
    loadJSON(event.target, function(objects){
        loadObjects(objects);
        const importedOption = document.createElement('option');
        importedOption.value = model.length;
        importedOption.text = objects[0].name;
        modelSelection.appendChild(importedOption);
        

        // Set the value of modelSelection to "imported"
        modelSelection.value = model.length;
        addModel(objects);
    });
})

exportButton.addEventListener('click', function(){
    console.log([target]);
    saveJSON([target]);
});

importButton.addEventListener('change', function(event){
    loadJSON(event.target, function(object){
        object[0].setParent(target);
        clearComponent();
        displayComponent(0, objects);
    });
})

material.addEventListener('change', function(){
    target.phong = material.value == 1 ? true : false;
});