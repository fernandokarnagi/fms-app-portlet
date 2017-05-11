<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

<%@ taglib uri="http://liferay.com/tld/portlet" prefix="liferay-portlet" %>
<%@ taglib uri="http://liferay.com/tld/theme" prefix="liferay-theme" %>
<%@ taglib uri="http://liferay.com/tld/ui" prefix="liferay-ui" %>
<%@ taglib uri="http://liferay.com/tld/aui" prefix="aui" %>


<%@ page import="com.liferay.portal.kernel.dao.search.ResultRow" %><%@
page import="com.liferay.portal.kernel.template.TemplateHandler" %><%@
page import="com.liferay.portal.kernel.template.TemplateHandlerRegistryUtil" %><%@
page import="com.liferay.portal.kernel.util.Constants" %><%@
page import="com.liferay.portal.kernel.util.GetterUtil" %><%@
page import="com.liferay.portal.kernel.util.ParamUtil" %><%@
page import="com.liferay.portal.kernel.util.StringPool" %><%@
page import="com.liferay.portal.kernel.util.WebKeys" %><%@
page import="com.liferay.portal.model.Group" %><%@
page import="com.liferay.portlet.portletdisplaytemplate.util.PortletDisplayTemplateUtil" %>
<%@ page import="com.liferay.portal.theme.ThemeDisplay" %>
<%@ page import="com.liferay.portal.util.PortalUtil" %>

<%@page import="com.liferay.portal.kernel.portlet.LiferayWindowState"%>

<%@ page import="java.text.SimpleDateFormat" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="java.util.List" %>
<%@ page import="javax.portlet.PortletSession" %> 
<%@ page import="com.liferay.portal.model.Role" %>

<liferay-theme:defineObjects />

<portlet:defineObjects />

<%
List<Role> roles=themeDisplay.getUser().getRoles();
boolean property_owners_role=false;
boolean building_administrator_role=false;
boolean property_manager_role=false;
boolean cluster_manager_role=false;
boolean contractor_technicians_role=false;
boolean dashboard_viewer_role=false;
boolean engineers_technicians_role=false;
boolean system_administrator_role=false;
boolean call_center_role=false;
boolean property_exceutive_role=false;

String screenName=themeDisplay.getUser().getScreenName();
System.out.println("screenName -->" +screenName);
 for(Role role: roles){
	 //System.out.println("role -->" +role.getName());
	 
	 
	if(role.getName().equalsIgnoreCase("property owners")){
		property_owners_role=true;
	}
	
	if(role.getName().equalsIgnoreCase("building administrator")){
		building_administrator_role=true;
	}
	
	if(role.getName().equalsIgnoreCase("property manager")){
		property_manager_role=true;
 	}
	
	if(role.getName().equalsIgnoreCase("cluster manager")){
 		cluster_manager_role=true;
 	} 
	
	if(role.getName().equalsIgnoreCase("contractor technicians")){
		contractor_technicians_role=true;
	}
	
	if(role.getName().equalsIgnoreCase("dashboard viewer")){
		dashboard_viewer_role=true;
	}
	
	if(role.getName().equalsIgnoreCase("engineers/sr.technicians")){
		engineers_technicians_role=true;
	}
 	
 	if(role.getName().equalsIgnoreCase("engineers/sr.technicians")){
		engineers_technicians_role=true;
	}	
 		
 	if(role.getName().equalsIgnoreCase("system administrator")){
 		system_administrator_role=true;
 	}
 	
 	if(role.getName().equalsIgnoreCase("call center")){
 		call_center_role=true;
 	}
 	
 	if(role.getName().equalsIgnoreCase("property executive")){
 		property_exceutive_role=true;
 	}
}
 
 System.out.println("property_owners_role :" + property_owners_role + " building_administrator_role : "+building_administrator_role +" property_manager_role :"+property_manager_role+" cluster_manager_role :"+cluster_manager_role +" contractor_technicians_role :"+contractor_technicians_role +" dashboard_viewer_role : "+dashboard_viewer_role +" engineers_technicians_role :"+engineers_technicians_role +"system_administrator_role :"+ system_administrator_role);
%>
<aui:row>
	<aui:col span="4">
		<div align="center">
		<img src="<%=request.getContextPath()%>/images/project_omb.jpg"/>
		</div>
	</aui:col> 
	<aui:col span="8">
		<div class="mainContent">
		<p style="text-align: justify;">
		Managing your facilities and real estate at a glance effectively and efficiently from your desktop computer or on your mobile when you are on the move. "Let the System do the thinking & talking". <br><br>
		REsolve Facilities Management System designed by Facility Management practitioner, powered by the latest suite of computer and mobile software, REsolve makes life simply easier for Real Estate Owners, Property and Facilities Managers.
		An easy to navigate, easy to understand decision tool which add economic value for busy Real estate owners and staff managing either an individual asset or a cluster of assets.
		  
		 </p>
		 </div>
	</aui:col>
