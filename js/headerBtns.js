/**funziona con il dataset hiddenStatus="hidden" || "nonHidden", e li nasconde o li fa comparire accanto a lui! */
function sandwichBtnFnc(){
    var ButtonsToHideUnhide = headerBtnsArray;
    // if (ButtonsToHideUnhide[0].classList)
    console.log(sandwichBtn.dataset.hiddenStatus)
    if (sandwichBtn.dataset.hiddenStatus == "hidden"){
        for  (let i=0;i<ButtonsToHideUnhide.length;i++) {
            ButtonsToHideUnhide[i].classList.remove("d-none");
        } 
        sandwichBtn.dataset.hiddenStatus = "notHidden";
        setTimeout(function(){ //dopo 3000 milisecondi esegue questa funzione!!!
            //li fa scomparire!!!!
            // sandwichBtn.dataset.hiddenStatus = "notHidden";
            if (sandwichBtn.dataset.hiddenStatus == "notHidden"){//xke se lo nascondo manualmente non deve riavviare la funzione!!
                sandwichBtnFnc();//
            }
        },20*1000)
    }
    else if(sandwichBtn.dataset.hiddenStatus == "notHidden") {
        for  (let i=0;i<ButtonsToHideUnhide.length;i++) {
            ButtonsToHideUnhide[i].classList.add("d-none");
        }
        sandwichBtn.dataset.hiddenStatus = "hidden";
    }
}