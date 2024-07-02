import { vec3 } from "gl-matrix";
import ShaderProgram from "../ShaderPrograms/ShaderProgram";
import CubeMap from "../Textures/CubeMap";
import Framebuffer from "../Framebuffers/Framebuffer";
export default class PointLight {
    position: vec3;
    colour: vec3;
    constant: number;
    linear: number;
    quadratic: number;
    castShadow: boolean;
    pointShadowBuffer: Framebuffer;
    pointShadowDepthMap: CubeMap;
    constructor();
    bind(lightIndex: number, depthMapIndex: number, shaderProgram: ShaderProgram): void;
}
