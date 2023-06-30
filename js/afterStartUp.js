document.addEventListener("DOMContentLoaded",afterPageLoad);




/**inserire qui tutti gli event listeners, ed eventualmente le funzioni che devono avviarsi subito dopo il caricamento!! */
function afterPageLoad(){
    //document.getElementById("title").textContent = "Page Loaded";
    //document.getElementById("secondaryBtn").addEventListener("click", PressedSecondaryBtn);
    
    sandwichBtn.addEventListener("click",sandwichBtnFnc);
    homeAppBtn.addEventListener("click",launchHomeApp);
    engAppBtn.addEventListener("click",launchEngApp);//missing
    meAppBtn.addEventListener("click",launchMeApp);//missing
    gymAppBtn.addEventListener("click",launchGymApp);//missing
    settingsAppBtn.addEventListener("click",launchSettingsApp);//missing



    gymAppDiv.addEventListener("click",clickInGymAppDiv);
    questsDiv.addEventListener("click",clickInQuestsAppDiv);

    //alla fine!
    importAllDataFromServer();//dopo che ha caricato la pagina inizia a scaricare la roba dal server!
}

