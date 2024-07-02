import { mat4, vec3 } from "gl-matrix";
import Shape from "./Shape";
export default class OBB extends Shape {
    private originalVertices;
    private originalNormals;
    private transformedVertices;
    private transformedNormals;
    private transformMatrix;
    private inverseMatrix;
    private verticesNeedsUpdate;
    private normalsNeedsUpdate;
    constructor();
    setVertices(vertices: Array<vec3>): void;
    setNormals(normals: Array<vec3>): void;
    /**
     * Creates an axis aligned bounding box (AABB).
     * @param minVec Corner for the lower bound.
     * @param maxVec Corner for the upper bound.
     */
    setMinAndMaxVectors(minVec: vec3, maxVec: vec3): void;
    setUpdateNeeded(): void;
    setTransformMatrix(matrix: mat4): void;
    setInverseMatrix(matrix: mat4): void;
    getTransformedVertices(): Array<vec3>;
    getTransformedNormals(): Array<vec3>;
    getTransformedEdges(): Array<vec3>;
    getTransformedEdgeNormals(): Array<vec3>;
    getTransformMatrix(): mat4;
}
