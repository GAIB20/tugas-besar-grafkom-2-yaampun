import Mat4 from "../structs/math/mat4";
import { degToRad, radToDeg } from "../structs/math/mathUtils";
import DummyModel from "../structs/model/DummyModel";
import HollowHandler from "./ModelHandler/HollowHandler";

export default class DrawHandler{

    constructor(
        gl,
        program,
        document,

    ){
        this.gl = gl;
        this.program = program;
        this.document = document;
        this.renderProps = {
          gl: this.gl,
          program: this.program,
          positionBuffer: this.gl.createBuffer(),
          colorBuffer: this.gl.createBuffer(),
          document: this.document,
        }
        this.currentModel = new DummyModel(0, this.renderProps);
        this.hollowHandler = new HollowHandler(this.renderProps, this.currentModel);

        this.dummyInit()
        this.document.addEventListener("DOMContentLoaded", this.rerender)

    }

  dummyInit(){
    

        this.drawScene()
  }

  // Draw the scene.
  drawScene() {


    // lookup uniforms
    this.currentModel.render(this.renderProps);
  }

  rerender = () => {
    this.currentModel.render(this.renderProps);
    
    window.requestAnimationFrame(this.rerender)
  }

}