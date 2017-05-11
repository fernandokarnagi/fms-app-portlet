function drawPieChart(divName, titles, series, onclickEventHandler) {

	AmCharts.ready(function () {
		var titlesNew = [];
		for (var i = 0; i < titles.length; i++) {
			titlesNew.push({
				"text": titles[i],
				"size": 12
			}); 
		}
		
		var dataProvider = [];
		for (var i = 0; i < series.length; i++) {
			dataProvider.push({
				"type": series[i].type,
				"value": series[i].value,
				"color": series[i].color
			}); 
		}
		
		var chart = AmCharts.makeChart(divName, {
		 "type": "pie",
		 "theme": "light",
		 "titleField"  : "type",
		 "valueField"  : "value",
		 "colorField": "color",
		 "radius": "40%",
		 "outlineAlpha": 0.6,
		 "depth3D": 15,
		 "angle": 15, 
		 "pullOutRadius": 15, 
		 "titles": titlesNew,
		 "innerRadius": "50%",
		 "legend": {
			    "enabled": false
			  },
		 "labelsEnabled": false,
		 "labelText": "[[title]]",
		 "balloonText": "[[title]]: [[percents]]% ([[value]])\n[[description]]",
		 "dataProvider"  : dataProvider,
		  "listeners": [{
		      "event": "clickSlice",
		      "method": onclickEventHandler
		      }]
		});
	 
	});
}

function handleClick(event)
{
	var label = event.dataItem.title;
	var value = event.dataItem.value;
	var percents = event.dataItem.percents;
    console.log("label: " + label + ", value: " + value + ", percents: " + percents);
}

function drawGaugeChart(divName, series, title, value, callBack) {
	
	var chart;
    var arrow;
    var axis;
    
	AmCharts.ready(function () {
		// create angular gauge
		
		var chart = AmCharts.makeChart(divName,{
			  "type": "gauge",
			  "arrows": [
			    {
			      "value": value
			    }
			  ],
			  "titles": [
			    {
			      "text": title,
			      "size": 15
			    }
			  ],
			  "axes": [
			    {
			      "bottomText": value + " %",
			      "endValue": 100,
			      "valueInterval": 10,
			      "bands": series,
			      "axisThickness": 1
			    }
			  ]
			});

	    callBack(chart);
	});
}

function drawBulletChart(divName, title, value, callBack) {


	var chart = AmCharts.makeChart(divName, {
	    "type": "serial",
	    "rotate": true,
	    "theme": "light",
	    "path": "http://www.amcharts.com/lib/3/",
	    "autoMargins": false,
	    "marginTop": 5,
	    "marginLeft": 0,
	    "marginBottom": 5,
	    "marginRight": 5,
	    "dataProvider": [{
	        "category": "Overall",
	        "excelent": 20,
	        "good": 20,
	        "average": 20,
	        "poor": 20,
	        "bad": 20,
	        "limit": 80,
	        "full": 100,
	        "bullet": value
	    }],
	    "valueAxes": [{
	        "maximum": 100,
	        "stackType": "regular",
	        "gridAlpha": 0
	    }],
	    "startDuration": 1,
	    "graphs": [{
	        "valueField": "full",
	        "showBalloon": false,
	        "type": "column",
	        "lineAlpha": 0,
	        "fillAlphas": 0.8,
	        "fillColors": ["#fb2316", "#f6d32b", "#19d228"],
	        "gradientOrientation": "horizontal",
	    }, {
	        "clustered": false,
	        "columnWidth": 0.3,
	        "fillAlphas": 1,
	        "lineColor": "#ababab",	
	        "stackable": false,
	        "type": "column",
	        "valueField": "bullet"
	    },{
	        "columnWidth": 0.5,  
	        "lineColor": "#000000",
	        "lineThickness": 3,
	        "noStepRisers": true,
	        "stackable": false,
	        "type": "step",
	        "valueField": "limit"
	    }],
	    "columnWidth": 1,
	    "categoryField": "category",
	    "categoryAxis": {
	        "gridAlpha": 0,
	        "position": "left"  
	    }  
	});

	chart.addTitle(title);
	
	return chart;

};
	

function drawBarChart(data, title) {
	
	var chart = AmCharts.makeChart("monthBreakdown", {
		  "type": "serial",
		  "theme": "light",
		  "marginRight": 20,
		  "dataProvider": data,
		  "valueAxes": [{
		    "axisAlpha": 0,
		    "position": "left",
		    "title": title
		  }],
		  "startDuration": 1,
		  "graphs": [{
		    "balloonText": "<b>Day #[[day]], Overall Rating: [[rating]]%</b></br>Entrance/Lobby: [[lobby]]%</br>Lift Car/Escalator: [[lift]]%<br/>Common Corridor: [[corridor]]%<br/>Toilet/Pantry/Bin Center: [[toilet]]%",
		    "fillColorsField": "color",
		    "fillAlphas": 0.9,
		    "lineAlpha": 0.2,
		    "showHandOnHover": true,
		    "leaveAfterTouch": false,
		    "leaveCursor":false,
		    "type": "column",
		    "valueField": "rating"
		  }],
		  "chartCursor": {
		    "categoryBalloonEnabled": false,
		    "cursorAlpha": 0,	
		    "leaveAfterTouch": false,
		    "leaveCursor": true,
		    "zoomable": true
		  },
		  "categoryField": "day",
		  "categoryAxis": {
		    "gridPosition": "start",
		    "labelRotation": 45
		  },
		  "export": {
		    "enabled": true
		  }

		});
	
	chart.addListener("clickGraphItem", function(event) {
		console.log(event);
		var day = event.item.dataContext.day;
		var rating = event.item.dataContext.rating;
		console.log("day: " + day + ", rating: " + rating);
		//location.href= '/cleaning-assessment';
	})
}