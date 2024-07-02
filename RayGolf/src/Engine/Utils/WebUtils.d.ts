export declare module WebUtils {
    /**
     * Will get the content of cookie with name cookieName
     * @param cookieName Name of cookie
     * @returns Content
     */
    function GetCookie(cookieName: string): string;
    /**
     * Will set the content of a cookie
     * @param cookieName Cookie name
     * @param cookieValue Cookie value
     * @param daysToLast How long the cookie should be valid
     */
    function SetCookie(cookieName: string, cookieValue: string, daysToLast?: number): void;
    /**
     * Delete cookie
     * @param cookieName Cookie name
     */
    function DeleteCookie(cookieName: string): void;
    /**
     * Will start a download of a file with filename and content text
     * @param filename File name
     * @param text Content
     */
    function DownloadFile(filename: any, text: any): void;
    /**
     * Will download a file that exists on URL filepath, for example a resource file
     * @param filepath File path
     * @param filename File name
     */
    function DownloadExistingFile(filepath: string, filename: string): void;
}
