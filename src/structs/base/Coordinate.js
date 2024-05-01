import Vec4 from "../math/Vec4";

export default class Coordinate {
    constructor(x, y, z, p = 1) {
        this.data = new Vec4(x, y, z, p);
    }

    asArrayVec4() {
        return this.data.asArray();
    }

    asArrayVec3() {
        return [this.data.x, this.data.y, this.data.z];
    }

}