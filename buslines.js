var buslines;
var busnames;
var bus020, bus022, bus024,bus121, bus305, bus306;

function createLines(system){
	//busline 20
	bus020 = {
		origin: 'Helmond',
		destination: 'Eindhoven',
		//origin:'51.7651657,5.5303004',
		//destination:'51.44373334,5.47867879',
		waypoints: [
		{
			location: 'Asten',
			stopover: false
		},{
			location: 'Someren',
			stopover: false
		},{
			location: 'Lierop',
			stopover: false
		},{
			location: 'Mierlo',
			stopover: false
		},{
			location: 'Geldrop',
			stopover: false
		}],
			provideRouteAlternatives: false,
			travelMode: 'DRIVING',
			unitSystem: google.maps.UnitSystem.METRIC
	};
	
	//busline 22
	bus022 = {
		origin: 'Helmond',
		destination: 'Eindhoven',
		//origin:'51.7651657,5.5303004',
		//destination:'51.44373334,5.47867879',
		waypoints: [
		{
			location: 'Stiphout',
			stopover: false
		},{
			location: 'Gerwen',
			stopover: false
		},{
			location: 'Nuenen',
			stopover: false
		}],
			provideRouteAlternatives: false,
			travelMode: 'DRIVING',
			unitSystem: google.maps.UnitSystem.METRIC
	};
	
	//busline 22
	bus024 = {
		origin: 'Helmond',
		destination: 'Eindhoven',
		//origin:'51.7651657,5.5303004',
		//destination:'51.44373334,5.47867879',
		waypoints: [
		{
			location: 'Mierlo',
			stopover: false
		},{
			location: 'Geldrop',
			stopover: false
		}],
			provideRouteAlternatives: false,
			travelMode: 'DRIVING',
			unitSystem: google.maps.UnitSystem.METRIC
	};
	
	//busline 22
	bus121 = {
		origin: 'Uden',
		destination: 'Eindhoven',
		//origin:'51.7651657,5.5303004',
		//destination:'51.44373334,5.47867879',
		waypoints: [
		{
			location: 'Volkel',
			stopover: false
		},{
			location: 'Boekel',
			stopover: false
		},{
			location: 'Gemert',
			stopover: false
		},{
			location: 'Lieshout',
			stopover: false
		},{
			location: 'Nuenen',
			stopover: false
		}],
			provideRouteAlternatives: false,
			travelMode: 'DRIVING',
			unitSystem: google.maps.UnitSystem.METRIC
	};
	
	//busline 305
	bus305 = {
		origin: 'Oss',
		destination: 'Eindhoven',
		//origin:'51.7651657,5.5303004',
		//destination:'51.44373334,5.47867879',
		waypoints: [
		{
			location: 'Heesch',
			stopover: false
		},{
			location: 'Nistelrode',
			stopover: false
		},{
			location: 'Uden',
			stopover: false
		},{
			location: 'Uden',
			stopover: false
		},{
			location: 'Veghel',
			stopover: false
		}],
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
			stopover: false
		},{
			location: 'Veghel',
			stopover: false
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
	
	buslines = [bus020,bus022,bus024,bus121,bus305,bus306];
	busnames = ['020 Helmond - Eindhoven','022 Helmond - Eindhoven','024 Helmond - Eindhoven','121 Uden - Eindhoven','305 Oss - Eindhoven','306 Oss - Den Bosch'];
	/*
	if(buslines.length > 0){
		showLine(buslines);
	}
	*/
}