var EngDataDownloaded;
var EngData;
// Non so se mi servono!!!
// var EngHeaders; 
// var EngOp;

function updateEngDataReceivedFromServer(EngDataDownloaded){
    // console.log("QuestDataDownloaded");
    // console.log(QuestDataDownloaded);
    EngData           = EngDataDownloaded.EngData;
    // GymHeaders        = GymDataDownloaded.GymHeaders;
    // GymOp             = GymDataDownloaded.GymOp;
}



async function importEngData(){
    console.log(EngData);
    if (!EngData) {/*se è vuoto la importo dal server! */
        console.log("we need to import EngData");

        try {
            // document.getElementById("loadingSpinner").classList.remove("d-none");
            var text = '<span> Downloading your EngData...<b> </span>'+spinnerBorder;
            var MessageId = logMessageInServerMessagesDiv(text);

            // var res = await talkToServerPromise("Eng","importEngData");//importEngData credo sia la funzione su appscript
            var res = await talkToServerPromise("Eng","function01");//importEngData credo sia la funzione su appscript
            // console.log(res);

            //var AwaitedResponse = await Promise.all([res]);//,data2,data3
            //aspetta grazie ad await, ma devo sempre usare async per farla aspettare!!!
            updateEngDataReceivedFromServer(res);


            
            console.log("Imported!");
            // document.getElementById("loadingSpinner").classList.add("d-none");
            document.getElementById(MessageId).remove();//toglie il messaggio di download!!!


        } catch(er){
            alert(er)
        }


    } else {
        console.log("EngData already imported!");
    }

}

var exerciseIdArray = [];
/**questa funzione aggionra sempre la pagina principale degli esercizi, in base ai dati che ha!!! */
function UpdateGymPage(){
    
    // var BoottoniPerRiga = 2;
    // var btnWidth = (100-10*BoottoniPerRiga)/BoottoniPerRiga;

    GymNumbersInput.replaceChildren("");//cancella tutto e rifà.
    GymExerciseBtns.replaceChildren("");//cancella tutto e rifà.
    exerciseIdArray = [];//cancella pure questo, sennò col push diventa lunghissimo!!

    // var classNameDiv = "d-flex text-center justify-content-center bgg";//flex wrap è per fare andare a capo il testo!!!
    // var NewDiv = document.createElement("div");

    // NewDiv.className = classNameDiv;
    // for (let i = 0; i < GymData.length; i++){
    //     exerciseIdArray.push(GymData[i].exerciseId);//aggiunge all'array
    //     var NewSpan = document.createElement("span");
    //     NewSpan.className = "btnSquare2 px-5";
    //     NewSpan.style = "width: "+btnWidth+"%"
    //     NewSpan.id = GymData[i].exerciseId;
    //     NewSpan.innerHTML = GymData[i].exerciseName;
        
    //     NewDiv.appendChild(NewSpan);
    //     if ((i+1) % BoottoniPerRiga == 0){//2 bottoni per riga!
    //         GymExerciseBtns.appendChild(NewDiv);
    //         var NewDiv = document.createElement("div");
    //         NewDiv.className = classNameDiv;
    //     } else if (i == GymData.length -1) {//se è l'ultima
    //         GymExerciseBtns.appendChild(NewDiv);
    //     }

    // }

    var ButtonsArray = [];
    for (let i = 0; i < GymData.length; i++){
        exerciseIdArray.push(GymData[i].exerciseId);//aggiunge all'array
        //posso creare il bottone!

        let id = GymData[i].exerciseId;
        let text = GymData[i].exerciseName;
        let value = GymData[i].Percentuale;
        let valueOffset = GymData[i].PercentualeConOffset;
        //let icon = QuestCategoriesArrayOfObj[i].categoryIcon;
        //let moreClasses = "bgp";
        //let styleText = "width: "+btnWidth; non puoi cambiare la larghezza visto che la fissi nella classe! dovresti usare la classe btnSquare2
        let button = btnSquareProgress(id,text,valueOffset)//icon
        //let button = creaBottone(id,text,"",{class: "btnSquareProgress"});//icon
        ButtonsArray.push(button); 
    }
    //ora ho l'arrai con i bottoni...spero siano formattati bene!
    var htmlContent = createButtonsLayout(ButtonsArray,BoottoniPerRiga);
    GymExerciseBtns.innerHTML = htmlContent;
}

