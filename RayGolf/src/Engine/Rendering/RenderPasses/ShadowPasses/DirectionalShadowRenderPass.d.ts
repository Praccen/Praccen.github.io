import Framebuffer from "../../Framebuffers/Framebuffer";
import Scene from "../../Scene";
import Camera from "../../../Objects/Camera";
export default class DirectionalShadowRenderPass {
    private shadowResolution;
    private shadowOffset;
    shadowBuffer: Framebuffer;
    constructor();
    setShadowMappingResolution(res: number): void;
    draw(scene: Scene, camera: Camera): void;
}
