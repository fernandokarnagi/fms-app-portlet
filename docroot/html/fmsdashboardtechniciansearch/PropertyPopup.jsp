<%@page import="java.util.List"%>
<%@page import="sg.com.ctcglobal.fms.service.model.Building"%>
<%@page import="com.liferay.portal.model.User"%>
<%@page import="sg.com.ctcglobal.fms.service.service.BuildingServiceUtil"%>
<%@ include file="/html/init.jsp"%>
 <liferay-portlet:actionURL name="setPropertySearchParamsToSession" var="setPropertySearchParamsToSessionURL"></liferay-portlet:actionURL>
<%
String name = "";
String address="";

if(session.getAttribute("selectedName")!=null){
	name = session.getAttribute("selectedName").toString();
}else{
	name = "";
}

if(session.getAttribute("selectedAddress")!=null){
	address = session.getAttribute("selectedAddress").toString();
}else{
	address = "";
}

User loggedInUser = themeDisplay.getRealUser();
List<Building>	buildings =  BuildingServiceUtil.getBuildingByUserACLNameAddress(loggedInUser.getScreenName(), false, name, address);
%>
<aui:form name="propertySelectionfm" class="form-inline" action="<%=setPropertySearchParamsToSessionURL%>" method="post" > 
	<aui:row>
		<aui:col span="4">
			Name
		</aui:col>
		<aui:col span="4">
				<aui:input name="name" id="name"  label="" size="80" value="<%=name%>"/>
		</aui:col>
	</aui:row>
	<aui:row>
		<aui:col span="4">
			Address
		</aui:col>
		<aui:col span="4">
				<aui:input name="address" id="address"  label="" size="80" value="<%=address%>"/>
		</aui:col>
		<aui:col span="4">
			<aui:button type="submit" name ="search" value="Search" />	
			<aui:button name="closeDialog" id="closeDialog"  type="button" value="Close"/>
		</aui:col>
	</aui:row>
	<liferay-ui:search-container delta="10" emptyResultsMessage="No Properties Found">
<liferay-ui:search-container-results results="<%=buildings %>" total="" />
	<liferay-ui:search-container-row
		className="sg.com.ctcglobal.fms.service.model.Building"
		keyProperty="buildingId" modelVar="building"
		escapedModel="<%= true %>">
	
		<liferay-ui:search-container-column-text name="Name"
			orderable="true" orderableProperty="status"
			value="<%=building.getBuildingName() %>" />
			
			<liferay-ui:search-container-column-text name="Address"
			orderable="true" orderableProperty="status"
			value="<%=building.getBuildingAddress() %>" />
			
			<liferay-ui:search-container-column-jsp
			align="left" name="Actions"
			path="/html/fmsdashboardtechniciansearch/propertyActionLink.jsp"
		/>

	</liferay-ui:search-container-row>

	<liferay-ui:search-iterator paginate="flase"/> 
</liferay-ui:search-container>
</aui:form>



