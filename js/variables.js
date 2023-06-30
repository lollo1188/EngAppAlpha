/**dichiara le variabili che funziona!!!  */
var sandwichBtn = document.getElementById("sandwichBtn");
var homeAppBtn = document.getElementById("homeAppBtn");
var engAppBtn = document.getElementById("engAppBtn");
var meAppBtn = document.getElementById("meAppBtn");
var gymAppBtn = document.getElementById("gymAppBtn");
var settingsAppBtn = document.getElementById("settingsAppBtn");
var headerBtnsArray = [homeAppBtn,engAppBtn,meAppBtn,gymAppBtn,settingsAppBtn];


var welcomePageDiv = document.getElementById("welcomePageDiv");//NEW
var logInPageDiv = document.getElementById("logInPageDiv");//NEW
var signUpPageDiv = document.getElementById("signUpPageDiv");//NEW
var forgotPasswordPageDiv = document.getElementById("forgotPasswordPageDiv");//NEW
var homePageDiv = document.getElementById("homePageDiv");//NEW

var homeAppDiv = document.getElementById("homeAppDiv");
var engAppDiv = document.getElementById("engAppDiv");
var meAppDiv = document.getElementById("meAppDiv");
var gymAppDiv = document.getElementById("gymAppDiv");
var settingsAppDiv = document.getElementById("settingsAppDiv");
var divAppIdArray = [welcomePageDiv,logInPageDiv,signUpPageDiv,forgotPasswordPageDiv, homeAppDiv,engAppDiv,meAppDiv,gymAppDiv,settingsAppDiv];



var GymExerciseBtns = document.getElementById("GymExerciseBtns");
var GymNumbersInput = document.getElementById("GymNumbersInput");
var gymTitle1=document.getElementById("gymTitle1");
var gymTitle2=document.getElementById("gymTitle2");
var serverMessagesDiv = document.getElementById("serverMessagesDiv");


var questsDiv = document.getElementById("questsDiv");

/**ALtre variabili di uso comune! */
var spinnerBorder = '<span class="spinner-border spinner-border-sm" role="status"></span>';
var spinnerGrow = '<span class="spinner-grow text-primary d-none" style="width: 1rem; height: 1rem;" role="status"></span>';

var iconSpanStart = '<span class="material-icons-round md-24 md-dark px-2">';
var iconSpanEnd = '</span>';

//var QuestCategoriesArray = ["study","gg"];

var serverMessageIdUsed = 0;//usato per creare i messaggi di upload

var BoottoniPerRiga = 2;
// var btnWidth = (100-10*BoottoniPerRiga)/BoottoniPerRiga+"%";  non puoi cambiare la larghezza visto che la fissi nella classe! dovresti usare la classe btnSquare2

var BtnsConfermaIdArray = ["discard","confirm"];
var whatAmIConfirming = [];
