YUI()
		.use(
				'aui-datatable',
				function(Y) {
					var columnSet = [ {
						key : "0",
						label : "Resources",
						formatter : '{value}'
					} ];
					for (var i = 1; i <= 31; i++) {
						columnSet
								.push({
									key : "" + i,
									label : "" + i,
									allowHTML : true,
									formatter : '<a href="#" onclick="showAttendanceSheet();">{value}</a>'
								});
					}

				
					var data = [ {
						0 : 'Cleaners present',
						1 : 2,
						2 : 2,
						3 : 2,
						4 : 2,
						5 : 2,
						6 : 1,
						7 : 2,
						8 : 2,
						9 : 2,
						10 : 2,
						11 : 2,
						12 : 2,
						13 : 2,
						14 : 2,
						15 : 2,
						16 : 2,
						17 : 2,
						18 : 2,
						19 : 2,
						20 : 2,
						21 : 2,
						22 : 2,
						23 : 1,
						24 : 2,
						25 : 2,
						26 : 2,
						27 : 2,
						28 : 2,
						29 : 2,
						30 : 2,
						31 : 2
					}, {
						0 : 'Landscapers present',
						1 : 2,
						2 : 1,
						3 : 2,
						4 : 2,
						5 : 2,
						6 : 2,
						7 : 2,
						8 : 2,
						9 : 2,
						10 : 2,
						11 : 2,
						12 : 2,
						13 : 2,
						14 : 2,
						15 : 2,
						16 : 2,
						17 : 2,
						18 : 2,
						19 : 2,
						20 : 2,
						21 : 2,
						22 : 1,
						23 : 2,
						24 : 2,
						25 : 2,
						26 : 2,
						27 : 2,
						28 : 2,
						29 : 2,
						30 : 2,
						31 : 2
					}, {
						0 : 'Pest Control Specialists present',
						1 : 2,
						2 : 1,
						3 : 2,
						4 : 2,
						5 : 2,
						6 : 2,
						7 : 2,
						8 : 2,
						9 : 2,
						10 : 2,
						11 : 2,
						12 : 2,
						13 : 2,
						14 : 2,
						15 : 2,
						16 : 1,
						17 : 2,
						18 : 2,
						19 : 2,
						20 : 2,
						21 : 2,
						22 : 2,
						23 : 2,
						24 : 2,
						25 : 1,
						26 : 2,
						27 : 2,
						28 : 2,
						29 : 2,
						30 : 2,
						31 : 2
						} ];

					new Y.DataTable({
						columns : columnSet,
						width : '100%',
						height : '100%',
						data : data
					}).render('#attendanceTable');
				});

var nonAttendedData  = [
    {
        value: 5,
        color:"#ff0000",
        highlight: "#dd0000",
        label: "Not Attended"
    },
    {
        value: 95,
        color: "#dddddd",
        highlight: "#aaaaaa",
        label: "Others"
    }
]

var lateData  = [
    {
        value: 15,
        color:"#ff9900",
        highlight: "#dddd00",
        label: "Late"
    },
    {
        value: 85,
        color: "#dddddd",
        highlight: "#aaaaaa",
        label: "Others"
    }
]

var attendedData  = [
    {
        value: 80,
        color:"#00ff00",
        highlight: "#00dd00",
        label: "Attended"
    },
    {
        value: 20,
        color: "#dddddd",
        highlight: "#aaaaaa",
        label: "Others"
    }
]

var totalData  = [
{
    value: 5,
    color:"#ff0000",
    highlight: "#dd0000",
    label: "Not Attended"
},{
    value: 15,
    color:"#ff9900", 
    highlight: "#dddd00",
    label: "Late" 
},{
    value: 80,
    color:"#00ff00",
    highlight: "#00dd00",
    label: "Attended"
}
]

var options = 
{
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : true,

    //String - The colour of each segment stroke
    segmentStrokeColor : "#fff",

    //Number - The width of each segment stroke
    segmentStrokeWidth : 2,

    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout : 50, // This is 0 for Pie charts

    //Number - Amount of animation steps
    animationSteps : 100,

    //String - Animation easing effect
    animationEasing : "easeOutBounce",

    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : true,

    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : true,

    
}

function showAttendanceSheet() {
	console.log(attendanceSheetDlg);
	attendanceSheetDlg.show();
}

var attendanceSheetDlg;
YUI().use(
		  'aui-modal',
		  function(Y) {		  
			  attendanceSheetDlg = new Y.Modal(
		      {
		        bodyContent: '<table class="table table-condensed"><thead><tr><th>Name</th><th>Start</th><th>Finish</th></tr></thead><tbody><tr><td>Donald Trump</td><td>08:00</td><td>10:00</td></tr><tr><td>Sarah Palin</td><td>10:30</td><td>12:30</td></tr></tbody></table>',
		        centered: true,
		        destroyOnHide: false,
		        headerContent: '<h3>Attendance Sheet</h3>',
		        modal: true,
		        visible: false,
		        render: '#attendanceSheet',
		        width: 450
		      }  
		    );
			  
		  }
		);



var notAttendedCtx = document.getElementById("fmsNotAttendChart").getContext("2d");
new Chart(notAttendedCtx).Pie(nonAttendedData,options);

var lateCtx = document.getElementById("fmsLateChart").getContext("2d");
new Chart(lateCtx).Pie(lateData,options);

var attendedCtx = document.getElementById("fmsAttendChart").getContext("2d");
new Chart(attendedCtx).Pie(attendedData,options);

var totalCtx = document.getElementById("fmsTotalChart").getContext("2d");
new Chart(totalCtx).Pie(totalData,options);
