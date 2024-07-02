"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CubeMap_1 = require("../Textures/CubeMap");
const Texture_1 = require("../Textures/Texture");
class TextureStore {
    constructor() {
        this.textures = new Map();
        this.cubeMaps = new Map();
    }
    getTexture(path) {
        let tex = this.textures.get(path);
        if (tex) {
            return tex;
        }
        let newTexture = new Texture_1.default();
        newTexture.loadFromFile(path);
        this.textures.set(path, newTexture);
        return newTexture;
    }
    getCubeMap(path) {
        let cubeMap = this.cubeMaps.get(path);
        if (cubeMap) {
            return cubeMap;
        }
        let newCubeMap = new CubeMap_1.default();
        newCubeMap.loadCubemap([
            path + "/right.png",
            path + "/left.png",
            path + "/bottom.png",
            path + "/top.png",
            path + "/front.png",
            path + "/back.png",
        ]);
        this.cubeMaps.set(path, newCubeMap);
        return newCubeMap;
    }
}
exports.default = TextureStore;
//# sourceMappingURL=TextureStore.js.map