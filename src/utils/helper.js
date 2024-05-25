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

