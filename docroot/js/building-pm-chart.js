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

var notCompletedData  = [
    {
        value: 5,
        color:"#ff0000",
        highlight: "#dd0000",
        label: "Not Completed"
    },
    {
        value: 95,
        color: "#dddddd",
        highlight: "#aaaaaa",
        label: "Others"
    }
]

var notOnScheduleData  = [
    {
        value: 15,
        color:"#ff9900",
        highlight: "#dddd00",
        label: "Not On Schedule"
    },
    {
        value: 85,
        color: "#dddddd",
        highlight: "#aaaaaa",
        label: "Others"
    }
]

var onScheduleData  = [
    {
        value: 60,
        color:"#0000ff",
        highlight: "#0000dd",
        label: "On Schedule"
    },
    {
        value: 40,
        color: "#dddddd",
        highlight: "#aaaaaa",
        label: "Others"
    }
]


var completedData  = [
    {
        value: 20,
        color:"#00ff00",
        highlight: "#00dd00",
        label: "Completed"
    },
    {
        value: 80,
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
    label: "Not Completed"
},{
    value: 15,
    color:"#ff9900", 
    highlight: "#dddd00",
    label: "Not On Schedule" 
},{
    value: 60,
    color:"#0000ff",
    highlight: "#0000dd",
    label: "On Schedule"
},{
    value: 20,
    color:"#00ff00",
    highlight: "#00dd00",
    label: "Completed"
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

var notCompletedCtx = document.getElementById("fmsNotCompletedChart").getContext("2d");
new Chart(notCompletedCtx).Pie(notCompletedData,options);

var notOnScheduleCtx = document.getElementById("fmsNotOnScheduleChart").getContext("2d");
new Chart(notOnScheduleCtx).Pie(notOnScheduleData,options);

var onScheduleCtx = document.getElementById("fmsOnScheduleChart").getContext("2d");
new Chart(onScheduleCtx).Pie(onScheduleData,options);

var completedCtx = document.getElementById("fmsCompletedChart").getContext("2d");
new Chart(completedCtx).Pie(completedData,options);

var totalCtx = document.getElementById("fmsTotalChart").getContext("2d");
new Chart(totalCtx).Pie(totalData,options);
