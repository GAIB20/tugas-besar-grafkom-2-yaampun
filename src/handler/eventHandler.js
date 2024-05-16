import { target, 
    targetRoot, 
    setProjectionType, 
    setObliquePhi, 
    setObliqueTheta, 
    setTarget, 
    setTargetRoot, 
    changeModelObject, 
    changeMappingTexture} from "../index.js"
import { degToRad, radToDeg } from "../structs/math/mathUtils.js";

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
    rx = radToDeg(rx);
    ry = radToDeg(ry);
    rz = radToDeg(rz);
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

var state = {
    objects: []
};

// texture selection
mappingSelection.addEventListener("change", function (e) {
    console.log(mappingSelection.value)
    changeMappingTexture(state.objects, mappingSelection.value);
});