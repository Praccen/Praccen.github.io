"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.windowInfo = exports.applicationStartTime = exports.gl = void 0;
const SAT_1 = require("./Engine/Maths/SAT");
const GameMachine_1 = require("./Game/GameMachine");
const GeometryPass_1 = require("./Engine/ShaderPrograms/DeferredRendering/GeometryPass");
const LightingPass_1 = require("./Engine/ShaderPrograms/DeferredRendering/LightingPass");
const ParticleShaderProgram_1 = require("./Engine/ShaderPrograms/ParticleShaderProgram");
const GrassShaderProgram_1 = require("./Engine/ShaderPrograms/GrassShaderProgram");
const PhongShaderProgram_1 = require("./Engine/ShaderPrograms/PhongShaderProgram");
const BloomBlending_1 = require("./Engine/ShaderPrograms/PostProcessing/BloomBlending");
const BloomExtraction_1 = require("./Engine/ShaderPrograms/PostProcessing/BloomExtraction");
const CrtShaderProgram_1 = require("./Engine/ShaderPrograms/PostProcessing/CrtShaderProgram");
const GaussianBlur_1 = require("./Engine/ShaderPrograms/PostProcessing/GaussianBlur");
const ScreenQuadShaderProgram_1 = require("./Engine/ShaderPrograms/ScreenQuadShaderProgram");
const ShadowPass_1 = require("./Engine/ShaderPrograms/ShadowMapping/ShadowPass");
const SimpleShaderProgram_1 = require("./Engine/ShaderPrograms/SimpleShaderProgram");
const GrassShadowPass_1 = require("./Engine/ShaderPrograms/ShadowMapping/GrassShadowPass");
const SkyboxShaderProgram_1 = require("./Engine/ShaderPrograms/Skybox/SkyboxShaderProgram");
SAT_1.SAT.runUnitTests();
exports.applicationStartTime = Date.now();
exports.windowInfo = {
    resolutionWidth: 1920,
    resolutionHeight: 1080,
    paddingX: 0,
    paddingY: 0,
};
function initWebGL() {
    let canvas = document.getElementById("gameCanvas");
    canvas.width = exports.windowInfo.resolutionWidth;
    canvas.height = exports.windowInfo.resolutionHeight;
    let tempGl = canvas.getContext("webgl2", { antialias: false });
    if (!tempGl.getExtension("EXT_color_buffer_float")) {
        alert("Rendering to floating point textures is not supported on this platform");
    }
    if (!tempGl.getExtension("OES_texture_float_linear")) {
        alert("Floating point rendering to FBO textures not supported");
    }
    if (!tempGl) {
        console.log("Failed to get rendering context for WebGL");
        return;
    }
    return tempGl;
}
const heightByWidth = 9 / 16;
const widthByHeight = 16 / 9;
const gameDiv = document.getElementById("gameDiv");
function resize(gl) {
    // Get the dimensions of the viewport
    let innerWindowSize = {
        width: window.innerWidth,
        height: window.innerHeight,
    };
    let newGameHeight;
    let newGameWidth;
    // Determine game size
    if (heightByWidth > innerWindowSize.height / innerWindowSize.width) {
        newGameHeight = innerWindowSize.height;
        newGameWidth = newGameHeight * widthByHeight;
    }
    else {
        newGameWidth = innerWindowSize.width;
        newGameHeight = newGameWidth * heightByWidth;
    }
    let newGameX = (innerWindowSize.width - newGameWidth) / 2;
    let newGameY = (innerWindowSize.height - newGameHeight) / 2;
    // Center the game by setting the padding of the game
    gameDiv.style.padding = newGameY + "px " + newGameX + "px";
    // Resize game
    gameDiv.style.width = newGameWidth + "px";
    gameDiv.style.height = newGameHeight + "px";
    gl.canvas.width = newGameWidth; // This is not the same as style.width, so it won't be inherited by the css inherit property
    gl.canvas.height = newGameHeight; // This is not the same as style.height, so it won't be inherited by the css inherit property
    // Update the windowInfo resolution
    exports.windowInfo.resolutionWidth = newGameWidth;
    exports.windowInfo.resolutionHeight = newGameHeight;
    exports.windowInfo.paddingX = newGameX;
    exports.windowInfo.paddingY = newGameY;
}
function createShaders() {
    (0, GeometryPass_1.createGeometryPass)();
    (0, LightingPass_1.createLightingPass)();
    (0, BloomBlending_1.createBloomBlending)();
    (0, BloomExtraction_1.createBloomExtraction)();
    (0, CrtShaderProgram_1.createCrtShaderProgram)();
    (0, GaussianBlur_1.createGaussianBlur)();
    (0, ShadowPass_1.createShadowPass)();
    (0, GrassShadowPass_1.createGrassShadowPass)();
    (0, ParticleShaderProgram_1.createParticleShaderProgram)();
    (0, GrassShaderProgram_1.createGrassShaderProgram)();
    (0, PhongShaderProgram_1.createPhongShaderProgram)();
    (0, ScreenQuadShaderProgram_1.createScreenQuadShaderProgram)();
    (0, SimpleShaderProgram_1.createSimpleShaderProgram)();
    (0, SkyboxShaderProgram_1.createSkyboxShaderProgram)();
}
let gameMachine;
/* main */
window.onload = () => __awaiter(void 0, void 0, void 0, function* () {
    "use strict";
    // Set up webgl
    exports.gl = initWebGL();
    // Create all shaders
    createShaders();
    gameMachine = new GameMachine_1.default();
    // Resize to fit the current window
    resize(exports.gl);
    // Resize canvas in the future when window is resized
    window.addEventListener("resize", function () {
        resize(exports.gl);
    });
    window.addEventListener("beforeunload", function (e) {
        gameMachine.onExit(e);
    });
    // Start the state machine
    gameMachine.start();
});
//# sourceMappingURL=main.js.map