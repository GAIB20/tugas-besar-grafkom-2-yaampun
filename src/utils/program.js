export default function createProgram(
    gl,
    vertexShader,
    fragmentShader
){
    const program = gl.createProgram();

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);

    gl.linkProgram(program);

    const success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!success) {
        gl.deleteProgram(program);

        throw Error("Failed to compile shader!");
    }

    return program;
}
