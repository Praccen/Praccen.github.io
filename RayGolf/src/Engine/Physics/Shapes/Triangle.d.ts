import { mat4, vec3 } from "gl-matrix";
import Shape from "./Shape";
export default class Triangle extends Shape {
    private originalVertices;
    private originalNormal;
    private transformedVertices;
    private transformedNormals;
    private transformedEdges;
    private transformedEdgeNormals;
    private transformMatrix;
    private verticesNeedsUpdate;
    private normalNeedsUpdate;
    private edgesNeedsUpdate;
    private edgeNormalsNeedsUpdate;
    constructor();
    setVertices(vertex1: vec3, vertex2: vec3, vertex3: vec3): void;
    setUpdateNeeded(): void;
    setTransformMatrix(matrix: mat4): void;
    getOriginalVertices(): Array<vec3>;
    getTransformedVertices(): Array<vec3>;
    getTransformedNormals(): Array<vec3>;
    getTransformedEdges(): Array<vec3>;
    getTransformedEdgeNormals(): Array<vec3>;
}
