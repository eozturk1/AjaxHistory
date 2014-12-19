var ajaxStack = [];
var currentAjax = "";
var backed = false;

function history_update(ajaxCallString) {
	console.log("Updating history with " + ajaxCallString);
	if (currentAjax != "" && !backed) {
		console.log("Pushing previous ajax.");
		ajaxStack.push(currentAjax);
		console.log(ajaxStack);
		console.log("Done");
	}

	currentAjax = ajaxCallString;
	console.log("Current ajax: " + currentAjax);
	backed = false;
}

function history_back() {
	console.log("Going back in the history.");
	if (ajaxStack.length > 0) {
		var ajaxToRestore = ajaxStack.pop();
		backed = true;

		if (ajaxStack.length == 0) {
			currentAjax = "";
		} else {
			currentAjax = ajaxToRestore;
		}

		console.log("Calling popped function: " + ajaxToRestore);
		var functionFromStr = new Function(ajaxToRestore);
		functionFromStr();
	} else {
		console.log("Ajax history is empty.");
	}

}
