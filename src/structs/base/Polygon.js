import Vertex from "./Vertex";

export default class Polygon {

    constructor(vertices) {
        // vertices : Vertex[]
        this.vertices = vertices;
    }

    // getRenderCoordinate() : Float32Array
    // Returns the render coordinates of the polygon in GlRenderable format
    getRenderCoordinate() {
        let renderCoordinates = [];
        let pivot = this.vertices[0].getCoordinate();
        for (let i = 0; i < this.vertices.length - 2; i++) {
            // create triangle
            // for example, vertex[0], vertex[1], vertex[2] is a triangle
            // and then, vertex[0], vertex[1], vertex[2] 
            // and then, vertex[0], vertex[2], vertex[3]
            let vertex1 = this.vertices[i+1].getCoordinate();
            let vertex2 = this.vertices[i+2].getCoordinate();

            renderCoordinates.push(pivot);
            renderCoordinates.push(vertex1);
            renderCoordinates.push(vertex2);

        }
        return new Float32Array(renderCoordinates);
    }

    // getRenderColor() : Float32Array
    // Returns the render color of the polygon in GlRenderable format
    getRenderColor() {
        let renderColors = [];
        let pivot = this.vertices[0].getColor();
        for (let i = 0; i < this.vertices.length-2; i++) {
            let vertex1 = this.vertices[i+1].getColor();
            let vertex2 = this.vertices[i+2].getColor();

            renderColors.push(pivot);
            renderColors.push(vertex1);
            renderColors.push(vertex2);
        }
        return new Float32Array(renderColors);
    }

}