<%@ include file="/html/init.jsp" %>
<%
	 String googleapikey = GetterUtil.getString(portletPreferences.getValue("googleapikey", "AIzaSyDdap-Je0fjCFOzHcvg1a232DQIbjdfn64"));
	 String centerlat = GetterUtil.getString(portletPreferences.getValue("centerlat", "1.35"));
	 String centerlng = GetterUtil.getString(portletPreferences.getValue("centerlng", "103.851959"));
	 %>
	         
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.js"></script>
					
<div id='mapdiv' style='height:800px;'></div>
<script>  

var map;

function initMap() {

	var center = L.bounds([1.56073, 104.11475], [1.16, 103.502]).getCenter();
	map = L.map('mapdiv').setView([center.x, center.y], 12);

	var basemap = L.tileLayer('https://maps-{s}.onemap.sg/v3/Default/{z}/{x}/{y}.png', {
        detectRetina: true,
					attribution: 'Map data &copy; contributors, <a href="http://SLA.gov.sg">Singapore Land Authority</a>',
					maxZoom: 18,
        minZoom: 11
	});
	
	attribution = map.attributionControl;

	attribution.setPrefix('<img src="http://docs.onemap.sg/maps/images/oneMap64-01.png" style="height:20px;width:20px;"/>');

	map.setMaxBounds([[1.56073, 104.1147], [1.16, 103.502]]);

	basemap.addTo(map);
}

initMap();
</script>