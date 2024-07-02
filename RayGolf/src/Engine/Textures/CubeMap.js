"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../../main");
const Texture_1 = require("./Texture");
class CubeMap extends Texture_1.default {
    constructor(useMipMap = true, internalFormat = main_1.gl.RGBA, format = main_1.gl.RGBA, dataStorageType = main_1.gl.UNSIGNED_BYTE, textureTarget = main_1.gl.TEXTURE_CUBE_MAP) {
        super(useMipMap, internalFormat, format, dataStorageType, textureTarget);
        this.setTexParameterI(main_1.gl.TEXTURE_WRAP_R, main_1.gl.REPEAT);
        this.sidesLoaded = 0;
    }
    /**
     *
     * @param data - the data to set for the texture
     * @param width - width of the texture
     * @param height - height of the texture
     * @param face - cubemap face to set, leave empty to set data for all faces
     */
    setTextureData(data, width, height, face) {
        this.width = width;
        this.height = height;
        main_1.gl.bindTexture(this.textureTarget, this.texture);
        if (face == undefined) {
            // Face not specified, set the data for all sides
            for (let i = 0; i < 6; i++) {
                main_1.gl.texImage2D(main_1.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, this.internalFormat, this.width, this.height, 0, this.format, this.dataStorageType, data);
            }
        }
        else {
            // Face specified, set data for the specified face
            main_1.gl.texImage2D(face, 0, this.internalFormat, this.width, this.height, 0, this.format, this.dataStorageType, data);
        }
        // Unbind texture
        main_1.gl.bindTexture(this.textureTarget, null);
    }
    loadCubemap(URLs) {
        for (let i = 0; i < URLs.length; i++) {
            let image = new Image();
            image.crossOrigin = "";
            image.src = URLs[i];
            let self = this;
            image.addEventListener("load", function () {
                // Now that the image has loaded copy it to the texture and save the width/height.
                self.width = image.width;
                self.height = image.height;
                main_1.gl.bindTexture(self.textureTarget, self.texture);
                main_1.gl.texImage2D(main_1.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, self.internalFormat, self.format, self.dataStorageType, image);
                if (self.useMipMap) {
                    main_1.gl.generateMipmap(self.textureTarget);
                    main_1.gl.texParameteri(self.textureTarget, main_1.gl.TEXTURE_MIN_FILTER, main_1.gl.LINEAR_MIPMAP_LINEAR);
                }
                self.sidesLoaded++;
                if (self.sidesLoaded >= 6) {
                    self.loadedFromFile = true;
                }
            });
        }
    }
}
exports.default = CubeMap;
//# sourceMappingURL=CubeMap.js.map