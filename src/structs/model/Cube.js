import Node from "../node.js";
import { degToRad } from "../math/mathUtils.js";
import Animation from "../../utils/Animation.js";
import { generateFaces, generateNormals, generateVertices } from "../boxModel.js";

function hollowCube() {
  let vertices = [];
  let colors = [];
  let tangents = [];
  let bitangents = [];
  let normals = [];
  let texCoord = [];
  let faces = generateFaces();

  const beams = [
    { size: [0.1, 1.1, 0.1], position: [-0.5, 0.5, 0] },
    { size: [0.1, 1.1, 0.1], position: [-0.5, -0.5, 0] },
    { size: [0.1, 1.1, 0.1], position: [-0.5, 0.5, -1] },
    { size: [0.1, 1.1, 0.1], position: [-0.5, -0.5, -1] },
    { size: [1, 0.1, 0.1], position: [0, 0, 0] },
    { size: [1, 0.1, 0.1], position: [-1, 0, 0] },
    { size: [1, 0.1, 0.1], position: [0, 0, -1] },
    { size: [1, 0.1, 0.1], position: [-1, 0, -1] },
    { size: [0.1, 0.1, 1], position: [0, 0.5, -0.5] },
    { size: [0.1, 0.1, 1], position: [-1, 0.5, -0.5] },
    { size: [0.1, 0.1, 1], position: [0, -0.5, -0.5] },
    { size: [0.1, 0.1, 1], position: [-1, -0.5, -0.5] },

    { size: [0.1, 1.1, 0.1], position: [0, 0.5, 0.5] },
    { size: [0.1, 1.1, 0.1], position: [0, -0.5, 0.5] },
    { size: [0.1, 1.1, 0.1], position: [0, 0.5, -0.5] },
    { size: [0.1, 1.1, 0.1], position: [0, -0.5, -0.5] },
    { size: [1, 0.1, 0.1], position: [0.5, 0, 0.5] },
    { size: [1, 0.1, 0.1], position: [-0.5, 0, 0.5] },
    { size: [1, 0.1, 0.1], position: [0.5, 0, -0.5] },
    { size: [1, 0.1, 0.1], position: [-0.5, 0, -0.5] },
    { size: [0.1, 0.1, 1], position: [0.5, 0.5, 0] },
    { size: [0.1, 0.1, 1], position: [-0.5, 0.5, 0] },
    { size: [0.1, 0.1, 1], position: [0.5, -0.5, 0] },
    { size: [0.1, 0.1, 1], position: [-0.5, -0.5, 0] },

    { size: [0.1, 1.1, 0.1], position: [0.5, 0.5, 1] },
    { size: [0.1, 1.1, 0.1], position: [0.5, -0.5, 1] },
    { size: [0.1, 1.1, 0.1], position: [0.5, 0.5, 0] },
    { size: [0.1, 1.1, 0.1], position: [0.5, -0.5, 0] },
    { size: [1, 0.1, 0.1], position: [1, 0, 1] },
    { size: [1, 0.1, 0.1], position: [0, 0, 1] },
    { size: [1, 0.1, 0.1], position: [1, 0, 0] },
    { size: [1, 0.1, 0.1], position: [0, 0, 0] },
    { size: [0.1, 0.1, 1], position: [1, 0.5, 0.5] },
    { size: [0.1, 0.1, 1], position: [0, 0.5, 0.5] },
    { size: [0.1, 0.1, 1], position: [1, -0.5, 0.5] },
    { size: [0.1, 0.1, 1], position: [0, -0.5, 0.5] },
  ];

  beams.forEach(beam => {
    let verticesBox = generateVertices(...beam.size, beam.position);
    let normalsBox = generateNormals(verticesBox, faces);
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

const hollow = new Node();
hollow.flag = "hollow";
hollow.name = "Hollow Cube";
hollow.model = hollowCube();
hollow.transform = {
  translate: [0, 0, 0],
  rotate: [0, 0, 0],
  scale: [1, 1, 1],
};
hollow.pickedColor = randomColors();
hollow.ambient = [1, 1, 1];
hollow.phong = true;
hollow.phongAmbient = [0, 0, 0];
hollow.diffuse = [1, 1, 1];
hollow.specular = [1, 1, 1];
hollow.shininess = 1;
hollow.const = {
  kd: 1.0,
  ks: 0.0,
  ka: 1.0,
};
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
  animationFunction: Animation.animationScript(),
  isAuto: true,
  isReverse: false
};
hollow.texType = 0;
hollow.shading = true;

function hollowFrames() {
  let transform = {
    translate: [0, 0, 0],
    rotate: [degToRad(0), degToRad(0), degToRad(0)],
    scale: [1, 1, 1],
  };
  let frames = [];
  for (let k = 0; k < 361; ++k) {
    let _transform = JSON.parse(JSON.stringify(transform));
    _transform.rotate[0] = degToRad(k);
    _transform.rotate[1] = degToRad(k);
    _transform.rotate[2] = degToRad(k);
    frames.push(_transform);
  }

  return frames;
}

var hollowCubeModel = [
  hollow
];

export default hollowCubeModel;
