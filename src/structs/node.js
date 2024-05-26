// const { default: Mat4 } = require("./structs/math/Mat4");
import Mat4 from "./math/Mat4.js";

export default class Node {
    constructor() {
        this.children = [];
        this.localMatrix = Mat4.getIdentity();
        this.worldMatrix = Mat4.getIdentity();
        this.worldInverseMatrix = Mat4.getIdentity();
    }
  
    setParent(parent) {
        // already have parent
        if (this.parent) {
            const index = this.parent.children.indexOf(this);
            if (index >= 0) {
                this.parent.children.splice(index, 1);
            }
        }
    
    if (parent) {
            parent.children.push(this);
        }
        this.parent = parent.name;
        }
  
    setWorldMtx(matrix) {
      if (matrix !== null) {
        this.worldMatrix = Mat4.multiply(matrix, this.localMatrix);
      } else {
        this.worldMatrix = this.localMatrix;
      }
  
      const worldMatrix = this.worldMatrix;
      this.worldInverseMatrix = Mat4.transpose(
        Mat4.inverse(this.worldMatrix)
      );
      this.children.forEach(child => {
        child.setWorldMtx(worldMatrix);
      });
    }

    toJSON() {
      return {
          name: this.name,
          ambient: this.ambient,
          animation: this.animation,
          children: this.children.map(child => child.toJSON()),
          const: this.const,
          diffuse: this.diffuse,
          localMatrix: this.localMatrix,
          model: this.model,
          pickedColor: this.pickedColor,
          phong: this.phong,
          phongAmbient: this.phongAmbient,
          shading:this.shading,
          shininess: this.shininess,
          specular: this.specular,
          texType: this.texType,
          transform: this.transform,
          viewMatrix: this.viewMatrix,  
          worldInverseMatrix: this.worldInverseMatrix,
          worldMatrix: this.worldMatrix,
      };
    }

    fromJSON(data) {
        this.name = data.name;
        this.ambient = data.ambient;
        this.animation = data.animation;
        this.children = data.children.map(childData => {
            const childNode = new Node();
            childNode.fromJSON(childData);
            return childNode;
        });
        this.const = data.const;
        this.diffuse = data.diffuse;
        this.localMatrix = data.localMatrix;
        this.model = data.model;
        this.pickedColor = data.pickedColor;
        this.phong = data.phong;
        this.phongAmbient = data.phongAmbient;
        this.shading = data.shading;
        this.shininess = data.shininess;
        this.specular = data.specular;
        this.texType = data.texType;
        this.transform = data.transform;
        this.viewMatrix = data.viewMatrix;
        this.worldInverseMatrix = data.worldInverseMatrix;
        this.worldMatrix = data.worldMatrix;
        return this;
    }

    
  }
  