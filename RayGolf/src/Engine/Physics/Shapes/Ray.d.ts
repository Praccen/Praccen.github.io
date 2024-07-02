import Shape from "./Shape";
import { ReadonlyVec3, mat4, vec3 } from "gl-matrix";
export default class Ray extends Shape {
    private start;
    private dir;
    private inverseMatrix;
    constructor();
    setStart(start: vec3): void;
    setDir(dir: vec3): void;
    getDir(): vec3;
    setStartAndDir(start: ReadonlyVec3, dir: ReadonlyVec3): void;
    setInverseMatrix(matrix: mat4): void;
    getTransformedVertices(): Array<vec3>;
    getTransformedNormals(): Array<vec3>;
    getTransformedEdges(): Array<vec3>;
    getTransformedEdgeNormals(): Array<vec3>;
}
