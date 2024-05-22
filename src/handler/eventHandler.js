import { target, 
    targetRoot, 
    setProjectionType, 
    setObliquePhi, 
    setObliqueTheta, 
    setTarget, 
    lightDirection,
    setTargetRoot, 
    changeModelObject, 
    changeMappingTexture} from "../index.js"
import { degToRad, radToDeg } from "../structs/math/mathUtils.js";
import Animation from "../utils/Animation.js";

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
    Animation.nextFrame(targetRoot);
})

prev.addEventListener('click', function(){
    Animation.prevFrame(targetRoot);
})

first.addEventListener('click', function(){
    Animation.firstFrame(targetRoot);
})

last.addEventListener('click', function(){
    Animation.lastFrame(targetRoot);
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

specularColor.addEventListener('input', function(){
    handlePhong(target);
});

diffuseColor.addEventListener('input', function(){
    handlePhong(target);
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
    console.log(_totalFrame)
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
addFrameButton.addEventListener('click', function(){
    const addFrameModal = document.getElementById('add-frame-modal')
    addFrameModal.className = addFrameModal.className + " hidden"
})

basicColor.addEventListener('input', function(){
    target.pickedColor = hexToRgb(basicColor.value);
});

