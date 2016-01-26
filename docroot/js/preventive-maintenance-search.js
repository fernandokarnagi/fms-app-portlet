YUI().use('aui-button', 'node', function(Y) {
	var fmsSearchBtn = new Y.Button({
		label : 'Show Schedule',
		srcNode : '#fmsSearchBtn',
		cssClass: 'btn btn-lg btn-block btn-primary'
	}).render();
	
	var fmsUploadBtn = new Y.Button({
		label : 'Upload Schedule',
		srcNode : '#fmsUploadBtn',
		cssClass: 'btn btn-lg btn-block btn-primary'
	}).render();
	
	var fmsDownloadBtn = new Y.Button({
		label : 'Download Schedule',
		srcNode : '#fmsDownloadBtn',
		cssClass: 'btn btn-lg btn-block btn-primary'
	}).render();
	
	fmsSearchBtn.on("click", function() {
		
		console.log("Search button is clicked");
		
	}, fmsSearchBtn);
	
	fmsUploadBtn.on("click", function() {
		
		console.log("Upload");
		
	}, fmsUploadBtn);

	fmsDownloadBtn.on("click", function() {
	
	console.log("Download button is clicked");
	
}, fmsDownloadBtn);

});