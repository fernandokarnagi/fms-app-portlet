var chartData = [
    {
        "startValue": 0,
        "endValue": 70,
        "color": "#CC896C",
        "innerRadius": "55%"
    },
    {  
    	"startValue": 70,
        "endValue": 80,
        "color": "#ffff00",
        "innerRadius": "55%"
    },
    {
    	"startValue": 80,
        "endValue": 100,
        "color": "#00ff00",
        "innerRadius": "55%"
    }
];

var chartDataTotal = [
                 {
                     "startValue": 0,
                     "endValue": 70,
                     "color": "#ff0000" ,
                     "innerRadius": "55%"
                 },
                 {  
                 	"startValue": 70,
                     "endValue": 80,
                     "color": "#ffff00",
                     "innerRadius": "55%"
                 },
                 {
                 	"startValue": 80,
                     "endValue": 100,
                     "color": "#00ff00",
                     "innerRadius": "55%"
                 }
             ];


function fmsPMChartCallBack(chartObj) { 
	AUI().use('aui-base','liferay-portlet-url','aui-node', function(Y) { 
		var fmsPMChart = Y.one('#fmsPMChart');
		fmsPMChart.on('click', function(event){
			   
			var buildingId = "MappleTree Logistics. 15 CS MapleTree";
			var month = "January";
			var year = 2015;
			
			var portletURL = new Liferay.PortletURL.createRenderURL(); 
			portletURL.setPortletId(porletId);
			portletURL.setParameter("buildingId", buildingId);
			portletURL.setParameter("month", month);
			portletURL.setParameter("year", year);
			portletURL.setParameter("title", "Actual PM Cleaning Performance");
			portletURL.setParameter("jspPage", "/html/fmscleaningperformancedashboard/bar.jsp"); 
			location.href=portletURL;
		});
	});
	 
}  	
 
function fmsCMContractorChartCallBack(chartObj) {
	AUI().use('aui-base','liferay-portlet-url','aui-node', function(Y) { 
		var fmsPMChart = Y.one('#fmsPMChart');
		fmsPMChart.on('click', function(event){
			   
			var buildingId = "MappleTree Logistics. 15 CS MapleTree";
			var month = "January";
			var year = 2015;
			
			var portletURL = new Liferay.PortletURL.createRenderURL(); 
			portletURL.setPortletId(porletId);
			portletURL.setParameter("buildingId", buildingId);
			portletURL.setParameter("month", month);
			portletURL.setParameter("year", year);
			portletURL.setParameter("title", "Corrective Maintenance Assessment by Contractor");
			portletURL.setParameter("jspPage", "/html/fmscleaningperformancedashboard/bar.jsp"); 
			location.href=portletURL;
		});
	});
	 
}

function fmsCMManagerChartCallBack(chartObj) {
	AUI().use('aui-base','liferay-portlet-url','aui-node', function(Y) { 
		var fmsPMChart = Y.one('#fmsPMChart');
		fmsPMChart.on('click', function(event){
			   
			var buildingId = "MappleTree Logistics. 15 CS MapleTree";
			var month = "January";
			var year = 2015;
			
			var portletURL = new Liferay.PortletURL.createRenderURL(); 
			portletURL.setPortletId(porletId);
			portletURL.setParameter("buildingId", buildingId);
			portletURL.setParameter("month", month);
			portletURL.setParameter("year", year);
			portletURL.setParameter("title", "Corrective Maintenance Assessment by Property Manager");
			portletURL.setParameter("jspPage", "/html/fmscleaningperformancedashboard/bar.jsp"); 
			location.href=portletURL;
		});
	});
	 
}
                         
function fmsTotalChartCallBack(chartObj) {
	AUI().use('aui-base','liferay-portlet-url','aui-node', function(Y) { 
		var fmsPMChart = Y.one('#fmsPMChart');
		fmsPMChart.on('click', function(event){
			   
			var buildingId = "MappleTree Logistics. 15 CS MapleTree";
			var month = "January";
			var year = 2015;
			
			var portletURL = new Liferay.PortletURL.createRenderURL(); 
			portletURL.setPortletId(porletId);
			portletURL.setParameter("buildingId", buildingId);
			portletURL.setParameter("month", month);
			portletURL.setParameter("year", year);
			portletURL.setParameter("title", "Overall Performance");
			portletURL.setParameter("jspPage", "/html/fmscleaningperformancedashboard/bar.jsp"); 
			location.href=portletURL;
		});
	});
	 
}	

if (JSPFILE == 'view') {
	drawGaugeChart("fmsPMChart", chartData, "Actual PM Cleaning Performance", 70, fmsPMChartCallBack);
	drawGaugeChart("fmsCMContractorChart", chartData, "Corrective Maintenance Assessment by Contractor", 82.5, fmsCMContractorChartCallBack);
	drawGaugeChart("fmsCMManagerChart", chartData, "Corrective Maintenance Assessment by Property Manager", 92.5, fmsCMManagerChartCallBack);
	drawGaugeChart("fmsTotalChart", chartDataTotal, "Overall Performance", 85.5, fmsTotalChartCallBack);
	
	
	YUI().use('aui-button', 'node', function(Y) {
		var fmsSearchBtn = new Y.Button({
			label : 'Show Schedule',
			srcNode : '#fmsSearchBtn',
			cssClass: 'btn btn-lg btn-block btn-primary'
		}).render();
		
		
		fmsSearchBtn.on("click", function() {
			
			console.log("Search button is clicked");
			
		}, fmsSearchBtn);
		
	
	});  
} else if (JSPFILE == 'bar') {
	var barData = [];
	for (var i = 1; i <= 31; i++) {
		
		var rating = Math.floor(Math.random() * 99) + 1;
		var color = "#ff0000";
		if (rating < 70) {
			color = "";
		} else if (rating < 80) {
			color = "#ffff00";
		} else {
			color = "#00ff00";
		}
		barData.push({"day": i,
		    "rating": rating,
		    "lobby": rating,
		    "lift": rating,
		    "corridor": rating,
		    "toilet": rating,
		    "color": color});
	}
	
	drawBarChart(barData, TITLE);
}

