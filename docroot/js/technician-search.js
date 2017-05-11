var markers = [];

var technicians = [];



function renderTechnicians(technicians) {
	//initMap();
	console.debug("renderTechnicians Called updated"); 
	technicians.forEach(function(technician) { 
		console.debug("forEach  Called updated");
	     addMarker(technician.lat,technician.lng,technician.title,technician.description);
	});
}

function addMarker(lat,lng,title,description) {
	console.debug("addMarker  Called updated"); 
	var marker = new L.Marker([lat, lng], {bounceOnAdd: false}).addTo(map);		
	console.debug("lat  :"+lat);
	console.debug("lng  :"+lng);
	
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
	    if (xhr.readyState == XMLHttpRequest.DONE) {
	        console.log("token: " + xhr.responseText);
	        var obj = JSON.parse(xhr.responseText);
	        var token = obj.access_token;
	        var newUrl = "https://developers.onemap.sg/privateapi/routingsvc/route?start="+lat+","+lng+"&end="+selectedPropertyPosition.lat+","+selectedPropertyPosition.lng+"&routeType=walk&token=" + encodeURIComponent(token);
	        
	        var xhr2 = new XMLHttpRequest();
	        xhr2.onreadystatechange = function() {
	    	    if (xhr2.readyState == XMLHttpRequest.DONE) { 
	    	        var obj2 = JSON.parse(xhr2.responseText);
	    	        console.log(obj2); 
	    	        var totalTime = obj2.route_summary.total_time;
	    	        var totalDistance = obj2.route_summary.total_distance;
	    	        
	    	        var tel = null;
	    	    	if(title == 'fpteam1'){
	    	    		tel = "90003454";
	    	    	}else{
	    	    		tel = "81822345";
	    	    	}
	    	    	var contentStringOmb = '<div id="content">'+
	    	    	  '<div id="siteNotice">'+
	    	          '</div>'+
	    	          '<h1 id="firstHeading" class="firstHeading">'+title+'</h1>'+
	    	          '<div id="bodyContent">'+
	    	          '<p>Team :'+description+'</p>'+
	    	          '<p>Tel :'+tel+'</p>'+
	    	          '<p>Approx. Walking Distance :'+totalDistance+' meter</p>'+
	    	          '<p>Approx. Walking Time :'+totalTime+' minutes</p>'+
	    	          '</div>';
	    	    	
	    	    	marker.bindPopup(contentStringOmb);
	    	    	markers.push(marker);
	    	    	console.debug("pushed to marker");  
	    	    	
	    	    }
	    	}
	        xhr2.open('GET', newUrl, true);
	        xhr2.send(null); 
	    	
	    }
	}
	xhr.open('GET', 'https://developers.onemap.sg/privateapi/auth/get/getToken?email=chinyc%40onemarina.com.sg&password=Omps1234', true);
	xhr.send(null);
	
	
}

//Shows any markers currently in the array.
function showMarkers() {
	setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
	console.debug("deleteMarkers Called"); 
	for (var i = 0; i < markers.length; i++) {
		map.removeLayer(markers[i]);
	}
	markers = [];
}
function ReverseGeoToCity(lat, lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    geocoder.geocode({'latLng': latlng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      if (results[1]) {
    	  	console.debug("results[1] :"+results[1]);
      } else {
          alert('No results found');
      }
    } else {
        alert('Geocoder failed due to: ' + status);
    }
    });
}
function showLocation(LatLng) {
    geocoder.geocode({'latLng': LatLng}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
           console.log(results[0].formatted_address);
            console.log(results);
        }
    })
}