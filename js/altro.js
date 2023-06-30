

var LastAnswer = "WWW";//funziona!!!

function printLastAnswer(){
    console.log(LastAnswer);
}


function talkToServerTest(){
    var functionToRun = "EarnByMultiplier";
    // var argumentToPass = "s";
    // var dataSent = "s";
    console.log("trying to run "+functionToRun);
    var res = talkToServer(functionToRun);//quanfo chiama il server non aspetta! quindi tutto quello che segue non funziona! dovrei inserire promise o await?????
    console.log(res);
    console.log(res.Multiplier);
    LastAnswer = res.Multiplier;
}



async function talkToServerTest2(){
    var functionToRun = "EarnByMultiplier";
    // var argumentToPass = "s";
    // var dataSent = "s";
    console.log("trying to run "+functionToRun);
    try {
        var res = await talkToServerPromise("Me",functionToRun);
        console.log("waiting??");

        //var AwaitedResponse = await Promise.all([res]);//,data2,data3
        //aspetta grazie ad await, ma devo sempre usare async per farla aspettare!!!
        console.log("await");
        //console.log(AwaitedResponse);
        console.log(res.Multiplier);
        LastAnswer = res.Multiplier;

    } catch(er){
        alert(er)
    }
}




/*NOT USED; IS JUST AN EXAMPLE!*/
async function getDataFromServer(){
    try {
        // const data = await runGoogleScript("getData");//the name of the serverSide function
        // const data2 = await runGoogleScript("getData2");
        // const data3 = await runGoogleScript("getData3");
        // alert(`${data} and we have ${data} and finally ${data}`)//alt + 96 = `

        const data = runGoogleScript("getData");//the name of the serverSide function
        const data2 = runGoogleScript("getData2");
        const data3 = runGoogleScript("getData3");

        //Alternativa 1
        const response = await Promise.all([data,data2,data3]); // await lo posso inserire xke ho un async function. quinsi aspetta tutte e tre!
        //response è un array con i tre risultati!!!!
        alert(`${response[0]} and we have ${response[1]} and finally ${response[2]}`)//alt + 96 = `
    
        //Alternativa 2
        const [resp0,resp2,resp3] = await Promise.all([data,data2,data3]); // await lo posso inserire xke ho un async function. quinsi aspetta tutte e tre!
        alert(`${resp0} and we have ${resp2} and finally ${resp3  }`)//alt + 96 = `

  
    } catch(er){
        alert(er)
    }
}
  