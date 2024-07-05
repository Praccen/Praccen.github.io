import * as ENGINE from "../../../dist/Engine.esm.js"
import MissionList from "./MissionList.js";
import { NavigationView } from "./NavigationView.js";

// Create a GUI renderer and attach it to the document body
export let guiRenderer = new ENGINE.GUIRenderer();
document.body.appendChild(guiRenderer.domElement);

// Set the class to apply style defined in index.css
guiRenderer.domElement.className = "guiContainer";

export let mainMenuDiv = guiRenderer.getNewDiv();
mainMenuDiv.getElement().style.width = "100%";
mainMenuDiv.getElement().style.height = "100%";

let missions = new MissionList();
missions.createGui(mainMenuDiv);

let navigationView = null;

export let navigationTimer = {time: 20.0};

/**
 * Our update function, this will run every frame, and is responsible for moving the camera based on input.
 * This is where game logic would go if this was a complete game
 * @param {*} dt - time elapsed since last frame. 
 */
let update = function(dt) {
    if (navigationTimer.time > 0.0 && navigationView == undefined) {
        mainMenuDiv.setHidden(true);
        navigationView = new NavigationView(navigationTimer.time);
    }
    else if (navigationView != undefined && navigationTimer.time <= 0.0) {
        navigationView = null;
    }
    
    if (navigationView != undefined) {
        navigationView.update(dt);
    }
}

// Resize function to that will update the size of our game window when the browser window is resized
let resize = function() {
    let width = window.innerWidth;
    let height = window.innerHeight * 0.75;

    // Update the size of the GUI renderer
    guiRenderer.setSize(width, height);
}

// Run the resize function once to sync with the current size of the browser window 
resize();

// Also add the resize function to run automatically when the browser window is resized
window.addEventListener("resize", () => {
    resize();
});

// A timer to keep track of frame time
let lastUpdateTime = Date.now();

/**
 * Animation function that takes care of requesting animation frames, calculating frame time and calls both update and render functions.
 */
function animate() {
	requestAnimationFrame( animate );
    let now = Date.now();
    let dt = (now - lastUpdateTime) * 0.001;
    lastUpdateTime = now;
    update(dt);
    guiRenderer.draw( null );
}

// Start animating!
animate();