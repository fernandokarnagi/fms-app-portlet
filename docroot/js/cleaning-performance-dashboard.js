

var fmsPMChart = AmCharts.makeChart( "fmsPMChart", {
	  "type": "gauge",
	  "theme": "light",
	  "axes": [ {
	    "axisThickness": 5,
	    "axisAlpha": 0.2,
	    "tickAlpha": 10,
	    "valueInterval": 20,
	    "bands": [ {
	      "color": "#cc4748",
	      "endValue": 70,
	      "innerRadius": "55%",
	      "startValue": 0
	    }, {
	      "color": "#fdd400",
	      "endValue": 80,
	      "innerRadius": "55%", 
	      "startValue": 70
	    }, { 
	      "color": "#84b761",
	      "endValue": 100,
	      "innerRadius": "55%",
	      "startValue": 80
	    } ],
	    "bottomText": "78.5",
	    "bottomTextFontSize": 40,
	    "bottomTextYOffset": -20,
	    "endValue": 100
	  } ],
	  "arrows": [ {
		  "value": 78.5,
		  "startWidth": 20,
		  "innerRadius": "10%"
		  
	  } ],
	  "export": {
	    "enabled": true
	  }
	} );

fmsPMChart.addTitle("Actual PM Cleaning Performance");


var fmsCMContractorChart = AmCharts.makeChart( "fmsCMContractorChart", {
	  "type": "gauge",
	  "theme": "light",
	  "axes": [ {
	    "axisThickness": 5,
	    "axisAlpha": 0.2,
	    "tickAlpha": 10,
	    "valueInterval": 20,
	    "bands": [ {
	      "color": "#cc4748",
	      "endValue": 70,
	      "innerRadius": "55%",
	      "startValue": 0
	    }, {
	      "color": "#fdd400",
	      "endValue": 80,
	      "innerRadius": "55%", 
	      "startValue": 70
	    }, { 
	      "color": "#84b761",
	      "endValue": 100,
	      "innerRadius": "55%",
	      "startValue": 80
	    } ],
	    "bottomText": "82.5",
	    "bottomTextFontSize": 40,
	    "bottomTextYOffset": -20,
	    "endValue": 100
	  } ],
	  "arrows": [ {
		  "value": 82.5,
		  "startWidth": 20,
		  "innerRadius": "10%"
		  
	  } ],
	  "export": {
	    "enabled": true
	  }
	} );

fmsCMContractorChart.addTitle("Corrective Maintenance Assessment by Contractor");
	





var fmsCMManagerChart = AmCharts.makeChart( "fmsCMManagerChart", {
	  "type": "gauge",
	  "theme": "light",
	  "axes": [ {
	    "axisThickness": 5,
	    "axisAlpha": 0.2,
	    "tickAlpha": 10,
	    "valueInterval": 20,
	    "bands": [ {
	      "color": "#cc4748",
	      "endValue": 70,
	      "innerRadius": "55%",
	      "startValue": 0
	    }, {
	      "color": "#fdd400",
	      "endValue": 80,
	      "innerRadius": "55%", 
	      "startValue": 70
	    }, { 
	      "color": "#84b761",
	      "endValue": 100,
	      "innerRadius": "55%",
	      "startValue": 80
	    } ],
	    "bottomText": "90",
	    "bottomTextFontSize": 40,
	    "bottomTextYOffset": -20,
	    "endValue": 100
	  } ],
	  "arrows": [ {
		  "value": 90,
		  "startWidth": 20,
		  "innerRadius": "10%"
		  
	  } ],
	  "export": {
	    "enabled": true
	  }
	} );

fmsCMManagerChart.addTitle("Corrective Maintenance Assessment by Property Manager");
	


	
var fmsTotalChart = AmCharts.makeChart("fmsTotalChart", {
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
        "bullet": 85
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
        "lineColor": "#000000",
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

fmsTotalChart.addTitle("Overall Performance (85)");