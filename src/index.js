const canvas = document.getElementById("gl-canvas");
const gl = canvas.getContext("webgl");


const vertexShaderSource = document.getElementById("vertex-shader-3d")?.textContent;
const fragmentShaderSource = document.getElementById("fragment-shader-3d")?.textContent;

// state
var objects;
var target;
var lighting;
var lightDirection;
var texture;
var projection;
var factor;
var theta;
var phi;
// console.log(defaultObjects);

initState();

function initState() {
    objects = endModel;
    focus = null;
    lighting = false;
    lightDirection = [0, 0, 1];
    texture = "none";
    projection = "orthographic";
    factor = 0.0;
    theta = 90.0;
    phi = 90.0;
    setDefaultRotation(objects)
    // initAnimation(objects);
    // showComponents(objects);

}

window.onload = () => {
    if(!gl){
        throw new Error("WebGL not supported");
    }
    target = objects[0];


    render();
}

function setDefaultState(objects) {
    objects.forEach(object => {
        if (!object.model.colors) {
            if (!object.pickedColor) {
                object.model.colors = generateColors(object.model.vertices);
            } else {
                object.model.colors = generateColors(
                    object.model.vertices,
                    object.pickedColor
                );
            }
        }
      
        if (!object.program && !lighting) {
            object.program = createShaderProgram(
                gl,
                vertexShaderSource,
                fragmentShaderSource
            );
        }
      
        //   if (object.animation.isObjectAnimate && object.animation.animate) {
        //     object.transform = object.animation.animate[counter % fps];
        //   }
      
          // object.transform = object.animation.animate[counter % fps];
        object.localMatrix = setTransform(object);
        if (object.children.length > 0) {
            setDefaultState(object.children);
        }
    })
}

function setTransform(object) {
    /* Setup transform matrix */
    // console.log(object)

    var transformMatrix = Mat4.translate(
      object.transform.translate[0],
      object.transform.translate[1],
      object.transform.translate[2]
    );
    



    transformMatrix = Mat4.multiply(
      transformMatrix,
      Mat4.rotateX(object.transform.rotate[0])
    );
  
    transformMatrix = Mat4.multiply(
      transformMatrix,
      Mat4.rotateY(object.transform.rotate[1])
    );
  
    transformMatrix = Mat4.multiply(
      transformMatrix,
      Mat4.rotateZ(object.transform.rotate[2])
    );
  
    transformMatrix = Mat4.multiply(
      transformMatrix,
      Mat4.scale(
        object.transform.scale[0],
        object.transform.scale[1],
        object.transform.scale[2]
      )
    );
  
    return transformMatrix;
  }

function setDefaultRotation(objects) {
    objects.forEach(object => {
        object.transform.rotate = object.transform.rotate.map((val) => degToRad(val));
        if (object.children.length > 0) {
            setDefaultRotation(object.children);
        }
    });

}

function renderLoop(objects) {
    objects.forEach(object => {
        gl.useProgram(object.program);
        var modelMatrix = object.getWorldMatrix();

        object.worldMatrix = setProjectionMatrix(object.worldMatrix, object)


        var a_position = new Float32Array(object.model.vertices.flat(1));
        var a_normal = new Float32Array(object.model.normals.flat(1));
        var a_color = new Float32Array(object.model.colors.flat(1));
        var a_texture = new Float32Array(object.model.texCoord);
        var a_tangent = new Float32Array(object.model.tangents.flat(1));
        var a_bitangent = new Float32Array(object.model.bitangents.flat(1));

        setAttr(gl, object.program, a_position, a_normal, a_color, a_texture, a_tangent, a_bitangent);
        var uniforms = {
            uWorldViewProjection: object.worldMatrix,
            uWorldInverseTranspose: object.worldInverseMatrix,
            uReverseLightDirection: normalizeLight,
            uColor: object.pickedColor.concat(1.0),
            uModelMatrix: modelMatrix,
        }

        setUniforms(gl, object.program, uniforms);

        gl.drawArrays(gl.TRIANGLES, 0, object.model.vertices.length);
        if (object.children.length > 0) {
            renderLoop(object.children);
        }
    });
}

window.requestAnimFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 1);
      }
    );
  })();

function render() {
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.enable(gl.CULL_FACE);
    gl.enable(gl.DEPTH_TEST);

    setDefaultState(objects);


    objects[0].setWorldMtx(null);
    normalizeLight = matrices.normalize(lightDirection);
    renderLoop(objects);
    
  window.requestAnimFrame(render);
    
}

function setCamera(object) {
    /* Setup view matrix */
    var viewMatrix = Mat4.multiply(
      Mat4.rotateY(object.viewMatrix.camera[1]),
      Mat4.rotateX(object.viewMatrix.camera[0])
    );
  
    // handle radius
    viewMatrix = Mat4.multiply(
      viewMatrix,
      Mat4.translate(0, 0, object.viewMatrix.camera[2])
    );
  
    let camPos = [viewMatrix[12], viewMatrix[13], viewMatrix[14]];
  
    let cameraMatrix = matrices.lookAt(
      camPos,
      object.viewMatrix.lookAt,
      object.viewMatrix.up
    );
  
    return cameraMatrix;
  }

  function setProjection () {
    
    const aspect = canvas.width / canvas.height;
    const fovy = degToRad(45);
    const left = -2;
    const right = 2;
    const bottom = -2;
    const top = 2;
    let farOrtho = objects[0].viewMatrix.far * 1;
    let nearOrtho = -farOrtho;


  
    if (projection === "orthographic") {
    //   return matrices.orthographic(left, right, bottom, top, nearOrtho, farOrtho);
    return Mat4.projectionOrtographic(left, right, bottom, top, nearOrtho, farOrtho)
    // return matrices.orthographic(left, right, bottom, top, nearOrtho, farOrtho);
    } else if (projection === "oblique") {
      return Mat4.multiply(
        matrices.oblique(theta, phi),
        matrices.orthographic(left, right, bottom, top, nearOrtho, farOrtho)
      );
    } else if (projection === "perspective") {
      return matrices.perspective(
        fovy,
        aspect,
        objects[0].viewMatrix.near,
        objects[0].viewMatrix.far
      );
    }
  }

function setProjectionMatrix(matrix, object) {
    const camera = setCamera(object);
    const projectionView = setProjection();
    const view = Mat4.inverse(camera);
    var viewProjectionMatrix = Mat4.multiply(projectionView, view);
    if (factor < 0.1) {
        factor = 0.1;
    }

    if (projection === "perspective") {
        viewProjectionMatrix = Mat4.multiply(
            matrices.makeZtoWMatrix(factor),
            viewProjectionMatrix,
        );
    }

    worldViewProjectionMatrix = Mat4.multiply(viewProjectionMatrix, matrix);

    return worldViewProjectionMatrix;
}



