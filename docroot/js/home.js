YUI().use('aui-button', function(Y) {
	var dashboardBtn = new Y.Button({
		label : 'Dashboard',
		srcNode : '#dashboardBtn',
		cssClass: 'btn btn-lg btn-block btn-primary'
	}).render();
	
	dashboardBtn.on("click", function() {
		console.log("Dashboard button is clicked: ", this);
		location.href = '/dashboard';
	}, dashboardBtn);

	var pmBtn = new Y.Button({
		label : 'Preventive Maintenance',
		srcNode : '#pmBtn',
		cssClass: 'btn btn-lg btn-block btn-primary'
	}).render();

	pmBtn.on("click", function() {
		console.log("PM button is clicked: ", this);
		location.href = '/preventive-maintenance';
	}, pmBtn);

	var cmBtn = new Y.Button({
		label : 'Corrective Maintenance',
		srcNode : '#cmBtn',
		cssClass: 'btn btn-lg btn-block btn-primary'
	}).render();
	
	cmBtn.on("click", function() {
		location.href = '/corrective-maintenance';
	}, cmBtn);
	
	var administrationBtn = new Y.Button({
		label : 'Adminstration',
		srcNode : '#administrationBtn',
		cssClass: 'btn btn-lg btn-block btn-primary'
	}).render();
	
	administrationBtn.on("click", function() {
		location.href = '/administration';
	}, administrationBtn);
	
	var attendanceBtn = new Y.Button({
		label : 'Attendance',
		srcNode : '#attendanceBtn',
		cssClass: 'btn btn-lg btn-block btn-primary'
	}).render();
	
	attendanceBtn.on("click", function() {
		location.href = '/attendance';
	}, attendanceBtn);

});