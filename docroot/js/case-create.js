
YUI().use('aui-button', 'node', function(Y) {
	var submitBtn = new Y.Button({
		label : 'Submit',
		srcNode : '#submitBtn',
		cssClass: 'btn btn-lg  btn-primary'
	}).render();
	
	var closeBtn = new Y.Button({
		label : 'Close',
		srcNode : '#closeBtn',
		cssClass: 'btn btn-lg btn-primary'
	}).render();
	
	submitBtn.on("click", function() {
		console.log("Submit Button is clicked");
	}, submitBtn);
	
	closeBtn.on("click", function() {
		console.log("Close Button is clicked");
	}, closeBtn);

});