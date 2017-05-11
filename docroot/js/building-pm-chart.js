YUI()
		.use(
				'aui-datatable',
				function(Y) {
					
					function formatResourcesColumn(o) {
						if (o.value == 'Security System') {
							return "<a href='/security-system'>" + o.value + "</a>";
						} else if (o.value == 'Building System') {
							return "<a href='/building-system'>" + o.value + "</a>";
						} else if (o.value == 'M&E') {
							return "<a href='/m-e'>" + o.value + "</a>";
						}
				        return "-";
				    }
					
					var columnSet = [ {
						key : "0",
						allowHTML : true,
						label : "Resources",
						formatter : formatResourcesColumn
					} ];
					for (var i = 1; i <= 31; i++) {
						columnSet
								.push({
									key : "" + i,
									label : "" + i,
									allowHTML : true,
									formatter : '<img src="/fms-app-portlet/images/circle-{value}.png" width="15px" height="15px"/>'
								});
					}

					var data = [ {
						0 : 'Security System',
						1 : 'green',
						2 : 'red',
						3 : 'green',
						4 : 'green',
						5 : 'green',
						6 : 'yellow',
						7 : 'green',
						8 : 'green',
						9 : 'green',
						10 : 'green',
						11 : 'green',
						12 : 'green',
						13 : 'green',
						14 : 'green',
						15 : 'green',
						16 : 'green',
						17 : 'green',
						18 : 'green',
						19 : 'green',
						20 : 'green',
						21 : 'green',
						22 : 'green',
						23 : 'yellow',
						24 : 'green',
						25 : 'green',
						26 : 'green',
						27 : 'green',
						28 : 'green',
						29 : 'green',
						30 : 'green',
						31 : 'green'
					}, {
						0 : 'Building System',
						1 : 'green',
						2 : 'red',
						3 : 'green',
						4 : 'green',
						5 : 'green',
						6 : 'green',
						7 : 'green',
						8 : 'green',
						9 : 'green',
						10 : 'green',
						11 : 'green',
						12 : 'green',
						13 : 'green',
						14 : 'green',
						15 : 'green',
						16 : 'green',
						17 : 'green',
						18 : 'green',
						19 : 'green',
						20 : 'green',
						21 : 'green',
						22 : 'yellow',
						23 : 'green',
						24 : 'green',
						25 : 'green',
						26 : 'green',
						27 : 'green',
						28 : 'green',
						29 : 'green',
						30 : 'green',
						31 : 'green'
					}, {
						0 : 'M&E',
						1 : 'green',
						2 : 'red',
						3 : 'green',
						4 : 'green',
						5 : 'green',
						6 : 'green',
						7 : 'green',
						8 : 'green',
						9 : 'green',
						10 : 'green',
						11 : 'green',
						12 : 'green',
						13 : 'green',
						14 : 'green',
						15 : 'green',
						16 : 'red',
						17 : 'green',
						18 : 'green',
						19 : 'green',
						20 : 'green',
						21 : 'green',
						22 : 'green',
						23 : 'green',
						24 : 'green',
						25 : 'yellow',
						26 : 'green',
						27 : 'green',
						28 : 'green',
						29 : 'green',
						30 : 'green',
						31 : 'green'
					} ];

					new Y.DataTable({
						columns : columnSet,
						width : '100%',
						height : '100%',
						data : data
					}).render('#pmTable');
				});
	
var notCompletedData = [
     {
         "type": "Not Completed",
         "value": 9,
         "color": "#ff0000"
     },
     {  
         "type": "Others",
         "value": 95,
         "color": "#dddddd"
     }
 ];

var notOnScheduleData = [
    {
        "type": "Not On Schedule",
        "value": 15,
        "color": "#ff9900"
    },
    {  
        "type": "Others",
        "value": 85,
        "color": "#dddddd"
    }
];

var completedData = [
     {
         "type": "Completed",
         "value": 80,
         "color": "#00ff00"
     },
     {  
         "type": "Others",
         "value": 20,
         "color": "#dddddd"
     }
 ];

var totalData = [
     {
         "type": "Not Completed",
         "value": 5,
         "color": "#ff0000"
     },
     {  
         "type": "Not On Schedule &\nCompleted",
         "value": 15,
         "color": "#ff9900"
     },
     {  
         "type": "On Schedule &\nCompleted",
         "value": 80,
         "color": "#00ff00"
     }
 ];

drawPieChart("fmsCompleted", ["Completed"], completedData, function(event) {
	var label = event.dataItem.title;
	var value = event.dataItem.value;
	var percents = event.dataItem.percents;
    console.log("label: " + label + ", value: " + value + ", percents: " + percents);
});

drawPieChart("fmsNotOnSchedule", ["Not on Schedule"], notOnScheduleData, function(event) {
	var label = event.dataItem.title;
	var value = event.dataItem.value;
	var percents = event.dataItem.percents;
    console.log("label: " + label + ", value: " + value + ", percents: " + percents);
});

drawPieChart("fmsNotComplete", ["Not Completed"], notCompletedData, function(event) {
	var label = event.dataItem.title;
	var value = event.dataItem.value;
	var percents = event.dataItem.percents;
    console.log("label: " + label + ", value: " + value + ", percents: " + percents);
});

drawPieChart("fmsTotal", ["Total"], totalData, function(event) {
	var label = event.dataItem.title;
	var value = event.dataItem.value;
	var percents = event.dataItem.percents;
    console.log("label: " + label + ", value: " + value + ", percents: " + percents);
});