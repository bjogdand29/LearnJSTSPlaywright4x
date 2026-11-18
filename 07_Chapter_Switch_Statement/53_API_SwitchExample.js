let responseCode = 404;

switch (responseCode) {
    case 200:
        console.log("Success: request completed.");
        break;
    case 201:
        console.log("Created: resource was created.");
        break;
    case 400:
        console.log("Bad request: check the request data.");
        break;
    case 401:
        console.log("Unauthorized: authentication is required.");
        break;
    case 403:
        console.log("Forbidden: you do not have permission.");
        break;
    case 404:
        console.log("Not found: the requested resource does not exist.");
        break;
    case 500:
        console.log("Server error: try again later.");
        break;
    default:
        console.log("Unexpected response code:", responseCode);
}