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
  const bindAttrib = (bufferData, attribName, size) => {
      const buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, bufferData, gl.STATIC_DRAW);
      const location = gl.getAttribLocation(program, attribName);
      gl.enableVertexAttribArray(location);
      gl.vertexAttribPointer(location, size, gl.FLOAT, false, 0, 0);
  };

  bindAttrib(a_position, "aPosition", 3);
  bindAttrib(a_normal, "aNormal", 3);
  bindAttrib(a_color, "aColor", 3);
  bindAttrib(a_texture, "aTexture", 2);
  bindAttrib(a_tangent, "aTangent", 3);
  bindAttrib(a_bitangent, "aBitangent", 3);
}

function setUniforms(gl, program, uniforms) {
  const setUniformMatrix4fv = (name, data) => {
      const location = gl.getUniformLocation(program, name);
      gl.uniformMatrix4fv(location, false, data);
  };

  const setUniform3fv = (name, data) => {
      const location = gl.getUniformLocation(program, name);
      gl.uniform3fv(location, data);
  };

  const setUniform4fv = (name, data) => {
      const location = gl.getUniformLocation(program, name);
      gl.uniform4fv(location, data);
  };

  const setUniform1f = (name, data) => {
      const location = gl.getUniformLocation(program, name);
      gl.uniform1f(location, data);
  };

  const setUniform1i = (name, data) => {
    const location = gl.getUniformLocation(program, name);
    gl.uniform1i(location, data);
  };


  setUniformMatrix4fv("uWorldViewProjection", uniforms.uWorldViewProjection);
  setUniformMatrix4fv("uWorldInverseTranspose", uniforms.uWorldInverseTranspose);
  setUniform4fv("uColor", uniforms.uColor);
  setUniform3fv("uAmbientColor", uniforms.uAmbientColor); 
  setUniform3fv("uPhongAmbientColor", uniforms.uPhongAmbientColor);
  setUniform3fv("uDiffuseColor", uniforms.uDiffuseColor); 
  setUniform3fv("uSpecularColor", uniforms.uSpecularColor);
  setUniform1f("uShininess", uniforms.uShininess); 
  setUniform3fv("uLightPos", uniforms.uLightPos);
  setUniform1f("ka", uniforms.ka);
  setUniform1f("kd", uniforms.kd);
  setUniform1f("ks", uniforms.ks);
  setUniform1i("uPhong", uniforms.uPhong);
  setUniform1i("uSpotLight", uniforms.uSpotLight);
}