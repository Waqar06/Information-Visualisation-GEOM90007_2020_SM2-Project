mapboxgl.accessToken = 'pk.eyJ1Ijoic2FuaXN1enphbWFuIiwiYSI6ImNrZXVuMnVvcTFjanMycHNhbjdxM2N6eGMifQ.KR21Chk0yGFmjK8d7Y0fHg'; 
	var map = new mapboxgl.Map({
	  container: 'map',
	  style: 'mapbox://styles/sanisuzzaman/ckg49ouvv1crg19o0vajk9q00',
	  center: [144.9, -37.8],
	  zoom: 13
	});
	map.on('load', function() {

 
});
	map.on('click', 'live-music-venues', function(e) {
		debugger;
		new mapboxgl.Popup()
		.setLngLat(e.lngLat)
		.setHTML('<h4>Live Music Venues</h4><img src="Images/lm_01.png" style="width:100%; height:100px;"><p>Lorem ipsum dolor sit amet, Eu epicurei delicata accommodare nam. Eu propriae omnesque vel, est cu vero erat integre.</p><h2></h2>')
		.addTo(map);
	});
	map.on('click', 'leisure-recreation-3ti81d', function(e) {
		
		new mapboxgl.Popup()
		.setLngLat(e.lngLat)
		.setHTML("<div class='pop_h1'>"+e.features[0].properties.venue_name +"</div><div class='pop_h2'>"+ e.features[0].properties.venue_address+"</div>")
		.addTo(map);
	});

	map.on('click', 'acquirum', function(e) {
		
		new mapboxgl.Popup()
		.setLngLat(e.lngLat)
		.setHTML("<div class='pop_h1'>"+e.features[0].properties.venue_name +"</div><div class='pop_h2'>"+ e.features[0].properties.venue_address+"</div>")
		.addTo(map);
	});
	map.on('click', 'art-gallery-museum', function(e) {
		
		new mapboxgl.Popup()
		.setLngLat(e.lngLat)
		.setHTML("<div class='pop_h1'>"+e.features[0].properties.Sub_Theme+"</div><div class='pop_h2'>"+ e.features[0].properties.Feature_Na+"</div>")
		.addTo(map);
	});
	map.on('click', 'cinema-theatres', function(e) {
		
		new mapboxgl.Popup()
		.setLngLat(e.lngLat)
		.setHTML("<div class='pop_h1'>"+e.features[0].properties.venue_name +"</div><div class='pop_h2'>"+ e.features[0].properties.venue_address+"</div>")
		.addTo(map);
	});
	map.on('click', 'place-of-worship', function(e) {
		
		new mapboxgl.Popup()
		.setLngLat(e.lngLat)
		.setHTML("<div class='pop_h1'>"+e.features[0].properties["Sub Theme"] +"</div><div class='pop_h2'>"+ e.features[0].properties["Feature Name"]+"</div>")
		.addTo(map);
	});
	map.on('click', 'public-buildings-80629m', function(e) {
		
		new mapboxgl.Popup()
		.setLngLat(e.lngLat)
		.setHTML("<div class='pop_h1'>"+e.features[0].properties.venue_name +"</div><div class='pop_h2'>"+ e.features[0].properties.venue_address+"</div>")
		.addTo(map);
	});
	map.on('click', 'flim-and-rv-studio-5xi2kd', function(e) {
		
		new mapboxgl.Popup()
		.setLngLat(e.lngLat)
		.setHTML("<div class='pop_h1'>"+e.features[0].properties.venue_name +"</div><div class='pop_h2'>"+ e.features[0].properties.venue_address+"</div>")
		.addTo(map);
	});
	map.on('click', 'railway-stations-7oimn5', function(e) {
		
		new mapboxgl.Popup()
		.setLngLat(e.lngLat)
		.setHTML("<div class='pop_h1'>"+e.features[0].properties.STATIONAM +"</div>")
		.addTo(map);
	});
	map.on('click', 'cafe-and-restaurents-melbourn-0ajg45', function(e) {
		
		new mapboxgl.Popup()
		.setLngLat(e.lngLat)
		.setHTML("<div class='pop_h1'>"+e.features[0].properties.trading_na +"</div><div class='pop_h2'>"+ e.features[0].properties.Street_add+"</div>")
		.addTo(map);
	});
	
	map.on('click', 'outdoor-artworks', function(e) {
		
		new mapboxgl.Popup()
		.setLngLat(e.lngLat)
		.setHTML("<div class='pop_h1'>"+e.features[0].properties.venue_name +"</div><div class='pop_h2'>"+ e.features[0].properties.venue_address+"</div>")
		.addTo(map);
	});
	map.on('click', 'taxi-ranks-melbourne', function(e) {
		
		new mapboxgl.Popup()
		.setLngLat(e.lngLat)
		.setHTML("<div class='pop_h1'>"+e.features[0].properties.loc_desc +"</div>")
		.addTo(map);
	});
	map.on('click', 'city-circle-tram-stops', function(e) {
		
		new mapboxgl.Popup()
		.setLngLat(e.lngLat)
		.setHTML("<div class='pop_h1'>"+e.features[0].properties.venue_name +"</div><div class='pop_h2'>"+ e.features[0].properties.venue_address+"</div>")
		.addTo(map);
	});
	map.on('click', 'Bus_stop-visitor-shuttler', function(e) {
		
		new mapboxgl.Popup()
		.setLngLat(e.lngLat)
		.setHTML("<div class='pop_h1'>"+e.features[0].properties.venue_name +"</div><div class='pop_h2'>"+ e.features[0].properties.venue_address+"</div>")
		.addTo(map);
	});

	map.addControl(new mapboxgl.NavigationControl());

	map.addControl(
new MapboxDirections({
accessToken: mapboxgl.accessToken
}),
'top-left'
);

// Add geolocate control to the map.
map.addControl(
new mapboxgl.GeolocateControl({
positionOptions: {
enableHighAccuracy: true
},
trackUserLocation: true
})
);