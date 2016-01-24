<%@page import="com.liferay.portal.kernel.util.StringPool"%>
<%@page import="com.liferay.portlet.PortletPreferencesFactoryUtil"%>
<%@page import="com.liferay.portal.kernel.util.Validator"%>
<%@page import="com.liferay.portal.kernel.util.ParamUtil"%>
<%@page import="javax.portlet.PortletPreferences"%>

<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

<portlet:defineObjects />
<portlet:renderURL var="savePreferensesRenderURL" windowState="normal" portletMode="edit">
</portlet:renderURL>
<%
PortletPreferences preferences = renderRequest.getPreferences();
%>
<h3>Portlet Configuration</h3>
<form action="<%=savePreferensesRenderURL%>" name="<portlet:namespace/>savePreferenses"  method="POST">
Div Name<br/>
<input  type="text" name="<portlet:namespace/>divName" id="<portlet:namespace/>divName" 
	value="<%=preferences.getValue("divName", "")%>"/><br/>

Chart Title<br/>
<input  type="text" name="<portlet:namespace/>chartTitle" id="<portlet:namespace/>chartTitle" 
    value="<%=preferences.getValue("chartTitle", "")%>"/><br/>
    
Button Name<br/>
<input  type="text" name="<portlet:namespace/>buttonName" id="<portlet:namespace/>buttonName" 
	value="<%=preferences.getValue("buttonName", "")%>"/><br/>
	
<input type="submit" name="<portlet:namespace/>savepref" id="<portlet:namespace/>savepref" value="Save Configuration"/>
</form>