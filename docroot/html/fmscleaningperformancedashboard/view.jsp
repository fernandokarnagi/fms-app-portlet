<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

<portlet:defineObjects />

 <script src="/fms-app-portlet/js/amcharts/amcharts.js" type="text/javascript"></script>
  <script src="/fms-app-portlet/js/amcharts/gauge.js" type="text/javascript"></script>
  <script src="/fms-app-portlet/js/amcharts/serial.js" type="text/javascript"></script>
        
													
<form class="form-inline">
  <fieldset>
    <label>Building&nbsp;&nbsp;</label>
    <label class="checkbox">
      <input type="checkbox" checked>One Marina Boulevard
    </label>
     <label class="checkbox">
      <input type="checkbox" checked>One Shenton Way
    </label>
     <label class="checkbox">
      <input type="checkbox" checked>One Raffles Place
    </label>
   
    <label>&nbsp;&nbsp;Month</label>
    <label class="checkbox">
      <select>
      	<option>January</option>
      	<option>February</option>
      	<option>March</option>
      	<option>April</option>
      	<option>May</option>
      	<option>June</option>
      	<option>July</option>
      	<option>August</option>
      	<option>September</option>
      	<option>October</option>
      	<option>November</option>
      	<option>December</option>
      </select>
    </label>
    
    <label>&nbsp;&nbsp;Year</label>
    <label class="checkbox">
      <select>
      	<option>2016</option>
      	<option>2015</option>
      	<option>2014</option>
      </select>
    </label>
    
    <button >Refresh</button>
  </fieldset>
  
  
</form>

<hr/>

<div class="fms-pie-chart" id="fmsPMChart"></div>	
<div class="fms-pie-chart" id="fmsCMContractorChart"></div>	
<div class="fms-pie-chart" id="fmsCMManagerChart"></div>	
<br/><br/>
<div class="fms-linear-chart" id="fmsTotalChart"></div>	