/**dopo che clicco su un esercizio mi chiede queanti ne ho fatti! 
 * in più mi spunta l'input e posso scrivere e confermare quanti ne ho fatti!
*/
//var ExerciseObj;//così lo salvo...ma ricordati di cancellarlo quando serve!
function chiediRipetizioniEsercizioFatto(esercizioid){
    var ExerciseObj = getExerciseById(esercizioid);
    console.log(ExerciseObj);

    GymExerciseBtns.replaceChildren("");//cancella tutto e rifà.

    var NewSpan = document.createElement("span");
    /*NewSpan.className = "btnSquare2 px-5";*/
    /*NewSpan.style = "width: "+btnWidth+"%"*/
    // NewSpan.id = GymData[i].exerciseId;
    NewSpan.innerHTML = "Quanti <b>"+ExerciseObj.exerciseName+"</b> hai fatto?<br>";
    var inputNUM = document.createElement("input");
    inputNUM.id = "inputNUM";
    inputNUM.className = "m-3"
    inputNUM.type = "number";
    inputNUM.placeholder = "repetitions";
    inputNUM.style="height: auto";
    GymNumbersInput.appendChild(NewSpan);
    GymNumbersInput.appendChild(inputNUM);
    document.addEventListener('keypress', function enterPressed(e) {//devi dare il nome alla funzione perchè una volta completata devi rimuovere l'event lisener!!!
        console.log(e);
        if (e.key === 'Enter') {
            // code for enter
            var inputNUMValue = document.getElementById("inputNUM").value;
            console.log(inputNUMValue);
            if (!isNaN(parseInt(inputNUMValue))){//xke 22a con pare int diventa NaN!! input è sempre una stringa però!!
                document.removeEventListener('keypress', enterPressed);
                ExerciseObj.ripetizioni = inputNUMValue;
                chiediConfermaNumeroRipetizioniEsercizio(ExerciseObj);

                // GymNumbersInput.replaceChildren("");//cancella tutto e rifà.
                // UpdateGymPage();
                // gymDoneExercise(ExerciseObj,inputNUMValue);

            }
        }
    });
}

function chiediConfermaNumeroRipetizioniEsercizio(ExerciseObj) {
    
    whatAmIConfirming.push(ExerciseObj);

    GymNumbersInput.replaceChildren("");//cancella tutto e rifà.
    //recupera quest object
    //var QuestObj = returnObjectFromArray(id,"questId",QuestData);
    var text = "Can You Confirm <b>"+ExerciseObj.ripetizioni+" "+ExerciseObj.exerciseName+"</b> ?";
    var htmlOutput = creaBottoneDiConferma(text,whatAmIConfirming.length);
    //var htmlOutput = creaBottoneDiConferma(text);
    GymNumbersInput.innerHTML = htmlOutput;
    //whatAmIConfirming.push(QuestObj);
}
/**carica ExerciseObj.ripetizioni dentro tutto l'ogetto ricevuto!...in cambio dovrebbe ricerverlo aggiornato!!*/
async function uploadGymExercise(indexConfirming){
    var ExerciseObj = whatAmIConfirming[indexConfirming-1];//è l'ultimo che ho inserito!
    
    var text = '<span>Saving  <b>'+ExerciseObj.ripetizioni+" "+ExerciseObj.exerciseName+"</b>"+' </span>'+spinnerBorder;
    var MessageId = logMessageInServerMessagesDiv(text);

    var res = await talkToServerPromise("Me","gymDone",ExerciseObj);
    //gymDoneExercise(ExerciseObj,inputNUMValue);
    if (res.importGymData) updateGymDataReceivedFromServer(res.importGymData);//aggionra i dati della gym dopo il flush!

    //qui deve vedere che risposta ha ricevuto!!
    // NewExerciseObj.ripetizioni = ExerciseObj.ripetizioni;
    // ResponseToSendObj.gymDone = NewExerciseObj;//ricevo questo
    // ResponseToSendObj.importGymData = importGymData();//ricevo questo
    if (res.gymDone.exerciseId == ExerciseObj.exerciseId){//può rimuovere il messaggio! xke ha caricato!
        document.getElementById(MessageId).remove();//rimuove il messaggio di loading

        var Message = '<span><b>'+res.gymDone.ripetizioni+' '+res.gymDone.exerciseName+'</b> Saved!</span>';//</span>
        var MessageId = logMessageInServerMessagesDiv(Message,10*1000);   
        
        if (document.getElementById(res.gymDone.exerciseId)){//significa che la pagina è aperta
            UpdateGymPage();//così aggiusta le percentuali!
        }
        

        // if (res.points) displayEarnPointsMessage(res.points,11*1000)
        // if (res.earnByReset.Multiplier) displayEarnMoneyMessage(res.earnByReset,13*1000);
    }
}

