<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

<portlet:defineObjects />

<form>
  <fieldset>
  
  	<label><b>Building name</b></label>
    <select>
    	<option checked>One Marina Boulevard</option>
    	<option>One Raffles Place</option>
    </select>
    <hr/>
    
    <label><b>Fire Protection</b></label>
    <label class="checkbox">
      <input type="checkbox" checked> Sprinkle System
    </label>
    <label class="checkbox">
      <input type="checkbox" checked> Fire Hydrant
    </label>
      <label class="checkbox">
      <input type="checkbox" checked> Hosereel System
    </label>
      <label class="checkbox">
      <input type="checkbox"> Fire Extinguisher
    </label>
    
    <hr/>
    <label><b>Air Conditioning System</b></label>
    <label class="checkbox">
      <input type="checkbox"> Chiller System
    </label>
    <label class="checkbox">
      <input type="checkbox"> VRV System
    </label>
    
    
     <hr/>
    <label><b>Water Tank Flushing</b></label>
    <label class="checkbox">
      <input type="checkbox"> Water Tank Flushing
    </label>
    
    
     
     <hr/>
    <label><b>LEW - EMA Licensing</b></label>
    <label class="checkbox">
      <input type="checkbox"> LEW - EMA Licensing
    </label>
    
  </fieldset>
</form>
<hr/>


<button id="fmsSearchBtn">Search</button>