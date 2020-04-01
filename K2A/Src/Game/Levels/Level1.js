class Level1 {
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
		this.projectiles = [];

		this.projectileSpawnTimer = 1.3;
		this.projectileSpawnClock = 0.0;
		this.projectileLimit = 5;

		this.respawnTimer = 0.0;

		this.bounds = {
			start: 0.0,
			end: 23.2
		}

		this.populateScene();

		this.antagonistTalking = false;
	}

	populateScene() {
		var clouds = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		clouds.setSize((this.bounds.end - this.bounds.start) * 0.9, 6.0);
		clouds.setPosition(this.bounds.start, -1.3, -3.0);
		clouds.setTexture("Assets/Textures/Concrete/Clouds.png");

		var background = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		background.setSize(this.bounds.end - this.bounds.start, 6.0);
		background.setPosition(this.bounds.start, -1.3, -2.0);
		background.setTexture("Assets/Textures/Concrete/Background.png");

		this.antagonist = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		this.antagonist.setSize(1.2, 1.6);
		this.antagonist.setPosition(this.bounds.start + 2.0, 0.3, -1.0);
		this.antagonist.setTexture("Assets/Textures/Characters/Antagonist/Antagonist.png");

		this.speechBubble = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		this.speechBubble.setSize(1.0, 1.0);
		this.speechBubble.setPosition(this.bounds.start + 2.9, 1.8, -0.9);
		this.speechBubble.setTexture("Assets/Textures/Characters/Antagonist/Speech.png");

		this.sewerBack = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		this.sewerBack.setSize(1.25, 1.25);
		this.sewerBack.setPosition(this.bounds.start + 2.8, -0.1, -1.0);
		this.sewerBack.setTexture("Assets/Textures/Concrete/Objects/SewerBack.png");

		var sewerFront = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		sewerFront.setSize(1.25, 1.25);
		sewerFront.setPosition(this.sewerBack.position.x, -0.1, 1.0);
		sewerFront.setTexture("Assets/Textures/Concrete/Objects/SewerFront.png");

		var foreground = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		foreground.setSize(background.size.x, background.size.y);
		foreground.setPosition(background.position.x, background.position.y, 0.5);
		foreground.setTexture("Assets/Textures/Concrete/Foreground.png");

		var ground1 = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		ground1.setBoundingBox(this.sewerBack.position.x + 0.125, 1.0, 0.0, 0.0);
		ground1.setPosition(this.bounds.start, -1.0, 0.0);

		var ground2 = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		ground2.setBoundingBox(2.0, 1.0, 0.0, 0.0);
		ground2.setPosition(this.sewerBack.position.x, -2.0, 0.0);

		var ground3 = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		ground3.setBoundingBox(this.bounds.end - (this.sewerBack.position.x + this.sewerBack.size.x - 0.125), 1.0, 0.0, 0.0);
		ground3.setPosition(this.sewerBack.position.x + this.sewerBack.size.x - 0.125, -1.0, 0.0);

		var roadBlock = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		roadBlock.setSize(1.5, 0.75);
		roadBlock.setBoundingBox(1.2, 0.75, 0.15, 0.0);
		roadBlock.setPosition(this.bounds.start + 5.0, 0.0, -1.0);
		roadBlock.setTexture("Assets/Textures/Concrete/Objects/RoadBlock.png");

		var trashcan = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		trashcan.setBoundingBox(0.66, 1.0, 0.16, 0.0);
		trashcan.setPosition(this.bounds.start + 7.5, 0.0, -1.0);
		trashcan.setTexture("Assets/Textures/Concrete/Objects/Trashcan.png");

		var scaffold1 = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		scaffold1.setSize(1.5, 1.5);
		scaffold1.setBoundingBox(1.5, 1.45, 0.0, 0.0);
		scaffold1.setPosition(this.bounds.start + 9.0, 0.0, -1.0);
		scaffold1.setTexture("Assets/Textures/Concrete/Objects/Scaffold.png");

		var cementMixer = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		cementMixer.setSize(1.39, 1.0);
		cementMixer.setBoundingBox(1.39, 1.0, 0.0, 0.0);
		cementMixer.setPosition(this.bounds.start + 10.5, 0.0, -1.0);
		cementMixer.setTexture("Assets/Textures/Concrete/Objects/CementMixer.png");

		this.physicalObjects.push(roadBlock);
		this.physicalObjects.push(trashcan);
		this.physicalObjects.push(scaffold1);
		this.physicalObjects.push(cementMixer);

		this.backgroundObjects.push(clouds);
		this.backgroundObjects.push(background);

		this.foregroundObjects.push(foreground);
		this.foregroundObjects.push(sewerFront);

		this.invisibleWalls.push(ground1);
		this.invisibleWalls.push(ground2);
		this.invisibleWalls.push(ground3);

		this.warningParticles = new Particles(this.gl);
		this.warningParticles.setTexture("Assets/Textures/Concrete/Objects/Particles.png");
		this.warningParticles.particleSize = 0.04;
		this.warningParticles.spawnRate = 0.05;
		this.warningParticles.useSpawnTimer = true;
		this.warningParticles.particleLimit = 50;
		this.warningParticles.setPosition(0.0, 0.0, -1.05);

		this.sewerParticles = new Particles(this.gl);
		this.sewerParticles.setTexture("Assets/Textures/Concrete/Objects/SewerParticle2.png");
		this.sewerParticles.particleSize = 0.2;
		this.sewerParticles.useSpawnTimer = false;
		this.sewerParticles.spawnRate = 0.001;
		this.sewerParticles.particleLimit = 30;
		this.sewerParticles.setSpawnPosition(this.sewerBack.position.x + this.sewerBack.size.x * 0.5, -0.3);
		this.sewerParticles.spread.x = 1.0;
		this.sewerParticles.spread.y = 1.0;
		this.sewerParticles.direction.y = 6.0;
		this.sewerParticles.gravity = 9.82;
		this.sewerParticles.retardation = 0.0;
		this.sewerParticles.setPosition(0.0, 0.0, -0.1);

		for (var i = 0; i < this.projectileLimit; i++) {
			var tempProjectile = new GameObject(this.gl, this.texturesRequestedVsLoaded);
			tempProjectile.setSize(0.8, 0.8);
			tempProjectile.setBoundingBox(0.8, 1.0, 0.0, -0.2);
			tempProjectile.setPosition(0.0, -5.0, -1.1);
			tempProjectile.setTexture("Assets/Textures/Concrete/Objects/CementBag.png");
			tempProjectile.setMaxSpeed(4.5, 4.5);
			this.projectiles.push(tempProjectile);
		}
	}

	update(dt) {
		if (this.character.gameObject.position.x < this.bounds.end - 7.5) {
			this.warningParticles.useSpawnTimer = true;
			this.projectileSpawnClock += dt;
		} else {
			this.warningParticles.useSpawnTimer = false;
		}

		if (this.projectileSpawnClock >= this.projectileSpawnTimer && !this.character.blinking) {
			this.dropProjectile(Math.min(this.character.gameObject.position.x - 1.0 + Math.random() * 5.0, this.bounds.end - 7.5));

			this.projectileSpawnClock = 0.0;
		}

		for (var i = 0; i < this.physicalObjects.length; i++) {
			this.physics.solveCollision(this.character.gameObject, this.physicalObjects[i], true, false);
		}
		for (var i = 0; i < this.invisibleWalls.length; i++) {
			if (this.physics.solveCollision(this.character.gameObject, this.invisibleWalls[i], true, false) && i == 1) { //Fell into the sewers
				//Kill character
				if (this.respawnTimer == 0.0) {
					this.sewerParticles.spawnParticles(30);
					this.audioPlayer.playSound("water", false);
				}

				this.respawnTimer += dt;

				this.character.blink(1.0);
				if (this.respawnTimer > 1.0) {
					this.character.gameObject.setPosition(this.bounds.start + 0.5, 0.0, 0.0);
					this.respawnTimer = 0.0;
				}
			}

			for (var j = 0; j < this.projectiles.length; j++) {
				var justLanded = false;
				if (this.projectiles[j].position.y + this.projectiles[j].boundingBox.offsetY < 0.0) {
					justLanded = true;
				}
				if (this.physics.solveCollision(this.projectiles[j], this.invisibleWalls[i], true, false)) {
					if (i == 1) {
						this.sewerParticles.spawnParticles(30);
						this.audioPlayer.playSound("water", false);
						this.projectiles[j].setPosition(0.0, -5.0, -1.1);
					} else if (justLanded) {
						this.audioPlayer.setTime("cement", 0.07);
						this.audioPlayer.playSound("cement", false);
					}
				}
			}
		}
		for (var i = 0; i < this.projectiles.length; i++) {
			if (this.physics.solveCollision(this.character.gameObject, this.projectiles[i], false, false)) {
				if (!this.projectiles[i].getMovementBlock().yNeg && !this.character.blinking) {
					//Hurt character
					this.character.blink(1.0);
					this.projectileSpawnClock -= 1.0;
				}
			}
			this.projectiles[i].updatePhysics(dt);

		}

		this.warningParticles.setSpawnPosition(this.warningParticles.spawnPosition.x, this.camera.posY + 2.5);
		this.warningParticles.update(dt);

		this.sewerParticles.update(dt);
	}

	antagonistSpeech(sequence) {
		if (sequence == -1) {
			this.antagonistTalking = false;
		} else {
			this.antagonistTalking = true;
			this.speechBubble.setUV(0.0, (sequence - 1) * 0.5, 1.0, sequence * 0.5);
		}
	}

	dropProjectile(posX) {
		//Use the first projectile
		this.projectiles[0].setPosition(posX, this.camera.posY + 7.0, -1.1);
		this.warningParticles.setSpawnPosition(posX + 0.25, this.camera.posY + 2.5);
		this.projectiles.push(this.projectiles[0]);
		this.projectiles.splice(0, 1);
	}

	drawBackground() {
		this.backgroundObjects[0].setPosition(this.bounds.start * 0.9 + this.camera.posX * 0.1 - 2.0, -1.3 + this.camera.posY * 0.1, -3.0); //Clouds

		for (var i = 0; i < this.backgroundObjects.length; i++) {
			this.backgroundObjects[i].draw();
		}
		this.antagonist.draw();
		if (this.antagonistTalking) {
			this.speechBubble.draw();
		}
		this.sewerBack.draw();
		for (var i = 0; i < this.projectiles.length; i++) {
			this.projectiles[i].draw();
		}
		this.warningParticles.draw();
		for (var i = 0; i < this.physicalObjects.length; i++) {
			this.physicalObjects[i].draw();
		}
		this.sewerParticles.draw();
	}

	drawForeground() {
		for (var i = 0; i < this.foregroundObjects.length; i++) {
			this.foregroundObjects[i].draw();
		}
	}
}
