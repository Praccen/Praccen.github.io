const heightByWidth = 9 / 16;
const widthByHeight = 16 / 9;
let guicontainer = document.getElementById("guicontainer");

function resize() {
	// Get the dimensions of the viewport
	let innerWindowSize = {
		width: window.innerWidth - 20,
		height: window.innerHeight - 20,
	};

	let newGameHeight;
	let newGameWidth;

	// Determine game size
	if (heightByWidth > innerWindowSize.height / innerWindowSize.width) {
		newGameHeight = innerWindowSize.height;
		newGameWidth = newGameHeight * widthByHeight;
	} else {
		newGameWidth = innerWindowSize.width;
		newGameHeight = newGameWidth * heightByWidth;
	}

	let newGameX = (innerWindowSize.width - newGameWidth) / 2;
	let newGameY = (innerWindowSize.height - newGameHeight) / 2;

	// Center the game by setting the padding of the game
	guicontainer.style.padding = newGameY + "px " + newGameX + "px";

	// Resize game
	guicontainer.style.width = newGameWidth + "px";
	guicontainer.style.height = newGameHeight + "px";
}

let urls = [
    // Select imposter or not
    //SHHH
    // Correct result
    // Incorrect result
]

/* main */
window.onload = (function () {
	"use strict";

    // Resize canvas in the future when window is resized
	window.addEventListener("resize", function () {
		resize();
	});

    let yesBtn = document.getElementById("voteYes");
    yesBtn.addEventListener("click", (function (e) {
        guicontainer.requestFullscreen();
        document.getElementById("stage0").style.height = "0%";
        document.getElementById("stage1").style.height = "100%";
    }));

    let noBtn = document.getElementById("voteNo");
    noBtn.addEventListener("click", (function (e) {
        guicontainer.requestFullscreen();
        document.getElementById("stage0").style.height = "0%";
        document.getElementById("stage1").style.height = "100%";
    }));
    
    let shhButton = document.getElementById("shh");
    shhButton.addEventListener("click", (function (e) {
        guicontainer.requestFullscreen();

    }));


    resize();
}());