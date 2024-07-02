"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollisionSolver = void 0;
const Vec3_1 = require("../Maths/Vec3");
var CollisionSolver;
(function (CollisionSolver) {
    function getTranslationNeeded(intersectionInformation) {
        if (intersectionInformation.length == 0) {
            return new Vec3_1.default();
        }
        // Displace along the axis which has the most depth
        let resultingVec = new Vec3_1.default();
        let maxDepth = 0.0;
        for (let inf of intersectionInformation) {
            // Only displace for triangles if it is along the normal
            if (inf.shapeB.getTransformedNormals().length == 1) {
                if (inf.axis.dot(inf.shapeB.getTransformedNormals()[0]) < 0.99) {
                    continue;
                }
            }
            if (inf.depth > maxDepth) {
                resultingVec.deepAssign(inf.axis);
                maxDepth = inf.depth;
            }
        }
        resultingVec.multiply(maxDepth);
        return resultingVec;
    }
    CollisionSolver.getTranslationNeeded = getTranslationNeeded;
})(CollisionSolver = exports.CollisionSolver || (exports.CollisionSolver = {}));
//# sourceMappingURL=CollisionSolver.js.map