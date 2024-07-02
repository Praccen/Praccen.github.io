import ShaderProgram from "../ShaderProgram";
declare class VolumetricGodRaysShaderProgram extends ShaderProgram {
    constructor();
    setupVertexAttributePointers(): void;
}
export declare let volumetricGodRayShaderProgram: VolumetricGodRaysShaderProgram;
export declare let createVolumetricGodRayShaderProgram: () => void;
export {};
