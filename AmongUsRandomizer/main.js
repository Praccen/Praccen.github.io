let guicontainer = document.getElementById("guicontainer");

function resize() {
	// Get the dimensions of the viewport
	let innerWindowSize = {
		width: window.innerWidth - 20,
		height: window.innerHeight - 20,
	};

	// Resize game
	guicontainer.style.width = innerWindowSize.width + "px";
	guicontainer.style.height = innerWindowSize.height + "px";
}

function transition(from, to) {
	document.getElementById(from).style.height = "0%";
	document.getElementById(from).style.visibility = "hidden";
	document.getElementById(to).style.height = "100%";
	document.getElementById(to).style.visibility = "visible";
}

function addButtonClickEvent(buttonId, func) {
	let button = document.getElementById(buttonId);
    button.addEventListener("click", func);
}

function fullscreenTransitionEvent(from, to) {
	guicontainer.requestFullscreen();
	transition(from, to);
}

function rollImpostor() {
	if (Math.random() > 0.5) {
		fullscreenTransitionEvent("voting", "wasImpostor");
	}
	else {
		fullscreenTransitionEvent("voting", "wasNotImpostor");
	}
}

/* main */
window.onload = (function () {
	"use strict";

    // Resize canvas in the future when window is resized
	window.addEventListener("resize", function () {
		resize();
	});
	
	let voted;

	addButtonClickEvent("visorBtn", function() {
		fullscreenTransitionEvent("visor", "shh");
	});

	addButtonClickEvent("shhBtn", function() {
		fullscreenTransitionEvent("shh", "halloweener");
	});
	
	addButtonClickEvent("halloweenerBtn", function() {
		fullscreenTransitionEvent("halloweener", "voting");
	});

	addButtonClickEvent("yesBtn", function() {
		voted = true;
		rollImpostor();
	});

	addButtonClickEvent("noBtn", function() {
		voted = false;
		rollImpostor();
	});

	addButtonClickEvent("wasImpostorBtn", function() {
		if (voted) {
			fullscreenTransitionEvent("wasImpostor", "correct");
		}
		else {
			fullscreenTransitionEvent("wasImpostor", "incorrect");
		}
	});

	addButtonClickEvent("wasNotImpostorBtn", function() {
		if (voted) {
			fullscreenTransitionEvent("wasNotImpostor", "incorrect");
		}
		else {
			fullscreenTransitionEvent("wasNotImpostor", "correct");
		}
	});

	addButtonClickEvent("correctBtn", function() {
		fullscreenTransitionEvent("correct", "visor");
	});

	addButtonClickEvent("incorrectBtn", function() {
		fullscreenTransitionEvent("incorrect", "visor");
	});

    resize();
}());