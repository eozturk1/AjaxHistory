AjaxHistory
===========

Back functionality for Ajax calls.

How can I use this?
-----------

Updating History
-----------
To use the ajax stack in a project, ajax calling functions should also call history_update(ajaxCallString) function of the ajaxHistory.js

Example:

Let's say I have a function (ajaxCallFunction), and it interacts with the server with an ajax call.

```
function ajaxCallFunction() {
	/* this is an ajax call */
	...
	...
}
```

To use the ajax stack, the ajaxCallFunction should be looking like this:

```
function ajaxCallFunction() {
	
	// here, we tell the history to add an ajax call to the history.
	// we give the name of the current function as argument, and parameters of it if any.
	history_update('ajaxCallFunction()');

	/* this is an ajax call */
	...
	...
}
```
Going Back in the History
-----------
If we want to go back in the history, and reload the previous ajax call, we will just call

```
history_back();
```

This will load the previous ajax, and delete it from the history.

Note: You may want to use a button or something to call this function, since back button will not work for ajax calls. This is the reason why I wrote AjaxStack.

Testing
-----------
To test AjaxStack, you will need a basic web server software that can run php code. That's all.
