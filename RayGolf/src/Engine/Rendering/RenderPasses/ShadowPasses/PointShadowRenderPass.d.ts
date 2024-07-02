import Scene from "../../Scene";
export default class PointShadowRenderPass {
    private shadowResolution;
    constructor();
    setShadowMappingResolution(res: number): void;
    draw(scene: Scene): void;
}
