var ClientID = "329599416834-lr1th4i6nodmmgmnborl562iv7mn2lmi.apps.googleusercontent.com";
var ClientIDJSONDownloaded = {"web":{"client_id":"329599416834-lr1th4i6nodmmgmnborl562iv7mn2lmi.apps.googleusercontent.com","project_id":"engappalphatest","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"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","redirect_uris":["http://localhost:8000/callback"],"javascript_origins":["http://127.0.0.1:5500","http://localhost:8000"]}};


// Include the Google Identity Platform JavaScript library:
// Add the following script tag to the head of your HTML page:
<script src="https://accounts.google.com/gsi/client" async defer></script>

// var src="https://accounts.google.com/gsi/client" async defer
// Add the sign-in button:
<div id="g_id_onload" data-client_id="329599416834-lr1th4i6nodmmgmnborl562iv7mn2lmi.apps.googleusercontent.com" data-callback="handleCredentialResponse"></div>
<div id="g_id_onload"
     data-client_id="329599416834-lr1th4i6nodmmgmnborl562iv7mn2lmi.apps.googleusercontent.com"
     data-callback="handleCredentialResponse">
</div>


Implement JavaScript functions:

    // Add the following JavaScript code to handle the sign-in and callback functions:
    function handleCredentialResponse(response) {
        // Send the response to your server for verification and user authentication
        // You can access the user's ID token with response.credential
      }

    //   Handle the server-side verification and authentication:

    // Once you receive the response on your server, verify the ID token with the Google API using the client ID and client secret obtained in step 4.
    // Authenticate the user in your system based on the verification result.