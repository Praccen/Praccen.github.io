class Level6 {
	constructor(gl, camera, input, character, physics, audioPlayer, texturesRequestedVsLoaded) {
		this.gl = gl;
		this.character = character;
		this.physics = physics;
		this.input = input;
		this.camera = camera;
		this.audioPlayer = audioPlayer;
        this.texturesRequestedVsLoaded = texturesRequestedVsLoaded;

		this.backgroundObjects = [];
		this.foregroundObjects = [];
		this.invisibleWalls = [];
		this.fireworks = [];
		this.fireworkParticles = [];
		this.scoreLines = [];
		this.scoreDigits = [];
		this.observers = [];

		this.bounds = {
			start: 108.7,
			end: 126.2
		}

		this.populateScene();

		this.levelScores = [];
		this.totalScore = 0.0;
		this.showScores = false;
		this.crowdTimer = 0.0;
		this.bellCounter = 0;
		this.bellTimer = 0.0;
        this.showCredits = false;
        this.creditsTimer = 0.0;
	}

	populateScene() {
		var background = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		background.setSize(this.bounds.end - this.bounds.start, 7.25);
		background.setPosition(this.bounds.start, -2.55, -2.0);
		background.setTexture("Assets/Textures/Nasdaq/Background3.png");

		this.backgroundObjects.push(background);

		var ground = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		ground.setBoundingBox(this.bounds.end - this.bounds.start, 1.0, 0.0, 0.0);
		ground.setPosition(this.bounds.start, -1.0, -1.0);

		this.invisibleWalls.push(ground);

		var foreground = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		foreground.setSize(background.size.x, background.size.y);
		foreground.setPosition(background.position.x, background.position.y, 0.5);
		foreground.setTexture("Assets/Textures/Nasdaq/Foreground.png");

		this.foregroundObjects.push(foreground);

		this.nightTime = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		this.nightTime.setSize(Math.abs(this.camera.left) + Math.abs(this.camera.right), Math.abs(this.camera.bottom) + Math.abs(this.camera.top));
		this.nightTime.setPosition(this.camera.posX + this.camera.left, this.camera.posY + this.camera.bottom, 0.5);
		this.nightTime.setTexture("Assets/Textures/Nasdaq/NightTime.png");
		this.nightTime.setFade(0.0);

		for (var i = 0; i < 3; i++) {
			var firework = new GameObject(this.gl, this.texturesRequestedVsLoaded);
			firework.setTexture("Assets/Textures/Nasdaq/Fireworks.png");
			firework.setUV(i * 0.33, 0.0, (i + 1) * 0.33, 1.0);
			firework.setSize(0.11, 0.25);
			firework.setPosition(0.0, -5.0, -0.2);
			firework.gravity = 0.0;
			this.fireworks.push(firework);
		}

		for (var i = 0; i < 3; i++) {
			var tempParticles = new Particles(this.gl);
			tempParticles.setTexture("Assets/Textures/Nasdaq/FireworkParticle" + i + ".png");
			tempParticles.particleSize = 0.06;
			tempParticles.particleLimit = 50;
			tempParticles.spread.x = 1.0;
			tempParticles.spread.y = 1.0;
			tempParticles.direction.y = 0.5;
			tempParticles.gravity = 2.0;
			tempParticles.retardation = 0.5;
			tempParticles.setPosition(0.0, 0.0, 0.7);
			tempParticles.useSpawnTimer = false;
			this.fireworkParticles.push(tempParticles);
		}

		this.fireworkNumber = 0;
		this.fireworkTimer = 0.0;

		this.countDownText = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		this.countDownText.setTexture("Assets/Textures/Nasdaq/Text2.png");
		this.countDownText.setSize(4.0, 0.4);
		this.countDownText.setFade(0.0);
		this.countDownText.setPosition(this.bounds.end - 5.625 - this.countDownText.size.x * 0.5, 2.5, -0.2);
		this.backgroundObjects.push(this.countDownText);

		this.countDown = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		this.countDown.setTexture("Assets/Textures/Nasdaq/Numbers.png");
		this.countDown.setUV(0.0, 0.0, 1.0, 0.1);
		this.countDown.setSize(1.0, 1.0);
		this.countDown.setFade(0.0);
		this.countDown.setPosition(this.bounds.end - 5.625 - this.countDown.size.x * 0.5, 1.5, -0.2);
		this.backgroundObjects.push(this.countDown);

		this.graphDivider = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		this.graphDivider.setTexture("Assets/Textures/Nasdaq/GraphDivider.png");
		this.graphDivider.setSize(2.4, 1.4);
		this.graphDivider.setPosition(this.bounds.start + 10.675, 1.15, -0.3);

		this.bellClapper = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		this.bellClapper.setTexture("Assets/Textures/Nasdaq/BellClapper.png");
		this.bellClapper.setSize(0.5, 3.125);
		this.bellClapper.setPosition(this.bounds.end - 2.75, 0.45, -0.2);
		this.foregroundObjects.push(this.bellClapper);

		this.bell = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		this.bell.setTexture("Assets/Textures/Nasdaq/Bell.png");
		this.bell.setSize(0.5, 3.125);
		this.bell.setPosition(this.bounds.end - 2.75, 0.45, -0.2);
		this.foregroundObjects.push(this.bell);

		for (var i = 0; i < 6; i++) {
			var tempScoreLine = new GameObject(this.gl, this.texturesRequestedVsLoaded);
			tempScoreLine.setTexture("Assets/Textures/Nasdaq/GraphColor.png");
			tempScoreLine.setSize(0.4, 0.03);
			tempScoreLine.setPosition(this.bounds.start + 10.675 + 0.4 * i, 1.2, -0.2);
			tempScoreLine.setRotationAroundOrigo(true);
			this.scoreLines.push(tempScoreLine);
		}

		for (var i = 0; i < 3; i++) {
			var tempScoreDigit = new GameObject(this.gl, this.texturesRequestedVsLoaded);
			tempScoreDigit.setTexture("Assets/Textures/Nasdaq/Numbers.png");
			tempScoreDigit.setSize(0.4, 0.4);
			tempScoreDigit.setPosition(this.bounds.end - 5.2 + 0.4 * i, 2.5, -0.2);
			tempScoreDigit.setUV(0.0, 0.0, 1.0, 0.1);
			this.scoreDigits.push(tempScoreDigit);
		}

		this.scoreText = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		this.scoreText.setTexture("Assets/Textures/Nasdaq/Text1.png");
		this.scoreText.setSize(3.0, 0.44);
		this.scoreText.setPosition(this.bounds.end - 7.2, 2.5, -0.2);

		for (var i = 0; i < 8; i++) {
			var observer = new GameObject(this.gl, this.texturesRequestedVsLoaded);
			observer.setTexture("Assets/Textures/Nasdaq/CheeringPeople.png");
			observer.setSize(1.5, 1.5);
			observer.setPosition(this.bounds.end - 9.625 + 0.92 * i, -0.8 - (i % 2) * 0.3, 0.4);
			observer.setUV(0.3333 * (i % 3), 0.0, 0.3333 * ((i % 3) + 1), 0.3333);
			this.observers.push(observer);
		}

		for (var i = 0; i < 3; i++) {
			var silhouette = new GameObject(this.gl, this.texturesRequestedVsLoaded);
			silhouette.setTexture("Assets/Textures/Nasdaq/CheeringPeopleSilhouette.png");
			silhouette.setSize(2.0, 2.0);
			silhouette.setPosition(this.bounds.end - 3.625 - 2.66 * i, -2.0, 0.4);
			silhouette.setUV(0.3333 * (i % 3), 0.0, 0.3333 * ((i % 3) + 1), 0.3333);
			this.observers.push(silhouette);
		}

		this.confettiParticles = new Particles(this.gl);
		this.confettiParticles.setTexture("Assets/Textures/Nasdaq/Confetti.png");
		this.confettiParticles.particleSize = 0.05;
		this.confettiParticles.particleLimit = 100;
		this.confettiParticles.spread.x = 22.0;
		this.confettiParticles.spread.y = 0.5;
		this.confettiParticles.direction.y = 0.0;
		this.confettiParticles.gravity = 0.3;
		this.confettiParticles.retardation = 50.0;
		this.confettiParticles.setPosition(0.0, 0.0, 0.7);
		this.confettiParticles.useSpawnTimer = true
		this.confettiParticles.setSpawnPosition(this.bounds.end - 5.625, 4.0, 0.3);
        
        this.credits = new GameObject(this.gl, this.texturesRequestedVsLoaded);
        this.credits.setTexture("Assets/Textures/Nasdaq/Credits.png");
        this.credits.setSize(8.0, 14.0);
        this.credits.setPosition(this.bounds.end, 7.0, 0.8);
	}

	provideScores(levelScoresArray) {
		this.levelScores = levelScoresArray;
	}

	drawCountDown(number) {
		if (number >= 0 && number < 10) {
			this.countDown.setUV(0.0, 0.1 * number, 1.0, 0.1 * (number + 1));
			this.countDown.setFade(1.0);
			this.countDownText.setFade(1.0);
		} else {
			this.countDown.setFade(0.0);
			this.countDownText.setFade(0.0);
		}
	}

	drawScore() {
		this.showScores = true;

		this.totalScore = 0.0;
		for (var i = 0; i < this.levelScores.length; i++) {
			this.totalScore += Math.max(this.levelScores[i], 0.0);
		}

		if (this.totalScore > 0.0) {
			this.scoreDigits[0].setUV(0.0, Math.floor((this.totalScore / 100) % 10) * 0.1, 1.0, Math.ceil((this.totalScore / 100) % 10) * 0.1)
			this.scoreDigits[1].setUV(0.0, Math.floor((this.totalScore / 10) % 10) * 0.1, 1.0, Math.ceil((this.totalScore / 10) % 10) * 0.1)
			this.scoreDigits[2].setUV(0.0, Math.floor(this.totalScore % 10) * 0.1, 1.0, Math.ceil(this.totalScore % 10) * 0.1)

			var prevScore = 0.0;
			for (var i = 0; i < this.scoreLines.length; i++) {
				var newScore = Math.max(this.levelScores[i], 0.0) + prevScore;

				var difX = 0.4;
				var difY = ((newScore - prevScore) / this.totalScore * 1.3);
				var size = Math.sqrt(Math.pow(difX, 2.0) + Math.pow(difY, 2.0));
				this.scoreLines[i].setSize(size, 0.03);
				this.scoreLines[i].setRotation(Math.asin(difY / size) * 180.0 / -Math.PI);
				this.scoreLines[i].setPosition(this.bounds.start + 10.675 + 0.4 * i + difY / size * 0.015, 1.2 + 1.3 * (prevScore / this.totalScore) - difX / size * 0.015, -0.2);

				prevScore = newScore;

				console.log(this.levelScores[i]);
			}
		}

		this.confettiParticles.spawnParticles(100);
        this.audioPlayer.playSound("endingSong", true);
	}

	launchFireWork(positionX, positionY, color) {
		if (this.fireworks[color].getMovement().y == 0) { //Only create firework if that particular color is not already moving
			this.fireworks[color].setPosition(positionX, positionY, -0.2);
			this.fireworks[color].setMovement(0.0, 4.5);
		}
	}

	update(dt) {
		for (var i = 0; i < this.invisibleWalls.length; i++) {
			this.physics.solveCollision(this.character.gameObject, this.invisibleWalls[i], true, false);
		}

		for (var i = 0; i < this.fireworks.length; i++) {
			if (this.fireworks[i].position.y > 2.7) {
				this.fireworkParticles[i].setSpawnPosition(this.fireworks[i].position.x + this.fireworks[i].size.x * 0.5, this.fireworks[i].position.y + this.fireworks[i].size.y * 0.5);
				this.fireworks[i].setMovement(0.0, 0.0);
				this.fireworks[i].setPosition(this.fireworks[i].position.x, -5.0, -0.2);
				this.fireworkParticles[i].spawnParticles(50);
				this.fireworkParticles[i].setFade(1.0);
				this.audioPlayer.playSound("firework", false);

			}

			this.fireworks[i].updatePhysics(dt);

			this.fireworkParticles[i].setFade(Math.max(this.fireworkParticles[i].fade - dt * 0.9, 0));
			this.fireworkParticles[i].update(dt);
		}

		if (this.character.gameObject.position.x > this.bounds.start && this.character.gameObject.position.x < this.bounds.start + 5.0 && this.fireworkTimer > 0.3) {
			this.launchFireWork(this.bounds.start + 1.0 + Math.random() * 2.0, 0.5, this.fireworkNumber);
			this.fireworkNumber = (this.fireworkNumber + 1) % 3;
			this.fireworkTimer = 0.0;
		}

		this.fireworkTimer += dt;

		if (this.character.gameObject.position.x < this.bounds.start + 1.0) {
			var progress = Math.max(Math.min((this.character.gameObject.position.x - this.bounds.start) * 0.5, 0.5), 0.0);
			this.nightTime.setFade(progress); 
			this.gl.clearColor(0.67 - progress, 0.84 - progress, 1.0 - progress, 1.0);
		}

		if (this.showScores) {
			this.crowdTimer += dt;
			if (this.crowdTimer < 4) {
				if (this.crowdTimer < 0.1) {
					for (var i = 0; i < this.observers.length; i++) {
						this.observers[i].setUV(0.3333 * (i % 3), 0.3333, 0.3333 * ((i % 3) + 1), 0.6666);
					}
				} else if (this.crowdTimer < 3.4) {
					for (var i = 0; i < this.observers.length; i++) {
						this.observers[i].setUV(0.3333 * (i % 3), 0.6666, 0.3333 * ((i % 3) + 1), 1.0);
					}
				} else if (this.crowdTimer < 3.5) {
					for (var i = 0; i < this.observers.length; i++) {
						this.observers[i].setUV(0.3333 * (i % 3), 0.3333, 0.3333 * ((i % 3) + 1), 0.6666);
					}
				} else {
					for (var i = 0; i < this.observers.length; i++) {
						this.observers[i].setUV(0.3333 * (i % 3), 0.0, 0.3333 * ((i % 3) + 1), 0.3333);
					}
				}
			} else {
				var index = Math.floor((this.crowdTimer % 2) * 11.0 / 2.0);

                
                
				this.observers[(11 + index - 2) % 11].setUV(0.3333 * (((11 + index - 2) % 11) % 3), 0.0, 0.3333 * ((((11 + index - 2) % 11) % 3) + 1), 0.3333);
				this.observers[(11 + index - 1) % 11].setUV(0.3333 * (((11 + index - 1) % 11) % 3), 0.3333, 0.3333 * ((((11 + index - 1) % 11) % 3) + 1), 0.6666);
				this.observers[index].setUV(0.3333 * (index % 3), 0.6666, 0.3333 * ((index % 3) + 1), 1.0);
				this.observers[(index + 1) % 11].setUV(0.3333 * (((index + 1) % 11) % 3), 0.3333, 0.3333 * ((((index + 1) % 11) % 3) + 1), 0.6666);
			}

			this.confettiParticles.update(dt);
			this.confettiParticles.setPosition(Math.cos(this.crowdTimer * 3.0) * 0.3, this.confettiParticles.position.y, this.confettiParticles.position.z);

			var prevX = this.bellClapper.position.x;
			this.bellClapper.setPosition(this.bounds.end - 2.80 + this.character.animationFrameCounter * 0.1, this.bellClapper.position.y, this.bellClapper.position.z)
			if (this.bellCounter < 50) {
				if (this.bellClapper.position.x != prevX) { //Bell clapper changed position
					this.bellCounter++;
					if (this.bellCounter % 2 == 0) {
						this.audioPlayer.setTime("bell", 0.15);
						this.audioPlayer.setVolume("bell", 0.3);
						this.audioPlayer.playSound("bell", false);
						this.bellTimer = 0.0;
					}
				}
				this.audioPlayer.setVolume("bell", Math.max(0.3 - this.bellTimer, 0.0))
			}
            if (this.bellCounter == 50) {
                this.nightTime.setPosition(this.camera.posX + this.camera.left, this.camera.posY + this.camera.bottom, this.nightTime.position.z);
                this.nightTime.setFade(0.0);
                this.showCredits = false; //Set to true to turn on credits
                this.bellCounter++;
            }
            
            if (this.showCredits) {
                this.creditsTimer += dt;
                
                if (this.creditsTimer < 6.0) {
                    if (this.creditsTimer > 5.0) {
                        this.nightTime.setFade(Math.min(this.creditsTimer - 5.0, 0.6));
                    }
                } else if (this.creditsTimer < 6.0 + (this.credits.size.y + 4.5) * 2.0) {
                    this.credits.setPosition(this.camera.posX + this.camera.left, this.camera.posY + this.camera.bottom - this.credits.size.y + (this.creditsTimer - 6.0) * 0.5, 0.8);
                } else if (this.creditsTimer < 6.0 + (this.credits.size.y + 4.5) * 2.0 + 1.0) {
                    this.nightTime.setFade(Math.max((6.0 + (this.credits.size.y + 4.5) * 2.0 + 1.0) - this.creditsTimer, 0.0) * 0.6);
                } else {
                    this.showCredits = false;
                }
            }
		}
	}

	drawBackground() {
		//this.backgroundObjects[0].setPosition(this.bounds.start * 0.9 + this.camera.posX * 0.1, -1.3 + this.camera.posY * 0.1, -3.0); //Clouds

		for (var i = 0; i < this.backgroundObjects.length; i++) {
			this.backgroundObjects[i].draw();
		}

		for (var i = 0; i < this.fireworks.length; i++) {
			if (this.fireworks[i].position.y > -4.0) {
				this.fireworks[i].draw();
			}
		}

		if (this.showScores) {
			this.graphDivider.draw();

			for (var i = 0; i < this.scoreLines.length; i++) {
				this.scoreLines[i].draw();
			}

			this.scoreText.draw();

			for (var i = 0; i < this.scoreDigits.length; i++) {
				this.scoreDigits[i].draw();
			}
		}
	}

	drawForeground() {
		for (var i = 0; i < this.observers.length; i++) {
			this.observers[i].draw();
		}
        
		for (var i = 0; i < this.foregroundObjects.length; i++) {
			this.foregroundObjects[i].draw();
		}
        
        this.confettiParticles.draw();
        
        if (!this.showCredits) {
            this.nightTime.setPosition(Math.min(this.camera.posX + this.camera.left, this.bounds.start + 6.0 - this.nightTime.size.x), this.camera.posY + this.camera.bottom, 0.5);
        }
		this.nightTime.draw();
        
        
        if (this.showCredits) {
            this.credits.draw();
        }

		for (var i = 0; i < this.fireworkParticles.length; i++) {
			this.fireworkParticles[i].draw();
		}
	}
}
