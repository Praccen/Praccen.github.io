import { guiRenderer, mainMenuDiv, navigationTimer } from "./ScavengerHunt.js";

// Borrowed from https://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }


export class NavigationView {
    constructor(time) {
        this.timer = time;
        this.distance = NaN;

        this.div = guiRenderer.getNewDiv();
        this.div.getElement().style.width = "100%";
        this.div.getElement().style.height = "100%";

        this.timerText = guiRenderer.getNew2DText(this.div);
        this.timerText.textString = "";
        this.timerText.position[0] = 0.5;
        this.timerText.position[1] = 0.2;
        this.timerText.center = true;

        this.distanceText = guiRenderer.getNew2DText(this.div);
        this.distanceText.textString = "";
        this.distanceText.position[0] = 0.5;
        this.distanceText.position[1] = 0.5;
        this.distanceText.center = true;
    }

    update(dt) {
        this.timer -= dt;

        if (navigator.geolocation) {
            let self = this;
            navigator.geolocation.getCurrentPosition(function(position) {
                // Slussenfärjan 59.3226291,18.0725482
                self.distance = getDistanceFromLatLonInKm(59.3226291,18.0725482, position.coords.latitude, position.coords.longitude);
            });
        }

        this.timerText.textString = Math.ceil(this.timer).toString() + " seconds left of navigation";

        this.distanceText.textString = 
        `Distance to goal (km)

        ` + this.distance.toString();

        if (this.timer <= 0.0) {
            this.div.remove();
            mainMenuDiv.setHidden(false);
            navigationTimer.time = 0.0;
        }
    }
}