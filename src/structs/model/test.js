import Mat4 from "../math/Mat4.js";
import Node from "../node.js";

const seat = new Node();
seat.name = "seat";
seat.model = boxModel(0.2, 1.2, 0.9, [0, 0, 0]);
seat.transform = {
  translate: [0, 0, 0],
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
(seat.pickedColor = randomColors()),
  (seat.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
  });
seat.animation = {
  isAnimate: false,
  degAnimate: 0.1,
};

const rightFrontLeg = new Node();
rightFrontLeg.name = "rightFrontLeg";
rightFrontLeg.model = boxModel(0.8, 0.15, 0.15, [0, -0.4, 0]);
rightFrontLeg.transform = {
  translate: [-0.4, -0.05, 0.3],
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
(rightFrontLeg.pickedColor = randomColors()),
  (rightFrontLeg.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
  });
rightFrontLeg.animation = {
  isAnimate: false,
  degAnimate: 0.1,
  animate: [
    { rotate: [0.3, 0, 0], translate: [-0.4, -0.05, 0.3], scale: [1, 1, 1] },
    { rotate: [-0.8, 0, 0], translate: [-0.4, -0.05, 0.3], scale: [1, 1, 1] },
  ]
};

const rightRearLeg = new Node();
rightRearLeg.name = "rightRearLeg";
rightRearLeg.model = boxModel(0.8, 0.15, 0.15, [0, -0.4, 0]);
rightRearLeg.transform = {
  translate: [-0.4, -0.05, -0.3],
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
(rightRearLeg.pickedColor = randomColors()),
  (rightRearLeg.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
  });
rightRearLeg.animation = {
  isAnimate: false,
  degAnimate: 0.1,
  animate: [
    { rotate: [0.3, 0, 0], translate: [-0.4, -0.05, -0.3], scale: [1, 1, 1] },
    { rotate: [-0.8, 0, 0], translate: [-0.4, -0.05, -0.3], scale: [1, 1, 1] },
  ]
};

const leftRearLeg = new Node();
leftRearLeg.name = "leftRearLeg";
leftRearLeg.model = boxModel(0.8, 0.15, 0.15, [0, -0.4, 0]);
leftRearLeg.transform = {
  translate: [0.4, -0.05, -0.3],
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
(leftRearLeg.pickedColor = randomColors()),
  (leftRearLeg.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
  });
leftRearLeg.animation = {
  isAnimate: false,
  degAnimate: 0.1,
  animate: [
    { rotate: [-0.3, 0, 0], translate: [0.4, -0.05, -0.3], scale: [1, 1, 1] },
    { rotate: [0.9, 0, 0], translate: [0.4, -0.05, -0.3], scale: [1, 1, 1] },
  ]
};

const rightStile = new Node();
rightStile.name = "rightStile";
rightStile.model = boxModel(0.2, 0.12, 0.12, [0, -0.1, 0]);
rightStile.transform = {
  translate: [-0.15, 0, 0],
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
(rightStile.pickedColor = randomColors()),
  (rightStile.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
  });
rightStile.animation = {
  isAnimate: false,
  degAnimate: 0.1,
};

const leftStile = new Node();
leftStile.name = "leftStile";
leftStile.model = boxModel(0.2, 0.12, 0.12, [0, -0.1, 0]);
leftStile.transform = {
  translate: [0.15, 0, 0],
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
(leftStile.pickedColor = randomColors()),
  (leftStile.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
  });
leftStile.animation = {
  isAnimate: false,
  degAnimate: 0.1,
};

const back = new Node();
back.name = "back";
back.model = boxModel(0.7, 1.2, 0.15, [0, 0.35, 0]);
back.transform = {
  translate: [0, 0.3, -0.35],
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
(back.pickedColor = randomColors()),
  (back.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
  });
back.animation = {
  isAnimate: false,
  degAnimate: 0.1,
};

const leftEye = new Node();
leftEye.name = "leftEye";
leftEye.model = boxModel(0.12, 0.05, 0.01, [0, 0, 0]);
leftEye.transform = {
  translate: [0.3, 0.4, 0.1],
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
(leftEye.pickedColor = randomColors()),
  (leftEye.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
  });
leftEye.animation = {
  isAnimate: false,
  degAnimate: 0.1,
};

const rightEye = new Node();
rightEye.name = "rightEye";
rightEye.model = boxModel(0.12, 0.05, 0.01, [0, 0, 0]);
rightEye.transform = {
  translate: [-0.3, 0.4, 0.1],
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
(rightEye.pickedColor = randomColors()),
  (rightEye.viewMatrix = {
    camera: [0, 0, 5],
    lookAt: [0, 0, 0],
    up: [0, 1, 0],
    near: 0.1,
    far: 50,
  });
rightEye.animation = {
  isAnimate: false,
  degAnimate: 0.1,
};

rightFrontLeg.setParent(seat);
rightRearLeg.setParent(seat);
leftRearLeg.setParent(seat);
rightStile.setParent(back);
leftStile.setParent(back);
back.setParent(seat);
leftEye.setParent(back);
rightEye.setParent(back);




var endModel = [
  seat
];

export default endModel;
