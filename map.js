mapboxgl.accessToken = 'pk.eyJ1Ijoic2FuaXN1enphbWFuIiwiYSI6ImNrZXVuMnVvcTFjanMycHNhbjdxM2N6eGMifQ.KR21Chk0yGFmjK8d7Y0fHg';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/sanisuzzaman/ckg49ouvv1crg19o0vajk9q00',
	center: [144.955, -37.814],
	zoom: 14.5
});
var language = new MapboxLanguage();

document
	.getElementById('buttons')
	.addEventListener('click', function (event) {
		var language = event.target.id.substr('button-'.length);
		// Use setLayoutProperty to set the value of a layout property in a style layer.
		// The three arguments are the id of the layer, the name of the layout property,
		// and the new property value.

		map.getStyle().layers.forEach(function (thisLayer) {
		
			if (thisLayer.type == 'symbol') {
				map.setLayoutProperty(thisLayer.id, 'text-field', ['get', 'name_' + language])
			}
		})
	});




map.on('load', function () {
	HideAlllayers();

});
var toggleableLayerIds = ['art-gallery-museum-visitor-info', 'public-buildings-universities', 'leisure-recreation', 'hotels-accomodations', 'cinema-theatres',
	'place-of-worship', 'flim-and-rv-studio', 'railway-stations', 'cafe-and-restaurents-melbourn', 'live-music-venues', 'outdoor-artworks', 'taxi-ranks-melbourne', 'city-circle-tram-stops', 'Bus_stop-visitor-shuttler'];
function HideAlllayers() {
	for (var i = 0; i < toggleableLayerIds.length; i++) {
		var id = toggleableLayerIds[i];
		var visibility = map.getLayoutProperty(id, 'visibility');
		map.setLayoutProperty(id, 'visibility', 'none');
	}
}

var popup = new mapboxgl.Popup({
	closeButton: true,
	closeOnClick: false
});
map.on('mouseenter', 'art-gallery-museum-visitor-info', function (e) {

	popup
		.setLngLat(e.lngLat)
		.setHTML("<div class='pop_h'> Art Gallery Museum</div><div class='pop_h1'>" + e.features[0].properties["Feature Name"] + "</div><div class='pop_h2'>" + e.features[0].properties["Theme"] + "</div>")
		.addTo(map);
});
map.on('mouseleave', 'art-gallery-museum-visitor-info', function () {
	map.getCanvas().style.cursor = '';
});
map.on('mouseenter', 'public-buildings-universities', function (e) {

	popup
		.setLngLat(e.lngLat)
		.setHTML("<div class='pop_h'> Public Building</div><div class='pop_h1'>" + e.features[0].properties["Feature Name"] + "</div><div class='pop_h2'>" + e.features[0].properties["Theme"] + "</div>")
		.addTo(map);
});
map.on('mouseleave', 'public-buildings-universities', function () {
	map.getCanvas().style.cursor = '';
});
map.on('mouseenter', 'leisure-recreation', function (e) {

	popup
		.setLngLat(e.lngLat)
		.setHTML("<div class='pop_h'> Recreational Area</div><div class='pop_h1'>" + e.features[0].properties["Feature Name"] + "</div><div class='pop_h2'>" + e.features[0].properties["Sub Theme"] + "</div>")
		.addTo(map);
});
map.on('mouseleave', 'leisure-recreation', function () {
	map.getCanvas().style.cursor = '';
});
map.on('mouseenter', 'hotels-accomodations', function (e) {

	popup
		.setLngLat(e.lngLat)
		.setHTML("<div class='pop_h'> Hotel and Accomodation</div><div class='pop_h1'>" + e.features[0].properties.Name + "</div><div class='pop_h2'>" + e.features[0].properties.Address + "</div><div class='popup_link'><a href='https://www.booking.com/' target='_blank'> Book Now</a></div>")
		.addTo(map);
});
map.on('mouseleave', 'hotels-accomodations', function () {
	map.getCanvas().style.cursor = '';
});
map.on('mouseenter', 'cinema-theatres', function (e) {

	popup
		.setLngLat(e.lngLat)
		.setHTML("<div class='pop_h'> Cinemas Theatre</div><div class='pop_h1'>" + e.features[0].properties["Feature Name"] + "</div><div class='pop_h2'>" + e.features[0].properties["Sub Theme"] + "</div>")
		.addTo(map);
});
map.on('mouseleave', 'cinema-theatres', function () {
	map.getCanvas().style.cursor = '';
});
map.on('mouseenter', 'place-of-worship', function (e) {

	popup
		.setLngLat(e.lngLat)
		.setHTML("<div class='pop_h'> Place of Workship</div><div class='pop_h1'>" + e.features[0].properties["Sub Theme"] + "</div><div class='pop_h2'>" + e.features[0].properties["Feature Name"] + "</div>")
		.addTo(map);
});
map.on('mouseleave', 'place-of-worship', function () {
	map.getCanvas().style.cursor = '';
});
map.on('mouseenter', 'flim-and-rv-studio', function (e) {
	map.getCanvas().style.cursor = 'pointer';
	popup
		.setLngLat(e.lngLat)
		.setHTML("<div class='pop_h'> Film and RV studio</div><div class='pop_h1'>" + e.features[0].properties["Feature Name"] + "</div>")
		.addTo(map);
});
map.on('mouseleave', 'flim-and-rv-studio', function () {
	map.getCanvas().style.cursor = '';
});
map.on('mouseenter', 'railway-stations', function (e) {

	popup
		.setLngLat(e.lngLat)
		.setHTML("<div class='pop_h'> Railway Station</div><div class='pop_h1'>" + e.features[0].properties["Feature Name"] + "</div>")
		.addTo(map);
});
map.on('mouseleave', 'railway-stations', function () {
	map.getCanvas().style.cursor = '';
});
map.on('mouseenter', 'cafe-and-restaurents-melbourn', function (e) {

	popup
		.setLngLat(e.lngLat)
		.setHTML("<div class='pop_h'> Cafe and Restaturant</div><div class='pop_h1'>" + e.features[0].properties["Trading name"] + "</div><div class='pop_h2'>" + e.features[0].properties["Street address"] + "</div>")
		.addTo(map);
});
map.on('mouseleave', 'cafe-and-restaurents-melbourn', function () {
	map.getCanvas().style.cursor = '';
});
map.on('mouseenter', 'live-music-venues', function (e) {

	popup
		.setLngLat(e.lngLat)
		.setHTML("<div class='pop_h'> Live Music</div><div class='pop_h1'>" + e.features[0].properties.venue_name + "</div><div class='pop_h2'>" + e.features[0].properties.venue_address + "</div>")
		.addTo(map);
});
map.on('mouseleave', 'live-music-venues', function () {
	map.getCanvas().style.cursor = '';
});

