"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vec3_1 = require("../../Maths/Vec3");
const OBB_1 = require("../../Physics/Shapes/OBB");
const Component_1 = require("./Component");
class BoundingBoxComponent extends Component_1.Component {
    constructor() {
        super(Component_1.ComponentTypeEnum.BOUNDINGBOX);
        this.boundingBox = new OBB_1.default();
    }
    /**
     * Sets up the bounding box based on the vertices in a graphics object
     * @param graphicsObj The graphics object
     */
    setup(graphicsObj) {
        let minVec = new Vec3_1.default([Infinity, Infinity, Infinity]);
        let maxVec = new Vec3_1.default([-Infinity, -Infinity, -Infinity]);
        let vertices = graphicsObj.getVertexPositions();
        for (let vertex of vertices) {
            maxVec.max(vertex);
            minVec.min(vertex);
        }
        this.boundingBox.setMinAndMaxVectors(minVec, maxVec);
    }
    /**
     * Update the transform matrix used for the bounding box
     * @param matrix Optional: Will set a new matrix to use for the bounding box. If no matrix is sent, it will use the previously set matrix but mark the box to be updated.
     */
    updateTransformMatrix(matrix) {
        if (matrix) {
            this.boundingBox.setTransformMatrix(matrix);
        }
        else {
            this.boundingBox.setUpdateNeeded();
        }
    }
}
exports.default = BoundingBoxComponent;
//# sourceMappingURL=BoundingBoxComponent.js.map