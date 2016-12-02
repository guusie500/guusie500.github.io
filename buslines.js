function createLines(system){
	//busline 305
	var bus305 = {
		origin: 'Oss',
		destination: 'Eindhoven',
		waypoints: [
		{
			location: 'Veghel',
			stopover: false
		},{
			location: 'Uden',
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
	
	//busline 306
	var bus306 = {
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
	
	var lines = [bus305,bus306];
	if(lines.length > 0){
		showLine(lines);
	}
}