import System from "./System";
import { vec3 } from "gl-matrix";
export default class CollisionSystem extends System {
    lastCollisionPoint: vec3;
    constructor();
    update(dt: number): void;
}
