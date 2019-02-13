/************************************************/
/* 	Psycho 										*/
/*	Test d’association implicite				*/
/* 	janvier 2019 								*/
/************************************************/
var textArray = ["Joie","Douleur","Amour","Épouvantable","Paix","Horrible","Merveilleux","Méchant","Plaisir","Mal","Magnifique","Affreux","Rires","Échec","Heureux","Blessure"];

var textCatArray =["bon","mauvais","bon","mauvais","bon","mauvais","bon","mauvais","bon","mauvais","bon","mauvais","bon","mauvais","bon","mauvais"];
var imageArray = ["medias/of1.jpg","medias/ym2.jpg","medias/om1.jpg","medias/yf1.jpg","medias/of2.jpg","medias/ym3.jpg","medias/om2.jpg","medias/yf4.jpg","medias/of3.jpg","medias/ym3.jpg","medias/om3.jpg","medias/yf5.jpg"];	
var imageCatArray = ["vieux","jeune","vieux","jeune","vieux","jeune","vieux","jeune","vieux","jeune","vieux","jeune"];
var imageCat = ["vieux","jeune"];
var textCat = ["bon","mauvais"];
var btnCat = [];
var currentBloc, maxBloc;
var indexTextArray, indexImageArray;
var startTime, stopTime;
var typeDisplayed, itemDisplayed;
var currentTest, maxTest;
var testRunning, keyEnabled;
var testReport, testError;
var timer, maxTimer, timerLoop;
/************************************************/
function getKeyCode(keycode){
	switch(keycode){
		case 32:		// SPACE BAR
			initAll();
			break;
		case 69:		// e
			endTest(0);
			break;
		case 73:		// i
			endTest(1);
			break;
		default:
			// alert("keycode: "+keycode);
			break;
	}
}
/************************************************/
function initAll(){
	if(!testRunning){
		initReport();
		initBloc();
		testRunning = true;
		displayDebug("Test en cours...");
	}
}
function endAll(){
	saveReport();
	testRunning = false;
	displayDebug("Barre espace pour commencer...");
}
/************************************************/
function initBloc(){
	currentBloc = 0;
	maxBloc = 5;
	startBloc();
}
function startBloc(){
	if( currentBloc++<maxBloc){
		initVariables();
		initCat();
		startTimer();
	}else{
		endAll();	
	}
}
function endBloc(){
	clearCat();
	startBloc();
}
/************************************************/
function initVariables(){
	indexTextArray = 0;
	indexImageArray = 0;
	currentTest = 0;
	maxTest = 8;
	maxTimer = 5;
}
/************************************************/
function initCat(){
	var btnLeftTitle, btnRightTitle;
	
	switch(currentBloc){
		case 1:
			btnCat[0] = [imageCat[0]];	// btn G -> vieux
			btnCat[1] = [imageCat[1]];	// btn D -> jeune
			
			btnLeftTitle = btnCat[0];
			btnRightTitle = btnCat[1];
			break;
		case 2:
			btnCat[0] = [textCat[0]];
			btnCat[1] = [textCat[1]];
			
			btnLeftTitle = btnCat[0];
			btnRightTitle = btnCat[1];
			break;
		case 3:
			btnCat[0] = [imageCat[0],textCat[0]];
			btnCat[1] = [imageCat[1],textCat[1]];
			
			btnLeftTitle = btnCat[0][0] + "<br/> <span class='ou'>ou</span> <br/>" + btnCat[0][1];
			btnRightTitle = btnCat[1][0] + "<br/> <span class='ou'>ou</span> <br/>" + btnCat[1][1];
			break;
		case 4:
			btnCat[0] = [imageCat[1]];
			btnCat[1] = [imageCat[0]];
			
			btnLeftTitle = btnCat[0];
			btnRightTitle = btnCat[1];
			break;
		case 5:
			btnCat[0] = [imageCat[1],textCat[0]];
			btnCat[1] = [imageCat[0],textCat[1]];
			
			btnLeftTitle = btnCat[0][0] + "<br/> <span class='ou'>ou</span> <br/>" + btnCat[0][1];
			btnRightTitle = btnCat[1][0] + "<br/> <span class='ou'>ou</span> <br/>" + btnCat[1][1];
			break;
		default:
			break;
	}
	displayCat(btnLeftTitle,btnRightTitle);
}
function clearCat(){
	displayCat("...","...");
}
function displayCat(leftCat,rightCat){
	document.getElementById("left").innerHTML = leftCat;
	document.getElementById("right").innerHTML = rightCat;
}
/************************************************/
function prepareTest(){
	clearText();
	clearImage();
	clearError();
	setTimeout(startTest, 300);
}
function startTest(){
	if(currentTest++ < maxTest){
		displayStatus();
		displayItem();
	}
	else{
		endBloc();
	}
}
function endTest(type){
	if(testRunning && keyEnabled){
		if(matchingCat(type)){
			stopTime = new Date();
			updateReport();
			prepareTest();
		}else{
			addError();
		}
	}
}
function matchingCat(type){
	var match = false;
	for (var i=0;i<btnCat[type].length;i++){
		if((typeDisplayed && btnCat[type][i]==imageCatArray[indexImageArray])||(!typeDisplayed && btnCat[type][i]==textCatArray[indexTextArray])){
			match = true;
			break;
		}
	}
	return(match);
}
/************************************************/
function clearError(){
	testError = 0;
	document.getElementById("error").style.display = "none";
}
function addError(){
	testError++;
	document.getElementById("error").style.display = "block";
}
/************************************************/
function displayItem(){
	switch(currentBloc){
		case 1:
			typeDisplayed = 1;	// images
			break;
		case 2:
			typeDisplayed = 0;	// textes
			break;
		case 3:
			typeDisplayed = Math.floor(Math.random()*2); 	// images et textes
			break;
		case 4:
			typeDisplayed = 1;
			break;
		case 5:
			typeDisplayed = Math.floor(Math.random()*2);
			break;
		default:
			break;
	}
	if(typeDisplayed)displayImage();
	else displayText();
	startTime = new Date();
}
/************************************************/
function initReport(){
	testReport = "bloc,no,item affiche,temps(ms),erreurs\n";
}
function updateReport(){
	testReport += currentBloc + "," + currentTest + "," + itemDisplayed + "," + (stopTime - startTime) + "," + testError + "\n"; 
}
function saveReport(){
	var blob = new Blob([testReport], {type: "text/plain;charset=utf-8"});
	var timeStamp = new Date();
	var fileName = "rapport_"+timeStamp.getHours()+"_"+timeStamp.getMinutes()+".csv";
	saveAs(blob, fileName);
}
/************************************************/
function displayText(){
	indexTextArray = Math.floor(Math.random()*textArray.length);
	itemDisplayed = textArray[indexTextArray];
	document.getElementById("game").innerHTML = itemDisplayed;
	//indexTextArray = ++indexTextArray % textArray.length;
}
function clearText(){
	document.getElementById("game").innerHTML = "";
}
/************************************************/
function displayImage(){
	indexImageArray = Math.floor(Math.random()*imageArray.length);	// acces aléatoire
	itemDisplayed = imageArray[indexImageArray]
	document.getElementById("game").style.backgroundImage = "url('"+itemDisplayed+"')";
	//indexImageArray = ++indexImageArray % imageArray.length;		// acces sequentiel
}
function clearImage(){
	document.getElementById("game").style.backgroundImage = "none";
}
/************************************************/
function displayStatus(){
	var stringStatus = "bloc: " + currentBloc + " / " + maxBloc + " test: " + currentTest + " / " + maxTest;
	displayDebug(stringStatus);
}
function displayTimer(){
	document.getElementById("game").innerHTML = timer.toString();
}
function displayDebug(debugString){
	document.getElementById("debug").innerHTML = debugString;
}
function clearDebug(){
	document.getElementById("debug").innerHTML = "";
}
/************************************************/
function startTimer(){
	keyEnabled = false;
	timer = maxTimer;
	displayTimer();
	timerLoop = setInterval(loopTimer, 1000)
}
function loopTimer(){
	if(timer-- >0)displayTimer();
	else stopTimer();
}
function stopTimer(){
	clearInterval(timerLoop);
	keyEnabled = true;
	prepareTest();
}
/************************************************/
document.addEventListener('keydown', function(event) {
	getKeyCode(event.keyCode);
});
/************************************************/
