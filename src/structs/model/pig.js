import Node from "../node.js";
import { degToRad } from "../math/mathUtils.js";
import Animation from "../../utils/Animation.js";
import boxModel from "../boxModel.js";


const pig = new Node();
pig.flag = "articulated";
pig.name = "pig";
pig.model = boxModel(1, 1.5, 1, [0, 0, 0]);
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
    animationFunction: Animation.animationScript(),
    isAuto: false,
    isReverse: false
};


function pigFrames() {
    let transform = {
        translate: [0, 0, 0],
        rotate: [degToRad(10), degToRad(59), degToRad(0)],
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

const head = new Node();
head.name = "head";
head.model = boxModel(1, 1, 1.2, [-1, 0.6, 0]);
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
    animationFunction: Animation.animationScript(),
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

const whiteRightEye = new Node();
whiteRightEye.name = "whiteRightEye";
whiteRightEye.model = boxModel(0.2, 0.2, 0.2, [-1, 0.6, 0]);
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

const whiteLeftEye = new Node();
whiteLeftEye.name = "whiteLeftEye";
whiteLeftEye.model = boxModel(0.2, 0.2, 0.2, [-1, 0.6, 0]);
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

const blackRightEye = new Node();
blackRightEye.name = "blackRightEye";
blackRightEye.model = boxModel(0.2, 0.2, 0.2, [-1, 0.6, 0]);
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

const blackLeftEye = new Node();
blackLeftEye.name = "blackLeftEye";
blackLeftEye.model = boxModel(0.2, 0.2, 0.2, [-1, 0.6, 0]);
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

const nose = new Node();
nose.name = "nose";
nose.model = boxModel(0.2, 0.2, 0.4, [-1.5, 0.55, 0]);
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

const rightHole = new Node();
rightHole.name = "rightHole";
rightHole.model = boxModel(0.15, 0.2, 0.1, [-1.6, 0.55, 0]);
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

const leftHole = new Node();
leftHole.name = "leftHole";
leftHole.model = boxModel(0.15, 0.2, 0.1, [-1.6, 0.55, 0]);
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

const rightFrontLeg = new Node();
rightFrontLeg.name = "rightFrontLeg";
rightFrontLeg.model = boxModel(0.5, 0.2, 0.2, [0.1, 0, 0.15]);
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
    animationFunction: Animation.animationScript(),
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


const leftFrontLeg = new Node();
leftFrontLeg.name = "leftFrontLeg";
leftFrontLeg.model = boxModel(0.5, 0.2, 0.2, [0.1, 0, -0.15]);
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
    animationFunction: Animation.animationScript(),
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

const rightRearLeg = new Node();
rightRearLeg.name = "rightRearLeg";
rightRearLeg.model = boxModel(0.5, 0.2, 0.2, [0.5, 0, 0.15]);
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
    animationFunction: Animation.animationScript(),
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

const leftRearLeg = new Node();
leftRearLeg.name = "leftRearLeg";
leftRearLeg.model = boxModel(0.5, 0.2, 0.2, [0.5, 0, -0.15]);
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
    animationFunction: Animation.animationScript(),
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

export default pigModel;
  