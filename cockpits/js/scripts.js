// JavaScript Document

function hideUrlBar() {
if (window.pageYOffset==0) {
	window.scrollTo(0, 1);
	// repeat every second for slow rendering pages
	setTimeout(function() { hideUrlBar(); }, 3000);
				
	}
}
		
		
		
		
		
		
function MM_jumpMenu(selObj){ 
var destination = selObj.options[selObj.selectedIndex].value;
document.location = destination ;
}

function MM_jump(destination){ 
document.location = destination ;
}