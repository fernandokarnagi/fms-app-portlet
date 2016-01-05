<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

<portlet:defineObjects />

<form>
  <fieldset>
    <legend>Person</legend>
    <label>Name</label>
    <input type="text" placeholder="resource name ">
    <span class="help-block">Please provide resource name to search</span>
   
    <legend>Job</legend>
    <label>Category</label>
    <label class="checkbox">
      <input type="checkbox">Cleaner
    </label>
     <label class="checkbox">
      <input type="checkbox">Technician
    </label>
     <label class="checkbox">
      <input type="checkbox">Repairman
    </label>
    
    <label>Assignment Area</label>
    <label class="checkbox">
      <input type="checkbox">North Singapore
    </label>
     <label class="checkbox">
      <input type="checkbox">South Singapore
    </label>
     <label class="checkbox">
      <input type="checkbox">Central Singapore
    </label>
     <label class="checkbox">
      <input type="checkbox">West Singapore
    </label>
     <label class="checkbox">
      <input type="checkbox">East Singapore
    </label>
    
    
  </fieldset>
</form>

<button id="fmsSearchBtn">Search</button>
