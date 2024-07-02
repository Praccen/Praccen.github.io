"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CollisionSystem_1 = require("./Systems/CollisionSystem");
const MovementSystem_1 = require("./Systems/MovementSystem");
const GraphicsSystem_1 = require("./Systems/GraphicsSystem");
const ParticleSpawnerSystem_1 = require("./Systems/ParticleSpawnerSystem");
const Entity_1 = require("./Entity");
const CameraFocusSystem_1 = require("./Systems/CameraFocusSystem");
const PositionMatrixUpdateSystem_1 = require("./Systems/PositionMatrixUpdateSystem");
const DeliveryZoneSystem_1 = require("../../Game/ECS/Systems/DeliveryZoneSystem");
class ECSManager {
    constructor(rendering) {
        this.camera = rendering.camera;
        this.rendering = rendering;
        this.systems = new Map();
        this.entityCounter = 0;
        this.entities = new Array();
        this.entityAdditionQueue = new Array();
        this.entityDeletionQueue = new Array();
        this.componentAdditionQueue = new Array();
        this.componentRemovalQueue = new Array();
        this.initializeSystems();
    }
    initializeSystems() {
        this.systems.set("COLLISION", new CollisionSystem_1.default());
        this.systems.set("MOVEMENT", new MovementSystem_1.default());
        this.systems.set("POSITIONMATRIXUPDATE", new PositionMatrixUpdateSystem_1.default());
        this.systems.set("GRAPHICS", new GraphicsSystem_1.default());
        this.systems.set("PARTICLE", new ParticleSpawnerSystem_1.default());
        this.systems.set("CAMERAFOCUS", new CameraFocusSystem_1.default(this.rendering.camera));
        this.systems.set("DELIVERY", new DeliveryZoneSystem_1.default());
    }
    update(dt) {
        // Add new entities
        this.addQueuedEntities();
        // For all entities, remove/add components
        // Remove/add entities from systems
        this.addQueuedComponents();
        this.removeComponents();
        this.removeEntitiesMarkedForDeletion();
        this.systems.get("MOVEMENT").update(dt);
        this.systems.get("POSITIONMATRIXUPDATE").update(dt);
        this.systems.get("GRAPHICS").update(dt);
        this.systems.get("COLLISION").update(dt);
        this.systems.get("DELIVERY").update(dt);
    }
    updateRenderingSystems(dt) {
        this.systems.get("PARTICLE").update(dt);
        this.systems.get("CAMERAFOCUS").update(dt);
    }
    createEntity() {
        const length = this.entityAdditionQueue.push(new Entity_1.default(this.entityCounter++));
        return this.entityAdditionQueue[length - 1];
    }
    addComponent(entity, component) {
        this.componentAdditionQueue.push({ entity, component });
    }
    removeEntity(entityID) {
        this.entityDeletionQueue.push(entityID);
    }
    removeComponent(entity, componentType) {
        this.componentRemovalQueue.push({ entity, componentType });
    }
    getEntity(entityID) {
        for (const entity of this.entities) {
            if (entity.id == entityID) {
                return entity;
            }
        }
        return null;
    }
    getSystem(type) {
        return this.systems.get(type);
    }
    // Private
    addQueuedEntities() {
        for (const newEntity of this.entityAdditionQueue) {
            // Add to manager
            const length = this.entities.push(newEntity);
            // Add to systems
            for (let system of this.systems) {
                system[1].addEntity(this.entities[length - 1]);
            }
        }
        // Empty queue
        this.entityAdditionQueue.length = 0;
    }
    addQueuedComponents() {
        for (const compEntityPair of this.componentAdditionQueue) {
            // If enitity does not already have component, proceed
            if (compEntityPair.entity.addComponent(compEntityPair.component)) {
                for (let system of this.systems) {
                    // If entity is not already belonging to the system, try and add it
                    if (!system[1].containsEntity(compEntityPair.entity.id)) {
                        system[1].addEntity(compEntityPair.entity);
                    }
                }
            }
        }
        // Empty queue
        this.componentAdditionQueue.length = 0;
    }
    removeEntitiesMarkedForDeletion() {
        for (let i of this.entityDeletionQueue) {
            // Delete in systems
            for (let system of this.systems) {
                system[1].removeEntity(i);
            }
            // Delete in manager
            let index = this.entities.findIndex((e) => e.id == this.entityDeletionQueue[i]);
            if (index != -1) {
                this.entities.splice(index, 1);
            }
        }
        // Empty queue
        this.entityDeletionQueue.length = 0;
    }
    removeComponents() {
        for (const compEntityPair of this.componentRemovalQueue) {
            // Remove component from entity
            compEntityPair.entity.removeComponent(compEntityPair.componentType);
            // Remove entity from system if it no longer lives up to the requirements of being in the system
            for (let system of this.systems) {
                system[1].removeFaultyEntity(compEntityPair.entity.id);
            }
        }
        // Empty queue
        this.componentRemovalQueue.length = 0;
    }
}
exports.default = ECSManager;
//# sourceMappingURL=ECSManager.js.map