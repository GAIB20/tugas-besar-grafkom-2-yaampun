import pigModel from "./structs/model/pig.js";
import chickenModel from "./structs/model/chicken.js";
import foxModel from "./structs/model/fox.js";
import Mat4 from "./structs/math/Mat4.js";
import Vec3 from "./structs/math/Vec3.js";
import Vec4 from "./structs/math/Vec4.js";
import Camera from "./utils/Camera.js";
import { displayComponent, 
  clearComponent, 
  initOptionModel, 
  handleTransform, 
  handleTotalModelFrame,
  handleTotalNodeFrame,
  handleCurrentModelFrame,
  handleCurrentNodeFrame,
  nodeName} from "./handler/eventHandler.js";
import hollowModel from "./structs/model/hollowThingy.js";
import hollowRingModel from "./structs/model/ring.js";
import { createPaperTexture, createEnvironmentTexture, createBumpTexture } from "./utils/texture.js"
import Animation from "./utils/Animation.js";
import Node from "./structs/node.js";
import { degToRad } from "./structs/math/mathUtils.js";

const canvas = document.getElementById("gl-canvas");
const gl = canvas.getContext("webgl");


const vertexShaderSource = document.getElementById("vertex-shader-3d")?.textContent;
const fragmentShaderSource = document.getElementById("fragment-shader-3d")?.textContent;

// state
export var model = [pigModel, chickenModel, foxModel, hollowModel, hollowRingModel];
export var objects;
export function setObjects(value) {
  objects = value;
}
export var target;
export function setTarget(value) {
  target = value;
}
export var targetRoot;
export function setTargetRoot(value) {
  targetRoot = value;
}
var lighting;
export var lightDirection;
var texture;
var projection_type;

export function setProjectionType(newProjection) {
  projection_type = newProjection;
}
var factor;
var oblique_theta;
export function setObliqueTheta(newTheta) {
  oblique_theta = newTheta;
}
var oblique_phi;
export function setObliquePhi(newPhi) {
  oblique_phi = newPhi;
}
var normalizeLight;
var worldViewProjectionMatrix;
var cubeCount = 0;

// animation
var t_animation = 0;
var fps_time = 0.15;

initState();

function initState() {
    objects = model[0];
    lighting = false;
    lightDirection = [0.0, 0.0, 1.0]
    texture = "none";
    projection_type = "orthographic";
    factor = 0.0;
    oblique_theta = 90.0;
    oblique_phi = 90.0;
    for(let i = 0; i < model.length; i++){
        setDefaultRotation(model[i]);
    }
    displayComponent(0, objects);
    initOptionModel(model);
    handleTransform(objects[0])
    handleTotalModelFrame(objects[0])
    handleTotalNodeFrame(objects[0])

}

window.onload = () => {
    if(!gl){
        throw new Error("WebGL not supported");
    }
    target = objects[0];
    targetRoot = target;
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

    var transformMatrix = Mat4.translate(
      object.transform.translate[0],
      object.transform.translate[1],
      object.transform.translate[2]
    );

    let _center = object.model.center
    if(_center){
      transformMatrix = Mat4.multiply(
        transformMatrix,
        Mat4.translate(_center[0], _center[1], _center[2])
      );
    }
    
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

    if(_center){
      transformMatrix = Mat4.multiply(
        transformMatrix,
        Mat4.translate(-_center[0], -_center[1], -_center[2])
      );
    }
  
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
    for(let object of objects){
        object.transform.rotate = object.transform.rotate.map((val) => degToRad(val));
        if(object.children.length > 0){
            setDefaultRotation(object.children);
        }
    }

}

