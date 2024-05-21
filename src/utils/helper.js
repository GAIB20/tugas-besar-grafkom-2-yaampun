function radToDeg(radians) {
    return (radians * 180) / Math.PI;
  }
  
function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}

function hexToRgb(hex) {
  let r = parseInt(hex.substring(1, 3), 16) / 255;
  let g = parseInt(hex.substring(3, 5), 16) / 255;
  let b = parseInt(hex.substring(5, 7), 16) / 255;
  return [r, g, b];
}

function rgbToHex(rgb) {
  let r = Math.round(rgb[0] * 255).toString(16).padStart(2, '0');
  let g = Math.round(rgb[1] * 255).toString(16).padStart(2, '0');
  let b = Math.round(rgb[2] * 255).toString(16).padStart(2, '0');
  return "#" + r + g + b;
}

function calculateEulerDistance(cross) {
  return Math.sqrt(
    Math.pow(cross[0], 2) + Math.pow(cross[1], 2) + Math.pow(cross[2], 2)
  );
}

function subtractVectors(a, b) {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}

function cross(a, b) {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ];
}

function normalize(v) {
  let length = calculateEulerDistance(v);
  if (length > 0.00001) {
    return [v[0] / length, v[1] / length, v[2] / length];
  } else {
    return [0, 0, 0];
  }
}

function toVertices(vertices, faces) {
  let newVertices = [];
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i];
    for (let j = 0; j < face.length; j++) {
      let vertex = vertices[face[j] - 1];
      newVertices.push(vertex);
    }
  }
  return newVertices;
}


function randomColors() {
  return [Math.random(), Math.random(), Math.random()];
}

