/**Gli dai l'array di bottoni, e lui li divide in righe con le div! */
function createButtonsLayout(ButtonsArray,BoottoniPerRiga){
    var DivStart = '<div class="d-flex text-center justify-content-center">';
    var DivEnd = '</div>';

    var htmlContent = DivStart;
    for (let i = 0; i<ButtonsArray.length; i++){

        htmlContent += ButtonsArray[i];
        if ((i+1) % BoottoniPerRiga == 0){//2 bottoni per riga!
            htmlContent += DivEnd + DivStart;
        } else if (i == ButtonsArray.length -1) {//se è l'ultima
            htmlContent += DivEnd;
        }
    }
    return htmlContent;
}


/**ritorna ExerciseObj grazie all'id dell'esercizio 
 * es:  returnObjectFromArray(id,"questId",QuestData);
*/
function returnObjectFromArray(id,nomeId,Array){
    for (let i = 0; i < Array.length; i++){
        if (Array[i][nomeId] == id) return Array[i];
    }
}





/**crea un bottone stardard di classe btnSquare
 * @constructor ex: var btn =  creaBottone(id,text,icon);
 * @param {string} id - REQUIRED!.
 * @param {string} text - REQUIRED!.
 * @param {string} icon - NOT REQUIRED!.
 * @param {string} otherObj = { - NOT REQUIRED!.
 * @param {string} class: replace the default;.
 * @param {string} moreClasses: added to the dafault;
 * @param {string} style: added;
 * @param {string} data: format the all string here, because it adds it as it is to the button!
 * otherObj = {
 *  class: replace the default;
 *  moreClasses: added to the dafault;
 *  style: added;
 *  data: format the all string here, because it adds it as it is to the button!
 * }
 */
function creaBottone(id,text,icon,otherObj){
    var Icon = (icon ? '<span class="material-icons-round md-24 md-dark px-2">'+icon+'</span>' : "");
    var otherArray = [];//cos' faccio il join avendo solo quello che ho inserito
    
    //la classe almeno quella standard c'è sicuro!
    var Class; var StandardClass = "btnSquare";
    if (otherObj && otherObj.moreClasses){ 
        Class = 'class="'+StandardClass+' '+otherObj.moreClasses+'"';
    }else if (otherObj && otherObj.class){
        Class = 'class="'+otherObj.class+'"';
    } else {//se non ho dato classi uso quella di default!
        Class = 'class="'+StandardClass+'"';
    }
    otherArray.push(Class);//(moreClasses ? 'class="btnSquare '+moreClasses+'"' : 'class="btnSquare"');
    if (otherObj){
        //aggiungo eventuale style
        if (otherObj.style){ 
            var Style = 'style="'+otherObj.styleText +'"';
            otherArray.push(Style)
        }
        //aggiungo eventuale dataset
        if (otherObj.data){ 
            otherArray.push(otherObj.data);
            // var data = ;
        }
    }
    // var Data = if ()

    var otherTxT = otherArray.join(" ");
    var htmlOutput = 
    '           <button id="'+id+'" '+otherTxT+'>'+
                    Icon +
    '               <span class="px-2">'+text+'</span>'+
    '           </button>';
    return htmlOutput;
}
// function creaBottone(id,text,icon,moreClasses,styleText){
//     var Icon = (icon ? '<span class="material-icons-round md-24 md-dark px-2">'+icon+'</span>' : "");
//     var Class = (moreClasses ? 'class="btnSquare '+moreClasses+'"' : 'class="btnSquare"');
//     var Style = (styleText ? 'class="btnSquare '+styleText +'"': '');
//     var Data
//     var htmlOutput = 
//     '           <button id="'+id+'" '+Class+' '+Style+'>'+
//                     Icon +
//     '               <span class="px-2">'+text+'</span>'+
//     '           </button>';
//     return htmlOutput;
// }

// var BtnsConfermaIdArray = ["discard","confirm"];
/**i due id dei bottoni sono discard e confirm. ritorna il testo da iserire! 
 * 
*/
function creaBottoneDiConferma(text,indexConfirming){
    var htmlOutput = 
    '    <div class="text-center"><h3>'+text+'</h3>'+
    '        <div class="d-flex text-center justify-content-center" >'+
                creaBottone(BtnsConfermaIdArray[0],"Discard",'close',{moreClasses: "bgr"})+
                creaBottone(BtnsConfermaIdArray[1],"Confirm",'check',{moreClasses: "bgg",data:'data-index-confirming="'+indexConfirming+'"'})+
    '        </div>'+
    '    </div>';
    return htmlOutput;
}
// var BtnsConfermaIdArray = ["discard","confirm"];
// /**i due id dei bottoni sono discard e confirm. ritorna il testo da iserire! */
// function creaBottoneDiConferma(text){
//     var htmlOutput = 
//     '    <div class="text-center"><h3>'+text+'</h3>'+
//     '        <div class="d-flex text-center justify-content-center" >'+
//     '            <button id="discard" class="btnSquare bgr">'+
//     '                <span class="material-icons-round md-24 md-dark px-2">close</span>'+
//     '                <span class="px-2"> Discard</span>'+
//     '            </button>'+
//     '            <button id="confirm" class="btnSquare bgg">'+
//     '                <span class="material-icons-round md-24 md-dark px-2">check</span>'+
//     '                <span class="px-2"> Confirm</span>'+
//     '            </button>'+
//     '        </div>'+
//     '    </div>';
//     return htmlOutput;
// }



