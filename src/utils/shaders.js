export default function createShader(
    gl,
    type,
    source
) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!success) {
        gl.deleteShader(shader);

        throw Error("Failed to compile shader!");
    }

    return shader;
}
