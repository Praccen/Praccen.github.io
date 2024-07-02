import Camera from "../../../Objects/Camera";
import Framebuffer from "../../Framebuffers/Framebuffer";
import Scene from "../../Scene";
export default class VolumetricGodRayPass {
    outputBuffer: Framebuffer;
    private godRayPlanes;
    constructor();
    private bindFramebuffers;
    draw(scene: Scene, camera: Camera): void;
}
