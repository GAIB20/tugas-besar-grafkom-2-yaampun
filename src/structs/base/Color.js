import Vec4 from "../math/Vec4";

export default class Color{
    constructor(r, g, b, a){
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    asArray(){
        return [this.r, this.g, this.b, this.a];
    }
}