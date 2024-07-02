import { vec3 } from "gl-matrix";
import OBB from "../Physics/Shapes/OBB";
import Ray from "../Physics/Shapes/Ray";
import Shape from "../Physics/Shapes/Shape";
declare class TreeNode {
    obb: OBB;
    size: number;
    position: vec3;
    children: Array<TreeNode>;
    content: Array<Shape>;
    constructor(size: number, position: vec3);
    /**
     * Create 8 child nodes
     * @returns if new children was created. Will be false if there already exists children for this node or the sizes of the children would be smaller than minNodeSize.
     */
    private createChildren;
    private checkIfContains;
    subdivideTree(minNodeSize: number): void;
    addShape(shape: Shape, minNodeSize: number, maxShapesPerNode: number): void;
    prune(): void;
    getShapesForCollision(boundingBox: OBB, shapeArray: Array<Shape>): void;
    getShapesForContinousCollision(boundingBox: OBB, velocity1: vec3, velocity2: vec3, shapeArray: Array<Shape>, maxTime?: number): void;
    getShapesForRayCast(ray: Ray, shapeArray: Array<Shape>, maxDistance?: number): void;
    print(): string;
}
export default class Octree {
    baseNode: TreeNode;
    minNodeSize: number;
    maxShapesPerNode: number;
    constructor(minVec: vec3, maxVec: vec3, smallestNodeSizeMultiplicator: number, maxShapesPerNode: number);
    addShape(shape: Shape): void;
    addShapes(shapes: Array<Shape>): void;
    prune(): void;
    getShapesForCollision(boundingBox: OBB, shapeArray: Array<Shape>): void;
    getShapesForContinousCollision(boundingBox: OBB, velocity1: vec3, velocity2: vec3, shapeArray: Array<Shape>, maxTime?: number): void;
    getShapesForRayCast(ray: Ray, shapeArray: Array<Shape>, maxDistance?: number): void;
    getDataString(): string;
    parseOct(input: string): void;
}
export {};