</aui:row>  
<aui:row>
<aui:col span="12"><hr/></aui:col>
</aui:row>	
<aui:row>
	<aui:col span="12">
	<%if(dashboard_viewer_role==true || property_owners_role==true || building_administrator_role==true || property_manager_role==true || cluster_manager_role==true ||property_exceutive_role==true|| system_administrator_role==true) {%>
		<div class="fms-homebutton-div" id="dashboardDiv">
			<button id="dashboardBtn" class="fms-homebutton">Dashboard</button>
			<div id="dashboard" style="display:none;">
  			<p>MAP of properties<br>	
	  			MAP to:<br>
	  			<%if(dashboard_viewer_role==true || property_owners_role==true || building_administrator_role==true || property_manager_role==true || cluster_manager_role==true ||property_exceutive_role==true||system_administrator_role==true) {%>
				<a href="/preventive-maintenance-dashboard">Preventive Maintenance Report</a><br>
				<a href="/corrective-maintenance-dashboard">Corrective Maintenance Report</a><br>
				<%}%>
				
				<%if(dashboard_viewer_role==true || property_owners_role==true || building_administrator_role==true || property_manager_role==true || cluster_manager_role==true ||property_exceutive_role==true|| system_administrator_role==true) {%>
					<a href="/cleaning-assessment-dashboard">Cleaning Assessment Report</a><br>
				<%} %>
				
				<%if(dashboard_viewer_role==true || property_owners_role==true || building_administrator_role==true || property_manager_role==true || cluster_manager_role==true ||system_administrator_role==true||property_exceutive_role==true) {%>
				<a href="/attendance-dashboard">Attendance Report</a><br>				
				<a href="">Life Cycle Management Report</a><br>
				<%} %>	
				
				</p>
			</div>
		</div>
	<%} %>
	<%if(dashboard_viewer_role==true || property_owners_role==true || building_administrator_role==true || property_manager_role==true || cluster_manager_role==true ||property_exceutive_role==true|| system_administrator_role==true) {%>
	
		<div class="fms-homebutton-div">
	        <button id="pmBtn">Preventive Maintenance</button>
	        <div id="pm" style="display:none;text-align: justify;">
       
				  The Preventive Maintenance Dashboard or PM-board (i.e. REsolve FM System's abbreviated form) is intentionally designed:<br/>
                          1.     To ensure Term contractors carry out the planned maintenance works with due diligence, and with a clear objective to prevent unwarranted breakdown and failure.<br/>
                          2.     To keep equipment wear and tear in check (in relation to MTTF/MTTR specifications by the OEMs).<br/>
                          3.     To put in place a proper and stringent PM Tracking regime to prolong equipment life span, shift the equipment bathtub reliability curve by 2 to 5 years (whether non comprehensive or comprehensive contracts), and achieve a "value-creating" proposition much desired by Real Estate owners and Facilities managers.<br/>
                <%if(building_administrator_role==true || property_manager_role==true || system_administrator_role==true ||property_exceutive_role==true) {%>
                 <a href="/pm-master-schedule-upload">Click here</a> to upload preventive maintenance schedule	
                 <%} %>					
			</div>
		</div>
	<%} %>
	<%if(dashboard_viewer_role==true || property_owners_role==true || building_administrator_role==true || property_manager_role==true || cluster_manager_role==true ||property_exceutive_role==true|| system_administrator_role==true) {%>
		<div class="fms-homebutton-div">
		    <button id="cmBtn">Corrective Maintenance</button>
		    <div id="cm" style="display:none;text-align: justify;">
		 		 The Corrective Maintenance Dashboard or CM-board (i.e Resolve CM system's abbreviated form) is intentionally designed to ensure contractors or technicians attend to Corrective Maintenance Call promptly and resolve issue(s) effectively within prescribed CM time frame (in accordance to the Service level Agreement), thereby tracking the cause of failure and its remedial action taken.<br/>             
				<%if(building_administrator_role==true || property_manager_role==true || system_administrator_role==true ||property_exceutive_role==true) {%>
				 <a href="/cm-manage-cases">Click here</a> to upload corrective maintenance schedule
				 <%} %>
			</div>
		    
		</div>
		<%} %>
		<%if(dashboard_viewer_role==true || property_owners_role==true || building_administrator_role==true || property_manager_role==true || cluster_manager_role==true ||property_exceutive_role==true|| system_administrator_role==true) {%>
		<div class="fms-homebutton-div">
		    <button id="caBtn">Cleaning Assessment</button>
		    <div id="ca" style="display:none;text-align: justify;">
		 		The Cleanliness Assessment Dashboard (or CA-board) is intentionally designed to enable meaningful and objective collaboration between the building owners, Facilities/Property managers and the appointed Cleaning services providers. CA-board integrates a common objective towards a full performance based contract - a "value-creating" proposition much desired by business CEOs and the workforce in the Real Estate industry.
				<%if(building_administrator_role==true || property_manager_role==true || system_administrator_role==true ||property_exceutive_role==true) {%>
				<a href="/cleaning-assessment">Click here</a> to upload cleaning Assessment schedule
				<%} %>
			</div>
		    
		</div>
		<%} %>
		
		
		<%if(dashboard_viewer_role==true || property_owners_role==true || building_administrator_role==true || property_manager_role==true || cluster_manager_role==true || property_exceutive_role==true|| system_administrator_role==true) {%>
		
		
		<div class="fms-homebutton-div">		
		    <button id="attendanceBtn">Attendance</button>
		    <div id="attendance" style="display:none;text-align: justify;">
		    	To record the movement, attendance and also allow interface with Biometric System.
		   	</div>
		</div>
		<%}%>
		
		<%--if(system_administrator_role==true) {%>
		<div class="fms-homebutton-div">
			<button id="administrationBtn">System Administration</button>
			<div id="administration" style="display:none;text-align: justify;">
					A system administrator, or sysadmin, is a person who is responsible for the upkeep, configuration, and reliable operation of computer systems; especially multi-user computers, such as servers.
			
			The system administrator seeks to ensure that the uptime, performance, resources, and security of the computers he or she manages meet the needs of the users, without exceeding the budget.
			
			To meet these needs, a system administrator may acquire, install, or upgrade computer components and software; provide routine automation; maintain security policies; troubleshoot; train and/or supervise staff; or offer technical support for projects.
				</div>
		</div> 
		<%} --%>  
		
	</aui:col>
</aui:row>





