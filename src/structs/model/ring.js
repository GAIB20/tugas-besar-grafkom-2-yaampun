import Node from "../node.js";
import boxModel, {generateFaces, generateNormals, generateVertices} from "../boxModel.js";
import { radToDeg,degToRad } from "../math/mathUtils.js";
import Animation from "../../utils/Animation.js";

function ring() {
    let vertices = [];
    let colors = [];
    let tangents = [];
    let bitangents = [];
    let normals = [];
    let texCoord = [];
    let faces = generateFaces();

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
    let verticesBox = generateVertices(...box.size, box.position);
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
hollow.ambient = [1,1,1];
hollow.phong = true;
hollow.phongAmbient = [0,0,0],
hollow.diffuse = [1,1,1];
hollow.specular = [1,1,1];
hollow.shininess = 1;
hollow.const = {
    kd: 1.0,
    ks: 0.0,
    ka: 1.0,
};
hollow.animation = {
  isAnimate: true,
  frames: hollowFrames(),
  currentFrame: 0,
  animationFunction: Animation.animationScript(),
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


export default hollowRingModel;