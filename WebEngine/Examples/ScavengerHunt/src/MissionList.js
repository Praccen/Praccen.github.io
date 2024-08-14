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

    createGuiElement(parent = null) {
        this.button = guiRenderer.getNewButton(parent);
        this.button.ignoreEngineModifiers = true;
        // this.button.textString = "<span>" + this.name + "</span> <span>" + this.score + "</span> <span>" + this.time + "</span>";
        this.button.getInputElement().innerHTML =`
        <div class="flex-container" style="display: flex; justify-content: space-around">
            <span style="color:#F7E4C7; width: 25%; text-align: left;">` + this.name + `</span>
            <span style="color:#F7E4C7; width: 25%; text-align: right;">` + this.score + `</span>
            <span style="color:#F7E4C7; width: 25%; text-align: right;">` + this.time + `</span>
        </div>
        `;
        this.button.getElement().style.position = "relative";
        this.button.getElement().style.width = "";
        this.button.getInputElement().style.width = "100%";
        this.button.getElement().style.padding = "2px 4px";
    
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
        mainMenuDiv.getElement().style.display = "none";

        let pageDiv = guiRenderer.getNewDiv();
        pageDiv.ignoreEngineModifiers = true;
        pageDiv.getElement().style.width = "100%";
        pageDiv.getElement().style.height = "100%";
        pageDiv.getElement().style.overflowY = "auto";
        pageDiv.getElement().style.fontSize = "50px";

        let descriptionText = guiRenderer.getNew2DText(pageDiv);
        descriptionText.ignoreEngineModifiers = true;
        descriptionText.getElement().style.padding = "40px 20px";
        descriptionText.getElement().style.position = "relative";
        descriptionText.textString = "You are about to start the " + this.name + " mission. Starting a mission means you have to finish it, or forfeit the mission at which point you will not be allowed to try the mission again.";

        let awardText = guiRenderer.getNewDiv(pageDiv);
        awardText.ignoreEngineModifiers = true;
        awardText.getElement().style.padding = "30px 0px";
        awardText.getElement().style.position = "relative";
        awardText.getElement().innerHTML = `<p>This mission will award <span style = "font-size: inherit; color: #245C5C;">` + this.score + `</span> points and <span style = "font-size: inherit; color: #245C5C;">` + this.time + `</span> seconds of navigation time</p>`;

        let agreeButton = guiRenderer.getNewButton(pageDiv);
        agreeButton.ignoreEngineModifiers = true;
        agreeButton.getInputElement().style.background = "#138832";
        agreeButton.getElement().style.padding = "40px 20px";
        agreeButton.getElement().style.position = "relative";
        agreeButton.getElement().style.display = "block";
        agreeButton.getElement().style.margin = "auto";
        agreeButton.getInputElement().innerHTML = "Agree";

        let self = this;
        agreeButton.onClick(function() {
            pageDiv.remove();
            self.createMissionPage();
        });

        let declineButton = guiRenderer.getNewButton(pageDiv);
        declineButton.ignoreEngineModifiers = true;
        declineButton.getInputElement().style.background = "#781a1a";
        declineButton.getElement().style.padding = "40px 20px";
        declineButton.getElement().style.position = "relative";
        declineButton.getElement().style.display = "block";
        declineButton.getElement().style.margin = "auto";
        declineButton.getInputElement().innerHTML = "Decline";
        
        declineButton.onClick(function() {
            pageDiv.remove();
            mainMenuDiv.getElement().style.display = "";
        });
    }

    createMissionPage() {
        mainMenuDiv.getElement().style.display = "none";
        SetCookie("CurrentMission", this.key.toString());

        let pageDiv = guiRenderer.getNewDiv();
        pageDiv.ignoreEngineModifiers = true;
        pageDiv.getElement().style.width = "100%";
        pageDiv.getElement().style.height = "100%";
        pageDiv.getElement().style.overflowY = "auto";
        pageDiv.getElement().style.fontSize = "50px";
        
        let nameText = guiRenderer.getNew2DText(pageDiv);
        nameText.ignoreEngineModifiers = true;
        nameText.getElement().style.fontSize = "80px";
        nameText.getElement().style.textAlign = "center";
        nameText.getElement().style.margin = "auto";
        nameText.getElement().style.padding = "40px 20px";
        nameText.getElement().style.position = "relative";
        nameText.textString = this.name;

        let descriptionText = guiRenderer.getNew2DText(pageDiv);
        descriptionText.ignoreEngineModifiers = true;
        descriptionText.getElement().style.padding = "40px 20px";
        descriptionText.getElement().style.position = "relative";
        descriptionText.textString = this.description;

        let awardText = guiRenderer.getNewDiv(pageDiv);
        awardText.ignoreEngineModifiers = true;
        awardText.getElement().style.padding = "30px 0px";
        awardText.getElement().style.position = "relative";
        awardText.getElement().innerHTML = `
        <p>Send the email to scavengerhunt@msab.com. Add the mission name and your team number as the Subject.</p>
        <p>When we have received a photo of a correctly executed mission, you will get the password in return. Enter the password to unlock your navigation time. </p>
        <p>This mission will award <span style = "font-size: inherit; color: #245C5C;">` + this.score + `</span> points and <span style = "font-size: inherit; color: #245C5C;">` + this.time + `</span> seconds of navigation time</p>`;

        let solveEditText = guiRenderer.getNewEditText(pageDiv);
        solveEditText.ignoreEngineModifiers = true;
        solveEditText.getElement().style.padding = "40px 20px";
        solveEditText.getElement().style.position = "relative";
        solveEditText.getInputElement().style.fontSize = "inherit";
        solveEditText.textString = "Passcode ";

        let solveButton = guiRenderer.getNewButton(pageDiv);
        solveButton.ignoreEngineModifiers = true;
        solveButton.getInputElement().style.background = "#138832";
        solveButton.getElement().style.padding = "40px 20px";
        solveButton.getElement().style.position = "relative";
        solveButton.getElement().style.display = "block";
        solveButton.getElement().style.margin = "auto";
        solveButton.getInputElement().innerHTML = "Submit";

        let self = this;
        solveButton.onClick(function() {
            if (self.solve(solveEditText.getInputElement().value)) {
                pageDiv.remove();
                navigationTimer.time = self.time;
            }
            else {
                solveEditText.getInputElement().value = "";
                solveEditText.getInputElement().style.background = "red";
                setTimeout(function () {solveEditText.getInputElement().style.background = "";}, 100);
            }
        });

        let forfeitButton = guiRenderer.getNewButton(pageDiv);
        forfeitButton.ignoreEngineModifiers = true;
        forfeitButton.getInputElement().style.background = "#781a1a";
        forfeitButton.getElement().style.padding = "40px 20px";
        forfeitButton.getElement().style.position = "relative";
        forfeitButton.getElement().style.display = "block";
        forfeitButton.getElement().style.margin = "auto";
        forfeitButton.getInputElement().innerHTML = "Forfeit";
       
        forfeitButton.onClick(function() {
            self.pass();
            pageDiv.remove();
            mainMenuDiv.getElement().style.display = "";
        });
    }

    markAsSolved() {
        this.solved = true;
        this.button.getInputElement().style.background = "#138832";
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
        this.button.getInputElement().style.background = "#781a1a";
    }

    pass() {
        this.markAsPassed();
        SetCookie(this.key,"passed");
    }
}

