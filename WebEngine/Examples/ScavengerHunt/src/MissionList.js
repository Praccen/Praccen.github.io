import { guiRenderer, mainMenuDiv, navigationTimer } from "./ScavengerHunt.js";
import { GetCookie, SetCookie } from "./WebUtils.js";

String.prototype.hashCode = function() {
    var hash = 0,
      i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
      chr = this.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  }
  

class Mission {
    constructor(name, description, score, time, key) {
        this.name = name;
        this.description = description;
        this.score = score;
        this.time = time;

        this.solved = false;
        this.passed = false;
        this.key = key;

        this.button = null;
    } 

    createGuiElement(yPosition, parent = null) {
        this.button = guiRenderer.getNewButton(parent);
        this.button.position[0] = 0.5;
        this.button.position[1] = yPosition;
        this.button.center = true;
        this.button.textString = this.name + " | " + this.score + " | " + this.time;
    
        if (GetCookie(this.key) == "solved") {
            this.markAsSolved();
        }

        if (GetCookie(this.key) == "passed") {
            this.markAsPassed();
        }

        let self = this;
        this.button.onClick(function() {
            if (self.solved || self.passed) {
                return;
            }
            self.createBriefingPage();
        });
    }

    createBriefingPage() {
        mainMenuDiv.setHidden(true);

        let pageDiv = guiRenderer.getNewDiv();
        pageDiv.getElement().style.width = "100%";
        pageDiv.getElement().style.height = "100%"; 
        
        let descriptionText = guiRenderer.getNew2DText(pageDiv);
        descriptionText.textString = "You are about to start the " + this.name + " mission. Starting a mission means you have to finish it, or forfeit the mission at which point you will not be allowed to try the mission again.";
        descriptionText.center = false;
        descriptionText.position[0] = 0.05;
        descriptionText.position[1] = 0.1;

        let awardText = guiRenderer.getNew2DText(pageDiv);
        awardText.textString = "This mission will award " + this.score + " points and " + this.time + " minutes of navigation time";
        awardText.center = false;
        awardText.position[0] = 0.05;
        awardText.position[1] = 0.6;

        let agreeButton = guiRenderer.getNewButton(pageDiv);
        agreeButton.textString = "Agree";
        agreeButton.center = true;
        agreeButton.position[0] = 0.5;
        agreeButton.position[1] = 0.8;
        agreeButton.getInputElement().style.background = "linear-gradient(#99fa76, #80d262, #589044)";

        let self = this;
        agreeButton.onClick(function() {
            pageDiv.remove();
            self.createMissionPage();
        });

        let declineButton = guiRenderer.getNewButton(pageDiv);
        declineButton.textString = "Decline";
        declineButton.center = true;
        declineButton.position[0] = 0.5;
        declineButton.position[1] = 0.9;
        declineButton.getInputElement().style.background = "linear-gradient(#f65454, #bf4141, #af3434)";
       
        declineButton.onClick(function() {
            pageDiv.remove();
            mainMenuDiv.setHidden(false);
        });
    }

    createMissionPage() {
        mainMenuDiv.setHidden(true);
        SetCookie("CurrentMission", this.key.toString());

        let pageDiv = guiRenderer.getNewDiv();
        pageDiv.getElement().style.width = "100%";
        pageDiv.getElement().style.height = "100%"; 
        
        let nameText = guiRenderer.getNew2DText(pageDiv);
        nameText.textString = this.name;
        nameText.center = true;
        nameText.position[0] = 0.5;
        nameText.position[1] = 0.1;

        let descriptionText = guiRenderer.getNew2DText(pageDiv);
        descriptionText.textString = this.description;
        descriptionText.center = false;
        descriptionText.position[0] = 0.05;
        descriptionText.position[1] = 0.3;

        let awardText = guiRenderer.getNew2DText(pageDiv);
        awardText.textString = "This mission will award " + this.score + " points and " + this.time + " minutes of navigation time";
        awardText.center = false;
        awardText.position[0] = 0.05;
        awardText.position[1] = 0.5;

        let solveEditText = guiRenderer.getNewEditText(pageDiv);
        solveEditText.textString = "Passcode";
        solveEditText.center = true;
        solveEditText.position[0] = 0.5;
        solveEditText.position[1] = 0.7;

        let solveButton = guiRenderer.getNewButton(pageDiv);
        solveButton.textString = "Submit";
        solveButton.center = true;
        solveButton.position[0] = 0.5;
        solveButton.position[1] = 0.8;
        solveButton.getInputElement().style.background = "linear-gradient(#99fa76, #80d262, #589044)";

        let self = this;
        solveButton.onClick(function() {
            if (self.solve(solveEditText.getInputElement().value)) {
                pageDiv.remove();
                navigationTimer.time = self.time * 60;
            }
        });

        let forfeitButton = guiRenderer.getNewButton(pageDiv);
        forfeitButton.textString = "Forfeit";
        forfeitButton.center = true;
        forfeitButton.position[0] = 0.5;
        forfeitButton.position[1] = 0.9;
        forfeitButton.getInputElement().style.background = "linear-gradient(#f65454, #bf4141, #af3434)";
       
        forfeitButton.onClick(function() {
            self.pass();
            pageDiv.remove();
            mainMenuDiv.setHidden(false);
        });
    }

    markAsSolved() {
        this.solved = true;
        this.button.getInputElement().style.background = "linear-gradient(#99fa76, #80d262, #589044)";
    }

    solve(passcode) {
        if (passcode.hashCode() == this.key) { 
            this.markAsSolved();
            SetCookie(this.key, "solved");
            return true;
        }
        return false;
    }

    markAsPassed() {
        this.passed = true;
        this.button.getInputElement().style.background = "linear-gradient(#f65454, #bf4141, #af3434)";
    }

    pass() {
        this.markAsPassed();
        SetCookie(this.key,"passed");
    }
}

class Title {
    constructor(text) {
        this.text = text;
    }

    createGuiElement(yPosition, parent = null) {
        let text = guiRenderer.getNew2DText(parent);
        text.position[0] = 0.05;
        text.position[1] = yPosition;
        text.center = false;
        text.textString = this.text;
    }
}

export default class MissionList {
    constructor() {
        // TODO: Replace password.hashCode keys with actual keys
        this.guiElements = [
            new Title("Mission name | Score | Minutes of navigation time on completion"),
            new Mission("Test mission", "This is a description for the mission", 10, 5, "Password1".hashCode()),
            new Mission("Test mission", "This is a description for the mission", 9, 3, "Password2".hashCode()),
            new Mission("Test mission", "This is a description for the mission",8, 8, "Password3".hashCode()),
            new Mission("Touch grass", "Take a picture of your team touching some grass. Send the picture to MAILGROUP_SCAVENGER_HUNT and you will get the passcode as a response.", 2, 3, "Password4".hashCode()),
            new Mission("Break the page", "Break the page to find the password to this question.", 0, 150, "Password5".hashCode())
        ];
    }

    createGui(parent = null) {
        const yDiff = 0.8 / Math.max(this.guiElements.length - 1, 1);
        for (let i = 0; i < this.guiElements.length; i++) {
            let element = this.guiElements[i];
            element.createGuiElement(0.1 + yDiff * i, parent);
        }

        const currentMission = GetCookie("CurrentMission");

        for (let guiElement of this.guiElements) {
            if (guiElement.key == undefined) {
                continue;
            }

            if (guiElement.key.toString() == currentMission && !guiElement.passed && !guiElement.solved) {
                guiElement.createMissionPage();
            }
        }
    }
}