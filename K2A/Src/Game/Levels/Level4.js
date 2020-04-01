class Level4 {
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

		this.bounds = {
			start: 71.2,
			end: 91.2
		}

		this.judgeMiniGame = false;

		this.judges = [];
		this.numberOfJudges = 2;

		this.populateScene();
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
		background.setTexture("Assets/Textures/Office2/Background.png");

		this.backgroundObjects.push(background);

		for (var i = 0; i < this.numberOfJudges; i++) {
			var tempJudge = new GameObject(this.gl, this.texturesRequestedVsLoaded);
			tempJudge.setSize(1.0, 0.66);
			tempJudge.setPosition(this.bounds.start + 1.0 + Math.random() * 5.0, 2.5, 0.0);
			tempJudge.setTexture("Assets/Textures/Office2/Characters/Judge.png");
			tempJudge.setUV(0.0, 0.0, 1.0, 0.5);

			var tempWords = new GameObject(this.gl, this.texturesRequestedVsLoaded);
			tempWords.setSize(1.5, 0.3);
			tempWords.setPosition(0.0, -5.0, 0.0);
			tempWords.setTexture("Assets/Textures/Office2/Objects/Words.png");
			tempWords.setUV(0.0, 0.0, 0.5, 0.083);

			var tempGavel = new GameObject(this.gl, this.texturesRequestedVsLoaded);
			tempGavel.setSize(0.3, 0.51);
			tempGavel.setBoundingBox(0.4, 0.4, 0.0, 0.055);
			tempGavel.setTexture("Assets/Textures/Office2/Objects/JudgeClub.png");
			tempGavel.retardation = 0.0;

			var tempJudgeStruct = {
				judge: tempJudge,
				words: tempWords,
				gavel: tempGavel,
				timer:  - (1.6 / this.numberOfJudges) * i,
				wordGenerated: false,
				done: false
			}

			this.judges.push(tempJudgeStruct);
		}

		for (var i = 0; i < this.numberOfJudges; i++) {
			this.backgroundObjects.push(this.judges[i].judge);
		}

		var balcony = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		balcony.setSize(this.bounds.end - this.bounds.start, 1.125);
		balcony.setPosition(this.bounds.start, 2.0, 0.0);
		balcony.setTexture("Assets/Textures/Office2/Objects/Balcony.png");

		this.backgroundObjects.push(balcony);

		for (var i = 0; i < this.numberOfJudges; i++) {
			this.backgroundObjects.push(this.judges[i].words);
			this.backgroundObjects.push(this.judges[i].gavel);
		}

		var ground = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		ground.setBoundingBox(this.bounds.end - this.bounds.start, 1.0, 0.0, 0.0);
		ground.setPosition(this.bounds.start, -1.0, -1.0);

		this.invisibleWalls.push(ground);

		for (var i = 0; i < 3; i++) {
			var podium = new GameObject(this.gl, this.texturesRequestedVsLoaded);
			podium.setSize(1.0, 1.0);
			podium.setPosition(this.bounds.start + 6.0 * (i + 1), 0.0, -0.2);
			podium.setBoundingBox(0.5, 0.85, 0.25, 0.0);
			podium.setTexture("Assets/Textures/Office2/Objects/Podium.png");
			this.physicalObjects.push(podium);
		}

		var foreground = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		foreground.setSize(background.size.x, background.size.y);
		foreground.setPosition(background.position.x, background.position.y, 0.5);
		foreground.setTexture("Assets/Textures/Office2/Foreground.png");

		this.foregroundObjects.push(foreground);
	}

	startJudgeMiniGame() {
		this.judgeMiniGame = true;
	}

	update(dt) {
		for (var i = 0; i < this.invisibleWalls.length; i++) {
			this.physics.solveCollision(this.character.gameObject, this.invisibleWalls[i], true, false);
		}

		for (var i = 0; i < this.physicalObjects.length; i++) {
			this.physics.solveCollision(this.character.gameObject, this.physicalObjects[i], true, false);
		}

		for (var i = 0; i < this.judges.length; i++) {
			this.judges[i].gavel.updatePhysics(dt);
			if (this.physics.solveCollision(this.character.gameObject, this.judges[i].gavel, false, false) && !this.character.blinking) {
				this.character.blink(1.0);
			}
		}

		if (this.judgeMiniGame) {
			for (var i = 0; i < this.numberOfJudges; i++) {
				if (!this.judges[i].done) {
					if (this.judges[i].timer < 0.3) {
						this.judges[i].judge.setPosition(this.judges[i].judge.position.x, 2.5 + Math.max(this.judges[i].timer * 3.33, 0.0) * 0.6, 0.0);
					} else if (this.judges[i].timer < 1.3) {
						if (!this.judges[i].wordGenerated) {
							if (!this.character.blinking) {
								this.judges[i].judge.setUV(0.0, 0.5, 1.0, 1.0);
								this.judges[i].words.setPosition(this.judges[i].judge.position.x + this.judges[i].judge.size.x * 0.7, this.judges[i].judge.position.y + this.judges[i].judge.size.y * 0.5, 0.0);
								var randomWord = Math.floor(Math.random() * 12.0);
                                var randomColumn = Math.floor(Math.random() * 2.0);
								this.judges[i].words.setUV(randomColumn * 0.5, randomWord * 0.0833, (randomColumn + 1) * 0.5, (randomWord + 1) * 0.0833);
								this.judges[i].wordGenerated = true;
								this.judges[i].gavel.setPosition(this.judges[i].judge.position.x, this.judges[i].judge.position.y + this.judges[i].judge.size.y * 0.5, 0.0);
								var xDistance = (this.character.gameObject.position.x + this.character.gameObject.size.x * 0.5 + Math.random() * 3.0) - (this.judges[i].gavel.position.x + this.judges[i].gavel.size.x * 0.5);
								this.judges[i].gavel.setMovement(xDistance, Math.abs(xDistance) * 0.5);
								this.judges[i].gavel.setRotation(0.0);
							}
						}
					} else if (this.judges[i].timer < 1.6) {
						this.judges[i].judge.setPosition(this.judges[i].judge.position.x, 2.5 + (1.6 - this.judges[i].timer) * 3.3 * 0.6, 0.0);
						this.judges[i].words.setPosition(0.0, -5.0, 0.0);
					} else {
						if (this.character.gameObject.position.x < this.bounds.end - 2.0) {
							this.judges[i].timer = 0.0;
							this.judges[i].judge.setPosition(Math.max(Math.min(this.character.gameObject.position.x + (Math.random() - 0.3) * 4.0, this.bounds.end - 2.0), this.bounds.start + 1.0), 2.5, 0.0);
							this.judges[i].judge.setUV(0.0, 0.0, 1.0, 0.5);
							this.judges[i].wordGenerated = false;
						} else {
							this.judges[i].done = true;
						}
					}
                    
					this.judges[i].gavel.setRotation(this.judges[i].gavel.rotation + 360 * dt);
					this.judges[i].timer += dt;
				}
			}
            
			if (this.character.gameObject.position.x > this.camera.posX + this.camera.left && !this.character.blinking && this.camera.posX < this.bounds.end + 0.1) {
				this.camera.setMinPositions(this.camera.minPositions.x + dt, 2.0);
				this.camera.setMaxPositions(this.camera.minPositions.x + dt, 2.0);
			}
		}
	}

	drawBackground() {
		this.backgroundObjects[0].setPosition(this.bounds.start * 0.9 + this.camera.posX * 0.1, -1.3 + this.camera.posY * 0.1, -3.0); //Clouds

		for (var i = 0; i < this.backgroundObjects.length; i++) {
			this.backgroundObjects[i].draw();
		}

		for (var i = 0; i < this.physicalObjects.length; i++) {
			this.physicalObjects[i].draw();
		}
	}

	drawForeground() {
		for (var i = 0; i < this.foregroundObjects.length; i++) {
			this.foregroundObjects[i].draw();
		}
	}
}
