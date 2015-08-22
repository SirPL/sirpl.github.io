function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

$(document).ready(function() {
	if(getURLParameter("p") == null) {
		$("#main").load("pages/index.html");
	} else {
		$("#main").load("pages/"+getURLParameter("p")+".html");
	}
	
	$("#menu").load("menu.html");
});
