"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntersectionTester = void 0;
const SAT_1 = require("../Maths/SAT");
const Vec3_1 = require("../Maths/Vec3");
const IntersectionInformation_1 = require("./IntersectionInformation");
var IntersectionTester;
(function (IntersectionTester) {
    /**
     * Will check if there is an intersection between two meshes.
     * @param shapeArrayA List of shapes in physical object A.
     * @param shapeArrayB List of shapes in physical object B.
     * @returns if there is an intersection.
     */
    function identifyIntersection(shapeArrayA, shapeArrayB) {
        let intersectionAxis = new Vec3_1.default();
        let intersectionDepth = { depth: Infinity };
        for (let shapeA of shapeArrayA) {
            for (let shapeB of shapeArrayB) {
                if (SAT_1.SAT.getIntersection3D(shapeA, shapeB, intersectionAxis, intersectionDepth)) {
                    return true;
                }
            }
        }
        return false;
    }
    IntersectionTester.identifyIntersection = identifyIntersection;
    /**
     * Finds the intersection information (axises, depths, and points) between two physical objects, if they intersect
     * @param shapeArrayA List of shapes in physical object A.
     * @param shapeArrayB List of shapes in physical object B.
     * @param intersectionInformation An array that gets filled with information about all intersections happening between the two objects.
     * @returns If there is an intersection.
     */
    function identifyIntersectionInformation(shapeArrayA, shapeArrayB, intersectionInformation) {
        let intersecting = false;
        let tempIntersectionAxis = new Vec3_1.default();
        let tempIntersectionDepth = { depth: Infinity };
        for (let shapeA of shapeArrayA) {
            for (let shapeB of shapeArrayB) {
                if (SAT_1.SAT.getIntersection3D(shapeA, shapeB, tempIntersectionAxis, tempIntersectionDepth)) {
                    intersecting = true;
                    // Save information about intersection
                    intersectionInformation.push(new IntersectionInformation_1.default(tempIntersectionAxis, tempIntersectionDepth.depth, SAT_1.SAT.getIntersectionPoint(shapeA, shapeB, tempIntersectionAxis), shapeA, shapeB));
                }
            }
        }
        return intersecting;
    }
    IntersectionTester.identifyIntersectionInformation = identifyIntersectionInformation;
    /**
     * Finds the closest ray cast hit between a ray and an array of shapes
     * @param ray Ray shape
     * @param shapeArray shape array to cast against
     * @param maxDistance The furthest allowed hit
     * @param breakOnFirstHit If the first hit should be returned immediately
     * @returns the closest hit
     */
    function doRayCast(ray, shapeArray, maxDistance = Infinity, breakOnFirstHit = false) {
        let closestHit = -1.0;
        for (const shape of shapeArray) {
            let dist = SAT_1.SAT.getContinousIntersection3D(ray, shape, ray.getDir(), new Vec3_1.default([0.0, 0.0, 0.0]), maxDistance);
            if (dist >= 0.0 && (dist < closestHit || closestHit < 0)) {
                closestHit = dist;
                maxDistance = closestHit;
                if (breakOnFirstHit) {
                    return closestHit;
                }
            }
        }
        return closestHit;
    }
    IntersectionTester.doRayCast = doRayCast;
})(IntersectionTester = exports.IntersectionTester || (exports.IntersectionTester = {}));
//# sourceMappingURL=IntersectionTester.js.map