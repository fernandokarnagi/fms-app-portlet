YUI().use('aui-button', 'node', function(Y) {
	var fmsSearchBtn = new Y.Button({
		label : 'Search Building',
		srcNode : '#fmsSearchBtn',
		cssClass: 'btn btn-lg btn-block btn-primary'
	}).render();
	
	fmsSearchBtn.on("click", function() {
		
		var building = Y.one('#fmsBuilding');
		var supermarket = Y.one('#fmsSupermarket');
		console.log("Search button is clicked");
		
	  
		if (building.get("checked")) {
			var omb = new google.maps.Marker({
			    position: {lat: 1.30, lng: 103.851959},
			    map: map,
			    title: 'One Marina Boulevard'
			  });
			
			var contentStringOmb = '<div id="content">'+
		      '<div id="siteNotice">'+
		      '</div>'+
		      '<h1 id="firstHeading" class="firstHeading">One Marina Boulevard</h1>'+
		      '<div id="bodyContent">'+
		      '<p>One Marina Boulevard, sometimes called NTUC Centre, is a 32-storey, 110 m skyscraper at 1 Marina Boulevard, in the zone of Raffles Place and Marina Bay, in the central business district of Singapore</p>'+
		     
		      '<a href="/attendance">View Attendance Summary</a><br/>' +
		      '<a href="/building-preventive-maintenance">View Preventive Maintenance Summary</a><br/>' +
		      '<a href="#">View Corrective Maintenance Summary</a><br/>' +
		      '</div>'+
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
			    title: 'One Raflles Place'
			  });
			
			var contentString = '<div id="content">'+
		      '<div id="siteNotice">'+
		      '</div>'+
		      '<h1 id="firstHeading" class="firstHeading">One Raffles Place</h1>'+
		      '<div id="bodyContent">'+
		      '<p>One Raffles Place, formerly Overseas Union Bank Centre or OUB Centre is one of the three tallest skyscrapers in the city of Singapore, sharing the title with the UOB Plaza and Republic Plaza</p>'+
		     
		      '<a href="/attendance">View Attendance Summary</a><br/>' +
		      '<a href="/building-preventive-maintenance">View Preventive Maintenance Summary</a><br/>' +
		      '<a href="#">View Corrective Maintenance Summary</a><br/>' +
		      '</div>'+
		      '</div>';

			  var infowindow = new google.maps.InfoWindow({
			    content: contentString
			  });

			  orfls.addListener('click', function() {
			    infowindow.open(map, orfls);
			  });
		}
		
		if (supermarket.get("checked")) {
			var ntuc = new google.maps.Marker({
			    position: {lat: 1.3048722, lng: 103.7723975},
			    map: map,
			    title: 'University Town NTUC Fairprice'
			  });
			

			var contentString = '<div id="content">'+
		      '<div id="siteNotice">'+
		      '</div>'+
		      '<h1 id="firstHeading" class="firstHeading">University Town NTUC Fairprice</h1>'+
		      '<div id="bodyContent">'+
		      '<p>NTUC FairPrice Co-Operative is a supermarket chain based in Singapore and the largest in the country. The company is a co-operative of the National Trades Union Congress or NTUC</p>'+
		     
		      '<a href="/attendance">View Attendance Summary</a><br/>' +
		      '<a href="/supermarket-preventive-maintenance">View Preventive Maintenance Summary</a><br/>' +
		      '<a href="#">View Corrective Maintenance Summary</a><br/>' +
		      '</div>'+
		      '</div>';

			  var infowindow = new google.maps.InfoWindow({
			    content: contentString
			  });

			  ntuc.addListener('click', function() {
			    infowindow.open(map, ntuc);
			  });
		}
		
		
		
	}, fmsSearchBtn);

});