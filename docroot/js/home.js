YUI().use('aui-button', function(Y) {
	
	
	//for mouseover and mouseout event
	var dashboard = Y.one('#dashboard'); 
	
	if(dashboard!=null){
	
		var dashboardBtn = new Y.Button({
			label : 'Dashboard',
			srcNode : '#dashboardBtn',
			cssClass: 'btn btn-lg btn-block btn-primary'
		}).render();
		
		dashboardBtn.on("click", function() {
			console.log("Dashboard button is on clicked: ", this);
			location.href = '/building-locator-dashboard';		
		}, dashboardBtn);
		

		dashboardBtn.on("mouseover", function() {
			console.log("Dashboard button mouseover ", this);	
			console.log("administration ", administration);	
			
			if(dashboard!=null){
				dashboard.setStyle('display','block');
			}
			if(pm!=null){
				pm.setStyle('display','none');
			}
			if(cm!=null){
				cm.setStyle('display','none');
			}
			
			if(attendance!=null){
				attendance.setStyle('display','none');	
			}
			
			if(ca!=null){
				ca.setStyle('display','none');	
			}
			
			if(administration!=null){
				administration.setStyle('display','none');		
			}			
		}, dashboardBtn);	
	}
	
	
	/*dashboardBtn.on("mouseout", function() {
		console.log("Dashboard button mouseout ", this);
		dashboard.setStyle('display','none');			
	}, dashboardBtn);*/
	
	
	var pm = Y.one('#pm');
	if(pm!=null){
		var pmBtn = new Y.Button({
			label : 'Preventive Maintenance',
			srcNode : '#pmBtn',
			cssClass: 'btn btn-lg btn-block btn-primary'
		}).render();
	
		pmBtn.on("click", function() {
			console.log("PM button is clicked: ", this);
			location.href = '/preventive-maintenance-dashboard';
		}, pmBtn);
		
		
		pmBtn.on("mouseover", function() {
			console.log("pmBtn button mouseover ", this);	
			
			if(dashboard!=null){
				dashboard.setStyle('display','none');
			}
			if(pm!=null){
				pm.setStyle('display','block');
			}
			if(cm!=null){
				cm.setStyle('display','none');
			}
			
			if(attendance!=null){
				attendance.setStyle('display','none');	
			}
			
			if(ca!=null){
				ca.setStyle('display','none');	
			}
			
			if(administration!=null){
				administration.setStyle('display','none');		
			}
			
		}, pmBtn);	
	
	}
	var cm = Y.one('#cm');
	if(cm!=null){

		var cmBtn = new Y.Button({
			label : 'Corrective Maintenance',
			srcNode : '#cmBtn',
			cssClass: 'btn btn-lg btn-block btn-primary'
		}).render();
		
		cmBtn.on("click", function() {
			location.href = '/corrective-maintenance-dashboard';
		}, cmBtn);
		
	
		cmBtn.on("mouseover", function() {
			console.log("cmBtn button mouseover ", this);
			
			if(dashboard!=null){
				dashboard.setStyle('display','none');
			}
			if(pm!=null){
				pm.setStyle('display','none');
			}
			if(cm!=null){
				cm.setStyle('display','block');	
			}
			
			if(attendance!=null){
				attendance.setStyle('display','none');	
			}
			
			if(ca!=null){
				ca.setStyle('display','none');	
			}
			
			if(administration!=null){
				administration.setStyle('display','none');		
			}		
		}, cmBtn);	
	}
	
	
	var administration = Y.one('#administration');
	if(administration!=null){
		var administrationBtn = new Y.Button({
			label : 'Adminstration',
			srcNode : '#administrationBtn',
			cssClass: 'btn btn-lg btn-block btn-primary'
		}).render();
		
		administrationBtn.on("click", function() {
			location.href = '/administration';
		}, administrationBtn);
		
		administrationBtn.on("mouseover", function() {
			console.log("Dashboard button mouseover ", this);
			if(dashboard!=null){
				dashboard.setStyle('display','none');
			}
			if(pm!=null){
				pm.setStyle('display','none');
			}
			if(cm!=null){
				cm.setStyle('display','none');	
			}
			
			if(attendance!=null){
				attendance.setStyle('display','none');	
			}
			
			if(ca!=null){
				ca.setStyle('display','none');	
			}
			
			if(administration!=null){
				administration.setStyle('display','block');	
			}		
		}, administrationBtn);	
		
		administrationBtn.on("mouseout", function() {
			console.log("Dashboard button mouseout ", this);
					
		}, administrationBtn);
	}
	
	var attendance = Y.one('#attendance');
	
	if(attendance!=null){
	
		var attendanceBtn = new Y.Button({
			label : 'Attendance',
			srcNode : '#attendanceBtn',
			cssClass: 'btn btn-lg btn-block btn-primary'
		}).render();
		
		attendanceBtn.on("click", function() {
			location.href = '/attendance-dashboard';
		}, attendanceBtn);
		
		attendanceBtn.on("mouseover", function() {
			console.log("Dashboard button mouseover ", this);
			if(dashboard!=null){
				dashboard.setStyle('display','none');
			}
			if(pm!=null){
				pm.setStyle('display','none');
			}
			if(cm!=null){
				cm.setStyle('display','none');	
			}
			
			if(attendance!=null){
				attendance.setStyle('display','block');
			}
			
			if(ca!=null){
				ca.setStyle('display','none');	
			}
			
			if(administration!=null){
				administration.setStyle('display','none');	
			}			
		}, attendanceBtn);
	}
	
	
	var ca = Y.one('#ca');
	if(ca!=null){
		var caBtn = new Y.Button({
			label : 'Cleaning Assessment',
			srcNode : '#caBtn',
			cssClass: 'btn btn-lg btn-block btn-primary'
		}).render();
		
		caBtn.on("click", function() {
			location.href = '/cleaning-assessment-dashboard';
		}, caBtn);
		
		caBtn.on("mouseover", function() {
			console.log("caBtn button mouseover ", this);
			if(dashboard!=null){
				dashboard.setStyle('display','none');
			}
			if(pm!=null){
				pm.setStyle('display','none');
			}
			if(cm!=null){
				cm.setStyle('display','none');	
			}
			
			if(attendance!=null){
				attendance.setStyle('display','none');
			}
			
			if(ca!=null){
				ca.setStyle('display','block');	
			}
			
			if(administration!=null){
				administration.setStyle('display','none');	
			}	
			
		}, cmBtn);
	}
	
	/*attendanceBtn.on("mouseout", function() {
		console.log("Dashboard button mouseout ", this);
		attendance.setStyle('display','none');			
	}, attendanceBtn);*/

});