class Title {
    constructor(textAndAlignment) {
        this.textAndAlignment = textAndAlignment;
    }

    createGuiElement(parent = null) {
        let flexBox = guiRenderer.getNewDiv(parent);
        flexBox.ignoreEngineModifiers = true;
        flexBox.getElement().style.class = "flex-container";
        flexBox.getElement().style.display = "flex";
        flexBox.getElement().style.justifyContent = "space-around";
        flexBox.getElement().style.position = "relative";
        flexBox.getElement().style.padding = "0px 25px";
        flexBox.getElement().style.width = "";



        for (let ta of this.textAndAlignment) {
            let text = guiRenderer.getNew2DText(flexBox);
            text.ignoreEngineModifiers = true;
            text.textString = ta[0];
            text.getElement().style.position = "relative";
            text.getElement().style.color = "#245C5C";
            text.getElement().style.textAlign = ta[1];
            text.getElement().style.padding = "5px";
            text.getElement().style.width = "25%";
            text.getElement().style.fontSize = "26px";
        }        
    }
}

export default class MissionList {
    constructor() {
        this.guiElements = [
            new Title([["Mission name", "left"], ["Points", "right"], ["Navigation seconds", "right"]]),
            new Mission("The store","Email us a photo of a team member in front of a display window where something green is on display. ",1,255,-1357631257),
            new Mission("The tree","Email us a photo of one or more team members hugging a tree. ",2,240,-1536133251),
            new Mission("The jump","Email us a photo of team members jumping in the air, the higher the better. The photo must include at least two team members. ",3,225,-1912358105),
            new Mission("The word","Email us a photo of the team spelling out a word, using their bodies as the letters. ",4,210,2558810),
            new Mission("The band","Email us a photo of the team in the style of an imaginary black metal album cover. The photo must include at least three team members. ",5,195,67914621),
            new Mission("The position","Email us a photo of one or more team members doing a yoga pose in a beautiful setting. ",6,180,-2008848680),
            new Mission("The flower","Email us a photo of at least one team member with a bouquet of flowers. ",7,165,79936545),
            new Mission("The animal","Email us a photo of an animal that is smaller than a shopping cart. The photo must include at least two team members. ",8,150,-1790579581),
            new Mission("The sign","Email us a photo of a team member and the text MSAB. The letters in MSAB must be created by objects that you find. ",9,135,2301393),
            new Mission("The art","Email us a photo of at least one team member interacting with a statue or sculpture.",10,120,2394075),
            new Mission("The child","Email us a photo of at least one team member playing on a playground.",11,105,-1354140033),
            new Mission("The class","Email us a photo of the team in the style of a class photo. The photo must include a park bench and all team members. ",12,90,1549467325),
            new Mission("The music","Email us a photo that illustrates a song title. The photo must include at least one team member. ",13,75,1360946844),
            new Mission("The vehicle","Email us a photo of a team member and a license plate where the letters form a word.",14,60,71762568),
            new Mission("The movie","Email us a photo where the team re-enacts a recognizable movie scene. The photo must include at least two team members. ",15,45,68143570),
            new Mission("The uniform","Email us a photo of one team member and a stranger in uniform. You must ask the stranger for permission, and it must be obvious from the photo that they are participating in the picture. ",16,30,-813315778),
            new Mission("The stranger","Email us a photo of a team member and a stranger in a white skirt or white pants. You must ask the stranger for permission, and it must be obvious from the photo that they are participating in the picture. ",17,15,123463235)
        ];
        // let keys = "";
        // for (let mission of this.guiElements) {
        //     if (mission.key != undefined) {
        //         keys += mission.key + "\n";
        //     }
        // }
        // console.log(keys);
    }

