/* ======= Transformation Matrices ======= */

var matrices = {
  

  /* 1d matrix 1 x 3 */
  normalize: function (array) {
    let distance = calculateEulerDistance(array);

    let result = [0, 0, 0];

    for (let j = 0; j < result.length; j++) {
      result[j] = array[j] / distance;
    }

    return result;
  },

  /* projection */
  orthographic: function (left, right, bottom, top, near, far) {
    let a = right - left;
    let b = top - bottom;
    let c = far - near;
    let a2 = right + left;
    let b2 = top + bottom;
    let c2 = far + near;
    return [
      2 / a,
      0,
      0,
      0,
      0,
      2 / b,
      0,
      0,
      0,
      0,
      -2 / c,
      0,
      -a2 / a,
      -b2 / b,
      -c2 / c,
      1,
    ];
  },

  oblique: function (theta, phi) {
    let t = degToRad(theta);
    let p = degToRad(phi);

    let cotT = -1 / Math.tan(t);
    let cotP = -1 / Math.tan(p);

    return [1, 0, 0, 0, 0, 1, 0, 0, cotT, cotP, 1, 0, 0, 0, 0, 1];
  },

  perspective: function (fieldOfViewInRadians, aspect, near, far) {
    var f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewInRadians);
    var rangeInv = 1.0 / (near - far);

    return [
      f / aspect,
      0,
      0,
      0,
      0,
      f,
      0,
      0,
      0,
      0,
      (near + far) * rangeInv,
      -1,
      0,
      0,
      near * far * rangeInv * 2,
      0,
    ];
  },

  applyTransform: function (transformMatrix, point) {
    // apply 4*4 matrix to 4*1 vector
    console.table(point);
    let x =
      transformMatrix[0] * point[0] +
      transformMatrix[1] * point[1] +
      transformMatrix[2] * point[2] +
      transformMatrix[3] * 1;
    let y =
      transformMatrix[4] * point[0] +
      transformMatrix[5] * point[1] +
      transformMatrix[6] * point[2] +
      transformMatrix[7] * 1;
    let z =
      transformMatrix[8] * point[0] +
      transformMatrix[9] * point[1] +
      transformMatrix[10] * point[2] +
      transformMatrix[11] * 1;

    return [x, y, z];
  },

  lookAt: function (cameraPosition, target, up) {
    let zAxis = normalize(subtractVectors(cameraPosition, target));
    let xAxis = normalize(cross(up, zAxis));
    let yAxis = normalize(cross(zAxis, xAxis));
    return [
      xAxis[0],
      xAxis[1],
      xAxis[2],
      0,
      yAxis[0],
      yAxis[1],
      yAxis[2],
      0,
      zAxis[0],
      zAxis[1],
      zAxis[2],
      0,
      cameraPosition[0],
      cameraPosition[1],
      cameraPosition[2],
      1,
    ];
  },

  makeZtoWMatrix: function (fudgeFactor) {
    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, fudgeFactor, 0, 0, 0, 1];
  },
};
