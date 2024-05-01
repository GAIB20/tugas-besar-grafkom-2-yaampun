import Mat4 from "./mat4";
import { degToRad } from "./mathUtils";

export default class Transform{
    constructor(projection, translation, rotation, scale, centroid){
        let [xp, yp, zp] = projection;
        this.projection = {
            x: xp,
            y: yp,
            z: zp
        }
        let [xt, yt, zt] = translation;
        this.translation = {
            x: xt,
            y: yt,
            z: zt
        }
        let [xr, yr, zr] = rotation;
        this.rotation = {
            x: xr,
            y: yr,
            z: zr
        }
        let [xs, ys, zs] = scale;
        this.scale = {
            x: xs,
            y: ys,
            z: zs
        }
        let [xc, yc, zc] = centroid;
        this.centroid = {
            x: xc,
            y: yc,
            z: zc
        }
    }

    getProjectionMatrix(){
        //perform projection
        let matrix = Mat4.projection(this.projection.x, this.projection.y, this.projection.z); 
        //perform translation
        matrix = Mat4.multiply(matrix, Mat4.getTranslation(this.translation.x, this.translation.y, this.translation.z));

        //translate to the centroid
        //perform rotation
        matrix = Mat4.multiply(matrix, Mat4.getRotationX(degToRad(this.rotation.x)));
        matrix = Mat4.multiply(matrix, Mat4.getRotationY(degToRad(this.rotation.y)));
        matrix = Mat4.multiply(matrix, Mat4.getRotationZ(degToRad(this.rotation.z))); 
        // translate back to the original position
        //perform scaling
        matrix = Mat4.multiply(matrix, Mat4.getScale(this.scale.x, this.scale.y, this.scale.z));
        return matrix;
    }

}
