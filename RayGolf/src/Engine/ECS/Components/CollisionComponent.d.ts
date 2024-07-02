import { Component } from "./Component";
export default class CollisionComponent extends Component {
    /**
     * True if this object never moves
     */
    isStatic: boolean;
    /**
     * True if this object is not effected by collisions
     */
    isImmovable: boolean;
    /**
     * True if this should rotate based on collisions
     */
    isDynamic: boolean;
    collisionCoefficient: number;
    frictionCoefficient: number;
    mass: number;
    constructor();
}
