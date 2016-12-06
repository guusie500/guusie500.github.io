var buslines;
var busnames;
var bus305;
var bus306;

function createLines(system){
	//busline 305
	bus305 = {
		origin: 'Oss',
		destination: 'Eindhoven',
		//origin:'51.7651657,5.5303004',
		//destination:'51.44373334,5.47867879',
		/*waypoints: [
		{
			location: 'Heesch+Stationsplein',
			stopover: false
		},{
			location: 'Nistelrode+Noorderbaan',
			stopover: false
		},{
			location: 'Uden+Ziekenhuis',
			stopover: false
		},{
			location: 'Uden+Busstation',
			stopover: false
		},{
			location: 'Veghel+Hintelstraat',
			stopover: false
		},{
			location: 'Veghel+Busstation',
			stopover: false
		},{
			location: 'Veghel+Oprit+N265',
			stopover: false
		},{
			location: 'Veghel+Corridor',
			stopover: false
		}],*/
			provideRouteAlternatives: false,
			travelMode: 'DRIVING',
			unitSystem: google.maps.UnitSystem.METRIC
	};
	
	//busline 306
	bus306 = {
		origin: 'Den Bosch',
		destination: 'OSS',
		waypoints: [
		{
			location: 'Schijndel',
			stopover: true
		},{
			location: 'Veghel',
			stopover: true
		}],
		provideRouteAlternatives: false,
		travelMode: 'DRIVING',
		/*
		drivingOptions: {
		//departureTime: new Date(),
		trafficModel: 'pessimistic'
		}, */
		unitSystem: google.maps.UnitSystem.METRIC
	};
	
	buslines = [bus305,bus306];
	busnames = ['305 Oss - Eindhoven','306 Oss - Den Bosch'];
	/*
	if(buslines.length > 0){
		showLine(buslines);
	}
	*/
}