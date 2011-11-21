var land = [30, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1,50,10]
var chart;
$(document).ready(function() {

// FIXME: these should come from the page
var numPlayers = 1,
	numTurns = 100,
	money = false;

function runTest(nPlayers, nTurns, mon) {
	// FIXME: implement. should return a 36-element array.
}

// FIXME: we should actually run this several times and figure out the
// distribution of the hits for each space.
var hits = runTest();


chart = new Highcharts.Chart({
	chart: {
		renderTo: 'container',
		defaultSeriesType: 'column'
	},
	
	title: {
		text: 'Sexiest Monopoly square'
	},
	
	subtitle: {
		text: 'Yeeee!'
	},

	xAxis: {
		categories: [
			'0',
			'1', 
			'2', 
			'3', 
			'4', 
			'5', 
			'6', 
			'7', 
			'8', 
			'9', 
			'10', 
			'11', 
			'12',
			'13',
			'14',							
			'15',							
			'16',							
			'17',							
			'18',							
			'19',							
			'20',							
			'21',							
			'22',							
			'23',							
			'24',							
			'25',							
			'26',							
			'27',							
			'28',							
			'29',							
			'30',							
			'31',							
			'32',							
			'33',							
			'34',							
			'35',							
			'36',							
			'37',							
			'38',							
			'39',
		]
	},
	
	yAxis: {
		min: 0,
		title: {
			text: 'landings'
		}
	},

	legend: {
		layout: 'vertical',
		backgroundColor: '#FFFFFF',
		align: 'left',
		verticalAlign: 'top',
		x: 20000,
		y: 70,
		floating: true,
		shadow: true,
		display: false,
	},

	tooltip: {
		formatter: function() {
			return ''+
				this.x +': '+ this.y +' mm';
		}
	},

	plotOptions: {
		column: {
			pointPadding: -.2,
			borderWidth: 0
		}
	},

	series: [{
		data: land
	}]
});
	
	
});
