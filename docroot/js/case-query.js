YUI()
	.use(
		'aui-datatable',
		function(Y) {
			
			var columnSet = [ {
				key : "0",
				allowHTML : true,
				label : "Case ID",
				formatter : '{value}'
			},{
				key : "1",
				allowHTML : true,
				label : "Reported time",
				formatter : '{value}'
			},{
				key : "2",
				allowHTML : true,
				label : "Assigned to",
				formatter : '{value}'
			},{
				key : "3",
				allowHTML : true,
				label : "Description",
				formatter : '{value}'
			},{
				key : "4",
				allowHTML : true,
				label : "Category",
				formatter : '{value}'
			},{
				key : "5",
				allowHTML : true,
				label : "Cost",
				formatter : '{value}'
			},{
				key : "6",
				allowHTML : true,
				label : "Reported by",
				formatter : '{value}'
			},{
				key : "7",
				allowHTML : true,
				label : "Status",
				formatter : '{value}'
			},{
				key : "8",
				allowHTML : true,
				label : "Case Closed on",
				formatter : '{value}'
			},{
				key : "9",
				allowHTML : true,
				label : "Additional note",
				formatter : '{value}'
			}];
						
			var data = [ {
				0 : '201601020001',
				1 : '6 Jan 2016 17:00',
				2 : 'Yew Chai',
				3 : '#15-01 Aircon too cold',
				4 : 'M&E',
				5 : '-',
				6 : 'Tenant',
				7 : 'Work in Progress',
				8 : '-',
				9 : '-'
			},{
				0 : '201601020002',
				1 : '7 Jan 2016 15:00',
				2 : 'Yew Chai',
				3 : '#22-01 office Light bulb blown',
				4 : 'M&E',
				5 : '-',
				6 : 'Tenant',
				7 : 'Assigned',
				8 : '-',
				9 : '-'
			},{
				0 : '201601020003',
				1 : '8 Jan 2016 11:00',
				2 : '-',
				3 : 'Level 13 Toilet choke',
				4 : 'Building',
				5 : '-',
				6 : 'Bulding Custodian',
				7 : 'Reported',
				8 : '-',
				9 : '-'
			},{
				0 : '201601020004',
				1 : '9 Jan 2016 10:00',
				2 : 'Yew Chai',
				3 : 'B1 Gantry not working',
				4 : 'Security',
				5 : '$10',
				6 : 'Tenant',
				7 : 'Completed',
				8 : '9 Jan 2016 11:00',
				9 : 'Wire loose'
			},{
				0 : '201601020005',
				1 : '10 Jan 2016 10:00',
				2 : 'Yew Chai',
				3 : 'Level 16 Fire alarm faulty',
				4 : 'Security',
				5 : '-',
				6 : 'Building Custodian',
				7 : 'Completed',
				8 : '10 Jan 2016 11:00',
				9 : 'No fault'
			},{
				0 : '201601020006',
				1 : '11 Jan 2016 09:00',
				2 : 'Yew Chai',
				3 : 'Level 1 hall way Light blown',
				4 : 'M&E',
				5 : '$80',
				6 : 'Technician',
				7 : 'Completed',
				8 : '11 Jan 2016 09:30',
				9 : 'Changed light bu'
			} ];

			new Y.DataTable({
				columns : columnSet,
				width : '100%',
				height : '100%',
				data : data
			}).render('#queryTable');
		});



YUI().use('aui-button', 'node', function(Y) {
	var queryBtn = new Y.Button({
		label : 'Query',
		srcNode : '#queryBtn',
		cssClass: 'btn btn-lg  btn-primary'
	}).render();
	
	var createCaseBtn = new Y.Button({
		label : 'Create Case',
		srcNode : '#createCaseBtn',
		cssClass: 'btn btn-lg btn-primary'
	}).render();
	
	var closeCaseBtn = new Y.Button({
		label : 'Close Case (please select below)',
		srcNode : '#closeCaseBtn',
		cssClass: 'btn btn-lg btn-primary'
	}).render();
	
	queryBtn.on("click", function() {
		console.log("Query Button is clicked");
	}, queryBtn);
	
	createCaseBtn.on("click", function() {
		console.log("Create case Button is clicked");
		location.href='/create';
	}, createCaseBtn);
	
	closeCaseBtn.on("click", function() {
		console.log("close case Button is clicked");  
		var res = confirm("Are you sure you want to close this case?");
	}, closeCaseBtn);

});