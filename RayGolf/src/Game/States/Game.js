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
const ECSManager_1 = require("../../Engine/ECS/ECSManager");
const GraphicsComponent_1 = require("../../Engine/ECS/Components/GraphicsComponent");
const PositionComponent_1 = require("../../Engine/ECS/Components/PositionComponent");
const CollisionComponent_1 = require("../../Engine/ECS/Components/CollisionComponent");
const BoundingBoxComponent_1 = require("../../Engine/ECS/Components/BoundingBoxComponent");
const State_1 = require("../../Engine/State");
const Rendering_1 = require("../../Engine/Rendering/Rendering");
const GameMachine_1 = require("../GameMachine");
const Player_1 = require("../Player");
const MeshCollisionComponent_1 = require("../../Engine/ECS/Components/MeshCollisionComponent");
const IntersectionTester_1 = require("../../Engine/Physics/IntersectionTester");
const OverlayRendering_1 = require("../../Engine/Rendering/OverlayRendering");
const main_1 = require("../../main");
const Scene_1 = require("../../Engine/Rendering/Scene");
const GrassHandler_1 = require("../GrassHandler");
const ObjectPlacer_1 = require("../ObjectPlacer");
const WebUtils_1 = require("../../Engine/Utils/WebUtils");
class Game extends State_1.default {
    static getInstance(sa) {
        if (!Game.instance) {
            Game.instance = new Game(sa);
        }
        return Game.instance;
    }
    static getInstanceNoSa() {
        return Game.instance;
    }
    constructor(sa) {
        super();
        this.stateAccessible = sa;
        this.objectPlacer = new ObjectPlacer_1.default(this.stateAccessible.meshStore);
        this.newspapersStopped = new Array();
        this.score = 0;
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            this.scene = new Scene_1.default(this.stateAccessible.textureStore, this.stateAccessible.meshStore);
            this.rendering = new Rendering_1.default(this.stateAccessible.textureStore, this.scene);
            this.ecsManager = new ECSManager_1.default(this.rendering);
            this.overlayRendering = new OverlayRendering_1.OverlayRendering(this.rendering.camera);
            this.createMapEntity();
            this.createSurroundingArea();
            let dirLight = this.scene.getDirectionalLight();
            dirLight.ambientMultiplier = 0.5;
            dirLight.direction.setValues(0.05, -0.4, -0.7);
            dirLight.colour.setValues(0.3, 0.25, 0.2);
            this.player = new Player_1.default(this.scene, this.rendering, this.ecsManager);
            this.grassHandler = new GrassHandler_1.default(this.scene, this.mapBundle, this.player);
            this.gameTimer = 0.0;
            this.score = 0;
            this.newspapersStopped.length = 0;
            this.menuButton = this.overlayRendering.getNewButton();
            this.menuButton.position.x = 0.9;
            this.menuButton.position.y = 0.0;
            this.menuButton.textSize = 40;
            this.menuButton.getInputElement().style.backgroundColor = "transparent";
            this.menuButton.getInputElement().style.borderColor = "transparent";
            this.menuButton.getInputElement().style.color = "white";
            this.menuButton.getInputElement().style.textShadow =
                "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
            this.menuButton.textString = "Menu";
            this.scoreText = this.overlayRendering.getNew2DText();
            this.scoreText.position.x = 0.05;
            this.scoreText.position.y = 0.1;
            this.scoreText.textString = "0";
            this.scoreText.getElement().style.color = "white";
            this.scoreText.getElement().style.textShadow =
                "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
            this.gameTimeText = this.overlayRendering.getNew2DText();
            this.gameTimeText.position.x = 0.05;
            this.gameTimeText.position.y = 0.05;
            this.gameTimeText.textString = "0";
            this.gameTimeText.getElement().style.color = "white";
            this.gameTimeText.getElement().style.textShadow =
                "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
            let self = this;
            this.menuButton.onClick(function () {
                self.gotoState = State_1.StatesEnum.MAINMENU;
            });
            this.rendering.setSkybox("Assets/textures/skyboxes/LordKitty");
            yield this.objectPlacer.load(this.scene, this.ecsManager);
            yield this.player.init();
        });
    }
    init() {
        const _super = Object.create(null, {
            init: { get: () => super.init }
        });
        return __awaiter(this, void 0, void 0, function* () {
            _super.init.call(this);
            if (this.stateAccessible.restartGame) {
                if (this.menuButton) {
                    this.menuButton.remove();
                }
                yield this.load();
                this.stateAccessible.restartGame = false;
            }
            this.overlayRendering.show();
            this.rendering.useCrt = GameMachine_1.options.useCrt;
            this.rendering.useBloom = GameMachine_1.options.useBloom;
            if (WebUtils_1.WebUtils.GetCookie("debug") == "true") {
                this.gotoState = State_1.StatesEnum.DEBUGMODE;
            }
            else {
                document.getElementById("gameDiv").requestPointerLock();
            }
        });
    }
    reset() {
        super.reset();
        if (this.overlayRendering) {
            this.overlayRendering.hide();
        }
        main_1.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        main_1.gl.clear(main_1.gl.COLOR_BUFFER_BIT);
        GameMachine_1.input.touchUsed = false;
        GameMachine_1.input.drawTouchControls();
    }
    onExit(e) {
        this.objectPlacer.onExit(e);
    }
    createMapEntity() {
        let texturePath = "Assets/heightmaps/heightmap.png";
        let texturePathColour = "Assets/textures/HeightmapTexture.png";
        let texturePathSpec = "Assets/textures/HeightmapTexture.png";
        let entity = this.ecsManager.createEntity();
        this.mapBundle = this.scene.getNewHeightMap(texturePath, texturePathColour, texturePathSpec);
        let heightmap = this.mapBundle.graphicsObject;
        let vertices = heightmap.getVertices();
        for (let i = 0; i < heightmap.xResolution * heightmap.zResolution; i++) {
            if (vertices[i * 8 + 4] > 0.999999999 && vertices[i * 8 + 1] > 0.001) {
                // Normal is pointing upwards and height is not 0 (ditches)
                // Set uvs to be tarmac
                vertices[i * 8 + 6] = 0.75;
            }
            else {
                // Set uvs to be grass
                vertices[i * 8 + 6] = 0.25;
            }
        }
        heightmap.setVertexData(vertices);
        this.ecsManager.addComponent(entity, new GraphicsComponent_1.default(this.mapBundle));
        let posComp = new PositionComponent_1.default();
        posComp.position.setValues(-10.0, -4.0, -10.0);
        posComp.scale.setValues(0.5, 2.0, 0.5);
        this.ecsManager.addComponent(entity, posComp);
        // Collision stuff
        let boundingBoxComp = new BoundingBoxComponent_1.default();
        boundingBoxComp.setup(this.mapBundle.graphicsObject);
        boundingBoxComp.updateTransformMatrix(this.mapBundle.modelMatrix);
        this.ecsManager.addComponent(entity, boundingBoxComp);
        let collisionComp = new CollisionComponent_1.default();
        collisionComp.isStatic = true;
        this.ecsManager.addComponent(entity, collisionComp);
        let meshColComp = new MeshCollisionComponent_1.default(this.stateAccessible.meshStore.getOctree("Assets/heightmaps/heightmap.png"));
        meshColComp.octree.setModelMatrix(this.mapBundle.modelMatrix);
        this.ecsManager.addComponent(entity, meshColComp);
        // Update the model matrix and mark the octree to be updated
        posComp.calculateMatrix(this.mapBundle.modelMatrix);
        meshColComp.octree.setModelMatrix();
    }
    createSurroundingArea() {
        let texturePath = "Assets/heightmaps/surroundingArea.png";
        let texturePathColour = "Assets/textures/HeightmapTexture.png";
        let texturePathSpec = "Assets/textures/HeightmapTexture.png";
        let entity = this.ecsManager.createEntity();
        let bundle = this.scene.getNewHeightMap(texturePath, texturePathColour, texturePathSpec);
        let heightmap = bundle.graphicsObject;
        let vertices = heightmap.getVertices();
        for (let i = 0; i < heightmap.xResolution * heightmap.zResolution; i++) {
            if (Math.pow((vertices[i * 8 + 1] * Math.random()), 2) > Math.pow(0.07, 2.0)) {
                // Set uvs to be tarmac
                vertices[i * 8 + 6] = 0.75;
            }
            else {
                // Set uvs to be grass
                vertices[i * 8 + 6] = 0.25;
            }
        }
        heightmap.setVertexData(vertices);
        this.ecsManager.addComponent(entity, new GraphicsComponent_1.default(bundle));
        let posComp = new PositionComponent_1.default();
        posComp.position.setValues(-160.0, -4.0, -160.0);
        posComp.scale.setValues(0.5, 80.0, 0.5);
        this.ecsManager.addComponent(entity, posComp);
        let walls = [
            [0, 40, -9.5],
            [90, 89.5, 40],
            [0, 40, 90],
            [90, -9.5, 40]
        ];
        for (let wall of walls) {
            let cubeEntity = this.ecsManager.createEntity();
            let cubeBundle = this.scene.getNewMesh("Assets/objs/cube.obj", "Assets/textures/Bricks.png", "Assets/textures/Bricks.png");
            this.ecsManager.addComponent(cubeEntity, new GraphicsComponent_1.default(cubeBundle));
            let cubePosComp = new PositionComponent_1.default();
            cubePosComp.scale.setValues(50.0, 3.0, 1.0);
            cubePosComp.rotation.setValues(0.0, wall[0], 0.0);
            cubePosComp.position.setValues(wall[1], -2.0, wall[2]);
            cubeBundle.textureMatrix.scale(50.0, 1.0, 1.0);
            this.ecsManager.addComponent(cubeEntity, cubePosComp);
            let cubeBoundingBoxComp = new BoundingBoxComponent_1.default();
            cubeBoundingBoxComp.setup(cubeBundle.graphicsObject);
            cubeBoundingBoxComp.updateTransformMatrix(cubeBundle.modelMatrix);
            this.ecsManager.addComponent(cubeEntity, cubeBoundingBoxComp);
            let collisionComp = new CollisionComponent_1.default();
            collisionComp.isStatic = true;
            this.ecsManager.addComponent(cubeEntity, collisionComp);
        }
    }
    doRayCast(ray) {
        let triangleArray = new Array();
        this.stateAccessible.meshStore
            .getOctree("Assets/heightmaps/heightmap.png")
            .getShapesForRayCast(ray, triangleArray);
        return IntersectionTester_1.IntersectionTester.doRayCast(ray, triangleArray);
    }
    update(dt) {
        this.player.update(dt);
        this.gameTimer += dt;
        if (this.score <= 0.0) {
            this.gotoState = State_1.StatesEnum.ENDSCREEN;
        }
        this.scoreText.textString = "Houses left: " + this.score.toString();
        this.gameTimeText.textString = Math.floor(this.gameTimer).toString();
        this.grassHandler.update(dt);
        // if (input.keys["P"]) {
        // 	this.player.respawn();
        // }
        // if (input.keys["O"]) {
        // 	this.gotoState = StatesEnum.DEBUGMODE;
        // 	WebUtils.SetCookie("debug", "true")
        // }
        this.ecsManager.update(dt);
    }
    prepareDraw(dt) {
        this.ecsManager.updateRenderingSystems(dt);
    }
    draw() {
        this.rendering.draw();
        this.overlayRendering.draw();
        GameMachine_1.input.drawTouchControls();
    }
}
exports.default = Game;
//# sourceMappingURL=Game.js.map