import { mat4, vec3 } from "gl-matrix";
import Shape from "./Shape";
export default class Particle extends Shape {
    private originalVertex;
    private transformedVertex;
    private transformMatrix;
    private needsUpdate;
    constructor();
    setVertex(vertex: vec3): void;
    setUpdateNeeded(): void;
    setTransformMatrix(matrix: mat4): void;
    getTransformedVertices(): Array<vec3>;
    getTransformedNormals(): Array<vec3>;
    getTransformedEdges(): Array<vec3>;
    getTransformedEdgeNormals(): Array<vec3>;
}
