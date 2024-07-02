import { mat4, vec3 } from "gl-matrix";
export default class Shape {
    margin: number;
    constructor();
    setUpdateNeeded(): void;
    setTransformMatrix(matrix: mat4): void;
    getOriginalVertices(): Array<vec3>;
    getTransformedVertices(): Array<vec3>;
    getTransformedNormals(): Array<vec3>;
    getTransformedEdges(): Array<vec3>;
    getTransformedEdgeNormals(): Array<vec3>;
}
