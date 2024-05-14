// const { default: Mat4 } = require("./structs/math/Mat4");
import Mat4 from "./math/Mat4.js";

export default class Node {
    constructor() {
        this.children = [];
        this.localMatrix = Mat4.getIdentity();
        this.worldMatrix = Mat4.getIdentity();
        this.worldInverseMatrix = Mat4.getIdentity();
    }

    getWorldMatrix() {
        return this.worldMatrix;
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
  }
  