function renderLoop(objects) {
    objects.forEach(object => {
        gl.useProgram(object.program);
        var modelMatrix = object.getWorldMatrix();

        object.worldMatrix = setProjectionMatrix(object.worldMatrix, object)


        var a_position = new Float32Array(object.model.vertices.flat(1));
        var a_normal = new Float32Array(object.model.normals.flat(1));
        var a_color = new Float32Array(object.pickedColor.flat(1));
        var a_texture = new Float32Array(object.model.texCoord);
        var a_tangent = new Float32Array(object.model.tangents.flat(1));
        var a_bitangent = new Float32Array(object.model.bitangents.flat(1));

        setAttr(gl, object.program, a_position, a_normal, a_color, a_texture, a_tangent, a_bitangent);

        // const diffuse = [1, 1, 1];
        // const specular = [0, 0, 0];
        // const ambient = [1, 1 ,1]
        // const shininess = 100;

        var uniforms = {
            uWorldViewProjection: object.worldMatrix,
            uWorldInverseTranspose: object.worldInverseMatrix,
            uReverseLightDirection: normalizeLight,
            uColor: object.pickedColor.concat(1.0),
            uModelMatrix: modelMatrix,
            uAmbientColor: object.ambient,
            uDiffuseColor: object.diffuse,
            uSpecularColor: object.specular,
            uShininess: object.shininess,
            uLightPos: normalizeLight,
            ka: object.const.ka,
            kd: object.const.kd,
            ks: object.const.ks,
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


function render(now) {
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clearColor(0.8, 0.8, 0.8, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.enable(gl.CULL_FACE);
    gl.enable(gl.DEPTH_TEST);

    setDefaultState(objects);
    // delta time
    if(!now) now = 0;
    if(t_animation === 0) t_animation = now;

    if((now - t_animation) >= fps_time){
      t_animation = now;
      let deltaTime = now - t_animation;
      Animation.animate(targetRoot, deltaTime);
      handleCurrentModelFrame(targetRoot)
      handleCurrentNodeFrame(target)
    }


    objects[0].setWorldMtx(null);

    normalizeLight = Vec3.unitVector(Vec3.fromArray(lightDirection)).asArray()
    renderLoop(objects);
    Animation.handleTransform(target, document);
    
    window.requestAnimFrame(render);
    
}


function setProjectionMatrix(matrix, object) {
    // const camera = setCamera(object);
    const projectionView = Camera.projectionMatrix(projection_type, 
                                                    degToRad(45), 
                                                    (canvas.width / canvas.height), 
                                                    object.viewMatrix.near, 
                                                    object.viewMatrix.far,
                                                    oblique_theta,
                                                    oblique_phi)
    const viewMatrix = Camera.viewMatrix(object.viewMatrix.camera, object.viewMatrix.lookAt, object.viewMatrix.up);
    var viewProjectionMatrix = Mat4.multiply(projectionView, viewMatrix);
    if (factor < 0.01) {
        factor = 0.01;
    }

    if (projection_type === "perspective") {
        viewProjectionMatrix = Mat4.multiply(
            Camera.makeZToWMatrix(factor),
            viewProjectionMatrix,
        );
    }

    worldViewProjectionMatrix = Mat4.multiply(viewProjectionMatrix, matrix);

    return worldViewProjectionMatrix;
}


export function changeModelObject (index) {
    objects = model[index];
    setTarget(objects[0]);
    setTargetRoot(objects[0]);
    clearComponent();
    displayComponent(0, objects);
    handleTransform(objects[0]);
    handleTotalModelFrame(targetRoot)
    handleTotalNodeFrame(targetRoot)
    render();

}

export function changeMappingTexture(objects, textureType) {
  objects.forEach((object) => {
    if (textureType === "0") {
      object.program = createShaderProgram(
        gl,
        vertex_shader_3d,
        fragment_shader_3d_no_lighting
      );
    } else if (textureType === "1") {
      createPaperTexture(gl);
      object.program = createShaderProgram(
        gl,
        vertex_shader_3d,
        fragment_shader_texture
      );
    } else if (textureType === "2") {
      createEnvironmentTexture(gl);
      object.program = createShaderProgram(
        gl,
        vertex_shader_3d,
        fragment_shader_environment
      )
    } else if (textureType === "3") {
      createBumpTexture(gl);
      object.program = createShaderProgram(
        gl,
        vertex_shader_3d,
        fragment_shader_bump
      );
    }
    if (object.children.length > 0) {
      changeMappingTexture(object.children, textureType);
    }
  });
}

export function renameTarget (newName) {
  for( let i = 0; i < objects.length; i++){
    if(objects[i].name === target.name){
      console.log(objects[i].name)
      console.log(newName)
      objects[i].name = newName;
    }
  }
  target.name = newName;
  clearComponent();
  displayComponent(0, objects);
}

export function deleteNode (name) {
  function removeNode (node) {
    if (node.name === name) {
      objects.splice(objects.indexOf(node), 1);
      nodeName.value = ""
      return;
    } 

    if (node.children.length > 0) {
      for (let i = 0; i < node.children.length; i++) {
        if (node.children[i].name === name) {
          node.children.splice(i, 1);
          nodeName.value = ""
        } else {
          removeNode(node.children[i]);
        }
      }
    }
  }

  removeNode(objects[0]);
  console.log(objects);
}

export function addNode () {
  const newNode = new Node(); 
  cubeCount++;
  checkNode(objects, "newCube" + cubeCount);
  newNode.name = "newCube" + cubeCount;
  newNode.model = boxModel(1, 1, 1, [0, 0, 0]);
  newNode.transform = {
    translate: [0, 0, 0],
    rotate: [0, 0, 0],
    scale: [1, 1, 1],
  };
  newNode.pickedColor = randomColors(),
  newNode.diffuse = [1,1,1],
  newNode.specular = [1,1,1],
  newNode.ambient = [1,1,1],
  newNode.shininess = 1,
  newNode.const = {
      kd: 0.5,
      ks: 0.0,
      ka: 1.0,
  }
  newNode.viewMatrix = {
      camera: [0, 0, 5],
      lookAt: [0, 0, 0],
      up: [0, 1, 0],
      near: 0.1,
      far: 50,
  };
  newNode.animation = {
      isAnimate: false,
  };
  newNode.worldMatrix = target.worldMatrix;
  if (objects.length !== 0) {
    newNode.setParent(target);
  } else {
    objects.push(newNode);
    target = objects[0];
    targetRoot = objects[0];
    console.log(objects)
  }
  clearComponent();
  displayComponent(0, objects);
}

function checkNode(objects, name) {
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].name === name) {
      cubeCount++;
    }
    if (objects[i].children.length > 0) {
      checkNode(objects[i].children, name);
    }
  }
}

export function loadObjects(objects) {
    setObjects(objects);
    setTarget(objects[0]);
    setTargetRoot(objects[0]);
    clearComponent();
    displayComponent(0, objects);
    handleTransform(objects[0]);
    handleTotalModelFrame(targetRoot)
    handleTotalNodeFrame(targetRoot)
    render();
}

export function addModel(object) {
  model.push(object);
}