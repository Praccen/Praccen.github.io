class Level5 {
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
		this.waterObjects = [];

		this.bounds = {
			start: 91.2,
			end: 108.7
		}

		this.fishingMiniGame = false;
		this.fishingMiniGameScore = 0;
		this.baitInWater = false;
		this.moneyBeingCarried = true;

		this.displayRod = false;

		this.anchorInvestorTimer = 0.0;
		this.anchorInvestorRate = 0.3;
		this.anchorInvestorFrame = 0;
		this.anchorInvestorFrames = 4;
		this.anchorInvestorLookingDirection = 1;

		this.objectOnTheHook = -1;

		this.populateScene();
	}

	populateScene() {
		var background = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		background.setSize(this.bounds.end - this.bounds.start, 7.25);
		background.setPosition(this.bounds.start, -2.55, -2.0);
		background.setTexture("Assets/Textures/ProspectFishing/Background.png");

		this.backgroundObjects.push(background);

		var ground = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		ground.setBoundingBox(this.bounds.end - this.bounds.start, 1.0, 0.0, 0.0);
		ground.setPosition(this.bounds.start, -1.0, -1.0);

		this.invisibleWalls.push(ground);

		this.fishingRod = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		this.fishingRod.setSize(1.0, 1.0);
		this.fishingRod.setPosition(this.bounds.start + 3.5, 0.0, 0.4);
		this.fishingRod.setTexture("Assets/Textures/ProspectFishing/FishingRod.png");

		var foreground = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		foreground.setSize(background.size.x, background.size.y);
		foreground.setPosition(background.position.x, background.position.y, 0.5);
		foreground.setTexture("Assets/Textures/ProspectFishing/Foreground.png");

		this.foregroundObjects.push(foreground);

		this.fishingLine = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		this.fishingLine.setSize(0.03, 2.0);
		this.fishingLine.setPosition(this.fishingRod.position.x + this.fishingRod.size.x, this.fishingRod.position.y + this.fishingRod.size.y, 0.6);
		this.fishingLine.setTexture("Assets/Textures/ProspectFishing/FishingLine.png");

		this.bait = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		this.bait.setSize(0.3, 0.3);
		this.bait.setTexture("Assets/Textures/ProspectFishing/Prospect.png");
		this.bait.setBoundingBox(0.3, 0.3, 0.0, 0.0);

		this.water = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		this.water.setSize(background.size.x, background.size.y);
		this.water.setPosition(background.position.x, background.position.y, 0.5);
		this.water.setTexture("Assets/Textures/ProspectFishing/Water.png");

		this.waterParticles = new Particles(this.gl);
		this.waterParticles.setTexture("Assets/Textures/ProspectFishing/WaterParticle.png");
		this.waterParticles.setFade(0.5);

		this.waterParticles.particleSize = 0.08;
		this.waterParticles.particleLimit = 6;
		this.waterParticles.spread.x = 13.0;
		this.waterParticles.spread.y = 0.0;
		this.waterParticles.gravity = -0.5;
		this.waterParticles.direction.y = 0.0;
		this.waterParticles.retardation = 20.0;
		this.waterParticles.setPosition(0.0, 0.0, 0.6);
		this.waterParticles.useSpawnTimer = true;
		this.waterParticles.spawnRate = 0.5;
		this.waterParticles.setSpawnPosition(this.bounds.start + 12.2, -3.0);

		this.anchorInvestor = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		this.anchorInvestor.setSize(1.3, 1.3);
		this.anchorInvestor.setBoundingBox(0.65, 0.65, 0.325, 0.65);
		this.anchorInvestor.setPosition(this.bounds.start + 18.2, -2.0, 0.4);
		this.anchorInvestor.setTexture("Assets/Textures/ProspectFishing/AnchorInvestor.png");
		this.anchorInvestor.setUV(0.0, 0.0, 1.0, 0.25);
		this.anchorInvestor.gravity = 3.0;
		this.anchorInvestor.retardation = 0.0;

		this.money = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		this.money.setSize(0.3, 0.3);
		this.money.setTexture("Assets/Textures/ProspectFishing/Money.png");
		this.money.setBoundingBox(0.3, 0.3, 0.0, 0.0);
		this.money.setPosition(this.anchorInvestor.position.x + this.anchorInvestor.size.x * 0.7, this.anchorInvestor.position.y + this.anchorInvestor.size.y * 0.55, 0.5);
        
		for (var i = 0; i < 1; i++) {
			var boot = new GameObject(this.gl, this.texturesRequestedVsLoaded);
			boot.setSize(0.4, 0.4);
			boot.setPosition(this.bounds.start + 18.2,  - 2.0, 0.4);
			boot.setTexture("Assets/Textures/ProspectFishing/Boot.png");
			boot.setBoundingBox(0.4, 0.4, 0.0, 0.0);
			boot.gravity = 0.0;
			boot.retardation = 0.0;
			this.waterObjects.push(boot);
		}
        
        for (var i = 0; i < 3; i++) {
			var fish = new GameObject(this.gl, this.texturesRequestedVsLoaded);
			fish.setSize(0.4, 0.4);
			fish.setPosition(this.bounds.start + 18.2,  - 2.0, 0.4);
			fish.setTexture("Assets/Textures/ProspectFishing/Fish.png");
			fish.setBoundingBox(0.4, 0.4, 0.0, 0.0);
			fish.gravity = 0.0;
			fish.retardation = 0.0;
			this.waterObjects.push(fish);
		}
        
        this.scoreCounter = new GameObject(this.gl, this.texturesRequestedVsLoaded);
        this.scoreCounter.setTexture("Assets/Textures/ScoreCounter.png");
        this.scoreCounter.setUV(0.0, 0.0, 1.0, 0.16667);
        this.scoreCounter.setPosition(this.bounds.start + 12.0, -0.4, 0.8);
        this.scoreCounter.setSize(0.51, 0.36);
	}

	startFishingMiniGame() {
		this.fishingMiniGame = true;
		this.bait.setPosition(this.fishingRod.position.x + this.fishingRod.size.x - this.bait.size.x * 0.5, this.fishingRod.position.y + this.fishingRod.size.y - this.bait.size.y * 0.5, 0.6);
	}

	respawnWaterObject(theObject) {
		var randomSide = Math.random();
		if (randomSide < 0.5) {
			theObject.setPosition(
				this.camera.posX + this.camera.left - theObject.size.x * 1.0,
				Math.random() * Math.abs(this.camera.posY + this.camera.bottom + 0.7 + theObject.size.y) + this.camera.posY + this.camera.bottom,
				0.5);
			theObject.setMovement(Math.random() * 1.0 + 0.8, 0.0);
		} else {
			theObject.setPosition(
				this.camera.posX + this.camera.right,
				Math.random() * Math.abs(this.camera.posY + this.camera.bottom + 0.7 + theObject.size.y) + this.camera.posY + this.camera.bottom,
				0.5);
			theObject.setMovement(-Math.random() * 1.0 - 0.8, 0.0);
		}
	}

	update(dt) {
		for (var i = 0; i < this.invisibleWalls.length; i++) {
			this.physics.solveCollision(this.character.gameObject, this.invisibleWalls[i], true, false);
		}

		if (this.displayRod) {
			this.fishingRod.setPosition(this.character.gameObject.position.x + 0.4, this.character.gameObject.position.y + 0.54, 0.4);
		}

		if (this.fishingMiniGame) {
			this.character.gameObject.getMovementBlock().yPos = true; //Do not allow jumping
			this.fishingLine.setSize(0.03, this.fishingRod.position.y + this.fishingRod.size.y - this.bait.position.y - this.bait.size.y * 0.5);
			this.fishingLine.setPosition(this.fishingRod.position.x + this.fishingRod.size.x, this.fishingRod.position.y + this.fishingRod.size.y - this.fishingLine.size.y, 0.6);
			this.bait.setPosition(this.fishingLine.position.x + (this.fishingLine.size.x - this.bait.size.x) * 0.5, this.bait.position.y, this.bait.position.z);

			if (this.bait.position.y > this.fishingRod.position.y + this.fishingRod.size.y - this.bait.size.y) { //Line reeled in completely
				this.bait.getMovementBlock().yPos = true;
				if (this.objectOnTheHook == 100) { //Money collected
					this.fishingMiniGameScore++;
                    this.scoreCounter.setUV(0.0, this.fishingMiniGameScore * 0.16667, 1.0, (this.fishingMiniGameScore + 1) * 0.16667);
                    this.audioPlayer.playSound("gold", false);
					this.money.setPosition(this.bounds.start + 18.2,  - 2.0, 0.5);
				} else if (this.objectOnTheHook != -1) {
					this.waterObjects[this.objectOnTheHook].setPosition(this.bounds.start + 18.2,  - 2.0, 0.5);
				}

				this.objectOnTheHook = -1;

			} else if (this.bait.position.y > -0.7) {
				this.bait.gravity = 9.82;
				this.baitInWater = false;
			} else if (this.bait.position.y > this.camera.posY + this.camera.bottom) {
				this.bait.gravity = 5.0;
				if (!this.baitInWater) { //Just entered water
					this.bait.getMovementBlock().yNeg = true;
                    this.audioPlayer.playSound("water", false);
				}
				this.baitInWater = true;
			} else {
				this.bait.getMovementBlock().yNeg = true;
				this.baitInWater = true;
			}

			this.bait.updatePhysics(dt);

			if (this.input.keys[38]) { //Up is pressed
				if (this.bait.position.y <  - 0.7) {
					this.bait.setMovement(0.0, 3.0);
				} else if (this.bait.position.y < this.fishingRod.position.y + this.fishingRod.size.y - this.bait.size.y * 0.5) {
					this.bait.setMovement(0.0, 5.0);
				}
			} else {
                if (this.bait.movement.y > 0) {
                    this.bait.movement.y = 0.0;
                }
            }

			//Anchor investor
			this.anchorInvestorTimer += dt;
			if (this.anchorInvestorTimer >= this.anchorInvestorRate) {
				this.anchorInvestorFrame = (this.anchorInvestorFrame + 1) % this.anchorInvestorFrames;
				if (this.anchorInvestorFrame < 4) {
					this.anchorInvestor.setUV(this.anchorInvestorLookingDirection,
						this.anchorInvestorFrame * 0.25,
						1.0 - this.anchorInvestorLookingDirection,
						(this.anchorInvestorFrame + 1) * 0.25);
				}
				this.anchorInvestorTimer -= this.anchorInvestorRate;

				if (this.anchorInvestorFrame == 2) {
					this.anchorInvestor.setMovement(this.anchorInvestor.movement.x, 1.8);
				}
			}

			if (this.anchorInvestor.position.y + this.anchorInvestor.boundingBox.offsetY < this.camera.posY + this.camera.bottom) {
				this.anchorInvestor.getMovementBlock().yNeg = true;
			}

			if ((this.anchorInvestor.position.x > this.camera.posX + this.camera.right + 0.5
					 || this.anchorInvestor.position.x < this.camera.posX + this.camera.left - this.anchorInvestor.size.x - 0.5)
				 && this.objectOnTheHook != 100) { //Investor outside of screen and money is not on hook
				this.respawnWaterObject(this.anchorInvestor);
				this.moneyBeingCarried = true;
				if (this.anchorInvestor.position.x > this.camera.posX) {
					this.anchorInvestorLookingDirection = 0; //Swimming left
				} else {
					this.anchorInvestorLookingDirection = 1; //Swimming right
				}
                this.anchorInvestorFrame = 0;
			}

			this.anchorInvestor.updatePhysics(dt);

			//Water objects
			for (var i = 0; i < this.waterObjects.length; i++) {
				if (this.waterObjects[i].position.x > this.camera.posX + this.camera.right + 0.5
					 || this.waterObjects[i].position.x < this.camera.posX + this.camera.left - this.waterObjects[i].size.x - 0.5) {
					this.respawnWaterObject(this.waterObjects[i]);
                    if (this.waterObjects[i].position.x > this.camera.posX) {
                        this.waterObjects[i].setUV(0.0, 0.0, 1.0, 1.0);
                    } else {
                        this.waterObjects[i].setUV(1.0, 0.0, 0.0, 1.0);
                    }
				}

				if (this.physics.solveCollision(this.bait, this.waterObjects[i], false, false) && this.objectOnTheHook == -1) {
					this.objectOnTheHook = i;
				}

				if (this.objectOnTheHook != i) {
					this.waterObjects[i].updatePhysics(dt);
				} else {
					this.waterObjects[i].setPosition(
						this.bait.position.x + (this.bait.size.x - this.waterObjects[i].size.x) * 0.5,
						this.bait.position.y + (this.bait.size.y - this.waterObjects[i].size.y) * 0.5,
						0.5);
				}
			}

			//Money
			if (this.objectOnTheHook == -1) {
				if (this.physics.solveCollision(this.bait, this.money, false, false)) {
					this.objectOnTheHook = 100;
					this.moneyBeingCarried = false;
				}
			}

			if (this.objectOnTheHook != 100) { //Money ID is 100
				if (this.moneyBeingCarried) {
					//Update money position according to investor
					this.money.setPosition(
						this.anchorInvestor.position.x + this.anchorInvestor.size.x * (0.75 - 0.75 * this.anchorInvestorLookingDirection),
						this.anchorInvestor.position.y + this.anchorInvestor.size.y * 0.65 - (Math.min(this.anchorInvestorFrame, 3) * 0.07),
						0.5);
					this.money.setRotation((Math.min(this.anchorInvestorFrame, 3) - 2) * (5.0 - (10.0 * this.anchorInvestorLookingDirection)));
				}
			} else { //Money on the hook
				this.money.setPosition(
					this.bait.position.x + (this.bait.size.x - this.money.size.x) * 0.5,
					this.bait.position.y + (this.bait.size.y - this.money.size.y) * 0.5,
					0.5);
			}

			if (this.fishingMiniGameScore == 5) { //Fishing game over
				this.fishingMiniGame = false;
                this.displayRod = false;
                this.character.setFisher(false);
                this.audioPlayer.playSound("achievement", false);
			}
		}
		this.waterParticles.update(dt);
	}

	drawBackground() {
		//this.backgroundObjects[0].setPosition(this.bounds.start * 0.9 + this.camera.posX * 0.1, -1.3 + this.camera.posY * 0.1, -3.0); //Clouds

		for (var i = 0; i < this.backgroundObjects.length; i++) {
			this.backgroundObjects[i].draw();
		}
	}

	drawForeground() {
		if (this.displayRod) {
			this.fishingRod.draw();
		}

		for (var i = 0; i < this.foregroundObjects.length; i++) {
			this.foregroundObjects[i].draw();
		}

		if (this.fishingMiniGame) {
            this.scoreCounter.draw();
            this.fishingLine.draw();

			if (this.objectOnTheHook == -1) {
				this.bait.draw();
			}
            
			this.anchorInvestor.draw();
			this.money.draw();

			for (var i = 0; i < this.waterObjects.length; i++) {
				this.waterObjects[i].draw();
			}
		}

		this.waterParticles.draw();
		this.water.draw();
	}
}
