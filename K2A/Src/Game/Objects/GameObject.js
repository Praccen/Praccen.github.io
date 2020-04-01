class GameObject {
	constructor(gl, texturesRequestedVsLoaded) {
        this.texturesRequestedVsLoaded = texturesRequestedVsLoaded;
        
		this.position = {
			x: 0,
			y: 0,
			z: 0
		};
        
        this.rotation = 0;
        this.rotateAroundOrigo = false;

		this.size = {
			x: 1,
			y: 1
		}

        //----Physics----
		this.boundingBox = {
			x: 1.0,
			y: 1.0,
            offsetX: 0.0,
            offsetY: 0.0
		}
        this.acceleration = {
            x:0,
            y:0
        }
        this.movement = {
			x: 0,
			y: 0
		}
		this.movementBlock = {
			xPos: false,
            xNeg: false,
			yPos: false,
            yNeg: false
		}
        
        this.maxSpeed = {
            x: 100,
            y: 100
        } 
		this.retardation = 20.0;
		this.gravity = 9.82;
        //---------------

        this.fade = 1.0;

		this.modelMatrix = new Matrix4();
        this.mmNeedsUpdate = true;

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
				n: 6,
				vertex: new Float32Array([
						// Create a cube

						//  v1------v0
						//  |       |
						//  |       |
						//  |       |
						//  v2------v3

						// Vertex coordinates and uv-coords
						/* eslint-disable indent */
						1.0, 1.0, 1.0, 0.0, // v0
						0.0, 1.0, 0.0, 0.0, // v1
						0.0, 0.0, 0.0, 1.0, // v2
                        1.0, 1.0, 1.0, 0.0, // v0
						0.0, 0.0, 0.0, 1.0, // v2
						1.0, 0.0, 1.0, 1.0, // v3
						/* eslint-enable indent */
					])
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

	updateModelMatrix() {
		var tempMatrix = new Matrix4();
		tempMatrix.translate(this.position.x, this.position.y, this.position.z);
        if (this.rotation != 0.0) {
            if (!this.rotateAroundOrigo) {
                tempMatrix.translate(this.size.x * 0.5, this.size.y * 0.5, 0.0);
                tempMatrix.rotate(this.rotation, 0.0, 0.0, -1.0);
                tempMatrix.translate(-this.size.x * 0.5, -this.size.y * 0.5, 0.0);
            } else {
                tempMatrix.rotate(this.rotation, 0.0, 0.0, -1.0);
            }
        }
		tempMatrix.scale(this.size.x, this.size.y, 1);
		this.modelMatrix = tempMatrix;

		this.mmNeedsUpdate = false;
	}

	setPosition(positionX, positionY, positionZ) {
		this.position.x = positionX;
		this.position.y = positionY;
		this.position.z = positionZ;
		this.mmNeedsUpdate = true;
	}

	setSize(sizeX, sizeY) {
		this.size.x = sizeX;
		this.size.y = sizeY;
		this.mmNeedsUpdate = true;
	}
    
    setRotation(rotation) {
        this.rotation = rotation;
		this.mmNeedsUpdate = true;
    }
    
    setRotationAroundOrigo(state) {
        this.rotateAroundOrigo = state;
    }

	setUV(x0, y0, x1, y1) {
		this.data.vertex[2] = x1;
		this.data.vertex[3] = y0;
        
		this.data.vertex[6] = x0;
		this.data.vertex[7] = y0;
        
		this.data.vertex[10] = x0;
		this.data.vertex[11] = y1;
        
        this.data.vertex[14] = x1;
		this.data.vertex[15] = y0;
        
		this.data.vertex[18] = x0;
		this.data.vertex[19] = y1;
        
		this.data.vertex[22] = x1;
		this.data.vertex[23] = y1;
        
        //Bind buffers
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuffer);
        
         // Write data into the buffer object
		this.gl.bufferData(this.gl.ARRAY_BUFFER, this.data.vertex, this.data.usage);
	}

	setTexture(texturePath) {
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
        
        // Fill texture with translucent as default
		this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE,
			new Uint8Array([0, 0, 0, 0]));
        
        this.texturesRequestedVsLoaded.req++;
        
		var self = this;
		// Load an image
		var img = new Image();
		img.src = texturePath;
		img.addEventListener('load', function () {
			// Now that the image has loaded make copy it to the texture.
			self.gl.bindTexture(self.gl.TEXTURE_2D, self.texture);
			self.gl.texImage2D(self.gl.TEXTURE_2D, 0, self.gl.RGBA, self.gl.RGBA, self.gl.UNSIGNED_BYTE, img);
            self.texturesRequestedVsLoaded.loaded++;
		});
	}
    
    setFade(newFade) {
        this.fade = newFade;
    }

	setBoundingBox(bbX, bbY, offX, offY) {
		this.boundingBox.x = bbX;
		this.boundingBox.y = bbY;
        this.boundingBox.offsetX = offX;
        this.boundingBox.offsetY = offY;
	}
    
    setMaxSpeed(x, y) {
        this.maxSpeed.x = x;
        this.maxSpeed.y = y;
    }
    
    getMovement() {
        return this.movement;
    }
    
    getMovementBlock() {
        return this.movementBlock;
    }
    
    setMovement(x, y) {
        this.movement.x = x;
        this.movement.y = y;
    }
    
    setAcceleration(x, y) {
        this.acceleration.x = x;
        this.acceleration.y = y;
    }
    
    updatePhysics(dt) {
		//Apply accelerations
		this.movement.y -= this.gravity * dt;
        this.movement.y += this.acceleration.y * dt;
        this.movement.x += this.acceleration.x * dt;

		//Block movement if colliding
		if ((this.movementBlock.xPos && this.movement.x > 0) || (this.movementBlock.xNeg && this.movement.x < 0)) { //Block x-axis
			this.movement.x = 0;
		}
		if ((this.movementBlock.yPos && this.movement.y > 0) || (this.movementBlock.yNeg && this.movement.y < 0)) { //Block y-axis
			this.movement.y = 0;
		}
        
        //Limit speed to max
        this.movement.x = Math.max(Math.min(this.movement.x, this.maxSpeed.x), -this.maxSpeed.x); 
        this.movement.y = Math.max(Math.min(this.movement.y, this.maxSpeed.y), -this.maxSpeed.y);
        
        if (this.acceleration.x == 0) { //Apply drag if not accelerating
            if (this.movementBlock.yNeg) { //On ground
                this.movement.x -= Math.sign(this.movement.x) * this.retardation * dt;
            } 
            else { //In air
               this.movement.x -= Math.sign(this.movement.x) * this.retardation * 0.25 * dt;
            }
        }
        
        if (Math.abs(this.movement.x) < 0.2) { //Completely stop the object if speed is very low.
            this.movement.x = 0;
        }

		this.position.x += this.movement.x * dt;
		this.position.y += this.movement.y * dt;
        this.mmNeedsUpdate = true;
        
		//Reset movementBlock
		this.movementBlock.xPos = false;
		this.movementBlock.xNeg = false;
		this.movementBlock.yPos = false;
		this.movementBlock.yNeg = false;
        
        
        //Reset acceleration
        this.acceleration.x = 0;
        this.acceleration.y = 0;
    }

	draw() {
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
