import { mat4, vec3, ReadonlyVec3, quat, mat3, vec2 } from 'gl-matrix';
export { mat3, mat4, quat, vec2, vec3 } from 'gl-matrix';

declare class Camera {
    private pos;
    private dir;
    private up;
    private fov;
    private ratio;
    private farPlaneDistance;
    private viewMatrixNeedsUpdate;
    private projMatrixNeedsUpdate;
    private viewMatrix;
    private projectionMatrix;
    private viewProjMatrix;
    constructor();
    getViewProjMatrix(): mat4;
    getViewMatrix(): mat4;
    getProjectionMatrix(): mat4;
    getFov(): number;
    getPosition(): vec3;
    getDir(): ReadonlyVec3;
    getRight(): vec3;
    setPosition(pos: ReadonlyVec3): void;
    translate(translation: ReadonlyVec3): void;
    setDir(dir: vec3): void;
    setUp(up: vec3): void;
    setPitchJawDegrees(pitch: number, jaw: number): void;
    setPitchJawRadians(pitch: number, jaw: number): void;
    setFOV(fov: number): void;
    setAspectRatio(ratio: number): void;
    setFarPlaneDistance(distance: number): void;
    private updateViewProjMatrix;
    bindViewProjMatrix(uniformLocation: WebGLUniformLocation, skybox?: boolean): void;
}

declare class ShaderProgram {
    protected shaderProgram: WebGLProgram;
    protected uniformBindings: Map<string, WebGLUniformLocation>;
    constructor(shaderProgramName: string, vertexShaderName: string, fragmentShaderName: string, debugShaderCompilation?: boolean);
    loadShaders(shaderProgramName: string, vertexShaderString: string, fragmentShaderString: string, debugShaderCompilation: boolean): void;
    use(): void;
    setupVertexAttributePointers(): void;
    setupInstancedVertexAttributePointers(): void;
    setUniformLocation(uniformName: string): void;
    getUniformLocation(uniformName: string): [WebGLUniformLocation, boolean];
}

declare class DirectionalLight {
    direction: vec3;
    colour: vec3;
    ambientMultiplier: number;
    lightProjectionBoxSideLength: number;
    constructor();
    bind(shaderProgram: ShaderProgram): void;
    calcAndSendLightSpaceMatrix(focusPos: vec3, offset: number, uniformLocation: WebGLUniformLocation): void;
}

declare class Texture {
    width: number;
    height: number;
    texture: WebGLTexture;
    loadedFromFile: boolean;
    protected useMipMap: boolean;
    protected internalFormat: number;
    protected format: number;
    protected dataStorageType: number;
    textureTarget: number;
    constructor(useMipMap?: boolean, internalFormat?: number, format?: number, dataStorageType?: number, textureTarget?: number);
    setTextureData(data: Uint8Array, width: number, height: number): void;
    bind(textureIndex?: number): void;
    loadFromFile(URL: string): void;
    createFromCSSColorValue(colorValue: string): void;
    setTexParameterI(a: number, b: number): void;
}

declare class CubeMap extends Texture {
    private sidesLoaded;
    constructor(useMipMap?: boolean, internalFormat?: number, format?: number, dataStorageType?: number, textureTarget?: number);
    /**
     *
     * @param data - the data to set for the texture
     * @param width - width of the texture
     * @param height - height of the texture
     * @param face - cubemap face to set, leave empty to set data for all faces
     */
    setTextureData(data: Uint8Array, width: number, height: number, face?: number): void;
    loadCubemap(URLs: [string, string, string, string, string, string]): void;
}

declare class Framebuffer {
    textures: Array<Texture>;
    depthTexture: Texture;
    protected rbo: WebGLRenderbuffer;
    protected fbo: WebGLFramebuffer;
    protected width: number;
    protected height: number;
    /**
     * @param width - width of framebuffer textures
     * @param height - height of framebuffer textures
     * @param textures - colour attachment textures, send empty array if no colour attachments should be used
     * @param depthTexture - depth attachment texture, send null if no depth attachment (an rbo will be created instead)
     */
    constructor(width: number, height: number, textures: Array<Texture>, depthTexture: Texture);
    protected setupAttachments(): void;
    /**
     * Will setup the framebuffer to the given width and height, including resizing (and clearing) all textures (both normal render textures and depth texture)
     * For cubemaps all sides will be cleared and resized
     * @param width New width of the framebuffer
     * @param height New height of the framebuffer
     */
    setProportions(width: number, height: number): void;
    getWidth(): number;
    getHeight(): number;
    /**
     * Bind this framebuffer to the sent in target
     * @param target framebuffer target (for example gl.FRAMEBUFFER, gl.DRAW_FRAMEBUFFER, gl.READ_FRAMEBUFFER)
     */
    bind(target: number): void;
}

