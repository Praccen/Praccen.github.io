import { ReadonlyVec3, vec3 } from "gl-matrix";
import Entity from "../ECS/Entity";
import { IntersectionTester } from "../Physics/IntersectionTester";
import Ray from "../Physics/Shapes/Ray";
export declare module ECSUtils {
    /**
     * Calculates the position given all position effecting components (like PositionComponent, PositionParentComponent)
     * @param entity The entity for which to calculate the position
     * @returns The final position
     */
    function CalculatePosition(entity: Entity): vec3;
    /**
     * Raycasts against a list of entities
     * @param ray Ray shape
     * @param entities Array of entities to test against
     * @returns Object with distance and entity ID of the closest hit
     */
    function RayCastAgainstEntityList(ray: Ray, entities: Array<Entity>): {
        distance: number;
        eId: number;
    };
    /**
     * Calculates when an entity (A) will collide with any of the entities in array "entities", if they remain on the same course and velocity (this will not take acceleration into account, so this needs to be recalculated if any forces/accelerations are applied to any involved entity)
     * @param entityA Entity A
     * @param entityAVel The velocity of Entity A
     * @param entities The other entities to test collision time against
     * @param max A cap of how far into the future this function will detect a collision
     * @param allow0Collision If collisions happening right now should be included in the test
     * @returns Object with time for collision, entity ID for which entity the collision will be with, and an intersecton vector with the normal of the surface entity will collide with.
     */
    function CalculateCollisionTime(entityA: Entity, entityAVel: ReadonlyVec3, entities: Array<Entity>, max: number, allow0Collision?: boolean): {
        time: number;
        eId: number;
        intersectionVec: vec3;
    };
    /**
     * Assumes intersection, finds the smallest overlap
     * @param entityA entityA
     * @param entityB entityB
     * @returns Intersection information array, all intersections will point from EntityB to EntityA
     */
    function GetIntersectionInformation(entityA: Entity, entityB: Entity): Array<IntersectionTester.IntersectionInformation>;
}
