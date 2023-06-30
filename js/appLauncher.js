// ** NEW ** //

function launchWelcomePageDiv(){//missing
  console.log("welcomePageDiv");
  ShowDiv(welcomePageDiv);
} 

function launchLogInPage(){
  console.log("launchlogInPage");
  ShowDiv(logInPageDiv);
} 

function launchSignUpPageDiv(){//missing
  console.log("signUpPageDiv");
  ShowDiv(signUpPageDiv);
} 

function launchForgotPasswordPageDiv(){//missing
  console.log("forgotPasswordPageDiv");
  ShowDiv(forgotPasswordPageDiv);
} 

function launchHomePageDiv(){//missing
  console.log("homePageDiv");
  ShowDiv(homePageDiv);
} 

//**OLD**//

function launchHomeApp(){
    console.log("launchEngApp");
    ShowDiv(homeAppDiv);
}

async function launchEngApp(){
    console.log("launchEngApp");
    ShowDiv(engAppDiv);
    //devo chiedere qualcosa al server e lui mi risponderà:
    // NewRequest();
    await importEngData();//è la funzione su engApp.js che scarica le informazini da google
}
async function launchMeApp(){
    console.log("launchMeApp");
    ShowDiv(meAppDiv);
    console.log("launching importQuestData()");
    await importQuestData();
    elencaQuestCategories();
}
async function launchGymApp(){
    console.log("launchGymApp");
    ShowDiv(gymAppDiv);
    await importGymData();
    UpdateGymPage();
}
function launchSettingsApp(){
    console.log("launchSettingsApp");
    ShowDiv(settingsAppDiv);
}



/**nasconde tutte le applicazioni e mostra quella come argomento! element è la variabile di quella div! */
function ShowDiv(element){
    // var divAppIdArray.[];
    for (let i = 0; i<divAppIdArray.length;i++){
        divAppIdArray[i].classList.add("d-none");//le nasconde tutte
    }
    element.classList.remove("d-none");
}