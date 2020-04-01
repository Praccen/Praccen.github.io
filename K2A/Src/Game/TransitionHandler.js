class TransitionHandler {
	constructor(gl, camera, input, character, levels, audioPlayer, texturesRequestedVsLoaded) {
		this.gl = gl;
		this.camera = camera;
		this.input = input;
		this.character = character;
		this.levels = levels;
        this.audioPlayer = audioPlayer;
        this.texturesRequestedVsLoaded = texturesRequestedVsLoaded;
		this.transition = 0;
		this.timer = 0.0;
		this.counter = 0;

		this.transitionStartPositions = [];
		this.transitionStartPositions.push(1.5); // 0
		this.transitionStartPositions.push(this.levels[1].bounds.start - 1.0); // 1
		this.transitionStartPositions.push(this.levels[1].houseFactory.position.x - 1.5); // 2
		this.transitionStartPositions.push(this.levels[1].houseFactory.position.x - 1.5); //3
		this.transitionStartPositions.push(this.levels[2].bounds.start + 13.7); // 4
		this.transitionStartPositions.push(this.levels[2].bounds.start + 13.7); // 5
		this.transitionStartPositions.push(this.levels[4].bounds.start); // 6
        this.transitionStartPositions.push(this.levels[5].bounds.start - 2.0); //7
        this.transitionStartPositions.push(this.levels[5].bounds.start + 5.0); //8

		this.introScreen = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		this.introScreen.setTexture("Assets/Textures/IntroScreen.png");
		this.introScreen.setSize(8.0, 4.5);
		this.introScreen.setPosition(0.0, -0.95, 0.8);

		this.infoBox = new GameObject(this.gl, this.texturesRequestedVsLoaded);
		this.infoBox.setTexture("Assets/Textures/InfoBoxesFixed.png");
		this.infoBox.setSize(7.0, 0.546);
		this.infoBox.setFade(0.0);
		this.infoBoxFadeTime = 0.5;
		this.infoBoxTimer = 0.0;
		this.infoBoxLimit = 0.0;
		this.infoBoxNrOfMessages = 6;
		this.infoBoxUVRatio = 1.0 / this.infoBoxNrOfMessages;
        this.infoBoxScreenPos = {
            x: 0.0,
            y: 0.0
        }
        
        this.blackBars = new GameObject(this.gl, this.texturesRequestedVsLoaded);
        this.blackBars.setTexture("Assets/Textures/BlackBars.png");
        this.blackBars.setSize(8.1, 0.6);
        this.blackBarsFadeTime = 1.0;
        this.blackBarsTimer = 0.0;
		this.blackBarsLimit = 0.0;
        this.blackBarsProgress = 0.0;
	}

	walkRight(speed) {
		this.character.setMaxSpeed(speed);
		this.input.keys[37] = false;
		this.input.keys[38] = false;
		this.input.keys[39] = true;
	}

	walkLeft(speed) {
		this.character.setMaxSpeed(speed);
		this.input.keys[37] = true;
		this.input.keys[38] = false;
		this.input.keys[39] = false;
	}

	standStill() {
		this.input.keys[37] = false;
		this.input.keys[38] = false;
		this.input.keys[39] = false;
	}
    
	displayInfoBox(contentNumber, displayLimit, xPos, yPos) {
		if (contentNumber < this.infoBoxNrOfMessages) {
			this.infoBox.setUV(0.0, contentNumber * this.infoBoxUVRatio, 1.0, (contentNumber + 1) * this.infoBoxUVRatio);
			this.infoBoxLimit = displayLimit;
			this.infoBoxTimer = 0.0;
            this.infoBoxScreenPos.x = xPos;
            this.infoBoxScreenPos.y = yPos;
		}
	}
    
    displayBlackBars(displayLimit) {
        this.blackBarsLimit = displayLimit;
        this.blackBarsTimer = 0.0;
    }
    
	update(dt) {
		if (this.transition == 0) {
			this.timer += dt;
			this.levels[0].projectileSpawnClock = 0.0;
			this.standStill();

			if (this.timer < 5.0 && this.counter == 0) {
            }
			else if (this.counter == 0) {
                this.displayInfoBox(0, 10000.0, 0.5, 0.1); 
                this.counter++;
            }
            else if (this.counter == 1) {
                if (this.input.listenForAnyInteraction()) {
                    this.displayInfoBox(0, 0.5, 0.5, 0.1);
                    this.counter++;
                    this.timer = 0.0;
                    this.displayBlackBars(100.0);
                }
            }

			if (this.counter > 1) {
				if (this.timer < 4.0) {
                    this.audioPlayer.playSound("concreteSong", true);
                    this.audioPlayer.setVolume("concreteSong", 0.3);
					this.introScreen.setFade(Math.max((1.0 - (this.timer) * 0.5), 0.0));
				} else if (this.timer < 7.0) {
					this.levels[0].antagonistSpeech(1);
				} else if (this.timer < 10.0) {
					this.levels[0].antagonistSpeech(2);
				} else if (this.timer < 12.0) {
					if (this.counter == 2) {
						this.levels[0].dropProjectile(0.5);
						this.counter = 3;
                        this.displayBlackBars(2.0);
					}
					this.camera.setMinPositions(this.levels[0].bounds.start + 4.0 + Math.sin(this.timer % 0.1) * 0.3, 1.0);
				} else {
					this.standStill();
					this.displayInfoBox(1, 5.0, 0.5, 1.25);

					this.levels[0].antagonistSpeech(-1);
					this.camera.setMinPositions(this.levels[0].bounds.start + 4.0, 1.0);

					this.timer = 0.0;
					this.counter = 0;
					this.transition++;
				}
			}
		} else if (this.transition == 1) {
			if (this.character.gameObject.position.x >= this.transitionStartPositions[this.transition]) {
				this.timer += dt;
				if (this.camera.posX < this.levels[1].bounds.start + 4.01) {
					this.camera.setMinPositions(this.camera.posX + dt, 1.0);
					var progress = (this.camera.posX - (this.levels[1].bounds.start - 1.0)) * 0.2;
					this.gl.clearColor(0.55 + 0.12 * progress, 0.55 + 0.29 * progress, 0.65 + 0.35 * progress, 1.0);
                    this.audioPlayer.setVolume("concreteSong", Math.max(0.3 - progress * 0.75, 0.0));
				}

				if (this.character.gameObject.position.x < this.levels[1].bounds.start + 0.5) {
					this.walkRight(1.5);
					this.timer = 0.0;
				} else if (this.timer < 1.0) {
					this.standStill();
				} else if (this.timer < 2.0) {
					this.standStill();
					if (this.counter == 0) {
						this.levels[1].plantSapling(this.character.gameObject.position.x + 0.5);
						this.counter++;
                        this.audioPlayer.pauseSound("concreteSong");
                        this.audioPlayer.playSound("forestSong", true);
                        this.audioPlayer.setVolume("forestSong", 0.6);
					}
				} else if (this.timer < 3.0) {
					this.walkRight(1.5);
				} else if (this.timer < 3.5) {
					this.levels[1].saplingParticles.setSpawnPosition(0.0, -6.0);
					this.levels[1].saplingParticles.spread.x = 0.5;
					this.levels[1].saplingParticles.spread.y = 0.5;
					this.standStill();
				} else {
					this.standStill();
					this.character.setMaxSpeed(3.0);
					this.transition++;
					this.timer = 0.0;
					this.counter = 0;
				}
			}
		} else if (this.transition == 2) {
			if (this.camera.posX >= this.transitionStartPositions[this.transition]) {
				this.camera.setMinPositions(this.levels[1].houseFactory.position.x - 1.5, 1);
				this.camera.setMaxPositions(this.levels[1].houseFactory.position.x - 1.5, 100);
				this.levels[1].startFactoryMiniGame();
				this.displayInfoBox(2, 5.0, 0.5, 1.25);
				this.transition++;
			}
		} else if (this.transition == 3) {
			if (this.camera.posX > this.transitionStartPositions[this.transition]) {
				this.timer += dt;

				if (this.timer < 1.5) {
					this.standStill();
					this.camera.setMinPositions(this.levels[1].houseFactory.position.x - 1.5 + this.timer * 2.0, 0);
					this.camera.setMaxPositions(this.levels[1].houseFactory.position.x - 1.5 + this.timer * 2.0, 100.0);
				} else if (this.character.gameObject.position.x < this.levels[1].houseFactory.position.x + 2.5) {
					this.camera.setMaxPositions(100.0, 100.0);
					this.walkRight(1.5);
				} else {
					this.camera.setMaxPositions(100.0, 100.0);
					this.standStill();
					this.character.setMaxSpeed(3.0);
					this.levels[1].produceHouseFromFactory();

					this.transition++;
					this.timer = 0.0;
					this.counter = 0;
				}
			}
		} else if (this.transition == 4) {
			if (this.camera.posX >= this.transitionStartPositions[this.transition]) {
				this.camera.setMinPositions(this.levels[2].bounds.start + 13.7, 1.0);
				this.camera.setMaxPositions(this.levels[2].bounds.start + 13.7, 1.3);
				this.levels[2].startReceiptMiniGame();
				this.displayInfoBox(3, 5.0, 0.5, 1.25);
                this.audioPlayer.pauseSound("forestSong");
                this.audioPlayer.playSound("battleSong", true);
                this.audioPlayer.setVolume("battleSong", 0.1);
				this.transition++;
			}
		} else if (this.transition == 5) {
			if (this.camera.posX > this.transitionStartPositions[this.transition]) {
				var done = true;
				this.standStill();
				if (this.camera.posX < this.levels[3].bounds.start + 4.0) {
					this.camera.setMinPositions(this.camera.posX + 1.5 * dt, this.camera.minPositions.y);
					this.camera.setMaxPositions(this.camera.posX + 1.5 * dt, 100);
					done = false;
				}

				if (this.camera.posY < 2.0) {
					this.camera.setMinPositions(this.camera.minPositions.x, this.camera.posY + 0.2 * dt);
					this.camera.setMaxPositions(this.camera.maxPositions.x, this.camera.posY + 0.2 * dt);
					done = false;
				}

				if (this.character.gameObject.position.x < this.levels[3].bounds.start + 3.475) {
					this.walkRight(1.5);
					done = false;
				}

				if (done) {
					this.camera.setMaxPositions(1000.0, 100.0);
					this.standStill();
					this.character.setMaxSpeed(3.0);
					this.levels[3].startJudgeMiniGame();
					this.displayInfoBox(4, 5.0, 0.5, 1.25);
					this.transition++;
				}
			}
		} else if (this.transition == 6) {
			if (this.character.gameObject.position.x > this.transitionStartPositions[this.transition]) {
				var done = true;
				if (this.camera.posX < this.levels[4].bounds.start + 12.2) {
					if (this.camera.posX < this.character.gameObject.position.x) {
						this.camera.setMaxPositions(this.camera.posX + 3.0 * dt, this.camera.maxPositions.y);
						this.camera.setMinPositions(this.camera.posX + 3.0 * dt, this.camera.minPositions.y);
					} else {
						this.camera.setMaxPositions(this.camera.posX + 1.5 * dt, this.camera.maxPositions.y);
						this.camera.setMinPositions(this.camera.posX + 1.5 * dt, this.camera.minPositions.y);
					}
					done = false;
				}

				if (this.camera.posY > 1.0) {
					this.camera.setMaxPositions(this.camera.maxPositions.x, this.camera.posY - dt);
					this.camera.setMinPositions(this.camera.minPositions.x, this.camera.posY - dt);
					done = false;
				}

				if (this.camera.posY > -0.3 && this.camera.posX > this.levels[4].bounds.start + 10.5) {
					this.camera.setMaxPositions(this.camera.maxPositions.x, this.camera.posY - dt);
					this.camera.setMinPositions(this.camera.minPositions.x, this.camera.posY - dt);
					done = false;
				}

				if (this.character.gameObject.position.x < this.levels[4].bounds.start + 11.5) {
					this.walkRight(1.5);
					done = false
				} else {
					this.standStill();
				}

				if (this.character.gameObject.position.x > this.levels[4].bounds.start + 3.6) {
					this.character.setFisher(true);
                    this.levels[4].displayRod = true;
				}

				if (done) {
					this.transition++;
					this.character.setMaxSpeed(3.0);
					this.standStill();
                    this.levels[4].startFishingMiniGame();
					this.displayInfoBox(5, 6.0, 0.5, 3.0);
				}
			}
		} else if (this.transition == 7) {
            if (!this.character.fisher) {
				this.standStill();
                if (this.camera.posY < 1.3) {
                    this.camera.setMaxPositions(this.camera.maxPositions.x, this.camera.maxPositions.y + dt);
                } else {
                    this.camera.setMaxPositions(1000.0, 100.0);
                    this.camera.setMinPositions(this.camera.minPositions.x, 1.0);
                    this.transition++;
                }
            }
        } else if (this.transition == 8) { 
            if (this.character.gameObject.position.x > this.transitionStartPositions[this.transition]) { //Game completed!
                this.input.drawHud = false;
                if (this.character.gameObject.position.x < this.levels[5].bounds.end - 3.5) {
                    this.walkRight(2.0);
                    this.camera.setMaxPositions(this.levels[5].bounds.end - 5.625, this.camera.maxPositions.y);
                } else if (this.timer < 5.0) {
                    this.levels[5].drawCountDown(5 - Math.floor(this.timer));
                    this.audioPlayer.setVolume("battleSong", Math.max(0.1 - this.timer * 0.02, 0.0));
                    this.timer += dt;
                    this.standStill();
                }
                else if (this.counter == 0) {
                    this.levels[5].drawCountDown(-1);
                    this.levels[5].drawScore();
                    this.standStill();
                    this.character.ringBell(true);
                    this.audioPlayer.pauseSound("battleSong");
                    this.counter++;
                } else {
                    this.standStill();
                }
            }
        }

		if (this.infoBoxTimer < this.infoBoxLimit) {
            if (this.infoBoxLimit - this.infoBoxTimer < this.infoBoxFadeTime) { //Fade out
				this.infoBox.setFade((this.infoBoxLimit - this.infoBoxTimer) / this.infoBoxFadeTime);
			} else if (this.infoBoxTimer < this.infoBoxFadeTime) { //Fade in
				this.infoBox.setFade(this.infoBoxTimer / this.infoBoxFadeTime);
			}  else {
				this.infoBox.setFade(1.0);
			}

			this.infoBoxTimer += dt;
		}
        
        if (this.blackBarsTimer < this.blackBarsLimit) {
            if (this.blackBarsLimit - this.blackBarsTimer < this.blackBarsFadeTime) { //Fade out
                this.blackBarsProgress = (this.blackBarsLimit - this.blackBarsTimer) / this.blackBarsFadeTime;
            } else if (this.blackBarsTimer < this.blackBarsFadeTime) { //Fade in
                this.blackBarsProgress = Math.max(this.blackBarsTimer / this.blackBarsFadeTime, this.blackBarsProgress);
            } else {
                this.blackBarsProgress = 1.0;
            }
            this.blackBarsTimer += dt;
        }
	}

	draw() {
		this.introScreen.draw();

		if (this.infoBoxTimer < this.infoBoxLimit) {
            this.infoBox.setPosition(this.camera.posX + this.camera.left + this.infoBoxScreenPos.x, this.camera.posY + this.camera.bottom + this.infoBoxScreenPos.y, 0.8);
			this.infoBox.draw();
		}
        
        if (this.blackBarsTimer < this.blackBarsLimit) {
            this.blackBars.setPosition(this.camera.posX + this.camera.left - 0.05, this.camera.posY + this.camera.top - this.blackBarsProgress * 0.5, 0.85);
            this.blackBars.draw();
            this.blackBars.setPosition(this.camera.posX + this.camera.left - 0.05, this.camera.posY + this.camera.bottom - 0.6 + this.blackBarsProgress * 0.5, 0.85);
            this.blackBars.draw();
        }
	}
}
