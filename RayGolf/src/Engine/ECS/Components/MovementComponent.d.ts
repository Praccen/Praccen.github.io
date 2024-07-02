import { quat, vec3 } from "gl-matrix";
import { Component } from "./Component";
export default class MovementComponent extends Component {
    constantAcceleration: vec3;
    accelerationDirection: vec3;
    acceleration: number;
    velocity: vec3;
    drag: number;
    onGround: boolean;
    jumpPower: number;
    jumpRequested: boolean;
    jumpAllowed: boolean;
    momentum: quat;
    constructor();
}
