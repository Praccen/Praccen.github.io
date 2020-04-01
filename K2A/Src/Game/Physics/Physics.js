class Physics {
	constructor() {
        
    }

	/*Solves collision between two gameObjects.
	If stopObj* is true then obj* should be restricted to move in the collision direction.
	Returns true if collision is detected*/
	solveCollision(obj1, obj2, stopObj1, stopObj2) {
		//Collision on x-axis?
		var collisionX = obj1.position.x + obj1.boundingBox.offsetX + obj1.boundingBox.x >= obj2.position.x + obj2.boundingBox.offsetX
			 && obj2.position.x + obj2.boundingBox.offsetX + obj2.boundingBox.x >= obj1.position.x + obj1.boundingBox.offsetX;

		//Collision on y-axis?
		var collisionY = obj1.position.y + obj1.boundingBox.offsetY + obj1.boundingBox.y >= obj2.position.y + obj2.boundingBox.offsetY
			 && obj2.position.y + obj2.boundingBox.offsetY + obj2.boundingBox.y >= obj1.position.y + obj1.boundingBox.offsetY;

		if ((stopObj1 || stopObj2) && collisionX && collisionY) {
			var xVal = Math.min((obj1.position.x + obj1.boundingBox.offsetX + obj1.boundingBox.x) - (obj2.position.x + obj2.boundingBox.offsetX), (obj2.position.x + obj2.boundingBox.offsetX + obj2.boundingBox.x) - (obj1.position.x + obj1.boundingBox.offsetX));
			var yVal = Math.min((obj1.position.y + obj1.boundingBox.offsetY + obj1.boundingBox.y) - (obj2.position.y + obj2.boundingBox.offsetY), (obj2.position.y + obj2.boundingBox.offsetY + obj2.boundingBox.y) - (obj1.position.y + obj1.boundingBox.offsetY));

			if (xVal >= yVal) { //Block movement on Y-axis
				if (obj1.position.y + obj1.boundingBox.offsetY > obj2.position.y + obj2.boundingBox.offsetY) {
					if (stopObj1) {
						//Block downwards movement
						obj1.movementBlock.yNeg = true;
                        obj1.position.y += yVal;
					}
					if (stopObj2) {
						//Block upwards movement
						obj2.movementBlock.yPos = true;
                        obj2.position.y -= yVal;
					}
				} else {
					if (stopObj1) {
						//Block upwards movement
						obj1.movementBlock.yPos = true;
                        obj1.position.y -= yVal;
					}
					if (stopObj2) {
						//Block downwards movement
						obj2.movementBlock.yNeg = true;
                        obj2.position.y += yVal;
					}
				}
			} else { //Block movement on X-axis
				if (obj1.position.x + obj1.boundingBox.offsetX > obj2.position.x + obj2.boundingBox.offsetX) {
					if (stopObj1) {
						//Block left movement
						obj1.movementBlock.xNeg = true;
                        obj1.position.x += xVal;
					}
					if (stopObj2) {
						//Block right movement
						obj2.movementBlock.xPos = true;
                        obj2.position.x -= xVal;
					}
				} else {
					if (stopObj1) {
						//Block right movement
						obj1.movementBlock.xPos = true;
                        obj1.position.x -= xVal;
					}
					if (stopObj2) {
						//Block left movement
						obj2.movementBlock.xNeg = true;
                        obj2.position.x += xVal;
					}
				}
			}
		}

		return collisionX && collisionY;
	}
}
