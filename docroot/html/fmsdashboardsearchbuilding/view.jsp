<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

<portlet:defineObjects />

<form>
  <fieldset>
    <legend>Building</legend>
    <input type="text" placeholder="building name ">
    <span class="help-block">Please provide building name to search</span>
    
	 <span class="help-block">Please choose the Cluster</span>
	<legend>Cluster</legend>
   	<select>
   		<option>Benoi</option>
   		<option>Cheers</option>  
   		<option>FairPrice</option>
   	</select>
	
	 <span class="help-block">Please choose the group</span>
    <legend>Group</legend>
   	<select>
   		<option>Zone1</option>
   		<option>Zone2</option>
   		<option>Zone3</option>     
   	</select>
   
    
  </fieldset>
</form>

<button id="fmsSearchBtn">Search</button>