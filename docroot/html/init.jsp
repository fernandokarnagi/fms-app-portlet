
<%@page import="com.liferay.portal.service.RoleLocalServiceUtil"%>
<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet"%>


<%@ taglib uri="http://liferay.com/tld/portlet" prefix="liferay-portlet"%>
<%@ taglib uri="http://liferay.com/tld/theme" prefix="liferay-theme"%>
<%@ taglib uri="http://liferay.com/tld/ui" prefix="liferay-ui"%>
<%@ taglib uri="http://liferay.com/tld/aui" prefix="aui"%>

<%@ page import="com.liferay.portal.kernel.dao.search.ResultRow"%><%@
page import="com.liferay.portal.kernel.template.TemplateHandler"%><%@
page import="com.liferay.portal.kernel.template.TemplateHandlerRegistryUtil"%><%@
page import="com.liferay.portal.kernel.util.Constants"%><%@
page import="com.liferay.portal.kernel.util.GetterUtil"%><%@
page import="com.liferay.portal.kernel.util.ParamUtil"%><%@
page import="com.liferay.portal.kernel.util.StringPool"%><%@
page import="com.liferay.portal.kernel.util.WebKeys"%><%@
page import="com.liferay.portal.model.Group"%><%@
page import="com.liferay.portlet.portletdisplaytemplate.util.PortletDisplayTemplateUtil"%><%@
page import="com.liferay.portal.theme.ThemeDisplay"%><%@
page import="com.liferay.portal.util.PortalUtil"%>
<%@ page import="com.liferay.portal.model.Role"%>
<%@ page import="com.liferay.portlet.PortletURLUtil"%>
<%@ page import="javax.portlet.PortletURL"%>




<%@ page import="java.text.SimpleDateFormat"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="java.util.List"%>


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
boolean call_center=false;
boolean property_executive=false;



 for(Role role: roles){
	 
	 if(role.getName().equalsIgnoreCase("PROPERTY EXECUTIVE")){
		 property_executive=true;
	}
	 
 	if(role.getName().equalsIgnoreCase("property owner")){
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
 		
 	if(role.getName().equalsIgnoreCase("system administrator")){
 		system_administrator_role=true;
 	}
 	if(role.getName().equalsIgnoreCase("CALL CENTER")){
 		call_center=true;
 	}
 	
}
%>

<%
	long portalId = -1L;
%>
<script>
	var screenName = '<%=themeDisplay.getUser().getScreenName()%>';
	var system_administrator_role = '<%=system_administrator_role%>';
	var portletNameSpace = '<portlet:namespace/>';
</script>