<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

<portlet:defineObjects />
<script src="<%=request.getContextPath()%>/js/Chart.min.js"></script>

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

<div id="fmsNotComplete" class="fms-pie-chart"><b>Not Completed</b><canvas id="fmsNotCompletedChart" width="200px" height="200px"></canvas></div>
<div id="fmsNotOnSchedule" class="fms-pie-chart"><b>Not On Schedule</b><canvas id="fmsNotOnScheduleChart" width="200px" height="200px"></canvas></div>
<div id="fmsOnSchedule" class="fms-pie-chart"><b>On Schedule</b><canvas id="fmsOnScheduleChart" width="200px" height="200px"></canvas></div>
<div id="fmsCompleted" class="fms-pie-chart"><b>Completed</b><canvas id="fmsCompletedChart" width="200px" height="200px"></canvas></div>
<div id="fmsTotal" class="fms-pie-chart"><b>Total</b><canvas id="fmsTotalChart" width="200px" height="200px"></canvas></div>

<br class="fms-clearBoth" />
<br class="fms-clearBoth" />

    <button class="btn icon-print">Print</button>
    <button class="btn icon-download">Export</button>
    <br class="fms-clearBoth" />
    <br class="fms-clearBoth" />
    
<div id="pmTable" class="table table-bordered table-hover"></div>
