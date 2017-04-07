var selectedYear;
var dataArray = [];
/*******************************************************/
/* iPad Pro screen resolution: 2732 x 2048             */
/* Exporter au format CSV, copier les données dans     */
/* TextEdit et exporter au format txt codé UTF-8       */
/*******************************************************/
function selectYear(){
	selectedYear=document.getElementById("years").value;

	var xmlHTTP = new XMLHttpRequest();
	var fileURL = 'years/' + selectedYear + '/list.txt';

	xmlHTTP.onreadystatechange = function() {
		var fileContent = "";
		displayMessage("Chargement fichier...");
		
		if (xmlHTTP.readyState == 4 && xmlHTTP.status == 200) {
			fileContent = xmlHTTP.responseText;
			contentToData(fileContent);
			createThumbNails();
			createHeader()
		}
	};
	xmlHTTP.open("GET", fileURL, true);
	xmlHTTP.overrideMimeType('text/xml; charset=utf8');
	xmlHTTP.send(null);
}
/*******************************************************/
function contentToData (content){
	var tempArray = content.split("\n"); //  \r
	displayMessage("Construction données...");
	
	dataArray = [];
	
	for(var i=0 ; i<tempArray.length ; i++){
		var studentData = tempArray[i].split(";");
		var newStudent = new Object();
		
		dataArray[i] = newStudent;
		dataArray[i].studentFirstName = studentData[0];
		dataArray[i].studentName = studentData[1];
		dataArray[i].studentGrade = studentData[2];
		dataArray[i].studentURL = studentData[3];
	}
}
/*******************************************************/
function createThumbNails(){
	var stringHTML = "";
	for(var i=0 ; i<dataArray.length ; i++){
		
		var thumbnailURL = "years/" +  selectedYear + "/vignettes/" + dataArray[i].studentURL;
		stringHTML += '<div class="thumbnail" id="student_'+i+'" style="background-image:url('+thumbnailURL+')" onclick="zoomInThumbnail('+i+')">';
	
		stringHTML += '<div class="name">';
		stringHTML += dataArray[i].studentFirstName + "<br />";
		stringHTML += dataArray[i].studentName;
		stringHTML += '</div>' +'\n';
		stringHTML += '</div>' +'\n';
	}
	//stringHTML += '<div class="zoomOut" id="zoom" onclick="zoomOutThumbnail()"></div>' +'\n';
	document.getElementById("thumbnails").innerHTML = stringHTML;
}
/*******************************************************/
function createHeader(){
	var stringHTML = "";
	
	stringHTML += "<h1>Université de Saint-Boniface</h1>";
	stringHTML += "<h2>Finissants "+selectedYear+"</h2>";
	document.getElementById("header").innerHTML = stringHTML;
}
/*******************************************************/
function displayMessage(message){
	var stringHTML = "";
	document.getElementById("thumbnails").innerHTML = message;
}
/*******************************************************/
function zoomInThumbnail(thumbnail){
	var stringHTML = "";
	
	stringHTML += dataArray[thumbnail].studentFirstName + " ";
	stringHTML += dataArray[thumbnail].studentName + "<br />";
	stringHTML += dataArray[thumbnail].studentGrade + "<br />";
	
	var pictureURL = "years/" +  selectedYear + "/photos/" + dataArray[thumbnail].studentURL;
	
	document.getElementById("zoomText").innerHTML = stringHTML;
	document.getElementById("picture").style.background = "url("+pictureURL+")";
	document.getElementById("zoom").className = "zoomIn";
}
/*******************************************************/
function zoomOutThumbnail(){
	document.getElementById("zoomText").innerHTML = "";
	document.getElementById("zoom").className = "zoomOut";
}
