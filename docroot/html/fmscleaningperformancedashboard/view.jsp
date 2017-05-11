<%@page import="com.liferay.portal.kernel.util.WebKeys"%>
<%@page import="com.liferay.portal.theme.PortletDisplay"%>
<%@page import="com.liferay.portal.theme.ThemeDisplay"%>
<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>
<%@ taglib uri="http://liferay.com/tld/aui" prefix="aui" %>

<portlet:defineObjects />

<script>
<%
ThemeDisplay themeDisplay= (ThemeDisplay)renderRequest.getAttribute(WebKeys.THEME_DISPLAY);
PortletDisplay portletDisplay= themeDisplay.getPortletDisplay();
String portletId= portletDisplay.getId();
%>
var porletId = '<%=portletId%>';
var JSPFILE = "view";
</script>

<script src="<%=request.getContextPath()%>/js/amcharts/amcharts.js" type="text/javascript"></script> 
<script src="<%=request.getContextPath()%>/js/amcharts/gauge.js" type="text/javascript"></script>
<script src="<%=request.getContextPath()%>/js/amcharts/serial.js" type="text/javascript"></script>
<script src="<%=request.getContextPath()%>/js/chart.js" type="text/javascript"></script>



		
													
<form class="form-inline">
  <aui:row>
<aui:col span="3">
<label>Building</label>
    <aui:select label="" id="options" name="selectField1"
			style="width:300px;" required="true" showEmptyOption="false">
			<aui:option value="15csMapleTree">MapleTree Logistics.15 CS MapleTree</aui:option>
			<aui:option value="OMB">OMB.One Marina Boulevard</aui:option>

		</aui:select>    
   
   </aui:col>
   <aui:col span="3">
    <label>Month</label>
    <aui:select label="" id="options" name="selectField1"
			style="width:300px;" required="true" showEmptyOption="false">
			<aui:option value="January">January</aui:option>
			<aui:option value="February">February</aui:option>
			<aui:option value="March">March</aui:option>
			<aui:option value="April">April</aui:option>
			<aui:option value="June">June</aui:option>
			<aui:option value="July">July</aui:option>
			<aui:option value="August">August</aui:option>
			<aui:option value="September">September</aui:option>
			<aui:option value="October">October</aui:option>
			<aui:option value="November">November</aui:option>
			<aui:option value="December">December</aui:option>
		
	</aui:select>    
	</aui:col>
	<aui:col span="3">
   
   <label>Year</label>
    <aui:select label="" id="options" name="selectField1"
			style="width:300px;" required="true" showEmptyOption="false">
			<aui:option value="2015">2015</aui:option>
			<aui:option value="2016">2016</aui:option>
			<aui:option value="2017">2017</aui:option>
	</aui:select>    
   </aui:col>
   
   <aui:col span="3">
   <label>&nbsp;</label>  
   <button id="fmsSearchBtn">Refresh</button>
 
   </aui:col>
    </aui:row>
     
  
</form>

<hr/>

<div class="fms-pie-chart" id="fmsPMChart"></div>	
<div class="fms-pie-chart" id="fmsCMContractorChart"></div>	
<div class="fms-pie-chart" id="fmsCMManagerChart"></div>	
<div class="fms-pie-chart-total" id="fmsTotalChart"></div>	


