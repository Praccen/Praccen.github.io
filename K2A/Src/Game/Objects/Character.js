class Character {
	constructor(gl, input, audioPlayer, texturesRequestedVsLoaded) {
		this.input = input;
        this.audioPlayer = audioPlayer;
        this.texturesRequestedVsLoaded = texturesRequestedVsLoaded;

		this.jumpWasPressed = false;

		this.acceleration = 20.0;
		this.defaultSpeed = 3.0;
		this.jumpForce = 5.0;

		this.gameObject = new GameObject(gl, this.texturesRequestedVsLoaded); //Graphical object
		this.gameObject.setSize(1.05, 1.8);
		this.gameObject.setBoundingBox(0.5, 1.5, 0.275, 0.0);
		this.gameObject.setPosition(0.5, 0.0, 0.0);
		this.gameObject.setTexture("Assets/Textures/Characters/Johan/JohanSpriteMap.png");
		this.gameObject.setMaxSpeed(this.defaultSpeed, this.jumpForce);

		this.gameObjectFishing = new GameObject(gl, this.texturesRequestedVsLoaded); //Graphical object
		this.gameObjectFishing.setSize(1.05, 1.8);
		this.gameObjectFishing.setPosition(0.5, 0.0, 0.0);
		this.gameObjectFishing.setTexture("Assets/Textures/Characters/Johan/JohanSpriteMapFishing.png");
		this.gameObjectFishing.setMaxSpeed(this.defaultSpeed, this.jumpForce);

		this.animationTimer = 0;
		this.animationRate = 0.5;
		this.animationFrameCounter = 0;
		this.animationFrames = 2;

		this.state = 0; //0 - idle, 1 - walking, 2 - jumping, 3 - falling, 4 - knocked, 5 - ringing bell
		this.prevState = 0;
		this.lookingDirection = 1;

		this.fisher = false;
        
        this.ringingBell = false;

		this.blinking = false;
		this.blinkTime = 0;
	}

	setMaxSpeed(maxSpeed) {
		this.gameObject.maxSpeed.x = maxSpeed;

		if (this.state == 1) { //Walking
			this.animationRate = 0.15 * this.defaultSpeed / this.gameObject.maxSpeed.x;
		}
	}

	updateUVs() {
		if (this.lookingDirection == 1) {
			this.gameObject.setUV(this.state * 0.16666, this.animationFrameCounter * 0.25, (this.state + 1) * 0.16666, (this.animationFrameCounter + 1) * 0.25);
            this.gameObjectFishing.setUV(this.state * 0.2, this.animationFrameCounter * 0.25, (this.state + 1) * 0.2, (this.animationFrameCounter + 1) * 0.25);
		} else {
			this.gameObject.setUV((this.state + 1) * 0.16666, this.animationFrameCounter * 0.25, this.state * 0.16666, (this.animationFrameCounter + 1) * 0.25);
            
            //Don't flip and play backwards if fisher and walking left
            this.gameObjectFishing.setUV(this.state * 0.2, (this.animationFrames - 1 - this.animationFrameCounter) * 0.25
            , (this.state + 1) * 0.2, (this.animationFrames - this.animationFrameCounter) * 0.25);
		}
	}

	blink(time) {
		this.blinking = true;
		this.blinkTime = time;
        this.audioPlayer.playSound("hit", false);
	}

	setFisher(fisherState) {
		this.fisher = fisherState;
	}
    
    ringBell(state) {
        this.ringingBell = state;
    }

	update(dt) {
		//----Input----
		var movement = this.gameObject.getMovement();
		var xAccel = 0;
		this.state = 0;
		if (!this.blinking) {

			if (this.input.keys[39]) { //Walk right
				this.state = 1;
				this.lookingDirection = 1;
				xAccel += this.acceleration;
			}
			if (this.input.keys[37]) { //Walk left
				if (this.state == 1) {
					this.state = 0;
				} else {
					this.state = 1;
				}
				this.lookingDirection = -1;
				xAccel -= this.acceleration;
			}

			if (this.input.keys[38]) { //Move up
				if (this.gameObject.getMovementBlock().yNeg) { //Standing on ground
					movement.y = this.jumpForce;
				}
				this.jumpWasPressed = true;
			} else {
				this.jumpWasPressed = false;
			}
		}

		if (!this.gameObject.getMovementBlock().yNeg) { //In air
			if (movement.y > 0.0) {
				this.state = 2; //Jumping
			} else {
				this.state = 3; //Falling
			}
		} else if (this.blinking) {
			this.state = 4;
		}
        
        if (this.ringingBell) {
            this.state = 5;
        }

		this.gameObject.setMovement(movement.x, movement.y);
		this.gameObject.setAcceleration(xAccel, 0);
		this.gameObject.updatePhysics(dt);

		this.gameObjectFishing.setPosition(this.gameObject.position.x, this.gameObject.position.y, this.gameObject.position.z);
		//-------------

		//----Animation----
		if (this.state != this.prevState) { //State changed
			this.animationFrameCounter = 0;

			if (this.state == 0) { //Idle
				this.animationFrames = 2;
				this.animationRate = 0.5;

			} else if (this.state == 1) { //Walking
				this.animationFrames = 4;
				this.animationRate = 0.15 * this.defaultSpeed / this.gameObject.maxSpeed.x;
			} else if (this.state < 5) { //Jumping, Falling, or Knocked
				this.animationFrames = 1;
			} else { //Ringing bell
                this.animationFrames = 2;
                this.animationRate = 0.1;
            }
		}
        
		this.animationTimer += dt;
		if (this.animationTimer > this.animationRate) {
			this.animationFrameCounter = (this.animationFrameCounter + 1) % this.animationFrames;
			this.animationTimer = 0;
            
            if (this.state == 1 && (this.animationFrameCounter % 2) == 0) { //Walking
                this.audioPlayer.setTime("footsteps", 0.0);
                this.audioPlayer.playSound("footsteps", false);
            }
		}

		this.prevState = this.state;
		//-----------------

		if (this.blinking) {
			this.blinkTime -= dt;
			if (this.blinkTime < 0.0) {
				this.blinking = false;
			}
		}

		this.updateUVs();
	}

	draw() {
		if (this.fisher) {
			if (this.blinking) {
				if (this.blinkTime % 0.2 < 0.14) {
					this.gameObjectFishing.draw();
				}
			} else {
				this.gameObjectFishing.draw();
			}
		} else {
			if (this.blinking) {
				if (this.blinkTime % 0.2 < 0.14) {
					this.gameObject.draw();
				}
			} else {
				this.gameObject.draw();
			}
		}
	}
}
