import Node from "../node.js";

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
hollow.name = "Ring";
hollow.model = ring();
hollow.transform = {
translate: [0, 0, 0],
rotate: [0, 0, 0],
scale: [1, 1, 1],
};
hollow.pickedColor = [0.921568627,0.568627451,0.898039216],
hollow.viewMatrix = {
  camera: [0, 0, 5],
  lookAt: [0, 0, 0],
  up: [0, 1, 0],
  near: 0.1,
  far: 50,
};
hollow.animation = {
isAnimate: false,
degAnimate: 0.1,
};

var hollowRingModel = [
  hollow
]


export default hollowRingModel;