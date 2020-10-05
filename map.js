mapboxgl.accessToken = 'pk.eyJ1IjoicGFwYWtoaW4iLCJhIjoiY2tldHV6djFwMjg4MjJ5c2F1NWZpdnJ3ZSJ9.-vTJowNTOjlikU7GhVD3HA'; 
	var map = new mapboxgl.Map({
	  container: 'map',
	  style: 'mapbox://styles/papakhin/cketvda3s6ohy19mxh61465sm'
	});
	map.on('load', function() {
	var layers = ['Completed', 'Under Construction', 'Approved', 'Applied'];

	var colors = ['#6A51A4', '#9E9AC8', '#CCCAE2', '#F1EEF6'];
	for (i = 0; i < layers.length; i++) {
	 var layer = layers[i];
	 var color = colors[i];
	 var item = document.createElement('div');
	 var key = document.createElement('span');
	 key.className = 'legend-key';
	 key.style.backgroundColor = color;
	 var value = document.createElement('span');
	 value.innerHTML = layer;
	 item.appendChild(key);
	 item.appendChild(value);
	 
	}
	});
	map.addControl(new mapboxgl.NavigationControl());