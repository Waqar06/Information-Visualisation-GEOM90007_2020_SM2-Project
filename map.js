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
		
		new mapboxgl.Popup()
		.setLngLat(e.lngLat)
		.setHTML('<h4>Live Music Venues</h4><img src="Images/lm_01.png" style="width:100%; height:100px;"><p>Lorem ipsum dolor sit amet, Eu epicurei delicata accommodare nam. Eu propriae omnesque vel, est cu vero erat integre.</p><h2></h2>')
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