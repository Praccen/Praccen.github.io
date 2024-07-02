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
const State_1 = require("../../Engine/State");
const OverlayRendering_1 = require("../../Engine/Rendering/OverlayRendering");
class LoadingScreen extends State_1.default {
    constructor(sa) {
        super();
        this.overlayRendering = new OverlayRendering_1.OverlayRendering();
        this.sa = sa;
        // Crate GUI
        this.text = this.overlayRendering.getNew2DText();
        this.text.center = true;
        this.text.position.x = 0.5;
        this.text.position.y = 0.4;
        this.text.size = 50;
        this.statusText = "Loading assets ";
        this.progressBar = this.overlayRendering.getNewProgress();
        this.progressBar.center = true;
        this.progressBar.position.x = 0.5;
        this.progressBar.position.y = 0.5;
        this.progressBar.size = 50;
        this.progressBar.getProgressElement().style.borderRadius = "4px";
        this.progressBar.getProgressElement().max = 1.0;
        this.progressBar.getProgressElement().value = 0.0;
        this.progress = 0;
        this.timer = 0;
    }
    init() {
        const _super = Object.create(null, {
            init: { get: () => super.init }
        });
        return __awaiter(this, void 0, void 0, function* () {
            _super.init.call(this);
            this.overlayRendering.show();
            this.overlayRendering.draw();
            // Load all textures to avoid loading mid game
            let textures = [
                "Assets/textures/AimingBlob.png",
                "Assets/textures/fire.png",
                "Assets/textures/knight.png",
                "Assets/textures/black.png",
                "Assets/textures/white.png",
                "Assets/textures/GrassStraw.png",
                "Assets/textures/GrassStraw_Spec.png",
                "Assets/textures/HeightmapTexture.png",
                "Assets/textures/houseTex.png",
                "Assets/textures/houseTex_bright.png",
                "Assets/textures/DZ.png",
                "Assets/textures/BushTexture.png",
                "Assets/textures/Solros.png",
                "Assets/textures/AimingBlob.png",
                "Assets/textures/LeafTexture.png",
                "Assets/textures/mailbox.png",
                "Assets/textures/news.png",
                "Assets/textures/Bricks.png",
                "Assets/textures/tree_1.png",
                "Assets/textures/tree_2.png",
                "Assets/textures/tree_3.png",
            ];
            let cubeMaps = [
                "Assets/textures/skyboxes/LordKitty",
            ];
            // Meshes to load
            let meshes = [
                "Assets/objs/house.obj",
                "Assets/objs/mailbox.obj",
                "Assets/objs/newspaper.obj",
                "Assets/objs/fence.obj",
                "Assets/objs/BigBuske.obj",
                "Assets/objs/Solros.obj",
                "Assets/objs/Plant.obj",
                "Assets/objs/SmolBuske.obj",
                "Assets/objs/tree_1.obj",
                "Assets/objs/tree_2.obj",
                "Assets/objs/tree_3.obj",
                "Assets/objs/DeliveryZone.obj",
                "Assets/objs/cube.obj",
            ];
            this.meshesRequested = meshes.length;
            this.meshesLoaded = 0;
            // Heightmaps to load
            let heightmaps = [
                ["Assets/heightmaps/heightmap.png", 200, 200, 1.0, 1.0],
                ["Assets/heightmaps/surroundingArea.png", 400, 400, 2.0, 2.0],
            ];
            this.heightmapsRequested = heightmaps.length;
            this.heightmapsLoaded = 0;
            // Octrees to create
            this.octreesToLoad = [
                ["Assets/heightmaps/heightmap.png", 0.01, 10],
                ["Assets/objs/house.obj", 0.1, 20],
                ["Assets/objs/mailbox.obj", 0.1, 20],
                ["Assets/objs/BigBuske.obj", 0.1, 20],
                ["Assets/objs/Solros.obj", 0.1, 20],
                ["Assets/objs/SmolBuske.obj", 0.1, 20],
                ["Assets/objs/tree_1.obj", 0.1, 20],
                ["Assets/objs/tree_2.obj", 0.1, 20],
                ["Assets/objs/tree_3.obj", 0.1, 20],
            ];
            this.octreesRequested = this.octreesToLoad.length;
            this.octreesLoaded = 0;
            this.texturesToLoad = new Array();
            for (const texFile of textures) {
                this.texturesToLoad.push(this.sa.textureStore.getTexture(texFile));
            }
            for (const cubeMapFile of cubeMaps) {
                this.texturesToLoad.push(this.sa.textureStore.getCubeMap(cubeMapFile));
            }
            // Load meshes
            for (const meshFile of meshes) {
                this.sa.meshStore.loadMesh(meshFile).then(() => {
                    this.meshesLoaded++;
                });
            }
            // Load heightmaps
            for (const heightmapInfo of heightmaps) {
                if (heightmapInfo.length == 5) {
                    this.sa.meshStore
                        .loadHeightmap(heightmapInfo[0], false, heightmapInfo[1], heightmapInfo[2], heightmapInfo[3], heightmapInfo[4])
                        .then(() => {
                        this.heightmapsLoaded++;
                    });
                }
                else {
                    this.sa.meshStore.loadHeightmap(heightmapInfo[0]).then(() => {
                        this.heightmapsLoaded++;
                    });
                }
            }
        });
    }
    reset() {
        super.reset();
        this.overlayRendering.hide();
    }
    update(dt) {
        let requestedAssets = this.texturesToLoad.length +
            this.meshesRequested +
            this.heightmapsRequested +
            this.octreesRequested;
        let texturesLoaded = 0;
        for (let tex of this.texturesToLoad) {
            if (tex.loadedFromFile) {
                texturesLoaded++;
            }
        }
        let loadedAssets = texturesLoaded +
            this.meshesLoaded +
            this.heightmapsLoaded +
            this.octreesLoaded;
        // When all meshes and heightmaps have been loaded, we can start processing octrees
        if (this.meshesLoaded == this.meshesRequested &&
            this.heightmapsLoaded == this.heightmapsRequested &&
            this.octreesToLoad.length > 0) {
            this.statusText = "Generating octrees ";
            let i = this.octreesToLoad.length - 1;
            let octreeToLoad = this.octreesToLoad[i];
            this.sa.meshStore
                .loadOctree(octreeToLoad[0], octreeToLoad[1], octreeToLoad[2], 10 /*Give a 10 ms deadline*/)
                .then((value) => {
                if (value.doneLoading) {
                    if (this.octreesToLoad[this.octreesToLoad.length - 1][0] ==
                        octreeToLoad[0]) {
                        this.octreesToLoad.pop(); // Done loading, remove it from the queue
                        this.octreesLoaded++; // And increase the number of octrees loaded
                    }
                }
            });
        }
        this.timer += dt;
        this.progress = loadedAssets / requestedAssets;
        this.progressBar.getProgressElement().value = this.progress;
        this.text.textString = this.statusText;
        for (let i = 4; i > 1; i--) {
            if (this.timer - Math.floor(this.timer) > 1.0 / i) {
                this.text.textString += "-";
            }
            else {
                this.text.textString += "_";
            }
        }
        this.text.textString += "  " + Math.ceil(this.progress * 100) + "%";
        if (this.progress >= 1.0 && this.timer >= 0.5) {
            this.gotoState = State_1.StatesEnum.MAINMENU;
        }
    }
    draw() {
        this.overlayRendering.draw();
    }
}
exports.default = LoadingScreen;
//# sourceMappingURL=LoadingScreen.js.map