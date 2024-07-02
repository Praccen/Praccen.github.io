import GraphicsObject from "./GraphicsObject";
import Texture from "../Rendering/Textures/Texture";
import ShaderProgram from "../Rendering/ShaderPrograms/ShaderProgram";
import { vec3 } from "gl-matrix";
export default class ParticleSpawner extends GraphicsObject {
    texture: Texture;
    fadePerSecond: number;
    sizeChangePerSecond: number;
    private numParticles;
    private vertices;
    private indices;
    private instanceVBO;
    constructor(shaderProgram: ShaderProgram, texture: Texture, numberOfStartingParticles?: number);
    setNumParticles(amount: number): void;
    getNumberOfParticles(): number;
    setParticleData(particleIndex: number, startPosition: vec3, size: number, startVel: vec3, acceleration: vec3): boolean;
    setParticleStartPosition(particleIndex: number, position: vec3): boolean;
    setParticleSize(particleIndex: number, size: number): boolean;
    setParticleStartVelocity(particleIndex: number, vel: vec3): boolean;
    setParticleStartTime(particleIndex: number, time: number): boolean;
    resetParticleStartTime(particleIndex: number): boolean;
    setParticleAcceleration(particleIndex: number, acc: vec3): boolean;
    private bufferSubDataUpdate;
    draw(): void;
}
