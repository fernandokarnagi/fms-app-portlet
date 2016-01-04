YUI().use('aui-button', function(Y) {
	var fmsSearchBtn = new Y.Button({
		label : 'Search Technician',
		srcNode : '#fmsSearchBtn',
		cssClass: 'btn btn-lg btn-block btn-primary'
	}).render();
	
	fmsSearchBtn.on("click", function() {
		console.log("Search button is clicked: ", this);
	}, fmsSearchBtn);

});