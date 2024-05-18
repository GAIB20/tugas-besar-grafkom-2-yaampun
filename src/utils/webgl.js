const fragment_shader_texture = `
precision mediump float;

varying vec2 vTexture;

uniform sampler2D uTexture;

void main(void) {
  gl_FragColor = texture2D(uTexture, vTexture);
}
`;

const fragment_shader_environment = `
precision mediump float;

varying vec3 vPosition;
varying vec3 vNormal;

uniform samplerCube uTexture;

uniform vec3 uWorldCameraPosition;

void main(void) {
  vec3 worldNormal = normalize(vNormal);
  vec3 eyeToSurfaceDir = normalize(vPosition - uWorldCameraPosition);
  vec3 direction = reflect(eyeToSurfaceDir, worldNormal);

  gl_FragColor = textureCube(uTexture, direction);
}
`;

const fragment_shader_bump = `
precision mediump float;

uniform sampler2D uTexture;
uniform vec3 uReverseLightDirection;
uniform vec4 uColor;

varying mat4 viewMatrix;
varying mat3 vTBN;
varying vec3 vNormal;
varying vec2 vTexture;
varying vec3 ts_light_pos;
varying vec3 ts_view_pos;
varying vec3 ts_frag_pos;

void main(void)
{
    vec3 normal = normalize(vNormal);
    vec3 light_dir = normalize(ts_light_pos - ts_frag_pos);
    vec3 albedo = texture2D(uTexture, vTexture).rgb;
    vec3 ambient = albedo * 0.3;

    vec3 bump = normalize(texture2D(uTexture, vTexture).rgb * 2.0 - 1.0);

    float light = max(dot(light_dir, bump), 0.0);  
    
    gl_FragColor = vec4(albedo * light + ambient, 1.0);
}
`;

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

  setUniformMatrix4fv("uWorldViewProjection", uniforms.uWorldViewProjection);
  setUniformMatrix4fv("uWorldInverseTranspose", uniforms.uWorldInverseTranspose);
  setUniformMatrix4fv("uModelMatrix", uniforms.uModelMatrix);
  setUniform3fv("uReverseLightDirection", uniforms.uReverseLightDirection);
  setUniform4fv("uColor", uniforms.uColor);
  setUniform3fv("uAmbientColor", uniforms.uAmbientColor); 
  setUniform3fv("uDiffuseColor", uniforms.uDiffuseColor); // Set the diffuse color uniform
  setUniform3fv("uSpecularColor", uniforms.uSpecularColor); // Set the specular color uniform
  setUniform1f("uShininess", uniforms.uShininess); // Set the shininess uniform
  setUniform3fv("uLightPos", uniforms.uLightPos);
}