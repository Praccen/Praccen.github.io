var canvas = document.getElementById("gameCanvas");

function initWebGL() {
	canvas.width = 1920;
	canvas.height = 1080;

	var gl = WebGLUtils.getWebGLContext(canvas);

	if (!gl) {
		console.log("Failed to get rendering context for WebGL");
		return;
	}
	gl.canvas = canvas;

	// Setup GLSL program
	gl.program = WebGLUtils.createProgramFromScripts(gl, ["vertex-shader", "fragment-shader"]);
	gl.useProgram(gl.program);

	// Enable depth test
	//gl.enable(gl.DEPTH_TEST);

	//Enable alpha blending
	gl.enable(gl.BLEND);
	gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

	//Set clear color
	gl.clearColor(0.55, 0.55, 0.65, 1.0);

	return gl;
}

function resize(gl) {
	// Get the dimensions of the viewport
	var viewport = {
		width: window.innerWidth,
		height: window.innerHeight
	};

	// Determine game size
	if (gl.canvas.height / gl.canvas.width > viewport.height / viewport.width) {
		newGameHeight = viewport.height;
		newGameWidth = newGameHeight * gl.canvas.width / gl.canvas.height;
	} else {
		newGameWidth = viewport.width;
		newGameHeight = newGameWidth * gl.canvas.height / gl.canvas.width;
	}

	newGameX = (viewport.width - newGameWidth) / 2;
	newGameY = (viewport.height - newGameHeight) / 2;

	// Center the game by setting the padding of the game
	gl.canvas.style.padding = newGameY + "px " + newGameX + "px";

	// Resize game
	gl.canvas.style.width = newGameWidth + "px";
	gl.canvas.style.height = newGameHeight + "px";

	gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
}

/* main */
window.onload = (function () {
	"use strict";

	var gl = initWebGL();

	var texturesRequestedVsLoaded = {
		req: 0,
		loaded: 0,
	}

	const game = new Game(gl, texturesRequestedVsLoaded);

	window.addEventListener("resize", function () {
		resize(gl);
	});

	var lastTick = null;

	//Fixed update rate
	var updateRatio = 1.0 / 60.0;
	var updateTimer = 0.0;
	var maxCounter = 0;
    
    function waitForTextureLoading() { //Waits untill all textures are loaded before starting the game
        if (texturesRequestedVsLoaded.loaded < texturesRequestedVsLoaded.req) {
            requestAnimationFrame(waitForTextureLoading);
        }
    }

	/* Gameloop */
	function gameLoop() {
		var now = Date.now();
		var dt = (now - (lastTick || now)) * 0.001;
		lastTick = now;

		// Constant update rate
		updateTimer += dt;
		maxCounter = 0;

		//Only update if update timer goes over update rate
		while (updateTimer >= updateRatio) {
			if (maxCounter >= 20) {
				updateTimer = 0;
				break;
			}

			game.update(updateRatio);
			updateTimer -= updateRatio;
			maxCounter++;
		}

		//Only draw if game has been updated.
		if (maxCounter != 0) {
			game.draw();
		}

		requestAnimationFrame(gameLoop);
	}

	console.log("Everything is ready.");
	resize(gl);
	requestAnimationFrame(waitForTextureLoading);
	requestAnimationFrame(gameLoop);
}
	());
