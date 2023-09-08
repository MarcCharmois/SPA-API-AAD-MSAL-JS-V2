// Config object to be passed to Msal on creation.
// For a full list of msal.js configuration parameters, 
// visit https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md

const msalConfig = {
    auth: {

        // Replace with your app/client ID on AAD Portal.
        clientId: "fd9407a4-e7db-484d-8db1-16b0112341d2",

        // Replace with "https://login.microsoftonline.com/common/" 
        // Note: This is for multi-tenant applications located on the global Azure cloud. 
        // For more information, see the documentation 
        // https://docs.microsoft.com/azure/active-directory/develop/quickstart-v2-javascript-auth-code.
        authority: "https://login.microsoftonline.com/994d9022-89d7-44f4-91e2-3851290dc50d",
        
        // Replace with the redirect uri you setup on AAD Portal.
        // example redirectUri: "https://core.jannehansen.com/spa/functioncall"
        redirectUri: "http://localhost:8080"
        
    },
    cache: {
        cacheLocation: "localStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                console.log(message);	
            }
        }
    }
};

// Add here the scopes that you would like the user to consent during sign-in
const loginRequest = {
    scopes: ["User.Read"]
};