/**carica il messaggio in 'serverMessagesDiv' e restituisce l'id così poi lo posso cancellare....
 * xke l'id lo crea lui! 
 * Htmltext è il testo,
 * timeout in ms - NOT REQUIRED! - se inserito cancella il messaggio dopo quei millisecondi!
 * @constructor ex: var MessageId =  logMessageInServerMessagesDiv(Htmltext,3000);
 * @param {string} Htmltext - REQUIRED!.
 * @param {number} timeout - NOT REQUIRED!.
 * */
function logMessageInServerMessagesDiv(Htmltext,timeout){
    // if (spinner) spinner = spinnerBorder
    // var Message = '<span> Uploading the quest <b>'+text+' </span>';
    var MessageId = "serverMessage"+serverMessageIdUsed++;
    serverMessagesDiv.innerHTML += '<div id="'+MessageId+'">'+ Htmltext +'</div>';
    if (typeof(timeout) == "number" && !isNaN(timeout)){
        setTimeout(function(){ //dopo 3000 milisecondi esegue questa funzione!!!
            document.getElementById(MessageId).remove();//toglie il messaggio di download!!!
        },timeout);
    }
    return MessageId;
}


/**formatta meglio il messaggio per farlo più bello! */
function displayEarnPointsMessage(points,timeout){
    var Message = 'Added <b>'+points+'</b> points'
    var MessageId = logMessageInServerMessagesDiv(Message,timeout);   
}

/**formatta meglio il messaggio per farlo più bello! */
function displayEarnMoneyMessage(earnByReset,timeout){//questa funzione deve aggiornare i soldi, aggiungere il bottone per aumentare il rent...quindi è da modificare!!!
    var Message = '<b>Money '+earnByReset.Multiplier.toFixed(2)+'</b>';
    var MessageId = logMessageInServerMessagesDiv(Message,timeout);   
}

function btnSquareProgress(id,text,value,icon){
    var Icon = (icon ? '<span class="material-icons-round md-24 md-dark px-2">'+icon+'</span>' : "");
/*   var otherArray = [];//cos' faccio il join avendo solo quello che ho inserito
/*    
/*   //la classe almeno quella standard c'è sicuro!
/*   var Class; var StandardClass = "btnSquare";
/*   if (otherObj && otherObj.moreClasses){ 
/*       Class = 'class="'+StandardClass+' '+otherObj.moreClasses+'"';
/*   }else if (otherObj && otherObj.class){
/*       Class = 'class="'+otherObj.class+'"';
/*   } else {//se non ho dato classi uso quella di default!
/*       Class = 'class="'+StandardClass+'"';
/*   }
/*   otherArray.push(Class);//(moreClasses ? 'class="btnSquare '+moreClasses+'"' : 'class="btnSquare"');
/*   if (otherObj){
/*       //aggiungo eventuale style
/*       if (otherObj.style){ 
/*           var Style = 'style="'+otherObj.styleText +'"';
/*           otherArray.push(Style)
/*       }
/*       //aggiungo eventuale dataset
/*       if (otherObj.data){ 
/*           otherArray.push(otherObj.data);
/*           // var data = ;
/*       }
/*   }
/*   // var Data = if ()
/*
/*   var otherTxT = otherArray.join(" ");
/* */
    var percentage = Math.round(value * 100);
    var Htmltext = Icon + '<span class="px-2">'+text+'</span>'

    var htmlOutput = 
    '<span id="'+id+'" class="btnSquareProgress">'+
    '    <div class="btnSquareProgressBack">'+
            Htmltext +
    '    </div>'+
    '    <div class="btnSquareProgressFront" style="clip-path: inset(0px 0px 0px '+percentage+'%);>'+
            Htmltext +
    '    </div>'+
    '</span>';
    return htmlOutput;
}

function creaProgressBar(id,color,label){
    //color="yellowN"
    var progressBar =
    ' <div class="ProgressNik" >'+ /*id="ProgressBar"*/
    ' <div class="ProgressBack'+color+'" id="ProgressBar'+id+'B"></div>'+
    ' <div class="ProgressFront'+color+'" id="ProgressBar'+id+'F" data-default-label='+label+'></div>'+
    ' </div>';
    return progressBar;
}

//**dopo che la crea e la inserisce?? */
function updateProgressBar (id,percentage){
    var completeId = "ProgressBar"+id;

    var value = Math.round(percentage * 100);
    
    
    /*NEW PROGRESS*/
    document.getElementById(id+"F").style.clipPath = "inset(0 0 0 "+value+"%)";
    //var DefaultLabel = document.getElementById(id+"F").dataset.defaultLabel;

    //var SuffissoLabel = (AbsResultFormat == "on" ? done+"/"+total : value+"%");
    //ora cambio l'etichetta sia fronte che retro!
    // document.getElementById(id+"F").innerText = DefaultLabel+" "+ SuffissoLabel;//done+"/"+total;// value+"%";
    // document.getElementById(id+"B").innerText = DefaultLabel+" "+ SuffissoLabel;//done+"/"+total;// value+"%";labels[0].innerHTML

    // var duration =1+ parseInt(Math.random()*10)/10 * 2;
    
    // animateNew(id,"ProgressPulse "+duration+"s ease 0s 1");//disableBtn 2s ease 0s 1 both;
    
}
