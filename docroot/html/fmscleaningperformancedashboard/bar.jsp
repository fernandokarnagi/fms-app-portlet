<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>
<%@ taglib uri="http://liferay.com/tld/aui" prefix="aui" %>

<portlet:defineObjects />
<script>
var JSPFILE = "bar";
var TITLE = "<%=request.getParameter("title")%>";
</script>

<script src="<%=request.getContextPath()%>/js/amcharts/amcharts.js" type="text/javascript"></script> 
<script src="<%=request.getContextPath()%>/js/amcharts/gauge.js" type="text/javascript"></script>
<script src="<%=request.getContextPath()%>/js/amcharts/serial.js" type="text/javascript"></script>
<script src="<%=request.getContextPath()%>/js/chart.js" type="text/javascript"></script>

<H3><%=request.getParameter("title")%></H3>
													
<form class="form-inline">
<aui:row>
<aui:col span="3">
<label>Building:&nbsp;</label><%=request.getParameter("buildingId")%>
   </aui:col>
   <aui:col span="3">
    <label>Month:&nbsp;</label><%=request.getParameter("month")%>    
	</aui:col>
	<aui:col span="3">
   
   <label>Year:&nbsp;</label><%=request.getParameter("year")%> 
   </aui:col>
    
</aui:row>
     
  
</form>

<hr/>

<div class="fms-linear-chart" id="monthBreakdown"></div>	


