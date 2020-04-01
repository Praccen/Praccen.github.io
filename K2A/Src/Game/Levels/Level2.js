class Level2 {
	constructor(gl, camera, input, character, physics, audioPlayer, texturesRequestedVsLoaded) {
		this.gl = gl;
		this.character = character;
		this.physics = physics;
		this.input = input;
		this.camera = camera;
		this.audioPlayer = audioPlayer;
        this.texturesRequestedVsLoaded = texturesRequestedVsLoaded;

		this.physicalObjects = [];
		this.backgroundObjects = [];
		this.foregroundObjects = [];
		this.invisibleWalls = [];
		this.logs = [];
		this.logsOnConveyor = [];

		this.bounds = {
			start: 23.2,
			end: 55.0
		}

		this.populateScene();

		this.houseBuildingTimer = 0.0;
		this.buildingHouse = false;

		this.factoryAnimationTimer = 0.0;
		this.factoryAnimationFrame = 0;

		this.factoryMiniGame = false;
		this.factoryMiniGameTimer = 0.0;
		this.factoryMiniGameScore = 0;
		this.carryLogId = -1;
		this.carryCooldown = 0;

		this.producingHouse = false;
	}

	populateScene() {
		var clouds = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		clouds.setSize((this.bounds.end - this.bounds.start - 1.8) * 0.9, 6.0);
		clouds.setPosition(this.bounds.start, -1.3, -3.0);
		clouds.setTexture("Assets/Textures/Green/Clouds.png");

		var background = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		background.setSize(this.bounds.end - this.bounds.start - 1.8, 6.0);
		background.setPosition(this.bounds.start, -1.3, -2.0);
		background.setTexture("Assets/Textures/Green/Background.png");

		var ground = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		ground.setBoundingBox(this.bounds.end - this.bounds.start - 1.8, 1.0, 0.0, 0.0);
		ground.setPosition(this.bounds.start, -1.0, -1.0);

		this.backgroundObjects.push(clouds);
		this.backgroundObjects.push(background);

		this.invisibleWalls.push(ground);

		var foreground = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		foreground.setSize(this.bounds.end - this.bounds.start - 1.8, 6.0);
		foreground.setPosition(this.bounds.start, -1.3, -2.0);
		foreground.setTexture("Assets/Textures/Green/Foreground.png");

		this.foregroundObjects.push(foreground);

		var bobil = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		bobil.setSize(4.5, 2.25);
		bobil.setPosition(this.bounds.start + 9.3, -0.4, -0.3);
		bobil.setTexture("Assets/Textures/Green/Objects/Bobil.png");
		bobil.setBoundingBox(1.5, 1.3, 1.5, 0.0);
		this.physicalObjects.push(bobil);

		var bobilHoodBB = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		bobilHoodBB.setBoundingBox(1.1, 0.8, 0.0, 0.0);
		bobilHoodBB.setPosition(this.bounds.start + 12.3, -0.4, -0.3);
		this.physicalObjects.push(bobilHoodBB);

		var conveyors = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		conveyors.setTexture("Assets/Textures/Green/Buildings/Conveyors.png");
		conveyors.setSize(4.42, 3.0);
		conveyors.setPosition(this.bounds.start + 22.2, 0.2, -0.5);
		conveyors.setUV(0.0, 0.0, 1.0, 0.5);
		this.backgroundObjects.push(conveyors);

		this.singleCloud = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		this.singleCloud.setTexture("Assets/Textures/Green/Objects/SingleCloud.png");
		this.singleCloud.setSize(4.5, 1.5);
		this.singleCloud.setPosition(this.bounds.start + 4.25, 2.5, -0.1);

		this.rainParticles = new Particles(this.gl);
		this.rainParticles.setTexture("Assets/Textures/Green/Objects/RainDrop.png");
		this.rainParticles.particleSize = 0.05;
		this.rainParticles.useSpawnTimer = true;
		this.rainParticles.spawnRate = 0.05;
		this.rainParticles.particleLimit = 12;
		this.rainParticles.spread.x = 15.0;
		this.rainParticles.spread.y = 1.0;
		this.rainParticles.direction.y = -0.5;
		this.rainParticles.gravity = 7.0;
		this.rainParticles.retardation = 60.0;
		this.rainParticles.setPosition(0.0, 0.0, -0.2);
		this.rainParticles.setSpawnPosition(this.bounds.start + 6.5, 3.5);

		this.houseFactory = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		this.houseFactory.setTexture("Assets/Textures/Green/Buildings/HouseFactory.png");
		this.houseFactory.setSize(4.42, 3.0);
		this.houseFactory.setPosition(conveyors.position.x, 0.2, -0.2);
		this.houseFactory.setUV(0.0, 0.0, 1.0, 1.0);

		this.houseFromFactory = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		this.houseFromFactory.setTexture("Assets/Textures/Green/Buildings/WoodenHouse4.png");
		this.houseFromFactory.setSize(0.5, 0.5);
		this.houseFromFactory.setPosition(this.houseFactory.position.x + 3.0, 2.03, -0.3);
		this.houseFromFactory.retardation = 3.0;
		this.backgroundObjects.push(this.houseFromFactory);
        
        this.sapling = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		this.sapling.setSize(0.3, 0.6);
        this.sapling.setTexture("Assets/Textures/Green/Objects/Sapling.png");
        this.sapling.setPosition(0.0, -5.0, 0.5);
        
		this.foregroundObjects.push(this.sapling);

		this.saplingParticles = new Particles(this.gl);
		this.saplingParticles.setTexture("Assets/Textures/Green/Objects/Bush.png");
		this.saplingParticles.particleSize = 0.03;
		this.saplingParticles.useSpawnTimer = false;
		this.saplingParticles.spawnRate = 0.05;
		this.saplingParticles.particleLimit = 50;
		this.saplingParticles.spread.x = 0.3;
		this.saplingParticles.spread.y = 0.3;
		this.saplingParticles.gravity = 0.0;
		this.saplingParticles.retardation = 0.0;
		this.saplingParticles.setPosition(0.0, 0.0, 0.6);

		this.scoreCounter = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		this.scoreCounter.setTexture("Assets/Textures/ScoreCounter.png");
		this.scoreCounter.setUV(0.0, 0.0, 1.0, 0.16667);
		this.scoreCounter.setPosition(this.houseFactory.position.x - 0.1, this.houseFactory.position.y + 1.0, 0.8);
		this.scoreCounter.setSize(0.51, 0.36);

		for (var i = 0; i < 8; i++) {
			var log = new GameObject(this.gl, this.texturesRequestedVsLoaded);
			log.setTexture("Assets/Textures/Green/Objects/Log.png");
			log.setSize(0.7, 0.35);
			log.setBoundingBox(0.5, 0.25, 0.1, 0.05);
			log.retardation = 0.0;
            this.logs.push(log);
		}
	}

	update(dt) {
		for (var i = 0; i < this.physicalObjects.length; i++) {
			this.physics.solveCollision(this.character.gameObject, this.physicalObjects[i], true, false);
		}
		for (var i = 0; i < this.invisibleWalls.length; i++) {
			this.physics.solveCollision(this.character.gameObject, this.invisibleWalls[i], true, false);
		}

		//Update animation for factory
		this.factoryAnimationTimer += dt;
		if (this.factoryAnimationTimer > 0.1) {
			this.factoryAnimationTimer = 0.0;
			this.factoryAnimationFrame = (this.factoryAnimationFrame + 1) % 2;
			this.backgroundObjects[2].setUV(0.0, this.factoryAnimationFrame * 0.5 + 0.001, 1.0, (this.factoryAnimationFrame + 1) * 0.5);
		}

		//Wood collection mini game
		if (this.factoryMiniGame) {
			this.factoryMiniGameTimer += dt;
			this.carryCooldown -= dt;

			if (this.character.gameObject.position.x > this.houseFactory.position.x + 1.0) {
				this.character.gameObject.getMovementBlock().xPos = true;
			}

			if (this.factoryMiniGameTimer > 0.75) {
				var log;

				if (this.carryLogId != 0) {
					log = this.logs[0];
					this.logs.splice(0, 1);
					if (this.carryLogId > 0) {
						this.carryLogId--;
					}
				} else {
					log = this.logs[1];
					this.logs.splice(1, 1);
				}

				log.setPosition(this.houseFactory.position.x - 5.5 + Math.random() * 2.0, 2.2, -0.3);
				log.setMovement((Math.random() - 0.3) * 4.0, 2.2 + Math.random() * 2.0);
				this.logs.push(log);
				this.factoryMiniGameTimer = 0.0;

				this.saplingParticles.setSpawnPosition(log.position.x + 0.35, 2.2);
				this.saplingParticles.direction = log.getMovement();
				this.saplingParticles.gravity = 9.82;
				this.saplingParticles.useSpawnTimer = false;
				this.saplingParticles.spawnParticles(20);

				this.audioPlayer.setTime("wood", 0.2);
				this.audioPlayer.playSound("wood", false);
			}

			for (var i = 0; i < this.logs.length; i++) {
				if (this.physics.solveCollision(this.character.gameObject, this.logs[i], false, false)) {
					if (this.carryLogId == -1 && this.carryCooldown < 0.0) { //Catch log if empty handed and no cooldown
						this.carryLogId = i;
					} else if (this.carryLogId != -1 && this.carryLogId != i) { //Knock log out of hands if hit while carrying
						this.character.blink(1.0);
						this.carryCooldown = 1.0;
						this.carryLogId = -1;
					}
				}

				if (i == this.carryLogId) { //Carry log
					this.logs[i].setPosition(this.character.gameObject.position.x + 0.3, this.character.gameObject.position.y + 1.0, -0.3);
				} else { //Flying log - update physics
					this.logs[i].updatePhysics(dt);
				}
			}

			if (this.character.gameObject.position.x > this.houseFactory.position.x - 0.5 && this.carryLogId != -1) {
				this.factoryMiniGameScore++;
				this.scoreCounter.setUV(0.0, this.factoryMiniGameScore * 0.16667, 1.0, (this.factoryMiniGameScore + 1) * 0.16667);
				this.audioPlayer.setTime("smallAchievement", 0.1);
				this.audioPlayer.playSound("smallAchievement", false);
				this.logs[this.carryLogId].setPosition(this.houseFactory.position.x, 0.3, -0.3);
				this.logsOnConveyor.push(this.logs[this.carryLogId]);
				this.logs.splice(this.carryLogId, 1);
				this.carryLogId = -1;
				//this.carryCooldown = 0.0;
			}

			if (this.factoryMiniGameScore == 5.0) {
				this.factoryMiniGame = false;
				this.camera.setMaxPositions(this.houseFactory.position.x - 1.495, 100);
				this.audioPlayer.playSound("achievement", false);
			}
		}

		//Update position of logs on conveyor
		for (var i = 0; i < this.logsOnConveyor.length; i++) {
			if (this.logsOnConveyor[i].position.y < 1.1) {
				this.logsOnConveyor[i].setPosition(this.houseFactory.position.x, this.logsOnConveyor[i].position.y + 0.5 * dt, -0.3);
				this.logsOnConveyor[i].setSize(this.logsOnConveyor[i].size.x - 0.07 * dt, this.logsOnConveyor[i].size.y - 0.07 * dt)
			} else if (this.logsOnConveyor[i].position.x < this.houseFactory.position.x + 2.0) {
				this.logsOnConveyor[i].setPosition(this.logsOnConveyor[i].position.x + dt, 1.1, -0.3);
			} else {
				this.logsOnConveyor.splice(i, 1);
				i--;
			}
		}

		//Produce a house from the factory
		if (this.producingHouse) {
			if (this.houseFromFactory.position.x < this.houseFactory.position.x + 4.3) {
				this.houseFromFactory.setPosition(this.houseFromFactory.position.x + dt, 2.03, -0.3);
				this.houseFromFactory.setMovement(1.0, 0.0);
			} else if (this.houseFromFactory.position.y > 0.8) {
				this.houseFromFactory.updatePhysics(dt);
			} else if (this.houseFromFactory.size.x < 3.5) {
				this.houseFromFactory.setSize(this.houseFromFactory.size.x + 3.0 * dt, this.houseFromFactory.size.y + 3.0 * dt);
			} else {
				this.producingHouse = false;
			}
		}

		this.saplingParticles.update(dt);
		this.rainParticles.update(dt);
	}

	plantSapling(xPosition) {
		this.sapling.setPosition(xPosition, 0.0, 0.5);
		this.saplingParticles.setSpawnPosition(xPosition + 0.15, 0.0);
		this.saplingParticles.useSpawnTimer = true;
	}

	startFactoryMiniGame() {
		this.factoryMiniGame = true;
	}

	produceHouseFromFactory() {
		this.producingHouse = true;
	}

	drawBackground() {
		this.backgroundObjects[0].setPosition(this.bounds.start * 0.9 + this.camera.posX * 0.1, -1.3 + this.camera.posY * 0.1, -3.0); //Clouds

		for (var i = 0; i < this.backgroundObjects.length; i++) {
			this.backgroundObjects[i].draw();
		}

		for (var i = 0; i < this.logsOnConveyor.length; i++) {
			this.logsOnConveyor[i].draw();
		}

		if (this.factoryMiniGame) {
			for (var i = 0; i < this.logs.length; i++) {
				this.logs[i].draw();
			}
		}

		this.houseFactory.draw();

		if (this.factoryMiniGame) {
			this.scoreCounter.draw();
		}

		for (var i = 0; i < this.physicalObjects.length; i++) {
			this.physicalObjects[i].draw();
		}

		this.rainParticles.draw();
		this.singleCloud.draw();
	}

	drawForeground() {
		for (var i = 0; i < this.foregroundObjects.length; i++) {
			this.foregroundObjects[i].draw();
		}
		this.saplingParticles.draw();
	}
}
