YUI().use('aui-button', 'node', function(Y) {
	var fmsSearchBtn = new Y.Button({
		label : 'Search Resource',
		srcNode : '#fmsSearchBtn',
		cssClass: 'btn btn-lg btn-block btn-primary'
	}).render();
	
	fmsSearchBtn.on("click", function() {
		
	  
		var omb = new google.maps.Marker({
		    position: {lat: 1.28, lng: 103.851959},
		    map: map,
		    title: 'Donald Trump'
		  });
		
		var contentStringOmb = '<div id="content">'+
	      '<div id="siteNotice">'+
	      '</div>'+
	      '<h1 id="firstHeading" class="firstHeading">Donald Trump</h1>'+
	      '<div id="bodyContent">'+
	      '<p>Job desc: Cleaner</p>'+
	      '<table><tr><td><img height="100px" width="80px" src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Donald_August_19_(cropped).jpg"/></td><td valign="top">' +
	      '<a href="#">View Profile</a><br/>' +
	      '<a href="#">View Current Assignment</a><br/>' +
	      '<a href="#">View Assignment History</a><br/>' +
	      '</td></tr></table></div>'+
	      '</div>';
  
			  var infowindowOmb = new google.maps.InfoWindow({
			    content: contentStringOmb
			  });

			omb.addListener('click', function() {
			infowindowOmb.open(map, omb);
		  });
		
		var orfls = new google.maps.Marker({
		    position: {lat: 1.30, lng: 103.861959},
		    map: map,
		    title: 'Sarah Palin'
		  });
		
		var contentString = '<div id="content">'+
		  '<div id="siteNotice">'+
	      '</div>'+
	      '<h1 id="firstHeading" class="firstHeading">Sarah Palin</h1>'+
	      '<div id="bodyContent">'+
	      '<p>Job desc: Cleaner</p>'+
	      '<table><tr><td><img height="100px" width="80px" src="https://7373-presscdn-0-43-pagely.netdna-ssl.com/wp-content/uploads/2014/07/Palin.jpg"/></td><td valign="top">' +
	      '<a href="#">View Profile</a><br/>' +
	      '<a href="#">View Current Assignment</a><br/>' +
	      '<a href="#">View Assignment History</a><br/>' +
	      '</td></tr></table></div>'+
	      '</div>';
		
		  var infowindow = new google.maps.InfoWindow({
		    content: contentString
		  });

		  orfls.addListener('click', function() {
		    infowindow.open(map, orfls);
		  });

		
	}, fmsSearchBtn);

});