// GymNumbersInput.replaceChildren("");//cancella tutto e rifà.
// UpdateGymPage();
// gymDoneExercise(ExerciseObj,inputNUMValue);

function clickInGymAppDiv(e){
    var id = e.target.id || e.target.parentElement.id;//xke l'id non lo metto nel testo ma nel bottone! il parent!
    console.log(id);
    console.log(e.target);
    if (exerciseIdArray.includes(id)){
        chiediRipetizioniEsercizioFatto(id);
    
        //add similar functions!!
    // } else if (questsBtnsIdArray.includes(id)){//ho cliccato in un bottone 'quest!' quindi devo chiedere conferma!
    //     chiediConfermaQuest(id) //id è la quest!


    } else if (BtnsConfermaIdArray.includes(id) ){ //significa che sto confermando una quest  
        UpdateGymPage();//mostra le categorie
        if (id == "confirm"){
            var indexConfirming = e.target.dataset.indexConfirming || e.target.parentElement.dataset.indexConfirming;
            //console.log("indexConfirming");
            //console.log(indexConfirming);
            indexConfirming = parseInt(indexConfirming);
            uploadGymExercise(indexConfirming);
        }
        else if (id == "discard"){ 
        }
    }
}





/**ritorna ExerciseObj grazie all'id dell'esercizio */
function getExerciseById(id){
    for (let i = 0; i < GymData.length; i++){
        if (GymData[i].exerciseId == id) return GymData[i];
    }
}





/**NOT USED BUT COOL! */
/**questa funzione deve fare i calcoli e inviare il risultato al server!!! */
function gymDoneExercise(ExerciseObj,inputNUMValue){
    console.log("done "+inputNUMValue+" "+ExerciseObj.exerciseName);
    var spinnerBorder = '<span class="spinner-border spinner-border-sm" role="status"></span>';
    var spinnerGrow1 = '<span id="idSpinnerGrow1" class="spinner-grow text-primary d-none" style="width: 1rem; height: 1rem;" role="status"></span>';
    var spinnerGrow2 = '<span id="idSpinnerGrow2" class="spinner-grow text-primary d-none" style="width: 1rem; height: 1rem;" role="status"></span>';
    var spinnerGrow3 = '<span id="idSpinnerGrow3" class="spinner-grow text-primary d-none" style="width: 1rem; height: 1rem;" role="status"></span>';
    // gymTitle1.innerHTML = "Loading <b>"+inputNUMValue+"</b> to the server";

    gymTitle1.innerHTML = spinnerBorder+'<span> Loading <b>'
        + inputNUMValue + '</b> '+ExerciseObj.exerciseName+' to the server </span>'+spinnerGrow1+spinnerGrow2+spinnerGrow3;
    
    var spinnerGrow1 = document.getElementById("idSpinnerGrow1");
    var spinnerGrow2 = document.getElementById("idSpinnerGrow2");
    var spinnerGrow3 = document.getElementById("idSpinnerGrow3");
    setTimeout(function(){ //dopo 3000 milisecondi esegue questa funzione!!!
        spinnerGrow1.classList.remove("d-none");
    },1000);
    setTimeout(function(){ //dopo 3000 milisecondi esegue questa funzione!!!
        spinnerGrow2.classList.remove("d-none");
    },2000);
    setTimeout(function(){ //dopo 3000 milisecondi esegue questa funzione!!!
        spinnerGrow3.classList.remove("d-none");
    },3000);

    //gymTitle2.innerHTML = "";//svuota questo

    //OK, QUI DEVO CALCOLARE I NUOVI VALORI DA INVIARE!!!                
                    
                    
}


