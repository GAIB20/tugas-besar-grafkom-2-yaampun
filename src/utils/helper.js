/* ======= value conversion ======= */
function radToDeg(radians) {
    return (radians * 180) / Math.PI;
  }
  
function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}

function arrDegToRad(arr) {
  return arr.map((val) => degToRad(val));
}

function resizeCanvas(canvas) {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    canvas.width = width;
    canvas.height = height;
  }
}

function setPrecision(number) {
  return parseFloat(number.toPrecision(12));
}

function locateCentroid(matrix) {
  let x = 0;
  let y = 0;
  let z = 0;
  let vertexCount = matrix.length;
  for (let i = 0; i < vertexCount; i++) {
    x = setPrecision(matrix[i][0] + x);
    y = setPrecision(matrix[i][1] + y);
    z = setPrecision(matrix[i][2] + z);
  }

  x = x / vertexCount;
  y = y / vertexCount;
  z = z / vertexCount;

  return [x, y, z];
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

