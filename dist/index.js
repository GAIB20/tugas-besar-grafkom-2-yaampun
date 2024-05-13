/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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




/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHVnYXMtYmVzYXItZ3JhZmtvbS0yLXlhYW1wdW4vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnbC1jYW52YXNcIik7XHJcbmNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbFwiKTtcclxuXHJcblxyXG5jb25zdCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZlcnRleC1zaGFkZXItM2RcIik/LnRleHRDb250ZW50O1xyXG5jb25zdCBmcmFnbWVudFNoYWRlclNvdXJjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJhZ21lbnQtc2hhZGVyLTNkXCIpPy50ZXh0Q29udGVudDtcclxuXHJcbi8vIHN0YXRlXHJcbnZhciBvYmplY3RzO1xyXG52YXIgdGFyZ2V0O1xyXG52YXIgbGlnaHRpbmc7XHJcbnZhciBsaWdodERpcmVjdGlvbjtcclxudmFyIHRleHR1cmU7XHJcbnZhciBwcm9qZWN0aW9uO1xyXG52YXIgZmFjdG9yO1xyXG52YXIgdGhldGE7XHJcbnZhciBwaGk7XHJcbi8vIGNvbnNvbGUubG9nKGRlZmF1bHRPYmplY3RzKTtcclxuXHJcbmluaXRTdGF0ZSgpO1xyXG5cclxuZnVuY3Rpb24gaW5pdFN0YXRlKCkge1xyXG4gICAgb2JqZWN0cyA9IGVuZE1vZGVsO1xyXG4gICAgZm9jdXMgPSBudWxsO1xyXG4gICAgbGlnaHRpbmcgPSBmYWxzZTtcclxuICAgIGxpZ2h0RGlyZWN0aW9uID0gWzAsIDAsIDFdO1xyXG4gICAgdGV4dHVyZSA9IFwibm9uZVwiO1xyXG4gICAgcHJvamVjdGlvbiA9IFwib3J0aG9ncmFwaGljXCI7XHJcbiAgICBmYWN0b3IgPSAwLjA7XHJcbiAgICB0aGV0YSA9IDkwLjA7XHJcbiAgICBwaGkgPSA5MC4wO1xyXG4gICAgc2V0RGVmYXVsdFJvdGF0aW9uKG9iamVjdHMpXHJcbiAgICAvLyBpbml0QW5pbWF0aW9uKG9iamVjdHMpO1xyXG4gICAgLy8gc2hvd0NvbXBvbmVudHMob2JqZWN0cyk7XHJcblxyXG59XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgaWYoIWdsKXtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXZWJHTCBub3Qgc3VwcG9ydGVkXCIpO1xyXG4gICAgfVxyXG4gICAgdGFyZ2V0ID0gb2JqZWN0c1swXTtcclxuXHJcblxyXG4gICAgcmVuZGVyKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldERlZmF1bHRTdGF0ZShvYmplY3RzKSB7XHJcbiAgICBvYmplY3RzLmZvckVhY2gob2JqZWN0ID0+IHtcclxuICAgICAgICBpZiAoIW9iamVjdC5tb2RlbC5jb2xvcnMpIHtcclxuICAgICAgICAgICAgaWYgKCFvYmplY3QucGlja2VkQ29sb3IpIHtcclxuICAgICAgICAgICAgICAgIG9iamVjdC5tb2RlbC5jb2xvcnMgPSBnZW5lcmF0ZUNvbG9ycyhvYmplY3QubW9kZWwudmVydGljZXMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0Lm1vZGVsLmNvbG9ycyA9IGdlbmVyYXRlQ29sb3JzKFxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5tb2RlbC52ZXJ0aWNlcyxcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QucGlja2VkQ29sb3JcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIGlmICghb2JqZWN0LnByb2dyYW0gJiYgIWxpZ2h0aW5nKSB7XHJcbiAgICAgICAgICAgIG9iamVjdC5wcm9ncmFtID0gY3JlYXRlU2hhZGVyUHJvZ3JhbShcclxuICAgICAgICAgICAgICAgIGdsLFxyXG4gICAgICAgICAgICAgICAgdmVydGV4U2hhZGVyU291cmNlLFxyXG4gICAgICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIC8vICAgaWYgKG9iamVjdC5hbmltYXRpb24uaXNPYmplY3RBbmltYXRlICYmIG9iamVjdC5hbmltYXRpb24uYW5pbWF0ZSkge1xyXG4gICAgICAgIC8vICAgICBvYmplY3QudHJhbnNmb3JtID0gb2JqZWN0LmFuaW1hdGlvbi5hbmltYXRlW2NvdW50ZXIgJSBmcHNdO1xyXG4gICAgICAgIC8vICAgfVxyXG4gICAgICBcclxuICAgICAgICAgIC8vIG9iamVjdC50cmFuc2Zvcm0gPSBvYmplY3QuYW5pbWF0aW9uLmFuaW1hdGVbY291bnRlciAlIGZwc107XHJcbiAgICAgICAgb2JqZWN0LmxvY2FsTWF0cml4ID0gc2V0VHJhbnNmb3JtKG9iamVjdCk7XHJcbiAgICAgICAgaWYgKG9iamVjdC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHNldERlZmF1bHRTdGF0ZShvYmplY3QuY2hpbGRyZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFRyYW5zZm9ybShvYmplY3QpIHtcclxuICAgIC8qIFNldHVwIHRyYW5zZm9ybSBtYXRyaXggKi9cclxuICAgIC8vIGNvbnNvbGUubG9nKG9iamVjdClcclxuXHJcbiAgICB2YXIgdHJhbnNmb3JtTWF0cml4ID0gTWF0NC50cmFuc2xhdGUoXHJcbiAgICAgIG9iamVjdC50cmFuc2Zvcm0udHJhbnNsYXRlWzBdLFxyXG4gICAgICBvYmplY3QudHJhbnNmb3JtLnRyYW5zbGF0ZVsxXSxcclxuICAgICAgb2JqZWN0LnRyYW5zZm9ybS50cmFuc2xhdGVbMl1cclxuICAgICk7XHJcbiAgICBcclxuXHJcblxyXG5cclxuICAgIHRyYW5zZm9ybU1hdHJpeCA9IE1hdDQubXVsdGlwbHkoXHJcbiAgICAgIHRyYW5zZm9ybU1hdHJpeCxcclxuICAgICAgTWF0NC5yb3RhdGVYKG9iamVjdC50cmFuc2Zvcm0ucm90YXRlWzBdKVxyXG4gICAgKTtcclxuICBcclxuICAgIHRyYW5zZm9ybU1hdHJpeCA9IE1hdDQubXVsdGlwbHkoXHJcbiAgICAgIHRyYW5zZm9ybU1hdHJpeCxcclxuICAgICAgTWF0NC5yb3RhdGVZKG9iamVjdC50cmFuc2Zvcm0ucm90YXRlWzFdKVxyXG4gICAgKTtcclxuICBcclxuICAgIHRyYW5zZm9ybU1hdHJpeCA9IE1hdDQubXVsdGlwbHkoXHJcbiAgICAgIHRyYW5zZm9ybU1hdHJpeCxcclxuICAgICAgTWF0NC5yb3RhdGVaKG9iamVjdC50cmFuc2Zvcm0ucm90YXRlWzJdKVxyXG4gICAgKTtcclxuICBcclxuICAgIHRyYW5zZm9ybU1hdHJpeCA9IE1hdDQubXVsdGlwbHkoXHJcbiAgICAgIHRyYW5zZm9ybU1hdHJpeCxcclxuICAgICAgTWF0NC5zY2FsZShcclxuICAgICAgICBvYmplY3QudHJhbnNmb3JtLnNjYWxlWzBdLFxyXG4gICAgICAgIG9iamVjdC50cmFuc2Zvcm0uc2NhbGVbMV0sXHJcbiAgICAgICAgb2JqZWN0LnRyYW5zZm9ybS5zY2FsZVsyXVxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIFxyXG4gICAgcmV0dXJuIHRyYW5zZm9ybU1hdHJpeDtcclxuICB9XHJcblxyXG5mdW5jdGlvbiBzZXREZWZhdWx0Um90YXRpb24ob2JqZWN0cykge1xyXG4gICAgb2JqZWN0cy5mb3JFYWNoKG9iamVjdCA9PiB7XHJcbiAgICAgICAgb2JqZWN0LnRyYW5zZm9ybS5yb3RhdGUgPSBvYmplY3QudHJhbnNmb3JtLnJvdGF0ZS5tYXAoKHZhbCkgPT4gZGVnVG9SYWQodmFsKSk7XHJcbiAgICAgICAgaWYgKG9iamVjdC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHNldERlZmF1bHRSb3RhdGlvbihvYmplY3QuY2hpbGRyZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyTG9vcChvYmplY3RzKSB7XHJcbiAgICBvYmplY3RzLmZvckVhY2gob2JqZWN0ID0+IHtcclxuICAgICAgICBnbC51c2VQcm9ncmFtKG9iamVjdC5wcm9ncmFtKTtcclxuICAgICAgICB2YXIgbW9kZWxNYXRyaXggPSBvYmplY3QuZ2V0V29ybGRNYXRyaXgoKTtcclxuXHJcbiAgICAgICAgb2JqZWN0LndvcmxkTWF0cml4ID0gc2V0UHJvamVjdGlvbk1hdHJpeChvYmplY3Qud29ybGRNYXRyaXgsIG9iamVjdClcclxuXHJcblxyXG4gICAgICAgIHZhciBhX3Bvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheShvYmplY3QubW9kZWwudmVydGljZXMuZmxhdCgxKSk7XHJcbiAgICAgICAgdmFyIGFfbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheShvYmplY3QubW9kZWwubm9ybWFscy5mbGF0KDEpKTtcclxuICAgICAgICB2YXIgYV9jb2xvciA9IG5ldyBGbG9hdDMyQXJyYXkob2JqZWN0Lm1vZGVsLmNvbG9ycy5mbGF0KDEpKTtcclxuICAgICAgICB2YXIgYV90ZXh0dXJlID0gbmV3IEZsb2F0MzJBcnJheShvYmplY3QubW9kZWwudGV4Q29vcmQpO1xyXG4gICAgICAgIHZhciBhX3RhbmdlbnQgPSBuZXcgRmxvYXQzMkFycmF5KG9iamVjdC5tb2RlbC50YW5nZW50cy5mbGF0KDEpKTtcclxuICAgICAgICB2YXIgYV9iaXRhbmdlbnQgPSBuZXcgRmxvYXQzMkFycmF5KG9iamVjdC5tb2RlbC5iaXRhbmdlbnRzLmZsYXQoMSkpO1xyXG5cclxuICAgICAgICBzZXRBdHRyKGdsLCBvYmplY3QucHJvZ3JhbSwgYV9wb3NpdGlvbiwgYV9ub3JtYWwsIGFfY29sb3IsIGFfdGV4dHVyZSwgYV90YW5nZW50LCBhX2JpdGFuZ2VudCk7XHJcbiAgICAgICAgdmFyIHVuaWZvcm1zID0ge1xyXG4gICAgICAgICAgICB1V29ybGRWaWV3UHJvamVjdGlvbjogb2JqZWN0LndvcmxkTWF0cml4LFxyXG4gICAgICAgICAgICB1V29ybGRJbnZlcnNlVHJhbnNwb3NlOiBvYmplY3Qud29ybGRJbnZlcnNlTWF0cml4LFxyXG4gICAgICAgICAgICB1UmV2ZXJzZUxpZ2h0RGlyZWN0aW9uOiBub3JtYWxpemVMaWdodCxcclxuICAgICAgICAgICAgdUNvbG9yOiBvYmplY3QucGlja2VkQ29sb3IuY29uY2F0KDEuMCksXHJcbiAgICAgICAgICAgIHVNb2RlbE1hdHJpeDogbW9kZWxNYXRyaXgsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRVbmlmb3JtcyhnbCwgb2JqZWN0LnByb2dyYW0sIHVuaWZvcm1zKTtcclxuXHJcbiAgICAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRVMsIDAsIG9iamVjdC5tb2RlbC52ZXJ0aWNlcy5sZW5ndGgpO1xyXG4gICAgICAgIGlmIChvYmplY3QuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZW5kZXJMb29wKG9iamVjdC5jaGlsZHJlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbndpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDEpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH0pKCk7XHJcblxyXG5mdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICBnbC52aWV3cG9ydCgwLCAwLCBnbC5jYW52YXMud2lkdGgsIGdsLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgZ2wuY2xlYXJDb2xvcigxLjAsIDEuMCwgMS4wLCAxLjApO1xyXG4gICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IGdsLkRFUFRIX0JVRkZFUl9CSVQpO1xyXG5cclxuICAgIGdsLmVuYWJsZShnbC5DVUxMX0ZBQ0UpO1xyXG4gICAgZ2wuZW5hYmxlKGdsLkRFUFRIX1RFU1QpO1xyXG5cclxuICAgIHNldERlZmF1bHRTdGF0ZShvYmplY3RzKTtcclxuXHJcblxyXG4gICAgb2JqZWN0c1swXS5zZXRXb3JsZE10eChudWxsKTtcclxuICAgIG5vcm1hbGl6ZUxpZ2h0ID0gbWF0cmljZXMubm9ybWFsaXplKGxpZ2h0RGlyZWN0aW9uKTtcclxuICAgIHJlbmRlckxvb3Aob2JqZWN0cyk7XHJcbiAgICBcclxuICB3aW5kb3cucmVxdWVzdEFuaW1GcmFtZShyZW5kZXIpO1xyXG4gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldENhbWVyYShvYmplY3QpIHtcclxuICAgIC8qIFNldHVwIHZpZXcgbWF0cml4ICovXHJcbiAgICB2YXIgdmlld01hdHJpeCA9IE1hdDQubXVsdGlwbHkoXHJcbiAgICAgIE1hdDQucm90YXRlWShvYmplY3Qudmlld01hdHJpeC5jYW1lcmFbMV0pLFxyXG4gICAgICBNYXQ0LnJvdGF0ZVgob2JqZWN0LnZpZXdNYXRyaXguY2FtZXJhWzBdKVxyXG4gICAgKTtcclxuICBcclxuICAgIC8vIGhhbmRsZSByYWRpdXNcclxuICAgIHZpZXdNYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICB2aWV3TWF0cml4LFxyXG4gICAgICBNYXQ0LnRyYW5zbGF0ZSgwLCAwLCBvYmplY3Qudmlld01hdHJpeC5jYW1lcmFbMl0pXHJcbiAgICApO1xyXG4gIFxyXG4gICAgbGV0IGNhbVBvcyA9IFt2aWV3TWF0cml4WzEyXSwgdmlld01hdHJpeFsxM10sIHZpZXdNYXRyaXhbMTRdXTtcclxuICBcclxuICAgIGxldCBjYW1lcmFNYXRyaXggPSBtYXRyaWNlcy5sb29rQXQoXHJcbiAgICAgIGNhbVBvcyxcclxuICAgICAgb2JqZWN0LnZpZXdNYXRyaXgubG9va0F0LFxyXG4gICAgICBvYmplY3Qudmlld01hdHJpeC51cFxyXG4gICAgKTtcclxuICBcclxuICAgIHJldHVybiBjYW1lcmFNYXRyaXg7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRQcm9qZWN0aW9uICgpIHtcclxuICAgIFxyXG4gICAgY29uc3QgYXNwZWN0ID0gY2FudmFzLndpZHRoIC8gY2FudmFzLmhlaWdodDtcclxuICAgIGNvbnN0IGZvdnkgPSBkZWdUb1JhZCg0NSk7XHJcbiAgICBjb25zdCBsZWZ0ID0gLTI7XHJcbiAgICBjb25zdCByaWdodCA9IDI7XHJcbiAgICBjb25zdCBib3R0b20gPSAtMjtcclxuICAgIGNvbnN0IHRvcCA9IDI7XHJcbiAgICBsZXQgZmFyT3J0aG8gPSBvYmplY3RzWzBdLnZpZXdNYXRyaXguZmFyICogMTtcclxuICAgIGxldCBuZWFyT3J0aG8gPSAtZmFyT3J0aG87XHJcblxyXG5cclxuICBcclxuICAgIGlmIChwcm9qZWN0aW9uID09PSBcIm9ydGhvZ3JhcGhpY1wiKSB7XHJcbiAgICAvLyAgIHJldHVybiBtYXRyaWNlcy5vcnRob2dyYXBoaWMobGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyT3J0aG8sIGZhck9ydGhvKTtcclxuICAgIHJldHVybiBNYXQ0LnByb2plY3Rpb25PcnRvZ3JhcGhpYyhsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXJPcnRobywgZmFyT3J0aG8pXHJcbiAgICAvLyByZXR1cm4gbWF0cmljZXMub3J0aG9ncmFwaGljKGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhck9ydGhvLCBmYXJPcnRobyk7XHJcbiAgICB9IGVsc2UgaWYgKHByb2plY3Rpb24gPT09IFwib2JsaXF1ZVwiKSB7XHJcbiAgICAgIHJldHVybiBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICAgIG1hdHJpY2VzLm9ibGlxdWUodGhldGEsIHBoaSksXHJcbiAgICAgICAgbWF0cmljZXMub3J0aG9ncmFwaGljKGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhck9ydGhvLCBmYXJPcnRobylcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAocHJvamVjdGlvbiA9PT0gXCJwZXJzcGVjdGl2ZVwiKSB7XHJcbiAgICAgIHJldHVybiBtYXRyaWNlcy5wZXJzcGVjdGl2ZShcclxuICAgICAgICBmb3Z5LFxyXG4gICAgICAgIGFzcGVjdCxcclxuICAgICAgICBvYmplY3RzWzBdLnZpZXdNYXRyaXgubmVhcixcclxuICAgICAgICBvYmplY3RzWzBdLnZpZXdNYXRyaXguZmFyXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZnVuY3Rpb24gc2V0UHJvamVjdGlvbk1hdHJpeChtYXRyaXgsIG9iamVjdCkge1xyXG4gICAgY29uc3QgY2FtZXJhID0gc2V0Q2FtZXJhKG9iamVjdCk7XHJcbiAgICBjb25zdCBwcm9qZWN0aW9uVmlldyA9IHNldFByb2plY3Rpb24oKTtcclxuICAgIGNvbnN0IHZpZXcgPSBNYXQ0LmludmVyc2UoY2FtZXJhKTtcclxuICAgIHZhciB2aWV3UHJvamVjdGlvbk1hdHJpeCA9IE1hdDQubXVsdGlwbHkocHJvamVjdGlvblZpZXcsIHZpZXcpO1xyXG4gICAgaWYgKGZhY3RvciA8IDAuMSkge1xyXG4gICAgICAgIGZhY3RvciA9IDAuMTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJvamVjdGlvbiA9PT0gXCJwZXJzcGVjdGl2ZVwiKSB7XHJcbiAgICAgICAgdmlld1Byb2plY3Rpb25NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KFxyXG4gICAgICAgICAgICBtYXRyaWNlcy5tYWtlWnRvV01hdHJpeChmYWN0b3IpLFxyXG4gICAgICAgICAgICB2aWV3UHJvamVjdGlvbk1hdHJpeCxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHdvcmxkVmlld1Byb2plY3Rpb25NYXRyaXggPSBNYXQ0Lm11bHRpcGx5KHZpZXdQcm9qZWN0aW9uTWF0cml4LCBtYXRyaXgpO1xyXG5cclxuICAgIHJldHVybiB3b3JsZFZpZXdQcm9qZWN0aW9uTWF0cml4O1xyXG59XHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==