map.on('mouseenter', 'outdoor-artworks', function (e) {

	popup
		.setLngLat(e.lngLat)
		.setHTML("<div class='pop_h'> Outdoor Artwork</div><div class='pop_h1'>" + e.features[0].properties.title + "</div><div class='pop_h2'>" + e.features[0].properties.classification + "</div>")
		.addTo(map);
});
map.on('mouseleave', 'outdoor-artworks', function () {
	map.getCanvas().style.cursor = '';
});
map.on('mouseenter', 'taxi-ranks-melbourne', function (e) {

	popup
		.setLngLat(e.lngLat)
		.setHTML("<div class='pop_h'> Taxi Rank</div><div class='pop_h1'> " + e.features[0].properties.loc_desc + "</div>")
		.addTo(map);
});
map.on('mouseleave', 'taxi-ranks-melbourne', function () {
	map.getCanvas().style.cursor = '';
});
map.on('mouseenter', 'city-circle-tram-stops', function (e) {

	popup
		.setLngLat(e.lngLat)
		.setHTML("<div class='pop_h'> City Circle Tram Stop</div><div class='pop_h1'>" + e.features[0].properties.name + "</div>")
		.addTo(map);
});
map.on('mouseleave', 'city-circle-tram-stops', function () {
	map.getCanvas().style.cursor = '';
});
map.on('mouseenter', 'Bus_stop-visitor-shuttler', function (e) {

	popup
		.setLngLat(e.lngLat)
		.setHTML("<div class='pop_h'> Shuttle Bus Stop</div><div class='pop_h1'>" + e.features[0].properties.Name + "</div><div class='pop_h2'>" + e.features[0].properties.Address + "</div>")
		.addTo(map);
});

map.on('mouseleave', 'Bus_stop-visitor-shuttler', function () {
	map.getCanvas().style.cursor = '';
});


map.addControl(
	new MapboxGeocoder({
	accessToken: mapboxgl.accessToken,
	mapboxgl: mapboxgl,
	proximity: {
		longitude: -144.9631,
		latitude: 37.8136
	  }
	}),'top-left'
	);
	
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





/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function ShowHideLayerFunc(checkbox, layerid) {

	var clickedLayer = layerid;
	var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
	if (checkbox.checked) {
		map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
	} else {
		map.setLayoutProperty(clickedLayer, 'visibility', 'none');
	}


}
function OpenDirection(radiobutton) {
	var value = radiobutton.value;
	if (value == "rdbDOn") {
		MapboxDirections.visibility = true;
		// $('#map .mapbox-ctrl-top-left').show();
	}

	else if (value == "rdbDOff") {
		MapboxDirections.visibility = false;
		// $('#map .mapbox-ctrl-top-left').hide();
	}

}
