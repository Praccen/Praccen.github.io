"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebUtils = void 0;
var WebUtils;
(function (WebUtils) {
    function GetCookie(cookieName) {
        let name = cookieName + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    WebUtils.GetCookie = GetCookie;
    function SetCookie(cookieName, cookieValue, daysToLast = 365) {
        const d = new Date();
        d.setTime(d.getTime() + daysToLast * 24 * 60 * 60 * 1000);
        let expires = "expires=" + d.toUTCString();
        document.cookie = cookieName + "=" + cookieValue + ";" + expires;
    }
    WebUtils.SetCookie = SetCookie;
    function DeleteCookie(cookieName) {
        document.cookie = cookieName + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC";
    }
    WebUtils.DeleteCookie = DeleteCookie;
    function DownloadFile(filename, text) {
        let element = document.createElement("a");
        element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
        element.setAttribute("download", filename);
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
    WebUtils.DownloadFile = DownloadFile;
})(WebUtils = exports.WebUtils || (exports.WebUtils = {}));
//# sourceMappingURL=WebUtils.js.map