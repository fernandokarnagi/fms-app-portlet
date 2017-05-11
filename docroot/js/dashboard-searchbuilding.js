YUI().use('aui-button', 'node', function(Y) {
	var fmsSearchBtn = new Y.Button({
		label : 'Search Building',
		srcNode : '#fmsSearchBtn',
		cssClass: 'btn btn-lg btn-block btn-primary'
	}).render();
	
	fmsSearchBtn.on("click", function() {
		
		//var building = Y.one('#fmsBuilding');
		//var supermarket = Y.one('#fmsSupermarket');
		console.log("Search button is clicked");
	  
		
		
		
	}, fmsSearchBtn);

});