<%@page import="com.liferay.portal.kernel.util.StringPool"%>
<%@page import="com.liferay.portlet.PortletPreferencesFactoryUtil"%>
<%@page import="com.liferay.portal.kernel.util.Validator"%>
<%@page import="com.liferay.portal.kernel.util.ParamUtil"%>
<%@page import="javax.portlet.PortletPreferences"%>
<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

<portlet:defineObjects />

 <script src="/fms-app-portlet/js/amcharts/amcharts.js" type="text/javascript"></script>
  <script src="/fms-app-portlet/js/amcharts/gauge.js" type="text/javascript"></script>
  <script src="/fms-app-portlet/js/amcharts/serial.js" type="text/javascript"></script>
  
  
  <%
PortletPreferences preferences = renderRequest.getPreferences();
%>


<form>
  <fieldset>
  	<legend><%=preferences.getValue("chartTitle", "")%></legend>
    <label>From</label>
    <input type="date" placeholder="" style="width: 170px">
    
    <label>To</label>
    <input type="date" placeholder="" style="width: 170px">
    <label>Property</label>
    <select style="width: 170px">
    	<option>Show All</option>
    	<option>One Marina Boulevard</option>
    	<option>One Raffles Quay</option>
    </select>
  </fieldset>
</form>

<button id="<%=preferences.getValue("buttonName", "btnShow")%>" >Show</button>
<br/>
<div class="fms-pie-chart" id="<%=preferences.getValue("divName", "")%>"></div>	


<script>
AmCharts.makeChart( "<%=preferences.getValue("divName", "")%>", {
	  "type": "gauge",
	  "theme": "light",
	  "axes": [ {
	    "axisThickness": 1,
	    "axisAlpha": 0.2,
	    "tickAlpha": 10,
	    "valueInterval": 20,
	    "bands": [ {
	      "color": "#cc4748",
	      "endValue": 70,
	      "innerRadius": "55%",
	      "startValue": 0
	    }, {
	      "color": "#fdd400",
	      "endValue": 80,
	      "innerRadius": "55%", 
	      "startValue": 70
	    }, { 
	      "color": "#84b761",
	      "endValue": 100,
	      "innerRadius": "55%",
	      "startValue": 80
	    } ],
	    "bottomText": "78.5",
	    "bottomTextFontSize": 10,
	    "bottomTextYOffset": -20,
	    "endValue": 100
	  } ],
	  "arrows": [ {
		  "value": 78.5,
		  "startWidth": 5,
		  "innerRadius": "5%"
		  
	  } ],
	  "export": {
	    "enabled": true
	  }
	} );
	


YUI().use('aui-button', 'node', function(Y) {
	var queryBtn = new Y.Button({
		label : 'Show',
		srcNode : '#<%=preferences.getValue("buttonName", "btnShow")%>',
		cssClass: 'btn btn-lg btn-primary'
	}).render();
	
});
</script>