export default class Vec4{
    constructor(x, y, z, w){
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    static add(a, b){
        return new Vec4(a.x + b.x, a.y + b.y, a.z + b.z, a.w + b.w);
    }

    static dot(a, b){
        return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
    }

    asArray(){  
        return [this.x, this.y, this.z, this.w];
    }

}