declare class PointLight {
    position: vec3;
    colour: vec3;
    constant: number;
    linear: number;
    quadratic: number;
    castShadow: boolean;
    pointShadowBuffer: Framebuffer;
    pointShadowDepthMap: CubeMap;
    constructor();
    bind(lightIndex: number, depthMapIndex: number, shaderProgram: ShaderProgram): void;
}

declare class GraphicsObject {
    shaderProgram: ShaderProgram;
    private VAO;
    private VBO;
    private EBO;
    constructor(shaderProgram: ShaderProgram);
    init(): void;
    bindVAO(): void;
    unbindVAO(): void;
    setVertexData(data: Float32Array): void;
    setIndexData(data: Int32Array): void;
    getVertexPositions(): Array<vec3>;
    draw(): void;
}

/**
 * A utility class that can store position, rotation, scle, and origin.
 * It has a function "calculateMatrix", which takes a matrix, and will update the matrix with the member variables
 */
declare class Transform {
    parentTransform: Transform;
    position: vec3;
    rotation: quat;
    scale: vec3;
    origin: vec3;
    matrix: mat4;
    normalMatrix: mat3;
    constructor();
    translate(translation: vec3): void;
    setTranslation(translation: vec3): void;
    calculateMatrices(matrix?: mat4, normalMatrix?: mat3, identityMatrixFirst?: boolean): void;
}

declare class GraphicsBundle {
    transform: Transform;
    textureMatrix: mat4;
    diffuse: Texture;
    specular: Texture;
    emission: Texture;
    emissionColor: vec3;
    graphicsObject: GraphicsObject;
    enabled: boolean;
    constructor(diffuse: Texture, specular: Texture, graphicsObject: GraphicsObject, emissionMap?: Texture);
    draw(bindSpecialTextures?: boolean): void;
}

declare class ParticleSpawner extends GraphicsObject {
    texture: Texture;
    fadePerSecond: number;
    sizeChangePerSecond: number;
    lifeTime: number;
    private numParticles;
    private vertices;
    private indices;
    private instanceVBO;
    constructor(shaderProgram: ShaderProgram, texture: Texture, numberOfStartingParticles?: number);
    setNumParticles(amount: number): void;
    getNumberOfParticles(): number;
    setParticleData(particleIndex: number, startPosition: vec3, size: number, startVel: vec3, acceleration: vec3, startTime?: number): boolean;
    setParticleStartPosition(particleIndex: number, position: vec3): boolean;
    setParticleSize(particleIndex: number, size: number): boolean;
    setParticleStartVelocity(particleIndex: number, vel: vec3): boolean;
    setParticleStartTime(particleIndex: number, time: number): boolean;
    resetParticleStartTime(particleIndex: number): boolean;
    setParticleAcceleration(particleIndex: number, acc: vec3): boolean;
    private bufferSubDataUpdate;
    draw(): void;
}

declare class Scene {
    private graphicBundles;
    particleSpawners: Array<ParticleSpawner>;
    directionalLight: DirectionalLight;
    pointLights: Array<PointLight>;
    constructor();
    addNewMesh(meshPath: string, diffusePath: string, specularPath: string): Promise<GraphicsBundle>;
    addNewParticleSpawner(texturePath: string, numberOfStartingParticles?: number): ParticleSpawner;
    addNewPointLight(): PointLight;
    getDirectionalLight(): DirectionalLight;
    deleteGraphicsBundle(object: GraphicsBundle): void;
    deletePointLight(light: PointLight): void;
    calculateAllTransforms(): void;
    renderScene(shaderProgram: ShaderProgram, bindSpecialTextures?: boolean): void;
}

