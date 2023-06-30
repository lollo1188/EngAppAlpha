/**return: response ; 
 * RICORDATI DI USARE ASYNC FUNCTION!!!  POI, SE USI LA FUNZIONE UNA SOLA VOLTA DEVI INSERIRE AWAIT! 
 * ex: var res = await talkToServerPromise(functionToRun);
 * SE USI PIù FUNZIONI USA:
 * var AwaitedResponse = await Promise.all([res,res2,res3]);
 * e la risposta sarà un array: AwaitedResponse[0], ...//
 * functionToRun è una stringa, ed è required!!
 * argumentToPass e dataSent possono essere array, objecta, aof objects, aoa....tutto!
 *  
 * @constructor ex: var res = await talkToServerPromise(functionToRun);
 * @param {string} App - "Eng"||"Me"||"Gym" -Seleziona l'url - REQUIRED!.
 * @param {string} functionToRun - La funzione da fare eseguire al server - REQUIRED!.
 * @param {any} argumentToPass - num, string, array, obj.... not required.
 * @param {any} dataSent - num, string, array, obj.... not required.
 */
function talkToServerPromise(App,functionToRun,argumentToPass,dataSent){
    console.log("App: "+App);
    console.log("functionToRun: "+functionToRun);
    argumentToPass = argumentToPass || "";
    dataSent = dataSent || "";
    if (App == "Me"){
        var url = "https://script.google.com/macros/s/AKfycbwiwYJDBynk1GAfEIJrt9qLfF2SQnuJJ5iPVZIjMmamVjf3jA3X1uJw1NU8eOdK6sYD/exec";
    }else if(App == "Eng"){
     // var url = "https://script.google.com/macros/s/AKfycbwiwYJDBynk1GAfEIJrt9qLfF2SQnuJJ5iPVZIjMmamVjf3jA3X1uJw1NU8eOdK6sYD/exec";//eng
        var url = "https://script.google.com/macros/s/AKfycbzzziNMoD8DCqcmXgxTq8KbQdQM1x4_y7D4YhLkaFt_EuK68SB8ylNjKgKcKfPk3Rtz/exec";//EngAlpha13
    //  var url = "https://script.google.com/macros/s/AKfycbzxswviXF2n9o3gMwElHimyvJPZ3sw-uR0_3XgO_Vn-k2C2Y3C7WN3DKnkXMGf_Fs8VTA/exec";//me
    }else if(App == "Gym"){
        //usa quello di "Me", no??
    }
    console.log(url);

    var infoToSend = {
        functionToRun: functionToRun,
        argumentToPass: argumentToPass,
        dataSent: dataSent,
    };
    console.log("infoToSend: ")
    console.log(infoToSend);


    return new Promise((resolve, reject) => {

        fetch(url,{
            method: 'POST', 
            cache: 'no-cache', 
            redirect: 'follow', 
            body: JSON.stringify(infoToSend) 
        })
        .then(res => res.json())//is the response we get after the fetch is done! //usually it will be a JSON response, so we take the response and we convert it into a json
        .then(res => {//adesso abbiamo la risposta reale, e possiamo farci quello che vogliamo!
            resolve(res);//
            //alert("Success!");
            console.log("Success! result:");
            console.log(res);
        })
        .catch(err => {//appscript con fetch non permette di acchiappare gli errori. ma se io inserisco 'throw error' nel server, con il messaggio, allora posso catch questo errore!
            reject(err)
            //alert("Error!");
            alert("Error! error:");
            console.log(err);
        });
    });
}

/* CHAT GPT response
function NewRequest(){
``
// javascript
const scriptUrl = 'https://script.google.com/macros/s/AKfycbzzziNMoD8DCqcmXgxTq8KbQdQM1x4_y7D4YhLkaFt_EuK68SB8ylNjKgKcKfPk3Rtz/exec'; // Replace with your deployed script URL

// Define the function to call and its parameters
const functionName = 'function01';
const payload = {
  param1: 'value1',
  param2: 'value2'
};

// Make the POST request to the Apps Script URL
fetch(scriptUrl, {
  method: 'POST',
  body: JSON.stringify({ functionName, payload })
})
  .then(response => response.json())
  .then(data => {
    console.log('Response:', data);
    // Process the response data as needed
  })
  .catch(error => console.error('Error:', error));
}
*/



