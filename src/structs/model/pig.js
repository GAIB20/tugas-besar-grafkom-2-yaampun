import Node from "../node.js";

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
pig.diffuse = [0,0,0],
pig.specular = [0,0,0],
pig.ambient = [1,1,1],
pig.shininess = 1,
pig.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
pig.animation = {
  isAnimate: false,
  degAnimate: 0.1,
};

const head = new Node();
head.name = "head";
head.model = boxModel(1, 1, 1.2, [-1, 0.6, 0]);
head.transform = {
    translate: [0, 0, 0],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
head.pickedColor = [0.921568627,0.568627451,0.898039216],
head.diffuse = [0,0,0],
head.specular = [0,0,0],
head.ambient = [1,1,1],
head.shininess = 1,
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

const whiteRightEye = new Node();
whiteRightEye.name = "whiteRightEye";
whiteRightEye.model = boxModel(0.2, 0.2, 0.2, [-1, 0.6, 0]);
whiteRightEye.transform = {
    translate: [-0.5, 0.2, 0.4],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
whiteRightEye.pickedColor = [0.99,0.99,0.99],
whiteRightEye.diffuse = [0,0,0],
whiteRightEye.specular = [0,0,0],
whiteRightEye.ambient = [1,1,1],
whiteRightEye.shininess = 1,
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

const whiteLeftEye = new Node();
whiteLeftEye.name = "whiteLeftEye";
whiteLeftEye.model = boxModel(0.2, 0.2, 0.2, [-1, 0.6, 0]);
whiteLeftEye.transform = {
    translate: [-0.5, 0.2, -0.4],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
whiteLeftEye.pickedColor = [0.99,0.99,0.99],
whiteLeftEye.diffuse = [0,0,0],
whiteLeftEye.specular = [0,0,0],
whiteLeftEye.ambient = [1,1,1],
whiteLeftEye.shininess = 1,
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

const blackRightEye = new Node();
blackRightEye.name = "blackRightEye";
blackRightEye.model = boxModel(0.2, 0.2, 0.2, [-1, 0.6, 0]);
blackRightEye.transform = {
    translate: [0.05, 0, 0.075],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
blackRightEye.pickedColor = [0,0,0],
blackRightEye.diffuse = [0,0,0],
blackRightEye.specular = [0,0,0],
blackRightEye.ambient = [1,1,1],
blackRightEye.shininess = 1,
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

const blackLeftEye = new Node();
blackLeftEye.name = "blackLeftEye";
blackLeftEye.model = boxModel(0.2, 0.2, 0.2, [-1, 0.6, 0]);
blackLeftEye.transform = {
    translate: [0.05, 0, -0.075],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
blackLeftEye.pickedColor = [0,0,0],
blackLeftEye.diffuse = [0,0,0],
blackLeftEye.specular = [0,0,0],
blackLeftEye.ambient = [1,1,1],
blackLeftEye.shininess = 1,
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

const nose = new Node();
nose.name = "nose";
nose.model = boxModel(0.2, 0.2, 0.4, [-1.5, 0.55, 0]);
nose.transform = {
    translate: [0.05, 0, 0],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
nose.pickedColor = [0.768627451,0.376470588, 0.745098039],
nose.diffuse = [0,0,0],
nose.specular = [0,0,0],
nose.ambient = [1,1,1],
nose.shininess = 1,
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

const rightHole = new Node();
rightHole.name = "rightHole";
rightHole.model = boxModel(0.15, 0.2, 0.1, [-1.6, 0.55, 0]);
rightHole.transform = {
    translate: [0.05, 0, 0.1],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
rightHole.pickedColor = [0.921568627,0.568627451,0.898039216],
rightHole.diffuse = [0,0,0],
rightHole.specular = [0,0,0],
rightHole.ambient = [1,1,1],
rightHole.shininess = 1,
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

const leftHole = new Node();
leftHole.name = "leftHole";
leftHole.model = boxModel(0.15, 0.2, 0.1, [-1.6, 0.55, 0]);
leftHole.transform = {
    translate: [0.05, 0, -0.1],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
leftHole.pickedColor = [0.921568627,0.568627451,0.898039216],
leftHole.diffuse = [0,0,0],
leftHole.specular = [0,0,0],
leftHole.ambient = [1,1,1],
leftHole.shininess = 1,
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

const rightFrontLeg = new Node();
rightFrontLeg.name = "rightFrontLeg";
rightFrontLeg.model = boxModel(0.5, 0.2, 0.2, [0.1, 0, 0.15]);
rightFrontLeg.transform = {
    translate: [-0.6, -0.5, -0.4],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
rightFrontLeg.pickedColor = [0.768627451,0.376470588, 0.745098039],
rightFrontLeg.diffuse = [0,0,0],
rightFrontLeg.specular = [0,0,0],
rightFrontLeg.ambient = [1,1,1],
rightFrontLeg.shininess = 1,
rightFrontLeg.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
rightFrontLeg.animation = {
    isAnimate: false,
    degAnimate: 0.1,
};

const leftFrontLeg = new Node();
leftFrontLeg.name = "leftFrontLeg";
leftFrontLeg.model = boxModel(0.5, 0.2, 0.2, [0.1, 0, -0.15]);
leftFrontLeg.transform = {
    translate: [-0.6, -0.5, 0.4],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
leftFrontLeg.pickedColor = [0.768627451,0.376470588, 0.745098039],
leftFrontLeg.diffuse = [0,0,0],
leftFrontLeg.specular = [0,0,0],
leftFrontLeg.ambient = [1,1,1],
leftFrontLeg.shininess = 1,
leftFrontLeg.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
leftFrontLeg.animation = {
    isAnimate: false,
    degAnimate: 0.1,
};

const rightRearLeg = new Node();
rightRearLeg.name = "rightRearLeg";
rightRearLeg.model = boxModel(0.5, 0.2, 0.2, [0.5, 0, 0.15]);
rightRearLeg.transform = {
    translate: [0, -0.5, -0.4],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
rightRearLeg.pickedColor = [0.768627451,0.376470588, 0.745098039],
rightRearLeg.diffuse = [0,0,0],
rightRearLeg.specular = [0,0,0],
rightRearLeg.ambient = [1,1,1],
rightRearLeg.shininess = 1,
rightRearLeg.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
rightRearLeg.animation = {
    isAnimate: false,
    degAnimate: 0.1,
};

const leftRearLeg = new Node();
leftRearLeg.name = "leftRearLeg";
leftRearLeg.model = boxModel(0.5, 0.2, 0.2, [0.5, 0, -0.15]);
leftRearLeg.transform = {
    translate: [0, -0.5, 0.4],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
};
leftRearLeg.pickedColor = [0.768627451,0.376470588, 0.745098039],
leftRearLeg.diffuse = [0,0,0],
leftRearLeg.specular = [0,0,0],
leftRearLeg.ambient = [1,1,1],
leftRearLeg.shininess = 1,
leftRearLeg.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
};
leftRearLeg.animation = {
    isAnimate: false,
    degAnimate: 0.1,
};


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
  