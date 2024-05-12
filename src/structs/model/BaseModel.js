// import Transform from "../math/Transform.js";

// export default class BaseModel {


//     // abstract readonly shape: ShapeEnum;

//     constructor(id) {
//         this.id = id;
//         this.transform = null;
//     }
//     /**
//      * 
//      * ABSTRACT METHOD
//      */
//     // public abstract setPosition(gl: WebGLRenderingContext): void;
//     // public abstract setColor(gl: WebGLRenderingContext): void;
//     // public abstract isNullVertex(): boolean;
//     // public abstract countVertex(): number;
//     // public abstract countRealVertex(): number;
//     // public abstract centroid(): [number, number];
//     // public abstract getGLType(gl: WebGLRenderingContext): number;
//     // public abstract setVertex(vertex: Vertex, index: number): void;
//     // public abstract changeColor(color: [number, number, number, number]): void;

//     setPosition(gl) {
//         throw new Error("Method not implemented.");
//     }

//     setColor(gl) {
//         throw new Error("Method not implemented.");
//     }

//     getCentroid() {
//         throw new Error("Method not implemented.");
//     }

//     isNullVertex() {
//         throw new Error("Method not implemented.");
//     }

//     countVertex() {
//         throw new Error("Method not implemented.");
//     }



//     positionProc(renderProps) {
//         let { gl, program, positionBuffer } = renderProps;
//         const positionLoc = gl.getAttribLocation(program, "a_position");
//         gl.enableVertexAttribArray(positionLoc);
//         gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
//         this.setPosition(gl);
//         gl.vertexAttribPointer(positionLoc, 3, gl.FLOAT, false, 0, 0);
//     }

//     colorProc(renderProps) {
//         let { gl, program, colorBuffer } = renderProps;
//         const colorLoc = gl.getAttribLocation(program, "a_color");
//         gl.enableVertexAttribArray(colorLoc);
//         gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
//         this.setColor(gl);
//         gl.vertexAttribPointer(colorLoc, 4, gl.FLOAT, false, 0, 0);
//     }

//     matrixProc(renderProps) {
//         let { gl, program } = renderProps;
//         const centroid = this.getCentroid();


        
//         const mat = this.transform.getProjectionMatrix();

//         const matrixLoc = gl.getUniformLocation(program, "u_matrix");
        
//         gl.uniformMatrix4fv(matrixLoc, false, mat.getInstance());
//     }

//     drawProc(renderProps) {
//         let { gl } = renderProps;
//         const primitive = gl.TRIANGLES;
//         const offset = 0;
//         const count = this.countVertex();

//         gl.drawArrays(primitive, offset, count);
//     }

//     /**
//      * 
//      * @param {*} r : renderProps
//      * @returns 
//      */
//     render(r) {
//         if (this.isNullVertex()) return;
//         const {gl, program, positionBuffer, colorBuffer} = r;
//         // Clear the canvas.
//         gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

//         // Turn on culling. By default backfacing triangles
//         // will be culled.
//         gl.enable(gl.CULL_FACE);

//         // Enable the depth buffer
//         gl.enable(gl.DEPTH_TEST);
//         gl.useProgram(program);
//         this.positionProc(r);
//         this.colorProc(r);
//         this.matrixProc(r);
//         this.drawProc(r);
//     }
// }