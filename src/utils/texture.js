export function createTextureObject(gl, type) {
  
  type = Number(type);


  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGBA,
    1,
    1,
    0,
    gl.RGBA,
    gl.UNSIGNED_BYTE,
    new Uint8Array([0, 0, 0, 0])
  );
  var url;
  switch (type) {
    case 1:
      url = "./mapping/paper.jpeg";
      break;
    case 2:
      url = "./mapping/bump.png";
      break;
    case 3:
      url = "./mapping/brick.jpg";
      break;
  }

  if (url === undefined) {
    console.log("Invalid texture type");
    return texture;

  }

  const image = new Image();
  image.src = url; 
  image.onload = function() {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
      gl.generateMipmap(gl.TEXTURE_2D);
    } else {
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    }
  };
  return texture;
}

function isPowerOf2(value) {
  return (value & (value - 1)) == 0;
} 