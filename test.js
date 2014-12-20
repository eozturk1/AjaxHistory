var out = document.getElementById("out");

function addToHistory(item) {
	if (item == 'apples') {
		loadApples();	
	} else if (item == 'pears') {
		loadPears();
	} else if (item == 'oranges') {
		loadOranges();	
	} else {
		out.innerHTML = item;		
	}
}

function loadApples() {
	var xmlHttp = new XMLHttpRequest();

	xmlHttp.onreadystatechange = function () {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
			out.innerHTML = xmlHttp.responseText;
			history_update("loadApples()");
		}	
	}

	xmlHttp.open("GET", "php/loadItem.php?item=apples");
	xmlHttp.send();
}

function loadPears() {
	var xmlHttp = new XMLHttpRequest();

	xmlHttp.onreadystatechange = function () {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
			out.innerHTML = xmlHttp.responseText;
			history_update("loadPears()");
		}	
	}

	xmlHttp.open("GET", "php/loadItem.php?item=pears");
	xmlHttp.send();
}

function loadOranges() {
	var xmlHttp = new XMLHttpRequest();

	xmlHttp.onreadystatechange = function () {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
			out.innerHTML = xmlHttp.responseText;
			history_update("loadOranges()");
		}	
	}

	xmlHttp.open("GET", "php/loadItem.php?item=oranges");
	xmlHttp.send();
}

