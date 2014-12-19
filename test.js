function addToHistory(item) {
	var xmlHttp = new XMLHttpRequest();

	xmlHttp.onreadystatechange = function () {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
			var out = document.getElementById("out");
			out.innerHTML = xmlHttp.responseText;
			history_update("addToHistory('" + item + "')");
		}	
	}

	xmlHttp.open("GET", "php/loadItem.php?item=" + item);
	xmlHttp.send();
}
