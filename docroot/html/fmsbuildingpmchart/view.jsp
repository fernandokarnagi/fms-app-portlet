<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

<portlet:defineObjects />
<script src="<%=request.getContextPath()%>/js/Chart.new.js"></script>
<script src="<%=request.getContextPath()%>/js/amcharts/amcharts.js" type="text/javascript"></script>
<script src="<%=request.getContextPath()%>/js/amcharts/pie.js" type="text/javascript"></script>
<script src="<%=request.getContextPath()%>/js/chart.js" type="text/javascript"></script>

<form class="form-inline">
	<fieldset>
    <label>&nbsp;&nbsp;Building&nbsp;&nbsp; : </label>  One Marina Boulevard    
  </fieldset>
  <fieldset>
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

<table>
<tr>
	<td><div id="fmsCompleted" style="width: 215px; height: 230px;"></div></td>
	<td><div id="fmsNotOnSchedule" style="width: 215px; height: 230px;"></div></td>
	<td><div id="fmsNotComplete" style="width: 215px; height: 230px;"></div></td>
	<td><div id="fmsTotal" style="width: 215px; height: 230px;"></div></td>
</tr>
</table>

    <button class="btn icon-print">Print</button>
    <button class="btn icon-download">Export</button>
    <br class="fms-clearBoth" />
    <br class="fms-clearBoth" />
    
<div id="pmTable" class="table table-bordered table-hover"></div>
