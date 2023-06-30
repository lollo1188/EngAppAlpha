/**
 * Allora, appena hai la pagina di login, aggingi la spunta 'ricorrrdami', e quindi lui salva il cookie con un codice utente,
 * che creerò al momento della registrazione, e lo salvo per 1 anno. Poi quando ariapro il browser la prima cosa che faccio è controllare i cookie, 
 * e se il codice utente è riconosciuto allora skippo la pagina di login e vado in quella di benvenuto. altrimenti va in quella di login. 
 * 
 */



/** non capisco perchè sebra che scrive solo il primo cookie. nove e value. 
 * Allora, ho capito che posso avere tanti cookies, ma ognuno con un cookieName diverso (non il cookieValue! quello non c'entra)
 * il cookieName identifica il cookie, quindi ogni cookie si chiamerà in modo diverso. tipo "pass=abcd1234!;"
 * in più ogni cookie deve avere un expiration date, o un max age, un path (che per il momento metto a "/", dato che non so che significa)
 * e in più devo aggiungere "SameSite=None", anche se mozilla dice che verrà reso obsoleto perchè vanno crittografati...non ho ben capito.
 * */
function writeCookies(){
  var cookieValue = "John Doee";
  // var expirationDate = "Fri, 31 Dec 2023 23:59:59 GMT";
  var maxAgeValue = 20;//3600*24*30;  //in seconds. Unlike the expires attribute, which requires a specific date and time, 
  //Max-Age allows you to define the cookie's lifespan relative to the current time.
  //Unlike the expires attribute, which requires a specific date and time, Max-Age allows you to define the cookie's lifespan relative to the current time.

  var pathValue = "/";

  // document.cookie = `cookieName=${cookieName}; expires=${expirationDate}; path=${pathValue}; SameSite=None`;
  var CookieToWrite = "cookieName="+cookieValue+"; max-age="+maxAgeValue+"; path="+pathValue+"; SameSite=None";
  document.cookie = CookieToWrite;
  console.log(CookieToWrite);
  console.log(document.cookie);
}

function readCookies(){
  var cookieValue = document.cookie
  console.log("cookieValue");
  console.log(cookieValue);

  var cookies = document.cookie.split('; ');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].split('=');
    var cookieName = cookie[0];
    var cookieValue = cookie[1];
    // Use the cookieName and cookieValue as needed
    console.log(cookieName);
    console.log(cookieValue);
  }

}

/** cancella i cookie..tutti, dato che li rimpiazza con uno vuoto ??
 * To delete a cookie, you can set its expiration date to a past date:
 * Replace cookieName with the name of the cookie you want to delete.
*/
function deleteCookie(cookieName){
    // Set the expiration date of the cookie to a past date
  document.cookie = cookieName+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
}

// var username;
function setLoginCookie(username) {
  // Set the expiration date for the cookie
  var expirationDate = new Date();
  expirationDate.setFullYear(expirationDate.getFullYear() + 1); // Expires after 1 year

  // Create the cookie
  document.cookie = "username="+username+"; expires=" + expirationDate.toUTCString() + "; path=/";

  // Set the login cookie with a name and value
  // document.cookie = `username=${username}; expires=Thu, 23 Jun 2025 12:00:00 UTC; path=/; SameSite=None`;
}

function checkLoginCookie() {
  // Get all the cookies
  const cookies = document.cookie.split(';');

  // Loop through the cookies and check if the login cookie exists
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();

    // Check if the cookie starts with "username="
    if (cookie.startsWith('username=')) {
      // Extract the username from the cookie value
      const username = cookie.substring('username='.length);
      // Perform any necessary actions, such as automatically logging in the user
      if (username == "NiK"){console.log("Hello Nik! Welcome back!")}
      // ...
      break; // Exit the loop since we found the login cookie
    }
  }
  console.log("Did I recognise you?")
}

// Remove the cookie: When the user logs out or the session expires, you should remove the login cookie.
function removeLoginCookie() {
  // Set the expiration date of the cookie to a past date
  document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}