    createGui(parent = null) {
        let headerDiv = guiRenderer.getNewDiv(parent);
        headerDiv.ignoreEngineModifiers = true;
        headerDiv.getElement().style.background = "#E4B46B 0% 0% no-repeat padding-box";
        headerDiv.getElement().style.height = "fit-content";
        headerDiv.getElement().style.width = "100%";
        headerDiv.getElement().style.position = "relative";
        headerDiv.getElement().style.fontSize = "26px";

        headerDiv.getElement().innerHTML = `
        <div class="flex-container" style="display: flex; justify-content: space-around;">
            <div><img src="Assets/male_viking.png" style="float: left; width: 256px; height: 256px;"></div>
            <p style="color: #1F160D; font-size: 56px; text-align: center; margin: 40px -20px 10px -30px">Scavenger Hunt</p>
            <div><img src="Assets/female_viking.png" style="float: right; width: 256px; height: 256px;"></div>
        </div>
        
        <p class="pl">Hildur exclaims:<br> - Hello friend! Come Feast with us! But first you will help us.</p>
        <p class="pr">Selgir explains:<br> - Accomplish a mission and get navigation time to find the entrance...</p>
        <p class="pl">Hildur clarifies:<br> - What you really want is points which you get for each accomplished mission.</p>
        <p class="pr">Selgir hurries:<br> - NOW GO! The feast is awaiting!</p> 
        `;

        let contentDiv = guiRenderer.getNewDiv(parent);
        contentDiv.ignoreEngineModifiers = true;
        contentDiv.getElement().style.width = "100%";
        contentDiv.getElement().style.position = "relative";

        for (let element of this.guiElements) {
            element.createGuiElement(contentDiv);
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