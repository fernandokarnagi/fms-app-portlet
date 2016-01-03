<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

<portlet:defineObjects />

<style>
      #map {
        height: 500px;
      }
    </style>
    
<div id="map"></div>
<script>

var map;
function initMap() {
console.log("initmap");
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 1.35, lng: 103.851959},
    zoom: 11
  });
}
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBCLbC2n20iSg2vaBeGiDIhhu6kjk3k9kc&callback=initMap" async defer></script>