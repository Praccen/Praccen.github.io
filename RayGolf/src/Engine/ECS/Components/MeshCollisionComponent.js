"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("./Component");
const Octree_1 = require("../../Objects/Octree");
const Vec3_1 = require("../../Maths/Vec3");
class MeshCollisionComponent extends Component_1.Component {
    constructor(octree, graphicsObject) {
        super(Component_1.ComponentTypeEnum.MESHCOLLISION);
        this.octree = octree;
        if (graphicsObject) {
            this.setup(graphicsObject, 0.1, 100);
        }
    }
    /**
     * Sets up the triangles based on the vertices in a graphics object
     * @param graphicsObj The graphics object
     */
    setup(graphicsObj, smallestNodeSizeMultiplicator, maxShapesPerNode) {
        let triangles = new Array();
        graphicsObj.setupTriangles(triangles);
        let minVec = new Vec3_1.default([Infinity, Infinity, Infinity]);
        let maxVec = new Vec3_1.default([-Infinity, -Infinity, -Infinity]);
        for (let tri of triangles) {
            for (let vertex of tri.getTransformedVertices()) {
                maxVec.max(vertex);
                minVec.min(vertex);
            }
        }
        this.octree = new Octree_1.default(minVec, maxVec, smallestNodeSizeMultiplicator, maxShapesPerNode);
        this.octree.addShapes(triangles);
        this.octree.prune();
    }
}
exports.default = MeshCollisionComponent;
//# sourceMappingURL=MeshCollisionComponent.js.map