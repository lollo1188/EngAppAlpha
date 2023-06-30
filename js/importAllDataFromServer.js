// var AllData;

/**importa tutti i dati, ma ogni funzine intanto controlla se li ho importati, sennò ci pensa lei! 
 * se lanci questa funzione lei importa d nuovo tutti i dati forzando il download!!
*/
async function importAllDataFromServer(){
    //console.log(AllData);
    // if (!AllData) {/*se è vuoto la importo dal server! */
    //     console.log("we need to import AllData");

    try {
        //aggiunge il messaggio di download
        var text = '<span> Downloading important Stuff...<b> </span>'+spinnerBorder;
        var MessageId =logMessageInServerMessagesDiv(text);

        //document.getElementById("loadingSpinner").classList.remove("d-none");
        var res1 = talkToServerPromise("Me","importGymData");
        var res2 = talkToServerPromise("Me","importQuestData");
        console.log("waiting??");
        
        var [GymDataDownloaded,QuestDataDownloaded] = await Promise.all([res1,res2]);//,data2,data3
        //aspetta grazie ad await, ma devo sempre usare async per farla aspettare!!!
        console.log("await");

        //salvo
        updateGymDataReceivedFromServer(GymDataDownloaded);
        updateQuestDataReceivedFromServer(QuestDataDownloaded);
        // QuestData           = QuestDataDownloaded.QuestData;
        // QuestHeaders        = QuestDataDownloaded.QuestHeaders;
        // QuestOp             = QuestDataDownloaded.QuestOp;

        console.log("Imported!");
        document.getElementById(MessageId).remove();//toglie il messaggio di download!!!
        
    } catch(er){
        alert(er)
    }

// } else {
//     console.log("GymData already imported!");
// }

}