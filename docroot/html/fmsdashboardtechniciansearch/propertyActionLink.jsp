<%@page import="sg.com.ctcglobal.fms.service.model.Building"%>
<%@ include file="/html/init.jsp"%>
<%@page import="com.liferay.portal.kernel.portlet.LiferayWindowState"%>

<%
	ResultRow row = (ResultRow) request.getAttribute(WebKeys.SEARCH_CONTAINER_RESULT_ROW);
	Building building = (Building) row.getObject();
	String buildingName = building.getBuildingName();
	String buildingIdStr   = building.getBuildingId()+"";
	String clusterCode   = building.getClusterCode()+"";
	String clusterId =building.getClusterId()+"";
	String buildingLat = building.getLat()+"";
	String buildingLangtitude = building.getLng()+"";
	String buildingAddress = building.getBuildingAddress(); 
	
%>

<a href="javascript:selectBuilding('<%=buildingIdStr%>','<%=clusterCode%>','<%=clusterId%>','<%=buildingName%>','<%=buildingLat%>','<%=buildingLangtitude%>','<%=buildingAddress%>')">select this property</a>
<script>
var openerWindow = Liferay.Util.getOpener();
function selectBuilding(buildingIdStr,clusterCode,clusterId,buildingName,buildingLat,buildingLang,buildingAddress){
	//Set the value back to the parent form
	openerWindow.document.getElementById("_fmsdashboardtechniciansearch_WAR_fmsappportlet_property").value=buildingName;
	openerWindow.document.getElementById("_fmsdashboardtechniciansearch_WAR_fmsappportlet_buildingId").value=buildingIdStr;
	
	//Place the building icon on the map
	openerWindow.addBuildingMarker(buildingLat,buildingLang,buildingName,buildingAddress);
	
	//Close Popup
	openerWindow.document.getElementById('_fmsdashboardtechniciansearch_WAR_fmsappportlet_closeDialog').click();
}

</script>