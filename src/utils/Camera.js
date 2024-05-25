import Vec3 from "../structs/math/Vec3.js"
import Mat4 from "../structs/math/Mat4.js"

export default class Camera{
    static projectionOrtographic(left, right, bottom, top, near, far) {
        // Note: This matrix flips the Y axis so 0 is at the top.
        const width = right-left
        const height = top-bottom
        const depth = far - near
        const horizontalRatio = (right + left) / width
        const verticalRatio = (top + bottom) / height
        const depthRatio = (far + near) / depth

        return [2 / (width), 0, 0, 0,
                0, 2 / (height), 0, 0,
                0, 0, -2 / (depth), 0,
                horizontalRatio, verticalRatio, depthRatio, 1];
    }


    static projectionPerspective(fov, aspect, near, far){
        const f = 1.0 / Math.tan(fov / 2)
        const rangeInv = 1 / (near - far)

        return [f / aspect, 0, 0, 0,
                0, f, 0, 0,
                0, 0, (near + far) * rangeInv, -1,
                0, 0, near * far * rangeInv * 2, 0]
    }

    static projectionOblique(theta, phi){

        var t = Math.tan(theta)
        t = t == 0 ? 0.00001 : t
        var p = Math.tan(phi)
        p = p == 0 ? 0.00001 : p
        return [1, 0, 0, 0,
                0, 1, 0, 0,
                -1/t, -1/p, 1, 0,
                0, 0, 0, 1]
    }

    static lookDirection(eye, center, up){
        // normalize each array
        // change as Vec3 from array
        let _eye = Vec3.fromArray(eye)
        let _center = Vec3.fromArray(center)
        let _up = Vec3.fromArray(up)
    


        const f = Vec3.unitVector(Vec3.sub(_eye, _center)) // zAxis
        const s = Vec3.unitVector(Vec3.cross(_up, f)) // xAxis
        const u = Vec3.unitVector(Vec3.cross(f, s))

        return [s.x, s.y, s.z, 0,
                u.x, u.y, u.z, 0,
                f.x, f.y, f.z, 0,
                eye[0], eye[1], eye[2], 1]

    }

    static makeZToWMatrix(fudgeFactor){
        return [1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                0, 0, fudgeFactor, 1]
    }

    static projectionMatrix(projection_type, _fov, _aspect,_near, _far, theta = 90, phi = 90){
        const aspect = _aspect;
        const fov = _fov;
        const left = -2;
        const right = 2;
        const bottom = -2;
        const top = 2;
        const farOrtho = _far;
        const nearOrtho = -farOrtho;
    
        switch (projection_type) {
            case "orthographic":
                return Camera.projectionOrtographic(left, right, bottom, top, nearOrtho, farOrtho)
            case "oblique":
                return Mat4.multiply(
                    Camera.projectionOblique(theta, phi),
                    Camera.projectionOrtographic(left, right, bottom, top, nearOrtho, farOrtho)
                );
            case "perspective":
                return Camera.projectionPerspective(
                    fov,
                    aspect,
                    _near,
                    _far
                );
            default:
                return Camera.projectionOrtographic(left, right, bottom, top, nearOrtho, farOrtho)
        }
        
    }

    static viewMatrix(orientation, lookAt, up){
        let [roll, pitch, radius] = orientation

        // roll, pitch, radius
        var cameraMatrix = Mat4.multiply(
            Mat4.multiply(
                Mat4.rotateY(pitch),
                Mat4.rotateX(roll)),
            Mat4.translate(0, 0, radius)
        )

        var cameraPosition = [
            cameraMatrix[12],
            cameraMatrix[13],
            cameraMatrix[14]
        ]

        var cameraMatrix = Camera.lookDirection(cameraPosition, lookAt, up)

        var viewMatrix = Mat4.inverse(cameraMatrix)
{}
        return viewMatrix
    }

    static updateLookAt(parent_model, axis){
    
        let delta = parent_model.transform.translate[axis] - parent_model.viewMatrix.lookAt[axis]
        let lookAtAxis = parent_model.transform.translate[axis]
  
        Camera.generalUpdateLookAt(parent_model, axis, delta, lookAtAxis)
       
    }

    static generalUpdateLookAt(parent_model, axis, delta, lookAtAxis){
            if(parent_model.flag){
            parent_model.viewMatrix.lookAt[axis] = lookAtAxis
            }
            // update camera position [theta, phi, radius]
            // represent in cartesian coordinates from spherical coordinates of camera
            let r = parent_model.viewMatrix.camera[2]
            let theta = parent_model.viewMatrix.camera[1]
            let phi = parent_model.viewMatrix.camera[0]
            let x = r * Math.sin(theta) * Math.cos(phi)
            let y = r * Math.sin(theta) * Math.sin(phi)
            let z = r * Math.cos(theta)
            
            // // transform by lookAt
            if(axis == 0){
            x = x - delta
            y = y
            z = z
            }
            else if(axis == 1){
            x = x
            y = y - delta
            z = z
            }
            else if(axis == 2){
            x = x
            y = y
            z = z - delta
            }
    
            // convert back to spherical coordinates
    
            r = Math.sqrt(x*x + y*y + z*z)
            theta = Math.acos(z/r)
            phi = Math.atan2(y, Math.abs(x))
    
            // // set the new values
            parent_model.viewMatrix.camera[0] = phi
            parent_model.viewMatrix.camera[1] = theta
            parent_model.viewMatrix.camera[2] = r

            if(!parent_model.flag){
                
                // parent_model.transform.translate[axis] -= delta
                parent_model.viewMatrix.lookAt[axis] = lookAtAxis
            }

            for (let i = 0; i < parent_model.children.length; i++) {
                Camera.generalUpdateLookAt(parent_model.children[i], axis, delta, lookAtAxis)
            }
    }
}