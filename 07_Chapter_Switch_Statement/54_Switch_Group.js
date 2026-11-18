let browser = "Brave";

switch (browser) {
    case "Edge":
    case "Chrome":
    case "Brave":
        console.log("Chromium-based browser");
        break;
    case "Firefox":
        console.log("Firefox browser");
        break;
    case "Safari":
        console.log("Safari browser");
        break;
    default:
        console.log("Browser not recognized");
}