declare class Renderer {
    clearColour: {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    domElement: HTMLCanvasElement;
    private width;
    private height;
    private directionalShadowRenderPass;
    private pointShadowRenderPass;
    private geometryRenderPass;
    private lightingRenderPass;
    private useSkybox;
    private skyboxRenderPass;
    private particleRenderPass;
    private volumetricLightingPass;
    useVolumetric: boolean;
    private finishedFramebuffer;
    private finishedOutputRenderPass;
    constructor();
    initGL(): void;
    private createShaders;
    setSize(x: number, y: number, updateStyle?: boolean): void;
    setSkybox(path?: string): void;
    setFogDensity(density: number): void;
    private takeScreenshot;
    render(scene: Scene, camera: Camera, saveScreenshot?: boolean, screenshotName?: string): void;
}

declare class TextureStore {
    private textures;
    private cubeMaps;
    constructor();
    setTexture(path: string, texture: Texture): void;
    getTexture(path: string): Texture;
    getCubeMap(path: string): CubeMap;
}

declare class MeshStore {
    private meshMap;
    private heightmapMap;
    private textureStore;
    constructor(textureStore: TextureStore);
    /**
     * This function will load all meshes in paths. Invalid paths will result in an error in the console, but won't break functionality.
     * @param paths Array of strings containing the paths to load
     * @param progress Object with member loaded which will reflect how many meshes has currently been loaded
     * @returns Promise<void> that resolves when all meshes has been loaded
     */
    loadMeshes(paths: Array<string>, progress: {
        loaded: number;
    }): Promise<void>;
    getMesh(shaderProgram: ShaderProgram, path: string): Promise<GraphicsObject>;
    private parseObjContent;
}

declare class GuiObject {
    protected position2D: vec2;
    protected fontSize: number;
    scaleWithWindow: boolean;
    textString: string;
    center: boolean;
    ignoreEngineModifiers: boolean;
    removed: boolean;
    private domElement;
    protected div: HTMLDivElement;
    readonly hasParent: boolean;
    constructor(domElement: HTMLDivElement, parentDiv?: Div);
    getElement(): HTMLDivElement;
    getHidden(): boolean;
    setHidden(hidden: boolean): void;
    toggleHidden(): boolean;
    remove(): void;
    protected drawObject(): void;
    draw(): void;
}

declare class Div extends GuiObject {
    position: vec2;
    size: number;
    children: Array<GuiObject>;
    constructor(domElement: HTMLDivElement, parentDiv?: Div);
    appendChild(childObj: GuiObject): void;
    draw(): void;
}

declare class Button extends GuiObject {
    position: vec2;
    textSize: number;
    private inputNode;
    private onClickFunction;
    constructor(domElement: HTMLDivElement, parentDiv?: Div);
    getElement(): HTMLDivElement;
    getInputElement(): HTMLButtonElement;
    onClick(fn: any): void;
    remove(): void;
    draw(): void;
}

declare class Checkbox extends GuiObject {
    position: vec2;
    textSize: number;
    private inputNode;
    private label;
    constructor(domElement: HTMLDivElement, parentDiv?: Div);
    getElement(): HTMLDivElement;
    getInputElement(): HTMLInputElement;
    getChecked(): boolean;
    draw(): void;
}

declare class Progress extends GuiObject {
    position: vec2;
    size: number;
    private progressNode;
    constructor(domElement: HTMLDivElement, parentDiv?: Div);
    getProgressElement(): HTMLProgressElement;
    draw(): void;
}

declare class Slider extends GuiObject {
    position: vec2;
    textSize: number;
    private inputNode;
    private label;
    constructor(domElement: HTMLDivElement, parentDiv?: Div);
    getElement(): HTMLDivElement;
    getInputElement(): HTMLInputElement;
    getValue(): number;
    draw(): void;
}

declare class EditText extends GuiObject {
    position: vec2;
    textSize: number;
    private inputNode;
    private label;
    private onChangeFn;
    constructor(domElement: HTMLDivElement, parentDiv?: Div);
    getElement(): HTMLDivElement;
    getInputElement(): HTMLInputElement;
    onChange(fn: any): void;
    remove(): void;
    draw(): void;
}

declare class TextObject2D extends GuiObject {
    position: vec2;
    size: number;
    constructor(domElement: HTMLDivElement, parentDiv?: Div);
    draw(): void;
}

declare class TextObject3D extends GuiObject {
    position: vec3;
    size: number;
    scaleFontWithDistance: boolean;
    private hidden;
    constructor(domElement: HTMLDivElement);
    setHidden(hidden: boolean): void;
    draw3D(viewProj: mat4): void;
}

declare class GUIRenderer {
    private guiObjects3D;
    private guiObjects2D;
    domElement: HTMLDivElement;
    constructor();
    setSize(width: number, height: number): void;
    clear(): void;
    hide(): void;
    show(): void;
    getNew3DText(): TextObject3D;
    getNew2DText(parentDiv?: Div): TextObject2D;
    getNewCheckbox(parentDiv?: Div): Checkbox;
    getNewButton(parentDiv?: Div): Button;
    getNewSlider(parentDiv?: Div): Slider;
    getNewEditText(parentDiv?: Div): EditText;
    getNewProgress(parentDiv?: Div): Progress;
    getNewDiv(parentDiv?: Div): Div;
    draw(camera: Camera): void;
}

declare class Shape {
    margin: number;
    constructor();
    setUpdateNeeded(): void;
    setTransformMatrix(matrix: mat4): void;
    getOriginalVertices(): Array<vec3>;
    getTransformedVertices(): Array<vec3>;
    getTransformedNormals(): Array<vec3>;
    getTransformedEdges(): Array<vec3>;
    getTransformedEdgeNormals(): Array<vec3>;
}

declare class OBB extends Shape {
    private originalVertices;
    private originalNormals;
    private transformedVertices;
    private transformedNormals;
    private transformMatrix;
    private inverseMatrix;
    private verticesNeedsUpdate;
    private normalsNeedsUpdate;
    constructor();
    setVertices(vertices: Array<vec3>): void;
    setNormals(normals: Array<vec3>): void;
    /**
     * Creates an axis aligned bounding box (AABB).
     * @param minVec Corner for the lower bound.
     * @param maxVec Corner for the upper bound.
     */
    setMinAndMaxVectors(minVec: vec3, maxVec: vec3): void;
    setMinAndMaxFromPointArray(pointArray: Array<vec3>): void;
    setUpdateNeeded(): void;
    setTransformMatrix(matrix: mat4): void;
    setInverseMatrix(matrix: mat4): void;
    getTransformedVertices(): Array<vec3>;
    getTransformedNormals(): Array<vec3>;
    getTransformedEdges(): Array<vec3>;
    getTransformedEdgeNormals(): Array<vec3>;
    getTransformMatrix(): mat4;
}

declare class PhysicsObject {
    mass: number;
    frictionCoefficient: number;
    collisionCoefficient: number;
    velocity: vec3;
    impulse: vec3;
    force: vec3;
    /**
     * True if this object never moves
     */
    isStatic: boolean;
    /**
     * True if this object is not effected by collisions (but could potentially effect other objects through collision)
     */
    isImmovable: boolean;
    /**
     * True if it's possible to collide with this object
     */
    isCollidable: boolean;
    onGround: boolean;
    boundingBox: OBB;
    transform: Transform;
    constructor(transform?: Transform);
}

declare class Ray extends Shape {
    private start;
    private dir;
    private inverseMatrix;
    constructor();
    setStart(start: ReadonlyVec3): void;
    setDir(dir: ReadonlyVec3): void;
    getDir(): ReadonlyVec3;
    setStartAndDir(start: ReadonlyVec3, dir: ReadonlyVec3): void;
    setInverseMatrix(matrix: mat4): void;
    getTransformedVertices(): Array<vec3>;
    getTransformedNormals(): Array<vec3>;
    getTransformedEdges(): Array<vec3>;
    getTransformedEdgeNormals(): Array<vec3>;
}

declare class PhysicsScene {
    gravity: vec3;
    physicsObjects: Array<PhysicsObject>;
    constructor();
    /**
     * Will add a physics object to the PhysicsScene. Will create a new object if none is passed as a parameter.
     * @param physicsObject Optional: Already existing physics object, maybe from another physics scene
     * @returns the physics object
     */
    addNewPhysicsObject(transform?: Transform, physicsObject?: PhysicsObject): PhysicsObject;
    doRayCast(ray: Ray, maxDistance?: number): number;
    update(dt: number): void;
}

declare module MousePicking {
    function GetRay(camera: Camera, mouseNDC: vec2): Ray;
}

declare let applicationStartTime: number;
declare let textureStore: TextureStore;
declare let meshStore: MeshStore;

export { Camera, GUIRenderer, GraphicsBundle, MousePicking, PhysicsObject, PhysicsScene, Ray, Renderer, Scene, Transform, applicationStartTime, meshStore, textureStore };
