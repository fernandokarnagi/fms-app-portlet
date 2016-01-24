<%@page import="com.liferay.portal.kernel.util.StringPool"%>
<%@page import="com.liferay.portlet.PortletPreferencesFactoryUtil"%>
<%@page import="com.liferay.portal.kernel.util.Validator"%>
<%@page import="com.liferay.portal.kernel.util.ParamUtil"%>
<%@page import="javax.portlet.PortletPreferences"%>
<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

<portlet:defineObjects />

<script src="<%=request.getContextPath()%>/js/Chart.min.js"></script>  
  
  <%
PortletPreferences preferences = renderRequest.getPreferences();
%>


<form>
  <fieldset>
  	<legend><%=preferences.getValue("chartTitle", "")%></legend>
    <label>From</label>
    <input type="date" placeholder="">
    
    <label>To</label>
    <input type="date" placeholder="">
    <label>Property</label>
    <select>
    	<option>Show All</option>
    	<option>One Marina Boulevard</option>
    	<option>One Raffles Quay</option>
    </select>
  </fieldset>
</form>

<button id="<%=preferences.getValue("buttonName", "btnShow")%>" >Show</button>
<br/><br/>


 	<span style="background-color: rgb(220,220,220)">&nbsp;&nbsp;&nbsp;&nbsp;</span> Building
 	<span style="background-color: rgb(151,187,205)">&nbsp;&nbsp;&nbsp;&nbsp;</span> Security System
 	<span style="background-color: rgb(51,87,205)">&nbsp;&nbsp;&nbsp;&nbsp;</span> M&E


<div id="<%=preferences.getValue("divName", "")%>" class="fms-bar-chart"><canvas id="<%=preferences.getValue("divName", "")%>Chart" width="500px" height="300px"></canvas></div>


	

<script>

var options = 
{
    //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero : true,

    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,

    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth : 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    //Boolean - If there is a stroke on each bar
    barShowStroke : true,

    //Number - Pixel width of the bar stroke
    barStrokeWidth : 2,

    //Number - Spacing between each of the X value sets
    barValueSpacing : 5,

    //Number - Spacing between data sets within X values
    barDatasetSpacing : 1

   
}

var data = {
	    labels: ["January", "February", "March", "April", "May", "June", "July"],
	    datasets: [
	        {
	            label: "Building",
	            fillColor: "rgba(220,220,220,0.5)",
	            strokeColor: "rgba(220,220,220,0.8)",
	            highlightFill: "rgba(220,220,220,0.75)",
	            highlightStroke: "rgba(220,220,220,1)",
	            data: [65, 59, 80, 81, 56, 55, 40]
	        },
	        {
	            label: "Security System",
	            fillColor: "rgba(151,187,205,0.5)",
	            strokeColor: "rgba(151,187,205,0.8)",
	            highlightFill: "rgba(151,187,205,0.75)",
	            highlightStroke: "rgba(151,187,205,1)",
	            data: [28, 48, 40, 19, 86, 27, 90]
	        },
	        {
	            label: "M&E",
	            fillColor: "rgba(51,87,205,0.5)",
	            strokeColor: "rgba(51,87,205,0.8)",
	            highlightFill: "rgba(51,87,205,0.75)",
	            highlightStroke: "rgba(51,87,205,1)",
	            data: [48, 68, 60, 29, 76, 37, 20]
	        }
	    ]
	};
	
new Chart(document.getElementById("<%=preferences.getValue("divName", "")%>Chart").getContext("2d")).Bar(data, options);


YUI().use('aui-button', 'node', function(Y) {
	var queryBtn = new Y.Button({
		label : 'Show',
		srcNode : '#<%=preferences.getValue("buttonName", "btnShow")%>',
		cssClass: 'btn btn-lg btn-primary'
	}).render();
	
});
</script>
