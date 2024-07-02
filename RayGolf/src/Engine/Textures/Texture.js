"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../../main");
class Texture {
    constructor(useMipMap = true, internalFormat = main_1.gl.RGBA, format = main_1.gl.RGBA, dataStorageType = main_1.gl.UNSIGNED_BYTE, textureTarget = main_1.gl.TEXTURE_2D) {
        // this.missingTextureData = new Uint8Array([
        //     255, 255, 255, 255, 0, 0, 0, 255,
        //     0, 0, 0, 255, 255, 255, 255, 255
        // ]);
        this.useMipMap = useMipMap;
        this.internalFormat = internalFormat;
        this.format = format;
        this.dataStorageType = dataStorageType;
        this.textureTarget = textureTarget;
        // Generate texture
        this.texture = main_1.gl.createTexture();
        main_1.gl.bindTexture(this.textureTarget, this.texture);
        // Set texture parameters
        main_1.gl.texParameteri(this.textureTarget, main_1.gl.TEXTURE_WRAP_S, main_1.gl.REPEAT);
        main_1.gl.texParameteri(this.textureTarget, main_1.gl.TEXTURE_WRAP_T, main_1.gl.REPEAT);
        main_1.gl.texParameteri(this.textureTarget, main_1.gl.TEXTURE_MIN_FILTER, main_1.gl.NEAREST);
        main_1.gl.texParameteri(this.textureTarget, main_1.gl.TEXTURE_MAG_FILTER, main_1.gl.NEAREST);
        main_1.gl.pixelStorei(main_1.gl.UNPACK_FLIP_Y_WEBGL, true);
        // Make a 1 by 1 empty texture
        this.setTextureData(null, 1, 1);
        main_1.gl.bindTexture(this.textureTarget, null);
    }
    setTextureData(data, width, height) {
        this.width = width;
        this.height = height;
        main_1.gl.bindTexture(this.textureTarget, this.texture);
        main_1.gl.texImage2D(this.textureTarget, 0, this.internalFormat, width, height, 0, this.format, this.dataStorageType, data);
        if (this.useMipMap) {
            main_1.gl.generateMipmap(this.textureTarget);
            main_1.gl.texParameteri(this.textureTarget, main_1.gl.TEXTURE_MIN_FILTER, main_1.gl.LINEAR_MIPMAP_LINEAR);
        }
        main_1.gl.bindTexture(this.textureTarget, null);
        this.loadedFromFile = false;
    }
    bind(textureIndex = 0) {
        main_1.gl.activeTexture(main_1.gl.TEXTURE0 + textureIndex);
        main_1.gl.bindTexture(this.textureTarget, this.texture);
    }
    loadFromFile(URL) {
        let image = new Image();
        image.crossOrigin = "";
        image.src = URL;
        let self = this;
        image.addEventListener("load", function () {
            // Now that the image has loaded copy it to the texture and save the width/height.
            self.width = image.width;
            self.height = image.height;
            main_1.gl.bindTexture(self.textureTarget, self.texture);
            main_1.gl.texImage2D(self.textureTarget, 0, self.internalFormat, self.format, self.dataStorageType, image);
            if (self.useMipMap) {
                main_1.gl.generateMipmap(self.textureTarget);
                main_1.gl.texParameteri(self.textureTarget, main_1.gl.TEXTURE_MIN_FILTER, main_1.gl.LINEAR_MIPMAP_LINEAR);
            }
            self.loadedFromFile = true;
        });
    }
    setTexParameterI(a, b) {
        main_1.gl.bindTexture(this.textureTarget, this.texture);
        main_1.gl.texParameteri(this.textureTarget, a, b);
        main_1.gl.bindTexture(this.textureTarget, null);
    }
}
exports.default = Texture;
// Texture::~Texture() {
// 	glDeleteTextures(1, &m_texture);
// }
//# sourceMappingURL=Texture.js.map