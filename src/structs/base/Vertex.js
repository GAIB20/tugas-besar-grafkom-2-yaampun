import Coordinate from "./Coordinate";
import Color from "./Color";

export default class Vertex {
    constructor(coor, color) {
        const [x, y, z] = coor;
        this.coordinate = new Coordinate(x, y, z);
        const [r, g, b, a] = color;
        this.color = new Color(r, g, b, a);
    }

    setColor(color) {
        const [r, g, b, a] = color;
        this.color = new Color(r, g, b, a);
    }

    setCoordinate(coordinate) {
        const [x, y, z] = coordinate;
        this.coordinate = new Coordinate(x, y, z);
    }

    getCoordinate() {
        return this.coordinate.asArrayVec3();
    }

    getColor() {
        return this.color.asArray();
    }
}