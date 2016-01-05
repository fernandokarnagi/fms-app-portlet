YUI().use('aui-button', 'node', function(Y) {
	var fmsSearchBtn = new Y.Button({
		label : 'Show Schedule',
		srcNode : '#fmsSearchBtn',
		cssClass: 'btn btn-lg btn-block btn-primary'
	}).render();
	
	fmsSearchBtn.on("click", function() {
		
		console.log("Search button is clicked");
		
		
	}, fmsSearchBtn);

});