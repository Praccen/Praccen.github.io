import Camera from "../../../Objects/Camera";
import Framebuffer from "../../Framebuffers/Framebuffer";
import Scene from "../../Scene";
export default class GeometryRenderPass {
    outputFramebuffer: Framebuffer;
    constructor();
    setResolution(x: number, y: number): void;
    draw(scene: Scene, camera: Camera): void;
}