/*
var queueTalkToServerPromiseArray = [];
async function queueTalkToServerPromise(App,functionToRun,argumentToPass,dataSent){
    var queueTalkToServerPromiseObj = {
        App: App,
        functionToRun: functionToRun,
        argumentToPass: argumentToPass,
        dataSent: dataSent,
        status: "toSend",
    };
    queueTalkToServerPromiseArray.push(queueTalkToServerPromiseObj);

    console.log(App);
    argumentToPass = argumentToPass || "";
    dataSent = dataSent || "";
    if (App == "Me"){
        var url = "https://script.google.com/macros/s/AKfycbwiwYJDBynk1GAfEIJrt9qLfF2SQnuJJ5iPVZIjMmamVjf3jA3X1uJw1NU8eOdK6sYD/exec";
    }else if(App == "Eng"){

    }else if(App == "Gym"){
        //usa quello di "Me", no??
    }
    console.log(url);

    var infoToSend = {
        functionToRun: functionToRun,
        argumentToPass: argumentToPass,
        dataSent: dataSent,
    };

    return new Promise((resolve, reject) => {

        fetch(url,{
            method: 'POST', 
            cache: 'no-cache', 
            redirect: 'follow', 
            body: JSON.stringify(infoToSend) 
        })
        .then(res => res.json())//is the response we get after the fetch is done! //usually it will be a JSON response, so we take the response and we convert it into a json
        .then(res => {//adesso abbiamo la risposta reale, e possiamo farci quello che vogliamo!
            resolve(res);//
            //alert("Success!");
            console.log("Success! result:");
            console.log(res);
        })
        .catch(err => {//appscript con fetch non permette di acchiappare gli errori. ma se io inserisco 'throw error' nel server, con il messaggio, allora posso catch questo errore!
            reject(er)
            //alert("Error!");
            alert("Error! error:");
            console.log(err);
        });
    });
}



*/





/**return: response ; 
 * functionToRun è una stringa, ed è required!!
 * argumentToPass e dataSent possono essere array, objecta, aof objects, aoa....tutto!
 *  
 * @constructor 
 * @param {string} functionToRun - La funzione da fare eseguire al server - REQUIRED!.
 * @param {any} argumentToPass - num, string, array, obj.... not required.
 * @param {any} dataSent - num, string, array, obj.... not required.
 */
function talkToServer(functionToRun,argumentToPass,dataSent){
    argumentToPass = argumentToPass || "";
    dataSent = dataSent || "";

    //ora usiamo fetch API to actually submit our request!
    const urlTutorial = "https://script.google.com/macros/s/AKfycbxOP35dXJ0v7gPMDIZ7e_1nHVwNSS6c4hiPmRdIyx8GcbXcYpaDjgio6nMcsqxvxy7xBA/exec";
    const url = "https://script.google.com/macros/s/AKfycbwiwYJDBynk1GAfEIJrt9qLfF2SQnuJJ5iPVZIjMmamVjf3jA3X1uJw1NU8eOdK6sYD/exec";
    /*WORKS*/
    //var infoToSend = {first:"6first6",telephone:"6telephone6",last:"6last6"};  
    /*WORKS*/
    //var infoToSend = [{first:"6first6",telephone:"6telephone6",last:"6last6"}];
    /*WORKS*/
    // var infoToSend = [
    //     {functionToRun:"function1",arguments:[1,2]},
    //     {first:"6first6",telephone:"6telephone6",last:"6last6"}
    // ];
    /*WORKS*/
    var infoToSend = {
        functionToRun: functionToRun,
        argumentToPass: argumentToPass,
        dataSent: dataSent,
    };
//FUNZIONA!!!! PRATICAMANTE POSSO MANDARGLI QUELLO CHE VOGLIO! OGGETTI, ARRAY....E OTTENERE LA RISPOSTA!!!
    //     first: firstName.value,
    //     last: lastName.value,
    //     phone: phoneNumber.value,
    //     city: city.value,
    // };

    // fetch(url,{
    //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //     mode: 'no-cors', // no-cors, *cors, same-origin
    //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     redirect: 'follow', // manual, *follow, error
    //     body: JSON.stringify({first:"6first6",telephone:"6telephone6",last:"6last6"}) // body data type must match "Content-Type" header
    //   });
    //if we don't pass any headers, we dont need mode no cors!, so a regular request will be:
    
    fetch(url,{
        method: 'POST', 
        cache: 'no-cache', 
        redirect: 'follow', 
        body: JSON.stringify(infoToSend) 
    })
    .then(res => res.json())//is the response we get after the fetch is done! //usually it will be a JSON response, so we take the response and we convert it into a json
    .then(res => {//adesso abbiamo la risposta reale, e possiamo farci quello che vogliamo!
        //LastAnswer = res.Multiplier;
        //console.log(res);
        return res;
        //alert("Success!");


    })
    .catch(err => {//appscript con fetch non permette di acchiappare gli errori. ma se io inserisco 'throw error' nel server, con il messaggio, allora posso catch questo errore!
        console.log(err);
        alert("Error!");
    });
}










