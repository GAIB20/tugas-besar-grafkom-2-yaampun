export default class Vec3{
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    static add(a, b){
        return new Vec3(a.x + b.x, a.y + b.y, a.z + b.z);
    }

    static dot(a, b){
        return a.x * b.x + a.y * b.y + a.z * b.z;
    }

    static cross(a, b){
        return new Vec3(a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x);
    }

    static norm(a){
        return Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z);
    }

    static normalize(a){
        let norm = Vec3.norm(a);
        return new Vec3(a.x / norm, a.y / norm, a.z / norm);
    }
    

    asArray(){  
        return [this.x, this.y, this.z];
    }
}