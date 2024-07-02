import CubeMap from "../Textures/CubeMap";
import Camera from "../../Objects/Camera";
export default class SkyboxRenderPass {
    private skybox;
    constructor();
    setSkybox(cubemap: CubeMap): void;
    draw(camera: Camera): void;
}
