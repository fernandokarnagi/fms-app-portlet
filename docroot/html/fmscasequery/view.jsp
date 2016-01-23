<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

<portlet:defineObjects />

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
    </label><br/>
    
    <label>Status&nbsp;&nbsp;</label>
    <label class="checkbox">
      <input type="checkbox" checked>Reported
    </label>
     <label class="checkbox">
      <input type="checkbox" checked>Assigned
    </label>
    <label class="checkbox">
      <input type="checkbox" checked>Work in Progress
    </label>
    <label class="checkbox">
      <input type="checkbox" checked>On Hold
    </label>
    <label class="checkbox">
      <input type="checkbox" checked>Completed
    </label>
   <hr/>  
   
   <label>Case Created in</label><br/>
    <label>Month</label>
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
    
    <label>Year</label>
    <label class="checkbox">
      <select>
      	<option>2016</option>
      	<option>2015</option>
      	<option>2014</option>
      </select>
    </label>
   
  </fieldset>
    <hr/>
    <button id="queryBtn" >Query</button>
    <button id="createCaseBtn">Create Case</button>
  
</form>

<div id="queryTable" class="table table-bordered table-hover"></div>
