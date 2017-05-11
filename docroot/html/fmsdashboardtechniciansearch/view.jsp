<%@ include file="/html/init.jsp"%>
<%@page import="com.liferay.portal.kernel.portlet.LiferayWindowState"%>

<liferay-portlet:renderURL var="propertySelectionPopupURL" windowState="<%=LiferayWindowState.POP_UP.toString() %>">
	<portlet:param name="jspPage" value="/html/fmsdashboardtechniciansearch/PropertyPopup.jsp" />
	<portlet:param name="mode" value="VIEW" />
</liferay-portlet:renderURL>
<liferay-portlet:actionURL name="trackResources" var="trackResourcesURL"></liferay-portlet:actionURL>
 
<% 
String buildingName ="";
%> 
  
<aui:form name="resourceLocatorForm" class="form-inline" method="post"  action="<%=trackResourcesURL%>">
<div>
		<strong> Please select project and/or zone to perform resources tracking </strong>
</div>
<div>
		<label>Project</label>
		<aui:select label="" id="clusterOptions" name="clusterOptions" required="true" showEmptyOption="false">
			<aui:option value="All">All</aui:option>
			<aui:option value="Benoi">Benoi</aui:option>
   			<aui:option value="Cheers">Cheers</aui:option>  
   			<aui:option value="FairPrice">FairPrice</aui:option>
		</aui:select>
</div>
<div>
		<label>Distance from selected building</label>
		<aui:select label="" id="zoneOptions" name="zoneOptions" required="true" showEmptyOption="false">
			<aui:option value="-1">None</aui:option>
			<aui:option value="1KM">1KM</aui:option>
			<aui:option value="2KM">2KM</aui:option>
			<aui:option value="3KM">3KM</aui:option>
			<aui:option value="5KM">5KM</aui:option>
			<aui:option value="8KM">8KM</aui:option>
			<aui:option value="10KM">10KM</aui:option>
		</aui:select>
</div>

<div>
		Property
	</div>
<div>
		<aui:input name="property" id="property"  label="" readOnly="true" inlineField="true"/>
		<aui:input name="buildingId" id="buildingId"  label="" type="hidden" />
		<a href="javascript:openBuildingDialogFunction()">select</a>

</div>
<div>
		<aui:button name="refreshBtn" id="refreshBtn"  type="button" value="Refresh" onclick="javascript:onRefreshButtonClicked()" style="width:200px"/><br/><br/>
</div>
<div>
	<aui:button name="trackResourcesBtn" id="trackResourcesBtn"  type="button" value="Track Resources" style="width:200px" onclick="javascript:onTrackResourcesButtonClicked()"/>
</div>
	
		

<aui:button name="closeDialog" id="closeDialog"  type="button" value="close" style="display:none"/>
<br/><br/>
<table>
			<tr>
				<td><img src="<%=request.getContextPath()%>/images/marker-icon-blue.png"/></td>
				<td>&nbsp;&nbsp;<strong>Technician </strong></td>
			</tr>
			<tr>
				<td><img src="<%=request.getContextPath()%>/images/marker-icon-red-color.png"/></td>
				<td>&nbsp;&nbsp;<strong>Building</strong></td>
			</tr>
		</table>
</aui:form>
<script>

var LeafIcon = L.Icon.extend({});

var redIcon = new LeafIcon({iconUrl: '<%=request.getContextPath()%>/images/marker-icon-red-color.png'});
var buildingMarkers = [];
var selectedPropertyPosition = {};

function addBuildingMarker(lat,lng,title,description) {
	deleteBuildingMarkers();
	
	var marker = new L.Marker([lat, lng], {icon: redIcon,bounceOnAdd: false}).addTo(map);	
	selectedPropertyPosition = {"lat" : lat, "lng" : lng};
	var buildingString = '<div id="content">'+
	  '<div id="buildingDiv">'+
	  '</div>'+
	  '<h1 id="firstHeading" class="firstHeading">' + title + '</h1>'+
	  '<div id="bodyContent">'+
	  '<p>' + description + '</p>'
	  '</div>'+
	  '</div>';
	
	marker.bindPopup(buildingString);
	buildingMarkers.push(marker);
}
//Deletes all markers in the array by removing references to them.
function deleteBuildingMarkers() {
	for (var i = 0; i < buildingMarkers.length; i++) {
		map.removeLayer(buildingMarkers[i]);
	}
	buildingMarkers = [];
}



function onTrackResourcesButtonClicked(){
	if(confirm('A push notification message will be sent to all teams, please click the refresh button to see the technician location')){
		var url = '<%=trackResourcesURL.toString()%>';
		var formId = portletNameSpace+"resourceLocatorForm";
		 document.forms[formId].action=url;
		 document.forms[formId].submit();
		 console.debug("form submitted successfully");
	}
}

function onRefreshButtonClicked(){
	Liferay.Service(
			  '/fms-service-portlet.resourcelocator/get-checked-in-resources-by-time',
			  {
			    time: 5 
			  },
			  function(obj) {
				  obj.forEach(function(entry) {
						technicians.push({	
							lat: entry.lat, 
							lng: entry.lang,
							title: entry.shortName,
							description: entry.shortName
					}); 
					   
				  }); 
			  });
	renderTechnicians(technicians);
}
function openBuildingDialogFunction() {
	var url = '<%=propertySelectionPopupURL.toString()%>';
	try{
	Liferay.Util.openWindow({
		dialog : {
			centered : true,
			height : 400,
			modal : true,
			width : 900,
			destroyOnClose: true,
			destroyOnHide: true
		},
		id : '<portlet:namespace/>dialog',
		title : 'Please select the property',
		uri : url			
	});
	}catch(e){
		console.debug(e.message)
	}
}

</script>
<aui:script use="aui-base">
	A.one('#<portlet:namespace/>closeDialog').on('click', function(event) {
		var dialog = Liferay.Util.getWindow('<portlet:namespace/>dialog');
		dialog.destroy();
	});
</aui:script>