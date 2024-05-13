// translation
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

//camera
const orthographic = document.getElementById('orthographic');
const oblique = document.getElementById('oblique');
const perspective = document.getElementById('perspective');

// camera radius
const cameraRadius = document.getElementById('camera-radius-slider');

// set orthographic as default input radio button
orthographic.checked = true;


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
    target.transform.rotate[0] = (2 * rotationX.value) / 100;
    rotationXValue.textContent = target.transform.rotate[0];
})

rotationY.addEventListener('input', function(){
    target.transform.rotate[1] = (2 * rotationY.value) / 100;
    rotationYValue.textContent = target.transform.rotate[1];
})

rotationZ.addEventListener('input', function(){
    target.transform.rotate[2] = (2 * rotationZ.value) / 100;
    rotationZValue.textContent = target.transform.rotate[2];
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

// camera
orthographic.addEventListener('click', function(){
    projection = 'orthographic';
})

oblique.addEventListener('click', function(){
    projection = 'oblique';
})

perspective.addEventListener('click', function(){
    projection = 'perspective';
})

cameraRadius.addEventListener('input', function(){
    // get camera radius
    // target is a root Node, recurse to set camera radius
    let epsilon = 0.0001;

    let val = parseFloat(cameraRadius.value);
    function setCameraRadius(node){
        node.viewMatrix.camera[2] = val + epsilon;
        for(let child of node.children){
            setCameraRadius(child);
        }
    }

    
    setCameraRadius(target);
    // update camera radius value
    document.getElementById('camera-radius-slider-value').textContent = val;
})





