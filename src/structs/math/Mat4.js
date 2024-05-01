
import Vec4 from './Vec4.js';

export default class Mat4{

    data;

    constructor(m00, m01, m02, m03, 
                m10, m11, m12, m13, 
                m20, m21, m22, m23, 
                m30, m31, m32, m33){
        this.data = new Float32Array([m00, m01, m02, m03,
                                      m10, m11, m12, m13,
                                      m20, m21, m22, m23,
                                      m30, m31, m32, m33]);
        
    }

    static getEmpty(){
        return new Mat4(0, 0, 0, 0,
                        0, 0, 0, 0,
                        0, 0, 0, 0,
                        0, 0, 0, 0);
    }

    static getIdentity(){
        return new Mat4(1, 0, 0, 0,
                        0, 1, 0, 0,
                        0, 0, 1, 0,
                        0, 0, 0, 1);
    }


    static getTranslation(x, y, z){
        return new Mat4(1, 0, 0, 0,
                        0, 1, 0, 0,
                        0, 0, 1, 0,
                        x, y, z, 1);
    }

    static getScale(x, y, z){

        return new Mat4(x, 0, 0, 0,
                        0, y, 0, 0,
                        0, 0, z, 0,
                        0, 0, 0, 1);
    }

    static getRotationX(theta){
        return new Mat4(1, 0, 0, 0,
                        0, Math.cos(theta), -Math.sin(theta), 0,
                        0, Math.sin(theta), Math.cos(theta), 0,
                        0, 0, 0, 1);
    }

    static getRotationY(theta){
        return new Mat4(Math.cos(theta), 0, Math.sin(theta), 0,
                        0, 1, 0, 0,
                        -Math.sin(theta), 0, Math.cos(theta), 0,
                        0, 0, 0, 1);
    }   

    static getRotationZ(theta){
        return new Mat4(Math.cos(theta), -Math.sin(theta), 0, 0,
                        Math.sin(theta), Math.cos(theta), 0, 0,
                        0, 0, 1, 0,
                        0, 0, 0, 1);
    }   
    static projection(width, height, depth) {
        // Note: This matrix flips the Y axis so 0 is at the top.
        return new Mat4(2 / width, 0, 0, 0,
                        0, -2 / height, 0, 0,
                        0, 0, 2 / depth, 0,
                        -1, 1, 0, 1);
    }

    getColumn(i){
        return new Vec4(this.data[i], this.data[i + 4], this.data[i + 8], this.data[i + 12]);
    }

    getRow(i){
        return new Vec4(this.data[i * 4], this.data[i * 4 + 1], this.data[i * 4 + 2], this.data[i * 4 + 3]);
    }

    getInstance(){
        return this.data;
    }

    static multiply(a, b){
        let result = Mat4.getEmpty();
        for(let i = 0; i < 4; i++){
            let row = a.getRow(i);
            for(let j = 0; j < 4; j++){
                let col = b.getColumn(j);
                result.data[i * 4 + j] = Vec4.dot(row, col);
            }
        }
        return result;
    }
}