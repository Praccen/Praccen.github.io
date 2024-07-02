import { mat4, vec3 } from "gl-matrix";
import Triangle from "../Physics/Shapes/Triangle";
import ShaderProgram from "../Rendering/ShaderPrograms/ShaderProgram";
import Mesh from "./Mesh";
export default class Heightmap extends Mesh {
    imageData: Uint8ClampedArray;
    xResolution: number;
    zResolution: number;
    xQuadSize: number;
    zQuadSize: number;
    private indices;
    constructor(shaderProgram: ShaderProgram);
    setupTriangles(triangles: Array<Triangle>): void;
    private updateVertexData;
    private updateVertexHeight;
    private calculateVertexNormal;
    createPlane(xResolution: number, zResolution: number, xQuadSize: number, zQuadSize: number): void;
    /**
     *
     * @param texturePath - texture path / URL
     * @param createResolutionFromPixels - if the plane should be recreated using the resolution of the picture
     */
    readHeightDataFromTexture(texturePath: string, createResolutionFromPixels?: boolean): Promise<void>;
    getNormalFromWorldPosition(heightmapTransformMatrix: mat4, worldPosition: vec3, invertedTransformMatrix?: mat4): vec3;
    getHeightFromWorldPosition(heightmapTransformMatrix: mat4, worldPosition: vec3, invertedTransformMatrix?: mat4): number;
    getHeight(x: number, z: number): number;
    getNormal(x: number, z: number): vec3;
    getVertices(): Float32Array;
    draw(): void;
}
