import { mat4 } from "gl-matrix";
export default class SpriteMap {
    nrOfSprites: {
        x: number;
        y: number;
    };
    currentSprite: {
        x: number;
        y: number;
    };
    constructor();
    updateTextureMatrix(matrix: mat4): void;
    setNrOfSprites(x: number, y: number): void;
    setCurrentSprite(x: number, y: number): void;
    advanceSpriteBy(x: number, y: number): void;
}
