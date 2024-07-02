import CubeMap from "../Rendering/Textures/CubeMap";
import Texture from "../Rendering/Textures/Texture";
export default class TextureStore {
    private textures;
    private cubeMaps;
    constructor();
    setTexture(path: string, texture: Texture): void;
    getTexture(path: string): Texture;
    getCubeMap(path: string): CubeMap;
}
