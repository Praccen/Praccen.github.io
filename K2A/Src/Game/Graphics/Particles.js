class Particles {
	constructor(gl) {
		this.gl = gl;

		this.position = {
			x: 0,
			y: 0,
			z: 1
		}

		this.spawnPosition = {
			x: -5,
			y: 0
		};

		this.particlesArray = [];

		this.gravity = 9.82;
		this.retardation = 20.0;
		this.direction = {
			x: 0,
			y: 0
		}
		this.spread = {
			x: 2.0,
			y: 2.0
		};
		this.spawnRate = 0.1;
		this.spawnTimer = 0.0;
		this.particleLimit = 20;
		this.particleSize = 0.1;
		this.useSpawnTimer = false;

		this.modelMatrix = new Matrix4();
		this.mmNeedsUpdate = true;
        
        this.fade = 1.0;

		//----GL----
		// Shader positions
		this.a_Position = gl.getAttribLocation(gl.program, 'a_Position');
		this.a_UV = gl.getAttribLocation(gl.program, "a_UV");
		this.u_World = gl.getUniformLocation(gl.program, "u_World");
		this.u_Texture = gl.getUniformLocation(gl.program, "u_texture");
        this.u_Fade = gl.getUniformLocation(gl.program, "u_fade");

		var self = this;
		function setGeometry(gl) {
			var data = {
				usage: gl.STATIC_DRAW,
				mode: gl.TRIANGLES,
				fsize: null,
				n: 0,
				vertex: new Float32Array([])
			};

			data.fsize = data.vertex.BYTES_PER_ELEMENT;

			return data;
		}

		this.data = setGeometry(gl);

		// Create buffers
		this.vertexBuffer = gl.createBuffer();

		//Bind buffers
		gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);

		// Write data into the buffer object
		gl.bufferData(gl.ARRAY_BUFFER, this.data.vertex, this.data.usage);

		// Define parts for position
		gl.vertexAttribPointer(this.a_Position, 2, gl.FLOAT, false, this.data.fsize * 4, 0);
		gl.enableVertexAttribArray(this.a_Position);

		// Define parts for UV
		gl.vertexAttribPointer(this.a_UV, 2, gl.FLOAT, false, this.data.fsize * 4, this.data.fsize * 2);
		gl.enableVertexAttribArray(this.a_UV);

		// Create a texture.
		this.texture = gl.createTexture();
		gl.bindTexture(gl.TEXTURE_2D, this.texture);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

		// Fill texture with translucent as default
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,
			new Uint8Array([0, 0, 0, 0]));

		this.gl = gl;
		//----------
	}

	setSpawnPosition(positionX, positionY) {
		this.spawnPosition.x = positionX;
		this.spawnPosition.y = positionY;
	}

	updateModelMatrix() {
		var tempMatrix = new Matrix4();
		tempMatrix.translate(this.position.x, this.position.y, this.position.z);
		this.modelMatrix = tempMatrix;

		this.mmNeedsUpdate = false;
	}

	setPosition(positionX, positionY, positionZ) {
		this.position.x = positionX;
		this.position.y = positionY;
		this.position.z = positionZ;
		this.mmNeedsUpdate = true;
	}

	setTexture(texturePath) {
		var self = this;
		// Load an image
		var img = new Image();
		img.src = texturePath;
		img.addEventListener('load', function () {
			// Now that the image has loaded make copy it to the texture.
			self.gl.bindTexture(self.gl.TEXTURE_2D, self.texture);
			self.gl.texImage2D(self.gl.TEXTURE_2D, 0, self.gl.RGBA, self.gl.RGBA, self.gl.UNSIGNED_BYTE, img);
		});
	}
    
    setFade(newFade) {
        this.fade = newFade;
    }

	spawnParticle() {
		var tempParticle = {
			position: {
				x: this.spawnPosition.x,
				y: this.spawnPosition.y
			},
			movement: {
				x: this.direction.x + (Math.random() - 0.5) * this.spread.x * 2.0,
				y: this.direction.y + (Math.random() - 0.5) * this.spread.y * 2.0
			}
		}
		this.particlesArray.push(tempParticle);

		if (this.particlesArray.length > this.particleLimit) {
			this.particlesArray.splice(0, this.particlesArray.length - this.particleLimit);
		}

		this.data.vertex = new Float32Array(this.particlesArray.length * 24);
	}

	spawnParticles(numberOfParticles) {
		for (var i = 0; i < numberOfParticles; i++) {
			this.spawnParticle();
		}
	}

	update(dt) {
		this.spawnTimer += dt;
		while (this.spawnTimer >= this.spawnRate && this.useSpawnTimer) {
			this.spawnParticle();

			this.spawnTimer -= this.spawnRate;
		}

		for (var i = 0; i < this.particlesArray.length; i++) {
			//Update physics
			this.particlesArray[i].movement.y -= this.gravity * dt;
			this.particlesArray[i].movement.x -= Math.sign(this.particlesArray[i].movement.x) * this.retardation * dt;
			this.particlesArray[i].position.x += this.particlesArray[i].movement.x * dt;
			this.particlesArray[i].position.y += this.particlesArray[i].movement.y * dt;

			this.data.vertex[i * 24] = this.particlesArray[i].position.x + this.particleSize;
			this.data.vertex[i * 24 + 1] = this.particlesArray[i].position.y + this.particleSize;
			this.data.vertex[i * 24 + 2] = 1.0;
			this.data.vertex[i * 24 + 3] = 0.0;
			this.data.vertex[i * 24 + 4] = this.particlesArray[i].position.x;
			this.data.vertex[i * 24 + 5] = this.particlesArray[i].position.y + this.particleSize;
			this.data.vertex[i * 24 + 6] = 0.0;
			this.data.vertex[i * 24 + 7] = 0.0;
			this.data.vertex[i * 24 + 8] = this.particlesArray[i].position.x;
			this.data.vertex[i * 24 + 9] = this.particlesArray[i].position.y;
			this.data.vertex[i * 24 + 10] = 0.0;
			this.data.vertex[i * 24 + 11] = 1.0;
			this.data.vertex[i * 24 + 12] = this.particlesArray[i].position.x + this.particleSize;
			this.data.vertex[i * 24 + 13] = this.particlesArray[i].position.y + this.particleSize;
			this.data.vertex[i * 24 + 14] = 1.0;
			this.data.vertex[i * 24 + 15] = 0.0;
			this.data.vertex[i * 24 + 16] = this.particlesArray[i].position.x;
			this.data.vertex[i * 24 + 17] = this.particlesArray[i].position.y;
			this.data.vertex[i * 24 + 18] = 0.0;
			this.data.vertex[i * 24 + 19] = 1.0;
			this.data.vertex[i * 24 + 20] = this.particlesArray[i].position.x + this.particleSize;
			this.data.vertex[i * 24 + 21] = this.particlesArray[i].position.y;
			this.data.vertex[i * 24 + 22] = 1.0;
			this.data.vertex[i * 24 + 23] = 1.0;
		}

		this.data.n = 6 * this.particlesArray.length;

		//Bind buffers
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuffer);

		// Write data into the buffer object
		this.gl.bufferData(this.gl.ARRAY_BUFFER, this.data.vertex, this.data.usage);
	}

	draw() {
		if (this.data.n > 0) {
			if (this.mmNeedsUpdate) {
				this.updateModelMatrix();
			}

			this.gl.uniformMatrix4fv(this.u_World, false, this.modelMatrix.elements);
			this.gl.uniform1i(this.u_Texture, 0);
			this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
            this.gl.uniform1f(this.u_Fade, this.fade);

			//Bind buffers
			this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuffer);

			// Define parts for position
			this.gl.vertexAttribPointer(this.a_Position, 2, this.gl.FLOAT, false, this.data.fsize * 4, 0);
			this.gl.enableVertexAttribArray(this.a_Position);

			// Define parts for UV
			this.gl.vertexAttribPointer(this.a_UV, 2, this.gl.FLOAT, false, this.data.fsize * 4, this.data.fsize * 2);
			this.gl.enableVertexAttribArray(this.a_UV);

			this.gl.drawArrays(this.data.mode, 0, this.data.n);
		}
	}
}
