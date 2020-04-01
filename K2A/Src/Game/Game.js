class Game {
	constructor(gl, texturesRequestedVsLoaded) {
		this.gl = gl;
        this.texturesRequestedVsLoaded = texturesRequestedVsLoaded;
		this.camera = new Camera(gl);
		this.camera.setMinPositions(4.0, 1.0);
        this.audioPlayer = new AudioPlayer();
		this.input = new Input(gl, this.camera, this.audioPlayer, this.texturesRequestedVsLoaded);
		this.character = new Character(gl, this.input, this.audioPlayer, this.texturesRequestedVsLoaded);
		this.physics = new Physics();

		this.levels = [];
		this.reloadLevels();
		this.numberOfLevels = this.levels.length;

		this.levelsActive = [];
		this.levelScores = [];
        
		for (var i = 0; i < this.numberOfLevels; i++) {
			this.levelsActive.push(false);
			this.levelScores.push(50.0);
		}
        
        this.scoreSubmitted = false;

		this.transitionHandler = new TransitionHandler(this.gl, this.camera, this.input, this.character, this.levels, this.audioPlayer, this.texturesRequestedVsLoaded);
	}

	reloadLevels() {
		this.levels.length = 0;
		this.levels.push(new Level1(this.gl, this.camera, this.input, this.character, this.physics, this.audioPlayer, this.texturesRequestedVsLoaded));
		this.levels.push(new Level2(this.gl, this.camera, this.input, this.character, this.physics, this.audioPlayer, this.texturesRequestedVsLoaded));
		this.levels.push(new Level3(this.gl, this.camera, this.input, this.character, this.physics, this.audioPlayer, this.texturesRequestedVsLoaded));
		this.levels.push(new Level4(this.gl, this.camera, this.input, this.character, this.physics, this.audioPlayer, this.texturesRequestedVsLoaded));
		this.levels.push(new Level5(this.gl, this.camera, this.input, this.character, this.physics, this.audioPlayer, this.texturesRequestedVsLoaded));
		this.levels.push(new Level6(this.gl, this.camera, this.input, this.character, this.physics, this.audioPlayer, this.texturesRequestedVsLoaded));
	}

	update(dt) {
		for (var i = 0; i < this.numberOfLevels; i++) {
			if (this.camera.posX + this.camera.left < this.levels[i].bounds.end && this.camera.posX + this.camera.right > this.levels[i].bounds.start) {
				/*if (!this.levelsActive[i]) {
				console.log("Activated level " + i);
				}*/
				this.levelsActive[i] = true;
			} else {
				/*if (this.levelsActive[i]) {
					console.log("Deactivated level " + i);
				}*/
				this.levelsActive[i] = false;
			}
		}

		//Block character from going outside of frustum
		if (this.character.gameObject.position.x + this.character.gameObject.boundingBox.x + this.character.gameObject.boundingBox.offsetX > this.camera.posX + this.camera.right) {
			this.character.gameObject.movementBlock.xPos = true;
		}

		if (this.character.gameObject.position.x + this.character.gameObject.boundingBox.offsetX < this.camera.posX + this.camera.left) {
			this.character.gameObject.movementBlock.xNeg = true;
		}

		this.transitionHandler.update(dt);
		this.input.update(dt);
		this.character.update(dt);

		for (var i = 0; i < this.numberOfLevels; i++) {
			if (this.levelsActive[i]) {
				this.levels[i].update(dt);
			}
		}
        
		if (this.character.gameObject.position.x > this.transitionHandler.transitionStartPositions[8]) { //Game completed!
            if (!this.scoreSubmitted) {
                this.levels[5].provideScores(this.levelScores);
                this.scoreSubmitted = true;
            }
		} else if (this.transitionHandler.transition > 0) { //Intro is over
            //Update level score
			for (var i = 0; i < this.numberOfLevels; i++) {
				if (this.character.gameObject.position.x > this.levels[i].bounds.start
					 && this.character.gameObject.position.x < this.levels[i].bounds.end) {
					this.levelScores[i] -= dt;
				}
			}
        }
        
		this.camera.setPosition(this.character.gameObject.position.x + 0.525, 1.3 + this.character.gameObject.position.y * 0.5);
	}

	draw() {
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

		for (var i = this.numberOfLevels - 1; i >= 0; i--) {
			if (this.levelsActive[i]) {
				this.levels[i].drawBackground();
			}
		}

		this.character.draw();

		for (var i = this.numberOfLevels - 1; i >= 0; i--) {
			if (this.levelsActive[i]) {
				this.levels[i].drawForeground();
			}
		}

		this.input.draw();

		this.transitionHandler.draw();
	}
}
