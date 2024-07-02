import { vec3 } from "gl-matrix";
import Entity from "../ECS/Entity";
import { IntersectionTester } from "./IntersectionTester";
export declare module CollisionSolver {
    function getTranslationNeeded(intersectionInformation: Array<IntersectionTester.IntersectionInformation>): vec3;
    function handleCollision(intersectionInformation: Array<IntersectionTester.IntersectionInformation>, e1: Entity, e2: Entity): void;
}
