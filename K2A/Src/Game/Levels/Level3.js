class Level3 {
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
		this.receipts = [];
		this.receiptsStatus = [];

		this.bounds = {
			start: 53.2,
			end: 71.2
		}

		this.populateScene();

		this.accountantAnimationTimer = 0.0;
		this.accountantAnimationFrame = 0;
		this.animateAccountant = true;

		this.receiptMiniGame = false;
		this.receiptMiniGameScore = 0;
		this.receiptMiniGameTimer = 0.0;
		this.receiptMiniGameCounter = 0;
	}

	populateScene() {
		var clouds = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		clouds.setSize((this.bounds.end - this.bounds.start) * 0.9, 6.0);
		clouds.setPosition(this.bounds.start, -1.3, -3.0);
		clouds.setTexture("Assets/Textures/Office1/Clouds.png");

		this.backgroundObjects.push(clouds);

		var background = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		background.setSize(this.bounds.end - this.bounds.start, 6.0);
		background.setPosition(this.bounds.start, -1.3, -2.0);
		background.setTexture("Assets/Textures/Office1/Background.png");

		this.backgroundObjects.push(background);

		var ground = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		ground.setBoundingBox(this.bounds.end - this.bounds.start, 1.0, 0.0, 0.0);
		ground.setPosition(this.bounds.start, -1.0, -1.0);

		this.invisibleWalls.push(ground);

		this.deskGroup = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		this.deskGroup.setSize(2.2375, 1.6375);
		this.deskGroup.setPosition(this.bounds.start + 14.2, 0.1, -0.1);
		this.deskGroup.setTexture("Assets/Textures/Office1/Objects/DeskGroup.png")
		this.deskGroup.setUV(0.0, 0.0, 1.0, 0.5);
		this.backgroundObjects.push(this.deskGroup);
		this.deskGroupAnimationTimer = 0.0;
		this.deskGroupAnimationFrame = 0;

		this.clock = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		this.clock.setSize(0.5, 0.5);
		this.clock.setPosition(this.bounds.start + 16.5, 2.0, -0.1);
		this.clock.setTexture("Assets/Textures/Office1/Objects/Clock.png")
		this.backgroundObjects.push(this.clock);

		this.minuteArm = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		this.minuteArm.setSize(0.5, 0.5);
		this.minuteArm.setPosition(this.clock.position.x, this.clock.position.y, this.clock.position.z);
		this.minuteArm.setTexture("Assets/Textures/Office1/Objects/ClockMinuteArm.png");
		this.backgroundObjects.push(this.minuteArm);

		this.hourArm = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		this.hourArm.setSize(0.5, 0.5);
		this.hourArm.setPosition(this.clock.position.x, this.clock.position.y, this.clock.position.z);
		this.hourArm.setTexture("Assets/Textures/Office1/Objects/ClockHourArm.png");
		this.backgroundObjects.push(this.hourArm);

		var foreground = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		foreground.setSize(background.size.x, background.size.y);
		foreground.setPosition(background.position.x, background.position.y, 0.5);
		foreground.setTexture("Assets/Textures/Office1/Foreground.png");

		this.foregroundObjects.push(foreground);

		this.accountant = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		this.accountant.setSize(1.5, 1.922);
		this.accountant.setPosition(this.bounds.start + 16.0, -0.685, 0.7);
		this.accountant.setTexture("Assets/Textures/Office1/Characters/AccountantSpriteMap.png");
		this.accountant.setUV(0.0, 0.0, 0.5, 0.2);

		this.correctScoringParticles = new Particles(this.gl);
		this.correctScoringParticles.setTexture("Assets/Textures/Office1/Objects/CorrectParticle.png");
		this.correctScoringParticles.particleSize = 0.03;
		this.correctScoringParticles.particleLimit = 30;
		this.correctScoringParticles.spread.x = 0.5;
		this.correctScoringParticles.spread.y = 0.5;
		this.correctScoringParticles.gravity = 2.0;
		this.correctScoringParticles.direction.y = 1.0;
		this.correctScoringParticles.retardation = 0.1;
		this.correctScoringParticles.setPosition(0.0, 0.0, 0.6);

		this.wrongScoringParticles = new Particles(this.gl);
		this.wrongScoringParticles.setTexture("Assets/Textures/Office1/Objects/WrongParticle.png");
		this.wrongScoringParticles.particleSize = 0.03;
		this.wrongScoringParticles.particleLimit = 30;
		this.wrongScoringParticles.spread.x = 0.5;
		this.wrongScoringParticles.spread.y = 0.5;
		this.wrongScoringParticles.gravity = 2.0;
		this.wrongScoringParticles.direction.y = 1.0;
		this.wrongScoringParticles.retardation = 0.1;
		this.wrongScoringParticles.setPosition(0.0, 0.0, 0.6);

		this.scoreCounter = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		this.scoreCounter.setTexture("Assets/Textures/ScoreCounter.png");
		this.scoreCounter.setUV(0.0, 0.0, 1.0, 0.16667);
		this.scoreCounter.setPosition(this.accountant.position.x - 1.5, this.accountant.position.y, 0.8);
		this.scoreCounter.setSize(0.51, 0.36);

		for (var i = 0; i < 6; i++) { //Create new GameObject
			var tempReceipt = new GameObject(this.gl, this.texturesRequestedVsLoaded);
			tempReceipt.setTexture("Assets/Textures/Office1/Objects/Receipt.png");
			tempReceipt.setSize(0.2, 0.35);
			tempReceipt.setBoundingBox(0.2, 0.35, 0.0, 0.0);
			tempReceipt.retardation = 0.0;
			tempReceipt.setMaxSpeed(1.0, 2.0);
			this.receipts.push(tempReceipt);
			this.receiptsStatus.push(0);
		}

		this.correctReceipt = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		this.correctReceipt.setTexture("Assets/Textures/Office1/Objects/Receipt.png");
		this.correctReceipt.setSize(0.2, 0.35);
        this.correctReceipt.setUV(0.0, 0.0, 0.5, 1.0);
	}

	startReceiptMiniGame() {
		this.receiptMiniGame = true;
	}

	update(dt) {
		this.deskGroupAnimationTimer += dt;

		if (this.deskGroupAnimationTimer > 0.1) {
			this.deskGroupAnimationFrame = (this.deskGroupAnimationFrame + 1) % 2;
			this.deskGroup.setUV(0.0, this.deskGroupAnimationFrame * 0.5, 1.0, (this.deskGroupAnimationFrame + 1) * 0.5);
			this.deskGroupAnimationTimer = 0.0;
		}

		this.minuteArm.setRotation(this.minuteArm.rotation + dt * 360);
		this.hourArm.setRotation(this.hourArm.rotation + dt * 30);

		for (var i = 0; i < this.invisibleWalls.length; i++) {
			this.physics.solveCollision(this.character.gameObject, this.invisibleWalls[i], true, false);
		}

		if (this.animateAccountant) {
			this.accountantAnimationTimer += dt;

			if (this.accountantAnimationTimer > 0.2) {
				this.accountantAnimationFrame = (this.accountantAnimationFrame + 1) % 5;
				this.accountant.setUV(0.0, this.accountantAnimationFrame * 0.2, 0.5, (this.accountantAnimationFrame + 1) * 0.2);
				this.accountantAnimationTimer = 0.0;
			}
		}

		if (this.receiptMiniGame) {
			if (this.receiptMiniGameTimer > 0.5) {
				var tempReceipt = this.receipts[0];
				this.receipts.splice(0, 1);
				this.receiptsStatus.splice(0, 1);

				tempReceipt.setPosition(this.accountant.position.x - 6.0 + Math.random() * 5.0, 4.0, 0.8);

				if (this.receiptMiniGameCounter == 3) {
					//Green
					tempReceipt.setUV(0.0, 0.0, 0.5, 1.0);
					this.receiptsStatus.push(1);
					this.receiptMiniGameCounter = 0;
				} else {
					//Red
					tempReceipt.setUV(0.5, 0.0, 1.0, 1.0);
					this.receiptsStatus.push(0);
				}

				this.receipts.push(tempReceipt);
				this.receiptMiniGameTimer = 0.0;

				this.receiptMiniGameCounter++;
			}

			for (var i = 0; i < this.receipts.length; i++) {
				this.receipts[i].updatePhysics(dt);

				if (this.physics.solveCollision(this.character.gameObject, this.receipts[i], false, false)) {
					if (this.receiptsStatus[i] == 1) {
						this.correctScoringParticles.setSpawnPosition(this.accountant.position.x - 0.8 + this.receiptMiniGameScore * 0.3 + 0.1, this.accountant.position.y - 0.1);
						this.correctScoringParticles.spawnParticles(30);
						this.receiptMiniGameScore++;
						this.audioPlayer.setTime("smallAchievement", 0.1);
						this.audioPlayer.playSound("smallAchievement", false);
					} else {
						if (this.receiptMiniGameScore > 0) {
							this.receiptMiniGameScore--;
							this.audioPlayer.playSound("paperRip", false);
							this.wrongScoringParticles.setSpawnPosition(this.accountant.position.x - 0.8 + this.receiptMiniGameScore * 0.3 + 0.1, this.accountant.position.y - 0.1);
							this.wrongScoringParticles.spawnParticles(30);
						}
					}

					this.scoreCounter.setUV(0.0, this.receiptMiniGameScore * 0.16667, 1.0, (this.receiptMiniGameScore + 1) * 0.16667);

					this.receipts[i].setPosition(0.0, -5.0, 0.8);
				}
			}

			this.receiptMiniGameTimer += dt;

			if (this.receiptMiniGameScore == 5) {
				this.receiptMiniGame = false;
				this.camera.setMaxPositions(this.bounds.start + 13.701, 1.3);
				this.animateAccountant = false;
				this.accountant.setUV(0.5, 0.0, 1.0, 0.2);
				this.audioPlayer.playSound("achievement", false);
			}
		}

		this.correctScoringParticles.update(dt);
		this.wrongScoringParticles.update(dt);
	}

	drawBackground() {
		this.backgroundObjects[0].setPosition(this.bounds.start * 0.9 + this.camera.posX * 0.1, -1.3 + this.camera.posY * 0.1, -3.0); //Clouds

		for (var i = 0; i < this.backgroundObjects.length; i++) {
			this.backgroundObjects[i].draw();
		}

		if (this.receiptMiniGame) {
			this.scoreCounter.draw();

			for (var i = 0; i < this.receipts.length; i++) {
				this.receipts[i].draw();
			}
		}
	}

	drawForeground() {
		for (var i = 0; i < this.foregroundObjects.length; i++) {
			this.foregroundObjects[i].draw();
		}

		for (var i = 0; i < this.receiptMiniGameScore; i++) {
            this.correctReceipt.setPosition(this.accountant.position.x - 0.8 + i * 0.3, this.accountant.position.y - 0.2, 0.8);
			this.correctReceipt.draw();
		}

		this.accountant.draw();

		this.correctScoringParticles.draw();
		this.wrongScoringParticles.draw();
	}
}
