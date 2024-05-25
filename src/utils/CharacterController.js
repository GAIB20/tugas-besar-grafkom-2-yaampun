import { targetRoot } from "../index.js";
import { degToRad } from "../structs/math/mathUtils.js";
import Animation from "./Animation.js";

export default class CharacterController{

    // velocity
    static vx = 0;
    static vy = 0;
    static vz = 0;

    // acceleration
    static ax = 1e-5;
    static ay = -1e-5; // for gravity
    static az = 1e-5;

    static jerk = 0.01;
    static currentGround = 0;

    static velocityThreshold = 1e-4;
    static isJumping = false;

    static velocityLoop(parent_node, delta_time){
        // handle the transformation of the character
        if(delta_time >= 20) delta_time = 15
        parent_node.transform.translate[0] += CharacterController.vx * delta_time;
        parent_node.transform.translate[1] += CharacterController.vy * delta_time;
        parent_node.transform.translate[2] += CharacterController.vz * delta_time;

        // handle vx
        if(CharacterController.vx > CharacterController.velocityThreshold){
        CharacterController.vx -= CharacterController.ax * delta_time;
        }
        else if(CharacterController.vx < -CharacterController.velocityThreshold){
        CharacterController.vx += CharacterController.ax * delta_time;
        }
        // handle vz
        if(CharacterController.vz > CharacterController.velocityThreshold){
        CharacterController.vz -= CharacterController.az * delta_time;
        }
        else if(CharacterController.vz < -CharacterController.velocityThreshold){
        CharacterController.vz += CharacterController.az * delta_time;
        }

        // handle near 0 velocity
        if(Math.abs(CharacterController.vx) < CharacterController.velocityThreshold ){
            CharacterController.vx = 0;
        }
        if(Math.abs(CharacterController.vy) < CharacterController.velocityThreshold){
            CharacterController.vy = 0;
        }
        if(Math.abs(CharacterController.vz) < CharacterController.velocityThreshold){
            CharacterController.vz = 0;
        }
       
        
    }

    static gravityLoop(parent_node, delta_time){
        if(targetRoot === undefined) return;

        // return if <= currentGround
        if(parent_node.transform.translate[1] <= CharacterController.currentGround){
            parent_node.transform.translate[1] = CharacterController.currentGround;
            CharacterController.vy = 0;
            CharacterController.isJumping = false;
            Animation.handleGeneralTransform(parent_node, document)
            return;
        }
        // handle vy
        if(delta_time >= 20) delta_time = 15;
        CharacterController.vy += CharacterController.ay * delta_time;
        Animation.handleGeneralTransform(parent_node, document)
       
        
        // if()
        // CharacterController.vy += CharacterController.ay * delta_time;
        // converge all acceleration into 0
        // handle ax if +
        // if(CharacterController.ax > 0.001){
        //     CharacterController.ax -= CharacterController.jerk * delta_time;
        // }
        // // handle ax if -
        // else if(CharacterController.ax < -0.001){
        //     CharacterController.ax += CharacterController.jerk * delta_time;
        // }
        // // handle if ax is close to 0 but not 0
        // else{
        //     CharacterController.ax = 0;
        // }

        // // handle az if +
        // if(CharacterController.az > 0){
        //     CharacterController.az -= CharacterController.jerk * delta_time;
        // }
        // // handle az if -
        // else if(CharacterController.az < 0){
        //     CharacterController.az += CharacterController.jerk * delta_time;
        // }
        // // handle if az is close to 0 but not 0
        // else if(Math.abs(CharacterController.az) < CharacterController.jerk){
        //     CharacterController.az = 0;
        // }
        
    }
}