function compileShader(gl, shaderSource, shaderType) {
  // Create the shader object
  var shader = gl.createShader(shaderType);
 
  // Set the shader source code.
  gl.shaderSource(shader, shaderSource);
 
  // Compile the shader
  gl.compileShader(shader);
 
  // Check if it compiled
  var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (!success) {
    // Something went wrong during compilation; get the error
    throw "could not compile shader:" + gl.getShaderInfoLog(shader);
  }
 
  return shader;
}

function createShaderProgram(gl, vertexShaderSource, fragmentShaderSource) {
    const vertexShader = compileShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(gl, fragmentShaderSource, gl.FRAGMENT_SHADER);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);


    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);

    return program;
}

function setAttr(gl, program, a_position, a_normal, a_color, a_texture, a_tangent, a_bitangent) {

    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, a_position, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(gl.getAttribLocation(program, "aPosition"));
    gl.vertexAttribPointer(gl.getAttribLocation(program, "aPosition"), 3, gl.FLOAT, false, 0, 0);
  
    const normalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, a_normal, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(gl.getAttribLocation(program, "aNormal"));
    gl.vertexAttribPointer(gl.getAttribLocation(program, "aNormal"), 3, gl.FLOAT, false, 0, 0);
  
    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, a_color, gl.STATIC_DRAW);
    gl.vertexAttribPointer(gl.getAttribLocation(program, "aColor"), 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(gl.getAttribLocation(program, "aColor"));
  
    const textureBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, a_texture, gl.STATIC_DRAW);
    gl.vertexAttribPointer(gl.getAttribLocation(program, "aTexture"), 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(gl.getAttribLocation(program, "aTexture"));
  
    const vbo_tang = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_tang);
    gl.bufferData(gl.ARRAY_BUFFER, a_tangent, gl.STATIC_DRAW);
    gl.vertexAttribPointer(gl.getAttribLocation(program, "aTangent"), 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(gl.getAttribLocation(program, "aTangent"));
  
    const vbo_bitang = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo_bitang);
    gl.bufferData(gl.ARRAY_BUFFER, a_bitangent, gl.STATIC_DRAW);
    gl.vertexAttribPointer(gl.getAttribLocation(program, "aBitangent"), 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(gl.getAttribLocation(program, "aBitangent"));
}

function setUniforms(gl, program, uniforms) {
    worldViewProjection = gl.getUniformLocation(program, "uWorldViewProjection");
    worldInverseTranspose = gl.getUniformLocation(program,"uWorldInverseTranspose");
    color = gl.getUniformLocation(program, "uColor");
    reverseLightDirection = gl.getUniformLocation(program,"uReverseLightDirection");
    texture =  gl.getUniformLocation(program, "uTexture");
    worldCameraPosition = gl.getUniformLocation(program, "uWorldCameraPosition");
    modelMatrix = gl.getUniformLocation(program, "uModelMatrix");
  
    gl.uniformMatrix4fv(
      worldViewProjection,
      false,
      uniforms.uWorldViewProjection
    );
    gl.uniformMatrix4fv(
      worldInverseTranspose,
      false,
      uniforms.uWorldInverseTranspose
    );
    gl.uniform4fv(color, uniforms.uColor);
    gl.uniform3fv(
      reverseLightDirection,
      uniforms.uReverseLightDirection
    );
    gl.uniform1i(texture, 0);
    gl.uniformMatrix4fv(modelMatrix, false, uniforms.uModelMatrix);
}