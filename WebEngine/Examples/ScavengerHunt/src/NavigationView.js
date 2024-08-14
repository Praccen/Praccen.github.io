import { guiRenderer, mainMenuDiv, navigationTimer } from "./ScavengerHunt.js";
import { SetCookie } from "./WebUtils.js";

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1) - 0.0001775663; // Account for pole offset
    var dLon = deg2rad(lon2-lon1) - 0.0000073234; // Account for pole offset

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
        this.div.ignoreEngineModifiers = true;
        this.div.getElement().style.width = "100%";
        this.div.getElement().style.height = "100%";
        this.div.getElement().style.overflowY = "auto";
        this.div.getElement().style.fontSize = "50px";

        this.timerText = guiRenderer.getNewDiv(this.div);
        this.timerText.ignoreEngineModifiers = true;
        this.timerText.getElement().style.padding = "30px 0px";
        this.timerText.getElement().style.position = "relative";
        this.timerText.getElement().style.textAlign = "center";
        this.timerText.getElement().style.display = "block";
        this.timerText.getElement().style.margin = "auto";

        this.distanceText = guiRenderer.getNewDiv(this.div);
        this.distanceText.ignoreEngineModifiers = true;
        this.distanceText.getElement().style.padding = "30px 0px";
        this.distanceText.getElement().style.position = "relative";
        this.distanceText.getElement().style.textAlign = "center";
        this.distanceText.getElement().style.display = "block";
        this.distanceText.getElement().style.margin = "auto";

        this.confirmCancellation = guiRenderer.getNewCheckbox(this.div);
        this.confirmCancellation.ignoreEngineModifiers = true;
        this.confirmCancellation.getElement().style.padding = "40px 20px";
        this.confirmCancellation.getElement().style.position = "relative";
        this.confirmCancellation.getElement().style.fontSize = "inherit";
        this.confirmCancellation.getInputElement().checked = false;
        this.confirmCancellation.textString = "I understand that by cancelling the navigation I will lose my navigation time";

        this.cancelButton = guiRenderer.getNewButton(this.div);
        this.cancelButton.ignoreEngineModifiers = true;
        this.cancelButton.getElement().style.padding = "40px 20px";
        this.cancelButton.getElement().style.position = "relative";
        this.cancelButton.getElement().style.display = "block";
        this.cancelButton.getElement().style.margin = "auto";
        this.cancelButton.textString = "Cancel navigation";
        this.cancelButton.getInputElement().disabled = true;
        let self = this;
        this.cancelButton.onClick(function() {
           self.timer = 0.0;
        });

        this.watchId = null;

        if (navigator.geolocation) {
            let self = this;
            this.watchId = navigator.geolocation.watchPosition(function(position) {
                self.distance = Math.ceil(getDistanceFromLatLonInKm(59.3123933,18.0750245, position.coords.latitude, position.coords.longitude) * 1000);
            }, null, {maximumAge: 0, timeout: 2000, enableHighAccuracy: true} );
        }
    }

    update(dt) {
        this.timer -= dt;

        this.timerText.getElement().innerHTML = `<p><span style = "font-size: inherit; color: #245C5C;">` + Math.ceil(this.timer).toString() + `</span> seconds left of navigation</p>`;

        this.distanceText.getElement().innerHTML = 
        `<p>Distance to goal (m)</p>
        <p><span style = "font-size: inherit; color: #245C5C;">` + this.distance.toString() + `</span></p>`;

        if (this.timer <= 0.0) {
            this.div.remove();
            mainMenuDiv.getElement().style.display = "";
            navigationTimer.time = 0.0;
            if (navigator.geolocation && this.watchId != undefined) {
                navigator.geolocation.clearWatch(this.watchId);
            }
        }

        this.cancelButton.getInputElement().disabled = !this.confirmCancellation.getChecked();

        SetCookie("t", this.timer);
    }
}