import GraphicsObject from "./GraphicsObject";
import ShaderProgram from "../../Rendering/ShaderPrograms/ShaderProgram";
import { vec3 } from "gl-matrix";
export default class GrassSpawner extends GraphicsObject {
    private numGrassStraws;
    private vertices;
    private instanceVBO;
    constructor(shaderProgram: ShaderProgram, numberOfStartingGrassStraws?: number);
    setNumGrassStraws(amount: number): void;
    getNumberOfGrassStraws(): number;
    setGrassStrawData(particleIndex: number, startPosition: vec3, size: number, tipOffset: vec3): boolean;
    setGrassStrawPosition(particleIndex: number, position: vec3): boolean;
    setGrassStrawSize(particleIndex: number, size: number): boolean;
    setGrassTipOffset(particleIndex: number, offset: vec3): boolean;
    bufferSubDataUpdate(start: number, data: Float32Array): boolean;
    draw(): void;
}
