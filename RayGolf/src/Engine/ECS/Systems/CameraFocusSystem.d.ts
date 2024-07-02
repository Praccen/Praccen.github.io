import System from "./System";
import Camera from "../../Objects/Camera";
export default class CameraFocusSystem extends System {
    camera: Camera;
    constructor(camera: Camera);
    update(dt: number): void;
}
