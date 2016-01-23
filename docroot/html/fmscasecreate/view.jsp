<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

<portlet:defineObjects />

<form>
  
  <table>
  	<tr>
  		<td valign="top">
  		<fieldset>
  			<legend>General</legend>
		    <label>Serial Number</label>
		    <input type="text" placeholder="serial number">
		    <span class="help-block"><i>Please provide serial number</i></span>
		    
		    <label>Description</label>
		    <textarea></textarea>
		    <span class="help-block"><i>Please provide description</i></span>
		    
		    <label>Order Group</label>
		    <select>
		    	<option>CM Order</option>
		    </select>
		    <span class="help-block"><i>Please provide CM Order</i></span>
		    
		    <label>Priority</label>
		    <select>
		    	<option>During office hour; normal</option>
		    </select>
		    <span class="help-block"><i>Please choose priority</i></span>
		    
		    <label>Sign off required</label>
			<input type="radio" name="signoff" checked="checked"/>Yes
			<input type="radio" name="signoff" />No
		    <span class="help-block"><i>Please choose sign off requirement</i></span>
    	</fieldset>
    
    
  		</td>
  		<td>&nbsp;&nbsp;&nbsp;&nbsp;
  		</td>
  		 
  		<td  valign="top">
  			<fieldset>
  			<legend>Location</legend>
			    <label>Property</label>
			    <select>
			    	<option>OMB</option>
			    </select>
			    <span class="help-block"><i>Please choose property</i></span>
			    
			    <label>Space</label>
			    <input type="text" placeholder="space">
			    <span class="help-block"><i>Please provide space</i></span>
			    
			    
			    <label>Asset ID</label>
			    <input type="text" placeholder="asset ID">
			    <span class="help-block"><i>Please provide asset Id</i></span>
    		</fieldset>
  		</td>
  		
  		<td>&nbsp;&nbsp;&nbsp;&nbsp;
  		</td>
  		 
  		<td  valign="top">
  			<fieldset>
  			<legend>Status</legend>
			    <label>Status</label>
			    <select>
			    	<option>Reported</option>
			    	<option>Assigned</option>
			    	<option>Work on Progress</option>
			    	<option>On hold</option>
			    	<option>Completed</option>
			    </select>
			    <span class="help-block"><i>Please choose status</i></span>
			    
			    <label>On hold Reason</label>
			    <textarea></textarea>
			    <span class="help-block"><i>Please provide reason for on-hold</i></span>
			    
			    
			    <label>Cancellation Reason</label>
			    <textarea></textarea>
			    <span class="help-block"><i>Please provide reason for cancellation</i></span>
    		</fieldset>
  		</td>
  		
  		<td>&nbsp;&nbsp;&nbsp;&nbsp;
  		</td>
  		 
  		<td  valign="top">
  			<fieldset>
  			<legend>Service Data</legend>
			    <label>Supervisor</label>
			    <select>
			    	<option>Supervisor A</option>
			    	<option>Supervisor B</option>
			    	<option>Supervisor C</option>
			    	<option>Supervisor D</option>
			    	
			    </select>
			    <span class="help-block"><i>Please choose supervisor</i></span>
			    
			   	<label>Internal Tradesperson</label>
			    <select>
			    	<option>Tradesperson A</option>
			    	<option>Tradesperson B</option>
			    	<option>Tradesperson C</option>
			    	<option>Tradesperson D</option>
			    	
			    </select>
			    <span class="help-block"><i>Please choose Internal Tradesperson</i></span>
			    
			    
    		</fieldset>
  		</td>
  		
  		<td>&nbsp;&nbsp;&nbsp;&nbsp;
  		</td>
  		 
  		<td  valign="top">
  			<fieldset>
  			<legend>Remarks</legend>
			    <label>Comments</label>
			    <textarea></textarea>
			    <span class="help-block"><i>Please provide comment</i></span>
    		</fieldset>
  		</td>
  	</tr>
  </table>
</form>

<hr/>	

<button id="submitBtn">Submit</button>
<button id="closeBtn">Close</button>